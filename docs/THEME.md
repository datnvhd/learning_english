# Theme "English Master" – hệ thống thiết kế duy nhất của app

App chỉ có **một theme**. Mọi màn hình mới phải dùng các token dưới đây, không tự đặt màu, cỡ chữ hay bo góc riêng.

- **Nguồn sự thật duy nhất:** `src/app/theme/theme.ts`.
- **Cách áp dụng:** `applyTheme()` trong `main.ts` ghi toàn bộ token thành biến CSS trên `:root`.
- **Kiểm soát:** `npm run check:theme` chạy tự động trước mỗi lần `npm run build` và báo lỗi nếu có mã màu viết cứng. Dùng `--fix` để tự đổi sang token gần nhất.

## 1. Ý tưởng

Theo bộ ảnh thiết kế "English Master OFFLINE": bảng điều khiển học tập gọn gàng cho người luyện IELTS/TOEIC.
Nền xám xanh rất nhạt, **thẻ trắng viền mảnh**, xanh dương đậm cho điều hướng và hành động chính, mỗi khu vực có một màu nhấn nhẹ.

## 2. Bố cục khung

- **Topbar** (`--topbar-h` 62px, dính trên cùng): logo + nhãn OFFLINE, ô tìm kiếm, "Offline mode", chuỗi ngày, thời gian học hôm nay, chuông nhắc việc, học viên.
- **Sidebar** (`--sidebar-w` 248px): 10 mục điều hướng, mục đang chọn nền xanh chữ trắng; phía dưới là thẻ "Hoàn toàn Offline" (dung lượng dữ liệu, nút Quản lý dữ liệu). Dưới 980px sidebar thành ngăn kéo mở bằng nút ☰.
- **Nội dung** (`.page`, tối đa 1480px): thường gồm đường dẫn (`.crumbs`), thẻ đầu trang (`.page-head`), rồi lưới `.cols` = cột chính + cột phụ 340px bên phải (tự xếp một cột dưới 1180px).

## 3. Màu sắc

| Họ màu | Vai trò | Token chính |
|---|---|---|
| `sky` | Điều hướng, nút chính, liên kết, TOEIC, Reading | `--primary` = sky-500, `--primary-dark`, `--primary-soft`, `--toeic` |
| `blossom` | IELTS, Writing | `--ielts` = blossom-600 |
| `leaf` | Đúng / hoàn thành / tiến độ, Speaking | `--good`, `--good-dark`, `--good-soft` |
| `coral` | Sai / lỗi / đồng hồ | `--bad`, `--bad-dark`, `--bad-soft` |
| `grape` | Từ vựng, Practice, Listening, nhãn phụ | `--purple` |
| `tangerine` | Chuỗi ngày, ôn tập, Mock Test | – |
| `sun` | Cảnh báo, phần thưởng, "gần đúng" | `--warn`, `--accent` |
| `sand`, `slate` | Trung tính: chữ, đường kẻ, nền phụ | `--ink`, `--ink-soft`, `--ink-mute`, `--line`, `--bg` |

Mỗi họ có sắc độ 50 → 800 (`var(--leaf-300)`...). Tên họ màu được giữ từ theme cũ để mọi component tiếp tục dùng được.

**Màu cố định cho từng kỹ năng** (`--skill-*`): Listening = tím nhạt, Reading = xanh dương, Writing = hồng đỏ, Speaking = xanh lá, Từ vựng = tím.

**Ý nghĩa màu luôn nhất quán:** xanh lá = đúng, đỏ = sai, vàng = gần đúng / cảnh báo, xanh dương = hành động chính.

## 4. Chữ

- **Font:** Inter cho cả tiêu đề và nội dung (400/500/600/700/800, có bộ ký tự tiếng Việt, đóng gói offline qua `@fontsource/inter`).
- Chữ thường 500, nhãn/nút 600, tiêu đề và số liệu 700.
- **Cỡ chữ:** gốc 15px; `--fs-xs` 0.8rem · `sm` 0.875 · `md` 1 · `lg` 1.125 · `xl` 1.3 · `2xl` 1.55 · `3xl` 1.9 · `display` 2.4.
- Người dùng chỉnh được toàn bộ cỡ chữ 90–130% trong *Settings › Hiển thị* (`--font-scale`).

## 5. Khoảng cách, bo góc, bóng

