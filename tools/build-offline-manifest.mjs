/**
 * ============================================================================
 *  build-offline-manifest.mjs – Thống kê gói dữ liệu offline của app
 * ============================================================================
 *  Quét public/assets (ảnh minh họa, ảnh từ vựng, giọng nói, âm thanh tiếng Anh thu sẵn) và sinh
 *  src/app/data/offline-pack.ts gồm số file + dung lượng từng nhóm và danh sách file (trừ nhóm audio,
 *  vốn đã có trong audio-index.ts). Trang Cài đặt › Quản lý dữ liệu dùng file này để hiển thị dung lượng
 *  và để nút "Tải toàn bộ dữ liệu" biết cần lưu những file nào vào bộ nhớ của trình duyệt.
 *  Tự chạy trước mỗi lần build (npm run build); chạy tay: npm run build:offline
 */
import { readdirSync, statSync, writeFileSync } from 'node:fs';
import { join, dirname, relative, sep } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const ASSETS = join(ROOT, 'public', 'assets');

/** Nhãn hiển thị của từng thư mục trong public/assets */
const GROUPS = {
  audio: 'Âm thanh tiếng Anh (từ vựng, câu ví dụ, bài nghe)',
  photos: 'Ảnh từ vựng & ảnh đề thi',
  art: 'Hình minh họa',
  voice: 'Giọng hướng dẫn tiếng Việt',
};

function walk(dir, out = []) {
  for (const f of readdirSync(dir)) {
    const p = join(dir, f);
    if (statSync(p).isDirectory()) walk(p, out);
    else out.push(p);
  }
  return out;
}

const pack = [];
const files = [];
for (const [id, label] of Object.entries(GROUPS)) {
  let list = [];
  try { list = walk(join(ASSETS, id)); } catch { /* nhóm chưa có dữ liệu */ }
  const bytes = list.reduce((n, p) => n + statSync(p).size, 0);
  pack.push({ id, label, files: list.length, bytes });
  if (id !== 'audio') for (const p of list) files.push('assets/' + relative(ASSETS, p).split(sep).join('/'));
}

const ts = `/**
 * Gói dữ liệu offline của app (SINH TỰ ĐỘNG bởi tools/build-offline-manifest.mjs – không sửa tay).
 */
export interface OfflineGroup {
  id: string;
  label: string;
  files: number;
  bytes: number;
}

export const OFFLINE_PACK: OfflineGroup[] = ${JSON.stringify(pack, null, 2)};

/** Các file tài nguyên ngoài nhóm audio (file audio suy ra từ AUDIO_KEYS trong audio-index.ts) */
export const OFFLINE_FILES: string[] = ${JSON.stringify(files)};
`;
writeFileSync(join(ROOT, 'src', 'app', 'data', 'offline-pack.ts'), ts, 'utf8');
const total = pack.reduce((n, g) => n + g.bytes, 0);
console.log(`Gói offline: ${pack.map((g) => `${g.id} ${g.files} file`).join(', ')} – tổng ${(total / 1048576).toFixed(1)} MB`);
