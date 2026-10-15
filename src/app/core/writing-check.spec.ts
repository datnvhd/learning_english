/**
 * writing-check.spec.ts – Kiểm thử bắt lỗi bài viết: ngữ pháp thường gặp, trình bày, chính tả, bám đề.
 */
import { describe, expect, it } from 'vitest';
import { checkGrammar, checkSpelling, parseDictionary, topicCoverage } from './writing-check';

const fixes = (text: string) => checkGrammar(text).map((i) => `${i.text} -> ${i.fix}`);

describe('Bắt lỗi ngữ pháp', () => {
  it('a / an', () => {
    expect(fixes('I ate a apple and an banana.')).toEqual(expect.arrayContaining(['a apple -> an apple', 'an banana -> a banana']));
    expect(fixes('She is a university student and it took an hour. He has a European passport and a useful tool.')).toEqual([]);
  });

  it('hòa hợp chủ ngữ – động từ', () => {
    const f = fixes('My sister like music. She have two cats. They has a car. People is friendly. He don\'t know. There is many reasons.');
    expect(f).toEqual(expect.arrayContaining([
      'She have -> She has', 'They has -> They have', 'People is -> People are', "He don't -> He doesn't", 'There is many -> There are many',
    ]));
  });

  it('động từ sau can/did/must', () => {
    expect(fixes("I can goes there. We didn't went home. You must to study.")).toEqual(
      expect.arrayContaining(['can goes -> can go', "didn't went -> didn't go", 'must to study -> must study']),
    );
  });

  it('so sánh kép, danh từ không đếm được, lặp từ', () => {
    expect(fixes('This is more better. I need some informations about the the course.')).toEqual(
      expect.arrayContaining(['more better -> better', 'informations -> information', 'the the -> the']),
    );
    expect(fixes('This plan is more interesting and more modern than the other one.')).toEqual([]);
  });

  it('trình bày: viết hoa, khoảng trắng, dấu câu', () => {
    const f = fixes('i think it is good ,but expensive.however we can try');
    expect(f).toEqual(expect.arrayContaining(['i -> I', 'good , -> good,', 'expensive.however -> expensive. however']));
    expect(checkGrammar('Online learning is popular today and many students like it').some((i) => i.fix.endsWith('.'))).toBe(true);
  });

  it('lỗi điển hình của người học Việt Nam', () => {
    const f = fixes(
      'Many student think so. Every students must come. I am agree with this view. My brother take a bus. ' +
      'Everyone know the answer. I enjoy to read books. I want to going home. I look forward to hear from you. ' +
      'It makes me to feel happy. I have lived here since five years. We discussed about the plan. ' +
      'She explained me the rule. He is married with a doctor. This is different with that. It depends of the weather. ' +
      'In the other hand, it is cheap. Can you give me an advice? It is the most biggest city.',
    );
    expect(f).toEqual(expect.arrayContaining([
      'Many student -> Many students', 'Every students -> Every student', 'am agree -> agree', 'My brother take -> My brother takes',
      'Everyone know -> Everyone knows', 'enjoy to read -> enjoy reading', 'want to going -> want to go', 'look forward to hear -> look forward to hearing',
      'makes me to feel -> makes me feel', 'since five years -> for five years', 'discussed about -> discussed', 'explained me -> explained to me',
      'married with -> married to', 'different with -> different from', 'depends of -> depends on', 'In the other hand -> on the other hand',
      'an advice -> advice (bỏ "an")', 'most biggest -> biggest',
    ]));
  });

  it('không báo nhầm các câu đúng tương tự', () => {
    expect(fixes('Where does your father work? Should the government pay for it? We were stuck in a traffic jam. ' +
      'There is a music club here. What is interesting about it? The train leaves at fourteen forty-five service time.')).toEqual([]);
  });

  it('bài viết đúng thì không báo lỗi', () => {
    const good = 'In my opinion, online learning has many advantages. Students can study at their own pace, and they do not need to travel. ' +
      'However, it requires a lot of self-discipline. For example, my brother finished an online course last year because he managed his time well.';
    expect(checkGrammar(good)).toEqual([]);
  });
});

describe('Bắt lỗi chính tả', () => {
  // Từ điển nhỏ cho test (bộ kiểm tra cần từ điển >= 1000 từ mới chạy) – thêm các từ đệm
  const filler = Array.from({ length: 1000 }, (_, i) => 'zz' + i.toString(36)).join(' ');
  const dict = parseDictionary('the of students study environment because government their important are said is it in\nenvironments believe receive necessary ' + filler);

  it('gợi ý từ đúng cho từ viết sai, bỏ qua tên riêng và dạng chia hợp lệ', () => {
    const issues = checkSpelling('Students study the enviroment becuase the goverment in Hanoi said it is importent. Their environments are necesary.', dict);
    expect(issues.map((i) => `${i.text} -> ${i.fix}`)).toEqual(
      expect.arrayContaining(['enviroment -> environment', 'becuase -> because', 'goverment -> government', 'importent -> important', 'necesary -> necessary']),
    );
    expect(issues.find((i) => i.text === 'Hanoi')).toBeUndefined();
    expect(issues.find((i) => i.text === 'environments')).toBeUndefined();
  });
});

describe('Bám đề', () => {
  it('bài nói đúng chủ đề có độ phủ cao hơn bài lạc đề', () => {
    const prompt = 'Some people think that online education will replace traditional schools. To what extent do you agree or disagree?';
    const on = topicCoverage(prompt, 'Online education is growing, but traditional schools will not be replaced because people need teachers.');
    const off = topicCoverage(prompt, 'Football is my favourite sport and I play it with friends every weekend.');
    expect(on.score).toBeGreaterThan(off.score + 0.4);
  });
});
