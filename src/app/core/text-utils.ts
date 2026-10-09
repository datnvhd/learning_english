/**
 * ============================================================================
 *  text-utils.ts – Các hàm tiện ích xử lý chuỗi & ngẫu nhiên dùng chung
 * ============================================================================
 *  Gồm: chuẩn hóa văn bản, so sánh độ giống nhau (chấm bài viết/nói), xáo trộn mảng...
 *  Tất cả là hàm thuần (pure function) nên rất dễ kiểm thử.
 */

/**
 * Chuẩn hóa một câu tiếng Anh để so sánh:
 *  - đổi về chữ thường
 *  - thay dấu nháy cong (’) bằng dấu nháy thẳng (')
 *  - bỏ dấu câu, giữ lại chữ cái/số/dấu nháy đơn
 *  - gộp nhiều khoảng trắng thành một
 */
export function normalizeText(text: string): string {
  return text
    .toLowerCase()
    .replace(/[’‘`]/g, "'")
    .replace(/[^a-z0-9'\s-]/g, ' ')
    .replace(/-/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

/** Tách câu đã chuẩn hóa thành danh sách từ */
export function tokenize(text: string): string[] {
  const n = normalizeText(text);
  return n ? n.split(' ') : [];
}

/** Khoảng cách Levenshtein giữa hai chuỗi (số phép sửa ít nhất để biến a thành b) */
export function levenshtein(a: string, b: string): number {
  if (a === b) return 0;
  if (!a.length) return b.length;
  if (!b.length) return a.length;
  let prev = Array.from({ length: b.length + 1 }, (_, i) => i);
  for (let i = 1; i <= a.length; i++) {
    const cur = [i];
    for (let j = 1; j <= b.length; j++) {
      const cost = a[i - 1] === b[j - 1] ? 0 : 1;
      cur[j] = Math.min(prev[j] + 1, cur[j - 1] + 1, prev[j - 1] + cost);
    }
    prev = cur;
  }
  return prev[b.length];
}

/** Độ giống nhau theo ký tự: 1 = giống hệt, 0 = hoàn toàn khác */
export function charSimilarity(a: string, b: string): number {
  const x = normalizeText(a);
  const y = normalizeText(b);
  const max = Math.max(x.length, y.length);
  return max === 0 ? 1 : 1 - levenshtein(x, y) / max;
}

/**
 * Độ giống nhau theo TỪ dựa trên dãy con chung dài nhất (LCS).
 * Dùng để chấm phần Nói: so sánh lời nhận dạng được với câu mẫu.
 * Trả về giá trị 0..1 (F1 giữa độ chính xác và độ phủ).
 */
export function wordSimilarity(spoken: string, target: string): number {
  const a = tokenize(spoken);
  const b = tokenize(target);
  if (!a.length || !b.length) return 0;
  // Bảng quy hoạch động tính độ dài LCS
  const dp = Array.from({ length: a.length + 1 }, () => new Array<number>(b.length + 1).fill(0));
  for (let i = 1; i <= a.length; i++) {
    for (let j = 1; j <= b.length; j++) {
      dp[i][j] = a[i - 1] === b[j - 1] ? dp[i - 1][j - 1] + 1 : Math.max(dp[i - 1][j], dp[i][j - 1]);
    }
  }
  const lcs = dp[a.length][b.length];
  const precision = lcs / a.length;
  const recall = lcs / b.length;
  return precision + recall === 0 ? 0 : (2 * precision * recall) / (precision + recall);
}

/** Kết quả chấm một câu trả lời gõ tay */
export interface TypedGrade {
  /** Điểm: 1 = đúng, 0.5 = gần đúng (sai chính tả nhẹ), 0 = sai */
  score: 0 | 0.5 | 1;
  /** Đáp án chấp nhận giống nhất với bài làm (để hiển thị) */
  best: string;
}

/**
 * Chấm câu trả lời gõ tay so với danh sách đáp án được chấp nhận.
 * @param single true nếu đáp án là MỘT từ (chấm nghiêm về chính tả)
 */
export function gradeTyped(answer: string, accepted: string[], single: boolean): TypedGrade {
  let best = accepted[0];
  let bestSim = -1;
  for (const cand of accepted) {
    const sim = charSimilarity(answer, cand);
    if (sim > bestSim) {
      bestSim = sim;
      best = cand;
    }
  }
  if (normalizeText(answer) === normalizeText(best)) return { score: 1, best };
  // Với câu dài cho phép sai một chút (gõ nhầm), với từ đơn phải đúng tuyệt đối
  if (!single && bestSim >= 0.93) return { score: 1, best };
  if (bestSim >= (single ? 0.8 : 0.75)) return { score: 0.5, best };
  return { score: 0, best };
}

/** Xáo trộn ngẫu nhiên một mảng (thuật toán Fisher–Yates), trả về mảng mới */
export function shuffle<T>(items: readonly T[]): T[] {
  const arr = [...items];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

/** Lấy ngẫu nhiên n phần tử không trùng lặp */
export function sample<T>(items: readonly T[], n: number): T[] {
  return shuffle(items).slice(0, n);
}

/** Đổi ngày thành khóa dạng YYYY-MM-DD theo giờ địa phương */
export function dayKey(date: Date = new Date()): string {
  const m = String(date.getMonth() + 1).padStart(2, '0');
  const d = String(date.getDate()).padStart(2, '0');
  return `${date.getFullYear()}-${m}-${d}`;
}

/** Số ngày giữa hai khóa ngày (b - a) */
export function diffDays(a: string, b: string): number {
  const ta = new Date(a + 'T00:00:00').getTime();
  const tb = new Date(b + 'T00:00:00').getTime();
  return Math.round((tb - ta) / 86_400_000);
}

/** Tạo mã băm số đơn giản từ chuỗi – dùng để chọn "từ của ngày" cố định theo ngày */
export function hashString(text: string): number {
  let h = 0;
  for (let i = 0; i < text.length; i++) h = (h * 31 + text.charCodeAt(i)) >>> 0;
  return h;
}

/** Định dạng phần trăm làm tròn */
export function pct(value: number, total: number): number {
  return total > 0 ? Math.round((value / total) * 100) : 0;
}

/** Đổi số giây thành chuỗi ngắn "2h 35m" / "12m" (dùng cho thời gian học) */
export function formatDuration(seconds: number): string {
  const m = Math.floor(seconds / 60);
  return m >= 60 ? `${Math.floor(m / 60)}h ${String(m % 60).padStart(2, '0')}m` : `${m}m`;
}
