/** TOEIC đề 8 – phần Nghe bổ sung để đủ 100 câu (xem ghi chú "ĐỀ ĐẦY ĐỦ" trong helpers.ts) */
import { RawToeicL } from '../helpers';

export const L: RawToeicL = {
  p2: [
    ['Where did you buy those office chairs?', 'From a store on Fifth Avenue.', 'Last Tuesday.', 'They are very comfortable.', 'Where → nơi mua.'],
    ['Who is going to replace Mr. Diaz when he retires?', 'They have not decided yet.', 'At the end of June.', 'He was replaced.', 'Who → "chưa quyết định".'],
    ['When does the store open on Sundays?', 'At eleven.', 'On the corner.', 'Until six.', 'When → giờ mở cửa.'],
    ['How many pages is the contract?', 'About fifteen.', 'In the top drawer.', 'By Friday.', 'How many → số lượng.'],
    ['Would you like to sit inside or on the terrace?', 'Inside, please. It is a bit windy.', 'Yes, I would.', 'A table for two.', 'Câu hỏi lựa chọn.'],
    ['Why has the price of coffee gone up?', 'There was a poor harvest this year.', 'About ten percent.', 'In South America.', 'Why → lý do.'],
    ['Are you free to talk now?', 'Can I call you back in five minutes?', 'It was free.', 'I talked to him.', 'Câu hỏi Yes/No → đề nghị gọi lại.'],
    ['Which seat would you prefer?', 'The one by the aisle.', 'Seat belts are required.', 'Two seats.', 'Which → xác định.'],
    ["You sent the agenda to everyone, didn't you?", 'Yes, on Monday.', 'It is on the agenda.', 'Everyone was there.', 'Câu hỏi đuôi.'],
    ['Could you open the window, please?', 'Of course. It is warm in here.', 'It opens at nine.', 'Through the window.', 'Lời nhờ → đồng ý.'],
    ['How much will the repairs cost?', 'Around four hundred dollars.', 'By Thursday.', 'The brakes and the lights.', 'How much → chi phí.'],
    ['We are running low on printer paper.', 'I will add it to the order list.', 'It runs very fast.', 'A low price.', 'Thông tin → hành động.'],
    ['Shall we take the stairs or wait for the elevator?', 'Let us take the stairs.', 'Yes, we shall.', 'On the fourth floor.', 'Câu hỏi lựa chọn.'],
    ['Is the restaurant open for lunch?', 'Yes, from noon to three.', 'I had a salad.', 'A table by the window.', 'Câu hỏi Yes/No.'],
    ["Why don't you ask for an extension?", 'I already have, twice.', 'Extension two one four.', 'Because it is long.', 'Lời gợi ý → "đã xin rồi".'],
    ['Whose responsibility is it to update the price list?', 'The sales manager\'s.', 'Every month.', 'On the website.', 'Whose → người.'],
    ['The meeting room is double-booked for three o\'clock.', 'We could use the room next door.', 'A double room, please.', 'At three thirty.', 'Vấn đề → giải pháp.'],
  ],
  p3: [
    {
      title: 'A customer in a shoe store',
      lines: [
        'M: Excuse me, I am looking for a pair of waterproof walking boots.',
        'W: Certainly. What size do you take?',
        'M: Forty-three.',
        'W: These are our most popular model. They are a hundred and ten dollars, and they come with a two-year guarantee.',
        'M: They feel a little tight.',
        'W: Try a forty-four. Boots should have some room for thick socks.',
      ],
      qs: [
        ['What is the man looking for?', 'Walking boots', 'Running shoes', 'Thick socks', 'A raincoat', '"waterproof walking boots".'],
        ['What does the woman say about the boots?', 'They have a two-year guarantee.', 'They are on sale.', 'They are the last pair.', 'They are made of leather.', '"they come with a two-year guarantee".'],
        ['What does the woman suggest?', 'Trying a larger size', 'Choosing another model', 'Buying thinner socks', 'Coming back tomorrow', '"Try a forty-four".'],
      ],
    },
    {
      title: 'A delayed shipment of parts',
      lines: [
        'W: Hello, this is Grace from Delta Motors. We ordered two hundred engine filters last week. Do you know when they will arrive?',
        'M: Let me check. They left our warehouse on Tuesday, but they are being held at customs.',
        'W: We need them by Friday, or our production line will stop.',
        'M: I will call the customs office right away and try to speed things up.',
        'W: Please call me back as soon as you have news.',
      ],
      qs: [
        ['What did the woman\'s company order?', 'Engine filters', 'Cars', 'Tires', 'Tools', '"two hundred engine filters".'],
        ['Why is the shipment delayed?', 'It is being held at customs.', 'It was sent to the wrong address.', 'The warehouse is closed.', 'The truck broke down.', '"they are being held at customs".'],
        ['What will the man do?', 'Contact the customs office', 'Send a second shipment', 'Visit the factory', 'Cancel the order', '"I will call the customs office right away".'],
      ],
    },
    {
      title: 'Planning a company picnic',
      lines: [
        'M: Have you chosen a place for the company picnic?',
        'W: I am thinking of Lakeside Park. It has tables, a playground, and plenty of parking.',
        'M: Do we need a permit?',
        'W: Yes, for groups of more than fifty. It costs thirty dollars, and I can apply online.',
        'M: Good. What if it rains?',
        'W: There is a covered area we can reserve for an extra twenty dollars.',
      ],
      qs: [
        ['Where will the picnic probably be held?', 'At a park', 'At the office', 'At a hotel', 'On a beach', '"Lakeside Park".'],
        ['When is a permit required?', 'For groups over fifty', 'For all groups', 'Only on weekends', 'Only for children', '"for groups of more than fifty".'],
        ['What can be reserved for an extra fee?', 'A covered area', 'A playground', 'A parking lot', 'A boat', '"There is a covered area we can reserve".'],
      ],
    },
    {
      title: 'A bank loan',
      lines: [
        'W: Good morning. I own a small bakery, and I would like to borrow fifteen thousand dollars to buy a new oven.',
        'M: I see. How long have you been in business?',
        'W: Six years. I brought my accounts for the last three.',
        'M: Excellent. I will also need a quote for the oven from the supplier.',
        'W: I can email that this afternoon.',
        'M: Then we should be able to give you a decision within a week.',
      ],
      qs: [
        ['Why does the woman want a loan?', 'To buy equipment', 'To open a second shop', 'To pay her staff', 'To move to a new building', '"to buy a new oven".'],
        ['What did the woman bring?', 'Her accounts', 'A quote', 'Her passport', 'A sample of bread', '"I brought my accounts for the last three".'],
        ['How soon will a decision be made?', 'Within a week', 'This afternoon', 'In a month', 'Tomorrow', '"a decision within a week".'],
      ],
    },
    {
      title: 'Staff shortage in a restaurant',
      lines: [
        'M: Two waiters have called in sick, and we have a party of thirty at eight.',
        'W: That is not good. Have you tried calling Sam and Julie?',
        'M: Sam can come at seven. Julie is not answering.',
        'W: I will help serve tonight. The office work can wait until tomorrow.',
        'M: Thank you. I will ask the kitchen to prepare a simpler menu for the party.',
      ],
      qs: [
        ['What is the problem?', 'Two staff members are ill.', 'The kitchen is closed.', 'A party was canceled.', 'The menu is too long.', '"Two waiters have called in sick".'],
        ['What does the woman offer to do?', 'Help serve customers', 'Call the guests', 'Cook the food', 'Close early', '"I will help serve tonight".'],
        ['What will the man ask the kitchen to do?', 'Prepare a simpler menu', 'Order more food', 'Start earlier', 'Hire a new cook', '"prepare a simpler menu for the party".'],
      ],
    },
    {
      title: 'A new employee\'s first day',
      lines: [
        'W: Welcome, Daniel. I am Rita, your team leader. How was the journey in?',
        'M: Fine, thanks. I came by train.',
        'W: Good. Your desk is by the window. Your computer will be set up by noon, so this morning you can read the staff handbook.',
        'M: Thank you. Is there a team meeting today?',
        'W: Yes, at two. I will introduce you to everyone then.',
      ],
      qs: [
        ['Who is the woman?', "The man's team leader", 'A receptionist', 'An IT technician', 'A client', '"I am Rita, your team leader".'],
        ['What will the man do this morning?', 'Read a handbook', 'Set up his computer', 'Meet clients', 'Attend training', '"this morning you can read the staff handbook".'],
        ['What will happen at two o\'clock?', 'A team meeting', 'A lunch', 'A tour of the building', 'A training session', '"Yes, at two".'],
      ],
    },
    {
      title: 'A question about a warranty',
      lines: [
        'M: Hello, I bought a dishwasher from you eight months ago, and it has stopped draining.',
        'W: I am sorry about that. It is still under warranty, so the repair will be free.',
        'M: That is a relief. When can someone come?',
        'W: Our technician is in your area on Wednesday morning.',
        'M: I work on Wednesdays. Is Saturday possible?',
        'W: Yes, but only between eight and ten.',
      ],
      qs: [
        ['What is wrong with the dishwasher?', 'It does not drain.', 'It will not start.', 'It leaks.', 'It is too noisy.', '"it has stopped draining".'],
        ['Why will the repair be free?', 'The warranty is still valid.', 'The store made a mistake.', 'The man is a member.', 'It is a small repair.', '"It is still under warranty".'],
        ['When will the technician most likely come?', 'On Saturday morning', 'On Wednesday morning', 'On Friday', 'Tonight', 'Anh làm việc thứ Tư; thứ Bảy từ 8 đến 10 giờ.'],
      ],
    },
    {
      title: 'Organizing a webinar',
      lines: [
        'W: Our webinar on tax changes is next Thursday. How many people have signed up?',
        'M: Three hundred and ten. Our software only allows two hundred and fifty at once.',
        'W: Can we upgrade the license?',
        'M: Yes, for fifty dollars we can have up to five hundred participants for a month.',
        'W: Do it. And please send everyone a reminder with the link the day before.',
      ],
      qs: [
        ['What is the topic of the webinar?', 'Tax changes', 'New software', 'Marketing', 'Hiring', '"Our webinar on tax changes".'],
        ['What is the problem?', 'Too many people have registered.', 'Too few people are interested.', 'The speaker is unavailable.', 'The link is broken.', 'Phần mềm chỉ cho 250 người.'],
        ['What does the woman ask the man to send?', 'A reminder', 'An invoice', 'A recording', 'A survey', '"send everyone a reminder with the link".'],
      ],
    },
    {
      title: 'A car rental inquiry',
      lines: [
        'M: I would like to rent a car for the weekend. What do you have available?',
        'W: We have a small car for forty dollars a day and a family car for sixty.',
        'M: There will be five of us, with luggage.',
        'W: Then you will need the family car. Would you like to add insurance for ten dollars a day?',
        'M: Yes, please. Can I return it on Monday morning?',
        'W: Certainly, before ten.',
      ],
      qs: [
        ['Why does the man need the larger car?', 'He is traveling with four other people.', 'He is driving a long way.', 'The small car is unavailable.', 'It is cheaper.', '"There will be five of us, with luggage".'],
        ['What extra does the man agree to?', 'Insurance', 'A child seat', 'A GPS', 'A second driver', '"Would you like to add insurance...?" – "Yes, please".'],
        ['When will the man return the car?', 'On Monday morning', 'On Sunday evening', 'On Saturday', 'On Monday evening', '"Can I return it on Monday morning?"'],
      ],
    },
    {
      title: 'Discussing a conference talk',
      lines: [
        'W: Your talk this morning was excellent. The examples from your own company were very useful.',
        'M: Thank you. I was worried that I spoke too fast.',
        'W: Not at all. Would you be willing to share your slides?',
        'M: Of course. I will upload them to the conference website tonight.',
        'W: Great. I would also like to invite you to speak at our event in October.',
      ],
      qs: [
        ['What did the woman like about the talk?', 'The real examples', 'The short length', 'The humor', 'The printed handouts', '"The examples from your own company were very useful".'],
        ['What will the man do tonight?', 'Upload his slides', 'Give another talk', 'Fly home', 'Write an article', '"I will upload them to the conference website tonight".'],
        ['What does the woman invite the man to do?', 'Speak at another event', 'Join her company', 'Have dinner', 'Review her slides', '"invite you to speak at our event in October".'],
      ],
    },
    {
      title: 'Choosing a phone plan',
      lines: [
        'M: I would like to change my phone plan. I use a lot of data, about twelve gigabytes a month.',
        'W: Here are our current plans. Do you make many international calls?',
        'M: No, hardly any.',
        'W: Then you need a plan with enough data, but you do not have to pay for international calls.',
        'M: I will take the cheapest one that covers my data.',
      ],
      graphic: ['Phone plans (per month)', 'Plan | Data | International calls | Price\nBasic | 5 GB | No | $15\nPlus | 15 GB | No | $25\nMax | 30 GB | No | $35\nWorld | 15 GB | Yes | $40'],
      qs: [
        ['How much data does the man use each month?', 'About 12 GB', 'About 5 GB', 'About 30 GB', 'About 15 GB', '"about twelve gigabytes a month".'],
        ['What does the man say about international calls?', 'He rarely makes them.', 'He makes them daily.', 'He needs them for work.', 'They are too expensive.', '"No, hardly any".'],
        ['Look at the graphic. Which plan will the man choose?', 'Plus', 'Basic', 'Max', 'World', 'Rẻ nhất mà đủ 12 GB: Plus (15 GB, $25).'],
      ],
    },
  ],
  p4: [
    {
      title: 'Announcement at a hotel',
      lines: [
        'M: Good evening, ladies and gentlemen. This is an announcement for guests attending the Northern Banking Conference.',
        'M: Tonight\'s welcome dinner has been moved from the garden to the Crystal Ballroom on the second floor because of the rain. Dinner will be served at seven thirty.',
        'M: Please bring your conference badge, as it is required for entry.',
      ],
      qs: [
        ['Who is the announcement for?', 'Conference guests', 'Hotel staff', 'Wedding guests', 'Tour groups', '"guests attending the Northern Banking Conference".'],
        ['Why was the dinner moved?', 'Because of the weather', 'Because the garden is being repaired', 'Because more guests arrived', 'Because of noise', '"because of the rain".'],
        ['What must guests bring?', 'Their conference badge', 'Their room key', 'An invitation card', 'An umbrella', '"Please bring your conference badge".'],
      ],
    },
    {
      title: 'Voicemail from a supplier',
      lines: [
        'W: Hello, Mr. Park. This is Ingrid from Nordic Timber.',
        'W: I am calling about your order of oak flooring. We can deliver sixty square meters this week, but the remaining forty will not be ready until the twentieth.',
        'W: If you would prefer to receive everything at once, the whole order can be delivered on the twenty-first. Please let me know which you prefer by tomorrow noon.',
      ],
      qs: [
        ['What did the listener order?', 'Flooring', 'Furniture', 'Windows', 'Paint', '"your order of oak flooring".'],
        ['What is the problem?', 'Part of the order is not ready.', 'The price has changed.', 'The truck is too small.', 'The address is unclear.', '"the remaining forty will not be ready until the twentieth".'],
        ['What must the listener decide?', 'Whether to accept two deliveries', 'Which color to choose', 'How to pay', 'Who will install the floor', 'Hai lần giao hoặc giao một lần ngày 21.'],
      ],
    },
    {
      title: 'Radio advertisement for a travel agency',
      lines: [
        'M: Dreaming of a winter escape? Sunway Travel has just released its holiday offers to Thailand, Mexico, and the Canary Islands.',
        'M: All packages include flights, a four-star hotel, and airport transfers. Book before the end of October and children under twelve travel free.',
        'M: Visit one of our six stores, or call us on five five five, zero one six nine. Sunway Travel: your holiday starts here.',
      ],
      qs: [
        ['What is being advertised?', 'Holiday packages', 'A new airline', 'Hotel jobs', 'A language course', '"holiday offers".'],
        ['What do all packages include?', 'Flights and a hotel', 'All meals', 'Car rental', 'Travel insurance', '"include flights, a four-star hotel, and airport transfers".'],
        ['What is offered to people who book before the end of October?', 'Free travel for children', 'A free night', 'A room upgrade', 'A discount on flights', '"children under twelve travel free".'],
      ],
    },
    {
      title: 'Talk to new library members',
      lines: [
        'W: Welcome to the Central Library. Let me explain how things work.',
        'W: Your card allows you to borrow ten items for three weeks. You can renew them online, unless another member has requested them.',
        'W: The study rooms on the upper floor can be booked for two hours at a time. And every Thursday evening we hold free talks by local authors. This week\'s talk is about writing crime novels.',
      ],
      qs: [
        ['How many items can members borrow?', 'Ten', 'Three', 'Two', 'Twenty', '"borrow ten items".'],
        ['When can an item NOT be renewed?', 'When someone else has requested it', 'When it is a new book', 'After three weeks', 'On Thursdays', '"unless another member has requested them".'],
        ['What is this week\'s talk about?', 'Writing crime novels', 'Local history', 'Using the library', 'Children\'s books', '"about writing crime novels".'],
      ],
    },
    {
      title: 'Telephone message about a job',
      lines: [
        'M: Hello, this message is for Ms. Rana Malik. This is Henry Wells from Brightline Architects.',
        'M: Thank you for attending the second interview last Friday. I am delighted to offer you the position of junior architect.',
        'M: We would like you to start on the first of March. I will send the contract by email today. Please look it over and call me if you have any questions about the salary or working hours.',
      ],
      qs: [
        ['Why is the speaker calling?', 'To offer a job', 'To arrange an interview', 'To request documents', 'To cancel a meeting', '"I am delighted to offer you the position".'],
        ['When would the listener start?', 'On March first', 'Next Friday', 'Today', 'In two weeks', '"start on the first of March".'],
        ['What will the speaker send today?', 'A contract', 'A building plan', 'A schedule', 'A reference', '"I will send the contract by email today".'],
      ],
    },
    {
      title: 'Excerpt from a sales meeting',
      lines: [
        'W: Let us look at last month\'s figures. Sales of laptops were up eight percent, mainly because of the back-to-school promotion.',
        'W: Printers, however, did badly. We sold thirty percent fewer than in the same month last year. I think customers are waiting for the new model, which arrives in November.',
        'W: Until then, I suggest we reduce the price of the current printers by fifteen percent to clear the stock.',
      ],
      qs: [
        ['Why did laptop sales increase?', 'Because of a promotion', 'Because of a new model', 'Because of lower prices', 'Because of a new store', '"the back-to-school promotion".'],
        ['According to the speaker, why are printer sales low?', 'Customers are waiting for a new model.', 'The printers are faulty.', 'The price went up.', 'There is no stock.', '"customers are waiting for the new model".'],
        ['What does the speaker suggest?', 'Lowering printer prices', 'Ordering more printers', 'Ending the promotion', 'Delaying the new model', '"reduce the price of the current printers by fifteen percent".'],
      ],
    },
    {
      title: 'News report on a festival',
      lines: [
        'M: The annual Harbor Food Festival begins this Friday and runs through Sunday.',
        'M: More than eighty restaurants and food trucks will be serving dishes along the waterfront. New this year is a cooking competition for amateur chefs on Saturday afternoon.',
        'M: Entry to the festival is free, but organizers recommend taking public transport, as parking near the harbor will be extremely limited.',
      ],
      qs: [
        ['How long does the festival last?', 'Three days', 'One day', 'One week', 'Two days', 'Thứ Sáu đến Chủ nhật.'],
        ['What is new this year?', 'A cooking competition', 'Food trucks', 'An entrance fee', 'A concert', '"New this year is a cooking competition".'],
        ['What do the organizers recommend?', 'Using public transport', 'Arriving by boat', 'Booking a table', 'Bringing food', '"recommend taking public transport".'],
      ],
    },
    {
      title: 'Message about a seminar seating plan',
      lines: [
        'W: Hi, Mark. It is Julia. I have finished the seating plan for Thursday\'s seminar.',
        'W: One thing to note: the largest group will sit at the table nearest the screen, because their director is giving the first presentation.',
        'W: I have emailed you the list. Could you print name cards for each table?',
      ],
      graphic: ['Seminar groups', 'Company | People\nAlton Group | 6\nBright & Co. | 9\nCarver Ltd. | 4\nDelmar Inc. | 7'],
      qs: [
        ['What has the speaker prepared?', 'A seating plan', 'A presentation', 'A menu', 'A budget', '"I have finished the seating plan".'],
        ['Look at the graphic. Which company will sit nearest the screen?', 'Bright & Co.', 'Alton Group', 'Carver Ltd.', 'Delmar Inc.', 'Nhóm đông người nhất: Bright & Co. (9 người).'],
        ['What is the listener asked to do?', 'Print name cards', 'Book a room', 'Order lunch', 'Call the director', '"Could you print name cards for each table?"'],
      ],
    },
  ],
};
