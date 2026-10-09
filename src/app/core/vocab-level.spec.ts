/**
 * vocab-level.spec.ts – Kiểm thử trình độ CEFR của kho từ: mọi từ có nhãn hợp lệ,
 * chủ đề B1 chỉ gồm từ B1, chủ đề B2 chỉ gồm từ B2 và không trùng từ với các chủ đề khác.
 */
import { TestBed } from '@angular/core/testing';
import { describe, expect, it } from 'vitest';
import { CEFR_LEVELS } from '../models/vocab.model';
import { VocabService } from './vocab.service';

describe('Trình độ CEFR của từ vựng', () => {
  it('mọi từ đều có trình độ A1–B2; chủ đề B1/B2 đúng trình độ và không trùng từ', async () => {
    const all = await TestBed.inject(VocabService).loadMany('all');
    const words = all.flatMap((t) => t.words);
    expect(words.filter((w) => !CEFR_LEVELS.includes(w.level))).toEqual([]);

    const b1 = all.find((t) => t.topicId === 'b1')!;
    const b2 = all.find((t) => t.topicId === 'b2')!;
    expect(b1.words.length).toBe(300);
    expect(b2.words.length).toBe(300);
    expect(b1.words.every((w) => w.level === 'B1')).toBe(true);
    expect(b2.words.every((w) => w.level === 'B2')).toBe(true);

    const others = new Set(all.filter((t) => t.topicId !== 'b1' && t.topicId !== 'b2').flatMap((t) => t.words.map((w) => w.word.toLowerCase())));
    const dup = [...b1.words, ...b2.words].map((w) => w.word.toLowerCase()).filter((w) => others.has(w));
    expect(dup).toEqual([]);

    // Trọng tâm B1–B2: chiếm hơn một nửa kho từ
    const upper = words.filter((w) => w.level === 'B1' || w.level === 'B2').length;
    expect(upper / words.length).toBeGreaterThan(0.5);
  });
});
