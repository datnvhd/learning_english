/**
 * games.page.ts – Trang "Trò chơi" (/games): nơi tập trung mọi trò chơi từ vựng và ngữ pháp.
 *  - Thử thách hôm nay: mỗi ngày một trò, hoàn thành được thưởng XP (một lần mỗi ngày).
 *  - Chọn chủ đề từ vựng rồi chọn trò chơi; mỗi trò có kỷ lục riêng theo chủ đề.
 *  - Cột bên: bảng kỷ lục và cách tính điểm.
 */
import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ProgressService } from '../../core/progress.service';
import { dayKey } from '../../core/text-utils';
import { TOPICS } from '../../data/topics';
import { TopicId } from '../../models/content.model';
import { IconComponent } from '../../theme/icon.component';
import { DAILY_BONUS_XP, GAME_INFO, GAME_TYPES, GameType, dailyGame } from '../game/game.model';

/** Mẹo ngắn cho từng trò chơi (hiện ở cột bên) */
const RULES: { game: GameType; text: string }[] = [
  { game: 'guess', text: 'Đoán càng ít lượt càng nhiều điểm (tối đa 100 điểm mỗi từ). Xem gợi ý nghĩa bị trừ 20 điểm.' },
  { game: 'sentence', text: 'Đúng ngay lần đầu được 15 điểm, đúng liên tiếp được cộng thêm. Sai hai lần sẽ hiện đáp án.' },
  { game: 'grammar', text: 'Mỗi câu đúng 10 điểm, cứ 3 câu đúng liên tiếp thì hệ số tăng 1. Mỗi mạng còn lại +10 điểm.' },
  { game: 'speed', text: 'Bạn có 60 giây. Đúng liên tiếp để nhân điểm, sai thì hệ số trở về 1.' },
];

