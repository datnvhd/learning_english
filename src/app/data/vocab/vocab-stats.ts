/**
 * Thống kê nhanh số từ và số bài của từng chủ đề (SINH TỰ ĐỘNG bởi tools/build-vocab.mjs).
 * Dùng để hiển thị thẻ chủ đề mà không cần nạp toàn bộ dữ liệu từ vựng.
 */
export const VOCAB_STATS: Record<string, { words: number; lessons: number }> = {
  "b1": {
    "words": 300,
    "lessons": 25
  },
  "b2": {
    "words": 300,
    "lessons": 25
  },
  "daily": {
    "words": 384,
    "lessons": 32
  },
  "food": {
    "words": 421,
    "lessons": 33
  },
  "health": {
    "words": 400,
    "lessons": 32
  },
  "ielts": {
    "words": 314,
    "lessons": 26
  },
  "it": {
    "words": 417,
    "lessons": 33
  },
  "study": {
    "words": 365,
    "lessons": 29
  },
  "toeic": {
    "words": 322,
    "lessons": 27
  },
  "travel": {
    "words": 373,
    "lessons": 31
  }
};
