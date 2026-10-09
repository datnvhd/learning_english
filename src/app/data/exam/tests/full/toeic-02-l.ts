/** TOEIC đề 2 – phần Nghe bổ sung để đủ 100 câu (xem ghi chú "ĐỀ ĐẦY ĐỦ" trong helpers.ts) */
import { RawToeicL } from '../helpers';

export const L: RawToeicL = {
  p2: [
    ['Who is picking up the visitors from the station?', 'Mr. Hanson offered to.', 'At platform four.', 'They arrived yesterday.', 'Who → người đi đón.'],
    ['Where can I find the fire exit?', 'At the end of this hallway.', 'In case of an emergency.', 'It was put out quickly.', 'Where → vị trí.'],
    ['When will the new price list take effect?', 'From the first of March.', 'About ten percent higher.', 'On the website.', 'When → thời điểm.'],
    ['How many chairs do we need for the seminar?', 'Around forty.', 'In the storage room.', 'They are quite comfortable.', 'How many → số lượng.'],
    ['Did you remember to lock the supply cabinet?', 'Yes, and I returned the key.', 'It supplies paper.', 'In the cabinet.', 'Câu hỏi Yes/No quá khứ.'],
    ['Why was the delivery returned to the sender?', 'The address was incomplete.', 'By courier.', 'Early this morning.', 'Why → lý do.'],
    ['Would you like a window seat or an aisle seat?', 'A window seat, if possible.', 'Yes, I would love one.', 'The window is closed.', 'Câu hỏi lựa chọn.'],
    ['Can you cover my shift on Saturday?', 'Sorry, I have plans that day.', 'It shifted to the left.', 'The cover is blue.', 'Lời nhờ → từ chối kèm lý do.'],
    ['What is the fastest way to the convention center?', 'Take the subway to Park Station.', 'It lasts three days.', 'About two thousand people.', 'Hỏi đường → chỉ phương tiện.'],
    ["Haven't the brochures been printed yet?", 'They will be ready this afternoon.', 'A printing company.', 'Yes, I read the brochure.', 'Câu hỏi phủ định → cập nhật tiến độ.'],
    ['Whose signature do I need on this form?', "Your supervisor's.", 'At the bottom.', 'In black ink.', 'Whose → người ký.'],
    ['How often do you back up your files?', 'At the end of every day.', 'On an external drive.', 'In the back room.', 'How often → tần suất.'],
    ["Let's move the meeting to a larger room.", 'Room 5 should be available.', 'It moved last year.', 'A large coffee, please.', 'Đề nghị → gợi ý phòng cụ thể.'],
    ['Is the cafeteria open on weekends?', 'Only on Saturdays.', 'On the ground floor.', 'The soup is good.', 'Câu hỏi Yes/No → câu trả lời có điều kiện.'],
    ['Which candidate did the committee select?', 'The one from Chicago.', 'Next Monday.', 'Five people applied.', 'Which → xác định ứng viên.'],
    ['The projector bulb has burned out again.', 'There is a spare one in the drawer.', 'I am not hungry.', 'The project was a success.', 'Vấn đề → giải pháp.'],
    ['Do you mind if I leave a little early today?', 'Not at all, as long as the report is done.', 'Yes, it is early.', 'I left it on your desk.', '"Do you mind if...?" → "Not at all" = đồng ý.'],
  ],
  p3: [
    {
      title: 'A catering mix-up',
      lines: [
        'W: Hello, this is Dana from Hartwell Insurance. The lunch you delivered for our meeting has thirty sandwiches, but we ordered forty.',
        "M: I'm so sorry. Let me check the order. You're right, it says forty.",
        'W: Our guests arrive in half an hour. Can you bring the rest?',
        "M: I'll send a driver with ten more right now, and we will take fifteen percent off your bill.",
      ],
      qs: [
        ['What is the problem?', 'Part of an order is missing.', 'The food arrived late.', 'The bill is too high.', 'The meeting was canceled.', 'Đặt 40 nhưng chỉ nhận 30 bánh.'],
        ['When will the guests arrive?', 'In thirty minutes', 'In an hour', 'Tomorrow', 'At noon exactly', '"Our guests arrive in half an hour".'],
        ['What does the man offer?', 'A discount', 'A free dessert', 'A new menu', 'A refund in full', '"take fifteen percent off your bill".'],
      ],
    },
    {
      title: 'Training on a cash register',
      lines: [
        'M: Have you used this type of cash register before, Amy?',
        'W: No, the one at my last job was much older.',
        'M: This one is simple. You scan the item, and the price appears on the screen. For returns, you need a manager\'s code.',
        'W: What should I do if a customer wants to pay with a gift card?',
        "M: Good question. Press the yellow key first. I'll show you with the next customer.",
      ],
      qs: [
        ['What is the man doing?', 'Training a new employee', 'Repairing a machine', 'Serving a customer', 'Ordering equipment', 'Hướng dẫn nhân viên mới dùng máy tính tiền.'],
        ['What is needed to process a return?', "A manager's code", 'A gift card', 'A receipt printer', 'A yellow key', '"For returns, you need a manager\'s code".'],
        ['What will the man do next?', 'Demonstrate with a customer', 'Call a manager', 'Scan a gift card', 'Close the register', '"I\'ll show you with the next customer".'],
      ],
    },
    {
      title: 'A change of meeting time',
      lines: [
        "W: Paul, the sales meeting has been moved from ten to two o'clock.",
        "M: Really? I've got a client call at two.",
        'W: Could you move your call? The regional director is coming, and she wants everyone there.',
        "M: I'll try. If the client cannot change, I will join the meeting as soon as the call ends.",
      ],
      qs: [
        ['What has changed?', 'The time of a meeting', 'The location of a call', 'The name of a client', 'The sales targets', '"moved from ten to two o\'clock".'],
        ['Why is the meeting important?', 'A director will attend.', 'A contract will be signed.', 'New staff will be introduced.', 'It is the last of the year.', '"The regional director is coming".'],
        ['What will the man try to do?', 'Reschedule a call', 'Cancel the meeting', 'Invite the client', 'Leave work early', '"Could you move your call?" – "I\'ll try".'],
      ],
    },
    {
      title: 'Buying train tickets',
      lines: [
        "M: Two tickets to Lakeview for the eleven fifteen train, please.",
        "W: I'm afraid that train is sold out. There are seats on the twelve forty.",
        'M: That is fine. How much are they?',
        'W: Thirty-two dollars each, or twenty-six if you have a rail card.',
        "M: I don't have one. I'll pay the full fare.",
      ],
      qs: [
        ['Where does the conversation take place?', 'At a ticket office', 'On a train', 'At a travel agency', 'In a hotel', 'Mua vé tàu.'],
        ['Which train will the man take?', 'The 12:40', 'The 11:15', 'The 10:40', 'The 1:15', '"There are seats on the twelve forty" – "That is fine".'],
        ['How much will the man pay per ticket?', '$32', '$26', '$40', '$15', 'Không có thẻ → giá đầy đủ 32 đô.'],
      ],
    },
    {
      title: 'A customer survey',
      lines: [
        'W: We have received over five hundred responses to the customer survey.',
        'M: That is more than last year. What are people saying?',
        'W: Most are happy with our prices, but many want longer opening hours.',
        'M: Interesting. Could you prepare a summary for the management meeting on Thursday?',
        "W: Sure. I'll include some charts.",
      ],
      qs: [
        ['What are the speakers discussing?', 'Survey results', 'A price increase', 'A new store', 'Staff schedules', '"responses to the customer survey".'],
        ['What do many customers want?', 'Longer opening hours', 'Lower prices', 'More parking', 'Faster delivery', '"many want longer opening hours".'],
        ['What does the man ask the woman to prepare?', 'A summary', 'A new survey', 'A price list', 'An advertisement', '"prepare a summary for the management meeting".'],
      ],
    },
    {
      title: 'Renting equipment',
      lines: [
        "M: Hi, I need to rent a floor polisher for the weekend.",
        'W: We have two models. The standard one is forty dollars a day, and the heavy-duty one is sixty.',
        "M: It's only for a small office, so the standard one will do.",
        'W: OK. We require a fifty-dollar deposit, which you will get back when you return it. Please bring it back by nine on Monday.',
      ],
      qs: [
        ['What does the man want to rent?', 'A floor polisher', 'A delivery van', 'An office', 'A vacuum cleaner', '"rent a floor polisher".'],
        ['Why does the man choose the standard model?', 'He needs it for a small space.', 'It is newer.', 'The other one is unavailable.', 'It is lighter.', '"It\'s only for a small office".'],
        ['What must the man do by Monday morning?', 'Return the equipment', 'Pay the deposit', 'Clean the store', 'Call the woman', '"bring it back by nine on Monday".'],
      ],
    },
    {
      title: 'A job reference',
      lines: [
        'W: Mr. Baker, I am applying for a position at a publishing company. Would you be willing to be a reference?',
        'M: Of course, Linda. You did excellent work here. What do they need?',
        'W: They may call you next week. They also asked for a short letter.',
        "M: No problem. I'll write it this weekend and email it to you on Monday.",
      ],
      qs: [
        ['What does the woman ask the man to do?', 'Act as a reference', 'Offer her a job', 'Publish her book', 'Extend her contract', '"Would you be willing to be a reference?"'],
        ['What does the man say about the woman?', 'Her work was excellent.', 'She was often late.', 'She should apply elsewhere.', 'She needs more training.', '"You did excellent work here".'],
        ['When will the man send the letter?', 'On Monday', 'Tonight', 'Next month', 'On Friday', '"email it to you on Monday".'],
      ],
    },
    {
      title: 'A broken window',
      lines: [
        'M: Good morning. A window in my shop was broken during the storm last night. How soon can you replace it?',
        'W: We can send someone to measure it this afternoon. The glass has to be cut to size, so it would be installed on Thursday.',
        'M: That is two days away. I cannot leave the shop open like that.',
        'W: Our worker can cover it with a wooden board today at no extra cost.',
      ],
      qs: [
        ['What happened last night?', 'A window was damaged.', 'A shop was robbed.', 'A delivery was lost.', 'A fire started.', '"A window in my shop was broken during the storm".'],
        ['When will the new glass be installed?', 'On Thursday', 'This afternoon', 'Tomorrow morning', 'Next week', '"it would be installed on Thursday".'],
        ['What does the woman offer?', 'To cover the window temporarily', 'To lower the price', 'To work at night', 'To lend the man a board', '"cover it with a wooden board today at no extra cost".'],
      ],
    },
    {
      title: 'Planning a company newsletter photo',
      lines: [
        'W: We need a photo of the whole team for the newsletter. Is everyone in the office on Wednesday?',
        'M: Carlos and Mei are at a trade fair until Thursday.',
        "W: Then let's do it on Friday morning, before the weekly meeting.",
        "M: Good idea. I'll send an email asking everybody to wear the company shirt.",
      ],
      qs: [
        ['What do the speakers need?', 'A team photograph', 'A new newsletter editor', 'A trade fair booth', 'Company shirts', '"a photo of the whole team for the newsletter".'],
        ['Why is Wednesday not suitable?', 'Two colleagues are away.', 'The office is closed.', 'The photographer is busy.', 'There is a meeting all day.', '"Carlos and Mei are at a trade fair until Thursday".'],
        ['What will the man ask people to do?', 'Wear a company shirt', 'Arrive an hour early', 'Bring a camera', 'Write an article', '"asking everybody to wear the company shirt".'],
      ],
    },
    {
      title: 'A complaint about noise',
      lines: [
        "M: Front desk? This is room seven oh four. There is very loud music coming from the room next door, and it's after midnight.",
        "W: I'm sorry, sir. I'll call the guests in that room right away.",
        'M: I have an early flight, so I really need to sleep.',
        'W: I understand. If the noise continues, I can move you to a quiet room on the top floor.',
      ],
      qs: [
        ['Why is the man calling?', 'To complain about noise', 'To order room service', 'To request a wake-up call', 'To book a flight', '"very loud music coming from the room next door".'],
        ['What will the woman do first?', 'Contact the other guests', 'Call the police', 'Send up some earplugs', 'Move the man', '"I\'ll call the guests in that room right away".'],
        ['What does the woman offer if the problem continues?', 'A different room', 'A refund', 'A free breakfast', 'A later checkout', '"I can move you to a quiet room on the top floor".'],
      ],
    },
    {
      title: 'Ordering a cake',
      lines: [
        "W: I'd like to order a cake for a retirement party on Friday. It needs to serve about twenty-five people.",
        'M: Certainly. Here is our price list. Which flavor would you like?',
        'W: Chocolate, please. And could you write "Happy Retirement, Frank" on it?',
        'M: Of course. For twenty-five people, you will need the large size. It will be ready after ten on Friday.',
      ],
      graphic: ['Cake prices', 'Size | Serves | Price\nSmall | 8–10 | $22\nMedium | 15–18 | $35\nLarge | 25–30 | $48\nExtra large | 40–50 | $70'],
      qs: [
        ['What is the cake for?', 'A retirement party', 'A wedding', 'A birthday', 'A store opening', '"a retirement party on Friday".'],
        ['Look at the graphic. How much will the woman pay?', '$48', '$22', '$35', '$70', 'Cần cỡ Large cho 25 người → $48.'],
        ['When can the woman collect the cake?', 'On Friday after ten', 'On Thursday evening', 'On Friday at eight', 'On Saturday', '"ready after ten on Friday".'],
      ],
    },
  ],
  p4: [
    {
      title: 'Announcement on a ferry',
      lines: [
        'M: Good morning, passengers, and welcome aboard the Island Star. Our crossing to Port Henry will take approximately fifty minutes.',
        'M: The café on the upper deck is now open and serves hot drinks and snacks. For your safety, please do not stand near the car ramp while the ship is moving.',
        'M: Drivers, please return to your vehicles only when you hear the announcement before arrival.',
      ],
      qs: [
        ['Where is the announcement being made?', 'On a ferry', 'On a bus', 'At an airport', 'In a parking garage', '"welcome aboard the Island Star... the ship".'],
        ['What is available on the upper deck?', 'Drinks and snacks', 'A gift shop', 'A car wash', 'Life jackets', '"The café on the upper deck".'],
        ['When should drivers go back to their vehicles?', 'After an announcement', 'Immediately', 'After fifty minutes exactly', 'Before the café closes', '"only when you hear the announcement before arrival".'],
      ],
    },
    {
      title: 'Voicemail from a landlord',
      lines: [
        'W: Hello, Mr. Tran. This is Mrs. Gibson, the owner of your apartment.',
        'W: I am calling to let you know that a plumber will come on Wednesday morning to replace the kitchen tap you reported.',
        'W: He should arrive between nine and ten. If you will not be at home, please leave your key with the neighbor in apartment three. The work should take less than an hour.',
      ],
      qs: [
        ['Who is the speaker?', "The apartment's owner", 'A plumber', 'A neighbor', 'A real estate agent', '"the owner of your apartment".'],
        ['What will be replaced?', 'A kitchen tap', 'A front door lock', 'A window', 'A heater', '"replace the kitchen tap".'],
        ['What should the listener do if he is out?', 'Leave a key with a neighbor', 'Call the plumber', 'Cancel the visit', 'Leave the door open', '"leave your key with the neighbor in apartment three".'],
      ],
    },
    {
      title: 'Excerpt from a training session',
      lines: [
        'M: Welcome to the customer service training. Today we will focus on handling complaints by telephone.',
        'M: The first rule is to listen without interrupting. Let the customer finish, and then repeat the problem in your own words to show that you have understood.',
        'M: In a moment, I am going to divide you into pairs. One of you will play an unhappy customer, and the other will practice answering.',
      ],
      qs: [
        ['What is the training about?', 'Dealing with complaints', 'Selling by telephone', 'Using new software', 'Writing emails', '"handling complaints by telephone".'],
        ['What is the first rule?', 'Listen without interrupting', 'Offer a refund immediately', 'Transfer the call', 'Speak slowly', '"The first rule is to listen without interrupting".'],
        ['What will the listeners do next?', 'Practice in pairs', 'Watch a film', 'Take a written test', 'Call real customers', '"I am going to divide you into pairs".'],
      ],
    },
    {
      title: 'News report on a new library',
      lines: [
        'W: And now for local news. The new Westside Public Library will open its doors this Saturday at ten a.m.',
        'W: The three-story building includes a children\'s reading room, forty public computers, and a rooftop garden. It replaces the old library on Dale Street, which closed in June.',
        'W: On opening day, there will be free guided tours every hour, and the first two hundred visitors will receive a tote bag.',
      ],
      qs: [
        ['What will open on Saturday?', 'A library', 'A garden center', 'A computer store', 'A school', '"The new Westside Public Library will open".'],
        ['What happened in June?', 'The old library closed.', 'Construction began.', 'A garden was planted.', 'Tours were offered.', '"the old library on Dale Street, which closed in June".'],
        ['What will some visitors receive?', 'A bag', 'A book', 'A free computer class', 'A plant', '"the first two hundred visitors will receive a tote bag".'],
      ],
    },
    {
      title: 'Telephone message from a supplier',
      lines: [
        'M: Good afternoon. This is Raymond from Alpine Paper Company, returning the call from Ms. Novak.',
        'M: You asked whether we could deliver two hundred boxes of copy paper by the end of this week. We have one hundred and fifty boxes in stock, which we can deliver on Thursday.',
        'M: The remaining fifty would arrive next Tuesday. Please call me at extension twenty-one to confirm whether a split delivery is acceptable.',
      ],
      qs: [
        ['Why is the speaker calling?', 'To respond to an inquiry', 'To complain about a payment', 'To cancel an order', 'To introduce a new product', '"returning the call from Ms. Novak".'],
        ['How many boxes can be delivered on Thursday?', 'One hundred and fifty', 'Two hundred', 'Fifty', 'Twenty-one', '"one hundred and fifty boxes in stock, which we can deliver on Thursday".'],
        ['What does the speaker ask the listener to confirm?', 'Whether two deliveries are acceptable', 'Whether the price is correct', 'Whether the address has changed', 'Whether to send white paper', '"confirm whether a split delivery is acceptable".'],
      ],
    },
    {
      title: 'Announcement in a department store',
      lines: [
        'W: Attention, shoppers. A set of car keys with a red key ring has been found in the shoe department on the second floor.',
        'W: If these keys belong to you, please come to the customer service desk next to the main entrance.',
        'W: While you are there, ask about our new gift-wrapping service, which is free with any purchase over fifty dollars this week.',
      ],
      qs: [
        ['What has been found?', 'A set of keys', 'A pair of shoes', 'A wallet', 'A red bag', '"A set of car keys with a red key ring".'],
        ['Where should the owner go?', 'To the customer service desk', 'To the shoe department', 'To the parking lot', 'To the second floor', '"come to the customer service desk".'],
        ['What service is mentioned?', 'Gift wrapping', 'Home delivery', 'Shoe repair', 'Key cutting', '"our new gift-wrapping service".'],
      ],
    },
    {
      title: 'Talk by a tour operator',
      lines: [
        'M: Thank you all for choosing Sunrise Tours. Before we set off for the mountains, a few words about today.',
        'M: The drive takes about two hours. We will stop once at a village market, where you can buy fruit and handicrafts.',
        'M: The weather at the top can change quickly, so I hope you have brought a jacket. If you have not, we have some spare ones on the bus. Lunch will be at a local farm at one o\'clock.',
      ],
      qs: [
        ['Where is the tour going?', 'To the mountains', 'To the coast', 'To a museum', 'To a city center', '"Before we set off for the mountains".'],
        ['What can people do at the first stop?', 'Go shopping at a market', 'Have lunch', 'Visit a farm', 'Take a boat ride', '"a village market, where you can buy fruit and handicrafts".'],
        ['What does the speaker say about jackets?', 'Extra ones are available on the bus.', 'They can be bought at the market.', 'They are not necessary.', 'They must be returned by one o\'clock.', '"we have some spare ones on the bus".'],
      ],
    },
    {
      title: 'Message about workshop rooms',
      lines: [
        'W: Hi, everyone. This is Claire from the events team with an update about tomorrow\'s workshops.',
        'W: Because of a problem with the heating, the workshop on negotiation skills cannot be held in its original room. It will take place in the room that was planned for the email-writing workshop, and that workshop will move to the library.',
        'W: The times have not changed. Please check the list before you come.',
      ],
      graphic: ['Workshops – original plan', 'Workshop | Room | Time\nNegotiation skills | Room 12 | 9:00\nEmail writing | Room 8 | 9:00\nPresentation skills | Room 15 | 11:00'],
      qs: [
        ['Why is a room being changed?', 'There is a heating problem.', 'Too many people registered.', 'A trainer is ill.', 'The room is being painted.', '"Because of a problem with the heating".'],
        ['Look at the graphic. Where will the negotiation skills workshop be held?', 'Room 8', 'Room 12', 'Room 15', 'The library', 'Chuyển sang phòng của lớp Email writing → Room 8.'],
        ['What has stayed the same?', 'The times of the workshops', 'All of the rooms', 'The trainers\' names', 'The number of workshops per person', '"The times have not changed".'],
      ],
    },
  ],
};
