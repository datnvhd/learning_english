/**
 * picture-game.component.ts – Trò chơi "Nghe và chọn ảnh": Bông đọc một từ, người chơi chạm vào bức ảnh đúng.
 * Rất hợp với trẻ nhỏ chưa đọc thạo. 10 lượt, mỗi lượt 4 ảnh thật (giấy phép CC0).
 * Đúng ngay lần đầu được 10 điểm, lần hai được 5 điểm.
 */
import { ChangeDetectionStrategy, Component, OnInit, inject, input, output, signal } from '@angular/core';
import { photoOf } from '../../core/photos';
import { SfxService } from '../../core/sfx.service';
import { SpeechService } from '../../core/speech.service';
import { sample, shuffle } from '../../core/text-utils';
import { UxService } from '../../core/ux.service';
import { Word } from '../../models/vocab.model';
import { IconComponent } from '../../theme/icon.component';
import { GameResult } from './game.model';

/** Số lượt mỗi ván */
const ROUNDS = 10;

interface Round {
  word: Word;
  options: Word[];
}

@Component({
  selector: 'app-picture-game',
  imports: [IconComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="hud">
      <span>Lượt <b>{{ index() + 1 }}/{{ rounds().length }}</b></span>
      <span><app-icon name="star" /> <b>{{ score() }}</b></span>
    </div>
    @if (round(); as r) {
      <section class="card ask">
        <button class="play" type="button" (click)="say()" aria-label="Nghe lại từ"><app-icon name="volume-2" /></button>
        <p class="muted">Nghe từ rồi chạm vào bức ảnh đúng</p>
        @if (revealed()) {
          <p class="word">{{ r.word.word }} <span class="muted">– {{ r.word.vi }}</span></p>
        }
      </section>
      <div class="grid">
        @for (o of r.options; track o.id) {
          <button type="button" class="pic" [class.ok]="revealed() && o.id === r.word.id" [class.no]="wrongIds().includes(o.id)"
                  [disabled]="revealed() || wrongIds().includes(o.id)" (click)="pick(o)" [attr.aria-label]="'Ảnh lựa chọn'">
            <img [src]="src(o)" alt="" />
            @if (revealed() && o.id === r.word.id) {
              <span class="badge"><app-icon name="check" [stroke]="3" /></span>
            }
          </button>
        }
      </div>
    }
  `,
  styles: `
    .hud { display: flex; justify-content: space-around; background: var(--surface); border-radius: var(--radius-pill); padding: var(--space-2) var(--space-3); box-shadow: var(--shadow-sm); margin-bottom: var(--space-3); }
    .hud app-icon { color: var(--accent-dark); }
    .ask { display: flex; flex-direction: column; align-items: center; gap: var(--space-2); text-align: center; }
    .play { width: 72px; height: 72px; border-radius: 50%; background: linear-gradient(180deg, var(--sky-400), var(--primary)); color: var(--white); box-shadow: 0 5px 0 var(--primary-dark); display: grid; place-items: center; }
    .play app-icon { width: 34px; height: 34px; }
    .play:active { transform: translateY(3px); box-shadow: 0 2px 0 var(--primary-dark); }
    .word { font-family: var(--font-head); font-size: var(--fs-xl); color: var(--primary-dark); }
    .grid { display: grid; grid-template-columns: 1fr 1fr; gap: var(--space-3); margin-top: var(--space-3); }
    .pic { position: relative; padding: 6px; border-radius: var(--radius-lg); background: var(--surface); border: 3px solid var(--line); box-shadow: var(--shadow-sm); transition: transform var(--motion-fast); }
    .pic:active:not(:disabled) { transform: scale(0.97); }
    .pic img { display: block; width: 100%; aspect-ratio: 4 / 3; object-fit: cover; border-radius: var(--radius-md); }
    .pic.ok { border-color: var(--good); background: var(--good-soft); }
    .pic.no { border-color: var(--bad); opacity: 0.55; animation: shake var(--motion-slow); }
    .badge { position: absolute; top: 12px; right: 12px; width: 34px; height: 34px; border-radius: 50%; background: var(--good); color: var(--white); display: grid; place-items: center; }
  `,
})
export class PictureGameComponent implements OnInit {
  private readonly speech = inject(SpeechService);
  private readonly sfx = inject(SfxService);
  private readonly ux = inject(UxService);

  /** Kho từ CÓ ẢNH để ra câu hỏi */
  readonly words = input.required<Word[]>();
  readonly finished = output<GameResult>();

  protected readonly rounds = signal<Round[]>([]);
  protected readonly index = signal(0);
  protected readonly score = signal(0);
  protected readonly revealed = signal(false);
  protected readonly wrongIds = signal<string[]>([]);
  private readonly perfect: string[] = [];

  protected round(): Round | undefined {
    return this.rounds()[this.index()];
  }

  ngOnInit(): void {
    const pool = this.words();
    const targets = sample(pool, Math.min(ROUNDS, pool.length));
    this.rounds.set(targets.map((word) => ({
      word,
      options: shuffle([word, ...sample(pool.filter((x) => x.id !== word.id && x.vi !== word.vi), 3)]),
    })));
    setTimeout(() => this.say(), 400);
  }

  protected src(w: Word): string {
    return photoOf(w.id)?.src ?? '';
  }

  protected say(): void {
    const r = this.round();
    if (r) void this.speech.speakEn(r.word.word);
  }

  protected pick(o: Word): void {
    const r = this.round();
    if (!r || this.revealed()) return;
    if (o.id === r.word.id) {
      const first = this.wrongIds().length === 0;
      this.score.update((v) => v + (first ? 10 : 5));
      if (first) this.perfect.push(r.word.id);
      this.revealed.set(true);
      this.sfx.correct();
      this.ux.haptic('good');
      void this.speech.speakEn(`${r.word.word}`);
      setTimeout(() => this.next(), 1400);
    } else {
      this.wrongIds.update((w) => [...w, o.id]);
      this.sfx.wrong();
      this.ux.haptic('bad');
    }
  }

  private next(): void {
    if (this.index() + 1 >= this.rounds().length) {
      const score = this.score();
      this.finished.emit({ score, xp: 8 + Math.round(score / 6), correctIds: this.perfect, label: `${this.perfect.length}/${this.rounds().length} ảnh đúng ngay lần đầu` });
      return;
    }
    this.index.update((i) => i + 1);
    this.revealed.set(false);
    this.wrongIds.set([]);
    setTimeout(() => this.say(), 300);
  }
}
