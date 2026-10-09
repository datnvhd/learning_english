/**
 * ============================================================================
 *  toeic-sw.ts – Kho đề TOEIC Speaking & Writing
 * ============================================================================
 *  Mô phỏng cấu trúc bài thi TOEIC Speaking & Writing (thang điểm 0–200 mỗi kỹ năng):
 *
 *  SPEAKING (11 câu, ~20 phút)
 *   Q1–2   Read a text aloud              – chuẩn bị 45s, nói 45s   (chấm 0–3)
 *   Q3–4   Describe a picture             – chuẩn bị 45s, nói 30s   (chấm 0–3)
 *   Q5–7   Respond to questions           – chuẩn bị 3s, nói 15/15/30s (0–3)
 *   Q8–10  Respond using information      – đọc bảng 45s, nói 15/15/30s (0–3)
 *   Q11    Express an opinion             – chuẩn bị 45s, nói 60s   (chấm 0–5)
 *
 *  WRITING (8 câu, ~60 phút)
 *   Q1–5   Write a sentence based on a picture (dùng đủ 2 từ cho sẵn) – 8 phút (0–3)
 *   Q6–7   Respond to a written request (email) – 10 phút mỗi câu (0–4)
 *   Q8     Write an opinion essay (≥ 300 từ) – 30 phút (0–5)
 *
 *  Ảnh dùng chung kho ảnh CC0 offline (mã "chủ đề:từ" trong data/photos.ts).
 */
import { SpeakingItem, ToeicPicWriteItem, WritingTask } from '../../models/exam.model';
import { PHOTOS } from '../photos';

// ===========================================================================
//  SPEAKING
// ===========================================================================

const READ_TIPS = [
  'Dùng 45 giây chuẩn bị để đọc thầm, đánh dấu tên riêng, con số và từ khó.',
  'Danh sách "A, B, and C": lên giọng ở A và B, xuống giọng ở C.',
  'Ngắt nghỉ ở dấu phẩy, dấu chấm; nhấn mạnh từ mang nội dung (danh từ, động từ chính).',
  'Đọc vừa phải, rõ ràng – đọc nhanh không được cộng điểm.',
];

/** Q1–2: Đọc to đoạn văn (đoạn văn chính là "bài mẫu" để nghe lại) */
const READ_TEXTS: [string, string][] = [
  ['Recorded message – Medical center', 'Thank you for calling Green Valley Medical Center. Our office is open Monday through Friday, from eight a.m. to six p.m. If you would like to make, change, or cancel an appointment, please press one. For information about test results, prices, or insurance, press two. To speak with a nurse, please stay on the line.'],
  ['Announcement – City Express train', 'Welcome aboard the City Express. This train is making stops at Central Station, Market Square, and Riverside Park. Please keep your bags off the seats, and remember to take all of your belongings with you when you leave. The café car is located at the front of the train and is open until nine p.m.'],
  ['Business news', 'Good evening, and welcome to tonight\'s business news. Today, Starline Motors announced plans to build a new factory in the south of the country. The factory will produce electric cars, trucks, and buses, and it is expected to create more than two thousand jobs. Construction will begin early next year.'],
  ['Store announcement', 'Attention, shoppers. For today only, all kitchen appliances, including toasters, blenders, and coffee makers, are thirty percent off. Members of our rewards program will receive an additional ten percent discount at the register. Don\'t miss this great opportunity to save.'],
  ['Advertisement – Pine Lake Resort', 'Are you looking for a relaxing weekend away? The Pine Lake Resort offers comfortable cabins, a heated pool, and delicious home-style meals. Guests can enjoy hiking, fishing, and boating during the day, and gather around the fireplace in the evening. Book before the end of the month and save twenty percent.'],
  ['Workshop introduction', 'Before we begin today\'s workshop, I\'d like to go over a few details. The session will last about two hours, with a short break at ten thirty. Coffee, tea, and snacks will be provided in the hallway. Please turn off your mobile phones, and feel free to ask questions at any time.'],
];

export const TOEIC_S_READ: SpeakingItem[] = READ_TEXTS.map(([title, text], i) => ({
  id: `toeic-s-read-${i + 1}`, part: 1, title: `Read a text aloud – ${title}`, label: 'Question 1–2 · Read a text aloud',
  lines: [text], sample: text, examiner: 'Read the text on the screen aloud. You will have forty-five seconds to prepare.',
  criteria: 'toeic-read', maxScore: 3, tips: READ_TIPS,
}));

const PICTURE_TIPS = [
  'Bố cục 4 bước: địa điểm → người/vật chính (in the foreground) → chi tiết khác (in the background) → cảm nhận chung.',
  'Dùng thì hiện tại tiếp diễn cho hành động: "A man is carrying...", "There is / There are..." cho đồ vật.',
  'Mẫu câu hay: "This picture was taken at/in...", "On the left/right...", "It looks like...".',
  'Nếu không biết một từ, hãy mô tả bằng từ đơn giản thay vì im lặng.',
];

