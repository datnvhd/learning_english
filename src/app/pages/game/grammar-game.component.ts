/**
 * grammar-game.component.ts – Trò chơi "Thử thách ngữ pháp" (3 mạng).
 * Điền từ đúng vào chỗ trống; câu hỏi lấy ngẫu nhiên từ mọi bài ngữ pháp. Sai một câu mất một mạng
 * và được xem giải thích; đúng liên tiếp được nhân điểm. Hết 3 mạng hoặc hết 15 câu thì kết thúc.
 */
import { ChangeDetectionStrategy, Component, OnInit, computed, inject, output, signal } from '@angular/core';
import { SfxService } from '../../core/sfx.service';
import { sample, shuffle } from '../../core/text-utils';
import { GRAMMAR } from '../../data/grammar';
import { IconComponent } from '../../theme/icon.component';
import { GameResult } from './game.model';

const LIVES = 3;
const QUESTIONS = 15;

interface GrammarQ {
  lesson: string;
  text: string;
  answer: string;
  options: string[];
  explain: string;
}

/** Toàn bộ câu hỏi điền chỗ trống của các bài ngữ pháp */
export function grammarQuestions(): GrammarQ[] {
  return GRAMMAR.flatMap((g) =>
    g.quiz.map((q) => ({ lesson: g.title, text: q[0], answer: q[1], options: q.slice(1, -1), explain: q[q.length - 1] })),
  );
}

