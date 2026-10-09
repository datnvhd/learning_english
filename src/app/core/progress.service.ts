/**
 * ============================================================================
 *  progress.service.ts – Quản lý toàn bộ tiến độ học tập và cài đặt của người dùng
 * ============================================================================
 *  - Lưu vào localStorage của trình duyệt (hoạt động hoàn toàn offline).
 *  - Dùng Angular Signals: giao diện tự cập nhật khi tiến độ thay đổi.
 *  - Ghi nhớ từ vựng theo phương pháp hộp Leitner (lặp lại ngắt quãng):
 *      trả lời đúng -> lên hộp cao hơn -> lâu hơn mới phải ôn lại;
 *      trả lời sai  -> xuống hộp thấp -> phải ôn lại sớm.
 */
import { Injectable, computed, signal } from '@angular/core';
import { Skill, TopicId } from '../models/content.model';
import {
  DayLog, ErrorItem, ExamRecord, PlanItem, ProgressState, SessionMode, Settings, SkillStat, TestRecord, WordState,
} from '../models/progress.model';
import { ExamId, ExamKind } from '../models/exam.model';
import { AnswerResult } from '../models/question.model';
import { BADGES, BadgeContext, BadgeDef } from '../data/badges';
import { TOPIC_IDS } from '../data/topics';
import { dayKey, pct } from './text-utils';

/** Khóa lưu trữ trong localStorage */
const STORAGE_KEY = 'english-adventure:progress:v1';

/** Số ngày phải chờ để ôn lại từng hộp nhớ (hộp 0 = ôn ngay) */
const BOX_DAYS = [0, 1, 2, 4, 8, 16];

/** Cài đặt mặc định */
export const DEFAULT_SETTINGS: Settings = {
  name: 'Học viên',
  dailyGoal: 50,
  pitch: 1,
  rate: 1,
  bongTalks: true,
  sfx: true,
  viVoice: '',
  enVoice: '',
  goal: 'daily',
  level: 'basic',
  onboarded: false,
  fontScale: 1,
  reduceMotion: false,
  haptics: true,
  targetBand: 7,
  targetToeic: 850,
};

/** Các danh hiệu theo cấp độ */
const LEVEL_TITLES = [
  'Học viên mới', 'Học viên chăm chỉ', 'Người học bền bỉ', 'Người học tiến bộ',
  'Người học vững vàng', 'Người học thành thạo', 'Bậc thầy tiếng Anh', 'Huyền thoại English Master',
];

/** Thông tin cấp độ được tính từ tổng XP */
export interface LevelInfo {
  level: number;
  title: string;
  /** XP đã có trong cấp hiện tại */
  into: number;
  /** XP cần để lên cấp tiếp theo (tính từ đầu cấp hiện tại) */
  need: number;
  ratio: number;
}

/** Tổng kết một buổi làm bài, dùng để hiển thị màn hình kết quả */
export interface SessionSummary {
  percent: number;
  xp: number;
  stars: 0 | 1 | 2 | 3;
  score: number;
  total: number;
  bySkill: Partial<Record<Skill, { score: number; total: number }>>;
  newBadges: BadgeDef[];
  levelUp: boolean;
}

/** Dữ liệu đầu vào khi kết thúc một buổi làm bài */
export interface SessionInput {
  mode: SessionMode;
  /** Kỹ năng chính của buổi học ('all' cho bài tổng hợp/tổng quát) */
  skill: Skill | 'all';
  topicId: TopicId | 'all';
  results: AnswerResult[];
  /** Với bài học từ vựng: số thứ tự bài học để lưu điểm */
  lessonIndex?: number;
  /** Với bài thi IELTS/TOEIC: thông tin để lưu lịch sử */
  exam?: { id: ExamId; kind: ExamKind; label: string };
}

/** XP cần để đạt cấp `level` (cấp 1 = 0 XP) */
function xpForLevel(level: number): number {
  return (50 * (level - 1) * level) / 2;
}

