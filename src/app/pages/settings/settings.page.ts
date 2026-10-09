/**
 * settings.page.ts – Trang "Settings": hồ sơ, mục tiêu, âm thanh, hiển thị và QUẢN LÝ DỮ LIỆU OFFLINE.
 *
 *  - Hồ sơ & mục tiêu: tên, mục tiêu XP mỗi ngày, mục tiêu học, band IELTS / điểm TOEIC mong muốn.
 *  - Âm thanh: tốc độ đọc, hiệu ứng, giọng dự phòng của thiết bị, nghe thử.
 *  - Hiển thị: cỡ chữ, giảm chuyển động, rung phản hồi.
 *  - Quản lý dữ liệu (#data): dung lượng gói dữ liệu đi kèm app (từ vựng, ảnh, âm thanh thu sẵn),
 *    nút "Tải toàn bộ dữ liệu" để trình duyệt lưu mọi tệp và dùng được khi không có mạng / tắt máy chủ,
 *    sao lưu – khôi phục – xóa tiến độ học.
 */
import { ChangeDetectionStrategy, Component, computed, inject, resource, signal } from '@angular/core';
import { DatePipe, DecimalPipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { OfflineService, formatBytes } from '../../core/offline.service';
import { ProgressService } from '../../core/progress.service';
import { SpeechService } from '../../core/speech.service';
import { HERO_PHOTOS } from '../../data/hero-photos';
import { TOPICS, totalWordCount } from '../../data/topics';
import { LearningGoal } from '../../models/progress.model';
import { IconComponent } from '../../theme/icon.component';

const GOALS: { id: LearningGoal; label: string }[] = [
  { id: 'ielts', label: 'Luyện thi IELTS' },
  { id: 'toeic', label: 'Luyện thi TOEIC' },
  { id: 'daily', label: 'Giao tiếp hằng ngày' },
  { id: 'work', label: 'Tiếng Anh công việc' },
  { id: 'kids', label: 'Người mới bắt đầu' },
];

@Component({
  selector: 'app-settings',
  imports: [FormsModule, RouterLink, DatePipe, DecimalPipe, IconComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <main class="page stack">
      <div class="crumbs"><app-icon name="school" /> <span>Settings</span></div>

      <header class="card page-head">
        <span class="ava">{{ initial() }}</span>
        <div class="ph-text">
          <h1>{{ settings().name }}</h1>
          <p>Cấp {{ level().level }} · {{ level().title }} · Mọi dữ liệu học được lưu trên thiết bị này.</p>
        </div>
        <a class="btn btn-soft" routerLink="/progress"><app-icon name="chart-bar" /> Xem tiến độ</a>
      </header>

      <div class="grid">
        <!-- Hồ sơ & mục tiêu -->
        <section class="card form" id="goal">
          <div class="card-head"><span class="tile-ic sm" style="--c: var(--blossom-600)"><app-icon name="target" /></span><h2>Hồ sơ &amp; mục tiêu</h2></div>
          <label>Tên hiển thị
            <input class="input" type="text" maxlength="20" [ngModel]="settings().name" (ngModelChange)="set({ name: $event || 'Học viên' })" />
          </label>
          <label>Mục tiêu học
            <select class="input" [ngModel]="settings().goal" (ngModelChange)="set({ goal: $event })">
              @for (g of goals; track g.id) { <option [ngValue]="g.id">{{ g.label }}</option> }
            </select>
          </label>
          <div class="two">
            <label>Band IELTS mục tiêu
              <select class="input" [ngModel]="settings().targetBand" (ngModelChange)="set({ targetBand: +$event })">
                @for (b of bands; track b) { <option [ngValue]="b">{{ b.toFixed(1) }}</option> }
              </select>
            </label>
            <label>Điểm TOEIC mục tiêu
              <select class="input" [ngModel]="settings().targetToeic" (ngModelChange)="set({ targetToeic: +$event })">
                @for (t of toeics; track t) { <option [ngValue]="t">{{ t }}</option> }
              </select>
            </label>
          </div>
          <label>Mục tiêu XP mỗi ngày
            <select class="input" [ngModel]="settings().dailyGoal" (ngModelChange)="set({ dailyGoal: +$event })">
              @for (g of xpGoals; track g) { <option [ngValue]="g">{{ g }} XP {{ g === 50 ? '(gợi ý)' : '' }}</option> }
            </select>
          </label>
          <a class="btn btn-soft btn-sm" routerLink="/onboarding"><app-icon name="map-2" /> Thiết lập lại lộ trình (3 bước)</a>
        </section>

        <!-- Âm thanh -->
        <section class="card form">
          <div class="card-head"><span class="tile-ic sm"><app-icon name="volume" /></span><h2>Âm thanh</h2></div>
          <p class="note good"><app-icon name="circle-check" /> {{ audioCount.value() ?? 0 | number }} câu và từ tiếng Anh đã được thu sẵn trên máy – nghe được khi không có Internet.</p>
          <label>Tốc độ đọc: <b>{{ settings().rate.toFixed(2) }}×</b>
            <input type="range" min="0.6" max="1.3" step="0.05" [ngModel]="settings().rate" (ngModelChange)="set({ rate: +$event })" />
          </label>
          <label class="check"><input type="checkbox" [ngModel]="settings().sfx" (ngModelChange)="set({ sfx: $event })" /> Hiệu ứng âm thanh khi trả lời</label>
          <label class="check"><input type="checkbox" [ngModel]="settings().bongTalks" (ngModelChange)="set({ bongTalks: $event })" /> Lời hướng dẫn, động viên bằng tiếng Việt</label>
          <label>Giọng dự phòng của thiết bị (chỉ dùng cho câu chưa có bản thu)
            <select class="input" [ngModel]="settings().enVoice" (ngModelChange)="set({ enVoice: $event })">
              <option value="">Tự chọn giọng phù hợp</option>
              @for (v of enVoices(); track v.name) { <option [value]="v.name">{{ v.name }}{{ v.localService ? ' · offline' : ' · cần mạng' }}</option> }
            </select>
          </label>
          <div class="row wrap">
            <button class="btn btn-soft btn-sm" type="button" (click)="testEn()"><app-icon name="player-play" /> Nghe thử tiếng Anh</button>
            <button class="btn btn-soft btn-sm" type="button" (click)="testVi()"><app-icon name="player-play" /> Nghe thử tiếng Việt</button>
          </div>
        </section>

        <!-- Hiển thị -->
        <section class="card form">
          <div class="card-head"><span class="tile-ic sm" style="--c: var(--grape-500)"><app-icon name="eye" /></span><h2>Hiển thị &amp; hỗ trợ</h2></div>
          <label>Cỡ chữ: <b>{{ (settings().fontScale * 100).toFixed(0) }}%</b>
            <input type="range" min="0.9" max="1.3" step="0.05" [ngModel]="settings().fontScale" (ngModelChange)="set({ fontScale: +$event })" />
          </label>
          <label class="check"><input type="checkbox" [ngModel]="settings().reduceMotion" (ngModelChange)="set({ reduceMotion: $event })" /> Giảm hiệu ứng chuyển động</label>
          <label class="check"><input type="checkbox" [ngModel]="settings().haptics" (ngModelChange)="set({ haptics: $event })" /> Rung nhẹ khi trả lời (điện thoại)</label>
        </section>

        <!-- Quản lý dữ liệu offline -->
        <section class="card form wide" id="data">
          <div class="card-head">
            <span class="tile-ic sm" style="--c: var(--leaf-600)"><app-icon name="database" /></span><h2>Quản lý dữ liệu offline</h2>
            <span class="tag" [class.green]="online()" [class.orange]="!online()"><app-icon [name]="online() ? 'wifi' : 'wifi-off'" /> {{ online() ? 'Máy đang có mạng' : 'Máy đang không có mạng' }}</span>
          </div>
          <p class="note good"><app-icon name="shield-check" />
            Toàn bộ nội dung học đã nằm trên máy: {{ totalWords | number }} từ vựng ({{ topicCount }} chủ đề), đề IELTS &amp; TOEIC, bài đọc, hội thoại, ngữ pháp
            cùng {{ packFiles | number }} tệp ảnh và âm thanh ({{ packSize }}). App không tải gì từ Internet khi học.
          </p>

          <table class="tbl">
            <thead><tr><th>Nhóm dữ liệu</th><th class="num">Số tệp</th><th class="num">Dung lượng</th></tr></thead>
            <tbody>
              <tr><td>Từ vựng, đề thi, bài đọc, hội thoại, ngữ pháp <small class="muted">(đóng gói trong mã ứng dụng)</small></td><td class="num">—</td><td class="num">≈ 2 MB</td></tr>
              @for (g of pack; track g.id) {
                <tr><td>{{ g.label }}</td><td class="num">{{ g.files | number }}</td><td class="num">{{ bytes(g.bytes) }}</td></tr>
              }
            </tbody>
            <tfoot><tr><td><b>Tổng cộng</b></td><td class="num"><b>{{ packFiles | number }}</b></td><td class="num"><b>{{ packSize }}</b></td></tr></tfoot>
          </table>

          <div class="dl">
            <div class="dlt">
              <b>Lưu toàn bộ dữ liệu vào trình duyệt</b>
              <small class="muted">
                @if (dl().running) { Đang tải {{ dl().done | number }}/{{ dl().total | number }} tệp... }
                @else if (readyAt()) { Đã tải đủ ngày {{ readyAt() | date: 'dd/MM/yyyy HH:mm' }}. App chạy được ngay cả khi tắt máy chủ và ngắt mạng. }
                @else { Tải một lần để dùng app như ứng dụng cài đặt: mở được kể cả khi không chạy máy chủ và không có mạng. }
                @if (dl().failed) { <span class="err"> {{ dl().failed }} tệp lỗi – bấm tải lại để thử tiếp.</span> }
              </small>
              <div class="bar" [class.blue]="dl().running"><i [style.width.%]="dl().running ? percent() : (readyAt() ? 100 : usedPercent())"></i></div>
              <small class="muted">Trình duyệt đang lưu {{ bytes(usage()) }}{{ quota() ? ' / hạn mức ' + bytes(quota()) : '' }} · {{ persisted() ? 'Dữ liệu được giữ lâu dài' : 'Chưa bật giữ dữ liệu lâu dài' }}</small>
            </div>
            <div class="dla">
              <button class="btn btn-primary" type="button" (click)="downloadAll()" [disabled]="dl().running">
                <app-icon name="cloud-download" /> {{ dl().running ? percent() + '%' : readyAt() ? 'Kiểm tra / tải lại' : 'Tải toàn bộ dữ liệu' }}
              </button>
              @if (!persisted()) { <button class="btn btn-ghost btn-sm" type="button" (click)="persist()">Giữ dữ liệu lâu dài</button> }
            </div>
          </div>
          @if (!cacheable) { <p class="note warn"><app-icon name="info-circle" /> Trình duyệt này không hỗ trợ lưu ứng dụng (service worker). Hãy chạy app bằng <b>chay-app.bat</b> hoặc <b>npm run app</b> – dữ liệu vẫn nằm sẵn trong thư mục dự án.</p> }

          <hr />
          <b>Tiến độ học tập</b>
          <p class="muted small">Tiến độ được lưu ngay trên thiết bị này (không gửi đi đâu cả). Nên sao lưu định kỳ ra tệp.</p>
          <div class="row wrap">
            <button class="btn btn-soft btn-sm" type="button" (click)="exportData()"><app-icon name="download" /> Sao lưu ra tệp</button>
            <label class="btn btn-soft btn-sm file"><app-icon name="upload" /> Khôi phục từ tệp
              <input type="file" accept="application/json,.json" (change)="importData($event)" hidden />
            </label>
            <button class="btn btn-danger btn-sm" type="button" (click)="resetAll()"><app-icon name="trash" /> Xóa hết, học lại từ đầu</button>
          </div>
          @if (message()) { <p class="note good"><app-icon name="info-circle" /> {{ message() }}</p> }
        </section>

        <!-- Giới thiệu -->
        <section class="card form wide about">
          <div class="card-head"><span class="tile-ic sm" style="--c: var(--slate-500)"><app-icon name="info-circle" /></span><h2>Giới thiệu &amp; nguồn tài nguyên</h2></div>
          <p class="muted small">English Master OFFLINE – học IELTS, TOEIC và từ vựng hoàn toàn không cần Internet. Band IELTS và điểm TOEIC trong app là ước tính để theo dõi tiến bộ, không thay thế điểm thi chính thức.</p>
          <ul class="muted small">
            <li>Âm thanh tiếng Anh: thu sẵn bằng giọng en-US-AriaNeural (nữ) và en-US-GuyNeural (nam); lời hướng dẫn tiếng Việt: vi-VN-HoaiMyNeural.</li>
            <li>Ảnh từ vựng và ảnh bìa: <b>Openverse</b> – chỉ ảnh giấy phép CC0 / Public Domain. Ảnh bìa: {{ credits }}.</li>
            <li>Bộ icon: <b>Tabler Icons</b> (MIT). Font chữ: <b>Inter</b> (SIL Open Font License). Phiên âm: CMU Pronouncing Dictionary.</li>
          </ul>
        </section>
      </div>
    </main>
  `,
  styles: `
    .ava { width: 56px; height: 56px; border-radius: 50%; display: grid; place-items: center; background: var(--primary); color: var(--white); font-weight: 700; font-size: var(--fs-2xl); flex: none; }
    .grid { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: var(--space-4); align-items: start; }
    .wide { grid-column: 1 / -1; }
    section { scroll-margin-top: calc(var(--topbar-h) + var(--space-4)); }
    .form { display: flex; flex-direction: column; gap: var(--space-3); }
    .form .card-head { margin-bottom: 0; }
    label { display: flex; flex-direction: column; gap: 6px; font-weight: 600; font-size: var(--fs-sm); color: var(--slate-700); }
    label.check { flex-direction: row; align-items: center; gap: var(--space-2); font-weight: 500; cursor: pointer; }
    input[type='checkbox'] { width: 18px; height: 18px; accent-color: var(--primary); }
    input[type='range'] { accent-color: var(--primary); width: 100%; }
    .two { display: grid; grid-template-columns: 1fr 1fr; gap: var(--space-3); }
    .wrap { flex-wrap: wrap; }
    .note { display: flex; gap: var(--space-2); align-items: flex-start; padding: var(--space-3); border-radius: var(--radius-md); font-size: var(--fs-sm); line-height: 1.55; }
    .note app-icon { width: 20px; height: 20px; margin-top: 1px; }
    .note.good { background: var(--good-soft); color: var(--leaf-800); }
    .note.warn { background: var(--warn-soft); color: var(--sun-700); }
    .num { text-align: right !important; white-space: nowrap; }
    .tbl tfoot td { border-top: 2px solid var(--line); }
    .dl { display: flex; align-items: center; gap: var(--space-4); padding: var(--space-4); border: 1px solid var(--sky-200); background: var(--primary-soft); border-radius: var(--radius-md); }
    .dlt { flex: 1; min-width: 0; display: flex; flex-direction: column; gap: 6px; }
    .dla { display: flex; flex-direction: column; gap: var(--space-2); align-items: stretch; }
    .err { color: var(--bad-dark); font-weight: 600; }
    hr { width: 100%; border: 0; border-top: 1px solid var(--line); margin: var(--space-2) 0; }
    .small { font-size: var(--fs-sm); }
    label.file { cursor: pointer; flex-direction: row; color: var(--primary-dark); }
    .about ul { margin: 0; padding-left: 20px; line-height: 1.7; }
    @media (max-width: 1200px) { .grid { grid-template-columns: minmax(0, 1fr); } }
    @media (max-width: 700px) { .dl { flex-direction: column; align-items: stretch; } }
  `,
})
export class SettingsPage {
  private readonly progress = inject(ProgressService);
  private readonly speech = inject(SpeechService);
  private readonly offline = inject(OfflineService);

  protected readonly goals = GOALS;
  protected readonly xpGoals = [30, 50, 80, 100, 150];
  protected readonly bands = [5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9];
  protected readonly toeics = [450, 550, 600, 650, 700, 750, 800, 850, 900, 950, 990];
  protected readonly totalWords = totalWordCount();
  protected readonly topicCount = TOPICS.length;
  protected readonly credits = Object.values(HERO_PHOTOS).map((p) => p.creator).filter((c, i, a) => c !== 'Unknown' && a.indexOf(c) === i).join(', ') || 'tác giả ẩn danh';

  protected readonly settings = this.progress.settings;
  protected readonly level = this.progress.level;
  protected readonly initial = computed(() => (this.settings().name.trim()[0] ?? 'H').toUpperCase());
  protected readonly message = signal('');
  protected readonly enVoices = computed(() => this.speech.voicesFor('en'));
  protected readonly audioCount = resource({ loader: () => this.speech.recordedCount() });

  // --- gói dữ liệu offline ---
  protected readonly pack = this.offline.pack;
  protected readonly packSize = formatBytes(this.offline.packBytes);
  protected readonly packFiles = this.offline.packFiles;
  protected readonly online = this.offline.online;
  protected readonly usage = this.offline.usage;
  protected readonly quota = this.offline.quota;
  protected readonly persisted = this.offline.persisted;
  protected readonly readyAt = this.offline.readyAt;
  protected readonly dl = this.offline.download;
  protected readonly percent = this.offline.downloadPercent;
  protected readonly cacheable = this.offline.cacheable;
  protected readonly bytes = formatBytes;
  protected readonly usedPercent = computed(() => (this.offline.packBytes ? Math.min(100, (this.usage() / this.offline.packBytes) * 100) : 0));

  protected set(patch: Parameters<ProgressService['updateSettings']>[0]): void {
    this.progress.updateSettings(patch);
  }

  protected testVi(): void {
    void this.speech.bong('test');
  }

  protected testEn(): void {
    void this.speech.speakEn('Hello! Welcome to English Master. Let us learn English together!');
  }

  protected downloadAll(): void {
    void this.offline.downloadAll();
  }

  protected persist(): void {
    void this.offline.persist().then((ok) => this.message.set(ok ? 'Trình duyệt sẽ giữ dữ liệu của app lâu dài.' : 'Trình duyệt chưa cho phép giữ dữ liệu lâu dài (hãy cài app hoặc đánh dấu trang).'));
  }

  /** Tải xuống file sao lưu tiến độ */
  protected exportData(): void {
    const blob = new Blob([this.progress.exportJson()], { type: 'application/json' });
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = `english-master-${new Date().toISOString().slice(0, 10)}.json`;
    a.click();
    URL.revokeObjectURL(a.href);
    this.message.set('Đã tải tệp sao lưu.');
  }

  /** Khôi phục tiến độ từ file sao lưu */
  protected async importData(ev: Event): Promise<void> {
    const file = (ev.target as HTMLInputElement).files?.[0];
    if (!file) return;
    const ok = this.progress.importJson(await file.text());
    this.message.set(ok ? 'Đã khôi phục dữ liệu thành công!' : 'Tệp không hợp lệ, không thể khôi phục.');
  }

  protected resetAll(): void {
    if (window.confirm('Xóa toàn bộ tiến độ học? Việc này không thể hoàn tác.')) {
      this.progress.reset();
      this.message.set('Đã xóa tiến độ. Dữ liệu bài học vẫn được giữ nguyên.');
    }
  }
}
