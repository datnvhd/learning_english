/**
 * ============================================================================
 *  writing-check.ts – Bắt lỗi bài viết tiếng Anh OFFLINE (chính tả, ngữ pháp thường gặp, trình bày)
 * ============================================================================
 *  - checkGrammar(): các lỗi người Việt hay mắc, phát hiện bằng luật (không cần từ điển):
 *      a/an, hòa hợp chủ ngữ – động từ (he have, they has, people is...), động từ sau động từ khuyết
 *      thiếu / "did" (can goes, didn't went, must to), so sánh kép (more better), danh từ không đếm được
 *      dùng số nhiều (informations), "there is + số nhiều", lặp từ (the the), viết hoa đầu câu / "i",
 *      khoảng trắng quanh dấu câu, thiếu dấu kết câu.
 *  - checkSpelling(): từ không có trong từ điển (assets/dict/en.txt) và có từ gần giống → gợi ý sửa.
 *  Đây là bộ kiểm tra theo luật nên chỉ bắt được các lỗi phổ biến, không thay thế người chấm.
 */

export type IssueKind = 'spelling' | 'grammar' | 'punctuation' | 'vocabulary' | 'coherence';

export interface WritingIssue {
  kind: IssueKind;
  /** Đoạn chữ bị lỗi (như trong bài) */
  text: string;
  /** Gợi ý sửa */
  fix: string;
  /** Giải thích ngắn (tiếng Việt) */
  note: string;
}

/** Từ điển chính tả: `common` = từ thường gặp (ưu tiên khi gợi ý), `all` = mọi từ hợp lệ */
export interface Dictionary {
  common: ReadonlySet<string>;
  all: ReadonlySet<string>;
}

/** Tách từ điển từ nội dung file en.txt (dòng 1: từ thường gặp, dòng 2: các từ còn lại) */
export function parseDictionary(raw: string): Dictionary {
  const [first = '', second = ''] = raw.split('\n');
  const common = new Set(first.split(' ').filter(Boolean));
  const all = new Set(common);
  for (const w of second.split(' ')) if (w) all.add(w);
  return { common, all };
}

// ---------------------------------------------------------------------------
//  NGỮ PHÁP & TRÌNH BÀY (luật)
// ---------------------------------------------------------------------------

/** Từ bắt đầu bằng nguyên âm nhưng đọc là phụ âm (dùng "a"), và từ bắt đầu bằng "h" câm (dùng "an") */
const A_EXCEPT = /^(uni|use|usu|uti|uro|eu|ewe|one|once|ufo|u\b)/;
const AN_EXCEPT = /^(hour|honest|honor|honour|heir|herb)/;
/** Viết tắt đọc bằng nguyên âm (an MBA, an SMS...) – bỏ qua để tránh báo nhầm */
const ACRONYM = /^([A-Z]{2,}|[A-Z](-|$))/;

const BASE_VERBS = 'have do go want like need make think know work live say get take give come see use find feel try leave call ' +
  'play study watch eat drink read write speak run walk help start begin stay buy pay travel visit enjoy prefer believe agree';
const BASE = new Set(BASE_VERBS.split(' '));
const THIRD: Record<string, string> = { have: 'has', do: 'does', go: 'goes', study: 'studies', watch: 'watches', try: 'tries', pay: 'pays', buy: 'buys', say: 'says', fly: 'flies' };
const third = (v: string) => THIRD[v] ?? (/(s|sh|ch|x|z|o)$/.test(v) ? v + 'es' : v + 's');

const PAST_TO_BASE: Record<string, string> = {
  went: 'go', did: 'do', made: 'make', took: 'take', got: 'get', saw: 'see', came: 'come', wrote: 'write', ate: 'eat', drank: 'drink',
  bought: 'buy', thought: 'think', knew: 'know', gave: 'give', found: 'find', felt: 'feel', left: 'leave', told: 'tell', said: 'say',
  spoke: 'speak', ran: 'run', began: 'begin', paid: 'pay', had: 'have', was: 'be', were: 'be', studied: 'study', played: 'play',
  worked: 'work', lived: 'live', visited: 'visit', watched: 'watch', wanted: 'want', liked: 'like', needed: 'need', used: 'use',
};
const S_TO_BASE: Record<string, string> = { goes: 'go', does: 'do', has: 'have', makes: 'make', takes: 'take', gets: 'get', works: 'work',
  wants: 'want', likes: 'like', needs: 'need', lives: 'live', says: 'say', comes: 'come', sees: 'see', uses: 'use', plays: 'play', studies: 'study' };

