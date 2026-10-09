/**
 * ============================================================================
 *  helpers.ts – Kiểu dữ liệu và hàm dựng cho BỘ ĐỀ CỐ ĐỊNH (20 đề IELTS + 20 đề TOEIC)
 * ============================================================================
 *  Khác với kho câu hỏi ở thư mục cha (mỗi lần làm rút ngẫu nhiên), mỗi đề ở đây có nội dung
 *  cố định: làm lại vẫn đúng các bài nghe, bài đọc, câu hỏi đó (chỉ thứ tự đáp án được xáo).
 *
 *  Nội dung do nhóm biên soạn theo đúng dạng câu hỏi của đề thật – KHÔNG sao chép đề có bản quyền
 *  của Cambridge / ETS. Để tệp đề gọn, đề được viết ở dạng rút gọn:
 *   - Câu trắc nghiệm : [câu hỏi, đáp án ĐÚNG, sai 1, sai 2, (sai 3), giải thích tiếng Việt]
 *   - True/False/NG   : ['T' | 'F' | 'NG', nhận định, giải thích]
 *   - Câu điền        : [câu có chỗ trống ____, [các đáp án chấp nhận], giải thích]
 *   - Lời thoại       : 'W: ...' (giọng nữ) hoặc 'M: ...' (giọng nam)
 */
import { ExamAudio, ExamFill, ExamMcq, ExamPassage, SpeakingItem, WritingTask } from '../../../models/exam.model';
import { Part2Item, Part5Item } from '../toeic';

/** Câu trắc nghiệm hoặc True/False/Not Given ở dạng rút gọn */
export type RawQ = string[];
/** Câu điền từ ở dạng rút gọn */
export type RawFill = [string, string[], string];

/** Bài nghe ở dạng rút gọn */
export interface RawAudio {
  title: string;
  lines: string[];
  qs: RawQ[];
  fill?: RawFill[];
  /** Bảng biểu "Look at the graphic": [tiêu đề, các dòng "a | b"] */
  graphic?: [string, string];
}

/** Bài đọc ở dạng rút gọn */
export interface RawText {
  title: string;
  text: string;
  qs: RawQ[];
  fill?: RawFill[];
}

/** Một đề TOEIC Listening & Reading cố định (Part 1 lấy ảnh từ kho ảnh offline theo số đề) */
export interface ToeicTest {
  no: number;
  part2: Part2Item[];
  part3: ExamAudio[];
  part4: ExamAudio[];
  part5: Part5Item[];
  part6: ExamPassage[];
  part7: ExamPassage[];
}

/** Một đề IELTS Academic cố định: 2 phần nghe, 1 bài đọc, Writing Task 1 + 2, Speaking Part 1–3 */
export interface IeltsTest {
  no: number;
  listening: ExamAudio[];
  reading: ExamPassage[];
  writing: WritingTask[];
  speaking: SpeakingItem[];
}

const TFNG = { T: 'True', F: 'False', NG: 'Not Given' } as const;

function mcq(x: RawQ): ExamMcq {
  if (x[0] === 'T' || x[0] === 'F' || x[0] === 'NG') {
    const a = TFNG[x[0]];
    return { q: x[1], a, wrong: Object.values(TFNG).filter((v) => v !== a), ex: x[2] };
  }
  return { q: x[0], a: x[1], wrong: x.slice(2, -1), ex: x[x.length - 1] };
}

const fills = (f?: RawFill[]): ExamFill[] | undefined => f?.map(([q, answers, ex]) => ({ q, answers, ex }));

function audio(id: string, r: RawAudio): ExamAudio {
  return {
    id, title: r.title, titleVi: r.title,
    lines: r.lines.map((l) => ({ who: l.startsWith('M: ') ? 'B' as const : 'A' as const, text: l.replace(/^[WM]: /, ''), vi: '' })),
    mcq: r.qs.map(mcq), fill: fills(r.fill),
    graphic: r.graphic ? { title: r.graphic[0], text: r.graphic[1] } : undefined,
  };
}

function passage(id: string, r: RawText): ExamPassage {
  return { id, title: r.title, titleVi: r.title, text: r.text, textVi: '', mcq: r.qs.map(mcq), fill: fills(r.fill) };
}

