/**
 * exam.service.spec.ts – Kiểm thử bộ sinh đề IELTS/TOEIC, phân tích bài viết và quy đổi điểm.
 */
import { TestBed } from '@angular/core/testing';
import { describe, expect, it } from 'vitest';
import { EXAM_SECTIONS } from '../data/exam/sections';
import { IELTS_WRITING } from '../data/exam/ielts';
import { TOEIC_PART1 } from '../data/exam/toeic-part1';
import { TOEIC_S_PICTURE, TOEIC_W_EMAIL, TOEIC_W_OPINION, TOEIC_W_PICTURE } from '../data/exam/toeic-sw';
import { PHOTOS } from '../data/photos';
import { McqQuestion } from '../models/question.model';
import { ExamService, gradePicSentence, toeicSwScaled } from './exam.service';

describe('ExamService', () => {
  const svc = () => TestBed.inject(ExamService);

  it('mỗi phần thi sinh được câu hỏi hợp lệ', () => {
    for (const s of EXAM_SECTIONS) {
      const qs = svc().build(s.id);
      expect(qs.length, s.id).toBeGreaterThan(0);
      for (const q of qs) {
        if (q.kind === 'mcq') {
          const m = q as McqQuestion;
          expect(new Set(m.options).size, `${s.id}: lựa chọn trùng`).toBe(m.options.length);
          expect(m.answer).toBeGreaterThanOrEqual(0);
        }
      }
    }
  });

  it('thi thử TOEIC L&R có 51 câu, IELTS có đủ 4 kỹ năng', () => {
    const toeic = svc().buildMock('toeic');
    expect(toeic.questions.length).toBe(51);
    const ielts = svc().buildMock('ielts');
    const skills = new Set(ielts.questions.map((q) => q.skill));
    for (const k of ['listening', 'reading', 'writing', 'speaking']) expect(skills.has(k as never), k).toBe(true);
    expect(ielts.minutes).toBeGreaterThan(0);
  });

  it('phân tích bài viết: bài mẫu được band cao hơn bài quá ngắn', async () => {
    const task = IELTS_WRITING.find((t) => t.task === 2)!;
    const good = await svc().analyzeEssay(task.model, task);
    const bad = await svc().analyzeEssay('I think it is good. Yes.', task);
    expect(good.band).toBeGreaterThan(bad.band);
    expect(good.words).toBeGreaterThan(200);
    expect(bad.band).toBeLessThanOrEqual(4.5);
  });

  it('bài mẫu Writing đạt số từ tối thiểu của đề', () => {
    for (const t of IELTS_WRITING) expect(t.model.split(/\s+/).length, t.id).toBeGreaterThanOrEqual(t.minWords);
  });

  it('quy đổi điểm: TOEIC tối đa 990 và IELTS band hợp lệ', () => {
    const res = (skill: 'listening' | 'reading', score: number) => ({ questionId: 'q', skill, score, given: '', correct: '' });
    const perfect = { questions: [], seconds: 1, results: [res('listening', 1), res('reading', 1)] };
    expect(svc().summarize('toeic', 'mock', perfect).headline).toContain('990');
    const ielts = svc().summarize('ielts', 'mock', { ...perfect });
    expect(ielts.headline).toContain('9.0');
  });

  // ------------------------------------------------------------------ TOEIC mở rộng
  it('TOEIC Part 1: mọi ảnh đều có trong kho ảnh offline, 4 câu mô tả khác nhau', () => {
    for (const it of TOEIC_PART1) {
      expect(PHOTOS[it.photo], it.photo).toBeTruthy();
      expect(new Set([it.a, ...it.wrong]).size, it.photo).toBe(4);
    }
    const qs = svc().build('toeic-part1') as McqQuestion[];
    expect(qs.length).toBe(6);
    for (const q of qs) {
      expect(q.image).toMatch(/^assets\/photos\//);
      expect(q.hideOptions).toBe(true);
      // "Look at the picture." + 4 lựa chọn A–D
      expect(q.audioParts?.length).toBe(5);
      expect(q.audioParts?.[q.answer + 1]).toContain(q.options[q.answer]);
    }
  });

  it('TOEIC Speaking/Writing: ảnh của đề mô tả tranh và viết câu đều tồn tại', () => {
    for (const it of TOEIC_S_PICTURE) expect(it.image, it.id).toMatch(/^assets\/photos\//);
    for (const it of TOEIC_W_PICTURE) expect(PHOTOS[it.photo], it.photo).toBeTruthy();
  });

  it('chấm câu viết theo tranh: câu mẫu đạt 3/3, thiếu từ bị trừ điểm', () => {
    for (const it of TOEIC_W_PICTURE) {
      for (const sample of it.samples) expect(gradePicSentence(sample, it.words).points, sample).toBe(3);
    }
    const words: [string[], string[]] = [['woman', 'women'], ['laptop', 'laptops']];
    expect(gradePicSentence('', words).points).toBe(0);
    expect(gradePicSentence('The cat is sleeping on the sofa.', words).points).toBe(0);
    expect(gradePicSentence('A woman is sitting near the window.', words).points).toBe(1);
    expect(gradePicSentence('a woman is using her laptop', words).points).toBe(2);
    expect(gradePicSentence('Two women are working on laptops.', words).points).toBe(3);
    // động từ dùng như danh từ sau mạo từ → không được điểm tối đa
    const verbs: [string[], string[]] = [['train', 'trains'], ['arrive', 'arrives', 'arriving', 'arrived']];
    expect(gradePicSentence('The train is near the arrive.', verbs).points).toBe(2);
    expect(gradePicSentence('The train is arriving at the station.', verbs).points).toBe(3);
    // hòa hợp chủ ngữ – động từ
    const market: [string[], string[]] = [['people'], ['market', 'markets']];
    expect(gradePicSentence('The people is near the market.', market).points).toBe(2);
    expect(gradePicSentence('Many people are shopping at the market.', market).points).toBe(3);
    expect(gradePicSentence('The table are empty now.', [['table', 'tables'], ['empty']]).points).toBe(2);
  });

  it('TOEIC email: bài mẫu đủ ý và được điểm cao, email sơ sài bị điểm thấp', async () => {
    for (const t of TOEIC_W_EMAIL) {
      const a = await svc().analyzeEssay(t.model, t);
      expect(a.band, t.id).toBeGreaterThanOrEqual(3);
      expect(a.label).toContain('/4');
      expect(a.parts.slice(0, t.checks!.length).every((p) => p.value === 1), `${t.id}: thiếu ý bắt buộc`).toBe(true);
    }
    const weak = await svc().analyzeEssay('ok thanks', TOEIC_W_EMAIL[0]);
    expect(weak.band).toBeLessThanOrEqual(1);
  });

  it('TOEIC bài luận: bài mẫu ≥ 300 từ và đạt ít nhất 4/5', async () => {
    for (const t of TOEIC_W_OPINION) {
      expect(t.model.split(/\s+/).length, t.id).toBeGreaterThanOrEqual(300);
      const a = await svc().analyzeEssay(t.model, t);
      expect(a.band, t.id).toBeGreaterThanOrEqual(4);
    }
  });

  it('thi thử TOEIC Speaking & Writing có đủ 2 kỹ năng và quy đổi thang 0–200', () => {
    const sw = svc().buildMock('toeic', 'sw');
    const skills = new Set(sw.questions.map((q) => q.skill));
    expect([...skills].sort()).toEqual(['speaking', 'writing']);
    expect(sw.questions.filter((q) => q.skill === 'speaking').length).toBe(9);
    const res = (skill: 'speaking' | 'writing', score: number) => ({ questionId: 'q', skill, score, given: '', correct: '' });
    const sum = svc().summarize('toeic', 'mock-sw', { questions: [], seconds: 1, results: [res('speaking', 1), res('writing', 0.5)] });
    expect(sum.label).toBe('S 200 · W 100');
    expect(toeicSwScaled(73)).toBe(150);
  });

  it('TOEIC Part 3/4 dạng "Look at the graphic" hiển thị bảng biểu', () => {
    const qs = [...svc().build('toeic-part3', 60), ...svc().build('toeic-part4', 60)];
    const graphic = qs.filter((q) => q.focus?.startsWith('Look at the graphic'));
    expect(graphic.length).toBeGreaterThanOrEqual(3);
    for (const q of graphic) expect(q.passage?.text).toContain(' | ');
  });
});
