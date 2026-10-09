/**
 * ============================================================================
 *  vocab.service.ts – Nạp và cung cấp dữ liệu từ vựng đã đóng gói trong mã nguồn
 * ============================================================================
 *  Dữ liệu từ vựng nằm trong src/app/data/vocab/<chủ đề>.ts và được Angular đóng gói
 *  thành các "chunk" JavaScript riêng (nạp lười – lazy load bằng import()).
 *  => Không cần internet: mọi chunk đều nằm cùng ứng dụng.
 */
import { Injectable } from '@angular/core';
import { TopicId } from '../models/content.model';
import { CefrLevel, Lesson, TopicVocab, TopicVocabData, Word } from '../models/vocab.model';
import { TOPIC_IDS } from '../data/topics';

/** Bảng ánh xạ chủ đề -> hàm nạp động file dữ liệu tương ứng */
const LOADERS: Record<TopicId, () => Promise<{ VOCAB: TopicVocabData }>> = {
  daily: () => import('../data/vocab/daily'),
  it: () => import('../data/vocab/it'),
  travel: () => import('../data/vocab/travel'),
  study: () => import('../data/vocab/study'),
  health: () => import('../data/vocab/health'),
  food: () => import('../data/vocab/food'),
  b1: () => import('../data/vocab/b1'),
  b2: () => import('../data/vocab/b2'),
  ielts: () => import('../data/vocab/ielts'),
  toeic: () => import('../data/vocab/toeic'),
};

/** Tạo mã định danh ổn định cho một từ */
export function wordId(topicId: TopicId, word: string): string {
  return `${topicId}:${word.toLowerCase()}`;
}

@Injectable({ providedIn: 'root' })
export class VocabService {
  /** Bộ nhớ đệm: chủ đề nào đã nạp thì không nạp lại */
  private readonly cache = new Map<TopicId, Promise<TopicVocab>>();

  /** Nạp từ vựng của một chủ đề (trả về ngay nếu đã có trong cache) */
  load(topicId: TopicId): Promise<TopicVocab> {
    let p = this.cache.get(topicId);
    if (!p) {
      p = LOADERS[topicId]().then((m) => this.unpack(topicId, m.VOCAB));
      this.cache.set(topicId, p);
    }
    return p;
  }

  /** Nạp nhiều chủ đề cùng lúc; 'all' = tất cả các chủ đề */
  loadMany(topics: TopicId[] | 'all'): Promise<TopicVocab[]> {
    const ids = topics === 'all' ? TOPIC_IDS : topics;
    return Promise.all(ids.map((id) => this.load(id)));
  }

  /** Tìm các từ theo danh sách mã (dùng cho bài ôn tập) */
  async findWords(ids: string[]): Promise<Word[]> {
    const wanted = new Set(ids);
    const topics = new Set(ids.map((id) => id.split(':')[0] as TopicId));
    const loaded = await this.loadMany([...topics]);
    return loaded.flatMap((t) => t.words).filter((w) => wanted.has(w.id));
  }

  /** Chuyển dữ liệu "nén" (tuple) thành đối tượng Word/Lesson dễ dùng */
  private unpack(topicId: TopicId, data: TopicVocabData): TopicVocab {
    const lessons: Lesson[] = data.lessons.map((l, index) => ({
      index,
      icon: l.icon,
      vi: l.vi,
      en: l.en,
      words: l.words.map(([word, pos, ipa, vi, ex, exVi, level]) => ({
        id: wordId(topicId, word),
        topicId,
        lessonIndex: index,
        word,
        pos,
        ipa,
        vi,
        ex,
        exVi,
        level: level as CefrLevel,
      })),
    }));
    return { topicId, lessons, words: lessons.flatMap((l) => l.words) };
  }
}
