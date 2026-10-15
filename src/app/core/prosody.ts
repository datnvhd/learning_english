/**
 * ============================================================================
 *  prosody.ts – Đo NGỮ ĐIỆU và TRỌNG ÂM từ bản ghi âm (xử lý tín hiệu, không dùng mô hình AI)
 * ============================================================================
 *  - Cao độ (F0): thuật toán YIN rút gọn trên các khung 40 ms (bước 10 ms), 70–400 Hz.
 *  - Độ biến thiên cao độ (bán cung): đọc đều đều (monotone) → khoảng cao độ hẹp, ít lên xuống.
 *  - Trọng âm câu: từ nội dung (danh từ, động từ...) phải to/cao hơn từ chức năng (the, to, of...).
 *  - Ngữ điệu cuối câu: câu trần thuật xuống giọng; câu hỏi Yes/No lên giọng.
 *  Dùng thời điểm từng từ do bộ nhận dạng giọng nói trả về để gắn cao độ / độ lớn với từng từ.
 */

export interface TimedWord {
  word: string;
  start: number;
  end: number;
}

export interface ProsodyResult {
  /** Điểm ngữ điệu tổng 0..1 */
  score: number;
  /** Khoảng cao độ (bán cung, từ phân vị 10 đến 90) */
  range: number;
  /** Độ lệch chuẩn cao độ (bán cung) */
  variability: number;
  /** Chênh lệch độ lớn giữa từ nội dung và từ chức năng (dB) */
  stress: number;
  /** Số câu có ngữ điệu cuối câu đúng / số câu xét */
  contours: { ok: number; total: number };
  /** Nhận xét (tiếng Việt) */
  notes: string[];
}

const FUNCTION = new Set(('a an the to of at for from in on and or but as than that this these those your you our their his her its my ' +
  'can could would should will do does did have has had was were are is am be been him them us me we they he she it i there some any so if by with').split(' '));
const clamp = (v: number) => Math.max(0, Math.min(1, v));

/** Dò cao độ từng khung 10 ms (0 = không có tiếng / vô thanh) */
export function pitchTrack(pcm: Float32Array, rate = 16000): { f0: Float32Array; rms: Float32Array; hop: number } {
  const win = Math.round(rate * 0.04);
  const hop = Math.round(rate * 0.01);
  const tauMin = Math.floor(rate / 400);
  const tauMax = Math.ceil(rate / 70);
  const frames = Math.max(0, Math.floor((pcm.length - win - tauMax) / hop));
  const f0 = new Float32Array(frames);
  const rms = new Float32Array(frames);
  let peak = 0;
  for (let f = 0; f < frames; f++) {
    let e = 0;
    const o = f * hop;
    for (let i = 0; i < win; i++) e += pcm[o + i] * pcm[o + i];
    rms[f] = Math.sqrt(e / win);
    if (rms[f] > peak) peak = rms[f];
  }
  const d = new Float32Array(tauMax + 1);
  for (let f = 0; f < frames; f++) {
    if (rms[f] < peak * 0.08) continue; // im lặng
    const o = f * hop;
    // Hàm hiệu YIN và chuẩn hóa trung bình lũy kế
    let run = 0;
    d[0] = 1;
    for (let tau = 1; tau <= tauMax; tau++) {
      let sum = 0;
      for (let i = 0; i < win; i++) {
        const x = pcm[o + i] - pcm[o + i + tau];
        sum += x * x;
      }
      run += sum;
      d[tau] = run ? (sum * tau) / run : 1;
    }
    for (let tau = tauMin; tau < tauMax; tau++) {
      if (d[tau] < 0.15 && d[tau] <= d[tau + 1]) {
        // Nội suy parabol để chính xác hơn
        const a = d[tau - 1], b = d[tau], c = d[tau + 1];
        const shift = (a - c) / (2 * (a - 2 * b + c) || 1);
        f0[f] = rate / (tau + (Math.abs(shift) < 1 ? shift : 0));
        break;
      }
    }
  }
  return { f0, rms, hop: hop / rate };
}

/** Phân vị */
function quantile(xs: number[], q: number): number {
  if (!xs.length) return 0;
  const s = [...xs].sort((a, b) => a - b);
  return s[Math.min(s.length - 1, Math.max(0, Math.round(q * (s.length - 1))))];
}

/**
 * Phân tích ngữ điệu.
 * @param words các từ kèm thời điểm (từ bộ nhận dạng)
 * @param sentences danh sách câu: từ cuối câu và có phải câu hỏi Yes/No (lên giọng) không
 */
