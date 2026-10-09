/**
 * ============================================================================
 *  topics.ts – Danh sách các chủ đề từ vựng (đời sống, trình độ B1–B2 theo CEFR, IELTS, TOEIC)
 * ============================================================================
 *  Ảnh minh họa mỗi chủ đề nằm ở public/assets/art/<mã chủ đề>.webp (xem shared/art/art.ts).
 *  Số từ / số bài của mỗi chủ đề lấy từ VOCAB_STATS (file sinh tự động).
 */
import { TopicId, TopicMeta } from '../models/content.model';
import { VOCAB_STATS } from './vocab/vocab-stats';
import { PALETTE, SKILL_COLORS } from '../theme/theme';
import { IconName } from '../theme/icons';

export const TOPICS: TopicMeta[] = [
  {
    id: 'daily', title: 'Cuộc sống hằng ngày', titleEn: 'Daily Life',
    desc: 'Gia đình, bạn bè, nhà cửa, mua sắm...', emoji: '🏠', color: PALETTE.sun[500],
    intro: 'Cùng Bông làm quen với những từ vựng quen thuộc trong đời sống mỗi ngày: gia đình, nhà cửa, thời tiết, mua sắm và giao tiếp cơ bản.',
  },
  {
    id: 'it', title: 'Công việc IT', titleEn: 'IT & Technology',
    desc: 'Lập trình, mạng, dự án phần mềm...', emoji: '💻', color: PALETTE.sky[600],
    intro: 'Học tiếng Anh dành cho dân công nghệ: phần cứng, lập trình, cơ sở dữ liệu, bảo mật, DevOps, AI và cách giao tiếp trong công ty IT.',
  },
  {
    id: 'travel', title: 'Du lịch & Khám phá', titleEn: 'Travel & Discovery',
    desc: 'Thành phố, ẩm thực, văn hóa, thiên nhiên...', emoji: '🗺️', color: PALETTE.sky[400],
    intro: 'Sẵn sàng cho chuyến phiêu lưu quanh thế giới! Từ sân bay, khách sạn, hỏi đường đến những địa danh nổi tiếng và văn hóa các nước.',
  },
  {
    id: 'study', title: 'Học tập & Giáo dục', titleEn: 'Study & Education',
    desc: 'Trường học, thi cử, nghiên cứu, du học...', emoji: '📚', color: PALETTE.grape[500],
    intro: 'Từ vựng cho học sinh, sinh viên: lớp học, môn học, thi cử, viết luận, nghiên cứu khoa học, học bổng và du học.',
  },
  {
    id: 'health', title: 'Sức khỏe & Thể thao', titleEn: 'Health & Sports',
    desc: 'Cơ thể, khám bệnh, dinh dưỡng, thể thao...', emoji: '🏃', color: PALETTE.leaf[500],
    intro: 'Chăm sóc bản thân bằng tiếng Anh: bộ phận cơ thể, bệnh thường gặp, khám bệnh, dinh dưỡng và các môn thể thao yêu thích.',
  },
  {
    id: 'food', title: 'Ẩm thực', titleEn: 'Food & Cooking',
    desc: 'Món ăn, nguyên liệu, nhà hàng, nấu nướng...', emoji: '🍜', color: PALETTE.coral[500],
    intro: 'Thế giới ẩm thực đầy màu sắc: trái cây, rau củ, món Việt và món thế giới, dụng cụ bếp, cách nấu và gọi món ở nhà hàng.',
  },
  {
    id: 'b1', title: 'Từ vựng B1 – Trung cấp', titleEn: 'B1 Intermediate',
    desc: 'Cảm xúc, ý kiến, xã hội, công việc, khoa học...', emoji: '📘', color: PALETTE.sky[500],
    intro: '300 từ trình độ B1 theo khung CEFR, chia thành 25 bài theo chủ điểm: cảm xúc, tính cách, suy nghĩ và ý kiến, giao tiếp, xã hội, luật pháp, kinh tế, việc làm, môi trường, khoa học, sức khỏe, trạng từ và từ nối. Đây là vốn từ cần có để giao tiếp độc lập và đọc hiểu văn bản thông dụng.',
  },
  {
    id: 'b2', title: 'Từ vựng B2 – Trung cao cấp', titleEn: 'B2 Upper-Intermediate',
    desc: 'Lập luận, học thuật, kinh doanh, truyền thông...', emoji: '📗', color: PALETTE.grape[600],
    intro: '300 từ trình độ B2 theo khung CEFR, chia thành 25 bài: cảm xúc mạnh, lập luận, tranh luận, kinh doanh, tài chính, luật pháp, lịch sử, công nghệ, y học, tâm lý, truyền thông, động từ và tính từ học thuật. Vốn từ này giúp bạn tranh luận, viết luận và đạt IELTS 5.5–6.5 hoặc TOEIC 785+.',
  },
  {
    id: 'ielts', title: 'Từ vựng IELTS', titleEn: 'IELTS Vocabulary',
    desc: 'Từ học thuật, Writing, Speaking, biểu đồ...', emoji: '🎓', color: PALETTE.leaf[600],
    intro: 'Kho từ vựng học thuật theo chủ đề thường gặp trong IELTS: giáo dục, môi trường, công nghệ, xã hội... cùng từ nối, cụm mô tả biểu đồ và cách trình bày quan điểm.',
  },
  {
    id: 'toeic', title: 'Từ vựng TOEIC', titleEn: 'TOEIC Vocabulary',
    desc: 'Văn phòng, kinh doanh, hợp đồng, công tác...', emoji: '💼', color: PALETTE.tangerine[500],
    intro: 'Từ vựng công sở và kinh doanh cho bài thi TOEIC: văn phòng, họp hành, tài chính, nhân sự, hợp đồng, công tác, dịch vụ khách hàng, thông báo và thư từ.',
  },
];

