/** TOEIC đề 17 – phần Nghe bổ sung để đủ 100 câu (xem ghi chú "ĐỀ ĐẦY ĐỦ" trong helpers.ts) */
import { RawToeicL } from '../helpers';

export const L: RawToeicL = {
  p2: [
    ['Where is the annual meeting being held?', 'At the Riverside Hotel.', 'On the tenth of May.', 'For shareholders.', 'Where → địa điểm.'],
    ['Who repaired the photocopier?', 'A technician came this morning.', 'It copies quickly.', 'Twice a year.', 'Who → người sửa.'],
    ['When will the new price list be ready?', 'By the end of the week.', 'On the website.', 'Ten percent higher.', 'When → thời hạn.'],
    ['How long does the training course last?', 'Three days.', 'In the main office.', 'By a professional trainer.', 'How long → thời lượng.'],
    ['Would you like to speak to the manager?', 'Yes, if she is available.', 'She manages the store.', 'I spoke yesterday.', 'Lời đề nghị → nhận.'],
    ['Why did the supplier raise the price?', 'Their transport costs have gone up.', 'By five percent.', 'Last month.', 'Why → lý do.'],
    ['Did you find the report I left on your desk?', 'Yes, thank you. I am reading it now.', 'On the left side.', 'A weather report.', 'Câu hỏi Yes/No.'],
    ['Which software do you use for invoices?', 'The same one as the accounts team.', 'Every month.', 'In the invoice.', 'Which → xác định.'],
    ["The clients are arriving at noon, aren't they?", 'No, their flight lands at two.', 'They are new clients.', 'At the noon meeting.', 'Câu hỏi đuôi → đính chính.'],
    ['Could you book me a taxi for six tomorrow morning?', 'Certainly. Where are you going?', 'I booked a room.', 'Six taxis.', 'Lời nhờ → hỏi thêm chi tiết.'],
    ['How many people work in your department?', 'Fourteen, including me.', 'On the third floor.', 'Since last year.', 'How many → số lượng.'],
    ['We have received a large order from Brazil.', 'That is excellent news.', 'It is a large country.', 'In order.', 'Tin tốt → phản hồi.'],
    ['Do you want the window open or closed?', 'Open, please. It is stuffy.', 'Yes, I do.', 'The store is closed.', 'Câu hỏi lựa chọn.'],
    ['Is lunch provided at the workshop?', 'Yes, at twelve thirty.', 'I had lunch.', 'A long workshop.', 'Câu hỏi Yes/No.'],
    ["Why don't we send the contract by courier?", 'Yes, that would be safer.', 'Because it was sent.', 'A career in law.', 'Lời gợi ý → tán thành.'],
    ['Whose coat is hanging by the door?', 'I think it is the visitor\'s.', 'It is a warm coat.', 'Behind the door.', 'Whose → chủ nhân.'],
    ['I am having trouble hearing you.', 'Let me call you back on another line.', 'I hear it is good.', 'No trouble.', 'Vấn đề → giải pháp.'],
  ],
  p3: [
    {
      title: 'A customer asks about a delivery',
      lines: [
        'W: Hello, I ordered a washing machine last week. When will it be delivered?',
        'M: Let me check. It is scheduled for Thursday between eight and twelve.',
        'W: I work in the mornings. Is an afternoon delivery possible?',
        'M: I can change it to Friday between one and five.',
        'W: That is better. Will the driver take the old machine away?',
        'M: Yes, at no extra charge.',
      ],
      qs: [
        ['What did the woman order?', 'A washing machine', 'A dishwasher', 'A television', 'A refrigerator', 'Lời thoại.'],
        ['Why does the woman want to change the delivery?', 'She works in the mornings.', 'She is away on Thursday.', 'She has moved.', 'The price is wrong.', 'Lời thoại.'],
        ['What will the driver do for free?', 'Take away the old machine', 'Install the machine', 'Deliver on Sunday', 'Bring a second machine', 'Câu cuối.'],
      ],
    },
    {
      title: 'Preparing for an audit',
      lines: [
        'M: The auditors arrive on Monday. Are the expense records for last year ready?',
        'W: Almost. I am missing receipts from two sales trips in March.',
        'M: Who made the trips?',
        'W: Carlos. He is on vacation until Wednesday.',
        'M: Email him anyway. He may have photos of the receipts on his phone.',
      ],
      qs: [
        ['Who is coming on Monday?', 'Auditors', 'Clients', 'New employees', 'Sales representatives', 'Lời thoại.'],
        ['What is missing?', 'Some receipts', 'A sales report', 'A contract', 'A vacation form', 'Lời thoại.'],
        ['What does the man suggest?', 'Emailing Carlos', 'Waiting until Wednesday', 'Canceling the audit', 'Calling the hotel', 'Câu cuối.'],
      ],
    },
    {
      title: 'A new company uniform',
      lines: [
        'W: Have you seen the designs for the new uniforms?',
        'M: Yes. I like the dark blue jacket, but the shirts look uncomfortable.',
        'W: Several people said the same. The supplier can use a softer cotton for two dollars more per shirt.',
        'M: I think that is worth it. Staff wear them all day.',
        'W: I will tell the supplier to change the fabric.',
      ],
      qs: [
        ['What are the speakers discussing?', 'New uniforms', 'A new supplier', 'A dress code for visitors', 'A sale on shirts', 'Lời thoại.'],
        ['What is the man\'s concern?', 'The shirts look uncomfortable.', 'The jacket is the wrong color.', 'The price is too high.', 'The delivery is late.', 'Lời thoại.'],
        ['What will the woman do?', 'Ask the supplier to change the fabric', 'Cancel the order', 'Choose a new jacket', 'Survey the staff', 'Câu cuối.'],
      ],
    },
    {
      title: 'A double-booked hotel room',
      lines: [
        'M: Good evening. I have a reservation under the name Becker.',
        'W: Welcome, Mr. Becker. I am afraid there is a problem. The room we had for you has been given to another guest by mistake.',
        'M: I confirmed the booking yesterday.',
        'W: I am very sorry. We have a larger room with a balcony. You may have it at the same price, and breakfast will be free.',
        'M: All right. Thank you.',
      ],
      qs: [
        ['What is the problem?', 'The man\'s room was given to someone else.', 'The hotel is closed.', 'The man has no booking.', 'The room is not clean.', 'Lời thoại.'],
        ['What does the woman offer?', 'A larger room at the same price', 'A room at another hotel', 'A refund', 'A late checkout', 'Lời thoại.'],
        ['What else will the man receive?', 'Free breakfast', 'A free dinner', 'A taxi', 'A gift', 'Lời thoại.'],
      ],
    },
    {
      title: 'A conversation about a trade magazine',
      lines: [
        'W: A journalist from Retail Weekly wants to interview you about our new store design.',
        'M: That is good publicity. When?',
        'W: She suggested Tuesday at three. It would take about half an hour.',
        'M: I have a meeting until three thirty. Could she come at four?',
        'W: I will ask. She would also like to take a few photographs in the store.',
      ],
      qs: [
        ['What does the journalist want to discuss?', 'A new store design', 'Sales figures', 'A new product', 'Staff training', 'Lời thoại.'],
        ['Why can the man not meet at three?', 'He has a meeting.', 'He is traveling.', 'The store is closed.', 'He is on vacation.', 'Lời thoại.'],
        ['What else does the journalist want to do?', 'Take photographs', 'Interview customers', 'See the accounts', 'Visit another store', 'Câu cuối.'],
      ],
    },
    {
      title: 'A problem with a credit card machine',
      lines: [
        'M: The card machine at the second register is not accepting payments.',
        'W: Has it lost its connection?',
        'M: I think so. The screen says "no network."',
        'W: Switch it off and on again. If that does not work, use the machine from the customer service desk.',
        'M: OK. There are five people waiting.',
        'W: I will open another register to help.',
      ],
      qs: [
        ['What is wrong with the card machine?', 'It has no network connection.', 'It has no paper.', 'It is too slow.', 'It was stolen.', 'Lời thoại.'],
        ['What does the woman suggest first?', 'Restarting the machine', 'Calling a technician', 'Accepting only cash', 'Closing the register', 'Lời thoại.'],
        ['What will the woman do?', 'Open another register', 'Serve the customers herself at the desk', 'Go home', 'Call the bank', 'Câu cuối.'],
      ],
    },
    {
      title: 'Planning a move abroad',
      lines: [
        'W: I hear you have accepted the position in our Sydney office. Congratulations.',
        'M: Thank you. I leave in six weeks. There is a lot to organize.',
        'W: Has the company found you somewhere to live?',
        'M: They are paying for a hotel for the first month, and an agent will help me find an apartment.',
        'W: That is helpful. Let me know if you need a contact there. My cousin lives in Sydney.',
      ],
      qs: [
        ['Where is the man moving?', 'To Sydney', 'To London', 'To Singapore', 'To Toronto', 'Lời thoại.'],
        ['What will the company pay for?', 'A hotel for the first month', 'An apartment for a year', 'His furniture', 'A car', 'Lời thoại.'],
        ['What does the woman offer?', 'A personal contact', 'A place to stay', 'A job', 'A plane ticket', 'Câu cuối.'],
      ],
    },
    {
      title: 'A complaint about a noisy office',
      lines: [
        'M: The building work next door is so loud that I cannot make phone calls.',
        'W: I know. It will continue for another two weeks.',
        'M: Is there anywhere quieter I could work?',
        'W: The small meeting room at the back is free most mornings. I can book it for you.',
        'M: That would be a great help. From nine to twelve, if possible.',
      ],
      qs: [
        ['What is the man\'s problem?', 'Noise from building work', 'A broken telephone', 'A crowded office', 'A slow computer', 'Lời thoại.'],
        ['How long will the problem continue?', 'Two more weeks', 'Two more days', 'One month', 'Until tomorrow', 'Lời thoại.'],
        ['What does the woman offer to do?', 'Book a meeting room', 'Stop the building work', 'Buy headphones', 'Let him work from home', 'Lời thoại.'],
      ],
    },
    {
      title: 'A customer wants a discount',
      lines: [
        'W: I would like to buy twenty of these office chairs. Is there a discount for large orders?',
        'M: For twenty or more, we offer ten percent off.',
        'W: Another store offered me fifteen percent.',
        'M: I can match that if you also order from us regularly. Do you need desks as well?',
        'W: Possibly. Send me a quote for twenty chairs and ten desks.',
      ],
      qs: [
        ['What does the woman want to buy?', 'Office chairs', 'Computers', 'Filing cabinets', 'Lamps', 'Lời thoại.'],
        ['What discount does the store normally offer for twenty or more?', 'Ten percent', 'Fifteen percent', 'Twenty percent', 'Five percent', 'Lời thoại.'],
        ['What does the woman ask for?', 'A quote for chairs and desks', 'Free delivery', 'A sample chair', 'A catalog', 'Câu cuối.'],
      ],
    },
    {
      title: 'A late report from a branch',
      lines: [
        'M: Has the monthly report from the Leeds branch arrived?',
        'W: No. Their manager has been off sick all week.',
        'M: Head office wants all the reports by tomorrow noon.',
        'W: I could ask the assistant manager to send the sales figures, and we could fill in the rest ourselves.',
        'M: Please do. I will let head office know that Leeds may be a little late.',
      ],
      qs: [
        ['What has not arrived?', 'A monthly report', 'A delivery', 'A payment', 'A new manager', 'Lời thoại.'],
        ['Why is it late?', 'The manager is ill.', 'The computers failed.', 'The branch is closed.', 'The figures are wrong.', 'Lời thoại.'],
        ['What will the man do?', 'Inform head office', 'Go to Leeds', 'Write the report alone', 'Call the manager at home', 'Câu cuối.'],
      ],
    },
    {
      title: 'Choosing a hotel for a business trip',
      lines: [
        'W: I need a hotel in Hamburg for two nights. It should be within walking distance of the trade fair.',
        'M: Here are four options. What is your limit per night?',
        'W: One hundred and fifty euros.',
        'M: And do you need breakfast included?',
        'W: Yes, I have early meetings.',
        'M: Then there is one that matches everything.',
      ],
      graphic: ['Hotels in Hamburg', 'Hotel | Distance to fair | Breakfast | Price\nAlster | 300 m | Included | €180\nHafen | 500 m | Included | €140\nMessehof | 200 m | Not included | €120\nNordstern | 4 km | Included | €95'],
      qs: [
        ['Why is the woman going to Hamburg?', 'For a trade fair', 'For a vacation', 'For a wedding', 'For a job interview', 'Lời thoại.'],
        ['What is her limit per night?', '€150', '€180', '€120', '€95', 'Lời thoại.'],
        ['Look at the graphic. Which hotel will she choose?', 'Hafen', 'Alster', 'Messehof', 'Nordstern', 'Đi bộ được, có bữa sáng, ≤ €150: Hafen.'],
      ],
    },
  ],
  p4: [
    {
      title: 'Announcement on a ferry',
      lines: [
        'W: Good afternoon, passengers. Because of strong winds, our arrival in Port Clare will be about thirty minutes later than scheduled.',
        'W: For your safety, the outside decks are now closed. The restaurant and the shop will remain open.',
        'W: Passengers with connecting buses should speak to a crew member at the information desk.',
      ],
      qs: [
        ['Why will the ferry arrive late?', 'Because of strong winds', 'Because of an engine fault', 'Because of fog', 'Because of a late departure', 'Thông báo.'],
        ['What has been closed?', 'The outside decks', 'The restaurant', 'The shop', 'The information desk', 'Thông báo.'],
        ['Who should go to the information desk?', 'Passengers with connecting buses', 'Passengers with cars', 'Passengers who feel ill', 'All passengers', 'Câu cuối.'],
      ],
    },
    {
      title: 'Voicemail from a recruiter',
      lines: [
        'M: Hello, Ms. Petrova. This is Adam Clarke from Horizon Recruitment.',
        'M: The company you interviewed with last week would like to see you again for a second interview, this time with the managing director.',
        'M: They have suggested next Wednesday at ten. Please bring examples of your previous design work. Call me back to confirm.',
      ],
      qs: [
        ['Why is the speaker calling?', 'To arrange a second interview', 'To offer a job', 'To cancel an interview', 'To ask for a reference', 'Lời nhắn.'],
        ['Who will the listener meet?', 'The managing director', 'The recruiter', 'A designer', 'A customer', 'Lời nhắn.'],
        ['What should the listener bring?', 'Examples of her work', 'Her passport', 'A list of references', 'A laptop', 'Lời nhắn.'],
      ],
    },
    {
      title: 'Advertisement for a hotel restaurant',
      lines: [
        'W: Looking for somewhere special for a business lunch? Try the Terrace Restaurant at the Park Hotel.',
        'W: Our two-course lunch menu costs just twenty-two dollars and is served in under forty-five minutes, so you will be back at your desk on time.',
        'W: Private rooms are available for groups of eight or more. Reserve your table online today.',
      ],
      qs: [
        ['Who is the advertisement aimed at?', 'Business people', 'Families', 'Tourists', 'Students', 'Quảng cáo.'],
        ['What is promised about the lunch menu?', 'It is served quickly.', 'It is free for groups.', 'It changes daily.', 'It includes wine.', 'Quảng cáo.'],
        ['What is available for groups of eight or more?', 'Private rooms', 'A discount', 'Free parking', 'A special menu', 'Quảng cáo.'],
      ],
    },
    {
      title: 'Talk to visitors at a recycling plant',
      lines: [
        'M: Welcome to the Northfield Recycling Center. Every day, we sort two hundred tons of paper, plastic, glass, and metal.',
        'M: On today\'s tour, you will see how machines separate the different materials using magnets, air, and cameras.',
        'M: Please stay behind the yellow line at all times, and keep your ear protection on in the sorting hall. The tour will end in the education room, where you can ask questions.',
      ],
      qs: [
        ['What is sorted at the center?', 'Recyclable materials', 'Mail', 'Food', 'Clothing', 'Lời nói.'],
        ['What must visitors wear in the sorting hall?', 'Ear protection', 'Gloves', 'Masks', 'Boots', 'Lời nói.'],
        ['Where will the tour end?', 'In the education room', 'In the sorting hall', 'At the entrance', 'In the car park', 'Câu cuối.'],
      ],
    },
    {
      title: 'Recorded message for an insurance company',
      lines: [
        'W: Thank you for calling Shield Insurance.',
        'W: To report a car accident or make a new claim, press one. To ask about an existing claim, press two and have your claim number ready.',
        'W: Our offices are open from eight to six, Monday to Saturday. Outside these hours, claims can be made on our website.',
      ],
      qs: [
        ['Why would a caller press one?', 'To make a new claim', 'To ask about an existing claim', 'To buy insurance', 'To change an address', 'Thông báo.'],
        ['What should callers who press two have ready?', 'Their claim number', 'Their passport', 'Their car keys', 'A credit card', 'Thông báo.'],
        ['How can claims be made outside office hours?', 'On the website', 'By fax', 'By visiting an office', 'They cannot be made', 'Câu cuối.'],
      ],
    },
    {
      title: 'Excerpt from a meeting about customer service',
      lines: [
        'M: Our survey shows that customers wait an average of nine minutes to speak to an agent. Our target is three.',
        'M: From next month, we will add a call-back option. Customers can leave their number, and the system will call them when an agent is free.',
        'M: We are also hiring six part-time agents for the busiest hours, between twelve and two. Training begins on the fifth.',
      ],
      qs: [
        ['What is the current average waiting time?', 'Nine minutes', 'Three minutes', 'Six minutes', 'Twelve minutes', 'Lời nói.'],
        ['What new option will be added?', 'A call-back service', 'An online chat', 'A new phone number', 'A weekend service', 'Lời nói.'],
        ['When are the busiest hours?', 'Between twelve and two', 'Between nine and eleven', 'After five', 'Before eight', 'Lời nói.'],
      ],
    },
    {
      title: 'News report on a new factory',
      lines: [
        'W: The electric car maker Voltis has confirmed that it will build a battery factory on the site of the old steelworks.',
        'W: Construction will start in the spring and take two years. When it opens, the factory will employ twelve hundred people.',
        'W: The regional government is contributing fifty million dollars and will also improve the road to the motorway.',
      ],
      qs: [
        ['What will be built?', 'A battery factory', 'A steelworks', 'A motorway', 'A car showroom', 'Bản tin.'],
        ['How long will construction take?', 'Two years', 'One spring', 'Twelve months', 'Five years', 'Bản tin.'],
        ['What will the regional government do?', 'Contribute money and improve a road', 'Buy the cars', 'Run the factory', 'Close the steelworks', 'Bản tin.'],
      ],
    },
    {
      title: 'Message about an office seating plan',
      lines: [
        'M: Hi, everyone. This is Tariq with news about the seating plan for the new office.',
        'M: Most teams keep the area they were given. The exception is the team that makes the most phone calls, which will move to the area furthest from the quiet zone.',
        'M: The plan is attached to my email. Let me know by Friday if you see any problems.',
      ],
      graphic: ['Office areas', 'Area | Distance from quiet zone | Original team\nA | Next to it | Sales\nB | 10 meters | Design\nC | 20 meters | Finance\nD | 40 meters | IT'],
      qs: [
        ['What is the message about?', 'A seating plan', 'A new phone system', 'A team lunch', 'A move to another city', 'Lời nhắn.'],
        ['Look at the graphic. Where will the team that makes the most phone calls sit?', 'Area D', 'Area A', 'Area B', 'Area C', 'Khu xa khu yên tĩnh nhất: D (40 mét).'],
        ['What should listeners do by Friday?', 'Report any problems', 'Pack their desks', 'Choose a seat', 'Sign the plan', 'Câu cuối.'],
      ],
    },
  ],
};
