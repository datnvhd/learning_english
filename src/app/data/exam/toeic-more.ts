/**
 * ============================================================================
 *  toeic-more.ts – Bộ đề TOEIC Listening & Reading bổ sung (Part 2–7)
 * ============================================================================
 *  Bổ sung các dạng câu hỏi mới của đề TOEIC hiện hành:
 *   - Part 3/4 "Look at the graphic": hội thoại/bài nói kèm bảng biểu (trường `graphic`)
 *   - Part 6: câu hỏi chọn CÂU phù hợp điền vào đoạn văn (sentence insertion)
 *   - Part 7: đọc hiểu đa văn bản (email + hóa đơn), câu hỏi vị trí câu [1]–[4],
 *     câu hỏi ý định người viết trong đoạn chat ("What does ... mean when ...")
 *  Quy ước giống toeic.ts: đáp án ĐÚNG ghi đầu tiên, hệ thống tự xáo trộn khi ra đề.
 */
import { ExamAudio, ExamPassage } from '../../models/exam.model';
import { Part2Item, Part5Item } from './toeic';

export const TOEIC_PART2_MORE: Part2Item[] = [
  ['Where is the nearest post office?', 'It\'s two blocks from here.', 'I sent it yesterday.', 'Yes, the office is near.', '"Where" → vị trí. Bẫy lặp lại từ "office".'],
  ['When will the renovation be finished?', 'By the end of next month.', 'In the lobby.', 'The builders are very skilled.', '"When" → thời gian.'],
  ['Who approved the budget?', 'The finance director did.', 'About ten thousand dollars.', 'Yes, it was approved.', '"Who" → người. Câu hỏi Wh- không trả lời bằng Yes/No.'],
  ['Would you like me to book a table?', 'Yes, for four people, please.', 'The table is made of glass.', 'I\'ve already read that book.', 'Lời đề nghị giúp đỡ → nhận lời kèm chi tiết. Bẫy "book" (đặt chỗ / quyển sách).'],
  ['Why did the store close early today?', 'There was a power outage.', 'At six o\'clock.', 'It\'s close to the station.', '"Why" → lý do. Bẫy "close" (đóng cửa / gần).'],
  ['How was the conference in Tokyo?', 'Very informative.', 'By plane.', 'Next Tuesday.', '"How was...?" hỏi nhận xét → trả lời bằng tính từ đánh giá.'],
  ['Isn\'t Mr. Kim on vacation this week?', 'No, he came back yesterday.', 'A two-week vacation.', 'He likes the beach.', 'Câu hỏi phủ định → trả lời theo sự thật (No = anh ấy không đi nghỉ).'],
  ['Can you help me move these boxes?', 'Sure, where do you want them?', 'They\'re cardboard boxes.', 'I moved here last year.', 'Lời nhờ → đồng ý và hỏi thêm chi tiết. Bẫy "move/moved".'],
  ['Which supplier offers the lowest price?', 'Brightline, by about five percent.', 'Yes, it\'s a low price.', 'We supply offices.', '"Which" → chọn một đối tượng cụ thể.'],
  ['The printer on the third floor is out of order again.', 'I\'ll call the technician.', 'In alphabetical order.', 'Three copies each.', 'Câu thông báo sự cố → phản hồi bằng giải pháp. Bẫy "order".'],
  ['Should I send the invoice by email or by mail?', 'Email is fine.', 'Yes, I sent it.', 'The mail room is downstairs.', 'Câu hỏi lựa chọn → chọn một phương án.'],
  ['How many people applied for the position?', 'Over fifty so far.', 'For the sales position.', 'You can apply online.', '"How many" → số lượng.'],
  ['Where did you put the contract?', 'It\'s in the top drawer.', 'Yes, I signed it.', 'A two-year contract.', '"Where" → vị trí.'],
  ['Let\'s take a short break.', 'Good idea. I need some coffee.', 'The glass is broken.', 'It took a long time.', 'Lời đề nghị "Let\'s..." → đồng ý. Bẫy âm gần giống "break/broken".'],
  ['Who\'s leading the training session tomorrow?', 'I think it\'s Ms. Rivera.', 'It lasts two hours.', 'In Room 5.', '"Who" → người.'],
];

