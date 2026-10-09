/**
 * ============================================================================
 *  toeic.ts – Kho đề luyện TOEIC gốc (Listening Part 2–4, Reading Part 5–7)
 * ============================================================================
 *  Đề mô phỏng theo cấu trúc TOEIC L&R. Quy ước: đáp án ĐÚNG ghi đầu tiên,
 *  khi ra đề hệ thống sẽ tự xáo trộn. Mỗi câu có lời giải thích tiếng Việt.
 *  Part 1 (mô tả tranh bằng ảnh thật) nằm ở toeic-part1.ts; đề bổ sung ở toeic-more.ts;
 *  TOEIC Speaking & Writing ở toeic-sw.ts.
 */
import { ExamAudio, ExamMcq, ExamPassage } from '../../models/exam.model';

/** Part 5: [câu có chỗ trống ____, đáp án đúng, sai1, sai2, sai3, giải thích] */
export type Part5Item = [string, string, string, string, string, string];

export const TOEIC_PART5: Part5Item[] = [
  ['All employees must submit ____ expense reports by the end of the month.', 'their', 'them', 'they', 'theirs', 'Cần tính từ sở hữu đứng trước danh từ "expense reports".'],
  ['The new manager is responsible ____ training the sales team.', 'for', 'to', 'at', 'with', '"be responsible for + V-ing": chịu trách nhiệm về việc gì.'],
  ['Ms. Tanaka ____ the proposal to the board yesterday.', 'presented', 'presents', 'will present', 'presenting', '"yesterday" chỉ quá khứ nên dùng thì quá khứ đơn.'],
  ['The conference has been ____ until next Thursday.', 'postponed', 'postpone', 'postponing', 'postpones', 'Bị động hiện tại hoàn thành: has been + V3.'],
  ['We are pleased to announce that sales have increased ____ this quarter.', 'significantly', 'significant', 'significance', 'signify', 'Cần trạng từ bổ nghĩa cho động từ "increased".'],
  ['Please contact the personnel department if you have ____ questions.', 'any', 'each', 'another', 'much', '"any" dùng trong câu điều kiện/phủ định với danh từ đếm được số nhiều.'],
  ['The shipment will arrive ____ Monday morning.', 'on', 'in', 'at', 'by the', 'Dùng "on" trước thứ trong tuần.'],
  ['Mr. Lee has worked for the company ____ 2015.', 'since', 'for', 'during', 'while', '"since + mốc thời gian" dùng với hiện tại hoàn thành.'],
  ['The software is ____ with both Windows and Mac systems.', 'compatible', 'comparable', 'competitive', 'complete', '"compatible with": tương thích với.'],
  ['____ the heavy rain, the outdoor event went ahead as planned.', 'Despite', 'Although', 'However', 'Because', 'Sau "Despite" là cụm danh từ ("the heavy rain").'],
  ['Applicants must have ____ three years of experience in marketing.', 'at least', 'at most', 'at last', 'at once', '"at least": ít nhất.'],
  ['The company offers a wide ____ of health benefits.', 'range', 'rage', 'rank', 'raise', '"a wide range of": nhiều loại.'],
  ['Our office will be closed ____ the national holiday.', 'during', 'while', 'among', 'between', '"during + danh từ" chỉ khoảng thời gian.'],
  ['Ms. Park is ____ qualified candidate for the position.', 'the most', 'most', 'more', 'the more', 'So sánh nhất: the most + tính từ dài.'],
  ['The report must be reviewed ____ before it is sent to clients.', 'carefully', 'careful', 'care', 'carefulness', 'Trạng từ bổ nghĩa cho động từ "reviewed".'],
  ['If the flight ____ delayed, we will notify all passengers.', 'is', 'was', 'will be', 'would be', 'Câu điều kiện loại 1: If + hiện tại đơn, will + V.'],
  ['The director, ____ has been with the firm for ten years, will retire soon.', 'who', 'whom', 'which', 'whose', 'Đại từ quan hệ chỉ người làm chủ ngữ: who.'],
  ['Employees are ____ to park in the visitor lot.', 'not permitted', 'not permit', 'not permitting', 'no permission', 'Bị động: be permitted to + V.'],
  ['The price of fuel has risen ____ over the past year.', 'sharply', 'sharp', 'sharpen', 'sharpness', 'Trạng từ bổ nghĩa cho động từ "has risen".'],
  ['Please turn off all electronic devices ____ the presentation begins.', 'before', 'during', 'since', 'except', '"before" + mệnh đề: trước khi.'],
  ['The new policy applies to ____ full-time and part-time staff.', 'both', 'either', 'neither', 'each', '"both A and B": cả A lẫn B.'],
  ['We need someone who can work ____ under pressure.', 'effectively', 'effective', 'effect', 'effectiveness', 'Trạng từ bổ nghĩa cho "work".'],
  ['The contract ____ signed by both parties before the deadline.', 'must be', 'must', 'must have', 'must being', 'Bị động với động từ khuyết thiếu: must be + V3.'],
  ['Mr. Chen asked ____ he could reschedule the appointment.', 'whether', 'that', 'what', 'which', '"ask whether": hỏi liệu rằng.'],
  ['The restaurant is famous ____ its fresh seafood.', 'for', 'of', 'by', 'from', '"be famous for": nổi tiếng vì.'],
  ['The company plans to ____ its operations to Southeast Asia.', 'expand', 'expense', 'expend', 'expel', '"expand": mở rộng.'],
  ['Ms. Diaz was promoted ____ her outstanding performance.', 'because of', 'because', 'although', 'so that', 'Sau "because of" là cụm danh từ.'],
  ['The meeting room is ____ from 2 p.m. to 4 p.m. on Tuesday.', 'unavailable', 'unavailing', 'unable', 'unaware', '"unavailable": không có sẵn.'],
  ['All invoices should be paid ____ thirty days of receipt.', 'within', 'between', 'among', 'beside', '"within + khoảng thời gian": trong vòng.'],
  ['The manager gave the assistant clear ____ on how to use the system.', 'instructions', 'instruct', 'instructive', 'instructing', 'Cần danh từ sau tính từ "clear".'],
  ['Customer ____ is the main goal of our service team.', 'satisfaction', 'satisfy', 'satisfied', 'satisfactory', 'Cần danh từ làm chủ ngữ.'],
  ['We regret ____ you that your order has been delayed.', 'to inform', 'informing', 'inform', 'informed', '"regret to + V": rất tiếc phải (thông báo).'],
  ['The new printer is much ____ than the old one.', 'faster', 'fast', 'fastest', 'more fast', 'So sánh hơn của tính từ ngắn: faster than.'],
  ['Only authorized personnel ____ enter the laboratory.', 'may', 'might be', 'are', 'having', 'Động từ khuyết thiếu "may": được phép.'],
  ['The seminar will be held ____ the third floor conference room.', 'in', 'on the', 'to', 'over to', '"in + conference room": trong phòng họp.'],
  ['Employees who work overtime will be ____ at a higher rate.', 'compensated', 'compensate', 'compensating', 'compensation', 'Bị động: will be + V3.'],
  ['The budget proposal was rejected ____ it was too expensive.', 'because', 'despite', 'so', 'unless', '"because" + mệnh đề chỉ lý do.'],
  ['Ms. Wong is in charge ____ the marketing campaign.', 'of', 'for', 'to', 'on', '"be in charge of": phụ trách.'],
  ['The hotel guests are requested to ____ their keys at reception.', 'return', 'returns', 'returning', 'returned', 'Sau "to" dùng động từ nguyên mẫu.'],
  ['Business has been ____ slow since the new tax was introduced.', 'unusually', 'unusual', 'usual', 'use', 'Trạng từ bổ nghĩa cho tính từ "slow".'],
  ['Neither the manager ____ the employees knew about the change.', 'nor', 'or', 'and', 'but', '"neither ... nor ...": không ... cũng không ...'],
  ['A full refund is available ____ the product is returned within a week.', 'provided that', 'in spite of', 'as well as', 'owing to', '"provided that": với điều kiện là.'],
  ['The trainer explained the procedure ____ detail.', 'in', 'at', 'with', 'by', '"explain in detail": giải thích chi tiết.'],
  ['The factory produces over 500 units ____ day.', 'a', 'the', 'an', 'each of', '"a day": mỗi ngày.'],
  ['The committee will ____ a decision by the end of the week.', 'reach', 'arrive', 'get to', 'come', '"reach a decision": đưa ra quyết định.'],
  ['Everyone ____ attended the workshop received a certificate.', 'who', 'whom', 'whose', 'what', 'Đại từ quan hệ thay thế cho người, làm chủ ngữ.'],
];