/** Tính thông tin cấp độ từ tổng XP */
export function levelInfo(xp: number): LevelInfo {
  let level = 1;
  while (xpForLevel(level + 1) <= xp) level++;
  const start = xpForLevel(level);
  const need = xpForLevel(level + 1) - start;
  const into = xp - start;
  return { level, title: LEVEL_TITLES[Math.min(level - 1, LEVEL_TITLES.length - 1)], into, need, ratio: into / need };
}

/** Lịch học gợi ý theo mục tiêu (dùng khi người học chưa tự sắp xếp) */
export function defaultPlan(goal: Settings['goal']): PlanItem[] {
  const exam = goal === 'toeic' ? 'toeic' : 'ielts';
  const E = exam === 'toeic' ? 'TOEIC' : 'IELTS';
  const rows: [number, string, number, string, PlanItem['kind']][] = [
    [0, '19:00', 45, `${E} Listening`, exam], [0, '20:00', 20, 'Từ vựng mới', 'vocab'],
    [1, '19:00', 45, `${E} Reading`, exam], [1, '20:00', 15, 'Ôn tập từ vựng', 'review'],
    [2, '19:00', 45, exam === 'toeic' ? 'TOEIC Part 5–6' : 'IELTS Writing', exam], [2, '20:00', 20, 'Từ vựng mới', 'vocab'],
    [3, '19:00', 40, exam === 'toeic' ? 'TOEIC Part 3–4' : 'IELTS Speaking', exam], [3, '20:00', 20, 'Ngữ pháp', 'practice'],
    [4, '19:00', 30, 'Luyện tập tổng hợp', 'practice'], [4, '19:45', 15, 'Ôn lỗi sai', 'review'],
    [5, '09:00', 80, `Thi thử ${E}`, 'mock'],
    [6, '09:00', 30, 'Ôn tập từ vựng', 'review'], [6, '10:00', 30, 'Trò chơi từ vựng', 'practice'],
  ];
  return rows.map(([day, start, minutes, title, kind], i) => ({ id: `d${i}`, day, start, minutes, title, kind }));
}

/** Tạo nhật ký ngày trống */
function emptyDay(): DayLog {
  return { xp: 0, questions: 0, correct: 0, lessons: 0, reviews: 0, skills: {} };
}

/** Trạng thái ban đầu khi người dùng mở app lần đầu */
function freshState(): ProgressState {
  return {
    version: 1, words: {}, skills: {}, days: {}, tests: [], exams: [], games: {}, chestDay: '', badges: {}, lessons: {},
    xp: 0, startedAt: dayKey(), settings: { ...DEFAULT_SETTINGS },
  };
}

@Injectable({ providedIn: 'root' })
export class ProgressService {
  private readonly _state = signal<ProgressState>(this.load());
  /** Trạng thái tiến độ (chỉ đọc) */
  readonly state = this._state.asReadonly();

  /** Cài đặt hiện tại */
  readonly settings = computed(() => this._state().settings);
  /** Tổng XP */
  readonly xp = computed(() => this._state().xp);
  /** Thông tin cấp độ */
  readonly level = computed(() => levelInfo(this._state().xp));
  /** Số từ đã thuộc (hộp nhớ >= 1) trên toàn app */
  readonly learnedTotal = computed(() => Object.values(this._state().words).filter((w) => w.box >= 1).length);
  /** Nhật ký hôm nay */
  readonly today = computed(() => this._state().days[dayKey()] ?? emptyDay());
  /** Chuỗi ngày học liên tiếp */
  readonly streak = computed(() => this.calcStreak(this._state().days));
  /** Số giây đã học hôm nay */
  readonly todaySeconds = computed(() => this.today().sec ?? 0);
  /** Nhật ký câu sai, mới nhất trước */
  readonly errors = computed(() => [...(this._state().errors ?? [])].reverse());
  /** Lịch học hằng tuần (lịch gợi ý theo mục tiêu nếu người dùng chưa tự sắp xếp) */
  readonly plan = computed(() => this._state().plan ?? defaultPlan(this._state().settings.goal));
  /** Số ngày đã có hoạt động học */
  readonly activeDays = computed(() => Object.values(this._state().days).filter((d) => d.xp > 0).length);

