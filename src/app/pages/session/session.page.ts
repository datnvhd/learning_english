/**
 * session.page.ts – Trang "Làm bài": điều phối một buổi luyện tập / kiểm tra từ đầu đến cuối.
 *
 * Đường dẫn: /session/:mode/:topic  (kèm query tùy chế độ)
 *   mode = skill   -> luyện 1 kỹ năng           ?skill=listening|speaking|reading|writing|vocab
 *   mode = test    -> kiểm tra                  ?kind=all|listening|speaking|reading|writing|vocab
 *   mode = lesson  -> bài kiểm tra nhanh sau khi học một bài từ vựng   ?lesson=<số thứ tự bài>
 *   mode = review  -> ôn tập từ đến hạn (topic = all | saved | mã chủ đề)
 *   mode = mixed   -> luyện tập tổng hợp 4 kỹ năng
 *   topic = all hoặc mã chủ đề (daily, it, travel, study, health, food)
 *
 * Các bước: tạo câu hỏi (QuestionService) -> làm bài (QuizRunner) -> ghi nhận tiến độ
 * (ProgressService) -> hiển thị kết quả (ResultView).
 */
import { ChangeDetectionStrategy, Component, computed, effect, inject, signal, untracked } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { combineLatest, map } from 'rxjs';
import { ProgressService, SessionSummary } from '../../core/progress.service';
import { ExamService, ExamSummary } from '../../core/exam.service';
import { QuestionService, Scope } from '../../core/question.service';
import { SfxService } from '../../core/sfx.service';
import { SpeechService } from '../../core/speech.service';
import { EXAM_INFO, SECTION_BY_ID } from '../../data/exam/sections';
import { GRAMMAR_BY_ID } from '../../data/grammar';
import { SKILL_INFO, TOPIC_BY_ID } from '../../data/topics';
import { ExamId, ExamKind, ExamSectionId } from '../../models/exam.model';
import { Skill, TopicId } from '../../models/content.model';
import { SessionMode } from '../../models/progress.model';
import { Question, SessionResult } from '../../models/question.model';
import { BongComponent } from '../../shared/bong.component';
import { QuizRunnerComponent } from '../../shared/quiz-runner/quiz-runner.component';
import { ResultViewComponent } from '../../shared/result-view.component';

/** Các chế độ được hỗ trợ trên đường dẫn */
type RouteMode = 'skill' | 'test' | 'lesson' | 'review' | 'mixed' | 'exam' | 'grammar';

