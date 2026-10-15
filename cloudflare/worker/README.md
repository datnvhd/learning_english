# Worker chấm điểm bằng Cloudflare Workers AI

App gọi Worker này để chấm Speaking / Writing bằng AI:

- **Whisper large v3 turbo** chép lời bài nói (chính xác hơn bộ nhận dạng offline).
- **Llama 3.3 70B** đóng vai giám khảo IELTS/TOEIC và nhận xét bằng tiếng Việt (JSON).

Trình duyệt không gọi thẳng `api.cloudflare.com` được (bị chặn CORS và sẽ lộ token). Worker gọi Workers AI qua binding `AI`
nên **không cần API token** trong app.

## Triển khai (một lần, khoảng 5 phút)

Cần tài khoản Cloudflare miễn phí (https://dash.cloudflare.com/sign-up) và Node.js.

```bash
cd cloudflare/worker
npx wrangler login          # mở trình duyệt để đăng nhập Cloudflare
npx wrangler deploy         # in ra địa chỉ, ví dụ https://english-master-ai.<tên-bạn>.workers.dev
```

Khuyên dùng: đặt mã truy cập để người khác không dùng ké hạn mức của bạn:

```bash
npx wrangler secret put APP_TOKEN   # gõ một chuỗi bí mật bất kỳ, ví dụ 32 ký tự ngẫu nhiên
```

Rồi mở app › **Cài đặt › Chấm điểm bằng AI**:

1. Chọn nhà cung cấp **Cloudflare Workers AI**.
2. Dán địa chỉ Worker.
3. Dán mã truy cập (nếu đã đặt `APP_TOKEN`).
4. Bấm **Kiểm tra kết nối**.

Muốn chỉ cho trang web của bạn gọi Worker: sửa `ALLOWED_ORIGINS` trong `wrangler.toml` rồi `npx wrangler deploy` lại.

## Chi phí

Workers AI có hạn mức miễn phí **10.000 neurons mỗi ngày**; vượt hạn mức thì yêu cầu bị từ chối (gói Free) hoặc tính phí
(gói Workers Paid). Mỗi lượt chấm dùng một lần Whisper (Speaking) và một lần Llama, nên hạn mức miễn phí đủ cho việc luyện
tập cá nhân hằng ngày. Xem mức dùng tại Dashboard › AI › Workers AI.

## Điểm cuối

| Phương thức | Đường dẫn | Mô tả |
|---|---|---|
| GET | `/health` | Kiểm tra Worker, trả danh sách model |
| POST | `/transcribe` | Thân yêu cầu là tệp âm thanh (WAV) → `{ text, words }` |
| POST | `/chat` | `{ model?, system, prompt, schema? }` → `{ response, model }` |

Chỉ các model trong danh sách `CHAT_MODELS` (`src/index.js`) được phép gọi.
