/** Bộ đề TOEIC Listening & Reading cố định – đề 17 và 18 (định dạng rút gọn, xem helpers.ts) */
import { ToeicTest, toeicTest } from './helpers';

export const TESTS: ToeicTest[] = [
  // =========================================================================== ĐỀ 17
  toeicTest(17, {
    p2: [
      ['When is the building inspector coming?', 'Tomorrow at ten.', 'On the top floor.', 'He inspected the roof.', 'When → thời gian.'],
      ['Who should I contact about a billing error?', 'The accounts department.', 'It was built last year.', 'About fifty dollars.', 'Who → bộ phận liên hệ.'],
      ['Where is the closest subway station?', 'Two blocks north of here.', 'Every five minutes.', 'A one-way ticket.', 'Where → vị trí.'],
      ['How was the new supplier chosen?', 'They offered the best price.', 'Last September.', 'In the warehouse.', 'How → cách thức/lý do được chọn.'],
      ['Have you tried the new cafeteria menu?', 'Not yet, but I heard it is good.', 'I tried to call you.', 'At the cafeteria.', 'Câu hỏi Yes/No → "chưa".'],
      ['Could you check these figures for me?', "Sure, give me a few minutes.", 'I paid by check.', 'They figured it out.', 'Lời nhờ → đồng ý.'],
      ['Which of these laptops would you recommend?', 'The lighter one is better for travel.', 'I recommended him.', 'Both of them were late.', 'Which → chọn và nêu lý do.'],
      ['Our flight has been delayed by two hours.', "Let's get something to eat, then.", 'Two hours ago.', 'The flight attendant.', 'Tình huống → đề xuất việc làm trong lúc chờ.'],
    ],
    p3: [
      {
        title: 'Renewing a magazine subscription',
        lines: [
          "W: Hello, I'd like to renew my subscription to Travel World magazine.",
          'M: Certainly. May I have your subscriber number?',
          'W: It is four four seven nine two.',
          'M: Thank you, Ms. Doyle. A one-year renewal is thirty-six dollars, but if you renew for two years, the price is sixty dollars, and you also receive our annual hotel guide.',
          "W: I'll take the two-year offer. Could you also change my address? I moved last month.",
          'M: Of course. What is your new address?',
        ],
        qs: [
          ['Why is the woman calling?', 'To renew a subscription', 'To cancel a subscription', 'To complain about a delivery', 'To book a hotel', '"I\'d like to renew my subscription".'],
          ['What is included with the two-year offer?', 'A hotel guide', 'A travel bag', 'A free flight', 'A calendar', '"you also receive our annual hotel guide".'],
          ['What does the woman ask the man to do?', 'Update her address', 'Send a bill', 'Lower the price', 'Stop the magazine', '"Could you also change my address?"'],
        ],
      },
      {
        title: 'Organizing a team-building day',
        lines: [
          'M: Hannah, have you thought about what we could do for the team-building day?',
          'W: I found two options. One is a cooking class, and the other is a boat trip on the river.',
          'M: The boat trip sounds fun, but what if it rains?',
          "W: That's what worries me, too. The cooking class is indoors, and it's also cheaper.",
          "M: Then let's go with that. Can you find out whether they can take sixteen people?",
          "W: I'll call them this afternoon and let you know.",
        ],
        qs: [
          ['What are the speakers planning?', 'A team-building activity', 'A client dinner', 'A training course', 'A holiday party', '"the team-building day".'],
          ['Why do the speakers decide against the boat trip?', 'The weather might be bad.', 'It is too far away.', 'It takes too long.', 'Some staff cannot swim.', '"what if it rains?"'],
          ['What will the woman do this afternoon?', 'Make a phone call', 'Pay a deposit', 'Visit the kitchen', 'Send invitations', '"I\'ll call them this afternoon".'],
        ],
      },
    ],
    p4: [
      {
        title: 'Announcement at a sports stadium',
        lines: [
          'M: Good evening, and welcome to Riverside Stadium for tonight\'s championship game.',
          'M: For your safety, please keep the stairways clear at all times. Food and drinks are on sale at the stands behind sections B and F.',
          'M: After the game, extra trains will run from Stadium Station every ten minutes until midnight. Fans who came by car are asked to exit the parking lot by the north gate only, as the south gate is closed for road work.',
        ],
        qs: [
          ['Where is the announcement being made?', 'At a sports stadium', 'At a train station', 'At a concert hall', 'At a shopping center', '"welcome to Riverside Stadium".'],
          ['What are listeners asked to keep clear?', 'The stairways', 'The parking lot', 'The food stands', 'The train platforms', '"keep the stairways clear".'],
          ['Why must drivers use the north gate?', 'The south gate is closed.', 'It is closer to the station.', 'It is free of charge.', 'It has more lights.', '"the south gate is closed for road work".'],
        ],
      },
      {
        title: 'Talk to hotel housekeeping staff',
        lines: [
          'W: Good morning, team. We have a very busy day ahead. A group of one hundred and twenty conference guests will check in this afternoon.',
          'W: That means all rooms on floors three to six must be ready by two p.m. instead of the usual three. Please start with those floors.',
          'W: Also, several guests have asked for extra pillows. You will find the room numbers on the sheet I am passing around. And remember, the staff meeting has been moved to four thirty today.',
        ],
        graphic: ['Extra pillow requests', 'Room | Pillows\n312 | 2\n405 | 1\n517 | 2\n608 | 3'],
        qs: [
          ['Why is today especially busy?', 'A large group is arriving.', 'Several staff are absent.', 'The hotel is being inspected.', 'A floor is being renovated.', '"A group of one hundred and twenty conference guests will check in".'],
          ['By what time must the rooms be ready?', 'Two p.m.', 'Three p.m.', 'Four thirty p.m.', 'Noon', '"must be ready by two p.m. instead of the usual three".'],
          ['Look at the graphic. Which room needs the most extra pillows?', 'Room 608', 'Room 312', 'Room 405', 'Room 517', 'Bảng: phòng 608 cần 3 gối.'],
        ],
      },
    ],
    p5: [
      ['The clinic is open ____ 8 a.m. to 6 p.m. on weekdays.', 'from', 'at', 'between', 'during', '"from ... to ...".'],
      ['Ms. Tyler was ____ promoted to senior analyst.', 'recently', 'recent', 'recency', 'more recent', 'Trạng từ đứng giữa "was" và V3.'],
      ['The new regulations will ____ all food manufacturers.', 'affect', 'effect', 'affection', 'effective', '"affect" (động từ): ảnh hưởng đến.'],
      ['Please keep your belongings with you at ____ times.', 'all', 'every', 'each', 'whole', '"at all times".'],
      ['The firm\'s lawyers reviewed the contract ____ signing it.', 'before', 'ahead', 'prior', 'previous', '"before + V-ing".'],
      ['The engineer gave a ____ explanation of how the system works.', 'detailed', 'detail', 'detailing', 'details', 'Tính từ trước danh từ.'],
      ['Tickets for the gala are selling ____ than expected.', 'faster', 'fast', 'fastest', 'more fast', 'So sánh hơn với "than".'],
      ['The warehouse is ____ enough to store all of our inventory.', 'large', 'largely', 'larger', 'enlarge', '"adj + enough".'],
      ['Mr. Vance ____ as chairman at the end of the year.', 'will retire', 'retired', 'has retired', 'retiring', '"at the end of the year" (tương lai) → will + V.'],
      ['The delivery was made ____ the customer was out.', 'while', 'during', 'meanwhile', 'throughout', '"while + mệnh đề".'],
      ['A ____ of opinions was expressed at the meeting.', 'variety', 'various', 'vary', 'varied', '"a variety of".'],
      ['The managers discussed the issue among ____.', 'themselves', 'them', 'their', 'they', '"among themselves": với nhau.'],
    ],
    p6: [
      {
        title: 'Email: Hotel booking confirmation',
        text: 'Dear Mr. Eriksson,\n\nThank you for choosing the Bayside Hotel. We are pleased to (1)____ your reservation for a double room from May 12 to May 15.\n\nCheck-in is available from 3:00 p.m. (2)____. In that case, you are welcome to leave your luggage with our front desk staff.\n\nBreakfast is included in your room rate and is served daily in the Garden Restaurant. Should you need to cancel, please let us know at least 48 hours in advance to (3)____ a charge.\n\nWe look forward to welcoming you.',
        qs: [
          ['(1) ____', 'confirm', 'confirmed', 'confirming', 'confirmation', '"be pleased to + V".'],
          ['(2) ____', 'If you arrive earlier, your room may not be ready.', 'Our hotel has 150 rooms.', 'The restaurant serves local seafood.', 'May is a popular month for weddings.', '"In that case" ở câu sau chỉ trường hợp đến sớm.'],
          ['(3) ____', 'avoid', 'refuse', 'remove', 'miss', '"to avoid a charge": tránh bị tính phí.'],
        ],
      },
      {
        title: 'Memo: Dress code',
        text: 'To: All staff\nFrom: Management\n\nBeginning in June, the company will introduce "Casual Fridays." On Fridays, employees may wear jeans and casual shirts (1)____ of formal business clothing.\n\nHowever, staff who have meetings with clients on a Friday are still expected to dress (2)____. Shorts, sandals, and sportswear are not acceptable at any time.\n\nWe hope this change will make the workplace more (3)____. If you have questions, please speak to your manager.',
        qs: [
          ['(1) ____', 'instead', 'rather', 'except', 'apart', '"instead of".'],
          ['(2) ____', 'professionally', 'professional', 'profession', 'professionalism', 'Trạng từ bổ nghĩa cho "dress".'],
          ['(3) ____', 'comfortable', 'comfort', 'comfortably', 'comforts', '"make + O + more + adj".'],
        ],
      },
    ],
    p7: [
      {
        title: 'Label: Medication instructions',
        text: 'ALLERCLEAR TABLETS – 24-hour allergy relief\n\nDirections: Adults and children 12 years and over: take ONE tablet once a day with water. Do not take more than one tablet in 24 hours. Not suitable for children under 12.\n\nWarnings: May cause drowsiness. Do not drive or operate machinery until you know how this medicine affects you. Ask a doctor before use if you are pregnant.\n\nStore in a cool, dry place below 25°C. Do not use after the expiry date printed on the box.',
        qs: [
          ['How often should an adult take the medicine?', 'Once a day', 'Twice a day', 'Every four hours', 'Once a week', '"take ONE tablet once a day".'],
          ['Who should NOT take the tablets?', 'Children under 12', 'Adults over 60', 'People who drive', 'People with allergies', '"Not suitable for children under 12".'],
          ['What possible effect is mentioned?', 'Feeling sleepy', 'Feeling hungry', 'Headaches', 'Fever', '"May cause drowsiness" = buồn ngủ.'],
        ],
      },
      {
        title: 'Email: Schedule change',
        text: 'To: Evening class students\nFrom: Westbrook Adult Education Center\nSubject: Accounting for Small Businesses\n\nDear Students,\n\nYour instructor, Mr. Daniel Frost, will be away at a professional conference next week. As a result, the class on Tuesday, November 5, is canceled.\n\nA make-up class will be held on Saturday, November 16, from 10:00 a.m. to noon in the usual room. If you are unable to attend, a video recording will be posted on the course website the following Monday.\n\nPlease remember that your second assignment is still due on November 12.',
        qs: [
          ['Why is the class on November 5 canceled?', 'The instructor will be at a conference.', 'The room is unavailable.', 'It is a public holiday.', 'Too few students enrolled.', '"will be away at a professional conference".'],
          ['When is the make-up class?', 'On a Saturday morning', 'On a Tuesday evening', 'On a Monday', 'On November 12', 'Thứ Bảy 16/11, 10 giờ sáng đến trưa.'],
          ['What is true about the second assignment?', 'Its deadline has not changed.', 'It has been canceled.', 'It is due on November 16.', 'It must be submitted by video.', '"is still due on November 12".'],
        ],
      },
      {
        title: 'Web page and customer review',
        text: 'TRAILBLAZER OUTDOOR GEAR – Summit 40 Backpack – $89\n• 40-liter capacity • Weight: 1.2 kg • Waterproof cover included\n• Padded laptop pocket (fits up to 15 inches)\n• Available in black, forest green, and red\nFree shipping on orders over $75. Returns accepted within 30 days.\n\n--------------------\nReview by Anthony R. ★★★★☆\nI bought the green one for a two-week hiking trip. It is comfortable even when full, and the cover kept everything dry in heavy rain. My only complaint is that one of the side zippers broke after ten days. I contacted the company, and they sent me a replacement within a week without asking me to return the first one.',
        qs: [
          ['What is included with the backpack?', 'A waterproof cover', 'A laptop', 'A water bottle', 'A hiking map', '"Waterproof cover included".'],
          ['How much did Anthony R. most likely pay for shipping?', 'Nothing', '$5', '$75', '$89', 'Giá $89 > $75 → miễn phí vận chuyển.'],
          ['What does the reviewer say about the company?', 'It replaced the product quickly.', 'It refused to help.', 'It asked him to pay for repairs.', 'It sent the wrong color.', '"they sent me a replacement within a week".'],
        ],
      },
    ],
  }),

  // =========================================================================== ĐỀ 18
  toeicTest(18, {
    p2: [
      ['Who will be leading the factory tour?', 'The production manager.', 'It lasts an hour.', 'At the main gate.', 'Who → người.'],
      ['When should we announce the winner?', 'At the end of the ceremony.', 'She won first prize.', 'On the stage.', 'When → thời điểm.'],
      ['Where do I sign?', 'At the bottom of the last page.', 'With a blue pen.', 'The sign is broken.', 'Where → vị trí ký.'],
      ['Why wasn\'t I told about the schedule change?', "I'm sorry, the email went out late.", 'On schedule.', 'It changes every week.', 'Why → xin lỗi và nêu lý do.'],
      ['How often is the software updated?', 'About once a month.', 'It is very soft.', 'By the IT department.', 'How often → tần suất.'],
      ['Do you mind if I open the window?', 'Not at all. Go ahead.', 'Yes, it is open.', 'I changed my mind.', '"Do you mind if...?" → "Not at all" = cứ tự nhiên.'],
      ['Should I call the client now or wait until tomorrow?', "You'd better call now.", 'Yes, you should.', 'He called me.', 'Câu hỏi lựa chọn → chọn một.'],
      ['The conference room projector is not working.', 'There is a spare one in the storeroom.', 'It is a big project.', 'He works in the conference room.', 'Vấn đề → giải pháp thay thế.'],
    ],
    p3: [
      {
        title: 'At a post office',
        lines: [
          "M: Hi, I need to send this package to Germany. What's the fastest way?",
          'W: Express International takes three business days and costs forty-two dollars. Standard airmail takes about ten days and costs eighteen.',
          "M: It's a birthday present, and the birthday is next Wednesday. I'd better use express.",
          'W: All right. Please fill in this customs form. What is inside the package?',
          'M: A sweater and some books.',
          'W: Thank you. Would you like to insure it for an extra three dollars?',
        ],
        qs: [
          ['Where is the conversation taking place?', 'At a post office', 'At a bookstore', 'At an airport', 'At a clothing store', 'Gửi bưu kiện đi Đức.'],
          ['Why does the man choose the express service?', 'The package must arrive by a certain date.', 'It is the cheapest option.', 'The package is very heavy.', 'Standard airmail is not available.', 'Quà sinh nhật, sinh nhật vào thứ Tư tới.'],
          ['What does the woman offer?', 'Insurance for the package', 'A discount', 'A larger box', 'Free tracking', '"Would you like to insure it...?"'],
        ],
      },
      {
        title: 'Discussing customer complaints',
        lines: [
          "W: Jason, we've received several complaints this week about late deliveries.",
          'M: I know. Our usual delivery company has a shortage of drivers at the moment.',
          'W: Can we use a different company until the problem is solved?',
          "M: I've already contacted two. One of them, QuickShip, can start on Monday, but they charge fifteen percent more.",
          "W: I think it's worth it. We cannot afford to lose customers. Please send me their contract so I can sign it today.",
        ],
        qs: [
          ['What problem are the speakers discussing?', 'Late deliveries', 'Damaged products', 'High prices', 'Rude staff', '"complaints this week about late deliveries".'],
          ['What is the cause of the problem?', 'A lack of drivers', 'Bad weather', 'A broken website', 'A warehouse fire', '"a shortage of drivers".'],
          ['What does the woman ask the man to do?', 'Send her a contract', 'Hire more drivers', 'Call the customers', 'Lower the delivery fee', '"Please send me their contract".'],
        ],
      },
    ],
    p4: [
      {
        title: 'Telephone message from a clinic',
        lines: [
          'W: Hello, this is a message for Mr. Alan Pierce from Greenway Medical Clinic.',
          'W: I am calling to remind you of your annual health check-up with Dr. Lopez this Thursday at eight thirty a.m.',
          'W: Please do not eat or drink anything except water for twelve hours before your appointment, as a blood test will be taken. Also, remember to bring your insurance card. If you need to reschedule, please call us at least one day in advance.',
        ],
        qs: [
          ['What is the purpose of the call?', 'To remind a patient of an appointment', 'To report test results', 'To cancel a check-up', 'To request a payment', '"I am calling to remind you".'],
          ['Why should the listener not eat before the appointment?', 'A blood test will be done.', 'The clinic serves breakfast.', 'He will have an operation.', 'The doctor is running late.', '"as a blood test will be taken".'],
          ['What should the listener bring?', 'An insurance card', 'A medical report', 'A bottle of water', 'A family member', '"remember to bring your insurance card".'],
        ],
      },
      {
        title: 'Introduction to an online seminar',
        lines: [
          'M: Hello, everyone, and welcome to today\'s online seminar, Marketing on a Small Budget. My name is Chris, and I will be your host.',
          'M: Our speaker will talk for about forty minutes. During the talk, your microphones will be turned off, but you can type questions in the chat box at any time. We will answer as many as possible at the end.',
          'M: A recording of the seminar and a copy of the slides will be emailed to all participants tomorrow.',
        ],
        qs: [
          ['What is the seminar about?', 'Low-cost marketing', 'Building websites', 'Hiring staff', 'Saving for retirement', '"Marketing on a Small Budget".'],
          ['How can participants ask questions?', 'By typing them in the chat box', 'By raising their hands', 'By calling the host', 'By turning on their microphones', '"type questions in the chat box".'],
          ['What will participants receive tomorrow?', 'A recording and the slides', 'A certificate', 'A feedback form', 'A discount code', '"A recording of the seminar and a copy of the slides will be emailed".'],
        ],
      },
    ],
    p5: [
      ['The sales department exceeded its target ____ fifteen percent.', 'by', 'for', 'with', 'at', '"exceed ... by + mức chênh".'],
      ['The CEO spoke ____ about the company\'s future.', 'confidently', 'confident', 'confidence', 'confiding', 'Trạng từ bổ nghĩa cho "spoke".'],
      ['All new staff are required to ____ a two-day orientation.', 'attend', 'attendance', 'attending', 'attended', '"be required to + V".'],
      ['The café is popular ____ office workers in the area.', 'with', 'for', 'to', 'about', '"be popular with/among".'],
      ['Mr. Ross found the instructions difficult to ____.', 'follow', 'following', 'followed', 'follows', '"difficult to + V".'],
      ['The firm has opened three new offices ____ the past two years.', 'over', 'since', 'ago', 'when', '"over the past two years" + hiện tại hoàn thành.'],
      ['Ms. Abbott is the person ____ you should speak to about refunds.', 'whom', 'which', 'whose', 'what', 'Đại từ quan hệ chỉ người làm tân ngữ.'],
      ['The software allows users to share files ____.', 'securely', 'secure', 'security', 'secured', 'Trạng từ bổ nghĩa cho "share".'],
      ['The price includes breakfast ____ free use of the fitness center.', 'as well as', 'as long as', 'so that', 'in case', '"as well as": cũng như.'],
      ['We regret to inform you that the item is ____ out of stock.', 'temporarily', 'temporary', 'temporal', 'tempo', 'Trạng từ bổ nghĩa cho cụm "out of stock".'],
      ['The trainees learned a great ____ during the workshop.', 'deal', 'many', 'lot of', 'number', '"a great deal": rất nhiều.'],
      ['Had we known about the delay, we ____ a different supplier.', 'would have chosen', 'will choose', 'chose', 'had chosen', 'Đảo ngữ điều kiện loại 3: Had + S + V3, S + would have + V3.'],
    ],
    p6: [
      {
        title: 'Email: Customer survey',
        text: 'Dear Valued Customer,\n\nThank you for shopping with Ashton Home Store. We are always looking for ways to (1)____ our service, and your opinion matters to us.\n\nWould you take five minutes to complete a short survey about your recent purchase? (2)____. All answers are confidential.\n\nAs a thank-you, everyone who completes the survey by March 31 will be (3)____ into a drawing to win a $200 gift card.\n\nClick here to begin.',
        qs: [
          ['(1) ____', 'improve', 'improving', 'improved', 'improvement', '"ways to + V".'],
          ['(2) ____', 'It contains only ten questions.', 'Our store opened in 1998.', 'The gift card can be used online.', 'We sell furniture and lighting.', '"It" chỉ bản khảo sát; phù hợp với "take five minutes".'],
          ['(3) ____', 'entered', 'entering', 'enter', 'entrance', 'Bị động: will be entered into a drawing.'],
        ],
      },
      {
        title: 'Notice: Staff parking',
        text: 'Beginning Monday, all employees who park in the company garage must display a new parking permit on their vehicle\'s windshield. Permits can be (1)____ from the security desk in the lobby.\n\nYou will need to show your employee ID and vehicle registration. There is no charge for the permit. (2)____ without a permit after May 1 may be towed at the owner\'s expense.\n\nSpaces on Level 1 are (3)____ for visitors and must not be used by staff.',
        qs: [
          ['(1) ____', 'obtained', 'obtaining', 'obtain', 'obtains', 'Bị động: can be + V3.'],
          ['(2) ____', 'Vehicles', 'Visitors', 'Permits', 'Garages', 'Phương tiện không có giấy phép có thể bị kéo đi.'],
          ['(3) ____', 'reserved', 'reserving', 'reservation', 'reserve', 'Bị động: are reserved for.'],
        ],
      },
    ],
    p7: [
      {
        title: 'Flyer: Community class',
        text: 'FREE COMPUTER CLASSES FOR SENIORS\nPinecrest Public Library\n\nLearn how to send email, make video calls, and shop safely online. Classes are taught by trained volunteers in small groups of no more than six.\n\nEvery Wednesday in May, 10:00–11:30 a.m., Computer Room (2nd floor)\n\nNo experience is necessary. Laptops are provided, but you are welcome to bring your own tablet or phone.\n\nPlaces are limited. Register at the library front desk or call 555-0144.',
        qs: [
          ['Who are the classes for?', 'Older adults', 'Schoolchildren', 'Library staff', 'Computer experts', '"FOR SENIORS".'],
          ['How large are the groups?', 'Six people at most', 'Exactly ten people', 'More than twenty people', 'One person at a time', '"small groups of no more than six".'],
          ['What do participants need to bring?', 'Nothing is required', 'A laptop', 'A registration fee', 'A library card', 'Máy tính được cung cấp; không bắt buộc mang gì.'],
        ],
      },
      {
        title: 'Email: Product recall',
        text: 'To: All store managers\nFrom: Head Office, BrightKids Toys\nSubject: URGENT – Product recall\n\nWe have been informed by the manufacturer that the "Rolling Robot" toy (item 4418) has a battery cover that can come loose. For safety reasons, we are recalling this product immediately.\n\nPlease remove all Rolling Robots from your shelves today and send them back to the central warehouse. Customers who return the toy should be given a full refund, even without a receipt.\n\nA notice for customers is attached. Please display it at your store entrance and at every cash register.',
        qs: [
          ['Why is the toy being recalled?', 'It has a safety problem.', 'It is not selling well.', 'It was priced incorrectly.', 'It is the wrong color.', 'Nắp pin có thể lỏng ra → vấn đề an toàn.'],
          ['What should managers do with the toys?', 'Return them to the warehouse', 'Sell them at a discount', 'Repair them in the store', 'Throw them away', '"send them back to the central warehouse".'],
          ['What is stated about refunds?', 'A receipt is not required.', 'They are given as store credit.', 'They are limited to one week.', 'Only half the price is returned.', '"a full refund, even without a receipt".'],
        ],
      },
      {
        title: 'Article: Remote work survey',
        text: 'A new survey of 2,000 office workers suggests that most employees want to keep working from home at least part of the week. — [1] — Sixty-eight percent of those questioned said they would prefer to spend two or three days a week at home.\n\nThe main reasons given were saving time on commuting and having fewer interruptions. — [2] — However, nearly half of the workers also said they missed talking with colleagues in person.\n\nOnly 9 percent wanted to work in the office full time. — [3] — The study was carried out by the research firm WorkPulse in September. — [4] —',
        qs: [
          ['What do most of the workers in the survey prefer?', 'Working from home part of the week', 'Working in the office every day', 'Working only at night', 'Working four days a week', '68% muốn làm ở nhà 2–3 ngày mỗi tuần.'],
          ['What disadvantage of working from home is mentioned?', 'Missing contact with colleagues', 'Higher costs', 'Slower internet', 'Longer hours', '"they missed talking with colleagues in person".'],
          ['In which position does this sentence best belong? "Many added that they were able to concentrate better as a result."', '[2]', '[1]', '[3]', '[4]', '"as a result" nối với "fewer interruptions".'],
        ],
      },
    ],
  }),
];
