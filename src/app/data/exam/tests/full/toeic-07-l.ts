/** TOEIC đề 7 – phần Nghe bổ sung để đủ 100 câu (xem ghi chú "ĐỀ ĐẦY ĐỦ" trong helpers.ts) */
import { RawToeicL } from '../helpers';

export const L: RawToeicL = {
  p2: [
    ['Where is the nearest gas station?', 'About a mile down this road.', 'It is almost empty.', 'Regular or premium?', 'Where → vị trí.'],
    ['Who booked the conference room for two o\'clock?', 'The legal team did.', 'For about an hour.', 'It is on the sixth floor.', 'Who → người đặt.'],
    ['When are the new uniforms arriving?', 'They should be here by Friday.', 'In blue and white.', 'From the supplier in Leeds.', 'When → thời gian.'],
    ['How long will the road be closed?', 'For at least two weeks.', 'On Maple Street.', 'Because of repairs.', 'How long → khoảng thời gian.'],
    ['Would you like help carrying your luggage?', 'No, thank you. I can manage.', 'It is very heavy.', 'At the baggage claim.', 'Lời đề nghị → từ chối lịch sự.'],
    ['Why was the flight delayed?', 'There was fog at the airport.', 'By two hours.', 'To London.', 'Why → lý do.'],
    ['Do you have this shirt in a larger size?', 'Let me check in the back.', 'It is a large store.', 'I bought it yesterday.', 'Câu hỏi Yes/No → "để tôi kiểm tra".'],
    ['Which proposal did the committee accept?', 'The second one.', 'At the last meeting.', 'By a majority.', 'Which → xác định.'],
    ["The invoice was paid last week, wasn't it?", 'Yes, on Thursday.', 'It is on the desk.', 'A voice message.', 'Câu hỏi đuôi → xác nhận.'],
    ['Could you show me how to use this machine?', 'Sure, it only takes a minute.', 'I saw it yesterday.', 'It was made in Germany.', 'Lời nhờ → đồng ý.'],
    ['How often do you travel for work?', 'Two or three times a month.', 'By plane, usually.', 'To the head office.', 'How often → tần suất.'],
    ['Our biggest client is visiting tomorrow.', 'Then we should tidy the showroom.', 'It is a big company.', 'I visited last year.', 'Thông tin → đề xuất chuẩn bị.'],
    ['Do you want to drive, or shall I?', 'I would rather you did.', 'Yes, I do.', 'It is a long way.', 'Câu hỏi lựa chọn.'],
    ['Is breakfast included in the room rate?', 'Yes, it is served until ten.', 'I am not hungry.', 'A double room.', 'Câu hỏi Yes/No.'],
    ["Why don't we postpone the launch until June?", 'That would give us more time to test.', 'Because it was launched.', 'In the post office.', 'Lời gợi ý → tán thành kèm lý do.'],
    ['Whose idea was it to change suppliers?', 'It was Mr. Kim\'s.', 'A good idea.', 'Last month.', 'Whose → người.'],
    ['I am having trouble connecting to the Wi-Fi.', 'Did you enter the new password?', 'It is very fast.', 'No trouble at all.', 'Vấn đề → gợi ý kiểm tra.'],
  ],
  p3: [
    {
      title: 'A catering order for an office party',
      lines: [
        'W: Hello, I would like to order food for an office party next Thursday evening. About forty people.',
        'M: Certainly. Would you prefer a buffet or served dishes?',
        'W: A buffet. Could you include some dishes without meat?',
        'M: Of course. About a third of the buffet will be vegetarian. Do you also need plates and glasses?',
        'W: Yes, please. And could you set everything up by five thirty?',
      ],
      qs: [
        ['What is the woman ordering food for?', 'An office party', 'A wedding', 'A business lunch', 'A conference', '"an office party next Thursday evening".'],
        ['What does the woman ask to be included?', 'Vegetarian dishes', 'A birthday cake', 'Hot drinks', 'Seafood', '"some dishes without meat".'],
        ['What else will the caterer provide?', 'Plates and glasses', 'Tables', 'Music', 'Waiters', '"Do you also need plates and glasses?" – "Yes, please".'],
      ],
    },
    {
      title: 'A problem with a laptop',
      lines: [
        'M: My laptop has been very slow since yesterday. It takes five minutes to open a file.',
        'W: Did you install the security update on Monday?',
        'M: Yes, like everyone else.',
        'W: Several people have had the same problem. I can fix it, but I need the laptop for about an hour.',
        'M: I have a meeting at eleven. Could you do it then?',
        'W: Sure. Leave it on my desk before you go.',
      ],
      qs: [
        ['What is the man\'s problem?', 'His laptop is slow.', 'His laptop was stolen.', 'He lost a file.', 'His screen is broken.', '"My laptop has been very slow".'],
        ['What does the woman say about the problem?', 'Other people have it too.', 'It cannot be fixed.', 'It is caused by a virus.', 'It will fix itself.', '"Several people have had the same problem".'],
        ['When will the woman repair the laptop?', 'During the man\'s meeting', 'Tomorrow morning', 'Right now', 'After work', '"I have a meeting at eleven. Could you do it then?"'],
      ],
    },
    {
      title: 'Discussing a store display',
      lines: [
        'W: Sales of the new running shoes are lower than we expected.',
        'M: I think the display is the problem. They are at the back of the store, behind the jackets.',
        'W: You may be right. Let us move them to the table by the entrance.',
        'M: And we could add a sign saying that they won a magazine award.',
        'W: Good idea. I will print one this afternoon.',
      ],
      qs: [
        ['What problem are the speakers discussing?', 'Poor sales of a product', 'A shortage of staff', 'A late delivery', 'A broken sign', '"Sales of the new running shoes are lower than we expected".'],
        ['What does the man think is the cause?', 'The product is hard to find in the store.', 'The price is too high.', 'The shoes are uncomfortable.', 'The weather is bad.', '"They are at the back of the store".'],
        ['What will the woman do this afternoon?', 'Print a sign', 'Order more shoes', 'Call the magazine', 'Move the jackets', '"I will print one this afternoon".'],
      ],
    },
    {
      title: 'A hotel shuttle',
      lines: [
        'M: Excuse me, what time does the shuttle to the convention center leave?',
        'W: Every thirty minutes, starting at seven. The next one is at eight thirty.',
        'M: My session begins at nine. Will I make it?',
        'W: Yes, the ride takes only fifteen minutes. The shuttle stops in front of the main entrance.',
        'M: Great. Is there a charge?',
        'W: No, it is free for hotel guests.',
      ],
      qs: [
        ['What does the man ask about?', 'A shuttle schedule', 'A room upgrade', 'A restaurant', 'A conference fee', '"what time does the shuttle... leave?"'],
        ['How long does the ride take?', 'Fifteen minutes', 'Thirty minutes', 'One hour', 'Nine minutes', '"the ride takes only fifteen minutes".'],
        ['What does the woman say about the cost?', 'It is free for guests.', 'It costs five dollars.', 'It is added to the bill.', 'It must be paid in cash.', '"it is free for hotel guests".'],
      ],
    },
    {
      title: 'A new advertising campaign',
      lines: [
        'W: The agency sent three ideas for the summer campaign. Have you looked at them?',
        'M: Yes. I prefer the one with the family on the beach. It feels natural.',
        'W: So do I, but it would mean filming abroad, and that is expensive.',
        'M: Could we film it at the lake instead? It would look similar.',
        'W: Let me ask the agency whether that is possible.',
      ],
      qs: [
        ['What are the speakers discussing?', 'An advertising campaign', 'A family vacation', 'A new agency', 'A film festival', '"three ideas for the summer campaign".'],
        ['What is the problem with the idea they like?', 'It would be costly.', 'It is too long.', 'It was used before.', 'The actors are unavailable.', '"it would mean filming abroad, and that is expensive".'],
        ['What does the man suggest?', 'Filming at a lake', 'Choosing another idea', 'Hiring a new agency', 'Waiting until winter', '"Could we film it at the lake instead?"'],
      ],
    },
    {
      title: 'Requesting time for training',
      lines: [
        'M: Ms. Oliver, there is a two-day course on data analysis next month. I think it would help me in my job.',
        'W: Which days?',
        'M: The eighteenth and nineteenth.',
        'W: We have the quarterly report due on the twentieth. Could you finish your part before you go?',
        'M: Yes, I will have it done by the seventeenth.',
        'W: Then I am happy to approve it. Send me the registration form.',
      ],
      qs: [
        ['What does the man want to do?', 'Attend a course', 'Take a vacation', 'Change departments', 'Work from home', '"a two-day course on data analysis".'],
        ['What is the woman concerned about?', 'A report deadline', 'The cost of the course', 'The location', 'His qualifications', '"We have the quarterly report due on the twentieth".'],
        ['What does the woman ask the man to send?', 'A registration form', 'His report', 'A doctor\'s note', 'A schedule', '"Send me the registration form".'],
      ],
    },
    {
      title: 'A customer returns a jacket',
      lines: [
        'W: Hi, I bought this jacket online, but it is too small. Can I exchange it here?',
        'M: Yes, you can. Do you have the order confirmation?',
        'W: It is on my phone. Here.',
        'M: Thank you. We have the next size in black, but not in green.',
        'W: Hmm. I really wanted green.',
        'M: I can order it for you. It would arrive in three days, and we would send it to your home.',
      ],
      qs: [
        ['Why is the woman returning the jacket?', 'It does not fit.', 'It is damaged.', 'It is the wrong color.', 'It was too expensive.', '"it is too small".'],
        ['What does the man ask to see?', 'An order confirmation', 'A credit card', 'A passport', 'The original box', '"Do you have the order confirmation?"'],
        ['What does the man offer to do?', 'Order the jacket in green', 'Give a refund', 'Reduce the price', 'Hold the black jacket', '"I can order it for you".'],
      ],
    },
    {
      title: 'Planning a business trip',
      lines: [
        'M: I need to visit our suppliers in Vietnam next month. Could you help me plan the trip?',
        'W: Of course. Which cities?',
        'M: Hanoi first, for two days, and then Da Nang for three.',
        'W: There are direct flights to Hanoi on Mondays and Thursdays. Which do you prefer?',
        'M: Monday. And I will need a hotel near the industrial park in Da Nang.',
        'W: I will send you some options by tomorrow.',
      ],
      qs: [
        ['Why is the man traveling?', 'To visit suppliers', 'To attend a conference', 'To take a vacation', 'To open an office', '"visit our suppliers in Vietnam".'],
        ['On which day will the man fly?', 'Monday', 'Thursday', 'Tuesday', 'Friday', '"Monday".'],
        ['What will the woman send?', 'Hotel options', 'A visa form', 'A list of suppliers', 'A map', '"I will send you some options by tomorrow".'],
      ],
    },
    {
      title: 'A broken display case',
      lines: [
        'W: The glass on the display case near the entrance is cracked.',
        'M: Oh no. When did that happen?',
        'W: I noticed it this morning. Maybe the cleaners hit it with the machine last night.',
        'M: We cannot leave it like that. Please put the jewelry in the safe and cover the case with a cloth.',
        'W: Shall I call the glass company?',
        'M: Yes, and ask whether they can come today.',
      ],
      qs: [
        ['What is the problem?', 'A display case is damaged.', 'Some jewelry is missing.', 'The safe will not open.', 'The entrance is blocked.', '"The glass on the display case... is cracked".'],
        ['What does the woman think caused it?', 'The cleaning staff', 'A customer', 'A delivery', 'The weather', '"Maybe the cleaners hit it".'],
        ['What does the man tell the woman to do with the jewelry?', 'Put it in the safe', 'Sell it at a discount', 'Leave it in the case', 'Send it to the glass company', '"put the jewelry in the safe".'],
      ],
    },
    {
      title: 'A magazine subscription call',
      lines: [
        'M: Good afternoon, I am calling from Home and Garden magazine. Your subscription ended last month.',
        'W: Yes, I decided not to renew. I do not have time to read it.',
        'M: I understand. We now offer a digital edition for half the price, which you can read on your phone.',
        'W: That might be more convenient. How much is it?',
        'M: Eighteen dollars a year. I can send you a free sample issue by email.',
        'W: All right, please do.',
      ],
      qs: [
        ['Why did the woman not renew her subscription?', 'She has no time to read.', 'It was too expensive.', 'She moved house.', 'She dislikes the articles.', '"I do not have time to read it".'],
        ['What does the man offer?', 'A cheaper digital edition', 'A free gift', 'A two-year subscription', 'A gardening course', '"a digital edition for half the price".'],
        ['What will the man send?', 'A sample issue', 'A bill', 'A phone', 'A catalog', '"a free sample issue by email".'],
      ],
    },
    {
      title: 'Choosing a date for a workshop',
      lines: [
        'W: We need to pick a date for the customer service workshop. The trainer sent her availability.',
        'M: It has to be a day when the whole team is free. On Monday, half of us are at the trade fair.',
        'W: And the meeting room is being painted on Tuesday and Wednesday.',
        'M: So that leaves only one day on her list.',
        'W: Right. I will confirm it with her now.',
      ],
      graphic: ['Trainer availability – week of May 12', 'Day | Available\nMonday | Yes\nTuesday | Yes\nWednesday | No\nThursday | Yes\nFriday | No'],
      qs: [
        ['What are the speakers trying to schedule?', 'A workshop', 'A trade fair', 'A painting job', 'A customer visit', '"a date for the customer service workshop".'],
        ['Why is Monday unsuitable?', 'Many team members will be away.', 'The trainer is busy.', 'The room is booked.', 'It is a holiday.', '"half of us are at the trade fair".'],
        ['Look at the graphic. On which day will the workshop be held?', 'Thursday', 'Monday', 'Tuesday', 'Friday', 'Thứ Hai vắng người, thứ Ba sơn phòng → còn thứ Năm.'],
      ],
    },
  ],
  p4: [
    {
      title: 'Announcement in a supermarket',
      lines: [
        'W: Attention, shoppers. Would the owner of a silver car, license plate ending in four seven two, please return to the parking lot? Your headlights are on.',
        'W: Also, today only, all fresh fruit is twenty percent off. Look for the yellow labels.',
        'W: Thank you for shopping at Valley Market.',
      ],
      qs: [
        ['Why is a driver asked to return to the car?', 'The headlights are on.', 'The car is blocking an exit.', 'The alarm is ringing.', 'A window is open.', '"Your headlights are on".'],
        ['What is on sale today?', 'Fresh fruit', 'Bread', 'Dairy products', 'Vegetables', '"all fresh fruit is twenty percent off".'],
        ['How can shoppers identify sale items?', 'By yellow labels', 'By red signs', 'By a special shelf', 'By asking staff', '"Look for the yellow labels".'],
      ],
    },
    {
      title: 'Voicemail from a contractor',
      lines: [
        'M: Hello, Mrs. Lambert. This is Eric from Lakeside Roofing.',
        'M: I inspected your roof this morning. The damage from the storm is not as bad as we feared. About twenty tiles need to be replaced, and the work will take one day.',
        'M: I can start on Wednesday if the weather is dry. The cost would be six hundred dollars. Please call me back to let me know whether you would like to go ahead.',
      ],
      qs: [
        ['What did the speaker do this morning?', 'Inspected a roof', 'Repaired a window', 'Delivered some tiles', 'Painted a house', '"I inspected your roof this morning".'],
        ['How long will the work take?', 'One day', 'Twenty days', 'One week', 'Three hours', '"the work will take one day".'],
        ['What does the start date depend on?', 'The weather', 'The delivery of tiles', 'A payment', 'A permit', '"if the weather is dry".'],
      ],
    },
    {
      title: 'Radio advertisement for a fitness center',
      lines: [
        'W: Get in shape this spring at PowerHouse Gym, now open twenty-four hours a day.',
        'W: We have brand-new equipment, a heated pool, and more than fifty classes a week, from yoga to boxing. Not sure where to begin? Every new member receives a free session with a personal trainer.',
        'W: Join before March thirty-first and pay no joining fee. PowerHouse Gym, on King Street, opposite the library.',
      ],
      qs: [
        ['What is special about the gym\'s hours?', 'It never closes.', 'It opens at five a.m.', 'It closes on Sundays.', 'It is open only in spring.', '"now open twenty-four hours a day".'],
        ['What does every new member receive?', 'A session with a personal trainer', 'A free towel', 'A month of classes', 'A locker', '"a free session with a personal trainer".'],
        ['How can people avoid the joining fee?', 'By joining before the end of March', 'By bringing a friend', 'By paying for a year', 'By joining online', '"Join before March thirty-first".'],
      ],
    },
    {
      title: 'Excerpt from a department meeting',
      lines: [
        'M: I have some good news. Our customer satisfaction score rose to ninety-two percent last quarter, the highest in the company.',
        'M: Head office has asked us to share what we are doing with the other branches. I would like two volunteers to help me prepare a short presentation.',
        'M: It will be given by video call on the tenth. If you are interested, please see me after this meeting.',
      ],
      qs: [
        ['What is the good news?', 'A high customer satisfaction score', 'A pay rise', 'A new branch', 'An award from a magazine', '"rose to ninety-two percent".'],
        ['What has head office requested?', 'A presentation for other branches', 'A written report', 'A visit to head office', 'A new survey', '"share what we are doing with the other branches".'],
        ['What should interested listeners do?', 'Speak to the manager after the meeting', 'Send an email', 'Sign a list', 'Call head office', '"please see me after this meeting".'],
      ],
    },
    {
      title: 'Recorded message for an airline',
      lines: [
        'W: Thank you for calling Blue Sky Airlines. Because of a storm on the east coast, some flights today have been delayed or canceled.',
        'W: To check the status of your flight, press one and enter your booking number. If your flight has been canceled, you can rebook at no charge on our website or mobile app.',
        'W: Waiting times to speak with an agent are currently longer than forty minutes.',
      ],
      qs: [
        ['Why have some flights been canceled?', 'Because of a storm', 'Because of a strike', 'Because of a computer failure', 'Because of airport repairs', '"Because of a storm on the east coast".'],
        ['How can callers check a flight?', 'By pressing one', 'By sending an email', 'By visiting the airport', 'By waiting for an agent', '"press one and enter your booking number".'],
        ['What is said about rebooking?', 'It is free.', 'It costs a fee.', 'It is only possible by phone.', 'It is not available today.', '"you can rebook at no charge".'],
      ],
    },
    {
      title: 'Talk to visitors at a coffee roastery',
      lines: [
        'M: Welcome to the Old Mill Coffee Roasters. I am Ben, and I will guide you through our factory.',
        'M: We roast about two tons of coffee beans every week, which come from farms in Colombia and Ethiopia. On the tour, you will see the beans being sorted, roasted, and packed.',
        'M: The machines are loud, so please stay close to me. At the end, you can taste three of our coffees in the tasting room, and you will each receive a small bag to take home.',
      ],
      qs: [
        ['What does the factory produce?', 'Roasted coffee', 'Tea', 'Chocolate', 'Paper bags', '"Old Mill Coffee Roasters".'],
        ['Why should visitors stay close to the guide?', 'The machines are noisy.', 'The floor is wet.', 'The factory is dark.', 'The tour is short.', '"The machines are loud".'],
        ['What will visitors receive at the end?', 'A bag of coffee', 'A cup', 'A certificate', 'A discount card', '"a small bag to take home".'],
      ],
    },
    {
      title: 'News report on a transport strike',
      lines: [
        'W: Commuters should prepare for delays tomorrow, as bus drivers in the city plan a one-day strike over pay.',
        'W: No city buses will run between five a.m. and midnight. Trains and trams will operate normally, but they are expected to be very crowded.',
        'W: The city council is advising people to work from home if possible. Talks between the drivers\' union and the bus company will continue on Thursday.',
      ],
      qs: [
        ['What will happen tomorrow?', 'Bus drivers will go on strike.', 'Train fares will rise.', 'A new tram line will open.', 'Roads will be closed.', '"bus drivers in the city plan a one-day strike".'],
        ['What is said about trains and trams?', 'They will be crowded.', 'They will not run.', 'They will be free.', 'They will start later.', '"expected to be very crowded".'],
        ['What does the council advise?', 'Working from home', 'Driving to work', 'Leaving earlier', 'Using taxis', '"work from home if possible".'],
      ],
    },
    {
      title: 'Message about hotel room assignments',
      lines: [
        'M: Hello, this is Paulo from the Seaview Hotel with information for your tour group arriving tonight.',
        'M: All rooms are ready. Please note that the guest who requested a ground-floor room has been moved from the room originally listed to room one oh four, which is next to the elevator and has no steps.',
        'M: Breakfast is served from seven in the restaurant.',
      ],
      graphic: ['Room list – original', 'Guest | Room | Request\nMr. Aziz | 310 | Sea view\nMs. Becker | 215 | Ground floor\nMr. Costa | 402 | Quiet room\nMrs. Dunn | 208 | Extra bed'],
      qs: [
        ['Look at the graphic. Which guest will now stay in room 104?', 'Ms. Becker', 'Mr. Aziz', 'Mr. Costa', 'Mrs. Dunn', 'Khách yêu cầu phòng tầng trệt (Ground floor) là Ms. Becker.'],
        ['What does the speaker say about room 104?', 'It has no steps.', 'It has a sea view.', 'It is the largest room.', 'It is on the top floor.', '"next to the elevator and has no steps".'],
        ['When does breakfast begin?', 'At seven', 'At six', 'At eight', 'At nine', '"served from seven".'],
      ],
    },
  ],
};
