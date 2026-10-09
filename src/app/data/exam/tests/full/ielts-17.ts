/** IELTS đề 17 – phần bổ sung để đủ 40 câu nghe + 40 câu đọc (xem ghi chú "ĐỀ ĐẦY ĐỦ" trong helpers.ts) */
import { RawIeltsFull } from '../helpers';

export const FULL: RawIeltsFull = {
  // Section 1 – Reserving a table for a birthday dinner (nối tiếp)
  l1: {
    lines: [
      'M: Thank you. Could I ask about the set menu? Two of our guests are vegetarian.',
      'W: That is no problem. There is always a vegetarian choice for each course. This month the main dish is mushroom risotto.',
      'M: Lovely. And are drinks included in the price?',
      'W: Water and coffee are included. Other drinks are charged separately.',
      'M: I would like to decorate the room with a few balloons. Is that allowed?',
      'W: Yes, you can come in from six o\'clock to prepare. We only ask you not to use candles, apart from those on the cake.',
      'M: Understood. Do you need a deposit?',
      'W: Yes, fifty pounds, which will be taken off your final bill. And if your numbers change, please let us know by Thursday.',
    ],
    qs: [
      ['What is the vegetarian main dish this month?', 'Mushroom risotto', 'Vegetable curry', 'Cheese pasta', '"the main dish is mushroom risotto".'],
      ['What is the party not allowed to use?', 'Candles, except on the cake', 'Balloons', 'Their own music', '"We only ask you not to use candles, apart from those on the cake".'],
    ],
    fill: [
      ['The room can be prepared from ____ o\'clock.', ['6', 'six'], 'Từ sáu giờ.'],
      ['Deposit: ____ pounds', ['50', 'fifty'], 'Đặt cọc năm mươi bảng.'],
      ['Changes to numbers must be reported by ____.', ['Thursday'], 'Báo trước thứ Năm.'],
    ],
  },
  // Section 4 – Lecture on volcanoes (nối tiếp)
  l2: {
    lines: [
      'M: Let me illustrate the dangers with two historical examples. In AD seventy-nine, Mount Vesuvius in Italy buried the town of Pompeii under several metres of ash. Because the ash hardened around the buildings, the town was preserved almost exactly as it was.',
      'M: The largest eruption in recorded history was that of Tambora in Indonesia, in eighteen fifteen. It threw so much dust into the atmosphere that the following year was known in Europe and North America as the year without a summer. Crops failed, and there was snow in June.',
      'M: Volcanoes can also affect modern travel. In two thousand and ten, ash from a volcano in Iceland closed European airspace for six days.',
      'M: For your coursework, I would like you to choose one volcano and describe how the people living near it prepare for an eruption.',
    ],
    qs: [
      ['Why was Pompeii so well preserved?', 'The ash hardened around the buildings.', 'The lava cooled quickly.', 'The town was flooded.', '"Because the ash hardened around the buildings".'],
      ['What was the effect of the Tambora eruption on the following year?', 'It was unusually cold.', 'It was unusually hot.', 'It was very dry.', '"the year without a summer... snow in June".'],
      ['What must students describe in their coursework?', 'How people near a volcano prepare', 'How lava is formed', 'The history of Pompeii', '"describe how the people living near it prepare for an eruption".'],
    ],
    fill: [
      ['Tambora is in ____.', ['Indonesia'], '"Tambora in Indonesia".'],
      ['In 2010, European airspace was closed for ____ days.', ['6', 'six'], 'Sáu ngày.'],
    ],
  },
  listening: [
    {
      title: 'Section 2 – Information about a new tram line',
      lines: [
        'W: Good evening. I am from the city transport authority, and I am here to explain the new tram line that will open next spring.',
        'W: The line is nine kilometres long and runs from the railway station to the university hospital, with sixteen stops.',
        'W: Trams will run every six minutes during the day and every fifteen minutes after eight in the evening. The last tram will leave the station at half past midnight.',
        'W: The journey from one end to the other will take twenty-four minutes, about half the time the bus takes at present.',
        'W: You will not be able to buy tickets on board. There will be a machine at every stop, and you can also pay with a bank card by touching it on the reader inside the tram.',
        'W: Children under five travel free, and bicycles are allowed except between seven and nine in the morning.',
        'W: All trams have low floors, so wheelchairs and pushchairs can roll straight on.',
        'W: Bus route twelve, which follows the same road, will be withdrawn when the tram opens. Routes fourteen and fifteen will be changed so that they connect with the tram at Market Square.',
        'W: During the final months of construction, Bridge Street will be closed to cars at weekends.',
        'W: A public open day, with free rides, will be held on the Saturday before the official opening.',
      ],
      qs: [
        ['Where does the tram line end?', 'At the university hospital', 'At the airport', 'At Market Square', '"from the railway station to the university hospital".'],
        ['How can passengers pay?', 'At a machine or with a bank card', 'In cash to the driver', 'Only with a monthly pass', '"a machine at every stop... pay with a bank card".'],
        ['When are bicycles not allowed?', 'Between seven and nine in the morning', 'After eight in the evening', 'At weekends', '"except between seven and nine in the morning".'],
        ['What will happen to bus route twelve?', 'It will be withdrawn.', 'It will run more often.', 'It will be extended.', '"will be withdrawn when the tram opens".'],
        ['What will take place before the official opening?', 'An open day with free rides', 'A concert', 'A week of free travel', '"A public open day, with free rides".'],
      ],
      fill: [
        ['The line has ____ stops.', ['16', 'sixteen'], 'Mười sáu điểm dừng.'],
        ['During the day, trams run every ____ minutes.', ['6', 'six'], 'Sáu phút một chuyến.'],
        ['The whole journey takes ____ minutes.', ['24', 'twenty-four', 'twenty four'], 'Hai mươi bốn phút.'],
        ['Children under ____ travel free.', ['5', 'five'], 'Dưới năm tuổi.'],
        ['____ Street will be closed to cars at weekends.', ['Bridge'], '"Bridge Street will be closed".'],
      ],
    },
    {
      title: 'Section 3 – A student asks a tutor about studying abroad',
      lines: [
        'M: Dr. Singh, could I ask you about the exchange programme? I am thinking of spending next year abroad.',
        'W: Of course, Peter. Where would you like to go?',
        'M: I am trying to choose between Sweden and Canada.',
        'W: Both are good partners. In Sweden, the courses are taught in English, and the university is strong in environmental science, which is your main subject.',
        'M: That is what attracts me. But I have heard that the cost of living is high.',
        'W: It is, although there are no tuition fees for exchange students, and you may get a grant of three hundred euros a month.',
        'M: And Canada?',
        'W: The university there is excellent too, but the academic year starts in early September, so you would have to leave before your summer work placement finishes.',
        'M: That is a problem. I have promised to stay until the middle of September.',
        'W: Then Sweden suits you better. Their term begins in October.',
        'M: Will the marks I get abroad count towards my degree?',
        'W: Yes, as long as your courses are approved by me in advance. You need to complete a learning agreement.',
        'M: How do I apply?',
        'W: Fill in the online form and write a statement of five hundred words explaining your reasons. The deadline is the first of March, and you will need two references.',
      ],
      qs: [
        ['Why is the Swedish university suitable for the student?', 'It is strong in his main subject.', 'It is the cheapest option.', 'His friends are studying there.', '"the university is strong in environmental science, which is your main subject".'],
        ['What worries the student about Sweden?', 'The cost of living', 'The language', 'The weather', '"I have heard that the cost of living is high".'],
        ['Why is Canada a problem?', 'The term starts before his placement ends.', 'The fees are too high.', 'The courses are in French.', '"you would have to leave before your summer work placement finishes".'],
        ['What must he do for his marks to count?', 'Have his courses approved in advance', 'Take an extra exam', 'Stay for two years', '"as long as your courses are approved by me in advance".'],
        ['What must the application include?', 'A written statement and two references', 'A language certificate', 'A medical report', '"write a statement... you will need two references".'],
      ],
      fill: [
        ['Exchange students may receive a grant of ____ euros a month.', ['300', 'three hundred'], 'Ba trăm euro mỗi tháng.'],
        ['The Swedish term begins in ____.', ['October'], '"Their term begins in October".'],
        ['The student must complete a learning ____.', ['agreement'], '"a learning agreement".'],
        ['The statement should be ____ hundred words long.', ['5', 'five'], 'Năm trăm từ.'],
        ['The deadline is the first of ____.', ['March'], 'Ngày 1 tháng Ba.'],
      ],
    },
  ],
  // Bài đọc 1 – Holding Back the Sea (nối tiếp)
  r1: {
    text: 'The Dutch are not alone in facing the sea. Venice, built on wooden piles driven into the mud of a lagoon, floods regularly at high tide, and the frequency has increased as the city slowly sinks and the sea rises. After decades of delay and scandal, a system of seventy-eight hinged steel gates, known as MOSE, was first raised in 2020. The gates normally lie flat on the sea bed at the three entrances to the lagoon and are filled with air to lift them when a dangerous tide is forecast.\n\nLondon is protected by the Thames Barrier, which was completed in 1982 and was expected to be used two or three times a year; in the winter of 2013 to 2014 alone, it closed fifty times. Some low-lying places have chosen other solutions. Parts of Bangladesh rely on raised shelters and early warning by mobile telephone, which have greatly reduced deaths from storms. The Indonesian government has gone furthest of all: because its capital, Jakarta, is sinking by several centimetres a year, it has decided to build an entirely new capital city on another island.',
    qs: [
      ['T', 'Flooding in Venice has become more frequent.', '"the frequency has increased".'],
      ['F', 'The Thames Barrier has been used less often than expected.', 'Mùa đông 2013–2014 đóng năm mươi lần.'],
      ['NG', 'The MOSE gates were designed by Dutch engineers.', 'Bài không nói ai thiết kế.'],
      ['How are the MOSE gates raised?', 'They are filled with air.', 'They are pulled up by cranes.', 'They are pushed by the tide.', 'They are lifted by ships.', '"filled with air to lift them".'],
    ],
    fill: [
      ['Indonesia has decided to build a new ____ city.', ['capital'], '"an entirely new capital city".'],
    ],
  },
  reading: [
    {
      title: 'The Origins of Money',
      text: 'Money is such a basic part of life that it is difficult to imagine doing without it. Textbooks used to explain its invention with a simple story. Early people, it was said, exchanged goods directly: a farmer with spare grain looked for a potter who happened to want grain. Because such matches were hard to find, people eventually agreed to use some convenient object as a medium of exchange, and money was born.\n\nAnthropologists have pointed out that there is little evidence for this account. No society has been found that relied mainly on barter among its own members. In small communities, people more commonly gave things to neighbours on the understanding that the favour would be returned later. Many scholars now think that money began as a way of recording such debts. The oldest written documents in the world, clay tablets from Mesopotamia about five thousand years old, are largely accounts of what was owed to the temples, measured in fixed quantities of barley or silver.\n\nAll sorts of objects have served as money. Cowrie shells were used across Africa and Asia for more than three thousand years. On the Pacific island of Yap, the most valuable money consisted of stone discs up to four metres across, quarried on another island hundreds of kilometres away. They were too heavy to move, so when one changed hands it simply stayed where it was and everyone remembered who owned it. One stone is said to have sunk at sea during transport, and it continued to be accepted as someone\'s property although nobody had seen it for generations.\n\nThe first coins were struck in about 600 BC in Lydia, in what is now western Turkey, from a natural mixture of gold and silver. A stamp on each one guaranteed its weight. Coins spread quickly through the Greek world.\n\nPaper money was a Chinese invention. In the province of Sichuan, where coins were made of heavy iron, merchants in the tenth century began leaving their coins with a trusted shop in return for a paper receipt, and the receipts themselves started to circulate. The government later took over the system. Marco Polo described it with amazement. Europe followed only in the seventeenth century.\n\nFor a long time paper notes were promises to pay a certain amount of gold. That link was finally cut in 1971, and modern money has value only because people trust that others will accept it. Most of it is no longer even physical: more than ninety percent exists purely as numbers in bank computers. In this respect, we have returned to where we began, with money as a record of who owes what to whom.',
      qs: [
        ['F', 'Anthropologists have found many societies that depended on barter.', 'Đoạn 2: chưa tìm thấy xã hội nào như vậy.'],
        ['T', 'The earliest written documents record debts.', 'Đoạn 2.'],
        ['T', 'The stone money of Yap was quarried on a different island.', 'Đoạn 3.'],
        ['F', 'A stone that sank at sea lost its value.', 'Đoạn 3: vẫn được công nhận là tài sản.'],
        ['NG', 'Lydian coins were accepted in China.', 'Bài không nói.'],
        ['T', 'Paper money was used in China before it was used in Europe.', 'Đoạn 5.'],
        ['According to many scholars, how did money begin?', 'As a way of keeping track of debts', 'As a gift to the gods', 'As a tool for barter with strangers', 'As jewellery', 'Đoạn 2.'],
        ['What did the stamp on a Lydian coin guarantee?', 'Its weight', 'Its age', 'Its owner', 'Its place of origin', 'Đoạn 4.'],
        ['Why did merchants in Sichuan start using paper receipts?', 'Iron coins were heavy.', 'The government ordered it.', 'Gold had run out.', 'Marco Polo suggested it.', 'Đoạn 5.'],
        ['What gives modern money its value?', 'Trust that others will accept it', 'The gold held by banks', 'The paper it is printed on', 'Laws against barter', 'Đoạn cuối.'],
      ],
      fill: [
        ['____ shells were used as money in Africa and Asia.', ['Cowrie', 'cowrie'], 'Đoạn 3.'],
        ['The first coins were struck in ____.', ['Lydia'], 'Đoạn 4.'],
        ['The link between paper money and ____ was cut in 1971.', ['gold'], 'Đoạn cuối.'],
      ],
    },
    {
      title: 'Why We Get Lost',
      text: 'Some people seem to find their way through an unfamiliar city without effort, while others become confused in a car park. The study of how humans navigate has made great progress in recent years, and it has shown both how the skill works and how easily it can be lost.\n\nThe brain\'s navigation system is centred on a small curved structure called the hippocampus. In 1971 John O\'Keefe, working in London, discovered that certain cells in the hippocampus of a rat became active only when the animal was in a particular spot. He called them place cells. Decades later, the Norwegian scientists May-Britt and Edvard Moser found a second type nearby, grid cells, which fire in a regular pattern as an animal moves and act rather like the lines on a map. Together they form an internal positioning system. The three researchers shared a Nobel Prize in 2014.\n\nEvidence that this system can be trained came from a famous study of London taxi drivers. To obtain a licence, drivers must memorise some twenty-five thousand streets, a task known as "the Knowledge" that usually takes three or four years. Brain scans by Eleanor Maguire showed that the rear part of the hippocampus was larger in taxi drivers than in other people, and that it was larger still in those who had driven for longest. Bus drivers, who follow fixed routes, showed no such difference.\n\nPeople use two main strategies to find their way. One relies on a fixed sequence of turns: left at the bank, right at the church. The other involves building a mental map of how places relate to one another, which allows a traveller to work out a short cut. The second strategy depends more heavily on the hippocampus.\n\nThis has led researchers to ask what satellite navigation is doing to us. In experiments, volunteers who followed spoken instructions through a town remembered far less about the route afterwards than those who used a paper map, and scans showed that the hippocampus was largely inactive. Whether years of such use cause lasting harm is unknown.\n\nUpbringing matters as well. A study of nearly four hundred thousand people who played a navigation game on their phones found that those who had grown up in the countryside, or in cities with irregular street plans, performed better than those raised in cities laid out as a regular grid. Children who are allowed to explore on their own develop better mental maps than those who are always driven.\n\nNavigational ability declines with age, and difficulty in finding one\'s way is often among the earliest signs of Alzheimer\'s disease, which damages the hippocampus first.',
      qs: [
        ['T', 'Place cells become active when an animal is at a specific location.', 'Đoạn 2.'],
        ['F', 'Grid cells were discovered before place cells.', 'Đoạn 2: nhiều thập kỷ SAU.'],
        ['T', 'Learning "the Knowledge" normally takes several years.', 'Đoạn 3: ba hoặc bốn năm.'],
        ['F', 'Bus drivers showed the same brain changes as taxi drivers.', 'Đoạn 3: không có khác biệt.'],
        ['NG', 'Maguire herself trained as a taxi driver.', 'Bài không nói.'],
        ['T', 'Following spoken directions leaves people with a poorer memory of the route.', 'Đoạn 5.'],
        ['NG', 'People who use satellite navigation have more accidents.', 'Bài không nói.'],
        ['What is the advantage of a mental map over a sequence of turns?', 'It allows a traveller to find a short cut.', 'It requires less memory.', 'It works without the hippocampus.', 'It is quicker to learn.', 'Đoạn 4.'],
        ['Who performed best in the navigation game?', 'People who grew up in the countryside or in irregular cities', 'People raised in grid cities', 'Professional drivers', 'The youngest players', 'Đoạn 6.'],
        ['Why is getting lost an early sign of Alzheimer\'s disease?', 'The disease damages the hippocampus first.', 'Patients forget how to read maps.', 'Patients lose their eyesight.', 'The disease affects the legs.', 'Đoạn cuối.'],
      ],
      fill: [
        ['The navigation system is centred on the ____.', ['hippocampus'], 'Đoạn 2.'],
        ['Grid cells act rather like the lines on a ____.', ['map'], 'Đoạn 2.'],
        ['London taxi drivers must memorise about twenty-five thousand ____.', ['streets'], 'Đoạn 3.'],
        ['Children who are allowed to ____ on their own develop better mental maps.', ['explore'], 'Đoạn 6.'],
      ],
    },
  ],
};
