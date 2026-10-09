/**
 * errors.page.ts – Trang "Error Review": tổng hợp các câu trả lời sai để xem lại và luyện lại.
 *
 *  - Mỗi câu sai trong mọi bài luyện / kiểm tra / thi thử được lưu vào máy (ProgressService.logErrors,
 *    giữ 300 câu gần nhất): đề bài, câu trả lời của bạn, đáp án đúng và giải thích.
 *  - Lọc theo kỹ năng, kỳ thi, tìm theo nội dung; "Đã hiểu" để gỡ câu khỏi danh sách.
 *  - Cột phải: phân loại lỗi theo kỹ năng, các từ vựng hay sai nhất, gợi ý cải thiện.
 */
import { ChangeDetectionStrategy, Component, computed, inject, resource, signal } from '@angular/core';
import { DatePipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ProgressService } from '../../core/progress.service';
import { SpeechService } from '../../core/speech.service';
import { VocabService } from '../../core/vocab.service';
import { SKILL_INFO } from '../../data/topics';
import { Skill } from '../../models/content.model';
import { ErrorItem } from '../../models/progress.model';
import { IconComponent } from '../../theme/icon.component';
import { SKILL_COLORS } from '../../theme/theme';

const SKILLS: Skill[] = ['listening', 'reading', 'writing', 'speaking', 'vocab'];

