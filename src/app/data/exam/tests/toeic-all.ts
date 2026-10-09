/** Gộp 20 đề TOEIC cố định – được ExamService nạp động (lazy) khi người học mở một đề */
import { TESTS as a } from './toeic-01';
import { TESTS as b } from './toeic-02';
import { TESTS as c } from './toeic-03';
import { TESTS as d } from './toeic-04';
import { TESTS as e } from './toeic-05';
import { TESTS as f } from './toeic-06';
import { TESTS as g } from './toeic-07';
import { TESTS as h } from './toeic-08';
import { TESTS as i } from './toeic-09';
import { TESTS as j } from './toeic-10';
import { RawToeicL, RawToeicR, ToeicTest, toeicFull } from './helpers';
import { L as l01 } from './full/toeic-01-l';
import { R as r01 } from './full/toeic-01-r';
import { L as l02 } from './full/toeic-02-l';
import { R as r02 } from './full/toeic-02-r';
import { L as l03 } from './full/toeic-03-l';
import { R as r03 } from './full/toeic-03-r';
import { L as l04 } from './full/toeic-04-l';
import { R as r04 } from './full/toeic-04-r';
import { L as l05 } from './full/toeic-05-l';
import { R as r05 } from './full/toeic-05-r';
import { L as l06 } from './full/toeic-06-l';
import { R as r06 } from './full/toeic-06-r';
import { L as l07 } from './full/toeic-07-l';
import { R as r07 } from './full/toeic-07-r';
import { L as l08 } from './full/toeic-08-l';
import { R as r08 } from './full/toeic-08-r';
import { L as l09 } from './full/toeic-09-l';
import { R as r09 } from './full/toeic-09-r';
import { L as l10 } from './full/toeic-10-l';
import { R as r10 } from './full/toeic-10-r';
import { L as l11 } from './full/toeic-11-l';
import { R as r11 } from './full/toeic-11-r';
import { L as l12 } from './full/toeic-12-l';
import { R as r12 } from './full/toeic-12-r';
import { L as l13 } from './full/toeic-13-l';
import { R as r13 } from './full/toeic-13-r';
import { L as l14 } from './full/toeic-14-l';
import { R as r14 } from './full/toeic-14-r';
import { L as l15 } from './full/toeic-15-l';
import { R as r15 } from './full/toeic-15-r';
// <full-imports>

/** Phần bổ sung để nâng đề lên 200 câu: số đề -> [phần Nghe, phần Đọc]. Nhớ tăng FULL_TESTS.toeic trong catalog.ts */
const FULL: Record<number, [RawToeicL, RawToeicR]> = {
  1: [l01, r01],
  2: [l02, r02],
  3: [l03, r03],
  4: [l04, r04],
  5: [l05, r05],
  6: [l06, r06],
  7: [l07, r07],
  8: [l08, r08],
  9: [l09, r09],
  10: [l10, r10],
  11: [l11, r11],
  12: [l12, r12],
  13: [l13, r13],
  14: [l14, r14],
  15: [l15, r15],
  // <full-map>
};

export const TOEIC_TESTS: ToeicTest[] = [...a, ...b, ...c, ...d, ...e, ...f, ...g, ...h, ...i, ...j].map((t) => (FULL[t.no] ? toeicFull(t, ...FULL[t.no]) : t));
