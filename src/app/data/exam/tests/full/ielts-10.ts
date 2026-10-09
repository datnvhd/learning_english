/** IELTS đề 10 – phần bổ sung để đủ 40 câu nghe + 40 câu đọc (xem ghi chú "ĐỀ ĐẦY ĐỦ" trong helpers.ts) */
import { RawIeltsFull } from '../helpers';

export const FULL: RawIeltsFull = {
  // Section 1 – Booking a campsite (nối tiếp)
  l1: {
    lines: [
      'M: Thank you. Could you tell me a bit about the facilities?',
      'W: Certainly. There are hot showers, which are free, and a laundry room where the washing machines cost three pounds a load.',
      'M: Is there a shop on the site?',
      'W: Yes, a small one that sells bread, milk and gas for cooking. It is open from eight until eleven in the morning. The nearest supermarket is in the village, about two miles away.',
      'M: And is there anything for the children to do?',
      'W: There is a playground, and we rent bicycles for seven pounds a day. The lake is only for fishing, I am afraid, not for swimming.',
      'M: That is fine. Do we need to pay now?',
      'W: Just a deposit of twenty pounds. You pay the rest when you arrive.',
    ],
    qs: [
      ['What does the site shop sell?', 'Bread, milk and gas', 'Camping equipment', 'Hot meals', '"sells bread, milk and gas for cooking".'],
      ['What can people do at the lake?', 'Go fishing', 'Swim', 'Hire a boat', '"The lake is only for fishing... not for swimming".'],
    ],
    fill: [
      ['Washing machines cost ____ pounds a load.', ['3', 'three'], 'Ba bảng một lần giặt.'],
      ['Bicycle hire: ____ pounds a day', ['7', 'seven'], 'Bảy bảng một ngày.'],
      ['Deposit: ____ pounds', ['20', 'twenty'], 'Đặt cọc hai mươi bảng.'],
    ],
  },
  // Section 4 – Lecture on bamboo (nối tiếp)
  l2: {
    lines: [
      'M: Let me turn to the uses of bamboo beyond building. Its fibres can be made into soft cloth, and paper has been produced from it in China for more than a thousand years.',
      'M: Young bamboo shoots are eaten as a vegetable across Asia, although they must be boiled first to remove a natural poison.',
      'M: Bamboo also helps the environment. Its roots hold the soil together on steep hillsides and so prevent landslides, and a bamboo forest absorbs more carbon dioxide than a forest of trees of the same size.',
      'M: One curious fact: many species flower only once, after sixty years or even longer, and then all the plants of that species die at the same time. For the giant panda, which eats almost nothing else, this can be a disaster.',
      'M: Next week we will compare bamboo with timber in a laboratory test of strength.',
    ],
    qs: [
      ['Why must bamboo shoots be boiled?', 'To remove a natural poison', 'To make them soft', 'To improve the colour', '"boiled first to remove a natural poison".'],
      ['How does bamboo prevent landslides?', 'Its roots hold the soil together.', 'Its leaves absorb rain.', 'Its stems block falling rocks.', '"Its roots hold the soil together on steep hillsides".'],
      ['Why can the flowering of bamboo be a disaster for pandas?', 'All the plants die at the same time.', 'The flowers are poisonous.', 'The shoots become too hard.', '"all the plants of that species die at the same time".'],
    ],
    fill: [
      ['____ has been produced from bamboo for over a thousand years.', ['Paper', 'paper'], '"paper has been produced from it in China".'],
      ['Many species flower only once, after ____ years or longer.', ['60', 'sixty'], 'Sau sáu mươi năm hoặc lâu hơn.'],
    ],
  },
  listening: [
    {
      title: 'Section 2 – An introduction to the Riverside Arts Centre',
      lines: [
        'W: Hello, and welcome to the Riverside Arts Centre. My name is Fiona, and I am the education officer.',
        'W: The building was a flour mill until nineteen seventy-eight. It stood empty for many years before it was converted, and you can still see the old water wheel in the entrance hall.',
        'W: We have three main spaces. The theatre on the ground floor has two hundred and forty seats. The gallery on the first floor shows a new exhibition every six weeks, and entry is always free.',
        'W: On the top floor there are four studios, which local artists rent. They open their doors to the public on the last Sunday of each month.',
        'W: We run classes for all ages. The most popular is pottery, on Tuesday evenings, and there is a long waiting list, so I advise you to book early. Drawing for beginners still has places.',
        'W: Members get twenty percent off tickets and classes. Membership is twenty-five pounds a year.',
        'W: The cafe looks over the river and stays open until the end of each evening performance.',
        'W: This month\'s film season is devoted to Italian cinema, with films shown on Thursday nights.',
        'W: Finally, we depend on volunteers to work as ushers in the theatre. In return, you can watch the show for free.',
      ],
      qs: [
        ['What was the building originally?', 'A flour mill', 'A warehouse', 'A school', '"The building was a flour mill".'],
        ['What does the speaker say about the gallery?', 'Entry is always free.', 'It is closed on Sundays.', 'It shows the same exhibition all year.', '"entry is always free".'],
        ['When are the artists\' studios open to the public?', 'On the last Sunday of each month', 'Every weekend', 'On Tuesday evenings', '"on the last Sunday of each month".'],
        ['Which class has a waiting list?', 'Pottery', 'Drawing for beginners', 'Photography', '"The most popular is pottery... there is a long waiting list".'],
        ['What do volunteer ushers receive?', 'Free entry to the show', 'A discount in the cafe', 'A small payment', '"you can watch the show for free".'],
      ],
      fill: [
        ['The old water ____ can be seen in the entrance hall.', ['wheel'], '"the old water wheel".'],
        ['The theatre has ____ seats.', ['240', 'two hundred and forty'], 'Hai trăm bốn mươi ghế.'],
        ['The gallery shows a new exhibition every ____ weeks.', ['6', 'six'], 'Sáu tuần một lần.'],
        ['Membership costs ____ pounds a year.', ['25', 'twenty-five', 'twenty five'], 'Hai mươi lăm bảng một năm.'],
        ['This month\'s film season is devoted to ____ cinema.', ['Italian'], '"devoted to Italian cinema".'],
      ],
    },
    {
      title: 'Section 3 – A tutorial on writing a literature review',
      lines: [
        'M: Come in, Elena. You wanted to talk about your literature review.',
        'W: Yes, Dr. Hughes. I have read about forty articles on bilingual education, and I do not know how to organise them.',
        'M: That is a common problem. What have you done so far?',
        'W: I have written a summary of each article, one after another, in the order I read them.',
        'M: I see. The trouble with that approach is that it reads like a list. A good review is organised by theme, not by author.',
        'W: So I should group the articles?',
        'M: Exactly. For instance, one section on vocabulary, one on reading, and one on the attitudes of parents. Within each theme, compare what the researchers found and point out where they disagree.',
        'W: Some of the studies are quite old. Should I leave them out?',
        'M: Not necessarily. Keep the classic ones, but most of your sources should come from the last ten years.',
        'W: And should I give my own opinion?',
        'M: Yes, but with evidence. Say which studies are stronger and why. For example, a study of twenty children is less convincing than one of two thousand.',
        'W: How long should the review be?',
        'M: About three thousand words. And finish by identifying a gap, something nobody has studied yet. That gap becomes the reason for your own research.',
        'W: That is really helpful. Could I show you a new outline next Tuesday?',
        'M: Tuesday is fine. Come at eleven.',
      ],
      qs: [
        ['How has the student organised her review so far?', 'In the order she read the articles', 'By theme', 'By date of publication', '"in the order I read them".'],
        ['What is wrong with her approach?', 'It reads like a list.', 'It is too short.', 'It has too many themes.', '"it reads like a list".'],
        ['What should she do within each theme?', 'Compare findings and note disagreements', 'Summarise only one study', 'Describe each author\'s life', '"compare what the researchers found and point out where they disagree".'],
        ['What does the tutor say about older studies?', 'Classic ones should be kept.', 'They must all be removed.', 'They are more reliable.', '"Keep the classic ones".'],
        ['Why should the review end with a gap?', 'It justifies her own research.', 'It makes the review longer.', 'It shows that she read everything.', '"That gap becomes the reason for your own research".'],
      ],
      fill: [
        ['The student has read about ____ articles.', ['40', 'forty'], 'Khoảng bốn mươi bài.'],
        ['One suggested theme is the attitudes of ____.', ['parents'], '"the attitudes of parents".'],
        ['Most sources should come from the last ____ years.', ['10', 'ten'], 'Mười năm gần đây.'],
        ['The review should be about ____ thousand words.', ['3', 'three'], 'Khoảng ba nghìn từ.'],
        ['She will show a new outline next ____.', ['Tuesday'], 'Thứ Ba tới.'],
      ],
    },
  ],
  // Bài đọc 1 – The Science of Laughter (nối tiếp)
  r1: {
    text: 'Not all laughter is the same. Researchers distinguish between spontaneous laughter, which is hard to control, and the polite, deliberate kind that we produce in conversation to show agreement or friendliness. The two are controlled by different parts of the brain, and listeners can usually tell them apart. In experiments led by the British scientist Sophie Scott, volunteers who heard recordings of both kinds identified the genuine laughs correctly most of the time, and their ability improved with age, reaching a peak in their late thirties.\n\nLaughter can also get out of control. In 1962 an outbreak of uncontrollable laughing began among pupils at a girls\' school in Tanganyika, now Tanzania, and spread to neighbouring villages. It continued, on and off, for several months and forced fourteen schools to close. Doctors found no physical cause and concluded that the episode was a reaction to stress.\n\nChildren laugh far more than adults do. One often-repeated claim is that a young child laughs three hundred times a day and an adult fewer than twenty, though the figures are little more than guesses. What is clear is that babies begin to laugh at about three or four months, long before they can speak.',
    qs: [
      ['T', 'Different parts of the brain control spontaneous and deliberate laughter.', '"controlled by different parts of the brain".'],
      ['F', 'Doctors discovered a virus that caused the laughter outbreak of 1962.', 'Không tìm ra nguyên nhân thể chất.'],
      ['NG', 'Sophie Scott has also studied laughter in animals.', 'Bài không nói.'],
      ['What does the passage say about the figures for children\'s and adults\' laughter?', 'They are not reliable.', 'They come from a large study.', 'They show adults laugh more.', 'They were measured in Tanzania.', '"the figures are little more than guesses".'],
    ],
    fill: [
      ['The 1962 outbreak forced fourteen ____ to close.', ['schools'], '"forced fourteen schools to close".'],
    ],
  },
  reading: [
    {
      title: 'The Story of Concrete',
      text: 'After water, concrete is the most widely used substance on the planet. Every year the world produces enough of it to build a wall twenty-seven metres high around the equator. Yet few people could say what it actually is, or how old the idea is.\n\nConcrete is a mixture of sand, gravel and water, held together by cement, a grey powder that sets hard as the result of a chemical reaction. The Romans were the first to use it on a grand scale. Their engineers discovered that volcanic ash from the area around Naples, when mixed with lime, produced a cement that would harden even under water. With it they built harbours, aqueducts and the dome of the Pantheon in Rome, which was completed in about AD 126. At forty-three metres across, it is still the largest dome of unreinforced concrete in the world. The builders made it lighter towards the top by using pieces of pumice, a volcanic stone light enough to float.\n\nWhen the Roman empire collapsed, the recipe was largely forgotten, and for more than a thousand years large buildings in Europe were made of stone and brick. Concrete returned in 1824, when Joseph Aspdin, a bricklayer from the English city of Leeds, patented a new cement made by burning limestone and clay together. He named it Portland cement because he thought its colour resembled a fashionable building stone from the island of Portland.\n\nPlain concrete is very strong when it is squeezed but cracks easily when stretched or bent. The solution, reinforced concrete, was developed in France. In the 1860s a gardener called Joseph Monier, tired of clay flowerpots that broke, began to make pots of concrete with a net of iron wire inside. Steel resists stretching, concrete resists squeezing, and the two materials expand at almost the same rate when heated. Reinforced concrete made possible the bridges, dams and tall buildings of the twentieth century.\n\nThis success has come at a cost. To make cement, limestone must be heated to about fourteen hundred and fifty degrees Celsius, and the chemical reaction itself gives off carbon dioxide. The industry is responsible for roughly eight percent of the world\'s emissions of that gas, more than aviation. The demand for suitable sand has also led to the destruction of rivers and beaches.\n\nModern reinforced concrete is, moreover, less durable than the Roman kind, because water eventually reaches the steel and rusts it. Recent research has found that Roman concrete contains lumps of lime that dissolve when cracks let in water and then harden again, so that the material repairs itself. Engineers hope to copy the effect.',
      qs: [
        ['T', 'Concrete is used more than any other material except water.', 'Đoạn 1.'],
        ['F', 'Roman cement could not harden under water.', 'Đoạn 2: cứng lại cả dưới nước.'],
        ['T', 'The dome of the Pantheon contains a stone that floats.', 'Đoạn 2: đá bọt (pumice).'],
        ['F', 'Concrete continued to be widely used in Europe after the fall of Rome.', 'Đoạn 3: công thức bị lãng quên hơn nghìn năm.'],
        ['NG', 'Joseph Aspdin became wealthy from his patent.', 'Bài không nói.'],
        ['T', 'Steel and concrete expand at nearly the same rate when heated.', 'Đoạn 4.'],
        ['Why did Aspdin call his product Portland cement?', 'Its colour looked like a well-known stone.', 'He lived on the island of Portland.', 'It was first sold in Portland.', 'It was made from Portland clay.', 'Đoạn 3.'],
        ['What led Joseph Monier to invent reinforced concrete?', 'His clay flowerpots kept breaking.', 'He wanted to build a bridge.', 'He was asked by the army.', 'He had too much iron wire.', 'Đoạn 4.'],
        ['Why does the cement industry produce so much carbon dioxide?', 'Heating limestone and the reaction itself release it.', 'Sand is transported long distances.', 'Factories burn wood.', 'Concrete absorbs oxygen.', 'Đoạn 5.'],
        ['What have researchers discovered about Roman concrete?', 'It can repair its own cracks.', 'It contains steel.', 'It was made without lime.', 'It is weaker than modern concrete.', 'Đoạn cuối.'],
      ],
      fill: [
        ['Roman engineers mixed lime with volcanic ____.', ['ash'], 'Đoạn 2: "volcanic ash".'],
        ['The dome of the Pantheon is ____ metres across.', ['forty-three', '43'], 'Đoạn 2: "forty-three metres across".'],
        ['Water eventually reaches the steel and ____ it.', ['rusts'], 'Đoạn cuối: "rusts it".'],
      ],
    },
    {
      title: 'Why Languages Die',
      text: 'There are roughly seven thousand languages spoken in the world today, but they are very unequally distributed. About half of the world\'s population speaks one of only twenty-three languages, while nearly half of all languages have fewer than ten thousand speakers each. Linguists estimate that one language disappears, on average, every two weeks, and that by the end of this century between fifty and ninety percent of those now spoken may be gone.\n\nA language dies when its last speaker dies, but the process begins long before that. Typically, a community comes under pressure from a more powerful neighbour or state. Parents, wishing to give their children the best chance in school and at work, start speaking the dominant language at home. Within two or three generations the old language is used only by grandparents. In the past, the pressure was often deliberate. Until the 1960s, children in boarding schools in Australia, Canada and the United States were punished for speaking their native languages.\n\nDoes it matter? Some argue that fewer languages would make communication easier and that people should be free to choose the language most useful to them. Linguists reply that a great deal is lost. Every language contains knowledge gathered over centuries. The Kallawaya people of Bolivia, for example, use a special language to describe thousands of medicinal plants, and the vocabulary of Arctic peoples records details of ice and weather that scientists studying climate change now find valuable. Languages also show what the human mind is capable of. Some have no words for left and right and instead describe every position by compass directions; their speakers always know which way is north.\n\nThere is a personal cost as well. Studies of indigenous communities in Canada have found that young people in groups that have kept their language have much lower rates of suicide than those in groups that have lost it.\n\nA dying language can sometimes be saved. The most famous example is Hebrew, which for almost two thousand years was used only for prayer and study and is now the daily language of millions. Welsh has grown again thanks to Welsh-language schools and television. In New Zealand, Maori elders began in the 1980s to run "language nests", nurseries where small children hear nothing but Maori; the idea has been copied in Hawaii and elsewhere.\n\nTechnology offers new tools. Linguists race to record elderly speakers, and online dictionaries and telephone applications allow scattered learners to practise. Success, however, depends less on technology than on whether a community wants to use its language and whether children grow up hearing it at home.',
      qs: [
        ['T', 'A small number of languages are spoken by half of humanity.', 'Đoạn 1: hai mươi ba ngôn ngữ.'],
        ['F', 'Languages usually disappear suddenly within a single generation.', 'Đoạn 2: quá trình qua hai, ba thế hệ.'],
        ['T', 'In some countries, schoolchildren were once punished for using their own language.', 'Đoạn 2.'],
        ['NG', 'The Kallawaya language is taught in Bolivian universities.', 'Bài không nói.'],
        ['T', 'Speakers of certain languages describe positions using compass directions.', 'Đoạn 3.'],
        ['F', 'Hebrew was spoken as an everyday language throughout the last two thousand years.', 'Đoạn 5: chỉ dùng cho cầu nguyện và học tập.'],
        ['NG', 'More people speak Welsh than Maori.', 'Bài không so sánh.'],
        ['Why do parents often stop speaking the old language at home?', 'They want their children to succeed.', 'They have forgotten it.', 'The law forbids it.', 'It has no written form.', 'Đoạn 2.'],
        ['What did the Canadian studies find?', 'Communities that kept their language had lower suicide rates.', 'Young people prefer English.', 'Language loss improves employment.', 'Elders refuse to teach.', 'Đoạn 4.'],
        ['According to the writer, what does saving a language mainly depend on?', 'The community\'s wish to use it and children hearing it at home', 'Government funding', 'Modern technology', 'The number of dictionaries', 'Đoạn cuối.'],
      ],
      fill: [
        ['On average, one language disappears every two ____.', ['weeks'], 'Đoạn 1: "every two weeks".'],
        ['The Kallawaya use a special language to describe medicinal ____.', ['plants'], 'Đoạn 3: "medicinal plants".'],
        ['Maori nurseries for small children are called "language ____".', ['nests'], 'Đoạn 5: "language nests".'],
        ['Linguists race to ____ elderly speakers.', ['record'], 'Đoạn cuối: "race to record elderly speakers".'],
      ],
    },
  ],
};
