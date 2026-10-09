/**
 * ============================================================================
 *  ielts.ts – Kho đề luyện IELTS (Listening, Reading, Writing, Speaking)
 * ============================================================================
 *  Đề mô phỏng theo dạng đề IELTS Academic. Đáp án đúng ghi đầu tiên (`a`),
 *  khi ra đề hệ thống sẽ tự xáo trộn. Câu điền (fill) chấp nhận nhiều cách viết.
 */
import { ExamAudio, ExamPassage, IeltsSpeakingItem, IeltsWritingTask } from '../../models/exam.model';

const TFNG = ['True', 'False', 'Not Given'];
/** Tạo câu True/False/Not Given: đáp án đúng ghi đầu tiên, hai đáp án còn lại là phương án sai */
const tf = (q: string, a: 'True' | 'False' | 'Not Given', ex: string) => ({ q, a, wrong: TFNG.filter((x) => x !== a), ex });

// ===========================================================================
//  LISTENING
// ===========================================================================
export const IELTS_LISTENING: ExamAudio[] = [
  {
    id: 'ielts-l1', title: 'Section 1 – Joining a sports club', titleVi: 'Phần 1 – Đăng ký câu lạc bộ thể thao',
    lines: [
      { who: 'A', text: 'Good morning, Riverside Sports Club. How can I help you?', vi: 'Chào buổi sáng, CLB Thể thao Riverside. Tôi có thể giúp gì?' },
      { who: 'B', text: 'Hi, I\'d like to join the club. Could you tell me about the membership?', vi: 'Chào, tôi muốn tham gia câu lạc bộ. Bạn cho tôi biết về thẻ hội viên được không?' },
      { who: 'A', text: 'Of course. The standard membership is forty-five pounds a month, and it includes the swimming pool and the gym.', vi: 'Dĩ nhiên. Thẻ tiêu chuẩn là bốn mươi lăm bảng mỗi tháng, gồm hồ bơi và phòng gym.' },
      { who: 'B', text: 'And are there any classes? I\'m interested in yoga.', vi: 'Có lớp học nào không? Tôi quan tâm đến yoga.' },
      { who: 'A', text: 'Yoga is on Wednesday evenings at seven o\'clock. It costs an extra eight pounds per session.', vi: 'Yoga vào tối thứ Tư lúc bảy giờ. Phụ thu tám bảng mỗi buổi.' },
      { who: 'B', text: 'That\'s fine. My name is Helen Brooks. That\'s B-R-O-O-K-S. And I\'d like to start on the fifteenth of March.', vi: 'Được. Tên tôi là Helen Brooks, viết B-R-O-O-K-S. Tôi muốn bắt đầu vào ngày mười lăm tháng Ba.' },
    ],
    mcq: [
      { q: 'What does the standard membership include?', a: 'The swimming pool and the gym', wrong: ['Only the gym', 'Yoga classes', 'A personal trainer'], ex: 'Thẻ tiêu chuẩn gồm hồ bơi và phòng gym.' },
      { q: 'When is the yoga class?', a: 'Wednesday evening', wrong: ['Monday morning', 'Friday evening', 'Sunday afternoon'], ex: 'Yoga vào tối thứ Tư lúc 7 giờ.' },
    ],
    fill: [
      { q: 'Monthly membership fee: £ ____', answers: ['45', 'forty-five', 'forty five'], ex: 'Bốn mươi lăm bảng.' },
      { q: 'Extra cost per yoga session: £ ____', answers: ['8', 'eight'], ex: 'Phụ thu tám bảng.' },
      { q: 'Surname of the new member: ____', answers: ['Brooks'], ex: 'Đánh vần B-R-O-O-K-S.' },
    ],
  },
  {
    id: 'ielts-l2', title: 'Section 2 – Campus orientation talk', titleVi: 'Phần 2 – Buổi giới thiệu khuôn viên',
    lines: [
      { who: 'A', text: 'Welcome to Westfield University. In the next ten minutes I\'ll explain the main facilities on campus.', vi: 'Chào mừng đến Đại học Westfield. Trong mười phút tới tôi sẽ giới thiệu các tiện ích chính.' },
      { who: 'A', text: 'The library is on your left. It is open until midnight during exam weeks, but at other times it closes at ten p.m.', vi: 'Thư viện ở bên trái. Nó mở đến nửa đêm trong các tuần thi, còn bình thường đóng cửa lúc mười giờ tối.' },
      { who: 'A', text: 'Next to it you\'ll see the student center, where you can get discounted meals and join clubs. Please note the sports hall is being renovated, so it will reopen in September.', vi: 'Cạnh đó là trung tâm sinh viên, nơi bạn có bữa ăn giảm giá và tham gia câu lạc bộ. Xin lưu ý nhà thi đấu đang được sửa chữa và sẽ mở lại vào tháng Chín.' },
      { who: 'A', text: 'Finally, if you have any problem with your accommodation, contact the housing office on the ground floor of Building C.', vi: 'Cuối cùng, nếu có vấn đề về chỗ ở, hãy liên hệ văn phòng nhà ở ở tầng trệt Tòa C.' },
    ],
    mcq: [
      { q: 'When does the library close during exam weeks?', a: 'At midnight', wrong: ['At ten p.m.', 'At six p.m.', 'It stays open all night'], ex: 'Mở đến nửa đêm trong tuần thi.' },
      { q: 'What is happening to the sports hall?', a: 'It is being renovated.', wrong: ['It is being demolished.', 'It is closed permanently.', 'It has just opened.'], ex: 'Đang được sửa chữa, mở lại vào tháng Chín.' },
      { q: 'Where is the housing office?', a: 'On the ground floor of Building C', wrong: ['Next to the library', 'In the student center', 'On the top floor of Building A'], ex: 'Tầng trệt Tòa C.' },
    ],
    fill: [{ q: 'The sports hall will reopen in ____.', answers: ['September'], ex: 'Mở lại vào tháng Chín.' }],
  },
  {
    id: 'ielts-l3', title: 'Section 3 – Students discussing a project', titleVi: 'Phần 3 – Sinh viên thảo luận đồ án',
    lines: [
      { who: 'A', text: 'So, Tom, have you decided on the topic for our environmental science project?', vi: 'Tom, bạn đã chọn chủ đề cho đồ án khoa học môi trường chưa?' },
      { who: 'B', text: 'I was thinking about plastic waste in the ocean, but there\'s so much data already published.', vi: 'Tớ nghĩ về rác thải nhựa ở đại dương, nhưng đã có quá nhiều dữ liệu được công bố rồi.' },
      { who: 'A', text: 'How about looking at how our own university deals with waste? We could survey students and interview the cleaning staff.', vi: 'Hay là xem trường mình xử lý rác thế nào? Ta có thể khảo sát sinh viên và phỏng vấn nhân viên vệ sinh.' },
      { who: 'B', text: 'That\'s more original, and it\'s practical. But the survey may take a lot of time, so we should design the questions this week.', vi: 'Ý đó độc đáo và thực tế hơn. Nhưng khảo sát có thể tốn nhiều thời gian nên ta nên thiết kế câu hỏi trong tuần này.' },
      { who: 'A', text: 'Agreed. I\'ll draft the questions tonight and you can check them tomorrow.', vi: 'Đồng ý. Tối nay tớ soạn câu hỏi và mai cậu kiểm tra nhé.' },
    ],
    mcq: [
      { q: 'Why does Tom reject the ocean plastic topic?', a: 'A lot of research already exists.', wrong: ['It is too expensive.', 'It is not interesting.', 'His tutor disagrees.'], ex: '"so much data already published".' },
      { q: 'What do they decide to study?', a: 'Waste management at their own university', wrong: ['Ocean pollution', 'Recycling in factories', 'Student housing'], ex: 'Xem trường xử lý rác thế nào.' },
      { q: 'What will the woman do tonight?', a: 'Write the survey questions', wrong: ['Interview cleaners', 'Contact the tutor', 'Analyze the data'], ex: '"I\'ll draft the questions tonight".' },
    ],
  },
  {
    id: 'ielts-l4', title: 'Section 4 – Lecture on sleep', titleVi: 'Phần 4 – Bài giảng về giấc ngủ',
    lines: [
      { who: 'A', text: 'Today I want to talk about how sleep affects learning. Research shows that adults need between seven and nine hours of sleep each night.', vi: 'Hôm nay tôi nói về ảnh hưởng của giấc ngủ đến việc học. Nghiên cứu cho thấy người lớn cần từ bảy đến chín tiếng ngủ mỗi đêm.' },
      { who: 'A', text: 'During deep sleep, the brain moves information from short-term to long-term memory, which is why students who sleep after studying remember more.', vi: 'Trong giấc ngủ sâu, não chuyển thông tin từ trí nhớ ngắn hạn sang dài hạn, vì vậy sinh viên ngủ sau khi học nhớ nhiều hơn.' },
      { who: 'A', text: 'In one experiment, a group who slept for eight hours scored twenty percent higher on a memory test than a group who stayed awake all night.', vi: 'Trong một thí nghiệm, nhóm ngủ tám tiếng đạt điểm kiểm tra trí nhớ cao hơn hai mươi phần trăm so với nhóm thức trắng đêm.' },
      { who: 'A', text: 'To improve sleep quality, experts recommend avoiding screens for an hour before bed and keeping the bedroom cool and dark.', vi: 'Để cải thiện chất lượng giấc ngủ, chuyên gia khuyên tránh màn hình một tiếng trước khi ngủ và giữ phòng mát và tối.' },
    ],
    mcq: [
      { q: 'How much sleep do adults need?', a: 'Seven to nine hours', wrong: ['Five to six hours', 'Nine to eleven hours', 'Four hours'], ex: 'Từ bảy đến chín tiếng.' },
      { q: 'What happens during deep sleep?', a: 'Memories are moved to long-term storage.', wrong: ['The brain switches off.', 'Dreams are erased.', 'Muscles grow faster.'], ex: 'Chuyển sang trí nhớ dài hạn.' },
    ],
    fill: [
      { q: 'The group who slept scored ____ percent higher.', answers: ['20', 'twenty'], ex: 'Hai mươi phần trăm.' },
      { q: 'Experts advise avoiding ____ for an hour before bed.', answers: ['screens', 'screen'], ex: 'Tránh màn hình.' },
    ],
  },
];

