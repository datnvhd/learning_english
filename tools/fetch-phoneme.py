"""
============================================================================
 fetch-phoneme.py – Tải mô hình nhận dạng ÂM VỊ tiếng Anh (chấm phát âm từng âm, offline)
============================================================================
 Chạy lúc PHÁT TRIỂN (cần internet 1 lần):   npm run fetch:phoneme
 - Mô hình: robg/speako-phoneme-recognizer (Apache-2.0) – bản ONNX nén INT8 của
   vitouphy/wav2vec2-xls-r-300m-timit-phoneme, nhận dạng chuỗi âm vị IPA (bộ 39 âm TIMIT).
 - Lưu vào public/assets/phoneme/speako/ để Transformers.js nạp ngay trên máy (không cần mạng khi học).
 - Kèm CMU Pronouncing Dictionary (BSD) để biết cách phát âm chuẩn của từng từ trong câu.
"""
import pathlib
import sys
import urllib.request

ROOT = pathlib.Path(__file__).resolve().parent.parent
REPO = "robg/speako-phoneme-recognizer"
BASE = f"https://huggingface.co/{REPO}/resolve/main/"
OUT = ROOT / "public" / "assets" / "phoneme" / "speako"
FILES = ["config.json", "preprocessor_config.json", "tokenizer.json", "tokenizer_config.json", "vocab.json", "onnx/model_quantized.onnx"]
CMU_URL = "https://raw.githubusercontent.com/cmusphinx/cmudict/master/cmudict.dict"
CMU_OUT = ROOT / "public" / "assets" / "phoneme" / "cmudict.dict"


def get(url: str, dst: pathlib.Path) -> None:
    if dst.exists() and dst.stat().st_size > 0 and "--force" not in sys.argv:
        print("Đã có", dst.name)
        return
    dst.parent.mkdir(parents=True, exist_ok=True)
    print("Đang tải", url)
    tmp = dst.with_suffix(dst.suffix + ".part")
    with urllib.request.urlopen(url, timeout=600) as r, open(tmp, "wb") as f:
        while True:
            chunk = r.read(1 << 20)
            if not chunk:
                break
            f.write(chunk)
    tmp.replace(dst)
    print("  ->", dst, f"{dst.stat().st_size / 1e6:.1f} MB")


for name in FILES:
    try:
        get(BASE + name, OUT / name)
    except Exception as e:  # tệp tùy chọn (tokenizer_config...) có thể không tồn tại
        print("  (bỏ qua)", name, e)
get(CMU_URL, CMU_OUT)
