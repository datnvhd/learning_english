/**
 * photos.ts – Tra ảnh minh họa của một từ vựng (ảnh CC0 đóng gói trong public/assets/photos).
 * Dữ liệu sinh bởi tools/fetch-images.py vào data/photos.ts.
 */
import { PHOTOS, PhotoInfo } from '../data/photos';

/** Ảnh của từ (theo mã "<chủ đề>:<từ>"), hoặc undefined nếu chưa có */
export function photoOf(wordId: string): PhotoInfo | undefined {
  return PHOTOS[wordId];
}

/** Từ này có ảnh minh họa không */
export function hasPhoto(wordId: string): boolean {
  return wordId in PHOTOS;
}

/** Danh sách mã từ có ảnh (dùng cho trò chơi "Nghe và chọn ảnh") */
export function photoWordIds(topic?: string): string[] {
  const ids = Object.keys(PHOTOS);
  return topic && topic !== 'all' ? ids.filter((id) => id.startsWith(topic + ':')) : ids;
}
