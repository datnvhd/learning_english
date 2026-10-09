/** IELTS đề 12 – phần bổ sung để đủ 40 câu nghe + 40 câu đọc (xem ghi chú "ĐỀ ĐẦY ĐỦ" trong helpers.ts) */
import { RawIeltsFull } from '../helpers';

export const FULL: RawIeltsFull = {
  // Section 1 – Arranging a furniture delivery (nối tiếp)
  l1: {
    lines: [
      'M: Thank you. Is there anything our drivers should know about the property?',
      'W: Yes, it is a flat on the second floor, and the staircase is quite narrow.',
      'M: That should be fine. The table comes in two boxes. Will someone be at home?',
      'W: I will be at work, but my neighbour at number twenty-one has a key and will let them in.',
      'M: Could I take a mobile number in case the driver needs to call?',
      'W: Yes, it is oh seven nine, four four one, six two eight.',
      'M: Thank you. The driver will send a text message about an hour before he arrives.',
      'W: One more question. I also ordered six chairs. Are they coming at the same time?',
      'M: I am afraid the chairs are not in stock yet. They will follow in about two weeks, and there will be no extra delivery charge.',
    ],
    qs: [
      ['Who will let the drivers in?', 'A neighbour', 'The woman', 'The building manager', '"my neighbour at number twenty-one has a key".'],
      ['What does the man say about the chairs?', 'They will be delivered later.', 'They have been cancelled.', 'They will cost extra to deliver.', '"They will follow in about two weeks".'],
    ],
    fill: [
      ['The flat is on the ____ floor.', ['second', '2nd'], 'Tầng hai.'],
      ['The table comes in ____ boxes.', ['2', 'two'], 'Hai thùng.'],
      ['Number of chairs ordered: ____', ['6', 'six'], 'Sáu ghế.'],
    ],
  },
  // Section 2 – The reopening of Westbrook swimming pool (nối tiếp)
  l2: {
    lines: [
      'M: A few more details for regular swimmers. The pool will open at six thirty on weekday mornings for early lane swimming, and it will close at ten at night.',
      'M: Thursday evenings from seven to nine are reserved for the local swimming club, so the main pool will not be available to the public then.',
      'M: The changing rooms have been completely rebuilt. Lockers now take a one-pound coin, which is returned to you.',
      'M: A monthly pass costs thirty-two pounds and gives you unlimited swimming.',
      'M: And for families: every Sunday afternoon, large floating toys will be put in the pool for children, at no extra cost.',
    ],
    qs: [
      ['When is the main pool closed to the public?', 'On Thursday evenings', 'On Sunday afternoons', 'On weekday mornings', '"Thursday evenings from seven to nine are reserved for the local swimming club".'],
      ['What does the speaker say about the lockers?', 'The coin is returned.', 'They are free of charge.', 'They need a membership card.', '"a one-pound coin, which is returned to you".'],
      ['What happens on Sunday afternoons?', 'Floating toys are provided for children.', 'Adults swim free.', 'Lessons are held.', '"large floating toys will be put in the pool for children".'],
    ],
    fill: [
      ['On weekdays the pool opens at ____ thirty.', ['6', 'six'], 'Mở lúc sáu giờ rưỡi.'],
      ['A monthly pass costs ____ pounds.', ['32', 'thirty-two', 'thirty two'], 'Ba mươi hai bảng.'],
    ],
  },
  listening: [
    {
      title: 'Section 3 – Two students discuss a marketing case study',
      lines: [
        "M: Have you read the case study for Thursday's marketing class, Mia? The one about the chocolate company?",
        'W: Yes, twice. It is interesting. The company was losing customers to cheaper brands, and instead of cutting prices, it raised them.',
        'M: That surprised me. Why did it work?',
        'W: Because they changed the product at the same time. They used better cocoa, and they redesigned the packaging to look more luxurious.',
        "M: So people believed it was worth more. Didn't they also reduce the number of flavours?",
        'W: Yes, from twenty-four to nine. The article says customers were confused by too much choice.',
        'M: What do you think was the biggest risk?',
        'W: Losing the supermarkets. Two large chains stopped selling the bars when the price went up.',
        'M: But the company opened its own shops, did it not?',
        'W: Eventually. They started with one in the capital and now have thirty.',
        'M: The tutor wants us to say whether the strategy would work for other products. I do not think it would work for something like washing powder.',
        'W: I agree. Chocolate is often bought as a gift, so people accept a high price.',
        'M: Shall we divide the questions? There are six.',
        'W: I will take the first three, and we can compare notes on Wednesday evening.',
      ],
      qs: [
        ['What did the company do when it was losing customers?', 'It raised its prices.', 'It cut its prices.', 'It closed its factory.', '"instead of cutting prices, it raised them".'],
        ['How was the packaging changed?', 'It was made to look more luxurious.', 'It was made smaller.', 'It was made from recycled paper.', '"redesigned the packaging to look more luxurious".'],
        ['Why did the company reduce the number of flavours?', 'Customers were confused by too much choice.', 'Some flavours were too expensive.', 'Supermarkets demanded it.', '"customers were confused by too much choice".'],
        ['What was the biggest risk?', 'Losing the supermarkets', 'Running out of cocoa', 'Angering the staff', '"Losing the supermarkets".'],
        ['Why do the students think the strategy suits chocolate?', 'It is often bought as a gift.', 'It is cheap to produce.', 'Everybody eats it daily.', '"Chocolate is often bought as a gift".'],
      ],
      fill: [
        ['The class is on ____.', ['Thursday'], '"Thursday\'s marketing class".'],
        ['The number of flavours was reduced to ____.', ['9', 'nine'], 'Còn chín vị.'],
        ['____ large chains stopped selling the bars.', ['Two', 'two', '2'], 'Hai chuỗi siêu thị lớn.'],
        ['The company now has ____ shops.', ['30', 'thirty'], 'Ba mươi cửa hàng.'],
        ['There are ____ questions to answer.', ['6', 'six'], 'Sáu câu hỏi.'],
      ],
    },
    {
      title: 'Section 4 – Lecture on the history of tea',
      lines: [
        'W: Today\'s lecture concerns the most popular drink in the world after water: tea.',
        'W: According to Chinese legend, tea was discovered almost five thousand years ago, when leaves from a wild bush fell into an emperor\'s pot of boiling water. Whatever the truth, tea was certainly being drunk in China two thousand years ago, at first as a medicine.',
        'W: For transport, the leaves were pressed into hard bricks, and in some regions these bricks were used as money.',
        'W: Tea reached Europe in the early seventeenth century, carried by Dutch ships. It was extremely expensive, and in wealthy houses it was kept in a locked box.',
        'W: In Britain, the government taxed tea so heavily that smuggling became common. At one time, more than half the tea drunk in the country had been brought in illegally.',
        'W: To end its dependence on China, Britain wanted to grow tea elsewhere. In eighteen forty-eight, a Scottish botanist, Robert Fortune, travelled through China in disguise and sent thousands of young plants to India.',
        'W: Plantations in India and Ceylon, now Sri Lanka, soon produced tea much more cheaply, and it became the drink of ordinary people.',
        'W: Two inventions came from America. Iced tea became popular at a fair in nineteen oh four, during a heat wave. And the tea bag was created by accident, when a merchant sent out samples in small silk bags and customers put the whole bag in the pot.',
        'W: Today, Turkey drinks the most tea per person, and China remains the largest producer.',
      ],
      qs: [
        ['How was tea first used in China?', 'As a medicine', 'As a perfume', 'As a food for soldiers', '"at first as a medicine".'],
        ['Why did wealthy Europeans keep tea in a locked box?', 'It was very expensive.', 'It was dangerous.', 'It was illegal.', '"It was extremely expensive".'],
        ['Why was so much tea smuggled into Britain?', 'It was heavily taxed.', 'It was banned.', 'The Dutch refused to sell it.', '"the government taxed tea so heavily".'],
        ['What did Robert Fortune do?', 'He secretly sent tea plants to India.', 'He invented the tea bag.', 'He opened the first tea shop.', '"travelled through China in disguise and sent thousands of young plants to India".'],
        ['How was the tea bag created?', 'By accident, from sample bags', 'By a Chinese emperor', 'By a British factory', '"created by accident".'],
      ],
      fill: [
        ['For transport, tea leaves were pressed into hard ____.', ['bricks'], '"pressed into hard bricks".'],
        ['Tea was brought to Europe by ____ ships.', ['Dutch'], '"carried by Dutch ships".'],
        ['Robert Fortune was a Scottish ____.', ['botanist'], '"a Scottish botanist".'],
        ['The first tea bags were made of ____.', ['silk'], '"small silk bags".'],
        ['The country that drinks the most tea per person is ____.', ['Turkey'], '"Turkey drinks the most tea per person".'],
      ],
    },
  ],
  // Bài đọc 1 – The Box That Changed the World (nối tiếp)
  r1: {
    text: 'Container ships themselves have grown to an extraordinary size. The Ideal X carried fifty-eight boxes; the largest vessels today carry more than twenty-four thousand and are four hundred metres long, longer than the tallest skyscrapers are high. They are operated by a crew of only about twenty-five people. Such giants cannot enter many harbours, and the Panama Canal had to be widened, at a cost of over five billion dollars, to allow larger ships to pass.\n\nThis concentration brings risks. In March 2021 one of these vessels, the Ever Given, was blown sideways by strong winds and became stuck across the Suez Canal. For six days nothing could pass, and several hundred ships waited at either end while goods worth billions of dollars were delayed. Containers are also lost at sea, more than a thousand in an average year, and those that float just below the surface are a danger to small boats.\n\nA further problem is inspection. Only a small percentage of containers can be opened and examined by customs officers, which makes them attractive to smugglers. Ports increasingly use large scanners that produce an image of the contents without unloading the box.',
    qs: [
      ['T', 'The largest container ships have very small crews.', 'Khoảng hai mươi lăm người.'],
      ['F', 'The Ever Given blocked the Panama Canal.', 'Mắc kẹt ở kênh đào Suez.'],
      ['NG', 'The captain of the Ever Given lost his job.', 'Bài không nói.'],
      ['Why are containers attractive to smugglers?', 'Few of them are opened and inspected.', 'They are easy to steal.', 'They are never weighed.', 'They cannot be scanned.', 'Chỉ một tỉ lệ nhỏ được hải quan mở kiểm tra.'],
    ],
    fill: [
      ['The Suez Canal was blocked for ____ days.', ['six', '6'], '"For six days nothing could pass".'],
    ],
  },
  reading: [
    {
      title: 'The Invention of the Weekend',
      text: 'The idea that work stops on Saturday and Sunday seems so natural that it is easy to forget how recent it is. The seven-day week itself is ancient, and many religions have long set aside one day for rest and worship. But a regular two-day break for ordinary workers is a product of the industrial age.\n\nIn early nineteenth-century Britain, factory employees worked six days a week, often for twelve hours a day. Sunday was the only holiday, and it was meant to be spent in church. Many workers, especially those paid by the piece, had their own solution. After being paid on Saturday, they spent Sunday drinking and enjoying themselves and simply did not appear at work the next day. The custom was so widespread that it had a humorous name: keeping "Saint Monday".\n\nEmployers hated Saint Monday because machines stood idle. From the 1840s, some of them offered a bargain. If workers would come in reliably on Monday, the factory would close at one or two o\'clock on Saturday afternoon. Religious groups supported the change, hoping that people who had enjoyed themselves on Saturday would be sober in church on Sunday. Campaigners for shorter hours joined in. The free afternoon soon created new forms of entertainment. Professional football in England grew up around matches played at three o\'clock on Saturday, a time chosen because that was when the factories had closed, and cheap railway tickets made seaside excursions possible.\n\nThe full two-day weekend came later and first appeared in the United States. In 1908 a cotton mill in New England gave its Jewish employees Saturday off so that they could observe their day of rest, and extended the arrangement to all staff. The decisive step was taken in 1926 by the car manufacturer Henry Ford, who closed his factories on both Saturday and Sunday without reducing wages. Ford was not acting purely from kindness. He reasoned that workers with free time would travel, shop and need cars. During the economic depression of the 1930s, a shorter week was also seen as a way of sharing the available work among more people, and in 1938 a law fixed the normal working week at forty hours.\n\nThe word "weekend" was first recorded in an English magazine in 1879. Other languages have simply borrowed it.\n\nToday the pattern is being questioned again. Trials of a four-day week in Iceland and Britain have reported that output did not fall and that employees were healthier and less likely to leave their jobs. Critics doubt whether such results would be repeated in hospitals, schools or shops, where the work cannot easily be compressed.',
      qs: [
        ['T', 'A two-day break for workers dates from the industrial period.', 'Đoạn 1.'],
        ['F', '"Saint Monday" was an official religious holiday.', 'Đoạn 2: là tên gọi hài hước cho việc nghỉ không phép.'],
        ['T', 'Employers disliked Saint Monday because their machinery was not being used.', 'Đoạn 3.'],
        ['T', 'The timing of football matches was connected with factory hours.', 'Đoạn 3.'],
        ['NG', 'Henry Ford attended football matches himself.', 'Bài không nói.'],
        ['F', 'Ford reduced wages when he introduced the two-day weekend.', 'Đoạn 4: không giảm lương.'],
        ['Why did religious groups support the free Saturday afternoon?', 'They hoped people would be sober on Sunday.', 'They wanted more people to work on Sunday.', 'They owned the football clubs.', 'They wished to close the railways.', 'Đoạn 3.'],
        ['Why did the New England mill first give Saturdays off?', 'To allow Jewish workers to observe their day of rest', 'To save electricity', 'Because of a strike', 'Because orders had fallen', 'Đoạn 4.'],
        ['What was Ford\'s commercial reason for the two-day weekend?', 'Workers with leisure would buy cars.', 'Factories needed cleaning.', 'Steel was in short supply.', 'The law required it.', 'Đoạn 4.'],
        ['What do critics say about the four-day week?', 'It may not suit every kind of work.', 'It always reduces output.', 'It makes workers ill.', 'It has never been tested.', 'Đoạn cuối.'],
      ],
      fill: [
        ['Missing work after Sunday was called keeping "Saint ____".', ['Monday'], 'Đoạn 2.'],
        ['In 1938 a law fixed the working week at ____ hours.', ['forty', '40'], 'Đoạn 4: "forty hours".'],
        ['The word "weekend" was first recorded in an English ____ in 1879.', ['magazine'], 'Đoạn 5.'],
      ],
    },
    {
      title: 'What Trees Tell Us About the Past',
      text: 'Anyone who has looked at the stump of a felled tree has seen the pattern of rings that marks its growth. In regions with distinct seasons, a tree adds a layer of pale, soft wood in spring and a thinner layer of darker, denser wood in late summer. Together they form one ring for each year, so counting the rings gives the age of the tree. The science built on this simple fact is called dendrochronology.\n\nIts founder was Andrew Douglass, an American astronomer working in Arizona at the beginning of the twentieth century. Douglass was interested in the Sun and hoped that trees might preserve a record of its activity. He noticed that rings are not all the same width. In a wet year the tree grows well and the ring is broad; in a dry year it is narrow. Because all the trees in a region experience the same weather, they show the same sequence of broad and narrow rings, as distinctive as a bar code.\n\nThis gave Douglass a powerful method. By matching the pattern in the outer rings of an old beam with the inner rings of a living tree, he could extend the sequence further and further into the past. In 1929 he used it to give exact dates to the ancient cliff dwellings of the American Southwest, whose age had previously been a matter of guesswork. The sequence for oak trees in Europe has since been extended back more than ten thousand years, using timber from old buildings and trunks preserved in peat bogs.\n\nThe technique has many applications. Historians of art use it to check paintings made on wooden panels: a picture cannot be older than the tree from which its panel was cut. In this way a number of works once believed to be by famous masters have been shown to be later copies. Examination of the wood of the best violins made by Antonio Stradivari has shown that the trees grew during an exceptionally cold period, which produced slow growth and dense timber; some researchers believe that this helps to explain their sound.\n\nTree rings are also an archive of climate. Scars within the rings record forest fires, and sudden narrow rings in trees across the northern hemisphere have been linked to huge volcanic eruptions that dimmed the Sun. Scientists use such records to compare present temperatures with those of earlier centuries.\n\nRings need not be studied by cutting a tree down. A hollow drill removes a core no thicker than a pencil, and the tree is not harmed. The oldest known living tree, a bristlecone pine in California, was found by this method to be more than four thousand eight hundred years old.',
      qs: [
        ['T', 'Wood formed in late summer is darker than wood formed in spring.', 'Đoạn 1.'],
        ['F', 'Douglass was trained as a botanist.', 'Đoạn 2: ông là nhà thiên văn.'],
        ['T', 'Trees in the same region have similar patterns of rings.', 'Đoạn 2.'],
        ['F', 'Before 1929 the age of the cliff dwellings was known precisely.', 'Đoạn 3: trước đó chỉ là phỏng đoán.'],
        ['NG', 'Douglass eventually proved a link between tree rings and the Sun.', 'Bài không nói ông có chứng minh được không.'],
        ['T', 'Some paintings have been shown not to be the work of the artists once named.', 'Đoạn 4.'],
        ['NG', 'Stradivari chose his wood because he knew it was unusually dense.', 'Bài không nói ông biết điều đó.'],
        ['How did Douglass extend the ring sequence into the past?', 'By matching patterns in old timber with those in living trees', 'By measuring the height of trees', 'By studying written records', 'By counting leaves', 'Đoạn 3.'],
        ['What do sudden narrow rings across the northern hemisphere indicate?', 'Large volcanic eruptions', 'Forest fires', 'Heavy rainfall', 'Insect attacks', 'Đoạn 5.'],
        ['How can rings be studied without killing a tree?', 'By removing a thin core with a hollow drill', 'By using X-rays from a satellite', 'By cutting one branch', 'By examining the leaves', 'Đoạn cuối.'],
      ],
      fill: [
        ['The science of dating by tree rings is called ____.', ['dendrochronology'], 'Đoạn 1.'],
        ['The ring pattern is as distinctive as a bar ____.', ['code'], 'Đoạn 2: "a bar code".'],
        ['Old trunks have been preserved in peat ____.', ['bogs'], 'Đoạn 3: "peat bogs".'],
        ['The oldest known living tree is a bristlecone ____.', ['pine'], 'Đoạn cuối.'],
      ],
    },
  ],
};
