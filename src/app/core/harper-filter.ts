/**
 * harper-filter.ts – Chọn lọc lỗi do Harper (bộ kiểm tra ngữ pháp mã nguồn mở, chạy offline) tìm ra.
 *
 * Harper có nhiều luật nhưng một số nhóm hay báo nhầm với bài của người học (tên riêng Việt Nam bị coi là sai
 * chính tả, từ Anh-Anh, gợi ý văn phong...). Ở đây chỉ giữ các nhóm lỗi ngữ pháp thật và loại các mẫu báo nhầm
 * đã đo trên hơn 10.000 câu đúng của app (xem harper.spec.ts). Chính tả vẫn do writing-check.ts đảm nhận.
 */
import type { WritingIssue } from './writing-check';

/** Một lỗi Harper ở dạng dữ liệu thuần (không phụ thuộc thư viện) */
export interface RawLint {
  kind: string;
  text: string;
  start: number;
  end: number;
  suggestions: string[];
  message: string;
}

/** Các nhóm lỗi Harper được dùng và giải thích tiếng Việt */
const KINDS: Record<string, string> = {
  Agreement: 'Động từ / từ chưa hòa hợp với chủ ngữ.',
  Grammar: 'Lỗi ngữ pháp.',
  WordChoice: 'Dùng sai từ.',
  BoundaryError: 'Viết dính hoặc tách từ chưa đúng.',
  Redundancy: 'Thừa từ.',
  WordOrder: 'Sai trật tự từ.',
  Eggcorn: 'Nhầm với từ gần âm.',
  Malapropism: 'Nhầm với từ gần âm.',
};

/** Giữ các lỗi Harper đáng tin và đổi sang định dạng lỗi của app */
export function filterHarper(text: string, lints: RawLint[]): WritingIssue[] {
  const out: WritingIssue[] = [];
  for (const l of lints) {
    const note = KINDS[l.kind];
    const fix = l.suggestions.find((x) => x.trim() !== '');
    if (!note || fix === undefined) continue;
    const t = l.text.trim();
    const low = t.toLowerCase();
    const before = text.slice(Math.max(0, l.start - 20), l.start).toLowerCase();
    const after = text.slice(l.end, l.end + 20).toLowerCase();
    // it's / its: Harper hay nhầm "It's Julia" (= It is)
    if (/^it'?s$/.test(low)) continue;
    // there / their trong câu hỏi "Is there...?", "Are there...?"
    if (low === 'there' && (/\b(is|are|was|were|isn't|aren't)\s*$/.test(before) || /^\s*(is|are|was|were|'s)\b/.test(after))) continue;
    // Ghép từ ("sun rises" -> "sunrises", "key words" -> "keywords") là văn phong, không phải lỗi
    if (l.kind === 'WordChoice' && fix.replace(/[\s-]/g, '') === t.replace(/[\s-]/g, '')) continue;
    if (l.kind === 'WordChoice' && !/\bof\b/i.test(t) && fix.split(/\s+/).length === 1 && t.split(/\s+/).length === 1 && fix.length <= 3) continue;
    // Lặp số đọc điện thoại, gợi ý chỉ xóa chữ hoa / số
    if (/\d/.test(t) || /^[A-Z][a-z]+ \d/.test(t)) continue;
    if (l.kind === 'Redundancy' && /^and also$/i.test(t)) continue;
    // "fed" -> "feds": động từ quá khứ bị nhận nhầm là nguyên mẫu
    if (l.kind === 'Agreement' && (fix === t + 's' || fix === t + 'es') && (!/\b(he|she|it|this|that)\s+$/i.test(before) || /(ed|^fed|^led|^read|^put|^cut|^set|^hit|^let|^met|^left|^lent|^sent|^spent|^kept|^felt)$/i.test(t))) continue;
    // Gợi ý chèn thêm từ (" to"), đổi you -> your, chữ cái đơn, tên riêng -> tên khác: hay báo nhầm
    if (/^\s/.test(l.suggestions.find((x) => x.trim() !== '') ?? '') || /^you$/i.test(t) || t.length <= 1 || (/^[A-Z][a-z]+$/.test(t) && /^[A-Z]/.test(fix) && t.toLowerCase() !== fix.toLowerCase() && !/^(their|there|they're|your|you're|its|it's|alot)$/i.test(t))) continue;
    // "more honest" không phải so sánh kép (chỉ bắt "more + tính từ đã thêm -er")
    if (/^more\s+\w+$/i.test(t) && !/er$/i.test(t)) continue;
    out.push({ kind: 'grammar', text: t, fix, note: `${note} (${l.message.replace(/`/g, '"').slice(0, 120)})` });
  }
  return out;
}

/** Gộp lỗi của nhiều bộ kiểm tra, bỏ các lỗi trùng/chồng lên nhau (ưu tiên bộ luật của app) */
export function mergeIssues(primary: WritingIssue[], extra: WritingIssue[]): WritingIssue[] {
  const out = [...primary];
  for (const e of extra) {
    const el = e.text.toLowerCase();
    if (out.some((p) => p.text.toLowerCase().includes(el) || el.includes(p.text.toLowerCase()))) continue;
    out.push(e);
  }
  return out;
}