/** Tra nhanh thông tin chủ đề theo mã */
export const TOPIC_BY_ID = Object.fromEntries(TOPICS.map((t) => [t.id, t])) as Record<TopicId, TopicMeta>;

/** Danh sách mã chủ đề theo thứ tự hiển thị */
export const TOPIC_IDS: TopicId[] = TOPICS.map((t) => t.id);

/** Số từ vựng của một chủ đề (đọc từ thống kê sinh tự động) */
export function topicWordCount(id: TopicId): number {
  return VOCAB_STATS[id]?.words ?? 0;
}

/** Số bài học của một chủ đề */
export function topicLessonCount(id: TopicId): number {
  return VOCAB_STATS[id]?.lessons ?? 0;
}

/** Tổng số từ vựng của toàn bộ ứng dụng */
export function totalWordCount(): number {
  return TOPIC_IDS.reduce((sum, id) => sum + topicWordCount(id), 0);
}

/** Nhãn hiển thị của từng kỹ năng */
/** Thông tin hiển thị của từng kỹ năng: màu lấy từ theme (SKILL_COLORS), icon theo bộ icon của theme */
export const SKILL_INFO: Record<string, { label: string; labelEn: string; icon: string; ico: IconName; color: string; hint: string }> = {
  vocab: { label: 'Từ vựng', labelEn: 'Vocabulary', icon: '📖', ico: 'book-2', color: SKILL_COLORS.vocab, hint: 'Học và nhớ từ mới' },
  listening: { label: 'Nghe', labelEn: 'Listening', icon: '🎧', ico: 'headphones', color: SKILL_COLORS.listening, hint: 'Nghe hội thoại, chọn đáp án' },
  speaking: { label: 'Nói', labelEn: 'Speaking', icon: '🎤', ico: 'microphone', color: SKILL_COLORS.speaking, hint: 'Nghe và nhắc lại theo Bông' },
  reading: { label: 'Đọc', labelEn: 'Reading', icon: '📄', ico: 'file-text', color: SKILL_COLORS.reading, hint: 'Đọc đoạn văn trả lời câu hỏi' },
  writing: { label: 'Viết', labelEn: 'Writing', icon: '✏️', ico: 'pencil', color: SKILL_COLORS.writing, hint: 'Viết câu tiếng Anh' },
};