export const TOEIC_PART3_MORE: ExamAudio[] = [
  {
    id: 'toeic-p3-7', title: 'Choosing a venue', titleVi: 'Chọn địa điểm tổ chức',
    graphic: {
      title: 'Venue price list',
      text: 'Venue | Capacity | Price\nOak Room | 60 people | $700\nGarden Hall | 80 people | $900\nRiver Room | 120 people | $1,300\nSky Lounge | 150 people | $1,600',
    },
    lines: [
      { who: 'A', text: 'We need a room for the product launch. About a hundred guests have confirmed.', vi: 'Chúng ta cần một phòng cho buổi ra mắt sản phẩm. Khoảng một trăm khách đã xác nhận.' },
      { who: 'B', text: 'Then the Oak Room and the Garden Hall are too small.', vi: 'Vậy thì phòng Oak và sảnh Garden quá nhỏ.' },
      { who: 'A', text: 'Right. The Sky Lounge has a great view, but it\'s over our budget.', vi: 'Đúng vậy. Sky Lounge có tầm nhìn đẹp nhưng vượt ngân sách của chúng ta.' },
      { who: 'B', text: 'Let\'s book the other one, then. I\'ll call them this afternoon to check if it\'s available on the fourteenth.', vi: 'Vậy đặt phòng còn lại đi. Chiều nay tôi sẽ gọi hỏi xem ngày 14 còn trống không.' },
    ],
    mcq: [
      { q: 'What event are the speakers planning?', a: 'A product launch', wrong: ['A retirement party', 'A job fair', 'A training course'], ex: '"a room for the product launch".' },
      { q: 'Look at the graphic. How much will the speakers probably pay?', a: '$1,300', wrong: ['$700', '$900', '$1,600'], ex: 'Cần phòng cho ~100 người, Sky Lounge vượt ngân sách → River Room (120 người, $1,300).' },
      { q: 'What will the man do this afternoon?', a: 'Check the availability of a room', wrong: ['Send invitations', 'Visit the Sky Lounge', 'Change the date of the event'], ex: '"I\'ll call them this afternoon to check if it\'s available".' },
    ],
  },
  {
    id: 'toeic-p3-8', title: 'Returning an item', titleVi: 'Trả lại sản phẩm',
    lines: [
      { who: 'A', text: 'Hi, I bought this coffee maker here last week, but it leaks water.', vi: 'Chào anh, tuần trước tôi mua máy pha cà phê này ở đây nhưng nó bị rỉ nước.' },
      { who: 'B', text: 'I\'m sorry to hear that. Do you have your receipt?', vi: 'Rất tiếc về điều đó. Chị có hóa đơn không ạ?' },
      { who: 'A', text: 'Yes, here it is. Could I exchange it for the same model?', vi: 'Có, đây. Tôi đổi lấy đúng mẫu này được không?' },
      { who: 'B', text: 'Unfortunately, that model is sold out. I can give you a refund, or you can choose a different brand.', vi: 'Tiếc là mẫu đó đã bán hết. Tôi có thể hoàn tiền, hoặc chị chọn thương hiệu khác.' },
      { who: 'A', text: 'I\'ll take the refund, then.', vi: 'Vậy tôi lấy lại tiền.' },
    ],
    mcq: [
      { q: 'Where does the conversation most likely take place?', a: 'At an appliance store', wrong: ['At a café', 'At a repair shop', 'At a bank'], ex: 'Mua máy pha cà phê, đổi/trả hàng → cửa hàng đồ gia dụng.' },
      { q: 'What problem does the woman mention?', a: 'A product is leaking.', wrong: ['A product arrived late.', 'She was charged twice.', 'She lost her receipt.'], ex: '"it leaks water".' },
      { q: 'What will the woman probably do?', a: 'Get her money back', wrong: ['Choose a different brand', 'Buy the same model', 'Come back next week'], ex: '"I\'ll take the refund".' },
    ],
  },
  {
    id: 'toeic-p3-9', title: 'New software training', titleVi: 'Tập huấn phần mềm mới',
    lines: [
      { who: 'A', text: 'Did you get the email about the new accounting software?', vi: 'Bạn nhận được email về phần mềm kế toán mới chưa?' },
      { who: 'B', text: 'Yes, but I\'m worried. The deadline for the quarterly report is next Friday.', vi: 'Rồi, nhưng tôi lo quá. Hạn nộp báo cáo quý là thứ Sáu tới.' },
      { who: 'A', text: 'Don\'t worry. The training is on Monday morning, and the IT team says it only takes an hour to learn.', vi: 'Đừng lo. Buổi tập huấn vào sáng thứ Hai, và bộ phận IT nói chỉ mất một tiếng để học.' },
      { who: 'B', text: 'That\'s a relief. Could you save me a seat? I have a client call at nine, so I might be a few minutes late.', vi: 'Nhẹ cả người. Bạn giữ giúp tôi một chỗ nhé? Tôi có cuộc gọi với khách lúc chín giờ nên có thể đến trễ vài phút.' },
    ],
    mcq: [
      { q: 'What are the speakers mainly discussing?', a: 'New software', wrong: ['A client complaint', 'A job opening', 'An office move'], ex: '"the new accounting software".' },
      { q: 'Why is the man worried?', a: 'He has a deadline soon.', wrong: ['He missed the training.', 'His computer is broken.', 'He lost a client.'], ex: '"The deadline for the quarterly report is next Friday".' },
      { q: 'What does the man ask the woman to do?', a: 'Save him a seat', wrong: ['Call a client', 'Write a report', 'Contact the IT team'], ex: '"Could you save me a seat?"' },
    ],
  },
  {
    id: 'toeic-p3-10', title: 'Delivery schedule', titleVi: 'Lịch giao hàng',
    graphic: {
      title: 'Delivery schedule',
      text: 'Day | Delivery area\nMonday | North district\nTuesday | City center\nWednesday | East district\nThursday | Airport zone',
    },
    lines: [
      { who: 'A', text: 'Hi, I ordered some office chairs yesterday. When will they arrive?', vi: 'Chào anh, hôm qua tôi đặt mấy chiếc ghế văn phòng. Khi nào hàng đến?' },
      { who: 'B', text: 'Let me check. Your address is in the city center, right?', vi: 'Để tôi kiểm tra. Địa chỉ của chị ở trung tâm thành phố phải không?' },
      { who: 'A', text: 'Actually, we\'ve just moved to the east district. I updated the address online.', vi: 'Thật ra chúng tôi vừa chuyển sang quận phía Đông. Tôi đã cập nhật địa chỉ trên mạng.' },
      { who: 'B', text: 'I see it now. Then you\'ll get the delivery on the day we cover that area. The driver will call thirty minutes before arriving.', vi: 'Tôi thấy rồi. Vậy chị sẽ nhận hàng vào ngày chúng tôi giao khu đó. Tài xế sẽ gọi trước ba mươi phút.' },
    ],
    mcq: [
      { q: 'What did the woman order?', a: 'Office chairs', wrong: ['Desks', 'Computers', 'Printer paper'], ex: '"I ordered some office chairs".' },
      { q: 'Look at the graphic. When will the woman receive her order?', a: 'On Wednesday', wrong: ['On Monday', 'On Tuesday', 'On Thursday'], ex: 'Đã chuyển sang quận phía Đông (east district) → thứ Tư.' },
      { q: 'What will the driver do?', a: 'Call before arriving', wrong: ['Leave the order at the door', 'Collect a payment', 'Assemble the chairs'], ex: '"The driver will call thirty minutes before arriving".' },
    ],
  },
];

