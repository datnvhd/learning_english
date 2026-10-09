/** Bộ đề TOEIC Listening & Reading cố định – đề 7 và 8 (định dạng rút gọn, xem helpers.ts) */
import { ToeicTest, toeicTest } from './helpers';

export const TESTS: ToeicTest[] = [
  // =========================================================================== ĐỀ 7
  toeicTest(7, {
    p2: [
      ['Who is responsible for updating the website?', 'The IT team handles that.', 'It was updated last week.', 'On the home page.', 'Who → người/bộ phận phụ trách.'],
      ['When does your flight leave?', 'At six forty tomorrow morning.', 'From Terminal Two.', 'To Singapore.', 'When → giờ khởi hành.'],
      ['How far is the warehouse from here?', 'About ten minutes by car.', 'It is very large.', 'Since last year.', 'How far → khoảng cách/thời gian đi.'],
      ['Would you like coffee or tea?', 'Just water, please.', 'Yes, I would.', 'In the break room.', 'Câu hỏi lựa chọn có thể được trả lời bằng phương án thứ ba.'],
      ["Hasn't the electrician come yet?", "He's on his way now.", 'Yes, it is electric.', 'The lights are bright.', 'Câu hỏi phủ định → thông tin về tình trạng hiện tại.'],
      ['Where can I buy a monthly parking pass?', 'At the security office.', 'Sixty dollars.', 'It expires in June.', 'Where → nơi mua.'],
      ['Could you proofread this letter for me?', "Sure, leave it on my desk.", 'I read the proof.', 'The letter carrier came.', 'Lời nhờ → đồng ý.'],
      ["The client wasn't happy with the first design.", "What changes does she want?", "Yes, it was the first.", 'I am happy to hear that.', 'Câu thông tin → hỏi thêm chi tiết.'],
    ],
    p3: [
      {
        title: 'An apartment viewing',
        lines: [
          "W: Thanks for showing me the apartment, Mr. Grant. I like the kitchen, but the living room is smaller than I expected.",
          'M: I understand. There is a similar unit on the sixth floor with a larger living room. It will be available on the first of next month.',
          'W: Is the rent the same?',
          'M: It is fifty dollars more per month, but it also has a balcony.',
          "W: That sounds worth it. Could I see it now?",
          'M: The current tenant is at home today. Let me call and ask whether we can come up.',
        ],
        qs: [
          ['What does the woman say about the apartment?', 'The living room is small.', 'The kitchen is old.', 'The rent is too high.', 'The building is noisy.', '"the living room is smaller than I expected".'],
          ['What is true about the sixth-floor unit?', 'It has a balcony.', 'It is cheaper.', 'It is available today.', 'It has two kitchens.', '"it also has a balcony".'],
          ['What will the man do next?', 'Call a tenant', 'Sign a contract', 'Lower the rent', 'Show the parking area', '"Let me call and ask whether we can come up".'],
        ],
      },
      {
        title: 'Training for new software',
        lines: [
          'M: Karen, did you sign up for the training on the new accounting software?',
          "W: Not yet. There are two sessions, aren't there?",
          'M: Yes, one on Tuesday morning and one on Thursday afternoon. I am going on Tuesday.',
          "W: I have a client meeting on Tuesday, so I'll take the Thursday one. Is it in the computer lab?",
          "M: No, the lab is being renovated. It's in the boardroom, and we have to bring our own laptops.",
        ],
        qs: [
          ['What are the speakers discussing?', 'A software training session', 'A client meeting', 'A new accountant', 'A computer purchase', 'Buổi đào tạo phần mềm kế toán mới.'],
          ['Why will the woman attend on Thursday?', 'She has a meeting on Tuesday.', 'She is on vacation on Tuesday.', 'The Tuesday session is full.', 'Her laptop is being repaired.', '"I have a client meeting on Tuesday".'],
          ['What should participants bring?', 'Their own laptops', 'A notebook', 'An ID card', 'A registration form', '"we have to bring our own laptops".'],
        ],
      },
    ],
    p4: [
      {
        title: 'Announcement on a train',
        lines: [
          'M: Good afternoon, passengers. This is the conductor speaking. We are sorry to announce that this train will be delayed by about twenty minutes because of signal repairs ahead.',
          'M: We now expect to arrive at Central Station at four fifty. Passengers who will miss connecting trains should speak to a staff member on the platform when we arrive.',
          'M: In the meantime, the cafe in car number five is offering free coffee and tea. Thank you for your patience.',
        ],
        qs: [
          ['What is the cause of the delay?', 'Signal repairs', 'Bad weather', 'A crowded platform', 'A medical emergency', '"because of signal repairs ahead".'],
          ['Who should passengers speak to about missed connections?', 'Staff on the platform', 'The conductor', 'The cafe manager', 'The ticket office by phone', '"speak to a staff member on the platform".'],
          ['What is being offered free of charge?', 'Hot drinks', 'Sandwiches', 'Newspapers', 'Tickets', '"free coffee and tea".'],
        ],
      },
      {
        title: 'Talk at a company awards dinner',
        lines: [
          'W: Good evening, everyone. It is my pleasure to present this year\'s Sales Excellence Award.',
          'W: This year\'s winner joined us only three years ago as a junior representative. Since then, she has opened forty new accounts and increased sales in the northern region by sixty percent.',
          'W: She is also known for helping new colleagues learn the job. Please join me in congratulating Maria Kowalski. Maria, please come up to the stage to receive your award.',
        ],
        qs: [
          ['What is the purpose of the talk?', 'To present an award', 'To announce a retirement', 'To introduce a new product', 'To report annual losses', '"present this year\'s Sales Excellence Award".'],
          ['What is said about Ms. Kowalski?', 'She increased sales in her region.', 'She founded the company.', 'She has worked there for ten years.', 'She is moving to another office.', '"increased sales in the northern region by sixty percent".'],
          ['What is Ms. Kowalski asked to do?', 'Come to the stage', 'Give a presentation', 'Train a colleague', 'Sign a contract', '"please come up to the stage".'],
        ],
      },
    ],
    p5: [
      ['The store will be closed tomorrow in ____ of the national holiday.', 'observance', 'observe', 'observant', 'observing', '"in observance of": để kỷ niệm/nghỉ lễ.'],
      ['Ms. Bauer speaks French ____ than anyone else in the office.', 'more fluently', 'fluent', 'most fluently', 'fluency', 'So sánh hơn của trạng từ với "than".'],
      ['The invoice must be paid ____ thirty days.', 'within', 'until', 'since', 'while', '"within thirty days": trong vòng 30 ngày.'],
      ['We apologize for the ____ in processing your request.', 'delay', 'delayed', 'delaying', 'to delay', 'Sau "the" cần danh từ.'],
      ['The new assistant is ____ of handling several tasks at once.', 'capable', 'able', 'possible', 'skillful', '"be capable of + V-ing".'],
      ['____ arriving at the hotel, guests should register at the front desk.', 'Upon', 'While', 'During', 'Since', '"Upon + V-ing": ngay khi.'],
      ['The director was pleased ____ the results of the survey.', 'with', 'for', 'to', 'of', '"be pleased with".'],
      ['Mr. Sato has not ____ decided which supplier to use.', 'yet', 'still', 'already', 'ever', '"has not yet decided": vẫn chưa quyết định.'],
      ['All ____ should be directed to the customer service department.', 'inquiries', 'inquire', 'inquiring', 'inquired', 'Sau "All" cần danh từ số nhiều.'],
      ['The seminar will cover topics ____ from budgeting to leadership.', 'ranging', 'ranged', 'range', 'ranges', 'Rút gọn mệnh đề chủ động: topics (which range) → ranging from...to.'],
      ['Employees are encouraged to ____ in the annual charity run.', 'participate', 'participation', 'participant', 'participating', '"be encouraged to + V"; "participate in".'],
      ['The repairs were completed two days ahead ____ schedule.', 'of', 'to', 'from', 'on', '"ahead of schedule": trước tiến độ.'],
    ],
    p6: [
      {
        title: 'Email: Welcome to a new employee',
        text: 'Dear Mr. Adeyemi,\n\nWe are pleased to welcome you to Trenton Logistics. Your first day will be Monday, August 4. Please report to the reception desk at 8:30 a.m., (1)____ you will be met by your supervisor, Lena Fox.\n\nDuring your first week, you will take part in an orientation program. (2)____. You will also receive your security badge and computer login.\n\nPlease bring your bank details so that we can set up your (3)____.\n\nBest regards,\nHuman Resources',
        qs: [
          ['(1) ____', 'where', 'which', 'when', 'what', 'Mệnh đề quan hệ chỉ nơi chốn (the reception desk).'],
          ['(2) ____', 'It includes a tour of our warehouse and a safety course.', 'The parking lot is closed on weekends.', 'Trenton Logistics delivers to twelve countries.', 'Ms. Fox joined the company in 2015.', '"It" chỉ "orientation program"; câu sau có "also" bổ sung.'],
          ['(3) ____', 'salary payments', 'travel plans', 'job application', 'lunch order', 'Thông tin ngân hàng dùng để trả lương.'],
        ],
      },
      {
        title: 'Advertisement: Home internet',
        text: 'Switch to NovaNet and enjoy the (1)____ home internet in the city. Our fiber network delivers speeds of up to one gigabit per second, so the whole family can stream, play, and work at the same time.\n\nPlans start at just $39 a month, and there is no long-term contract. (2)____ you are not completely satisfied within the first thirty days, we will refund your money.\n\nInstallation is free for customers who (3)____ before the end of the month.',
        qs: [
          ['(1) ____', 'fastest', 'faster', 'fast', 'fastly', 'So sánh nhất với "the ... in the city".'],
          ['(2) ____', 'If', 'So', 'Unless', 'Until', 'Mệnh đề điều kiện.'],
          ['(3) ____', 'sign up', 'signing up', 'signed up', 'to sign up', 'Động từ hiện tại đơn sau "who" (chủ ngữ số nhiều).'],
        ],
      },
    ],
    p7: [
      {
        title: 'Notice: Museum closing',
        text: 'HARTWELL MUSEUM OF ART\n\nThe second-floor galleries will be closed from January 6 to February 20 while we install new lighting. The ground-floor galleries, gift shop, and cafe will remain open as usual.\n\nDuring this period, admission will be reduced from $14 to $9. Members may bring one guest free of charge on each visit.\n\nThe second floor will reopen on February 21 with a special exhibition of Japanese prints.',
        qs: [
          ['Why will some galleries be closed?', 'New lighting is being installed.', 'An exhibition is being moved.', 'The roof is being repaired.', 'Staff are on holiday.', '"while we install new lighting".'],
          ['How much will admission cost during the closure?', '$9', '$14', '$5', 'Nothing', '"reduced from $14 to $9".'],
          ['What will happen on February 21?', 'A special exhibition will open.', 'The cafe will close.', 'Membership fees will increase.', 'The gift shop will move.', 'Tầng hai mở lại với triển lãm tranh in Nhật Bản.'],
        ],
      },
      {
        title: 'Email: Request for a quote',
        text: 'To: sales@brightsigns.com\nFrom: Colin Yates, Yates Hardware\nSubject: Sign for new store\n\nHello,\n\nWe are opening a second store on Kent Street on June 1 and need an outdoor sign. It should be about three meters wide, with our name in white letters on a dark green background, and it must be lit at night.\n\nCould you send me a price quote and let me know how long production would take? Our budget is around $2,000. If possible, I would like someone to visit the site next week to take measurements.\n\nThank you,\nColin Yates',
        qs: [
          ['What does Mr. Yates want to buy?', 'An outdoor sign', 'Green paint', 'Store lighting', 'A delivery van', '"need an outdoor sign".'],
          ['What information does Mr. Yates request?', 'The cost and production time', 'The store location', 'A list of colors', 'The company history', '"send me a price quote and let me know how long production would take".'],
          ['What does Mr. Yates suggest for next week?', 'A visit to the store site', 'A telephone meeting', 'The delivery of the sign', 'The store opening', '"someone to visit the site next week to take measurements".'],
        ],
      },
      {
        title: 'Web page: Conference registration',
        text: 'GREEN ENERGY SUMMIT – October 18–20, Vancouver Convention Centre\n\nRegistration fees\nEarly registration (by August 31): $350\nStandard registration (September 1 – October 10): $450\nStudents (with valid ID): $150\nOne-day pass: $200\n\nFees include all sessions, lunches, and the welcome reception on October 18. The gala dinner on October 19 costs an additional $75.\n\nCancellations made before October 1 will be refunded in full, minus a $50 processing fee. No refunds will be given after that date.',
        qs: [
          ['How much would a non-student pay to register on September 15?', '$450', '$350', '$150', '$200', '15/9 thuộc giai đoạn "Standard registration".'],
          ['What is NOT included in the registration fee?', 'The gala dinner', 'Lunches', 'The welcome reception', 'Conference sessions', 'Tiệc tối gala tính thêm $75.'],
          ['What happens if someone cancels on October 5?', 'No money is returned.', 'A full refund is given.', 'A $50 fee is charged.', 'The ticket is moved to next year.', '"No refunds will be given after" ngày 1/10.'],
        ],
      },
    ],
  }),

  // =========================================================================== ĐỀ 8
  toeicTest(8, {
    p2: [
      ['Why was the product launch postponed?', 'The packaging was not ready.', 'At the downtown store.', 'For two weeks.', 'Why → lý do.'],
      ['Who can I ask about the insurance plan?', 'Try the benefits coordinator.', 'I am sure about that.', 'It covers dental care.', 'Who → người có thể hỏi.'],
      ['When are you taking your vacation?', 'The last two weeks of July.', 'To the mountains.', 'With my family.', 'When → thời gian.'],
      ['Do you know where the stapler is?', 'I saw it next to the scanner.', 'Yes, I know him well.', 'About ten pages.', 'Câu hỏi gián tiếp về vị trí.'],
      ['How would you like to pay?', 'By credit card, please.', 'Yes, I would like to.', 'It was expensive.', 'How → phương thức thanh toán.'],
      ['Should I print the handouts in color?', 'Black and white is fine.', 'The printer is on the left.', 'I handed them in.', 'Câu hỏi Yes/No → trả lời bằng lựa chọn khác.'],
      ["You're coming to the farewell party, aren't you?", "I wouldn't miss it.", 'It was fair.', 'He already left.', 'Câu hỏi đuôi → khẳng định sẽ đến.'],
      ['We need to reduce our travel expenses.', 'We could hold more meetings online.', 'It was a wonderful trip.', 'Expensive hotels.', 'Câu nêu nhu cầu → đề xuất cách làm.'],
    ],
    p3: [
      {
        title: 'At a pharmacy',
        lines: [
          'M: Hi, I am here to pick up a prescription for David Lin.',
          "W: Let me check. I'm sorry, Mr. Lin, but it is not ready yet. We are waiting for your doctor to confirm the dosage.",
          'M: Oh. How long will that take?',
          'W: We called the clinic an hour ago. If they call back soon, it will be ready in about thirty minutes.',
          "M: I have to go back to work. Could you send me a text message when it's ready?",
          'W: Of course. Is the number on your file still correct?',
        ],
        qs: [
          ['Where does the conversation take place?', 'At a pharmacy', 'At a clinic', 'At an office', 'At a bank', 'Người đàn ông đến lấy thuốc theo toa.'],
          ['Why is the prescription not ready?', 'The doctor has not confirmed a detail.', 'The medicine is out of stock.', 'The man did not pay.', 'The pharmacy just opened.', '"waiting for your doctor to confirm the dosage".'],
          ['What does the man ask the woman to do?', 'Send him a text message', 'Call his office', 'Deliver the medicine', 'Change his phone number', '"Could you send me a text message when it\'s ready?"'],
        ],
      },
      {
        title: 'Discussing a budget',
        lines: [
          "W: Tom, I've looked at the budget for the new advertising campaign. It's twenty percent higher than last year's.",
          "M: I know. That's mostly because we are adding television commercials this time.",
          "W: The director will probably ask us to cut something. What about the magazine ads?",
          "M: I'd rather keep those. Our survey showed that most of our customers read magazines. We could reduce the number of billboards instead.",
          'W: All right. Let\'s prepare both options and present them at Friday\'s meeting.',
        ],
        qs: [
          ['Why is the budget higher this year?', 'Television commercials have been added.', 'Magazine prices have risen.', 'More staff were hired.', 'The campaign is longer.', '"we are adding television commercials this time".'],
          ['Why does the man want to keep the magazine ads?', 'Most customers read magazines.', 'They are the cheapest option.', 'The director likes them.', 'They are already paid for.', '"Our survey showed that most of our customers read magazines".'],
          ['What will the speakers do on Friday?', 'Present two options', 'Film a commercial', 'Meet the customers', 'Conduct a survey', '"present them at Friday\'s meeting".'],
        ],
      },
    ],
    p4: [
      {
        title: 'Voicemail from a real estate agent',
        lines: [
          'W: Hi, Mr. Burke. This is Olivia from Keystone Realty. I have some good news.',
          'W: The owners of the house on Willow Street have accepted your offer. They would like to complete the sale by the end of the month.',
          'W: The next step is the building inspection. I can arrange it for Thursday or Friday of this week. Please call me back today and let me know which day you prefer, so that I can book the inspector.',
        ],
        qs: [
          ['What good news does the speaker give?', 'An offer has been accepted.', 'A price has been lowered.', 'A loan has been approved.', 'A house has been repaired.', '"have accepted your offer".'],
          ['What is the next step?', 'A building inspection', 'Signing a lease', 'Moving the furniture', 'Meeting the neighbors', '"The next step is the building inspection".'],
          ['Why should the listener call back today?', 'To choose a day', 'To make a payment', 'To cancel the offer', 'To speak to the owners', '"let me know which day you prefer".'],
        ],
      },
      {
        title: 'Introduction to a factory tour',
        lines: [
          'M: Welcome to the Delmont Chocolate Factory. My name is Victor, and I will be showing you around today.',
          'M: The tour takes about fifty minutes. We will start in the roasting room, then visit the mixing area, and finish in the packaging department.',
          'M: For hygiene reasons, everyone must wear the hair nets and coats provided at the entrance. Photography is not permitted inside the production area, but you are welcome to take pictures in the gift shop, where you can also taste our newest products.',
        ],
        graphic: ['Tour route', 'Stop | Area\n1 | Roasting room\n2 | Mixing area\n3 | Packaging department\n4 | Gift shop'],
        qs: [
          ['What must visitors wear?', 'Hair nets and coats', 'Gloves and boots', 'Hard hats', 'Name badges', '"everyone must wear the hair nets and coats".'],
          ['Look at the graphic. At which stop are visitors allowed to take photographs?', 'Stop 4', 'Stop 1', 'Stop 2', 'Stop 3', 'Chỉ được chụp ảnh ở gift shop → điểm dừng 4.'],
          ['What can visitors do at the end of the tour?', 'Try new products', 'Operate a machine', 'Meet the owner', 'Receive a certificate', '"taste our newest products".'],
        ],
      },
    ],
    p5: [
      ['The committee will ____ the applications next week.', 'evaluate', 'evaluation', 'evaluating', 'evaluative', 'Sau "will" là động từ nguyên mẫu.'],
      ['Mr. Park\'s presentation was ____ received by the audience.', 'well', 'good', 'better than', 'best of', '"well received": được đón nhận tốt.'],
      ['Please make sure that all windows are closed ____ leaving the office.', 'before', 'until', 'by', 'during', '"before + V-ing".'],
      ['The firm specializes ____ commercial real estate.', 'in', 'on', 'at', 'for', '"specialize in".'],
      ['Ms. Rossi was the ____ qualified of all the candidates.', 'most', 'more', 'much', 'very', 'So sánh nhất với "of all".'],
      ['The café offers a discount to customers who bring ____ own cups.', 'their', 'them', 'they', 'theirs', 'Tính từ sở hữu trước "own cups".'],
      ['The product is ____ available in three colors.', 'now', 'ago', 'then', 'before', '"is now available": hiện có.'],
      ['The road will be closed ____ further notice.', 'until', 'by', 'since', 'for', '"until further notice": cho đến khi có thông báo mới.'],
      ['____ the high cost, the company decided to buy the new equipment.', 'Despite', 'Although', 'Even', 'However', '"Despite + cụm danh từ".'],
      ['A detailed ____ of the event will be sent to all guests.', 'schedule', 'scheduled', 'scheduling', 'schedules', 'Sau "A detailed" cần danh từ số ít.'],
      ['The manager spoke ____ about the team\'s achievements.', 'proudly', 'proud', 'pride', 'prouder', 'Trạng từ bổ nghĩa cho "spoke".'],
      ['The company\'s profits ____ by eight percent last year.', 'grew', 'grow', 'have grown', 'growing', '"last year" → quá khứ đơn.'],
    ],
    p6: [
      {
        title: 'Notice: Water shut-off',
        text: 'ATTENTION RESIDENTS OF OAKWOOD APARTMENTS\n\nThe water supply to the building will be shut off on Wednesday, March 6, from 9:00 a.m. to 1:00 p.m. (1)____ plumbers can replace a damaged pipe in the basement.\n\nWe suggest that you fill some containers with water beforehand for drinking and cooking. (2)____.\n\nWhen the water comes back on, it may look cloudy for a few minutes. This is normal and is not (3)____.',
        qs: [
          ['(1) ____', 'so that', 'because of', 'in case', 'as if', '"so that + mệnh đề": để (mục đích).'],
          ['(2) ____', 'Please also avoid using washing machines during these hours.', 'The basement is used for storage.', 'Rent is due on the first of each month.', 'The plumbers were hired last year.', 'Tiếp tục lời khuyên trong thời gian cắt nước ("also").'],
          ['(3) ____', 'harmful', 'harm', 'harmfully', 'harming', 'Sau "is not" cần tính từ.'],
        ],
      },
      {
        title: 'Letter: Membership renewal',
        text: 'Dear Mr. Castillo,\n\nThank you for being a member of the City Science Museum for the past three years. Your membership will (1)____ on December 31.\n\nRenew by December 15 and you will receive two free tickets to our new planetarium show. Members also enjoy unlimited free admission, a 10 percent discount in the museum shop, and (2)____ to special evening events.\n\nRenewing is easy. (3)____ return the enclosed form or go to our website.',
        qs: [
          ['(1) ____', 'expire', 'expired', 'expiring', 'expiration', 'Sau "will" là động từ nguyên mẫu.'],
          ['(2) ____', 'invitations', 'invite', 'inviting', 'invited', 'Song song với các danh từ "admission", "discount".'],
          ['(3) ____', 'Simply', 'Simple', 'Simplify', 'Simplicity', 'Trạng từ bổ nghĩa cho động từ mệnh lệnh "return".'],
        ],
      },
    ],
    p7: [
      {
        title: 'Sign in a shop window',
        text: 'HELP WANTED – Bloom & Petal Florist\n\nPart-time sales assistant needed, 20 hours per week (Thursday to Sunday).\nNo experience necessary. We will train you.\nYou must be friendly, reliable, and able to lift boxes of up to 15 kilograms.\nA driver\'s license is required, as you will sometimes make deliveries.\n\nPlease bring your résumé to the shop and ask for Ms. Chow, the owner. No phone calls, please.',
        qs: [
          ['What kind of position is advertised?', 'A part-time job', 'A full-time job', 'A management job', 'A volunteer position', '"Part-time sales assistant".'],
          ['What is required of applicants?', "A driver's license", 'Sales experience', 'A degree', 'Their own vehicle', '"A driver\'s license is required".'],
          ['How should people apply?', 'By visiting the shop', 'By telephone', 'By email', 'By mail', 'Mang hồ sơ đến cửa hàng; không gọi điện.'],
        ],
      },
      {
        title: 'Email: Feedback on a proposal',
        text: 'To: Naomi Clarke\nFrom: Stefan Weber\nSubject: Your proposal\n\nNaomi,\n\nI have read your proposal for the customer loyalty app, and I think it is excellent. The section on costs is especially clear.\n\nI have two suggestions. First, add a timeline showing when each stage will be completed. Second, the board will want to know how many customers are likely to download the app, so please include an estimate based on last year\'s survey.\n\nCould you send me a revised version by Wednesday? I would like to present it to the board on Friday.\n\nStefan',
        qs: [
          ['What does Mr. Weber say about the proposal?', 'The cost section is clear.', 'It is too long.', 'The app is too expensive.', 'It was sent too late.', '"The section on costs is especially clear".'],
          ['What does Mr. Weber ask Ms. Clarke to add?', 'A timeline', 'A list of competitors', 'A new survey', 'Photographs', '"add a timeline showing when each stage will be completed".'],
          ['When will the proposal be shown to the board?', 'On Friday', 'On Wednesday', 'Next month', 'Today', '"present it to the board on Friday".'],
        ],
      },
      {
        title: 'Article: Local business award',
        text: 'Each year the Fairview Business Council honors a company that has made an important contribution to the community. — [1] — This year\'s award goes to Parker Plumbing, a family-owned firm founded in 1978.\n\nLast winter, when a storm damaged dozens of homes, Parker employees repaired broken pipes for elderly residents without charge. — [2] — The company also offers paid training to young people who want to enter the trade.\n\n"We just try to be good neighbors," said owner Dennis Parker. — [3] — The award will be presented at a ceremony at City Hall on May 12. — [4] —',
        qs: [
          ['Why did Parker Plumbing receive the award?', 'It helped the community.', 'It earned the highest profits.', 'It is the oldest company in town.', 'It built a new City Hall.', 'Giải thưởng dành cho công ty đóng góp cho cộng đồng.'],
          ['What does the company offer young people?', 'Paid training', 'Free plumbing', 'Scholarships to university', 'Summer camps', '"offers paid training to young people".'],
          ['In which position does this sentence best belong? "Many of them had been without water for days."', '[2]', '[1]', '[3]', '[4]', '"them" chỉ "elderly residents" ở câu ngay trước vị trí [2].'],
        ],
      },
    ],
  }),
];
