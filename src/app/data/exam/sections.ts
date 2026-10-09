/**
 * sections.ts – Danh sách các phần thi IELTS / TOEIC, cấu trúc đề và chiến lược làm bài
 * (hiển thị ở màn hình Luyện thi). Màu lấy từ PALETTE của theme – không viết mã màu cứng.
 */
import { ExamId, ExamSectionInfo } from '../../models/exam.model';
import { PALETTE } from '../../theme/theme';
import { IconName } from '../../theme/icons';

export const EXAM_SECTIONS: ExamSectionInfo[] = [
  // ---------------- IELTS ----------------
  { id: 'ielts-listening', exam: 'ielts', title: 'Nghe', titleEn: 'Listening', icon: '🎧', ico: 'headphones', skill: 'listening', count: 10, minutes: 15,
    desc: 'Nghe hội thoại/bài giảng, chọn đáp án và điền từ (form/note completion).' },
  { id: 'ielts-reading', exam: 'ielts', title: 'Đọc', titleEn: 'Reading', icon: '📄', ico: 'file-text', skill: 'reading', count: 7, minutes: 20,
    desc: 'True/False/Not Given, trắc nghiệm, điền câu (sentence completion).' },
  { id: 'ielts-writing', exam: 'ielts', title: 'Viết', titleEn: 'Writing', icon: '✏️', ico: 'pencil', skill: 'writing', count: 1, minutes: 40,
    desc: 'Task 1 (mô tả bảng/biểu đồ) và Task 2 (luận). Đếm từ, phân tích bài viết, xem bài mẫu.' },
  { id: 'ielts-speaking', exam: 'ielts', title: 'Nói', titleEn: 'Speaking', icon: '🎤', ico: 'microphone', skill: 'speaking', count: 3, minutes: 15,
    desc: 'Part 1 (giới thiệu), Part 2 (thẻ gợi ý, 1 phút chuẩn bị + 2 phút nói), Part 3 (thảo luận).' },

  // ---------------- TOEIC Listening & Reading ----------------
  { id: 'toeic-part1', exam: 'toeic', group: 'lr', title: 'Part 1 – Mô tả tranh', titleEn: 'Photographs', icon: '🖼️', ico: 'photo', skill: 'listening', count: 6, minutes: 5,
    desc: 'Xem ảnh thật, nghe 4 câu mô tả (không in chữ) và chọn câu đúng nhất.',
    tips: [
      'Trước khi nghe, nhìn nhanh ảnh: ai/cái gì, đang làm gì, ở đâu.',
      'Ảnh KHÔNG có người → loại ngay câu có chủ ngữ là người hoặc "is being + V3" (đang được làm).',
      '"is wearing" (đang mặc sẵn) khác "is putting on" (đang mặc vào) – bẫy xuất hiện rất thường xuyên.',
      'Cẩn thận câu nhắc đúng đồ vật trong ảnh nhưng sai hành động.',
    ] },
  { id: 'toeic-part2', exam: 'toeic', group: 'lr', title: 'Part 2 – Hỏi đáp', titleEn: 'Question–Response', icon: '💬', ico: 'message-circle', skill: 'listening', count: 10, minutes: 8,
    desc: 'Nghe một câu hỏi/câu nói rồi chọn câu đáp lại phù hợp (3 lựa chọn, chỉ nghe).',
    tips: [
      'Tập trung vào TỪ ĐỂ HỎI đầu câu (When/Where/Who/Why/How) – nó quyết định kiểu đáp án.',
      'Câu hỏi Wh- gần như không bao giờ trả lời bằng Yes/No.',
      'Đáp án lặp lại từ trong câu hỏi hoặc có âm gần giống thường là bẫy.',
      'Câu trả lời gián tiếp ("I\'ll check with Sam", "It\'s been canceled") thường là đáp án đúng.',
    ] },
  { id: 'toeic-part3', exam: 'toeic', group: 'lr', title: 'Part 3 – Hội thoại', titleEn: 'Conversations', icon: '🗣️', ico: 'messages', skill: 'listening', count: 9, minutes: 10,
    desc: 'Nghe hội thoại, trả lời 3 câu hỏi mỗi đoạn; có dạng câu hỏi kèm bảng biểu.',
    tips: [
      'Đọc trước 3 câu hỏi để biết cần nghe thông tin gì (ai, ở đâu, sẽ làm gì tiếp).',
      'Thứ tự đáp án thường theo thứ tự thông tin trong bài nói.',
      'Câu "Look at the graphic": đối chiếu thông tin nghe được với bảng, đáp án thường là một ô KHÁC với ô được nhắc trực tiếp.',
    ] },
  { id: 'toeic-part4', exam: 'toeic', group: 'lr', title: 'Part 4 – Bài nói ngắn', titleEn: 'Short Talks', icon: '📢', ico: 'speakerphone', skill: 'listening', count: 9, minutes: 10,
    desc: 'Nghe thông báo, voicemail, quảng cáo, bản tin... và trả lời câu hỏi.',
    tips: [
      'Câu hỏi 1 thường hỏi mục đích/chủ đề – nghe kỹ 1–2 câu đầu.',
      'Câu hỏi cuối thường hỏi hành động tiếp theo – nghe kỹ phần kết (Please..., Next...).',
      'Ghi nhớ nhanh con số, ngày giờ, tên riêng.',
    ] },
  { id: 'toeic-part5', exam: 'toeic', group: 'lr', title: 'Part 5 – Điền câu', titleEn: 'Incomplete Sentences', icon: '✍️', ico: 'abc', skill: 'reading', count: 15, minutes: 10,
    desc: 'Chọn từ/cụm từ đúng ngữ pháp và từ vựng để hoàn thành câu.',
    tips: [
      'Nhìn 4 lựa chọn trước: cùng gốc từ khác đuôi → câu hỏi từ loại; khác nghĩa → câu hỏi từ vựng.',
      'Câu từ loại làm nhanh (khoảng 10–20 giây) để dành thời gian cho Part 7.',
      'Nhớ các cụm cố định: responsible for, in advance, at least, compatible with...',
    ] },
  { id: 'toeic-part6', exam: 'toeic', group: 'lr', title: 'Part 6 – Điền đoạn', titleEn: 'Text Completion', icon: '🧩', ico: 'puzzle', skill: 'reading', count: 9, minutes: 8,
    desc: 'Điền từ và điền CẢ CÂU vào email, thông báo, quảng cáo.',
    tips: [
      'Đọc cả câu trước và sau chỗ trống – nhiều câu cần ngữ cảnh của cả đoạn (thì, đại từ).',
      'Câu điền cả câu: chọn câu nối mạch ý với câu ngay trước và sau; loại câu lạc đề.',
    ] },
  { id: 'toeic-part7', exam: 'toeic', group: 'lr', title: 'Part 7 – Đọc hiểu', titleEn: 'Reading Comprehension', icon: '📰', ico: 'news', skill: 'reading', count: 9, minutes: 12,
    desc: 'Email, quảng cáo, bài báo, tin nhắn, đa văn bản; câu hỏi vị trí câu [1]–[4].',
    tips: [
      'Đọc câu hỏi trước, rồi quét (scan) bài tìm từ khóa.',
      'Đa văn bản: câu hỏi "kết hợp" cần thông tin từ CẢ HAI văn bản (ví dụ email + hóa đơn).',
      'Câu hỏi "What does ... mean when ...": hiểu nghĩa trong ngữ cảnh, không dịch từng chữ.',
    ] },

  // ---------------- TOEIC Speaking ----------------
  { id: 'toeic-s-read', exam: 'toeic', group: 'sw', title: 'Speaking Q1–2 – Đọc to đoạn văn', titleEn: 'Read a text aloud', icon: '📖', ico: 'book', skill: 'speaking', count: 2, minutes: 4,
    desc: '45 giây chuẩn bị, 45 giây đọc to. Chấm phát âm, ngữ điệu và trọng âm (0–3).',
    tips: ['Đánh dấu tên riêng, con số khi chuẩn bị.', 'Danh sách "A, B, and C": lên – lên – xuống giọng.', 'Ngắt hơi ở dấu câu, không đọc vội.'] },
  { id: 'toeic-s-picture', exam: 'toeic', group: 'sw', title: 'Speaking Q3–4 – Mô tả tranh', titleEn: 'Describe a picture', icon: '🖼️', ico: 'photo-search', skill: 'speaking', count: 2, minutes: 3,
    desc: '45 giây chuẩn bị, 30 giây mô tả ảnh thật càng chi tiết càng tốt (0–3).',
    tips: ['Địa điểm → người/vật chính → chi tiết nền → cảm nhận.', 'Dùng hiện tại tiếp diễn và There is/There are.'] },
  { id: 'toeic-s-respond', exam: 'toeic', group: 'sw', title: 'Speaking Q5–7 – Trả lời câu hỏi', titleEn: 'Respond to questions', icon: '💬', ico: 'message-circle', skill: 'speaking', count: 3, minutes: 3,
    desc: 'Phỏng vấn qua điện thoại: 3 giây chuẩn bị, trả lời 15/15/30 giây (0–3).',
    tips: ['Nhắc lại ý câu hỏi để có thời gian nghĩ.', 'Câu 30 giây: ý kiến + 2 lý do.'] },
  { id: 'toeic-s-info', exam: 'toeic', group: 'sw', title: 'Speaking Q8–10 – Trả lời theo thông tin', titleEn: 'Respond using information', icon: '📅', ico: 'calendar', skill: 'speaking', count: 3, minutes: 4,
    desc: 'Đọc lịch trình/bảng thông tin, nghe câu hỏi (không in chữ) và trả lời (0–3).',
    tips: ['Tìm mục bị hủy/thay đổi – câu 9 thường cần đính chính.', 'Câu 10: liệt kê đủ các mục có thời gian.'] },
  { id: 'toeic-s-opinion', exam: 'toeic', group: 'sw', title: 'Speaking Q11 – Nêu quan điểm', titleEn: 'Express an opinion', icon: '💡', ico: 'bulb', skill: 'speaking', count: 1, minutes: 2,
    desc: '45 giây chuẩn bị, 60 giây trình bày quan điểm có lý do và ví dụ (0–5).',
    tips: ['Nêu quan điểm ngay câu đầu.', '2 lý do + 1 ví dụ cá nhân, kết lại bằng quan điểm.'] },

  // ---------------- TOEIC Writing ----------------
  { id: 'toeic-w-picture', exam: 'toeic', group: 'sw', title: 'Writing Q1–5 – Viết câu theo tranh', titleEn: 'Write a sentence based on a picture', icon: '🖼️', ico: 'pencil', skill: 'writing', count: 5, minutes: 8,
    desc: 'Viết MỘT câu mô tả ảnh có dùng đủ 2 từ cho sẵn (được đổi dạng từ) (0–3).',
    tips: ['Chỉ viết 1 câu, dùng đủ 2 từ – đổi dạng từ (số nhiều, chia thì) vẫn hợp lệ.', 'Câu đơn giản, đúng ngữ pháp tốt hơn câu dài sai.', 'Nhớ viết hoa đầu câu và dấu chấm cuối câu.'] },
  { id: 'toeic-w-email', exam: 'toeic', group: 'sw', title: 'Writing Q6–7 – Trả lời email', titleEn: 'Respond to a written request', icon: '✉️', ico: 'mail', skill: 'writing', count: 1, minutes: 10,
    desc: 'Đọc email và trả lời đủ các ý đề yêu cầu (hỏi, đề nghị, gợi ý...) trong 10 phút (0–4).',
    tips: ['Làm đủ số ý đề yêu cầu.', 'Có lời chào, lời kết và giọng lịch sự.'] },
  { id: 'toeic-w-opinion', exam: 'toeic', group: 'sw', title: 'Writing Q8 – Bài luận nêu quan điểm', titleEn: 'Write an opinion essay', icon: '📝', ico: 'file-text', skill: 'writing', count: 1, minutes: 30,
    desc: 'Viết ít nhất 300 từ nêu quan điểm, có lý do và ví dụ trong 30 phút (0–5).',
    tips: ['Mở bài – 2 thân bài – kết luận.', 'Mỗi lý do đi kèm ví dụ cụ thể.'] },
];

