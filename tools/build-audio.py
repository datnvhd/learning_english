"""
============================================================================
 build-audio.py – TẢI TOÀN BỘ âm thanh tiếng Anh về máy để học OFFLINE
============================================================================
 Chạy lúc PHÁT TRIỂN (cần internet):   npm run build:audio
 Yêu cầu: python + `pip install edge-tts`

 - Đọc tools/.audio-cache/texts.json (sinh bởi tools/build-audio-list.mjs): mọi từ vựng, câu ví dụ,
   hội thoại, bài nghe luyện thi, bài mẫu... mà app sẽ đọc thành tiếng.
 - Thu từng câu bằng giọng đọc tự nhiên (nữ: en-US-AriaNeural, nam: en-US-GuyNeural cho người nói B)
   và lưu vào public/assets/audio/<2 ký tự đầu của mã>/<mã>.mp3. File đã có thì bỏ qua,
   nên có thể dừng giữa chừng rồi chạy lại.
 - Cuối cùng sinh src/app/data/audio-index.ts (danh sách mã đã có + tổng dung lượng) để app biết
   câu nào có file thu sẵn; câu chưa có sẽ dùng giọng đọc của thiết bị.
 Các file mp3 được đóng gói cùng app => nghe được khi KHÔNG có internet, không phụ thuộc giọng cài trên máy.
 Tùy chọn:  --index-only  chỉ sinh lại audio-index.ts từ các file đang có
"""
import asyncio, json, pathlib, sys

ROOT = pathlib.Path(__file__).resolve().parent.parent
LIST = ROOT / "tools" / ".audio-cache" / "texts.json"
OUT = ROOT / "public" / "assets" / "audio"
INDEX = ROOT / "src" / "app" / "data" / "audio-index.ts"
VOICES = {"f": "en-US-AriaNeural", "m": "en-US-GuyNeural"}
WORKERS = 8
MIN_BYTES = 800


def path_of(key: str) -> pathlib.Path:
    return OUT / key[:2] / f"{key}.mp3"


def write_index(items: list[dict]) -> None:
    """Ghi danh sách mã đã có file (ghép liền 16 ký tự/mã cho gọn) và thống kê theo nhóm"""
    have = [x for x in items if path_of(x["k"]).exists() and path_of(x["k"]).stat().st_size >= MIN_BYTES]
    keys = "".join(sorted(x["k"] for x in have))
    total = sum(path_of(x["k"]).stat().st_size for x in have)
    groups: dict[str, int] = {}
    for x in have:
        groups[x["g"]] = groups.get(x["g"], 0) + 1
    ts = "/**\n * Danh sách file âm thanh tiếng Anh thu sẵn (SINH TỰ ĐỘNG bởi tools/build-audio.py – không sửa tay).\n"
    ts += " * AUDIO_KEYS: các mã 16 ký tự ghép liền nhau; file tương ứng ở public/assets/audio/<2 ký tự đầu>/<mã>.mp3\n */\n"
    ts += f"export const AUDIO_KEYS = '{keys}';\n\n"
    ts += f"/** Số file và tổng dung lượng (byte) */\nexport const AUDIO_COUNT = {len(have)};\nexport const AUDIO_BYTES = {total};\n\n"
    ts += f"/** Số file theo nhóm nội dung */\nexport const AUDIO_GROUPS: Record<string, number> = {json.dumps(groups)};\n"
    INDEX.write_text(ts, encoding="utf-8")
    print(f"audio-index.ts: {len(have)}/{len(items)} file, {total / 1048576:.1f} MB")


async def main() -> None:
    items = json.loads(LIST.read_text(encoding="utf-8"))
    if "--index-only" in sys.argv:
        write_index(items)
        return
    import edge_tts

    todo = [x for x in items if not (path_of(x["k"]).exists() and path_of(x["k"]).stat().st_size >= MIN_BYTES)]
    print(f"Cần tải {len(todo)}/{len(items)} file âm thanh...")
    queue: asyncio.Queue = asyncio.Queue()
    for x in todo:
        queue.put_nowait(x)
    done = 0
    failed: list[str] = []

    async def worker() -> None:
        nonlocal done
        while True:
            try:
                x = queue.get_nowait()
            except asyncio.QueueEmpty:
                return
            p = path_of(x["k"])
            p.parent.mkdir(parents=True, exist_ok=True)
            tmp = p.with_suffix(".part")
            # Dịch vụ đôi khi trả về rỗng hoặc ngắt kết nối -> thử lại, giãn dần
            for attempt in range(6):
                try:
                    await asyncio.wait_for(edge_tts.Communicate(x["t"], VOICES[x["v"]]).save(str(tmp)), timeout=90)
                    if tmp.stat().st_size >= MIN_BYTES:
                        tmp.replace(p)
                        break
                except Exception:
                    pass
                await asyncio.sleep(1.5 * (attempt + 1))
            else:
                failed.append(x["t"])
                tmp.unlink(missing_ok=True)
            done += 1
            if done % 200 == 0:
                print(f"  {done}/{len(todo)}", flush=True)

    await asyncio.gather(*(worker() for _ in range(WORKERS)))
    write_index(items)
    if failed:
        print(f"CHƯA tải được {len(failed)} câu (chạy lại lệnh để thử tiếp):")
        for t in failed[:20]:
            print("  -", t[:90])
        raise SystemExit(1)
    print("Hoàn tất: toàn bộ âm thanh đã nằm trên máy.")


asyncio.run(main())
