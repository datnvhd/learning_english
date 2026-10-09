/**
 * ============================================================================
 *  speech.service.ts – Giọng đọc (hoạt động hoàn toàn OFFLINE)
 * ============================================================================
 *  Tiếng Anh: mọi từ vựng, câu ví dụ, hội thoại, bài nghe luyện thi đã được THU SẴN thành file mp3
 *  (public/assets/audio, sinh bởi `npm run build:audio`) và đóng gói cùng app. Khi cần đọc một câu,
 *  dịch vụ tìm file thu sẵn theo mã băm của câu (core/audio-key.ts) và phát file đó; chỉ khi câu
 *  không có file (ví dụ nội dung mới thêm) mới dùng Web Speech API của trình duyệt làm dự phòng.
 *
 *  Bông là bé gái người Việt nên:
 *   - Lời Bông nói bằng tiếng Việt (khen, động viên, chào) là các file âm thanh THU SẴN bằng
 *     giọng nữ Việt Nam (vi-VN-HoaiMyNeural), đóng gói trong public/assets/voice và phát
 *     nhanh hơn một chút (playbackRate) để nghe trẻ con hơn. Vì là file có sẵn nên Bông nói
 *     được cả khi không có internet và máy chưa cài giọng tiếng Việt.
 *     (Tạo lại bằng: npm run build:voice)
 *   - Nội dung tiếng Anh: đọc bằng giọng tiếng Anh nữ của thiết bị, nâng cao độ nhẹ và đọc
 *     chậm hơn một chút để dễ nghe cho người mới học.
 *  Người dùng có thể chỉnh cao độ/tốc độ/giọng trong màn hình "Của tôi" > Cài đặt.
 */
import { Injectable, inject, signal } from '@angular/core';
import { BONG_LINES, BongLineKey } from '../data/bong-lines';
import { AudioVoice, audioKey, audioPath } from './audio-key';
import { ProgressService } from './progress.service';

/** Ngôn ngữ đọc */
export type SpeechLang = 'en' | 'vi';

/** Từ khóa nhận diện giọng NAM để loại bỏ khi tự chọn giọng */
const MALE_HINTS = /(male(?!.*female)|\bdavid\b|\bmark\b|\bguy\b|\bnam ?minh\b|\bnammin|\bgeorge\b|\bjames\b|\bricha?rd\b|\balex\b|\bdaniel\b|\bfred\b|\bthomas\b|\bwilliam\b|\bryan\b|\bbrian\b|\bandrew\b|\bsteffan\b|\bchristopher\b|\beric\b|\broger\b)/i;

@Injectable({ providedIn: 'root' })
export class SpeechService {
  private readonly progress = inject(ProgressService);

  /** Trình duyệt có hỗ trợ đọc giọng không */
  readonly supported = typeof window !== 'undefined' && 'speechSynthesis' in window;
  /** Danh sách giọng đọc có trên máy (tự cập nhật khi hệ thống nạp xong) */
  readonly voices = signal<SpeechSynthesisVoice[]>([]);
  /** Đang đọc hay không (để hiển thị hiệu ứng) */
  readonly speaking = signal(false);

  /** File âm thanh Bông đang phát (nếu có) */
  private clip: HTMLAudioElement | null = null;

  /** Mã phiên đọc: tăng lên mỗi khi hủy để bỏ qua các lời gọi cũ */
  private token = 0;

  /** Tập mã các file âm thanh tiếng Anh thu sẵn (nạp lười một lần) */
  private audioKeys: Promise<Set<string>> | null = null;

  constructor() {
    if (!this.supported) return;
    const load = () => this.voices.set(window.speechSynthesis.getVoices());
    load();
    // Chrome nạp danh sách giọng bất đồng bộ nên phải lắng nghe sự kiện này
    window.speechSynthesis.addEventListener?.('voiceschanged', load);
  }

  // ---------------------------------------------------------------------
  //  CHỌN GIỌNG
  // ---------------------------------------------------------------------

  /** Danh sách giọng theo ngôn ngữ (dùng cho ô chọn giọng trong Cài đặt) */
  voicesFor(lang: SpeechLang): SpeechSynthesisVoice[] {
    return this.voices().filter((v) => v.lang.toLowerCase().startsWith(lang));
  }

  /** Tự chọn giọng phù hợp nhất (ưu tiên giọng NỮ; khi mất mạng ưu tiên giọng cài sẵn trên máy) */
  pickVoice(lang: SpeechLang): SpeechSynthesisVoice | undefined {
    const wantedName = lang === 'vi' ? this.progress.settings().viVoice : this.progress.settings().enVoice;
    const all = this.voicesFor(lang);
    if (!all.length) return undefined;
    const manual = wantedName ? all.find((v) => v.name === wantedName) : undefined;
    if (manual) return manual;

    const offline = typeof navigator !== 'undefined' && navigator.onLine === false;
    const scored = all.map((v) => ({ v, s: this.scoreVoice(v, lang, offline) }));
    scored.sort((a, b) => b.s - a.s);
    return scored[0].v;
  }

