/** Bộ đề TOEIC Listening & Reading cố định – đề 13 và 14 (định dạng rút gọn, xem helpers.ts) */
import { ToeicTest, toeicTest } from './helpers';

export const TESTS: ToeicTest[] = [
  // =========================================================================== ĐỀ 13
  toeicTest(13, {
    p2: [
      ['Where are the safety manuals kept?', 'On the shelf behind the door.', 'Every six months.', 'They are very safe.', 'Where → vị trí.'],
      ['Who is presenting first this afternoon?', 'Mr. Banerjee from finance.', 'At two o\'clock.', 'A present for the manager.', 'Who → người.'],
      ['When will the new branch open?', 'Sometime in early spring.', 'On Pine Street.', 'Yes, it is open.', 'When → thời gian.'],
      ['How was the training seminar?', 'Very informative.', 'By train.', 'In the seminar room.', 'How was → đánh giá.'],
      ['Do you need help setting up the projector?', "No, thanks. I've got it.", 'The project is on schedule.', 'It was set up last year.', 'Lời đề nghị giúp → từ chối lịch sự.'],
      ['Which floor is the accounting department on?', 'The seventh.', 'It counts the money.', 'Near the airport.', 'Which floor → số tầng.'],
      ["Shouldn't we order more paper before it runs out?", "I already did this morning.", 'He ran outside.', 'Yes, it is made of paper.', 'Câu hỏi phủ định gợi ý → "đã làm rồi".'],
      ['I heard the Paris office is hiring.', 'Are you thinking of applying?', 'It is higher than ours.', 'I have never been to France.', 'Câu thông tin → hỏi lại.'],
    ],
    p3: [
      {
        title: 'A dry cleaning order',
        lines: [
          "W: Hi, I'd like to have this suit cleaned. Could it be ready by tomorrow?",
          'M: Our regular service takes three days, but we do have a one-day express service for an extra eight dollars.',
          "W: I'll take the express service, then. I need it for a job interview on Thursday morning.",
          'M: No problem. There is a small stain on the sleeve. I cannot promise that it will come out completely, but we will do our best.',
          'W: Thank you. What time can I pick it up?',
          'M: Any time after four tomorrow afternoon.',
        ],
        qs: [
          ['What does the woman want to have cleaned?', 'A suit', 'A dress', 'A coat', 'A carpet', '"have this suit cleaned".'],
          ['Why does the woman choose the express service?', 'She needs the item for an interview.', 'It is cheaper.', 'She is leaving on a trip.', 'The regular service is closed.', '"I need it for a job interview on Thursday morning".'],
          ['What does the man say about the stain?', 'It might not be removed completely.', 'It will cost extra to remove.', 'It has already disappeared.', 'It was caused by the shop.', '"I cannot promise that it will come out completely".'],
        ],
      },
      {
        title: 'Preparing for an inspection',
        lines: [
          'M: Julia, the health inspector is coming to the restaurant on Thursday morning.',
          'W: This Thursday? I thought the inspection was next month.',
          'M: They changed the date. We need to make sure the kitchen is spotless and that all the food in the refrigerators is labeled with dates.',
          "W: I'll ask the evening staff to do a deep clean on Wednesday night. And I'll check the labels myself.",
          "M: Thanks. I'll make sure all our certificates are displayed by the entrance.",
        ],
        qs: [
          ['What will happen on Thursday?', 'An inspection', 'A staff party', 'A delivery', 'A grand opening', '"the health inspector is coming".'],
          ['Why is the woman surprised?', 'She expected it to be next month.', 'She has never met the inspector.', 'The kitchen was just cleaned.', 'The restaurant is closed on Thursdays.', '"I thought the inspection was next month".'],
          ['What will the woman check personally?', 'The labels on food', 'The certificates', 'The entrance', 'The cleaning products', '"I\'ll check the labels myself".'],
        ],
      },
    ],
    p4: [
      {
        title: 'Pre-flight announcement',
        lines: [
          'W: Ladies and gentlemen, welcome aboard Pacific Air flight two oh six to Vancouver. Our flight time today will be approximately four hours and ten minutes.',
          'W: Please place your carry-on bags in the overhead compartments or under the seat in front of you, and switch your mobile phones to flight mode.',
          'W: Shortly after takeoff, we will begin our meal service. A choice of chicken or vegetable pasta is available today. Thank you for flying with Pacific Air.',
        ],
        qs: [
          ['Where is the flight going?', 'To Vancouver', 'To Tokyo', 'To Sydney', 'To Los Angeles', '"flight two oh six to Vancouver".'],
          ['What are passengers asked to do with their phones?', 'Switch them to flight mode', 'Put them in the overhead compartment', 'Give them to the crew', 'Use them only for music', '"switch your mobile phones to flight mode".'],
          ['What will happen shortly after takeoff?', 'A meal will be served.', 'A movie will begin.', 'The lights will be turned off.', 'Duty-free goods will be sold.', '"we will begin our meal service".'],
        ],
      },
      {
        title: 'Excerpt from a sales meeting',
        lines: [
          'M: Let\'s move on to this quarter\'s results. As you can see on the slide, sales of our kitchen products rose by twelve percent, mainly thanks to the new coffee machine.',
          'M: Unfortunately, sales of garden tools fell for the third quarter in a row. I believe our prices are too high compared with those of our competitors.',
          'M: So, starting next month, we will reduce garden tool prices by ten percent. I would like each of you to inform your retail customers of this change by the end of the week.',
        ],
        qs: [
          ['What contributed to the rise in kitchen product sales?', 'A new coffee machine', 'A television commercial', 'Lower prices', 'A new store', '"mainly thanks to the new coffee machine".'],
          ['According to the speaker, why are garden tools selling poorly?', 'They cost too much.', 'They are poor quality.', 'They are hard to find.', 'They are out of season.', '"our prices are too high compared with those of our competitors".'],
          ['What are the listeners asked to do?', 'Tell customers about a price change', 'Visit competitors\' stores', 'Design a new tool', 'Prepare a slide', '"inform your retail customers of this change".'],
        ],
      },
    ],
    p5: [
      ['The new accountant will report ____ to the finance director.', 'directly', 'direct', 'direction', 'directed', 'Trạng từ bổ nghĩa cho "report".'],
      ['The tickets are ____ for six months from the date of purchase.', 'valid', 'validly', 'validate', 'validity', 'Sau "are" cần tính từ.'],
      ['Mr. Castro has ____ experience in international trade.', 'extensive', 'extend', 'extensively', 'extension', 'Tính từ trước danh từ "experience".'],
      ['The workshop will take place ____ the third floor.', 'on', 'in', 'at', 'to', '"on the third floor".'],
      ['____ the merger is approved, the two firms will share one office.', 'Once', 'Even', 'Still', 'Rather', '"Once + mệnh đề": một khi.'],
      ['Customers who are not ____ satisfied may return the product.', 'completely', 'complete', 'completion', 'completed', 'Trạng từ bổ nghĩa cho tính từ "satisfied".'],
      ['The firm hired a consultant to ____ its production process.', 'improve', 'improvement', 'improved', 'improving', '"to + V nguyên mẫu" chỉ mục đích.'],
      ['The banquet hall can be ____ for private events.', 'reserved', 'reserving', 'reserve', 'reservation', 'Bị động với "can be".'],
      ['The seminar was attended by managers from ____ departments.', 'various', 'vary', 'variously', 'variety', 'Tính từ trước danh từ số nhiều.'],
      ['Ms. Hill gave ____ a copy of the agenda before the meeting.', 'us', 'we', 'our', 'ours', 'Tân ngữ gián tiếp sau "gave".'],
      ['The project was completed on time ____ several technical problems.', 'in spite of', 'although', 'even though', 'whereas', '"in spite of + cụm danh từ".'],
      ['The number of online orders ____ rising since January.', 'has been', 'have been', 'are', 'were', '"The number of..." số ít + "since" → has been.'],
    ],
    p6: [
      {
        title: 'Email: Team lunch',
        text: 'Hi everyone,\n\nTo celebrate the successful launch of the Ridgeway project, I would like to take the whole team out for lunch next Friday. I have (1)____ a table for twelve at La Piazza at 12:30.\n\n(2)____. If you have any food allergies, please let me know by Wednesday so that I can inform the restaurant.\n\nThank you all for your hard work over the past few months. This project would not have succeeded (3)____ your dedication.\n\nMartin',
        qs: [
          ['(1) ____', 'booked', 'book', 'booking', 'books', 'Hiện tại hoàn thành: have + V3.'],
          ['(2) ____', 'The restaurant offers both meat and vegetarian dishes.', 'The project started two years ago.', 'Friday is usually our busiest day.', 'La Piazza was sold last month.', 'Câu sau nói về dị ứng thực phẩm → câu trước nói về món ăn.'],
          ['(3) ____', 'without', 'unless', 'except', 'despite', '"would not have succeeded without": nếu không có.'],
        ],
      },
      {
        title: 'Advertisement: Language app',
        text: 'Learn a new language in just ten minutes a day with LingoPath! Our app uses short, game-like lessons to keep you (1)____.\n\nChoose from fourteen languages and study at your own pace. The app remembers the words you find difficult and reviews them (2)____ you have mastered them.\n\nDownload LingoPath free today. Upgrade to the premium version to remove advertisements and (3)____ lessons for offline use.',
        qs: [
          ['(1) ____', 'motivated', 'motivating', 'motivate', 'motivation', '"keep + O + V3/adj": giữ cho bạn có động lực.'],
          ['(2) ____', 'until', 'unless', 'while', 'since', '"until you have mastered them": cho đến khi thuộc.'],
          ['(3) ____', 'download', 'downloaded', 'downloading', 'downloads', 'Song song với "to remove".'],
        ],
      },
    ],
    p7: [
      {
        title: 'Notice: Fire drill',
        text: 'FIRE DRILL NOTICE\n\nA fire drill will be held in this building on Tuesday, April 9, at 10:30 a.m. When the alarm sounds, all employees must stop work immediately and leave by the nearest stairway. Do not use the elevators.\n\nPlease gather in the parking lot on the north side of the building, where floor managers will check names. You may return to your desks only after the all-clear signal is given.\n\nThe drill should take about fifteen minutes.',
        qs: [
          ['How should employees leave the building?', 'By the stairs', 'By the elevators', 'Through the main lobby only', 'Through the basement', '"leave by the nearest stairway. Do not use the elevators".'],
          ['Where will employees gather?', 'In the north parking lot', 'In the lobby', 'On the roof', 'Across the street', '"in the parking lot on the north side".'],
          ['Who will check names?', 'Floor managers', 'Firefighters', 'Security guards', 'The building owner', '"floor managers will check names".'],
        ],
      },
      {
        title: 'Email: Product inquiry',
        text: 'To: support@aerofit.com\nFrom: Derek Olsen\nSubject: Treadmill model T-300\n\nHello,\n\nI bought a T-300 treadmill from your online store two months ago. For the past week, the display screen has been going blank after about ten minutes of use, although the belt keeps running.\n\nI have tried unplugging the machine and restarting it, as the manual suggests, but the problem keeps coming back. The machine is still under warranty. Could you send a technician, or should I return it? My order number is AF-20915.\n\nRegards,\nDerek Olsen',
        qs: [
          ['What is wrong with the treadmill?', 'The screen stops working.', 'The belt does not move.', 'It makes a loud noise.', 'It will not turn on.', '"the display screen has been going blank".'],
          ['What has Mr. Olsen already tried?', 'Restarting the machine', 'Replacing the screen', 'Calling a technician', 'Returning the treadmill', '"unplugging the machine and restarting it".'],
          ['What is indicated about the treadmill?', 'It is covered by a warranty.', 'It was bought in a shop.', 'It is five years old.', 'It was a gift.', '"The machine is still under warranty".'],
        ],
      },
      {
        title: 'Advertisement and email',
        text: 'CITYVIEW CONFERENCE ROOMS – 90 Bank Street\nRoom A: seats 10 – $40/hour\nRoom B: seats 25 – $70/hour\nRoom C: seats 60 – $120/hour\nAll rooms include Wi-Fi and a projector. Catering can be ordered with 48 hours\' notice. Bookings of four hours or more receive a 10% discount.\n\n--------------------\nTo: bookings@cityviewrooms.com\nFrom: Irene Novak\n\nI would like to book a room for a staff training session on March 3 from 9:00 a.m. to 1:00 p.m. There will be 22 participants. We would also like coffee and sandwiches at 11:00. Please confirm the total cost.',
        qs: [
          ['What is included with every room?', 'A projector', 'Catering', 'Parking', 'A microphone', '"All rooms include Wi-Fi and a projector".'],
          ['Which room will Ms. Novak most likely book?', 'Room B', 'Room A', 'Room C', 'Two rooms', '22 người → cần phòng 25 chỗ (Room B).'],
          ['Why will Ms. Novak receive a discount?', 'Her booking lasts four hours.', 'She ordered catering.', 'She is a regular customer.', 'She booked in March.', '9:00–13:00 = 4 giờ → giảm 10%.'],
        ],
      },
    ],
  }),

  // =========================================================================== ĐỀ 14
  toeicTest(14, {
    p2: [
      ['When is the rent due?', 'On the first of every month.', 'Twelve hundred dollars.', 'To the landlord.', 'When → thời hạn.'],
      ['Who repaired the air conditioner?', 'A technician from the service company.', 'It is working well now.', 'In the conference room.', 'Who → người sửa.'],
      ['How many branches does the bank have?', 'More than forty nationwide.', 'On Main Street.', 'Since 1990.', 'How many → số lượng.'],
      ['Could you give me a ride to the station?', "Sure, I'm leaving in ten minutes.", 'The ride was bumpy.', 'It is a new station.', 'Lời nhờ → đồng ý.'],
      ['Where can I get a visitor\'s pass?', 'From the guard at the entrance.', 'It is valid for one day.', 'She passed by earlier.', 'Where → nơi nhận.'],
      ['Is this seat taken?', "No, go ahead.", 'I took it yesterday.', 'It is a comfortable seat.', 'Hỏi ghế có người chưa → "No, go ahead" = mời ngồi.'],
      ['Why is the parking lot so empty today?', "It's a public holiday.", 'Next to the entrance.', 'I parked over there.', 'Why → lý do.'],
      ['We should update the price list.', "I'll take care of it this afternoon.", 'It is on the list.', 'The prices were high.', 'Đề nghị → nhận làm.'],
    ],
    p3: [
      {
        title: 'Buying a laptop',
        lines: [
          "M: Excuse me, I'm looking for a laptop for work. I travel a lot, so it needs to be light.",
          'W: Then I would recommend this model. It weighs just over one kilogram, and the battery lasts up to fourteen hours.',
          'M: That sounds ideal. Is it on sale?',
          "W: Not this week, but if you buy it today, I can include a carrying case for free.",
          "M: All right, I'll take it. Do you offer an extended warranty?",
          'W: Yes, three years for ninety dollars. Let me show you the details.',
        ],
        qs: [
          ['What is most important to the man?', 'The weight of the laptop', 'The color', 'The screen size', 'The brand', '"it needs to be light".'],
          ['What does the woman offer for free?', 'A carrying case', 'A mouse', 'A warranty', 'A software package', '"I can include a carrying case for free".'],
          ['What does the man ask about?', 'An extended warranty', 'Home delivery', 'A student discount', 'A repair service', '"Do you offer an extended warranty?"'],
        ],
      },
      {
        title: 'A change to a work schedule',
        lines: [
          "W: Michael, would you be able to work this Saturday? Two people have called in sick, and we have a big delivery arriving.",
          "M: Saturday morning is fine, but I have to leave by one. I'm taking my son to a football match.",
          'W: That would be a huge help. The truck should arrive at eight, so we should be finished by noon.',
          'M: OK. Will I be paid overtime?',
          'W: Of course. And you can take next Friday off if you would like.',
        ],
        qs: [
          ['Why does the woman need help on Saturday?', 'Some staff members are ill.', 'A new store is opening.', 'The manager is on vacation.', 'A machine has broken down.', '"Two people have called in sick".'],
          ['Why must the man leave by one o\'clock?', 'He is going to a sports event.', 'He has a doctor\'s appointment.', 'He has another job.', 'He is catching a flight.', '"I\'m taking my son to a football match".'],
          ['What does the woman offer the man?', 'A day off', 'A promotion', 'A free lunch', 'A ride home', '"you can take next Friday off".'],
        ],
      },
    ],
    p4: [
      {
        title: 'Recorded information from a museum',
        lines: [
          'W: Thank you for calling the National Railway Museum. We are open from ten a.m. to six p.m., Tuesday through Sunday. The museum is closed on Mondays.',
          'W: Admission is twelve dollars for adults and six dollars for children. Children under five enter free.',
          'W: This month, do not miss our special exhibition on steam trains of the eighteen hundreds. Guided tours of the exhibition begin every hour at the main entrance. To book a group visit, please press two.',
        ],
        qs: [
          ['When is the museum closed?', 'On Mondays', 'On Sundays', 'On Tuesdays', 'On public holidays', '"The museum is closed on Mondays".'],
          ['How much is admission for an adult?', 'Twelve dollars', 'Six dollars', 'Five dollars', 'Ten dollars', '"twelve dollars for adults".'],
          ['Why would a caller press two?', 'To arrange a group visit', 'To hear the opening hours', 'To buy a train ticket', 'To speak to a guide', '"To book a group visit, please press two".'],
        ],
      },
      {
        title: 'Speech at a retirement party',
        lines: [
          'M: Good evening, everyone. We are here tonight to honor Gloria Mendez, who is retiring after thirty-two years with Weston Insurance.',
          'M: Gloria started as a receptionist and worked her way up to become head of our claims department. Many of us in this room were trained by her.',
          'M: Gloria tells me that she plans to spend her retirement traveling and learning to paint. On behalf of everyone, I would like to present her with this gift: two tickets for a cruise around the Mediterranean.',
        ],
        qs: [
          ['What is the purpose of the speech?', 'To honor a retiring employee', 'To welcome a new manager', 'To announce a merger', 'To sell insurance', '"who is retiring after thirty-two years".'],
          ['What was Ms. Mendez\'s first job at the company?', 'Receptionist', 'Claims manager', 'Trainer', 'Accountant', '"Gloria started as a receptionist".'],
          ['What gift is Ms. Mendez given?', 'Tickets for a cruise', 'A painting', 'A gold watch', 'A set of luggage', '"two tickets for a cruise around the Mediterranean".'],
        ],
      },
    ],
    p5: [
      ['The updated price list is ____ to all sales representatives.', 'available', 'availability', 'availably', 'avail', 'Sau "is" cần tính từ.'],
      ['Mr. Fischer ____ the conference in Berlin last week.', 'attended', 'attends', 'has attended', 'will attend', '"last week" → quá khứ đơn.'],
      ['The new shopping mall is expected to create ____ 800 jobs.', 'about', 'along', 'apart', 'across', '"about + số": khoảng.'],
      ['Employees should report any accidents to ____ supervisors.', 'their', 'them', 'they', 'themselves', 'Tính từ sở hữu trước danh từ.'],
      ['The hotel staff were ____ helpful during our stay.', 'extremely', 'extreme', 'extremity', 'extremes', 'Trạng từ bổ nghĩa cho tính từ "helpful".'],
      ['The contract will be renewed ____ both parties agree.', 'provided that', 'in order that', 'so as', 'as though', '"provided that": với điều kiện là.'],
      ['Ms. Lee is one of the most ____ members of the team.', 'dependable', 'depend', 'dependably', 'dependence', 'Tính từ sau "the most".'],
      ['The package was too heavy for him to lift by ____.', 'himself', 'him', 'his', 'he', '"by himself": một mình.'],
      ['The airline ____ passengers for the delay with meal vouchers.', 'compensated', 'compensation', 'compensating', 'compensatory', 'Cần động từ chia thì quá khứ.'],
      ['Applications received ____ the deadline will not be considered.', 'after', 'since', 'behind', 'later', '"after the deadline": sau hạn.'],
      ['The firm\'s success is largely ____ to its skilled workforce.', 'due', 'because', 'thanks', 'owe', '"be due to": là nhờ/do.'],
      ['The auditors examined the accounts ____.', 'thoroughly', 'thorough', 'thoroughness', 'more thorough', 'Trạng từ bổ nghĩa cho "examined".'],
    ],
    p6: [
      {
        title: 'Notice: Road closure',
        text: 'NOTICE TO BUSINESSES ON MARKET STREET\n\nMarket Street will be closed to vehicles between Second and Fifth Avenues from July 8 to July 19 while the city replaces underground gas pipes. Sidewalks will remain open, (1)____ customers will still be able to reach your stores on foot.\n\n(2)____. Trucks may enter between 6:00 and 8:00 a.m. only, using the Second Avenue entrance.\n\nWe apologize for the disruption and will do our best to complete the work as (3)____ as possible.',
        qs: [
          ['(1) ____', 'so', 'but', 'or', 'nor', '"so": vì vậy (kết quả).'],
          ['(2) ____', 'Special arrangements have been made for deliveries.', 'Gas prices are expected to rise.', 'Market Street has many restaurants.', 'The city was founded in 1850.', 'Câu sau nói xe tải được vào khung giờ nào → câu trước nói về giao hàng.'],
          ['(3) ____', 'quickly', 'quick', 'quicker', 'quickest', '"as + adv + as possible".'],
        ],
      },
      {
        title: 'Email: Reference request',
        text: 'Dear Professor Lambert,\n\nI hope you are well. I am writing to ask (1)____ you would be willing to write a letter of recommendation for me. I am applying for a position as a research assistant at Brighton Laboratories.\n\nI took two of your chemistry courses and received excellent grades in (2)____. I believe you know my work better than any other teacher.\n\nThe application deadline is May 30. I have attached my résumé and the job description for your (3)____.\n\nThank you very much for your time.\n\nSincerely,\nAisha Khan',
        qs: [
          ['(1) ____', 'whether', 'that', 'what', 'unless', '"ask whether": hỏi liệu.'],
          ['(2) ____', 'both', 'each of', 'either', 'every', '"in both": cả hai (khóa học).'],
          ['(3) ____', 'reference', 'refer', 'referred', 'referring', '"for your reference": để thầy/cô tham khảo.'],
        ],
      },
    ],
    p7: [
      {
        title: 'Announcement: Company picnic',
        text: 'ANNUAL COMPANY PICNIC\nSaturday, June 15 – Lakeside Park, Picnic Area 3\n11:00 a.m. – 4:00 p.m.\n\nAll employees and their families are invited. The company will provide grilled food, salads, and soft drinks. Please bring a dessert to share!\n\nActivities include volleyball, a treasure hunt for children, and boat rides on the lake ($3 per person).\n\nIf it rains, the picnic will be moved to the following Saturday. Please tell Maya in Human Resources by June 7 how many people will come with you.',
        qs: [
          ['What are employees asked to bring?', 'A dessert', 'Drinks', 'Grilled food', 'Sports equipment', '"Please bring a dessert to share".'],
          ['Which activity has a fee?', 'Boat rides', 'Volleyball', 'The treasure hunt', 'Swimming', '"boat rides on the lake ($3 per person)".'],
          ['What will happen if the weather is bad?', 'The picnic will be held a week later.', 'The picnic will be canceled.', 'The picnic will move indoors.', 'Employees will get a refund.', '"moved to the following Saturday".'],
        ],
      },
      {
        title: 'Letter: Credit card offer',
        text: 'Dear Ms. Bianchi,\n\nAs a valued customer of Unity Bank, you have been selected to receive our Gold Rewards credit card.\n\nWith this card, you earn two points for every dollar you spend on travel and dining, and one point on everything else. Points can be exchanged for airline tickets, hotel stays, or shopping vouchers. There is no annual fee for the first year; after that, the fee is $60.\n\nTo apply, complete the enclosed form and return it by September 30. If you apply before August 31, you will receive 5,000 bonus points.\n\nSincerely,\nUnity Bank Card Services',
        qs: [
          ['How many points are earned per dollar spent at restaurants?', 'Two', 'One', 'Five', 'Sixty', 'Hai điểm cho mỗi đô-la chi cho du lịch và ăn uống.'],
          ['What is true about the annual fee?', 'It is not charged in the first year.', 'It is $60 from the start.', 'There is never a fee.', 'It can be paid with points.', '"no annual fee for the first year; after that, the fee is $60".'],
          ['How can Ms. Bianchi receive bonus points?', 'By applying before August 31', 'By spending $5,000', 'By opening a savings account', 'By returning the form in October', '"If you apply before August 31, you will receive 5,000 bonus points".'],
        ],
      },
      {
        title: 'Article: Factory goes solar',
        text: 'Brennan Textiles has completed the installation of 3,000 solar panels on the roof of its factory in Ashford. — [1] — The system, which cost $2.1 million, will supply about 40 percent of the electricity the factory uses.\n\nCompany president Laura Brennan said the investment should pay for itself within eight years. — [2] — "Energy is one of our largest expenses," she explained.\n\nThe project was partly funded by a state grant for clean energy. — [3] — Brennan Textiles, which employs 450 people, also plans to replace its delivery vans with electric vehicles next year. — [4] —',
        qs: [
          ['How much of the factory\'s electricity will the panels provide?', 'About 40 percent', 'All of it', 'About 8 percent', 'About half', '"about 40 percent of the electricity".'],
          ['What helped pay for the project?', 'A state grant', 'A bank loan', 'Customer donations', 'The sale of delivery vans', '"partly funded by a state grant".'],
          ['In which position does this sentence best belong? "After that, the savings will go directly toward new equipment."', '[2]', '[1]', '[3]', '[4]', '"After that" nối với "within eight years".'],
        ],
      },
    ],
  }),
];
