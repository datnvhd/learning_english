/**
 * ============================================================================
 *  exam.service.ts – Tạo đề IELTS/TOEIC, chấm bài viết và quy đổi điểm ước tính
 * ============================================================================
 *  - build(section)          : sinh câu hỏi cho từng phần thi (luyện riêng)
 *  - buildMock(exam, variant): sinh bài thi thử rút gọn có giới hạn thời gian
 *                              (TOEIC có 2 loại: 'lr' Listening & Reading, 'sw' Speaking & Writing)
 *  - buildTest(exam, no)     : một đề CỐ ĐỊNH trong bộ 20 đề IELTS / 20 đề TOEIC (data/exam/tests)
 *  - analyzeEssay(...)       : phân tích bài viết → band IELTS hoặc điểm TOEIC (0–4 / 0–5)
 *  - gradePicSentence(...)   : chấm câu viết theo tranh TOEIC Writing Q1–5 (0–3)
 *  - summarize(...)          : quy đổi kết quả sang band IELTS hoặc điểm TOEIC (mang tính ước lượng)
 *
 *  Lưu ý quan trọng: điểm quy đổi chỉ là ƯỚC TÍNH để bạn theo dõi tiến bộ, không thay thế
 *  chấm điểm chính thức. Writing/Speaking không thể chấm tự động chính xác như giám khảo.
 */
import { rawToBand, scoreToBand, toeicLrScaled, toeicSwLevel, toeicSwScaled } from './exam-score';
import { Injectable, inject } from '@angular/core';
import { Dialogue } from '../models/content.model';
import {
  ExamAudio, ExamFill, ExamId, ExamKind, ExamMcq, ExamPassage, ExamSectionId, MockVariant, SpeakingItem, ToeicPhotoItem, WritingTask,
} from '../models/exam.model';
import { McqQuestion, PicWriteQuestion, Question, SessionResult, TalkQuestion, TypeQuestion } from '../models/question.model';
import { IELTS_LISTENING, IELTS_READING, IELTS_SPEAKING, IELTS_WRITING } from '../data/exam/ielts';
import { Part2Item, Part5Item, TOEIC_PART2, TOEIC_PART3, TOEIC_PART4, TOEIC_PART5, TOEIC_PART6, TOEIC_PART7 } from '../data/exam/toeic';
import { TOEIC_PART1 } from '../data/exam/toeic-part1';
import {
  TOEIC_PART2_MORE, TOEIC_PART3_MORE, TOEIC_PART4_MORE, TOEIC_PART5_MORE, TOEIC_PART6_MORE, TOEIC_PART7_MORE,
} from '../data/exam/toeic-more';
import {
  TOEIC_S_INFO, TOEIC_S_OPINION, TOEIC_S_PICTURE, TOEIC_S_READ, TOEIC_S_RESPOND, TOEIC_W_EMAIL, TOEIC_W_OPINION, TOEIC_W_PICTURE,
} from '../data/exam/toeic-sw';
import { SECTION_BY_ID } from '../data/exam/sections';
import { FULL_TESTS, formatOf } from '../data/exam/tests/catalog';
import { photoOf } from './photos';
import { pct, sample, shuffle } from './text-utils';
import { VocabService } from './vocab.service';

/** Kết quả phân tích một bài viết */
export interface EssayAnalysis {
  words: number;
  sentences: number;
  paragraphs: number;
  avgSentence: number;
  /** Tỉ lệ từ không lặp (đa dạng từ vựng) */
  uniqueRatio: number;
  linking: number;
  academic: number;
  /** Band ước tính (IELTS, làm tròn 0.5) hoặc điểm TOEIC (0–4 / 0–5) */
  band: number;
  /** Nhãn hiển thị, ví dụ "Band 6.5" hoặc "3/4 điểm" */
  label: string;
  /** Điểm 0..1 dùng cho thống kê tiến độ */
  score: number;
  parts: { label: string; value: number; note: string }[];
  advice: string[];
}

/** Kết quả chấm câu viết theo tranh (TOEIC Writing Q1–5) */
export interface PicSentenceGrade {
  /** 0–3 theo thang TOEIC */
  points: number;
  /** Từ bắt buộc nào đã dùng */
  used: [boolean, boolean];
  notes: string[];
}

/** Bản tóm tắt điểm hiển thị ở màn hình kết quả */
export interface ExamSummary {
  headline: string;
  rows: { label: string; value: string }[];
  note: string;
  /** Nhãn ngắn lưu vào lịch sử */
  label: string;
}

/** Danh sách từ nối thường dùng trong Writing */
const LINKERS = [
  'however', 'moreover', 'furthermore', 'in addition', 'therefore', 'consequently', 'as a result', 'for example', 'for instance',
  'in conclusion', 'to sum up', 'on the other hand', 'whereas', 'nevertheless', 'although', 'while', 'firstly', 'secondly',
  'finally', 'in contrast', 'by contrast', 'overall', 'despite', 'similarly', 'besides', 'thus', 'meanwhile', 'in particular',
];

/** Kho đề TOEIC gộp bộ gốc + bộ bổ sung */
const P2 = [...TOEIC_PART2, ...TOEIC_PART2_MORE];
const P3 = [...TOEIC_PART3, ...TOEIC_PART3_MORE];
const P4 = [...TOEIC_PART4, ...TOEIC_PART4_MORE];
const P5 = [...TOEIC_PART5, ...TOEIC_PART5_MORE];
const P6: ExamPassage[] = [...TOEIC_PART6, ...TOEIC_PART6_MORE];
const P7: ExamPassage[] = [...TOEIC_PART7, ...TOEIC_PART7_MORE];

