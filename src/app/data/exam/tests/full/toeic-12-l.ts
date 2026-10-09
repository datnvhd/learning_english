/** TOEIC đề 12 – phần Nghe bổ sung để đủ 100 câu (xem ghi chú "ĐỀ ĐẦY ĐỦ" trong helpers.ts) */
import { RawToeicL } from '../helpers';

export const L: RawToeicL = {
  p2: [
    ['Where is the registration desk?', 'Just inside the main entrance.', 'At nine o\'clock.', 'Fifty dollars.', 'Where → vị trí.'],
    ['Who is responsible for the monthly newsletter?', 'Karen in communications.', 'Once a month.', 'By email.', 'Who → người phụ trách.'],
    ['When is the best time to visit the factory?', 'Any weekday morning.', 'By car.', 'It is very modern.', 'When → thời gian.'],
    ['How was the hotel you stayed at?', 'Clean, and close to the station.', 'For three nights.', 'I booked online.', 'How was → nhận xét.'],
    ['Would you like to join our mailing list?', 'No, thank you.', 'I mailed it.', 'It is a long list.', 'Lời mời → từ chối.'],
    ['Why are the sales figures lower this month?', 'Two of our biggest clients delayed their orders.', 'About ten percent.', 'In the sales office.', 'Why → lý do.'],
    ['Did you order the replacement parts?', 'Yes, they will be here tomorrow.', 'A new place.', 'In order.', 'Câu hỏi Yes/No.'],
    ['Which train should I take to the airport?', 'The express from platform two.', 'It takes forty minutes.', 'A return ticket.', 'Which → xác định.'],
    ["The meeting starts at ten, doesn't it?", 'I think it has been moved to eleven.', 'Ten people.', 'It started well.', 'Câu hỏi đuôi → đính chính.'],
    ['Could you check whether the room is free?', 'Sure, I will look at the calendar.', 'It was free of charge.', 'A double room.', 'Lời nhờ.'],
    ['How much does the monthly parking pass cost?', 'Eighty dollars.', 'On Level 2.', 'Every month.', 'How much → giá.'],
    ['We have run out of name badges.', 'There is another box in the cupboard.', 'My name is Tom.', 'He ran quickly.', 'Vấn đề → chỉ chỗ có.'],
    ['Would you prefer tea or coffee?', 'Coffee, please, with milk.', 'Yes, I would.', 'In the kitchen.', 'Câu hỏi lựa chọn.'],
    ['Is this seat reserved?', 'Yes, for the guest speaker.', 'I reserved a table.', 'It is comfortable.', 'Câu hỏi Yes/No.'],
    ["Let's go over the budget once more.", 'Good idea. I found a small error.', 'It is over there.', 'Once a week.', 'Đề nghị → đồng ý.'],
    ['Whose turn is it to chair the meeting?', 'It is mine this week.', 'The chair is broken.', 'In the meeting room.', 'Whose → người.'],
    ['My flight has just been canceled.', 'Can you get on a later one?', 'It flew away.', 'A cancellation fee.', 'Tin xấu → hỏi phương án.'],
  ],
  p3: [
    {
      title: 'Renting a meeting space',
      lines: [
        'W: Hello, I would like to rent your meeting space for a workshop next Wednesday.',
        'M: Certainly. For how many people?',
        'W: Fifteen. We will need a whiteboard and a screen.',
        'M: Both are included. The room is sixty dollars for a half day or one hundred for a full day.',
        'W: We only need the morning. Can we bring our own coffee?',
        'M: Yes, there is a small kitchen you can use.',
      ],
      qs: [
        ['What does the woman want to rent?', 'A meeting space', 'A projector', 'A kitchen', 'An office', 'Lời thoại.'],
        ['How much will the woman pay?', '$60', '$100', '$15', '$160', 'Nửa ngày: 60 đô.'],
        ['What does the man say about the kitchen?', 'It can be used by the group.', 'It is closed.', 'It costs extra.', 'It has no coffee machine.', 'Câu cuối.'],
      ],
    },
    {
      title: 'A new safety rule',
      lines: [
        'M: Have you read the email about the new safety rule in the warehouse?',
        'W: Not yet. What does it say?',
        'M: From Monday, everyone must wear a yellow vest, even office staff who are only passing through.',
        'W: Where do we get them?',
        'M: There is a box by the warehouse door. You take one when you enter and put it back when you leave.',
      ],
      qs: [
        ['What is the new rule about?', 'Wearing a safety vest', 'Using a new door', 'Reading emails', 'Working on Mondays', 'Lời thoại.'],
        ['Who must follow the rule?', 'Everyone who enters the warehouse', 'Only warehouse workers', 'Only visitors', 'Only drivers', '"even office staff".'],
        ['Where are the vests kept?', 'By the warehouse door', 'In the office', 'At reception', 'In each locker', 'Câu cuối.'],
      ],
    },
    {
      title: 'A customer wants a refund',
      lines: [
        'W: I bought this coffee maker last week, and it leaks water all over the counter.',
        'M: I am sorry to hear that. Would you like to exchange it for a new one?',
        'W: No, I would prefer my money back. I have decided to buy a different brand.',
        'M: That is fine. Do you have the receipt and the original box?',
        'W: I have the receipt, but I threw the box away.',
        'M: The receipt is enough. I will refund your card now.',
      ],
      qs: [
        ['What is wrong with the coffee maker?', 'It leaks.', 'It is too small.', 'It does not heat.', 'It is noisy.', 'Lời thoại.'],
        ['What does the woman want?', 'A refund', 'An exchange', 'A repair', 'A discount', 'Lời thoại.'],
        ['What does the woman no longer have?', 'The box', 'The receipt', 'Her card', 'The coffee maker', 'Lời thoại.'],
      ],
    },
    {
      title: 'Preparing for a trade fair',
      lines: [
        'M: The trade fair in Frankfurt is in two weeks. Have the brochures been translated into German?',
        'W: The translator will finish tomorrow. Then they go to the printer.',
        'M: How long does printing take?',
        'W: Four days. I will have them sent directly to our hotel in Frankfurt.',
        'M: Good thinking. That saves us carrying them on the plane.',
      ],
      qs: [
        ['What needs to be translated?', 'Brochures', 'Contracts', 'A website', 'Business cards', 'Lời thoại.'],
        ['How long will printing take?', 'Four days', 'Two weeks', 'One day', 'Three hours', 'Lời thoại.'],
        ['Where will the brochures be sent?', 'To a hotel', 'To the office', 'To the airport', 'To the translator', 'Lời thoại.'],
      ],
    },
    {
      title: 'A problem with payroll',
      lines: [
        'W: Hello, payroll? This is Dana Ruiz from marketing. My pay this month seems to be about two hundred dollars short.',
        'M: Let me check. I see. Your overtime hours from the second week were not entered.',
        'W: I submitted them on time.',
        'M: Yes, the error was ours. I will add the amount to next month\'s pay, or I can make a separate payment on Friday.',
        'W: Friday, please.',
      ],
      qs: [
        ['Why is the woman calling?', 'Her pay is too low.', 'She wants a pay rise.', 'She lost her payslip.', 'She was paid twice.', 'Lời thoại.'],
        ['What caused the problem?', 'Overtime was not recorded.', 'She was absent.', 'Taxes increased.', 'Her bank made an error.', 'Lời thoại.'],
        ['When will she receive the money?', 'On Friday', 'Next month', 'Today', 'In two weeks', 'Câu cuối.'],
      ],
    },
    {
      title: 'An apartment repair',
      lines: [
        'M: Hi, this is Leo in apartment six. The lock on my front door is broken, and I cannot lock it.',
        'W: That is serious. I will send a locksmith this afternoon. Will you be home?',
        'M: I have to leave for work at one.',
        'W: Then I will ask him to come before noon. If he needs to replace the lock, I will leave the new keys in your mailbox.',
      ],
      qs: [
        ['What is the problem?', 'A door lock is broken.', 'A key is lost.', 'A mailbox is full.', 'A window is stuck.', 'Lời thoại.'],
        ['When must the man leave?', 'At one o\'clock', 'At noon', 'This evening', 'Tomorrow', 'Lời thoại.'],
        ['Where will the new keys be left?', 'In the mailbox', 'Under the mat', 'With a neighbor', 'At the office', 'Câu cuối.'],
      ],
    },
    {
      title: 'Planning a product photo shoot',
      lines: [
        'W: We need new photographs of the summer shoes for the website.',
        'M: The studio is free on Thursday. Should we use models?',
        'W: No, just the shoes on a white background. It is cheaper and faster.',
        'M: Fine. I will need the samples by Wednesday evening.',
        'W: They are in the storeroom. I will bring them up tomorrow.',
      ],
      qs: [
        ['What will be photographed?', 'Shoes', 'Models', 'A studio', 'A website', 'Lời thoại.'],
        ['Why will models not be used?', 'It is cheaper and faster without them.', 'They are unavailable.', 'The studio is too small.', 'The client dislikes them.', 'Lời thoại.'],
        ['When does the man need the samples?', 'By Wednesday evening', 'By Thursday', 'Today', 'Next week', 'Lời thoại.'],
      ],
    },
    {
      title: 'A visitor at reception',
      lines: [
        'M: Good morning. I am here to see Ms. Albright in purchasing. My name is Victor Hall.',
        'W: Good morning, Mr. Hall. I am afraid Ms. Albright is in a meeting until ten thirty.',
        'M: I am a little early. I can wait.',
        'W: Please take a seat. Would you like some coffee while you wait?',
        'M: Yes, please. And could I use the Wi-Fi?',
        'W: Of course. The password is on this card.',
      ],
      qs: [
        ['Who does the man want to see?', 'Ms. Albright', 'The receptionist', 'The director', 'Mr. Hall', 'Lời thoại.'],
        ['Why must the man wait?', 'She is in a meeting.', 'She is out of the office.', 'He is late.', 'She is on the phone.', 'Lời thoại.'],
        ['What does the woman give the man?', 'A card with the Wi-Fi password', 'A visitor badge', 'A map', 'A magazine', 'Câu cuối.'],
      ],
    },
    {
      title: 'A change of supplier',
      lines: [
        'W: Our packaging supplier has raised prices by twelve percent.',
        'M: That is a big increase. Have you looked at alternatives?',
        'W: Yes. A company in Poland offers the same boxes for less, but delivery takes two weeks instead of three days.',
        'M: We would have to keep more stock. Do we have the space?',
        'W: I will check with the warehouse manager.',
      ],
      qs: [
        ['What has the current supplier done?', 'Raised its prices', 'Stopped delivering', 'Changed its boxes', 'Moved to Poland', 'Lời thoại.'],
        ['What is the disadvantage of the other company?', 'Delivery takes longer.', 'The boxes are weaker.', 'It is more expensive.', 'It requires a contract.', 'Lời thoại.'],
        ['What will the woman check?', 'Whether there is enough storage space', 'The price of shipping', 'The quality of the boxes', 'The contract', 'Câu cuối.'],
      ],
    },
    {
      title: 'A customer books a haircut',
      lines: [
        'M: Hello, I would like to make an appointment for a haircut on Saturday.',
        'W: We are quite busy on Saturday. I have nine fifteen or four thirty.',
        'M: Nine fifteen, please. Is it with Anna?',
        'W: Anna does not work on Saturdays. It would be with Marco.',
        'M: That is fine. How much is it?',
        'W: Twenty-eight dollars.',
      ],
      qs: [
        ['When is the man\'s appointment?', 'Saturday at 9:15', 'Saturday at 4:30', 'Friday at 9:15', 'Sunday', 'Lời thoại.'],
        ['Why will Anna not cut his hair?', 'She does not work on Saturdays.', 'She is on vacation.', 'She is fully booked.', 'She has left.', 'Lời thoại.'],
        ['How much will the haircut cost?', '$28', '$18', '$38', '$20', 'Câu cuối.'],
      ],
    },
    {
      title: 'Choosing a training date',
      lines: [
        'W: The first-aid course is offered on four dates next month. Which one shall we book for our team?',
        'M: It has to be a full-day course, and not a Monday, because that is our busiest day.',
        'W: And the team is at a conference in the last week of the month.',
        'M: Then there is only one date that works.',
        'W: I will register all eight of us.',
      ],
      graphic: ['First-aid courses – June', 'Date | Day | Length\nJune 3 | Monday | Full day\nJune 11 | Tuesday | Half day\nJune 19 | Wednesday | Full day\nJune 27 | Thursday | Full day'],
      qs: [
        ['Why do the speakers avoid Mondays?', 'It is their busiest day.', 'The trainer is away.', 'The office is closed.', 'They have a meeting.', 'Lời thoại.'],
        ['What will the team do in the last week of the month?', 'Attend a conference', 'Take a vacation', 'Move offices', 'Train new staff', 'Lời thoại.'],
        ['Look at the graphic. On which date will the team take the course?', 'June 19', 'June 3', 'June 11', 'June 27', 'Cả ngày, không phải thứ Hai, không phải tuần cuối: 19/6.'],
      ],
    },
  ],
  p4: [
    {
      title: 'Announcement in a library',
      lines: [
        'W: May I have your attention, please? The library will close in fifteen minutes.',
        'W: If you wish to borrow books, please bring them to the self-service machines now. The printing room has already closed.',
        'W: The library will be closed tomorrow for staff training and will reopen on Wednesday at nine.',
      ],
      qs: [
        ['When will the library close?', 'In fifteen minutes', 'In an hour', 'At nine', 'Immediately', 'Thông báo.'],
        ['What has already closed?', 'The printing room', 'The entrance', 'The café', 'The reading room', 'Thông báo.'],
        ['Why is the library closed tomorrow?', 'For staff training', 'For a holiday', 'For repairs', 'For an exhibition', 'Câu cuối.'],
      ],
    },
    {
      title: 'Voicemail from a client',
      lines: [
        'M: Hello, this is Peter Lang from Lang Construction. I am calling about the safety helmets we ordered.',
        'M: We received the delivery this morning, but there are only eighty helmets in the boxes. We ordered one hundred.',
        'M: We need the other twenty before Monday, when the new project starts. Please call me back today on five five five, zero one four six.',
      ],
      qs: [
        ['What did the speaker order?', 'Safety helmets', 'Boxes', 'Building materials', 'Tools', 'Lời nhắn.'],
        ['What is the problem?', 'Some items are missing.', 'The items are damaged.', 'The delivery was late.', 'The price was wrong.', '80 thay vì 100.'],
        ['When does the speaker need the rest?', 'Before Monday', 'By the end of the month', 'This afternoon', 'Next Friday', 'Lời nhắn.'],
      ],
    },
    {
      title: 'Advertisement for a language app',
      lines: [
        'W: Planning a trip abroad? Learn the basics of a new language in just ten minutes a day with SpeakEasy.',
        'W: Our app uses short lessons and real conversations with native speakers. You can choose from twenty-two languages.',
        'W: Download it today and get your first month free. After that, it is only five dollars a month.',
      ],
      qs: [
        ['How much time per day does the app require?', 'Ten minutes', 'One hour', 'Twenty-two minutes', 'Five minutes', 'Quảng cáo.'],
        ['How many languages are offered?', 'Twenty-two', 'Ten', 'Five', 'Forty', 'Quảng cáo.'],
        ['What do new users receive?', 'A free first month', 'A free trip', 'A dictionary', 'A private teacher', 'Quảng cáo.'],
      ],
    },
    {
      title: 'Talk to volunteers at a museum',
      lines: [
        'M: Thank you all for volunteering at the City Museum\'s family day this Sunday.',
        'M: We expect about two thousand visitors. Half of you will help at the craft tables, and the other half will guide families through the dinosaur gallery.',
        'M: Please arrive by nine thirty and wear the red T-shirt we gave you. Lunch will be provided in the staff room at twelve thirty.',
      ],
      qs: [
        ['What event will the volunteers help with?', 'A family day', 'A lecture', 'A concert', 'A sale', 'Lời nói.'],
        ['What will some volunteers do?', 'Guide families through a gallery', 'Sell tickets', 'Clean the museum', 'Drive buses', 'Lời nói.'],
        ['What should volunteers wear?', 'A red T-shirt', 'A blue jacket', 'A name badge only', 'Formal clothes', 'Lời nói.'],
      ],
    },
    {
      title: 'Recorded message for a hotel',
      lines: [
        'W: Thank you for calling the Mountain Lodge Hotel. All of our lines are busy at the moment.',
        'W: To make a reservation, please stay on the line, or visit our website, where you can get ten percent off by booking online.',
        'W: Please note that our restaurant is closed for renovation until the first of May. Breakfast is being served in the lounge.',
      ],
      qs: [
        ['Why is the caller hearing this message?', 'All lines are busy.', 'The hotel is closed.', 'It is after hours.', 'The number is wrong.', 'Thông báo.'],
        ['How can callers get a discount?', 'By booking online', 'By staying three nights', 'By calling back later', 'By paying cash', 'Thông báo.'],
        ['Where is breakfast being served?', 'In the lounge', 'In the restaurant', 'In guest rooms only', 'On the terrace', 'Câu cuối.'],
      ],
    },
    {
      title: 'Excerpt from a project meeting',
      lines: [
        'M: Let me give you an update on the new website. The design is finished, and the client approved it yesterday.',
        'M: The next stage is testing. We need five people from outside the project team to try the site and tell us about any problems.',
        'M: Testing will take place next Tuesday and Wednesday. If you can spare an hour, please email me by Friday.',
      ],
      qs: [
        ['What happened yesterday?', 'The client approved the design.', 'The website went live.', 'Testing was completed.', 'A problem was found.', 'Lời nói.'],
        ['Who is needed for testing?', 'People from outside the project team', 'The client', 'Designers', 'New employees only', 'Lời nói.'],
        ['What should interested listeners do?', 'Email the speaker by Friday', 'Come on Thursday', 'Call the client', 'Sign a form', 'Câu cuối.'],
      ],
    },
    {
      title: 'News report on an airport expansion',
      lines: [
        'W: The regional airport has announced plans to build a second runway, which would allow twice as many flights.',
        'W: The project is expected to cost three hundred million dollars and to create two thousand jobs. However, residents of nearby villages are worried about noise.',
        'W: A public meeting will be held at the town hall next Thursday at seven p.m.',
      ],
      qs: [
        ['What does the airport plan to build?', 'A second runway', 'A new terminal', 'A hotel', 'A railway station', 'Bản tin.'],
        ['What are residents concerned about?', 'Noise', 'Traffic', 'Job losses', 'Higher taxes', 'Bản tin.'],
        ['Where will the public meeting be held?', 'At the town hall', 'At the airport', 'In a village school', 'Online', 'Câu cuối.'],
      ],
    },
    {
      title: 'Message about a team dinner',
      lines: [
        'M: Hi, everyone. It is Sam. I have booked the restaurant for our team dinner on Friday.',
        'M: We agreed that it should be within ten minutes\' walk of the office and should have a private room. Only one of the four restaurants I called met both conditions, so I chose that one.',
        'M: The table is booked for seven. Please tell me by Wednesday if you cannot come.',
      ],
      graphic: ['Restaurants', 'Name | Walk from office | Private room\nBella Italia | 5 minutes | No\nGolden Dragon | 8 minutes | Yes\nLa Mesa | 20 minutes | Yes\nThe Grill House | 15 minutes | No'],
      qs: [
        ['What is the message about?', 'A team dinner', 'A client meeting', 'A new office', 'A cooking class', 'Lời nhắn.'],
        ['Look at the graphic. Which restaurant did the speaker book?', 'Golden Dragon', 'Bella Italia', 'La Mesa', 'The Grill House', 'Trong 10 phút đi bộ và có phòng riêng.'],
        ['What should listeners do by Wednesday?', 'Say if they cannot attend', 'Choose their meal', 'Pay a deposit', 'Book a taxi', 'Câu cuối.'],
      ],
    },
  ],
};
