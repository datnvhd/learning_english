/**
 * guess-game.component.ts – Trò chơi "Đoán từ" (kiểu Wordle).
 * Đoán một từ tiếng Anh trong tối đa 6 lượt. Sau mỗi lượt, từng chữ được tô màu:
 * xanh lá = đúng chữ đúng vị trí, vàng = có chữ này nhưng sai vị trí, xám = không có.
 * Mỗi ván gồm 3 từ; đoán càng ít lượt càng nhiều điểm, xem gợi ý nghĩa thì bị trừ điểm.
 */
import { ChangeDetectionStrategy, Component, OnInit, computed, inject, input, output, signal } from '@angular/core';
import { SfxService } from '../../core/sfx.service';
import { SpeechService } from '../../core/speech.service';
import { sample } from '../../core/text-utils';
import { POS_LABEL, Word } from '../../models/vocab.model';
import { IconComponent } from '../../theme/icon.component';
import { GameResult } from './game.model';

/** Số lượt đoán cho mỗi từ */
const TRIES = 6;
/** Số từ trong một ván */
const ROUNDS = 3;
const KEY_ROWS = ['qwertyuiop', 'asdfghjkl', 'zxcvbnm'];

type Mark = 'hit' | 'near' | 'miss';

/** Chấm một lượt đoán so với đáp án (xử lý đúng chữ lặp như Wordle) */
export function markGuess(guess: string, answer: string): Mark[] {
  const marks: Mark[] = Array.from(guess, () => 'miss');
  const rest = new Map<string, number>();
  for (let i = 0; i < answer.length; i++) {
    if (guess[i] === answer[i]) marks[i] = 'hit';
    else rest.set(answer[i], (rest.get(answer[i]) ?? 0) + 1);
  }
  for (let i = 0; i < guess.length; i++) {
    if (marks[i] === 'hit') continue;
    const left = rest.get(guess[i]) ?? 0;
    if (left > 0) {
      marks[i] = 'near';
      rest.set(guess[i], left - 1);
    }
  }
  return marks;
}

