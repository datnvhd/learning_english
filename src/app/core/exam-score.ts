/**
 * exam-score.ts – Các hàm quy đổi điểm IELTS / TOEIC (thuần, không phụ thuộc dữ liệu đề thi)
 * nên dùng được ở Dashboard mà không kéo theo kho đề.
 */

/** Quy đổi điểm thô Listening/Reading (trên 40) sang band IELTS xấp xỉ */
export function rawToBand(raw40: number): number {
  const table: [number, number][] = [[39, 9], [37, 8.5], [35, 8], [32, 7.5], [30, 7], [26, 6.5], [23, 6], [18, 5.5], [16, 5], [13, 4.5], [10, 4], [8, 3.5], [6, 3], [4, 2.5]];
  for (const [min, band] of table) if (raw40 >= min) return band;
  return 2;
}

/** Điểm 0..1 -> band (dùng cho Writing/Speaking tự đánh giá) */
export function scoreToBand(score: number): number {
  return Math.round((3 + Math.max(0, Math.min(1, score)) * 5) * 2) / 2;
}

/** Tỉ lệ đúng (%) → điểm TOEIC Listening/Reading (5–495, bước 5) */
export function toeicLrScaled(percent: number): number {
  return Math.round((5 + (percent / 100) * 490) / 5) * 5;
}

/** Tỉ lệ đạt (%) → điểm TOEIC Speaking/Writing (0–200, bước 10) */
export function toeicSwScaled(percent: number): number {
  return Math.round(((percent / 100) * 200) / 10) * 10;
}

/** Cấp độ năng lực TOEIC Speaking/Writing (ETS chia 8–9 cấp) – bản rút gọn để tham khảo */
export function toeicSwLevel(score: number): string {
  if (score >= 180) return 'Rất tốt (Advanced)';
  if (score >= 140) return 'Khá (Upper-intermediate)';
  if (score >= 110) return 'Trung bình (Intermediate)';
  if (score >= 80) return 'Cơ bản (Pre-intermediate)';
  return 'Mới bắt đầu (Beginner)';
}
