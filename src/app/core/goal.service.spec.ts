/**
 * goal.service.spec.ts – Kiểm thử các phần bổ sung cho giao diện English Master:
 * điểm ước tính IELTS/TOEIC, thời gian học, nhật ký câu sai, lịch học và đề yêu thích.
 */
import { TestBed } from '@angular/core/testing';
import { beforeEach, describe, expect, it } from 'vitest';
import { AnswerResult } from '../models/question.model';
import { GoalService, bandText } from './goal.service';
import { ProgressService, defaultPlan } from './progress.service';
import { formatDuration } from './text-utils';

const res = (skill: AnswerResult['skill'], score: number, i: number): AnswerResult => ({ questionId: `q${i}`, skill, score, given: '', correct: '' });

describe('Mục tiêu, thời gian học, câu sai, lịch học', () => {
  let progress: ProgressService;
  let goals: GoalService;

  beforeEach(() => {
    localStorage.clear();
    TestBed.resetTestingModule();
    progress = TestBed.inject(ProgressService);
    goals = TestBed.inject(GoalService);
  });

  it('chưa luyện thi thì chưa có điểm ước tính', () => {
    expect(goals.ielts().overall).toBeNull();
    expect(goals.toeic().total).toBeNull();
    expect(bandText(null)).toBe('—');
    expect(goals.ielts().target).toBe(7);
    expect(goals.toeic().target).toBe(850);
  });

  it('ước tính band IELTS và điểm TOEIC từ tỉ lệ đúng của bài luyện thi', () => {
    // IELTS Reading đúng 30/40 -> band 7.0
    progress.recordSession({ mode: 'exam', skill: 'vocab', topicId: 'ielts', results: Array.from({ length: 40 }, (_, i) => res('reading', i < 30 ? 1 : 0, i)) });
    expect(goals.ielts().skills.reading).toBe(7);
    expect(goals.ielts().overall).toBe(7);
    expect(goals.ielts().percent).toBe(100);
    // TOEIC Listening đúng 50% -> 250/495
    progress.recordSession({ mode: 'exam', skill: 'vocab', topicId: 'toeic', results: Array.from({ length: 10 }, (_, i) => res('listening', i < 5 ? 1 : 0, i)) });
    expect(goals.toeic().listening).toBe(250);
    expect(goals.toeic().total).toBe(250);
  });

  it('cộng dồn thời gian học trong ngày', () => {
    progress.addTime(30);
    progress.addTime(60);
    expect(progress.todaySeconds()).toBe(90);
    expect(progress.secondsInLastDays(7)).toBe(90);
    expect(formatDuration(90)).toBe('1m');
    expect(formatDuration(2 * 3600 + 35 * 60)).toBe('2h 35m');
  });

  it('lưu câu sai, không lặp câu trùng và gỡ được từng câu', () => {
    const item = { skill: 'reading' as const, source: 'IELTS Reading', prompt: 'p', question: 'Q1', given: 'True', correct: 'False' };
    progress.logErrors([item, { ...item, question: 'Q2' }]);
    progress.logErrors([item]);
    expect(progress.errors().length).toBe(2);
    expect(progress.errors()[0].question).toBe('Q1'); // lần sai mới nhất đứng đầu
    progress.removeError(progress.errors()[0].id);
    expect(progress.errors().map((e) => e.question)).toEqual(['Q2']);
    progress.removeError();
    expect(progress.errors()).toEqual([]);
  });

  it('lịch học: mặc định gợi ý theo mục tiêu, lưu được lịch riêng', () => {
    expect(progress.plan()).toEqual(defaultPlan('daily'));
    expect(defaultPlan('toeic').some((p) => p.kind === 'toeic')).toBe(true);
    progress.setPlan([{ id: 'x', day: 0, start: '08:00', minutes: 30, title: 'IELTS Writing', kind: 'ielts' }]);
    expect(progress.plan().length).toBe(1);
    progress.setPlan(undefined);
    expect(progress.plan().length).toBeGreaterThan(5);
  });

  it('đánh dấu đề thi yêu thích', () => {
    expect(progress.isFav('ielts-full')).toBe(false);
    progress.toggleFav('ielts-full');
    expect(progress.isFav('ielts-full')).toBe(true);
    progress.toggleFav('ielts-full');
    expect(progress.isFav('ielts-full')).toBe(false);
  });
});
