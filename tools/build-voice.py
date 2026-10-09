"""
============================================================================
 build-voice.py – Tạo file âm thanh giọng Bông (bé gái Việt Nam) cho app
============================================================================
 Chạy lúc PHÁT TRIỂN (cần internet 1 lần):   npm run build:voice
 Yêu cầu: python + `pip install edge-tts`

 - Đọc các câu cố định trong tools/bong-lines.json
 - Dùng giọng nữ tiếng Việt vi-VN-HoaiMyNeural, lưu thành public/assets/voice/<mã>.mp3.
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
VOICE = "vi-VN-HoaiMyNeural"   # giọng nữ Việt Nam
FORCE = "--force" in sys.argv
OUT = ROOT / "public" / "assets" / "voice"

async def main():
    lines = json.loads((ROOT / "tools" / "bong-lines.json").read_text(encoding="utf-8"))
    OUT.mkdir(parents=True, exist_ok=True)
    for key, text in lines.items():
        if not FORCE and (OUT / f"{key}.mp3").exists() and (OUT / f"{key}.mp3").stat().st_size > 1000:
            continue
        # Dịch vụ đôi khi trả về rỗng -> thử lại tối đa 8 lần
        for attempt in range(8):
            try:
                await edge_tts.Communicate(text, VOICE).save(str(OUT / f"{key}.mp3"))
                if (OUT / f"{key}.mp3").stat().st_size > 1000:
                    print("OK", key)
                    break
            except Exception:
                pass
            await asyncio.sleep(1.5)
        else:
            raise SystemExit(f"Không tạo được âm thanh cho: {key}")
    ts = "/**\n * Lời thoại cố định của Bông (SINH TỰ ĐỘNG bởi tools/build-voice.py từ tools/bong-lines.json).\n * Mỗi mã có file âm thanh tương ứng public/assets/voice/<mã>.mp3\n */\n"
    ts += "export const BONG_LINES = " + json.dumps(lines, ensure_ascii=False, indent=2) + " as const;\n\n"
    ts += "export type BongLineKey = keyof typeof BONG_LINES;\n"
    (ROOT / "src" / "app" / "data" / "bong-lines.ts").write_text(ts, encoding="utf-8")

asyncio.run(main())
