/**
 * grammar.spec.ts – Kiểm tra dữ liệu ngữ pháp A1–C1: id không trùng, icon có trong bộ icon,
 * mỗi câu luyện có đúng một chỗ trống, đáp án đúng không lặp trong đáp án sai, đủ trình độ B1–C1.
 */
import { describe, expect, it } from 'vitest';
import { ICONS } from '../theme/icons';
import { GRAMMAR } from './grammar';

describe('Dữ liệu ngữ pháp', () => {
  it('id không trùng, icon hợp lệ, đủ các trình độ', () => {
    expect(new Set(GRAMMAR.map((g) => g.id)).size).toBe(GRAMMAR.length);
    expect(GRAMMAR.filter((g) => !(g.ico in ICONS)).map((g) => g.id)).toEqual([]);
    for (const lv of ['starter', 'basic', 'intermediate', 'upper', 'advanced'] as const) expect(GRAMMAR.some((g) => g.level === lv), lv).toBe(true);
  });

  it('mỗi câu luyện hợp lệ', () => {
    for (const g of GRAMMAR) {
      expect(g.quiz.length, g.id).toBeGreaterThanOrEqual(8);
      expect(g.examples.length, g.id).toBeGreaterThanOrEqual(2);
      for (const row of g.quiz) {
        const [sentence, correct, ...rest] = row;
        const wrongs = rest.slice(0, -1);
        expect(sentence.split('____').length - 1, `${g.id}: ${sentence}`).toBe(1);
        expect(wrongs.length, `${g.id}: ${sentence}`).toBeGreaterThanOrEqual(2);
        expect(wrongs.includes(correct), `${g.id}: ${sentence}`).toBe(false);
        expect(new Set(wrongs).size, `${g.id}: ${sentence}`).toBe(wrongs.length);
      }
    }
  });
});
