/** TOEIC đề 3 – phần Nghe bổ sung để đủ 100 câu (xem ghi chú "ĐỀ ĐẦY ĐỦ" trong helpers.ts) */
import { RawToeicL } from '../helpers';

export const L: RawToeicL = {
  p2: [
    ['Where is the nearest pharmacy?', 'Next to the bus station.', 'It opens at eight.', 'For my headache.', 'Where → vị trí.'],
    ['Who is covering the front desk this afternoon?', 'Julia is.', 'It is covered in dust.', 'At the front of the building.', 'Who → người trực.'],
    ['When will the invoices be sent out?', 'By the end of the day.', 'To all our clients.', 'By regular mail.', 'When → thời hạn.'],
    ['How was the flight from Sydney?', 'Long, but comfortable.', 'At six in the morning.', 'Qantas, I think.', 'How was → nhận xét.'],
    ['Would you like to try the daily special?', 'What does it come with?', 'Yes, it is special.', 'Every day at noon.', 'Lời mời → hỏi lại chi tiết.'],
    ['Why did the meeting end so early?', 'There was not much to discuss.', 'In the main conference room.', 'At half past three.', 'Why → lý do.'],
    ['Has the contract been signed yet?', 'Yes, both parties signed it yesterday.', 'A three-year contract.', 'The sign is too small.', 'Câu hỏi Yes/No.'],
    ['Which flight are you taking to Chicago?', 'The one that leaves at noon.', 'From gate fifteen.', 'About two hours.', 'Which → xác định chuyến bay.'],
    ["You haven't seen my reading glasses, have you?", 'They are on top of the filing cabinet.', 'I read it last week.', 'Two glasses of water.', 'Câu hỏi đuôi → chỉ vị trí.'],
    ['Could you forward that email to me?', "Sure, I'll send it right now.", 'It moved forward.', 'To the post office.', 'Lời nhờ → đồng ý.'],
    ['How many boxes should I order?', 'A dozen should be enough.', 'In the storage room.', 'By next Monday.', 'How many → số lượng.'],
    ['The elevator is making a strange noise.', 'We should call maintenance.', 'On the fourth floor.', 'It is very quiet here.', 'Vấn đề → đề xuất.'],
    ['Do you prefer the blue design or the green one?', 'I like the blue one better.', 'Yes, I do.', 'It was designed last year.', 'Câu hỏi lựa chọn.'],
    ['Is there a dress code for the banquet?', 'Formal wear is required.', 'In the ballroom.', 'She wore a red dress.', 'Câu hỏi Yes/No → câu trả lời nêu quy định.'],
    ["Why don't we hire a consultant?", 'That might be too expensive.', 'Because he was hired.', 'In the consulting room.', 'Lời gợi ý → nêu trở ngại.'],
    ['Whose car is blocking the entrance?', 'I think it belongs to a visitor.', 'At the main entrance.', 'It is a blue sedan.', 'Whose → chủ sở hữu.'],
    ['The printer cartridge needs to be replaced.', 'There are new ones in the cabinet.', 'I placed it there.', 'A color printer.', 'Câu thông tin → chỉ nơi có hàng thay thế.'],
  ],
  p3: [
    {
      title: 'A missing package',
      lines: [
        'M: Hi, I ordered a pair of headphones from your website ten days ago, but they have not arrived.',
        'W: I am sorry to hear that. May I have your order number?',
        'M: It is seven seven three, four one two.',
        'W: Thank you. Our records show that the package was delivered on Monday and signed for by someone named Lee.',
        'M: That must be my neighbor. I will ask him tonight.',
        'W: If he does not have it, please call us back and we will send a replacement.',
      ],
      qs: [
        ['What did the man order?', 'Headphones', 'A telephone', 'A computer', 'A pair of shoes', '"a pair of headphones".'],
        ['What do the records show?', 'Someone signed for the package.', 'The package was never sent.', 'The order was canceled.', 'The address was wrong.', '"signed for by someone named Lee".'],
        ['What will the man do tonight?', 'Speak to his neighbor', 'Visit the store', 'Order another pair', 'Call the delivery company', '"I will ask him tonight".'],
      ],
    },
    {
      title: 'Planning a training schedule',
      lines: [
        'W: David, we need to schedule the safety training for the new warehouse staff.',
        'M: How about next Wednesday morning? The warehouse is usually quiet then.',
        'W: Wednesday is no good. We are expecting a large shipment from Korea.',
        'M: Then Friday afternoon? I will ask the trainer whether he is free.',
        'W: Good. Please reserve the meeting room on the first floor, too.',
      ],
      qs: [
        ['What kind of training are the speakers arranging?', 'Safety training', 'Sales training', 'Computer training', 'Language training', '"the safety training for the new warehouse staff".'],
        ['Why is Wednesday not suitable?', 'A shipment is arriving.', 'The trainer is away.', 'The room is booked.', 'It is a holiday.', '"We are expecting a large shipment from Korea".'],
        ['What does the woman ask the man to do?', 'Reserve a room', 'Unload a shipment', 'Train the staff himself', 'Travel to Korea', '"Please reserve the meeting room".'],
      ],
    },
    {
      title: 'A question about a bill',
      lines: [
        'M: Excuse me, I think there is a mistake on our bill. We have been charged for three desserts, but we only had two.',
        'W: Let me see. Oh, I am terribly sorry. I will correct that right away.',
        'M: Thank you. Also, do you accept credit cards?',
        'W: We do. And as an apology for the error, I would like to offer you both a free coffee.',
      ],
      qs: [
        ['Where are the speakers?', 'In a restaurant', 'In a bank', 'In a supermarket', 'In a hotel room', 'Hóa đơn có món tráng miệng.'],
        ['What is wrong with the bill?', 'An extra item was charged.', 'The tax is missing.', 'The date is wrong.', 'It belongs to another table.', 'Bị tính ba món tráng miệng thay vì hai.'],
        ['What does the woman offer?', 'Free coffee', 'A discount card', 'Another dessert', 'A new table', '"offer you both a free coffee".'],
      ],
    },
    {
      title: 'A change of office layout',
      lines: [
        'W: Have you heard? The marketing team is moving to the fifth floor next month.',
        'M: Yes, and our department is taking over their space. We will finally have enough room.',
        'W: Will we get new desks?',
        'M: No, but the walls will be painted, and they are installing better lighting.',
        'W: That is an improvement. The lights here give me a headache.',
      ],
      qs: [
        ['What will happen next month?', 'A team will move to another floor.', 'A new manager will arrive.', 'The building will be sold.', 'New desks will be delivered.', '"The marketing team is moving to the fifth floor".'],
        ['What does the man say about the new space?', 'It will be large enough.', 'It will be too noisy.', 'It will be far from the elevator.', 'It will have new furniture.', '"We will finally have enough room".'],
        ['What does the woman dislike about the current office?', 'The lighting', 'The desks', 'The color of the walls', 'The temperature', '"The lights here give me a headache".'],
      ],
    },
    {
      title: 'Booking a hotel conference room',
      lines: [
        'M: Hello, I would like to book a conference room for a one-day seminar on the twelfth of March.',
        'W: Certainly. How many people are you expecting?',
        'M: About sixty.',
        'W: Our Lakeview Room holds eighty. It includes a sound system and a screen. Would you like us to provide lunch?',
        'M: Yes, please. Could you send me a menu and a price list?',
        'W: Of course. May I have your email address?',
      ],
      qs: [
        ['What is the man planning?', 'A seminar', 'A wedding', 'A product launch', 'A staff party', '"a one-day seminar".'],
        ['How many people will attend?', 'About sixty', 'About eighty', 'About twelve', 'About one hundred', '"About sixty".'],
        ['What does the woman ask for?', 'An email address', 'A deposit', 'A guest list', 'A telephone number', '"May I have your email address?"'],
      ],
    },
    {
      title: 'A late employee',
      lines: [
        'W: Tom, is Mark here yet? He is supposed to present the sales figures at nine.',
        'M: He just called. His train has been delayed, and he will be about thirty minutes late.',
        'W: The clients are already in the meeting room.',
        'M: I could start by showing them the new product samples. That will keep them busy.',
        'W: Good thinking. I will bring some coffee.',
      ],
      qs: [
        ['Why is Mark late?', 'His train was delayed.', 'His car broke down.', 'He overslept.', 'He is at another meeting.', '"His train has been delayed".'],
        ['What was Mark supposed to do at nine?', 'Present sales figures', 'Meet the train', 'Bring samples', 'Sign a contract', '"present the sales figures at nine".'],
        ['What does the man offer to do?', 'Show product samples', 'Call the clients', 'Cancel the meeting', 'Pick Mark up', '"showing them the new product samples".'],
      ],
    },
    {
      title: 'Ordering uniforms',
      lines: [
        'M: We need to order new uniforms for the restaurant staff. The old ones look worn.',
        'W: I agree. I found a supplier who can print our logo on the shirts for no extra charge.',
        'M: Great. How long would it take?',
        'W: Two weeks for an order of thirty or more.',
        'M: Then let us order thirty-five, so that we have a few spares. Can you collect everyone\'s sizes by Friday?',
      ],
      qs: [
        ['What do the speakers want to order?', 'Staff uniforms', 'Restaurant menus', 'Printed signs', 'Tablecloths', '"new uniforms for the restaurant staff".'],
        ['What does the supplier offer for free?', 'Printing the logo', 'Delivery', 'Extra shirts', 'A design service', '"print our logo on the shirts for no extra charge".'],
        ['What does the man ask the woman to do by Friday?', 'Collect sizes', 'Pay the supplier', 'Choose a color', 'Hire more staff', '"collect everyone\'s sizes by Friday".'],
      ],
    },
    {
      title: 'Discussing a vacation request',
      lines: [
        'W: Mr. Carter, I would like to take the last week of August off, if possible.',
        'M: Let me check the schedule. Two other people in your team are away that week.',
        'W: Oh, I did not realize. What about the first week of September?',
        'M: That would be fine. Please submit the request form so that I can approve it.',
        'W: I will do it this afternoon.',
      ],
      qs: [
        ['What does the woman want to do?', 'Take time off', 'Change teams', 'Work overtime', 'Get a promotion', '"take the last week of August off".'],
        ['Why is the last week of August a problem?', 'Other team members will be away.', 'A project is due.', 'The office is closed.', 'The manager is on vacation.', '"Two other people in your team are away that week".'],
        ['What will the woman do this afternoon?', 'Submit a form', 'Book a flight', 'Speak to her team', 'Finish a report', '"Please submit the request form" – "I will do it this afternoon".'],
      ],
    },
    {
      title: 'A problem with a projector',
      lines: [
        'M: The projector in Room B keeps switching itself off after ten minutes.',
        'W: It is probably overheating. Is the fan working?',
        'M: I cannot hear it, actually.',
        'W: Then it needs to be repaired. For today, take the portable projector from my office. It is on the shelf by the door.',
        'M: Thanks. My presentation starts in fifteen minutes.',
      ],
      qs: [
        ['What is the problem with the projector?', 'It turns itself off.', 'The picture is too dark.', 'It has no cable.', 'It is too loud.', '"keeps switching itself off".'],
        ['What does the woman think is the cause?', 'It is overheating.', 'The bulb is old.', 'The power is off.', 'It was dropped.', '"It is probably overheating".'],
        ['What does the woman suggest?', 'Using another projector', 'Postponing the presentation', 'Opening a window', 'Calling the client', '"take the portable projector from my office".'],
      ],
    },
    {
      title: 'A customer in a clothing store',
      lines: [
        'W: Excuse me, do you have this jacket in a medium?',
        'M: Let me check. I am afraid we only have small and large in gray. We do have a medium in navy blue.',
        'W: Could I try the navy one?',
        'M: Of course. The fitting rooms are at the back, on the left.',
        'W: Thank you. Is this jacket included in the sale?',
        'M: Yes, everything on this rack is twenty percent off.',
      ],
      qs: [
        ['What is the woman looking for?', 'A jacket in a medium size', 'A gray dress', 'A pair of shoes', 'A large coat', '"do you have this jacket in a medium?"'],
        ['Where are the fitting rooms?', 'At the back of the store', 'Next to the entrance', 'On the second floor', 'Beside the cash register', '"at the back, on the left".'],
        ['What does the man say about the jacket?', 'It is on sale.', 'It is the last one.', 'It cannot be returned.', 'It is a new arrival.', '"everything on this rack is twenty percent off".'],
      ],
    },
    {
      title: 'Choosing a delivery option',
      lines: [
        'M: I would like to send these documents to our office in Denver. They must arrive by Thursday morning.',
        'W: Let me show you our options. Today is Tuesday, so the economy service would be too slow.',
        'M: I do not want to pay more than necessary.',
        'W: Then I recommend the cheapest service that will get there in time.',
        'M: Fine. I will take that one.',
      ],
      graphic: ['Delivery services', 'Service | Delivery time | Price\nEconomy | 4 days | $9\nStandard | 3 days | $16\nExpress | Next day by noon | $28\nSame-day | Today | $60'],
      qs: [
        ['What is the man sending?', 'Documents', 'Product samples', 'A computer', 'A gift', '"send these documents".'],
        ['By when must the delivery arrive?', 'Thursday morning', 'Tuesday evening', 'Friday', 'Wednesday noon', '"They must arrive by Thursday morning".'],
        ['Look at the graphic. How much will the man pay?', '$28', '$9', '$16', '$60', 'Gửi thứ Ba, cần đến sáng thứ Năm: Economy (4 ngày) và Standard (3 ngày) đều trễ; rẻ nhất mà kịp là Express $28.'],
      ],
    },
  ],
  p4: [
    {
      title: 'Announcement at a train station',
      lines: [
        'W: Attention, passengers waiting for the ten fifteen train to Riverside. This train will now depart from platform six instead of platform two.',
        'W: Please use the footbridge to cross to platform six. The elevator on that platform is out of service, so passengers who need assistance should speak to a member of staff.',
        'W: The train is expected to leave on time.',
      ],
      qs: [
        ['What has changed?', 'The departure platform', 'The departure time', 'The destination', 'The ticket price', 'Đổi sang sân ga số sáu.'],
        ['How should passengers reach the platform?', 'By the footbridge', 'By the elevator', 'Through the tunnel', 'By shuttle bus', '"Please use the footbridge".'],
        ['Who should speak to a staff member?', 'Passengers who need help', 'Passengers without tickets', 'Passengers with bicycles', 'Passengers traveling in groups', '"passengers who need assistance".'],
      ],
    },
    {
      title: 'Voicemail from a client',
      lines: [
        'M: Hi, Rebecca. This is Alan Foster from Foster Dental. I am calling about the brochures you designed for us.',
        'M: We are very happy with them, but we have just changed our opening hours, so the back page needs to be updated before printing.',
        'M: I will email you the new hours this afternoon. Could you send me a revised version by Friday? We would like to have five hundred copies printed next week.',
      ],
      qs: [
        ['What did the listener design?', 'Brochures', 'A website', 'A sign', 'Business cards', '"the brochures you designed for us".'],
        ['Why is a change needed?', 'The opening hours are different.', 'The address is wrong.', 'The colors are too dark.', 'The logo is new.', '"we have just changed our opening hours".'],
        ['What will the speaker do this afternoon?', 'Send an email', 'Visit the printer', 'Pay an invoice', 'Order five hundred copies', '"I will email you the new hours this afternoon".'],
      ],
    },
    {
      title: 'Radio advertisement for a car dealer',
      lines: [
        'W: Looking for a reliable used car? Come to Westside Motors this Saturday for our end-of-season sale.',
        'W: We have more than one hundred and fifty vehicles in stock, each with a twelve-month warranty. And every customer who takes a test drive will receive a free car wash voucher.',
        'W: Westside Motors is open from nine to six, on Highway Four, next to the airport. Financing is available.',
      ],
      qs: [
        ['What is being advertised?', 'Used cars', 'A car wash', 'Car insurance', 'A driving school', '"a reliable used car".'],
        ['What comes with each vehicle?', 'A twelve-month warranty', 'A full tank of fuel', 'Free insurance', 'New tires', '"each with a twelve-month warranty".'],
        ['How can customers get a free voucher?', 'By taking a test drive', 'By buying a car', 'By arriving before nine', 'By applying for financing', '"every customer who takes a test drive".'],
      ],
    },
    {
      title: 'Talk to volunteers at a charity event',
      lines: [
        'M: Good morning, volunteers, and thank you for helping at today\'s charity run.',
        'M: We are expecting about eight hundred runners. Those of you wearing yellow vests will hand out water at the stations along the course. The rest will work at the registration tent.',
        'M: The race starts at ten, so please be in position by nine thirty. Lunch will be provided for all volunteers at one o\'clock in the main tent.',
      ],
      qs: [
        ['What event is taking place?', 'A charity run', 'A music festival', 'A food market', 'A job fair', '"today\'s charity run".'],
        ['What will volunteers in yellow vests do?', 'Hand out water', 'Register runners', 'Direct traffic', 'Serve lunch', '"will hand out water at the stations".'],
        ['When should volunteers be in position?', 'By nine thirty', 'By ten', 'By one', 'By eight', '"please be in position by nine thirty".'],
      ],
    },
    {
      title: 'Recorded message from a utility company',
      lines: [
        'W: Thank you for calling City Water Services. Our offices are currently closed.',
        'W: Our business hours are eight a.m. to five p.m., Monday through Friday. To report a burst pipe or another emergency, please press one now and you will be connected to our twenty-four-hour team.',
        'W: To pay your bill or check your balance, visit our website at any time.',
      ],
      qs: [
        ['Why is the caller hearing this message?', 'The offices are closed.', 'All lines are busy.', 'The number has changed.', 'The system is being repaired.', '"Our offices are currently closed".'],
        ['Why should a caller press one?', 'To report an emergency', 'To pay a bill', 'To hear the business hours', 'To leave a message', '"To report a burst pipe or another emergency, please press one".'],
        ['How can customers check their balance?', 'On the website', 'By pressing two', 'By visiting the office', 'By mail', '"visit our website at any time".'],
      ],
    },
    {
      title: 'Excerpt from a meeting about office energy use',
      lines: [
        'M: I would like to talk about our electricity bill, which rose by eighteen percent last year.',
        'M: An energy consultant inspected the building last month. She found that many computers and lights are left on overnight.',
        'M: Starting Monday, the lights in all meeting rooms will switch off automatically after ten minutes if nobody is there. I am also asking each of you to shut down your computer before leaving. We will review the results in three months.',
      ],
      qs: [
        ['What problem is the speaker discussing?', 'Rising electricity costs', 'A broken computer system', 'A shortage of meeting rooms', 'A late payment', '"our electricity bill, which rose by eighteen percent".'],
        ['What did the consultant find?', 'Equipment is left on at night.', 'The wiring is old.', 'The windows are leaking.', 'The heating is too high.', '"many computers and lights are left on overnight".'],
        ['What are listeners asked to do?', 'Turn off their computers', 'Work fewer hours', 'Use the stairs', 'Report broken lights', '"shut down your computer before leaving".'],
      ],
    },
    {
      title: 'Introduction to a cooking demonstration',
      lines: [
        'W: Welcome to the Home and Kitchen Show. My name is Chef Lena Ortiz, and for the next thirty minutes I will show you how to prepare a three-course meal in under an hour.',
        'W: Everything I use today, from the knives to the frying pans, is available at booth forty-two at a special show price.',
        'W: At the end of the demonstration, I will choose three people from the audience to come up and taste the food. Printed recipes are on your seats.',
      ],
      qs: [
        ['Where is the talk taking place?', 'At a trade show', 'At a restaurant', 'At a cooking school', 'On a television program', '"Welcome to the Home and Kitchen Show".'],
        ['What can be bought at booth forty-two?', 'Kitchen equipment', 'Recipe books', 'Fresh food', 'Tickets', '"Everything I use today... is available at booth forty-two".'],
        ['What will happen at the end?', 'Some audience members will taste the food.', 'A prize will be drawn.', 'The chef will sign books.', 'A film will be shown.', '"choose three people from the audience to come up and taste the food".'],
      ],
    },
    {
      title: 'Telephone message about a schedule',
      lines: [
        'M: Hello, Ms. Vance. This is Kevin from Bright Smile Photography, confirming the schedule for your company\'s staff photographs on Thursday.',
        'M: We will photograph each department in the lobby. One change: the department that was scheduled first has asked to go last, because of a morning meeting, so the other three will each move up one place.',
        'M: Please ask everyone to arrive five minutes early.',
      ],
      graphic: ['Staff photographs – original schedule', 'Time | Department\n9:00 | Sales\n9:30 | Accounting\n10:00 | Design\n10:30 | Customer Service'],
      qs: [
        ['What will take place on Thursday?', 'Staff photographs', 'A company meeting', 'Job interviews', 'A training session', '"your company\'s staff photographs on Thursday".'],
        ['Look at the graphic. Which department will now be photographed at 10:30?', 'Sales', 'Accounting', 'Design', 'Customer Service', 'Phòng đầu tiên (Sales) chuyển xuống cuối → 10:30.'],
        ['What are staff asked to do?', 'Arrive five minutes early', 'Wear a uniform', 'Bring an ID card', 'Wait in their offices', '"arrive five minutes early".'],
      ],
    },
  ],
};
