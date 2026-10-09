/**
 * ============================================================================
 *  goal.service.ts – Điểm hiện tại (ước tính) và mục tiêu IELTS / TOEIC
 * ============================================================================
 *  Điểm "hiện tại" được ƯỚC TÍNH từ tỉ lệ đúng của các bài luyện thi đã làm (ProgressService):
 *   - IELTS: mỗi kỹ năng quy ra band (Listening/Reading theo thang 40 câu, Writing/Speaking theo
 *     phần chấm tự động + tự đánh giá); band tổng = trung bình các kỹ năng đã luyện, làm tròn 0.5.
 *   - TOEIC: Listening và Reading quy ra thang 5–495, tổng 10–990.
 *  Chưa luyện kỹ năng nào thì giá trị là null và giao diện hiển thị "—".
 *  Mục tiêu (targetBand, targetToeic) nằm trong Cài đặt.
 */
import { Injectable, computed, inject } from '@angular/core';
import { ProgressService } from './progress.service';
import { rawToBand, scoreToBand, toeicLrScaled } from './exam-score';

/** 4 kỹ năng của bài thi */
export type ExamSkill = 'listening' | 'reading' | 'writing' | 'speaking';
export const EXAM_SKILLS: ExamSkill[] = ['listening', 'reading', 'writing', 'speaking'];

/** Tên tiếng Anh + chữ cái viết tắt của từng kỹ năng */
export const EXAM_SKILL_LABEL: Record<ExamSkill, { en: string; short: string }> = {
  listening: { en: 'Listening', short: 'L' },
  reading: { en: 'Reading', short: 'R' },
  writing: { en: 'Writing', short: 'W' },
  speaking: { en: 'Speaking', short: 'S' },
};

@Injectable({ providedIn: 'root' })
export class GoalService {
  private readonly progress = inject(ProgressService);

  /** Tỉ lệ đúng (0..1) của một kỹ năng trong các bài luyện của một kỳ thi; null nếu chưa làm */
  ratio(exam: 'ielts' | 'toeic', skill: ExamSkill): number | null {
    const st = this.progress.skillStat(exam, skill);
    return st && st.total > 0 ? st.right / st.total : null;
  }

  /** Band IELTS ước tính theo từng kỹ năng và band tổng */
  readonly ielts = computed(() => {
    this.progress.state();
    const skills = {} as Record<ExamSkill, number | null>;
    const bands: number[] = [];
    for (const s of EXAM_SKILLS) {
      const r = this.ratio('ielts', s);
      const band = r === null ? null : s === 'listening' || s === 'reading' ? rawToBand(Math.round(r * 40)) : scoreToBand(r);
      skills[s] = band;
      if (band !== null) bands.push(band);
    }
    const overall = bands.length ? Math.round((bands.reduce((a, c) => a + c, 0) / bands.length) * 2) / 2 : null;
    const target = this.progress.settings().targetBand;
    return { skills, overall, target, percent: overall === null ? 0 : Math.min(100, (overall / target) * 100) };
  });

  /** Điểm TOEIC Listening & Reading ước tính */
  readonly toeic = computed(() => {
    this.progress.state();
    const l = this.ratio('toeic', 'listening');
    const r = this.ratio('toeic', 'reading');
    const listening = l === null ? null : toeicLrScaled(l * 100);
    const reading = r === null ? null : toeicLrScaled(r * 100);
    const total = listening === null && reading === null ? null : (listening ?? 0) + (reading ?? 0);
    const target = this.progress.settings().targetToeic;
    return { listening, reading, total, target, percent: total === null ? 0 : Math.min(100, (total / target) * 100) };
  });
}

/** Hiển thị band: 6.5 -> "6.5", null -> "—" */
export function bandText(band: number | null): string {
  return band === null ? '—' : band.toFixed(1);
}