/** Thông tin giới thiệu một kỳ thi */
export interface ExamInfo {
  name: string;
  /** Emoji hiển thị ở thanh tiêu đề bài làm */
  icon: string;
  ico: IconName;
  color: string;
  tagline: string;
  format: string[];
  mockMinutes: number;
  mockDesc: string;
  /** Bài thi thử thứ hai (TOEIC Speaking & Writing) */
  mockSw?: { minutes: number; desc: string };
}

/** Thông tin giới thiệu về từng kỳ thi */
export const EXAM_INFO: Record<ExamId, ExamInfo> = {
  ielts: {
    name: 'IELTS Academic', icon: '🎓', ico: 'school', color: PALETTE.leaf[600],
    tagline: 'Thang điểm band 0–9 cho Nghe, Đọc, Viết, Nói.',
    format: [
      'Listening: 30 phút, 40 câu (4 phần), nghe một lần.',
      'Reading: 60 phút, 40 câu (3 bài đọc học thuật).',
      'Writing: 60 phút – Task 1 (≥150 từ, 20 phút) và Task 2 (≥250 từ, 40 phút).',
      'Speaking: 11–14 phút, 3 phần với giám khảo.',
    ],
    mockMinutes: 80,
    mockDesc: 'Bản rút gọn: 2 phần Nghe, 1 bài Đọc, 1 bài Viết Task 2 và 3 phần Nói.',
  },
  toeic: {
    name: 'TOEIC', icon: '💼', ico: 'briefcase', color: PALETTE.tangerine[500],
    tagline: 'Listening & Reading 10–990 điểm · Speaking & Writing 0–200 điểm mỗi kỹ năng.',
    format: [
      'Listening: 45 phút, 100 câu – Part 1 (mô tả tranh), 2 (hỏi đáp), 3 (hội thoại), 4 (bài nói).',
      'Reading: 75 phút, 100 câu – Part 5 (điền câu), 6 (điền đoạn), 7 (đọc hiểu).',
      'Speaking: ~20 phút, 11 câu – đọc to, mô tả tranh, trả lời câu hỏi, trả lời theo thông tin, nêu quan điểm.',
      'Writing: ~60 phút, 8 câu – viết câu theo tranh, trả lời email, bài luận ≥300 từ.',
    ],
    mockMinutes: 38,
    mockDesc: 'Listening & Reading rút gọn 51 câu: Part 1 (4), 2 (8), 3 (6), 4 (6), 5 (12), 6 (6), 7 (9).',
    mockSw: { minutes: 55, desc: 'Speaking & Writing rút gọn: 9 câu nói (Q1, Q3, Q5–7, Q8–10, Q11) và 4 câu viết (2 câu theo tranh, 1 email, 1 bài luận).' },
  },
};

/** Tìm thông tin phần thi theo mã */
export const SECTION_BY_ID = Object.fromEntries(EXAM_SECTIONS.map((s) => [s.id, s])) as Record<string, ExamSectionInfo>;
