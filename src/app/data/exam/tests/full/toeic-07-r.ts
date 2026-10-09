/** TOEIC đề 7 – phần Đọc bổ sung để đủ 100 câu (xem ghi chú "ĐỀ ĐẦY ĐỦ" trong helpers.ts) */
import { RawToeicR } from '../helpers';

export const R: RawToeicR = {
  p5: [
    ['The new assistant will ____ Ms. Grant with scheduling.', 'assist', 'assistance', 'assistant', 'assisted', 'Sau "will" là V nguyên mẫu.'],
    ['The quarterly results were ____ than analysts had predicted.', 'better', 'good', 'best', 'well', 'So sánh hơn với "than".'],
    ['Please return the signed contract ____ the end of the week.', 'by', 'until', 'on', 'in', '"by the end of the week".'],
    ['The store manager spoke ____ to the unhappy customer.', 'politely', 'polite', 'politeness', 'more polite', 'Trạng từ bổ nghĩa cho "spoke".'],
    ['Our office is located ____ walking distance of the station.', 'within', 'among', 'between', 'beside', '"within walking distance of".'],
    ['The software allows users to ____ documents easily.', 'share', 'sharing', 'shared', 'shares', '"allow someone to + V".'],
    ['Mr. Ito gave a very ____ presentation on market trends.', 'informative', 'inform', 'information', 'informatively', 'Tính từ trước danh từ.'],
    ['The elevator is temporarily out of ____.', 'service', 'serve', 'serving', 'served', '"out of service".'],
    ['____ the new system is installed, productivity should improve.', 'Once', 'During', 'Despite', 'Whether', '"Once + mệnh đề".'],
    ['The team worked ____ the weekend to finish the proposal.', 'throughout', 'among', 'beside', 'onto', '"throughout the weekend".'],
    ['All travel expenses must be approved in ____.', 'advance', 'advanced', 'advancing', 'advancement', '"in advance".'],
    ['The company is ____ expanding into new markets.', 'rapidly', 'rapid', 'rapidity', 'rapids', 'Trạng từ giữa "is" và V-ing.'],
    ['Ms. Kaur is ____ to be promoted next year.', 'likely', 'like', 'alike', 'liking', '"be likely to + V".'],
    ['The manual explains ____ to install the printer.', 'how', 'what', 'which', 'who', '"how to + V".'],
    ['We regret ____ you that the event has been canceled.', 'to inform', 'information', 'inform', 'informed', '"regret to inform": lấy làm tiếc thông báo.'],
    ['The price of the tickets ____ depending on the season.', 'varies', 'vary', 'various', 'variety', 'Chủ ngữ "The price" số ít.'],
    ['The director insisted that the meeting ____ on time.', 'start', 'starts', 'started', 'starting', 'Thể giả định sau "insist that".'],
    ['Only after the audit was completed ____ the error discovered.', 'was', 'had', 'did', 'were', 'Đảo ngữ sau "Only after": was + S + V3.'],
  ],
  p6: [
    {
      title: 'Email: Customer loyalty program',
      text: 'Dear Ms. Hoang,\n\nThank you for being a loyal customer of Garden World. We are pleased to tell you that you have (1)____ enough points for a $25 gift voucher.\n\n(2)____. Simply enter the code GW25 when you check out.\n\nPlease note that the voucher is valid (3)____ December 31 and cannot be exchanged for cash. We hope to see you again soon, and we thank you for your (4)____ support.\n\nBest wishes,\nGarden World',
      qs: [
        ['(1) ____', 'earned', 'earning', 'earn', 'earns', 'Hiện tại hoàn thành.'],
        ['(2) ____', 'You can use it in any of our stores or online.', 'Our stores sell plants and tools.', 'Winter is a quiet season.', 'Points are counted by computer.', 'Câu sau hướng dẫn nhập mã khi thanh toán.'],
        ['(3) ____', 'until', 'since', 'during', 'while', '"valid until".'],
        ['(4) ____', 'continued', 'continue', 'continues', 'continuity', 'Phân từ làm tính từ: "your continued support".'],
      ],
    },
    {
      title: 'Notice: Building security',
      text: 'NOTICE TO ALL TENANTS\n\nFollowing several thefts in the area, building management is (1)____ security.\n\nFrom Monday, the front door will be locked at 7:00 p.m. instead of 9:00 p.m. After that time, you will need your access card to enter. (2)____. A replacement costs $10.\n\nPlease do not hold the door open for people you do not (3)____. If you see anything suspicious, call the security desk (4)____ at extension 100.',
      qs: [
        ['(1) ____', 'increasing', 'increased', 'increase', 'increasingly', 'Hiện tại tiếp diễn.'],
        ['(2) ____', 'If you have lost your card, please contact the management office.', 'The building has two entrances.', 'Thefts are rare in winter.', 'The lobby was painted last year.', 'Câu sau nói giá thẻ thay thế.'],
        ['(3) ____', 'recognize', 'recognizing', 'recognized', 'recognition', 'Sau "do not" là V nguyên mẫu.'],
        ['(4) ____', 'immediately', 'immediate', 'immediacy', 'more immediate', 'Trạng từ bổ nghĩa cho "call".'],
      ],
    },
    {
      title: 'Advertisement: Catering service',
      text: 'Planning an event? Let Silver Spoon Catering take care of the food!\n\nFor over twenty years, we have (1)____ meals for weddings, conferences, and private parties. Our chefs use fresh, local ingredients and can prepare menus to (2)____ every taste and budget.\n\n(3)____. That way, you can be sure you have made the right choice.\n\nCall 555-0143 to (4)____ your free tasting today.',
      qs: [
        ['(1) ____', 'provided', 'providing', 'provide', 'provides', 'Hiện tại hoàn thành.'],
        ['(2) ____', 'suit', 'fit in', 'match up', 'agree', '"suit every taste and budget".'],
        ['(3) ____', 'We invite all new clients to taste our dishes before they book.', 'Weddings are usually held in summer.', 'Our kitchen is very large.', 'Budgets can be difficult.', '"That way, you can be sure".'],
        ['(4) ____', 'arrange', 'arranging', 'arranged', 'arrangement', '"to + V".'],
      ],
    },
    {
      title: 'Letter: Insurance renewal',
      text: 'Dear Mr. Novak,\n\nYour car insurance policy will expire on April 30. To make sure that you remain (1)____, please renew before that date.\n\nYour premium for the coming year will be $640. (2)____. This reflects your five years without a claim.\n\nYou can renew online, by telephone, or by (3)____ the enclosed form. If your details have changed, for example if you have moved or bought a different car, please let us know (4)____ we can update your policy.\n\nYours sincerely,\nNorthern Insurance',
      qs: [
        ['(1) ____', 'covered', 'covering', 'cover', 'coverage', '"remain covered": vẫn được bảo hiểm.'],
        ['(2) ____', 'That is $40 less than last year.', 'Cars must be insured by law.', 'April has thirty days.', 'Our office is in the north.', '"This reflects your five years without a claim".'],
        ['(3) ____', 'returning', 'return', 'returned', 'returns', 'Sau giới từ "by" dùng V-ing.'],
        ['(4) ____', 'so that', 'in case of', 'even though', 'as if', '"so that + mệnh đề".'],
      ],
    },
  ],
  p7: [
    {
      title: 'Sign: Parking',
      text: 'CUSTOMER PARKING ONLY\n\nMaximum stay: 90 minutes. No overnight parking.\nVehicles parked longer will receive a $40 fine.\nThis car park is monitored by cameras.',
      qs: [
        ['How long may customers park?', 'Up to 90 minutes', 'Up to 40 minutes', 'All day', 'Overnight', '"Maximum stay: 90 minutes".'],
        ['What happens to drivers who stay too long?', 'They are fined.', 'Their cars are removed.', 'They are banned.', 'They get a warning.', '"will receive a $40 fine".'],
      ],
    },
    {
      title: 'Notice: Lost item',
      text: 'FOUND\n\nA black leather wallet was found in the third-floor meeting room on Tuesday afternoon. It contains cash and several cards.\n\nTo claim it, please come to the reception desk and describe the contents.',
      qs: [
        ['Where was the wallet found?', 'In a meeting room', 'At the reception desk', 'In the parking lot', 'In the cafeteria', 'Thông báo.'],
        ['What must the owner do?', 'Describe what is inside', 'Pay a fee', 'Show a receipt', 'Send an email', '"describe the contents".'],
      ],
    },
    {
      title: 'Email: Client dinner',
      text: 'To: Marcus Hill\nFrom: Elena Rossi\nSubject: Dinner with Kato Trading\n\nMarcus,\n\nI have booked a table for six at The Olive Branch on Thursday at 7:30 for our dinner with the team from Kato Trading. The restaurant is two blocks from their hotel, so they can walk.\n\nMr. Kato mentioned that he is allergic to nuts, and I have informed the restaurant. Could you bring the signed copies of the agreement? It would be nice to hand them over after dessert.\n\nElena',
      qs: [
        ['Why was The Olive Branch chosen?', 'It is close to the guests\' hotel.', 'It is the cheapest.', 'It serves Japanese food.', 'It has a private room.', '"two blocks from their hotel".'],
        ['What did Ms. Rossi tell the restaurant?', 'A guest has a nut allergy.', 'The group will be late.', 'There will be eight people.', 'They need a projector.', 'Email.'],
        ['What is Mr. Hill asked to bring?', 'Copies of an agreement', 'A gift', 'The menu', 'A credit card', '"bring the signed copies of the agreement".'],
      ],
    },
    {
      title: 'Advertisement: Storage units',
      text: 'SAFEKEEP SELF-STORAGE\n\nNeed more space at home or at work? Rent a clean, dry storage unit from just $45 a month.\n\n• Units from 2 to 30 square meters\n• Access seven days a week, 6 a.m. to 10 p.m.\n• Security cameras and individual alarms\n• Free use of our van on the day you move in\n\nFirst month half price for new customers. Visit us at 60 Depot Road.',
      qs: [
        ['When can customers access their units?', 'Every day from 6 a.m. to 10 p.m.', '24 hours a day', 'On weekdays only', 'By appointment', 'Quảng cáo.'],
        ['What is offered free on moving day?', 'Use of a van', 'Boxes', 'Insurance', 'A lock', '"Free use of our van".'],
        ['What do new customers receive?', 'A half-price first month', 'A free month', 'A larger unit', 'Free delivery', '"First month half price".'],
      ],
    },
    {
      title: 'Memo: Email signatures',
      text: 'MEMO\nTo: All employees\nFrom: Communications\n\nTo give our company a consistent image, all staff must use the new standard email signature from November 1. The signature includes your name, job title, direct telephone number, and the company logo.\n\nPlease do not add quotations, personal photographs, or other images. A template and instructions are on the intranet. If you need help, contact Ravi in IT.',
      qs: [
        ['Why is the new signature being introduced?', 'To create a consistent image', 'To save money', 'To reduce email traffic', 'To follow a new law', 'Thông báo.'],
        ['What should NOT be added to the signature?', 'Personal photographs', 'A job title', 'A telephone number', 'The company logo', '"do not add quotations, personal photographs".'],
        ['Where can staff find the template?', 'On the intranet', 'In an email attachment', 'At the reception desk', 'In the IT office', '"A template and instructions are on the intranet".'],
      ],
    },
    {
      title: 'Information: Conference badge',
      text: 'WELCOME TO THE GLOBAL RETAIL FORUM\n\nYour badge must be worn at all times and gives you access to all sessions and the exhibition hall. The colored stripe shows your category: blue for delegates, green for speakers, red for exhibitors.\n\nLunch tickets are attached to the back of the badge. If you lose your badge, a replacement can be obtained at the registration desk for a fee of $20.',
      qs: [
        ['What does a green stripe indicate?', 'A speaker', 'A delegate', 'An exhibitor', 'A journalist', '"green for speakers".'],
        ['Where are the lunch tickets?', 'On the back of the badge', 'At the registration desk', 'In the exhibition hall', 'In the delegate bag', 'Thông tin.'],
        ['What does a replacement badge cost?', '$20', 'Nothing', '$10', '$50', '"for a fee of $20".'],
      ],
    },
    {
      title: 'Article: Firm introduces four-day week',
      text: 'The software company Lumen has announced that all 120 of its employees will move to a four-day working week from September. — [1] — Staff will work Monday to Thursday and receive the same salary as before.\n\nThe decision follows a six-month trial in the customer support team. — [2] — During the trial, the team answered just as many requests as before, and sick days fell by a third.\n\n"People come back on Monday with more energy," said managing director Olivia Chen. — [3] — To make sure customers are not affected, a small team will work on Fridays on a rotating basis. — [4] — Those employees will take Monday off.',
      qs: [
        ['What is Lumen changing?', 'The length of the working week', 'The salaries of its staff', 'Its office location', 'Its customer support system', 'Tuần làm việc bốn ngày.'],
        ['What was the result of the trial?', 'The same amount of work was done.', 'Customers complained.', 'Staff worked longer hours.', 'Sick days increased.', 'Đoạn 2.'],
        ['How will the company serve customers on Fridays?', 'A small team will work in turns.', 'The office will be closed.', 'A robot will answer calls.', 'Another company will help.', 'Đoạn 3.'],
        ['In which position does this sentence best belong? "The results surprised even the managers."', '[2]', '[1]', '[3]', '[4]', 'Đứng sau câu nói về đợt thử nghiệm, trước kết quả.'],
      ],
    },
    {
      title: 'Email and price list',
      text: 'To: Speedy Print\nFrom: Nora Hall, Hall Fitness\nSubject: Banner order\n\nWe are opening a second gym on Saturday, June 15, and need an outdoor banner (3 × 1 meters) with our logo. It will hang outside for about a month, so it must be weatherproof. We need it by Thursday, June 13. Today is Monday, June 10. Can you help?\n\n--------------------\nSPEEDY PRINT – Banners (3 × 1 m)\nPaper (indoor use only): $25 – ready in 1 day\nVinyl (weatherproof): $60 – ready in 3 days\nFabric (indoor/outdoor, washable): $85 – ready in 5 days\nExpress service: add $20 and collect one day sooner.',
      qs: [
        ['Why does Ms. Hall need a banner?', 'For the opening of a new gym', 'For a sports competition', 'For a sale', 'For a trade fair', 'Email.'],
        ['Why is a paper banner unsuitable?', 'It cannot be used outdoors.', 'It is too expensive.', 'It takes too long.', 'It is too small.', '"Paper (indoor use only)".'],
        ['Which banner will Ms. Hall most likely order?', 'Vinyl', 'Paper', 'Fabric', 'None', 'Chống thời tiết và kịp thứ Năm: vinyl, 3 ngày.'],
        ['If ordered on Monday with standard service, when would the vinyl banner be ready?', 'On Thursday', 'On Tuesday', 'On Saturday', 'On Wednesday', 'Thứ Hai + 3 ngày = thứ Năm.'],
        ['What does the express service offer?', 'Collection one day earlier', 'Free delivery', 'A larger banner', 'A lower price', '"add $20 and collect one day sooner".'],
      ],
    },
    {
      title: 'Notice and email',
      text: 'WESTFIELD LIBRARY – Meeting room rules\nThe meeting room may be booked free of charge by local community groups. Bookings are limited to two hours and must be made at least three days in advance. The room holds 25 people. Food is not permitted; drinks with lids are allowed. Please leave the room as you found it.\n\n--------------------\nTo: Westfield Library\nFrom: Carl Jensen, Westfield Chess Club\nDate: March 3\n\nOur club would like to use the meeting room on Saturday, March 8, from 2 to 5 p.m. for a small tournament. We expect about 20 players. We were planning to bring sandwiches for lunch. Is that all right?',
      qs: [
        ['Who may use the meeting room for free?', 'Local community groups', 'Any business', 'Library staff only', 'Schools from other towns', 'Thông báo.'],
        ['What is wrong with Mr. Jensen\'s request?', 'The booking is too long.', 'The group is too large.', 'It was made too late.', 'Saturday is not available.', '2–5 giờ là ba giờ, giới hạn hai giờ.'],
        ['What else in his plan breaks the rules?', 'Bringing food', 'Bringing drinks', 'Inviting 20 players', 'Holding a tournament', '"Food is not permitted".'],
        ['Was the booking made early enough?', 'Yes, five days ahead', 'No, one day ahead', 'No, on the same day', 'Yes, a month ahead', 'Ngày 3/3 cho ngày 8/3.'],
        ['What are users asked to do after using the room?', 'Leave it as they found it', 'Lock the door', 'Pay a cleaning fee', 'Return the key by mail', 'Câu cuối thông báo.'],
      ],
    },
    {
      title: 'Web page, form, and email',
      text: 'CLEARVIEW OPTICAL – Eye examinations\nStandard examination: $50 (30 minutes)\nExamination with contact lens fitting: $80 (50 minutes)\nChildren under 16: free\nBring your current glasses and a list of any medication. Appointments canceled with less than 24 hours\' notice are charged $15.\n\n--------------------\nAPPOINTMENT REQUEST\nName: Diane Foster   Type: Standard examination\nPreferred time: Friday, May 10, after 4 p.m.\nNotes: Please also book my son Jack (age 12) at the same time.\n\n--------------------\nTo: Diane Foster\nFrom: Clearview Optical\n\nYour appointment is confirmed for Friday, May 10, at 4:30 p.m. Jack will be seen at 5:00 by the same optician. Please arrive ten minutes early to complete a form.',
      qs: [
        ['How long does a standard examination take?', '30 minutes', '50 minutes', '10 minutes', '80 minutes', 'Bảng giá.'],
        ['How much will Ms. Foster pay for both appointments?', '$50', '$100', '$80', '$65', 'Của cô $50; con trai dưới 16 miễn phí.'],
        ['What should patients bring?', 'Their current glasses', 'A photograph', 'Their passport', 'A new prescription', '"Bring your current glasses".'],
        ['When will Jack be examined?', 'At 5:00 p.m.', 'At 4:30 p.m.', 'At 4:00 p.m.', 'On Saturday', 'Email xác nhận.'],
        ['What are they asked to do?', 'Arrive ten minutes early', 'Pay in advance', 'Call to confirm', 'Bring contact lenses', '"Please arrive ten minutes early".'],
      ],
    },
    {
      title: 'Advertisement, email, and receipt',
      text: 'GREEN WHEELS BIKE RENTAL\nCity bike: $12 per half day, $20 per day · Electric bike: $25 per half day, $40 per day\nHelmet and lock included. Child seat: $5. A $50 deposit is required and returned when the bike is brought back undamaged. Open 8 a.m. – 7 p.m.\n\n--------------------\nTo: Green Wheels\nFrom: Tom Baker\n\nMy wife and I would like two electric bikes for the whole day on Saturday. We will also need one child seat. Can we reserve them?\n\n--------------------\nRECEIPT – Green Wheels – Saturday\n2 electric bikes (full day) ........ $80\n1 child seat ................................. $5\nDeposit ........................................ $100\nDeposit returned 6:40 p.m. ..... –$100\nTotal paid ................................... $85',
      qs: [
        ['What is included with every bike?', 'A helmet and a lock', 'A child seat', 'A map', 'Insurance', 'Quảng cáo.'],
        ['How much is an electric bike for a full day?', '$40', '$25', '$20', '$12', 'Bảng giá.'],
        ['Why was the deposit $100?', 'Two bikes were rented.', 'Electric bikes need a higher deposit.', 'A child seat was added.', 'It was a weekend.', '$50 mỗi xe × 2.'],
        ['What can be inferred from the receipt?', 'The bikes were returned undamaged.', 'The bikes were returned late.', 'The customers kept the helmets.', 'The customers paid a fine.', 'Tiền cọc được hoàn đủ.'],
        ['When were the bikes returned?', 'Shortly before closing time', 'At noon', 'The next morning', 'After closing time', '6:40 chiều, cửa hàng đóng lúc 7 giờ.'],
      ],
    },
    {
      title: 'Schedule, notice, and email',
      text: 'RIVERSIDE COLLEGE – Evening business courses, autumn term\nMon.: Bookkeeping Basics (Room 12) · Tue.: Digital Marketing (Room 8) · Wed.: Business Law (Room 12) · Thu.: Public Speaking (Room 5)\nAll classes 6:30–8:30 p.m., 10 weeks, $180.\n\n--------------------\nNOTICE (September 20): Because of low enrollment, Business Law will not run this term. Students who have paid may transfer to another course or receive a full refund.\n\n--------------------\nTo: Riverside College\nFrom: Amir Rezaei\n\nI paid for Business Law. I would like to transfer rather than have a refund. I work late on Mondays and Tuesdays. I am mainly interested in improving my presentations at work.',
      qs: [
        ['How long does each course last?', 'Ten weeks', 'One term of 20 weeks', 'Two weeks', 'Six weeks', 'Lịch học.'],
        ['Why was Business Law canceled?', 'Too few students enrolled.', 'The teacher was ill.', 'Room 12 was unavailable.', 'The fee was too high.', '"Because of low enrollment".'],
        ['What options do affected students have?', 'A transfer or a refund', 'A refund only', 'A place next term only', 'An online course', 'Thông báo.'],
        ['Which course will Mr. Rezaei most likely join?', 'Public Speaking', 'Bookkeeping Basics', 'Digital Marketing', 'Business Law', 'Anh bận thứ Hai, thứ Ba và muốn cải thiện thuyết trình.'],
        ['In which room will his new class meet?', 'Room 5', 'Room 12', 'Room 8', 'Room 10', 'Public Speaking – Room 5.'],
      ],
    },
  ],
};
