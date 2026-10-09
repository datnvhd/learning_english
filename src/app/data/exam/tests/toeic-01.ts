/** Bộ đề TOEIC Listening & Reading cố định – đề 1 và 2 (định dạng rút gọn, xem helpers.ts) */
import { ToeicTest, toeicTest } from './helpers';

export const TESTS: ToeicTest[] = [
  // =========================================================================== ĐỀ 1
  toeicTest(1, {
    p2: [
      ['When does the staff meeting start?', 'At nine thirty.', 'In the conference room.', 'Yes, I met him.', 'Câu hỏi When → trả lời bằng thời gian.'],
      ['Who is in charge of the new project?', 'Ms. Alvarez from marketing.', 'It was charged to my card.', 'Next to the projector.', 'Câu hỏi Who → tên người/chức vụ. "charged", "projector" là bẫy âm gần giống.'],
      ['Where can I find the printer paper?', 'In the supply cabinet.', 'About fifty pages.', 'He printed it yesterday.', 'Câu hỏi Where → nơi chốn.'],
      ['Would you like me to book the flight for you?', "That would be great, thanks.", 'The book is on my desk.', 'It was a long flight.', 'Lời đề nghị giúp đỡ → chấp nhận lịch sự.'],
      ["Why hasn't the shipment arrived yet?", 'The truck was delayed by snow.', 'By ship, I think.', 'Yes, it arrived early.', 'Câu hỏi Why → nêu lý do. Câu hỏi Wh- không trả lời Yes/No.'],
      ['Do you want to meet today or tomorrow?', 'Tomorrow works better for me.', 'Yes, I do.', 'It was a short meeting.', 'Câu hỏi lựa chọn (A or B) → chọn một, không trả lời Yes/No.'],
      ['The copy machine is out of order again.', "I'll call the technician.", 'Twenty copies, please.', 'In alphabetical order.', 'Câu thông báo sự cố → đề xuất giải pháp.'],
      ['How long have you worked in this department?', 'Almost four years.', 'It is on the third floor.', 'About two kilometers.', 'How long → khoảng thời gian.'],
    ],
    p3: [
      {
        title: 'Rescheduling a client visit',
        lines: [
          "W: Hi, Kevin. I'm afraid the clients from Osaka have changed their travel plans. They'll arrive on Wednesday instead of Tuesday.",
          "M: Oh, that's a problem. I reserved the large conference room for Tuesday morning.",
          'W: Could you check whether it is free on Wednesday? We also need to move the factory tour.',
          "M: Sure. I'll call the facilities office right now, and then I'll email the plant manager about the tour.",
          'W: Thanks. I will let the catering company know about the new date.',
        ],
        qs: [
          ['What problem does the woman mention?', "The clients' arrival date has changed.", 'A conference room is too small.', 'A flight has been canceled.', 'A tour guide is unavailable.', 'Khách đến thứ Tư thay vì thứ Ba.'],
          ['What will the man do first?', 'Call the facilities office', 'Email the clients', 'Visit the factory', 'Order some food', '"I\'ll call the facilities office right now".'],
          ['Who will the woman contact?', 'A catering company', 'A travel agency', 'The plant manager', 'A hotel', '"I will let the catering company know".'],
        ],
      },
      {
        title: 'Ordering office chairs',
        lines: [
          "M: Good morning. I'd like to order twelve office chairs, the model shown on page eight of your catalog.",
          'W: Certainly. That model comes in black or gray. Which would you prefer?',
          'M: Gray, please. How soon can you deliver them?',
          'W: Black chairs are in stock, but gray ones take two weeks. Would black be acceptable?',
          "M: In that case, I'll take black. We need them before our new employees start on Monday.",
          "W: No problem. They'll be delivered by Friday.",
        ],
        qs: [
          ['What is the man ordering?', 'Office chairs', 'Catalogs', 'Desks', 'Computers', '"order twelve office chairs".'],
          ['Why does the man change his order?', 'The gray chairs would take too long.', 'The black chairs are cheaper.', 'The catalog was out of date.', 'His manager prefers black.', 'Ghế xám mất hai tuần, anh cần trước thứ Hai.'],
          ['When will the order be delivered?', 'By Friday', 'On Monday', 'In two weeks', 'Tomorrow', '"They\'ll be delivered by Friday".'],
        ],
      },
    ],
    p4: [
      {
        title: 'Airport announcement',
        lines: [
          'W: Attention passengers on Skyways flight four seventeen to Denver. Due to a mechanical inspection, the departure has been moved from gate twelve to gate thirty.',
          'W: The new departure time is three fifteen p.m. We apologize for the inconvenience.',
          'W: Passengers may collect a free meal voucher at the customer service desk beside gate thirty. Please have your boarding pass ready.',
        ],
        qs: [
          ['What has changed about the flight?', 'The departure gate and time', 'The destination', 'The airline', 'The seat assignments', 'Đổi cổng (12 → 30) và giờ khởi hành.'],
          ['What is the cause of the delay?', 'A mechanical inspection', 'Bad weather', 'A late crew', 'Heavy air traffic', '"Due to a mechanical inspection".'],
          ['What can passengers receive at the service desk?', 'A meal voucher', 'A new ticket', 'A hotel room', 'A refund', '"collect a free meal voucher".'],
        ],
      },
      {
        title: 'Voicemail from a dental office',
        lines: [
          "M: Hello, this message is for Ms. Rivera. This is Paul from Dr. Chen's dental office.",
          'M: Unfortunately, Dr. Chen will be at a conference on Thursday, so we need to reschedule your two o\'clock appointment.',
          'M: We have openings on Friday at ten a.m. or Monday at four p.m. Please call us back at five five five, zero one four two to confirm which time suits you. Our office closes at six today.',
        ],
        qs: [
          ['Why is the speaker calling?', 'To reschedule an appointment', 'To confirm a payment', 'To offer a job', 'To advertise a service', '"we need to reschedule your two o\'clock appointment".'],
          ['Why is Dr. Chen unavailable on Thursday?', 'He will attend a conference.', 'He is on vacation.', 'He is ill.', 'The office is being painted.', '"Dr. Chen will be at a conference on Thursday".'],
          ['What is the listener asked to do?', 'Return the call', 'Visit the office today', 'Send an email', 'Fill out a form', '"Please call us back".'],
        ],
      },
    ],
    p5: [
      ['Ms. Ito asked the interns to submit ____ weekly reports every Friday.', 'their', 'they', 'them', 'theirs', 'Tính từ sở hữu đứng trước danh từ "weekly reports".'],
      ['The new software will make the billing process more ____.', 'efficient', 'efficiently', 'efficiency', 'efficiencies', '"make + O + adj": cần tính từ sau "more".'],
      ['Orders placed before noon are ____ shipped the same day.', 'usually', 'usual', 'use', 'usage', 'Trạng từ đứng giữa "are" và phân từ "shipped".'],
      ['The seminar was postponed ____ the speaker missed her connecting flight.', 'because', 'due to', 'despite', 'therefore', 'Sau chỗ trống là mệnh đề (S + V) → dùng liên từ "because".'],
      ['Employees must wear identification badges ____ all times.', 'at', 'in', 'on', 'for', 'Cụm cố định "at all times": mọi lúc.'],
      ['Mr. Grant ____ the sales team since last March.', 'has managed', 'manages', 'is managing', 'will manage', '"since last March" → hiện tại hoàn thành.'],
      ['The hotel offers a ____ shuttle service to the airport.', 'complimentary', 'compliment', 'complimenting', 'compliments', 'Cần tính từ: "complimentary" = miễn phí.'],
      ['Please read the instructions ____ before assembling the shelf.', 'carefully', 'careful', 'care', 'caring', 'Trạng từ bổ nghĩa cho động từ "read".'],
      ['Neither the manager ____ her assistant was available this morning.', 'nor', 'or', 'and', 'but', 'Cặp liên từ "neither ... nor".'],
      ['The ____ of the new branch will take place on May 3.', 'opening', 'open', 'opened', 'openly', 'Sau mạo từ "The" và trước "of" cần danh từ.'],
      ['Customers ____ purchase two items will receive a third one free.', 'who', 'whose', 'which', 'whom', 'Đại từ quan hệ chỉ người làm chủ ngữ.'],
      ['The budget proposal must be approved ____ the finance director.', 'by', 'with', 'from', 'to', 'Câu bị động: "approved by + người thực hiện".'],
    ],
    p6: [
      {
        title: 'Notice: Parking lot maintenance',
        text: 'To all employees:\n\nPlease be advised that the north parking lot will be closed for repaving from Monday, June 3, (1)____ Wednesday, June 5. During this period, staff should park in the south lot or in the public garage on Elm Street. (2)____. To get one, simply show your employee badge to the garage attendant.\n\nWe apologize for any inconvenience and thank you for your (3)____.\n\nFacilities Management',
        qs: [
          ['(1) ____', 'through', 'among', 'beside', 'onto', '"from Monday through Wednesday": từ thứ Hai đến hết thứ Tư.'],
          ['(2) ____', 'Free parking passes for the garage are available.', 'The north lot was built ten years ago.', 'Employees are reminded to lock their offices.', 'The cafeteria will be closed on Monday.', 'Câu sau nói "To get one..." → "one" chỉ "parking pass" ở câu cần điền.'],
          ['(3) ____', 'cooperation', 'cooperate', 'cooperative', 'cooperatively', 'Sau tính từ sở hữu "your" cần danh từ.'],
        ],
      },
      {
        title: 'Email: Order confirmation',
        text: 'Dear Mr. Novak,\n\nThank you for your recent order from Brightline Office Supplies. Your items (1)____ from our warehouse this morning and should reach you within three business days. A tracking number is included below.\n\nIf any item arrives damaged, please contact us (2)____ seven days of delivery, and we will send a replacement at no charge. We value your business and hope to (3)____ you again soon.\n\nSincerely,\nBrightline Customer Care',
        qs: [
          ['(1) ____', 'were shipped', 'ship', 'are shipping', 'will ship', '"this morning" (đã xảy ra) + hàng được gửi → bị động quá khứ.'],
          ['(2) ____', 'within', 'between', 'during', 'since', '"within seven days": trong vòng bảy ngày.'],
          ['(3) ____', 'serve', 'serving', 'served', 'service', '"hope to + V nguyên mẫu".'],
        ],
      },
    ],
    p7: [
      {
        title: 'Advertisement: Lakeview Business Center',
        text: 'LAKEVIEW BUSINESS CENTER\nOffice space available from August 1\n\n• Private offices for 2–10 people, fully furnished\n• High-speed Internet and cleaning service included in the rent\n• Three meeting rooms that tenants may reserve online at no extra cost\n• Underground parking: $60 per month per vehicle\n\nSign a 12-month lease before July 15 and receive your first month free. To arrange a tour, call Dana Whitfield at 555-0188.',
        qs: [
          ['What is included in the rent?', 'Internet access', 'Parking', 'Telephone calls', 'Catering', 'Internet tốc độ cao và dọn dẹp đã gồm trong tiền thuê; đỗ xe tính riêng.'],
          ['How can tenants reserve a meeting room?', 'Online', 'By calling Ms. Whitfield', 'At the front desk', 'By email', '"tenants may reserve online".'],
          ['What is offered to people who sign a lease before July 15?', 'One month of free rent', 'Free parking for a year', 'A larger office', 'New furniture', '"receive your first month free".'],
        ],
      },
      {
        title: 'Email: Training workshop',
        text: 'To: All Sales Staff\nFrom: Helen Brandt, Human Resources\nSubject: Customer service workshop\n\nA workshop on handling customer complaints will be held on Thursday, March 14, from 1:00 to 4:00 p.m. in Training Room B. Attendance is required for everyone who joined the company in the past twelve months; other employees are welcome if space allows.\n\nThe session will be led by Marcus Lee, author of "Service First." Please register through the staff portal by March 8, as only 25 seats are available. Participants should bring a laptop.',
        qs: [
          ['Who must attend the workshop?', 'Employees hired within the last year', 'All managers', 'Customers who complained', 'Human Resources staff only', '"required for everyone who joined the company in the past twelve months".'],
          ['Who is Marcus Lee?', 'A writer', 'A sales manager', 'A new employee', 'A customer', '"author of Service First".'],
          ['What are participants asked to bring?', 'A laptop', 'A copy of a book', 'A registration form', 'Their lunch', '"Participants should bring a laptop".'],
        ],
      },
      {
        title: 'Text-message chain',
        text: 'Priya Shah (10:02 a.m.): Tom, are you at the office? The projector in Room 4 won\'t turn on, and my presentation to the Henley Group starts at 10:30.\n\nTom Becker (10:04 a.m.): I\'m at the dentist until 11. Ask Carla in IT. Her extension is 214.\n\nPriya Shah (10:09 a.m.): She says it needs a new lamp, which will take an hour.\n\nTom Becker (10:10 a.m.): Then use Room 6. It\'s free all morning, and the screen there works fine.\n\nPriya Shah (10:11 a.m.): Good idea. I\'ll put a sign on the door of Room 4.',
        qs: [
          ['What problem does Ms. Shah have?', 'Some equipment is not working.', 'A client has canceled.', 'She is late for work.', 'A room is locked.', 'Máy chiếu ở phòng 4 không bật được.'],
          ['Why is Mr. Becker unable to help in person?', 'He is at a dental appointment.', 'He is in a meeting.', 'He is on vacation.', 'He works in another city.', '"I\'m at the dentist until 11".'],
          ['At 10:11 a.m., what does Ms. Shah mean when she writes, "Good idea"?', 'She will hold her presentation in Room 6.', 'She will wait for the lamp to be replaced.', 'She will call the Henley Group.', 'She will postpone the presentation.', 'Cô đồng ý với đề xuất dùng phòng 6.'],
        ],
      },
    ],
  }),

  // =========================================================================== ĐỀ 2
  toeicTest(2, {
    p2: [
      ['Where is the nearest post office?', 'Just across the street.', 'It closes at five.', 'Yes, I posted it.', 'Where → vị trí.'],
      ['When will the renovations be finished?', 'By the end of next month.', 'On the second floor.', 'A new carpet.', 'When → mốc thời gian.'],
      ['How much does the monthly subscription cost?', 'Fifteen dollars.', 'Every month.', 'By credit card.', 'How much → giá tiền.'],
      ['Could you send me the sales figures?', "Sure, I'll email them now.", 'They went on sale.', 'No, I figured it out.', 'Lời nhờ vả → đồng ý và nêu hành động.'],
      ["Isn't Mr. Dawson coming to the lunch?", "No, he has another appointment.", 'Lunch was delicious.', 'At the corner table.', 'Câu hỏi phủ định → trả lời Yes/No kèm lý do.'],
      ['Who should I talk to about my paycheck?', 'Someone in the payroll department.', 'Twice a month.', 'I checked it already.', 'Who → người/bộ phận.'],
      ['Should we take a taxi or the subway?', 'The subway is faster at this hour.', 'Yes, we should.', 'It was very crowded.', 'Câu hỏi lựa chọn → chọn một phương án.'],
      ["I can't find the client's file anywhere.", 'Have you looked in the top drawer?', "Yes, it's a large file.", 'He is a new client.', 'Câu nêu vấn đề → gợi ý chỗ tìm.'],
    ],
    p3: [
      {
        title: 'A problem with a hotel room',
        lines: [
          "M: Hello, this is Mr. Fraser in room five eighteen. The air conditioner in my room isn't working.",
          "W: I'm very sorry, sir. I can send a technician, but it may take about an hour.",
          'M: I have an online meeting in twenty minutes, and the room is really warm.',
          "W: In that case, I can move you to room six oh two right away. It's the same type of room, and it has a view of the park.",
          'M: That would be perfect.',
          "W: I'll send someone up to help with your luggage.",
        ],
        qs: [
          ['Why is the man calling?', 'To report a problem in his room', 'To book a meeting room', 'To order a meal', 'To check out early', 'Máy lạnh trong phòng không hoạt động.'],
          ['Why can the man not wait for the technician?', 'He has a meeting soon.', 'He is leaving the hotel.', 'He feels ill.', 'He is expecting a guest.', '"I have an online meeting in twenty minutes".'],
          ['What does the woman offer to do?', 'Give him a different room', 'Refund his payment', 'Bring him a fan', 'Cancel his meeting', '"I can move you to room six oh two right away".'],
        ],
      },
      {
        title: 'Preparing a trade show booth',
        lines: [
          'W: Daniel, have the brochures for the trade show arrived from the printer?',
          'M: Not yet. They said the boxes would be here by three this afternoon.',
          "W: Good. We're leaving for the convention center at seven tomorrow morning, so we need to load the van tonight.",
          'M: I can stay late and do that. Do you want me to pack the product samples as well?',
          "W: Yes, please. And don't forget the banner. Last year we left it behind.",
        ],
        qs: [
          ['What are the speakers preparing for?', 'A trade show', 'A staff party', 'A job fair', 'A store opening', '"the brochures for the trade show".'],
          ['When are the brochures expected to arrive?', 'This afternoon', 'Tomorrow morning', 'Tonight', 'Next week', '"by three this afternoon".'],
          ['What does the woman remind the man to bring?', 'A banner', 'A van key', 'Business cards', 'A camera', '"don\'t forget the banner".'],
        ],
      },
    ],
    p4: [
      {
        title: 'Store announcement',
        lines: [
          'M: Good afternoon, shoppers, and welcome to Hartman\'s Department Store.',
          'M: For the next hour only, all winter coats and boots on the second floor are forty percent off.',
          'M: Members of our rewards program will receive an additional five percent discount at the register. If you are not a member yet, you can sign up at the customer service counter near the main entrance. It takes only two minutes.',
        ],
        qs: [
          ['What is being announced?', 'A limited-time sale', 'A store closing', 'A new department', 'A lost item', 'Giảm giá chỉ trong một giờ tới.'],
          ['Where are the discounted items?', 'On the second floor', 'Near the main entrance', 'In the basement', 'At the register', '"on the second floor".'],
          ['How can shoppers get an extra discount?', 'By joining the rewards program', 'By paying in cash', 'By buying two coats', 'By shopping online', 'Thành viên chương trình tích điểm được giảm thêm 5%.'],
        ],
      },
      {
        title: 'Talk to new warehouse staff',
        lines: [
          'W: Welcome to your first day at Coastal Distribution. Before we tour the warehouse, I need to go over a few safety rules.',
          'W: First, safety vests and hard hats must be worn at all times in the loading area. You will find them in the lockers behind me.',
          'W: Second, only employees who have completed the training course may operate the forklifts. That course is offered every Tuesday.',
          'W: Now, please look at the schedule I am handing out. It shows which supervisor you will work with this week.',
        ],
        graphic: ['Week 1 schedule', 'Team | Supervisor | Area\nTeam A | Mr. Ortiz | Receiving\nTeam B | Ms. Klein | Packing\nTeam C | Mr. Shaw | Loading'],
        qs: [
          ['Who are the listeners?', 'New employees', 'Truck drivers', 'Safety inspectors', 'Customers', '"Welcome to your first day".'],
          ['What is required before operating a forklift?', 'Completing a training course', 'Wearing gloves', 'Getting a manager\'s signature', 'Working for one year', '"only employees who have completed the training course".'],
          ['Look at the graphic. Who supervises the area where vests and hard hats are required?', 'Mr. Shaw', 'Mr. Ortiz', 'Ms. Klein', 'The speaker', 'Áo và mũ bảo hộ bắt buộc ở khu Loading → bảng: Mr. Shaw.'],
        ],
      },
    ],
    p5: [
      ['The marketing team is looking for ____ ways to attract younger customers.', 'creative', 'creatively', 'create', 'creation', 'Tính từ bổ nghĩa cho danh từ "ways".'],
      ['Mr. Hall will be out of the office ____ Friday.', 'until', 'by', 'at', 'since', '"until Friday": vắng mặt cho đến thứ Sáu.'],
      ['All visitors are required to ____ at the reception desk.', 'sign in', 'signing in', 'signed in', 'signs in', '"be required to + V nguyên mẫu".'],
      ['The quarterly report shows a ____ increase in online sales.', 'significant', 'significantly', 'signify', 'significance', 'Tính từ đứng trước danh từ "increase".'],
      ['____ the restaurant is small, it serves over 300 customers a day.', 'Although', 'Despite', 'However', 'Because of', 'Nối hai mệnh đề tương phản → "Although".'],
      ['Ms. Chen is the candidate ____ qualifications best match the position.', 'whose', 'who', 'which', 'whom', '"whose + danh từ": chỉ sở hữu.'],
      ['The technician promised to fix the server as ____ as possible.', 'quickly', 'quick', 'quicker', 'quickest', '"as + adv + as possible", bổ nghĩa cho động từ "fix".'],
      ['Please ____ the attached document and return it by Monday.', 'review', 'reviewing', 'reviewed', 'reviews', 'Câu mệnh lệnh: Please + V nguyên mẫu.'],
      ['The company plans to ____ its product line next year.', 'expand', 'expansion', 'expansive', 'expansively', '"plan to + V nguyên mẫu".'],
      ['Tickets can be purchased online ____ at the box office.', 'or', 'nor', 'so', 'but', 'Hai lựa chọn tương đương → "or".'],
      ['The conference room is ____ occupied on Monday mornings.', 'always', 'ever', 'yet', 'far', 'Trạng từ tần suất "always" hợp nghĩa nhất.'],
      ['Sales representatives receive a bonus ____ they exceed their targets.', 'whenever', 'whatever', 'whichever', 'whoever', '"whenever + mệnh đề": bất cứ khi nào.'],
    ],
    p6: [
      {
        title: 'Memo: New expense system',
        text: 'To: All staff\nFrom: Accounting Department\n\nBeginning July 1, the company will use a new online system for expense claims. Paper forms will no longer be (1)____ after that date. To submit a claim, log in to the staff portal, select "Expenses," and upload a photo of each receipt.\n\n(2)____. However, claims over $500 will still require approval from a department head.\n\nTraining sessions will be offered next week for anyone who needs (3)____ with the new system.',
        qs: [
          ['(1) ____', 'accepted', 'accepting', 'accept', 'acceptance', 'Bị động: "will no longer be accepted".'],
          ['(2) ____', 'Most claims will be paid within five business days.', 'The accounting office has moved to the fourth floor.', 'Receipts were first used centuries ago.', 'Staff may now work from home on Fridays.', 'Câu sau bắt đầu bằng "However, claims over $500..." → câu trước nói về việc xử lý phần lớn yêu cầu.'],
          ['(3) ____', 'assistance', 'assist', 'assisted', 'assistant', 'Sau động từ "needs" cần danh từ không đếm được "assistance".'],
        ],
      },
      {
        title: 'Advertisement: Fresh Start Cleaning',
        text: 'Is your office looking tired? Fresh Start Cleaning has been serving local businesses (1)____ more than fifteen years. Our trained staff use only environmentally friendly products, so your workplace will be both clean and safe.\n\nWe offer daily, weekly, and monthly plans to fit any (2)____. New customers who sign up this month will receive their first cleaning at half price.\n\nCall 555-0166 today for a free estimate. You will be (3)____ by the difference!',
        qs: [
          ['(1) ____', 'for', 'since', 'during', 'from', '"for + khoảng thời gian" với hiện tại hoàn thành tiếp diễn.'],
          ['(2) ____', 'budget', 'weather', 'direction', 'opinion', 'Các gói dịch vụ phù hợp mọi "ngân sách".'],
          ['(3) ____', 'amazed', 'amazing', 'amaze', 'amazement', 'Người cảm thấy → tính từ đuôi -ed.'],
        ],
      },
    ],
    p7: [
      {
        title: 'Notice: Building maintenance',
        text: 'NOTICE TO TENANTS – GRANT TOWER\n\nThe elevators on the east side of the building will be out of service for annual safety checks on Saturday, October 12, from 8:00 a.m. to 2:00 p.m. The west elevators will operate normally.\n\nTenants who are moving furniture or receiving large deliveries that day should schedule them after 2:00 p.m. or use the freight elevator, which can be reserved by contacting the building manager, Mr. Paulson, at least 24 hours in advance.',
        qs: [
          ['What is the purpose of the notice?', 'To announce a temporary service interruption', 'To introduce a new building manager', 'To advertise an apartment', 'To report an accident', 'Thang máy phía đông tạm ngừng để kiểm tra an toàn.'],
          ['How often are the safety checks carried out?', 'Once a year', 'Once a month', 'Every Saturday', 'Twice a year', '"annual safety checks" = hằng năm.'],
          ['What must tenants do to use the freight elevator?', 'Contact Mr. Paulson a day ahead', 'Pay a fee', 'Wait until 2:00 p.m.', 'Use the west entrance', 'Liên hệ quản lý tòa nhà trước ít nhất 24 giờ.'],
        ],
      },
      {
        title: 'Article: Local bakery expands',
        text: 'RIVERTON (April 2) – Sweet Crumbs Bakery, a favorite of local residents since 2011, will open a second location next month in the Harbor District. Owner Nina Petrov said the new shop will be twice the size of the original and will include seating for forty customers.\n\n"People kept telling us they wanted a place to sit down with their coffee," Ms. Petrov said. The new location will also offer sandwiches and soups, which are not sold at the Main Street shop. Ms. Petrov plans to hire twelve additional employees.',
        qs: [
          ['What is the article mainly about?', 'The opening of a new store', 'A change of ownership', 'A baking competition', 'The closing of a bakery', 'Tiệm bánh mở địa điểm thứ hai.'],
          ['According to Ms. Petrov, what did customers ask for?', 'Somewhere to sit', 'Lower prices', 'Longer opening hours', 'Home delivery', '"they wanted a place to sit down with their coffee".'],
          ['What is indicated about the Main Street shop?', 'It does not sell soup.', 'It will close next month.', 'It has forty seats.', 'It opened last year.', 'Sandwich và súp "are not sold at the Main Street shop".'],
        ],
      },
      {
        title: 'Email and invoice',
        text: 'To: Orders, Greenleaf Garden Supply\nFrom: Marta Oliveira\nSubject: Invoice 7731\n\nI received my order today, but the invoice does not look right. I ordered three ceramic pots, not four. Also, your website said that shipping is free on orders over $100. Please send me a corrected invoice.\n\n--------------------\nINVOICE 7731 – Greenleaf Garden Supply\nCeramic pot (large) × 4 ........ $80.00\nGarden gloves × 2 ................ $24.00\nWatering can × 1 .................. $22.00\nShipping ................................ $9.00\nTotal ...................................... $135.00',
        qs: [
          ['Why did Ms. Oliveira write the email?', 'To report errors on an invoice', 'To cancel her order', 'To ask about delivery times', 'To order more pots', 'Hóa đơn sai số lượng và tính phí vận chuyển.'],
          ['How much does one ceramic pot cost?', '$20.00', '$80.00', '$24.00', '$22.00', '4 chậu giá $80 → mỗi chậu $20.'],
          ['What charge will most likely be removed from the corrected invoice?', '$9.00 for shipping', '$22.00 for the watering can', '$24.00 for gloves', '$60.00 for three pots', 'Sau khi sửa: 3 chậu ($60) + $24 + $22 = $106, trên $100 nên được miễn phí vận chuyển → bỏ khoản $9.'],
        ],
      },
    ],
  }),
];
