/**
 * speaking.service.ts – Chấm bài nói tự động: ghi âm (RecognitionService) → nhận dạng offline (AsrService)
 * và chấm theo tiêu chí (speaking-score.ts). Nếu đã bật "Chấm điểm bằng AI" trong Cài đặt (cần Internet):
 *  - Gemini: AI nghe trực tiếp bản ghi âm và chấm;
 *  - Cloudflare Workers AI: Whisper chép lời, Llama chấm dựa trên bản chép lời + số đo của bộ chấm offline.
 * Lỗi gọi AI → dùng kết quả chấm offline (kèm ghi chú).
 * Dùng chung cho khung Speaking IELTS/TOEIC, câu luyện nói trong bài và thẻ từ.
 */
import { Injectable, inject } from '@angular/core';
import { AsrService } from './asr.service';
import { ExamService } from './exam.service';
import type { AiSpeakContext } from './ai-grading';
import { AiService } from './ai.service';
import { PhonemeService } from './phoneme.service';
import type { PronResult } from './phoneme-score';
import { ProsodyResult, analyzeProsody, sentenceEnds } from './prosody';
import { RecognitionService } from './recognition.service';
import { AsrResult, FreeContext, HESITATION_MARK, SpeakScore, markHesitations, scoreFree, scoreReading, speechTokens } from './speaking-score';
import { VocabService } from './vocab.service';

/** Kết quả chấm offline kèm dữ liệu nhận dạng (để AI dùng lại) */
interface OfflineGrade {
  r: AsrResult;
  score: SpeakScore;
}

/** Kết quả chấm: thành công, hoặc lý do không chấm được */
export type SpeakGrade = { ok: true; score: SpeakScore } | { ok: false; reason: 'no-audio' | 'asr' };

@Injectable({ providedIn: 'root' })
export class SpeakingService {
  private readonly asr = inject(AsrService);
  private readonly recog = inject(RecognitionService);
  private readonly vocab = inject(VocabService);
  private readonly ai = inject(AiService);
  private readonly exam = inject(ExamService);
  private readonly phoneme = inject(PhonemeService);
  private advanced: Promise<Set<string>> | null = null;

  /** Trạng thái mô hình nhận dạng offline (để hiện "Đang chuẩn bị bộ chấm...") */
  readonly asrState = this.asr.state;

  /** Lần chấm này có dùng AI không (để hiện "AI đang chấm...") */
  usesAi(): boolean {
    return this.ai.usable();
  }

  /** Tên nhà cung cấp AI đang dùng */
  readonly aiLabel = this.ai.label;

  /** Nạp sẵn mô hình nhận dạng offline (gọi khi mở câu hỏi nói) */
  warmUp(): void {
    if (this.asr.supported) void this.asr.load().catch(() => undefined);
    this.phoneme.warmUp();
  }

  /** Trạng thái mô hình âm vị (để hiện "Đang nạp mô hình phát âm...") */
  readonly phonemeState = this.phoneme.state;

  /** Chấm phát âm từng âm (bỏ qua nếu thiết bị không chạy được mô hình) */
  private async pron(r: AsrResult, words: string[]): Promise<PronResult | undefined> {
    if (!this.phoneme.supported || !r.pcm || !words.length) return undefined;
    try {
      const res = await this.phoneme.assess(r.pcm, words);
      return res;
    } catch (e) {
      console.warn('[phoneme] không chấm được phát âm từng âm:', e);
      return undefined;
    }
  }

  /** Đo ngữ điệu / trọng âm từ bản ghi (xử lý tín hiệu, nhanh) */
  private prosody(r: AsrResult, target = ''): ProsodyResult | undefined {
    if (!r.pcm || r.words.length < 4) return undefined;
    try {
      return analyzeProsody(r.pcm, r.words.filter((w) => w.word !== '[unk]' && w.word !== 'uh'), sentenceEnds(target));
    } catch {
      return undefined;
    }
  }

  /** Chấm bản ghi âm vừa dừng theo câu/đoạn mẫu */
  gradeReading(target: string, maxPoints?: number): Promise<SpeakGrade> {
    return this.grade(
      { mode: 'read', exam: maxPoints ? 'toeic' : 'practice', question: 'Read the text aloud.', target, maxPoints },
      async (blob) => {
        const r = markHesitations(await this.asr.transcribe(blob));
        return { r, score: scoreReading(target, r, maxPoints, await this.pron(r, speechTokens(target)), this.prosody(r, target)) };
      },
    );
  }