/** Dựng một đề TOEIC từ dữ liệu rút gọn */
export function toeicTest(no: number, d: { p2: Part2Item[]; p3: RawAudio[]; p4: RawAudio[]; p5: Part5Item[]; p6: RawText[]; p7: RawText[] }): ToeicTest {
  const id = `tt${no}`;
  return {
    no, part2: d.p2, part5: d.p5,
    part3: d.p3.map((r, i) => audio(`${id}-p3-${i + 1}`, r)),
    part4: d.p4.map((r, i) => audio(`${id}-p4-${i + 1}`, r)),
    part6: d.p6.map((r, i) => passage(`${id}-p6-${i + 1}`, r)),
    part7: d.p7.map((r, i) => passage(`${id}-p7-${i + 1}`, r)),
  };
}

const TIPS_TASK1 = [
  'Đoạn 1: diễn đạt lại đề bằng lời của bạn (paraphrase).',
  'Viết Overview nêu 2 đặc điểm nổi bật nhất, chưa cần số liệu.',
  'Thân bài: nhóm số liệu giống nhau để so sánh, không liệt kê từng con số.',
  'Không nêu ý kiến cá nhân trong Task 1.',
];
const TIPS_TASK2 = [
  'Trả lời đúng và đủ mọi vế của câu hỏi, nêu quan điểm ngay ở mở bài.',
  'Mỗi đoạn thân bài: 1 ý chính + giải thích + ví dụ.',
  'Dùng từ nối để dẫn dắt ý (However, Furthermore, As a result).',
  'Dành 3 phút cuối soát lỗi chính tả, mạo từ, chia động từ.',
];
const TIPS_SPEAKING: Record<1 | 2 | 3, string[]> = {
  1: ['Trả lời 2–3 câu: ý chính + lý do hoặc ví dụ.', 'Nói tự nhiên, không học thuộc lòng.'],
  2: ['1 phút chuẩn bị: ghi từ khóa cho từng gợi ý.', 'Nói đủ 1–2 phút, đi lần lượt các gợi ý.', 'Kết bằng cảm nghĩ của bạn (why).'],
  3: ['Nêu quan điểm + lý do + ví dụ.', 'Có thể cân nhắc hai mặt của vấn đề trước khi kết luận.'],
};

/** Dữ liệu rút gọn của một đề IELTS */
export interface RawIelts {
  listening: RawAudio[];
  reading: RawText;
  /** Task 1: [dạng biểu đồ – chủ đề, đề bài, dữ liệu dạng bảng "a | b", bài mẫu ≥150 từ] */
  task1: [string, string, string, string];
  /** Task 2: [dạng đề – chủ đề, đề bài, bài mẫu ≥250 từ] */
  task2: [string, string, string];
  /** Speaking Part 1 và Part 3: [chủ đề, câu hỏi 1, câu hỏi 2, câu trả lời mẫu] */
  part1: [string, string, string, string];
  /** Speaking Part 2: [chủ đề, các dòng thẻ gợi ý, bài nói mẫu] */
  part2: [string, string[], string];
  part3: [string, string, string, string];
}

/** Dựng một đề IELTS từ dữ liệu rút gọn */
export function ieltsTest(no: number, d: RawIelts): IeltsTest {
  const id = `it${no}`;
  const qa = (part: 1 | 3, [topic, q1, q2, sample]: [string, string, string, string]): SpeakingItem => ({
    id: `${id}-s${part}`, part, title: `Part ${part} – ${topic}`, lines: [q1, q2], sample, tips: TIPS_SPEAKING[part],
  });
  return {
    no,
    listening: d.listening.map((r, i) => audio(`${id}-l${i + 1}`, r)),
    reading: [passage(`${id}-r1`, d.reading)],
    writing: [
      { id: `${id}-w1`, task: 1, title: `Task 1 – ${d.task1[0]}`, prompt: d.task1[1], data: d.task1[2], model: d.task1[3], minWords: 150, minutes: 20, tips: TIPS_TASK1 },
      { id: `${id}-w2`, task: 2, title: `Task 2 – ${d.task2[0]}`, prompt: d.task2[1], model: d.task2[2], minWords: 250, minutes: 40, tips: TIPS_TASK2 },
    ],
    speaking: [
      qa(1, d.part1),
      { id: `${id}-s2`, part: 2, title: `Part 2 – ${d.part2[0]}`, lines: d.part2[1], sample: d.part2[2], tips: TIPS_SPEAKING[2] },
      qa(3, d.part3),
    ],
  };
}

