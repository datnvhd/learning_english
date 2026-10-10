/**
 * speech.service.spec.ts – Kiểm thử trình phát bài nghe: phát, tạm dừng, phát tiếp, đọc chậm, hủy.
 * File mp3 thật được thay bằng một lớp Audio giả để kiểm tra đúng trình tự phát.
 */
import { TestBed } from '@angular/core/testing';
import { afterEach, beforeEach, describe, expect, it } from 'vitest';
import { ProgressService } from './progress.service';
import { SpeechService } from './speech.service';

/** Audio giả: ghi lại các file được tạo, tự điều khiển lúc "phát xong" */
class FakeAudio {
  static all: FakeAudio[] = [];
  playbackRate = 1;
  defaultPlaybackRate = 1;
  preservesPitch = true;
  playing = false;
  onended: (() => void) | null = null;
  onerror: (() => void) | null = null;
  constructor(readonly src: string) { FakeAudio.all.push(this); }
  play(): Promise<void> { this.playing = true; return Promise.resolve(); }
  pause(): void { this.playing = false; }
  finish(): void { this.playing = false; this.onended?.(); }
}

/** Chờ các promise nội bộ chạy xong */
const tick = () => new Promise((r) => setTimeout(r, 5));
const last = () => FakeAudio.all[FakeAudio.all.length - 1];

/** Hai câu chắc chắn có file thu sẵn (lời dẫn TOEIC Part 1 và chữ cái lựa chọn) */
const LINES = [
  { who: 'A' as const, text: 'Look at the picture.' },
  { who: 'A' as const, text: 'A' },
];

describe('SpeechService – trình phát bài nghe', () => {
  let svc: SpeechService;
  let rate: number;
  const realAudio = globalThis.Audio;

  beforeEach(async () => {
    localStorage.clear();
    FakeAudio.all = [];
    (globalThis as { Audio: unknown }).Audio = FakeAudio;
    TestBed.resetTestingModule();
    svc = TestBed.inject(SpeechService);
    rate = TestBed.inject(ProgressService).settings().rate;
    // Nạp trước danh mục file thu sẵn để các bước chờ trong test không phụ thuộc tốc độ nạp
    expect(await svc.recordedCount()).toBeGreaterThan(0);
  });

  afterEach(() => {
    svc.cancel();
    (globalThis as { Audio: unknown }).Audio = realAudio;
  });

  it('phát lần lượt từng câu và báo đang phát cho tới khi hết bài', async () => {
    const done = svc.speakDialogue(LINES);
    await tick();
    expect(FakeAudio.all.length).toBe(1);
    expect(svc.busy()).toBe(true);
    last().finish();
    await tick();
    expect(FakeAudio.all.length).toBe(2);
    expect(svc.busy()).toBe(true);
    last().finish();
    await done;
    expect(svc.busy()).toBe(false);
  });

  it('tạm dừng giữ nguyên file đang phát, phát tiếp thì chạy lại đúng file đó', async () => {
    void svc.speakDialogue(LINES);
    await tick();
    const clip = last();
    svc.pause();
    expect(clip.playing).toBe(false);
    expect(svc.paused()).toBe(true);
    expect(svc.busy()).toBe(true);
    svc.resume();
    expect(clip.playing).toBe(true);
    expect(svc.paused()).toBe(false);
    expect(FakeAudio.all.length).toBe(1);
  });

  it('tạm dừng lúc nghỉ giữa hai câu thì câu sau chỉ phát khi bấm phát tiếp', async () => {
    void svc.speakDialogue(LINES);
    await tick();
    svc.pause();
    last().finish();
    await tick();
    expect(FakeAudio.all.length).toBe(1);
    svc.resume();
    await tick();
    expect(FakeAudio.all.length).toBe(2);
    expect(last().playing).toBe(true);
  });

  it('đọc chậm áp dụng cho cả hội thoại và đổi được ngay khi đang phát', async () => {
    void svc.speakDialogue(LINES, { slow: true });
    await tick();
    expect(last().playbackRate).toBeCloseTo(rate * 0.7);
    svc.setSlow(false);
    expect(last().playbackRate).toBeCloseTo(rate);
    svc.setSlow(true);
    last().finish();
    await tick();
    expect(last().playbackRate).toBeCloseTo(rate * 0.7);
  });

  it('hủy thì dừng hẳn, không phát câu kế tiếp', async () => {
    const done = svc.speakDialogue(LINES);
    await tick();
    svc.cancel();
    await done;
    await tick();
    expect(FakeAudio.all.length).toBe(1);
    expect(last().playing).toBe(false);
    expect(svc.busy()).toBe(false);
  });
});
