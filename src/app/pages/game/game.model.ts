/**
 * game.model.ts – Kiểu dữ liệu dùng chung cho các trò chơi mini.
 */

/** Kết quả một ván chơi, gửi từ component trò chơi lên GamePage */
export interface GameResult {
  /** Điểm của ván chơi (dùng để lưu kỷ lục) */
  score: number;
  /** Điểm kinh nghiệm nhận được */
  xp: number;
  /** Các từ trả lời đúng ngay lần đầu (được cộng vào trí nhớ) */
  correctIds: string[];
  /** Mô tả ngắn hiển thị ở màn hình kết thúc */
  label: string;
}

import { IconName } from '../../theme/icons';

export type GameType = 'match' | 'scramble' | 'speed' | 'picture';

/** Thông tin hiển thị của từng trò chơi */
export const GAME_INFO: Record<GameType, { title: string; icon: string; ico: IconName; desc: string; color: string }> = {
  match: { title: 'Ghép cặp', icon: '🃏', ico: 'cards', desc: 'Lật thẻ ghép từ tiếng Anh với nghĩa tiếng Việt', color: 'var(--grape-500)' },
  scramble: { title: 'Xếp chữ', icon: '🔤', ico: 'abc', desc: 'Sắp xếp các chữ cái thành từ đúng', color: 'var(--sun-500)' },
  picture: { title: 'Nghe và chọn ảnh', icon: '🖼️', ico: 'photo', desc: 'Nghe từ rồi chạm vào bức ảnh đúng', color: 'var(--leaf-500)' },
  speed: { title: 'Đố nhanh 60 giây', icon: '⚡', ico: 'bolt', desc: 'Trả lời thật nhanh, đúng liên tiếp để nhân điểm', color: 'var(--coral-500)' },
};