// ===========================================================================
//  READING
// ===========================================================================
export const IELTS_READING: ExamPassage[] = [
  {
    id: 'ielts-r1', title: 'The Rise of Urban Farming', titleVi: 'Sự trỗi dậy của nông nghiệp đô thị',
    text: 'Urban farming, the practice of growing food in cities, has expanded rapidly over the past two decades. In many large cities, vegetables are now grown on rooftops, in empty lots and even inside old warehouses. Supporters argue that urban farms reduce the distance food must travel, cutting transport emissions and providing fresher produce. A study in Singapore found that rooftop gardens lowered building temperatures by up to three degrees.\n\nHowever, urban farming faces significant obstacles. Land in city centers is expensive, and the soil is often polluted with metals from traffic and industry. Growers therefore rely on raised beds or hydroponic systems, in which plants grow in water rich in nutrients rather than soil. These systems are efficient but require electricity, which can offset some of the environmental benefits.\n\nDespite these challenges, city governments increasingly encourage the trend. Some offer tax reductions to owners who convert unused roofs into gardens, while schools use small farms to teach children about healthy eating. Experts believe that although urban farming will never replace traditional agriculture, it can play a valuable supporting role.',
    textVi: 'Nông nghiệp đô thị, tức trồng thực phẩm trong thành phố, đã mở rộng nhanh chóng trong hai thập kỷ qua. Ở nhiều thành phố lớn, rau được trồng trên mái nhà, ở các lô đất trống và cả trong những nhà kho cũ. Người ủng hộ cho rằng nông trại đô thị rút ngắn quãng đường vận chuyển thực phẩm, giảm khí thải và cho sản phẩm tươi hơn. Một nghiên cứu ở Singapore cho thấy vườn trên mái làm giảm nhiệt độ tòa nhà tới ba độ.\n\nTuy nhiên nông nghiệp đô thị gặp nhiều trở ngại. Đất ở trung tâm thành phố đắt và thường bị ô nhiễm kim loại từ giao thông và công nghiệp. Vì vậy người trồng dựa vào luống nâng hoặc hệ thống thủy canh, cây trồng trong nước giàu dinh dưỡng thay vì đất. Các hệ thống này hiệu quả nhưng cần điện, có thể làm giảm một phần lợi ích môi trường.\n\nBất chấp thách thức, chính quyền thành phố ngày càng khuyến khích xu hướng này. Một số nơi giảm thuế cho chủ nhà biến mái nhà bỏ trống thành vườn, còn trường học dùng nông trại nhỏ để dạy trẻ về ăn uống lành mạnh. Chuyên gia tin rằng nông nghiệp đô thị không bao giờ thay thế được nông nghiệp truyền thống nhưng có thể đóng vai trò hỗ trợ có giá trị.',
    mcq: [
      tf('Urban farming has grown quickly in recent decades.', 'True', 'Đoạn 1: "expanded rapidly over the past two decades".'),
      tf('Rooftop gardens in Singapore raised building temperatures.', 'False', 'Ngược lại: giảm nhiệt độ tòa nhà.'),
      tf('Most urban farmers in Europe use soil from the countryside.', 'Not Given', 'Bài không đề cập nguồn đất ở châu Âu.'),
      tf('Hydroponic systems require electricity.', 'True', '"require electricity".'),
      { q: 'What is the writer\'s main conclusion about urban farming?', a: 'It can support, but not replace, traditional farming.', wrong: ['It will soon replace traditional farming.', 'It is too expensive to be useful.', 'It has already failed in most cities.'], ex: 'Câu cuối: "valuable supporting role".' },
    ],
    fill: [
      { q: 'Growers use raised beds or ____ systems because city soil is polluted.', answers: ['hydroponic'], ex: 'Hệ thống thủy canh (hydroponic).' },
      { q: 'Some governments offer ____ to owners who turn roofs into gardens.', answers: ['tax reductions', 'tax reduction'], ex: '"tax reductions".' },
    ],
  },
  {
    id: 'ielts-r2', title: 'Why Do We Need Sleep?', titleVi: 'Vì sao chúng ta cần ngủ?',
    text: 'For centuries, scientists assumed that sleep was simply a period of rest for the body. Modern research, however, reveals that the brain is remarkably active during sleep. In the 1950s, researchers discovered rapid eye movement (REM) sleep, the stage in which most vivid dreams occur.\n\nSleep is now known to be essential for memory. During the night, the brain replays the events of the day and strengthens important connections between nerve cells while removing unnecessary ones. Students who study late and then sleep well typically perform better in exams than those who stay up revising.\n\nLack of sleep, on the other hand, has serious consequences. A survey of drivers showed that those who slept for fewer than five hours were three times more likely to have an accident. Long-term sleep loss is also associated with obesity and heart disease. Doctors advise adults to keep regular bedtimes and to avoid caffeine in the evening.',
    textVi: 'Trong nhiều thế kỷ, các nhà khoa học cho rằng ngủ đơn giản là thời gian nghỉ ngơi của cơ thể. Nghiên cứu hiện đại lại cho thấy não hoạt động rất tích cực khi ngủ. Vào thập niên 1950, các nhà nghiên cứu phát hiện giấc ngủ REM, giai đoạn xảy ra phần lớn các giấc mơ sống động.\n\nNgày nay người ta biết giấc ngủ rất cần cho trí nhớ. Ban đêm, não phát lại các sự kiện trong ngày và củng cố các kết nối quan trọng giữa tế bào thần kinh đồng thời loại bỏ những kết nối không cần thiết. Sinh viên học muộn rồi ngủ ngon thường thi tốt hơn những người thức khuya ôn bài.\n\nNgược lại, thiếu ngủ gây hậu quả nghiêm trọng. Một khảo sát tài xế cho thấy người ngủ dưới năm tiếng dễ gặp tai nạn gấp ba lần. Mất ngủ lâu dài cũng liên quan đến béo phì và bệnh tim. Bác sĩ khuyên người lớn giữ giờ đi ngủ đều đặn và tránh caffeine vào buổi tối.',
    mcq: [
      tf('REM sleep was discovered in the 1950s.', 'True', '"In the 1950s, researchers discovered REM sleep".'),
      tf('Scientists have always known that the brain is active during sleep.', 'False', 'Trước đây họ nghĩ chỉ là nghỉ ngơi.'),
      tf('Drivers who slept fewer than five hours had more accidents.', 'True', '"three times more likely to have an accident".'),
      tf('Drinking coffee in the morning damages sleep quality.', 'Not Given', 'Bài chỉ nói tránh caffeine buổi tối.'),
      { q: 'What happens to nerve connections during sleep?', a: 'Important ones are strengthened.', wrong: ['All of them are deleted.', 'They stop working.', 'They increase in number every night.'], ex: '"strengthens important connections ... removing unnecessary ones".' },
    ],
    fill: [
      { q: 'Vivid dreams mostly happen during ____ sleep.', answers: ['REM', 'rapid eye movement'], ex: 'Giấc ngủ REM.' },
      { q: 'Long-term sleep loss is linked to obesity and ____ disease.', answers: ['heart'], ex: 'Bệnh tim.' },
    ],
  },
  {
    id: 'ielts-r3', title: 'The Bicycle: A Simple Invention', titleVi: 'Xe đạp: Một phát minh đơn giản',
    text: 'The first bicycle-like machine was built in 1817 by a German baron, Karl von Drais. It had no pedals; riders pushed themselves along with their feet. In the 1860s, French inventors added pedals to the front wheel, producing the "boneshaker", which was uncomfortable because of its iron wheels.\n\nThe next major development was the "penny-farthing", with an enormous front wheel that allowed greater speed but was dangerous, as riders sat high above the ground. It was only in the 1880s that the "safety bicycle", with two wheels of equal size and a chain drive, made cycling safe and popular. Air-filled rubber tires, introduced by John Dunlop in 1888, made rides far smoother.\n\nToday bicycles remain an important form of transport. In cities such as Copenhagen and Amsterdam, over a third of all journeys are made by bike. Planners argue that cycling reduces traffic and pollution, and improves public health, which is why many countries are building new cycle lanes.',
    textVi: 'Cỗ máy giống xe đạp đầu tiên được chế tạo năm 1817 bởi nam tước người Đức Karl von Drais. Nó không có bàn đạp; người lái tự đẩy bằng chân. Thập niên 1860, các nhà phát minh Pháp thêm bàn đạp vào bánh trước, tạo ra "boneshaker", rất khó chịu vì bánh sắt.\n\nBước phát triển lớn tiếp theo là "penny-farthing" với bánh trước khổng lồ giúp chạy nhanh hơn nhưng nguy hiểm vì người lái ngồi rất cao. Mãi đến thập niên 1880, "xe đạp an toàn" với hai bánh cùng cỡ và truyền động xích mới khiến việc đạp xe an toàn và phổ biến. Lốp cao su bơm hơi do John Dunlop giới thiệu năm 1888 làm chuyến đi êm hơn nhiều.\n\nNgày nay xe đạp vẫn là phương tiện quan trọng. Ở các thành phố như Copenhagen và Amsterdam, hơn một phần ba chuyến đi là bằng xe đạp. Các nhà quy hoạch cho rằng đạp xe giảm ùn tắc, ô nhiễm và cải thiện sức khỏe cộng đồng nên nhiều nước đang xây thêm làn xe đạp.',
    mcq: [
      tf('The first bicycle-like machine had pedals.', 'False', 'Không có bàn đạp, người lái đẩy bằng chân.'),
      tf('The penny-farthing was safer than the safety bicycle.', 'False', 'Penny-farthing nguy hiểm hơn.'),
      tf('John Dunlop invented the chain drive.', 'Not Given', 'Dunlop được nhắc đến với lốp hơi, không phải xích.'),
      tf('More than a third of journeys in Copenhagen are made by bicycle.', 'True', '"over a third of all journeys".'),
      { q: 'Why is the "boneshaker" described as uncomfortable?', a: 'It had iron wheels.', wrong: ['It was too heavy to lift.', 'It had no seat.', 'Its pedals were too small.'], ex: '"uncomfortable because of its iron wheels".' },
    ],
    fill: [
      { q: 'The safety bicycle had two wheels of ____ size.', answers: ['equal', 'the same'], ex: '"two wheels of equal size".' },
      { q: 'Many countries are building new ____ to encourage cycling.', answers: ['cycle lanes', 'cycle lane', 'bike lanes'], ex: '"new cycle lanes".' },
    ],
  },
];

