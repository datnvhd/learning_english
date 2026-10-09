/**
 * search.page.ts – Tra từ nhanh trên TOÀN BỘ kho từ vựng (tiếng Anh hoặc tiếng Việt, không cần dấu).
 *
 *  - Gõ để tìm ngay (không phân biệt hoa thường, bỏ dấu tiếng Việt khi so khớp).
 *  - Lọc theo chủ đề hoặc chỉ những từ có ảnh minh họa.
 *  - Chạm vào kết quả để mở bảng chi tiết (ảnh, phát âm, ví dụ, luyện nói, lưu từ).
 *  - Khi chưa gõ gì: hiện các từ đã lưu (sổ tay) và từ vừa tra gần đây.
 */
import { ChangeDetectionStrategy, Component, computed, inject, resource, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { photoOf } from '../../core/photos';
import { ProgressService } from '../../core/progress.service';
import { SpeechService } from '../../core/speech.service';
import { UxService } from '../../core/ux.service';
import { VocabService } from '../../core/vocab.service';
import { TOPICS, TOPIC_BY_ID } from '../../data/topics';
import { TopicId } from '../../models/content.model';
import { Word } from '../../models/vocab.model';
import { PageHeaderComponent } from '../../shared/page-header.component';
import { IconComponent } from '../../theme/icon.component';

/** Bỏ dấu tiếng Việt + chữ thường để so khớp dễ dàng */
function fold(text: string): string {
  return text.normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/đ/g, 'd').replace(/Đ/g, 'd').toLowerCase();
}

const RECENT_KEY = 'english-adventure:recent-search';

