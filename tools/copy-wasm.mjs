/**
 * copy-wasm.mjs – Chép các file WebAssembly cần cho phần chấm điểm offline từ node_modules vào public/assets
 * để đóng gói cùng app (và nằm trong gói dữ liệu offline). Chạy tự động trước khi build / start.
 *  - Harper (bộ kiểm tra ngữ pháp, Apache-2.0)        -> public/assets/harper/
 *  - ONNX Runtime Web (chạy mô hình âm vị, MIT)        -> public/assets/ort/
 *    File .wasm của ONNX Runtime (~27 MB) vượt giới hạn 25 MB/tệp của Cloudflare Pages nên được lưu dạng nén
 *    gzip (.wasm.gz, ~6 MB); core/phoneme.service.ts giải nén ngay trong trình duyệt.
 */
import { copyFileSync, existsSync, mkdirSync, readFileSync, rmSync, statSync, writeFileSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { gzipSync } from 'node:zlib';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
/** [thư mục nguồn, thư mục đích, các file, nén gzip?] */
const JOBS = [
  ['node_modules/harper.js/dist', 'public/assets/harper', ['harper_wasm_slim_bg.wasm'], false],
  ['node_modules/onnxruntime-web/dist', 'public/assets/ort', ['ort-wasm-simd-threaded.asyncify.mjs'], false],
  ['node_modules/onnxruntime-web/dist', 'public/assets/ort', ['ort-wasm-simd-threaded.asyncify.wasm'], true],
];
for (const [from, to, files, gzip] of JOBS) {
  for (const f of files) {
    const src = join(ROOT, from, f);
    const dst = join(ROOT, to, gzip ? f + '.gz' : f);
    if (!existsSync(src)) { console.warn(`Không thấy ${from}/${f} – bỏ qua (chạy npm install).`); continue; }
    mkdirSync(join(ROOT, to), { recursive: true });
    if (gzip) {
      rmSync(join(ROOT, to, f), { force: true }); // bản chưa nén của lần build cũ
      // Ghi kích thước gốc (ngoài thư mục public) để chỉ nén lại khi thư viện đổi phiên bản
      mkdirSync(join(ROOT, 'node_modules/.cache'), { recursive: true });
      const stamp = join(ROOT, 'node_modules/.cache', f + '.size');
      const size = String(statSync(src).size);
      if (existsSync(dst) && existsSync(stamp) && readFileSync(stamp, 'utf8') === size) continue;
      writeFileSync(dst, gzipSync(readFileSync(src), { level: 9 }));
      writeFileSync(stamp, size);
      console.log(`Đã nén ${f} -> ${to}/${f}.gz (${(statSync(dst).size / 1e6).toFixed(1)} MB)`);
      continue;
    }
    if (existsSync(dst) && statSync(dst).size === statSync(src).size) continue;
    copyFileSync(src, dst);
    console.log(`Đã chép ${f} -> ${to}`);
  }
}
