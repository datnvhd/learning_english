/** TOEIC đề 5 – phần Nghe bổ sung để đủ 100 câu (xem ghi chú "ĐỀ ĐẦY ĐỦ" trong helpers.ts) */
import { RawToeicL } from '../helpers';

export const L: RawToeicL = {
  p2: [
    ['Where can I get a copy of the floor plan?', 'From the facilities office.', 'Three floors up.', 'It was planned last year.', 'Where → nơi lấy.'],
    ['Who is giving the safety briefing?', 'The site supervisor.', 'It was very brief.', 'In the main hall.', 'Who → người.'],
    ['When is the next shuttle to the airport?', 'In about ten minutes.', 'From the hotel entrance.', 'It costs eight dollars.', 'When → thời gian.'],
    ['How do you want your steak cooked?', 'Medium, please.', 'With potatoes.', 'It was delicious.', 'How → cách chế biến.'],
    ['Have you backed up the files?', 'Yes, I did it last night.', 'At the back of the room.', 'A large file.', 'Câu hỏi Yes/No.'],
    ['Why are you working from home tomorrow?', 'A technician is coming to fix my heating.', 'At my kitchen table.', 'From nine to five.', 'Why → lý do.'],
    ['Would you mind checking this translation?', 'Not at all. Send it over.', 'It is in French.', 'I mind my manners.', '"Would you mind...?" → "Not at all".'],
    ['Which of the candidates has the most experience?', 'The one from the logistics firm.', 'Three years ago.', 'Experience is important.', 'Which → xác định.'],
    ["The presentation went well, didn't it?", 'Yes, the clients seemed impressed.', 'It went to the wrong room.', 'On the big screen.', 'Câu hỏi đuôi → đồng tình.'],
    ['Can you recommend a good accountant?', 'I can give you the name of mine.', 'It counts a lot.', 'On account of the weather.', 'Lời nhờ giới thiệu.'],
    ['How much is the registration fee?', 'Sixty dollars per person.', 'Online or by phone.', 'Before the end of May.', 'How much → số tiền.'],
    ['Our lease expires at the end of the year.', 'Are we planning to renew it?', 'At least once.', 'It was a happy new year.', 'Câu thông tin → hỏi lại kế hoạch.'],
    ['Would you rather drive or take the train?', 'The train is more relaxing.', 'Yes, I would.', 'It was a long drive.', 'Câu hỏi lựa chọn.'],
    ['Is there a pharmacy near the hotel?', 'Yes, just around the corner.', 'For two nights.', 'I feel much better.', 'Câu hỏi Yes/No → vị trí.'],
    ["Let's take a short break.", 'Good idea. I need some coffee.', 'It broke yesterday.', 'It is not short enough.', 'Lời đề nghị → tán thành.'],
    ['Whose signature is on this form?', 'It looks like Mr. Tan\'s.', 'In blue ink.', 'On the last page.', 'Whose → người ký.'],
    ['The air conditioning is too cold in here.', 'I will turn it down.', 'It is an old building.', 'Yes, I caught a cold.', 'Phàn nàn → hành động xử lý.'],
  ],
  p3: [
    {
      title: 'A problem with a hotel bill',
      lines: [
        'M: Excuse me, I am checking out of room two fifteen. I think there is a charge on my bill that is not mine.',
        'W: Let me see. Is it the forty dollars for room service on Tuesday night?',
        'M: Yes. I was out at a dinner that evening.',
        'W: I apologize. It seems the charge was entered for the wrong room. I will remove it and print a new bill for you.',
      ],
      qs: [
        ['What is the man doing?', 'Checking out of a hotel', 'Ordering room service', 'Booking a room', 'Paying for dinner', '"I am checking out of room two fifteen".'],
        ['What mistake was made?', 'A charge was put on the wrong room.', 'The room rate was too high.', 'The man was given the wrong key.', 'The bill was lost.', '"the charge was entered for the wrong room".'],
        ['What will the woman do?', 'Print a corrected bill', 'Call the restaurant', 'Offer a free night', 'Charge his card again', '"I will remove it and print a new bill".'],
      ],
    },
    {
      title: 'Organizing a product launch',
      lines: [
        'W: The launch event for the new smartwatch is in three weeks. Have the invitations gone out?',
        'M: Yes, to about two hundred journalists and retailers. So far, eighty have replied.',
        'W: Good. What about the venue?',
        'M: The Skyline Hall is confirmed. But they need to know by Friday whether we want a stage.',
        'W: We do. The CEO will give a short speech. Please tell them today.',
      ],
      qs: [
        ['What event are the speakers preparing?', 'A product launch', 'A press interview', 'A staff party', 'A trade fair', '"The launch event for the new smartwatch".'],
        ['How many people have replied so far?', 'Eighty', 'Two hundred', 'Three', 'Twenty', '"eighty have replied".'],
        ['What does the woman ask the man to do today?', 'Inform the venue about the stage', 'Write the CEO\'s speech', 'Send more invitations', 'Visit the hall', '"Please tell them today".'],
      ],
    },
    {
      title: 'A new delivery van',
      lines: [
        'M: The repair shop called. Fixing the old delivery van would cost three thousand dollars.',
        'W: That is almost as much as the van is worth. Maybe it is time to replace it.',
        'M: I think so, too. An electric van would save us a lot on fuel.',
        'W: True, but they are expensive. Can you find out whether the city offers any grants for electric vehicles?',
        'M: I will look into it this afternoon.',
      ],
      qs: [
        ['What problem are the speakers discussing?', 'An expensive vehicle repair', 'A late delivery', 'A driver shortage', 'A parking fine', 'Sửa xe tốn ba nghìn đô.'],
        ['What advantage of an electric van does the man mention?', 'Lower fuel costs', 'More space', 'Higher speed', 'A longer warranty', '"would save us a lot on fuel".'],
        ['What will the man do this afternoon?', 'Research grants', 'Sell the old van', 'Visit a dealer', 'Call the repair shop', '"find out whether the city offers any grants" – "I will look into it".'],
      ],
    },
    {
      title: 'A question about a gym class',
      lines: [
        'W: Hi, I would like to join the evening yoga class. Is there still space?',
        'M: The Monday class is full, but there are places on Wednesday at seven.',
        'W: Wednesday works. Do I need to bring my own mat?',
        'M: We have mats you can borrow, but most people prefer to bring their own.',
        'W: OK. Can I pay for the whole month now?',
        'M: Yes, it is forty-eight dollars.',
      ],
      qs: [
        ['Which class will the woman join?', 'The Wednesday class', 'The Monday class', 'A morning class', 'A weekend class', '"there are places on Wednesday" – "Wednesday works".'],
        ['What does the man say about mats?', 'They can be borrowed.', 'They must be bought.', 'They are not needed.', 'They cost extra.', '"We have mats you can borrow".'],
        ['How much will the woman pay?', '$48', '$7', '$40', '$84', '"it is forty-eight dollars".'],
      ],
    },
    {
      title: 'Preparing a meeting room',
      lines: [
        'M: The clients from Brazil arrive at two. Is the meeting room ready?',
        'W: Almost. I have set up the projector, but there are only six chairs and we need ten.',
        'M: Take four from the training room. Nobody is using it today.',
        'W: Will do. Should I order some refreshments?',
        'M: Yes, coffee and fruit. And please put name cards on the table.',
      ],
      qs: [
        ['What is missing from the meeting room?', 'Enough chairs', 'A projector', 'A table', 'A screen', '"there are only six chairs and we need ten".'],
        ['Where will the woman get what she needs?', 'From the training room', 'From a storage closet', 'From another building', 'From a supplier', '"Take four from the training room".'],
        ['What does the man ask the woman to put on the table?', 'Name cards', 'Brochures', 'Flowers', 'Contracts', '"please put name cards on the table".'],
      ],
    },
    {
      title: 'A question about a phone plan',
      lines: [
        'W: Hello, my phone bill this month is much higher than usual. Could you tell me why?',
        'M: Let me check your account. It appears you used a lot of data while you were abroad.',
        'W: Yes, I was in Italy for a week. I thought roaming was included.',
        'M: It is included only in our premium plan. If you travel often, I recommend switching. It is ten dollars more per month.',
        'W: I will think about it.',
      ],
      qs: [
        ['Why is the woman calling?', 'Her bill is unusually high.', 'Her phone is broken.', 'She wants a new phone.', 'She lost her phone abroad.', '"my phone bill this month is much higher than usual".'],
        ['What caused the extra charge?', 'Using data in another country', 'Calling too many people', 'A late payment', 'A new phone', '"you used a lot of data while you were abroad".'],
        ['What does the man recommend?', 'Changing to a different plan', 'Turning off the phone', 'Buying a local card', 'Paying in advance', '"I recommend switching".'],
      ],
    },
    {
      title: 'Discussing a job candidate',
      lines: [
        'M: What did you think of the last candidate, Ms. Ito?',
        'W: She was the strongest so far. Her experience in export sales is exactly what we need.',
        'M: I agree, but she asked for a salary above our range.',
        'W: Perhaps we could offer extra vacation days instead.',
        'M: That might work. Let us talk to the director before we make an offer.',
      ],
      qs: [
        ['What do the speakers like about Ms. Ito?', 'Her experience', 'Her language skills', 'Her low salary request', 'Her degree', '"Her experience in export sales is exactly what we need".'],
        ['What is the problem?', 'She wants a higher salary than planned.', 'She cannot start soon.', 'She lives abroad.', 'She has another offer.', '"she asked for a salary above our range".'],
        ['What will the speakers do next?', 'Speak to the director', 'Interview more candidates', 'Send a contract', 'Reject the candidate', '"talk to the director before we make an offer".'],
      ],
    },
    {
      title: 'Returning a rental car',
      lines: [
        'W: Good afternoon. I am returning this car. Here are the keys.',
        'M: Thank you. Did you fill the tank?',
        'W: Yes, at the station down the road.',
        'M: Let me check the car. There is a small scratch on the rear door.',
        'W: That was already there. It is marked on the form I signed.',
        'M: You are right. Everything is fine. Your deposit will be returned to your card within three days.',
      ],
      qs: [
        ['What is the woman doing?', 'Returning a rental car', 'Buying a car', 'Reporting an accident', 'Renting a car', '"I am returning this car".'],
        ['What does the man notice?', 'A scratch on a door', 'An empty tank', 'A missing key', 'A flat tire', '"a small scratch on the rear door".'],
        ['What will happen within three days?', 'The deposit will be refunded.', 'The car will be repaired.', 'A bill will be sent.', 'The form will be signed.', '"Your deposit will be returned to your card within three days".'],
      ],
    },
    {
      title: 'A staff survey',
      lines: [
        'M: The results of the staff survey are in. The biggest complaint is the lack of quiet space.',
        'W: I am not surprised. The open office is very noisy.',
        'M: One idea is to turn the old storage room into a quiet room with four desks.',
        'W: That would not cost much. We would only need furniture and better lighting.',
        'M: I will get a quote from the furniture supplier.',
      ],
      qs: [
        ['What is the main complaint in the survey?', 'A lack of quiet space', 'Low salaries', 'Long hours', 'Poor lighting', '"The biggest complaint is the lack of quiet space".'],
        ['What do the speakers propose?', 'Converting a storage room', 'Moving to a new building', 'Buying headphones', 'Closing the open office', '"turn the old storage room into a quiet room".'],
        ['What will the man do?', 'Get a price for furniture', 'Run another survey', 'Paint the room', 'Speak to the staff', '"I will get a quote from the furniture supplier".'],
      ],
    },
    {
      title: 'A customer at a print shop',
      lines: [
        'W: Hi, I need fifty copies of this training manual, bound, by tomorrow morning.',
        'M: How many pages is it?',
        'W: One hundred and twenty.',
        'M: We can do it, but it will have to be black and white. Color would take two days.',
        'W: Black and white is fine. Can you deliver them to my office?',
        'M: Yes, for a five-dollar charge. They will be there by nine.',
      ],
      qs: [
        ['What does the woman need?', 'Copies of a manual', 'A training course', 'A color poster', 'A new printer', '"fifty copies of this training manual".'],
        ['Why will the copies be black and white?', 'Color would take too long.', 'Color is too expensive.', 'The color printer is broken.', 'The manual has no pictures.', '"Color would take two days".'],
        ['What extra service does the woman request?', 'Delivery', 'Design help', 'Translation', 'Gift wrapping', '"Can you deliver them to my office?"'],
      ],
    },
    {
      title: 'Choosing a lunch menu',
      lines: [
        'M: We need to order lunch for the workshop on Friday. There will be twenty people.',
        'W: Here is the caterer\'s menu. Our budget is twelve dollars per person.',
        'M: Several participants are vegetarian, so we need a menu with a vegetarian choice.',
        'W: Then there is only one option within the budget.',
        'M: Let us order that one.',
      ],
      graphic: ['Lunch menus (per person)', 'Menu | Includes | Price\nA | Meat sandwiches, chips | $9\nB | Sandwiches (meat or vegetarian), fruit | $11\nC | Hot buffet with vegetarian dishes | $16\nD | Grilled chicken, salad | $12'],
      qs: [
        ['How many people will attend the workshop?', 'Twenty', 'Twelve', 'Sixteen', 'Nine', '"There will be twenty people".'],
        ['What special need do the speakers mention?', 'Vegetarian food', 'Food without nuts', 'Hot drinks', 'An early lunch', '"Several participants are vegetarian".'],
        ['Look at the graphic. Which menu will the speakers order?', 'Menu B', 'Menu A', 'Menu C', 'Menu D', 'Có món chay và trong ngân sách $12: Menu B ($11).'],
      ],
    },
  ],
  p4: [
    {
      title: 'Announcement at a museum',
      lines: [
        'W: Good afternoon, visitors. The museum will close in thirty minutes, at five o\'clock.',
        'W: The gift shop on the ground floor will remain open until five thirty. Please collect any coats and bags from the cloakroom before you leave.',
        'W: We hope you have enjoyed your visit. Our new exhibition on ancient Egypt opens next Saturday.',
      ],
      qs: [
        ['When does the museum close?', 'At five o\'clock', 'At five thirty', 'In an hour', 'At six o\'clock', '"will close in thirty minutes, at five o\'clock".'],
        ['What are visitors reminded to do?', 'Collect their belongings', 'Buy a ticket', 'Return their audio guides', 'Fill in a survey', '"collect any coats and bags from the cloakroom".'],
        ['What opens next Saturday?', 'A new exhibition', 'A new gift shop', 'A café', 'A cloakroom', '"Our new exhibition on ancient Egypt opens next Saturday".'],
      ],
    },
    {
      title: 'Voicemail from a hotel',
      lines: [
        'M: Good morning, Ms. Tanaka. This is James from the Harbor View Hotel.',
        'M: I am calling about the scarf you left in your room when you checked out yesterday. Our housekeeping staff found it this morning.',
        'M: We can mail it to you free of charge. Please call us with your address, or reply to the email we sent you. We will hold the scarf at reception for thirty days.',
      ],
      qs: [
        ['Why is the speaker calling?', 'An item was left behind.', 'A payment was not received.', 'A booking was canceled.', 'A room is ready.', '"the scarf you left in your room".'],
        ['What does the hotel offer to do?', 'Mail the item for free', 'Deliver it by taxi', 'Give a discount', 'Keep it for a year', '"We can mail it to you free of charge".'],
        ['How long will the item be kept at reception?', 'Thirty days', 'One week', 'Three months', 'Until tomorrow', '"for thirty days".'],
      ],
    },
    {
      title: 'Radio advertisement for an online course',
      lines: [
        'W: Want to learn how to build a website but do not know where to start? Try CodeStart, the online course for complete beginners.',
        'W: In just eight weeks, you will create your own website, with support from a personal tutor. Lessons are available at any time, so you can study when it suits you.',
        'W: Sign up this month and the first two weeks are free. Visit codestart.example for details.',
      ],
      qs: [
        ['Who is the course designed for?', 'Beginners', 'Professional programmers', 'Teachers', 'Business owners only', '"the online course for complete beginners".'],
        ['How long does the course last?', 'Eight weeks', 'Two weeks', 'One month', 'One year', '"In just eight weeks".'],
        ['What is offered to people who sign up this month?', 'Two free weeks', 'A free laptop', 'A second tutor', 'A printed book', '"the first two weeks are free".'],
      ],
    },
    {
      title: 'Excerpt from a staff meeting',
      lines: [
        'M: One last item. As you know, our reception area is going to be renovated next month.',
        'M: While the work is going on, visitors will enter through the side door on Pine Street, and the receptionist will sit in the small meeting room next to it.',
        'M: The work should take about two weeks. I will send everyone a map by email, so please forward it to any clients who are planning to visit.',
      ],
      qs: [
        ['What will happen next month?', 'The reception area will be renovated.', 'The company will move.', 'A new receptionist will start.', 'Clients will tour the building.', '"our reception area is going to be renovated next month".'],
        ['How will visitors enter the building?', 'Through the side door', 'Through the garage', 'Through the main entrance', 'Through the loading area', '"through the side door on Pine Street".'],
        ['What are listeners asked to do with the map?', 'Send it to visiting clients', 'Print it for the receptionist', 'Post it on the door', 'Return it by email', '"forward it to any clients who are planning to visit".'],
      ],
    },
    {
      title: 'Recorded message for a cinema',
      lines: [
        'W: Thank you for calling the Royal Cinema. This week we are showing three films on four screens.',
        'W: Tickets are twelve dollars for adults and eight dollars for children and students. On Tuesdays, all tickets are half price.',
        'W: To book by phone, press one. Please note that our parking lot is closed for repairs; free parking is available at the shopping center across the street.',
      ],
      qs: [
        ['How much is an adult ticket on a normal day?', 'Twelve dollars', 'Eight dollars', 'Six dollars', 'Four dollars', '"twelve dollars for adults".'],
        ['What is special about Tuesdays?', 'Tickets are half price.', 'The cinema is closed.', 'Children enter free.', 'New films open.', '"On Tuesdays, all tickets are half price".'],
        ['Where should customers park?', 'At a nearby shopping center', 'In the cinema parking lot', 'On the street', 'At the train station', '"free parking is available at the shopping center across the street".'],
      ],
    },
    {
      title: 'Talk to new sales staff',
      lines: [
        'M: Good morning, and welcome to the sales team. This week you will spend most of your time learning about our products.',
        'M: Tomorrow you will visit the factory to see how the furniture is made. On Wednesday and Thursday, each of you will go out with an experienced representative to meet customers.',
        'M: On Friday, we will discuss what you have learned. Please take notes during the week, because I will ask each of you for one suggestion.',
      ],
      qs: [
        ['What does the company sell?', 'Furniture', 'Cars', 'Software', 'Clothing', '"to see how the furniture is made".'],
        ['What will the listeners do on Wednesday and Thursday?', 'Visit customers with a colleague', 'Tour the factory', 'Take an exam', 'Work in the office', '"go out with an experienced representative to meet customers".'],
        ['What are the listeners asked to do during the week?', 'Take notes', 'Write a report each day', 'Call ten customers', 'Read a manual', '"Please take notes during the week".'],
      ],
    },
    {
      title: 'News report on a local business',
      lines: [
        'W: In business news, Harlow Bakery, which has been making bread in this town since nineteen fifty-two, has won a national award for the best small food company.',
        'W: The judges praised the bakery for using flour from local farms and for training young bakers.',
        'W: Owner Peter Harlow says he will use the ten-thousand-dollar prize to buy a new oven. The bakery will hold an open day next Sunday to celebrate.',
      ],
      qs: [
        ['What has Harlow Bakery won?', 'A national award', 'A cooking competition on television', 'A government contract', 'A new shop', '"has won a national award".'],
        ['What did the judges praise?', 'The use of local flour', 'The low prices', 'The large factory', 'The website', '"using flour from local farms".'],
        ['What will the owner buy with the prize money?', 'A new oven', 'A delivery van', 'A second bakery', 'Advertising', '"to buy a new oven".'],
      ],
    },
    {
      title: 'Message about conference sessions',
      lines: [
        'M: Hello, this is Victor from the conference office with an update for speakers.',
        'M: The session with the highest number of registrations has been moved to the main auditorium, which has more seats. Its time remains the same. All other sessions will stay in their original rooms.',
        'M: Speakers should arrive fifteen minutes early to test the microphone.',
      ],
      graphic: ['Conference sessions', 'Session | Room | Registered\nOnline security | Room 3 | 45\nDigital marketing | Room 5 | 120\nLeadership | Room 7 | 60\nRemote teams | Room 9 | 38'],
      qs: [
        ['Who is the message for?', 'Conference speakers', 'Hotel guests', 'Technicians', 'Journalists', '"an update for speakers".'],
        ['Look at the graphic. Which session will take place in the main auditorium?', 'Digital marketing', 'Online security', 'Leadership', 'Remote teams', 'Phiên có nhiều người đăng ký nhất: 120.'],
        ['Why should speakers arrive early?', 'To test the microphone', 'To register', 'To collect a badge', 'To meet the audience', '"to test the microphone".'],
      ],
    },
  ],
};
