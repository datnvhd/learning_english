/**
 * ============================================================================
 *  rubric.ts – Quy đổi đặc trưng ngôn ngữ thành band theo MÔ TẢ BAND (band descriptors)
 * ============================================================================
 *  Mỗi tiêu chí IELTS (Writing: TR, CC, LR, GRA; Speaking: FC, LR, GRA, P) là một bảng các mức band.
 *  Mỗi mức gồm các điều kiện đo được, diễn giải từ bản mô tả band công khai của IELTS, ví dụ GRA band 7:
 *  "dùng nhiều cấu trúc phức tạp; nhiều câu không có lỗi" → tỉ lệ câu phức ≥ 35 %, ≥ 4 dạng cấu trúc,
 *  ≥ 65 % câu không lỗi. Band của tiêu chí = mức cao nhất mà bài đạt MỌI điều kiện.
 *  Lời nhận xét "để lên band tiếp theo" = các điều kiện còn thiếu của mức kế tiếp – giống cách giám
 *  khảo giải thích điểm. Ngưỡng được hiệu chỉnh bằng bài mẫu đã có band (xem calibration.spec.ts).
 */
import type { CohesionProfile, SyntaxProfile, VocabProfile } from './language-features';

/** Một điều kiện của mức band: đạt hay chưa, và mô tả cần làm gì nếu chưa đạt */
interface Cond {
  ok: boolean;
  need: string;
}
/** Một mức band */
type Level = [band: number, conds: Cond[]];

export interface RubricResult {
  id: string;
  label: string;
  /** Band 0–9 */
  band: number;
  /** Đo được gì (bằng chứng) */
  evidence: string[];
  /** Cần gì để lên band kế tiếp (rỗng nếu đã cao nhất) */
  next: string[];
}

const c = (ok: boolean, need: string): Cond => ({ ok, need });
const pc = (v: number) => `${Math.round(v * 100)}%`;

/** Chọn mức cao nhất đạt mọi điều kiện; trả về band và điều kiện còn thiếu của mức kế tiếp */
function grade(levels: Level[], floor: number): { band: number; next: string[] } {
  const sorted = [...levels].sort((a, b) => b[0] - a[0]);
  for (let i = 0; i < sorted.length; i++) {
    const [band, conds] = sorted[i];
    if (conds.every((x) => x.ok)) {
      const up = sorted[i - 1];
      return { band, next: up ? up[1].filter((x) => !x.ok).map((x) => x.need) : [] };
    }
  }
  const lowest = sorted[sorted.length - 1];
  return { band: floor, next: lowest ? lowest[1].filter((x) => !x.ok).map((x) => x.need) : [] };
}

/** Band tổng IELTS: trung bình các tiêu chí, làm tròn theo quy tắc IELTS (.25 → .5, .75 → lên) */
export function ieltsOverall(bands: number[]): number {
  if (!bands.length) return 0;
  const avg = bands.reduce((a, b) => a + b, 0) / bands.length;
  const whole = Math.floor(avg);
  const frac = avg - whole;
  return frac >= 0.75 ? whole + 1 : frac >= 0.25 ? whole + 0.5 : whole;
}

/** Quy band tổng (thang IELTS) về thang điểm TOEIC 0–3 / 0–4 / 0–5 theo mô tả mức của ETS */
export function toToeic(band: number, max: number): number {
  if (max === 3) return band >= 6.5 ? 3 : band >= 5 ? 2 : band >= 3.5 ? 1 : 0;
  if (max === 4) return band >= 7 ? 4 : band >= 6 ? 3 : band >= 5 ? 2 : band >= 3.5 ? 1 : 0;
  return band >= 7.5 ? 5 : band >= 6.5 ? 4 : band >= 5.5 ? 3 : band >= 4.5 ? 2 : band >= 3.5 ? 1 : 0;
}

// =====================================================================
//  WRITING
// =====================================================================