export const TOEIC_PART4_MORE: ExamAudio[] = [
  {
    id: 'toeic-p4-6', title: 'Airport announcement', titleVi: 'Thông báo ở sân bay',
    lines: [
      { who: 'A', text: 'Attention, passengers on Flight 208 to Singapore. Due to heavy fog, the departure has been delayed by two hours.', vi: 'Hành khách chuyến bay 208 đi Singapore xin chú ý. Do sương mù dày đặc, chuyến bay bị hoãn hai tiếng.' },
      { who: 'A', text: 'The new departure time is four thirty p.m. Passengers can collect a meal voucher at the information desk near Gate 12.', vi: 'Giờ khởi hành mới là 4 giờ 30 chiều. Hành khách có thể nhận phiếu ăn tại quầy thông tin gần Cửa 12.' },
      { who: 'A', text: 'We apologize for the inconvenience.', vi: 'Chúng tôi xin lỗi vì sự bất tiện này.' },
    ],
    mcq: [
      { q: 'Why is the flight delayed?', a: 'Because of bad weather', wrong: ['Because of a mechanical problem', 'Because the crew is late', 'Because of a security check'], ex: '"Due to heavy fog".' },
      { q: 'What is the new departure time?', a: '4:30 p.m.', wrong: ['2:30 p.m.', '4:00 p.m.', '6:30 p.m.'], ex: '"The new departure time is four thirty p.m."' },
      { q: 'What can passengers get at the information desk?', a: 'A meal voucher', wrong: ['A new ticket', 'A hotel room', 'A refund'], ex: '"collect a meal voucher at the information desk".' },
    ],
  },
  {
    id: 'toeic-p4-7', title: 'Sales meeting', titleVi: 'Cuộc họp doanh số',
    graphic: {
      title: 'Quarterly sales (units)',
      text: 'Quarter | Units sold\nQ1 | 4,200\nQ2 | 3,100\nQ3 | 5,600\nQ4 | 4,800',
    },
    lines: [
      { who: 'A', text: 'Thanks for coming, everyone. As you can see on this chart, sales dropped sharply in one quarter this year.', vi: 'Cảm ơn mọi người đã đến. Như các bạn thấy trên biểu đồ, doanh số giảm mạnh ở một quý trong năm nay.' },
      { who: 'A', text: 'That was the quarter when our main factory was closed for upgrades. The good news is that sales reached a record high in the following quarter.', vi: 'Đó là quý nhà máy chính đóng cửa để nâng cấp. Tin tốt là quý tiếp theo doanh số đạt mức cao kỷ lục.' },
      { who: 'A', text: 'Next, Maria will present our plans for the new online store.', vi: 'Tiếp theo, Maria sẽ trình bày kế hoạch cho cửa hàng trực tuyến mới.' },
    ],
    mcq: [
      { q: 'Look at the graphic. In which quarter did sales drop?', a: 'Q2', wrong: ['Q1', 'Q3', 'Q4'], ex: 'Quý có số thấp nhất là Q2 (3,100); quý sau (Q3) đạt kỷ lục 5,600.' },
      { q: 'What caused the drop in sales?', a: 'A factory was closed.', wrong: ['Prices were raised.', 'A competitor opened a store.', 'Staff went on strike.'], ex: '"our main factory was closed for upgrades".' },
      { q: 'What will happen next?', a: 'A colleague will give a presentation.', wrong: ['The meeting will end.', 'Everyone will take a break.', 'The speaker will show a video.'], ex: '"Next, Maria will present our plans".' },
    ],
  },
  {
    id: 'toeic-p4-8', title: 'Voicemail: Job offer', titleVi: 'Tin nhắn thoại: Mời nhận việc',
    lines: [
      { who: 'A', text: 'Hi, this is Daniel Wong from Harbor Design. I\'m calling to offer you the graphic designer position.', vi: 'Chào bạn, tôi là Daniel Wong từ Harbor Design. Tôi gọi để mời bạn nhận vị trí thiết kế đồ họa.' },
      { who: 'A', text: 'We were very impressed with your portfolio. The starting salary is the amount we discussed, and you would start on July first.', vi: 'Chúng tôi rất ấn tượng với hồ sơ tác phẩm của bạn. Lương khởi điểm như đã trao đổi, và bạn sẽ bắt đầu từ ngày 1 tháng Bảy.' },
      { who: 'A', text: 'Please call me back by Thursday to let me know whether you accept.', vi: 'Vui lòng gọi lại cho tôi trước thứ Năm để cho biết bạn có nhận lời không.' },
    ],
    mcq: [
      { q: 'What is the purpose of the call?', a: 'To offer a job', wrong: ['To schedule an interview', 'To request a design', 'To discuss a salary increase'], ex: '"offer you the graphic designer position".' },
      { q: 'What impressed the speaker?', a: 'The listener\'s portfolio', wrong: ['The listener\'s references', 'The listener\'s interview', 'The listener\'s website'], ex: '"impressed with your portfolio".' },
      { q: 'By when should the listener respond?', a: 'By Thursday', wrong: ['By July first', 'By tomorrow', 'By next Monday'], ex: '"call me back by Thursday".' },
    ],
  },
  {
    id: 'toeic-p4-9', title: 'Traffic report', titleVi: 'Bản tin giao thông',
    lines: [
      { who: 'A', text: 'This is your seven a.m. traffic update. Highway 9 is closed northbound because of an accident near Exit 14.', vi: 'Đây là bản tin giao thông lúc 7 giờ sáng. Đường cao tốc số 9 chiều đi lên phía Bắc bị đóng do tai nạn gần Lối ra 14.' },
      { who: 'A', text: 'Drivers heading downtown should use Park Avenue instead.', vi: 'Tài xế đi vào trung tâm nên đi đại lộ Park thay thế.' },
      { who: 'A', text: 'Also, remember that the city marathon takes place this Sunday, so several streets will be closed from six a.m. until noon.', vi: 'Ngoài ra, cuộc thi marathon của thành phố diễn ra Chủ nhật này nên nhiều tuyến phố sẽ bị đóng từ 6 giờ sáng đến trưa.' },
    ],
    mcq: [
      { q: 'What caused the highway closure?', a: 'An accident', wrong: ['Road construction', 'A parade', 'Heavy snow'], ex: '"because of an accident near Exit 14".' },
      { q: 'What are drivers advised to do?', a: 'Take a different route', wrong: ['Leave home early', 'Use public transportation', 'Drive slowly'], ex: '"should use Park Avenue instead".' },
      { q: 'What will happen on Sunday?', a: 'A sports event', wrong: ['A music festival', 'A road repair', 'A city election'], ex: '"the city marathon takes place this Sunday".' },
    ],
  },
];

