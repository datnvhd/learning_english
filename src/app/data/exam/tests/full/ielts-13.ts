/** IELTS đề 13 – phần bổ sung để đủ 40 câu nghe + 40 câu đọc (xem ghi chú "ĐỀ ĐẦY ĐỦ" trong helpers.ts) */
import { RawIeltsFull } from '../helpers';

export const FULL: RawIeltsFull = {
  // Section 1 – Booking a meeting room at a hotel (nối tiếp)
  l1: {
    lines: [
      'W: Thank you. How would you like the room arranged?',
      'M: In a U shape, please, so that everyone can see the screen.',
      'W: Certainly. Would you like coffee to be served during the day?',
      'M: Yes, at half past ten and again at three.',
      'W: Coffee breaks are four pounds per person each. And will anyone need to stay overnight?',
      'M: Our trainer is coming from Manchester, so she will need a single room for the night of the sixteenth.',
      'W: I can offer her our business rate of eighty-five pounds, including breakfast.',
      'M: That is fine. How do we pay?',
      'W: We ask for a deposit of twenty percent when you book. The rest is due one week after the event. I will email you a confirmation today.',
    ],
    qs: [
      ['How should the room be arranged?', 'In a U shape', 'In rows', 'Around small tables', '"In a U shape, please".'],
      ['Who needs a room for the night?', 'The trainer', 'The man', 'Two employees', '"Our trainer is coming from Manchester".'],
    ],
    fill: [
      ['Coffee breaks cost ____ pounds per person each.', ['4', 'four'], 'Bốn bảng một người mỗi lần.'],
      ['Business rate for a single room: ____ pounds', ['85', 'eighty-five', 'eighty five'], 'Tám mươi lăm bảng gồm bữa sáng.'],
      ['Deposit required: ____ percent', ['20', 'twenty'], 'Đặt cọc hai mươi phần trăm.'],
    ],
  },
  // Section 2 – A tour of the botanical garden (nối tiếp)
  l2: {
    lines: [
      'W: Before we set off, let me mention a few other things you can do after the tour.',
      'W: In the old stable building, there is an exhibition about plants used in medicine. It includes the founder\'s original notebooks.',
      'W: Children might enjoy the maze, which is made of two thousand small trees. Most people take about fifteen minutes to find the centre.',
      'W: The garden shop sells seeds collected here, and all the profits are spent on our research into rare plants.',
      'W: If you would like to return, an annual pass costs thirty pounds and includes free entry to our evening concerts in July.',
      'W: Now, please follow me to the glasshouse.',
    ],
    qs: [
      ['What can be seen in the old stable building?', 'An exhibition about medicinal plants', 'A collection of garden tools', 'Paintings of roses', '"an exhibition about plants used in medicine".'],
      ['What are the shop\'s profits used for?', 'Research into rare plants', 'Repairing the glasshouse', 'Paying the guides', '"spent on our research into rare plants".'],
      ['What does the annual pass include?', 'Free entry to evening concerts', 'A free guided tour', 'A discount in the cafe', '"includes free entry to our evening concerts in July".'],
    ],
    fill: [
      ['The maze is made of ____ thousand small trees.', ['2', 'two'], 'Hai nghìn cây nhỏ.'],
      ['An annual pass costs ____ pounds.', ['30', 'thirty'], 'Ba mươi bảng.'],
    ],
  },
  listening: [
    {
      title: 'Section 3 – Planning a study group for an economics exam',
      lines: [
        "W: Jamal, the economics exam is in five weeks. Do you want to form a study group?",
        'M: Good idea. I find it hard to revise alone. Who else should we ask?',
        'W: Chen and Olivia. Four is a good number. If the group is bigger, people just chat.',
        'M: Agreed. How often should we meet?',
        'W: Twice a week, I think, for ninety minutes each time.',
        'M: Where? The library is too quiet for discussion.',
        'W: There are group rooms on the third floor that you can reserve online. Each one has a whiteboard.',
        "M: Perfect. And how should we organise the sessions? I don't want to waste time.",
        'W: Each of us could prepare one topic and teach it to the others. They say you only really understand something when you can explain it.',
        'M: I like that. I will take international trade. It was my best topic in the mid-term test.',
        'W: I will do inflation. Then, in the last two weeks, we should practise with past exam papers under timed conditions.',
        'M: Where can we find those?',
        'W: The department website has papers from the last six years.',
        'M: Excellent. Shall we start on Monday at four?',
        'W: Yes. I will book the room and message the others.',
      ],
      qs: [
        ['Why does the woman want only four people?', 'Larger groups tend to chat.', 'The rooms are small.', 'Only four friends take the course.', '"If the group is bigger, people just chat".'],
        ['Why is the main library unsuitable?', 'It is too quiet for discussion.', 'It closes early.', 'It is always full.', '"The library is too quiet for discussion".'],
        ['How will the sessions be organised?', 'Each member teaches one topic.', 'They will watch recorded lectures.', 'A tutor will lead them.', '"Each of us could prepare one topic and teach it to the others".'],
        ['Which topic will the man prepare?', 'International trade', 'Inflation', 'Unemployment', '"I will take international trade".'],
        ['What will they do in the last two weeks?', 'Practise with past papers', 'Write new notes', 'Rest', '"practise with past exam papers under timed conditions".'],
      ],
      fill: [
        ['The exam is in ____ weeks.', ['5', 'five'], 'Năm tuần nữa.'],
        ['Each meeting will last ____ minutes.', ['90', 'ninety'], 'Chín mươi phút.'],
        ['Each group room has a ____.', ['whiteboard'], '"Each one has a whiteboard".'],
        ['The website has papers from the last ____ years.', ['6', 'six'], 'Sáu năm gần đây.'],
        ['The first meeting is on ____ at four.', ['Monday'], 'Thứ Hai lúc bốn giờ.'],
      ],
    },
    {
      title: 'Section 4 – Lecture on the history of the pencil',
      lines: [
        'M: Our object for today is one that most of you have in your bags: the pencil.',
        'M: The story begins in the north of England in about fifteen sixty-five, when a storm blew down a tree in the valley of Borrowdale and uncovered a strange black mineral. Local shepherds found it useful for marking their sheep.',
        'M: People believed that it was a kind of lead, which is why we still speak of pencil lead. In fact it was graphite, a form of carbon.',
        'M: The Borrowdale graphite was so pure that it could be sawn into sticks, and it became extremely valuable. It was used not only for writing but for lining the moulds in which cannonballs were made, so the mine was guarded by soldiers.',
        'M: At first the sticks were wrapped in string. Later, Italian craftsmen had the idea of placing them inside a wooden case.',
        'M: The modern pencil was born in France. In seventeen ninety-five, during a war with Britain, France could not obtain English graphite. An officer named Nicolas Conté solved the problem by mixing powdered graphite with clay and baking it.',
        'M: His method had a further advantage. By changing the amount of clay, he could make the pencil harder or softer. That is the origin of the grades we use today.',
        'M: The eraser on the end was added in America in eighteen fifty-eight.',
        'M: And why are so many pencils yellow? In the eighteen nineties, the best graphite came from China, and a manufacturer chose yellow, a colour associated with the Chinese emperor, to show quality.',
        'M: Around fourteen billion pencils are still made every year.',
      ],
      qs: [
        ['How was graphite discovered at Borrowdale?', 'A storm blew down a tree.', 'Miners were digging for gold.', 'A river changed course.', '"a storm blew down a tree... and uncovered a strange black mineral".'],
        ['What did shepherds use it for?', 'Marking their sheep', 'Writing letters', 'Lighting fires', '"useful for marking their sheep".'],
        ['Why was the mine guarded by soldiers?', 'Graphite was needed to make cannonballs.', 'Workers often went on strike.', 'The mine was dangerous.', '"for lining the moulds in which cannonballs were made".'],
        ['Why did Conté develop a new method?', 'France could not get English graphite.', 'English pencils were too soft.', 'Clay was cheaper than wood.', '"France could not obtain English graphite".'],
        ['Why did a manufacturer choose yellow for pencils?', 'It suggested Chinese quality.', 'Yellow paint was cheap.', 'It was easy to see.', '"a colour associated with the Chinese emperor, to show quality".'],
      ],
      fill: [
        ['Graphite is a form of ____.', ['carbon'], '"graphite, a form of carbon".'],
        ['At first, graphite sticks were wrapped in ____.', ['string'], '"wrapped in string".'],
        ['Conté mixed powdered graphite with ____.', ['clay'], '"mixing powdered graphite with clay".'],
        ['The ____ on the end was added in America in 1858.', ['eraser'], '"The eraser on the end".'],
        ['About ____ billion pencils are made every year.', ['14', 'fourteen'], 'Khoảng mười bốn tỉ.'],
      ],
    },
  ],
  // Bài đọc 1 – The Origins of Writing (nối tiếp)
  r1: {
    text: 'Some ancient scripts fell out of use and could no longer be read. The most famous case is that of Egyptian hieroglyphs, the meaning of which was lost for about fourteen hundred years. The key was a slab of dark stone found by French soldiers near the town of Rosetta in 1799. It carries the same decree written three times: in hieroglyphs, in a later Egyptian script, and in Greek, which scholars could read. Even so, it took more than twenty years before the Frenchman Jean-François Champollion, who had mastered a dozen languages as a boy, announced in 1822 that he had worked out the system. He had realised that the signs were not simply pictures of ideas, as had been assumed, but mostly represented sounds.\n\nOther scripts still resist every attempt. The seals of the Indus Valley civilisation, in what is now Pakistan, bear short rows of signs that nobody can interpret, partly because no inscription is longer than a few symbols and no text in two languages has been found. Some scholars doubt whether they are writing at all.',
    qs: [
      ['T', 'The Rosetta Stone contains one text in three scripts.', 'Cùng một sắc lệnh viết ba lần.'],
      ['F', 'Champollion deciphered hieroglyphs within a year of the stone\'s discovery.', 'Mất hơn hai mươi năm (1799–1822).'],
      ['NG', 'Champollion travelled to Egypt before making his discovery.', 'Bài không nói.'],
      ['What did Champollion realise about hieroglyphs?', 'Most signs stood for sounds.', 'They were purely decorative.', 'They were a form of Greek.', 'Each sign was a whole sentence.', 'Phần lớn ký hiệu biểu thị âm thanh.'],
    ],
    fill: [
      ['The script of the ____ Valley civilisation has not been deciphered.', ['Indus'], '"the Indus Valley civilisation".'],
    ],
  },
  reading: [
    {
      title: 'The Great Stink',
      text: 'In the summer of 1858, London experienced a crisis that Members of Parliament could literally not ignore. Weeks of hot, dry weather had reduced the flow of the River Thames, and the smell rising from it became so overpowering that the curtains of the Houses of Parliament, which stand on the river bank, were soaked in chemicals in an attempt to keep it out. Newspapers called the episode the Great Stink.\n\nThe cause was simple. London\'s population had more than doubled in fifty years, to over two and a half million, and the waste of all these people ended up in the river. Matters had been made worse by an invention intended to improve hygiene. The flushing toilet, which became fashionable after it was displayed at the Great Exhibition of 1851, washed waste into old drains that had been built only for rainwater, and these emptied straight into the Thames. Much of the city\'s drinking water was pumped from the same river.\n\nAt the time, most doctors believed that diseases such as cholera were spread by bad air, known as miasma. Three epidemics of cholera had killed more than thirty thousand Londoners since 1832. One physician, John Snow, disagreed with the accepted view. During an outbreak in the Soho district in 1854, he marked each death on a street map and showed that the cases were clustered around a single water pump in Broad Street. He persuaded the local authority to remove the pump handle. His evidence that cholera was carried by water was, however, not generally accepted until after his death.\n\nIronically, it was the mistaken fear of bad air that produced the right solution. Within eighteen days of the Great Stink, Parliament passed a law to pay for a new system of sewers. The work was directed by the engineer Joseph Bazalgette. He built about one hundred and thirty kilometres of large brick tunnels that caught the waste before it reached the river and carried it eastwards, to be released far downstream of the city. Along the Thames he constructed stone embankments that contained the sewers, a new road and an underground railway.\n\nBazalgette made one decision for which Londoners are still grateful. Having calculated the diameter of pipe required for the population, he doubled it, remarking that such a project would be attempted only once. His sewers proved large enough for a city several times bigger.\n\nThe system was nearly complete by 1866, when cholera returned, and the only district seriously affected was one not yet connected. London has had no cholera epidemic since. Bazalgette\'s tunnels remain in use, though a new "super sewer" has been built beneath the river to cope with a population of nine million.',
      qs: [
        ['T', 'The smell of the Thames affected the work of Parliament.', 'Đoạn 1.'],
        ['F', 'The flushing toilet reduced the pollution of the river.', 'Đoạn 2: làm vấn đề tệ hơn.'],
        ['T', 'Some of London\'s drinking water came from the Thames.', 'Đoạn 2.'],
        ['F', 'John Snow\'s theory was immediately accepted by other doctors.', 'Đoạn 3: chỉ được chấp nhận sau khi ông mất.'],
        ['NG', 'Bazalgette and Snow worked together on the sewer plans.', 'Bài không nói.'],
        ['T', 'Parliament acted quickly after the Great Stink.', 'Đoạn 4: trong vòng mười tám ngày.'],
        ['How did Snow show the source of the Soho outbreak?', 'By plotting deaths on a map', 'By testing the air', 'By examining patients\' blood', 'By interviewing doctors', 'Đoạn 3.'],
        ['Why does the writer call the solution ironic?', 'A wrong theory led to the correct action.', 'The sewers made the smell worse.', 'Snow opposed the sewers.', 'Parliament refused to pay.', 'Đoạn 4: nỗi sợ sai lầm về khí độc lại dẫn đến giải pháp đúng.'],
        ['Why did Bazalgette double the diameter of the pipes?', 'He believed the project would be done only once.', 'He was ordered to by Parliament.', 'Bricks were cheap.', 'He had made an error in his sums.', 'Đoạn 5.'],
        ['What happened when cholera returned in 1866?', 'Only an unconnected district was badly affected.', 'The whole city suffered.', 'The sewers collapsed.', 'The river dried up.', 'Đoạn cuối.'],
      ],
      fill: [
        ['Doctors believed diseases were spread by bad air, called ____.', ['miasma'], 'Đoạn 3.'],
        ['Snow had the ____ of the Broad Street pump removed.', ['handle'], 'Đoạn 3: "remove the pump handle".'],
        ['Bazalgette built stone ____ along the Thames.', ['embankments'], 'Đoạn 4.'],
      ],
    },
    {
      title: 'The Puzzle of Left-Handedness',
      text: 'About one person in ten is left-handed, and the proportion seems to have stayed roughly the same for a very long time. Ancient cave paintings include outlines of hands made by blowing paint around them; most show the left hand, which implies that the artist held the blowing tube in the right. Studies of prehistoric stone tools point to a similar ratio. Why a minority of left-handers should persist, without either disappearing or becoming equal in number, is a question that scientists have not fully answered.\n\nHand preference appears before birth. Ultrasound scans show that most babies in the womb suck the right thumb, and those that prefer the left generally grow up left-handed. Genes play a part, since left-handedness runs in families, but they do not decide the matter. Identical twins, who share all their genes, frequently differ: in about one pair in five, one twin is right-handed and the other left-handed.\n\nHandedness is related to the organisation of the brain, in which each side controls the opposite half of the body. In nearly all right-handers, language is handled mainly by the left side. It was once assumed that left-handers must be the reverse, but brain imaging shows that about seventy percent of them also process language on the left.\n\nFor centuries, left-handed people faced prejudice. In many languages the word for "left" also means awkward or unlucky. Well into the twentieth century, schools in Europe and America forced left-handed children to write with the right hand, sometimes tying the left behind the back. The practice has been linked to stammering and unhappiness, and it was largely abandoned by the 1970s. Everyday objects still favour the majority: scissors, tin openers, and notebooks with a spiral on the left are all designed for right hands.\n\nOne theory tries to explain why left-handers survive as a minority. In any activity that involves facing an opponent, the rarer type has an advantage, because the opponent has had little practice against it. This "fighting hypothesis" is supported by sport. Left-handers make up a much larger share of top players in tennis, boxing and fencing than they do of the general population. In sports without direct opposition, such as swimming, there is no such effect. If left-handers became common, the advantage would disappear, so the balance remains stable.\n\nMany popular beliefs about left-handers have little foundation. Claims that they are more creative, or that they die younger, have not survived careful study. The supposed difference in length of life came from a statistical error.\n\nAnimals show preferences too. Most parrots use the left foot to hold food, and individual cats and dogs favour one paw.',
      qs: [
        ['T', 'The proportion of left-handers has changed little over time.', 'Đoạn 1.'],
        ['F', 'Hand preference first appears at school age.', 'Đoạn 2: xuất hiện trước khi sinh.'],
        ['F', 'Identical twins always have the same hand preference.', 'Đoạn 2: khoảng một trong năm cặp khác nhau.'],
        ['T', 'Most left-handers process language on the same side of the brain as right-handers.', 'Đoạn 3: khoảng bảy mươi phần trăm.'],
        ['NG', 'Left-handed children learn to read later than right-handed children.', 'Bài không nói.'],
        ['T', 'Forcing children to change hands has been associated with speech problems.', 'Đoạn 4: liên quan tới nói lắp.'],
        ['NG', 'Left-handed tennis players earn more than right-handed players.', 'Bài không nói về thu nhập.'],
        ['What do ancient hand outlines suggest?', 'Most artists were right-handed.', 'Most artists were left-handed.', 'Paint was applied with both hands.', 'Hands were smaller in the past.', 'Đoạn 1.'],
        ['According to the "fighting hypothesis", why do left-handers have an advantage?', 'Opponents are less used to them.', 'They are physically stronger.', 'They train harder.', 'They have faster reactions.', 'Đoạn 5.'],
        ['What does the writer say about the claim that left-handers die younger?', 'It resulted from a statistical mistake.', 'It has been confirmed.', 'It applies only to athletes.', 'It is true of twins.', 'Đoạn 6.'],
      ],
      fill: [
        ['Babies in the womb can be seen sucking a ____ on ultrasound scans.', ['thumb'], 'Đoạn 2: "suck the right thumb".'],
        ['Objects such as ____ and tin openers are designed for right hands.', ['scissors'], 'Đoạn 4.'],
        ['In sports without direct opposition, such as ____, there is no advantage.', ['swimming'], 'Đoạn 5.'],
        ['Most ____ use the left foot to hold food.', ['parrots'], 'Đoạn cuối.'],
      ],
    },
  ],
};