// ===========================================================================
//  WRITING
// ===========================================================================
export const IELTS_WRITING: IeltsWritingTask[] = [
  {
    id: 'ielts-w1', task: 1, title: 'Task 1 – Table: Transport use', minWords: 150, minutes: 20,
    prompt: 'The table below shows the percentage of people using different types of transport to travel to work in one city in 2000 and 2020. Summarize the information by selecting and reporting the main features, and make comparisons where relevant.',
    data: 'Transport | 2000 | 2020\nCar | 55% | 40%\nBus | 20% | 22%\nTrain | 10% | 18%\nBicycle | 5% | 12%\nWalking | 10% | 8%',
    model: 'The table compares the proportion of commuters using five modes of transport in a city in 2000 and 2020.\n\nOverall, car use fell considerably, while trains and bicycles became much more popular. The car remained the most common way to travel to work throughout the period.\n\nIn 2000, more than half of commuters (55%) drove to work, compared with 20% who took the bus. By 2020, car use had dropped to 40%, although it was still the leading option. Bus use was almost unchanged, rising slightly from 20% to 22%.\n\nThe most dramatic growth was seen in rail and cycling. The proportion of train passengers increased from 10% to 18%, and cycling more than doubled from 5% to 12%. By contrast, the percentage of people who walked to work declined marginally, from 10% to 8%.\n\nIn summary, the figures suggest that commuters in this city are gradually shifting from private vehicles to public transport and cycling, a change that may reflect growing concern about traffic congestion and air quality.',
    tips: ['Đoạn 1: diễn đạt lại đề (paraphrase) 1 câu.', 'Đoạn 2: Overview – nêu 2 xu hướng chính, KHÔNG đưa số liệu chi tiết.', 'Đoạn 3–4: mô tả số liệu nổi bật, so sánh (whereas, by contrast).', 'Dùng từ chỉ xu hướng: rise, fall, double, remain stable.'],
  },
  {
    id: 'ielts-w2', task: 1, title: 'Task 1 – Line graph: Internet users', minWords: 150, minutes: 20,
    prompt: 'The line graph below shows the percentage of the population using the Internet in three countries between 2000 and 2020. Summarize the information by selecting and reporting the main features.',
    data: 'Country | 2000 | 2010 | 2020\nCountry A | 5% | 40% | 90%\nCountry B | 20% | 60% | 85%\nCountry C | 1% | 15% | 55%',
    model: 'The graph illustrates how Internet use changed in three countries over a twenty-year period.\n\nOverall, all three countries experienced substantial growth, but Country C remained behind the others in 2020. Country A showed the most dramatic rise.\n\nIn 2000, Country B had the highest rate of Internet use at 20%, whereas only 5% of people in Country A and 1% in Country C were online. Over the next decade, Country A overtook Country B in growth, surging to 40% while Country B reached 60%.\n\nBy 2020, Country A had the highest figure at 90%, slightly ahead of Country B at 85%. Country C also rose sharply, from 15% in 2010 to 55%, but still trailed the other two by a wide margin.\n\nTo sum up, although the three countries started from very different positions, the gap between them narrowed considerably over the two decades, and Country C was the only one that still had a large proportion of its population offline in 2020.',
    tips: ['Nhóm quốc gia có xu hướng giống nhau để so sánh.', 'Dùng: overtook, surged, trailed, by a wide margin.', 'Đừng nêu ý kiến cá nhân trong Task 1.', 'Kiểm tra số liệu và đơn vị (%).'],
  },
  {
    id: 'ielts-w3', task: 2, title: 'Task 2 – Opinion: Online education', minWords: 250, minutes: 40,
    prompt: 'Some people believe that online learning is more effective than traditional classroom teaching. To what extent do you agree or disagree?',
    model: 'In recent years, online courses have become increasingly common. Although I accept that digital learning has clear advantages, I do not believe it is more effective than face-to-face teaching for most students.\n\nOn the one hand, online learning offers flexibility. Students can watch lessons at any time, repeat difficult parts and study from anywhere, which is especially useful for adults with full-time jobs. Furthermore, courses are often cheaper because there is no need for classrooms or transport.\n\nOn the other hand, traditional classrooms provide benefits that a screen cannot. Teachers can notice when a student is confused and adjust their explanation immediately. In addition, classmates motivate each other through discussion and group work, whereas online learners often feel isolated and lose interest. Research shows that dropout rates for online courses are far higher than for classroom courses.\n\nAnother important point is that online learning depends on reliable technology and strong self-discipline. Students in rural areas may lack a stable Internet connection, which puts them at a disadvantage compared with classmates in cities. Even those with good equipment can be distracted by social media or household noise, and without a teacher watching, many postpone their studies until it is too late. Classroom schedules, by contrast, create a routine that helps learners stay focused and complete their work on time. For these reasons, schools should sensibly combine both methods rather than abandon the traditional classroom entirely.\n\nIn conclusion, while online learning is a convenient supplement, I believe in-person teaching remains more effective because of personal interaction and motivation.',
    tips: ['Nêu rõ quan điểm ở phần mở bài và nhắc lại ở kết luận.', 'Mỗi đoạn thân bài 1 ý chính + giải thích + ví dụ.', 'Dùng từ nối: Furthermore, In addition, whereas.', 'Đủ 250 từ; kiểm tra chính tả và mạo từ.'],
  },
  {
    id: 'ielts-w4', task: 2, title: 'Task 2 – Discuss both views: Working from home', minWords: 250, minutes: 40,
    prompt: 'Some people think that working from home is better for employees, while others believe that working in an office is more productive. Discuss both views and give your own opinion.',
    model: 'The way we work has changed dramatically, and there is now a debate about whether employees should work from home or in an office. This essay will discuss both views before explaining why I favor a mixture of the two.\n\nThose who support remote work point out that it saves time and money. Employees avoid long commutes, which reduces stress and allows more time with family. Moreover, many people can concentrate better in a quiet home environment than in a noisy open-plan office.\n\nHowever, offices have their own advantages. Colleagues can share ideas quickly, and managers can supervise projects more easily. New employees in particular learn faster when they can observe and ask questions in person. In addition, some workers find it difficult to separate work from their private lives at home.\n\nIt is also worth considering the impact on companies. Businesses that allow remote work can hire talented people from anywhere in the world and save money on office rent and electricity. On the other hand, they must invest in secure software and regular video meetings to keep teams connected, which requires time and planning. Employers who ignore these needs risk losing both productivity and staff loyalty. Clear rules about working hours also prevent employees from feeling that they are always on duty.\n\nIn my opinion, the best solution is a hybrid model in which staff work from home for part of the week and meet in the office for teamwork. This approach combines flexibility with collaboration. In conclusion, both systems have merits, but a balanced arrangement is likely to be the most productive.',
    tips: ['Đoạn 2: quan điểm 1; Đoạn 3: quan điểm 2; nêu ý kiến riêng rõ ràng.', 'Dùng các cụm: Those who..., point out that..., On the other hand.', 'Tránh dùng "I think" quá nhiều; đa dạng cấu trúc.', 'Kết luận không thêm ý mới.'],
  },
  {
    id: 'ielts-w5', task: 2, title: 'Task 2 – Problem/Solution: Traffic congestion', minWords: 250, minutes: 40,
    prompt: 'Traffic congestion is becoming a serious problem in many large cities. What are the causes of this problem, and what measures can be taken to reduce it?',
    model: 'Traffic jams have become part of daily life in many big cities, wasting time and damaging the environment. This essay will examine the main causes and suggest several practical solutions.\n\nThe most important cause is the rapid growth in car ownership. As incomes rise, more families buy vehicles, and the number of cars quickly exceeds the capacity of the roads. A second reason is poor public transport: when buses and trains are slow or unreliable, commuters prefer to drive. Finally, poor urban planning means that homes are often far from workplaces, forcing people to travel long distances.\n\nThere are several measures that governments can take. First, investing in fast, affordable public transport, such as metro lines, would persuade many drivers to leave their cars at home. Second, charging drivers a fee to enter the city center, as London does, can reduce traffic and raise funds for improvements. Third, encouraging cycling and flexible working hours would spread demand more evenly across the day.\n\nSome cities have already shown that these measures work. Singapore limits the number of new vehicles through a permit system, and Bogota closes major roads to cars every Sunday so that residents can walk and cycle freely. Although such policies may be unpopular at first, they usually gain public support once people notice cleaner air, shorter journeys and safer streets. Public awareness campaigns can help people understand the long-term benefits of giving up their cars.\n\nIn conclusion, congestion results from car dependence, weak public transport and poor planning, but it can be reduced through better transport investment and sensible regulation.',
    tips: ['Phần Causes và Solutions mỗi phần 1 đoạn, mỗi đoạn 2–3 ý.', 'Dùng: The most important cause is..., can be reduced by...', 'Đưa ví dụ thực tế (London, Singapore).', 'Kiểm tra sự nhất quán giữa nguyên nhân và giải pháp.'],
  },
  {
    id: 'ielts-w6', task: 2, title: 'Task 2 – Advantages/Disadvantages: Studying abroad', minWords: 250, minutes: 40,
    prompt: 'More and more students choose to study at universities abroad. Do the advantages of this trend outweigh the disadvantages?',
    model: 'Nowadays, a growing number of young people go overseas to study. In my view, the benefits of this trend outweigh the drawbacks, although some difficulties should not be ignored.\n\nThe main advantage is the opportunity to receive a high-quality education. Many foreign universities have modern facilities and internationally respected programs that improve career prospects. In addition, living abroad helps students to become independent, to improve their language skills and to understand other cultures, qualities that employers value highly.\n\nNevertheless, there are disadvantages. Tuition fees and living costs abroad are usually much higher than at home, so many families face heavy financial pressure. Moreover, students may suffer from homesickness and culture shock, which can affect their studies. Some also struggle to find friends or to adapt to a different education system.\n\nA further benefit concerns long-term career prospects. Graduates with an international qualification often find it easier to work for multinational companies, and the connections they make abroad can open doors for many years. Universities in some countries also offer scholarships and part-time work opportunities that partly reduce the financial burden. However, students who return home sometimes discover that their skills do not match the local job market, and it may take time for them to readjust. Careful research before choosing a course therefore remains essential. Families should compare costs and outcomes and talk to former students before deciding.\n\nTo sum up, although studying abroad is expensive and sometimes stressful, the academic and personal growth it offers makes it a worthwhile experience for most students.',
    tips: ['Nêu rõ "advantages outweigh" ở mở bài.', 'Một đoạn cho ưu điểm, một đoạn cho nhược điểm.', 'Dùng từ nối tương phản: Nevertheless, whereas, although.', 'Không liệt kê rời rạc; luôn giải thích lý do.'],
  },
];

