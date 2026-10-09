/** IELTS đề 4 – phần bổ sung để đủ 40 câu nghe + 40 câu đọc (xem ghi chú "ĐỀ ĐẦY ĐỦ" trong helpers.ts) */
import { RawIeltsFull } from '../helpers';

export const FULL: RawIeltsFull = {
  // Section 1 – Applying for a part-time job (nối tiếp)
  l1: {
    lines: [
      'W: Thank you. Could I ask a little more about the job? What exactly would I be doing?',
      'M: Mostly serving at the counter and making coffee. At the end of the shift, you would help to clean the shelves.',
      'W: Is there a uniform?',
      'M: We give you an apron and a cap. You just need to wear a plain white shirt and flat shoes.',
      'W: And how many people work there at the weekend?',
      'M: There are three of us in the shop and two bakers at the back. You would have a fifteen-minute break at ten.',
      'W: That sounds fine. Should I bring anything to the interview?',
      "M: Yes, please bring your student card and the name of someone who can give you a reference. Oh, and we're at thirty-six Station Road.",
    ],
    qs: [
      ['What would the woman do at the end of a shift?', 'Help to clean the shelves', 'Count the money', 'Bake bread', '"you would help to clean the shelves".'],
      ['What must the woman provide herself?', 'A white shirt and flat shoes', 'An apron and a cap', 'A name badge', '"wear a plain white shirt and flat shoes".'],
    ],
    fill: [
      ['Length of break: ____ minutes', ['15', 'fifteen'], 'Nghỉ mười lăm phút lúc mười giờ.'],
      ['She should bring her ____ card to the interview.', ['student'], '"bring your student card".'],
      ['Address: ____ Station Road', ['36', 'thirty-six', 'thirty six'], 'Số ba mươi sáu đường Station.'],
    ],
  },
  // Section 2 – Visiting Greenfell National Park (nối tiếp)
  l2: {
    lines: [
      'M: Let me tell you about a few things you might see. At this time of year, the meadow beside the yellow trail is full of wild orchids. Please stay on the path so that you do not step on them.',
      'M: If you are lucky, you may see otters near the wooden bridge. The best time is early in the morning.',
      'M: There is a picnic area with tables next to the lake, but fires and barbecues are not allowed anywhere in the park.',
      'M: Dogs are welcome, but they must be kept on a lead between March and July, when birds are nesting on the ground.',
      'M: If you need help, the number for the park rangers is printed on every signpost. And every Sunday at eleven there is a free guided walk that starts from the visitor centre.',
    ],
    qs: [
      ['Why should visitors stay on the path by the meadow?', 'To protect the orchids', 'To avoid snakes', 'To keep their shoes dry', '"so that you do not step on them".'],
      ['What is forbidden in the park?', 'Fires and barbecues', 'Picnics', 'Dogs', '"fires and barbecues are not allowed".'],
      ['Where can visitors find the rangers\' telephone number?', 'On every signpost', 'On the map', 'At the car park gate', '"printed on every signpost".'],
    ],
    fill: [
      ['Otters may be seen near the wooden ____.', ['bridge'], '"near the wooden bridge".'],
      ['The free guided walk is every ____ at eleven.', ['Sunday'], 'Chủ nhật lúc mười một giờ.'],
    ],
  },
  listening: [
    {
      title: 'Section 3 – Two students compare their work placements',
      lines: [
        'W: Hi, Marcus. How was your work placement? You were at an architecture firm, weren\'t you?',
        'M: Yes, for six weeks. It was good, though not what I expected. I thought I would be designing buildings, but I spent most of the time making models.',
        'W: Was that boring?',
        'M: Not at all. I learned a lot about materials. And in the last week they let me attend a meeting with a client. What about you?',
        "W: I was at a small publishing company. There were only eight members of staff, so I did a bit of everything: checking texts, answering emails, even choosing a cover.",
        'M: That sounds more varied than mine. Was your supervisor helpful?',
        'W: Very. She gave me feedback every Friday. The only problem was the journey. It took me ninety minutes each way.',
        'M: Ouch. Mine was near the station, but the hours were long. We often stayed until seven.',
        'W: Do you have to write a report for the university?',
        'M: Yes, three thousand words, and I have to give a ten-minute presentation as well.',
        "W: Same here. I'm going to include a diary I kept. The course handbook says a diary earns extra marks.",
        'M: I wish I had kept one. Do you think the placement changed your career plans?',
        'W: Definitely. I had always wanted to be a journalist, but now I would like to work as an editor.',
      ],
      qs: [
        ['What did the man spend most of his time doing?', 'Making models', 'Designing buildings', 'Meeting clients', '"I spent most of the time making models".'],
        ['How did the man feel about his tasks?', 'He found them useful.', 'He found them boring.', 'He found them too difficult.', '"Not at all. I learned a lot about materials".'],
        ['What did the woman\'s supervisor do every Friday?', 'Gave her feedback', 'Took her to lunch', 'Checked her diary', '"She gave me feedback every Friday".'],
        ['What was a disadvantage of the man\'s placement?', 'The long working hours', 'The long journey', 'The unfriendly staff', '"the hours were long. We often stayed until seven".'],
        ['What does the woman now want to become?', 'An editor', 'A journalist', 'A designer', '"now I would like to work as an editor".'],
      ],
      fill: [
        ['The man\'s placement lasted ____ weeks.', ['6', 'six'], 'Sáu tuần.'],
        ['The publishing company had only ____ members of staff.', ['8', 'eight'], 'Chỉ tám nhân viên.'],
        ['The woman\'s journey took ____ minutes each way.', ['90', 'ninety'], 'Chín mươi phút mỗi chiều.'],
        ['The report must be ____ thousand words long.', ['3', 'three'], 'Ba nghìn từ.'],
        ['According to the handbook, a ____ earns extra marks.', ['diary'], '"a diary earns extra marks".'],
      ],
    },
    {
      title: 'Section 4 – Lecture on the history of the umbrella',
      lines: [
        'W: This morning, as part of our series on everyday objects, I want to tell the story of the umbrella.',
        'W: The earliest umbrellas were not for rain at all. In ancient Egypt and China, more than three thousand years ago, they were used to give shade from the sun, and only kings and nobles were allowed to carry them.',
        'W: The Chinese were the first to make them waterproof, by covering the paper with wax.',
        'W: In Europe, the umbrella arrived much later. In the seventeenth century it was considered a fashion item for women only. A man who carried one was laughed at.',
        'W: That changed thanks to an English traveller named Jonas Hanway. From about seventeen fifty, he carried an umbrella in London every day for thirty years. The drivers of horse cabs disliked him, because rain was good for their business.',
        'W: Early umbrellas were heavy. The frame was made of wood or whalebone, and the cloth was cotton soaked in oil.',
        'W: The modern design dates from eighteen fifty-two, when Samuel Fox invented a light steel frame. His factory was soon producing thousands a week.',
        'W: The folding umbrella, which fits in a bag, appeared in Germany in the nineteen twenties.',
        'W: Today, most of the world\'s umbrellas are made in one city in China. Around a billion are thrown away every year, and because they combine metal, plastic and fabric, they are very hard to recycle. Designers are now working on models made from a single material.',
      ],
      qs: [
        ['What were the first umbrellas used for?', 'Protection from the sun', 'Protection from the rain', 'Carrying goods', '"used to give shade from the sun".'],
        ['How did the Chinese make umbrellas waterproof?', 'By covering paper with wax', 'By using animal skin', 'By painting them with oil', '"by covering the paper with wax".'],
        ['How were men with umbrellas regarded in seventeenth-century Europe?', 'They were laughed at.', 'They were admired.', 'They were fined.', '"A man who carried one was laughed at".'],
        ['Why did cab drivers dislike Jonas Hanway?', 'Rain brought them customers.', 'He refused to pay them.', 'His umbrella frightened horses.', '"because rain was good for their business".'],
        ['Why are umbrellas difficult to recycle?', 'They combine several materials.', 'They are too small.', 'They contain dangerous chemicals.', '"they combine metal, plastic and fabric".'],
      ],
      fill: [
        ['In ancient times only kings and ____ could carry umbrellas.', ['nobles'], '"only kings and nobles".'],
        ['Hanway carried an umbrella in London for ____ years.', ['30', 'thirty'], 'Suốt ba mươi năm.'],
        ['Early frames were made of wood or ____.', ['whalebone'], '"made of wood or whalebone".'],
        ['Samuel Fox invented a light ____ frame.', ['steel'], '"a light steel frame".'],
        ['The folding umbrella appeared in ____.', ['Germany'], '"appeared in Germany in the nineteen twenties".'],
      ],
    },
  ],
  // Bài đọc 1 – Forests in the Sky (nối tiếp)
  r1: {
    text: 'Cheaper ways of greening buildings already exist. A green roof is simply a layer of soil and low plants, such as grasses and mosses, laid over a waterproof sheet. It weighs far less than a tree, keeps the rooms below cooler in summer and warmer in winter, and soaks up rain that would otherwise rush into the drains and cause flooding. The German city of Stuttgart has required green roofs on new flat-roofed buildings for decades, and the Swiss city of Basel has more green roof per inhabitant than anywhere else in the world.\n\nGreen walls, in which plants grow in pockets fixed to the outside of a building, are another option, though they need constant watering. Researchers stress that the choice of species matters. Native plants support far more local insects and birds than exotic ones. Some architects now design small holes for nesting birds and bats into the walls themselves, arguing that a truly green city must make room for animals as well as plants.',
    qs: [
      ['T', 'A green roof helps to reduce the risk of flooding.', 'Hút nước mưa lẽ ra chảy ào xuống cống.'],
      ['F', 'Green roofs are heavier than trees planted on balconies.', 'Nhẹ hơn cây rất nhiều.'],
      ['NG', 'Stuttgart gives money to owners who install green roofs.', 'Bài chỉ nói thành phố yêu cầu, không nói trợ cấp.'],
      ['Why do researchers recommend native plants?', 'They support more local wildlife.', 'They need no water.', 'They grow faster.', 'They are cheaper to buy.', '"Native plants support far more local insects and birds".'],
    ],
    fill: [
      ['A disadvantage of green walls is that they need constant ____.', ['watering'], '"they need constant watering".'],
    ],
  },
  reading: [
    {
      title: 'The Story of the Potato',
      text: 'The potato is today the world\'s fourth most important food crop, after rice, wheat and maize, yet five hundred years ago it was unknown outside South America. It was first cultivated around eight thousand years ago by farmers in the Andes mountains, near Lake Titicaca, at heights where maize would not grow. The peoples of the Andes developed thousands of varieties and invented a method of preserving them: potatoes were left outside to freeze at night, then trodden underfoot to press out the water and dried in the sun. The result, called chuño, could be stored for years.\n\nSpanish soldiers encountered the potato in the 1530s and carried it back to Europe, but it was not welcomed. Because it grew underground and was not mentioned in the Bible, many people regarded it with suspicion. Some believed it caused disease. For two centuries it was grown mainly as food for animals or as a curiosity in botanical gardens.\n\nAttitudes changed for practical reasons. A field of potatoes produces two to four times as many calories as the same field planted with grain, and the crop ripens quickly. Armies that marched across a region could easily burn or seize a wheat harvest, but potatoes hidden in the ground were likely to survive. Rulers began to promote the plant. Frederick the Great of Prussia ordered his subjects to grow it in 1756. In France, the scientist Antoine Parmentier, who had eaten potatoes as a prisoner of war and remained healthy, used a clever trick. He planted a field near Paris and placed soldiers around it during the day to make the crop seem valuable; at night the guards were withdrawn, and local people came to steal the plants.\n\nBy the nineteenth century, the potato had become the main food of the poor in much of northern Europe. Historians believe that it contributed to the rapid growth of population during this period. Nowhere was dependence greater than in Ireland, where millions of people ate almost nothing else. This had terrible consequences. Almost the entire Irish crop consisted of a single variety, and in 1845 a disease known as blight, carried from the Americas, destroyed it. Over the following years about a million people died of hunger and related illnesses, and a further million emigrated.\n\nThe disaster showed the danger of relying on plants that are genetically identical. Scientists today preserve thousands of traditional varieties in a collection in Peru, hoping to breed potatoes that can resist disease and a warmer climate. China is now the largest producer in the world.',
      qs: [
        ['T', 'Potatoes were first grown in mountain areas where maize could not be cultivated.', 'Đoạn 1: ở độ cao ngô không mọc được.'],
        ['F', 'Chuño had to be eaten within a few weeks.', 'Đoạn 1: bảo quản được nhiều năm.'],
        ['T', 'Many Europeans at first distrusted the potato.', 'Đoạn 2: bị nghi ngờ, cho là gây bệnh.'],
        ['NG', 'Frederick the Great ate potatoes every day.', 'Bài không nói.'],
        ['F', 'Parmentier\'s soldiers guarded his field at night.', 'Đoạn 3: ban đêm lính được rút đi.'],
        ['T', 'A single variety of potato was grown in most of Ireland.', 'Đoạn 4: gần như toàn bộ là một giống.'],
        ['Why were potatoes safer than wheat in wartime?', 'They were hidden under the ground.', 'They ripened in winter.', 'Soldiers refused to eat them.', 'They could be carried easily.', 'Đoạn 3: nằm dưới đất nên khó bị đốt hay cướp.'],
        ['What was the purpose of Parmentier\'s trick?', 'To make people want the potato', 'To protect the crop from thieves', 'To feed the army', 'To test a new variety', 'Đoạn 3: làm cho cây có vẻ quý giá.'],
        ['What effect do historians think the potato had in the nineteenth century?', 'It helped the population grow quickly.', 'It reduced the number of farmers.', 'It made grain more expensive.', 'It ended wars in Europe.', 'Đoạn 4: góp phần tăng dân số nhanh.'],
        ['What lesson does the writer draw from the Irish famine?', 'Genetically identical crops are risky.', 'Potatoes should not be exported.', 'Governments should store grain.', 'Blight cannot be prevented.', 'Đoạn cuối: nguy cơ khi dựa vào cây trồng giống hệt nhau về gen.'],
      ],
      fill: [
        ['The potato is the world\'s ____ most important food crop.', ['fourth'], 'Đoạn 1: "fourth most important".'],
        ['In 1845 the Irish crop was destroyed by a disease called ____.', ['blight'], 'Đoạn 4: "a disease known as blight".'],
        ['Traditional varieties are preserved in a collection in ____.', ['Peru'], 'Đoạn cuối: "a collection in Peru".'],
      ],
    },
    {
      title: 'Learning to Read Faces',
      text: 'Humans are remarkably good at recognising faces. Most of us can identify thousands of individuals at a glance, often after many years, and we do so far more easily than we recognise other complicated objects. A simple demonstration shows that the brain treats faces in a special way: if a photograph of a familiar face is turned upside down, it becomes surprisingly hard to identify, whereas an upside-down house or car causes little difficulty. We seem to perceive an upright face as a whole and not as a collection of separate parts.\n\nThe ability begins early. Experiments in the 1970s showed that babies less than an hour old will turn their heads to follow a simple drawing of a face further than they will follow the same shapes arranged in a different pattern. By three months, infants prefer their mother\'s face to that of a stranger.\n\nBrain scans have identified a small region on the underside of the brain that becomes very active when people look at faces. Whether this area is devoted to faces from birth, or simply to anything we have learned to distinguish expertly, is still debated. Some studies have found that it also responds in bird-watchers looking at birds and in car enthusiasts looking at cars.\n\nNot everyone has the skill. People with a condition called prosopagnosia, or face blindness, cannot recognise faces, in severe cases even those of their own family or their own reflection. They rely instead on voices, hairstyles or a typical way of walking. The condition was once thought to result only from brain injury, but it is now known that about two percent of the population are born with it. Many do not realise that other people see faces differently.\n\nAt the opposite extreme are the so-called super-recognisers, who never forget a face. London\'s police force has recruited a team of such officers to study security videos. After riots in the city in 2011, one officer alone identified one hundred and eighty suspects, while a computer program identified just one.\n\nMost people fall between these extremes, and our ability is more limited than we assume. We are excellent with familiar faces but poor with unfamiliar ones. In one experiment, supermarket cashiers accepted a photo identity card showing a different person in more than half of cases. We are also better at distinguishing faces of the ethnic group we grew up with, an effect that depends on experience and not on prejudice: children adopted into another country show the pattern of their new home. These findings matter, since courts and border controls depend heavily on matching faces to photographs.',
      qs: [
        ['T', 'An upside-down face is harder to recognise than an upside-down car.', 'Đoạn 1: mặt lộn ngược khó nhận ra, nhà hay xe thì không.'],
        ['T', 'Newborn babies show a preference for face-like patterns.', 'Đoạn 2: trẻ dưới một giờ tuổi dõi theo hình vẽ khuôn mặt.'],
        ['F', 'Scientists agree that the face area of the brain responds only to faces.', 'Đoạn 3: vẫn còn tranh luận; nó cũng phản ứng với chim, xe ở chuyên gia.'],
        ['F', 'Face blindness is always caused by an injury to the brain.', 'Đoạn 4: khoảng hai phần trăm dân số sinh ra đã có.'],
        ['NG', 'Face blindness is more common in men than in women.', 'Bài không so sánh.'],
        ['T', 'A human officer outperformed software after the London riots.', 'Đoạn 5: 180 nghi phạm so với 1.'],
        ['NG', 'Super-recognisers are paid more than other police officers.', 'Bài không đề cập.'],
        ['How do people with face blindness often recognise others?', 'By voice, hair or way of walking', 'By carrying photographs', 'By asking for names', 'By using a computer program', 'Đoạn 4: dựa vào giọng nói, kiểu tóc, dáng đi.'],
        ['What did the experiment with supermarket cashiers show?', 'People are poor at matching unfamiliar faces to photos.', 'Cashiers are super-recognisers.', 'Identity cards are rarely checked.', 'Customers often use false names.', 'Đoạn cuối: chấp nhận thẻ sai hơn một nửa số lần.'],
        ['What does the example of adopted children show?', 'The effect depends on experience.', 'The effect is present from birth.', 'Children cannot learn new faces.', 'Adoption changes brain structure.', 'Đoạn cuối: phụ thuộc trải nghiệm, không phải định kiến.'],
      ],
      fill: [
        ['Face blindness is also known as ____.', ['prosopagnosia'], 'Đoạn 4: "a condition called prosopagnosia".'],
        ['About ____ percent of people are born with face blindness.', ['two', '2'], 'Đoạn 4: "about two percent".'],
        ['People who never forget a face are called ____.', ['super-recognisers'], 'Đoạn 5: "the so-called super-recognisers".'],
        ['By three months, infants prefer their ____ face to a stranger\'s.', ["mother's", 'mother’s', 'mothers'], 'Đoạn 2: "prefer their mother\'s face".'],
      ],
    },
  ],
};