/** Q3–4: Mô tả tranh – [mã ảnh, bài mẫu] */
const PICTURES: [string, string][] = [
  ['scene:waiter', 'This picture was taken at an outdoor restaurant near the water. In the foreground, a man with gray hair is carrying some plates. He is wearing a gray shirt, and he seems to be serving customers. In the background, several people are sitting at tables and enjoying the sunny weather. I can also see some boats on the water. It looks like a relaxing summer afternoon.'],
  ['scene:meeting', 'This picture shows an empty conference room in a modern office building. In the middle of the room, there is a long table with many black chairs around it. There are large windows on both sides, so the room is very bright. On the ceiling, I can see a projector and some lights. It looks like the room is ready for an important meeting.'],
  ['daily:market', 'This picture was taken at an outdoor market in a city. On the right, there is a stall selling fresh fruit, such as oranges and bananas. Several people are walking along the street, and some of them are shopping. In the background, I can see tall, colorful buildings and a few red umbrellas. It seems to be a busy but pleasant day at the market.'],
  ['travel:airport', 'This picture was taken inside a busy airport terminal. Many travelers are walking in different directions, and some of them are carrying backpacks. Above them, there are large yellow signs that show the way to the gates, the baggage hall, and the arrivals hall. On the left, I can see some shops. It looks like people are hurrying to catch their flights.'],
  ['scene:kitchen', 'This picture shows the kitchen of a restaurant. In the foreground, a cook in a white uniform is standing with his back to the camera. He seems to be preparing food at the counter. In the background, another cook is working, and there are stacks of plates on the shelves. Several lamps are hanging from the ceiling. It looks like a busy but well-organized kitchen.'],
  ['travel:campfire', 'This picture was taken outdoors in the evening, probably near a lake. In the center, there is a bright campfire. A group of people are sitting around the fire on camping chairs, and they are wearing warm jackets. The sky is dark blue, so it must be after sunset. It looks like the friends are relaxing and enjoying their camping trip.'],
];

export const TOEIC_S_PICTURE: SpeakingItem[] = PICTURES.map(([photo, sample], i) => ({
  id: `toeic-s-pic-${i + 1}`, part: 2, title: 'Describe a picture', label: 'Question 3–4 · Describe a picture',
  image: PHOTOS[photo]?.src,
  lines: ['Describe the picture on your screen in as much detail as you can.'],
  sample, examiner: 'Describe the picture on your screen in as much detail as you can. You will have forty-five seconds to prepare.',
  criteria: 'toeic', maxScore: 3, tips: PICTURE_TIPS,
}));

const RESPOND_TIPS = [
  'Chỉ có 3 giây chuẩn bị: bắt đầu bằng cách nhắc lại ý câu hỏi để có thêm thời gian nghĩ.',
  'Câu 15 giây: trả lời thẳng + 1 chi tiết. Câu 30 giây: nêu ý kiến + 2 lý do/ví dụ.',
  'Trả lời ĐỦ các ý được hỏi (ví dụ "how often" VÀ "who with").',
];

/** Q5–7: [bối cảnh, [câu hỏi, câu trả lời mẫu][]] – câu cuối nói 30 giây */
const RESPOND_SETS: [string, [string, string][]][] = [
  ['Imagine that a marketing firm is doing research in your country. You have agreed to participate in a telephone interview about movies.', [
    ['How often do you go to the movie theater, and who do you usually go with?', 'I go to the movie theater about once a month, and I usually go with my best friend from work.'],
    ['What kind of movies do you like the most?', 'I like comedies the most, because they help me relax after a long week at work.'],
    ['Do you prefer watching movies at home or in a theater? Why?', 'I prefer watching movies in a theater. First, the screen is much bigger and the sound is better, so the experience is more exciting. Second, going to the theater is a good chance to spend time with friends outside the house.'],
  ]],
  ['Imagine that a friend is moving to your town. You are having a telephone conversation about shopping.', [
    ['Where is the best place to buy groceries in your town?', 'The best place is Green Market on Main Street. It has fresh vegetables and the prices are reasonable.'],
    ['How far is it from your home, and how do you get there?', 'It\'s about two kilometers from my home, so I usually get there by motorbike in five minutes.'],
    ['What would you recommend a newcomer buy first when moving to your town? Why?', 'I would recommend buying a good raincoat first. Our town has a long rainy season, and it often rains suddenly in the afternoon. With a raincoat, you can still ride your bike to work or go shopping without getting wet.'],
  ]],
  ['Imagine that a technology magazine is doing research. You have agreed to answer some questions about smartphones.', [
    ['How many hours a day do you use your smartphone?', 'I use my smartphone for about four hours a day, mostly in the evening.'],
    ['What do you use your smartphone for most often?', 'I use it most often to send messages and check my work emails.'],
    ['Do you think children should have their own smartphones? Why or why not?', 'I don\'t think young children should have their own smartphones. They may spend too much time playing games instead of studying or playing outside. However, older children can use a simple phone to contact their parents in an emergency, so I think it depends on their age.'],
  ]],
  ['Imagine that a travel company is doing research in your area. You are answering questions about vacations.', [
    ['When was the last time you took a vacation, and where did you go?', 'The last time I took a vacation was last summer. I went to Da Nang with my family.'],
    ['Do you prefer to travel alone or with others?', 'I prefer to travel with others, because it\'s more fun to share the experience.'],
    ['Describe the best vacation you have ever had.', 'The best vacation I have ever had was a trip to Ha Long Bay two years ago. We stayed on a boat for two nights and visited beautiful caves and islands. The food was delicious, especially the fresh seafood. Most of all, I enjoyed spending relaxing time with my family.'],
  ]],
];

