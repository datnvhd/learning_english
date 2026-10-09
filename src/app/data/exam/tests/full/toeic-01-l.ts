/** TOEIC đề 1 – phần Nghe bổ sung để đủ 100 câu (xem ghi chú "ĐỀ ĐẦY ĐỦ" trong helpers.ts) */
import { RawToeicL } from '../helpers';

export const L: RawToeicL = {
  p2: [
    ['Where did you park your car?', 'In the garage across the street.', 'About an hour ago.', 'It is a new model.', 'Where → nơi đỗ xe.'],
    ['Who is going to train the new cashiers?', 'Ms. Dalton will.', 'On the express train.', 'They start next week.', 'Who → người đào tạo. "train" (tàu) là bẫy đồng âm.'],
    ['When is the electrician scheduled to arrive?', 'Sometime after lunch.', 'In the basement.', 'To fix the wiring.', 'When → thời gian.'],
    ['How do I apply for a parking permit?', 'Fill out the form at the security desk.', 'It is valid for a year.', 'I parked over there.', 'How → cách thức.'],
    ['Would you like to see the dessert menu?', 'No, thanks. Just the check, please.', 'It was delicious.', 'I saw it yesterday.', 'Lời mời → từ chối lịch sự.'],
    ['Why is the conference room locked?', 'The carpet is being cleaned.', 'With a key.', 'Room three.', 'Why → lý do.'],
    ['Have you finished the quarterly budget?', "I'm still working on it.", 'It was finished in oak.', 'Every three months.', 'Câu hỏi Yes/No → "vẫn đang làm".'],
    ['Which printer should I use for color copies?', 'The one next to the window.', 'Twenty copies.', 'Blue and green.', 'Which → xác định máy cụ thể.'],
    ["You've met our new director, haven't you?", 'Yes, at last week\'s meeting.', 'He directs films.', 'She is directly behind you.', 'Câu hỏi đuôi → xác nhận.'],
    ['Could you take notes during the meeting?', "Sure, I'll bring my laptop.", 'I noticed it, too.', 'In the meeting room.', 'Lời nhờ → đồng ý.'],
    ['How much does it cost to ship this overseas?', 'It depends on the weight.', 'By air mail.', 'About a week.', 'How much → câu trả lời gián tiếp "tùy trọng lượng".'],
    ['The air conditioning seems to be broken.', "I'll report it to maintenance.", 'It is in good condition.', 'Yes, I broke the record.', 'Câu nêu vấn đề → hướng xử lý.'],
    ['Should I email the agenda or print it?', 'Email is fine.', 'Yes, you should.', 'At the top of the page.', 'Câu hỏi lựa chọn.'],
    ['Do you know when the bank closes?', 'At five, I think.', 'On Bridge Street.', 'To open an account.', 'Câu hỏi gián tiếp về thời gian.'],
    ["Why don't we take a taxi to the airport?", "Good idea. We're running late.", 'Because it was expensive.', 'At gate nine.', 'Lời gợi ý → tán thành.'],
    ['Whose laptop is this on the table?', "It's probably Jim's.", 'On the top shelf.', 'It is quite light.', 'Whose → chủ sở hữu.'],
    ['The new intern starts tomorrow.', 'Is her desk ready?', 'It started late.', 'In turn, please.', 'Câu thông tin → hỏi lại việc chuẩn bị.'],
  ],
  p3: [
    {
      title: 'A lost phone',
      lines: [
        'W: Excuse me, I think I left my phone in one of your taxis this morning.',
        'M: Do you remember what time you took the taxi, and where you got out?',
        'W: About eight fifteen. I got out in front of the Marlin Hotel.',
        "M: One moment. Yes, a driver handed in a black phone at nine. You can collect it at our office until six p.m. Please bring some identification.",
      ],
      qs: [
        ['What is the woman looking for?', 'Her phone', 'Her wallet', 'Her hotel key', 'Her luggage', '"I left my phone in one of your taxis".'],
        ['Where did the woman get out of the taxi?', 'In front of a hotel', 'At the airport', 'At her office', 'Near a station', '"in front of the Marlin Hotel".'],
        ['What should the woman bring?', 'Identification', 'A receipt', 'The taxi fare', 'A photo of the phone', '"Please bring some identification".'],
      ],
    },
    {
      title: 'Arranging a lunch meeting',
      lines: [
        'M: Tanya, are you free for lunch on Thursday? I want to discuss the marketing plan.',
        "W: Thursday is difficult. I'm visiting a supplier all morning. How about Friday?",
        'M: Friday works. Shall we try the new Italian place on Cross Street?',
        "W: Sure. I'll book a table for twelve thirty.",
      ],
      qs: [
        ['Why does the man want to meet?', 'To talk about a marketing plan', 'To interview the woman', 'To celebrate a birthday', 'To visit a supplier', '"I want to discuss the marketing plan".'],
        ['Why is the woman unavailable on Thursday?', 'She will be visiting a supplier.', 'She is on vacation.', 'She has a dental appointment.', 'She is attending a conference.', '"I\'m visiting a supplier all morning".'],
        ['What will the woman do?', 'Reserve a table', 'Write the plan', 'Call the supplier', 'Cook lunch', '"I\'ll book a table for twelve thirty".'],
      ],
    },
    {
      title: 'A broken vending machine',
      lines: [
        'W: The vending machine on the third floor took my money, but nothing came out.',
        "M: That's the second complaint today. I'll put an out-of-order sign on it.",
        'W: Can I get my two dollars back?',
        'M: Yes. Go to the reception desk and fill in a refund slip. The company that owns the machine is sending a technician tomorrow.',
      ],
      qs: [
        ['What is the problem?', 'A machine is not working properly.', 'A floor is closed.', 'A sign is missing.', 'A receipt was lost.', 'Máy bán hàng nuốt tiền mà không ra hàng.'],
        ['What will the man do?', 'Put up a sign', 'Repair the machine', 'Call the woman later', 'Buy a drink', '"I\'ll put an out-of-order sign on it".'],
        ['How can the woman get a refund?', 'By completing a form at reception', 'By calling the technician', 'By emailing the company', 'By coming back tomorrow', '"Go to the reception desk and fill in a refund slip".'],
      ],
    },
    {
      title: 'Choosing a business card design',
      lines: [
        'M: Here are two designs for your new business cards. Design A has the logo on the left, and Design B has it in the center.',
        'W: I prefer Design B, but could the phone number be a little larger?',
        'M: No problem. I can send you a revised version this afternoon.',
        'W: Great. If it looks good, we will order one thousand cards.',
      ],
      qs: [
        ['What are the speakers discussing?', 'Business card designs', 'A company logo contest', 'A telephone bill', 'A printing error', '"two designs for your new business cards".'],
        ['What change does the woman request?', 'A larger phone number', 'A different color', 'A smaller logo', 'A new address', '"could the phone number be a little larger?"'],
        ['What will the man do this afternoon?', 'Send an updated design', 'Print one thousand cards', 'Visit the woman\'s office', 'Send an invoice', '"I can send you a revised version this afternoon".'],
      ],
    },
    {
      title: 'A seminar registration',
      lines: [
        "W: Hi, I'd like to register for the leadership seminar on the twentieth.",
        "M: I'm sorry, that session is full. But we are offering the same seminar again on the twenty-seventh.",
        'W: That date is fine. Is the fee the same?',
        'M: Yes, one hundred and fifty dollars, including lunch and materials. I just need your name and company.',
      ],
      qs: [
        ['What does the woman want to do?', 'Sign up for a seminar', 'Cancel a registration', 'Give a presentation', 'Order lunch', '"register for the leadership seminar".'],
        ['What problem does the man mention?', 'A session has no places left.', 'The seminar was canceled.', 'The fee has increased.', 'The speaker is ill.', '"that session is full".'],
        ['What is included in the fee?', 'Lunch and materials', 'A hotel room', 'Parking', 'A certificate', '"including lunch and materials".'],
      ],
    },
    {
      title: 'Office supplies running low',
      lines: [
        "M: Jenny, we're almost out of envelopes, and there is only one box of paper left.",
        'W: I placed an order on Monday. It should have arrived by now.',
        'M: Could you check with the supplier?',
        "W: I'll call them right away. If the order is delayed, I can pick up a few boxes from the store on my way back from lunch.",
      ],
      qs: [
        ['What is the problem?', 'Supplies are running out.', 'An invoice is wrong.', 'A store is closed.', 'A box was damaged.', '"almost out of envelopes... only one box of paper left".'],
        ['When did the woman place the order?', 'On Monday', 'Yesterday', 'Last month', 'This morning', '"I placed an order on Monday".'],
        ['What does the woman offer to do?', 'Buy some supplies herself', 'Cancel the order', 'Change suppliers', 'Work through lunch', '"I can pick up a few boxes from the store".'],
      ],
    },
    {
      title: 'A delayed flight',
      lines: [
        "M: Hello, I'm calling from the airport. My flight to Boston has been delayed by three hours, so I will miss the two o'clock meeting.",
        "W: That's unfortunate. Shall I ask the clients to meet at five instead?",
        "M: Yes, please. And could you email me the latest version of the contract? I'll review it while I wait.",
        "W: I'll send it in a few minutes.",
      ],
      qs: [
        ['Where is the man?', 'At an airport', 'In Boston', 'At the office', 'In a taxi', '"I\'m calling from the airport".'],
        ['What does the woman offer to do?', 'Reschedule a meeting', 'Book another flight', 'Meet the man at the airport', 'Cancel the contract', '"Shall I ask the clients to meet at five instead?"'],
        ['What does the man ask the woman to send?', 'A contract', 'A boarding pass', 'A client list', 'A map', '"email me the latest version of the contract".'],
      ],
    },
    {
      title: 'A new coffee machine',
      lines: [
        'W: Did you see the new coffee machine in the break room?',
        'M: Yes, but I could not work out how to use it. There are so many buttons.',
        "W: It's easy once you know. Press the green button twice for a large cup. There are instructions on the wall, too.",
        "M: Thanks. I'll try again after this call.",
      ],
      qs: [
        ['What are the speakers talking about?', 'A coffee machine', 'A break schedule', 'A telephone system', 'A wall poster', '"the new coffee machine in the break room".'],
        ['What problem did the man have?', 'He did not know how to operate it.', 'He had no coins.', 'It was out of coffee.', 'It was unplugged.', '"I could not work out how to use it".'],
        ['Where can instructions be found?', 'On the wall', 'In an email', 'Inside the machine', 'On the company website', '"There are instructions on the wall".'],
      ],
    },
    {
      title: 'Hiring a temporary worker',
      lines: [
        'M: Our receptionist will be on leave for the whole of August. We need someone to cover for her.',
        'W: I can contact the staffing agency we used last year. They sent us someone excellent.',
        'M: Good. Ask them for a person with experience of our phone system, if possible.',
        "W: I'll call them today and ask them to send some résumés by Friday.",
      ],
      qs: [
        ['Why do the speakers need a temporary worker?', 'An employee will be away.', 'Business is increasing.', 'Someone has resigned.', 'A new office is opening.', '"Our receptionist will be on leave for the whole of August".'],
        ['What does the woman suggest?', 'Contacting a staffing agency', 'Placing a newspaper advertisement', 'Asking a manager to help', 'Closing the reception desk', '"I can contact the staffing agency we used last year".'],
        ['What does the woman expect to receive by Friday?', 'Some résumés', 'A phone system', 'A contract', 'An invoice', '"ask them to send some résumés by Friday".'],
      ],
    },
    {
      title: 'A store loyalty card',
      lines: [
        'W: That comes to eighty-four dollars. Do you have a loyalty card with us?',
        "M: No, I don't. Is it worth getting one?",
        'W: Yes. You earn one point for every dollar, and it is free. If you sign up now, you will get ten percent off today\'s purchase.',
        "M: In that case, I'll sign up. What do you need from me?",
        'W: Just your name and email address.',
      ],
      qs: [
        ['Where does the conversation take place?', 'At a store checkout', 'At a bank', 'At a post office', 'At a restaurant', 'Nhân viên thu ngân tính tiền và mời làm thẻ.'],
        ['What benefit will the man get today?', 'A ten percent discount', 'A free gift', 'Double points', 'Free delivery', '"ten percent off today\'s purchase".'],
        ['What information does the woman need?', 'A name and email address', 'A phone number and address', 'A credit card number', 'A date of birth', '"Just your name and email address".'],
      ],
    },
    {
      title: 'Conference room schedule',
      lines: [
        'M: Hi, Lin. I need a meeting room for ten people tomorrow morning. Is anything free?',
        'W: Let me look at the schedule. Room B is taken all morning. Room A is free until eleven, and Room C is free after ten.',
        'M: My meeting runs from nine to ten thirty.',
        "W: Then I'll put you in the room that is free the whole time. Do you need a projector?",
        'M: Yes, please.',
      ],
      graphic: ['Room schedule – tomorrow morning', 'Room | Seats | Available\nRoom A | 12 | 8:00–11:00\nRoom B | 20 | Not available\nRoom C | 10 | 10:00–12:00'],
      qs: [
        ['What does the man need?', 'A meeting room', 'A new schedule', 'A larger office', 'Ten chairs', '"I need a meeting room for ten people".'],
        ['Look at the graphic. Which room will the man use?', 'Room A', 'Room B', 'Room C', 'None of them', 'Họp 9:00–10:30 → chỉ Room A trống suốt thời gian đó.'],
        ['What does the woman ask about?', 'Equipment', 'Catering', 'The number of guests', 'The topic of the meeting', '"Do you need a projector?"'],
      ],
    },
  ],
  p4: [
    {
      title: 'Voicemail from a bookstore',
      lines: [
        'W: Hello, this is Karen from Oak Street Books with a message for Mr. Sanders.',
        'W: The cookbook you ordered has arrived, and we are holding it for you at the front counter.',
        'W: We can keep it for seven days. Our store is open from nine to eight on weekdays and ten to six on weekends. If you would like us to mail it to you instead, please call us back.',
      ],
      qs: [
        ['Why is the speaker calling?', 'An order has arrived.', 'A book is out of print.', 'A payment is overdue.', 'A store is closing.', '"The cookbook you ordered has arrived".'],
        ['How long will the item be held?', 'Seven days', 'Two days', 'One month', 'Until the weekend', '"We can keep it for seven days".'],
        ['Why would the listener call back?', 'To have the item mailed', 'To cancel the order', 'To ask for a discount', 'To order another book', '"If you would like us to mail it to you instead".'],
      ],
    },
    {
      title: 'Announcement about a parking garage',
      lines: [
        'M: Attention, all employees. The lower level of the parking garage will be closed tomorrow for line painting.',
        'M: Please park on the upper level or in the visitor lot behind Building Two. The work should be finished by six p.m.',
        'M: Any cars left on the lower level tonight will be moved at the owner\'s expense, so please check before you go home.',
      ],
      qs: [
        ['What will happen tomorrow?', 'Part of a garage will be closed.', 'A new building will open.', 'Visitors will arrive.', 'Parking fees will rise.', '"The lower level of the parking garage will be closed tomorrow".'],
        ['Where should employees park?', 'On the upper level', 'On the street', 'At a nearby mall', 'On the lower level', '"park on the upper level or in the visitor lot".'],
        ['What are listeners warned about?', 'Cars may be moved at their cost.', 'The garage will be dark.', 'The paint will be wet for a week.', 'The visitor lot is full.', '"moved at the owner\'s expense".'],
      ],
    },
    {
      title: 'Radio advertisement for a hotel',
      lines: [
        'W: Planning a business trip to Seattle? Stay at the Emerald Bay Hotel, just five minutes from the convention center.',
        'W: Every room has a large desk, free high-speed Internet, and a view of the water. Our business center is open twenty-four hours a day.',
        'W: Book three nights or more this month and receive free airport transportation. Visit emeraldbayhotel.com to reserve your room.',
      ],
      qs: [
        ['Who is the advertisement mainly for?', 'Business travelers', 'Families with children', 'Students', 'Local residents', '"Planning a business trip to Seattle?"'],
        ['What is available twenty-four hours a day?', 'The business center', 'The restaurant', 'The swimming pool', 'The airport shuttle', '"Our business center is open twenty-four hours a day".'],
        ['How can guests get free airport transportation?', 'By staying at least three nights', 'By booking by phone', 'By paying in advance', 'By joining a club', '"Book three nights or more".'],
      ],
    },
    {
      title: 'Introduction of a new manager',
      lines: [
        'M: Before we begin, I would like to introduce Ms. Helen Cho, who joined us on Monday as our new operations manager.',
        'M: Ms. Cho spent eight years at a shipping company in Hong Kong, where she reduced delivery times by a third.',
        'M: She will be visiting each department this week to learn how we work. Please take a moment to welcome her when she stops by.',
      ],
      qs: [
        ['What is Ms. Cho\'s position?', 'Operations manager', 'Shipping clerk', 'Sales director', 'Personal assistant', '"our new operations manager".'],
        ['Where did Ms. Cho work before?', 'At a shipping company', 'At a hotel', 'At a bank', 'At a university', '"eight years at a shipping company in Hong Kong".'],
        ['What will Ms. Cho do this week?', 'Visit each department', 'Travel to Hong Kong', 'Give a training course', 'Interview candidates', '"She will be visiting each department this week".'],
      ],
    },
    {
      title: 'Telephone message about a delivery',
      lines: [
        'W: Hi, this is Monica from Garden Home Furniture, calling for Mr. Ellis.',
        'W: Your sofa is scheduled for delivery tomorrow, but our driver says the street in front of your building is closed for construction.',
        'W: Could you let us know whether there is a back entrance we can use? Otherwise, we will have to move your delivery to next Tuesday. You can reach me at five five five, zero one six two.',
      ],
      qs: [
        ['What is being delivered?', 'A sofa', 'A garden table', 'A bed', 'Some building materials', '"Your sofa is scheduled for delivery tomorrow".'],
        ['What is the problem?', 'A street is closed.', 'The item is damaged.', 'The driver is sick.', 'The address is wrong.', '"the street in front of your building is closed for construction".'],
        ['What does the speaker want to know?', 'Whether there is another entrance', 'Whether the listener will be home', 'How the listener will pay', 'What color the listener prefers', '"whether there is a back entrance we can use".'],
      ],
    },
    {
      title: 'Announcement at a fitness center',
      lines: [
        'M: Good evening, members. The fitness center will close in thirty minutes, at ten p.m.',
        'M: Please finish your workouts and return all weights to the racks. The locker rooms will remain open until ten fifteen.',
        'M: And a reminder: starting next Monday, we will open one hour earlier, at five a.m., on weekdays.',
      ],
      qs: [
        ['When does the fitness center close tonight?', 'At ten p.m.', 'At nine thirty p.m.', 'At ten fifteen p.m.', 'At five a.m.', '"will close in thirty minutes, at ten p.m."'],
        ['What are members asked to do?', 'Put the weights back', 'Leave by the back door', 'Renew their membership', 'Clean the lockers', '"return all weights to the racks".'],
        ['What will change next Monday?', 'The opening time on weekdays', 'The membership fee', 'The location of the lockers', 'The weekend schedule', '"we will open one hour earlier, at five a.m., on weekdays".'],
      ],
    },
    {
      title: 'Talk at a new-product meeting',
      lines: [
        'W: Thanks for joining me. Today I am going to show you our new line of reusable water bottles.',
        'W: They come in three sizes and keep drinks cold for twenty-four hours. Unlike our old bottles, they are made entirely of recycled steel.',
        'W: We will start selling them online on June first, and in stores two weeks later. I have brought samples, so please pass them around while I go through the prices.',
      ],
      qs: [
        ['What is the speaker presenting?', 'Water bottles', 'Steel containers for factories', 'A recycling service', 'Cold drinks', '"our new line of reusable water bottles".'],
        ['What is new about the products?', 'They are made of recycled steel.', 'They come in one size.', 'They keep drinks hot.', 'They are sold only in stores.', '"made entirely of recycled steel".'],
        ['What will the listeners do next?', 'Look at some samples', 'Fill out an order', 'Visit a store', 'Watch a video', '"I have brought samples, so please pass them around".'],
      ],
    },
    {
      title: 'Message about a schedule of interviews',
      lines: [
        'M: Hi, Paula. It is Greg. I have arranged the interviews for the graphic designer position for Wednesday.',
        'M: There are four candidates. The first one comes at nine, and each interview will last forty-five minutes. Unfortunately, the candidate at ten thirty has just asked to come last instead, so I have swapped her with the final candidate.',
        'M: I have left the updated schedule and all four portfolios on your desk.',
      ],
      graphic: ['Interviews – Wednesday (updated)', 'Time | Candidate\n9:00 | Mr. Ruiz\n9:45 | Ms. Bell\n10:30 | Mr. Aoki\n11:15 | Ms. Larsen'],
      qs: [
        ['What position are the interviews for?', 'Graphic designer', 'Receptionist', 'Sales manager', 'Photographer', '"the graphic designer position".'],
        ['Look at the graphic. Who asked for a later interview?', 'Ms. Larsen', 'Mr. Ruiz', 'Ms. Bell', 'Mr. Aoki', 'Ứng viên 10:30 xin xuống cuối → trong lịch đã cập nhật là người lúc 11:15: Ms. Larsen.'],
        ['What has the speaker left on the listener\'s desk?', 'A schedule and portfolios', 'Four contracts', 'A job advertisement', 'Some design software', '"the updated schedule and all four portfolios".'],
      ],
    },
  ],
};