/** Part 2: [câu hỏi/nói, đáp án đúng, sai1, sai2, giải thích] – nghe rồi chọn câu đáp lại phù hợp */
export type Part2Item = [string, string, string, string, string];

export const TOEIC_PART2: Part2Item[] = [
  ['When is the sales meeting?', 'At three o\'clock this afternoon.', 'In the conference room.', 'Yes, I\'ll be there.', 'Câu hỏi "When" → trả lời bằng thời gian.'],
  ['Where can I find the printer paper?', 'In the supply closet.', 'About twenty dollars.', 'Yes, it works well.', 'Câu hỏi "Where" → trả lời bằng địa điểm.'],
  ['Who is in charge of the new project?', 'Ms. Lopez from marketing.', 'Next Monday.', 'Around the corner.', '"Who" → trả lời bằng người.'],
  ['How long will the training take?', 'About two hours.', 'By train.', 'In the morning.', '"How long" → khoảng thời gian.'],
  ['Why was the flight canceled?', 'Because of the storm.', 'At gate twelve.', 'I like flying.', '"Why" → trả lời bằng lý do (Because...).'],
  ['Would you like some coffee?', 'No, thanks. I just had some.', 'Yes, it\'s on the table at noon.', 'I went to the coffee shop.', 'Lời mời → chấp nhận hoặc từ chối lịch sự.'],
  ['Could you send me the report by Friday?', 'Sure, I\'ll email it tomorrow.', 'It was very long.', 'On the second floor.', 'Lời yêu cầu → đồng ý và nói cách thực hiện.'],
  ['Haven\'t you finished the presentation yet?', 'Almost. I just need to add the charts.', 'Yes, at the conference.', 'It\'s a long presentation room.', 'Câu hỏi phủ định → trả lời tình trạng hoàn thành.'],
  ['Should we take a taxi or the subway?', 'The subway is faster at this hour.', 'Yes, I took a taxi.', 'It costs ten dollars.', 'Câu hỏi lựa chọn "A or B" → chọn một.'],
  ['Do you know when the new employee starts?', 'I think it\'s next Monday.', 'She\'s from Canada.', 'For three years.', 'Câu hỏi gián tiếp về thời gian.'],
  ['How much does this laptop cost?', 'It\'s on sale for eight hundred dollars.', 'Very much, thank you.', 'It\'s in the box.', '"How much" (giá tiền) → trả lời bằng số tiền.'],
  ['Why don\'t we order lunch for the team?', 'That\'s a great idea.', 'Because I\'m late.', 'The lunch was delicious.', '"Why don\'t we...?" là lời đề nghị → đồng ý.'],
  ['What time does the bank close?', 'At five thirty on weekdays.', 'Next to the post office.', 'Yes, I have an account.', '"What time" → giờ cụ thể.'],
  ['Who should I give this invoice to?', 'Give it to the accounting office.', 'It\'s due in June.', 'Yes, it\'s invoiced.', '"Who ... to" → người/bộ phận nhận.'],
  ['Is the client coming in person or joining online?', 'She\'ll join us online.', 'Yes, the client called.', 'At the front desk.', 'Câu hỏi lựa chọn → chọn "online".'],
  ['I can\'t find my access card.', 'Did you check the front desk?', 'It\'s a red card.', 'I access the files daily.', 'Tình huống than phiền → gợi ý giải pháp.'],
  ['What did you think of the new policy?', 'It seems fair to me.', 'It was on the board.', 'Yes, I did think.', '"What did you think of...?" hỏi ý kiến.'],
  ['Where should we hold the year-end party?', 'The Grand Hotel has a nice hall.', 'It starts at seven.', 'Last December.', '"Where" → địa điểm đề xuất.'],
  ['Has the delivery arrived?', 'Not yet, but it\'s on its way.', 'It\'s a deliver route.', 'Yes, I arrived early.', 'Câu hỏi Yes/No về hiện tại hoàn thành.'],
  ['You\'re attending the workshop tomorrow, aren\'t you?', 'Yes, I signed up last week.', 'It was a long walk.', 'The workshop room is blue.', 'Câu hỏi đuôi → trả lời xác nhận.'],
  ['How often do you back up your files?', 'Every evening before I leave.', 'By the window.', 'Yes, quite often.', '"How often" → tần suất.'],
  ['Which desk is mine?', 'The one by the window.', 'Two years ago.', 'It\'s made of wood.', '"Which" → chọn một đối tượng cụ thể.'],
  ['Do you mind if I open the window?', 'Not at all, go ahead.', 'It\'s a large window.', 'Yes, it opened at noon.', '"Do you mind if...?" → "Not at all" = không phiền.'],
  ['What\'s the deadline for the application?', 'It closes at the end of the month.', 'I applied last week.', 'On the application form.', '"deadline" → thời hạn.'],
  ['Why is the copy machine making that noise?', 'It needs to be repaired.', 'Three copies, please.', 'He makes a lot of noise.', 'Hỏi lý do → giải thích nguyên nhân.'],
];

