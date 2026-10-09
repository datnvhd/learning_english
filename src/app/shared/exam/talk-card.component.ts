/**
 * talk-card.component.ts – Khung làm bài nói: IELTS Speaking (Part 1/2/3) và TOEIC Speaking (Q1–11).
 *
 * Các bước: đọc đề (giám khảo đọc câu hỏi) → thời gian chuẩn bị có đồng hồ đếm ngược
 * → nói và GHI ÂM có đồng hồ → nghe lại giọng mình + xem câu trả lời mẫu → tự chấm theo tiêu chí
 * → ước tính band IELTS hoặc điểm TOEIC (0–3 / 0–5).
 * Đề TOEIC có thể kèm ảnh (mô tả tranh), bảng thông tin (lịch trình) và câu hỏi chỉ nghe (Q8–10).
 * Ghi âm dùng micro của thiết bị nên hoạt động OFFLINE; nếu không có micro vẫn luyện được với đồng hồ.
 */
import { ChangeDetectionStrategy, Component, OnDestroy, computed, effect, inject, input, output, signal, untracked } from '@angular/core';
import { scoreToBand } from '../../core/exam.service';
import { RecognitionService } from '../../core/recognition.service';
import { SpeechService } from '../../core/speech.service';
import { SpeakingCriteria, SpeakingItem } from '../../models/exam.model';
import { IconComponent } from '../../theme/icon.component';
import { ChildResult } from './essay-card.component';

type Step = 'intro' | 'prep' | 'speak' | 'review';

/** Bộ tiêu chí tự chấm: IELTS (4 tiêu chí) và TOEIC (theo tiêu chí chấm của ETS) */
const CRITERIA_SETS: Record<SpeakingCriteria, { id: string; label: string }[]> = {
  ielts: [
    { id: 'fluency', label: 'Độ trôi chảy (Fluency)' },
    { id: 'vocab', label: 'Từ vựng (Lexical Resource)' },
    { id: 'grammar', label: 'Ngữ pháp (Grammar)' },
    { id: 'pron', label: 'Phát âm (Pronunciation)' },
  ],
  'toeic-read': [
    { id: 'pron', label: 'Phát âm (Pronunciation)' },
    { id: 'into', label: 'Ngữ điệu & trọng âm (Intonation & stress)' },
    { id: 'pace', label: 'Tốc độ & ngắt nghỉ' },
  ],
  toeic: [
    { id: 'content', label: 'Nội dung đúng & đủ ý (Relevance, completeness)' },
    { id: 'lang', label: 'Từ vựng & ngữ pháp' },
    { id: 'pron', label: 'Phát âm, ngữ điệu' },
    { id: 'fluency', label: 'Độ trôi chảy' },
  ],
};