  /** Bộ đếm thời gian để gộp nhiều lần ghi vào localStorage */
  private saveTimer: ReturnType<typeof setTimeout> | null = null;

  constructor() {
    // Đảm bảo dữ liệu được lưu khi người dùng đóng/chuyển tab
    if (typeof window !== 'undefined') {
      window.addEventListener('pagehide', () => this.flush());
      document.addEventListener('visibilitychange', () => {
        if (document.visibilityState === 'hidden') this.flush();
      });
    }
  }

  // ---------------------------------------------------------------------
  //  TỪ VỰNG: trạng thái từng từ, đánh dấu, ôn tập
  // ---------------------------------------------------------------------

  /** Lấy trạng thái một từ (mặc định: chưa học) */
  wordState(id: string): WordState | undefined {
    return this._state().words[id];
  }

  /** Từ đã thuộc chưa? (hộp nhớ >= 1) */
  isLearned(id: string): boolean {
    return (this._state().words[id]?.box ?? 0) >= 1;
  }

  /** Số từ đã thuộc trong một chủ đề */
  learnedCount(topicId: TopicId): number {
    const prefix = topicId + ':';
    let n = 0;
    for (const [id, w] of Object.entries(this._state().words)) if (w.box >= 1 && id.startsWith(prefix)) n++;
    return n;
  }

  /** Số từ đã thuộc trong một bài học của chủ đề (dựa trên danh sách mã từ) */
  learnedIn(ids: string[]): number {
    const words = this._state().words;
    return ids.reduce((n, id) => n + ((words[id]?.box ?? 0) >= 1 ? 1 : 0), 0);
  }

  /** Từ đã được đánh dấu lưu? */
  isBookmarked(id: string): boolean {
    return !!this._state().words[id]?.bm;
  }

  /** Bật/tắt đánh dấu lưu một từ */
  toggleBookmark(id: string): void {
    const s = this.ensureWord(id);
    s.bm = !s.bm;
    this.commit();
  }

  /** Ghi nhận đã XEM các từ (ví dụ khi lật thẻ học) */
  markSeen(ids: string[]): void {
    for (const id of ids) this.ensureWord(id).seen++;
    this.commit();
  }

  /** Người học tự báo "Tôi đã biết từ này" */
  markKnown(id: string, box = 2): void {
    const s = this.ensureWord(id);
    if (s.box < box) s.box = Math.min(5, box);
    s.due = Date.now() + BOX_DAYS[s.box] * 86_400_000;
    this.commit();
  }

  /** Danh sách mã từ đến hạn ôn tập (sắp xếp theo độ cấp thiết) */
  dueWordIds(limit = 1000): string[] {
    const endOfToday = new Date();
    endOfToday.setHours(23, 59, 59, 999);
    const now = endOfToday.getTime();
    return Object.entries(this._state().words)
      .filter(([, w]) => (w.box >= 1 && w.due <= now) || (w.box === 0 && w.wrong > 0))
      .sort((a, b) => a[1].due - b[1].due)
      .slice(0, limit)
      .map(([id]) => id);
  }

  /** Số từ đến hạn ôn hôm nay */
  readonly dueCount = computed(() => this.dueWordIds().length);

  /** Mã các từ đã lưu (bookmark) */
  bookmarkedIds(): string[] {
    return Object.entries(this._state().words).filter(([, w]) => w.bm).map(([id]) => id);
  }

  // ---------------------------------------------------------------------
  //  KỸ NĂNG & KIỂM TRA
  // ---------------------------------------------------------------------

  /** Thống kê một kỹ năng trong một chủ đề (hoặc 'all') */
  skillStat(topicId: TopicId | 'all', skill: Skill): SkillStat | undefined {
    return this._state().skills[`${topicId}|${skill}`];
  }

  /** Điểm cao nhất (%) của một kỹ năng trong chủ đề (0 nếu chưa làm) */
  bestScore(topicId: TopicId, skill: Skill): number {
    return this.skillStat(topicId, skill)?.best ?? 0;
  }

