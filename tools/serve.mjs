/**
 * ============================================================================
 *  serve.mjs – Máy chủ web tĩnh siêu nhỏ để chạy bản đã build (KHÔNG cần internet, không cần cài thêm gói)
 * ============================================================================
 *  Cách dùng:   npm run serve          (mặc định cổng 4300)
 *               node tools/serve.mjs 8080
 *  Sau khi chạy, mở trình duyệt tại  http://localhost:4300
 *
 *  Vì sao cần máy chủ? Trình duyệt không cho chạy ứng dụng Angular bằng cách mở file
 *  index.html trực tiếp (file://). Máy chủ này chạy ngay trên máy bạn nên vẫn dùng được
 *  khi mất mạng.
 */
import { createServer } from 'node:http';
import { readFile, stat } from 'node:fs/promises';
import { extname, join, normalize, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { exec } from 'node:child_process';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..', 'dist', 'english-adventure', 'browser');
const PORT = Number(process.argv[2]) || 4300;

/** Bảng loại nội dung (MIME) cho các định dạng file của ứng dụng */
const MIME = {
  '.html': 'text/html; charset=utf-8', '.js': 'text/javascript; charset=utf-8', '.mjs': 'text/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8', '.json': 'application/json; charset=utf-8', '.png': 'image/png', '.jpg': 'image/jpeg',
  '.svg': 'image/svg+xml', '.ico': 'image/x-icon', '.webp': 'image/webp', '.mp3': 'audio/mpeg', '.woff': 'font/woff', '.woff2': 'font/woff2', '.webmanifest': 'application/manifest+json',
};

createServer(async (req, res) => {
  try {
    // Chuẩn hóa đường dẫn để chặn kiểu tấn công "../" đọc file ngoài thư mục ứng dụng
    let path = normalize(decodeURIComponent(new URL(req.url, 'http://x').pathname)).replace(/^([/\\])+/, '');
    let file = join(ROOT, path);
    if (!file.startsWith(ROOT)) throw new Error('forbidden');
    let info = await stat(file).catch(() => null);
    if (info?.isDirectory()) {
      file = join(file, 'index.html');
      info = await stat(file).catch(() => null);
    }
    // Không thấy file: đường dẫn màn hình -> trả về trang chính; file tài nguyên (có đuôi) -> báo 404
    if (!info) {
      if (extname(path)) throw new Error('missing');
      file = join(ROOT, 'index.html');
    }
    const body = await readFile(file);
    res.writeHead(200, { 'Content-Type': MIME[extname(file)] ?? 'application/octet-stream', 'Cache-Control': 'no-cache' });
    res.end(body);
  } catch {
    res.writeHead(404).end('Not found');
  }
}).listen(PORT, () => {
  const url = `http://localhost:${PORT}`;
  console.log(`\n🌈 English Master (offline) đang chạy tại ${url}\n   (nhấn Ctrl+C để dừng)\n`);
  if (!process.argv.includes('--no-open')) {
    const cmd = process.platform === 'win32' ? `start "" ${url}` : process.platform === 'darwin' ? `open ${url}` : `xdg-open ${url}`;
    exec(cmd, () => {});
  }
});
