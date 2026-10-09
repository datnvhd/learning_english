/**
 * ============================================================================
 *  vocab.model.ts – Kiểu dữ liệu từ vựng
 * ============================================================================
 */
import { TopicId } from './content.model';

/**
 * Một từ ở dạng "nén" (tuple) trong các file dữ liệu sinh tự động để giảm dung lượng:
 *   [từ, loại từ, phiên âm IPA, nghĩa tiếng Việt, câu ví dụ EN, câu ví dụ VI, trình độ CEFR]
 */
export type WordTuple = readonly [string, string, string, string, string, string, string];

/** Trình độ theo Khung tham chiếu châu Âu (CEFR): A1–A2 cơ bản, B1 trung cấp, B2 trung cao cấp */
export type CefrLevel = 'A1' | 'A2' | 'B1' | 'B2';
export const CEFR_LEVELS: CefrLevel[] = ['A1', 'A2', 'B1', 'B2'];

/** Một bài học nhỏ gồm khoảng 10–13 từ cùng chủ điểm (ví dụ "Gia đình") */
export interface LessonData {
  /** Emoji minh họa bài học */
  icon: string;
  /** Tên bài tiếng Việt */
  vi: string;
  /** Tên bài tiếng Anh */
  en: string;
  words: WordTuple[];
}

/** Toàn bộ dữ liệu từ vựng của một chủ đề (file sinh tự động trong data/vocab) */
export interface TopicVocabData {
  lessons: LessonData[];
}

/** Từ vựng đã được "mở gói" thành đối tượng để dễ dùng trong giao diện và logic */
export interface Word {
  /** Mã định danh ổn định: "<chủ đề>:<từ viết thường>" – dùng để lưu tiến độ học */
  id: string;
  topicId: TopicId;
  /** Chỉ số bài học (bắt đầu từ 0) trong chủ đề */
  lessonIndex: number;
  word: string;
  /** Loại từ: n, v, adj, adv, prep, conj, pron, int, phr */
  pos: string;
  /** Phiên âm IPA (không kèm dấu gạch chéo) */
  ipa: string;
  /** Nghĩa tiếng Việt */
  vi: string;
  /** Câu ví dụ tiếng Anh */
  ex: string;
  /** Dịch nghĩa câu ví dụ */
  exVi: string;
  /** Trình độ CEFR (theo danh sách CEFR-J; từ ngoài danh sách được ước lượng theo chủ đề) */
  level: CefrLevel;
}

/** Bài học đã mở gói */
export interface Lesson {
  index: number;
  icon: string;
  vi: string;
  en: string;
  words: Word[];
}

/** Từ vựng đầy đủ của một chủ đề sau khi nạp */
export interface TopicVocab {
  topicId: TopicId;
  lessons: Lesson[];
  /** Danh sách phẳng tất cả các từ (tiện cho tìm kiếm/ra đề) */
  words: Word[];
}

/** Tên đầy đủ của loại từ để hiển thị, ví dụ "n" -> "danh từ" */
export const POS_LABEL: Record<string, string> = {
  n: 'danh từ',
  v: 'động từ',
  adj: 'tính từ',
  adv: 'trạng từ',
  prep: 'giới từ',
  conj: 'liên từ',
  pron: 'đại từ',
  det: 'từ hạn định',
  int: 'thán từ',
  phr: 'cụm từ',
};
