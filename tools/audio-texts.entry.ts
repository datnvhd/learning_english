/**
 * audio-texts.entry.ts – Gom TẤT CẢ câu/từ tiếng Anh mà app sẽ đọc thành tiếng.
 * Được tools/build-audio-list.mjs đóng gói (esbuild) rồi chạy để sinh tools/.audio-cache/texts.json.
 * Khi thêm nguồn dữ liệu mới có phần nghe, bổ sung vào đây rồi chạy lại `npm run build:audio`.
 */
import { audioKey, AudioVoice } from '../src/app/core/audio-key';
import { TopicVocabData } from '../src/app/models/vocab.model';
import { ExamAudio } from '../src/app/models/exam.model';
import { SpeakingItem, WritingTask } from '../src/app/models/exam.model';
import { VOCAB as daily } from '../src/app/data/vocab/daily';
import { VOCAB as it } from '../src/app/data/vocab/it';
import { VOCAB as travel } from '../src/app/data/vocab/travel';
import { VOCAB as study } from '../src/app/data/vocab/study';
import { VOCAB as health } from '../src/app/data/vocab/health';
import { VOCAB as food } from '../src/app/data/vocab/food';
import { VOCAB as b1 } from '../src/app/data/vocab/b1';
import { VOCAB as b2 } from '../src/app/data/vocab/b2';
import { VOCAB as ielts } from '../src/app/data/vocab/ielts';
import { VOCAB as toeic } from '../src/app/data/vocab/toeic';
import { DIALOGUES } from '../src/app/data/dialogues';
import { PASSAGES } from '../src/app/data/reading';
import { GRAMMAR } from '../src/app/data/grammar';
import { IELTS_LISTENING, IELTS_SPEAKING, IELTS_WRITING } from '../src/app/data/exam/ielts';
import { TOEIC_PART2, TOEIC_PART3, TOEIC_PART4 } from '../src/app/data/exam/toeic';
import { TOEIC_PART2_MORE, TOEIC_PART3_MORE, TOEIC_PART4_MORE } from '../src/app/data/exam/toeic-more';
import { TOEIC_PART1 } from '../src/app/data/exam/toeic-part1';
import { IELTS_TESTS } from '../src/app/data/exam/tests/ielts-all';
import { TOEIC_TESTS } from '../src/app/data/exam/tests/toeic-all';
import { TOEIC_S_INFO, TOEIC_S_OPINION, TOEIC_S_PICTURE, TOEIC_S_READ, TOEIC_S_RESPOND, TOEIC_W_EMAIL, TOEIC_W_OPINION } from '../src/app/data/exam/toeic-sw';

const out = new Map<string, { k: string; t: string; v: AudioVoice; g: string }>();

/** Thêm một câu vào danh sách (bỏ qua câu trống / trùng) */
function add(text: string | undefined, group: string, voice: AudioVoice = 'f'): void {
  const t = (text ?? '').trim().replace(/\s+/g, ' ');
  if (!t) return;
  const k = audioKey(t, voice);
  const old = out.get(k);
  if (old && old.t.toLowerCase() !== t.toLowerCase()) throw new Error(`Trùng mã âm thanh: "${old.t}" và "${t}"`);
  if (!old) out.set(k, { k, t, v: voice, g: group });
}

// 1) Từ vựng: từ + câu ví dụ
const VOCABS: TopicVocabData[] = [daily, it, travel, study, health, food, b1, b2, ielts, toeic];
for (const v of VOCABS) for (const l of v.lessons) for (const w of l.words) { add(w[0], 'word'); add(w[4], 'example'); }

// 2) Hội thoại: A = giọng nữ, B = giọng nam; mọi câu thoại cũng có bản giọng nữ cho bài luyện nói
const dialogue = (lines: ExamAudio['lines'], group: string) => {
  for (const l of lines) { add(l.text, group, l.who === 'B' ? 'm' : 'f'); add(l.text, group, 'f'); }
};
for (const d of DIALOGUES) dialogue(d.lines, 'dialogue');

// 3) Bài đọc (nút nghe đoạn văn)
for (const p of PASSAGES) add(p.text, 'reading');

// 4) Ngữ pháp: câu ví dụ + câu hoàn chỉnh của bài luyện
for (const g of GRAMMAR) {
  for (const [en] of g.examples) add(en, 'grammar');
  for (const row of g.quiz) add(row[0].replace('____', row[1]), 'grammar');
}

// 5) Luyện thi – phần nghe
// Bộ đề cố định (20 đề IELTS + 20 đề TOEIC): bài nghe, Part 2, đề nói và bài mẫu
const testAudio = [...IELTS_TESTS.flatMap((t) => t.listening), ...TOEIC_TESTS.flatMap((t) => [...t.part3, ...t.part4])];
const testPart2 = TOEIC_TESTS.flatMap((t) => t.part2);
for (const a of [...IELTS_LISTENING, ...TOEIC_PART3, ...TOEIC_PART4, ...TOEIC_PART3_MORE, ...TOEIC_PART4_MORE, ...testAudio]) dialogue(a.lines, 'exam');
for (const p of TOEIC_PART1) for (const s of [p.a, ...p.wrong]) add(s, 'exam');
for (const row of [...TOEIC_PART2, ...TOEIC_PART2_MORE, ...testPart2]) for (const s of row.slice(0, 4)) add(s, 'exam');
for (const s of ['A', 'B', 'C', 'D', 'Look at the picture.']) add(s, 'exam');

// 6) Luyện thi – phần nói (lời giám khảo + bài mẫu) và bài viết mẫu
const speaking: SpeakingItem[] = [...IELTS_SPEAKING, ...IELTS_TESTS.flatMap((t) => t.speaking), ...TOEIC_S_READ, ...TOEIC_S_PICTURE, ...TOEIC_S_RESPOND.flat(), ...TOEIC_S_INFO.flat(), ...TOEIC_S_OPINION];
for (const s of speaking) {
  add(s.examiner ?? (s.part === 2 ? s.lines[0] : s.lines.join(' ')), 'exam');
  add(s.sample, 'exam');
}
const writing: WritingTask[] = [...IELTS_WRITING, ...IELTS_TESTS.flatMap((t) => t.writing), ...TOEIC_W_EMAIL, ...TOEIC_W_OPINION];
for (const w of writing) add(w.model, 'exam');

// 7) Câu nghe thử giọng ở trang Cài đặt
add('Hello! Welcome to English Master. Let us learn English together!', 'ui');

console.log(JSON.stringify([...out.values()]));
