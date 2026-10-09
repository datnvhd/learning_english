/** IELTS đề 16 – phần bổ sung để đủ 40 câu nghe + 40 câu đọc (xem ghi chú "ĐỀ ĐẦY ĐỦ" trong helpers.ts) */
import { RawIeltsFull } from '../helpers';

export const FULL: RawIeltsFull = {
  // Section 1 – Booking a flight at a travel agency (nối tiếp)
  l1: {
    lines: [
      'M: Thank you, Ms. Penrose. Would you like me to arrange anything else for your trip?',
      'W: Yes, I need a hotel for the first three nights. After that I am staying with friends.',
      'M: I can recommend the Orchid Hotel, near the river. It is ninety pounds a night, with breakfast.',
      'W: That sounds fine. Is it far from the airport?',
      'M: About twenty-five minutes by taxi. Or you could take the airport train, which is much cheaper.',
      'W: I will take the train. Do I need a visa?',
      'M: Not for a stay of less than thirty days, but your passport must be valid for six months after you arrive.',
      'W: Good. And what about travel insurance?',
      'M: We offer a policy for forty-two pounds that covers medical costs and lost luggage. I strongly recommend it.',
      'W: Please add that. I will pay by credit card.',
    ],
    qs: [
      ['How will the woman travel from the airport to the hotel?', 'By train', 'By taxi', 'By hotel bus', '"I will take the train".'],
      ['What does the travel agent say about a visa?', 'It is not needed for a short stay.', 'It must be bought at the airport.', 'It takes six months to obtain.', '"Not for a stay of less than thirty days".'],
    ],
    fill: [
      ['Hotel booking: first ____ nights', ['3', 'three'], 'Ba đêm đầu.'],
      ['Room rate: ____ pounds a night', ['90', 'ninety'], 'Chín mươi bảng một đêm.'],
      ['Insurance policy: ____ pounds', ['42', 'forty-two', 'forty two'], 'Bốn mươi hai bảng.'],
    ],
  },
  // Section 2 – Welcome talk for new employees (nối tiếp)
  l2: {
    lines: [
      'W: Now a few words about holidays and pay. You are entitled to twenty-six days of paid holiday a year. Please request leave at least two weeks in advance through the staff website.',
      'W: Salaries are paid on the last Thursday of every month, directly into your bank account.',
      'W: If you are ill, telephone your manager before nine o\'clock on the first day. After five days of absence, we need a note from a doctor.',
      'W: Each of you has been given a mentor, an experienced colleague who will have lunch with you this week and answer your questions.',
      'W: And finally, on Friday at four, we would like to invite you all to a welcome drink in the roof garden.',
    ],
    qs: [
      ['How should staff request holiday?', 'Through the staff website', 'By emailing Human Resources', 'By filling in a paper form', '"through the staff website".'],
      ['What should employees do on the first day of illness?', 'Phone their manager before nine', 'Send a doctor\'s note', 'Email a colleague', '"telephone your manager before nine o\'clock on the first day".'],
      ['Where will the welcome drink be held?', 'In the roof garden', 'In the canteen', 'In the basement', '"a welcome drink in the roof garden".'],
    ],
    fill: [
      ['Staff have ____ days of paid holiday a year.', ['26', 'twenty-six', 'twenty six'], 'Hai mươi sáu ngày phép.'],
      ['Salaries are paid on the last ____ of every month.', ['Thursday'], 'Thứ Năm cuối mỗi tháng.'],
    ],
  },
  listening: [
    {
      title: 'Section 3 – Students plan a survey on reading habits',
      lines: [
        "W: OK, Ben, for our sociology assignment we need to carry out a small survey. I thought we could look at reading habits among students.",
        'M: Good topic. Do you mean reading for study or for pleasure?',
        'W: For pleasure. I have a feeling people read much less than they used to.',
        'M: We should not assume that. Let us ask how many books they read last year and compare it with national figures.',
        'W: Fine. How many questions should we have?',
        'M: No more than twelve. If a questionnaire is long, people give up halfway.',
        'W: And should the questions be open or closed?',
        'M: Mostly closed, with boxes to tick, because they are easier to count. But we could add one open question at the end, asking what stops them from reading more.',
        'W: I can guess the answer: their phones.',
        'M: Probably, but let them tell us. Where shall we find people?',
        'W: The canteen at lunchtime. If we only ask in the library, the results will be biased towards people who like books.',
        'M: Good point. We need at least eighty answers to say anything useful.',
        'W: I will design the questionnaire, and we should test it on five friends first to check that the questions are clear.',
        'M: Yes, a pilot. Then I will put the results into a spreadsheet. The report is due on the sixth of December.',
      ],
      qs: [
        ['What kind of reading will the survey examine?', 'Reading for pleasure', 'Reading for study', 'Reading online news', '"For pleasure".'],
        ['Why does the man want a short questionnaire?', 'People give up if it is long.', 'Paper is expensive.', 'The tutor set a limit.', '"If a questionnaire is long, people give up halfway".'],
        ['Why will most questions be closed?', 'They are easier to count.', 'They are more interesting.', 'They take longer to answer.', '"because they are easier to count".'],
        ['Why do they decide not to ask people only in the library?', 'The results would be biased.', 'The library is too quiet.', 'It is closed at lunchtime.', '"the results will be biased towards people who like books".'],
        ['What will they do before the main survey?', 'Test the questionnaire on friends', 'Ask permission from the canteen', 'Read the national figures', '"we should test it on five friends first".'],
      ],
      fill: [
        ['The questionnaire will have no more than ____ questions.', ['12', 'twelve'], 'Không quá mười hai câu.'],
        ['They will ask people in the ____ at lunchtime.', ['canteen'], '"The canteen at lunchtime".'],
        ['They need at least ____ answers.', ['80', 'eighty'], 'Ít nhất tám mươi câu trả lời.'],
        ['The man will put the results into a ____.', ['spreadsheet'], '"put the results into a spreadsheet".'],
        ['The report is due on the sixth of ____.', ['December'], 'Ngày 6 tháng Mười Hai.'],
      ],
    },
    {
      title: 'Section 4 – Lecture on the history of the map of the London Underground',
      lines: [
        'M: Today I would like to tell you about a piece of graphic design that has been copied all over the world: the map of the London Underground.',
        'M: The first underground line opened in eighteen sixty-three. As more lines were added, the early maps tried to show them accurately, on top of a street plan of the city.',
        'M: The result was confusing. Stations in the centre were crowded together, while those in the suburbs were spread far apart, so the lines ran off the edge of the paper.',
        'M: The solution came from Harry Beck, a young engineering draughtsman who had lost his job with the Underground in nineteen thirty-one. He realised that passengers travelling below ground did not care about distance. They only needed to know the order of the stations and where to change.',
        'M: So he drew the system as a diagram, rather like an electrical circuit. All the lines were straight and ran only horizontally, vertically or at forty-five degrees. The stations were spaced equally.',
        'M: The only feature from the surface that he kept was the River Thames.',
        'M: The publicity department at first rejected the design as too radical. A small trial edition was printed in nineteen thirty-three, and the public loved it.',
        'M: Beck was paid only a few pounds. He continued to improve the map for nearly thirty years, without further payment.',
        'M: His approach has a weakness: visitors sometimes take the train between two stations that are, in reality, only a short walk apart.',
        'M: Even so, almost every transport map in the world now follows his principles.',
      ],
      qs: [
        ['What was wrong with the early maps?', 'They were confusing because they followed real distances.', 'They showed too few stations.', 'They were printed in one colour.', '"Stations in the centre were crowded together... The result was confusing".'],
        ['What did Beck realise about underground passengers?', 'They do not care about distance.', 'They want to see the streets above.', 'They prefer small maps.', '"passengers travelling below ground did not care about distance".'],
        ['What did Beck\'s design resemble?', 'An electrical circuit', 'A street plan', 'A railway timetable', '"rather like an electrical circuit".'],
        ['How did the publicity department first react?', 'It rejected the design.', 'It printed a million copies.', 'It gave Beck a prize.', '"at first rejected the design as too radical".'],
        ['What is a weakness of the diagram?', 'It hides how close some stations really are.', 'It leaves out the river.', 'It cannot show new lines.', '"two stations that are, in reality, only a short walk apart".'],
      ],
      fill: [
        ['The first underground line opened in ____.', ['1863', 'eighteen sixty-three'], 'Năm 1863.'],
        ['Harry Beck worked as an engineering ____.', ['draughtsman'], '"a young engineering draughtsman".'],
        ['Lines ran horizontally, vertically or at ____ degrees.', ['45', 'forty-five', 'forty five'], 'Bốn mươi lăm độ.'],
        ['The only surface feature kept was the River ____.', ['Thames'], '"the River Thames".'],
        ['Beck improved the map for nearly ____ years.', ['30', 'thirty'], 'Gần ba mươi năm.'],
      ],
    },
  ],
  // Bài đọc 1 – Mapping the World (nối tiếp)
  r1: {
    text: 'Maps have never been purely scientific documents. Medieval European maps placed Jerusalem at the centre and east at the top, and filled unknown regions with sea monsters. Rulers used maps to claim territory, and map-makers sometimes drew borders, towns or islands that did not exist. One such "phantom island", named Sandy Island, appeared on charts of the Pacific near New Caledonia for more than a century and was still shown on digital maps until 2012, when an Australian research ship sailed to the spot and found only open sea, fourteen hundred metres deep.\n\nPublishers have also inserted small deliberate errors to catch anyone copying their work. A New York road map of the 1930s showed a village called Agloe at a junction where there was nothing at all. A few years later the name appeared on a rival map, and the publisher prepared to go to court. The rival\'s defence was unexpected: a shop called the Agloe General Store had been built at the junction by someone who had seen the name on the original map, and so the place had, in a sense, become real.',
    qs: [
      ['T', 'Medieval European maps often put east at the top.', '"placed Jerusalem at the centre and east at the top".'],
      ['F', 'Sandy Island was removed from all maps in the nineteenth century.', 'Vẫn còn trên bản đồ số đến năm 2012.'],
      ['NG', 'The publisher of the New York map won the court case.', 'Bài không nói kết quả.'],
      ['Why did publishers put deliberate errors on maps?', 'To detect copying', 'To confuse enemies', 'To save paper', 'To amuse customers', '"to catch anyone copying their work".'],
    ],
    fill: [
      ['A non-existent island on a chart is called a "____ island".', ['phantom'], '"phantom island".'],
    ],
  },
  reading: [
    {
      title: 'The Truth About Vikings',
      text: 'Ask most people to describe a Viking and they will mention a fierce warrior in a helmet with horns, leaping from a longship to burn a monastery. Some of this picture is accurate. From the late eighth century, raiders from Scandinavia did attack the coasts of Britain, Ireland and France, and the monks who wrote the history of the period had every reason to remember them with horror. But much of the popular image is wrong, and the rest is incomplete.\n\nThe horned helmet is the most famous error. No such helmet has ever been found in a Viking grave. The idea comes from the nineteenth century, when a costume designer gave them to the singers in an opera by the German composer Richard Wagner. Real Viking helmets were simple caps of iron or leather.\n\nNor were most Scandinavians of the time raiders at all. The word "viking" originally described an activity, something like "going on an expedition", rather than a people. The great majority were farmers who grew barley and kept cattle, and many of those who sailed abroad went to trade. Viking merchants travelled down the rivers of Russia to Constantinople and Baghdad, exchanging furs, amber and slaves for silver; tens of thousands of Arab coins have been dug up in Sweden.\n\nTheir success depended on their ships. The longship was built of overlapping planks, which made it light and flexible, and it needed less than a metre of water, so that it could be sailed up rivers and pulled onto a beach. With a favourable wind it could cover more than two hundred kilometres in a day.\n\nIn these vessels the Norse crossed the North Atlantic. They settled Iceland in about 870 and Greenland a century later. Stories written down in Iceland long afterwards told of a voyage further west to a place called Vinland. For centuries these were dismissed as legends, until, in 1960, the Norwegian explorers Helge and Anne Stine Ingstad discovered the remains of Norse buildings at L\'Anse aux Meadows in Newfoundland, Canada. Europeans had reached America five hundred years before Columbus.\n\nViking society had some unexpected features. Women could own property and ask for a divorce. Free men met at regular assemblies to settle disputes and make laws; the Icelandic parliament, founded in 930, still exists.\n\nThe raids gradually ceased as Scandinavian kings adopted Christianity and built stronger states. But the Vikings left lasting traces. Everyday English words such as "sky", "egg", "window" and "husband" come from their language, and the days of the week still bear the names of their gods: Thursday is Thor\'s day.',
      qs: [
        ['T', 'Accounts of Viking raids were written mainly by their victims.', 'Đoạn 1: các tu sĩ viết sử.'],
        ['F', 'Archaeologists have found many horned helmets in Viking graves.', 'Đoạn 2: chưa từng tìm thấy.'],
        ['T', 'Most Scandinavians of the Viking age worked on the land.', 'Đoạn 3: đa số là nông dân.'],
        ['F', 'Viking longships could sail only in deep water.', 'Đoạn 4: cần chưa tới một mét nước.'],
        ['NG', 'The settlement in Newfoundland lasted for more than a century.', 'Bài không nói kéo dài bao lâu.'],
        ['T', 'Viking women were allowed to end a marriage.', 'Đoạn 6.'],
        ['Where does the idea of the horned helmet come from?', 'A nineteenth-century opera costume', 'A medieval painting', 'An Arab traveller\'s report', 'A Roman statue', 'Đoạn 2.'],
        ['What does the discovery of Arab coins in Sweden show?', 'Vikings traded over great distances.', 'Arabs invaded Scandinavia.', 'Vikings made their own money.', 'Sweden was rich in silver mines.', 'Đoạn 3.'],
        ['Why was the 1960 discovery important?', 'It proved that the Norse had reached America.', 'It showed where Columbus landed.', 'It revealed a Viking parliament.', 'It contained horned helmets.', 'Đoạn 5.'],
        ['Why did the raids come to an end?', 'Scandinavian kings became Christian and built stronger states.', 'The longships were destroyed.', 'The climate became too cold.', 'England paid them to stop.', 'Đoạn cuối.'],
      ],
      fill: [
        ['The longship was built of overlapping ____.', ['planks'], 'Đoạn 4.'],
        ['The stories called the land to the west ____.', ['Vinland'], 'Đoạn 5.'],
        ['Thursday is named after the god ____.', ['Thor'], 'Đoạn cuối: "Thor\'s day".'],
      ],
    },
    {
      title: 'The Placebo of Price',
      text: 'Economists traditionally assumed that people decide what something is worth and then compare that value with the price. A growing body of research suggests that the process often runs in the opposite direction: the price itself changes how much we enjoy what we buy.\n\nThe clearest demonstration comes from an experiment carried out in California in 2008 by a team led by Antonio Rangel. Volunteers lying in a brain scanner were given small sips of wine and told the price of each bottle. In reality, the same wine was sometimes described as costing ten dollars and sometimes ninety. The volunteers consistently said that they preferred the "expensive" wine. More strikingly, the scanner showed greater activity in a part of the brain associated with pleasure. They were not merely pretending to like it more; they actually experienced more enjoyment.\n\nThe effect is not limited to luxuries. In a study by the behavioural economist Dan Ariely, volunteers were given mild electric shocks before and after taking a pill described as a new painkiller. Everyone received the same pill, which contained no medicine at all. Of those told that it cost two dollars and fifty cents, eighty-five percent reported that it reduced the pain. Of those told that it had been reduced to ten cents, only sixty-one percent did.\n\nWhy should price have this power? The most likely explanation is that we use it as a guide to quality when we cannot judge quality directly. Usually this is reasonable, since better products tend to cost more. The difficulty arises when the rule is applied automatically. In blind tastings, in which the labels are hidden, ordinary drinkers show no preference for expensive wines over cheap ones, and even trained judges are inconsistent.\n\nBusinesses understand the principle well. Restaurants often place one very expensive dish at the top of the menu, not because many customers will order it, but because it makes the other prices look moderate. This is known as anchoring. Shops display a high "original" price beside a sale price for the same reason. And a product that fails to sell may do better when its price is raised: one much-repeated story tells of a jeweller whose turquoise pieces sold out only after an assistant doubled the price by mistake.\n\nDoes knowing about these tricks protect us? Only partly. Volunteers who are warned in advance still show the effects, though more weakly. Researchers suggest a few practical defences: decide what you are willing to pay before looking at the price, compare products without their labels where possible, and be especially careful with goods, such as medicines sold under different brand names, whose quality you cannot easily assess.',
      qs: [
        ['F', 'Economists have always believed that prices change our enjoyment.', 'Đoạn 1: truyền thống giả định ngược lại.'],
        ['T', 'In the Californian experiment, volunteers tasted identical wine at different stated prices.', 'Đoạn 2.'],
        ['F', 'The brain scans showed that volunteers were only pretending to prefer expensive wine.', 'Đoạn 2: họ thực sự cảm thấy thích hơn.'],
        ['T', 'The pills in Ariely\'s study contained no active drug.', 'Đoạn 3.'],
        ['NG', 'Ariely\'s volunteers were all medical students.', 'Bài không nói.'],
        ['T', 'In blind tastings, ordinary drinkers do not prefer expensive wine.', 'Đoạn 4.'],
        ['NG', 'The jeweller in the story later opened a second shop.', 'Bài không nói.'],
        ['Why do people use price as a guide to quality?', 'They often cannot judge quality directly.', 'They enjoy spending money.', 'Shops tell them to.', 'Cheap goods are always bad.', 'Đoạn 4.'],
        ['Why do restaurants put a very expensive dish on the menu?', 'It makes other dishes seem reasonably priced.', 'Most customers order it.', 'It is the chef\'s favourite.', 'It reduces waste.', 'Đoạn 5.'],
        ['What happens when volunteers are warned about these effects?', 'The effects are weaker but still present.', 'The effects disappear completely.', 'The effects become stronger.', 'Volunteers refuse to take part.', 'Đoạn cuối.'],
      ],
      fill: [
        ['The scanner showed more activity in a brain area associated with ____.', ['pleasure'], 'Đoạn 2.'],
        ['Making other prices look moderate with one high price is called ____.', ['anchoring'], 'Đoạn 5.'],
        ['The jeweller\'s ____ pieces sold out after the price was doubled.', ['turquoise'], 'Đoạn 5.'],
        ['In blind tastings, the ____ are hidden.', ['labels'], 'Đoạn 4.'],
      ],
    },
  ],
};