@Component({
  selector: 'app-errors',
  imports: [RouterLink, DatePipe, IconComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <main class="page stack">
      <div class="crumbs"><app-icon name="school" /> <span>Error Review</span></div>

      <header class="card page-head">
        <span class="tile-ic lg" style="--c: var(--coral-500)"><app-icon name="alert-triangle" /></span>
        <div class="ph-text">
          <h1>Error Review</h1>
          <p>Tổng hợp và phân tích tất cả câu sai để học hiệu quả hơn. Xem giải thích, rồi luyện lại cho tới khi nhớ.</p>
        </div>
        <div class="stat"><span class="tile-ic" style="--c: var(--coral-500)"><app-icon name="circle-x" /></span><span><b>{{ all().length }}</b><small>câu sai cần xem lại</small></span></div>
        <div class="stat"><span class="tile-ic" style="--c: var(--tangerine-500)"><app-icon name="refresh" /></span><span><b>{{ due() }}</b><small>từ cần ôn tập</small></span></div>
        <a class="btn btn-primary btn-lg" routerLink="/session/review/all" [class.disabled]="due() === 0" [attr.aria-disabled]="due() === 0">Luyện lại từ hay sai <app-icon name="arrow-right" /></a>
      </header>

      <div class="cols">
        <section class="card flush">
          <nav class="tabs" aria-label="Kỹ năng">
            <button type="button" class="tab" [class.active]="skill() === ''" (click)="skill.set('')"><app-icon name="list" /> Tất cả lỗi sai ({{ all().length }})</button>
            @for (s of bySkill(); track s.skill) {
              <button type="button" class="tab" [class.active]="skill() === s.skill" (click)="skill.set(s.skill)"><app-icon [name]="s.icon" /> {{ s.label }} ({{ s.count }})</button>
            }
          </nav>
          <div class="filters">
            <select class="select" [value]="exam()" (change)="exam.set($any($event.target).value)" aria-label="Nguồn">
              <option value="">Nguồn: Tất cả</option>
              <option value="ielts">IELTS</option>
              <option value="toeic">TOEIC</option>
              <option value="other">Luyện tập chung</option>
            </select>
            <label class="find"><app-icon name="search" /><input type="search" placeholder="Tìm trong câu hỏi, đáp án..." [value]="query()" (input)="query.set($any($event.target).value)" /></label>
            @if (all().length) { <button class="btn btn-danger btn-sm" type="button" (click)="clearAll()"><app-icon name="trash" /> Xóa tất cả</button> }
          </div>

          <ul class="list">
            @for (e of visible(); track e.id) {
              <li>
                <span class="tile-ic" [style.--c]="color[e.skill]"><app-icon [name]="info[e.skill].ico" /></span>
                <div class="body">
                  <div class="row top">
                    <span class="tag" [class.red]="e.exam === 'ielts'" [class.blue]="e.exam === 'toeic'">{{ e.source }}</span>
                    <span class="tag" [style.--c]="color[e.skill]">{{ info[e.skill].labelEn }}</span>
                    <small class="muted">{{ e.date | date: 'dd/MM/yyyy HH:mm' }}</small>
                  </div>
                  <p class="muted pr">{{ e.prompt }}</p>
                  @if (e.question) { <p class="q">{{ e.question }}</p> }
                  <p class="ans bad"><app-icon name="circle-x" /> <span>Bạn trả lời: <b>{{ e.given || '(bỏ trống)' }}</b></span></p>
                  <p class="ans good"><app-icon name="circle-check" /> <span>Đáp án đúng: <b>{{ e.correct }}</b></span></p>
                  @if (e.explain) {
                    <details><summary><app-icon name="bulb" /> Giải thích chi tiết</summary><p class="exp">{{ e.explain }}</p></details>
                  }
                </div>
                <div class="acts">
                  @if (e.wordId) { <a class="btn btn-soft btn-sm" [routerLink]="['/word', e.wordId]">Xem từ</a> }
                  @if (speakable(e)) { <button class="btn btn-soft btn-sm" type="button" (click)="say(e.correct)"><app-icon name="volume" /> Nghe</button> }
                  <button class="btn btn-ghost btn-sm" type="button" (click)="remove(e)"><app-icon name="check" /> Đã hiểu</button>
                </div>
              </li>
            } @empty {
              <li class="empty">
                @if (all().length) { Không có câu sai nào phù hợp bộ lọc. }
                @else { Chưa có câu sai nào được ghi lại. Mỗi câu bạn làm sai trong bài luyện, kiểm tra hay thi thử sẽ xuất hiện ở đây kèm đáp án và giải thích. }
              </li>
            }
          </ul>
          @if (filtered().length > shown()) {
            <div class="more"><button class="btn btn-soft" type="button" (click)="shown.set(shown() + 20)">Xem thêm {{ filtered().length - shown() }} câu</button></div>
          }
        </section>

        <aside class="side">
          <section class="card">
            <div class="card-head"><app-icon name="chart-bar" /><h3>Phân loại theo kỹ năng</h3></div>
            @for (s of bySkill(); track s.skill) {
              <div class="srow"><span>{{ s.label }}</span><div class="bar"><i [style.width.%]="s.percent" [style.background]="color[s.skill]"></i></div><b>{{ s.count }}</b></div>
            }
          </section>

          <section class="card">
            <div class="card-head"><app-icon name="letter-case" /><h3>Từ vựng hay sai</h3><a class="link-more" routerLink="/session/review/all">Luyện lại <app-icon name="arrow-right" /></a></div>
            @for (w of weakWords.value() ?? []; track w.id) {
              <a class="list-row" [routerLink]="['/word', w.id]">
                <span class="lr-text"><b>{{ w.word }}</b><small>{{ w.vi }}</small></span>
                <span class="tag red">sai {{ w.wrong }} lần</span>
              </a>
            } @empty {
              <p class="empty">Chưa có từ nào bị trả lời sai.</p>
            }
          </section>

          <section class="card">
            <div class="card-head"><app-icon name="bulb" class="bl" /><h3>Gợi ý cải thiện</h3></div>
            @for (t of tips(); track t.title) {
              <a class="tip" [routerLink]="t.link" [queryParams]="t.query">
                <span class="tile-ic" [style.--c]="t.color"><app-icon [name]="t.icon" /></span>
                <span><b>{{ t.title }}</b><small>{{ t.desc }}</small></span>
                <app-icon name="chevron-right" class="chev" />
              </a>
            }
          </section>
        </aside>
      </div>
    </main>
  `,
  styles: `
    .tabs { padding: 0 var(--space-3); }
    .filters { display: flex; flex-wrap: wrap; gap: var(--space-2); padding: var(--space-3) var(--space-4); border-bottom: 1px solid var(--line); }
    .find { flex: 1; min-width: 180px; display: flex; align-items: center; gap: var(--space-2); height: 36px; padding: 0 var(--space-3); border-radius: var(--radius-md); background: var(--slate-100); color: var(--ink-soft); }
    .find input { flex: 1; min-width: 0; border: 0; outline: 0; background: transparent; }
    .find app-icon { width: 18px; height: 18px; }
    .list { list-style: none; margin: 0; padding: 0 var(--space-4); }
    .list > li { display: flex; gap: var(--space-3); padding: var(--space-4) 0; border-top: 1px solid var(--line); }
    .list > li:first-child { border-top: 0; }
    .body { flex: 1; min-width: 0; display: flex; flex-direction: column; gap: 6px; }
    .top { flex-wrap: wrap; }
    .pr { font-size: var(--fs-sm); }
    .q { font-weight: 600; font-size: var(--fs-lg); line-height: 1.4; white-space: pre-line; }
    .ans { display: flex; gap: var(--space-2); align-items: flex-start; padding: 6px var(--space-3); border-radius: var(--radius-sm); font-size: var(--fs-sm); }
    .ans app-icon { width: 18px; height: 18px; margin-top: 1px; }
    .ans.bad { background: var(--bad-soft); color: var(--coral-700); }
    .ans.good { background: var(--good-soft); color: var(--leaf-700); }
    details summary { cursor: pointer; color: var(--primary); font-weight: 600; font-size: var(--fs-sm); display: inline-flex; align-items: center; gap: 6px; list-style: none; }
    details summary::-webkit-details-marker { display: none; }
    details summary app-icon { width: 16px; height: 16px; }
    .exp { margin-top: 6px; padding: var(--space-3); background: var(--slate-50); border-radius: var(--radius-sm); white-space: pre-line; line-height: 1.6; font-size: var(--fs-sm); }
    .acts { display: flex; flex-direction: column; gap: var(--space-2); flex: none; }
    .more { padding: var(--space-3); text-align: center; border-top: 1px solid var(--line); }
    .srow { display: grid; grid-template-columns: 84px 1fr 32px; align-items: center; gap: var(--space-3); padding: 6px 0; font-size: var(--fs-sm); }
    .srow b { text-align: right; }
    .bl { color: var(--sun-500) !important; }
    .tip { display: flex; align-items: center; gap: var(--space-3); padding: var(--space-3); border: 1px solid var(--line); border-radius: var(--radius-md); }
    .tip + .tip { margin-top: var(--space-2); }
    .tip:hover { border-color: var(--sky-300); }
    .tip span:nth-child(2) { flex: 1; min-width: 0; display: flex; flex-direction: column; line-height: 1.35; }
    .tip small { color: var(--ink-soft); }
    .chev { width: 16px; height: 16px; color: var(--primary); }
    @media (max-width: 700px) { .list > li { flex-wrap: wrap; } .acts { flex-direction: row; width: 100%; } }
  `,
})
export class ErrorsPage {
  private readonly progress = inject(ProgressService);
  private readonly speech = inject(SpeechService);
  private readonly vocab = inject(VocabService);

  protected readonly info = SKILL_INFO;
  protected readonly color = SKILL_COLORS;
  protected readonly all = this.progress.errors;
  protected readonly due = this.progress.dueCount;

  protected readonly skill = signal<Skill | ''>('');
  protected readonly exam = signal('');
  protected readonly query = signal('');
  protected readonly shown = signal(20);

  protected readonly bySkill = computed(() => {
    const all = this.all();
    const max = Math.max(1, ...SKILLS.map((s) => all.filter((e) => e.skill === s).length));
    return SKILLS.map((skill) => {
      const count = all.filter((e) => e.skill === skill).length;
      return { skill, label: SKILL_INFO[skill].labelEn, icon: SKILL_INFO[skill].ico, count, percent: (count / max) * 100 };
    });
  });

  protected readonly filtered = computed(() => {
    const skill = this.skill();
    const exam = this.exam();
    const q = this.query().trim().toLowerCase();
    return this.all().filter((e) => {
      if (skill && e.skill !== skill) return false;
      if (exam === 'other' ? !!e.exam : exam && e.exam !== exam) return false;
      return !q || `${e.question} ${e.correct} ${e.given} ${e.source}`.toLowerCase().includes(q);
    });
  });
  protected readonly visible = computed(() => this.filtered().slice(0, this.shown()));

  /** 6 từ bị trả lời sai nhiều nhất */
  protected readonly weakWords = resource({
    params: () => Object.entries(this.progress.state().words).filter(([, w]) => w.wrong > 0).sort((a, b) => b[1].wrong - a[1].wrong).slice(0, 6).map(([id, w]) => ({ id, wrong: w.wrong })),
    loader: async ({ params }) => {
      const words = await this.vocab.findWords(params.map((p) => p.id));
      return params.map((p) => ({ ...p, word: words.find((w) => w.id === p.id)?.word ?? p.id.split(':')[1], vi: words.find((w) => w.id === p.id)?.vi ?? '' }));
    },
  });

  /** Gợi ý dựa trên kỹ năng sai nhiều nhất */
  protected readonly tips = computed(() => {
    const worst = [...this.bySkill()].sort((a, b) => b.count - a.count)[0];
    const out: { title: string; desc: string; icon: 'target' | 'refresh' | 'notebook' | 'clock-play'; color: string; link: string; query: Record<string, string> }[] = [];
    if (worst && worst.count > 0) {
      out.push({ title: `Tập trung kỹ năng ${worst.label}`, desc: `Bạn sai nhiều nhất ở ${worst.label} (${worst.count} câu). Luyện thêm 10 câu dạng này.`, icon: 'target', color: SKILL_COLORS[worst.skill], link: '/session/skill/all', query: { skill: worst.skill } });
    }
    out.push({ title: 'Ôn tập ngắt quãng', desc: 'Ôn các từ đến hạn mỗi ngày để chuyển từ trí nhớ ngắn hạn sang dài hạn.', icon: 'refresh', color: 'var(--tangerine-500)', link: '/session/review/all', query: {} });
    out.push({ title: 'Xem lại ngữ pháp cốt lõi', desc: '12 chủ điểm có giải thích tiếng Việt và bài luyện 10 câu.', icon: 'notebook', color: 'var(--grape-500)', link: '/grammar', query: {} });
    return out;
  });

  /** Đáp án là tiếng Anh ngắn thì cho nghe phát âm */
  protected speakable(e: ErrorItem): boolean {
    return /^[\x20-\x7e]{2,160}$/.test(e.correct) && /[a-z]{2}/i.test(e.correct);
  }

  protected say(text: string): void {
    void this.speech.speakEn(text);
  }

  protected remove(e: ErrorItem): void {
    this.progress.removeError(e.id);
  }

  protected clearAll(): void {
    if (window.confirm('Xóa toàn bộ danh sách câu sai? Việc này không ảnh hưởng tới tiến độ học.')) this.progress.removeError();
  }
}
