/**
 * practice.page.ts – Trang "Practice": luyện từng dạng bài theo chủ đề.
 *
 *  Tab:
 *  1. Luyện tập – chọn kỹ năng (Từ vựng, Nghe, Nói, Đọc, Viết) hoặc luyện tổng hợp, theo chủ đề.
 *  2. Kiểm tra  – bài kiểm tra TỔNG QUÁT (25 câu) và bài kiểm tra RIÊNG từng kỹ năng (20 câu); lịch sử điểm.
 *  3. Trò chơi  – 4 trò chơi từ vựng có kỷ lục.
 *  4. Ôn tập    – ôn các từ đến hạn theo phương pháp lặp lại ngắt quãng, ôn từ đã lưu, mức độ ghi nhớ.
 *  Cột phải: ngữ pháp, tra từ, từ cần ôn và lịch sử kiểm tra gần đây.
 */
import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { DatePipe } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ProgressService } from '../../core/progress.service';
import { SKILL_INFO, TOPICS, TOPIC_BY_ID } from '../../data/topics';
import { LANGUAGE_SKILLS, Skill, TopicId } from '../../models/content.model';
import { GAME_INFO, GameType } from '../game/game.model';
import { IconName } from '../../theme/icons';
import { IconComponent } from '../../theme/icon.component';

type Tab = 'practice' | 'test' | 'review' | 'games';

