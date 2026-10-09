/**
 * home.page.ts – Dashboard (trang chủ) theo thiết kế "Offline English Learning Dashboard".
 *
 * Từ trên xuống:
 *  1. Lời chào + ngày hôm nay.
 *  2. Hai thẻ mục tiêu: IELTS (band hiện tại → mục tiêu, tiến độ 4 kỹ năng) và TOEIC (điểm L&R).
 *  3. "Tiếp tục học" (bài từ vựng đang dở) · "Hôm nay học gì?" (nhiệm vụ trong ngày) · "Thống kê nhanh".
 *  4. Sáu thẻ lối tắt: IELTS, TOEIC, Từ vựng & Cụm từ, Practice, Mock Test, Error Review.
 * Mọi số liệu lấy từ tiến độ lưu trên máy (ProgressService) – không dùng số liệu mẫu.
 */
import { ChangeDetectionStrategy, Component, computed, inject, resource, signal } from '@angular/core';
import { DatePipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import { EXAM_SKILLS, EXAM_SKILL_LABEL, GoalService, bandText } from '../../core/goal.service';
import { ProgressService } from '../../core/progress.service';
import { VocabService } from '../../core/vocab.service';
import { dayKey, formatDuration, pct } from '../../core/text-utils';
import { HERO_PHOTOS } from '../../data/hero-photos';
import { SKILL_INFO, TOPIC_BY_ID } from '../../data/topics';
import { Skill, TopicId } from '../../models/content.model';
import { DonutComponent } from '../../shared/donut.component';
import { IconComponent } from '../../theme/icon.component';
import { IconName } from '../../theme/icons';
import { SKILL_COLORS } from '../../theme/theme';

/** Kỹ năng luyện trong tuần: mỗi ngày một kỹ năng (Chủ nhật = 0) */
const SKILL_OF_WEEKDAY: Skill[] = ['reading', 'listening', 'speaking', 'writing', 'reading', 'listening', 'speaking'];

interface Mission {
  id: string;
  icon: IconName;
  color: string;
  title: string;
  desc: string;
  done: boolean;
  link: string;
  query: Record<string, string>;
}

/** Thẻ lối tắt ở cuối trang */
const MODULES: { title: string; icon: IconName; color: string; desc: string; link: string; items: { label: string; icon: IconName; link: string; query?: Record<string, string> }[] }[] = [
  {
    title: 'IELTS', icon: 'school', color: 'var(--ielts)', link: '/ielts', desc: 'Luyện thi IELTS toàn diện 4 kỹ năng, từ cơ bản đến nâng cao.',
    items: [
      { label: 'Listening', icon: 'headphones', link: '/session/exam/ielts', query: { section: 'ielts-listening' } },
      { label: 'Reading', icon: 'book', link: '/session/exam/ielts', query: { section: 'ielts-reading' } },
      { label: 'Writing', icon: 'pencil', link: '/session/exam/ielts', query: { section: 'ielts-writing' } },
      { label: 'Speaking', icon: 'microphone', link: '/session/exam/ielts', query: { section: 'ielts-speaking' } },
    ],
  },
  {
    title: 'TOEIC', icon: 'file-description', color: 'var(--toeic)', link: '/toeic', desc: 'Luyện thi TOEIC hiệu quả: Listening & Reading, bám sát đề thi.',
    items: [
      { label: 'Listening (Part 1–4)', icon: 'headphones', link: '/toeic', query: { tab: 'listening' } },
      { label: 'Reading (Part 5–7)', icon: 'book', link: '/toeic', query: { tab: 'reading' } },
      { label: 'Speaking & Writing', icon: 'microphone', link: '/toeic', query: { tab: 'sw' } },
      { label: 'Full Test', icon: 'file-text', link: '/session/exam/toeic', query: { mock: '1' } },
    ],
  },
  {
    title: 'Từ vựng & Cụm từ', icon: 'letter-case', color: 'var(--leaf-600)', link: '/vocab', desc: '3.600 từ vựng có gắn trình độ CEFR: trọng tâm B1–B2, IELTS & TOEIC.',
    items: [
      { label: 'Từ vựng B1 – Trung cấp', icon: 'book', link: '/vocab/b1', query: { tab: 'lessons' } },
      { label: 'Từ vựng B2 – Trung cao cấp', icon: 'books', link: '/vocab/b2', query: { tab: 'lessons' } },
      { label: 'Flashcard', icon: 'cards', link: '/vocab', query: { tab: 'lessons' } },
      { label: 'Ôn tập (Spaced Repetition)', icon: 'refresh', link: '/session/review/all' },
    ],
  },
  {
    title: 'Practice', icon: 'pencil', color: 'var(--grape-600)', link: '/practice', desc: 'Luyện từng dạng bài theo chủ đề và mức độ khó.',
    items: [
      { label: 'Chọn dạng bài', icon: 'target', link: '/practice' },
      { label: 'Luyện theo chủ đề', icon: 'category', link: '/practice' },
      { label: 'Ngữ pháp', icon: 'notebook', link: '/grammar' },
      { label: 'Trò chơi từ vựng', icon: 'dice-5', link: '/practice', query: { tab: 'games' } },
    ],
  },
  {
    title: 'Mock Test', icon: 'file-text', color: 'var(--tangerine-600)', link: '/mock', desc: 'Thi thử như thật, hoàn toàn offline. Có chấm điểm và phân tích chi tiết.',
    items: [
      { label: 'IELTS Full Test', icon: 'school', link: '/session/exam/ielts', query: { mock: '1' } },
      { label: 'TOEIC Full Test', icon: 'file-description', link: '/session/exam/toeic', query: { mock: '1' } },
      { label: 'Từng kỹ năng', icon: 'list-check', link: '/mock', query: { tab: 'skill' } },
      { label: 'Lịch sử làm bài', icon: 'history', link: '/progress' },
    ],
  },
  {
    title: 'Error Review', icon: 'alert-triangle', color: 'var(--coral-600)', link: '/errors', desc: 'Tổng hợp và phân tích tất cả câu sai để học hiệu quả hơn.',
    items: [
      { label: 'Tất cả lỗi sai', icon: 'circle-x', link: '/errors' },
      { label: 'Phân loại theo kỹ năng', icon: 'filter', link: '/errors' },
      { label: 'Giải thích chi tiết', icon: 'bulb', link: '/errors' },
      { label: 'Luyện lại từ hay sai', icon: 'repeat', link: '/session/review/all' },
    ],
  },
];

@Component({
  selector: 'app-home',
  imports: [RouterLink, DatePipe, IconComponent, DonutComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <main class="page stack">
      <header class="hello">
        <div>
          <h1>Chào {{ name() }}! 👋</h1>
          <p class="muted">Hôm nay bạn muốn học gì? Cùng tiến gần hơn đến mục tiêu IELTS và TOEIC nhé!</p>
        </div>
        <div class="date card">
          <span class="tile-ic"><app-icon name="calendar" /></span>
          <span><b>{{ weekday }}, {{ now | date: 'dd/MM/yyyy' }}</b><small>Học đều mỗi ngày để đạt kết quả tốt nhất!</small></span>
        </div>
      </header>

      @if (!onboarded()) {
        <a class="card setup" routerLink="/onboarding">
          <span class="tile-ic"><app-icon name="target" /></span>
          <span class="grow"><b>Thiết lập mục tiêu học</b><small>Chọn mục tiêu, trình độ và thời gian mỗi ngày để nhận lộ trình phù hợp (mất 1 phút).</small></span>
          <span class="btn btn-primary btn-sm">Bắt đầu <app-icon name="arrow-right" /></span>
        </a>
      }

      <!-- 2. Mục tiêu IELTS / TOEIC -->
      <section class="goals">
        <a class="card goal ielts" routerLink="/ielts">
          <div class="gmain">
            <h2><app-icon name="school" /> IELTS</h2>
            <div class="nums">
              <span><small>Current Band</small><b>{{ band(ielts().overall) }}</b></span>
              <app-icon name="arrow-right" class="arr" />
              <span><small>Target Band</small><b>{{ ielts().target.toFixed(1) }}</b></span>
            </div>
            <div class="pline">
              <div class="bar red"><i [style.width.%]="ielts().percent"></i></div>
              <small>{{ band(ielts().overall) }} / {{ ielts().target.toFixed(1) }}</small>
            </div>
          </div>
          <div class="gside">
            <small class="gl">Tiến độ theo kỹ năng</small>
            <div class="cols4">
              @for (s of skills; track s) {
                <div class="vcol">
                  <small>{{ band(ielts().skills[s]) }}</small>
                  <div class="vbar"><i [style.height.%]="((ielts().skills[s] ?? 0) / 9) * 100" [style.background]="skillColor[s]"></i></div>
                  <b>{{ skillLabel[s].short }}</b>
                </div>
              }
            </div>
          </div>
        </a>

        <a class="card goal toeic" routerLink="/toeic">
          <div class="gmain">
            <h2><app-icon name="headphones" /> TOEIC</h2>
            <div class="nums">
              <span><small>Current Score</small><b>{{ toeic().total ?? '—' }}</b></span>
              <app-icon name="arrow-right" class="arr" />
              <span><small>Target Score</small><b>{{ toeic().target }}</b></span>
            </div>
            <div class="pline">
              <div class="bar blue"><i [style.width.%]="toeic().percent"></i></div>
              <small>{{ toeic().total ?? '—' }} / {{ toeic().target }}</small>
            </div>
          </div>
          <div class="gside">
            <small class="gl">Điểm theo kỹ năng</small>
            <div class="hrow"><span>Listening</span><div class="bar blue"><i [style.width.%]="((toeic().listening ?? 0) / 495) * 100"></i></div><small>{{ toeic().listening ?? '—' }} / 495</small></div>
            <div class="hrow"><span>Reading</span><div class="bar blue"><i [style.width.%]="((toeic().reading ?? 0) / 495) * 100"></i></div><small>{{ toeic().reading ?? '—' }} / 495</small></div>
          </div>
        </a>
      </section>

      <!-- 3. Tiếp tục học · Hôm nay học gì · Thống kê nhanh -->
      <section class="mid">
        <div class="card cont">
          <div class="card-head"><span class="tile-ic sm play"><app-icon name="player-play" /></span><h2>Tiếp tục học</h2></div>
          @if (next.value(); as n) {
            <div class="lesson">
              <img [src]="n.photo" alt="" />
              <div class="lt">
                <small class="lk" [style.color]="n.color">{{ n.topic }}</small>
                <b>{{ n.title }}</b>
                <small class="muted">Bài {{ n.index + 1 }}: {{ n.titleEn }}</small>
                <div class="pline"><div class="bar"><i [style.width.%]="n.percent"></i></div><small>{{ n.percent }}%</small></div>
              </div>
            </div>
            <a class="btn btn-primary btn-block btn-lg" [routerLink]="['/learn', n.topicId, n.index]">Tiếp tục học <app-icon name="arrow-right" /></a>
          } @else {
            <p class="muted">Đang mở kho bài học...</p>
          }
        </div>

        <div class="card">
          <div class="card-head"><span class="tile-ic sm"><app-icon name="clipboard-check" /></span><h2>Hôm nay học gì?</h2><a class="link-more" routerLink="/schedule">Xem tất cả</a></div>
          @for (m of missions(); track m.id) {
            <div class="list-row" [class.done]="m.done">
              <span class="tile-ic" [style.--c]="m.color"><app-icon [name]="m.icon" /></span>
              <span class="lr-text"><b>{{ m.title }}</b><small>{{ m.desc }}</small></span>
              <span class="radio" [class.on]="m.done" [attr.aria-label]="m.done ? 'Đã xong' : 'Chưa làm'">@if (m.done) { <app-icon name="check" [stroke]="3" /> }</span>
              <a class="btn btn-sm" [class.btn-primary]="!m.done" [class.btn-soft]="m.done" [routerLink]="m.link" [queryParams]="m.query">{{ m.done ? 'Làm thêm' : 'Bắt đầu' }}</a>
            </div>
          }
        </div>

        <div class="card stats">
          <div class="card-head">
            <span class="tile-ic sm"><app-icon name="chart-bar" /></span><h2>Thống kê nhanh</h2>
            <select class="select" [value]="range()" (change)="range.set(+$any($event.target).value)" aria-label="Khoảng thời gian">
              <option value="7">Tuần này</option>
              <option value="30">30 ngày</option>
            </select>
          </div>
          <div class="quick">
            <div class="stat"><app-icon name="flame" class="c-or" /><span><b>{{ streak() }} ngày</b><small>Streak</small></span></div>
            <div class="stat"><app-icon name="clock" class="c-bl" /><span><b>{{ rangeTime() }}</b><small>Thời gian học</small></span></div>
            <div class="stat"><app-icon name="book" class="c-bl" /><span><b>{{ newToday() }}</b><small>Từ mới hôm nay</small></span></div>
            <div class="stat"><app-icon name="circle-check" class="c-gr" /><span><b>{{ due() }}</b><small>Từ cần ôn</small></span></div>
          </div>
          <div class="charts">
            <div class="wk">
              <small class="gl">Thời gian học trong tuần (phút)</small>
              <div class="week">
                @for (d of week(); track d.key) {
                  <div class="wcol" [class.today]="d.today" [title]="d.minutes + ' phút · ' + d.xp + ' XP'">
                    <small class="wv">{{ d.minutes || '' }}</small>
                    <div class="wbar"><i [style.height.%]="d.height"></i></div>
                    <small>{{ d.label }}</small>
                  </div>
                }
              </div>
            </div>
            <div class="ratio">
              <small class="gl">Tỉ lệ luyện tập</small>
              <div class="rrow">
                <app-donut [segments]="ratioSegments()" [size]="96" [thickness]="16" />
                <ul>
                  @for (r of ratio(); track r.skill) {
                    <li><i [style.background]="r.color"></i><span>{{ r.label }}</span><b>{{ r.percent }}%</b></li>
                  }
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- 4. Lối tắt -->
      <section class="mods">
        @for (m of modules; track m.title) {
          <div class="card mod" [style.--c]="m.color">
            <a class="mh" [routerLink]="m.link"><span class="tile-ic"><app-icon [name]="m.icon" /></span><h3>{{ m.title }}</h3></a>
            <p class="muted">{{ m.desc }}</p>
            @for (it of m.items; track it.label) {
              <a class="mi" [routerLink]="it.link" [queryParams]="it.query ?? {}">
                <span class="tile-ic sm"><app-icon [name]="it.icon" /></span><span>{{ it.label }}</span><app-icon name="chevron-right" class="chev" />
              </a>
            }
          </div>
        }
      </section>
    </main>
  `,
  styles: `
    .hello { display: flex; align-items: center; justify-content: space-between; gap: var(--space-4); flex-wrap: wrap; }
    .hello h1 { font-size: var(--fs-3xl); }
    .date { display: flex; align-items: center; gap: var(--space-3); padding: var(--space-2) var(--space-4) var(--space-2) var(--space-2); }
    .date span:last-child, .setup .grow { display: flex; flex-direction: column; line-height: 1.35; }
    .date small, .setup small { color: var(--ink-soft); }
    .setup { display: flex; align-items: center; gap: var(--space-3); border-color: var(--sky-200); background: var(--primary-soft); }
    .grow { flex: 1; min-width: 0; }

    .goals { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: var(--space-4); }
    .goal { display: flex; gap: var(--space-5); padding: var(--space-5); transition: box-shadow var(--motion-fast); }
    .goal:hover { box-shadow: var(--shadow-md); }
    .goal.ielts { background: linear-gradient(120deg, var(--blossom-50), var(--white) 70%); border-color: var(--blossom-100); }
    .goal.toeic { background: linear-gradient(120deg, var(--sky-50), var(--white) 70%); border-color: var(--sky-100); }
    .gmain { flex: 1.2; min-width: 0; display: flex; flex-direction: column; gap: var(--space-3); }
    .goal h2 { display: flex; align-items: center; gap: var(--space-2); font-size: var(--fs-xl); }
    .goal h2 app-icon { width: 28px; height: 28px; }
    .ielts h2 { color: var(--ielts); }
    .toeic h2 { color: var(--toeic); }
    .nums { display: flex; align-items: flex-end; gap: var(--space-5); }
    .nums span { display: flex; flex-direction: column; }
    .nums small { color: var(--ink-soft); font-size: var(--fs-sm); }
    .nums b { font-size: var(--fs-display); line-height: 1.1; letter-spacing: -0.03em; }
    .arr { width: 22px; height: 22px; color: var(--ink-mute); margin-bottom: 10px; }
    .pline { display: flex; align-items: center; gap: var(--space-3); }
    .pline .bar { flex: 1; }
    .pline small { color: var(--ink-soft); white-space: nowrap; }
    .gside { flex: 1; min-width: 0; padding-left: var(--space-5); border-left: 1px solid var(--line); display: flex; flex-direction: column; gap: var(--space-3); justify-content: center; }
    .gl { color: var(--ink-soft); font-weight: 600; }
    .cols4 { display: flex; gap: var(--space-4); align-items: flex-end; }
    .vcol { display: flex; flex-direction: column; align-items: center; gap: 4px; }
    .vcol small { color: var(--ink-soft); }
    .vbar { width: 24px; height: 64px; border-radius: 6px; background: var(--slate-100); display: flex; align-items: flex-end; overflow: hidden; }
    .vbar i { width: 100%; border-radius: 6px; min-height: 3px; transition: height var(--motion-slow) var(--motion-ease); }
    .hrow { display: grid; grid-template-columns: 76px 1fr auto; align-items: center; gap: var(--space-3); font-size: var(--fs-sm); font-weight: 600; }
    .hrow small { color: var(--ink-soft); font-weight: 500; }

    .mid { display: grid; grid-template-columns: minmax(0, 0.8fr) minmax(0, 1fr) minmax(0, 1.15fr); gap: var(--space-4); align-items: stretch; }
    .play { --c: var(--good); border-radius: 50%; }
    .cont { display: flex; flex-direction: column; gap: var(--space-3); }
    .cont .btn { margin-top: auto; }
    .lesson { display: flex; gap: var(--space-3); padding: var(--space-3); border: 1px solid var(--line); border-radius: var(--radius-md); }
    .lesson img { width: 96px; height: 112px; object-fit: cover; border-radius: var(--radius-md); flex: none; }
    .lt { flex: 1; min-width: 0; display: flex; flex-direction: column; gap: 4px; justify-content: center; }
    .lt b { font-size: var(--fs-lg); line-height: 1.25; }
    .lk { font-weight: 700; }
    .list-row .btn { flex: none; }
    .radio { width: 20px; height: 20px; border-radius: 50%; border: 2px solid var(--slate-300); display: grid; place-items: center; flex: none; }
    .radio.on { background: var(--good); border-color: var(--good); color: var(--white); }
    .radio app-icon { width: 12px; height: 12px; }
    .quick { display: grid; grid-template-columns: repeat(4, minmax(0, 1fr)); gap: var(--space-2); }
    .quick .stat { padding: var(--space-2); gap: var(--space-2); }
    .quick .stat app-icon { width: 24px; height: 24px; flex: none; }
    .quick .stat b { font-size: var(--fs-md); white-space: nowrap; }
    .quick .stat small { font-size: 0.7rem; white-space: nowrap; }
    .c-or { color: var(--tangerine-500); }
    .c-bl { color: var(--primary); }
    .c-gr { color: var(--good); }
    .charts { display: grid; grid-template-columns: minmax(0, 1.25fr) minmax(0, 1fr); gap: var(--space-4); margin-top: var(--space-4); }
    .week { display: flex; align-items: flex-end; gap: 6px; height: 132px; margin-top: var(--space-2); border-bottom: 1px solid var(--line); }
    .wcol { flex: 1; height: 100%; display: flex; flex-direction: column; align-items: center; justify-content: flex-end; gap: 2px; }
    .wcol small { color: var(--ink-soft); font-size: 0.72rem; }
    .wv { min-height: 1em; }
    .wbar { width: 62%; flex: 1; display: flex; align-items: flex-end; }
    .wbar i { width: 100%; border-radius: 4px 4px 0 0; background: var(--sky-300); min-height: 2px; transition: height var(--motion-slow) var(--motion-ease); }
    .wcol.today .wbar i { background: var(--primary); }
    .wcol.today small { color: var(--ink); font-weight: 700; }
    .rrow { display: flex; align-items: center; gap: var(--space-3); margin-top: var(--space-2); }
    .rrow ul { list-style: none; margin: 0; padding: 0; flex: 1; display: flex; flex-direction: column; gap: 5px; font-size: var(--fs-xs); }
    .rrow li { display: flex; align-items: center; gap: 6px; }
    .rrow li span { flex: 1; color: var(--ink-soft); }
    .rrow li i { width: 8px; height: 8px; border-radius: 50%; }

    .mods { display: grid; grid-template-columns: repeat(6, minmax(0, 1fr)); gap: var(--space-3); }
    .mod { display: flex; flex-direction: column; gap: var(--space-2); background: linear-gradient(180deg, color-mix(in srgb, var(--c) 7%, var(--white)), var(--white) 55%); border-color: color-mix(in srgb, var(--c) 18%, var(--white)); }
    .mh { display: flex; align-items: center; gap: var(--space-2); }
    .mh h3 { color: var(--c); font-size: var(--fs-lg); }
    .mh .tile-ic { background: var(--c); color: var(--white); }
    .mod p { font-size: var(--fs-xs); line-height: 1.5; min-height: 4.5em; }
    .mi { display: flex; align-items: center; gap: var(--space-2); padding: 5px 6px; border-radius: var(--radius-sm); background: var(--white); border: 1px solid var(--line); font-size: var(--fs-sm); }
    .mi span:nth-child(2) { flex: 1; min-width: 0; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
    .mi:hover { border-color: var(--c); }
    .mi .tile-ic { width: 24px; height: 24px; }
    .mi .tile-ic app-icon { width: 15px; height: 15px; }
    .chev { width: 14px; height: 14px; color: var(--ink-mute); }

    @media (max-width: 1500px) { .mods { grid-template-columns: repeat(3, minmax(0, 1fr)); } .mod p { min-height: 0; } }
    @media (max-width: 1320px) { .mid { grid-template-columns: repeat(2, minmax(0, 1fr)); } .stats { grid-column: 1 / -1; } }
    @media (max-width: 1100px) { .goals { grid-template-columns: minmax(0, 1fr); } }
    @media (max-width: 760px) {
      .mid, .charts { grid-template-columns: minmax(0, 1fr); }
      .mods { grid-template-columns: repeat(2, minmax(0, 1fr)); }
      .goal { flex-direction: column; }
      .gside { border-left: 0; padding-left: 0; border-top: 1px solid var(--line); padding-top: var(--space-3); }
      .quick { grid-template-columns: repeat(2, minmax(0, 1fr)); }
      .list-row .radio { display: none; }
    }
    @media (max-width: 480px) { .mods { grid-template-columns: minmax(0, 1fr); } }
  `,
})
export class HomePage {
  private readonly progress = inject(ProgressService);
  private readonly goals = inject(GoalService);
  private readonly vocab = inject(VocabService);

  protected readonly modules = MODULES;
  protected readonly skills = EXAM_SKILLS;
  protected readonly skillLabel = EXAM_SKILL_LABEL;
  protected readonly skillColor = SKILL_COLORS;
  protected readonly band = bandText;
  protected readonly now = new Date();
  protected readonly weekday = ['Chủ Nhật', 'Thứ 2', 'Thứ 3', 'Thứ 4', 'Thứ 5', 'Thứ 6', 'Thứ 7'][this.now.getDay()];

  protected readonly name = computed(() => this.progress.settings().name);
  protected readonly onboarded = computed(() => this.progress.settings().onboarded);
  protected readonly ielts = this.goals.ielts;
  protected readonly toeic = this.goals.toeic;
  protected readonly streak = this.progress.streak;
  protected readonly due = this.progress.dueCount;
  protected readonly range = signal(7);

  /** Thời gian học trong khoảng đang chọn */
  protected readonly rangeTime = computed(() => {
    this.progress.state();
    return formatDuration(this.progress.secondsInLastDays(this.range()));
  });

  /** Số từ học lần đầu hôm nay ≈ số bài học × 12, hiển thị theo số bài và số từ đã ôn */
  protected readonly newToday = computed(() => `${this.progress.today().lessons} bài`);

  /** Chủ đề từ vựng ưu tiên theo mục tiêu học */
  private readonly focusTopic = computed<TopicId>(() => {
    const g = this.progress.settings().goal;
    return g === 'toeic' ? 'toeic' : g === 'ielts' ? 'ielts' : g === 'work' ? 'it' : g === 'kids' ? 'daily' : 'b1';
  });

  /** Bài từ vựng tiếp theo chưa học xong trong chủ đề ưu tiên */
  protected readonly next = resource({
    params: () => this.focusTopic(),
    loader: async ({ params }) => {
      const data = await this.vocab.load(params);
      const meta = TOPIC_BY_ID[params];
      const lesson = data.lessons.find((l) => this.progress.learnedIn(l.words.map((w) => w.id)) < l.words.length) ?? data.lessons[0];
      const learned = this.progress.learnedIn(lesson.words.map((w) => w.id));
      const photo = params === 'toeic' ? HERO_PHOTOS.office.src : params === 'ielts' ? HERO_PHOTOS.library.src : params === 'it' ? HERO_PHOTOS.study.src : HERO_PHOTOS.mountain.src;
      return {
        topicId: params, topic: meta.title, color: params === 'ielts' ? 'var(--ielts)' : 'var(--primary)', index: lesson.index,
        title: lesson.vi, titleEn: lesson.en, percent: pct(learned, lesson.words.length), photo,
      };
    },
  });

  /** Nhiệm vụ trong ngày */
  protected readonly missions = computed<Mission[]>(() => {
    const today = this.progress.today();
    const due = this.due();
    const goal = this.progress.settings().goal;
    const exam = goal === 'toeic' ? 'toeic' : 'ielts';
    const skill = SKILL_OF_WEEKDAY[new Date().getDay()];
    const info = SKILL_INFO[skill];
    const examToday = (this.progress.exams()[0]?.date ?? '').slice(0, 10) === new Date().toISOString().slice(0, 10);
    const errors = this.progress.errors().length;
    const section = exam === 'toeic' ? (skill === 'listening' || skill === 'speaking' ? 'toeic-part3' : 'toeic-part5') : `ielts-${skill === 'vocab' ? 'reading' : skill}`;
    const list: Mission[] = [
      {
        id: 'exam', icon: info.ico, color: exam === 'ielts' ? 'var(--ielts)' : 'var(--toeic)', done: examToday,
        title: `${exam === 'ielts' ? 'IELTS' : 'TOEIC'} ${info.labelEn}`, desc: 'Luyện một phần thi có giải thích tiếng Việt',
        link: `/session/exam/${exam}`, query: { section },
      },
      { id: 'lesson', icon: 'letter-case', color: 'var(--leaf-600)', done: today.lessons >= 1, title: 'Từ vựng', desc: 'Học 1 bài từ mới – khoảng 12 từ, 15 phút', link: '/vocab', query: { tab: 'lessons' } },
      { id: 'skill', icon: info.ico, color: 'var(--grape-500)', done: (today.skills[skill] ?? 0) >= 1, title: `Luyện ${info.label.toLowerCase()}`, desc: 'Kỹ năng của hôm nay – 10 câu', link: '/session/skill/all', query: { skill } },
      due > 0
        ? { id: 'review', icon: 'alert-triangle', color: 'var(--tangerine-500)', done: today.reviews > 0 && today.reviews >= Math.min(due, 5), title: 'Ôn tập lỗi sai', desc: `${due} từ đến hạn ôn${errors ? ` · ${errors} câu sai` : ''}`, link: '/session/review/all', query: {} }
        : { id: 'review', icon: 'alert-triangle', color: 'var(--tangerine-500)', done: errors === 0, title: 'Ôn tập lỗi sai', desc: errors ? `${errors} câu sai từ các lần luyện trước` : 'Không còn từ nào cần ôn hôm nay', link: '/errors', query: {} },
    ];
    return list;
  });

  /** Biểu đồ cột 7 ngày theo số phút học (nếu chưa có dữ liệu thời gian thì theo XP) */
  protected readonly week = computed(() => {
    this.progress.state();
    const days = this.progress.weekActivity();
    const useXp = days.every((d) => d.minutes === 0);
    const max = Math.max(useXp ? 20 : 10, ...days.map((d) => (useXp ? d.xp : d.minutes)));
    return days.map((d) => ({ ...d, height: ((useXp ? d.xp : d.minutes) / max) * 100 }));
  });

  /** Tỉ lệ số lượt luyện theo kỹ năng trong khoảng đang chọn */
  protected readonly ratio = computed(() => {
    const days = this.progress.state().days;
    const counts: Record<string, number> = { listening: 0, reading: 0, writing: 0, speaking: 0, vocab: 0 };
    for (let i = 0; i < this.range(); i++) {
      const d = new Date();
      d.setDate(d.getDate() - i);
      const log = days[dayKey(d)];
      if (!log) continue;
      for (const [k, v] of Object.entries(log.skills)) counts[k] = (counts[k] ?? 0) + (v ?? 0);
    }
    const total = Object.values(counts).reduce((a, b) => a + b, 0);
    return (Object.keys(counts) as Skill[]).map((skill) => ({
      skill, label: SKILL_INFO[skill].labelEn, color: skill === 'vocab' ? 'var(--sun-400)' : SKILL_COLORS[skill], value: counts[skill], percent: total ? Math.round((counts[skill] / total) * 100) : 0,
    }));
  });
  protected readonly ratioSegments = computed(() => this.ratio().map((r) => ({ value: r.value, color: r.color })));
}