export const TOEIC_S_RESPOND: SpeakingItem[][] = RESPOND_SETS.map(([context, qs], s) =>
  qs.map(([q, sample], i) => ({
    id: `toeic-s-resp-${s + 1}-${i + 1}`, part: 1, title: `Respond to questions – Question ${i + 5}`,
    label: `Question ${i + 5} · Respond to questions`, lines: [context, q], sample, examiner: q,
    criteria: 'toeic' as const, maxScore: 3, tips: RESPOND_TIPS,
  })),
);

const INFO_TIPS = [
  'Dùng 45 giây đọc bảng: để ý thời gian, địa điểm, giá và các mục bị HỦY (canceled) hoặc thay đổi.',
  'Câu hỏi 9 thường chứa thông tin SAI – hãy lịch sự đính chính: "Actually, ... / I\'m afraid that...".',
  'Câu hỏi 10 (30 giây): liệt kê đủ các mục liên quan, mỗi mục có thời gian + nội dung.',
  'Câu hỏi chỉ được nghe (không in chữ) – bấm loa để nghe lại nếu cần.',
];

/** Q8–10: [tiêu đề, bảng thông tin, lời mở đầu của người gọi, [câu hỏi, trả lời mẫu][]] */
const INFO_SETS: [string, string, string, [string, string][]][] = [
  ['Business Leaders Conference', 'Business Leaders Conference – Grand Plaza Hotel, June 12\nTime | Session\n9:00 – 9:30 | Registration and coffee\n9:30 – 10:30 | Keynote: Leading in a digital world – Dr. Emma Stone\n10:30 – 11:30 | Workshop: Managing remote teams – Paul Kim\n11:30 – 12:30 | Lunch (Garden Room)\n1:00 – 2:00 | Panel: The future of retail (CANCELED)\n2:00 – 3:00 | Workshop: Effective presentations – Paul Kim\nRegistration fee | $150 (members: $120)',
    'Hi, I\'m planning to attend the conference, but I have a few questions.', [
      ['What time does the conference start, and where is it being held?', 'The conference starts at nine a.m. with registration and coffee, and it will be held at the Grand Plaza Hotel on June twelfth.'],
      ['I heard there\'s a panel discussion on the future of retail in the afternoon. Is that right?', 'I\'m sorry, but that panel discussion has been canceled. However, there is a workshop on effective presentations from two to three p.m.'],
      ['Could you tell me about all the sessions that Paul Kim is leading?', 'Sure. Paul Kim is leading two workshops. The first one, from ten thirty to eleven thirty, is about managing remote teams. The second one is from two to three p.m., and it\'s about giving effective presentations.'],
    ]],
  ['Interview schedule', 'Interview schedule – Sales Manager position\nMonday, March 3 – Room 204\n9:00 | Kevin Brown – current employer: Apex Foods\n10:00 | Linda Park – current employer: Metro Bank\n11:00 | James Hill (CANCELED)\n1:30 | Sara Diaz – current employer: Apex Foods\n2:30 | Tom Reed – current employer: City Mart',
    'Hi, this is Robert. I\'m interviewing candidates on Monday, but I lost my copy of the schedule.', [
      ['Where will the interviews take place, and what time is the first one?', 'The interviews will take place in Room 204, and the first one starts at nine a.m.'],
      ['I think we\'re interviewing James Hill at eleven. Is that correct?', 'Actually, that interview has been canceled, so you\'re free from eleven until one thirty.'],
      ['I remember that some candidates work at Apex Foods. Can you give me the details about them?', 'Yes, two candidates currently work at Apex Foods. The first is Kevin Brown, whose interview is at nine a.m. The second is Sara Diaz, and her interview is at one thirty in the afternoon.'],
    ]],
  ['Business trip itinerary', 'Business trip itinerary – Anna Cole\nMon, Oct 6 | 7:45 a.m. Depart Boston (Flight 322) → 11:05 a.m. Arrive Chicago\nMon, Oct 6 | 2:00 p.m. Meeting with Rex Industries\nTue, Oct 7 | 10:00 a.m. Factory tour\nTue, Oct 7 | 6:30 p.m. Depart Chicago (Flight 519) → 9:40 p.m. Arrive Boston\nHotel | Lakeview Inn (1 night)',
    'Hi, this is Anna. I\'d like to check some details of my business trip.', [
      ['What time does my flight leave on Monday, and when does it arrive?', 'Your flight leaves Boston at seven forty-five a.m. and arrives in Chicago at eleven oh five.'],
      ['I\'ll be staying at the Lakeview Inn for two nights, right?', 'Actually, you\'ll only stay there for one night, because your flight back to Boston leaves on Tuesday evening.'],
      ['What do I have scheduled after I arrive in Chicago?', 'After you arrive, you have a meeting with Rex Industries at two p.m. on Monday. On Tuesday, there\'s a factory tour at ten a.m., and then your return flight leaves Chicago at six thirty p.m.'],
    ]],
];

