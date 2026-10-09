/**
 * ============================================================================
 *  exam.model.ts – Kiểu dữ liệu cho phần luyện thi IELTS và TOEIC
 * ============================================================================
 *  Nội dung đề (đề thi mô phỏng) nằm trong data/exam/*.ts và được ExamService
 *  chuyển thành danh sách `Question[]` để dùng lại bộ máy QuizRunner.
 */
import { IconName } from '../theme/icons';
import { Dialogue, Passage } from './content.model';

/** Hai kỳ thi được hỗ trợ */
export type ExamId = 'ielts' | 'toeic';

/** Các phần thi có thể luyện riêng */
export type ExamSectionId =
  | 'ielts-listening' | 'ielts-reading' | 'ielts-writing' | 'ielts-speaking'
  // TOEIC Listening & Reading
  | 'toeic-part1' | 'toeic-part2' | 'toeic-part3' | 'toeic-part4' | 'toeic-part5' | 'toeic-part6' | 'toeic-part7'
  // TOEIC Speaking (Q1–11)
  | 'toeic-s-read' | 'toeic-s-picture' | 'toeic-s-respond' | 'toeic-s-info' | 'toeic-s-opinion'
  // TOEIC Writing (Q1–8)
  | 'toeic-w-picture' | 'toeic-w-email' | 'toeic-w-opinion';

/** Loại bài thi thử: 'lr' = Listening & Reading (mặc định), 'sw' = TOEIC Speaking & Writing */
export type MockVariant = 'lr' | 'sw';

/** Loại bài đã làm (lưu lịch sử): thi thử L&R, thi thử S&W hoặc một phần thi */
export type ExamKind = 'mock' | 'mock-sw' | ExamSectionId;

/** Thông tin hiển thị của một phần thi */
export interface ExamSectionInfo {
  id: ExamSectionId;
  exam: ExamId;
  title: string;
  /** Tên tiếng Anh chuẩn của phần thi */
  titleEn: string;
  icon: string;
  desc: string;
  /** Số câu mặc định khi luyện riêng phần này */
  count: number;
  /** Thời gian gợi ý (phút) cho bài luyện phần này */
  minutes: number;
  /** Kỹ năng thống kê tương ứng */
  skill: 'listening' | 'speaking' | 'reading' | 'writing';
  /** Icon theo theme (Tabler) hiển thị ở trang Luyện thi */
  ico: IconName;
  /** Nhóm của TOEIC: 'lr' = Listening & Reading, 'sw' = Speaking & Writing */
  group?: 'lr' | 'sw';
  /** Chiến lược làm bài (tiếng Việt) */
  tips?: string[];
}

/** Câu hỏi trắc nghiệm có lời giải thích tiếng Việt: đáp án đúng ghi đầu tiên */
export interface ExamMcq {
  q: string;
  a: string;
  wrong: string[];
  /** Giải thích (tiếng Việt) hiển thị sau khi làm bài */
  ex?: string;
}

/** Câu điền từ (IELTS Sentence/Form Completion): gõ đáp án */
export interface ExamFill {
  q: string;
  /** Các đáp án được chấp nhận (đáp án đầu tiên là chuẩn) */
  answers: string[];
  ex?: string;
}

/** Bài đọc hoặc bài nghe có nhiều câu hỏi thuộc nhiều dạng */
export interface ExamPassage extends Omit<Passage, 'questions' | 'topic'> {
  mcq: ExamMcq[];
  fill?: ExamFill[];
}

/** Hội thoại/bài nói có câu hỏi */
export interface ExamAudio extends Omit<Dialogue, 'questions' | 'topic'> {
  mcq: ExamMcq[];
  fill?: ExamFill[];
  /** Bảng/biểu đồ đi kèm (TOEIC Part 3/4 dạng "Look at the graphic") – mỗi dòng "a | b" */
  graphic?: { title: string; text: string };
}

