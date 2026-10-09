/** Bộ đề TOEIC Listening & Reading cố định – đề 9 và 10 (định dạng rút gọn, xem helpers.ts) */
import { ToeicTest, toeicTest } from './helpers';

export const TESTS: ToeicTest[] = [
  // =========================================================================== ĐỀ 9
  toeicTest(9, {
    p2: [
      ['Where will the new employee sit?', 'At the desk by the window.', 'She starts on Monday.', 'In about an hour.', 'Where → vị trí.'],
      ['Who designed the company logo?', 'An agency in New York.', 'It is blue and white.', 'Three years ago.', 'Who → người/đơn vị thiết kế.'],
      ['How soon can you finish the translation?', 'By tomorrow afternoon.', 'From English to Korean.', 'It is quite soon.', 'How soon → mốc thời gian hoàn thành.'],
      ['Did anyone call while I was out?', 'Yes, Mr. Evans left a message.', 'No, I am staying in.', 'I called it off.', 'Câu hỏi Yes/No quá khứ.'],
      ['What do you think of the new office layout?', 'It feels much more open.', 'I think so.', 'On the layout plan.', 'Hỏi ý kiến → nêu nhận xét.'],
      ['May I borrow your calculator for a moment?', 'Sure, here you go.', 'I calculated it twice.', 'It will only take a moment.', 'Xin phép mượn → đồng ý.'],
      ['Is the meeting in Room A or Room B?', "Neither. It's been moved upstairs.", 'Yes, it is.', 'A and B are letters.', 'Câu hỏi lựa chọn → "Neither" + thông tin mới.'],
      ['The quarterly sales report is due on Friday.', "I've almost finished my part.", 'Yes, I do.', 'It was sold on Friday.', 'Câu nhắc hạn → báo tiến độ.'],
    ],
    p3: [
      {
        title: 'Signing up for a gym',
        lines: [
          "M: Hi, I'd like to know about your membership plans.",
          'W: Sure. Our basic plan is forty dollars a month and includes the gym and the pool. The premium plan is sixty dollars and adds all fitness classes.',
          'M: I only want to swim and use the weights, so the basic plan is fine. Is there a joining fee?',
          "W: Usually there is, but we're waiving it this week.",
          'M: Great. Can I start today?',
          'W: Absolutely. I just need you to fill out this form and show me a photo ID.',
        ],
        qs: [
          ['Which plan does the man choose?', 'The basic plan', 'The premium plan', 'A family plan', 'A one-day pass', '"the basic plan is fine".'],
          ['What does the woman say about the joining fee?', 'It is not being charged this week.', 'It has been raised.', 'It must be paid in cash.', 'It includes a towel.', '"we\'re waiving it this week" = miễn phí tuần này.'],
          ['What does the man need to show?', 'A photo ID', 'A credit card', 'A doctor\'s note', 'A student card', '"show me a photo ID".'],
        ],
      },
      {
        title: 'A late delivery of materials',
        lines: [
          'W: Hi, Carlos. Has the lumber for the Jackson Street project arrived?',
          "M: Not yet. The supplier says their truck broke down, and it won't get here until tomorrow afternoon.",
          'W: That means the carpenters will have nothing to do in the morning.',
          'M: I thought of that. I asked them to work at the Baker Avenue site tomorrow morning instead. They can finish the window frames there.',
          "W: Good thinking. I'll call the client on Jackson Street and explain the delay.",
        ],
        qs: [
          ['What has been delayed?', 'A delivery of lumber', 'A payment', 'A building permit', 'A client meeting', 'Gỗ cho công trình chưa đến.'],
          ['What will the carpenters do tomorrow morning?', 'Work at another site', 'Take the morning off', 'Repair the truck', 'Wait for the delivery', '"work at the Baker Avenue site tomorrow morning instead".'],
          ['What will the woman do?', 'Contact a client', 'Order more lumber', 'Visit the supplier', 'Hire more carpenters', '"I\'ll call the client on Jackson Street".'],
        ],
      },
    ],
    p4: [
      {
        title: 'Radio advertisement for a furniture store',
        lines: [
          'M: This weekend only, Comfort Home Furniture is holding its biggest sale of the year.',
          'M: Every sofa, bed, and dining table in the store is marked down by up to fifty percent. And if you spend more than five hundred dollars, we will deliver your purchase free of charge anywhere in the city.',
          'M: Our doors open at eight a.m. on Saturday, and the first one hundred customers will receive a free table lamp. Comfort Home Furniture, on Route Seven next to the Riverside Mall.',
        ],
        qs: [
          ['What is being advertised?', 'A furniture sale', 'A new shopping mall', 'A delivery service', 'A lighting store', '"its biggest sale of the year".'],
          ['How can customers get free delivery?', 'By spending over five hundred dollars', 'By arriving early', 'By paying in cash', 'By buying a sofa', '"if you spend more than five hundred dollars".'],
          ['What will the first one hundred customers receive?', 'A lamp', 'A discount coupon', 'A dining table', 'A gift card', '"will receive a free table lamp".'],
        ],
      },
      {
        title: 'Instructions before a workshop',
        lines: [
          'W: Good morning, and welcome to the time management workshop. Before we begin, a few practical points.',
          'W: We will take a fifteen-minute break at ten thirty, and lunch will be served in the dining room at noon. This afternoon you will work in small groups, so please check the list by the door to find your group number.',
          'W: Finally, I would appreciate it if you could fill in the feedback form in your folder before you leave. Your comments help us improve future sessions.',
        ],
        qs: [
          ['What is the topic of the workshop?', 'Time management', 'Public speaking', 'Computer skills', 'Customer service', '"the time management workshop".'],
          ['Why should listeners check the list by the door?', 'To find their group number', 'To choose their lunch', 'To sign their names', 'To see the schedule', '"check the list by the door to find your group number".'],
          ['What are listeners asked to do before leaving?', 'Complete a feedback form', 'Return their folders', 'Pay a fee', 'Register for the next session', '"fill in the feedback form".'],
        ],
      },
    ],
    p5: [
      ['The hotel is within walking ____ of the convention center.', 'distance', 'distant', 'distantly', 'distances', '"within walking distance of".'],
      ['Mr. Hughes asked his assistant to make the travel ____.', 'arrangements', 'arrange', 'arranged', 'arranging', '"make arrangements": sắp xếp.'],
      ['The seminar is free; ____, seating is limited.', 'however', 'therefore', 'moreover', 'otherwise', 'Ý tương phản → "however".'],
      ['Ms. Novak will ____ the Tokyo office next month.', 'transfer to', 'transferring to', 'transferred to', 'transfers to', 'Sau "will" là V nguyên mẫu.'],
      ['The report was written ____ by the research team.', 'entirely', 'entire', 'entirety', 'entireness', 'Trạng từ bổ nghĩa cho "was written".'],
      ['Visitors must be accompanied by a staff member ____ they are in the laboratory.', 'while', 'during', 'despite', 'among', '"while + mệnh đề".'],
      ['The company has a strong ____ for quality.', 'reputation', 'repute', 'reputable', 'reputedly', 'Sau "a strong" cần danh từ.'],
      ['The new line of products is expected to be very ____.', 'profitable', 'profit', 'profitably', 'profits', 'Sau "be very" cần tính từ.'],
      ['Please ____ that your seat belt is fastened.', 'ensure', 'assure', 'insure', 'sure', '"ensure that": đảm bảo rằng.'],
      ['The package should arrive ____ three to five business days.', 'in', 'on', 'at', 'to', '"in three to five days": trong ... ngày.'],
      ['Neither of the printers ____ working this morning.', 'was', 'were', 'are', 'have been', '"Neither of + danh từ số nhiều" + động từ số ít.'],
      ['The manager, along with two assistants, ____ attending the conference.', 'is', 'are', 'were', 'have been', 'Chủ ngữ chính "The manager" số ít; "along with..." không ảnh hưởng.'],
    ],
    p6: [
      {
        title: 'Email: Meeting follow-up',
        text: 'Dear team,\n\nThank you for attending yesterday\'s planning meeting. As (1)____, here is a summary of what we decided.\n\nThe new product will be launched on October 1. Kate will prepare the press release, and Imran will contact our retail partners. (2)____.\n\nOur next meeting is on September 10. Please send me any (3)____ you would like to add to the agenda by September 8.\n\nRegards,\nDiane',
        qs: [
          ['(1) ____', 'promised', 'promise', 'promising', 'promises', '"As promised": như đã hứa.'],
          ['(2) ____', 'Everyone else will help test the product before the launch.', 'The meeting room was too cold yesterday.', 'Our retail partners are located abroad.', 'Kate joined the team last year.', 'Tiếp nối việc phân công: những người còn lại làm gì.'],
          ['(3) ____', 'topics', 'receipts', 'tools', 'fees', '"topics to add to the agenda".'],
        ],
      },
      {
        title: 'Instructions: Office printer',
        text: 'HOW TO REPLACE THE TONER CARTRIDGE\n\n1. Turn off the printer and wait five minutes for it to (1)____ down.\n2. Open the front cover and pull out the old cartridge.\n3. Remove the new cartridge from its box and shake it (2)____ from side to side.\n4. Slide the new cartridge into place until you hear a click.\n5. Close the cover and turn the printer on.\n\nPlease place the used cartridge in the recycling box (3)____ the supply room.',
        qs: [
          ['(1) ____', 'cool', 'cold', 'coolly', 'coolness', '"cool down" (động từ): nguội đi.'],
          ['(2) ____', 'gently', 'gentle', 'gentleness', 'gentler', 'Trạng từ bổ nghĩa cho "shake".'],
          ['(3) ____', 'in', 'of', 'onto', 'among', '"in the supply room".'],
        ],
      },
    ],
    p7: [
      {
        title: 'Notice: Lost and found',
        text: 'LOST AND FOUND – Westgate Shopping Center\n\nItems found in the shopping center are kept at the information desk on Level 1 for thirty days. After that, unclaimed items are donated to charity.\n\nTo claim an item, you must describe it and show identification. Wallets, phones, and other valuables are handed over to the security office and can be collected there between 9 a.m. and 6 p.m.\n\nTo report a lost item, call 555-0170.',
        qs: [
          ['How long are found items kept?', 'Thirty days', 'One week', 'Six months', 'One year', '"for thirty days".'],
          ['What happens to items that nobody claims?', 'They are given to charity.', 'They are sold.', 'They are thrown away.', 'They are sent to the police.', '"unclaimed items are donated to charity".'],
          ['Where can a lost phone be collected?', 'At the security office', 'At the information desk', 'At any store', 'At the parking office', 'Đồ có giá trị giao cho văn phòng an ninh.'],
        ],
      },
      {
        title: 'Email: Change of supplier',
        text: 'To: Kitchen staff\nFrom: Andre Dubois, Head Chef\nSubject: New vegetable supplier\n\nStarting next Monday, our vegetables will come from Green Valley Farms instead of City Wholesale. Green Valley is a local farm, so the produce will be fresher, and the prices are about the same.\n\nPlease note that deliveries will now arrive at 6:30 a.m. rather than 8:00 a.m. Whoever opens the kitchen must be here by 6:15 to receive the order and check it against the list.\n\nIf anything is missing, call Rosa at Green Valley right away. Her number is on the board.',
        qs: [
          ['Why is the restaurant changing suppliers?', 'To get fresher produce', 'To save a lot of money', 'Because the old supplier closed', 'To receive later deliveries', '"the produce will be fresher".'],
          ['What will change about deliveries?', 'They will come earlier.', 'They will come twice a day.', 'They will be sent by mail.', 'They will cost more.', '6:30 thay vì 8:00.'],
          ['What should staff do if something is missing?', 'Phone the farm', 'Email the head chef', 'Go to the market', 'Cancel the order', '"call Rosa at Green Valley right away".'],
        ],
      },
      {
        title: 'Itinerary and email',
        text: 'TRAVEL ITINERARY – Ms. Laura Bennett\nMon., May 6: Depart Boston 7:15 a.m. – Arrive Dallas 10:30 a.m.\nMon., May 6: Meeting with Hartley Corp., 2:00 p.m.\nTue., May 7: Factory visit, 9:00 a.m. – 12:00 noon\nTue., May 7: Depart Dallas 3:40 p.m. – Arrive Boston 8:05 p.m.\nHotel: Lone Star Suites (1 night)\n\n--------------------\nTo: Laura Bennett\nFrom: Joel Pratt, Hartley Corp.\n\nDear Laura,\n\nI am afraid our director cannot meet on Monday afternoon. Could we hold the meeting on Tuesday at 1:00 p.m., right after your factory visit? It should take about two hours. I am sorry for the short notice.',
        qs: [
          ['How long is Ms. Bennett scheduled to stay in Dallas?', 'One night', 'Two nights', 'Three nights', 'One week', 'Khách sạn: 1 đêm.'],
          ['What does Mr. Pratt ask to do?', 'Reschedule a meeting', 'Cancel a factory visit', 'Change hotels', 'Meet in Boston', 'Xin dời cuộc họp sang thứ Ba.'],
          ['What will Ms. Bennett most likely need to change?', 'Her return flight', 'Her hotel reservation', 'Her factory visit', 'Her departure from Boston', 'Họp 1:00–3:00 chiều thứ Ba, trong khi chuyến bay về lúc 3:40 → phải đổi chuyến về.'],
        ],
      },
    ],
  }),

  // =========================================================================== ĐỀ 10
  toeicTest(10, {
    p2: [
      ['When did the package arrive?', 'About an hour ago.', 'At the front desk.', 'From the supplier.', 'When → thời điểm.'],
      ['Who is going to pick up the clients at the airport?', "I'm sending a driver.", 'They are flying in.', 'At gate nine.', 'Who → người đi đón.'],
      ['Why are all the lights off in the showroom?', "We're saving energy until customers arrive.", 'On the left wall.', 'It is very light.', 'Why → lý do.'],
      ['How many people have registered for the workshop?', 'Twenty-five so far.', 'In the main hall.', 'It starts at nine.', 'How many → số lượng.'],
      ['Would you like to join us for dinner tonight?', "I'd love to, but I have to work late.", 'It was delicious.', 'At seven thirty.', 'Lời mời → từ chối lịch sự kèm lý do.'],
      ['Where should we hold the year-end party?', 'How about the rooftop restaurant?', 'In December.', 'Fifty guests.', 'Where → gợi ý địa điểm.'],
      ['Can you show me how to use the scanner?', "Of course. It's quite simple.", 'I saw the show.', 'It is used.', 'Lời nhờ hướng dẫn → đồng ý.'],
      ['Our website traffic doubled last month.', "That's great news.", 'The traffic was terrible.', 'Two months ago.', 'Tin tốt → phản hồi tích cực.'],
    ],
    p3: [
      {
        title: 'Checking in for a flight',
        lines: [
          'W: Good morning. May I see your passport and ticket, please?',
          'M: Here you are. I would like an aisle seat if one is available.',
          "W: Let me see. I'm sorry, the flight is nearly full. I only have middle seats left, but there is an aisle seat in the exit row for an extra thirty dollars.",
          "M: I'll take the exit row. I have long legs. Is the flight on time?",
          'W: Yes, boarding begins at ten twenty at gate fourteen. Are you checking any bags?',
          'M: Just this one suitcase.',
        ],
        qs: [
          ['Where is the conversation taking place?', 'At an airport', 'At a train station', 'At a hotel', 'At a travel agency', 'Làm thủ tục lên máy bay.'],
          ['Why does the man pay extra?', 'To get a seat in the exit row', 'To check a second bag', 'To board first', 'To change his flight', '"an aisle seat in the exit row for an extra thirty dollars".'],
          ['What does the woman ask about?', 'Whether he has luggage to check', 'Whether he has a visa', 'Where he is going', 'How he will pay', '"Are you checking any bags?"'],
        ],
      },
      {
        title: 'Planning a newsletter',
        lines: [
          'M: Emily, we need one more article for the company newsletter. Any ideas?',
          'W: How about an interview with the new head of research? She just joined us from a university.',
          "M: That's a great idea. Could you do the interview this week?",
          "W: I can talk to her on Wednesday. But I'm not good at taking photos.",
          "M: Don't worry. I'll ask James from the design team to take some pictures.",
          "W: Perfect. I'll send you a draft by Friday.",
        ],
        qs: [
          ['What does the woman suggest?', 'Interviewing a new manager', 'Canceling the newsletter', 'Hiring a photographer', 'Visiting a university', '"an interview with the new head of research".'],
          ['What does the woman say she cannot do well?', 'Take photographs', 'Write articles', 'Conduct interviews', 'Design pages', '"I\'m not good at taking photos".'],
          ['When will the woman send a draft?', 'By Friday', 'On Wednesday', 'Today', 'Next week', '"I\'ll send you a draft by Friday".'],
        ],
      },
    ],
    p4: [
      {
        title: 'Announcement in a supermarket',
        lines: [
          'W: Attention, shoppers. The time is now eight forty-five, and Fresh Mart will close in fifteen minutes.',
          'W: Please bring your final purchases to the checkout counters. For your convenience, checkout lanes one through four will remain open until all customers have been served.',
          'W: Remember, we will open at seven tomorrow morning with a special on fresh bread: buy one loaf and get one free. Thank you for shopping at Fresh Mart.',
        ],
        qs: [
          ['When will the store close?', 'At nine o\'clock', 'At eight forty-five', 'At seven o\'clock', 'At eight fifteen', '8:45 + 15 phút = 9:00.'],
          ['What are shoppers asked to do?', 'Go to the checkout counters', 'Leave their carts outside', 'Use the self-service machines', 'Exit through the back door', '"bring your final purchases to the checkout counters".'],
          ['What special offer is mentioned?', 'Two loaves of bread for the price of one', 'Half-price vegetables', 'Free coffee', 'A discount for members', '"buy one loaf and get one free".'],
        ],
      },
      {
        title: 'Message for a job applicant',
        lines: [
          'M: Hello, Ms. Okafor. This is Brian Wells from Linden Publishing. Thank you for coming in for an interview last week.',
          'M: We were very impressed, and I am happy to offer you the position of assistant editor. The starting date would be June first.',
          'M: I am sending the contract by email this afternoon. Please read it carefully and return a signed copy by Friday. If you have any questions about the salary or benefits, feel free to call me directly.',
        ],
        qs: [
          ['Why is the speaker calling?', 'To offer a job', 'To schedule an interview', 'To request references', 'To reject an application', '"I am happy to offer you the position".'],
          ['What will the speaker send this afternoon?', 'A contract', 'A book', 'An interview schedule', 'A business card', '"I am sending the contract by email this afternoon".'],
          ['What should the listener do by Friday?', 'Return a signed document', 'Start work', 'Call a reference', 'Visit the office', '"return a signed copy by Friday".'],
        ],
      },
    ],
    p5: [
      ['The updated schedule will be posted ____ the bulletin board.', 'on', 'in', 'at', 'into', '"on the bulletin board".'],
      ['Our technicians respond ____ to all service requests.', 'promptly', 'prompt', 'promptness', 'prompted', 'Trạng từ bổ nghĩa cho "respond".'],
      ['The merger will create one of the ____ banks in the region.', 'largest', 'larger', 'large', 'largely', '"one of the + so sánh nhất + danh từ số nhiều".'],
      ['Ms. Ferrari is in charge of ____ new clients.', 'recruiting', 'recruit', 'recruited', 'recruits', 'Sau giới từ "of" dùng V-ing.'],
      ['The warranty is valid ____ the product is used according to the instructions.', 'as long as', 'as well as', 'in order to', 'so as to', '"as long as": miễn là.'],
      ['Many employees find the new schedule more ____.', 'flexible', 'flexibly', 'flexibility', 'flex', '"find + O + adj".'],
      ['The company\'s headquarters ____ in Geneva.', 'is located', 'locates', 'locating', 'location', 'Bị động: be located in.'],
      ['Please submit your application ____ later than March 15.', 'no', 'not', 'none', 'never', '"no later than": chậm nhất là.'],
      ['The speaker gave a brief ____ of the company\'s history.', 'overview', 'overlook', 'overdue', 'overtime', '"a brief overview": tổng quan ngắn.'],
      ['Customers can track their orders ____ using the mobile app.', 'easily', 'easy', 'ease', 'easier', 'Trạng từ bổ nghĩa cho "track".'],
      ['Mr. Brandt ____ the proposal if he had known about the costs.', 'would have rejected', 'will reject', 'rejects', 'had rejected', 'Câu điều kiện loại 3: would have + V3.'],
      ['There are ____ parking spaces available near the main entrance.', 'few', 'little', 'much', 'less', '"few + danh từ đếm được số nhiều".'],
    ],
    p6: [
      {
        title: 'Letter: Apology to a customer',
        text: 'Dear Mrs. Hoffman,\n\nThank you for your letter of July 8. I was very sorry to learn that the dining table you ordered arrived with a scratch on its surface. This is certainly not the (1)____ of quality we aim to provide.\n\n(2)____. Our delivery team will bring it to your home next Tuesday and take the damaged one away.\n\nAs an apology, I have also enclosed a gift voucher (3)____ $50, which you may use on any future purchase.\n\nYours sincerely,\nMartin Shaw, Customer Relations',
        qs: [
          ['(1) ____', 'standard', 'standardize', 'standardized', 'standardly', 'Sau "the" cần danh từ: "the standard of quality".'],
          ['(2) ____', 'We have arranged for a replacement table to be sent to you.', 'Our tables are made from oak.', 'Your letter arrived on Monday.', 'We have decided to close our delivery department.', 'Câu sau: "bring it to your home" → "it" là bàn thay thế.'],
          ['(3) ____', 'worth', 'cost', 'price', 'value of', '"a voucher worth $50".'],
        ],
      },
      {
        title: 'Announcement: Staff promotion',
        text: 'We are happy to announce that Yuki Tanabe has been (1)____ to Director of Operations, effective April 1.\n\nMs. Tanabe joined the company eight years ago as a logistics analyst. Since then, she has led several major projects, (2)____ the opening of our Osaka warehouse. Her new role will involve overseeing all shipping and supply activities.\n\nPlease join us for a small (3)____ in the main lobby on Friday at 4:00 p.m. to congratulate her.',
        qs: [
          ['(1) ____', 'promoted', 'promoting', 'promotion', 'promote', 'Bị động: has been promoted to.'],
          ['(2) ____', 'including', 'include', 'included in', 'inclusion', '"including + danh từ": bao gồm.'],
          ['(3) ____', 'celebration', 'celebrate', 'celebrated', 'celebrating', 'Sau "a small" cần danh từ.'],
        ],
      },
    ],
    p7: [
      {
        title: 'Receipt',
        text: 'PAGE TURNER BOOKSHOP\n221 College Road\n\nDate: November 14   Time: 3:42 p.m.\n\n1 × Guide to Digital Photography ........ $24.00\n2 × Notebook (spiral) ........................... $7.00\n1 × Gift bag ............................................. $1.50\nSubtotal ................................................. $32.50\nMember discount (10%) ...................... –$3.25\nTotal ........................................................ $29.25\nPaid by: debit card\n\nReturns accepted within 14 days with this receipt. Sale items cannot be returned.',
        qs: [
          ['How much does one notebook cost?', '$3.50', '$7.00', '$1.50', '$24.00', '2 quyển giá $7 → mỗi quyển $3.50.'],
          ['What is indicated about the customer?', 'The customer is a store member.', 'The customer paid in cash.', 'The customer bought sale items.', 'The customer returned a book.', 'Có "Member discount (10%)".'],
          ['What is required to return an item?', 'The receipt', 'A membership card', 'The gift bag', 'A debit card', '"Returns accepted within 14 days with this receipt".'],
        ],
      },
      {
        title: 'Email: Volunteer day',
        text: 'To: All staff\nFrom: Community Relations\nSubject: Volunteer day – April 22\n\nOur annual volunteer day will take place on Saturday, April 22. This year we will be planting trees and cleaning the riverbank at Miller Park together with the City Parks Department.\n\nA bus will leave from the office parking lot at 8:00 a.m. and return by 1:00 p.m. Gloves, tools, and lunch will be provided. Please wear old clothes and sturdy shoes.\n\nFamily members are welcome. To take part, add your name to the list at reception by April 14.',
        qs: [
          ['What will volunteers do?', 'Plant trees and clean up', 'Paint a school', 'Collect donations', 'Serve meals', '"planting trees and cleaning the riverbank".'],
          ['What should volunteers bring or wear?', 'Old clothes and strong shoes', 'Gloves and tools', 'Their own lunch', 'A company uniform', 'Găng tay, dụng cụ, bữa trưa được cung cấp; cần mặc đồ cũ, giày chắc.'],
          ['How can employees sign up?', 'By writing their name on a list', 'By sending an email', 'By calling the Parks Department', 'By paying a fee', '"add your name to the list at reception".'],
        ],
      },
      {
        title: 'Article: Restaurant review',
        text: 'Saffron Garden, which opened on Dock Street in March, is quickly becoming one of the most popular restaurants in town. Chef Anil Kapoor, who previously worked at a five-star hotel in London, offers a short menu of Indian dishes that changes every month.\n\nOn our visit, the lamb curry was outstanding, and the service was friendly, although we waited nearly forty minutes for a table. Prices are reasonable, with main dishes between $14 and $22.\n\nThe restaurant does not take reservations on weekends, so arrive early. It is closed on Mondays.',
        qs: [
          ['What is said about Chef Kapoor?', 'He used to work in London.', 'He owns a hotel.', 'He trained in India for ten years.', 'He writes restaurant reviews.', '"previously worked at a five-star hotel in London".'],
          ['What problem did the reviewer experience?', 'A long wait', 'Unfriendly service', 'High prices', 'Cold food', '"we waited nearly forty minutes for a table".'],
          ['What advice does the reviewer give?', 'Go early on weekends.', 'Order from the monthly menu only.', 'Visit on Mondays.', 'Reserve a table for Saturday.', 'Cuối tuần không nhận đặt bàn nên hãy đến sớm.'],
        ],
      },
    ],
  }),
];