export interface WritingFeatures {
  task: 1 | 2;
  /** Thư/email (TOEIC Q6–7) */
  email: boolean;
  words: number;
  minWords: number;
  paragraphs: number;
  /** Mức bám đề 0..1 (từ khóa đề + hạng mục bảng số liệu) */
  coverage: number;
  /** Task 2: có nêu quan điểm rõ; có kết luận; số ví dụ minh họa */
  position: boolean;
  conclusion: boolean;
  examples: number;
  /** Task 1: có câu tổng quan; số liệu được nhắc; số lần so sánh */
  overview: boolean;
  data: number;
  compare: number;
  cohesion: CohesionProfile;
  vocab: VocabProfile;
  syntax: SyntaxProfile;
  /** Tỉ lệ câu không có lỗi ngữ pháp/chính tả */
  errorFree: number;
  /** Lỗi chính tả trên 100 từ */
  spelling: number;
}

export function writingRubric(f: WritingFeatures): RubricResult[] {
  const len = f.minWords ? f.words / f.minWords : 1;
  const needParas = f.email ? 3 : f.task === 2 ? 4 : 3;
  // Dạng bài mô tả số liệu (Task 1) và thư/email tự nhiên dùng ít từ nối, ít câu phức và ít từ học thuật hơn bài luận
  const report = f.task === 1 && !f.email;
  const kLink = f.email ? 0.6 : report ? 0.6 : 1;
  const kSyn = f.email ? 0.7 : report ? 0.6 : 1;
  const kLex = f.email ? 0.6 : 1;
  const g = (n: number, k: number) => Math.max(1, Math.round(n * k));

  // ---- Task Achievement / Task Response ----
  const tr: Level[] = f.email
    ? [
        [9, [c(f.coverage >= 0.8, 'trả lời đầy đủ mọi ý của email'), c(len >= 1.1, 'viết chi tiết hơn')]],
        [8, [c(f.coverage >= 0.7, 'trả lời đầy đủ các ý được hỏi'), c(len >= 1, `viết đủ ${f.minWords} từ`)]],
        [7, [c(f.coverage >= 0.6, 'trả lời trực tiếp các ý trong email'), c(len >= 1, `viết đủ ${f.minWords} từ`)]],
        [6, [c(f.coverage >= 0.45, 'bám sát nội dung email'), c(len >= 0.9, 'viết gần đủ số từ tối thiểu')]],
        [5, [c(f.coverage >= 0.3, 'bài cần liên quan tới email'), c(len >= 0.75, 'viết dài hơn')]],
        [4, [c(len >= 0.5, 'viết dài hơn (bài quá ngắn)')]],
        [3, [c(f.words >= 20, 'viết thành email hoàn chỉnh')]],
      ]
    : report
    ? [
        [9, [c(f.overview, 'có câu tổng quan (Overall, ...) nêu xu hướng chính'), c(f.data >= 8, 'dẫn chứng số liệu đầy đủ (≥ 8 số liệu)'), c(f.compare >= 4, 'so sánh số liệu thường xuyên'), c(f.coverage >= 0.85, 'nhắc tới gần hết các hạng mục'), c(len >= 1, `viết đủ ${f.minWords} từ`)]],
        [8, [c(f.overview, 'có câu tổng quan rõ ràng'), c(f.data >= 6, 'dẫn chứng ≥ 6 số liệu chính'), c(f.compare >= 3, 'so sánh các hạng mục với nhau (higher than, whereas...)'), c(f.coverage >= 0.75, 'nhắc tới hầu hết các hạng mục trong bảng/biểu đồ'), c(len >= 1, `viết đủ ${f.minWords} từ`)]],
        [7, [c(f.overview, 'thêm câu tổng quan (Overall, ...) nêu đặc điểm nổi bật nhất'), c(f.data >= 4, 'dẫn chứng ít nhất 4 số liệu'), c(f.compare >= 2, 'so sánh số liệu giữa các hạng mục'), c(f.coverage >= 0.6, 'mô tả nhiều hạng mục hơn'), c(len >= 1, `viết đủ ${f.minWords} từ`)]],
        [6, [c(f.overview || f.compare >= 2, 'có tổng quan hoặc so sánh số liệu'), c(f.data >= 3, 'đưa số liệu cụ thể vào bài'), c(f.coverage >= 0.45, 'mô tả các hạng mục chính'), c(len >= 0.9, 'viết gần đủ số từ tối thiểu')]],
        [5, [c(f.data >= 1, 'đưa số liệu vào bài'), c(f.coverage >= 0.3, 'bám sát nội dung bảng/biểu đồ'), c(len >= 0.75, 'viết dài hơn')]],
        [4, [c(len >= 0.5, 'viết dài hơn (bài quá ngắn)')]],
        [3, [c(f.words >= 30, 'viết thành bài hoàn chỉnh')]],
      ]
    : [
        [9, [c(f.position, 'nêu quan điểm rõ ở mở bài'), c(f.conclusion, 'có đoạn kết luận'), c(f.examples >= 3, 'phát triển ý bằng nhiều ví dụ cụ thể'), c(f.coverage >= 0.8, 'trả lời đầy đủ mọi phần của đề'), c(len >= 1, `viết đủ ${f.minWords} từ`)]],
        [8, [c(f.position, 'nêu quan điểm rõ ràng'), c(f.conclusion, 'có kết luận'), c(f.examples >= 2, 'thêm ví dụ minh họa (for example, for instance...)'), c(f.coverage >= 0.7, 'bám sát mọi ý của đề'), c(len >= 1, `viết đủ ${f.minWords} từ`)]],
        [7, [c(f.position, 'nêu rõ quan điểm của bạn (In my opinion, I believe...)'), c(f.conclusion, 'thêm đoạn kết luận (In conclusion, ...)'), c(f.examples >= 1, 'đưa ít nhất một ví dụ cụ thể'), c(f.coverage >= 0.6, 'trả lời trực tiếp các ý của đề'), c(len >= 1, `viết đủ ${f.minWords} từ`)]],
        [6, [c(f.position || f.conclusion, 'nêu quan điểm hoặc kết luận'), c(f.coverage >= 0.45, 'bám sát đề hơn'), c(len >= 0.9, 'viết gần đủ số từ tối thiểu')]],
        [5, [c(f.coverage >= 0.3, 'bài cần liên quan tới đề'), c(len >= 0.75, 'viết dài hơn')]],
        [4, [c(len >= 0.5, 'viết dài hơn (bài quá ngắn)')]],
        [3, [c(f.words >= 30, 'viết thành bài hoàn chỉnh')]],
      ];
  const TR = grade(tr, f.words ? 2 : 0);

  // ---- Coherence and Cohesion ----
  const co = f.cohesion;
  const cc = grade([
    [9, [c(f.paragraphs >= needParas, `chia ≥ ${needParas} đoạn`), c(co.groups.length >= g(5, kLink), 'dùng từ nối đa dạng ở nhiều nhóm chức năng'), c(co.perHundred >= 1.5 * kLink && co.perHundred <= 6.5, 'dùng từ nối vừa đủ, tự nhiên'), c(!co.overused.length, 'không lặp một từ nối'), c(co.references >= g(6, kLink), 'dùng quy chiếu (this, which, these...) để nối ý')]],
    [8, [c(f.paragraphs >= needParas, `chia ≥ ${needParas} đoạn`), c(co.groups.length >= g(4, kLink), 'dùng từ nối thuộc nhiều nhóm hơn (bổ sung, tương phản, nguyên nhân, ví dụ...)'), c(co.perHundred >= 1.2 * kLink && co.perHundred <= 7, 'dùng từ nối vừa phải, không lạm dụng'), c(!co.overused.length, `đừng lặp từ nối ${co.overused.join(', ')}`), c(co.references >= g(4, kLink), 'dùng thêm từ quy chiếu (this, these, such...)')]],
    [7, [c(f.paragraphs >= needParas, `chia bài thành ≥ ${needParas} đoạn, mỗi đoạn một ý chính`), c(co.groups.length >= g(3, kLink), `dùng từ nối thuộc ít nhất ${g(3, kLink)} nhóm chức năng`), c(co.perHundred >= kLink, 'dùng thêm từ nối giữa các câu'), c(co.overused.length <= 1, 'tránh lặp lại cùng một từ nối'), c(co.references >= g(2, kLink), 'dùng từ quy chiếu để tránh lặp danh từ')]],
    [6, [c(f.paragraphs >= needParas - 1, 'chia đoạn rõ ràng'), c(co.groups.length >= g(2, kLink), 'dùng từ nối đa dạng hơn'), c(co.perHundred >= 0.7 * kLink, 'thêm từ nối')]],
    [5, [c(f.paragraphs >= 2, 'chia bài thành nhiều đoạn'), c(co.count >= 2, 'dùng từ nối')]],
    [4, [c(co.count >= 1, 'dùng từ nối để liên kết câu')]],
  ], f.words ? 3 : 0);

  // ---- Lexical Resource ----
  const v = f.vocab;
  // Chỉ số đa dạng (Guiraud) tăng theo độ dài bài: quy ngưỡng về bài ~250 từ
  const divNeed = (x: number) => x * Math.min(1, Math.sqrt(Math.max(f.words, 60) / 250) * 0.6 + 0.4);
  const lr = grade([
    [9, [c(v.advanced >= 0.2 * kLex, 'dùng nhiều từ vựng ít gặp, chính xác'), c(v.diversity >= divNeed(8.2), 'từ vựng rất đa dạng'), c(f.spelling <= 0.3, 'gần như không sai chính tả')]],
    [8, [c(v.advanced >= 0.15 * kLex, 'dùng thêm từ vựng nâng cao (B2–C1) đúng ngữ cảnh'), c(v.diversity >= divNeed(7.4), 'dùng từ đồng nghĩa, tránh lặp từ'), c(f.spelling <= 0.6, 'hạn chế lỗi chính tả')]],
    [7, [c(v.advanced >= 0.1 * kLex, `tăng tỉ lệ từ vựng nâng cao (hiện ${pc(v.advanced)}, cần ≥ ${Math.round(10 * kLex)}%)`), c(v.diversity >= divNeed(6.6), 'đa dạng hóa từ vựng, paraphrase'), c(f.spelling <= 1.2, 'giảm lỗi chính tả')]],
    [6, [c(v.advanced >= 0.065 * kLex, 'dùng thêm từ vựng trình độ B2 trở lên'), c(v.diversity >= divNeed(5.8), 'tránh lặp từ'), c(f.spelling <= 2, 'giảm lỗi chính tả')]],
    [5, [c(v.advanced >= 0.035 * kLex, 'dùng từ vựng ngoài nhóm cơ bản'), c(v.diversity >= divNeed(5), 'dùng nhiều từ khác nhau hơn'), c(f.spelling <= 3.5, 'chú ý chính tả')]],
    [4, [c(v.diversity >= 4, 'mở rộng vốn từ')]],
  ], f.words ? 3 : 0);

  // ---- Grammatical Range and Accuracy ----
  const s = f.syntax;
  const gra = grade([
    [9, [c(f.errorFree >= 0.95, 'gần như mọi câu không có lỗi'), c(s.complexRatio >= 0.5 * kSyn, 'dùng câu phức linh hoạt'), c(s.structures.length >= g(6, kSyn + 0.2), 'dùng nhiều dạng cấu trúc')]],
    [8, [c(f.errorFree >= 0.85, `phần lớn câu không lỗi (hiện ${pc(f.errorFree)}, cần ≥ 85%)`), c(s.complexRatio >= 0.4 * kSyn, 'dùng nhiều câu phức'), c(s.structures.length >= g(5, kSyn + 0.2), 'đa dạng cấu trúc (bị động, mệnh đề quan hệ, điều kiện...)')]],
    [7, [c(f.errorFree >= 0.65, `tăng tỉ lệ câu không lỗi (hiện ${pc(f.errorFree)}, cần ≥ 65%)`), c(s.complexRatio >= 0.3 * kSyn, `dùng thêm câu phức (hiện ${pc(s.complexRatio)}, cần ≥ ${Math.round(30 * kSyn)}%)`), c(s.structures.length >= g(4, kSyn + 0.2), 'dùng thêm dạng cấu trúc: mệnh đề quan hệ, bị động, câu điều kiện, thì hoàn thành')]],
    [6, [c(f.errorFree >= 0.45, 'giảm lỗi ngữ pháp'), c(s.complexRatio >= 0.18 * kSyn, 'kết hợp câu đơn và câu phức'), c(s.structures.length >= g(3, kSyn + 0.2), 'dùng thêm dạng cấu trúc')]],
    [5, [c(f.errorFree >= 0.25, 'giảm lỗi ngữ pháp'), c(s.complexRatio >= 0.08 * kSyn, 'thử viết câu phức (because, which, although...)')]],
    [4, [c(s.sentences >= 3, 'viết câu hoàn chỉnh')]],
  ], f.words ? 3 : 0);

  const ev = (xs: string[]) => xs.filter(Boolean);
  return [
    {
      id: 'tr', label: report || f.email ? 'Task Achievement' : 'Task Response', band: TR.band, next: TR.next,
      evidence: ev([`${f.words}/${f.minWords} từ`, `bám đề ${pc(f.coverage)}`,
        f.email ? '' : report ? `${f.overview ? 'có' : 'chưa có'} câu tổng quan · ${f.data} số liệu · ${f.compare} lần so sánh` : `${f.position ? 'có' : 'chưa rõ'} quan điểm · ${f.conclusion ? 'có' : 'chưa có'} kết luận · ${f.examples} ví dụ`]),
    },
    {
      id: 'cc', label: 'Coherence and Cohesion', band: cc.band, next: cc.next,
      evidence: ev([`${f.paragraphs} đoạn`, `${co.count} từ nối (${co.perHundred.toFixed(1)}/100 từ) · ${co.groups.length} nhóm`, co.overused.length ? `lặp: ${co.overused.join(', ')}` : '', `${co.references} từ quy chiếu`]),
    },
    {
      id: 'lr', label: 'Lexical Resource', band: lr.band, next: lr.next,
      evidence: ev([`từ nâng cao ${pc(v.advanced)}${v.advancedWords.length ? ' (' + v.advancedWords.slice(0, 5).join(', ') + ')' : ''}`, `độ đa dạng ${v.diversity.toFixed(1)}`, `${f.spelling.toFixed(1)} lỗi chính tả/100 từ`]),
    },
    {
      id: 'gra', label: 'Grammatical Range and Accuracy', band: gra.band, next: gra.next,
      evidence: ev([`${pc(f.errorFree)} câu không lỗi`, `${pc(s.complexRatio)} câu phức`, `${s.structures.length} dạng cấu trúc${s.structures.length ? ': ' + s.structures.slice(0, 3).join('; ') : ''}`]),
    },
  ];
}

