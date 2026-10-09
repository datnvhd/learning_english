/**
 * audio-key.spec.ts – Kiểm thử mã file âm thanh và độ phủ của gói âm thanh offline:
 * mọi từ vựng và câu ví dụ trong kho phải có file mp3 thu sẵn (npm run build:audio).
 */
import { describe, expect, it } from 'vitest';
import { audioKey, audioPath, normalizeAudioText } from './audio-key';
import { AUDIO_COUNT, AUDIO_KEYS } from '../data/audio-index';
import { VOCAB as daily } from '../data/vocab/daily';
import { VOCAB as b1 } from '../data/vocab/b1';
import { VOCAB as b2 } from '../data/vocab/b2';
import { VOCAB as ielts } from '../data/vocab/ielts';
import { VOCAB as toeic } from '../data/vocab/toeic';
import { DIALOGUES } from '../data/dialogues';

/** Tập mã đã có file */
const keys = new Set<string>();
for (let i = 0; i + 16 <= AUDIO_KEYS.length; i += 16) keys.add(AUDIO_KEYS.slice(i, i + 16));

describe('Âm thanh thu sẵn (offline)', () => {
  it('mã âm thanh ổn định, không phân biệt hoa thường và khoảng trắng thừa', () => {
    expect(audioKey('Hello  World ')).toBe(audioKey('hello world'));
    expect(audioKey('hello', 'f')).not.toBe(audioKey('hello', 'm'));
    expect(audioKey('mother')).toMatch(/^[0-9a-f]{16}$/);
    expect(normalizeAudioText('  A   b ')).toBe('a b');
    expect(audioPath('abcdef0123456789')).toBe('assets/audio/ab/abcdef0123456789.mp3');
  });

  it('danh sách mã khớp với số file đã thu', () => {
    expect(AUDIO_KEYS.length).toBe(AUDIO_COUNT * 16);
    expect(keys.size).toBe(AUDIO_COUNT);
  });

  it('mọi từ vựng và câu ví dụ (đời sống, B1, B2, IELTS, TOEIC) đều có file thu sẵn', () => {
    const missing: string[] = [];
    for (const v of [daily, b1, b2, ielts, toeic]) {
      for (const l of v.lessons) {
        for (const w of l.words) {
          if (!keys.has(audioKey(w[0]))) missing.push(w[0]);
          if (!keys.has(audioKey(w[4]))) missing.push(w[4]);
        }
      }
    }
    expect(missing).toEqual([]);
  });

  it('hội thoại có đủ hai giọng: A (nữ) và B (nam)', () => {
    const missing = DIALOGUES.flatMap((d) => d.lines).filter((l) => !keys.has(audioKey(l.text, l.who === 'B' ? 'm' : 'f')));
    expect(missing.map((l) => l.text)).toEqual([]);
  });
});