  /** Chấm điểm một giọng: càng cao càng phù hợp với "bé gái" */
  private scoreVoice(v: SpeechSynthesisVoice, lang: SpeechLang, offline: boolean): number {
    let s = 0;
    const n = v.name;
    if (MALE_HINTS.test(n)) s -= 100;
    if (/female|woman|girl/i.test(n)) s += 40;
    if (lang === 'vi') {
      if (/hoai\s?my|hoàimy/i.test(n)) s += 100; // Microsoft HoaiMy (nữ)
      if (/google/i.test(n)) s += 60; // Google Tiếng Việt (nữ)
      if (/linh|lan|mai|thu/i.test(n)) s += 50;
      if (/\ban\b/i.test(n)) s += 30;
    } else {
      if (/aria|jenny|sonia|libby/i.test(n)) s += 90; // giọng nữ tự nhiên của Microsoft
      if (/zira|samantha|karen|susan|hazel|victoria|allison|ava|serena|tessa|moira/i.test(n)) s += 70;
      if (/google/i.test(n)) s += 40;
      if (/en[-_]us/i.test(v.lang)) s += 10;
    }
    // Khi offline: giọng "online" sẽ không đọc được -> ưu tiên giọng cài sẵn (localService)
    if (offline) s += v.localService ? 500 : -500;
    else if (v.localService) s += 5;
    return s;
  }

  /** Bông có thể đọc tiếng Việt trên máy này không */
  get hasVietnameseVoice(): boolean {
    return this.voicesFor('vi').length > 0;
  }

  // ---------------------------------------------------------------------
  //  ĐỌC
  // ---------------------------------------------------------------------

  /** Đọc một đoạn tiếng Anh. `slow` = đọc chậm hơn để nghe rõ từng âm */
  speakEn(text: string, opts: { slow?: boolean; who?: 'A' | 'B' } = {}, keepQueue = false): Promise<void> {
    const s = this.progress.settings();
    // Tiếng Anh: nâng cao độ nhẹ hơn tiếng Việt để vẫn nghe rõ phát âm
    let pitch = 1 + (s.pitch - 1) * 0.7;
    // Hội thoại: người nói B có cao độ thấp hơn một chút để phân biệt với A
    if (opts.who === 'B') pitch = Math.max(0.8, pitch - 0.35);
    const rate = s.rate * (opts.slow ? 0.6 : 1);
    if (!text.trim()) return Promise.resolve();
    if (!keepQueue) this.cancel();
    const myToken = this.token;
    const voice: AudioVoice = opts.who === 'B' ? 'm' : 'f';
    // Tốc độ phát file thu sẵn: theo cài đặt, chậm hơn khi bấm "nghe chậm"
    const clipRate = Math.min(1.5, Math.max(0.5, s.rate * (opts.slow ? 0.7 : 1)));
    return this.clipsFor(text, voice).then(async (paths) => {
      if (myToken !== this.token) return;
      if (!paths) return this.speak(text, 'en', pitch, rate, true);
      for (const path of paths) {
        if (myToken !== this.token) return;
        const ok = await this.playClip(path, clipRate, myToken);
        if (!ok && myToken === this.token) return this.speak(text, 'en', pitch, rate, true);
      }
    });
  }

  /** Số file âm thanh tiếng Anh thu sẵn có trong app (0 nếu chưa chạy build:audio) */
  async recordedCount(): Promise<number> {
    return (await this.loadAudioKeys()).size;
  }

  /** Nạp tập mã file thu sẵn */
  private loadAudioKeys(): Promise<Set<string>> {
    return (this.audioKeys ??= import('../data/audio-index').then((m) => {
      const set = new Set<string>();
      for (let i = 0; i + 16 <= m.AUDIO_KEYS.length; i += 16) set.add(m.AUDIO_KEYS.slice(i, i + 16));
      return set;
    }).catch(() => new Set<string>()));
  }

  /**
   * Tìm (các) file thu sẵn cho một câu. Câu dạng "A. ..." (lựa chọn của TOEIC Part 1–2) được ghép từ
   * file đọc chữ cái + file đọc nội dung. Trả về null nếu không có file -> dùng giọng của thiết bị.
   */
  private async clipsFor(text: string, voice: AudioVoice): Promise<string[] | null> {
    if (typeof Audio === 'undefined') return null;
    const keys = await this.loadAudioKeys();
    if (!keys.size) return null;
    const whole = audioKey(text, voice);
    if (keys.has(whole)) return [audioPath(whole)];
    const m = /^([A-D])\.\s+(.+)$/s.exec(text.trim());
    if (m) {
      const letter = audioKey(m[1], voice);
      const rest = audioKey(m[2], voice);
      if (keys.has(letter) && keys.has(rest)) return [audioPath(letter), audioPath(rest)];
    }
    return null;
  }