export const TOEIC_S_INFO: SpeakingItem[][] = INFO_SETS.map(([title, info, intro, qs], s) =>
  qs.map(([q, sample], i) => ({
    id: `toeic-s-info-${s + 1}-${i + 1}`, part: 1, title: `Respond using information – ${title}`,
    label: `Question ${i + 8} · Respond using information`, info, hideLines: true,
    lines: [intro, q], sample, examiner: i === 0 ? `${intro} ${q}` : q,
    criteria: 'toeic' as const, maxScore: 3, tips: INFO_TIPS,
  })),
);

const OPINION_TIPS = [
  'Nêu rõ quan điểm ngay câu đầu: "I prefer... / I strongly believe that...".',
  'Đưa ra 2 lý do, mỗi lý do có 1 ví dụ cụ thể (có thể là trải nghiệm của bạn).',
  'Kết thúc bằng câu nhắc lại quan điểm: "That\'s why I think...".',
  'Dùng từ nối: first of all, in addition, for example, as a result.',
];

/** Q11: [đề, bài mẫu] */
const OPINIONS: [string, string][] = [
  ['Some people prefer to work for a large company, while others prefer to work for a small company. Which do you prefer and why?', 'I prefer to work for a large company for two reasons. First of all, large companies usually offer better training programs. For example, my cousin works for a big bank, and she has taken many free courses that helped her get promoted. In addition, large companies often provide more benefits, such as health insurance and paid vacations. As a result, employees feel more secure. That\'s why I think working for a large company is a better choice for me.'],
  ['Do you agree or disagree with the following statement? "It is better to learn a new skill in a classroom than online."', 'I agree that it is better to learn a new skill in a classroom. The main reason is that you can get direct feedback from the teacher. For example, when I learned to play the guitar, my teacher corrected my hand position immediately. Another reason is that classmates can motivate you. When you study alone online, it is easy to give up. For these reasons, I believe classroom learning is more effective.'],
  ['What is the most important quality for a manager to have? Give reasons and examples.', 'In my opinion, the most important quality for a manager is good communication. First, a manager needs to explain goals clearly so that everyone knows what to do. For example, my previous manager held a short meeting every Monday to set priorities, and our team rarely made mistakes. Second, a manager who listens to employees can solve problems early. Therefore, I think communication skills matter more than anything else.'],
  ['Some companies allow employees to work from home. Do you think this is a good idea? Why or why not?', 'I think allowing employees to work from home is a good idea. First, it saves a lot of time. Many people spend more than an hour commuting every day, and they could use that time to work or rest. Second, people can often concentrate better at home because there are fewer interruptions. For example, when I work from home, I finish my reports faster. However, teams should still meet in person sometimes to keep good relationships.'],
  ['Which is more important when choosing a job: a high salary or a short commute? Why?', 'For me, a short commute is more important than a high salary. First, a long commute makes people tired and stressed before they even start working. Second, a short commute gives me more free time to spend with my family or exercise. For example, I once had a job with a two-hour commute, and even though the pay was good, I felt exhausted every day. So I would choose a job close to home.'],
];

export const TOEIC_S_OPINION: SpeakingItem[] = OPINIONS.map(([q, sample], i) => ({
  id: `toeic-s-op-${i + 1}`, part: 3, title: 'Express an opinion', label: 'Question 11 · Express an opinion',
  lines: [q], sample, examiner: q, criteria: 'toeic', maxScore: 5, tips: OPINION_TIPS,
}));

