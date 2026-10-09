/** Bộ đề TOEIC Listening & Reading cố định – đề 5 và 6 (định dạng rút gọn, xem helpers.ts) */
import { ToeicTest, toeicTest } from './helpers';

export const TESTS: ToeicTest[] = [
  // =========================================================================== ĐỀ 5
  toeicTest(5, {
    p2: [
      ['What time does the bank open on Saturdays?', 'At ten in the morning.', 'Next to the pharmacy.', 'To open an account.', 'What time → giờ cụ thể.'],
      ['Who left this umbrella in the lobby?', 'I think it belongs to Mr. Kim.', 'It is raining heavily.', 'He left at six.', 'Who → người sở hữu.'],
      ['How was your business trip to Toronto?', 'It went very well, thanks.', 'By plane.', 'For three days.', 'How was → nhận xét, đánh giá.'],
      ['Are you going to the company picnic?', "I haven't decided yet.", 'It was a nice park.', 'Sandwiches and fruit.', 'Câu hỏi Yes/No → câu trả lời gián tiếp "chưa quyết định".'],
      ['Where did you put the meeting agenda?', "It's in the shared folder.", 'At two thirty.', 'Five items.', 'Where → vị trí (thư mục dùng chung).'],
      ['Could we postpone the interview until next week?', "I'm afraid the candidate is only available tomorrow.", 'The view was wonderful.', 'He posted it yesterday.', 'Lời đề nghị → từ chối kèm lý do.'],
      ['Which bus goes to the convention center?', 'Number forty-two.', 'Every half hour.', 'It is a large center.', 'Which bus → số xe.'],
      ['Our supplier just raised their prices.', 'Should we look for another one?', 'On the top shelf.', 'Yes, I got a raise.', 'Câu nêu tình huống → hỏi lại để đề xuất giải pháp.'],
    ],
    p3: [
      {
        title: 'Planning a business trip',
        lines: [
          'M: Hi, Angela. Have you booked your flight to the Chicago conference yet?',
          "W: Not yet. I was thinking of taking the train instead. It's cheaper, and I can work on my laptop on the way.",
          "M: That's true, but the train takes six hours. The conference starts at nine on Monday morning.",
          "W: I know. I'll go on Sunday afternoon and stay an extra night at the hotel.",
          "M: Good plan. Remember to keep your receipts so that you can claim your expenses.",
        ],
        qs: [
          ['Why does the woman prefer the train?', 'It costs less and she can work.', 'It is faster than flying.', 'She is afraid of flying.', 'The airport is closed.', '"It\'s cheaper, and I can work on my laptop".'],
          ['When will the woman travel?', 'On Sunday afternoon', 'On Monday morning', 'On Saturday night', 'On Friday', '"I\'ll go on Sunday afternoon".'],
          ['What does the man remind the woman to do?', 'Keep her receipts', 'Book a hotel', 'Charge her laptop', 'Call the organizers', '"Remember to keep your receipts".'],
        ],
      },
      {
        title: 'A new employee asks for help',
        lines: [
          "W: Excuse me, Mark. I'm trying to log in to the timesheet system, but it keeps saying my password is wrong.",
          'M: New accounts usually take a day to become active. When did you start?',
          'W: Yesterday morning.',
          "M: Then it should work by now. You'd better call the IT help desk. Their extension is three hundred.",
          "W: Thanks. I need to enter my hours before the end of the day.",
          'M: If they cannot fix it in time, just give your hours to your supervisor on paper.',
        ],
        qs: [
          ['What problem does the woman have?', 'She cannot log in to a system.', 'She lost her timesheet.', 'She forgot her ID badge.', 'Her computer will not start.', 'Hệ thống báo sai mật khẩu.'],
          ['What does the man suggest?', 'Calling the IT help desk', 'Waiting another day', 'Creating a new account', 'Using his password', '"You\'d better call the IT help desk".'],
          ['What must the woman do today?', 'Enter her working hours', 'Meet her supervisor', 'Attend training', 'Change her password', '"I need to enter my hours before the end of the day".'],
        ],
      },
    ],
    p4: [
      {
        title: 'Tour guide announcement',
        lines: [
          'W: Good morning, everyone, and welcome aboard the Bay City sightseeing bus. My name is Carol, and I will be your guide for the next two hours.',
          'W: Our first stop will be the Old Harbor, where you will have thirty minutes to take photographs and visit the fish market.',
          'W: Please be back on the bus by ten fifteen, because we have a reservation at the Maritime Museum. And remember to take your ticket with you. You will need to show it when you get back on.',
        ],
        qs: [
          ['Who is the speaker?', 'A tour guide', 'A bus driver', 'A museum director', 'A fish seller', '"I will be your guide".'],
          ['What can passengers do at the first stop?', 'Visit a market', 'Have lunch', 'Take a boat trip', 'Buy museum tickets', '"take photographs and visit the fish market".'],
          ['Why should passengers take their tickets with them?', 'To get back on the bus', 'To enter the market', 'To receive a discount', 'To get a refund', '"You will need to show it when you get back on".'],
        ],
      },
      {
        title: 'Advertisement for a language school',
        lines: [
          'M: Do you need to improve your English for work? At Summit Language Institute, our evening business English courses are designed for busy professionals.',
          'M: Classes meet twice a week and have no more than eight students, so you get plenty of speaking practice.',
          'M: Register before September first and save fifty dollars on the course fee. Visit our website to take a free online level test, and find the class that is right for you.',
        ],
        qs: [
          ['Who is the advertisement intended for?', 'Working professionals', 'High school students', 'English teachers', 'Tourists', '"designed for busy professionals".'],
          ['What is mentioned about the classes?', 'They are small.', 'They are held online.', 'They meet every day.', 'They are free.', '"no more than eight students".'],
          ['What can listeners do on the website?', 'Take a level test', 'Watch a sample class', 'Meet the teachers', 'Download a textbook', '"take a free online level test".'],
        ],
      },
    ],
    p5: [
      ['The receptionist will ____ you when Dr. Patel is ready.', 'notify', 'notification', 'notifying', 'notified', 'Sau "will" là động từ nguyên mẫu.'],
      ['Ms. Romano has been with the firm ____ over a decade.', 'for', 'since', 'from', 'at', '"for + khoảng thời gian".'],
      ['The new policy takes ____ on the first of January.', 'effect', 'effective', 'effectively', 'affect', 'Cụm "take effect": có hiệu lực.'],
      ['Mr. Adams requested that the invoice ____ sent again.', 'be', 'is', 'was', 'being', 'Thể giả định sau "request that": S + (should) + V nguyên mẫu.'],
      ['Our store offers a ____ selection of imported teas.', 'wide', 'widely', 'width', 'widen', 'Tính từ trước danh từ "selection".'],
      ['The elevator is out of service; ____, please use the stairs.', 'therefore', 'although', 'because', 'whereas', 'Trạng từ liên kết chỉ kết quả sau dấu chấm phẩy.'],
      ['Each of the applicants ____ asked to complete a short test.', 'was', 'were', 'have been', 'are', '"Each of + danh từ số nhiều" đi với động từ số ít.'],
      ['The manual explains how to operate the machine ____.', 'safely', 'safe', 'safety', 'safer', 'Trạng từ bổ nghĩa cho "operate".'],
      ['Please keep this receipt as ____ of purchase.', 'proof', 'prove', 'proven', 'proving', '"proof of purchase": bằng chứng mua hàng.'],
      ['The company is seeking a designer ____ can work independently.', 'who', 'which', 'whose', 'what', 'Đại từ quan hệ chỉ người làm chủ ngữ.'],
      ['Prices are subject to change ____ notice.', 'without', 'unless', 'except', 'beyond', '"without notice": không báo trước.'],
      ['The team worked ____ to finish the project ahead of schedule.', 'diligently', 'diligent', 'diligence', 'more diligent', 'Trạng từ bổ nghĩa cho "worked".'],
    ],
    p6: [
      {
        title: 'Letter: Bank card',
        text: 'Dear Ms. Whitaker,\n\nEnclosed is your new Capital One Bank debit card. For your security, the card must be (1)____ before you can use it. To do this, call the number on the sticker or visit any of our branches.\n\nYour old card will stop working on April 30. (2)____.\n\nIf you did not request this card, please contact us (3)____ at 1-800-555-0123.\n\nSincerely,\nCustomer Services',
        qs: [
          ['(1) ____', 'activated', 'activating', 'activate', 'activation', 'Bị động sau "must be".'],
          ['(2) ____', 'Please cut it up and throw it away after that date.', 'Our branches are open six days a week.', 'Interest rates rose slightly last month.', 'Thank you for applying for a loan.', '"it" chỉ thẻ cũ: hủy thẻ cũ sau ngày đó.'],
          ['(3) ____', 'immediately', 'immediate', 'immediacy', 'more immediate', 'Trạng từ bổ nghĩa cho "contact".'],
        ],
      },
      {
        title: 'Notice: Employee of the Year',
        text: 'It is time to nominate a colleague for the Employee of the Year award! Any staff member who has worked here for at least one year is (1)____.\n\nTo make a nomination, complete the form on the intranet and explain in a few sentences (2)____ your colleague deserves the award. The deadline is November 20.\n\nThe winner will be announced at the holiday party on December 15 and will receive two extra days of paid (3)____.',
        qs: [
          ['(1) ____', 'eligible', 'eligibly', 'eligibility', 'elect', 'Sau "is" cần tính từ: đủ điều kiện.'],
          ['(2) ____', 'why', 'what', 'who', 'which', '"explain why": giải thích vì sao.'],
          ['(3) ____', 'vacation', 'salary', 'receipt', 'luggage', '"paid vacation": ngày nghỉ có lương.'],
        ],
      },
    ],
    p7: [
      {
        title: 'Job advertisement',
        text: 'POSITION AVAILABLE: Front Desk Supervisor\nThe Carlton Plaza Hotel\n\nWe are seeking an experienced supervisor to lead our front desk team of twelve. Duties include preparing staff schedules, handling guest complaints, and training new employees.\n\nRequirements:\n• At least three years of hotel experience\n• Excellent communication skills\n• Ability to work evenings and weekends\n• Knowledge of a second language is an advantage but not required\n\nSend your résumé and a cover letter to careers@carltonplaza.com by June 30.',
        qs: [
          ['What is one duty of the position?', 'Making work schedules', 'Cleaning guest rooms', 'Managing the restaurant', 'Designing advertisements', '"preparing staff schedules".'],
          ['What is NOT a requirement for the job?', 'Speaking two languages', 'Hotel experience', 'Good communication skills', 'Working on weekends', 'Ngoại ngữ thứ hai là lợi thế "but not required".'],
          ['How should candidates apply?', 'By email', 'In person', 'By telephone', 'Through a job agency', 'Gửi hồ sơ tới địa chỉ email.'],
        ],
      },
      {
        title: 'Email: Shipping delay',
        text: 'To: Raj Malhotra\nFrom: Tina Vogel, Apex Printing\nSubject: Your order of 500 brochures\n\nDear Mr. Malhotra,\n\nI am writing to let you know that one of our printing presses broke down this morning. As a result, your brochures will not be ready on Wednesday as promised. We now expect to finish them on Friday afternoon.\n\nI understand that you need them for an exhibition on Saturday. To make up for the delay, we will deliver the order directly to the exhibition hall at no charge and take 15 percent off your bill.\n\nI apologize sincerely for the inconvenience.',
        qs: [
          ['Why is the order delayed?', 'A machine stopped working.', 'The design was not approved.', 'Paper was out of stock.', 'A payment was late.', '"one of our printing presses broke down".'],
          ['When does Mr. Malhotra need the brochures?', 'On Saturday', 'On Wednesday', 'On Friday', 'On Monday', '"you need them for an exhibition on Saturday".'],
          ['What does Ms. Vogel offer?', 'A discount and free delivery', 'A full refund', 'Extra brochures', 'A new design', 'Giao tận nơi miễn phí và giảm 15%.'],
        ],
      },
      {
        title: 'Information: Product warranty',
        text: 'KELLER KITCHEN APPLIANCES – Limited Warranty\n\nThis coffee maker is guaranteed against defects in materials and workmanship for two years from the date of purchase. If a defect appears during this period, Keller will repair or replace the product free of charge.\n\nThe warranty does not cover damage caused by accidents, misuse, or repairs performed by unauthorized persons. The glass pot is covered for 90 days only.\n\nTo make a claim, register your product at www.kellerkitchen.com and keep your original receipt.',
        qs: [
          ['How long is the coffee maker guaranteed?', 'Two years', '90 days', 'One year', 'Five years', '"for two years from the date of purchase".'],
          ['What is NOT covered by the warranty?', 'Damage from misuse', 'Defects in materials', 'Faulty workmanship', 'Replacement costs', '"does not cover damage caused by accidents, misuse".'],
          ['What must customers keep in order to make a claim?', 'The original receipt', 'The original box', 'The glass pot', 'The instruction manual', '"keep your original receipt".'],
        ],
      },
    ],
  }),

  // =========================================================================== ĐỀ 6
  toeicTest(6, {
    p2: [
      ['Whose turn is it to lead the weekly meeting?', "It's Jessica's turn.", 'Turn left at the corner.', 'Every Monday.', 'Whose → người.'],
      ['How many copies of the handout do we need?', 'Thirty should be enough.', 'On the copy machine.', 'I handed it out.', 'How many → số lượng.'],
      ['When will the new catalog be printed?', 'Not until next month.', 'At the print shop.', 'In full color.', 'When → thời gian ("phải tháng sau").'],
      ['Did you send the invoice to the client?', 'Yes, I emailed it this morning.', 'A voice message.', 'She is a good client.', 'Câu hỏi Yes/No quá khứ.'],
      ['Where is the seminar being held?', 'At the Grand Hotel downtown.', 'It lasts all day.', 'About marketing.', 'Where → địa điểm.'],
      ["Why don't you ask Mr. Novak for advice?", "That's a good idea.", 'Because he asked me.', 'He advised against it.', 'Lời gợi ý → tán thành.'],
      ['Would you rather sit by the window or the aisle?', 'The aisle, please.', 'Yes, I would.', 'The window is broken.', 'Câu hỏi lựa chọn → chọn một.'],
      ['I think we are out of printer ink.', "I'll order some more today.", 'The link is on the website.', 'He is out of the office.', 'Câu nêu vấn đề → đề xuất giải pháp.'],
    ],
    p3: [
      {
        title: 'A car repair',
        lines: [
          'M: Hello, this is Greg from City Auto Repair. I am calling about your car, Ms. Santos.',
          'W: Oh, hi. Have you found out what is wrong with it?',
          'M: Yes, the battery needs to be replaced, and the front brakes are worn. The total would be three hundred and forty dollars.',
          'W: That is more than I expected. Is the car safe to drive without fixing the brakes?',
          "M: I wouldn't recommend it. But I can have everything finished by five today.",
          "W: All right, go ahead. I'll pick it up after work.",
        ],
        qs: [
          ['Why is the man calling?', "To explain what a car needs", 'To sell a new car', 'To confirm an appointment', 'To ask for directions', 'Thợ báo tình trạng xe: cần thay bình ắc quy và phanh.'],
          ['What is the woman concerned about?', 'The cost', 'The color', 'The waiting time', 'The location', '"That is more than I expected".'],
          ['When will the woman get her car?', 'After work today', 'Tomorrow morning', 'At noon', 'Next week', '"I\'ll pick it up after work".'],
        ],
      },
      {
        title: 'A problem with an advertisement',
        lines: [
          'W: Peter, have you seen our advertisement in this morning\'s newspaper?',
          'M: No, why? Is something wrong?',
          'W: The date of the sale is wrong. It says the sale starts on the fifth, but it really starts on the fifteenth.',
          "M: Oh no. Customers will come ten days early. I'll call the newspaper and ask them to print a correction tomorrow.",
          "W: Good. I'll put a notice on our website and at the store entrance right away.",
        ],
        qs: [
          ['What is the problem?', 'An advertisement contains an error.', 'A sale was canceled.', 'A newspaper was not delivered.', 'A website is down.', 'Quảng cáo in sai ngày bắt đầu đợt giảm giá.'],
          ['When does the sale actually begin?', 'On the fifteenth', 'On the fifth', 'On the tenth', 'Tomorrow', '"it really starts on the fifteenth".'],
          ['What will the woman do?', 'Post a notice', 'Call the newspaper', 'Cancel the sale', 'Write a new advertisement', '"I\'ll put a notice on our website and at the store entrance".'],
        ],
      },
    ],
    p4: [
      {
        title: 'Weather forecast',
        lines: [
          'W: Good evening. Here is the weather forecast for the weekend from Channel Five.',
          'W: Saturday will start out sunny, with temperatures reaching twenty-eight degrees. By late afternoon, however, clouds will move in, and we expect heavy rain overnight.',
          'W: The rain should end by Sunday noon, but strong winds will continue throughout the day. If you are planning to attend the outdoor jazz festival on Sunday, bring a warm jacket.',
        ],
        qs: [
          ['What will the weather be like on Saturday morning?', 'Sunny', 'Rainy', 'Windy', 'Snowy', '"Saturday will start out sunny".'],
          ['When is heavy rain expected?', 'On Saturday night', 'On Saturday morning', 'On Sunday evening', 'On Monday', '"heavy rain overnight" – đêm thứ Bảy.'],
          ['What does the speaker suggest that festival visitors do?', 'Bring a jacket', 'Stay at home', 'Arrive early', 'Carry sunscreen', '"bring a warm jacket".'],
        ],
      },
      {
        title: 'Telephone message about an order',
        lines: [
          'M: Hello, Ms. Franklin. This is Leo from Corner Books. I am calling about the three books you ordered last week.',
          'M: Two of them have arrived, but the third one, the travel guide to Portugal, is out of print. The publisher will release a new edition in May.',
          'M: You can pick up the two books any time this week. We are open until eight. Please let us know whether you would like us to reserve the new edition for you.',
        ],
        qs: [
          ['Where does the speaker work?', 'At a bookstore', 'At a travel agency', 'At a library', 'At a publishing company', '"This is Leo from Corner Books".'],
          ['What is the problem with one item?', 'It is out of print.', 'It was damaged.', 'It is too expensive.', 'It was sent to the wrong address.', '"the travel guide to Portugal is out of print".'],
          ['What does the speaker want to know?', 'Whether to reserve a new edition', 'When the listener will travel', 'How the listener will pay', 'Which store is closest', '"let us know whether you would like us to reserve the new edition".'],
        ],
      },
    ],
    p5: [
      ['The conference attracted ____ 2,000 visitors from around the world.', 'approximately', 'approximate', 'approximation', 'approximated', 'Trạng từ bổ nghĩa cho con số.'],
      ['Mr. Lopez is known for his ____ to detail.', 'attention', 'attend', 'attentive', 'attentively', '"attention to detail": sự chú ý đến chi tiết.'],
      ['Staff may not use company vehicles ____ personal trips.', 'for', 'at', 'by', 'of', '"use A for B": dùng cho mục đích gì.'],
      ['The deadline has been ____ to give teams more time.', 'extended', 'extending', 'extend', 'extension', 'Bị động hiện tại hoàn thành.'],
      ['____ you need any assistance, please ask a member of staff.', 'If', 'Whether', 'So', 'Despite', 'Mệnh đề điều kiện.'],
      ['The restaurant is ____ located near the train station.', 'conveniently', 'convenient', 'convenience', 'conveniences', 'Trạng từ bổ nghĩa cho phân từ "located".'],
      ['The two companies reached an ____ after months of negotiation.', 'agreement', 'agree', 'agreeable', 'agreeably', 'Sau mạo từ "an" cần danh từ.'],
      ['Ms. Tran prefers to handle customer complaints ____.', 'herself', 'her', 'she', 'hers', 'Đại từ phản thân nhấn mạnh: tự mình.'],
      ['The shipment arrived two days later than ____.', 'scheduled', 'schedule', 'scheduling', 'schedules', '"later than scheduled": trễ hơn lịch.'],
      ['Customers were ____ with the quality of the service.', 'satisfied', 'satisfying', 'satisfy', 'satisfaction', 'Người cảm thấy hài lòng → "be satisfied with".'],
      ['The training manual is available in ____ English and Spanish.', 'both', 'either', 'neither', 'each', '"both A and B".'],
      ['The CEO will announce the merger ____ a press conference tomorrow.', 'at', 'on', 'to', 'among', '"at a press conference".'],
    ],
    p6: [
      {
        title: 'Email: Thank-you to a speaker',
        text: 'Dear Dr. Mendes,\n\nOn behalf of the Riverside Chamber of Commerce, I would like to thank you for speaking at our annual dinner last Friday. Your talk on online marketing was both (1)____ and entertaining.\n\n(2)____. In fact, several of them have asked whether you offer workshops for small companies.\n\nIf you are (3)____, we would be delighted to invite you back next spring. I look forward to hearing from you.\n\nWarm regards,\nPaula Stein',
        qs: [
          ['(1) ____', 'practical', 'practice', 'practically', 'practiced', 'Song song với tính từ "entertaining" sau "both".'],
          ['(2) ____', 'Many of our members said it was the best presentation they had heard.', 'The dinner was held at the Lakeside Hotel.', 'Tickets cost forty dollars each.', 'Our chamber was established in 1962.', 'Câu sau có "several of them" → "them" chỉ "our members".'],
          ['(3) ____', 'available', 'capable', 'possible', 'valuable', '"If you are available": nếu ông/bà rảnh.'],
        ],
      },
      {
        title: 'Notice: Fitness center rules',
        text: 'WELCOME TO THE PARKVIEW FITNESS CENTER\n\nFor the comfort of all members, please follow these rules:\n\n• Wipe down the equipment after (1)____ it.\n• Limit your time on the running machines to thirty minutes when others are waiting.\n• Return weights to the rack (2)____ you have finished.\n\nLockers are for day use only. Items left overnight will be (3)____ and taken to the front desk.\n\nThank you for helping us keep the center clean and pleasant.',
        qs: [
          ['(1) ____', 'using', 'use', 'used', 'uses', 'Sau giới từ "after" dùng V-ing.'],
          ['(2) ____', 'once', 'until', 'unless', 'whereas', '"once you have finished": ngay khi đã xong.'],
          ['(3) ____', 'removed', 'remove', 'removing', 'removal', 'Bị động tương lai: will be + V3.'],
        ],
      },
    ],
    p7: [
      {
        title: 'Invitation',
        text: 'You are invited to the GRAND OPENING of\nNORTHSIDE DENTAL CARE\n\nSaturday, September 9, 10:00 a.m. – 3:00 p.m.\n14 Birch Lane (next to the public library)\n\n• Meet Dr. Amira Hassan and her team\n• Tour our modern treatment rooms\n• Free dental check-ups for children under 12\n• Enter our prize drawing to win an electric toothbrush\n\nRefreshments will be served. No appointment is necessary.',
        qs: [
          ['What is being announced?', 'The opening of a dental clinic', 'A library event', 'A sale on toothbrushes', 'A health lecture', 'Khai trương phòng khám nha khoa.'],
          ['Who can receive a free check-up?', 'Children under 12', 'All visitors', 'Library members', 'New employees', '"Free dental check-ups for children under 12".'],
          ['What is indicated about the event?', 'Visitors do not need to book.', 'It lasts all weekend.', 'It is for adults only.', 'It takes place at a library.', '"No appointment is necessary".'],
        ],
      },
      {
        title: 'Online chat',
        text: 'Customer Support Chat – StreamBox\n\nAgent (Luis): Thank you for contacting StreamBox. How can I help you today?\n\nCustomer (Hannah Cole): I was charged twice for my monthly plan. I see two payments of $12.99 on my card statement.\n\nAgent (Luis): I am sorry about that. Let me check your account. Yes, I can see the second charge was made in error on March 2.\n\nCustomer (Hannah Cole): Can you cancel it?\n\nAgent (Luis): I have just issued a refund. It should appear on your statement within five business days. I have also added a free month to your account as an apology.\n\nCustomer (Hannah Cole): That works for me. Thanks!',
        qs: [
          ['Why did Ms. Cole contact StreamBox?', 'She was billed twice.', 'She forgot her password.', 'She wants to cancel her plan.', 'Her video is not loading.', '"I was charged twice for my monthly plan".'],
          ['What will Ms. Cole receive in addition to a refund?', 'A free month of service', 'A new card', 'A lower monthly price', 'A gift box', '"added a free month to your account".'],
          ['What does Ms. Cole mean when she writes, "That works for me"?', 'She is satisfied with the solution.', 'She will keep working.', 'She wants a different refund.', 'Her service is working again.', 'Cô hài lòng với cách giải quyết.'],
        ],
      },
      {
        title: 'Article: Airport expansion',
        text: 'Construction of a third terminal at Kingsford International Airport will begin in March, airport officials confirmed on Tuesday. The $400 million project is expected to take three years. — [1] —\n\nThe new terminal will add twenty gates and will be used mainly for international flights. — [2] — It will also include a hotel connected directly to the departure hall.\n\nPassenger numbers at Kingsford have grown by 30 percent over the past five years. — [3] — Officials say that during construction, some parking areas will be closed, and travelers should allow extra time. — [4] —',
        qs: [
          ['How long will the project take?', 'Three years', 'Five years', 'One year', 'Twenty months', '"expected to take three years".'],
          ['What will the new terminal include?', 'A hotel', 'A train station', 'A shopping mall', 'A parking garage', '"a hotel connected directly to the departure hall".'],
          ['In which position does this sentence best belong? "As a result, the two existing terminals are often overcrowded."', '[3]', '[1]', '[2]', '[4]', '"As a result" nối với câu lượng khách tăng 30%.'],
        ],
      },
    ],
  }),
];
