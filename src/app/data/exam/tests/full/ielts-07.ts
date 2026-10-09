/** IELTS đề 7 – phần bổ sung để đủ 40 câu nghe + 40 câu đọc (xem ghi chú "ĐỀ ĐẦY ĐỦ" trong helpers.ts) */
import { RawIeltsFull } from '../helpers';

export const FULL: RawIeltsFull = {
  // Section 1 – Making a dental appointment (nối tiếp)
  l1: {
    lines: [
      'M: Thank you. Is there anything I should bring with me?',
      'W: Please bring a list of any medicines you are taking, and your national health card if you have one.',
      'M: I will. Is there parking at the clinic?',
      'W: There are only five spaces, and they are usually taken. I would suggest the car park on Mill Lane, which is two minutes away.',
      'M: And what if I need treatment after the check-up?',
      'W: Dr. Marlow will explain the options and the cost. A simple filling is about sixty pounds. We ask for payment on the day, by card or cash.',
      'M: Fine. And if the pain gets worse before Thursday?',
      'W: Then call us straight away. We keep one emergency appointment free every morning at eight thirty.',
    ],
    qs: [
      ['Where does the receptionist suggest parking?', 'In the car park on Mill Lane', 'In front of the clinic', 'At the post office', '"I would suggest the car park on Mill Lane".'],
      ['When must patients pay?', 'On the day of treatment', 'Within a month', 'Before the appointment', '"We ask for payment on the day".'],
    ],
    fill: [
      ['The clinic has only ____ parking spaces.', ['5', 'five'], 'Chỉ năm chỗ đỗ.'],
      ['A simple filling costs about ____ pounds.', ['60', 'sixty'], 'Khoảng sáu mươi bảng.'],
      ['An emergency appointment is kept free every morning at ____ thirty.', ['8', 'eight'], 'Tám giờ rưỡi mỗi sáng.'],
    ],
  },
  // Section 3 – Planning a group presentation (nối tiếp)
  l2: {
    lines: [
      "M: One more thing. Shouldn't we include some information about our own country?",
      'W: Good idea. I read that wind now provides about a quarter of our electricity. I can add a slide on that.',
      'M: And I found a short interview with a farmer who has solar panels on his barn. It is only ninety seconds long.',
      'W: Perfect, as long as it does not take us over the time limit. Who is going to answer the questions at the end?',
      'M: Sofia said she would rather not, because she gets nervous. I do not mind doing it.',
      'W: Thanks. And we need to hand in a list of our sources. The tutor wants at least eight.',
      "M: I've got five already. I'll send them to you tonight.",
    ],
    qs: [
      ['What will the woman add a slide about?', 'Wind power in their own country', 'The price of solar panels', 'A farmer\'s barn', '"wind now provides about a quarter of our electricity. I can add a slide on that".'],
      ['Why will Sofia not answer questions?', 'She gets nervous.', 'She will be absent.', 'She does not know the topic.', '"because she gets nervous".'],
      ['What will the man send tonight?', 'His list of sources', 'The interview', 'The slides', '"I\'ve got five already. I\'ll send them to you tonight".'],
    ],
    fill: [
      ['The interview with the farmer is ____ seconds long.', ['90', 'ninety'], 'Chín mươi giây.'],
      ['The tutor wants at least ____ sources.', ['8', 'eight'], 'Ít nhất tám nguồn.'],
    ],
  },
  listening: [
    {
      title: 'Section 2 – A talk about a city bike-hire scheme',
      lines: [
        'M: Good evening. I am here from the city transport department to explain the new bike-hire scheme, which starts on the first of June.',
        'M: In the first stage, there will be eight hundred bicycles at sixty docking stations, mainly in the city centre and around the university.',
        'M: To use a bike, you need to register on our website or through the mobile app. Registration costs five pounds a year.',
        'M: The first thirty minutes of every journey are free. After that, you pay one pound for each additional half hour.',
        'M: When you finish, you must return the bike to any docking station and wait for the green light, which shows that it is locked. If you do not see the green light, you will continue to be charged.',
        'M: Each bike has three gears, lights that come on automatically, and a basket at the front. Helmets are not provided, so please bring your own.',
        'M: Users must be at least fourteen years old.',
        'M: If a bike is damaged, press the red button on the docking station so that our team knows it needs repair.',
        'M: In the first month, we will hold free cycling lessons for adults in Queen\'s Park every Saturday. And if the scheme is popular, we plan to add electric bikes next year.',
      ],
      qs: [
        ['Where will most docking stations be?', 'In the centre and near the university', 'In the suburbs', 'At railway stations only', '"mainly in the city centre and around the university".'],
        ['What does the green light show?', 'The bike has been locked.', 'The bike is ready to hire.', 'The battery is full.', '"the green light, which shows that it is locked".'],
        ['What are users asked to bring?', 'Their own helmet', 'Their own lights', 'A lock', '"Helmets are not provided, so please bring your own".'],
        ['What should a user do if a bike is damaged?', 'Press the red button', 'Phone the police', 'Leave it in the park', '"press the red button on the docking station".'],
        ['What may be added next year?', 'Electric bikes', 'Bikes for children', 'More lessons', '"we plan to add electric bikes next year".'],
      ],
      fill: [
        ['The scheme starts on the first of ____.', ['June'], 'Ngày 1 tháng Sáu.'],
        ['There will be ____ docking stations at first.', ['60', 'sixty'], 'Sáu mươi trạm.'],
        ['Registration costs ____ pounds a year.', ['5', 'five'], 'Năm bảng một năm.'],
        ['The first ____ minutes of each journey are free.', ['30', 'thirty'], 'Ba mươi phút đầu miễn phí.'],
        ['Users must be at least ____ years old.', ['14', 'fourteen'], 'Ít nhất mười bốn tuổi.'],
      ],
    },
    {
      title: 'Section 4 – Lecture on the psychology of habits',
      lines: [
        'W: Good morning. Today\'s topic is habit. Researchers estimate that about forty percent of what we do each day is not the result of a decision at all, but of habit.',
        'W: A habit has three parts. First there is a cue, such as a time of day or a place. Then comes the routine, the behaviour itself. Finally there is a reward, which tells the brain that the routine is worth repeating.',
        'W: Experiments with rats in the nineteen nineties showed that as a habit forms, activity in the brain falls. The animal no longer has to think about what it is doing.',
        'W: How long does it take to form a new habit? You may have heard that the answer is twenty-one days. That figure has no scientific basis. A study in London found that the average was sixty-six days, and for some people it was much longer.',
        'W: Missing a single day, by the way, made no difference to the final result.',
        'W: Habits are strongly tied to places. That is why moving to a new home is one of the best moments to change behaviour: the old cues have disappeared.',
        'W: If you want to break a bad habit, it is easier to replace the routine than to remove it. Keep the cue and the reward, but put a different action in the middle.',
        'W: It also helps to make the good behaviour easy. People who keep fruit on the table eat more of it than people who keep it in the fridge.',
        'W: For next week, please keep a record of one habit of your own and note the cue each time.',
      ],
      qs: [
        ['What is the function of the reward?', 'It tells the brain to repeat the routine.', 'It reminds us of the cue.', 'It makes the habit conscious.', '"tells the brain that the routine is worth repeating".'],
        ['What happens in the brain as a habit forms?', 'Activity decreases.', 'Activity increases.', 'New cells grow.', '"as a habit forms, activity in the brain falls".'],
        ['What does the speaker say about the figure of twenty-one days?', 'It is not based on science.', 'It is correct for most people.', 'It applies only to children.', '"That figure has no scientific basis".'],
        ['Why is moving home a good time to change a habit?', 'The old cues are gone.', 'People have more free time.', 'Stress improves memory.', '"the old cues have disappeared".'],
        ['What is the best way to break a bad habit?', 'Replace the routine with another one', 'Remove the reward', 'Avoid all cues', '"it is easier to replace the routine than to remove it".'],
      ],
      fill: [
        ['About ____ percent of daily actions are habits.', ['40', 'forty'], 'Khoảng bốn mươi phần trăm.'],
        ['The first part of a habit is the ____.', ['cue'], '"First there is a cue".'],
        ['The London study found an average of ____ days.', ['66', 'sixty-six', 'sixty six'], 'Trung bình sáu mươi sáu ngày.'],
        ['People who keep ____ on the table eat more of it.', ['fruit'], '"People who keep fruit on the table".'],
        ['Students must keep a ____ of one habit.', ['record'], '"keep a record of one habit".'],
      ],
    },
  ],
  // Bài đọc 1 – The Meaning of Colour (nối tiếp)
  r1: {
    text: 'Our ability to see colour at all depends on three kinds of light-sensitive cells in the eye, known as cones, which respond most strongly to red, green and blue light. About one man in twelve, but only one woman in two hundred, has a weakness in one type of cone and finds it hard to tell red from green. Most other mammals, including dogs, have only two types. Many birds and insects, on the other hand, have four and can see ultraviolet light that is invisible to us; flowers that look plain yellow to a human may show bold patterns to a bee.\n\nThe colours available to artists were once limited by cost. Until the nineteenth century, the finest blue paint was made by grinding a rare stone, lapis lazuli, brought from mines in Afghanistan, and it was more expensive than gold. Purple cloth, coloured with a dye obtained from sea snails, was reserved for Roman emperors. In 1856 an eighteen-year-old chemistry student in London, William Perkin, accidentally produced a purple dye while trying to make a medicine from coal tar. His discovery launched the modern chemical industry and made bright colours affordable for everyone.',
    qs: [
      ['T', 'Colour blindness is far more common in men than in women.', 'Một trong mười hai nam, một trong hai trăm nữ.'],
      ['F', 'Dogs have more types of cone than humans.', 'Chó chỉ có hai loại, người có ba.'],
      ['NG', 'Perkin became rich from his discovery.', 'Bài không nói ông có giàu không.'],
      ['Why was the best blue paint once so expensive?', 'It was made from a rare stone.', 'It was taxed by emperors.', 'It came from sea snails.', 'It needed coal tar.', 'Làm từ đá lapis lazuli quý hiếm.'],
    ],
    fill: [
      ['The light-sensitive cells that detect colour are called ____.', ['cones'], '"known as cones".'],
    ],
  },
  reading: [
    {
      title: 'The Lost City of Angkor',
      text: 'Deep in the forests of north-western Cambodia stand the ruins of Angkor, once the capital of the Khmer empire and, at its height in the twelfth century, probably the largest city in the world. Its most famous monument, the temple of Angkor Wat, covers an area four times the size of Vatican City and was built in about thirty-five years under King Suryavarman the Second. The sandstone blocks, some weighing over a tonne, were floated on rafts along canals from a quarry fifty kilometres away.\n\nFor a long time, Angkor was imagined as a group of temples surrounded by jungle. This picture changed in 2012, when archaeologists flew over the region with a laser scanning system called lidar. The laser pulses pass between the leaves and reflect from the ground, revealing shapes hidden beneath the trees. The maps that resulted showed a vast, low-density urban landscape of roads, ponds and house mounds spreading over about a thousand square kilometres. The temples had been the stone centre of a city whose wooden houses had long since rotted away.\n\nThe scans also confirmed that Angkor depended on an extraordinary water system. The region receives heavy rain for half the year and almost none for the other half. To cope with this, Khmer engineers built canals and enormous reservoirs, the largest of which, the West Baray, is eight kilometres long. The stored water irrigated rice fields and allowed several harvests a year, feeding a population that may have approached three quarters of a million.\n\nWhy, then, was Angkor abandoned? The traditional explanation was a military one: an army from the neighbouring kingdom of Ayutthaya captured the city in 1431. Newer evidence points to a slower process. By examining the growth rings of very old trees in Vietnam, scientists have reconstructed the climate of the fourteenth and fifteenth centuries. They found decades of severe drought interrupted by unusually violent monsoon rains. Sediment in the canals suggests that floods destroyed parts of the water network, which had become too complex to repair. As harvests failed, people gradually moved south towards the coast, where trade by sea was growing in importance.\n\nAngkor was never entirely forgotten. Buddhist monks continued to live at Angkor Wat, and Portuguese travellers described it in the sixteenth century. The French naturalist Henri Mouhot, often said to have "discovered" the site in 1860, merely made it famous in Europe. Today it attracts more than two million visitors a year. Their numbers bring income to a poor country, but hotels pumping water from the ground are causing the sandy soil beneath some monuments to sink.',
      qs: [
        ['T', 'Angkor Wat is larger in area than Vatican City.', 'Đoạn 1: gấp bốn lần.'],
        ['F', 'The stone for Angkor Wat was taken from a quarry beside the temple.', 'Đoạn 1: mỏ đá cách năm mươi kilômét.'],
        ['T', 'Lidar can detect features on the ground beneath forest.', 'Đoạn 2: xung laser lọt qua kẽ lá.'],
        ['F', 'Most houses in Angkor were built of stone.', 'Đoạn 2: nhà gỗ đã mục nát từ lâu.'],
        ['NG', 'The West Baray is still used for irrigation today.', 'Bài không nói.'],
        ['F', 'Henri Mouhot was the first outsider to see Angkor.', 'Đoạn cuối: người Bồ Đào Nha đã mô tả từ thế kỷ 16.'],
        ['Why did the Khmer need large reservoirs?', 'Rain fell only during half of the year.', 'The rivers were too salty.', 'The canals were used for war.', 'The population disliked rice.', 'Đoạn 3: mưa nhiều nửa năm, nửa kia gần như không mưa.'],
        ['How did scientists learn about the climate of the fourteenth century?', 'From the growth rings of old trees', 'From Khmer written records', 'From lidar images', 'From Portuguese travellers', 'Đoạn 4: vòng sinh trưởng của cây cổ thụ ở Việt Nam.'],
        ['According to newer evidence, what damaged the water system?', 'Floods after long droughts', 'An invading army', 'An earthquake', 'Lack of workers', 'Đoạn 4: lũ phá hủy một phần mạng lưới.'],
        ['What problem is tourism causing?', 'The ground under some monuments is sinking.', 'Visitors are stealing stones.', 'The forest is being cut down.', 'The temples are being repainted.', 'Đoạn cuối: bơm nước ngầm khiến nền đất lún.'],
      ],
      fill: [
        ['The stone blocks were floated on ____ along canals.', ['rafts'], 'Đoạn 1: "floated on rafts".'],
        ['The laser scanning system is called ____.', ['lidar'], 'Đoạn 2: "a laser scanning system called lidar".'],
        ['After the city declined, people moved south towards the ____.', ['coast'], 'Đoạn 4: "moved south towards the coast".'],
      ],
    },
    {
      title: 'Is Multitasking a Myth?',
      text: 'Many people take pride in their ability to do several things at once: answering emails during a meeting, or writing a report while following a conversation. Job advertisements regularly ask for candidates who can multitask. Yet most psychologists who have studied the question conclude that, for tasks requiring attention, the human brain does not really do two things at the same time. Instead it switches rapidly between them, and each switch has a price.\n\nThe price was measured in a series of experiments by the American psychologist David Meyer and his colleagues. Volunteers were asked to alternate between two kinds of task, such as solving arithmetic problems and classifying shapes. They were consistently slower and made more mistakes than when they completed one kind of task before starting the other. The more complicated the tasks, the greater the loss. Meyer estimated that switching can consume up to forty percent of a person\'s productive time.\n\nPart of the cost comes from what researchers call attention residue. When we leave a task unfinished, some of our attention remains with it, so that we bring less than our full mind to the next activity. Office workers who are interrupted, one study found, take an average of twenty-three minutes to return fully to what they were doing.\n\nIt might be supposed that people who multitask frequently become good at it. A study at Stanford University in 2009 suggested the opposite. Students who regularly used several kinds of media at once performed worse than others on tests of memory and of the ability to ignore irrelevant information. Curiously, the heavy multitaskers believed they were better at it than everyone else.\n\nThere are exceptions. Activities that have become automatic, such as walking, can be combined with a demanding task because they require little attention. Listening to instrumental music while working seems to cause few problems, whereas songs with words interfere with reading and writing. And a small number of individuals, perhaps two percent of the population, appear to be genuine "supertaskers", who can drive in a simulator and solve problems simultaneously without any decline in performance.\n\nFor everyone else, driving is the area in which the illusion is most dangerous. Experiments show that talking on a telephone, even one that leaves the hands free, slows a driver\'s reactions as much as being at the legal limit for alcohol.\n\nWhat is the alternative? Specialists recommend working in blocks of time devoted to a single task, switching off notifications, and dealing with messages at fixed points in the day. The advice is simple, but in workplaces that expect an immediate reply to every message, it is far from easy to follow.',
      qs: [
        ['T', 'Employers often list multitasking as a desirable skill.', 'Đoạn 1: quảng cáo việc làm thường yêu cầu.'],
        ['F', 'According to most psychologists, the brain performs two demanding tasks simultaneously.', 'Đoạn 1: não chuyển qua lại nhanh giữa chúng.'],
        ['T', 'In Meyer\'s experiments, switching between tasks increased errors.', 'Đoạn 2: chậm hơn và sai nhiều hơn.'],
        ['NG', 'Meyer\'s volunteers were paid for taking part.', 'Bài không nói.'],
        ['F', 'The Stanford study showed that practice makes people better multitaskers.', 'Đoạn 4: kết quả ngược lại.'],
        ['T', 'Heavy multitaskers overestimated their own ability.', 'Đoạn 4: tin rằng mình giỏi hơn người khác.'],
        ['NG', 'Supertaskers are more common among young people.', 'Bài không nói về tuổi.'],
        ['What is "attention residue"?', 'Attention that stays with an unfinished task', 'The time needed to learn a task', 'Extra attention gained by switching', 'The memory of a completed task', 'Đoạn 3: một phần chú ý vẫn ở lại với việc dở dang.'],
        ['Which kind of music interferes with reading and writing?', 'Songs with words', 'Instrumental music', 'Quiet classical music', 'All kinds equally', 'Đoạn 5: bài hát có lời.'],
        ['What do experiments show about hands-free phone calls while driving?', 'They slow reactions as much as alcohol at the legal limit.', 'They are completely safe.', 'They improve concentration.', 'They affect only new drivers.', 'Đoạn 6: chậm phản ứng ngang mức rượu ở giới hạn cho phép.'],
      ],
      fill: [
        ['Switching can consume up to ____ percent of productive time.', ['forty', '40'], 'Đoạn 2: "up to forty percent".'],
        ['Interrupted workers take an average of twenty-three ____ to return to a task.', ['minutes'], 'Đoạn 3: "twenty-three minutes".'],
        ['People who can do two things at once without loss are called "____".', ['supertaskers'], 'Đoạn 5: "genuine supertaskers".'],
        ['Specialists recommend switching off ____.', ['notifications'], 'Đoạn cuối: "switching off notifications".'],
      ],
    },
  ],
};