  /** Phát một file âm thanh; trả về false nếu không phát được (để chuyển sang giọng của thiết bị) */
  private playClip(path: string, rate: number, myToken: number): Promise<boolean> {
    return new Promise<boolean>((resolve) => {
      const a = new Audio(path);
      a.preservesPitch = true;
      a.playbackRate = rate;
      const end = (ok: boolean) => {
        if (myToken === this.token) this.speaking.set(false);
        resolve(ok);
      };
      a.onended = () => end(true);
      a.onerror = () => end(false);
      // Bị hủy giữa chừng (cancel() gọi pause) -> coi như đã xong để không đọc lại bằng giọng khác
      a.onpause = () => { if (!a.ended) end(true); };
      this.clip = a;
      this.speaking.set(true);
      a.play().catch(() => end(false));
    });
  }

  /**
   * Bông nói một câu tiếng Việt cố định bằng file âm thanh giọng bé gái Việt Nam.
   * Nếu không phát được file thì thử đọc bằng giọng tiếng Việt của thiết bị (nếu có).
   * Bỏ qua nếu người dùng tắt "Bông nói tiếng Việt".
   */
  bong(key: BongLineKey): Promise<void> {
    const s = this.progress.settings();
    if (!s.bongTalks || typeof Audio === 'undefined') return Promise.resolve();
    this.cancel();
    return new Promise<void>((resolve) => {
      const fallback = () => void this.speak(BONG_LINES[key], 'vi', s.pitch, s.rate + 0.1).then(resolve);
      const a = new Audio(`assets/voice/${key}.mp3`);
      // Tăng tốc độ phát => cao độ tăng theo, giọng nghe trẻ con hơn (pitch 1.5 => x1.125)
      a.preservesPitch = false;
      a.playbackRate = 1 + (s.pitch - 1) * 0.25;
      a.onended = () => resolve();
      a.onerror = fallback;
      this.clip = a;
      a.play().catch(fallback);
    });
  }

  /** Đọc lần lượt các dòng hội thoại (A và B dùng cao độ khác nhau) */
  async speakDialogue(lines: { who: 'A' | 'B'; text: string }[]): Promise<void> {
    this.cancel();
    const myToken = this.token;
    for (const line of lines) {
      if (myToken !== this.token) return; // đã bị hủy giữa chừng
      await this.speakEn(line.text, { who: line.who }, true);
    }
  }

  /**
   * Đọc lần lượt nhiều đoạn, nghỉ `gapMs` giữa các đoạn – dùng cho TOEIC Part 1/2
   * (giám khảo đọc câu hỏi rồi lần lượt các lựa chọn A, B, C, D).
   */
  async speakSequence(parts: string[], opts: { slow?: boolean; gapMs?: number } = {}): Promise<void> {
    this.cancel();
    const myToken = this.token;
    for (const [i, part] of parts.entries()) {
      if (myToken !== this.token) return; // đã bị hủy giữa chừng
      if (i > 0) await new Promise((r) => setTimeout(r, opts.gapMs ?? 650));
      if (myToken !== this.token) return;
      await this.speakEn(part, { slow: opts.slow }, true);
    }
  }

  /** Dừng mọi âm thanh đang đọc */
  cancel(): void {
    this.token++;
    this.clip?.pause();
    this.clip = null;
    if (this.supported) window.speechSynthesis.cancel();
    this.speaking.set(false);
  }

  /**
   * Hàm đọc nền tảng.
   * @param keepQueue true = không hủy lượt đọc đang chạy (dùng khi đọc nối tiếp hội thoại)
   */
  private speak(text: string, lang: SpeechLang, pitch: number, rate: number, keepQueue = false): Promise<void> {
    if (!this.supported || !text.trim()) return Promise.resolve();
    if (!keepQueue) this.cancel();
    const myToken = this.token;
    return new Promise<void>((resolve) => {
      const u = new SpeechSynthesisUtterance(text);
      u.lang = lang === 'vi' ? 'vi-VN' : 'en-US';
      const voice = this.pickVoice(lang);
      if (voice) {
        u.voice = voice;
        u.lang = voice.lang;
      }
      u.pitch = Math.min(2, Math.max(0.1, pitch));
      u.rate = Math.min(1.5, Math.max(0.4, rate));
      const done = () => {
        if (myToken === this.token) this.speaking.set(false);
        resolve();
      };
      u.onstart = () => this.speaking.set(true);
      u.onend = done;
      u.onerror = done;
      // Một số trình duyệt bỏ qua speak() nếu gọi ngay sau cancel() -> trì hoãn rất ngắn
      setTimeout(() => window.speechSynthesis.speak(u), keepQueue ? 0 : 40);
    });
  }
}