const UNCOUNTABLE: Record<string, string> = {
  informations: 'information', advices: 'advice', furnitures: 'furniture', equipments: 'equipment', knowledges: 'knowledge',
  homeworks: 'homework', luggages: 'luggage', baggages: 'baggage', feedbacks: 'feedback', evidences: 'evidence', staffs: 'staff',
  traffics: 'traffic', researchs: 'research', sceneries: 'scenery', vocabularies: 'vocabulary',
};

/** Từ đứng ngay trước vị trí khớp (chữ thường) */
function prevWord(m: RegExpExecArray): string {
  return (m.input.slice(0, m.index).match(/([A-Za-z']+)\W*$/)?.[1] ?? '').toLowerCase();
}

/** Trợ động từ / động từ khuyết thiếu / giới từ đứng trước đại từ: khi đó động từ sau đại từ ở dạng nguyên mẫu là đúng */
const BEFORE_BASE = new Set(('does did do doesn\'t didn\'t don\'t will would can could should may might must shall won\'t can\'t ' +
  'couldn\'t wouldn\'t shouldn\'t let lets make makes made help helps helped see saw watch watched hear heard to').split(' '));
const IT_VERBS = new Set('have do go make take need mean cost seem look become depend give get cause'.split(' '));
const PREPOSITIONS = new Set('of for to with about from by at than like as without between among'.split(' '));

/** "A"/"An" viết hoa giữa câu là nhãn hoặc tên riêng (Country A, Mr An), không phải mạo từ */
function isLabel(m: RegExpExecArray): boolean {
  if (!/^[A]/.test(m[1])) return false;
  if (/^(and|or|is|are|was|were|has|to|versus|vs)$/i.test(m[2])) return true;
  const before = m.input.slice(0, m.index).trimEnd();
  return before !== '' && !/[.!?:"]$/.test(before);
}

/** Dạng so sánh hơn/nhất của các tính từ ngắn thông dụng (more better, most biggest... là sai) */
const COMPARATIVES = new Set(['better', 'best', 'worse', 'worst', ...('big small large easy happy cheap fast high low old young long short strong rich poor busy ' +
  'healthy safe hard simple quick nice great wide close early late new clean warm cold hot heavy light tidy pretty tall small smart ' +
  'slow quiet loud near far deep friendly lucky funny noisy dirty sad bad').split(' ').flatMap((a) => {
  const stem = /y$/.test(a) ? a.slice(0, -1) + 'i' : /e$/.test(a) ? a.slice(0, -1) : /^(big|hot|sad)$/.test(a) ? a + a.slice(-1) : a;
  return [stem + 'er', stem + 'est'];
})]);

interface Rule {
  re: RegExp;
  kind: IssueKind;
  fix: (m: RegExpExecArray) => string | null;
  note: string;
}

/** Danh từ đếm được thông dụng ở dạng số ít (để bắt lỗi "many student", "every students") */
const SINGULAR_COUNTABLE = new Set(('student teacher person child friend book car house city country reason problem way idea people ' +
  'job worker employee company school university subject class lesson exam test question answer example result factor ' +
  'advantage disadvantage benefit drawback effect impact solution method opportunity difference change area place ' +
  'year month week day hour minute time thing family parent member government law rule country tourist visitor ' +
  'customer product service shop store restaurant hotel room computer phone device app website game film movie ' +
  'song picture photo language word sentence skill habit activity sport team player game event festival trip ' +
  'vehicle bus train plane road street building factory hospital doctor patient disease animal plant tree river').split(' ').filter((w) => w !== 'people'));

const IRREGULAR_PLURAL: Record<string, string> = { child: 'children', person: 'people', man: 'men', woman: 'women', foot: 'feet', tooth: 'teeth', mouse: 'mice' };

/** Số nhiều của danh từ */
function plural(n: string): string {
  if (IRREGULAR_PLURAL[n]) return IRREGULAR_PLURAL[n];
  if (/[^aeiou]y$/.test(n)) return n.slice(0, -1) + 'ies';
  if (/(s|sh|ch|x|z)$/.test(n)) return n + 'es';
  return n + 's';
}

/** Số ít của danh từ số nhiều (null nếu không đoán được) */
function singular(n: string): string | null {
  const irr = Object.entries(IRREGULAR_PLURAL).find(([, p]) => p === n);
  if (irr) return irr[0];
  if (n.endsWith('ies')) return n.slice(0, -3) + 'y';
  if (/(ses|shes|ches|xes|zes)$/.test(n)) return n.slice(0, -2);
  if (n.endsWith('s') && !n.endsWith('ss')) return n.slice(0, -1);
  return null;
}

/** V-ing của động từ */
function ing(v: string): string {
  if (v.endsWith('ie')) return v.slice(0, -2) + 'ying';
  if (/[^aeiou]e$/.test(v) && v !== 'be') return v.slice(0, -1) + 'ing';
  if (/^(stop|plan|run|swim|sit|get|put|shop|begin|travel)$/.test(v)) return v + v.slice(-1) + 'ing';
  return v + 'ing';
}

/** Động từ gốc từ dạng V-ing (null nếu không đoán được) */
function unIng(w: string): string | null {
  if (!w.endsWith('ing') || w.length < 5) return null;
  const s = w.slice(0, -3);
  for (const c of [s, s + 'e', s.slice(0, -1)]) if (BASE.has(c)) return c;
  return null;
}

const RULES: Rule[] = [
  // a / an
  {
    re: /\b([Aa])\s+([A-Za-z][\w'-]*)/g, kind: 'grammar',
    fix: (m) => (/^[aeiou]/i.test(m[2]) && !A_EXCEPT.test(m[2].toLowerCase()) && !ACRONYM.test(m[2]) && !isLabel(m) ? `${m[1]}n ${m[2]}` : null),
    note: 'Dùng "an" trước từ bắt đầu bằng nguyên âm (an apple, an hour).',
  },
  {
    re: /\b([Aa]n)\s+([A-Za-z][\w'-]*)/g, kind: 'grammar',
    fix: (m) => (!/^[aeiou]/i.test(m[2]) && !AN_EXCEPT.test(m[2].toLowerCase()) && !ACRONYM.test(m[2]) && !isLabel(m) ? `${m[1][0]} ${m[2]}` : null),
    note: 'Dùng "a" trước từ bắt đầu bằng phụ âm (a book, a university).',
  },
  // Hòa hợp chủ ngữ – động từ
  {
    re: /\b(he|she|it)\s+(\w+)\b/gi, kind: 'grammar',
    fix: (m) => {
      const v = m[2].toLowerCase();
      if (m[1] === 'IT' || !BASE.has(v) || BEFORE_BASE.has(prevWord(m))) return null;
      // "it" hay đứng ở vị trí tân ngữ (leave it like that) -> chỉ bắt các lỗi rất điển hình
      if (m[1].toLowerCase() === 'it' && !IT_VERBS.has(v)) return null;
      return `${m[1]} ${third(v)}`;
    },
    note: 'Chủ ngữ ngôi thứ ba số ít (he/she/it) thì động từ thêm -s/-es (she likes, he has).',
  },
  {
    re: /\b(I|you|we|they)\s+(has|does|goes|is|was)\b/gi, kind: 'grammar',
    fix: (m) => {
      if (PREPOSITIONS.has(prevWord(m))) return null;
      const s = m[1].toLowerCase();
      const v = m[2].toLowerCase();
      const map: Record<string, string> = { has: 'have', does: 'do', goes: 'go', is: s === 'i' ? 'am' : 'are', was: s === 'i' ? 'was' : 'were' };
      return map[v] === v ? null : `${m[1]} ${map[v]}`;
    },
    note: 'Chủ ngữ I/you/we/they đi với have/do/go/are (I am, they have).',
  },
  {
    re: /\b(he|she|it)\s+(are|were|don't|do not|haven't)\b/gi, kind: 'grammar',
    fix: (m) => `${m[1]} ${({ are: 'is', were: 'was', "don't": "doesn't", 'do not': 'does not', "haven't": "hasn't" } as Record<string, string>)[m[2].toLowerCase()]}`,
    note: 'Chủ ngữ số ít (he/she/it) đi với is/was/doesn\'t/hasn\'t.',
  },
  {
    re: /\b(people|children|men|women|police)\s+(is|was|has)\b/gi, kind: 'grammar',
    fix: (m) => (/\bof\s+(\w+\s+){0,2}$/i.test(m.input.slice(Math.max(0, m.index - 40), m.index)) ? null : `${m[1]} ${({ is: 'are', was: 'were', has: 'have' } as Record<string, string>)[m[2].toLowerCase()]}`),
    note: '"people/children/men/women" là danh từ số nhiều nên dùng are/were/have.',
  },
  {
    re: /\b(there)\s+(is|was)\s+(many|several|two|three|four|five|a lot of|lots of|some \w+s)\b/gi, kind: 'grammar',
    fix: (m) => `${m[1]} ${m[2].toLowerCase() === 'is' ? 'are' : 'were'} ${m[3]}`,
    note: 'Sau "there" dùng are/were khi danh từ phía sau là số nhiều.',
  },
  // Động từ sau động từ khuyết thiếu / did / to
  {
    re: /\b(can|could|will|would|should|must|may|might|did|didn't|does|doesn't|do|don't)\s+(not\s+)?(\w+)\b/gi, kind: 'grammar',
    fix: (m) => {
      const v = m[3].toLowerCase();
      const base = PAST_TO_BASE[v] ?? S_TO_BASE[v];
      if (!base || v === 'had' || v === 'used') return null; // "did had" hiếm, "used to" hợp lệ
      if ((v === 'was' || v === 'were') && /^(can|could|will|would|should|must|may|might)$/i.test(m[1])) return `${m[1]} ${m[2] ?? ''}be`;
      if (v === 'was' || v === 'were') return null;
      return `${m[1]} ${m[2] ?? ''}${base}`;
    },
    note: 'Sau can/will/should/did/does... động từ ở dạng nguyên mẫu (can go, didn\'t go).',
  },
  {
    re: /\b(must|can|should|could|will|would|might)\s+to\s+(\w+)/gi, kind: 'grammar',
    fix: (m) => `${m[1]} ${m[2]}`,
    note: 'Không dùng "to" sau động từ khuyết thiếu (must go, không phải must to go).',
  },
  // So sánh
  {
    re: /\b(more|most)\s+([a-z]+)\b/gi, kind: 'grammar',
    fix: (m) => (COMPARATIVES.has(m[2].toLowerCase()) ? m[2] : null),
    note: 'Không dùng "more/most" cùng tính từ đã thêm -er/-est (better, không phải more better).',
  },
  // Danh từ không đếm được
  {
    re: new RegExp(`\\b(${Object.keys(UNCOUNTABLE).join('|')})\\b`, 'gi'), kind: 'grammar',
    fix: (m) => UNCOUNTABLE[m[1].toLowerCase()],
    note: 'Danh từ không đếm được không thêm -s (information, advice, equipment...).',
  },
  // Lặp từ
  {
    re: /\b(\w+)\s+\1\b/gi, kind: 'grammar',
    fix: (m) => (/^(that|had|very|bye|so|no|oh|zero|one|two|three|four|five|six|seven|eight|nine|ten|\d+)$/i.test(m[1]) ? null : m[1]),
    note: 'Từ bị lặp hai lần liên tiếp.',
  },
  // Viết sai thường gặp
  {
    re: /\b(alot|everytime|eachother|infront|thankyou|incase)\b/gi, kind: 'spelling',
    fix: (m) => ({ alot: 'a lot', everytime: 'every time', eachother: 'each other', infront: 'in front', thankyou: 'thank you', incase: 'in case' } as Record<string, string>)[m[1].toLowerCase()],
    note: 'Viết tách thành hai từ.',
  },
  // ---------------- Lỗi điển hình của người học Việt Nam ----------------
  // many / several / a few / these / those + danh từ số ít
  {
    re: /\b(many|several|a few|few|these|those|various|numerous|two|three|four|five|both)\s+([a-z]+)\b/gi, kind: 'grammar',
    fix: (m) => (SINGULAR_COUNTABLE.has(m[2].toLowerCase()) && !/(teen|ty|-)$|^\d+$|^(one|two|three|four|five|six|seven|eight|nine|ten)$/.test(prevWord(m))
      ? `${m[1]} ${plural(m[2].toLowerCase())}` : null),
    note: 'Sau many / several / these / số đếm ≥ 2 danh từ đếm được phải ở dạng số nhiều.',
  },
  // a / one / each / every + danh từ số nhiều
  {
    re: /\b(each|every)\s+([a-z]+s)\b/gi, kind: 'grammar',
    fix: (m) => {
      const one = singular(m[2].toLowerCase());
      return one && SINGULAR_COUNTABLE.has(one) ? `${m[1]} ${one}` : null;
    },
    note: 'Sau each / every danh từ ở dạng số ít.',
  },
  // much + danh từ đếm được số nhiều
  {
    re: /\b(much)\s+([a-z]+s)\b/gi, kind: 'grammar',
    fix: (m) => {
      const s = singular(m[2].toLowerCase());
      return s && SINGULAR_COUNTABLE.has(s) ? `many ${m[2]}` : null;
    },
    note: 'Dùng many (không dùng much) với danh từ đếm được số nhiều.',
  },
  // be + agree / disagree / depend ("I am agree")
  {
    re: /\b(am|is|are|was|were)\s+(agree|disagree|depend|happen|exist|belong|consist)\b/gi, kind: 'grammar',
    fix: (m) => m[2],
    note: '"agree / depend / happen..." là động từ thường, không dùng với am/is/are (I agree, không phải I am agree).',
  },
  // danh từ chủ ngữ số ít + động từ nguyên mẫu ("my brother take")
  {
    re: /\b(my|his|her|our|their|your|the|this|that|every|each)\s+(brother|sister|mother|father|friend|teacher|company|government|city|country|family|child|student|person|man|woman|boss|manager|school|team|son|daughter|wife|husband|neighbour|neighbor|colleague|doctor|baby|town|society|technology|internet|system|world)\s+(\w+)\b/gi,
    kind: 'grammar',
    fix: (m) => (BASE.has(m[3].toLowerCase()) && !BEFORE_BASE.has(prevWord(m)) ? `${m[1]} ${m[2]} ${third(m[3].toLowerCase())}` : null),
    note: 'Chủ ngữ là danh từ số ít thì động từ thì hiện tại thêm -s/-es (my brother takes).',
  },
  // everyone / somebody / nobody + động từ nguyên mẫu
  {
    re: /\b(everyone|everybody|someone|somebody|no one|nobody|anyone|anybody|everything|nothing)\s+(\w+)\b/gi, kind: 'grammar',
    fix: (m) => (BASE.has(m[2].toLowerCase()) && !BEFORE_BASE.has(prevWord(m)) ? `${m[1]} ${third(m[2].toLowerCase())}` : m[2].toLowerCase() === 'are' ? `${m[1]} is` : null),
    note: 'everyone / somebody / nobody... là số ít: động từ thêm -s (everyone knows, everyone is).',
  },
  // enjoy / avoid / finish / mind / suggest / consider / keep + to V
  {
    re: /\b(enjoy|enjoys|enjoyed|avoid|avoids|avoided|finish|finished|mind|suggest|suggested|consider|considered|keep|kept|practise|practice|recommend|admit|deny|miss|risk)\s+to\s+([a-z]+)\b/gi, kind: 'grammar',
    fix: (m) => `${m[1]} ${ing(m[2].toLowerCase())}`,
    note: 'Sau enjoy / avoid / finish / suggest / consider... động từ ở dạng V-ing.',
  },
  // want / need / decide / plan / hope / try + to + V-ing / V-ed
  {
    re: /\b(want|wants|wanted|need|needs|needed|decide|decided|plan|planned|hope|hoped|try|tried|learn|learned|would like|going)\s+to\s+([a-z]+ing)\b/gi, kind: 'grammar',
    fix: (m) => {
      const base = unIng(m[2].toLowerCase());
      return base && BASE.has(base) ? `${m[1]} to ${base}` : null;
    },
    note: 'Sau want / need / decide / plan... + to là động từ nguyên mẫu (want to go).',
  },
  // look forward to + V nguyên mẫu
  {
    re: /\b(look|looking|looked)\s+forward\s+to\s+([a-z]+)\b/gi, kind: 'grammar',
    fix: (m) => (/ing$/.test(m[2]) || /^(the|a|an|your|our|my|his|her|their|it|this|that|these|those|you|him|them|us|me|seeing|hearing)$/i.test(m[2]) ? null : `${m[1]} forward to ${ing(m[2].toLowerCase())}`),
    note: 'look forward to + V-ing (I look forward to hearing from you).',
  },
  // make / let + tân ngữ + to V
  {
    re: /\b(make|makes|made|let|lets)\s+(me|you|him|her|us|them|people|students|children)\s+to\s+([a-z]+)\b/gi, kind: 'grammar',
    fix: (m) => `${m[1]} ${m[2]} ${m[3]}`,
    note: 'make / let + tân ngữ + động từ nguyên mẫu không "to" (make me feel).',
  },
  // since + khoảng thời gian
  {
    re: /\bsince\s+((?:\d+|two|three|four|five|six|seven|eight|nine|ten|many|several|a few)\s+(years|months|weeks|days|hours))\b/gi, kind: 'grammar',
    fix: (m) => `for ${m[1]}`,
    note: 'Dùng for + khoảng thời gian (for five years), since + mốc thời gian (since 2020).',
  },
  // Giới từ / cụm cố định hay sai
  {
    re: /\b(discuss|discussed|discussing)\s+about\b|\b(explain|explained)\s+(me|him|her|us|them)\b|\b(married|marry)\s+with\b|\bdifferent\s+with\b|\b(depend|depends|depended|depending)\s+(in|of)\b|\bin the other hand\b|\baccording to me\b|\b(arrive|arrived|arrives)\s+to\b|\binterested\s+(about|on|with)\b|\bgood in\b|\bemphasi[sz]e\s+on\b|\bcope up with\b|\bin the same time\b|\bon the contrary to\b/gi,
    kind: 'grammar',
    fix: (m) => {
      const t = m[0].toLowerCase();
      const map: [RegExp, string][] = [
        [/^(discuss\w*) about$/, '$1'], [/^(explain\w*) (\w+)$/, '$1 to $2'], [/^(marr\w*) with$/, '$1 to'], [/^different with$/, 'different from'],
        [/^(depend\w*) (in|of)$/, '$1 on'], [/^in the other hand$/, 'on the other hand'], [/^according to me$/, 'in my opinion'],
        [/^(arriv\w*) to$/, '$1 at/in'], [/^interested \w+$/, 'interested in'], [/^good in$/, 'good at'],
        [/^(emphasi[sz]e) on$/, '$1'], [/^cope up with$/, 'cope with'], [/^in the same time$/, 'at the same time'], [/^on the contrary to$/, 'contrary to'],
      ];
      for (const [re, rep] of map) if (re.test(t)) return t.replace(re, rep);
      return null;
    },
    note: 'Sai giới từ / cụm từ cố định.',
  },
  // a / an + danh từ không đếm được
  {
    re: /\b(an?)\s+(advice|information|homework|furniture|equipment|luggage|baggage|knowledge|research|news|traffic|weather|money|evidence|feedback|progress|work|music)\b/gi, kind: 'grammar',
    fix: (m) => {
      const after = m.input.slice(m.index + m[0].length, m.index + m[0].length + 12);
      const alone = /^\s*([.,;:!?)]|$|(about|for|on|from|to|is|was|that|which|in|and)\b)/i.test(after);
      return alone && prevWord(m) !== 'such' ? `${m[2]} (bỏ "${m[1]}")` : null;
    },
    note: 'Danh từ không đếm được không đi với a / an (some advice, a piece of advice).',
  },
  // Trình bày
  { re: /(^|[^\w])i(?=\s|'m|'ve|'d|'ll)/g, kind: 'punctuation', fix: (m) => `${m[1]}I`, note: 'Đại từ "I" luôn viết hoa.' },
  { re: /(\w+)\s+([,.;:!?])/g, kind: 'punctuation', fix: (m) => `${m[1]}${m[2]}`, note: 'Không đặt khoảng trắng trước dấu câu.' },
  {
    re: /\b([a-z]{3,})\.([a-z]{3,})\b/g, kind: 'punctuation',
    fix: (m) => (/^(com|org|net|edu|gov|html|vn|uk|io|co|info|example)$/.test(m[2]) ? null : `${m[1]}. ${m[2]}`),
    note: 'Cần một khoảng trắng sau dấu chấm.',
  },
  { re: /([a-z])([,;:])([A-Za-z])/g, kind: 'punctuation', fix: (m) => `${m[1]}${m[2]} ${m[3]}`, note: 'Cần một khoảng trắng sau dấu phẩy / chấm phẩy.' },
];

/** Bắt lỗi ngữ pháp và trình bày bằng luật */
export function checkGrammar(text: string): WritingIssue[] {
  const out: WritingIssue[] = [];
  const seen = new Set<string>();
  const add = (issue: WritingIssue) => {
    const key = issue.kind + '|' + issue.text.toLowerCase();
    if (seen.has(key) || issue.text.trim() === issue.fix.trim()) return;
    seen.add(key);
    out.push(issue);
  };
  for (const r of RULES) {
    r.re.lastIndex = 0;
    let m: RegExpExecArray | null;
    while ((m = r.re.exec(text))) {
      const fix = r.fix(m);
      if (fix !== null) add({ kind: r.kind, text: m[0].trim(), fix: fix.trim(), note: r.note });
      if (m[0] === '') r.re.lastIndex++;
    }
  }
  // Viết hoa đầu câu
  for (const m of text.matchAll(/(?:^|[.!?]\s+)([a-z][\w']*)/g)) {
    if (/\b(a\.m|p\.m|mr|mrs|ms|dr|st|vs|etc|e\.g|i\.e|no|approx|jr|sr|inc|ltd|co)\.\s+$/i.test(text.slice(0, m.index + m[0].length - m[1].length))) continue;
    add({ kind: 'punctuation', text: m[1], fix: m[1][0].toUpperCase() + m[1].slice(1), note: 'Viết hoa chữ cái đầu câu.' });
  }
  // Dấu kết câu ở cuối mỗi đoạn
  for (const para of text.split(/\n\s*\n|\n/).map((p) => p.trim()).filter((p) => p.split(/\s+/).length >= 6)) {
    if (!/[.!?:"')]$/.test(para) && !/\b(regards|sincerely|wishes|thanks|cheers|yours|best)\b[^.!?]*$/i.test(para.slice(-60))) {
      const tail = para.split(/\s+/).slice(-3).join(' ');
      add({ kind: 'punctuation', text: tail, fix: tail + '.', note: 'Kết thúc câu/đoạn bằng dấu chấm.' });
    }
  }
  return out;
}

// ---------------------------------------------------------------------------
//  CHÍNH TẢ (từ điển)
// ---------------------------------------------------------------------------

const ALPHA = 'abcdefghijklmnopqrstuvwxyz';

/** Các từ cách `w` đúng một thao tác sửa (thêm, bớt, thay, đổi chỗ hai chữ cạnh nhau) */
function edits1(w: string): string[] {
  const out: string[] = [];
  for (let i = 0; i <= w.length; i++) {
    const a = w.slice(0, i);
    const b = w.slice(i);
    if (b) out.push(a + b.slice(1));
    if (b.length > 1) out.push(a + b[1] + b[0] + b.slice(2));
    for (const c of ALPHA) {
      if (b) out.push(a + c + b.slice(1));
      out.push(a + c + b);
    }
  }
  return out;
}

/** Dạng gốc có thể có của một từ đã chia (để không báo nhầm các dạng biến đổi hợp lệ) */
function baseForms(w: string): string[] {
  const out: string[] = [];
  for (const [suf, rep] of [['ies', 'y'], ['ied', 'y'], ['es', ''], ['s', ''], ['ed', ''], ['ed', 'e'], ['ing', ''], ['ing', 'e'], ['ly', ''], ['er', ''], ['est', ''], ["'s", '']] as const) {
    if (w.endsWith(suf) && w.length - suf.length >= 3) out.push(w.slice(0, -suf.length) + rep);
  }
  return out;
}

/** Gợi ý từ đúng cho một từ sai chính tả (ưu tiên từ thường gặp) */
export function suggest(word: string, dict: Dictionary): string | null {
  const c1 = edits1(word).filter((x) => x[0] === word[0] && dict.all.has(x));
  const best = c1.find((x) => dict.common.has(x)) ?? c1[0];
  if (best) return best;
  if (word.length >= 7) {
    for (const e of edits1(word)) {
      const c2 = edits1(e).find((x) => x[0] === word[0] && dict.common.has(x));
      if (c2) return c2;
    }
  }
  return null;
}

/** Bắt lỗi chính tả: từ không có trong từ điển và có từ gần giống để gợi ý */
export function checkSpelling(text: string, dict: Dictionary): WritingIssue[] {
  const out: WritingIssue[] = [];
  // Chưa nạp được từ điển thì bỏ qua (tránh báo mọi từ là sai)
  if (dict.all.size < 1000) return out;
  let looked = 0;
  const seen = new Set<string>();
  for (const m of text.matchAll(/(^|[^A-Za-z'])([A-Za-z]+(?:'[a-z]+)?)/g)) {
    const raw = m[2];
    const w = raw.toLowerCase();
    if (seen.has(w) || w.length < 3 || dict.all.has(w)) continue;
    seen.add(w);
    // Bỏ qua tên riêng / viết tắt viết hoa giữa câu
    const before = text.slice(0, m.index + m[1].length).trimEnd();
    if (/^[A-Z]/.test(raw) && before && !/[.!?]$/.test(before)) continue;
    if (/^[A-Z]{2,}$/.test(raw)) continue;
    if (baseForms(w).some((b) => dict.all.has(b))) continue;
    if (++looked > 40) break; // bài quá nhiều từ lạ: chỉ gợi ý 40 từ đầu
    const fix = suggest(w, dict);
    if (fix) out.push({ kind: 'spelling', text: raw, fix: /^[A-Z]/.test(raw) ? fix[0].toUpperCase() + fix.slice(1) : fix, note: 'Có thể viết sai chính tả.' });
  }
  return out;
}

/** Từ quan trọng (bỏ từ chức năng) để đánh giá bài viết có bám sát đề không */
const FUNCTION_WORDS = new Set(('a an the and or but so to of in on at for with from by as is are was were be been being am do does did have has had ' +
  'i you he she it we they me him her us them my your his its our their this that these those there here what which who when where why how ' +
  'not no yes very can could will would should may might must also more most some any all one other such than then about into over many much ' +
  'should write words least give reasons include relevant examples your own knowledge experience discuss both views opinion extent agree ' +
  'disagree essay letter email respond following summarise summarize information selecting reporting main features make comparisons where ' +
  // từ chung chung của đề, bài nào cũng có thể dùng -> không dùng làm từ khóa chủ đề
  'people person different show shows below above table chart graph diagram percentage proportion number numbers change changes ' +
  'changed between year years period compare describe using used important today nowadays some think believe others').split(' '));

const stemWord = (w: string) => w.replace(/(ies|es|s|ed|ing|ly)$/, '');

/**
 * Mức độ bám đề 0..1: tỉ lệ từ khóa chủ đề của đề xuất hiện trong bài (so theo gốc từ).
 * `data` (bảng số liệu Task 1, mỗi dòng "nhãn | số | số"): bài phải nhắc tới các hạng mục trong bảng.
 */
export function topicCoverage(prompt: string, text: string, data?: string): { score: number; missing: string[] } {
  const used = new Set((text.toLowerCase().match(/[a-z]{3,}/g) ?? []).map(stemWord));
  const keys = [...new Set((prompt.toLowerCase().match(/[a-z]{4,}/g) ?? []).filter((w) => !FUNCTION_WORDS.has(w)))];
  const hit = keys.filter((k) => used.has(stemWord(k)));
  let score = keys.length ? Math.min(1, hit.length / Math.max(2, Math.min(5, keys.length * 0.4))) : 1;
  const missing = keys.filter((k) => !used.has(stemWord(k)));
  if (data) {
    // Hạng mục của bảng: cột đầu của các dòng (Car, Bus, Country A...) và tiêu đề các cột chữ
    const rows = data.split('\n').map((l) => l.split('|').map((c) => c.trim()));
    const labels = [...rows.slice(1).map((r) => r[0]), ...rows[0].slice(1)]
      .map((l) => (l.toLowerCase().match(/[a-z]{3,}/g) ?? []).filter((w) => !FUNCTION_WORDS.has(w)))
      .filter((ws) => ws.length);
    if (labels.length) {
      const seen = labels.filter((ws) => ws.some((w) => used.has(stemWord(w))));
      score = Math.min(score, seen.length / labels.length / 0.6);
      missing.unshift(...labels.filter((ws) => !seen.includes(ws)).map((ws) => ws.join(' ')));
    }
  }
  return { score: Math.max(0, Math.min(1, score)), missing: [...new Set(missing)].slice(0, 6) };
}
