/** TOEIC đề 13 – phần Nghe bổ sung để đủ 100 câu (xem ghi chú "ĐỀ ĐẦY ĐỦ" trong helpers.ts) */
import { RawToeicL } from '../helpers';

export const L: RawToeicL = {
  p2: [
    ['Where can I find a taxi?', 'There is a stand outside the main exit.', 'About twenty dollars.', 'To the airport.', 'Where → vị trí.'],
    ['Who is the new head of purchasing?', 'Ms. Okafor, from the Lagos office.', 'On the third floor.', 'Since Monday.', 'Who → người.'],
    ['When do we need to submit the tax forms?', 'By the fifteenth of April.', 'To the tax office.', 'Three copies.', 'When → hạn.'],
    ['How long has this building been empty?', 'For about two years.', 'Ten floors.', 'On King Street.', 'How long → khoảng thời gian.'],
    ['Would you like me to call you a taxi?', 'No, thanks. My colleague is driving me.', 'I called him.', 'A yellow taxi.', 'Lời đề nghị → từ chối.'],
    ['Why was the workshop moved online?', 'The trainer could not travel.', 'On the website.', 'For three hours.', 'Why → lý do.'],
    ['Have the new brochures arrived?', 'Yes, they are in the storeroom.', 'In color.', 'I arrived early.', 'Câu hỏi Yes/No.'],
    ['Which department handles refunds?', 'Customer service.', 'Within five days.', 'A full refund.', 'Which → bộ phận.'],
    ["You are coming to the training tomorrow, aren't you?", 'Yes, I have signed up.', 'It is by train.', 'Tomorrow is Tuesday.', 'Câu hỏi đuôi.'],
    ['Could you lend me a pen?', 'Here, take this one.', 'I lent it yesterday.', 'It is blue.', 'Lời nhờ → đồng ý.'],
    ['How many people applied for the job?', 'More than sixty.', 'By email.', 'Last Friday.', 'How many → số lượng.'],
    ['The shredder is jammed again.', 'Try removing the paper from the top.', 'It is very sharp.', 'Strawberry jam.', 'Vấn đề → gợi ý.'],
    ['Shall I book a table for six or for eight?', 'Eight, in case the directors join us.', 'Yes, please book it.', 'At six o\'clock.', 'Câu hỏi lựa chọn.'],
    ['Is parking included in the room rate?', 'No, it is twelve dollars a night.', 'In the garage.', 'A large room.', 'Câu hỏi Yes/No.'],
    ["Why don't you take a few days off?", 'I will, once this project is finished.', 'Because it is off.', 'A few days ago.', 'Lời khuyên → đồng ý có điều kiện.'],
    ['Whose bag is this under the table?', 'It must be Ms. Lim\'s.', 'A leather bag.', 'Under the chair.', 'Whose → chủ nhân.'],
    ['I am not sure how to fill in this form.', 'Let me show you.', 'It is full.', 'In the form.', 'Vấn đề → đề nghị giúp.'],
  ],
  p3: [
    {
      title: 'A customer at an electronics store',
      lines: [
        'W: Hi, I am looking for a tablet for my father. He mainly wants to read the news and make video calls.',
        'M: Then he does not need the most expensive model. This one has a large screen and is very easy to use.',
        'W: How long does the battery last?',
        'M: About twelve hours. And this week it comes with a free cover.',
        'W: Great. I will take it.',
      ],
      qs: [
        ['Who is the tablet for?', "The woman's father", 'The woman herself', 'Her son', 'Her manager', 'Lời thoại.'],
        ['What does the man say about the tablet?', 'It is easy to use.', 'It is the most expensive.', 'It is very small.', 'It has no camera.', 'Lời thoại.'],
        ['What is included this week?', 'A free cover', 'A keyboard', 'A second battery', 'A discount on calls', 'Lời thoại.'],
      ],
    },
    {
      title: 'A canceled flight',
      lines: [
        'M: I have just had a message from the airline. My flight to Munich tomorrow has been canceled.',
        'W: Oh no. Your meeting with the supplier is at two.',
        'M: I know. Is there a train that would get me there in time?',
        'W: Let me check. There is one at six fifty that arrives at twelve thirty.',
        'M: Please book it, and ask the airline for a refund.',
      ],
      qs: [
        ['What has happened?', 'A flight was canceled.', 'A meeting was postponed.', 'A train was delayed.', 'A supplier called.', 'Lời thoại.'],
        ['How will the man travel to Munich?', 'By train', 'By car', 'By bus', 'By a later flight', 'Lời thoại.'],
        ['What does the man ask the woman to request?', 'A refund from the airline', 'A hotel room', 'A new meeting time', 'A taxi', 'Câu cuối.'],
      ],
    },
    {
      title: 'A new filing system',
      lines: [
        'W: I can never find anything in these cabinets. We need a better filing system.',
        'M: I agree. Most of these documents could be scanned and stored on the server.',
        'W: That would save a lot of space. How long would it take?',
        'M: With two people, about a month. We could hire students for the summer.',
        'W: Good idea. I will ask the director for approval.',
      ],
      qs: [
        ['What is the woman\'s complaint?', 'Documents are hard to find.', 'The server is slow.', 'The cabinets are locked.', 'There are too few staff.', 'Lời thoại.'],
        ['What does the man suggest?', 'Scanning the documents', 'Buying more cabinets', 'Throwing files away', 'Moving offices', 'Lời thoại.'],
        ['Who might do the work?', 'Students', 'The director', 'An outside company', 'The woman', 'Lời thoại.'],
      ],
    },
    {
      title: 'A late taxi',
      lines: [
        'M: Hello, I ordered a taxi for seven thirty, and it is now seven forty-five.',
        'W: I am very sorry, sir. The driver is stuck behind an accident on Bridge Road.',
        'M: I have a train at eight twenty.',
        'W: I am sending another car from a different direction. It will be with you in five minutes, and there will be no charge for the ride.',
      ],
      qs: [
        ['Why is the man calling?', 'His taxi has not arrived.', 'He left something in a taxi.', 'He wants to book a taxi.', 'He was overcharged.', 'Lời thoại.'],
        ['Why is the taxi late?', 'There was an accident.', 'The driver was ill.', 'The address was wrong.', 'The car broke down.', 'Lời thoại.'],
        ['What does the woman offer?', 'A free ride', 'A later train', 'A discount next time', 'A phone number', 'Câu cuối.'],
      ],
    },
    {
      title: 'Discussing a quarterly report',
      lines: [
        'W: Have you seen the draft of the quarterly report?',
        'M: Yes. The figures are fine, but it is forty pages long. Nobody will read it.',
        'W: Should we cut some sections?',
        'M: I would add a two-page summary at the beginning and move the detailed tables to the end.',
        'W: Good. I will write the summary today.',
      ],
      qs: [
        ['What is wrong with the report?', 'It is too long.', 'The figures are wrong.', 'It is late.', 'It has no tables.', 'Lời thoại.'],
        ['What does the man suggest adding?', 'A short summary', 'More tables', 'Photographs', 'A new section on sales', 'Lời thoại.'],
        ['What will the woman do today?', 'Write the summary', 'Print the report', 'Check the figures', 'Email the director', 'Câu cuối.'],
      ],
    },
    {
      title: 'A problem at a hotel checkout',
      lines: [
        'M: I would like to check out, please. Room three oh eight.',
        'W: Certainly. That is two nights and one dinner in the restaurant.',
        'M: I did not have dinner here. I ate out both evenings.',
        'W: Let me look. You are right. That charge belongs to room three eighteen. I do apologize.',
        'M: No problem. Could I have a printed receipt for my company?',
      ],
      qs: [
        ['What is the man doing?', 'Checking out', 'Checking in', 'Booking dinner', 'Changing rooms', 'Lời thoại.'],
        ['What mistake was made?', 'He was charged for another room\'s dinner.', 'He was charged for three nights.', 'His name was misspelled.', 'His key did not work.', 'Lời thoại.'],
        ['What does the man ask for?', 'A printed receipt', 'A refund in cash', 'A taxi', 'A late checkout', 'Câu cuối.'],
      ],
    },
    {
      title: 'Hiring for the holiday season',
      lines: [
        'W: We will need extra staff in the store for December. Last year we were overwhelmed.',
        'M: How many people?',
        'W: At least six. Ideally people who have worked in retail before.',
        'M: I will put an advertisement on the job website today. When should they start?',
        'W: On the twenty-fifth of November, so that we can train them for a week.',
      ],
      qs: [
        ['Why are extra staff needed?', 'December is very busy.', 'Several employees have left.', 'A new store is opening.', 'The store is open longer.', 'Lời thoại.'],
        ['What kind of people does the woman prefer?', 'People with retail experience', 'Students', 'Former managers', 'People who live nearby', 'Lời thoại.'],
        ['What will the man do today?', 'Post a job advertisement', 'Interview six people', 'Train the staff', 'Call last year\'s workers', 'Lời thoại.'],
      ],
    },
    {
      title: 'A broken display screen',
      lines: [
        'M: The screen in the reception area has gone black.',
        'W: It was working this morning. Is it plugged in?',
        'M: Yes, I checked. The power light is on, but there is no picture.',
        'W: It may be the cable from the computer. There is a spare one in my desk drawer.',
        'M: I will try that. If it does not work, I will call the supplier.',
      ],
      qs: [
        ['What is the problem?', 'A screen shows no picture.', 'The power is off.', 'A computer is missing.', 'The reception is closed.', 'Lời thoại.'],
        ['What does the woman think may be the cause?', 'A cable', 'The power supply', 'The light', 'The supplier', 'Lời thoại.'],
        ['Where is the spare cable?', 'In the woman\'s desk drawer', 'In the storeroom', 'At reception', 'With the supplier', 'Lời thoại.'],
      ],
    },
    {
      title: 'A customer orders a sign',
      lines: [
        'W: I would like a sign for my new flower shop. Something simple, with the name in green.',
        'M: What size do you need?',
        'W: About two meters wide. It will go above the door.',
        'M: We can make it in wood or in metal. Wood looks warmer, but metal lasts longer outdoors.',
        'W: Metal, then. When could it be ready?',
        'M: In ten days. I will email you a design tomorrow.',
      ],
      qs: [
        ['What kind of business does the woman own?', 'A flower shop', 'A sign company', 'A restaurant', 'A clothing store', 'Lời thoại.'],
        ['Why does the woman choose metal?', 'It lasts longer outdoors.', 'It is cheaper.', 'It looks warmer.', 'It is lighter.', 'Lời thoại.'],
        ['What will the man do tomorrow?', 'Send a design', 'Deliver the sign', 'Visit the shop', 'Send a bill', 'Câu cuối.'],
      ],
    },
    {
      title: 'Organizing a conference call',
      lines: [
        'M: We need to arrange a call with the teams in Tokyo and New York. What time works for everyone?',
        'W: That is difficult. When it is morning in New York, it is late evening in Tokyo.',
        'M: What about eight a.m. New York time?',
        'W: That is ten p.m. in Tokyo. They agreed to that last time.',
        'M: Fine. Please send the invitation, and include the agenda.',
      ],
      qs: [
        ['What are the speakers arranging?', 'A conference call', 'A business trip', 'A training course', 'A product launch', 'Lời thoại.'],
        ['What makes it difficult?', 'The time difference', 'The language', 'The cost', 'The technology', 'Lời thoại.'],
        ['What should the woman include in the invitation?', 'The agenda', 'A map', 'A price list', 'A contract', 'Câu cuối.'],
      ],
    },
    {
      title: 'Choosing a company car',
      lines: [
        'W: I need to choose a car for our sales representatives. They drive long distances, so fuel costs matter.',
        'M: Here are the four models the dealer offers. Do you need a large trunk?',
        'W: Yes, at least four hundred liters, for the product samples.',
        'M: Then among those, choose the one that uses the least fuel.',
        'W: Agreed. I will order six of them.',
      ],
      graphic: ['Company car options', 'Model | Trunk (liters) | Fuel (liters per 100 km)\nCity | 300 | 4.5\nTourer | 450 | 5.8\nEstate | 520 | 5.2\nCruiser | 480 | 6.9'],
      qs: [
        ['Who will use the cars?', 'Sales representatives', 'Directors', 'Delivery drivers', 'Customers', 'Lời thoại.'],
        ['Why is a large trunk needed?', 'To carry product samples', 'To carry luggage', 'To carry tools', 'To carry passengers', 'Lời thoại.'],
        ['Look at the graphic. Which model will the woman order?', 'Estate', 'City', 'Tourer', 'Cruiser', 'Cốp ≥ 400 lít và ít hao xăng nhất: Estate (5.2).'],
      ],
    },
  ],
  p4: [
    {
      title: 'Announcement at a conference center',
      lines: [
        'M: Ladies and gentlemen, lunch is now being served in the Riverside Restaurant on the ground floor.',
        'M: Please show your conference badge at the door. Vegetarian dishes are on the table to the left.',
        'M: The afternoon sessions will begin at one forty-five. Please be in your seats five minutes before.',
      ],
      qs: [
        ['Where is lunch being served?', 'In a restaurant on the ground floor', 'In the conference hall', 'On the terrace', 'In the lobby', 'Thông báo.'],
        ['What must attendees show?', 'Their conference badge', 'A lunch ticket', 'A room key', 'A passport', 'Thông báo.'],
        ['When do the afternoon sessions start?', 'At 1:45', 'At 1:00', 'At 2:15', 'At 1:40', 'Thông báo.'],
      ],
    },
    {
      title: 'Voicemail from a landlord',
      lines: [
        'W: Hello, Mr. Schmidt. This is Carol Reed from Reed Properties.',
        'W: I am calling to let you know that the office you looked at on Queen Street is still available. The owner has agreed to reduce the rent to two thousand dollars a month if you sign a three-year lease.',
        'W: Two other companies are interested, so I would need your answer by Thursday.',
      ],
      qs: [
        ['What is the call about?', 'An office for rent', 'A house for sale', 'A repair', 'A parking space', 'Lời nhắn.'],
        ['What has the owner agreed to do?', 'Lower the rent', 'Paint the office', 'Shorten the lease', 'Add furniture', 'Lời nhắn.'],
        ['Why does the speaker need an answer by Thursday?', 'Other companies are interested.', 'She is going on vacation.', 'The rent will rise.', 'The building is closing.', 'Câu cuối.'],
      ],
    },
    {
      title: 'Advertisement for a meal delivery service',
      lines: [
        'M: No time to cook? With DinnerBox, everything you need for a healthy meal arrives at your door.',
        'M: Each box contains fresh ingredients and a simple recipe card. Most meals take less than thirty minutes to prepare.',
        'M: Choose from twenty recipes each week, including vegetarian options. Try your first box for half price at dinnerbox.example.',
      ],
      qs: [
        ['What does each box contain?', 'Ingredients and a recipe', 'A cooked meal', 'Kitchen tools', 'A cookbook', 'Quảng cáo.'],
        ['How long do most meals take to prepare?', 'Under thirty minutes', 'One hour', 'Five minutes', 'Twenty hours', 'Quảng cáo.'],
        ['What is the offer for new customers?', 'A half-price first box', 'A free week', 'A free pan', 'Free delivery forever', 'Quảng cáo.'],
      ],
    },
    {
      title: 'Talk to factory visitors',
      lines: [
        'W: Good afternoon, and welcome to Sunrise Bakery. We bake forty thousand loaves of bread here every night.',
        'W: Before we go in, please put on the white coat and hat you were given, and remove any jewelry. This is for food safety.',
        'W: The tour lasts forty minutes. At the end, each of you will receive a fresh loaf to take home.',
      ],
      qs: [
        ['What does the factory make?', 'Bread', 'Cakes', 'Clothing', 'Jewelry', 'Lời nói.'],
        ['Why must visitors remove jewelry?', 'For food safety', 'To prevent theft', 'Because of the heat', 'To take photographs', 'Lời nói.'],
        ['What will visitors receive?', 'A loaf of bread', 'A white coat', 'A recipe', 'A discount card', 'Câu cuối.'],
      ],
    },
    {
      title: 'Recorded message for a software company',
      lines: [
        'M: Thank you for calling TechNova support.',
        'M: If you are calling about the problem with logging in this morning, our engineers are aware of it and expect to fix it within an hour. You do not need to report it.',
        'M: For all other questions, please stay on the line. Your call may be recorded for training purposes.',
      ],
      qs: [
        ['What problem is mentioned?', 'Customers cannot log in.', 'The website is slow.', 'Bills are incorrect.', 'Calls are being dropped.', 'Thông báo.'],
        ['When is the problem expected to be fixed?', 'Within an hour', 'Tomorrow', 'Next week', 'In a few minutes', 'Thông báo.'],
        ['What are callers with other questions asked to do?', 'Stay on the line', 'Call back later', 'Send an email', 'Press one', 'Thông báo.'],
      ],
    },
    {
      title: 'Excerpt from a board meeting',
      lines: [
        'W: The next item is our plan to open a store in Singapore.',
        'W: We have found a suitable location in a shopping center near the business district. The rent is high, but the number of visitors is three times that of our busiest store here.',
        'W: I am asking the board to approve a budget of eight hundred thousand dollars. If you agree today, we could open in October.',
      ],
      qs: [
        ['What is the speaker proposing?', 'Opening a store abroad', 'Closing a store', 'Raising prices', 'Hiring a new director', 'Lời nói.'],
        ['What is the advantage of the location?', 'It has many visitors.', 'The rent is low.', 'It is near the airport.', 'It has free parking.', 'Lời nói.'],
        ['When could the store open?', 'In October', 'Today', 'Next year', 'In three months exactly', 'Câu cuối.'],
      ],
    },
    {
      title: 'News report on a city cycling plan',
      lines: [
        'M: The city council has approved a plan to build fifty kilometers of new cycle lanes over the next three years.',
        'M: The first lanes will connect the university with the city center. The council hopes to double the number of people who cycle to work.',
        'M: Some shop owners have complained that parking spaces will be lost. The council says it will build a new car park near the station.',
      ],
      qs: [
        ['What has the council approved?', 'New cycle lanes', 'A new university', 'A bus station', 'A shopping center', 'Bản tin.'],
        ['Where will the first lanes be built?', 'Between the university and the center', 'Around the station', 'In the suburbs', 'Along the river', 'Bản tin.'],
        ['Why are some shop owners unhappy?', 'Parking spaces will be lost.', 'Taxes will rise.', 'Streets will be closed.', 'Cyclists are noisy.', 'Bản tin.'],
      ],
    },
    {
      title: 'Message about interview rooms',
      lines: [
        'W: Hi, Tom. It is Aisha from Human Resources. I am confirming the rooms for tomorrow\'s interviews.',
        'W: The candidate for the manager position needs a room with a screen for her presentation, so I have put her in the only room that has one. The other three interviews are in the rooms shown on the list.',
        'W: Please meet each candidate at reception.',
      ],
      graphic: ['Interview rooms', 'Room | Seats | Equipment\nRoom 1 | 4 | None\nRoom 2 | 6 | Whiteboard\nRoom 3 | 8 | Screen and whiteboard\nRoom 4 | 4 | Telephone'],
      qs: [
        ['What will take place tomorrow?', 'Job interviews', 'A training course', 'A board meeting', 'A staff party', 'Lời nhắn.'],
        ['Look at the graphic. Where will the candidate for the manager position be interviewed?', 'Room 3', 'Room 1', 'Room 2', 'Room 4', 'Phòng duy nhất có màn hình.'],
        ['What is the listener asked to do?', 'Meet the candidates at reception', 'Prepare the presentation', 'Book the rooms', 'Call the candidates', 'Câu cuối.'],
      ],
    },
  ],
};
