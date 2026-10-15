/**
 * copy-wasm.mjs – Chép các file WebAssembly cần cho phần chấm điểm offline từ node_modules vào public/assets
 * để đóng gói cùng app (và nằm trong gói dữ liệu offline). Chạy tự động trước khi build / start.
 *  - Harper (bộ kiểm tra ngữ pháp, Apache-2.0)        -> public/assets/harper/
 *  - ONNX Runtime Web (chạy mô hình âm vị, MIT)        -> public/assets/ort/
 */
import { copyFileSync, existsSync, mkdirSync, statSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const JOBS = [
  ['node_modules/harper.js/dist', 'public/assets/harper', ['harper_wasm_slim_bg.wasm']],
  ['node_modules/onnxruntime-web/dist', 'public/assets/ort', ['ort-wasm-simd-threaded.asyncify.wasm', 'ort-wasm-simd-threaded.asyncify.mjs']],
];
for (const [from, to, files] of JOBS) {
  for (const f of files) {
    const src = join(ROOT, from, f);
    const dst = join(ROOT, to, f);
    if (!existsSync(src)) { console.warn(`Không thấy ${from}/${f} – bỏ qua (chạy npm install).`); continue; }
    if (existsSync(dst) && statSync(dst).size === statSync(src).size) continue;
    mkdirSync(join(ROOT, to), { recursive: true });
    copyFileSync(src, dst);
    console.log(`Đã chép ${f} -> ${to}`);
  }
}