export function analyzeProsody(pcm: Float32Array, words: TimedWord[], sentences: { last: string; rise: boolean }[] = [], rate = 16000): ProsodyResult {
  // Hạ xuống 8 kHz (trung bình từng cặp mẫu) cho nhanh gấp 4 lần – vẫn đủ để dò cao độ giọng nói (≤ 400 Hz)
  if (rate >= 16000) {
    const half = new Float32Array(pcm.length >> 1);
    for (let i = 0; i < half.length; i++) half[i] = (pcm[2 * i] + pcm[2 * i + 1]) / 2;
    pcm = half;
    rate /= 2;
  }
  const { f0, rms, hop } = pitchTrack(pcm, rate);
  const voiced: number[] = [];
  for (let i = 0; i < f0.length; i++) if (f0[i] > 0) voiced.push(f0[i]);
  const notes: string[] = [];
  if (voiced.length < 30) return { score: 0, range: 0, variability: 0, stress: 0, contours: { ok: 0, total: 0 }, notes: ['Bản ghi quá ngắn hoặc quá nhỏ để đo ngữ điệu.'] };

  // Đổi sang bán cung so với trung vị, lọc trung vị 5 khung để bỏ nhiễu nhảy quãng tám
  const med = quantile(voiced, 0.5);
  const st = Array.from(f0, (v) => (v > 0 ? 12 * Math.log2(v / med) : NaN));
  const smooth = st.map((v, i) => {
    if (Number.isNaN(v)) return NaN;
    const win = st.slice(Math.max(0, i - 2), i + 3).filter((x) => !Number.isNaN(x));
    return quantile(win, 0.5);
  });
  const vs = smooth.filter((v) => !Number.isNaN(v) && Math.abs(v) < 14);
  const range = quantile(vs, 0.9) - quantile(vs, 0.1);
  const mean = vs.reduce((a, b) => a + b, 0) / vs.length;
  const variability = Math.sqrt(vs.reduce((a, b) => a + (b - mean) ** 2, 0) / vs.length);

  // Trọng âm câu: độ lớn trung bình (dB) của từ nội dung so với từ chức năng
  const frameOf = (t: number) => Math.max(0, Math.min(rms.length - 1, Math.round(t / hop)));
  const loud = (w: TimedWord) => {
    let s = 0;
    let n = 0;
    for (let f = frameOf(w.start); f <= frameOf(w.end); f++) { s += rms[f]; n++; }
    return n ? 20 * Math.log10(s / n + 1e-6) : -120;
  };
  const content = words.filter((w) => !FUNCTION.has(w.word.toLowerCase()) && w.end - w.start > 0.08).map(loud);
  const func = words.filter((w) => FUNCTION.has(w.word.toLowerCase()) && w.end - w.start > 0.04).map(loud);
  const stress = content.length >= 3 && func.length >= 3
    ? content.reduce((a, b) => a + b, 0) / content.length - func.reduce((a, b) => a + b, 0) / func.length : 0;

  // Ngữ điệu cuối câu: độ dốc cao độ ở 0,35 giây cuối của từ cuối câu
  let ok = 0;
  let total = 0;
  let wi = 0;
  for (const sent of sentences) {
    const idx = words.findIndex((w, k) => k >= wi && w.word.toLowerCase() === sent.last.toLowerCase());
    if (idx < 0) continue;
    wi = idx + 1;
    const w = words[idx];
    const from = frameOf(Math.max(w.start, w.end - 0.35));
    const to = frameOf(w.end);
    const pts: [number, number][] = [];
    for (let f = from; f <= to; f++) if (!Number.isNaN(smooth[f])) pts.push([f, smooth[f]]);
    if (pts.length < 4) continue;
    const half = Math.floor(pts.length / 2);
    const first = pts.slice(0, half).reduce((a, p) => a + p[1], 0) / half;
    const last = pts.slice(half).reduce((a, p) => a + p[1], 0) / (pts.length - half);
    const slope = last - first; // bán cung
    total++;
    if (sent.rise ? slope > 0.5 : slope < 0.3) ok++;
  }

  const rangeS = clamp((range - 2) / 5);
  const varS = clamp((variability - 1) / 2.5);
  const stressS = content.length >= 3 && func.length >= 3 ? clamp(stress / 2.5) : 0.6;
  const contourS = total ? ok / total : 0.7;
  const score = clamp(rangeS * 0.35 + varS * 0.25 + stressS * 0.25 + contourS * 0.15);

  if (range < 3) notes.push(`Giọng khá đều đều (khoảng cao độ ${range.toFixed(1)} bán cung) – hãy lên xuống giọng nhiều hơn, nhấn vào từ quan trọng.`);
  if (content.length >= 3 && func.length >= 3 && stress < 0.3) notes.push('Chưa nhấn trọng âm câu: hãy đọc to và rõ hơn các từ mang nghĩa (danh từ, động từ, tính từ), đọc lướt the / to / of.');
  if (total && ok < total) notes.push(`Ngữ điệu cuối câu chưa đúng ở ${total - ok}/${total} câu: câu kể xuống giọng ở cuối, câu hỏi Yes/No lên giọng.`);
  if (!notes.length) notes.push('Ngữ điệu tự nhiên, có lên xuống giọng và nhấn trọng âm rõ.');
  return { score, range, variability, stress, contours: { ok, total }, notes };
}

/** Lấy danh sách câu (từ cuối câu, có phải câu hỏi Yes/No) từ đoạn văn mẫu */
export function sentenceEnds(text: string): { last: string; rise: boolean }[] {
  return (text.match(/[^.!?]+[.!?]/g) ?? []).map((s) => {
    const words = s.trim().replace(/[.!?,"']+$/g, '').split(/\s+/);
    const rise = s.trim().endsWith('?') && /^(do|does|did|is|are|was|were|can|could|will|would|have|has|should|may|shall)\b/i.test(s.trim());
    return { last: (words[words.length - 1] ?? '').toLowerCase().replace(/[^a-z']/g, ''), rise };
  }).filter((s) => s.last);
}
