/** Gộp 20 đề IELTS cố định – được ExamService nạp động (lazy) khi người học mở một đề */
import { TESTS as a } from './ielts-01';
import { TESTS as b } from './ielts-02';
import { TESTS as c } from './ielts-03';
import { TESTS as d } from './ielts-04';
import { TESTS as e } from './ielts-05';
import { IeltsTest, RawIeltsFull, ieltsFull } from './helpers';
import { FULL as x01 } from './full/ielts-01';
import { FULL as x02 } from './full/ielts-02';
import { FULL as x03 } from './full/ielts-03';
import { FULL as x04 } from './full/ielts-04';
import { FULL as x05 } from './full/ielts-05';
import { FULL as x06 } from './full/ielts-06';
import { FULL as x07 } from './full/ielts-07';
import { FULL as x08 } from './full/ielts-08';
import { FULL as x09 } from './full/ielts-09';
import { FULL as x10 } from './full/ielts-10';
import { FULL as x11 } from './full/ielts-11';
import { FULL as x12 } from './full/ielts-12';
import { FULL as x13 } from './full/ielts-13';
import { FULL as x14 } from './full/ielts-14';
import { FULL as x15 } from './full/ielts-15';
import { FULL as x16 } from './full/ielts-16';
import { FULL as x17 } from './full/ielts-17';
import { FULL as x18 } from './full/ielts-18';
import { FULL as x19 } from './full/ielts-19';
import { FULL as x20 } from './full/ielts-20';
// <full-imports>

/** Phần bổ sung để nâng đề lên 40 câu nghe + 40 câu đọc: số đề -> dữ liệu. Nhớ tăng FULL_TESTS.ielts trong catalog.ts */
const FULL: Record<number, RawIeltsFull> = {
  1: x01,
  2: x02,
  3: x03,
  4: x04,
  5: x05,
  6: x06,
  7: x07,
  8: x08,
  9: x09,
  10: x10,
  11: x11,
  12: x12,
  13: x13,
  14: x14,
  15: x15,
  16: x16,
  17: x17,
  18: x18,
  19: x19,
  20: x20,
  // <full-map>
};

export const IELTS_TESTS: IeltsTest[] = [...a, ...b, ...c, ...d, ...e].map((t) => (FULL[t.no] ? ieltsFull(t, FULL[t.no]) : t));
