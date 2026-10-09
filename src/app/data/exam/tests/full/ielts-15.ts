/** IELTS đề 15 – phần bổ sung để đủ 40 câu nghe + 40 câu đọc (xem ghi chú "ĐỀ ĐẦY ĐỦ" trong helpers.ts) */
import { RawIeltsFull } from '../helpers';

export const FULL: RawIeltsFull = {
  // Section 1 – Booking a school visit to a museum (nối tiếp)
  l1: {
    lines: [
      'M: One or two more questions, if I may. How do we get from the coach to the entrance?',
      'W: Coaches can stop in front of the main doors for ten minutes to let the children off. After that, the driver must park in Dock Street.',
      'M: And is there somewhere to leave coats and bags?',
      'W: Yes, we have large boxes on wheels, one for each class. A member of staff will meet you and take you to the cloakroom.',
      'M: The children would love to see the planetarium show. Is that possible?',
      'W: There is a show at one o\'clock that lasts twenty-five minutes. For schools it costs one pound fifty per child.',
      'M: Please book that as well. Should I pay in advance?',
      'W: No, we will send an invoice to the school after your visit. If the number of pupils changes, just tell us by the Monday before.',
    ],
    qs: [
      ['Where must the coach driver park?', 'In Dock Street', 'In front of the main doors', 'In the museum car park', '"the driver must park in Dock Street".'],
      ['How will the school pay?', 'By invoice after the visit', 'In cash on the day', 'By card in advance', '"we will send an invoice to the school after your visit".'],
    ],
    fill: [
      ['Coaches may stop in front of the doors for ____ minutes.', ['10', 'ten'], 'Mười phút.'],
      ['The planetarium show starts at ____ o\'clock.', ['1', 'one'], 'Một giờ.'],
      ['The show lasts ____ minutes.', ['25', 'twenty-five', 'twenty five'], 'Hai mươi lăm phút.'],
    ],
  },
  // Section 3 – Two students choose their optional courses (nối tiếp)
  l2: {
    lines: [
      'M: Before I register, tell me a bit more. What were the two projects like?',
      'W: For the first one, we had to analyse data from a survey of shoppers. We worked in pairs. The second was an individual report of about fifteen hundred words.',
      'M: Did you need special software?',
      'W: Yes, but it is free for students, and there is a training session in the first week.',
      'M: And the textbook? Is it expensive?',
      'W: About forty pounds new, but I can sell you mine for half that.',
      'M: Deal. Is there anything you would do differently?',
      'W: I would start the second project earlier. I left it until the last week and it was stressful.',
    ],
    qs: [
      ['How did students work on the first project?', 'In pairs', 'Alone', 'In groups of five', '"We worked in pairs".'],
      ['What does the woman say about the software?', 'It is free for students.', 'It is difficult to install.', 'It must be bought in the first week.', '"it is free for students".'],
      ['What would the woman do differently?', 'Begin the second project sooner', 'Choose a different course', 'Buy a new textbook', '"I would start the second project earlier".'],
    ],
    fill: [
      ['The second project was a report of about ____ hundred words.', ['15', 'fifteen'], 'Khoảng một nghìn năm trăm từ.'],
      ['A new textbook costs about ____ pounds.', ['40', 'forty'], 'Khoảng bốn mươi bảng.'],
    ],
  },
  listening: [
    {
      title: 'Section 2 – A talk for volunteers at an animal shelter',
      lines: [
        'M: Hello, everyone, and thank you for offering to volunteer at the Greenway Animal Shelter.',
        'M: We look after about ninety animals at any one time, mostly dogs and cats, but also rabbits and occasionally a parrot.',
        'M: Last year we found new homes for six hundred and forty animals, which is a record for us.',
        'M: Volunteers do three kinds of work. Dog walkers take the dogs out twice a day along the path by the river. Cat carers clean the cat rooms and, just as important, sit and play with the cats so that they stay used to people. The third group helps in our charity shop in the town centre.',
        'M: For safety, you must be at least sixteen to work with the animals, and everyone attends a two-hour training session before starting.',
        'M: Please wear old clothes and strong shoes. We will give you a green volunteer T-shirt.',
        'M: One important rule: never open two doors at the same time. That is how animals escape.',
        'M: Some of our dogs are nervous because they were badly treated in the past. They have a yellow sign on the gate, and only experienced staff may handle them.',
        'M: We ask for a minimum of three hours a week.',
        'M: If you fall in love with one of the animals and want to adopt it, speak to Karen in the office. There is a home visit first, to make sure it is a good match.',
      ],
      qs: [
        ['Besides cleaning, what do cat carers do?', 'Play with the cats', 'Take the cats outside', 'Give medicine', '"sit and play with the cats".'],
        ['Where is the charity shop?', 'In the town centre', 'Next to the shelter', 'By the river', '"our charity shop in the town centre".'],
        ['What rule must volunteers always follow?', 'Never open two doors at once', 'Never feed the animals', 'Never walk two dogs together', '"never open two doors at the same time".'],
        ['What does a yellow sign on a gate mean?', 'The dog is nervous.', 'The dog is ready for adoption.', 'The dog is ill.', '"Some of our dogs are nervous... They have a yellow sign on the gate".'],
        ['What happens before an animal is adopted?', 'A home visit', 'A written test', 'A payment of a deposit', '"There is a home visit first".'],
      ],
      fill: [
        ['The shelter looks after about ____ animals at a time.', ['90', 'ninety'], 'Khoảng chín mươi con.'],
        ['Last year ____ animals found new homes.', ['640', 'six hundred and forty'], 'Sáu trăm bốn mươi con.'],
        ['Volunteers working with animals must be at least ____.', ['16', 'sixteen'], 'Ít nhất mười sáu tuổi.'],
        ['Volunteers receive a ____ T-shirt.', ['green'], '"a green volunteer T-shirt".'],
        ['Minimum commitment: ____ hours a week', ['3', 'three'], 'Tối thiểu ba giờ một tuần.'],
      ],
    },
    {
      title: 'Section 4 – Lecture on the science of taste',
      lines: [
        'W: This afternoon we are going to explore how we taste food, a subject surrounded by myths.',
        'W: Let me begin with one of them. Many of you learned at school that different parts of the tongue detect different tastes: sweet at the tip, bitter at the back. That map is wrong. It came from a mistranslation of a German paper published in nineteen oh one. In fact, every part of the tongue can detect every taste.',
        'W: There are five basic tastes: sweet, sour, salty, bitter, and umami, a savoury taste identified by a Japanese chemist in nineteen oh eight in a soup made from seaweed.',
        'W: Each taste has a purpose. Sweetness signals energy. Bitterness warns us of possible poison, which is why children, who are more sensitive to it, often refuse vegetables.',
        'W: Taste buds are replaced about every ten days, but we have fewer of them as we grow older, so food seems less intense.',
        'W: Most of what we call taste is really smell. If you hold your nose and eat a piece of apple and a piece of onion, you will find it hard to tell them apart.',
        'W: Other senses contribute as well. In one experiment, people rated crisps as fresher when they heard a louder crunch through headphones.',
        'W: Colour matters too. Wine experts given white wine dyed red described it using words normally used for red wine.',
        'W: Even the weight of the cutlery changes our judgement: food eaten with a heavy spoon is rated as better quality.',
        'W: Next week, we will look at why food tastes different on aeroplanes.',
      ],
      qs: [
        ['What does the speaker say about the tongue map?', 'It is wrong.', 'It was discovered in Japan.', 'It applies only to children.', '"That map is wrong".'],
        ['What is the purpose of the bitter taste?', 'To warn of possible poison', 'To signal energy', 'To increase appetite', '"Bitterness warns us of possible poison".'],
        ['Why does food seem less intense to older people?', 'They have fewer taste buds.', 'They eat more slowly.', 'They prefer salt.', '"we have fewer of them as we grow older".'],
        ['What did the experiment with crisps show?', 'Sound affects how fresh food seems.', 'Crisps taste better cold.', 'Headphones reduce appetite.', '"rated crisps as fresher when they heard a louder crunch".'],
        ['What will next week\'s lecture be about?', 'Food on aeroplanes', 'Japanese cooking', 'The sense of smell in animals', '"why food tastes different on aeroplanes".'],
      ],
      fill: [
        ['The tongue map came from a mistranslation of a ____ paper.', ['German'], '"a German paper published in nineteen oh one".'],
        ['The fifth basic taste is called ____.', ['umami'], '"umami, a savoury taste".'],
        ['Taste buds are replaced about every ____ days.', ['10', 'ten'], 'Khoảng mười ngày.'],
        ['With the nose held, it is hard to tell apple from ____.', ['onion'], '"a piece of apple and a piece of onion".'],
        ['Food eaten with a ____ spoon is rated as better quality.', ['heavy'], '"with a heavy spoon".'],
      ],
    },
  ],
  // Bài đọc 1 – From Wolf to Dog (nối tiếp)
  r1: {
    text: 'For most of their shared history, dogs were valued for the work they did. Different types were developed for herding sheep, pulling sledges, guarding property and hunting, but these were loose categories and nobody kept written records of ancestry. The modern idea of the breed, with a precise standard of appearance, is surprisingly recent. It arose in Victorian Britain, where the first formal dog show was held in the city of Newcastle in 1859 and the Kennel Club was founded in 1873. Within a few decades, hundreds of breeds had been defined, and most of those known today are less than a hundred and fifty years old.\n\nBreeding for appearance has had unfortunate effects. Because the members of a breed are closely related, harmful genes are easily passed on. Dogs with very flat faces, such as bulldogs and pugs, often have difficulty breathing, and large breeds frequently suffer from weak hips. Veterinary organisations in several countries have called for breed standards to be changed. Dogs of mixed ancestry tend to live longer, on average, than pure-bred animals of the same size.',
    qs: [
      ['T', 'Most modern dog breeds were created in the last century and a half.', '"less than a hundred and fifty years old".'],
      ['F', 'Written records of dogs\' ancestry have been kept for thousands of years.', 'Trước đây không ai ghi chép phả hệ.'],
      ['NG', 'The Kennel Club refuses to change its breed standards.', 'Bài không nói.'],
      ['Why are pure-bred dogs prone to inherited problems?', 'Members of a breed are closely related.', 'They are fed the wrong food.', 'They are kept indoors.', 'They are trained too hard.', 'Vì các cá thể cùng giống có quan hệ huyết thống gần.'],
    ],
    fill: [
      ['Dogs with very flat faces often have difficulty ____.', ['breathing'], '"often have difficulty breathing".'],
    ],
  },
  reading: [
    {
      title: 'The Clock That Changed Navigation',
      text: 'On a foggy night in October 1707, four ships of the British navy returning from the Mediterranean struck rocks off the Scilly Isles, south-west of England. Nearly two thousand sailors were drowned. The fleet\'s officers had believed themselves to be safely in open water, far to the east of where they actually were. The disaster drew attention to the greatest scientific problem of the age: how to find a ship\'s longitude, its position east or west.\n\nLatitude, the position north or south, had long been easy to determine from the height of the Sun or the Pole Star. Longitude was a different matter. The Earth turns through fifteen degrees every hour, so a navigator who knew the time at his home port at the moment when it was noon on board his ship could calculate how far east or west he had sailed. The difficulty was knowing the time at home. The pendulum clocks of the period were accurate on land but useless on a rolling deck, and changes of temperature made their metal parts expand and contract.\n\nIn 1714 the British Parliament offered a prize of twenty thousand pounds, an immense fortune, for a practical method. Most astronomers were sure that the answer lay in the sky. They proposed to use the Moon\'s movement against the stars as a kind of celestial clock, a method that required years of observation and hours of calculation for each reading.\n\nJohn Harrison, a carpenter from the north of England who had taught himself to make clocks, took another route. Over more than thirty years he built a series of timekeepers for use at sea. The first three were large, complicated machines with balances linked by springs in place of a pendulum. The fourth, completed in 1759 and known as H4, looked quite different: it resembled a pocket watch about thirteen centimetres across. On a voyage to Jamaica lasting eighty-one days, it lost only five seconds.\n\nThe board that judged the prize was dominated by astronomers, among them Nevil Maskelyne, who favoured the lunar method. It demanded further trials, required Harrison to reveal how his watch worked, and paid him only half the reward. The ageing clockmaker finally appealed to King George the Third, who is said to have declared that Harrison had been cruelly treated. Parliament voted him most of the remaining money in 1773, three years before his death.\n\nCopies of H4 were at first far too expensive for ordinary ships, and the lunar method remained in use for decades. But by the middle of the nineteenth century, cheaper versions, known as chronometers, were standard equipment. Harrison\'s original timekeepers are displayed at Greenwich in London.',
      qs: [
        ['T', 'The officers of the fleet in 1707 were mistaken about their position.', 'Đoạn 1.'],
        ['F', 'Finding latitude was more difficult than finding longitude.', 'Đoạn 2: vĩ độ dễ xác định.'],
        ['T', 'Pendulum clocks did not work properly on ships.', 'Đoạn 2.'],
        ['F', 'Most astronomers expected a clockmaker to solve the problem.', 'Đoạn 3: họ tin lời giải nằm trên bầu trời.'],
        ['NG', 'Harrison was unable to read and write.', 'Bài không nói.'],
        ['T', 'H4 was much smaller than Harrison\'s earlier timekeepers.', 'Đoạn 4: giống đồng hồ bỏ túi.'],
        ['Why could a navigator calculate longitude from the time at home?', 'The Earth turns fifteen degrees each hour.', 'The Sun rises at the same time everywhere.', 'The Moon moves fifteen degrees a day.', 'Ships sail fifteen miles an hour.', 'Đoạn 2.'],
        ['What was the disadvantage of the lunar method?', 'It needed long calculations for each reading.', 'It worked only at noon.', 'It required a pendulum.', 'It could not be used in the Atlantic.', 'Đoạn 3.'],
        ['How did the prize board treat Harrison?', 'It paid only half and demanded more trials.', 'It gave him the full prize at once.', 'It refused to test his watch.', 'It asked him to join the board.', 'Đoạn 5.'],
        ['Why did the lunar method continue to be used after H4?', 'Copies of the watch were too expensive.', 'The watch was inaccurate.', 'Harrison kept his design secret.', 'Parliament banned chronometers.', 'Đoạn cuối.'],
      ],
      fill: [
        ['The ships struck rocks off the ____ Isles.', ['Scilly'], 'Đoạn 1.'],
        ['On the voyage to Jamaica, H4 lost only five ____.', ['seconds'], 'Đoạn 4.'],
        ['Cheaper versions of the sea clock were known as ____.', ['chronometers'], 'Đoạn cuối.'],
      ],
    },
    {
      title: 'The Psychology of Collecting',
      text: 'Stamps, coins, shells, teapots, football programmes, antique maps: there is almost nothing that somebody, somewhere, does not collect. Surveys suggest that about a third of adults in Britain and the United States collect something, and among children the proportion is much higher. Psychologists have long wondered what lies behind the habit.\n\nThe earliest explanations were not flattering. Sigmund Freud, himself the owner of more than two thousand ancient statues, linked collecting to events in early childhood, and later writers described it as a sign of loneliness or an attempt to control an uncertain world. Modern researchers take a more positive view. They distinguish clearly between collecting and hoarding. A hoarder cannot throw anything away and lives in disorder; a collector is selective, organises the objects carefully and takes pleasure in showing them.\n\nSeveral motives seem to be involved. One is the pleasure of the hunt. Brain studies indicate that the search for a missing item, and the moment of finding it, activate the same reward circuits as other enjoyable activities; collectors often report that the chase is more exciting than possession. Another is the desire for completeness. A set with one gap is felt to be far more unsatisfactory than its real importance would suggest, and manufacturers of collectable cards and toys exploit this by deliberately making some items rare.\n\nKnowledge is a further attraction. Serious collectors become experts, able to tell at a glance a genuine piece from a copy, and the collection is a way of ordering a small part of the world. There is a social side as well: clubs, fairs and online groups bring together people who would otherwise never meet.\n\nCollections also carry personal meaning. Many begin by chance, with a gift from a relative or an object found on holiday, and the items come to stand for memories. Researchers have noticed that people frequently collect the things they wanted, but could not have, as children.\n\nPsychologists point to a curious effect that helps to explain why collectors find it hard to sell. In a classic experiment, students who had been given a coffee mug demanded about twice as much money to give it up as other students were willing to pay for it. Simply owning an object makes it seem more valuable, a tendency known as the endowment effect.\n\nSociety has benefited greatly from the obsession. Many of the world\'s great museums began as private collections. The British Museum was founded on some seventy-one thousand objects gathered by a single physician, Hans Sloane, who left them to the nation when he died in 1753.',
      qs: [
        ['T', 'Collecting is more common among children than among adults.', 'Đoạn 1.'],
        ['T', 'Freud was a collector himself.', 'Đoạn 2: hơn hai nghìn tượng cổ.'],
        ['F', 'Modern researchers regard collecting and hoarding as the same thing.', 'Đoạn 2: phân biệt rõ.'],
        ['F', 'Collectors usually enjoy owning an item more than searching for it.', 'Đoạn 3: cuộc săn tìm thú vị hơn.'],
        ['NG', 'Men collect more than women.', 'Bài không so sánh.'],
        ['T', 'Some manufacturers intentionally make certain items hard to find.', 'Đoạn 3.'],
        ['NG', 'Hans Sloane bought most of his objects in Egypt.', 'Bài không nói.'],
        ['How does a collector differ from a hoarder?', 'A collector is selective and organised.', 'A collector owns more objects.', 'A collector never sells anything.', 'A collector lives alone.', 'Đoạn 2.'],
        ['What have researchers noticed about what people collect?', 'They often collect things they wanted as children.', 'They prefer expensive objects.', 'They copy their parents\' collections.', 'They choose objects at random.', 'Đoạn 5.'],
        ['What did the experiment with coffee mugs show?', 'Owning an object makes it seem more valuable.', 'Students dislike selling gifts.', 'Mugs are popular collectables.', 'Buyers always pay too much.', 'Đoạn 6.'],
      ],
      fill: [
        ['A hoarder cannot ____ anything away.', ['throw'], 'Đoạn 2: "cannot throw anything away".'],
        ['Collectors want a set to be complete, without a single ____.', ['gap'], 'Đoạn 3: "A set with one gap".'],
        ['The tendency to overvalue what we own is called the ____ effect.', ['endowment'], 'Đoạn 6.'],
        ['The British Museum was founded on the collection of a ____.', ['physician'], 'Đoạn cuối: "a single physician, Hans Sloane".'],
      ],
    },
  ],
};