/** Lời dẫn của từng phần thi (dùng chung cho luyện riêng, thi thử và đề cố định) */
const PROMPT = {
  p3: 'Part 3 · Nghe hội thoại và trả lời câu hỏi.',
  p4: 'Part 4 · Nghe bài nói và trả lời câu hỏi.',
  p6: 'Part 6 · Chọn từ hoặc câu điền vào chỗ trống trong đoạn văn.',
  p7: 'Part 7 · Đọc và trả lời câu hỏi.',
  reading: 'Reading · Đọc bài và trả lời (True/False/Not Given, trắc nghiệm, điền câu).',
};

/** Lời thoại kèm bản dịch (nếu có) – hiển thị ở phần giải thích sau khi làm bài */
const transcript = (lines: ExamAudio['lines']): string => lines.map((l) => `${l.who}: ${l.text}${l.vi ? ` (${l.vi})` : ''}`).join('\n');

/**
 * 4 ảnh Part 1 của đề cố định số `no`: kho ảnh offline có hạn nên các đề đầu dùng ảnh không trùng nhau,
 * các đề sau ghép lại theo bước nhảy khác để mỗi đề vẫn là một tổ hợp riêng.
 */
export function part1ForTest(no: number): ToeicPhotoItem[] {
  const pool = TOEIC_PART1.filter((it) => photoOf(it.photo));
  // Đề đầy đủ: 6 ảnh liên tiếp trong kho, mỗi đề lệch 6 vị trí nên không đề nào trùng trọn bộ ảnh
  if (no <= FULL_TESTS.toeic) return [0, 1, 2, 3, 4, 5].map((i) => pool[((no - 1) * 6 + i) % pool.length]);
  const unique = Math.floor(pool.length / 4);
  const at = (i: number) => (no <= unique ? (no - 1) * 4 + i : (no - unique - 1) * 5 + i * 11 + 2);
  return [0, 1, 2, 3].map((i) => pool[at(i) % pool.length]);
}

/** Số câu trong kho đề của mỗi phần TOEIC (hiển thị ở trang Luyện thi) */
export const TOEIC_BANK_SIZE: Partial<Record<ExamSectionId, number>> = {
  'toeic-part1': TOEIC_PART1.length,
  'toeic-part2': P2.length,
  'toeic-part3': P3.reduce((n, a) => n + a.mcq.length, 0),
  'toeic-part4': P4.reduce((n, a) => n + a.mcq.length, 0),
  'toeic-part5': P5.length,
  'toeic-part6': P6.reduce((n, a) => n + a.mcq.length, 0),
  'toeic-part7': P7.reduce((n, a) => n + a.mcq.length, 0),
  'toeic-s-read': TOEIC_S_READ.length,
  'toeic-s-picture': TOEIC_S_PICTURE.length,
  'toeic-s-respond': TOEIC_S_RESPOND.length * 3,
  'toeic-s-info': TOEIC_S_INFO.length * 3,
  'toeic-s-opinion': TOEIC_S_OPINION.length,
  'toeic-w-picture': TOEIC_W_PICTURE.length,
  'toeic-w-email': TOEIC_W_EMAIL.length,
  'toeic-w-opinion': TOEIC_W_OPINION.length,
};

export { rawToBand, scoreToBand, toeicLrScaled, toeicSwLevel, toeicSwScaled };

/**
 * Chấm câu viết theo tranh (TOEIC Writing Q1–5) theo tiêu chí gần với thang 0–3 của ETS:
 *  - 3: một câu hoàn chỉnh, dùng đủ 2 từ, hình thức chuẩn (viết hoa, dấu câu)
 *  - 2: dùng đủ 2 từ nhưng câu có lỗi hình thức / quá ngắn / nhiều câu
 *  - 1: chỉ dùng được 1 từ, hoặc câu không hoàn chỉnh
 *  - 0: bỏ trống hoặc không dùng từ nào
 * Không thể chấm ngữ pháp và mức độ phù hợp với ảnh chính xác như giám khảo → luôn kèm câu mẫu.
 */
