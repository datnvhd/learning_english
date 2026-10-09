/** IELTS đề 3 – phần bổ sung để đủ 40 câu nghe + 40 câu đọc (xem ghi chú "ĐỀ ĐẦY ĐỦ" trong helpers.ts) */
import { RawIeltsFull } from '../helpers';

export const FULL: RawIeltsFull = {
  // Section 1 – Enquiring about a language course (nối tiếp)
  l1: {
    lines: [
      'M: Thank you. Do I need to take a test before the course?',
      'W: No, not for beginners. But if you have studied Spanish before, we offer a free level check that takes twenty minutes.',
      "M: I've never studied it. Who teaches the course?",
      'W: All our teachers are native speakers. The Tuesday and Thursday class is taught by Elena, who comes from Chile.',
      'M: And what happens if I miss a lesson?',
      'W: You can watch a recording of it on our website, and there is a conversation club every Saturday morning that is free for students.',
      'M: Excellent. Is there a discount if I pay early?',
      'W: Yes, you get ten percent off if you pay at least two weeks before the course starts.',
    ],
    qs: [
      ['Who needs to take a level check?', 'People who have studied Spanish before', 'All new students', 'Nobody', '"if you have studied Spanish before, we offer a free level check".'],
      ['What can students do if they miss a lesson?', 'Watch a recording online', 'Attend another class', 'Get a refund', '"You can watch a recording of it on our website".'],
    ],
    fill: [
      ['The level check takes ____ minutes.', ['20', 'twenty'], 'Hai mươi phút.'],
      ['The teacher, Elena, comes from ____.', ['Chile'], '"who comes from Chile".'],
      ['Early payment discount: ____ percent', ['10', 'ten'], 'Giảm mười phần trăm khi trả sớm.'],
    ],
  },
  // Section 4 – Lecture on coral reefs (nối tiếp)
  l2: {
    lines: [
      'W: Let me add a few points about other threats. Bleaching is not the only danger. As the sea absorbs carbon dioxide, the water becomes more acidic, and this makes it harder for corals to build their skeletons.',
      'W: Fishing is another problem. In some regions, fishermen have used explosives, which destroy in seconds a reef that took centuries to grow.',
      'W: Tourism can help or harm. Divers bring income to coastal villages, but careless visitors break the coral by standing on it. Many marine parks now limit the number of boats each day.',
      'W: The largest reef system, the Great Barrier Reef off Australia, is over two thousand kilometres long. Surveys show that it has lost about half of its coral since nineteen eighty-five.',
      'W: For your assignment, I would like you to compare two reef protection projects. Please hand it in by the last Friday of term.',
    ],
    qs: [
      ['What effect does more acidic water have on corals?', 'It makes building skeletons harder.', 'It makes them grow faster.', 'It changes their colour to red.', '"harder for corals to build their skeletons".'],
      ['How do careless tourists damage reefs?', 'By standing on the coral', 'By feeding the fish', 'By using bright lights', '"break the coral by standing on it".'],
      ['What must students do for the assignment?', 'Compare two protection projects', 'Visit a marine park', 'Write about fishing methods', '"compare two reef protection projects".'],
    ],
    fill: [
      ['Some fishermen have used ____ on reefs.', ['explosives'], '"fishermen have used explosives".'],
      ['The Great Barrier Reef has lost about ____ of its coral since 1985.', ['half'], '"lost about half of its coral".'],
    ],
  },
  listening: [
    {
      title: 'Section 2 – A guide to the new sports centre',
      lines: [
        'M: Welcome to the Fairfield Sports Centre. I am going to tell you about our facilities before you look around.',
        'M: The centre opened in March and cost eleven million pounds. It was paid for partly by the council and partly by the national lottery.',
        'M: On the ground floor we have a twenty-five metre swimming pool with six lanes, and next to it a small teaching pool where the water is warmer.',
        'M: The sports hall is on the first floor. It can be divided into four courts for badminton, and on Sunday afternoons it is used for a children\'s gymnastics club.',
        'M: The fitness suite upstairs has sixty machines. Before you use it for the first time, you must attend an introduction session with one of our trainers. These are held every evening at six.',
        'M: Outside there are two football pitches with artificial grass, which can be hired by the hour. They are floodlit, so you can play until ten at night.',
        'M: Membership costs thirty-four pounds a month. Students and people over sixty-five pay half price.',
        'M: The cafe is next to the reception desk and sells healthy snacks. Please note that glass bottles are not allowed anywhere near the pools.',
        'M: Finally, the car park is free for the first three hours. Just type your registration number into the machine by the entrance.',
      ],
      qs: [
        ['How was the centre paid for?', 'By the council and the national lottery', 'By a private company', 'By membership fees', '"partly by the council and partly by the national lottery".'],
        ['What is special about the teaching pool?', 'Its water is warmer.', 'It is deeper.', 'It is outdoors.', '"a small teaching pool where the water is warmer".'],
        ['What happens in the sports hall on Sunday afternoons?', 'A gymnastics club for children', 'Badminton matches', 'Yoga classes', '"a children\'s gymnastics club".'],
        ['What must people do before using the fitness suite?', 'Attend an introduction session', 'Pay for a year', 'See a doctor', '"you must attend an introduction session".'],
        ['What is not allowed near the pools?', 'Glass bottles', 'Mobile phones', 'Towels', '"glass bottles are not allowed anywhere near the pools".'],
      ],
      fill: [
        ['The centre cost ____ million pounds.', ['11', 'eleven'], 'Mười một triệu bảng.'],
        ['The main pool has ____ lanes.', ['6', 'six'], 'Sáu làn bơi.'],
        ['The fitness suite has ____ machines.', ['60', 'sixty'], 'Sáu mươi máy tập.'],
        ['The football pitches have artificial ____.', ['grass'], '"with artificial grass".'],
        ['Parking is free for the first ____ hours.', ['3', 'three'], 'Miễn phí ba giờ đầu.'],
      ],
    },
    {
      title: 'Section 3 – Students prepare a seminar on memory',
      lines: [
        "W: Right, Leo, our psychology seminar is in two weeks. We are supposed to talk about techniques for improving memory.",
        'M: I have been reading about the method of loci, where you imagine placing the things you want to remember in different rooms of a house.',
        "W: Oh yes, the memory palace. That's supposed to be very old.",
        'M: It is. The Greeks used it more than two thousand years ago. I thought we could begin with a demonstration: we ask the class to remember a shopping list of twenty items using that method.',
        "W: That's a nice idea, but it might take too long. We only have twenty-five minutes altogether. Let us use ten items instead.",
        'M: Fair enough. What else should we cover?',
        "W: I'd like to talk about sleep. There is good evidence that a short nap after studying helps people remember more.",
        'M: And I could describe the testing effect, the idea that testing yourself is more effective than reading your notes again.',
        'W: Perfect. Do we need slides?',
        "M: A few, but with pictures rather than text. I'll prepare them if you make the handout.",
        "W: OK. And we need to send our plan to Dr. Rossi by Thursday. I'll email her tonight.",
      ],
      qs: [
        ['What is the method of loci?', 'Imagining items in the rooms of a house', 'Repeating words aloud', 'Writing lists in order', '"imagine placing the things you want to remember in different rooms of a house".'],
        ['Why does the woman want a shorter demonstration?', 'They have limited time.', 'The class is small.', 'The method is too difficult.', '"We only have twenty-five minutes altogether".'],
        ['What does the woman want to talk about?', 'The effect of sleep', 'The testing effect', 'Diet and memory', '"I\'d like to talk about sleep".'],
        ['What is the testing effect?', 'Testing yourself works better than rereading.', 'Exams damage memory.', 'Tests should be taken in the morning.', '"testing yourself is more effective than reading your notes again".'],
        ['Who will make the handout?', 'The woman', 'The man', 'Dr. Rossi', '"I\'ll prepare them if you make the handout" – "OK".'],
      ],
      fill: [
        ['The seminar is in ____ weeks.', ['2', 'two'], 'Hai tuần nữa.'],
        ['The method was used by the ____ over two thousand years ago.', ['Greeks'], '"The Greeks used it".'],
        ['They will ask the class to remember ____ items.', ['10', 'ten'], 'Dùng mười món thay vì hai mươi.'],
        ['A short ____ after studying helps people remember more.', ['nap'], '"a short nap after studying".'],
        ['The plan must be sent to Dr. Rossi by ____.', ['Thursday'], 'Gửi kế hoạch trước thứ Năm.'],
      ],
    },
  ],
  // Bài đọc 1 – Why We Forget (nối tiếp)
  r1: {
    text: 'Memory can also be changed after it has been stored. In a famous series of experiments in the 1970s, the American psychologist Elizabeth Loftus showed volunteers a film of a car accident and then asked them questions about it. Those who were asked how fast the cars were going when they "smashed" into each other gave higher estimates of speed than those asked about cars that "hit" each other, and a week later they were more likely to remember broken glass, although there had been none in the film. Each time we recall an event, it seems, we rebuild it, and new information can slip in.\n\nThis has serious consequences for the legal system, since courts have traditionally placed great trust in the confident testimony of witnesses. It also explains why brothers and sisters may sincerely disagree about what happened in their childhood. Some researchers now describe memory as less like a recording and more like a story that we retell, and slightly rewrite, throughout our lives.',
    qs: [
      ['T', 'The wording of a question influenced what Loftus\'s volunteers remembered.', 'Từ "smashed" khiến ước lượng tốc độ cao hơn.'],
      ['F', 'The film shown by Loftus included broken glass.', 'Trong phim không có kính vỡ.'],
      ['NG', 'Loftus later worked as an adviser to the police.', 'Bài không đề cập.'],
      ['What does the passage suggest about recalling an event?', 'The memory is rebuilt each time.', 'The memory becomes more accurate.', 'The memory is unaffected.', 'The memory is quickly erased.', '"Each time we recall an event... we rebuild it".'],
    ],
    fill: [
      ['Courts have traditionally trusted the confident ____ of witnesses.', ['testimony'], '"the confident testimony of witnesses".'],
    ],
  },
  reading: [
    {
      title: 'Salt: The Mineral That Shaped History',
      text: 'Salt is so cheap and plentiful today that it is hard to imagine a time when people fought wars over it. Yet for thousands of years it was one of the most valuable substances in the world. The human body cannot function without it, and before refrigeration it was the principal means of preserving meat and fish. A community with a reliable supply of salt could store food for the winter, feed armies and trade over long distances.\n\nEvidence of salt production goes back at least eight thousand years. At Lake Yuncheng in northern China, people harvested the crystals left on the shore when the water evaporated each summer. In Europe, the ancient settlement of Hallstatt in Austria grew rich from underground salt mines; the name itself comes from an old word for salt. Miners there worked by the light of burning pine sticks, and the salt has preserved their leather shoes and woollen clothing in astonishing condition.\n\nGovernments quickly realised that salt was an ideal thing to tax, because everyone needed it. The Chinese state controlled the trade for over two thousand years. In France, a hated salt tax known as the gabelle forced every person above the age of eight to buy a fixed quantity each year at a price set by the king. Anger at the gabelle was one of the causes of the French Revolution. In 1930, Mahatma Gandhi led thousands of followers on a walk of nearly four hundred kilometres to the sea to make salt illegally, in protest against the British tax in India.\n\nSalt has left its mark on language as well. Roman soldiers were sometimes given an allowance to buy salt, and the Latin word for this payment is the origin of the English word "salary". Many European towns owe their names to the mineral, among them Salzburg, which means "salt castle".\n\nThe situation changed in the nineteenth century. Geologists discovered that enormous deposits of rock salt lie beneath the ground in many countries, and new drilling methods made them easy to reach. Canning and later refrigeration reduced the need for salted food. Prices collapsed.\n\nToday only a small proportion of the salt produced is eaten. The chemical industry uses most of it to manufacture plastics, paper and soap, and in cold countries huge quantities are spread on roads in winter to melt ice. Health authorities, meanwhile, advise people to consume less than five grams a day, since too much salt raises blood pressure. The mineral that was once worth a fortune is now something doctors warn us to avoid.',
      qs: [
        ['T', 'Salt was the main way to keep food from spoiling before refrigeration.', 'Đoạn 1: phương tiện chính để bảo quản thịt, cá.'],
        ['F', 'People at Lake Yuncheng obtained salt by mining underground.', 'Đoạn 2: thu tinh thể trên bờ khi nước bốc hơi.'],
        ['T', 'Clothing belonging to ancient miners has survived at Hallstatt.', 'Đoạn 2: muối bảo quản giày da và quần áo len.'],
        ['NG', 'The miners at Hallstatt were paid in salt.', 'Bài không nói họ được trả công thế nào.'],
        ['F', 'Under the gabelle, people could decide how much salt to buy.', 'Đoạn 3: buộc mua một lượng cố định.'],
        ['T', 'Gandhi\'s march was a protest against a tax.', 'Đoạn 3: phản đối thuế muối của Anh.'],
        ['Why was salt considered ideal for taxation?', 'Everybody needed it.', 'It was easy to weigh.', 'Only rich people bought it.', 'It could not be stored.', 'Đoạn 3: "because everyone needed it".'],
        ['What is the origin of the word "salary"?', 'A payment to Roman soldiers for salt', 'The name of an Austrian town', 'A French tax', 'A Chinese word for trade', 'Đoạn 4: khoản trợ cấp mua muối cho lính La Mã.'],
        ['Why did the price of salt fall in the nineteenth century?', 'Large underground deposits became easy to reach.', 'Governments abolished all taxes.', 'People stopped eating salt.', 'The sea became saltier.', 'Đoạn 5: phát hiện mỏ muối lớn và kỹ thuật khoan mới.'],
        ['What is most salt used for today?', 'The chemical industry', 'Preserving food', 'Cooking at home', 'Medicine', 'Đoạn cuối: công nghiệp hóa chất dùng phần lớn.'],
      ],
      fill: [
        ['Hallstatt miners worked by the light of burning ____ sticks.', ['pine'], 'Đoạn 2: "burning pine sticks".'],
        ['Salzburg means "salt ____".', ['castle'], 'Đoạn 4: "salt castle".'],
        ['In cold countries salt is spread on roads to melt ____.', ['ice'], 'Đoạn cuối: "to melt ice".'],
      ],
    },
    {
      title: 'The Open-Plan Office',
      text: 'The open-plan office, in which employees work side by side in a large shared space rather than in separate rooms, is often thought of as a recent fashion. In fact, the idea dates from the 1950s, when a German design team developed the "office landscape". Desks were arranged in irregular groups, separated by plants and low screens, so that information could flow freely between colleagues and managers would be more approachable.\n\nCompanies liked the concept for a simpler reason: it was cheap. Removing walls allowed far more people to fit into the same floor area, and the space could be rearranged quickly when teams changed. By the end of the twentieth century, about seventy percent of office workers in the United States sat in some kind of open layout.\n\nSupporters claim that open offices encourage communication and creativity. If people can see one another, the argument goes, they will talk more and exchange ideas. However, when researchers actually measure behaviour, the results are often the opposite. In 2018 Ethan Bernstein and Stephen Turban of Harvard Business School studied two large firms that were moving to open-plan designs. Employees wore electronic badges that recorded their conversations. After the move, face-to-face interaction fell by about seventy percent, while the number of emails and messages increased. Feeling watched, people apparently withdrew, put on headphones and communicated electronically instead.\n\nNoise is the complaint heard most frequently. Experiments show that overheard speech is especially distracting because the brain cannot help trying to follow it; half a conversation, such as someone talking on the telephone, is worse still. A Danish study found that workers in open-plan offices took sixty-two percent more days of sick leave than those in private rooms, perhaps because infections spread more easily, perhaps because of stress.\n\nNot all the evidence is negative. Open spaces do make it easier to ask a quick question, and new employees learn faster by watching experienced colleagues. Younger workers tend to dislike them less than older ones. Much depends on the job: a team designing an advertising campaign has different needs from an accountant checking figures.\n\nMany firms are now trying a mixed approach, sometimes called activity-based working. The building offers a variety of settings, including quiet rooms where talking is forbidden, small booths for telephone calls, and open tables for group work, and staff choose the place that suits their task. The rise of working from home has added a further argument. If people can concentrate at home, the main purpose of the office may be to bring them together, and for that an open space may be exactly what is needed.',
      qs: [
        ['F', 'The open-plan office was invented in the United States in the 1990s.', 'Đoạn 1: ý tưởng từ thập niên 1950 của nhóm thiết kế Đức.'],
        ['T', 'The original German design used plants to separate groups of desks.', 'Đoạn 1: ngăn bằng cây và vách thấp.'],
        ['T', 'Low cost was an important reason for the popularity of open offices.', 'Đoạn 2: "it was cheap".'],
        ['F', 'In the Harvard study, employees talked face to face more after the change.', 'Đoạn 3: giảm khoảng bảy mươi phần trăm.'],
        ['NG', 'The two firms in the Harvard study later returned to private offices.', 'Bài không nói.'],
        ['T', 'Hearing one side of a telephone call is more distracting than hearing a whole conversation.', 'Đoạn 4: "half a conversation... is worse still".'],
        ['NG', 'The Danish study was paid for by a furniture company.', 'Bài không đề cập.'],
        ['How was communication recorded in the Harvard study?', 'With electronic badges', 'With video cameras', 'With questionnaires', 'With telephone records', 'Đoạn 3: nhân viên đeo thẻ điện tử.'],
        ['According to the passage, who benefits from open offices?', 'New employees learning the job', 'Accountants checking figures', 'Workers with infections', 'People who dislike email', 'Đoạn 5: nhân viên mới học nhanh hơn.'],
        ['What is activity-based working?', 'Offering different spaces for different tasks', 'Giving every employee a private room', 'Paying staff according to activity', 'Working only from home', 'Đoạn cuối: nhiều kiểu không gian, nhân viên tự chọn.'],
      ],
      fill: [
        ['The German design of the 1950s was called the "office ____".', ['landscape'], 'Đoạn 1: "office landscape".'],
        ['Feeling watched, many people put on ____.', ['headphones'], 'Đoạn 3: "put on headphones".'],
        ['Open-plan workers took sixty-two percent more days of ____ leave.', ['sick'], 'Đoạn 4: "sick leave".'],
        ['Small ____ are provided for telephone calls.', ['booths'], 'Đoạn cuối: "small booths for telephone calls".'],
      ],
    },
  ],
};
