/** TOEIC đề 10 – phần Nghe bổ sung để đủ 100 câu (xem ghi chú "ĐỀ ĐẦY ĐỦ" trong helpers.ts) */
import { RawToeicL } from '../helpers';

export const L: RawToeicL = {
  p2: [
    ['Where should visitors sign in?', 'At the security desk in the lobby.', 'With a black pen.', 'Before nine.', 'Where → vị trí.'],
    ['Who designed the new brochure?', 'A freelance designer.', 'In full color.', 'Two weeks ago.', 'Who → người thiết kế.'],
    ['When will the elevator be repaired?', 'The technician is coming tomorrow.', 'On the third floor.', 'It is very slow.', 'When → thời gian.'],
    ['How long is the warranty on this laptop?', 'Three years.', 'About two kilos.', 'In the box.', 'How long → thời hạn.'],
    ['Would you like a receipt?', 'Yes, please. I need it for my expenses.', 'I received it.', 'By credit card.', 'Lời hỏi → nhận kèm lý do.'],
    ['Why is the training session being repeated?', 'Several people missed the first one.', 'In the main hall.', 'For two hours.', 'Why → lý do.'],
    ['Do you know if the bank is open on Saturdays?', 'Only until noon.', 'On the corner.', 'I opened an account.', 'Câu hỏi gián tiếp.'],
    ['Which color do you prefer for the logo?', 'The dark green.', 'It is a logo.', 'On the front page.', 'Which → chọn.'],
    ["You have worked with this client before, haven't you?", 'Yes, for about two years.', 'It works well.', 'Before lunch.', 'Câu hỏi đuôi.'],
    ['Could you remind me to call the supplier at three?', 'Sure, I will set an alarm.', 'I reminded him.', 'Three suppliers.', 'Lời nhờ → đồng ý.'],
    ['How many chairs fit in this room?', 'About forty.', 'Against the wall.', 'They are plastic.', 'How many → số lượng.'],
    ['The courier left a package at the front desk.', 'Thanks, I will pick it up now.', 'It left at noon.', 'A front seat.', 'Thông báo → cảm ơn.'],
    ['Should I book the morning flight or the evening one?', 'The morning one, so we arrive before lunch.', 'Yes, please book it.', 'At the airport.', 'Câu hỏi lựa chọn.'],
    ['Is there a charge for delivery?', 'Not for orders over fifty dollars.', 'It was delivered.', 'In charge of sales.', 'Câu hỏi Yes/No → điều kiện.'],
    ["Why don't we try a different supplier?", 'I know a good one in Hamburg.', 'Because it was different.', 'They supplied it.', 'Lời gợi ý → tán thành.'],
    ['Whose car is parked in my space?', 'I think it is the new manager\'s.', 'In the car park.', 'A red one.', 'Whose → chủ xe.'],
    ['I cannot find the file you sent me.', 'Check your spam folder.', 'It is a large file.', 'I found it easy.', 'Vấn đề → gợi ý.'],
  ],
  p3: [
    {
      title: 'A customer at a pharmacy',
      lines: [
        'W: Hello, I have a sore throat and a cough. Can you recommend something?',
        'M: How long have you had the cough?',
        'W: About three days.',
        'M: These tablets should help with the throat, and this syrup is good for a dry cough. Take it three times a day after meals.',
        'W: Thank you. Do I need to see a doctor?',
        'M: Only if you are not better by the end of the week.',
      ],
      qs: [
        ['What is the woman\'s problem?', 'A sore throat and a cough', 'A headache', 'A broken arm', 'A skin rash', 'Lời thoại đầu.'],
        ['How often should she take the syrup?', 'Three times a day', 'Once a day', 'Every hour', 'Before meals only', '"three times a day after meals".'],
        ['When should she see a doctor?', 'If she is not better by the end of the week', 'Immediately', 'Tomorrow morning', 'After three days', 'Câu cuối.'],
      ],
    },
    {
      title: 'Preparing a sales presentation',
      lines: [
        'M: The presentation for Kessler Group is on Wednesday. How are the slides coming along?',
        'W: I have finished the product section. I am still waiting for the price list from finance.',
        'M: I will ask them to send it today. How long is the presentation?',
        'W: About twenty-five minutes. But they asked for thirty at most, including questions.',
        'M: Then we should cut three or four slides.',
      ],
      qs: [
        ['What is the woman waiting for?', 'A price list', 'A product sample', 'A client email', 'A meeting room', '"waiting for the price list from finance".'],
        ['What will the man do?', 'Contact the finance department', 'Give the presentation', 'Call the client', 'Print the slides', '"I will ask them to send it today".'],
        ['Why does the man want to remove some slides?', 'The presentation is too long.', 'The slides are out of date.', 'The client dislikes slides.', 'The projector is slow.', 'Tối đa 30 phút kể cả hỏi đáp.'],
      ],
    },
    {
      title: 'A hotel booking error',
      lines: [
        'W: Good evening. I have a reservation for a double room, under the name Schmidt.',
        'M: I am sorry, Ms. Schmidt. I have your booking, but it shows a single room.',
        'W: That cannot be right. My husband is arriving tomorrow.',
        'M: Let me see what I can do. We have a double on the fifth floor. As the mistake was ours, there will be no extra charge.',
        'W: Thank you. That is very kind.',
      ],
      qs: [
        ['What is the problem?', 'The wrong type of room was booked.', 'The hotel is full.', 'The woman lost her confirmation.', 'The price was too high.', 'Phòng đơn thay vì phòng đôi.'],
        ['Who is arriving tomorrow?', "The woman's husband", 'Her colleague', 'Her daughter', 'A client', '"My husband is arriving tomorrow".'],
        ['What does the man offer?', 'A double room at no extra cost', 'A discount on dinner', 'A refund', 'A room at another hotel', 'Lời thoại gần cuối.'],
      ],
    },
    {
      title: 'A delivery to the wrong address',
      lines: [
        'M: Hello, I ordered a bookcase from your store. According to the tracking page, it was delivered yesterday, but I never received it.',
        'W: Let me check. It was delivered to fourteen Oak Street.',
        'M: I live at forty Oak Street.',
        'W: I apologize. The driver must have misread the number. I will send someone to collect it and bring it to you this afternoon.',
      ],
      qs: [
        ['What did the man order?', 'A bookcase', 'Some books', 'A desk', 'A tracking device', 'Lời thoại đầu.'],
        ['What went wrong?', 'It was delivered to the wrong house.', 'It was damaged.', 'It was never sent.', 'It arrived late at night.', 'Số 14 thay vì 40.'],
        ['What will the woman do?', 'Have the item brought to the man today', 'Give a refund', 'Send a new bookcase next week', 'Ask the man to collect it', 'Câu cuối.'],
      ],
    },
    {
      title: 'Discussing a staff party',
      lines: [
        'W: Where shall we hold the end-of-year party this time?',
        'M: Last year\'s restaurant was too small. People could hardly move.',
        'W: True. What about the hotel by the river? It has a large room with a dance floor.',
        'M: Sounds good, but it might be expensive.',
        'W: I will ask for a price for eighty people, including dinner.',
      ],
      qs: [
        ['What are the speakers planning?', 'An end-of-year party', 'A wedding', 'A conference', 'A training day', 'Lời thoại đầu.'],
        ['What was wrong with last year\'s venue?', 'It was too small.', 'It was too far.', 'The food was poor.', 'It was too expensive.', '"too small".'],
        ['What will the woman do?', 'Request a price', 'Book a band', 'Visit the restaurant', 'Send invitations', 'Câu cuối.'],
      ],
    },
    {
      title: 'A new company car',
      lines: [
        'M: My company car is due to be replaced next month. Can I choose the model?',
        'W: Yes, from this list. All the cars are hybrids now, to reduce fuel costs.',
        'M: I drive long distances, so I need something comfortable.',
        'W: Then I would suggest the larger sedan. You can test drive it at the dealer on Friday.',
        'M: Great. What do I need to bring?',
        'W: Just your driver\'s license.',
      ],
      qs: [
        ['What will happen next month?', "The man's car will be replaced.", 'The man will change jobs.', 'Fuel prices will rise.', 'A dealer will visit.', 'Lời thoại đầu.'],
        ['Why are all the cars hybrids?', 'To lower fuel costs', 'To meet a law', 'Because they are cheaper to buy', 'Because drivers asked for them', '"to reduce fuel costs".'],
        ['What must the man bring on Friday?', "His driver's license", 'His passport', 'A deposit', 'His old car', 'Câu cuối.'],
      ],
    },
    {
      title: 'An office heating problem',
      lines: [
        'W: It is freezing in the accounts office this morning.',
        'M: I know. The heating engineer says a part has failed, and the new one will not arrive until Thursday.',
        'W: We cannot work like this for three days.',
        'M: I have ordered six electric heaters. They should be here within the hour.',
        'W: Thank you. Could staff also work from home until it is fixed?',
        'M: I will ask the director.',
      ],
      qs: [
        ['What is the problem?', 'The heating is broken.', 'The office is too hot.', 'The power is off.', 'A window is stuck.', 'Lời thoại.'],
        ['When will the new part arrive?', 'On Thursday', 'Within the hour', 'Tomorrow', 'Next week', '"will not arrive until Thursday".'],
        ['What has the man ordered?', 'Electric heaters', 'A new boiler', 'Blankets', 'Hot drinks', 'Lời thoại.'],
      ],
    },
    {
      title: 'A customer asks about a course',
      lines: [
        'M: Hi, I am interested in your evening photography course. Is it suitable for beginners?',
        'W: Yes, completely. You do not even need your own camera for the first two lessons.',
        'M: How many lessons are there?',
        'W: Eight, on Tuesday evenings. The course costs one hundred and sixty dollars.',
        'M: And if I miss a class?',
        'W: You can watch a recording on our website.',
      ],
      qs: [
        ['What does the man ask first?', 'Whether the course suits beginners', 'How much it costs', 'Where it is held', 'Who the teacher is', 'Lời thoại đầu.'],
        ['How many lessons does the course have?', 'Eight', 'Two', 'Six', 'Sixteen', '"Eight".'],
        ['What can students do if they miss a class?', 'Watch a recording', 'Get a refund', 'Join another group', 'Borrow a camera', 'Câu cuối.'],
      ],
    },
    {
      title: 'A trade show booth',
      lines: [
        'W: The organizers have sent the floor plan for the trade show. Our booth is in the far corner, next to the storage area.',
        'M: That is a poor location. Hardly anyone will walk past.',
        'W: I agree. There is a booth available near the entrance, but it costs four hundred dollars more.',
        'M: It is worth it. We spent thousands on the display.',
        'W: I will call them and change it.',
      ],
      qs: [
        ['What is wrong with the booth?', 'Its location is poor.', 'It is too small.', 'It is too expensive.', 'It has no electricity.', 'Lời thoại.'],
        ['How much more does the other booth cost?', '$400', '$4,000', '$40', '$1,000', 'Lời thoại.'],
        ['What will the woman do?', 'Contact the organizers', 'Cancel the trade show', 'Redesign the display', 'Ask for a refund', '"I will call them and change it".'],
      ],
    },
    {
      title: 'A visit to a dentist',
      lines: [
        'M: Good morning. I have an appointment with Dr. Lopez at nine fifteen.',
        'W: Good morning, Mr. Evans. Dr. Lopez is running about twenty minutes late, I am afraid.',
        'M: That is all right. Could I fill in the insurance form while I wait?',
        'W: Of course. Here it is. Has your address changed since your last visit?',
        'M: Yes, I moved in March.',
      ],
      qs: [
        ['What is the woman\'s job?', 'A receptionist', 'A dentist', 'An insurance agent', 'A pharmacist', 'Bà tiếp đón bệnh nhân.'],
        ['What does the woman tell the man?', 'The dentist is behind schedule.', 'His appointment was canceled.', 'His insurance has expired.', 'He is too late.', '"running about twenty minutes late".'],
        ['What has changed since the man\'s last visit?', 'His address', 'His dentist', 'His insurance company', 'His phone number', 'Câu cuối.'],
      ],
    },
    {
      title: 'Choosing a venue for a seminar',
      lines: [
        'W: We need a room for the seminar on the fifteenth. About seventy people will attend.',
        'M: Here are the four rooms the hotel offers. We also need a projector included in the price.',
        'W: And the budget is five hundred dollars.',
        'M: Then only one of them is suitable.',
        'W: Please reserve it today.',
      ],
      graphic: ['Hotel meeting rooms', 'Room | Capacity | Projector | Price\nMaple | 50 | Included | $350\nOak | 80 | Included | $480\nPine | 100 | Extra $100 | $450\nElm | 120 | Included | $650'],
      qs: [
        ['How many people will attend the seminar?', 'About seventy', 'About fifty', 'About one hundred', 'About fifteen', 'Lời thoại.'],
        ['What is the budget?', '$500', '$350', '$650', '$450', 'Lời thoại.'],
        ['Look at the graphic. Which room will be reserved?', 'Oak', 'Maple', 'Pine', 'Elm', 'Đủ 70 chỗ, có máy chiếu, trong $500: Oak ($480).'],
      ],
    },
  ],
  p4: [
    {
      title: 'Announcement at an airport gate',
      lines: [
        'W: Good afternoon, passengers on flight seven twenty-two to Singapore. We will begin boarding in ten minutes.',
        'W: This is a full flight, and space in the overhead lockers is limited. If you have a large carry-on bag, we invite you to check it at the gate free of charge.',
        'W: Please have your passport and boarding pass ready.',
      ],
      qs: [
        ['When will boarding begin?', 'In ten minutes', 'Immediately', 'In an hour', 'After a delay', 'Thông báo.'],
        ['What are passengers with large bags invited to do?', 'Check them at the gate for free', 'Pay an extra fee', 'Leave them behind', 'Board first', 'Thông báo.'],
        ['What should passengers have ready?', 'Passport and boarding pass', 'A visa form', 'Their luggage tags', 'A meal voucher', 'Câu cuối.'],
      ],
    },
    {
      title: 'Voicemail from a colleague',
      lines: [
        'M: Hi, Anna. It is Viktor. I am stuck in traffic on the highway because of an accident, and I will not make it to the ten o\'clock meeting with the architects.',
        'M: The drawings are on my desk, in the blue folder. Could you take them to the meeting and start without me?',
        'M: I should be there by ten thirty. I will call you when I am close.',
      ],
      qs: [
        ['Why is the speaker late?', 'There is an accident on the highway.', 'His car broke down.', 'He missed a train.', 'He overslept.', 'Lời nhắn.'],
        ['What does he ask the listener to do?', 'Bring some drawings to the meeting', 'Cancel the meeting', 'Call the architects', 'Pick him up', 'Lời nhắn.'],
        ['When does he expect to arrive?', 'By ten thirty', 'By ten', 'By noon', 'By nine thirty', 'Câu gần cuối.'],
      ],
    },
    {
      title: 'Advertisement for a furniture store',
      lines: [
        'W: Working from home? Make your office comfortable with a desk and chair from WorkWell.',
        'W: All our chairs are tested by doctors, and our desks can be raised so that you can stand while you work. This week, buy any desk and get a chair at half price.',
        'W: We deliver within forty-eight hours, and we will take away your old furniture for free.',
      ],
      qs: [
        ['Who is the advertisement aimed at?', 'People who work from home', 'Doctors', 'Schools', 'Hotel owners', 'Lời mở đầu.'],
        ['What is the offer this week?', 'A half-price chair with any desk', 'Free delivery', 'A free desk lamp', 'Two chairs for one', 'Quảng cáo.'],
        ['What extra service is free?', 'Removing old furniture', 'Assembling the desk', 'A medical test', 'A home visit', 'Câu cuối.'],
      ],
    },
    {
      title: 'Talk to conference attendees',
      lines: [
        'M: Good morning, and welcome to the second day of the Sustainable Cities Conference.',
        'M: There is one change to today\'s program. The afternoon tour of the recycling plant will leave at two instead of three, because of a change in the bus schedule. Buses will depart from the main entrance.',
        'M: Places are limited to forty, so if you have not signed up yet, please do so at the information desk before noon.',
      ],
      qs: [
        ['What has changed in the program?', 'The time of a tour', 'The location of a talk', 'The lunch menu', 'The closing ceremony', 'Thông báo.'],
        ['Where will the buses leave from?', 'The main entrance', 'The parking garage', 'The hotel', 'The recycling plant', 'Thông báo.'],
        ['What should people do before noon?', 'Sign up for the tour', 'Collect their badges', 'Pay for lunch', 'Return their keys', 'Câu cuối.'],
      ],
    },
    {
      title: 'Recorded message for a bank',
      lines: [
        'W: Welcome to First National Bank\'s telephone service.',
        'W: To check your account balance, press one. To report a lost or stolen card, press two. To speak to an adviser about a loan, press three.',
        'W: Please note that our branches will be closed on Monday for the public holiday. Online banking will be available as usual.',
      ],
      qs: [
        ['Why would a caller press two?', 'To report a lost card', 'To check a balance', 'To ask about a loan', 'To open an account', 'Thông báo.'],
        ['What will happen on Monday?', 'Branches will be closed.', 'Online banking will stop.', 'New cards will be issued.', 'Loans will be cheaper.', 'Thông báo.'],
        ['What will be available as usual?', 'Online banking', 'Branch services', 'Loan advisers', 'Card replacement', 'Câu cuối.'],
      ],
    },
    {
      title: 'Excerpt from a team meeting',
      lines: [
        'M: Before we finish, I want to mention the customer who called yesterday about a late order.',
        'M: She had been promised delivery in three days, and it took eight. The problem was that the order was entered with the wrong postcode.',
        'M: From now on, I would like everyone to read the address back to the customer before ending the call. It only takes ten seconds, and it will prevent this kind of mistake.',
      ],
      qs: [
        ['What is the speaker discussing?', 'A late delivery', 'A new customer', 'A price change', 'A staff shortage', 'Lời nói.'],
        ['What caused the problem?', 'A wrong postcode', 'A broken truck', 'Bad weather', 'A missing payment', 'Lời nói.'],
        ['What are the listeners asked to do?', 'Confirm the address with the customer', 'Call customers after delivery', 'Work faster', 'Use a new form', 'Câu cuối.'],
      ],
    },
    {
      title: 'News report on a company award',
      lines: [
        'W: In local business news, the bicycle maker Velocity has been named Exporter of the Year by the regional chamber of commerce.',
        'W: The company, which employs sixty people, now sells its electric bicycles in fourteen countries. Exports made up seventy percent of its sales last year.',
        'W: Founder Marta Ruiz said the award belongs to her staff, and announced that the company will open a second workshop in the autumn.',
      ],
      qs: [
        ['What award did Velocity receive?', 'Exporter of the Year', 'Employer of the Year', 'Best New Company', 'Design of the Year', 'Bản tin.'],
        ['What does the company make?', 'Electric bicycles', 'Cars', 'Clothing', 'Sports shoes', 'Bản tin.'],
        ['What will the company do in the autumn?', 'Open a second workshop', 'Hire a new founder', 'Stop exporting', 'Move abroad', 'Câu cuối.'],
      ],
    },
    {
      title: 'Message about weekend shifts',
      lines: [
        'M: Hi, team. This is Carlos with the weekend schedule.',
        'M: One change: the person who was scheduled for Sunday afternoon has asked to swap with the person on Saturday morning, and I have agreed. Everyone else keeps the same shift.',
        'M: Remember that the store opens thirty minutes earlier on Saturday because of the sale.',
      ],
      graphic: ['Weekend shifts – original', 'Shift | Staff\nSat. morning | Hana\nSat. afternoon | Leo\nSun. morning | Priya\nSun. afternoon | Omar'],
      qs: [
        ['What is the message about?', 'A change to the work schedule', 'A new employee', 'A store closure', 'A pay rise', 'Lời nhắn.'],
        ['Look at the graphic. Who will now work on Saturday morning?', 'Omar', 'Hana', 'Leo', 'Priya', 'Omar (chiều Chủ nhật) đổi với Hana (sáng thứ Bảy).'],
        ['Why does the store open earlier on Saturday?', 'There is a sale.', 'A delivery is expected.', 'It is a holiday.', 'The manager is visiting.', 'Câu cuối.'],
      ],
    },
  ],
};
