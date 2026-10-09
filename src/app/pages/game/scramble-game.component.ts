/**
 * scramble-game.component.ts – Trò chơi "Xếp chữ": nhìn nghĩa tiếng Việt, xếp các chữ cái bị xáo trộn thành từ đúng.
 * Có gợi ý (hiện thêm một chữ, trừ điểm), nghe phát âm và bỏ qua.
 */
import { ChangeDetectionStrategy, Component, OnInit, computed, inject, input, output, signal } from '@angular/core';
import { SfxService } from '../../core/sfx.service';
import { SpeechService } from '../../core/speech.service';
import { shuffle } from '../../core/text-utils';
import { Word } from '../../models/vocab.model';
import { GameResult } from './game.model';

@Component({
  selector: 'app-scramble-game',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="hud">
      <span>Từ <b>{{ index() + 1 }}/{{ words().length }}</b></span>
      <span>⭐ <b>{{ score() }}</b></span>
    </div>

    @if (word(); as w) {
      <section class="card box" [class.shake]="shake()">
        <p class="pos">({{ w.pos }})</p>
        <h2 class="vi">{{ w.vi }}</h2>
        <button class="icon-btn" type="button" (click)="say()" aria-label="Nghe phát âm">🔊</button>

        <div class="slots">
          @for (ch of slots(); track $index) {
            <button type="button" class="slot" [class.filled]="!!ch" [class.hint]="hinted().includes($index)" (click)="removeAt($index)">{{ ch }}</button>
          }
        </div>

        <div class="pool">
          @for (t of tiles(); track t.i) {
            <button type="button" class="tile" [disabled]="used().includes(t.i)" (click)="pick(t.i)">{{ t.ch }}</button>
          }
        </div>

        <div class="row acts">
          <button class="btn btn-ghost btn-sm" type="button" (click)="clear()">↺ Xóa</button>
          <button class="btn btn-soft btn-sm" type="button" (click)="hint()">💡 Gợi ý (−1)</button>
          <button class="btn btn-ghost btn-sm" type="button" (click)="skip()">Bỏ qua</button>
        </div>
        @if (solved()) { <p class="ok">✅ Chính xác: <b>{{ w.word }}</b> /{{ w.ipa }}/</p> }
      </section>
    }
  `,
  styles: `
    .hud { display: flex; justify-content: space-around; background: var(--white); border-radius: 99px; padding: 8px 12px; box-shadow: var(--shadow-sm); margin-bottom: 12px; }
    .box { display: flex; flex-direction: column; align-items: center; gap: 10px; padding: 18px 14px; text-align: center; }
    .pos { color: var(--purple); }
    .vi { font-size: 1.7rem; color: var(--primary-dark); }
    .slots, .pool { display: flex; flex-wrap: wrap; gap: 6px; justify-content: center; }
    .slot { width: 40px; height: 48px; border-radius: 10px; border: 2px dashed var(--sky-300); background: var(--slate-50); font-family: var(--font-head); font-size: 1.4rem; text-transform: uppercase; color: var(--primary-dark); }
    .slot.filled { border-style: solid; background: var(--white); }
    .slot.hint { background: var(--sand-100); border-color: var(--accent); }
    .tile { width: 44px; height: 48px; border-radius: 12px; background: var(--white); border: 2px solid var(--line); box-shadow: 0 3px 0 var(--line); font-family: var(--font-head); font-size: 1.4rem; text-transform: uppercase; }
    .tile:disabled { opacity: 0.25; box-shadow: none; }
    .tile:active:not(:disabled) { transform: translateY(2px); box-shadow: none; }
    .acts { flex-wrap: wrap; justify-content: center; }
    .ok { color: var(--good); }
  `,
})
export class ScrambleGameComponent implements OnInit {
  private readonly speech = inject(SpeechService);
  private readonly sfx = inject(SfxService);

  /** Danh sách từ (chỉ từ đơn) cho ván chơi */
  readonly words = input.required<Word[]>();
  readonly finished = output<GameResult>();

  protected readonly index = signal(0);
  protected readonly score = signal(0);
  protected readonly slots = signal<string[]>([]);
  protected readonly used = signal<number[]>([]);
  protected readonly tiles = signal<{ ch: string; i: number }[]>([]);
  protected readonly hinted = signal<number[]>([]);
  protected readonly shake = signal(false);
  protected readonly solved = signal(false);
  protected readonly word = computed(() => this.words()[this.index()]);

  private hintsUsed = 0;
  private attempts = 0;
  private readonly perfect: string[] = [];

  ngOnInit(): void {
    this.load();
  }

  /** Chuẩn bị các ô và chữ cái xáo trộn cho từ hiện tại */
  private load(): void {
    const w = this.word();
    if (!w) return;
    const letters = w.word.toLowerCase().split('');
    let mixed = shuffle(letters.map((ch, i) => ({ ch, i })));
    for (let k = 0; k < 5 && mixed.map((m) => m.ch).join('') === w.word.toLowerCase(); k++) mixed = shuffle(mixed);
    this.tiles.set(mixed);
    this.slots.set(letters.map(() => ''));
    this.used.set([]);
    this.hinted.set([]);
    this.solved.set(false);
    this.hintsUsed = 0;
    this.attempts = 0;
    setTimeout(() => this.say(), 250);
  }

  protected say(): void {
    const w = this.word();
    if (w) void this.speech.speakEn(w.word);
  }

  /** Thêm một chữ cái vào ô trống đầu tiên */
  protected pick(tileIndex: number): void {
    if (this.solved()) return;
    const s = [...this.slots()];
    const empty = s.findIndex((c) => !c);
    if (empty < 0) return;
    s[empty] = this.tiles().find((t) => t.i === tileIndex)!.ch;
    this.slots.set(s);
    this.used.update((u) => [...u, tileIndex]);
    this.sfx.tap();
    if (s.every((c) => c)) this.check();
  }

  /** Bấm vào một ô đã điền để bỏ chữ đó ra (trừ ô gợi ý) */
  protected removeAt(slot: number): void {
    if (this.solved() || this.hinted().includes(slot) || !this.slots()[slot]) return;
    const s = [...this.slots()];
    const ch = s[slot];
    s[slot] = '';
    this.slots.set(s);
    const tile = this.tiles().find((t) => t.ch === ch && this.used().includes(t.i));
    if (tile) this.used.update((u) => u.filter((x) => x !== tile.i));
  }

  protected clear(): void {
    if (this.solved()) return;
    const keep = this.hinted();
    const s = this.slots().map((c, i) => (keep.includes(i) ? c : ''));
    this.slots.set(s);
    // giữ lại các chữ đã dùng cho ô gợi ý
    const stillUsed: number[] = [];
    for (const i of keep) {
      const t = this.tiles().find((x) => x.ch === s[i] && !stillUsed.includes(x.i));
      if (t) stillUsed.push(t.i);
    }
    this.used.set(stillUsed);
  }

  /** Gợi ý: điền đúng chữ cái tiếp theo (mất 1 điểm của từ này) */
  protected hint(): void {
    if (this.solved()) return;
    const target = this.word().word.toLowerCase();
    this.clear();
    const s = [...this.slots()];
    const next = s.findIndex((c, i) => !c && !this.hinted().includes(i));
    if (next < 0) return;
    const ch = target[next];
    const tile = this.tiles().find((t) => t.ch === ch && !this.used().includes(t.i));
    if (!tile) return;
    s[next] = ch;
    this.slots.set(s);
    this.used.update((u) => [...u, tile.i]);
    this.hinted.update((h) => [...h, next]);
    this.hintsUsed++;
    if (s.every((c) => c)) this.check();
  }

  private check(): void {
    const w = this.word();
    if (this.slots().join('') === w.word.toLowerCase()) {
      this.solved.set(true);
      this.sfx.correct();
      const pts = Math.max(1, 3 - this.hintsUsed - (this.attempts > 0 ? 1 : 0));
      this.score.update((v) => v + pts);
      if (this.hintsUsed === 0 && this.attempts === 0) this.perfect.push(w.id);
      this.say();
      setTimeout(() => this.next(), 1300);
    } else {
      this.attempts++;
      this.sfx.wrong();
      this.shake.set(true);
      setTimeout(() => {
        this.shake.set(false);
        this.clear();
      }, 450);
    }
  }

  protected skip(): void {
    if (this.solved()) return;
    this.next();
  }

  private next(): void {
    if (this.index() + 1 >= this.words().length) {
      const score = this.score();
      this.finished.emit({ score, xp: 8 + score * 2, correctIds: this.perfect, label: `${score} điểm · ${this.perfect.length} từ không cần gợi ý` });
      return;
    }
    this.index.update((i) => i + 1);
    this.load();
  }
}
