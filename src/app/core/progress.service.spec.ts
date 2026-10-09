/**
 * progress.service.spec.ts – Kiểm thử lưu tiến độ, hộp nhớ Leitner, XP và huy hiệu.
 */
import { TestBed } from '@angular/core/testing';
import { beforeEach, describe, expect, it } from 'vitest';
import { AnswerResult } from '../models/question.model';
import { ProgressService, levelInfo } from './progress.service';

/** Tạo nhanh một kết quả trả lời */
const res = (wordId: string, score: number, skill: AnswerResult['skill'] = 'vocab'): AnswerResult => ({
  questionId: 'q' + wordId, skill, score, given: '', correct: '', wordId, topicId: 'daily',
});

describe('ProgressService', () => {
  let svc: ProgressService;

  beforeEach(() => {
    localStorage.clear();
    TestBed.resetTestingModule();
    svc = TestBed.inject(ProgressService);
  });

  it('trả lời đúng thì từ được coi là đã thuộc và có lịch ôn', () => {
    svc.recordSession({ mode: 'practice', skill: 'vocab', topicId: 'daily', results: [res('daily:mother', 1)] });
    expect(svc.isLearned('daily:mother')).toBe(true);
    expect(svc.learnedCount('daily')).toBe(1);
  });

  it('trả lời sai thì từ vào danh sách cần ôn ngay', () => {
    svc.recordSession({ mode: 'practice', skill: 'vocab', topicId: 'daily', results: [res('daily:father', 0)] });
    expect(svc.isLearned('daily:father')).toBe(false);
    expect(svc.dueWordIds()).toContain('daily:father');
  });

  it('cộng XP, cập nhật điểm kỹ năng và chuỗi ngày', () => {
    const s = svc.recordSession({
      mode: 'practice', skill: 'listening', topicId: 'daily',
      results: Array.from({ length: 10 }, (_, i) => res('daily:w' + i, 1, 'listening')),
    });
    expect(s.percent).toBe(100);
    expect(s.xp).toBe(120); // 10 câu x 10 + 20 thưởng
    expect(svc.bestScore('daily', 'listening')).toBe(100);
    expect(svc.streak()).toBe(1);
    expect(s.newBadges.some((b) => b.id === 'start')).toBe(true);
  });

  it('bài kiểm tra được lưu vào lịch sử', () => {
    svc.recordSession({ mode: 'test', skill: 'all', topicId: 'all', results: [res('daily:a', 1), res('daily:b', 0, 'reading')] });
    expect(svc.tests().length).toBe(1);
    expect(svc.tests()[0].percent).toBe(50);
  });

  it('sao lưu và khôi phục dữ liệu', () => {
    svc.toggleBookmark('daily:mother');
    const json = svc.exportJson();
    svc.reset();
    expect(svc.isBookmarked('daily:mother')).toBe(false);
    expect(svc.importJson(json)).toBe(true);
    expect(svc.isBookmarked('daily:mother')).toBe(true);
    expect(svc.importJson('không phải json')).toBe(false);
  });

  it('tính cấp độ từ XP', () => {
    expect(levelInfo(0).level).toBe(1);
    expect(levelInfo(50).level).toBe(2);
    expect(levelInfo(500).level).toBe(5);
  });
});
