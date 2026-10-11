/**
 * games.spec.ts – Kiểm thử phần logic của các trò chơi mới: Đoán từ, Xây câu, Thử thách ngữ pháp
 * và việc xoay vòng "Thử thách hôm nay".
 */
import { describe, expect, it } from 'vitest';
import { GAME_INFO, GAME_TYPES, dailyGame } from './game.model';
import { grammarQuestions } from './grammar-game.component';
import { markGuess } from './guess-game.component';
import { sentenceTiles } from './sentence-game.component';

describe('Đoán từ – chấm màu từng chữ', () => {
  it('đúng vị trí, sai vị trí và không có', () => {
    expect(markGuess('crane', 'crane')).toEqual(['hit', 'hit', 'hit', 'hit', 'hit']);
    expect(markGuess('nacre', 'crane')).toEqual(['near', 'near', 'near', 'near', 'hit']);
    expect(markGuess('built', 'crane')).toEqual(['miss', 'miss', 'miss', 'miss', 'miss']);
  });

  it('chữ lặp chỉ được tô theo số lần xuất hiện trong đáp án', () => {
    // Đáp án có một chữ "e": chữ "e" đúng vị trí được ưu tiên, chữ "e" còn lại là không có
    expect(markGuess('eerie', 'crane')).toEqual(['miss', 'miss', 'near', 'miss', 'hit']);
    // Đáp án "apple" có hai chữ "p"
    expect(markGuess('poppy', 'apple')).toEqual(['near', 'miss', 'hit', 'miss', 'miss']);
  });
});

describe('Xây câu – tách mảnh', () => {
  it('giữ dấu câu dính vào từ và bỏ khoảng trắng thừa', () => {
    expect(sentenceTiles('  My mother  cooks dinner every day. ')).toEqual(['My', 'mother', 'cooks', 'dinner', 'every', 'day.']);
  });
});

describe('Thử thách ngữ pháp – ngân hàng câu hỏi', () => {
  const all = grammarQuestions();

  it('có đủ câu để chơi', () => {
    expect(all.length).toBeGreaterThan(40);
  });

  it('mỗi câu có chỗ trống, đáp án đúng nằm trong lựa chọn, lựa chọn không trùng nhau và có giải thích', () => {
    for (const q of all) {
      expect(q.text, q.text).toMatch(/_{3,}/);
      expect(q.options, q.text).toContain(q.answer);
      expect(new Set(q.options).size, q.text).toBe(q.options.length);
      expect(q.options.length, q.text).toBeGreaterThanOrEqual(3);
      expect(q.explain.length, q.text).toBeGreaterThan(5);
    }
  });
});

describe('Danh sách trò chơi', () => {
  it('mọi trò chơi đều có thông tin hiển thị', () => {
    for (const g of GAME_TYPES) expect(GAME_INFO[g].title).toBeTruthy();
    expect(new Set(GAME_TYPES).size).toBe(Object.keys(GAME_INFO).length);
  });

  it('thử thách hôm nay cố định trong ngày và đổi sang trò khác vào hôm sau', () => {
    const d1 = new Date(2026, 9, 11, 8);
    const d1Late = new Date(2026, 9, 11, 23, 30);
    const d2 = new Date(2026, 9, 12, 0, 30);
    expect(dailyGame(d1)).toBe(dailyGame(d1Late));
    expect(dailyGame(d2)).not.toBe(dailyGame(d1));
  });
});