@Component({
  selector: 'app-guess-game',
  imports: [IconComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { '(window:keydown)': 'onKey($event)' },
  template: `
    <div class="hud">
      <span>Từ <b>{{ round() + 1 }}/{{ rounds }}</b></span>
      <span><app-icon name="star" /> <b>{{ score() }}</b></span>
      <span>Lượt <b>{{ shownTry() }}/{{ tries }}</b></span>
    </div>

    @if (word(); as w) {
      <section class="card box">
        <p class="muted">Đoán từ tiếng Anh có <b>{{ w.word.length }}</b> chữ cái</p>
        @if (hinted() || state() !== 'play') {
          <p class="hint"><app-icon name="bulb" /> ({{ posLabel(w.pos) }}) {{ w.vi }}</p>
        } @else {
          <button class="btn btn-soft btn-sm" type="button" (click)="hint()"><app-icon name="bulb" /> Gợi ý nghĩa (−20 điểm)</button>
        }

        <div class="grid" [class.shake]="shake()" [style.--n]="w.word.length">
          @for (row of rows(); track $index) {
            @for (c of row; track $index) {
              <span class="cell" [class]="'cell ' + (c.mark ?? '')" [class.on]="!!c.ch && !c.mark">{{ c.ch }}</span>
            }
          }
        </div>

        @if (state() === 'play') {
          <div class="kb" aria-label="Bàn phím">
            @for (r of keyRows; track r; let last = $last) {
              <div class="kr">
                @if (last) { <button type="button" class="key wide" (click)="submit()" [disabled]="current().length !== w.word.length">Đoán</button> }
                @for (k of r; track k) {
                  <button type="button" class="key" [class]="'key ' + (keyMarks()[k] ?? '')" (click)="type(k)">{{ k }}</button>
                }
                @if (last) { <button type="button" class="key wide" (click)="erase()" aria-label="Xóa chữ cuối"><app-icon name="arrow-left" /></button> }
              </div>
            }
          </div>
        } @else {
          <p class="res" [class.ok]="state() === 'won'">
            <app-icon [name]="state() === 'won' ? 'circle-check' : 'circle-x'" />
            {{ state() === 'won' ? 'Chính xác!' : 'Đáp án:' }} <b>{{ w.word }}</b> /{{ w.ipa }}/
            <button class="icon-btn" type="button" (click)="say()" aria-label="Nghe phát âm"><app-icon name="volume" /></button>
          </p>
          <p class="muted ex">“{{ w.ex }}”</p>
          <button class="btn btn-primary" type="button" (click)="next()">{{ round() === rounds - 1 ? 'Xem kết quả' : 'Từ tiếp theo' }} <app-icon name="arrow-right" /></button>
        }
      </section>
    }
    <p class="muted center tip"><i class="d hit"></i> đúng vị trí <i class="d near"></i> có chữ này, sai vị trí <i class="d miss"></i> không có trong từ</p>
  `,
  styles: `
    .hud { display: flex; justify-content: space-around; background: var(--white); border-radius: 99px; padding: 8px 12px; box-shadow: var(--shadow-sm); margin-bottom: 12px; }
    .hud span { display: inline-flex; align-items: center; gap: 6px; }
    .hud app-icon { width: 18px; height: 18px; color: var(--sun-500); }
    .box { display: flex; flex-direction: column; align-items: center; gap: 12px; padding: 18px 14px; text-align: center; }
    .hint { display: inline-flex; align-items: center; gap: 6px; color: var(--primary-dark); font-weight: 600; background: var(--primary-soft); padding: 6px 14px; border-radius: 99px; }
    .hint app-icon { width: 18px; height: 18px; color: var(--sun-500); }
    .grid { display: grid; grid-template-columns: repeat(var(--n), 46px); gap: 6px; }
    .cell { width: 46px; height: 46px; display: grid; place-items: center; border-radius: var(--radius-sm); border: 2px solid var(--line); background: var(--white); font-family: var(--font-head); font-size: 1.35rem; font-weight: 700; text-transform: uppercase; color: var(--ink); transition: background var(--motion-base), border-color var(--motion-base), color var(--motion-base); }
    .cell.on { border-color: var(--sky-300); }
    .cell.hit, .key.hit, .d.hit { background: var(--good); border-color: var(--good); color: var(--white); }
    .cell.near, .key.near, .d.near { background: var(--sun-500); border-color: var(--sun-500); color: var(--white); }
    .cell.miss, .key.miss, .d.miss { background: var(--slate-400); border-color: var(--slate-400); color: var(--white); }
    .kb { display: flex; flex-direction: column; gap: 6px; width: 100%; max-width: 480px; }
    .kr { display: flex; justify-content: center; gap: 5px; }
    .key { flex: 1; max-width: 40px; height: 44px; border-radius: var(--radius-sm); background: var(--slate-100); border: 1px solid var(--line); font-weight: 700; text-transform: uppercase; display: grid; place-items: center; transition: background var(--motion-fast); }
    .key:hover:not(:disabled) { background: var(--sky-100); }
    .key.hit:hover, .key.near:hover, .key.miss:hover { filter: brightness(1.06); }
    .key.wide { flex: 1.6; max-width: 68px; font-size: var(--fs-xs); text-transform: none; background: var(--primary-soft); color: var(--primary-dark); }
    .key.wide:disabled { opacity: 0.5; }
    .key app-icon { width: 18px; height: 18px; }
    .res { display: flex; align-items: center; justify-content: center; flex-wrap: wrap; gap: 6px; color: var(--bad-dark); font-size: var(--fs-lg); }
    .res.ok { color: var(--good-dark); }
    .res b { color: var(--ink); }
    .ex { font-style: italic; }
    .tip { display: flex; align-items: center; justify-content: center; flex-wrap: wrap; gap: 6px; margin-top: 12px; font-size: var(--fs-sm); }
    .d { width: 14px; height: 14px; border-radius: 4px; display: inline-block; margin-left: 8px; }
    .shake { animation: gshake 0.35s; }
    @keyframes gshake { 25% { transform: translateX(-6px); } 75% { transform: translateX(6px); } }
    @media (max-width: 420px) { .grid { grid-template-columns: repeat(var(--n), 40px); } .cell { width: 40px; height: 40px; font-size: 1.15rem; } }
  `,
})
export class GuessGameComponent implements OnInit {
  private readonly speech = inject(SpeechService);
  private readonly sfx = inject(SfxService);

  /** Kho từ 4–6 chữ cái để chọn đáp án */
  readonly words = input.required<Word[]>();
  readonly finished = output<GameResult>();

  protected readonly tries = TRIES;
  protected readonly rounds = ROUNDS;
  protected readonly keyRows = KEY_ROWS.map((r) => [...r]);

  private readonly picked = signal<Word[]>([]);
  protected readonly round = signal(0);
  protected readonly word = computed<Word | undefined>(() => this.picked()[this.round()]);
  protected readonly guesses = signal<string[]>([]);
  protected readonly current = signal('');
  protected readonly state = signal<'play' | 'won' | 'lost'>('play');
  protected readonly hinted = signal(false);
  protected readonly shake = signal(false);
  protected readonly score = signal(0);
  private readonly correctIds: string[] = [];
  private solved = 0;

  /** Lượt đang đoán (hiển thị) */
  protected readonly shownTry = computed(() => Math.min(TRIES, this.guesses().length + (this.state() === 'play' ? 1 : 0)));

  /** Lưới chữ: các lượt đã đoán (có màu), lượt đang gõ, và các ô trống */
  protected readonly rows = computed(() => {
    const w = this.word();
    if (!w) return [];
    const answer = w.word.toLowerCase();
    const out: { ch: string; mark?: Mark }[][] = this.guesses().map((g) => {
      const marks = markGuess(g, answer);
      return [...g].map((ch, i) => ({ ch, mark: marks[i] }));
    });
    if (out.length < TRIES && this.state() === 'play') out.push(Array.from({ length: answer.length }, (_, i) => ({ ch: this.current()[i] ?? '' })));
    while (out.length < TRIES) out.push(Array.from({ length: answer.length }, () => ({ ch: '' })));
    return out;
  });

  /** Màu của từng phím theo kết quả tốt nhất đã biết */
  protected readonly keyMarks = computed(() => {
    const answer = this.word()?.word.toLowerCase() ?? '';
    const rank: Record<Mark, number> = { miss: 0, near: 1, hit: 2 };
    const out: Record<string, Mark> = {};
    for (const g of this.guesses()) {
      markGuess(g, answer).forEach((m, i) => {
        if (!out[g[i]] || rank[m] > rank[out[g[i]]]) out[g[i]] = m;
      });
    }
    return out;
  });

  ngOnInit(): void {
    this.picked.set(sample(this.words(), ROUNDS));
  }

  protected posLabel(pos: Word['pos']): string {
    return POS_LABEL[pos] ?? pos;
  }

  /** Gõ bằng bàn phím thật */
  protected onKey(ev: KeyboardEvent): void {
    if (ev.ctrlKey || ev.metaKey || ev.altKey || this.state() !== 'play') return;
    if (ev.key === 'Enter') this.submit();
    else if (ev.key === 'Backspace') this.erase();
    else if (/^[a-zA-Z]$/.test(ev.key)) this.type(ev.key.toLowerCase());
  }

  protected type(ch: string): void {
    const w = this.word();
    if (!w || this.state() !== 'play' || this.current().length >= w.word.length) return;
    this.sfx.tap();
    this.current.update((v) => v + ch);
  }

  protected erase(): void {
    this.current.update((v) => v.slice(0, -1));
  }

  protected hint(): void {
    this.hinted.set(true);
  }

  protected submit(): void {
    const w = this.word();
    if (!w || this.state() !== 'play') return;
    const guess = this.current();
    if (guess.length !== w.word.length) {
      this.shake.set(true);
      setTimeout(() => this.shake.set(false), 350);
      return;
    }
    this.guesses.update((g) => [...g, guess]);
    this.current.set('');
    if (guess === w.word.toLowerCase()) {
      // Đoán càng sớm càng nhiều điểm: lượt 1 = 100, mỗi lượt sau giảm 15; dùng gợi ý trừ 20
      const gained = Math.max(10, 100 - 15 * (this.guesses().length - 1) - (this.hinted() ? 20 : 0));
      this.score.update((v) => v + gained);
      this.solved++;
      if (!this.hinted()) this.correctIds.push(w.id);
      this.state.set('won');
      this.sfx.correct();
      void this.speech.speakEn(w.word);
    } else if (this.guesses().length >= TRIES) {
      this.state.set('lost');
      this.sfx.wrong();
    } else {
      this.sfx.tap();
    }
  }

  protected say(): void {
    const w = this.word();
    if (w) void this.speech.speakEn(w.word);
  }

  /** Sang từ kế tiếp hoặc kết thúc ván */
  protected next(): void {
    if (this.round() >= ROUNDS - 1 || this.round() >= this.picked().length - 1) {
      this.finished.emit({
        score: this.score(), xp: 6 + Math.round(this.score() / 12), correctIds: this.correctIds,
        label: `Đoán đúng ${this.solved}/${this.picked().length} từ`,
      });
      return;
    }
    this.guesses.set([]);
    this.current.set('');
    this.hinted.set(false);
    this.state.set('play');
    this.round.update((v) => v + 1);
  }
}