/** Part 3: các đoạn hội thoại ngắn, mỗi đoạn 2–3 câu hỏi */
export const TOEIC_PART3: ExamAudio[] = [
  {
    id: 'toeic-p3-1', title: 'Booking a meeting room', titleVi: 'Đặt phòng họp',
    lines: [
      { who: 'A', text: 'Hi, I need to reserve a conference room for Thursday afternoon.', vi: 'Chào, tôi cần đặt phòng họp cho chiều thứ Năm.' },
      { who: 'B', text: 'Room 3B is free from two to four. How many people will attend?', vi: 'Phòng 3B trống từ hai đến bốn giờ. Có bao nhiêu người tham dự?' },
      { who: 'A', text: 'About twelve, and we\'ll need a projector.', vi: 'Khoảng mười hai người, và chúng tôi cần máy chiếu.' },
      { who: 'B', text: 'Then 3B is perfect. I\'ll add it to the calendar now.', vi: 'Vậy 3B là hoàn hảo. Tôi sẽ thêm vào lịch ngay.' },
    ],
    mcq: [
      { q: 'What does the woman want to do?', a: 'Reserve a meeting room', wrong: ['Cancel a flight', 'Order a projector', 'Change her schedule'], ex: 'Người nói A: "I need to reserve a conference room".' },
      { q: 'How many people will attend?', a: 'About twelve', wrong: ['About two', 'About four', 'About twenty'], ex: '"About twelve".' },
      { q: 'What will the man do next?', a: 'Update the calendar', wrong: ['Call the client', 'Clean the room', 'Buy a projector'], ex: '"I\'ll add it to the calendar now".' },
    ],
  },
  {
    id: 'toeic-p3-2', title: 'A delayed shipment', titleVi: 'Lô hàng bị chậm',
    lines: [
      { who: 'A', text: 'Our shipment of office chairs was supposed to arrive yesterday.', vi: 'Lô ghế văn phòng lẽ ra đến hôm qua.' },
      { who: 'B', text: 'I apologize. There was a delay at the port because of bad weather.', vi: 'Tôi xin lỗi. Có sự chậm trễ ở cảng vì thời tiết xấu.' },
      { who: 'A', text: 'When can we expect them now?', vi: 'Bây giờ khi nào chúng tôi nhận được?' },
      { who: 'B', text: 'By Friday at the latest. I\'ll also give you a ten percent discount.', vi: 'Muộn nhất là thứ Sáu. Tôi cũng sẽ giảm giá mười phần trăm cho bạn.' },
    ],
    mcq: [
      { q: 'What is the problem?', a: 'A shipment is late.', wrong: ['A chair is broken.', 'The price is too high.', 'An order was canceled.'] },
      { q: 'What caused the delay?', a: 'Bad weather', wrong: ['A strike', 'A wrong address', 'A lost invoice'] },
      { q: 'What does the man offer?', a: 'A discount', wrong: ['A refund', 'A free chair', 'A phone call'] },
    ],
  },
  {
    id: 'toeic-p3-3', title: 'Job interview follow-up', titleVi: 'Sau buổi phỏng vấn',
    lines: [
      { who: 'A', text: 'Thank you for coming in, Ms. Reyes. Your résumé is impressive.', vi: 'Cảm ơn cô Reyes đã đến. Sơ yếu lý lịch của cô rất ấn tượng.' },
      { who: 'B', text: 'Thank you. I\'ve managed a sales team for five years.', vi: 'Cảm ơn ông. Tôi đã quản lý một nhóm bán hàng trong năm năm.' },
      { who: 'A', text: 'The position requires some travel. Is that a problem?', vi: 'Vị trí này cần đi công tác một chút. Điều đó có vấn đề gì không?' },
      { who: 'B', text: 'Not at all. I enjoy traveling.', vi: 'Hoàn toàn không. Tôi thích đi du lịch.' },
    ],
    mcq: [
      { q: 'Where does this conversation most likely take place?', a: 'At a job interview', wrong: ['At an airport', 'At a bank', 'At a sales meeting'] },
      { q: 'What experience does the woman mention?', a: 'Managing a sales team', wrong: ['Teaching English', 'Designing software', 'Running a hotel'] },
      { q: 'How does the woman feel about travel?', a: 'She enjoys it.', wrong: ['She dislikes it.', 'She is afraid of it.', 'She has no time.'] },
    ],
  },
  {
    id: 'toeic-p3-4', title: 'Printer problem', titleVi: 'Máy in bị hỏng',
    lines: [
      { who: 'A', text: 'The printer on the second floor keeps jamming.', vi: 'Máy in ở tầng hai cứ bị kẹt giấy.' },
      { who: 'B', text: 'Did you call the technician?', vi: 'Bạn đã gọi kỹ thuật viên chưa?' },
      { who: 'A', text: 'Yes, but he can\'t come until tomorrow morning.', vi: 'Rồi, nhưng anh ấy đến được sớm nhất là sáng mai.' },
      { who: 'B', text: 'In that case, let\'s use the one in the copy room today.', vi: 'Vậy thì hôm nay hãy dùng máy trong phòng photocopy.' },
    ],
    mcq: [
      { q: 'What is the problem?', a: 'A printer is not working properly.', wrong: ['A computer is missing.', 'The Internet is down.', 'A room is too cold.'] },
      { q: 'When will the technician come?', a: 'Tomorrow morning', wrong: ['This afternoon', 'Tonight', 'Next week'] },
      { q: 'What do the speakers decide to do?', a: 'Use another printer', wrong: ['Buy a new printer', 'Leave the office', 'Cancel the project'] },
    ],
  },
  {
    id: 'toeic-p3-5', title: 'Business trip plans', titleVi: 'Kế hoạch công tác',
    lines: [
      { who: 'A', text: 'I\'m flying to Chicago on Monday for the trade show.', vi: 'Tôi bay đến Chicago vào thứ Hai để dự hội chợ thương mại.' },
      { who: 'B', text: 'Have you booked a hotel yet?', vi: 'Bạn đã đặt khách sạn chưa?' },
      { who: 'A', text: 'Not yet. Do you have any recommendations near the convention center?', vi: 'Chưa. Bạn có gợi ý khách sạn nào gần trung tâm hội nghị không?' },
      { who: 'B', text: 'The Lakeside Inn is great and it\'s only a five-minute walk.', vi: 'Lakeside Inn rất tốt và chỉ cách năm phút đi bộ.' },
    ],
    mcq: [
      { q: 'Why is the man going to Chicago?', a: 'To attend a trade show', wrong: ['To visit family', 'To interview for a job', 'To buy a house'] },
      { q: 'What does the man ask for?', a: 'A hotel recommendation', wrong: ['A taxi number', 'A flight ticket', 'A restaurant menu'] },
      { q: 'What is mentioned about the Lakeside Inn?', a: 'It is close to the convention center.', wrong: ['It is very cheap.', 'It has a swimming pool.', 'It is fully booked.'] },
    ],
  },
  {
    id: 'toeic-p3-6', title: 'Office relocation', titleVi: 'Chuyển văn phòng',
    lines: [
      { who: 'A', text: 'Did you hear that our department is moving to the new building next month?', vi: 'Bạn nghe tin phòng ta chuyển sang tòa nhà mới tháng sau chưa?' },
      { who: 'B', text: 'Yes. I hope the parking there is better.', vi: 'Có. Tôi hy vọng chỗ đậu xe ở đó tốt hơn.' },
      { who: 'A', text: 'There\'s an underground garage, and a free shuttle from the station.', vi: 'Có hầm để xe, và xe đưa đón miễn phí từ nhà ga.' },
      { who: 'B', text: 'That\'s a relief. I\'ll start packing my files this week.', vi: 'Thế thì nhẹ nhõm. Tôi sẽ bắt đầu đóng gói hồ sơ trong tuần này.' },
    ],
    mcq: [
      { q: 'What is the topic of the conversation?', a: 'An office move', wrong: ['A new product', 'A budget cut', 'A training session'] },
      { q: 'What is the man concerned about?', a: 'Parking', wrong: ['Salary', 'Noise', 'Meeting times'] },
      { q: 'What will the man do this week?', a: 'Pack his files', wrong: ['Sign a lease', 'Call a shuttle', 'Visit a client'] },
    ],
  },
];

