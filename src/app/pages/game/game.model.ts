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

export type GameType = 'match' | 'scramble' | 'speed' | 'picture' | 'guess' | 'sentence' | 'grammar';

/** Thứ tự hiển thị các trò chơi */
export const GAME_TYPES: GameType[] = ['guess', 'sentence', 'grammar', 'picture', 'match', 'scramble', 'speed'];

/** Điểm XP thưởng khi hoàn thành "Thử thách hôm nay" (mỗi ngày một lần) */
export const DAILY_BONUS_XP = 20;

/** Trò chơi của "Thử thách hôm nay": xoay vòng theo ngày để hôm nào cũng có trò khác */
export function dailyGame(date: Date = new Date()): GameType {
  const day = Math.floor((date.getTime() - date.getTimezoneOffset() * 60_000) / 86_400_000);
  return GAME_TYPES[day % GAME_TYPES.length];
}

/** Thông tin hiển thị của từng trò chơi */
export const GAME_INFO: Record<GameType, { title: string; icon: string; ico: IconName; desc: string; color: string; kind: 'Từ vựng' | 'Ngữ pháp' }> = {
  guess: { title: 'Đoán từ', icon: '🔠', ico: 'keyboard', desc: 'Đoán từ bí mật trong 6 lượt nhờ màu gợi ý của từng chữ', color: 'var(--leaf-600)', kind: 'Từ vựng' },
  sentence: { title: 'Xây câu', icon: '🧱', ico: 'arrows-shuffle', desc: 'Ghép các từ bị xáo trộn thành câu đúng theo nghĩa tiếng Việt', color: 'var(--sky-500)', kind: 'Ngữ pháp' },
  grammar: { title: 'Thử thách ngữ pháp', icon: '❤️', ico: 'heart', desc: 'Điền từ đúng vào chỗ trống – bạn có 3 mạng, sai là mất một', color: 'var(--blossom-600)', kind: 'Ngữ pháp' },
  match: { title: 'Ghép cặp', icon: '🃏', ico: 'cards', desc: 'Lật thẻ ghép từ tiếng Anh với nghĩa tiếng Việt', color: 'var(--grape-500)', kind: 'Từ vựng' },
  scramble: { title: 'Xếp chữ', icon: '🔤', ico: 'abc', desc: 'Sắp xếp các chữ cái thành từ đúng', color: 'var(--sun-500)', kind: 'Từ vựng' },
  picture: { title: 'Nghe và chọn ảnh', icon: '🖼️', ico: 'photo', desc: 'Nghe từ rồi chạm vào bức ảnh đúng', color: 'var(--leaf-500)', kind: 'Từ vựng' },
  speed: { title: 'Đố nhanh 60 giây', icon: '⚡', ico: 'bolt', desc: 'Trả lời thật nhanh, đúng liên tiếp để nhân điểm', color: 'var(--coral-500)', kind: 'Từ vựng' },
};
