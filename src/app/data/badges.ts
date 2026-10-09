/**
 * ============================================================================
 *  badges.ts – Danh sách huy hiệu (Thành tích) và điều kiện đạt được
 * ============================================================================
 *  Sau mỗi buổi học, ProgressService gọi hàm `check` của từng huy hiệu chưa đạt.
 *  Muốn thêm huy hiệu mới: chỉ cần thêm một object vào BADGES.
 */

/** Dữ liệu tổng hợp truyền vào hàm kiểm tra huy hiệu */
export interface BadgeContext {
  /** Số từ đã thuộc (hộp nhớ >= 1) */
  learned: number;
  /** Chuỗi ngày học liên tiếp hiện tại */
  streak: number;
  /** Số buổi luyện tập/kiểm tra đã hoàn thành */
  sessions: number;
  /** Số bài kiểm tra đã làm */
  tests: number;
  /** Điểm cao nhất (%) của từng kỹ năng */
  bestBySkill: Record<string, number>;
  /** Số chủ đề đã thuộc ít nhất 20 từ */
  topicsExplored: number;
  /** Cấp độ hiện tại */
  level: number;
  /** Điểm cao nhất (%) của bài kiểm tra tổng quát */
  bestGeneralTest: number;
}

export interface BadgeDef {
  id: string;
  icon: string;
  title: string;
  desc: string;
  /** Màu nền vòng tròn huy hiệu */
  color: string;
  check: (c: BadgeContext) => boolean;
}

export const BADGES: BadgeDef[] = [
  { id: 'start', icon: '⛰️', title: 'Bắt đầu', desc: 'Hoàn thành buổi học đầu tiên', color: '#fde68a', check: (c) => c.sessions >= 1 },
  { id: 'streak3', icon: '🗓️', title: 'Kiên trì', desc: 'Học 3 ngày liên tiếp', color: '#fed7aa', check: (c) => c.streak >= 3 },
  { id: 'streak7', icon: '🔥', title: 'Bền bỉ', desc: 'Học 7 ngày liên tiếp', color: '#fecaca', check: (c) => c.streak >= 7 },
  { id: 'streak30', icon: '🏅', title: 'Kiên cường', desc: 'Học 30 ngày liên tiếp', color: '#fde047', check: (c) => c.streak >= 30 },
  { id: 'vocab50', icon: '📘', title: 'Từ vựng', desc: 'Thuộc 50 từ vựng', color: '#bfdbfe', check: (c) => c.learned >= 50 },
  { id: 'vocab200', icon: '📚', title: 'Kho từ', desc: 'Thuộc 200 từ vựng', color: '#c7d2fe', check: (c) => c.learned >= 200 },
  { id: 'vocab1000', icon: '🧠', title: 'Bách khoa', desc: 'Thuộc 1000 từ vựng', color: '#ddd6fe', check: (c) => c.learned >= 1000 },
  { id: 'listen', icon: '🎧', title: 'Nghe', desc: 'Đạt từ 80% trở lên bài Nghe', color: '#bbf7d0', check: (c) => (c.bestBySkill['listening'] ?? 0) >= 80 },
  { id: 'speak', icon: '🎤', title: 'Nói', desc: 'Đạt từ 80% trở lên bài Nói', color: '#bae6fd', check: (c) => (c.bestBySkill['speaking'] ?? 0) >= 80 },
  { id: 'read', icon: '📖', title: 'Đọc', desc: 'Đạt từ 80% trở lên bài Đọc', color: '#e9d5ff', check: (c) => (c.bestBySkill['reading'] ?? 0) >= 80 },
  { id: 'write', icon: '✏️', title: 'Viết', desc: 'Đạt từ 80% trở lên bài Viết', color: '#fef08a', check: (c) => (c.bestBySkill['writing'] ?? 0) >= 80 },
  { id: 'tester', icon: '🏆', title: 'Nhà vô địch', desc: 'Đạt 80% bài kiểm tra tổng quát', color: '#fcd34d', check: (c) => c.bestGeneralTest >= 80 },
  { id: 'explorer', icon: '🌍', title: 'Khám phá thế giới', desc: 'Học ít nhất 20 từ ở 6 chủ đề', color: '#a7f3d0', check: (c) => c.topicsExplored >= 6 },
  { id: 'level5', icon: '⭐', title: 'Ngôi sao nhỏ', desc: 'Đạt cấp độ 5', color: '#fef3c7', check: (c) => c.level >= 5 },
];
