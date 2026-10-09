/** IELTS đề 18 – phần bổ sung để đủ 40 câu nghe + 40 câu đọc (xem ghi chú "ĐỀ ĐẦY ĐỦ" trong helpers.ts) */
import { RawIeltsFull } from '../helpers';

export const FULL: RawIeltsFull = {
  // Section 1 – At the student accommodation office (nối tiếp)
  l1: {
    lines: [
      'W: Thank you. Could you tell me a little more about Kingsley Hall? How many students share each kitchen?',
      'M: Each flat has six bedrooms and one kitchen. The kitchens are cleaned once a week, but you are responsible for washing your own dishes.',
      'W: Is the internet included in the rent?',
      'M: Yes, and so are heating and electricity. The only extra is the laundry, which costs two pounds fifty a wash.',
      'W: What do I need to bring?',
      'M: Bedding and kitchen equipment. If you prefer, you can order a bedding pack from us for thirty-five pounds, and it will be in your room when you arrive.',
      'W: That would be easier. And is there someone to contact if something goes wrong at night?',
      'M: There is a warden living in each hall, and the security office is open twenty-four hours.',
    ],
    qs: [
      ['What is NOT included in the rent?', 'Laundry', 'Internet', 'Heating', '"The only extra is the laundry".'],
      ['Who can students contact at night?', 'A warden living in the hall', 'The accommodation office', 'The cleaning staff', '"There is a warden living in each hall".'],
    ],
    fill: [
      ['Each flat has ____ bedrooms.', ['6', 'six'], 'Sáu phòng ngủ.'],
      ['Kitchens are cleaned once a ____.', ['week'], 'Mỗi tuần một lần.'],
      ['A bedding pack costs ____ pounds.', ['35', 'thirty-five', 'thirty five'], 'Ba mươi lăm bảng.'],
    ],
  },
  // Section 2 – News from the Riverside community theatre (nối tiếp)
  l2: {
    lines: [
      'W: There is more news from the theatre. In December, it will stage a traditional show for families, with two performances a day during the school holidays.',
      'W: The theatre is also starting a drama club for children aged eight to twelve. It will meet on Saturday mornings, and the first session is free.',
      'W: To pay for a new lighting system, the theatre is asking supporters to sponsor a seat. For forty pounds, your name will be placed on a small metal plate on the back of a seat.',
      'W: And the building itself is now open to visitors. Backstage tours take place on the first Sunday of each month and last about an hour.',
      'W: For more information, call in at the box office, which is open from ten until six.',
    ],
    qs: [
      ['Who is the December show aimed at?', 'Families', 'Students', 'Tourists', '"a traditional show for families".'],
      ['Why is the theatre asking people to sponsor a seat?', 'To pay for a new lighting system', 'To repair the roof', 'To buy costumes', '"To pay for a new lighting system".'],
      ['When do backstage tours take place?', 'On the first Sunday of each month', 'Every Saturday morning', 'After each performance', '"on the first Sunday of each month".'],
    ],
    fill: [
      ['The drama club is for children aged eight to ____.', ['12', 'twelve'], 'Từ tám đến mười hai tuổi.'],
      ['Sponsoring a seat costs ____ pounds.', ['40', 'forty'], 'Bốn mươi bảng.'],
    ],
  },
  listening: [
    {
      title: 'Section 3 – Two students prepare for a debate',
      lines: [
        'M: So, Nadia, we have been given the side that argues against banning cars from the city centre. That is not what I personally believe.',
        'W: Nor me, but that is the point of a debate. We have to find the strongest arguments.',
        'M: All right. The obvious one is the effect on shops. If customers cannot drive in, they will go to the shopping centres outside town.',
        'W: Yes, but the other team will quote studies showing that pedestrian streets actually increase sales.',
        'M: Then we should say that the result depends on the type of shop. A furniture store needs customers with cars.',
        'W: Good. Our second argument could be about people with disabilities and the elderly, who cannot walk far.',
        'M: I think that is our strongest point. It is hard to argue against.',
        'W: Third, the cost. Building car parks at the edge of the city and running extra buses is expensive.',
        'M: Do we have any figures?',
        'W: I found a report saying a similar scheme in another city cost fourteen million pounds.',
        'M: Excellent. Each speaker has four minutes. I will open, and you can answer their points at the end.',
        'W: Fine. We should practise with a timer. Are you free on Tuesday evening?',
        'M: Yes. And remember, the tutor gives marks for teamwork, not only for the arguments.',
      ],
      qs: [
        ['What side have the students been given?', 'Against banning cars', 'In favour of banning cars', 'In favour of more buses', '"the side that argues against banning cars".'],
        ['What do they expect the other team to say about shops?', 'Pedestrian streets increase sales.', 'Shops should close earlier.', 'Car parks are too small.', '"studies showing that pedestrian streets actually increase sales".'],
        ['Which argument does the man think is strongest?', 'The needs of disabled and elderly people', 'The cost of the scheme', 'The effect on furniture stores', '"I think that is our strongest point".'],
        ['Who will speak first?', 'The man', 'The woman', 'The tutor', '"I will open".'],
        ['What else does the tutor give marks for?', 'Teamwork', 'Humour', 'Length of speech', '"the tutor gives marks for teamwork".'],
      ],
      fill: [
        ['A ____ store needs customers with cars.', ['furniture'], '"A furniture store needs customers with cars".'],
        ['A similar scheme cost ____ million pounds.', ['14', 'fourteen'], 'Mười bốn triệu bảng.'],
        ['Each speaker has ____ minutes.', ['4', 'four'], 'Bốn phút.'],
        ['They should practise with a ____.', ['timer'], '"practise with a timer".'],
        ['They will meet on ____ evening.', ['Tuesday'], 'Tối thứ Ba.'],
      ],
    },
    {
      title: 'Section 4 – Lecture on the history of anaesthesia',
      lines: [
        'M: Before the eighteen forties, surgery was a terrifying experience. The patient was awake, and the most admired surgeons were simply the fastest. One London surgeon could remove a leg in under thirty seconds.',
        'M: Various substances were used to reduce pain, such as alcohol and opium, but none was reliable.',
        'M: The first step towards a solution came from an unexpected direction: entertainment. A gas called nitrous oxide, known as laughing gas, was inhaled at parties and travelling shows because it made people giggle.',
        'M: In eighteen forty-four, an American dentist, Horace Wells, noticed that a man who had injured his leg while under its influence felt no pain. Wells had one of his own teeth pulled out using the gas.',
        'M: His public demonstration, however, went badly. The patient cried out, and Wells was laughed at.',
        'M: Success came two years later. On the sixteenth of October eighteen forty-six, in Boston, another dentist, William Morton, used a different substance, ether, while a surgeon removed a growth from a patient\'s neck. The patient felt nothing.',
        'M: News spread across the Atlantic within weeks.',
        'M: In Britain, chloroform soon became more popular than ether, because it worked faster and did not catch fire. When Queen Victoria used it during the birth of her eighth child, it became fashionable.',
        'M: Anaesthesia transformed surgery. Operations could now be slow and careful, which made new procedures possible.',
        'M: Curiously, even today scientists do not fully understand how anaesthetics switch off consciousness.',
      ],
      qs: [
        ['Why were fast surgeons admired before the 1840s?', 'Patients were awake during operations.', 'Hospitals charged by the minute.', 'Instruments were poor.', '"The patient was awake, and the most admired surgeons were simply the fastest".'],
        ['How was nitrous oxide first used?', 'For entertainment', 'For cleaning wounds', 'For lighting', '"inhaled at parties and travelling shows".'],
        ['What happened at Wells\'s public demonstration?', 'The patient cried out.', 'The patient fell asleep for a day.', 'The audience fainted.', '"The patient cried out, and Wells was laughed at".'],
        ['Why did chloroform become more popular than ether in Britain?', 'It worked faster and did not catch fire.', 'It was cheaper.', 'It smelled pleasant.', '"it worked faster and did not catch fire".'],
        ['How did anaesthesia change surgery?', 'Operations could be slow and careful.', 'Surgeons became less important.', 'Hospitals became smaller.', '"Operations could now be slow and careful".'],
      ],
      fill: [
        ['Nitrous oxide is also known as ____ gas.', ['laughing'], '"known as laughing gas".'],
        ['Horace Wells was an American ____.', ['dentist'], '"an American dentist".'],
        ['William Morton used a substance called ____.', ['ether'], '"used a different substance, ether".'],
        ['The successful operation took place in the city of ____.', ['Boston'], '"in Boston".'],
        ['Queen Victoria used chloroform during the birth of her ____ child.', ['eighth', '8th'], '"her eighth child".'],
      ],
    },
  ],
  // Bài đọc 1 – The Power of Expectation (nối tiếp)
  r1: {
    text: 'The use of placebos raises difficult ethical questions. In a clinical trial, half of the patients receive a treatment that the researchers know to be inactive. This is generally considered acceptable only when no effective treatment already exists and when the volunteers have been told that they may be given a placebo. Outside trials, the matter is more delicate. Surveys in several countries have found that about half of family doctors admit to having prescribed a treatment they did not expect to work, such as vitamins for tiredness, simply because the patient wanted something. Critics argue that this is a form of deception that undermines trust.\n\nResearch into placebos has also drawn attention to the importance of the relationship between doctor and patient. In a study at Harvard Medical School, patients with a common stomach complaint were given the same fake treatment, but some were treated by a practitioner who was warm, asked questions and expressed confidence, while others saw one who was cold and hurried. Those in the first group improved considerably more. Time, attention and a clear explanation, it seems, are themselves a kind of medicine.',
    qs: [
      ['T', 'Volunteers in trials should be informed that they might receive a placebo.', 'Người tham gia phải được báo trước.'],
      ['F', 'Family doctors never prescribe treatments they believe to be ineffective.', 'Khoảng một nửa thừa nhận đã từng làm vậy.'],
      ['NG', 'The Harvard study lasted for more than a year.', 'Bài không nói.'],
      ['What did the Harvard study show?', 'A caring manner improves the effect of treatment.', 'Fake treatments never work.', 'Cold doctors are more accurate.', 'Stomach complaints cure themselves.', 'Bệnh nhân gặp người chữa trị ấm áp cải thiện nhiều hơn.'],
    ],
    fill: [
      ['Critics say prescribing placebos is a form of ____.', ['deception'], '"a form of deception that undermines trust".'],
    ],
  },
  reading: [
    {
      title: 'The Elephant\'s Memory',
      text: 'The saying that an elephant never forgets is one of the few popular beliefs about animals that science has largely confirmed. Elephants have the largest brains of any land animal, weighing about five kilograms, and the part concerned with memory is especially well developed. In the dry landscapes where many of them live, remembering is a matter of life and death.\n\nElephant families are led by the oldest female, known as the matriarch. A study carried out in Tanzania during a severe drought in 1993 showed how much depends on her. Researchers followed three family groups. The two led by older matriarchs left the park and travelled to distant sources of water, apparently remembering routes they had used during a drought thirty-five years earlier. The third group, whose matriarch was too young to have lived through that drought, stayed where it was and lost far more of its calves.\n\nMemory also operates in social life. Elephants live in families of related females, but these join and separate from other families in a complicated pattern. The biologist Cynthia Moss, who has studied the elephants of Amboseli in Kenya since 1972, estimates that an adult female can recognise the calls of about a hundred other individuals. When recordings of a family member who had died were played, the listeners called back and approached the loudspeaker; the voice of a stranger caused them to bunch together defensively.\n\nThey can distinguish between humans, too. In Kenya, elephants react with fear to the smell of clothing worn by young Maasai men, who traditionally hunted them with spears, but not to clothing worn by members of a farming people who pose no danger. They respond differently even to recordings of the two languages.\n\nElephants communicate over long distances using very low sounds that humans cannot hear, which travel for several kilometres. There is evidence that they also detect these vibrations through the ground with their sensitive feet.\n\nMost remarkable is their behaviour towards the dead. Elephants often stop at the bones of other elephants, touching the skull and tusks gently with their trunks and feet, while ignoring the bones of other animals. Whether this should be called grief is debated, but many researchers believe that it shows some awareness of death.\n\nThis intelligence makes the illegal trade in ivory especially damaging. Hunters target the animals with the largest tusks, which are the oldest. When a matriarch is killed, the family loses the knowledge stored in her memory, and studies show that such groups raise fewer young. Young males that have grown up without older animals around them have been known to become unusually aggressive.',
      qs: [
        ['T', 'Elephants have the largest brains of all land animals.', 'Đoạn 1.'],
        ['F', 'Elephant families are led by the largest male.', 'Đoạn 2: con cái già nhất.'],
        ['T', 'In the 1993 drought, groups with older leaders travelled to find water.', 'Đoạn 2.'],
        ['NG', 'The young matriarch in the study later died of thirst.', 'Bài không nói.'],
        ['F', 'Elephants reacted in the same way to the calls of relatives and strangers.', 'Đoạn 3: phản ứng khác nhau.'],
        ['T', 'Elephants can tell the difference between two human languages.', 'Đoạn 4.'],
        ['Why did the third group lose more calves?', 'Its matriarch had no memory of the earlier drought.', 'It was attacked by lions.', 'It was the largest group.', 'It left the park too early.', 'Đoạn 2.'],
        ['How do elephants react to clothing worn by young Maasai men?', 'With fear', 'With curiosity', 'With no interest', 'By approaching it', 'Đoạn 4.'],
        ['How may elephants detect very low sounds besides hearing them?', 'Through their feet', 'Through their tusks', 'Through their ears touching the ground', 'Through their tails', 'Đoạn 5.'],
        ['Why is the killing of a matriarch so harmful?', 'The family loses her knowledge.', 'The males leave the group.', 'The calves cannot find milk.', 'Other families attack.', 'Đoạn cuối.'],
      ],
      fill: [
        ['The oldest female who leads a family is called the ____.', ['matriarch'], 'Đoạn 2.'],
        ['Cynthia Moss has studied the elephants of ____ since 1972.', ['Amboseli'], 'Đoạn 3.'],
        ['Hunters kill elephants for the illegal trade in ____.', ['ivory'], 'Đoạn cuối.'],
      ],
    },
    {
      title: 'The Paradox of Choice',
      text: 'Modern consumers are offered a range of choice that earlier generations could not have imagined. A large supermarket stocks forty thousand products, among them dozens of kinds of toothpaste and breakfast cereal. It has generally been assumed that this is a good thing: the more options there are, the more likely each person is to find exactly what suits them. Psychologists have begun to question that assumption.\n\nThe best-known evidence comes from an experiment conducted in a food shop in California in 2000 by Sheena Iyengar and Mark Lepper. On some days they set up a table displaying twenty-four varieties of jam for customers to taste; on other days the table held only six. The large display attracted more people. But when it came to buying, the result was reversed. Thirty percent of those who had tasted from the small selection bought a jar, compared with only three percent of those who had faced the large one.\n\nSeveral explanations have been proposed. Comparing many options requires effort, and when the effort seems too great, people put off the decision altogether. A wide choice also raises expectations. With six jams, nobody expects perfection; with twenty-four, the chosen one ought to be ideal, and any small disappointment feels like a personal failure. Finally, every option that is rejected has some attractive features, and the more that are given up, the greater the sense of loss.\n\nThe American psychologist Barry Schwartz, who made the subject famous in a book published in 2004, distinguishes two kinds of decision-maker. "Maximisers" feel obliged to examine every possibility in search of the very best. "Satisficers" choose the first option that meets their requirements and stop looking. In his studies, maximisers obtained objectively better results, such as higher starting salaries, yet were less satisfied with them and more inclined to regret.\n\nThe consequences are not limited to shopping. A study of American company pension schemes found that for every ten additional investment funds offered to employees, the proportion who joined the scheme at all fell by two percent.\n\nThe idea has its critics. When other researchers tried to repeat the jam experiment, some found no effect, and an analysis that combined fifty such studies concluded that, on average, the number of options made little difference. Too much choice appears to be a problem mainly when people are unfamiliar with the products and the options are hard to compare.\n\nPractical advice follows nonetheless. Businesses can help by arranging products into clear categories, and individuals by limiting the number of options they are prepared to consider and accepting that "good enough" is often good enough.',
      qs: [
        ['T', 'It has usually been assumed that more choice benefits consumers.', 'Đoạn 1.'],
        ['F', 'In the jam experiment, the small display attracted more visitors.', 'Đoạn 2: bàn lớn thu hút nhiều người hơn.'],
        ['T', 'People who tasted from the small selection were more likely to buy.', 'Đoạn 2: 30% so với 3%.'],
        ['NG', 'The jams in the experiment were all made by the same company.', 'Bài không nói.'],
        ['F', 'Maximisers were more satisfied with their results than satisficers.', 'Đoạn 4: ít hài lòng hơn.'],
        ['T', 'Offering more pension funds reduced the number of employees who joined.', 'Đoạn 5.'],
        ['NG', 'Schwartz describes himself as a satisficer.', 'Bài không nói.'],
        ['Why does a wide choice make disappointment worse?', 'It raises expectations of an ideal result.', 'It increases prices.', 'It reduces quality.', 'It shortens shopping time.', 'Đoạn 3.'],
        ['What did the analysis of fifty studies conclude?', 'On average, the number of options made little difference.', 'More choice always reduces sales.', 'The jam experiment was dishonest.', 'Consumers prefer exactly six options.', 'Đoạn 6.'],
        ['What can businesses do to help customers?', 'Arrange products into clear categories', 'Raise their prices', 'Remove all labels', 'Offer only one product', 'Đoạn cuối.'],
      ],
      fill: [
        ['The large display offered twenty-four varieties of ____.', ['jam'], 'Đoạn 2.'],
        ['People who look for the very best option are called "____".', ['maximisers', 'Maximisers'], 'Đoạn 4.'],
        ['Maximisers were more inclined to feel ____.', ['regret'], 'Đoạn 4: "more inclined to regret".'],
        ['Individuals should accept that "good ____" is often sufficient.', ['enough'], 'Đoạn cuối.'],
      ],
    },
  ],
};
