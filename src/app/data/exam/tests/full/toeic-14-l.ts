/** TOEIC đề 14 – phần Nghe bổ sung để đủ 100 câu (xem ghi chú "ĐỀ ĐẦY ĐỦ" trong helpers.ts) */
import { RawToeicL } from '../helpers';

export const L: RawToeicL = {
  p2: [
    ['Where should I send the invoice?', 'To the accounts department.', 'By the end of the month.', 'Two hundred dollars.', 'Where → nơi gửi.'],
    ['Who is covering for Maria while she is away?', 'Daniel is.', 'For two weeks.', 'On vacation.', 'Who → người thay.'],
    ['When does the exhibition close?', 'At the end of August.', 'At the city gallery.', 'About modern art.', 'When → thời gian.'],
    ['How many copies of the report do you need?', 'Six will be enough.', 'On my desk.', 'By tomorrow.', 'How many → số lượng.'],
    ['Would you like to see our latest catalog?', 'Yes, please leave one with me.', 'I saw him yesterday.', 'It is the latest.', 'Lời mời → nhận.'],
    ['Why did you change the meeting room?', 'The other one had no projector.', 'On the second floor.', 'At two o\'clock.', 'Why → lý do.'],
    ['Do you have the address of the supplier?', 'It is on their business card.', 'I addressed the letter.', 'They supply paper.', 'Câu hỏi Yes/No → chỉ nơi có.'],
    ['Which day is best for the delivery?', 'Any day except Friday.', 'By truck.', 'Around noon.', 'Which → ngày.'],
    ["The printer has been fixed, hasn't it?", 'Yes, it is working again.', 'It prints in color.', 'A fixed price.', 'Câu hỏi đuôi.'],
    ['Could you pass me that folder?', 'The red one or the blue one?', 'I passed the test.', 'It is folded.', 'Lời nhờ → hỏi lại.'],
    ['How was the customer feedback?', 'Mostly positive.', 'By email.', 'Fifty customers.', 'How was → nhận xét.'],
    ['Our office is moving to the tenth floor next month.', 'Will we have a better view?', 'It moved quickly.', 'Ten floors.', 'Thông tin → hỏi lại.'],
    ['Do you want to take notes, or shall I?', 'I will. I have my laptop.', 'Yes, I do.', 'A note for you.', 'Câu hỏi lựa chọn.'],
    ['Is the conference fee refundable?', 'Only until two weeks before the event.', 'It is a large conference.', 'I paid the fee.', 'Câu hỏi Yes/No → điều kiện.'],
    ["Let's finish this report before lunch.", 'All right. I am almost done with my section.', 'I had lunch already.', 'It finished late.', 'Đề nghị → đồng ý.'],
    ['Whose jacket is this on the chair?', 'I think it belongs to the technician.', 'It is quite warm.', 'On the back of the chair.', 'Whose → chủ nhân.'],
    ['The meeting room is too small for all of us.', 'Then let us use the cafeteria.', 'It is a small problem.', 'Twelve chairs.', 'Vấn đề → giải pháp.'],
  ],
  p3: [
    {
      title: 'A customer orders a cake',
      lines: [
        'W: Hello, I would like to order a cake for my company\'s tenth anniversary. It should serve about fifty people.',
        'M: Certainly. Would you like the company logo on top?',
        'W: Yes, in blue and silver. I can email you the image.',
        'M: Perfect. When do you need it?',
        'W: Next Friday at noon. Do you deliver?',
        'M: Yes, for ten dollars within the city.',
      ],
      qs: [
        ['What is the cake for?', 'A company anniversary', 'A wedding', 'A birthday', 'A retirement', 'Lời thoại.'],
        ['What will the woman send by email?', 'A logo', 'A list of guests', 'A recipe', 'A payment', 'Lời thoại.'],
        ['How much is delivery?', '$10', '$50', 'Free', '$15', 'Câu cuối.'],
      ],
    },
    {
      title: 'A problem with a company car',
      lines: [
        'M: Susan, the company car I usually take has a flat tire, and I have to visit a client at two.',
        'W: The other car is being used by the sales team today. Could you take a taxi?',
        'M: It is forty kilometers away. That would be expensive.',
        'W: True. Let me call the garage on the corner. They may be able to change the tire within an hour.',
        'M: That would be great.',
      ],
      qs: [
        ['What is wrong with the car?', 'It has a flat tire.', 'It has no fuel.', 'It will not start.', 'It was stolen.', 'Lời thoại.'],
        ['Why does the man not want to take a taxi?', 'It would cost too much.', 'It would take too long.', 'He dislikes taxis.', 'None are available.', 'Lời thoại.'],
        ['What will the woman do?', 'Call a garage', 'Lend him her car', 'Cancel the visit', 'Phone the client', 'Lời thoại.'],
      ],
    },
    {
      title: 'Planning a training budget',
      lines: [
        'W: We have four thousand dollars left in the training budget for this year.',
        'M: Several people have asked for a course on project management.',
        'W: How much would that cost?',
        'M: An outside trainer charges fifteen hundred dollars a day for up to twelve people.',
        'W: Then we could afford two days. Find out who is interested, and I will contact the trainer.',
      ],
      qs: [
        ['How much money is left in the budget?', '$4,000', '$1,500', '$12,000', '$3,000', 'Lời thoại.'],
        ['What course do people want?', 'Project management', 'Languages', 'Sales', 'Computer skills', 'Lời thoại.'],
        ['What will the man do?', 'Find out who is interested', 'Contact the trainer', 'Book a room', 'Pay the fee', 'Câu cuối.'],
      ],
    },
    {
      title: 'A late payment',
      lines: [
        'M: Hello, this is Paul from Northern Supplies. I am calling about invoice two three one, which was due three weeks ago.',
        'W: I am sorry. Our accountant has been ill, and several payments are late.',
        'M: I understand. When can we expect it?',
        'W: I will make the transfer myself this afternoon.',
        'M: Thank you. I will send you a confirmation when it arrives.',
      ],
      qs: [
        ['Why is the man calling?', 'A payment is overdue.', 'An order is missing.', 'He wants to place an order.', 'A price has changed.', 'Lời thoại.'],
        ['What reason does the woman give?', 'The accountant has been ill.', 'The invoice was lost.', 'The bank made a mistake.', 'The company has no money.', 'Lời thoại.'],
        ['When will the payment be made?', 'This afternoon', 'In three weeks', 'Tomorrow', 'Next month', 'Lời thoại.'],
      ],
    },
    {
      title: 'A hotel upgrade',
      lines: [
        'W: Welcome back, Mr. Ito. As you have stayed with us ten times this year, we would like to offer you a free upgrade to a suite.',
        'M: That is very kind. Does it have a desk? I need to work this evening.',
        'W: Yes, a large one, and a separate sitting room.',
        'M: Wonderful. Is breakfast served at the same time?',
        'W: From six thirty. And suite guests may use the lounge on the top floor.',
      ],
      qs: [
        ['Why is the man offered an upgrade?', 'He is a frequent guest.', 'His room is not ready.', 'He complained.', 'He paid extra.', 'Lời thoại.'],
        ['What does the man need this evening?', 'A desk', 'A meeting room', 'Dinner', 'A taxi', 'Lời thoại.'],
        ['What may suite guests use?', 'A lounge on the top floor', 'A private pool', 'A car', 'A second bedroom', 'Câu cuối.'],
      ],
    },
    {
      title: 'A missing document',
      lines: [
        'M: Have you seen the signed contract from Hartley Foods? It was on my desk yesterday.',
        'W: I took it to the legal department this morning. They wanted to check one clause.',
        'M: Oh, good. I thought I had lost it. When will they finish?',
        'W: By three. Do you need it before then?',
        'M: No, but I must send a copy to the client today.',
      ],
      qs: [
        ['What is the man looking for?', 'A signed contract', 'A food order', 'His desk key', 'A legal book', 'Lời thoại.'],
        ['Where is it?', 'In the legal department', 'On the woman\'s desk', 'With the client', 'In the mail', 'Lời thoại.'],
        ['What must the man do today?', 'Send a copy to the client', 'Sign the contract', 'Meet the lawyers', 'Call Hartley Foods', 'Câu cuối.'],
      ],
    },
    {
      title: 'A change to a menu',
      lines: [
        'W: Chef, the fish supplier just called. They have no salmon today.',
        'M: That is a problem. Salmon is on tonight\'s set menu.',
        'W: They can send sea bass instead, at the same price.',
        'M: Fine. I will change the dish. Please reprint the menus and tell the waiters.',
        'W: I will do it right away.',
      ],
      qs: [
        ['What is the problem?', 'An ingredient is unavailable.', 'A waiter is absent.', 'The menu is too long.', 'A delivery was wrong.', 'Lời thoại.'],
        ['What will be served instead?', 'Sea bass', 'Chicken', 'Tuna', 'Vegetables', 'Lời thoại.'],
        ['What does the man ask the woman to do?', 'Reprint the menus', 'Cook the fish', 'Call another supplier', 'Close the restaurant', 'Lời thoại.'],
      ],
    },
    {
      title: 'A customer service call',
      lines: [
        'M: Hello, I ordered a blue jacket from your website, but I received a black one.',
        'W: I am sorry about that. Could I have your order number?',
        'M: Four five two, nine seven one.',
        'W: Thank you. I will send the blue one today by express delivery. You do not need to pay for the return; just use the label in the box.',
        'M: Thank you. That is very helpful.',
      ],
      qs: [
        ['What is the problem?', 'The wrong color was sent.', 'The jacket is too small.', 'The order never arrived.', 'The price was wrong.', 'Lời thoại.'],
        ['How will the correct item be sent?', 'By express delivery', 'By regular mail', 'By courier next week', 'It will not be sent', 'Lời thoại.'],
        ['What does the woman say about the return?', 'It is free.', 'It costs five dollars.', 'It is not necessary.', 'It must be done in a store.', 'Lời thoại.'],
      ],
    },
    {
      title: 'A new office kitchen',
      lines: [
        'W: The new kitchen on our floor will be finished on Friday.',
        'M: At last. What will it have?',
        'W: Two microwaves, a large refrigerator, and a proper coffee machine.',
        'M: Will there be a dishwasher?',
        'W: Yes, but we will need a rota so that someone empties it every day.',
        'M: I will draw one up and email it to the team.',
      ],
      qs: [
        ['When will the kitchen be ready?', 'On Friday', 'On Monday', 'Next month', 'Today', 'Lời thoại.'],
        ['What will the kitchen include?', 'Two microwaves', 'A television', 'A vending machine', 'An oven', 'Lời thoại.'],
        ['What will the man do?', 'Prepare a rota', 'Buy a dishwasher', 'Clean the kitchen', 'Order coffee', 'Câu cuối.'],
      ],
    },
    {
      title: 'A lost visitor',
      lines: [
        'M: Excuse me, I am looking for Dr. Lee\'s office. I have an appointment at eleven.',
        'W: Dr. Lee has moved to the new building across the courtyard.',
        'M: Oh, I did not know. Which floor?',
        'W: The second, room two fourteen. It is about a five-minute walk.',
        'M: I only have three minutes. Could you call and say I am on my way?',
        'W: Of course.',
      ],
      qs: [
        ['Why is the man in the wrong place?', 'The office has moved.', 'He has the wrong day.', 'He misread the map.', 'The building is closed.', 'Lời thoại.'],
        ['Where is Dr. Lee\'s office now?', 'On the second floor of the new building', 'On the ground floor', 'In the courtyard', 'In room 114', 'Lời thoại.'],
        ['What does the man ask the woman to do?', 'Telephone Dr. Lee\'s office', 'Walk with him', 'Change his appointment', 'Draw a map', 'Lời thoại.'],
      ],
    },
    {
      title: 'Choosing a supplier of coffee machines',
      lines: [
        'W: We are replacing the coffee machines on all three floors. I have four offers.',
        'M: The machine must make at least a hundred cups a day, and I want free servicing included.',
        'W: Two of them offer that.',
        'M: Then take the cheaper of the two.',
        'W: All right. I will sign the contract this week.',
      ],
      graphic: ['Coffee machine offers (per month)', 'Supplier | Cups per day | Free servicing | Price\nAroma | 80 | Yes | $90\nBeanTech | 120 | No | $110\nCafeLine | 150 | Yes | $140\nDailyBrew | 100 | Yes | $125'],
      qs: [
        ['What are the speakers replacing?', 'Coffee machines', 'Water coolers', 'Printers', 'Microwaves', 'Lời thoại.'],
        ['What must be included?', 'Free servicing', 'Free coffee', 'Free cups', 'Free delivery', 'Lời thoại.'],
        ['Look at the graphic. Which supplier will be chosen?', 'DailyBrew', 'Aroma', 'BeanTech', 'CafeLine', '≥ 100 cốc và có bảo trì miễn phí: CafeLine và DailyBrew; rẻ hơn là DailyBrew.'],
      ],
    },
  ],
  p4: [
    {
      title: 'Announcement at a shopping center',
      lines: [
        'W: Good afternoon, shoppers. A small child has been found near the fountain on the ground floor.',
        'W: He is about four years old, has brown hair, and is wearing a green jacket. He says his name is Leo.',
        'W: If you are his parent, please come to the information desk next to the main entrance.',
      ],
      qs: [
        ['Why is the announcement being made?', 'A child has been found.', 'A store is closing.', 'A sale is starting.', 'A car is blocking the exit.', 'Thông báo.'],
        ['Where was the child found?', 'Near the fountain', 'In a toy store', 'In the parking lot', 'At the entrance', 'Thông báo.'],
        ['Where should the parent go?', 'To the information desk', 'To the fountain', 'To the security office', 'To the second floor', 'Câu cuối.'],
      ],
    },
    {
      title: 'Voicemail from a printing company',
      lines: [
        'M: Hello, Ms. Tran. This is Lucas from Rapid Print.',
        'M: Your five hundred posters are ready. They look great. However, our delivery van is being repaired, so we cannot bring them to you today as we promised.',
        'M: You are welcome to collect them from our shop before six, or we can deliver them tomorrow morning at no charge. Please let me know which you prefer.',
      ],
      qs: [
        ['What is ready?', 'Posters', 'Business cards', 'A van', 'A catalog', 'Lời nhắn.'],
        ['Why can they not be delivered today?', 'The van is being repaired.', 'The shop is closed.', 'The driver is ill.', 'The order is incomplete.', 'Lời nhắn.'],
        ['What are the two options?', 'Collect today or free delivery tomorrow', 'Pay extra or wait a week', 'Reprint or refund', 'Email or mail', 'Lời nhắn.'],
      ],
    },
    {
      title: 'Advertisement for a bank account',
      lines: [
        'W: Starting your own business? Open a StartUp Account with Union Bank and pay no fees for the first two years.',
        'W: You will have your own business adviser, a free card reader for taking payments, and an app that sends invoices in seconds.',
        'W: Opening an account takes only fifteen minutes online. Visit unionbank.example today.',
      ],
      qs: [
        ['Who is the account for?', 'New business owners', 'Students', 'Retired people', 'Large companies', 'Quảng cáo.'],
        ['How long are there no fees?', 'Two years', 'One year', 'Fifteen months', 'Six months', 'Quảng cáo.'],
        ['What is included free?', 'A card reader', 'A laptop', 'A loan', 'An office', 'Quảng cáo.'],
      ],
    },
    {
      title: 'Talk to new call center staff',
      lines: [
        'M: Welcome to the customer care team. This week you will listen to calls before taking any yourselves.',
        'M: Always begin with your name and end by asking whether there is anything else you can help with. If a customer is angry, stay calm and never interrupt.',
        'M: If you cannot solve a problem within ten minutes, pass the call to your team leader. Your headsets are in the box on your desk.',
      ],
      qs: [
        ['What will the listeners do this week?', 'Listen to calls', 'Take calls alone', 'Visit customers', 'Write reports', 'Lời nói.'],
        ['What should staff do if a customer is angry?', 'Stay calm and not interrupt', 'End the call', 'Offer a refund', 'Speak loudly', 'Lời nói.'],
        ['When should a call be passed to a team leader?', 'If it is not solved in ten minutes', 'At the start', 'When the customer asks', 'Never', 'Lời nói.'],
      ],
    },
    {
      title: 'Recorded message for a theater',
      lines: [
        'W: Thank you for calling the Royal Theater box office.',
        'W: Tickets for "The Winter Garden" are sold out for all Friday and Saturday performances. A limited number of seats are still available from Tuesday to Thursday.',
        'W: To book, press one. Please note that latecomers will not be admitted until the interval.',
      ],
      qs: [
        ['Which performances are sold out?', 'Friday and Saturday', 'Tuesday to Thursday', 'All of them', 'Sunday only', 'Thông báo.'],
        ['When are seats still available?', 'From Tuesday to Thursday', 'On Saturday', 'On Friday', 'Next month', 'Thông báo.'],
        ['What happens to people who arrive late?', 'They must wait until the interval.', 'They get a refund.', 'They sit at the back.', 'They cannot enter at all.', 'Câu cuối.'],
      ],
    },
    {
      title: 'Excerpt from a staff meeting',
      lines: [
        'M: I want to thank everyone for your work during the audit last week. The auditors found no serious problems.',
        'M: They did make one recommendation: that we store all contracts in one place instead of in each department.',
        'M: So, by the end of the month, please send your original contracts to Julia in the legal office. Keep a scanned copy for yourselves.',
      ],
      qs: [
        ['What happened last week?', 'An audit', 'A training course', 'A move', 'A sale', 'Lời nói.'],
        ['What did the auditors recommend?', 'Storing contracts in one place', 'Hiring more staff', 'Buying new computers', 'Changing suppliers', 'Lời nói.'],
        ['What should staff keep?', 'A scanned copy', 'The original contract', 'Nothing', 'A list of clients', 'Câu cuối.'],
      ],
    },
    {
      title: 'News report on a new shopping street',
      lines: [
        'W: After eighteen months of work, Market Street reopened to the public this morning.',
        'W: The street is now closed to cars, and it has wider pavements, sixty new trees, and seating areas. Twelve new shops and four cafés have opened.',
        'W: To celebrate, there will be free concerts every evening this week, starting at six.',
      ],
      qs: [
        ['How long did the work take?', 'Eighteen months', 'Six months', 'Twelve weeks', 'Four years', 'Bản tin.'],
        ['What is new about the street?', 'It is closed to cars.', 'It has a car park.', 'It is shorter.', 'It has a bus lane.', 'Bản tin.'],
        ['What will take place every evening this week?', 'Free concerts', 'A market', 'A film', 'A sale', 'Câu cuối.'],
      ],
    },
    {
      title: 'Message about a customer visit',
      lines: [
        'M: Hi, Elena. It is Marco. Here is the plan for the customer visit on Thursday.',
        'M: The customer wants to see the department with the newest machines, so we will begin there and then continue with the others in the order on the list.',
        'M: Lunch will be at twelve thirty in the meeting room.',
      ],
      graphic: ['Factory departments', 'Department | Machines installed\nCutting | 2015\nWelding | 2023\nPainting | 2019\nPacking | 2021'],
      qs: [
        ['What is planned for Thursday?', 'A customer visit', 'A machine delivery', 'A staff lunch', 'An inspection', 'Lời nhắn.'],
        ['Look at the graphic. Which department will be visited first?', 'Welding', 'Cutting', 'Painting', 'Packing', 'Máy mới nhất: 2023.'],
        ['Where will lunch be served?', 'In the meeting room', 'In the cafeteria', 'At a restaurant', 'In the welding department', 'Câu cuối.'],
      ],
    },
  ],
};
