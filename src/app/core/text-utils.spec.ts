/**
 * text-utils.spec.ts – Kiểm thử các hàm xử lý chuỗi (chấm bài viết/nói).
 */
import { describe, expect, it } from 'vitest';
import { charSimilarity, gradeTyped, normalizeText, wordSimilarity } from './text-utils';

describe('text-utils', () => {
  it('chuẩn hóa: bỏ dấu câu, chữ hoa, khoảng trắng thừa', () => {
    expect(normalizeText("  I'm   Going, to the Museum!  ")).toBe("i'm going to the museum");
  });

  it('độ giống theo ký tự', () => {
    expect(charSimilarity('hello', 'Hello!')).toBe(1);
    expect(charSimilarity('abc', 'xyz')).toBe(0);
  });

  it('độ giống theo từ dùng để chấm phần Nói', () => {
    expect(wordSimilarity("I'm going to the museum", "I'm going to the museum.")).toBe(1);
    expect(wordSimilarity('going museum', "I'm going to the museum")).toBeGreaterThan(0.5);
    expect(wordSimilarity('banana', 'I live near the station')).toBe(0);
  });

  it('chấm câu gõ tay: đúng / gần đúng / sai', () => {
    expect(gradeTyped('I live near the station', ['I live near the station.'], false).score).toBe(1);
    expect(gradeTyped('I live near the statoin', ['I live near the station.'], false).score).toBeGreaterThan(0);
    expect(gradeTyped('banana banana', ['I live near the station.'], false).score).toBe(0);
    // Từ đơn phải đúng chính tả tuyệt đối mới được điểm tối đa
    expect(gradeTyped('restaurent', ['restaurant'], true).score).toBe(0.5);
    expect(gradeTyped('restaurant', ['restaurant'], true).score).toBe(1);
  });
});
