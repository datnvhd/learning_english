/**
 * ============================================================================
 *  content.model.ts – Các kiểu dữ liệu (interface) dùng chung cho nội dung học
 * ============================================================================
 *  File này chỉ chứa khai báo kiểu, không có logic. Mọi dữ liệu học (từ vựng, bài đọc,
 *  hội thoại...) đều tuân theo các kiểu ở đây để trình biên dịch giúp phát hiện lỗi sớm.
 */

/** Mã chủ đề: trùng với tên file nguồn tools/vocab-src/<mã>.txt */
export type TopicId = 'daily' | 'it' | 'travel' | 'study' | 'health' | 'food' | 'b1' | 'b2' | 'ielts' | 'toeic';

/** Các kỹ năng trong app. "vocab" là phần từ vựng, 4 kỹ năng còn lại là Nghe-Nói-Đọc-Viết */
export type Skill = 'vocab' | 'listening' | 'speaking' | 'reading' | 'writing';

/** 4 kỹ năng ngôn ngữ (không tính từ vựng) – dùng cho bài kiểm tra tổng quát */
export const LANGUAGE_SKILLS: readonly Skill[] = ['listening', 'speaking', 'reading', 'writing'];

/** Thông tin hiển thị của một chủ đề (thẻ chủ đề ở màn hình "Chọn chủ đề") */
export interface TopicMeta {
  id: TopicId;
  /** Tên tiếng Việt, ví dụ "Cuộc sống hằng ngày" */
  title: string;
  /** Tên tiếng Anh, ví dụ "Daily Life" */
  titleEn: string;
  /** Mô tả ngắn hiển thị dưới tên chủ đề */
  desc: string;
  /** Emoji đại diện, dùng ở nơi không có chỗ cho ảnh */
  emoji: string;
  /** Màu nhấn của chủ đề (mã hex) */
  color: string;
  /** Đoạn giới thiệu dài ở màn hình chi tiết chủ đề */
  intro: string;
}

/** Một câu hỏi trắc nghiệm gắn với bài đọc/hội thoại. Đáp án đúng luôn viết ĐẦU TIÊN
 *  (a); khi ra đề, hệ thống sẽ xáo trộn ngẫu nhiên các lựa chọn. */
export interface ContentQuestion {
  /** Câu hỏi tiếng Anh */
  q: string;
  /** Đáp án đúng */
  a: string;
  /** Các đáp án sai (đủ 3 đáp án) */
  wrong: [string, string, string];
}

/** Bài đọc hiểu (Reading) */
export interface Passage {
  id: string;
  topic: TopicId;
  title: string;
  titleVi: string;
  /** Nội dung tiếng Anh */
  text: string;
  /** Bản dịch tiếng Việt (hiển thị sau khi làm bài) */
  textVi: string;
  questions: ContentQuestion[];
}

/** Một câu thoại trong hội thoại */
export interface DialogueLine {
  /** Người nói: A hoặc B (dùng để chọn giọng đọc khác nhau) */
  who: 'A' | 'B';
  text: string;
  vi: string;
}

/** Đoạn hội thoại nghe hiểu (Listening) */
export interface Dialogue {
  id: string;
  topic: TopicId;
  title: string;
  titleVi: string;
  lines: DialogueLine[];
  questions: ContentQuestion[];
}