// =====================================================================
//  SPEAKING
// =====================================================================

export interface SpeakingFeatures {
  words: number;
  /** Độ dài so với thời gian cho phép (0..1+) */
  length: number;
  wpm: number;
  /** Số lần ngừng > 1 giây mỗi phút */
  pausesPerMin: number;
  /** Từ đệm (uh, um) trên 100 từ */
  fillers: number;
  /** Lặp lại / tự sửa trên 100 từ */
  repetitions: number;
  cohesion: CohesionProfile;
  vocab: VocabProfile;
  syntax: SyntaxProfile;
  errorFree: number;
  /** Phát âm: độ chính xác âm vị 0..1 (nếu có), độ tin cậy nhận dạng, tỉ lệ từ không rõ */
  phoneAccuracy?: number;
  confidence: number;
  unclear: number;
  /** Ngữ điệu: độ biến thiên cao độ 0..1 (nếu đo được) */
  intonation?: number;
}

export function speakingRubric(f: SpeakingFeatures): RubricResult[] {
  const co = f.cohesion;
  const fc = grade([
    [9, [c(f.wpm >= 130, 'nói nhanh, tự nhiên như người bản ngữ'), c(f.pausesPerMin <= 2, 'gần như không ngập ngừng'), c(f.fillers <= 1, 'không dùng "uh/um"'), c(co.groups.length >= 4, 'liên kết ý rất mạch lạc'), c(f.length >= 0.8, 'phát triển câu trả lời đầy đủ')]],
    [8, [c(f.wpm >= 115, 'nói trôi chảy hơn (≥ 115 từ/phút)'), c(f.pausesPerMin <= 3, 'giảm chỗ ngừng lâu'), c(f.fillers <= 2, 'giảm "uh/um"'), c(f.repetitions <= 2, 'tránh lặp lại / tự sửa'), c(co.groups.length >= 3, 'dùng từ nối đa dạng'), c(f.length >= 0.7, 'mở rộng câu trả lời')]],
    [7, [c(f.wpm >= 100, `nói nhanh hơn (hiện ${Math.round(f.wpm)} từ/phút, cần ≥ 100)`), c(f.pausesPerMin <= 5, 'giảm ngập ngừng giữa câu'), c(f.fillers <= 4, 'thay "uh/um" bằng cụm giữ lượt (Well, let me think...)'), c(co.groups.length >= 3, 'dùng từ nối thuộc ít nhất 3 nhóm (because, however, for example...)'), c(f.length >= 0.6, 'nói dài hơn, phát triển ý')]],
    [6, [c(f.wpm >= 85, 'nói liền mạch hơn'), c(f.pausesPerMin <= 8, 'giảm chỗ ngừng'), c(co.groups.length >= 2, 'dùng thêm từ nối'), c(f.length >= 0.45, 'trả lời dài hơn')]],
    [5, [c(f.wpm >= 70, 'nói liền mạch hơn'), c(f.length >= 0.3, 'trả lời dài hơn')]],
    [4, [c(f.words >= 10, 'trả lời thành câu hoàn chỉnh')]],
  ], f.words >= 3 ? 3 : 0);

  const v = f.vocab;
  const lr = grade([
    [9, [c(v.advanced >= 0.2, 'dùng từ vựng ít gặp, chính xác'), c(v.diversity >= 7.5, 'từ vựng rất đa dạng')]],
    [8, [c(v.advanced >= 0.15, 'dùng thêm từ vựng nâng cao, thành ngữ'), c(v.diversity >= 6.8, 'đa dạng từ vựng')]],
    [7, [c(v.advanced >= 0.11, `dùng thêm từ vựng nâng cao (hiện ${pc(v.advanced)}, cần ≥ 11%)`), c(v.diversity >= 6, 'paraphrase, tránh lặp từ')]],
    [6, [c(v.advanced >= 0.07, 'dùng thêm từ vựng trình độ B2'), c(v.diversity >= 5.2, 'dùng nhiều từ khác nhau hơn')]],
    [5, [c(v.advanced >= 0.03, 'dùng từ ngoài nhóm cơ bản'), c(v.diversity >= 4.4, 'mở rộng vốn từ')]],
    [4, [c(v.diversity >= 3.6, 'mở rộng vốn từ')]],
  ], f.words >= 3 ? 3 : 0);

  const s = f.syntax;
  const gra = grade([
    [9, [c(f.errorFree >= 0.9, 'gần như không lỗi ngữ pháp'), c(s.complexRatio >= 0.45, 'dùng câu phức linh hoạt'), c(s.structures.length >= 6, 'cấu trúc rất đa dạng')]],
    [8, [c(f.errorFree >= 0.8, 'phần lớn câu không lỗi'), c(s.complexRatio >= 0.35, 'dùng nhiều câu phức'), c(s.structures.length >= 5, 'đa dạng cấu trúc hơn')]],
    [7, [c(f.errorFree >= 0.65, `giảm lỗi ngữ pháp (hiện ${pc(f.errorFree)} câu không lỗi)`), c(s.complexRatio >= 0.25, 'dùng thêm câu phức (because, which, if...)'), c(s.structures.length >= 4, 'dùng thêm cấu trúc: điều kiện, mệnh đề quan hệ, hoàn thành, bị động')]],
    [6, [c(f.errorFree >= 0.45, 'giảm lỗi ngữ pháp'), c(s.complexRatio >= 0.15, 'kết hợp câu đơn và câu phức'), c(s.structures.length >= 3, 'dùng ít nhất 3 dạng cấu trúc')]],
    [5, [c(f.errorFree >= 0.25, 'giảm lỗi ngữ pháp'), c(s.structures.length >= 2, 'thử dùng câu phức')]],
    [4, [c(f.words >= 10, 'nói thành câu hoàn chỉnh')]],
  ], f.words >= 3 ? 3 : 0);

  // Phát âm: ưu tiên độ chính xác âm vị (nếu đo được), kèm độ rõ và ngữ điệu
  const acc = f.phoneAccuracy ?? Math.min(1, Math.max(0, (f.confidence - 0.35) / 0.65));
  const into = f.intonation ?? 0.6;
  const p = grade([
    [9, [c(acc >= 0.95, 'phát âm chính xác mọi âm'), c(f.unclear <= 0.02, 'mọi từ đều rõ'), c(into >= 0.75, 'ngữ điệu tự nhiên, linh hoạt')]],
    [8, [c(acc >= 0.9, 'phát âm chính xác hơn các âm khó'), c(f.unclear <= 0.05, 'phát âm rõ mọi từ'), c(into >= 0.65, 'lên xuống giọng tự nhiên hơn')]],
    [7, [c(acc >= 0.84, `sửa các âm phát âm sai (độ chính xác hiện ${pc(acc)})`), c(f.unclear <= 0.1, 'phát âm rõ phụ âm cuối'), c(into >= 0.5, 'nhấn trọng âm và lên xuống giọng, tránh đọc đều đều')]],
    [6, [c(acc >= 0.76, 'luyện các âm hay sai (âm cuối, /θ/ /ð/, /ʃ/)'), c(f.unclear <= 0.16, 'phát âm rõ hơn'), c(into >= 0.35, 'có ngữ điệu, tránh đọc đều')]],
    [5, [c(acc >= 0.66, 'phát âm rõ hơn'), c(f.unclear <= 0.25, 'nhiều từ còn khó nghe')]],
    [4, [c(acc >= 0.5, 'luyện phát âm cơ bản')]],
  ], f.words >= 3 ? 3 : 0);

  return [
    { id: 'fc', label: 'Fluency and Coherence', band: fc.band, next: fc.next,
      evidence: [`${Math.round(f.wpm)} từ/phút`, `${f.pausesPerMin.toFixed(1)} lần ngừng/phút`, `${f.fillers.toFixed(1)} "uh/um"/100 từ`, `${co.count} từ nối · ${co.groups.length} nhóm`] },
    { id: 'lr', label: 'Lexical Resource', band: lr.band, next: lr.next,
      evidence: [`từ nâng cao ${pc(v.advanced)}${v.advancedWords.length ? ' (' + v.advancedWords.slice(0, 4).join(', ') + ')' : ''}`, `độ đa dạng ${v.diversity.toFixed(1)}`] },
    { id: 'gra', label: 'Grammatical Range and Accuracy', band: gra.band, next: gra.next,
      evidence: [`${pc(f.errorFree)} câu không lỗi`, `${pc(s.complexRatio)} câu phức`, `${s.structures.length} dạng cấu trúc`] },
    { id: 'p', label: 'Pronunciation', band: p.band, next: p.next,
      evidence: [f.phoneAccuracy !== undefined ? `độ chính xác âm vị ${pc(acc)}` : `máy nghe rõ ${pc(1 - f.unclear)} số từ`, f.intonation !== undefined ? `ngữ điệu ${pc(into)}` : ''].filter(Boolean) },
  ];
}
