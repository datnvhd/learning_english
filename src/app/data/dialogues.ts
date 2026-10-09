/**
 * ============================================================================
 *  dialogues.ts – Kho hội thoại nghe hiểu (Listening) và mẫu câu giao tiếp (Speaking)
 * ============================================================================
 *  Mỗi chủ đề có 5 đoạn hội thoại giữa hai người (A và B), kèm 2 câu hỏi nghe hiểu.
 *  - Trong Luyện nghe: app đọc cả đoạn hội thoại (giọng A và B khác nhau) rồi hỏi.
 *  - Trong Luyện nói: dùng lời thoại của A làm tình huống, người học chọn câu đáp của B.
 *  Quy ước đáp án giống reading.ts: đáp án đúng ghi ở `a`, đáp án sai ở `wrong`.
 */
import { Dialogue } from '../models/content.model';

export const DIALOGUES: Dialogue[] = [
  // ==================================================================
  //  daily – Cuộc sống hằng ngày
  // ==================================================================
  {
    id: 'daily-d1', topic: 'daily', title: 'Weekend Plans', titleVi: 'Kế hoạch cuối tuần',
    lines: [
      { who: 'A', text: 'Hi! What are you doing this weekend?', vi: 'Chào! Cuối tuần này bạn định làm gì?' },
      { who: 'B', text: 'I am going to visit my grandmother in the countryside.', vi: 'Mình sẽ về quê thăm bà.' },
      { who: 'A', text: 'That sounds lovely. How will you go there?', vi: 'Nghe thích quá. Bạn sẽ đi bằng gì?' },
      { who: 'B', text: 'By bus. It takes about two hours.', vi: 'Bằng xe buýt. Mất khoảng hai tiếng.' },
    ],
    questions: [
      { q: 'Where is B going this weekend?', a: 'To visit her grandmother', wrong: ['To the cinema', 'To a shopping mall', 'To the beach'] },
      { q: 'How will B travel?', a: 'By bus', wrong: ['By train', 'By car', 'By plane'] },
    ],
  },
  {
    id: 'daily-d2', topic: 'daily', title: 'At the Clothes Shop', titleVi: 'Ở cửa hàng quần áo',
    lines: [
      { who: 'A', text: 'Excuse me, can I try on this jacket?', vi: 'Xin lỗi, tôi mặc thử chiếc áo khoác này được không?' },
      { who: 'B', text: 'Of course. What size do you wear?', vi: 'Dĩ nhiên rồi. Bạn mặc cỡ nào?' },
      { who: 'A', text: 'Medium, please. How much is it?', vi: 'Cho tôi cỡ vừa. Nó giá bao nhiêu?' },
      { who: 'B', text: 'It is forty dollars, but today there is a discount.', vi: 'Giá bốn mươi đô la, nhưng hôm nay có giảm giá.' },
    ],
    questions: [
      { q: 'What does A want to try on?', a: 'A jacket', wrong: ['A hat', 'A pair of shoes', 'A dress'] },
      { q: 'What is special today?', a: 'There is a discount', wrong: ['The shop is closed', 'Everything is free', 'The jacket is red'] },
    ],
  },
  {
    id: 'daily-d3', topic: 'daily', title: 'Asking About the Weather', titleVi: 'Hỏi về thời tiết',
    lines: [
      { who: 'A', text: 'What is the weather like today?', vi: 'Hôm nay thời tiết thế nào?' },
      { who: 'B', text: 'It is cloudy and a little windy.', vi: 'Trời nhiều mây và hơi có gió.' },
      { who: 'A', text: 'Do I need an umbrella?', vi: 'Tôi có cần mang ô không?' },
      { who: 'B', text: 'Yes, the forecast says it will rain this afternoon.', vi: 'Có, dự báo nói chiều nay trời sẽ mưa.' },
    ],
    questions: [
      { q: 'What is the weather like now?', a: 'Cloudy and windy', wrong: ['Sunny and hot', 'Snowy', 'Foggy and cold'] },
      { q: 'When will it rain?', a: 'This afternoon', wrong: ['Tomorrow morning', 'Tonight', 'Next week'] },
    ],
  },
  {
    id: 'daily-d4', topic: 'daily', title: 'Meeting a New Neighbor', titleVi: 'Gặp người hàng xóm mới',
    lines: [
      { who: 'A', text: 'Hello, I am Lan. I live next door.', vi: 'Xin chào, tôi là Lan. Tôi sống ở nhà bên cạnh.' },
      { who: 'B', text: 'Nice to meet you, Lan. I am Peter. We just moved here.', vi: 'Rất vui được gặp bạn, Lan. Tôi là Peter. Chúng tôi vừa chuyển đến.' },
      { who: 'A', text: 'Welcome! There is a big supermarket near here.', vi: 'Chào mừng! Gần đây có một siêu thị lớn.' },
      { who: 'B', text: 'Great, thank you. We need to buy some furniture too.', vi: 'Tuyệt quá, cảm ơn bạn. Chúng tôi cũng cần mua ít đồ nội thất.' },
    ],
    questions: [
      { q: 'Who just moved in?', a: 'Peter', wrong: ['Lan', 'Lan\'s mother', 'A teacher'] },
      { q: 'What does Lan tell Peter about?', a: 'A big supermarket nearby', wrong: ['A new school', 'A bank', 'A cinema'] },
    ],
  },
  {
    id: 'daily-d5', topic: 'daily', title: 'Talking About Hobbies', titleVi: 'Nói về sở thích',
    lines: [
      { who: 'A', text: 'What do you like to do in your free time?', vi: 'Bạn thích làm gì lúc rảnh?' },
      { who: 'B', text: 'I love painting and playing the guitar.', vi: 'Mình thích vẽ tranh và chơi ghi-ta.' },
      { who: 'A', text: 'Wow, that is cool. How often do you practice?', vi: 'Ồ, hay quá. Bạn luyện tập thường xuyên không?' },
      { who: 'B', text: 'Every evening for one hour.', vi: 'Mỗi tối một tiếng.' },
    ],
    questions: [
      { q: 'What are B\'s hobbies?', a: 'Painting and playing the guitar', wrong: ['Swimming and dancing', 'Cooking and reading', 'Football and chess'] },
      { q: 'How long does B practice?', a: 'One hour every evening', wrong: ['Ten minutes a day', 'All day on Sunday', 'Two hours a week'] },
    ],
  },

  // ==================================================================
  //  it – Công việc IT
  // ==================================================================
  {
    id: 'it-d1', topic: 'it', title: 'A Laptop Problem', titleVi: 'Sự cố máy tính xách tay',
    lines: [
      { who: 'A', text: 'Hi, IT support? My laptop is very slow today.', vi: 'Chào bộ phận hỗ trợ IT? Hôm nay máy tính của tôi rất chậm.' },
      { who: 'B', text: 'Have you tried to restart it?', vi: 'Bạn đã thử khởi động lại chưa?' },
      { who: 'A', text: 'Yes, but the problem is still there.', vi: 'Rồi, nhưng sự cố vẫn còn.' },
      { who: 'B', text: 'OK, I will open a ticket and come to your desk in ten minutes.', vi: 'Được, tôi sẽ mở một phiếu yêu cầu và đến bàn bạn sau mười phút.' },
    ],
    questions: [
      { q: 'What is the problem?', a: 'The laptop is slow', wrong: ['The printer is broken', 'The internet is off', 'The screen is black'] },
      { q: 'When will support come?', a: 'In ten minutes', wrong: ['Tomorrow', 'In one hour', 'Next week'] },
    ],
  },
  {
    id: 'it-d2', topic: 'it', title: 'Morning Standup', titleVi: 'Họp đứng buổi sáng',
    lines: [
      { who: 'A', text: 'Good morning, team. What did you do yesterday, Nam?', vi: 'Chào buổi sáng cả nhóm. Hôm qua bạn làm gì, Nam?' },
      { who: 'B', text: 'I fixed two bugs and started a new feature.', vi: 'Mình đã sửa hai lỗi và bắt đầu một tính năng mới.' },
      { who: 'A', text: 'Great. Do you have any problems today?', vi: 'Tốt lắm. Hôm nay bạn có vướng mắc gì không?' },
      { who: 'B', text: 'No problem, but I need a code review by noon.', vi: 'Không có, nhưng mình cần được đánh giá mã trước buổi trưa.' },
    ],
    questions: [
      { q: 'What did Nam do yesterday?', a: 'Fixed two bugs', wrong: ['Took a holiday', 'Deleted a database', 'Bought a laptop'] },
      { q: 'What does Nam need by noon?', a: 'A code review', wrong: ['A new laptop', 'A day off', 'A cup of tea'] },
    ],
  },
  {
    id: 'it-d3', topic: 'it', title: 'Job Interview', titleVi: 'Phỏng vấn xin việc',
    lines: [
      { who: 'A', text: 'Thank you for coming. Can you tell me about your experience?', vi: 'Cảm ơn bạn đã đến. Bạn có thể kể về kinh nghiệm của mình không?' },
      { who: 'B', text: 'I have worked as a web developer for three years.', vi: 'Tôi đã làm lập trình viên web được ba năm.' },
      { who: 'A', text: 'Which programming languages do you use?', vi: 'Bạn dùng những ngôn ngữ lập trình nào?' },
      { who: 'B', text: 'Mostly JavaScript and Python.', vi: 'Chủ yếu là JavaScript và Python.' },
    ],
    questions: [
      { q: 'How long has B worked as a developer?', a: 'Three years', wrong: ['One year', 'Ten years', 'Six months'] },
      { q: 'Which languages does B use?', a: 'JavaScript and Python', wrong: ['Only Java', 'Only C', 'French and Spanish'] },
    ],
  },
  {
    id: 'it-d4', topic: 'it', title: 'Deploying the App', titleVi: 'Triển khai ứng dụng',
    lines: [
      { who: 'A', text: 'Are the tests passing?', vi: 'Các bài kiểm thử đã đạt chưa?' },
      { who: 'B', text: 'Yes, all of them passed this morning.', vi: 'Rồi, tất cả đã đạt sáng nay.' },
      { who: 'A', text: 'Good. Let us deploy to production tonight.', vi: 'Tốt. Hãy triển khai lên môi trường thật vào tối nay.' },
      { who: 'B', text: 'Okay. I will watch the logs in case of errors.', vi: 'Được. Mình sẽ theo dõi nhật ký phòng khi có lỗi.' },
    ],
    questions: [
      { q: 'When will they deploy?', a: 'Tonight', wrong: ['Yesterday', 'Next month', 'This morning'] },
      { q: 'What will B watch?', a: 'The logs', wrong: ['A movie', 'The weather', 'The clock'] },
    ],
  },
  {
    id: 'it-d5', topic: 'it', title: 'Suspicious Email', titleVi: 'Email đáng ngờ',
    lines: [
      { who: 'A', text: 'I got a strange email asking for my password.', vi: 'Tôi nhận được một email lạ hỏi mật khẩu của tôi.' },
      { who: 'B', text: 'Do not click any link. It is probably phishing.', vi: 'Đừng nhấp vào liên kết nào. Có thể đó là lừa đảo.' },
      { who: 'A', text: 'What should I do with it?', vi: 'Tôi nên làm gì với nó?' },
      { who: 'B', text: 'Delete it and report it to the security team.', vi: 'Hãy xóa nó và báo cho nhóm bảo mật.' },
    ],
    questions: [
      { q: 'What did the email ask for?', a: 'A password', wrong: ['A photo', 'A meeting', 'A phone number'] },
      { q: 'What should A do?', a: 'Delete it and report it', wrong: ['Click the link', 'Reply quickly', 'Forward it to friends'] },
    ],
  },

  // ==================================================================
  //  travel – Du lịch & Khám phá
  // ==================================================================
  {
    id: 'travel-d1', topic: 'travel', title: 'Checking in at the Airport', titleVi: 'Làm thủ tục ở sân bay',
    lines: [
      { who: 'A', text: 'Good morning. May I see your passport, please?', vi: 'Chào buổi sáng. Cho tôi xem hộ chiếu của bạn nhé?' },
      { who: 'B', text: 'Here you are. I would like a window seat.', vi: 'Đây ạ. Tôi muốn một ghế cạnh cửa sổ.' },
      { who: 'A', text: 'No problem. Do you have any luggage to check in?', vi: 'Không vấn đề gì. Bạn có hành lý cần ký gửi không?' },
      { who: 'B', text: 'Just one suitcase. And this small bag is my carry-on.', vi: 'Chỉ một va-li. Còn túi nhỏ này là hành lý xách tay.' },
    ],
    questions: [
      { q: 'What kind of seat does B want?', a: 'A window seat', wrong: ['An aisle seat', 'A front seat', 'A seat near the toilet'] },
      { q: 'How many suitcases will B check in?', a: 'One', wrong: ['Two', 'Three', 'None'] },
    ],
  },
  {
    id: 'travel-d2', topic: 'travel', title: 'Booking a Hotel Room', titleVi: 'Đặt phòng khách sạn',
    lines: [
      { who: 'A', text: 'Hello, I would like to book a double room for three nights.', vi: 'Xin chào, tôi muốn đặt một phòng đôi trong ba đêm.' },
      { who: 'B', text: 'Certainly. Is breakfast included?', vi: 'Được ạ. Bạn có cần bao gồm bữa sáng không?' },
      { who: 'A', text: 'Yes, please. How much is it per night?', vi: 'Có, làm ơn. Giá mỗi đêm là bao nhiêu?' },
      { who: 'B', text: 'It is sixty dollars a night with breakfast.', vi: 'Giá sáu mươi đô la một đêm gồm bữa sáng.' },
    ],
    questions: [
      { q: 'How many nights does A want to stay?', a: 'Three nights', wrong: ['One night', 'A week', 'Two nights'] },
      { q: 'How much is the room per night?', a: 'Sixty dollars', wrong: ['Thirty dollars', 'One hundred dollars', 'Ten dollars'] },
    ],
  },
  {
    id: 'travel-d3', topic: 'travel', title: 'Asking for Directions', titleVi: 'Hỏi đường',
    lines: [
      { who: 'A', text: 'Excuse me, how can I get to the museum?', vi: 'Xin lỗi, tôi đến bảo tàng bằng cách nào?' },
      { who: 'B', text: 'Go straight and turn left at the traffic light.', vi: 'Đi thẳng rồi rẽ trái ở đèn giao thông.' },
      { who: 'A', text: 'Is it far from here?', vi: 'Nó có xa đây không?' },
      { who: 'B', text: 'No, it is only five minutes on foot.', vi: 'Không, chỉ năm phút đi bộ thôi.' },
    ],
    questions: [
      { q: 'Where does A want to go?', a: 'To the museum', wrong: ['To the airport', 'To a hotel', 'To the beach'] },
      { q: 'How long does it take on foot?', a: 'Five minutes', wrong: ['One hour', 'Two hours', 'Twenty minutes'] },
    ],
  },
  {
    id: 'travel-d4', topic: 'travel', title: 'Renting a Motorbike', titleVi: 'Thuê xe máy',
    lines: [
      { who: 'A', text: 'I would like to rent a scooter for two days.', vi: 'Tôi muốn thuê một chiếc xe tay ga trong hai ngày.' },
      { who: 'B', text: 'Sure. Do you have a driver\'s license?', vi: 'Được ạ. Bạn có bằng lái xe không?' },
      { who: 'A', text: 'Yes, here it is. Does the price include a helmet?', vi: 'Có, đây ạ. Giá đã bao gồm mũ bảo hiểm chưa?' },
      { who: 'B', text: 'Of course. Please drive carefully.', vi: 'Dĩ nhiên. Xin hãy lái xe cẩn thận.' },
    ],
    questions: [
      { q: 'How long does A want to rent the scooter?', a: 'Two days', wrong: ['One week', 'One hour', 'Ten days'] },
      { q: 'What does the price include?', a: 'A helmet', wrong: ['Petrol only', 'A guide', 'A hotel room'] },
    ],
  },
  {
    id: 'travel-d5', topic: 'travel', title: 'Buying Souvenirs', titleVi: 'Mua quà lưu niệm',
    lines: [
      { who: 'A', text: 'How much is this silk scarf?', vi: 'Chiếc khăn lụa này giá bao nhiêu?' },
      { who: 'B', text: 'It is twenty dollars, madam.', vi: 'Giá hai mươi đô la, thưa bà.' },
      { who: 'A', text: 'That is a bit expensive. Can you give me a better price?', vi: 'Hơi đắt một chút. Bạn giảm giá cho tôi được không?' },
      { who: 'B', text: 'Okay, fifteen dollars for you.', vi: 'Được, mười lăm đô la cho bà.' },
    ],
    questions: [
      { q: 'What does A want to buy?', a: 'A silk scarf', wrong: ['A hat', 'A postcard', 'A camera'] },
      { q: 'What is the final price?', a: 'Fifteen dollars', wrong: ['Twenty dollars', 'Ten dollars', 'Five dollars'] },
    ],
  },

  // ==================================================================
  //  study – Học tập & Giáo dục
  // ==================================================================
  {
    id: 'study-d1', topic: 'study', title: 'Homework Help', titleVi: 'Nhờ giúp bài tập',
    lines: [
      { who: 'A', text: 'Do you understand today\'s math homework?', vi: 'Bạn có hiểu bài tập toán hôm nay không?' },
      { who: 'B', text: 'Not really. Question five is very difficult.', vi: 'Không hẳn. Câu số năm rất khó.' },
      { who: 'A', text: 'Let us solve it together after school.', vi: 'Chúng mình cùng giải sau giờ học nhé.' },
      { who: 'B', text: 'Great idea! Let us meet in the library.', vi: 'Ý hay đấy! Hãy gặp nhau ở thư viện.' },
    ],
    questions: [
      { q: 'Which question is difficult?', a: 'Question five', wrong: ['Question one', 'Question ten', 'Question three'] },
      { q: 'Where will they meet?', a: 'In the library', wrong: ['In the canteen', 'At the cinema', 'At home'] },
    ],
  },
  {
    id: 'study-d2', topic: 'study', title: 'Choosing a Major', titleVi: 'Chọn chuyên ngành',
    lines: [
      { who: 'A', text: 'What are you going to study at university?', vi: 'Bạn định học ngành gì ở đại học?' },
      { who: 'B', text: 'I want to study computer science.', vi: 'Mình muốn học khoa học máy tính.' },
      { who: 'A', text: 'Why did you choose that major?', vi: 'Sao bạn chọn ngành đó?' },
      { who: 'B', text: 'Because I love solving problems and building apps.', vi: 'Vì mình thích giải quyết vấn đề và xây dựng ứng dụng.' },
    ],
    questions: [
      { q: 'What will B study?', a: 'Computer science', wrong: ['Biology', 'Law', 'Music'] },
      { q: 'Why did B choose this major?', a: 'B loves solving problems', wrong: ['B likes traveling', 'B wants a holiday', 'B likes cooking'] },
    ],
  },
  {
    id: 'study-d3', topic: 'study', title: 'Before the Exam', titleVi: 'Trước kỳ thi',
    lines: [
      { who: 'A', text: 'I am so nervous about tomorrow\'s exam.', vi: 'Mình rất hồi hộp về kỳ thi ngày mai.' },
      { who: 'B', text: 'Do not worry. You studied hard for two weeks.', vi: 'Đừng lo. Bạn đã học chăm chỉ hai tuần rồi.' },
      { who: 'A', text: 'I know, but I still forget some words.', vi: 'Mình biết, nhưng mình vẫn quên vài từ.' },
      { who: 'B', text: 'Review them once more and then go to bed early.', vi: 'Hãy ôn lại một lần nữa rồi đi ngủ sớm.' },
    ],
    questions: [
      { q: 'When is the exam?', a: 'Tomorrow', wrong: ['Yesterday', 'Next month', 'Today'] },
      { q: 'What does B advise A to do?', a: 'Review and sleep early', wrong: ['Skip the exam', 'Stay up all night', 'Go shopping'] },
    ],
  },
  {
    id: 'study-d4', topic: 'study', title: 'At the Library', titleVi: 'Ở thư viện',
    lines: [
      { who: 'A', text: 'Excuse me, how many books can I borrow?', vi: 'Xin lỗi, tôi được mượn bao nhiêu cuốn sách?' },
      { who: 'B', text: 'You can borrow five books for two weeks.', vi: 'Bạn có thể mượn năm cuốn trong hai tuần.' },
      { who: 'A', text: 'What if I return them late?', vi: 'Nếu tôi trả muộn thì sao?' },
      { who: 'B', text: 'You will need to pay a small fine.', vi: 'Bạn sẽ phải trả một khoản phạt nhỏ.' },
    ],
    questions: [
      { q: 'How many books can A borrow?', a: 'Five books', wrong: ['Two books', 'Ten books', 'One book'] },
      { q: 'What happens if A returns them late?', a: 'A pays a small fine', wrong: ['Nothing happens', 'A gets a prize', 'A gets more books'] },
    ],
  },
  {
    id: 'study-d5', topic: 'study', title: 'Joining a Club', titleVi: 'Tham gia câu lạc bộ',
    lines: [
      { who: 'A', text: 'Are there any clubs at your school?', vi: 'Trường bạn có câu lạc bộ nào không?' },
      { who: 'B', text: 'Yes, there is a music club and an English club.', vi: 'Có, có câu lạc bộ âm nhạc và câu lạc bộ tiếng Anh.' },
      { who: 'A', text: 'When does the English club meet?', vi: 'Câu lạc bộ tiếng Anh họp khi nào?' },
      { who: 'B', text: 'Every Wednesday after school.', vi: 'Mỗi thứ Tư sau giờ học.' },
    ],
    questions: [
      { q: 'Which clubs does the school have?', a: 'Music and English', wrong: ['Chess and football', 'Cooking and art', 'Dance and science'] },
      { q: 'When does the English club meet?', a: 'Every Wednesday', wrong: ['Every Monday', 'Every Sunday', 'Every morning'] },
    ],
  },

  // ==================================================================
  //  health – Sức khỏe & Thể thao
  // ==================================================================
  {
    id: 'health-d1', topic: 'health', title: 'A Headache', titleVi: 'Bị đau đầu',
    lines: [
      { who: 'A', text: 'You look pale. Are you okay?', vi: 'Trông bạn nhợt nhạt. Bạn ổn chứ?' },
      { who: 'B', text: 'I have a terrible headache and I feel dizzy.', vi: 'Mình bị đau đầu kinh khủng và thấy chóng mặt.' },
      { who: 'A', text: 'You should sit down and drink some water.', vi: 'Bạn nên ngồi xuống và uống ít nước.' },
      { who: 'B', text: 'Thanks. Maybe I will go home and rest.', vi: 'Cảm ơn. Có lẽ mình sẽ về nhà nghỉ ngơi.' },
    ],
    questions: [
      { q: 'What is wrong with B?', a: 'B has a headache', wrong: ['B has a broken arm', 'B has a toothache', 'B is very happy'] },
      { q: 'What does A suggest?', a: 'Sit down and drink water', wrong: ['Run a marathon', 'Eat ice cream', 'Go swimming'] },
    ],
  },
  {
    id: 'health-d2', topic: 'health', title: 'Making an Appointment', titleVi: 'Đặt lịch khám',
    lines: [
      { who: 'A', text: 'Good morning. I would like to make an appointment with Dr. Hoa.', vi: 'Chào buổi sáng. Tôi muốn đặt lịch hẹn với bác sĩ Hoa.' },
      { who: 'B', text: 'Certainly. Is Thursday at three o\'clock okay?', vi: 'Được ạ. Thứ Năm lúc ba giờ có được không?' },
      { who: 'A', text: 'Yes, that is perfect.', vi: 'Được, thế thì hoàn hảo.' },
      { who: 'B', text: 'Please bring your ID card and arrive ten minutes early.', vi: 'Xin hãy mang theo thẻ căn cước và đến sớm mười phút.' },
    ],
    questions: [
      { q: 'When is the appointment?', a: 'Thursday at three o\'clock', wrong: ['Monday at nine', 'Friday at five', 'Sunday at noon'] },
      { q: 'What should A bring?', a: 'An ID card', wrong: ['A camera', 'A suitcase', 'A bicycle'] },
    ],
  },
  {
    id: 'health-d3', topic: 'health', title: 'Joining the Gym', titleVi: 'Đăng ký phòng tập',
    lines: [
      { who: 'A', text: 'Hi, I would like to join the gym.', vi: 'Xin chào, tôi muốn đăng ký phòng tập.' },
      { who: 'B', text: 'Welcome! We have monthly and yearly memberships.', vi: 'Chào mừng bạn! Chúng tôi có thẻ hội viên theo tháng và theo năm.' },
      { who: 'A', text: 'I will take the monthly one first.', vi: 'Tôi sẽ lấy thẻ tháng trước.' },
      { who: 'B', text: 'Good choice. Your trainer will show you the equipment.', vi: 'Lựa chọn tốt. Huấn luyện viên sẽ chỉ cho bạn các thiết bị.' },
    ],
    questions: [
      { q: 'Which membership does A choose?', a: 'The monthly one', wrong: ['The yearly one', 'A daily ticket', 'No membership'] },
      { q: 'Who will show A the equipment?', a: 'The trainer', wrong: ['The doctor', 'The manager', 'A police officer'] },
    ],
  },
  {
    id: 'health-d4', topic: 'health', title: 'After the Match', titleVi: 'Sau trận đấu',
    lines: [
      { who: 'A', text: 'Did you watch the football match last night?', vi: 'Tối qua bạn có xem trận bóng đá không?' },
      { who: 'B', text: 'Yes! Our team won three to two.', vi: 'Có! Đội mình thắng ba hai.' },
      { who: 'A', text: 'Who scored the last goal?', vi: 'Ai ghi bàn cuối cùng?' },
      { who: 'B', text: 'The young striker, in the last minute.', vi: 'Tiền đạo trẻ, ở phút cuối cùng.' },
    ],
    questions: [
      { q: 'What was the final score?', a: 'Three to two', wrong: ['Two to one', 'One to zero', 'Four to four'] },
      { q: 'When did the last goal happen?', a: 'In the last minute', wrong: ['In the first minute', 'At half time', 'After the match'] },
    ],
  },
  {
    id: 'health-d5', topic: 'health', title: 'At the Pharmacy', titleVi: 'Ở hiệu thuốc',
    lines: [
      { who: 'A', text: 'Do you have anything for a cough?', vi: 'Bạn có thuốc nào trị ho không?' },
      { who: 'B', text: 'Yes, this syrup is very good. Take one spoon three times a day.', vi: 'Có, siro này rất tốt. Uống một thìa ba lần một ngày.' },
      { who: 'A', text: 'Do I need a prescription?', vi: 'Tôi có cần đơn thuốc không?' },
      { who: 'B', text: 'No, you do not. But see a doctor if it lasts more than a week.', vi: 'Không cần. Nhưng hãy đi khám nếu kéo dài quá một tuần.' },
    ],
    questions: [
      { q: 'What does A need?', a: 'Medicine for a cough', wrong: ['A bandage', 'A toothbrush', 'A pair of glasses'] },
      { q: 'How often should A take the syrup?', a: 'Three times a day', wrong: ['Once a week', 'Ten times a day', 'Only at night'] },
    ],
  },

  // ==================================================================
  //  food – Ẩm thực
  // ==================================================================
  {
    id: 'food-d1', topic: 'food', title: 'Ordering Food', titleVi: 'Gọi món',
    lines: [
      { who: 'A', text: 'Are you ready to order?', vi: 'Bạn đã sẵn sàng gọi món chưa?' },
      { who: 'B', text: 'Yes. I will have the grilled chicken with rice, please.', vi: 'Rồi. Cho tôi món gà nướng ăn với cơm.' },
      { who: 'A', text: 'Would you like anything to drink?', vi: 'Bạn có muốn uống gì không?' },
      { who: 'B', text: 'A glass of orange juice, please.', vi: 'Cho tôi một ly nước cam.' },
    ],
    questions: [
      { q: 'What does B order to eat?', a: 'Grilled chicken with rice', wrong: ['Pizza', 'Fried fish', 'Noodle soup'] },
      { q: 'What does B drink?', a: 'Orange juice', wrong: ['Coffee', 'Milk', 'Beer'] },
    ],
  },
  {
    id: 'food-d2', topic: 'food', title: 'Cooking Together', titleVi: 'Cùng nấu ăn',
    lines: [
      { who: 'A', text: 'What are we cooking tonight?', vi: 'Tối nay chúng ta nấu món gì?' },
      { who: 'B', text: 'Let us make fried rice. First, we need to chop the onions.', vi: 'Làm cơm chiên đi. Trước hết ta cần băm hành tây.' },
      { who: 'A', text: 'I will do that. Should I add some garlic too?', vi: 'Mình làm cho. Mình có nên thêm ít tỏi không?' },
      { who: 'B', text: 'Yes, and please heat the oil in the pan.', vi: 'Có, và làm ơn làm nóng dầu trong chảo.' },
    ],
    questions: [
      { q: 'What are they cooking?', a: 'Fried rice', wrong: ['Soup', 'A cake', 'Spaghetti'] },
      { q: 'What should A chop first?', a: 'The onions', wrong: ['The carrots', 'The meat', 'The mushrooms'] },
    ],
  },
  {
    id: 'food-d3', topic: 'food', title: 'At the Coffee Shop', titleVi: 'Ở quán cà phê',
    lines: [
      { who: 'A', text: 'Hi, can I have a large iced coffee with milk?', vi: 'Chào bạn, cho tôi một ly cà phê sữa đá cỡ lớn.' },
      { who: 'B', text: 'Sure. Would you like something to eat?', vi: 'Vâng. Bạn có muốn dùng gì để ăn không?' },
      { who: 'A', text: 'Yes, a chocolate muffin, please.', vi: 'Có, cho tôi một chiếc bánh muffin sô-cô-la.' },
      { who: 'B', text: 'That will be six dollars altogether.', vi: 'Tổng cộng là sáu đô la.' },
    ],
    questions: [
      { q: 'What drink does A order?', a: 'An iced coffee with milk', wrong: ['Hot tea', 'A milkshake', 'Lemonade'] },
      { q: 'How much is the total?', a: 'Six dollars', wrong: ['Two dollars', 'Ten dollars', 'Sixty dollars'] },
    ],
  },
  {
    id: 'food-d4', topic: 'food', title: 'Grocery Shopping', titleVi: 'Đi mua thực phẩm',
    lines: [
      { who: 'A', text: 'Do we need anything from the supermarket?', vi: 'Chúng ta có cần mua gì ở siêu thị không?' },
      { who: 'B', text: 'Yes, we need eggs, milk and some tomatoes.', vi: 'Có, chúng ta cần trứng, sữa và ít cà chua.' },
      { who: 'A', text: 'How many eggs should I buy?', vi: 'Mình nên mua bao nhiêu quả trứng?' },
      { who: 'B', text: 'Ten eggs will be enough for the week.', vi: 'Mười quả là đủ cho cả tuần.' },
    ],
    questions: [
      { q: 'What do they need?', a: 'Eggs, milk and tomatoes', wrong: ['Rice and fish', 'Bread and cheese', 'Apples and oranges'] },
      { q: 'How many eggs will A buy?', a: 'Ten', wrong: ['Two', 'Twenty', 'Five'] },
    ],
  },
  {
    id: 'food-d5', topic: 'food', title: 'A Food Allergy', titleVi: 'Dị ứng thực phẩm',
    lines: [
      { who: 'A', text: 'Excuse me, does this dish contain peanuts?', vi: 'Xin lỗi, món này có đậu phộng không?' },
      { who: 'B', text: 'Yes, it has peanut sauce. Are you allergic?', vi: 'Có, món này có sốt đậu phộng. Bạn bị dị ứng à?' },
      { who: 'A', text: 'Yes, I am. Can you make it without the sauce?', vi: 'Vâng. Bạn làm món này không sốt được không?' },
      { who: 'B', text: 'Of course. I will tell the chef right now.', vi: 'Dĩ nhiên. Tôi sẽ nói với đầu bếp ngay bây giờ.' },
    ],
    questions: [
      { q: 'What is A allergic to?', a: 'Peanuts', wrong: ['Milk', 'Seafood', 'Eggs'] },
      { q: 'What will B do?', a: 'Tell the chef', wrong: ['Call the police', 'Close the restaurant', 'Give A a refund'] },
    ],
  },
];