export function gradePicSentence(text: string, words: [string[], string[]]): PicSentenceGrade {
  const clean = text.trim().replace(/\s+/g, ' ');
  const lower = ' ' + clean.toLowerCase().replace(/[^a-z' ]/g, ' ').replace(/\s+/g, ' ') + ' ';
  const has = (forms: string[]) => forms.some((f) => lower.includes(' ' + f.toLowerCase() + ' '));
  const used: [boolean, boolean] = [has(words[0]), has(words[1])];
  const notes: string[] = [];
  const count = clean ? clean.split(' ').length : 0;
  if (!count) return { points: 0, used, notes: ['Bạn chưa viết câu nào.'] };

  const both = used[0] && used[1];
  if (!used[0]) notes.push(`Chưa dùng từ "${words[0][0]}".`);
  if (!used[1]) notes.push(`Chưa dùng từ "${words[1][0]}".`);
  const sentences = clean.split(/(?<=[.!?])\s+/).filter((s) => s.trim().length > 0);
  const formOk = /^[A-Z]/.test(clean) && /[.!?]$/.test(clean);
  if (!/^[A-Z]/.test(clean)) notes.push('Viết hoa chữ cái đầu câu.');
  if (!/[.!?]$/.test(clean)) notes.push('Kết thúc câu bằng dấu chấm.');
  if (sentences.length > 1) notes.push('Đề yêu cầu chỉ viết MỘT câu.');
  if (count < 5) notes.push('Câu quá ngắn – hãy thêm chủ ngữ, động từ và chi tiết về ảnh.');

  // Lỗi dùng từ dễ nhận ra: từ bắt buộc là ĐỘNG TỪ (có nhiều dạng chia) nhưng lại đứng sau mạo từ/tính từ sở hữu
  // như một danh từ, ví dụ "near the arrive" → sai ngữ pháp
  let misuse = false;
  words.forEach((forms, i) => {
    if (forms.length < 4 || !used[i]) return;
    const re = new RegExp(`\\b(the|a|an|this|that|my|his|her|their|its|our|your)\\s+(${forms.join('|')})\\b(?!\\s+(of|for)\\b)`, 'i');
    if (re.test(clean)) {
      misuse = true;
      notes.push(`"${forms[0]}" là động từ – không dùng ngay sau "the/a/my..." như danh từ.`);
    }
  });

  // Hòa hợp chủ ngữ – động từ với từ bắt buộc là danh từ: "people is" / "The table are..." (chủ ngữ đầu câu) → sai
  const IRREGULAR_PLURALS = ['people', 'children', 'women', 'men', 'police'];
  words.forEach((forms, i) => {
    if (forms.length >= 4 || !used[i]) return;
    const plurals = forms.filter((f, k) => k > 0 || IRREGULAR_PLURALS.includes(f));
    const singular = IRREGULAR_PLURALS.includes(forms[0]) ? [] : [forms[0]];
    const pl = plurals.length && new RegExp(`\\b(${plurals.join('|')})\\s+(is|was|has)\\b`, 'i').test(clean);
    const sg = singular.length && new RegExp(`^(a|an|the|this|that)\\s+(${singular.join('|')})\\s+(are|were|have)\\b`, 'i').test(clean);
    if (pl || sg) {
      misuse = true;
      notes.push(pl ? `"${plurals[0]}" là số nhiều → dùng are / were / have.` : `"${forms[0]}" là số ít → dùng is / was / has.`);
    }
  });

  let points: number;
  if (!used[0] && !used[1]) points = 0;
  else if (!both || count < 4) points = 1;
  else points = formOk && sentences.length === 1 && count >= 5 && !misuse ? 3 : 2;
  if (points === 3) notes.push('Câu dùng đủ từ và đúng hình thức. Hãy đối chiếu ngữ pháp với câu mẫu bên dưới.');
  return { points, used, notes };
}

@Injectable({ providedIn: 'root' })
export class ExamService {
  private readonly vocab = inject(VocabService);
  private seq = 0;

  private id(): string {
    return `x${this.seq++}`;
  }

  // =====================================================================
  //  TẠO ĐỀ
  // =====================================================================

  /** Sinh câu hỏi cho một phần thi (luyện riêng) */
  build(section: ExamSectionId, count?: number): Question[] {
    const info = SECTION_BY_ID[section];
    const n = count ?? info.count;
    switch (section) {
      case 'toeic-part1': return this.toeicPart1(n);
      case 'toeic-part2': return this.toeicPart2(n);
      case 'toeic-part3': return this.audioSet(P3, n, PROMPT.p3);
      case 'toeic-part4': return this.audioSet(P4, n, PROMPT.p4);
      case 'toeic-part5': return this.toeicPart5(n);
      case 'toeic-part6': return this.passageSet(P6, n, PROMPT.p6, 'toeic');
      case 'toeic-part7': return this.passageSet(P7, n, PROMPT.p7, 'toeic');
      case 'toeic-s-read': return this.talks(sample(TOEIC_S_READ, n), 45, 45);
      case 'toeic-s-picture': return this.talks(sample(TOEIC_S_PICTURE, n), 45, 30);
      case 'toeic-s-respond': return this.respondSet();
      case 'toeic-s-info': return this.infoSet();
      case 'toeic-s-opinion': return this.talks(sample(TOEIC_S_OPINION, n), 45, 60);
      case 'toeic-w-picture': return this.picWrite(n);
      case 'toeic-w-email': return this.essays(sample(TOEIC_W_EMAIL, n), 'Writing Q6–7 · Trả lời email (10 phút)');
      case 'toeic-w-opinion': return this.essays(sample(TOEIC_W_OPINION, n), 'Writing Q8 · Bài luận nêu quan điểm (30 phút)');
      case 'ielts-listening': return this.ieltsAudio(n);
      case 'ielts-reading': return this.ieltsReading(n);
      case 'ielts-writing': return this.ieltsWriting(n);
      case 'ielts-speaking': return this.ieltsSpeaking();
    }
  }

  /** Bài thi thử rút gọn (có giới hạn thời gian) */
  buildMock(exam: ExamId, variant: MockVariant = 'lr'): { questions: Question[]; minutes: number } {
    if (exam === 'toeic' && variant === 'sw') {
      return {
        minutes: 55,
        questions: [
          // Speaking: Q1 → Q3 → Q5–7 → Q8–10 → Q11 (đúng thứ tự đề thật)
          ...this.talks(sample(TOEIC_S_READ, 1), 45, 45),
          ...this.talks(sample(TOEIC_S_PICTURE, 1), 45, 30),
          ...this.respondSet(),
          ...this.infoSet(),
          ...this.talks(sample(TOEIC_S_OPINION, 1), 45, 60),
          // Writing: Q1–5 (rút gọn 2 câu) → Q6–7 (1 email) → Q8
          ...this.picWrite(2),
          ...this.essays(sample(TOEIC_W_EMAIL, 1), 'Writing Q6–7 · Trả lời email (10 phút)'),
          ...this.essays(sample(TOEIC_W_OPINION, 1), 'Writing Q8 · Bài luận nêu quan điểm (30 phút)'),
        ],
      };
    }
    if (exam === 'toeic') {
      return {
        minutes: 38,
        questions: [
          ...this.toeicPart1(4), ...this.toeicPart2(8),
          ...this.audioSet(P3, 6, PROMPT.p3), ...this.audioSet(P4, 6, PROMPT.p4), ...this.toeicPart5(12),
          ...this.passageSet(P6, 6, PROMPT.p6, 'toeic'), ...this.passageSet(P7, 9, PROMPT.p7, 'toeic'),
        ],
      };
    }
    const listening = this.ieltsAudio(9);
    const reading = this.ieltsReading(7);
    const writing = this.ieltsWriting(1, 2);
    const speaking = this.ieltsSpeaking();
    return { minutes: 80, questions: [...listening, ...reading, ...writing, ...speaking] };
  }

  /**
   * Đề cố định số `no` trong bộ đề (data/exam/tests): nội dung giữ nguyên giữa các lần làm, chỉ thứ tự đáp án được xáo.
   * Dữ liệu đề được nạp động để không làm nặng lần mở app đầu tiên. Trả về null nếu không có đề đó.
   */
  async buildTest(exam: ExamId, no: number): Promise<{ questions: Question[]; minutes: number } | null> {
    const minutes = formatOf(exam, no).minutes;
    if (exam === 'toeic') {
      const t = (await import('../data/exam/tests/toeic-all')).TOEIC_TESTS.find((x) => x.no === no);
      if (!t) return null;
      return {
        minutes,
        questions: [
          ...this.part1Of(part1ForTest(no)), ...this.part2Of(t.part2),
          ...this.audioQs(t.part3, () => PROMPT.p3, 'toeic'), ...this.audioQs(t.part4, () => PROMPT.p4, 'toeic'),
          ...this.part5Of(t.part5), ...this.passageQs(t.part6, PROMPT.p6, 'toeic'), ...this.passageQs(t.part7, PROMPT.p7, 'toeic'),
        ],
      };
    }
    const t = (await import('../data/exam/tests/ielts-all')).IELTS_TESTS.find((x) => x.no === no);
    if (!t) return null;
    return {
      minutes,
      questions: [
        ...this.audioQs(t.listening, (a) => `Listening · ${a.title}`, 'ielts'), ...this.passageQs(t.reading, PROMPT.reading, 'ielts'),
        ...this.ieltsEssays(t.writing), ...this.ieltsTalks(t.speaking),
      ],
    };
  }

  // ---------------------------------------------------------------------
  //  TOEIC LISTENING & READING
  // ---------------------------------------------------------------------

  /** Part 1: ảnh + 4 câu mô tả chỉ được nghe (đọc lần lượt "(A) ...", "(B) ...") */
  private toeicPart1(n: number): Question[] {
    return this.part1Of(sample(TOEIC_PART1.filter((it) => photoOf(it.photo)), n));
  }

  private part1Of(items: ToeicPhotoItem[]): Question[] {
    return items.map((it) => {
      const options = shuffle([it.a, ...it.wrong]);
      const answer = options.indexOf(it.a);
      const q: McqQuestion = {
        id: this.id(), kind: 'mcq', skill: 'listening', prompt: 'Part 1 · Nhìn ảnh, nghe 4 câu mô tả và chọn câu đúng nhất.',
        image: photoOf(it.photo)?.src, audioParts: ['Look at the picture.', ...options.map((o, i) => `${'ABCD'[i]}. ${o}`)],
        autoPlay: true, hideOptions: true, options, answer, topicId: 'toeic', longOptions: true,
        explain: `(${'ABCD'[answer]}) ${it.a}\n→ ${it.vi}\n${it.ex}`,
      };
      return q;
    });
  }

  /** Part 2: nghe câu hỏi rồi 3 câu đáp (chỉ nghe, như đề thật) */
  private toeicPart2(n: number): Question[] {
    return this.part2Of(sample(P2, n));
  }

  private part2Of(items: Part2Item[]): Question[] {
    return items.map(([q, a, w1, w2, ex]) => {
      const options = shuffle([a, w1, w2]);
      const item: McqQuestion = {
        id: this.id(), kind: 'mcq', skill: 'listening', prompt: 'Part 2 · Nghe câu hỏi/câu nói và 3 câu đáp, chọn câu phù hợp nhất.',
        audio: q, audioParts: [q, ...options.map((o, i) => `${'ABC'[i]}. ${o}`)], hideText: true, hideOptions: true, autoPlay: true,
        options, answer: options.indexOf(a), topicId: 'toeic', longOptions: true,
        explain: `${q}\n→ ${a}\n${ex}`,
      };
      return item;
    });
  }

  private toeicPart5(n: number): Question[] {
    return this.part5Of(sample(P5, n));
  }

  private part5Of(items: Part5Item[]): Question[] {
    return items.map(([sentence, a, w1, w2, w3, ex]) => {
      const options = shuffle([a, w1, w2, w3]);
      const q: McqQuestion = {
        id: this.id(), kind: 'mcq', skill: 'reading', prompt: 'Part 5 · Chọn từ/cụm từ điền vào chỗ trống.', focus: sentence,
        options, answer: options.indexOf(a), topicId: 'toeic', explain: `${sentence.replace('____', a)}\n${ex}`,
      };
      return q;
    });
  }

  // ---------------------------------------------------------------------
  //  TOEIC SPEAKING & WRITING
  // ---------------------------------------------------------------------

  /** Chuyển đề nói thành câu hỏi 'talk' với thời gian chuẩn bị/nói theo đề thật */
  private talks(items: SpeakingItem[], prep: number, speak: number): TalkQuestion[] {
    return items.map((item) => ({
      id: this.id(), kind: 'talk' as const, skill: 'speaking' as const, prompt: `Speaking · ${item.label ?? item.title}`,
      item, prepSeconds: prep, speakSeconds: speak, topicId: 'toeic' as const, explain: item.sample,
    }));
  }

  /** Q5–7: một bộ 3 câu cùng bối cảnh; 3 giây chuẩn bị, nói 15/15/30 giây */
  private respondSet(): TalkQuestion[] {
    const set = sample(TOEIC_S_RESPOND, 1)[0];
    return set.flatMap((item, i) => this.talks([item], 3, i === 2 ? 30 : 15));
  }

  /** Q8–10: một bảng thông tin + 3 câu hỏi chỉ nghe; 3 giây chuẩn bị, nói 15/15/30 giây */
  private infoSet(): TalkQuestion[] {
    const set = sample(TOEIC_S_INFO, 1)[0];
    return set.flatMap((item, i) => this.talks([item], i === 0 ? 45 : 3, i === 2 ? 30 : 15));
  }

  /** Writing Q1–5: viết câu theo tranh với 2 từ cho sẵn */
  private picWrite(n: number): PicWriteQuestion[] {
    return sample(TOEIC_W_PICTURE.filter((it) => photoOf(it.photo)), n).map((it) => ({
      id: this.id(), kind: 'picwrite' as const, skill: 'writing' as const,
      prompt: 'Writing Q1–5 · Viết MỘT câu mô tả ảnh, dùng đủ 2 từ bên dưới (được đổi dạng từ).',
      focus: `${it.words[0][0]} / ${it.words[1][0]}`, image: photoOf(it.photo)?.src, words: it.words, samples: it.samples,
      topicId: 'toeic' as const, explain: 'Câu mẫu:\n' + it.samples.map((s) => '• ' + s).join('\n'),
    }));
  }

  /** Writing Q6–8 (và IELTS Writing): đề viết luận dùng khung EssayCard */
  private essays(tasks: WritingTask[], prompt: string): Question[] {
    return tasks.map((t) => ({
      id: this.id(), kind: 'essay' as const, skill: 'writing' as const, prompt, focus: t.title.split(' – ')[1] ?? t.title,
      task: t, topicId: (t.exam ?? 'ielts') as 'ielts' | 'toeic', explain: t.model,
    }));
  }

  // ---------------------------------------------------------------------
  //  DÙNG CHUNG: bài nghe và bài đọc trắc nghiệm
  // ---------------------------------------------------------------------

  private asDialogue(a: ExamAudio, topic: 'ielts' | 'toeic'): Dialogue {
    return { id: a.id, topic, title: a.title, titleVi: a.titleVi, lines: a.lines, questions: [] };
  }

  private mcqOf(m: ExamMcq, base: Omit<McqQuestion, 'id' | 'kind' | 'options' | 'answer'>): McqQuestion {
    const options = shuffle([m.a, ...m.wrong]);
    return { ...base, id: this.id(), kind: 'mcq', options, answer: options.indexOf(m.a), explain: m.ex ? `${m.ex}${base.explain ? '\n' + base.explain : ''}` : base.explain };
  }

  private fillOf(f: ExamFill, base: Omit<TypeQuestion, 'id' | 'kind' | 'answers' | 'mode'>): TypeQuestion {
    return { ...base, id: this.id(), kind: 'type', answers: f.answers, mode: 'word', explain: f.ex, placeholder: 'Gõ đáp án (1–3 từ)...' };
  }

  /** TOEIC Part 3/4: chọn đủ đoạn để có khoảng n câu hỏi (đoạn có bảng biểu hiển thị bảng) */
  private audioSet(items: ExamAudio[], n: number, prompt: string): Question[] {
    const out: Question[] = [];
    for (const item of shuffle(items)) {
      if (out.length >= n) break;
      out.push(...this.audioQs([item], () => prompt, 'toeic'));
    }
    return out.slice(0, n);
  }

  /** Mọi câu hỏi của các bài nghe theo đúng thứ tự: trắc nghiệm trước, câu điền sau; bài tự phát ở câu đầu của mỗi đoạn */
  private audioQs(items: ExamAudio[], promptOf: (a: ExamAudio) => string, topic: 'ielts' | 'toeic'): Question[] {
    return items.flatMap((item) => {
      const dlg = this.asDialogue(item, topic);
      const passage = item.graphic ? { title: item.graphic.title, text: item.graphic.text, textVi: '' } : undefined;
      const prompt = promptOf(item);
      return [
        ...item.mcq.map((m, i) => this.mcqOf(m, {
          skill: 'listening', prompt, focus: m.q, dialogue: dlg, passage, hideText: true, autoPlay: i === 0, topicId: topic, longOptions: true,
          explain: transcript(item.lines),
        })),
        ...(item.fill ?? []).map((f) => this.fillOf(f, {
          skill: 'listening', prompt: `${prompt} – điền từ/số bạn nghe được.`, focus: f.q, dialogue: dlg, hideText: true, topicId: topic,
        })),
      ];
    });
  }

  /** TOEIC Part 6/7 và IELTS Reading dùng chung: chọn đủ bài đọc để có khoảng n câu hỏi */
  private passageSet(items: ExamPassage[], n: number, prompt: string, topic: 'ielts' | 'toeic'): Question[] {
    const out: Question[] = [];
    for (const p of shuffle(items)) {
      if (out.length >= n) break;
      out.push(...this.passageQs([p], prompt, topic));
    }
    return out.slice(0, n);
  }

  /** Mọi câu hỏi của các bài đọc theo đúng thứ tự */
  private passageQs(items: ExamPassage[], prompt: string, topic: 'ielts' | 'toeic'): Question[] {
    return items.flatMap((p) => {
      const passage = { title: p.title, text: p.text, textVi: p.textVi };
      return [
        ...p.mcq.map((m) => this.mcqOf(m, { skill: 'reading', prompt, focus: m.q, passage, topicId: topic, longOptions: true, explain: `${p.titleVi}` })),
        ...(p.fill ?? []).map((f) => this.fillOf(f, { skill: 'reading', prompt: 'Điền đáp án (tối đa 3 từ lấy trong bài).', focus: f.q, passage, topicId: topic })),
      ];
    });
  }

  // ---------------------------------------------------------------------
  //  IELTS
  // ---------------------------------------------------------------------

  private ieltsAudio(n: number): Question[] {
    const out: Question[] = [];
    for (const item of shuffle(IELTS_LISTENING)) {
      if (out.length >= n) break;
      const dlg = this.asDialogue(item, 'ielts');
      const prompt = `Listening · ${item.title}`;
      for (const m of item.mcq) out.push(this.mcqOf(m, { skill: 'listening', prompt, focus: m.q, dialogue: dlg, hideText: true, autoPlay: out.length === 0, topicId: 'ielts', longOptions: true, explain: transcript(item.lines) }));
      for (const f of item.fill ?? []) out.push(this.fillOf(f, { skill: 'listening', prompt: `${prompt} – điền từ/số bạn nghe được.`, focus: f.q, dialogue: dlg, hideText: true, topicId: 'ielts' }));
    }
    return out.slice(0, n);
  }

  private ieltsReading(n: number): Question[] {
    return this.passageSet(IELTS_READING, n, PROMPT.reading, 'ielts');
  }

  /** IELTS Writing: chọn `count` đề; `task` = 1 hoặc 2 để giới hạn loại đề */
  private ieltsWriting(count: number, task?: 1 | 2): Question[] {
    return this.ieltsEssays(sample(IELTS_WRITING.filter((t) => !task || t.task === task), count));
  }

  private ieltsEssays(tasks: WritingTask[]): Question[] {
    return tasks.map((t) => ({
      id: this.id(), kind: 'essay' as const, skill: 'writing' as const, prompt: `Writing ${t.title.split(' – ')[0]} · ${t.minutes} phút gợi ý`, focus: t.title.split(' – ')[1] ?? t.title,
      task: t, topicId: 'ielts' as const, explain: t.model,
    }));
  }

  /** IELTS Speaking: một đề Part 1, một Part 2 và một Part 3 */
  private ieltsSpeaking(): Question[] {
    const pick = (part: 1 | 2 | 3) => sample(IELTS_SPEAKING.filter((s) => s.part === part), 1)[0];
    return this.ieltsTalks([pick(1), pick(2), pick(3)]);
  }

  private ieltsTalks(items: SpeakingItem[]): Question[] {
    return items.map((item) => ({
      id: this.id(), kind: 'talk' as const, skill: 'speaking' as const, prompt: `Speaking ${item.title.split(' – ')[0]}`, focus: item.title.split(' – ')[1] ?? item.title,
      item, prepSeconds: item.part === 2 ? 60 : 0, speakSeconds: item.part === 2 ? 120 : 30 * item.lines.length,
      topicId: 'ielts' as const, explain: item.sample,
    }));
  }

  // =====================================================================
  //  PHÂN TÍCH BÀI VIẾT
  // =====================================================================

  /** Phân tích bài viết luận và ước tính band IELTS / điểm TOEIC (chỉ mang tính tham khảo) */
  async analyzeEssay(text: string, task: WritingTask): Promise<EssayAnalysis> {
    const clean = text.trim();
    const words = clean ? clean.split(/\s+/).filter((w) => /[a-z0-9]/i.test(w)) : [];
    const lower = words.map((w) => w.toLowerCase().replace(/[^a-z']/g, '')).filter(Boolean);
    const sentences = clean.split(/(?<=[.!?])\s+/).filter((s) => s.trim().length > 3);
    const paragraphs = clean.split(/\n\s*\n|\n/).filter((p) => p.trim().length > 20);
    const total = lower.length;
    const uniqueRatio = total ? new Set(lower).size / total : 0;
    const lowerText = ' ' + clean.toLowerCase().replace(/[^a-z' ]/g, ' ').replace(/\s+/g, ' ') + ' ';
    const linking = LINKERS.filter((l) => lowerText.includes(' ' + l + ' ')).length;

    // Từ học thuật: đối chiếu với kho từ vựng IELTS/TOEIC đã đóng gói
    const bank = await this.vocab.load(task.exam === 'toeic' ? 'toeic' : 'ielts');
    const academicSet = new Set(bank.words.filter((w) => !w.word.includes(' ') && w.word.length >= 6).map((w) => w.word.toLowerCase()));
    const academic = new Set(lower.filter((w) => academicSet.has(w))).size;

    const avgSentence = sentences.length ? total / sentences.length : 0;
    const capitalized = sentences.length ? sentences.filter((s) => /^[A-Z"']/.test(s.trim())).length / sentences.length : 0;

    const isEmail = task.exam === 'toeic' && task.task === 1;
    const need = isEmail ? 3 : task.task === 2 ? 4 : 3;
    const lengthS = Math.min(1, total / task.minWords);
    const structureS = Math.min(1, paragraphs.length / need);
    const cohesionS = Math.min(1, linking / (isEmail ? 2 : task.task === 2 ? 6 : 4));
    const lexicalS = Math.max(0, Math.min(1, (uniqueRatio - 0.35) / 0.25)) * 0.5 + Math.min(1, academic / (isEmail ? 3 : 6)) * 0.5;
    const grammarS = Math.max(0, 1 - Math.max(0, Math.abs(avgSentence - (isEmail ? 15 : 19)) - 7) / 12) * 0.7 + capitalized * 0.3;
    // Bài chép/lặp lại cùng một câu nhiều lần không được điểm cao
    const sentenceKeys = sentences.map((x) => x.toLowerCase().replace(/[^a-z ]/g, '').trim());
    const dupRatio = sentences.length ? 1 - new Set(sentenceKeys).size / sentences.length : 0;

    // Các ý bắt buộc (TOEIC): đếm số lần khớp mẫu
    const checks = (task.checks ?? []).map((c) => {
      const hits = (clean.match(new RegExp(c.re, 'gim')) ?? []).length;
      return { label: c.label, ok: hits >= (c.min ?? 1), hits, min: c.min ?? 1 };
    });
    const checksS = checks.length ? checks.filter((c) => c.ok).length / checks.length : 1;

    const advice: string[] = [];
    if (total < task.minWords) advice.push(`Bài mới ${total}/${task.minWords} từ – thiếu từ sẽ bị trừ điểm. Hãy phát triển thêm ví dụ.`);
    if (paragraphs.length < need) advice.push(`Nên chia thành ít nhất ${need} đoạn${isEmail ? ' (chào hỏi – nội dung – lời kết)' : ' (mở bài, thân bài, kết luận)'} – hiện có ${paragraphs.length} đoạn.`);
    for (const c of checks.filter((x) => !x.ok)) advice.push(`Thiếu ý bắt buộc: ${c.label}.`);
    if (linking < (isEmail ? 1 : task.task === 2 ? 4 : 2)) advice.push('Dùng thêm từ nối (first, in addition, however, for example, in conclusion...) để bài mạch lạc hơn.');
    if (!isEmail && academic < 3) advice.push(`Thử dùng thêm từ vựng trong chủ đề ${task.exam === 'toeic' ? 'TOEIC' : 'IELTS'} của app để bài phong phú hơn.`);
    if (avgSentence && (avgSentence < 10 || avgSentence > 28)) advice.push(`Độ dài câu trung bình ${avgSentence.toFixed(0)} từ – hãy trộn câu ngắn và câu phức (12–25 từ).`);
    if (dupRatio >= 0.2) advice.push('Nhiều câu bị lặp lại nguyên văn – hãy viết ý mới thay vì lặp lại.');
    if (uniqueRatio && uniqueRatio < 0.45) advice.push('Bạn lặp lại nhiều từ – hãy dùng từ đồng nghĩa và paraphrase.');

    const baseParts = [
      { label: task.exam === 'toeic' ? 'Độ dài' : 'Độ dài / Task Response', value: lengthS, note: `${total}/${task.minWords} từ` },
      { label: 'Bố cục', value: structureS, note: `${paragraphs.length} đoạn` },
      { label: 'Liên kết (Cohesion)', value: cohesionS, note: `${linking} từ nối` },
      { label: 'Từ vựng', value: lexicalS, note: `${academic} từ chuyên ngành` },
      { label: 'Câu & ngữ pháp', value: grammarS, note: `TB ${avgSentence.toFixed(0)} từ/câu` },
    ];
    const common = { words: total, sentences: sentences.length, paragraphs: paragraphs.length, avgSentence, uniqueRatio, linking, academic };

    // ---------------- TOEIC: thang 0–4 (email) hoặc 0–5 (bài luận) ----------------
    if (task.exam === 'toeic') {
      const max = task.maxScore ?? (isEmail ? 4 : 5);
      const overall = checksS * 0.4 + lengthS * 0.2 + structureS * 0.1 + cohesionS * 0.1 + lexicalS * 0.1 + grammarS * 0.1;
      let pts = Math.round(overall * max);
      if (total < task.minWords * 0.5) pts = Math.min(pts, Math.floor(max / 2));
      if (dupRatio >= 0.2) pts = Math.min(pts, 2);
      if (checksS < 0.5) pts = Math.min(pts, max - 2);
      pts = total ? Math.max(1, pts) : 0;
      if (!advice.length) advice.push('Bài viết đủ ý và rõ ràng! So sánh với bài mẫu để học thêm cách diễn đạt.');
      return {
        ...common, band: pts, label: `${pts}/${max} điểm`, score: pts / max, advice,
        parts: [
          ...checks.map((c) => ({ label: c.label, value: c.ok ? 1 : Math.min(0.99, c.hits / c.min), note: c.ok ? 'Đạt' : 'Chưa có' })),
          ...baseParts,
        ],
      };
    }

    // ---------------- IELTS: band ----------------
    const overall = lengthS * 0.3 + structureS * 0.15 + cohesionS * 0.2 + lexicalS * 0.2 + grammarS * 0.15;
    let band = 3.5 + overall * 4.5;
    if (total < task.minWords * 0.5) band = Math.min(band, 4);
    else if (total < task.minWords * 0.75) band = Math.min(band, 5);
    if (dupRatio >= 0.2) band = Math.min(band, 4.5);
    else if (uniqueRatio && uniqueRatio < 0.4) band = Math.min(band, 5.5);
    band = Math.max(2.5, Math.round(Math.min(band, 8) * 2) / 2);
    if (!total) band = 0;
    if (!advice.length) advice.push('Bài viết có cấu trúc và từ vựng khá tốt! So sánh với bài mẫu để học thêm cách diễn đạt.');

    return {
      ...common, band, label: `Band ${band.toFixed(1)}`, advice,
      score: total ? Math.max(0, Math.min(1, (band - 3) / 5)) : 0,
      parts: baseParts,
    };
  }

  // =====================================================================
  //  QUY ĐỔI ĐIỂM
  // =====================================================================

  /** Quy đổi kết quả một bài thi sang điểm ước tính */
  summarize(exam: ExamId, kind: ExamKind, session: SessionResult): ExamSummary {
    const by: Record<string, { score: number; total: number }> = {};
    for (const r of session.results) {
      const b = (by[r.skill] ??= { score: 0, total: 0 });
      b.score += r.score;
      b.total += 1;
    }
    const percentOf = (skill: string) => (by[skill] ? pct(by[skill].score, by[skill].total) : null);

    if (exam === 'toeic') {
      const rows: ExamSummary['rows'] = [];
      const l = percentOf('listening');
      const r = percentOf('reading');
      const s = percentOf('speaking');
      const w = percentOf('writing');
      let lr = 0;
      if (l !== null) { rows.push({ label: 'Listening (ước tính)', value: `${toeicLrScaled(l)}/495 · ${l}%` }); lr += toeicLrScaled(l); }
      if (r !== null) { rows.push({ label: 'Reading (ước tính)', value: `${toeicLrScaled(r)}/495 · ${r}%` }); lr += toeicLrScaled(r); }
      if (s !== null) rows.push({ label: 'Speaking (ước tính)', value: `${toeicSwScaled(s)}/200 · ${toeicSwLevel(toeicSwScaled(s))}` });
      if (w !== null) rows.push({ label: 'Writing (ước tính)', value: `${toeicSwScaled(w)}/200 · ${toeicSwLevel(toeicSwScaled(w))}` });

      const hasLr = l !== null || r !== null;
      const both = l !== null && r !== null;
      const swParts = [s !== null ? `S ${toeicSwScaled(s)}` : '', w !== null ? `W ${toeicSwScaled(w)}` : ''].filter(Boolean).join(' · ');
      const headline = hasLr ? (both ? `Tổng ≈ ${lr}/990` : `Ước tính ${lr}/495`) : `${swParts}/200`;
      const label = hasLr ? (both ? `Tổng ≈ ${lr}/990` : `≈ ${lr}/495`) : swParts;
      const note = hasLr
        ? 'Điểm TOEIC quy đổi từ tỉ lệ đúng trong bản rút gọn, chỉ để tham khảo tiến bộ. Điểm thật phụ thuộc bảng quy đổi từng đề.'
        : 'Speaking/Writing được ước tính từ phần chấm tự động (câu viết, email, bài luận) và phần tự đánh giá bài nói, thang 0–200. Chỉ để tham khảo.';
      return { headline, rows, note, label };
    }

    // IELTS
    const bands: number[] = [];
    const rows: ExamSummary['rows'] = [];
    for (const [skill, label] of [['listening', 'Listening'], ['reading', 'Reading'], ['writing', 'Writing'], ['speaking', 'Speaking']] as const) {
      const b = by[skill];
      if (!b) continue;
      let band: number;
      if (skill === 'listening' || skill === 'reading') band = rawToBand(Math.round((b.score / b.total) * 40));
      else band = scoreToBand(b.score / b.total);
      bands.push(band);
      rows.push({ label: `${label} (ước tính)`, value: `Band ${band.toFixed(1)}` });
    }
    const overall = bands.length ? Math.round((bands.reduce((a, c) => a + c, 0) / bands.length) * 2) / 2 : 0;
    return {
      headline: `Band ước tính ${overall.toFixed(1)}`,
      rows,
      note: 'Band Listening/Reading quy đổi từ tỉ lệ đúng (thang 40 câu). Writing/Speaking dựa trên phân tích tự động và tự đánh giá nên chỉ mang tính tham khảo.',
      label: `Band ${overall.toFixed(1)}`,
    };
  }
}
