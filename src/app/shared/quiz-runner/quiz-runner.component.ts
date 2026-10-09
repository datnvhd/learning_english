/**
 * ============================================================================
 *  quiz-runner.component.ts – Bộ máy làm bài dùng chung
 * ============================================================================
 *  Hiển thị lần lượt từng câu hỏi (Question[]) và chấm điểm. Dùng cho MỌI loại bài:
 *  từ vựng, nghe, nói, đọc, viết, ôn tập, kiểm tra tổng quát/theo kỹ năng.
 *
 *  Hai chế độ:
 *   - 'practice' (luyện tập): có phản hồi ngay sau mỗi câu (đúng/sai + giải thích + Bông khen).
 *   - 'test' (kiểm tra): KHÔNG cho biết đúng/sai ngay; xem lại đáp án ở màn hình kết quả.
 *
 *  Các dạng câu hỏi: 'mcq' (trắc nghiệm – có thể chỉ nghe lựa chọn như TOEIC Part 1–2),
 *  'type' (gõ đáp án), 'order' (sắp xếp từ), 'speak' (nói – nhận dạng giọng nói hoặc ghi âm),
 *  'picwrite' (viết câu theo tranh – TOEIC Writing), 'essay' (viết luận), 'talk' (bài nói có đồng hồ).
 *
 *  Component KHÔNG tự lưu tiến độ: khi xong nó phát sự kiện `finished` kèm kết quả,
 *  trang cha (SessionPage) sẽ ghi nhận vào ProgressService.
 */
import { SKILL_INFO } from '../../data/topics';
import {
  ChangeDetectionStrategy, Component, computed, effect, inject, input, linkedSignal, OnDestroy, OnInit, output, signal, untracked, viewChild,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RecognitionService } from '../../core/recognition.service';
import { SfxService } from '../../core/sfx.service';
import { SpeechService } from '../../core/speech.service';
import { gradePicSentence } from '../../core/exam.service';
import { gradeTyped, normalizeText, wordSimilarity } from '../../core/text-utils';
import { BONG_LINES, BongLineKey } from '../../data/bong-lines';
import {
  AnswerResult, EssayQuestion, McqQuestion, OrderQuestion, PicWriteQuestion, Question, SessionResult, SpeakQuestion, TalkQuestion,
  TypeQuestion,
} from '../../models/question.model';
import { ConfettiComponent } from '../confetti.component';
import { UxService } from '../../core/ux.service';
import { IconComponent } from '../../theme/icon.component';
import { ChildResult, EssayCardComponent } from '../exam/essay-card.component';
import { TalkCardComponent } from '../exam/talk-card.component';
import { BongComponent } from '../bong.component';

/** Lời Bông nói sau mỗi câu trả lời (giọng nữ trẻ con) */
const PRAISE: BongLineKey[] = ['praise1', 'praise2', 'praise3', 'praise4', 'praise5', 'praise6'];
const ALMOST: BongLineKey[] = ['almost1', 'almost2', 'almost3'];
const RETRY: BongLineKey[] = ['retry1', 'retry2', 'retry3'];

/** Trạng thái của câu hỏi nói */
type SpeakState = 'idle' | 'listening' | 'recording' | 'rate' | 'done';

/** Kết quả chấm tạm thời của câu hiện tại (chờ bấm "Tiếp theo" mới ghi nhận) */
interface Pending {
  score: number;
  given: string;
  correct: string;
  /** Điểm theo thang riêng (ví dụ 0–3 của TOEIC Writing Q1–5) */
  points?: number;
  /** Nhận xét chi tiết hiển thị trong khung phản hồi */
  notes?: string[];
}

/** Một khối nội dung của đoạn văn: đoạn chữ, hoặc bảng (các dòng dạng "a | b | c") */
interface PassageBlock {
  text?: string;
  rows?: string[][];
}

