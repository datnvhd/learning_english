/**
 * exam-tests.spec.ts – Kiểm thử bộ đề cố định: 20 đề IELTS + 20 đề TOEIC (data/exam/tests).
 * Mỗi đề phải đủ số câu, đáp án hợp lệ, có lời giải thích và có âm thanh thu sẵn để làm offline.
 */
import { TestBed } from '@angular/core/testing';
import { describe, expect, it } from 'vitest';
import { AUDIO_KEYS } from '../data/audio-index';
import { FULL_TESTS, TEST_CATALOG, TEST_COUNT, formatOf, testTitle } from '../data/exam/tests/catalog';
import { IELTS_TESTS } from '../data/exam/tests/ielts-all';
import { TOEIC_TESTS } from '../data/exam/tests/toeic-all';
import { ExamAudio, ExamMcq, ExamPassage, isFullExam, testNoOf } from '../models/exam.model';
import { McqQuestion } from '../models/question.model';
import { audioKey } from './audio-key';
import { ExamService, part1ForTest } from './exam.service';

const keys = new Set<string>();
for (let i = 0; i + 16 <= AUDIO_KEYS.length; i += 16) keys.add(AUDIO_KEYS.slice(i, i + 16));

/** Mọi câu trắc nghiệm: đủ số lựa chọn, không trùng, có giải thích */
function checkMcqs(items: { mcq: ExamMcq[] }[], tag: string, options?: number): void {
  for (const m of items.flatMap((x) => x.mcq)) {
    const all = [m.a, ...m.wrong];
    expect(new Set(all).size, `${tag}: lựa chọn trùng – ${m.q}`).toBe(all.length);
    if (options) expect(all.length, `${tag}: số lựa chọn – ${m.q}`).toBe(options);
    expect(m.ex, `${tag}: thiếu giải thích – ${m.q}`).toBeTruthy();
  }
}

/** Mọi câu thoại của bài nghe đều có file thu sẵn đúng giọng (A = nữ, B = nam) */
function missingAudio(items: ExamAudio[]): string[] {
  return items.flatMap((a) => a.lines).filter((l) => !keys.has(audioKey(l.text, l.who === 'B' ? 'm' : 'f'))).map((l) => l.text);
}

