/**
 * DỮ LIỆU TỪ VỰNG – chủ đề "daily"
 * ------------------------------------------------------------------
 * FILE NÀY ĐƯỢC SINH TỰ ĐỘNG bởi tools/build-vocab.mjs – KHÔNG sửa tay.
 * Muốn thêm/sửa từ: chỉnh tools/vocab-src/daily.txt rồi chạy "npm run build:vocab".
 * Mỗi từ là một mảng: [từ, loại từ, phiên âm IPA, nghĩa, câu ví dụ EN, câu ví dụ VI, trình độ CEFR].
 */
import { TopicVocabData } from '../../models/vocab.model';

export const VOCAB: TopicVocabData = {
 "lessons": [
  {
   "icon": "👨‍👩‍👧",
   "vi": "Gia đình",
   "en": "Family",
   "words": [
    [
     "mother",
     "n",
     "ˈmʌðər",
     "mẹ",
     "My mother cooks dinner every evening.",
     "Mẹ tôi nấu bữa tối mỗi buổi chiều.",
     "A1"
    ],
    [
     "father",
     "n",
     "ˈfɑːðər",
     "bố, cha",
     "My father drives me to school.",
     "Bố tôi chở tôi đến trường.",
     "A1"
    ],
    [
     "parents",
     "n",
     "ˈperənts",
     "bố mẹ",
     "My parents live in Hanoi.",
     "Bố mẹ tôi sống ở Hà Nội.",
     "A1"
    ],
    [
     "brother",
     "n",
     "ˈbrʌðər",
     "anh/em trai",
     "I have one older brother.",
     "Tôi có một người anh trai.",
     "A1"
    ],
    [
     "sister",
     "n",
     "ˈsɪstər",
     "chị/em gái",
     "My sister loves painting.",
     "Chị gái tôi rất thích vẽ tranh.",
     "A1"
    ],
    [
     "grandmother",
     "n",
     "ˈɡrændˌmʌðər",
     "bà",
     "My grandmother tells us old stories.",
     "Bà tôi kể cho chúng tôi nghe những câu chuyện xưa.",
     "A1"
    ],
    [
     "grandfather",
     "n",
     "ˈɡrændˌfɑːðər",
     "ông",
     "My grandfather grows vegetables.",
     "Ông tôi trồng rau.",
     "A1"
    ],
    [
     "uncle",
     "n",
     "ˈʌŋkəl",
     "chú, bác, cậu",
     "My uncle works in a bank.",
     "Chú tôi làm việc ở ngân hàng.",
     "A1"
    ],
    [
     "aunt",
     "n",
     "ænt",
     "cô, dì, thím",
     "My aunt visits us every summer.",
     "Cô tôi đến thăm chúng tôi mỗi mùa hè.",
     "A1"
    ],
    [
     "cousin",
     "n",
     "ˈkʌzən",
     "anh/chị/em họ",
     "My cousin is the same age as me.",
     "Anh họ tôi bằng tuổi tôi.",
     "A1"
    ],
    [
     "husband",
     "n",
     "ˈhʌzbənd",
     "chồng",
     "Her husband is a doctor.",
     "Chồng cô ấy là bác sĩ.",
     "A1"
    ],
    [
     "wife",
     "n",
     "waɪf",
     "vợ",
     "His wife teaches English.",
     "Vợ anh ấy dạy tiếng Anh.",
     "A1"
    ]
   ]
  },
  {
   "icon": "🤝",
   "vi": "Bạn bè và các mối quan hệ",
   "en": "Friends and Relationships",
   "words": [
    [
     "friend",
     "n",
     "frend",
     "bạn bè",
     "She is my best friend.",
     "Cô ấy là bạn thân nhất của tôi.",
     "A1"
    ],
    [
     "neighbor",
     "n",
     "ˈneɪbər",
     "hàng xóm",
     "Our neighbor is very kind.",
     "Hàng xóm của chúng tôi rất tốt bụng.",
     "A1"
    ],
    [
     "classmate",
     "n",
     "ˈklæˌsmeɪt",
     "bạn cùng lớp",
     "My classmate lent me a pen.",
     "Bạn cùng lớp cho tôi mượn cây bút.",
     "A1"
    ],
    [
     "roommate",
     "n",
     "ˈruːˌmeɪt",
     "bạn cùng phòng",
     "My roommate snores at night.",
     "Bạn cùng phòng của tôi ngáy vào ban đêm.",
     "B2"
    ],
    [
     "colleague",
     "n",
     "ˈkɑːliɡ",
     "đồng nghiệp",
     "I have lunch with my colleagues.",
     "Tôi ăn trưa cùng các đồng nghiệp.",
     "B2"
    ],
    [
     "boyfriend",
     "n",
     "ˈbɔɪˌfrend",
     "bạn trai",
     "Her boyfriend gave her flowers.",
     "Bạn trai cô ấy tặng hoa cho cô ấy.",
     "A1"
    ],
    [
     "girlfriend",
     "n",
     "ˈɡɜːrlˌfrend",
     "bạn gái",
     "His girlfriend loves music.",
     "Bạn gái anh ấy yêu âm nhạc.",
     "A1"
    ],
    [
     "partner",
     "n",
     "ˈpɑːrtnər",
     "người bạn đời, đối tác",
     "She travels with her partner.",
     "Cô ấy đi du lịch cùng người bạn đời.",
     "A1"
    ],
    [
     "stranger",
     "n",
     "ˈstreɪndʒər",
     "người lạ",
     "Do not talk to strangers.",
     "Đừng nói chuyện với người lạ.",
     "A2"
    ],
    [
     "guest",
     "n",
     "ɡest",
     "khách",
     "We have a guest tonight.",
     "Tối nay chúng tôi có khách.",
     "A1"
    ],
    [
     "host",
     "n",
     "hoʊst",
     "chủ nhà",
     "The host welcomed everyone warmly.",
     "Chủ nhà chào đón mọi người thật nồng nhiệt.",
     "A2"
    ],
    [
     "introduce",
     "v",
     "ˌɪntrəˈduːs",
     "giới thiệu",
     "Let me introduce my sister.",
     "Để tôi giới thiệu chị gái tôi.",
     "A1"
    ]
   ]
  },
  {
   "icon": "🧑",
   "vi": "Mô tả ngoại hình",
   "en": "Describing People",
   "words": [
    [
     "tall",
     "adj",
     "tɔːl",
     "cao",
     "My brother is very tall.",
     "Anh trai tôi rất cao.",
     "A1"
    ],
    [
     "short",
     "adj",
     "ʃɔːrt",
     "thấp, ngắn",
     "She has short black hair.",
     "Cô ấy có mái tóc đen ngắn.",
     "A1"
    ],
    [
     "slim",
     "adj",
     "slɪm",
     "mảnh mai",
     "The dancer is slim and graceful.",
     "Vũ công mảnh mai và duyên dáng.",
     "A2"
    ],
    [
     "handsome",
     "adj",
     "ˈhænsəm",
     "đẹp trai",
     "He is a handsome young man.",
     "Anh ấy là một chàng trai đẹp trai.",
     "A1"
    ],
    [
     "beautiful",
     "adj",
     "ˈbjuːtəfəl",
     "xinh đẹp",
     "What a beautiful smile!",
     "Nụ cười thật xinh đẹp!",
     "A1"
    ],
    [
     "pretty",
     "adj",
     "ˈprɪti",
     "xinh xắn",
     "The little girl is pretty.",
     "Cô bé rất xinh xắn.",
     "A1"
    ],
    [
     "young",
     "adj",
     "jʌŋ",
     "trẻ",
     "My teacher is young and funny.",
     "Cô giáo tôi trẻ và vui tính.",
     "A1"
    ],
    [
     "elderly",
     "adj",
     "ˈeldərli",
     "lớn tuổi",
     "An elderly man sat on the bench.",
     "Một cụ ông ngồi trên ghế dài.",
     "A2"
    ],
    [
     "curly",
     "adj",
     "ˈkɜːrli",
     "xoăn",
     "She has long curly hair.",
     "Cô ấy có mái tóc dài xoăn.",
     "B1"
    ],
    [
     "straight",
     "adj",
     "streɪt",
     "thẳng",
     "He has straight brown hair.",
     "Anh ấy có mái tóc nâu thẳng.",
     "A1"
    ],
    [
     "bald",
     "adj",
     "bɔːld",
     "hói",
     "My uncle is bald.",
     "Chú tôi bị hói.",
     "B1"
    ],
    [
     "beard",
     "n",
     "bɪrd",
     "râu",
     "My grandfather has a white beard.",
     "Ông tôi có bộ râu trắng.",
     "B1"
    ]
   ]
  },
  {
   "icon": "😀",
   "vi": "Tính cách",
   "en": "Personality",
   "words": [
    [
     "kind",
     "adj",
     "kaɪnd",
     "tốt bụng",
     "A kind boy helped the old lady.",
     "Một cậu bé tốt bụng đã giúp bà cụ.",
     "A1"
    ],
    [
     "friendly",
     "adj",
     "ˈfrendli",
     "thân thiện",
     "The staff are very friendly.",
     "Nhân viên rất thân thiện.",
     "A2"
    ],
    [
     "funny",
     "adj",
     "ˈfʌni",
     "hài hước",
     "My dad tells funny jokes.",
     "Bố tôi kể những câu chuyện cười hài hước.",
     "A1"
    ],
    [
     "shy",
     "adj",
     "ʃaɪ",
     "nhút nhát, e thẹn",
     "He is shy with new people.",
     "Cậu ấy e thẹn với người mới.",
     "A1"
    ],
    [
     "polite",
     "adj",
     "pəˈlaɪt",
     "lịch sự",
     "Please be polite to the guests.",
     "Hãy lịch sự với khách nhé.",
     "A2"
    ],
    [
     "honest",
     "adj",
     "ˈɑːnəst",
     "trung thực",
     "She is an honest girl.",
     "Cô ấy là một cô gái trung thực.",
     "B1"
    ],
    [
     "lazy",
     "adj",
     "ˈleɪzi",
     "lười biếng",
     "I feel lazy on Sunday mornings.",
     "Tôi thấy lười vào sáng Chủ nhật.",
     "A1"
    ],
    [
     "hardworking",
     "adj",
     "ˈhɑːrˌdwɜːrkɪŋ",
     "chăm chỉ",
     "My sister is very hardworking.",
     "Chị tôi rất chăm chỉ.",
     "B1"
    ],
    [
     "generous",
     "adj",
     "ˈdʒenərəs",
     "hào phóng",
     "He is generous with his time.",
     "Anh ấy hào phóng với thời gian của mình.",
     "B1"
    ],
    [
     "patient",
     "adj",
     "ˈpeɪʃənt",
     "kiên nhẫn",
     "A good teacher is patient.",
     "Một giáo viên giỏi thì kiên nhẫn.",
     "A2"
    ],
    [
     "brave",
     "adj",
     "breɪv",
     "dũng cảm",
     "The brave boy saved the puppy.",
     "Cậu bé dũng cảm đã cứu chú cún.",
     "A2"
    ],
    [
     "curious",
     "adj",
     "ˈkjʊriəs",
     "tò mò, ham hiểu biết",
     "Children are curious about everything.",
     "Trẻ con tò mò về mọi thứ.",
     "B1"
    ]
   ]
  },
  {
   "icon": "😊",
   "vi": "Cảm xúc",
   "en": "Feelings and Emotions",
   "words": [
    [
     "happy",
     "adj",
     "ˈhæpi",
     "vui vẻ, hạnh phúc",
     "I am happy to see you.",
     "Tôi vui khi gặp bạn.",
     "A1"
    ],
    [
     "sad",
     "adj",
     "sæd",
     "buồn",
     "She felt sad after the movie.",
     "Cô ấy thấy buồn sau bộ phim.",
     "A1"
    ],
    [
     "angry",
     "adj",
     "ˈæŋɡri",
     "tức giận",
     "Dad was angry about the mess.",
     "Bố tức giận vì sự bừa bộn.",
     "A1"
    ],
    [
     "excited",
     "adj",
     "ɪkˈsaɪtəd",
     "hào hứng",
     "We are excited about the trip.",
     "Chúng tôi hào hứng về chuyến đi.",
     "A1"
    ],
    [
     "nervous",
     "adj",
     "ˈnɜːrvəs",
     "lo lắng, hồi hộp",
     "I feel nervous before exams.",
     "Tôi thấy hồi hộp trước kỳ thi.",
     "A2"
    ],
    [
     "tired",
     "adj",
     "ˈtaɪərd",
     "mệt mỏi",
     "I am tired after work.",
     "Tôi mệt sau giờ làm việc.",
     "A1"
    ],
    [
     "bored",
     "adj",
     "bɔːrd",
     "chán",
     "He was bored in the meeting.",
     "Anh ấy chán trong buổi họp.",
     "A2"
    ],
    [
     "surprised",
     "adj",
     "sərˈpraɪzd",
     "ngạc nhiên",
     "She was surprised by the gift.",
     "Cô ấy ngạc nhiên vì món quà.",
     "A2"
    ],
    [
     "proud",
     "adj",
     "praʊd",
     "tự hào",
     "I am proud of my team.",
     "Tôi tự hào về đội của mình.",
     "B1"
    ],
    [
     "lonely",
     "adj",
     "ˈloʊnli",
     "cô đơn",
     "He felt lonely in the big city.",
     "Anh ấy thấy cô đơn ở thành phố lớn.",
     "A1"
    ],
    [
     "worried",
     "adj",
     "ˈwɜːrid",
     "lo âu",
     "Mom is worried about my health.",
     "Mẹ lo lắng về sức khỏe của tôi.",
     "A2"
    ],
    [
     "relaxed",
     "adj",
     "rɪˈlækst",
     "thư giãn",
     "I feel relaxed at the beach.",
     "Tôi thấy thư giãn ở bãi biển.",
     "A2"
    ]
   ]
  },
  {
   "icon": "🏠",
   "vi": "Ngôi nhà",
   "en": "The House",
   "words": [
    [
     "house",
     "n",
     "haʊs",
     "ngôi nhà",
     "We live in a small house.",
     "Chúng tôi sống trong một ngôi nhà nhỏ.",
     "A1"
    ],
    [
     "apartment",
     "n",
     "əˈpɑːrtmənt",
     "căn hộ",
     "Their apartment has two bedrooms.",
     "Căn hộ của họ có hai phòng ngủ.",
     "A2"
    ],
    [
     "bedroom",
     "n",
     "ˈbeˌdruːm",
     "phòng ngủ",
     "My bedroom is on the second floor.",
     "Phòng ngủ của tôi ở tầng hai.",
     "A1"
    ],
    [
     "bathroom",
     "n",
     "ˈbæˌθruːm",
     "phòng tắm",
     "The bathroom is next to the kitchen.",
     "Phòng tắm nằm cạnh nhà bếp.",
     "A1"
    ],
    [
     "kitchen",
     "n",
     "ˈkɪtʃən",
     "nhà bếp",
     "Mom is in the kitchen.",
     "Mẹ đang ở trong bếp.",
     "A1"
    ],
    [
     "living room",
     "n",
     "ˈlɪvɪŋ ruːm",
     "phòng khách",
     "We watch TV in the living room.",
     "Chúng tôi xem TV trong phòng khách.",
     "A1"
    ],
    [
     "garden",
     "n",
     "ˈɡɑːrdən",
     "khu vườn",
     "The garden is full of flowers.",
     "Khu vườn đầy hoa.",
     "A1"
    ],
    [
     "garage",
     "n",
     "ɡərˈɑːʒ",
     "nhà để xe",
     "The car is in the garage.",
     "Xe ô tô ở trong nhà để xe.",
     "A2"
    ],
    [
     "balcony",
     "n",
     "ˈbælkəni",
     "ban công",
     "I drink coffee on the balcony.",
     "Tôi uống cà phê ở ban công.",
     "A2"
    ],
    [
     "roof",
     "n",
     "ruːf",
     "mái nhà",
     "Birds sit on the roof.",
     "Chim đậu trên mái nhà.",
     "A2"
    ],
    [
     "stairs",
     "n",
     "sterz",
     "cầu thang",
     "Be careful on the stairs.",
     "Hãy cẩn thận trên cầu thang.",
     "A2"
    ],
    [
     "floor",
     "n",
     "flɔːr",
     "sàn nhà, tầng",
     "The floor is clean.",
     "Sàn nhà sạch sẽ.",
     "A1"
    ]
   ]
  },
  {
   "icon": "🛋️",
   "vi": "Đồ nội thất",
   "en": "Furniture",
   "words": [
    [
     "sofa",
     "n",
     "ˈsoʊfə",
     "ghế sô-pha",
     "The cat sleeps on the sofa.",
     "Con mèo ngủ trên ghế sô-pha.",
     "A1"
    ],
    [
     "table",
     "n",
     "ˈteɪbəl",
     "cái bàn",
     "Put the books on the table.",
     "Đặt sách lên bàn.",
     "A1"
    ],
    [
     "chair",
     "n",
     "tʃer",
     "cái ghế",
     "Please sit on this chair.",
     "Xin hãy ngồi lên chiếc ghế này.",
     "A1"
    ],
    [
     "bed",
     "n",
     "bed",
     "cái giường",
     "I make my bed every morning.",
     "Tôi dọn giường mỗi sáng.",
     "A1"
    ],
    [
     "desk",
     "n",
     "desk",
     "bàn làm việc",
     "My desk is near the window.",
     "Bàn làm việc của tôi ở gần cửa sổ.",
     "A1"
    ],
    [
     "shelf",
     "n",
     "ʃelf",
     "kệ, giá sách",
     "The shelf is full of books.",
     "Cái kệ đầy sách.",
     "A1"
    ],
    [
     "wardrobe",
     "n",
     "ˈwɔːrˌdroʊb",
     "tủ quần áo",
     "My clothes are in the wardrobe.",
     "Quần áo của tôi ở trong tủ.",
     "B1"
    ],
    [
     "curtain",
     "n",
     "ˈkɜːrtən",
     "rèm cửa",
     "Please close the curtains.",
     "Làm ơn kéo rèm lại.",
     "B1"
    ],
    [
     "carpet",
     "n",
     "ˈkɑːrpət",
     "thảm",
     "The carpet is soft and warm.",
     "Tấm thảm mềm và ấm.",
     "B1"
    ],
    [
     "lamp",
     "n",
     "læmp",
     "đèn",
     "Turn on the lamp, please.",
     "Làm ơn bật đèn lên.",
     "A2"
    ],
    [
     "mirror",
     "n",
     "ˈmɪrər",
     "gương",
     "She looked in the mirror.",
     "Cô ấy nhìn vào gương.",
     "A2"
    ],
    [
     "pillow",
     "n",
     "ˈpɪloʊ",
     "gối",
     "I need a softer pillow.",
     "Tôi cần một cái gối mềm hơn.",
     "B1"
    ]
   ]
  },
  {
   "icon": "🧹",
   "vi": "Việc nhà",
   "en": "Household Chores",
   "words": [
    [
     "clean",
     "v",
     "kliːn",
     "dọn dẹp, lau chùi",
     "I clean my room on Saturdays.",
     "Tôi dọn phòng vào các ngày thứ Bảy.",
     "A1"
    ],
    [
     "wash",
     "v",
     "wɑːʃ",
     "rửa, giặt",
     "Please wash the dishes.",
     "Làm ơn rửa bát đĩa.",
     "A1"
    ],
    [
     "sweep",
     "v",
     "swiːp",
     "quét",
     "He sweeps the floor after dinner.",
     "Anh ấy quét nhà sau bữa tối.",
     "B2"
    ],
    [
     "mop",
     "v",
     "mɑːp",
     "lau nhà",
     "I mop the kitchen floor.",
     "Tôi lau sàn nhà bếp.",
     "B1"
    ],
    [
     "vacuum",
     "v",
     "ˈvækjuːm",
     "hút bụi",
     "We vacuum the carpet weekly.",
     "Chúng tôi hút bụi tấm thảm mỗi tuần.",
     "B1"
    ],
    [
     "iron",
     "v",
     "ˈaɪərn",
     "là (ủi) quần áo",
     "She irons her shirt in the morning.",
     "Cô ấy ủi áo sơ mi vào buổi sáng.",
     "B1"
    ],
    [
     "laundry",
     "n",
     "ˈlɔːndri",
     "đồ giặt",
     "I do the laundry on Sundays.",
     "Tôi giặt đồ vào Chủ nhật.",
     "B2"
    ],
    [
     "trash",
     "n",
     "træʃ",
     "rác",
     "Take out the trash, please.",
     "Làm ơn đem rác đi đổ.",
     "B1"
    ],
    [
     "dust",
     "n",
     "dʌst",
     "bụi",
     "There is dust on the shelf.",
     "Có bụi trên kệ.",
     "A2"
    ],
    [
     "tidy",
     "v",
     "ˈtaɪdi",
     "dọn gọn gàng",
     "Tidy your desk before you leave.",
     "Hãy dọn gọn bàn trước khi đi.",
     "A2"
    ],
    [
     "water",
     "v",
     "ˈwɔːtər",
     "tưới nước",
     "I water the plants every day.",
     "Tôi tưới cây mỗi ngày.",
     "A1"
    ],
    [
     "repair",
     "v",
     "rɪˈper",
     "sửa chữa",
     "Dad will repair the broken chair.",
     "Bố sẽ sửa cái ghế hỏng.",
     "A2"
    ]
   ]
  },
  {
   "icon": "⏰",
   "vi": "Thói quen hằng ngày",
   "en": "Daily Routine",
   "words": [
    [
     "wake up",
     "phr",
     "weɪk ʌp",
     "thức dậy",
     "I wake up at six o'clock.",
     "Tôi thức dậy lúc sáu giờ.",
     "A1"
    ],
    [
     "get up",
     "phr",
     "ɡet ʌp",
     "ngồi dậy, rời giường",
     "He gets up early on weekdays.",
     "Anh ấy dậy sớm vào các ngày trong tuần.",
     "A1"
    ],
    [
     "brush",
     "v",
     "brʌʃ",
     "đánh (răng), chải",
     "I brush my teeth twice a day.",
     "Tôi đánh răng hai lần một ngày.",
     "A1"
    ],
    [
     "take a shower",
     "phr",
     "teɪk ə ˈʃaʊər",
     "tắm vòi sen",
     "She takes a shower before breakfast.",
     "Cô ấy tắm trước bữa sáng.",
     "A1"
    ],
    [
     "get dressed",
     "phr",
     "ɡet drest",
     "mặc quần áo",
     "Get dressed quickly, please.",
     "Hãy mặc quần áo nhanh lên nhé.",
     "A2"
    ],
    [
     "have breakfast",
     "phr",
     "hæv ˈbrekfəst",
     "ăn sáng",
     "We have breakfast together.",
     "Chúng tôi ăn sáng cùng nhau.",
     "A1"
    ],
    [
     "commute",
     "v",
     "kəˈmjuːt",
     "đi làm hằng ngày",
     "I commute by bus.",
     "Tôi đi làm bằng xe buýt.",
     "B2"
    ],
    [
     "go to bed",
     "phr",
     "ɡoʊ tuː bed",
     "đi ngủ",
     "I go to bed at ten.",
     "Tôi đi ngủ lúc mười giờ.",
     "A1"
    ],
    [
     "fall asleep",
     "phr",
     "fɔːl əˈsliːp",
     "ngủ thiếp đi",
     "The baby fell asleep quickly.",
     "Em bé ngủ thiếp đi rất nhanh.",
     "A2"
    ],
    [
     "alarm clock",
     "n",
     "əˈlɑːrm klɑːk",
     "đồng hồ báo thức",
     "My alarm clock rings at six.",
     "Đồng hồ báo thức của tôi reo lúc sáu giờ.",
     "A2"
    ],
    [
     "routine",
     "n",
     "ruːˈtiːn",
     "thói quen hằng ngày",
     "Exercise is part of my routine.",
     "Tập thể dục là một phần trong thói quen của tôi.",
     "B1"
    ],
    [
     "schedule",
     "n",
     "ˈskedʒʊl",
     "lịch trình",
     "My schedule is busy today.",
     "Lịch trình của tôi hôm nay rất bận.",
     "A2"
    ]
   ]
  },
  {
   "icon": "📅",
   "vi": "Thời gian và lịch",
   "en": "Time and Calendar",
   "words": [
    [
     "morning",
     "n",
     "ˈmɔːrnɪŋ",
     "buổi sáng",
     "I read the news in the morning.",
     "Tôi đọc tin tức vào buổi sáng.",
     "A1"
    ],
    [
     "afternoon",
     "n",
     "ˌæftərˈnuːn",
     "buổi chiều",
     "We play football in the afternoon.",
     "Chúng tôi chơi bóng đá vào buổi chiều.",
     "A1"
    ],
    [
     "evening",
     "n",
     "ˈiːvnɪŋ",
     "buổi tối",
     "The family eats together in the evening.",
     "Cả nhà ăn cùng nhau vào buổi tối.",
     "A1"
    ],
    [
     "midnight",
     "n",
     "ˈmɪdˌnaɪt",
     "nửa đêm",
     "The clock struck midnight.",
     "Đồng hồ điểm nửa đêm.",
     "A2"
    ],
    [
     "today",
     "n",
     "təˈdeɪ",
     "hôm nay",
     "Today is a special day.",
     "Hôm nay là một ngày đặc biệt.",
     "A1"
    ],
    [
     "tomorrow",
     "n",
     "təˈmɑːˌroʊ",
     "ngày mai",
     "See you tomorrow!",
     "Hẹn gặp bạn ngày mai!",
     "A1"
    ],
    [
     "yesterday",
     "n",
     "ˈjestərˌdeɪ",
     "hôm qua",
     "I stayed home yesterday.",
     "Hôm qua tôi ở nhà.",
     "A1"
    ],
    [
     "weekend",
     "n",
     "ˈwiːˌkend",
     "cuối tuần",
     "What do you do at the weekend?",
     "Bạn làm gì vào cuối tuần?",
     "A1"
    ],
    [
     "Monday",
     "n",
     "ˈmʌndi",
     "thứ Hai",
     "I have English class on Monday.",
     "Tôi có lớp tiếng Anh vào thứ Hai.",
     "A1"
    ],
    [
     "Friday",
     "n",
     "ˈfraɪdi",
     "thứ Sáu",
     "We go out on Friday night.",
     "Chúng tôi đi chơi vào tối thứ Sáu.",
     "A1"
    ],
    [
     "month",
     "n",
     "mʌnθ",
     "tháng",
     "There are twelve months in a year.",
     "Một năm có mười hai tháng.",
     "A1"
    ],
    [
     "January",
     "n",
     "ˈdʒænjuːˌeri",
     "tháng Một",
     "It is cold in January.",
     "Tháng Một trời lạnh.",
     "A1"
    ]
   ]
  },
  {
   "icon": "☀️",
   "vi": "Thời tiết",
   "en": "Weather",
   "words": [
    [
     "weather",
     "n",
     "ˈweðər",
     "thời tiết",
     "The weather is nice today.",
     "Hôm nay thời tiết đẹp.",
     "A1"
    ],
    [
     "sunny",
     "adj",
     "ˈsʌni",
     "có nắng",
     "It is sunny and warm.",
     "Trời nắng và ấm.",
     "A1"
    ],
    [
     "cloudy",
     "adj",
     "ˈklaʊdi",
     "nhiều mây",
     "The sky is cloudy this morning.",
     "Sáng nay trời nhiều mây.",
     "A1"
    ],
    [
     "rainy",
     "adj",
     "ˈreɪni",
     "có mưa",
     "Bring an umbrella on rainy days.",
     "Hãy mang ô vào những ngày mưa.",
     "A1"
    ],
    [
     "windy",
     "adj",
     "ˈwɪndi",
     "có gió",
     "It is very windy at the beach.",
     "Ở bãi biển gió rất lớn.",
     "A2"
    ],
    [
     "snow",
     "n",
     "snoʊ",
     "tuyết",
     "Children play in the snow.",
     "Trẻ em chơi trong tuyết.",
     "A1"
    ],
    [
     "storm",
     "n",
     "stɔːrm",
     "cơn bão",
     "A storm is coming tonight.",
     "Tối nay có một cơn bão đang đến.",
     "A2"
    ],
    [
     "thunder",
     "n",
     "ˈθʌndər",
     "sấm",
     "I hear thunder in the distance.",
     "Tôi nghe thấy tiếng sấm ở xa.",
     "B1"
    ],
    [
     "fog",
     "n",
     "fɑːɡ",
     "sương mù",
     "Thick fog covered the town.",
     "Sương mù dày bao phủ thị trấn.",
     "A2"
    ],
    [
     "temperature",
     "n",
     "ˈtemprətʃər",
     "nhiệt độ",
     "The temperature is thirty degrees.",
     "Nhiệt độ là ba mươi độ.",
     "A2"
    ],
    [
     "umbrella",
     "n",
     "əmˈbrelə",
     "cái ô",
     "I forgot my umbrella.",
     "Tôi quên mang ô.",
     "A1"
    ],
    [
     "forecast",
     "n",
     "ˈfɔːrˌkæst",
     "dự báo",
     "The forecast says it will rain.",
     "Dự báo nói trời sẽ mưa.",
     "B1"
    ]
   ]
  },
  {
   "icon": "👕",
   "vi": "Quần áo",
   "en": "Clothes",
   "words": [
    [
     "shirt",
     "n",
     "ʃɜːrt",
     "áo sơ mi",
     "He wears a white shirt.",
     "Anh ấy mặc áo sơ mi trắng.",
     "A1"
    ],
    [
     "T-shirt",
     "n",
     "tiː ʃɜːrt",
     "áo phông",
     "I love this blue T-shirt.",
     "Tôi thích chiếc áo phông xanh này.",
     "A1"
    ],
    [
     "dress",
     "n",
     "dres",
     "váy liền",
     "She wore a red dress.",
     "Cô ấy mặc chiếc váy đỏ.",
     "A1"
    ],
    [
     "skirt",
     "n",
     "skɜːrt",
     "chân váy",
     "The skirt is too short.",
     "Chiếc chân váy quá ngắn.",
     "A1"
    ],
    [
     "jeans",
     "n",
     "dʒiːnz",
     "quần bò",
     "These jeans are comfortable.",
     "Chiếc quần bò này rất thoải mái.",
     "A1"
    ],
    [
     "jacket",
     "n",
     "ˈdʒækət",
     "áo khoác",
     "Take your jacket with you.",
     "Hãy mang theo áo khoác.",
     "A1"
    ],
    [
     "coat",
     "n",
     "koʊt",
     "áo choàng dài",
     "It is cold, so wear a coat.",
     "Trời lạnh nên hãy mặc áo choàng.",
     "A1"
    ],
    [
     "sweater",
     "n",
     "ˈswetər",
     "áo len",
     "Grandma knitted me a sweater.",
     "Bà đan cho tôi một chiếc áo len.",
     "A2"
    ],
    [
     "shoes",
     "n",
     "ʃuːz",
     "giày",
     "My shoes are wet.",
     "Giày của tôi bị ướt.",
     "A1"
    ],
    [
     "socks",
     "n",
     "sɑːks",
     "tất, vớ",
     "I need a new pair of socks.",
     "Tôi cần một đôi tất mới.",
     "A2"
    ],
    [
     "hat",
     "n",
     "hæt",
     "mũ",
     "She wears a big hat.",
     "Cô ấy đội một chiếc mũ lớn.",
     "A1"
    ],
    [
     "uniform",
     "n",
     "ˈjuːnəˌfɔːrm",
     "đồng phục",
     "Students wear a uniform.",
     "Học sinh mặc đồng phục.",
     "A2"
    ]
   ]
  },
  {
   "icon": "🛍️",
   "vi": "Mua sắm",
   "en": "Shopping",
   "words": [
    [
     "shop",
     "n",
     "ʃɑːp",
     "cửa hàng",
     "The shop opens at nine.",
     "Cửa hàng mở cửa lúc chín giờ.",
     "A1"
    ],
    [
     "market",
     "n",
     "ˈmɑːrkət",
     "chợ",
     "We buy fruit at the market.",
     "Chúng tôi mua trái cây ở chợ.",
     "A2"
    ],
    [
     "supermarket",
     "n",
     "ˈsuːpərˌmɑːrkɪt",
     "siêu thị",
     "The supermarket is near my house.",
     "Siêu thị ở gần nhà tôi.",
     "A1"
    ],
    [
     "mall",
     "n",
     "mɔːl",
     "trung tâm thương mại",
     "Let's go to the mall.",
     "Chúng ta đến trung tâm thương mại đi.",
     "A2"
    ],
    [
     "customer",
     "n",
     "ˈkʌstəmər",
     "khách hàng",
     "The customer asked for a discount.",
     "Khách hàng xin giảm giá.",
     "A2"
    ],
    [
     "price",
     "n",
     "praɪs",
     "giá",
     "What is the price of this bag?",
     "Giá của chiếc túi này là bao nhiêu?",
     "A1"
    ],
    [
     "cheap",
     "adj",
     "tʃiːp",
     "rẻ",
     "This T-shirt is very cheap.",
     "Chiếc áo phông này rất rẻ.",
     "A2"
    ],
    [
     "expensive",
     "adj",
     "ɪkˈspensɪv",
     "đắt",
     "That watch is too expensive.",
     "Chiếc đồng hồ đó quá đắt.",
     "A1"
    ],
    [
     "discount",
     "n",
     "dɪˈskaʊnt",
     "giảm giá",
     "There is a ten percent discount.",
     "Có giảm giá mười phần trăm.",
     "B1"
    ],
    [
     "receipt",
     "n",
     "rɪˈsiːt",
     "hóa đơn",
     "Keep the receipt, please.",
     "Hãy giữ lại hóa đơn nhé.",
     "A2"
    ],
    [
     "try on",
     "phr",
     "traɪ ɑːn",
     "mặc thử",
     "Can I try on this jacket?",
     "Tôi mặc thử chiếc áo khoác này được không?",
     "A1"
    ],
    [
     "size",
     "n",
     "saɪz",
     "kích cỡ",
     "Do you have a bigger size?",
     "Bạn có cỡ lớn hơn không?",
     "A1"
    ]
   ]
  },
  {
   "icon": "💰",
   "vi": "Tiền bạc và ngân hàng",
   "en": "Money and Banking",
   "words": [
    [
     "money",
     "n",
     "ˈmʌni",
     "tiền",
     "I saved some money for the trip.",
     "Tôi để dành ít tiền cho chuyến đi.",
     "A1"
    ],
    [
     "cash",
     "n",
     "kæʃ",
     "tiền mặt",
     "Do you pay by cash or card?",
     "Bạn trả bằng tiền mặt hay thẻ?",
     "A2"
    ],
    [
     "coin",
     "n",
     "kɔɪn",
     "đồng xu",
     "I found a coin on the street.",
     "Tôi nhặt được đồng xu trên đường.",
     "A2"
    ],
    [
     "bank",
     "n",
     "bæŋk",
     "ngân hàng",
     "I need to go to the bank.",
     "Tôi cần đến ngân hàng.",
     "A1"
    ],
    [
     "account",
     "n",
     "əˈkaʊnt",
     "tài khoản",
     "She opened a new bank account.",
     "Cô ấy mở một tài khoản ngân hàng mới.",
     "A2"
    ],
    [
     "save",
     "v",
     "seɪv",
     "tiết kiệm",
     "I save money every month.",
     "Tôi tiết kiệm tiền mỗi tháng.",
     "A1"
    ],
    [
     "spend",
     "v",
     "spend",
     "tiêu (tiền)",
     "Do not spend too much.",
     "Đừng tiêu quá nhiều.",
     "A1"
    ],
    [
     "borrow",
     "v",
     "ˈbɑːˌroʊ",
     "mượn",
     "Can I borrow your pen?",
     "Tôi mượn bút của bạn được không?",
     "A1"
    ],
    [
     "lend",
     "v",
     "lend",
     "cho mượn",
     "He lent me some money.",
     "Anh ấy cho tôi mượn ít tiền.",
     "A2"
    ],
    [
     "salary",
     "n",
     "ˈsæləri",
     "tiền lương",
     "My salary is paid monthly.",
     "Lương của tôi được trả hằng tháng.",
     "B2"
    ],
    [
     "bill",
     "n",
     "bɪl",
     "hóa đơn",
     "The electricity bill is high.",
     "Hóa đơn tiền điện khá cao.",
     "A2"
    ],
    [
     "budget",
     "n",
     "ˈbʌdʒɪt",
     "ngân sách",
     "We have a small budget.",
     "Chúng tôi có một ngân sách nhỏ.",
     "A2"
    ]
   ]
  },
  {
   "icon": "🚌",
   "vi": "Giao thông",
   "en": "Transportation",
   "words": [
    [
     "bus",
     "n",
     "bʌs",
     "xe buýt",
     "The bus arrives at eight.",
     "Xe buýt đến lúc tám giờ.",
     "A1"
    ],
    [
     "bicycle",
     "n",
     "ˈbaɪsɪkəl",
     "xe đạp",
     "I ride my bicycle to school.",
     "Tôi đạp xe đến trường.",
     "A1"
    ],
    [
     "motorbike",
     "n",
     "ˈmoʊtərˌbaɪk",
     "xe máy",
     "Many people ride motorbikes in Vietnam.",
     "Nhiều người đi xe máy ở Việt Nam.",
     "B2"
    ],
    [
     "car",
     "n",
     "kɑːr",
     "ô tô",
     "Dad washes the car on Sunday.",
     "Bố rửa xe vào Chủ nhật.",
     "A1"
    ],
    [
     "taxi",
     "n",
     "ˈtæksi",
     "taxi",
     "We took a taxi to the airport.",
     "Chúng tôi đi taxi ra sân bay.",
     "A1"
    ],
    [
     "train",
     "n",
     "treɪn",
     "tàu hỏa",
     "The train leaves in ten minutes.",
     "Tàu sẽ rời đi sau mười phút.",
     "A1"
    ],
    [
     "subway",
     "n",
     "ˈsʌbˌweɪ",
     "tàu điện ngầm",
     "The subway is fast and cheap.",
     "Tàu điện ngầm nhanh và rẻ.",
     "A1"
    ],
    [
     "traffic",
     "n",
     "ˈtræfɪk",
     "giao thông",
     "The traffic is heavy today.",
     "Hôm nay giao thông đông đúc.",
     "A2"
    ],
    [
     "road",
     "n",
     "roʊd",
     "con đường",
     "This road is very busy.",
     "Con đường này rất đông.",
     "A2"
    ],
    [
     "traffic light",
     "n",
     "ˈtræfɪk laɪt",
     "đèn giao thông",
     "Stop at the red traffic light.",
     "Hãy dừng lại ở đèn giao thông màu đỏ.",
     "A2"
    ],
    [
     "helmet",
     "n",
     "ˈhelmət",
     "mũ bảo hiểm",
     "Always wear a helmet.",
     "Luôn luôn đội mũ bảo hiểm.",
     "B1"
    ],
    [
     "ticket",
     "n",
     "ˈtɪkət",
     "vé",
     "I bought a bus ticket.",
     "Tôi đã mua một vé xe buýt.",
     "A1"
    ]
   ]
  },
  {
   "icon": "🏙️",
   "vi": "Trong thành phố",
   "en": "In the City",
   "words": [
    [
     "city",
     "n",
     "ˈsɪti",
     "thành phố",
     "Ho Chi Minh City is very big.",
     "Thành phố Hồ Chí Minh rất lớn.",
     "A1"
    ],
    [
     "village",
     "n",
     "ˈvɪlədʒ",
     "làng",
     "My grandparents live in a village.",
     "Ông bà tôi sống ở một ngôi làng.",
     "A2"
    ],
    [
     "street",
     "n",
     "striːt",
     "đường phố",
     "There are many shops on this street.",
     "Có nhiều cửa hàng trên con phố này.",
     "A1"
    ],
    [
     "park",
     "n",
     "pɑːrk",
     "công viên",
     "We walk in the park.",
     "Chúng tôi đi dạo trong công viên.",
     "A1"
    ],
    [
     "school",
     "n",
     "skuːl",
     "trường học",
     "My school is near the river.",
     "Trường của tôi ở gần con sông.",
     "A1"
    ],
    [
     "hospital",
     "n",
     "ˈhɑːˌspɪtəl",
     "bệnh viện",
     "The hospital is on Main Street.",
     "Bệnh viện ở trên phố Chính.",
     "A1"
    ],
    [
     "library",
     "n",
     "ˈlaɪbreˌriː",
     "thư viện",
     "I study at the library.",
     "Tôi học ở thư viện.",
     "A1"
    ],
    [
     "cinema",
     "n",
     "ˈsɪnəmə",
     "rạp chiếu phim",
     "Let's go to the cinema tonight.",
     "Tối nay chúng ta đi xem phim nhé.",
     "A1"
    ],
    [
     "museum",
     "n",
     "mjuːˈziːəm",
     "bảo tàng",
     "The museum is free on Sundays.",
     "Bảo tàng miễn phí vào Chủ nhật.",
     "A2"
    ],
    [
     "restaurant",
     "n",
     "ˈrestərˌɑːnt",
     "nhà hàng",
     "This restaurant is very popular.",
     "Nhà hàng này rất nổi tiếng.",
     "A1"
    ],
    [
     "bridge",
     "n",
     "brɪdʒ",
     "cây cầu",
     "We crossed the old bridge.",
     "Chúng tôi băng qua cây cầu cũ.",
     "A1"
    ],
    [
     "police station",
     "n",
     "pəˈliːs ˈsteɪʃən",
     "đồn cảnh sát",
     "The police station is opposite the bank.",
     "Đồn cảnh sát đối diện ngân hàng.",
     "A2"
    ]
   ]
  },
  {
   "icon": "📮",
   "vi": "Dịch vụ và bưu điện",
   "en": "Post and Services",
   "words": [
    [
     "post office",
     "n",
     "poʊst ˈɔːfɪs",
     "bưu điện",
     "I sent a parcel at the post office.",
     "Tôi gửi bưu kiện ở bưu điện.",
     "A2"
    ],
    [
     "letter",
     "n",
     "ˈletər",
     "lá thư",
     "She wrote a letter to her friend.",
     "Cô ấy viết thư cho bạn.",
     "A1"
    ],
    [
     "parcel",
     "n",
     "ˈpɑːrsəl",
     "bưu kiện",
     "The parcel arrived yesterday.",
     "Bưu kiện đã đến hôm qua.",
     "B1"
    ],
    [
     "stamp",
     "n",
     "stæmp",
     "tem",
     "I need a stamp for this letter.",
     "Tôi cần một con tem cho lá thư này.",
     "A2"
    ],
    [
     "envelope",
     "n",
     "ˈenvəˌloʊp",
     "phong bì",
     "Put the card in an envelope.",
     "Hãy cho tấm thiệp vào phong bì.",
     "A2"
    ],
    [
     "address",
     "n",
     "ˈæˌdres",
     "địa chỉ",
     "What is your home address?",
     "Địa chỉ nhà bạn là gì?",
     "A1"
    ],
    [
     "postman",
     "n",
     "ˈpoʊstmən",
     "người đưa thư",
     "The postman comes at noon.",
     "Người đưa thư đến vào buổi trưa.",
     "B1"
    ],
    [
     "deliver",
     "v",
     "dɪˈlɪvər",
     "giao hàng",
     "They deliver food to your door.",
     "Họ giao đồ ăn tận cửa.",
     "B1"
    ],
    [
     "laundry service",
     "n",
     "ˈlɔːndri ˈsɜːrvəs",
     "dịch vụ giặt ủi",
     "The hotel has a laundry service.",
     "Khách sạn có dịch vụ giặt ủi.",
     "B2"
    ],
    [
     "barber",
     "n",
     "ˈbɑːrbər",
     "thợ cắt tóc nam",
     "The barber cut my hair short.",
     "Thợ cắt tóc cắt tóc tôi ngắn.",
     "A2"
    ],
    [
     "hairdresser",
     "n",
     "ˈherˌdresər",
     "thợ làm tóc",
     "My hairdresser is very talented.",
     "Thợ làm tóc của tôi rất tài năng.",
     "B1"
    ],
    [
     "pharmacy",
     "n",
     "ˈfɑːrməsi",
     "hiệu thuốc",
     "The pharmacy is open all night.",
     "Hiệu thuốc mở cửa cả đêm.",
     "B1"
    ]
   ]
  },
  {
   "icon": "📱",
   "vi": "Điện thoại và liên lạc",
   "en": "Phones and Communication",
   "words": [
    [
     "phone",
     "n",
     "foʊn",
     "điện thoại",
     "My phone is on the table.",
     "Điện thoại của tôi ở trên bàn.",
     "A1"
    ],
    [
     "call",
     "v",
     "kɔːl",
     "gọi điện",
     "I will call you tonight.",
     "Tối nay tôi sẽ gọi cho bạn.",
     "A1"
    ],
    [
     "message",
     "n",
     "ˈmesədʒ",
     "tin nhắn",
     "She sent me a message.",
     "Cô ấy gửi cho tôi một tin nhắn.",
     "A1"
    ],
    [
     "text",
     "v",
     "tekst",
     "nhắn tin",
     "I text my mom every day.",
     "Tôi nhắn tin cho mẹ mỗi ngày.",
     "A2"
    ],
    [
     "email",
     "n",
     "iˈmeɪl",
     "thư điện tử",
     "I check my email every morning.",
     "Tôi kiểm tra email mỗi sáng.",
     "A1"
    ],
    [
     "charger",
     "n",
     "ˈtʃɑːrdʒər",
     "bộ sạc",
     "Where is my phone charger?",
     "Bộ sạc điện thoại của tôi đâu rồi?",
     "B1"
    ],
    [
     "battery",
     "n",
     "ˈbætəri",
     "pin",
     "My battery is almost empty.",
     "Pin của tôi gần hết.",
     "A2"
    ],
    [
     "screen",
     "n",
     "skriːn",
     "màn hình",
     "The screen is cracked.",
     "Màn hình bị nứt.",
     "A2"
    ],
    [
     "number",
     "n",
     "ˈnʌmbər",
     "số điện thoại, con số",
     "What is your phone number?",
     "Số điện thoại của bạn là gì?",
     "A1"
    ],
    [
     "signal",
     "n",
     "ˈsɪɡnəl",
     "tín hiệu",
     "There is no signal here.",
     "Ở đây không có tín hiệu.",
     "B1"
    ],
    [
     "video call",
     "n",
     "ˈvɪdioʊ kɔːl",
     "cuộc gọi video",
     "We had a video call with grandma.",
     "Chúng tôi gọi video với bà.",
     "A1"
    ],
    [
     "voicemail",
     "n",
     "ˈvɔɪˌsmeɪl",
     "hộp thư thoại",
     "Please leave a voicemail.",
     "Xin hãy để lại thư thoại.",
     "B1"
    ]
   ]
  },
  {
   "icon": "🎨",
   "vi": "Sở thích",
   "en": "Hobbies and Interests",
   "words": [
    [
     "hobby",
     "n",
     "ˈhɑːbi",
     "sở thích",
     "My hobby is drawing.",
     "Sở thích của tôi là vẽ tranh.",
     "A1"
    ],
    [
     "draw",
     "v",
     "drɔː",
     "vẽ",
     "She likes to draw animals.",
     "Cô ấy thích vẽ các con vật.",
     "A1"
    ],
    [
     "paint",
     "v",
     "peɪnt",
     "sơn, vẽ màu",
     "We paint the wall blue.",
     "Chúng tôi sơn bức tường màu xanh.",
     "A1"
    ],
    [
     "sing",
     "v",
     "sɪŋ",
     "hát",
     "My sister sings very well.",
     "Chị tôi hát rất hay.",
     "A1"
    ],
    [
     "dance",
     "v",
     "dæns",
     "nhảy múa",
     "They dance at every party.",
     "Họ nhảy ở mọi bữa tiệc.",
     "A1"
    ],
    [
     "read",
     "v",
     "red",
     "đọc",
     "I read a book before bed.",
     "Tôi đọc sách trước khi đi ngủ.",
     "A1"
    ],
    [
     "collect",
     "v",
     "kəˈlekt",
     "sưu tầm",
     "He collects old coins.",
     "Anh ấy sưu tầm những đồng xu cũ.",
     "A1"
    ],
    [
     "knit",
     "v",
     "nɪt",
     "đan len",
     "Grandma loves to knit.",
     "Bà thích đan len.",
     "B1"
    ],
    [
     "photography",
     "n",
     "fəˈtɑːɡrəfi",
     "nhiếp ảnh",
     "Photography is a fun hobby.",
     "Nhiếp ảnh là một sở thích thú vị.",
     "A2"
    ],
    [
     "gardening",
     "n",
     "ˈɡɑːrdənɪŋ",
     "làm vườn",
     "Gardening relaxes me.",
     "Làm vườn giúp tôi thư giãn.",
     "B1"
    ],
    [
     "puzzle",
     "n",
     "ˈpʌzəl",
     "trò xếp hình, câu đố",
     "We solved the puzzle together.",
     "Chúng tôi cùng giải xong trò xếp hình.",
     "B1"
    ],
    [
     "board game",
     "n",
     "bɔːrd ɡeɪm",
     "trò chơi cờ bàn",
     "Let's play a board game.",
     "Chúng ta chơi trò chơi cờ bàn đi.",
     "A2"
    ]
   ]
  },
  {
   "icon": "🎬",
   "vi": "Âm nhạc và phim ảnh",
   "en": "Music and Movies",
   "words": [
    [
     "music",
     "n",
     "ˈmjuːzɪk",
     "âm nhạc",
     "I listen to music on the bus.",
     "Tôi nghe nhạc trên xe buýt.",
     "A1"
    ],
    [
     "song",
     "n",
     "sɔːŋ",
     "bài hát",
     "This song is my favorite.",
     "Bài hát này là bài tôi thích nhất.",
     "A1"
    ],
    [
     "singer",
     "n",
     "ˈsɪŋər",
     "ca sĩ",
     "The singer has a lovely voice.",
     "Ca sĩ có giọng hát rất hay.",
     "A1"
    ],
    [
     "guitar",
     "n",
     "ɡɪˈtɑːr",
     "đàn ghi-ta",
     "He plays the guitar well.",
     "Anh ấy chơi ghi-ta giỏi.",
     "A1"
    ],
    [
     "piano",
     "n",
     "piˈænoʊ",
     "đàn dương cầm",
     "She practices the piano daily.",
     "Cô ấy tập dương cầm hằng ngày.",
     "A1"
    ],
    [
     "concert",
     "n",
     "ˈkɑːnsərt",
     "buổi hòa nhạc",
     "We went to a concert last night.",
     "Tối qua chúng tôi đi xem hòa nhạc.",
     "A1"
    ],
    [
     "movie",
     "n",
     "ˈmuːvi",
     "bộ phim",
     "That movie was really funny.",
     "Bộ phim đó thật sự rất hài hước.",
     "A1"
    ],
    [
     "actor",
     "n",
     "ˈæktər",
     "nam diễn viên",
     "The actor won an award.",
     "Nam diễn viên đã giành một giải thưởng.",
     "A1"
    ],
    [
     "actress",
     "n",
     "ˈæktrəs",
     "nữ diễn viên",
     "The actress smiled at the camera.",
     "Nữ diễn viên mỉm cười với máy quay.",
     "B1"
    ],
    [
     "comedy",
     "n",
     "ˈkɑːmədi",
     "phim hài",
     "I prefer a comedy to a horror film.",
     "Tôi thích phim hài hơn phim kinh dị.",
     "B1"
    ],
    [
     "cartoon",
     "n",
     "kɑːrˈtuːn",
     "phim hoạt hình",
     "Kids love watching cartoons.",
     "Trẻ em thích xem phim hoạt hình.",
     "A1"
    ],
    [
     "popcorn",
     "n",
     "ˈpɑːpˌkɔːrn",
     "bắp rang",
     "We shared a bag of popcorn.",
     "Chúng tôi chia nhau một túi bắp rang.",
     "B1"
    ]
   ]
  },
  {
   "icon": "🎉",
   "vi": "Lễ hội và sự kiện",
   "en": "Festivals and Events",
   "words": [
    [
     "festival",
     "n",
     "ˈfestəvəl",
     "lễ hội",
     "The lantern festival is beautiful.",
     "Lễ hội đèn lồng rất đẹp.",
     "A1"
    ],
    [
     "birthday",
     "n",
     "ˈbɜːrθˌdeɪ",
     "sinh nhật",
     "Today is my birthday.",
     "Hôm nay là sinh nhật của tôi.",
     "A1"
    ],
    [
     "party",
     "n",
     "ˈpɑːrti",
     "bữa tiệc",
     "We had a party last night.",
     "Tối qua chúng tôi có một bữa tiệc.",
     "A1"
    ],
    [
     "wedding",
     "n",
     "ˈwedɪŋ",
     "đám cưới",
     "I am going to a wedding on Sunday.",
     "Chủ nhật tôi đi dự đám cưới.",
     "A2"
    ],
    [
     "gift",
     "n",
     "ɡɪft",
     "món quà",
     "She gave me a lovely gift.",
     "Cô ấy tặng tôi một món quà đáng yêu.",
     "A1"
    ],
    [
     "balloon",
     "n",
     "bəˈluːn",
     "bóng bay",
     "The children hold colorful balloons.",
     "Bọn trẻ cầm những quả bóng bay đầy màu sắc.",
     "A2"
    ],
    [
     "cake",
     "n",
     "keɪk",
     "bánh ngọt",
     "We cut the birthday cake.",
     "Chúng tôi cắt bánh sinh nhật.",
     "A1"
    ],
    [
     "Tet",
     "n",
     "tet",
     "Tết",
     "We clean the house before Tet.",
     "Chúng tôi dọn nhà trước Tết.",
     "B1"
    ],
    [
     "holiday",
     "n",
     "ˈhɑːləˌdeɪ",
     "ngày lễ, kỳ nghỉ",
     "Christmas is a popular holiday.",
     "Giáng sinh là một ngày lễ phổ biến.",
     "A1"
    ],
    [
     "celebrate",
     "v",
     "ˈseləˌbreɪt",
     "ăn mừng",
     "We celebrate New Year together.",
     "Chúng tôi cùng nhau đón Năm mới.",
     "A1"
    ],
    [
     "fireworks",
     "n",
     "ˈfaɪrˌwɜːrks",
     "pháo hoa",
     "The fireworks lit up the sky.",
     "Pháo hoa thắp sáng bầu trời.",
     "B1"
    ],
    [
     "invitation",
     "n",
     "ˌɪnvɪˈteɪʃən",
     "lời mời, thiệp mời",
     "I received an invitation to her party.",
     "Tôi nhận được lời mời đến bữa tiệc của cô ấy.",
     "B1"
    ]
   ]
  },
  {
   "icon": "🐶",
   "vi": "Động vật và thú cưng",
   "en": "Animals and Pets",
   "words": [
    [
     "dog",
     "n",
     "dɔːɡ",
     "con chó",
     "My dog loves to run.",
     "Con chó của tôi thích chạy.",
     "A1"
    ],
    [
     "cat",
     "n",
     "kæt",
     "con mèo",
     "The cat is sleeping on my bed.",
     "Con mèo đang ngủ trên giường tôi.",
     "A1"
    ],
    [
     "bird",
     "n",
     "bɜːrd",
     "con chim",
     "A bird sings outside my window.",
     "Một chú chim hót ngoài cửa sổ tôi.",
     "A1"
    ],
    [
     "fish",
     "n",
     "fɪʃ",
     "con cá",
     "We keep fish in a small tank.",
     "Chúng tôi nuôi cá trong một bể nhỏ.",
     "A1"
    ],
    [
     "rabbit",
     "n",
     "ˈræbət",
     "con thỏ",
     "The rabbit eats carrots.",
     "Con thỏ ăn cà rốt.",
     "A1"
    ],
    [
     "hamster",
     "n",
     "ˈhæmstər",
     "chuột hamster",
     "My hamster runs on its wheel.",
     "Con chuột hamster của tôi chạy trên bánh xe.",
     "B1"
    ],
    [
     "puppy",
     "n",
     "ˈpʌpi",
     "chó con",
     "The puppy follows me everywhere.",
     "Chú chó con theo tôi khắp nơi.",
     "B1"
    ],
    [
     "kitten",
     "n",
     "ˈkɪtən",
     "mèo con",
     "The kitten plays with a ball.",
     "Chú mèo con chơi với quả bóng.",
     "B1"
    ],
    [
     "horse",
     "n",
     "hɔːrs",
     "con ngựa",
     "She rides a brown horse.",
     "Cô ấy cưỡi một con ngựa nâu.",
     "A1"
    ],
    [
     "cow",
     "n",
     "kaʊ",
     "con bò",
     "The cow gives us milk.",
     "Con bò cho chúng ta sữa.",
     "A1"
    ],
    [
     "chicken",
     "n",
     "ˈtʃɪkən",
     "con gà",
     "Chickens live on my grandpa's farm.",
     "Gà sống ở trang trại của ông tôi.",
     "A1"
    ],
    [
     "pet",
     "n",
     "pet",
     "thú cưng",
     "Do you have a pet?",
     "Bạn có nuôi thú cưng không?",
     "A1"
    ]
   ]
  },
  {
   "icon": "🌳",
   "vi": "Thiên nhiên và cây cối",
   "en": "Nature and Plants",
   "words": [
    [
     "tree",
     "n",
     "triː",
     "cây",
     "We sat under a big tree.",
     "Chúng tôi ngồi dưới một cái cây lớn.",
     "A1"
    ],
    [
     "flower",
     "n",
     "ˈflaʊər",
     "bông hoa",
     "She picked a yellow flower.",
     "Cô ấy hái một bông hoa vàng.",
     "A1"
    ],
    [
     "grass",
     "n",
     "ɡræs",
     "cỏ",
     "The children run on the grass.",
     "Bọn trẻ chạy trên cỏ.",
     "A1"
    ],
    [
     "leaf",
     "n",
     "liːf",
     "chiếc lá",
     "A green leaf fell down.",
     "Một chiếc lá xanh rơi xuống.",
     "A1"
    ],
    [
     "river",
     "n",
     "ˈrɪvər",
     "dòng sông",
     "The river is calm today.",
     "Hôm nay dòng sông êm đềm.",
     "A1"
    ],
    [
     "lake",
     "n",
     "leɪk",
     "hồ",
     "We had a picnic by the lake.",
     "Chúng tôi đi dã ngoại bên hồ.",
     "A2"
    ],
    [
     "mountain",
     "n",
     "ˈmaʊntən",
     "ngọn núi",
     "The mountain is covered in mist.",
     "Ngọn núi bị sương mù bao phủ.",
     "A1"
    ],
    [
     "forest",
     "n",
     "ˈfɔːrəst",
     "khu rừng",
     "We walked through the forest.",
     "Chúng tôi đi bộ xuyên qua khu rừng.",
     "A2"
    ],
    [
     "sky",
     "n",
     "skaɪ",
     "bầu trời",
     "The sky is clear tonight.",
     "Đêm nay bầu trời quang đãng.",
     "A1"
    ],
    [
     "moon",
     "n",
     "muːn",
     "mặt trăng",
     "The moon is bright.",
     "Mặt trăng thật sáng.",
     "A1"
    ],
    [
     "star",
     "n",
     "stɑːr",
     "ngôi sao",
     "I can see many stars.",
     "Tôi thấy rất nhiều ngôi sao.",
     "A1"
    ],
    [
     "sun",
     "n",
     "sʌn",
     "mặt trời",
     "The sun rises in the east.",
     "Mặt trời mọc ở phía đông.",
     "A1"
    ]
   ]
  },
  {
   "icon": "🔢",
   "vi": "Số đếm và đo lường",
   "en": "Numbers and Measurements",
   "words": [
    [
     "one",
     "n",
     "wʌn",
     "số một",
     "I have one sister.",
     "Tôi có một người chị.",
     "A1"
    ],
    [
     "ten",
     "n",
     "ten",
     "số mười",
     "There are ten students here.",
     "Có mười học sinh ở đây.",
     "A1"
    ],
    [
     "hundred",
     "n",
     "ˈhʌndrəd",
     "một trăm",
     "The book has a hundred pages.",
     "Cuốn sách có một trăm trang.",
     "A2"
    ],
    [
     "thousand",
     "n",
     "ˈθaʊzənd",
     "một nghìn",
     "The bike costs a thousand dollars.",
     "Chiếc xe đạp giá một nghìn đô la.",
     "A2"
    ],
    [
     "half",
     "n",
     "hæf",
     "một nửa",
     "Give me half of the apple.",
     "Cho tôi một nửa quả táo.",
     "A1"
    ],
    [
     "double",
     "adj",
     "ˈdʌbəl",
     "gấp đôi",
     "I need a double room.",
     "Tôi cần một phòng đôi.",
     "A2"
    ],
    [
     "first",
     "adj",
     "fɜːrst",
     "thứ nhất",
     "This is my first day at school.",
     "Đây là ngày đầu tiên của tôi ở trường.",
     "A1"
    ],
    [
     "second",
     "adj",
     "ˈsekənd",
     "thứ hai",
     "She came in second place.",
     "Cô ấy về vị trí thứ hai.",
     "A1"
    ],
    [
     "kilometer",
     "n",
     "kəˈlɑːmətər",
     "ki-lô-mét",
     "The school is one kilometer away.",
     "Trường cách đây một ki-lô-mét.",
     "A2"
    ],
    [
     "meter",
     "n",
     "ˈmiːtər",
     "mét",
     "The room is five meters long.",
     "Căn phòng dài năm mét.",
     "A2"
    ],
    [
     "kilogram",
     "n",
     "ˈkɪləˌɡræm",
     "ki-lô-gam",
     "I bought two kilograms of rice.",
     "Tôi mua hai ki-lô-gam gạo.",
     "A2"
    ],
    [
     "liter",
     "n",
     "ˈliːtər",
     "lít",
     "Drink two liters of water a day.",
     "Hãy uống hai lít nước mỗi ngày.",
     "A2"
    ]
   ]
  },
  {
   "icon": "🎨",
   "vi": "Màu sắc và hình dạng",
   "en": "Colors and Shapes",
   "words": [
    [
     "red",
     "adj",
     "red",
     "màu đỏ",
     "She has a red bag.",
     "Cô ấy có một chiếc túi màu đỏ.",
     "A1"
    ],
    [
     "blue",
     "adj",
     "bluː",
     "màu xanh dương",
     "The sea is deep blue.",
     "Biển có màu xanh thẫm.",
     "A1"
    ],
    [
     "green",
     "adj",
     "ɡriːn",
     "màu xanh lá",
     "The leaves are bright green.",
     "Những chiếc lá xanh tươi.",
     "A1"
    ],
    [
     "yellow",
     "adj",
     "ˈjeloʊ",
     "màu vàng",
     "Bananas are yellow.",
     "Chuối có màu vàng.",
     "A1"
    ],
    [
     "orange",
     "adj",
     "ˈɔːrəndʒ",
     "màu cam",
     "I love the orange sunset.",
     "Tôi yêu hoàng hôn màu cam.",
     "A1"
    ],
    [
     "purple",
     "adj",
     "ˈpɜːrpəl",
     "màu tím",
     "She wears a purple scarf.",
     "Cô ấy quàng chiếc khăn màu tím.",
     "A1"
    ],
    [
     "pink",
     "adj",
     "pɪŋk",
     "màu hồng",
     "The baby's room is pink.",
     "Phòng em bé màu hồng.",
     "A1"
    ],
    [
     "black",
     "adj",
     "blæk",
     "màu đen",
     "He has a black cat.",
     "Anh ấy có một con mèo đen.",
     "A1"
    ],
    [
     "white",
     "adj",
     "waɪt",
     "màu trắng",
     "The wall is painted white.",
     "Bức tường được sơn màu trắng.",
     "A1"
    ],
    [
     "circle",
     "n",
     "ˈsɜːrkəl",
     "hình tròn",
     "Draw a circle on the paper.",
     "Hãy vẽ một hình tròn lên giấy.",
     "A1"
    ],
    [
     "square",
     "n",
     "skwer",
     "hình vuông",
     "The box is a square.",
     "Cái hộp là hình vuông.",
     "A2"
    ],
    [
     "triangle",
     "n",
     "ˈtraɪˌæŋɡəl",
     "hình tam giác",
     "A triangle has three sides.",
     "Hình tam giác có ba cạnh.",
     "B2"
    ]
   ]
  },
  {
   "icon": "🛁",
   "vi": "Đồ dùng cá nhân",
   "en": "Personal Items",
   "words": [
    [
     "toothbrush",
     "n",
     "ˈtuːθbrəʃ",
     "bàn chải đánh răng",
     "I bought a new toothbrush.",
     "Tôi mua một chiếc bàn chải đánh răng mới.",
     "A2"
    ],
    [
     "toothpaste",
     "n",
     "ˈtuːθˌpeɪst",
     "kem đánh răng",
     "We ran out of toothpaste.",
     "Chúng tôi hết kem đánh răng rồi.",
     "B1"
    ],
    [
     "soap",
     "n",
     "soʊp",
     "xà phòng",
     "Wash your hands with soap.",
     "Hãy rửa tay bằng xà phòng.",
     "A2"
    ],
    [
     "shampoo",
     "n",
     "ʃæmˈpuː",
     "dầu gội",
     "This shampoo smells good.",
     "Loại dầu gội này thơm.",
     "A2"
    ],
    [
     "towel",
     "n",
     "ˈtaʊəl",
     "khăn tắm",
     "Here is a clean towel.",
     "Đây là một chiếc khăn sạch.",
     "A1"
    ],
    [
     "comb",
     "n",
     "koʊm",
     "cái lược",
     "She combs her hair every morning.",
     "Cô ấy chải tóc mỗi sáng.",
     "A2"
    ],
    [
     "razor",
     "n",
     "ˈreɪzər",
     "dao cạo",
     "He shaves with an electric razor.",
     "Anh ấy cạo râu bằng dao cạo điện.",
     "B1"
    ],
    [
     "perfume",
     "n",
     "pərˈfjuːm",
     "nước hoa",
     "She wears a light perfume.",
     "Cô ấy dùng loại nước hoa nhẹ.",
     "A2"
    ],
    [
     "wallet",
     "n",
     "ˈwɔːlət",
     "ví tiền",
     "I lost my wallet.",
     "Tôi làm mất ví.",
     "A2"
    ],
    [
     "backpack",
     "n",
     "ˈbækˌpæk",
     "ba lô",
     "My backpack is very heavy.",
     "Ba lô của tôi rất nặng.",
     "B1"
    ],
    [
     "key",
     "n",
     "kiː",
     "chìa khóa",
     "Where are my keys?",
     "Chìa khóa của tôi đâu rồi?",
     "A1"
    ],
    [
     "watch",
     "n",
     "wɑːtʃ",
     "đồng hồ đeo tay",
     "His watch is ten minutes late.",
     "Đồng hồ của anh ấy chậm mười phút.",
     "A1"
    ]
   ]
  },
  {
   "icon": "🏘️",
   "vi": "Cộng đồng",
   "en": "Community",
   "words": [
    [
     "community",
     "n",
     "kəˈmjuːnəti",
     "cộng đồng",
     "Our community is friendly.",
     "Cộng đồng của chúng tôi thân thiện.",
     "B2"
    ],
    [
     "volunteer",
     "n",
     "ˌvɑːlənˈtɪr",
     "tình nguyện viên",
     "She is a volunteer at the shelter.",
     "Cô ấy là tình nguyện viên ở trạm cứu trợ.",
     "B1"
    ],
    [
     "charity",
     "n",
     "ˈtʃerɪti",
     "từ thiện",
     "They raise money for charity.",
     "Họ quyên tiền làm từ thiện.",
     "B1"
    ],
    [
     "event",
     "n",
     "ɪˈvent",
     "sự kiện",
     "The event starts at noon.",
     "Sự kiện bắt đầu vào buổi trưa.",
     "A1"
    ],
    [
     "meeting",
     "n",
     "ˈmiːtɪŋ",
     "cuộc họp",
     "We have a meeting on Monday.",
     "Chúng tôi có một cuộc họp vào thứ Hai.",
     "A1"
    ],
    [
     "rule",
     "n",
     "ruːl",
     "quy tắc",
     "Please follow the rules.",
     "Xin hãy tuân theo quy tắc.",
     "A1"
    ],
    [
     "noise",
     "n",
     "nɔɪz",
     "tiếng ồn",
     "The noise kept me awake.",
     "Tiếng ồn làm tôi thức giấc.",
     "A1"
    ],
    [
     "safe",
     "adj",
     "seɪf",
     "an toàn",
     "This area is safe at night.",
     "Khu vực này an toàn vào ban đêm.",
     "A2"
    ],
    [
     "clean up",
     "phr",
     "kliːn ʌp",
     "dọn dẹp sạch",
     "We clean up the beach together.",
     "Chúng tôi cùng dọn sạch bãi biển.",
     "A1"
    ],
    [
     "recycle",
     "v",
     "riˈsaɪkəl",
     "tái chế",
     "We recycle paper and bottles.",
     "Chúng tôi tái chế giấy và chai lọ.",
     "A2"
    ],
    [
     "share",
     "v",
     "ʃer",
     "chia sẻ",
     "Children should share their toys.",
     "Trẻ em nên chia sẻ đồ chơi.",
     "A1"
    ],
    [
     "help",
     "v",
     "help",
     "giúp đỡ",
     "Can you help me, please?",
     "Bạn giúp tôi được không?",
     "A1"
    ]
   ]
  },
  {
   "icon": "🏃",
   "vi": "Động từ thông dụng",
   "en": "Common Verbs",
   "words": [
    [
     "go",
     "v",
     "ɡoʊ",
     "đi",
     "I go to school by bike.",
     "Tôi đến trường bằng xe đạp.",
     "A1"
    ],
    [
     "come",
     "v",
     "kʌm",
     "đến",
     "Please come to my house.",
     "Mời bạn đến nhà tôi.",
     "A1"
    ],
    [
     "eat",
     "v",
     "iːt",
     "ăn",
     "We eat rice every day.",
     "Chúng tôi ăn cơm mỗi ngày.",
     "A1"
    ],
    [
     "drink",
     "v",
     "drɪŋk",
     "uống",
     "Do you drink tea?",
     "Bạn có uống trà không?",
     "A1"
    ],
    [
     "sleep",
     "v",
     "sliːp",
     "ngủ",
     "Babies sleep a lot.",
     "Em bé ngủ nhiều.",
     "A1"
    ],
    [
     "walk",
     "v",
     "wɔːk",
     "đi bộ",
     "I walk to work.",
     "Tôi đi bộ đi làm.",
     "A1"
    ],
    [
     "run",
     "v",
     "rʌn",
     "chạy",
     "He runs in the park.",
     "Anh ấy chạy trong công viên.",
     "A1"
    ],
    [
     "open",
     "v",
     "ˈoʊpən",
     "mở",
     "Please open the window.",
     "Làm ơn mở cửa sổ ra.",
     "A1"
    ],
    [
     "close",
     "v",
     "kloʊs",
     "đóng",
     "Close the door, please.",
     "Làm ơn đóng cửa lại.",
     "A1"
    ],
    [
     "buy",
     "v",
     "baɪ",
     "mua",
     "I want to buy a new phone.",
     "Tôi muốn mua một chiếc điện thoại mới.",
     "A1"
    ],
    [
     "give",
     "v",
     "ɡɪv",
     "cho, tặng",
     "She gave me a book.",
     "Cô ấy tặng tôi một quyển sách.",
     "A1"
    ],
    [
     "take",
     "v",
     "teɪk",
     "cầm, lấy",
     "Take an umbrella with you.",
     "Hãy mang theo một cái ô.",
     "A1"
    ]
   ]
  },
  {
   "icon": "🌟",
   "vi": "Tính từ thông dụng",
   "en": "Common Adjectives",
   "words": [
    [
     "big",
     "adj",
     "bɪɡ",
     "to, lớn",
     "We live in a big city.",
     "Chúng tôi sống ở một thành phố lớn.",
     "A1"
    ],
    [
     "small",
     "adj",
     "smɔːl",
     "nhỏ",
     "It is a small room.",
     "Đó là một căn phòng nhỏ.",
     "A1"
    ],
    [
     "new",
     "adj",
     "nuː",
     "mới",
     "I have a new bike.",
     "Tôi có một chiếc xe đạp mới.",
     "A1"
    ],
    [
     "old",
     "adj",
     "oʊld",
     "cũ, già",
     "That is an old house.",
     "Đó là một ngôi nhà cũ.",
     "A1"
    ],
    [
     "hot",
     "adj",
     "hɑːt",
     "nóng",
     "The soup is very hot.",
     "Món súp rất nóng.",
     "A1"
    ],
    [
     "cold",
     "adj",
     "koʊld",
     "lạnh",
     "The water is cold.",
     "Nước lạnh.",
     "A1"
    ],
    [
     "easy",
     "adj",
     "ˈiːzi",
     "dễ",
     "The test was easy.",
     "Bài kiểm tra rất dễ.",
     "A1"
    ],
    [
     "difficult",
     "adj",
     "ˈdɪfəkəlt",
     "khó",
     "This problem is difficult.",
     "Bài toán này khó.",
     "A1"
    ],
    [
     "fast",
     "adj",
     "fæst",
     "nhanh",
     "The train is very fast.",
     "Tàu rất nhanh.",
     "A1"
    ],
    [
     "slow",
     "adj",
     "sloʊ",
     "chậm",
     "The bus is slow today.",
     "Hôm nay xe buýt chạy chậm.",
     "A1"
    ],
    [
     "neat",
     "adj",
     "niːt",
     "gọn gàng, sạch sẽ",
     "My room is neat and clean.",
     "Phòng tôi gọn gàng và sạch sẽ.",
     "B2"
    ],
    [
     "dirty",
     "adj",
     "ˈdɜːrti",
     "bẩn",
     "Your shoes are dirty.",
     "Giày của bạn bẩn.",
     "A1"
    ]
   ]
  },
  {
   "icon": "🕒",
   "vi": "Trạng từ và từ nối",
   "en": "Adverbs and Connectors",
   "words": [
    [
     "always",
     "adv",
     "ˈɔːlˌweɪz",
     "luôn luôn",
     "I always eat breakfast.",
     "Tôi luôn luôn ăn sáng.",
     "A1"
    ],
    [
     "usually",
     "adv",
     "ˈjuːʒəwəli",
     "thường xuyên",
     "We usually walk to school.",
     "Chúng tôi thường đi bộ đến trường.",
     "A1"
    ],
    [
     "sometimes",
     "adv",
     "səmˈtaɪmz",
     "thỉnh thoảng",
     "Sometimes I cook dinner.",
     "Thỉnh thoảng tôi nấu bữa tối.",
     "B1"
    ],
    [
     "never",
     "adv",
     "ˈnevər",
     "không bao giờ",
     "He never drinks coffee.",
     "Anh ấy không bao giờ uống cà phê.",
     "A1"
    ],
    [
     "often",
     "adv",
     "ˈɔːfən",
     "hay, thường",
     "She often visits her grandma.",
     "Cô ấy hay thăm bà.",
     "A1"
    ],
    [
     "already",
     "adv",
     "ɔːlˈredi",
     "đã, rồi",
     "I have already finished.",
     "Tôi đã làm xong rồi.",
     "A1"
    ],
    [
     "soon",
     "adv",
     "suːn",
     "sớm, chẳng bao lâu",
     "See you soon!",
     "Hẹn sớm gặp lại!",
     "A1"
    ],
    [
     "because",
     "conj",
     "bɪˈkɔːz",
     "bởi vì",
     "I stayed home because it rained.",
     "Tôi ở nhà vì trời mưa.",
     "A1"
    ],
    [
     "but",
     "conj",
     "bʌt",
     "nhưng",
     "I like tea but not coffee.",
     "Tôi thích trà nhưng không thích cà phê.",
     "A1"
    ],
    [
     "and",
     "conj",
     "ənd",
     "và",
     "I have a cat and a dog.",
     "Tôi có một con mèo và một con chó.",
     "A1"
    ],
    [
     "so",
     "conj",
     "soʊ",
     "vì vậy",
     "I was tired, so I slept early.",
     "Tôi mệt nên đi ngủ sớm.",
     "A1"
    ],
    [
     "although",
     "conj",
     "ˌɔːlˈðoʊ",
     "mặc dù",
     "Although it was cold, we went out.",
     "Mặc dù trời lạnh, chúng tôi vẫn đi ra ngoài.",
     "A2"
    ]
   ]
  },
  {
   "icon": "📍",
   "vi": "Giới từ chỉ vị trí",
   "en": "Prepositions of Place",
   "words": [
    [
     "in",
     "prep",
     "ɪn",
     "trong",
     "The keys are in my bag.",
     "Chìa khóa ở trong túi của tôi.",
     "A1"
    ],
    [
     "on",
     "prep",
     "ɑːn",
     "trên",
     "The book is on the table.",
     "Cuốn sách ở trên bàn.",
     "A1"
    ],
    [
     "under",
     "prep",
     "ˈʌndər",
     "dưới",
     "The cat is under the chair.",
     "Con mèo ở dưới cái ghế.",
     "A1"
    ],
    [
     "next to",
     "prep",
     "nekst tuː",
     "bên cạnh",
     "The bank is next to the school.",
     "Ngân hàng nằm cạnh trường học.",
     "A2"
    ],
    [
     "between",
     "prep",
     "bɪˈtwiːn",
     "ở giữa",
     "The park is between two streets.",
     "Công viên nằm giữa hai con phố.",
     "A1"
    ],
    [
     "behind",
     "prep",
     "bɪˈhaɪnd",
     "phía sau",
     "He stands behind the door.",
     "Anh ấy đứng sau cánh cửa.",
     "A1"
    ],
    [
     "in front of",
     "prep",
     "ɪn frʌnt ʌv",
     "phía trước",
     "A car stopped in front of me.",
     "Một chiếc xe dừng lại trước mặt tôi.",
     "A1"
    ],
    [
     "opposite",
     "prep",
     "ˈɑːpəzət",
     "đối diện",
     "The cafe is opposite the library.",
     "Quán cà phê đối diện thư viện.",
     "A2"
    ],
    [
     "near",
     "prep",
     "nɪr",
     "gần",
     "I live near the station.",
     "Tôi sống gần nhà ga.",
     "A1"
    ],
    [
     "above",
     "prep",
     "əˈbʌv",
     "phía trên",
     "The lamp hangs above the table.",
     "Chiếc đèn treo phía trên bàn.",
     "A1"
    ],
    [
     "inside",
     "prep",
     "ˌɪnˈsaɪd",
     "bên trong",
     "Come inside, it is raining.",
     "Vào trong đi, trời đang mưa.",
     "A1"
    ],
    [
     "outside",
     "prep",
     "ˈaʊtˈsaɪd",
     "bên ngoài",
     "The children play outside.",
     "Bọn trẻ chơi bên ngoài.",
     "A1"
    ]
   ]
  },
  {
   "icon": "💬",
   "vi": "Chào hỏi và giao tiếp",
   "en": "Greetings and Polite Phrases",
   "words": [
    [
     "hello",
     "int",
     "həˈloʊ",
     "xin chào",
     "Hello, how are you?",
     "Xin chào, bạn khỏe không?",
     "A1"
    ],
    [
     "goodbye",
     "int",
     "ˌɡʊdˈbaɪ",
     "tạm biệt",
     "Goodbye, see you tomorrow!",
     "Tạm biệt, hẹn mai gặp lại!",
     "B1"
    ],
    [
     "please",
     "int",
     "pliːz",
     "làm ơn",
     "Please sit down.",
     "Xin mời ngồi.",
     "A1"
    ],
    [
     "thank you",
     "phr",
     "θæŋk juː",
     "cảm ơn",
     "Thank you for your help.",
     "Cảm ơn sự giúp đỡ của bạn.",
     "A1"
    ],
    [
     "sorry",
     "adj",
     "ˈsɑːri",
     "xin lỗi, tiếc",
     "I am sorry I am late.",
     "Tôi xin lỗi vì đến muộn.",
     "A1"
    ],
    [
     "excuse me",
     "phr",
     "ɪksˈkjuːs miː",
     "xin lỗi (làm phiền)",
     "Excuse me, where is the station?",
     "Xin lỗi, nhà ga ở đâu ạ?",
     "A1"
    ],
    [
     "welcome",
     "int",
     "ˈwelkəm",
     "chào mừng",
     "Welcome to our home!",
     "Chào mừng đến nhà chúng tôi!",
     "A1"
    ],
    [
     "congratulations",
     "int",
     "kənˌɡrætʃəˈleɪʃənz",
     "chúc mừng",
     "Congratulations on your new job!",
     "Chúc mừng bạn có công việc mới!",
     "B1"
    ],
    [
     "good luck",
     "phr",
     "ɡʊd lʌk",
     "chúc may mắn",
     "Good luck with your exam!",
     "Chúc bạn may mắn trong kỳ thi!",
     "A1"
    ],
    [
     "nice to meet you",
     "phr",
     "naɪs tuː miːt juː",
     "rất vui được gặp bạn",
     "Nice to meet you, Lan.",
     "Rất vui được gặp bạn, Lan.",
     "A1"
    ],
    [
     "take care",
     "phr",
     "teɪk ker",
     "bảo trọng",
     "Take care and stay safe.",
     "Bảo trọng và giữ an toàn nhé.",
     "A1"
    ],
    [
     "see you later",
     "phr",
     "siː juː ˈleɪtər",
     "hẹn gặp lại sau",
     "I have to go now, see you later.",
     "Giờ tôi phải đi rồi, hẹn gặp lại.",
     "A1"
    ]
   ]
  }
 ]
};
