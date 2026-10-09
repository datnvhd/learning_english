/**
 * speed-game.component.ts – Trò chơi "Đố nhanh 60 giây": chọn nghĩa đúng của từ thật nhanh.
 * Trả lời đúng liên tiếp sẽ nhân điểm (combo); trả lời sai làm mất chuỗi. Hết 60 giây là kết thúc.
 */
import { ChangeDetectionStrategy, Component, OnDestroy, OnInit, computed, inject, input, output, signal } from '@angular/core';
import { SfxService } from '../../core/sfx.service';
import { SpeechService } from '../../core/speech.service';
import { sample, shuffle } from '../../core/text-utils';
import { Word } from '../../models/vocab.model';
import { GameResult } from './game.model';

/** Thời gian mỗi ván (giây) */
const DURATION = 60;

@Component({
  selector: 'app-speed-game',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="hud">
      <span>⭐ <b>{{ score() }}</b></span>
      <span class="combo" [class.hot]="streak() >= 3">🔥 x{{ multiplier() }} <small>({{ streak() }} liên tiếp)</small></span>
      <span>✅ <b>{{ right() }}</b></span>
    </div>
    <div class="timer"><i [style.width.%]="(left() / duration) * 100" [class.low]="left() <= 10"></i></div>
    <p class="secs" [class.low]="left() <= 10">{{ left() }}s</p>

    @if (q(); as cur) {
      <section class="card q" [class.shake]="bad()">
        <p class="muted">Từ này nghĩa là gì?</p>
        <h2>{{ cur.word.word }}</h2>
        <p class="ipa">/{{ cur.word.ipa }}/</p>
        <div class="opts">
          @for (o of cur.options; track o) {
            <button type="button" class="opt" [class.ok]="picked() !== null && o === cur.word.vi" [class.no]="picked() === o && o !== cur.word.vi"
                    [disabled]="picked() !== null" (click)="answer(o)">{{ o }}</button>
          }
        </div>
      </section>
    }
  `,
  styles: `
    .hud { display: flex; justify-content: space-around; align-items: center; background: var(--white); border-radius: 99px; padding: 8px 12px; box-shadow: var(--shadow-sm); margin-bottom: 10px; }
    .combo small { color: var(--ink-soft); }
    .combo.hot { color: var(--tangerine-600); }
    .timer { height: 12px; background: var(--sky-100); border-radius: 99px; overflow: hidden; }
    .timer i { display: block; height: 100%; background: linear-gradient(90deg, var(--leaf-500), var(--leaf-300)); transition: width 1s linear; }
    .timer i.low { background: linear-gradient(90deg, var(--coral-500), var(--tangerine-500)); }
    .secs { text-align: center; font-family: var(--font-head); font-size: 1.4rem; margin: 4px 0 8px; }
    .secs.low { color: var(--bad); }
    .q { display: flex; flex-direction: column; align-items: center; gap: 6px; text-align: center; padding: 16px 14px; }
    .q h2 { font-size: 2.2rem; color: var(--primary-dark); }
    .ipa { color: var(--ink-soft); }
    .opts { display: grid; grid-template-columns: 1fr; gap: 8px; width: 100%; margin-top: 6px; }
    .opt { padding: 12px 14px; border-radius: var(--radius-sm); border: 2px solid var(--line); background: var(--white); font-size: 1.02rem; text-align: left; }
    .opt.ok { background: var(--good-soft); border-color: var(--good); }
    .opt.no { background: var(--bad-soft); border-color: var(--bad); }
    @media (min-width: 560px) { .opts { grid-template-columns: 1fr 1fr; } }
  `,
})
export class SpeedGameComponent implements OnInit, OnDestroy {
  private readonly speech = inject(SpeechService);
  private readonly sfx = inject(SfxService);

  /** Kho từ để ra câu hỏi (càng nhiều càng đa dạng) */
  readonly words = input.required<Word[]>();
  readonly finished = output<GameResult>();

  protected readonly duration = DURATION;
  protected readonly left = signal(DURATION);
  protected readonly score = signal(0);
  protected readonly streak = signal(0);
  protected readonly right = signal(0);
  protected readonly bad = signal(false);
  protected readonly picked = signal<string | null>(null);
  protected readonly q = signal<{ word: Word; options: string[] } | null>(null);
  protected readonly multiplier = computed(() => 1 + Math.floor(this.streak() / 3));

  private timer: ReturnType<typeof setInterval> | null = null;
  private readonly correctIds = new Set<string>();
  private readonly wrongIds = new Set<string>();
  private bag: Word[] = [];

  ngOnInit(): void {
    this.bag = shuffle(this.words());
    this.nextQuestion();
    this.timer = setInterval(() => {
      this.left.update((v) => v - 1);
      if (this.left() <= 0) this.end();
    }, 1000);
  }

  ngOnDestroy(): void {
    if (this.timer) clearInterval(this.timer);
  }

  /** Lấy từ kế tiếp và 3 đáp án nhiễu khác nghĩa */
  private nextQuestion(): void {
    if (!this.bag.length) this.bag = shuffle(this.words());
    const word = this.bag.pop()!;
    const others = sample(this.words().filter((w) => w.id !== word.id && w.vi !== word.vi), 3).map((w) => w.vi);
    this.q.set({ word, options: shuffle([word.vi, ...others]) });
    this.picked.set(null);
  }

  protected answer(option: string): void {
    const cur = this.q();
    if (!cur || this.picked() !== null) return;
    this.picked.set(option);
    if (option === cur.word.vi) {
      this.sfx.correct();
      this.streak.update((v) => v + 1);
      this.right.update((v) => v + 1);
      this.score.update((v) => v + 10 * this.multiplier());
      if (!this.wrongIds.has(cur.word.id)) this.correctIds.add(cur.word.id);
      void this.speech.speakEn(cur.word.word);
    } else {
      this.sfx.wrong();
      this.streak.set(0);
      this.wrongIds.add(cur.word.id);
      this.bad.set(true);
      setTimeout(() => this.bad.set(false), 350);
    }
    setTimeout(() => this.nextQuestion(), 450);
  }

  private end(): void {
    if (this.timer) clearInterval(this.timer);
    this.timer = null;
    this.finished.emit({
      score: this.score(), xp: 8 + Math.round(this.score() / 8), correctIds: [...this.correctIds],
      label: `${this.right()} câu đúng trong 60 giây`,
    });
  }
}
