/**
 * game.page.ts – Trang chứa các trò chơi mini: /game/:type/:topic  (type = match | scramble | speed).
 *
 * Nạp từ vựng của chủ đề (hoặc tất cả), chọn từ phù hợp cho từng trò chơi, hiển thị component trò chơi,
 * sau đó ghi nhận điểm/XP/kỷ lục vào ProgressService và hiện màn hình kết thúc kèm pháo giấy.
 */
import { ChangeDetectionStrategy, Component, computed, effect, inject, signal, untracked, viewChild } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { combineLatest, map } from 'rxjs';
import { ProgressService } from '../../core/progress.service';
import { SfxService } from '../../core/sfx.service';
import { SpeechService } from '../../core/speech.service';
import { dayKey, sample } from '../../core/text-utils';
import { VocabService } from '../../core/vocab.service';
import { TopicId } from '../../models/content.model';
import { Word } from '../../models/vocab.model';
import { BongComponent } from '../../shared/bong.component';
import { ConfettiComponent } from '../../shared/confetti.component';
import { DAILY_BONUS_XP, GAME_INFO, GameResult, GameType } from './game.model';
import { GuessGameComponent } from './guess-game.component';
import { SentenceGameComponent, sentenceTiles } from './sentence-game.component';
import { GrammarGameComponent } from './grammar-game.component';
import { MatchGameComponent } from './match-game.component';
import { ScrambleGameComponent } from './scramble-game.component';
import { SpeedGameComponent } from './speed-game.component';
import { PictureGameComponent } from './picture-game.component';
import { IconComponent } from '../../theme/icon.component';
import { hasPhoto } from '../../core/photos';