  /** Chấm bản ghi âm vừa dừng như một câu trả lời tự do */
  gradeFree(ctx: Omit<FreeContext, 'advanced'>): Promise<SpeakGrade> {
    return this.grade(
      { mode: 'free', exam: ctx.exam, question: ctx.question, sample: ctx.sample, maxPoints: ctx.maxPoints, seconds: ctx.seconds },
      async (blob) => {
        const [raw, advanced, cefr] = await Promise.all([this.asr.transcribe(blob), this.advancedWords(), this.exam.cefrIndex()]);
        // Tiếng ậm ừ ("ờm", "ừ") bị nhận nhầm thành từ tiếng Anh -> đổi thành từ đệm "uh"
        const r = markHesitations(raw);
        // Kiểm tra ngữ pháp trên lời nói đã nhận dạng (mỗi đoạn nói liền mạch coi như một câu)
        const sentences = r.segments.filter((x) => x.split(/\s+/).length >= 2).map((x) => x[0].toUpperCase() + x.slice(1).replace(/\bi\b/g, 'I') + '.');
        const grammar = (await this.exam.grammarCheck(sentences.join(' '))).filter((i) => i.kind === 'grammar');
        const pron = await this.pron(r, r.words.map((w) => w.word).filter((w) => w !== '[unk]' && w !== 'uh'));
        return { r, score: scoreFree(r, { ...ctx, advanced, cefr, grammar, pron, prosody: this.prosody(r), phoneAccuracy: pron && pron.scored >= 5 ? pron.accuracy : undefined }) };
      },
    );
  }

  /** Chấm offline; nếu bật AI thì chấm thêm bằng nhà cung cấp đã chọn, lỗi thì giữ kết quả offline kèm ghi chú */
  private async grade(ctx: AiSpeakContext, offline: (blob: Blob) => Promise<OfflineGrade>): Promise<SpeakGrade> {
    const blob = this.recog.lastBlob;
    if (!blob || blob.size < 1000) return { ok: false, reason: 'no-audio' };
    const provider = this.ai.usable() ? this.ai.provider() : null;
    const fail = (e: unknown) => `Không chấm được bằng ${this.ai.label()} (${(e as Error).message}) – đã dùng bộ chấm offline.`;
    let notice = '';
    // Gemini nghe trực tiếp âm thanh: không cần chạy bộ chấm offline trước
    if (provider === 'gemini') {
      try {
        return { ok: true, score: await this.ai.gemini.gradeSpeech(blob, ctx) };
      } catch (e) {
        notice = fail(e);
      }
    }
    let local: OfflineGrade;
    try {
      local = await offline(blob);
    } catch {
      return { ok: false, reason: 'asr' };
    }
    if (provider === 'cloudflare') {
      try {
        return { ok: true, score: await this.gradeCloudflare(ctx, local) };
      } catch (e) {
        notice = fail(e);
      }
    }
    return { ok: true, score: notice ? { ...local.score, notice } : local.score };
  }

  /** Cloudflare: Whisper chép lời (dự phòng: lời nhận dạng offline) → Llama chấm cùng số đo của bộ chấm offline */
  private async gradeCloudflare(ctx: AiSpeakContext, { r, score }: OfflineGrade): Promise<SpeakScore> {
    const cf = this.ai.cloudflare;
    let transcript = r.text.split(HESITATION_MARK).join('…').replace(/\s+/g, ' ').trim();
    if (r.pcm) transcript = (await cf.transcribe(r.pcm).catch(() => '')) || transcript;
    const ai = await cf.gradeSpeech(ctx, {
      transcript, wpm: score.wpm, pauses: score.pauses, seconds: r.duration,
      phoneAccuracy: score.pron?.accuracy, patterns: score.pron?.patterns,
      words: score.pron?.words.map((w) => ({ word: w.word, expected: w.expected, heard: w.heard, issues: w.issues })),
      intonation: score.prosody?.score, intonationNotes: score.prosody?.notes,
      fillers: r.words.filter((w) => w.word === 'uh').length,
      estimate: `${score.label} (${score.criteria.map((c) => `${c.label}: ${c.shown}`).join(', ')})`,
    });
    // Giữ phần đo chi tiết của máy (tô màu từng từ, phát âm từng âm, ngữ điệu) bên cạnh nhận xét của AI
    return { ...ai, words: score.words, wpm: score.wpm, pauses: score.pauses, pron: score.pron, prosody: score.prosody, unclear: ai.unclear.length ? ai.unclear : score.unclear };
  }

  /** Từ vựng nâng cao (kho IELTS, TOEIC, B2) để đánh giá độ phong phú từ vựng */
  private advancedWords(): Promise<Set<string>> {
    return (this.advanced ??= this.vocab
      .loadMany(['ielts', 'toeic', 'b2', 'c1'])
      .then((ts) => new Set(ts.flatMap((t) => t.words).filter((w) => !w.word.includes(' ')).map((w) => w.word.toLowerCase())))
      .catch(() => new Set<string>()));
  }
}
