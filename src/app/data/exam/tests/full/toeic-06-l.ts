/** TOEIC đề 6 – phần Nghe bổ sung để đủ 100 câu (xem ghi chú "ĐỀ ĐẦY ĐỦ" trong helpers.ts) */
import { RawToeicL } from '../helpers';

export const L: RawToeicL = {
  p2: [
    ['Where should I put these boxes?', 'In the corner by the window.', 'About twenty of them.', 'They are quite heavy.', 'Where → vị trí.'],
    ['Who approved the overtime request?', 'The department head.', 'For ten hours.', 'It is over time.', 'Who → người duyệt.'],
    ['When is the product catalog due?', 'At the end of next week.', 'In full color.', 'To the printer.', 'When → hạn.'],
    ['How was the trade show in Berlin?', 'Very successful. We met a lot of buyers.', 'By plane.', 'For four days.', 'How was → đánh giá.'],
    ['Would you like to see the wine list?', 'Just sparkling water for me, thanks.', 'It is listed here.', 'I saw it yesterday.', 'Lời mời → từ chối lịch sự.'],
    ['Why is there a line outside the store?', 'A new phone goes on sale today.', 'It is a long line.', 'At the store entrance.', 'Why → lý do.'],
    ['Has anyone seen the key to the storage room?', 'Tom had it this morning.', 'It is a key issue.', 'In the storage room.', 'Câu hỏi Yes/No → thông tin người giữ.'],
    ['Which train goes to the airport?', 'The one on platform three.', 'Every fifteen minutes.', 'About thirty minutes.', 'Which → xác định.'],
    ["You're attending the conference, aren't you?", 'Yes, I am presenting on Friday.', 'It was a long conference.', 'In the conference room.', 'Câu hỏi đuôi → xác nhận.'],
    ['Could I borrow your stapler?', 'Of course, it is on my desk.', 'Twenty pages.', 'I borrowed a book.', 'Lời nhờ → đồng ý.'],
    ['How many guests are we expecting?', 'Around eighty.', 'At seven o\'clock.', 'In the garden.', 'How many → số lượng.'],
    ['The courier has arrived with a package for you.', 'I will be right down.', 'It arrived late.', 'A pack of pens.', 'Câu thông báo → phản hồi hành động.'],
    ['Should we order pizza or sandwiches for the meeting?', 'Sandwiches are easier to eat.', 'Yes, we should.', 'At noon.', 'Câu hỏi lựa chọn.'],
    ['Is the swimming pool open to non-members?', 'Only on weekends.', 'It is very deep.', 'The members voted.', 'Câu hỏi Yes/No → trả lời có điều kiện.'],
    ["Why don't you apply for the supervisor position?", 'I might. When is the deadline?', 'Because I applied it.', 'It is a super idea.', 'Lời gợi ý → cân nhắc và hỏi lại.'],
    ['Whose presentation is first on the agenda?', "Ms. Ahmed's.", 'At nine thirty.', 'It is the first floor.', 'Whose → người.'],
    ['I think I left my umbrella in the taxi.', 'You should call the taxi company.', 'It is raining hard.', 'A yellow one.', 'Vấn đề → lời khuyên.'],
  ],
  p3: [
    {
      title: 'A customer orders flowers',
      lines: [
        'W: Hello, I would like to send flowers to my mother for her birthday tomorrow.',
        'M: Certainly. What kind would you like?',
        'W: Something bright. She loves yellow.',
        'M: We have a lovely bouquet of sunflowers and roses for thirty-five dollars. Delivery in the city is free.',
        'W: Perfect. Can it arrive before noon?',
        'M: Yes. Would you like to include a card?',
      ],
      qs: [
        ['Why is the woman sending flowers?', 'For a birthday', 'For a wedding', 'To say thank you', 'For a new job', '"for her birthday tomorrow".'],
        ['What does the man say about delivery?', 'It is free in the city.', 'It costs five dollars.', 'It takes two days.', 'It is not available.', '"Delivery in the city is free".'],
        ['What does the man offer?', 'To add a card', 'To give a discount', 'To send chocolates', 'To deliver today', '"Would you like to include a card?"'],
      ],
    },
    {
      title: 'A broken photocopier',
      lines: [
        'M: Sarah, the photocopier on our floor is broken again. I need thirty copies of this contract before the two o\'clock meeting.',
        'W: Try the one in the marketing department. It is brand new.',
        'M: Do I need a code?',
        'W: Yes, but you can use mine. It is four seven one nine.',
        'M: Thanks. I will report our machine to the service company as well.',
      ],
      qs: [
        ['What does the man need?', 'Copies of a contract', 'A new photocopier', 'A meeting room', 'A marketing report', '"thirty copies of this contract".'],
        ['What does the woman suggest?', 'Using a copier in another department', 'Postponing the meeting', 'Emailing the contract', 'Going to a print shop', '"Try the one in the marketing department".'],
        ['What will the man also do?', 'Report the broken machine', 'Buy more paper', 'Change his code', 'Call the clients', '"I will report our machine to the service company".'],
      ],
    },
    {
      title: 'Planning a team lunch',
      lines: [
        'W: We should take Miguel out for lunch on his last day. He has been here for nine years.',
        'M: Good idea. When is he leaving?',
        'W: Next Friday. I was thinking of the Thai restaurant on Park Road.',
        'M: He once told me he does not like spicy food. How about the Italian place instead?',
        'W: Sure. I will book a table for twelve people and collect money for a gift.',
      ],
      qs: [
        ['Why are the speakers planning a lunch?', 'A colleague is leaving.', 'A new manager has arrived.', 'It is someone\'s birthday.', 'A project is finished.', '"take Miguel out for lunch on his last day".'],
        ['Why does the man suggest a different restaurant?', 'Miguel dislikes spicy food.', 'The Thai restaurant is closed.', 'It is too expensive.', 'It is too far.', '"he does not like spicy food".'],
        ['What will the woman collect money for?', 'A gift', 'The lunch', 'A taxi', 'A party room', '"collect money for a gift".'],
      ],
    },
    {
      title: 'A late report',
      lines: [
        'M: Hello, Ms. Li. I am afraid the market report will be two days late.',
        'W: That is a problem. The client is expecting it on Wednesday.',
        'M: I know. One of my researchers has been ill, and the data from Asia is incomplete.',
        'W: Could you send the sections that are finished on Wednesday and the rest on Friday?',
        'M: Yes, that is possible. I will explain the situation to the client myself.',
      ],
      qs: [
        ['What is the man reporting?', 'A delay', 'A price increase', 'A new client', 'A staff change', '"the market report will be two days late".'],
        ['What is one cause of the problem?', 'A researcher has been ill.', 'The client changed the order.', 'A computer broke down.', 'The budget was cut.', '"One of my researchers has been ill".'],
        ['What does the woman suggest?', 'Sending the report in two parts', 'Canceling the report', 'Hiring more researchers', 'Asking the client to wait a month', '"send the sections that are finished on Wednesday and the rest on Friday".'],
      ],
    },
    {
      title: 'A parking permit',
      lines: [
        'W: Good morning. I have just started working here, and I need a parking permit.',
        'M: Welcome. I will need your employee number and your car registration.',
        'W: Here they are. Which lot can I use?',
        'M: New staff are assigned to Lot C, behind the warehouse. It is a five-minute walk.',
        'W: Is there any chance of a space closer to the office?',
        'M: You can join the waiting list for Lot A.',
      ],
      qs: [
        ['What does the woman need?', 'A parking permit', 'An employee number', 'A new car', 'An office key', '"I need a parking permit".'],
        ['Where will the woman park?', 'In Lot C', 'In Lot A', 'On the street', 'In the warehouse', '"New staff are assigned to Lot C".'],
        ['What can the woman do to get a closer space?', 'Join a waiting list', 'Pay an extra fee', 'Arrive earlier', 'Ask her manager', '"You can join the waiting list for Lot A".'],
      ],
    },
    {
      title: 'A change in a hotel booking',
      lines: [
        'M: Hello, I have a reservation for two nights from the tenth of June, under the name Brandt. I need to add a third night.',
        'W: Let me check. I am sorry, we are fully booked on the twelfth because of a medical conference.',
        'M: Oh dear. Do you know of another hotel nearby?',
        'W: Our sister hotel, the Park Lodge, is ten minutes away and has rooms that night. I can make the booking for you.',
        'M: Yes, please.',
      ],
      qs: [
        ['What does the man want to do?', 'Extend his stay', 'Cancel his booking', 'Change his room', 'Arrive earlier', '"I need to add a third night".'],
        ['Why is the hotel full on the twelfth?', 'A conference is taking place.', 'The hotel is being renovated.', 'There is a wedding.', 'It is a public holiday.', '"because of a medical conference".'],
        ['What does the woman offer to do?', 'Book a room at another hotel', 'Put him on a waiting list', 'Give him a refund', 'Find a taxi', '"I can make the booking for you".'],
      ],
    },
    {
      title: 'Choosing office furniture',
      lines: [
        'W: I have looked at the desks in the catalog. The adjustable ones are better for the staff, but they cost twice as much.',
        'M: How many do we need?',
        'W: Fifteen.',
        'M: Our budget will not cover that. Could we buy five adjustable desks now, for the people with back problems, and the rest next year?',
        'W: That is a sensible solution. I will ask who needs one most.',
      ],
      qs: [
        ['What is the advantage of the adjustable desks?', 'They are better for staff.', 'They are cheaper.', 'They are smaller.', 'They arrive faster.', '"The adjustable ones are better for the staff".'],
        ['What is the problem?', 'The cost is too high.', 'The desks are out of stock.', 'The office is too small.', 'The catalog is old.', '"Our budget will not cover that".'],
        ['What will the woman do?', 'Find out who needs a desk most', 'Order fifteen desks', 'Ask for a bigger budget', 'Return the catalog', '"I will ask who needs one most".'],
      ],
    },
    {
      title: 'A missed appointment',
      lines: [
        'M: Hello, this is Daniel Reyes. I had an appointment at ten this morning, but my bus was stuck in traffic.',
        'W: I see. Unfortunately, Dr. Shah has patients for the rest of the day.',
        'M: I understand. When is the next available time?',
        'W: Thursday at four fifteen. Shall I book that for you?',
        'M: Yes, please. And I am sorry for missing today.',
      ],
      qs: [
        ['Why did the man miss his appointment?', 'His bus was delayed.', 'He forgot the time.', 'He was ill.', 'He was at work.', '"my bus was stuck in traffic".'],
        ['Why can the doctor not see him today?', 'She is fully booked.', 'She is away.', 'The clinic is closing.', 'He has no insurance.', '"Dr. Shah has patients for the rest of the day".'],
        ['When is the new appointment?', 'Thursday at 4:15', 'Thursday at 10:00', 'Tomorrow at 4:15', 'Friday at 4:00', '"Thursday at four fifteen".'],
      ],
    },
    {
      title: 'A new supplier',
      lines: [
        'W: I met with a new coffee supplier yesterday. Their beans are excellent, and they are cheaper than our current supplier.',
        'M: That sounds promising. Are there any disadvantages?',
        'W: They deliver only once a week, on Mondays.',
        'M: That could be a problem if we run out. Can we order a small amount first and see how it goes?',
        'W: Yes, they offer a trial order of ten kilos.',
      ],
      qs: [
        ['What does the woman like about the new supplier?', 'Good quality at a lower price', 'Daily delivery', 'A wide choice of teas', 'A local office', '"Their beans are excellent, and they are cheaper".'],
        ['What disadvantage is mentioned?', 'Deliveries are only weekly.', 'The minimum order is large.', 'Payment is in advance.', 'The beans are imported.', '"They deliver only once a week".'],
        ['What does the man suggest?', 'Placing a small trial order', 'Keeping the current supplier', 'Visiting the factory', 'Asking for a discount', '"order a small amount first".'],
      ],
    },
    {
      title: 'A question about a seminar room',
      lines: [
        'M: Hi, I am giving a seminar in Room 204 at three. Is there a microphone in the room?',
        'W: Not normally, but I can bring one from the equipment office. How many people are you expecting?',
        'M: About seventy.',
        'W: Room 204 holds only fifty. You should move to the lecture hall on the ground floor.',
        'M: Is it free?',
        'W: Yes, until five. I will change the booking and put a notice on the door of 204.',
      ],
      qs: [
        ['What does the man ask about?', 'A microphone', 'A projector', 'Parking', 'Refreshments', '"Is there a microphone in the room?"'],
        ['Why does the woman suggest a different room?', 'Room 204 is too small.', 'Room 204 is being cleaned.', 'Room 204 has no windows.', 'Room 204 is booked.', '"Room 204 holds only fifty".'],
        ['What will the woman do?', 'Put a notice on a door', 'Cancel the seminar', 'Give the seminar herself', 'Order more chairs', '"put a notice on the door of 204".'],
      ],
    },
    {
      title: 'Buying tickets for a show',
      lines: [
        'W: Hello, I would like two tickets for Saturday evening\'s performance.',
        'M: Certainly. Here is the seating plan with prices. Which section would you like?',
        'W: We want to be as close to the stage as possible, but I do not want to spend more than fifty dollars per ticket.',
        'M: Then I suggest the section just behind the front rows.',
        'W: That sounds fine. I will take two.',
      ],
      graphic: ['Ticket prices', 'Section | Location | Price\nA | Front rows | $65\nB | Middle rows | $48\nC | Back rows | $35\nD | Balcony | $25'],
      qs: [
        ['When is the performance?', 'On Saturday evening', 'On Friday evening', 'On Sunday afternoon', 'Tonight', '"Saturday evening\'s performance".'],
        ['What is the woman\'s price limit per ticket?', '$50', '$65', '$35', '$25', '"not... more than fifty dollars per ticket".'],
        ['Look at the graphic. How much will the woman pay in total?', '$96', '$130', '$70', '$50', 'Khu B ngay sau hàng đầu, $48 × 2 = $96.'],
      ],
    },
  ],
  p4: [
    {
      title: 'Announcement on an airplane',
      lines: [
        'M: Ladies and gentlemen, this is your captain speaking. We are beginning our descent into Madrid, where the local time is twenty past four in the afternoon.',
        'M: The weather is sunny, and the temperature is twenty-six degrees. We expect to land about ten minutes ahead of schedule.',
        'M: Please return to your seats, fasten your seat belts, and put your tray tables away.',
      ],
      qs: [
        ['Who is speaking?', 'A pilot', 'A flight attendant', 'An airport official', 'A tour guide', '"this is your captain speaking".'],
        ['What does the speaker say about the arrival?', 'It will be early.', 'It will be late.', 'It will be on time exactly.', 'It will be in another city.', '"about ten minutes ahead of schedule".'],
        ['What are passengers asked to do?', 'Fasten their seat belts', 'Collect their bags', 'Fill in a form', 'Turn on their phones', '"fasten your seat belts".'],
      ],
    },
    {
      title: 'Voicemail from a recruiter',
      lines: [
        'W: Hello, Mr. Osei. This is Linda Park from Apex Recruitment.',
        'W: I have reviewed your résumé, and I think you would be a good match for a position at a large logistics company. They are looking for a warehouse manager with at least five years of experience.',
        'W: The salary is very competitive. If you are interested, please call me before Thursday, because the company begins interviews next week.',
      ],
      qs: [
        ['Why is the speaker calling?', 'To tell the listener about a job', 'To confirm an interview', 'To ask for a reference', 'To request a payment', '"a good match for a position".'],
        ['What kind of position is it?', 'Warehouse manager', 'Truck driver', 'Recruiter', 'Sales assistant', '"a warehouse manager".'],
        ['Why should the listener call before Thursday?', 'Interviews start next week.', 'The position will close on Thursday.', 'The speaker is going on vacation.', 'The salary will change.', '"the company begins interviews next week".'],
      ],
    },
    {
      title: 'Advertisement for a home security company',
      lines: [
        'M: Is your home protected while you are away? With SafeGuard, you can watch your house from your phone, wherever you are.',
        'M: Our system includes two cameras, door sensors, and an alarm that contacts our control center twenty-four hours a day.',
        'M: Installation takes less than two hours, and this month it is free. Call five five five, zero one eight eight for a no-obligation visit.',
      ],
      qs: [
        ['What is being advertised?', 'A home security system', 'A mobile phone', 'A travel agency', 'A cleaning service', '"Is your home protected while you are away?"'],
        ['What does the system include?', 'Cameras and sensors', 'A guard dog', 'A new front door', 'Window bars', '"two cameras, door sensors, and an alarm".'],
        ['What is free this month?', 'Installation', 'The cameras', 'The first year of service', 'A second alarm', '"this month it is free".'],
      ],
    },
    {
      title: 'Talk at a town meeting',
      lines: [
        'W: Thank you all for coming this evening. As you know, the council plans to close Bridge Street to cars on Saturdays, starting in May.',
        'W: The aim is to make the town center safer and more pleasant for shoppers. Delivery vehicles will still be allowed before ten in the morning.',
        'W: We know that some shop owners are concerned about losing customers. That is why the trial will last only three months. Now I would like to hear your comments.',
      ],
      qs: [
        ['What is the council planning?', 'To close a street to cars on Saturdays', 'To build a new bridge', 'To open a shopping mall', 'To raise parking fees', '"close Bridge Street to cars on Saturdays".'],
        ['When may delivery vehicles use the street?', 'Before ten in the morning', 'At any time', 'After six in the evening', 'Only on weekdays', '"before ten in the morning".'],
        ['What will the speaker do next?', 'Listen to comments', 'Show a film', 'Introduce the mayor', 'End the meeting', '"I would like to hear your comments".'],
      ],
    },
    {
      title: 'Telephone message from a printing company',
      lines: [
        'M: Hi, this is Omar from Print Express, calling for Ms. Delgado.',
        'M: Your order of two thousand catalogs is ready. However, we noticed that the telephone number on the back cover has only six digits. We think one digit may be missing.',
        'M: We have not started the final printing yet. Could you call me today to confirm the number? If we hear from you by three, we can still deliver tomorrow.',
      ],
      qs: [
        ['What did the listener order?', 'Catalogs', 'Business cards', 'Posters', 'Telephone books', '"Your order of two thousand catalogs".'],
        ['What problem did the speaker notice?', 'A possible error in a phone number', 'A wrong color', 'A missing page', 'A late payment', '"the telephone number... has only six digits".'],
        ['What must the listener do for delivery tomorrow?', 'Call back by three o\'clock', 'Visit the print shop', 'Pay in advance', 'Send a new design', '"If we hear from you by three".'],
      ],
    },
    {
      title: 'Introduction of a training session',
      lines: [
        'W: Welcome to this afternoon\'s session on email security. I am Priya from the IT department.',
        'W: Last month, three employees clicked on a link in a fake email, and it took us two days to repair the damage. Today I will show you how to recognize such messages.',
        'W: The session lasts forty-five minutes. At the end, there will be a short quiz, and everyone who passes will receive a certificate.',
      ],
      qs: [
        ['What is the session about?', 'Email security', 'Writing emails', 'New computers', 'Online meetings', '"session on email security".'],
        ['What happened last month?', 'Some employees clicked on a fake link.', 'The email system was replaced.', 'Three computers were stolen.', 'A quiz was held.', '"three employees clicked on a link in a fake email".'],
        ['What will happen at the end of the session?', 'A quiz', 'A film', 'A coffee break', 'A discussion with managers', '"there will be a short quiz".'],
      ],
    },
    {
      title: 'News report about a company expansion',
      lines: [
        'M: In business news, the furniture maker Oakline has announced that it will open a second factory in the north of the country next year.',
        'M: The new plant will employ three hundred people and produce kitchen cabinets for export to Europe. The company says it chose the location because of the nearby port.',
        'M: Hiring will begin in January, and Oakline will hold a job fair at the town hall on the fifteenth.',
      ],
      qs: [
        ['What will Oakline do next year?', 'Open a new factory', 'Close a factory', 'Move its head office', 'Stop exporting', '"open a second factory".'],
        ['Why was the location chosen?', 'It is close to a port.', 'Land is cheap there.', 'Workers are well trained.', 'The government offered money.', '"because of the nearby port".'],
        ['Where will the job fair be held?', 'At the town hall', 'At the factory', 'At the port', 'Online', '"a job fair at the town hall".'],
      ],
    },
    {
      title: 'Message about a delivery route',
      lines: [
        'W: Good morning, drivers. Here is today\'s update. Because of a road closure in the east of the city, the stop that is normally last on Route B will be made first. The other stops will follow in their usual order.',
        'W: Please remember to scan every package when you deliver it.',
        'W: If you have any problems, call the dispatch office.',
      ],
      graphic: ['Route B – usual order', 'Stop | Customer\n1 | Hill Pharmacy\n2 | Green Grocers\n3 | City Books\n4 | Eastside Hardware'],
      qs: [
        ['Why is the route being changed?', 'A road is closed.', 'A truck broke down.', 'A customer complained.', 'A driver is absent.', '"Because of a road closure".'],
        ['Look at the graphic. Where will the drivers on Route B go first today?', 'Eastside Hardware', 'Hill Pharmacy', 'Green Grocers', 'City Books', 'Điểm dừng cuối thường lệ sẽ được giao trước.'],
        ['What are drivers reminded to do?', 'Scan each package', 'Collect payments', 'Wear a uniform', 'Fill the tank', '"scan every package".'],
      ],
    },
  ],
};