@Component({
  selector: 'app-game',
  imports: [RouterLink, BongComponent, ConfettiComponent, MatchGameComponent, ScrambleGameComponent, SpeedGameComponent, PictureGameComponent, GuessGameComponent, SentenceGameComponent, GrammarGameComponent, IconComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <main class="page no-nav stack">
      <header class="head">
        <button class="icon-btn" type="button" (click)="quit()" aria-label="Thoát"><app-icon name="x" /></button>
        <h1 class="title"><app-icon [name]="info().ico" /> {{ info().title }}</h1>
        <span class="spacer"></span>
        <span class="best"><app-icon name="trophy" /> {{ best() }}</span>
      </header>

      @switch (state()) {
        @case ('loading') { <div class="card center"><app-bong mood="write" [size]="90" message="Đang chuẩn bị trò chơi..." /></div> }
        @case ('empty') { <div class="card center"><app-bong mood="hello" [size]="90" message="Chưa đủ từ để chơi trò này. Bạn chọn chủ đề khác nhé!" /><a class="btn btn-primary" routerLink="/games">Quay lại</a></div> }
        @case ('play') {
          @switch (type()) {
            @case ('match') { <app-match-game [words]="words()" (finished)="onFinished($event)" /> }
            @case ('scramble') { <app-scramble-game [words]="words()" (finished)="onFinished($event)" /> }
            @case ('picture') { <app-picture-game [words]="words()" (finished)="onFinished($event)" /> }
            @case ('guess') { <app-guess-game [words]="words()" (finished)="onFinished($event)" /> }
            @case ('sentence') { <app-sentence-game [words]="words()" (finished)="onFinished($event)" /> }
            @case ('grammar') { <app-grammar-game (finished)="onFinished($event)" /> }
            @default { <app-speed-game [words]="words()" (finished)="onFinished($event)" /> }
          }
        }
        @case ('over') {
          @if (result(); as r) {
            <section class="card over center fade-up">
              <app-bong [mood]="record() ? 'cheer' : 'hello'" [size]="100" />
              <h2 class="ovt">@if (record()) { <app-icon name="trophy" /> } {{ record() ? 'Kỷ lục mới!' : 'Hoàn thành!' }}</h2>
              <div class="big">{{ r.score }}<small> điểm</small></div>
              <p class="muted">{{ r.label }}</p>
              <span class="pill">+{{ r.xp }} XP</span>
              @if (bonus()) { <span class="pill daily"><app-icon name="gift" /> +{{ bonus() }} XP thưởng Thử thách hôm nay</span> }
              <div class="row acts">
                <button class="btn btn-accent" type="button" (click)="start()"><app-icon name="refresh" /> Chơi lại</button>
                <a class="btn btn-soft" routerLink="/games">Xong</a>
              </div>
            </section>
          }
        }
      }
    </main>
    <app-confetti />
  `,
  styles: `
    .head { display: flex; align-items: center; gap: 10px; }
    .title { display: flex; align-items: center; gap: 8px; font-size: 1.25rem; background: var(--white); padding: 6px 18px 6px 12px; border-radius: 999px; box-shadow: var(--shadow-sm); color: var(--primary-dark); }
    .best { display: inline-flex; align-items: center; gap: 6px; font-family: var(--font-head); color: var(--ink-soft); }
    .best app-icon { width: 18px; height: 18px; color: var(--sun-500); }
    .ovt { display: flex; align-items: center; justify-content: center; gap: 8px; }
    .ovt app-icon { width: 28px; height: 28px; color: var(--sun-500); }
    .over { display: flex; flex-direction: column; align-items: center; gap: 8px; padding: 20px 14px; }
    .over h2 { color: var(--primary-dark); font-size: 1.6rem; }
    .big { font-family: var(--font-head); font-size: 3.4rem; color: var(--primary); line-height: 1; }
    .big small { font-size: 1rem; color: var(--ink-soft); }
    .pill { background: var(--sun-100); color: var(--sun-700); padding: 5px 16px; border-radius: 99px; }
    .pill.daily { display: inline-flex; align-items: center; gap: 6px; background: var(--good-soft); color: var(--good-dark); font-weight: 700; }
    .pill.daily app-icon { width: 16px; height: 16px; }
    .acts { margin-top: 8px; }
  `,
})
export class GamePage {
  private readonly route = inject(ActivatedRoute);
  private readonly router = inject(Router);
  private readonly vocab = inject(VocabService);
  private readonly progress = inject(ProgressService);
  private readonly speech = inject(SpeechService);
  private readonly sfx = inject(SfxService);
  private readonly confetti = viewChild(ConfettiComponent);

  private readonly params = toSignal(
    combineLatest([this.route.paramMap, this.route.queryParamMap]).pipe(map(([p, q]) => ({ type: (p.get('type') ?? 'match') as GameType, topic: (p.get('topic') ?? 'all') as TopicId | 'all', daily: q.get('daily') === '1' }))),
    { requireSync: true },
  );

  protected readonly type = computed(() => this.params().type);
  protected readonly info = computed(() => GAME_INFO[this.type()]);
  protected readonly state = signal<'loading' | 'empty' | 'play' | 'over'>('loading');
  protected readonly words = signal<Word[]>([]);
  protected readonly result = signal<GameResult | null>(null);
  protected readonly record = signal(false);
  /** XP thưởng của "Thử thách hôm nay" vừa nhận (0 nếu không có) */
  protected readonly bonus = signal(0);
  protected readonly best = computed(() => {
    this.progress.state();
    return this.progress.gameBest(this.type(), this.params().topic);
  });

  constructor() {
    effect(() => {
      this.params();
      untracked(() => void this.start());
    });
  }

  /** Nạp từ và bắt đầu ván mới */
  protected async start(): Promise<void> {
    this.state.set('loading');
    this.result.set(null);
    this.bonus.set(0);
    const { type, topic } = this.params();
    // Thử thách ngữ pháp dùng câu hỏi của các bài ngữ pháp, không cần nạp từ vựng
    if (type === 'grammar') {
      this.words.set([]);
      this.state.set('play');
      void this.speech.bong('gameStart');
      return;
    }
    const topics = await this.vocab.loadMany(topic === 'all' ? 'all' : [topic]);
    const pool = topics.flatMap((t) => t.words);
    let chosen: Word[];
    if (type === 'match') chosen = sample(pool.filter((w) => w.word.length <= 12 && w.vi.length <= 22), 8);
    else if (type === 'picture') chosen = pool.filter((w) => hasPhoto(w.id));
    else if (type === 'scramble') chosen = sample(pool.filter((w) => /^[a-z]{4,9}$/i.test(w.word)), 8);
    else if (type === 'guess') chosen = pool.filter((w) => /^[a-z]{4,6}$/.test(w.word));
    else if (type === 'sentence') chosen = sample(pool.filter((w) => w.exVi && w.ex.length <= 60 && sentenceTiles(w.ex).length >= 4 && sentenceTiles(w.ex).length <= 9), 8);
    else chosen = pool.filter((w) => w.vi.length <= 40);
    this.words.set(chosen);
    this.state.set(chosen.length >= (type === 'speed' ? 12 : type === 'picture' ? 8 : 4) ? 'play' : 'empty');
    if (this.state() === 'play') void this.speech.bong('gameStart');
  }

  /** Ván chơi kết thúc: lưu điểm, XP, kỷ lục */
  protected onFinished(r: GameResult): void {
    const { type, topic, daily } = this.params();
    const record = this.progress.recordGame(type, topic, r.score, r.xp, r.correctIds);
    // Thử thách hôm nay: thưởng thêm XP một lần mỗi ngày
    if (daily && !this.progress.gameBest('daily', dayKey())) {
      this.progress.recordGame('daily', dayKey(), 1, DAILY_BONUS_XP, []);
      this.bonus.set(DAILY_BONUS_XP);
    }
    this.record.set(record);
    this.result.set(r);
    this.state.set('over');
    this.sfx.win();
    this.confetti()?.fire(record ? 220 : 110);
    void this.speech.bong(record ? 'gameWin' : 'resultGood');
  }

  protected quit(): void {
    this.router.navigateByUrl('/games');
  }
}