@Component({
  selector: 'app-session',
  imports: [RouterLink, BongComponent, QuizRunnerComponent, ResultViewComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <main class="page session">
      @switch (state()) {
        @case ('loading') {
          <div class="center card stack box">
            <app-bong mood="write" [size]="90" message="Đang chuẩn bị câu hỏi cho bạn..." />
          </div>
        }
        @case ('empty') {
          <div class="center card stack box">
            <app-bong mood="hello" [size]="90" [message]="emptyText()" />
            <a class="btn btn-primary" [routerLink]="emptyLink()">{{ emptyLabel() }}</a>
            <a class="btn btn-soft" routerLink="/practice">Về trung tâm luyện tập</a>
          </div>
        }
        @case ('run') {
          <!-- Khóa theo lượt làm bài: mỗi lượt mới tạo lại bộ làm bài (đồng hồ, chỉ số câu bắt đầu lại) -->
          @for (k of [runId()]; track k) {
            <app-quiz-runner [questions]="questions()" [mode]="runnerMode()" [title]="title()" [icon]="icon()" [timeLimit]="timeLimit()"
                             (finished)="onFinished($event)" (exit)="leave()" />
          }
        }
        @case ('result') {
          @if (summary(); as s) {
            @if (result(); as r) {
              <app-result-view [summary]="s" [session]="r" [exam]="examSummary()" (retry)="start()" (leave)="leave()" />
            }
          }
        }
      }
    </main>
  `,
  styles: `
    .session { max-width: 1480px; }
    .box { max-width: 640px; margin: var(--space-8) auto; align-items: center; padding: var(--space-6); }
  `,
})
export class SessionPage {
  private readonly route = inject(ActivatedRoute);
  private readonly router = inject(Router);
  private readonly questionSvc = inject(QuestionService);
  private readonly progress = inject(ProgressService);
  private readonly sfx = inject(SfxService);
  private readonly speech = inject(SpeechService);
  private readonly examSvc = inject(ExamService);

  /** Tham số đường dẫn + query gộp lại thành một signal */
  private readonly params = toSignal(
    combineLatest([this.route.paramMap, this.route.queryParamMap]).pipe(
      map(([p, q]) => ({
        mode: p.get('mode') as RouteMode,
        topic: (p.get('topic') ?? 'all') as Scope | 'saved',
        skill: (q.get('skill') ?? 'vocab') as Skill,
        kind: (q.get('kind') ?? 'all') as Skill | 'all',
        lesson: Number(q.get('lesson') ?? 0),
        section: (q.get('section') ?? '') as ExamSectionId | '',
        /** '' = không phải thi thử, '1' = thi thử (TOEIC: Listening & Reading), 'sw' = thi thử TOEIC Speaking & Writing */
        mock: q.get('mock') ?? '',
      })),
    ),
    { requireSync: true },
  );

  protected readonly state = signal<'loading' | 'empty' | 'run' | 'result'>('loading');
  protected readonly questions = signal<Question[]>([]);
  protected readonly summary = signal<SessionSummary | null>(null);
  protected readonly result = signal<SessionResult | null>(null);
  protected readonly examSummary = signal<ExamSummary | null>(null);
  /** Số thứ tự lượt làm bài – tăng mỗi lần bắt đầu để tạo mới QuizRunner */
  protected readonly runId = signal(0);
  /** Giới hạn thời gian (giây) của bài thi thử; 0 = không giới hạn */
  protected readonly timeLimit = signal(0);

  /** Tiêu đề hiển thị trên thanh trên cùng của bài làm */
  protected readonly title = computed(() => {
    const p = this.params();
    const topic = p.topic !== 'all' && p.topic !== 'saved' ? TOPIC_BY_ID[p.topic]?.title : '';
    switch (p.mode) {
      case 'grammar': return GRAMMAR_BY_ID[p.topic]?.title ?? 'Ngữ pháp';
      case 'exam': return p.mock ? `Thi thử ${EXAM_INFO[p.topic as ExamId].name.split(' ')[0]}${p.mock === 'sw' ? ' S&W' : ''}` : (p.section ? this.sectionTitle(p.section) : 'Luyện thi');
      case 'skill': return `Luyện ${SKILL_INFO[p.skill].label.toLowerCase()}`;
      case 'test': return p.kind === 'all' ? 'Kiểm tra tổng quát' : `Kiểm tra ${SKILL_INFO[p.kind].label.toLowerCase()}`;
      case 'lesson': return 'Kiểm tra nhanh';
      case 'review': return 'Ôn tập từ vựng';
      default: return topic ? `Tổng hợp: ${topic}` : 'Luyện tập tổng hợp';
    }
  });

  /** Tên bài luyện một phần thi, ví dụ "IELTS Reading Practice" hoặc "TOEIC Part 3 – Hội thoại" */
  private sectionTitle(id: ExamSectionId): string {
    const s = SECTION_BY_ID[id];
    return s.exam === 'ielts' ? `IELTS ${s.titleEn} Practice` : `TOEIC ${s.title}`;
  }

  protected readonly icon = computed(() => {
    const p = this.params();
    if (p.mode === 'grammar') return GRAMMAR_BY_ID[p.topic]?.icon ?? '📘';
    if (p.mode === 'exam') return p.section ? SECTION_BY_ID[p.section].icon : EXAM_INFO[p.topic as ExamId].icon;
    if (p.mode === 'skill') return SKILL_INFO[p.skill].icon;
    if (p.mode === 'test') return '📝';
    if (p.mode === 'review') return '🔁';
    if (p.mode === 'lesson') return '📖';
    return '💡';
  });

  protected readonly runnerMode = computed<'practice' | 'test'>(() => (this.params().mode === 'test' || (this.params().mode === 'exam' && this.params().mock) ? 'test' : 'practice'));

  protected readonly emptyText = computed(() =>
    this.params().mode === 'review'
      ? 'Hôm nay chưa có từ nào cần ôn. Hãy học thêm bài từ vựng mới nhé!'
      : 'Chưa tìm được câu hỏi phù hợp. Bạn thử chọn chủ đề khác nhé!',
  );
  protected readonly emptyLink = computed(() => (this.params().mode === 'review' ? '/vocab' : '/practice'));
  protected readonly emptyLabel = computed(() => (this.params().mode === 'review' ? 'Học từ mới' : 'Chọn bài khác'));

  constructor() {
    // Mỗi khi tham số đổi (hoặc vào trang lần đầu) thì tạo bài mới
    effect(() => {
      this.params();
      untracked(() => void this.start());
    });
  }

  /** Tạo câu hỏi và bắt đầu làm bài (cũng dùng cho nút "Làm lại") */
  protected async start(): Promise<void> {
    this.state.set('loading');
    this.summary.set(null);
    this.result.set(null);
    this.examSummary.set(null);
    this.timeLimit.set(0);
    this.runId.update((v) => v + 1);
    const p = this.params();
    let qs: Question[] = [];
    try {
      const scope = (p.topic === 'saved' ? 'all' : p.topic) as Scope;
      switch (p.mode) {
        case 'exam': {
          const exam = p.topic as ExamId;
          if (p.mock) {
            const m = this.examSvc.buildMock(exam, p.mock === 'sw' ? 'sw' : 'lr');
            qs = m.questions;
            this.timeLimit.set(m.minutes * 60);
          } else if (p.section) qs = this.examSvc.build(p.section);
          break;
        }
        case 'grammar': qs = this.questionSvc.forGrammar(p.topic); break;
        case 'skill': qs = await this.questionSvc.forSkill(p.skill, scope, 10); break;
        case 'test': qs = await this.questionSvc.forTest(p.kind, scope); break;
        case 'lesson': qs = await this.questionSvc.forLesson(p.topic as TopicId, p.lesson); break;
        case 'mixed': qs = await this.questionSvc.forMixed(scope, 3); break;
        case 'review': {
          let ids = this.progress.dueWordIds();
          if (p.topic === 'saved') ids = this.progress.bookmarkedIds();
          else if (p.topic !== 'all') ids = ids.filter((id) => id.startsWith(p.topic + ':'));
          qs = await this.questionSvc.forReview(ids, 15);
          break;
        }
      }
    } catch (e) {
      console.error('Không tạo được câu hỏi', e);
    }
    this.questions.set(qs);
    this.state.set(qs.length ? 'run' : 'empty');
  }

  /** Người học làm xong: ghi nhận tiến độ và hiện kết quả */
  protected onFinished(r: SessionResult): void {
    const p = this.params();
    const modeMap: Record<RouteMode, SessionMode> = { skill: 'practice', test: 'test', lesson: 'lesson', review: 'review', mixed: 'mixed', exam: 'exam', grammar: 'practice' };
    const skill: Skill | 'all' = p.mode === 'skill' ? p.skill : p.mode === 'test' ? p.kind : p.mode === 'mixed' ? 'all' : 'vocab';
    const topicId = (p.topic === 'saved' ? 'all' : p.topic) as TopicId | 'all';
    let exam: { id: ExamId; kind: ExamKind; label: string } | undefined;
    if (p.mode === 'exam') {
      const id = p.topic as ExamId;
      const kind: ExamKind = p.mock === 'sw' ? 'mock-sw' : p.mock ? 'mock' : (p.section as ExamSectionId);
      const sum = this.examSvc.summarize(id, kind, r);
      this.examSummary.set(sum);
      exam = { id, kind, label: sum.label };
    }
    const topicForRecord = p.mode === 'grammar' ? 'all' : topicId;
    const s = this.progress.recordSession({ mode: modeMap[p.mode], skill, topicId: topicForRecord, results: r.results, lessonIndex: p.lesson, exam });
    this.logErrors(r, p.mode === 'exam' ? (p.topic as ExamId) : undefined);
    if (p.mode === 'grammar') this.progress.saveBest(`grammar:${p.topic}`, s.percent);
    this.summary.set(s);
    this.result.set(r);
    this.state.set('result');
    // Âm thanh chúc mừng + Bông khen bằng giọng trẻ con
    if (s.percent >= 60) this.sfx.win();
    if (s.levelUp) void this.speech.bong('levelUp');
    else if (s.newBadges.length) void this.speech.bong('badge');
    else if (p.mode === 'exam') void this.speech.bong('examDone');
    else
    void this.speech.bong(s.percent >= 90 ? 'resultTop' : s.percent >= 60 ? 'resultGood' : 'resultLow');
  }

  /** Lưu các câu trả lời sai (trừ bài luận / bài nói tự chấm) để xem lại ở trang Error Review */
  private logErrors(r: SessionResult, exam?: ExamId): void {
    const byId = new Map(r.questions.map((q) => [q.id, q]));
    const source = this.title();
    const items = [];
    for (const x of r.results) {
      const q = byId.get(x.questionId);
      if (!q || x.score >= 0.5 || q.kind === 'essay' || q.kind === 'talk') continue;
      items.push({
        skill: x.skill, source, exam, prompt: q.prompt, question: q.focus ?? (q.kind === 'speak' ? q.target : (q.hideText ? '' : q.audio) ?? ''),
        given: x.given, correct: x.correct, explain: q.explain, wordId: x.wordId,
      });
    }
    this.progress.logErrors(items);
  }

  /** Thoát về màn hình phù hợp với loại bài */
  protected leave(): void {
    const p = this.params();
    if (p.mode === 'grammar') this.router.navigateByUrl(`/grammar/${p.topic}`);
    else if (p.mode === 'exam') this.router.navigateByUrl(p.mock ? '/mock' : `/${p.topic}`);
    else if (p.mode === 'lesson' || p.mode === 'review') this.router.navigateByUrl(p.mode === 'lesson' ? `/vocab/${p.topic}?tab=lessons` : '/vocab');
    else if (p.mode === 'test') this.router.navigateByUrl('/practice');
    else this.router.navigateByUrl('/practice');
  }
}
