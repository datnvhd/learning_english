/** IELTS đề 6 – phần bổ sung để đủ 40 câu nghe + 40 câu đọc (xem ghi chú "ĐỀ ĐẦY ĐỦ" trong helpers.ts) */
import { RawIeltsFull } from '../helpers';

export const FULL: RawIeltsFull = {
  // Section 1 – Reporting lost property (nối tiếp)
  l1: {
    lines: [
      'W: Thank you. Is there anything else I should do in the meantime?',
      'M: Yes. Could you tell me which coach of the train you were in?',
      'W: I was in coach D, sitting near the luggage rack by the door.',
      'M: That helps. Trains from Leeds are cleaned at the depot at night, so anything left on board is brought here the next morning at about ten.',
      'W: I see. If you do find it, can I collect it at any time?',
      'M: We are open from eight until six, Monday to Saturday. You will need to show a photo identity card, and there is a handling fee of four pounds.',
      'W: And if it has not been found by tomorrow?',
      'M: Then I would advise you to fill in the online form as well. We keep reports for three months.',
    ],
    qs: [
      ['Where was the woman sitting on the train?', 'Near the luggage rack by the door', 'In the middle of the coach', 'Next to the buffet car', '"sitting near the luggage rack by the door".'],
      ['What must she show to collect her bag?', 'A photo identity card', 'Her train ticket', 'A letter from the police', '"You will need to show a photo identity card".'],
    ],
    fill: [
      ['She travelled in coach ____.', ['D'], '"I was in coach D".'],
      ['Handling fee: ____ pounds', ['4', 'four'], 'Phí xử lý bốn bảng.'],
      ['Reports are kept for ____ months.', ['3', 'three'], 'Lưu báo cáo trong ba tháng.'],
    ],
  },
  // Section 4 – Lecture on the history of clocks (nối tiếp)
  l2: {
    lines: [
      'M: Let me say a little more about the problem faced by sailors. To know how far east or west a ship had travelled, the captain needed to know the exact time at his home port. On a moving ship, a pendulum clock was useless.',
      'M: In seventeen fourteen, the British government offered a prize of twenty thousand pounds to anyone who could solve the problem.',
      'M: The winner was not a scientist but a carpenter, John Harrison, who spent more than forty years building a series of sea clocks. His fourth design looked like a large pocket watch.',
      'M: The twentieth century brought quartz clocks, which use a tiny crystal that vibrates when electricity passes through it. They are cheap and lose only a second or so each month.',
      'M: Most accurate of all are atomic clocks. The best of them would not gain or lose a second in millions of years, and satellite navigation depends on them.',
    ],
    qs: [
      ['Why did sailors need an accurate clock?', 'To work out how far east or west they were', 'To know when to change the sails', 'To measure the depth of the sea', '"To know how far east or west a ship had travelled".'],
      ['What was John Harrison\'s profession?', 'Carpenter', 'Scientist', 'Sea captain', '"not a scientist but a carpenter".'],
      ['What depends on atomic clocks?', 'Satellite navigation', 'Railway timetables', 'Quartz watches', '"satellite navigation depends on them".'],
    ],
    fill: [
      ['The government offered a prize of ____ thousand pounds.', ['20', 'twenty'], 'Hai mươi nghìn bảng.'],
      ['Quartz clocks use a tiny ____ that vibrates.', ['crystal'], '"a tiny crystal that vibrates".'],
    ],
  },
  listening: [
    {
      title: 'Section 2 – Information for visitors to Castle Farm',
      lines: [
        'W: Good morning, and welcome to Castle Farm. Before the children run off to see the animals, let me explain how the day works.',
        'W: The farm has been in the same family for five generations. It became an open farm for visitors twelve years ago.',
        'W: The first thing to see is the milking shed. The cows are milked at half past ten, and you can watch from the gallery upstairs.',
        'W: At eleven thirty, there is a chance to feed the lambs with a bottle. This takes place in the big barn, and it is very popular, so please arrive a few minutes early.',
        'W: Tractor rides around the fields leave from the gate beside the pond every hour. They cost two pounds per person, and children under three ride free.',
        'W: Please wash your hands after touching any animal. There are sinks outside every building.',
        'W: The farm shop sells our own cheese and ice cream, and the tea room is open until four.',
        'W: One warning: the geese near the orchard can be aggressive, so do not try to feed them.',
        'W: If you become separated from your group, go to the red flag at the entrance and a member of staff will help you. We close at five. Have a wonderful day.',
      ],
      qs: [
        ['When did the farm open to visitors?', 'Twelve years ago', 'Five years ago', 'Last year', '"became an open farm for visitors twelve years ago".'],
        ['Where can visitors watch the cows being milked?', 'From an upstairs gallery', 'From the field', 'From the tea room', '"watch from the gallery upstairs".'],
        ['Why should visitors arrive early at the big barn?', 'The activity is very popular.', 'The barn is far away.', 'The lambs sleep at noon.', '"it is very popular, so please arrive a few minutes early".'],
        ['What does the speaker say about the geese?', 'They should not be fed.', 'They are kept indoors.', 'They can be touched.', '"do not try to feed them".'],
        ['What should a lost visitor do?', 'Go to the red flag at the entrance', 'Wait in the farm shop', 'Phone the office', '"go to the red flag at the entrance".'],
      ],
      fill: [
        ['The farm has been in the same family for ____ generations.', ['5', 'five'], 'Năm thế hệ.'],
        ['Lambs can be fed with a ____ at eleven thirty.', ['bottle'], '"feed the lambs with a bottle".'],
        ['Tractor rides cost ____ pounds per person.', ['2', 'two'], 'Hai bảng một người.'],
        ['The farm shop sells cheese and ice ____.', ['cream'], '"our own cheese and ice cream".'],
        ['The farm closes at ____.', ['5', 'five'], 'Đóng cửa lúc năm giờ.'],
      ],
    },
    {
      title: 'Section 3 – Students review a group presentation',
      lines: [
        'M: So, Priya, what did you think of our presentation on electric cars yesterday?',
        'W: On the whole, I thought it went well. The audience seemed interested, especially in the part about batteries.',
        'M: Yes, that was your section. Mine was weaker. I spoke too fast because I was nervous.',
        'W: A little, but your charts were excellent. The one comparing costs over ten years was the clearest slide we had.',
        'M: Thanks. What did the tutor say in her feedback?',
        'W: She gave us sixty-eight percent. She liked our research, but she said we ran over time by four minutes.',
        'M: That was because of the video. It took ages to load.',
        'W: Next time we should download it beforehand instead of playing it from the internet.',
        'M: Agreed. She also wrote that we did not really answer the last question from the audience, the one about recycling batteries.',
        "W: True. Neither of us knew much about that. We should read about it before the written report.",
        'M: When is that due?',
        'W: In three weeks. Shall we divide it the same way as the presentation?',
        'M: I would rather swap. I would like to write about batteries this time, and you could do the costs.',
        'W: Fine by me. Let us meet on Monday in the study room on the second floor.',
      ],
      qs: [
        ['Which part interested the audience most?', 'The part about batteries', 'The part about costs', 'The video', '"especially in the part about batteries".'],
        ['Why did the man speak too fast?', 'He was nervous.', 'He had too many slides.', 'He was short of time.', '"I spoke too fast because I was nervous".'],
        ['Why did the presentation run over time?', 'A video took a long time to load.', 'The audience asked many questions.', 'They started late.', '"It took ages to load".'],
        ['What will they do differently next time?', 'Download the video in advance', 'Leave out the charts', 'Speak for longer', '"download it beforehand".'],
        ['How will they divide the written report?', 'They will exchange topics.', 'They will keep the same topics.', 'The woman will write all of it.', '"I would rather swap".'],
      ],
      fill: [
        ['The cost chart compared costs over ____ years.', ['10', 'ten'], 'Mười năm.'],
        ['The tutor gave them ____ percent.', ['68', 'sixty-eight', 'sixty eight'], 'Sáu mươi tám phần trăm.'],
        ['They ran over time by ____ minutes.', ['4', 'four'], 'Quá bốn phút.'],
        ['They could not answer a question about ____ batteries.', ['recycling'], '"the one about recycling batteries".'],
        ['The written report is due in ____ weeks.', ['3', 'three'], 'Ba tuần nữa.'],
      ],
    },
  ],
  // Bài đọc 1 – Surviving in the Desert (nối tiếp)
  r1: {
    text: 'Animals, unlike plants, can move to avoid the worst of the heat, and most small desert creatures are active only at night, spending the day in burrows where the air is cool and damp. The kangaroo rat of North America goes further: it never needs to drink at all. It obtains all its water from the dry seeds it eats, produces extremely concentrated urine and even recovers moisture from its own breath in the cool passages of its nose.\n\nLarger animals cannot hide underground. The camel survives by tolerating conditions that would kill most mammals. Contrary to popular belief, its hump stores fat, not water. A camel can lose a quarter of its body weight through lack of water and then drink more than a hundred litres in ten minutes. It also allows its body temperature to rise by several degrees during the day, which means it does not need to sweat until the afternoon. In the Namib Desert of southern Africa, where rain almost never falls, a small beetle climbs to the top of a sand dune on foggy mornings and stands with its back raised so that drops of water form on it and run down to its mouth.',
    qs: [
      ['T', 'The kangaroo rat can live without drinking water.', '"it never needs to drink at all".'],
      ['F', 'A camel\'s hump is a store of water.', 'Bướu lạc đà chứa mỡ, không phải nước.'],
      ['NG', 'Camels live longer than other desert mammals.', 'Bài không so sánh tuổi thọ.'],
      ['How does the Namib beetle obtain water?', 'It collects fog on its body.', 'It digs down to wet sand.', 'It eats wet leaves.', 'It drinks from rivers at night.', 'Giọt nước từ sương đọng trên lưng rồi chảy xuống miệng.'],
    ],
    fill: [
      ['Most small desert animals spend the day in ____.', ['burrows'], '"spending the day in burrows".'],
    ],
  },
  reading: [
    {
      title: 'The Typewriter and the Keyboard',
      text: 'Nearly everyone who uses a computer in the English-speaking world types on a keyboard whose top row of letters begins Q-W-E-R-T-Y. The arrangement is so familiar that few people stop to ask why the letters are not simply in alphabetical order. The answer lies in the history of a machine that has almost disappeared: the typewriter.\n\nMany inventors tried to build writing machines in the nineteenth century, but the first to succeed commercially was designed by Christopher Sholes, a newspaper editor from Milwaukee in the United States, who received a patent in 1868. In his early models the keys were indeed arranged alphabetically. Each key was connected to a metal bar with a letter on the end, which swung up to strike the paper. When neighbouring bars were used in quick succession, they tended to collide and stick together, and the typist had to stop to separate them.\n\nSholes therefore rearranged the keyboard. The traditional explanation is that he placed frequently combined letters far apart in order to prevent jams, although some historians believe the layout was also influenced by the needs of telegraph operators who tested the machine. Whatever the reason, in 1873 Sholes sold his design to the Remington company, which was looking for new products after the end of the American Civil War reduced demand for its guns. The Remington typewriter fixed the QWERTY layout in metal.\n\nEarly typewriters had a curious drawback: the letters struck the underside of the roller, so typists could not see what they had written until several lines later. Even so, the machine transformed office work. It also opened a new profession to women. In 1870 there were almost no female office workers in the United States; by 1900 three quarters of the country\'s typists were women.\n\nThe QWERTY layout became truly dominant after a public contest in Cincinnati in 1888, in which Frank McGurrin, who had memorised the keyboard and typed with all ten fingers without looking, easily defeated a rival using a different machine and only four fingers. Typing schools adopted his method, and once thousands of people had been trained on QWERTY, manufacturers had little reason to offer anything else.\n\nAlternatives have been proposed. In 1936 August Dvorak, a professor in Seattle, patented a layout that places the most common letters under the strongest fingers. Its supporters claim that it is faster and less tiring, although independent tests have found the advantage to be small. Economists often cite QWERTY as an example of how an early standard, once widely adopted, can remain in place even if better designs appear later.',
      qs: [
        ['T', 'Sholes worked for a newspaper.', 'Đoạn 2: "a newspaper editor from Milwaukee".'],
        ['F', 'The keys on Sholes\'s first machines were arranged in the QWERTY order.', 'Đoạn 2: ban đầu xếp theo bảng chữ cái.'],
        ['T', 'The Remington company had previously made weapons.', 'Đoạn 3: nhu cầu súng giảm sau nội chiến.'],
        ['F', 'On early typewriters, typists could read each line as they typed it.', 'Đoạn 4: không thấy chữ cho đến vài dòng sau.'],
        ['NG', 'Female typists were paid less than male clerks.', 'Bài không nói về lương.'],
        ['T', 'McGurrin typed without looking at the keys.', 'Đoạn 5: gõ mười ngón không nhìn.'],
        ['What problem led Sholes to change the keyboard?', 'The metal bars collided and stuck together.', 'Typists could not remember the alphabet.', 'The paper tore easily.', 'The machine was too noisy.', 'Đoạn 2: các thanh kim loại va vào nhau và kẹt.'],
        ['Why did manufacturers continue to use QWERTY?', 'Large numbers of typists had learned it.', 'It was protected by law.', 'It was cheaper to build.', 'Dvorak refused to sell his design.', 'Đoạn 5: hàng nghìn người đã được đào tạo.'],
        ['What have independent tests shown about the Dvorak layout?', 'Its advantage is slight.', 'It is twice as fast.', 'It causes more errors.', 'It cannot be used on computers.', 'Đoạn cuối: lợi thế nhỏ.'],
        ['Why do economists refer to QWERTY?', 'To show how an early standard can persist', 'To prove that competition always works', 'To explain the cost of typewriters', 'To criticise typing schools', 'Đoạn cuối: tiêu chuẩn sớm có thể tồn tại dù có thiết kế tốt hơn.'],
      ],
      fill: [
        ['Sholes received a ____ for his machine in 1868.', ['patent'], 'Đoạn 2: "received a patent in 1868".'],
        ['By 1900, three ____ of American typists were women.', ['quarters'], 'Đoạn 4: "three quarters".'],
        ['The public contest of 1888 took place in ____.', ['Cincinnati'], 'Đoạn 5: "a public contest in Cincinnati".'],
      ],
    },
    {
      title: 'Noise and the City',
      text: 'When people are asked what they dislike about living in a city, noise comes near the top of the list. For a long time it was treated as a mere annoyance, but the World Health Organization now ranks traffic noise as the second most harmful environmental problem in Europe, after air pollution.\n\nThe damage is not mainly to hearing. Sound is measured in decibels, and ordinary street noise is seldom loud enough to injure the ear. The trouble is that the body reacts to noise as a warning of danger. Heart rate and blood pressure rise, and stress hormones are released, even when a person is asleep and unaware of being disturbed. Large studies in several countries have found that people living beside busy roads or under flight paths have a higher risk of heart disease. One estimate attributes about twelve thousand early deaths a year in Europe to long-term exposure to noise.\n\nChildren seem to be particularly vulnerable. In a much-quoted study in New York in the 1970s, the psychologist Arline Bronzaft compared pupils in classrooms on two sides of a school, one of which faced an elevated railway. By the sixth year, children on the noisy side were almost a year behind in reading. After the city fitted rubber pads to the tracks and installed sound-absorbing ceilings, the difference disappeared.\n\nCities have fought noise for longer than is often realised. Julius Caesar banned wagons from the streets of Rome during the day, which simply moved the problem to the night, and medieval towns restricted the hours in which blacksmiths could work.\n\nModern solutions take several forms. Barriers alongside motorways help those living immediately behind them. Road surfaces made of porous asphalt absorb some of the sound made by tyres, which above about fifty kilometres an hour is louder than the engine. Lower speed limits are cheap and effective. Electric vehicles are nearly silent at low speeds, so much so that regulations now require them to produce an artificial sound to warn pedestrians.\n\nPlanners are also paying attention to quiet as something positive. Several European cities have mapped their "quiet areas", such as parks and courtyards, in order to protect them. Researchers have found that not all sounds are equally unwelcome: people tolerate, and even enjoy, running water and birdsong at volumes that would be judged unpleasant if produced by machines. Some designers therefore install fountains to mask traffic.\n\nThe difficulty, as with many environmental problems, is that those who make the noise are seldom those who suffer from it. Homes beside main roads are cheaper, so the burden falls most heavily on people with low incomes.',
      qs: [
        ['T', 'Noise is considered the second most serious environmental health problem in Europe.', 'Đoạn 1: đứng thứ hai sau ô nhiễm không khí.'],
        ['F', 'The main harm of street noise is damage to the ears.', 'Đoạn 2: tổn hại chủ yếu không phải là thính giác.'],
        ['T', 'The body responds to noise even during sleep.', 'Đoạn 2: ngay cả khi ngủ.'],
        ['F', 'In Bronzaft\'s study, the children on the noisy side read better.', 'Đoạn 3: chậm gần một năm về đọc.'],
        ['NG', 'Bronzaft\'s study was repeated in other American cities.', 'Bài không nói.'],
        ['F', 'Caesar\'s ban solved the problem of noise in Rome.', 'Đoạn 4: chỉ chuyển vấn đề sang ban đêm.'],
        ['NG', 'Porous asphalt is more expensive than ordinary road surfaces.', 'Bài không nói về giá.'],
        ['What happened after the railway tracks near the school were treated?', 'The gap in reading disappeared.', 'The school was closed.', 'The trains were cancelled.', 'Pupils moved to another building.', 'Đoạn 3: sự chênh lệch biến mất.'],
        ['Why must electric vehicles make an artificial sound?', 'To warn people on foot', 'To help drivers judge speed', 'To cover the noise of tyres', 'To meet rules about engines', 'Đoạn 5: cảnh báo người đi bộ.'],
        ['Why do some designers install fountains?', 'To cover the sound of traffic', 'To cool the streets', 'To attract birds', 'To supply drinking water', 'Đoạn 6: che tiếng xe cộ.'],
      ],
      fill: [
        ['Sound is measured in ____.', ['decibels'], 'Đoạn 2: "measured in decibels".'],
        ['The city fitted ____ pads to the railway tracks.', ['rubber'], 'Đoạn 3: "rubber pads".'],
        ['Medieval towns restricted the working hours of ____.', ['blacksmiths'], 'Đoạn 4: "blacksmiths".'],
        ['Homes beside main roads are ____, so poorer people suffer most.', ['cheaper'], 'Đoạn cuối: "Homes beside main roads are cheaper".'],
      ],
    },
  ],
};
