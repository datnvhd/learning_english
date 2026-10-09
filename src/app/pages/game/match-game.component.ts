/**
 * match-game.component.ts – Trò chơi "Ghép cặp": lật thẻ để ghép từ tiếng Anh với nghĩa tiếng Việt.
 * Lật thẻ tiếng Anh thì Bông đọc từ đó. Càng ít lượt và càng nhanh thì điểm càng cao.
 */
import { ChangeDetectionStrategy, Component, OnDestroy, OnInit, computed, inject, input, output, signal } from '@angular/core';
import { SfxService } from '../../core/sfx.service';
import { SpeechService } from '../../core/speech.service';
import { shuffle } from '../../core/text-utils';
import { Word } from '../../models/vocab.model';
import { GameResult } from './game.model';

interface Card {
  id: number;
  wordId: string;
  lang: 'en' | 'vi';
  text: string;
}

@Component({
  selector: 'app-match-game',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="hud">
      <span>🎯 Lượt: <b>{{ moves() }}</b></span>
      <span>⏱ <b>{{ secs() }}s</b></span>
      <span>✅ <b>{{ matched().size / 2 }}/{{ pairs() }}</b></span>
    </div>
    <div class="board">
      @for (c of cards(); track c.id) {
        <button type="button" class="card3d" [class.flip]="isUp(c.id)" [class.done]="matched().has(c.id)" [class.bad]="wrong().includes(c.id)"
                (click)="flip(c)" [attr.aria-label]="isUp(c.id) ? c.text : 'Thẻ úp'">
          <span class="face back">❓</span>
          <span class="face front" [class.en]="c.lang === 'en'">{{ c.text }}</span>
        </button>
      }
    </div>
    <p class="muted center tip">Lật hai thẻ: từ tiếng Anh và nghĩa tiếng Việt tương ứng. Thẻ tiếng Anh sẽ được đọc thành tiếng!</p>
  `,
  styles: `
    .hud { display: flex; justify-content: space-around; background: var(--white); border-radius: 99px; padding: 8px 12px; box-shadow: var(--shadow-sm); margin-bottom: 12px; }
    .board { display: grid; grid-template-columns: repeat(4, 1fr); gap: 8px; }
    .card3d { position: relative; aspect-ratio: 3 / 4; perspective: 600px; background: transparent; padding: 0; }
    .face { position: absolute; inset: 0; display: flex; align-items: center; justify-content: center; text-align: center; padding: 4px; border-radius: 14px; backface-visibility: hidden; transition: transform 0.35s; font-size: 0.8rem; line-height: 1.15; word-break: break-word; }
    .back { background: linear-gradient(160deg, var(--sky-400), var(--sky-500)); color: var(--white); font-size: 1.8rem; box-shadow: 0 4px 0 var(--primary-dark); }
    .front { background: var(--white); border: 3px solid var(--line); transform: rotateY(180deg); color: var(--ink); }
    .front.en { color: var(--primary-dark); font-family: var(--font-head); font-size: 0.95rem; border-color: var(--sky-300); }
    .card3d.flip .back { transform: rotateY(180deg); }
    .card3d.flip .front { transform: rotateY(360deg); }
    .card3d.done .front { background: var(--good-soft); border-color: var(--good); }
    .card3d.bad .front { background: var(--bad-soft); border-color: var(--bad); animation: shake 0.35s; }
    .tip { font-size: 0.85rem; margin-top: 12px; }
  `,
})
export class MatchGameComponent implements OnInit, OnDestroy {
  private readonly speech = inject(SpeechService);
  private readonly sfx = inject(SfxService);

  /** 8 từ được chọn cho ván chơi */
  readonly words = input.required<Word[]>();
  readonly finished = output<GameResult>();

  protected readonly cards = signal<Card[]>([]);
  private readonly up = signal<number[]>([]);
  protected readonly matched = signal<Set<number>>(new Set());
  protected readonly wrong = signal<number[]>([]);
  protected readonly moves = signal(0);
  protected readonly secs = signal(0);
  protected readonly pairs = computed(() => this.words().length);
  private readonly missed = new Set<string>();
  private timer: ReturnType<typeof setInterval> | null = null;
  private lock = false;

  ngOnInit(): void {
    const list: Card[] = [];
    let id = 0;
    for (const w of this.words()) {
      list.push({ id: id++, wordId: w.id, lang: 'en', text: w.word }, { id: id++, wordId: w.id, lang: 'vi', text: w.vi });
    }
    this.cards.set(shuffle(list));
    this.timer = setInterval(() => this.secs.update((v) => v + 1), 1000);
  }

  ngOnDestroy(): void {
    if (this.timer) clearInterval(this.timer);
  }

  protected isUp(id: number): boolean {
    return this.up().includes(id) || this.matched().has(id);
  }

  /** Lật một thẻ; khi đủ hai thẻ thì kiểm tra có cùng một từ không */
  protected flip(c: Card): void {
    if (this.lock || this.isUp(c.id)) return;
    this.sfx.tap();
    if (c.lang === 'en') void this.speech.speakEn(c.text);
    this.up.update((u) => [...u, c.id]);
    if (this.up().length < 2) return;

    this.moves.update((m) => m + 1);
    const [a, b] = this.up().map((id) => this.cards().find((x) => x.id === id)!);
    if (a.wordId === b.wordId) {
      this.sfx.correct();
      this.matched.update((m) => new Set([...m, a.id, b.id]));
      this.up.set([]);
      if (this.matched().size === this.cards().length) this.end();
    } else {
      this.sfx.wrong();
      this.missed.add(a.wordId);
      this.missed.add(b.wordId);
      this.lock = true;
      this.wrong.set([a.id, b.id]);
      setTimeout(() => {
        this.up.set([]);
        this.wrong.set([]);
        this.lock = false;
      }, 800);
    }
  }

  private end(): void {
    if (this.timer) clearInterval(this.timer);
    const score = Math.max(10, 100 - Math.max(0, this.moves() - this.pairs()) * 4 - Math.floor(this.secs() / 5));
    const correctIds = this.words().filter((w) => !this.missed.has(w.id)).map((w) => w.id);
    setTimeout(() => this.finished.emit({ score, xp: 10 + Math.round(score / 5), correctIds, label: `${this.moves()} lượt · ${this.secs()} giây` }), 500);
  }
}
