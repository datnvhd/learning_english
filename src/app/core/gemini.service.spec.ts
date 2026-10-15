/**
 * gemini.service.spec.ts – Kiểm thử chấm bằng AI Gemini với máy chủ giả lập (không gọi mạng thật):
 * định dạng yêu cầu, đọc kết quả JSON, thông báo lỗi và việc quay về bộ chấm offline.
 */
import { TestBed } from '@angular/core/testing';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { IELTS_WRITING } from '../data/exam/ielts';
import { ExamService } from './exam.service';
import { GeminiService } from './gemini.service';

const KEY = 'AIzaTestKey_0123456789abcdef';

/** Phản hồi generateContent giả: `obj` là JSON AI trả về */
function reply(obj: unknown, status = 200): Response {
  const body = status === 200
    ? { candidates: [{ content: { parts: [{ text: JSON.stringify(obj) }] } }] }
    : { error: { message: obj } };
  return new Response(JSON.stringify(body), { status, headers: { 'Content-Type': 'application/json' } });
}

const SPEAK = {
  transcript: 'I usually read books in my free time because it helps me relax.',
  overall: 6.5,
  criteria: [
    { name: 'Fluency and Coherence', score: 7, comment: 'Nói khá trôi chảy.' },
    { name: 'Lexical Resource', score: 6, comment: 'Từ vựng còn đơn giản.' },
    { name: 'Grammatical Range and Accuracy', score: 6.5, comment: 'Có câu phức.' },
    { name: 'Pronunciation', score: 6.5, comment: 'Phát âm rõ.' },
  ],
  summary: 'Bài nói tốt.', strengths: ['Trôi chảy'],
  mistakes: [{ said: 'it help me', correction: 'it helps me', explanation: 'Thiếu -s.' }],
  pronunciation: [{ word: 'relax', issue: 'Sai trọng âm', tip: '/rɪˈlæks/' }],
  improved: 'In my spare time, I usually curl up with a good book...',
};

describe('GeminiService', () => {
  let gemini: GeminiService;
  let fetchMock: ReturnType<typeof vi.fn>;

  beforeEach(() => {
    localStorage.clear();
    TestBed.resetTestingModule();
    fetchMock = vi.fn();
    vi.stubGlobal('fetch', fetchMock);
    gemini = TestBed.inject(GeminiService);
    gemini.setEnabled(true);
    gemini.setApiKey(KEY);
  });

  afterEach(() => vi.unstubAllGlobals());

  it('lưu cài đặt riêng (không nằm trong dữ liệu tiến độ) và chỉ dùng khi đã bật + có key', () => {
    expect(gemini.usable()).toBe(true);
    expect(localStorage.getItem('em.ai.key')).toBe(KEY);
    gemini.setEnabled(false);
    expect(gemini.usable()).toBe(false);
  });

  it('gửi bản ghi âm kèm đề tới generateContent và đổi kết quả sang thang band', async () => {
    fetchMock.mockImplementation(async () => reply(SPEAK));
    const audio = new Blob([new Uint8Array(2000)], { type: 'audio/webm;codecs=opus' });
    const s = await gemini.gradeSpeech(audio, { mode: 'free', exam: 'ielts', question: 'What do you do in your free time?', seconds: 30 });

    const [url, init] = fetchMock.mock.calls[0];
    expect(url).toContain('/models/gemini-3.8-flash:generateContent');
    expect(init.headers['x-goog-api-key']).toBe(KEY);
    const body = JSON.parse(init.body);
    const parts = body.contents[0].parts;
    expect(parts[0].text).toContain('free time');
    expect(parts[1].inline_data.mime_type).toBe('audio/webm');
    expect(parts[1].inline_data.data.length).toBeGreaterThan(100);
    expect(body.generation_config.response_mime_type).toBe('application/json');
    expect(body.generation_config.response_schema.properties.criteria).toBeTruthy();

    expect(s.label).toBe('Band 6.5');
    expect(s.overall).toBeCloseTo(0.7);
    expect(s.criteria).toHaveLength(4);
    expect(s.criteria[0].shown).toBe('Band 7.0');
    expect(s.ai?.mistakes[0].correction).toBe('it helps me');
    expect(s.ai?.pronunciation[0].word).toBe('relax');
  });

  it('đọc theo mẫu TOEIC dùng thang 0–3', async () => {
    fetchMock.mockResolvedValue(reply({ ...SPEAK, overall: 2, criteria: [{ name: 'Accuracy', score: 2, comment: '' }] }));
    const s = await gemini.gradeSpeech(new Blob([new Uint8Array(2000)], { type: 'audio/webm' }), { mode: 'read', exam: 'toeic', question: 'Read', target: 'Hello there.', maxPoints: 3 });
    expect(s.label).toBe('2/3');
    expect(JSON.parse(fetchMock.mock.calls[0][1].body).contents[0].parts[0].text).toContain('Hello there.');
  });

  it('báo lỗi tiếng Việt dễ hiểu cho key sai, model sai, hết hạn mức, mất mạng', async () => {
    const audio = new Blob([new Uint8Array(2000)], { type: 'audio/webm' });
    const ctx = { mode: 'free' as const, exam: 'ielts' as const, question: 'Q' };
    fetchMock.mockResolvedValueOnce(reply('API key not valid. Please pass a valid API key.', 400));
    await expect(gemini.gradeSpeech(audio, ctx)).rejects.toThrow('API key Gemini không hợp lệ');
    fetchMock.mockResolvedValueOnce(reply('models/x is not found', 404));
    await expect(gemini.gradeSpeech(audio, ctx)).rejects.toThrow('Không tìm thấy model');
    fetchMock.mockResolvedValueOnce(reply('Resource exhausted', 429));
    await expect(gemini.gradeSpeech(audio, ctx)).rejects.toThrow('hạn mức');
    fetchMock.mockRejectedValueOnce(new TypeError('Failed to fetch'));
    await expect(gemini.gradeSpeech(audio, ctx)).rejects.toThrow('Không kết nối được');
  });
});

