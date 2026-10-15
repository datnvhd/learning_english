/**
 * calibration.spec.ts – HIỆU CHỈNH bộ chấm offline theo bài đã biết band.
 *
 * Mỗi mẫu có band "đích" (bài mẫu band cao của app; bài người học viết tay theo mô tả band 4 / 5.5;
 * bản bài mẫu bị làm hỏng: cắt ngắn, chèn lỗi ngữ pháp). Bộ chấm phải:
 *  - cho band nằm trong khoảng cho phép của từng mẫu;
 *  - giữ đúng THỨ TỰ: bài tốt > bài bị cắt ngắn / chèn lỗi > bài band 5 > bài band 4.
 * Khi chỉnh ngưỡng trong rubric.ts, chạy lại tệp này để chắc chắn thang điểm không bị lệch.
 * Từ điển thật (public/assets/dict/en.txt) được nạp để đo từ vựng CEFR giống trên trình duyệt.
 */
import { TestBed } from '@angular/core/testing';
import { afterAll, beforeAll, describe, expect, it, vi } from 'vitest';
import { IELTS_WRITING } from '../data/exam/ielts';
import { IELTS_TESTS } from '../data/exam/tests/ielts-all';
import { WritingTask } from '../models/exam.model';
import { ExamService } from './exam.service';
import { AsrResult, AsrWord, scoreFree } from './speaking-score';

/** Bài band ~5.5: đủ ý, bố cục rõ nhưng từ vựng cơ bản, câu đơn, vài lỗi */
const BAND5 = `Nowadays, online learning is very popular. Many people think it is better than learning in class. In my opinion, I partly agree with this idea.

First, online learning is very convenient. Students can study at home and they do not need to go to school. They can save time and money. For example, my brother studies English online every night after work. He likes it very much because it is cheap and easy.

However, learning in class also has many good points. Students can talk with teacher and friends. If they do not understand the lesson, they can ask the teacher immediately. Online learning is not good for young students because they can not focus on the computer for a long time. They play games and do not study.

Second, some subjects need practice. For example, students who learn science need to do experiments in the lab. They can not do it at home. So classroom learning is more effective for these subjects.

In conclusion, online learning and classroom learning both have advantages. I think students should choose the way which is suitable for them. Online learning is good for adults but children should learn in class.`;

/** Bài band ~4: ngắn, nhiều lỗi ngữ pháp, ít từ nối, từ vựng rất cơ bản */
const BAND4 = `I think online learning is good. Many student like online learning. It is easy and cheap.

Online learning have many good thing. Student can learn at home. He go to school is very far. Online is fast. My friend enjoy to learn online every day.

But online learning is bad too. Student is lazy and play game. Teacher can not see student. I discuss about this with my friend and he agree with me.

I think online and class is good. Every students need to study hard.`;

/** Chèn lỗi người học vào mọi đoạn (hòa hợp chủ ngữ, giới từ, dạng động từ) */
function withErrors(text: string): string {
  let k = 0;
  return text
    .replace(/\bpeople\b/g, 'peoples')
    .replace(/\bstudents are\b/gi, 'students is')
    .replace(/\bdiscuss\b/g, 'discuss about')
    .replace(/\bmany (\w+?)s\b/g, 'many $1')
    .replace(/\bcan (\w+)/g, 'can to $1')
    // Cứ 2 câu lại chèn một cụm sai "Every students" ở đầu câu
    .replace(/\. ([A-Z])/g, (m, c) => (k++ % 2 === 0 ? `. Every students ${c.toLowerCase()}` : m));
}

/** Giữ lại khoảng `share` số từ đầu (giả lập bài viết dở dang) */
function truncate(text: string, share: number): string {
  const words = text.split(/(\s+)/);
  return words.slice(0, Math.round(words.length * share)).join('');
}

