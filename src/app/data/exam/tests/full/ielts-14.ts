/** IELTS đề 14 – phần bổ sung để đủ 40 câu nghe + 40 câu đọc (xem ghi chú "ĐỀ ĐẦY ĐỦ" trong helpers.ts) */
import { RawIeltsFull } from '../helpers';

export const FULL: RawIeltsFull = {
  // Section 1 – At a bicycle repair shop (nối tiếp)
  l1: {
    lines: [
      'W: Thank you. While the bike is with you, could you also check the front light? It keeps going off.',
      'M: Of course. It may just need a new battery, which is two pounds.',
      'W: And do you sell helmets? Mine is quite old.',
      'M: We do. Prices start at twenty-five pounds, and if you buy one this month, you get a free bell.',
      'W: Good. Is there anywhere I can leave the bike if I arrive before you open?',
      'M: We open at half past eight. If you come earlier, you can lock it to the rack beside the door and put the key through the letter box in an envelope with your name on it.',
      'W: That is helpful. Do you give any guarantee on repairs?',
      'M: Yes, all our work is guaranteed for six months.',
    ],
    qs: [
      ['What problem does the woman mention with the front light?', 'It keeps going off.', 'It is too bright.', 'It has been stolen.', '"It keeps going off".'],
      ['What should she do if she arrives before the shop opens?', 'Lock the bike to the rack and post the key', 'Leave the bike with a neighbour', 'Wait in the cafe', '"lock it to the rack beside the door and put the key through the letter box".'],
    ],
    fill: [
      ['Helmets start at ____ pounds.', ['25', 'twenty-five', 'twenty five'], 'Từ hai mươi lăm bảng.'],
      ['Customers who buy a helmet this month get a free ____.', ['bell'], '"you get a free bell".'],
      ['Repairs are guaranteed for ____ months.', ['6', 'six'], 'Bảo hành sáu tháng.'],
    ],
  },
  // Section 4 – Lecture on the history of plastic (nối tiếp)
  l2: {
    lines: [
      'M: Let me give you some figures about what happens to plastic waste. Roughly eight million tonnes enter the oceans every year, most of it carried by rivers.',
      'M: In the sea, sunlight and waves break plastic into tiny fragments called microplastics. These have been found in fish, in sea salt and even in rain falling on remote mountains.',
      'M: Recycling is harder than it sounds, because there are many types of plastic, and they cannot be melted together. A single food package may contain several layers of different kinds.',
      'M: Some countries have had success with deposit schemes. In Norway, where customers pay a small deposit on each bottle, ninety-seven percent of plastic bottles are returned.',
      'M: For your seminar, choose one everyday plastic object and find out whether it can be recycled in this city.',
    ],
    qs: [
      ['How does most plastic reach the oceans?', 'It is carried by rivers.', 'It is thrown from ships.', 'It is blown by wind.', '"most of it carried by rivers".'],
      ['Why is recycling plastic difficult?', 'Different types cannot be melted together.', 'It is too heavy to transport.', 'People refuse to sort waste.', '"they cannot be melted together".'],
      ['What must students do for the seminar?', 'Investigate one plastic object', 'Visit a recycling plant', 'Write about Norway', '"choose one everyday plastic object and find out whether it can be recycled".'],
    ],
    fill: [
      ['Tiny fragments of plastic are called ____.', ['microplastics'], '"tiny fragments called microplastics".'],
      ['In Norway, ____ percent of plastic bottles are returned.', ['97', 'ninety-seven', 'ninety seven'], 'Chín mươi bảy phần trăm.'],
    ],
  },
  listening: [
    {
      title: 'Section 2 – An introduction to a city walking festival',
      lines: [
        'W: Good morning, and thank you for coming to hear about this year\'s Hartley Walking Festival, which runs from the tenth to the eighteenth of May.',
        'W: The festival is now in its seventh year. Last year more than three thousand people took part.',
        'W: There are forty-two guided walks in the programme. They range from a one-mile stroll around the old town to a twenty-mile hike along the coast.',
        'W: Each walk is graded by colour. Green walks are easy and suitable for families. Blue walks include some hills. Red walks are for experienced walkers only, and you will need proper boots.',
        'W: Most walks are free, but you must book in advance, because numbers are limited to twenty per walk. Booking opens online next Monday.',
        'W: New this year is a series of night walks to listen for owls and bats. These cost five pounds, and torches are provided.',
        'W: We also have two walks designed for wheelchair users along the canal path.',
        'W: Dogs are welcome on most walks, except those that cross farmland with sheep.',
        'W: On the final Sunday, there will be a picnic in Castle Meadow with live music, starting at one o\'clock.',
        'W: Finally, we still need volunteers to walk at the back of each group and make sure nobody is left behind.',
      ],
      qs: [
        ['Which walks are suitable for families?', 'Green walks', 'Blue walks', 'Red walks', '"Green walks are easy and suitable for families".'],
        ['Why is it necessary to book in advance?', 'Numbers on each walk are limited.', 'Tickets are expensive.', 'The routes are secret.', '"numbers are limited to twenty per walk".'],
        ['What is provided on the night walks?', 'Torches', 'Boots', 'Hot drinks', '"torches are provided".'],
        ['On which walks are dogs not allowed?', 'Walks across farmland with sheep', 'Walks in the old town', 'Night walks', '"except those that cross farmland with sheep".'],
        ['What are volunteers needed for?', 'Walking at the back of each group', 'Selling maps', 'Driving a minibus', '"walk at the back of each group".'],
      ],
      fill: [
        ['The festival is in its ____ year.', ['seventh', '7th'], 'Năm thứ bảy.'],
        ['There are ____ guided walks.', ['42', 'forty-two', 'forty two'], 'Bốn mươi hai chuyến đi bộ.'],
        ['The longest walk is ____ miles.', ['20', 'twenty'], 'Hai mươi dặm.'],
        ['Night walks cost ____ pounds.', ['5', 'five'], 'Năm bảng.'],
        ['The final picnic is in Castle ____.', ['Meadow'], '"a picnic in Castle Meadow".'],
      ],
    },
    {
      title: 'Section 3 – Students discuss feedback on a design project',
      lines: [
        'M: Have you seen the feedback on our design for the children\'s playground, Rosa?',
        'W: Yes, I read it this morning. I thought it was fair. The lecturer liked the overall layout.',
        'M: She said the climbing area was the strongest part. That was your idea.',
        'W: Thanks. But she criticised the materials. We chose steel for the slides, and she pointed out that it gets too hot in summer.',
        'M: I had not thought of that. What could we use instead?',
        'W: Recycled plastic, perhaps. It is safer and cheaper to maintain.',
        'M: She also mentioned that we forgot seating for parents.',
        'W: Yes, that was a real mistake. We need benches, and they should face the play area and be in the shade.',
        'M: We could put them under the two trees that are already on the site.',
        'W: Good idea. And the budget? She said we were eight percent over.',
        'M: If we change the materials and remove the water fountain, we should be within the limit.',
        'W: I would rather keep the fountain. Children love water. Could we make the sandpit smaller instead?',
        'M: All right. We have ten days to submit the revised design. I will redraw the plan if you rewrite the costs.',
        'W: Agreed. Let us meet in the design studio on Thursday afternoon.',
      ],
      qs: [
        ['Which part of the design did the lecturer like most?', 'The climbing area', 'The slides', 'The sandpit', '"the climbing area was the strongest part".'],
        ['Why was steel criticised?', 'It becomes too hot in summer.', 'It is too expensive.', 'It rusts quickly.', '"it gets too hot in summer".'],
        ['What did the students forget?', 'Seating for parents', 'A fence', 'Lighting', '"we forgot seating for parents".'],
        ['What does the woman suggest to reduce the cost?', 'Making the sandpit smaller', 'Removing the fountain', 'Using fewer trees', '"Could we make the sandpit smaller instead?"'],
        ['What will the man do?', 'Redraw the plan', 'Rewrite the costs', 'Speak to the lecturer', '"I will redraw the plan if you rewrite the costs".'],
      ],
      fill: [
        ['The slides could be made of recycled ____.', ['plastic'], '"Recycled plastic, perhaps".'],
        ['Benches should be placed under the two ____ on the site.', ['trees'], '"under the two trees".'],
        ['The design was ____ percent over budget.', ['8', 'eight'], 'Vượt tám phần trăm.'],
        ['They have ____ days to submit the revised design.', ['10', 'ten'], 'Mười ngày.'],
        ['They will meet on ____ afternoon.', ['Thursday'], 'Chiều thứ Năm.'],
      ],
    },
  ],
  // Bài đọc 1 – Why Cities Are Hotter (nối tiếp)
  r1: {
    text: 'Heat is not evenly spread within a city. Researchers who attached thermometers to cars and drove them across American cities on summer afternoons found differences of up to ten degrees between neighbourhoods only a few kilometres apart. The hottest districts were typically those with the lowest incomes, where trees are few and large areas are covered by car parks and warehouses. In several cities these were the same areas that banks had refused to invest in during the 1930s, a policy whose effects can still be measured in the shortage of parks and street trees almost a century later.\n\nCity authorities have begun to respond. Paris has promised to plant one hundred and seventy thousand trees and is turning school playgrounds, once covered in asphalt, into shaded "oasis" yards open to local residents during heat waves. Athens and several other cities have appointed a chief heat officer to coordinate their plans. In Medellin, Colombia, a network of thirty planted corridors along roads and streams has lowered temperatures in those areas by about two degrees. Such measures are far cheaper than treating the illnesses caused by extreme heat.',
    qs: [
      ['T', 'Temperatures can vary greatly between districts of the same city.', 'Chênh tới mười độ giữa các khu.'],
      ['F', 'The hottest neighbourhoods are usually the wealthiest.', 'Thường là khu thu nhập thấp nhất.'],
      ['NG', 'The chief heat officer of Athens was previously a doctor.', 'Bài không nói.'],
      ['What is Paris doing with school playgrounds?', 'Turning them into shaded yards', 'Selling them for housing', 'Covering them with asphalt', 'Closing them in summer', 'Biến thành sân "ốc đảo" có bóng mát.'],
    ],
    fill: [
      ['Medellin has created a network of thirty planted ____.', ['corridors'], '"thirty planted corridors".'],
    ],
  },
  reading: [
    {
      title: 'The Dodo: Portrait of an Extinction',
      text: 'No animal is more closely associated with extinction than the dodo. The expression "as dead as a dodo" is used every day by people who know almost nothing about the bird itself. That is hardly surprising, since remarkably little reliable information survives.\n\nThe dodo lived only on Mauritius, an island in the Indian Ocean that had no human inhabitants until the end of the sixteenth century. It was a relative of the pigeon. Its ancestors had flown to the island millions of years earlier and, finding plentiful food and no predators, gradually became larger and lost the ability to fly. The adult bird stood about a metre tall and weighed perhaps fifteen kilograms.\n\nDutch sailors landed on Mauritius in 1598 and made it a regular stopping place on the route to Asia. The dodo, which had never learned to fear anything, walked up to them and was easily caught. It is commonly said that sailors ate the birds until none were left, but written accounts describe the meat as tough and unpleasant, and historians now think that hunting was not the main cause. Far more damaging were the animals that arrived with the ships: rats, pigs and monkeys, which ate the eggs and chicks from the dodo\'s nest on the ground. The last widely accepted sighting was in 1662, less than seventy years after the Dutch arrived.\n\nAt the time, nobody noticed. The idea that a species could vanish completely was not generally accepted until the early nineteenth century, and some naturalists even suggested that the dodo had never existed. Hardly any physical remains had been kept. A stuffed specimen in the museum at Oxford decayed so badly that in 1755 most of it was thrown away; only the head and one foot were saved.\n\nOur image of the dodo as a fat, clumsy creature comes mainly from paintings made in Europe in the seventeenth century, often by artists who had never seen a living bird and who copied one another. Some of the birds brought to Europe were probably overfed in captivity. Scientists who have studied the skeletons, most of which were dug from a marsh on Mauritius in 1865, conclude that the wild dodo was slimmer and could run quite fast.\n\nIn that same year, Lewis Carroll included a dodo in "Alice\'s Adventures in Wonderland", which made the bird famous. It has since become a symbol for conservation. The loss also had effects on the island itself: some researchers believe that a local tree depended on the dodo to spread its seeds, although this claim is disputed.',
      qs: [
        ['T', 'The dodo was related to the pigeon.', 'Đoạn 2.'],
        ['F', 'The ancestors of the dodo walked to Mauritius across a land bridge.', 'Đoạn 2: bay tới đảo.'],
        ['T', 'Dodos were not afraid of the first sailors.', 'Đoạn 3.'],
        ['F', 'Sailors greatly enjoyed eating dodo meat.', 'Đoạn 3: thịt dai, khó ăn.'],
        ['NG', 'The Dutch tried to protect the dodo by law.', 'Bài không nói.'],
        ['T', 'Most of the Oxford specimen was destroyed in the eighteenth century.', 'Đoạn 4: năm 1755.'],
        ['What do historians now think was the main cause of extinction?', 'Animals brought by ships ate eggs and chicks.', 'Sailors hunted every bird.', 'A volcano destroyed the forest.', 'A disease spread from pigeons.', 'Đoạn 3.'],
        ['Why did some naturalists doubt that the dodo had existed?', 'Extinction was not yet an accepted idea and few remains were kept.', 'No drawings had been made.', 'Mauritius had never been visited.', 'The Dutch denied it.', 'Đoạn 4.'],
        ['Why is the traditional picture of a fat dodo probably wrong?', 'Artists copied each other and captive birds were overfed.', 'Paintings were made in Mauritius.', 'The skeletons were lost.', 'Carroll invented it.', 'Đoạn 5.'],
        ['What made the dodo famous?', 'Its appearance in a children\'s book', 'A scientific expedition', 'A museum fire', 'A Dutch painting', 'Đoạn cuối.'],
      ],
      fill: [
        ['The dodo lived only on the island of ____.', ['Mauritius'], 'Đoạn 2.'],
        ['Most dodo skeletons were dug from a ____ in 1865.', ['marsh'], 'Đoạn 5: "dug from a marsh".'],
        ['A local tree may have depended on the dodo to spread its ____.', ['seeds'], 'Đoạn cuối.'],
      ],
    },
    {
      title: 'How Much Sleep Do Teenagers Need?',
      text: 'Parents have long complained that teenagers stay up late and cannot be dragged out of bed in the morning. The usual explanations are laziness and too many hours spent on telephones. Sleep scientists offer a different account: the daily rhythm of the body changes during adolescence, and the timetable of the typical school takes no notice.\n\nThe key is melatonin, a hormone that the brain releases in the evening to prepare the body for sleep. Research by Mary Carskadon at Brown University in the 1990s showed that during puberty the release of melatonin shifts about two hours later. A teenager who is told to go to bed at ten o\'clock may be physically unable to fall asleep before midnight. Yet adolescents need more sleep than adults, not less: between eight and ten hours a night. If school begins at eight in the morning, the sum is impossible.\n\nThe result is that most teenagers are permanently short of sleep. Surveys in the United States find that fewer than a third of high school students get eight hours on school nights. At weekends they sleep until midday in an attempt to catch up, a pattern researchers call "social jet lag", because it resembles flying across several time zones and back each week.\n\nThe consequences are well documented. Tired students learn less, since memories of the day are fixed during sleep. They are more likely to feel depressed and to gain weight. Young drivers who have slept badly have more accidents.\n\nA number of schools have tested the obvious remedy. In 2016 the city of Seattle moved the start of its secondary schools from 7:50 to 8:45. Researchers from the University of Washington, who gave students wrist monitors before and after the change, found that they slept thirty-four minutes longer each night. They did not simply go to bed later, as some had predicted. Marks in a biology course rose by four and a half percent, and attendance improved, particularly in schools in poorer districts.\n\nDespite such findings, later starts remain unusual. Bus timetables are organised so that the same vehicles can carry older pupils first and younger ones afterwards. Sports practice would finish after dark in winter. Parents who start work early worry about leaving teenagers alone in the house, and older students who have part-time jobs would lose working hours.\n\nLight is the other factor that can be changed. Bright screens in the evening delay melatonin still further, while daylight in the morning moves the body clock earlier. Experts therefore advise teenagers to put away telephones an hour before bed and to keep weekend rising times within about an hour of weekday ones.',
      qs: [
        ['F', 'Sleep scientists agree that teenagers stay in bed out of laziness.', 'Đoạn 1: họ đưa ra lời giải thích khác.'],
        ['T', 'During puberty, melatonin is released later in the evening.', 'Đoạn 2.'],
        ['F', 'Adolescents need less sleep than adults.', 'Đoạn 2: cần NHIỀU hơn.'],
        ['T', 'Most American high school students sleep less than eight hours on school nights.', 'Đoạn 3: chưa tới một phần ba ngủ đủ.'],
        ['NG', 'Carskadon\'s research was carried out on her own children.', 'Bài không nói.'],
        ['F', 'After the change in Seattle, students simply went to bed later.', 'Đoạn 5: họ không đi ngủ muộn hơn.'],
        ['NG', 'Teachers in Seattle opposed the later start.', 'Bài không nói.'],
        ['What is "social jet lag"?', 'Sleeping much later at weekends than on school days', 'Tiredness after a long flight', 'Staying awake to use social media', 'Falling asleep in class', 'Đoạn 3.'],
        ['Where did attendance improve most in Seattle?', 'In schools in poorer districts', 'In private schools', 'In primary schools', 'In schools near the university', 'Đoạn 5.'],
        ['Why do bus timetables discourage later starts?', 'The same buses carry older pupils first, then younger ones.', 'Drivers refuse to work late.', 'Buses are too expensive.', 'Roads are closed in the morning.', 'Đoạn 6.'],
      ],
      fill: [
        ['The hormone that prepares the body for sleep is ____.', ['melatonin'], 'Đoạn 2.'],
        ['Seattle students slept ____ minutes longer each night.', ['thirty-four', '34'], 'Đoạn 5.'],
        ['Memories of the day are fixed during ____.', ['sleep'], 'Đoạn 4.'],
        ['____ in the morning moves the body clock earlier.', ['Daylight', 'daylight'], 'Đoạn cuối: "daylight in the morning".'],
      ],
    },
  ],
};
