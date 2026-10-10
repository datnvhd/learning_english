/** TOEIC đề 19 – phần Nghe bổ sung để đủ 100 câu (xem ghi chú "ĐỀ ĐẦY ĐỦ" trong helpers.ts) */
import { RawToeicL } from '../helpers';

export const L: RawToeicL = {
  p2: [
    ['Where should I leave the samples?', 'On the table in the showroom.', 'Six of them.', 'They are free.', 'Where → vị trí.'],
    ['Who approved this purchase order?', 'The finance manager.', 'For two thousand dollars.', 'In order.', 'Who → người duyệt.'],
    ['When does the warranty period begin?', 'On the date of delivery.', 'For two years.', 'In the box.', 'When → thời điểm.'],
    ['How was your meeting with the supplier?', 'Very productive. We agreed on a price.', 'By car.', 'For two hours.', 'How was → nhận xét.'],
    ['Would you like a table inside or outside?', 'Outside, if there is one in the shade.', 'Yes, please.', 'A table for two.', 'Câu hỏi lựa chọn.'],
    ['Why is the printer making that noise?', 'I think a piece of paper is stuck.', 'In the corner.', 'It is very loud.', 'Why → lý do.'],
    ['Has the new schedule been approved?', 'Yes, it starts next Monday.', 'On schedule.', 'I approved the price.', 'Câu hỏi Yes/No.'],
    ['Which bus goes to the business park?', 'The number thirty.', 'Every ten minutes.', 'It is a big park.', 'Which → số xe.'],
    ["The packages were sent yesterday, weren't they?", 'Yes, by express delivery.', 'A large package.', 'They are sending it.', 'Câu hỏi đuôi.'],
    ['Could you translate this email for me?', 'Sure. Is it in German?', 'It was sent.', 'I can mail it.', 'Lời nhờ → đồng ý, hỏi lại.'],
    ['How many rooms have been booked for the conference?', 'Forty-five so far.', 'At the Grand Hotel.', 'For three nights.', 'How many → số lượng.'],
    ['The elevator will be out of service tomorrow.', 'Then I will take the stairs.', 'It serves coffee.', 'Up to the tenth floor.', 'Thông báo → hệ quả.'],
    ['Should we invite the suppliers or just the clients?', 'Both, I think.', 'Yes, we should.', 'The invitations are blue.', 'Câu hỏi lựa chọn.'],
    ['Is the gym open to all employees?', 'Yes, from six in the morning.', 'I exercise daily.', 'On the lower level.', 'Câu hỏi Yes/No.'],
    ["Why don't you call the help desk?", 'I already did. They are sending someone.', 'Because it is helpful.', 'At the desk.', 'Lời gợi ý → "đã gọi rồi".'],
    ['Whose desk is next to the window?', "That is Fatima's.", 'It is very bright.', 'A wooden desk.', 'Whose → người.'],
    ['I cannot open the storage room.', 'The key is at reception.', 'It is a big room.', 'Open the window.', 'Vấn đề → giải pháp.'],
  ],
  p3: [
    {
      title: 'A customer wants to rent a car',
      lines: [
        'M: Good morning. I would like to rent a car for three days.',
        'W: Certainly. Do you have a preference?',
        'M: Something small and automatic. I will mostly be driving in the city.',
        'W: We have a compact automatic for forty-five dollars a day. May I see your license and a credit card?',
        'M: Here you are. Is there a limit on mileage?',
        'W: No, it is unlimited.',
      ],
      qs: [
        ['How long does the man need the car?', 'Three days', 'One day', 'A week', 'Five days', 'Lời thoại.'],
        ['What kind of car does he want?', 'A small automatic', 'A large van', 'A sports car', 'A manual car', 'Lời thoại.'],
        ['What does the woman say about mileage?', 'It is unlimited.', 'It is limited to 100 km a day.', 'It costs extra.', 'It must be recorded.', 'Câu cuối.'],
      ],
    },
    {
      title: 'A late shipment to a customer',
      lines: [
        'W: Mr. Patel called. He still has not received the two hundred chairs he ordered.',
        'M: They were supposed to leave the factory on Monday.',
        'W: The factory says one of the machines broke down. They can ship one hundred tomorrow and the rest next week.',
        'M: Call Mr. Patel and explain. Offer him free delivery for the whole order.',
        'W: I will do that right now.',
      ],
      qs: [
        ['What did Mr. Patel order?', 'Chairs', 'Tables', 'Machines', 'Desks', 'Lời thoại.'],
        ['Why is the order late?', 'A machine broke down.', 'The truck was delayed.', 'The payment was late.', 'The address was wrong.', 'Lời thoại.'],
        ['What will the woman offer Mr. Patel?', 'Free delivery', 'A refund', 'Extra chairs', 'A discount on tables', 'Lời thoại.'],
      ],
    },
    {
      title: 'A new member of the cleaning staff',
      lines: [
        'M: Hello, I am Viktor. I am starting today with the cleaning team.',
        'W: Welcome, Viktor. I am Dana, the supervisor. You will be working on the third and fourth floors.',
        'M: What time do I start each day?',
        'W: At six in the evening, after the offices close. Here is your uniform and a card for the doors.',
        'M: Thank you. Where are the cleaning materials?',
        'W: In the cupboard next to the elevator on each floor.',
      ],
      qs: [
        ['Who is the woman?', 'A supervisor', 'A receptionist', 'A new cleaner', 'An office manager', 'Lời thoại.'],
        ['When does the man start work each day?', 'At six in the evening', 'At six in the morning', 'At noon', 'At midnight', 'Lời thoại.'],
        ['Where are the cleaning materials kept?', 'In a cupboard by the elevator', 'In the basement', 'At reception', 'In the supervisor\'s office', 'Câu cuối.'],
      ],
    },
    {
      title: 'A change to a business trip',
      lines: [
        'W: The client in Milan has asked to move our meeting from Tuesday to Thursday.',
        'M: I have already booked my flight for Monday evening.',
        'W: Can you change it?',
        'M: Yes, but there is a fee of eighty euros. And I will need the hotel for different nights.',
        'W: The company will cover the fee. I will change the hotel booking for you.',
      ],
      qs: [
        ['What has the client asked for?', 'A later meeting date', 'A meeting in another city', 'A lower price', 'A video call', 'Lời thoại.'],
        ['What will changing the flight cost?', '€80', '€18', '€800', 'Nothing', 'Lời thoại.'],
        ['What will the woman do?', 'Change the hotel booking', 'Fly to Milan herself', 'Cancel the meeting', 'Pay the fee personally', 'Câu cuối.'],
      ],
    },
    {
      title: 'A customer complaint about noise',
      lines: [
        'M: Excuse me, the table next to us is very loud. We cannot hear each other.',
        'W: I am sorry, sir. It is a birthday party. Would you like to move to another table?',
        'M: Yes, please, if there is one.',
        'W: There is a quiet table on the terrace. It is a little cooler outside, but I can bring you a heater.',
        'M: That would be fine.',
      ],
      qs: [
        ['What is the man\'s complaint?', 'The next table is noisy.', 'The food is cold.', 'The service is slow.', 'The bill is wrong.', 'Lời thoại.'],
        ['What is the cause?', 'A birthday party', 'Loud music', 'Building work', 'A football match', 'Lời thoại.'],
        ['What will the woman bring?', 'A heater', 'A blanket', 'A menu', 'A free dessert', 'Lời thoại.'],
      ],
    },
    {
      title: 'Planning a recruitment day',
      lines: [
        'W: We are taking part in the university job fair on the twentieth. Who should represent us?',
        'M: I think two people from engineering and one from human resources.',
        'W: Good. We will need brochures and a banner.',
        'M: The banner from last year is damaged. I will order a new one today.',
        'W: And I will ask the engineers who is free that day.',
      ],
      qs: [
        ['What event are the speakers preparing for?', 'A job fair', 'A trade show', 'A graduation', 'A company party', 'Lời thoại.'],
        ['Why is a new banner needed?', 'The old one is damaged.', 'The old one is too small.', 'The logo has changed.', 'It was lost.', 'Lời thoại.'],
        ['What will the woman do?', 'Find out which engineers are available', 'Order brochures', 'Design the banner', 'Call the university', 'Câu cuối.'],
      ],
    },
    {
      title: 'A question about an electricity bill',
      lines: [
        'M: Hello, my electricity bill for this month is twice as high as usual.',
        'W: Let me look at your account. I see that the last bill was based on an estimate, because we could not read your meter.',
        'M: So this bill corrects the estimate?',
        'W: Exactly. It includes electricity you used earlier but were not charged for.',
        'M: I see. Can I pay it in two parts?',
        'W: Yes, I can arrange that for you now.',
      ],
      qs: [
        ['Why is the man calling?', 'His bill is unusually high.', 'His power is off.', 'He wants a new meter.', 'He is moving house.', 'Lời thoại.'],
        ['Why is the bill high?', 'An earlier bill was only an estimate.', 'The price has doubled.', 'The meter is broken.', 'He was charged twice.', 'Lời thoại.'],
        ['What does the man ask to do?', 'Pay in two parts', 'Change supplier', 'Speak to a manager', 'Have the meter replaced', 'Lời thoại.'],
      ],
    },
    {
      title: 'A problem in a warehouse',
      lines: [
        'W: We are short of space in the warehouse. The new shipment arrives on Friday.',
        'M: What is taking up the most room?',
        'W: The garden furniture from last summer. We still have three hundred sets.',
        'M: Let us sell them at half price this week. I would rather lose a little money than pay for extra storage.',
        'W: I will ask marketing to send an email to our customers today.',
      ],
      qs: [
        ['What is the problem?', 'There is not enough space.', 'A shipment is late.', 'Furniture is damaged.', 'Staff are absent.', 'Lời thoại.'],
        ['What does the man suggest?', 'Selling old stock at half price', 'Renting more space', 'Canceling the shipment', 'Giving the furniture away', 'Lời thoại.'],
        ['What will the woman ask marketing to do?', 'Email customers', 'Design a poster', 'Call suppliers', 'Count the stock', 'Câu cuối.'],
      ],
    },
    {
      title: 'A customer at a travel agency',
      lines: [
        'M: I would like to book a week in Greece for two people in September.',
        'W: Do you prefer an island or the mainland?',
        'M: An island, somewhere quiet.',
        'W: I recommend Naxos. This hotel is right on the beach and costs nine hundred euros per person, including flights and breakfast.',
        'M: That sounds perfect. Can I pay a deposit today?',
        'W: Yes, twenty percent secures the booking.',
      ],
      qs: [
        ['Where does the man want to go?', 'To a quiet island', 'To a large city', 'To the mountains', 'To a busy resort', 'Lời thoại.'],
        ['What is included in the price?', 'Flights and breakfast', 'All meals', 'Car rental', 'Excursions', 'Lời thoại.'],
        ['How much deposit is required?', 'Twenty percent', 'Ten percent', 'Half', 'The full amount', 'Câu cuối.'],
      ],
    },
    {
      title: 'A training request',
      lines: [
        'W: I would like to attend a course on spreadsheet software. I waste a lot of time doing calculations by hand.',
        'M: That is a good idea. Is there one nearby?',
        'W: The college offers a one-day course on Saturdays for ninety dollars.',
        'M: The company can pay, provided that you share what you learn with the team.',
        'W: Of course. I could give a short session the following week.',
      ],
      qs: [
        ['What does the woman want to learn?', 'Spreadsheet software', 'A foreign language', 'Accounting law', 'Public speaking', 'Lời thoại.'],
        ['When is the course held?', 'On Saturdays', 'On weekday evenings', 'On Mondays', 'Online at any time', 'Lời thoại.'],
        ['What condition does the man set?', 'She must share what she learns.', 'She must pay half.', 'She must pass an exam.', 'She must take vacation time.', 'Lời thoại.'],
      ],
    },
    {
      title: 'Choosing a laptop for a new employee',
      lines: [
        'M: I need to order a laptop for the new designer. She needs a large screen and at least sixteen gigabytes of memory.',
        'W: Here is the price list. What is the budget?',
        'M: Twelve hundred dollars.',
        'W: Then only one model has both and stays within the budget.',
        'M: Please order it today.',
      ],
      graphic: ['Laptop price list', 'Model | Screen | Memory | Price\nLite | 13 inch | 8 GB | $700\nPro 15 | 15 inch | 16 GB | $1,150\nPro 17 | 17 inch | 16 GB | $1,450\nStudio | 17 inch | 32 GB | $1,900'],
      qs: [
        ['Who is the laptop for?', 'A new designer', 'The man', 'A customer', 'An accountant', 'Lời thoại.'],
        ['What is the budget?', '$1,200', '$700', '$1,450', '$1,900', 'Lời thoại.'],
        ['Look at the graphic. Which model will be ordered?', 'Pro 15', 'Lite', 'Pro 17', 'Studio', 'Màn hình lớn, 16 GB, ≤ $1,200: Pro 15.'],
      ],
    },
  ],
  p4: [
    {
      title: 'Announcement at a hospital',
      lines: [
        'W: Attention, visitors. Visiting hours on all wards end at eight p.m.',
        'W: Please use the hand gel at the entrance to each ward when you arrive and when you leave.',
        'W: The main car park closes at nine. If you need to stay later, please move your car to the north car park, which is open all night.',
      ],
      qs: [
        ['When do visiting hours end?', 'At eight p.m.', 'At nine p.m.', 'At six p.m.', 'At midnight', 'Thông báo.'],
        ['What are visitors asked to use?', 'Hand gel', 'Masks', 'Gloves', 'A sign-in book', 'Thông báo.'],
        ['Which car park is open all night?', 'The north car park', 'The main car park', 'The staff car park', 'None', 'Câu cuối.'],
      ],
    },
    {
      title: 'Voicemail from a caterer',
      lines: [
        'M: Hello, Ms. Jensen. This is Luca from Bella Catering.',
        'M: I am calling about your office party on Friday. You ordered food for sixty people, but your email this morning mentions seventy-five guests.',
        'M: We can prepare the extra food, but I need you to confirm the new number by noon tomorrow. The additional cost would be three hundred dollars.',
      ],
      qs: [
        ['What is the call about?', 'The number of guests at a party', 'A late payment', 'A change of menu', 'A change of date', 'Lời nhắn.'],
        ['By when must the listener confirm?', 'By noon tomorrow', 'By Friday', 'This morning', 'By next week', 'Lời nhắn.'],
        ['How much would the extra food cost?', '$300', '$75', '$60', '$15', 'Lời nhắn.'],
      ],
    },
    {
      title: 'Advertisement for a car service',
      lines: [
        'W: Is your car ready for a long summer drive? Bring it to Roadwise for a holiday check.',
        'W: For just thirty-nine dollars, we will check your tires, brakes, oil, and air conditioning. It takes only forty minutes, and you can relax in our waiting room with free coffee.',
        'W: No appointment is needed on weekdays. Roadwise: drive with peace of mind.',
      ],
      qs: [
        ['What is being advertised?', 'A car check', 'A car rental', 'A holiday', 'A coffee shop', 'Quảng cáo.'],
        ['How long does the check take?', 'Forty minutes', 'Thirty-nine minutes', 'One day', 'Two hours', 'Quảng cáo.'],
        ['When is an appointment unnecessary?', 'On weekdays', 'At weekends', 'In summer', 'Never', 'Quảng cáo.'],
      ],
    },
    {
      title: 'Talk to new supermarket employees',
      lines: [
        'M: Good morning, and welcome to FreshWay. Today you will learn how to stock the shelves correctly.',
        'M: The most important rule is "first in, first out." Always put new products behind the older ones, so that the older ones are sold first.',
        'M: Check the dates on dairy products every morning, and remove anything that expires that day. If you find a damaged package, bring it to the service desk.',
      ],
      qs: [
        ['What will the listeners learn today?', 'How to stock shelves', 'How to use the cash register', 'How to order products', 'How to serve at the bakery', 'Lời nói.'],
        ['Where should new products be placed?', 'Behind the older ones', 'In front of the older ones', 'On the top shelf', 'In the storeroom', 'Lời nói.'],
        ['What should be done with a damaged package?', 'Take it to the service desk', 'Throw it away', 'Sell it at half price', 'Leave it on the shelf', 'Câu cuối.'],
      ],
    },
    {
      title: 'Recorded message for a museum',
      lines: [
        'W: Thank you for calling the Museum of Modern Art.',
        'W: The museum is open from ten to six, Wednesday to Monday. We are closed on Tuesdays. Admission is free on the first Sunday of each month.',
        'W: Tickets for the special exhibition "Light and Color" must be booked online in advance. For group visits, press three.',
      ],
      qs: [
        ['On which day is the museum closed?', 'Tuesday', 'Monday', 'Wednesday', 'Sunday', 'Thông báo.'],
        ['When is admission free?', 'On the first Sunday of each month', 'Every Sunday', 'On Tuesdays', 'For groups', 'Thông báo.'],
        ['How must tickets for the special exhibition be obtained?', 'Online in advance', 'At the door', 'By telephone', 'By mail', 'Thông báo.'],
      ],
    },
    {
      title: 'Excerpt from a quality meeting',
      lines: [
        'M: Last month, four percent of the products leaving line three had a fault, compared with one percent on the other lines.',
        'M: We traced the problem to a sensor that was not adjusted correctly after maintenance. It has now been reset.',
        'M: To prevent this from happening again, a second engineer will check every machine after maintenance, and both must sign the record.',
      ],
      qs: [
        ['What was the problem on line three?', 'A higher rate of faulty products', 'A shortage of workers', 'A power cut', 'A late delivery', 'Lời nói.'],
        ['What caused it?', 'A sensor was not adjusted correctly.', 'A machine was too old.', 'Materials were poor.', 'Staff were untrained.', 'Lời nói.'],
        ['What new rule is introduced?', 'A second engineer will check machines.', 'Maintenance will be stopped.', 'Line three will close.', 'Sensors will be removed.', 'Câu cuối.'],
      ],
    },
    {
      title: 'News report on a road project',
      lines: [
        'W: Work on the new ring road around the city will begin next month, the transport department confirmed today.',
        'W: The twelve-kilometer road will take heavy trucks away from the city center and is expected to cut journey times by twenty minutes.',
        'W: During construction, parts of the existing north road will be closed at night. Drivers are advised to check the department\'s website for details.',
      ],
      qs: [
        ['What will be built?', 'A ring road', 'A bridge', 'A railway', 'A tunnel', 'Bản tin.'],
        ['What is one benefit?', 'Fewer trucks in the city center', 'More parking', 'Lower fuel prices', 'New bus routes', 'Bản tin.'],
        ['What will happen during construction?', 'Part of a road will close at night.', 'The city center will be closed.', 'Trucks will be banned.', 'Tolls will be charged.', 'Bản tin.'],
      ],
    },
    {
      title: 'Message about an office supplies order',
      lines: [
        'M: Hi, Susan. It is Raj. I checked the stock room this morning.',
        'M: We agreed to reorder any item when fewer than ten are left. Only one item is below that level, so I will order twenty of those today. Everything else is fine.',
        'M: Let me know if you need anything that is not on the list.',
      ],
      graphic: ['Stock room – this morning', 'Item | In stock\nPrinter paper (boxes) | 14\nBlue pens (packs) | 22\nEnvelopes (packs) | 6\nNotebooks | 30'],
      qs: [
        ['What did the speaker check?', 'The stock room', 'The mail', 'The printer', 'The budget', 'Lời nhắn.'],
        ['Look at the graphic. What will be ordered today?', 'Envelopes', 'Printer paper', 'Blue pens', 'Notebooks', 'Chỉ có phong bì dưới 10.'],
        ['How many will be ordered?', 'Twenty', 'Ten', 'Six', 'Thirty', 'Lời nhắn.'],
      ],
    },
  ],
};
