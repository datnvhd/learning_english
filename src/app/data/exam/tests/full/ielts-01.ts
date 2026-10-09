/** IELTS đề 1 – phần bổ sung để đủ 40 câu nghe + 40 câu đọc (xem ghi chú "ĐỀ ĐẦY ĐỦ" trong helpers.ts) */
import { RawIeltsFull } from '../helpers';

export const FULL: RawIeltsFull = {
  // Section 1 – Joining a public library (nối tiếp)
  l1: {
    lines: [
      'M: That sounds interesting. What are your opening hours?',
      'W: We are open from nine until seven on weekdays, and from ten until four on Saturdays. We are closed on Sundays.',
      'M: And can I use the computers?',
      'W: Yes, members can book a computer for up to two hours a day. Printing costs ten pence a page.',
      'M: Great. Is there somewhere to park?',
      'W: There is a small car park behind the building, but it is usually full by ten, so most people come by bus. The number fourteen stops right outside.',
      'M: Perfect. I will come in tomorrow with my electricity bill.',
    ],
    qs: [
      ['When is the library closed?', 'On Sundays', 'On Saturdays', 'On Mondays', '"We are closed on Sundays".'],
      ['What does the woman say about the car park?', 'It fills up early.', 'It is free for members only.', 'It is being repaired.', '"it is usually full by ten".'],
    ],
    fill: [
      ['Computers can be booked for up to ____ hours a day.', ['2', 'two'], 'Tối đa hai giờ mỗi ngày.'],
      ['Printing costs ____ pence a page.', ['10', 'ten'], 'Mười xu một trang.'],
      ['Bus number ____ stops outside the library.', ['14', 'fourteen'], 'Xe buýt số mười bốn.'],
    ],
  },
  // Section 2 – Volunteering at the city museum (nối tiếp)
  l2: {
    lines: [
      'W: Let me say a little more about the two roles. School guides work on weekday mornings, when most classes visit. Each guide looks after a group of about fifteen children.',
      'W: Gift shop volunteers work in pairs, so you will never be on your own. You will learn to use the till on your first day.',
      'W: We ask every volunteer to give at least four hours a week, and to stay with us for a minimum of six months.',
      'W: Once a year, in July, we hold a party in the sculpture garden to thank all our volunteers.',
      'W: If you have any questions later, you can email me. My address is on the back of the green form.',
    ],
    qs: [
      ['When do school guides usually work?', 'On weekday mornings', 'At weekends', 'In the evenings', '"School guides work on weekday mornings".'],
      ['How do gift shop volunteers work?', 'In pairs', 'Alone', 'In groups of four', '"Gift shop volunteers work in pairs".'],
      ['Where is the speaker\'s email address?', 'On the back of the form', 'On the museum website', 'On a poster at the entrance', '"My address is on the back of the green form".'],
    ],
    fill: [
      ['Volunteers should stay for a minimum of ____ months.', ['6', 'six'], 'Tối thiểu sáu tháng.'],
      ['The volunteers\' party is held in the sculpture ____.', ['garden'], '"a party in the sculpture garden".'],
    ],
  },
  listening: [
    {
      title: 'Section 3 – Two students plan a field trip report',
      lines: [
        'W: Hi, Sam. Have you started the report on our geography field trip to the coast?',
        "M: Not really. I've only sorted the photographs. I thought we should agree on the structure first.",
        'W: Good idea. The tutor said the report should be no longer than two thousand words, and it counts for thirty percent of our final mark.',
        'M: Right. I suggest we begin with a short description of the site, then the methods, then our results.',
        'W: I agree, but I think the methods section needs to be more detailed than last time. We lost marks because we did not explain how we measured the beach.',
        "M: True. This time we used a tape measure and took readings every ten metres, so that's easy to describe.",
        'W: What did you think was the most surprising result?',
        'M: The amount of plastic. We collected more than three hundred pieces in one hour, and most of them were bottle tops.',
        'W: Yes, I expected fishing nets to be the main problem. We should definitely put that in a chart.',
        "M: I'll do the charts if you write the introduction. I'm better with numbers than with words.",
        "W: Fine. And let's ask Dr. Patel whether we can include our interviews with local residents. I'm not sure they are relevant.",
        'M: Good point. The deadline is the twelfth of May, so shall we meet again on Friday to compare our drafts?',
        'W: Friday is fine. Let us meet in the cafe next to the science library at three.',
      ],
      qs: [
        ['What has the man done so far?', 'Organised the photographs', 'Written the introduction', 'Drawn the charts', '"I\'ve only sorted the photographs".'],
        ['Why did they lose marks on their last report?', 'They did not explain their method clearly.', 'It was too long.', 'It was handed in late.', '"we did not explain how we measured the beach".'],
        ['What did the woman expect to be the main problem on the beach?', 'Fishing nets', 'Bottle tops', 'Glass', '"I expected fishing nets to be the main problem".'],
        ['Who will write the introduction?', 'The woman', 'The man', 'Dr. Patel', '"I\'ll do the charts if you write the introduction" – "Fine".'],
        ['What are they unsure about including?', 'The interviews with residents', 'The photographs', 'The description of the site', '"whether we can include our interviews with local residents".'],
      ],
      fill: [
        ['Maximum length of the report: ____ words', ['2000', '2,000', 'two thousand'], 'Không quá hai nghìn từ.'],
        ['The report counts for ____ percent of the final mark.', ['30', 'thirty'], 'Ba mươi phần trăm điểm cuối kỳ.'],
        ['They took readings every ____ metres.', ['10', 'ten'], 'Đo mỗi mười mét.'],
        ['The deadline is the twelfth of ____.', ['May'], 'Hạn nộp ngày 12 tháng Năm.'],
        ['They will meet on Friday in the ____ next to the science library.', ['cafe', 'café'], 'Gặp ở quán cà phê cạnh thư viện khoa học.'],
      ],
    },
    {
      title: 'Section 4 – Lecture on the history of the bicycle messenger',
      lines: [
        'M: Good afternoon. In this lecture on urban transport, I want to look at a job that many people think is modern, but which is in fact more than a century old: the bicycle messenger.',
        'M: The first bicycle messengers appeared in Paris in the eighteen seventies, where they carried information for the stock exchange. The idea soon spread to New York and London.',
        'M: In those days, the main customers were banks and newspapers. A message could cross a city centre faster by bicycle than by horse, because bicycles could pass between carriages.',
        'M: The trade declined in the nineteen twenties, when the telephone became common. Why pay a rider when you could simply call?',
        'M: Surprisingly, messengers returned in the nineteen eighties. Offices needed to send original documents, such as contracts and architectural drawings, which could not travel down a telephone line.',
        'M: Then came email, and many people predicted the end of the messenger for a second time. Again they were wrong. Today the growth is in food and parcels, driven by online shopping.',
        'M: Modern messengers often use cargo bikes, which can carry loads of up to two hundred kilograms. One study in London found that cargo bikes delivered parcels sixty percent faster than vans in the city centre.',
        'M: There are problems, of course. Many riders are paid for each delivery and have no sick pay or insurance. Accidents are common, especially in wet weather.',
        'M: Several cities are now building small depots at the edge of the centre, where vans unload and bicycles take over for the final kilometre. Next week we will examine one of these projects in detail.',
      ],
      qs: [
        ['Where did the first bicycle messengers work?', 'In Paris', 'In London', 'In New York', '"appeared in Paris in the eighteen seventies".'],
        ['Why were bicycles faster than horses in city centres?', 'They could pass between carriages.', 'They did not need to rest.', 'They used special lanes.', '"because bicycles could pass between carriages".'],
        ['What caused the first decline of the trade?', 'The telephone', 'The car', 'Email', '"when the telephone became common".'],
        ['Why did messengers return in the 1980s?', 'Original documents had to be delivered.', 'Telephones became expensive.', 'Cars were banned from cities.', '"Offices needed to send original documents".'],
        ['What will the next lecture cover?', 'A depot project', 'The history of vans', 'Road safety law', '"Next week we will examine one of these projects in detail".'],
      ],
      fill: [
        ['The earliest messengers carried information for the stock ____.', ['exchange'], '"for the stock exchange".'],
        ['Today the growth is in food and ____.', ['parcels'], '"the growth is in food and parcels".'],
        ['Cargo bikes can carry up to ____ kilograms.', ['200', 'two hundred'], 'Tới hai trăm ký.'],
        ['In London, cargo bikes were ____ percent faster than vans.', ['60', 'sixty'], 'Nhanh hơn sáu mươi phần trăm.'],
        ['Accidents are common, especially in ____ weather.', ['wet'], '"especially in wet weather".'],
      ],
    },
  ],
  // Bài đọc 1 – How Honeybees Communicate (nối tiếp)
  r1: {
    text: 'The waggle dance is not the only signal that bees use. When food is very close to the hive, within about fifty metres, a returning bee performs a simpler "round dance", turning in circles without waggling. This tells the others to search nearby but gives no direction. Bees also communicate through chemicals. A guard bee that detects danger releases an alarm scent that smells rather like bananas and brings other workers rushing to defend the entrance, which is why beekeepers are advised not to eat that fruit before opening a hive.\n\nDances are even used to make collective decisions. In late spring a crowded colony may divide, and thousands of bees leave with the old queen and hang in a cluster on a branch. Scout bees then fly out to look for a new home, such as a hollow tree, and dance to advertise the places they have found. The better the site, the longer and more energetically a scout dances. Gradually more scouts visit and support the best site, and when enough of them agree, the whole swarm flies there together.',
    qs: [
      ['F', 'The round dance shows the direction of the food.', 'Điệu nhảy vòng tròn không cho biết hướng.'],
      ['T', 'The alarm scent of bees resembles the smell of a fruit.', 'Mùi báo động giống mùi chuối.'],
      ['NG', 'A swarm usually finds a new home within one day.', 'Bài không nói mất bao lâu.'],
      ['How does a scout bee show that a site is good?', 'By dancing longer and more energetically', 'By releasing an alarm scent', 'By bringing the queen to see it', 'By staying at the site', 'Địa điểm càng tốt, ong trinh sát nhảy càng lâu và mạnh.'],
    ],
    fill: [
      ['When a colony divides, bees leave with the old ____.', ['queen'], '"leave with the old queen".'],
    ],
  },
  reading: [
    {
      title: 'The Rise of the Department Store',
      text: 'Until the middle of the nineteenth century, shopping in a European or American city was a slow and often uncomfortable business. Shops were small and specialised: one sold gloves, another ribbons, a third umbrellas. Prices were not displayed. A customer was expected to bargain with the shopkeeper, and once inside it was considered rude to leave without buying something.\n\nThe department store changed all of this. One of the earliest was the Bon Marché in Paris, which Aristide Boucicaut took over in 1852 and transformed from a modest shop into a vast emporium. Boucicaut introduced several ideas that seemed revolutionary at the time. Every item carried a fixed price on a label, so there was no bargaining. Anyone could walk in and look around freely with no obligation to buy. Goods could be returned and exchanged, or the money refunded. Because he sold in huge quantities, he could accept a smaller profit on each article and still earn more overall than his competitors.\n\nThe buildings themselves were part of the attraction. New construction methods using iron frames and large sheets of plate glass made it possible to create wide, open floors flooded with daylight, and enormous street-level windows in which goods were arranged like scenes in a theatre. Later stores added lifts, electric lighting, restaurants and reading rooms. In 1898 Harrods in London installed one of the first moving staircases in England; nervous customers who reached the top were reportedly offered a glass of brandy to help them recover.\n\nHistorians have pointed out that department stores also had social effects. For middle-class women in particular, they offered one of the few public places that could be visited respectably without a male companion. The stores provided thousands of jobs for young women as shop assistants, although the hours were long and many employees were required to live in dormitories owned by the firm and to obey strict rules.\n\nNot everyone welcomed the new giants. Small shopkeepers complained that they were being driven out of business and in some countries campaigned for special taxes on large stores. Critics worried that the tempting displays encouraged people to spend more than they could afford, and newspapers reported cases of respectable customers caught stealing.\n\nThe golden age of the department store lasted for about a century. From the 1960s onwards, suburban shopping centres and then discount chains drew customers away, and online shopping has more recently forced many famous names to close. Nevertheless, the principles that Boucicaut introduced, including fixed prices, free entry and the right to return goods, remain the basis of retailing today.',
      qs: [
        ['T', 'Before department stores, customers usually had to negotiate prices.', 'Đoạn 1: khách phải mặc cả với chủ tiệm.'],
        ['F', 'Boucicaut founded the Bon Marché as a large store from the beginning.', 'Đoạn 2: ông tiếp quản một cửa hàng khiêm tốn rồi mở rộng.'],
        ['T', 'Boucicaut made less profit on each item than rival shops did.', 'Đoạn 2: chấp nhận lãi ít hơn trên mỗi món.'],
        ['NG', 'The Bon Marché was the first shop in Paris to use electric lighting.', 'Bài không nói cửa hàng nào dùng đèn điện đầu tiên.'],
        ['F', 'Female shop assistants were free to live wherever they wished.', 'Đoạn 4: nhiều người phải sống trong ký túc xá của hãng.'],
        ['T', 'Some small shopkeepers wanted governments to tax large stores.', 'Đoạn 5: vận động đánh thuế đặc biệt.'],
        ['What made large, bright shop floors possible?', 'Iron frames and plate glass', 'Electric lighting', 'Moving staircases', 'Lower land prices', 'Đoạn 3: khung sắt và kính tấm lớn.'],
        ['Why were some Harrods customers offered brandy?', 'They were frightened by the moving staircase.', 'They had spent a large amount of money.', 'They had waited a long time.', 'They were celebrating the opening.', 'Đoạn 3: khách lo lắng sau khi đi thang cuốn.'],
        ['According to historians, what did department stores offer middle-class women?', 'A respectable public place to visit alone', 'Well-paid management careers', 'Free meals', 'Lessons in bargaining', 'Đoạn 4: nơi công cộng có thể đến mà không cần nam giới đi cùng.'],
        ['What does the writer conclude about Boucicaut\'s ideas?', 'They still underlie modern retailing.', 'They caused department stores to fail.', 'They were soon forgotten.', 'They only worked in Paris.', 'Đoạn cuối: vẫn là nền tảng của ngành bán lẻ.'],
      ],
      fill: [
        ['In early shops, it was thought ____ to leave without buying.', ['rude'], 'Đoạn 1: "it was considered rude".'],
        ['Goods in shop windows were arranged like scenes in a ____.', ['theatre'], 'Đoạn 3: "like scenes in a theatre".'],
        ['Many employees had to live in ____ owned by the firm.', ['dormitories'], 'Đoạn 4: "dormitories owned by the firm".'],
      ],
    },
    {
      title: 'Can Cities Run Out of Water?',
      text: 'In early 2018 the four million inhabitants of Cape Town, South Africa, were told to prepare for "Day Zero", the date on which the city\'s taps would be turned off and residents would have to queue at collection points for a daily ration of twenty-five litres. After three years of exceptionally low rainfall, the reservoirs that supply the city had fallen to less than a quarter of their capacity.\n\nDay Zero never came. The city authorities introduced strict limits of fifty litres per person per day, raised the price of water for heavy users and reduced the pressure in the pipes. Farmers in the surrounding region gave up part of their own allocation. Just as importantly, the public responded. People collected shower water in buckets to flush their toilets, hotels removed the plugs from baths, and a map was published online showing which households were keeping within their limit. Within a few months the city had halved its consumption, and when good rains returned in the winter, the immediate danger passed.\n\nCape Town is not unique. Sao Paulo in Brazil came within weeks of exhausting its main reservoir in 2015, and Chennai in India saw its four principal lakes dry up almost completely in 2019. Researchers estimate that by 2050 more than half of the world\'s population will live in regions that suffer water shortages for at least one month a year. Growing cities, changing rainfall and wasteful habits are all part of the explanation.\n\nA great deal of water never reaches a tap at all. In many cities between a quarter and a half of the supply escapes through leaking pipes before it can be used. Repairing them is expensive and unglamorous, but it is frequently the cheapest way of obtaining "new" water. Tokyo, which has invested heavily in detecting leaks, loses only about three percent.\n\nOther solutions involve finding additional sources. Singapore, a small island with few rivers, collects rain from two thirds of its land surface and cleans waste water so thoroughly that it can be drunk again; this recycled supply now meets around forty percent of demand. Coastal cities can remove the salt from sea water, although the process uses a great deal of energy and produces very salty waste that must be disposed of carefully.\n\nExperts stress that there is no single answer. What the Cape Town crisis demonstrated, they say, is that a combination of fair rules, honest information and public cooperation can change behaviour remarkably quickly. The harder task is to maintain those good habits once the rain has started to fall again.',
      qs: [
        ['T', 'The Cape Town crisis followed several years of unusually dry weather.', 'Đoạn 1: ba năm mưa đặc biệt ít.'],
        ['F', 'On Day Zero, the taps in Cape Town were turned off.', 'Đoạn 2: "Day Zero never came".'],
        ['T', 'Farmers near Cape Town agreed to use less water.', 'Đoạn 2: nông dân nhường một phần hạn mức.'],
        ['NG', 'Water in Sao Paulo is more expensive than in Cape Town.', 'Bài không so sánh giá nước.'],
        ['F', 'Fixing leaking pipes is usually the most expensive way to increase supply.', 'Đoạn 4: thường là cách RẺ nhất.'],
        ['T', 'Singapore uses treated waste water as drinking water.', 'Đoạn 5: nước thải được làm sạch đến mức uống được.'],
        ['NG', 'Most residents of Singapore dislike the taste of recycled water.', 'Bài không đề cập.'],
        ['What was the purpose of the online map in Cape Town?', 'To show which households stayed within the limit', 'To show where the reservoirs were', 'To help tourists find hotels', 'To locate leaking pipes', 'Đoạn 2: bản đồ cho thấy hộ nào giữ đúng hạn mức.'],
        ['What is a disadvantage of removing salt from sea water?', 'It requires large amounts of energy.', 'It can only be done in winter.', 'It makes the water unsafe.', 'It is illegal in many countries.', 'Đoạn 5: tốn nhiều năng lượng và tạo chất thải mặn.'],
        ['What do experts consider the most difficult task?', 'Keeping good habits after the crisis ends', 'Building larger reservoirs', 'Persuading farmers to move', 'Predicting rainfall', 'Đoạn cuối: giữ thói quen tốt khi mưa trở lại.'],
      ],
      fill: [
        ['On Day Zero, each resident would receive a daily ____ of twenty-five litres.', ['ration'], 'Đoạn 1: "a daily ration of twenty-five litres".'],
        ['People collected shower water in ____ to flush their toilets.', ['buckets'], 'Đoạn 2: "in buckets".'],
        ['Tokyo loses only about ____ percent of its water through leaks.', ['three', '3'], 'Đoạn 4: "only about three percent".'],
        ['Recycled water meets around ____ percent of demand in Singapore.', ['forty', '40'], 'Đoạn 5: "around forty percent".'],
      ],
    },
  ],
};