// ===========================================================================
//  WRITING
// ===========================================================================

/** Các dạng thường gặp của động từ – giúp khai báo từ bắt buộc gọn hơn */
const verb = (base: string, s: string, ing: string, past: string, pp = past) => [base, s, ing, past, pp];

/** Q1–5: Viết câu theo tranh – mỗi mục là ảnh + 2 từ (kèm các dạng hợp lệ) + câu mẫu */
export const TOEIC_W_PICTURE: ToeicPicWriteItem[] = [
  { photo: 'scene:typing', words: [['woman', 'women'], ['laptop', 'laptops']], samples: ['A woman is typing on her laptop.', 'The woman is working on a laptop near the window.'] },
  { photo: 'scene:waiter', words: [verb('carry', 'carries', 'carrying', 'carried'), ['plate', 'plates']], samples: ['A man is carrying plates to the customers.', 'The waiter carried two plates to a table.'] },
  { photo: 'travel:suitcase', words: [['suitcase', 'suitcases'], ['on top of']], samples: ['The suitcases are stacked on top of each other.', 'A small suitcase has been placed on top of a bigger one.'] },
  { photo: 'scene:meeting', words: [['table', 'tables'], ['empty']], samples: ['The chairs around the table are empty.', 'The long table in the meeting room is empty.'] },
  { photo: 'travel:camera', words: [verb('take', 'takes', 'taking', 'took', 'taken'), ['picture', 'pictures']], samples: ['The woman is taking a picture with her camera.', 'She is taking pictures even though it is raining.'] },
  { photo: 'daily:market', words: [['people'], ['market', 'markets']], samples: ['Many people are shopping at the market.', 'People are walking past the fruit stall at the market.'] },
  { photo: 'scene:newspaper', words: [verb('read', 'reads', 'reading', 'read'), ['while']], samples: ['A man is reading a newspaper while he relaxes outside.', 'He reads the newspaper while sitting on a bench.'] },
  { photo: 'health:treadmill', words: [['gym', 'gyms'], ['because']], samples: ['People are standing in the gym because they are listening to a trainer.', 'The gym is crowded because a new class is starting.'] },
  { photo: 'scene:cleaning', words: [verb('clean', 'cleans', 'cleaning', 'cleaned'), ['table', 'tables']], samples: ['A woman is cleaning the table after the customers left.', 'The waitress cleans the tables before the café opens.'] },
  { photo: 'travel:campfire', words: [verb('sit', 'sits', 'sitting', 'sat'), ['around']], samples: ['Some friends are sitting around a campfire.', 'The campers sat around the fire to keep warm.'] },
  { photo: 'daily:piano', words: [['boy', 'boys'], ['next to']], samples: ['A boy is standing next to a piano.', 'The boy waits next to the piano before his performance.'] },
  { photo: 'scene:platform', words: [['train', 'trains'], verb('arrive', 'arrives', 'arriving', 'arrived')], samples: ['A train is arriving at the station.', 'The train arrived at the platform on time.'] },
];

/** Các ý thường kiểm tra trong email TOEIC */
const GREETING = { label: 'Có lời chào (Dear.../Hi...)', re: '^\\s*(dear|hi|hello)\\b' };
const CLOSING = { label: 'Có lời kết (Best regards/Thank you...)', re: '(regards|sincerely|best wishes|thank you|thanks|cheers)' };
const QUESTION = (n: number) => ({ label: n > 1 ? `Đặt ít nhất ${n} câu hỏi` : 'Đặt 1 câu hỏi', re: '\\?', min: n });
const REQUEST = (n: number) => ({
  label: n > 1 ? `Đưa ra ${n} yêu cầu (Could you.../Please...)` : 'Đưa ra 1 yêu cầu (Could you.../Please...)',
  re: '(could you|would you|can you|please|i would like you|i\'d like you|i would appreciate|i\'d appreciate)', min: n,
});
const SUGGEST = (n: number) => ({
  label: `Đưa ra ${n} gợi ý (We could.../I suggest...)`,
  re: '(i suggest|we could|how about|why don\'t we|maybe we|we should|it would be (nice|great|good)|i recommend|perhaps we|what about)', min: n,
});

const EMAIL_TIPS = [
  'Bố cục: lời chào → câu mở đầu nêu lý do viết → các ý được yêu cầu (mỗi ý 1–2 câu) → lời kết + tên.',
  'Làm ĐỦ và ĐÚNG số ý đề yêu cầu (ví dụ 2 câu hỏi + 1 yêu cầu) – thiếu ý bị trừ điểm nặng.',
  'Dùng giọng lịch sự: "Could you please...", "I was wondering if...", "I would appreciate it if...".',
  'Khoảng 100–150 từ là đủ; dành 1–2 phút cuối để soát lỗi chính tả.',
];

