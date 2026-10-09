/**
 * vocab.page.ts – Trang "Từ vựng & Cụm từ" (thiết kế theo ảnh "Offline English Vocabulary Dashboard").
 *
 *  - Đầu trang: số từ đang học / cần ôn / đã ghi nhớ và nút "Ôn tập ngay".
 *  - Tab "Từ vựng": bảng toàn bộ kho từ, lọc theo nhóm (B1–B2, IELTS, TOEIC, đời sống), chủ đề,
 *    TRÌNH ĐỘ CEFR (mặc định B1–B2), từ loại, trạng thái ghi nhớ; tìm theo tiếng Anh hoặc tiếng Việt; phân trang.
 *  - Tab "Bài học": các bài ~12 từ của một chủ đề, học bằng thẻ ghi nhớ (flashcard).
 *  - Tab "Yêu thích": từ đã lưu. Tab "Ôn tập": từ đến hạn theo phương pháp lặp lại ngắt quãng.
 *  - Cột phải: học nhanh, vòng tiến độ, chủ đề phổ biến.
 *  Bấm vào một từ để mở trang chi tiết (/word/<mã từ>). Nghe phát âm bằng file thu sẵn – không cần Internet.
 */
import { ChangeDetectionStrategy, Component, computed, effect, inject, resource, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { map } from 'rxjs';
import { ProgressService } from '../../core/progress.service';
import { SpeechService } from '../../core/speech.service';
import { UxService } from '../../core/ux.service';
import { VocabService } from '../../core/vocab.service';
import { TOPICS, TOPIC_BY_ID, totalWordCount } from '../../data/topics';
import { TopicId } from '../../models/content.model';
import { CEFR_LEVELS, CefrLevel, POS_LABEL, Word } from '../../models/vocab.model';
import { DonutComponent } from '../../shared/donut.component';
import { IconComponent } from '../../theme/icon.component';
import { IconName } from '../../theme/icons';

type Tab = 'words' | 'lessons' | 'saved' | 'review';
/** Trạng thái ghi nhớ của một từ */
export type WordStatus = 'new' | 'learning' | 'known';

const STATUS_LABEL: Record<WordStatus, string> = { new: 'Chưa học', learning: 'Đang học', known: 'Đã nhớ' };

/** Nhóm chủ đề: kỳ thi hoặc đời sống */
const GROUPS: { id: string; label: string; topics: TopicId[] }[] = [
  { id: 'cefr', label: 'B1–B2 (CEFR)', topics: ['b1', 'b2'] },
  { id: 'ielts', label: 'IELTS', topics: ['ielts'] },
  { id: 'toeic', label: 'TOEIC', topics: ['toeic'] },
  { id: 'life', label: 'Đời sống', topics: ['daily', 'food', 'health', 'travel'] },
  { id: 'work', label: 'Học tập & Công việc', topics: ['study', 'it'] },
];

/** Icon và màu của từng chủ đề (ô "Chủ đề phổ biến") */
const TOPIC_ICON: Record<TopicId, { icon: IconName; color: string }> = {
  daily: { icon: 'home', color: 'var(--sun-500)' }, it: { icon: 'device-laptop', color: 'var(--sky-500)' },
  travel: { icon: 'plane', color: 'var(--sky-400)' }, study: { icon: 'school', color: 'var(--grape-500)' },
  health: { icon: 'heartbeat', color: 'var(--coral-500)' }, food: { icon: 'tools-kitchen-2', color: 'var(--tangerine-500)' },
  b1: { icon: 'book', color: 'var(--leaf-600)' }, b2: { icon: 'books', color: 'var(--tangerine-600)' },
  ielts: { icon: 'certificate', color: 'var(--blossom-600)' }, toeic: { icon: 'briefcase', color: 'var(--sky-600)' },
};

@Component({
  selector: 'app-vocab',
  imports: [RouterLink, IconComponent, DonutComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <main class="page stack">
      <div class="crumbs"><app-icon name="school" /> <span>Từ vựng &amp; Cụm từ</span> <app-icon name="chevron-right" /> <span>Từ vựng</span></div>

      <header class="card page-head">
        <span class="tile-ic lg" style="--c: var(--grape-600)"><app-icon name="letter-case" /></span>
        <div class="ph-text">
          <h1>Từ vựng</h1>
          <p>Học từ vựng theo chủ đề và kỳ thi. Ghi nhớ hiệu quả với flashcard và ôn tập ngắt quãng.</p>
        </div>
        <div class="stat"><span class="tile-ic" style="--c: var(--leaf-500)"><app-icon name="download" /></span><span><b>{{ counts().learning }}</b><small>từ đang học</small></span></div>
        <div class="stat"><span class="tile-ic" style="--c: var(--tangerine-500)"><app-icon name="refresh" /></span><span><b>{{ due() }}</b><small>từ cần ôn tập</small></span></div>
        <div class="stat"><span class="tile-ic" style="--c: var(--grape-500)"><app-icon name="brain" /></span><span><b>{{ counts().known }}</b><small>từ đã ghi nhớ</small></span></div>
        <a class="btn btn-primary btn-lg" routerLink="/session/review/all" [class.disabled]="due() === 0" [attr.aria-disabled]="due() === 0">Ôn tập ngay <app-icon name="arrow-right" /></a>
      </header>

      <nav class="tabs card flush" aria-label="Chế độ xem">
        @for (t of tabs; track t.id) {
          <button type="button" class="tab" [class.active]="tab() === t.id" (click)="setTab(t.id)"><app-icon [name]="t.icon" /> {{ t.label }}</button>
        }
      </nav>

      <div class="cols">
        <section class="card flush main">
          @if (tab() === 'lessons') {
            <!-- ===== BÀI HỌC ===== -->
            <div class="filters">
              <select class="select" [value]="lessonTopic()" (change)="topic.set($any($event.target).value)" aria-label="Chủ đề">
                @for (t of topics; track t.id) { <option [value]="t.id" [selected]="t.id === lessonTopic()">Chủ đề: {{ t.title }}</option> }
              </select>
              <span class="muted cnt">{{ lessons().length }} bài · mỗi bài khoảng 12 từ, học bằng thẻ ghi nhớ rồi làm bài kiểm tra nhanh</span>
            </div>
            <div class="lgrid">
              @for (l of lessons(); track l.index) {
                <a class="lesson" [routerLink]="['/learn', lessonTopic(), l.index]">
                  <span class="le">{{ l.icon }}</span>
                  <span class="lr-text"><b>Bài {{ l.index + 1 }} · {{ l.vi }}</b><small>{{ l.en }} · {{ l.learned }}/{{ l.total }} từ</small>
                    <span class="bar"><i [style.width.%]="(l.learned / l.total) * 100"></i></span>
                  </span>
                  @if (l.best !== undefined) { <span class="tag green">{{ l.best }}%</span> }
                  <span class="btn btn-soft btn-sm">{{ l.learned >= l.total ? 'Học lại' : l.learned > 0 ? 'Tiếp tục' : 'Bắt đầu' }}</span>
                </a>
              }
            </div>
          } @else {
            <!-- ===== BẢNG TỪ VỰNG ===== -->
            <div class="filters">
              <select class="select" [value]="group()" (change)="setGroup($any($event.target).value)" aria-label="Nhóm">
                <option value="">Kỳ thi: Tất cả</option>
                @for (g of groups; track g.id) { <option [value]="g.id" [selected]="g.id === group()">{{ g.label }}</option> }
              </select>
              <select class="select" [value]="topic()" (change)="setTopic($any($event.target).value)" aria-label="Chủ đề">
                <option value="">Chủ đề: Tất cả</option>
                @for (t of topicOptions(); track t.id) { <option [value]="t.id" [selected]="t.id === topic()">{{ t.title }}</option> }
              </select>
              <select class="select" [value]="level()" (change)="setLevel($any($event.target).value)" aria-label="Trình độ">
                <option value="" [selected]="level() === ''">Trình độ: Tất cả</option>
                <option value="b1b2" [selected]="level() === 'b1b2'">Trình độ: B1–B2</option>
                @for (l of levels; track l) { <option [value]="l" [selected]="level() === l">Trình độ: {{ l }}</option> }
              </select>
              <select class="select" [value]="pos()" (change)="pos.set($any($event.target).value); page.set(1)" aria-label="Từ loại">
                <option value="">Từ loại: Tất cả</option>
                @for (p of posOptions; track p[0]) { <option [value]="p[0]">{{ p[1] }}</option> }
              </select>
              <select class="select" [value]="status()" (change)="status.set($any($event.target).value); page.set(1)" aria-label="Trạng thái">
                <option value="">Trạng thái: Tất cả</option>
                <option value="new">Chưa học</option>
                <option value="learning">Đang học</option>
                <option value="known">Đã nhớ</option>
              </select>
              <label class="find"><app-icon name="search" /><input type="search" placeholder="Tìm từ vựng..." [value]="query()" (input)="query.set($any($event.target).value); page.set(1)" /></label>
            </div>

            <div class="scroll">
              <table class="tbl">
                <thead>
                  <tr><th>Từ vựng</th><th>Phiên âm</th><th>Từ loại</th><th>Nghĩa</th><th>Chủ đề</th><th>Kỳ thi</th><th>Trình độ</th><th>Trạng thái</th><th class="act">Thao tác</th></tr>
                </thead>
                <tbody>
                  @for (w of rows(); track w.id) {
                    <tr>
                      <td class="w">
                        <a [routerLink]="['/word', w.id]">{{ w.word }}</a>
                        <button class="icon-btn" type="button" (click)="say(w)" [attr.aria-label]="'Nghe phát âm ' + w.word"><app-icon name="volume" /></button>
                      </td>
                      <td class="ipa">/{{ w.ipa }}/</td>
                      <td class="muted">{{ posLabel(w.pos) }}</td>
                      <td>{{ w.vi }}</td>
                      <td><span class="tag" [style.--c]="topicIcon[w.topicId].color">{{ lessonName(w) }}</span></td>
                      <td><span class="tag" [class.red]="w.topicId === 'ielts'" [class.blue]="w.topicId !== 'ielts'">{{ examTag(w.topicId) }}</span></td>
                      <td><span class="tag lv" [class]="'tag lv ' + w.level">{{ w.level }}</span></td>
                      <td><span class="st" [class]="'st ' + statusOf(w.id)">{{ statusLabel[statusOf(w.id)] }}</span></td>
                      <td class="act">
                        <button class="icon-btn" type="button" [class.on]="saved(w.id)" (click)="save(w)" [attr.aria-label]="saved(w.id) ? 'Bỏ yêu thích' : 'Thêm vào yêu thích'"><app-icon name="heart" /></button>
                        <a class="icon-btn" [routerLink]="['/word', w.id]" [attr.aria-label]="'Chi tiết từ ' + w.word"><app-icon name="chevron-right" /></a>
                      </td>
                    </tr>
                  } @empty {
                    <tr><td colspan="9" class="empty">{{ data.isLoading() ? 'Đang mở kho từ vựng...' : emptyText() }}</td></tr>
                  }
                </tbody>
              </table>
            </div>

            <footer class="pager">
              <span class="muted">Hiển thị {{ first() }} – {{ last() }} trong {{ filtered().length }} từ vựng</span>
              <div class="pg">
                <button type="button" class="pb" [disabled]="page() <= 1" (click)="page.set(page() - 1)" aria-label="Trang trước"><app-icon name="chevron-left" /></button>
                @for (p of pageList(); track $index) {
                  @if (p === 0) { <span class="dots">…</span> } @else { <button type="button" class="pb" [class.on]="p === page()" (click)="page.set(p)">{{ p }}</button> }
                }
                <button type="button" class="pb" [disabled]="page() >= pageCount()" (click)="page.set(page() + 1)" aria-label="Trang sau"><app-icon name="chevron-right" /></button>
              </div>
              <label class="muted per">Hiển thị
                <select class="select" [value]="size()" (change)="size.set(+$any($event.target).value); page.set(1)">
                  @for (n of [8, 15, 30, 50]; track n) { <option [value]="n">{{ n }}</option> }
                </select> / trang
              </label>
            </footer>
          }
        </section>

        <aside class="side">
          <section class="card">
            <div class="card-head"><app-icon name="bolt" class="pu" /><div class="grow"><h3>Học nhanh</h3><small class="muted">Chọn chế độ học phù hợp với mục tiêu của bạn</small></div></div>
            <div class="modes">
              <a class="mode" [routerLink]="['/learn', lessonTopic(), nextLesson()]"><span class="tile-ic" style="--c: var(--grape-500)"><app-icon name="cards" /></span><span><b>Flashcard</b><small>Lật thẻ ghi nhớ</small></span></a>
              <a class="mode" [routerLink]="['/session/skill', scope()]" [queryParams]="{ skill: 'vocab' }"><span class="tile-ic" style="--c: var(--leaf-500)"><app-icon name="brain" /></span><span><b>Nhớ nghĩa</b><small>Xem từ – đoán nghĩa</small></span></a>
              <a class="mode" [routerLink]="['/session/skill', scope()]" [queryParams]="{ skill: 'listening' }"><span class="tile-ic" style="--c: var(--sky-500)"><app-icon name="headphones" /></span><span><b>Nghe từ</b><small>Nghe – chọn đáp án</small></span></a>
              <a class="mode" [routerLink]="['/session/skill', scope()]" [queryParams]="{ skill: 'writing' }"><span class="tile-ic" style="--c: var(--tangerine-500)"><app-icon name="keyboard" /></span><span><b>Điền từ</b><small>Viết từ và câu</small></span></a>
            </div>
          </section>

          <section class="card">
            <div class="card-head"><app-icon name="progress-check" /><h3>Tiến độ học từ vựng</h3><a class="link-more" routerLink="/progress">Xem chi tiết <app-icon name="arrow-right" /></a></div>
            <div class="prog">
              <app-donut [segments]="donut()" [total]="total" [size]="132" [thickness]="11"><b>{{ counts().known }}</b><small>/ {{ total }} từ</small></app-donut>
              <ul>
                <li><i style="background: var(--good)"></i><span>Đã nhớ</span><b>{{ counts().known }}</b></li>
                <li><i style="background: var(--primary)"></i><span>Đang học</span><b>{{ counts().learning }}</b></li>
                <li><i style="background: var(--tangerine-500)"></i><span>Cần ôn tập</span><b>{{ due() }}</b></li>
                <li><i style="background: var(--slate-300)"></i><span>Chưa học</span><b>{{ total - counts().known - counts().learning }}</b></li>
              </ul>
            </div>
          </section>

          <section class="card">
            <div class="card-head"><app-icon name="trending-up" /><h3>Theo trình độ CEFR</h3></div>
            @for (l of levelRows(); track l.level) {
              <button type="button" class="lrow" [class.on]="level() === l.level" (click)="setLevel(level() === l.level ? '' : l.level)" [attr.aria-pressed]="level() === l.level">
                <span class="tag lv" [class]="'tag lv ' + l.level">{{ l.level }}</span>
                <span class="bar"><i [style.width.%]="l.percent"></i></span>
                <small>{{ l.learned }}/{{ l.total }}</small>
              </button>
            }
            <small class="muted cefr">Trình độ theo danh sách CEFR-J; từ ngoài danh sách được ước lượng theo chủ đề.</small>
          </section>

          <section class="card">
            <div class="card-head"><app-icon name="category" /><h3>Chủ đề phổ biến</h3></div>
            <div class="tgrid">
              @for (t of topics; track t.id) {
                <button type="button" class="tp" [class.on]="topic() === t.id" (click)="pickTopic(t.id)">
                  <span class="tile-ic sm" [style.--c]="topicIcon[t.id].color"><app-icon [name]="topicIcon[t.id].icon" /></span>
                  <span><b>{{ t.titleEn }}</b><small>{{ learnedIn(t.id) }}/{{ wordCount(t.id) }} từ</small></span>
                </button>
              }
            </div>
          </section>
        </aside>
      </div>
    </main>
  `,
  styles: `
    .page-head .stat { min-width: 150px; }
    .tabs { padding: 0 var(--space-3); border-bottom: 1px solid var(--line); }
    .filters { display: flex; flex-wrap: wrap; align-items: center; gap: var(--space-2); padding: var(--space-3) var(--space-4); }
    .find { flex: 1; min-width: 160px; display: flex; align-items: center; gap: var(--space-2); height: 36px; padding: 0 var(--space-3); border-radius: var(--radius-md); background: var(--slate-100); color: var(--ink-soft); }
    .find input { flex: 1; min-width: 0; border: 0; outline: 0; background: transparent; }
    .find app-icon { width: 18px; height: 18px; }
    .cnt { font-size: var(--fs-sm); }
    .scroll { overflow-x: auto; }
    .tbl td.w { white-space: nowrap; font-weight: 700; }
    .tbl td.w a:hover { color: var(--primary); }
    .tbl td.w .icon-btn { width: 30px; height: 30px; vertical-align: middle; margin-left: 2px; }
    .ipa { color: var(--slate-600); white-space: nowrap; }
    .act { text-align: right; white-space: nowrap; }
    .act .icon-btn { width: 30px; height: 30px; color: var(--ink-mute); }
    .act .icon-btn.on { background: transparent; color: var(--blossom-500); }
    .act .icon-btn.on ::ng-deep svg { fill: currentColor; }
    .lv.A1, .lv.A2 { --c: var(--slate-500); }
    .lv.B1 { --c: var(--leaf-600); }
    .lv.B2 { --c: var(--tangerine-600); }
    .lrow { display: grid; grid-template-columns: 44px 1fr 74px; align-items: center; gap: var(--space-3); width: 100%; padding: 6px var(--space-2); border-radius: var(--radius-sm); text-align: left; }
    .lrow:hover, .lrow.on { background: var(--primary-soft); }
    .lrow small { text-align: right; color: var(--slate-600); }
    .lrow .bar { display: block; }
    .cefr { display: block; margin-top: var(--space-2); line-height: 1.5; }
    .st { display: inline-block; min-width: 86px; text-align: center; padding: 5px 10px; border-radius: var(--radius-sm); border: 1px solid var(--line); background: var(--slate-50); color: var(--slate-600); font-size: var(--fs-xs); font-weight: 600; }
    .st.learning { background: var(--sky-50); border-color: var(--sky-300); color: var(--primary-dark); }
    .st.known { background: var(--leaf-50); border-color: var(--leaf-300); color: var(--leaf-700); }
    .pager { display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: var(--space-3); padding: var(--space-3) var(--space-4); border-top: 1px solid var(--line); font-size: var(--fs-sm); }
    .pg { display: flex; align-items: center; gap: 4px; }
    .pb { min-width: 32px; height: 32px; padding: 0 6px; border-radius: var(--radius-sm); border: 1px solid var(--line); background: var(--white); display: grid; place-items: center; font-size: var(--fs-sm); }
    .pb:hover:not(:disabled) { border-color: var(--primary); color: var(--primary); }
    .pb.on { background: var(--primary); border-color: var(--primary); color: var(--white); }
    .pb:disabled { opacity: 0.4; cursor: default; }
    .pb app-icon { width: 16px; height: 16px; }
    .dots { padding: 0 4px; color: var(--ink-mute); }
    .per { display: flex; align-items: center; gap: var(--space-2); }
    .lgrid { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: var(--space-3); padding: 0 var(--space-4) var(--space-4); }
    .lesson { display: flex; align-items: center; gap: var(--space-3); padding: var(--space-3); border: 1px solid var(--line); border-radius: var(--radius-md); transition: border-color var(--motion-fast), background var(--motion-fast); }
    .lesson:hover { border-color: var(--sky-300); background: var(--slate-50); }
    .le { width: 42px; height: 42px; display: grid; place-items: center; font-size: 1.5rem; background: var(--slate-100); border-radius: var(--radius-md); flex: none; }
    .lesson .bar { display: block; margin-top: 6px; height: 6px; }
    .pu { color: var(--grape-500) !important; }
    .grow { flex: 1; min-width: 0; }
    .modes, .tgrid { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: var(--space-2); }
    .mode, .tp { display: flex; align-items: center; gap: var(--space-2); padding: var(--space-3); border: 1px solid var(--line); border-radius: var(--radius-md); text-align: left; transition: border-color var(--motion-fast), background var(--motion-fast); }
    .tp { padding: var(--space-2); }
    .mode:hover, .tp:hover { border-color: var(--sky-300); }
    .tp.on { border-color: var(--primary); background: var(--primary-soft); }
    .mode span:last-child, .tp span:last-child { display: flex; flex-direction: column; min-width: 0; line-height: 1.3; }
    .mode b, .tp b { font-size: var(--fs-sm); overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
    .mode small, .tp small { color: var(--ink-soft); font-size: 0.72rem; }
    .prog { display: flex; align-items: center; gap: var(--space-4); }
    .prog ul { list-style: none; margin: 0; padding: 0; flex: 1; display: flex; flex-direction: column; gap: var(--space-2); font-size: var(--fs-sm); }
    .prog li { display: flex; align-items: center; gap: var(--space-2); }
    .prog li span { flex: 1; color: var(--slate-600); }
    .prog i { width: 10px; height: 10px; border-radius: 50%; }
    @media (max-width: 1320px) { .page-head .stat { min-width: 0; } }
    @media (max-width: 760px) { .lgrid { grid-template-columns: minmax(0, 1fr); } .pager { justify-content: center; } }
  `,
})
export class VocabPage {
  private readonly progress = inject(ProgressService);
  private readonly ux = inject(UxService);
  private readonly speech = inject(SpeechService);
  private readonly vocab = inject(VocabService);
  private readonly route = inject(ActivatedRoute);

  protected readonly topics = TOPICS;
  protected readonly groups = GROUPS;
  protected readonly topicIcon = TOPIC_ICON;
  protected readonly statusLabel = STATUS_LABEL;
  protected readonly posOptions = Object.entries(POS_LABEL);
  protected readonly levels = CEFR_LEVELS;
  protected readonly total = totalWordCount();
  protected readonly tabs: { id: Tab; label: string; icon: IconName }[] = [
    { id: 'words', label: 'Từ vựng', icon: 'file-text' },
    { id: 'lessons', label: 'Bài học (Flashcard)', icon: 'cards' },
    { id: 'saved', label: 'Yêu thích', icon: 'heart' },
    { id: 'review', label: 'Ôn tập', icon: 'refresh' },
  ];

  protected readonly tab = signal<Tab>('words');
  protected readonly group = signal('');
  protected readonly topic = signal<TopicId | ''>('');
  protected readonly pos = signal('');
  /** Lọc theo trình độ CEFR – mặc định chỉ hiện từ B1–B2 */
  protected readonly level = signal<CefrLevel | 'b1b2' | ''>('b1b2');
  protected readonly status = signal<WordStatus | ''>('');
  protected readonly query = signal('');
  protected readonly page = signal(1);
  protected readonly size = signal(8);
  protected readonly due = this.progress.dueCount;

  /** Tham số trên đường dẫn: /vocab/:id chọn sẵn chủ đề; ?exam=ielts|toeic; ?tab=lessons */
  private readonly params = toSignal(
    this.route.paramMap.pipe(map((p) => p.get('id') as TopicId | null)),
    { requireSync: true },
  );
  private readonly queryParams = toSignal(this.route.queryParamMap, { requireSync: true });

  /** Toàn bộ kho từ (10 chủ đề – nạp từ các file đóng gói sẵn) */
  protected readonly data = resource({ loader: () => this.vocab.loadMany('all') });
  private readonly allWords = computed(() => this.data.value()?.flatMap((t) => t.words) ?? []);

  /** Chủ đề dùng cho tab Bài học và ô Flashcard (mặc định theo mục tiêu học) */
  protected readonly lessonTopic = computed<TopicId>(() => {
    const t = this.topic();
    if (t) return t;
    const g = this.progress.settings().goal;
    return g === 'toeic' ? 'toeic' : g === 'ielts' ? 'ielts' : g === 'work' ? 'it' : g === 'kids' ? 'daily' : 'b1';
  });
  /** Phạm vi cho các bài luyện nhanh */
  protected readonly scope = computed(() => this.topic() || 'all');

  protected readonly topicOptions = computed(() => {
    const g = GROUPS.find((x) => x.id === this.group());
    return g ? TOPICS.filter((t) => g.topics.includes(t.id)) : TOPICS;
  });

  /** Số từ theo trạng thái trên toàn kho */
  protected readonly counts = computed(() => {
    let learning = 0;
    let known = 0;
    for (const w of Object.values(this.progress.state().words)) {
      if (w.box >= 3) known++;
      else if (w.seen > 0 || w.box > 0) learning++;
    }
    return { learning, known };
  });

  protected readonly donut = computed(() => {
    const c = this.counts();
    const due = Math.min(this.due(), c.learning + c.known);
    return [
      { value: c.known, color: 'var(--good)' },
      { value: Math.max(0, c.learning - due), color: 'var(--primary)' },
      { value: due, color: 'var(--tangerine-500)' },
    ];
  });

  /** Danh sách từ sau khi lọc */
  protected readonly filtered = computed(() => {
    const tab = this.tab();
    const group = GROUPS.find((x) => x.id === this.group());
    const topic = this.topic();
    const pos = this.pos();
    const level = this.level();
    const status = this.status();
    const q = this.query().trim().toLowerCase();
    this.progress.state(); // tự cập nhật khi tiến độ đổi
    const due = tab === 'review' ? new Set(this.progress.dueWordIds()) : null;
    return this.allWords().filter((w) => {
      if (topic ? w.topicId !== topic : group && !group.topics.includes(w.topicId)) return false;
      if (pos && w.pos !== pos) return false;
      if (level === 'b1b2' ? w.level !== 'B1' && w.level !== 'B2' : level && w.level !== level) return false;
      if (tab === 'saved' && !this.progress.isBookmarked(w.id)) return false;
      if (due && !due.has(w.id)) return false;
      if (status && this.statusOf(w.id) !== status) return false;
      return !q || w.word.toLowerCase().includes(q) || w.vi.toLowerCase().includes(q);
    });
  });

  protected readonly pageCount = computed(() => Math.max(1, Math.ceil(this.filtered().length / this.size())));
  protected readonly rows = computed(() => {
    const p = Math.min(this.page(), this.pageCount());
    return this.filtered().slice((p - 1) * this.size(), p * this.size());
  });
  protected readonly first = computed(() => (this.filtered().length ? (Math.min(this.page(), this.pageCount()) - 1) * this.size() + 1 : 0));
  protected readonly last = computed(() => Math.min(this.filtered().length, Math.min(this.page(), this.pageCount()) * this.size()));

  /** Các số trang hiển thị (0 = dấu …) */
  protected readonly pageList = computed(() => {
    const n = this.pageCount();
    const p = Math.min(this.page(), n);
    if (n <= 7) return Array.from({ length: n }, (_, i) => i + 1);
    const out = [1];
    if (p > 3) out.push(0);
    for (let i = Math.max(2, p - 1); i <= Math.min(n - 1, p + 1); i++) out.push(i);
    if (p < n - 2) out.push(0);
    out.push(n);
    return out;
  });

  /** Các bài học của chủ đề đang chọn */
  protected readonly lessons = computed(() => {
    const t = this.data.value()?.find((x) => x.topicId === this.lessonTopic());
    this.progress.state();
    return (t?.lessons ?? []).map((l) => ({
      index: l.index, icon: l.icon, vi: l.vi, en: l.en, total: l.words.length,
      learned: this.progress.learnedIn(l.words.map((w) => w.id)), best: this.progress.lessonBest(t!.topicId, l.index),
    }));
  });
  /** Bài học đầu tiên chưa thuộc hết (cho ô Flashcard) */
  protected readonly nextLesson = computed(() => this.lessons().find((l) => l.learned < l.total)?.index ?? 0);

  protected readonly emptyText = computed(() =>
    this.tab() === 'saved' ? 'Chưa có từ yêu thích. Bấm biểu tượng trái tim ở một từ để lưu lại.'
      : this.tab() === 'review' ? 'Hôm nay không còn từ nào cần ôn. Học thêm bài mới nhé!'
        : 'Không có từ nào phù hợp bộ lọc.');

  constructor() {
    // Áp dụng tham số trên đường dẫn mỗi khi thay đổi
    effect(() => {
      const id = this.params();
      const q = this.queryParams();
      const exam = q.get('exam');
      if (id && TOPIC_BY_ID[id]) this.topic.set(id);
      else if (exam === 'ielts' || exam === 'toeic') { this.group.set(exam); this.topic.set(exam); }
      const tab = q.get('tab') as Tab | null;
      if (tab && this.tabs.some((t) => t.id === tab)) this.tab.set(tab);
      this.page.set(1);
    });
  }

  protected setTab(tab: Tab): void {
    this.tab.set(tab);
    this.page.set(1);
  }

  protected setGroup(id: string): void {
    this.group.set(id);
    const g = GROUPS.find((x) => x.id === id);
    if (g && this.topic() && !g.topics.includes(this.topic() as TopicId)) this.topic.set('');
    this.page.set(1);
  }

  protected setLevel(value: string): void {
    this.level.set(value as CefrLevel | 'b1b2' | '');
    this.page.set(1);
  }

  /** Số từ và số từ đã thuộc theo từng trình độ CEFR */
  protected readonly levelRows = computed(() => {
    this.progress.state();
    return CEFR_LEVELS.map((level) => {
      const words = this.allWords().filter((w) => w.level === level);
      const learned = words.filter((w) => this.progress.isLearned(w.id)).length;
      return { level, total: words.length, learned, percent: words.length ? (learned / words.length) * 100 : 0 };
    });
  });

  protected setTopic(id: string): void {
    this.topic.set(id as TopicId | '');
    this.page.set(1);
  }

  /** Bấm một chủ đề ở cột phải: lọc bảng theo chủ đề đó (bấm lần nữa để bỏ lọc) */
  protected pickTopic(id: TopicId): void {
    this.group.set('');
    this.topic.set(this.topic() === id ? '' : id);
    this.page.set(1);
  }

  protected statusOf(id: string): WordStatus {
    const s = this.progress.wordState(id);
    if (!s || (s.seen === 0 && s.box === 0)) return 'new';
    return s.box >= 3 ? 'known' : 'learning';
  }

  protected saved(id: string): boolean {
    return this.progress.isBookmarked(id);
  }

  protected posLabel(pos: string): string {
    return POS_LABEL[pos] ?? pos;
  }

  /** Tên bài học (chủ điểm nhỏ) chứa từ */
  protected lessonName(w: Word): string {
    return this.data.value()?.find((t) => t.topicId === w.topicId)?.lessons[w.lessonIndex]?.en ?? TOPIC_BY_ID[w.topicId].titleEn;
  }

  protected examTag(id: TopicId): string {
    return id === 'ielts' ? 'IELTS' : id === 'toeic' ? 'TOEIC' : id === 'b1' || id === 'b2' ? 'CEFR' : TOPIC_BY_ID[id].titleEn.split(' ')[0];
  }

  protected wordCount(id: TopicId): number {
    return this.data.value()?.find((t) => t.topicId === id)?.words.length ?? 0;
  }

  protected learnedIn(id: TopicId): number {
    this.progress.state();
    return this.progress.learnedCount(id);
  }

  protected say(w: Word): void {
    void this.speech.speakEn(w.word);
  }

  protected save(w: Word): void {
    this.progress.toggleBookmark(w.id);
    this.ux.toast(this.progress.isBookmarked(w.id) ? `Đã thêm “${w.word}” vào yêu thích` : `Đã bỏ “${w.word}” khỏi yêu thích`, 'good', 1600);
  }
}
