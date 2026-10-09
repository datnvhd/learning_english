/** IELTS đề 11 – phần bổ sung để đủ 40 câu nghe + 40 câu đọc (xem ghi chú "ĐỀ ĐẦY ĐỦ" trong helpers.ts) */
import { RawIeltsFull } from '../helpers';

export const FULL: RawIeltsFull = {
  // Section 1 – Enrolling in a cookery class (nối tiếp)
  l1: {
    lines: [
      'M: Great. Could you tell me what we will cook in the first few weeks?',
      'W: In week one, you make fresh pasta with a tomato sauce. Week two is risotto, and in week three we bake bread.',
      'M: Lovely. How many people are in each class?',
      'W: Never more than ten, and every student has their own cooker.',
      'M: Who is the teacher?',
      'W: Chef Marco Bellini. He worked in restaurants in Rome for fifteen years before he moved here.',
      'M: And where exactly are you?',
      'W: We are above the bookshop on Castle Street. There is a public car park opposite, which is free after six in the evening. The next course starts on the fourth of March.',
    ],
    qs: [
      ['What will students make in week three?', 'Bread', 'Risotto', 'Fresh pasta', '"in week three we bake bread".'],
      ['Where is the Kitchen Studio?', 'Above a bookshop', 'Next to a car park', 'Inside a restaurant', '"We are above the bookshop on Castle Street".'],
    ],
    fill: [
      ['Maximum class size: ____', ['10', 'ten'], 'Không quá mười người.'],
      ['The chef worked in Rome for ____ years.', ['15', 'fifteen'], 'Mười lăm năm.'],
      ['The next course starts on the fourth of ____.', ['March'], 'Ngày 4 tháng Ba.'],
    ],
  },
  // Section 3 – A student and tutor discuss an essay (nối tiếp)
  l2: {
    lines: [
      'W: May I ask about the next assignment as well, Dr. Evans?',
      'M: Of course. It is a group presentation on a nineteenth-century invention of your choice.',
      'W: I was thinking of the sewing machine, because it changed the lives of women workers.',
      'M: An excellent choice. Most students choose the steam engine. You will work in groups of three, and each presentation should last twelve minutes.',
      'W: Do we have to use slides?',
      'M: It is not compulsory, but I do expect a one-page handout for the audience.',
      'W: When are the presentations?',
      'M: In the final week of term. I will put a list on my office door so that groups can choose a time.',
    ],
    qs: [
      ['Which invention does Laura want to present?', 'The sewing machine', 'The steam engine', 'The railway', '"I was thinking of the sewing machine".'],
      ['What does the tutor expect every group to prepare?', 'A one-page handout', 'A set of slides', 'A written essay', '"I do expect a one-page handout".'],
      ['How will groups choose a time?', 'From a list on the tutor\'s door', 'By email', 'By drawing numbers', '"I will put a list on my office door".'],
    ],
    fill: [
      ['Students will work in groups of ____.', ['3', 'three'], 'Nhóm ba người.'],
      ['Each presentation should last ____ minutes.', ['12', 'twelve'], 'Mười hai phút.'],
    ],
  },
  listening: [
    {
      title: 'Section 2 – Advice for new residents from a neighbourhood association',
      lines: [
        'M: Good evening, everybody, and a special welcome to those who have recently moved into the Oakfield area. I am the chairman of the residents\' association.',
        'M: The association was set up eighteen years ago, when the council planned to build a road through Oakfield Wood. We stopped that, and we have been active ever since.',
        'M: We meet on the first Monday of every month in the community hall, at half past seven. Everyone is welcome.',
        'M: Let me mention a few practical things. The doctor\'s surgery on Elm Road is accepting new patients, but you must register in person and bring proof of your address.',
        'M: The nearest primary school is Oakfield Primary. It is very popular, so parents should apply for a place by the end of January.',
        'M: Buses to the city centre leave from the stop outside the pharmacy every twelve minutes on weekdays.',
        'M: Our biggest concern at the moment is traffic speed. We are asking the council to introduce a twenty-mile-an-hour limit on Oakfield Road, and we would like you to sign our petition tonight.',
        'M: On a happier note, we organise a street party every June and a winter market in December. Last year the market raised nine hundred pounds for the local youth club.',
        'M: Membership of the association costs six pounds a year per household. Forms are on the table by the door.',
      ],
      qs: [
        ['Why was the association set up?', 'To oppose a road through a wood', 'To organise street parties', 'To build a community hall', '"when the council planned to build a road through Oakfield Wood".'],
        ['How must new patients register at the surgery?', 'In person', 'Online', 'By telephone', '"you must register in person".'],
        ['What does the association want the council to do?', 'Introduce a lower speed limit', 'Build a new school', 'Add more buses', '"introduce a twenty-mile-an-hour limit".'],
        ['What are residents asked to do tonight?', 'Sign a petition', 'Pay for the street party', 'Vote for a chairman', '"sign our petition tonight".'],
        ['Who benefited from last year\'s winter market?', 'The local youth club', 'The primary school', 'The pharmacy', '"raised nine hundred pounds for the local youth club".'],
      ],
      fill: [
        ['The association was set up ____ years ago.', ['18', 'eighteen'], 'Mười tám năm trước.'],
        ['Meetings are on the first ____ of every month.', ['Monday'], 'Thứ Hai đầu tiên mỗi tháng.'],
        ['Parents should apply for a school place by the end of ____.', ['January'], 'Cuối tháng Một.'],
        ['Buses leave every ____ minutes on weekdays.', ['12', 'twelve'], 'Mười hai phút một chuyến.'],
        ['Membership costs ____ pounds a year per household.', ['6', 'six'], 'Sáu bảng một năm.'],
      ],
    },
    {
      title: 'Section 4 – Lecture on why we yawn',
      lines: [
        'W: Good afternoon. Today I want to look at a behaviour that every one of you will probably perform during this lecture: yawning.',
        'W: Yawning is very old in evolutionary terms. Fish, snakes and birds all do it, and a human baby begins to yawn about eleven weeks after conception, long before birth.',
        'W: For a long time, the standard explanation was that we yawn to take in extra oxygen. That idea was tested in the nineteen eighties by the psychologist Robert Provine. He gave volunteers air with extra oxygen or extra carbon dioxide. Neither changed how often they yawned, so the theory was abandoned.',
        'W: A more recent proposal is that yawning cools the brain. In one experiment, people who held a cold pack against the forehead yawned far less than people holding a warm one.',
        'W: Supporters of this idea point out that we yawn most in the evening and just after waking, when brain temperature is changing.',
        'W: Then there is contagious yawning. Seeing, hearing or even reading about a yawn can trigger one. About half of adults are affected.',
        'W: Interestingly, children do not catch yawns until they are about four years old, the age at which they begin to understand other people\'s feelings.',
        'W: We are also more likely to catch a yawn from a relative or friend than from a stranger, which suggests a link with empathy.',
        'W: Dogs can even catch yawns from their owners.',
        'W: I should add that none of these theories is proven. Yawning remains one of the small mysteries of human behaviour.',
      ],
      qs: [
        ['What did Provine\'s experiment show?', 'Oxygen levels did not affect yawning.', 'Yawning increases oxygen in the blood.', 'Carbon dioxide stops yawning.', '"Neither changed how often they yawned".'],
        ['What is the more recent theory about yawning?', 'It cools the brain.', 'It stretches the face.', 'It improves hearing.', '"yawning cools the brain".'],
        ['What happened to people who held a cold pack on the forehead?', 'They yawned much less.', 'They fell asleep.', 'They yawned more.', '"yawned far less".'],
        ['At what age do children begin to catch yawns?', 'About four', 'About one', 'About ten', '"until they are about four years old".'],
        ['What does catching yawns from friends more than strangers suggest?', 'A connection with empathy', 'A fear of strangers', 'A problem with vision', '"suggests a link with empathy".'],
      ],
      fill: [
        ['A baby begins to yawn about ____ weeks after conception.', ['11', 'eleven'], 'Khoảng mười một tuần.'],
        ['The old theory said we yawn to take in extra ____.', ['oxygen'], '"to take in extra oxygen".'],
        ['We yawn most in the ____ and just after waking.', ['evening'], '"most in the evening".'],
        ['About ____ of adults are affected by contagious yawning.', ['half'], '"About half of adults".'],
        ['____ can catch yawns from their owners.', ['Dogs', 'dogs'], '"Dogs can even catch yawns".'],
      ],
    },
  ],
  // Bài đọc 1 – The Race to the South Pole (nối tiếp)
  r1: {
    text: 'Food was another decisive difference. Amundsen had placed large stores of seal meat along his route during the previous autumn and marked each one with a line of black flags stretching for kilometres on either side, so that it could not be missed in bad weather. Fresh meat protected his men against scurvy, a disease caused by a lack of vitamin C. Scott\'s party relied mainly on dried rations that supplied too little energy for men pulling sledges, and they grew steadily weaker. Their fuel also ran short, because the leather seals on the tins had shrunk in the cold and allowed the oil to leak away.\n\nNeither expedition was purely a race. Scott\'s team dragged fourteen kilograms of rock samples to the very end, among them fossils of a plant that later helped to prove that Antarctica had once been joined to other continents. Amundsen, for his part, admitted that victory brought him little joy. He had dreamed since childhood of the North Pole, and found himself standing at the opposite end of the Earth. He disappeared in 1928 while flying to rescue another explorer in the Arctic.',
    qs: [
      ['T', 'Amundsen marked his food stores so that they were easy to find.', 'Hàng cờ đen kéo dài hàng kilômét.'],
      ['F', 'Scott\'s men had plenty of fuel on their return journey.', 'Nhiên liệu thiếu vì dầu rò rỉ.'],
      ['NG', 'Amundsen wrote a book about Scott\'s expedition.', 'Bài không nói.'],
      ['Why were the rock samples collected by Scott\'s team important?', 'They helped show Antarctica was once joined to other continents.', 'They contained gold.', 'They proved Scott reached the Pole first.', 'They were used as fuel.', 'Hóa thạch thực vật chứng minh Nam Cực từng nối với lục địa khác.'],
    ],
    fill: [
      ['Fresh meat protected Amundsen\'s men against ____.', ['scurvy'], '"protected his men against scurvy".'],
    ],
  },
  reading: [
    {
      title: 'The Birth of the Weather Forecast',
      text: 'On the night of 25 October 1859, a violent storm struck the west coast of Britain. The steamship Royal Charter, returning from Australia with passengers carrying gold, was driven onto the rocks of Wales, and more than four hundred and fifty people drowned within sight of land. Across the country, over a hundred other ships were lost in the same storm.\n\nThe disaster deeply affected Robert FitzRoy, head of the small government office that collected weather statistics. FitzRoy was a naval officer who, as a young man, had commanded the Beagle on the voyage that carried Charles Darwin around the world. He was convinced that the storm could have been predicted. A new invention made this possible: the electric telegraph, which could send observations faster than the weather itself travelled.\n\nFitzRoy set up fifteen stations around the coast. Each morning, observers telegraphed readings of air pressure, wind and temperature to London, where they were entered on a map. When the pattern suggested a storm, a warning was sent to ports, which raised cones and drums on a mast as a signal to ships. The first warnings were issued in February 1861, and in August of that year FitzRoy went further, publishing in a newspaper a general prediction of the next day\'s weather. He invented a new word for it: "forecast".\n\nThe forecasts were popular with the public but not with everyone. They were sometimes wrong, and newspapers mocked the errors. Some scientists complained that forecasting was closer to guessing than to science, since nobody yet understood the laws governing the atmosphere. Owners of fishing fleets objected for a different reason: when a warning was raised, their crews stayed in harbour and they lost money. Exhausted and depressed by the criticism, FitzRoy took his own life in 1865. The following year the storm warnings were stopped, only to be restored a few months later after protests from sailors.\n\nThe scientific basis that FitzRoy lacked was supplied in the twentieth century. In 1922 the English mathematician Lewis Fry Richardson proposed that the weather could be calculated from the equations of physics. His own attempt took six weeks to produce a six-hour forecast, and it was badly wrong, but the principle was sound. He imagined a hall in which sixty-four thousand people would do the sums by hand. Electronic computers made his dream practical in the 1950s.\n\nForecasts have improved steadily ever since. A five-day forecast today is as reliable as a one-day forecast was in 1980. There are limits, however: because tiny uncertainties grow rapidly in the atmosphere, detailed prediction beyond about two weeks is thought to be impossible.',
      qs: [
        ['T', 'The Royal Charter was wrecked close to the shore.', 'Đoạn 1: "within sight of land".'],
        ['F', 'FitzRoy had sailed on the Beagle as a passenger.', 'Đoạn 2: ông chỉ huy tàu Beagle.'],
        ['T', 'The telegraph allowed information to travel faster than storms.', 'Đoạn 2.'],
        ['F', 'FitzRoy\'s first newspaper forecast appeared before the first storm warning.', 'Đoạn 3: cảnh báo tháng Hai, dự báo trên báo tháng Tám 1861.'],
        ['NG', 'FitzRoy was paid a high salary by the government.', 'Bài không nói.'],
        ['T', 'The storm warnings were brought back after they had been stopped.', 'Đoạn 4: khôi phục sau vài tháng.'],
        ['How were ships in port warned of a storm?', 'By cones and drums raised on a mast', 'By the ringing of bells', 'By a message in the newspaper', 'By a flag on the lighthouse', 'Đoạn 3.'],
        ['Why did owners of fishing fleets dislike the warnings?', 'Their crews stayed in harbour and they lost money.', 'The warnings were printed too late.', 'They had to pay for the telegraph.', 'Their ships were inspected.', 'Đoạn 4.'],
        ['What was wrong with Richardson\'s own forecast?', 'It was slow to produce and inaccurate.', 'It used the wrong equations of physics.', 'It was never finished.', 'It covered only one day.', 'Đoạn 5: mất sáu tuần và sai nhiều.'],
        ['Why can detailed forecasts not be made far in advance?', 'Small uncertainties grow quickly in the atmosphere.', 'Computers are too slow.', 'There are too few weather stations.', 'The equations are unknown.', 'Đoạn cuối.'],
      ],
      fill: [
        ['FitzRoy set up ____ stations around the coast.', ['fifteen', '15'], 'Đoạn 3: "fifteen stations".'],
        ['FitzRoy invented the word "____".', ['forecast'], 'Đoạn 3.'],
        ['Richardson imagined a hall where thousands of people would do the ____ by hand.', ['sums'], 'Đoạn 5: "do the sums by hand".'],
      ],
    },
    {
      title: 'Rewilding: Letting Nature Take Over',
      text: 'Conservation has traditionally meant protection: a rare species or a special habitat is identified, and people work hard to keep it exactly as it is. A newer approach, known as rewilding, starts from a different idea. Instead of managing land closely, it aims to restore natural processes and then step back and allow the land to develop in its own way.\n\nThe term was first used in North America in the 1990s, where it was associated with creating very large protected areas, linking them with corridors and bringing back large predators such as wolves. In crowded Europe, rewilding has usually been tried on a smaller scale, often on farmland that was no longer profitable.\n\nOne of the best-known examples is the Knepp estate in the south of England. Its owners, Charlie Burrell and Isabella Tree, had struggled for years to make money from crops and dairy cattle on heavy clay soil. In 2001 they sold their machinery, removed the fences inside the estate and released small numbers of old breeds of cattle, ponies, pigs and deer to wander freely. These animals were intended to play the part of the wild grazers that lived in Europe thousands of years ago. By eating, trampling and digging, they prevent the land from becoming a uniform forest and create instead a shifting mixture of grass, thorny scrub and trees.\n\nThe results surprised even the owners. Within a few years, the estate became a breeding ground for some of Britain\'s rarest species, among them the nightingale and the turtle dove, birds that had been declining everywhere else. The purple emperor butterfly, usually thought of as a woodland insect, arrived in large numbers to lay its eggs on willow bushes. The soil improved, and the estate now earns more from visitors, camping and the sale of meat than it did from conventional farming.\n\nRewilding has its critics. Farmers worry that good land is being taken out of food production, and some fear the return of predators. In the Netherlands, an ambitious project at Oostvaardersplassen ran into trouble when numbers of deer, horses and cattle grew far beyond what the fenced reserve could feed. During a hard winter thousands of animals starved, and public anger forced the managers to change their policy. Without predators, it seems, people must still control the grazers.\n\nSupporters accept that rewilding is not suitable everywhere. They argue that the poorest farmland could be returned to nature while the best is farmed efficiently. What distinguishes rewilding, they say, is its willingness to accept uncertainty: nobody decides in advance what the land should look like in fifty years.',
      qs: [
        ['T', 'Traditional conservation tries to keep habitats unchanged.', 'Đoạn 1.'],
        ['F', 'The term "rewilding" was first used in Europe.', 'Đoạn 2: ở Bắc Mỹ thập niên 1990.'],
        ['T', 'The Knepp estate had been an unprofitable farm.', 'Đoạn 3: chật vật kiếm tiền từ trồng trọt và bò sữa.'],
        ['F', 'The owners of Knepp planted thousands of trees.', 'Đoạn 3: họ thả gia súc và để đất tự phát triển.'],
        ['NG', 'The cattle at Knepp are sold to other rewilding projects.', 'Bài chỉ nói bán thịt, không nói bán gia súc cho dự án khác.'],
        ['T', 'Knepp now makes more money than it did as a conventional farm.', 'Đoạn 4.'],
        ['NG', 'Wolves are expected to be released at Knepp.', 'Bài không nói.'],
        ['What role do the animals at Knepp play?', 'They act like ancient wild grazers.', 'They attract predators.', 'They protect the fences.', 'They provide milk for sale.', 'Đoạn 3.'],
        ['What went wrong at Oostvaardersplassen?', 'Too many grazing animals led to starvation.', 'Predators killed the cattle.', 'The land was flooded.', 'Visitors damaged the reserve.', 'Đoạn 5.'],
        ['According to supporters, what makes rewilding different?', 'It accepts that the outcome is uncertain.', 'It requires no land.', 'It guarantees more food.', 'It removes all animals.', 'Đoạn cuối.'],
      ],
      fill: [
        ['The Knepp estate has heavy ____ soil.', ['clay'], 'Đoạn 3: "heavy clay soil".'],
        ['Rare birds at Knepp include the nightingale and the turtle ____.', ['dove'], 'Đoạn 4: "the turtle dove".'],
        ['The purple emperor butterfly lays its eggs on ____ bushes.', ['willow'], 'Đoạn 4: "willow bushes".'],
        ['In North America, protected areas were to be linked by ____.', ['corridors'], 'Đoạn 2: "linking them with corridors".'],
      ],
    },
  ],
};
