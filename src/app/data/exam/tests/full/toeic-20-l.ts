/** TOEIC đề 20 – phần Nghe bổ sung để đủ 100 câu (xem ghi chú "ĐỀ ĐẦY ĐỦ" trong helpers.ts) */
import { RawToeicL } from '../helpers';

export const L: RawToeicL = {
  p2: [
    ['Where is the staff entrance?', 'Around the back, next to the car park.', 'At eight thirty.', 'With your ID card.', 'Where → vị trí.'],
    ['Who is giving the welcome speech?', 'The managing director.', 'For ten minutes.', 'In the main hall.', 'Who → người.'],
    ['When will the new software be installed?', 'Over the weekend.', 'On every computer.', 'By the IT team.', 'When → thời gian.'],
    ['How many boxes were delivered this morning?', 'Twelve, I think.', 'At nine.', 'By truck.', 'How many → số lượng.'],
    ['Would you like to add insurance to your booking?', 'No, thank you. I am already covered.', 'It is a good book.', 'I booked it online.', 'Lời mời → từ chối.'],
    ['Why is the store so busy today?', 'It is the first day of the sale.', 'On the high street.', 'Until nine.', 'Why → lý do.'],
    ['Have you sent the samples to the laboratory?', 'They went this morning by courier.', 'A simple test.', 'In the lab.', 'Câu hỏi Yes/No.'],
    ['Which platform does the train to Leeds leave from?', 'Platform five.', 'In ten minutes.', 'A return ticket.', 'Which → sân ga.'],
    ["You have met Mr. Tan before, haven't you?", 'Yes, at the conference in May.', 'He is tanned.', 'Before noon.', 'Câu hỏi đuôi.'],
    ['Could you hold the elevator, please?', 'Sure. Which floor?', 'It holds ten people.', 'I held it yesterday.', 'Lời nhờ → đồng ý.'],
    ['How far is it to the nearest bank?', 'About five minutes on foot.', 'Until five.', 'A savings account.', 'How far → khoảng cách.'],
    ['The conference room projector has been replaced.', 'Good. The old one was too dim.', 'I placed it there.', 'A new project.', 'Thông tin → nhận xét.'],
    ['Should I schedule the interview for Monday or Tuesday?', 'Tuesday is better for me.', 'Yes, schedule it.', 'It was an interview.', 'Câu hỏi lựa chọn.'],
    ['Is this the line for returns?', 'No, returns are at the next counter.', 'I returned it.', 'It is a long line.', 'Câu hỏi Yes/No.'],
    ["Let's share a taxi to the station.", 'Good idea. It will be cheaper.', 'I shared the file.', 'At the station.', 'Đề nghị → đồng ý.'],
    ['Whose turn is it to lock up tonight?', 'I did it yesterday, so it is yours.', 'With the key.', 'At six.', 'Whose → người.'],
    ['My badge does not open the door.', 'Go to security and have it reset.', 'It is a nice badge.', 'The door is open.', 'Vấn đề → giải pháp.'],
  ],
  p3: [
    {
      title: 'A customer books a hotel room',
      lines: [
        'W: Hello, I would like to book a double room for two nights from the eighth of March.',
        'M: Certainly. We have a standard double for one hundred and ten dollars a night, or a room with a sea view for one hundred and forty.',
        'W: The sea view, please. Is breakfast included?',
        'M: Yes, it is served from seven until ten.',
        'W: Good. We will arrive late, around ten p.m.',
        'M: That is no problem. Reception is open twenty-four hours.',
      ],
      qs: [
        ['How long will the woman stay?', 'Two nights', 'Eight nights', 'One night', 'A week', 'Lời thoại.'],
        ['Which room does she choose?', 'The room with a sea view', 'The standard double', 'A single room', 'A suite', 'Lời thoại.'],
        ['What does the man say about reception?', 'It is always open.', 'It closes at ten.', 'It opens at seven.', 'It is on the first floor.', 'Câu cuối.'],
      ],
    },
    {
      title: 'A problem with a delivery van',
      lines: [
        'M: One of our vans will not start this morning, and we have forty deliveries to make.',
        'W: Can the other two vans share them?',
        'M: Not all of them. They are already full.',
        'W: Then let us rent a van for the day. The rental office opens at eight.',
        'M: I will call them now. Could you phone the customers who may get their orders late?',
      ],
      qs: [
        ['What is the problem?', 'A van will not start.', 'A driver is ill.', 'Orders are missing.', 'The road is closed.', 'Lời thoại.'],
        ['What does the woman suggest?', 'Renting a van', 'Canceling deliveries', 'Buying a new van', 'Using taxis', 'Lời thoại.'],
        ['What does the man ask the woman to do?', 'Call some customers', 'Drive a van', 'Repair the van', 'Open the rental office', 'Câu cuối.'],
      ],
    },
    {
      title: 'Discussing a customer survey',
      lines: [
        'W: The survey results show that customers love our products but find the website hard to use.',
        'M: What do they find difficult?',
        'W: Mostly the checkout. It has six steps, and many people give up halfway.',
        'M: We should reduce it to three. Can the web team do that before the holiday season?',
        'W: They say it would take a month. I will ask them to start next week.',
      ],
      qs: [
        ['What do customers like?', 'The products', 'The website', 'The prices', 'The delivery', 'Lời thoại.'],
        ['What is the main problem with the website?', 'The checkout has too many steps.', 'It is too slow.', 'It has no pictures.', 'It crashes often.', 'Lời thoại.'],
        ['How long would the change take?', 'A month', 'A week', 'Three days', 'Six months', 'Lời thoại.'],
      ],
    },
    {
      title: 'A lost item at a gym',
      lines: [
        'M: Excuse me, I left my watch in a locker yesterday. Has anyone handed it in?',
        'W: Let me check the lost property box. What does it look like?',
        'M: It is silver, with a black leather strap.',
        'W: Yes, here it is. A cleaner found it last night. Could you sign here, please?',
        'M: Of course. Thank you so much.',
      ],
      qs: [
        ['What did the man lose?', 'A watch', 'A phone', 'A key', 'A wallet', 'Lời thoại.'],
        ['Who found it?', 'A cleaner', 'Another member', 'The receptionist', 'A trainer', 'Lời thoại.'],
        ['What must the man do?', 'Sign for it', 'Pay a fee', 'Show his passport', 'Come back tomorrow', 'Lời thoại.'],
      ],
    },
    {
      title: 'Planning a retirement gift',
      lines: [
        'W: Mrs. Kato retires at the end of the month. What shall we give her?',
        'M: She loves gardening. How about a voucher for the garden center?',
        'W: Good idea. We have collected two hundred and thirty dollars.',
        'M: Then a voucher for two hundred, and flowers with the rest.',
        'W: Perfect. I will buy them on Thursday and get a card for everyone to sign.',
      ],
      qs: [
        ['Why are the speakers buying a gift?', 'A colleague is retiring.', 'It is a birthday.', 'A colleague is getting married.', 'A manager was promoted.', 'Lời thoại.'],
        ['What will they give?', 'A garden center voucher and flowers', 'A watch', 'A book', 'A holiday', 'Lời thoại.'],
        ['What else will the woman get?', 'A card to sign', 'A cake', 'A photograph', 'Balloons', 'Câu cuối.'],
      ],
    },
    {
      title: 'A question about a bus pass',
      lines: [
        'M: Hi, I would like to buy a monthly bus pass.',
        'W: For which zones?',
        'M: I live in zone three and work in zone one.',
        'W: Then you need the three-zone pass. It is seventy-two dollars. If your employer is in our partner program, you get twenty percent off.',
        'M: I work for the city hospital.',
        'W: They are in the program. I just need to see your staff card.',
      ],
      qs: [
        ['What does the man want to buy?', 'A monthly bus pass', 'A single ticket', 'A train ticket', 'A parking permit', 'Lời thoại.'],
        ['Why will the man get a discount?', 'His employer is in a partner program.', 'He is a student.', 'He is buying two passes.', 'It is a special offer this month.', 'Lời thoại.'],
        ['What must the man show?', 'His staff card', 'His passport', 'His old pass', 'A bank card', 'Câu cuối.'],
      ],
    },
    {
      title: 'A broken heating system in a store',
      lines: [
        'W: The heating has failed, and it is only twelve degrees in the store.',
        'M: Have you called the engineer?',
        'W: Yes, he will be here at two. Until then, customers are complaining.',
        'M: Bring the portable heaters from the stockroom and put one near each cash register.',
        'W: Good idea. Should we offer hot drinks?',
        'M: Yes, free tea and coffee for everyone.',
      ],
      qs: [
        ['What is the problem?', 'The store is cold.', 'The store is too hot.', 'The lights are off.', 'The registers are broken.', 'Lời thoại.'],
        ['When will the engineer arrive?', 'At two', 'At twelve', 'Tomorrow', 'In ten minutes', 'Lời thoại.'],
        ['What will customers be offered?', 'Free hot drinks', 'A discount', 'A voucher', 'Blankets', 'Câu cuối.'],
      ],
    },
    {
      title: 'Arranging a meeting with a lawyer',
      lines: [
        'M: I need to see a lawyer about a contract with a new supplier.',
        'W: Ms. Reid handles commercial contracts. She is free on Wednesday at ten or Thursday at three.',
        'M: Wednesday at ten, please.',
        'W: Could you send us a copy of the contract beforehand, so that she can read it?',
        'M: I will email it this afternoon. How long will the meeting last?',
        'W: About an hour.',
      ],
      qs: [
        ['Why does the man need a lawyer?', 'To discuss a contract', 'To buy a house', 'To make a complaint', 'To start a company', 'Lời thoại.'],
        ['When will the meeting take place?', 'Wednesday at ten', 'Thursday at three', 'Wednesday at three', 'Thursday at ten', 'Lời thoại.'],
        ['What will the man send?', 'A copy of the contract', 'A payment', 'His passport', 'A list of questions', 'Lời thoại.'],
      ],
    },
    {
      title: 'A change to a work schedule',
      lines: [
        'W: Paul, could you work the early shift tomorrow instead of the late one?',
        'M: What time does it start?',
        'W: At six. Maria has a hospital appointment.',
        'M: I can do that, but I have no car in the morning, and the first bus arrives at six fifteen.',
        'W: I live near you. I will pick you up at five thirty.',
      ],
      qs: [
        ['What does the woman ask the man to do?', 'Work an earlier shift', 'Work on his day off', 'Stay late', 'Train Maria', 'Lời thoại.'],
        ['What is the man\'s difficulty?', 'He has no transport early in the morning.', 'He has an appointment.', 'He is too tired.', 'He lives far away.', 'Lời thoại.'],
        ['How will the problem be solved?', 'The woman will drive him.', 'He will take a taxi.', 'He will start later.', 'Maria will come in.', 'Câu cuối.'],
      ],
    },
    {
      title: 'A customer orders printed mugs',
      lines: [
        'M: I would like a hundred mugs with our company logo, as gifts for clients.',
        'W: Certainly. In white or in color?',
        'M: White, with the logo in blue.',
        'W: That will be four dollars each. We need five working days.',
        'M: Fine. Could you pack each one in a gift box?',
        'W: Yes, for fifty cents extra per mug.',
      ],
      qs: [
        ['What does the man want to order?', 'Mugs with a logo', 'T-shirts', 'Pens', 'Gift boxes only', 'Lời thoại.'],
        ['How long will the order take?', 'Five working days', 'One day', 'Two weeks', 'A month', 'Lời thoại.'],
        ['How much will each mug cost with a gift box?', '$4.50', '$4.00', '$5.00', '$0.50', '$4 + 50 xu.'],
      ],
    },
    {
      title: 'Choosing a venue for a company dinner',
      lines: [
        'W: We need a restaurant for forty-five people on the nineteenth.',
        'M: Here are four that have private rooms. Our budget is fifty dollars a head.',
        'W: And it must have parking, because most people will drive.',
        'M: Then there is only one choice.',
        'W: I will call them this afternoon.',
      ],
      graphic: ['Restaurants with private rooms', 'Restaurant | Room size | Price per person | Parking\nAzure | 40 | $45 | Yes\nBistro 21 | 60 | $48 | No\nCedar House | 50 | $50 | Yes\nDelmar | 80 | $65 | Yes'],
      qs: [
        ['How many people will attend?', 'Forty-five', 'Forty', 'Fifty', 'Sixty', 'Lời thoại.'],
        ['Why is parking important?', 'Most people will drive.', 'The restaurant is far from the station.', 'It will be raining.', 'The director insists.', 'Lời thoại.'],
        ['Look at the graphic. Which restaurant will be chosen?', 'Cedar House', 'Azure', 'Bistro 21', 'Delmar', 'Đủ 45 chỗ, ≤ $50, có bãi đỗ: Cedar House.'],
      ],
    },
  ],
  p4: [
    {
      title: 'Announcement in a train carriage',
      lines: [
        'M: Good evening, ladies and gentlemen. We will shortly be arriving at Bristol, our final stop.',
        'M: Please make sure you take all your belongings with you when you leave the train.',
        'M: Passengers continuing to Cardiff should cross to platform seven, where the connecting train will depart in twelve minutes.',
      ],
      qs: [
        ['Where is the train arriving?', 'In Bristol', 'In Cardiff', 'In London', 'In Bath', 'Thông báo.'],
        ['What are passengers reminded to do?', 'Take their belongings', 'Show their tickets', 'Stay seated', 'Use the front doors', 'Thông báo.'],
        ['Where does the Cardiff train leave from?', 'Platform seven', 'Platform twelve', 'The same platform', 'Platform one', 'Thông báo.'],
      ],
    },
    {
      title: 'Voicemail from an electrician',
      lines: [
        'W: Hello, Mr. Dean. This is Sara from Brightwire Electrical.',
        'W: I am sorry, but I will not be able to come at ten as we arranged. My previous job is taking longer than expected.',
        'W: I can be with you at one o\'clock instead, or tomorrow at nine. Please text me to say which you prefer. Again, I apologize for the change.',
      ],
      qs: [
        ['Why is the speaker calling?', 'To change an appointment', 'To send a bill', 'To cancel a job', 'To ask for directions', 'Lời nhắn.'],
        ['Why can she not come at ten?', 'Another job is taking longer.', 'Her van broke down.', 'She is ill.', 'She has no parts.', 'Lời nhắn.'],
        ['How should the listener reply?', 'By text message', 'By email', 'By calling the office', 'In person', 'Lời nhắn.'],
      ],
    },
    {
      title: 'Advertisement for an office furniture sale',
      lines: [
        'M: Setting up a new office? Visit Deskline\'s warehouse sale this Friday and Saturday.',
        'M: Desks, chairs, and cabinets from our showroom are reduced by up to seventy percent. Everything is in perfect condition.',
        'M: Delivery is free within thirty kilometers. Doors open at nine. Come early, because once an item is sold, it is gone.',
      ],
      qs: [
        ['When is the sale?', 'On Friday and Saturday', 'All week', 'On Sunday', 'Next month', 'Quảng cáo.'],
        ['What is said about the furniture?', 'It is in perfect condition.', 'It is damaged.', 'It is second-hand from customers.', 'It must be assembled.', 'Quảng cáo.'],
        ['What is free?', 'Delivery within thirty kilometers', 'A chair with every desk', 'Assembly', 'Parking', 'Quảng cáo.'],
      ],
    },
    {
      title: 'Talk to visitors at a television studio',
      lines: [
        'W: Welcome to Channel Nine Studios. On today\'s tour, you will see where our evening news is made.',
        'W: We will visit the newsroom, the control room, and finally the studio itself, where you can sit at the presenter\'s desk and have your photograph taken.',
        'W: Please switch off your phones in the control room, because they can interfere with our equipment. The tour lasts about an hour.',
      ],
      qs: [
        ['What will visitors see?', 'Where the news is produced', 'Where films are made', 'Where newspapers are printed', 'Where radios are built', 'Lời nói.'],
        ['What can visitors do in the studio?', 'Have a photograph taken at the desk', 'Read the news on air', 'Meet a film star', 'Operate the cameras', 'Lời nói.'],
        ['Why must phones be switched off in the control room?', 'They can affect the equipment.', 'Photographs are forbidden.', 'The room is quiet.', 'There is no signal.', 'Lời nói.'],
      ],
    },
    {
      title: 'Recorded message for a restaurant',
      lines: [
        'M: Thank you for calling the Olive Garden Bistro. We are open for lunch from twelve to three and for dinner from six to eleven.',
        'M: We are fully booked this Saturday evening for a private event.',
        'M: To make a reservation for another day, please leave your name, number, and the date after the tone, and we will call you back within two hours.',
      ],
      qs: [
        ['When is the restaurant open for dinner?', 'From six to eleven', 'From twelve to three', 'From five to ten', 'All day', 'Thông báo.'],
        ['Why are there no tables on Saturday evening?', 'There is a private event.', 'The restaurant is closed.', 'The kitchen is being repaired.', 'It is a holiday.', 'Thông báo.'],
        ['What should callers do to reserve a table?', 'Leave a message', 'Send an email', 'Press one', 'Call back tomorrow', 'Thông báo.'],
      ],
    },
    {
      title: 'Excerpt from a meeting about staff turnover',
      lines: [
        'W: In the past year, eleven people have left our customer service team. That is nearly a third of the department.',
        'W: In their exit interviews, most said the same thing: there was no chance of promotion.',
        'W: So we are creating a new position of senior adviser, with higher pay and more responsibility. Applications open next month, and they are open only to current team members.',
      ],
      qs: [
        ['What problem is the speaker discussing?', 'Many staff have left.', 'Customers are unhappy.', 'Pay is too high.', 'The department is too large.', 'Lời nói.'],
        ['What reason did most leavers give?', 'There was no chance of promotion.', 'The hours were too long.', 'The office was too far.', 'The work was boring.', 'Lời nói.'],
        ['Who may apply for the new position?', 'Current team members', 'Anyone in the company', 'External candidates only', 'Managers', 'Câu cuối.'],
      ],
    },
    {
      title: 'News report on a book fair',
      lines: [
        'M: The city\'s annual book fair opens tomorrow in the Exhibition Hall and runs for five days.',
        'M: More than two hundred publishers will take part, and forty authors will give talks and sign copies of their books.',
        'M: Entry is free for children under sixteen. On Saturday, the fair will stay open until ten p.m. for a special evening of poetry and music.',
      ],
      qs: [
        ['How long does the fair last?', 'Five days', 'Two days', 'One week', 'Forty days', 'Bản tin.'],
        ['Who enters free?', 'Children under sixteen', 'All visitors', 'Authors only', 'Students', 'Bản tin.'],
        ['What is special about Saturday?', 'The fair stays open late.', 'The fair is closed.', 'Books are half price.', 'Publishers leave.', 'Bản tin.'],
      ],
    },
    {
      title: 'Message about a client presentation',
      lines: [
        'W: Hi, Leo. It is Marta. I have looked at the four presentation slots the client offered us.',
        'W: We need at least forty-five minutes, and it has to be a morning, because our designer flies back in the afternoon. Only one slot works, so I have accepted it.',
        'W: Please have the slides ready by Monday.',
      ],
      graphic: ['Presentation slots', 'Day | Time | Length\nTuesday | 9:00 a.m. | 30 minutes\nTuesday | 2:00 p.m. | 60 minutes\nWednesday | 10:00 a.m. | 60 minutes\nThursday | 3:00 p.m. | 45 minutes'],
      qs: [
        ['How long does the team need?', 'At least forty-five minutes', 'Thirty minutes', 'Two hours', 'One day', 'Lời nhắn.'],
        ['Look at the graphic. When will the presentation take place?', 'Wednesday at 10:00 a.m.', 'Tuesday at 9:00 a.m.', 'Tuesday at 2:00 p.m.', 'Thursday at 3:00 p.m.', 'Buổi sáng và ≥ 45 phút: thứ Tư 10:00.'],
        ['What should the listener do by Monday?', 'Prepare the slides', 'Book a flight', 'Call the client', 'Design a logo', 'Câu cuối.'],
      ],
    },
  ],
};
