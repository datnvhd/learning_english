/** TOEIC đề 15 – phần Nghe bổ sung để đủ 100 câu (xem ghi chú "ĐỀ ĐẦY ĐỦ" trong helpers.ts) */
import { RawToeicL } from '../helpers';

export const L: RawToeicL = {
  p2: [
    ['Where do I collect my visitor badge?', 'From the guard at the gate.', 'For one day.', 'It is blue.', 'Where → vị trí.'],
    ['Who wrote the instructions for the new machine?', 'The manufacturer did.', 'In three languages.', 'On page ten.', 'Who → người viết.'],
    ['When is the lease on the copier due to end?', 'In about six months.', 'Fifty dollars a month.', 'In the copy room.', 'When → thời gian.'],
    ['How do I change the toner?', 'There are instructions inside the cover.', 'It is black.', 'About once a month.', 'How → cách làm.'],
    ['Would you like to borrow my charger?', 'Thanks, my battery is almost dead.', 'I charged it.', 'It is free of charge.', 'Lời đề nghị → nhận.'],
    ['Why is the staff room locked?', 'It is being painted today.', 'With a key.', 'On the ground floor.', 'Why → lý do.'],
    ['Has the client replied to our offer?', 'Not yet, but I expect an answer today.', 'A special offer.', 'I replied yesterday.', 'Câu hỏi Yes/No.'],
    ['Which entrance is closest to the conference hall?', 'The one on Park Street.', 'About two hundred seats.', 'At nine o\'clock.', 'Which → xác định.'],
    ["You booked the hotel already, didn't you?", 'Yes, for three nights.', 'It is a nice hotel.', 'A book about hotels.', 'Câu hỏi đuôi.'],
    ['Could you keep an eye on my bag for a minute?', 'Sure, no problem.', 'I have good eyes.', 'It is a big bag.', 'Lời nhờ → đồng ý.'],
    ['How much notice do I need to give?', 'One month, according to the contract.', 'I noticed it.', 'On the notice board.', 'How much notice → thời hạn báo trước.'],
    ['The air conditioner is leaking water.', 'I will put a bucket under it and call a technician.', 'It is very cold.', 'A glass of water.', 'Vấn đề → hành động.'],
    ['Shall we hold the meeting today or tomorrow?', 'Tomorrow would give us more time to prepare.', 'Yes, we shall.', 'In the meeting room.', 'Câu hỏi lựa chọn.'],
    ['Is there a bus to the exhibition center?', 'Yes, the number twelve goes there.', 'It is a large exhibition.', 'I center it.', 'Câu hỏi Yes/No.'],
    ["Why don't we ask the supplier for a discount?", 'It is worth a try.', 'Because it was cheap.', 'They supplied it.', 'Lời gợi ý → tán thành.'],
    ['Whose signature is required on this form?', 'The department manager\'s.', 'At the bottom.', 'In ink.', 'Whose → người ký.'],
    ['I think I sent the email to the wrong person.', 'Can you recall the message?', 'It was a long email.', 'The right person.', 'Vấn đề → gợi ý.'],
  ],
  p3: [
    {
      title: 'A customer wants to extend a rental',
      lines: [
        'M: Hello, I rented a van from you yesterday, and I am supposed to return it at five today. Could I keep it until tomorrow?',
        'W: Let me check. Yes, it is not booked tomorrow. It will be an extra sixty dollars.',
        'M: That is fine. What time do I need to bring it back?',
        'W: By noon. And please remember to fill the tank.',
      ],
      qs: [
        ['What does the man want to do?', 'Keep a van for another day', 'Return a van early', 'Buy a van', 'Rent a second van', 'Lời thoại.'],
        ['How much extra will he pay?', '$60', '$16', '$50', 'Nothing', 'Lời thoại.'],
        ['What does the woman remind him to do?', 'Fill the fuel tank', 'Wash the van', 'Bring his license', 'Pay in cash', 'Câu cuối.'],
      ],
    },
    {
      title: 'A problem with a presentation file',
      lines: [
        'W: Mark, I cannot open the presentation you sent me. It says the file is damaged.',
        'M: Strange. It works on my computer. I will send it again in a different format.',
        'W: Thanks. The client arrives at eleven.',
        'M: In case it still does not open, I will also put it on a memory stick and bring it to your office.',
      ],
      qs: [
        ['What is the problem?', 'A file will not open.', 'A computer is broken.', 'A client is late.', 'An email was lost.', 'Lời thoại.'],
        ['What will the man do first?', 'Send the file in another format', 'Call the client', 'Repair the computer', 'Cancel the meeting', 'Lời thoại.'],
        ['What else will the man bring?', 'A memory stick', 'A printed copy', 'A laptop', 'A projector', 'Câu cuối.'],
      ],
    },
    {
      title: 'A new member of staff',
      lines: [
        'M: Have you met Sofia, the new accountant?',
        'W: Briefly. She seems very friendly. Where did she work before?',
        'M: At a bank in Madrid for six years. She moved here last month.',
        'W: We should invite her to lunch. How about Thursday?',
        'M: Good idea. I will book the Spanish restaurant on Bridge Street so that she feels at home.',
      ],
      qs: [
        ['What is Sofia\'s job?', 'Accountant', 'Bank manager', 'Receptionist', 'Chef', 'Lời thoại.'],
        ['Where did she work before?', 'At a bank in Madrid', 'At a restaurant', 'At a school', 'At this company\'s other office', 'Lời thoại.'],
        ['What will the man do?', 'Book a restaurant', 'Cook lunch', 'Call Sofia', 'Find her a flat', 'Câu cuối.'],
      ],
    },
    {
      title: 'A broken zipper',
      lines: [
        'W: I bought this suitcase here two months ago, and the zipper has already broken.',
        'M: I am sorry about that. It has a two-year guarantee, so we can repair it or replace it.',
        'W: I am flying to Rome on Saturday. How long would a repair take?',
        'M: About a week. I think a replacement is better. We have the same model in gray or blue.',
        'W: Blue, please.',
      ],
      qs: [
        ['What is wrong with the suitcase?', 'The zipper is broken.', 'A wheel is missing.', 'It is too small.', 'The handle is loose.', 'Lời thoại.'],
        ['Why is a repair not suitable?', 'It would take too long.', 'It is too expensive.', 'The guarantee has ended.', 'The shop cannot do repairs.', 'Cô bay thứ Bảy; sửa mất một tuần.'],
        ['What color does the woman choose?', 'Blue', 'Gray', 'Black', 'Red', 'Câu cuối.'],
      ],
    },
    {
      title: 'A meeting about office space',
      lines: [
        'M: With the new hires, we will have twenty-two people in a room designed for sixteen.',
        'W: I know. The room next door is used only for storage. Could we clear it out?',
        'M: Most of those boxes are old files. We could send them to the archive.',
        'W: Then we could put six desks in there. I will ask the facilities team for a quote.',
      ],
      qs: [
        ['What is the problem?', 'The office is too small.', 'There are too many boxes.', 'The archive is full.', 'New staff have not arrived.', 'Lời thoại.'],
        ['What is in the room next door?', 'Old files', 'Desks', 'Computers', 'Furniture', 'Lời thoại.'],
        ['What will the woman do?', 'Ask for a quote', 'Move the boxes herself', 'Hire more staff', 'Buy desks today', 'Câu cuối.'],
      ],
    },
    {
      title: 'A customer at a mobile phone shop',
      lines: [
        'W: Hi, my phone screen cracked when I dropped it. Can you fix it?',
        'M: Yes. A new screen for this model costs ninety dollars.',
        'W: How long will it take?',
        'M: About an hour. You can wait here or come back later.',
        'W: I will go and have a coffee. Will I lose my photos?',
        'M: No, everything on the phone will stay the same.',
      ],
      qs: [
        ['What happened to the phone?', 'The screen cracked.', 'It was stolen.', 'The battery died.', 'It fell in water.', 'Lời thoại.'],
        ['How long will the repair take?', 'About an hour', 'One day', 'Ninety minutes', 'A week', 'Lời thoại.'],
        ['What is the woman worried about?', 'Losing her photos', 'The price', 'The color', 'The warranty', 'Lời thoại.'],
      ],
    },
    {
      title: 'Planning a staff survey',
      lines: [
        'M: The director wants to know how staff feel about working from home.',
        'W: We could send out a short online survey. Five questions at most.',
        'M: Should it be anonymous?',
        'W: Definitely. People will be more honest.',
        'M: I agree. Could you draft the questions by Wednesday? I would like to send it on Friday.',
      ],
      qs: [
        ['What is the survey about?', 'Working from home', 'Office furniture', 'Salaries', 'The cafeteria', 'Lời thoại.'],
        ['Why should it be anonymous?', 'People will answer more honestly.', 'It is required by law.', 'It is faster.', 'The director asked for it.', 'Lời thoại.'],
        ['When will the survey be sent?', 'On Friday', 'On Wednesday', 'Today', 'Next month', 'Câu cuối.'],
      ],
    },
    {
      title: 'A late guest speaker',
      lines: [
        'W: Professor Kent has just phoned. His train is delayed, and he will be forty minutes late.',
        'M: His talk is supposed to open the seminar at nine.',
        'W: Could we swap him with the second speaker?',
        'M: Ms. Li is already here. I will ask her.',
        'W: And I will change the program on the screen in the lobby.',
      ],
      qs: [
        ['Why is Professor Kent late?', 'His train is delayed.', 'He overslept.', 'His car broke down.', 'He is unwell.', 'Lời thoại.'],
        ['What do the speakers decide to do?', 'Change the order of the talks', 'Cancel the seminar', 'Start forty minutes late', 'Find a new speaker', 'Lời thoại.'],
        ['What will the woman change?', 'The program on a screen', 'The room', 'The date', 'The lunch time', 'Câu cuối.'],
      ],
    },
    {
      title: 'Ordering lunch for a meeting',
      lines: [
        'M: Could you order lunch for the board meeting tomorrow? Eight people.',
        'W: Sure. From the usual sandwich shop?',
        'M: Yes, but one of the directors cannot eat bread. Could you add a salad?',
        'W: Of course. What time should it arrive?',
        'M: Twelve fifteen, in the boardroom. Charge it to the management account.',
      ],
      qs: [
        ['What is the lunch for?', 'A board meeting', 'A client visit', 'A training day', 'A birthday', 'Lời thoại.'],
        ['Why does the man ask for a salad?', 'One director cannot eat bread.', 'It is cheaper.', 'The shop has no sandwiches.', 'It is healthier for everyone.', 'Lời thoại.'],
        ['When should the food arrive?', 'At 12:15', 'At 12:50', 'At noon', 'At 1:15', 'Lời thoại.'],
      ],
    },
    {
      title: 'A question about a pay slip',
      lines: [
        'W: Hello, I have a question about my pay slip. There is a deduction called "pension" that I have not seen before.',
        'M: Yes, all employees are now enrolled in the company pension plan after six months of service.',
        'W: I did not realize. How much is it?',
        'M: Three percent of your salary, and the company adds another five.',
        'W: That sounds like a good deal. Can I pay in more?',
        'M: Yes. I will email you the form.',
      ],
      qs: [
        ['What is the woman asking about?', 'A deduction on her pay slip', 'A pay rise', 'A late payment', 'Her tax number', 'Lời thoại.'],
        ['How much does the company add?', 'Five percent', 'Three percent', 'Six percent', 'Eight percent', 'Lời thoại.'],
        ['What will the man send?', 'A form', 'A new pay slip', 'A contract', 'A refund', 'Câu cuối.'],
      ],
    },
    {
      title: 'Choosing an advertising option',
      lines: [
        'W: We have fifteen hundred dollars to advertise the summer sale. Here are the newspaper\'s options.',
        'M: We want as many readers as possible to see it.',
        'W: The front page is over our budget.',
        'M: Then let us take the option with the most readers that we can afford.',
        'W: I will book it today.',
      ],
      graphic: ['Newspaper advertising', 'Option | Readers | Price\nFront page | 200,000 | $2,400\nPage 3 | 150,000 | $1,400\nBusiness section | 60,000 | $900\nClassified | 30,000 | $300'],
      qs: [
        ['What are the speakers advertising?', 'A summer sale', 'A job', 'A new store', 'A newspaper', 'Lời thoại.'],
        ['What is their budget?', '$1,500', '$2,400', '$900', '$300', 'Lời thoại.'],
        ['Look at the graphic. Which option will they book?', 'Page 3', 'Front page', 'Business section', 'Classified', 'Nhiều độc giả nhất trong ngân sách: Page 3 ($1,400).'],
      ],
    },
  ],
  p4: [
    {
      title: 'Announcement at a railway station',
      lines: [
        'M: This is a platform announcement. The fourteen twenty service to Glasgow is delayed by approximately twenty-five minutes because of a fault with the train.',
        'M: Passengers may use their tickets on the fourteen forty-five service from platform eight.',
        'M: We apologize for the delay. Refreshments are available in the waiting room.',
      ],
      qs: [
        ['Why is the train delayed?', 'There is a fault with the train.', 'The weather is bad.', 'The driver is late.', 'The track is closed.', 'Thông báo.'],
        ['What may passengers do?', 'Take a later train with the same ticket', 'Get a refund immediately', 'Board at platform four', 'Travel by bus', 'Thông báo.'],
        ['Where are refreshments available?', 'In the waiting room', 'On the platform', 'On the train', 'At the ticket office', 'Câu cuối.'],
      ],
    },
    {
      title: 'Voicemail from a customer',
      lines: [
        'W: Hello, this is Julia Marsh from Marsh Dental. I ordered two dentist\'s chairs from you last month.',
        'W: They were delivered this morning, but one of them has a torn seat. The other is perfect.',
        'W: I have taken photographs and emailed them to you. Could you arrange a replacement as soon as possible? We open our new clinic on the first of next month.',
      ],
      qs: [
        ['What did the speaker order?', "Dentist's chairs", 'Office desks', 'Cameras', 'Computers', 'Lời nhắn.'],
        ['What is the problem?', 'One chair is damaged.', 'Both chairs are missing.', 'The wrong color was sent.', 'The delivery was late.', 'Lời nhắn.'],
        ['What has the speaker sent by email?', 'Photographs', 'An invoice', 'A complaint form', 'A new order', 'Lời nhắn.'],
      ],
    },
    {
      title: 'Advertisement for a garden center',
      lines: [
        'M: Spring is here, and Greenacres Garden Center has everything you need for a beautiful garden.',
        'M: This weekend, all fruit trees are two for the price of one, and our experts will give free advice on planting. Children can plant a sunflower seed to take home.',
        'M: We are open from nine to six, with a café serving homemade cakes. Greenacres, on the Old Mill Road.',
      ],
      qs: [
        ['What is the offer on fruit trees?', 'Two for the price of one', 'Half price', 'A free tree', 'Ten percent off', 'Quảng cáo.'],
        ['What can children do?', 'Plant a seed', 'Feed animals', 'Paint pots', 'Ride a train', 'Quảng cáo.'],
        ['What does the café serve?', 'Homemade cakes', 'Hot meals only', 'Fruit', 'Nothing on weekends', 'Câu cuối.'],
      ],
    },
    {
      title: 'Talk to hotel staff',
      lines: [
        'W: Good morning, everyone. Tomorrow we welcome two hundred guests for the international medical conference.',
        'W: Many of them will arrive after long flights, so please be patient and helpful. The front desk will have three extra staff from four p.m.',
        'W: Housekeeping, please make sure every room has a welcome letter and a bottle of water. And remember, breakfast will start half an hour earlier, at six, for the whole week.',
      ],
      qs: [
        ['Why will the hotel be busy tomorrow?', 'A conference is starting.', 'A wedding is being held.', 'It is a public holiday.', 'A tour group is leaving.', 'Lời nói.'],
        ['What should housekeeping put in every room?', 'A welcome letter and water', 'Flowers', 'A map', 'Extra towels', 'Lời nói.'],
        ['What will change about breakfast?', 'It will start earlier.', 'It will be served in rooms.', 'It will cost more.', 'It will end at six.', 'Câu cuối.'],
      ],
    },
    {
      title: 'Recorded message for a delivery company',
      lines: [
        'M: Thank you for calling SwiftShip. If you are expecting a delivery today, you can follow it on our website using your tracking number.',
        'M: Because of heavy snow in the north of the country, deliveries to that region may be delayed by up to two days.',
        'M: To change your delivery date or address, press one. To speak to an agent, press two.',
      ],
      qs: [
        ['How can customers follow a delivery?', 'On the website', 'By pressing one', 'By visiting a depot', 'By text message only', 'Thông báo.'],
        ['Why may some deliveries be late?', 'Because of snow', 'Because of a strike', 'Because of a holiday', 'Because of a computer fault', 'Thông báo.'],
        ['Why would a caller press one?', 'To change a delivery date or address', 'To speak to an agent', 'To make a complaint', 'To pay a bill', 'Thông báo.'],
      ],
    },
    {
      title: 'Excerpt from a meeting about a product recall',
      lines: [
        'W: As you may know, we have found a fault in the charger for our model X2 speaker. It can become too hot.',
        'W: Nobody has been hurt, but we are recalling all chargers sold since March. Customers will receive a new one free of charge.',
        'W: The customer service team should expect a lot of calls this week. I have prepared a list of answers to the most common questions, which you will find in your email.',
      ],
      qs: [
        ['What is wrong with the charger?', 'It can overheat.', 'It is too slow.', 'It is the wrong size.', 'It makes a noise.', 'Lời nói.'],
        ['What will customers receive?', 'A free replacement', 'A refund', 'A new speaker', 'A discount', 'Lời nói.'],
        ['What has the speaker prepared?', 'A list of answers', 'A new design', 'A press advertisement', 'A training video', 'Câu cuối.'],
      ],
    },
    {
      title: 'News report on a local business',
      lines: [
        'M: A family bakery in the old town has become an unexpected success online.',
        'M: Three months ago, the owner\'s daughter began posting short videos of her father making bread. The videos have now been watched more than ten million times.',
        'M: The bakery has hired four new employees and now ships its bread across the country. The family plans to open a second shop in the capital next year.',
      ],
      qs: [
        ['How did the bakery become well known?', 'Through online videos', 'Through a television show', 'Through a newspaper article', 'Through a competition', 'Bản tin.'],
        ['Who makes the videos?', "The owner's daughter", 'The owner', 'A customer', 'A journalist', 'Bản tin.'],
        ['What does the family plan to do next year?', 'Open a second shop', 'Sell the bakery', 'Stop shipping bread', 'Move abroad', 'Câu cuối.'],
      ],
    },
    {
      title: 'Message about a team schedule',
      lines: [
        'W: Hi, team. This is Rosa with next week\'s on-call schedule.',
        'W: There is one change. The person who was on call on the day with the system update has swapped with the person on Friday, because he will be on vacation. The system update is on Tuesday.',
        'W: Everyone else stays the same. Please keep your phones on.',
      ],
      graphic: ['On-call schedule – original', 'Day | Engineer\nMonday | Anna\nTuesday | Ben\nWednesday | Chloe\nThursday | Dev\nFriday | Emil'],
      qs: [
        ['What is the message about?', 'An on-call schedule', 'A vacation policy', 'A new system', 'A team lunch', 'Lời nhắn.'],
        ['Look at the graphic. Who will now be on call on Tuesday?', 'Emil', 'Ben', 'Anna', 'Dev', 'Ben (thứ Ba) đổi với Emil (thứ Sáu).'],
        ['What are listeners asked to do?', 'Keep their phones on', 'Come in early', 'Update the system', 'Email Rosa', 'Câu cuối.'],
      ],
    },
  ],
};