// ===========================================================================
//  SPEAKING
// ===========================================================================
export const IELTS_SPEAKING: IeltsSpeakingItem[] = [
  { id: 'ielts-s1a', part: 1, title: 'Part 1 – Hometown', lines: ['Where is your hometown?', 'What do you like most about it?'], sample: 'My hometown is Da Nang, a coastal city in central Vietnam. What I like most is its relaxed atmosphere and the beautiful beaches, which are perfect for weekends with friends.', tips: ['Trả lời 2–3 câu, có lý do.', 'Đừng chỉ nói Yes/No.'] },
  { id: 'ielts-s1b', part: 1, title: 'Part 1 – Study or work', lines: ['Do you work or are you a student?', 'Why did you choose that subject or job?'], sample: 'I\'m currently a student majoring in computer science. I chose it because I have always been fascinated by technology, and I believe it offers plenty of career opportunities.', tips: ['Nêu nghề/ngành + lý do.', 'Dùng: I\'m currently..., I chose it because...'] },
  { id: 'ielts-s1c', part: 1, title: 'Part 1 – Free time', lines: ['What do you usually do in your free time?', 'Do you prefer spending time alone or with others?'], sample: 'In my free time I usually read novels or go cycling. Generally, I prefer spending time with friends because it makes me feel more energetic, but I also enjoy some quiet time alone.', tips: ['Có thể dùng "Generally", "Actually".', 'Đưa ví dụ cụ thể.'] },
  { id: 'ielts-s1d', part: 1, title: 'Part 1 – Food', lines: ['What is your favorite food?', 'Do you often cook at home?'], sample: 'My favorite dish is pho because it\'s warm, tasty and full of flavor. I cook at home quite often, mostly simple meals like fried rice, since I don\'t have much time during the week.', tips: ['Mô tả hương vị: tasty, fresh, spicy.', 'Nói tần suất: quite often, occasionally.'] },
  { id: 'ielts-s2a', part: 2, title: 'Part 2 – A memorable trip', lines: ['Describe a trip that you really enjoyed.', 'You should say:', 'where you went', 'who you went with', 'what you did there', 'and explain why you enjoyed it so much.'], sample: 'I\'d like to talk about a trip to Hoi An that I took with my family last summer. We stayed in a small hotel near the old town and spent three days exploring the streets, eating local dishes and taking photos of the lanterns. One evening we took a boat ride on the river, and that was my favorite moment because everything was so peaceful and beautiful. I enjoyed the trip so much because it was the first time in years that my whole family had relaxed together, and it gave us memories that we still talk about today.', tips: ['Chuẩn bị 1 phút: ghi từ khóa cho từng gợi ý.', 'Nói liền mạch 1–2 phút, dùng thì quá khứ.', 'Kết thúc bằng lý do cảm xúc (why).'] },
  { id: 'ielts-s2b', part: 2, title: 'Part 2 – A person who helped you', lines: ['Describe a person who has helped you in your life.', 'You should say:', 'who this person is', 'how you know them', 'how they helped you', 'and explain how you felt about it.'], sample: 'I\'d like to talk about my English teacher, Ms. Lan, who has helped me a lot. I met her when I was in high school. At that time I was very shy and afraid of making mistakes, but she encouraged me to speak in class and gave me extra lessons after school. Thanks to her support, my confidence improved, and I eventually won a speaking contest. I felt extremely grateful because she believed in me when I didn\'t believe in myself.', tips: ['Dùng thì quá khứ + hiện tại hoàn thành.', 'Nêu ví dụ cụ thể về sự giúp đỡ.'] },
  { id: 'ielts-s2c', part: 2, title: 'Part 2 – A useful object', lines: ['Describe an object you use every day.', 'You should say:', 'what it is', 'how often you use it', 'what you use it for', 'and explain why it is important to you.'], sample: 'The object I use every day is my smartphone. I use it for nearly everything: calling my family, checking the news, learning English with apps and even finding my way around town. I check it dozens of times a day. It is important to me because it keeps me connected to people and information, and honestly I would feel lost without it, although I try not to depend on it too much.', tips: ['Mô tả công dụng bằng nhiều động từ.', 'Có thể nêu quan điểm cân bằng ở cuối.'] },
  { id: 'ielts-s2d', part: 2, title: 'Part 2 – A place to relax', lines: ['Describe a place where you go to relax.', 'You should say:', 'where it is', 'what it looks like', 'what you do there', 'and explain why it helps you relax.'], sample: 'A place where I go to relax is a small park near my house. It has lots of tall trees, a little lake and some wooden benches. In the evenings I walk around the lake or sit and read a book. It helps me relax because it is quiet and green, so I can forget about my studies and stress for a while.', tips: ['Mô tả bằng giác quan: quiet, green, fresh.', 'Nối ý bằng because/so.'] },
  { id: 'ielts-s3a', part: 3, title: 'Part 3 – Travel and tourism', lines: ['Why do people like to travel abroad?', 'Does tourism always benefit local communities?'], sample: 'I think people travel abroad to experience new cultures and take a break from routine. As for tourism, it usually creates jobs and income, but it can also cause problems such as pollution and rising prices, so it needs to be managed carefully.', tips: ['Đưa quan điểm + lý do + ví dụ.', 'Nêu cả hai mặt: benefit and drawbacks.'] },
  { id: 'ielts-s3b', part: 3, title: 'Part 3 – Education', lines: ['How has education changed in recent years?', 'Should students learn practical skills at school?'], sample: 'Education has become more digital, so students use tablets and online resources much more. I believe schools should definitely teach practical skills such as cooking, money management or basic first aid, because they prepare young people for real life.', tips: ['So sánh quá khứ và hiện tại.', 'Dùng: I strongly believe..., definitely.'] },
  { id: 'ielts-s3c', part: 3, title: 'Part 3 – Technology', lines: ['Do you think technology makes people more isolated?', 'What might technology look like in 50 years?'], sample: 'To some extent, yes, because people spend more time on their phones than talking face to face. However, technology also connects families who live far apart. In fifty years, I imagine that artificial intelligence will handle many routine jobs and that most people will work fewer hours.', tips: ['Dùng "To some extent" để thể hiện cân bằng.', 'Dự đoán tương lai: will, might, I imagine that...'] },
  { id: 'ielts-s3d', part: 3, title: 'Part 3 – Environment', lines: ['What can individuals do to protect the environment?', 'Is it the government\'s responsibility rather than individuals\'?'], sample: 'Individuals can reduce waste, recycle, use public transport and save energy at home. Nevertheless, I believe governments have a bigger responsibility because only they can make laws, invest in clean energy and control large companies.', tips: ['Liệt kê 2–3 hành động cụ thể.', 'Dùng Nevertheless/However để phản biện.'] },
];