/**
 * TOEIC Part 1 – Mô tả tranh: một ảnh + 4 câu mô tả (chỉ nghe, không in chữ).
 * `a` là câu mô tả ĐÚNG; `wrong` là 3 câu bẫy (sai hành động, sai đồ vật, sai trạng thái...).
 */
export interface ToeicPhotoItem {
  /** Mã ảnh trong PHOTOS, ví dụ "scene:meeting" hoặc "daily:backpack" */
  photo: string;
  a: string;
  wrong: [string, string, string];
  /** Nghĩa tiếng Việt của câu đúng */
  vi: string;
  /** Giải thích bẫy thường gặp */
  ex: string;
}

/** TOEIC Writing Q1–5: viết MỘT câu mô tả ảnh có dùng đủ 2 từ cho sẵn */
export interface ToeicPicWriteItem {
  photo: string;
  /** Hai từ bắt buộc; mỗi từ kèm các dạng được chấp nhận (số nhiều, chia thì...) – dạng đầu để hiển thị */
  words: [string[], string[]];
  /** Câu trả lời mẫu */
  samples: string[];
}

/** Một ý bắt buộc của bài viết TOEIC (kiểm bằng biểu thức chính quy) */
export interface WritingCheck {
  label: string;
  /** Mẫu tìm kiếm (không phân biệt hoa thường) */
  re: string;
  /** Số lần xuất hiện tối thiểu (mặc định 1) */
  min?: number;
}

/** Đề Writing (IELTS Task 1/2 hoặc TOEIC email / bài luận) */
export interface WritingTask {
  id: string;
  task: 1 | 2;
  /** Kỳ thi (mặc định IELTS). TOEIC chấm thang 0–4 (email) hoặc 0–5 (luận) */
  exam?: 'ielts' | 'toeic';
  /** Điểm tối đa theo thang TOEIC */
  maxScore?: number;
  /** Các ý bắt buộc phải có (TOEIC) */
  checks?: WritingCheck[];
  title: string;
  /** Đề bài đầy đủ (tiếng Anh) */
  prompt: string;
  /** Dữ liệu biểu đồ/bảng cho Task 1 (dạng văn bản) */
  data?: string;
  minWords: number;
  minutes: number;
  /** Bài mẫu để so sánh */
  model: string;
  /** Gợi ý ý tưởng / cấu trúc (tiếng Việt) */
  tips: string[];
}

/** Đề Writing IELTS (tên cũ, giữ để tương thích) */
export type IeltsWritingTask = WritingTask;

/** Bộ tiêu chí tự chấm bài nói */
export type SpeakingCriteria = 'ielts' | 'toeic' | 'toeic-read';

/** Đề Speaking (IELTS Part 1/2/3 hoặc câu hỏi TOEIC Speaking) */
export interface SpeakingItem {
  id: string;
  part: 1 | 2 | 3;
  title: string;
  /** Nhãn hiển thị thay cho "Part n", ví dụ "Question 3 · Describe a picture" */
  label?: string;
  /** Ảnh cần mô tả (đường dẫn) */
  image?: string;
  /** Bảng thông tin (lịch trình, chương trình...) – mỗi dòng "a | b" */
  info?: string;
  /** true = câu hỏi chỉ được NGHE, chữ hiện ra ở bước xem lại (TOEIC Q8–10) */
  hideLines?: boolean;
  /** Câu giám khảo đọc khi bấm loa (mặc định đọc các dòng đề) */
  examiner?: string;
  /** Bộ tiêu chí tự chấm (mặc định IELTS) */
  criteria?: SpeakingCriteria;
  /** Điểm tối đa theo thang TOEIC (3 hoặc 5) */
  maxScore?: number;
  /** Câu hỏi hoặc thẻ gợi ý (Part 2: nhiều dòng) */
  lines: string[];
  /** Câu trả lời mẫu */
  sample: string;
  /** Gợi ý cách trả lời (tiếng Việt) */
  tips: string[];
}

/** Đề Speaking IELTS (tên cũ, giữ để tương thích) */
export type IeltsSpeakingItem = SpeakingItem;