@Component({
  selector: 'app-quiz-runner',
  imports: [FormsModule, BongComponent, ConfettiComponent, EssayCardComponent, TalkCardComponent, IconComponent],
  templateUrl: './quiz-runner.component.html',
  styleUrl: './quiz-runner.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class QuizRunnerComponent implements OnInit, OnDestroy {
  private readonly speech = inject(SpeechService);
  private readonly recog = inject(RecognitionService);
  private readonly sfx = inject(SfxService);
  private readonly ux = inject(UxService);

  // ---------------------------------------------------------------------
  //  ĐẦU VÀO / ĐẦU RA
  // ---------------------------------------------------------------------
  readonly questions = input.required<Question[]>();
  readonly mode = input<'practice' | 'test'>('practice');
  readonly title = input('Luyện tập');
  readonly icon = input('🎮');
  /** Phát ra khi làm xong toàn bộ câu hỏi */
  readonly finished = output<SessionResult>();
  /** Phát ra khi người dùng bấm nút thoát giữa chừng */
  readonly exit = output<void>();
  /** Giới hạn thời gian cả bài (giây); 0 = không giới hạn. Hết giờ bài tự nộp. */
  readonly timeLimit = input(0);

  // ---------------------------------------------------------------------
  //  TRẠNG THÁI
  // ---------------------------------------------------------------------
  // Chỉ số câu và kết quả tự đặt lại khi danh sách câu hỏi đổi (ví dụ chuyển phần thi mà không rời trang)
  protected readonly index = linkedSignal(() => (this.questions(), 0));
  private readonly results = linkedSignal<AnswerResult[]>(() => (this.questions(), []));
  /** 'answer' = đang trả lời, 'feedback' = đã chấm (chờ sang câu sau) */
  protected readonly phase = signal<'answer' | 'feedback'>('answer');
  protected readonly pending = signal<Pending | null>(null);
  protected readonly bongSays = signal('');

  // Trạng thái nhập liệu cho từng dạng câu hỏi
  protected readonly selected = signal<number | null>(null);
  protected readonly typed = signal('');
  protected readonly picked = signal<number[]>([]);
  protected readonly hintShown = signal(false);
  protected readonly showTranscript = signal(false);
  /** Đã bấm "Hiện chữ các lựa chọn" (câu chỉ nghe) */
  protected readonly revealed = signal(false);

  // Trạng thái câu hỏi nói
  protected readonly speakState = signal<SpeakState>('idle');
  protected readonly speakMsg = signal('');
  protected readonly transcript = signal('');
  protected readonly recUrl = signal<string | null>(null);

  // Đồng hồ đếm ngược, chuỗi đúng liên tiếp (combo) và hiệu ứng +XP
  protected readonly remaining = signal(0);
  protected readonly streak = signal(0);
  protected readonly xpPop = signal<{ id: number; text: string } | null>(null);
  private popId = 0;
  private clock: ReturnType<typeof setInterval> | null = null;
  private readonly confetti = viewChild(ConfettiComponent);

  private readonly startedAt = Date.now();
  private audioEl: HTMLAudioElement | null = null;

  // ---------------------------------------------------------------------
  //  DỮ LIỆU SUY DIỄN
  // ---------------------------------------------------------------------
  protected readonly total = computed(() => this.questions().length);
  protected readonly q = computed<Question>(() => this.questions()[Math.min(this.index(), this.questions().length - 1)]);
  protected readonly isTest = computed(() => this.mode() === 'test');
  protected readonly isLast = computed(() => this.index() >= this.total() - 1);

  /** Câu hỏi có phần ngữ cảnh (ảnh, bài đọc, bài nghe) -> chia 2 cột như đề thi thật */
  protected readonly hasContext = computed(() => {
    const q = this.q();
    return !!(q.image || q.passage || q.dialogue || (q.audio && q.hideText) || q.audioParts);
  });

  /** Icon và màu theo kỹ năng của câu hiện tại (ô vuông ở đầu trang) */
  protected readonly skillIcon = computed(() => SKILL_INFO[this.q().skill].ico);
  protected readonly skillColor = computed(() => SKILL_INFO[this.q().skill].color);

  /** Trạng thái từng câu cho dải số: ok / half / bad (luyện tập), done (thi), cur, todo */
  protected readonly marks = computed(() => {
    const results = this.results();
    const index = this.index();
    const test = this.isTest();
    return this.questions().map((_, i) => {
      const r = results[i];
      if (r && (i < index || this.phase() === 'feedback')) return test ? 'done' : r.score >= 0.99 ? 'ok' : r.score > 0 ? 'half' : 'bad';
      return i === index ? 'cur' : i < index ? 'done' : 'todo';
    });
  });

  /** Ép kiểu an toàn cho template */
  protected readonly mcq = computed(() => (this.q().kind === 'mcq' ? (this.q() as McqQuestion) : null));
  protected readonly typeQ = computed(() => (this.q().kind === 'type' ? (this.q() as TypeQuestion) : null));
  protected readonly orderQ = computed(() => (this.q().kind === 'order' ? (this.q() as OrderQuestion) : null));
  protected readonly speakQ = computed(() => (this.q().kind === 'speak' ? (this.q() as SpeakQuestion) : null));
  protected readonly essayQ = computed(() => (this.q().kind === 'essay' ? (this.q() as EssayQuestion) : null));
  protected readonly talkQ = computed(() => (this.q().kind === 'talk' ? (this.q() as TalkQuestion) : null));
  protected readonly picQ = computed(() => (this.q().kind === 'picwrite' ? (this.q() as PicWriteQuestion) : null));

  /** Có hiện chữ của các lựa chọn không (câu chỉ nghe: sau khi trả lời hoặc khi bấm "Hiện chữ") */
  protected readonly showOptionText = computed(() => this.revealed() || (this.phase() === 'feedback' && !this.isTest()));

  /** Viết câu theo tranh: hai từ bắt buộc đã được dùng chưa (cập nhật khi gõ) */
  protected readonly usedWords = computed(() => {
    const p = this.picQ();
    return p ? gradePicSentence(this.typed(), p.words).used : [false, false];
  });
  protected readonly typedWords = computed(() => this.typed().trim().split(/\s+/).filter(Boolean).length);
  /** Đồng hồ sắp hết giờ (dưới 1 phút) */
  protected readonly lowTime = computed(() => this.timeLimit() > 0 && this.remaining() <= 60);

  /** Các mảnh từ chưa được chọn (cho câu sắp xếp) */
  protected readonly freeTiles = computed(() => {
    const o = this.orderQ();
    if (!o) return [];
    const used = new Set(this.picked());
    return o.tiles.map((text, i) => ({ text, i })).filter((t) => !used.has(t.i));
  });

  /** Câu đã ghép từ các mảnh được chọn */
  protected readonly pickedTiles = computed(() => {
    const o = this.orderQ();
    return o ? this.picked().map((i) => ({ text: o.tiles[i], i })) : [];
  });

  /** Nút chính có được bấm không (đã có đáp án chưa) */
  protected readonly canSubmit = computed(() => {
    if (this.phase() === 'feedback') return true;
    const q = this.q();
    switch (q.kind) {
      case 'mcq': return this.selected() !== null;
      case 'type': return this.typed().trim().length > 0;
      case 'order': return this.picked().length === (q as OrderQuestion).tiles.length;
      case 'picwrite': return this.typed().trim().length > 0;
      default: return false; // câu nói: chấm bằng nút riêng
    }
  });

  /** Nhãn của nút chính */
  protected readonly primaryLabel = computed(() => {
    const last = this.isLast();
    if (this.isTest()) return last ? 'Nộp bài ✔' : 'Câu tiếp theo ›';
    if (this.phase() === 'answer') return 'Kiểm tra';
    return last ? 'Xem kết quả' : 'Tiếp theo';
  });

  /** Điểm câu vừa chấm: 'good' | 'half' | 'bad' để tô màu */
  protected readonly verdict = computed(() => {
    const p = this.pending();
    if (!p) return null;
    return p.score >= 0.99 ? 'good' : p.score > 0 ? 'half' : 'bad';
  });

  /** Hỗ trợ ghi âm/nhận dạng của thiết bị (để hiển thị hướng dẫn phù hợp) */
  protected readonly canRecognize = computed(() => this.recog.canRecognize);
  protected readonly canRecord = this.recog.recordingSupported;

  constructor() {
    // Mỗi khi sang câu mới: đặt lại trạng thái nhập liệu và tự phát âm thanh nếu cần
    effect(() => {
      const q = this.q();
      untracked(() => {
        this.resetInputs();
        if (q.autoPlay) setTimeout(() => this.playMain(), 350);
      });
    });
  }

  ngOnInit(): void {
    // Bài thi có giới hạn thời gian: bắt đầu đếm ngược và Bông động viên
    if (this.timeLimit() > 0) {
      this.remaining.set(this.timeLimit());
      void this.speech.bong('examStart');
      this.clock = setInterval(() => {
        this.remaining.update((v) => v - 1);
        if (this.remaining() <= 0) this.timeUp();
      }, 1000);
    }
  }

  /** mm:ss của đồng hồ */
  protected clockText(): string {
    const r = Math.max(0, this.remaining());
    return `${Math.floor(r / 60)}:${String(r % 60).padStart(2, '0')}`;
  }

  /** Hết giờ: các câu chưa làm tính 0 điểm rồi nộp bài */
  private timeUp(): void {
    if (this.clock) clearInterval(this.clock);
    this.clock = null;
    const done = this.results().length;
    const rest = this.questions().slice(done).map<AnswerResult>((q) => ({
      questionId: q.id, skill: q.skill, score: 0, given: '(hết giờ)', correct: this.correctOf(q), wordId: q.wordId, topicId: q.topicId,
    }));
    this.speech.cancel();
    void this.speech.bong('timeup');
    this.finished.emit({ questions: this.questions(), results: [...this.results(), ...rest], seconds: Math.round((Date.now() - this.startedAt) / 1000) });
  }

  /** Đáp án đúng dạng văn bản của một câu */
  private correctOf(q: Question): string {
    switch (q.kind) {
      case 'mcq': return q.options[q.answer];
      case 'type': return q.answers[0];
      case 'order': return q.answer.join(' ');
      case 'speak': return q.target;
      case 'essay': return q.task.model;
      case 'talk': return q.item.sample;
      case 'picwrite': return q.samples[0];
    }
  }

  /** Kết quả từ khung viết luận/nói: ghi nhận và chuyển câu (khung đã tự hiển thị phản hồi) */
  protected onChild(r: ChildResult): void {
    this.pending.set({ score: r.score, given: r.given, correct: r.correct });
    this.advance();
  }

  ngOnDestroy(): void {
    if (this.clock) clearInterval(this.clock);
    this.speech.cancel();
    this.recog.stopListening();
    void this.recog.stopRecording();
    this.audioEl?.pause();
  }

  // ---------------------------------------------------------------------
  //  ÂM THANH
  // ---------------------------------------------------------------------

  /** Phát âm thanh chính của câu hỏi (hội thoại hoặc văn bản tiếng Anh) */
  protected playMain(slow = false): void {
    const q = this.q();
    if (q.audioParts) void this.speech.speakSequence(q.audioParts, { slow });
    else if (q.dialogue) void this.speech.speakDialogue(q.dialogue.lines);
    else if (q.audio) void this.speech.speakEn(q.audio, { slow });
    else if (q.kind === 'speak') void this.speech.speakEn(q.target, { slow });
  }

  /** Đọc một đoạn văn tiếng Anh bất kỳ (bài đọc, đáp án...) */
  protected speak(text: string, ev?: Event): void {
    ev?.stopPropagation();
    void this.speech.speakEn(text);
  }

  /** Tách đoạn văn thành khối chữ và bảng (dòng có "|" liên tiếp => bảng) – có bộ nhớ đệm */
  private readonly blockCache = new Map<string, PassageBlock[]>();
  protected blocks(text: string): PassageBlock[] {
    const hit = this.blockCache.get(text);
    if (hit) return hit;
    const out: PassageBlock[] = [];
    let para: string[] = [];
    let rows: string[][] = [];
    const flush = () => {
      if (para.length) out.push({ text: para.join('\n') });
      if (rows.length) out.push({ rows });
      para = [];
      rows = [];
    };
    for (const line of text.split('\n')) {
      if (line.includes(' | ')) {
        if (para.length) { out.push({ text: para.join('\n') }); para = []; }
        rows.push(line.split('|').map((c) => c.trim()));
      } else {
        if (rows.length) { out.push({ rows }); rows = []; }
        para.push(line);
      }
    }
    flush();
    this.blockCache.set(text, out);
    return out;
  }

  // ---------------------------------------------------------------------
  //  ĐIỀU KHIỂN CHUNG
  // ---------------------------------------------------------------------

  /** Đặt lại toàn bộ trạng thái nhập liệu khi sang câu mới */
  private resetInputs(): void {
    this.phase.set('answer');
    this.pending.set(null);
    this.selected.set(null);
    this.typed.set('');
    this.picked.set([]);
    this.hintShown.set(false);
    this.showTranscript.set(false);
    this.revealed.set(false);
    this.speakState.set('idle');
    this.speakMsg.set('');
    this.transcript.set('');
    this.recUrl.set(null);
    this.bongSays.set('');
  }

  /** Bấm nút chính ("Kiểm tra" / "Tiếp theo") */
  protected primary(): void {
    if (!this.canSubmit()) return;
    if (this.phase() === 'feedback') {
      this.advance();
      return;
    }
    this.evaluate();
    // Chế độ kiểm tra: không hiển thị đúng/sai, chuyển câu ngay
    if (this.isTest()) this.advance();
  }

  /** Chấm câu hiện tại (mcq / type / order) */
  private evaluate(): void {
    const q = this.q();
    let p: Pending;
    if (q.kind === 'mcq') {
      const sel = this.selected() ?? -1;
      p = { score: sel === q.answer ? 1 : 0, given: q.options[sel] ?? '', correct: q.options[q.answer] };
    } else if (q.kind === 'type') {
      const g = gradeTyped(this.typed(), q.answers, q.mode === 'word');
      p = { score: g.score, given: this.typed().trim(), correct: g.best };
    } else if (q.kind === 'order') {
      const given = this.pickedTiles().map((t) => t.text);
      const ok = normalizeText(given.join(' ')) === normalizeText(q.answer.join(' '));
      p = { score: ok ? 1 : 0, given: given.join(' '), correct: q.answer.join(' ') };
    } else if (q.kind === 'picwrite') {
      const g = gradePicSentence(this.typed(), q.words);
      p = { score: g.points / 3, points: g.points, notes: g.notes, given: this.typed().trim(), correct: q.samples[0] };
    } else return;
    this.setPending(p);
  }

  /** Ghi kết quả tạm, chuyển sang giai đoạn phản hồi và cho Bông khen/động viên */
  private setPending(p: Pending): void {
    this.pending.set(p);
    this.phase.set('feedback');
    if (this.isTest()) return; // không phản hồi trong bài kiểm tra
    const pool = p.score >= 0.99 ? PRAISE : p.score > 0 ? ALMOST : RETRY;
    // Chuỗi trả lời đúng liên tiếp (combo) + hiệu ứng +XP
    if (p.score >= 0.99) {
      this.streak.update((v) => v + 1);
      this.xpPop.set({ id: ++this.popId, text: '+10 XP' });
    } else this.streak.set(0);
    const combo = this.streak();
    if (combo === 3 || combo === 5 || combo === 10) {
      this.confetti()?.fire(combo === 10 ? 200 : 100);
      this.bongSays.set(BONG_LINES[combo === 3 ? 'combo3' : combo === 5 ? 'combo5' : 'combo10']);
      this.sfx.win();
      void this.speech.bong(combo === 3 ? 'combo3' : combo === 5 ? 'combo5' : 'combo10');
      return;
    }
    const key = pool[Math.floor(Math.random() * pool.length)];
    this.bongSays.set(BONG_LINES[key]);
    p.score >= 0.99 ? this.sfx.correct() : p.score > 0 ? this.sfx.tap() : this.sfx.wrong();
    this.ux.haptic(p.score >= 0.99 ? 'good' : p.score > 0 ? 'tap' : 'bad');
    void this.speech.bong(key);
  }

  /** Ghi nhận kết quả câu hiện tại và sang câu tiếp theo (hoặc kết thúc) */
  protected advance(): void {
    const q = this.q();
    const p = this.pending();
    if (!p) return;
    this.speech.cancel();
    const result: AnswerResult = {
      questionId: q.id, skill: q.skill, score: p.score, given: p.given, correct: p.correct,
      wordId: q.wordId, topicId: q.topicId,
    };
    const all = [...this.results(), result];
    this.results.set(all);
    if (this.isLast()) {
      this.finished.emit({ questions: this.questions(), results: all, seconds: Math.round((Date.now() - this.startedAt) / 1000) });
    } else {
      this.index.update((i) => i + 1);
    }
  }

  /** Bỏ qua câu hiện tại (tính 0 điểm) */
  protected skip(): void {
    const q = this.q();
    const correct = this.correctOf(q);
    this.streak.set(0);
    this.pending.set({ score: 0, given: '(bỏ qua)', correct });
    this.advance();
  }

  /** Thoát giữa chừng (hỏi lại để tránh bấm nhầm) */
  protected quit(): void {
    if (typeof window === 'undefined' || window.confirm('Thoát bài làm? Kết quả bài này sẽ không được lưu.')) this.exit.emit();
  }

  // ---------------------------------------------------------------------
  //  TRẮC NGHIỆM
  // ---------------------------------------------------------------------
  protected choose(i: number): void {
    if (this.phase() !== 'answer') return;
    this.selected.set(i);
    this.sfx.tap();
  }

  /** Lớp CSS của một lựa chọn sau khi đã chấm */
  protected optionClass(i: number): string {
    const q = this.mcq();
    if (!q) return '';
    const sel = this.selected() === i;
    if (this.phase() === 'answer' || this.isTest()) return sel ? 'sel' : '';
    if (i === q.answer) return 'right';
    return sel ? 'wrong' : 'dim';
  }

  // ---------------------------------------------------------------------
  //  SẮP XẾP TỪ
  // ---------------------------------------------------------------------
  protected pickTile(i: number): void {
    if (this.phase() !== 'answer') return;
    this.picked.update((p) => [...p, i]);
    this.sfx.tap();
  }

  protected unpickTile(i: number): void {
    if (this.phase() !== 'answer') return;
    this.picked.update((p) => p.filter((x) => x !== i));
  }

  protected clearTiles(): void {
    this.picked.set([]);
  }

  // ---------------------------------------------------------------------
  //  GÕ ĐÁP ÁN
  // ---------------------------------------------------------------------
  protected onEnter(ev: Event): void {
    ev.preventDefault();
    this.primary();
  }

  // ---------------------------------------------------------------------
  //  NÓI
  // ---------------------------------------------------------------------

  /** Bấm nút micro: nhận dạng giọng nói nếu được, không thì ghi âm để tự đánh giá */
  protected async micPressed(): Promise<void> {
    const q = this.speakQ();
    if (!q || this.phase() !== 'answer') return;

    // Đang ghi âm -> bấm lần nữa để dừng và chuyển sang tự đánh giá
    if (this.speakState() === 'recording') {
      this.recUrl.set(await this.recog.stopRecording());
      this.speakState.set('rate');
      this.speakMsg.set('Nghe lại giọng của bạn rồi tự đánh giá nhé!');
      return;
    }
    if (this.speakState() === 'listening') {
      this.recog.stopListening();
      return;
    }

    this.speech.cancel();
    if (this.recog.canRecognize) {
      this.speakState.set('listening');
      this.speakMsg.set('Đang nghe... Hãy nói thật rõ nhé!');
      const out = await this.recog.listen('en-US');
      if (out.ok) {
        this.evaluateSpeech(q, out.transcripts);
        return;
      }
      if (out.reason === 'denied') {
        this.speakState.set('idle');
        this.speakMsg.set('Bạn hãy cho phép trình duyệt dùng micro rồi thử lại nhé.');
        return;
      }
      if (out.reason === 'no-speech') {
        this.speakState.set('idle');
        this.speakMsg.set('Chưa nghe thấy gì. Bấm micro và thử lại nhé!');
        return;
      }
      // offline/unsupported/error -> chuyển sang ghi âm
      this.speakMsg.set('Nhận dạng giọng nói cần Internet nên app chuyển sang chế độ ghi âm (offline).');
    }
    await this.startRecord();
  }

  /** Bắt đầu ghi âm (chế độ offline) */
  private async startRecord(): Promise<void> {
    if (await this.recog.startRecording()) {
      this.speakState.set('recording');
      this.speakMsg.set('Đang ghi âm... Bấm ⏹ khi đọc xong.');
    } else {
      // Không có micro: chỉ cho tự đánh giá
      this.speakState.set('rate');
      this.speakMsg.set('Không mở được micro. Hãy đọc to theo mẫu rồi tự đánh giá nhé!');
    }
  }

  /** Chấm bài nói dựa vào bản chép lời tốt nhất */
  private evaluateSpeech(q: SpeakQuestion, transcripts: string[]): void {
    let best = '';
    let sim = 0;
    for (const t of transcripts) {
      const s = wordSimilarity(t, q.target);
      if (s > sim) {
        sim = s;
        best = t;
      }
    }
    this.transcript.set(best || transcripts[0] || '');
    const score = sim >= 0.85 ? 1 : sim >= 0.55 ? 0.5 : 0;
    this.speakState.set('done');
    this.setPending({ score, given: this.transcript(), correct: q.target });
  }

  /** Người học tự chấm bài nói (chế độ offline) */
  protected selfRate(score: number): void {
    const q = this.speakQ();
    if (!q) return;
    const label = score >= 1 ? 'Tự đánh giá: đọc tốt' : score > 0 ? 'Tự đánh giá: tạm được' : 'Tự đánh giá: cần luyện thêm';
    this.speakState.set('done');
    this.setPending({ score, given: label, correct: q.target });
    if (this.isTest()) this.advance();
  }

  /** Nghe lại đoạn ghi âm của mình */
  protected playRecording(): void {
    const url = this.recUrl();
    if (!url) return;
    this.audioEl?.pause();
    this.audioEl = new Audio(url);
    void this.audioEl.play();
  }

  /** Thử nói lại (trong phần phản hồi của luyện tập) */
  protected retrySpeak(): void {
    this.phase.set('answer');
    this.pending.set(null);
    this.speakState.set('idle');
    this.speakMsg.set('');
    this.transcript.set('');
    this.bongSays.set('');
  }
}
