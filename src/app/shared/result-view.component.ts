/**
 * result-view.component.ts – Màn hình "Kết quả làm bài" (thiết kế theo ảnh "IELTS Test Results Dashboard").
 *
 *  - Đầu trang: tên kết quả, thời gian làm bài, số câu, nút "Làm lại bài".
 *  - Ô điểm: số câu đúng / tổng, điểm quy đổi (band IELTS / điểm TOEIC nếu là bài thi), câu đúng – sai – gần đúng.
 *  - Kết quả theo kỹ năng, lưới số câu (xanh = đúng, đỏ = sai, vàng = gần đúng), danh sách câu cần xem lại
 *    kèm đáp án và giải thích.
 *  - Cột phải: vành phân bố kết quả, XP / cấp độ / huy hiệu mới, gợi ý cải thiện.
 * Các nút "Làm lại" / "Xong" được xử lý ở trang cha thông qua output.
 */
import { afterNextRender, ChangeDetectionStrategy, Component, computed, input, output, signal, viewChild } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ExamSummary } from '../core/exam.service';
import { ConfettiComponent } from './confetti.component';
import { DonutComponent } from './donut.component';
import { pct } from '../core/text-utils';
import { SessionSummary } from '../core/progress.service';
import { SKILL_INFO } from '../data/topics';
import { Skill } from '../models/content.model';
import { SessionResult } from '../models/question.model';
import { IconComponent } from '../theme/icon.component';