describe('hiệu chỉnh bộ chấm Writing (IELTS Task 2)', () => {
  let svc: ExamService;
  const real = globalThis.fetch;

  beforeAll(async () => {
    const fsName = 'node:fs';
    const fs = (await import(/* @vite-ignore */ fsName)) as { readFileSync(p: string, e: string): string };
    vi.stubGlobal('fetch', async (u: RequestInfo | URL) =>
      /dict\/en\.txt/.test(String(u)) ? new Response(fs.readFileSync('public/assets/dict/en.txt', 'utf8')) : real(u));
    localStorage.clear();
    svc = TestBed.inject(ExamService);
  });
  afterAll(() => vi.unstubAllGlobals());

  const task2: WritingTask[] = [...IELTS_WRITING, ...IELTS_TESTS.slice(0, 6).flatMap((t) => t.writing)].filter((t) => t.task === 2);
  const essay = task2.find((t) => t.id === 'ielts-w3')!;
  const band = async (text: string, task = essay) => (await svc.analyzeEssay(text, task)).band;

  it('bài mẫu của app đạt band 6.5–9', async () => {
    for (const t of task2) {
      const b = await band(t.model, t);
      expect(b, t.id).toBeGreaterThanOrEqual(6.5);
      expect(b, t.id).toBeLessThanOrEqual(9);
    }
  });

  it('bài người học viết tay được xếp đúng mức band', async () => {
    const b5 = await band(BAND5);
    const b4 = await band(BAND4);
    expect(b5).toBeGreaterThanOrEqual(4.5);
    expect(b5).toBeLessThanOrEqual(6.5);
    expect(b4).toBeLessThanOrEqual(5);
    expect(b4).toBeLessThan(b5);
  });

  it('giữ đúng thứ tự: bài mẫu > bài chèn lỗi / bài cắt ngắn > bài band 5', async () => {
    for (const t of task2) {
      const model = await band(t.model, t);
      const broken = await band(withErrors(t.model), t);
      const short = await band(truncate(t.model, 0.4), t);
      expect(broken, `${t.id} chèn lỗi`).toBeLessThan(model);
      expect(short, `${t.id} cắt ngắn`).toBeLessThanOrEqual(model - 1);
    }
  });
});

describe('hiệu chỉnh bộ chấm Speaking (câu trả lời tự do)', () => {
  /** Giả lập kết quả nhận dạng: nói đều với tốc độ `wpm`, ngừng `gap` giây giữa các câu */
  function asr(sentences: string[], wpm: number, gap = 0.3, conf = 0.9): AsrResult {
    const words: AsrWord[] = [];
    let t = 0;
    const d = 60 / wpm;
    for (const s of sentences) {
      for (const w of s.toLowerCase().replace(/[^a-z' ]/g, '').split(/\s+/).filter(Boolean)) {
        words.push({ word: w, conf, start: t, end: t + d * 0.9 });
        t += d;
      }
      t += gap;
    }
    return { text: words.map((w) => w.word).join(' '), words, segments: sentences.map((s) => s.toLowerCase().replace(/[^a-z' ]/g, '')), duration: t };
  }
  const ctx = { question: 'Do you prefer studying online or in a classroom? Why?', sample: 'I prefer studying in a classroom because I can ask teachers questions.', seconds: 45, exam: 'ielts' as const };
  const bandOf = (label: string) => Number(label.replace('Band ', ''));

  const strong = asr([
    'Personally I would say I prefer studying in a classroom although online courses are undeniably convenient',
    'The main reason is that I find it much easier to concentrate when a teacher is physically present',
    'For example last year I enrolled in an online course which I eventually abandoned because there was nobody to motivate me',
    'On the other hand if I had a demanding job I would probably choose online learning since it is far more flexible',
  ], 150, 0.25, 0.92);
  const weak = asr([
    'uh i like classroom', 'because uh teacher is good', 'online is uh not good', 'i i like friend in class',
  ], 70, 1.6, 0.7);

  it('câu trả lời trôi chảy, từ vựng tốt đạt band cao hơn hẳn câu trả lời ngập ngừng, đơn giản', () => {
    const s = bandOf(scoreFree(strong, ctx).label);
    const w = bandOf(scoreFree(weak, ctx).label);
    expect(s).toBeGreaterThanOrEqual(6);
    expect(w).toBeLessThanOrEqual(5);
    expect(s - w).toBeGreaterThanOrEqual(1.5);
  });

  it('phát âm và ngữ điệu kém kéo band Pronunciation xuống', () => {
    const good = scoreFree(strong, { ...ctx, phoneAccuracy: 0.95, intonation: 0.8 }).criteria.find((c) => c.id === 'p')!;
    const poor = scoreFree(strong, { ...ctx, phoneAccuracy: 0.7, intonation: 0.2 }).criteria.find((c) => c.id === 'p')!;
    expect(good.value).toBeGreaterThan(poor.value);
    expect(poor.value * 9).toBeLessThanOrEqual(5);
  });
});