describe('Bộ đề cố định', () => {
  const svc = () => TestBed.inject(ExamService);

  it('danh mục có 20 đề IELTS và 20 đề TOEIC, khớp với dữ liệu đề', () => {
    expect(TEST_COUNT).toEqual({ ielts: 20, toeic: 20 });
    expect(TEST_CATALOG.length).toBe(40);
    expect(IELTS_TESTS.map((t) => t.no)).toEqual(Array.from({ length: 20 }, (_, i) => i + 1));
    expect(TOEIC_TESTS.map((t) => t.no)).toEqual(Array.from({ length: 20 }, (_, i) => i + 1));
    expect(testTitle('toeic', 7)).toBe('TOEIC Practice Test 07');
    expect(testNoOf('test-12')).toBe(12);
    expect(testNoOf('toeic-part1')).toBe(0);
    expect(isFullExam('test-3') && isFullExam('mock') && !isFullExam('ielts-reading')).toBe(true);
  });

  it('TOEIC: đề đầy đủ 200 câu (Part 1–7 = 6/25/39/30/30/16/54), đề rút gọn 51 câu', async () => {
    for (const t of TOEIC_TESTS) {
      const tag = `TOEIC ${t.no}`;
      const count = (xs: { mcq: ExamMcq[] }[]) => xs.reduce((n, x) => n + x.mcq.length, 0);
      const full = t.no <= FULL_TESTS.toeic;
      expect([t.part2.length, count(t.part3), count(t.part4), t.part5.length, count(t.part6), count(t.part7)], tag).toEqual(full ? [25, 39, 30, 30, 16, 54] : [8, 6, 6, 12, 6, 9]);
      for (const a of [...t.part3, ...t.part4]) expect(a.mcq.length, `${tag} ${a.title}`).toBe(3);
      expect(new Set(t.part2.map((r) => r[0])).size, `${tag}: câu Part 2 trùng`).toBe(t.part2.length);
      expect(new Set(t.part5.map((r) => r[0])).size, `${tag}: câu Part 5 trùng`).toBe(t.part5.length);
      checkMcqs([...t.part3, ...t.part4, ...t.part6, ...t.part7], tag, 4);
      for (const row of t.part2) expect(new Set(row.slice(1, 4)).size, `${tag} Part 2: ${row[0]}`).toBe(3);
      for (const row of t.part5) {
        expect(row[0], tag).toContain('____');
        expect(new Set(row.slice(1, 5)).size, `${tag} Part 5: ${row[0]}`).toBe(4);
      }
      // Part 6: chỗ trống (1) (2) (3) trong đoạn văn khớp với thứ tự câu hỏi
      for (const p of t.part6) p.mcq.forEach((m, i) => expect(p.text.includes(`(${i + 1})____`) && m.q.startsWith(`(${i + 1})`), `${tag} ${p.title}`).toBe(true));
      // Câu hỏi "Look at the graphic" phải có bảng biểu đi kèm
      for (const a of [...t.part3, ...t.part4]) if (a.mcq.some((m) => m.q.startsWith('Look at the graphic'))) expect(a.graphic?.text, `${tag} ${a.title}`).toContain(' | ');

      const built = await svc().buildTest('toeic', t.no);
      expect(built?.questions.length, tag).toBe(full ? 200 : 51);
      expect(built?.minutes).toBe(formatOf('toeic', t.no).minutes);
      for (const q of built!.questions.filter((x): x is McqQuestion => x.kind === 'mcq')) expect(q.answer, `${tag}: ${q.focus}`).toBeGreaterThanOrEqual(0);
    }
  });

  it('TOEIC Part 1: ảnh trong một đề không trùng nhau và không đề nào trùng trọn bộ ảnh với đề khác', () => {
    const sets = TOEIC_TESTS.map((t) => part1ForTest(t.no).map((p) => p.photo));
    sets.forEach((s, i) => expect(new Set(s).size).toBe(i + 1 <= FULL_TESTS.toeic ? 6 : 4));
    expect(new Set(sets.map((s) => [...s].sort().join('|'))).size).toBe(sets.length);
  });

  it('IELTS: đề đầy đủ 40 câu nghe + 40 câu đọc (đề rút gọn 10 + 8), 2 bài viết, 3 phần nói', async () => {
    for (const t of IELTS_TESTS) {
      const tag = `IELTS ${t.no}`;
      checkMcqs([...t.listening, ...t.reading], tag);
      const built = await svc().buildTest('ielts', t.no);
      const bySkill = (skill: string) => built!.questions.filter((q) => q.skill === skill).length;
      const full = t.no <= FULL_TESTS.ielts;
      expect([bySkill('listening'), bySkill('reading'), bySkill('writing'), bySkill('speaking')], tag).toEqual(full ? [40, 40, 2, 3] : [10, 8, 2, 3]);
      if (full) {
        expect(t.listening.map((a) => a.mcq.length + (a.fill?.length ?? 0)), tag).toEqual([10, 10, 10, 10]);
        expect(t.reading.map((p) => p.mcq.length + (p.fill?.length ?? 0)), tag).toEqual([13, 13, 14]);
      }
      expect(built?.minutes).toBe(formatOf('ielts', t.no).minutes);
      // Bài viết mẫu đạt số từ tối thiểu; Task 1 có bảng số liệu
      for (const w of t.writing) expect(w.model.split(/\s+/).length, w.id).toBeGreaterThanOrEqual(w.minWords);
      expect(t.writing[0].data, tag).toContain(' | ');
      expect(t.speaking.map((s) => s.part), tag).toEqual([1, 2, 3]);
    }
  });

  it('IELTS: đáp án câu điền lấy được từ bài đọc / lời bài nghe', () => {
    const inText = (text: string, answers: string[]) => answers.some((a) => text.toLowerCase().includes(a.toLowerCase()));
    for (const t of IELTS_TESTS) {
      for (const reading of t.reading as ExamPassage[]) for (const f of reading.fill ?? []) expect(inText(reading.text, f.answers), `IELTS ${t.no} đọc: ${f.q}`).toBe(true);
      for (const a of t.listening) {
        const spoken = a.lines.map((l) => l.text).join(' ');
        for (const f of a.fill ?? []) expect(inText(spoken, f.answers), `IELTS ${t.no} nghe: ${f.q}`).toBe(true);
      }
    }
  });

  it('mọi bài nghe của bộ đề đều có âm thanh thu sẵn (làm được khi không có Internet)', () => {
    const missing = [...missingAudio(IELTS_TESTS.flatMap((t) => t.listening)), ...missingAudio(TOEIC_TESTS.flatMap((t) => [...t.part3, ...t.part4]))];
    for (const row of TOEIC_TESTS.flatMap((t) => t.part2)) for (const s of row.slice(0, 4)) if (!keys.has(audioKey(s))) missing.push(s);
    expect(missing).toEqual([]);
  });

  it('đề không tồn tại trả về null', async () => {
    expect(await svc().buildTest('ielts', 99)).toBeNull();
    expect(await svc().buildTest('toeic', 0)).toBeNull();
  });
});
