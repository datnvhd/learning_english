/**
 * catalog.ts – Danh mục 20 đề IELTS + 20 đề TOEIC cố định (chỉ tên và mô tả, rất nhẹ).
 * Trang Mock Test dùng danh mục này để liệt kê đề; nội dung đề nằm ở ielts-*.ts / toeic-*.ts
 * và chỉ được nạp khi người học bấm làm bài.
 */
import { ExamId } from '../../../models/exam.model';

export interface TestInfo {
  exam: ExamId;
  no: number;
  /** Chủ đề nổi bật của đề (IELTS: bài đọc · đề Writing Task 2; TOEIC: bối cảnh chính) */
  topic: string;
}

/**
 * Số đề đã được nâng lên ĐỘ DÀI ĐẦY ĐỦ như đề thật (các đề 1..n); những đề còn lại vẫn ở dạng rút gọn.
 * Tăng số này mỗi khi thêm phần bổ sung trong thư mục full/ (xem ielts-all.ts / toeic-all.ts).
 */
export const FULL_TESTS: Record<ExamId, number> = { ielts: 20, toeic: 20 };

type Format = { minutes: number; count: string; skills: string; desc: string };

/** Đề đầy đủ: IELTS 40 câu nghe + 40 câu đọc + 2 bài viết + 3 phần nói; TOEIC 200 câu / 120 phút */
const FULL_FORMAT: Record<ExamId, Format> = {
  ielts: {
    minutes: 165, count: '85 mục', skills: '4 kỹ năng',
    desc: 'Đề đầy đủ: Listening 4 phần (40 câu), Reading 3 bài (40 câu), Writing Task 1 + Task 2, Speaking Part 1–3.',
  },
  toeic: {
    minutes: 120, count: '200 câu', skills: '2 kỹ năng',
    desc: 'Đề đầy đủ 200 câu: Part 1 (6), 2 (25), 3 (39), 4 (30), 5 (30), 6 (16), 7 (54).',
  },
};

/** Định dạng của đề số `no`: đầy đủ nếu đề đã được nâng cấp, ngược lại là bản rút gọn */
export const formatOf = (exam: ExamId, no: number): Format => (no <= FULL_TESTS[exam] ? FULL_FORMAT[exam] : TEST_FORMAT[exam]);

/** Số câu và thời gian của một đề cố định dạng RÚT GỌN */
export const TEST_FORMAT: Record<ExamId, Format> = {
  ielts: {
    minutes: 95, count: '23 mục', skills: '4 kỹ năng',
    desc: '2 phần Nghe (10 câu), 1 bài Đọc (8 câu), Writing Task 1 + Task 2, Speaking Part 1–3.',
  },
  toeic: {
    minutes: 38, count: '51 câu', skills: '2 kỹ năng',
    desc: 'Listening & Reading: Part 1 (4), 2 (8), 3 (6), 4 (6), 5 (12), 6 (6), 7 (9).',
  },
};

const IELTS_TOPICS = [
  'How Honeybees Communicate · Children and screens',
  'The Invention of Paper · Free public transport',
  'Why We Forget · Stress among students',
  'Forests in the Sky · Living in big cities',
  'A Short History of Chocolate · Funding the arts',
  'Surviving in the Desert · Should university be free?',
  'The Meaning of Colour · Advertising aimed at children',
  'Guiding Lights · Childhood obesity',
  'The Silk Road · Are zoos necessary?',
  'The Science of Laughter · Tourism and local people',
  'The Race to the South Pole · News from social media',
  'The Box That Changed the World · Space exploration',
  'The Origins of Writing · Languages at primary school',
  'Why Cities Are Hotter · Plastic waste',
  'From Wolf to Dog · Competitive sport for children',
  'Mapping the World · A year off before university',
  'Holding Back the Sea · Caring for elderly people',
  'The Power of Expectation · Prevention or treatment?',
  'The Statues of Easter Island · Old buildings',
  'Planets Beyond the Sun · Money and happiness',
];

const TOEIC_TOPICS = [
  'Đón khách hàng, đặt ghế văn phòng, thông báo sân bay',
  'Sự cố phòng khách sạn, hội chợ thương mại, quy định kho hàng',
  'Đặt tiệc trưa, báo cáo trễ hạn, bản tin giao thông',
  'Đổi trả hàng, chọn địa điểm tiệc, cúp điện',
  'Đi công tác, tài khoản nhân viên mới, tour tham quan',
  'Sửa ô tô, quảng cáo in sai ngày, dự báo thời tiết',
  'Xem căn hộ, tập huấn phần mềm, lễ trao giải',
  'Nhà thuốc, ngân sách quảng cáo, tham quan nhà máy',
  'Đăng ký phòng gym, vật liệu giao trễ, khuyến mãi nội thất',
  'Làm thủ tục bay, bản tin nội bộ, nhận việc mới',
  'In danh thiếp, hẹn phỏng vấn, khánh thành cầu',
  'Lễ tân khách sạn, hóa đơn sai, khảo sát khách hàng',
  'Giặt hấp, thanh tra vệ sinh, họp doanh số',
  'Mua laptop, đổi ca làm, tiệc nghỉ hưu',
  'Taxi ra sân bay, website mới, vệ sinh thảm văn phòng',
  'Mở tài khoản doanh nghiệp, trình diễn sản phẩm, đặt phòng họp',
  'Gia hạn tạp chí, team building, sân vận động',
  'Bưu điện, khiếu nại giao hàng, hội thảo trực tuyến',
  'Đặt bàn nhà hàng, máy in kẹt giấy, vay mua nhà',
  'Xe thuê gặp sự cố, trưng bày cửa hàng, đổi khách sạn',
];

export const TEST_CATALOG: TestInfo[] = [
  ...IELTS_TOPICS.map((topic, i): TestInfo => ({ exam: 'ielts', no: i + 1, topic })),
  ...TOEIC_TOPICS.map((topic, i): TestInfo => ({ exam: 'toeic', no: i + 1, topic })),
];

/** Số đề cố định của mỗi kỳ thi */
export const TEST_COUNT: Record<ExamId, number> = { ielts: IELTS_TOPICS.length, toeic: TOEIC_TOPICS.length };

/** Tên hiển thị của một đề, ví dụ "IELTS Practice Test 03" */
export const testTitle = (exam: ExamId, no: number): string => `${exam === 'ielts' ? 'IELTS' : 'TOEIC'} Practice Test ${String(no).padStart(2, '0')}`;
