/**
 * ============================================================================
 *  progress.model.ts – Kiểu dữ liệu cho tiến độ học tập (lưu trong localStorage)
 * ============================================================================
 */
import { Skill, TopicId } from './content.model';
import { ExamId, ExamSectionId } from './exam.model';

/** Trạng thái học của MỘT từ vựng (theo phương pháp lặp lại ngắt quãng – hộp Leitner) */
export interface WordState {
  /** Hộp nhớ 0..5. 0 = chưa thuộc, càng cao càng nhớ lâu */
  box: number;
  /** Số lần đã xem/luyện từ này */
  seen: number;
  /** Số lần trả lời đúng */
  right: number;
  /** Số lần trả lời sai */
  wrong: number;
  /** Thời điểm (mili-giây) cần ôn lại tiếp theo */
  due: number;
  /** Đã lưu (đánh dấu) hay chưa */
  bm?: boolean;
}

/** Thống kê một kỹ năng trong một chủ đề */
export interface SkillStat {
  /** Số lần luyện/kiểm tra */
  attempts: number;
  /** Điểm cao nhất (%) */
  best: number;
  /** Điểm lần gần nhất (%) */
  last: number;
  /** Tổng số điểm đúng (cộng dồn) */
  right: number;
  /** Tổng số câu đã làm */
  total: number;
}

/** Nhật ký hoạt động trong một ngày */
export interface DayLog {
  xp: number;
  questions: number;
  correct: number;
  /** Số bài từ vựng đã học */
  lessons: number;
  /** Số từ đã ôn */
  reviews: number;
  /** Số lần luyện theo từng kỹ năng */
  skills: Partial<Record<Skill, number>>;
  /** Số giây đã học trong ngày (đếm khi app đang mở và hiển thị) */
  sec?: number;
}

/** Một câu trả lời sai được lưu lại để xem ở trang Error Review */
export interface ErrorItem {
  id: string;
  /** Thời điểm làm sai (ISO) */
  date: string;
  skill: Skill;
  /** Tên bài làm, ví dụ "TOEIC Part 5 – Điền câu" */
  source: string;
  /** Kỳ thi liên quan (nếu là bài luyện thi) */
  exam?: ExamId;
  /** Đề bài / hướng dẫn */
  prompt: string;
  /** Nội dung câu hỏi (từ, câu, câu hỏi tiếng Anh) */
  question: string;
  /** Câu trả lời của người học */
  given: string;
  /** Đáp án đúng */
  correct: string;
  /** Giải thích (nếu có) */
  explain?: string;
  wordId?: string;
}

/** Loại buổi học trong lịch tuần – quyết định màu và trang mở ra */
export type PlanKind = 'ielts' | 'toeic' | 'vocab' | 'practice' | 'mock' | 'review';

/** Một buổi học trong lịch tuần (lặp lại hằng tuần) */
export interface PlanItem {
  id: string;
  /** Thứ trong tuần: 0 = Thứ Hai ... 6 = Chủ Nhật */
  day: number;
  /** Giờ bắt đầu dạng "HH:MM" */
  start: string;
  /** Thời lượng (phút) */
  minutes: number;
  title: string;
  kind: PlanKind;
}

/** Kết quả của một bài kiểm tra (để xem lịch sử) */
export interface TestRecord {
  id: string;
  /** Thời điểm làm bài (ISO) */
  date: string;
  /** Loại bài: 'all' = tổng quát, hoặc tên kỹ năng */
  kind: Skill | 'all';
  topic: TopicId | 'all';
  /** Điểm tổng (%) */
  percent: number;
  /** Điểm chi tiết từng kỹ năng: số điểm đạt / tổng số câu */
  bySkill: Partial<Record<Skill, { score: number; total: number }>>;
}

/** Kết quả một bài thi thử IELTS/TOEIC */
export interface ExamRecord {
  id: string;
  date: string;
  exam: ExamId;
  /** 'mock' = thi thử (TOEIC: Listening & Reading), 'mock-sw' = thi thử TOEIC Speaking & Writing, hoặc mã phần thi */
  kind: 'mock' | 'mock-sw' | ExamSectionId;
  /** Điểm quy về phần trăm */
  percent: number;
  /** Điểm ước tính hiển thị, ví dụ "Band 6.5" hoặc "Tổng 640/990" */
  label: string;
}