@Component({
  selector: 'app-grammar-game',
  imports: [IconComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="hud">
      <span class="lives" [attr.aria-label]="'Còn ' + lives() + ' mạng'">
        @for (l of hearts; track l) { <app-icon name="heart" [class.lost]="l >= lives()" /> }
      </span>
      <span><app-icon name="star" class="st" /> <b>{{ score() }}</b></span>
      <span class="combo" [class.hot]="streak() >= 3"><app-icon name="flame" /> x{{ multiplier() }}</span>
      <span>Câu <b>{{ index() + 1 }}/{{ bag().length }}</b></span>
    </div>
    <div class="bar gold"><i [style.width.%]="(index() / bag().length) * 100"></i></div>

    @if (q(); as cur) {
      <section class="card box" [class.shake]="shake()">
        <span class="tag blue">{{ cur.lesson }}</span>
        <h2 class="sent">
          @for (part of parts(); track $index; let first = $first) {
            @if (!first) { <span class="gap" [class.ok]="picked() !== null && picked() === cur.answer" [class.no]="picked() !== null && picked() !== cur.answer">{{ picked() === null ? '' : cur.answer }}</span> }{{ part }}
          }
        </h2>
        <div class="opts">
          @for (o of options(); track o) {
            <button type="button" class="opt" [class.ok]="picked() !== null && o === cur.answer" [class.no]="picked() === o && o !== cur.answer"
                    [disabled]="picked() !== null" (click)="answer(o)">{{ o }}</button>
          }
        </div>
        @if (picked() !== null) {
          <div class="exp" [class.ok]="picked() === cur.answer">
            <app-icon [name]="picked() === cur.answer ? 'circle-check' : 'bulb'" />
            <p>{{ cur.explain }}</p>
          </div>
          <button class="btn btn-primary" type="button" (click)="next()">{{ over() ? 'Xem kết quả' : 'Tiếp tục' }} <app-icon name="arrow-right" /></button>
        }
      </section>
    }
  `,
  styles: `
    .hud { display: flex; justify-content: space-around; align-items: center; background: var(--white); border-radius: 99px; padding: 8px 12px; box-shadow: var(--shadow-sm); margin-bottom: 10px; }
    .hud span { display: inline-flex; align-items: center; gap: 6px; }
    .hud app-icon { width: 18px; height: 18px; }
    .st { color: var(--sun-500); }
    .lives app-icon { width: 22px; height: 22px; color: var(--coral-500); transition: color var(--motion-base), transform var(--motion-base); }
    .lives app-icon ::ng-deep svg { fill: currentColor; }
    .lives app-icon.lost { color: var(--slate-300); transform: scale(0.85); }
    .combo.hot { color: var(--tangerine-600); }
    .bar { margin-bottom: 12px; }
    .box { display: flex; flex-direction: column; align-items: center; gap: 14px; padding: 20px 16px; text-align: center; }
    .sent { font-size: 1.5rem; line-height: 1.6; color: var(--ink); }
    .gap { display: inline-block; min-width: 72px; padding: 0 8px; margin: 0 4px; border-bottom: 3px solid var(--sky-300); color: var(--primary-dark); vertical-align: baseline; min-height: 1.3em; }
    .gap.ok { border-color: var(--good); color: var(--good-dark); }
    .gap.no { border-color: var(--bad); color: var(--good-dark); }
    .opts { display: grid; grid-template-columns: 1fr 1fr; gap: 8px; width: 100%; max-width: 520px; }
    .opt { padding: 12px 14px; border-radius: var(--radius-md); border: 2px solid var(--line); background: var(--white); font-size: 1.05rem; font-weight: 600; transition: border-color var(--motion-fast), background var(--motion-fast); }
    .opt:hover:not(:disabled) { border-color: var(--sky-300); background: var(--primary-soft); }
    .opt.ok { background: var(--good-soft); border-color: var(--good); }
    .opt.no { background: var(--bad-soft); border-color: var(--bad); }
    .exp { display: flex; align-items: flex-start; gap: 8px; text-align: left; width: 100%; max-width: 520px; padding: 10px 14px; border-radius: var(--radius-md); background: var(--sun-100); color: var(--sun-700); }
    .exp.ok { background: var(--good-soft); color: var(--good-dark); }
    .exp app-icon { width: 20px; height: 20px; flex: none; margin-top: 2px; }
    .shake { animation: gqshake 0.35s; }
    @keyframes gqshake { 25% { transform: translateX(-6px); } 75% { transform: translateX(6px); } }
    @media (max-width: 420px) { .opts { grid-template-columns: 1fr; } .sent { font-size: 1.25rem; } }
  `,
})
export class GrammarGameComponent implements OnInit {
  private readonly sfx = inject(SfxService);

  readonly finished = output<GameResult>();

  protected readonly hearts = Array.from({ length: LIVES }, (_, i) => i);
  protected readonly bag = signal<GrammarQ[]>([]);
  protected readonly index = signal(0);
  protected readonly lives = signal(LIVES);
  protected readonly score = signal(0);
  protected readonly streak = signal(0);
  protected readonly picked = signal<string | null>(null);
  protected readonly shake = signal(false);
  protected readonly options = signal<string[]>([]);
  private right = 0;

  protected readonly q = computed<GrammarQ | undefined>(() => this.bag()[this.index()]);
  /** Câu hỏi tách tại chỗ trống để chèn ô đáp án */
  protected readonly parts = computed(() => (this.q()?.text ?? '').split(/_{3,}/));
  protected readonly multiplier = computed(() => 1 + Math.floor(this.streak() / 3));
  /** Ván kết thúc sau câu này (hết mạng hoặc hết câu) */
  protected readonly over = computed(() => this.lives() <= 0 || this.index() >= this.bag().length - 1);

  ngOnInit(): void {
    this.bag.set(sample(grammarQuestions(), QUESTIONS));
    this.deal();
  }

  private deal(): void {
    this.options.set(shuffle(this.q()?.options ?? []));
    this.picked.set(null);
  }

  protected answer(option: string): void {
    const cur = this.q();
    if (!cur || this.picked() !== null) return;
    this.picked.set(option);
    if (option === cur.answer) {
      this.sfx.correct();
      this.score.update((v) => v + 10 * this.multiplier());
      this.streak.update((v) => v + 1);
      this.right++;
    } else {
      this.sfx.wrong();
      this.streak.set(0);
      this.lives.update((v) => v - 1);
      this.shake.set(true);
      setTimeout(() => this.shake.set(false), 350);
    }
  }

  protected next(): void {
    if (this.over()) {
      // Thưởng 10 điểm cho mỗi mạng còn lại
      const score = this.score() + this.lives() * 10;
      this.finished.emit({
        score, xp: 6 + Math.round(score / 10), correctIds: [],
        label: `${this.right}/${this.index() + 1} câu đúng · còn ${Math.max(0, this.lives())} mạng`,
      });
      return;
    }
    this.index.update((v) => v + 1);
    this.deal();
  }
}
