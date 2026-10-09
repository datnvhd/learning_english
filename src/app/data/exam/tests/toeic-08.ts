/** Bộ đề TOEIC Listening & Reading cố định – đề 15 và 16 (định dạng rút gọn, xem helpers.ts) */
import { ToeicTest, toeicTest } from './helpers';

export const TESTS: ToeicTest[] = [
  // =========================================================================== ĐỀ 15
  toeicTest(15, {
    p2: [
      ['Who is the keynote speaker at the conference?', 'A professor from Stanford.', 'In the main hall.', 'The key is on the table.', 'Who → người.'],
      ['Where should I send the application form?', 'To the address at the top of the page.', 'By next Friday.', 'Two pages long.', 'Where → nơi gửi.'],
      ['When was the last time the fire alarm was tested?', 'Three months ago.', 'It was very loud.', 'In the hallway.', 'When → thời điểm quá khứ.'],
      ['How much time do we have before the train leaves?', 'About twenty minutes.', 'Platform six.', 'It leaves from here.', 'How much time → khoảng thời gian.'],
      ['Would you like me to make a reservation?', "Yes, for four people, please.", 'I reserved judgment.', 'The restaurant was full.', 'Lời đề nghị → nhận lời kèm chi tiết.'],
      ['Did you enjoy the concert last night?', 'It was fantastic.', 'At the city hall.', 'Two tickets.', 'Câu hỏi Yes/No → câu trả lời ngầm "có".'],
      ['Why is the report taking so long?', "We're still waiting for the final figures.", 'It is twenty pages long.', 'On my desk.', 'Why → lý do.'],
      ['I can\'t open the attachment you sent.', "I'll send it again in a different format.", 'It is attached to the wall.', 'The door is open.', 'Vấn đề → giải pháp.'],
    ],
    p3: [
      {
        title: 'Arranging a taxi',
        lines: [
          "W: Good morning, front desk. This is Ms. Carter in room three twelve. I need a taxi to the airport tomorrow morning.",
          'M: Certainly, Ms. Carter. What time is your flight?',
          'W: It leaves at nine fifteen.',
          'M: In that case, I suggest leaving the hotel at six thirty. Traffic can be heavy in the morning. Shall I arrange a wake-up call as well?',
          'W: Yes, please, at five forty-five. And could I check out tonight to save time?',
          'M: Of course. You can settle your bill any time before ten p.m.',
        ],
        qs: [
          ['What does the woman need?', 'A taxi to the airport', 'A room for another night', 'A flight ticket', 'A map of the city', '"I need a taxi to the airport".'],
          ['Why does the man suggest leaving at six thirty?', 'The traffic may be heavy.', 'The taxi is cheaper then.', 'The airport is very far away.', 'The hotel closes early.', '"Traffic can be heavy in the morning".'],
          ['What does the woman want to do tonight?', 'Check out', 'Change rooms', 'Order dinner', 'Call the airline', '"could I check out tonight to save time?"'],
        ],
      },
      {
        title: 'A new company website',
        lines: [
          'M: Nina, have you seen the first version of our new website?',
          "W: Yes, I looked at it this morning. The design is clean, and it loads quickly. But I couldn't find the contact page.",
          "M: That's what I thought, too. It's hidden at the bottom of the home page.",
          'W: We should ask the developers to put a contact button at the top of every page.',
          "M: I agree. I'm meeting them at three today. Is there anything else you want me to mention?",
          'W: Yes. The photos of the staff are out of date.',
        ],
        qs: [
          ['What does the woman like about the website?', 'It loads quickly.', 'It has many photos.', 'It is colorful.', 'It has a long home page.', '"The design is clean, and it loads quickly".'],
          ['What problem do the speakers agree on?', 'The contact page is hard to find.', 'The website is too slow.', 'The prices are wrong.', 'The logo is missing.', '"I couldn\'t find the contact page" – "That\'s what I thought, too".'],
          ['What will the man do at three o\'clock?', 'Meet the developers', 'Take new photos', 'Call a customer', 'Update the page himself', '"I\'m meeting them at three today".'],
        ],
      },
    ],
    p4: [
      {
        title: 'Advertisement for a cleaning product',
        lines: [
          'W: Are you tired of scrubbing your kitchen for hours? Try Sparkle Plus, the new all-purpose cleaner from Homecare.',
          'W: Just spray it on, wait thirty seconds, and wipe. Sparkle Plus removes grease and stains from counters, ovens, and floors, and it is made entirely from natural ingredients, so it is safe for children and pets.',
          'W: Look for Sparkle Plus in the green bottle at your local supermarket. This month only, buy one bottle and get the second at half price.',
        ],
        qs: [
          ['What is being advertised?', 'A cleaning product', 'A kitchen appliance', 'A supermarket', 'A pet food', '"the new all-purpose cleaner".'],
          ['What is said about the product?', 'It is made from natural ingredients.', 'It must be left on overnight.', 'It is only for floors.', 'It is sold online only.', '"made entirely from natural ingredients".'],
          ['What offer is available this month?', 'The second bottle is half price.', 'A free sponge is included.', 'Delivery is free.', 'Every bottle is half price.', '"buy one bottle and get the second at half price".'],
        ],
      },
      {
        title: 'Announcement to office staff',
        lines: [
          'M: Attention, all staff. This is a reminder that the carpets on the fourth and fifth floors will be cleaned this Friday evening, starting at six p.m.',
          'M: Before you leave on Friday, please remove all boxes, bags, and cables from the floor around your desk. Anything left on the floor will be moved to the storage room.',
          'M: The carpets will need time to dry, so if you were planning to work on Saturday, please use the meeting rooms on the second floor instead.',
        ],
        qs: [
          ['What will happen on Friday evening?', 'Carpets will be cleaned.', 'Desks will be replaced.', 'The office will be painted.', 'A meeting will be held.', '"the carpets... will be cleaned this Friday evening".'],
          ['What are employees asked to do before leaving?', 'Clear the floor around their desks', 'Turn off their computers', 'Lock the storage room', 'Move their desks', '"remove all boxes, bags, and cables from the floor".'],
          ['Where should employees work on Saturday?', 'On the second floor', 'On the fourth floor', 'At home', 'In the storage room', '"use the meeting rooms on the second floor instead".'],
        ],
      },
    ],
    p5: [
      ['The receptionist greeted the visitors ____.', 'warmly', 'warm', 'warmth', 'warmer', 'Trạng từ bổ nghĩa cho "greeted".'],
      ['The product has received ____ positive reviews from customers.', 'mostly', 'most', 'almost', 'the most', '"mostly positive": phần lớn là tích cực.'],
      ['Ms. Garcia was hired ____ of her experience in logistics.', 'because', 'since', 'as', 'due', '"because of + danh từ".'],
      ['The department needs to cut costs ____ affecting quality.', 'without', 'unless', 'except', 'not', '"without + V-ing".'],
      ['The new employees are ____ to the company\'s way of working.', 'adapting', 'adopting', 'adding', 'admitting', '"adapt to": thích nghi với.'],
      ['The deadline for ____ is the end of this week.', 'registration', 'register', 'registered', 'registers', 'Sau giới từ "for" cần danh từ.'],
      ['The café serves breakfast ____ 11 a.m. every day.', 'until', 'between', 'since', 'during', '"until 11 a.m.": đến 11 giờ.'],
      ['Mr. Bell was ____ that the shipment had arrived safely.', 'relieved', 'relief', 'relieving', 'relieve', 'Người cảm thấy nhẹ nhõm → tính từ -ed.'],
      ['The two reports reached very ____ conclusions.', 'different', 'differ', 'differently', 'difference', 'Tính từ trước danh từ.'],
      ['The team will meet again ____ the manager returns from Seoul.', 'when', 'during', 'by', 'soon', '"when + mệnh đề".'],
      ['Ms. Wong recommended ____ the meeting until next week.', 'postponing', 'to postpone', 'postpones', 'postponed', '"recommend + V-ing".'],
      ['Demand for the product was ____ higher than we had predicted.', 'much', 'very', 'so', 'too', '"much + so sánh hơn".'],
    ],
    p6: [
      {
        title: 'Email: Service appointment',
        text: 'Dear Mr. Rahman,\n\nThis email confirms your appointment for the annual service of your heating system on Thursday, October 17. Our engineer will arrive (1)____ 9:00 a.m. and 11:00 a.m.\n\nThe service usually takes about one hour. (2)____. Please also make sure that the area around the boiler is clear.\n\nIf this date is no longer (3)____, you can change it online or call us at 555-0115.\n\nKind regards,\nWarmHome Services',
        qs: [
          ['(1) ____', 'between', 'among', 'from', 'within', '"between A and B".'],
          ['(2) ____', 'An adult must be at home during the visit.', 'Our company has won several awards.', 'Winter is the coldest season.', 'The engineer drives a white van.', 'Câu sau có "Please also..." → câu trước cũng là một yêu cầu với khách.'],
          ['(3) ____', 'convenient', 'convenience', 'conveniently', 'inconvenience', 'Sau "is no longer" cần tính từ.'],
        ],
      },
      {
        title: 'Press release: New product',
        text: 'FOR IMMEDIATE RELEASE\n\nTerraSound today (1)____ the launch of its new wireless headphones, the Echo 5. The headphones offer forty hours of battery life and can be fully charged in under one hour.\n\n"Our customers told us they wanted longer listening time," said product manager Ivan Petrov. "The Echo 5 lasts twice as long as our (2)____ model."\n\nThe Echo 5 will be available in stores from November 1 at a price of $149. (3)____ who order online before that date will receive a free travel case.',
        qs: [
          ['(1) ____', 'announced', 'announcing', 'announcement', 'announce', 'Động từ chính ở quá khứ đơn (today, thông cáo báo chí).'],
          ['(2) ____', 'previous', 'following', 'upcoming', 'eventual', '"previous model": mẫu trước đó.'],
          ['(3) ____', 'Customers', 'Custom', 'Customize', 'Customary', 'Chủ ngữ chỉ người cho "who order online".'],
        ],
      },
    ],
    p7: [
      {
        title: 'Notice: Train service changes',
        text: 'NORTHERN RAIL – Service Changes\n\nBecause of track maintenance, the following changes will apply on Sunday, March 24:\n\n• Trains between Ashby and Colton will not run before 10:00 a.m. Replacement buses will depart from the front of each station.\n• Bus journeys will take approximately 25 minutes longer than the train.\n• Bicycles cannot be carried on the buses.\n\nNormal service will resume at 10:00 a.m. Tickets already purchased are valid on the replacement buses.',
        qs: [
          ['Why are there changes to the service?', 'Track maintenance', 'A strike', 'Bad weather', 'A public holiday', '"Because of track maintenance".'],
          ['What is NOT allowed on the replacement buses?', 'Bicycles', 'Luggage', 'Children', 'Train tickets', '"Bicycles cannot be carried on the buses".'],
          ['What should passengers with train tickets do?', 'Use them on the buses', 'Exchange them at the station', 'Ask for a refund', 'Buy a new bus ticket', '"Tickets already purchased are valid on the replacement buses".'],
        ],
      },
      {
        title: 'Email: Client visit',
        text: 'To: Design Team\nFrom: Olga Sorensen\nSubject: Visit from Kato Foods\n\nThree representatives from Kato Foods will visit us on Wednesday to review the packaging designs for their new line of snacks.\n\nThey will arrive at 10:00. I will give a short welcome, and then Ben will present the three design options. Please print samples of each design on real cardboard so that they can see and touch them.\n\nLunch has been ordered for 12:30. Mr. Kato does not eat seafood, so I have asked the caterer to prepare chicken and vegetable dishes only.\n\nPlease keep the studio tidy that day.',
        qs: [
          ['Why are the visitors coming?', 'To look at packaging designs', 'To sign a contract', 'To tour a factory', 'To taste new snacks', '"to review the packaging designs".'],
          ['What is the team asked to prepare?', 'Printed samples', 'A welcome speech', 'A seafood lunch', 'A price list', '"print samples of each design on real cardboard".'],
          ['What is indicated about Mr. Kato?', 'He avoids seafood.', 'He is a designer.', 'He will arrive at 12:30.', 'He ordered the lunch.', '"Mr. Kato does not eat seafood".'],
        ],
      },
      {
        title: 'Online forum post',
        text: 'Topic: Best way to get from the airport to downtown Lisbon?\n\nPosted by Kevin_T: I am arriving at 11 p.m. next Friday with two large suitcases. Is the metro a good option?\n\nReply from Marta_L: The metro is cheap (under €2) and takes about 25 minutes, but the last train leaves the airport at around 12:30 a.m. With two big bags, you would have to change lines and climb some stairs. A taxi costs €15–20 and takes 15 minutes at that hour. There is also an airport bus, but it stops running at 9 p.m.\n\nReply from Kevin_T: Thanks, Marta. I think I\'ll spend the extra money.',
        qs: [
          ['What is Kevin_T concerned about?', 'How to travel into the city', 'Where to stay in Lisbon', 'What to see downtown', 'How to book a flight', 'Hỏi cách đi từ sân bay vào trung tâm.'],
          ['Why is the airport bus not an option for him?', 'It stops running before he arrives.', 'It is too expensive.', 'It does not go downtown.', 'It does not carry suitcases.', 'Xe buýt ngừng lúc 9 giờ tối; anh đến lúc 11 giờ.'],
          ['What will Kevin_T most likely do?', 'Take a taxi', 'Take the metro', 'Take the airport bus', 'Rent a car', '"I\'ll spend the extra money" → chọn taxi (đắt hơn).'],
        ],
      },
    ],
  }),

  // =========================================================================== ĐỀ 16
  toeicTest(16, {
    p2: [
      ['Where did Ms. Abe work before joining us?', 'At an advertising agency.', 'For five years.', 'She works very hard.', 'Where → nơi làm việc trước đây.'],
      ['When can we expect your decision?', 'By the end of the week.', 'It was a difficult decision.', 'In the meeting room.', 'When → thời hạn.'],
      ['Who has the key to the supply room?', 'The office manager keeps it.', 'It is locked.', 'On the second floor.', 'Who → người giữ.'],
      ['How do I reset my password?', 'Click the link on the login page.', 'It is eight characters long.', 'I passed the test.', 'How → cách làm.'],
      ['Are you free for a quick meeting this afternoon?', 'Yes, any time after two.', 'It was free of charge.', 'The meeting was quick.', 'Câu hỏi Yes/No về lịch → trả lời kèm thời gian.'],
      ['What should we serve at the reception?', 'Light snacks and juice.', 'At the reception desk.', 'About a hundred guests.', 'What → món phục vụ.'],
      ['Would you prefer to pay monthly or annually?', 'Monthly is easier for me.', 'Yes, I prefer it.', 'Last year.', 'Câu hỏi lựa chọn.'],
      ['The courier has not picked up the package yet.', "I'll call and find out why.", 'It is a heavy pack.', 'Yes, I picked it.', 'Vấn đề → hành động xử lý.'],
    ],
    p3: [
      {
        title: 'A bank account',
        lines: [
          "M: Good afternoon. I'd like to open a business account for my new company.",
          'W: Certainly. Do you have your company registration documents and a photo ID with you?',
          "M: I have my ID, but I left the registration papers at the office.",
          "W: I'm afraid we need both. However, I can give you the application form now, and you can fill it in at home.",
          "M: That's helpful. Are you open on Saturdays?",
          'W: Yes, from nine until noon. You do not need an appointment.',
        ],
        qs: [
          ['What does the man want to do?', 'Open a business account', 'Apply for a loan', 'Close an account', 'Exchange money', '"open a business account".'],
          ['What did the man forget to bring?', 'Registration documents', 'A photo ID', 'An application form', 'His bank card', '"I left the registration papers at the office".'],
          ['What does the woman say about Saturdays?', 'No appointment is necessary.', 'The bank is closed.', 'The bank is open all day.', 'Only managers work then.', '"You do not need an appointment".'],
        ],
      },
      {
        title: 'Planning a product demonstration',
        lines: [
          "W: Oliver, the demonstration of our new vacuum cleaner at the Home Expo is next week. Is everything ready?",
          "M: Almost. The display stand arrived yesterday, but two of the demonstration units have not come from the factory yet.",
          'W: When are they due?',
          "M: Thursday. That leaves us only one day to test them. If there's a problem, we'll have no time to fix it.",
          "W: Let's call the factory and ask them to send the units by express delivery today. I'll approve the extra cost.",
        ],
        qs: [
          ['What event are the speakers preparing for?', 'A product demonstration', 'A factory tour', 'A staff meeting', 'A sales training', '"The demonstration of our new vacuum cleaner at the Home Expo".'],
          ['What is the man worried about?', 'Having too little time to test the units', 'The cost of the display stand', 'The size of the booth', 'The number of visitors', '"only one day to test them".'],
          ['What does the woman suggest?', 'Requesting express delivery', 'Canceling the demonstration', 'Using old models', 'Visiting the factory', '"ask them to send the units by express delivery today".'],
        ],
      },
    ],
    p4: [
      {
        title: 'Radio interview introduction',
        lines: [
          'W: Welcome back to Business Today on Radio Six. My guest this morning is Thomas Reid, founder of the online grocery service FreshBox.',
          'W: Mr. Reid started FreshBox five years ago with just two delivery vans. Today the company delivers to more than fifty thousand homes every week.',
          'W: He is here to talk about how he built his business and about his plans to expand into three new cities next year. After the interview, we will take calls from listeners, so have your questions ready.',
        ],
        qs: [
          ['Who is Thomas Reid?', 'The founder of a company', 'A radio host', 'A delivery driver', 'A government official', '"founder of the online grocery service FreshBox".'],
          ['What does FreshBox do?', 'It delivers groceries.', 'It repairs vans.', 'It builds houses.', 'It produces radio shows.', '"online grocery service".'],
          ['What will happen after the interview?', 'Listeners will call in.', 'The news will be read.', 'A song will be played.', 'A contest will be held.', '"we will take calls from listeners".'],
        ],
      },
      {
        title: 'Voicemail about a meeting room',
        lines: [
          'M: Hi, Stephanie. It is Rob from facilities. I am calling about your request to use the large meeting room on Thursday afternoon.',
          'M: Unfortunately, it has already been booked by the legal department from one to five. The medium room is available, but it holds only twelve people.',
          'M: If that is too small, the large room is free all day on Friday. Could you email me by the end of today and tell me which option you would like? Thanks.',
        ],
        graphic: ['Meeting rooms', 'Room | Seats | Thursday p.m. | Friday\nLarge | 30 | Booked | Free\nMedium | 12 | Free | Free\nSmall | 6 | Free | Booked'],
        qs: [
          ['Why is the speaker calling?', 'A requested room is not available.', 'A meeting has been canceled.', 'A room needs to be cleaned.', 'A projector is broken.', 'Phòng lớn đã có người đặt chiều thứ Năm.'],
          ['Look at the graphic. How many people can sit in the room the speaker offers for Thursday afternoon?', '12', '30', '6', '18', 'Người nói đề xuất phòng vừa (Medium) → 12 chỗ.'],
          ['What is the listener asked to do?', 'Send an email today', 'Call the legal department', 'Visit the facilities office', 'Change the number of guests', '"Could you email me by the end of today".'],
        ],
      },
    ],
    p5: [
      ['The manager was impressed by the ____ of the new assistant.', 'efficiency', 'efficient', 'efficiently', 'more efficient', 'Sau "the" và trước "of" cần danh từ.'],
      ['The seminar will be held ____ the Hilton Hotel.', 'at', 'on', 'into', 'by', '"at + địa điểm cụ thể".'],
      ['Ms. Dunn is ____ the most experienced lawyer in the firm.', 'by far', 'so far', 'as far', 'far from', '"by far + so sánh nhất": hơn hẳn.'],
      ['Customers may exchange items ____ they have the original receipt.', 'if', 'whether', 'so', 'that', 'Mệnh đề điều kiện.'],
      ['The bridge was closed for ____ after the storm.', 'repairs', 'repaired', 'repairable', 'repairer', '"closed for repairs".'],
      ['Please handle the equipment with ____.', 'care', 'careful', 'carefully', 'caring', '"with care": cẩn thận.'],
      ['Mr. Ito ____ in Osaka for ten years before moving to Tokyo.', 'had lived', 'lives', 'has lived', 'is living', 'Hành động xảy ra trước một hành động quá khứ khác → quá khứ hoàn thành.'],
      ['The proposal was ____ rejected by the committee.', 'unanimously', 'unanimous', 'unanimity', 'more unanimous', 'Trạng từ bổ nghĩa cho "rejected".'],
      ['We offer discounts to customers who order ____ large quantities.', 'in', 'at', 'on', 'with', '"in large quantities".'],
      ['The trainer explained the procedure step ____ step.', 'by', 'to', 'for', 'with', '"step by step".'],
      ['The firm is known for the ____ of its customer service.', 'excellence', 'excellent', 'excellently', 'excel', 'Sau "the" cần danh từ.'],
      ['Any changes to the schedule must be ____ in advance.', 'approved', 'approving', 'approve', 'approval', 'Bị động: must be + V3.'],
    ],
    p6: [
      {
        title: 'Email: Newsletter subscription',
        text: 'Dear Subscriber,\n\nThank you for signing up for the Garden Living newsletter. Each month, you will receive seasonal planting tips, recipes, and (1)____ offers from our online shop.\n\nYour first issue will arrive next week. (2)____. Simply add our address to your contact list to make sure this does not happen.\n\nIf you wish to stop receiving the newsletter (3)____ any time, click the link at the bottom of any issue.\n\nHappy gardening!',
        qs: [
          ['(1) ____', 'exclusive', 'exclude', 'exclusively', 'exclusion', 'Tính từ trước danh từ "offers".'],
          ['(2) ____', 'Sometimes our emails are sent to the spam folder by mistake.', 'Our shop sells more than 500 kinds of seeds.', 'Spring is the best time to plant tomatoes.', 'The newsletter has twelve pages.', '"this" ở câu sau chỉ việc email bị vào thư rác.'],
          ['(3) ____', 'at', 'in', 'on', 'for', '"at any time".'],
        ],
      },
      {
        title: 'Notice: Company library',
        text: 'A small library has been set up in the staff lounge on the third floor. It contains over two hundred books on business, technology, and personal (1)____.\n\nBorrowing a book is simple. Write your name and the date in the notebook on the shelf, and return the book (2)____ three weeks.\n\nWe would also welcome donations. If you have books at home (3)____ you no longer need, please leave them in the box beside the shelf.',
        qs: [
          ['(1) ____', 'development', 'develop', 'developed', 'developer', '"personal development": phát triển bản thân.'],
          ['(2) ____', 'within', 'during', 'since', 'until', '"within three weeks".'],
          ['(3) ____', 'that', 'who', 'where', 'whose', 'Đại từ quan hệ chỉ vật làm tân ngữ.'],
        ],
      },
    ],
    p7: [
      {
        title: 'Advertisement: Yoga studio',
        text: 'STILL WATERS YOGA STUDIO\nNow open at 55 Garden Lane!\n\nTry your first class FREE.\n\nWe offer classes for all levels, seven days a week, from 6:30 a.m. to 9:00 p.m.\n\n10-class pass: $120\nUnlimited monthly pass: $95\nSingle class: $15\n\nMats and towels are provided. Please arrive ten minutes before your class begins. Latecomers cannot be admitted once a class has started.',
        qs: [
          ['What can new customers get?', 'A free first class', 'A free mat', 'A discount on a monthly pass', 'A private lesson', '"Try your first class FREE".'],
          ['How much does one class cost with the 10-class pass?', '$12', '$15', '$9.50', '$10', '$120 chia 10 = $12 mỗi buổi.'],
          ['What is true about arriving late?', 'Late students may not enter.', 'Late students pay extra.', 'Late students must bring a mat.', 'Late students can join quietly.', '"Latecomers cannot be admitted".'],
        ],
      },
      {
        title: 'Email: Expense claim',
        text: 'To: Hugo Lambert\nFrom: Accounts Payable\nSubject: Your expense claim for March\n\nDear Hugo,\n\nWe have reviewed your expense claim for your trip to Madrid. Most of the items have been approved, and $612 will be paid into your account on Friday.\n\nHowever, we cannot process the taxi fare of $48 on March 14 because no receipt was attached. If you still have the receipt, please send us a copy. Also, please note that company policy allows a maximum of $60 per day for meals. Your dinner on March 15 was $85, so $25 has been deducted.\n\nRegards,\nPriya',
        qs: [
          ['When will Mr. Lambert receive a payment?', 'On Friday', 'On March 14', 'On March 15', 'Next month', '"will be paid into your account on Friday".'],
          ['Why was the taxi fare not approved?', 'A receipt was missing.', 'It was too expensive.', 'It was a personal trip.', 'It was claimed twice.', '"because no receipt was attached".'],
          ['What is the company\'s daily limit for meals?', '$60', '$85', '$25', '$48', '"a maximum of $60 per day for meals".'],
        ],
      },
      {
        title: 'Article: Downtown hotel reopens',
        text: 'The historic Regent Hotel on Queen Street reopened yesterday after a two-year renovation costing $30 million. — [1] — Built in 1922, the hotel had been closed since a fire damaged its upper floors.\n\nThe renovation kept the original marble lobby and grand staircase but added modern features, including a rooftop pool and a 400-seat conference hall. — [2] — The number of guest rooms was reduced from 220 to 180 to make each one larger.\n\nGeneral manager Fiona Walsh said bookings are already strong. — [3] — "We are almost full for the next three months," she said. — [4] —',
        qs: [
          ['Why had the hotel been closed?', 'It was damaged by a fire.', 'It lost its license.', 'It was sold.', 'It had too few guests.', '"closed since a fire damaged its upper floors".'],
          ['What is new at the hotel?', 'A rooftop pool', 'A marble lobby', 'A grand staircase', 'Forty extra rooms', 'Sảnh và cầu thang là nguyên bản; hồ bơi trên mái là mới.'],
          ['In which position does this sentence best belong? "The latter is expected to attract business events to the city center."', '[2]', '[1]', '[3]', '[4]', '"The latter" chỉ hội trường 400 chỗ vừa nhắc sau cùng.'],
        ],
      },
    ],
  }),
];
