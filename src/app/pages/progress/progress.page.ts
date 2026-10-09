/**
 * progress.page.ts – Trang "Progress": toàn bộ tiến độ học tập.
 *
 *  - Ô số liệu: chuỗi ngày, thời gian học 7 ngày, tổng XP + cấp độ, từ đã thuộc, độ chính xác.
 *  - Biểu đồ 7 ngày (phút học và XP), tiến độ từng kỹ năng, lịch hoạt động 12 tuần.
 *  - Tiến độ theo chủ đề từ vựng, lịch sử thi thử / kiểm tra, huy hiệu.
 * Mọi số liệu lấy từ tiến độ lưu trên máy (ProgressService).
 */
import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { DatePipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import { GoalService, bandText } from '../../core/goal.service';
import { ProgressService } from '../../core/progress.service';
import { dayKey, formatDuration, pct } from '../../core/text-utils';
import { BADGES } from '../../data/badges';
import { SECTION_BY_ID } from '../../data/exam/sections';
import { SKILL_INFO, TOPICS, topicWordCount, totalWordCount } from '../../data/topics';
import { LANGUAGE_SKILLS, Skill } from '../../models/content.model';
import { RingComponent } from '../../shared/ring.component';
import { IconComponent } from '../../theme/icon.component';

@Component({
  selector: 'app-progress',
  imports: [RouterLink, DatePipe, IconComponent, RingComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <main class="page stack">
      <div class="crumbs"><app-icon name="school" /> <span>Progress</span></div>

      <header class="card page-head">
        <span class="tile-ic lg"><app-icon name="chart-bar" /></span>
        <div class="ph-text">
          <h1>Tiến độ học tập</h1>
          <p>{{ name() }} · Cấp {{ level().level }} – {{ level().title }} · {{ level().into }}/{{ level().need }} XP tới cấp tiếp theo</p>
          <div class="bar gold lv"><i [style.width.%]="level().ratio * 100"></i></div>
        </div>
        <a class="btn btn-soft" routerLink="/settings"><app-icon name="settings" /> Cài đặt</a>
      </header>

      <section class="tiles">
        <div class="stat"><span class="tile-ic" style="--c: var(--tangerine-500)"><app-icon name="flame" /></span><span><b>{{ streak() }} ngày</b><small>Chuỗi ngày học</small></span></div>
        <div class="stat"><span class="tile-ic"><app-icon name="clock" /></span><span><b>{{ weekTime() }}</b><small>Thời gian học 7 ngày</small></span></div>
        <div class="stat"><span class="tile-ic" style="--c: var(--sun-500)"><app-icon name="star" /></span><span><b>{{ xp() }}</b><small>Tổng XP</small></span></div>
        <div class="stat"><span class="tile-ic" style="--c: var(--grape-500)"><app-icon name="letter-case" /></span><span><b>{{ learned() }} / {{ totalWords }}</b><small>Từ đã thuộc</small></span></div>
        <div class="stat"><span class="tile-ic" style="--c: var(--leaf-500)"><app-icon name="target" /></span><span><b>{{ accuracy() }}%</b><small>Độ chính xác · {{ totalQuestions() }} câu</small></span></div>
        <div class="stat"><span class="tile-ic" style="--c: var(--blossom-600)"><app-icon name="school" /></span><span><b>{{ band(ielts().overall) }} · {{ toeic().total ?? '—' }}</b><small>IELTS band · TOEIC (ước tính)</small></span></div>
      </section>

      <div class="cols">
        <div class="stack">
          <section class="card">
            <div class="card-head"><app-icon name="chart-bar" /><h2>7 ngày gần nhất</h2><small class="muted">cột = phút học · số trên cột = XP</small></div>
            <div class="week">
              @for (d of week(); track d.key) {
                <div class="col" [class.today]="d.today" [title]="d.minutes + ' phút · ' + d.xp + ' XP'">
                  <small class="xpv">{{ d.xp || '' }}</small>
                  <div class="cbar"><i [style.height.%]="d.height"></i></div>
                  <small>{{ d.label }}</small>
                  <small class="mn">{{ d.minutes }}′</small>
                </div>
              }
            </div>
          </section>

          <section class="card">
            <div class="card-head"><app-icon name="calendar-stats" /><h2>Lịch hoạt động 12 tuần</h2><small class="muted">Đã học {{ activeDays() }} ngày</small></div>
            <div class="heat" role="img" [attr.aria-label]="'Đã học ' + activeDays() + ' ngày'">
              @for (col of heat(); track $index) {
                <div class="hcol">
                  @for (c of col; track c.key) { <i [class]="'l' + c.level" [class.today]="c.today" [title]="c.key + ': ' + c.xp + ' XP'"></i> }
                </div>
              }
            </div>
            <div class="legend muted"><span>Ít</span><i class="l0"></i><i class="l1"></i><i class="l2"></i><i class="l3"></i><i class="l4"></i><span>Nhiều</span></div>
          </section>

          <section class="card">
            <div class="card-head"><app-icon name="category" /><h2>Theo chủ đề từ vựng</h2><a class="link-more" routerLink="/vocab">Mở kho từ <app-icon name="arrow-right" /></a></div>
            <div class="grid-2 tp">
              @for (t of topicRows(); track t.id) {
                <a class="trow" [routerLink]="['/vocab', t.id]">
                  <div class="row"><span class="te">{{ t.emoji }}</span><b class="tn">{{ t.title }}</b><span class="spacer"></span><small class="muted">{{ t.learned }}/{{ t.total }} từ</small></div>
                  <div class="bar blue"><i [style.width.%]="t.percent"></i></div>
                  <div class="sc">@for (s of t.skills; track s.skill) { <span class="sp" [class.zero]="s.best === 0"><app-icon [name]="s.ico" /> {{ s.best }}%</span> }</div>
                </a>
              }
            </div>
          </section>

          <section class="card">
            <div class="card-head"><app-icon name="award" /><h2>Huy hiệu</h2><small class="muted">Đã đạt {{ earnedCount() }}/{{ badges.length }}</small></div>
            <div class="bgrid">
              @for (b of badges; track b.id) {
                <div class="badge" [class.locked]="!earned(b.id)" [title]="b.desc">
                  <span class="bi" [style.background]="earned(b.id) ? b.color : 'var(--slate-100)'">@if (earned(b.id)) { {{ b.icon }} } @else { <app-icon name="lock" /> }</span>
                  <b>{{ b.title }}</b><small class="muted">{{ b.desc }}</small>
                </div>
              }
            </div>
          </section>
        </div>

        <aside class="side">
          <section class="card goal">
            <app-ring [value]="today().xp" [max]="dailyGoal()" [size]="92" label="XP hôm nay" color="var(--primary)" />
            <div>
              <h3>Mục tiêu hôm nay</h3>
              <p class="muted">{{ today().xp }}/{{ dailyGoal() }} XP · {{ today().questions }} câu đã làm</p>
              <p class="muted">{{ today().lessons }} bài học · {{ today().reviews }} từ đã ôn · {{ todayTime() }}</p>
            </div>
          </section>

          <section class="card">
            <div class="card-head"><app-icon name="trending-up" /><h3>Tiến độ các kỹ năng</h3></div>
            @for (s of skillRows(); track s.skill) {
              <div class="srow"><span><app-icon [name]="s.ico" [style.color]="s.color" /> {{ s.label }}</span><div class="bar"><i [style.width.%]="s.percent ?? 0" [style.background]="s.color"></i></div><b>{{ s.percent === null ? '—' : s.percent + '%' }}</b></div>
            }
            <p class="muted tiny">Điểm trung bình của tất cả các lần luyện tập và kiểm tra.</p>
          </section>

          <section class="card">
            <div class="card-head"><app-icon name="history" /><h3>Lịch sử thi & kiểm tra</h3><a class="link-more" routerLink="/mock">Mock Test <app-icon name="arrow-right" /></a></div>
            @for (h of history(); track h.id) {
              <div class="list-row">
                <span class="tile-ic sm" [style.--c]="h.color"><app-icon [name]="h.icon" /></span>
                <span class="lr-text"><b>{{ h.title }}</b><small>{{ h.date | date: 'dd/MM/yyyy HH:mm' }}</small></span>
                <span class="tag" [class.green]="h.percent >= 70" [class.amber]="h.percent >= 40 && h.percent < 70" [class.red]="h.percent < 40">{{ h.label }}</span>
              </div>
            } @empty {
              <p class="empty">Chưa có bài thi hay bài kiểm tra nào.</p>
            }
          </section>
        </aside>
      </div>
    </main>
  `,
  styles: `
    .lv { max-width: 420px; margin-top: var(--space-2); }
    .tiles { display: grid; grid-template-columns: repeat(6, minmax(0, 1fr)); gap: var(--space-3); }
    .tiles .stat b { white-space: nowrap; }
    .week { display: flex; align-items: flex-end; gap: var(--space-3); height: 190px; }
    .col { flex: 1; height: 100%; display: flex; flex-direction: column; align-items: center; justify-content: flex-end; gap: 3px; }
    .col small { color: var(--ink-soft); }
    .xpv { min-height: 1.2em; }
    .mn { font-size: 0.7rem; }
    .cbar { width: 56%; max-width: 46px; flex: 1; display: flex; align-items: flex-end; border-bottom: 1px solid var(--line); }
    .cbar i { width: 100%; border-radius: 6px 6px 0 0; background: var(--sky-300); min-height: 2px; transition: height var(--motion-slow) var(--motion-ease); }
    .today .cbar i { background: var(--primary); }
    .today small { color: var(--ink); font-weight: 700; }
    .heat { display: flex; gap: 5px; overflow-x: auto; padding-bottom: 4px; }
    .hcol { display: flex; flex-direction: column; gap: 5px; }
    .heat i, .legend i { width: 18px; height: 18px; border-radius: 5px; background: var(--slate-100); display: block; flex: none; }
    .l1 { background: var(--sky-100) !important; }
    .l2 { background: var(--sky-300) !important; }
    .l3 { background: var(--sky-400) !important; }
    .l4 { background: var(--sky-600) !important; }
    .heat i.today { outline: 2px solid var(--ink); outline-offset: 1px; }
    .legend { display: flex; align-items: center; gap: 5px; margin-top: var(--space-2); font-size: var(--fs-xs); }
    .legend i { width: 12px; height: 12px; border-radius: 3px; }
    .tp { gap: var(--space-3); }
    .trow { display: flex; flex-direction: column; gap: 6px; padding: var(--space-3); border: 1px solid var(--line); border-radius: var(--radius-md); }
    .trow:hover { border-color: var(--sky-300); }
    .te { font-size: 1.2rem; }
    .sc { display: flex; gap: var(--space-3); font-size: var(--fs-xs); color: var(--slate-600); }
    .sp { display: inline-flex; align-items: center; gap: 3px; }
    .sp app-icon { width: 14px; height: 14px; }
    .sp.zero { color: var(--ink-mute); }
    .bgrid { display: grid; grid-template-columns: repeat(auto-fill, minmax(150px, 1fr)); gap: var(--space-3); }
    .badge { display: flex; flex-direction: column; align-items: center; text-align: center; gap: 4px; padding: var(--space-3); border: 1px solid var(--line); border-radius: var(--radius-md); }
    .badge small { font-size: 0.72rem; line-height: 1.35; }
    .bi { width: 52px; height: 52px; border-radius: 50%; display: grid; place-items: center; font-size: 1.6rem; }
    .badge.locked { opacity: 0.6; }
    .badge.locked .bi { color: var(--ink-mute); }
    .goal { display: flex; align-items: center; gap: var(--space-4); }
    .srow { display: grid; grid-template-columns: 96px 1fr 44px; align-items: center; gap: var(--space-3); padding: 6px 0; font-size: var(--fs-sm); }
    .srow span { display: inline-flex; align-items: center; gap: 6px; }
    .srow app-icon { width: 18px; height: 18px; }
    .srow b { text-align: right; }
    .tiny { font-size: var(--fs-xs); margin-top: var(--space-2); }
    @media (max-width: 1400px) { .tiles { grid-template-columns: repeat(3, minmax(0, 1fr)); } }
    @media (max-width: 700px) { .tiles { grid-template-columns: repeat(2, minmax(0, 1fr)); } .tp { grid-template-columns: minmax(0, 1fr); } .week { gap: 6px; } }
  `,
})
export class ProgressPage {
  private readonly progress = inject(ProgressService);
  private readonly goals = inject(GoalService);

  protected readonly badges = BADGES;
  protected readonly totalWords = totalWordCount();
  protected readonly band = bandText;
  protected readonly ielts = this.goals.ielts;
  protected readonly toeic = this.goals.toeic;

  protected readonly name = computed(() => this.progress.settings().name);
  protected readonly dailyGoal = computed(() => this.progress.settings().dailyGoal);
  protected readonly level = this.progress.level;
  protected readonly streak = this.progress.streak;
  protected readonly xp = this.progress.xp;
  protected readonly learned = this.progress.learnedTotal;
  protected readonly today = this.progress.today;
  protected readonly activeDays = this.progress.activeDays;
  protected readonly todayTime = computed(() => formatDuration(this.progress.todaySeconds()));
  protected readonly weekTime = computed(() => {
    this.progress.state();
    return formatDuration(this.progress.secondsInLastDays(7));
  });
  protected readonly earnedCount = computed(() => Object.keys(this.progress.state().badges).length);

  protected earned(id: string): boolean {
    return !!this.progress.state().badges[id];
  }

  /** Tiến độ từng kỹ năng (trung bình các lần làm bài) */
  protected readonly skillRows = computed(() => {
    this.progress.state();
    return (['vocab', ...LANGUAGE_SKILLS] as Skill[]).map((skill) => ({
      skill, label: SKILL_INFO[skill].label, ico: SKILL_INFO[skill].ico, color: skill === 'vocab' ? 'var(--sun-400)' : SKILL_INFO[skill].color,
      percent: skill === 'vocab' ? pct(this.learned(), this.totalWords) : this.progress.skillAverage(skill),
    }));
  });

  /** Biểu đồ 7 ngày: chiều cao theo phút học (chưa có dữ liệu thời gian thì theo XP) */
  protected readonly week = computed(() => {
    this.progress.state();
    const days = this.progress.weekActivity();
    const useXp = days.every((d) => d.minutes === 0);
    const max = Math.max(useXp ? 20 : 10, ...days.map((d) => (useXp ? d.xp : d.minutes)));
    return days.map((d) => ({ ...d, height: ((useXp ? d.xp : d.minutes) / max) * 100 }));
  });

  /** Lịch hoạt động 12 tuần: mỗi cột là một tuần (T2 → CN), độ đậm theo XP trong ngày */
  protected readonly heat = computed(() => {
    const days = this.progress.state().days;
    const goal = Math.max(10, this.dailyGoal());
    const today = new Date();
    const start = new Date(today);
    start.setDate(today.getDate() - ((today.getDay() + 6) % 7) - 7 * 11); // thứ Hai của 11 tuần trước
    const cols: { key: string; xp: number; level: number; today: boolean }[][] = [];
    for (let w = 0; w < 12; w++) {
      const col = [];
      for (let d = 0; d < 7; d++) {
        const day = new Date(start);
        day.setDate(start.getDate() + w * 7 + d);
        if (day > today) break;
        const key = dayKey(day);
        const xp = days[key]?.xp ?? 0;
        const level = xp <= 0 ? 0 : xp < goal * 0.5 ? 1 : xp < goal ? 2 : xp < goal * 2 ? 3 : 4;
        col.push({ key, xp, level, today: key === dayKey(today) });
      }
      cols.push(col);
    }
    return cols;
  });

  protected readonly totalQuestions = computed(() => Object.values(this.progress.state().days).reduce((n, d) => n + d.questions, 0));
  protected readonly accuracy = computed(() => {
    const days = Object.values(this.progress.state().days);
    return pct(days.reduce((n, d) => n + d.correct, 0), days.reduce((n, d) => n + d.questions, 0));
  });

  /** Tiến độ theo từng chủ đề */
  protected readonly topicRows = computed(() => {
    this.progress.state();
    return TOPICS.map((t) => {
      const total = topicWordCount(t.id);
      const learned = this.progress.learnedCount(t.id);
      return {
        id: t.id, emoji: t.emoji, title: t.title, total, learned, percent: pct(learned, total),
        skills: LANGUAGE_SKILLS.map((s) => ({ skill: s, ico: SKILL_INFO[s].ico, best: this.progress.bestScore(t.id, s) })),
      };
    });
  });

  /** Lịch sử gộp: thi thử / luyện thi + bài kiểm tra, mới nhất trước (10 mục) */
  protected readonly history = computed(() => {
    const exams = this.progress.exams().map((h) => ({
      id: 'e' + h.id, date: h.date, percent: h.percent, label: h.label,
      title: h.kind === 'mock' ? `Thi thử ${h.exam.toUpperCase()}` : h.kind === 'mock-sw' ? 'Thi thử TOEIC S&W' : `${h.exam.toUpperCase()} · ${SECTION_BY_ID[h.kind]?.titleEn ?? h.kind}`,
      icon: (h.kind === 'mock' || h.kind === 'mock-sw' ? 'clock-play' : (SECTION_BY_ID[h.kind]?.ico ?? 'target')), color: h.exam === 'ielts' ? 'var(--ielts)' : 'var(--toeic)',
    }));
    const tests = this.progress.tests().map((t) => ({
      id: 't' + t.id, date: t.date, percent: t.percent, label: `${t.percent}%`,
      title: t.kind === 'all' ? 'Kiểm tra tổng quát' : `Kiểm tra ${SKILL_INFO[t.kind].label.toLowerCase()}`,
      icon: (t.kind === 'all' ? 'list-check' : SKILL_INFO[t.kind].ico), color: 'var(--grape-500)',
    }));
    return [...exams, ...tests].sort((a, b) => b.date.localeCompare(a.date)).slice(0, 10);
  });
}
