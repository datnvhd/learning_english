/**
 * sentence-game.component.ts – Trò chơi "Xây câu".
 * Cho nghĩa tiếng Việt và các từ tiếng Anh bị xáo trộn; chạm lần lượt để ghép lại thành câu đúng.
 * Đúng ngay lần đầu được nhiều điểm nhất, đúng liên tiếp được cộng thưởng; sai hai lần thì xem đáp án.
 */
import { ChangeDetectionStrategy, Component, OnInit, computed, inject, input, output, signal } from '@angular/core';
import { SfxService } from '../../core/sfx.service';
import { SpeechService } from '../../core/speech.service';
import { shuffle } from '../../core/text-utils';
import { Word } from '../../models/vocab.model';
import { IconComponent } from '../../theme/icon.component';
import { GameResult } from './game.model';

/** Tách câu thành các mảnh từ (giữ dấu câu dính vào từ) */
export function sentenceTiles(sentence: string): string[] {
  return sentence.trim().split(/\s+/).filter(Boolean);
}

/** Chuẩn hóa để so sánh: bỏ dấu câu, viết thường */
function norm(text: string): string {
  return text.toLowerCase().replace(/[^a-z0-9' ]+/g, '').replace(/\s+/g, ' ').trim();
}

@Component({
  selector: 'app-sentence-game',
  imports: [IconComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="hud">
      <span>Câu <b>{{ index() + 1 }}/{{ words().length }}</b></span>
      <span><app-icon name="star" /> <b>{{ score() }}</b></span>
      <span class="combo" [class.hot]="streak() >= 2"><app-icon name="flame" /> <b>{{ streak() }}</b> liên tiếp</span>
    </div>
    <div class="bar blue"><i [style.width.%]="(index() / words().length) * 100"></i></div>

    @if (word(); as w) {
      <section class="card box" [class.shake]="shake()">
        <p class="muted">Ghép các từ thành câu tiếng Anh có nghĩa:</p>
        <h2 class="vi">{{ w.exVi }}</h2>

        <div class="line" [class.ok]="state() === 'right'" [class.no]="state() === 'reveal'">
          @for (i of picked(); track i) {
            <button type="button" class="tile in" [disabled]="state() !== 'play'" (click)="unpick(i)">{{ tiles()[i] }}</button>
          } @empty {
            <span class="ph">Chạm vào các từ bên dưới theo đúng thứ tự</span>
          }
        </div>

        <div class="pool">
          @for (t of tiles(); track $index) {
            <button type="button" class="tile" [class.used]="picked().includes($index)" [disabled]="picked().includes($index) || state() !== 'play'" (click)="pick($index)">{{ t }}</button>
          }
        </div>

        @if (state() === 'play') {
          <div class="row acts">
            <button class="btn btn-ghost btn-sm" type="button" (click)="clear()" [disabled]="!picked().length"><app-icon name="refresh" /> Xếp lại</button>
            <button class="btn btn-primary" type="button" (click)="check()" [disabled]="picked().length !== tiles().length"><app-icon name="check" /> Kiểm tra</button>
          </div>
          @if (tries() > 0) { <p class="warn"><app-icon name="alert-triangle" /> Chưa đúng, bạn còn 1 lần thử.</p> }
        } @else {
          <p class="res" [class.ok]="state() === 'right'">
            <app-icon [name]="state() === 'right' ? 'circle-check' : 'circle-x'" />
            {{ state() === 'right' ? 'Chính xác!' : 'Đáp án đúng:' }} <b>{{ w.ex }}</b>
            <button class="icon-btn" type="button" (click)="say()" aria-label="Nghe câu"><app-icon name="volume" /></button>
          </p>
          <p class="muted">Từ khóa: <b>{{ w.word }}</b> – {{ w.vi }}</p>
          <button class="btn btn-primary" type="button" (click)="next()">{{ index() === words().length - 1 ? 'Xem kết quả' : 'Câu tiếp theo' }} <app-icon name="arrow-right" /></button>
        }
      </section>
    }
  `,
  styles: `
    .hud { display: flex; justify-content: space-around; background: var(--white); border-radius: 99px; padding: 8px 12px; box-shadow: var(--shadow-sm); margin-bottom: 10px; }
    .hud span { display: inline-flex; align-items: center; gap: 6px; }
    .hud app-icon { width: 18px; height: 18px; color: var(--sun-500); }
    .combo.hot { color: var(--tangerine-600); }
    .combo.hot app-icon { color: var(--tangerine-500); }
    .bar { margin-bottom: 12px; }
    .box { display: flex; flex-direction: column; align-items: center; gap: 14px; padding: 20px 16px; text-align: center; }
    .vi { font-size: 1.35rem; color: var(--primary-dark); line-height: 1.35; }
    .line { width: 100%; min-height: 62px; display: flex; flex-wrap: wrap; align-items: center; justify-content: center; gap: 8px; padding: 10px; border-radius: var(--radius-md); border: 2px dashed var(--sky-300); background: var(--slate-50); transition: border-color var(--motion-fast), background var(--motion-fast); }
    .line.ok { border-style: solid; border-color: var(--good); background: var(--good-soft); }
    .line.no { border-style: solid; border-color: var(--bad); background: var(--bad-soft); }
    .ph { color: var(--ink-mute); font-size: var(--fs-sm); }
    .pool { display: flex; flex-wrap: wrap; justify-content: center; gap: 8px; min-height: 46px; }
    .tile { padding: 9px 14px; border-radius: var(--radius-md); background: var(--white); border: 1.5px solid var(--line); box-shadow: 0 3px 0 var(--line); font-size: 1.02rem; font-weight: 600; transition: transform var(--motion-fast), box-shadow var(--motion-fast), border-color var(--motion-fast); }
    .tile:hover:not(:disabled) { border-color: var(--sky-300); }
    .tile:active:not(:disabled) { transform: translateY(2px); box-shadow: none; }
    .tile.in { border-color: var(--sky-300); background: var(--primary-soft); color: var(--primary-dark); box-shadow: 0 3px 0 var(--sky-200); }
    .tile.used { opacity: 0.25; box-shadow: none; }
    .acts { justify-content: center; flex-wrap: wrap; }
    .warn { display: inline-flex; align-items: center; gap: 6px; color: var(--tangerine-600); font-size: var(--fs-sm); font-weight: 600; }
    .warn app-icon { width: 16px; height: 16px; }
    .res { display: flex; align-items: center; justify-content: center; flex-wrap: wrap; gap: 6px; color: var(--bad-dark); }
    .res.ok { color: var(--good-dark); }
    .res b { color: var(--ink); }
    .shake { animation: sshake 0.35s; }
    @keyframes sshake { 25% { transform: translateX(-6px); } 75% { transform: translateX(6px); } }
  `,
})
export class SentenceGameComponent implements OnInit {
  private readonly speech = inject(SpeechService);
  private readonly sfx = inject(SfxService);

  /** Các từ có câu ví dụ dùng để ra đề (mỗi từ một câu) */
  readonly words = input.required<Word[]>();
  readonly finished = output<GameResult>();

  protected readonly index = signal(0);
  protected readonly word = computed<Word | undefined>(() => this.words()[this.index()]);
  /** Các mảnh từ đã xáo trộn của câu hiện tại */
  protected readonly tiles = signal<string[]>([]);
  /** Thứ tự các mảnh người chơi đã chọn (chỉ số trong `tiles`) */
  protected readonly picked = signal<number[]>([]);
  protected readonly state = signal<'play' | 'right' | 'reveal'>('play');
  protected readonly tries = signal(0);
  protected readonly shake = signal(false);
  protected readonly score = signal(0);
  protected readonly streak = signal(0);
  private readonly correctIds: string[] = [];
  private right = 0;

  ngOnInit(): void {
    this.deal();
  }

  /** Xáo các mảnh của câu hiện tại (không để trùng thứ tự đúng) */
  private deal(): void {
    const w = this.word();
    if (!w) return;
    const original = sentenceTiles(w.ex);
    let mixed = shuffle(original);
    for (let i = 0; i < 5 && mixed.join(' ') === original.join(' '); i++) mixed = shuffle(original);
    this.tiles.set(mixed);
    this.picked.set([]);
    this.tries.set(0);
    this.state.set('play');
  }

  protected pick(i: number): void {
    if (this.state() !== 'play' || this.picked().includes(i)) return;
    this.sfx.tap();
    this.picked.update((p) => [...p, i]);
  }

  protected unpick(i: number): void {
    if (this.state() !== 'play') return;
    this.picked.update((p) => p.filter((x) => x !== i));
  }

  protected clear(): void {
    this.picked.set([]);
  }

  protected check(): void {
    const w = this.word();
    if (!w || this.state() !== 'play') return;
    const built = this.picked().map((i) => this.tiles()[i]).join(' ');
    if (norm(built) === norm(w.ex)) {
      const first = this.tries() === 0;
      this.streak.update((v) => (first ? v + 1 : 0));
      // Đúng ngay: 15 điểm + thưởng chuỗi (tối đa +10); đúng ở lần thử lại: 8 điểm
      this.score.update((v) => v + (first ? 15 + Math.min(10, (this.streak() - 1) * 2) : 8));
      if (first) this.correctIds.push(w.id);
      this.right++;
      this.state.set('right');
      this.sfx.correct();
      void this.speech.speakEn(w.ex);
      return;
    }
    this.sfx.wrong();
    this.streak.set(0);
    this.shake.set(true);
    setTimeout(() => this.shake.set(false), 350);
    if (this.tries() >= 1) {
      // Sai hai lần: xếp sẵn đáp án đúng để người chơi xem
      this.picked.set(this.answerOrder(w.ex));
      this.state.set('reveal');
    } else {
      this.tries.update((v) => v + 1);
      this.picked.set([]);
    }
  }

  /** Thứ tự các mảnh tạo thành câu đúng */
  private answerOrder(sentence: string): number[] {
    const tiles = this.tiles();
    const used = new Set<number>();
    return sentenceTiles(sentence).map((t) => {
      const i = tiles.findIndex((x, k) => x === t && !used.has(k));
      used.add(i);
      return i;
    });
  }

  protected say(): void {
    const w = this.word();
    if (w) void this.speech.speakEn(w.ex);
  }

  protected next(): void {
    if (this.index() >= this.words().length - 1) {
      this.finished.emit({
        score: this.score(), xp: 6 + Math.round(this.score() / 10), correctIds: this.correctIds,
        label: `Ghép đúng ${this.right}/${this.words().length} câu`,
      });
      return;
    }
    this.index.update((v) => v + 1);
    this.deal();
  }
}
