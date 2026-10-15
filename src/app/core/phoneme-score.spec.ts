/**
 * phoneme-score.spec.ts – Kiểm thử chấm phát âm từng âm: đổi ARPAbet → IPA, tách chuỗi âm,
 * gióng hàng và chẩn đoán lỗi người Việt hay mắc.
 */
import { describe, expect, it } from 'vitest';
import { parseCmuDict, scorePronunciation, splitPhones } from './phoneme-score';

const DICT = parseCmuDict([
  'think TH IH1 NG K', 'three TH R IY1', 'books B UH1 K S', 'ship SH IH1 P', 'very V EH1 R IY0', 'light L AY1 T',
  'with W IH1 DH', 'with(2) W IH1 TH', 'to T UW1', 'to(2) T AH0', 'the DH AH0', 'i AY1', 'like L AY1 K', 'cat K AE1 T',
].join('\n'));

describe('Phát âm từng âm', () => {
  it('tách chuỗi IPA thành âm (ghép âm đôi aɪ, oʊ...)', () => {
    expect(splitPhones('aɪ laɪk ðə kæt')).toEqual([['aɪ'], ['l', 'aɪ', 'k'], ['ð', 'ə'], ['k', 'æ', 't']]);
  });

  it('đọc chuẩn thì gần như 100%', () => {
    const r = scorePronunciation(['I', 'like', 'the', 'cat'], 'aɪ laɪk ðə kæt', DICT);
    expect(r.accuracy).toBeGreaterThan(0.95);
    expect(r.words).toEqual([]);
  });

  it('chẩn đoán lỗi điển hình: /θ/→/t/, mất âm cuối, /ʃ/→/s/, /v/→/b/', () => {
    const r = scorePronunciation(['think', 'ship', 'books', 'very'], 'tɪŋk sɪp bʊk bɛɹi', DICT);
    const issues = r.words.flatMap((w) => w.issues).join(' | ');
    expect(issues).toContain('/θ/ bị đọc thành /t/');
    expect(issues).toContain('mất âm cuối /s/');
    expect(issues).toContain('/ʃ/ bị đọc thành /s/');
    expect(issues).toContain('/v/ bị đọc thành /b/');
    expect(r.accuracy).toBeLessThan(0.8);
  });

  it('không bắt lỗi từ chức năng đọc lướt và chọn đúng biến thể (with /wɪθ/)', () => {
    const r = scorePronunciation(['to', 'the', 'light', 'with'], 'tə ðɪ laɪt wɪθ', DICT);
    expect(r.words).toEqual([]);
    expect(r.accuracy).toBeGreaterThan(0.95);
  });

  it('từ không có trong từ điển phát âm bị bỏ qua', () => {
    expect(scorePronunciation(['Nguyen'], 'ŋujɛn', DICT).scored).toBe(0);
  });
});