  /** Điểm trung bình (%) của một kỹ năng trên toàn bộ các lần làm bài, hoặc null nếu chưa làm */
  skillAverage(skill: Skill): number | null {
    let right = 0;
    let total = 0;
    for (const [key, st] of Object.entries(this._state().skills)) {
      if (key.endsWith('|' + skill)) {
        right += st.right;
        total += st.total;
      }
    }
    return total > 0 ? pct(right, total) : null;
  }

  /** Điểm cao nhất của bài học từ vựng (undefined nếu chưa học) */
  lessonBest(topicId: TopicId, lessonIndex: number): number | undefined {
    return this._state().lessons[`${topicId}:${lessonIndex}`];
  }

  /** Lưu điểm cao nhất theo một khóa tùy ý (ví dụ "grammar:to-be") */
  saveBest(key: string, percent: number): void {
    const st = this._state();
    st.lessons[key] = Math.max(st.lessons[key] ?? 0, percent);
    this.commit();
  }

  /** Điểm cao nhất theo khóa (undefined nếu chưa làm) */
  bestOf(key: string): number | undefined {
    return this._state().lessons[key];
  }

  /** Lịch sử bài kiểm tra, mới nhất trước */
  readonly tests = computed(() => [...this._state().tests].reverse());

  /** Hoạt động 7 ngày gần nhất (dùng vẽ biểu đồ cột) */
  weekActivity(): { key: string; label: string; xp: number; minutes: number; today: boolean }[] {
    const names = ['CN', 'T2', 'T3', 'T4', 'T5', 'T6', 'T7'];
    const days = this._state().days;
    const out = [];
    for (let i = 6; i >= 0; i--) {
      const d = new Date();
      d.setDate(d.getDate() - i);
      const key = dayKey(d);
      out.push({ key, label: names[d.getDay()], xp: days[key]?.xp ?? 0, minutes: Math.round((days[key]?.sec ?? 0) / 60), today: i === 0 });
    }
    return out;
  }

  // ---------------------------------------------------------------------
  //  GHI NHẬN MỘT BUỔI LÀM BÀI
  // ---------------------------------------------------------------------

  /**
   * Ghi nhận kết quả một buổi luyện tập/kiểm tra:
   *  - cập nhật trí nhớ từng từ, thống kê kỹ năng, nhật ký ngày, XP, huy hiệu.
   * @returns bản tổng kết để hiển thị ở màn hình kết quả
   */
  recordSession(input: SessionInput): SessionSummary {
    const st = this._state();
    const oldLevel = levelInfo(st.xp).level;
    const today = dayKey();
    const log = (st.days[today] ??= emptyDay());

    // 1) Cập nhật trí nhớ cho từng từ liên quan
    for (const r of input.results) if (r.wordId) this.applyAnswer(r.wordId, r.score);

    // 2) Tổng hợp điểm theo kỹ năng
    const bySkill: SessionSummary['bySkill'] = {};
    let score = 0;
    for (const r of input.results) {
      const b = (bySkill[r.skill] ??= { score: 0, total: 0 });
      b.score += r.score;
      b.total += 1;
      score += r.score;
    }
    const total = input.results.length;
    const percent = pct(score, total);

    // 3) Cập nhật thống kê kỹ năng theo chủ đề
    for (const [skill, b] of Object.entries(bySkill) as [Skill, { score: number; total: number }][]) {
      const key = `${input.topicId}|${skill}`;
      const stat = (st.skills[key] ??= { attempts: 0, best: 0, last: 0, right: 0, total: 0 });
      const p = pct(b.score, b.total);
      stat.attempts++;
      stat.last = p;
      stat.best = Math.max(stat.best, p);
      stat.right += b.score;
      stat.total += b.total;
      log.skills[skill] = (log.skills[skill] ?? 0) + 1;
    }

    // 4) Điểm bài học từ vựng, bài kiểm tra
    if (input.mode === 'lesson' && input.lessonIndex !== undefined && input.topicId !== 'all') {
      const k = `${input.topicId}:${input.lessonIndex}`;
      st.lessons[k] = Math.max(st.lessons[k] ?? 0, percent);
      log.lessons++;
    }
    if (input.mode === 'review') log.reviews += total;
    if (input.mode === 'exam' && input.exam) {
      const rec: ExamRecord = {
        id: `${Date.now()}`, date: new Date().toISOString(), exam: input.exam.id, kind: input.exam.kind, percent, label: input.exam.label,
      };
      st.exams = [...(st.exams ?? []), rec].slice(-50);
    }
    if (input.mode === 'test') {
      const rec: TestRecord = {
        id: `${Date.now()}`,
        date: new Date().toISOString(),
        kind: input.skill,
        topic: input.topicId,
        percent,
        bySkill,
      };
      st.tests = [...st.tests, rec].slice(-50);
    }

    // 5) Tính XP: 10 điểm/câu đúng, thưởng thêm khi đạt điểm cao; bài kiểm tra nhân 1.5
    let xp = Math.round(score * 10);
    if (percent >= 80) xp += 20;
    else if (percent >= 60) xp += 10;
    if (input.mode === 'test' || input.mode === 'exam') xp = Math.round(xp * 1.5);
    st.xp += xp;
    log.xp += xp;
    log.questions += total;
    log.correct += Math.round(score);

    // 6) Lưu và xét huy hiệu
    this.commit();
    const newBadges = this.evaluateBadges();
    const stars: 0 | 1 | 2 | 3 = percent >= 90 ? 3 : percent >= 70 ? 2 : percent >= 40 ? 1 : 0;
    return { percent, xp, stars, score, total, bySkill, newBadges, levelUp: levelInfo(this._state().xp).level > oldLevel };
  }

