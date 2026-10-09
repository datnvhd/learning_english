/**
 * audio-key.ts – Tạo mã file âm thanh thu sẵn cho một câu tiếng Anh.
 *
 * Mọi câu/từ tiếng Anh trong app đều được thu sẵn thành file mp3 (tools/build-audio.py) và lưu ở
 * public/assets/audio/<2 ký tự đầu>/<mã>.mp3 để nghe được khi KHÔNG có internet.
 * Mã = 2 hàm băm 32-bit của "<giọng>|<câu đã chuẩn hóa>" (16 ký tự hex). Hàm này được dùng chung
 * bởi app (SpeechService) và công cụ sinh danh sách (tools/build-audio-list.mjs) nên phải giữ ổn định.
 */

/** Giọng đọc: 'f' = nữ (mặc định, người nói A), 'm' = nam (người nói B trong hội thoại) */
export type AudioVoice = 'f' | 'm';

/** Chuẩn hóa câu trước khi băm: gộp khoảng trắng, bỏ khoảng trắng đầu/cuối, viết thường */
export function normalizeAudioText(text: string): string {
  return text.trim().replace(/\s+/g, ' ').toLowerCase();
}

/** Mã file âm thanh của một câu với một giọng */
export function audioKey(text: string, voice: AudioVoice = 'f'): string {
  const s = `${voice}|${normalizeAudioText(text)}`;
  let h1 = 0x811c9dc5;
  let h2 = 5381;
  for (let i = 0; i < s.length; i++) {
    const c = s.charCodeAt(i);
    h1 = Math.imul(h1 ^ c, 0x01000193);
    h2 = Math.imul(h2, 33) ^ c;
  }
  return (h1 >>> 0).toString(16).padStart(8, '0') + (h2 >>> 0).toString(16).padStart(8, '0');
}

/** Đường dẫn file mp3 của một mã */
export function audioPath(key: string): string {
  return `assets/audio/${key.slice(0, 2)}/${key}.mp3`;
}