/** Part 4: các bài nói ngắn (thông báo, voicemail, quảng cáo...) */
export const TOEIC_PART4: ExamAudio[] = [
  {
    id: 'toeic-p4-1', title: 'Store announcement', titleVi: 'Thông báo ở cửa hàng',
    lines: [
      { who: 'A', text: 'Attention shoppers. Our summer sale begins tomorrow at nine a.m.', vi: 'Xin chú ý quý khách. Đợt giảm giá mùa hè bắt đầu vào chín giờ sáng mai.' },
      { who: 'A', text: 'All clothing will be thirty percent off, and shoes will be half price.', vi: 'Toàn bộ quần áo giảm ba mươi phần trăm, giày giảm một nửa.' },
      { who: 'A', text: 'The first fifty customers will also receive a free gift bag.', vi: 'Năm mươi khách hàng đầu tiên còn nhận một túi quà miễn phí.' },
    ],
    mcq: [
      { q: 'What is being announced?', a: 'A sales event', wrong: ['A store closing', 'A new manager', 'A delivery delay'] },
      { q: 'How much are the shoes?', a: 'Half price', wrong: ['Thirty percent off', 'Free', 'Full price'] },
      { q: 'Who will get a free gift bag?', a: 'The first fifty customers', wrong: ['All members', 'Children only', 'Anyone with a coupon'] },
    ],
  },
  {
    id: 'toeic-p4-2', title: 'Voicemail from a doctor\'s office', titleVi: 'Tin nhắn thoại từ phòng khám',
    lines: [
      { who: 'A', text: 'Hello, Mr. Novak. This is Dr. Ito\'s office calling about your appointment on Wednesday.', vi: 'Xin chào ông Novak. Đây là phòng khám bác sĩ Ito gọi về cuộc hẹn thứ Tư của ông.' },
      { who: 'A', text: 'The doctor has an emergency, so we need to move it to Thursday at ten.', vi: 'Bác sĩ có việc khẩn cấp nên chúng tôi cần dời sang thứ Năm lúc mười giờ.' },
      { who: 'A', text: 'Please call us back at 555-0148 to confirm as soon as possible.', vi: 'Vui lòng gọi lại số 555-0148 để xác nhận sớm nhất có thể.' },
    ],
    mcq: [
      { q: 'Why is the speaker calling?', a: 'To change an appointment', wrong: ['To sell insurance', 'To ask for payment', 'To give test results'] },
      { q: 'What is the new time?', a: 'Thursday at ten', wrong: ['Wednesday at ten', 'Thursday at two', 'Friday morning'] },
      { q: 'What is Mr. Novak asked to do?', a: 'Call the office back', wrong: ['Bring his insurance card', 'Arrive early', 'Visit the pharmacy'] },
    ],
  },
  {
    id: 'toeic-p4-3', title: 'Radio advertisement', titleVi: 'Quảng cáo trên radio',
    lines: [
      { who: 'A', text: 'Looking for a new place to work out? Try FitZone Gym on Main Street.', vi: 'Đang tìm nơi tập luyện mới? Hãy thử phòng tập FitZone trên phố Main.' },
      { who: 'A', text: 'Join this month and get your first three months at half price.', vi: 'Đăng ký trong tháng này và nhận ba tháng đầu với nửa giá.' },
      { who: 'A', text: 'We are open twenty-four hours a day, seven days a week.', vi: 'Chúng tôi mở cửa hai mươi bốn giờ mỗi ngày, bảy ngày mỗi tuần.' },
    ],
    mcq: [
      { q: 'What is being advertised?', a: 'A gym', wrong: ['A restaurant', 'A bank', 'A hotel'] },
      { q: 'What special offer is mentioned?', a: 'Half price for three months', wrong: ['A free towel', 'No membership fee forever', 'A free personal trainer'] },
      { q: 'What is said about opening hours?', a: 'It never closes.', wrong: ['It closes at nine.', 'It closes on Sundays.', 'It opens at noon.'] },
    ],
  },
  {
    id: 'toeic-p4-4', title: 'Tour guide talk', titleVi: 'Hướng dẫn viên phát biểu',
    lines: [
      { who: 'A', text: 'Welcome to the Riverside Museum. My name is Carla, and I\'ll be your guide today.', vi: 'Chào mừng đến Bảo tàng Riverside. Tôi là Carla, hướng dẫn viên của các bạn hôm nay.' },
      { who: 'A', text: 'The tour will last about ninety minutes, and photography is allowed in every room except the last one.', vi: 'Chuyến tham quan kéo dài khoảng chín mươi phút, và được chụp ảnh ở mọi phòng trừ phòng cuối.' },
      { who: 'A', text: 'Afterward, you\'re welcome to visit the gift shop on the ground floor.', vi: 'Sau đó, mời các bạn ghé cửa hàng quà tặng ở tầng trệt.' },
    ],
    mcq: [
      { q: 'Who is the speaker?', a: 'A museum guide', wrong: ['A shop owner', 'A photographer', 'A teacher'] },
      { q: 'How long is the tour?', a: 'About ninety minutes', wrong: ['About thirty minutes', 'About two hours', 'All day'] },
      { q: 'Where is the gift shop?', a: 'On the ground floor', wrong: ['On the roof', 'Next to the parking lot', 'In the last room'] },
    ],
  },
  {
    id: 'toeic-p4-5', title: 'Company announcement', titleVi: 'Thông báo nội bộ công ty',
    lines: [
      { who: 'A', text: 'Good morning, everyone. I have some news about next week\'s schedule.', vi: 'Chào buổi sáng mọi người. Tôi có tin về lịch làm việc tuần sau.' },
      { who: 'A', text: 'The building\'s power will be shut off on Saturday for maintenance, so please save your work and shut down your computers before you leave on Friday.', vi: 'Điện của tòa nhà sẽ bị cắt vào thứ Bảy để bảo trì, nên vui lòng lưu công việc và tắt máy tính trước khi về vào thứ Sáu.' },
      { who: 'A', text: 'Thank you for your cooperation.', vi: 'Cảm ơn sự hợp tác của mọi người.' },
    ],
    mcq: [
      { q: 'What will happen on Saturday?', a: 'The power will be turned off.', wrong: ['The office will move.', 'A party will be held.', 'New computers will arrive.'] },
      { q: 'What are employees asked to do on Friday?', a: 'Shut down their computers', wrong: ['Work overtime', 'Attend a meeting', 'Clean their desks'] },
      { q: 'Why will the power be off?', a: 'For maintenance', wrong: ['Because of a storm', 'To save money', 'For a safety drill'] },
    ],
  },
];

