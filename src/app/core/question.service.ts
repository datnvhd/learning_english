/**
 * ============================================================================
 *  question.service.ts – "Nhà máy" tạo câu hỏi cho mọi bài luyện tập và kiểm tra
 * ============================================================================
 *  Từ kho dữ liệu offline (từ vựng, bài đọc, hội thoại) service này tự sinh ra danh
 *  sách câu hỏi ngẫu nhiên cho:
 *    - forLesson : bài kiểm tra nhanh sau khi học một bài từ vựng
 *    - forReview : ôn tập các từ đến hạn (lặp lại ngắt quãng)
 *    - forSkill  : luyện tập một kỹ năng Nghe / Nói / Đọc / Viết / Từ vựng
 *    - forMixed  : luyện tập tổng hợp 4 kỹ năng của một chủ đề
 *    - forTest   : bài kiểm tra (tổng quát hoặc theo từng kỹ năng)
 *
 *  Cách hoạt động: mỗi kỹ năng có một "kế hoạch" (plan) – danh sách các hàm sinh câu hỏi
 *  được dùng luân phiên để bài luyện đa dạng dạng câu. Một `Ctx` (ngữ cảnh) giữ dữ liệu đã
 *  nạp và tập hợp `used` để một từ/bài không bị lặp lại trong cùng một bài làm.
 */
import { Injectable, inject } from '@angular/core';
import { Dialogue, Passage, Skill, TopicId } from '../models/content.model';
import { TopicVocab, Word } from '../models/vocab.model';
import { McqQuestion, OrderQuestion, Question, SpeakQuestion, TypeQuestion } from '../models/question.model';
import { DIALOGUES } from '../data/dialogues';
import { GRAMMAR_BY_ID } from '../data/grammar';
import { PASSAGES } from '../data/reading';
import { POS_LABEL } from '../models/vocab.model';
import { normalizeText, sample, shuffle } from './text-utils';
import { VocabService } from './vocab.service';
import { hasPhoto, photoOf } from './photos';

/** Phạm vi ra đề: một chủ đề hoặc tất cả */
export type Scope = TopicId | 'all';

/** Ngữ cảnh dùng chung trong một lần sinh đề */
interface Ctx {
  topics: TopicVocab[];
  words: Word[];
  dialogues: Dialogue[];
  passages: Passage[];
  /** Các mục đã dùng (để không lặp lại trong cùng bài) */
  used: Set<string>;
  /** Bộ đếm để đặt mã câu hỏi */
  seq: number;
  /** Hàng đợi câu hỏi của các bài đọc đã chọn (cho kỹ năng Đọc) */
  passageQueue: Question[];
}

/** Hàm sinh một câu hỏi (trả về null nếu hết dữ liệu phù hợp) */
type Gen = (ctx: Ctx) => Question | null;

/** Nhãn loại từ dạng ngắn "(n) danh từ" */
function posText(pos: string): string {
  return `(${pos}) ${POS_LABEL[pos] ?? ''}`.trim();
}

/** Số từ trong một câu */
function wordCount(text: string): number {
  return text.trim().split(/\s+/).length;
}

