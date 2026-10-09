/** IELTS đề 2 – phần bổ sung để đủ 40 câu nghe + 40 câu đọc (xem ghi chú "ĐỀ ĐẦY ĐỦ" trong helpers.ts) */
import { RawIeltsFull } from '../helpers';

export const FULL: RawIeltsFull = {
  // Section 1 – Renting a flat (nối tiếp)
  l1: {
    lines: [
      'W: Before I come, could I ask a few more questions? Which floor is the flat on?',
      "M: It's on the third floor, and I should mention there is no lift in the building.",
      "W: That's all right. And what about heating?",
      'M: There is gas central heating, and the windows were replaced two years ago, so it is quite warm.',
      'W: How much is the deposit?',
      'M: We ask for six weeks\' rent in advance, and the minimum contract is twelve months.',
      'W: I see. Is it close to public transport?',
      'M: Yes, the underground station is about eight minutes away on foot, and there is a supermarket on the corner.',
    ],
    qs: [
      ['What does the man say about the building?', 'It has no lift.', 'It has no heating.', 'It has a new roof.', '"there is no lift in the building".'],
      ['What is on the corner near the flat?', 'A supermarket', 'A bus station', 'A park', '"there is a supermarket on the corner".'],
    ],
    fill: [
      ['The flat is on the ____ floor.', ['third', '3rd'], 'Căn hộ ở tầng ba.'],
      ['Minimum contract: ____ months', ['12', 'twelve'], 'Hợp đồng tối thiểu mười hai tháng.'],
      ['The underground station is about ____ minutes away on foot.', ['8', 'eight'], 'Khoảng tám phút đi bộ.'],
    ],
  },
  // Section 2 – A new recycling scheme (nối tiếp)
  l2: {
    lines: [
      'M: Now, a few practical details. Collections will take place on Tuesdays in the north of the town and on Thursdays in the south.',
      'M: Please put your bins outside by seven in the morning, and bring them in again the same evening.',
      'M: If your family is large and the grey bin is too small, you can apply for a bigger one, but only households of six people or more qualify.',
      'M: Old furniture and electrical items will not be taken. For those, you need to book a special collection, which costs fifteen pounds.',
      'M: Finally, every household will receive a calendar next week showing all the collection dates for the year.',
    ],
    qs: [
      ['When should bins be put outside?', 'By seven in the morning', 'The night before', 'By midday', '"put your bins outside by seven in the morning".'],
      ['Who can apply for a bigger grey bin?', 'Households of six or more people', 'Any household that pays a fee', 'Households in the north of the town', '"only households of six people or more qualify".'],
      ['What will each household receive next week?', 'A calendar', 'A new bin', 'A bill', '"every household will receive a calendar next week".'],
    ],
    fill: [
      ['In the south of the town, collections are on ____.', ['Thursdays', 'Thursday'], 'Phía nam thu gom vào thứ Năm.'],
      ['A special collection costs ____ pounds.', ['15', 'fifteen'], 'Mười lăm bảng.'],
    ],
  },
  listening: [
    {
      title: 'Section 3 – A student discusses her dissertation with a tutor',
      lines: [
        'M: Come in, Hannah. So, you want to talk about your dissertation on tourism in small island communities.',
        'W: Yes. I have chosen two islands to compare, but I am worried that the topic is too wide.',
        'M: It is rather broad. What interests you most: the economy, the environment, or the effect on local culture?',
        'W: The effect on culture, I think. On the first island, young people are leaving traditional fishing to work in hotels.',
        'M: Then concentrate on that. How are you planning to collect your data?',
        'W: I wanted to send out a questionnaire, but the population is small, so I may only get fifty replies.',
        'M: In that case, interviews would be more valuable than a questionnaire. Twelve long interviews will tell you more than fifty short answers.',
        'W: That makes sense. Should I record them?',
        'M: Yes, but you must ask each person to sign a consent form first. The university is very strict about that.',
        'W: And how long should the literature review be?',
        'M: About a quarter of the total, so roughly two and a half thousand words. Start with the work of Professor Lindholm, who studied the Faroe Islands.',
        'W: Thank you. When would you like to see my plan?',
        'M: Send me a one-page outline by the third of February. And remember, the library runs a workshop on referencing every Wednesday.',
      ],
      qs: [
        ['What is the student worried about?', 'Her topic is too broad.', 'She cannot travel to the islands.', 'She has no tutor.', '"I am worried that the topic is too wide".'],
        ['Which aspect will she focus on?', 'The effect on local culture', 'The economy', 'The environment', '"The effect on culture, I think" – "Then concentrate on that".'],
        ['Why does the tutor recommend interviews?', 'They give richer information.', 'They are quicker to analyse.', 'They cost less.', '"Twelve long interviews will tell you more than fifty short answers".'],
        ['What must the student do before recording?', 'Get a signed consent form', 'Pay each participant', 'Ask the library for equipment', '"ask each person to sign a consent form first".'],
        ['What does the library offer every Wednesday?', 'A workshop on referencing', 'A talk about islands', 'Free printing', '"a workshop on referencing every Wednesday".'],
      ],
      fill: [
        ['On the first island, young people are leaving traditional ____.', ['fishing'], '"leaving traditional fishing to work in hotels".'],
        ['The tutor suggests ____ long interviews.', ['12', 'twelve'], 'Mười hai cuộc phỏng vấn dài.'],
        ['The literature review should be about a ____ of the total.', ['quarter'], '"About a quarter of the total".'],
        ['Professor Lindholm studied the ____ Islands.', ['Faroe'], '"who studied the Faroe Islands".'],
        ['The outline is due by the third of ____.', ['February'], 'Hạn nộp dàn ý ngày 3 tháng Hai.'],
      ],
    },
    {
      title: 'Section 4 – Lecture on the history of street lighting',
      lines: [
        'W: Today we are going to look at something we all take for granted: light in our streets at night.',
        'W: For most of history, cities were dark after sunset. In London in the fifteenth century, householders were ordered to hang a lantern outside their doors on winter evenings, but few obeyed.',
        'W: The first real system of public lighting was created in Paris in sixteen sixty-seven, when thousands of candle lanterns were hung across the streets on ropes.',
        'W: Oil lamps followed in the eighteenth century. They were brighter, but they had to be cleaned and refilled every day by a lamplighter.',
        'W: The great change came with gas. In eighteen oh seven, a street in London called Pall Mall became the first in the world to be lit by gas. People travelled long distances simply to see it.',
        'W: Not everyone was pleased. Some doctors claimed that staying awake under artificial light would damage health, and others feared explosions.',
        'W: Electric lighting arrived in the eighteen seventies. It was far brighter than gas, and at first it was mounted on very tall towers to light whole districts at once.',
        'W: Research suggests that better lighting reduced crime, but it also changed social life. Shops stayed open later, and theatres and restaurants multiplied.',
        'W: Today, cities are replacing old lamps with LED lights, which use about half the energy. However, astronomers and biologists warn that too much light at night harms wildlife, especially migrating birds and insects.',
      ],
      qs: [
        ['What were householders in fifteenth-century London told to do?', 'Hang a lantern outside their doors', 'Stay indoors after sunset', 'Pay a tax for lighting', '"ordered to hang a lantern outside their doors".'],
        ['What was a disadvantage of oil lamps?', 'They needed daily cleaning and refilling.', 'They were too dim to be useful.', 'They often exploded.', '"had to be cleaned and refilled every day".'],
        ['How did people react to the first gas-lit street?', 'They came from far away to see it.', 'They refused to walk there.', 'They demanded it be removed.', '"People travelled long distances simply to see it".'],
        ['How was electric lighting first installed?', 'On very tall towers', 'Inside shop windows', 'On ropes across the street', '"mounted on very tall towers".'],
        ['What concern do scientists have about modern lighting?', 'It harms wildlife.', 'It costs too much.', 'It increases crime.', '"too much light at night harms wildlife".'],
      ],
      fill: [
        ['The first public lighting system was created in ____.', ['Paris'], '"created in Paris in sixteen sixty-seven".'],
        ['Oil lamps were looked after by a ____.', ['lamplighter'], '"by a lamplighter".'],
        ['Some people feared that gas would cause ____.', ['explosions'], '"others feared explosions".'],
        ['Better lighting meant that ____ stayed open later.', ['shops'], '"Shops stayed open later".'],
        ['LED lights use about ____ the energy of old lamps.', ['half'], '"use about half the energy".'],
      ],
    },
  ],
  // Bài đọc 1 – The Invention of Paper (nối tiếp)
  r1: {
    text: 'Wood-pulp paper had a serious weakness, however. The chemicals used in its manufacture left it slightly acidic, and over the decades this acid slowly attacked the fibres. Books printed in the late nineteenth century often turn brown and become so brittle that a page may break when it is turned. Libraries have spent enormous sums treating or copying such volumes, and since the 1980s most publishers have used acid-free paper, which is expected to last for several hundred years.\n\nIn the 1970s many commentators predicted that computers would create a "paperless office". In fact, the opposite happened at first: the arrival of cheap printers meant that offices used more paper than ever, and world consumption continued to rise until the early years of this century. Only recently has the use of paper for printing and writing begun to fall in wealthy countries. Meanwhile, demand for cardboard packaging has grown rapidly because of online shopping, so the paper industry as a whole is far from disappearing. About sixty percent of paper in Europe is now recycled.',
    qs: [
      ['T', 'Paper made from wood pulp in the nineteenth century tends to become fragile.', 'Trở nên giòn, dễ gãy.'],
      ['F', 'The introduction of computers immediately reduced the amount of paper used in offices.', 'Ban đầu văn phòng dùng NHIỀU giấy hơn.'],
      ['NG', 'Acid-free paper is more expensive to produce than ordinary paper.', 'Bài không nói về giá.'],
      ['Why has demand for cardboard increased?', 'Because of online shopping', 'Because books are larger', 'Because offices print more', 'Because of new recycling laws', '"because of online shopping".'],
    ],
    fill: [
      ['Since the 1980s most publishers have used ____ paper.', ['acid-free'], '"acid-free paper".'],
    ],
  },
  reading: [
    {
      title: 'The Return of the Wolf',
      text: 'When the last wolves in Yellowstone National Park in the United States were shot in 1926, few people regretted their disappearance. Wolves were regarded as dangerous pests that killed farm animals and competed with hunters, and the government itself paid for their destruction. For the next seventy years the park had no wolves at all.\n\nBiologists gradually noticed that something was wrong. Without their main predator, the elk, a large species of deer, multiplied until there were nearly twenty thousand of them in the northern part of the park. They fed heavily on young willow and aspen trees, especially along the rivers, where they could stand comfortably for hours. Almost no new trees survived, and the river banks became bare.\n\nIn 1995 and 1996, after years of argument, thirty-one wolves captured in Canada were released in Yellowstone. The effects were studied intensely. As expected, the wolves hunted elk, and the elk population eventually fell by more than half. But some researchers argued that a change in behaviour was equally important. The elk seemed to avoid places such as narrow valleys, where they could easily be trapped, and in those places the willows and aspens began to recover.\n\nThe returning trees brought other changes. Beavers, which need willow for food and for building their dams, increased from a single colony to nine. Their ponds created homes for fish, frogs and ducks. Songbirds nested in the new growth. Wolves also killed many coyotes, a smaller predator, which allowed the numbers of mice and rabbits to rise and so provided more food for foxes and eagles. Scientists call such a chain of effects, running from the top of the food web to the bottom, a "trophic cascade".\n\nThe story became famous, and a popular film even claimed that the wolves had changed the course of the rivers. More recent research is cautious. Some of the recovery, critics point out, happened in years of high rainfall, and hunting by humans outside the park and the growing number of bears also reduced the elk. In some areas the willows have not returned at all, apparently because the streams cut deep channels during the decades without beavers and the water now lies too far below the roots.\n\nNevertheless, most ecologists agree that the wolves have made the park\'s ecosystem richer. The lesson is perhaps that removing a species is much easier than repairing the damage afterwards. Farmers near the park remain unhappy, since wolves that wander outside its borders sometimes kill cattle and sheep, and a compensation scheme pays them for proven losses.',
      qs: [
        ['T', 'The government supported the killing of wolves in the early twentieth century.', 'Đoạn 1: chính phủ trả tiền cho việc tiêu diệt sói.'],
        ['F', 'After 1926 the number of elk in the park declined.', 'Đoạn 2: nai sừng tấm tăng lên gần hai mươi nghìn con.'],
        ['T', 'The wolves released in the 1990s came from another country.', 'Đoạn 3: bắt ở Canada.'],
        ['NG', 'The released wolves were all young animals.', 'Bài không nói về tuổi của sói.'],
        ['T', 'The number of beaver colonies grew after wolves returned.', 'Đoạn 4: từ một đàn lên chín đàn.'],
        ['F', 'All scientists accept that wolves alone caused the recovery of the trees.', 'Đoạn 5: nghiên cứu gần đây thận trọng, nêu các nguyên nhân khác.'],
        ['Why did elk damage trees mainly along rivers?', 'They could stay there easily for long periods.', 'The trees there were the tallest.', 'Wolves never went near water.', 'The grass elsewhere was poisonous.', 'Đoạn 2: đứng thoải mái hàng giờ.'],
        ['How did the behaviour of elk change after wolves returned?', 'They avoided places where they could be trapped.', 'They moved out of the park completely.', 'They began to eat different plants.', 'They formed much larger herds.', 'Đoạn 3: tránh các thung lũng hẹp.'],
        ['Why did the fall in coyotes help foxes and eagles?', 'There were more small animals to eat.', 'Coyotes had hunted foxes and eagles.', 'Wolves shared their food.', 'Trees provided more nests.', 'Đoạn 4: chuột và thỏ tăng lên.'],
        ['Why have willows failed to return in some areas?', 'The water is now too deep below their roots.', 'Elk still eat all of them.', 'Beavers destroy them.', 'The soil has been removed.', 'Đoạn 5: suối khoét sâu, nước nằm quá xa rễ.'],
      ],
      fill: [
        ['A chain of effects from the top of the food web to the bottom is a "trophic ____".', ['cascade'], 'Đoạn 4: "trophic cascade".'],
        ['Beavers need willow for food and for building their ____.', ['dams'], 'Đoạn 4: "building their dams".'],
        ['A ____ scheme pays farmers for proven losses.', ['compensation'], 'Đoạn cuối: "a compensation scheme".'],
      ],
    },
    {
      title: 'Why Do We Procrastinate?',
      text: 'Almost everyone puts off unpleasant tasks from time to time, but for perhaps one adult in five, delay is a regular habit that damages their work, their finances and even their health. Psychologists call the behaviour procrastination, and they define it carefully: it is not simply postponing something, which may be sensible, but delaying an intended action even though we expect to be worse off as a result.\n\nIt was once assumed that procrastinators were merely lazy or bad at organising their time. Current research suggests instead that the problem lies in managing emotions. A task such as writing a report or filling in a tax form produces feelings of boredom, anxiety or self-doubt. Turning to something more pleasant, like checking messages, removes the bad feeling at once. The relief acts as a reward, which makes it more likely that we will do the same thing next time.\n\nThe cost arrives later. In a well-known study at an American university, Dianne Tice and Roy Baumeister followed students through a term. Early on, the procrastinators reported lower stress and fewer illnesses than the others. By the end of the term the pattern had reversed: they were more stressed, were ill more often and received lower marks.\n\nPart of the explanation lies in how we think about time. People tend to value a small pleasure now more highly than a larger benefit in the future, a tendency economists call "present bias". Brain-imaging experiments suggest that when we imagine ourselves in the distant future, the brain responds almost as if we were thinking about a stranger. It is easy to leave a difficult job to that stranger.\n\nWhat can be done? Strict deadlines help: in one experiment, students who were given evenly spaced deadlines for three essays performed better than those allowed to hand everything in at the end. Breaking a large task into very small steps makes starting less frightening. Removing temptations, for example by leaving the phone in another room, works better than relying on willpower.\n\nPerhaps the most surprising finding concerns self-criticism. A Canadian study of students who had delayed their revision found that those who forgave themselves procrastinated less before the next examination. Blaming oneself harshly increases the negative feelings that caused the delay in the first place. Procrastination has existed for as long as written records. An Egyptian letter of 1400 BC already complains about it, and the Greek poet Hesiod warned his brother not to put work off until tomorrow.',
      qs: [
        ['F', 'According to psychologists, any postponement of a task counts as procrastination.', 'Đoạn 1: chỉ khi trì hoãn dù biết sẽ bất lợi.'],
        ['T', 'About twenty percent of adults procrastinate regularly.', 'Đoạn 1: "one adult in five".'],
        ['F', 'Researchers now believe that poor time management is the main cause.', 'Đoạn 2: vấn đề nằm ở quản lý cảm xúc.'],
        ['T', 'At the start of term, procrastinating students felt less stressed than other students.', 'Đoạn 3: đầu kỳ ít căng thẳng hơn.'],
        ['NG', 'Tice and Baumeister were themselves procrastinators as students.', 'Bài không đề cập.'],
        ['T', 'Students with regularly spaced deadlines did better than those with one final deadline.', 'Đoạn 5: hạn chia đều giúp làm tốt hơn.'],
        ['NG', 'Women forgive themselves more easily than men.', 'Bài không so sánh nam nữ.'],
        ['Why does switching to a pleasant activity encourage future procrastination?', 'The relief works as a reward.', 'It improves concentration.', 'It makes the task easier later.', 'It impresses other people.', 'Đoạn 2: cảm giác nhẹ nhõm là phần thưởng.'],
        ['What do brain-imaging experiments suggest?', 'We think of our future selves almost as strangers.', 'Procrastinators have smaller brains.', 'Stress improves memory.', 'Deadlines activate fear.', 'Đoạn 4: não phản ứng như nghĩ về người lạ.'],
        ['What did the Canadian study find?', 'Self-forgiveness reduced later procrastination.', 'Punishment improved revision.', 'Students never changed their habits.', 'Longer revision led to lower marks.', 'Đoạn 6: tha thứ cho bản thân giúp ít trì hoãn hơn.'],
      ],
      fill: [
        ['Valuing a small pleasure now over a larger future benefit is called "present ____".', ['bias'], 'Đoạn 4: "present bias".'],
        ['Removing temptations works better than relying on ____.', ['willpower'], 'Đoạn 5: "relying on willpower".'],
        ['Breaking a task into small ____ makes starting less frightening.', ['steps'], 'Đoạn 5: "very small steps".'],
        ['The Greek poet ____ warned his brother not to delay work.', ['Hesiod'], 'Đoạn cuối: "the Greek poet Hesiod".'],
      ],
    },
  ],
};