export const TOEIC_PART5_MORE: Part5Item[] = [
  ['The marketing team will ____ the results at Friday\'s meeting.', 'present', 'presence', 'presentable', 'presentation', 'Sau "will" cần động từ nguyên mẫu.'],
  ['Ms. Garcia was promoted ____ her excellent performance.', 'because of', 'because', 'although', 'so that', '"because of + cụm danh từ".'],
  ['Please make sure the doors are locked ____ you leave the building.', 'when', 'what', 'which', 'whom', 'Liên từ thời gian "when" nối hai mệnh đề.'],
  ['The hotel offers a free shuttle service ____ the airport.', 'to', 'at', 'in', 'on', '"a service to + nơi đến".'],
  ['Neither the manager ____ his assistant was available.', 'nor', 'or', 'and', 'but', 'Cặp liên từ "neither ... nor".'],
  ['All visitors must sign in at the ____ desk.', 'reception', 'receive', 'receptive', 'received', 'Danh từ ghép "reception desk" (quầy lễ tân).'],
  ['We have ____ received your application form.', 'already', 'yet', 'ever', 'since', '"already" trong câu khẳng định thì hiện tại hoàn thành.'],
  ['The seminar was so popular ____ extra seats had to be added.', 'that', 'than', 'which', 'as', '"so + tính từ + that": quá... đến nỗi.'],
  ['Mr. Evans prefers to handle customer complaints ____.', 'himself', 'him', 'his', 'he', 'Đại từ phản thân nhấn mạnh "tự mình".'],
  ['The company\'s profits were ____ than expected.', 'higher', 'highest', 'high', 'highly', 'So sánh hơn + than.'],
  ['By the time the guests arrived, the staff ____ the room.', 'had prepared', 'prepares', 'will prepare', 'has prepared', 'Quá khứ hoàn thành: việc xong trước một mốc trong quá khứ.'],
  ['Employees who wish to take time off should submit a request ____ advance.', 'in', 'on', 'at', 'by', '"in advance": trước, sớm.'],
  ['The factory has increased its ____ by twenty percent.', 'production', 'produce', 'productive', 'productively', 'Sau tính từ sở hữu "its" cần danh từ.'],
  ['Customers can return items ____ 30 days of purchase.', 'within', 'during', 'among', 'along', '"within + khoảng thời gian": trong vòng.'],
  ['It is important that every employee ____ the safety rules.', 'follow', 'follows', 'following', 'followed', 'Thể giả định: It is important that + S + V nguyên mẫu.'],
  ['The new branch will be located ____ the bank and the museum.', 'between', 'among', 'through', 'across', '"between A and B": ở giữa A và B.'],
  ['Ms. Wu has been ____ as the new head of sales.', 'appointed', 'appointing', 'appoint', 'appointment', 'Bị động hiện tại hoàn thành: has been + V3.'],
  ['The store is open every day ____ national holidays.', 'except', 'unless', 'instead', 'otherwise', '"except + danh từ": ngoại trừ.'],
  ['The survey results will be ____ to all department heads.', 'distributed', 'distribution', 'distributor', 'distributing', 'Bị động tương lai: will be + V3.'],
  ['Please read the instructions ____ before using the machine.', 'thoroughly', 'thorough', 'thoroughness', 'through', 'Trạng từ bổ nghĩa cho động từ "read".'],
];

