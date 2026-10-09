/**
 * lesson-study.page.ts – Học một bài từ vựng bằng thẻ ghi nhớ (flashcard).
 *
 * Quy trình: xem từng thẻ (nghe Bông đọc, lật để xem nghĩa + ví dụ) -> hoàn thành bộ thẻ
 * -> chuyển sang bài kiểm tra nhanh để "chốt" từ vào trí nhớ (xem SessionPage, mode 'lesson').
 */
import { ChangeDetectionStrategy, Component, computed, effect, inject, resource, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { map } from 'rxjs';
import { ProgressService } from '../../core/progress.service';
import { SfxService } from '../../core/sfx.service';
import { SpeechService } from '../../core/speech.service';
import { VocabService } from '../../core/vocab.service';
import { TopicId } from '../../models/content.model';
import { POS_LABEL } from '../../models/vocab.model';
import { photoOf } from '../../core/photos';
import { BongComponent } from '../../shared/bong.component';
import { PageHeaderComponent } from '../../shared/page-header.component';

@Component({
  selector: 'app-lesson-study',
  imports: [RouterLink, BongComponent, PageHeaderComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <main class="page no-nav stack">
      <app-page-header [title]="lesson()?.vi ?? 'Bài học'" [icon]="lesson()?.icon ?? '📖'" [back]="'/vocab/' + topicId()"
                       [counter]="finished() ? '' : idx() + 1 + '/' + words().length" />

      @if (lesson(); as l) {
        @if (!finished()) {
          <div class="bar blue"><i [style.width.%]="((idx() + 1) / words().length) * 100"></i></div>

          @if (word(); as w) {
            <section class="flash card" [class.flipped]="flipped()" (click)="flip()" (keyup.enter)="flip()" tabindex="0" role="button"
                     [attr.aria-label]="'Thẻ từ ' + w.word + '. Bấm để lật'">
              @if (photo(w.id); as p) {
                <img class="fphoto" [src]="p" [alt]="w.word" />
              }
              <div class="pos">({{ w.pos }}) {{ posLabel(w.pos) }}</div>
              <h2 class="word">{{ w.word }}</h2>
              <p class="ipa">/{{ w.ipa }}/</p>

              <div class="sound" (click)="$event.stopPropagation()">
                <button class="icon-btn big" type="button" (click)="play(false)" aria-label="Nghe">🔊</button>
                <button class="icon-btn big" type="button" (click)="play(true)" aria-label="Nghe chậm">🐢</button>
              </div>

              @if (flipped()) {
                <div class="back fade-up">
                  <p class="vi">{{ w.vi }}</p>
                  <p class="ex">“{{ w.ex }}”</p>
                  <p class="muted">{{ w.exVi }}</p>
                  <button class="icon-btn" type="button" (click)="playExample($event)" aria-label="Nghe câu ví dụ">🔊 </button>
                </div>
              } @else {
                <p class="tap muted">👆 Chạm để xem nghĩa</p>
              }
            </section>

            <div class="row nav">
              <button class="btn btn-ghost" type="button" [disabled]="idx() === 0" (click)="prev()">‹ Trước</button>
              <button class="btn btn-soft" type="button" (click)="known()">Mình biết từ này ✔</button>
              <button class="btn btn-primary" type="button" (click)="next()">
                {{ idx() === words().length - 1 ? 'Xong' : 'Tiếp ›' }}
              </button>
            </div>
          }
          <app-bong mood="write" [size]="84" message="Đọc theo thật to nhé! Nói ra miệng giúp nhớ lâu hơn." />
        } @else {
          <section class="card done center fade-up">
            <app-bong mood="cheer" [size]="110" />
            <h2>Giỏi lắm! 🎉</h2>
            <p>Bạn vừa xem xong {{ words().length }} từ của bài “{{ l.vi }}”.</p>
            <p class="muted">Làm bài kiểm tra nhanh để nhớ những từ này thật lâu nhé!</p>
            <a class="btn btn-accent btn-block" [routerLink]="['/session/lesson', topicId()]" [queryParams]="{ lesson: lessonIndex() }">
              📝 Làm bài kiểm tra nhanh
            </a>
            <button class="btn btn-ghost btn-block" type="button" (click)="restart()">🔁 Xem lại từ đầu</button>
            <a class="btn btn-soft btn-block" [routerLink]="['/vocab', topicId()]">Về danh sách từ</a>
          </section>
        }
      } @else if (data.isLoading()) {
        <p class="muted center">Đang chuẩn bị bài học...</p>
      }
    </main>
  `,
  styles: `
    .flash {
      min-height: 330px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 6px;
      padding: 22px 16px;
      text-align: center;
      cursor: pointer;
      border: 3px solid var(--white);
      background: linear-gradient(180deg, var(--white), var(--sky-50));
    }
    .flash.flipped {
      border-color: var(--accent);
    }
    .fphoto {
      width: 100%;
      max-width: 320px;
      aspect-ratio: 4 / 3;
      object-fit: cover;
      border-radius: var(--radius-lg);
      box-shadow: var(--shadow-sm);
      margin-bottom: var(--space-2);
    }
    .pos {
      color: var(--purple);
    }
    .word {
      font-size: 2.6rem;
      color: var(--primary-dark);
      word-break: break-word;
    }
    .ipa {
      color: var(--ink-soft);
      font-size: 1.15rem;
    }
    .sound {
      display: flex;
      gap: 12px;
      margin: 8px 0;
    }
    .icon-btn.big {
      width: 54px;
      height: 54px;
      font-size: 1.5rem;
    }
    .back {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 6px;
      width: 100%;
      padding-top: 10px;
      border-top: 2px dashed var(--line);
    }
    .vi {
      font-family: var(--font-head);
      font-size: 1.6rem;
      color: var(--good);
    }
    .ex {
      font-size: 1.05rem;
    }
    .tap {
      margin-top: 8px;
    }
    .nav {
      justify-content: space-between;
      flex-wrap: wrap;
    }
    .nav .btn {
      padding: 11px 16px;
      font-size: 0.95rem;
    }
    .done {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 10px;
      padding: 22px 16px;
    }
    .done h2 {
      font-size: 1.7rem;
      color: var(--primary-dark);
    }
  `,
})
export class LessonStudyPage {
  private readonly route = inject(ActivatedRoute);
  private readonly vocab = inject(VocabService);
  private readonly progress = inject(ProgressService);
  private readonly speech = inject(SpeechService);
  private readonly sfx = inject(SfxService);

  protected readonly topicId = toSignal(this.route.paramMap.pipe(map((p) => p.get('id') as TopicId)), { requireSync: true });
  protected readonly lessonIndex = toSignal(this.route.paramMap.pipe(map((p) => Number(p.get('lesson')))), { requireSync: true });

  protected readonly data = resource({
    params: () => this.topicId(),
    loader: ({ params }) => this.vocab.load(params),
  });

  protected readonly lesson = computed(() => this.data.value()?.lessons[this.lessonIndex()]);
  protected readonly words = computed(() => this.lesson()?.words ?? []);

  /** Vị trí thẻ hiện tại và trạng thái lật/hoàn thành */
  protected readonly idx = signal(0);
  protected readonly flipped = signal(false);
  protected readonly finished = signal(false);
  protected readonly word = computed(() => this.words()[this.idx()]);

  constructor() {
    // Mỗi khi chuyển sang thẻ mới: Bông tự đọc từ đó
    effect(() => {
      const w = this.word();
      if (w && !this.finished()) void this.speech.speakEn(w.word);
    });
  }

  /** Ảnh minh họa thật của từ (nếu có) */
  protected photo(id: string): string | undefined {
    return photoOf(id)?.src;
  }

  protected posLabel(pos: string): string {
    return POS_LABEL[pos] ?? pos;
  }

  protected flip(): void {
    this.flipped.update((v) => !v);
    this.sfx.tap();
  }

  protected play(slow: boolean): void {
    const w = this.word();
    if (w) void this.speech.speakEn(w.word, { slow });
  }

  protected playExample(ev: Event): void {
    ev.stopPropagation();
    const w = this.word();
    if (w) void this.speech.speakEn(w.ex);
  }

  protected prev(): void {
    if (this.idx() > 0) {
      this.idx.update((i) => i - 1);
      this.flipped.set(false);
    }
  }

  protected next(): void {
    if (this.idx() < this.words().length - 1) {
      this.idx.update((i) => i + 1);
      this.flipped.set(false);
    } else {
      // Xem xong cả bộ thẻ: ghi nhận đã xem, tặng XP nhỏ và chuyển sang màn hình hoàn thành
      this.progress.markSeen(this.words().map((w) => w.id));
      this.progress.recordStudyXp(10);
      this.sfx.win();
      this.finished.set(true);
      void this.speech.bong('lessonDone');
    }
  }

  /** Người học báo đã biết từ này -> ghi nhớ và sang thẻ tiếp theo */
  protected known(): void {
    const w = this.word();
    if (w) this.progress.markKnown(w.id);
    this.next();
  }

  protected restart(): void {
    this.idx.set(0);
    this.flipped.set(false);
    this.finished.set(false);
  }

}
