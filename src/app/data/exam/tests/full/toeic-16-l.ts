/** TOEIC đề 16 – phần Nghe bổ sung để đủ 100 câu (xem ghi chú "ĐỀ ĐẦY ĐỦ" trong helpers.ts) */
import { RawToeicL } from '../helpers';

export const L: RawToeicL = {
  p2: [
    ['Where can I charge my laptop?', 'There is a socket under the table.', 'About two hours.', 'It was expensive.', 'Where → vị trí.'],
    ['Who is going to interview the candidates?', 'Ms. Reed and Mr. Cho.', 'Three candidates.', 'On Tuesday morning.', 'Who → người phỏng vấn.'],
    ['When is the product catalog going to print?', 'Next Monday, I believe.', 'Five thousand copies.', 'At the print shop.', 'When → thời gian.'],
    ['How many units did we sell last month?', 'Just over two thousand.', 'To three countries.', 'Last month was April.', 'How many → số lượng.'],
    ['Would you like to try on a larger size?', 'Yes, please. This one is tight.', 'It is a large store.', 'I tried it yesterday.', 'Lời mời → nhận.'],
    ['Why has the meeting been postponed?', 'The director is stuck at the airport.', 'In the boardroom.', 'For two hours.', 'Why → lý do.'],
    ['Have you updated the contact list?', 'Yes, I added the new suppliers.', 'By phone.', 'It is a long list.', 'Câu hỏi Yes/No.'],
    ['Which of these chairs is more comfortable?', 'The one with the armrests.', 'They are both new.', 'In the showroom.', 'Which → chọn.'],
    ["The invoice has been sent, hasn't it?", 'I will check with accounts.', 'It was a large invoice.', 'In an envelope.', 'Câu hỏi đuôi → "để tôi kiểm tra".'],
    ['Could you help me move this table?', 'Of course. Where do you want it?', 'It is a round table.', 'I moved last year.', 'Lời nhờ → đồng ý.'],
    ['How late is the pharmacy open?', 'Until nine tonight.', 'On Mill Street.', 'For a prescription.', 'How late → giờ đóng cửa.'],
    ['Our website was down for two hours this morning.', 'Do we know what caused it?', 'It is upstairs.', 'Two hours ago.', 'Thông tin → hỏi nguyên nhân.'],
    ['Should I send the samples by courier or by post?', 'By courier. They are urgent.', 'Yes, please send them.', 'Simple samples.', 'Câu hỏi lựa chọn.'],
    ['Is the manager in today?', 'She will be in after lunch.', 'He manages well.', 'In the office.', 'Câu hỏi Yes/No → thời gian.'],
    ["Why don't we move the printer closer to the door?", 'Then everyone could reach it easily.', 'Because it is closed.', 'It prints slowly.', 'Lời gợi ý → tán thành.'],
    ['Whose idea was the new logo?', 'The design team came up with it.', 'It is blue and gold.', 'On the letterhead.', 'Whose → người.'],
    ['I forgot to bring the contract.', 'I have a copy on my laptop.', 'It was signed.', 'For three years.', 'Vấn đề → giải pháp.'],
  ],
  p3: [
    {
      title: 'A customer in a bookshop',
      lines: [
        'M: Excuse me, I am looking for a book on Italian cooking by Marco Rossi.',
        'W: Let me check. We had it last week, but it has sold out. I can order it for you.',
        'M: How long would that take?',
        'W: Three or four days. We will send you a text message when it arrives.',
        'M: Fine. Do I need to pay now?',
        'W: No, you can pay when you collect it.',
      ],
      qs: [
        ['What is the man looking for?', 'A cookbook', 'A travel guide', 'A dictionary', 'A magazine', 'Lời thoại.'],
        ['What does the woman offer to do?', 'Order the book', 'Give a discount', 'Lend him a copy', 'Call another shop', 'Lời thoại.'],
        ['When will the man pay?', 'When he collects the book', 'Now', 'By text message', 'In four days by mail', 'Câu cuối.'],
      ],
    },
    {
      title: 'A delayed building project',
      lines: [
        'W: The builders say the new warehouse will not be finished until the end of October.',
        'M: That is a month late. What happened?',
        'W: The steel for the roof arrived three weeks late, and then it rained for ten days.',
        'M: We have stock arriving in the middle of October. Where will we put it?',
        'W: I have asked about renting space at the old warehouse on Dock Road for six weeks.',
      ],
      qs: [
        ['What is being built?', 'A warehouse', 'An office', 'A road', 'A dock', 'Lời thoại.'],
        ['What is one reason for the delay?', 'Materials arrived late.', 'Workers went on strike.', 'The plans were changed.', 'The money ran out.', 'Lời thoại.'],
        ['What has the woman done?', 'Asked about renting temporary space', 'Canceled the stock order', 'Hired new builders', 'Sold the old warehouse', 'Câu cuối.'],
      ],
    },
    {
      title: 'A new customer loyalty card',
      lines: [
        'M: Head office wants every store to sign up at least two hundred customers for the new loyalty card this month.',
        'W: How many do we have so far?',
        'M: Eighty-five, and it is already the fifteenth.',
        'W: We could offer a free coffee to everyone who signs up.',
        'M: Good idea. I will make a poster for the entrance.',
      ],
      qs: [
        ['What is the store\'s target?', 'Two hundred sign-ups', 'Eighty-five sign-ups', 'Fifteen sign-ups', 'One thousand sales', 'Lời thoại.'],
        ['What does the woman suggest?', 'Offering a free coffee', 'Lowering prices', 'Extending the deadline', 'Hiring more staff', 'Lời thoại.'],
        ['What will the man do?', 'Make a poster', 'Call head office', 'Buy coffee', 'Count the cards', 'Câu cuối.'],
      ],
    },
    {
      title: 'A problem with a flight booking',
      lines: [
        'W: Hello, I booked a flight to Vienna for the tenth of May, but my confirmation shows the tenth of June.',
        'M: I am sorry. Let me look at your booking. Yes, I see the mistake.',
        'W: Can it be changed?',
        'M: There are still seats on May tenth. Because the error was ours, there will be no change fee.',
        'W: Thank you. Could you send me a new confirmation?',
      ],
      qs: [
        ['What is wrong with the booking?', 'The date is wrong.', 'The destination is wrong.', 'The name is misspelled.', 'The price is too high.', 'Lời thoại.'],
        ['Why is there no change fee?', 'The company made the error.', 'The woman is a member.', 'The flight is empty.', 'It is a special offer.', 'Lời thoại.'],
        ['What does the woman ask for?', 'A new confirmation', 'A refund', 'A better seat', 'A hotel booking', 'Câu cuối.'],
      ],
    },
    {
      title: 'Discussing a new assistant',
      lines: [
        'M: How is the new assistant getting on?',
        'W: Very well. He has already reorganized the filing system, and he is good with customers on the phone.',
        'M: Excellent. Does he need any training?',
        'W: He has not used our accounting software before. There is a one-day course next week.',
        'M: Please register him. The department will pay.',
      ],
      qs: [
        ['What does the woman say about the assistant?', 'He is doing well.', 'He is often late.', 'He dislikes the job.', 'He is leaving.', 'Lời thoại.'],
        ['What training does he need?', 'Accounting software', 'Telephone skills', 'Filing', 'Customer service', 'Lời thoại.'],
        ['Who will pay for the course?', 'The department', 'The assistant', 'The woman', 'The software company', 'Câu cuối.'],
      ],
    },
    {
      title: 'A customer returns a faulty kettle',
      lines: [
        'W: This kettle stopped working after two weeks. Here is my receipt.',
        'M: I am sorry. Would you like a replacement or a refund?',
        'W: A replacement, please. But not the same model.',
        'M: This one is ten dollars more, but it has a three-year guarantee.',
        'W: I will take it and pay the difference.',
      ],
      qs: [
        ['What is wrong with the kettle?', 'It stopped working.', 'It leaks.', 'It is too small.', 'It is the wrong color.', 'Lời thoại.'],
        ['What does the woman want?', 'A different model', 'A refund', 'A repair', 'The same model', 'Lời thoại.'],
        ['What will the woman do?', 'Pay ten dollars more', 'Come back tomorrow', 'Keep the old kettle', 'Write a complaint', 'Câu cuối.'],
      ],
    },
    {
      title: 'Organizing a company blood donation',
      lines: [
        'M: The hospital has asked whether our company would host a blood donation day.',
        'W: That is a good cause. Where would it be held?',
        'M: They bring a mobile unit that parks outside. They just need electricity and about thirty volunteers.',
        'W: I am sure we can find thirty. I will send an email to all staff.',
        'M: Great. They suggested the fourteenth of next month.',
      ],
      qs: [
        ['What has the hospital asked?', 'To hold a blood donation day at the company', 'To borrow a vehicle', 'To hire some staff', 'To use the car park for patients', 'Lời thoại.'],
        ['What does the hospital need from the company?', 'Electricity and volunteers', 'Doctors', 'A large room', 'Money', 'Lời thoại.'],
        ['What will the woman do?', 'Email all staff', 'Call the hospital', 'Donate blood today', 'Book the car park', 'Lời thoại.'],
      ],
    },
    {
      title: 'A hotel room with a problem',
      lines: [
        'W: Hello, this is room five ten. The shower has no hot water.',
        'M: I am sorry, madam. A pipe is being repaired on your floor. It should be fixed within the hour.',
        'W: I need to leave for a dinner in thirty minutes.',
        'M: You are welcome to use the shower in the spa on the second floor. I will send up a key card right away.',
      ],
      qs: [
        ['What is the problem?', 'There is no hot water.', 'The room is noisy.', 'The door will not lock.', 'The light is broken.', 'Lời thoại.'],
        ['Why can the woman not wait?', 'She has a dinner soon.', 'She is checking out.', 'She has a flight.', 'She feels ill.', 'Lời thoại.'],
        ['What does the man offer?', 'Use of a shower in the spa', 'A different room', 'A refund', 'A free dinner', 'Câu cuối.'],
      ],
    },
    {
      title: 'Planning a newsletter for customers',
      lines: [
        'M: I would like to start a monthly email newsletter for our customers.',
        'W: What would be in it?',
        'M: New products, a special offer, and a short article with tips on home decorating.',
        'W: I can write the articles. Who will design it?',
        'M: I have found a simple template online. Could you have the first article ready by the twentieth?',
      ],
      qs: [
        ['What does the man want to start?', 'An email newsletter', 'A new store', 'A decorating course', 'A magazine', 'Lời thoại.'],
        ['What will the woman do?', 'Write the articles', 'Design the template', 'Choose the products', 'Send the emails', 'Lời thoại.'],
        ['When is the first article due?', 'By the twentieth', 'Tomorrow', 'Next month', 'By the tenth', 'Câu cuối.'],
      ],
    },
    {
      title: 'A driver delivers a package',
      lines: [
        'M: Good morning. I have a delivery for Ms. Novak. It needs a signature.',
        'W: She is not in today. Can I sign for it?',
        'M: Are you a colleague?',
        'W: Yes, I am her assistant.',
        'M: That is fine. Please sign here and print your name. Where shall I leave the box?',
        'W: On that table by the window, please.',
      ],
      qs: [
        ['Why can Ms. Novak not sign?', 'She is absent.', 'She is in a meeting.', 'She has left the company.', 'She refused the delivery.', 'Lời thoại.'],
        ['Who signs for the package?', "Ms. Novak's assistant", 'The driver', 'A security guard', 'A customer', 'Lời thoại.'],
        ['Where will the box be left?', 'On a table by the window', 'At reception', 'In the storeroom', 'Outside the door', 'Câu cuối.'],
      ],
    },
    {
      title: 'Choosing a venue for a workshop',
      lines: [
        'W: We need a venue for the design workshop. There will be eighteen people.',
        'M: Here are the four rooms available. Natural light is important for design work.',
        'W: And the budget is three hundred dollars for the day.',
        'M: Then this one is the only room that fits all three conditions.',
        'W: Please reserve it for the twelfth.',
      ],
      graphic: ['Workshop rooms (per day)', 'Room | Seats | Windows | Price\nStudio A | 12 | Yes | $180\nStudio B | 20 | No | $220\nLoft | 24 | Yes | $280\nGallery | 30 | Yes | $400'],
      qs: [
        ['How many people will attend?', 'Eighteen', 'Twelve', 'Twenty-four', 'Thirty', 'Lời thoại.'],
        ['Why is natural light important?', 'It is needed for design work.', 'It saves electricity.', 'The speakers dislike lamps.', 'Photos will be taken.', 'Lời thoại.'],
        ['Look at the graphic. Which room will be reserved?', 'Loft', 'Studio A', 'Studio B', 'Gallery', 'Đủ 18 chỗ, có cửa sổ, ≤ $300: Loft.'],
      ],
    },
  ],
  p4: [
    {
      title: 'Announcement in a department store',
      lines: [
        'W: Good morning, shoppers, and welcome to Harlow\'s. Today only, our kitchen department on the third floor is holding a cooking demonstration at eleven and at two.',
        'W: Everyone who attends will receive a ten percent discount on any cookware bought today.',
        'W: Seats are limited, so please come to the third floor a few minutes early.',
      ],
      qs: [
        ['What is being held today?', 'A cooking demonstration', 'A fashion show', 'A book signing', 'A clearance sale', 'Thông báo.'],
        ['What do attendees receive?', 'A discount on cookware', 'A free meal', 'A gift bag', 'A recipe book', 'Thông báo.'],
        ['Why should shoppers arrive early?', 'Seats are limited.', 'The elevator is slow.', 'The store closes early.', 'There is a long line for food.', 'Câu cuối.'],
      ],
    },
    {
      title: 'Voicemail from a hotel manager',
      lines: [
        'M: Hello, Ms. Fischer. This is Daniel Roth, manager of the Lakeside Hotel.',
        'M: I am calling about your review of your recent stay. I was very sorry to read that your room was not cleaned properly on the second day.',
        'M: I have spoken to our housekeeping team, and I would like to offer you a free night on your next visit. Please call me directly on five five five, zero one two three.',
      ],
      qs: [
        ['Why is the speaker calling?', 'To respond to a complaint', 'To confirm a booking', 'To request a payment', 'To offer a job', 'Lời nhắn.'],
        ['What was the problem?', 'A room was not cleaned properly.', 'The room was too small.', 'The breakfast was cold.', 'The bill was wrong.', 'Lời nhắn.'],
        ['What does the speaker offer?', 'A free night', 'A refund', 'A room upgrade today', 'A free dinner', 'Lời nhắn.'],
      ],
    },
    {
      title: 'Advertisement for a tax service',
      lines: [
        'W: Is tax season giving you a headache? Let the experts at ClearTax take care of it.',
        'W: Our advisers will prepare your tax return in under an hour, and we guarantee that it will be correct. If we make a mistake, we pay the penalty.',
        'W: Book an appointment before March thirty-first and save twenty dollars. We have offices in fifteen locations and are open on Saturdays.',
      ],
      qs: [
        ['What service is offered?', 'Preparing tax returns', 'Selling insurance', 'Treating headaches', 'Lending money', 'Quảng cáo.'],
        ['What does the company promise if it makes a mistake?', 'It will pay the penalty.', 'It will give a free appointment.', 'It will apologize in writing.', 'It will refund twenty dollars.', 'Quảng cáo.'],
        ['How can customers save twenty dollars?', 'By booking before March 31', 'By coming on a Saturday', 'By bringing a friend', 'By paying cash', 'Quảng cáo.'],
      ],
    },
    {
      title: 'Talk to new drivers at a delivery company',
      lines: [
        'M: Welcome to QuickDrop. Before you go out on the road, here are three rules.',
        'M: First, never leave a package outside without the customer\'s permission. Second, take a photograph of every delivery with your handheld device. Third, if you are running more than twenty minutes late, call the office so that we can warn the customer.',
        'M: Your vans are parked in bay four. Please check the tires and fuel before you leave.',
      ],
      qs: [
        ['What must drivers do with every delivery?', 'Take a photograph', 'Get a signature', 'Call the office', 'Leave it outside', 'Lời nói.'],
        ['When should drivers call the office?', 'When they are more than twenty minutes late', 'After every delivery', 'At the end of the day', 'When the van is empty', 'Lời nói.'],
        ['What should drivers check before leaving?', 'The tires and fuel', 'The packages', 'The photographs', 'The customer list', 'Câu cuối.'],
      ],
    },
    {
      title: 'Recorded message for a city council',
      lines: [
        'W: You have reached the city council\'s waste collection line.',
        'W: Because of the public holiday on Monday, all collections this week will take place one day later than usual. For example, if your collection day is Tuesday, your bins will be emptied on Wednesday.',
        'W: To report a missed collection, press one. To order a new recycling bin, press two.',
      ],
      qs: [
        ['Why are collections later this week?', 'There is a public holiday.', 'The trucks are being repaired.', 'There is bad weather.', 'There is a staff shortage.', 'Thông báo.'],
        ['When will Tuesday\'s bins be emptied?', 'On Wednesday', 'On Monday', 'On Thursday', 'On Tuesday as usual', 'Thông báo.'],
        ['Why would a caller press two?', 'To order a recycling bin', 'To report a missed collection', 'To pay a bill', 'To hear the timetable', 'Câu cuối.'],
      ],
    },
    {
      title: 'Excerpt from a marketing meeting',
      lines: [
        'M: The results of our online advertising test are in. We ran two versions of the same advertisement for two weeks.',
        'M: Version A, with a photograph of the product, was clicked on four thousand times. Version B, which showed a customer using the product, was clicked on nine thousand times.',
        'M: So, from next month, all our advertisements will show real customers. I would like the design team to prepare three examples by Friday.',
      ],
      qs: [
        ['What was tested?', 'Two versions of an advertisement', 'Two new products', 'Two websites', 'Two prices', 'Lời nói.'],
        ['Which version was more successful?', 'The one showing a customer', 'The one showing only the product', 'Both were equal', 'Neither worked', '9.000 so với 4.000 lượt nhấp.'],
        ['What should the design team do by Friday?', 'Prepare three examples', 'Take new product photos', 'Write a report', 'Run another test', 'Câu cuối.'],
      ],
    },
    {
      title: 'News report on a hotel opening',
      lines: [
        'W: The city\'s tallest building, the forty-story Sky Tower, will welcome its first hotel guests next Friday.',
        'W: The hotel occupies the top fifteen floors and has three hundred rooms, a restaurant with views across the bay, and a swimming pool on the roof.',
        'W: It has created four hundred jobs. Room prices start at two hundred and fifty dollars a night.',
      ],
      qs: [
        ['What will open next Friday?', 'A hotel', 'An office tower', 'A swimming club', 'A restaurant chain', 'Bản tin.'],
        ['Where is the swimming pool?', 'On the roof', 'In the basement', 'On the fifteenth floor', 'Beside the bay', 'Bản tin.'],
        ['How many jobs has the hotel created?', 'Four hundred', 'Three hundred', 'Fifteen', 'Two hundred and fifty', 'Bản tin.'],
      ],
    },
    {
      title: 'Message about a client lunch',
      lines: [
        'M: Hi, Petra. It is Jonas. I have looked at the restaurants near the client\'s office for Thursday\'s lunch.',
        'M: The client is vegetarian, and we need a place that takes reservations, because we only have one hour. Only one restaurant on the list offers both, so I have booked a table for four at twelve thirty.',
        'M: See you there.',
      ],
      graphic: ['Restaurants near the client', 'Restaurant | Vegetarian menu | Reservations\nThe Steakhouse | No | Yes\nGreen Leaf | Yes | Yes\nNoodle Bar | Yes | No\nBurger Stop | No | No'],
      qs: [
        ['What is the message about?', 'A lunch with a client', 'A new office', 'A cooking class', 'A staff party', 'Lời nhắn.'],
        ['Look at the graphic. Where will the lunch take place?', 'Green Leaf', 'The Steakhouse', 'Noodle Bar', 'Burger Stop', 'Có thực đơn chay và nhận đặt bàn.'],
        ['For how many people is the table booked?', 'Four', 'Two', 'Twelve', 'Six', 'Lời nhắn.'],
      ],
    },
  ],
};