export const TOEIC_PART6_MORE: ExamPassage[] = [
  {
    id: 'toeic-p6-5', title: 'Memo: Recycling program', titleVi: 'Thông báo nội bộ: Chương trình tái chế',
    text: 'To: All staff\nFrom: Facilities Department\n\nStarting next Monday, the office will (1)____ a new recycling program. Blue bins for paper and green bins for plastic will be placed in every kitchen. (2)____. Please do not put food waste in either bin, as this makes the materials impossible to (3)____. If you have any questions, contact Paul Adams, who is (4)____ for the program.',
    textVi: 'Gửi: Toàn thể nhân viên\nTừ: Phòng Cơ sở vật chất\n\nTừ thứ Hai tới, văn phòng sẽ triển khai chương trình tái chế mới. Thùng xanh dương đựng giấy và thùng xanh lá đựng nhựa sẽ được đặt ở mỗi phòng bếp. Có thêm thùng ở sảnh. Vui lòng không bỏ rác thực phẩm vào thùng nào, vì điều này khiến vật liệu không thể tái chế. Nếu có thắc mắc, hãy liên hệ Paul Adams, người phụ trách chương trình.',
    mcq: [
      { q: '(1) ____', a: 'launch', wrong: ['launches', 'launching', 'launched'], ex: 'Sau "will" cần động từ nguyên mẫu.' },
      { q: '(2) ____', a: 'Additional bins will be available in the lobby.', wrong: ['The kitchen will be renovated next year.', 'Thank you for attending the meeting.', 'Please submit your timesheets on Friday.'], ex: 'Câu cần tiếp nối ý về vị trí đặt thùng rác → "Có thêm thùng ở sảnh".' },
      { q: '(3) ____', a: 'recycle', wrong: ['recycling', 'recycled', 'recycles'], ex: '"impossible to + V nguyên mẫu".' },
      { q: '(4) ____', a: 'responsible', wrong: ['responsibility', 'responsibly', 'respond'], ex: '"be responsible for": chịu trách nhiệm về.' },
    ],
  },
  {
    id: 'toeic-p6-6', title: 'Advertisement: Seaview Hotel', titleVi: 'Quảng cáo: Khách sạn Seaview',
    text: 'Stay at the Seaview Hotel this winter and enjoy our (1)____ rates. From December 1 to February 28, guests who book three nights will receive the fourth night free. All rooms (2)____ ocean views and free high-speed Internet. (3)____. To make a reservation, visit our Web site or call us (4)____ at 555-0192.',
    textVi: 'Hãy nghỉ tại khách sạn Seaview mùa đông này và tận hưởng mức giá đặc biệt. Từ 1/12 đến 28/2, khách đặt ba đêm sẽ được tặng đêm thứ tư. Tất cả phòng đều có view biển và Internet tốc độ cao miễn phí. Nhà hàng của chúng tôi còn phục vụ hải sản tươi của địa phương mỗi tối. Để đặt phòng, hãy truy cập trang web hoặc gọi trực tiếp số 555-0192.',
    mcq: [
      { q: '(1) ____', a: 'special', wrong: ['specially', 'specialize', 'specialist'], ex: 'Cần tính từ đứng trước danh từ "rates".' },
      { q: '(2) ____', a: 'feature', wrong: ['featuring', 'to feature', 'has featured'], ex: 'Động từ chính của câu, chủ ngữ số nhiều "All rooms" → feature.' },
      { q: '(3) ____', a: 'Our restaurant also serves fresh local seafood every evening.', wrong: ['The hotel was closed for most of last year.', 'Please return your key to the front desk.', 'Applicants must have hotel experience.'], ex: 'Đoạn quảng cáo đang liệt kê tiện ích → câu giới thiệu nhà hàng phù hợp nhất.' },
      { q: '(4) ____', a: 'directly', wrong: ['direct', 'direction', 'directed'], ex: 'Trạng từ bổ nghĩa cho động từ "call".' },
    ],
  },
];

