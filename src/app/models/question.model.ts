/**
 * ============================================================================
 *  question.model.ts – Mô hình câu hỏi dùng chung cho mọi bài luyện tập / kiểm tra
 * ============================================================================
 *  Mọi bài (từ vựng, nghe, nói, đọc, viết, kiểm tra) đều được biểu diễn thành một
 *  danh sách `Question[]`. Component QuizRunner chỉ cần biết hiển thị và chấm các
 *  loại câu hỏi dưới đây, nên thêm bài mới rất dễ.
 */
import { Dialogue, Skill, TopicId } from './content.model';
import { SpeakingItem, WritingTask } from './exam.model';

/** Các trường chung của mọi câu hỏi */
interface QuestionBase {
  /** Mã câu hỏi duy nhất trong phiên làm bài */
  id: string;
  /** Câu hỏi này rèn kỹ năng nào (dùng để thống kê tiến độ) */
  skill: Skill;
  /** Hướng dẫn / đề bài hiển thị (thường bằng tiếng Việt) */
  prompt: string;
  /** Nội dung lớn hiển thị giữa thẻ (ví dụ từ cần hỏi nghĩa, câu cần dịch...) */
  focus?: string;
  /** Dòng phụ nhỏ dưới nội dung lớn (ví dụ phiên âm) */
  focusSub?: string;
  /** Văn bản tiếng Anh sẽ được Bông đọc khi bấm nút loa */
  audio?: string;
  /** Nhiều đoạn đọc nối tiếp có ngắt nghỉ (ví dụ 4 câu A–D của TOEIC Part 1) – ưu tiên hơn `audio` */
  audioParts?: string[];
  /** Nếu true: ẩn nội dung tiếng Anh, chỉ cho nghe (bài nghe) */
  hideText?: boolean;
  /** Tự động phát âm thanh khi câu hỏi xuất hiện */
  autoPlay?: boolean;
  /** Ảnh minh họa hiển thị trên thẻ câu hỏi */
  image?: string;
  /** Đoạn văn kèm theo (bài đọc hiểu) */
  passage?: { title: string; text: string; textVi: string };
  /** Đoạn hội thoại kèm theo (bài nghe hiểu) */
  dialogue?: Dialogue;
  /** Từ vựng liên quan – dùng để cập nhật trí nhớ (lặp lại ngắt quãng) */
  wordId?: string;
  /** Chủ đề của câu hỏi */
  topicId?: TopicId;
  /** Lời giải thích/dịch hiển thị sau khi trả lời */
  explain?: string;
}

/** Câu trắc nghiệm nhiều lựa chọn */
export interface McqQuestion extends QuestionBase {
  kind: 'mcq';
  options: string[];
  /** Chỉ số của đáp án đúng trong `options` */
  answer: number;
  /** Ảnh cho từng lựa chọn (câu hỏi chọn ảnh) – cùng thứ tự với options */
  optionImages?: string[];
  /** Nếu true, hiển thị lựa chọn dạng chữ nhỏ hơn (câu dài) */
  longOptions?: boolean;
  /**
   * Nếu true, lựa chọn chỉ được NGHE (chỉ hiện chữ cái A/B/C/D) như TOEIC Part 1–2.
   * Nội dung hiện ra sau khi trả lời (luyện tập) hoặc khi bấm "Hiện chữ".
   */
  hideOptions?: boolean;
}

/** Câu điền/viết: người học gõ đáp án */
export interface TypeQuestion extends QuestionBase {
  kind: 'type';
  /** Các đáp án được chấp nhận (phần tử đầu là đáp án chuẩn để hiển thị) */
  answers: string[];
  /** 'word' = chỉ một từ (chấm nghiêm chính tả), 'sentence' = cả câu */
  mode: 'word' | 'sentence';
  /** Gợi ý hiển thị khi bấm nút "Gợi ý" */
  hint?: string;
  placeholder?: string;
}

/** Câu sắp xếp các từ thành câu hoàn chỉnh */
export interface OrderQuestion extends QuestionBase {
  kind: 'order';
  /** Các mảnh từ đã bị xáo trộn */
  tiles: string[];
  /** Thứ tự đúng */
  answer: string[];
}

/** Câu luyện nói: nghe mẫu rồi đọc theo */
export interface SpeakQuestion extends QuestionBase {
  kind: 'speak';
  /** Câu/từ mẫu cần đọc theo */
  target: string;
  /** Nghĩa tiếng Việt của câu mẫu */
  targetVi?: string;
}

/** Bài viết luận (IELTS Task 1/2, TOEIC email/luận): gõ bài, đếm từ, phân tích tự động */
export interface EssayQuestion extends QuestionBase {
  kind: 'essay';
  task: WritingTask;
}

/** Bài nói (IELTS Part 1/2/3, TOEIC Q1–11): chuẩn bị – nói – ghi âm – tự chấm theo tiêu chí */
export interface TalkQuestion extends QuestionBase {
  kind: 'talk';
  item: SpeakingItem;
  /** Giây chuẩn bị (Part 2 = 60, Part 1/3 = 0) */
  prepSeconds: number;
  /** Giây nói tối đa */
  speakSeconds: number;
}

/** TOEIC Writing Q1–5: viết một câu mô tả ảnh, dùng đủ 2 từ cho sẵn */
export interface PicWriteQuestion extends QuestionBase {
  kind: 'picwrite';
  /** Hai từ bắt buộc, mỗi từ kèm các dạng chấp nhận (dạng đầu để hiển thị) */
  words: [string[], string[]];
  samples: string[];
}

export type Question = McqQuestion | TypeQuestion | OrderQuestion | SpeakQuestion | EssayQuestion | TalkQuestion | PicWriteQuestion;

/** Kết quả của MỘT câu hỏi sau khi người học trả lời */
export interface AnswerResult {
  questionId: string;
  skill: Skill;
  /** Điểm 0..1 (1 = đúng hoàn toàn, 0.5 = gần đúng/một phần) */
  score: number;
  /** Nội dung người học đã chọn/gõ/nói (để xem lại) */
  given: string;
  /** Đáp án đúng dạng văn bản (để xem lại) */
  correct: string;
  wordId?: string;
  topicId?: TopicId;
}

/** Kết quả trọn một buổi làm bài, gửi từ QuizRunner ra ngoài */
export interface SessionResult {
  questions: Question[];
  results: AnswerResult[];
  /** Thời gian làm bài (giây) */
  seconds: number;
}