export const TOEIC_W_EMAIL: WritingTask[] = [
  {
    id: 'toeic-w-email-1', task: 1, exam: 'toeic', maxScore: 4, minWords: 80, minutes: 10,
    title: 'Question 6–7 – Respond to a written request: Welcome lunch',
    prompt: 'FROM: Maria Lopez, Office Manager\nTO: All staff\nSUBJECT: Welcome lunch for new employees\n\nDear staff,\nNext Friday, we will hold a welcome lunch for our five new employees. We would like everyone to help make the event a success. Please reply with any ideas you have for the lunch.\nThank you,\nMaria\n\nDirections: Respond to the e-mail as if you are an employee. In your e-mail, give TWO suggestions and ask ONE question.',
    checks: [GREETING, SUGGEST(2), QUESTION(1), CLOSING],
    model: 'Dear Maria,\n\nThank you for organizing the welcome lunch. I think it is a great way to help our new colleagues feel at home, and I have two suggestions.\n\nFirst, we could hold the lunch in the garden on the fifth floor if the weather is nice. It is more relaxing than the meeting room. Second, I suggest that each team prepare a short introduction so the new employees can learn who does what in the company.\n\nI also have one question. Will the company pay for the food, or should each department contribute some money?\n\nBest regards,\nDavid',
    tips: EMAIL_TIPS,
  },
  {
    id: 'toeic-w-email-2', task: 1, exam: 'toeic', maxScore: 4, minWords: 80, minutes: 10,
    title: 'Question 6–7 – Respond to a written request: Building repairs',
    prompt: 'FROM: Greenway Apartments Management\nTO: All residents\nSUBJECT: Hallway renovation\n\nDear residents,\nWe are planning to repaint the hallways and replace the carpets next month. Please let us know if you have any questions or concerns.\nGreenway Apartments Management\n\nDirections: Respond to the e-mail as if you are a resident. In your e-mail, ask TWO questions and make ONE request.',
    checks: [GREETING, QUESTION(2), REQUEST(1), CLOSING],
    model: 'Dear Greenway Apartments Management,\n\nThank you for letting us know about the hallway renovation. I am glad the building will look better, but I have a few questions.\n\nFirst, how long will the work take on each floor? Second, will we still be able to use the elevator while the carpets are being replaced?\n\nI also have a request. I work from home, and the smell of paint gives me headaches. Could you please tell us the exact painting dates at least one week in advance so that I can make other plans?\n\nThank you for your help.\n\nSincerely,\nLinh Nguyen, Apartment 5B',
    tips: EMAIL_TIPS,
  },
  {
    id: 'toeic-w-email-3', task: 1, exam: 'toeic', maxScore: 4, minWords: 80, minutes: 10,
    title: 'Question 6–7 – Respond to a written request: Laptop purchase',
    prompt: 'FROM: Kevin Tran, TechWorld Store\nTO: You\nSUBJECT: Your recent purchase\n\nDear customer,\nThank you for your recent purchase of a laptop from TechWorld. We would like to hear about your experience with our product and our store.\nKevin Tran, Customer Service\n\nDirections: Respond to the e-mail as if you are the customer. In your e-mail, describe ONE problem you had and make TWO requests.',
    checks: [GREETING, { label: 'Mô tả 1 vấn đề gặp phải', re: '(problem|issue|broken|does not|doesn\'t|did not|didn\'t|not working|stopped|damaged|slow|missing)' }, REQUEST(2), CLOSING],
    model: 'Dear Mr. Tran,\n\nThank you for your e-mail. Overall, I am happy with the laptop, but I have had one problem. The battery does not last as long as the advertisement said. It usually stops working after about three hours, not eight.\n\nI have two requests. First, could you please check whether my battery is faulty? I can bring the laptop to your store this weekend. Second, if the battery cannot be repaired, would you replace it with a new one free of charge? The laptop is still under warranty.\n\nI look forward to your reply.\n\nBest regards,\nMai Pham',
    tips: EMAIL_TIPS,
  },
  {
    id: 'toeic-w-email-4', task: 1, exam: 'toeic', maxScore: 4, minWords: 80, minutes: 10,
    title: 'Question 6–7 – Respond to a written request: English course',
    prompt: 'FROM: City Language Center\nTO: You\nSUBJECT: Evening English courses\n\nThank you for your interest in our evening English courses. Classes start on September 5. Please contact us if you would like more information.\nCity Language Center\n\nDirections: Respond to the e-mail as if you are interested in a course. In your e-mail, give ONE piece of information about yourself and ask TWO questions.',
    checks: [GREETING, { label: 'Giới thiệu 1 thông tin về bản thân', re: '(i am|i\'m|i work|my name|i have|i studied)' }, QUESTION(2), CLOSING],
    model: 'Hello,\n\nThank you for your e-mail. My name is Tuan, and I work as an accountant at a logistics company. I often have to write e-mails to foreign clients, so I would like to improve my business English.\n\nI have two questions about your courses. First, how many students are there in each class? Second, do you offer a placement test before the course starts, so that I can join a class at the right level?\n\nI look forward to hearing from you.\n\nBest regards,\nTuan Le',
    tips: EMAIL_TIPS,
  },
];