/** Cài đặt của người dùng */
export interface Settings {
  /** Tên hiển thị (Bông sẽ gọi bằng tên này) */
  name: string;
  /** Mục tiêu điểm kinh nghiệm (XP) mỗi ngày */
  dailyGoal: number;
  /** Cao độ giọng Bông (1 = bình thường, càng cao càng "trẻ con") */
  pitch: number;
  /** Tốc độ đọc (0.6 – 1.2) */
  rate: number;
  /** Bông có nói tiếng Việt khen/động viên không */
  bongTalks: boolean;
  /** Bật hiệu ứng âm thanh */
  sfx: boolean;
  /** Tên giọng tiếng Việt do người dùng chọn ('' = tự chọn giọng nữ phù hợp) */
  viVoice: string;
  /** Tên giọng tiếng Anh do người dùng chọn ('' = tự chọn) */
  enVoice: string;
  /** Mục tiêu học chính (chọn ở bước làm quen) – dùng để gợi ý lộ trình mỗi ngày */
  goal: LearningGoal;
  /** Trình độ tự đánh giá */
  level: LearnerLevel;
  /** Đã hoàn thành bước làm quen chưa */
  onboarded: boolean;
  /** Tỉ lệ cỡ chữ (0.9 – 1.3) – hỗ trợ người nhìn kém / trẻ nhỏ */
  fontScale: number;
  /** Giảm hiệu ứng chuyển động */
  reduceMotion: boolean;
  /** Rung nhẹ khi trả lời (trên điện thoại hỗ trợ) */
  haptics: boolean;
  /** Band IELTS mục tiêu (4.0 – 9.0) */
  targetBand: number;
  /** Điểm TOEIC Listening & Reading mục tiêu (10 – 990) */
  targetToeic: number;
}

/** Mục tiêu học */
export type LearningGoal = 'kids' | 'daily' | 'work' | 'ielts' | 'toeic';
/** Trình độ */
export type LearnerLevel = 'starter' | 'basic' | 'intermediate';

/** Toàn bộ tiến độ học – được lưu nguyên khối vào localStorage */
export interface ProgressState {
  version: 1;
  /** Trạng thái từng từ, khóa là Word.id */
  words: Record<string, WordState>;
  /** Thống kê kỹ năng, khóa dạng "<chủ đề>|<kỹ năng>" ('all' nếu luyện tất cả chủ đề) */
  skills: Record<string, SkillStat>;
  /** Nhật ký theo ngày, khóa YYYY-MM-DD */
  days: Record<string, DayLog>;
  /** Lịch sử bài kiểm tra (giữ 50 bài gần nhất) */
  tests: TestRecord[];
  /** Huy hiệu đã đạt: mã -> ngày đạt (YYYY-MM-DD) */
  badges: Record<string, string>;
  /** Điểm cao nhất của bài học từ vựng: khóa "<chủ đề>:<số thứ tự bài>" -> % */
  lessons: Record<string, number>;
  /** Lịch sử bài thi IELTS/TOEIC (giữ 50 bài gần nhất) */
  exams: ExamRecord[];
  /** Điểm cao nhất của từng trò chơi: khóa "<trò chơi>|<chủ đề>" */
  games: Record<string, number>;
  /** Ngày đã mở rương báu gần nhất (YYYY-MM-DD) */
  chestDay: string;
  /** Nhật ký câu trả lời sai (giữ 300 câu gần nhất) – trang Error Review */
  errors?: ErrorItem[];
  /** Lịch học hằng tuần do người dùng sắp xếp (undefined = dùng lịch gợi ý theo mục tiêu) */
  plan?: PlanItem[];
  /** Mã các đề thi thử được đánh dấu yêu thích */
  favs?: string[];
  /** Tổng điểm kinh nghiệm */
  xp: number;
  /** Ngày bắt đầu học đầu tiên */
  startedAt: string;
  settings: Settings;
}

/** Cách một buổi làm bài được ghi nhận */
export type SessionMode = 'practice' | 'test' | 'lesson' | 'review' | 'mixed' | 'exam';