@Component({
  selector: 'app-search',
  imports: [FormsModule, PageHeaderComponent, IconComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <main class="page stack">
      <app-page-header title="Tra từ" ico="search" back="/vocab" />

      <label class="searchbox">
        <app-icon name="search" />
        <input type="search" placeholder="Gõ từ tiếng Anh hoặc nghĩa tiếng Việt..." autocomplete="off" autofocus
               [ngModel]="query()" (ngModelChange)="query.set($event)" aria-label="Từ cần tra" />
      </label>

      <div class="chips">
        <button type="button" class="chip" [class.active]="topic() === 'all'" (click)="topic.set('all')">Tất cả</button>
        <button type="button" class="chip" [class.active]="onlyPhoto()" (click)="onlyPhoto.set(!onlyPhoto())"><app-icon name="photo" /> Có ảnh</button>
        @for (t of topics; track t.id) {
          <button type="button" class="chip" [class.active]="topic() === t.id" (click)="topic.set(t.id)">{{ t.emoji }} {{ t.title }}</button>
        }
      </div>

      @if (all.isLoading()) {
        <p class="muted center">Đang mở kho từ vựng...</p>
      } @else if (query().trim()) {
        <p class="muted count">{{ results().length >= 60 ? '60+' : results().length }} kết quả</p>
        <ul class="list">
          @for (w of results(); track w.id) {
            <li>
              <button type="button" class="item card interactive" (click)="open(w)">
                @if (thumb(w.id); as src) {
                  <img [src]="src" alt="" loading="lazy" />
                } @else {
                  <span class="emo">{{ emoji(w) }}</span>
                }
                <span class="tx">
                  <b>{{ w.word }} <small class="ipa">/{{ w.ipa }}/</small></b>
                  <span class="muted">{{ w.vi }}</span>
                </span>
                <span class="tp">{{ topicName(w) }}</span>
              </button>
            </li>
          } @empty {
            <li class="empty card center">
              <app-icon name="mood-smile" class="big" />
              <p>Chưa tìm thấy “{{ query() }}”. Thử từ khác nhé!</p>
            </li>
          }
        </ul>
      } @else {
        @if (recent().length) {
          <h2 class="section-title"><app-icon name="clock" /> Tra gần đây</h2>
          <div class="chips wrap">
            @for (r of recent(); track r) {
              <button type="button" class="chip" (click)="query.set(r)">{{ r }}</button>
            }
          </div>
        }
        <h2 class="section-title"><app-icon name="bookmark" /> Sổ tay từ đã lưu ({{ saved().length }})</h2>
        @if (saved().length) {
          <ul class="list">
            @for (w of saved(); track w.id) {
              <li>
                <button type="button" class="item card interactive" (click)="open(w)">
                  @if (thumb(w.id); as src) { <img [src]="src" alt="" loading="lazy" /> } @else { <span class="emo">{{ emoji(w) }}</span> }
                  <span class="tx"><b>{{ w.word }}</b><span class="muted">{{ w.vi }}</span></span>
                  <span class="tp">{{ topicName(w) }}</span>
                </button>
              </li>
            }
          </ul>
        } @else {
          <p class="muted card center">Bấm <app-icon name="bookmark" /> ở một từ bất kỳ để lưu vào sổ tay ôn tập.</p>
        }
      }
    </main>
  `,
  styles: `
    .searchbox {
      display: flex;
      align-items: center;
      gap: var(--space-2);
      background: var(--surface);
      border: 2px solid var(--line);
      border-radius: var(--radius-pill);
      padding: 0 var(--space-4);
      min-height: var(--touch-primary);
      box-shadow: var(--shadow-sm);
      color: var(--primary);
    }
    .searchbox:focus-within {
      border-color: var(--primary);
    }
    .searchbox input {
      flex: 1;
      border: 0;
      outline: none;
      background: transparent;
      font-size: var(--fs-lg);
    }
    .chips.wrap {
      flex-wrap: wrap;
    }
    .count {
      font-size: var(--fs-sm);
    }
    .list {
      list-style: none;
      margin: 0;
      padding: 0;
      display: flex;
      flex-direction: column;
      gap: var(--space-2);
    }
    .item {
      width: 100%;
      display: flex;
      align-items: center;
      gap: var(--space-3);
      padding: var(--space-2) var(--space-3);
      text-align: left;
    }
    .item img,
    .emo {
      width: 64px;
      height: 48px;
      border-radius: var(--radius-sm);
      object-fit: cover;
      flex: none;
      background: var(--sky-100);
      display: grid;
      place-items: center;
      font-size: 1.6rem;
    }
    .tx {
      flex: 1;
      display: flex;
      flex-direction: column;
      min-width: 0;
    }
    .tx b {
      color: var(--primary-dark);
      font-size: var(--fs-lg);
    }
    .ipa {
      color: var(--ink-mute);
      font-weight: 700;
      font-size: var(--fs-xs);
    }
    .tp {
      font-size: var(--fs-xs);
      color: var(--ink-soft);
      background: var(--surface-muted);
      padding: 2px 8px;
      border-radius: var(--radius-pill);
      white-space: nowrap;
    }
    .empty {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: var(--space-2);
    }
    .big {
      width: 48px;
      height: 48px;
      color: var(--accent-dark);
    }
  `,
})
export class SearchPage {
  private readonly vocab = inject(VocabService);
  private readonly ux = inject(UxService);
  private readonly speech = inject(SpeechService);
  private readonly progress = inject(ProgressService);

  protected readonly topics = TOPICS;
  private readonly route = inject(ActivatedRoute);

  /** Từ khóa: lấy sẵn từ ô tìm kiếm trên topbar (?q=...) */
  protected readonly query = signal(this.route.snapshot.queryParamMap.get('q') ?? '');
  protected readonly topic = signal<TopicId | 'all'>('all');
  protected readonly onlyPhoto = signal(false);
  protected readonly recent = signal<string[]>(this.loadRecent());

  /** Nạp toàn bộ từ vựng một lần, kèm chuỗi đã "gập dấu" để tìm nhanh */
  protected readonly all = resource({
    loader: async () => (await this.vocab.loadMany('all')).flatMap((t) => t.words).map((w) => ({ w, key: fold(`${w.word} ${w.vi}`), en: w.word.toLowerCase() })),
  });

  /** Kết quả: ưu tiên từ tiếng Anh bắt đầu bằng chuỗi tìm, tối đa 60 kết quả */
  protected readonly results = computed(() => {
    const q = fold(this.query().trim());
    const list = this.all.value() ?? [];
    if (!q) return [];
    const topic = this.topic();
    const matches = list.filter((x) =>
      x.key.includes(q) && (topic === 'all' || x.w.topicId === topic) && (!this.onlyPhoto() || !!photoOf(x.w.id)));
    matches.sort((a, b) => Number(!a.en.startsWith(q)) - Number(!b.en.startsWith(q)) || a.en.length - b.en.length);
    return matches.slice(0, 60).map((x) => x.w);
  });

  /** Các từ đã lưu (sổ tay) */
  protected readonly saved = computed(() => {
    this.progress.state();
    const ids = new Set(this.progress.bookmarkedIds());
    return (this.all.value() ?? []).map((x) => x.w).filter((w) => ids.has(w.id));
  });

  protected thumb(id: string): string | undefined {
    return photoOf(id)?.src;
  }

  protected emoji(w: Word): string {
    return TOPIC_BY_ID[w.topicId]?.emoji ?? '📖';
  }

  protected topicName(w: Word): string {
    return TOPIC_BY_ID[w.topicId]?.title ?? '';
  }

  /** Mở chi tiết, đọc từ và ghi vào lịch sử tra gần đây */
  protected open(w: Word): void {
    this.ux.openWord(w);
    void this.speech.speakEn(w.word);
    const q = this.query().trim();
    if (q) {
      const next = [q, ...this.recent().filter((r) => r !== q)].slice(0, 8);
      this.recent.set(next);
      try {
        localStorage.setItem(RECENT_KEY, JSON.stringify(next));
      } catch {
        /* bỏ qua khi không lưu được */
      }
    }
  }

  private loadRecent(): string[] {
    try {
      return JSON.parse(localStorage.getItem(RECENT_KEY) ?? '[]');
    } catch {
      return [];
    }
  }
}
