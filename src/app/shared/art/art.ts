/**
 * art.ts – Danh mục hình minh họa của app (ảnh WebP đóng gói trong public/assets/art).
 *
 * Nguồn ảnh:
 *  - Bông (4 tư thế), minh họa trang chào, 6 ảnh chủ đề đời sống, banner Santorini, dải "khám phá thế giới":
 *    cắt từ bộ ảnh thiết kế gốc của dự án bằng tools/crop-art.py.
 *  - IELTS, TOEIC, rương báu (đóng/mở): xuất một lần từ bản vẽ minh họa cũ thành ảnh (bộ thiết kế chưa có).
 * Muốn đổi ảnh: thay file cùng tên trong public/assets/art (giữ gần đúng tỉ lệ ghi trong ART_SIZE).
 */

/** Các hình minh họa có sẵn */
export type ArtKind =
  | 'hero' | 'world' | 'travel-hero'
  | 'daily' | 'it' | 'travel' | 'study' | 'health' | 'food' | 'b1' | 'b2' | 'ielts' | 'toeic'
  | 'chest' | 'chest-open'
  | 'bong-hello' | 'bong-cheer' | 'bong-write' | 'bong-avatar';

/** Kích thước gốc (rộng, cao) của từng ảnh – dùng làm tỉ lệ khung mặc định để trang không bị nhảy khi ảnh đang tải */
export const ART_SIZE: Record<ArtKind, [number, number]> = {
  hero: [1080, 1387], world: [2400, 180], 'travel-hero': [1080, 608],
  daily: [384, 444], it: [384, 440], travel: [384, 447], study: [384, 470], health: [384, 432], food: [384, 463],
  b1: [800, 600], b2: [800, 600], ielts: [800, 600], toeic: [800, 600],
  chest: [360, 360], 'chest-open': [360, 360],
  'bong-hello': [320, 320], 'bong-cheer': [320, 320], 'bong-write': [320, 320], 'bong-avatar': [320, 320],
};

/** Đường dẫn ảnh của một hình minh họa */
export function artSrc(kind: ArtKind): string {
  return `assets/art/${kind}.webp`;
}