// ============================================================================
//  ĐỀ ĐẦY ĐỦ (độ dài như đề thật) – phần bổ sung nằm ở thư mục full/
// ============================================================================
//  TOEIC 200 câu: Part 1 (6) · 2 (25) · 3 (39 = 13 hội thoại) · 4 (30 = 10 bài nói) · 5 (30) · 6 (16 = 4 đoạn × 4) · 7 (54)
//    full/toeic-NN-l.ts: p2 thêm 17 câu, p3 thêm 11 hội thoại, p4 thêm 8 bài nói
//    full/toeic-NN-r.ts: p5 thêm 18 câu, p6 = 4 đoạn × 4 câu (THAY bộ rút gọn), p7 thêm 45 câu
//                        (7 bài đơn 2+2+3+3+3+3+4 câu, 2 bộ đôi × 5 câu, 3 bộ ba × 5 câu)
//  IELTS 40 + 40 câu: full/ielts-NN.ts
//    l1, l2 : nối thêm lời thoại + 5 câu cho hai phần nghe sẵn có (mỗi phần thành 10 câu)
//    listening: 2 phần nghe mới × 10 câu;  r1: nối thêm đoạn văn + 5 câu cho bài đọc sẵn có (thành 13 câu)
//    reading: 2 bài đọc mới (13 và 14 câu)

/** Phần bổ sung phần Nghe của một đề TOEIC đầy đủ */
export interface RawToeicL { p2: Part2Item[]; p3: RawAudio[]; p4: RawAudio[] }
/** Phần bổ sung phần Đọc của một đề TOEIC đầy đủ */
export interface RawToeicR { p5: Part5Item[]; p6: RawText[]; p7: RawText[] }

/** Ghép đề TOEIC rút gọn với phần bổ sung thành đề 200 câu */
export function toeicFull(base: ToeicTest, l: RawToeicL, r: RawToeicR): ToeicTest {
  const id = `tt${base.no}`;
  return {
    no: base.no,
    part2: [...base.part2, ...l.p2],
    part3: [...base.part3, ...l.p3.map((x, i) => audio(`${id}-p3-x${i + 1}`, x))],
    part4: [...base.part4, ...l.p4.map((x, i) => audio(`${id}-p4-x${i + 1}`, x))],
    part5: [...base.part5, ...r.p5],
    part6: r.p6.map((x, i) => passage(`${id}-p6-x${i + 1}`, x)),
    part7: [...base.part7, ...r.p7.map((x, i) => passage(`${id}-p7-x${i + 1}`, x))],
  };
}

/** Phần nối thêm vào một bài nghe / bài đọc sẵn có */
export interface RawMore { lines?: string[]; text?: string; qs: RawQ[]; fill?: RawFill[] }

/** Phần bổ sung của một đề IELTS đầy đủ */
export interface RawIeltsFull { l1: RawMore; l2: RawMore; listening: RawAudio[]; r1: RawMore; reading: RawText[] }

/** Ghép đề IELTS rút gọn với phần bổ sung thành đề 40 câu nghe + 40 câu đọc (Writing, Speaking giữ nguyên) */
export function ieltsFull(base: IeltsTest, d: RawIeltsFull): IeltsTest {
  const id = `it${base.no}`;
  const longer = (a: ExamAudio, m: RawMore): ExamAudio => {
    const x = audio(a.id, { title: a.title, lines: m.lines ?? [], qs: m.qs, fill: m.fill });
    return { ...a, lines: [...a.lines, ...x.lines], mcq: [...a.mcq, ...x.mcq], fill: [...(a.fill ?? []), ...(x.fill ?? [])] };
  };
  const r = base.reading[0];
  const more = passage(r.id, { title: r.title, text: '', qs: d.r1.qs, fill: d.r1.fill });
  const listening = [longer(base.listening[0], d.l1), longer(base.listening[1], d.l2), ...d.listening.map((x, i) => audio(`${id}-lx${i + 1}`, x))];
  return {
    ...base,
    // Xếp theo "Section 1..4" trong tiêu đề để đúng thứ tự đề thật
    listening: listening.sort((a, b) => a.title.localeCompare(b.title)),
    reading: [
      { ...r, text: `${r.text}\n\n${d.r1.text ?? ''}`, mcq: [...r.mcq, ...more.mcq], fill: [...(r.fill ?? []), ...(more.fill ?? [])] },
      ...d.reading.map((x, i) => passage(`${id}-rx${i + 1}`, x)),
    ],
  };
}
