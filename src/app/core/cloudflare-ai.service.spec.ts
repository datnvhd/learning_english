/**
 * cloudflare-ai.service.spec.ts – Chấm bằng Cloudflare Workers AI (fetch giả lập): gọi đúng Worker, gửi mã truy cập,
 * đọc được JSON trả về, báo lỗi tiếng Việt dễ hiểu; chọn nhà cung cấp; prompt chứa số đo phát âm; WAV hợp lệ.
 */
import { TestBed } from '@angular/core/testing';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { IELTS_WRITING } from '../data/exam/ielts';
import { speakTextPrompt } from './ai-grading';
import { AiService } from './ai.service';
import { CloudflareAiService } from './cloudflare-ai.service';
import { ExamService } from './exam.service';
import { encodeWav } from './wav';

const URL_ = 'https://english-master-ai.demo.workers.dev';

function reply(body: unknown, status = 200) {
  return Promise.resolve(new Response(JSON.stringify(body), { status, headers: { 'Content-Type': 'application/json' } }));
}

const ESSAY = {
  overall: 6.5,
  criteria: [
    { name: 'Task Response', score: 6.5, comment: 'Trả lời đúng đề.' },
    { name: 'Coherence and Cohesion', score: 6, comment: 'Ổn.' },
    { name: 'Lexical Resource', score: 7, comment: 'Tốt.' },
    { name: 'Grammatical Range and Accuracy', score: 6, comment: 'Còn lỗi.' },
  ],
  summary: 'Bài khá.', strengths: ['Rõ ý'], suggestions: ['Thêm ví dụ'],
  errors: [{ original: 'peoples', correction: 'people', type: 'grammar', explanation: 'Danh từ bất quy tắc.' }],
  improved: 'Better essay.',
};