@Component({
  selector: 'app-result-view',
  imports: [IconComponent, RouterLink, DonutComponent, ConfettiComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section class="stack">
      <header class="card page-head fade-up">
        <span class="tile-ic lg" style="--c: var(--grape-600)"><app-icon name="report-analytics" /></span>
        <div class="ph-text"><h1>Kết quả làm bài</h1><p>{{ headline() }}</p></div>
        <div class="hm"><app-icon name="clock" /><span><small>Thời gian làm bài</small><b>{{ timeText() }}</b></span></div>
        <div class="hm"><app-icon name="clipboard-list" /><span><small>Số câu hỏi</small><b>{{ summary().total }} câu</b></span></div>
        <button class="btn btn-ghost btn-lg" type="button" (click)="retry.emit()"><app-icon name="refresh" /> Làm lại bài</button>
        <button class="btn btn-primary btn-lg" type="button" (click)="leave.emit()">Xong <app-icon name="arrow-right" /></button>
      </header>

      <div class="cols">
        <div class="stack">
          <div class="scores fade-up">
            <div class="sc main">
              <small>Điểm số</small>
              <div class="big"><b>{{ correct() }}</b> / {{ summary().total }}</div>
              <span class="eq">
                @if (exam(); as ex) { <small>Tương đương</small><span>{{ ex.headline }}</span> } @else { <small>Tỉ lệ đúng</small><span>{{ summary().percent }}%</span> }
              </span>
            </div>
            <div class="sc ok"><span class="ic"><app-icon name="check" [stroke]="3" /></span><span><small>Câu đúng</small><b>{{ counts().right }}</b></span></div>
            <div class="sc no"><span class="ic"><app-icon name="x" [stroke]="3" /></span><span><small>Câu sai</small><b>{{ counts().wrong }}</b></span></div>
            <div class="sc half"><span class="ic"><app-icon name="minus" [stroke]="3" /></span><span><small>Gần đúng</small><b>{{ counts().half }}</b></span></div>
          </div>

          @if (exam(); as ex) {
            <div class="card fade-up">
              <div class="card-head"><app-icon name="target" /><h2>{{ ex.headline }}</h2></div>
              <div class="erows">
                @for (r of ex.rows; track r.label) { <div class="stat"><span class="tile-ic sm"><app-icon name="chart-bar" /></span><span><small>{{ r.label }}</small><b>{{ r.value }}</b></span></div> }
              </div>
              <p class="muted tiny">{{ ex.note }}</p>
            </div>
          }

          @if (skillRows().length > 1) {
            <div class="card fade-up">
              <div class="card-head"><app-icon name="list-check" /><h2>Kết quả theo kỹ năng</h2></div>
              <div class="skills">
                @for (r of skillRows(); track r.skill) {
                  <div class="skc">
                    <span class="tile-ic" [style.--c]="r.color"><app-icon [name]="r.ico" /></span>
                    <div><b>{{ r.label }}</b><small>{{ r.score }} / {{ r.total }}</small>
                      <div class="pl"><div class="bar"><i [style.width.%]="r.percent" [style.background]="r.percent >= 70 ? 'var(--good)' : r.percent >= 40 ? 'var(--primary)' : 'var(--tangerine-500)'"></i></div><small>{{ r.percent }}%</small></div>
                    </div>
                  </div>
                }
              </div>
            </div>
          }

          <div class="card fade-up">
            <div class="card-head"><app-icon name="clipboard-check" /><h2>Chi tiết kết quả từng câu</h2>
              <span class="lg"><i class="g"></i> Đúng</span><span class="lg"><i class="r"></i> Sai</span><span class="lg"><i class="y"></i> Gần đúng</span>
            </div>
            <div class="cells">
              @for (m of marks(); track $index) { <span [class]="'cell ' + m">{{ $index + 1 }}</span> }
            </div>

            @if (wrong().length) {
              <div class="rvh">
                <b>Xem lại câu hỏi</b>
                <label class="only"><input type="checkbox" [checked]="onlyWrong()" (change)="onlyWrong.set(!onlyWrong())" /> Chỉ hiển thị câu sai</label>
              </div>
              @for (w of review(); track w.id) {
                <details class="rv">
                  <summary>
                    <span class="ri" [class.half]="w.half"><app-icon [name]="w.half ? 'minus' : 'x'" [stroke]="3" /></span>
                    <b>Câu {{ w.no }}</b>
                    <span class="rq">{{ w.title }}</span>
                    <span class="tag" [class.red]="!w.half" [class.amber]="w.half">{{ w.half ? 'Gần đúng' : 'Sai' }}</span>
                    <span class="more">Xem chi tiết <app-icon name="chevron-down" /></span>
                  </summary>
                  <div class="rb">
                    <p class="ans bad"><app-icon name="circle-x" /> <span>Bạn trả lời: <b>{{ w.given || '(bỏ trống)' }}</b></span></p>
                    <p class="ans good"><app-icon name="circle-check" /> <span>Đáp án đúng: <b>{{ w.correct }}</b></span></p>
                    @if (w.explain) { <p class="ex">{{ w.explain }}</p> }
                  </div>
                </details>
              }
            } @else {
              <p class="perfect"><app-icon name="circle-check" /> Bạn trả lời đúng tất cả các câu. Tuyệt vời!</p>
            }
          </div>
        </div>

        <aside class="side">
          <div class="card fade-up">
            <div class="card-head"><app-icon name="chart-donut" /><h3>Phân bố kết quả</h3></div>
            <div class="dist">
              <app-donut [segments]="segments()" [size]="150" [thickness]="13"><b>{{ correct() }} / {{ summary().total }}</b><small>câu đúng</small></app-donut>
              <ul>
                <li><i class="g"></i><span>Đúng</span><b>{{ counts().right }} ({{ part(counts().right) }}%)</b></li>
                <li><i class="r"></i><span>Sai</span><b>{{ counts().wrong }} ({{ part(counts().wrong) }}%)</b></li>
                <li><i class="y"></i><span>Gần đúng</span><b>{{ counts().half }} ({{ part(counts().half) }}%)</b></li>
              </ul>
            </div>
          </div>

          <div class="card fade-up">
            <div class="card-head"><app-icon name="award" class="aw" /><h3>Phần thưởng</h3></div>
            <div class="rw">
              <span class="tag amber big">+{{ summary().xp }} XP</span>
              @for (s of [1, 2, 3]; track s) { <app-icon name="star" class="star" [class.on]="s <= summary().stars" /> }
              @if (summary().levelUp) { <span class="tag green big">Lên cấp mới!</span> }
            </div>
            @for (b of summary().newBadges; track b.id) {
              <div class="list-row"><span class="bi" [style.background]="b.color">{{ b.icon }}</span><span class="lr-text"><b>Huy hiệu mới: {{ b.title }}</b><small>{{ b.desc }}</small></span></div>
            }
          </div>

          <div class="card fade-up">
            <div class="card-head"><app-icon name="bulb" class="aw" /><h3>Gợi ý cải thiện</h3></div>
            @for (t of tips(); track t.title) {
              <a class="tip" [routerLink]="t.link" [queryParams]="t.query">
                <span class="tile-ic" [style.--c]="t.color"><app-icon [name]="t.icon" /></span>
                <span><b>{{ t.title }}</b><small>{{ t.desc }}</small></span>
                <app-icon name="chevron-right" class="chev" />
              </a>
            }
          </div>
        </aside>
      </div>
    </section>
    <app-confetti />
  `,
  styles: `
    .hm { display: flex; align-items: center; gap: var(--space-2); padding-left: var(--space-4); border-left: 1px solid var(--line); }
    .hm app-icon { width: 26px; height: 26px; color: var(--primary); }
    .hm span { display: flex; flex-direction: column; line-height: 1.3; }
    .hm small { color: var(--ink-soft); }
    .scores { display: grid; grid-template-columns: 1.9fr 1fr 1fr 1fr; gap: var(--space-3); }
    .sc { border-radius: var(--radius-lg); padding: var(--space-4); border: 1px solid var(--line); background: var(--white); display: flex; align-items: center; gap: var(--space-3); }
    .sc small { color: var(--slate-600); display: block; }
    .sc b { font-size: var(--fs-3xl); line-height: 1.1; }
    .sc.main { background: var(--coral-50); border-color: var(--coral-100); flex-wrap: wrap; gap: var(--space-2) var(--space-5); }
    .sc.main > small { width: 100%; font-weight: 600; color: var(--ink); }
    .big { font-size: var(--fs-2xl); font-weight: 700; }
    .big b { font-size: 3rem; color: var(--blossom-600); letter-spacing: -0.03em; }
    .eq { display: flex; flex-direction: column; }
    .eq span { font-size: var(--fs-xl); font-weight: 700; }
    .sc .ic { width: 32px; height: 32px; border-radius: 50%; display: grid; place-items: center; color: var(--white); flex: none; }
    .sc .ic app-icon { width: 18px; height: 18px; }
    .sc.ok { background: var(--leaf-50); border-color: var(--leaf-100); }
    .sc.ok .ic { background: var(--good); }
    .sc.ok b { color: var(--leaf-700); }
    .sc.no { background: var(--coral-50); border-color: var(--coral-100); }
    .sc.no .ic { background: var(--bad); }
    .sc.half { background: var(--sky-50); border-color: var(--sky-100); }
    .sc.half .ic { background: var(--sky-400); }
    .erows { display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: var(--space-3); }
    .erows .stat b { font-size: var(--fs-md); }
    .tiny { font-size: var(--fs-xs); margin-top: var(--space-3); line-height: 1.6; }
    .skills { display: grid; grid-template-columns: repeat(auto-fit, minmax(210px, 1fr)); gap: var(--space-3); }
    .skc { display: flex; gap: var(--space-3); padding: var(--space-3); border: 1px solid var(--line); border-radius: var(--radius-md); }
    .skc > div { flex: 1; min-width: 0; display: flex; flex-direction: column; }
    .skc small { color: var(--ink-soft); }
    .pl { display: flex; align-items: center; gap: var(--space-2); margin-top: 4px; }
    .pl .bar { flex: 1; }
    .lg { display: inline-flex; align-items: center; gap: 6px; font-size: var(--fs-sm); color: var(--slate-600); margin-left: var(--space-3); }
    .lg i, .dist i { width: 12px; height: 12px; border-radius: 50%; display: inline-block; }
    .g { background: var(--good); }
    .r { background: var(--bad); }
    .y { background: var(--sun-400); }
    .cells { display: grid; grid-template-columns: repeat(auto-fill, minmax(52px, 1fr)); gap: var(--space-2); }
    .cell { height: 34px; display: grid; place-items: center; border-radius: var(--radius-sm); font-weight: 700; font-size: var(--fs-sm); border: 1px solid var(--line); }
    .cell.ok { background: var(--leaf-50); border-color: var(--leaf-200); color: var(--leaf-700); }
    .cell.bad { background: var(--coral-50); border-color: var(--coral-200); color: var(--coral-600); }
    .cell.half { background: var(--sun-50); border-color: var(--sun-200); color: var(--sun-700); }
    .rvh { display: flex; align-items: center; justify-content: space-between; margin: var(--space-5) 0 var(--space-2); }
    .only { display: flex; align-items: center; gap: var(--space-2); font-size: var(--fs-sm); color: var(--slate-600); cursor: pointer; }
    .only input { width: 16px; height: 16px; accent-color: var(--primary); }
    .rv { border-top: 1px solid var(--line); }
    .rv summary { list-style: none; cursor: pointer; display: flex; align-items: center; gap: var(--space-3); padding: var(--space-3) 0; }
    .rv summary::-webkit-details-marker { display: none; }
    .ri { width: 20px; height: 20px; border-radius: 50%; background: var(--bad); color: var(--white); display: grid; place-items: center; flex: none; }
    .ri.half { background: var(--sun-500); }
    .ri app-icon { width: 12px; height: 12px; }
    .rv summary b { white-space: nowrap; }
    .rq { flex: 1; min-width: 0; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; color: var(--slate-700); }
    .more { display: inline-flex; align-items: center; gap: 4px; padding: 5px 10px; border: 1px solid var(--sky-300); border-radius: var(--radius-sm); color: var(--primary); font-size: var(--fs-sm); font-weight: 600; white-space: nowrap; }
    .more app-icon { width: 14px; height: 14px; transition: transform var(--motion-fast); }
    .rv[open] .more app-icon { transform: rotate(180deg); }
    .rv[open] .rq { white-space: pre-line; }
    .rb { display: flex; flex-direction: column; gap: 6px; padding: 0 0 var(--space-3) 32px; }
    .ans { display: flex; gap: var(--space-2); align-items: flex-start; padding: 6px var(--space-3); border-radius: var(--radius-sm); font-size: var(--fs-sm); }
    .ans app-icon { width: 18px; height: 18px; margin-top: 1px; }
    .ans.bad { background: var(--bad-soft); color: var(--coral-700); }
    .ans.good { background: var(--good-soft); color: var(--leaf-700); }
    .ex { padding: var(--space-3); background: var(--slate-50); border-radius: var(--radius-sm); white-space: pre-line; line-height: 1.6; font-size: var(--fs-sm); color: var(--slate-700); }
    .perfect { display: flex; align-items: center; gap: var(--space-2); margin-top: var(--space-4); padding: var(--space-3); border-radius: var(--radius-md); background: var(--good-soft); color: var(--leaf-700); font-weight: 600; }
    .dist { display: flex; align-items: center; gap: var(--space-4); }
    .dist ul { list-style: none; margin: 0; padding: 0; flex: 1; display: flex; flex-direction: column; gap: var(--space-3); font-size: var(--fs-sm); }
    .dist li { display: flex; align-items: center; gap: var(--space-2); }
    .dist li span { flex: 1; }
    .aw { color: var(--sun-500) !important; }
    .rw { display: flex; align-items: center; flex-wrap: wrap; gap: var(--space-2); }
    .tag.big { font-size: var(--fs-md); padding: 5px 12px; }
    .star { width: 26px; height: 26px; color: var(--slate-300); }
    .star.on { color: var(--sun-400); }
    .star.on ::ng-deep svg { fill: currentColor; }
    .bi { width: 40px; height: 40px; border-radius: 50%; display: grid; place-items: center; font-size: 1.3rem; flex: none; }
    .tip { display: flex; align-items: center; gap: var(--space-3); padding: var(--space-3); border: 1px solid var(--line); border-radius: var(--radius-md); }
    .tip + .tip { margin-top: var(--space-2); }
    .tip:hover { border-color: var(--sky-300); }
    .tip span:nth-child(2) { flex: 1; min-width: 0; display: flex; flex-direction: column; line-height: 1.35; }
    .tip small { color: var(--ink-soft); }
    .chev { width: 16px; height: 16px; color: var(--primary); }
    @media (max-width: 900px) {
      .scores { grid-template-columns: repeat(3, minmax(0, 1fr)); }
      .sc.main { grid-column: 1 / -1; }
      .hm { border-left: 0; padding-left: 0; }
      .more { display: none; }
    }
  `,
})
export class ResultViewComponent {
  readonly summary = input.required<SessionSummary>();
  readonly session = input.required<SessionResult>();
  /** Điểm ước tính IELTS/TOEIC (nếu là bài thi) */
  readonly exam = input<ExamSummary | null>(null);
  /** Phát khi bấm "Làm lại" */
  readonly retry = output<void>();
  /** Phát khi bấm "Xong" */
  readonly leave = output<void>();

  protected readonly onlyWrong = signal(false);
  private readonly confetti = viewChild(ConfettiComponent);

  constructor() {
    // Điểm cao / lên cấp / có huy hiệu mới -> bắn pháo giấy ăn mừng
    afterNextRender(() => {
      const s = this.summary();
      if (s.percent >= 70 || s.levelUp || s.newBadges.length) setTimeout(() => this.confetti()?.fire(s.percent >= 90 || s.levelUp ? 220 : 130), 300);
    });
  }

  protected readonly correct = computed(() => Math.round(this.summary().score));
  protected readonly headline = computed(() => {
    const p = this.summary().percent;
    if (p >= 90) return 'Xuất sắc! Bạn nắm rất chắc phần này.';
    if (p >= 70) return 'Làm tốt lắm! Xem lại vài câu sai để hoàn thiện.';
    if (p >= 40) return 'Khá rồi – xem kỹ phần giải thích các câu sai nhé.';
    return 'Chưa sao – xem giải thích rồi luyện lại, bạn sẽ tiến bộ nhanh.';
  });

  protected readonly timeText = computed(() => {
    const s = this.session().seconds;
    return s >= 60 ? `${Math.floor(s / 60)} phút ${s % 60} giây` : `${s} giây`;
  });

  /** Trạng thái từng câu: ok (đúng), half (gần đúng / một phần), bad (sai) */
  protected readonly marks = computed(() => this.session().results.map((r) => (r.score >= 0.99 ? 'ok' : r.score > 0.01 ? 'half' : 'bad')));
  protected readonly counts = computed(() => {
    const m = this.marks();
    return { right: m.filter((x) => x === 'ok').length, half: m.filter((x) => x === 'half').length, wrong: m.filter((x) => x === 'bad').length };
  });
  protected readonly segments = computed(() => [
    { value: this.counts().right, color: 'var(--good)' },
    { value: this.counts().wrong, color: 'var(--bad)' },
    { value: this.counts().half, color: 'var(--sun-400)' },
  ]);

  protected part(n: number): number {
    return pct(n, this.summary().total);
  }

  /** Điểm từng kỹ năng */
  protected readonly skillRows = computed(() =>
    (Object.entries(this.summary().bySkill) as [Skill, { score: number; total: number }][]).map(([skill, b]) => ({
      skill, label: SKILL_INFO[skill].labelEn, ico: SKILL_INFO[skill].ico, color: SKILL_INFO[skill].color,
      percent: pct(b.score, b.total), score: Math.round(b.score * 10) / 10, total: b.total,
    })),
  );

  /** Các câu chưa đúng hoàn toàn, kèm nội dung câu hỏi để xem lại */
  protected readonly wrong = computed(() => {
    const s = this.session();
    return s.results
      .map((r, i) => ({ r, q: s.questions[i], no: i + 1 }))
      .filter(({ r }) => r.score < 0.99)
      .map(({ r, q, no }) => ({
        id: r.questionId, no, half: r.score > 0.01,
        title: q.focus ?? (q.kind === 'speak' ? q.target : q.audio ?? q.prompt),
        given: r.given,
        correct: r.correct,
        explain: q.explain,
      }));
  });
  protected readonly review = computed(() => (this.onlyWrong() ? this.wrong().filter((w) => !w.half) : this.wrong()));

  /** Gợi ý dựa trên kỹ năng yếu nhất của bài vừa làm */
  protected readonly tips = computed(() => {
    const rows = [...this.skillRows()].sort((a, b) => a.percent - b.percent);
    const worst = rows[0];
    const out: { title: string; desc: string; icon: 'target' | 'alert-triangle' | 'refresh'; color: string; link: string; query: Record<string, string> }[] = [];
    if (worst && worst.percent < 80) {
      out.push({ title: `Tập trung kỹ năng ${worst.label}`, desc: `Bạn đạt ${worst.percent}% ở ${worst.label}. Luyện thêm 10 câu dạng này.`, icon: 'target', color: worst.color, link: '/session/skill/all', query: { skill: worst.skill } });
    }
    if (this.wrong().length) out.push({ title: 'Xem lại trong Error Review', desc: `${this.wrong().filter((w) => !w.half).length} câu sai đã được lưu kèm đáp án và giải thích.`, icon: 'alert-triangle', color: 'var(--coral-500)', link: '/errors', query: {} });
    out.push({ title: 'Ôn tập ngắt quãng', desc: 'Ôn các từ đến hạn để nhớ lâu hơn.', icon: 'refresh', color: 'var(--tangerine-500)', link: '/session/review/all', query: {} });
    return out;
  });
}
