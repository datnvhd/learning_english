/** TOEIC đề 15 – phần Đọc bổ sung để đủ 100 câu (xem ghi chú "ĐỀ ĐẦY ĐỦ" trong helpers.ts) */
import { RawToeicR } from '../helpers';

export const R: RawToeicR = {
  p5: [
    ['The team will ____ the project by the end of May.', 'complete', 'completion', 'completed', 'completely', 'Sau "will" là V nguyên mẫu.'],
    ['Mr. Ward handled the difficult customer very ____.', 'skillfully', 'skillful', 'skill', 'skilled', 'Trạng từ bổ nghĩa cho "handled".'],
    ['The price list is available ____ request.', 'on', 'in', 'at', 'for', '"on request".'],
    ['The new offices are ____ and well lit.', 'spacious', 'space', 'spaciously', 'spaces', 'Tính từ song song với "well lit".'],
    ['Please confirm your attendance ____ replying to this email.', 'by', 'with', 'from', 'to', '"by + V-ing".'],
    ['The manager ____ the staff to share their ideas.', 'encouraged', 'encouraging', 'encouragement', 'encourage', 'Động từ quá khứ.'],
    ['The hotel is located ____ the city center.', 'near', 'nearly', 'nearness', 'next', '"near the city center".'],
    ['The company has ____ announced a new partnership.', 'recently', 'recent', 'recency', 'more recent', 'Trạng từ giữa "has" và V3.'],
    ['Customers ____ order before noon receive same-day delivery.', 'who', 'whose', 'which', 'whom', 'Đại từ quan hệ chỉ người làm chủ ngữ.'],
    ['The store is having a ____ sale this weekend.', 'clearance', 'clear', 'clearly', 'cleared', 'Danh từ ghép "clearance sale".'],
    ['The instructions were ____ to follow.', 'easy', 'easily', 'ease', 'easiness', 'Sau "were" cần tính từ.'],
    ['The schedule may change ____ short notice.', 'at', 'in', 'of', 'by', '"at short notice".'],
    ['The firm ____ more than two hundred people.', 'employs', 'employ', 'employing', 'employment', 'Chủ ngữ số ít, hiện tại đơn.'],
    ['The product is ____ popular among young professionals.', 'especially', 'especial', 'special', 'specialty', 'Trạng từ bổ nghĩa cho tính từ.'],
    ['We will contact you ____ a decision has been made.', 'as soon as', 'as well as', 'as far as', 'as long', '"as soon as".'],
    ['One of the printers ____ out of order.', 'is', 'are', 'were', 'have been', '"One of + danh từ số nhiều" + động từ số ít.'],
    ['Should you ____ any assistance, please call the front desk.', 'require', 'required', 'requiring', 'requires', 'Đảo ngữ điều kiện với "Should".'],
    ['No sooner had the sale begun ____ the most popular items sold out.', 'than', 'when', 'that', 'then', '"No sooner ... than".'],
  ],
  p6: [
    {
      title: 'Email: Product launch invitation',
      text: 'Dear Partner,\n\nWe are (1)____ to invite you to the launch of our new range of electric bicycles on Wednesday, April 23, at 6:00 p.m.\n\nThe event will be held at our showroom on River Road. (2)____. You will also have the chance to try the bicycles on a short test track.\n\nRefreshments will be served. Please (3)____ your attendance by April 16, as places are limited. We look forward to (4)____ you.\n\nVolta Cycles',
      qs: [
        ['(1) ____', 'delighted', 'delighting', 'delight', 'delightful', 'Người cảm thấy → -ed.'],
        ['(2) ____', 'Our chief designer will give a short presentation at 6:30.', 'River Road is very long.', 'Bicycles have two wheels.', 'April is in the spring.', 'Câu sau có "also".'],
        ['(3) ____', 'confirm', 'confirming', 'confirmed', 'confirmation', 'Câu mệnh lệnh.'],
        ['(4) ____', 'seeing', 'see', 'saw', 'seen', '"look forward to + V-ing".'],
      ],
    },
    {
      title: 'Notice: Kitchen renovation',
      text: 'STAFF KITCHEN CLOSED\n\nThe staff kitchen on the second floor will be closed for renovation from Monday, March 10, (1)____ Friday, March 21.\n\nDuring this period, you may use the kitchen on the fourth floor. (2)____. Please therefore be patient at lunchtime.\n\nAll food must be (3)____ from the second-floor refrigerator by Friday, March 7. Anything left will be thrown away. The new kitchen will have twice as much seating and two (4)____ microwaves.',
      qs: [
        ['(1) ____', 'until', 'by', 'at', 'since', '"from ... until ...".'],
        ['(2) ____', 'It is smaller and will be busier than usual.', 'The fourth floor has a nice view.', 'Lunch is at noon.', 'Refrigerators keep food cold.', '"therefore be patient".'],
        ['(3) ____', 'removed', 'removing', 'remove', 'removal', 'Bị động: must be removed.'],
        ['(4) ____', 'extra', 'extras', 'extremely', 'exceed', 'Tính từ trước danh từ.'],
      ],
    },
    {
      title: 'Advertisement: Recruitment agency',
      text: 'LOOKING FOR YOUR NEXT JOB?\n\nAt CareerLink, we have been matching people with employers for more than twenty-five years. We work with over 400 companies in (1)____ industry.\n\nRegistering takes ten minutes. (2)____. Our advisers will then contact you when a suitable position becomes available.\n\nOur service is completely free for job seekers. We also offer (3)____ on writing a résumé and preparing for interviews. Visit careerlink.example and take the first step (4)____ a new career.',
      qs: [
        ['(1) ____', 'every', 'all', 'both', 'several', '"every + danh từ số ít".'],
        ['(2) ____', 'Simply upload your résumé and tell us what kind of work you want.', 'Industries change over time.', 'Ten minutes is not long.', 'Our office has two floors.', 'Câu sau: "Our advisers will then contact you".'],
        ['(3) ____', 'advice', 'advise', 'advised', 'advisers', 'Danh từ không đếm được "advice".'],
        ['(4) ____', 'toward', 'among', 'against', 'during', '"a step toward".'],
      ],
    },
    {
      title: 'Letter: Warranty extension',
      text: 'Dear Mr. Lindqvist,\n\nThe two-year warranty on your washing machine will end on August 31. For just $59, you can (1)____ it for a further three years.\n\nWith an extended warranty, all repairs are free, including parts and labor. (2)____. There is no limit on the number of repairs.\n\nTo take up this offer, (3)____ the form below or call us before the current warranty ends. After that date, the offer will no longer be (4)____.\n\nYours sincerely,\nHomeTech Customer Care',
      qs: [
        ['(1) ____', 'extend', 'extent', 'extensive', 'extension', 'Sau "can" là V nguyên mẫu.'],
        ['(2) ____', 'If the machine cannot be repaired, we will replace it.', 'Washing machines use water.', 'August is a summer month.', 'Our factory is in Sweden.', 'Bổ sung quyền lợi bảo hành.'],
        ['(3) ____', 'return', 'returning', 'returned', 'returns', 'Câu mệnh lệnh.'],
        ['(4) ____', 'available', 'capable', 'probable', 'valuable', '"no longer be available".'],
      ],
    },
  ],
  p7: [
    {
      title: 'Sign: Staff room',
      text: 'PLEASE HELP KEEP THIS ROOM TIDY\n\n• Wash your own cups.\n• Wipe the table after eating.\n• Put newspapers back on the shelf.\n\nThe cleaners come only once a day, at 6 p.m.',
      qs: [
        ['What are staff asked to do with cups?', 'Wash them', 'Throw them away', 'Leave them in the sink', 'Take them home', 'Biển báo.'],
        ['When do the cleaners come?', 'At 6 p.m.', 'At noon', 'Twice a day', 'At 8 a.m.', 'Biển báo.'],
      ],
    },
    {
      title: 'Text message',
      text: 'From: QuickPark\n\nYour parking session at Station Car Park ends in 15 minutes (at 4:30 p.m.). To extend by one hour for $2.50, reply EXTEND. Vehicles left after the paid time may be fined $35.',
      qs: [
        ['When does the parking session end?', 'At 4:30 p.m.', 'At 4:15 p.m.', 'In one hour', 'At 5:30 p.m.', 'Tin nhắn.'],
        ['How can the driver get more time?', 'By replying EXTEND', 'By calling an office', 'By visiting a machine', 'By paying $35', 'Tin nhắn.'],
      ],
    },
    {
      title: 'Email: Welcome to a new client',
      text: 'To: David Park, Park & Sons\nFrom: Elise Martin, Coastal Accounting\nSubject: Welcome\n\nDear Mr. Park,\n\nThank you for choosing Coastal Accounting. I will be your main contact and will prepare your monthly accounts.\n\nTo get started, I need copies of your bank statements for the past twelve months and a list of your employees. You can upload these securely through the link below.\n\nI suggest that we meet at your office next week so that I can learn more about your business. Would Tuesday at 10:00 suit you?',
      qs: [
        ['What is Ms. Martin\'s role?', 'She will prepare the monthly accounts.', 'She is the company director.', 'She sells software.', 'She is a bank manager.', 'Email.'],
        ['What does she need from Mr. Park?', 'Bank statements and an employee list', 'A contract and a deposit', 'Tax forms from last year only', 'A list of customers', 'Email.'],
        ['What does she suggest?', 'A meeting at his office', 'A telephone call', 'A visit to her office', 'A video conference', 'Email.'],
      ],
    },
    {
      title: 'Advertisement: Mobile car wash',
      text: 'SHINE ON WHEELS – We come to you!\n\nHave your car washed while you work. Our van carries its own water and power, so we can clean your car in any office car park.\n\nOutside wash: $20 · Inside and outside: $35 · Full valet with polish: $60\n\nBook online by 5 p.m. for the next day. Companies that book ten or more cars on the same day receive 15% off.',
      qs: [
        ['What is special about this service?', 'It comes to the customer.', 'It is open 24 hours.', 'It uses no water.', 'It is free for companies.', 'Quảng cáo.'],
        ['How much is an inside and outside wash?', '$35', '$20', '$60', '$15', 'Quảng cáo.'],
        ['How can a company get a discount?', 'By booking ten or more cars on one day', 'By paying monthly', 'By booking before noon', 'By choosing the full valet', 'Quảng cáo.'],
      ],
    },
    {
      title: 'Memo: Dress code reminder',
      text: 'MEMO\nTo: All front-of-house staff\nFrom: Hotel Manager\n\nWith the summer season starting, please remember our dress code:\n\n• Uniform shirts must be clean and ironed.\n• Name badges are worn on the left side.\n• Shoes must be black and closed.\n• Strong perfume should be avoided.\n\nSpare shirts are available from housekeeping. Staff who arrive without the correct uniform may be sent home to change.',
      qs: [
        ['Who is the memo for?', 'Front-of-house staff', 'Kitchen staff', 'Guests', 'Suppliers', 'Thông báo.'],
        ['Where should name badges be worn?', 'On the left side', 'On the right side', 'On the collar', 'On the belt', 'Thông báo.'],
        ['Where can staff get a spare shirt?', 'From housekeeping', 'From reception', 'From the manager', 'From a shop', 'Thông báo.'],
      ],
    },
    {
      title: 'Information: Returns label',
      text: 'HOW TO RETURN YOUR ORDER\n\n1. Pack the item in its original box.\n2. Stick the prepaid label on the outside.\n3. Take it to any post office within 30 days of delivery.\n\nYour refund will be made within 7 days of our receiving the item. Items that have been used or washed cannot be refunded. Keep your post office receipt until the refund arrives.',
      qs: [
        ['How long do customers have to return an item?', '30 days', '7 days', '14 days', 'One year', 'Hướng dẫn.'],
        ['What cannot be refunded?', 'Used or washed items', 'Items in the original box', 'Items sent by post', 'Items paid by card', 'Hướng dẫn.'],
        ['What should customers keep?', 'The post office receipt', 'The label', 'The box', 'The invoice only', 'Câu cuối.'],
      ],
    },
    {
      title: 'Article: Town introduces free Wi-Fi',
      text: 'Residents and visitors can now use free wireless internet throughout the center of Milbrook. — [1] — The service, which was switched on last Friday, covers the main square, the high street, and the riverside park.\n\nThe $180,000 project was paid for by the town council and local businesses. — [2] — Users must register with an email address and may stay connected for two hours at a time.\n\nShop owners hope the service will bring more people into town. — [3] — "Visitors can look up our opening hours or find a restaurant," said café owner Lena Brandt. — [4] — The council plans to extend the network to the railway station next year.',
      qs: [
        ['Where is the free Wi-Fi available?', 'In the town center', 'Only in the library', 'In the whole county', 'At the railway station', 'Đoạn 1.'],
        ['Who paid for the project?', 'The council and local businesses', 'The national government', 'A telephone company', 'Visitors', 'Đoạn 2.'],
        ['What must users do?', 'Register with an email address', 'Pay a small fee', 'Buy a drink in a café', 'Download an app', 'Đoạn 2.'],
        ['In which position does this sentence best belong? "It was installed over a period of three months."', '[2]', '[1]', '[3]', '[4]', 'Nối với câu nói về dự án và chi phí.'],
      ],
    },
    {
      title: 'Email and price list',
      text: 'To: Stellar Trophies\nFrom: Nadia Okoye, Lakeside Tennis Club\nSubject: Trophies for tournament\n\nOur annual tournament is on June 21, and we need six trophies with the winners\' names engraved. We will only know the names on the day, so could you engrave them afterwards? Our budget is $200 in total.\n\n--------------------\nSTELLAR TROPHIES – Price list\nSmall cup (15 cm): $18 · Medium cup (25 cm): $28 · Large cup (35 cm): $45\nEngraving: $4 per trophy (free on orders of 10 or more)\nEngraving after purchase: bring the trophy to our shop; ready in 2 days.',
      qs: [
        ['How many trophies does the club need?', 'Six', 'Ten', 'Two', 'Twenty-one', 'Email.'],
        ['Why must the engraving be done after the tournament?', 'The winners\' names are not yet known.', 'The trophies are not ready.', 'The shop is closed in June.', 'It is cheaper.', 'Email.'],
        ['How much would six medium cups with engraving cost?', '$192', '$168', '$200', '$132', '6 × ($28 + $4).'],
        ['Could the club afford six large cups within its budget?', 'No, they would cost $270 before engraving.', 'Yes, exactly.', 'Yes, with money left.', 'It is not stated.', '6 × $45 = $270 > $200.'],
        ['How long does engraving after purchase take?', '2 days', '10 days', 'One week', 'The same day', 'Bảng giá.'],
      ],
    },
    {
      title: 'Notice and email',
      text: 'EASTSIDE BUSINESS CENTRE – Fire safety notice\nA full evacuation drill will take place on Thursday, October 9, at 10:30 a.m. All occupants must leave by the nearest exit and gather in the car park on Mill Road. Each company must appoint one person to check that its offices are empty and to report to the building manager. The drill will last about 20 minutes.\n\n--------------------\nTo: Building Manager\nFrom: Olivia Grant, Grant Translations\n\nWe have an important video interview with a client in Tokyo at 10:30 on October 9, which cannot be moved. Is it possible for two of our staff to stay in the office during the drill?',
      qs: [
        ['When will the drill take place?', 'On October 9 at 10:30 a.m.', 'On October 9 at 10:50 a.m.', 'On October 10', 'Every Thursday', 'Thông báo.'],
        ['Where must people gather?', 'In the car park on Mill Road', 'In the lobby', 'On the roof', 'At the main gate', 'Thông báo.'],
        ['What must each company appoint?', 'A person to check its offices', 'A fire officer from outside', 'A new manager', 'A driver', 'Thông báo.'],
        ['Why does Ms. Grant write?', 'Her company has a meeting at the same time.', 'She will be on holiday.', 'Her office has no exit.', 'She did not receive the notice.', 'Email.'],
        ['What does she request?', 'That two staff may remain inside', 'That the drill be canceled', 'That the client be invited', 'That the car park be closed', 'Email.'],
      ],
    },
    {
      title: 'Web page, email, and reply',
      text: 'HARBORVIEW SUITES – Long-stay rates\n1–6 nights: $110 per night · 7–29 nights: $90 per night · 30 nights or more: $70 per night\nAll suites have a kitchen and a washing machine. Weekly cleaning is included; daily cleaning costs $10 per day.\n\n--------------------\nTo: Harborview Suites\nFrom: Simon Keller\n\nI will be working in your city for five weeks from March 2 and would like a suite for the whole period (35 nights). I do not need daily cleaning. Could you confirm the price?\n\n--------------------\nTo: Simon Keller\nFrom: Harborview Suites\n\nWe would be pleased to welcome you. For 35 nights, the total will be $2,450. A deposit of one week\'s rent is required to confirm the booking.',
      qs: [
        ['What do all suites have?', 'A kitchen and a washing machine', 'A sea view', 'Daily cleaning', 'Two bedrooms', 'Trang web.'],
        ['Which nightly rate applies to Mr. Keller?', '$70', '$90', '$110', '$10', '35 đêm ≥ 30.'],
        ['How was the total of $2,450 calculated?', '35 nights at $70', '35 nights at $90', '5 weeks at $110 a week', '30 nights at $70 plus cleaning', '35 × $70.'],
        ['What service does Mr. Keller decline?', 'Daily cleaning', 'Weekly cleaning', 'The kitchen', 'The deposit', 'Email.'],
        ['How much is the deposit?', '$490', '$70', '$245', '$2,450', 'Một tuần: 7 × $70.'],
      ],
    },
    {
      title: 'Advertisement, form, and email',
      text: 'BRIGHT MINDS TUTORING – Maths and English for ages 8–16\nGroup lesson (max. 4 students): $25 per hour · Individual lesson: $45 per hour\nFree first assessment. Lessons Monday–Friday 4–8 p.m. and Saturday 9 a.m.–1 p.m. Pay for ten lessons and get one free.\n\n--------------------\nENROLMENT FORM\nParent: Helen Brooks   Child: Oliver (13)\nSubject: Maths   Type: Individual\nPreferred time: Saturday morning\n\n--------------------\nTo: Helen Brooks\nFrom: Bright Minds Tutoring\n\nThank you for enrolling Oliver. His free assessment is on Saturday, May 3, at 9:00. After that, his regular lesson will be at 10:00 every Saturday with Mr. Shah. If you pay for ten lessons now, the total is $450.',
      qs: [
        ['What ages does the centre teach?', '8 to 16', '4 to 8', '13 to 18', 'Adults only', 'Quảng cáo.'],
        ['What kind of lessons will Oliver have?', 'Individual maths lessons', 'Group maths lessons', 'Individual English lessons', 'Group English lessons', 'Phiếu.'],
        ['What happens on May 3?', 'A free assessment', 'The first paid lesson', 'A group class', 'A parents\' meeting', 'Email.'],
        ['How many lessons will Mrs. Brooks get for $450?', 'Eleven', 'Ten', 'Nine', 'Twelve', 'Trả mười buổi, tặng một.'],
        ['Who will teach Oliver?', 'Mr. Shah', 'Mrs. Brooks', 'A group tutor', 'It is not stated', 'Email.'],
      ],
    },
    {
      title: 'Schedule, notice, and email',
      text: 'GREENFIELD COMMUNITY POOL – Weekly timetable\nLane swimming: Mon.–Fri. 6:30–8:30 a.m. and 12:00–1:30 p.m.\nFamily swim: Sat. and Sun. 10:00 a.m.–1:00 p.m.\nAdult lessons: Tue. and Thu. 7:00–8:00 p.m.\nAqua fitness: Wed. 6:00–7:00 p.m.\n\n--------------------\nNOTICE: The pool will be closed all day on Thursday, May 15, for a regional school competition.\n\n--------------------\nTo: Greenfield Community Pool\nFrom: Carlos Mendez\n\nI am taking adult lessons twice a week and have paid for the month. As the pool is closed on May 15, will that lesson be held on another day?',
      qs: [
        ['When is lane swimming available at lunchtime?', 'From 12:00 to 1:30 on weekdays', 'From 10:00 to 1:00 at weekends', 'Every day at noon', 'Only on Wednesdays', 'Lịch.'],
        ['Why will the pool be closed on May 15?', 'A school competition is being held.', 'The pool is being cleaned.', 'Staff are being trained.', 'It is a holiday.', 'Thông báo.'],
        ['Which of Mr. Mendez\'s lessons is affected?', 'The Thursday lesson', 'The Tuesday lesson', 'Both lessons', 'Neither', '15/5 là thứ Năm.'],
        ['What does he ask?', 'Whether the lesson will be rescheduled', 'How to cancel his membership', 'Whether he can enter the competition', 'What time the pool opens', 'Email.'],
        ['Which other activity that week is NOT affected by the closure?', 'Aqua fitness on Wednesday', 'Lane swimming on Thursday', 'Adult lessons on Thursday', 'All Thursday sessions', 'Thứ Tư không đóng cửa.'],
      ],
    },
  ],
};
