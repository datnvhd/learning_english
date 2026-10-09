/** IELTS đề 5 – phần bổ sung để đủ 40 câu nghe + 40 câu đọc (xem ghi chú "ĐỀ ĐẦY ĐỦ" trong helpers.ts) */
import { RawIeltsFull } from '../helpers';

export const FULL: RawIeltsFull = {
  // Section 1 – Booking a city walking tour (nối tiếp)
  l1: {
    lines: [
      'M: Thanks. Could you tell me what we will see on the tour?',
      'W: Of course. We begin at the old city wall, then walk through the cathedral gardens, and finish at the harbour, where there is a small museum.',
      'M: Is the museum included in the price?',
      'W: Entry is three pounds extra, but it is optional. Most people go in, because you can see a model of the town as it was in seventeen hundred.',
      'M: And how many people are usually in a group?',
      'W: No more than twelve, so that everyone can hear the guide.',
      'M: What happens if it rains heavily?',
      'W: We still go ahead, but if you prefer, you can move your booking to another day free of charge. Just phone us before nine in the morning.',
    ],
    qs: [
      ['Where does the tour end?', 'At the harbour', 'At the old city wall', 'At the cathedral', '"finish at the harbour".'],
      ['What can customers do if it rains heavily?', 'Change the booking to another day', 'Get their money back', 'Take a bus tour instead', '"move your booking to another day free of charge".'],
    ],
    fill: [
      ['Museum entry costs ____ pounds extra.', ['3', 'three'], 'Vào bảo tàng thêm ba bảng.'],
      ['Maximum group size: ____ people', ['12', 'twelve'], 'Không quá mười hai người.'],
      ['Customers must phone before ____ in the morning to change a booking.', ['9', 'nine'], 'Gọi trước chín giờ sáng.'],
    ],
  },
  // Section 2 – The Hillside community garden (nối tiếp)
  l2: {
    lines: [
      'W: Let me tell you about some of our other activities. On the first Saturday of every month we run a workshop. Next month\'s topic is making compost from kitchen waste.',
      'W: We also keep four beehives at the far end of the garden. Last year they produced forty jars of honey, which we sold to raise money for new tools.',
      'W: We are always looking for volunteers to help with the heavy work, especially on Wednesday mornings.',
      'W: At the moment there is a waiting list for plots. It usually takes about five months to get one, so put your name down today if you are interested.',
      'W: The entrance is on Hill Lane, opposite the church, and there are racks for bicycles just inside the gate.',
    ],
    qs: [
      ['What is the topic of next month\'s workshop?', 'Making compost', 'Keeping bees', 'Growing tomatoes', '"making compost from kitchen waste".'],
      ['What was the money from the honey used for?', 'New tools', 'The school project', 'A new shed', '"to raise money for new tools".'],
      ['Where is the entrance to the garden?', 'Opposite the church', 'Next to the school', 'Behind the car park', '"on Hill Lane, opposite the church".'],
    ],
    fill: [
      ['The garden has ____ beehives.', ['4', 'four'], 'Bốn tổ ong.'],
      ['It usually takes about ____ months to get a plot.', ['5', 'five'], 'Khoảng năm tháng.'],
    ],
  },
  listening: [
    {
      title: 'Section 3 – A student gets advice on a research proposal',
      lines: [
        'M: Hello, Dr. Mason. Thanks for seeing me. I would like some advice on my research proposal about city noise and sleep.',
        'W: Sit down, Tariq. I have read your draft. The topic is good, but the aims are not clear enough. What exactly do you want to find out?',
        'M: Whether people who live near busy roads sleep less than people in quiet streets.',
        'W: Then say that in one sentence at the beginning. How will you measure sleep?',
        'M: I was going to ask people to fill in a sleep diary for two weeks.',
        'W: Diaries are useful, but people often forget to complete them. Could you also use wrist monitors? The department has thirty that you can borrow.',
        "M: That would be great. I didn't know that.",
        'W: You will need to book them through the laboratory technician. And how many participants are you planning to have?',
        'M: I was hoping for a hundred.',
        'W: That is too ambitious for one student. Forty would be realistic, twenty from each type of street.',
        'M: All right. Should I measure the noise myself?',
        'W: Yes, with a sound meter, at night as well as during the day. And do not forget that the ethics committee must approve the project before you start. Their next meeting is on the ninth of November.',
        'M: I will submit the form this week.',
      ],
      qs: [
        ['What is the main weakness of the draft proposal?', 'The aims are unclear.', 'The topic is uninteresting.', 'It is too short.', '"the aims are not clear enough".'],
        ['What problem does the tutor see with sleep diaries?', 'People forget to fill them in.', 'They are expensive.', 'They take too long to read.', '"people often forget to complete them".'],
        ['How can the student get wrist monitors?', 'By booking them through the technician', 'By buying them online', 'By asking another university', '"book them through the laboratory technician".'],
        ['Why does the tutor reduce the number of participants?', 'A hundred is too many for one student.', 'The monitors are broken.', 'The streets are too short.', '"That is too ambitious for one student".'],
        ['What must happen before the project starts?', 'The ethics committee must approve it.', 'The student must pass an exam.', 'The noise must be measured.', '"the ethics committee must approve the project before you start".'],
      ],
      fill: [
        ['Participants would keep a sleep diary for ____ weeks.', ['2', 'two'], 'Hai tuần.'],
        ['The department has ____ wrist monitors.', ['30', 'thirty'], 'Ba mươi thiết bị đeo tay.'],
        ['A realistic number of participants is ____.', ['40', 'forty'], 'Bốn mươi người.'],
        ['Noise will be measured with a sound ____.', ['meter'], '"with a sound meter".'],
        ['The committee meets on the ninth of ____.', ['November'], 'Ngày 9 tháng Mười Một.'],
      ],
    },
    {
      title: 'Section 4 – Lecture on the history of the postal service',
      lines: [
        'M: Today I am going to talk about how the postal service developed, and why one small invention changed it completely.',
        'M: Organised postal systems are very old. The Persian empire, two and a half thousand years ago, had riders who carried royal messages between stations a day\'s ride apart. But these services were for governments, not for ordinary people.',
        'M: In Britain in the early nineteenth century, sending a letter was complicated and expensive. The cost depended on the distance and on the number of sheets of paper. Most importantly, it was the person receiving the letter who paid.',
        'M: This caused problems. Poor families often refused letters they could not afford, and some people invented secret marks on the outside so that the message could be read without paying.',
        'M: In eighteen thirty-seven, a teacher named Rowland Hill proposed a reform. Letters should be paid for in advance by the sender, at one low price whatever the distance.',
        'M: The proof of payment was a small piece of paper with glue on the back: the stamp. The first one, the Penny Black, went on sale in May eighteen forty.',
        'M: The results were dramatic. Within a single year, the number of letters sent in Britain more than doubled.',
        'M: Other countries quickly copied the idea. Brazil and Switzerland issued stamps in eighteen forty-three.',
        'M: Cheap post had wide social effects. Families separated by migration could keep in touch, and businesses could send catalogues. It also encouraged people to learn to read and write.',
        'M: Today letters are declining, but parcels are increasing because of online shopping, so the service continues to adapt.',
      ],
      qs: [
        ['Who used the Persian postal system?', 'The government', 'Merchants', 'Ordinary families', '"these services were for governments".'],
        ['In early nineteenth-century Britain, who paid for a letter?', 'The person who received it', 'The person who sent it', 'The local council', '"it was the person receiving the letter who paid".'],
        ['Why did some people put secret marks on letters?', 'To pass a message without paying', 'To show the letter was urgent', 'To hide the sender\'s name', '"so that the message could be read without paying".'],
        ['What did Rowland Hill propose about the price?', 'One low price for any distance', 'A price based on weight only', 'Free post for the poor', '"at one low price whatever the distance".'],
        ['What social effect of cheap post is mentioned?', 'It encouraged literacy.', 'It reduced migration.', 'It ended newspapers.', '"encouraged people to learn to read and write".'],
      ],
      fill: [
        ['Before the reform, the cost depended on distance and the number of ____ of paper.', ['sheets'], '"the number of sheets of paper".'],
        ['Rowland Hill worked as a ____.', ['teacher'], '"a teacher named Rowland Hill".'],
        ['The first stamp was called the Penny ____.', ['Black'], '"the Penny Black".'],
        ['The first stamp went on sale in ____ 1840.', ['May'], 'Tháng Năm năm 1840.'],
        ['Today ____ are increasing because of online shopping.', ['parcels'], '"parcels are increasing".'],
      ],
    },
  ],
  // Bài đọc 1 – A Short History of Chocolate (nối tiếp)
  r1: {
    text: 'Making chocolate remains a long process. Cacao pods are cut from the tree by hand, since the trees are too delicate for machines. The beans and the white pulp around them are piled in boxes and left to ferment for about five days, a step that is essential for developing flavour. They are then dried in the sun, packed in sacks and shipped to factories, where they are roasted and ground.\n\nThe smooth texture of modern chocolate is the result of an accident. In 1879 the Swiss manufacturer Rodolphe Lindt is said to have left a mixing machine running over a weekend by mistake. When he returned, the gritty paste had become a silky liquid. The technique, known as conching, is still used.\n\nScientists have also investigated why chocolate melts so pleasantly. Cocoa butter turns from solid to liquid at about thirty-four degrees Celsius, just below the temperature of the human body, so a piece of chocolate that is hard in the hand melts on the tongue. Claims that chocolate is good for the heart are less certain, since most of the research has been paid for by the industry.',
    qs: [
      ['F', 'Cacao pods are usually harvested by machine.', 'Được cắt bằng tay vì cây quá mỏng manh.'],
      ['T', 'Fermentation is necessary for the flavour of chocolate.', '"essential for developing flavour".'],
      ['NG', 'Lindt sold his invention to another company.', 'Bài không đề cập.'],
      ['Why does chocolate melt in the mouth but not in the hand?', 'Cocoa butter melts just below body temperature.', 'Saliva dissolves sugar quickly.', 'The tongue is hotter than the rest of the body.', 'Chocolate contains water.', 'Bơ cacao chảy ở khoảng 34 độ C.'],
    ],
    fill: [
      ['The technique discovered by Lindt is known as ____.', ['conching'], '"known as conching".'],
    ],
  },
  reading: [
    {
      title: 'The Mystery of Migration',
      text: 'Every autumn, billions of birds leave the regions where they have bred and travel to warmer parts of the world, returning the following spring. Some of these journeys are astonishing. The Arctic tern flies from the Arctic to the Antarctic and back each year, a round trip of around seventy thousand kilometres, and so sees more daylight than any other creature. The bar-tailed godwit crosses the Pacific from Alaska to New Zealand in a single flight lasting eight or nine days, without stopping to eat, drink or rest.\n\nFor centuries, people had no idea where the birds went. The Greek philosopher Aristotle suggested that swallows spent the winter asleep at the bottom of ponds, and that some species changed into others as the seasons turned. The truth began to emerge by chance. In 1822 a stork was shot in Germany with a long African spear stuck through its neck; it had clearly survived the injury and flown thousands of kilometres. The bird, now stuffed, can still be seen in a museum in the city of Rostock.\n\nSystematic study began in 1899, when a Danish teacher, Hans Mortensen, started attaching small aluminium rings, each marked with a number and an address, to the legs of birds. When a ringed bird was found, its ring could be returned, revealing where it had travelled. Ringing is still widely used, but only a tiny proportion of rings are ever recovered. Since the 1990s, satellite transmitters and tiny devices that record light levels have allowed scientists to follow individual birds throughout their journeys.\n\nHow birds find their way is a question that is only partly answered. Experiments in planetariums have shown that some species learn the pattern of the stars around the pole when they are young. Others use the position of the sun, which requires an internal clock to correct for its movement during the day. Many can also detect the magnetic field of the Earth. Remarkably, the magnetic sense of the European robin appears to depend on a chemical reaction in the eye, so that the bird may actually see the field as a pattern of light and shade.\n\nPreparing for migration demands huge physical changes. Before departure, many small birds almost double their weight by storing fat, and some shrink their digestive organs to save weight once feeding is over.\n\nThe journeys are dangerous. Storms, hunters and lighted buildings kill millions of birds, and the wetlands where they rest are disappearing. Because migrants cross many borders, protecting them requires international agreement, which has proved slow to achieve.',
      qs: [
        ['T', 'The Arctic tern experiences more daylight than any other animal.', 'Đoạn 1: "sees more daylight than any other creature".'],
        ['F', 'The bar-tailed godwit rests several times while crossing the Pacific.', 'Đoạn 1: bay một mạch, không dừng.'],
        ['F', 'Aristotle correctly explained where swallows went in winter.', 'Đoạn 2: ông cho rằng chúng ngủ dưới đáy ao.'],
        ['T', 'The stork found in 1822 had been injured in Africa.', 'Đoạn 2: mang ngọn giáo châu Phi xuyên cổ.'],
        ['NG', 'Mortensen received money from the Danish government for his work.', 'Bài không nói.'],
        ['F', 'Most rings placed on birds are eventually found and returned.', 'Đoạn 3: chỉ một phần rất nhỏ được thu hồi.'],
        ['What have planetarium experiments shown?', 'Some birds learn star patterns when young.', 'Birds cannot fly at night.', 'Stars confuse migrating birds.', 'Birds follow the moon.', 'Đoạn 4: học mô hình sao quanh cực khi còn non.'],
        ['Why do birds that navigate by the sun need an internal clock?', 'To allow for the sun\'s movement during the day', 'To know when winter begins', 'To measure distance', 'To find food on time', 'Đoạn 4: hiệu chỉnh chuyển động của mặt trời.'],
        ['What is unusual about the robin\'s magnetic sense?', 'It seems to be located in the eye.', 'It only works at night.', 'It disappears in adults.', 'It is stronger than in any other bird.', 'Đoạn 4: phụ thuộc phản ứng hóa học trong mắt.'],
        ['Why is protecting migratory birds difficult?', 'It requires cooperation between many countries.', 'Nobody knows their routes.', 'They are too numerous.', 'They do not use wetlands.', 'Đoạn cuối: cần thỏa thuận quốc tế.'],
      ],
      fill: [
        ['Mortensen attached small aluminium ____ to the legs of birds.', ['rings'], 'Đoạn 3: "small aluminium rings".'],
        ['Before departure, many small birds store ____.', ['fat'], 'Đoạn 5: "by storing fat".'],
        ['The ____ where migrating birds rest are disappearing.', ['wetlands'], 'Đoạn cuối: "the wetlands where they rest".'],
      ],
    },
    {
      title: 'The Economics of Queuing',
      text: 'Waiting in line is one of the most common experiences of modern life, and one of the least popular. It has been estimated that an average person spends between one and two years of a lifetime in queues. Businesses care about this because customers who are kept waiting spend less and may never return. As a result, the study of queues has become a serious branch of mathematics and psychology.\n\nThe mathematical theory began in 1909 with a Danish engineer, Agner Erlang, who worked for the Copenhagen telephone company and wanted to know how many lines were needed to handle calls arriving at random. His formulas are still used to decide how many cashiers a supermarket should employ or how many beds a hospital requires.\n\nOne of the clearest findings concerns the layout of the queue. A single line that feeds several counters, like those found in most banks and airports, is more efficient than separate lines for each counter. The average wait is the same, but nobody gets stuck behind an unusually slow customer, so waiting times vary much less. People also regard the single line as fairer, since everyone is served strictly in order.\n\nPsychologists have discovered, however, that how long a wait feels matters more than how long it actually is. In a famous case from the 1950s, the manager of an office tower received constant complaints about slow lifts. Engineers said that nothing could be done cheaply. A psychologist suggested installing mirrors beside the lift doors. People began looking at themselves and at one another, and the complaints almost disappeared, although the lifts were no faster.\n\nSeveral principles follow. Occupied time feels shorter than empty time, which is why restaurants hand menus to waiting guests. Uncertain waits feel longer than known ones, so displays showing the expected delay calm people even when the news is bad. Unexplained waits are worse than explained ones. And anxiety makes everything seem slower: travellers in an airport who fear missing a flight judge the line to be far longer than it is.\n\nTheme parks are the acknowledged masters of the art. Lines wind back and forth so that their full length cannot be seen, entertainment is provided along the way, and the estimated waiting times posted at the entrance are deliberately a little too long, so that visitors are pleased to arrive early.\n\nCultural differences also exist. Researchers have noticed that in some countries a queue is treated as a firm social rule, while in others people gather in a loose crowd and remember who arrived before them. New technology may eventually make the debate unnecessary: virtual queues on mobile phones allow people to wait wherever they like and return when their turn comes.',
      qs: [
        ['T', 'Customers who wait a long time tend to spend less money.', 'Đoạn 1: khách phải chờ thì chi ít hơn.'],
        ['F', 'Erlang developed his theory while working for a supermarket.', 'Đoạn 2: làm cho công ty điện thoại Copenhagen.'],
        ['T', 'Erlang\'s formulas are applied in hospitals today.', 'Đoạn 2: quyết định số giường bệnh viện.'],
        ['F', 'A single line reduces the average waiting time.', 'Đoạn 3: thời gian chờ trung bình như nhau, chỉ ít dao động hơn.'],
        ['NG', 'The mirrors in the office tower were paid for by the tenants.', 'Bài không nói ai trả tiền.'],
        ['T', 'After the mirrors were installed, the lifts moved at the same speed as before.', 'Đoạn 4: "the lifts were no faster".'],
        ['NG', 'Theme parks in Asia have longer queues than those in Europe.', 'Bài không so sánh.'],
        ['Why do people consider a single line fairer?', 'Everyone is served in order of arrival.', 'It moves more quickly.', 'It has more staff.', 'It is shorter.', 'Đoạn 3: phục vụ đúng thứ tự.'],
        ['Why do restaurants give menus to waiting guests?', 'Occupied time feels shorter.', 'To increase the size of orders.', 'To explain the delay.', 'To reduce the number of staff.', 'Đoạn 5: thời gian có việc làm cảm thấy ngắn hơn.'],
        ['Why do theme parks post waiting times that are slightly too long?', 'So that visitors are pleased when the wait is shorter', 'To discourage people from joining', 'Because the times cannot be measured', 'To sell more fast-track tickets', 'Đoạn 6: để khách vui vì đến sớm hơn dự kiến.'],
      ],
      fill: [
        ['Erlang wanted to handle telephone calls arriving at ____.', ['random'], 'Đoạn 2: "calls arriving at random".'],
        ['A psychologist suggested installing ____ beside the lift doors.', ['mirrors'], 'Đoạn 4: "installing mirrors".'],
        ['____ makes everything seem slower.', ['Anxiety'], 'Đoạn 5: "anxiety makes everything seem slower".'],
        ['____ queues on mobile phones let people wait wherever they like.', ['Virtual'], 'Đoạn cuối: "virtual queues on mobile phones".'],
      ],
    },
  ],
};
