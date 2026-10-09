/** Bộ đề TOEIC Listening & Reading cố định – đề 11 và 12 (định dạng rút gọn, xem helpers.ts) */
import { ToeicTest, toeicTest } from './helpers';

export const TESTS: ToeicTest[] = [
  // =========================================================================== ĐỀ 11
  toeicTest(11, {
    p2: [
      ['Who ordered the extra chairs?', 'The event coordinator did.', 'Twelve of them.', 'They are in order.', 'Who → người đặt.'],
      ['When does the warranty expire?', 'At the end of this year.', 'It covers all parts.', 'From the manufacturer.', 'When → thời hạn.'],
      ['Where is the nearest ATM?', "There's one in the lobby.", 'Up to five hundred dollars.', 'I need some cash.', 'Where → vị trí.'],
      ['How do you like your new position?', "It's challenging, but I enjoy it.", 'On the tenth floor.', 'Since last month.', 'Hỏi cảm nhận → nêu nhận xét.'],
      ['Have the invitations been sent out?', 'Yes, they went out yesterday.', 'I was invited, too.', 'To the banquet hall.', 'Câu hỏi Yes/No bị động hoàn thành.'],
      ['Why did Ms. Reed leave early?', 'She had a doctor\'s appointment.', 'At four thirty.', 'By taxi.', 'Why → lý do.'],
      ['Shall I turn on the air conditioner?', 'Yes, please. It is hot in here.', 'Turn right at the corner.', 'The conditions are good.', 'Lời đề nghị → chấp nhận.'],
      ['This photocopier makes a strange noise.', 'It probably needs servicing.', 'Fifty copies, please.', 'I cannot hear the phone.', 'Câu nêu vấn đề → nhận định nguyên nhân.'],
    ],
    p3: [
      {
        title: 'A printing order',
        lines: [
          "W: Hi, I'd like to have five hundred business cards printed. Here is the design on a memory stick.",
          "M: Thanks. Let me open the file. It looks good, but the logo is a little blurry. Do you have a higher-quality image?",
          "W: Yes, I can email it to you when I get back to the office.",
          'M: Great. Once I receive it, the cards will take two days.',
          "W: That's fine. How much will it be?",
          'M: Forty-five dollars. You can pay when you pick them up.',
        ],
        qs: [
          ['What does the woman want to print?', 'Business cards', 'Posters', 'Brochures', 'Invitations', '"five hundred business cards".'],
          ['What problem does the man notice?', 'An image is not clear.', 'A name is misspelled.', 'The file will not open.', 'The paper is too thin.', '"the logo is a little blurry".'],
          ['When will the woman pay?', 'When she collects the order', 'Right now', 'By bank transfer tomorrow', 'When she sends the email', '"You can pay when you pick them up".'],
        ],
      },
      {
        title: 'Arranging a job interview',
        lines: [
          'M: Hello, Ms. Vega? This is Sam Porter from Atlas Engineering. We received your application for the project manager position.',
          'W: Oh, hello. Thank you for calling.',
          'M: We would like to invite you for an interview next Tuesday at two p.m. Would that suit you?',
          "W: I'm afraid I'll be out of town on Tuesday. Would Wednesday be possible?",
          'M: Let me check. Yes, Wednesday at ten a.m. is available. Please bring copies of your certificates.',
          "W: I will. Thank you very much.",
        ],
        qs: [
          ['Why is the man calling?', 'To arrange an interview', 'To offer a job', 'To request a payment', 'To cancel a meeting', '"invite you for an interview".'],
          ['Why can the woman not come on Tuesday?', 'She will be away.', 'She has another interview.', 'She is ill.', 'She has to work.', '"I\'ll be out of town on Tuesday".'],
          ['What is the woman asked to bring?', 'Copies of her certificates', 'A passport photo', 'A reference letter', 'Her laptop', '"Please bring copies of your certificates".'],
        ],
      },
    ],
    p4: [
      {
        title: 'Announcement at a conference',
        lines: [
          'W: May I have your attention, please? There has been a change to this afternoon\'s program.',
          'W: The two o\'clock session on digital payments has been moved from the Lincoln Room to the Grand Ballroom because of the large number of people who have registered.',
          'W: Also, Dr. Ahmed\'s talk on online security has been canceled because his flight was delayed. In its place, there will be a panel discussion on the same topic. Updated schedules are available at the registration desk.',
        ],
        qs: [
          ['Why has a session been moved?', 'Many people signed up for it.', 'The room is being cleaned.', 'The speaker requested it.', 'The equipment is broken.', '"because of the large number of people who have registered".'],
          ['Why was Dr. Ahmed\'s talk canceled?', 'His flight was delayed.', 'He is ill.', 'Too few people registered.', 'The topic was changed.', '"because his flight was delayed".'],
          ['Where can listeners get a new schedule?', 'At the registration desk', 'In the Grand Ballroom', 'On the website', 'In the Lincoln Room', '"Updated schedules are available at the registration desk".'],
        ],
      },
      {
        title: 'News report about a new bridge',
        lines: [
          'M: In local news, the new Harbor Bridge will finally open to traffic on Monday morning, six months later than planned.',
          'M: City officials say the delay was caused by an unusually wet winter. The four-lane bridge is expected to cut travel time between the east side and downtown by fifteen minutes.',
          'M: To mark the occasion, the bridge will be open only to pedestrians on Sunday. There will be food stands and live music from noon until five.',
        ],
        qs: [
          ['When will the bridge open to cars?', 'On Monday', 'On Sunday', 'In six months', 'Next winter', '"open to traffic on Monday morning".'],
          ['What caused the delay?', 'Wet weather', 'A lack of money', 'A design error', 'A workers\' strike', '"an unusually wet winter".'],
          ['What will happen on Sunday?', 'People can walk across the bridge.', 'The bridge will be closed to everyone.', 'Officials will inspect the bridge.', 'Traffic will be redirected downtown.', '"open only to pedestrians on Sunday".'],
        ],
      },
    ],
    p5: [
      ['The interns were asked to work ____ with the senior designers.', 'closely', 'close', 'closed', 'closeness', 'Trạng từ bổ nghĩa cho "work".'],
      ['The board will meet ____ to discuss the proposed merger.', 'shortly', 'short', 'shorten', 'shortage', '"shortly" = sắp tới, chẳng bao lâu nữa.'],
      ['Mr. Kwan is looking forward to ____ the new clients.', 'meeting', 'meet', 'met', 'meets', '"look forward to + V-ing".'],
      ['The supplies were delivered ____ the wrong address.', 'to', 'at', 'in', 'by', '"deliver to + địa điểm".'],
      ['The company offers ____ salaries and excellent benefits.', 'competitive', 'compete', 'competition', 'competitively', 'Tính từ trước danh từ "salaries".'],
      ['____ employees are entitled to fifteen days of paid leave.', 'Full-time', 'Fully', 'Fullness', 'Fill', 'Tính từ ghép bổ nghĩa cho "employees".'],
      ['The software update will be installed ____ tonight.', 'automatically', 'automatic', 'automate', 'automation', 'Trạng từ bổ nghĩa cho "will be installed".'],
      ['The manager reminded staff ____ their timesheets by Friday.', 'to submit', 'submitting', 'submit', 'submitted', '"remind someone to + V".'],
      ['Sales of electric bicycles have increased ____ in recent years.', 'dramatically', 'dramatic', 'drama', 'dramatize', 'Trạng từ bổ nghĩa cho "have increased".'],
      ['The hotel can ____ up to three hundred guests.', 'accommodate', 'accommodation', 'accommodating', 'accommodated', 'Sau "can" là V nguyên mẫu.'],
      ['The results of the survey were ____ surprising.', 'somewhat', 'something', 'someone', 'sometime', '"somewhat + adj": hơi, phần nào.'],
      ['Please store the chemicals in a cool, dry ____.', 'place', 'placed', 'placing', 'places', 'Sau tính từ cần danh từ.'],
    ],
    p6: [
      {
        title: 'Email: Conference reminder',
        text: 'Dear Participant,\n\nThis is a reminder that the Regional Sales Conference will begin next Thursday at the Pacific Hotel. Registration opens at 8:00 a.m., and the opening speech will (1)____ at 9:00.\n\n(2)____. If you are driving, please note that hotel parking is limited, so we recommend using the public garage across the street.\n\nA printed program will be given to you (3)____ arrival. We look forward to seeing you.',
        qs: [
          ['(1) ____', 'start', 'starting', 'started', 'starts', 'Sau "will" là V nguyên mẫu.'],
          ['(2) ____', 'The hotel is a ten-minute walk from Central Station.', 'Last year\'s conference was held in May.', 'Our sales increased in the second quarter.', 'The hotel was built in 1990.', 'Câu sau nói về lái xe → câu trước nói cách đến bằng phương tiện công cộng.'],
          ['(3) ____', 'on', 'in', 'by', 'with', '"on arrival": khi đến nơi.'],
        ],
      },
      {
        title: 'Notice: Cafeteria changes',
        text: 'To all staff:\n\nThe company cafeteria will introduce a new menu on Monday. In response to your suggestions, we are adding more vegetarian dishes and a daily salad bar. Prices will remain (1)____.\n\nIn addition, the cafeteria will now open at 7:00 a.m. to serve breakfast. (2)____ who start work early can enjoy fresh coffee, eggs, and pastries.\n\nWe hope you like the changes. Comment cards are available at the cashier, and your feedback is always (3)____.',
        qs: [
          ['(1) ____', 'unchanged', 'unchanging', 'unchangeable', 'not change', '"remain + adj": giá giữ nguyên.'],
          ['(2) ____', 'Those', 'They', 'Them', 'These ones', '"Those who...": những người mà.'],
          ['(3) ____', 'welcome', 'welcomes', 'welcoming', 'to welcome', '"is always welcome": luôn được hoan nghênh.'],
        ],
      },
    ],
    p7: [
      {
        title: 'Advertisement: Car rental',
        text: 'SUNWAY CAR RENTAL – Summer Special\n\nRent any compact car for just $29 per day when you book for five days or more. Offer valid June 1 – August 31.\n\nEvery rental includes:\n• Unlimited mileage\n• 24-hour roadside assistance\n• One additional driver at no extra cost\n\nChild seats and GPS units are available for $5 per day each. Drivers must be at least 21 years old and hold a valid license. Book online at sunwayrental.com or at any of our twelve locations.',
        qs: [
          ['How can customers get the special rate?', 'By renting for at least five days', 'By booking in May', 'By renting a large car', 'By paying in advance', '"when you book for five days or more".'],
          ['What costs extra?', 'A GPS unit', 'A second driver', 'Roadside assistance', 'Unlimited mileage', 'Ghế trẻ em và GPS: $5 mỗi ngày.'],
          ['What is required of drivers?', 'They must be at least 21.', 'They must live locally.', 'They must have a credit card.', 'They must buy insurance.', '"Drivers must be at least 21 years old".'],
        ],
      },
      {
        title: 'Email: Office move',
        text: 'To: All employees, Lyle & Partners\nFrom: Sophie Grant, Office Manager\nSubject: Moving day\n\nAs you know, we are moving to our new offices at 300 Canal Street on Friday, May 17. The movers will arrive at 8:00 a.m.\n\nBy Thursday evening, please pack your personal items and files in the boxes provided and label each box with your name and new room number. Computers will be packed by the IT team, so please do not unplug anything yourself.\n\nThe office will be closed on Friday. We will open at the new address on Monday, May 20.',
        qs: [
          ['What should employees do by Thursday evening?', 'Pack and label their boxes', 'Unplug their computers', 'Visit the new office', 'Meet the movers', '"pack your personal items... and label each box".'],
          ['Who will pack the computers?', 'The IT team', 'The movers', 'Each employee', 'The office manager', '"Computers will be packed by the IT team".'],
          ['When will employees begin working at the new location?', 'On May 20', 'On May 17', 'On Thursday', 'On Saturday', '"We will open at the new address on Monday, May 20".'],
        ],
      },
      {
        title: 'Text-message chain',
        text: 'Ravi Menon (1:15 p.m.): Hi Claire. I\'m at the client\'s office, but I left the product samples in my car at the repair shop. Could you bring the spare set from the storeroom?\n\nClaire Dunn (1:17 p.m.): I\'m about to go into a meeting. Let me ask Felix.\n\nClaire Dunn (1:21 p.m.): Felix is free. He\'ll take a taxi and should be there in twenty minutes. Which floor?\n\nRavi Menon (1:22 p.m.): The eighth. Tell him to ask for me at reception. You\'re a lifesaver!\n\nClaire Dunn (1:23 p.m.): No problem. Good luck with the presentation.',
        qs: [
          ['What does Mr. Menon need?', 'Some product samples', 'A taxi', 'His car keys', 'A meeting room', '"Could you bring the spare set...?"'],
          ['Why can Ms. Dunn not go herself?', 'She has a meeting.', 'She is at the repair shop.', 'She does not have a car.', 'She is at lunch.', '"I\'m about to go into a meeting".'],
          ['At 1:22 p.m., what does Mr. Menon mean when he writes, "You\'re a lifesaver"?', 'He is grateful for her help.', 'He needs medical help.', 'He wants her to come quickly.', 'He thinks the client will be pleased.', 'Lời cảm ơn vì đã giúp gỡ rắc rối.'],
        ],
      },
    ],
  }),

  // =========================================================================== ĐỀ 12
  toeicTest(12, {
    p2: [
      ['How long will the presentation last?', 'About forty-five minutes.', 'In the auditorium.', 'It was the last one.', 'How long → thời lượng.'],
      ['Who do I give my expense report to?', 'To your department manager.', 'It was quite expensive.', 'Before the fifth.', 'Who → người nhận.'],
      ['Where did you buy that briefcase?', 'At a shop near the station.', 'It was a brief meeting.', 'Last weekend.', 'Where → nơi mua.'],
      ['Are there any seats left on the nine o\'clock train?', "I'm afraid it is sold out.", 'On the left side.', 'It left at nine.', 'Câu hỏi Yes/No → câu trả lời gián tiếp "hết vé".'],
      ['When is the best time to call you?', 'Any time after three.', 'On my mobile phone.', 'It was the best.', 'When → thời gian thuận tiện.'],
      ['Why don\'t you take a short break?', "I will, as soon as I finish this email.", 'Because it broke.', 'It was too short.', 'Lời gợi ý → đồng ý kèm điều kiện.'],
      ['Which caterer did we use last year?', 'The one on King Street.', 'About thirty guests.', 'Yes, we used it.', 'Which → xác định cụ thể.'],
      ['The elevator is being repaired this morning.', "Then we'll have to take the stairs.", 'A pair of shoes.', 'It goes up and down.', 'Câu thông báo → rút ra hệ quả.'],
    ],
    p3: [
      {
        title: 'At a hotel front desk',
        lines: [
          "M: Good evening. I have a reservation under the name Hoffman, for three nights.",
          'W: Welcome, Mr. Hoffman. Yes, I have it here. A single room with breakfast included.',
          "M: Actually, my colleague will be joining me tomorrow. Could I change to a twin room from tomorrow night?",
          'W: Certainly. There will be an extra charge of twenty dollars per night. Would you like me to move your luggage tomorrow?',
          "M: Yes, please. We'll be at a conference all day.",
          "W: No problem. Here is your key for tonight. You're in room four ten.",
        ],
        qs: [
          ['How long is the man staying?', 'Three nights', 'One night', 'Two nights', 'A week', '"for three nights".'],
          ['Why does the man want to change rooms?', 'A colleague will join him.', 'His room is too noisy.', 'He wants a better view.', 'The room has no desk.', '"my colleague will be joining me tomorrow".'],
          ['What does the woman offer to do?', 'Move his luggage', 'Book a taxi', 'Cancel the extra charge', 'Serve breakfast in his room', '"Would you like me to move your luggage tomorrow?"'],
        ],
      },
      {
        title: 'A problem with an invoice',
        lines: [
          "W: Hello, this is Rachel from Pinewood Dental. I'm calling about the invoice you sent us for cleaning supplies.",
          'M: Yes, Rachel. Is there a problem?',
          'W: We were charged for ten boxes of gloves, but we only received eight.',
          "M: I'm sorry about that. Let me look at the delivery record. You're right. Two boxes were out of stock that day.",
          'W: Could you send us a new invoice?',
          "M: I'll do that right away, and the other two boxes will be delivered on Monday.",
        ],
        qs: [
          ['Why is the woman calling?', 'An invoice is incorrect.', 'A delivery is late.', 'She wants to place an order.', 'A product is damaged.', 'Bị tính tiền 10 hộp nhưng chỉ nhận 8.'],
          ['What does the man check?', 'A delivery record', 'A price list', 'A calendar', 'A bank statement', '"Let me look at the delivery record".'],
          ['What will happen on Monday?', 'The remaining boxes will arrive.', 'A new invoice will be printed.', 'The woman will visit the store.', 'The price will go up.', '"the other two boxes will be delivered on Monday".'],
        ],
      },
    ],
    p4: [
      {
        title: 'Message from a moving company',
        lines: [
          'W: Hello, this is a message for Mr. Dalton from Swift Movers.',
          'W: I am calling to confirm that our team will arrive at your apartment on Saturday at eight a.m. to pack and load your furniture.',
          'W: Please make sure that the elevator in your building is reserved for us, and that there is a parking space for the truck near the entrance. If you have any fragile items, such as mirrors or paintings, let our team know when they arrive. Thank you.',
        ],
        qs: [
          ['What is the purpose of the message?', 'To confirm an appointment', 'To change a date', 'To request a payment', 'To sell furniture', '"I am calling to confirm".'],
          ['What is the listener asked to arrange?', 'An elevator and parking', 'Boxes and tape', 'A cleaning service', 'A storage room', '"the elevator is reserved... a parking space for the truck".'],
          ['What should the listener tell the team about?', 'Items that break easily', 'The new address', 'The neighbors', 'His work schedule', '"fragile items, such as mirrors or paintings".'],
        ],
      },
      {
        title: 'Talk by a department manager',
        lines: [
          'M: Thanks for coming, everyone. I want to share the results of last month\'s customer survey.',
          'M: Overall, the news is good. Eighty-five percent of customers said they were satisfied with our products. However, many complained about long waiting times when they call our support line.',
          'M: To fix this, we are going to hire four more support staff and extend our phone hours until nine p.m. I have printed the complete results, and you will find a copy on the table by the door.',
        ],
        graphic: ['Customer survey results', 'Area | Satisfied\nProduct quality | 85%\nDelivery speed | 78%\nWebsite | 74%\nPhone support | 52%'],
        qs: [
          ['What is the talk mainly about?', 'Customer survey results', 'A new product', 'Staff holidays', 'A sales competition', '"the results of last month\'s customer survey".'],
          ['Look at the graphic. Which figure relates to the area that will be improved?', '52%', '85%', '78%', '74%', 'Vấn đề là thời gian chờ đường dây hỗ trợ → Phone support 52%.'],
          ['What does the company plan to do?', 'Hire more support staff', 'Lower its prices', 'Redesign its website', 'Close the support line', '"hire four more support staff".'],
        ],
      },
    ],
    p5: [
      ['The store will ____ its tenth anniversary next month.', 'celebrate', 'celebration', 'celebrated', 'celebrating', 'Sau "will" là V nguyên mẫu.'],
      ['The new CEO is ____ respected throughout the industry.', 'highly', 'high', 'height', 'higher', '"highly respected": rất được kính trọng.'],
      ['Please reply to this invitation ____ May 10.', 'by', 'until', 'at', 'within', '"by + mốc thời gian": trước/chậm nhất.'],
      ['The technician explained the problem in ____ terms.', 'simple', 'simply', 'simplify', 'simplicity', 'Tính từ trước danh từ "terms".'],
      ['Ms. Nguyen, ____ joined the firm in 2019, now leads the design team.', 'who', 'which', 'whose', 'that', 'Mệnh đề quan hệ không xác định chỉ người → "who" (không dùng "that").'],
      ['The museum is open daily ____ Mondays.', 'except', 'without', 'unless', 'apart', '"except Mondays": trừ thứ Hai.'],
      ['The company is ____ to protecting the environment.', 'committed', 'commit', 'commitment', 'committing', '"be committed to + V-ing".'],
      ['We would appreciate ____ if you could respond quickly.', 'it', 'that', 'this one', 'them', '"appreciate it if...".'],
      ['All passengers must go through security ____ boarding.', 'prior to', 'in front', 'ahead', 'former', '"prior to + V-ing/danh từ": trước khi.'],
      ['The construction of the stadium is ____ complete.', 'almost', 'most', 'utmost', 'the most', '"almost complete": gần hoàn tất.'],
      ['The seminar provided useful ____ on tax regulations.', 'information', 'informations', 'inform', 'informed', '"information" là danh từ không đếm được.'],
      ['Mr. Stone had his car ____ before the long trip.', 'serviced', 'service', 'servicing', 'to service', '"have + something + V3": nhờ ai làm gì.'],
    ],
    p6: [
      {
        title: 'Email: Request for payment',
        text: 'Dear Mr. Papadakis,\n\nAccording to our records, invoice number 5582 for $1,240, which was (1)____ on March 15, has not yet been paid.\n\nIf you have already sent your payment, please ignore this message. (2)____, we would be grateful if you could settle the amount within seven days.\n\n(3)____. You can reach our accounts department at 555-0139 between 9 a.m. and 5 p.m.\n\nThank you for your prompt attention.\n\nSincerely,\nNorthern Paper Supplies',
        qs: [
          ['(1) ____', 'due', 'owed to', 'late', 'payment', '"was due on March 15": đến hạn ngày 15/3.'],
          ['(2) ____', 'Otherwise', 'Therefore', 'Similarly', 'For example', '"Otherwise": nếu chưa thì.'],
          ['(3) ____', 'Please contact us if there is a problem with the invoice.', 'We sell many kinds of paper.', 'Your order was shipped by truck.', 'Our office will be painted next month.', 'Câu sau cho số điện thoại liên hệ.'],
        ],
      },
      {
        title: 'Article: Local market',
        text: 'The Riverside Farmers\' Market will return to Mill Square this Saturday for its fifteenth season. More than sixty local farmers and food producers are expected to (1)____ part.\n\nIn addition to fresh fruit and vegetables, visitors will find homemade bread, cheese, and honey. This year, the market is also introducing a "Kids\' Corner," (2)____ children can learn how to plant seeds.\n\nThe market is open every Saturday from 8 a.m. to 1 p.m. (3)____ the end of October.',
        qs: [
          ['(1) ____', 'take', 'make', 'have', 'do', '"take part": tham gia.'],
          ['(2) ____', 'where', 'which', 'when', 'who', 'Mệnh đề quan hệ chỉ nơi chốn.'],
          ['(3) ____', 'until', 'at', 'on', 'between', '"until the end of October".'],
        ],
      },
    ],
    p7: [
      {
        title: 'Form: Customer feedback',
        text: 'THE GREEN FORK RESTAURANT – Comment Card\n\nDate of visit: August 3   Meal: Dinner\nName: Patricia Lowe\n\nFood: Excellent ☑  Good ☐  Fair ☐  Poor ☐\nService: Excellent ☐  Good ☐  Fair ☑  Poor ☐\nCleanliness: Excellent ☑  Good ☐  Fair ☐  Poor ☐\n\nComments: The grilled fish was the best I have had in years. However, we waited 25 minutes before anyone took our order, and the waiter forgot our drinks. I think you need more staff on weekends. I will come back, but probably on a weekday.',
        qs: [
          ['What did Ms. Lowe think of the food?', 'It was excellent.', 'It was fair.', 'It was too expensive.', 'It was cold.', 'Mục Food: Excellent.'],
          ['What problem does Ms. Lowe mention?', 'Slow service', 'A dirty table', 'A noisy room', 'A wrong bill', 'Chờ 25 phút, người phục vụ quên đồ uống.'],
          ['What does Ms. Lowe suggest?', 'Hiring more staff for weekends', 'Lowering the prices', 'Changing the menu', 'Opening on weekdays', '"I think you need more staff on weekends".'],
        ],
      },
      {
        title: 'Memo: Security badges',
        text: 'MEMO\nTo: All employees\nFrom: Security Office\nRe: New ID badges\n\nNew electronic ID badges will replace the current cards on July 1. The new badges are required to enter the building, use the elevators after 6 p.m., and print documents.\n\nTo get your badge, come to the security office on the ground floor between June 17 and June 28 to have your photograph taken. It takes about five minutes.\n\nAfter July 1, old cards will no longer work. A replacement for a lost badge will cost $15.',
        qs: [
          ['What is NOT mentioned as a use of the new badge?', 'Paying in the cafeteria', 'Entering the building', 'Using elevators in the evening', 'Printing documents', 'Bài nêu vào tòa nhà, thang máy sau 6 giờ, in tài liệu.'],
          ['What must employees do to get a badge?', 'Have a photo taken', 'Pay $15', 'Fill out an online form', 'Return their old card by mail', '"to have your photograph taken".'],
          ['What will happen after July 1?', 'Old cards will stop working.', 'The security office will move.', 'Badges will be free to replace.', 'The building will close at 6 p.m.', '"old cards will no longer work".'],
        ],
      },
      {
        title: 'Article: Bookstore event',
        text: 'Award-winning travel writer Elena Marsh will visit Harbor Books on Thursday, October 12, to talk about her latest book, "Slow Roads." — [1] — The book describes her six-month journey by bicycle across South America.\n\nThe event begins at 7:00 p.m. — [2] — After a thirty-minute talk, Ms. Marsh will answer questions from the audience and sign copies of her book.\n\nAdmission is free, but seating is limited to eighty people. — [3] — Those who cannot attend may order a signed copy by calling the store before October 10. — [4] —',
        qs: [
          ['What is "Slow Roads" about?', 'A long bicycle trip', 'A history of bookstores', 'Cooking in South America', 'Road construction', '"her six-month journey by bicycle across South America".'],
          ['What will Ms. Marsh do after her talk?', 'Take questions and sign books', 'Show a film', 'Read from another book', 'Serve refreshments', '"answer questions... and sign copies of her book".'],
          ['In which position does this sentence best belong? "To reserve a place, sign up at the store or on its website."', '[3]', '[1]', '[2]', '[4]', 'Nối tiếp ý chỗ ngồi giới hạn 80 người.'],
        ],
      },
    ],
  }),
];
