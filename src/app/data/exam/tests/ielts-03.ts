/** Bộ đề IELTS cố định – đề 9 đến 12 (định dạng rút gọn, xem helpers.ts) */
import { IeltsTest, ieltsTest } from './helpers';

export const TESTS: IeltsTest[] = [
  // =========================================================================== ĐỀ 9
  ieltsTest(9, {
    listening: [
      {
        title: 'Section 1 – Joining a fitness centre',
        lines: [
          'M: Good evening, Lakeside Fitness Centre.',
          "W: Hi, I'm thinking of joining. Could you tell me about your membership options?",
          "M: Sure. Full membership is fifty-four pounds a month. There's also an off-peak membership for thirty-eight pounds, which lets you come before four in the afternoon on weekdays.",
          'W: The off-peak one would suit me. Is the swimming pool included?',
          'M: Yes, and so is the sauna. Classes like yoga are extra, though, at five pounds each.',
          'W: OK. Do I need to do anything before I start?',
          'M: Every new member has a health check with one of our trainers. I can book you in for Tuesday at eleven. Your name, please? ... Miss Aldridge, A-L-D-R-I-D-G-E.',
        ],
        qs: [
          ['Which membership does the woman choose?', 'Off-peak membership', 'Full membership', 'Weekend membership', '"The off-peak one would suit me".'],
          ['What is NOT included in the membership?', 'Yoga classes', 'The swimming pool', 'The sauna', 'Hồ bơi và xông hơi được bao gồm; lớp học tính thêm phí.'],
        ],
        fill: [
          ['Off-peak membership: £ ____ a month', ['38', 'thirty-eight', 'thirty eight'], 'Ba mươi tám bảng mỗi tháng.'],
          ['Health check: ____ at eleven', ['Tuesday'], 'Kiểm tra sức khỏe thứ Ba lúc mười một giờ.'],
          ['New member’s surname: ____', ['Aldridge'], 'Đánh vần A-L-D-R-I-D-G-E.'],
        ],
      },
      {
        title: 'Section 2 – The Marlow summer festival',
        lines: [
          'W: And now for some local news. The Marlow Summer Festival returns next weekend, and this year it will be bigger than ever.',
          'W: The festival opens on Friday evening with a concert by the town orchestra in Victoria Park. Entry to the concert is free, but you are advised to bring your own chairs.',
          'W: On Saturday there will be a food market along the High Street, with more than sixty stalls selling dishes from around the world.',
          'W: Because the High Street will be closed to traffic all day, drivers should use the car park behind the sports centre. A free shuttle bus will run from there every ten minutes.',
          'W: The festival ends on Sunday night with fireworks over the river, starting at nine thirty.',
        ],
        qs: [
          ['What should people bring to the concert?', 'Their own chairs', 'Their tickets', 'Food and drink', '"you are advised to bring your own chairs".'],
          ['Where should drivers park on Saturday?', 'Behind the sports centre', 'On the High Street', 'In Victoria Park', '"use the car park behind the sports centre".'],
          ['How does the festival end?', 'With fireworks over the river', 'With a concert in the park', 'With a food market', '"ends on Sunday night with fireworks over the river".'],
        ],
        fill: [
          ['The food market will have more than ____ stalls.', ['60', 'sixty'], 'Hơn sáu mươi gian hàng.'],
          ['The shuttle bus runs every ____ minutes.', ['10', 'ten'], 'Xe buýt đưa đón chạy mỗi mười phút.'],
        ],
      },
    ],
    reading: {
      title: 'The Silk Road',
      text: 'The Silk Road was never a single road. It was a network of trade routes, stretching for more than six thousand kilometres, that linked China with Central Asia, Persia and the Mediterranean. The name itself is modern: it was invented in 1877 by a German geographer, Ferdinand von Richthofen, long after the routes had fallen out of use.\n\nTrade along these routes began to flourish in the second century BC, when the Chinese emperor sent an official named Zhang Qian westwards to seek allies. He returned with reports of rich kingdoms and powerful horses, and merchants soon followed. Chinese silk was the most famous product carried west. The Romans paid enormous prices for it, though they had no idea how it was made; some believed that it grew on trees. In the opposite direction came glass, gold, wool and grapes.\n\nVery few merchants travelled the whole distance. Goods were passed from one trader to another in oasis cities such as Samarkand and Kashgar, and each exchange added to the price. Camels, which can carry heavy loads and survive for days without water, made the desert crossings possible.\n\nThe routes carried far more than goods. Buddhism travelled from India to China along them, and later Islam spread eastwards in the same way. Technologies such as paper-making moved west, and so, unfortunately, did diseases; many historians believe that the plague of the fourteenth century reached Europe by this path.\n\nThe overland trade declined in the fifteenth century, when improved ships made sea routes faster and cheaper. Today several governments are investing in new railways across Central Asia, hoping to revive the ancient connection.',
      qs: [
        ['F', 'The term "Silk Road" was used by ancient Chinese merchants.', 'Đoạn 1: tên gọi do nhà địa lý Đức đặt năm 1877.'],
        ['T', 'The Romans did not understand how silk was produced.', 'Đoạn 2: "they had no idea how it was made".'],
        ['NG', 'Zhang Qian was the first Chinese person to reach Rome.', 'Bài không nói ông tới Rome.'],
        ['F', 'Most merchants completed the entire journey from China to the Mediterranean.', 'Đoạn 3: "Very few merchants travelled the whole distance".'],
        ['Why did prices rise as goods moved along the routes?', 'They were sold from one trader to the next many times.', 'Camels were expensive to feed.', 'The emperor taxed each oasis.', 'Silk became damaged in the desert.', 'Đoạn 3: mỗi lần trao đổi lại cộng thêm vào giá.'],
        ['What caused the overland trade to decline?', 'Sea transport became faster and cheaper.', 'The desert cities ran out of water.', 'Silk went out of fashion.', 'The plague closed the routes permanently.', 'Đoạn cuối: tàu thuyền cải tiến khiến đường biển nhanh và rẻ hơn.'],
      ],
      fill: [
        ['Goods were exchanged in ____ cities such as Samarkand.', ['oasis'], 'Đoạn 3: "oasis cities".'],
        ['The religion of ____ travelled from India to China along the routes.', ['Buddhism'], 'Đoạn 4: Phật giáo truyền từ Ấn Độ sang Trung Quốc.'],
      ],
    },
    task1: [
      'Table: International students',
      'The table below shows the number of international students (in thousands) at universities in four countries in 2010 and 2020. Summarise the information by selecting and reporting the main features, and make comparisons where relevant.',
      'Country | 2010 | 2020 | Change\nCountry A | 680 | 950 | +40%\nCountry B | 390 | 550 | +41%\nCountry C | 270 | 460 | +70%\nCountry D | 130 | 120 | -8%',
      'The table compares the numbers of overseas students attending universities in four countries in 2010 and 2020, together with the percentage change over the decade.\n\nOverall, three of the four countries attracted considerably more international students in 2020 than in 2010, while Country D experienced a small decline. Country A remained the most popular destination in both years, but Country C grew at the fastest rate.\n\nIn 2010, Country A hosted 680,000 foreign students, far more than Country B with 390,000 and Country C with 270,000. Ten years later, the figure for Country A had climbed to 950,000, an increase of 40%. Country B rose by a very similar proportion, 41%, to reach 550,000.\n\nThe most rapid expansion took place in Country C, where the number of international students went up by 70%, from 270,000 to 460,000. This narrowed the gap between Country C and Country B.\n\nCountry D was the only exception to the upward trend. It had the fewest overseas students in 2010, at 130,000, and this number fell by 8% to 120,000 in 2020.',
    ],
    task2: [
      'Discussion: Are zoos necessary?',
      'Some people think that zoos are cruel and should be closed. Others believe that zoos are useful for protecting rare animals and educating the public. Discuss both views and give your own opinion.',
      'Zoos have existed for centuries, but attitudes towards them have changed considerably. Many people now question whether it is acceptable to keep wild animals in captivity, while others defend zoos as centres of conservation and learning. This essay will examine both points of view.\n\nCritics of zoos argue that animals suffer when they are removed from their natural environment. Large species such as elephants and polar bears normally travel long distances every day, yet in a zoo they are confined to a small enclosure. As a result, they often show signs of stress, such as walking in circles for hours. Opponents also claim that seeing an animal behind bars teaches children very little, since excellent wildlife documentaries are now available to everyone.\n\nOn the other hand, supporters point out that modern zoos play an important part in saving endangered species. Breeding programmes have rescued animals such as the Arabian oryx and the giant panda from extinction, and some of these animals have been returned to the wild. Zoos also fund research and protection projects in the animals’ native countries. In addition, standing a few metres from a living tiger makes a far deeper impression on a child than any film, and may inspire a lifelong interest in nature.\n\nIn my opinion, zoos should not be closed, but they must change. Small zoos that keep animals in poor conditions purely for entertainment have no place in the modern world. However, well-managed zoos with spacious enclosures and serious conservation programmes are valuable, particularly now that so many natural habitats are disappearing.\n\nIn conclusion, although the criticisms of zoos are understandable, I believe that responsible zoos do more good than harm and deserve our support.',
    ],
    part1: ['Animals', 'Do you like animals?', 'Have you ever had a pet?', "Yes, I'm very fond of animals, especially dogs, because they're so loyal and friendly. I had a small brown dog when I was a child. He used to wait for me at the gate every afternoon, and I was heartbroken when he died."],
    part2: ['A wild animal', ['Describe a wild animal that you find interesting.', 'You should say:', 'what animal it is', 'where it lives', 'what it looks like', 'and explain why you find it interesting.'], "The animal I'd like to describe is the elephant. Elephants live in parts of Africa and Asia, including the forests in the central highlands of my own country. They are the largest land animals, with grey wrinkled skin, huge ears and, of course, a long trunk that they use for breathing, drinking and picking things up. I find them fascinating for several reasons. First, they are extremely intelligent and have excellent memories, so they can remember the location of water for years. Second, they live in close family groups led by the oldest female, and they look after each other's babies. I once watched a documentary in which a whole herd stopped to help a young elephant out of a muddy hole, and I was really moved. Sadly, they are endangered, which makes them even more precious."],
    part3: ['Animals and people', 'Why do some people keep pets?', 'What can be done to protect endangered animals?', "People keep pets mainly for company. A pet can reduce loneliness and stress, and for children it's a good way to learn responsibility. To protect endangered animals, I think the most important step is to preserve their habitats by creating national parks. Stricter laws against illegal hunting and better education would also make a difference."],
  }),

  // =========================================================================== ĐỀ 10
  ieltsTest(10, {
    listening: [
      {
        title: 'Section 1 – Booking a campsite',
        lines: [
          'W: Pinewood Campsite, good afternoon.',
          "M: Hello, I'd like to book a pitch for a tent in July, please.",
          'W: Which dates are you interested in?',
          'M: From the fourteenth to the eighteenth, so four nights. There will be two adults and two children.',
          "W: Right. A family pitch is twenty-three pounds per night. If you'd like electricity, that's four pounds extra each night.",
          "M: We won't need electricity. Are dogs allowed?",
          'W: Yes, but they must be kept on a lead. The reception closes at eight in the evening, so please arrive before then. May I take your name? ... Mr. Dunmore, D-U-N-M-O-R-E.',
        ],
        qs: [
          ['How many nights will the family stay?', 'Four nights', 'Two nights', 'A week', 'Từ ngày 14 đến ngày 18: bốn đêm.'],
          ['What is the rule about dogs?', 'They must be kept on a lead.', 'They are not allowed.', 'They cost extra.', '"they must be kept on a lead".'],
        ],
        fill: [
          ['Family pitch: £ ____ per night', ['23', 'twenty-three', 'twenty three'], 'Hai mươi ba bảng mỗi đêm.'],
          ['Reception closes at ____ in the evening.', ['8', 'eight'], 'Lễ tân đóng cửa lúc tám giờ tối.'],
          ['Customer’s surname: ____', ['Dunmore'], 'Đánh vần D-U-N-M-O-R-E.'],
        ],
      },
      {
        title: 'Section 4 – Lecture on bamboo',
        lines: [
          'M: In this lecture we will look at bamboo, a plant that many engineers now describe as a building material of the future.',
          'M: Bamboo is not a tree. It is a type of grass, and some species grow almost a metre in a single day, faster than any other plant on Earth.',
          'M: It can be harvested after only four years, whereas most trees need at least thirty years. And because the roots stay alive, it grows again without being replanted.',
          'M: In terms of strength, bamboo compares well with steel when it is pulled, yet it is much lighter. That is why it has been used for scaffolding in Asia for centuries.',
          'M: Its main disadvantage is that untreated bamboo is quickly attacked by insects and damp. It must be treated carefully if a building is to last.',
          'M: Architects in Colombia and Indonesia have recently used it to build bridges and even schools.',
        ],
        qs: [
          ['What kind of plant is bamboo?', 'A grass', 'A tree', 'A fern', '"It is a type of grass".'],
          ['Why does bamboo not need replanting?', 'Its roots stay alive after harvesting.', 'Its seeds spread in the wind.', 'Farmers plant it every four years.', '"because the roots stay alive, it grows again".'],
          ['What is the main disadvantage of bamboo?', 'Insects and damp damage it if it is untreated.', 'It is heavier than steel.', 'It grows too slowly.', '"untreated bamboo is quickly attacked by insects and damp".'],
        ],
        fill: [
          ['Bamboo can be harvested after only ____ years.', ['4', 'four'], 'Thu hoạch chỉ sau bốn năm.'],
          ['In Asia it has long been used for ____.', ['scaffolding'], 'Dùng làm giàn giáo ("scaffolding").'],
        ],
      },
    ],
    reading: {
      title: 'The Science of Laughter',
      text: 'Laughter seems simple, but scientists have only recently begun to study it seriously. One of the first to do so was the American psychologist Robert Provine, who sent his students into shopping centres and student cafes to record what people said just before they laughed. The results surprised him. Fewer than twenty percent of laughs followed anything resembling a joke. Most came after ordinary remarks such as "See you later" or "It was nice meeting you".\n\nProvine concluded that laughter is mainly a social signal rather than a reaction to humour. People are about thirty times more likely to laugh when they are with others than when they are alone. He also noticed that speakers laugh more than their listeners, and that laughter almost never interrupts a sentence; it comes at the pauses, like punctuation.\n\nLaughter is not unique to humans. Young chimpanzees make a panting sound when they are tickled or chased, and researchers have even detected high-pitched calls from rats during play. This suggests that laughter began millions of years ago as a signal that rough play was friendly and not a real attack.\n\nIs laughter good for us? It is often claimed to be "the best medicine", but the evidence is mixed. Laughing with friends does raise the amount of pain that people can tolerate, probably because it releases natural chemicals called endorphins. However, claims that it strengthens the immune system have not been clearly proved.\n\nWhat is certain is that laughter is contagious. Television producers have long added recorded laughter to comedy programmes because audiences at home laugh more when they hear others doing so.',
      qs: [
        ['F', 'Provine found that most laughter followed jokes.', 'Đoạn 1: chưa tới 20% tiếng cười đến sau câu đùa.'],
        ['T', 'People laugh much more often in company than alone.', 'Đoạn 2: nhiều hơn khoảng ba mươi lần.'],
        ['T', 'According to Provine, listeners laugh less than speakers.', 'Đoạn 2: "speakers laugh more than their listeners".'],
        ['NG', 'Rats laugh more frequently than chimpanzees.', 'Bài không so sánh tần suất giữa hai loài.'],
        ['What does the passage say about laughter and the immune system?', 'The benefit has not been clearly demonstrated.', 'Laughter definitely weakens it.', 'Laughter has no effect on pain.', 'Doctors now prescribe laughter.', 'Đoạn 4: "have not been clearly proved".'],
        ['Why is recorded laughter added to comedy programmes?', 'People laugh more when they hear others laughing.', 'It hides mistakes by the actors.', 'It makes programmes cheaper to produce.', 'Viewers cannot understand the jokes without it.', 'Đoạn cuối: tiếng cười có tính lây lan.'],
      ],
      fill: [
        ['Provine concluded that laughter is mainly a ____ signal.', ['social'], 'Đoạn 2: "a social signal".'],
        ['Laughing releases natural chemicals called ____.', ['endorphins'], 'Đoạn 4: "endorphins".'],
      ],
    },
    task1: [
      'Bar chart: Reasons for travelling abroad',
      'The chart below shows the main reasons why residents of one country travelled abroad in 2010 and 2020 (millions of trips). Summarise the information by selecting and reporting the main features, and make comparisons where relevant.',
      'Reason | 2010 | 2020\nHoliday | 22 | 35\nBusiness | 9 | 7\nVisiting friends and relatives | 8 | 14\nStudy | 2 | 4',
      'The bar chart gives information about the purposes of overseas trips made by people from a particular country in 2010 and 2020, measured in millions of journeys.\n\nOverall, the total number of trips increased substantially over the decade. Holidays were by far the most common reason for travelling in both years, and all categories grew except business travel, which declined.\n\nIn 2010, residents made 22 million trips abroad for a holiday, more than twice the number of business trips, which stood at 9 million. Visits to friends and relatives accounted for 8 million trips, while only 2 million journeys were made for the purpose of study.\n\nBy 2020, holiday travel had risen sharply to 35 million trips. Visiting friends and relatives also became considerably more popular, climbing to 14 million and overtaking business as the second most important reason. Business travel, by contrast, fell slightly to 7 million. Although study remained the least common purpose, the number of such trips doubled to 4 million.\n\nIn summary, leisure and family travel expanded strongly, whereas travel for work became less significant.',
    ],
    task2: [
      'Opinion: Does tourism benefit local people?',
      'International tourism brings more problems than benefits to the places that tourists visit. To what extent do you agree or disagree?',
      'Tourism is now one of the largest industries in the world, and popular destinations receive millions of visitors every year. Some people claim that these visitors do more harm than good. While I recognise that tourism can create serious difficulties, I disagree that the problems outweigh the benefits.\n\nIt is true that mass tourism can damage a destination. Beaches and historic streets become overcrowded, rubbish piles up, and fragile natural areas such as coral reefs are harmed by too many boats and swimmers. Local residents may also suffer. In cities like Venice and Barcelona, apartments are rented to tourists rather than to families, so housing becomes unaffordable and traditional shops are replaced by souvenir stalls.\n\nNevertheless, the economic advantages are enormous. Tourism provides employment for hotel staff, drivers, guides, farmers and craftspeople, many of whom would otherwise have to leave their home regions to find work. In some small countries it is the main source of national income. The taxes paid by tourists and tourism companies help to finance roads, airports and hospitals that local people use as well.\n\nIn addition, tourism can actually protect culture and nature. Ancient temples and old town centres are expensive to maintain, and the money from entrance tickets often pays for their repair. Similarly, national parks in Africa survive largely because visitors are willing to pay to see wild animals, which gives communities a reason to protect them instead of hunting them.\n\nIn conclusion, the negative effects of tourism are real, but most of them result from poor management rather than from tourism itself. With sensible limits on visitor numbers and fair rules for businesses, I believe that the benefits clearly exceed the problems.',
    ],
    part1: ['Holidays', 'Where do you usually go on holiday?', 'Do you prefer active holidays or relaxing ones?', "I usually go to the coast with my family, because we all love the sea and fresh seafood. I prefer a mixture, really. I like to spend the mornings doing something active, such as hiking or cycling, and the afternoons simply resting."],
    part2: ['A place you would like to visit', ['Describe a place you would like to visit in the future.', 'You should say:', 'where it is', 'how you know about it', 'what you would do there', 'and explain why you would like to go there.'], "A place I've always wanted to visit is Kyoto in Japan. I first learned about it from a travel programme, and since then I've watched lots of videos about its temples and gardens. If I had the chance, I'd go in spring, when the cherry trees are in blossom. I would spend my days walking around the old streets, visiting the famous golden temple and trying traditional food like tofu and green tea sweets. I'd also love to stay in a traditional guesthouse and sleep on the floor. The main reason I want to go is that Kyoto seems to combine history and nature in a very peaceful way. My daily life is quite noisy and rushed, so I imagine a week there would feel like stepping into another, calmer world."],
    part3: ['Tourism', 'What problems can tourists cause in popular places?', 'How might tourism change in the future?', "The most obvious problems are overcrowding and litter, and prices often rise so much that local people can no longer afford to live in their own town. In the future, I expect more people will choose quieter, less famous destinations. Virtual reality might also allow people to explore places from home, although I doubt it will ever replace real travel."],
  }),

  // =========================================================================== ĐỀ 11
  ieltsTest(11, {
    listening: [
      {
        title: 'Section 1 – Enrolling in a cookery class',
        lines: [
          'W: Good morning, The Kitchen Studio.',
          "M: Hello. I saw your advert for cookery classes and I'd like to know more about the Italian course.",
          "W: Of course. It's a six-week course on Wednesday evenings, from seven to nine thirty. Each week you cook a complete meal and take it home.",
          'M: That sounds fun. How much is it?',
          'W: One hundred and forty-five pounds, and all the ingredients are included. You only need to bring an apron and a container for your food.',
          "M: Excellent. I should mention that I don't eat meat.",
          "W: That's no problem. We always offer a vegetarian option. Can I take your name? ... Mr. Sandford, S-A-N-D-F-O-R-D.",
        ],
        qs: [
          ['What do students do with the food they cook?', 'They take it home.', 'They eat it in class.', 'They sell it to customers.', '"you cook a complete meal and take it home".'],
          ['What does the man say about his diet?', 'He does not eat meat.', 'He is allergic to nuts.', 'He avoids Italian food.', '"I don\'t eat meat" – trường có lựa chọn món chay.'],
        ],
        fill: [
          ['Length of course: ____ weeks', ['6', 'six'], 'Khóa học sáu tuần.'],
          ['Course fee: £ ____', ['145', 'one hundred and forty-five', 'one hundred and forty five'], 'Một trăm bốn mươi lăm bảng, gồm nguyên liệu.'],
          ['Student’s surname: ____', ['Sandford'], 'Đánh vần S-A-N-D-F-O-R-D.'],
        ],
      },
      {
        title: 'Section 3 – A student and tutor discuss an essay',
        lines: [
          "M: Come in, Laura. I've read your essay on the causes of the Industrial Revolution.",
          'W: Thank you, Dr. Evans. I was worried it was too long.',
          'M: The length is fine. Your introduction is very clear, and I liked the section on coal. The main weakness is that you rely on only two sources.',
          "W: I see. I couldn't find many books in the library.",
          'M: Try the online journal database. You should refer to at least six sources. Also, your conclusion introduces a new idea about railways, which really belongs in the main body.',
          "W: OK, I'll move that. When do you need the final version?",
          'M: By the twentieth of November. And please check your references carefully, because several dates are missing.',
        ],
        qs: [
          ['What does the tutor praise?', 'The introduction', 'The conclusion', 'The references', '"Your introduction is very clear".'],
          ['What is the main weakness of the essay?', 'It uses too few sources.', 'It is too long.', 'It has no section on coal.', '"you rely on only two sources".'],
          ['What should Laura do with the idea about railways?', 'Move it to the main body', 'Delete it completely', 'Put it in the introduction', 'Ý về đường sắt "belongs in the main body".'],
        ],
        fill: [
          ['Laura should refer to at least ____ sources.', ['6', 'six'], 'Ít nhất sáu nguồn.'],
          ['The final version is due on the twentieth of ____.', ['November'], 'Hạn nộp ngày 20 tháng Mười Một.'],
        ],
      },
    ],
    reading: {
      title: 'The Race to the South Pole',
      text: 'At the beginning of the twentieth century the South Pole was one of the last unexplored places on Earth. In 1911 two expeditions set out to reach it: a British party led by Captain Robert Scott and a Norwegian one under Roald Amundsen. Amundsen had originally planned to sail to the Arctic, and he informed Scott of his change of destination only by a brief telegram.\n\nThe two leaders made very different choices. Amundsen had lived among Arctic peoples and learned from them to wear loose fur clothing and to travel with dogs. His team of five men used skis and more than fifty dogs, and from the start he planned to kill some of the dogs on the way to feed the others. Scott relied partly on ponies and motor sledges. The motors broke down in the cold, and the ponies sank in the soft snow and had to be shot, so that his men ended up pulling their heavy sledges themselves.\n\nAmundsen’s party reached the Pole on 14 December 1911 and returned safely to their base. Scott and four companions arrived thirty-four days later, to find a Norwegian flag and a tent already standing there. Exhausted and short of food, all five died on the return journey; the last three were only eighteen kilometres from a store of supplies when a storm trapped them in their tent.\n\nFor many years Scott was remembered in Britain as a tragic hero. Later writers criticised his planning, while more recent research has shown that the weather he met in March 1912 was unusually severe. The diaries and scientific samples found beside his body are still studied today.',
      qs: [
        ['F', 'Amundsen had always intended to go to the South Pole.', 'Đoạn 1: ban đầu ông định đi Bắc Cực.'],
        ['T', 'Amundsen learned some of his methods from people living in the Arctic.', 'Đoạn 2: học cách mặc đồ lông và đi với chó kéo.'],
        ['NG', 'Scott had more experience of polar travel than Amundsen.', 'Bài không so sánh kinh nghiệm của hai người.'],
        ['F', 'Scott’s team reached the Pole before the Norwegians.', 'Đoạn 3: đội Scott đến sau ba mươi bốn ngày.'],
        ['What happened to Scott’s motor sledges?', 'They stopped working because of the cold.', 'They sank in soft snow.', 'They were left on the ship.', 'They were given to the Norwegians.', 'Đoạn 2: "The motors broke down in the cold".'],
        ['What has recent research revealed?', 'The weather in March 1912 was unusually bad.', 'Scott’s diaries were not written by him.', 'Amundsen never reached the Pole.', 'The supply store was empty.', 'Đoạn cuối: thời tiết khắc nghiệt bất thường.'],
      ],
      fill: [
        ['Amundsen’s team travelled on skis with more than fifty ____.', ['dogs'], 'Đoạn 2: "more than fifty dogs".'],
        ['Scott’s party found a Norwegian flag and a ____ at the Pole.', ['tent'], 'Đoạn 3: "a Norwegian flag and a tent".'],
      ],
    },
    task1: [
      'Pie charts: How people get their news',
      'The charts below show the main source of news for adults in one country in 2005 and 2020. Summarise the information by selecting and reporting the main features, and make comparisons where relevant.',
      'Source | 2005 | 2020\nTelevision | 48% | 30%\nNewspapers | 30% | 8%\nRadio | 14% | 10%\nInternet | 8% | 52%',
      'The pie charts compare the principal ways in which adults in a particular country obtained their news in 2005 and in 2020.\n\nOverall, there was a dramatic move away from traditional media towards the internet. Television, newspapers and radio all lost ground, and the internet rose from last place to first.\n\nIn 2005, television was the most popular source, used by almost half of all adults (48%). Newspapers came second with 30%, followed by radio at 14%. At that time only 8% of people relied mainly on the internet for news.\n\nFifteen years later the situation had been transformed. More than half of the adult population (52%) now named the internet as their main source, a figure over six times higher than in 2005. Television remained important but had fallen to 30%. The sharpest decline was seen in newspapers, whose share collapsed from 30% to just 8%, making them the least used source. Radio experienced only a modest drop, from 14% to 10%.\n\nIn summary, online news largely replaced printed newspapers and significantly reduced the dominance of television.',
    ],
    task2: [
      'Discussion: News from social media',
      'Many people now get their news from social media rather than from newspapers or television. Some think this is a positive development, while others think it is harmful. Discuss both views and give your own opinion.',
      'Over the past decade, social media platforms have become the main source of news for millions of people, especially the young. Some observers welcome this change, whereas others consider it dangerous. In this essay I will discuss both opinions and explain why I am mostly on the side of the critics.\n\nThose who view the trend positively stress speed and convenience. News of an earthquake or an election result appears on a phone within seconds, long before a newspaper can be printed. Social media is also free and allows ordinary people to share photographs and videos of events that professional journalists cannot reach. In countries where the press is controlled, it may be the only way to learn what is really happening.\n\nHowever, there are serious disadvantages. The most worrying is that false information spreads as easily as the truth. Unlike a newspaper, a social media post is not checked by an editor, and dramatic rumours are often shared more widely than accurate reports. A second problem is that these platforms show users the kind of stories they have already liked. Consequently, people hear only opinions similar to their own and become less tolerant of other views. Finally, as traditional newspapers lose readers and income, there are fewer trained reporters to investigate important issues.\n\nIn my opinion, the harm currently outweighs the benefits, but the solution is not to abandon social media. Schools should teach pupils how to check sources and recognise unreliable stories, and the companies that own the platforms must take greater responsibility for removing material that is clearly false.\n\nIn conclusion, social media delivers news quickly and democratically, yet it also threatens the quality of information on which society depends. Education and regulation are needed to reduce this risk.',
    ],
    part1: ['News', 'How do you usually find out about the news?', 'Are you more interested in local or international news?', "I usually read the news on my phone while I'm having breakfast, mainly on two or three websites that I trust. I'm more interested in international news, to be honest, because I like to know what's going on in the world, though I check local news for weather and traffic."],
    part2: ['A piece of good news', ['Describe a piece of good news that you received.', 'You should say:', 'what the news was', 'when you received it', 'who told you', 'and explain why it was good news for you.'], "I'd like to tell you about the day I heard that I'd won a scholarship. It was about three years ago, in the middle of summer. I had applied for a scholarship to study at a university in the capital, but so many students had applied that I didn't expect to succeed. One afternoon, while I was helping my father in his shop, my phone rang. It was a woman from the university office, and she told me that I had been selected. At first I couldn't believe it, and I asked her to repeat it twice. It was wonderful news because my family couldn't have afforded the fees otherwise. My parents were so proud that my mother cried, and that evening we invited all our relatives for a big dinner to celebrate."],
    part3: ['News and media', 'Do you think people can trust the news they read online?', 'Why are people so interested in news about celebrities?', "Not always. Some online news comes from professional organisations and is reliable, but a lot of it is rumour or advertising, so readers need to check where it comes from. As for celebrities, I think people enjoy escaping from their own routine. Following a famous person's life is a bit like watching a drama, and it gives people something to chat about."],
  }),

  // =========================================================================== ĐỀ 12
  ieltsTest(12, {
    listening: [
      {
        title: 'Section 1 – Arranging a furniture delivery',
        lines: [
          'M: Homestyle Furniture, customer service.',
          'W: Hello, I ordered a dining table from you last week and I would like to arrange the delivery.',
          'M: Certainly. Do you have your order number?',
          "W: Yes, it's B, seven, four, four, one.",
          'M: Thank you. We can deliver on Tuesday the third or Friday the sixth.',
          'W: Friday would be better. Could it be in the morning?',
          'M: Yes, between eight and twelve. Delivery is free, but if you want our team to put the table together, there is a charge of twenty-five pounds.',
          "W: Yes, please, I'd like that. The address is nineteen Larch Avenue. That's L-A-R-C-H.",
        ],
        qs: [
          ['When will the table be delivered?', 'On Friday morning', 'On Tuesday morning', 'On Friday afternoon', '"Friday would be better" – trong khoảng 8 đến 12 giờ.'],
          ['What extra service does the woman want?', 'Having the table assembled', 'Removing her old table', 'Express delivery', 'Bà muốn đội giao hàng lắp bàn ("put the table together").'],
        ],
        fill: [
          ['Order number: B ____', ['7441', 'seven, four, four, one'], 'B, bảy, bốn, bốn, một.'],
          ['Assembly charge: £ ____', ['25', 'twenty-five', 'twenty five'], 'Phí lắp ráp hai mươi lăm bảng.'],
          ['Address: 19 ____ Avenue', ['Larch'], 'Đánh vần L-A-R-C-H.'],
        ],
      },
      {
        title: 'Section 2 – The reopening of Westbrook swimming pool',
        lines: [
          'M: Good news for swimmers: after eighteen months of building work, Westbrook Swimming Pool reopens to the public this Saturday.',
          'M: The main pool has been made longer and now has eight lanes instead of six. There is also a new shallow pool for children under five.',
          'M: The old cafe has moved upstairs, where customers can watch the swimmers through a glass wall.',
          'M: To reduce energy costs, solar panels have been fitted on the roof. They will provide about a third of the electricity the building needs.',
          'M: Adult tickets cost five pounds fifty. On the opening day, however, entry will be free for everyone until midday.',
          'M: Swimming lessons for adults begin the following week. You can book a place at reception.',
        ],
        qs: [
          ['How has the main pool changed?', 'It now has eight lanes.', 'It has been made shallower.', 'It is now outdoors.', '"now has eight lanes instead of six".'],
          ['Where is the cafe now?', 'Upstairs', 'Beside the entrance', 'Next to the children’s pool', '"The old cafe has moved upstairs".'],
          ['What is special about the opening day?', 'Entry is free until midday.', 'Lessons are free all day.', 'The pool opens at midnight.', '"entry will be free for everyone until midday".'],
        ],
        fill: [
          ['The pool was closed for ____ months.', ['18', 'eighteen'], 'Đóng cửa mười tám tháng để xây dựng.'],
          ['The roof now has ____ panels.', ['solar'], 'Lắp pin mặt trời trên mái.'],
        ],
      },
    ],
    reading: {
      title: 'The Box That Changed the World',
      text: 'Few inventions look less exciting than a steel box, yet the shipping container transformed the world economy. Until the 1950s, loading a ship was slow, hard and expensive. Sacks, barrels and wooden cases of every shape were carried on board one by one by large teams of dock workers. A ship could spend more time in port than at sea, and theft and damage were common.\n\nThe man who changed this was not a sailor but an American trucking businessman, Malcolm McLean. Tired of watching his lorries wait for hours at the docks, he wondered why the whole body of a truck could not simply be lifted onto a ship. In April 1956 his converted oil tanker, the Ideal X, sailed from New Jersey to Texas carrying fifty-eight metal containers. The saving was astonishing: loading loose cargo cost nearly six dollars a ton, while loading McLean’s containers cost about sixteen cents.\n\nThe idea did not succeed immediately. Dock workers feared for their jobs and organised strikes, and shipping companies used containers of different sizes that could not be stacked together. Only in the 1960s were international standard dimensions agreed, which allowed any container to fit any ship, train or lorry in the world.\n\nThe effects were enormous. Because transport became so cheap, manufacturers could make goods wherever labour cost least and sell them on the other side of the planet. Old ports in city centres, such as those of London and New York, declined because they lacked space for cranes and container yards, and new ports grew up in deeper water. Today around ninety percent of manufactured goods travel in containers at some stage of their journey.',
      qs: [
        ['T', 'Before containers, ships often stayed in port for long periods.', 'Đoạn 1: tàu có thể nằm cảng lâu hơn thời gian đi biển.'],
        ['F', 'Malcolm McLean began his career as a ship’s captain.', 'Đoạn 2: ông là doanh nhân vận tải đường bộ, "not a sailor".'],
        ['NG', 'The Ideal X was later used to carry oil again.', 'Bài không nói con tàu sau đó ra sao.'],
        ['F', 'Dock workers welcomed the introduction of containers.', 'Đoạn 3: họ lo mất việc và tổ chức đình công.'],
        ['What problem did early container shipping face besides strikes?', 'Containers came in sizes that could not be stacked together.', 'Containers were too heavy for cranes.', 'Steel was too expensive.', 'Ships were too small to carry them.', 'Đoạn 3: các hãng dùng kích cỡ khác nhau, không xếp chồng được.'],
        ['Why did some old city-centre ports decline?', 'They did not have room for cranes and container yards.', 'Their workers refused to load ships.', 'The water became polluted.', 'Manufacturers moved closer to them.', 'Đoạn cuối: thiếu chỗ cho cần cẩu và bãi container.'],
      ],
      fill: [
        ['Loading McLean’s containers cost about sixteen ____ a ton.', ['cents'], 'Đoạn 2: "about sixteen cents".'],
        ['In the 1960s international ____ dimensions were agreed.', ['standard'], 'Đoạn 3: "international standard dimensions".'],
      ],
    },
    task1: [
      'Table: Commuting to work',
      'The table below shows the average time spent travelling to work and the main method of transport in four cities. Summarise the information by selecting and reporting the main features, and make comparisons where relevant.',
      'City | Average journey (minutes) | By car | By public transport | Walking or cycling\nCity A | 52 | 30% | 60% | 10%\nCity B | 38 | 65% | 25% | 10%\nCity C | 27 | 35% | 25% | 40%\nCity D | 45 | 80% | 15% | 5%',
      'The table provides information about how long workers in four cities spend travelling to their jobs and what means of transport they use.\n\nOverall, journey times vary considerably, from under half an hour in City C to almost an hour in City A. The preferred method of transport also differs greatly, with cars dominating in Cities B and D, public transport in City A, and walking or cycling in City C.\n\nCommuters in City A have the longest average journey, at 52 minutes. Most of them, 60%, travel by public transport, while 30% drive. City D has the second longest journey time of 45 minutes, and it is by far the most dependent on cars, which are used by 80% of workers. Only 5% walk or cycle there.\n\nIn City B the average journey takes 38 minutes. Nearly two thirds of its commuters go by car, and a quarter use public transport.\n\nCity C stands out as having the shortest journey, just 27 minutes, and the highest proportion of people who walk or cycle, at 40%. Car use and public transport account for 35% and 25% respectively.',
    ],
    task2: [
      'Opinion: Spending on space exploration',
      'Some people say that the money spent on space exploration is wasted and should be used to solve problems on Earth. To what extent do you agree or disagree?',
      'Every year governments spend billions of dollars on rockets, satellites and missions to other planets. Many people feel that this money should instead be used to fight poverty, disease and climate change. Although I understand this reaction, I disagree with the view that space exploration is a waste.\n\nThe argument against space programmes is simple and powerful. Millions of people still lack clean water, medical care and schools, and it seems wrong to send a robot to Mars while children on our own planet go hungry. Critics add that the discoveries made in space, however interesting, do not improve the daily lives of ordinary citizens.\n\nIn fact, however, space research has produced many practical benefits. Satellites allow us to forecast storms, navigate with our phones and communicate across the world. Farmers use satellite images to manage their crops, and scientists rely on them to measure melting ice and rising seas, so space technology is actually essential for tackling environmental problems. Furthermore, numerous inventions first developed for space missions, including water filters, medical scanners and lightweight materials, are now used in hospitals and homes.\n\nIt should also be remembered that the amounts involved are smaller than people imagine. In most countries the space budget is less than one percent of public spending, far below the sums devoted to defence. Cancelling it would therefore make very little difference to poverty, whereas it would destroy thousands of skilled jobs and discourage young people from studying science.\n\nIn conclusion, the problems on Earth certainly deserve priority, but they will not be solved by abandoning space exploration. On the contrary, I believe that the knowledge and technology gained from it help humanity to deal with those very problems.',
    ],
    part1: ['Technology', 'What piece of technology do you use most often?', 'Are you good at fixing technical problems?', "Without doubt it's my smartphone. I use it for messaging, banking, reading and even as an alarm clock. I'm not especially good at fixing things, though. If restarting the device doesn't work, I usually search for a video online or ask my younger brother."],
    part2: ['An invention that changed life', ['Describe an invention that has changed people’s lives.', 'You should say:', 'what the invention is', 'when it was invented', 'how people use it', 'and explain why you think it is important.'], "The invention I've chosen is the refrigerator. Electric refrigerators for the home appeared in the early twentieth century, and they became common in most countries in the second half of that century. People use them to keep food cold so that it stays fresh for days or even weeks. Before that, families had to shop every day, and food was dried, salted or simply thrown away. I think it's important for several reasons. First, it reduces waste and food poisoning, so it has improved public health enormously. Second, it saves a huge amount of time, especially for women, who traditionally did the daily shopping and cooking. Finally, refrigeration is also used to store medicines and vaccines, so it literally saves lives. It's not a glamorous invention, but I really can't imagine a modern home without one."],
    part3: ['Technology and society', 'Do you think people depend too much on technology?', 'Which jobs might be done by machines in the future?', "In some ways, yes. Many people can no longer find their way or remember a phone number without a device, and we panic when the internet stops working. As for jobs, I expect machines will take over a lot of routine work, such as driving, working at checkouts and basic accounting, while jobs that need creativity or human care will remain."],
  }),
];