describe('CloudflareAiService', () => {
  let fetchMock: ReturnType<typeof vi.fn>;

  beforeEach(() => {
    localStorage.clear();
    fetchMock = vi.fn();
    vi.stubGlobal('fetch', fetchMock);
  });
  afterEach(() => vi.unstubAllGlobals());

  /** Worker trả `res`; các yêu cầu khác (tải từ điển offline...) trả 404 */
  const workerReplies = (res: Promise<Response>) =>
    fetchMock.mockImplementation((url: string) => (String(url).startsWith(URL_) ? res : Promise.resolve(new Response('', { status: 404 }))));

  it('mặc định chọn Cloudflare; chỉ dùng được khi đã bật và có địa chỉ Worker', () => {
    const ai = TestBed.inject(AiService);
    expect(ai.provider()).toBe('cloudflare');
    ai.setEnabled(true);
    expect(ai.usable()).toBe(false);
    ai.cloudflare.setUrl(URL_ + '/');
    expect(ai.cloudflare.url()).toBe(URL_);
    expect(ai.usable()).toBe(true);
    expect(ai.label()).toBe('Cloudflare Workers AI');
  });

  it('kiểm tra kết nối: gọi /chat kèm mã truy cập', async () => {
    const cf = TestBed.inject(CloudflareAiService);
    cf.setUrl(URL_);
    cf.setToken('secret-token');
    fetchMock.mockReturnValueOnce(reply({ response: { ok: true }, model: '@cf/meta/llama-3.3-70b-instruct-fp8-fast' }));
    expect(await cf.test()).toContain('Kết nối thành công');
    const [url, init] = fetchMock.mock.calls[0];
    expect(url).toBe(URL_ + '/chat');
    expect(init.headers['Authorization']).toBe('Bearer secret-token');
    expect(JSON.parse(init.body).schema.properties.ok).toBeTruthy();
  });

  it('chấm Writing qua ExamService, đọc được JSON nằm trong khối ```json', async () => {
    const ai = TestBed.inject(AiService);
    ai.setEnabled(true);
    ai.cloudflare.setUrl(URL_);
    workerReplies(reply({ response: 'Here is the result:\n```json\n' + JSON.stringify(ESSAY) + '\n```' }));
    const task = IELTS_WRITING.find((t) => t.task === 2)!;
    const a = await TestBed.inject(ExamService).analyzeEssay(task.model, task);
    expect(a.label).toBe('Band 6.5');
    expect(a.parts).toHaveLength(4);
    expect(a.issues[0]).toEqual({ kind: 'grammar', text: 'peoples', fix: 'people', note: 'Danh từ bất quy tắc.' });
    expect(a.ai?.provider).toBe('Cloudflare Workers AI');
    const sent = JSON.parse(fetchMock.mock.calls.find((c) => String(c[0]).startsWith(URL_))![1].body);
    expect(sent.prompt).toContain(task.prompt);
    expect(sent.system).toContain('VIETNAMESE');
  });

  it('báo lỗi dễ hiểu và quay về bộ chấm offline', async () => {
    const cf = TestBed.inject(CloudflareAiService);
    cf.setUrl(URL_);
    fetchMock.mockReturnValueOnce(reply({ error: 'Unauthorized' }, 401));
    await expect(cf.test()).rejects.toThrow('Sai mã truy cập');
    fetchMock.mockReturnValueOnce(reply({ error: 'daily neuron limit exceeded' }, 429));
    await expect(cf.test()).rejects.toThrow('hết hạn mức');
    fetchMock.mockReturnValueOnce(Promise.reject(new TypeError('Failed to fetch')));
    await expect(cf.test()).rejects.toThrow('Không kết nối được tới Worker');

    const ai = TestBed.inject(AiService);
    ai.setEnabled(true);
    workerReplies(reply({ error: 'boom' }, 500));
    const task = IELTS_WRITING.find((t) => t.task === 2)!;
    const a = await TestBed.inject(ExamService).analyzeEssay(task.model, task);
    expect(a.ai).toBeUndefined();
    expect(a.notice).toContain('Cloudflare Workers AI');
  });

  it('chép lời: gửi WAV lên /transcribe', async () => {
    const cf = TestBed.inject(CloudflareAiService);
    cf.setUrl(URL_);
    fetchMock.mockReturnValueOnce(reply({ text: ' I like music. ', words: [] }));
    expect(await cf.transcribe(new Float32Array(16000))).toBe('I like music.');
    const [url, init] = fetchMock.mock.calls[0];
    expect(url).toBe(URL_ + '/transcribe');
    expect(init.headers['Content-Type']).toBe('audio/wav');
    expect((init.body as Blob).size).toBe(44 + 16000 * 2);
  });

  it('chấm Speaking: prompt có bản chép lời và số đo phát âm / ngữ điệu', async () => {
    const { system, prompt } = speakTextPrompt({ mode: 'free', exam: 'ielts', question: 'Do you like music?' }, {
      transcript: 'I like music very much', wpm: 120, pauses: 2, seconds: 20, phoneAccuracy: 0.86,
      patterns: ['mất / sai âm cuối (3 lần)'], words: [{ word: 'music', expected: 'mjuzɪk', heard: 'mjuzɪ', issues: ['mất âm cuối /k/'] }],
      intonation: 0.55, intonationNotes: ['Giọng khá đều đều.'], fillers: 3, estimate: 'Band 6.0',
    });
    expect(system).toContain('cannot hear');
    for (const s of ['I like music very much', '120 words/min', 'Phoneme accuracy', '86%', 'music /mjuzɪk/ → /mjuzɪ/', 'Intonation score: 55%', 'fillers (uh/um): 3']) expect(prompt).toContain(s);
    const cf = TestBed.inject(CloudflareAiService);
    cf.setUrl(URL_);
    fetchMock.mockReturnValueOnce(reply({ response: JSON.stringify({ overall: 6, criteria: [{ name: 'Pronunciation', score: 6, comment: 'Mất âm cuối.' }], summary: 'Khá', strengths: [], mistakes: [], pronunciation: [{ word: 'music', issue: 'mất /k/', tip: '/ˈmjuːzɪk/' }], improved: 'x' }) }));
    const s = await cf.gradeSpeech({ mode: 'free', exam: 'ielts', question: 'Do you like music?' }, { transcript: 'I like music', wpm: 100, pauses: 0, seconds: 5 });
    expect(s.label).toBe('Band 6.0');
    expect(s.transcript).toBe('I like music');
    expect(s.ai?.pronunciation[0].word).toBe('music');
  });

  it('WAV 16-bit mono đúng định dạng', async () => {
    const wav = encodeWav(new Float32Array([0, 1, -1, 0.5]), 16000);
    const v = new DataView(await wav.arrayBuffer());
    const tag = (o: number) => String.fromCharCode(v.getUint8(o), v.getUint8(o + 1), v.getUint8(o + 2), v.getUint8(o + 3));
    expect(tag(0)).toBe('RIFF');
    expect(tag(8)).toBe('WAVE');
    expect(v.getUint32(24, true)).toBe(16000);
    expect(v.getInt16(46, true)).toBe(32767);
    expect(v.getInt16(48, true)).toBe(-32768);
  });
});
