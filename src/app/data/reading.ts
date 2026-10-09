/**
 * ============================================================================
 *  reading.ts – Kho bài đọc hiểu (Reading) cho từng chủ đề
 * ============================================================================
 *  Mỗi chủ đề có 5 đoạn văn ngắn kèm 3 câu hỏi trắc nghiệm.
 *  Quy ước: đáp án ĐÚNG luôn ghi ở trường `a`, ba đáp án sai ở `wrong`.
 *  Khi ra đề, QuestionService sẽ tự xáo trộn vị trí các lựa chọn.
 *  Để thêm bài đọc mới: thêm một object vào mảng PASSAGES bên dưới.
 */
import { Passage } from '../models/content.model';

export const PASSAGES: Passage[] = [
  // ==================================================================
  //  CHỦ ĐỀ: Cuộc sống hằng ngày (daily)
  // ==================================================================
  {
    id: 'daily-r1', topic: 'daily', title: 'A Day in My Life', titleVi: 'Một ngày của tôi',
    text: 'I wake up at six o\'clock every morning. First, I brush my teeth and take a shower. Then I have breakfast with my family. My mother makes noodles and my father drinks coffee. After breakfast, I ride my bicycle to school. I come home at five and help my mother cook dinner.',
    textVi: 'Sáng nào tôi cũng thức dậy lúc sáu giờ. Trước tiên tôi đánh răng và tắm. Sau đó tôi ăn sáng cùng gia đình. Mẹ tôi nấu mì còn bố tôi uống cà phê. Ăn sáng xong, tôi đạp xe đến trường. Tôi về nhà lúc năm giờ và giúp mẹ nấu bữa tối.',
    questions: [
      { q: 'What time does the writer wake up?', a: 'At six o\'clock', wrong: ['At five o\'clock', 'At seven o\'clock', 'At eight o\'clock'] },
      { q: 'How does the writer go to school?', a: 'By bicycle', wrong: ['By bus', 'By motorbike', 'On foot'] },
      { q: 'What does the writer do after school?', a: 'Helps cook dinner', wrong: ['Plays football', 'Goes shopping', 'Watches TV'] },
    ],
  },
  {
    id: 'daily-r2', topic: 'daily', title: 'My Family', titleVi: 'Gia đình tôi',
    text: 'There are five people in my family: my parents, my older brother, my grandmother and me. My father is an engineer and my mother is a nurse. My brother is tall and funny. My grandmother is seventy years old, and she tells us wonderful stories at night. We are very happy together.',
    textVi: 'Gia đình tôi có năm người: bố mẹ, anh trai, bà và tôi. Bố tôi là kỹ sư còn mẹ tôi là y tá. Anh trai tôi cao và vui tính. Bà tôi bảy mươi tuổi và bà kể cho chúng tôi những câu chuyện tuyệt vời vào buổi tối. Chúng tôi rất hạnh phúc khi ở bên nhau.',
    questions: [
      { q: 'How many people are in the family?', a: 'Five', wrong: ['Four', 'Six', 'Seven'] },
      { q: 'What is the mother\'s job?', a: 'A nurse', wrong: ['An engineer', 'A teacher', 'A doctor'] },
      { q: 'What does the grandmother do at night?', a: 'She tells stories', wrong: ['She cooks dinner', 'She watches TV', 'She goes shopping'] },
    ],
  },
  {
    id: 'daily-r3', topic: 'daily', title: 'A Rainy Weekend', titleVi: 'Cuối tuần mưa',
    text: 'It rained all weekend, so we stayed at home. On Saturday, I cleaned my room and washed the dishes. In the afternoon, my sister and I played a board game. On Sunday, we watched a funny movie and ate popcorn. It was a quiet but happy weekend.',
    textVi: 'Trời mưa suốt cuối tuần nên chúng tôi ở nhà. Thứ Bảy tôi dọn phòng và rửa bát. Buổi chiều tôi và chị chơi trò chơi cờ bàn. Chủ nhật chúng tôi xem một bộ phim hài và ăn bắp rang. Đó là một cuối tuần yên tĩnh nhưng vui vẻ.',
    questions: [
      { q: 'Why did they stay at home?', a: 'Because it rained', wrong: ['Because they were sick', 'Because they were tired', 'Because it was cold'] },
      { q: 'What did they do on Sunday?', a: 'They watched a movie', wrong: ['They cleaned the room', 'They played football', 'They went to the beach'] },
      { q: 'How was the weekend?', a: 'Quiet but happy', wrong: ['Boring and sad', 'Busy and noisy', 'Cold and long'] },
    ],
  },
  {
    id: 'daily-r4', topic: 'daily', title: 'Shopping at the Market', titleVi: 'Đi chợ',
    text: 'Every Sunday, my mother and I go to the market. We buy fresh vegetables, fruit and fish. The market is crowded, but the prices are cheap. My mother often bargains with the sellers. Last week, I bought a red T-shirt for ten dollars. I was very happy with it.',
    textVi: 'Chủ nhật nào mẹ và tôi cũng đi chợ. Chúng tôi mua rau tươi, trái cây và cá. Chợ đông người nhưng giá rẻ. Mẹ tôi thường mặc cả với người bán. Tuần trước tôi mua một chiếc áo phông đỏ giá mười đô la. Tôi rất hài lòng với nó.',
    questions: [
      { q: 'When do they go to the market?', a: 'Every Sunday', wrong: ['Every Monday', 'Every morning', 'Every Friday'] },
      { q: 'What does the mother often do?', a: 'She bargains', wrong: ['She sings', 'She drives', 'She sleeps'] },
      { q: 'What did the writer buy last week?', a: 'A red T-shirt', wrong: ['A blue jacket', 'A green hat', 'A pair of shoes'] },
    ],
  },
  {
    id: 'daily-r5', topic: 'daily', title: 'My Pet Dog', titleVi: 'Chú chó của tôi',
    text: 'I have a small dog called Milo. He is white with brown ears. Milo loves to run in the park and play with a ball. Every evening, I feed him and take him for a walk. He always sleeps on my bed at night. Milo is my best friend.',
    textVi: 'Tôi có một chú chó nhỏ tên là Milo. Nó có lông trắng và đôi tai nâu. Milo thích chạy trong công viên và chơi với quả bóng. Mỗi tối tôi cho nó ăn và dắt nó đi dạo. Nó luôn ngủ trên giường tôi vào ban đêm. Milo là người bạn thân nhất của tôi.',
    questions: [
      { q: 'What is the dog\'s name?', a: 'Milo', wrong: ['Max', 'Lucky', 'Bobby'] },
      { q: 'What does Milo like to play with?', a: 'A ball', wrong: ['A bone', 'A cat', 'A stick'] },
      { q: 'Where does Milo sleep?', a: 'On the writer\'s bed', wrong: ['In the garden', 'In the kitchen', 'On the sofa'] },
    ],
  },

  // ==================================================================
  //  CHỦ ĐỀ: Công việc IT (it)
  // ==================================================================
  {
    id: 'it-r1', topic: 'it', title: 'A Software Developer', titleVi: 'Một lập trình viên',
    text: 'Minh is a software developer in Ho Chi Minh City. He writes code for a mobile banking app. Every morning, the team has a short meeting called a standup. Then Minh fixes bugs and builds new features. He loves his job because he can learn something new every day.',
    textVi: 'Minh là lập trình viên ở Thành phố Hồ Chí Minh. Anh viết mã cho một ứng dụng ngân hàng di động. Mỗi sáng cả nhóm có một cuộc họp ngắn gọi là standup. Sau đó Minh sửa lỗi và xây dựng các tính năng mới. Anh yêu công việc vì mỗi ngày đều học được điều mới.',
    questions: [
      { q: 'What does Minh build?', a: 'A mobile banking app', wrong: ['A video game', 'A shopping website', 'A hospital system'] },
      { q: 'What is a standup?', a: 'A short daily meeting', wrong: ['A long lecture', 'A coding test', 'A holiday'] },
      { q: 'Why does Minh love his job?', a: 'He learns something new every day', wrong: ['He works alone', 'He works at night', 'He earns a lot of money'] },
    ],
  },
  {
    id: 'it-r2', topic: 'it', title: 'Protect Your Password', titleVi: 'Bảo vệ mật khẩu',
    text: 'A strong password is your first line of defense online. Use at least twelve characters with letters, numbers and symbols. Never use the same password for two accounts. Do not share your password with anyone, even your friends. It is also a good idea to turn on two-factor login for extra safety.',
    textVi: 'Một mật khẩu mạnh là tuyến phòng thủ đầu tiên của bạn trên mạng. Hãy dùng ít nhất mười hai ký tự gồm chữ, số và ký hiệu. Không bao giờ dùng cùng một mật khẩu cho hai tài khoản. Đừng chia sẻ mật khẩu với bất kỳ ai, kể cả bạn bè. Bạn cũng nên bật đăng nhập hai lớp để an toàn hơn.',
    questions: [
      { q: 'How long should a strong password be?', a: 'At least twelve characters', wrong: ['Four characters', 'Only numbers', 'Exactly six letters'] },
      { q: 'What should you NOT do?', a: 'Use one password for two accounts', wrong: ['Use symbols', 'Use numbers', 'Turn on extra safety'] },
      { q: 'What gives extra safety?', a: 'Two-factor login', wrong: ['A shorter password', 'A shared password', 'A public network'] },
    ],
  },
  {
    id: 'it-r3', topic: 'it', title: 'What Is the Cloud?', titleVi: 'Đám mây là gì?',
    text: 'The cloud is not in the sky. It means computers in big buildings called data centers. When you save photos to the cloud, they stay on those computers instead of your phone. You can open them from any device with internet. Many companies use the cloud because it is flexible and saves money.',
    textVi: 'Đám mây không nằm trên bầu trời. Nó là những máy tính đặt trong các tòa nhà lớn gọi là trung tâm dữ liệu. Khi bạn lưu ảnh lên đám mây, ảnh nằm trên các máy tính đó thay vì điện thoại. Bạn có thể mở chúng từ bất kỳ thiết bị nào có internet. Nhiều công ty dùng đám mây vì nó linh hoạt và tiết kiệm tiền.',
    questions: [
      { q: 'Where is "the cloud"?', a: 'In data centers', wrong: ['In the sky', 'In your phone', 'In a printer'] },
      { q: 'What do you need to open cloud files?', a: 'An internet connection', wrong: ['A printer', 'A USB drive', 'A camera'] },
      { q: 'Why do companies use the cloud?', a: 'It is flexible and saves money', wrong: ['It is very slow', 'It needs no electricity', 'It is always free'] },
    ],
  },
  {
    id: 'it-r4', topic: 'it', title: 'Working with Git', titleVi: 'Làm việc với Git',
    text: 'Git helps developers work together on the same project. Each developer creates a branch to try new ideas without breaking the main code. When the work is ready, they open a pull request. Another developer reviews the code and gives feedback. After that, the branch is merged into the main branch.',
    textVi: 'Git giúp các lập trình viên cùng làm một dự án. Mỗi người tạo một nhánh để thử ý tưởng mới mà không làm hỏng mã chính. Khi công việc sẵn sàng, họ mở một yêu cầu hợp nhất. Một lập trình viên khác xem xét mã và đưa ra phản hồi. Sau đó nhánh được hợp nhất vào nhánh chính.',
    questions: [
      { q: 'Why do developers create a branch?', a: 'To try ideas safely', wrong: ['To delete the project', 'To print the code', 'To buy a license'] },
      { q: 'What happens after a pull request?', a: 'Another developer reviews the code', wrong: ['The computer shuts down', 'The project is deleted', 'The team goes home'] },
      { q: 'Where is the branch merged at the end?', a: 'Into the main branch', wrong: ['Into a printer', 'Into an email', 'Into a photo'] },
    ],
  },
  {
    id: 'it-r5', topic: 'it', title: 'Artificial Intelligence at Work', titleVi: 'Trí tuệ nhân tạo trong công việc',
    text: 'Artificial intelligence is changing the way we work. A chatbot can answer customer questions all day. AI tools can write simple code and find bugs quickly. However, people are still needed to check the results and make important decisions. The best teams use AI as a helper, not as a replacement.',
    textVi: 'Trí tuệ nhân tạo đang thay đổi cách chúng ta làm việc. Chatbot có thể trả lời câu hỏi khách hàng cả ngày. Công cụ AI có thể viết mã đơn giản và tìm lỗi nhanh chóng. Tuy nhiên vẫn cần con người kiểm tra kết quả và đưa ra quyết định quan trọng. Các nhóm giỏi nhất dùng AI như người trợ giúp chứ không phải người thay thế.',
    questions: [
      { q: 'What can a chatbot do?', a: 'Answer customer questions', wrong: ['Cook dinner', 'Drive a car', 'Build a house'] },
      { q: 'Why are people still needed?', a: 'To check results and decide', wrong: ['To turn on the computer', 'To pay the internet bill', 'To carry the servers'] },
      { q: 'How do the best teams use AI?', a: 'As a helper', wrong: ['As a boss', 'As a replacement', 'As a toy'] },
    ],
  },

  // ==================================================================
  //  CHỦ ĐỀ: Du lịch & Khám phá (travel)
  // ==================================================================
  {
    id: 'travel-r1', topic: 'travel', title: 'Ha Long Bay', titleVi: 'Vịnh Hạ Long',
    text: 'Ha Long Bay is one of the most beautiful places in Vietnam. It has thousands of islands, clear blue water and amazing caves. Many tourists visit the bay every year. They take a boat cruise, kayak between the rocks and swim at quiet beaches. The best time to visit is in spring and autumn.',
    textVi: 'Vịnh Hạ Long là một trong những nơi đẹp nhất Việt Nam. Nơi đây có hàng nghìn hòn đảo, làn nước xanh trong và những hang động kỳ thú. Mỗi năm có nhiều du khách đến vịnh. Họ đi du thuyền, chèo kayak giữa các tảng đá và bơi ở những bãi biển yên tĩnh. Thời điểm tốt nhất để đến là mùa xuân và mùa thu.',
    questions: [
      { q: 'What is Ha Long Bay famous for?', a: 'Its islands and caves', wrong: ['Its mountains and snow', 'Its deserts', 'Its shopping centers'] },
      { q: 'What can tourists do there?', a: 'Kayak between the rocks', wrong: ['Ski on the snow', 'Ride camels', 'Visit a castle'] },
      { q: 'When is the best time to visit?', a: 'In spring and autumn', wrong: ['Only in winter', 'Only at night', 'In the rainy season'] },
    ],
  },
  {
    id: 'travel-r2', topic: 'travel', title: 'At the Airport', titleVi: 'Ở sân bay',
    text: 'Lan arrived at the airport two hours before her flight. First, she checked in and gave her suitcase to the staff. Then she went through security and showed her passport. Her gate was number twelve. While she waited, she bought a coffee and a small souvenir. Finally, the announcement said, "Flight VN205 is now boarding."',
    textVi: 'Lan đến sân bay trước chuyến bay hai tiếng. Đầu tiên cô làm thủ tục và giao va-li cho nhân viên. Sau đó cô qua cổng an ninh và xuất trình hộ chiếu. Cổng của cô là số mười hai. Trong lúc chờ cô mua một ly cà phê và một món quà lưu niệm nhỏ. Cuối cùng loa thông báo: "Chuyến bay VN205 bắt đầu lên máy bay."',
    questions: [
      { q: 'When did Lan arrive at the airport?', a: 'Two hours before the flight', wrong: ['Ten minutes before the flight', 'After the flight', 'The day before'] },
      { q: 'Which gate was Lan\'s?', a: 'Gate twelve', wrong: ['Gate two', 'Gate five', 'Gate twenty'] },
      { q: 'What did she buy while waiting?', a: 'A coffee and a souvenir', wrong: ['A ticket and a map', 'A hat and shoes', 'A camera and a book'] },
    ],
  },
  {
    id: 'travel-r3', topic: 'travel', title: 'A Hotel in Paris', titleVi: 'Khách sạn ở Paris',
    text: 'Tom and his wife stayed in a small hotel near the Eiffel Tower. Their room was on the fifth floor and had a lovely view. Breakfast was included, and the receptionist spoke English. Every morning, they ate fresh croissants and drank hot coffee. They loved the hotel so much that they booked it again for next year.',
    textVi: 'Tom và vợ ở trong một khách sạn nhỏ gần tháp Eiffel. Phòng của họ ở tầng năm và có tầm nhìn tuyệt đẹp. Bữa sáng đã được bao gồm và nhân viên lễ tân nói được tiếng Anh. Mỗi sáng họ ăn bánh sừng bò tươi và uống cà phê nóng. Họ thích khách sạn đến mức đã đặt lại cho năm sau.',
    questions: [
      { q: 'Where was the hotel?', a: 'Near the Eiffel Tower', wrong: ['Near a beach', 'On a mountain', 'Next to an airport'] },
      { q: 'Which floor was their room on?', a: 'The fifth floor', wrong: ['The first floor', 'The tenth floor', 'The second floor'] },
      { q: 'Why did they book it again?', a: 'They loved the hotel', wrong: ['It was very cheap', 'It was empty', 'It was their friend\'s house'] },
    ],
  },
  {
    id: 'travel-r4', topic: 'travel', title: 'Camping by the Lake', titleVi: 'Cắm trại bên hồ',
    text: 'Last summer, our family went camping by a quiet lake. We put up two tents and made a campfire in the evening. My father cooked sausages and we sang songs. At night, the sky was full of stars. In the morning, we went kayaking and saw a family of ducks. It was the best trip ever.',
    textVi: 'Mùa hè năm ngoái gia đình tôi đi cắm trại bên một hồ nước yên tĩnh. Chúng tôi dựng hai cái lều và đốt lửa trại vào buổi tối. Bố nấu xúc xích và chúng tôi hát những bài hát. Ban đêm bầu trời đầy sao. Buổi sáng chúng tôi chèo kayak và thấy một gia đình vịt. Đó là chuyến đi tuyệt vời nhất.',
    questions: [
      { q: 'Where did the family camp?', a: 'By a lake', wrong: ['In a desert', 'On a beach', 'In a city'] },
      { q: 'What did the father cook?', a: 'Sausages', wrong: ['Fish', 'Noodles', 'Pizza'] },
      { q: 'What did they see in the morning?', a: 'A family of ducks', wrong: ['A bear', 'A tiger', 'A whale'] },
    ],
  },
  {
    id: 'travel-r5', topic: 'travel', title: 'Travel Tips', titleVi: 'Mẹo du lịch',
    text: 'Good preparation makes a trip easier. First, make a simple itinerary so you do not waste time. Keep your passport and money in a safe place. Learn a few local words such as "hello" and "thank you". Finally, take small gifts from home. Local people usually smile when they hear their own language.',
    textVi: 'Chuẩn bị tốt giúp chuyến đi dễ dàng hơn. Trước hết hãy lập một lịch trình đơn giản để không lãng phí thời gian. Hãy giữ hộ chiếu và tiền ở nơi an toàn. Học vài từ địa phương như "xin chào" và "cảm ơn". Cuối cùng hãy mang theo những món quà nhỏ từ quê nhà. Người dân địa phương thường mỉm cười khi nghe ngôn ngữ của họ.',
    questions: [
      { q: 'Why make an itinerary?', a: 'To save time', wrong: ['To buy tickets', 'To lose luggage', 'To wake up late'] },
      { q: 'Where should you keep your passport?', a: 'In a safe place', wrong: ['In a taxi', 'On a table', 'In a hotel lobby'] },
      { q: 'Why learn local words?', a: 'People smile when they hear their language', wrong: ['It is free', 'It is a law', 'It makes flights faster'] },
    ],
  },

  // ==================================================================
  //  CHỦ ĐỀ: Học tập & Giáo dục (study)
  // ==================================================================
  {
    id: 'study-r1', topic: 'study', title: 'My First Day at School', titleVi: 'Ngày đầu đi học',
    text: 'Yesterday was my first day at a new school. I was nervous, but my teacher was friendly. She showed me my classroom and my desk. At break time, a girl called Hoa invited me to play with her group. By the afternoon, I had three new friends. I can not wait for tomorrow!',
    textVi: 'Hôm qua là ngày đầu tiên tôi đến trường mới. Tôi hồi hộp nhưng cô giáo rất thân thiện. Cô chỉ cho tôi lớp học và chiếc bàn của tôi. Giờ ra chơi, một bạn gái tên Hoa mời tôi chơi cùng nhóm. Đến buổi chiều tôi đã có ba người bạn mới. Tôi nóng lòng chờ đến ngày mai!',
    questions: [
      { q: 'How did the writer feel at first?', a: 'Nervous', wrong: ['Angry', 'Bored', 'Sleepy'] },
      { q: 'Who invited the writer to play?', a: 'Hoa', wrong: ['The teacher', 'The principal', 'A boy'] },
      { q: 'How many new friends did the writer make?', a: 'Three', wrong: ['One', 'Five', 'Ten'] },
    ],
  },
  {
    id: 'study-r2', topic: 'study', title: 'How to Learn Vocabulary', titleVi: 'Cách học từ vựng',
    text: 'Learning new words is easier with a good method. First, learn only ten words a day. Say each word aloud and write a sentence with it. Review the words the next day, and again after one week. Using new words in real conversations helps you remember them forever.',
    textVi: 'Học từ mới sẽ dễ hơn khi có phương pháp tốt. Trước hết mỗi ngày chỉ học mười từ. Đọc to từng từ và viết một câu với từ đó. Ôn lại vào ngày hôm sau và ôn lại sau một tuần. Dùng từ mới trong hội thoại thật giúp bạn nhớ mãi.',
    questions: [
      { q: 'How many words should you learn a day?', a: 'Ten', wrong: ['One hundred', 'Fifty', 'Two'] },
      { q: 'What should you do with each word?', a: 'Say it aloud and write a sentence', wrong: ['Only read it silently', 'Hide it', 'Delete it'] },
      { q: 'What helps you remember words forever?', a: 'Using them in conversations', wrong: ['Sleeping all day', 'Never reviewing', 'Playing games only'] },
    ],
  },
  {
    id: 'study-r3', topic: 'study', title: 'University Life', titleVi: 'Đời sống đại học',
    text: 'Linh is a first-year student at a big university. Her major is biology. She lives in a dormitory with three roommates. She has lectures in the morning and studies in the library in the afternoon. On weekends, she joins the English club and volunteers at an animal shelter. She says university life is busy but exciting.',
    textVi: 'Linh là sinh viên năm nhất ở một trường đại học lớn. Chuyên ngành của cô là sinh học. Cô sống trong ký túc xá với ba bạn cùng phòng. Cô có bài giảng vào buổi sáng và học ở thư viện vào buổi chiều. Cuối tuần cô tham gia câu lạc bộ tiếng Anh và làm tình nguyện ở trạm cứu hộ động vật. Cô nói đời sống đại học bận rộn nhưng thú vị.',
    questions: [
      { q: 'What is Linh\'s major?', a: 'Biology', wrong: ['Law', 'Music', 'History'] },
      { q: 'Where does Linh live?', a: 'In a dormitory', wrong: ['In a hotel', 'In a village', 'With her uncle'] },
      { q: 'What does she do at weekends?', a: 'Joins a club and volunteers', wrong: ['Sleeps all day', 'Travels abroad', 'Works at a bank'] },
    ],
  },
  {
    id: 'study-r4', topic: 'study', title: 'The Science Fair', titleVi: 'Hội chợ khoa học',
    text: 'Our school held a science fair last Friday. My team made a small volcano using baking soda and vinegar. The experiment was a big success and everyone clapped. A group of older students showed a robot that could draw pictures. The teachers gave first prize to a project about clean water.',
    textVi: 'Trường chúng tôi tổ chức hội chợ khoa học vào thứ Sáu tuần trước. Nhóm tôi làm một ngọn núi lửa nhỏ bằng muối nở và giấm. Thí nghiệm rất thành công và mọi người vỗ tay. Một nhóm học sinh lớp trên trình diễn một con robot có thể vẽ tranh. Các thầy cô trao giải nhất cho một dự án về nước sạch.',
    questions: [
      { q: 'What did the writer\'s team make?', a: 'A small volcano', wrong: ['A robot', 'A clean-water machine', 'A telescope'] },
      { q: 'What could the older students\' robot do?', a: 'Draw pictures', wrong: ['Cook food', 'Sing songs', 'Clean the school'] },
      { q: 'What won first prize?', a: 'A project about clean water', wrong: ['The volcano', 'The robot', 'A music project'] },
    ],
  },
  {
    id: 'study-r5', topic: 'study', title: 'Studying Abroad', titleVi: 'Du học',
    text: 'Many students dream of studying abroad. It is a chance to learn a new language and meet people from different cultures. However, it can be expensive, so many students apply for a scholarship. You also need a good English certificate, such as IELTS. Although life abroad is not always easy, most students say it changed their lives.',
    textVi: 'Nhiều học sinh mơ ước được du học. Đó là cơ hội để học một ngôn ngữ mới và gặp những người đến từ các nền văn hóa khác. Tuy nhiên nó có thể tốn kém nên nhiều bạn nộp đơn xin học bổng. Bạn cũng cần một chứng chỉ tiếng Anh tốt như IELTS. Dù cuộc sống ở nước ngoài không phải lúc nào cũng dễ dàng, hầu hết sinh viên nói nó đã thay đổi cuộc đời họ.',
    questions: [
      { q: 'What is one benefit of studying abroad?', a: 'Learning a new language', wrong: ['Staying at home', 'Saving money', 'Skipping exams'] },
      { q: 'Why do students apply for a scholarship?', a: 'Studying abroad can be expensive', wrong: ['It is very cheap', 'It is a holiday', 'They dislike school'] },
      { q: 'What certificate is mentioned?', a: 'IELTS', wrong: ['A driving license', 'A music prize', 'A cooking diploma'] },
    ],
  },

  // ==================================================================
  //  CHỦ ĐỀ: Sức khỏe & Thể thao (health)
  // ==================================================================
  {
    id: 'health-r1', topic: 'health', title: 'Healthy Habits', titleVi: 'Thói quen lành mạnh',
    text: 'Healthy habits keep our body and mind strong. We should eat vegetables and fruit every day. We need eight hours of sleep and at least thirty minutes of exercise. It is also important to drink enough water and wash our hands often. Small habits make a big difference over time.',
    textVi: 'Thói quen lành mạnh giúp cơ thể và tâm trí chúng ta khỏe mạnh. Chúng ta nên ăn rau và trái cây mỗi ngày. Chúng ta cần tám tiếng ngủ và ít nhất ba mươi phút vận động. Uống đủ nước và rửa tay thường xuyên cũng rất quan trọng. Những thói quen nhỏ tạo nên sự khác biệt lớn theo thời gian.',
    questions: [
      { q: 'How much sleep do we need?', a: 'Eight hours', wrong: ['Two hours', 'Four hours', 'Twelve hours'] },
      { q: 'How much exercise do we need at least?', a: 'Thirty minutes', wrong: ['One minute', 'Five hours', 'Ten seconds'] },
      { q: 'What makes a big difference?', a: 'Small habits', wrong: ['Big machines', 'Expensive food', 'New clothes'] },
    ],
  },
  {
    id: 'health-r2', topic: 'health', title: 'A Visit to the Doctor', titleVi: 'Đi khám bác sĩ',
    text: 'Nam had a fever and a sore throat, so his mother took him to the clinic. The doctor checked his temperature and looked at his throat. She said he had a cold and needed rest. She wrote a prescription for some medicine. Nam took the medicine twice a day and felt better after three days.',
    textVi: 'Nam bị sốt và đau họng nên mẹ đưa em đến phòng khám. Bác sĩ đo nhiệt độ và khám cổ họng của em. Bác sĩ nói em bị cảm lạnh và cần nghỉ ngơi. Bác sĩ kê đơn một ít thuốc. Nam uống thuốc hai lần một ngày và thấy đỡ hơn sau ba ngày.',
    questions: [
      { q: 'What symptoms did Nam have?', a: 'A fever and a sore throat', wrong: ['A broken leg', 'A toothache', 'A rash'] },
      { q: 'What did the doctor say?', a: 'Nam had a cold', wrong: ['Nam had a broken arm', 'Nam was healthy', 'Nam needed surgery'] },
      { q: 'When did Nam feel better?', a: 'After three days', wrong: ['At once', 'After a year', 'After one hour'] },
    ],
  },
  {
    id: 'health-r3', topic: 'health', title: 'The Football Match', titleVi: 'Trận bóng đá',
    text: 'On Saturday, our school team played football against a team from another school. The match started at nine o\'clock. In the first half, the score was one to one. In the second half, our captain scored a beautiful goal. We won two to one, and all the fans cheered loudly.',
    textVi: 'Thứ Bảy đội bóng của trường tôi đấu với một đội trường khác. Trận đấu bắt đầu lúc chín giờ. Hiệp một tỷ số là một một. Hiệp hai đội trưởng của chúng tôi ghi một bàn thắng tuyệt đẹp. Chúng tôi thắng hai một và tất cả người hâm mộ cổ vũ rất to.',
    questions: [
      { q: 'What was the score in the first half?', a: 'One to one', wrong: ['Two to zero', 'Three to two', 'Zero to zero'] },
      { q: 'Who scored the winning goal?', a: 'The captain', wrong: ['The goalkeeper', 'The referee', 'The coach'] },
      { q: 'What was the final score?', a: 'Two to one', wrong: ['One to two', 'Three to one', 'One to one'] },
    ],
  },
  {
    id: 'health-r4', topic: 'health', title: 'Swimming Is Great', titleVi: 'Bơi lội thật tuyệt',
    text: 'Swimming is one of the best sports for your body. It uses almost all of your muscles and is easy on your joints. It also helps your heart and lungs become stronger. Before you swim, remember to warm up. Always swim in a safe place, and never swim alone.',
    textVi: 'Bơi lội là một trong những môn thể thao tốt nhất cho cơ thể. Nó vận động gần như mọi cơ bắp và không gây hại cho khớp. Nó cũng giúp tim và phổi khỏe hơn. Trước khi bơi hãy nhớ khởi động. Luôn bơi ở nơi an toàn và đừng bao giờ bơi một mình.',
    questions: [
      { q: 'What does swimming use?', a: 'Almost all muscles', wrong: ['Only the legs', 'Only the arms', 'No muscles'] },
      { q: 'What should you do before swimming?', a: 'Warm up', wrong: ['Eat a big meal', 'Run a marathon', 'Sleep for an hour'] },
      { q: 'What is a safety rule?', a: 'Never swim alone', wrong: ['Swim at night', 'Swim after storms', 'Swim without a rule'] },
    ],
  },
  {
    id: 'health-r5', topic: 'health', title: 'Sleep and Stress', titleVi: 'Giấc ngủ và căng thẳng',
    text: 'Stress can make it hard to sleep, and poor sleep can make stress worse. To sleep better, go to bed at the same time every night. Avoid your phone for one hour before bed. Try to relax by reading a book or listening to soft music. If you still feel worried, talk to a friend or a counselor.',
    textVi: 'Căng thẳng có thể khiến bạn khó ngủ, và ngủ kém có thể làm căng thẳng tệ hơn. Để ngủ ngon hơn, hãy đi ngủ vào cùng một giờ mỗi tối. Tránh dùng điện thoại một tiếng trước khi ngủ. Hãy thư giãn bằng cách đọc sách hoặc nghe nhạc nhẹ. Nếu bạn vẫn lo lắng, hãy nói chuyện với bạn bè hoặc chuyên viên tư vấn.',
    questions: [
      { q: 'What can stress cause?', a: 'Trouble sleeping', wrong: ['Better health', 'Faster running', 'Higher marks'] },
      { q: 'What should you avoid before bed?', a: 'Using your phone', wrong: ['Reading a book', 'Soft music', 'Going to bed'] },
      { q: 'Who can you talk to if you are worried?', a: 'A friend or a counselor', wrong: ['A stranger online', 'Nobody', 'A pilot'] },
    ],
  },

  // ==================================================================
  //  CHỦ ĐỀ: Ẩm thực (food)
  // ==================================================================
  {
    id: 'food-r1', topic: 'food', title: 'Pho for Breakfast', titleVi: 'Phở cho bữa sáng',
    text: 'Pho is a famous Vietnamese noodle soup. It is made with rice noodles, beef or chicken, and a hot, tasty broth. People add fresh herbs, lime and chili on top. Many Vietnamese families eat pho for breakfast. Some visitors say it is the best soup they have ever tried.',
    textVi: 'Phở là món mì nước nổi tiếng của Việt Nam. Món này được nấu từ bún gạo, thịt bò hoặc gà và nước dùng nóng, ngon. Người ta thêm rau thơm tươi, chanh và ớt lên trên. Nhiều gia đình Việt ăn phở vào bữa sáng. Một số du khách nói đó là món súp ngon nhất họ từng thử.',
    questions: [
      { q: 'What is pho?', a: 'A noodle soup', wrong: ['A cake', 'A drink', 'A salad'] },
      { q: 'What do people add on top?', a: 'Herbs, lime and chili', wrong: ['Ice cream', 'Chocolate', 'Butter'] },
      { q: 'When do many families eat pho?', a: 'For breakfast', wrong: ['Only at midnight', 'Only at parties', 'Never'] },
    ],
  },
  {
    id: 'food-r2', topic: 'food', title: 'Making Pancakes', titleVi: 'Làm bánh kếp',
    text: 'Pancakes are easy to make. Mix one cup of flour, one egg, a spoon of sugar and a cup of milk. Stir until there are no lumps. Heat a little butter in a pan and pour in some batter. Cook for two minutes on each side. Serve the pancakes with honey or fresh strawberries.',
    textVi: 'Bánh kếp rất dễ làm. Trộn một cốc bột mì, một quả trứng, một thìa đường và một cốc sữa. Khuấy đến khi không còn vón cục. Làm nóng chút bơ trong chảo và đổ vào một ít bột. Chiên hai phút mỗi mặt. Dọn bánh kếp với mật ong hoặc dâu tây tươi.',
    questions: [
      { q: 'How much flour do you need?', a: 'One cup', wrong: ['Five cups', 'One spoon', 'Ten cups'] },
      { q: 'How long do you cook each side?', a: 'Two minutes', wrong: ['One hour', 'Ten seconds', 'Twenty minutes'] },
      { q: 'What can you serve pancakes with?', a: 'Honey or strawberries', wrong: ['Soy sauce', 'Fish', 'Rice'] },
    ],
  },
  {
    id: 'food-r3', topic: 'food', title: 'At the Restaurant', titleVi: 'Ở nhà hàng',
    text: 'On Friday evening, we went to an Italian restaurant. The waiter showed us to a table by the window. I ordered spaghetti and my friend ordered a pizza. For dessert, we shared a chocolate cake. When we asked for the bill, the waiter said a service charge was included. We left a small tip because the service was excellent.',
    textVi: 'Tối thứ Sáu chúng tôi đến một nhà hàng Ý. Người phục vụ dẫn chúng tôi đến một bàn cạnh cửa sổ. Tôi gọi mì spaghetti còn bạn tôi gọi một chiếc pizza. Tráng miệng chúng tôi chia nhau một chiếc bánh sô-cô-la. Khi xin hóa đơn, người phục vụ nói đã bao gồm phí phục vụ. Chúng tôi để lại một ít tiền boa vì dịch vụ rất tuyệt.',
    questions: [
      { q: 'What kind of restaurant was it?', a: 'Italian', wrong: ['Chinese', 'Mexican', 'Vietnamese'] },
      { q: 'What did they share for dessert?', a: 'A chocolate cake', wrong: ['Ice cream', 'A fruit salad', 'A pancake'] },
      { q: 'Why did they leave a tip?', a: 'The service was excellent', wrong: ['The food was cold', 'It was a rule', 'They forgot the bill'] },
    ],
  },
  {
    id: 'food-r4', topic: 'food', title: 'A Healthy Salad', titleVi: 'Món salad lành mạnh',
    text: 'A salad is a light and healthy meal. You can use lettuce, tomato, cucumber and carrot. Add some boiled egg or grilled chicken for protein. Finally, pour a little olive oil and lemon juice on top. This salad has lots of vitamins and very few calories, so it is perfect for hot days.',
    textVi: 'Salad là một bữa ăn nhẹ và lành mạnh. Bạn có thể dùng xà lách, cà chua, dưa chuột và cà rốt. Thêm trứng luộc hoặc gà nướng để bổ sung chất đạm. Cuối cùng rưới một chút dầu ô-liu và nước chanh lên trên. Món salad này có nhiều vi-ta-min và rất ít ca-lo nên rất hợp cho những ngày nóng.',
    questions: [
      { q: 'What gives the salad protein?', a: 'Egg or grilled chicken', wrong: ['Lettuce', 'Lemon juice', 'Carrot'] },
      { q: 'What do you pour on top?', a: 'Olive oil and lemon juice', wrong: ['Chocolate sauce', 'Milk', 'Soup'] },
      { q: 'When is the salad perfect?', a: 'On hot days', wrong: ['On snowy days', 'At midnight only', 'On birthdays only'] },
    ],
  },
  {
    id: 'food-r5', topic: 'food', title: 'Street Food in Vietnam', titleVi: 'Đồ ăn đường phố Việt Nam',
    text: 'Street food is a big part of Vietnamese culture. On every corner, you can find a small stall selling banh mi, grilled pork or sweet soup. The food is cheap, fresh and delicious. People sit on small plastic chairs and chat with friends. Many tourists say that trying street food is the best way to know Vietnam.',
    textVi: 'Đồ ăn đường phố là một phần lớn của văn hóa Việt Nam. Ở mỗi góc phố bạn đều có thể thấy một quầy nhỏ bán bánh mì, thịt nướng hoặc chè. Đồ ăn rẻ, tươi và rất ngon. Mọi người ngồi trên những chiếc ghế nhựa nhỏ và trò chuyện với bạn bè. Nhiều du khách nói rằng thử đồ ăn đường phố là cách tốt nhất để hiểu Việt Nam.',
    questions: [
      { q: 'Where can you find street food?', a: 'On every corner', wrong: ['Only in hotels', 'Only at airports', 'Only in schools'] },
      { q: 'What is the food like?', a: 'Cheap, fresh and delicious', wrong: ['Expensive and old', 'Cold and bland', 'Rare and salty'] },
      { q: 'What do people sit on?', a: 'Small plastic chairs', wrong: ['Sofas', 'The floor', 'Big wooden benches'] },
    ],
  },
];
