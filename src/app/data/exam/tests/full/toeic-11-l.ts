/** TOEIC đề 11 – phần Nghe bổ sung để đủ 100 câu (xem ghi chú "ĐỀ ĐẦY ĐỦ" trong helpers.ts) */
import { RawToeicL } from '../helpers';

export const L: RawToeicL = {
  p2: [
    ['Where is the best place to park near the office?', 'The garage on Hill Street is cheapest.', 'It is a small car.', 'Until six o\'clock.', 'Where → vị trí.'],
    ['Who is organizing the charity dinner this year?', 'The social committee.', 'At the Grand Hotel.', 'In December.', 'Who → người tổ chức.'],
    ['When does the insurance policy expire?', 'At the end of March.', 'It covers fire and theft.', 'About six hundred dollars.', 'When → thời hạn.'],
    ['How many languages does the new assistant speak?', 'Three, I believe.', 'Very fluently.', 'In the Paris office.', 'How many → số lượng.'],
    ['Would you like me to print the handouts?', 'Yes, twenty copies, please.', 'I handed them out.', 'The printer is old.', 'Lời đề nghị → nhận.'],
    ['Why is the client unhappy with the design?', 'She thinks the colors are too dark.', 'By the end of the week.', 'In the design studio.', 'Why → lý do.'],
    ['Has the technician fixed the internet connection?', 'He is still working on it.', 'A fast connection.', 'I connected them.', 'Câu hỏi Yes/No → "vẫn đang sửa".'],
    ['Which hotel did you stay at in Rome?', 'A small one near the station.', 'For five nights.', 'It was in May.', 'Which → xác định.'],
    ["We need to hire more staff, don't we?", 'Yes, at least two more people.', 'Higher than before.', 'The staff room.', 'Câu hỏi đuôi → đồng tình.'],
    ['Could you sign for this delivery?', 'Sure. Where do I sign?', 'It was delivered.', 'A road sign.', 'Lời nhờ → đồng ý.'],
    ['How often is the equipment inspected?', 'Every six months.', 'By a safety officer.', 'In the factory.', 'How often → tần suất.'],
    ['The new software is much easier to use.', 'I agree. It saves a lot of time.', 'I used it.', 'It is soft.', 'Nhận xét → đồng tình.'],
    ['Do you want to meet before lunch or after?', 'After lunch suits me better.', 'Yes, I do.', 'I had pasta.', 'Câu hỏi lựa chọn.'],
    ['Is there a pharmacy in the airport?', 'Yes, in Terminal B.', 'I have a headache.', 'It was a long flight.', 'Câu hỏi Yes/No → vị trí.'],
    ["Why don't we offer free shipping this month?", 'That could increase our sales.', 'Because it was shipped.', 'By sea.', 'Lời gợi ý → tán thành.'],
    ['Whose phone is ringing?', 'I think it is mine. Sorry.', 'On the desk.', 'A wedding ring.', 'Whose → người.'],
    ['The lights in the hallway are not working.', 'I will report it to the building manager.', 'It is very light.', 'In the hall.', 'Vấn đề → hành động.'],
  ],
  p3: [
    {
      title: 'A late arrival at a hotel',
      lines: [
        'M: Hello, my name is Aaron Wells. I have a reservation for tonight, but my flight was delayed, and I will not arrive until after midnight.',
        'W: That is no problem, Mr. Wells. Our reception is open all night.',
        'M: Good. Is it possible to get something to eat when I arrive?',
        'W: The restaurant closes at eleven, but I can have a sandwich and some fruit left in your room.',
        'M: That would be wonderful.',
      ],
      qs: [
        ['Why is the man calling?', 'He will arrive late.', 'He wants to cancel.', 'He needs a bigger room.', 'He lost his booking number.', 'Chuyến bay bị trễ.'],
        ['What does the woman say about reception?', 'It is open all night.', 'It closes at eleven.', 'It is being renovated.', 'It is on the second floor.', 'Lời thoại.'],
        ['What will be left in the man\'s room?', 'A sandwich and fruit', 'A key', 'A menu', 'A bottle of wine', 'Lời thoại.'],
      ],
    },
    {
      title: 'Office supply budget',
      lines: [
        'W: We have spent almost all of this quarter\'s budget for office supplies, and it is only the second month.',
        'M: What has cost so much?',
        'W: Printer ink, mainly. People are printing everything in color.',
        'M: Let us change the default setting to black and white. Color would need a manager\'s approval.',
        'W: Good idea. I will ask IT to do it today.',
      ],
      qs: [
        ['What is the problem?', 'The supply budget is nearly used up.', 'The printers are broken.', 'Supplies arrived late.', 'There is too much paper.', 'Lời thoại đầu.'],
        ['What has been the main cost?', 'Printer ink', 'Paper', 'Pens', 'Envelopes', '"Printer ink, mainly".'],
        ['What will the woman ask IT to do?', 'Change a printer setting', 'Buy new printers', 'Order ink', 'Train the staff', 'Đổi mặc định sang đen trắng.'],
      ],
    },
    {
      title: 'A customer wants to change an order',
      lines: [
        'M: Hi, I ordered fifty T-shirts with our company logo yesterday. Is it too late to change the color?',
        'W: Let me check. They have not been printed yet. What color would you like?',
        'M: Navy blue instead of black.',
        'W: We have navy in all sizes except extra large.',
        'M: I need ten extra large.',
        'W: I can order those for you, but they will arrive two days after the rest.',
      ],
      qs: [
        ['What did the man order?', 'T-shirts with a logo', 'Company uniforms', 'Baseball caps', 'Printed bags', 'Lời thoại.'],
        ['What does the man want to change?', 'The color', 'The size', 'The logo', 'The quantity', 'Lời thoại.'],
        ['What does the woman say about the extra-large shirts?', 'They will arrive later.', 'They are not available.', 'They cost more.', 'They are already printed.', 'Câu cuối.'],
      ],
    },
    {
      title: 'A discussion about a new hire',
      lines: [
        'W: Daniel starts in the warehouse on Monday. Who will train him?',
        'M: I was going to ask Rosa, but she is on vacation next week.',
        'W: What about Sam? He has been here the longest.',
        'M: Good idea. I will speak to him this afternoon. Daniel will also need safety boots and a jacket.',
        'W: I will order them today. Do you know his sizes?',
      ],
      qs: [
        ['When does Daniel start?', 'On Monday', 'This afternoon', 'Next month', 'Today', 'Lời thoại.'],
        ['Why can Rosa not train him?', 'She will be on vacation.', 'She is too busy.', 'She has left the company.', 'She works in another department.', 'Lời thoại.'],
        ['What will the woman order?', 'Safety boots and a jacket', 'A computer', 'Training manuals', 'A name badge', 'Lời thoại.'],
      ],
    },
    {
      title: 'A broken air conditioner in a store',
      lines: [
        'M: Customers are complaining about the heat. The air conditioner has stopped working.',
        'W: I called the repair company. They cannot come until tomorrow morning.',
        'M: We cannot stay open like this. It is thirty-two degrees in here.',
        'W: I have borrowed three large fans from the store next door, and we could hand out cold water.',
        'M: All right. Put a sign on the door to apologize.',
      ],
      qs: [
        ['What are customers complaining about?', 'The heat', 'The prices', 'The noise', 'The long lines', 'Lời thoại.'],
        ['When will the repair company come?', 'Tomorrow morning', 'This afternoon', 'In an hour', 'Next week', 'Lời thoại.'],
        ['What has the woman borrowed?', 'Fans', 'An air conditioner', 'Bottles of water', 'A sign', 'Lời thoại.'],
      ],
    },
    {
      title: 'A question about an invoice',
      lines: [
        'W: Hello, this is Mei from Sunrise Bakery. I received your invoice for the new shop sign, and the total is higher than the quote.',
        'M: Let me look. The quote was nine hundred dollars. The invoice says one thousand and fifty.',
        'W: Exactly. Why the difference?',
        'M: You asked us to add lighting after the quote was made. That was one hundred and fifty dollars.',
        'W: Oh, of course. I had forgotten. I will pay it today.',
      ],
      qs: [
        ['Why is the woman calling?', 'An invoice is higher than expected.', 'The sign is broken.', 'She wants a new quote.', 'The sign has not arrived.', 'Lời thoại.'],
        ['What explains the difference?', 'Lighting was added later.', 'A tax was increased.', 'The sign was made larger.', 'Delivery was extra.', 'Lời thoại.'],
        ['What will the woman do today?', 'Pay the invoice', 'Return the sign', 'Request a discount', 'Call her manager', 'Câu cuối.'],
      ],
    },
    {
      title: 'Planning a customer event',
      lines: [
        'M: We are inviting our fifty best customers to a wine tasting next month. Have you found a venue?',
        'W: Yes, the art gallery on Mill Street. It is free on the evening of the twelfth.',
        'M: Perfect. What about food?',
        'W: The gallery works with a caterer. I am meeting her on Thursday to choose the menu.',
        'M: Good. I will draft the invitations.',
      ],
      qs: [
        ['What kind of event are the speakers planning?', 'A wine tasting', 'An art class', 'A sales meeting', 'A cooking course', 'Lời thoại.'],
        ['Where will it be held?', 'At an art gallery', 'At a restaurant', 'At the office', 'At a hotel', 'Lời thoại.'],
        ['What will the man do?', 'Write the invitations', 'Meet the caterer', 'Choose the wine', 'Book the venue', 'Câu cuối.'],
      ],
    },
    {
      title: 'A problem with a train ticket',
      lines: [
        'W: Excuse me, I bought a ticket to Brighton, but the machine gave me one to Bristol.',
        'M: Let me see. Yes, that is the wrong destination. Did you pay by card?',
        'W: Yes.',
        'M: Then I can cancel it and issue the correct ticket. The Brighton fare is actually six pounds cheaper, so the difference will go back to your card.',
        'W: Thank you. Which platform is it?',
        'M: Platform nine, in eight minutes.',
      ],
      qs: [
        ['What is the problem?', 'The ticket is for the wrong place.', 'The train was canceled.', 'The machine took her card.', 'The ticket is too expensive.', 'Lời thoại.'],
        ['What will happen to the price difference?', 'It will be refunded to her card.', 'She will pay it in cash.', 'It will be kept as a fee.', 'It will be given as a voucher.', 'Lời thoại.'],
        ['Where does the woman need to go?', 'To platform nine', 'To the ticket machine', 'To Bristol', 'To platform six', 'Câu cuối.'],
      ],
    },
    {
      title: 'A request to work different hours',
      lines: [
        'M: Ms. Carter, could I start at seven and finish at three for the next month? My wife is in hospital, and I need to collect the children from school.',
        'W: I am sorry to hear that. Yes, of course. Is there anything else we can do?',
        'M: That is very kind. I may need a day off next week.',
        'W: Just let me know. Please tell the rest of the team about your new hours so they know when to reach you.',
      ],
      qs: [
        ['What does the man ask for?', 'A change to his working hours', 'A pay rise', 'A transfer', 'A longer vacation', 'Lời thoại.'],
        ['Why does he need this?', 'He must pick up his children.', 'He is studying.', 'He has a second job.', 'He lives far away.', 'Lời thoại.'],
        ['What does the woman ask him to do?', 'Inform his colleagues', 'Fill in a form', 'Find a replacement', 'Work on Saturdays', 'Câu cuối.'],
      ],
    },
    {
      title: 'Choosing a gift for a client',
      lines: [
        'W: Mr. Tanaka is visiting next week. We should give him a gift.',
        'M: Last time we gave him a book about the city. What about something local to eat?',
        'W: Good idea. The chocolate shop on Bridge Street makes lovely gift boxes.',
        'M: Could you buy one? About forty dollars.',
        'W: Sure. I will ask them to wrap it and add a card.',
      ],
      qs: [
        ['Why do the speakers want a gift?', 'A client is visiting.', 'A colleague is retiring.', 'It is a birthday.', 'They won a contract.', 'Lời thoại.'],
        ['What did they give last time?', 'A book', 'Chocolate', 'A pen', 'A bottle of wine', 'Lời thoại.'],
        ['What will the woman ask the shop to do?', 'Wrap the gift and add a card', 'Deliver it to the hotel', 'Give a discount', 'Make a special flavor', 'Câu cuối.'],
      ],
    },
    {
      title: 'Selecting a courier service',
      lines: [
        'M: We need to send these contracts to Singapore. They must arrive within three days, and I want a signature on delivery.',
        'W: Here are the courier options. Do you have a budget?',
        'M: No more than seventy dollars.',
        'W: Then there is one service that fits.',
        'M: Please book it for this afternoon.',
      ],
      graphic: ['Courier services to Singapore', 'Service | Days | Signature | Price\nPostal Air | 7 | No | $25\nGlobal Saver | 4 | Yes | $48\nSwift Express | 2 | Yes | $65\nPremium Jet | 1 | Yes | $95'],
      qs: [
        ['What is being sent?', 'Contracts', 'Product samples', 'A gift', 'Machine parts', 'Lời thoại.'],
        ['What does the man require on delivery?', 'A signature', 'A photograph', 'A phone call', 'Payment', 'Lời thoại.'],
        ['Look at the graphic. Which service will be booked?', 'Swift Express', 'Postal Air', 'Global Saver', 'Premium Jet', 'Trong 3 ngày, có chữ ký, ≤ $70: Swift Express.'],
      ],
    },
  ],
  p4: [
    {
      title: 'Announcement on a city bus',
      lines: [
        'M: Attention, passengers. Because of a street festival, this bus will not stop at Market Square or City Hall today.',
        'M: Passengers for those stops should get off at Central Station and walk north for about five minutes.',
        'M: Normal service will resume tomorrow morning. Thank you for your understanding.',
      ],
      qs: [
        ['Why is the route changed?', 'A street festival', 'Road repairs', 'An accident', 'Bad weather', 'Thông báo.'],
        ['Where should passengers for City Hall get off?', 'At Central Station', 'At Market Square', 'At the next stop', 'At the terminal', 'Thông báo.'],
        ['When will normal service return?', 'Tomorrow morning', 'This evening', 'Next week', 'In five minutes', 'Câu cuối.'],
      ],
    },
    {
      title: 'Voicemail from an event planner',
      lines: [
        'W: Hello, Mr. Brandt. This is Nicole from Star Events, calling about your company\'s anniversary party.',
        'W: I have good news. The band you wanted is available on the twentieth. However, they need to know by Friday, and they ask for a deposit of five hundred dollars.',
        'W: I also need the final number of guests so that I can confirm the catering. Please call me back when you can.',
      ],
      qs: [
        ['What good news does the speaker give?', 'A band is available.', 'The price is lower.', 'A venue is free.', 'More guests can come.', 'Lời nhắn.'],
        ['What does the band require?', 'A deposit', 'A stage', 'A hotel room', 'A list of songs', 'Lời nhắn.'],
        ['What other information does the speaker need?', 'The number of guests', 'The address', 'The menu', 'The date', 'Câu cuối.'],
      ],
    },
    {
      title: 'Advertisement for an electronics store',
      lines: [
        'M: This weekend only, save big at Circuit World\'s anniversary sale.',
        'M: Televisions, laptops, and headphones are all reduced by up to forty percent. And if you bring in your old phone, we will give you fifty dollars off any new one.',
        'M: Our experts will set up your new device for free. Doors open at eight on Saturday. Circuit World, in the Eastgate Shopping Center.',
      ],
      qs: [
        ['What is the occasion for the sale?', 'An anniversary', 'A store closing', 'A new branch', 'A holiday', 'Quảng cáo.'],
        ['How can customers save fifty dollars on a phone?', 'By bringing in an old phone', 'By paying cash', 'By arriving at eight', 'By buying a laptop', 'Quảng cáo.'],
        ['What service is free?', 'Setting up a new device', 'Home delivery', 'A two-year warranty', 'Repairs', 'Quảng cáo.'],
      ],
    },
    {
      title: 'Talk to new restaurant staff',
      lines: [
        'W: Welcome to the team at Harbor Grill. I want to go over a few rules before tonight\'s service.',
        'W: Always wash your hands when you enter the kitchen. Phones must stay in your lockers during your shift.',
        'W: If a customer tells you about a food allergy, write it at the top of the order in red and tell the chef in person. Tonight, each of you will work beside an experienced waiter.',
      ],
      qs: [
        ['Where should staff keep their phones?', 'In their lockers', 'In their pockets', 'At the bar', 'In the kitchen', 'Lời nói.'],
        ['What should staff do about a food allergy?', 'Write it in red and tell the chef', 'Ask the customer to leave', 'Call the manager', 'Offer a free dish', 'Lời nói.'],
        ['What will the new staff do tonight?', 'Work alongside an experienced waiter', 'Cook in the kitchen', 'Watch a video', 'Go home early', 'Câu cuối.'],
      ],
    },
    {
      title: 'Recorded message for a sports center',
      lines: [
        'M: Thank you for calling Riverside Sports Center.',
        'M: The center is open from six a.m. to ten p.m. on weekdays, and from eight to eight at weekends. The pool is closed this week for cleaning and will reopen on Monday.',
        'M: To book a tennis court, press one. For information about swimming lessons, press two.',
      ],
      qs: [
        ['When does the center close on weekdays?', 'At ten p.m.', 'At eight p.m.', 'At six p.m.', 'At midnight', 'Thông báo.'],
        ['Why is the pool closed?', 'It is being cleaned.', 'It is being rebuilt.', 'There is a competition.', 'There are no lifeguards.', 'Thông báo.'],
        ['Why would a caller press one?', 'To book a tennis court', 'To ask about lessons', 'To join the center', 'To speak to a manager', 'Câu cuối.'],
      ],
    },
    {
      title: 'Excerpt from a management meeting',
      lines: [
        'W: Our online sales have grown by thirty percent this year, but so have complaints about delivery.',
        'W: Most complaints are about packages arriving later than promised. Our current courier is cheap, but it is not reliable enough.',
        'W: I propose that we test a second courier in the northern region for two months and compare the results. I will present the figures at our meeting in March.',
      ],
      qs: [
        ['What has increased along with online sales?', 'Complaints about delivery', 'Staff numbers', 'Product prices', 'Store visits', 'Lời nói.'],
        ['What does the speaker say about the current courier?', 'It is not reliable enough.', 'It is too expensive.', 'It is closing down.', 'It is very fast.', 'Lời nói.'],
        ['What does the speaker propose?', 'Testing another courier', 'Ending online sales', 'Raising delivery fees', 'Hiring drivers', 'Lời nói.'],
      ],
    },
    {
      title: 'News report on a new hospital wing',
      lines: [
        'M: The new children\'s wing at St. Mary\'s Hospital was officially opened this morning by the mayor.',
        'M: The four-story building has sixty beds, two operating rooms, and a rooftop play area. It cost twenty million dollars, a quarter of which was raised by local residents.',
        'M: The first patients will be moved in next Monday.',
      ],
      qs: [
        ['What was opened this morning?', "A children's wing", 'A new car park', 'A medical school', 'A pharmacy', 'Bản tin.'],
        ['Where did a quarter of the money come from?', 'Local residents', 'The national government', 'A bank loan', 'A single company', 'Bản tin.'],
        ['When will patients move in?', 'Next Monday', 'Today', 'Next month', 'Next year', 'Câu cuối.'],
      ],
    },
    {
      title: 'Message about a delivery schedule',
      lines: [
        'W: Good morning. This is Farah from Northern Dairy with a change to this week\'s deliveries.',
        'W: Because Wednesday is a public holiday, the delivery planned for that day will be made one day earlier. All other deliveries will take place as scheduled.',
        'W: Please make sure someone is there to receive the goods before eight a.m.',
      ],
      graphic: ['Weekly deliveries', 'Day | Product\nMonday | Milk\nWednesday | Cheese and butter\nFriday | Yogurt'],
      qs: [
        ['Why is there a change?', 'There is a public holiday.', 'A truck broke down.', 'The dairy is closed for repairs.', 'An order was increased.', 'Lời nhắn.'],
        ['Look at the graphic. What will be delivered on Tuesday this week?', 'Cheese and butter', 'Milk', 'Yogurt', 'Nothing', 'Giao hàng thứ Tư dời sớm một ngày.'],
        ['What is the listener asked to do?', 'Have someone available early', 'Pay in advance', 'Return empty bottles', 'Call back', 'Câu cuối.'],
      ],
    },
  ],
};