  /** Lịch sử thi thử IELTS/TOEIC, mới nhất trước */
  readonly exams = computed(() => [...(this._state().exams ?? [])].reverse());

  /** Điểm cao nhất của một trò chơi */
  gameBest(game: string, topic: string): number {
    return this._state().games?.[`${game}|${topic}`] ?? 0;
  }

  /**
   * Ghi nhận kết quả một trò chơi mini: cộng XP, lưu điểm cao, và cập nhật trí nhớ
   * cho các từ trả lời đúng ngay lần đầu.
   * @returns true nếu phá kỷ lục
   */
  recordGame(game: string, topic: string, score: number, xp: number, correctWordIds: string[]): boolean {
    const st = this._state();
    for (const id of correctWordIds) this.applyAnswer(id, 1);
    const key = `${game}|${topic}`;
    st.games ??= {};
    const record = score > (st.games[key] ?? 0);
    if (record) st.games[key] = score;
    const log = (st.days[dayKey()] ??= emptyDay());
    st.xp += xp;
    log.xp += xp;
    log.reviews += correctWordIds.length;
    this.commit();
    this.evaluateBadges();
    return record;
  }

  /** Hôm nay đã mở rương báu chưa? */
  readonly chestReady = computed(() => this._state().chestDay !== dayKey());

  /** Mở rương báu hằng ngày: trả về số XP nhận được (hoặc 0 nếu đã mở hôm nay) */
  claimChest(): number {
    const st = this._state();
    if (st.chestDay === dayKey()) return 0;
    const xp = 15 + Math.floor(Math.random() * 26) + Math.min(20, this.streak() * 2);
    st.chestDay = dayKey();
    st.xp += xp;
    (st.days[dayKey()] ??= emptyDay()).xp += xp;
    this.commit();
    this.evaluateBadges();
    return xp;
  }

  /** Ghi nhận đã hoàn thành việc xem một bài học thẻ từ (chưa làm quiz) */
  recordStudyXp(xp: number): void {
    const st = this._state();
    const log = (st.days[dayKey()] ??= emptyDay());
    st.xp += xp;
    log.xp += xp;
    this.commit();
    this.evaluateBadges();
  }

  // ---------------------------------------------------------------------
  //  THỜI GIAN HỌC, CÂU SAI, LỊCH HỌC
  // ---------------------------------------------------------------------

