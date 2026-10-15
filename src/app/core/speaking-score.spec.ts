/**
 * speaking-score.spec.ts – Kiểm thử chấm bài nói tự động (đọc theo mẫu và trả lời tự do).
 * Kết quả nhận dạng được giả lập: mỗi từ cách đều nhau theo tốc độ cho trước.
 */
import { describe, expect, it } from 'vitest';
import { AsrResult, HESITATION_MARK, alignWords, markHesitations, numberWords, scoreFree, scoreReading, speechTokens } from './speaking-score';

/** Tạo kết quả nhận dạng giả: `wpm` từ/phút, `conf` độ tin cậy, `gapAt` chèn chỗ ngừng 2 giây trước các từ này */
function asr(text: string, opts: { wpm?: number; conf?: number; gapAt?: number[]; segment?: number } = {}): AsrResult {
  const toks = text.toLowerCase().replace(/[^a-z' ]+/g, ' ').split(/\s+/).filter(Boolean);
  const step = 60 / (opts.wpm ?? 130);
  let t = 0.3;
  const words = toks.map((word, i) => {
    if (opts.gapAt?.includes(i)) t += 2;
    const w = { word, conf: opts.conf ?? 0.95, start: t, end: t + step * 0.8 };
    t += step;
    return w;
  });
  const seg = opts.segment ?? 12;
  const segments: string[] = [];
  for (let i = 0; i < toks.length; i += seg) segments.push(toks.slice(i, i + seg).join(' '));
  return { text: toks.join(' '), words, segments, duration: t + 0.3 };
}

describe('Chuẩn hóa chữ', () => {
  it('đổi số sang chữ như bộ nhận dạng', () => {
    expect(numberWords(45)).toBe('forty five');
    expect(numberWords(2026)).toBe('two thousand twenty six');
    expect(speechTokens('It costs $20, about 30% off!')).toEqual(['it', 'costs', 'twenty', 'dollars', 'about', 'thirty', 'percent', 'off']);
    expect(speechTokens('The café is open until nine p.m.')).toEqual(['the', 'cafe', 'is', 'open', 'until', 'nine', 'pm']);
  });

  it('gióng hàng: từ thiếu và từ đọc sai đều bị đánh dấu', () => {
    const r = asr('my mother cook dinner evening');
    const a = alignWords(speechTokens('My mother cooks dinner every evening.'), r.words);
    expect(a.map((w) => w.status)).toEqual(['ok', 'ok', 'miss', 'ok', 'miss', 'ok']);
    expect(a[2].heard).toBe('cook');
  });
});

describe('Chấm đọc theo mẫu', () => {
  const target = 'Before we begin today’s workshop, I would like to go over a few details.';

  it('đọc đúng, rõ, tốc độ tự nhiên được điểm cao', () => {
    const s = scoreReading(target, asr("before we begin today's workshop i would like to go over a few details"));
    expect(s.overall).toBeGreaterThan(0.9);
    expect(s.words?.every((w) => w.status === 'ok')).toBe(true);
  });

  it('đọc thiếu nhiều từ bị trừ điểm và có lời khuyên chỉ ra từ thiếu', () => {
    const good = scoreReading(target, asr("before we begin today's workshop i would like to go over a few details")).overall;
    const s = scoreReading(target, asr('before we begin workshop go over details'));
    expect(s.overall).toBeLessThan(good - 0.25);
    expect(s.advice.join(' ')).toContain('today');
  });

  it('phát âm không rõ (độ tin cậy thấp) bị trừ điểm phát âm', () => {
    const clear = scoreReading(target, asr("before we begin today's workshop i would like to go over a few details", { conf: 0.98 }));
    const muddy = scoreReading(target, asr("before we begin today's workshop i would like to go over a few details", { conf: 0.45 }));
    const pron = (s: typeof clear) => s.criteria.find((c) => c.id === 'pron')!.value;
    expect(pron(muddy)).toBeLessThan(pron(clear) - 0.2);
  });

  it('ngừng nhiều lần làm giảm điểm trôi chảy', () => {
    const smooth = scoreReading(target, asr("before we begin today's workshop i would like to go over a few details"));
    const choppy = scoreReading(target, asr("before we begin today's workshop i would like to go over a few details", { gapAt: [2, 4, 7, 10] }));
    const flu = (s: typeof smooth) => s.criteria.find((c) => c.id === 'fluency')!.value;
    expect(flu(choppy)).toBeLessThan(flu(smooth));
  });

  it('từ ghép bị tách khi nhận dạng vẫn được tính đúng', () => {
    expect(scoreReading('helpdesk', asr('help desk')).overall).toBeGreaterThan(0.9);
  });

  it('im lặng thì 0 điểm', () => {
    expect(scoreReading(target, asr('')).overall).toBe(0);
    expect(scoreReading('2', asr('two')).overall).toBeGreaterThan(0.9);
  });

  it('đọc thiếu một nửa đoạn chỉ được 1/3 theo thang TOEIC', () => {
    const half = scoreReading(target, asr("before we begin today's workshop i would"), 3);
    expect(half.label).toBe('1/3');
  });

  it('thang điểm TOEIC 0–3', () => {
    expect(scoreReading(target, asr("before we begin today's workshop i would like to go over a few details"), 3).label).toBe('3/3');
  });
});

describe('Chấm trả lời tự do', () => {
  const ctx = {
    question: 'Do you enjoy cooking? Why or why not?',
    sample: 'Yes, I really enjoy cooking because it helps me relax after work. I usually cook dinner for my family at the weekend.',
    seconds: 30, exam: 'ielts' as const,
  };
  const rich = 'yes i really enjoy cooking especially on weekends because it helps me relax after a stressful week ' +
    'for example last sunday i prepared a traditional vietnamese dish which my grandmother taught me when i was a child ' +
    'although it took quite a long time my family absolutely loved it and if i have more free time in the future i would like to take a professional cooking course';
  const poor = 'yes i like cooking i like cooking food i like it';

  it('câu trả lời dài, mạch lạc, đa dạng được band cao hơn hẳn câu trả lời ngắn, lặp từ', () => {
    const a = scoreFree(asr(rich), ctx);
    const b = scoreFree(asr(poor), ctx);
    expect(a.overall).toBeGreaterThan(b.overall + 0.25);
    expect(a.criteria).toHaveLength(4);
    expect(a.label).toMatch(/^Band \d\.\d$/);
    expect(parseFloat(a.label.slice(5))).toBeGreaterThanOrEqual(6);
    expect(parseFloat(b.label.slice(5))).toBeLessThanOrEqual(5);
  });

  it('câu trả lời lạc đề bị giới hạn điểm', () => {
    const off = 'my favourite football team won the championship last season and the players trained very hard every single day in the stadium with their coach';
    const s = scoreFree(asr(off), ctx);
    expect(s.overall).toBeLessThanOrEqual(0.45);
    expect(s.advice.join(' ')).toContain('bám sát câu hỏi');
  });

  it('nói ngập ngừng, nhiều "uh" bị trừ điểm trôi chảy', () => {
    const smooth = scoreFree(asr(rich), ctx);
    const hesitant = scoreFree(asr(rich.replace(/ because | which | although | and /g, ' uh um $& '), { wpm: 70, gapAt: [5, 12, 20, 28, 35, 44] }), ctx);
    const flu = (s: typeof smooth) => s.criteria.find((c) => c.id === 'fc')!.value;
    expect(flu(hesitant)).toBeLessThan(flu(smooth) - 0.15);
  });

  it('không nghe được gì thì không chấm', () => {
    const s = scoreFree(asr(''), ctx);
    expect(s.overall).toBe(0);
    expect(s.label).toBe('Chưa chấm được');
  });

  it('TOEIC dùng thang điểm 0–3 / 0–5 với 4 tiêu chí ETS', () => {
    const s = scoreFree(asr(rich), { ...ctx, exam: 'toeic', maxPoints: 5 });
    expect(s.label).toMatch(/^[0-5]\/5$/);
    expect(s.criteria.map((c) => c.id)).toEqual(['fc', 'lr', 'gra', 'p']);
  });
});

describe('Lọc tiếng ậm ừ ("ờm", "ừ") bị nhận nhầm thành từ tiếng Anh', () => {
  /** Kết quả nhận dạng thật (vosk) của bản ghi thử: câu tiếng Anh xen "ờm / ừ / à" của người Việt */
  const rec = (rows: [string, number, number, number][], segments: string[]): AsrResult => ({
    text: segments.join(' '), segments, duration: rows[rows.length - 1][3], words: rows.map(([word, conf, start, end]) => ({ word, conf, start, end })),
  });
  const words = (r: AsrResult) => r.words.filter((w) => w.word !== 'uh').map((w) => w.word).join(' ');

  it('bỏ "ờm" → "i\'m", "ừ" → "who" / "oh" đứng riêng giữa các khoảng lặng', () => {
    const r = markHesitations(rec([["i'm", 1, 0.21, 0.48], ['i', 1, 2.04, 2.19], ['think', 1, 2.19, 2.43], ['studying', 1, 2.43, 2.91], ['online', 0.71, 2.91, 3.39],
      ['is', 1, 3.39, 3.51], ['convenient', 1, 3.51, 4.2], ['who', 0.85, 5.25, 5.49], ['because', 1, 7.08, 7.47], ['i', 1, 7.47, 7.56], ['can', 1, 7.56, 7.74],
      ['learn', 1, 7.74, 7.98], ['at', 0.82, 7.98, 8.1], ['home', 1, 8.1, 8.49], ['oh', 0.68, 9.63, 10.11], ['but', 1, 11.31, 11.49], ['i', 1, 11.52, 11.64],
      ['prefer', 1, 11.64, 12.09], ['the', 1, 12.09, 12.21], ['classroom', 1, 12.21, 12.84]],
    ["i'm", 'i think studying online is convenient', 'who', 'because i can learn at home', 'oh', 'but i prefer the classroom']));
    expect(words(r)).toBe('i think studying online is convenient because i can learn at home but i prefer the classroom');
    expect(r.segments).toEqual(['i think studying online is convenient', 'because i can learn at home', 'but i prefer the classroom']);
    expect(r.text.startsWith(HESITATION_MARK)).toBe(true);
    expect(r.text).toContain('at home'); // "home" trong câu không bị coi là ậm ừ
  });

  it('bỏ "ờ à" → "ah ah", "ờm ờm" → "i\'m i\'m", "ừm" → "him"', () => {
    const r = markHesitations(rec([['him', 0.2, 0.24, 0.48], ['my', 1, 2.04, 2.25], ['hometown', 1, 2.25, 2.76], ['is', 0.84, 2.76, 2.91], ['a', 1, 2.91, 2.97],
      ['small', 1, 2.97, 3.3], ['city', 1, 3.3, 3.75], ['ah', 0.55, 4.83, 5.07], ['ah', 1, 6.69, 6.96], ['it', 1, 8.55, 8.73], ['is', 1, 8.73, 8.85],
      ['very', 1, 8.85, 9.15], ['quiet', 1, 9.15, 9.54], ['and', 1, 9.54, 9.69], ['peaceful', 1, 9.69, 10.2], ["i'm", 1, 11.28, 11.49], ["i'm", 0.6, 11.49, 11.76],
      ['i', 1, 13.08, 13.23], ['love', 1, 13.23, 13.5], ['it', 1, 13.5, 13.71]],
    ['him', 'my hometown is a small city', 'ah', 'ah', 'it is very quiet and peaceful', "i'm i'm", 'i love it']));
    expect(words(r)).toBe('my hometown is a small city it is very quiet and peaceful i love it');
  });

  it('"ờm" ở cuối câu trả lời và "ờm" dính liền trước "I"', () => {
    const end = markHesitations(rec([['it', 1, 5.1, 5.28], ['takes', 1, 5.28, 5.58], ['about', 1, 5.58, 5.88], ['thirty', 1, 5.88, 6.24], ['minutes', 1, 6.24, 6.72], ["i'm", 0.67, 7.74, 8.01]],
      ['it takes about thirty minutes', "i'm"]));
    expect(words(end)).toBe('it takes about thirty minutes');
    const glued = markHesitations(rec([["i'm", 0.9, 0, 0.3], ['i', 1, 0.32, 0.4], ['think', 1, 0.4, 0.7], ['so', 1, 0.7, 0.9]], ["i'm i think so"]));
    expect(words(glued)).toBe('i think so');
  });

  it('giữ nguyên câu nói bình thường có "I\'m", "who", "and", "the"', () => {
    const rows: [string, number, number, number][] = [["i'm", 1, 0, 0.2], ['a', 1, 0.2, 0.3], ['teacher', 1, 0.3, 0.7], ['who', 1, 1.2, 1.4], ['loves', 1, 1.4, 1.7],
      ['music', 1, 1.7, 2.1], ['and', 1, 2.6, 2.8], ['the', 1, 3.3, 3.4], ['sea', 1, 3.4, 3.8]];
    const r = rec(rows, ["i'm a teacher", 'who loves music', 'and', 'the sea']);
    expect(markHesitations(r)).toBe(r);
  });

  it('tiếng ậm ừ được tính là ngập ngừng khi chấm', () => {
    const r = markHesitations(rec([['him', 0.3, 0, 0.3], ['i', 1, 1, 1.1], ['like', 1, 1.1, 1.4], ['music', 1, 1.4, 1.9], ['oh', 0.6, 2.5, 2.9], ['very', 1, 3.5, 3.7], ['much', 1, 3.7, 4]],
      ['him', 'i like music', 'oh', 'very much']));
    const s = scoreFree(r, { question: 'Do you like music?', sample: 'Yes, I like music.', seconds: 30, exam: 'ielts' });
    expect(s.criteria.find((c) => c.id === 'fc')!.note).toContain('"uh/um"');
    expect(s.transcript).not.toContain('him');
  });
});
