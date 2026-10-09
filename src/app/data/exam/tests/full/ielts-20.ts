/** IELTS đề 20 – phần bổ sung để đủ 40 câu nghe + 40 câu đọc (xem ghi chú "ĐỀ ĐẦY ĐỦ" trong helpers.ts) */
import { RawIeltsFull } from '../helpers';

export const FULL: RawIeltsFull = {
  // Section 1 – Registering for a charity run (nối tiếp)
  l1: {
    lines: [
      'M: Thanks. Could you tell me a bit about the route?',
      'W: Certainly. It follows the sea wall as far as the lighthouse, then turns inland through Victoria Park and finishes back at the harbour. It is almost completely flat.',
      'M: Will there be water along the way?',
      'W: Yes, at three points: after three, six and eight kilometres.',
      'M: My sister would like to run as well, but she is only fifteen.',
      'W: She can enter the five-kilometre run. For the ten-kilometre run, the minimum age is sixteen.',
      'M: I see. And do you have a target for the money?',
      'W: We are hoping to raise forty thousand pounds this year. Last year we had nine hundred runners. If you would like to collect sponsorship from friends, you can download a form from our website.',
      'M: I will do that.',
    ],
    qs: [
      ['What does the woman say about the route?', 'It is almost completely flat.', 'It is very hilly.', 'It goes through the town centre.', '"It is almost completely flat".'],
      ['Which run can the man\'s sister enter?', 'The five-kilometre run', 'The ten-kilometre run', 'Neither run', '"She can enter the five-kilometre run".'],
    ],
    fill: [
      ['Water is available at ____ points.', ['3', 'three'], 'Ba điểm tiếp nước.'],
      ['Minimum age for the ten-kilometre run: ____', ['16', 'sixteen'], 'Mười sáu tuổi.'],
      ['Last year there were ____ hundred runners.', ['9', 'nine'], 'Chín trăm người chạy.'],
    ],
  },
  // Section 4 – Lecture on insects as food (nối tiếp)
  l2: {
    lines: [
      'W: Let me say something about how insects are farmed. Crickets are kept in stacked plastic boxes in warm rooms, so a farm needs very little land. They are ready to harvest after about six weeks.',
      'W: Another promising species is the black soldier fly. Its larvae can be fed on food waste from restaurants and supermarkets, which would otherwise be thrown away.',
      'W: These larvae are mostly used not for people but as feed for chickens and farmed fish, replacing soya and fish meal.',
      'W: Safety must be considered. People who are allergic to shellfish may also react to insects, so clear labels are essential.',
      'W: In the European Union, four insect species have so far been approved for human food. For next week, please read the article on consumer attitudes in the course pack.',
    ],
    qs: [
      ['Why does a cricket farm need little land?', 'The insects are kept in stacked boxes.', 'Crickets live underground.', 'The farms are on rooftops.', '"kept in stacked plastic boxes".'],
      ['What can black soldier fly larvae be fed on?', 'Food waste', 'Grass', 'Fish meal', '"fed on food waste from restaurants and supermarkets".'],
      ['Who may have an allergic reaction to insects?', 'People allergic to shellfish', 'People allergic to nuts', 'People allergic to milk', '"People who are allergic to shellfish may also react to insects".'],
    ],
    fill: [
      ['Crickets are ready to harvest after about ____ weeks.', ['6', 'six'], 'Khoảng sáu tuần.'],
      ['____ insect species have been approved in the European Union.', ['Four', 'four', '4'], 'Bốn loài.'],
    ],
  },
  listening: [
    {
      title: 'Section 2 – A talk about a neighbourhood tool library',
      lines: [
        'M: Good evening, and thank you for inviting me to talk about the Eastside Tool Library.',
        'M: The idea is simple. The average electric drill is used for only about thirteen minutes in its whole life. So why should every household buy one?',
        'M: We opened three years ago in a former bank on Carter Street. We began with eighty donated tools, and we now have more than seven hundred items.',
        'M: Besides drills and saws, you can borrow ladders, sewing machines, tents and even a machine for cleaning carpets, which is our most popular item.',
        'M: Membership costs twenty pounds a year. For people on a low income, it is free.',
        'M: Members can borrow up to five items at a time and keep them for one week. If something is returned late, we ask for a small donation, but there are no fines.',
        'M: Every tool is checked for safety when it comes back. Electrical items are tested by a qualified volunteer.',
        'M: We also run repair evenings on the second Wednesday of each month, where you can bring a broken toaster or lamp and learn how to mend it.',
        'M: We are open on Tuesday and Thursday evenings and all day on Saturday.',
        'M: At present, we need two things: more garden tools, and volunteers who can spare one evening a month.',
      ],
      qs: [
        ['What point does the speaker make about electric drills?', 'They are used very little.', 'They are dangerous.', 'They are too expensive to repair.', '"used for only about thirteen minutes in its whole life".'],
        ['What is the most popular item?', 'A carpet-cleaning machine', 'A ladder', 'A sewing machine', '"a machine for cleaning carpets, which is our most popular item".'],
        ['What happens if a tool is returned late?', 'A small donation is requested.', 'A fine is charged.', 'Membership is cancelled.', '"we ask for a small donation, but there are no fines".'],
        ['What can people do at repair evenings?', 'Learn to mend broken items', 'Buy second-hand tools', 'Have tools sharpened', '"learn how to mend it".'],
        ['What does the library need at present?', 'Garden tools and volunteers', 'A larger building', 'More electric drills', '"more garden tools, and volunteers".'],
      ],
      fill: [
        ['The library opened ____ years ago.', ['3', 'three'], 'Ba năm trước.'],
        ['It is in a former ____ on Carter Street.', ['bank'], '"in a former bank".'],
        ['Membership costs ____ pounds a year.', ['20', 'twenty'], 'Hai mươi bảng một năm.'],
        ['Members can borrow up to ____ items at a time.', ['5', 'five'], 'Tối đa năm món.'],
        ['Repair evenings are on the second ____ of each month.', ['Wednesday'], 'Thứ Tư thứ hai mỗi tháng.'],
      ],
    },
    {
      title: 'Section 3 – A student gets feedback on a presentation about sleep',
      lines: [
        'W: Thank you for coming, Omar. I wanted to give you some feedback on your presentation about sleep and exam performance.',
        'M: Thank you, Dr. Lewis. I was not sure how it went.',
        'W: Overall, it was good. Your opening was strong. Starting with a question to the audience got everyone\'s attention.',
        'M: I was nervous about that.',
        'W: It worked. The weakest part was the middle section. You showed five graphs in three minutes, and people could not follow them.',
        'M: Should I have used fewer?',
        'W: Yes. Two would have been enough, with more time to explain each one. Also, the labels were too small to read from the back.',
        'M: I will remember that. What about my conclusion?',
        'W: It was clear, but you finished two minutes early. You could have used that time to mention the limits of your data. Your sample was only twenty-four students.',
        'M: That is true. And they were all from my own course.',
        'W: Exactly. Say so openly. It makes your work more convincing, not less.',
        'M: How did I handle the questions?',
        'W: Very well. You admitted when you did not know an answer, which is the right thing to do.',
        'M: What mark did I get?',
        'W: Seventy-two percent. The written report is due on the eighteenth, and I would like you to include the points we have discussed.',
      ],
      qs: [
        ['How did the student begin his presentation?', 'With a question to the audience', 'With a graph', 'With a joke', '"Starting with a question to the audience".'],
        ['What was wrong with the middle section?', 'It contained too many graphs.', 'It was too slow.', 'It had no data.', '"You showed five graphs in three minutes".'],
        ['What does the tutor say about the labels?', 'They were too small.', 'They were incorrect.', 'They were in the wrong colour.', '"the labels were too small to read from the back".'],
        ['What should the student have mentioned in the spare time?', 'The limits of his data', 'More results', 'His future plans', '"mention the limits of your data".'],
        ['How did the student deal with questions?', 'He admitted when he did not know.', 'He refused to answer.', 'He answered too quickly.', '"You admitted when you did not know an answer".'],
      ],
      fill: [
        ['The tutor says ____ graphs would have been enough.', ['2', 'two', 'Two'], 'Hai biểu đồ là đủ.'],
        ['The student finished ____ minutes early.', ['2', 'two'], 'Sớm hai phút.'],
        ['His sample was only ____ students.', ['24', 'twenty-four', 'twenty four'], 'Chỉ hai mươi bốn sinh viên.'],
        ['He received a mark of ____ percent.', ['72', 'seventy-two', 'seventy two'], 'Bảy mươi hai phần trăm.'],
        ['The written report is due on the ____.', ['eighteenth', '18th'], 'Ngày mười tám.'],
      ],
    },
  ],
  // Bài đọc 1 – Planets Beyond the Sun (nối tiếp)
  r1: {
    text: 'The planets discovered so far are remarkably varied. Many are "hot Jupiters", giant balls of gas orbiting so close to their stars that their surfaces are hotter than a furnace. Others are "super-Earths", rocky worlds several times heavier than our own, a kind of planet that does not exist in the solar system at all. A few planets orbit two stars at once, so that an observer there would see a double sunset. Some drift through space alone, attached to no star.\n\nOne system has attracted particular attention. In 2017 astronomers announced that seven planets, all roughly the size of the Earth, circle a small, cool star named TRAPPIST-1, about forty light years away. Three of them lie in the zone where water could be liquid. The star is so dim, however, that these planets orbit very close to it, and each probably keeps the same face turned towards the star, leaving one side in permanent daylight and the other in endless night. Whether an atmosphere could survive in such conditions is one of the questions that new space telescopes have been designed to answer.',
    qs: [
      ['T', 'Super-Earths have no equivalent in our own solar system.', '"a kind of planet that does not exist in the solar system at all".'],
      ['F', 'All known planets orbit a single star.', 'Một số quay quanh hai sao, một số trôi tự do.'],
      ['NG', 'The TRAPPIST-1 planets were discovered by a Belgian team.', 'Bài không nói ai phát hiện.'],
      ['Why might conditions on the TRAPPIST-1 planets be difficult?', 'One side may always face the star.', 'The star is too hot.', 'The planets are too large.', 'They have no gravity.', 'Một mặt luôn sáng, mặt kia luôn tối.'],
    ],
    fill: [
      ['Giant gas planets very close to their stars are called "hot ____".', ['Jupiters'], '"hot Jupiters".'],
    ],
  },
  reading: [
    {
      title: 'The Barcode',
      text: 'It appears on almost everything we buy, and we scarcely notice it. The barcode, a row of black and white stripes read by a beam of light, is scanned several billion times a day. Its story begins on a beach.\n\nIn 1948 Bernard Silver, a graduate student in Philadelphia, overheard the head of a supermarket chain asking a professor whether a way could be found to record automatically what customers bought. At the time, a cashier had to type in the price of every item, and shops could learn what had been sold only by closing to count the goods on the shelves. Silver mentioned the conversation to a friend, Joseph Woodland, who became fascinated by the problem. Woodland gave up his teaching post and moved to his grandfather\'s apartment in Florida to think.\n\nWoodland had learned Morse code as a boy. Sitting on the beach one day, he drew dots and dashes in the sand with his fingers and then, almost without thinking, pulled the marks downwards into thin and thick lines. A pattern of lines, he realised, could carry information. The two friends applied for a patent in 1949. Their original design was not a rectangle but a set of circles like a target, which could be read from any direction.\n\nThe idea was ahead of its time. Reading the pattern required a very bright light and a way of processing the signal, and neither the laser nor the small computer yet existed. The patent was sold for fifteen thousand dollars and expired before any use was made of it. Silver died in 1963, without seeing his invention succeed.\n\nBy the early 1970s the technology had caught up, and American food manufacturers and supermarkets set up a committee to agree on a single standard code. Several companies submitted designs. The winner, from IBM, was the work of the engineer George Laurer and used vertical bars, because circles tended to smear when printed at speed. By chance, Woodland was then working for IBM and contributed to the project.\n\nThe first product bearing the new code was scanned on 26 June 1974 at a supermarket in the town of Troy, Ohio. It was a packet of chewing gum, which is now kept in a museum in Washington.\n\nAdoption was slow at first, since shops would not buy scanners until most goods carried codes, and manufacturers would not print codes until shops had scanners. Once this difficulty was overcome, the effects went far beyond faster queues. For the first time, retailers knew precisely what was selling and when, which allowed them to keep smaller stocks and gave large chains great power over their suppliers.',
      qs: [
        ['T', 'Before barcodes, shops had to close in order to count their stock.', 'Đoạn 2.'],
        ['F', 'Woodland developed the idea while teaching in Philadelphia.', 'Đoạn 2–3: ông bỏ dạy, chuyển tới Florida.'],
        ['T', 'The first design could be read from any direction.', 'Đoạn 3: hình tròn như bia ngắm.'],
        ['F', 'Silver and Woodland made a great deal of money from their patent.', 'Đoạn 4: bán với 15.000 đô và hết hạn.'],
        ['NG', 'George Laurer had met Bernard Silver.', 'Bài không nói.'],
        ['T', 'The first item scanned with the standard code is preserved in a museum.', 'Đoạn 6.'],
        ['What inspired Woodland\'s idea?', 'Morse code', 'Railway signals', 'Musical notes', 'A target', 'Đoạn 3.'],
        ['Why could the invention not be used in 1949?', 'Lasers and small computers did not exist.', 'Supermarkets rejected it.', 'The patent was refused.', 'Printing was too expensive.', 'Đoạn 4.'],
        ['Why did the IBM design use vertical bars instead of circles?', 'Circles smeared when printed quickly.', 'Bars were easier to patent.', 'Bars held more information.', 'Customers preferred them.', 'Đoạn 5.'],
        ['Why was adoption slow at first?', 'Shops and manufacturers each waited for the other.', 'Scanners often broke down.', 'Cashiers went on strike.', 'The government banned the code.', 'Đoạn cuối.'],
      ],
      fill: [
        ['The patent was sold for ____ thousand dollars.', ['fifteen', '15'], 'Đoạn 4.'],
        ['The first product scanned was a packet of chewing ____.', ['gum'], 'Đoạn 6.'],
        ['Barcodes gave large chains great power over their ____.', ['suppliers'], 'Đoạn cuối.'],
      ],
    },
    {
      title: 'Why Cities Make Us Walk Faster',
      text: 'Visitors from small towns often remark that everyone in a big city seems to be in a hurry. The impression is correct, and it can be measured. In the 1970s the psychologists Marc and Helen Bornstein timed pedestrians over a fixed distance in fifteen towns and cities in several countries. They found that walking speed rose steadily with the size of the population: people in a city of a million walked almost twice as fast as those in a village.\n\nLater studies have confirmed and extended the result. In 2006 a team led by the British psychologist Richard Wiseman measured walking speeds in thirty-two cities and compared them with figures recorded in the early 1990s. On average, people were walking ten percent faster than before. The quickest walkers were found in Singapore, followed by Copenhagen and Madrid.\n\nWhy should the size of a city affect its pace? One explanation is economic. In large cities wages and prices are higher, so time is literally worth more, and people behave accordingly. Another concerns stimulation: crowded streets bombard the senses, and walking quickly may be a way of limiting contact with strangers. A third points out that fast walkers move to cities in the first place, attracted by ambition and opportunity.\n\nThe physicist Geoffrey West has offered a more general account. Analysing data from hundreds of cities, he and his colleagues found that when the population of a city doubles, many of its activities, including wages, the number of patents and even the amount of crime, increase by rather more than double, about fifteen percent extra per person. Larger cities bring more people into contact, and the pace of every kind of exchange quickens.\n\nA faster pace of life has costs. The American researcher Robert Levine combined walking speed with other measures, such as how quickly post office clerks sold a stamp and how accurate public clocks were, to rank the tempo of cities. He found that places with the fastest pace had higher rates of death from heart disease. They also scored lower on tests of helpfulness, such as whether passers-by would return a dropped pen or assist a blind person at a crossing.\n\nPace is not fixed, however. Design can slow people down: streets with trees, benches, shop windows and other pedestrians to watch encourage lingering, while blank walls and wide roads make walkers speed up. The "slow city" movement, which began in Italy in 1999, has persuaded more than two hundred small towns to limit traffic and protect local shops and markets. Its supporters do not reject modern life. They argue simply that a town should be judged by how pleasant it is to spend time in, not by how quickly one can pass through it.',
      qs: [
        ['T', 'The Bornsteins found that people walk faster in larger towns.', 'Đoạn 1.'],
        ['F', 'Wiseman\'s study showed that walking speeds had fallen since the 1990s.', 'Đoạn 2: nhanh hơn mười phần trăm.'],
        ['T', 'The fastest walkers in Wiseman\'s study were in Singapore.', 'Đoạn 2.'],
        ['NG', 'Wiseman measured men and women separately.', 'Bài không nói.'],
        ['F', 'According to West, doubling a city\'s population exactly doubles its wages.', 'Đoạn 4: tăng nhiều hơn gấp đôi.'],
        ['T', 'Levine used the accuracy of public clocks as one of his measures.', 'Đoạn 5.'],
        ['NG', 'Levine carried out his research in more than fifty countries.', 'Bài không nói số nước.'],
        ['What is the economic explanation for fast walking in cities?', 'Time is worth more where wages are higher.', 'City shoes are better.', 'Public transport is expensive.', 'Streets are shorter.', 'Đoạn 3.'],
        ['What did Levine find about cities with the fastest pace?', 'People there were less helpful.', 'People there lived longer.', 'They had fewer post offices.', 'They had more parks.', 'Đoạn 5.'],
        ['What do supporters of the "slow city" movement argue?', 'A town should be pleasant to spend time in.', 'Modern life should be rejected.', 'Cars should be banned everywhere.', 'Cities should be made smaller.', 'Đoạn cuối.'],
      ],
      fill: [
        ['People in a city of a million walk almost ____ as fast as villagers.', ['twice'], 'Đoạn 1.'],
        ['In West\'s data, the number of ____ rises faster than population.', ['patents'], 'Đoạn 4.'],
        ['Fast-paced cities had higher rates of death from ____ disease.', ['heart'], 'Đoạn 5.'],
        ['The "slow city" movement began in ____ in 1999.', ['Italy'], 'Đoạn cuối.'],
      ],
    },
  ],
};