/** Thoát các ký tự đặc biệt để dùng trong biểu thức chính quy */
function escapeRegex(text: string): string {
  return text.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

@Injectable({ providedIn: 'root' })
export class QuestionService {
  private readonly vocab = inject(VocabService);

  // =====================================================================
  //  CÁC HÀM CÔNG KHAI
  // =====================================================================

  /** Bài kiểm tra nhanh sau khi học một bài từ vựng */
  async forLesson(topicId: TopicId, lessonIndex: number): Promise<Question[]> {
    const ctx = await this.context(topicId);
    const lesson = ctx.topics[0].lessons[lessonIndex];
    const words = shuffle(lesson.words).slice(0, 12);
    const out: Question[] = [];
    words.forEach((w, i) => {
      // Luân phiên: EN->VI, VI->EN, viết chính tả
      const kind = i % 3;
      out.push(kind === 0 ? this.vocabMcq(ctx, w, 'en2vi') : kind === 1 ? this.vocabMcq(ctx, w, 'vi2en') : this.spellQ(ctx, w));
    });
    return out;
  }

  /** Bài luyện ngữ pháp: 8 câu điền chỗ trống + 2 câu sắp xếp từ lấy từ ví dụ của bài */
  forGrammar(id: string): Question[] {
    const g = GRAMMAR_BY_ID[id];
    if (!g) return [];
    let seq = 0;
    const out: Question[] = shuffle(g.quiz).map((row) => {
      const sentence = row[0];
      const correct = row[1];
      const explain = row[row.length - 1];
      const wrongs = row.slice(2, row.length - 1);
      const options = shuffle([correct, ...wrongs]);
      const q: McqQuestion = {
        id: `g${seq++}`, kind: 'mcq', skill: 'writing', prompt: 'Chọn đáp án đúng để hoàn thành câu.', focus: sentence,
        options, answer: options.indexOf(correct), audio: sentence.replace('____', correct),
        explain: `${sentence.replace('____', correct)}
${explain}`,
      };
      return q;
    });
    for (const [en, vi] of sample(g.examples, 2)) {
      const answer = en.trim().split(/s+/);
      let tiles = shuffle(answer);
      for (let i = 0; i < 5 && tiles.join(' ') === answer.join(' '); i++) tiles = shuffle(answer);
      const q: OrderQuestion = { id: `g${seq++}`, kind: 'order', skill: 'writing', prompt: 'Sắp xếp các từ thành câu đúng.', focus: vi, tiles, answer, audio: en, explain: `${en}
${vi}` };
      out.push(q);
    }
    return out;
  }

  /** Ôn tập các từ đến hạn */
  async forReview(wordIds: string[], count = 15): Promise<Question[]> {
    const words = shuffle(await this.vocab.findWords(wordIds)).slice(0, count);
    if (!words.length) return [];
    const ctx = await this.context([...new Set(words.map((w) => w.topicId))]);
    const gens = [
      (w: Word) => this.vocabMcq(ctx, w, 'en2vi'),
      (w: Word) => this.vocabMcq(ctx, w, 'vi2en'),
      (w: Word) => this.listenWordMeaning(ctx, w),
      (w: Word) => this.spellQ(ctx, w),
    ];
    return words.map((w, i) => gens[i % gens.length](w));
  }

  /** Luyện tập một kỹ năng */
  async forSkill(skill: Skill, scope: Scope, count = 10): Promise<Question[]> {
    const ctx = await this.context(scope);
    return this.build(skill, ctx, count);
  }

  /** Luyện tập tổng hợp: vài câu cho mỗi kỹ năng (Nghe, Nói, Đọc, Viết) */
  async forMixed(scope: Scope, perSkill = 3): Promise<Question[]> {
    const ctx = await this.context(scope);
    return (['listening', 'speaking', 'reading', 'writing'] as Skill[]).flatMap((s) => this.build(s, ctx, perSkill));
  }

  /**
   * Bài kiểm tra.
   *  - 'all'  : tổng quát – 5 câu từ vựng + 5 câu mỗi kỹ năng Nghe/Nói/Đọc/Viết (25 câu)
   *  - kỹ năng: 20 câu của riêng kỹ năng đó
   */
  async forTest(kind: Skill | 'all', scope: Scope): Promise<Question[]> {
    const ctx = await this.context(scope);
    if (kind === 'all') {
      const order: Skill[] = ['vocab', 'listening', 'speaking', 'reading', 'writing'];
      return order.flatMap((s) => this.build(s, ctx, 5));
    }
    return this.build(kind, ctx, 20);
  }

  // =====================================================================
  //  NGỮ CẢNH & KẾ HOẠCH
  // =====================================================================

  /** Nạp dữ liệu cần thiết cho phạm vi ra đề */
  private async context(scope: Scope | TopicId[]): Promise<Ctx> {
    const ids = Array.isArray(scope) ? scope : scope === 'all' ? 'all' : [scope];
    const topics = await this.vocab.loadMany(ids);
    const topicIds = new Set(topics.map((t) => t.topicId));
    return {
      topics,
      words: topics.flatMap((t) => t.words),
      dialogues: DIALOGUES.filter((d) => topicIds.has(d.topic)),
      passages: PASSAGES.filter((p) => topicIds.has(p.topic)),
      used: new Set<string>(),
      seq: 0,
      passageQueue: [],
    };
  }

  /** Sinh `count` câu hỏi cho một kỹ năng theo kế hoạch luân phiên */
  private build(skill: Skill, ctx: Ctx, count: number): Question[] {
    let plan: Gen[];
    switch (skill) {
      case 'vocab':
        plan = [(c) => this.pickVocab(c, 'en2vi'), (c) => this.pictureQ(c), (c) => this.pickVocab(c, 'vi2en'), (c) => this.pickVocab(c, 'en2vi'),
          (c) => this.pictureQ(c), (c) => this.pickVocab(c, 'vi2en'), (c) => this.clozeQ(c, 'vocab')];
        break;
      case 'listening':
        plan = [(c) => this.dialogueQ(c), (c) => this.listenPictureQ(c), (c) => this.listenWordMeaningPick(c), (c) => this.dialogueQ(c),
          (c) => this.listenSentence(c), (c) => this.listenWordSpelling(c), (c) => this.dialogueQ(c),
          (c) => this.dictationQ(c), (c) => this.listenSentence(c), (c) => this.dialogueQ(c), (c) => this.listenWordMeaningPick(c)];
        break;
      case 'speaking':
        plan = [(c) => this.speakWord(c), (c) => this.speakSentence(c), (c) => this.replyQ(c), (c) => this.speakSentence(c),
          (c) => this.ipaToWord(c), (c) => this.speakSentence(c), (c) => this.replyQ(c), (c) => this.speakWord(c),
          (c) => this.ipaToWord(c), (c) => this.audioToIpa(c)];
        break;
      case 'reading':
        this.fillPassageQueue(ctx, Math.ceil((count * 0.6) / 3));
        plan = [(c) => this.nextPassageQ(c), (c) => this.nextPassageQ(c), (c) => this.nextPassageQ(c), (c) => this.clozeQ(c, 'reading'),
          (c) => this.nextPassageQ(c), (c) => this.nextPassageQ(c), (c) => this.nextPassageQ(c), (c) => this.readSentence(c),
          (c) => this.clozeQ(c, 'reading'), (c) => this.readSentence(c)];
        break;
      default: // writing
        plan = [(c) => this.translateQ(c), (c) => this.orderQ(c), (c) => this.pickSpell(c), (c) => this.translateQ(c),
          (c) => this.orderQ(c), (c) => this.translateQ(c), (c) => this.pickSpell(c), (c) => this.orderQ(c),
          (c) => this.translateQ(c), (c) => this.pickSpell(c)];
    }
    return this.run(plan, ctx, count);
  }

  /** Chạy kế hoạch cho đến khi đủ số câu (hoặc hết dữ liệu) */
  private run(plan: Gen[], ctx: Ctx, count: number): Question[] {
    const out: Question[] = [];
    let i = 0;
    let fails = 0;
    while (out.length < count && fails < plan.length * 2) {
      const q = plan[i++ % plan.length](ctx);
      if (q) {
        out.push(q);
        fails = 0;
      } else fails++;
    }
    return out;
  }

  // =====================================================================
  //  TIỆN ÍCH CHUNG
  // =====================================================================

  /** Mã câu hỏi mới */
  private id(ctx: Ctx): string {
    return `q${ctx.seq++}`;
  }

  /** Lấy ngẫu nhiên một từ chưa dùng thỏa điều kiện `ok`; đánh dấu đã dùng */
  private take(ctx: Ctx, ok: (w: Word) => boolean = () => true): Word | null {
    const candidates = ctx.words.filter((w) => !ctx.used.has(w.id) && ok(w));
    if (!candidates.length) return null;
    const w = candidates[Math.floor(Math.random() * candidates.length)];
    ctx.used.add(w.id);
    return w;
  }

  /** Lấy `n` giá trị "gây nhiễu" khác nhau (ưu tiên từ cùng chủ đề + cùng loại từ) */
  private distract(ctx: Ctx, w: Word, n: number, pick: (x: Word) => string, exclude: string[] = []): string[] {
    const correct = pick(w);
    const banned = new Set([correct, ...exclude].map((s) => s.toLowerCase()));
    const tiers = [
      ctx.words.filter((x) => x.id !== w.id && x.topicId === w.topicId && x.pos === w.pos),
      ctx.words.filter((x) => x.id !== w.id && x.topicId === w.topicId),
      ctx.words.filter((x) => x.id !== w.id),
    ];
    const out: string[] = [];
    for (const tier of tiers) {
      for (const x of shuffle(tier)) {
        const v = pick(x);
        if (v && !banned.has(v.toLowerCase())) {
          banned.add(v.toLowerCase());
          out.push(v);
          if (out.length === n) return out;
        }
      }
    }
    return out;
  }

  /** Tạo câu trắc nghiệm: xáo trộn các lựa chọn và ghi nhận vị trí đáp án đúng */
  private mcq(ctx: Ctx, base: Omit<McqQuestion, 'id' | 'kind' | 'options' | 'answer'>, correct: string, wrongs: string[]): McqQuestion | null {
    if (wrongs.length < 2) return null; // không đủ đáp án nhiễu
    const options = shuffle([correct, ...wrongs.slice(0, 3)]);
    return { ...base, id: this.id(ctx), kind: 'mcq', options, answer: options.indexOf(correct) };
  }

  /** Câu giải thích chuẩn cho một từ */
  private brief(w: Word): string {
    return `${w.word} /${w.ipa}/ ${posText(w.pos)} – ${w.vi}. Ví dụ: ${w.ex} (${w.exVi})`;
  }

  // =====================================================================
  //  TỪ VỰNG
  // =====================================================================

  private pickVocab(ctx: Ctx, variant: 'en2vi' | 'vi2en'): Question | null {
    const w = this.take(ctx);
    return w ? this.vocabMcq(ctx, w, variant) : null;
  }

  /** Câu trắc nghiệm từ vựng: đoán nghĩa hoặc đoán từ */
  private vocabMcq(ctx: Ctx, w: Word, variant: 'en2vi' | 'vi2en'): Question {
    if (variant === 'en2vi') {
      const q = this.mcq(ctx, {
        skill: 'vocab', prompt: 'Từ này có nghĩa là gì?', focus: w.word, focusSub: `/${w.ipa}/ · ${posText(w.pos)}`,
        audio: w.word, autoPlay: true, wordId: w.id, topicId: w.topicId, explain: this.brief(w),
      }, w.vi, this.distract(ctx, w, 3, (x) => x.vi));
      if (q) return q;
    } else {
      const q = this.mcq(ctx, {
        skill: 'vocab', prompt: 'Chọn từ tiếng Anh có nghĩa:', focus: w.vi, focusSub: posText(w.pos),
        wordId: w.id, topicId: w.topicId, explain: this.brief(w),
      }, w.word, this.distract(ctx, w, 3, (x) => x.word));
      if (q) return q;
    }
    // Dự phòng khi chủ đề quá ít từ để tạo đáp án nhiễu: chuyển sang câu viết chính tả
    return this.spellQ(ctx, w);
  }

  /** Nhìn ảnh thật, chọn từ tiếng Anh đúng (chỉ với từ có ảnh minh họa) */
  private pictureQ(ctx: Ctx): Question | null {
    const w = this.take(ctx, (x) => hasPhoto(x.id));
    if (!w) return null;
    return this.mcq(ctx, {
      skill: 'vocab', prompt: 'Nhìn ảnh và chọn từ tiếng Anh đúng.', image: photoOf(w.id)!.src,
      wordId: w.id, topicId: w.topicId, explain: this.brief(w), audio: w.word,
    }, w.word, this.distract(ctx, w, 3, (x) => x.word));
  }

  /** Nghe từ, chọn ảnh đúng (các lựa chọn là ảnh) */
  private listenPictureQ(ctx: Ctx): Question | null {
    const w = this.take(ctx, (x) => hasPhoto(x.id));
    if (!w) return null;
    const others = sample(ctx.words.filter((x) => x.id !== w.id && hasPhoto(x.id) && x.vi !== w.vi), 3);
    if (others.length < 3) return null;
    const all = shuffle([w, ...others]);
    const q: McqQuestion = {
      id: this.id(ctx), kind: 'mcq', skill: 'listening', prompt: 'Nghe và chọn bức ảnh đúng.', audio: w.word, hideText: true, autoPlay: true,
      options: all.map((x) => x.word), optionImages: all.map((x) => photoOf(x.id)!.src), answer: all.indexOf(w),
      wordId: w.id, topicId: w.topicId, explain: this.brief(w),
    };
    return q;
  }

  // =====================================================================
  //  NGHE (Listening)
  // =====================================================================

  /** Nghe hội thoại rồi trả lời câu hỏi */
  private dialogueQ(ctx: Ctx): Question | null {
    const options = ctx.dialogues.flatMap((d) => d.questions.map((q, qi) => ({ d, q, key: `${d.id}:${qi}` })))
      .filter((x) => !ctx.used.has(x.key));
    if (!options.length) return null;
    // Ưu tiên hội thoại chưa dùng để bài nghe đa dạng tình huống
    const fresh = options.filter((x) => !ctx.used.has('d:' + x.d.id));
    const { d, q, key } = sample(fresh.length ? fresh : options, 1)[0];
    ctx.used.add(key);
    ctx.used.add('d:' + d.id);
    return this.mcq(ctx, {
      skill: 'listening', prompt: 'Nghe đoạn hội thoại rồi chọn đáp án đúng.', focus: q.q, dialogue: d,
      hideText: true, autoPlay: true, topicId: d.topic, longOptions: true,
      explain: d.lines.map((l) => `${l.who}: ${l.text} (${l.vi})`).join('\n'),
    }, q.a, [...q.wrong]);
  }

  private listenWordMeaningPick(ctx: Ctx): Question | null {
    const w = this.take(ctx);
    return w ? this.listenWordMeaning(ctx, w) : null;
  }

  /** Nghe một từ, chọn nghĩa tiếng Việt */
  private listenWordMeaning(ctx: Ctx, w: Word): Question {
    const q = this.mcq(ctx, {
      skill: 'listening', prompt: 'Nghe và chọn nghĩa đúng của từ.', audio: w.word, hideText: true, autoPlay: true,
      wordId: w.id, topicId: w.topicId, explain: this.brief(w),
    }, w.vi, this.distract(ctx, w, 3, (x) => x.vi));
    return q ?? this.spellQ(ctx, w);
  }

  /** Nghe một từ, chọn từ đúng (rèn nhận biết âm) */
  private listenWordSpelling(ctx: Ctx): Question | null {
    const w = this.take(ctx);
    if (!w) return null;
    return this.mcq(ctx, {
      skill: 'listening', prompt: 'Nghe và chọn từ bạn nghe được.', audio: w.word, hideText: true, autoPlay: true,
      wordId: w.id, topicId: w.topicId, explain: this.brief(w),
    }, w.word, this.distract(ctx, w, 3, (x) => x.word));
  }

  /** Nghe một câu, chọn bản dịch tiếng Việt đúng */
  private listenSentence(ctx: Ctx): Question | null {
    const w = this.take(ctx, (x) => wordCount(x.ex) >= 3);
    if (!w) return null;
    return this.mcq(ctx, {
      skill: 'listening', prompt: 'Nghe câu và chọn nghĩa tiếng Việt đúng.', audio: w.ex, hideText: true, autoPlay: true,
      wordId: w.id, topicId: w.topicId, longOptions: true, explain: `${w.ex}\n${w.exVi}`,
    }, w.exVi, this.distract(ctx, w, 3, (x) => x.exVi));
  }

  /** Chép chính tả: nghe câu rồi gõ lại */
  private dictationQ(ctx: Ctx): Question | null {
    const w = this.take(ctx, (x) => wordCount(x.ex) >= 3 && wordCount(x.ex) <= 9);
    if (!w) return null;
    const q: TypeQuestion = {
      id: this.id(ctx), kind: 'type', skill: 'listening', prompt: 'Nghe và gõ lại chính xác câu bạn nghe được.',
      audio: w.ex, hideText: true, autoPlay: true, answers: [w.ex], mode: 'sentence', wordId: w.id, topicId: w.topicId,
      hint: `Câu có ${wordCount(w.ex)} từ`, placeholder: 'Gõ câu tiếng Anh bạn nghe được...', explain: w.exVi,
    };
    return q;
  }

  // =====================================================================
  //  NÓI (Speaking)
  // =====================================================================

  /** Đọc theo một từ */
  private speakWord(ctx: Ctx): Question | null {
    const w = this.take(ctx);
    if (!w) return null;
    const q: SpeakQuestion = {
      id: this.id(ctx), kind: 'speak', skill: 'speaking', prompt: 'Nghe mẫu rồi đọc theo nhé!',
      target: w.word, targetVi: w.vi, focusSub: `/${w.ipa}/ · ${posText(w.pos)}`, audio: w.word, autoPlay: true,
      wordId: w.id, topicId: w.topicId, explain: this.brief(w),
    };
    return q;
  }

  /** Đọc theo một câu ngắn */
  private speakSentence(ctx: Ctx): Question | null {
    const w = this.take(ctx, (x) => wordCount(x.ex) >= 3 && wordCount(x.ex) <= 9);
    if (!w) return null;
    const q: SpeakQuestion = {
      id: this.id(ctx), kind: 'speak', skill: 'speaking', prompt: 'Nghe và nhắc lại câu sau.',
      target: w.ex, targetVi: w.exVi, audio: w.ex, autoPlay: true, wordId: w.id, topicId: w.topicId, explain: `${w.ex}\n${w.exVi}`,
    };
    return q;
  }

  /** Tình huống giao tiếp: chọn câu đáp lại phù hợp */
  private replyQ(ctx: Ctx): Question | null {
    const spots = ctx.dialogues.flatMap((d) =>
      d.lines.flatMap((l, i) => (l.who === 'A' && d.lines[i + 1]?.who === 'B' ? [{ d, i, key: `r:${d.id}:${i}` }] : [])),
    ).filter((s) => !ctx.used.has(s.key));
    if (!spots.length) return null;
    const { d, i, key } = sample(spots, 1)[0];
    ctx.used.add(key);
    const line = d.lines[i];
    const reply = d.lines[i + 1];
    // Đáp án nhiễu: các câu trả lời của B ở hội thoại KHÁC
    const others = ctx.dialogues.filter((x) => x.id !== d.id).flatMap((x) => x.lines.filter((l) => l.who === 'B').map((l) => l.text));
    const wrongs = sample([...new Set(others)].filter((t) => t !== reply.text), 3);
    return this.mcq(ctx, {
      skill: 'speaking', prompt: 'Người ta nói với bạn như vậy. Bạn đáp lại thế nào?', focus: line.text, audio: line.text,
      autoPlay: true, topicId: d.topic, longOptions: true, explain: `${line.text} (${line.vi})\n→ ${reply.text} (${reply.vi})`,
    }, reply.text, wrongs);
  }

  /** Nhìn phiên âm, chọn từ đúng */
  private ipaToWord(ctx: Ctx): Question | null {
    const w = this.take(ctx, (x) => !!x.ipa && !x.word.includes(' '));
    if (!w) return null;
    return this.mcq(ctx, {
      skill: 'speaking', prompt: 'Phiên âm này là của từ nào?', focus: `/${w.ipa}/`, audio: undefined,
      wordId: w.id, topicId: w.topicId, explain: this.brief(w),
    }, w.word, this.distract(ctx, w, 3, (x) => (x.word.includes(' ') ? '' : x.word)));
  }

  /** Nghe từ, chọn phiên âm đúng */
  private audioToIpa(ctx: Ctx): Question | null {
    const w = this.take(ctx, (x) => !!x.ipa && !x.word.includes(' '));
    if (!w) return null;
    return this.mcq(ctx, {
      skill: 'speaking', prompt: 'Nghe và chọn phiên âm đúng.', audio: w.word, hideText: true, autoPlay: true,
      wordId: w.id, topicId: w.topicId, explain: this.brief(w),
    }, `/${w.ipa}/`, this.distract(ctx, w, 3, (x) => (x.ipa ? `/${x.ipa}/` : '')));
  }

  // =====================================================================
  //  ĐỌC (Reading)
  // =====================================================================

  /** Chọn ngẫu nhiên các bài đọc và đưa toàn bộ câu hỏi của chúng vào hàng đợi */
  private fillPassageQueue(ctx: Ctx, passages: number): void {
    ctx.passageQueue = [];
    const chosen = sample(ctx.passages, Math.max(1, passages));
    for (const p of chosen) {
      for (const q of p.questions) {
        const built = this.mcq(ctx, {
          skill: 'reading', prompt: 'Đọc đoạn văn và trả lời câu hỏi.', focus: q.q,
          passage: { title: p.title, text: p.text, textVi: p.textVi }, topicId: p.topic, longOptions: true,
          explain: `${p.titleVi}: ${p.textVi}`,
        }, q.a, [...q.wrong]);
        if (built) ctx.passageQueue.push(built);
      }
    }
  }

  /** Lấy câu hỏi tiếp theo từ các bài đọc đã chọn */
  private nextPassageQ(ctx: Ctx): Question | null {
    const q = ctx.passageQueue.shift();
    return q ? { ...q, id: this.id(ctx) } : null;
  }

  /** Điền từ vào chỗ trống trong câu ví dụ */
  private clozeQ(ctx: Ctx, skill: 'reading' | 'vocab'): Question | null {
    const w = this.take(ctx, (x) => new RegExp(`\\b${escapeRegex(x.word)}\\b`, 'i').test(x.ex) && wordCount(x.ex) >= 4);
    if (!w) return null;
    const blank = w.ex.replace(new RegExp(`\\b${escapeRegex(w.word)}\\b`, 'i'), '_____');
    return this.mcq(ctx, {
      skill, prompt: 'Chọn từ thích hợp điền vào chỗ trống.', focus: blank, focusSub: w.exVi,
      wordId: w.id, topicId: w.topicId, explain: `${w.ex}\n${w.exVi}`,
    }, w.word, this.distract(ctx, w, 3, (x) => x.word));
  }

  /** Đọc một câu và chọn nghĩa tiếng Việt */
  private readSentence(ctx: Ctx): Question | null {
    const w = this.take(ctx, (x) => wordCount(x.ex) >= 4);
    if (!w) return null;
    return this.mcq(ctx, {
      skill: 'reading', prompt: 'Đọc câu và chọn nghĩa tiếng Việt đúng.', focus: w.ex, audio: w.ex,
      wordId: w.id, topicId: w.topicId, longOptions: true, explain: `${w.ex}\n${w.exVi}`,
    }, w.exVi, this.distract(ctx, w, 3, (x) => x.exVi));
  }

  // =====================================================================
  //  VIẾT (Writing)
  // =====================================================================

  /** Dịch câu tiếng Việt sang tiếng Anh (gõ tay) */
  private translateQ(ctx: Ctx): Question | null {
    const w = this.take(ctx, (x) => wordCount(x.ex) >= 3 && wordCount(x.ex) <= 9);
    if (!w) return null;
    const q: TypeQuestion = {
      id: this.id(ctx), kind: 'type', skill: 'writing', prompt: 'Viết lại câu sau bằng tiếng Anh.', focus: w.exVi,
      answers: [w.ex], mode: 'sentence', hint: `Gợi ý: dùng từ "${w.word}" (${w.vi})`,
      placeholder: 'Type your answer here...', wordId: w.id, topicId: w.topicId, explain: this.brief(w),
    };
    return q;
  }

  /** Sắp xếp các từ thành câu đúng */
  private orderQ(ctx: Ctx): Question | null {
    const w = this.take(ctx, (x) => wordCount(x.ex) >= 4 && wordCount(x.ex) <= 9);
    if (!w) return null;
    const answer = w.ex.trim().split(/\s+/);
    let tiles = shuffle(answer);
    // Đảm bảo thứ tự xáo trộn khác thứ tự đúng
    for (let i = 0; i < 5 && tiles.join(' ') === answer.join(' '); i++) tiles = shuffle(answer);
    const q: OrderQuestion = {
      id: this.id(ctx), kind: 'order', skill: 'writing', prompt: 'Sắp xếp các từ thành câu đúng.', focus: w.exVi,
      tiles, answer, wordId: w.id, topicId: w.topicId, explain: this.brief(w),
    };
    return q;
  }

  private pickSpell(ctx: Ctx): Question | null {
    const w = this.take(ctx);
    return w ? this.spellQ(ctx, w) : null;
  }

  /** Viết từ tiếng Anh từ nghĩa tiếng Việt (chính tả) */
  private spellQ(ctx: Ctx, w: Word): TypeQuestion {
    const first = w.word.replace(/[^A-Za-z]/g, '').length;
    return {
      id: this.id(ctx), kind: 'type', skill: 'writing', prompt: 'Viết từ tiếng Anh có nghĩa sau.', focus: w.vi,
      focusSub: `${posText(w.pos)} · ${first} chữ cái`, audio: w.word, hideText: true, answers: [w.word], mode: 'word',
      hint: `Bắt đầu bằng chữ "${w.word[0]}" · /${w.ipa}/`, placeholder: 'Type the English word...',
      wordId: w.id, topicId: w.topicId, explain: this.brief(w),
    };
  }
}

/** Chuẩn hóa để so sánh nhanh hai chuỗi tile (dùng trong QuizRunner) */
export function sameSentence(a: string[], b: string[]): boolean {
  return normalizeText(a.join(' ')) === normalizeText(b.join(' '));
}
