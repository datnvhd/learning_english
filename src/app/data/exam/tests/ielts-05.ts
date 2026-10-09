/** Bộ đề IELTS cố định – đề 17 đến 20 (định dạng rút gọn, xem helpers.ts) */
import { IeltsTest, ieltsTest } from './helpers';

export const TESTS: IeltsTest[] = [
  // =========================================================================== ĐỀ 17
  ieltsTest(17, {
    listening: [
      {
        title: 'Section 1 – Reserving a table for a birthday dinner',
        lines: [
          'W: Good afternoon, The Olive Tree restaurant.',
          "M: Hello, I'd like to reserve a table for a birthday dinner on Saturday the twenty-first.",
          'W: Certainly. For how many people?',
          'M: There will be fourteen of us. Do you have a private room?',
          'W: We do. It seats up to sixteen, and there is no extra charge if you choose our set menu, which is twenty-eight pounds per person for three courses.',
          'M: That sounds good. Could we bring our own birthday cake?',
          "W: Yes, of course. We'll keep it in the fridge for you. What time would you like to come?",
          "M: Half past seven, please. The name is Corbett, C-O-R-B-E-T-T.",
        ],
        qs: [
          ['What does the man ask about first?', 'A private room', 'A vegetarian menu', 'Live music', '"Do you have a private room?"'],
          ['What will the restaurant do with the cake?', 'Keep it in the fridge', 'Bake it for the party', 'Charge extra for serving it', '"We\'ll keep it in the fridge for you".'],
        ],
        fill: [
          ['Number of guests: ____', ['14', 'fourteen'], 'Mười bốn khách.'],
          ['Set menu: £ ____ per person', ['28', 'twenty-eight', 'twenty eight'], 'Hai mươi tám bảng một người cho ba món.'],
          ['Booking name: ____', ['Corbett'], 'Đánh vần C-O-R-B-E-T-T.'],
        ],
      },
      {
        title: 'Section 4 – Lecture on volcanoes',
        lines: [
          'M: Today’s topic is volcanoes, and I want to begin by correcting a common mistake. Volcanoes are not only destructive. They also bring considerable benefits.',
          'M: There are around fifteen hundred active volcanoes on land, and most of them lie around the edge of the Pacific Ocean, in a zone known as the Ring of Fire.',
          'M: Eruptions occur when melted rock, called magma, rises through cracks in the Earth’s crust. The most dangerous part of an eruption is often not the lava, which moves slowly, but the clouds of hot gas and ash that travel at great speed.',
          'M: So why do millions of people live near volcanoes? The main reason is that volcanic soil is extremely fertile, so farmers obtain excellent harvests.',
          'M: Volcanic areas also provide heat for electricity. Iceland, for example, heats nearly all of its houses in this way.',
          'M: Scientists now monitor volcanoes with satellites, which detect small changes in the shape of the ground before an eruption.',
        ],
        qs: [
          ['Where are most active volcanoes found?', 'Around the edge of the Pacific Ocean', 'In the middle of Africa', 'Near the North Pole', 'Vành đai lửa quanh Thái Bình Dương.'],
          ['What is often the most dangerous part of an eruption?', 'Fast clouds of hot gas and ash', 'Slow-moving lava', 'Loud noise', '"the clouds of hot gas and ash that travel at great speed".'],
          ['How do satellites help scientists?', 'They detect changes in the shape of the ground.', 'They cool the volcano down.', 'They measure the price of crops.', 'Vệ tinh phát hiện thay đổi nhỏ về hình dạng mặt đất.'],
        ],
        fill: [
          ['Melted rock under the ground is called ____.', ['magma'], '"melted rock, called magma".'],
          ['Volcanic soil is extremely ____.', ['fertile'], 'Đất núi lửa rất màu mỡ ("fertile").'],
        ],
      },
    ],
    reading: {
      title: 'Holding Back the Sea',
      text: 'About a quarter of the Netherlands lies below sea level, and without protection more than half the country would be flooded regularly. For over a thousand years the Dutch have therefore been engaged in a struggle with water. Early inhabitants built their homes on artificial mounds; later they constructed earth walls called dikes around low land and used windmills to pump the water out. The areas of dry land created in this way are known as polders.\n\nThe system has not always held. In February 1953 a severe storm in the North Sea combined with a high tide and broke through the dikes in the south-west of the country during the night. More than 1,800 people were drowned and tens of thousands of farm animals were lost.\n\nThe government’s response was the Delta Works, one of the largest engineering projects in history. Over the following four decades, a series of dams and barriers was built to close off the river mouths from the sea. The most remarkable of them, the Eastern Scheldt barrier, has sixty-two huge steel gates that normally stay open so that the tide can flow in and out, protecting the fish and birds of the area. The gates are lowered only when a dangerous storm is forecast.\n\nIn recent years Dutch thinking has changed. With sea levels rising and rivers carrying more water after heavy rain, engineers accept that walls cannot simply be built higher for ever. A programme called "Room for the River" has moved some dikes further back and returned farmland to the rivers, giving floodwater space to spread safely. Dutch experts now advise cities around the world that face similar threats.',
      qs: [
        ['T', 'Windmills were used to remove water from low-lying land.', 'Đoạn 1: cối xay gió bơm nước ra ngoài.'],
        ['F', 'The 1953 flood happened during the daytime.', 'Đoạn 2: xảy ra trong đêm ("during the night").'],
        ['NG', 'The Delta Works cost more than the government had planned.', 'Bài không nói về chi phí.'],
        ['F', 'The gates of the Eastern Scheldt barrier are normally kept closed.', 'Đoạn 3: bình thường mở để thủy triều ra vào.'],
        ['Why were the gates of the Eastern Scheldt barrier designed to stay open?', 'To protect the wildlife of the area', 'To let ships carry steel', 'To save electricity', 'To allow tourists to visit', 'Đoạn 3: bảo vệ cá và chim trong vùng.'],
        ['What is the idea behind "Room for the River"?', 'Giving floodwater space to spread safely', 'Building much higher walls', 'Moving cities to higher ground', 'Closing every river mouth', 'Đoạn cuối: lùi đê, trả đất cho sông.'],
      ],
      fill: [
        ['Earth walls built around low land are called ____.', ['dikes'], 'Đoạn 1: "earth walls called dikes".'],
        ['Dry land created by pumping out water is known as ____.', ['polders'], 'Đoạn 1: "known as polders".'],
      ],
    },
    task1: [
      'Bar chart: What people do on their smartphones',
      'The chart below shows the percentage of smartphone users in two age groups who used their phones for five activities at least once a day in 2022. Summarise the information by selecting and reporting the main features, and make comparisons where relevant.',
      'Activity | Aged 18–29 | Aged 60+\nMessaging | 95% | 78%\nSocial media | 88% | 35%\nWatching videos | 80% | 30%\nReading news | 45% | 62%\nOnline shopping | 40% | 12%',
      'The bar chart compares how young adults and people over sixty used their smartphones on a daily basis in 2022, focusing on five common activities.\n\nOverall, the younger group was more active in four of the five categories, and the gap was particularly wide for entertainment. Reading the news was the only activity that was more popular among older users. Messaging was the most common activity for both groups.\n\nAlmost all users aged 18 to 29 (95%) sent messages every day, and so did 78% of those aged 60 and over. However, the two groups differed sharply in their use of social media and video. While 88% of young adults visited social media daily and 80% watched videos, the corresponding figures for the older group were only 35% and 30%.\n\nThe pattern was reversed for news. Some 62% of older users read the news on their phones each day, compared with 45% of the younger group.\n\nFinally, online shopping was the least frequent activity overall. It was carried out daily by 40% of young adults but by just 12% of older people.',
    ],
    task2: [
      'Opinion: Caring for elderly people',
      'In many countries, the proportion of elderly people is increasing. Some people believe that families should take care of their elderly relatives, while others think the government should be responsible. To what extent do you agree that the family has the main responsibility?',
      'As people live longer, the question of who should look after the elderly has become urgent. In many cultures this duty has always belonged to the family, but some argue that the state should now take it over. In my opinion, the family should remain at the centre of care, although it cannot carry the burden alone.\n\nThere are good reasons why families should take the leading role. Parents spend decades raising their children, so it seems only fair that their children support them in return. More importantly, elderly people generally feel happier and more secure when they are surrounded by relatives who know and love them. No professional carer, however kind, can replace a grandchild’s visit. Research also shows that old people who live with their families remain mentally active for longer than those in institutions.\n\nHowever, modern life makes this responsibility much harder than it used to be. Families are smaller, adult children often work in distant cities, and in most households both partners have full-time jobs. Caring for a parent with a serious illness requires medical knowledge and constant attention, and a daughter or son who gives up work to provide it may fall into poverty.\n\nThis is where the government must help. It should provide adequate pensions and free health care so that old people do not depend financially on their children. It should also fund services such as home nurses, day centres and short-term care, which allow relatives to rest and continue working.\n\nIn conclusion, I largely agree that the family has the main responsibility for its elderly members, because of the emotional support that only relatives can give. Nevertheless, without practical and financial assistance from the state, many families will be unable to fulfil that duty.',
    ],
    part1: ['Family', 'How much time do you spend with your family?', 'Who are you closest to in your family?', "Not as much as I'd like, since I work in another city, but I go home about once a month and we talk on video calls most evenings. I'm closest to my older sister. We shared a room when we were growing up, and I still tell her everything."],
    part2: ['An elderly person you admire', ['Describe an elderly person that you admire.', 'You should say:', 'who this person is', 'how you know him or her', 'what he or she is like', 'and explain why you admire this person.'], "The elderly person I admire most is my grandmother on my mother's side, who is now eighty-two. She lives in a small village about two hours from my city, and I spent every summer with her when I was a child. She's a tiny woman with silver hair and a very loud laugh. Although she only went to school for three years, she's one of the wisest people I know. She raised five children on her own after my grandfather died, growing rice and selling vegetables at the market. What I admire most is her positive attitude. She never complains about the past, and she's always curious. Last year she asked me to teach her how to use a smartphone so that she could see photos of her great-grandchildren. Whenever I feel sorry for myself, I think of her and my problems seem very small."],
    part3: ['Older people in society', 'What can young people learn from older people?', 'Should people be required to retire at a certain age?', "Young people can learn patience and practical wisdom from the older generation. Old people have lived through difficult times, so they know how to cope with failure and how to save money. On retirement, I don't think there should be a fixed age for everyone. Some jobs are physically demanding, but in others people can easily work longer, so it ought to be flexible."],
  }),

  // =========================================================================== ĐỀ 18
  ieltsTest(18, {
    listening: [
      {
        title: 'Section 1 – At the student accommodation office',
        lines: [
          'M: Accommodation office, good morning.',
          "W: Good morning. I'm starting a course in September and I would like to apply for a room in a hall of residence.",
          'M: Of course. We have two halls. Kingsley Hall is on campus and costs one hundred and twenty-five pounds a week, with a shared kitchen. Brook House is about fifteen minutes away by bus and costs ninety-eight pounds.',
          'W: I would prefer to be on campus. Do the rooms have their own bathroom?',
          'M: Yes, all the rooms in Kingsley Hall do. You need to pay a deposit of two hundred pounds to reserve a room.',
          'W: Fine. When can I move in?',
          "M: From the fourteenth of September. Can I take your surname? ... Lindqvist. L-I-N-D-Q-V-I-S-T. Thank you.",
        ],
        qs: [
          ['Which hall does the woman choose?', 'Kingsley Hall', 'Brook House', 'She has not decided yet', '"I would prefer to be on campus" – Kingsley Hall ở trong khuôn viên.'],
          ['What do all rooms in Kingsley Hall have?', 'Their own bathroom', 'Their own kitchen', 'A balcony', 'Mọi phòng đều có phòng tắm riêng; bếp dùng chung.'],
        ],
        fill: [
          ['Kingsley Hall: £ ____ a week', ['125', 'one hundred and twenty-five', 'one hundred and twenty five'], 'Một trăm hai mươi lăm bảng một tuần.'],
          ['Deposit: £ ____', ['200', 'two hundred'], 'Đặt cọc hai trăm bảng.'],
          ['Student’s surname: ____', ['Lindqvist'], 'Đánh vần L-I-N-D-Q-V-I-S-T.'],
        ],
      },
      {
        title: 'Section 2 – News from the Riverside community theatre',
        lines: [
          'W: This is Radio Wessex, and here is the arts report. The Riverside Community Theatre has announced its programme for the autumn.',
          'W: The season opens in October with a comedy written by a local teacher. It will run for two weeks.',
          'W: In November the theatre presents a musical, and the director is looking for singers and dancers aged between sixteen and twenty-five. Auditions will be held on the fifth of September.',
          'W: You do not have to perform to get involved. The theatre also needs volunteers to paint scenery, make costumes and sell tickets.',
          'W: Tickets for all shows cost nine pounds, or six pounds for students.',
          'W: The theatre itself is celebrating too. It is fifty years since it opened in a former fire station.',
        ],
        qs: [
          ['Who wrote the comedy that opens the season?', 'A local teacher', 'A famous actor', 'The theatre director', '"a comedy written by a local teacher".'],
          ['What kind of volunteers are needed?', 'People to paint scenery and make costumes', 'People to write new plays', 'People to repair the roof', '"volunteers to paint scenery, make costumes and sell tickets".'],
          ['What was the theatre building before?', 'A fire station', 'A cinema', 'A school', '"opened in a former fire station".'],
        ],
        fill: [
          ['Auditions will be held on the fifth of ____.', ['September'], 'Thử vai ngày 5 tháng Chín.'],
          ['Student tickets cost £ ____.', ['6', 'six'], 'Vé sinh viên sáu bảng.'],
        ],
      },
    ],
    reading: {
      title: 'The Power of Expectation',
      text: 'A placebo is a treatment with no active ingredient, such as a sugar pill, given to a patient who believes it to be real medicine. The surprising fact is that many patients feel better after taking one. This "placebo effect" was brought to public attention in 1955 by an American doctor, Henry Beecher, who had noticed during the Second World War that wounded soldiers given injections of salt water, when painkillers had run out, often reported that their pain had eased.\n\nBeecher claimed that about a third of patients respond to placebos. Later researchers have questioned that figure, pointing out that many people recover naturally, whatever they are given. Nevertheless, carefully controlled studies confirm that the effect is real for some conditions, especially pain, sleeplessness and depression. Brain scans show that when a person expects relief, the brain releases its own pain-reducing chemicals.\n\nThe details are curious. Two pills work better than one, injections work better than pills, and expensive placebos work better than cheap ones. Colour matters too: blue pills tend to calm people, while red ones seem to stimulate them. Perhaps most remarkably, some recent experiments suggest that placebos can help even when patients are told honestly that they are taking pills containing no medicine.\n\nThere are limits. Placebos may change how ill a person feels, but they do not shrink tumours or cure infections. Because of the effect, however, every new drug must be tested against a placebo, with neither patients nor doctors knowing who receives which. A drug is approved only if it performs clearly better. The opposite also exists: patients who expect side effects often experience them, even from a sugar pill.',
      qs: [
        ['T', 'Beecher observed the placebo effect among injured soldiers.', 'Đoạn 1: lính bị thương được tiêm nước muối.'],
        ['F', 'All later researchers have accepted Beecher’s figure of one third.', 'Đoạn 2: các nhà nghiên cứu sau này nghi ngờ con số đó.'],
        ['NG', 'Placebos are more effective for women than for men.', 'Bài không so sánh nam và nữ.'],
        ['F', 'Placebos have been shown to cure infections.', 'Đoạn 4: không làm nhỏ khối u hay chữa nhiễm trùng.'],
        ['According to the passage, which placebo would probably work best?', 'An expensive injection', 'A single cheap pill', 'Two cheap pills', 'A blue pill taken once', 'Đoạn 3: tiêm hiệu quả hơn thuốc viên, đắt hiệu quả hơn rẻ.'],
        ['Why must new drugs be tested against a placebo?', 'To show they work better than expectation alone', 'To make them cheaper to produce', 'To reduce their side effects', 'To train new doctors', 'Đoạn 4: thuốc chỉ được duyệt nếu tốt hơn hẳn giả dược.'],
      ],
      fill: [
        ['When painkillers ran out, soldiers were given injections of ____ water.', ['salt'], 'Đoạn 1: "injections of salt water".'],
        ['Blue pills tend to ____ people.', ['calm'], 'Đoạn 3: "blue pills tend to calm people".'],
      ],
    },
    task1: [
      'Line graph: Population by age group',
      'The graph below shows the percentage of the population in three age groups in one country from 1980 to 2020, with a prediction for 2040. Summarise the information by selecting and reporting the main features, and make comparisons where relevant.',
      'Age group | 1980 | 2000 | 2020 | 2040 (predicted)\n0–14 | 34% | 26% | 19% | 15%\n15–64 | 60% | 66% | 67% | 61%\n65+ | 6% | 8% | 14% | 24%',
      'The line graph illustrates how the age structure of one country’s population changed between 1980 and 2020 and how it is expected to change by 2040.\n\nOverall, the population is ageing rapidly. The proportion of children has fallen continuously, while the share of people aged 65 and over has risen and is predicted to grow much faster in the future. People of working age have formed the majority throughout.\n\nIn 1980, children under 15 made up just over a third of the population (34%). This figure dropped to 26% in 2000 and to 19% in 2020, and it is forecast to decline further to 15% by 2040.\n\nThe elderly show the opposite trend. Only 6% of the population was aged 65 or older in 1980. After a small rise to 8% in 2000, the figure reached 14% in 2020 and is projected to climb to 24%, which would be four times the original level.\n\nThe working-age group increased from 60% to 67% between 1980 and 2020, but it is expected to fall back to 61% in 2040, when older people will outnumber children for the first time.',
    ],
    task2: [
      'Discussion: Prevention or treatment?',
      'Some people believe that governments should spend more money on preventing illness, for example through health education. Others think that most of the health budget should be spent on treating people who are already ill. Discuss both views and give your own opinion.',
      'Health services everywhere face rising costs, so governments must decide how to use limited funds. Some people argue that more should be invested in prevention, whereas others believe that treating the sick must remain the priority. This essay will look at both sides of the debate.\n\nThose who favour prevention point out that many of today’s most common diseases are linked to lifestyle. Heart disease, diabetes and several kinds of cancer are often caused by smoking, poor diet and lack of exercise. Campaigns that persuade people to change their habits, together with vaccinations and regular health checks, cost far less than years of hospital treatment. For instance, anti-smoking education and taxes on cigarettes have dramatically reduced lung cancer in a number of countries. Prevention also spares people a great deal of suffering.\n\nOn the other hand, there are strong arguments for concentrating on treatment. People who are already ill need help immediately, and it would be unacceptable to make them wait because money had been moved to advertising campaigns. Moreover, the results of prevention are uncertain and appear only after many years, while not all illnesses can be prevented; accidents and inherited conditions will always occur. Modern treatments are expensive, and hospitals in many countries are already short of doctors, nurses and equipment.\n\nIn my opinion, the two approaches should not be seen as rivals. Treatment must obviously continue to receive the larger share of the budget, but the proportion devoted to prevention, which is currently tiny in most countries, should be increased gradually. Every case of illness that is avoided releases resources for patients who cannot be helped in any other way.\n\nIn conclusion, while caring for the sick is the first duty of a health service, I believe that greater investment in prevention is the wisest long-term policy.',
    ],
    part1: ['Keeping healthy', 'What do you do to stay healthy?', 'How many hours do you usually sleep at night?', "I try to walk at least thirty minutes a day and I avoid sugary drinks, although I admit I love coffee. I usually sleep about seven hours on weekdays. At weekends I catch up a little and sleep for eight or nine."],
    part2: ['A time you were ill', ['Describe a time when you were ill.', 'You should say:', 'when it was', 'what the symptoms were', 'what you did to get better', 'and explain how you felt during that time.'], "I'd like to talk about the time I had dengue fever, which is quite common in my country. It happened four years ago, during the rainy season. It started suddenly with a very high temperature and a terrible headache, and after two days every muscle in my body ached. At first I thought it was just flu and stayed in bed, but my mother insisted on taking me to the hospital, where a blood test confirmed dengue. There is no special medicine for it, so I stayed in hospital for five days, drinking a lot of water and having my blood checked every morning. I felt weak and rather frightened, especially at night, and I was worried about missing my exams. At the same time I was touched by how many friends came to visit. That experience taught me not to ignore symptoms."],
    part3: ['Health care', 'Why do some people avoid going to the doctor?', 'How can governments encourage healthier lifestyles?', "Some people avoid doctors because of the cost or the long waiting times, and others are simply afraid of receiving bad news, so they prefer not to know. Governments can encourage healthier lifestyles in several ways: by taxing unhealthy products like tobacco, by building public sports facilities, and by teaching children about nutrition from an early age."],
  }),

  // =========================================================================== ĐỀ 19
  ieltsTest(19, {
    listening: [
      {
        title: 'Section 1 – Arranging a home internet connection',
        lines: [
          'M: FibreLink customer service, how may I help?',
          "W: Hi, I've just moved into a new flat and I need an internet connection.",
          'M: Certainly. We have two packages. The standard package is twenty-seven pounds a month, and the fast package is thirty-six pounds.',
          'W: I work from home, so I think I need the fast one. Is there a fee for installation?',
          'M: Normally it is forty pounds, but this month installation is free.',
          'W: Great. How soon could an engineer come?',
          'M: The earliest date is Thursday the twelfth, between one and five in the afternoon. Someone must be at home.',
          "W: That's fine. The address is Flat Six, forty-one Quarry Lane. Quarry is spelled Q-U-A-R-R-Y.",
        ],
        qs: [
          ['Why does the woman choose the fast package?', 'She works from home.', 'It is cheaper this month.', 'She watches a lot of films.', '"I work from home, so I think I need the fast one".'],
          ['What does the man say about installation?', 'It is free this month.', 'It costs forty pounds this month.', 'It takes two days.', 'Bình thường bốn mươi bảng nhưng tháng này miễn phí.'],
        ],
        fill: [
          ['Fast package: £ ____ a month', ['36', 'thirty-six', 'thirty six'], 'Ba mươi sáu bảng mỗi tháng.'],
          ['Engineer’s visit: ____ the twelfth', ['Thursday'], 'Thứ Năm ngày mười hai.'],
          ['Address: Flat 6, 41 ____ Lane', ['Quarry'], 'Đánh vần Q-U-A-R-R-Y.'],
        ],
      },
      {
        title: 'Section 3 – Students discuss the results of a survey',
        lines: [
          'M: Right, Amy, I have put all the answers from our survey on student spending into a spreadsheet.',
          'W: Great. How many people replied in the end?',
          'M: One hundred and twelve, which is more than we expected. The biggest expense is rent, of course, followed by food.',
          'W: What surprised me is how little students spend on books. It was the smallest category.',
          'M: Yes, most people said they use the library or read online. Another interesting result is that nearly half of the students have a part-time job.',
          'W: We should show that in a pie chart. I think the weakness of our survey is that almost everyone who replied was a first-year student.',
          "M: Good point. We'll mention that in the conclusion.",
        ],
        qs: [
          ['What is the biggest expense for students?', 'Rent', 'Food', 'Books', '"The biggest expense is rent, of course, followed by food".'],
          ['Why do students spend little on books?', 'They use the library or read online.', 'Books are provided free.', 'They share books with friends.', '"most people said they use the library or read online".'],
          ['What is the weakness of the survey?', 'Most of those who replied were first-year students.', 'Too few people replied.', 'The questions were too long.', '"almost everyone who replied was a first-year student".'],
        ],
        fill: [
          ['Number of replies: ____', ['112', 'one hundred and twelve'], 'Một trăm mười hai người trả lời.'],
          ['Nearly ____ of the students have a part-time job.', ['half'], '"nearly half of the students have a part-time job".'],
        ],
      },
    ],
    reading: {
      title: 'The Statues of Easter Island',
      text: 'Easter Island, known to its inhabitants as Rapa Nui, is one of the most isolated inhabited places on Earth. It lies in the Pacific Ocean, more than three thousand kilometres from the coast of South America. Polynesian sailors settled there about eight hundred years ago, and their descendants carved the giant stone figures, called moai, for which the island is famous. Nearly a thousand have been counted. Most are about four metres tall, and the heaviest weighs more than eighty tonnes.\n\nAlmost all the statues were cut from the soft volcanic rock of a single quarry, where hundreds of unfinished figures still lie. The great puzzle is how they were moved, in some cases for eighteen kilometres, without wheels or large animals. The islanders’ own tradition says simply that the statues walked. In 2012 researchers tested this idea with a concrete copy weighing five tonnes: three teams pulling on ropes rocked it from side to side, and it moved forward upright, as if walking.\n\nWhen Europeans first arrived in 1722, they found an island with hardly any trees. For many years the popular explanation was that the islanders had cut down their forests to transport statues, and that their society had then collapsed in hunger and war. Recent research has challenged this story. Seeds found in the soil show marks of rats’ teeth, suggesting that rats brought by the first settlers ate the seeds and prevented the palm forest from growing again. Evidence of widespread warfare is weak, and the population appears to have fallen sharply only after 1722, when visitors introduced new diseases and slave ships carried many islanders away.',
      qs: [
        ['T', 'Easter Island is a very long way from any continent.', 'Đoạn 1: cách bờ Nam Mỹ hơn ba nghìn kilômét.'],
        ['F', 'The statues were carved from stone taken from many different quarries.', 'Đoạn 2: hầu hết từ MỘT mỏ đá duy nhất.'],
        ['NG', 'The 2012 experiment was filmed for television.', 'Bài không đề cập việc quay phim.'],
        ['F', 'Recent research confirms that war destroyed island society before 1722.', 'Đoạn 3: bằng chứng chiến tranh yếu; dân số giảm mạnh sau 1722.'],
        ['What did the 2012 experiment demonstrate?', 'A statue could be moved upright using ropes.', 'Statues were rolled on tree trunks.', 'Statues were carried by boats.', 'The statues were made of concrete.', 'Đoạn 2: kéo dây lắc qua lại, tượng tiến lên như đang đi.'],
        ['According to recent research, why did the palm forest fail to recover?', 'Rats ate the seeds.', 'The soil was poisoned by volcanic ash.', 'Europeans burned the trees.', 'There was too little rain.', 'Đoạn 3: hạt có vết răng chuột.'],
      ],
      fill: [
        ['The giant stone figures are called ____.', ['moai'], 'Đoạn 1: "called moai".'],
        ['After 1722, visitors introduced new ____ to the island.', ['diseases'], 'Đoạn cuối: "introduced new diseases".'],
      ],
    },
    task1: [
      'Table: Spending by tourists',
      'The table below shows the average amount of money (in US dollars) spent per day by tourists from four countries visiting one island, and how the money was divided. Summarise the information by selecting and reporting the main features, and make comparisons where relevant.',
      'Visitors from | Total per day | Accommodation | Food | Shopping | Activities\nCountry A | $210 | 45% | 25% | 10% | 20%\nCountry B | $160 | 40% | 30% | 20% | 10%\nCountry C | $130 | 35% | 30% | 25% | 10%\nCountry D | $95 | 50% | 35% | 5% | 10%',
      'The table compares the daily spending of tourists from four different countries on a particular island and shows what proportion of their money went on accommodation, food, shopping and activities.\n\nOverall, visitors from Country A spent the most, more than twice as much as those from Country D. For all four groups, accommodation was the largest expense, followed by food.\n\nTourists from Country A spent an average of $210 a day. Almost half of this (45%) was used for accommodation, and they devoted a higher share to activities, 20%, than any other group. Visitors from Country B spent $160, of which 40% went on accommodation and 30% on food.\n\nPeople from Country C spent somewhat less in total, $130, but they were the keenest shoppers. A quarter of their budget was spent in shops, compared with only 10% for Country A.\n\nFinally, visitors from Country D had the lowest daily budget, at $95. They spent 85% of it on basic needs, namely accommodation (50%) and food (35%), leaving just 5% for shopping and 10% for activities.',
    ],
    task2: [
      'Opinion: Old buildings or new development?',
      'Some people think that old buildings should be knocked down to make way for modern housing and offices. To what extent do you agree or disagree?',
      'As cities expand, land becomes scarce, and old buildings are frequently demolished so that modern apartments and offices can take their place. Some people regard this as inevitable progress. I disagree with the view that old buildings should generally be removed, although I accept that not every old structure can be saved.\n\nThe argument for redevelopment is mainly practical. Many old buildings are in poor condition, with weak structures, small rooms and no proper heating or lifts. Repairing them is often more expensive than building something new. Furthermore, a modern tower on the same piece of land can house ten times as many families, which is a significant advantage in cities where young people cannot find anywhere affordable to live.\n\nNevertheless, I believe there are more important reasons to protect historic buildings. Above all, they are a record of a city’s past. Old temples, markets and streets show how earlier generations lived, and once they have been destroyed they can never be replaced. They also give each city its own character. If every old district is cleared, cities all over the world will look exactly the same, with identical glass towers and shopping centres. In addition, historic areas attract tourists and therefore create income; cities such as Hoi An and Prague owe much of their prosperity to their old centres.\n\nIn my view, a compromise is possible. Buildings of real historical or artistic value should be protected by law and given new functions as hotels, museums or offices, while their interiors are modernised. New housing can be built on empty industrial land or on the edges of the city instead.\n\nIn conclusion, although some unsafe buildings must be replaced, I am convinced that preserving the best of the old alongside the new creates richer and more attractive cities.',
    ],
    part1: ['History', 'Did you enjoy studying history at school?', 'Do you like visiting historical places?', "To be honest, not much at the time, because we mostly had to memorise dates. I've become much more interested as an adult. I do enjoy visiting historical places now, especially old towns, since walking through them makes the past feel real."],
    part2: ['A historical place', ['Describe a historical place that you have visited.', 'You should say:', 'where it is', 'when you went there', 'what you saw', 'and explain what you learned from the visit.'], "I'd like to describe the Imperial City in Hue, which was the home of Vietnam's last royal family. I went there two years ago with a group of friends. The site is surrounded by thick stone walls and a wide moat, and you enter through an enormous gate with a yellow roof. Inside there are palaces, temples and gardens, although many buildings were destroyed during the wars of the twentieth century and are still being restored. We hired a guide, who showed us the hall where the emperor received visitors and told us stories about daily life at court. What I learned was how complicated that life was, with strict rules about colours, clothes and even food. I also realised how much of our heritage has been lost, and it made me appreciate the people who are working patiently to rebuild it."],
    part3: ['History and heritage', 'Why is it important to learn about history?', 'How can museums attract more young visitors?', "I think history helps us understand why our society is the way it is, and it can stop us repeating the same mistakes. It also gives people a sense of identity. To attract young visitors, museums need to be more interactive. Instead of only displaying objects behind glass, they could use games, virtual reality and evening events with music."],
  }),

  // =========================================================================== ĐỀ 20
  ieltsTest(20, {
    listening: [
      {
        title: 'Section 1 – Registering for a charity run',
        lines: [
          'W: Hello, Harbour Charity Run. How can I help?',
          "M: Hi, I'd like to register for the run next month.",
          'W: Wonderful. We have a five-kilometre run and a ten-kilometre run. Which one would you like?',
          "M: The ten-kilometre one, please. I've been training for it.",
          'W: The entry fee is eighteen pounds, and all the money goes to the children’s hospital. The run starts at nine in the morning from the harbour car park, but please arrive by eight fifteen to collect your number.',
          'M: Is there somewhere to leave a bag?',
          'W: Yes, there will be a tent for bags next to the start line. And every runner receives a medal and a T-shirt. Could I take your name? ... Mr. Ashcroft, A-S-H-C-R-O-F-T.',
        ],
        qs: [
          ['Which run does the man register for?', 'The ten-kilometre run', 'The five-kilometre run', 'The half marathon', '"The ten-kilometre one, please".'],
          ['Where does the money go?', 'To the children’s hospital', 'To the harbour authority', 'To a running club', '"all the money goes to the children’s hospital".'],
        ],
        fill: [
          ['Entry fee: £ ____', ['18', 'eighteen'], 'Phí tham gia mười tám bảng.'],
          ['Every runner receives a ____ and a T-shirt.', ['medal'], 'Mỗi người chạy nhận huy chương và áo thun.'],
          ['Runner’s surname: ____', ['Ashcroft'], 'Đánh vần A-S-H-C-R-O-F-T.'],
        ],
      },
      {
        title: 'Section 4 – Lecture on insects as food',
        lines: [
          'W: In this session we consider a food source that may become much more important in future: insects.',
          'W: This is not a new idea. Around two billion people, mainly in Asia, Africa and Latin America, already eat insects as part of their normal diet.',
          'W: From a nutritional point of view, insects are excellent. Crickets, for example, contain about as much protein as beef, as well as iron and vitamins.',
          'W: The environmental argument is even stronger. To produce one kilo of protein, crickets need roughly twelve times less feed than cattle, and they release far fewer greenhouse gases.',
          'W: The main obstacle in Western countries is psychological. Many consumers feel disgust at the idea of eating insects.',
          'W: For that reason, companies now grind insects into flour, which can be added to bread, pasta and snack bars without anyone noticing.',
        ],
        qs: [
          ['Where do most people who eat insects live?', 'In Asia, Africa and Latin America', 'In Europe and North America', 'In Australia', '"mainly in Asia, Africa and Latin America".'],
          ['What is the main obstacle in Western countries?', 'People feel disgust at the idea.', 'Insects are too expensive.', 'Insects are illegal to sell.', '"The main obstacle in Western countries is psychological".'],
          ['How are companies making insects more acceptable?', 'By grinding them into flour', 'By colouring them green', 'By selling them alive', '"companies now grind insects into flour".'],
        ],
        fill: [
          ['About ____ billion people already eat insects.', ['2', 'two'], 'Khoảng hai tỉ người.'],
          ['Crickets contain about as much ____ as beef.', ['protein'], 'Dế chứa lượng đạm tương đương thịt bò.'],
        ],
      },
    ],
    reading: {
      title: 'Planets Beyond the Sun',
      text: 'For centuries astronomers wondered whether stars other than the Sun had planets of their own, but there seemed to be no way of finding out. A planet gives off no light and is lost in the glare of its star, like a moth beside a searchlight. The breakthrough came in 1995, when the Swiss astronomers Michel Mayor and Didier Queloz announced the discovery of a planet circling the star 51 Pegasi, about fifty light years away.\n\nThey had not seen the planet itself. As a planet orbits, its gravity pulls the star slightly to and fro, and this tiny wobble can be detected in the star’s light. The new world astonished scientists: it was about half as massive as Jupiter, yet it lay so close to its star that it completed an orbit in only four days. Nothing in our own solar system resembled it.\n\nA second method soon proved even more productive. If a planet passes directly in front of its star, the star’s light dims by a tiny fraction at regular intervals. The Kepler space telescope, launched in 2009, watched more than 150,000 stars for such dips and found thousands of planets. More than five thousand are now confirmed, and astronomers estimate that planets outnumber stars in our galaxy.\n\nAttention has turned to worlds in the "habitable zone", the region around a star where temperatures would allow liquid water to exist on the surface. Being in this zone does not mean a planet has life, or even water. The next step is to study the starlight that filters through a planet’s atmosphere, which can reveal gases such as oxygen and methane. Finding both together would be an exciting hint that something is alive there.',
      qs: [
        ['T', 'Planets around other stars are difficult to see because their stars are so bright.', 'Đoạn 1: hành tinh chìm trong ánh chói của ngôi sao.'],
        ['F', 'Mayor and Queloz photographed the planet orbiting 51 Pegasi.', 'Đoạn 2: họ KHÔNG nhìn thấy hành tinh, chỉ đo dao động của sao.'],
        ['NG', 'The Kepler telescope cost more than any earlier space telescope.', 'Bài không nói về chi phí.'],
        ['F', 'A planet in the habitable zone is certain to have water.', 'Đoạn 4: không có nghĩa là có sự sống hay nước.'],
        ['What surprised scientists about the planet found in 1995?', 'It was very large but extremely close to its star.', 'It was smaller than the Moon.', 'It had no star at all.', 'It took fifty years to complete an orbit.', 'Đoạn 2: nặng bằng nửa Sao Mộc nhưng quay một vòng chỉ bốn ngày.'],
        ['How did the Kepler telescope find planets?', 'By detecting regular dips in the light of stars', 'By measuring the wobble of stars', 'By listening for radio signals', 'By photographing planets directly', 'Đoạn 3: ánh sáng sao mờ đi đều đặn khi hành tinh đi ngang.'],
      ],
      fill: [
        ['A planet’s ____ pulls its star slightly to and fro.', ['gravity'], 'Đoạn 2: "its gravity pulls the star".'],
        ['Finding oxygen and ____ together would hint at life.', ['methane'], 'Đoạn cuối: "oxygen and methane".'],
      ],
    },
    task1: [
      'Bar chart: Reasons for studying online',
      'The chart below shows the main reasons given by adults in two age groups for taking an online course in 2023. Summarise the information by selecting and reporting the main features, and make comparisons where relevant.',
      'Reason | Aged 20–35 | Aged 50–65\nTo get a better job | 48% | 12%\nPersonal interest | 15% | 46%\nRequired by employer | 22% | 20%\nTo change career | 12% | 6%\nTo meet people | 3% | 16%',
      'The bar chart compares the main motives of two groups of adults, those aged 20 to 35 and those aged 50 to 65, for enrolling in an online course in 2023.\n\nOverall, the younger group studied mainly for professional reasons, whereas the older group was motivated chiefly by personal interest. The proportion who studied because their employer required it was almost the same in both groups.\n\nNearly half of the younger adults (48%) took a course in order to get a better job, compared with only 12% of the older adults. A further 12% of the younger group wanted to change career, which was twice the figure for those aged 50 to 65.\n\nBy contrast, personal interest was the leading reason among older learners, mentioned by 46% of them but by just 15% of the younger group. Older adults were also far more likely to study in order to meet people, at 16% against 3%.\n\nFinally, around a fifth of each group, 22% of the younger and 20% of the older adults, said that the course had been required by their employer.',
    ],
    task2: [
      'Discussion: Money and happiness',
      'Some people believe that having a high income is the most important factor in a happy life. Others say that happiness depends on other things. Discuss both views and give your own opinion.',
      'What makes people happy is one of the oldest questions in philosophy. In modern society, many people assume that the answer is money, while others insist that relationships, health and purpose matter far more. This essay will examine both opinions.\n\nThere is no doubt that income affects wellbeing. People who cannot pay their rent or afford medical treatment live with constant anxiety, and it is difficult to be happy when basic needs are not met. A good salary also provides freedom: the freedom to live in a safe neighbourhood, to give one’s children a good education, to travel and to retire in comfort. International surveys consistently show that people in wealthier countries report greater satisfaction with their lives than people in very poor ones.\n\nHowever, the same research suggests that money has limits. Once a household earns enough to live comfortably, further increases bring much smaller improvements in happiness. Many highly paid professionals work extremely long hours and have little time for family or rest. What appears to matter more at that point is the quality of our relationships. A well-known Harvard study, which followed the same group of men for over seventy years, found that close friendships and a stable family life were the best predictors of both happiness and health in old age. A sense of purpose, whether from work, faith or helping others, is also essential.\n\nIn my opinion, money is necessary but not sufficient. It removes many causes of unhappiness, yet it cannot buy friendship, good health or meaning. People who sacrifice all of these in order to earn more often regret it later.\n\nIn conclusion, although a reasonable income is the foundation of a secure life, I believe that lasting happiness depends mainly on human relationships and a feeling that one’s life is worthwhile.',
    ],
    part1: ['Friends', 'Do you have many close friends?', 'How do you usually keep in touch with them?', "I have a lot of acquaintances but only three or four really close friends, whom I've known since secondary school. We keep in touch mainly through a group chat, where we share jokes and photos nearly every day, and we try to meet for dinner once a month."],
    part2: ['A happy memory', ['Describe a happy memory from your childhood.', 'You should say:', 'what happened', 'where you were', 'who was with you', 'and explain why you remember it so well.'], "One of my happiest childhood memories is of flying kites with my grandfather. I must have been about seven years old, and I was spending the summer at his house in the countryside. One afternoon, after the rice had been harvested, he made a kite for me out of bamboo sticks and old newspaper. We walked out to the empty fields, and he showed me how to run against the wind and let the string out slowly. I failed several times, but finally the kite rose high above the trees, and I remember shouting with excitement. My cousins soon joined us, and we stayed there until the sky turned orange. I remember it so well because it was such a simple pleasure, and because my grandfather, who was normally a quiet man, laughed like a child that day. He passed away a few years later, so the memory is very precious."],
    part3: ['Happiness', 'Do you think people today are happier than people in the past?', 'Can money buy happiness?', "It's hard to say. People today are healthier and more comfortable than in the past, but they also seem more stressed and lonelier, perhaps because they compare themselves with others online. As for money, I think it buys security rather than happiness. It solves practical problems, but beyond a certain level, relationships and health matter much more."],
  }),
];
