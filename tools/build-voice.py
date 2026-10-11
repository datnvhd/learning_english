"""
============================================================================
 build-voice.py – Tạo file âm thanh giọng Bông (bé gái Việt Nam) cho app
============================================================================
 Chạy lúc PHÁT TRIỂN (cần internet 1 lần):   npm run build:voice
 Yêu cầu: python + `pip install edge-tts`

 - Đọc các câu cố định trong tools/bong-lines.json
 - Thu bằng hai giọng tiếng Việt miễn phí của Microsoft Edge TTS:
     nữ  vi-VN-HoaiMyNeural  -> public/assets/voice/<mã>.mp3      (mặc định)
     nam vi-VN-NamMinhNeural -> public/assets/voice/nam/<mã>.mp3  (chọn trong Cài đặt)
   (Dịch vụ không cho chỉnh cao độ nên app nâng cao độ lúc phát bằng playbackRate để giọng
   nghe trẻ con hơn – xem SpeechService.bong)
 - Sinh src/app/data/bong-lines.ts (bảng mã -> lời thoại) để app hiển thị chữ và làm
   phương án dự phòng.
 Các file mp3 được đóng gói cùng app nên Bông nói được cả khi KHÔNG có internet và
 không phụ thuộc máy có cài giọng tiếng Việt hay chưa.
"""
import asyncio, json, pathlib, sys
import edge_tts

ROOT = pathlib.Path(__file__).resolve().parent.parent
# thư mục con -> giọng đọc ("" = thư mục gốc, giọng nữ mặc định)
VOICES = {"": "vi-VN-HoaiMyNeural", "nam": "vi-VN-NamMinhNeural"}
FORCE = "--force" in sys.argv
OUT = ROOT / "public" / "assets" / "voice"

async def main():
    lines = json.loads((ROOT / "tools" / "bong-lines.json").read_text(encoding="utf-8"))
    for sub, voice in VOICES.items():
        out = OUT / sub if sub else OUT
        out.mkdir(parents=True, exist_ok=True)
        for key, text in lines.items():
            if not FORCE and (out / f"{key}.mp3").exists() and (out / f"{key}.mp3").stat().st_size > 1000:
                continue
            # Dịch vụ đôi khi trả về rỗng -> thử lại tối đa 8 lần
            for attempt in range(8):
                try:
                    await edge_tts.Communicate(text, voice).save(str(out / f"{key}.mp3"))
                    if (out / f"{key}.mp3").stat().st_size > 1000:
                        print("OK", sub or "nu", key)
                        break
                except Exception:
                    pass
                await asyncio.sleep(1.5)
            else:
                raise SystemExit(f"Không tạo được âm thanh cho: {sub or 'nu'}/{key}")
    ts = "/**\n * Lời thoại cố định của Bông (SINH TỰ ĐỘNG bởi tools/build-voice.py từ tools/bong-lines.json).\n * Mỗi mã có file âm thanh tương ứng public/assets/voice/<mã>.mp3\n */\n"
    ts += "export const BONG_LINES = " + json.dumps(lines, ensure_ascii=False, indent=2) + " as const;\n\n"
    ts += "export type BongLineKey = keyof typeof BONG_LINES;\n"
    (ROOT / "src" / "app" / "data" / "bong-lines.ts").write_text(ts, encoding="utf-8")

asyncio.run(main())