export const TOEIC_PART7_MORE: ExamPassage[] = [
  {
    id: 'toeic-p7-7', title: 'Email + Invoice: Order problem', titleVi: 'Email + Hóa đơn: Đơn hàng có vấn đề',
    text: 'E-MAIL\nTo: Orders, OfficeMax Supplies\nFrom: Hana Lee\nDate: May 3\nSubject: Order #8812\n\nHello,\nI received my order today, but there is a problem. I ordered ten boxes of printer paper, but only six arrived. Also, the invoice shows three ink cartridges, although I only ordered two. Could you please send the missing paper and correct the invoice? We need the paper before our training day on May 7.\nHana Lee\n\nINVOICE – Order #8812\nItem | Qty | Unit price | Amount\nPrinter paper (box) | 10 | $25.00 each | $250.00\nInk cartridge | 3 | $30.00 each | $90.00\nStapler | 1 | $12.00 | $12.00\nTotal: $352.00',
    textVi: 'EMAIL\nGửi: Bộ phận đơn hàng, OfficeMax Supplies – Từ: Hana Lee – Ngày 3/5 – Tiêu đề: Đơn hàng #8812\nXin chào, hôm nay tôi đã nhận hàng nhưng có vấn đề. Tôi đặt mười hộp giấy in nhưng chỉ có sáu hộp. Ngoài ra hóa đơn ghi ba hộp mực dù tôi chỉ đặt hai. Vui lòng gửi số giấy còn thiếu và sửa lại hóa đơn. Chúng tôi cần giấy trước ngày tập huấn 7/5.\n\nHÓA ĐƠN – Giấy in 10 hộp $250; Hộp mực 3 cái $90; Dập ghim 1 cái $12; Tổng $352.',
    mcq: [
      { q: 'Why did Ms. Lee write the e-mail?', a: 'To report problems with an order', wrong: ['To place a new order', 'To ask about a training day', 'To cancel an order'], ex: 'Thiếu giấy và hóa đơn sai.' },
      { q: 'How many boxes of paper were delivered?', a: 'Six', wrong: ['Ten', 'Four', 'Three'], ex: '"only six arrived".' },
      { q: 'Which charge on the invoice is incorrect?', a: 'The charge for ink cartridges', wrong: ['The charge for the stapler', 'The price of each box of paper', 'The shipping fee'], ex: 'Hóa đơn ghi 3 hộp mực ($90) nhưng chỉ đặt 2 – câu hỏi kết hợp 2 văn bản.' },
      { q: 'When does Ms. Lee need the paper?', a: 'Before May 7', wrong: ['By May 3', 'After the training day', 'Next month'], ex: '"before our training day on May 7".' },
    ],
  },
  {
    id: 'toeic-p7-8', title: 'Article: Bakery expansion', titleVi: 'Bài báo: Tiệm bánh mở rộng',
    text: 'GREENVILLE (April 12) — Local bakery Sunny Bread will open its second store next month on Oak Street. [1] The bakery, founded by sisters Ana and Rosa Diaz in 2018, is known for its whole-grain breads. [2] "Our first shop is too small for the number of customers we have now," said Ana Diaz. [3] The new store will include a café with twenty seats. [4] The sisters also plan to offer baking classes on weekends.',
    textVi: 'GREENVILLE (12/4) — Tiệm bánh Sunny Bread sẽ mở cửa hàng thứ hai vào tháng tới trên phố Oak. Tiệm do hai chị em Ana và Rosa Diaz thành lập năm 2018, nổi tiếng với bánh mì nguyên cám. "Cửa hàng đầu tiên quá nhỏ so với lượng khách hiện nay," Ana Diaz nói. Vào những buổi sáng đông khách, hàng người xếp dài ra tận cửa. Cửa hàng mới sẽ có quán cà phê 20 chỗ ngồi. Hai chị em còn dự định mở lớp dạy làm bánh vào cuối tuần.',
    mcq: [
      { q: 'What is the article mainly about?', a: 'The opening of a new store', wrong: ['A baking competition', 'A change of owners', 'A new type of bread'], ex: '"will open its second store".' },
      { q: 'What is Sunny Bread known for?', a: 'Whole-grain breads', wrong: ['Wedding cakes', 'Low prices', 'Its large café'], ex: '"known for its whole-grain breads".' },
      { q: 'In which of the positions marked [1], [2], [3], and [4] does the following sentence best belong? "On busy mornings, the line often stretches out the door."', a: '[3]', wrong: ['[1]', '[2]', '[4]'], ex: 'Câu nói về hàng người dài – nối tiếp ý "cửa hàng quá nhỏ so với lượng khách" → vị trí [3].' },
    ],
  },
  {
    id: 'toeic-p7-9', title: 'Online chat: Presentation', titleVi: 'Trò chuyện trực tuyến: Buổi thuyết trình',
    text: 'Mark Tan (10:15): Hi team, the client moved our presentation to Thursday at 2 p.m.\nJudy Park (10:16): Thursday? I thought it was on Friday.\nMark Tan (10:17): It was, but their director is traveling on Friday.\nLuis Ortega (10:18): That\'s fine for me. I\'ll finish the slides tomorrow.\nJudy Park (10:19): I\'m in training on Thursday morning, but I can make it by two.\nMark Tan (10:20): Great. I\'ll book the large meeting room.',
    textVi: 'Mark Tan (10:15): Chào cả nhóm, khách hàng đã dời buổi thuyết trình sang 2 giờ chiều thứ Năm.\nJudy Park (10:16): Thứ Năm à? Tôi tưởng là thứ Sáu.\nMark Tan (10:17): Đúng là vậy, nhưng giám đốc bên họ đi công tác vào thứ Sáu.\nLuis Ortega (10:18): Tôi thì được. Mai tôi sẽ làm xong slide.\nJudy Park (10:19): Sáng thứ Năm tôi đi tập huấn, nhưng tôi kịp có mặt lúc hai giờ.\nMark Tan (10:20): Tuyệt. Tôi sẽ đặt phòng họp lớn.',
    mcq: [
      { q: 'Why was the presentation rescheduled?', a: 'A client\'s director will be away.', wrong: ['The meeting room was not available.', 'The slides were not ready.', 'Ms. Park has a training session.'], ex: '"their director is traveling on Friday".' },
      { q: 'At 10:19, what does Ms. Park mean when she writes, "I can make it by two"?', a: 'She will be able to attend.', wrong: ['She will prepare two slides.', 'She wants to leave at two.', 'She needs two more days.'], ex: '"make it" = kịp có mặt/tham dự.' },
      { q: 'What will Mr. Tan most likely do next?', a: 'Reserve a room', wrong: ['Call the client', 'Finish the slides', 'Attend a training'], ex: '"I\'ll book the large meeting room".' },
    ],
  },
];
