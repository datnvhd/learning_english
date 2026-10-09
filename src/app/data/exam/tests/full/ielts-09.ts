/** IELTS đề 9 – phần bổ sung để đủ 40 câu nghe + 40 câu đọc (xem ghi chú "ĐỀ ĐẦY ĐỦ" trong helpers.ts) */
import { RawIeltsFull } from '../helpers';

export const FULL: RawIeltsFull = {
  // Section 1 – Joining a fitness centre (nối tiếp)
  l1: {
    lines: [
      'W: Thanks. Could you tell me what I should bring to the health check?',
      'M: Just wear sports clothes and trainers. The trainer will measure your blood pressure and ask about any injuries. It takes about forty minutes.',
      'W: And do I need to bring a padlock for the lockers?',
      'M: No, the lockers work with your membership card. But you should bring your own towel, or you can hire one for one pound.',
      'W: How do I pay for the membership?',
      'M: By direct debit on the first of each month. We need your bank details and a photograph for the card.',
      'W: Is there a minimum period?',
      'M: Yes, three months. After that, you can cancel at any time with thirty days\' notice.',
    ],
    qs: [
      ['What will the trainer do at the health check?', 'Measure her blood pressure', 'Give her a diet plan', 'Test her swimming', '"The trainer will measure your blood pressure".'],
      ['How do the lockers work?', 'With the membership card', 'With a padlock', 'With a coin', '"the lockers work with your membership card".'],
    ],
    fill: [
      ['The health check takes about ____ minutes.', ['40', 'forty'], 'Khoảng bốn mươi phút.'],
      ['Hiring a towel costs ____ pound.', ['1', 'one'], 'Thuê khăn một bảng.'],
      ['Minimum membership period: ____ months', ['3', 'three'], 'Tối thiểu ba tháng.'],
    ],
  },
  // Section 2 – The Marlow summer festival (nối tiếp)
  l2: {
    lines: [
      'W: Here is some more detail about Saturday. In the afternoon, there will be a children\'s parade from the library to the park, starting at two o\'clock. This year\'s theme is animals of the sea.',
      'W: In the evening, local bands will play on the stage beside the river from six until ten.',
      'W: On Sunday morning, there is a charity boat race. Twelve teams are taking part, and the money raised will go to the town\'s hospital.',
      'W: The organisers are still looking for volunteers to help with litter collection. If you can spare two hours, please call the festival office.',
      'W: And finally, a weather warning: Saturday is expected to be very hot, so free drinking water will be available at three points along the High Street.',
    ],
    qs: [
      ['What is the theme of the children\'s parade?', 'Animals of the sea', 'Famous explorers', 'Flowers', '"This year\'s theme is animals of the sea".'],
      ['Where will the money from the boat race go?', "To the town's hospital", 'To the library', 'To the festival office', '"the money raised will go to the town\'s hospital".'],
      ['What are volunteers needed for?', 'Collecting litter', 'Selling tickets', 'Driving the shuttle bus', '"volunteers to help with litter collection".'],
    ],
    fill: [
      ['The parade starts at ____ o\'clock.', ['2', 'two'], 'Hai giờ chiều.'],
      ['____ teams are taking part in the boat race.', ['12', 'twelve', 'Twelve'], 'Mười hai đội.'],
    ],
  },
  listening: [
    {
      title: 'Section 3 – Students discuss an experiment on plants and music',
      lines: [
        "M: So, Yuki, we have to design a simple experiment for the biology course. I like your idea about plants and music, but is it scientific?",
        'W: It can be, if we control it properly. The question is whether sound affects how fast seedlings grow.',
        'M: What plants would we use?',
        'W: Beans. They grow quickly, so we could see a result in three weeks.',
        'M: And how many groups?',
        'W: Three. One group in silence, one with classical music, and one with recorded traffic noise. That way we can tell whether it is music or just any sound that matters.',
        "M: Clever. We'd need to keep everything else the same: light, water, temperature.",
        'W: Exactly. Each plant gets fifty millilitres of water a day. And the speakers must be the same distance from the pots.',
        'M: How do we measure growth?',
        'W: Height, every two days, with a ruler. And at the end we could weigh the plants as well.',
        'M: One problem. If we know which group is which, we might measure differently without meaning to.',
        'W: Good point. We could ask Carlos to label the pots with numbers, so that we do not know which is which until the end.',
        'M: Great. Where can we do it?',
        'W: The technician said we can use the greenhouse on the roof, as long as we book it by Friday.',
      ],
      qs: [
        ['What question will the experiment test?', 'Whether sound affects the growth of seedlings', 'Whether plants prefer light or shade', 'Whether beans need music to flower', '"whether sound affects how fast seedlings grow".'],
        ['Why do they choose beans?', 'They grow quickly.', 'They are cheap.', 'They need little water.', '"They grow quickly".'],
        ['Why is there a group with traffic noise?', 'To see whether any sound has an effect', 'To test pollution', 'To make the experiment longer', '"whether it is music or just any sound that matters".'],
        ['What problem does the man point out?', 'They might measure with bias.', 'The ruler is too short.', 'The music is too loud.', '"we might measure differently without meaning to".'],
        ['How will they solve that problem?', 'Someone else will label the pots with numbers.', 'They will use a machine.', 'They will measure only once.', '"ask Carlos to label the pots with numbers".'],
      ],
      fill: [
        ['The experiment will last ____ weeks.', ['3', 'three'], 'Ba tuần.'],
        ['Each plant gets ____ millilitres of water a day.', ['50', 'fifty'], 'Năm mươi mililít mỗi ngày.'],
        ['Height will be measured every ____ days.', ['2', 'two'], 'Hai ngày một lần.'],
        ['At the end they will also ____ the plants.', ['weigh'], '"we could weigh the plants as well".'],
        ['They can use the ____ on the roof.', ['greenhouse'], '"the greenhouse on the roof".'],
      ],
    },
    {
      title: 'Section 4 – Lecture on the history of glass',
      lines: [
        'M: In today\'s lecture on materials, we turn to glass, a substance so common that we rarely notice it.',
        'M: Natural glass exists. It forms when volcanic lava cools quickly, and early humans used it to make sharp tools. But the first manufactured glass appeared in Mesopotamia about four and a half thousand years ago, in the form of beads.',
        'M: The basic recipe has hardly changed: sand, heated with soda and lime until it melts.',
        'M: For centuries, glass vessels were luxuries. Then, in the first century BC, craftsmen in Syria discovered that glass could be blown through a tube like a bubble. This made bottles and cups quick and cheap to produce, and the Romans spread the technique across their empire.',
        'M: Window glass came later. In medieval Europe it was made by spinning a disc of hot glass, which could only produce small panes. That is why old windows consist of many little pieces.',
        'M: Venice became the centre of fine glass-making. In twelve ninety-one, the government moved all the furnaces to the island of Murano, partly to reduce the risk of fire in the city.',
        'M: Glass also changed science. Without lenses, there would have been no telescopes and no microscopes.',
        'M: The modern method for flat glass was invented in England in the nineteen fifties by Alastair Pilkington. Molten glass is poured onto a bath of liquid tin, where it spreads into a perfectly smooth sheet.',
        'M: Today, the most important glass may be the kind you cannot see: the optical fibres that carry the internet around the world.',
      ],
      qs: [
        ['How does natural glass form?', 'When lava cools quickly', 'When sand is struck by wind', 'When ice melts', '"when volcanic lava cools quickly".'],
        ['What was the first manufactured glass used for?', 'Beads', 'Windows', 'Bottles', '"in the form of beads".'],
        ['What was the effect of glass-blowing?', 'Vessels became cheap and quick to make.', 'Glass became stronger.', 'Windows became larger.', '"made bottles and cups quick and cheap to produce".'],
        ['Why were the furnaces of Venice moved to Murano?', 'To reduce the danger of fire', 'To be closer to the sand', 'To avoid taxes', '"partly to reduce the risk of fire in the city".'],
        ['How is modern flat glass made?', 'It is poured onto liquid tin.', 'It is spun into a disc.', 'It is pressed between rollers.', '"poured onto a bath of liquid tin".'],
      ],
      fill: [
        ['Glass is made from sand heated with soda and ____.', ['lime'], '"sand, heated with soda and lime".'],
        ['Glass-blowing was discovered by craftsmen in ____.', ['Syria'], '"craftsmen in Syria".'],
        ['Old windows consist of many small ____.', ['pieces'], '"many little pieces".'],
        ['Without ____, there would be no telescopes or microscopes.', ['lenses'], '"Without lenses".'],
        ['Optical ____ carry the internet around the world.', ['fibres', 'fibers'], '"the optical fibres".'],
      ],
    },
  ],
  // Bài đọc 1 – The Silk Road (nối tiếp)
  r1: {
    text: 'The secret of silk itself eventually travelled west. Silk thread is produced by the caterpillar of a moth that feeds on the leaves of the mulberry tree, and for many centuries the Chinese authorities punished with death anyone who tried to take the insects or their eggs out of the country. According to a Byzantine historian, two monks finally smuggled silkworm eggs to Constantinople in about AD 552, hidden inside hollow walking sticks. Whether or not the story is accurate, a silk industry was established in the Byzantine empire soon afterwards, and it later spread to Italy and France.\n\nThe most famous traveller on the routes was the Venetian merchant Marco Polo, who set out in 1271 and claimed to have spent seventeen years in the service of the Mongol ruler Kublai Khan. His account, dictated to a fellow prisoner in a jail in Genoa after his return, amazed European readers with its descriptions of paper money and of a black stone that burned, which was coal. Some scholars have doubted that he reached China at all, pointing out that he never mentions tea or the Great Wall, but most historians accept that the main outline of his journey is true.',
    qs: [
      ['T', 'Taking silkworms out of China was once punishable by death.', 'Ai mang tằm hoặc trứng ra khỏi nước bị xử tử.'],
      ['F', 'Marco Polo wrote his book himself during his journey.', 'Ông đọc cho bạn tù chép trong nhà tù ở Genoa.'],
      ['NG', 'Kublai Khan gave Marco Polo a gift of silk.', 'Bài không đề cập.'],
      ['Why do some scholars doubt that Marco Polo reached China?', 'He does not mention tea or the Great Wall.', 'His book describes paper money.', 'He travelled too quickly.', 'He could not speak Chinese.', 'Ông không nhắc tới trà hay Vạn Lý Trường Thành.'],
    ],
    fill: [
      ['Silkworms feed on the leaves of the ____ tree.', ['mulberry'], '"the leaves of the mulberry tree".'],
    ],
  },
  reading: [
    {
      title: 'How Vaccines Began',
      text: 'For most of human history, smallpox was among the most feared of all diseases. It killed about three in ten of those who caught it and left many survivors blind or badly scarred. It has been estimated that in eighteenth-century Europe it caused four hundred thousand deaths a year.\n\nPeople had long noticed that those who recovered never caught the disease again. This observation led, in China, India and parts of Africa, to a practice later called variolation: material from the sores of a patient with a mild case was scratched into the skin of a healthy person or, in China, blown into the nose as a powder. The patient usually developed a weak form of smallpox and was afterwards protected. The method was brought to England in 1721 by Lady Mary Wortley Montagu, who had seen it performed in Constantinople and had her own children treated. Variolation was risky, however. About two percent of those treated died, and they could infect others.\n\nA safer method came from the English countryside. It was widely believed among farmers that milkmaids who had caught cowpox, a mild disease of cattle, did not get smallpox. Edward Jenner, a country doctor, decided to test this belief. In May 1796 he took fluid from a cowpox sore on the hand of a milkmaid named Sarah Nelmes and inserted it into the arm of James Phipps, the eight-year-old son of his gardener. Six weeks later he deliberately exposed the boy to smallpox. James remained healthy. Jenner called the procedure vaccination, from the Latin word for cow.\n\nBy modern standards, the experiment was ethically indefensible, and at first Jenner\'s report was rejected by the Royal Society. He published it at his own expense in 1798. Cartoons mocked the idea, showing vaccinated people growing horns. But the results spoke for themselves, and within a few years vaccination had spread across Europe and to the Americas. Napoleon had his army vaccinated, and in 1803 a Spanish expedition carried the vaccine around the world, keeping it alive by passing it from arm to arm among a group of orphan boys during the voyage.\n\nNearly a century passed before the principle was extended to other diseases. In the 1880s the French chemist Louis Pasteur showed that weakened germs could protect against rabies and anthrax, and he proposed that the word "vaccine" should be used for all such treatments in honour of Jenner.\n\nSmallpox itself became the first human disease to be completely eliminated. After a ten-year campaign led by the World Health Organization, the last natural case occurred in Somalia in 1977.',
      qs: [
        ['T', 'Smallpox killed roughly thirty percent of people who caught it.', 'Đoạn 1: khoảng ba trong mười người.'],
        ['F', 'Variolation was first practised in England.', 'Đoạn 2: ở Trung Quốc, Ấn Độ, châu Phi trước.'],
        ['T', 'Lady Mary Wortley Montagu had her own children treated by variolation.', 'Đoạn 2: bà cho con mình được chủng.'],
        ['F', 'Variolation carried no danger for the patient.', 'Đoạn 2: khoảng hai phần trăm tử vong.'],
        ['NG', 'James Phipps later became a doctor himself.', 'Bài không nói.'],
        ['T', 'The Royal Society initially refused to accept Jenner\'s report.', 'Đoạn 4: "rejected by the Royal Society".'],
        ['What belief among farmers did Jenner test?', 'That cowpox protected milkmaids from smallpox', 'That cows could catch smallpox', 'That milk cured disease', 'That children never caught cowpox', 'Đoạn 3.'],
        ['How was the vaccine kept alive during the Spanish expedition?', 'By passing it between orphan boys', 'By storing it in ice', 'By carrying cows on the ship', 'By drying it into powder', 'Đoạn 4: truyền từ tay sang tay giữa các bé trai mồ côi.'],
        ['Why did Pasteur suggest the word "vaccine" for all such treatments?', 'To honour Jenner', 'Because all came from cows', 'Because it was easy to pronounce', 'To replace the word variolation', 'Đoạn 5: để tôn vinh Jenner.'],
        ['What happened in 1977?', 'The last natural case of smallpox occurred.', 'The vaccine was invented.', 'The WHO was founded.', 'Smallpox returned to Europe.', 'Đoạn cuối.'],
      ],
      fill: [
        ['The older practice of using material from smallpox patients was called ____.', ['variolation'], 'Đoạn 2: "a practice later called variolation".'],
        ['Jenner was a country ____.', ['doctor'], 'Đoạn 3: "a country doctor".'],
        ['Cartoons showed vaccinated people growing ____.', ['horns'], 'Đoạn 4: "growing horns".'],
      ],
    },
    {
      title: 'The Hidden Life of Soil',
      text: 'Most people think of soil, if they think of it at all, as dirt: a lifeless material that holds plants upright. In reality, it is one of the most crowded habitats on Earth. A single teaspoon of healthy soil may contain more microorganisms than there are people on the planet, along with thousands of species of fungi, tiny worms and insects. Scientists estimate that more than half of all living species spend at least part of their lives underground.\n\nSoil is formed extremely slowly. Rock is broken down by frost, rain and the roots of plants, and the fragments are mixed with the remains of dead plants and animals. In a temperate climate, it can take five hundred years or more to produce two or three centimetres of fertile topsoil.\n\nThe organisms in soil do essential work. Bacteria and fungi decompose dead material and release the nutrients that plants need. Earthworms, which Charles Darwin studied for forty years and regarded as among the most important animals in history, drag leaves below ground and create channels through which air and water can pass. Many fungi form partnerships with the roots of trees. Their fine threads extend far beyond the roots and supply the tree with water and minerals; in return, the tree provides sugar. Research in Canadian forests has shown that these networks can connect one tree to another, allowing older trees to pass nutrients to seedlings growing in their shade.\n\nSoil also plays a major part in regulating the climate. It holds about three times as much carbon as the atmosphere. When land is ploughed or forests are cleared, some of this carbon is released as carbon dioxide.\n\nThis thin living layer is being lost at an alarming rate. Wind and rain carry away soil that has been left bare after harvest. In the 1930s, drought and deep ploughing turned the plains of the central United States into the "Dust Bowl"; storms of dust darkened the sky as far away as New York, and hundreds of thousands of farming families were forced to leave. The United Nations has warned that a third of the world\'s soil is now degraded.\n\nFarmers are responding in several ways. Some no longer plough at all, sowing seeds directly into the remains of the previous crop. Others plant "cover crops" such as clover in winter so that the ground is never bare. Planting lines of trees breaks the force of the wind. These methods may reduce harvests slightly in the first years, but studies show that they increase the amount of life in the soil and improve its ability to hold water in times of drought.',
      qs: [
        ['T', 'A teaspoon of soil may contain more microorganisms than the human population.', 'Đoạn 1.'],
        ['F', 'Fertile topsoil forms within a few years.', 'Đoạn 2: mất năm trăm năm hoặc hơn.'],
        ['T', 'Darwin considered earthworms to be very important animals.', 'Đoạn 3: nghiên cứu bốn mươi năm.'],
        ['F', 'Trees receive sugar from the fungi attached to their roots.', 'Đoạn 3: cây CUNG CẤP đường cho nấm.'],
        ['NG', 'The Canadian research was carried out over twenty years.', 'Bài không nói thời gian nghiên cứu.'],
        ['T', 'Soil contains more carbon than the atmosphere.', 'Đoạn 4: khoảng gấp ba lần.'],
        ['NG', 'Most families who left the Dust Bowl later returned.', 'Bài không nói.'],
        ['What do earthworms do for the soil?', 'They create channels for air and water.', 'They produce sugar.', 'They break down rock with frost.', 'They store carbon dioxide.', 'Đoạn 3.'],
        ['What caused the Dust Bowl?', 'Drought combined with deep ploughing', 'Heavy rain after harvest', 'A plague of insects', 'The clearing of mountain forests', 'Đoạn 5.'],
        ['What is a short-term disadvantage of the new farming methods?', 'Harvests may fall slightly at first.', 'The soil holds less water.', 'More ploughing is required.', 'Wind erosion increases.', 'Đoạn cuối.'],
      ],
      fill: [
        ['Bacteria and fungi ____ dead material and release nutrients.', ['decompose'], 'Đoạn 3: "decompose dead material".'],
        ['When land is ploughed, carbon is released as carbon ____.', ['dioxide'], 'Đoạn 4: "carbon dioxide".'],
        ['A ____ of the world\'s soil is now degraded.', ['third'], 'Đoạn 5: "a third of the world\'s soil".'],
        ['Plants such as clover grown in winter are called "____ crops".', ['cover'], 'Đoạn cuối: "cover crops".'],
      ],
    },
  ],
};
