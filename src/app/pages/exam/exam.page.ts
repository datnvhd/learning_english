/**
 * exam.page.ts – Trang IELTS và trang TOEIC (cùng một component, kỳ thi lấy từ `data.exam` của route).
 * Thiết kế theo ảnh "IELTS Study Dashboard": banner + mục tiêu, các kỹ năng/phần thi, lộ trình,
 * bài luyện gần đây, đề luyện gợi ý, điểm mạnh – điểm yếu và chiến lược làm bài.
 *
 *  - Mỗi phần thi mở bài luyện tương ứng: /session/exam/<kỳ thi>?section=<mã phần>
 *  - Thi thử có đồng hồ: /session/exam/<kỳ thi>?mock=1 (TOEIC thêm ?mock=sw cho Speaking & Writing)
 *  - Band / điểm hiển thị là ƯỚC TÍNH từ các bài đã làm (GoalService).
 */
import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { DatePipe } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { map } from 'rxjs';
import { TOEIC_BANK_SIZE } from '../../core/exam.service';
import { EXAM_SKILLS, EXAM_SKILL_LABEL, ExamSkill, GoalService, bandText } from '../../core/goal.service';
import { ProgressService } from '../../core/progress.service';
import { IELTS_LISTENING, IELTS_READING, IELTS_SPEAKING, IELTS_WRITING } from '../../data/exam/ielts';
import { EXAM_INFO, EXAM_SECTIONS, SECTION_BY_ID } from '../../data/exam/sections';
import { TEST_COUNT, formatOf, testTitle } from '../../data/exam/tests/catalog';
import { HERO_PHOTOS } from '../../data/hero-photos';
import { topicWordCount } from '../../data/topics';
import { ExamId, ExamKind, ExamSectionInfo, isFullExam, testNoOf } from '../../models/exam.model';
import { RingComponent } from '../../shared/ring.component';
import { IconComponent } from '../../theme/icon.component';
import { SKILL_COLORS } from '../../theme/theme';

type Tab = 'overview' | 'listening' | 'reading' | 'sw' | 'tips' | 'history';

/** Mô tả ngắn của 4 kỹ năng IELTS */
const IELTS_SKILL_DESC: Record<ExamSkill, string> = {
  listening: 'Nghe hiểu trong nhiều ngữ cảnh khác nhau',
  reading: 'Đọc hiểu học thuật và thông tin chi tiết',
  writing: 'Viết Task 1 & Task 2 có cấu trúc, logic',
  speaking: 'Luyện nói theo chủ đề với phản hồi chi tiết',
};

/** Các chặng của lộ trình IELTS (band) và TOEIC (điểm L&R) */
const ROADMAP: Record<ExamId, { title: string; desc: string; from: number; to: number }[]> = {
  ielts: [
    { title: 'Foundation (0 – 4.0)', desc: 'Nền tảng ngữ pháp, từ vựng, kỹ năng cơ bản', from: 0, to: 4 },
    { title: 'IELTS 5.0', desc: 'Làm quen dạng bài và chiến lược làm bài', from: 4, to: 5 },
    { title: 'IELTS 6.0', desc: 'Nâng cao kỹ năng và mở rộng vốn từ', from: 5, to: 6 },
    { title: 'IELTS 6.5', desc: 'Luyện đề chuyên sâu và cải thiện điểm yếu', from: 6, to: 6.5 },
    { title: 'IELTS 7.0+', desc: 'Hoàn thiện chiến lược đạt band mục tiêu', from: 6.5, to: 7 },
  ],
  toeic: [
    { title: 'Nền tảng (0 – 350)', desc: 'Từ vựng công sở và ngữ pháp cơ bản', from: 0, to: 350 },
    { title: 'TOEIC 450+', desc: 'Làm quen 7 phần thi và bẫy thường gặp', from: 350, to: 450 },
    { title: 'TOEIC 600+', desc: 'Tăng tốc Part 5–6, nghe hội thoại dài', from: 450, to: 600 },
    { title: 'TOEIC 750+', desc: 'Luyện đề có đồng hồ, đọc hiểu đa văn bản', from: 600, to: 750 },
    { title: 'TOEIC 850+', desc: 'Hoàn thiện chiến lược đạt điểm mục tiêu', from: 750, to: 850 },
  ],
};

