/** Bộ đề TOEIC Listening & Reading cố định – đề 3 và 4 (định dạng rút gọn, xem helpers.ts) */
import { ToeicTest, toeicTest } from './helpers';

export const TESTS: ToeicTest[] = [
  // =========================================================================== ĐỀ 3
  toeicTest(3, {
    p2: [
      ['Who approved the new budget?', 'The finance director did.', 'It was quite expensive.', 'At the end of the quarter.', 'Who → người thực hiện.'],
      ['When is the deadline for the proposal?', 'This Friday at noon.', 'To the main office.', 'About ten pages long.', 'When → thời hạn.'],
      ['Why is the store closed today?', "They're taking inventory.", 'On Maple Avenue.', 'Yes, it is close to here.', 'Why → lý do. "close" là bẫy từ đồng âm.'],
      ['Have you met the new accountant yet?', 'Yes, we were introduced this morning.', "I'll count them again.", 'In the accounting office.', 'Câu hỏi Yes/No ở hiện tại hoàn thành.'],
      ['How do I get to the training room?', 'Take the elevator to the fifth floor.', 'It starts at two.', 'The train was late.', 'How do I get to → chỉ đường. "train" là bẫy âm.'],
      ['Would you mind closing the window?', "Not at all. It's getting cold.", 'Yes, I mind my own business.', 'The store closes at nine.', '"Would you mind...?" → "Not at all" = đồng ý làm.'],
      ['Which design did the client choose?', 'The one with the blue logo.', 'She is a graphic designer.', 'By next Tuesday.', 'Which → chỉ ra một lựa chọn cụ thể.'],
      ["Let's review the contract before we sign it.", "Good idea. I'll print a copy.", 'He signed up yesterday.', 'I saw that view too.', 'Lời đề nghị → tán thành.'],
    ],
    p3: [
      {
        title: 'A catering order',
        lines: [
          "W: Hello, I'm calling from Brandon Law Firm. We'd like to order lunch for a meeting on Thursday.",
          'M: Certainly. How many people are you expecting?',
          'W: Eighteen. We would like sandwiches and salad. And three people are vegetarian.',
          "M: That's no problem. We can deliver at eleven forty-five so that everything is ready by noon. Could I have the address?",
          "W: It's two twenty Harbor Street, on the ninth floor. Please ask for Emma at the front desk.",
        ],
        qs: [
          ['Where does the woman work?', 'At a law firm', 'At a restaurant', 'At a hotel', 'At a delivery company', '"I\'m calling from Brandon Law Firm".'],
          ['What does the woman say about some of the guests?', 'They do not eat meat.', 'They will arrive late.', 'They are new clients.', 'They prefer hot food.', '"three people are vegetarian".'],
          ['What does the man ask for?', 'An address', 'A deposit', 'A phone number', 'A menu', '"Could I have the address?"'],
        ],
      },
      {
        title: 'A delayed report',
        lines: [
          'M: Sandra, is the market research report ready? The director wants to see it this afternoon.',
          "W: Almost. I'm still waiting for the survey data from the Singapore office.",
          'M: When do you expect to get it?',
          'W: They promised to send it by eleven. After that I need about an hour to add the charts.',
          "M: OK. I'll tell the director to expect it at one o'clock. Let me know if anything changes.",
        ],
        qs: [
          ['What are the speakers discussing?', 'A report that is not finished', 'A trip to Singapore', 'A new director', 'A customer survey form', 'Báo cáo nghiên cứu thị trường chưa xong.'],
          ['What is the woman waiting for?', 'Some data from another office', 'Approval from the director', 'A new computer', 'A printed chart', '"waiting for the survey data from the Singapore office".'],
          ['What will the man do next?', 'Inform the director of the timing', 'Call the Singapore office', 'Make the charts himself', 'Cancel the meeting', '"I\'ll tell the director to expect it at one o\'clock".'],
        ],
      },
    ],
    p4: [
      {
        title: 'Radio traffic report',
        lines: [
          'M: This is Dave Morris with your seven a.m. traffic update on Radio Ninety-Eight.',
          'M: Drivers should avoid Highway Nine northbound, where an overturned truck is blocking two lanes near the Mill Road exit. Crews expect to clear the road in about ninety minutes.',
          'M: In the meantime, we recommend taking River Drive instead. Downtown, all lanes are moving well. Stay tuned for the weather forecast, coming up right after this commercial break.',
        ],
        qs: [
          ['What is causing the traffic problem?', 'An overturned truck', 'Road construction', 'A heavy storm', 'A broken traffic light', '"an overturned truck is blocking two lanes".'],
          ['What does the speaker recommend?', 'Using River Drive', 'Leaving home later', 'Taking the subway', 'Avoiding downtown', '"we recommend taking River Drive instead".'],
          ['What will listeners hear next?', 'A commercial', 'A news interview', 'A sports report', 'A song', 'Dự báo thời tiết đến SAU quảng cáo → nghe tiếp theo là quảng cáo.'],
        ],
      },
      {
        title: 'Introduction of a guest speaker',
        lines: [
          'W: Good evening, everyone, and thank you for joining the monthly meeting of the Small Business Association.',
          'W: Tonight I am delighted to introduce Robert Tanaka. Mr. Tanaka started a bicycle repair shop in his garage twelve years ago, and today he owns nine stores across the state.',
          'W: He will share his advice on how to keep customers coming back. After his talk, there will be time for questions, and copies of his new book will be on sale at the back of the room.',
        ],
        qs: [
          ['Where is the talk taking place?', 'At a business association meeting', 'At a bookstore', 'At a bicycle race', 'At a university lecture', '"the monthly meeting of the Small Business Association".'],
          ['What will Mr. Tanaka talk about?', 'Keeping customers loyal', 'Repairing bicycles', 'Writing a book', 'Borrowing money', '"how to keep customers coming back".'],
          ['What can listeners do after the talk?', 'Buy a book', 'Tour a store', 'Receive a free bicycle', 'Join the association', '"copies of his new book will be on sale".'],
        ],
      },
    ],
    p5: [
      ['The manager asked everyone to arrive ____ for the client presentation.', 'early', 'earliest', 'earlier than', 'the early', 'Trạng từ "early" bổ nghĩa cho "arrive".'],
      ['Mr. Ortega is ____ for hiring all new warehouse staff.', 'responsible', 'responsibly', 'responsibility', 'responsibilities', '"be responsible for": cần tính từ.'],
      ['The package was sent ____ express mail on Tuesday.', 'by', 'at', 'with', 'in', '"by express mail": bằng phương thức nào.'],
      ['Ms. Lang could not attend the meeting, so she sent an assistant in ____ place.', 'her', 'she', 'hers', 'herself', 'Tính từ sở hữu trước danh từ "place".'],
      ['Sales have risen ____ since the advertising campaign began.', 'steadily', 'steady', 'steadied', 'steadiness', 'Trạng từ bổ nghĩa cho "have risen".'],
      ['The warranty does not cover damage ____ by improper use.', 'caused', 'causing', 'cause', 'causes', 'Rút gọn mệnh đề quan hệ bị động: damage (which is) caused by.'],
      ['Please let us know ____ you will be able to attend the banquet.', 'whether', 'either', 'unless', 'though', '"let us know whether": cho biết liệu có... hay không.'],
      ['The factory produces ____ twice as many units as it did last year.', 'nearly', 'near', 'nearby', 'nearest', '"nearly twice": gần gấp đôi.'],
      ['A ____ of the meeting will be emailed to all participants.', 'summary', 'summarize', 'summarized', 'summarizing', 'Sau mạo từ "A" cần danh từ.'],
      ['The museum will remain open ____ the renovation work.', 'during', 'while', 'when', 'as', '"during + cụm danh từ"; "while" cần mệnh đề.'],
      ['Applicants should have at least two years of ____ experience.', 'relevant', 'relevantly', 'relevance', 'relevancy', 'Tính từ bổ nghĩa cho "experience".'],
      ['If you have any questions, do not ____ to contact our help desk.', 'hesitate', 'hesitation', 'hesitant', 'hesitantly', '"do not hesitate to + V": đừng ngần ngại.'],
    ],
    p6: [
      {
        title: 'Email: Job interview invitation',
        text: 'Dear Ms. Farrell,\n\nThank you for applying for the position of project coordinator at Delmar Construction. We were (1)____ by your experience and would like to invite you to an interview on Tuesday, May 9, at 10:00 a.m.\n\nThe interview will take place at our head office and should last about forty-five minutes. (2)____. Please bring a photo ID, as you will need it to enter the building.\n\nKindly reply to this email to (3)____ your attendance.\n\nBest regards,\nOwen Blake\nHuman Resources',
        qs: [
          ['(1) ____', 'impressed', 'impressive', 'impressing', 'impression', 'Người cảm thấy ấn tượng → "were impressed by".'],
          ['(2) ____', 'You will meet with two members of our management team.', 'The position has already been filled.', 'Our company was founded in 1985.', 'Construction work begins at 7:00 a.m.', 'Đoạn đang mô tả buổi phỏng vấn → câu nói ai sẽ phỏng vấn là phù hợp.'],
          ['(3) ____', 'confirm', 'confirmed', 'confirmation', 'confirming', '"to + V nguyên mẫu" chỉ mục đích.'],
        ],
      },
      {
        title: 'Notice: Library hours',
        text: 'CEDAR HILL PUBLIC LIBRARY\n\nStarting September 1, the library will extend its opening hours on weekdays. We will now close at 9:00 p.m. (1)____ of 7:00 p.m., Monday through Thursday. This change was made in response to requests from many of our (2)____.\n\nWeekend hours will stay the same. In addition, the second-floor study rooms can now be reserved online up to one week in (3)____.\n\nWe look forward to seeing you.',
        qs: [
          ['(1) ____', 'instead', 'because', 'in spite', 'ahead', '"instead of": thay vì.'],
          ['(2) ____', 'patrons', 'suppliers', 'tenants', 'passengers', '"patrons" = người sử dụng thư viện.'],
          ['(3) ____', 'advance', 'front', 'ahead', 'early', 'Cụm cố định "in advance": trước.'],
        ],
      },
    ],
    p7: [
      {
        title: 'Coupon: Marco’s Pizza',
        text: 'MARCO\'S PIZZA – Grand Reopening!\n\nWe have moved to a larger location at 48 Station Road. To celebrate, bring this coupon and enjoy:\n\n• 20% off any large pizza\n• A free soft drink with every lunch special (11 a.m.–2 p.m., weekdays only)\n\nCoupon valid until March 31. One coupon per table. Cannot be used for delivery orders or combined with other offers.',
        qs: [
          ['Why is Marco\'s Pizza offering the coupon?', 'It has moved to a new location.', 'It has a new owner.', 'It is celebrating an anniversary.', 'It has a new menu.', '"We have moved to a larger location... To celebrate".'],
          ['When can customers get a free soft drink?', 'At lunchtime on weekdays', 'Every evening', 'On weekends only', 'With any large pizza', 'Lunch special 11 a.m.–2 p.m., chỉ ngày thường.'],
          ['What is true about the coupon?', 'It cannot be used for delivery.', 'It never expires.', 'It may be combined with other offers.', 'Each customer may use two.', '"Cannot be used for delivery orders".'],
        ],
      },
      {
        title: 'Letter: Subscription renewal',
        text: 'Dear Mr. Lindgren,\n\nYour subscription to Business Horizons magazine will end with the June issue. Renew now, and you will continue to receive twelve issues a year for only $48, which is 40 percent less than the newsstand price.\n\nAs a thank-you, subscribers who renew before May 15 will also receive free access to our digital archive, which contains every article published since 2005.\n\nTo renew, return the enclosed card in the prepaid envelope or visit our website.\n\nSincerely,\nGrace Holloway\nCirculation Manager',
        qs: [
          ['What is the purpose of the letter?', 'To encourage a reader to renew a subscription', 'To announce a price increase', 'To apologize for a late delivery', 'To introduce a new magazine', 'Thư nhắc gia hạn đặt báo.'],
          ['How often is the magazine published?', 'Monthly', 'Weekly', 'Every two months', 'Four times a year', '"twelve issues a year" = hàng tháng.'],
          ['What will Mr. Lindgren receive if he renews before May 15?', 'Access to past articles online', 'A free extra issue', 'A 40 percent refund', 'A prepaid envelope', '"free access to our digital archive".'],
        ],
      },
      {
        title: 'Article: New bus route',
        text: 'The Metro Transit Authority announced yesterday that a new express bus route will begin service on January 8. Route 60 will connect the airport with the central train station, stopping only at City Hall and the Convention Center. — [1] —\n\nThe trip is expected to take 25 minutes, about half the time of the current local service. — [2] — Buses will run every 15 minutes from 5 a.m. to midnight.\n\nA one-way fare will cost $4. — [3] — Transit officials say the route was planned mainly for business travelers attending events downtown. — [4] —',
        qs: [
          ['Where does Route 60 NOT stop?', 'At the university', 'At City Hall', 'At the Convention Center', 'At the airport', 'Bài chỉ nêu sân bay, ga trung tâm, City Hall và Convention Center.'],
          ['How long does the current local service take?', 'About 50 minutes', 'About 25 minutes', 'About 15 minutes', 'About an hour and a half', '25 phút bằng "about half the time" của tuyến hiện tại → khoảng 50 phút.'],
          ['In which position does this sentence best belong? "Monthly pass holders may ride at no additional charge."', '[3]', '[1]', '[2]', '[4]', 'Câu nói về vé tháng nên đứng ngay sau câu về giá vé ($4).'],
        ],
      },
    ],
  }),

  // =========================================================================== ĐỀ 4
  toeicTest(4, {
    p2: [
      ['How often does the shuttle bus run?', 'Every twenty minutes.', 'From the main gate.', 'It costs two dollars.', 'How often → tần suất.'],
      ['Where should I leave these documents?', "On Ms. Park's desk, please.", 'Before five o\'clock.', 'They left an hour ago.', 'Where → nơi chốn. "left" là bẫy lặp từ.'],
      ['Who will give the opening speech?', 'The company president.', 'It opens at nine.', 'About fifteen minutes.', 'Who → người.'],
      ["You've used this software before, haven't you?", 'Yes, at my previous job.', 'It was very soft.', "No, I haven't worn it.", 'Câu hỏi đuôi → xác nhận kèm thông tin.'],
      ['Can I help you carry those boxes?', 'Thanks, they are quite heavy.', 'She carries a briefcase.', 'In the storage room.', 'Lời đề nghị giúp → cảm ơn và nhận lời.'],
      ['When did you order the replacement parts?', 'Last Wednesday.', 'From the supplier in Ohio.', 'Three of them.', 'When + quá khứ → thời điểm trong quá khứ.'],
      ['Why don\'t we have lunch at the new Thai restaurant?', 'Sure, I heard it is excellent.', 'Because I was busy.', 'I had a sandwich.', '"Why don\'t we...?" là lời rủ → đồng ý.'],
      ['The quarterly meeting has been moved to Room 12.', 'Thanks for letting me know.', 'It moved very slowly.', 'Twelve people came.', 'Câu thông báo → cảm ơn vì đã báo.'],
    ],
    p3: [
      {
        title: 'Returning a product',
        lines: [
          "W: Excuse me, I bought this blender here last week, but the lid doesn't close properly.",
          "M: I'm sorry about that. Do you have your receipt?",
          'W: Yes, here it is. I would like to exchange it for the same model if possible.',
          "M: Let me check. I'm afraid that model is sold out, but we will have more on Thursday. Or I could give you a refund today.",
          "W: I'll wait until Thursday. I really like this one.",
          "M: Fine. I'll put one aside for you. May I have your phone number?",
        ],
        qs: [
          ['What is wrong with the blender?', 'The lid does not close.', 'The motor is too loud.', 'It is the wrong color.', 'It will not turn on.', '"the lid doesn\'t close properly".'],
          ['What does the woman decide to do?', 'Wait for a new blender', 'Get a refund', 'Buy a different model', 'Repair it herself', '"I\'ll wait until Thursday".'],
          ['What does the man ask for?', 'A phone number', 'A credit card', 'An email address', 'A signature', '"May I have your phone number?"'],
        ],
      },
      {
        title: 'Choosing a venue',
        lines: [
          "M: Lisa, we need to choose a venue for the retirement dinner for Mr. Okada. There will be about forty guests.",
          'W: I looked at three places. The Garden Terrace is beautiful, but it only holds thirty people.',
          'M: What about the other two?',
          "W: Bella Vista is big enough, but it's fully booked that evening. That leaves the Harbor Grill.",
          'M: Then let\'s reserve it today. Could you also ask whether they have a microphone we can use for the speeches?',
        ],
        graphic: ['Venue options', 'Venue | Capacity | Price per person\nGarden Terrace | 30 | $55\nBella Vista | 60 | $48\nHarbor Grill | 50 | $42'],
        qs: [
          ['What event are the speakers planning?', 'A retirement dinner', 'A product launch', 'A wedding', 'A training seminar', '"the retirement dinner for Mr. Okada".'],
          ['Look at the graphic. How much will the speakers pay per person?', '$42', '$55', '$48', '$60', 'Họ chọn Harbor Grill → $42 một người.'],
          ['What does the man ask the woman to find out?', 'Whether a microphone is available', 'Whether parking is free', 'Whether the menu can be changed', 'Whether the room has a view', '"ask whether they have a microphone".'],
        ],
      },
    ],
    p4: [
      {
        title: 'Recorded message from an electric company',
        lines: [
          'W: Thank you for calling Northern Power. We are aware of a power outage affecting the Lakewood and Pine Hill areas.',
          'W: The outage was caused by a fallen tree, and our repair crews are working at the site. We expect service to be restored by four p.m.',
          'W: For safety, please stay away from any fallen power lines. To report an emergency, press one. For billing questions, please call back during regular business hours.',
        ],
        qs: [
          ['What is the message mainly about?', 'A power outage', 'A new billing system', 'A price increase', 'An office relocation', '"a power outage affecting the Lakewood and Pine Hill areas".'],
          ['What caused the problem?', 'A fallen tree', 'A flood', 'A fire', 'A computer error', '"caused by a fallen tree".'],
          ['Why should a caller press one?', 'To report an emergency', 'To pay a bill', 'To speak about a new account', 'To hear the message again', '"To report an emergency, press one".'],
        ],
      },
      {
        title: 'Excerpt from a staff meeting',
        lines: [
          'M: Before we finish, I have one more announcement. Starting next month, the company will pay half the cost of a gym membership for every full-time employee.',
          'M: We have made an agreement with FitZone, which has a branch just two blocks from here. To sign up, bring your employee ID to their front desk.',
          'M: We are doing this because a staff survey showed that many of you want more support for a healthy lifestyle. I will email the details this afternoon.',
        ],
        qs: [
          ['What is the speaker announcing?', 'A new employee benefit', 'A change of office hours', 'A company sports day', 'A new cafeteria menu', 'Công ty trả nửa phí phòng gym.'],
          ['What should employees bring to FitZone?', 'Their employee ID', 'A registration fee', 'A letter from a doctor', 'A completed survey', '"bring your employee ID to their front desk".'],
          ['Why did the company make this decision?', 'Because of survey results', 'Because of a government rule', 'Because FitZone requested it', 'Because profits increased', '"a staff survey showed that many of you want more support".'],
        ],
      },
    ],
    p5: [
      ['The new printer is much ____ than the one it replaced.', 'faster', 'fast', 'fastest', 'as fast', 'So sánh hơn với "than".'],
      ['All requests for vacation must be submitted in ____.', 'writing', 'written', 'write', 'wrote', 'Cụm "in writing": bằng văn bản.'],
      ['Mr. Yoon was promoted ____ regional manager last month.', 'to', 'for', 'as to', 'into', '"be promoted to + chức vụ".'],
      ['The workshop was so ____ that many participants asked for a second session.', 'informative', 'inform', 'information', 'informatively', '"so + adj + that".'],
      ['____ of the two proposals was accepted by the board.', 'Neither', 'None', 'Any', 'No', '"Neither of the two" đi với động từ số ít.'],
      ['The supplier has agreed ____ the price by five percent.', 'to reduce', 'reducing', 'reduce', 'reduced', '"agree to + V".'],
      ['Our customer service line is available twenty-four hours ____ day.', 'a', 'the', 'in', 'on', '"twenty-four hours a day".'],
      ['The building\'s main entrance is ____ being repaired.', 'currently', 'current', 'currency', 'more current', 'Trạng từ đứng giữa "is" và "being repaired".'],
      ['Employees who work overtime will be paid ____.', 'accordingly', 'according', 'accord', 'accordance', 'Trạng từ "accordingly": tương ứng.'],
      ['The sales figures were lower than ____ this quarter.', 'expected', 'expecting', 'expect', 'expectation', '"lower than expected": thấp hơn dự kiến.'],
      ['Ms. Diaz ____ the report by the time her manager returned.', 'had finished', 'finishes', 'has finished', 'will finish', '"by the time + quá khứ đơn" → quá khứ hoàn thành.'],
      ['Guests are asked to return their room keys ____ checkout.', 'upon', 'among', 'between', 'onto', '"upon checkout": khi trả phòng.'],
    ],
    p6: [
      {
        title: 'Email: Software update',
        text: 'To: All employees\nFrom: IT Support\nSubject: System update this weekend\n\nThe company email system will be updated this Saturday between 10:00 p.m. and 2:00 a.m. During this time, you will not be able to send (1)____ receive messages. (2)____.\n\nAfter the update, you may be asked to enter your password again the first time you log in. If you (3)____ any problems on Monday morning, please contact the help desk at extension 400.',
        qs: [
          ['(1) ____', 'or', 'but', 'so', 'yet', 'Phủ định "not ... A or B": không gửi cũng không nhận.'],
          ['(2) ____', 'We recommend saving any unfinished drafts before you leave on Friday.', 'The help desk has hired three new technicians.', 'Email was invented in the 1970s.', 'Please remember to turn off the office lights.', 'Hệ thống tạm ngừng → khuyên lưu thư nháp trước khi về.'],
          ['(3) ____', 'experience', 'experienced', 'experiencing', 'will experience', 'Mệnh đề If loại 1: hiện tại đơn.'],
        ],
      },
      {
        title: 'Article: Company news',
        text: 'Halston Foods announced on Monday that it will build a new distribution center in Greenville. The facility, (1)____ is expected to open next spring, will create about 200 jobs in the area.\n\n"Greenville was chosen because of its excellent highway connections," said company spokesperson Rita Gomez. The center will allow Halston to deliver products to stores in the region more (2)____.\n\nHiring for warehouse and office positions will begin in January. (3)____ candidates can apply through the company website.',
        qs: [
          ['(1) ____', 'which', 'who', 'what', 'where', 'Mệnh đề quan hệ không xác định chỉ vật, làm chủ ngữ → "which".'],
          ['(2) ____', 'quickly', 'quick', 'quicker', 'quickness', '"more + trạng từ" bổ nghĩa cho "deliver".'],
          ['(3) ____', 'Interested', 'Interesting', 'Interest', 'Interests', 'Ứng viên quan tâm → "Interested candidates".'],
        ],
      },
    ],
    p7: [
      {
        title: 'Online review',
        text: 'Hotel Review: The Wexford Inn ★★★★☆\nPosted by Gerald M.\n\nI stayed at the Wexford Inn for three nights during a sales conference. The location is ideal, only a five-minute walk from the convention center. My room was quiet and spotless, and the front desk staff were extremely helpful when I needed to print some documents late at night.\n\nMy only complaint is the breakfast. It ends at 8:30, which was too early for me on the last day, and the choice was limited. Still, I would stay here again on my next business trip.',
        qs: [
          ['Why was the reviewer staying at the hotel?', 'He was attending a conference.', 'He was on a family vacation.', 'He was inspecting the hotel.', 'He was moving to the city.', '"during a sales conference".'],
          ['What did the hotel staff help the reviewer do?', 'Print documents', 'Find a taxi', 'Change rooms', 'Book a restaurant', '"when I needed to print some documents late at night".'],
          ['What did the reviewer dislike?', 'The breakfast service', 'The noise', 'The location', 'The room size', '"My only complaint is the breakfast".'],
        ],
      },
      {
        title: 'Memo: Office recycling program',
        text: 'MEMO\nTo: All staff\nFrom: Julia Reyes, Office Manager\nDate: February 3\n\nBeginning next Monday, we will introduce a new recycling program. Blue bins for paper and green bins for plastic bottles and cans will be placed beside each printer and in the kitchen. Individual trash cans under desks will be removed.\n\nLast year, our office threw away almost two tons of paper. Our goal is to cut that amount by half. The department that recycles the most by the end of June will win a catered lunch.',
        qs: [
          ['What will happen next Monday?', 'A recycling program will start.', 'New printers will be installed.', 'The kitchen will be closed.', 'A lunch will be served.', '"Beginning next Monday, we will introduce a new recycling program".'],
          ['What will be taken away?', 'Trash cans under desks', 'Blue bins', 'Printers', 'Plastic bottles', '"Individual trash cans under desks will be removed".'],
          ['What can a department win?', 'A catered lunch', 'A day off', 'New office furniture', 'A cash bonus', '"will win a catered lunch".'],
        ],
      },
      {
        title: 'Schedule and email',
        text: 'RIVERSIDE COMMUNITY CENTER – Evening classes (all classes 7–9 p.m.)\nMonday: Beginner Photography – Room 2 – $90\nTuesday: Public Speaking – Room 5 – $75\nWednesday: Spanish Conversation – Room 3 – $80\nThursday: Web Design Basics – Room 2 – $110\n\n--------------------\nTo: info@riversidecc.org\nFrom: Alan Brooks\n\nI would like to sign up for one of your evening classes. I work late on Mondays and Thursdays, so those days are not possible. I give a lot of presentations at work and would like to become more confident in front of an audience. Could you tell me whether there is still space in a suitable class?',
        qs: [
          ['What is indicated about the classes?', 'They all take place at the same time of day.', 'They all cost the same.', 'They are held in the same room.', 'They are for advanced students.', 'Tất cả lớp học đều từ 7–9 giờ tối.'],
          ['Which class is Mr. Brooks most likely interested in?', 'Public Speaking', 'Beginner Photography', 'Spanish Conversation', 'Web Design Basics', 'Anh muốn tự tin hơn khi thuyết trình trước khán giả.'],
          ['How much will Mr. Brooks probably pay?', '$75', '$90', '$80', '$110', 'Lớp Public Speaking (thứ Ba) giá $75.'],
        ],
      },
    ],
  }),
];