/** Part 6: điền từ vào đoạn văn – mỗi chỗ trống là một câu hỏi. Đoạn văn dùng (1) (2) (3) đánh dấu chỗ trống */
export const TOEIC_PART6: (Omit<ExamPassage, 'mcq'> & { mcq: ExamMcq[] })[] = [
  {
    id: 'toeic-p6-1', title: 'Email: Meeting change', titleVi: 'Email: Đổi lịch họp',
    text: 'Dear team,\nI am writing to inform you that Friday\'s meeting has been (1)____ to Monday at 10 a.m. because the director will be traveling. Please (2)____ your calendars accordingly. The agenda has not changed, (3)____ we will discuss next quarter\'s budget and the new hiring plan.\nBest regards,\nDaniel',
    textVi: 'Gửi cả nhóm,\nTôi viết thư để thông báo cuộc họp thứ Sáu đã được dời sang thứ Hai lúc 10 giờ sáng vì giám đốc sẽ đi công tác. Vui lòng cập nhật lịch của bạn. Chương trình không đổi, chúng ta sẽ thảo luận ngân sách quý tới và kế hoạch tuyển dụng mới.\nTrân trọng,\nDaniel',
    mcq: [
      { q: '(1) ____', a: 'rescheduled', wrong: ['reschedule', 'rescheduling', 'reschedules'], ex: 'Bị động hiện tại hoàn thành: has been + V3.' },
      { q: '(2) ____', a: 'update', wrong: ['updates', 'updated', 'updating'], ex: 'Câu mệnh lệnh: Please + động từ nguyên mẫu.' },
      { q: '(3) ____', a: 'so', wrong: ['but', 'although', 'or'], ex: 'Ý bổ sung/kết quả: "so we will discuss..." (nên chúng ta sẽ thảo luận).' },
    ],
  },
  {
    id: 'toeic-p6-2', title: 'Notice: Parking policy', titleVi: 'Thông báo: Quy định đỗ xe',
    text: 'NOTICE TO ALL EMPLOYEES\nStarting June 1, employees must display a parking (1)____ on their vehicles. Permits can be picked up at the security office. Vehicles without a permit will be (2)____ at the owner\'s expense. (3)____, visitors may use the north lot for up to two hours.',
    textVi: 'THÔNG BÁO CHO TOÀN THỂ NHÂN VIÊN\nTừ ngày 1 tháng Sáu, nhân viên phải dán giấy phép đỗ xe trên xe. Có thể nhận giấy phép ở phòng bảo vệ. Xe không có giấy phép sẽ bị kéo đi và chủ xe chịu chi phí. Tuy nhiên, khách có thể dùng bãi phía bắc tối đa hai giờ.',
    mcq: [
      { q: '(1) ____', a: 'permit', wrong: ['permission', 'permitted', 'permitting'], ex: '"parking permit": giấy phép đỗ xe (danh từ).' },
      { q: '(2) ____', a: 'towed', wrong: ['tow', 'towing', 'tows'], ex: 'Bị động tương lai: will be + V3.' },
      { q: '(3) ____', a: 'However', wrong: ['Therefore', 'For example', 'In addition'], ex: 'Đối lập với câu trước (nhân viên bị hạn chế, khách thì được): However.' },
    ],
  },
  {
    id: 'toeic-p6-3', title: 'Letter: Order confirmation', titleVi: 'Thư: Xác nhận đơn hàng',
    text: 'Dear Ms. Alvarez,\nThank you for your (1)____ with Hartley Furniture. Your order of two desks and four chairs will be (2)____ on March 12. If you are not at home, the driver will leave a card with instructions. We hope you enjoy your purchase and (3)____ you to shop with us again.',
    textVi: 'Kính gửi bà Alvarez,\nCảm ơn bà đã đặt hàng tại Hartley Furniture. Đơn hàng gồm hai bàn và bốn ghế sẽ được giao vào ngày 12 tháng Ba. Nếu bà không có nhà, tài xế sẽ để lại một tấm thẻ hướng dẫn. Chúng tôi hy vọng bà hài lòng và mong bà tiếp tục mua sắm cùng chúng tôi.',
    mcq: [
      { q: '(1) ____', a: 'order', wrong: ['ordered', 'ordering', 'orders'], ex: 'Cần danh từ sau "your": order.' },
      { q: '(2) ____', a: 'delivered', wrong: ['deliver', 'delivering', 'delivery'], ex: 'Bị động tương lai: will be delivered.' },
      { q: '(3) ____', a: 'invite', wrong: ['invites', 'inviting', 'invited'], ex: 'Sau "We hope you enjoy ... and" song song với "hope" → "invite".' },
    ],
  },
  {
    id: 'toeic-p6-4', title: 'Article: New library hours', titleVi: 'Bài báo: Giờ mở cửa thư viện mới',
    text: 'The Central Library will extend its opening hours (1)____ September. The library will now open at 8 a.m. and close at 9 p.m. on weekdays. Library director Mia Cho said the change was a response to (2)____ requests from students. "We want to make our services as (3)____ as possible," she said.',
    textVi: 'Thư viện Trung tâm sẽ kéo dài giờ mở cửa từ tháng Chín. Thư viện sẽ mở lúc 8 giờ sáng và đóng lúc 9 giờ tối các ngày trong tuần. Giám đốc Mia Cho cho biết thay đổi này đáp ứng các yêu cầu từ sinh viên. "Chúng tôi muốn dịch vụ dễ tiếp cận nhất có thể", bà nói.',
    mcq: [
      { q: '(1) ____', a: 'beginning in', wrong: ['begin to', 'began', 'begins'], ex: '"beginning in September": bắt đầu từ tháng Chín.' },
      { q: '(2) ____', a: 'repeated', wrong: ['repeat', 'repeating', 'repeatedly'], ex: 'Cần tính từ đứng trước danh từ "requests": repeated requests.' },
      { q: '(3) ____', a: 'accessible', wrong: ['access', 'accessibly', 'accessing'], ex: 'Cấu trúc as + tính từ + as possible.' },
    ],
  },
];