  /** Cộng thời gian học (giây) vào nhật ký hôm nay – App gọi định kỳ khi đang mở */
  addTime(seconds: number): void {
    const st = this._state();
    const log = (st.days[dayKey()] ??= emptyDay());
    log.sec = (log.sec ?? 0) + seconds;
    this.commit();
  }

  /** Tổng số giây đã học trong N ngày gần nhất */
  secondsInLastDays(n: number): number {
    const days = this._state().days;
    let sum = 0;
    for (let i = 0; i < n; i++) {
      const d = new Date();
      d.setDate(d.getDate() - i);
      sum += days[dayKey(d)]?.sec ?? 0;
    }
    return sum;
  }

  /** Lưu các câu trả lời sai của một buổi làm bài (giữ 300 câu gần nhất) */
  logErrors(items: Omit<ErrorItem, 'id' | 'date'>[]): void {
    if (!items.length) return;
    const st = this._state();
    const now = Date.now();
    const date = new Date().toISOString();
    const added = items.map((it, i) => ({ ...it, id: `${now}-${i}`, date }));
    // Câu hỏi lặp lại (cùng nội dung + đáp án) chỉ giữ lần sai mới nhất
    const fresh = new Set(added.map((e) => `${e.question}|${e.correct}`));
    st.errors = [...(st.errors ?? []).filter((e) => !fresh.has(`${e.question}|${e.correct}`)), ...added].slice(-300);
    this.commit();
  }

  /** Xóa một câu khỏi nhật ký câu sai (đã hiểu) – hoặc xóa hết khi không truyền mã */
  removeError(id?: string): void {
    const st = this._state();
    st.errors = id ? (st.errors ?? []).filter((e) => e.id !== id) : [];
    this.commit();
  }

  /** Lưu lịch học hằng tuần; truyền undefined để quay về lịch gợi ý */
  setPlan(plan: PlanItem[] | undefined): void {
    const st = this._state();
    st.plan = plan;
    this.commit();
  }

  /** Đề thi thử có được đánh dấu yêu thích không */
  isFav(id: string): boolean {
    return (this._state().favs ?? []).includes(id);
  }

  /** Bật/tắt yêu thích một đề thi thử */
  toggleFav(id: string): void {
    const st = this._state();
    const favs = st.favs ?? [];
    st.favs = favs.includes(id) ? favs.filter((x) => x !== id) : [...favs, id];
    this.commit();
  }

  // ---------------------------------------------------------------------
  //  HUY HIỆU
  // ---------------------------------------------------------------------

  /** Tạo ngữ cảnh dùng để xét huy hiệu */
  private badgeContext(): BadgeContext {
    const st = this._state();
    const bestBySkill: Record<string, number> = {};
    for (const [key, s] of Object.entries(st.skills)) {
      const skill = key.split('|')[1];
      bestBySkill[skill] = Math.max(bestBySkill[skill] ?? 0, s.best);
    }
    const perTopic: Record<string, number> = {};
    for (const [id, w] of Object.entries(st.words)) {
      if (w.box >= 1) {
        const t = id.split(':')[0];
        perTopic[t] = (perTopic[t] ?? 0) + 1;
      }
    }
    return {
      learned: this.learnedTotal(),
      streak: this.streak(),
      sessions: Object.values(st.days).reduce((n, d) => n + (d.questions > 0 || d.lessons > 0 ? 1 : 0), 0) || (st.xp > 0 ? 1 : 0),
      tests: st.tests.length,
      bestBySkill,
      topicsExplored: TOPIC_IDS.filter((t) => (perTopic[t] ?? 0) >= 20).length,
      level: levelInfo(st.xp).level,
      bestGeneralTest: Math.max(0, ...st.tests.filter((t) => t.kind === 'all').map((t) => t.percent)),
    };
  }

