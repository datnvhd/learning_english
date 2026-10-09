/** Bộ đề TOEIC Listening & Reading cố định – đề 19 và 20 (định dạng rút gọn, xem helpers.ts) */
import { ToeicTest, toeicTest } from './helpers';

export const TESTS: ToeicTest[] = [
  // =========================================================================== ĐỀ 19
  toeicTest(19, {
    p2: [
      ['Where is the annual conference being held this year?', 'In Barcelona.', 'In late October.', 'About five hundred people.', 'Where → địa điểm.'],
      ['Who wrote this user manual?', 'Our technical writing team.', 'It is easy to use.', 'In three languages.', 'Who → người viết.'],
      ['When does the lease on this office end?', 'At the end of next year.', 'Two thousand a month.', 'On the fourth floor.', 'When → thời điểm kết thúc.'],
      ['How many applicants are we interviewing today?', 'Just three.', 'In the small meeting room.', 'For the sales position.', 'How many → số lượng.'],
      ['Can you recommend a good hotel near the airport?', 'The Skyline Inn is very convenient.', 'I commanded them to stop.', 'My flight was late.', 'Lời nhờ gợi ý → đưa tên cụ thể.'],
      ['Isn\'t the copier on this floor broken?', 'It was fixed this morning.', 'Yes, I had a coffee break.', 'Twenty copies.', 'Câu hỏi phủ định → cập nhật tình hình.'],
      ['Why don\'t we discuss this over lunch?', "Sounds good. I'm free at noon.", 'Because I already ate.', 'The discussion was long.', 'Lời rủ → đồng ý.'],
      ['The new intern learns very quickly.', "Yes, she's been a great help.", 'He earns a lot.', 'Quickly, please.', 'Nhận xét → đồng tình.'],
    ],
    p3: [
      {
        title: 'Booking a table',
        lines: [
          "M: Good afternoon, Bella Roma. How can I help you?",
          "W: Hi, I'd like to book a table for six people this Friday at seven thirty.",
          "M: Let me check. I'm sorry, we are fully booked at seven thirty. I could offer you a table at six or at nine.",
          "W: Six is a bit early, but nine is too late. We'll take six o'clock.",
          'M: Very good. May I have your name?',
          "W: It's Reynolds. Oh, and it is my manager's birthday. Could you prepare a small cake?",
          'M: Certainly. We will have it ready for you.',
        ],
        qs: [
          ['Why can the woman not have a table at seven thirty?', 'The restaurant is full then.', 'The restaurant is closed.', 'Her group is too large.', 'The kitchen opens later.', '"we are fully booked at seven thirty".'],
          ['What time does the woman choose?', 'Six o\'clock', 'Seven thirty', 'Nine o\'clock', 'Eight o\'clock', '"We\'ll take six o\'clock".'],
          ['What special request does the woman make?', 'A birthday cake', 'A table by the window', 'A vegetarian menu', 'A private room', '"Could you prepare a small cake?"'],
        ],
      },
      {
        title: 'A printer problem',
        lines: [
          "W: Hi, this is Dana in the accounting department. The printer on our floor keeps jamming.",
          'M: Have you checked whether the paper tray is too full?',
          'W: Yes, I took some paper out, but it still jams every few pages.',
          "M: It may be the rollers. I can come up and look at it, but not until after lunch. I'm installing computers on the second floor right now.",
          'W: We have to print the payroll reports by noon.',
          'M: Then send them to the printer on the fifth floor for now. I will give you access.',
        ],
        qs: [
          ['What is the problem with the printer?', 'Paper keeps getting stuck.', 'It is out of ink.', 'It will not turn on.', 'It prints too slowly.', '"The printer on our floor keeps jamming".'],
          ['Why can the man not come immediately?', 'He is installing computers.', 'He is at lunch.', 'He is in a meeting.', 'He is on another call.', '"I\'m installing computers on the second floor right now".'],
          ['What does the man suggest?', 'Using a printer on another floor', 'Buying a new printer', 'Printing the reports tomorrow', 'Emailing the reports instead', '"send them to the printer on the fifth floor for now".'],
        ],
      },
    ],
    p4: [
      {
        title: 'Tour of a new office building',
        lines: [
          'W: Welcome to our new headquarters, everyone. Let me show you around before you find your desks.',
          'W: On this floor, we have the reception area and the staff cafe, which serves free coffee until eleven every morning. The second floor has meeting rooms, and floors three to five are open-plan work areas.',
          'W: One important point: this is a green building. The lights turn off automatically when a room is empty, and there are no individual trash cans. Please use the recycling stations near the elevators.',
        ],
        qs: [
          ['Who is the speaker most likely talking to?', 'Employees', 'Tourists', 'Customers', 'Builders', 'Nhân viên sắp nhận bàn làm việc ở trụ sở mới.'],
          ['What is available in the staff cafe?', 'Free coffee in the morning', 'Free lunch', 'A vending machine', 'Newspapers', '"serves free coffee until eleven every morning".'],
          ['What are listeners asked to do?', 'Use the recycling stations', 'Turn off the lights', 'Bring their own cups', 'Avoid the elevators', '"Please use the recycling stations near the elevators".'],
        ],
      },
      {
        title: 'Radio advertisement for a bank',
        lines: [
          'M: Thinking about buying your first home? At Harbor Savings Bank, we make it simple.',
          'M: Our home loan advisers will explain every step and help you find a plan that fits your budget. And for a limited time, first-time buyers pay no application fee.',
          'M: Join us this Saturday at ten a.m. for a free home-buying seminar at our Main Street branch. Seats are limited, so reserve yours today by calling five five five, zero one nine eight.',
        ],
        qs: [
          ['Who is the advertisement aimed at?', 'People buying their first home', 'Business owners', 'Retired people', 'Students', '"Thinking about buying your first home?"'],
          ['What special offer is mentioned?', 'No application fee', 'A free house inspection', 'A lower interest rate for a year', 'A gift card', '"first-time buyers pay no application fee".'],
          ['How can listeners reserve a seat at the seminar?', 'By calling the bank', 'By visiting a website', 'By sending an email', 'By going to City Hall', '"reserve yours today by calling".'],
        ],
      },
    ],
    p5: [
      ['The shipment will be sent as soon as payment ____ received.', 'is', 'will be', 'was', 'being', 'Mệnh đề thời gian chỉ tương lai dùng hiện tại đơn.'],
      ['The firm is seeking an ____ sales manager.', 'experienced', 'experience', 'experiencing', 'experiences', 'Tính từ (phân từ) trước danh từ.'],
      ['Mr. Dale works ____ than most of his colleagues.', 'harder', 'hard', 'hardest', 'hardly', 'So sánh hơn của trạng từ "hard".'],
      ['The meeting was held ____ the request of the client.', 'at', 'by', 'for', 'under', '"at the request of".'],
      ['The new system is ____ easier to use than the old one.', 'considerably', 'considerable', 'consider', 'consideration', 'Trạng từ bổ nghĩa cho so sánh hơn.'],
      ['The manager ____ the staff for their hard work.', 'thanked', 'thankful', 'thankfully', 'thanking', 'Cần động từ chia quá khứ.'],
      ['Visitors are not allowed to enter the laboratory without ____.', 'permission', 'permissible', 'permitted', 'permissive', 'Sau giới từ "without" cần danh từ.'],
      ['The two departments will be ____ into one next year.', 'combined', 'combining', 'combine', 'combination', 'Bị động tương lai.'],
      ['Ms. Roy speaks ____ Spanish and Portuguese fluently.', 'both', 'either', 'neither', 'also', '"both A and B".'],
      ['The store extended its hours ____ serve customers better.', 'in order to', 'so that', 'because of', 'in addition', '"in order to + V".'],
      ['The task proved more ____ than the team had expected.', 'challenging', 'challenge', 'challenged', 'challenges', 'Tính từ sau "more".'],
      ['A copy of the report was sent to ____ member of the board.', 'each', 'all', 'few', 'several', '"each + danh từ số ít".'],
    ],
    p6: [
      {
        title: 'Email: Appointment with a client',
        text: 'Dear Ms. Sandoval,\n\nIt was a pleasure speaking with you on the phone this morning. As we (1)____, I will visit your office on Thursday, February 8, at 2:00 p.m. to present our new accounting software.\n\nThe demonstration will take about forty minutes. (2)____. I would therefore be grateful if a meeting room with a screen could be made available.\n\nIf other members of your team would like to (3)____, they are most welcome.\n\nBest regards,\nPeter Lindholm',
        qs: [
          ['(1) ____', 'agreed', 'agree', 'agreeing', 'agreement', '"As we agreed": như đã thống nhất.'],
          ['(2) ____', 'I will need to connect my laptop to a large display.', 'Our software is used in twenty countries.', 'Thursday is usually a busy day.', 'Your office is near the station.', '"therefore" ở câu sau: vì cần màn hình nên xin phòng có màn hình.'],
          ['(3) ____', 'attend', 'attending', 'attended', 'attendance', '"would like to + V".'],
        ],
      },
      {
        title: 'Notice: Holiday schedule',
        text: 'HOLIDAY OPENING HOURS – Central Pharmacy\n\nPlease note that our opening hours will be (1)____ during the holiday period.\n\nDecember 24: 8 a.m. – 2 p.m.\nDecember 25: Closed\nDecember 26: 10 a.m. – 4 p.m.\n\nNormal hours will (2)____ on December 27. If you take regular medication, we advise you to order your prescription at least three days (3)____ the holiday to avoid running out.',
        qs: [
          ['(1) ____', 'reduced', 'reducing', 'reduce', 'reduction', 'Bị động tương lai: will be reduced.'],
          ['(2) ____', 'resume', 'rewind', 'resign', 'remind', '"Normal hours will resume": trở lại bình thường.'],
          ['(3) ____', 'before', 'ago', 'ahead', 'early', '"three days before the holiday".'],
        ],
      },
    ],
    p7: [
      {
        title: 'Ticket',
        text: 'CITY SYMPHONY ORCHESTRA\nAn Evening of Mozart\n\nSaturday, October 19 – 8:00 p.m.\nGrand Concert Hall, 12 Opera Square\n\nSection: Balcony   Row: C   Seat: 14\nPrice: $45.00\n\nDoors open at 7:15 p.m. Latecomers will be seated only during the interval. Photography and recording are not permitted. This ticket cannot be refunded but may be exchanged for another performance up to 48 hours before the concert.',
        qs: [
          ['What kind of event is the ticket for?', 'A classical concert', 'A film', 'A play', 'A sports game', 'Dàn nhạc giao hưởng, đêm nhạc Mozart.'],
          ['What happens to people who arrive late?', 'They must wait until the break.', 'They cannot enter at all.', 'They receive a refund.', 'They sit in the balcony.', '"seated only during the interval".'],
          ['What is true about the ticket?', 'It can be exchanged.', 'It can be refunded.', 'It includes a drink.', 'It is for two people.', '"may be exchanged for another performance".'],
        ],
      },
      {
        title: 'Email: Company car policy',
        text: 'To: Field Sales Team\nFrom: Fleet Management\nSubject: Reminder – company vehicles\n\nPlease remember the following rules for company cars:\n\n1. Fuel must be bought with the company fuel card only. Personal cards will not be reimbursed.\n2. Record your mileage in the app at the end of every week.\n3. Report any damage, however small, within 24 hours.\n4. Cars must be serviced every 15,000 kilometers. The app will alert you when a service is due.\n\nDrivers who receive traffic fines are responsible for paying them personally.',
        qs: [
          ['How should drivers pay for fuel?', 'With the company fuel card', 'With cash', 'With a personal credit card', 'Through the app', '"Fuel must be bought with the company fuel card only".'],
          ['How often must mileage be recorded?', 'Weekly', 'Daily', 'Monthly', 'Every 15,000 kilometers', '"at the end of every week".'],
          ['Who pays for traffic fines?', 'The driver', 'The company', 'The fleet manager', 'The insurance company', '"responsible for paying them personally".'],
        ],
      },
      {
        title: 'Schedule and text message',
        text: 'TECH FORWARD EXPO – Friday program\n9:00 – Opening remarks (Main Stage)\n10:00 – "The Future of Batteries," Dr. S. Okoye (Hall A)\n11:30 – "Smart Homes," L. Greene (Hall B)\n1:00 – Lunch break\n2:30 – "Robots at Work," Prof. M. Haddad (Hall A)\n4:00 – Closing panel (Main Stage)\n\n--------------------\nFrom: Rosa Vidal\nTo: Ian Cho\n\nIan, my train is delayed, and I won\'t get there until about 11:00. Could you take notes at the talk I am going to miss? It is the one I most wanted to hear. I will be there in time for the one on smart homes. Save me a seat!',
        qs: [
          ['Where will the closing panel take place?', 'On the Main Stage', 'In Hall A', 'In Hall B', 'In the lunch area', '"4:00 – Closing panel (Main Stage)".'],
          ['Which speaker\'s talk will Ms. Vidal most likely miss?', 'Dr. Okoye', 'L. Greene', 'Prof. Haddad', 'None of them', 'Cô đến khoảng 11:00 → lỡ bài 10:00 của Dr. Okoye.'],
          ['What does Ms. Vidal ask Mr. Cho to do?', 'Take notes for her', 'Meet her at the station', 'Give a talk', 'Buy her lunch', '"Could you take notes at the talk I am going to miss?"'],
        ],
      },
    ],
  }),

  // =========================================================================== ĐỀ 20
  toeicTest(20, {
    p2: [
      ['Who is responsible for ordering office supplies?', 'Ms. Petrov at the front desk.', 'A box of pens.', 'Once a month.', 'Who → người phụ trách.'],
      ['When will the results be announced?', 'Next Monday morning.', 'On the notice board.', 'They were excellent.', 'When → thời gian.'],
      ['Where can I leave my coat?', 'There is a closet by the door.', 'It is quite cold.', 'A dark blue one.', 'Where → vị trí.'],
      ['How did the client react to the proposal?', 'She seemed very pleased.', 'By email.', 'In her office.', 'How → phản ứng.'],
      ['Would you like a copy of the minutes?', 'Yes, please email it to me.', 'About ten minutes.', 'I copied the file.', 'Lời đề nghị → nhận.'],
      ['Has the new schedule been posted yet?', "It's on the bulletin board.", 'By mail.', 'I scheduled it.', 'Câu hỏi Yes/No → câu trả lời ngầm "rồi" kèm vị trí.'],
      ['Which entrance should the delivery truck use?', 'The one at the back.', 'At two o\'clock.', 'A large truck.', 'Which → xác định.'],
      ['I am thinking of taking an evening course.', 'What subject are you interested in?', 'In the evening.', 'Of course not.', 'Chia sẻ dự định → hỏi thêm.'],
    ],
    p3: [
      {
        title: 'A problem with a rental car',
        lines: [
          "M: Hello, I rented a car from your downtown office this morning, and a warning light has just come on.",
          "W: I'm sorry to hear that. Which light is it?",
          'M: It looks like the tire pressure light.',
          'W: Please stop at the nearest gas station and check the tires. If one of them is flat, call us back, and we will send a replacement car.',
          "M: All right. I'm about five minutes from a gas station. I have a meeting at three, so I hope it is nothing serious.",
          "W: If you need another car, we can deliver it within thirty minutes.",
        ],
        qs: [
          ['Why is the man calling?', 'A warning light has come on.', 'He lost the car keys.', 'He had an accident.', 'He wants to extend his rental.', '"a warning light has just come on".'],
          ['What does the woman tell the man to do?', 'Check the tires at a gas station', 'Return the car immediately', 'Call the police', 'Drive to the office', '"stop at the nearest gas station and check the tires".'],
          ['Why is the man concerned?', 'He has a meeting to attend.', 'He has no money.', 'He is far from the city.', 'He has never changed a tire.', '"I have a meeting at three".'],
        ],
      },
      {
        title: 'Planning a store display',
        lines: [
          'W: Luke, the summer clothing arrived this morning. We need to change the window display before the weekend.',
          'M: Sure. What theme did head office choose this year?',
          'W: A beach holiday. They sent posters and some decorations, but we have to arrange the clothes ourselves.',
          "M: I can stay after closing tonight and do it. I'll need someone to help me move the mannequins, though.",
          "W: I'll ask Tina. She said she wanted extra hours this week.",
        ],
        qs: [
          ['What has arrived at the store?', 'Summer clothes', 'New mannequins', 'Winter coats', 'Cash registers', '"the summer clothing arrived this morning".'],
          ['What is the theme of the display?', 'A beach holiday', 'A city at night', 'A sports event', 'A garden party', '"A beach holiday".'],
          ['Why will the woman ask Tina?', 'Tina wants to work more hours.', 'Tina designed the posters.', 'Tina is the store manager.', 'Tina has a key to the store.', '"She said she wanted extra hours this week".'],
        ],
      },
    ],
    p4: [
      {
        title: 'Announcement about a workshop',
        lines: [
          'W: Good morning, everyone. Before we start, I have a quick announcement about next week\'s photography workshop.',
          'W: Because so many of you have signed up, we are dividing the class into two groups. Group one will meet on Tuesday evening, and group two on Thursday evening, both from six to eight.',
          'W: The list of names for each group is posted outside my office. If the day you have been given does not suit you, please find someone to swap with and let me know by Friday.',
        ],
        qs: [
          ['Why is the class being divided?', 'Many people have registered.', 'The room is too small to clean.', 'There are two teachers.', 'Some cameras are broken.', '"Because so many of you have signed up".'],
          ['Where can listeners find out which group they are in?', 'Outside the speaker\'s office', 'On the website', 'In an email', 'At the reception desk', '"posted outside my office".'],
          ['What should listeners do if their day is not suitable?', 'Exchange places with someone', 'Cancel their registration', 'Attend both sessions', 'Pay an extra fee', '"find someone to swap with".'],
        ],
      },
      {
        title: 'Message from a travel agent',
        lines: [
          'M: Hello, Ms. Jensen. This is Victor from Blue Horizon Travel, calling about your trip to Rome next month.',
          'M: I am afraid the hotel you chose, the Villa Aurora, has told us it will be closed for repairs during your stay. I can offer you two alternatives at a similar price.',
          'M: The Hotel Tiber is closer to the city center, while the Garden Palace is quieter and has a swimming pool. I have emailed you the details of both. Please let me know your choice by Wednesday so that I can confirm the booking.',
        ],
        graphic: ['Hotel options', 'Hotel | Location | Feature\nVilla Aurora | Old town | Closed for repairs\nHotel Tiber | City center | Rooftop cafe\nGarden Palace | Suburbs | Swimming pool'],
        qs: [
          ['Why is the speaker calling?', 'A hotel is unavailable.', 'A flight has been canceled.', 'A payment was not received.', 'A tour is fully booked.', 'Khách sạn đã chọn đóng cửa để sửa chữa.'],
          ['Look at the graphic. Where is the hotel with a swimming pool located?', 'In the suburbs', 'In the old town', 'In the city center', 'Near the airport', 'Garden Palace có hồ bơi → Suburbs.'],
          ['What should the listener do by Wednesday?', 'Choose a hotel', 'Pay the full price', 'Send her passport', 'Cancel the trip', '"let me know your choice by Wednesday".'],
        ],
      },
    ],
    p5: [
      ['The annual report will be ____ to shareholders next week.', 'distributed', 'distributing', 'distribute', 'distribution', 'Bị động tương lai.'],
      ['Mr. Elliot arrived ____ late for the board meeting.', 'slightly', 'slight', 'slighted', 'slightness', 'Trạng từ bổ nghĩa cho "late".'],
      ['The café is located ____ the bank and the post office.', 'between', 'among', 'through', 'along', '"between A and B".'],
      ['Ms. Sato is ____ for her creative advertising campaigns.', 'known', 'knowing', 'knew', 'knowledge', '"be known for".'],
      ['The supplier promised ____ the goods by Thursday.', 'to deliver', 'delivering', 'deliver', 'delivered', '"promise to + V".'],
      ['____ employees have completed the online safety course so far.', 'Most', 'Almost', 'Much', 'Every', '"Most + danh từ số nhiều".'],
      ['The company\'s new policy is ____ to reduce paper waste.', 'intended', 'intention', 'intending', 'intend', '"be intended to + V": nhằm mục đích.'],
      ['The elevator will be out of service ____ further notice.', 'until', 'unless', 'since', 'upon', '"until further notice".'],
      ['The quality of the materials is ____ important than the price.', 'more', 'most', 'much', 'very', 'So sánh hơn với "than".'],
      ['The director asked that the report ____ finished by Monday.', 'be', 'is', 'was', 'will be', 'Thể giả định sau "ask that".'],
      ['Our team is ____ working on three projects.', 'currently', 'current', 'currents', 'currency', 'Trạng từ giữa "is" và V-ing.'],
      ['The seminar was canceled ____ a lack of interest.', 'owing to', 'because', 'although', 'as', '"owing to + cụm danh từ".'],
    ],
    p6: [
      {
        title: 'Letter: Welcome to a new tenant',
        text: 'Dear Ms. Alvarez,\n\nWelcome to Maple Court Apartments. We hope you will be very happy in your new home.\n\nEnclosed you will find two sets of keys and a copy of the building rules. Please read (1)____ carefully. Rent is due on the first day of each month and can be paid by bank transfer.\n\n(2)____. Simply call the number below, and our maintenance team will normally respond within 24 hours.\n\nThe building manager, Mr. Cole, is (3)____ in his office on the ground floor from 9 a.m. to 5 p.m. on weekdays.',
        qs: [
          ['(1) ____', 'them', 'it', 'they', 'theirs', '"them" thay cho "the building rules" (số nhiều).'],
          ['(2) ____', 'If anything in your apartment needs to be repaired, please let us know.', 'The building has forty apartments.', 'Our company manages several properties.', 'Parking is not available on Maple Street.', 'Câu sau nói gọi đội bảo trì.'],
          ['(3) ____', 'available', 'capable', 'possible', 'probable', '"is available": có mặt, sẵn sàng tiếp.'],
        ],
      },
      {
        title: 'Email: Shipping update',
        text: 'Dear Customer,\n\nGood news! Your order #88213 has left our warehouse and is on (1)____ way to you.\n\nEstimated delivery: Wednesday, June 12\nCarrier: SwiftPost\n\nYou can follow your package at any time by (2)____ the tracking link below. If nobody is at home when the driver arrives, the package will be left at your local post office, (3)____ you can collect it within seven days.\n\nThank you for shopping with us.',
        qs: [
          ['(1) ____', 'its', "it's", 'it', 'their own', 'Tính từ sở hữu "its" (không phải "it\'s").'],
          ['(2) ____', 'clicking', 'click', 'clicked', 'clicks', '"by + V-ing".'],
          ['(3) ____', 'where', 'which', 'when', 'whom', 'Mệnh đề quan hệ chỉ nơi chốn.'],
        ],
      },
    ],
    p7: [
      {
        title: 'Notice: Office kitchen',
        text: 'KITCHEN RULES – 6th Floor\n\nTo keep our shared kitchen pleasant for everyone:\n\n• Wash, dry, and put away your own dishes. Do not leave them in the sink.\n• Label any food you put in the refrigerator with your name and the date.\n• The refrigerator is emptied every Friday at 5 p.m. Unlabeled items and anything more than a week old will be thrown away.\n• Coffee and tea are free. Please tell Angela at reception when supplies are running low.',
        qs: [
          ['What should employees do with their dishes?', 'Wash and put them away', 'Leave them in the sink', 'Give them to Angela', 'Put them in the refrigerator', '"Wash, dry, and put away your own dishes".'],
          ['What happens every Friday?', 'The refrigerator is cleared out.', 'Free lunch is served.', 'The kitchen is closed.', 'New supplies are delivered.', '"The refrigerator is emptied every Friday at 5 p.m."'],
          ['Why would someone speak to Angela?', 'To report that coffee is almost gone', 'To reserve the kitchen', 'To get a label', 'To borrow dishes', '"tell Angela at reception when supplies are running low".'],
        ],
      },
      {
        title: 'Email: Speaking invitation',
        text: 'To: Dr. Samuel Osei\nFrom: Karen Whitlock, Coastal Business Forum\nSubject: Invitation to speak\n\nDear Dr. Osei,\n\nI recently read your article on water-saving technology in Industry Review and found it fascinating. On behalf of the Coastal Business Forum, I would like to invite you to speak at our annual meeting on November 6 in Port Adelaide.\n\nWe expect about 300 business owners to attend. Your talk would last thirty minutes, followed by questions. We would be happy to cover your travel and hotel costs and to pay a speaking fee of $1,000.\n\nCould you let me know by September 15 whether you are able to accept?',
        qs: [
          ['How did Ms. Whitlock learn about Dr. Osei\'s work?', 'She read an article he wrote.', 'She attended his lecture.', 'A colleague recommended him.', 'She saw him on television.', '"I recently read your article".'],
          ['What is Dr. Osei invited to do?', 'Give a talk', 'Write an article', 'Buy new technology', 'Join a committee', '"invite you to speak at our annual meeting".'],
          ['What will the forum pay for?', 'Travel, accommodation, and a fee', 'Only a speaking fee', 'Only a hotel room', 'Printing his article', '"cover your travel and hotel costs and to pay a speaking fee".'],
        ],
      },
      {
        title: 'Article: City bike-sharing program',
        text: 'The city of Norwood will launch a bike-sharing program on April 1, Mayor Diane Castillo announced on Thursday. — [1] — In the first stage, 500 bicycles will be available at 40 stations in the downtown area.\n\nRiders will unlock a bicycle with a smartphone app. — [2] — The first thirty minutes of each trip will cost $1, and each additional thirty minutes will cost $2.\n\nThe mayor said the program is intended to reduce traffic and improve air quality. — [3] — If it proves popular, another 300 bicycles will be added in residential areas next year. — [4] —',
        qs: [
          ['How many bicycles will be available at first?', '500', '40', '300', '800', '"500 bicycles will be available at 40 stations".'],
          ['How much would a 60-minute trip cost?', '$3', '$1', '$2', '$4', '30 phút đầu $1 + 30 phút tiếp theo $2 = $3.'],
          ['In which position does this sentence best belong? "They can return it to any station when they have finished."', '[2]', '[1]', '[3]', '[4]', '"They" chỉ "Riders", "it" chỉ chiếc xe vừa mở khóa.'],
        ],
      },
    ],
  }),
];
