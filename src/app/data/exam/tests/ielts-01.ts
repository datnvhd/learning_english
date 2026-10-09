/** Bộ đề IELTS cố định – đề 1 đến 4 (định dạng rút gọn, xem helpers.ts) */
import { IeltsTest, ieltsTest } from './helpers';

export const TESTS: IeltsTest[] = [
  // =========================================================================== ĐỀ 1
  ieltsTest(1, {
    listening: [
      {
        title: 'Section 1 – Joining a public library',
        lines: [
          'W: Good afternoon, Northgate Library. How can I help you?',
          "M: Hello, I've just moved to the area and I'd like to become a member.",
          'W: Certainly. Membership is free for local residents, but you need to bring proof of address, such as an electricity bill.',
          'M: No problem. How many books can I borrow at a time?',
          'W: Up to twelve books for three weeks. If you return them late, the fine is twenty pence per day for each book.',
          "M: I see. My name is Daniel Hartley. That's H-A-R-T-L-E-Y.",
          'W: Thank you, Mr. Hartley. We also run a film club on the first Thursday of every month, if you are interested.',
        ],
        qs: [
          ['What must the man bring to join the library?', 'Proof of his address', 'A passport photo', 'A membership fee', 'Ghi nhớ: cần "proof of address, such as an electricity bill".'],
          ['When does the film club meet?', 'On the first Thursday of each month', 'Every Thursday', 'On the first Tuesday of each month', '"on the first Thursday of every month".'],
        ],
        fill: [
          ['Maximum number of books: ____', ['12', 'twelve'], 'Mượn tối đa mười hai cuốn.'],
          ['Late fine: ____ pence per day', ['20', 'twenty'], 'Phạt hai mươi xu mỗi ngày cho mỗi cuốn.'],
          ['Surname of the new member: ____', ['Hartley'], 'Đánh vần H-A-R-T-L-E-Y.'],
        ],
      },
      {
        title: 'Section 2 – Volunteering at the city museum',
        lines: [
          'W: Thank you all for coming to this information evening about volunteering at the City Museum.',
          'W: We currently need volunteers in two areas: guiding school groups around the galleries, and helping in the gift shop at weekends.',
          'W: You do not need any qualifications in history. What matters most is that you enjoy talking to people.',
          'W: All new volunteers attend a training course, which lasts four days and takes place in the education room on the second floor.',
          'W: Volunteers are not paid, but we cover your travel costs and you receive a free lunch in the museum cafe on the days you work.',
          'W: If you would like to apply, please complete the green form and hand it to me before you leave tonight.',
        ],
        qs: [
          ['What is the most important quality for volunteers?', 'Enjoying talking to people', 'Having a history degree', 'Speaking a foreign language', '"What matters most is that you enjoy talking to people".'],
          ['What do volunteers receive?', 'Travel costs and a free lunch', 'A small monthly salary', 'A discount in the gift shop', 'Không được trả lương nhưng được trả phí đi lại và bữa trưa miễn phí.'],
          ['How should people apply?', 'By handing in a form tonight', 'By sending an email', 'By calling the museum office', '"complete the green form and hand it to me before you leave tonight".'],
        ],
        fill: [
          ['The training course lasts ____ days.', ['4', 'four'], 'Khóa đào tạo kéo dài bốn ngày.'],
          ['The training takes place on the ____ floor.', ['second', '2nd'], 'Phòng giáo dục ở tầng hai.'],
        ],
      },
    ],
    reading: {
      title: 'How Honeybees Communicate',
      text: 'Honeybees live in colonies of up to sixty thousand insects, and the survival of the colony depends on finding flowers efficiently. In the 1920s the Austrian scientist Karl von Frisch noticed that when a single bee discovered a rich source of food, many other bees from the same hive soon arrived at exactly the same place. He suspected that the first bee was somehow passing on information.\n\nAfter years of patient observation, von Frisch showed that a returning bee performs a "waggle dance" on the surface of the honeycomb. The bee runs in a straight line while shaking its body, then circles back and repeats the movement. The angle of the straight run in relation to the vertical shows the direction of the food in relation to the sun, while the length of the run indicates distance: the longer the bee waggles, the further away the flowers are. Other bees follow the dancer closely in the darkness of the hive, touching her with their antennae.\n\nAt first many scientists refused to accept that an insect could use such an abstract code, and some argued that bees simply followed the smell of flowers. The debate was only settled decades later, when researchers attached tiny radar transmitters to bees and tracked their flights. The recruited bees flew directly towards the location shown by the dance. Von Frisch received the Nobel Prize in 1973.\n\nToday the dance is studied for practical reasons too. By decoding thousands of dances, ecologists can map where bees are feeding and identify which parts of the countryside are most valuable for them.',
      qs: [
        ['T', 'A honeybee colony may contain as many as sixty thousand bees.', 'Đoạn 1: "colonies of up to sixty thousand insects".'],
        ['F', 'The length of the straight run shows the direction of the food.', 'Độ dài chỉ KHOẢNG CÁCH; góc mới chỉ hướng.'],
        ['NG', 'Von Frisch kept his own beehives as a child.', 'Bài không nhắc đến tuổi thơ của ông.'],
        ['F', 'Scientists immediately agreed with von Frisch’s explanation.', 'Đoạn 3: nhiều nhà khoa học lúc đầu không chấp nhận.'],
        ['What finally proved that the dance guides other bees?', 'Tracking bees with radar transmitters', 'Filming bees inside the hive', 'Measuring the smell of flowers', 'Removing the sun as a reference', 'Đoạn 3: gắn máy phát radar nhỏ và theo dõi đường bay.'],
        ['Why do ecologists decode bee dances today?', 'To find out which areas are valuable feeding grounds', 'To increase honey production in factories', 'To teach bees new dances', 'To protect bees from radar', 'Đoạn cuối: lập bản đồ nơi ong kiếm ăn.'],
      ],
      fill: [
        ['The returning bee performs a "____ dance" on the honeycomb.', ['waggle'], 'Đoạn 2: "waggle dance".'],
        ['Bees that follow the dancer touch her with their ____.', ['antennae'], 'Đoạn 2: "touching her with their antennae".'],
      ],
    },
    task1: [
      'Bar chart: Household spending',
      'The chart below shows the percentage of household income spent on four categories in one country in 1990 and 2020. Summarise the information by selecting and reporting the main features, and make comparisons where relevant.',
      'Category | 1990 | 2020\nFood | 30% | 18%\nHousing | 22% | 34%\nTransport | 14% | 15%\nLeisure | 8% | 16%',
      'The bar chart compares how households in one country divided their income among food, housing, transport and leisure in 1990 and 2020.\n\nOverall, the share of income spent on food fell sharply, whereas housing and leisure took up a much larger proportion. Spending on transport hardly changed over the period.\n\nIn 1990, food was the largest category, accounting for 30% of household income, followed by housing at 22%. Three decades later the positions had been reversed. Housing had risen by twelve percentage points to 34%, making it by far the biggest expense, while the figure for food had dropped to only 18%.\n\nLeisure showed the most dramatic relative change. Families devoted just 8% of their income to it in 1990, but this figure had doubled to 16% by 2020, overtaking transport. By contrast, transport remained almost stable, increasing only slightly from 14% to 15%.\n\nIn summary, households in 2020 spent proportionally less on basic food and considerably more on accommodation and free-time activities than they had done thirty years earlier.',
    ],
    task2: [
      'Opinion: Children and screens',
      'Some people believe that children should not be allowed to use smartphones or tablets until they are teenagers. To what extent do you agree or disagree?',
      'Smartphones and tablets are now part of everyday family life, and many parents worry about the age at which children should start using them. Although I understand why some people want to ban these devices until the teenage years, I believe a complete ban is neither realistic nor helpful.\n\nThose who support a ban have reasonable concerns. Young children who spend hours in front of a screen may move less, sleep badly and find it harder to concentrate at school. In addition, the internet contains violent or inappropriate material, and small children cannot judge what is safe. For these reasons, it is clearly wrong to give a six-year-old unlimited access to a phone.\n\nHowever, I would argue that controlled use is far better than no use at all. Firstly, digital skills are now as essential as reading and writing, and children who never touch a device will be at a disadvantage when they finally enter secondary school. Secondly, there are excellent educational applications that teach languages, mathematics and music in an entertaining way. For example, my young cousin learned hundreds of English words from a vocabulary game that her parents allowed her to play for twenty minutes a day.\n\nFurthermore, a strict ban is extremely difficult to enforce. Children see devices everywhere, and those who are forbidden to use them at home often do so secretly at a friend’s house, without any adult guidance. It is therefore wiser for parents to set clear time limits, choose suitable content and use the devices together with their children.\n\nIn conclusion, while the dangers of excessive screen time are real, I disagree with a total ban. Sensible rules and parental supervision protect children more effectively than prohibition.',
    ],
    part1: ['Reading', 'Do you enjoy reading books?', 'What kind of books were popular when you were a child?', "Yes, I do. I usually read for about half an hour before bed because it helps me relax. When I was a child, comic books and fairy tales were really popular, and I remember exchanging them with my classmates."],
    part2: ['A book you enjoyed', ['Describe a book that you enjoyed reading.', 'You should say:', 'what the book was about', 'when you read it', 'why you chose it', 'and explain why you enjoyed it.'], "I'd like to talk about a novel called The Alchemist, which I read during my first year at university. It tells the story of a young shepherd who travels from Spain to Egypt in search of treasure and learns a lot about himself on the way. I chose it because a close friend recommended it and said it had changed the way she thought about her future. I enjoyed it for two main reasons. First, the language is simple but beautiful, so I could read it in English without a dictionary. Second, its message is that we should listen to our hearts and not give up on our dreams, and that encouraged me at a time when I was unsure about my studies. I have read it twice since then."],
    part3: ['Reading habits', 'Do people read less today than in the past?', 'Will printed books disappear in the future?', "I think people actually read more words than ever, but mostly short messages and posts rather than whole books, because phones are so distracting. As for printed books, I doubt they will disappear completely. Electronic books are convenient, but many readers still love the feeling of paper, so both forms will probably exist side by side."],
  }),

  // =========================================================================== ĐỀ 2
  ieltsTest(2, {
    listening: [
      {
        title: 'Section 1 – Renting a flat',
        lines: [
          'M: Good morning, Castle Lettings. Mark speaking.',
          "W: Hi, I'm calling about the two-bedroom flat on Mill Road that I saw on your website.",
          "M: Yes, it's still available. The rent is six hundred and eighty pounds a month, and that includes water but not electricity.",
          'W: Is it furnished?',
          "M: Partly. There's a cooker and a fridge, but you'd need to bring your own bed and sofa.",
          'W: I see. Could I view it this week?',
          "M: I can show you on Friday at half past five. Could I take your name? ... Thank you, Ms. Grainger. That's G-R-A-I-N-G-E-R.",
        ],
        qs: [
          ['What is included in the rent?', 'Water', 'Electricity', 'Internet', '"that includes water but not electricity".'],
          ['What would the woman need to bring?', 'A bed and a sofa', 'A cooker and a fridge', 'A table and chairs', 'Căn hộ có bếp và tủ lạnh; phải tự mang giường và sofa.'],
        ],
        fill: [
          ['Monthly rent: £ ____', ['680', 'six hundred and eighty'], 'Sáu trăm tám mươi bảng mỗi tháng.'],
          ['Viewing day: ____', ['Friday'], 'Xem nhà vào thứ Sáu lúc 5 giờ rưỡi.'],
          ['Caller’s surname: ____', ['Grainger'], 'Đánh vần G-R-A-I-N-G-E-R.'],
        ],
      },
      {
        title: 'Section 2 – A new recycling scheme',
        lines: [
          'M: Good evening, and welcome to this meeting about the new recycling scheme, which begins on the first of May.',
          'M: Every household will receive three bins. The blue bin is for paper and cardboard, the brown bin is for food and garden waste, and the grey bin is for everything that cannot be recycled.',
          'M: Glass should not go in any of these bins. Please take bottles and jars to the collection points at supermarkets.',
          'M: The blue and brown bins will be emptied every week, but the grey bin only once every two weeks, to encourage people to recycle more.',
          'M: Last year our town recycled thirty-five percent of its waste. Our target is to reach fifty percent within two years.',
        ],
        qs: [
          ['What goes in the brown bin?', 'Food and garden waste', 'Paper and cardboard', 'Glass bottles', 'Thùng nâu: rác thực phẩm và rác vườn.'],
          ['What should residents do with glass?', 'Take it to supermarket collection points', 'Put it in the grey bin', 'Leave it beside the blue bin', '"take bottles and jars to the collection points at supermarkets".'],
          ['How often will the grey bin be emptied?', 'Every two weeks', 'Every week', 'Once a month', '"only once every two weeks".'],
        ],
        fill: [
          ['The scheme begins on the first of ____.', ['May'], 'Bắt đầu ngày 1 tháng Năm.'],
          ['The town’s target is to recycle ____ percent of its waste.', ['50', 'fifty'], 'Mục tiêu năm mươi phần trăm trong hai năm.'],
        ],
      },
    ],
    reading: {
      title: 'The Invention of Paper',
      text: 'Before paper existed, people wrote on whatever materials were available. The Egyptians pressed strips of the papyrus plant into sheets, while in other regions scribes used clay tablets, animal skins or strips of bamboo. All of these had drawbacks: clay was heavy, skins were expensive, and bamboo books took up an enormous amount of space.\n\nAccording to Chinese records, paper was first presented to the emperor in AD 105 by a court official named Cai Lun. He is said to have made it from tree bark, old rags and fishing nets, which were soaked, beaten into a pulp and then spread on a screen to dry. Archaeologists have since found fragments of paper that are older than this date, so Cai Lun probably improved an existing technique rather than inventing it. Nevertheless, the new material was light, cheap and easy to write on, and it spread quickly throughout China.\n\nFor several centuries the method remained unknown outside East Asia. It reached the Arab world in the eighth century, and the city of Baghdad soon had its own paper mills. From there the craft travelled slowly westwards, arriving in Spain in the twelfth century. European paper was made mainly from linen rags, which were sometimes in such short supply that laws were passed to control their sale.\n\nThe demand for paper increased dramatically after the printing press appeared in the fifteenth century. It was not until the 1840s, however, that manufacturers learned to make paper from wood pulp. This finally made paper cheap enough for newspapers and books to reach ordinary people.',
      qs: [
        ['T', 'Bamboo books required a great deal of storage space.', 'Đoạn 1: "took up an enormous amount of space".'],
        ['F', 'Archaeological evidence shows that nobody made paper before Cai Lun.', 'Đoạn 2: đã tìm thấy mảnh giấy có niên đại sớm hơn.'],
        ['NG', 'Cai Lun became very wealthy because of his work.', 'Bài không nói ông có giàu hay không.'],
        ['T', 'Paper-making was practised in Baghdad before it was practised in Spain.', 'Đoạn 3: Baghdad thế kỷ 8, Tây Ban Nha thế kỷ 12.'],
        ['Why were laws passed about linen rags in Europe?', 'There were not enough of them for paper-making.', 'They spread disease.', 'They were imported illegally.', 'They were too expensive to wash.', 'Đoạn 3: vải vụn khan hiếm ("in such short supply").'],
        ['What made paper cheap enough for ordinary people?', 'Producing it from wood pulp', 'The invention of the printing press', 'Importing it from China', 'Using recycled newspapers', 'Đoạn cuối: thập niên 1840, làm giấy từ bột gỗ.'],
      ],
      fill: [
        ['The Egyptians made writing sheets from the ____ plant.', ['papyrus'], 'Đoạn 1: "papyrus plant".'],
        ['Demand for paper rose sharply after the ____ press appeared.', ['printing'], 'Đoạn cuối: "printing press".'],
      ],
    },
    task1: [
      'Line graph: Visitors to three attractions',
      'The graph below shows the number of visitors (in thousands) to three tourist attractions in one city between 2005 and 2020. Summarise the information by selecting and reporting the main features, and make comparisons where relevant.',
      'Attraction | 2005 | 2010 | 2015 | 2020\nCastle | 400 | 450 | 520 | 600\nArt gallery | 300 | 280 | 350 | 480\nZoo | 500 | 420 | 380 | 300',
      'The line graph illustrates how many people visited a castle, an art gallery and a zoo in a particular city over a fifteen-year period from 2005 to 2020.\n\nOverall, the castle and the art gallery became more popular, while the zoo attracted fewer and fewer visitors. As a result, the zoo fell from first place to last.\n\nIn 2005, the zoo was the leading attraction with 500,000 visitors, compared with 400,000 for the castle and 300,000 for the gallery. Over the following years, however, the zoo declined steadily, falling to 420,000 in 2010 and finishing at only 300,000 in 2020.\n\nThe castle, by contrast, grew continuously throughout the period. Its figure rose from 400,000 to 450,000 in 2010, overtaking the zoo, and reached 600,000 by the end. The gallery dipped slightly to 280,000 in 2010 but then recovered strongly, climbing to 350,000 in 2015 and 480,000 in 2020.\n\nIn short, by 2020 the castle was clearly the most visited site, with twice as many visitors as the zoo, and the gallery had moved into second place.',
    ],
    task2: [
      'Discussion: Free public transport',
      'Some people think that public transport in cities should be free for everyone. Others believe that passengers should pay for the service they use. Discuss both views and give your own opinion.',
      'Many cities suffer from crowded roads and polluted air, and one proposed solution is to make buses and trains free of charge. While some people welcome this idea, others insist that passengers should continue to pay. This essay will consider both positions before giving my own view.\n\nSupporters of free public transport argue that it would persuade drivers to leave their cars at home. If a journey by bus costs nothing, fewer people will pay for petrol and parking, so traffic and emissions should decrease. Moreover, free travel helps the poorest residents, such as students and the elderly, to reach jobs, schools and hospitals. A few European cities that have removed fares report that their centres have become quieter and more pleasant.\n\nOn the other hand, opponents point out that nothing is truly free. The cost of drivers, fuel and maintenance must be covered by taxes, which means that people who never use buses would still pay for them. There is also a risk that overcrowded vehicles and reduced income would lower the quality of the service. In addition, some studies suggest that free transport mainly attracts people who used to walk or cycle rather than car owners.\n\nIn my opinion, a balanced approach is the most sensible. Fares should remain, but they should be low, and certain groups, including children, pensioners and people on low incomes, should travel free. The money collected from other passengers can then be invested in faster and more reliable services, which is what really convinces drivers to change their habits.\n\nIn conclusion, although free public transport has clear social and environmental attractions, I believe that affordable fares combined with targeted support are a fairer and more sustainable solution.',
    ],
    part1: ['Your home', 'Do you live in a house or an apartment?', 'What is your favourite room at home?', "I live in a small apartment on the fourth floor of an old building near the city centre. My favourite room is definitely the living room, because it gets a lot of sunlight in the morning and that's where my family sits together in the evening."],
    part2: ['A journey by public transport', ['Describe a journey you made by public transport.', 'You should say:', 'where you were going', 'what kind of transport you used', 'what happened during the journey', 'and explain how you felt about it.'], "I'd like to describe a train journey I took from Hanoi to Hue two years ago. I was going there with two friends to spend a few days sightseeing, and we decided to take the night train because it was cheaper than flying. The journey lasted about thirteen hours. We shared a small cabin with an elderly man who told us stories about his youth and offered us fruit from his garden. In the morning I woke up early and watched the sun rise over the rice fields and the coast, which was absolutely beautiful. Although the bed was hard and I didn't sleep much, I felt really happy, because the journey itself became one of the best memories of the whole trip."],
    part3: ['Transport in cities', 'Why do many people prefer cars to public transport?', 'How could cities encourage people to cycle more?', "I think the main reasons are comfort and freedom. In a car you can leave whenever you like and you don't have to stand in a crowd. To encourage cycling, cities need safe lanes that are separated from traffic, and secure places to park bikes. Cheap rental schemes would also help people try cycling without buying a bike."],
  }),

  // =========================================================================== ĐỀ 3
  ieltsTest(3, {
    listening: [
      {
        title: 'Section 1 – Enquiring about a language course',
        lines: [
          'W: Hello, Bridgeway Language School. Can I help you?',
          "M: Yes, please. I'd like some information about your evening Spanish courses.",
          'W: Of course. Our beginner course runs on Tuesdays and Thursdays from six thirty to eight. It lasts ten weeks.',
          'M: And how much does it cost?',
          "W: It's one hundred and ninety pounds, and that includes the course book. There's a maximum of fourteen students in each class.",
          'M: That sounds good. When does the next course start?',
          "W: On the ninth of September. You can register online, or come to our office in Dover Street. That's D-O-V-E-R.",
        ],
        qs: [
          ['On which days does the beginner course run?', 'Tuesdays and Thursdays', 'Mondays and Wednesdays', 'Tuesdays and Fridays', '"on Tuesdays and Thursdays from six thirty to eight".'],
          ['What is included in the price?', 'The course book', 'An exam fee', 'A dictionary', '"that includes the course book".'],
        ],
        fill: [
          ['Course fee: £ ____', ['190', 'one hundred and ninety'], 'Một trăm chín mươi bảng.'],
          ['Maximum class size: ____ students', ['14', 'fourteen'], 'Tối đa mười bốn học viên.'],
          ['The office is in ____ Street.', ['Dover'], 'Đánh vần D-O-V-E-R.'],
        ],
      },
      {
        title: 'Section 4 – Lecture on coral reefs',
        lines: [
          'W: In today’s lecture I want to look at coral reefs, which are sometimes called the rainforests of the sea.',
          'W: Although reefs cover less than one percent of the ocean floor, they provide a home for about a quarter of all marine species.',
          'W: Corals are actually animals. They live together with tiny plants called algae, which give the coral both its food and its colour.',
          'W: When the water becomes too warm, the coral pushes out the algae and turns white. This process is known as bleaching, and if it continues for several weeks, the coral dies.',
          'W: Reefs also matter to people. They protect coastlines from storms, and around five hundred million people depend on them for food or income.',
          'W: Scientists are now growing young corals in nurseries and planting them on damaged reefs, with encouraging results.',
        ],
        qs: [
          ['What do algae provide for the coral?', 'Food and colour', 'Protection from storms', 'A hard skeleton', '"give the coral both its food and its colour".'],
          ['What causes coral bleaching?', 'Water that is too warm', 'Too much sunlight', 'Pollution from ships', '"When the water becomes too warm ... turns white".'],
          ['What are scientists doing to help reefs?', 'Growing young corals and planting them', 'Cooling the sea water', 'Removing fish from the reefs', 'Nuôi san hô non trong vườn ươm rồi trồng lại.'],
        ],
        fill: [
          ['Reefs are home to about a ____ of all marine species.', ['quarter'], '"about a quarter of all marine species".'],
          ['About ____ million people depend on reefs.', ['500', 'five hundred'], 'Khoảng năm trăm triệu người.'],
        ],
      },
    ],
    reading: {
      title: 'Why We Forget',
      text: 'Most people regard forgetting as a failure of the mind, yet psychologists increasingly see it as a necessary part of how memory works. The first scientist to measure forgetting was the German psychologist Hermann Ebbinghaus. In the 1880s he memorised lists of meaningless syllables and tested himself at intervals. His results produced the famous "forgetting curve": memory falls very quickly at first, so that more than half of the material is lost within an hour, and then declines much more slowly.\n\nEbbinghaus also discovered how to fight this loss. Each time he reviewed a list, he forgot it more slowly than before. This finding lies behind the modern technique of spaced repetition, in which learners return to material after gradually increasing intervals instead of studying it all at once.\n\nWhy does forgetting happen? One explanation is interference: new information competes with old information that is similar to it, which is why people who change their telephone number often mix up the old one with the new. Another view is that memories are not lost at all but simply cannot be found without the right cue. A particular song or smell can suddenly bring back an event that seemed to have vanished.\n\nResearchers now argue that forgetting is useful. A brain that kept every detail would be slow and confused, unable to separate what matters from what does not. A small number of people do remember almost every day of their lives, and many of them describe this ability as exhausting rather than as a gift. By clearing away unimportant details, forgetting allows us to form general ideas and to adapt to a changing world.',
      qs: [
        ['T', 'Ebbinghaus used himself as the subject of his experiments.', 'Đoạn 1: ông tự học thuộc và tự kiểm tra ("tested himself").'],
        ['F', 'According to the forgetting curve, memory is lost at a steady rate.', 'Giảm rất nhanh lúc đầu rồi chậm dần – không đều.'],
        ['NG', 'Ebbinghaus used spaced repetition to learn foreign languages.', 'Bài không nói ông học ngoại ngữ bằng cách này.'],
        ['T', 'A smell may help a person recall a forgotten event.', 'Đoạn 3: "A particular song or smell can suddenly bring back an event".'],
        ['What does the example of the telephone number illustrate?', 'Interference between similar memories', 'The effect of age on memory', 'The usefulness of cues', 'The speed of the forgetting curve', 'Đoạn 3: ví dụ minh họa cho "interference".'],
        ['How do people with almost perfect memories often feel about it?', 'They find it tiring.', 'They are proud of it.', 'They want to teach it to others.', 'They do not notice it.', 'Đoạn cuối: "exhausting rather than as a gift".'],
      ],
      fill: [
        ['Ebbinghaus memorised lists of meaningless ____.', ['syllables'], 'Đoạn 1: "meaningless syllables".'],
        ['Reviewing at increasing intervals is called spaced ____.', ['repetition'], 'Đoạn 2: "spaced repetition".'],
      ],
    },
    task1: [
      'Table: University students by subject',
      'The table below shows the percentage of male and female students studying five subjects at one university in 2022. Summarise the information by selecting and reporting the main features, and make comparisons where relevant.',
      'Subject | Male | Female\nEngineering | 78% | 22%\nMedicine | 42% | 58%\nBusiness | 51% | 49%\nLanguages | 27% | 73%\nComputer science | 70% | 30%',
      'The table gives information about the proportions of men and women enrolled in five different subjects at a university in 2022.\n\nOverall, there were clear differences between the sexes in most fields. Men dominated the technical subjects, while women formed the majority in languages and medicine. Business was the only subject with an almost equal balance.\n\nEngineering had the highest share of male students, at 78%, which means that fewer than a quarter of the students were women. A similar pattern can be seen in computer science, where 70% of students were male and only 30% were female.\n\nBy contrast, languages attracted far more women than men. Nearly three quarters of language students (73%) were female, compared with just 27% who were male. Women also outnumbered men in medicine, although the gap was smaller, with figures of 58% and 42% respectively.\n\nFinally, business was divided almost evenly, with men accounting for 51% of students and women for 49%. This subject therefore showed the smallest difference of all five.',
    ],
    task2: [
      'Problem and solution: Stress among students',
      'In many countries, an increasing number of young people suffer from stress and anxiety during their studies. What are the causes of this problem, and what can be done to solve it?',
      'In recent years, teachers and doctors have reported that more and more students feel anxious and exhausted. This essay will discuss the main reasons for this worrying trend and suggest some measures that schools, families and students themselves could take.\n\nPerhaps the most important cause is academic pressure. In many education systems a single examination decides whether a young person can enter a good university, so students study late into the night and attend extra classes at weekends. Parents, who naturally want their children to succeed, sometimes increase this pressure by comparing them with others. A second cause is technology. Teenagers spend hours on social media, where everyone else appears to be more successful and attractive, and this constant comparison damages their confidence. Using phones late at night also reduces sleep, which makes anxiety worse.\n\nFortunately, a number of solutions are available. Schools could reduce the importance of final examinations by giving marks for projects and classwork throughout the year. They should also employ trained counsellors, so that students have someone to talk to before a small worry becomes a serious illness. At home, parents can help by praising effort rather than results and by making sure that their children have time for sport and hobbies. Finally, students need to learn practical skills such as planning their time, taking regular breaks and switching off their phones an hour before bed.\n\nIn conclusion, student stress is mainly the result of examination pressure and the unhealthy use of technology. However, if schools change the way they assess learners and families encourage a more balanced lifestyle, I believe the problem can be significantly reduced.',
    ],
    part1: ['Studying', 'What subject do you find most interesting?', 'Do you prefer to study in the morning or in the evening?', "I find history the most interesting, because it explains why the world is the way it is today. I definitely prefer studying in the morning. My mind is fresh then, whereas in the evening I get tired and distracted quite easily."],
    part2: ['A skill you learned', ['Describe a skill that took you a long time to learn.', 'You should say:', 'what the skill is', 'when you started learning it', 'how you learned it', 'and explain why it took a long time.'], "I'm going to talk about learning to swim, which took me much longer than I expected. I started when I was about fifteen, which is quite late, because there was no pool near my home when I was small. My uncle offered to teach me during the summer holidays, and we went to the local pool three times a week. At first I was terrified of putting my head under the water, so for the first month I only practised breathing and floating. It took a long time mainly because of that fear, and also because I could only practise in the summer. After two summers I could finally swim fifty metres without stopping. I felt incredibly proud, and now swimming is my favourite way to keep fit."],
    part3: ['Learning and memory', 'Is it easier for children or adults to learn new skills?', 'How has technology changed the way people learn?', "In general, children learn physical skills and languages more easily because they are not afraid of making mistakes. Adults, however, are often more motivated and better organised. Technology has made learning much more flexible. People can now watch a lesson online at any time and repeat it as often as they need, although it does require more self-discipline."],
  }),

  // =========================================================================== ĐỀ 4
  ieltsTest(4, {
    listening: [
      {
        title: 'Section 1 – Applying for a part-time job',
        lines: [
          'M: Good morning, The Corner Bakery.',
          "W: Good morning. I'm phoning about the part-time job you advertised in the window.",
          "M: Oh yes. We're looking for someone to serve customers on Saturdays and Sundays, from seven in the morning until one.",
          "W: That would suit me. I'm a student, so I'm free at weekends. What is the pay?",
          'M: Eleven pounds an hour, and you can take home any bread that is left at the end of the day.',
          'W: Lovely. Do I need experience?',
          "M: Not really, but you must be good with people. Could you come for an interview on Wednesday at four o'clock? Ask for the manager, Mrs. Pollard. That's P-O-L-L-A-R-D.",
        ],
        qs: [
          ['When would the woman work?', 'At weekends', 'On weekday evenings', 'On Wednesday afternoons', '"on Saturdays and Sundays".'],
          ['What extra benefit do staff receive?', 'Unsold bread', 'Free transport', 'A uniform', '"you can take home any bread that is left".'],
        ],
        fill: [
          ['Pay: £ ____ an hour', ['11', 'eleven'], 'Mười một bảng một giờ.'],
          ['Interview day: ____', ['Wednesday'], 'Phỏng vấn vào thứ Tư lúc bốn giờ.'],
          ['Manager’s name: Mrs. ____', ['Pollard'], 'Đánh vần P-O-L-L-A-R-D.'],
        ],
      },
      {
        title: 'Section 2 – Visiting Greenfell National Park',
        lines: [
          'M: Welcome to Greenfell National Park. Before you set off, let me give you some practical information.',
          'M: The park has three marked trails. The red trail is the shortest and takes about forty minutes. The yellow trail goes around the lake, and the blue trail climbs to the top of Eagle Hill.',
          'M: The blue trail is steep and rocky, so it is not suitable for young children.',
          'M: Please do not feed the deer. Human food makes them ill, and it also teaches them to come too close to the road.',
          'M: The visitor centre closes at five thirty, and the car park gates are locked at seven, so make sure you are back before then.',
          'M: Finally, maps cost two pounds, and the money goes towards repairing the paths.',
        ],
        qs: [
          ['Which trail goes around the lake?', 'The yellow trail', 'The red trail', 'The blue trail', '"The yellow trail goes around the lake".'],
          ['Why should visitors not feed the deer?', 'It makes the animals ill.', 'The deer may attack people.', 'It is expensive for the park.', '"Human food makes them ill".'],
          ['What is the money from maps used for?', 'Repairing the paths', 'Feeding the animals', 'Paying the guides', '"the money goes towards repairing the paths".'],
        ],
        fill: [
          ['The red trail takes about ____ minutes.', ['40', 'forty'], 'Đường đỏ mất khoảng bốn mươi phút.'],
          ['The car park gates are locked at ____ o’clock.', ['7', 'seven'], 'Cổng bãi xe khóa lúc bảy giờ.'],
        ],
      },
    ],
    reading: {
      title: 'Forests in the Sky',
      text: 'In 2014 two unusual apartment towers were completed in the Italian city of Milan. Known as the Bosco Verticale, or "Vertical Forest", they carry around nine hundred trees and many thousands of smaller plants on their balconies. The architect, Stefano Boeri, wanted to show that a city could become denser and greener at the same time.\n\nThe idea is attractive. Leaves absorb carbon dioxide and trap dust from traffic, and plants shade the apartments in summer, reducing the need for air conditioning. Residents report that the greenery softens noise from the street, and biologists have recorded more than twenty species of birds nesting on the towers.\n\nNevertheless, building a forest in the sky is far from simple. The trees and the wet soil they stand in are extremely heavy, so the balconies had to be strengthened with additional steel and concrete. Before construction began, engineers tested young trees in a wind tunnel to make sure they would not be blown down at a height of a hundred metres. The plants are not looked after by the residents themselves; instead, a team of gardeners climbs down the outside of the buildings on ropes several times a year.\n\nThese requirements make such buildings expensive, and critics argue that the concrete used to support the trees produces more carbon than the plants will absorb for many years. They suggest that planting ordinary trees in streets and parks would bring greater benefits at a much lower cost. Supporters reply that land for new parks is scarce in crowded cities. Similar towers have since been planned in China, the Netherlands and Egypt.',
      qs: [
        ['T', 'The Vertical Forest consists of two residential buildings.', 'Đoạn 1: "two unusual apartment towers".'],
        ['F', 'Residents are responsible for looking after the trees on their balconies.', 'Đoạn 3: đội làm vườn chăm sóc, không phải cư dân.'],
        ['NG', 'Apartments in the towers cost more than others in Milan.', 'Bài nói tòa nhà đắt để xây, không so sánh giá căn hộ với nơi khác.'],
        ['T', 'Tests were carried out on trees before the towers were built.', 'Đoạn 3: thử cây non trong hầm gió.'],
        ['What do critics say about the concrete in the buildings?', 'Producing it releases more carbon than the plants absorb for years.', 'It is not strong enough to hold the trees.', 'It prevents birds from nesting.', 'It makes the apartments too hot.', 'Đoạn cuối: bê tông tạo ra nhiều carbon hơn lượng cây hấp thụ trong nhiều năm.'],
        ['What argument do supporters give?', 'Cities have little land available for new parks.', 'Street trees do not absorb carbon.', 'Vertical forests are cheap to build.', 'Residents prefer balconies to parks.', '"land for new parks is scarce in crowded cities".'],
      ],
      fill: [
        ['Plants on the towers reduce the need for air ____.', ['conditioning'], 'Đoạn 2: "air conditioning".'],
        ['Gardeners climb down the outside of the buildings on ____.', ['ropes'], 'Đoạn 3: "on ropes".'],
      ],
    },
    task1: [
      'Pie charts: Sources of electricity',
      'The charts below show the sources of electricity in one country in 2000 and 2020. Summarise the information by selecting and reporting the main features, and make comparisons where relevant.',
      'Source | 2000 | 2020\nCoal | 50% | 22%\nNatural gas | 25% | 30%\nNuclear | 15% | 12%\nWind and solar | 2% | 28%\nHydro | 8% | 8%',
      'The two pie charts compare the proportions of electricity generated from five different sources in a particular country in the years 2000 and 2020.\n\nOverall, the country became far less dependent on coal, while wind and solar power grew from almost nothing to become one of the main sources. The remaining three sources changed relatively little.\n\nIn 2000, coal was by far the most important fuel, producing exactly half of all electricity. Natural gas came second with a quarter, followed by nuclear power at 15%. Hydroelectric power supplied 8%, and wind and solar together contributed only 2%.\n\nTwenty years later the picture was very different. The share of coal had more than halved, falling to 22%, whereas wind and solar had risen dramatically to 28%. Natural gas had increased slightly to 30%, which made it the largest single source. Nuclear power had declined a little, to 12%, and the figure for hydro was unchanged at 8%.\n\nIn summary, renewable energy largely replaced coal over the period, and gas overtook coal as the leading source of electricity.',
    ],
    task2: [
      'Advantages and disadvantages: Living in big cities',
      'More and more people are moving from the countryside to live in large cities. Do the advantages of this development outweigh the disadvantages?',
      'Across the world, villages are becoming emptier while cities grow larger every year. In my view, although this movement creates some serious problems, its advantages are greater, provided that governments plan carefully.\n\nThe main benefit of living in a city is economic opportunity. Factories, offices and shops are concentrated in urban areas, so people who move there can usually find better-paid work than farming offers. In addition, cities provide services that small villages cannot support. Large hospitals, universities and public libraries all need a big population in order to operate. For young people in particular, a city offers a far wider choice of careers and education, as well as theatres, sports clubs and other forms of entertainment.\n\nOn the other hand, rapid urban growth has obvious drawbacks. When thousands of people arrive every month, housing becomes expensive and many newcomers end up in overcrowded apartments far from their workplaces. Traffic jams and air pollution damage both health and quality of life. Meanwhile, the countryside loses its young workers, leaving elderly people behind and causing farms and local schools to close.\n\nNevertheless, I believe these difficulties can be managed. Investment in affordable housing and efficient public transport can reduce overcrowding and pollution, as cities such as Singapore have demonstrated. Furthermore, people who earn more in the city often send money back to relatives in their home villages, which supports the rural economy.\n\nIn conclusion, moving to cities gives people access to jobs, education and services that they could not otherwise enjoy. Despite the pressure this places on housing and the environment, I am convinced that the advantages outweigh the disadvantages when urban growth is well planned.',
    ],
    part1: ['Parks and nature', 'Are there many parks where you live?', 'What do you like to do when you are outdoors?', "There are a few small parks in my neighbourhood, but only one big one, which is about ten minutes away by bike. When I'm outdoors I love walking and taking photos of trees and flowers, because it helps me forget about work for a while."],
    part2: ['A building you like', ['Describe an interesting building you have visited.', 'You should say:', 'where it is', 'what it looks like', 'what it is used for', 'and explain why you find it interesting.'], "I'd like to describe the Opera House in Hanoi, which I visited last year. It stands at the end of a wide street in the old French quarter. It's a large yellow building with white columns, tall windows and a grey roof, and it looks rather like a small palace. It was built over a hundred years ago and is still used for concerts, ballet and other performances. I went there to see a classical concert with my sister. I find it interesting because it's so different from the modern glass towers around it. When you walk inside and see the red seats and the golden lights, you feel as if you have travelled back in time. It also reminds me how many different cultures have shaped my country."],
    part3: ['Cities and buildings', 'Should old buildings be protected or replaced?', 'What will cities look like in the future?', "I believe historic buildings should be protected whenever possible, because they give a city its character and attract tourists. Of course, some unsafe ones have to be replaced. In the future, I imagine cities will be taller and greener, with gardens on roofs, fewer private cars and much more space for pedestrians."],
  }),
];