describe('Chấm Writing bằng Gemini', () => {
  const task = IELTS_WRITING.find((t) => t.task === 2)!;

  beforeEach(() => {
    localStorage.clear();
    TestBed.resetTestingModule();
  });
  afterEach(() => vi.unstubAllGlobals());

  it('khi bật: điểm, tiêu chí, lỗi và bài nâng cấp lấy từ Gemini', async () => {
    const fetchMock = vi.fn().mockImplementation(async (url: string) => (!String(url).includes('generativelanguage') ? new Response('', { status: 404 }) : reply({
      overall: 6, summary: 'Bài viết khá.', strengths: ['Bố cục rõ'], suggestions: ['Thêm ví dụ cụ thể.'],
      criteria: [{ name: 'Task Response', score: 6, comment: 'Đủ ý.' }, { name: 'Coherence and Cohesion', score: 6.5, comment: '' },
        { name: 'Lexical Resource', score: 6, comment: '' }, { name: 'Grammatical Range and Accuracy', score: 5.5, comment: '' }],
      errors: [{ original: 'peoples', correction: 'people', type: 'grammar', explanation: 'Danh từ số nhiều bất quy tắc.' }],
      improved: 'Better essay...',
    })));
    vi.stubGlobal('fetch', fetchMock);
    TestBed.inject(GeminiService).setEnabled(true);
    TestBed.inject(GeminiService).setApiKey(KEY);
    const a = await TestBed.inject(ExamService).analyzeEssay(task.model, task);
    expect(a.ai).toBeTruthy();
    expect(a.band).toBe(6);
    expect(a.label).toBe('Band 6.0');
    expect(a.parts).toHaveLength(4);
    expect(a.issues[0]).toEqual({ kind: 'grammar', text: 'peoples', fix: 'people', note: 'Danh từ số nhiều bất quy tắc.' });
    expect(a.words).toBeGreaterThan(200); // số từ vẫn đếm trên máy
    const sent = JSON.parse(fetchMock.mock.calls.find((c) => String(c[0]).includes('generateContent'))![1].body);
    expect(sent.contents[0].parts[0].text).toContain(task.prompt);
  });

  it('lỗi gọi Gemini thì dùng bộ chấm offline và ghi chú lý do', async () => {
    vi.stubGlobal('fetch', vi.fn().mockRejectedValue(new TypeError('Failed to fetch')));
    TestBed.inject(GeminiService).setEnabled(true);
    TestBed.inject(GeminiService).setApiKey(KEY);
    const a = await TestBed.inject(ExamService).analyzeEssay(task.model, task);
    expect(a.ai).toBeUndefined();
    expect(a.notice).toContain('bộ chấm offline');
    expect(a.band).toBeGreaterThan(5);
  });

  it('khi tắt: không gọi Gemini', async () => {
    const fetchMock = vi.fn().mockRejectedValue(new Error('should not call'));
    vi.stubGlobal('fetch', fetchMock);
    const a = await TestBed.inject(ExamService).analyzeEssay(task.model, task);
    expect(a.ai).toBeUndefined();
    expect(fetchMock.mock.calls.some((c) => String(c[0]).includes('generativelanguage'))).toBe(false);
  });
});
