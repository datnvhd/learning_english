/**
 * ============================================================================
 *  grammar.ts – 12 chủ điểm ngữ pháp cốt lõi (giải thích tiếng Việt, ví dụ, bài luyện)
 * ============================================================================
 *  Mỗi bài gồm:
 *   - summary : giải thích ngắn gọn bằng tiếng Việt
 *   - rules   : công thức / quy tắc (form) kèm ghi chú
 *   - examples: câu ví dụ EN–VI (dùng để nghe và làm bài sắp xếp câu)
 *   - quiz    : câu điền chỗ trống: [câu có ____, đáp án đúng, sai1, sai2, sai3?, giải thích]
 *  Thêm bài mới: thêm một phần tử vào GRAMMAR (id không trùng).
 */

export interface GrammarRule {
  form: string;
  note: string;
}

export interface GrammarLesson {
  id: string;
  icon: string;
  title: string;
  titleEn: string;
  level: 'starter' | 'basic' | 'intermediate';
  summary: string;
  rules: GrammarRule[];
  examples: [string, string][];
  /** [câu có ____, đáp án đúng, các đáp án sai..., giải thích] – phần tử cuối là giải thích */
  quiz: string[][];
  tip: string;
}

export const GRAMMAR: GrammarLesson[] = [
  {
    id: 'to-be', icon: '🟦', title: 'Động từ "to be"', titleEn: 'The verb "to be"', level: 'starter',
    summary: '"To be" nghĩa là "thì, là, ở". Hiện tại có 3 dạng: am (đi với I), is (he/she/it và danh từ số ít), are (you/we/they và số nhiều).',
    rules: [
      { form: 'I am / I\'m', note: 'Chỉ dùng với I' },
      { form: 'He / She / It is', note: 'Ngôi thứ ba số ít' },
      { form: 'You / We / They are', note: 'Số nhiều và "you"' },
      { form: 'Phủ định: am not / isn\'t / aren\'t', note: 'Thêm "not" sau to be' },
      { form: 'Câu hỏi: Is she...? Are you...?', note: 'Đảo to be lên đầu câu' },
    ],
    examples: [['I am a student.', 'Tôi là học sinh.'], ['She is very kind.', 'Cô ấy rất tốt bụng.'], ['They are in the park.', 'Họ đang ở công viên.'], ['Is your brother at home?', 'Anh trai bạn có ở nhà không?']],
    quiz: [
      ['My mother ____ a doctor.', 'is', 'am', 'are', 'be', 'Chủ ngữ "my mother" là ngôi thứ ba số ít nên dùng "is".'],
      ['We ____ happy today.', 'are', 'is', 'am', 'be', '"We" đi với "are".'],
      ['I ____ ten years old.', 'am', 'is', 'are', 'be', '"I" luôn đi với "am".'],
      ['The books ____ on the table.', 'are', 'is', 'am', 'was', '"The books" là số nhiều nên dùng "are".'],
      ['____ your sister a teacher?', 'Is', 'Are', 'Am', 'Do', 'Câu hỏi với "your sister" (số ít): đảo "Is" lên đầu.'],
      ['He ____ not hungry.', 'is', 'are', 'am', 'do', 'Phủ định: He is not (isn\'t).'],
      ['You and I ____ good friends.', 'are', 'is', 'am', 'be', '"You and I" = "we" nên dùng "are".'],
      ['It ____ cold outside.', 'is', 'are', 'am', 'be', '"It" đi với "is".'],
    ],
    tip: 'Mẹo: I → am, số ít → is, số nhiều → are.',
  },
  {
    id: 'present-simple', icon: '🔁', title: 'Thì hiện tại đơn', titleEn: 'Present simple', level: 'starter',
    summary: 'Dùng cho thói quen, sự thật hiển nhiên, lịch trình. Với he/she/it, động từ thêm -s/-es. Phủ định và câu hỏi dùng do/does.',
    rules: [
      { form: 'I / You / We / They + V', note: 'I play football.' },
      { form: 'He / She / It + V-s/es', note: 'She plays, he watches, it goes' },
      { form: 'don\'t / doesn\'t + V (nguyên mẫu)', note: 'He doesn\'t like milk.' },
      { form: 'Do / Does + S + V?', note: 'Does she speak English?' },
      { form: 'Dấu hiệu: always, usually, often, every day...', note: 'Trạng từ tần suất' },
    ],
    examples: [['I get up at six every day.', 'Tôi dậy lúc sáu giờ mỗi ngày.'], ['She works in a bank.', 'Cô ấy làm ở ngân hàng.'], ['The sun rises in the east.', 'Mặt trời mọc ở hướng đông.'], ['Does he play the guitar?', 'Anh ấy có chơi ghi-ta không?']],
    quiz: [
      ['She ____ to school by bus.', 'goes', 'go', 'going', 'is go', 'She (ngôi 3 số ít) + goes (go thêm -es).'],
      ['They ____ English on Mondays.', 'study', 'studies', 'studying', 'is study', '"They" dùng động từ nguyên mẫu.'],
      ['My father ____ coffee every morning.', 'drinks', 'drink', 'drinking', 'are drink', '"My father" ngôi 3 số ít → drinks.'],
      ['He ____ like vegetables.', 'doesn\'t', 'don\'t', 'isn\'t', 'not', 'Phủ định với "he" dùng "doesn\'t" + V.'],
      ['____ you live near here?', 'Do', 'Does', 'Are', 'Is', 'Câu hỏi với "you" dùng "Do".'],
      ['Water ____ at 100 degrees Celsius.', 'boils', 'boil', 'is boiling', 'boiled', 'Sự thật hiển nhiên dùng hiện tại đơn; "water" số ít → boils.'],
      ['My cat ____ on the sofa all day.', 'sleeps', 'sleep', 'sleeping', 'are sleeping', '"My cat" số ít → sleeps.'],
      ['Does she ____ tennis?', 'play', 'plays', 'playing', 'played', 'Sau "Does" động từ trở về nguyên mẫu.'],
    ],
    tip: 'Nhớ "s" của he/she/it: He playS, she watchES.',
  },
  {
    id: 'present-continuous', icon: '⏳', title: 'Thì hiện tại tiếp diễn', titleEn: 'Present continuous', level: 'starter',
    summary: 'Diễn tả hành động đang xảy ra lúc nói hoặc kế hoạch gần. Công thức: am/is/are + V-ing.',
    rules: [
      { form: 'S + am/is/are + V-ing', note: 'I am reading a book.' },
      { form: 'Phủ định: am/is/are + not + V-ing', note: 'They aren\'t sleeping.' },
      { form: 'Câu hỏi: Am/Is/Are + S + V-ing?', note: 'Are you listening?' },
      { form: 'Dấu hiệu: now, right now, at the moment, Look!', note: 'Hành động đang diễn ra' },
    ],
    examples: [['I am cooking dinner now.', 'Bây giờ tôi đang nấu bữa tối.'], ['Look! It is raining.', 'Nhìn kìa! Trời đang mưa.'], ['They are playing in the garden.', 'Bọn trẻ đang chơi trong vườn.'], ['What are you doing?', 'Bạn đang làm gì vậy?']],
    quiz: [
      ['Listen! The baby ____.', 'is crying', 'cries', 'cry', 'are crying', '"Listen!" báo hiệu đang xảy ra; "the baby" số ít → is crying.'],
      ['We ____ TV right now.', 'are watching', 'watch', 'is watching', 'watches', '"right now" → hiện tại tiếp diễn; we → are.'],
      ['She ____ a letter at the moment.', 'is writing', 'writes', 'is write', 'writing', 'at the moment → is + V-ing.'],
      ['I ____ not working today.', 'am', 'is', 'are', 'do', '"I" đi với "am".'],
      ['____ they studying now?', 'Are', 'Is', 'Do', 'Does', 'Câu hỏi: Are + they + V-ing?'],
      ['Look! The bus ____.', 'is coming', 'comes', 'come', 'coming', '"Look!" → đang xảy ra.'],
      ['My parents ____ dinner in the kitchen.', 'are making', 'is making', 'makes', 'making', '"My parents" số nhiều → are making.'],
      ['He is ____ a cup of tea.', 'drinking', 'drinks', 'drink', 'drank', 'Sau "is" dùng V-ing.'],
    ],
    tip: 'Thấy now, Look!, Listen! → nghĩ ngay đến "be + V-ing".',
  },
  {
    id: 'past-simple', icon: '⏮️', title: 'Thì quá khứ đơn', titleEn: 'Past simple', level: 'basic',
    summary: 'Diễn tả hành động đã xảy ra và kết thúc trong quá khứ. Động từ có quy tắc thêm -ed; động từ bất quy tắc phải học thuộc (go → went).',
    rules: [
      { form: 'S + V-ed / V2', note: 'I played, she went, they saw' },
      { form: 'Phủ định: didn\'t + V (nguyên mẫu)', note: 'He didn\'t come.' },
      { form: 'Câu hỏi: Did + S + V?', note: 'Did you see the movie?' },
      { form: 'Was / Were', note: 'Quá khứ của to be: I/he/she/it was, you/we/they were' },
      { form: 'Dấu hiệu: yesterday, last week, ago, in 2020', note: 'Thời điểm đã qua' },
    ],
    examples: [['I visited my grandmother yesterday.', 'Hôm qua tôi đã thăm bà.'], ['We went to the beach last summer.', 'Mùa hè năm ngoái chúng tôi đi biển.'], ['She didn\'t finish her homework.', 'Cô ấy đã không làm xong bài tập.'], ['Did you enjoy the party?', 'Bạn có vui ở bữa tiệc không?']],
    quiz: [
      ['I ____ a new bike last week.', 'bought', 'buy', 'buyed', 'buys', '"buy" là động từ bất quy tắc: bought.'],
      ['She ____ to Da Nang two years ago.', 'went', 'goes', 'go', 'going', '"ago" → quá khứ; go → went.'],
      ['They ____ football yesterday.', 'played', 'play', 'plays', 'playing', 'Động từ có quy tắc thêm -ed.'],
      ['He didn\'t ____ the answer.', 'know', 'knew', 'knows', 'knowing', 'Sau "didn\'t" dùng động từ nguyên mẫu.'],
      ['____ you watch the match last night?', 'Did', 'Do', 'Were', 'Was', 'Câu hỏi quá khứ dùng "Did".'],
      ['We ____ very tired after the trip.', 'were', 'was', 'are', 'did', '"We" + were (quá khứ của be).'],
      ['The film ____ really interesting.', 'was', 'were', 'is', 'did', '"The film" số ít → was.'],
      ['My brother ____ his phone on the bus.', 'left', 'leaved', 'leave', 'leaves', '"leave" bất quy tắc: left.'],
    ],
    tip: 'Bất quy tắc hay gặp: go–went, see–saw, eat–ate, buy–bought, take–took, make–made.',
  },
  {
    id: 'future', icon: '🔮', title: 'Tương lai: will & be going to', titleEn: 'Future: will / be going to', level: 'basic',
    summary: '"Will" dùng cho quyết định tức thời, dự đoán, lời hứa. "Be going to" dùng cho kế hoạch đã định sẵn hoặc dự đoán có dấu hiệu rõ ràng.',
    rules: [
      { form: 'S + will + V', note: 'I will help you. (quyết định ngay)' },
      { form: 'S + won\'t + V', note: 'It won\'t rain tomorrow.' },
      { form: 'S + am/is/are going to + V', note: 'We are going to visit Hue. (kế hoạch)' },
      { form: 'Dấu hiệu: tomorrow, next week, soon, in the future', note: 'Thời điểm tương lai' },
    ],
    examples: [['I will call you tonight.', 'Tối nay tôi sẽ gọi cho bạn.'], ['We are going to travel to Japan next month.', 'Tháng sau chúng tôi sẽ đi Nhật.'], ['Look at the clouds! It is going to rain.', 'Nhìn mây kìa! Trời sắp mưa.'], ['Will you come to my party?', 'Bạn sẽ đến bữa tiệc của tôi chứ?']],
    quiz: [
      ['The phone is ringing. I ____ answer it.', 'will', 'am going to', 'am', 'did', 'Quyết định ngay lúc nói → will.'],
      ['We ____ visit our grandparents next weekend. We bought the tickets.', 'are going to', 'will', 'are', 'going', 'Kế hoạch đã chuẩn bị → be going to.'],
      ['Look at those dark clouds! It ____ rain.', 'is going to', 'will', 'rains', 'rained', 'Có dấu hiệu rõ ràng → be going to.'],
      ['I promise I ____ tell anyone.', 'won\'t', 'don\'t', 'am not going', 'didn\'t', 'Lời hứa → will/won\'t.'],
      ['She ____ be a doctor in the future.', 'will', 'is', 'does', 'was', 'Dự đoán tương lai → will.'],
      ['____ you help me with this box?', 'Will', 'Are', 'Do', 'Going', 'Lời đề nghị/nhờ vả: Will you...?'],
      ['They are going ____ a new house.', 'to buy', 'buy', 'buying', 'bought', 'be going TO + V.'],
      ['I think it ____ be sunny tomorrow.', 'will', 'is going', 'is', 'does', '"I think" + dự đoán → will.'],
    ],
    tip: 'Đã lên kế hoạch → going to. Mới nghĩ ra → will.',
  },
  {
    id: 'articles', icon: '🅰️', title: 'Mạo từ a / an / the', titleEn: 'Articles', level: 'starter',
    summary: '"A" đứng trước âm phụ âm, "an" trước âm nguyên âm (a, e, i, o, u theo cách ĐỌC). "The" dùng khi người nghe đã biết đối tượng hoặc vật duy nhất.',
    rules: [
      { form: 'a + âm phụ âm', note: 'a book, a university (/juː/)' },
      { form: 'an + âm nguyên âm', note: 'an apple, an hour (h câm)' },
      { form: 'the + vật đã biết / duy nhất', note: 'the sun, the book I bought' },
      { form: 'Không dùng mạo từ', note: 'Danh từ số nhiều nói chung: I like cats.' },
    ],
    examples: [['I have an apple and a banana.', 'Tôi có một quả táo và một quả chuối.'], ['The sun is very hot today.', 'Hôm nay mặt trời rất nóng.'], ['She is an engineer.', 'Cô ấy là kỹ sư.'], ['I saw a dog. The dog was very big.', 'Tôi thấy một con chó. Con chó đó rất to.']],
    quiz: [
      ['She eats ____ egg every morning.', 'an', 'a', 'the', '(không dùng)', '"egg" bắt đầu bằng âm nguyên âm → an.'],
      ['He is ____ university student.', 'a', 'an', 'the', '(không dùng)', '"university" đọc /juː/ (phụ âm) → a.'],
      ['We waited for ____ hour.', 'an', 'a', 'the', '(không dùng)', '"hour" có h câm → an.'],
      ['____ moon is beautiful tonight.', 'The', 'A', 'An', '(không dùng)', 'Mặt trăng là duy nhất → the.'],
      ['I bought a book. ____ book is very funny.', 'The', 'A', 'An', '(không dùng)', 'Nhắc lại vật đã nói → the.'],
      ['My uncle is ____ doctor.', 'a', 'an', 'the', '(không dùng)', 'Nghề nghiệp số ít → a/an; "doctor" phụ âm → a.'],
      ['Can you close ____ door, please?', 'the', 'a', 'an', '(không dùng)', 'Cánh cửa cụ thể cả hai người đều biết → the.'],
      ['I want to buy ____ umbrella.', 'an', 'a', 'the', '(không dùng)', '"umbrella" bắt đầu bằng âm nguyên âm → an.'],
    ],
    tip: 'Nghe âm đầu chứ không nhìn chữ: an hour, a uniform.',
  },
  {
    id: 'countable', icon: '🍎', title: 'Danh từ đếm được & không đếm được', titleEn: 'Countable & uncountable nouns', level: 'basic',
    summary: 'Danh từ đếm được có số ít/số nhiều (an apple, two apples). Danh từ không đếm được không có số nhiều (water, rice, information). Dùng many với đếm được, much với không đếm được.',
    rules: [
      { form: 'many + danh từ số nhiều', note: 'many books, many people' },
      { form: 'much + danh từ không đếm được', note: 'much water, much time' },
      { form: 'a lot of + cả hai loại', note: 'a lot of friends, a lot of money' },
      { form: 'some (khẳng định) / any (phủ định, câu hỏi)', note: 'I have some bread. Do you have any milk?' },
      { form: 'How many...? / How much...?', note: 'Hỏi số lượng / lượng' },
    ],
    examples: [['How many students are there in your class?', 'Lớp bạn có bao nhiêu học sinh?'], ['There isn\'t much milk in the fridge.', 'Không còn nhiều sữa trong tủ lạnh.'], ['I need some information.', 'Tôi cần một ít thông tin.'], ['She has a lot of friends.', 'Cô ấy có rất nhiều bạn.']],
    quiz: [
      ['How ____ apples do you want?', 'many', 'much', 'any', 'a', '"apples" đếm được, số nhiều → many.'],
      ['How ____ money do you have?', 'much', 'many', 'a lot', 'few', '"money" không đếm được → much.'],
      ['There isn\'t ____ sugar left.', 'much', 'many', 'a', 'few', '"sugar" không đếm được, câu phủ định → much.'],
      ['I have ____ bread for breakfast.', 'some', 'any', 'many', 'a', 'Câu khẳng định với danh từ không đếm được → some.'],
      ['Do you have ____ questions?', 'any', 'some', 'much', 'a', 'Câu hỏi → any.'],
      ['She drinks a lot of ____ every day.', 'water', 'waters', 'a water', 'the waters', '"water" không đếm được, không thêm -s.'],
      ['There are many ____ in the park.', 'children', 'child', 'childs', 'a child', 'Số nhiều bất quy tắc: child → children.'],
      ['Can I have some ____, please?', 'information', 'informations', 'an information', 'many information', '"information" không đếm được.'],
    ],
    tip: 'Không đếm được hay gặp: water, milk, rice, bread, money, information, advice, homework.',
  },
  {
    id: 'prepositions-time', icon: '🕒', title: 'Giới từ chỉ thời gian: in / on / at', titleEn: 'Prepositions of time', level: 'starter',
    summary: '"At" cho giờ và thời điểm cụ thể; "on" cho ngày, thứ; "in" cho tháng, năm, mùa, buổi và khoảng thời gian dài.',
    rules: [
      { form: 'at + giờ / thời điểm', note: 'at 7 o\'clock, at noon, at night, at the weekend' },
      { form: 'on + ngày / thứ', note: 'on Monday, on 2 September, on my birthday' },
      { form: 'in + tháng / năm / mùa / buổi', note: 'in May, in 2025, in summer, in the morning' },
    ],
    examples: [['The class starts at eight o\'clock.', 'Lớp học bắt đầu lúc tám giờ.'], ['My birthday is on Friday.', 'Sinh nhật tôi vào thứ Sáu.'], ['We go swimming in summer.', 'Chúng tôi đi bơi vào mùa hè.'], ['I read books in the evening.', 'Tôi đọc sách vào buổi tối.']],
    quiz: [
      ['I wake up ____ six o\'clock.', 'at', 'on', 'in', 'by', 'Giờ cụ thể → at.'],
      ['We have English ____ Tuesday.', 'on', 'in', 'at', 'to', 'Thứ trong tuần → on.'],
      ['She was born ____ 2015.', 'in', 'on', 'at', 'from', 'Năm → in.'],
      ['It is very hot ____ July.', 'in', 'on', 'at', 'by', 'Tháng → in.'],
      ['Let\'s meet ____ noon.', 'at', 'in', 'on', 'for', '"noon" (giữa trưa) là thời điểm → at.'],
      ['He goes jogging ____ the morning.', 'in', 'at', 'on', 'by', 'Buổi sáng → in the morning.'],
      ['We give presents ____ Christmas Day.', 'on', 'in', 'at', 'to', 'Một ngày cụ thể → on.'],
      ['Owls hunt ____ night.', 'at', 'in', 'on', 'by', 'Cụm cố định: at night.'],
    ],
    tip: 'Nhỏ → lớn: AT (giờ) → ON (ngày) → IN (tháng, năm).',
  },
  {
    id: 'comparison', icon: '📏', title: 'So sánh hơn & so sánh nhất', titleEn: 'Comparatives & superlatives', level: 'basic',
    summary: 'Tính từ ngắn: thêm -er / the -est (tall → taller → the tallest). Tính từ dài: more / the most (beautiful → more beautiful → the most beautiful). Một số bất quy tắc: good → better → the best.',
    rules: [
      { form: 'adj-er + than', note: 'Tom is taller than Nam.' },
      { form: 'more + adj dài + than', note: 'This book is more interesting than that one.' },
      { form: 'the + adj-est / the most + adj', note: 'the biggest, the most expensive' },
      { form: 'Bất quy tắc', note: 'good–better–best, bad–worse–worst, far–farther–farthest' },
    ],
    examples: [['My brother is taller than me.', 'Anh tôi cao hơn tôi.'], ['This is the biggest city in Vietnam.', 'Đây là thành phố lớn nhất Việt Nam.'], ['English is more interesting than I thought.', 'Tiếng Anh thú vị hơn tôi nghĩ.'], ['She is the best student in our class.', 'Cô ấy là học sinh giỏi nhất lớp tôi.']],
    quiz: [
      ['An elephant is ____ than a horse.', 'bigger', 'big', 'biggest', 'more big', 'Tính từ ngắn "big" → bigger (gấp đôi g).'],
      ['This dress is ____ than that one.', 'more expensive', 'expensiver', 'most expensive', 'expensive', 'Tính từ dài → more + adj.'],
      ['Mount Everest is the ____ mountain in the world.', 'highest', 'higher', 'high', 'most high', 'So sánh nhất tính từ ngắn → the -est.'],
      ['My English is ____ than last year.', 'better', 'gooder', 'best', 'more good', 'good → better (bất quy tắc).'],
      ['This is the ____ film I have ever seen.', 'worst', 'baddest', 'worse', 'most bad', 'bad → worst (so sánh nhất).'],
      ['Ha Noi is ____ than Ho Chi Minh City in winter.', 'colder', 'coldest', 'more cold', 'cold', 'So sánh hơn "than" → colder.'],
      ['She is the most ____ girl in the school.', 'beautiful', 'beautifuler', 'more beautiful', 'beauty', 'Sau "the most" dùng tính từ nguyên dạng.'],
      ['Today is ____ than yesterday.', 'hotter', 'hoter', 'more hot', 'hottest', '"hot" → hotter (gấp đôi t).'],
    ],
    tip: 'Có "than" → so sánh hơn. Có "the ... in/of" → so sánh nhất.',
  },
  {
    id: 'modals', icon: '🛡️', title: 'Động từ khuyết thiếu: can / must / should', titleEn: 'Modal verbs', level: 'basic',
    summary: '"Can" = có thể (khả năng, xin phép). "Must" = phải (bắt buộc). "Should" = nên (lời khuyên). Sau động từ khuyết thiếu luôn là động từ nguyên mẫu KHÔNG "to".',
    rules: [
      { form: 'can / can\'t + V', note: 'I can swim. You can\'t park here.' },
      { form: 'must / mustn\'t + V', note: 'You must wear a helmet. You mustn\'t smoke.' },
      { form: 'should / shouldn\'t + V', note: 'You should sleep early.' },
      { form: 'Câu hỏi: Can I...? Should we...?', note: 'Đảo động từ khuyết thiếu lên đầu' },
    ],
    examples: [['She can speak three languages.', 'Cô ấy nói được ba thứ tiếng.'], ['You must stop at a red light.', 'Bạn phải dừng lại khi đèn đỏ.'], ['You should drink more water.', 'Bạn nên uống nhiều nước hơn.'], ['Can I open the window?', 'Tôi mở cửa sổ được không?']],
    quiz: [
      ['You ____ wear a seat belt in the car. It\'s the law.', 'must', 'can', 'should', 'may', 'Luật lệ bắt buộc → must.'],
      ['You look tired. You ____ go to bed early.', 'should', 'must', 'can', 'mustn\'t', 'Lời khuyên → should.'],
      ['My little sister ____ ride a bike now.', 'can', 'must', 'should', 'mustn\'t', 'Khả năng → can.'],
      ['You ____ touch the hot stove!', 'mustn\'t', 'can', 'should', 'must', 'Cấm đoán → mustn\'t.'],
      ['____ I borrow your pencil?', 'Can', 'Must', 'Should', 'Do', 'Xin phép → Can I...?'],
      ['She can ____ the piano very well.', 'play', 'plays', 'to play', 'playing', 'Sau "can" dùng V nguyên mẫu không "to".'],
      ['Students ____ be late for class.', 'shouldn\'t', 'should', 'can', 'must', 'Lời khuyên phủ định → shouldn\'t.'],
      ['I ____ come to the party. I have to study.', 'can\'t', 'mustn\'t', 'should', 'can', 'Không thể → can\'t.'],
    ],
    tip: 'Không bao giờ: can to swim, must goes. Đúng: can swim, must go.',
  },
  {
    id: 'present-perfect', icon: '✅', title: 'Thì hiện tại hoàn thành', titleEn: 'Present perfect', level: 'intermediate',
    summary: 'Diễn tả trải nghiệm, hành động vừa xong, hoặc kéo dài từ quá khứ đến hiện tại. Công thức: have/has + V3 (quá khứ phân từ).',
    rules: [
      { form: 'I/You/We/They + have + V3', note: 'I have visited Hue.' },
      { form: 'He/She/It + has + V3', note: 'She has finished her homework.' },
      { form: 'ever / never / already / yet / just', note: 'Have you ever...? I haven\'t finished yet.' },
      { form: 'for + khoảng thời gian / since + mốc thời gian', note: 'for two years, since 2020' },
    ],
    examples: [['I have lived here for five years.', 'Tôi đã sống ở đây được năm năm.'], ['She has just finished her lunch.', 'Cô ấy vừa ăn trưa xong.'], ['Have you ever been to Japan?', 'Bạn đã từng đến Nhật chưa?'], ['We haven\'t seen that movie yet.', 'Chúng tôi chưa xem bộ phim đó.']],
    quiz: [
      ['I ____ never eaten sushi.', 'have', 'has', 'am', 'did', '"I" + have + V3.'],
      ['She has ____ her keys.', 'lost', 'lose', 'losed', 'losing', 'has + V3: lose → lost.'],
      ['They have lived in Ha Noi ____ 2018.', 'since', 'for', 'ago', 'in', 'Mốc thời gian → since.'],
      ['We have known each other ____ ten years.', 'for', 'since', 'ago', 'during', 'Khoảng thời gian → for.'],
      ['Have you ____ been to Da Lat?', 'ever', 'yet', 'already', 'since', 'Hỏi trải nghiệm → ever.'],
      ['He hasn\'t finished his work ____.', 'yet', 'already', 'ever', 'just', 'Phủ định cuối câu → yet.'],
      ['My brother ____ just got a new job.', 'has', 'have', 'is', 'did', '"My brother" ngôi 3 số ít → has.'],
      ['I have already ____ the tickets.', 'bought', 'buy', 'buyed', 'buying', 'have + V3: buy → bought.'],
    ],
    tip: 'for + khoảng (for 3 days), since + mốc (since Monday).',
  },
  {
    id: 'wh-questions', icon: '❓', title: 'Câu hỏi với từ để hỏi (Wh-)', titleEn: 'Wh-questions', level: 'starter',
    summary: 'Từ để hỏi: What (cái gì), Where (ở đâu), When (khi nào), Who (ai), Why (tại sao), How (thế nào), How many/much (bao nhiêu), Which (cái nào).',
    rules: [
      { form: 'Wh- + do/does/did + S + V?', note: 'Where do you live?' },
      { form: 'Wh- + be + S?', note: 'What is your name?' },
      { form: 'Who + V (hỏi chủ ngữ)', note: 'Who called you?' },
      { form: 'How old / How long / How often', note: 'Hỏi tuổi, thời gian, tần suất' },
    ],
    examples: [['What is your favorite food?', 'Món ăn yêu thích của bạn là gì?'], ['Where does your father work?', 'Bố bạn làm việc ở đâu?'], ['Why are you late?', 'Tại sao bạn đến muộn?'], ['How often do you play sports?', 'Bạn chơi thể thao thường xuyên thế nào?']],
    quiz: [
      ['____ do you live? – In Da Nang.', 'Where', 'When', 'What', 'Who', 'Trả lời nơi chốn → Where.'],
      ['____ is your birthday? – In May.', 'When', 'Where', 'Who', 'Why', 'Trả lời thời gian → When.'],
      ['____ is that man? – He is my uncle.', 'Who', 'What', 'Which', 'Where', 'Hỏi người → Who.'],
      ['____ are you sad? – Because I lost my cat.', 'Why', 'How', 'What', 'When', 'Trả lời bằng "Because" → Why.'],
      ['____ old are you? – I\'m nine.', 'How', 'What', 'Which', 'Who', 'Hỏi tuổi → How old.'],
      ['____ brothers do you have? – Two.', 'How many', 'How much', 'How old', 'What', 'Hỏi số lượng đếm được → How many.'],
      ['____ colour do you like, red or blue?', 'Which', 'Who', 'Where', 'Why', 'Lựa chọn giữa các phương án → Which.'],
      ['____ does the film start? – At 8 p.m.', 'What time', 'Where', 'Who', 'How many', 'Hỏi giờ → What time.'],
    ],
    tip: 'Nhìn câu trả lời để đoán từ để hỏi: nơi chốn → Where, người → Who.',
  },
];

/** Tra nhanh bài ngữ pháp theo id */
export const GRAMMAR_BY_ID = Object.fromEntries(GRAMMAR.map((g) => [g.id, g])) as Record<string, GrammarLesson>;