@Component({
  selector: 'app-talk-card',
  imports: [IconComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="talk">
      <!-- Thẻ đề -->
      <section class="cue" [class.p2]="item().part === 2 && !item().label">
        <div class="ch">
          <span class="pt">{{ item().label ?? 'Part ' + item().part }}</span>
          <button class="icon-btn sm" type="button" (click)="readQuestion()" aria-label="Nghe giám khảo đọc đề"><app-icon name="volume" /></button>
        </div>
        @if (item().image) {
          <img class="pic" [src]="item().image" alt="Ảnh cần mô tả" />
        }
        @if (infoTable(); as t) {
          <p class="ttl">{{ t.title }}</p>
          <table class="tbl">
            @for (r of t.rows; track $index; let first = $first) {
              <tr [class.th]="first">@for (c of r; track $index) { <td>{{ c }}</td> }</tr>
            }
          </table>
        }
        @if (item().hideLines && step() !== 'review') {
          <p class="hidden-q"><app-icon name="headphones" /> Câu hỏi chỉ được nghe – bấm loa để nghe lại.</p>
        } @else {
          @for (l of item().lines; track $index) {
            <p [class.first]="$first" [class.q]="$last && item().lines.length > 1">{{ l }}</p>
          }
        }
      </section>

      @switch (step()) {
        @case ('intro') {
          @if (prepSeconds() > 0) {
            <p class="muted center">Bạn có <b>{{ prepSeconds() }} giây</b> chuẩn bị (ghi chú trong đầu) rồi nói tối đa <b>{{ speakSeconds() }} giây</b>.</p>
            <button class="btn btn-primary btn-block" type="button" (click)="startPrep()"><app-icon name="hourglass" /> Bắt đầu chuẩn bị</button>
          } @else {
            <p class="muted center">Trả lời tự nhiên trong khoảng <b>{{ speakSeconds() }} giây</b>.</p>
            <button class="btn btn-primary btn-block" type="button" (click)="startSpeak()"><app-icon name="microphone" /> Bắt đầu nói</button>
          }
          <button class="btn btn-ghost btn-sm" type="button" (click)="skip()">Bỏ qua phần này</button>
        }
        @case ('prep') {
          <div class="clock">{{ fmt(left()) }}</div>
          <p class="muted center">Đang chuẩn bị... nghĩ ý chính cho từng gợi ý.</p>
          <button class="btn btn-primary btn-block" type="button" (click)="startSpeak()">Sẵn sàng, nói ngay ›</button>
        }
        @case ('speak') {
          <div class="clock live">{{ fmt(left()) }}</div>
          <div class="wave" aria-hidden="true"><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i></div>
          <p class="center">{{ recording() ? 'Đang ghi âm...' : 'Hãy nói to và rõ ràng nhé!' }}</p>
          <button class="btn btn-accent btn-block" type="button" (click)="stopSpeak()"><app-icon name="player-stop" /> Xong, dừng lại</button>
        }
        @case ('review') {
          @if (recUrl()) {
            <button class="btn btn-soft btn-block" type="button" (click)="playRec()"><app-icon name="player-play" /> Nghe lại giọng của mình</button>
          }
          <div class="sample-box">
            <button class="btn btn-ghost btn-sm" type="button" (click)="showSample.set(!showSample())"><app-icon name="book-2" /> {{ showSample() ? 'Ẩn' : 'Xem' }} {{ isRead() ? 'đoạn đọc mẫu' : 'câu trả lời mẫu' }}</button>
            @if (showSample()) {
              <div class="sample">
                <button class="icon-btn sm" type="button" (click)="readSample()" aria-label="Nghe mẫu"><app-icon name="volume" /></button>
                <p>{{ item().sample }}</p>
                <ul>@for (t of item().tips; track t) { <li>{{ t }}</li> }</ul>
              </div>
            }
          </div>
          <h4>Tự đánh giá (1–5 sao)</h4>
          @for (c of criteriaList(); track c.id) {
            <div class="rate">
              <span>{{ c.label }}</span>
              <span class="stars">
                @for (s of [1, 2, 3, 4, 5]; track s) {
                  <button type="button" class="st" [class.on]="(ratings()[c.id] ?? 0) >= s" (click)="rate(c.id, s)" [attr.aria-label]="s + ' sao'">★</button>
                }
              </span>
            </div>
          }
          @if (allRated()) { <p class="center">{{ isToeic() ? 'Điểm ước tính' : 'Band ước tính' }}: <b class="band">{{ scoreText() }}</b></p> }
          <button class="btn btn-primary btn-block" type="button" [disabled]="!allRated()" (click)="finish()">Tiếp tục ›</button>
        }
      }
    </div>
  `,
  styles: `
    .talk { display: flex; flex-direction: column; gap: 10px; }
    .cue { background: var(--sand-100); border: 2px solid var(--sun-200); border-radius: var(--radius); padding: 12px 14px; line-height: 1.5; }
    .cue.p2 { background: var(--white); border-style: dashed; }
    .ch { display: flex; align-items: center; justify-content: space-between; margin-bottom: 4px; }
    .pt { font-family: var(--font-head); color: var(--primary-dark); }
    .cue p { margin: 2px 0; }
    .cue p.first { font-size: 1.05rem; }
    .clock { font-family: var(--font-head); font-size: 3rem; text-align: center; color: var(--primary-dark); }
    .clock.live { color: var(--bad); }
    .wave { display: flex; justify-content: center; align-items: center; gap: 4px; height: 44px; }
    .wave i { width: 5px; background: var(--primary); border-radius: 4px; height: 40%; animation: bounce 0.7s ease-in-out infinite alternate; }
    .wave i:nth-child(odd) { animation-delay: 0.25s; height: 70%; }
    @keyframes bounce { from { transform: scaleY(0.4); } to { transform: scaleY(1.3); } }
    .sample { background: var(--bg-soft); padding: 10px 12px; border-radius: var(--radius-sm); line-height: 1.5; }
    .sample ul { margin: 6px 0 0; padding-left: 20px; color: var(--ink-soft); font-size: 0.9rem; }
    h4 { margin-top: 4px; }
    .rate { display: flex; align-items: center; justify-content: space-between; gap: 8px; flex-wrap: wrap; }
    .stars { display: flex; }
    .st { background: transparent; font-size: 1.8rem; color: var(--slate-200); padding: 0 2px; }
    .st.on { color: var(--accent); }
    .band { font-family: var(--font-head); font-size: 1.5rem; color: var(--primary-dark); }
    .icon-btn.sm { width: 32px; height: 32px; }
    .pic { display: block; width: 100%; max-width: 380px; margin: 6px auto; aspect-ratio: 4 / 3; object-fit: cover; border-radius: var(--radius); }
    .ttl { font-weight: 800; color: var(--primary-dark); }
    .tbl { width: 100%; border-collapse: collapse; font-size: var(--fs-sm); background: var(--surface); margin: 6px 0; }
    .tbl td { border: 2px solid var(--line); padding: 5px 8px; }
    .tbl tr.th td { background: var(--primary-soft); color: var(--primary-dark); font-weight: 800; }
    .cue p.q { font-weight: 800; }
    .hidden-q { color: var(--ink-soft); }
    .hidden-q app-icon, .btn app-icon { width: 1.1em; height: 1.1em; vertical-align: -0.18em; }
  `,
})
export class TalkCardComponent implements OnDestroy {
  private readonly recog = inject(RecognitionService);
  private readonly speech = inject(SpeechService);

  readonly item = input.required<SpeakingItem>();
  readonly prepSeconds = input(0);
  readonly speakSeconds = input(60);
  readonly done = output<ChildResult>();

  /** Tiêu chí tự chấm theo loại đề */
  protected readonly criteriaList = computed(() => CRITERIA_SETS[this.item().criteria ?? 'ielts']);
  protected readonly isToeic = computed(() => (this.item().criteria ?? 'ielts') !== 'ielts');
  protected readonly isRead = computed(() => this.item().criteria === 'toeic-read');

  /** Bảng thông tin (TOEIC Q8–10): dòng đầu là tiêu đề, các dòng "a | b" là bảng */
  protected readonly infoTable = computed(() => {
    const info = this.item().info;
    if (!info) return null;
    const lines = info.split('\n');
    return { title: lines[0], rows: lines.slice(1).map((l) => l.split('|').map((c) => c.trim())) };
  });
  protected readonly step = signal<Step>('intro');
  protected readonly left = signal(0);
  protected readonly recording = signal(false);
  protected readonly recUrl = signal<string | null>(null);
  protected readonly showSample = signal(false);
  protected readonly ratings = signal<Record<string, number>>({});

  private timer: ReturnType<typeof setInterval> | null = null;
  private audio: HTMLAudioElement | null = null;

  protected readonly allRated = computed(() => this.criteriaList().every((c) => (this.ratings()[c.id] ?? 0) > 0));
  /** Điểm trung bình 1–5 sao quy về 0..1 */
  private readonly avg = computed(() => {
    const list = this.criteriaList();
    return list.reduce((n, c) => n + (this.ratings()[c.id] ?? 0), 0) / (list.length * 5);
  });
  /** Điểm 0..1 sau khi bỏ mức sàn (1 sao = 0) */
  private readonly score01 = computed(() => Math.max(0, (this.avg() - 0.2) / 0.8));
  protected readonly band = computed(() => scoreToBand(this.score01()));
  /** Nhãn điểm: "Band 6.5" (IELTS) hoặc "2/3" (TOEIC) */
  protected readonly scoreText = computed(() => {
    if (!this.isToeic()) return this.band().toFixed(1);
    const max = this.item().maxScore ?? 3;
    return `${Math.round(this.score01() * max)}/${max}`;
  });

  constructor() {
    // Đổi đề (câu mới) -> đặt lại trạng thái
    effect(() => {
      this.item();
      untracked(() => this.reset());
    });
  }

  ngOnDestroy(): void {
    this.clear();
    void this.recog.stopRecording();
    this.audio?.pause();
    this.speech.cancel();
  }

  protected fmt(s: number): string {
    return `${Math.floor(s / 60)}:${String(s % 60).padStart(2, '0')}`;
  }

  private reset(): void {
    this.clear();
    this.step.set('intro');
    this.recUrl.set(null);
    this.showSample.set(false);
    this.ratings.set({});
    this.recording.set(false);
  }

  private clear(): void {
    if (this.timer) clearInterval(this.timer);
    this.timer = null;
  }

  /** Giám khảo (giọng tiếng Anh của app) đọc đề */
  protected readQuestion(): Promise<void> {
    const it = this.item();
    return this.speech.speakEn(it.examiner ?? (it.part === 2 ? it.lines[0] : it.lines.join(' ')));
  }

  protected readSample(): void {
    void this.speech.speakEn(this.item().sample);
  }

  protected async startPrep(): Promise<void> {
    this.speech.cancel();
    // Câu hỏi chỉ nghe (TOEIC Q8–10): giám khảo đọc câu hỏi xong mới bắt đầu tính giờ
    if (this.item().hideLines) await this.readQuestion();
    this.step.set('prep');
    this.left.set(this.prepSeconds());
    this.clear();
    this.timer = setInterval(() => {
      this.left.update((v) => v - 1);
      if (this.left() <= 0) this.startSpeak();
    }, 1000);
  }

  protected async startSpeak(): Promise<void> {
    this.clear();
    this.speech.cancel();
    this.step.set('speak');
    this.left.set(this.speakSeconds());
    this.recording.set(await this.recog.startRecording());
    this.timer = setInterval(() => {
      this.left.update((v) => v - 1);
      if (this.left() <= 0) void this.stopSpeak();
    }, 1000);
  }

  protected async stopSpeak(): Promise<void> {
    this.clear();
    if (this.recording()) this.recUrl.set(await this.recog.stopRecording());
    this.recording.set(false);
    this.step.set('review');
  }

  protected playRec(): void {
    const url = this.recUrl();
    if (!url) return;
    this.audio?.pause();
    this.audio = new Audio(url);
    void this.audio.play();
  }

  protected rate(id: string, stars: number): void {
    this.ratings.update((r) => ({ ...r, [id]: stars }));
  }

  protected finish(): void {
    const score = Math.max(0, (this.avg() - 0.2) / 0.8);
    const label = this.isToeic() ? `${this.scoreText()} điểm` : `band ≈ ${this.band().toFixed(1)}`;
    this.done.emit({ score, given: `Tự đánh giá: ${label}`, correct: this.item().sample });
  }

  protected skip(): void {
    this.done.emit({ score: 0, given: '(bỏ qua)', correct: this.item().sample });
  }
}