  /** Xét các huy hiệu chưa đạt, ghi nhận và trả về danh sách huy hiệu MỚI đạt */
  private evaluateBadges(): BadgeDef[] {
    const st = this._state();
    const ctx = this.badgeContext();
    const earned: BadgeDef[] = [];
    for (const b of BADGES) {
      if (!st.badges[b.id] && b.check(ctx)) {
        st.badges[b.id] = dayKey();
        earned.push(b);
      }
    }
    if (earned.length) this.commit();
    return earned;
  }

  // ---------------------------------------------------------------------
  //  CÀI ĐẶT, SAO LƯU, ĐẶT LẠI
  // ---------------------------------------------------------------------

  /** Cập nhật một phần cài đặt */
  updateSettings(patch: Partial<Settings>): void {
    const st = this._state();
    st.settings = { ...st.settings, ...patch };
    this.commit();
  }

  /** Xuất toàn bộ tiến độ thành chuỗi JSON (để sao lưu) */
  exportJson(): string {
    return JSON.stringify(this._state(), null, 2);
  }

  /** Nhập tiến độ từ chuỗi JSON; trả về true nếu hợp lệ */
  importJson(text: string): boolean {
    try {
      const data = JSON.parse(text) as ProgressState;
      if (data?.version !== 1 || typeof data.words !== 'object') return false;
      this._state.set({ ...freshState(), ...data, settings: { ...DEFAULT_SETTINGS, ...data.settings } });
      this.flush();
      return true;
    } catch {
      return false;
    }
  }

  /** Xóa toàn bộ tiến độ và bắt đầu lại */
  reset(): void {
    this._state.set(freshState());
    this.flush();
  }

  // ---------------------------------------------------------------------
  //  HÀM NỘI BỘ
  // ---------------------------------------------------------------------

  /** Lấy (hoặc tạo mới) trạng thái của một từ */
  private ensureWord(id: string): WordState {
    const words = this._state().words;
    return (words[id] ??= { box: 0, seen: 0, right: 0, wrong: 0, due: 0 });
  }

  /** Áp dụng kết quả trả lời vào hộp nhớ Leitner của từ */
  private applyAnswer(id: string, score: number): void {
    const s = this.ensureWord(id);
    s.seen++;
    if (score >= 0.99) {
      s.right++;
      s.box = Math.min(5, s.box + 1);
    } else if (score <= 0.01) {
      s.wrong++;
      s.box = Math.max(0, s.box - 1);
    }
    s.due = Date.now() + BOX_DAYS[s.box] * 86_400_000;
  }

  /** Tính chuỗi ngày học liên tiếp tính đến hôm nay (hoặc hôm qua nếu hôm nay chưa học) */
  private calcStreak(days: Record<string, DayLog>): number {
    const d = new Date();
    if (!((days[dayKey(d)]?.xp ?? 0) > 0)) d.setDate(d.getDate() - 1);
    let count = 0;
    while ((days[dayKey(d)]?.xp ?? 0) > 0) {
      count++;
      d.setDate(d.getDate() - 1);
    }
    return count;
  }

  /** Đánh dấu trạng thái đã đổi (tạo tham chiếu mới để signal thông báo) và lên lịch lưu */
  private commit(): void {
    this._state.set({ ...this._state() });
    if (this.saveTimer) clearTimeout(this.saveTimer);
    this.saveTimer = setTimeout(() => this.flush(), 400);
  }

  /** Ghi ngay lập tức vào localStorage */
  private flush(): void {
    if (this.saveTimer) {
      clearTimeout(this.saveTimer);
      this.saveTimer = null;
    }
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(this._state()));
    } catch {
      /* Trình duyệt chặn localStorage (chế độ riêng tư…) – bỏ qua, app vẫn chạy bình thường */
    }
  }

  /** Nạp tiến độ đã lưu (nếu có và hợp lệ) */
  private load(): ProgressState {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const data = JSON.parse(raw) as ProgressState;
        if (data?.version === 1) return { ...freshState(), ...data, settings: { ...DEFAULT_SETTINGS, ...data.settings } };
      }
    } catch {
      /* Dữ liệu hỏng -> bắt đầu mới */
    }
    return freshState();
  }
}
