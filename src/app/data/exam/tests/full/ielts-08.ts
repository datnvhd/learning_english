/** IELTS đề 8 – phần bổ sung để đủ 40 câu nghe + 40 câu đọc (xem ghi chú "ĐỀ ĐẦY ĐỦ" trong helpers.ts) */
import { RawIeltsFull } from '../helpers';

export const FULL: RawIeltsFull = {
  // Section 1 – Hiring a car (nối tiếp)
  l1: {
    lines: [
      'W: Before you go, could I check a few details? Is there a limit on how far I can drive?',
      'M: You can drive up to two hundred miles a day without paying extra. After that it is twenty pence a mile.',
      'W: That should be plenty. And what about fuel?',
      'M: The car will have a full tank when you collect it, and we ask you to return it full. There is a petrol station just outside the airport.',
      'W: My husband may drive as well. Is that allowed?',
      'M: Yes, a second driver costs six pounds a day, and he must show his licence too.',
      'W: Fine. And if the car breaks down?',
      'M: Our emergency number is on the key ring, and help is available twenty-four hours a day. Oh, and the desk closes at nine in the evening, so please return the car before then on Thursday.',
    ],
    qs: [
      ['How should the car be returned?', 'With a full tank', 'With an empty tank', 'Washed and cleaned', '"we ask you to return it full".'],
      ['Where is the emergency number?', 'On the key ring', 'On the contract', 'Inside the glove box', '"Our emergency number is on the key ring".'],
    ],
    fill: [
      ['Free mileage: up to ____ miles a day', ['200', 'two hundred'], 'Tối đa hai trăm dặm một ngày.'],
      ['A second driver costs ____ pounds a day.', ['6', 'six'], 'Sáu bảng một ngày.'],
      ['The desk closes at ____ in the evening.', ['9', 'nine'], 'Quầy đóng lúc chín giờ tối.'],
    ],
  },
  // Section 4 – Lecture on birds in cities (nối tiếp)
  l2: {
    lines: [
      'W: Let me give you one or two striking examples of adaptation. In Japan, crows have learned to drop hard nuts onto pedestrian crossings. Cars crack the shells, and the birds wait for the red light before collecting the food.',
      'W: In London, peregrine falcons, which normally nest on cliffs, now breed on tall buildings such as power stations and cathedrals, and hunt pigeons at night by the light of street lamps.',
      'W: City birds also seem to be bolder. Studies measuring how close a person can walk before a bird flies away show that urban birds allow a much shorter distance than rural birds of the same species.',
      'W: Not every species can adapt. Birds that eat only insects, or that nest on the ground, have declined sharply in towns.',
      'W: Your task this week is to count the birds in a local park for thirty minutes and record the species you see.',
    ],
    qs: [
      ['How do crows in Japan open nuts?', 'They let cars drive over them.', 'They drop them from tall buildings.', 'They use stones.', '"Cars crack the shells".'],
      ['Where do peregrine falcons nest in London?', 'On tall buildings', 'In parks', 'Under bridges', '"now breed on tall buildings".'],
      ['Which birds have declined in towns?', 'Those that nest on the ground', 'Those that eat almost anything', 'Those that sing at night', '"Birds that eat only insects, or that nest on the ground, have declined".'],
    ],
    fill: [
      ['Falcons hunt ____ at night by the light of street lamps.', ['pigeons'], '"hunt pigeons at night".'],
      ['Students must count birds in a park for ____ minutes.', ['30', 'thirty'], 'Đếm chim trong ba mươi phút.'],
    ],
  },
  listening: [
    {
      title: 'Section 2 – A radio report on the Saturday market',
      lines: [
        'M: This is Radio Kestrel with news about the changes to the Saturday market in Bridge Square.',
        'M: The market has been held in the square for more than two hundred years, but from next month it will move while the square is being repaved.',
        'M: For the next six months, the stalls will be set up in the car park behind the town hall. The council says there will be room for all fifty-five traders.',
        'M: Opening hours will stay the same, from eight in the morning until three in the afternoon.',
        'M: Because the car park will be full of stalls, shoppers are asked to use the multi-storey car park on North Street, where parking will be free on Saturdays until the work is finished.',
        'M: There is good news for food lovers. A new section with ten street-food stalls will open at the same time, selling dishes from countries including Thailand, Mexico and Lebanon.',
        'M: The fish stall run by the Dawson family, which has traded at the market for four generations, will have a new refrigerated counter.',
        'M: The council is also introducing a ban on plastic bags, so remember to bring your own.',
        'M: When the square reopens, it will have new trees, more benches and a small fountain. An exhibition of the plans can be seen in the library until the end of this month.',
      ],
      qs: [
        ['Why is the market moving?', 'The square is being repaved.', 'The traders asked for more space.', 'The town hall is being rebuilt.', '"while the square is being repaved".'],
        ['Where will the market be held temporarily?', 'In the car park behind the town hall', 'On North Street', 'In the library', '"in the car park behind the town hall".'],
        ['What does the report say about parking on North Street?', 'It will be free on Saturdays.', 'It will be closed.', 'It will cost more.', '"parking will be free on Saturdays".'],
        ['What will the Dawson family\'s stall have?', 'A new refrigerated counter', 'A larger space', 'A new owner', '"will have a new refrigerated counter".'],
        ['Where can people see the plans for the square?', 'In the library', 'In the town hall', 'On the market website', '"An exhibition of the plans can be seen in the library".'],
      ],
      fill: [
        ['The market will be in its temporary home for ____ months.', ['6', 'six'], 'Sáu tháng.'],
        ['Number of traders: ____', ['55', 'fifty-five', 'fifty five'], 'Năm mươi lăm tiểu thương.'],
        ['The market closes at ____ in the afternoon.', ['3', 'three'], 'Đóng lúc ba giờ chiều.'],
        ['There will be ____ new street-food stalls.', ['10', 'ten'], 'Mười quầy đồ ăn đường phố.'],
        ['The council is banning plastic ____.', ['bags'], '"a ban on plastic bags".'],
      ],
    },
    {
      title: 'Section 3 – Choosing a topic for a business project',
      lines: [
        "W: Hi, Dan. Have you had any ideas for our business studies project? We have to analyse a real local company.",
        'M: I was thinking of the bicycle shop on Park Road. The owner is a friend of my father, so he would probably talk to us.',
        "W: That would be useful. What's interesting about it?",
        'M: Two years ago it nearly closed because people were buying bikes online. Then the owner started offering repairs and lessons, and now it is doing well.',
        'W: So the project could be about how a small shop competes with internet retailers. I like that.',
        'M: What information would we need?',
        'W: Sales figures, if he is willing to share them. And we should interview some customers. Maybe twenty?',
        'M: Twenty is a lot for the two of us. Let us say fifteen. We could stand outside the shop on a Saturday.',
        "W: OK. We also need to compare it with a competitor. There's a big sports store in the shopping centre.",
        "M: Good idea. I'll visit it and note the prices.",
        'W: And I will write the questions for the interviews. The project plan has to be approved by Mr. Ellis first.',
        'M: When is his deadline for the plan?',
        'W: The twenty-fifth of October. The final report is not due until January.',
      ],
      qs: [
        ['Why does the man suggest the bicycle shop?', 'The owner knows his father.', 'He works there.', 'It is the largest shop in town.', '"The owner is a friend of my father".'],
        ['Why did the shop nearly close?', 'Customers were buying online.', 'The rent increased.', 'The owner was ill.', '"people were buying bikes online".'],
        ['How did the owner save the business?', 'By adding repairs and lessons', 'By lowering prices', 'By opening a website', '"started offering repairs and lessons".'],
        ['What will the man do?', 'Visit a competitor and note prices', 'Write the interview questions', 'Speak to Mr. Ellis', '"I\'ll visit it and note the prices".'],
        ['Who must approve the project plan?', 'Mr. Ellis', 'The shop owner', 'The man\'s father', '"The project plan has to be approved by Mr. Ellis".'],
      ],
      fill: [
        ['The bicycle shop is on ____ Road.', ['Park'], '"the bicycle shop on Park Road".'],
        ['They will interview ____ customers.', ['15', 'fifteen'], 'Mười lăm khách hàng.'],
        ['The interviews will take place on a ____.', ['Saturday'], '"outside the shop on a Saturday".'],
        ['The plan is due on the twenty-fifth of ____.', ['October'], 'Ngày 25 tháng Mười.'],
        ['The final report is due in ____.', ['January'], 'Báo cáo cuối kỳ nộp tháng Một.'],
      ],
    },
  ],
  // Bài đọc 1 – Guiding Lights (nối tiếp)
  r1: {
    text: 'The life of a lighthouse keeper was governed by routine. Every evening the lamp had to be lit and the clockwork machinery that turned the lens wound up by hand, in some towers as often as every half hour through the night. By day the glass was polished and the brass cleaned. At stations built on rocks out at sea, three keepers usually lived together for weeks at a time until a boat could relieve them, and bad weather often delayed the change. The rule of three was introduced in Britain after an incident in 1801 at the Smalls lighthouse off the coast of Wales, where one of two keepers died and his companion, afraid of being accused of murder, kept the body for months until help arrived.\n\nFog was a danger that no lamp could overcome, and from the nineteenth century lighthouses were equipped with bells and later with powerful horns driven by compressed air. Although their original purpose has faded, lighthouses still fascinate the public. Societies of enthusiasts raise money to restore them, and several countries issue special passports in which visitors collect a stamp from each tower they climb.',
    qs: [
      ['T', 'In some lighthouses, machinery had to be wound up many times each night.', 'Có nơi phải lên dây mỗi nửa giờ.'],
      ['F', 'After 1801, British rock lighthouses were staffed by two keepers.', 'Sau sự cố, quy định ba người.'],
      ['NG', 'The keeper at the Smalls lighthouse was later put on trial.', 'Bài không nói.'],
      ['How did lighthouses warn ships in fog?', 'With bells and horns', 'With brighter lamps', 'With coloured flags', 'With radio messages', '"equipped with bells and later with powerful horns".'],
    ],
    fill: [
      ['Visitors in some countries collect a ____ from each lighthouse they climb.', ['stamp'], '"collect a stamp from each tower".'],
    ],
  },
  reading: [
    {
      title: 'The Green Revolution',
      text: 'In the 1960s many experts believed that large parts of the world were heading for famine. Populations in Asia and Latin America were growing faster than food production, and a best-selling book of 1968 predicted that hundreds of millions of people would starve within a decade. The disaster did not occur, largely because of a transformation in farming that became known as the Green Revolution.\n\nIts most celebrated figure was the American scientist Norman Borlaug, who went to Mexico in 1944 to work on wheat. Traditional wheat had a serious weakness: when given fertiliser, it grew tall and produced heavy heads of grain, and the thin stems then collapsed. Borlaug crossed Mexican varieties with a short Japanese wheat known as Norin 10. The resulting "semi-dwarf" plants had short, strong stems that could carry far more grain. He also speeded up his work by growing two generations a year, one in the lowlands in winter and one in the highlands in summer, a method that had the unexpected benefit of producing plants suited to a wide range of conditions.\n\nBy 1963 Mexico, which had imported half its wheat, was exporting it. The new seeds were then sent to India and Pakistan, both of which faced severe shortages. Wheat harvests in the two countries nearly doubled between 1965 and 1970. A similar programme for rice at an institute in the Philippines produced a variety called IR8, which could yield up to ten times as much as traditional rice. Borlaug was awarded the Nobel Peace Prize in 1970.\n\nThe new varieties were not miracle plants. They produced high yields only when supplied with plenty of fertiliser and water, and when protected by chemical pesticides. This is the basis of the main criticisms of the Green Revolution. Heavy use of fertiliser has polluted rivers, and pumping water for irrigation has lowered the level of underground supplies in parts of India at an alarming rate. Wealthier farmers, who could afford the seeds and chemicals, benefited most, and some poor families lost their land. Thousands of local varieties were abandoned as farmers switched to a few modern ones.\n\nDefenders reply that without the higher yields, vast areas of forest would have been cleared to grow the same amount of food. Borlaug himself estimated that the increase spared an area of land larger than Brazil.\n\nThe Green Revolution largely passed Africa by, partly because the continent\'s main crops are not wheat and rice, and partly because of poor roads and little irrigation. Scientists today are trying to develop crops that need less water and fertiliser, hoping to raise harvests without repeating the environmental mistakes of the past.',
      qs: [
        ['T', 'In the 1960s, widespread famine was expected in parts of the world.', 'Đoạn 1: nhiều chuyên gia dự đoán nạn đói.'],
        ['F', 'Traditional wheat fell over because it received too little fertiliser.', 'Đoạn 2: đổ khi ĐƯỢC bón phân vì bông nặng.'],
        ['T', 'Borlaug grew two crops of wheat each year in different places.', 'Đoạn 2: vùng thấp mùa đông, vùng cao mùa hè.'],
        ['F', 'Before Borlaug\'s work, Mexico produced more wheat than it needed.', 'Đoạn 3: Mexico phải nhập một nửa.'],
        ['NG', 'IR8 rice tasted better than traditional rice.', 'Bài không nói về hương vị.'],
        ['T', 'The new varieties needed large amounts of water.', 'Đoạn 4: cần nhiều phân bón và nước.'],
        ['What was the advantage of semi-dwarf wheat?', 'Its short stems could support more grain.', 'It needed no fertiliser.', 'It grew in salt water.', 'It ripened in a month.', 'Đoạn 2: thân ngắn, khỏe.'],
        ['Which group gained most from the Green Revolution?', 'Farmers who could afford seeds and chemicals', 'Families without land', 'Fishermen', 'Forest workers', 'Đoạn 4: nông dân khá giả.'],
        ['What argument do defenders make?', 'Higher yields saved forests from being cleared.', 'Pesticides are harmless.', 'Local varieties were useless.', 'Irrigation raised water levels.', 'Đoạn 5: nếu không, rừng sẽ bị phá để trồng trọt.'],
        ['Why did the Green Revolution have little effect in Africa?', 'Its main crops and conditions were different.', 'Farmers refused the seeds.', 'There was no famine there.', 'Borlaug never visited.', 'Đoạn cuối: cây trồng chính khác, đường sá kém, ít thủy lợi.'],
      ],
      fill: [
        ['Borlaug crossed Mexican wheat with a short Japanese variety called ____ 10.', ['Norin'], 'Đoạn 2: "Norin 10".'],
        ['The rice variety IR8 was developed in the ____.', ['Philippines'], 'Đoạn 3: "an institute in the Philippines".'],
        ['Heavy use of fertiliser has polluted ____.', ['rivers'], 'Đoạn 4: "has polluted rivers".'],
      ],
    },
    {
      title: 'The Science of First Impressions',
      text: 'We are often told not to judge a book by its cover, yet research shows that people form opinions of strangers with astonishing speed. In a well-known experiment at Princeton University, Janine Willis and Alexander Todorov showed volunteers photographs of unfamiliar faces for just one tenth of a second and asked them to rate qualities such as trustworthiness and competence. The ratings were almost identical to those made by people who could look for as long as they wished. More time made the judges more confident, but it did not change their opinions.\n\nSuch judgements have real consequences. In a further study, Todorov asked volunteers to look at pairs of photographs of candidates in elections for the United States Senate and to say, purely from the faces, which person looked more competent. The candidate chosen in this way had won the actual election in about seventy percent of cases. Other research suggests that people with faces judged trustworthy receive lighter sentences in court and that tall job applicants are offered higher salaries.\n\nThe difficulty is that first impressions of character are not very accurate. When researchers compare facial judgements with measured behaviour, they generally find only a weak connection or none at all. People agree with one another about who looks honest, but they are not good at identifying who is honest.\n\nWhy, then, are first impressions so persistent? One reason is the "halo effect", described by the psychologist Edward Thorndike in 1920: a single positive quality, such as good looks, leads us to assume other positive qualities. Another is that we notice evidence that supports our first opinion and overlook evidence against it. If we decide that a new colleague is unfriendly, we remember the morning she did not say hello and forget the day she brought cakes.\n\nFirst impressions are not formed from faces alone. In studies of teaching, students who watched silent video clips of a lecturer lasting only thirty seconds gave ratings very similar to those of students who had attended the whole course. A firm handshake, eye contact and, in telephone interviews, the tone of voice all carry weight.\n\nCan a bad first impression be corrected? It can, but it takes effort. Experiments indicate that several positive meetings are needed to cancel one negative one, and that a negative impression of someone\'s honesty is especially hard to reverse.\n\nSome organisations have tried to limit the influence of snap judgements. Many orchestras now ask musicians to audition behind a screen, a change that sharply increased the proportion of women hired. Some employers remove names and photographs from applications before they are read.',
      qs: [
        ['T', 'In the Princeton experiment, volunteers saw each face for a fraction of a second.', 'Đoạn 1: một phần mười giây.'],
        ['F', 'Giving the judges more time changed their ratings considerably.', 'Đoạn 1: chỉ tự tin hơn, ý kiến không đổi.'],
        ['T', 'Judgements of competence from faces often matched election results.', 'Đoạn 2: khoảng bảy mươi phần trăm.'],
        ['NG', 'Todorov\'s volunteers recognised some of the candidates.', 'Bài không nói.'],
        ['F', 'Research shows that people can reliably tell from a face who is honest.', 'Đoạn 3: không giỏi nhận ra ai thật sự trung thực.'],
        ['T', 'Short silent clips produced ratings similar to those given after a full course.', 'Đoạn 5: clip ba mươi giây.'],
        ['NG', 'Students prefer lecturers who smile frequently.', 'Bài không đề cập.'],
        ['What is the "halo effect"?', 'One good quality makes us assume others.', 'People look better in bright light.', 'First impressions fade with time.', 'Confident people are more honest.', 'Đoạn 4: một phẩm chất tốt khiến ta suy ra các phẩm chất khác.'],
        ['What does the example of the new colleague illustrate?', 'We remember evidence that fits our first opinion.', 'Colleagues should bring cakes.', 'Unfriendly people rarely change.', 'First impressions are usually right.', 'Đoạn 4: chú ý bằng chứng ủng hộ ý kiến ban đầu.'],
        ['What was the result of auditions held behind a screen?', 'More women were hired.', 'Fewer musicians applied.', 'The quality of orchestras fell.', 'Auditions became longer.', 'Đoạn cuối: tỉ lệ nữ được tuyển tăng mạnh.'],
      ],
      fill: [
        ['Volunteers rated qualities such as trustworthiness and ____.', ['competence'], 'Đoạn 1: "trustworthiness and competence".'],
        ['The halo effect was described by Edward ____.', ['Thorndike'], 'Đoạn 4: "Edward Thorndike".'],
        ['In telephone interviews, the ____ of voice carries weight.', ['tone'], 'Đoạn 5: "the tone of voice".'],
        ['Some employers remove names and ____ from applications.', ['photographs'], 'Đoạn cuối: "names and photographs".'],
      ],
    },
  ],
};
