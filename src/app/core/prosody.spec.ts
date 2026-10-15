import { describe, expect, it } from 'vitest';
import { TimedWord, analyzeProsody, pitchTrack, sentenceEnds } from './prosody';

const RATE = 16000;

/** Giọng tổng hợp: tần số cơ bản theo thời gian (hàm f(t)) + vài họa âm, độ lớn amp(t) */
function voice(seconds: number, f: (t: number) => number, amp: (t: number) => number = () => 0.5): Float32Array {
  const out = new Float32Array(Math.round(seconds * RATE));
  let phase = 0;
  for (let i = 0; i < out.length; i++) {
    const t = i / RATE;
    phase += (2 * Math.PI * f(t)) / RATE;
    out[i] = amp(t) * (Math.sin(phase) + 0.5 * Math.sin(2 * phase) + 0.25 * Math.sin(3 * phase));
  }
  return out;
}

/** Chia đều các từ theo thời gian */
function timed(words: string[], seconds: number): TimedWord[] {
  const d = seconds / words.length;
  return words.map((word, i) => ({ word, start: i * d, end: (i + 1) * d - 0.02 }));
}

describe('prosody', () => {
  it('dò đúng cao độ của giọng tổng hợp', () => {
    const { f0 } = pitchTrack(voice(0.5, () => 180), RATE);
    const voiced = Array.from(f0).filter((v) => v > 0);
    expect(voiced.length).toBeGreaterThan(20);
    const mean = voiced.reduce((a, b) => a + b, 0) / voiced.length;
    expect(Math.abs(mean - 180)).toBeLessThan(5);
  });

  it('giọng đều đều bị điểm thấp hơn giọng có lên xuống', () => {
    const words = 'the price of the new phone is too high for most students'.split(' ');
    const flat = analyzeProsody(voice(4, () => 150), timed(words, 4));
    const lively = analyzeProsody(voice(4, (t) => 150 * 2 ** ((4 * Math.sin(t * 2.5)) / 12)), timed(words, 4));
    expect(flat.range).toBeLessThan(1);
    expect(lively.range).toBeGreaterThan(4);
    expect(lively.score).toBeGreaterThan(flat.score + 0.3);
    expect(flat.notes.join(' ')).toContain('đều đều');
  });

  it('nhận ra từ nội dung được nhấn to hơn từ chức năng', () => {
    const words = 'the price of the phone is high for the students'.split(' ');
    const tw = timed(words, 5);
    const loudAt = (t: number) => {
      const w = tw.find((x) => t >= x.start && t <= x.end + 0.02);
      return w && !['the', 'of', 'is', 'for'].includes(w.word) ? 0.6 : 0.15;
    };
    const r = analyzeProsody(voice(5, () => 160, loudAt), tw);
    expect(r.stress).toBeGreaterThan(5);
  });

  it('chấm ngữ điệu cuối câu: câu kể xuống giọng, câu hỏi Yes/No lên giọng', () => {
    const words = 'i like it very much'.split(' ');
    const tw = timed(words, 2.5);
    const falling = analyzeProsody(voice(2.5, (t) => (t > 2 ? 180 - (t - 2) * 120 : 180)), tw, [{ last: 'much', rise: false }]);
    const rising = analyzeProsody(voice(2.5, (t) => (t > 2 ? 180 + (t - 2) * 120 : 180)), tw, [{ last: 'much', rise: false }]);
    expect(falling.contours).toEqual({ ok: 1, total: 1 });
    expect(rising.contours).toEqual({ ok: 0, total: 1 });
  });

  it('bản ghi im lặng không đo được', () => {
    expect(analyzeProsody(new Float32Array(RATE), []).score).toBe(0);
  });

  it('tách câu và nhận câu hỏi Yes/No', () => {
    expect(sentenceEnds('I like tea. Do you like coffee? Where do you live?')).toEqual([
      { last: 'tea', rise: false }, { last: 'coffee', rise: true }, { last: 'live', rise: false },
    ]);
  });
});