- **Khoảng cách:** lưới 4px, `--space-1..10`.
- **Bo góc:** `--radius-sm` 8 · `md` 12 · `lg` 16 (thẻ) · `xl` 20 · `pill`.
- **Bóng đổ:** trung tính, rất nhẹ (`--shadow-sm` cho thẻ, `--shadow-md` khi rê chuột, `--shadow-lg` cho lớp nổi). Thẻ tách khỏi nền chủ yếu bằng **viền 1px** `--line`.
- Nút phẳng, bo 12px, cao tối thiểu `--touch-min` 40px (nút chính lớn `--touch-primary` 46px). Không dùng gờ nổi kiểu "nút 3D".

## 6. Tương tác và khả năng tiếp cận

- **Phản hồi tức thì:** âm thanh đúng/sai, rung nhẹ (tắt được), toast xác nhận thao tác, pháo giấy khi đạt điểm cao.
- **Chuyển động:** `--motion-fast` 120ms, `base` 220ms, `slow` 360ms. Tôn trọng `prefers-reduced-motion` và công tắc "Giảm hiệu ứng" trong Settings.
- **Focus bàn phím:** viền xanh 2px (`:focus-visible`).
- **Icon:** chỉ trang trí nên `aria-hidden`; nút chỉ có icon thì luôn có `aria-label`.
- Trạng thái (đúng/sai, đã học...) luôn có chữ hoặc icon đi kèm, không chỉ dựa vào màu.

## 7. Icon và hình ảnh

- **Icon giao diện:** bộ **Tabler Icons** (MIT), nét 2px, màu theo `currentColor`. Dùng `<app-icon name="..." />`. Thêm icon bằng cách sửa `tools/build-icons.mjs` rồi chạy `npm run build:icons`.
- **Ô icon** `.tile-ic` (`.sm` / `.lg`): ô vuông bo góc nền nhạt, màu qua biến `--c`.
- **Ảnh bìa:** ảnh chụp CC0 trong `public/assets/art/photo-*.jpg` (`npm run fetch:hero`, danh mục ở `data/hero-photos.ts`).
- **Ảnh từ vựng:** Openverse, chỉ giấy phép CC0/Public Domain (`npm run fetch:images`). Nguồn ghi ở `CREDITS.md`.
- **Emoji:** chỉ dùng cho nội dung (biểu tượng bài học, huy hiệu), không dùng cho điều khiển.

## 8. Thành phần dùng chung

| Lớp / component | Dùng cho |
|---|---|
| `.page`, `.cols`, `.side`, `.stack`, `.grid-2/3/4` | Bố cục trang |
| `.crumbs`, `.page-head`, `.tile-ic` | Đường dẫn và thẻ đầu trang |
| `.card`, `.card.flush`, `.card.interactive`, `.card-head`, `.link-more` | Khối nội dung |
| `.btn-primary / -soft / -ghost / -good / -danger`, `.btn-sm / -lg / -block`, `.icon-btn` | Nút |
| `.tabs` + `.tab` | Tab gạch chân |
| `.chip`, `.chips`, `.select`, `.input` | Bộ lọc, ô nhập |
| `.tag(.blue/.red/.green/.amber/.purple/.orange)` | Nhãn màu |
| `.bar(.blue/.gold/.red/.purple)`, `.stat`, `.tbl`, `.list-row`, `.empty` | Tiến độ, số liệu, bảng, danh sách |
| `<app-icon>`, `<app-ring>`, `<app-donut>`, `<app-bong>` (ô trợ lý), `<app-confetti>` | Icon, vòng tiến độ, biểu đồ vành, lời nhắn, pháo giấy |
| `UxService.toast()`, `UxService.haptic()`, `UxService.openWord()` | Thông báo, rung, bảng chi tiết từ |

## 9. Quy tắc khi thêm màn hình mới

1. Bố cục bằng `.page` + `.stack`; trang có cột phụ dùng `.cols` + `<aside class="side">`.
2. Đầu trang: `.crumbs` rồi `<header class="card page-head">` với `.tile-ic.lg`, tiêu đề, mô tả, số liệu, nút chính.
3. Chỉ dùng `var(--...)` cho màu, chữ, khoảng cách, bo góc, bóng, chuyển động.
4. Code JS/canvas (biểu đồ, pháo giấy) cần màu thật thì lấy từ `PALETTE` / `THEME` trong `theme.ts`.
5. Thêm mục vào sidebar: sửa mảng `NAV` trong `src/app/app.ts` (kèm biểu thức `match` cho các đường dẫn con).
6. Chạy `npm run check:theme` (tự chạy khi build).
