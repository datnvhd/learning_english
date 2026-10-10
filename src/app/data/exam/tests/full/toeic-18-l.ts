/** TOEIC đề 18 – phần Nghe bổ sung để đủ 100 câu (xem ghi chú "ĐỀ ĐẦY ĐỦ" trong helpers.ts) */
import { RawToeicL } from '../helpers';

export const L: RawToeicL = {
  p2: [
    ['Where can I pick up my conference badge?', 'At the registration table.', 'It is blue.', 'At nine o\'clock.', 'Where → vị trí.'],
    ['Who is in charge of the warehouse at night?', 'The night supervisor, Mr. Ali.', 'Until six a.m.', 'It is a large warehouse.', 'Who → người phụ trách.'],
    ['When does the early-bird discount end?', 'On the last day of the month.', 'Twenty percent.', 'Online only.', 'When → thời hạn.'],
    ['How do I reserve a company car?', 'Through the online booking system.', 'A blue sedan.', 'For three days.', 'How → cách làm.'],
    ['Would you like a copy of the agenda?', 'No, thanks. I have it on my tablet.', 'I copied it.', 'It is long.', 'Lời mời → từ chối.'],
    ['Why is the front entrance closed?', 'They are replacing the doors.', 'At the front.', 'It closes at eight.', 'Why → lý do.'],
    ['Have you spoken to the client about the delay?', 'Yes, she was very understanding.', 'By two days.', 'A new client.', 'Câu hỏi Yes/No.'],
    ['Which room is the training in?', 'Room 12, I think.', 'For two hours.', 'By the trainer.', 'Which → phòng.'],
    ["You are not working this Saturday, are you?", 'No, it is my weekend off.', 'It works well.', 'On Saturday morning.', 'Câu hỏi đuôi.'],
    ['Could you send me the directions to your office?', 'I will email you a map.', 'It is direct.', 'In the office.', 'Lời nhờ → đồng ý.'],
    ['How much is a return ticket to Boston?', 'Eighty-five dollars.', 'At platform two.', 'Three hours.', 'How much → giá.'],
    ['The new intern speaks four languages.', 'That will be useful with our foreign clients.', 'He spoke loudly.', 'Four people.', 'Thông tin → nhận xét.'],
    ['Shall we print the report in color or in black and white?', 'Black and white is cheaper.', 'Yes, print it.', 'It is colorful.', 'Câu hỏi lựa chọn.'],
    ['Is there somewhere I can store my luggage?', 'Yes, at the concierge desk.', 'It is very heavy.', 'In the store.', 'Câu hỏi Yes/No → vị trí.'],
    ["Let's review the applications this afternoon.", 'Fine. How many have we received?', 'I applied yesterday.', 'In the afternoon sun.', 'Đề nghị → đồng ý và hỏi thêm.'],
    ['Whose responsibility is it to order the catering?', 'Laura usually does it.', 'For fifty people.', 'It is delicious.', 'Whose → người.'],
    ['I left my access card at home.', 'You can get a temporary one from security.', 'It is at home.', 'A credit card.', 'Vấn đề → giải pháp.'],
  ],
  p3: [
    {
      title: 'A customer at a furniture store',
      lines: [
        'W: I am interested in this dining table. Does it come in a larger size?',
        'M: Yes, there is one that seats eight. It is two hundred dollars more.',
        'W: And how long is the delivery?',
        'M: The six-seat table is in stock. The larger one takes three weeks.',
        'W: I have guests coming next weekend. I will take the one in stock.',
        'M: We can deliver it on Thursday.',
      ],
      qs: [
        ['What is the woman interested in?', 'A dining table', 'A sofa', 'A bed', 'A desk', 'Lời thoại.'],
        ['Why does she choose the smaller table?', 'She needs it soon.', 'It is cheaper.', 'Her room is small.', 'She prefers the color.', 'Khách đến cuối tuần tới.'],
        ['When will it be delivered?', 'On Thursday', 'In three weeks', 'Next weekend', 'Today', 'Câu cuối.'],
      ],
    },
    {
      title: 'A change of venue for a meeting',
      lines: [
        'M: The air conditioning in the boardroom is broken, and it is thirty degrees in there.',
        'W: The directors arrive in an hour. Is another room free?',
        'M: The training room is, but it has no video equipment.',
        'W: We need video for the call with Singapore. Could IT move a screen and a camera?',
        'M: I will ask them now. It should take twenty minutes.',
      ],
      qs: [
        ['What is the problem with the boardroom?', 'It is too hot.', 'It is too small.', 'It is being cleaned.', 'It is booked.', 'Lời thoại.'],
        ['Why is video equipment needed?', 'For a call with Singapore', 'For a film', 'For training', 'For security', 'Lời thoại.'],
        ['What will the man do?', 'Ask IT for help', 'Repair the air conditioning', 'Cancel the meeting', 'Call the directors', 'Câu cuối.'],
      ],
    },
    {
      title: 'A new delivery schedule',
      lines: [
        'W: The bakery wants to deliver at five thirty in the morning from next week, not at seven.',
        'M: Nobody is here at five thirty.',
        'W: They suggest leaving the bread in a locked box by the back door. They would give us a key.',
        'M: That could work. Will the bread still be warm when we open?',
        'W: They say the box is insulated. Let us try it for a week.',
      ],
      qs: [
        ['What does the bakery want to change?', 'The delivery time', 'The price', 'The type of bread', 'The driver', 'Lời thoại.'],
        ['What is the problem?', 'Nobody is there so early.', 'The bread is cold.', 'The door is broken.', 'The box is too small.', 'Lời thoại.'],
        ['What do the speakers decide?', 'To try the new system for a week', 'To change bakeries', 'To open earlier', 'To refuse the change', 'Câu cuối.'],
      ],
    },
    {
      title: 'A customer loses a ticket',
      lines: [
        'M: Excuse me, I have lost my parking ticket, and I cannot get out of the garage.',
        'W: Do you remember when you arrived?',
        'M: About nine this morning.',
        'W: Without a ticket, the charge is the daily maximum, twenty-four dollars.',
        'M: I only parked for three hours. I have a receipt from the dentist upstairs showing my appointment time.',
        'W: In that case, I can charge you for three hours. That is nine dollars.',
      ],
      qs: [
        ['What has the man lost?', 'A parking ticket', 'His car keys', 'A receipt', 'His wallet', 'Lời thoại.'],
        ['What is the charge without a ticket?', '$24', '$9', '$3', '$12', 'Lời thoại.'],
        ['Why does the woman reduce the charge?', 'He can prove when he arrived.', 'He is a regular customer.', 'The machine is broken.', 'He is a dentist.', 'Lời thoại.'],
      ],
    },
    {
      title: 'Discussing an employee award',
      lines: [
        'W: We need to choose the Employee of the Year by Friday.',
        'M: I would nominate Amir. He solved the problem with the ordering system in one weekend.',
        'W: He is a strong candidate. Elena also had an excellent year. She brought in three major clients.',
        'M: True. Could we give two awards this year?',
        'W: I will ask the director whether the budget allows it.',
      ],
      qs: [
        ['What must be decided by Friday?', 'Who will receive an award', 'Who will be hired', 'Who will be promoted', 'Who will attend a conference', 'Lời thoại.'],
        ['What did Elena do?', 'She won three major clients.', 'She fixed the ordering system.', 'She trained new staff.', 'She reduced costs.', 'Lời thoại.'],
        ['What will the woman ask the director?', 'Whether two awards are possible', 'Whether Amir can be promoted', 'Whether the ceremony can be moved', 'Whether Elena is leaving', 'Câu cuối.'],
      ],
    },
    {
      title: 'A broken coffee machine in a café',
      lines: [
        'M: The espresso machine has stopped heating. We cannot make coffee.',
        'W: On a Saturday morning? That is terrible timing.',
        'M: The repair company says the earliest they can come is Monday.',
        'W: My friend owns a café two streets away and has a spare machine. I will call her.',
        'M: Meanwhile, I will put up a sign and offer tea and cold drinks at half price.',
      ],
      qs: [
        ['What is the problem?', 'A machine is broken.', 'The café has no customers.', 'The milk has run out.', 'A member of staff is ill.', 'Lời thoại.'],
        ['When can the repair company come?', 'On Monday', 'Today', 'Tomorrow', 'Next Saturday', 'Lời thoại.'],
        ['What will the man offer customers?', 'Half-price tea and cold drinks', 'Free coffee', 'A voucher', 'Free cake', 'Câu cuối.'],
      ],
    },
    {
      title: 'A visa for a business trip',
      lines: [
        'W: Do I need a visa for the conference in India next month?',
        'M: Yes, but you can apply online. It usually takes four working days.',
        'W: What documents do I need?',
        'M: A scan of your passport, a photograph, and the invitation letter from the organizers.',
        'W: I have not received the letter yet.',
        'M: I will email them and ask them to send it today.',
      ],
      qs: [
        ['Where is the woman going?', 'To India', 'To Indonesia', 'To Ireland', 'To Italy', 'Lời thoại.'],
        ['How long does the visa usually take?', 'Four working days', 'One month', 'One day', 'Two weeks', 'Lời thoại.'],
        ['What is the woman still missing?', 'An invitation letter', 'A passport', 'A photograph', 'A plane ticket', 'Lời thoại.'],
      ],
    },
    {
      title: 'A customer service chat',
      lines: [
        'M: Hello, I bought a monthly train pass yesterday, but the gate at the station will not accept it.',
        'W: I am sorry. Could you read me the number on the back?',
        'M: It is seven seven one, four two zero.',
        'W: I see. The pass was not activated when you bought it. I have done that now. Please try again in ten minutes.',
        'M: Thank you. I paid for a single ticket this morning. Can I get that back?',
        'W: Yes, I will add five dollars of credit to your account.',
      ],
      qs: [
        ['What is the man\'s problem?', 'His pass does not work.', 'He lost his pass.', 'He missed his train.', 'He was overcharged for the pass.', 'Lời thoại.'],
        ['What caused the problem?', 'The pass was not activated.', 'The gate was broken.', 'The pass had expired.', 'He used the wrong station.', 'Lời thoại.'],
        ['What will the woman add to his account?', 'Five dollars of credit', 'A free month', 'A new pass', 'A single ticket', 'Câu cuối.'],
      ],
    },
    {
      title: 'Planning a store renovation',
      lines: [
        'W: The builders can renovate the store in January or in March.',
        'M: January is our quietest month. We would lose less business.',
        'W: True, but they charge ten percent more in January because of the holidays.',
        'M: I still think it is the better choice. Closing in March would cost us far more in sales.',
        'W: I agree. I will sign the contract for January.',
      ],
      qs: [
        ['What are the speakers planning?', 'A renovation', 'A sale', 'A new store', 'A holiday', 'Lời thoại.'],
        ['Why does the man prefer January?', 'It is the quietest month.', 'It is cheaper.', 'The builders are free.', 'The weather is better.', 'Lời thoại.'],
        ['What is the disadvantage of January?', 'The builders charge more.', 'The store is busy.', 'Staff are away.', 'It is too cold.', 'Lời thoại.'],
      ],
    },
    {
      title: 'A call about a job offer',
      lines: [
        'M: Hello, Ms. Hall. I am pleased to tell you that we would like to offer you the position.',
        'W: That is wonderful news. Thank you.',
        'M: The salary is fifty-two thousand dollars, with twenty-five days of vacation. Could you start on the first of the month?',
        'W: I have to give my current employer four weeks\' notice. The fifteenth would be possible.',
        'M: That is acceptable. I will send you the contract this afternoon.',
      ],
      qs: [
        ['Why is the man calling?', 'To offer the woman a job', 'To arrange an interview', 'To ask for a reference', 'To discuss a complaint', 'Lời thoại.'],
        ['Why can the woman not start on the first?', 'She must give notice.', 'She is on vacation.', 'She is moving house.', 'She has another interview.', 'Lời thoại.'],
        ['What will the man send?', 'A contract', 'A plane ticket', 'A uniform', 'A schedule', 'Câu cuối.'],
      ],
    },
    {
      title: 'Choosing a printer for the office',
      lines: [
        'W: We need a new printer. It must print in color and at least thirty pages a minute.',
        'M: Here are the models from our supplier.',
        'W: Two of them meet those needs. Which is cheaper to run?',
        'M: The cost per page is in the last column.',
        'W: Then we will take the one with the lower cost per page.',
      ],
      graphic: ['Office printers', 'Model | Color | Pages per minute | Cost per page\nP100 | No | 40 | 1 cent\nP200 | Yes | 25 | 3 cents\nP300 | Yes | 35 | 4 cents\nP400 | Yes | 45 | 6 cents'],
      qs: [
        ['What does the office need?', 'A new printer', 'A new supplier', 'More paper', 'A scanner', 'Lời thoại.'],
        ['What speed is required?', 'At least thirty pages a minute', 'At least forty', 'Exactly twenty-five', 'It does not matter', 'Lời thoại.'],
        ['Look at the graphic. Which model will be chosen?', 'P300', 'P100', 'P200', 'P400', 'In màu, ≥ 30 trang/phút: P300 và P400; rẻ hơn mỗi trang là P300.'],
      ],
    },
  ],
  p4: [
    {
      title: 'Announcement at a trade fair',
      lines: [
        'M: Good morning, exhibitors and visitors. Welcome to the third day of the Home and Garden Fair.',
        'M: At eleven o\'clock, the awards for the best stand will be presented on the main stage in Hall One.',
        'M: Please note that the fair closes at four today, two hours earlier than on other days. Exhibitors may begin taking down their stands at four fifteen.',
      ],
      qs: [
        ['What will happen at eleven?', 'Awards will be presented.', 'The fair will close.', 'A concert will begin.', 'Lunch will be served.', 'Thông báo.'],
        ['What time does the fair close today?', 'At four', 'At six', 'At two', 'At eleven', 'Thông báo.'],
        ['When may exhibitors start removing their stands?', 'At 4:15', 'At 4:00', 'At 6:00', 'At noon', 'Câu cuối.'],
      ],
    },
    {
      title: 'Voicemail from a building manager',
      lines: [
        'W: Hello, this is a message for all tenants on the sixth floor. This is Karen from building management.',
        'W: A water pipe has burst in the ceiling above the corridor. The water has been turned off, and a plumber is on the way.',
        'W: Please do not use the kitchen or the restrooms on your floor until further notice. The facilities on the fifth floor are available.',
      ],
      qs: [
        ['What has happened?', 'A pipe has burst.', 'The power is off.', 'A window is broken.', 'The elevator is stuck.', 'Lời nhắn.'],
        ['Who is on the way?', 'A plumber', 'An electrician', 'A cleaner', 'The fire service', 'Lời nhắn.'],
        ['What should tenants do?', 'Use the facilities on the fifth floor', 'Leave the building', 'Turn off their computers', 'Call the plumber', 'Lời nhắn.'],
      ],
    },
    {
      title: 'Advertisement for a business magazine',
      lines: [
        'M: Stay ahead of your competitors with Business Insight, the monthly magazine for managers.',
        'M: Each issue includes interviews with successful leaders, practical advice, and a report on one growing industry.',
        'M: Subscribe today for just forty-nine dollars a year and receive a free book, "The Smart Manager." Subscribers also get free entry to our annual conference.',
      ],
      qs: [
        ['Who is the magazine for?', 'Managers', 'Students', 'Tourists', 'Engineers only', 'Quảng cáo.'],
        ['How often is it published?', 'Monthly', 'Weekly', 'Daily', 'Once a year', 'Quảng cáo.'],
        ['What do subscribers receive?', 'A free book', 'A discount on travel', 'A free laptop', 'A second magazine', 'Quảng cáo.'],
      ],
    },
    {
      title: 'Talk to new bank employees',
      lines: [
        'W: Welcome to First City Bank. During this first week, you will learn our systems and our rules on security.',
        'W: Never write down your password, and always lock your screen when you leave your desk, even for a minute.',
        'W: If a customer asks for information about another person\'s account, you must refuse, even if they say they are a relative. If you are unsure, ask your supervisor.',
      ],
      qs: [
        ['What will the listeners learn this week?', 'Systems and security rules', 'How to sell loans', 'How to manage a branch', 'Foreign languages', 'Lời nói.'],
        ['What should staff do when leaving their desks?', 'Lock their screens', 'Switch off the computer', 'Tell a supervisor', 'Take their passwords', 'Lời nói.'],
        ['What must staff do if asked about another person\'s account?', 'Refuse', 'Check the relative\'s ID', 'Give limited details', 'Call the customer', 'Lời nói.'],
      ],
    },
    {
      title: 'Recorded message for a pharmacy',
      lines: [
        'M: Thank you for calling Greenway Pharmacy.',
        'M: To order a repeat prescription, press one. Please allow two working days before collecting your medicine.',
        'M: Our flu vaccination service is now available without an appointment on weekdays between ten and four. We are closed on Sundays.',
      ],
      qs: [
        ['How long should customers wait before collecting a repeat prescription?', 'Two working days', 'One hour', 'One week', 'The same day', 'Thông báo.'],
        ['What service needs no appointment?', 'Flu vaccination', 'Eye tests', 'Blood tests', 'Dental checks', 'Thông báo.'],
        ['When is the pharmacy closed?', 'On Sundays', 'On Saturdays', 'On weekdays after four', 'On Mondays', 'Câu cuối.'],
      ],
    },
    {
      title: 'Excerpt from a planning meeting',
      lines: [
        'W: Our lease on this building ends in eighteen months, so we need to decide whether to stay or move.',
        'W: The owner has offered to renew for five years, but the rent would rise by fifteen percent. I have found two other buildings nearby that are slightly cheaper.',
        'W: I would like three volunteers to visit them with me next Tuesday and report back to this group.',
      ],
      qs: [
        ['What must the company decide?', 'Whether to stay or move', 'Whether to hire staff', 'Whether to buy the building', 'Whether to close', 'Lời nói.'],
        ['What would happen to the rent if they stay?', 'It would rise by fifteen percent.', 'It would fall.', 'It would stay the same.', 'It would double.', 'Lời nói.'],
        ['What does the speaker ask for?', 'Volunteers to visit buildings', 'A new lease', 'A meeting with the owner', 'A budget', 'Câu cuối.'],
      ],
    },
    {
      title: 'News report on a tourism campaign',
      lines: [
        'M: The regional tourist board has launched a campaign to attract visitors in winter.',
        'M: Hotels will offer three nights for the price of two from November to February, and museums will be free on Sundays.',
        'M: Last year, eighty percent of tourists came between May and September. The board hopes to increase winter visitors by a quarter.',
      ],
      qs: [
        ['What is the aim of the campaign?', 'To attract winter visitors', 'To build new hotels', 'To close museums', 'To reduce summer crowds', 'Bản tin.'],
        ['What will hotels offer?', 'Three nights for the price of two', 'Free breakfast', 'Half-price rooms', 'Free transport', 'Bản tin.'],
        ['When will museums be free?', 'On Sundays', 'Every day', 'In summer', 'On Mondays', 'Bản tin.'],
      ],
    },
    {
      title: 'Message about a sales trip',
      lines: [
        'W: Hi, Dan. It is Monica. I have planned our sales trip for next week.',
        'W: We will visit the customer who placed the largest order last year first, on Monday, and then the others in order of size.',
        'W: I have booked the hotel for four nights. Please bring the new catalogs.',
      ],
      graphic: ['Customers – orders last year', 'Customer | City | Orders\nAlder Stores | Leeds | $120,000\nBaxter & Co. | York | $85,000\nCrown Retail | Hull | $210,000\nDale Group | Bath | $60,000'],
      qs: [
        ['What has the speaker planned?', 'A sales trip', 'A conference', 'A vacation', 'A training day', 'Lời nhắn.'],
        ['Look at the graphic. Which city will the speakers visit on Monday?', 'Hull', 'Leeds', 'York', 'Bath', 'Khách hàng có đơn lớn nhất: Crown Retail ở Hull.'],
        ['What should the listener bring?', 'The new catalogs', 'The hotel booking', 'A laptop', 'Product samples', 'Câu cuối.'],
      ],
    },
  ],
};
