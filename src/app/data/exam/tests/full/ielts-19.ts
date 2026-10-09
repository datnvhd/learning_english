/** IELTS đề 19 – phần bổ sung để đủ 40 câu nghe + 40 câu đọc (xem ghi chú "ĐỀ ĐẦY ĐỦ" trong helpers.ts) */
import { RawIeltsFull } from '../helpers';

export const FULL: RawIeltsFull = {
  // Section 1 – Arranging a home internet connection (nối tiếp)
  l1: {
    lines: [
      'M: Thank you. Could I check a few more things? Is there already a telephone socket in the flat?',
      'W: Yes, there is one in the living room, next to the window.',
      'M: Good. The engineer will bring the router with him. It is yours to keep, provided that you stay with us for at least eighteen months.',
      'W: And how do I pay each month?',
      'M: By direct debit. The first payment will be taken ten days after the connection is made.',
      'W: Can I have a television package as well?',
      'M: You can add one later for nine pounds a month, but there is no need to decide today.',
      'W: I will leave that for now. What if the internet stops working?',
      'M: Our help line is open from seven in the morning until eleven at night, and the number is printed on the bottom of the router.',
    ],
    qs: [
      ['Where is the telephone socket?', 'In the living room', 'In the hall', 'In the bedroom', '"there is one in the living room, next to the window".'],
      ['What does the woman decide about the television package?', 'She will not take it for now.', 'She adds it immediately.', 'She asks for a discount.', '"I will leave that for now".'],
    ],
    fill: [
      ['Minimum contract: ____ months', ['18', 'eighteen'], 'Ít nhất mười tám tháng.'],
      ['The first payment is taken ____ days after connection.', ['10', 'ten'], 'Mười ngày sau khi kết nối.'],
      ['A television package costs ____ pounds a month.', ['9', 'nine'], 'Chín bảng một tháng.'],
    ],
  },
  // Section 3 – Students discuss the results of a survey (nối tiếp)
  l2: {
    lines: [
      'W: Let us look at some of the other figures. What did people say about saving money?',
      'M: Only about one in five manages to save anything at all. Most of those are students who live with their parents.',
      'W: That makes sense. And transport?',
      'M: The average is thirty pounds a month. Students who cycle spend almost nothing, of course.',
      'W: We should recommend something in the report. The tutor likes practical suggestions.',
      'M: How about proposing that the university runs a workshop on managing money during the first week of term?',
      'W: Good idea. And we could suggest a second-hand book sale. I will write that section.',
      'M: Then I will finish the charts. Our presentation is on the fourteenth, so we have nine days left.',
    ],
    qs: [
      ['Which students are most likely to save money?', 'Those who live with their parents', 'Those with part-time jobs', 'Those who cycle', '"Most of those are students who live with their parents".'],
      ['What will they propose to the university?', 'A workshop on managing money', 'Lower rents', 'Free bus passes', '"the university runs a workshop on managing money".'],
      ['What will the woman write?', 'The section with recommendations', 'The introduction', 'The charts', '"I will write that section".'],
    ],
    fill: [
      ['Average spending on transport: ____ pounds a month', ['30', 'thirty'], 'Ba mươi bảng một tháng.'],
      ['They have ____ days left before the presentation.', ['9', 'nine'], 'Còn chín ngày.'],
    ],
  },
  listening: [
    {
      title: 'Section 2 – A guide to a historic house and gardens',
      lines: [
        'M: Welcome to Thornbury Hall. Before you begin your visit, I would like to give you a brief introduction.',
        'M: The house was built in sixteen eighty for a wealthy wool merchant, and the same family lived here for nearly three hundred years. It has been open to the public since nineteen seventy-four.',
        'M: There are twenty-two rooms on view. The highlight for most visitors is the long gallery on the first floor, which contains more than sixty family portraits.',
        'M: In the kitchen, in the basement, our staff demonstrate cooking over an open fire. Demonstrations take place at eleven and at two.',
        'M: Please do not touch the furniture or the curtains. Some of the fabrics are over two hundred years old and extremely delicate.',
        'M: Photography is allowed without flash.',
        'M: The gardens cover fifteen hectares. Do not miss the walled garden, where we grow old varieties of apples and pears. The fruit is on sale in the shop in autumn.',
        'M: Children can borrow an explorer\'s bag from the ticket desk, with a magnifying glass and a list of things to find.',
        'M: The tea room is in the former stables and serves lunch until half past two.',
        'M: The house closes at five, but the gardens stay open until sunset. Your ticket allows you to come back free of charge within twelve months.',
      ],
      qs: [
        ['Who was the house built for?', 'A wool merchant', 'A duke', 'A bishop', '"for a wealthy wool merchant".'],
        ['What is the highlight for most visitors?', 'The long gallery', 'The kitchen', 'The walled garden', '"The highlight for most visitors is the long gallery".'],
        ['Why should visitors not touch the curtains?', 'The fabrics are very old and delicate.', 'They have been newly cleaned.', 'They are alarmed.', '"Some of the fabrics are over two hundred years old and extremely delicate".'],
        ['What can children borrow?', "An explorer's bag", 'A costume', 'A bicycle', '"Children can borrow an explorer\'s bag".'],
        ['What does the ticket allow?', 'Free return visits within a year', 'A free lunch', 'Entry to the kitchen only', '"come back free of charge within twelve months".'],
      ],
      fill: [
        ['The house was built in ____.', ['1680', 'sixteen eighty'], 'Năm 1680.'],
        ['There are ____ rooms on view.', ['22', 'twenty-two', 'twenty two'], 'Hai mươi hai phòng.'],
        ['The gardens cover ____ hectares.', ['15', 'fifteen'], 'Mười lăm héc-ta.'],
        ['The walled garden grows old varieties of apples and ____.', ['pears'], '"apples and pears".'],
        ['The tea room is in the former ____.', ['stables'], '"in the former stables".'],
      ],
    },
    {
      title: 'Section 4 – Lecture on urban farming under the ground',
      lines: [
        'W: In our series on food and cities, today I want to describe a rather unusual kind of farm, one that operates below the streets of London.',
        'W: During the Second World War, tunnels were dug thirty-three metres under the district of Clapham as shelters from air raids. Each could hold eight thousand people. After the war they stood empty for decades.',
        'W: In two thousand and fifteen, a company began to grow salad leaves and herbs there. The plants do not grow in soil. Their roots sit on mats made from recycled carpet and are fed with water containing nutrients.',
        'W: Light comes from LED lamps, which are tuned to the pink and purple colours that plants use most efficiently.',
        'W: The underground location has real advantages. The temperature stays at about sixteen degrees all year, so little heating is needed, and there are no insects, so no pesticides are used.',
        'W: The system uses seventy percent less water than a field, because the water is collected and used again.',
        'W: Crops can be harvested throughout the year and delivered to restaurants within four hours of being picked.',
        'W: There are disadvantages. The electricity for lighting is expensive, and only small, fast-growing plants are profitable. You could not grow wheat or potatoes this way.',
        'W: Critics also point out that such farms will never feed a city. Supporters reply that they can reduce the distance that fresh food travels.',
        'W: For your seminar, think about which empty spaces in your own city could be used to grow food.',
      ],
      qs: [
        ['What were the tunnels originally built for?', 'Shelter from air raids', 'An underground railway', 'Storing food', '"as shelters from air raids".'],
        ['What do the plants grow on?', 'Mats made from recycled carpet', 'Sand', 'Compost', '"mats made from recycled carpet".'],
        ['Why are no pesticides needed?', 'There are no insects underground.', 'The plants are resistant.', 'The lamps kill bacteria.', '"there are no insects, so no pesticides are used".'],
        ['What is a disadvantage of the farm?', 'Electricity for lighting is expensive.', 'The tunnels are too hot.', 'Water is scarce.', '"The electricity for lighting is expensive".'],
        ['What should students think about for the seminar?', 'Empty spaces in their city for growing food', 'The history of the war', 'How to grow wheat indoors', '"which empty spaces in your own city could be used to grow food".'],
      ],
      fill: [
        ['The tunnels are ____ metres under the ground.', ['33', 'thirty-three', 'thirty three'], 'Ba mươi ba mét.'],
        ['The temperature stays at about ____ degrees all year.', ['16', 'sixteen'], 'Khoảng mười sáu độ.'],
        ['The system uses ____ percent less water than a field.', ['70', 'seventy'], 'Ít hơn bảy mươi phần trăm.'],
        ['Crops reach restaurants within ____ hours of being picked.', ['4', 'four'], 'Trong vòng bốn giờ.'],
        ['Crops such as ____ or potatoes cannot be grown this way.', ['wheat'], '"You could not grow wheat or potatoes".'],
      ],
    },
  ],
  // Bài đọc 1 – The Statues of Easter Island (nối tiếp)
  r1: {
    text: 'In the nineteenth century most of the statues were lying on their faces. Whether they were pulled down in conflicts between rival groups or simply fell during earthquakes is uncertain. Many have since been set upright again by archaeologists. The largest restoration, at a site called Tongariki, was completed in the 1990s with the help of a Japanese crane company after a tsunami in 1960 had scattered its fifteen statues across the shore.\n\nSome statues once carried a separate cylinder of red stone on the head, usually described as a hat but more probably representing hair tied in a knot. Others had eyes made of white coral, which were set into the sockets only for ceremonies. It was long assumed that the statues consisted of heads alone, because so many are buried up to the neck on the slopes of the quarry. Excavations have shown that these figures have complete bodies extending several metres below the surface, with carvings on their backs that had been protected from the weather. The island became part of Chile in 1888, and today its economy depends almost entirely on tourism.',
    qs: [
      ['T', 'A tsunami damaged the site at Tongariki.', 'Sóng thần năm 1960 làm văng mười lăm bức tượng.'],
      ['F', 'The statues near the quarry consist only of heads.', 'Chúng có thân hoàn chỉnh chôn dưới đất.'],
      ['NG', 'The red stone cylinders were carved in the same quarry as the statues.', 'Bài không nói chúng được tạc ở đâu.'],
      ['When were the coral eyes placed in the statues?', 'Only for ceremonies', 'When the statue was first carved', 'After a chief died', 'During earthquakes', '"set into the sockets only for ceremonies".'],
    ],
    fill: [
      ['The island became part of ____ in 1888.', ['Chile'], '"became part of Chile in 1888".'],
    ],
  },
  reading: [
    {
      title: 'The Rise and Fall of the Zeppelin',
      text: 'In the first decades of the twentieth century, it seemed quite possible that the future of long-distance air travel belonged not to the aeroplane but to the airship. The most successful airships were built in Germany by the company founded by Count Ferdinand von Zeppelin, a retired army officer who launched his first craft over Lake Constance in 1900, when he was sixty-two years old.\n\nA Zeppelin was a rigid airship. Unlike a balloon, it had a light metal skeleton covered in fabric, inside which a row of separate bags held the lifting gas. Engines mounted outside drove it forward, and passengers travelled in a cabin underneath. The gas used was hydrogen, the lightest of all elements, which has one grave disadvantage: it burns easily.\n\nBy 1914 Zeppelins had carried more than ten thousand paying passengers on pleasure flights within Germany without a single death. During the First World War they were used to bomb London and other cities, causing great alarm but relatively little damage, and many were shot down once aircraft began to fire bullets that set the gas alight.\n\nThe great age of the passenger airship came afterwards. The Graf Zeppelin, launched in 1928, flew around the world the following year and then began a regular service between Germany and Brazil. Compared with an ocean liner, it was fast, crossing the South Atlantic in about three days. Compared with the aeroplanes of the time, it was extraordinarily comfortable. Passengers had cabins with beds, ate at tables laid with china and silver, and could open the windows to look down at the sea. It was also very expensive; a ticket cost about as much as a small car.\n\nIts larger successor, the Hindenburg, was two hundred and forty-five metres long, more than three times the length of a modern jumbo jet. It had been designed to use helium, a gas that cannot burn, but almost the entire world supply was controlled by the United States, which refused to export it to Germany. The Hindenburg was therefore filled with hydrogen. On 6 May 1937, as it approached its mooring mast in New Jersey at the end of an Atlantic crossing, it caught fire and was destroyed in little more than half a minute. Thirty-five of the ninety-seven people on board died.\n\nIt was not the worst airship accident, but it was the first to be filmed, and the commentary of a radio reporter who wept as he described it was heard by millions. Public confidence disappeared overnight. Meanwhile aeroplanes were rapidly becoming faster and safer. Airships survive today chiefly for advertising and for carrying cameras above sports events.',
      qs: [
        ['T', 'Count Zeppelin had served in the army before building airships.', 'Đoạn 1: sĩ quan quân đội về hưu.'],
        ['F', 'A Zeppelin was a balloon without any internal frame.', 'Đoạn 2: có khung kim loại nhẹ.'],
        ['T', 'Before 1914, no passengers had been killed in Zeppelin flights in Germany.', 'Đoạn 3.'],
        ['F', 'Zeppelin raids during the war destroyed most of London.', 'Đoạn 3: gây ít thiệt hại.'],
        ['NG', 'The Graf Zeppelin carried mail as well as passengers.', 'Bài không nói.'],
        ['T', 'Passengers on the Graf Zeppelin were able to open the windows.', 'Đoạn 4.'],
        ['What is the main disadvantage of hydrogen?', 'It burns easily.', 'It is heavy.', 'It is expensive.', 'It leaks through metal.', 'Đoạn 2.'],
        ['Why was the Hindenburg filled with hydrogen?', 'The United States would not sell helium to Germany.', 'Helium had not been discovered.', 'Hydrogen lifted more passengers.', 'The designers preferred it.', 'Đoạn 5.'],
        ['Why did the Hindenburg disaster have such an effect on the public?', 'It was filmed and described on the radio.', 'It killed more people than any other accident.', 'It happened over a city.', 'It was the first airship crash.', 'Đoạn cuối.'],
        ['What are airships mainly used for today?', 'Advertising and filming sports events', 'Carrying freight', 'Military bombing', 'Crossing the Atlantic', 'Đoạn cuối.'],
      ],
      fill: [
        ['Zeppelin launched his first airship over Lake ____.', ['Constance'], 'Đoạn 1.'],
        ['The Graf Zeppelin ran a regular service between Germany and ____.', ['Brazil'], 'Đoạn 4.'],
        ['The Hindenburg had been designed to use ____.', ['helium'], 'Đoạn 5.'],
      ],
    },
    {
      title: 'The Benefits of Boredom',
      text: 'Boredom has a bad reputation. Parents and teachers regard it as a problem to be solved, and adults fill every idle moment by reaching for a telephone. Yet psychologists who study the emotion have come to believe that it serves a purpose and that a life without it might be poorer.\n\nBoredom is not the same as relaxation. It is an uncomfortable state in which we want to be engaged in some satisfying activity but cannot find one. Researchers describe it as a signal, comparable to hunger, that our present situation is not meeting our needs and that we should look for something else.\n\nHow unpleasant the feeling can be was shown in a much-discussed experiment at the University of Virginia in 2014. Volunteers were asked to sit alone in an empty room for fifteen minutes with nothing to do but think. A button in the room delivered a mild electric shock, which all of them had tried beforehand and had said they would pay to avoid. Nevertheless, two thirds of the men and a quarter of the women pressed the button at least once rather than simply sit with their thoughts.\n\nOther research suggests that this restless state can be productive. In experiments by the British psychologist Sandi Mann, one group of volunteers was given a deliberately dull task, copying numbers from a telephone directory, while another group did nothing beforehand. Both were then asked to think of as many uses as possible for a pair of plastic cups. The group that had been bored produced more ideas, and more original ones. Mann believes that when the mind is not occupied, it begins to wander, and that daydreaming allows us to make unexpected connections.\n\nThere is a darker side. People who are frequently bored are more likely to overeat, to gamble and to drive dangerously, and bored pupils learn less. What matters, it seems, is how a person responds to the feeling. Those who can tolerate it for a while and then find something meaningful to do benefit; those who escape it immediately through the nearest distraction do not.\n\nThis is why some psychologists worry about the effect of smartphones. A device that removes every empty moment may also remove the opportunity for the mind to wander, and several studies have found that people who try to relieve boredom by scrolling through videos end up feeling more bored than before.\n\nFor children, specialists advise against organising every hour. A child who complains of having nothing to do, and is left to find a solution, is practising imagination and independence. Many writers and scientists have described long, empty childhood afternoons as the time when their interests first took shape.',
      qs: [
        ['T', 'Psychologists compare boredom to hunger.', 'Đoạn 2: tín hiệu giống cơn đói.'],
        ['F', 'Boredom and relaxation are described as the same feeling.', 'Đoạn 2: không giống nhau.'],
        ['T', 'More men than women chose to give themselves an electric shock.', 'Đoạn 3: hai phần ba nam, một phần tư nữ.'],
        ['NG', 'The Virginia volunteers were paid for their time.', 'Bài không nói.'],
        ['F', 'In Mann\'s experiment, the bored group produced fewer ideas.', 'Đoạn 4: nhiều ý tưởng hơn.'],
        ['T', 'Frequent boredom is linked with risky behaviour.', 'Đoạn 5.'],
        ['NG', 'Sandi Mann does not own a smartphone.', 'Bài không nói.'],
        ['What does Mann believe happens when the mind is unoccupied?', 'It wanders and makes new connections.', 'It becomes less intelligent.', 'It falls asleep.', 'It focuses on numbers.', 'Đoạn 4.'],
        ['What have studies found about scrolling through videos?', 'It can make people feel more bored.', 'It increases creativity.', 'It improves memory.', 'It has no effect.', 'Đoạn 6.'],
        ['What do specialists advise for children?', 'Do not organise every hour of their day.', 'Give them a phone when they are bored.', 'Fill their afternoons with classes.', 'Punish complaints of boredom.', 'Đoạn cuối.'],
      ],
      fill: [
        ['Volunteers sat alone in an empty room for ____ minutes.', ['fifteen', '15'], 'Đoạn 3.'],
        ['The dull task was copying numbers from a telephone ____.', ['directory'], 'Đoạn 4.'],
        ['Volunteers had to think of uses for a pair of plastic ____.', ['cups'], 'Đoạn 4.'],
        ['A bored child left alone practises imagination and ____.', ['independence'], 'Đoạn cuối.'],
      ],
    },
  ],
};
