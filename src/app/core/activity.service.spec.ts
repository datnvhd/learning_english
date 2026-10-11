/**
 * activity.service.spec.ts – Kiểm thử đếm thời gian học: treo máy / ẩn tab không được tính.
 */
import { TestBed } from '@angular/core/testing';
import { afterEach, beforeEach, describe, expect, it } from 'vitest';
import { ActivityService, IDLE_SECONDS, TICK_SECONDS } from './activity.service';
import { ProgressService } from './progress.service';
import { SpeechService } from './speech.service';

/** Giả lập trạng thái hiển thị của tab */
const setVisible = (v: boolean) =>
  Object.defineProperty(document, 'visibilityState', { value: v ? 'visible' : 'hidden', configurable: true });

describe('ActivityService', () => {
  let svc: ActivityService;
  let progress: ProgressService;
  const T0 = 1_000_000;
  /** Chạy các nhịp kiểm tra từ giây `from` tới giây `to` (tính từ T0) rồi ghi xuống nhật ký */
  const run = (from: number, to: number) => {
    for (let s = from + TICK_SECONDS; s <= to; s += TICK_SECONDS) svc.tick(T0 + s * 1000);
    svc.flush();
  };
  const logged = () => progress.secondsInLastDays(1);

  beforeEach(() => {
    localStorage.clear();
    setVisible(true);
    TestBed.resetTestingModule();
    svc = TestBed.inject(ActivityService);
    progress = TestBed.inject(ProgressService);
    svc.touch(T0);
  });

  afterEach(() => setVisible(true));

  it('đang thao tác thì thời gian được tính đủ', () => {
    for (let s = 0; s < 300; s += 30) {
      svc.touch(T0 + s * 1000);
      run(s, s + 30);
    }
    expect(logged()).toBe(300);
  });

  it('treo máy thì chỉ tính tới hết khoảng chờ, sau đó dừng', () => {
    run(0, 3600);
    expect(logged()).toBe(IDLE_SECONDS - TICK_SECONDS);
  });

  it('thao tác lại sau khi treo máy thì tính tiếp', () => {
    run(0, 3600);
    const before = logged();
    svc.touch(T0 + 3600_000);
    run(3600, 3630);
    expect(logged()).toBe(before + 30);
  });

  it('tab bị ẩn thì không tính dù vừa thao tác', () => {
    setVisible(false);
    run(0, 60);
    expect(logged()).toBe(0);
  });

  it('đang nghe bài nghe thì vẫn tính dù không chạm vào máy; tạm dừng thì không', () => {
    const speech = TestBed.inject(SpeechService);
    speech.busy.set(true);
    run(1000, 1060);
    expect(logged()).toBe(60);
    speech.paused.set(true);
    run(1060, 1120);
    expect(logged()).toBe(60);
  });
});