const ESSAY_CHECKS = [
  { label: 'Nêu rõ quan điểm (I believe/In my opinion...)', re: '(i think|i believe|in my opinion|i agree|i disagree|i prefer|from my perspective|personally|in my view)' },
  { label: 'Có ít nhất 2 lý do (first/second/because...)', re: '(because|since|first of all|firstly|first,|second,|secondly|another reason|the main reason|in addition)', min: 2 },
  { label: 'Có ví dụ minh họa (for example/for instance)', re: '(for example|for instance|such as|in my experience)' },
  { label: 'Có kết luận (In conclusion/To sum up...)', re: '(in conclusion|to sum up|in summary|to conclude|for these reasons|overall)' },
];

const ESSAY_TIPS = [
  'Bố cục 4–5 đoạn: mở bài (nêu quan điểm) → thân bài 1 (lý do 1 + ví dụ) → thân bài 2 (lý do 2 + ví dụ) → kết luận.',
  'Viết ít nhất 300 từ trong 30 phút; ví dụ cụ thể từ công việc/cuộc sống giúp bài thuyết phục hơn.',
  'Dùng từ nối đa dạng: first of all, moreover, for instance, on the other hand, in conclusion.',
  'Dành 3–5 phút cuối để soát lỗi thì, số ít/số nhiều và chính tả.',
];