/** Part 7: đọc hiểu đoạn văn (email, thông báo, quảng cáo, bài báo...) */
export const TOEIC_PART7: ExamPassage[] = [
  {
    id: 'toeic-p7-1', title: 'Email: Order delay', titleVi: 'Email: Đơn hàng bị chậm',
    text: 'To: Kevin Marsh\nFrom: Customer Care, BrightHome Store\nSubject: Your order #4471\n\nDear Mr. Marsh,\nWe are sorry to tell you that your standing lamp is out of stock and will ship on June 20 instead of June 12. If you prefer, you may cancel the order for a full refund or choose a similar lamp from our catalog at no extra cost. Please reply to this email by June 10 to let us know your decision.\nSincerely,\nAmy Ross',
    textVi: 'Kính gửi ông Marsh,\nChúng tôi rất tiếc phải báo đèn cây của ông đã hết hàng và sẽ được gửi vào ngày 20/6 thay vì 12/6. Nếu muốn, ông có thể hủy đơn để được hoàn tiền đầy đủ hoặc chọn một chiếc đèn tương tự trong danh mục mà không tốn thêm phí. Vui lòng trả lời email trước ngày 10/6 để cho chúng tôi biết quyết định.\nTrân trọng,\nAmy Ross',
    mcq: [
      { q: 'Why was the email sent?', a: 'To announce a shipping delay', wrong: ['To advertise a sale', 'To confirm a payment', 'To request a review'], ex: 'Đèn hết hàng, gửi trễ hơn.' },
      { q: 'What can Mr. Marsh do?', a: 'Choose a different lamp', wrong: ['Pick up the lamp today', 'Get a discount coupon', 'Return it for store credit only'], ex: '"choose a similar lamp from our catalog at no extra cost".' },
      { q: 'By when should Mr. Marsh reply?', a: 'June 10', wrong: ['June 12', 'June 20', 'June 30'], ex: '"reply ... by June 10".' },
    ],
  },
  {
    id: 'toeic-p7-2', title: 'Notice: Building maintenance', titleVi: 'Thông báo: Bảo trì tòa nhà',
    text: 'NOTICE\nThe elevators in Tower B will be out of service on Saturday, October 8, from 8 a.m. to 4 p.m. for scheduled maintenance. Residents should use the stairs or the elevators in Tower A, which will operate as usual. For tenants who need assistance, please contact the front desk at least one day in advance. We apologize for any inconvenience.',
    textVi: 'THÔNG BÁO\nThang máy ở Tòa B sẽ ngừng hoạt động vào thứ Bảy 8/10 từ 8 giờ sáng đến 4 giờ chiều để bảo trì theo lịch. Cư dân nên dùng cầu thang hoặc thang máy Tòa A vẫn hoạt động bình thường. Những ai cần hỗ trợ vui lòng liên hệ quầy lễ tân trước ít nhất một ngày. Chúng tôi xin lỗi vì sự bất tiện.',
    mcq: [
      { q: 'What is the purpose of the notice?', a: 'To announce a temporary service interruption', wrong: ['To advertise apartments', 'To ask for rent', 'To introduce a new manager'], ex: 'Thang máy ngừng hoạt động tạm thời để bảo trì.' },
      { q: 'What are residents of Tower B advised to do?', a: 'Use the stairs or Tower A elevators', wrong: ['Stay home all day', 'Move to Tower C', 'Call a technician'], ex: '"use the stairs or the elevators in Tower A".' },
      { q: 'How can tenants get help?', a: 'Contact the front desk in advance', wrong: ['Send an email on Saturday', 'Visit Tower A', 'Wait in the lobby'], ex: '"contact the front desk at least one day in advance".' },
    ],
  },
  {
    id: 'toeic-p7-3', title: 'Advertisement: Language courses', titleVi: 'Quảng cáo: Khóa học ngoại ngữ',
    text: 'SPEAK WITH CONFIDENCE!\nGlobalTalk Language Center offers evening courses in English, Spanish and Japanese. Classes meet twice a week for eight weeks, and each group has no more than ten students. Register before March 1 and receive a free workbook. A placement test is required for all new students and can be taken online or at our office. Visit www.globaltalk.example or call 555-0199.',
    textVi: 'TỰ TIN GIAO TIẾP!\nTrung tâm ngoại ngữ GlobalTalk có các khóa buổi tối tiếng Anh, Tây Ban Nha và Nhật. Lớp học hai buổi mỗi tuần trong tám tuần, mỗi nhóm không quá mười học viên. Đăng ký trước 1/3 để nhận sách bài tập miễn phí. Mọi học viên mới cần làm bài kiểm tra xếp lớp, có thể làm trực tuyến hoặc tại văn phòng.',
    mcq: [
      { q: 'What is being advertised?', a: 'Language classes', wrong: ['A bookstore', 'Online shopping', 'A travel agency'], ex: 'Các khóa tiếng Anh, Tây Ban Nha, Nhật.' },
      { q: 'What is offered to early registrants?', a: 'A free workbook', wrong: ['A discount ticket', 'A private lesson', 'A dictionary'], ex: '"Register before March 1 and receive a free workbook".' },
      { q: 'What must new students do?', a: 'Take a placement test', wrong: ['Buy a textbook', 'Pay in cash', 'Attend an interview'], ex: '"A placement test is required for all new students".' },
    ],
  },
  {
    id: 'toeic-p7-4', title: 'Article: Company expansion', titleVi: 'Bài báo: Công ty mở rộng',
    text: 'SEOUL — Nova Electronics announced on Tuesday that it will open a new factory in Vietnam next year. The plant, which will employ about 1,200 workers, will produce components for smartphones. CEO Jin Park said the move would lower production costs and shorten delivery times to Asian customers. Local officials welcomed the investment, saying it would create jobs in the region. Construction is expected to begin in January.',
    textVi: 'SEOUL — Nova Electronics thông báo hôm thứ Ba sẽ mở một nhà máy mới ở Việt Nam vào năm tới. Nhà máy sử dụng khoảng 1.200 công nhân, sản xuất linh kiện cho điện thoại thông minh. Tổng giám đốc Jin Park cho biết động thái này sẽ giảm chi phí sản xuất và rút ngắn thời gian giao hàng cho khách hàng châu Á. Chính quyền địa phương hoan nghênh khoản đầu tư này vì tạo việc làm. Việc xây dựng dự kiến bắt đầu vào tháng Giêng.',
    mcq: [
      { q: 'What is the article mainly about?', a: 'A company\'s plan to open a factory', wrong: ['A new smartphone model', 'A change of CEO', 'A workers\' strike'], ex: 'Nova Electronics mở nhà máy mới.' },
      { q: 'What reason does the CEO give for the move?', a: 'It will reduce costs and delivery times.', wrong: ['Taxes are lower in Korea.', 'Workers are more skilled.', 'The old factory burned down.'], ex: '"lower production costs and shorten delivery times".' },
      { q: 'When will construction start?', a: 'In January', wrong: ['On Tuesday', 'Next week', 'In December'], ex: '"Construction is expected to begin in January".' },
    ],
  },
  {
    id: 'toeic-p7-5', title: 'Text messages: Catering', titleVi: 'Tin nhắn: Đặt tiệc',
    text: 'Lena (9:02 a.m.): Hi Omar, did you confirm the caterer for Friday\'s client lunch?\nOmar (9:05 a.m.): Yes, Sunrise Catering will deliver sandwiches and salads at 11:30.\nLena (9:06 a.m.): Great. How many people did you order for?\nOmar (9:08 a.m.): Twenty. But two clients just canceled, so I\'ll call to reduce it to eighteen.\nLena (9:09 a.m.): Good idea. And please ask about vegetarian options.',
    textVi: 'Lena: Chào Omar, bạn đã xác nhận nhà cung cấp tiệc cho bữa trưa khách hàng thứ Sáu chưa?\nOmar: Rồi, Sunrise Catering sẽ giao sandwich và salad lúc 11:30.\nLena: Tốt. Bạn đặt cho bao nhiêu người?\nOmar: Hai mươi. Nhưng hai khách vừa hủy, nên tôi sẽ gọi để giảm còn mười tám.\nLena: Ý hay. Và hãy hỏi thêm về món chay.',
    mcq: [
      { q: 'What are the writers mainly discussing?', a: 'Arrangements for a lunch', wrong: ['A job application', 'A budget report', 'A flight schedule'], ex: 'Đặt tiệc trưa cho khách.' },
      { q: 'Why will Omar call the caterer?', a: 'To change the number of meals', wrong: ['To cancel the lunch', 'To change the delivery time', 'To pay the bill'], ex: 'Hai khách hủy nên giảm còn 18.' },
      { q: 'What does Lena ask Omar to do?', a: 'Ask about vegetarian food', wrong: ['Order more salads', 'Invite two more clients', 'Reserve a room'], ex: '"please ask about vegetarian options".' },
    ],
  },
  {
    id: 'toeic-p7-6', title: 'Schedule: Training day', titleVi: 'Lịch: Ngày tập huấn',
    text: 'NEW EMPLOYEE TRAINING – Tuesday, May 6\n9:00 – 9:30 Welcome and introductions (Room 101)\n9:30 – 11:00 Company policies (Room 101)\n11:00 – 12:00 Safety procedures (Factory floor)\n12:00 – 1:00 Lunch (Cafeteria, provided)\n1:00 – 3:00 Software training (Computer Lab)\n3:00 – 3:30 Q&A with department managers (Room 101)\nPlease bring your ID badge and a notebook.',
    textVi: 'TẬP HUẤN NHÂN VIÊN MỚI – Thứ Ba 6/5\n9:00–9:30 Chào mừng và giới thiệu (Phòng 101)\n9:30–11:00 Chính sách công ty (Phòng 101)\n11:00–12:00 Quy trình an toàn (Khu nhà máy)\n12:00–1:00 Ăn trưa (Căng-tin, được cung cấp)\n1:00–3:00 Đào tạo phần mềm (Phòng máy tính)\n3:00–3:30 Hỏi đáp với quản lý các phòng (Phòng 101)\nVui lòng mang thẻ nhân viên và một cuốn sổ.',
    mcq: [
      { q: 'Where will safety procedures be taught?', a: 'On the factory floor', wrong: ['In Room 101', 'In the cafeteria', 'In the Computer Lab'], ex: '11:00–12:00 Safety procedures (Factory floor).' },
      { q: 'What is provided at noon?', a: 'Lunch', wrong: ['A notebook', 'A laptop', 'An ID badge'], ex: '"Lunch (Cafeteria, provided)".' },
      { q: 'What time does the training end?', a: '3:30', wrong: ['3:00', '12:00', '4:00'], ex: 'Phiên cuối kết thúc lúc 3:30.' },
    ],
  },
];
