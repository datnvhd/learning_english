"""
============================================================================
 fetch-dict.py – Tạo từ điển kiểm tra chính tả tiếng Anh dùng OFFLINE
============================================================================
 Chạy lúc PHÁT TRIỂN (cần internet 1 lần):   npm run fetch:dict
 - Tải danh sách từ ENABLE (enable1.txt, ~173.000 từ, phạm vi công cộng – public domain)
 - Gộp với mọi từ tiếng Anh xuất hiện trong nội dung app (tools/.audio-cache/texts.json,
   sinh bởi `npm run build:audio`) – những từ này được ưu tiên khi gợi ý sửa lỗi
 - Ghi ra public/assets/dict/en.txt: dòng 1 là các từ "thường gặp" (trong app), dòng 2 là phần còn lại
 Phần Writing dùng file này để phát hiện từ viết sai chính tả và gợi ý từ đúng, không cần mạng.
"""
import json
import pathlib
import re
import sys
import urllib.request

ROOT = pathlib.Path(__file__).resolve().parent.parent
URL = "https://raw.githubusercontent.com/dolph/dictionary/master/enable1.txt"
OUT = ROOT / "public" / "assets" / "dict" / "en.txt"


def main() -> None:
    if OUT.exists() and "--force" not in sys.argv:
        print("Đã có từ điển:", OUT)
        return
    enable = set(urllib.request.urlopen(URL, timeout=120).read().decode("utf-8").split())
    texts = json.loads((ROOT / "tools" / ".audio-cache" / "texts.json").read_text(encoding="utf-8"))
    common: set[str] = set()
    for x in texts:
        for w in re.findall(r"[a-z]+(?:'[a-z]+)?", x["t"].lower()):
            if len(w) > 1 or w in ("a", "i"):
                common.add(w)
    rest = enable - common
    OUT.parent.mkdir(parents=True, exist_ok=True)
    OUT.write_text(" ".join(sorted(common)) + "\n" + " ".join(sorted(rest)) + "\n", encoding="utf-8")
    print(f"Xong: {len(common)} từ thường gặp + {len(rest)} từ khác -> {OUT} ({OUT.stat().st_size / 1e6:.1f} MB)")


main()
