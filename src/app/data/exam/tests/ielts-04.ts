/** Bộ đề IELTS cố định – đề 13 đến 16 (định dạng rút gọn, xem helpers.ts) */
import { IeltsTest, ieltsTest } from './helpers';

export const TESTS: IeltsTest[] = [
  // =========================================================================== ĐỀ 13
  ieltsTest(13, {
    listening: [
      {
        title: 'Section 1 – Booking a meeting room at a hotel',
        lines: [
          'W: Good morning, Riverbank Hotel, events department.',
          "M: Good morning. I'd like to book a room for a company training day next month.",
          'W: Certainly. How many people will be attending?',
          'M: Twenty-four, and we would need the room from nine until five.',
          'W: Our Garden Room holds up to thirty. It costs three hundred and twenty pounds for the day, including a projector and a flip chart.',
          'M: Is lunch included in that?',
          'W: No, lunch is twelve pounds per person. Which date would you like?',
          "M: The seventeenth of June. The booking is for Harlow Engineering. That's H-A-R-L-O-W.",
        ],
        qs: [
          ['What is the room needed for?', 'A company training day', 'A wedding party', 'A job interview', '"a company training day next month".'],
          ['What is included in the room price?', 'A projector and a flip chart', 'Lunch for all guests', 'Car parking', 'Giá gồm máy chiếu và bảng lật; bữa trưa tính riêng.'],
        ],
        fill: [
          ['Number of people: ____', ['24', 'twenty-four', 'twenty four'], 'Hai mươi bốn người.'],
          ['Room hire: £ ____ for the day', ['320', 'three hundred and twenty'], 'Ba trăm hai mươi bảng một ngày.'],
          ['Company name: ____ Engineering', ['Harlow'], 'Đánh vần H-A-R-L-O-W.'],
        ],
      },
      {
        title: 'Section 2 – A tour of the botanical garden',
        lines: [
          'W: Good morning, everyone, and welcome to Ashdown Botanical Garden. My name is Claire and I will be your guide.',
          'W: The garden was founded in eighteen forty by a doctor who collected medicinal plants. Today it contains more than nine thousand species.',
          'W: We will begin in the glasshouse, which is kept at twenty-eight degrees for our tropical plants. Please do not touch the leaves, as some of them can irritate the skin.',
          'W: After that we will walk through the rose garden to the lake. The oldest tree in the garden, an oak that is over four hundred years old, stands beside it.',
          'W: The tour finishes at the cafe at about half past eleven. Photography is welcome everywhere except inside the research laboratory.',
        ],
        qs: [
          ['Who founded the garden?', 'A doctor', 'A farmer', 'A university professor', '"founded ... by a doctor who collected medicinal plants".'],
          ['Why should visitors not touch the leaves in the glasshouse?', 'Some can irritate the skin.', 'The plants are very expensive.', 'The leaves break easily.', '"some of them can irritate the skin".'],
          ['Where is photography not allowed?', 'Inside the research laboratory', 'In the glasshouse', 'Near the lake', '"except inside the research laboratory".'],
        ],
        fill: [
          ['The garden contains more than ____ thousand species.', ['9', 'nine'], 'Hơn chín nghìn loài.'],
          ['The oldest tree in the garden is an ____.', ['oak'], 'Cây sồi hơn bốn trăm năm tuổi.'],
        ],
      },
    ],
    reading: {
      title: 'The Origins of Writing',
      text: 'Writing is so familiar that it is hard to imagine a world without it, yet humans spoke for tens of thousands of years before anyone wrote a word. The earliest known writing comes from the city of Uruk in Mesopotamia, in what is now Iraq, and dates from about 3300 BC. Surprisingly, it does not record stories, prayers or the deeds of kings. Almost all of the first clay tablets are lists: quantities of grain, sheep and beer received or handed out by the temples.\n\nMany scholars believe that this system grew out of small clay tokens that farmers and officials had used for counting since much earlier times. Eventually, instead of keeping the tokens, people pressed marks into wet clay to represent them. At first each sign was a simple picture of an object. Over time, scribes began using signs to stand for sounds as well, which made it possible to write names and, finally, complete sentences. Because the marks were made with the cut end of a reed, they were wedge-shaped, and the script is known as cuneiform, from the Latin word for "wedge".\n\nWriting was invented independently in at least two other places, China and Central America, and possibly in Egypt as well. Learning it was difficult. A Mesopotamian scribe needed years of training to master hundreds of signs, so literacy was limited to a small professional group.\n\nThis changed with the alphabet, which appeared around 1800 BC among people living near Egypt. By using fewer than thirty signs, each representing a single sound, it made reading and writing far easier to learn. Nearly all modern alphabets are descended from that one invention.',
      qs: [
        ['T', 'People were able to speak long before they could write.', 'Đoạn 1: con người nói hàng chục nghìn năm trước khi viết.'],
        ['F', 'The earliest tablets from Uruk mainly record religious stories.', 'Đoạn 1: hầu hết là danh sách hàng hóa, không phải truyện hay kinh.'],
        ['NG', 'Scribes in Mesopotamia were paid more than farmers.', 'Bài không nói về thu nhập.'],
        ['T', 'Writing was developed separately in more than one part of the world.', 'Đoạn 3: phát minh độc lập ở Trung Quốc và Trung Mỹ.'],
        ['What did using signs for sounds allow scribes to do?', 'Write names and full sentences', 'Count sheep more quickly', 'Make clay tablets lighter', 'Draw more realistic pictures', 'Đoạn 2: viết được tên riêng và cả câu hoàn chỉnh.'],
        ['Why was the alphabet an important development?', 'It was much easier to learn than earlier systems.', 'It used pictures instead of sounds.', 'It could only be read by priests.', 'It replaced spoken language.', 'Đoạn cuối: chưa tới ba mươi ký hiệu nên dễ học hơn nhiều.'],
      ],
      fill: [
        ['Before writing, people counted with small clay ____.', ['tokens'], 'Đoạn 2: "small clay tokens".'],
        ['The marks were made with the cut end of a ____.', ['reed'], 'Đoạn 2: "the cut end of a reed".'],
      ],
    },
    task1: [
      'Line graph: Cinema attendance by age',
      'The graph below shows the percentage of people in four age groups who went to the cinema at least once a month in one country between 2000 and 2020. Summarise the information by selecting and reporting the main features, and make comparisons where relevant.',
      'Age group | 2000 | 2010 | 2020\n15–24 | 55% | 50% | 38%\n25–34 | 35% | 38% | 30%\n35–54 | 20% | 25% | 26%\n55+ | 8% | 14% | 20%',
      'The line graph shows what proportion of people in four different age groups visited the cinema at least once a month in a particular country in 2000, 2010 and 2020.\n\nOverall, regular cinema-going became less common among younger people but more common among older people. Although those aged 15 to 24 remained the most frequent visitors throughout, the differences between the groups became much smaller.\n\nIn 2000, more than half of 15 to 24-year-olds (55%) went to the cinema every month. This figure fell slightly to 50% in 2010 and then dropped sharply to 38% in 2020. The 25 to 34 group rose from 35% to 38% in the first decade but declined to 30% by the end of the period.\n\nThe two older groups showed the opposite trend. Attendance among people aged 35 to 54 increased from 20% to 25% in 2010 and then levelled off at 26%. The most striking growth was among those aged 55 and over, whose figure more than doubled, climbing steadily from just 8% in 2000 to 20% in 2020.',
    ],
    task2: [
      'Opinion: Learning a foreign language at primary school',
      'Some experts believe that it is better for children to begin learning a foreign language at primary school rather than at secondary school. Do the advantages of this outweigh the disadvantages?',
      'In many countries children now start a foreign language at the age of six or seven instead of waiting until secondary school. In my opinion, the advantages of this early start are considerably greater than the disadvantages, as long as the teaching is of good quality.\n\nThe main advantage is that young children learn languages naturally. They imitate sounds easily, so they usually acquire better pronunciation than teenagers, and they are not embarrassed about making mistakes in front of their classmates. Lessons at this age are based on songs, games and stories, which means that children associate the language with enjoyment rather than with examinations. Starting early also gives pupils several more years of practice, so they reach a much higher level by the time they leave school.\n\nAnother benefit is cultural. Learning another language at a young age introduces children to different customs and ways of thinking, and research suggests that bilingual children are often better at solving problems and switching between tasks.\n\nThere are, admittedly, some drawbacks. The primary timetable is already full, and time spent on a foreign language may be taken from the mother tongue or mathematics. A more serious difficulty is the shortage of qualified teachers. If a language is taught by someone who speaks it poorly, children may learn incorrect pronunciation that is hard to correct later, and may even lose interest.\n\nHowever, these problems are practical rather than fundamental, and they can be solved through proper teacher training and short, regular lessons that do not overload pupils.\n\nIn conclusion, although an early start requires investment in teachers, I am convinced that it offers children a stronger foundation, greater confidence and a more open attitude to the world.',
    ],
    part1: ['Languages', 'How long have you been learning English?', 'Would you like to learn another foreign language?', "I've been learning English for about ten years, since primary school, though I only started practising speaking seriously two years ago. Yes, I'd love to learn Japanese one day, because I'm interested in Japanese culture and it would be useful for my career."],
    part2: ['A teacher who influenced you', ['Describe a teacher who has influenced you.', 'You should say:', 'who the teacher was', 'what subject he or she taught', 'what he or she was like', 'and explain how this teacher influenced you.'], "I'd like to talk about Mr. Minh, who taught me mathematics in my final two years of secondary school. He was in his fifties, tall and thin, with a very calm voice. What made him special was his patience. If a student didn't understand something, he never got angry; he simply explained it again in a different way, often using examples from daily life such as shopping or football scores. Before I met him, I honestly hated maths and believed I had no talent for it. He showed me that it was a matter of practice rather than talent, and he stayed after class several times to help me. My marks improved, but more importantly my attitude changed. Because of him, I learned not to give up when something is difficult, and that lesson has helped me in every subject since."],
    part3: ['Education and teachers', 'What makes someone a good teacher?', 'Could computers replace teachers in the future?', "I think a good teacher needs two things: deep knowledge of the subject and the ability to understand how students feel. Patience and a sense of humour help a lot, too. I don't believe computers could replace teachers completely. Software can explain facts and correct exercises, but it can't inspire a child or notice that someone is upset."],
  }),

  // =========================================================================== ĐỀ 14
  ieltsTest(14, {
    listening: [
      {
        title: 'Section 1 – At a bicycle repair shop',
        lines: [
          'M: Hello, Wheelhouse Cycles. Can I help?',
          'W: Yes, I have a problem with my bike. The back brake is not working properly and the chain keeps falling off.',
          'M: It sounds as if it needs a full service. That costs forty-eight pounds and includes adjusting the brakes and gears.',
          'W: And if I need a new chain?',
          "M: That would be an extra fifteen pounds. We'll phone you before we replace anything.",
          'W: OK. How long will it take?',
          "M: If you bring it in today, it'll be ready on Saturday. We're open until six. Can I take your name? ... Ms. Thackeray, T-H-A-C-K-E-R-A-Y.",
        ],
        qs: [
          ['What is wrong with the bike?', 'The back brake and the chain', 'The front light and the seat', 'The tyres and the bell', '"The back brake is not working properly and the chain keeps falling off".'],
          ['What will the shop do before replacing parts?', 'Phone the customer', 'Send a bill', 'Order a new bike', '"We\'ll phone you before we replace anything".'],
        ],
        fill: [
          ['Full service: £ ____', ['48', 'forty-eight', 'forty eight'], 'Bốn mươi tám bảng.'],
          ['The bike will be ready on ____.', ['Saturday'], 'Xe sẽ xong vào thứ Bảy.'],
          ['Customer’s surname: ____', ['Thackeray'], 'Đánh vần T-H-A-C-K-E-R-A-Y.'],
        ],
      },
      {
        title: 'Section 4 – Lecture on the history of plastic',
        lines: [
          'M: Plastic is everywhere in modern life, but it has a surprisingly short history.',
          'M: The first fully synthetic plastic, Bakelite, was created in nineteen oh seven by the chemist Leo Baekeland. It was hard and did not conduct electricity, so it was ideal for telephones and radios.',
          'M: Production grew enormously during the Second World War, when plastics replaced materials that were in short supply, such as rubber and silk.',
          'M: In the nineteen fifties, manufacturers began promoting disposable products, and a magazine article even celebrated what it called throwaway living.',
          'M: The difficulty is that most plastic does not decay. Of all the plastic ever made, only about nine percent has been recycled.',
          'M: Researchers are now developing plastics made from plants, such as corn, which break down more easily.',
        ],
        qs: [
          ['Why was Bakelite suitable for telephones?', 'It did not conduct electricity.', 'It was very cheap.', 'It was transparent.', '"It was hard and did not conduct electricity".'],
          ['What happened to plastic production during the Second World War?', 'It increased greatly.', 'It stopped completely.', 'It moved to Asia.', '"Production grew enormously".'],
          ['What are researchers developing now?', 'Plastics made from plants', 'Plastics that never break', 'Machines that burn plastic safely', 'Nhựa làm từ thực vật như ngô, dễ phân hủy hơn.'],
        ],
        fill: [
          ['Only about ____ percent of all plastic has been recycled.', ['9', 'nine'], 'Chỉ khoảng chín phần trăm.'],
          ['New plastics may be made from plants such as ____.', ['corn'], '"made from plants, such as corn".'],
        ],
      },
    ],
    reading: {
      title: 'Why Cities Are Hotter',
      text: 'Anyone who has travelled from the countryside into a large city on a summer evening will have noticed the change in temperature. Cities are frequently several degrees warmer than the land around them, a phenomenon known as the urban heat island. It was first described in 1818 by Luke Howard, an amateur scientist who compared thermometer readings in London with those taken outside it.\n\nThere are several causes. Dark surfaces such as asphalt roads and roofs absorb the sun’s energy during the day and release it slowly after sunset, which is why the difference is usually greatest at night. Tall buildings trap this heat in the narrow streets between them and block the wind that would carry it away. Cities also have few trees. In the countryside, plants cool the air as water evaporates from their leaves, but rain in a city runs quickly into drains. Finally, engines, factories and air conditioners all give off heat of their own.\n\nThe consequences can be serious. During heat waves, the extra warmth increases the number of deaths, especially among elderly people living in top-floor apartments. Demand for electricity rises as more air conditioners are switched on, which in turn produces more waste heat.\n\nFortunately, the problem can be reduced. Painting roofs white reflects sunlight and can lower the temperature inside a building by several degrees. Planting trees along streets provides shade and moisture; one study found that a single mature tree has the cooling effect of ten room-sized air conditioners. Some cities, including Seoul, have removed motorways and reopened the rivers buried beneath them, creating cool corridors through the urban centre.',
      qs: [
        ['T', 'The urban heat island effect was first described in the nineteenth century.', 'Đoạn 1: năm 1818 thuộc thế kỷ 19.'],
        ['F', 'The temperature difference between city and countryside is usually greatest at midday.', 'Đoạn 2: chênh lệch lớn nhất vào ban đêm.'],
        ['NG', 'Luke Howard was paid by the government for his research.', 'Bài chỉ nói ông là nhà khoa học nghiệp dư.'],
        ['T', 'Air conditioners contribute to the heat in cities.', 'Đoạn 2 và 3: máy lạnh thải nhiệt.'],
        ['Why do plants make the countryside cooler?', 'Water evaporates from their leaves.', 'They reflect sunlight like white paint.', 'They block rain from reaching the ground.', 'They absorb heat from engines.', 'Đoạn 2: nước bốc hơi từ lá làm mát không khí.'],
        ['What did the city of Seoul do?', 'It uncovered rivers that had been hidden under roads.', 'It painted every roof white.', 'It banned air conditioners.', 'It moved its elderly residents.', 'Đoạn cuối: dỡ đường cao tốc và mở lại các con sông bên dưới.'],
      ],
      fill: [
        ['Dark surfaces such as ____ roads absorb the sun’s energy.', ['asphalt'], 'Đoạn 2: "asphalt roads".'],
        ['Painting roofs ____ reflects sunlight.', ['white'], 'Đoạn cuối: "Painting roofs white".'],
      ],
    },
    task1: [
      'Bar chart: Recycling rates',
      'The chart below shows the percentage of four types of waste that were recycled in one city in 2005 and 2020. Summarise the information by selecting and reporting the main features, and make comparisons where relevant.',
      'Material | 2005 | 2020\nPaper | 45% | 72%\nGlass | 38% | 65%\nMetal cans | 30% | 58%\nPlastic | 6% | 24%',
      'The bar chart compares the proportions of paper, glass, metal cans and plastic that were recycled in a particular city in two years, 2005 and 2020.\n\nOverall, recycling rates rose significantly for all four materials during the period. Paper was the most widely recycled material in both years, while plastic remained far behind the others despite a large relative increase.\n\nIn 2005, 45% of waste paper was recycled, compared with 38% of glass and 30% of metal cans. By 2020, each of these figures had increased by 27 or 28 percentage points. Paper reached 72%, glass climbed to 65% and metal cans to 58%, so the order of the three materials stayed the same.\n\nPlastic followed a rather different pattern. Only 6% of it was recycled in 2005, a tiny fraction compared with the other categories. Although this figure had quadrupled to 24% by 2020, it was still less than half the rate achieved for metal cans.\n\nIn summary, the city made considerable progress in recycling over fifteen years, but plastic waste continued to present the greatest challenge.',
    ],
    task2: [
      'Problem and solution: Plastic waste',
      'The amount of plastic waste in the world is increasing rapidly. What problems does this cause, and what can governments and individuals do to reduce it?',
      'Plastic is cheap, light and convenient, and the world now produces hundreds of millions of tonnes of it every year. Unfortunately, much of it is used only once and then thrown away. This essay will outline the problems that result and consider how they might be tackled.\n\nThe most visible problem is pollution. Because plastic takes centuries to break down, bottles and bags pile up in rubbish dumps or are washed into rivers and seas. Sea birds, turtles and whales swallow pieces of plastic or become trapped in them, and many die as a result. A less obvious danger is that plastic slowly breaks into tiny particles. These have been found in drinking water, in fish and even in human blood, and scientists are still uncertain about their effects on our health. In addition, burning plastic waste releases poisonous gases and contributes to climate change.\n\nGovernments have several ways of dealing with the issue. They can ban or tax the most unnecessary items, such as thin shopping bags and plastic straws; countries that have done so, including Rwanda and Ireland, have seen a dramatic fall in litter. They can also oblige manufacturers to use packaging that can be recycled and invest in modern recycling plants. A deposit system, in which customers get money back for returning bottles, has proved highly effective in Germany.\n\nIndividuals also have a part to play. Each of us can carry a reusable bag and water bottle, refuse products with excessive packaging and sort our rubbish properly. Such actions may seem small, but they influence what companies choose to sell.\n\nIn conclusion, plastic waste harms wildlife, the environment and possibly human health. Firm government action combined with changes in everyday habits offers the best hope of reducing it.',
    ],
    part1: ['Clothes', 'What kind of clothes do you usually wear?', 'Do you ever buy second-hand clothes?', "I usually wear casual clothes like jeans and T-shirts, because they're comfortable and suitable for my work. I do buy second-hand clothes occasionally, especially jackets. They're cheaper, they often look unique, and it's better for the environment."],
    part2: ['Something you do for the environment', ['Describe something you do to help protect the environment.', 'You should say:', 'what you do', 'when you started doing it', 'how easy or difficult it is', 'and explain why you do it.'], "One thing I do to protect the environment is avoid single-use plastic. I started about three years ago, after I joined a beach clean-up with my university club and was shocked by how many bottles and bags we collected in just two hours. Since then I've carried my own water bottle and a cloth bag, and I bring a lunch box when I buy takeaway food. To be honest, it wasn't easy at the beginning. I often forgot my bag, and some shop assistants looked surprised when I refused theirs. Now it has become a habit, and I hardly think about it. I do it because I believe small actions add up. If millions of people use a little less plastic, the difference will be huge. It also makes me feel that I'm part of the solution and not only part of the problem."],
    part3: ['Environmental problems', 'What is the most serious environmental problem in your country?', 'Are companies doing enough to protect the environment?', "I'd say air pollution in the big cities is the most serious, because of the huge number of motorbikes and the construction work. It affects everyone's health every day. As for companies, a few are making real efforts, but many only talk about being green in their advertising. I think stricter laws are needed, because profit usually comes first."],
  }),

  // =========================================================================== ĐỀ 15
  ieltsTest(15, {
    listening: [
      {
        title: 'Section 1 – Booking a school visit to a museum',
        lines: [
          'W: Science Discovery Museum, bookings. How can I help?',
          "M: Hello, I'm a teacher at Elmwood Primary School and I'd like to bring a class to the museum.",
          'W: Lovely. How many children will there be?',
          'M: Thirty-two pupils and four adults.',
          'W: Entry for school groups is four pounds per child, and the adults come in free. Would you like to book a workshop as well? We have one on electricity and one on the human body.',
          'M: The one on electricity, please. How long does it last?',
          "W: Forty-five minutes. I can offer you Thursday the ninth at ten fifteen. There's a room where the children can eat their packed lunches.",
          "M: Perfect. My name is Mr. Radley, R-A-D-L-E-Y.",
        ],
        qs: [
          ['Which workshop does the teacher choose?', 'Electricity', 'The human body', 'Space', '"The one on electricity, please".'],
          ['Where can the children eat?', 'In a room for packed lunches', 'In the museum restaurant', 'Outside in the garden', '"a room where the children can eat their packed lunches".'],
        ],
        fill: [
          ['Number of pupils: ____', ['32', 'thirty-two', 'thirty two'], 'Ba mươi hai học sinh.'],
          ['The workshop lasts ____ minutes.', ['45', 'forty-five', 'forty five'], 'Bốn mươi lăm phút.'],
          ['Teacher’s surname: ____', ['Radley'], 'Đánh vần R-A-D-L-E-Y.'],
        ],
      },
      {
        title: 'Section 3 – Two students choose their optional courses',
        lines: [
          'W: Have you chosen your optional course for next term, Jack?',
          "M: Not yet. I'm trying to decide between Marketing and Statistics. Marketing sounds more interesting, but everyone says Statistics is more useful for finding a job.",
          'W: I took Statistics last year. It was hard work, but the lecturer was excellent, and there was no final exam, just two projects.',
          "M: Really? That's a big advantage. I always get nervous in exams.",
          'W: The only problem is the timetable. The lectures are on Monday mornings at eight.',
          "M: Hmm, that's early. Still, I think I'll choose Statistics. When is the deadline for registering?",
          'W: This Friday. You have to do it online, through the student portal.',
        ],
        qs: [
          ['Why is Jack interested in Statistics?', 'It is said to be useful for getting a job.', 'It is easier than Marketing.', 'His friends are all taking it.', '"everyone says Statistics is more useful for finding a job".'],
          ['How is the Statistics course assessed?', 'By two projects', 'By a final exam', 'By a weekly test', '"there was no final exam, just two projects".'],
          ['How must students register?', 'Online through the student portal', 'At the faculty office', 'By emailing the lecturer', '"You have to do it online, through the student portal".'],
        ],
        fill: [
          ['The lectures are on ____ mornings.', ['Monday'], 'Bài giảng vào sáng thứ Hai lúc tám giờ.'],
          ['The deadline for registering is this ____.', ['Friday'], 'Hạn đăng ký là thứ Sáu này.'],
        ],
      },
    ],
    reading: {
      title: 'From Wolf to Dog',
      text: 'The dog was the first animal to be domesticated, long before sheep, cattle or horses. Genetic studies show that all dogs, from the tiny chihuahua to the huge mastiff, are descended from wolves. Exactly when and where the change took place is still debated, but most researchers believe it happened at least fifteen thousand years ago, when humans were still hunters and had not yet begun to farm.\n\nFor a long time it was assumed that people had captured wolf cubs and trained them. Many scientists now favour a different explanation: wolves domesticated themselves. According to this theory, bolder and less aggressive wolves began to hang around human camps to feed on bones and leftovers. Those that were calm enough to stay close to people ate better and raised more young, and over many generations they grew tamer.\n\nSupport for this idea came from a remarkable experiment begun in Siberia in 1959 by the Russian scientist Dmitri Belyaev. He bred silver foxes, choosing in each generation only the animals that showed the least fear of humans. Within about twenty generations the foxes were wagging their tails and licking their keepers’ hands. Unexpectedly, their appearance changed too: many developed floppy ears, curly tails and patches of white fur, just as dogs have.\n\nDogs also gained abilities that wolves lack. They can follow a pointing finger to find hidden food, something that even chimpanzees find hard. Studies have shown that when dogs and their owners look into each other’s eyes, both produce more of the hormone associated with bonding between mothers and babies. After thousands of years together, the two species understand one another unusually well.',
      qs: [
        ['T', 'Dogs were domesticated before farm animals.', 'Đoạn 1: trước cừu, bò, ngựa.'],
        ['F', 'Scientists agree on exactly where dogs were first domesticated.', 'Đoạn 1: "still debated".'],
        ['NG', 'Belyaev kept some of the tame foxes as pets in his own home.', 'Bài không đề cập.'],
        ['T', 'Breeding foxes for tameness also altered how they looked.', 'Đoạn 3: tai cụp, đuôi cong, đốm lông trắng.'],
        ['According to the newer theory, why did some wolves approach human camps?', 'To eat bones and leftover food', 'To protect their cubs from hunters', 'To escape from cold weather', 'Because humans captured them', 'Đoạn 2: đến kiếm xương và thức ăn thừa.'],
        ['What can dogs do that chimpanzees find difficult?', 'Understand a pointing gesture', 'Recognise their own names', 'Hunt in large groups', 'Remember hidden food for days', 'Đoạn cuối: dõi theo ngón tay chỉ để tìm thức ăn.'],
      ],
      fill: [
        ['All dogs are descended from ____.', ['wolves'], 'Đoạn 1: "descended from wolves".'],
        ['Belyaev carried out his experiment with silver ____.', ['foxes'], 'Đoạn 3: "silver foxes".'],
      ],
    },
    task1: [
      'Table: Sales of hot drinks',
      'The table below shows the sales (in millions of dollars) of three hot drinks in one country in 2000, 2010 and 2020. Summarise the information by selecting and reporting the main features, and make comparisons where relevant.',
      'Drink | 2000 | 2010 | 2020\nCoffee | 310 | 480 | 760\nTea | 420 | 400 | 390\nHot chocolate | 90 | 120 | 110',
      'The table shows how much money was spent on coffee, tea and hot chocolate in a particular country in three years over a twenty-year period.\n\nOverall, sales of coffee more than doubled, while sales of tea declined slightly and those of hot chocolate remained low. Consequently, coffee replaced tea as the most popular hot drink.\n\nIn 2000, tea was the market leader, with sales of $420 million, compared with $310 million for coffee. Over the next ten years, however, the two drinks moved in opposite directions. Coffee sales rose strongly to $480 million in 2010, whereas tea fell to $400 million. This trend continued in the second decade. By 2020, coffee had reached $760 million, almost twice the figure for tea, which had dropped a little further to $390 million.\n\nHot chocolate was much less popular than the other two drinks throughout the period. Its sales increased from $90 million to $120 million in 2010, but then decreased to $110 million in 2020.\n\nIn summary, the hot drinks market in this country grew considerably, and almost all of this growth was due to coffee.',
    ],
    task2: [
      'Discussion: Competitive sport for children',
      'Some people think that competitive sports are good for children. Others believe that competition is harmful and that children should be taught to cooperate instead. Discuss both views and give your own opinion.',
      'Sport is an important part of school life, but there is disagreement about whether children should compete against each other. Some people believe that competition prepares young people for the future, while others fear that it damages their confidence. Both views will be discussed in this essay.\n\nSupporters of competitive sport argue that it teaches valuable lessons. Children learn that success requires regular training and effort, and they discover how to cope with both winning and losing. Since adult life involves competing for university places and jobs, these lessons are useful preparation. Moreover, the excitement of a match motivates many children to take exercise, which is increasingly important at a time when young people spend so many hours sitting down.\n\nThose who oppose competition, however, point out that it can have negative effects. Children who regularly lose or are chosen last for a team may conclude that they are simply bad at sport and stop taking part altogether. In some cases, parents and coaches place so much pressure on young players that the game ceases to be enjoyable. Critics therefore prefer activities such as dance, hiking or group challenges, in which pupils work together and nobody is a loser.\n\nIn my view, competition and cooperation are not really opposites. In team sports such as football or basketball, players must cooperate closely in order to compete successfully. The key is how adults organise the activity. If teachers praise effort and fair play, give every child time on the field and avoid emphasising the score with very young pupils, competition can be healthy.\n\nIn conclusion, although competitive sport can discourage some children when it is badly managed, I believe that, handled sensibly, it develops determination and teamwork at the same time.',
    ],
    part1: ['Sport', 'Do you play any sports?', 'What sports are popular in your country?', "I play badminton twice a week with my colleagues. It's good exercise and it doesn't require much equipment. Football is by far the most popular sport in my country. When the national team plays, the streets are full of people watching the match together."],
    part2: ['A sporting event you watched', ['Describe an exciting sporting event that you watched.', 'You should say:', 'what the event was', 'where you watched it', 'who you watched it with', 'and explain why it was exciting.'], "I'm going to describe a football match that I watched a few years ago, when my country's under-23 team played in the final of an Asian tournament. I watched it on a big screen in a cafe near my house, together with my cousins and about a hundred other fans. Everyone was wearing red shirts and waving flags. It was snowing heavily in the stadium, which is something our players had never experienced. Our team scored a beautiful goal from a free kick, and the whole cafe exploded with joy. In the end we lost in the last minute of extra time, but nobody was really sad. It was exciting because no one had expected the team to get so far, and for the first time I felt that the entire country was sharing the same emotion."],
    part3: ['Sport and society', 'Why are some sports stars paid so much money?', 'Should governments spend money on hosting big sporting events?', "They're paid so much because millions of people watch them, so companies pay huge amounts for advertising and television rights. Also, their careers are quite short. Regarding big events, I have mixed feelings. They can bring tourists and national pride, but the stadiums are extremely expensive and are often empty afterwards, so the money might be better spent on local sports facilities."],
  }),

  // =========================================================================== ĐỀ 16
  ieltsTest(16, {
    listening: [
      {
        title: 'Section 1 – Booking a flight at a travel agency',
        lines: [
          'M: Good afternoon, Skyline Travel. How can I help you?',
          "W: Hello, I'd like to book a return flight to Singapore, please.",
          'M: Certainly. When would you like to travel?',
          'W: Leaving on the eighth of August and coming back on the twenty-second.',
          'M: Let me see. There is a direct flight leaving at ten forty in the morning. The return fare is five hundred and sixty pounds, with one suitcase of up to twenty-three kilos.',
          "W: That's fine. Could I have a window seat?",
          "M: Of course. I'll need your full name as it appears on your passport.",
          "W: It's Julia Penrose. P-E-N-R-O-S-E.",
        ],
        qs: [
          ['What kind of ticket does the woman want?', 'A return ticket to Singapore', 'A single ticket to Singapore', 'A return ticket to Sydney', '"a return flight to Singapore".'],
          ['What does she ask for?', 'A window seat', 'A vegetarian meal', 'An extra suitcase', '"Could I have a window seat?"'],
        ],
        fill: [
          ['Return fare: £ ____', ['560', 'five hundred and sixty'], 'Năm trăm sáu mươi bảng.'],
          ['Baggage allowance: ____ kilos', ['23', 'twenty-three', 'twenty three'], 'Một va li tối đa hai mươi ba ký.'],
          ['Passenger’s surname: ____', ['Penrose'], 'Đánh vần P-E-N-R-O-S-E.'],
        ],
      },
      {
        title: 'Section 2 – Welcome talk for new employees',
        lines: [
          'W: Good morning and welcome to Norton and Hale. I am Sandra from Human Resources, and I would like to explain a few things about your first week.',
          'W: Our normal working hours are from eight thirty to five, with an hour for lunch. On Fridays the office closes at four.',
          'W: You will each receive a security card this morning. Please wear it at all times, because you need it to open the doors on every floor.',
          'W: The staff canteen is on the ground floor. Hot meals are served between twelve and two, and coffee is free all day.',
          'W: All new staff must complete an online safety course by the end of their second week.',
          'W: Finally, if you cycle to work, there are showers and bike racks in the basement.',
        ],
        qs: [
          ['When does the office close on Fridays?', 'At four o’clock', 'At five o’clock', 'At half past eight', '"On Fridays the office closes at four".'],
          ['Why must staff wear their security card?', 'To open doors on every floor', 'To pay for meals', 'To use the car park', '"you need it to open the doors on every floor".'],
          ['What must new staff complete?', 'An online safety course', 'A medical examination', 'A written test', '"complete an online safety course by the end of their second week".'],
        ],
        fill: [
          ['The staff canteen is on the ____ floor.', ['ground'], 'Căng tin ở tầng trệt.'],
          ['Showers and bike racks are in the ____.', ['basement'], 'Ở tầng hầm.'],
        ],
      },
    ],
    reading: {
      title: 'Mapping the World',
      text: 'Maps are among the oldest forms of human communication. A clay tablet made in Babylon about 2,600 years ago shows the world as a flat disc surrounded by ocean, with Babylon itself at the centre. Like many early maps, it tells us more about the beliefs of its makers than about geography.\n\nThe Greeks approached the subject more scientifically. In the second century AD, Ptolemy, working in Alexandria, wrote a guide to drawing maps using lines of latitude and longitude. His work was forgotten in Europe for a thousand years, but it was preserved by Arab scholars and translated into Latin in the fifteenth century, just as European sailors were beginning to explore the oceans.\n\nSailors needed maps on which a route with a constant compass direction appeared as a straight line. In 1569 the Flemish map-maker Gerardus Mercator produced exactly that. His method became the standard for navigation, but it has a famous weakness: because the round Earth is stretched onto a flat sheet, areas far from the equator look much larger than they are. On a Mercator map, Greenland seems as big as Africa, although Africa is in fact about fourteen times larger.\n\nAccurate maps of whole countries required careful measurement on the ground. In the eighteenth century, France became the first nation to be fully surveyed, a task that took four generations of the Cassini family more than a hundred years.\n\nToday, satellites photograph every part of the planet, and digital maps are updated continuously. Yet choices remain. Every map-maker must decide what to include and what to leave out, and those decisions are never entirely neutral.',
      qs: [
        ['T', 'The Babylonian map placed its makers’ own city in the middle of the world.', 'Đoạn 1: "with Babylon itself at the centre".'],
        ['F', 'Ptolemy’s work remained well known in Europe throughout the Middle Ages.', 'Đoạn 2: bị lãng quên ở châu Âu suốt nghìn năm.'],
        ['NG', 'Mercator made several sea voyages himself.', 'Bài không nói ông có đi biển hay không.'],
        ['F', 'On a Mercator map, Africa looks far bigger than Greenland.', 'Đoạn 3: Greenland trông to bằng châu Phi.'],
        ['Who kept Ptolemy’s work from being lost?', 'Arab scholars', 'French map-makers', 'Babylonian priests', 'Flemish sailors', 'Đoạn 2: "preserved by Arab scholars".'],
        ['What point does the writer make in the final paragraph?', 'Maps always reflect choices made by their makers.', 'Satellite maps contain no errors.', 'Paper maps will soon return.', 'Digital maps are too expensive.', 'Đoạn cuối: quyết định đưa gì vào bản đồ không bao giờ hoàn toàn trung lập.'],
      ],
      fill: [
        ['Ptolemy used lines of latitude and ____.', ['longitude'], 'Đoạn 2: "latitude and longitude".'],
        ['The survey of France was carried out by the ____ family.', ['Cassini'], 'Đoạn 4: "the Cassini family".'],
      ],
    },
    task1: [
      'Pie chart: Household energy use',
      'The chart below shows how energy is used in an average home in one country, and the table shows the average yearly cost. Summarise the information by selecting and reporting the main features, and make comparisons where relevant.',
      'Use | Share of energy | Yearly cost\nHeating | 42% | $840\nWater heating | 18% | $360\nKitchen appliances | 15% | $300\nLighting | 10% | $200\nCooling | 9% | $180\nOther | 6% | $120',
      'The chart and table illustrate the ways in which energy is consumed in a typical household in a particular country, along with the amount of money spent on each use per year.\n\nOverall, heating the home is by far the largest use of energy and the greatest expense. The remaining categories each account for less than a fifth of the total.\n\nHeating is responsible for 42% of household energy, which costs the average family $840 a year. This is more than twice the figure for water heating, the second largest category, which makes up 18% of energy use and costs $360.\n\nKitchen appliances, such as cookers and refrigerators, consume 15% of the energy at a cost of $300. Lighting and cooling are similar to each other, accounting for 10% and 9% respectively, with yearly costs of $200 and $180.\n\nFinally, all other uses, including televisions and computers, represent only 6% of the total, or $120.\n\nIn summary, heating the house and heating water together make up 60% of energy consumption, so these are the areas in which a family could save the most money.',
    ],
    task2: [
      'Advantages and disadvantages: A year off before university',
      'In some countries, young people are encouraged to work or travel for a year between finishing school and starting university. Discuss the advantages and disadvantages of this for young people.',
      'In a number of countries it has become common for school leavers to take a year off before beginning their university studies. This so-called gap year may be spent working, travelling or volunteering. In this essay I will consider both the benefits and the drawbacks of the practice.\n\nThere are several clear advantages. After twelve years of continuous study, many students are tired, and a break allows them to return to education with fresh energy. Working for a year, even in a simple job, teaches young people how to manage money, arrive on time and cooperate with colleagues of different ages. Those who travel or volunteer abroad often become more independent and confident, and they may improve their foreign language skills as well. Perhaps most importantly, real experience helps young people decide what they actually want to study, which reduces the risk of choosing the wrong course.\n\nNevertheless, a gap year also carries risks. Some students find it difficult to return to studying after a year of freedom and earning money, and a few abandon their plans for university altogether. Skills such as mathematics, which require regular practice, may be partly forgotten. Travelling is expensive, so young people from poorer families may simply be unable to afford it, while their classmates gain an advantage. There is also the danger that an unplanned year is wasted at home doing very little.\n\nOn balance, I believe that the outcome depends on preparation. A year with clear aims, whether saving money, gaining work experience or learning a language, can be extremely valuable, whereas a year without a plan is likely to be a step backwards.\n\nIn conclusion, a gap year offers maturity and direction but may interrupt study habits, so it should be organised with care.',
    ],
    part1: ['Work', 'What job would you like to have in the future?', 'Is it better to work for a large company or a small one?', "I'd like to become a software developer, because I enjoy solving problems and the field is growing quickly. I think a large company is better at the beginning of a career, since it offers proper training, but a small one may give you more responsibility and variety."],
    part2: ['A job you would not like', ['Describe a job that you would not like to do.', 'You should say:', 'what the job is', 'what it involves', 'what kind of person does it well', 'and explain why you would not like it.'], "A job I really wouldn't like to do is working as an air traffic controller. As I understand it, controllers sit in a tower or a dark room full of screens and guide planes as they take off, land and cross each other's paths. They have to give clear instructions to many pilots at the same time and make decisions within seconds. The kind of person who does it well is someone who stays calm under pressure, concentrates for long periods and never panics. I admire those people, but I know I'm not one of them. I get nervous when I have to make an important decision quickly, and the idea that a small mistake could put hundreds of lives in danger would keep me awake at night. I'd also dislike working night shifts. I prefer a job where I have time to think things over."],
    part3: ['Jobs and careers', 'Why do some people change jobs frequently?', 'How will the world of work change in the next twenty years?', "Some people change jobs to get a higher salary or faster promotion, and others simply get bored and want a new challenge. Younger workers especially don't expect to stay with one employer for life. In the next twenty years I think far more people will work remotely, and many will have several careers. Workers will need to keep learning new skills as technology develops."],
  }),
];