@Component({
  selector: 'app-practice',
  imports: [IconComponent, RouterLink, DatePipe],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <main class="page stack">
      <div class="crumbs"><app-icon name="school" /> <span>Practice</span></div>

      <header class="card page-head">
        <span class="tile-ic lg" style="--c: var(--grape-600)"><app-icon name="pencil" /></span>
        <div class="ph-text"><h1>Practice</h1><p>Luyện từng dạng bài theo chủ đề và mức độ khó. Mỗi lượt khoảng 10 câu, có đáp án và giải thích ngay.</p></div>
        <div class="stat"><span class="tile-ic" style="--c: var(--leaf-500)"><app-icon name="circle-check" /></span><span><b>{{ today().questions }}</b><small>câu đã làm hôm nay</small></span></div>
        <div class="stat"><span class="tile-ic" style="--c: var(--tangerine-500)"><app-icon name="refresh" /></span><span><b>{{ due() }}</b><small>từ cần ôn tập</small></span></div>
      </header>

      <nav class="tabs card flush" aria-label="Chế độ">
        @for (t of tabs; track t.id) {
          <button type="button" class="tab" [class.active]="tab() === t.id" (click)="tab.set(t.id)"><app-icon [name]="t.ico" /> {{ t.label }}</button>
        }
      </nav>

      <div class="cols">
        <div class="stack">
          <!-- Chọn phạm vi chủ đề (dùng cho Luyện tập, Kiểm tra, Trò chơi) -->
          @if (tab() !== 'review') {
            <section class="card scope">
              <b>Chủ đề</b>
              <div class="chips">
                <button type="button" class="chip" [class.active]="scope() === 'all'" (click)="scope.set('all')">Tất cả</button>
                @for (t of topics; track t.id) {
                  <button type="button" class="chip" [class.active]="scope() === t.id" (click)="scope.set(t.id)">{{ t.title }}</button>
                }
              </div>
            </section>
          }

          <!-- ===== LUYỆN TẬP ===== -->
          @if (tab() === 'practice') {
            <section class="card">
              <div class="card-head"><app-icon name="target" /><h2>Chọn dạng bài</h2></div>
              <div class="grid">
                @for (s of allSkills; track s) {
                  <a class="sk" [routerLink]="['/session/skill', scope()]" [queryParams]="{ skill: s }" [style.--c]="info[s].color">
                    <span class="tile-ic"><app-icon [name]="info[s].ico" /></span>
                    <div class="tx">
                      <b>{{ info[s].labelEn }} · {{ info[s].label }}</b>
                      <small class="muted">{{ info[s].hint }}</small>
                      <div class="pl"><div class="bar"><i [style.width.%]="score(s)" [style.background]="info[s].color"></i></div><small>{{ score(s) }}%</small></div>
                    </div>
                    <span class="btn btn-soft btn-sm">Luyện tập</span>
                  </a>
                }
                <a class="sk mixed" [routerLink]="['/session/mixed', scope()]" style="--c: var(--sun-500)">
                  <span class="tile-ic"><app-icon name="arrows-shuffle" /></span>
                  <div class="tx"><b>Luyện tập tổng hợp</b><small class="muted">3 câu mỗi kỹ năng Nghe – Nói – Đọc – Viết</small></div>
                  <span class="btn btn-soft btn-sm">Luyện tập</span>
                </a>
              </div>
            </section>
          }

          <!-- ===== KIỂM TRA ===== -->
          @if (tab() === 'test') {
            <a class="card general" [routerLink]="['/session/test', scope()]" [queryParams]="{ kind: 'all' }">
              <span class="tile-ic lg"><app-icon name="list-check" /></span>
              <div class="tx"><b>Kiểm tra tổng quát</b><small>25 câu: Từ vựng · Nghe · Nói · Đọc · Viết. Xem kết quả và đáp án ở cuối bài.</small></div>
              <span class="btn btn-ghost">Bắt đầu <app-icon name="arrow-right" /></span>
            </a>
            <section class="card">
              <div class="card-head"><app-icon name="list-check" /><h2>Kiểm tra theo kỹ năng</h2></div>
              <div class="grid">
                @for (s of allSkills; track s) {
                  <a class="sk" [routerLink]="['/session/test', scope()]" [queryParams]="{ kind: s }" [style.--c]="info[s].color">
                    <span class="tile-ic"><app-icon [name]="info[s].ico" /></span>
                    <div class="tx"><b>Kiểm tra {{ info[s].label.toLowerCase() }}</b><small class="muted">20 câu · {{ info[s].hint }}</small></div>
                    <span class="btn btn-soft btn-sm">Bắt đầu</span>
                  </a>
                }
              </div>
            </section>
          }

          <!-- ===== TRÒ CHƠI ===== -->
          @if (tab() === 'games') {
            <section class="card">
              <div class="card-head"><app-icon name="dice-5" /><h2>Trò chơi từ vựng</h2><small class="muted">Chơi mà học – phá kỷ lục của chính bạn</small></div>
              <div class="grid">
                @for (g of gameTypes; track g) {
                  <a class="sk" [routerLink]="['/game', g, scope()]" [style.--c]="gameInfo[g].color">
                    <span class="tile-ic"><app-icon [name]="gameInfo[g].ico" /></span>
                    <div class="tx"><b>{{ gameInfo[g].title }}</b><small class="muted">{{ gameInfo[g].desc }}</small><small class="rec"><app-icon name="trophy" /> Kỷ lục: {{ gameBest(g) }}</small></div>
                    <span class="btn btn-soft btn-sm">Chơi</span>
                  </a>
                }
              </div>
            </section>
          }

          <!-- ===== ÔN TẬP ===== -->
          @if (tab() === 'review') {
            <section class="card rv">
              <span class="tile-ic lg" style="--c: var(--tangerine-500)"><app-icon name="refresh" /></span>
              <div class="tx">
                <b>{{ due() > 0 ? 'Có ' + due() + ' từ cần ôn hôm nay' : 'Hôm nay bạn đã ôn hết rồi' }}</b>
                <small class="muted">Ôn đúng lúc theo phương pháp lặp lại ngắt quãng giúp nhớ lâu hơn.</small>
              </div>
              <a class="btn btn-primary" routerLink="/session/review/all" [class.disabled]="due() === 0" [attr.aria-disabled]="due() === 0"><app-icon name="refresh" /> Ôn {{ due() }} từ đến hạn</a>
              <a class="btn btn-soft" routerLink="/session/review/saved" [class.disabled]="saved() === 0" [attr.aria-disabled]="saved() === 0"><app-icon name="heart" /> Ôn {{ saved() }} từ yêu thích</a>
            </section>
            <section class="card">
              <div class="card-head"><app-icon name="brain" /><h2>Mức độ ghi nhớ</h2></div>
              <p class="muted small">Từ càng lên hộp cao thì càng nhớ lâu và càng ít phải ôn lại.</p>
              @for (b of boxes(); track b.box) {
                <div class="brow"><span>Hộp {{ b.box }}</span><div class="bar blue"><i [style.width.%]="b.percent"></i></div><b>{{ b.count }}</b></div>
              }
            </section>
          }
        </div>

        <aside class="side">
          <section class="card">
            <div class="card-head"><app-icon name="bolt" /><h3>Lối tắt</h3></div>
            <a class="list-row" routerLink="/grammar"><span class="tile-ic" style="--c: var(--grape-500)"><app-icon name="notebook" /></span><span class="lr-text"><b>Ngữ pháp</b><small>12 chủ điểm cốt lõi có bài luyện</small></span><app-icon name="chevron-right" class="chev" /></a>
            <a class="list-row" routerLink="/search"><span class="tile-ic"><app-icon name="search" /></span><span class="lr-text"><b>Tra từ</b><small>Tìm trong 3.600 từ, sổ tay từ đã lưu</small></span><app-icon name="chevron-right" class="chev" /></a>
            <a class="list-row" routerLink="/errors"><span class="tile-ic" style="--c: var(--coral-500)"><app-icon name="alert-triangle" /></span><span class="lr-text"><b>Error Review</b><small>{{ errorCount() }} câu sai cần xem lại</small></span><app-icon name="chevron-right" class="chev" /></a>
            <a class="list-row" routerLink="/mock"><span class="tile-ic" style="--c: var(--tangerine-500)"><app-icon name="file-text" /></span><span class="lr-text"><b>Mock Test</b><small>Thi thử IELTS / TOEIC có đồng hồ</small></span><app-icon name="chevron-right" class="chev" /></a>
          </section>

          <section class="card">
            <div class="card-head"><app-icon name="history" /><h3>Lịch sử kiểm tra</h3></div>
            @for (h of history(); track h.id) {
              <div class="list-row">
                <span class="tile-ic sm" [style.--c]="h.kind === 'all' ? 'var(--primary)' : info[h.kind].color"><app-icon [name]="h.kind === 'all' ? 'list-check' : info[h.kind].ico" /></span>
                <span class="lr-text"><b>{{ h.kind === 'all' ? 'Tổng quát' : info[h.kind].label }}</b><small>{{ h.topic === 'all' ? 'Tất cả chủ đề' : topicMeta[h.topic].title }} · {{ h.date | date: 'dd/MM HH:mm' }}</small></span>
                <span class="tag" [class.green]="h.percent >= 70" [class.amber]="h.percent >= 40 && h.percent < 70" [class.red]="h.percent < 40">{{ h.percent }}%</span>
              </div>
            } @empty {
              <p class="empty">Bạn chưa làm bài kiểm tra nào.</p>
            }
          </section>
        </aside>
      </div>
    </main>
  `,
  styles: `
    .tabs { padding: 0 var(--space-3); border-bottom: 1px solid var(--line); }
    .scope { display: flex; align-items: center; gap: var(--space-3); padding: var(--space-3) var(--space-4); }
    .scope .chips { flex: 1; flex-wrap: wrap; overflow: visible; }
    .grid { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: var(--space-3); }
    .sk { display: flex; align-items: center; gap: var(--space-3); padding: var(--space-3); border: 1px solid var(--line); border-radius: var(--radius-md); transition: border-color var(--motion-fast), box-shadow var(--motion-fast); }
    .sk:hover { border-color: var(--c); box-shadow: var(--shadow-sm); }
    .tx { flex: 1; display: flex; flex-direction: column; gap: 3px; min-width: 0; }
    .tx small { line-height: 1.35; }
    .pl { display: flex; align-items: center; gap: var(--space-2); }
    .pl .bar { flex: 1; height: 6px; }
    .pl small { color: var(--ink-soft); width: 34px; text-align: right; }
    .general { display: flex; align-items: center; gap: var(--space-4); padding: var(--space-5); background: var(--primary); color: var(--white); border-color: var(--primary); }
    .general .tile-ic { background: color-mix(in srgb, var(--white) 18%, transparent); color: var(--white); }
    .general b { font-size: var(--fs-xl); }
    .general small { color: var(--sky-100); font-size: var(--fs-sm); }
    .rec { display: inline-flex; align-items: center; gap: 4px; color: var(--sun-600); font-weight: 600; }
    .rec app-icon { width: 14px; height: 14px; }
    .rv { display: flex; align-items: center; flex-wrap: wrap; gap: var(--space-3); }
    .rv b { font-size: var(--fs-lg); }
    .small { font-size: var(--fs-sm); margin-bottom: var(--space-2); }
    .brow { display: grid; grid-template-columns: 60px 1fr 40px; align-items: center; gap: var(--space-3); padding: 5px 0; font-size: var(--fs-sm); }
    .brow b { text-align: right; }
    .chev { width: 16px; height: 16px; color: var(--ink-mute); }
    a.list-row:hover b { color: var(--primary); }
    @media (max-width: 760px) { .grid { grid-template-columns: minmax(0, 1fr); } .scope { flex-direction: column; align-items: flex-start; } }
  `,
})
export class PracticePage {
  private readonly progress = inject(ProgressService);
  private readonly route = inject(ActivatedRoute);

  protected readonly info = SKILL_INFO;
  protected readonly topics = TOPICS;
  protected readonly topicMeta = TOPIC_BY_ID;
  protected readonly allSkills: Skill[] = ['vocab', ...LANGUAGE_SKILLS];
  protected readonly tabs: { id: Tab; label: string; ico: IconName }[] = [
    { id: 'practice', label: 'Luyện tập', ico: 'target' },
    { id: 'test', label: 'Kiểm tra', ico: 'list-check' },
    { id: 'games', label: 'Trò chơi', ico: 'dice-5' },
    { id: 'review', label: 'Ôn tập', ico: 'refresh' },
  ];
  protected readonly gameTypes: GameType[] = ['picture', 'match', 'scramble', 'speed'];
  protected readonly gameInfo = GAME_INFO;

  protected readonly tab = signal<Tab>((this.route.snapshot.queryParamMap.get('tab') as Tab | null) ?? 'practice');
  /** Phạm vi chủ đề: 'all' hoặc một mã chủ đề */
  protected readonly scope = signal<TopicId | 'all'>('all');

  protected readonly today = this.progress.today;
  protected readonly due = this.progress.dueCount;
  protected readonly errorCount = computed(() => this.progress.errors().length);
  protected readonly saved = computed(() => {
    this.progress.state();
    return this.progress.bookmarkedIds().length;
  });

  /** Lịch sử 8 bài kiểm tra gần nhất */
  protected readonly history = computed(() => this.progress.tests().slice(0, 8));

  /** Điểm cao nhất của kỹ năng trong phạm vi đang chọn */
  protected score(skill: Skill): number {
    this.progress.state();
    const scope = this.scope();
    if (scope === 'all') {
      // Lấy điểm tốt nhất trong tất cả các chủ đề (và bài 'all')
      return Math.max(this.progress.skillStat('all', skill)?.best ?? 0, ...TOPICS.map((t) => this.progress.bestScore(t.id, skill)));
    }
    return this.progress.bestScore(scope, skill);
  }

  /** Kỷ lục của một trò chơi trong phạm vi đang chọn */
  protected gameBest(game: GameType): number {
    this.progress.state();
    return this.progress.gameBest(game, this.scope());
  }

  /** Phân bố các từ theo hộp nhớ 1..5 */
  protected readonly boxes = computed(() => {
    const counts = [0, 0, 0, 0, 0, 0];
    for (const w of Object.values(this.progress.state().words)) counts[w.box]++;
    const max = Math.max(1, ...counts.slice(1));
    return [1, 2, 3, 4, 5].map((box) => ({ box, count: counts[box], percent: (counts[box] / max) * 100 }));
  });
}
