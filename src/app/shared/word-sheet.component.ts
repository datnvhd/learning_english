/**
 * word-sheet.component.ts – Bảng chi tiết từ vựng trượt lên từ đáy màn hình (đặt một lần trong app.ts).
 *
 * Mở từ bất kỳ đâu bằng UxService.openWord(word). Nội dung:
 *  - Ảnh minh họa thật (nếu có, giấy phép CC0) + ghi nguồn
 *  - Từ, phiên âm, loại từ, nghĩa; nghe thường / nghe chậm
 *  - Câu ví dụ có nút nghe và bản dịch
 *  - Luyện phát âm: nhận dạng giọng nói (khi có mạng) hoặc ghi âm để nghe lại (offline)
 *  - Lưu từ / đánh dấu "Mình đã biết"
 * Đóng bằng nút X, bấm ra ngoài hoặc phím Esc.
 */
import { ChangeDetectionStrategy, Component, DestroyRef, HostListener, computed, inject, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { NavigationStart, Router } from '@angular/router';
import { filter } from 'rxjs';
import { photoOf } from '../core/photos';
import { ProgressService } from '../core/progress.service';
import { RecognitionService } from '../core/recognition.service';
import { SpeechService } from '../core/speech.service';
import { wordSimilarity } from '../core/text-utils';
import { UxService } from '../core/ux.service';
import { TOPIC_BY_ID } from '../data/topics';
import { POS_LABEL } from '../models/vocab.model';
import { IconComponent } from '../theme/icon.component';

@Component({
  selector: 'app-word-sheet',
  imports: [IconComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    @if (word(); as w) {
      <div class="scrim" (click)="close()"></div>
      <section class="sheet" role="dialog" aria-modal="true" [attr.aria-label]="'Chi tiết từ ' + w.word">
        <div class="grip"></div>
        <button class="icon-btn close" type="button" (click)="close()" aria-label="Đóng"><app-icon name="x" /></button>

        @if (photo(); as p) {
          <figure class="photo">
            <img [src]="p.src" [alt]="w.word" loading="lazy" />
            <figcaption>Ảnh: {{ p.creator }} · {{ p.license }}</figcaption>
          </figure>
        }

        <div class="head">
          <span class="topic">{{ topicName() }}</span>
          <h2>{{ w.word }}</h2>
          <p class="ipa">/{{ w.ipa }}/ · <span class="pos">{{ posLabel() }}</span></p>
          <p class="vi">{{ w.vi }}</p>
          <div class="row sound">
            <button class="btn btn-primary btn-sm" type="button" (click)="say(false)"><app-icon name="volume" /> Nghe</button>
            <button class="btn btn-soft btn-sm" type="button" (click)="say(true)"><app-icon name="gauge" /> Nghe chậm</button>
          </div>
        </div>

        <div class="ex card">
          <div class="row">
            <b class="spacer">“{{ w.ex }}”</b>
            <button class="icon-btn" type="button" (click)="sayEx()" aria-label="Nghe câu ví dụ"><app-icon name="volume" /></button>
          </div>
          <p class="muted">{{ w.exVi }}</p>
        </div>

        <!-- Luyện phát âm -->
        <div class="practice card">
          <div class="row">
            <app-icon name="microphone" class="mic-ic" />
            <b class="spacer">Luyện phát âm</b>
            <button class="btn btn-accent btn-sm" type="button" (click)="practice()" [disabled]="busy()">
              {{ busy() ? (recording() ? 'Dừng' : 'Đang nghe...') : 'Thử nói' }}
            </button>
          </div>
          @if (feedback()) {
            <p class="fb" [class.good]="score() >= 0.85">{{ feedback() }}</p>
          }
          @if (recUrl()) {
            <button class="btn btn-ghost btn-sm" type="button" (click)="playRec()"><app-icon name="player-play" /> Nghe lại giọng mình</button>
          }
        </div>

        <div class="row actions">
          <button class="btn btn-ghost grow" type="button" [class.on]="saved()" (click)="toggleSave()">
            <app-icon name="bookmark" /> {{ saved() ? 'Đã lưu' : 'Lưu từ' }}
          </button>
          <button class="btn btn-good grow" type="button" [disabled]="learned()" (click)="known()">
            <app-icon name="check" /> {{ learned() ? 'Đã thuộc' : 'Mình đã biết' }}
          </button>
        </div>
      </section>
    }
  `,
  styles: `
    .scrim {
      position: fixed;
      inset: 0;
      z-index: 250;
      background: color-mix(in srgb, var(--slate-800) 40%, transparent);
      animation: fade-up var(--motion-base) both;
    }
    .sheet {
      position: fixed;
      left: 50%;
      bottom: 0;
      transform: translateX(-50%);
      z-index: 260;
      width: min(100vw, 560px);
      max-height: 90vh;
      overflow-y: auto;
      background: var(--bg-soft);
      border-radius: var(--radius-xl) var(--radius-xl) 0 0;
      padding: var(--space-3) var(--space-4) calc(var(--space-6) + env(safe-area-inset-bottom));
      display: flex;
      flex-direction: column;
      gap: var(--space-3);
      box-shadow: var(--shadow-lg);
      animation: slide-up var(--motion-slow) var(--motion-ease) both;
    }
    @keyframes slide-up {
      from {
        transform: translate(-50%, 100%);
      }
      to {
        transform: translate(-50%, 0);
      }
    }
    .grip {
      width: 44px;
      height: 5px;
      border-radius: var(--radius-pill);
      background: var(--slate-300);
      align-self: center;
    }
    .close {
      position: absolute;
      top: var(--space-3);
      right: var(--space-3);
      z-index: 2;
    }
    .photo {
      margin: 0;
      border-radius: var(--radius-lg);
      overflow: hidden;
      position: relative;
      box-shadow: var(--shadow-sm);
    }
    .photo img {
      display: block;
      width: 100%;
      aspect-ratio: 4 / 3;
      object-fit: cover;
      background: var(--sky-100);
    }
    .photo figcaption {
      position: absolute;
      right: 8px;
      bottom: 6px;
      font-size: 0.65rem;
      color: var(--white);
      background: color-mix(in srgb, var(--slate-800) 55%, transparent);
      padding: 1px 8px;
      border-radius: var(--radius-pill);
    }
    .head {
      text-align: center;
      display: flex;
      flex-direction: column;
      gap: 2px;
      align-items: center;
    }
    .topic {
      font-size: var(--fs-xs);
      color: var(--primary);
    }
    .head h2 {
      font-size: var(--fs-3xl);
      color: var(--primary-dark);
    }
    .ipa {
      color: var(--ink-soft);
    }
    .pos {
      color: var(--purple);
    }
    .vi {
      font-family: var(--font-head);
      font-size: var(--fs-xl);
      color: var(--good-dark);
    }
    .sound {
      margin-top: var(--space-2);
    }
    .ex,
    .practice {
      display: flex;
      flex-direction: column;
      gap: var(--space-2);
    }
    .mic-ic {
      color: var(--skill-speaking);
      width: 22px;
      height: 22px;
    }
    .fb {
      color: var(--accent-dark);
    }
    .fb.good {
      color: var(--good-dark);
    }
    .actions .grow {
      flex: 1;
    }
    .btn.on {
      background: var(--accent-soft);
      border-color: var(--accent);
      color: var(--sun-700);
    }
  `,
})
export class WordSheetComponent {
  private readonly ux = inject(UxService);
  private readonly speech = inject(SpeechService);
  private readonly progress = inject(ProgressService);
  private readonly recog = inject(RecognitionService);

  protected readonly word = this.ux.sheetWord;
  protected readonly photo = computed(() => {
    const w = this.word();
    return w ? photoOf(w.id) : undefined;
  });
  protected readonly topicName = computed(() => {
    const w = this.word();
    return w ? TOPIC_BY_ID[w.topicId]?.title ?? '' : '';
  });
  protected readonly posLabel = computed(() => POS_LABEL[this.word()?.pos ?? ''] ?? this.word()?.pos ?? '');
  protected readonly saved = computed(() => {
    this.progress.state();
    const w = this.word();
    return w ? this.progress.isBookmarked(w.id) : false;
  });
  protected readonly learned = computed(() => {
    this.progress.state();
    const w = this.word();
    return w ? this.progress.isLearned(w.id) : false;
  });

  protected readonly busy = signal(false);
  protected readonly recording = signal(false);
  protected readonly feedback = signal('');
  protected readonly score = signal(0);
  protected readonly recUrl = signal<string | null>(null);
  private audio: HTMLAudioElement | null = null;
  private lastId = '';

  constructor() {
    // Chuyển sang màn hình khác thì tự đóng bảng chi tiết
    inject(Router).events.pipe(filter((e) => e instanceof NavigationStart), takeUntilDestroyed(inject(DestroyRef))).subscribe(() => this.close());
  }

  /** Esc để đóng */
  @HostListener('document:keydown.escape')
  protected close(): void {
    if (!this.word()) return;
    this.speech.cancel();
    this.recog.stopListening();
    void this.recog.stopRecording();
    this.reset();
    this.ux.closeWord();
  }

  private reset(): void {
    this.busy.set(false);
    this.recording.set(false);
    this.feedback.set('');
    this.recUrl.set(null);
  }

  protected say(slow: boolean): void {
    const w = this.word();
    if (w) void this.speech.speakEn(w.word, { slow });
    this.ensureFresh();
  }

  protected sayEx(): void {
    const w = this.word();
    if (w) void this.speech.speakEn(w.ex);
  }

  /** Khi mở từ mới thì xóa kết quả luyện nói cũ */
  private ensureFresh(): void {
    const id = this.word()?.id ?? '';
    if (id !== this.lastId) {
      this.lastId = id;
      this.reset();
    }
  }

  /** Luyện nói: nhận dạng giọng (có mạng) hoặc ghi âm (offline) */
  protected async practice(): Promise<void> {
    this.ensureFresh();
    const w = this.word();
    if (!w) return;
    if (this.recording()) {
      this.recUrl.set(await this.recog.stopRecording());
      this.recording.set(false);
      this.busy.set(false);
      this.feedback.set('Nghe lại và so sánh với giọng mẫu nhé!');
      return;
    }
    this.speech.cancel();
    this.busy.set(true);
    if (this.recog.canRecognize) {
      const out = await this.recog.listen('en-US');
      this.busy.set(false);
      if (out.ok) {
        const best = Math.max(...out.transcripts.map((t) => wordSimilarity(t, w.word)));
        this.score.set(best);
        this.feedback.set(best >= 0.85 ? `Chuẩn lắm! App nghe được “${out.transcripts[0]}”.` : `App nghe thành “${out.transcripts[0]}”. Thử lại nhé!`);
        this.ux.haptic(best >= 0.85 ? 'good' : 'bad');
        if (best >= 0.85) void this.speech.bong('praise1');
        return;
      }
    }
    // chế độ ghi âm offline
    if (await this.recog.startRecording()) {
      this.recording.set(true);
      this.feedback.set('Đang ghi âm... bấm "Dừng" khi đọc xong.');
      this.busy.set(false);
    } else {
      this.busy.set(false);
      this.feedback.set('Không mở được micro. Hãy cho phép dùng micro nhé.');
    }
  }

  protected playRec(): void {
    const url = this.recUrl();
    if (!url) return;
    this.audio?.pause();
    this.audio = new Audio(url);
    void this.audio.play();
  }

  protected toggleSave(): void {
    const w = this.word();
    if (!w) return;
    this.progress.toggleBookmark(w.id);
    this.ux.toast(this.progress.isBookmarked(w.id) ? `Đã lưu “${w.word}” vào sổ tay` : `Đã bỏ lưu “${w.word}”`, 'good');
  }

  protected known(): void {
    const w = this.word();
    if (!w) return;
    this.progress.markKnown(w.id);
    this.ux.toast(`Tuyệt! “${w.word}” đã vào danh sách đã thuộc`, 'reward');
    this.ux.haptic('good');
  }
}