export const TOEIC_W_OPINION: WritingTask[] = [
  {
    id: 'toeic-w-op-1', task: 2, exam: 'toeic', maxScore: 5, minWords: 300, minutes: 30, checks: ESSAY_CHECKS, tips: ESSAY_TIPS,
    title: 'Question 8 – Opinion essay: Working from home',
    prompt: 'Do you agree or disagree with the following statement?\n"Employees should be allowed to work from home at least two days a week."\nGive reasons or examples to support your opinion.',
    model: 'Nowadays, many companies are deciding whether employees should be allowed to work from home. In my opinion, allowing staff to work from home at least two days a week is a good policy, because it saves time, improves concentration and helps people balance their work and personal lives.\n\nFirst of all, working from home saves a great deal of time and money. In big cities, many workers spend more than an hour in traffic every morning and evening. If they stay at home two days a week, they can use those hours to rest, exercise or start work earlier. For example, my sister used to spend ninety minutes commuting each day. Since her company introduced a hybrid schedule, she has had more energy and has even started taking an evening course.\n\nSecond, many people can concentrate better at home. Open-plan offices are often noisy, and colleagues frequently interrupt each other with small questions. At home, employees can turn off notifications and focus on tasks that require deep thinking, such as writing reports or analyzing data. As a result, the quality of their work may actually improve.\n\nIn addition, flexible arrangements help employees take care of their families. Parents can take their children to school, and people with elderly relatives can be available when they are needed. When workers feel that their company trusts them and supports their personal lives, they are usually more loyal and less likely to quit.\n\nOf course, working from home also has some disadvantages. Some employees may feel lonely, and teamwork can be more difficult online. However, these problems can be solved if teams meet in the office on the other three days and use good communication tools.\n\nIn conclusion, I strongly agree that employees should be allowed to work from home at least two days a week. This policy saves time, increases productivity and creates a better balance between work and life, which benefits both workers and companies.',
  },
  {
    id: 'toeic-w-op-2', task: 2, exam: 'toeic', maxScore: 5, minWords: 300, minutes: 30, checks: ESSAY_CHECKS, tips: ESSAY_TIPS,
    title: 'Question 8 – Opinion essay: Training or salaries',
    prompt: 'Some people think that a company should spend money on training its employees. Others think this money should be spent on higher salaries. Which do you think is better? Give reasons or examples to support your opinion.',
    model: 'Every company has a limited budget, so managers must decide how to use their money wisely. Some believe the best option is to raise salaries, while others prefer to invest in training. In my opinion, spending money on training is the better choice, because it develops employees\' skills, benefits the company in the long term and still motivates workers.\n\nFirst of all, training helps employees do their jobs better. Technology and customer needs change quickly, so skills that were useful five years ago may not be enough today. For example, when my company paid for a course on data analysis, our sales team learned how to find patterns in customer purchases. Within a few months, our sales increased by fifteen percent. A higher salary alone would not have given us these new abilities.\n\nSecond, training is an investment that keeps paying back. A pay rise is spent quickly, but knowledge stays with the employee and helps the company for many years. Well-trained staff make fewer mistakes, need less supervision and can train new colleagues. As a result, the company saves money on errors and recruitment.\n\nIn addition, many employees see training as a reward. When a company pays for courses or certificates, workers feel that their manager believes in their future. This sense of growth can be just as motivating as money. In fact, surveys often show that young employees choose companies that offer clear development opportunities.\n\nOn the other hand, salaries must still be fair. If people are underpaid, they will leave, no matter how many courses they receive. Therefore, companies should first make sure salaries meet market standards, and then use extra money for training.\n\nIn conclusion, although fair pay is essential, I believe investing in training is the better way to use additional funds. It improves performance, brings long-term benefits and shows employees that the company cares about their careers.',
  },
  {
    id: 'toeic-w-op-3', task: 2, exam: 'toeic', maxScore: 5, minWords: 300, minutes: 30, checks: ESSAY_CHECKS, tips: ESSAY_TIPS,
    title: 'Question 8 – Opinion essay: Attracting customers',
    prompt: 'What is the best way for a company to attract new customers: advertising on social media, offering discounts, or providing excellent customer service? Give reasons or examples to support your opinion.',
    model: 'Every business needs new customers in order to grow, and there are many ways to attract them. Some companies spend a lot on social media advertising, while others offer discounts. In my opinion, however, providing excellent customer service is the most effective way to attract new customers, because it creates trust, encourages recommendations and keeps customers for a long time.\n\nFirst of all, good service builds trust. Advertisements can make a product look attractive, but customers know that companies always praise themselves. When people receive fast, friendly and helpful service, they believe the company really cares about them. For example, I chose my current Internet provider because its staff answered all of my questions patiently before I signed the contract, while another company never replied to my messages.\n\nSecond, satisfied customers bring new customers. People trust the opinions of friends and family much more than advertisements. When a customer has a great experience, they often tell others or write a positive online review. In this way, excellent service works like free advertising. A small restaurant near my office became famous simply because customers kept recommending it for its warm and attentive staff.\n\nIn addition, the customers attracted by good service tend to stay loyal. Discounts may bring many people in quickly, but when the prices return to normal, those customers often move to a cheaper competitor. On the other hand, people who value good service are willing to pay a fair price and return again and again.\n\nOf course, social media and discounts can be useful tools, especially for a new company that needs attention. However, they only work well if the service is good; otherwise, the new customers will be disappointed and leave.\n\nIn conclusion, I believe excellent customer service is the best way to attract new customers. It builds trust, generates recommendations and creates long-term loyalty, which advertising and discounts alone cannot achieve.',
  },
  {
    id: 'toeic-w-op-4', task: 2, exam: 'toeic', maxScore: 5, minWords: 300, minutes: 30, checks: ESSAY_CHECKS, tips: ESSAY_TIPS,
    title: 'Question 8 – Opinion essay: Staying in one company',
    prompt: 'Some people prefer to stay at the same company for a long time. Others prefer to change jobs frequently. Which do you prefer? Give reasons or examples to support your opinion.',
    model: 'In today\'s job market, people have more choices than ever before. Some workers stay with one employer for many years, while others move to a new company every year or two. Personally, I prefer to stay at the same company for a long time, because it allows me to build deep expertise, strong relationships and a stable career.\n\nFirst of all, staying in one company helps employees develop real expertise. It takes time to understand a company\'s products, customers and processes. For example, my father has worked as an engineer at the same manufacturing company for fifteen years. Because he knows every machine in the factory, he can solve problems that new engineers cannot, and he has become the person everyone asks for advice.\n\nSecond, long-term employees build strong relationships. Trust between colleagues and managers grows slowly. When people have worked together for years, they communicate more easily and support each other during difficult projects. In addition, managers are more willing to give important responsibilities and promotions to employees they know well.\n\nMoreover, a stable job reduces stress. Changing jobs frequently means going through interviews, learning new systems and proving yourself again and again. It can also make it harder to plan for the future, such as buying a house or starting a family. A long-term position gives me the security to focus on doing my best work.\n\nOn the other hand, I understand that changing jobs can lead to higher salaries and new experiences, especially for young people who are still discovering what they enjoy. However, it is also possible to find new challenges inside the same company by moving to a different department or taking on new projects.\n\nIn conclusion, I prefer to stay at one company for a long time. This path allows me to develop deep skills, build trusting relationships and enjoy a stable life, which I value more than the short-term benefits of changing jobs often.',
  },
];
