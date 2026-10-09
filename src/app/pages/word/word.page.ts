/**
 * word.page.ts – Trang "Chi tiết từ" (/word/<mã từ>), thiết kế theo ảnh "Accomplish Vocabulary Learning Dashboard".
 *
 *  - Từ, phát âm (thường / chậm), phiên âm, từ loại, chủ đề, nghĩa tiếng Việt; lưu yêu thích, đánh dấu đã học.
 *  - Ví dụ (có âm thanh và bản dịch), ảnh minh họa nếu có, các từ cùng bài học.
 *  - Bài tập vận dụng: chọn nghĩa đúng và điền từ vào câu ví dụ (chấm ngay, không cần Internet).
 *  - Cột phải: trạng thái ghi nhớ (Mới → Đang học → Đã nhớ), thẻ flashcard lật được của cả bài,
 *    câu ví dụ ngữ cảnh của các từ cùng bài.
 * App chỉ hiển thị dữ liệu thật có trong kho từ (không có mục collocation / họ từ vì kho chưa có dữ liệu này).
 */
import { ChangeDetectionStrategy, Component, computed, effect, inject, resource, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { DatePipe } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { map } from 'rxjs';
import { photoOf } from '../../core/photos';
import { ProgressService } from '../../core/progress.service';
import { SpeechService } from '../../core/speech.service';
import { UxService } from '../../core/ux.service';
import { VocabService } from '../../core/vocab.service';
import { hashString } from '../../core/text-utils';
import { TOPIC_BY_ID } from '../../data/topics';
import { TopicId } from '../../models/content.model';
import { POS_LABEL, Word } from '../../models/vocab.model';
import { IconComponent } from '../../theme/icon.component';

/** Tách câu ví dụ thành 3 phần: trước – từ khóa – sau (để tô đậm hoặc đục lỗ) */
function splitExample(ex: string, word: string): { before: string; hit: string; after: string } | null {
  const esc = word.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  let m = new RegExp(`\\b${esc}\\w*`, 'i').exec(ex);
  if (!m && word.length > 4) {
    // Dạng biến đổi (studied, running...): so khớp theo phần gốc của từ
    const stem = word.slice(0, Math.max(3, word.length - 2)).replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    m = new RegExp(`\\b${stem}\\w*`, 'i').exec(ex);
  }
  return m ? { before: ex.slice(0, m.index), hit: m[0], after: ex.slice(m.index + m[0].length) } : null;
}

@Component({
  selector: 'app-word',
  imports: [RouterLink, DatePipe, IconComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <main class="page stack">
      <div class="crumbs">
        <app-icon name="school" /> <a routerLink="/vocab">Từ vựng &amp; Cụm từ</a> <app-icon name="chevron-right" />
        <a [routerLink]="['/vocab', topicId()]">{{ topicTitle() }}</a> <app-icon name="chevron-right" /> <span>Chi tiết từ</span>
      </div>

      @if (word(); as w) {
        <div class="cols">
          <div class="stack">
            <section class="card top">
              <div class="headline">
                <h1>{{ w.word }}</h1>
                <button class="icon-btn snd" type="button" (click)="say(w.word)" aria-label="Nghe phát âm"><app-icon name="volume" /></button>
                <button class="btn btn-ghost btn-sm" type="button" (click)="say(w.word, true)"><app-icon name="gauge" /> Chậm</button>
                <span class="spacer"></span>
                <button class="btn btn-ghost" type="button" [class.fav]="saved()" (click)="toggleSave(w)" [attr.aria-pressed]="saved()">
                  <app-icon name="star" /> {{ saved() ? 'Đã yêu thích' : 'Thêm vào yêu thích' }}
                </button>
                <button class="btn" type="button" [class.btn-good]="status() === 'known'" [class.btn-soft]="status() !== 'known'" (click)="markKnown(w)" [disabled]="status() === 'known'">
                  <app-icon name="circle-check" /> {{ status() === 'known' ? 'Đã học' : 'Đánh dấu đã học' }}
                </button>
              </div>
              <div class="sub">
                <span class="ipa">/{{ w.ipa }}/</span>
                <span class="tag purple pos">{{ posLabel(w.pos) }}</span>
                <span class="tag pos" [class.green]="w.level === 'B1'" [class.orange]="w.level === 'B2'" title="Trình độ CEFR">{{ w.level }}</span>
                <span class="tag" [class.red]="w.topicId === 'ielts'" [class.blue]="w.topicId !== 'ielts'">{{ topicTitle() }}</span>
                <span class="tag amber">{{ lessonTitle() }}</span>
              </div>
              <p class="vi">{{ w.vi }}</p>

              <div class="grid-2 blocks">
                <div class="block">
                  <h3><span class="tile-ic sm"><app-icon name="message-circle" /></span> Ví dụ</h3>
                  <div class="ex">
                    <button class="icon-btn" type="button" (click)="say(w.ex)" aria-label="Nghe câu ví dụ"><app-icon name="volume" /></button>
                    <div>
                      <p class="en">@if (parts(); as p) { {{ p.before }}<mark>{{ p.hit }}</mark>{{ p.after }} } @else { {{ w.ex }} }</p>
                      <p class="muted">{{ w.exVi }}</p>
                    </div>
                  </div>
                  @if (photo(); as ph) {
                    <figure><img [src]="ph.src" [alt]="'Ảnh minh họa: ' + w.word" /><figcaption class="muted">Ảnh: {{ ph.creator }} · {{ ph.license }}</figcaption></figure>
                  }
                </div>
                <div class="block">
                  <h3><span class="tile-ic sm" style="--c: var(--grape-500)"><app-icon name="books" /></span> Từ cùng bài học</h3>
                  <ul class="sib">
                    @for (s of siblings(); track s.id) {
                      <li><a [routerLink]="['/word', s.id]">{{ s.word }}</a> <span class="muted">({{ s.pos }}) – {{ s.vi }}</span></li>
                    }
                  </ul>
                  <a class="link-more" [routerLink]="['/learn', w.topicId, w.lessonIndex]">Học cả bài bằng flashcard <app-icon name="arrow-right" /></a>
                </div>
              </div>
            </section>

            <section class="card">
              <div class="card-head"><span class="tile-ic sm"><app-icon name="clipboard-check" /></span><h2>Bài tập vận dụng</h2><a class="link-more" [routerLink]="['/session/lesson', w.topicId]" [queryParams]="{ lesson: w.lessonIndex }">Làm bài kiểm tra cả bài <app-icon name="arrow-right" /></a></div>
              <div class="grid-2 blocks">
                <div class="block">
                  <h3><app-icon name="circle-check" class="g" /> Chọn đáp án đúng</h3>
                  <p class="q">1. Nghĩa của từ <b>“{{ w.word }}”</b> là gì?</p>
                  @for (o of options(); track o; let i = $index) {
                    <button type="button" class="opt" [class.sel]="picked() === o" [class.ok]="picked() !== null && o === w.vi" [class.no]="picked() === o && o !== w.vi" (click)="picked.set(o)" [disabled]="picked() !== null">
                      <span class="rd"></span> {{ 'ABCD'[i] }}. {{ o }}
                    </button>
                  }
                  @if (picked() !== null) {
                    <p class="fb" [class.good]="picked() === w.vi" [class.bad]="picked() !== w.vi">{{ picked() === w.vi ? 'Chính xác!' : 'Chưa đúng – đáp án là “' + w.vi + '”.' }}</p>
                  }
                </div>
                <div class="block">
                  <h3><app-icon name="pencil" class="g" /> Điền từ thích hợp</h3>
                  @if (parts(); as p) {
                    <p class="q">2. {{ p.before }}______{{ p.after }}</p>
                    <p class="muted hintvi">{{ w.exVi }}</p>
                    <form class="fill" (submit)="check($event, inp.value, p.hit)">
                      <input #inp class="input" type="text" placeholder="Gõ từ còn thiếu..." autocomplete="off" autocapitalize="off" spellcheck="false" [disabled]="filled() === true" />
                      <button class="btn btn-primary" type="submit" [disabled]="filled() === true">Kiểm tra</button>
                    </form>
                    @if (filled() !== null) {
                      <p class="fb" [class.good]="filled()" [class.bad]="!filled()">{{ filled() ? 'Chính xác! “' + p.hit + '” phù hợp với ngữ cảnh.' : 'Chưa đúng, thử lại nhé. Gợi ý: bắt đầu bằng “' + p.hit[0] + '”, ' + p.hit.length + ' chữ cái.' }}</p>
                    }
                  } @else {
                    <p class="muted">Từ này chưa có câu ví dụ phù hợp để làm bài điền từ.</p>
                  }
                </div>
              </div>
            </section>
          </div>

          <aside class="side">
            <section class="card">
              <div class="card-head"><span class="tile-ic sm"><app-icon name="progress-check" /></span><h3>Trạng thái học tập</h3></div>
              <ol class="steps">
                <li [class.on]="status() === 'new'" [class.past]="status() !== 'new'"><i></i><span>Mới</span></li>
                <li [class.on]="status() === 'learning'" [class.past]="status() === 'known'"><i></i><span>Đang học</span></li>
                <li [class.on]="status() === 'known'"><i></i><span>Đã nhớ</span></li>
              </ol>
              <div class="row due">
                <span class="muted grow">@if (state()?.due; as d) { Lần ôn tiếp theo: <b>{{ d | date: 'dd/MM/yyyy' }}</b> } @else { Chưa ôn lần nào }</span>
                <a class="btn btn-primary btn-sm" [routerLink]="['/session/lesson', w.topicId]" [queryParams]="{ lesson: w.lessonIndex }"><app-icon name="refresh" /> Ôn tập lại</a>
              </div>
              @if (state(); as st) { <small class="muted">Đã luyện {{ st.seen }} lần · đúng {{ st.right }} · sai {{ st.wrong }} · hộp nhớ {{ st.box }}/5</small> }
            </section>

            <section class="card">
              <div class="card-head">
                <span class="tile-ic sm" style="--c: var(--grape-500)"><app-icon name="cards" /></span><h3>Flashcard</h3>
                <small class="muted">{{ cardIndex() + 1 }} / {{ lessonWords().length }}</small>
                <button class="icon-btn" type="button" (click)="move(-1)" aria-label="Thẻ trước"><app-icon name="chevron-left" /></button>
                <button class="icon-btn" type="button" (click)="move(1)" aria-label="Thẻ sau"><app-icon name="chevron-right" /></button>
              </div>
              @if (card(); as c) {
                <div class="fc" [class.flip]="flipped()">
                  <b>{{ c.word }} <button class="icon-btn" type="button" (click)="say(c.word)" aria-label="Nghe phát âm"><app-icon name="volume" /></button></b>
                  <span class="ipa">/{{ c.ipa }}/</span>
                  @if (flipped()) { <span class="mean">{{ c.vi }}</span> } @else { <span class="mean muted">Bạn nhớ nghĩa của từ này không?</span> }
                  <button class="btn btn-ghost btn-block" type="button" (click)="flipped.set(!flipped())"><app-icon name="refresh" /> Lật thẻ</button>
                </div>
              }
            </section>

            <section class="card">
              <div class="card-head"><span class="tile-ic sm"><app-icon name="messages" /></span><h3>Ví dụ ngữ cảnh</h3></div>
              @for (s of contextExamples(); track s.id) {
                <div class="ctx">
                  <button class="icon-btn" type="button" (click)="say(s.ex)" [attr.aria-label]="'Nghe câu ví dụ của ' + s.word"><app-icon name="volume" /></button>
                  <div><p class="en">{{ s.ex }}</p><p class="muted">{{ s.exVi }}</p></div>
                  <a class="tag blue" [routerLink]="['/word', s.id]">{{ s.word }}</a>
                </div>
              }
            </section>
          </aside>
        </div>
      } @else {
        <div class="card empty">{{ data.isLoading() ? 'Đang mở từ điển...' : 'Không tìm thấy từ này trong kho từ vựng.' }}
          @if (!data.isLoading()) { <p><a class="btn btn-primary" routerLink="/vocab">Về danh sách từ vựng</a></p> }
        </div>
      }
    </main>
  `,
  styles: `
    .top { padding: var(--space-6); }
    .headline { display: flex; align-items: center; flex-wrap: wrap; gap: var(--space-3); }
    .headline h1 { font-size: 3rem; letter-spacing: -0.03em; line-height: 1.1; }
    .snd { width: 44px; height: 44px; }
    .snd app-icon { width: 28px; height: 28px; }
    .btn.fav { color: var(--sun-600); border-color: var(--sun-300); background: var(--sun-50); }
    .btn.fav ::ng-deep svg { fill: currentColor; }
    .sub { display: flex; align-items: center; flex-wrap: wrap; gap: var(--space-2); margin-top: var(--space-2); }
    .ipa { color: var(--slate-600); font-size: var(--fs-lg); }
    .pos { font-size: var(--fs-sm); padding: 4px 12px; }
    .vi { font-size: var(--fs-2xl); margin: var(--space-3) 0 var(--space-4); color: var(--slate-700); }
    .blocks { gap: var(--space-4); align-items: start; }
    .block { background: var(--slate-50); border: 1px solid var(--line); border-radius: var(--radius-md); padding: var(--space-4); display: flex; flex-direction: column; gap: var(--space-3); }
    .block h3 { display: flex; align-items: center; gap: var(--space-2); font-size: var(--fs-md); }
    .g { width: 18px; height: 18px; color: var(--good); }
    .ex, .ctx { display: flex; gap: var(--space-2); align-items: flex-start; }
    .ex > div, .ctx > div { flex: 1; min-width: 0; }
    .en { font-weight: 600; }
    mark { background: transparent; color: var(--primary); font-weight: 700; }
    figure { margin: 0; }
    figure img { width: 100%; max-width: 280px; border-radius: var(--radius-md); display: block; }
    figcaption { font-size: 0.72rem; margin-top: 4px; }
    .sib { margin: 0; padding-left: 18px; display: flex; flex-direction: column; gap: 6px; }
    .sib a { color: var(--primary); font-weight: 700; }
    .q { font-weight: 600; }
    .hintvi { font-size: var(--fs-sm); margin-top: -6px; }
    .opt { display: flex; align-items: center; gap: var(--space-2); width: 100%; text-align: left; padding: 9px var(--space-3); border-radius: var(--radius-sm); border: 1px solid var(--line); background: var(--white); font-weight: 500; }
    .opt:hover:not(:disabled) { border-color: var(--sky-300); }
    .rd { width: 16px; height: 16px; border-radius: 50%; border: 2px solid var(--slate-300); flex: none; }
    .opt.ok { border-color: var(--good); background: var(--good-soft); }
    .opt.ok .rd { border-color: var(--good); background: var(--good); box-shadow: inset 0 0 0 3px var(--white); }
    .opt.no { border-color: var(--bad); background: var(--bad-soft); }
    .opt.no .rd { border-color: var(--bad); background: var(--bad); box-shadow: inset 0 0 0 3px var(--white); }
    .fill { display: flex; gap: var(--space-2); }
    .fb { padding: var(--space-2) var(--space-3); border-radius: var(--radius-sm); font-weight: 600; font-size: var(--fs-sm); }
    .fb.good { background: var(--good-soft); color: var(--leaf-700); }
    .fb.bad { background: var(--bad-soft); color: var(--coral-700); }
    .steps { list-style: none; margin: var(--space-2) 0 var(--space-3); padding: 0; display: grid; grid-template-columns: repeat(3, 1fr); }
    .steps li { position: relative; display: flex; flex-direction: column; align-items: center; gap: 6px; color: var(--ink-soft); font-size: var(--fs-sm); }
    .steps li::before { content: ''; position: absolute; top: 9px; left: -50%; width: 100%; height: 3px; background: var(--slate-200); }
    .steps li:first-child::before { display: none; }
    .steps i { position: relative; z-index: 1; width: 20px; height: 20px; border-radius: 50%; background: var(--white); border: 4px solid var(--slate-300); }
    .steps .past i { border-color: var(--sky-300); background: var(--sky-300); }
    .steps .on i { border-color: var(--primary); background: var(--primary); box-shadow: 0 0 0 4px var(--sky-100); }
    .steps .on, .steps .past + li::before { color: var(--primary); font-weight: 700; }
    .steps .past + li::before { background: var(--sky-300); }
    .due { margin-bottom: var(--space-2); }
    .grow { flex: 1; }
    .fc { border: 1px solid var(--line); border-radius: var(--radius-md); padding: var(--space-5) var(--space-4) var(--space-4); display: flex; flex-direction: column; align-items: center; gap: 6px; text-align: center; box-shadow: var(--shadow-sm); }
    .fc b { font-size: var(--fs-2xl); display: flex; align-items: center; gap: var(--space-2); }
    .mean { font-size: var(--fs-lg); min-height: 2em; margin-bottom: var(--space-2); }
    .ctx { padding: var(--space-3) 0; border-top: 1px solid var(--line); }
    .ctx:first-of-type { border-top: 0; }
    @media (max-width: 760px) { .blocks { grid-template-columns: minmax(0, 1fr); } .headline h1 { font-size: 2.2rem; } }
  `,
})
export class WordPage {
  private readonly route = inject(ActivatedRoute);
  private readonly vocab = inject(VocabService);
  private readonly progress = inject(ProgressService);
  private readonly speech = inject(SpeechService);
  private readonly ux = inject(UxService);

  /** Mã từ trên đường dẫn, dạng "<chủ đề>:<từ>" */
  private readonly id = toSignal(this.route.paramMap.pipe(map((p) => p.get('id') ?? '')), { requireSync: true });
  protected readonly topicId = computed(() => this.id().split(':')[0] as TopicId);
  protected readonly topicTitle = computed(() => TOPIC_BY_ID[this.topicId()]?.title ?? 'Từ vựng');

  protected readonly data = resource({
    params: () => this.topicId(),
    loader: ({ params }) => (TOPIC_BY_ID[params] ? this.vocab.load(params) : Promise.resolve(null)),
  });

  protected readonly word = computed<Word | undefined>(() => this.data.value()?.words.find((w) => w.id === this.id()));
  /** Các từ cùng bài học (gồm cả từ đang xem) */
  protected readonly lessonWords = computed(() => {
    const w = this.word();
    return w ? (this.data.value()?.lessons[w.lessonIndex]?.words ?? []) : [];
  });
  protected readonly lessonTitle = computed(() => {
    const w = this.word();
    return w ? (this.data.value()?.lessons[w.lessonIndex]?.vi ?? '') : '';
  });
  protected readonly siblings = computed(() => this.lessonWords().filter((x) => x.id !== this.id()).slice(0, 6));
  protected readonly contextExamples = computed(() => this.lessonWords().filter((x) => x.id !== this.id()).slice(6, 9).concat(this.lessonWords().filter((x) => x.id !== this.id()).slice(0, 3)).slice(0, 3));
  protected readonly parts = computed(() => {
    const w = this.word();
    return w ? splitExample(w.ex, w.word) : null;
  });
  protected readonly photo = computed(() => photoOf(this.id()));

  protected readonly state = computed(() => this.progress.state().words[this.id()]);
  protected readonly saved = computed(() => !!this.state()?.bm);
  protected readonly status = computed<'new' | 'learning' | 'known'>(() => {
    const s = this.state();
    if (!s || (s.seen === 0 && s.box === 0)) return 'new';
    return s.box >= 3 ? 'known' : 'learning';
  });

  /** 4 lựa chọn nghĩa: nghĩa đúng + 3 nghĩa của từ cùng bài (thứ tự cố định theo từ) */
  protected readonly options = computed(() => {
    const w = this.word();
    if (!w) return [];
    const others = [...new Set(this.lessonWords().filter((x) => x.vi !== w.vi).map((x) => x.vi))];
    const start = hashString(w.id) % Math.max(1, others.length);
    const wrong = [...others.slice(start), ...others.slice(0, start)].slice(0, 3);
    const all = [w.vi, ...wrong];
    const shift = hashString(w.word) % all.length;
    return [...all.slice(shift), ...all.slice(0, shift)];
  });

  protected readonly picked = signal<string | null>(null);
  protected readonly filled = signal<boolean | null>(null);
  protected readonly flipped = signal(false);
  protected readonly cardIndex = signal(0);
  protected readonly card = computed(() => this.lessonWords()[this.cardIndex()]);

  constructor() {
    // Sang từ khác: đặt lại bài tập và thẻ flashcard, ghi nhận đã xem
    effect(() => {
      const w = this.word();
      this.picked.set(null);
      this.filled.set(null);
      this.flipped.set(false);
      if (w) {
        this.cardIndex.set(Math.max(0, this.lessonWords().findIndex((x) => x.id === w.id)));
      }
    });
  }

  protected posLabel(pos: string): string {
    return POS_LABEL[pos] ?? pos;
  }

  protected say(text: string, slow = false): void {
    void this.speech.speakEn(text, { slow });
  }

  protected toggleSave(w: Word): void {
    this.progress.toggleBookmark(w.id);
    this.ux.toast(this.progress.isBookmarked(w.id) ? `Đã thêm “${w.word}” vào yêu thích` : `Đã bỏ “${w.word}” khỏi yêu thích`, 'good', 1600);
  }

  protected markKnown(w: Word): void {
    // Người học tự xác nhận đã thuộc: đưa từ lên hộp 3 (mức "Đã nhớ")
    this.progress.markKnown(w.id, 3);
    this.ux.toast(`Đã đánh dấu “${w.word}” là đã học`, 'good', 1600);
  }

  protected move(step: number): void {
    const n = this.lessonWords().length;
    if (!n) return;
    this.cardIndex.set((this.cardIndex() + step + n) % n);
    this.flipped.set(false);
  }

  /** Chấm bài điền từ: chấp nhận đúng dạng trong câu hoặc từ gốc */
  protected check(ev: Event, value: string, answer: string): void {
    ev.preventDefault();
    const v = value.trim().toLowerCase();
    if (!v) return;
    const ok = v === answer.toLowerCase() || v === this.word()?.word.toLowerCase();
    this.filled.set(ok);
  }
}