@Component({
  selector: 'app-games',
  imports: [IconComponent, RouterLink],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <main class="page stack">
      <div class="crumbs"><app-icon name="school" /> <span>Trò chơi</span></div>

      <header class="card page-head">
        <span class="tile-ic lg" style="--c: var(--tangerine-500)"><app-icon name="device-gamepad-2" /></span>
        <div class="ph-text"><h1>Trò chơi</h1><p>Chơi mà học: ôn từ vựng và ngữ pháp qua 7 trò chơi ngắn, phá kỷ lục của chính bạn mỗi ngày.</p></div>
        <div class="stat"><span class="tile-ic" style="--c: var(--sun-500)"><app-icon name="trophy" /></span><span><b>{{ played() }}/{{ games.length }}</b><small>trò đã có kỷ lục</small></span></div>
        <div class="stat"><span class="tile-ic" style="--c: var(--leaf-500)"><app-icon name="star" /></span><span><b>{{ todayXp() }}</b><small>XP hôm nay</small></span></div>
      </header>

      <div class="cols">
        <div class="stack">
          <!-- Thử thách hôm nay -->
          <a class="card daily" [class.done]="dailyDone()" [routerLink]="['/game', daily, scopeOf(daily)]" [queryParams]="{ daily: 1 }" [style.--c]="info[daily].color">
            <span class="tile-ic lg"><app-icon [name]="info[daily].ico" /></span>
            <div class="tx">
              <small class="dl"><app-icon name="flame" /> Thử thách hôm nay</small>
              <b>{{ info[daily].title }}</b>
              <small class="muted">{{ info[daily].desc }}</small>
            </div>
            @if (dailyDone()) {
              <span class="tag green"><app-icon name="circle-check" /> Đã hoàn thành hôm nay</span>
            } @else {
              <span class="tag amber"><app-icon name="gift" /> +{{ bonus }} XP thưởng</span>
              <span class="btn btn-primary">Chơi ngay <app-icon name="arrow-right" /></span>
            }
          </a>

          <!-- Chọn chủ đề từ vựng -->
          <section class="card scope">
            <b>Chủ đề</b>
            <div class="chips">
              <button type="button" class="chip" [class.active]="scope() === 'all'" (click)="scope.set('all')">Tất cả</button>
              @for (t of topics; track t.id) {
                <button type="button" class="chip" [class.active]="scope() === t.id" (click)="scope.set(t.id)">{{ t.title }}</button>
              }
            </div>
          </section>

          <!-- Danh sách trò chơi -->
          <section class="grid">
            @for (g of games; track g) {
              <a class="card game" [routerLink]="['/game', g, scopeOf(g)]" [style.--c]="info[g].color">
                <div class="gh">
                  <span class="tile-ic lg"><app-icon [name]="info[g].ico" /></span>
                  <span class="kind">{{ info[g].kind }}</span>
                </div>
                <h2>{{ info[g].title }}</h2>
                <p class="muted">{{ info[g].desc }}</p>
                <div class="gf">
                  <small class="rec"><app-icon name="trophy" /> Kỷ lục: <b>{{ best(g) }}</b></small>
                  <span class="btn btn-soft btn-sm">Chơi <app-icon name="player-play" /></span>
                </div>
              </a>
            }
          </section>
        </div>

        <aside class="side">
          <section class="card">
            <div class="card-head"><app-icon name="trophy" /><h3>Bảng kỷ lục</h3></div>
            @for (g of ranked(); track g.game) {
              <a class="list-row" [routerLink]="['/game', g.game, scopeOf(g.game)]">
                <span class="tile-ic sm" [style.--c]="info[g.game].color"><app-icon [name]="info[g.game].ico" /></span>
                <span class="lr-text"><b>{{ info[g.game].title }}</b><small>{{ g.best ? 'Điểm cao nhất của bạn' : 'Chưa chơi' }}</small></span>
                <b class="pts" [class.zero]="!g.best">{{ g.best }}</b>
              </a>
            }
            <p class="muted note">Kỷ lục tính riêng cho chủ đề đang chọn.</p>
          </section>

          <section class="card">
            <div class="card-head"><app-icon name="bulb" /><h3>Cách tính điểm</h3></div>
            @for (r of rules; track r.game) {
              <div class="rule"><span class="tile-ic sm" [style.--c]="info[r.game].color"><app-icon [name]="info[r.game].ico" /></span><p><b>{{ info[r.game].title }}.</b> {{ r.text }}</p></div>
            }
            <p class="muted note">Mỗi ván đều được cộng XP; từ trả lời đúng ngay lần đầu được tính vào trí nhớ dài hạn.</p>
          </section>
        </aside>
      </div>
    </main>
  `,
  styles: `
    .daily { display: flex; align-items: center; flex-wrap: wrap; gap: var(--space-3) var(--space-4); border-color: color-mix(in srgb, var(--c) 30%, var(--white)); background: linear-gradient(100deg, color-mix(in srgb, var(--c) 9%, var(--white)), var(--white) 70%); transition: box-shadow var(--motion-fast), transform var(--motion-fast); }
    .daily:hover { box-shadow: var(--shadow-md); transform: translateY(-1px); }
    .daily .tx { flex: 1; min-width: 200px; display: flex; flex-direction: column; gap: 2px; }
    .daily .tx b { font-size: var(--fs-xl); }
    .dl { display: inline-flex; align-items: center; gap: 4px; color: var(--tangerine-600); font-weight: 700; text-transform: uppercase; letter-spacing: 0.04em; font-size: 0.72rem; }
    .dl app-icon { width: 14px; height: 14px; }
    .daily .tag { display: inline-flex; align-items: center; gap: 4px; }
    .daily .tag app-icon { width: 14px; height: 14px; }
    /* Ô icon lấy màu riêng của từng trò chơi (mặc định .tile-ic tự đặt --c về màu chính) */
    .daily .tile-ic, .game .tile-ic { --c: inherit; }
    .scope { display: flex; align-items: center; gap: var(--space-3); padding: var(--space-3) var(--space-4); }
    .scope .chips { flex: 1; flex-wrap: wrap; overflow: visible; }
    .grid { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: var(--space-3); }
    .game { display: flex; flex-direction: column; gap: var(--space-2); border-color: color-mix(in srgb, var(--c) 22%, var(--white)); background: linear-gradient(180deg, color-mix(in srgb, var(--c) 6%, var(--white)), var(--white) 60%); transition: box-shadow var(--motion-fast), transform var(--motion-fast), border-color var(--motion-fast); }
    .game:hover { box-shadow: var(--shadow-md); transform: translateY(-2px); border-color: var(--c); }
    .gh { display: flex; align-items: flex-start; justify-content: space-between; }
    .game h2 { font-size: var(--fs-lg); margin-top: var(--space-1); }
    .game p { font-size: var(--fs-sm); line-height: 1.45; flex: 1; }
    .kind { font-size: 0.68rem; font-weight: 700; padding: 2px 8px; border-radius: 99px; background: color-mix(in srgb, var(--c) 12%, var(--white)); color: var(--c); white-space: nowrap; }
    .gf { display: flex; align-items: center; justify-content: space-between; gap: var(--space-2); padding-top: var(--space-2); border-top: 1px solid var(--line); }
    .rec { display: inline-flex; align-items: center; gap: 4px; color: var(--sun-600); font-weight: 600; }
    .rec app-icon { width: 14px; height: 14px; }
    .rec b { color: var(--ink); }
    .gf .btn app-icon { width: 14px; height: 14px; }
    .pts { font-family: var(--font-head); font-size: var(--fs-lg); color: var(--sun-600); }
    .pts.zero { color: var(--ink-mute); }
    .note { font-size: var(--fs-xs); margin-top: var(--space-2); }
    .rule { display: flex; align-items: flex-start; gap: var(--space-2); padding: var(--space-2) 0; border-top: 1px solid var(--line); }
    .rule:first-of-type { border-top: 0; }
    .rule p { font-size: var(--fs-sm); line-height: 1.45; color: var(--slate-600); }
    .rule b { color: var(--ink); }
    @media (max-width: 1500px) { .grid { grid-template-columns: repeat(2, minmax(0, 1fr)); } }
    @media (max-width: 760px) { .scope { flex-direction: column; align-items: flex-start; } }
    @media (max-width: 520px) { .grid { grid-template-columns: minmax(0, 1fr); } }
  `,
})
export class GamesPage {
  private readonly progress = inject(ProgressService);

  protected readonly games = GAME_TYPES;
  protected readonly info = GAME_INFO;
  protected readonly topics = TOPICS;
  protected readonly rules = RULES;
  protected readonly bonus = DAILY_BONUS_XP;
  /** Trò chơi của "Thử thách hôm nay" */
  protected readonly daily = dailyGame();

  /** Chủ đề từ vựng đang chọn */
  protected readonly scope = signal<TopicId | 'all'>('all');

  protected readonly dailyDone = computed(() => {
    this.progress.state();
    return this.progress.gameBest('daily', dayKey()) > 0;
  });
  protected readonly todayXp = computed(() => this.progress.today().xp);

  /** Kỷ lục từng trò trong chủ đề đang chọn, điểm cao xếp trước */
  protected readonly ranked = computed(() => {
    this.progress.state();
    return GAME_TYPES.map((game) => ({ game, best: this.progress.gameBest(game, this.scopeOf(game)) })).sort((a, b) => b.best - a.best);
  });
  /** Số trò đã có kỷ lục trong chủ đề đang chọn */
  protected readonly played = computed(() => this.ranked().filter((g) => g.best > 0).length);

  protected best(game: GameType): number {
    this.progress.state();
    return this.progress.gameBest(game, this.scopeOf(game));
  }

  /** Phạm vi từ của một trò chơi (thử thách ngữ pháp không theo chủ đề từ vựng) */
  protected scopeOf(game: GameType): string {
    return game === 'grammar' ? 'all' : this.scope();
  }
}