@Component({
  selector: 'app-exam',
  imports: [IconComponent, RouterLink, DatePipe, RingComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <main class="page">
      <div class="cols">
        <div class="stack">
          <!-- Banner -->
          <section class="hero card flush" [class.toeic]="exam() === 'toeic'">
            <img [src]="photo()" alt="" />
            <div class="hb">
              <span class="hk"><span class="tile-ic sm"><app-icon [name]="exam() === 'ielts' ? 'school' : 'file-description'" /></span> {{ name() }}</span>
              <h1>Chinh phục {{ name() }} theo lộ trình rõ ràng</h1>
              <p>{{ exam() === 'ielts' ? 'Luyện đầy đủ 4 kỹ năng với bài học, bài tập và đề thi sát thật.' : 'Luyện đủ Part 1–7, Speaking & Writing với giải thích tiếng Việt cho từng câu.' }}</p>
              <div class="row">
                <a class="btn btn-primary btn-lg" [routerLink]="['/session/exam', exam()]" [queryParams]="{ section: nextSection().id }">Tiếp tục học <app-icon name="arrow-right" /></a>
                <button class="btn btn-ghost" type="button" (click)="showRoad()"><app-icon name="map-2" /> Xem lộ trình</button>
              </div>
            </div>
          </section>

          <nav class="tabs card flush" aria-label="Nội dung">
            @for (t of tabs(); track t.id) {
              <button type="button" class="tab" [class.active]="tab() === t.id" (click)="tab.set(t.id)"><app-icon [name]="t.icon" /> {{ t.label }}</button>
            }
          </nav>

          @if (tab() === 'overview') {
            <!-- 4 kỹ năng -->
            <section class="card">
              <div class="card-head"><h2>4 kỹ năng {{ name() }}</h2><button type="button" class="link-more" (click)="tab.set('tips')">Chiến lược làm bài <app-icon name="arrow-right" /></button></div>
              <div class="skills">
                @for (s of skillCards(); track s.skill) {
                  <a class="sk" [routerLink]="s.link" [queryParams]="s.query" [style.--c]="s.color" (click)="s.tab && openTab($event, s.tab)">
                    <div class="skt">
                      <span class="tile-ic"><app-icon [name]="s.icon" /></span>
                      <b>{{ s.title }}</b>
                      <app-ring [value]="s.value" [max]="s.max" [size]="62" [label]="s.unit" [color]="s.color" />
                    </div>
                    <small class="muted">{{ s.desc }}</small>
                    <div class="skf"><small>{{ s.count }}</small><span class="go"><app-icon name="chevron-right" /></span></div>
                  </a>
                }
              </div>
            </section>

            <!-- Lộ trình -->
            <section class="card" id="roadmap">
              <div class="card-head"><app-icon name="map-2" /><h2>Lộ trình học {{ name() }}</h2></div>
              <ol class="road">
                @for (r of roadmap(); track r.title) {
                  <li [class.done]="r.percent >= 100" [class.cur]="r.percent > 0 && r.percent < 100" [class.lock]="r.percent === 0">
                    <span class="dot"><app-icon [name]="r.percent >= 100 ? 'check' : r.percent > 0 ? 'player-play' : 'lock'" [stroke]="2.6" /></span>
                    <b>{{ r.title }}</b>
                    <small class="muted">{{ r.desc }}</small>
                    @if (r.percent > 0) { <span class="tag" [class.green]="r.percent >= 100" [class.blue]="r.percent < 100">{{ r.percent }}%</span> }
                  </li>
                }
              </ol>
              @if (current() === null) { <p class="muted hint">Làm một bài luyện bất kỳ để app ước tính trình độ và đánh dấu chặng hiện tại của bạn.</p> }
            </section>

            <div class="grid-2 two">
              <!-- Gần đây -->
              <section class="card">
                <div class="card-head"><app-icon name="clock" /><h2>Luyện gần đây</h2><button type="button" class="link-more" (click)="tab.set('history')">Xem tất cả <app-icon name="arrow-right" /></button></div>
                @for (h of history().slice(0, 4); track h.id) {
                  <div class="list-row">
                    <span class="tile-ic" [style.--c]="kindColor(h.kind)"><app-icon [name]="kindIcon(h.kind)" /></span>
                    <span class="lr-text"><b>{{ kindLabel(h.kind) }}</b><small>{{ h.date | date: 'dd/MM/yyyy HH:mm' }} · {{ h.label }}</small></span>
                    <div class="bar mini"><i [style.width.%]="h.percent"></i></div><small class="pc">{{ h.percent }}%</small>
                  </div>
                } @empty {
                  <p class="empty">Chưa có bài luyện nào. Chọn một kỹ năng ở trên để bắt đầu.</p>
                }
              </section>

              <!-- Gợi ý -->
              <section class="card">
                <div class="card-head"><app-icon name="file-text" /><h2>Đề luyện được gợi ý</h2><a class="link-more" routerLink="/mock">Xem tất cả <app-icon name="arrow-right" /></a></div>
                @if (nextTest(); as t) {
                  <div class="list-row">
                    <span class="tile-ic" style="--c: var(--tangerine-500)"><app-icon name="clock-play" /></span>
                    <span class="lr-text"><b>{{ t.title }}</b><small>{{ t.count }} · {{ t.minutes }} phút · đã làm {{ t.done }}/{{ t.total }} đề trong bộ đề</small></span>
                    <a class="btn btn-primary btn-sm" [routerLink]="['/session/exam', exam()]" [queryParams]="{ test: t.no }">Làm bài</a>
                  </div>
                }
                @for (s of suggested(); track s.id) {
                  <div class="list-row">
                    <span class="tile-ic" [style.--c]="skillColor[s.skill]"><app-icon [name]="s.ico" /></span>
                    <span class="lr-text"><b>{{ name() }} {{ s.titleEn }}</b><small>{{ s.count }} {{ unit(s) }} · {{ s.minutes }} phút{{ bank[s.id] ? ' · kho ' + bank[s.id] + ' câu' : '' }}</small></span>
                    <a class="btn btn-soft btn-sm" [routerLink]="['/session/exam', exam()]" [queryParams]="{ section: s.id }">Làm bài</a>
                  </div>
                }
              </section>
            </div>
          }

          <!-- Danh sách phần thi theo nhóm (tab Listening / Reading / Speaking & Writing) -->
          @if (tab() === 'listening' || tab() === 'reading' || tab() === 'sw') {
            <section class="card">
              <div class="card-head"><app-icon name="list-check" /><h2>{{ tabTitle() }}</h2></div>
              <div class="parts">
                @for (s of tabSections(); track s.id) {
                  <a class="part" [routerLink]="['/session/exam', exam()]" [queryParams]="{ section: s.id }" [style.--c]="skillColor[s.skill]">
                    <span class="tile-ic"><app-icon [name]="s.ico" /></span>
                    <span class="lr-text"><b>{{ s.title }}</b><small>{{ s.desc }}</small></span>
                    <span class="meta"><span class="tag blue">{{ s.count }} {{ unit(s) }}</span><span class="tag">{{ s.minutes }} phút</span>@if (bank[s.id]; as n) { <span class="tag purple">kho {{ n }}</span> }</span>
                    <span class="btn btn-primary btn-sm">Luyện tập</span>
                  </a>
                }
              </div>
            </section>
          }

          <!-- Chiến lược làm bài -->
          @if (tab() === 'tips') {
            <section class="card">
              <div class="card-head"><app-icon name="bulb" /><h2>Cấu trúc đề & chiến lược làm bài</h2></div>
              <ul class="format">@for (f of info().format; track f) { <li>{{ f }}</li> }</ul>
              @for (s of withTips(); track s.id) {
                <details>
                  <summary><span class="tile-ic sm" [style.--c]="skillColor[s.skill]"><app-icon [name]="s.ico" /></span> {{ s.title }} <app-icon name="chevron-down" class="chev" /></summary>
                  <ul>@for (t of s.tips; track t) { <li>{{ t }}</li> }</ul>
                </details>
              } @empty {
                <p class="muted hint">Mỗi bài luyện {{ name() }} đều có gợi ý và bài mẫu ngay trong lúc làm bài.</p>
              }
            </section>
          }

          <!-- Lịch sử -->
          @if (tab() === 'history') {
            <section class="card">
              <div class="card-head"><app-icon name="history" /><h2>Lịch sử luyện {{ name() }}</h2></div>
              @for (h of history(); track h.id) {
                <div class="list-row">
                  <span class="tile-ic" [style.--c]="kindColor(h.kind)"><app-icon [name]="kindIcon(h.kind)" /></span>
                  <span class="lr-text"><b>{{ kindLabel(h.kind) }}</b><small>{{ h.date | date: 'dd/MM/yyyy HH:mm' }}</small></span>
                  <span class="tag" [class.green]="h.percent >= 70" [class.amber]="h.percent >= 40 && h.percent < 70" [class.red]="h.percent < 40">{{ h.label }}</span>
                </div>
              } @empty {
                <p class="empty">Chưa có bài nào. Kết quả mỗi lần luyện và thi thử sẽ được lưu ở đây.</p>
              }
            </section>
          }
        </div>

        <!-- Cột phải -->
        <aside class="side">
          <section class="card">
            <div class="card-head"><app-icon name="target" class="tg" /><h3>Mục tiêu {{ name() }}</h3><a class="btn btn-soft btn-sm" routerLink="/settings" fragment="goal">Chỉnh sửa</a></div>
            <div class="nums">
              <span><small>{{ exam() === 'ielts' ? 'Current Band' : 'Current Score' }}</small><b>{{ currentText() }}</b></span>
              <app-icon name="arrow-right" class="arr" />
              <span><small>{{ exam() === 'ielts' ? 'Target Band' : 'Target Score' }}</small><b>{{ targetText() }}</b></span>
            </div>
            <div class="pline"><div class="bar" [class.red]="exam() === 'ielts'" [class.blue]="exam() === 'toeic'"><i [style.width.%]="percent()"></i></div><small>{{ currentText() }} / {{ targetText() }}</small></div>
            <p class="muted est">Điểm ước tính từ các bài đã luyện, chỉ để theo dõi tiến bộ.</p>
          </section>

          <section class="card">
            <div class="card-head"><app-icon name="chart-bar" /><h3>Tiến độ theo kỹ năng</h3></div>
            @for (s of skillBars(); track s.label) {
              <div class="srow"><span>{{ s.label }}</span><div class="bar"><i [style.width.%]="s.percent" [style.background]="s.color"></i></div><b>{{ s.text }}</b></div>
            }
          </section>

          <section class="card">
            <div class="card-head"><app-icon name="bulb" class="bl" /><h3>Điểm mạnh & điểm yếu</h3></div>
            <div class="sw good">
              <b><app-icon name="circle-check" /> Điểm mạnh</b>
              <div class="tags">@for (t of strengths(); track t) { <span class="tag">{{ t }}</span> } @empty { <small class="muted">Chưa đủ dữ liệu</small> }</div>
            </div>
            <div class="sw bad">
              <b><app-icon name="alert-triangle" /> Cần cải thiện</b>
              <div class="tags">@for (t of weaknesses(); track t) { <span class="tag red">{{ t }}</span> } @empty { <small class="muted">Chưa đủ dữ liệu</small> }</div>
            </div>
          </section>

          <section class="card">
            <div class="card-head"><app-icon name="folder" /><h3>Tài liệu hữu ích</h3></div>
            <div class="docs">
              <button type="button" class="doc" (click)="tab.set('tips')"><span class="tile-ic sm" style="--c: var(--tangerine-500)"><app-icon name="file-text" /></span><span><b>Chiến lược làm bài</b><small>Mẹo cho từng phần thi</small></span></button>
              <a class="doc" [routerLink]="['/vocab']" [queryParams]="{ exam: exam() }"><span class="tile-ic sm" style="--c: var(--grape-500)"><app-icon name="book" /></span><span><b>Từ vựng {{ name() }}</b><small>{{ vocabCount() }} từ theo chủ đề</small></span></a>
              <a class="doc" routerLink="/grammar"><span class="tile-ic sm" style="--c: var(--leaf-500)"><app-icon name="notebook" /></span><span><b>Ngữ pháp cốt lõi</b><small>12 chủ điểm có bài luyện</small></span></a>
              <a class="doc" [routerLink]="['/session/exam', exam()]" [queryParams]="{ mock: 1 }"><span class="tile-ic sm" style="--c: var(--sky-500)"><app-icon name="clock-play" /></span><span><b>Thi thử {{ info().mockMinutes }} phút</b><small>Có đồng hồ đếm ngược</small></span></a>
            </div>
          </section>
        </aside>
      </div>
    </main>
  `,
  styles: `
    .hero { position: relative; min-height: 230px; display: flex; align-items: center; }
    .hero img { position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; object-position: 60% 60%; }
    .hero::after { content: ''; position: absolute; inset: 0; background: linear-gradient(90deg, var(--white) 0%, color-mix(in srgb, var(--white) 92%, transparent) 38%, color-mix(in srgb, var(--white) 10%, transparent) 78%); }
    .hb { position: relative; z-index: 1; padding: var(--space-6); display: flex; flex-direction: column; gap: var(--space-3); max-width: 640px; }
    .hk { display: flex; align-items: center; gap: var(--space-2); font-weight: 700; font-size: var(--fs-lg); color: var(--ielts); }
    .hk .tile-ic { background: var(--ielts); color: var(--white); }
    .toeic .hk { color: var(--toeic); }
    .toeic .hk .tile-ic { background: var(--toeic); }
    .hero h1 { font-size: var(--fs-3xl); }
    .hero p { color: var(--slate-600); }
    .tabs { padding: 0 var(--space-3); border-bottom: 1px solid var(--line); }
    .skills { display: grid; grid-template-columns: repeat(4, minmax(0, 1fr)); gap: var(--space-3); }
    .sk { display: flex; flex-direction: column; gap: var(--space-2); padding: var(--space-3); border-radius: var(--radius-md); border: 1px solid color-mix(in srgb, var(--c) 22%, var(--white)); background: color-mix(in srgb, var(--c) 4%, var(--white)); transition: box-shadow var(--motion-fast), transform var(--motion-fast); }
    .sk:hover { box-shadow: var(--shadow-md); transform: translateY(-2px); }
    .skt { display: flex; align-items: center; gap: var(--space-2); }
    .skt b { flex: 1; }
    .sk > small { min-height: 2.8em; line-height: 1.4; }
    .skf { display: flex; align-items: center; justify-content: space-between; border-top: 1px solid var(--line); padding-top: var(--space-2); color: var(--ink-soft); }
    .go { width: 26px; height: 26px; border-radius: 50%; border: 1px solid var(--line); background: var(--white); display: grid; place-items: center; color: var(--primary); }
    .go app-icon { width: 16px; height: 16px; }
    .road { list-style: none; margin: 0; padding: 0; display: grid; grid-template-columns: repeat(5, minmax(0, 1fr)); }
    .road li { position: relative; display: flex; flex-direction: column; align-items: center; text-align: center; gap: 4px; padding: 0 var(--space-2); }
    .road li::before { content: ''; position: absolute; top: 14px; left: -50%; width: 100%; height: 2px; background: var(--slate-200); }
    .road li:first-child::before { display: none; }
    .road li.done::before, .road li.cur::before { background: var(--good); }
    .dot { position: relative; z-index: 1; width: 30px; height: 30px; border-radius: 50%; display: grid; place-items: center; background: var(--slate-100); color: var(--ink-mute); border: 2px solid var(--slate-200); }
    .dot app-icon { width: 15px; height: 15px; }
    .done .dot { background: var(--good); border-color: var(--good); color: var(--white); }
    .cur .dot { background: var(--primary); border-color: var(--primary); color: var(--white); box-shadow: 0 0 0 4px var(--sky-100); }
    .road small { line-height: 1.4; }
    .hint { margin-top: var(--space-3); font-size: var(--fs-sm); }
    .two { gap: var(--space-4); }
    .bar.mini { width: 70px; flex: none; }
    .pc { width: 38px; text-align: right; color: var(--ink-soft); }
    .parts { display: flex; flex-direction: column; gap: var(--space-2); }
    .part { display: flex; align-items: center; gap: var(--space-3); padding: var(--space-3); border: 1px solid var(--line); border-radius: var(--radius-md); transition: border-color var(--motion-fast), background var(--motion-fast); }
    .part:hover { border-color: var(--sky-300); background: var(--slate-50); }
    .part .lr-text small { white-space: normal; }
    .meta { display: flex; gap: 6px; flex-wrap: wrap; justify-content: flex-end; max-width: 220px; }
    .format { margin: 0 0 var(--space-3); padding-left: 20px; line-height: 1.7; color: var(--slate-600); }
    details { border-top: 1px solid var(--line); }
    summary { list-style: none; cursor: pointer; display: flex; align-items: center; gap: var(--space-3); padding: var(--space-3) 0; font-weight: 600; }
    summary::-webkit-details-marker { display: none; }
    summary .chev { margin-left: auto; width: 18px; height: 18px; color: var(--ink-mute); transition: transform var(--motion-fast); }
    details[open] summary .chev { transform: rotate(180deg); }
    details ul { margin: 0 0 var(--space-3); padding-left: 56px; line-height: 1.7; color: var(--slate-600); }
    .tg { color: var(--ielts) !important; }
    .bl { color: var(--sun-500) !important; }
    .nums { display: flex; align-items: flex-end; gap: var(--space-5); }
    .nums span { display: flex; flex-direction: column; }
    .nums small { color: var(--ink-soft); }
    .nums b { font-size: var(--fs-3xl); line-height: 1.15; letter-spacing: -0.02em; }
    .arr { width: 20px; height: 20px; color: var(--ink-mute); margin-bottom: 8px; }
    .pline { display: flex; align-items: center; gap: var(--space-3); margin-top: var(--space-3); }
    .pline .bar { flex: 1; }
    .pline small { color: var(--ink-soft); white-space: nowrap; }
    .est { font-size: var(--fs-xs); margin-top: var(--space-2); }
    .srow { display: grid; grid-template-columns: 84px 1fr 44px; align-items: center; gap: var(--space-3); padding: 6px 0; font-size: var(--fs-sm); }
    .srow b { text-align: right; }
    .sw { border-radius: var(--radius-md); padding: var(--space-3); display: flex; flex-direction: column; gap: var(--space-2); border: 1px solid var(--line); }
    .sw + .sw { margin-top: var(--space-2); }
    .sw b { display: flex; align-items: center; gap: var(--space-2); }
    .sw.good b { color: var(--good-dark); }
    .sw.bad { background: var(--bad-soft); border-color: var(--coral-100); }
    .sw.bad b { color: var(--bad-dark); }
    .tags { display: flex; flex-wrap: wrap; gap: 6px; }
    .docs { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: var(--space-2); }
    .doc { display: flex; align-items: flex-start; gap: var(--space-2); padding: var(--space-3); border: 1px solid var(--line); border-radius: var(--radius-md); text-align: left; transition: border-color var(--motion-fast); }
    .doc:hover { border-color: var(--sky-300); }
    .doc span:last-child { display: flex; flex-direction: column; min-width: 0; line-height: 1.35; }
    .doc b { font-size: var(--fs-sm); }
    .doc small { color: var(--ink-soft); }
    @media (max-width: 1320px) { .skills { grid-template-columns: repeat(2, minmax(0, 1fr)); } }
    @media (max-width: 760px) {
      .two { grid-template-columns: minmax(0, 1fr); }
      .road { grid-template-columns: minmax(0, 1fr); gap: var(--space-3); }
      .road li { flex-direction: row; flex-wrap: wrap; text-align: left; }
      .road li::before { display: none; }
      .part { flex-wrap: wrap; }
      .meta { max-width: none; justify-content: flex-start; }
      .hero::after { background: color-mix(in srgb, var(--white) 86%, transparent); }
    }
    @media (max-width: 480px) { .skills { grid-template-columns: minmax(0, 1fr); } }
  `,
})
export class ExamPage {
  private readonly progress = inject(ProgressService);
  private readonly goals = inject(GoalService);
  private readonly route = inject(ActivatedRoute);

  protected readonly skillColor = SKILL_COLORS;
  protected readonly bank = TOEIC_BANK_SIZE as Record<string, number | undefined>;

  /** Kỳ thi của trang: lấy từ data của route (/ielts hoặc /toeic) */
  protected readonly exam = toSignal(this.route.data.pipe(map((d) => (d['exam'] as ExamId) ?? 'ielts')), { requireSync: true });
  protected readonly tab = signal<Tab>((this.route.snapshot.queryParamMap.get('tab') as Tab | null) ?? 'overview');

  protected readonly name = computed(() => (this.exam() === 'ielts' ? 'IELTS' : 'TOEIC'));
  protected readonly info = computed(() => EXAM_INFO[this.exam()]);
  protected readonly photo = computed(() => (this.exam() === 'ielts' ? HERO_PHOTOS.london.src : HERO_PHOTOS.skyline.src));
  protected readonly sections = computed(() => EXAM_SECTIONS.filter((s) => s.exam === this.exam()));
  protected readonly withTips = computed(() => this.sections().filter((s): s is ExamSectionInfo & { tips: string[] } => !!s.tips?.length));
  protected readonly vocabCount = computed(() => topicWordCount(this.exam()));
  protected readonly history = computed(() => this.progress.exams().filter((h) => h.exam === this.exam()));

  protected readonly tabs = computed(() => {
    const base: { id: Tab; label: string; icon: 'layout-dashboard' | 'headphones' | 'book' | 'microphone' | 'bulb' | 'history' }[] = [{ id: 'overview', label: 'Tổng quan', icon: 'layout-dashboard' }];
    if (this.exam() === 'toeic') {
      base.push({ id: 'listening', label: 'Listening (Part 1–4)', icon: 'headphones' }, { id: 'reading', label: 'Reading (Part 5–7)', icon: 'book' }, { id: 'sw', label: 'Speaking & Writing', icon: 'microphone' });
    }
    base.push({ id: 'tips', label: 'Chiến lược làm bài', icon: 'bulb' }, { id: 'history', label: 'Lịch sử', icon: 'history' });
    return base;
  });

  protected readonly tabTitle = computed(() => ({ listening: 'TOEIC Listening – Part 1 đến Part 4', reading: 'TOEIC Reading – Part 5 đến Part 7', sw: 'TOEIC Speaking & Writing' } as Record<string, string>)[this.tab()] ?? '');
  protected readonly tabSections = computed(() => {
    const t = this.tab();
    return this.sections().filter((s) => (t === 'sw' ? s.group === 'sw' : s.group === 'lr' && s.skill === t));
  });

  /** Điểm hiện tại: band (IELTS) hoặc tổng điểm L&R (TOEIC); null nếu chưa luyện */
  protected readonly current = computed(() => (this.exam() === 'ielts' ? this.goals.ielts().overall : this.goals.toeic().total));
  protected readonly currentText = computed(() => (this.exam() === 'ielts' ? bandText(this.goals.ielts().overall) : `${this.goals.toeic().total ?? '—'}`));
  protected readonly targetText = computed(() => (this.exam() === 'ielts' ? this.goals.ielts().target.toFixed(1) : `${this.goals.toeic().target}`));
  protected readonly percent = computed(() => (this.exam() === 'ielts' ? this.goals.ielts().percent : this.goals.toeic().percent));

  /** Bốn thẻ kỹ năng */
  protected readonly skillCards = computed(() => {
    const exam = this.exam();
    const counts: Record<ExamSkill, string> = exam === 'ielts'
      ? { listening: `${IELTS_LISTENING.length} bài nghe`, reading: `${IELTS_READING.length} bài đọc`, writing: `${IELTS_WRITING.length} đề viết`, speaking: `${IELTS_SPEAKING.length} đề nói` }
      : {
          listening: `${this.bankOf(['toeic-part1', 'toeic-part2', 'toeic-part3', 'toeic-part4'])} câu · Part 1–4`,
          reading: `${this.bankOf(['toeic-part5', 'toeic-part6', 'toeic-part7'])} câu · Part 5–7`,
          writing: `${this.bankOf(['toeic-w-picture', 'toeic-w-email', 'toeic-w-opinion'])} đề · Q1–8`,
          speaking: `${this.bankOf(['toeic-s-read', 'toeic-s-picture', 'toeic-s-respond', 'toeic-s-info', 'toeic-s-opinion'])} đề · Q1–11`,
        };
    const toeicDesc: Record<ExamSkill, string> = {
      listening: 'Mô tả tranh, hỏi đáp, hội thoại, bài nói ngắn', reading: 'Điền câu, điền đoạn, đọc hiểu đa văn bản',
      writing: 'Viết câu theo tranh, trả lời email, bài luận', speaking: 'Đọc to, mô tả tranh, trả lời câu hỏi, nêu quan điểm',
    };
    return EXAM_SKILLS.map((skill) => {
      const r = this.goals.ratio(exam, skill);
      const ieltsBand = this.goals.ielts().skills[skill];
      return {
        skill, title: EXAM_SKILL_LABEL[skill].en, icon: ({ listening: 'headphones', reading: 'book', writing: 'pencil', speaking: 'microphone' } as const)[skill],
        color: SKILL_COLORS[skill], desc: exam === 'ielts' ? IELTS_SKILL_DESC[skill] : toeicDesc[skill], count: counts[skill],
        value: exam === 'ielts' ? (ieltsBand ?? 0) : Math.round((r ?? 0) * 100), max: exam === 'ielts' ? 9 : 100, unit: exam === 'ielts' ? 'Band' : '% đúng',
        link: exam === 'ielts' ? `/session/exam/ielts` : '/toeic',
        query: exam === 'ielts' ? { section: `ielts-${skill}` } : { tab: skill === 'listening' || skill === 'reading' ? skill : 'sw' },
        tab: exam === 'toeic' ? ((skill === 'listening' || skill === 'reading' ? skill : 'sw') as Tab) : null,
      };
    });
  });

  /** Thanh tiến độ theo kỹ năng ở cột phải */
  protected readonly skillBars = computed(() => {
    if (this.exam() === 'ielts') {
      const g = this.goals.ielts();
      return EXAM_SKILLS.map((s) => ({ label: EXAM_SKILL_LABEL[s].en, color: SKILL_COLORS[s], percent: ((g.skills[s] ?? 0) / 9) * 100, text: bandText(g.skills[s]) }));
    }
    return EXAM_SKILLS.map((s) => {
      const r = this.goals.ratio('toeic', s);
      return { label: EXAM_SKILL_LABEL[s].en, color: SKILL_COLORS[s], percent: (r ?? 0) * 100, text: r === null ? '—' : `${Math.round(r * 100)}%` };
    });
  });

  /** Điểm trung bình (%) của từng phần thi đã làm, dùng để tìm điểm mạnh / yếu */
  private readonly sectionScores = computed(() => {
    const by = new Map<string, { sum: number; n: number }>();
    for (const h of this.history()) {
      if (isFullExam(h.kind)) continue;
      const b = by.get(h.kind) ?? { sum: 0, n: 0 };
      b.sum += h.percent;
      b.n++;
      by.set(h.kind, b);
    }
    return [...by.entries()].map(([id, b]) => ({ id, title: `${SECTION_BY_ID[id]?.titleEn ?? id}`, avg: Math.round(b.sum / b.n) }));
  });
  protected readonly strengths = computed(() => this.sectionScores().filter((s) => s.avg >= 70).sort((a, b) => b.avg - a.avg).slice(0, 4).map((s) => `${s.title} · ${s.avg}%`));
  protected readonly weaknesses = computed(() => this.sectionScores().filter((s) => s.avg < 70).sort((a, b) => a.avg - b.avg).slice(0, 4).map((s) => `${s.title} · ${s.avg}%`));

  /** Phần thi nên luyện tiếp: phần chưa làm lần nào, nếu đã làm hết thì phần điểm thấp nhất */
  protected readonly nextSection = computed(() => {
    const done = new Map(this.sectionScores().map((s) => [s.id, s.avg]));
    const list = this.sections();
    return list.find((s) => !done.has(s.id)) ?? [...list].sort((a, b) => (done.get(a.id) ?? 0) - (done.get(b.id) ?? 0))[0];
  });

  /** Đề cố định tiếp theo chưa làm trong bộ 20 đề (làm hết thì quay lại đề 1) */
  protected readonly nextTest = computed(() => {
    const exam = this.exam();
    const total = TEST_COUNT[exam];
    const done = new Set(this.history().map((h) => testNoOf(h.kind)).filter((n) => n > 0));
    const no = Array.from({ length: total }, (_, i) => i + 1).find((n) => !done.has(n)) ?? 1;
    return { no, title: testTitle(exam, no), total, done: done.size, count: formatOf(exam, no).count, minutes: formatOf(exam, no).minutes };
  });

  /** Đề gợi ý: ưu tiên phần chưa làm hoặc điểm thấp */
  protected readonly suggested = computed(() => {
    const done = new Map(this.sectionScores().map((s) => [s.id, s.avg]));
    return [...this.sections()].sort((a, b) => (done.get(a.id) ?? -1) - (done.get(b.id) ?? -1)).slice(0, 4);
  });

  /** Lộ trình: % hoàn thành từng chặng theo điểm hiện tại */
  protected readonly roadmap = computed(() => {
    const cur = this.current();
    return ROADMAP[this.exam()].map((r) => ({
      ...r, percent: cur === null ? 0 : cur >= r.to ? 100 : cur <= r.from ? 0 : Math.round(((cur - r.from) / (r.to - r.from)) * 100),
    }));
  });

  private bankOf(ids: string[]): number {
    return ids.reduce((n, id) => n + (this.bank[id] ?? 0), 0);
  }

  protected unit(s: ExamSectionInfo): string {
    return s.skill === 'writing' || s.skill === 'speaking' ? 'đề' : 'câu';
  }

  /** Thẻ kỹ năng TOEIC mở tab tương ứng ngay trên trang thay vì chuyển trang */
  protected openTab(ev: Event, tab: Tab): void {
    ev.preventDefault();
    this.tab.set(tab);
  }

  /** Mở tab Tổng quan và cuộn tới phần lộ trình */
  protected showRoad(): void {
    this.tab.set('overview');
    setTimeout(() => document.getElementById('roadmap')?.scrollIntoView({ behavior: 'smooth', block: 'center' }), 0);
  }

  protected kindLabel(kind: ExamKind): string {
    if (kind === 'mock') return this.exam() === 'toeic' ? 'Thi thử Listening & Reading' : 'Thi thử IELTS';
    if (kind === 'mock-sw') return 'Thi thử Speaking & Writing';
    if (testNoOf(kind)) return `Practice Test ${String(testNoOf(kind)).padStart(2, '0')}`;
    return SECTION_BY_ID[kind]?.title ?? kind;
  }

  protected kindIcon(kind: ExamKind) {
    if (isFullExam(kind)) return 'clock-play' as const;
    return SECTION_BY_ID[kind]?.ico ?? 'target';
  }

  protected kindColor(kind: ExamKind): string {
    const skill = SECTION_BY_ID[kind]?.skill;
    return skill ? SKILL_COLORS[skill] : 'var(--tangerine-500)';
  }
}
