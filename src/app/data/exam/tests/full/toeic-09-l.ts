/** TOEIC đề 9 – phần Nghe bổ sung để đủ 100 câu (xem ghi chú "ĐỀ ĐẦY ĐỦ" trong helpers.ts) */
import { RawToeicL } from '../helpers';

export const L: RawToeicL = {
  p2: [
    ['Where can I find the meeting agenda?', 'I emailed it to you this morning.', 'At half past two.', 'Five items.', 'Where → "đã gửi email".'],
    ['Who is taking notes at the meeting?', 'Carlos volunteered.', 'In my notebook.', 'For an hour.', 'Who → người ghi chép.'],
    ['When did the shipment leave the warehouse?', 'Yesterday afternoon.', 'By truck.', 'To Portland.', 'When → thời điểm.'],
    ['How do you get to work every day?', 'I usually cycle.', 'About twenty minutes.', 'At eight thirty.', 'How → phương tiện.'],
    ['Would you like me to reserve a table?', 'Yes, for seven thirty, please.', 'It is reserved.', 'On the table.', 'Lời đề nghị → nhận lời.'],
    ['Why is the lobby so crowded?', 'A tour group has just arrived.', 'On the ground floor.', 'It is very large.', 'Why → lý do.'],
    ['Have you tried the new Vietnamese restaurant?', 'Not yet, but I would like to.', 'I tried to call.', 'It is new.', 'Câu hỏi Yes/No.'],
    ['Which printer is working?', 'The one in the hallway.', 'Black and white.', 'It prints quickly.', 'Which → xác định.'],
    ["The deadline is next Friday, isn't it?", 'No, it was moved to Wednesday.', 'A dead battery.', 'Every Friday.', 'Câu hỏi đuôi → đính chính.'],
    ['Could you explain the new return policy?', 'Sure. Customers now have sixty days.', 'I returned it.', 'A new policy.', 'Lời nhờ giải thích.'],
    ['How far is the factory from the port?', 'About thirty kilometers.', 'By ship.', 'Three days.', 'How far → khoảng cách.'],
    ['The air in this room is very dry.', 'I will bring in a humidifier.', 'It dried quickly.', 'On the top shelf.', 'Nhận xét → giải pháp.'],
    ['Do you want the report printed or emailed?', 'Emailed is fine.', 'Yes, please.', 'The printer is new.', 'Câu hỏi lựa chọn.'],
    ['Are there any vegetarian options on the menu?', 'Yes, several.', 'I am not hungry.', 'On the first page.', 'Câu hỏi Yes/No.'],
    ["Let's ask the clients for their feedback.", 'I will prepare a short survey.', 'He fed the cat.', 'It was back there.', 'Đề nghị → hành động.'],
    ['Whose handwriting is this?', 'It looks like Ms. Ono\'s.', 'With a pen.', 'On the whiteboard.', 'Whose → người.'],
    ['I am afraid I will be late for the meeting.', 'Shall I start without you?', 'It was late.', 'In the meeting room.', 'Thông báo đến trễ → hỏi lại.'],
  ],
  p3: [
    {
      title: 'A customer at a hardware store',
      lines: [
        'M: Hi, I am painting my living room. How much paint will I need?',
        'W: How big is the room?',
        'M: About twenty square meters of wall.',
        'W: Then one five-liter can should be enough for two coats. Have you chosen a color?',
        'M: Light gray. Do I need a special brush?',
        'W: A roller is faster for walls. We have a set with a roller and a tray for twelve dollars.',
      ],
      qs: [
        ['What is the man planning to do?', 'Paint a room', 'Build a wall', 'Buy a house', 'Clean a carpet', '"I am painting my living room".'],
        ['How much paint does the woman recommend?', 'One five-liter can', 'Two cans', 'Twenty liters', 'One liter', '"one five-liter can should be enough".'],
        ['What does the woman suggest using?', 'A roller', 'A small brush', 'A spray', 'A sponge', '"A roller is faster for walls".'],
      ],
    },
    {
      title: 'A scheduling conflict',
      lines: [
        'W: Peter, the client presentation and the budget meeting are both scheduled for ten on Tuesday.',
        'M: That is my mistake. I entered the wrong time for the budget meeting.',
        'W: Can it be moved to the afternoon?',
        'M: The finance director is only free until noon. How about nine instead of ten?',
        'W: That works, if we keep it to forty-five minutes.',
        'M: I will send out a new invitation.',
      ],
      qs: [
        ['What is the problem?', 'Two meetings are at the same time.', 'A client canceled.', 'The budget is too small.', 'A room is unavailable.', 'Cả hai đều lúc mười giờ thứ Ba.'],
        ['Why can the budget meeting not be in the afternoon?', 'The finance director is not free.', 'The room is booked.', 'The client is leaving.', 'The office closes early.', '"The finance director is only free until noon".'],
        ['What will the man do?', 'Send a new invitation', 'Cancel the presentation', 'Call the client', 'Prepare the budget', '"I will send out a new invitation".'],
      ],
    },
    {
      title: 'A hotel guest asks for directions',
      lines: [
        'M: Excuse me, how do I get to the City Museum from here?',
        'W: It is about a fifteen-minute walk. Go out of the hotel, turn left, and follow the river.',
        'M: Is it open today?',
        'W: Yes, until six. On Thursdays, entry is free after four.',
        'M: Perfect. Do you have a map?',
        'W: Here you are. I have marked the museum for you.',
      ],
      qs: [
        ['Where does the man want to go?', 'To a museum', 'To a restaurant', 'To the station', 'To a park', '"the City Museum".'],
        ['How will the man probably get there?', 'On foot', 'By taxi', 'By bus', 'By boat', '"a fifteen-minute walk".'],
        ['What does the woman give the man?', 'A map', 'A ticket', 'An umbrella', 'A brochure', '"Here you are. I have marked the museum".'],
      ],
    },
    {
      title: 'Ordering business cards',
      lines: [
        'W: Our new sales staff start on Monday, and they will need business cards.',
        'M: How many people?',
        'W: Four. I have their names and titles here.',
        'M: The printer needs three working days. If I order today, they will arrive on Thursday.',
        'W: That is acceptable. Please order two hundred and fifty each.',
        'M: I will also check that the new address is on the template.',
      ],
      qs: [
        ['Who needs business cards?', 'New sales staff', 'The printer', 'Customers', 'Managers only', '"Our new sales staff".'],
        ['When will the cards arrive?', 'On Thursday', 'On Monday', 'Today', 'In three weeks', '"they will arrive on Thursday".'],
        ['What will the man check?', 'The address on the template', 'The price', 'The paper quality', 'The spelling of names', '"check that the new address is on the template".'],
      ],
    },
    {
      title: 'A complaint about a meal',
      lines: [
        'M: Excuse me, I ordered the grilled salmon, but this is chicken.',
        'W: I am so sorry, sir. I will bring the salmon right away.',
        'M: How long will it take? I have a train to catch at one.',
        'W: About ten minutes. I will ask the chef to prepare it first. And of course there will be no charge for your drink.',
      ],
      qs: [
        ['What is the problem?', 'The man received the wrong dish.', 'The food is cold.', 'The bill is wrong.', 'The table is dirty.', '"I ordered the grilled salmon, but this is chicken".'],
        ['Why is the man in a hurry?', 'He has a train to catch.', 'He has a meeting.', 'He is late for work.', 'His parking is ending.', '"I have a train to catch at one".'],
        ['What does the woman offer?', 'A free drink', 'A free dessert', 'A discount card', 'A different table', '"no charge for your drink".'],
      ],
    },
    {
      title: 'Hiring a photographer',
      lines: [
        'W: We need photographs of the new product line for the catalog. Do you know a good photographer?',
        'M: We used Elena Marsh last year. Her pictures were excellent, and she was quick.',
        'W: Is she expensive?',
        'M: About eight hundred dollars a day. But she brings her own lighting.',
        'W: That is within the budget. Could you find out whether she is free next week?',
      ],
      qs: [
        ['Why do the speakers need a photographer?', 'For a catalog', 'For a wedding', 'For a website about staff', 'For a newspaper', '"for the catalog".'],
        ['What does the man say about Elena Marsh?', 'She worked quickly.', 'She is very cheap.', 'She is new to the job.', 'She needs lighting.', '"she was quick".'],
        ['What does the woman ask the man to do?', 'Check the photographer\'s availability', 'Pay a deposit', 'Take the photos himself', 'Find a cheaper option', '"find out whether she is free next week".'],
      ],
    },
    {
      title: 'A visit from an inspector',
      lines: [
        'M: The fire safety inspector is coming on Monday at nine.',
        'W: Are we ready?',
        'M: Mostly. But two fire extinguishers are out of date, and there are boxes blocking the emergency exit in the warehouse.',
        'W: I will ask the warehouse team to move the boxes today.',
        'M: And I will order new extinguishers. They can be delivered tomorrow.',
      ],
      qs: [
        ['Who is coming on Monday?', 'A fire safety inspector', 'A new manager', 'A delivery driver', 'A customer', 'Lời thoại đầu.'],
        ['What is wrong in the warehouse?', 'An exit is blocked.', 'The lights are broken.', 'The floor is wet.', 'The alarm is too quiet.', '"boxes blocking the emergency exit".'],
        ['What will the man order?', 'Fire extinguishers', 'Boxes', 'Exit signs', 'Alarms', '"I will order new extinguishers".'],
      ],
    },
    {
      title: 'Planning a move to a new office',
      lines: [
        'W: The movers are coming on Saturday. Has everyone packed their desks?',
        'M: Most people have. The design team has not started.',
        'W: They have a deadline on Friday. Could the movers pack their things for them?',
        'M: Yes, for an extra charge of a hundred dollars.',
        'W: That is fine. Please arrange it, and make sure their computers are labeled.',
      ],
      qs: [
        ['When is the move?', 'On Saturday', 'On Friday', 'On Monday', 'Next month', '"The movers are coming on Saturday".'],
        ['Why has the design team not packed?', 'They have a deadline.', 'They are on vacation.', 'They have no boxes.', 'They are not moving.', '"They have a deadline on Friday".'],
        ['What does the woman ask the man to make sure of?', 'That computers are labeled', 'That the price is lower', 'That desks are cleaned', 'That the team works on Saturday', '"make sure their computers are labeled".'],
      ],
    },
    {
      title: 'A question about a gift card',
      lines: [
        'M: Hi, I received this gift card for my birthday. Can I use it online?',
        'W: Yes, you can. Just enter the number on the back when you pay.',
        'M: And does it expire?',
        'W: It is valid for two years from the date of purchase. This one was bought last month.',
        'M: Great. Can I check how much is on it?',
        'W: Let me scan it. You have seventy-five dollars.',
      ],
      qs: [
        ['What does the man want to know?', 'Whether a gift card works online', 'How to buy a gift card', 'Where the store is', 'How to return a gift', '"Can I use it online?"'],
        ['How long is the card valid?', 'Two years', 'One month', 'One year', 'Forever', '"valid for two years".'],
        ['How much money is on the card?', '$75', '$57', '$70', '$25', '"You have seventy-five dollars".'],
      ],
    },
    {
      title: 'A change to a training course',
      lines: [
        'W: The leadership course next week has only five people signed up. We need at least eight to run it.',
        'M: Could we open it to the Dublin office? They could join by video.',
        'W: Good idea. I will send them an invitation today.',
        'M: If we still do not have enough by Friday, we can combine it with the course in March.',
      ],
      qs: [
        ['What is the problem with the course?', 'Too few people have registered.', 'The trainer is ill.', 'The room is too small.', 'It is too expensive.', '"only five people signed up".'],
        ['What does the man suggest?', 'Inviting another office', 'Canceling the course', 'Lowering the price', 'Changing the trainer', '"open it to the Dublin office".'],
        ['What may happen if numbers are still low on Friday?', 'The course will be combined with a later one.', 'The course will run anyway.', 'The staff will be charged.', 'The course will move to Dublin.', '"combine it with the course in March".'],
      ],
    },
    {
      title: 'Choosing a meeting day',
      lines: [
        'M: We need to hold the project review next week. I am out on Monday.',
        'W: And I am at the dentist on Wednesday afternoon.',
        'M: Let us look at when the conference room is free.',
        'W: It has to be a morning, because the client joins from Tokyo by video and it will be evening there.',
        'M: Then there is only one possibility. I will book it.',
      ],
      graphic: ['Conference room – free times next week', 'Day | Morning | Afternoon\nMonday | Free | Free\nTuesday | Booked | Free\nWednesday | Booked | Free\nThursday | Free | Booked\nFriday | Booked | Booked'],
      qs: [
        ['Why must the meeting be in the morning?', 'A client is joining from another time zone.', 'The room is cooler.', 'The man leaves at noon.', 'Lunch is being served.', '"the client joins from Tokyo... it will be evening there".'],
        ['Why is Monday not possible?', 'The man will be away.', 'The room is booked.', 'The woman is at the dentist.', 'It is a holiday.', '"I am out on Monday".'],
        ['Look at the graphic. When will the meeting be held?', 'Thursday morning', 'Monday morning', 'Tuesday afternoon', 'Wednesday afternoon', 'Buổi sáng còn trống: thứ Hai (anh vắng) và thứ Năm → thứ Năm.'],
      ],
    },
  ],
  p4: [
    {
      title: 'Announcement in an office building',
      lines: [
        'W: Attention, all tenants. A fire alarm test will take place today at eleven a.m. and will last about two minutes.',
        'W: You do not need to leave the building during the test. If the alarm sounds at any other time, please leave immediately by the stairs.',
        'W: We apologize for the disturbance.',
      ],
      qs: [
        ['What will happen at eleven?', 'A fire alarm test', 'A fire drill with evacuation', 'A power cut', 'A meeting', '"A fire alarm test".'],
        ['What should tenants do during the test?', 'Stay in the building', 'Leave by the stairs', 'Go to the lobby', 'Switch off computers', '"You do not need to leave".'],
        ['How long will the test last?', 'About two minutes', 'About eleven minutes', 'One hour', 'All morning', '"about two minutes".'],
      ],
    },
    {
      title: 'Voicemail from a car service center',
      lines: [
        'M: Good afternoon, Ms. Ruiz. This is Tony from Metro Auto Service.',
        'M: Your car is ready. We changed the oil and replaced the two front tires, as you asked. We also noticed that your battery is weak and may need replacing before winter.',
        'M: The total today is three hundred and twenty dollars. We close at six, but you can collect the car tomorrow if that is easier.',
      ],
      qs: [
        ['What work was done on the car?', 'An oil change and new tires', 'A new battery', 'A paint job', 'A brake repair', 'Lời nhắn.'],
        ['What does the speaker say about the battery?', 'It may need replacing soon.', 'It was replaced today.', 'It is new.', 'It caused an accident.', '"your battery is weak".'],
        ['When does the service center close?', 'At six', 'At five', 'At three', 'At eight', '"We close at six".'],
      ],
    },
    {
      title: 'Advertisement for a coffee subscription',
      lines: [
        'W: Love great coffee? With BeanBox, freshly roasted coffee arrives at your door every two weeks.',
        'W: Tell us how you make your coffee, and our experts will choose beans from small farms around the world. You can pause or cancel at any time.',
        'W: Order today and your first box is half price. Go to beanbox.example and enter the code RADIO.',
      ],
      qs: [
        ['What does BeanBox deliver?', 'Coffee', 'Tea', 'Coffee machines', 'Cups', 'Quảng cáo.'],
        ['How often are deliveries made?', 'Every two weeks', 'Every day', 'Once a month', 'Once a year', '"every two weeks".'],
        ['What is the offer for new customers?', 'A half-price first box', 'A free machine', 'Free delivery for a year', 'Two boxes for one', '"your first box is half price".'],
      ],
    },
    {
      title: 'Talk at a staff orientation',
      lines: [
        'M: Welcome to Greenfield Hospital. Today you will learn about our procedures and meet your supervisors.',
        'M: First, you will have your photograph taken for your ID badge. Then we will tour the building. Please pay special attention to the location of the emergency exits.',
        'M: After lunch, there will be a ninety-minute session on patient privacy, which is required by law.',
      ],
      qs: [
        ['Where are the listeners?', 'At a hospital', 'At a hotel', 'At a university', 'At a factory', '"Welcome to Greenfield Hospital".'],
        ['What will happen first?', 'Photographs will be taken.', 'A tour will begin.', 'Lunch will be served.', 'A test will be given.', '"First, you will have your photograph taken".'],
        ['What is the afternoon session about?', 'Patient privacy', 'Emergency exits', 'Hospital history', 'Payroll', '"a ninety-minute session on patient privacy".'],
      ],
    },
    {
      title: 'Recorded message for a doctor\'s office',
      lines: [
        'W: You have reached the office of Dr. Helen Park. We are closed for lunch between twelve thirty and one thirty.',
        'W: To make or change an appointment, please call back after one thirty or use our online booking system.',
        'W: If this is a medical emergency, hang up and call the emergency services immediately.',
      ],
      qs: [
        ['Why is the office closed?', 'It is lunchtime.', 'It is a holiday.', 'The doctor is ill.', 'The office has moved.', '"closed for lunch".'],
        ['How can callers make an appointment now?', 'Through the online booking system', 'By leaving a message', 'By pressing one', 'By email', '"use our online booking system".'],
        ['What should callers do in an emergency?', 'Call the emergency services', 'Wait until one thirty', 'Visit the office', 'Send a text message', 'Câu cuối.'],
      ],
    },
    {
      title: 'Excerpt from a meeting about a new store',
      lines: [
        'M: As you know, our new store in the Riverside Mall opens on the first of June.',
        'M: The shelves and lighting will be installed next week. Stock will arrive on the twenty-fifth, and we will need eight people to unpack it over two days.',
        'M: I am looking for volunteers from this branch. You will be paid overtime, and lunch will be provided. Please put your name on the list by the door.',
      ],
      qs: [
        ['When does the new store open?', 'On June first', 'Next week', 'On the twenty-fifth', 'In two days', '"opens on the first of June".'],
        ['What does the speaker need volunteers for?', 'Unpacking stock', 'Installing lights', 'Serving customers', 'Cleaning the mall', '"eight people to unpack it".'],
        ['How should people volunteer?', 'By signing a list', 'By sending an email', 'By calling the mall', 'By speaking to the speaker', '"put your name on the list by the door".'],
      ],
    },
    {
      title: 'News report on a new train service',
      lines: [
        'W: Starting next month, a new high-speed train will connect the capital with the northern city of Aldon.',
        'W: The journey, which currently takes four hours, will be cut to two hours and ten minutes. There will be twelve trains a day in each direction.',
        'W: Tickets go on sale this Friday. The rail company says prices will be about twenty percent higher than for the current service.',
      ],
      qs: [
        ['What is being introduced?', 'A faster train service', 'A new airport', 'A bus route', 'A motorway', '"a new high-speed train".'],
        ['How long will the journey take?', 'Two hours and ten minutes', 'Four hours', 'Twelve hours', 'One hour', 'Bản tin.'],
        ['What is said about ticket prices?', 'They will be higher.', 'They will be lower.', 'They will not change.', 'They will be free on Friday.', '"about twenty percent higher".'],
      ],
    },
    {
      title: 'Message about a product order',
      lines: [
        'M: Hi, Laura. It is Dev from purchasing. I have compared the four suppliers for the new office chairs.',
        'M: We agreed that the chairs must have at least a five-year warranty and that delivery must take less than three weeks. Only one supplier meets both conditions, so I plan to order from them tomorrow.',
        'M: Let me know today if you disagree.',
      ],
      graphic: ['Office chair suppliers', 'Supplier | Price | Warranty | Delivery\nApex | $140 | 3 years | 1 week\nBristol | $165 | 5 years | 4 weeks\nComfort Co. | $180 | 7 years | 2 weeks\nDesk Pro | $150 | 2 years | 2 weeks'],
      qs: [
        ['What is the speaker buying?', 'Office chairs', 'Desks', 'Computers', 'Lamps', '"the new office chairs".'],
        ['Look at the graphic. Which supplier will the speaker order from?', 'Comfort Co.', 'Apex', 'Bristol', 'Desk Pro', 'Bảo hành ≥ 5 năm và giao < 3 tuần: chỉ Comfort Co.'],
        ['What should the listener do if she disagrees?', 'Tell the speaker today', 'Call the supplier', 'Cancel the order', 'Wait until tomorrow', '"Let me know today if you disagree".'],
      ],
    },
  ],
};
