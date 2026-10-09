/** Bộ đề IELTS cố định – đề 5 đến 8 (định dạng rút gọn, xem helpers.ts) */
import { IeltsTest, ieltsTest } from './helpers';

export const TESTS: IeltsTest[] = [
  // =========================================================================== ĐỀ 5
  ieltsTest(5, {
    listening: [
      {
        title: 'Section 1 – Booking a city walking tour',
        lines: [
          'W: Old Town Tours, good morning.',
          "M: Hi, I'd like to book the historical walking tour for two people, please.",
          'W: Certainly. We have tours at ten in the morning and at three in the afternoon. Which would you prefer?',
          'M: The afternoon one, please, this Saturday.',
          "W: Fine. It's sixteen pounds per person, and the tour lasts about two hours. We meet in front of the clock tower in Market Square.",
          'M: Great. Should we bring anything?',
          'W: Just comfortable shoes, and perhaps an umbrella. Could I have your name? ... Thank you, Mr. Whitlock. W-H-I-T-L-O-C-K.',
        ],
        qs: [
          ['Which tour does the man choose?', 'The afternoon tour on Saturday', 'The morning tour on Saturday', 'The afternoon tour on Sunday', '"The afternoon one, please, this Saturday".'],
          ['Where does the tour start?', 'In front of the clock tower', 'Outside the tour office', 'At the railway station', '"We meet in front of the clock tower in Market Square".'],
        ],
        fill: [
          ['Price per person: £ ____', ['16', 'sixteen'], 'Mười sáu bảng mỗi người.'],
          ['Length of tour: about ____ hours', ['2', 'two'], 'Kéo dài khoảng hai giờ.'],
          ['Customer’s surname: ____', ['Whitlock'], 'Đánh vần W-H-I-T-L-O-C-K.'],
        ],
      },
      {
        title: 'Section 2 – The Hillside community garden',
        lines: [
          'W: Hello everyone, and thank you for your interest in the Hillside Community Garden.',
          'W: The garden was created six years ago on a piece of land that used to be a car park. Today we have more than eighty members.',
          'W: Members can rent a small plot for thirty pounds a year to grow their own vegetables. Tools are provided, so you only need to bring gloves.',
          'W: We are especially proud of our project with the local primary school. Every Friday, children come to learn how food is grown.',
          'W: The garden is open every day from eight until sunset. Water is collected from the roof of the shed, so please use it carefully.',
          'W: Our next event is the autumn harvest festival on the twelfth of October, and everybody is welcome.',
        ],
        qs: [
          ['What was the land used for before?', 'A car park', 'A school playground', 'A football pitch', '"used to be a car park".'],
          ['What do members need to bring?', 'Gloves', 'Tools', 'Seeds', '"Tools are provided, so you only need to bring gloves".'],
          ['Who visits the garden every Friday?', 'Primary school children', 'University students', 'Elderly residents', 'Dự án với trường tiểu học: trẻ em đến mỗi thứ Sáu.'],
        ],
        fill: [
          ['A plot costs £ ____ a year.', ['30', 'thirty'], 'Ba mươi bảng một năm.'],
          ['The harvest festival is on the twelfth of ____.', ['October'], 'Ngày 12 tháng Mười.'],
        ],
      },
    ],
    reading: {
      title: 'A Short History of Chocolate',
      text: 'For most of its long history, chocolate was a drink rather than a food. The cacao tree is native to Central and South America, and the Maya were preparing a bitter, foamy drink from its beans more than fifteen hundred years ago. They mixed ground cacao with water, chilli and maize, and drank it at religious ceremonies. Later, the Aztecs valued cacao beans so highly that they used them as money; a rabbit could be bought for about ten beans.\n\nSpanish explorers brought cacao to Europe in the sixteenth century. The Spanish court found the drink too bitter, so cooks removed the chilli and added sugar and cinnamon. For almost a hundred years Spain kept the recipe secret, but it eventually spread to France and England, where fashionable "chocolate houses" opened for wealthy customers.\n\nChocolate remained a luxury until the Industrial Revolution. In 1828 a Dutch chemist, Coenraad van Houten, invented a press that separated the fat, known as cocoa butter, from the bean, leaving a fine powder that mixed easily with water. In 1847 an English company combined this powder with sugar and melted cocoa butter to produce the first solid chocolate bar. Milk chocolate followed in 1875, when the Swiss manufacturer Daniel Peter added condensed milk to the mixture.\n\nToday most of the world’s cacao is grown not in the Americas but in West Africa, mainly on small family farms. Farmers receive only a small fraction of the price of a chocolate bar, and campaigns for fairer trade have become increasingly common in recent years.',
      qs: [
        ['T', 'The Maya consumed chocolate as a drink.', 'Đoạn 1: người Maya pha đồ uống đắng, có bọt từ hạt cacao.'],
        ['F', 'The Spanish made the drink more bitter by adding chilli.', 'Ngược lại: họ BỎ ớt và thêm đường, quế.'],
        ['NG', 'Chocolate houses in England were more popular than coffee houses.', 'Bài không so sánh với quán cà phê.'],
        ['T', 'Solid chocolate bars appeared before milk chocolate.', 'Thanh sô-cô-la đặc năm 1847, sô-cô-la sữa năm 1875.'],
        ['What did the Aztecs use cacao beans for?', 'As a form of money', 'As medicine for rabbits', 'As building material', 'As food for soldiers', 'Đoạn 1: dùng làm tiền; một con thỏ giá khoảng mười hạt.'],
        ['What did van Houten’s invention do?', 'It separated cocoa butter from the bean.', 'It added milk to chocolate.', 'It removed sugar from the drink.', 'It dried the beans more quickly.', 'Đoạn 3: máy ép tách bơ cacao khỏi hạt.'],
      ],
      fill: [
        ['The fat in the cacao bean is called cocoa ____.', ['butter'], 'Đoạn 3: "cocoa butter".'],
        ['Most cacao is now grown in West ____.', ['Africa'], 'Đoạn cuối: "West Africa".'],
      ],
    },
    task1: [
      'Bar chart: Weekly exercise by age group',
      'The chart below shows the average number of hours per week that men and women in four age groups spent doing physical exercise in one country in 2021. Summarise the information by selecting and reporting the main features, and make comparisons where relevant.',
      'Age group | Men | Women\n16–24 | 6.5 | 4.0\n25–44 | 4.0 | 3.5\n45–64 | 3.0 | 3.5\n65+ | 2.5 | 3.0',
      'The bar chart compares the amount of time that males and females of different ages devoted to physical exercise each week in a particular country in 2021.\n\nOverall, people exercised less as they grew older, and this fall was much steeper for men than for women. Men were more active than women in the two younger groups, but the opposite was true among people aged 45 and over.\n\nYoung men aged 16 to 24 were by far the most active group, exercising for an average of 6.5 hours a week, compared with 4 hours for women of the same age. In the 25 to 44 group the gap narrowed considerably: men spent 4 hours and women 3.5 hours on exercise.\n\nAmong those aged 45 to 64, women maintained their level of 3.5 hours, whereas the figure for men dropped to 3 hours. The same pattern continued in the oldest group, where women exercised for 3 hours a week and men for only 2.5 hours, the lowest figure on the chart.\n\nIn summary, age reduced activity for both sexes, but women’s habits remained far more stable.',
    ],
    task2: [
      'Opinion: Government spending on the arts',
      'Some people think that governments should spend money on the arts, such as music and theatre. Others believe this money would be better spent on public services like health and education. To what extent do you agree that the arts deserve public funding?',
      'Whether public money should support the arts is a question that divides opinion. Some people regard concerts and theatres as luxuries that a government cannot afford when hospitals and schools need funds. Although I accept that essential services must come first, I largely agree that the arts deserve a share of public spending.\n\nIt is easy to understand the opposing view. Health and education affect every citizen directly, and in many countries these services are short of staff and equipment. When patients wait months for an operation, spending millions on an opera house may appear irresponsible. It is also argued that artists should earn their living by selling tickets, like any other business.\n\nHowever, there are strong reasons for supporting the arts. First of all, culture is part of a nation’s identity. Traditional music, dance and theatre would probably disappear without assistance, because they cannot compete commercially with films and online entertainment. Secondly, the arts bring economic benefits. Museums and festivals attract tourists, who spend money in hotels and restaurants and thereby create jobs. Edinburgh, for instance, earns a huge amount every summer from its arts festival.\n\nFurthermore, the arts contribute to education and health themselves. Children who learn an instrument or act in plays develop confidence and creativity, and research suggests that taking part in cultural activities reduces stress and loneliness, especially among elderly people. In this sense, the two kinds of spending are not really opposed to each other.\n\nIn conclusion, public services should certainly receive the larger part of the budget, but I believe that a modest and carefully managed investment in the arts benefits the economy, education and the wellbeing of society as a whole.',
    ],
    part1: ['Music', 'What kind of music do you listen to?', 'Did you learn to play an instrument as a child?', "I mostly listen to pop and acoustic music, especially when I'm travelling to work. As a child I took guitar lessons for about a year, but I gave up because I didn't practise enough, which I rather regret now."],
    part2: ['A festival or celebration', ['Describe a festival or celebration that is important in your country.', 'You should say:', 'when it takes place', 'what people do', 'what you usually do', 'and explain why it is important.'], "I'd like to talk about Tet, the Lunar New Year, which is the most important celebration in Vietnam. It usually takes place in late January or early February and lasts for several days. Before Tet, people clean and decorate their houses with peach blossom or apricot flowers, and they buy new clothes and special food. During the holiday, families gather to eat traditional dishes such as sticky rice cake, and children receive lucky money in red envelopes. I usually travel back to my hometown, help my mother cook, and visit my grandparents and relatives. Tet is important because it is the one time of the year when the whole family is together. It's also a chance to forget the problems of the old year and make a fresh start."],
    part3: ['Traditions and culture', 'Are traditional festivals still important to young people?', 'Should the government pay to protect traditional culture?', "I think they are still important, although young people celebrate in a more modern way and often spend part of the holiday travelling. In my opinion the government should definitely help, for example by funding museums and teaching traditional arts in schools, because once a tradition has disappeared it is almost impossible to bring it back."],
  }),

  // =========================================================================== ĐỀ 6
  ieltsTest(6, {
    listening: [
      {
        title: 'Section 1 – Reporting lost property',
        lines: [
          'M: Central Station lost property office. How can I help?',
          'W: Hello. I left my bag on a train yesterday evening and I wonder if it has been handed in.',
          'M: Which train were you on?',
          'W: The five forty from Leeds. I got off at Central Station at about ten past seven.',
          'M: And can you describe the bag?',
          "W: It's a dark green backpack with a leather handle. Inside there's a laptop and a blue notebook.",
          "M: I'll check. Could you give me a contact number? ... So that's oh seven seven, five five two, nine one eight. And your name is Mrs. Fenwick, F-E-N-W-I-C-K. We'll call you by noon tomorrow.",
        ],
        qs: [
          ['Where did the woman get off the train?', 'At Central Station', 'At Leeds', 'At the airport', '"I got off at Central Station".'],
          ['What is inside the bag?', 'A laptop and a notebook', 'A camera and a book', 'A phone and a wallet', '"there\'s a laptop and a blue notebook".'],
        ],
        fill: [
          ['Colour of the backpack: dark ____', ['green'], 'Ba lô màu xanh lá đậm.'],
          ['The handle is made of ____.', ['leather'], 'Quai bằng da.'],
          ['Caller’s surname: ____', ['Fenwick'], 'Đánh vần F-E-N-W-I-C-K.'],
        ],
      },
      {
        title: 'Section 4 – Lecture on the history of clocks',
        lines: [
          'M: This afternoon I am going to give a brief history of how people have measured time.',
          'M: The earliest device was the sundial, used in Egypt about three and a half thousand years ago. Its obvious weakness was that it could not work at night or in cloudy weather.',
          'M: Water clocks solved that problem. They measured time by the steady flow of water from one container to another, but the water could freeze in winter.',
          'M: Mechanical clocks appeared in European monasteries in the thirteenth century. They had no faces or hands. Instead, they rang a bell to call the monks to prayer.',
          'M: A great step forward came in sixteen fifty-six, when the Dutch scientist Christiaan Huygens built the first pendulum clock, which lost less than a minute a day.',
          'M: Accurate clocks later became essential for sailors, and for the railways, which needed a single standard time across a whole country.',
        ],
        qs: [
          ['What was the weakness of the sundial?', 'It was useless at night and in cloudy weather.', 'It was too heavy to move.', 'It was very expensive to build.', '"it could not work at night or in cloudy weather".'],
          ['How did the first mechanical clocks show the time?', 'By ringing a bell', 'With two hands on a face', 'With falling sand', '"They had no faces or hands. Instead, they rang a bell".'],
          ['Why did railways need accurate clocks?', 'They needed one standard time for the whole country.', 'Trains were often late.', 'Passengers demanded watches.', 'Đường sắt cần một giờ chuẩn thống nhất cả nước.'],
        ],
        fill: [
          ['In winter, the water in water clocks could ____.', ['freeze'], '"the water could freeze in winter".'],
          ['Huygens built the first ____ clock.', ['pendulum'], 'Đồng hồ quả lắc đầu tiên, năm 1656.'],
        ],
      },
    ],
    reading: {
      title: 'Surviving in the Desert',
      text: 'Deserts receive less than 250 millimetres of rain a year, and temperatures at ground level can exceed sixty degrees Celsius. Plants cannot run away from such conditions, so those that live there have developed remarkable ways of finding, storing and saving water.\n\nSome plants avoid drought altogether. The seeds of desert annuals lie in the sand for years, protected by a chemical coating that only heavy rain can wash away. When a real storm finally arrives, they germinate, flower and produce new seeds within a few weeks, before the ground dries out again.\n\nOther plants store water. Cacti have thick stems that swell like barrels after rain; a large saguaro cactus in Arizona can hold several thousand litres. Their leaves have been reduced to sharp spines, which lose almost no water and also discourage thirsty animals. Cacti open the tiny pores in their skin only at night, when the air is cooler, so that less moisture escapes.\n\nA third group searches for water deep underground. The mesquite tree sends its roots down as far as fifty metres to reach permanent water, whereas the creosote bush spreads a wide network of shallow roots to catch rain before it evaporates. The creosote bush is also said to release chemicals that stop other seedlings from growing nearby, although some botanists doubt this.\n\nThese adaptations have attracted the attention of engineers. Materials that copy the surface of cactus spines are being tested to collect drinking water from fog in dry coastal regions.',
      qs: [
        ['T', 'The seeds of some desert plants can survive for years without growing.', 'Đoạn 2: hạt nằm trong cát nhiều năm.'],
        ['F', 'Cacti open their pores during the hottest part of the day.', 'Đoạn 3: chỉ mở vào ban đêm.'],
        ['NG', 'The saguaro cactus grows faster than other cacti.', 'Bài không nói về tốc độ sinh trưởng.'],
        ['F', 'All botanists agree that the creosote bush poisons nearby seedlings.', 'Đoạn 4: "some botanists doubt this".'],
        ['What allows the seeds of desert annuals to germinate?', 'Heavy rain washing off a chemical coating', 'A sudden fall in temperature', 'Animals carrying them to wet ground', 'Strong winds uncovering them', 'Đoạn 2: lớp hóa chất chỉ bị rửa trôi bởi mưa lớn.'],
        ['How does the mesquite tree obtain water?', 'Through very deep roots', 'Through wide shallow roots', 'By storing it in its stem', 'By collecting fog on its leaves', 'Đoạn 4: rễ sâu tới năm mươi mét.'],
      ],
      fill: [
        ['The leaves of cacti have become sharp ____.', ['spines'], 'Đoạn 3: "sharp spines".'],
        ['Engineers are testing materials that collect drinking water from ____.', ['fog'], 'Đoạn cuối: "from fog".'],
      ],
    },
    task1: [
      'Table: Daily water use',
      'The table below shows the average amount of water used per person per day (in litres) for different purposes in three countries. Summarise the information by selecting and reporting the main features, and make comparisons where relevant.',
      'Purpose | Country A | Country B | Country C\nBathing | 120 | 60 | 20\nToilet | 80 | 45 | 10\nLaundry | 60 | 30 | 12\nCooking and drinking | 20 | 15 | 8\nTotal | 280 | 150 | 50',
      'The table compares how much water an average person uses each day in three countries, divided into four household purposes.\n\nOverall, residents of Country A consume far more water than those of the other two countries, and people in Country C use the least in every category. In all three countries, bathing accounts for the largest share and cooking and drinking for the smallest.\n\nIn Country A, total daily use reaches 280 litres per person. Bathing alone requires 120 litres, followed by flushing the toilet at 80 litres and laundry at 60 litres. Only 20 litres are used for cooking and drinking.\n\nThe figures for Country B are roughly half of those for Country A. The total is 150 litres, of which 60 litres go on bathing, 45 on the toilet and 30 on laundry.\n\nCountry C presents a striking contrast. Its inhabitants use just 50 litres a day in total, which is less than a fifth of the amount used in Country A. Even bathing, the biggest category, takes only 20 litres, while cooking and drinking require 8 litres.',
    ],
    task2: [
      'Discussion: Should university be free?',
      'Some people believe that university education should be free for all students. Others think that students should pay for their own higher education. Discuss both views and give your own opinion.',
      'The question of who should pay for university has become a major political issue in many countries. Some people argue that the state should cover the full cost, while others maintain that students ought to pay because they are the ones who benefit. Both views deserve consideration.\n\nThose in favour of free university education believe that it gives everyone an equal chance. If fees are high, talented young people from poor families may decide not to apply, and society loses doctors, engineers and teachers that it badly needs. In addition, graduates generally earn higher salaries and therefore pay more tax during their careers, so the government eventually gets its money back. Countries such as Germany and Norway, which charge little or nothing, have highly skilled workforces.\n\nOn the other hand, those who support fees point out that higher education is extremely expensive. If the state pays for everything, taxes must rise, and people who never went to university will be paying for those who will later earn more than them. It is also claimed that students who pay for their courses choose them more carefully and work harder, whereas free places may be wasted by those who are not really committed.\n\nIn my view, the fairest system lies between these two positions. Students should contribute something, but only after they graduate and only when their income reaches a reasonable level. At the same time, generous grants should be available for those from the poorest backgrounds, so that nobody is prevented from studying by a lack of money.\n\nIn conclusion, although completely free university education is attractive in principle, I believe that a system of affordable repayments combined with financial support is both fairer to taxpayers and more sustainable.',
    ],
    part1: ['Weather', 'What is the weather usually like where you live?', 'Does the weather affect your mood?', "Where I live it's hot and humid for most of the year, with a rainy season from May to October. Yes, the weather definitely affects my mood. I feel much more energetic on cool, sunny days, and a bit lazy when it rains all day."],
    part2: ['A time you helped someone', ['Describe a time when you helped someone.', 'You should say:', 'who you helped', 'what the problem was', 'how you helped', 'and explain how you felt afterwards.'], "I'd like to talk about a time when I helped an elderly tourist in my city. It happened last spring, when I was walking home from work. I noticed a woman of about seventy standing at a bus stop, looking at a map and seeming very confused. She told me in English that she had lost her tour group and couldn't remember the name of her hotel. Fortunately, she had a key card in her bag with the hotel's logo on it, so I searched for it on my phone and found the address. It was only fifteen minutes away, so I walked there with her and we chatted about her trip. When we arrived, her friends were so relieved. Afterwards I felt really pleased, because a small effort on my part had made a big difference to her day."],
    part3: ['Helping others', 'Do people help their neighbours less than in the past?', 'Should students be required to do volunteer work?', "I think that's true in big cities, where people are busy and often don't even know their neighbours' names, although in villages the tradition is still strong. As for volunteer work, I'd encourage it rather than make it compulsory. If students are forced to do it, they may not take it seriously, but when they choose it themselves they learn a great deal."],
  }),

  // =========================================================================== ĐỀ 7
  ieltsTest(7, {
    listening: [
      {
        title: 'Section 1 – Making a dental appointment',
        lines: [
          'W: Good morning, Parkside Dental Clinic.',
          "M: Good morning. I'd like to make an appointment, please. I've had a toothache for three days.",
          'W: I see. Are you already registered with us?',
          "M: No, I'm a new patient.",
          'W: In that case the first check-up costs thirty-five pounds, and it includes an X-ray. The earliest time I have is Thursday at a quarter past nine with Dr. Marlow.',
          "M: That's fine. Where exactly are you?",
          "W: We're at twenty-two Albany Road, opposite the post office. Please arrive ten minutes early to fill in a form. And your name? ... Thank you, Mr. Osborne. O-S-B-O-R-N-E.",
        ],
        qs: [
          ['Why is the man calling?', 'He has a toothache.', 'He wants to cancel an appointment.', 'He needs a new X-ray.', '"I\'ve had a toothache for three days".'],
          ['Where is the clinic?', 'Opposite the post office', 'Next to the park', 'Behind the station', '"opposite the post office".'],
        ],
        fill: [
          ['Cost of first check-up: £ ____', ['35', 'thirty-five', 'thirty five'], 'Ba mươi lăm bảng, gồm chụp X-quang.'],
          ['Appointment day: ____', ['Thursday'], 'Thứ Năm lúc 9 giờ 15.'],
          ['Patient’s surname: ____', ['Osborne'], 'Đánh vần O-S-B-O-R-N-E.'],
        ],
      },
      {
        title: 'Section 3 – Planning a group presentation',
        lines: [
          'W: So, Ben, our presentation on renewable energy is next Monday. How shall we divide the work?',
          "M: Well, there are three of us. I could do the introduction and the section on solar power, since I've already read a lot about it.",
          "W: OK. I'll take wind power, and Sofia can cover the costs. She's good with numbers.",
          'M: Agreed. How long do we have?',
          'W: Fifteen minutes in total, plus five minutes for questions. The tutor said we lost marks last time because we had too much text on the slides.',
          "M: Right, so let's use more charts and pictures this time. Shall we practise together on Friday?",
          "W: Friday's good. Let's meet in the library at two.",
        ],
        qs: [
          ['Which section will the man present?', 'Solar power', 'Wind power', 'The costs', '"I could do the introduction and the section on solar power".'],
          ['Why did they lose marks last time?', 'The slides had too much text.', 'The talk was too long.', 'They did not answer questions.', '"we had too much text on the slides".'],
          ['Where will they practise?', 'In the library', 'In the lecture hall', 'At Sofia’s house', '"Let\'s meet in the library at two".'],
        ],
        fill: [
          ['The presentation is next ____.', ['Monday'], 'Bài thuyết trình vào thứ Hai tới.'],
          ['The talk should last ____ minutes, plus questions.', ['15', 'fifteen'], 'Mười lăm phút, thêm năm phút hỏi đáp.'],
        ],
      },
    ],
    reading: {
      title: 'The Meaning of Colour',
      text: 'Colour influences our behaviour more than most of us realise. Marketing researchers claim that shoppers form an opinion about a product within ninety seconds, and that most of this judgement is based on colour alone. It is no accident that fast-food restaurants so often choose red and yellow, which are believed to attract attention and increase appetite, while banks prefer blue, a colour associated with calm and trust.\n\nSome effects of colour have been tested in experiments. In one well-known study of combat sports at the 2004 Olympic Games, competitors who had been randomly given red clothing won slightly more often than those in blue. The researchers suggested that red may be seen as a sign of dominance. Other experiments, however, have found that students who see red before an examination perform worse, perhaps because they link it with danger and teachers’ corrections.\n\nNot every popular belief survives careful testing. In the 1980s several prisons painted cells pink after a report that the colour made prisoners less aggressive. Later studies failed to repeat the result, and some even found the opposite effect.\n\nThe meaning of colour also depends on culture. White is worn by brides in Western countries but is the colour of mourning in parts of Asia. Language matters too: some languages use a single word for both blue and green, and speakers of Russian, which has separate basic words for light and dark blue, are slightly quicker at telling these shades apart.\n\nPsychologists therefore warn against simple rules. Colour clearly affects us, but its influence depends on context, experience and expectation.',
      qs: [
        ['T', 'Banks often use blue because people associate it with trust.', 'Đoạn 1: xanh dương gắn với sự bình tĩnh và tin cậy.'],
        ['F', 'Athletes in the 2004 study chose the colour of their clothing.', 'Đoạn 2: màu được phân NGẪU NHIÊN ("randomly given").'],
        ['NG', 'Pink prison cells were first used in the United States.', 'Bài không nói nhà tù ở nước nào.'],
        ['F', 'Later research confirmed that pink reduces aggression.', 'Đoạn 3: các nghiên cứu sau không lặp lại được kết quả.'],
        ['According to the passage, why might red harm exam performance?', 'Students connect it with danger and corrections.', 'It makes students feel hungry.', 'It is difficult to read.', 'It makes students too relaxed.', 'Đoạn 2: liên hệ với nguy hiểm và chữ sửa bài của giáo viên.'],
        ['What does the example of Russian speakers show?', 'Language can affect how quickly colours are distinguished.', 'Russians dislike the colour green.', 'Blue has a negative meaning in Russia.', 'All languages have the same colour words.', 'Đoạn 4: người nói tiếng Nga phân biệt các sắc xanh nhanh hơn một chút.'],
      ],
      fill: [
        ['Red and yellow are believed to attract attention and increase ____.', ['appetite'], 'Đoạn 1: "increase appetite".'],
        ['In parts of Asia, white is the colour of ____.', ['mourning'], 'Đoạn 4: "the colour of mourning".'],
      ],
    },
    task1: [
      'Line graph: Average house prices',
      'The graph below shows average house prices (in thousands of dollars) in three cities between 2000 and 2020. Summarise the information by selecting and reporting the main features, and make comparisons where relevant.',
      'City | 2000 | 2005 | 2010 | 2015 | 2020\nNorthport | 150 | 220 | 200 | 280 | 360\nRiverton | 180 | 200 | 210 | 230 | 250\nEastfield | 120 | 130 | 110 | 100 | 105',
      'The line graph shows how the average price of a house changed in Northport, Riverton and Eastfield over two decades, from 2000 to 2020.\n\nOverall, prices rose in Northport and Riverton but fell in Eastfield. Northport experienced by far the largest increase, although its growth was not continuous.\n\nIn 2000, Riverton was the most expensive of the three cities, with an average price of $180,000, followed by Northport at $150,000 and Eastfield at $120,000. During the next five years Northport prices jumped to $220,000, overtaking those in Riverton. After a small fall to $200,000 in 2010, they climbed steeply again, reaching $360,000 by 2020, which was more than double the original figure.\n\nRiverton, in contrast, showed slow but steady growth. Its prices went up by between $10,000 and $20,000 in each five-year period and ended at $250,000.\n\nEastfield followed a different pattern. After a slight rise to $130,000 in 2005, prices declined to a low of $100,000 in 2015 before recovering marginally to $105,000. As a result, the gap between the cheapest and the most expensive city widened dramatically.',
    ],
    task2: [
      'Opinion: Advertising aimed at children',
      'Advertising aimed at children should be banned. To what extent do you agree or disagree?',
      'Children today are surrounded by advertisements, on television, in video games and on their phones. Many parents and doctors believe that companies should not be allowed to target such a young audience. I agree to a large extent, although I think a total ban on every kind of advertisement would be difficult to justify.\n\nThe strongest argument for a ban is that young children cannot understand the purpose of advertising. Research shows that those under the age of about eight do not realise that an advertisement is trying to sell them something; they simply believe what they are told. It is therefore unfair to use clever techniques, such as cartoon characters and free toys, to influence them. Moreover, a large proportion of these advertisements promote sweets, sugary drinks and fast food. As a result, they contribute to poor eating habits and to the growing problem of childhood obesity.\n\nAnother problem is the pressure placed on families. Children who see the latest toys every day repeatedly ask their parents to buy them, and this causes arguments and makes poorer children feel left out. Countries such as Sweden and Norway, which prohibit television advertising to children under twelve, have shown that restrictions are practical.\n\nNevertheless, not all advertising is harmful. Campaigns that encourage children to read, to play sport or to eat fruit can have a positive effect, and banning them would make little sense. In addition, children’s television programmes are often paid for by advertising, so a ban might reduce their quality unless other funding is found.\n\nIn conclusion, I believe that advertisements for unhealthy food and expensive toys should not be directed at children. However, messages that promote education and health ought to remain permitted.',
    ],
    part1: ['Shopping', 'Do you prefer shopping online or in stores?', 'What was the last thing you bought for yourself?', "These days I mostly shop online, because it saves time and it's easy to compare prices, although I still go to a store when I need shoes. The last thing I bought for myself was a pair of wireless headphones, which I use every day on the bus."],
    part2: ['An advertisement you remember', ['Describe an advertisement that you remember well.', 'You should say:', 'what it was advertising', 'where you saw it', 'what it was like', 'and explain why you remember it.'], "I'm going to describe a television advertisement for a brand of milk that I saw when I was a child. It was shown every evening just before the cartoons, so I must have watched it hundreds of times. In the advertisement, a group of cows were dancing and singing a cheerful song in a green field, and at the end a little boy drank a glass of milk and suddenly became tall and strong. Looking back, it was rather silly, but the song was so catchy that all the children in my class knew the words. I remember it mainly because of that music, and also because it really worked on me. I kept asking my mother to buy that particular brand, even though it was more expensive than the others."],
    part3: ['Advertising', 'How does advertising influence what people buy?', 'Is there too much advertising in modern life?', "Advertising has a strong influence, because it makes people feel that they need things they had never thought about before, and it creates trust in famous brands. Personally, I do think there is too much of it. We see advertisements on every website and in every street, so many people have simply learned to ignore them."],
  }),

  // =========================================================================== ĐỀ 8
  ieltsTest(8, {
    listening: [
      {
        title: 'Section 1 – Hiring a car',
        lines: [
          'M: Coastline Car Hire, Tom speaking.',
          "W: Hello, I'd like to hire a small car for a few days next week.",
          'M: Certainly. When would you like to collect it?',
          'W: On Monday morning, and I would return it on Thursday evening.',
          'M: So four days. Our smallest model is thirty-two pounds a day, including insurance. You will need to leave a deposit of one hundred and fifty pounds, which you get back when you return the car.',
          'W: Fine. Can I collect it from the airport?',
          "M: Yes, our desk is in Terminal Two. Please bring your driving licence and a credit card. What name is it? ... Mrs. Keating, K-E-A-T-I-N-G. Lovely, that's all booked.",
        ],
        qs: [
          ['How long will the woman hire the car for?', 'Four days', 'Three days', 'One week', 'Từ thứ Hai đến thứ Năm: "So four days".'],
          ['What must she bring?', 'A driving licence and a credit card', 'A passport and cash', 'An insurance certificate', '"Please bring your driving licence and a credit card".'],
        ],
        fill: [
          ['Price per day: £ ____', ['32', 'thirty-two', 'thirty two'], 'Ba mươi hai bảng một ngày, gồm bảo hiểm.'],
          ['Deposit: £ ____', ['150', 'one hundred and fifty'], 'Đặt cọc một trăm năm mươi bảng.'],
          ['Customer’s surname: ____', ['Keating'], 'Đánh vần K-E-A-T-I-N-G.'],
        ],
      },
      {
        title: 'Section 4 – Lecture on birds in cities',
        lines: [
          'W: Today we turn to a question that interests many biologists: how do wild birds adapt to life in cities?',
          'W: The first challenge is noise. Traffic produces low sounds that cover the songs of many birds. Studies in Europe show that city birds now sing at a higher pitch, and some sing at night, when the streets are quieter.',
          'W: The second challenge is light. Street lamps make birds begin singing earlier in the morning, and city blackbirds start breeding about three weeks earlier than forest blackbirds.',
          'W: Food is rarely a problem. Cities offer rubbish, bird tables and insects around lamps. Pigeons and crows do especially well, because they eat almost anything.',
          'W: There are dangers, though. Glass windows kill millions of birds each year, and domestic cats are a serious threat.',
          'W: You can help by placing stickers on large windows and planting native trees in your garden.',
        ],
        qs: [
          ['How have city birds changed their songs?', 'They sing at a higher pitch.', 'They sing more quietly.', 'They have stopped singing.', '"city birds now sing at a higher pitch".'],
          ['Why do pigeons and crows succeed in cities?', 'They eat almost anything.', 'They are afraid of cats.', 'They only live near parks.', '"because they eat almost anything".'],
          ['What does the speaker recommend?', 'Putting stickers on large windows', 'Feeding birds every night', 'Turning off all street lamps', '"placing stickers on large windows and planting native trees".'],
        ],
        fill: [
          ['City blackbirds start breeding about ____ weeks earlier.', ['3', 'three'], 'Sớm hơn khoảng ba tuần.'],
          ['Domestic ____ are a serious threat to city birds.', ['cats'], '"domestic cats are a serious threat".'],
        ],
      },
    ],
    reading: {
      title: 'Guiding Lights',
      text: 'For as long as people have sailed at night, they have needed lights to warn them of rocks and guide them into harbour. The most famous early lighthouse stood on the island of Pharos at Alexandria in Egypt. Completed around 280 BC, it was more than a hundred metres tall, and a fire burning at the top is said to have been visible fifty kilometres away. It survived for over a thousand years before earthquakes destroyed it.\n\nBuilding a lighthouse on land was difficult enough; building one on a rock in the open sea was far harder. The Eddystone rocks off the south coast of England had wrecked countless ships when Henry Winstanley completed a wooden tower there in 1698. Five years later he was inside it making repairs when the worst storm in English history swept the tower, and its builder, away. A later version, designed by John Smeaton in 1759, was made of stone blocks cut to lock together and shaped like the trunk of an oak tree. It stood for more than a century and became the model for lighthouses around the world.\n\nThe light itself also improved. Early lamps were weak, but in 1822 the French physicist Augustin Fresnel designed a lens made of rings of glass that gathered the light into a single powerful beam. Each lighthouse was given its own pattern of flashes so that sailors could identify it.\n\nFor centuries lighthouses were looked after by keepers, who often lived in great isolation. During the twentieth century automatic equipment gradually replaced them, and today satellite navigation has made many lighthouses unnecessary. A number have been turned into museums or holiday accommodation.',
      qs: [
        ['T', 'The lighthouse at Alexandria was eventually destroyed by earthquakes.', 'Đoạn 1: "before earthquakes destroyed it".'],
        ['F', 'Winstanley’s tower at Eddystone was built of stone.', 'Đoạn 2: tháp của Winstanley bằng GỖ; tháp đá là của Smeaton.'],
        ['T', 'Winstanley died in the lighthouse he had built.', 'Đoạn 2: cơn bão cuốn cả tháp lẫn người xây nó.'],
        ['NG', 'Smeaton visited Alexandria before designing his lighthouse.', 'Bài không đề cập.'],
        ['Why was each lighthouse given a different pattern of flashes?', 'So that sailors could recognise which lighthouse it was', 'To save fuel', 'To make the light more powerful', 'To warn of approaching storms', 'Đoạn 3: để thủy thủ nhận biết từng ngọn hải đăng.'],
        ['What has happened to some lighthouses in recent times?', 'They have become museums or places to stay.', 'They have been rebuilt in wood.', 'They have been moved inland.', 'They have been fitted with larger lamps.', 'Đoạn cuối: trở thành bảo tàng hoặc chỗ nghỉ.'],
      ],
      fill: [
        ['Smeaton’s tower was shaped like the trunk of an ____ tree.', ['oak'], 'Đoạn 2: "an oak tree".'],
        ['Fresnel designed a ____ made of rings of glass.', ['lens'], 'Đoạn 3: "a lens made of rings of glass".'],
      ],
    },
    task1: [
      'Bar chart: Employment by sector',
      'The chart below shows the percentage of workers employed in three sectors of the economy in one country in 1980, 2000 and 2020. Summarise the information by selecting and reporting the main features, and make comparisons where relevant.',
      'Sector | 1980 | 2000 | 2020\nAgriculture | 45% | 25% | 10%\nManufacturing | 30% | 35% | 25%\nServices | 25% | 40% | 65%',
      'The bar chart illustrates how the workforce of one country was distributed among agriculture, manufacturing and services in three different years over a forty-year period.\n\nOverall, there was a major shift from farming to services. Agriculture, which had been the largest employer in 1980, became the smallest by 2020, whereas the service sector grew continuously and eventually employed almost two thirds of all workers.\n\nIn 1980, nearly half of the workforce (45%) was engaged in agriculture, compared with 30% in manufacturing and only 25% in services. By 2000, the proportion of agricultural workers had fallen to a quarter, while services had risen to 40% and become the leading sector. Manufacturing also increased slightly, reaching a peak of 35%.\n\nThese trends continued in the following two decades, except in manufacturing. Employment in agriculture dropped further to just 10% in 2020, and manufacturing declined to 25%, below its original level. Services, by contrast, expanded strongly to 65%.\n\nIn summary, the economy of this country changed from one based mainly on farming to one dominated by service industries.',
    ],
    task2: [
      'Causes and solutions: Childhood obesity',
      'In many countries, the number of overweight children is increasing. What are the causes of this problem, and what measures could be taken to reduce it?',
      'Doctors in many parts of the world are concerned that children are heavier and less healthy than previous generations. This essay will examine why this is happening and what families, schools and governments could do about it.\n\nThere are two principal causes. The first is diet. Fast food, snacks and sweet drinks are cheap, widely advertised and available on almost every street. Because many parents work long hours, they have little time to cook and often rely on ready-made meals that contain large amounts of fat and sugar. The second cause is a lack of physical activity. In the past, children walked to school and played outside for hours, whereas today they are driven everywhere and spend their free time sitting in front of screens. When children take in more energy than they use, weight gain is inevitable.\n\nSeveral measures could help to reverse this trend. To begin with, schools should serve balanced lunches and remove machines selling sweets and fizzy drinks. They should also increase the number of sports lessons and teach pupils the basics of nutrition and cooking. Parents have an equally important role: they can limit screen time, prepare simple home-cooked meals and set a good example by being active themselves. Finally, governments could tax sugary drinks, as Mexico and the United Kingdom have done, and restrict the advertising of unhealthy food to children. The income from such taxes could be used to build playgrounds and cycle paths.\n\nIn conclusion, childhood obesity results mainly from poor diet and inactive lifestyles. It can be reduced, but only if schools, parents and governments all accept their share of responsibility and act together.',
    ],
    part1: ['Food and cooking', 'Who usually does the cooking in your home?', 'Is there any food you disliked as a child but enjoy now?', "My mother does most of the cooking, but I usually help at weekends, and I'm quite good at making soup. When I was a child I really disliked bitter vegetables, especially bitter melon. Surprisingly, I quite enjoy them now, particularly when they're cooked with eggs."],
    part2: ['A healthy habit', ['Describe a healthy habit that you have.', 'You should say:', 'what the habit is', 'when you started it', 'how often you do it', 'and explain how it benefits you.'], "I'd like to talk about my habit of going for a run early in the morning. I started about two years ago, when I realised that I was sitting at a desk nearly all day and feeling tired all the time. A colleague suggested that I join her in the park near our office, and after a few weeks I began running on my own. Now I run three or four times a week, usually at about six o'clock, for around thirty minutes. The habit benefits me in several ways. Physically, I've lost some weight and I rarely catch a cold these days. Mentally, it gives me quiet time to plan my day, and I arrive at work feeling awake and positive. Even on days when I don't feel like getting up, I never regret it afterwards."],
    part3: ['Health', 'Why do many people find it difficult to stay healthy?', 'Whose responsibility is it to keep people healthy: individuals or the government?', "I think the main difficulty is that modern life is busy and convenient. People work long hours, so they choose fast food and have no energy left for exercise. In my view, responsibility is shared. Individuals have to make sensible choices, but the government should make those choices easier, for instance by building parks and giving clear information about food."],
  }),
];
