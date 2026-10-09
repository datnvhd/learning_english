/** TOEIC đề 4 – phần Nghe bổ sung để đủ 100 câu (xem ghi chú "ĐỀ ĐẦY ĐỦ" trong helpers.ts) */
import { RawToeicL } from '../helpers';

export const L: RawToeicL = {
  p2: [
    ['Who is responsible for locking up tonight?', "It's Maria's turn.", 'With the master key.', 'At ten o\'clock.', 'Who → người phụ trách.'],
    ['Where is the annual report filed?', 'In the gray cabinet by the door.', 'Once a year.', 'It was reported yesterday.', 'Where → vị trí.'],
    ['When does the sale begin?', 'This Saturday at nine.', 'Up to fifty percent off.', 'At the downtown store.', 'When → thời gian.'],
    ['How many people are on the waiting list?', 'About fifteen.', 'For two weeks.', 'In the waiting room.', 'How many → số lượng.'],
    ['Would you like to leave a message?', 'Yes, please ask him to call me back.', 'I left it at home.', 'The message was long.', 'Lời đề nghị → nhận lời.'],
    ['Why is the cafeteria closed today?', 'The kitchen is being inspected.', 'On the ground floor.', 'Until two o\'clock.', 'Why → lý do.'],
    ['Did you receive the samples I sent?', 'Yes, they arrived this morning.', 'A simple question.', 'I will send them tomorrow.', 'Câu hỏi Yes/No quá khứ.'],
    ['Which hotel are the clients staying at?', 'The Grand Plaza.', 'For three nights.', 'By taxi.', 'Which → tên khách sạn.'],
    ["We should order more brochures, shouldn't we?", 'Yes, we only have a few left.', 'In the brochure.', 'The order was late.', 'Câu hỏi đuôi → đồng tình.'],
    ['Could you turn down the music a little?', 'Sorry, I did not realize it was so loud.', 'I turned it in yesterday.', 'It is my favorite song.', 'Lời nhờ → xin lỗi và làm theo.'],
    ['How long does the warranty last?', 'Two years from the date of purchase.', 'About fifty dollars.', 'At the service center.', 'How long → thời hạn.'],
    ['The new intern seems very capable.', 'Yes, she learns quickly.', 'In the capital city.', 'He seemed late.', 'Nhận xét → đồng tình.'],
    ['Shall we meet in my office or yours?', 'Yours is quieter.', 'Yes, let\'s meet.', 'It is an open office.', 'Câu hỏi lựa chọn.'],
    ['Is the manager available this afternoon?', 'She is in meetings until four.', 'A managing director.', 'It is available in blue.', 'Câu hỏi Yes/No → câu trả lời gián tiếp.'],
    ["Why don't you take the earlier flight?", 'It is fully booked.', 'Because I flew.', 'At the airport.', 'Lời gợi ý → nêu lý do không thể.'],
    ['Whose turn is it to make the coffee?', 'I think it is mine.', 'Two sugars, please.', 'Turn left here.', 'Whose → người.'],
    ['I cannot log in to the new system.', 'Have you tried resetting your password?', 'A log cabin.', 'It is a new system.', 'Vấn đề → gợi ý cách xử lý.'],
  ],
  p3: [
    {
      title: 'A late delivery of flowers',
      lines: [
        'W: Hello, this is Karen from the Lakeside Hotel. The flowers for tonight\'s banquet were supposed to arrive at noon.',
        'M: I am very sorry. Our van had a flat tire on the highway. The driver is on his way again and should be there by two.',
        'W: The banquet starts at six, so that still gives us time to arrange them.',
        'M: To apologize, we will add ten table arrangements at no charge.',
      ],
      qs: [
        ['Why is the woman calling?', 'A delivery is late.', 'She wants to order more flowers.', 'A banquet was canceled.', 'She received the wrong bill.', 'Hoa lẽ ra đến lúc trưa.'],
        ['What caused the delay?', 'A flat tire', 'Heavy traffic', 'A wrong address', 'A shortage of flowers', '"Our van had a flat tire".'],
        ['What does the man offer?', 'Extra arrangements for free', 'A full refund', 'A later delivery', 'A discount next time', '"add ten table arrangements at no charge".'],
      ],
    },
    {
      title: 'Preparing a report for the board',
      lines: [
        'M: Lisa, the board meets on Thursday. Is the financial report ready?',
        'W: Nearly. I just need the sales figures for September from the Madrid office.',
        'M: I spoke to them this morning. They will send the numbers by five today.',
        'W: Good. Then I can finish tonight and print twelve copies tomorrow.',
        'M: Please make it fourteen. Two new members have joined the board.',
      ],
      qs: [
        ['What is the woman waiting for?', 'Sales figures', 'A printer', 'Board approval', 'A flight from Madrid', '"the sales figures for September from the Madrid office".'],
        ['When will the information arrive?', 'By five today', 'Tomorrow morning', 'On Thursday', 'Next week', '"by five today".'],
        ['Why does the man ask for more copies?', 'The board has two new members.', 'Some copies were lost.', 'The clients want copies.', 'The report is longer.', '"Two new members have joined the board".'],
      ],
    },
    {
      title: 'A problem with a rental apartment',
      lines: [
        'W: Hello, Mr. Daly. This is Ana from apartment nine. The heating has not worked since last night.',
        'M: I am sorry about that. Is the radiator completely cold?',
        'W: Yes, in every room.',
        'M: It sounds like the boiler. I will call the repair company now and ask them to come this afternoon. Will you be at home?',
        'W: I can be back by three.',
      ],
      qs: [
        ['What is the problem?', 'The heating is not working.', 'A window is broken.', 'The water is too hot.', 'The door will not lock.', '"The heating has not worked since last night".'],
        ['What does the man think is the cause?', 'The boiler', 'The radiator in one room', 'The electricity', 'The weather', '"It sounds like the boiler".'],
        ['When can the woman be at home?', 'By three', 'By noon', 'After six', 'Tomorrow', '"I can be back by three".'],
      ],
    },
    {
      title: 'Discussing a new product name',
      lines: [
        'M: We need to choose a name for the new energy drink before Friday.',
        'W: The marketing team suggested three. I like "Spark" best. It is short and easy to remember.',
        'M: So do I, but the legal department says another company already uses it in Canada.',
        'W: Oh. Then "Volt" is my second choice.',
        'M: I will ask legal to check that one today.',
      ],
      qs: [
        ['What are the speakers choosing?', 'A product name', 'A new supplier', 'A slogan', 'A package color', '"a name for the new energy drink".'],
        ['Why can they not use "Spark"?', 'Another company already uses it.', 'It is too long.', 'Customers disliked it.', 'It is hard to pronounce.', '"another company already uses it in Canada".'],
        ['What will the man do today?', 'Ask the legal department to check a name', 'Travel to Canada', 'Meet the marketing team', 'Design a label', '"I will ask legal to check that one today".'],
      ],
    },
    {
      title: 'A customer at a bank',
      lines: [
        'W: Good morning. I would like to transfer two thousand dollars to an account in Germany.',
        'M: Certainly. Do you have the account details?',
        'W: Yes, here they are. How long will it take?',
        'M: Usually two business days. There is a fee of twenty-five dollars.',
        'W: Is there a faster option?',
        'M: Yes, same-day transfer is available for forty dollars.',
        'W: The standard one is fine.',
      ],
      qs: [
        ['What does the woman want to do?', 'Send money abroad', 'Open an account', 'Exchange currency', 'Apply for a loan', '"transfer two thousand dollars to an account in Germany".'],
        ['How long does a standard transfer take?', 'Two business days', 'One hour', 'One week', 'The same day', '"Usually two business days".'],
        ['How much will the woman pay in fees?', '$25', '$40', '$20', '$65', 'Chọn dịch vụ tiêu chuẩn: 25 đô.'],
      ],
    },
    {
      title: 'Arranging transport for visitors',
      lines: [
        'M: Six engineers from our Japanese partner are arriving on Monday. How should we bring them from the airport?',
        'W: We could send two taxis, but a minibus would be more convenient.',
        'M: I agree. Do we know when their flight lands?',
        'W: At seven forty in the morning. I will book the minibus and ask the driver to hold a sign with our company name.',
        'M: Perfect. I will prepare welcome packs for them.',
      ],
      qs: [
        ['Who is arriving on Monday?', 'Engineers from a partner company', 'New employees', 'Customers from Europe', 'Government inspectors', '"Six engineers from our Japanese partner".'],
        ['How will the visitors travel from the airport?', 'By minibus', 'By taxi', 'By train', 'By company car', '"I will book the minibus".'],
        ['What will the man prepare?', 'Welcome packs', 'A sign', 'A schedule of flights', 'Lunch', '"I will prepare welcome packs".'],
      ],
    },
    {
      title: 'A magazine interview',
      lines: [
        'W: Mr. Hale, thank you for agreeing to this interview for Business Weekly.',
        'M: My pleasure. How long will it take?',
        'W: About forty minutes. I would also like to take some photographs of you in the factory, if that is all right.',
        'M: Of course, but visitors must wear safety glasses on the production floor.',
        'W: No problem. When the article is ready, I will send you a copy to check before it is published.',
      ],
      qs: [
        ['Who is the woman?', 'A journalist', 'A factory worker', 'A safety inspector', 'A photographer\'s assistant', '"this interview for Business Weekly".'],
        ['What must visitors wear on the production floor?', 'Safety glasses', 'A helmet', 'Gloves', 'A uniform', '"visitors must wear safety glasses".'],
        ['What will the woman send the man?', 'A copy of the article', 'A set of photographs', 'A bill', 'A list of questions', '"I will send you a copy to check".'],
      ],
    },
    {
      title: 'A broken coffee order',
      lines: [
        'M: Excuse me, I ordered a large latte, but I think this is a cappuccino.',
        'W: Oh, I am sorry. We are short of staff this morning. I will make you a new one right away.',
        'M: Thank you. I am in a bit of a hurry.',
        'W: It will only take a minute. And here is a voucher for a free drink on your next visit.',
      ],
      qs: [
        ['What is the man\'s complaint?', 'He received the wrong drink.', 'His drink is cold.', 'He was overcharged.', 'He waited too long.', '"I ordered a large latte, but I think this is a cappuccino".'],
        ['What reason does the woman give?', 'There are not enough staff.', 'The machine is broken.', 'The milk has run out.', 'She is new.', '"We are short of staff this morning".'],
        ['What does the woman give the man?', 'A voucher', 'A refund', 'A pastry', 'A receipt', '"here is a voucher for a free drink".'],
      ],
    },
    {
      title: 'Planning a website update',
      lines: [
        'W: Our website has not been updated for two years. It looks old-fashioned.',
        'M: I agree. I got quotes from two design agencies. The first is cheaper, but they need three months.',
        'W: That is too long. We want it ready before the trade fair in May.',
        'M: The second agency can finish in six weeks.',
        'W: Then let us go with them. Could you set up a meeting for next week?',
      ],
      qs: [
        ['What is the problem with the website?', 'It looks out of date.', 'It is too slow.', 'It has been hacked.', 'It has no photographs.', '"It looks old-fashioned".'],
        ['Why do the speakers reject the first agency?', 'It would take too long.', 'It is too expensive.', 'It has a bad reputation.', 'It is in another country.', '"they need three months" – "That is too long".'],
        ['What does the woman ask the man to do?', 'Arrange a meeting', 'Design the site himself', 'Cancel the trade fair', 'Pay a deposit', '"Could you set up a meeting for next week?"'],
      ],
    },
    {
      title: 'A lost key card',
      lines: [
        'M: Hi, I have lost my key card for room four twelve.',
        'W: No problem, sir. May I see some identification?',
        'M: Here is my passport.',
        'W: Thank you, Mr. Novak. I have cancelled the old card and made you a new one. There is no charge this time.',
        'M: Thanks. Also, could I have a wake-up call at six tomorrow?',
        'W: Certainly.',
      ],
      qs: [
        ['What has the man lost?', 'His room key card', 'His passport', 'His wallet', 'His phone', '"I have lost my key card".'],
        ['What does the woman ask to see?', 'Identification', 'A credit card', 'A booking number', 'His room', '"May I see some identification?"'],
        ['What else does the man request?', 'A wake-up call', 'A taxi', 'A late checkout', 'Breakfast in his room', '"could I have a wake-up call at six tomorrow?"'],
      ],
    },
    {
      title: 'Choosing a training course',
      lines: [
        'W: Our budget for staff training this quarter is one thousand dollars. I want to send two people from my team.',
        'M: Here is the list of courses. Which one are you interested in?',
        'W: They need to improve their presentation skills, but the price must fit the budget for two people.',
        'M: Then this one-day course would work. It is five hundred dollars per person.',
        'W: Great. Please register Dana and Raj.',
      ],
      graphic: ['Training courses', 'Course | Length | Price per person\nProject management | 3 days | $900\nPresentation skills (advanced) | 2 days | $650\nPresentation skills (basic) | 1 day | $500\nTime management | Half day | $200'],
      qs: [
        ['How many people does the woman want to send?', 'Two', 'One', 'Three', 'Four', '"send two people from my team".'],
        ['What skill do they need to improve?', 'Giving presentations', 'Managing projects', 'Managing time', 'Writing reports', '"improve their presentation skills".'],
        ['Look at the graphic. Which course will the employees take?', 'Presentation skills (basic)', 'Presentation skills (advanced)', 'Project management', 'Time management', 'Khóa một ngày, $500 mỗi người → vừa ngân sách $1.000.'],
      ],
    },
  ],
  p4: [
    {
      title: 'Announcement in a shopping mall',
      lines: [
        'M: Attention, shoppers. The parking garage on the east side of the mall will close at nine o\'clock tonight for cleaning.',
        'M: If your car is parked there, please move it to the west garage before nine. The west garage will stay open until midnight as usual.',
        'M: We apologize for any inconvenience. Thank you for shopping at Greenfield Mall.',
      ],
      qs: [
        ['Why is the east garage closing early?', 'For cleaning', 'For repairs', 'For an event', 'Because of bad weather', '"will close at nine o\'clock tonight for cleaning".'],
        ['What should drivers parked in the east garage do?', 'Move their cars', 'Pay an extra fee', 'Leave the mall', 'Contact security', '"please move it to the west garage before nine".'],
        ['When does the west garage close?', 'At midnight', 'At nine', 'At ten', 'It does not close', '"will stay open until midnight".'],
      ],
    },
    {
      title: 'Voicemail from a job applicant',
      lines: [
        'W: Hello, Mr. Grant. This is Sarah Lin. I am calling about my interview for the accountant position, which is scheduled for tomorrow at ten.',
        'W: Unfortunately, my flight from Toronto has been canceled because of snow, and the next one does not arrive until tomorrow evening.',
        'W: I am very sorry. Would it be possible to hold the interview by video call instead, or to move it to Friday? I can be reached at five five five, zero one three seven.',
      ],
      qs: [
        ['Why is the speaker calling?', 'She cannot attend an interview in person.', 'She wants to accept a job.', 'She has a question about salary.', 'She lost her ticket.', 'Chuyến bay bị hủy.'],
        ['What caused the problem?', 'Snow', 'A strike', 'A missed train', 'An illness', '"canceled because of snow".'],
        ['What does the speaker suggest?', 'A video call or a new date', 'Canceling her application', 'Sending a colleague', 'Meeting in Toronto', '"by video call instead, or to move it to Friday".'],
      ],
    },
    {
      title: 'Radio news about a new park',
      lines: [
        'M: In local news, the city council has approved plans to turn the old railway yard on Canal Street into a public park.',
        'M: The park will include a playground, a skating area, and a community garden. Construction will begin in April and should be completed by the end of next year.',
        'M: The council is inviting residents to suggest a name for the park. Ideas can be submitted on the city website until March thirty-first.',
      ],
      qs: [
        ['What will the railway yard become?', 'A park', 'A shopping center', 'A train museum', 'A parking lot', '"turn the old railway yard... into a public park".'],
        ['When will construction begin?', 'In April', 'In March', 'Next year', 'This week', '"Construction will begin in April".'],
        ['What are residents invited to do?', 'Suggest a name', 'Donate money', 'Plant trees', 'Attend a meeting', '"suggest a name for the park".'],
      ],
    },
    {
      title: 'Instructions to new cashiers',
      lines: [
        'W: Welcome, everyone. Before you start on the registers, there are a few rules to remember.',
        'W: First, always greet the customer and ask whether they have a store card. Second, check the back of every credit card for a signature.',
        'W: If a customer wants to return an item, do not handle it yourself. Send them to the service desk at the front of the store. Now, please log in with the number on your badge.',
      ],
      qs: [
        ['Who is the speaker addressing?', 'New cashiers', 'Customers', 'Store managers', 'Delivery drivers', '"Before you start on the registers".'],
        ['What should the listeners check on credit cards?', 'A signature', 'The expiry date', 'The bank name', 'A photograph', '"check the back of every credit card for a signature".'],
        ['Where should customers with returns be sent?', 'To the service desk', 'To the manager\'s office', 'To another store', 'To the back entrance', '"Send them to the service desk".'],
      ],
    },
    {
      title: 'Telephone message from a dentist\'s office',
      lines: [
        'M: Hello, this is a message for Ms. Park from Dr. Evans\'s office.',
        'M: We are calling to let you know that a patient has canceled, so we can offer you an earlier appointment, on Wednesday at nine a.m., in place of your appointment next Monday.',
        'M: If you would like the earlier time, please call us by five o\'clock today. Otherwise, we will keep your Monday appointment as it is.',
      ],
      qs: [
        ['What is the purpose of the call?', 'To offer an earlier appointment', 'To cancel an appointment', 'To request payment', 'To confirm an address', '"we can offer you an earlier appointment".'],
        ['Why is the new time available?', 'Another patient canceled.', 'The dentist returned early.', 'The office hired more staff.', 'The office is open longer.', '"a patient has canceled".'],
        ['What happens if the listener does not call?', 'Her original appointment remains.', 'She loses her appointment.', 'She will be charged.', 'The office will call again.', '"we will keep your Monday appointment as it is".'],
      ],
    },
    {
      title: 'Talk at a company anniversary',
      lines: [
        'W: Good evening, and welcome to the twenty-fifth anniversary celebration of Harper Electronics.',
        'W: When my father started this company, he had three employees and a rented garage. Today we have four hundred staff in six countries.',
        'W: Tonight we will present awards to employees who have been with us for more than twenty years. But first, please enjoy a short film about our history.',
      ],
      qs: [
        ['What is being celebrated?', 'A company anniversary', 'A retirement', 'A new product', 'A merger', '"the twenty-fifth anniversary celebration".'],
        ['Who started the company?', "The speaker's father", 'The speaker', 'Three engineers', 'A foreign investor', '"When my father started this company".'],
        ['What will happen next?', 'A film will be shown.', 'Dinner will be served.', 'Awards will be given.', 'A speech will be made by the mayor.', '"But first, please enjoy a short film".'],
      ],
    },
    {
      title: 'Advertisement for a delivery app',
      lines: [
        'M: Too busy to go to the supermarket? Download FreshCart, the app that brings your groceries to your door in under an hour.',
        'M: Choose from more than ten thousand products at the same prices you would pay in the store. Delivery is free on orders over thirty dollars.',
        'M: New customers get fifteen dollars off their first order. Just enter the code WELCOME when you check out.',
      ],
      qs: [
        ['What does FreshCart do?', 'It delivers groceries.', 'It compares prices.', 'It sells kitchen equipment.', 'It provides recipes.', '"brings your groceries to your door".'],
        ['When is delivery free?', 'On orders over thirty dollars', 'On the first order only', 'On weekends', 'For members only', '"Delivery is free on orders over thirty dollars".'],
        ['How can new customers get a discount?', 'By entering a code', 'By calling a number', 'By visiting a store', 'By inviting a friend', '"enter the code WELCOME".'],
      ],
    },
    {
      title: 'Message about a factory visit',
      lines: [
        'W: Hello, this is Naomi from Clearwater Bottling. I am calling about your group\'s visit to our factory on Thursday.',
        'W: Because one of our production lines is being repaired that morning, we need to change the order of the tour. We will begin with the area that was planned as the third stop, and then follow the original order for the rest.',
        'W: Please remind your group to wear closed shoes.',
      ],
      graphic: ['Factory tour – original plan', 'Stop | Area\n1 | Bottling line\n2 | Quality laboratory\n3 | Warehouse\n4 | Visitor center'],
      qs: [
        ['Why is the tour being changed?', 'A production line is being repaired.', 'The group is too large.', 'The guide is unavailable.', 'The visit was moved to Friday.', '"one of our production lines is being repaired".'],
        ['Look at the graphic. Where will the tour begin?', 'In the warehouse', 'At the bottling line', 'In the quality laboratory', 'At the visitor center', 'Bắt đầu ở điểm dừng thứ ba ban đầu → Warehouse.'],
        ['What should visitors wear?', 'Closed shoes', 'Safety helmets', 'White coats', 'Gloves', '"wear closed shoes".'],
      ],
    },
  ],
};
