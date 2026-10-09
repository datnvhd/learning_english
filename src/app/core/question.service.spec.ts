/**
 * question.service.spec.ts – Kiểm thử dữ liệu từ vựng đóng gói và bộ sinh câu hỏi.
 */
import { TestBed } from '@angular/core/testing';
import { describe, expect, it } from 'vitest';
import { TOPIC_IDS } from '../data/topics';
import { LANGUAGE_SKILLS } from '../models/content.model';
import { McqQuestion } from '../models/question.model';
import { QuestionService } from './question.service';
import { VocabService } from './vocab.service';

describe('Dữ liệu từ vựng đóng gói', () => {
  it('mỗi chủ đề có từ 300 từ trở lên, đủ phiên âm và ví dụ', async () => {
    const vocab = TestBed.inject(VocabService);
    for (const id of TOPIC_IDS) {
      const t = await vocab.load(id);
      expect(t.words.length, `chủ đề ${id}`).toBeGreaterThanOrEqual(300);
      for (const w of t.words) {
        expect(w.ipa, `${id}:${w.word} thiếu IPA`).not.toBe('');
        expect(w.vi, `${id}:${w.word} thiếu nghĩa`).not.toBe('');
        expect(w.ex.length, `${id}:${w.word} thiếu ví dụ`).toBeGreaterThan(5);
      }
      // Mã từ phải duy nhất trong chủ đề
      expect(new Set(t.words.map((w) => w.id)).size).toBe(t.words.length);
    }
  });
});

describe('QuestionService', () => {
  const svc = () => TestBed.inject(QuestionService);

  it('luyện từng kỹ năng đủ 10 câu và mọi trắc nghiệm có đáp án hợp lệ', async () => {
    for (const skill of ['vocab', ...LANGUAGE_SKILLS] as const) {
      const qs = await svc().forSkill(skill, 'daily', 10);
      expect(qs.length, skill).toBe(10);
      for (const q of qs) {
        if (q.kind === 'mcq') {
          const m = q as McqQuestion;
          expect(new Set(m.options).size, `${skill}: đáp án trùng nhau`).toBe(m.options.length);
          expect(m.options[m.answer]).toBeTruthy();
        }
      }
    }
  });

  it('bài kiểm tra tổng quát gồm 25 câu, mỗi kỹ năng 5 câu', async () => {
    const qs = await svc().forTest('all', 'all');
    expect(qs.length).toBe(25);
    for (const s of ['vocab', ...LANGUAGE_SKILLS]) expect(qs.filter((q) => q.skill === s).length, s).toBe(5);
  });

  it('bài kiểm tra theo kỹ năng có 20 câu cùng kỹ năng', async () => {
    const qs = await svc().forTest('reading', 'travel');
    expect(qs.length).toBe(20);
    expect(qs.every((q) => q.skill === 'reading')).toBe(true);
  });

  it('bài học nhanh dùng từ của đúng bài học', async () => {
    const qs = await svc().forLesson('food', 0);
    expect(qs.length).toBe(12);
    expect(qs.every((q) => q.wordId?.startsWith('food:'))).toBe(true);
  });
});

describe('Ngữ pháp', () => {
  it('mỗi bài ngữ pháp sinh 10 câu hợp lệ (8 điền + 2 sắp xếp)', async () => {
    const { GRAMMAR } = await import('../data/grammar');
    const svc = TestBed.inject(QuestionService);
    expect(GRAMMAR.length).toBeGreaterThanOrEqual(12);
    for (const g of GRAMMAR) {
      const qs = svc.forGrammar(g.id);
      expect(qs.length, g.id).toBe(10);
      for (const q of qs) {
        if (q.kind === 'mcq') {
          expect(q.options[q.answer], g.id).toBeTruthy();
          expect(new Set(q.options).size, `${g.id}: lựa chọn trùng`).toBe(q.options.length);
          expect(q.focus, g.id).toContain('____');
        }
      }
    }
  });
});
