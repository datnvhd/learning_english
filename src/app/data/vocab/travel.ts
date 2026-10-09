/**
 * DỮ LIỆU TỪ VỰNG – chủ đề "travel"
 * ------------------------------------------------------------------
 * FILE NÀY ĐƯỢC SINH TỰ ĐỘNG bởi tools/build-vocab.mjs – KHÔNG sửa tay.
 * Muốn thêm/sửa từ: chỉnh tools/vocab-src/travel.txt rồi chạy "npm run build:vocab".
 * Mỗi từ là một mảng: [từ, loại từ, phiên âm IPA, nghĩa, câu ví dụ EN, câu ví dụ VI, trình độ CEFR].
 */
import { TopicVocabData } from '../../models/vocab.model';

export const VOCAB: TopicVocabData = {
 "lessons": [
  {
   "icon": "🧳",
   "vi": "Chuẩn bị chuyến đi",
   "en": "Trip Preparation",
   "words": [
    [
     "travel",
     "v",
     "ˈtrævəl",
     "đi du lịch",
     "I love to travel with my family.",
     "Tôi thích đi du lịch cùng gia đình.",
     "A1"
    ],
    [
     "trip",
     "n",
     "trɪp",
     "chuyến đi",
     "We planned a trip to Da Nang.",
     "Chúng tôi lên kế hoạch cho chuyến đi Đà Nẵng.",
     "A1"
    ],
    [
     "journey",
     "n",
     "ˈdʒɜːrni",
     "hành trình",
     "The journey took five hours.",
     "Hành trình mất năm tiếng.",
     "A2"
    ],
    [
     "vacation",
     "n",
     "veɪˈkeɪʃən",
     "kỳ nghỉ",
     "We spent our vacation at the beach.",
     "Chúng tôi trải qua kỳ nghỉ ở bãi biển.",
     "A1"
    ],
    [
     "destination",
     "n",
     "ˌdestəˈneɪʃən",
     "điểm đến",
     "Paris is my dream destination.",
     "Paris là điểm đến mơ ước của tôi.",
     "B1"
    ],
    [
     "luggage",
     "n",
     "ˈlʌɡədʒ",
     "hành lý",
     "My luggage is very heavy.",
     "Hành lý của tôi rất nặng.",
     "B1"
    ],
    [
     "suitcase",
     "n",
     "ˈsuːtˌkeɪs",
     "va-li",
     "She packed her suitcase last night.",
     "Cô ấy đã xếp va-li tối qua.",
     "A2"
    ],
    [
     "pack",
     "v",
     "pæk",
     "đóng gói, xếp đồ",
     "Did you pack your camera?",
     "Bạn đã xếp máy ảnh chưa?",
     "A2"
    ],
    [
     "budget",
     "n",
     "ˈbʌdʒɪt",
     "ngân sách",
     "Our travel budget is small.",
     "Ngân sách du lịch của chúng tôi khá nhỏ.",
     "A2"
    ],
    [
     "itinerary",
     "n",
     "aɪˈtɪnərˌeri",
     "lịch trình chuyến đi",
     "Here is our itinerary for the week.",
     "Đây là lịch trình chuyến đi của chúng tôi cho cả tuần.",
     "B1"
    ],
    [
     "guidebook",
     "n",
     "ˈɡaɪdˌbʊk",
     "sách hướng dẫn du lịch",
     "I bought a guidebook about Japan.",
     "Tôi mua một cuốn sách hướng dẫn du lịch Nhật Bản.",
     "A2"
    ],
    [
     "map",
     "n",
     "mæp",
     "bản đồ",
     "Can you show me on the map?",
     "Bạn chỉ cho tôi trên bản đồ được không?",
     "A1"
    ]
   ]
  },
  {
   "icon": "✈️",
   "vi": "Ở sân bay",
   "en": "At the Airport",
   "words": [
    [
     "airport",
     "n",
     "ˈerˌpɔːrt",
     "sân bay",
     "The airport is far from the city.",
     "Sân bay cách xa thành phố.",
     "A1"
    ],
    [
     "terminal",
     "n",
     "ˈtɜːrmənəl",
     "nhà ga sân bay",
     "Our flight leaves from terminal two.",
     "Chuyến bay của chúng tôi khởi hành từ nhà ga số hai.",
     "B1"
    ],
    [
     "check-in",
     "n",
     "tʃek ɪn",
     "thủ tục làm vé",
     "Check-in opens three hours before.",
     "Thủ tục làm vé mở trước ba tiếng.",
     "B1"
    ],
    [
     "boarding pass",
     "n",
     "ˈbɔːrdɪŋ pæs",
     "thẻ lên máy bay",
     "Please show your boarding pass.",
     "Vui lòng xuất trình thẻ lên máy bay.",
     "B1"
    ],
    [
     "gate",
     "n",
     "ɡeɪt",
     "cổng ra máy bay",
     "Go to gate twelve.",
     "Hãy đến cổng số mười hai.",
     "A2"
    ],
    [
     "departure",
     "n",
     "dɪˈpɑːrtʃər",
     "giờ khởi hành",
     "The departure time is nine o'clock.",
     "Giờ khởi hành là chín giờ.",
     "B1"
    ],
    [
     "arrival",
     "n",
     "ərˈaɪvəl",
     "giờ đến",
     "The arrival board shows the time.",
     "Bảng giờ đến hiển thị thời gian.",
     "B1"
    ],
    [
     "security check",
     "n",
     "sɪˈkjʊrəti tʃek",
     "kiểm tra an ninh",
     "The security check was quick.",
     "Việc kiểm tra an ninh diễn ra nhanh.",
     "B1"
    ],
    [
     "duty-free",
     "adj",
     "ˈduːti friː",
     "miễn thuế",
     "We bought perfume at the duty-free shop.",
     "Chúng tôi mua nước hoa ở cửa hàng miễn thuế.",
     "B1"
    ],
    [
     "baggage claim",
     "n",
     "ˈbæɡədʒ kleɪm",
     "khu nhận hành lý",
     "Wait at the baggage claim.",
     "Hãy chờ ở khu nhận hành lý.",
     "B1"
    ],
    [
     "carry-on",
     "n",
     "ˈkæri ɑːn",
     "hành lý xách tay",
     "My carry-on is small.",
     "Hành lý xách tay của tôi nhỏ.",
     "A1"
    ],
    [
     "delayed",
     "adj",
     "dɪˈleɪd",
     "bị hoãn",
     "Our flight is delayed.",
     "Chuyến bay của chúng tôi bị hoãn.",
     "B1"
    ]
   ]
  },
  {
   "icon": "🛫",
   "vi": "Chuyến bay",
   "en": "On the Plane",
   "words": [
    [
     "plane",
     "n",
     "pleɪn",
     "máy bay",
     "The plane is very big.",
     "Máy bay rất lớn.",
     "A1"
    ],
    [
     "flight",
     "n",
     "flaɪt",
     "chuyến bay",
     "The flight lasts two hours.",
     "Chuyến bay kéo dài hai tiếng.",
     "A2"
    ],
    [
     "pilot",
     "n",
     "ˈpaɪlət",
     "phi công",
     "The pilot welcomed the passengers.",
     "Phi công chào đón hành khách.",
     "A2"
    ],
    [
     "flight attendant",
     "n",
     "flaɪt əˈtendənt",
     "tiếp viên hàng không",
     "The flight attendant served drinks.",
     "Tiếp viên hàng không phục vụ đồ uống.",
     "B1"
    ],
    [
     "passenger",
     "n",
     "ˈpæsəndʒər",
     "hành khách",
     "Every passenger must wear a seat belt.",
     "Mọi hành khách đều phải thắt dây an toàn.",
     "A2"
    ],
    [
     "seat belt",
     "n",
     "siːt belt",
     "dây an toàn",
     "Fasten your seat belt.",
     "Hãy thắt dây an toàn.",
     "A2"
    ],
    [
     "window seat",
     "n",
     "ˈwɪndoʊ siːt",
     "ghế cạnh cửa sổ",
     "I prefer a window seat.",
     "Tôi thích ghế cạnh cửa sổ hơn.",
     "A1"
    ],
    [
     "aisle",
     "n",
     "aɪl",
     "lối đi giữa các hàng ghế",
     "He sat on the aisle.",
     "Anh ấy ngồi ở ghế cạnh lối đi.",
     "A2"
    ],
    [
     "take off",
     "phr",
     "teɪk ɔːf",
     "cất cánh",
     "The plane takes off in ten minutes.",
     "Máy bay cất cánh sau mười phút.",
     "A1"
    ],
    [
     "land",
     "v",
     "lænd",
     "hạ cánh",
     "We will land in Tokyo soon.",
     "Chúng ta sắp hạ cánh ở Tokyo.",
     "A2"
    ],
    [
     "turbulence",
     "n",
     "ˈtɜːrbjələns",
     "nhiễu động",
     "We felt some turbulence.",
     "Chúng tôi cảm thấy vài đợt nhiễu động.",
     "B1"
    ],
    [
     "economy class",
     "n",
     "ɪˈkɑːnəmi klæs",
     "hạng phổ thông",
     "We flew economy class.",
     "Chúng tôi bay hạng phổ thông.",
     "B1"
    ]
   ]
  },
  {
   "icon": "🛂",
   "vi": "Giấy tờ và hải quan",
   "en": "Documents and Customs",
   "words": [
    [
     "passport",
     "n",
     "ˈpæˌspɔːrt",
     "hộ chiếu",
     "Do not lose your passport.",
     "Đừng làm mất hộ chiếu của bạn.",
     "B1"
    ],
    [
     "visa",
     "n",
     "ˈviːzə",
     "thị thực",
     "I need a visa for this country.",
     "Tôi cần thị thực cho quốc gia này.",
     "B1"
    ],
    [
     "customs",
     "n",
     "ˈkʌstəmz",
     "hải quan",
     "We passed through customs quickly.",
     "Chúng tôi qua hải quan rất nhanh.",
     "B1"
    ],
    [
     "immigration",
     "n",
     "ˌɪməˈɡreɪʃən",
     "nhập cảnh",
     "The immigration officer checked my passport.",
     "Nhân viên nhập cảnh kiểm tra hộ chiếu của tôi.",
     "B1"
    ],
    [
     "declare",
     "v",
     "dɪˈkler",
     "khai báo",
     "Do you have anything to declare?",
     "Bạn có gì cần khai báo không?",
     "B1"
    ],
    [
     "form",
     "n",
     "fɔːrm",
     "tờ khai",
     "Fill in this form, please.",
     "Vui lòng điền vào tờ khai này.",
     "A1"
    ],
    [
     "identity card",
     "n",
     "aɪˈdentɪˌtiː kɑːrd",
     "thẻ căn cước",
     "Please show your identity card.",
     "Vui lòng xuất trình thẻ căn cước.",
     "B1"
    ],
    [
     "insurance",
     "n",
     "ˌɪnˈʃʊrəns",
     "bảo hiểm",
     "Travel insurance is important.",
     "Bảo hiểm du lịch rất quan trọng.",
     "B1"
    ],
    [
     "stamp",
     "n",
     "stæmp",
     "dấu xác nhận",
     "The officer put a stamp in my passport.",
     "Nhân viên đóng dấu vào hộ chiếu của tôi.",
     "A2"
    ],
    [
     "border",
     "n",
     "ˈbɔːrdər",
     "biên giới",
     "We crossed the border by bus.",
     "Chúng tôi qua biên giới bằng xe buýt.",
     "B1"
    ],
    [
     "quarantine",
     "n",
     "ˈkwɔːrənˌtiːn",
     "cách ly",
     "Visitors did not need quarantine.",
     "Du khách không cần cách ly.",
     "B2"
    ],
    [
     "expire",
     "v",
     "ɪkˈspaɪr",
     "hết hạn",
     "My passport expires next year.",
     "Hộ chiếu của tôi hết hạn vào năm sau.",
     "B1"
    ]
   ]
  },
  {
   "icon": "🏨",
   "vi": "Khách sạn",
   "en": "Hotels",
   "words": [
    [
     "hotel",
     "n",
     "hoʊˈtel",
     "khách sạn",
     "The hotel is near the beach.",
     "Khách sạn gần bãi biển.",
     "A1"
    ],
    [
     "hostel",
     "n",
     "ˈhɑːstəl",
     "nhà nghỉ bình dân",
     "We stayed in a cheap hostel.",
     "Chúng tôi ở một nhà nghỉ bình dân rẻ tiền.",
     "B1"
    ],
    [
     "resort",
     "n",
     "rɪˈzɔːrt",
     "khu nghỉ dưỡng",
     "The resort has a big pool.",
     "Khu nghỉ dưỡng có một hồ bơi lớn.",
     "B1"
    ],
    [
     "reception",
     "n",
     "rɪˈsepʃən",
     "quầy lễ tân",
     "Ask at the reception, please.",
     "Hãy hỏi ở quầy lễ tân.",
     "B1"
    ],
    [
     "receptionist",
     "n",
     "rɪˈsepʃənɪst",
     "nhân viên lễ tân",
     "The receptionist speaks English.",
     "Nhân viên lễ tân nói được tiếng Anh.",
     "A2"
    ],
    [
     "single room",
     "n",
     "ˈsɪŋɡəl ruːm",
     "phòng đơn",
     "I booked a single room.",
     "Tôi đã đặt một phòng đơn.",
     "A2"
    ],
    [
     "double room",
     "n",
     "ˈdʌbəl ruːm",
     "phòng đôi",
     "A double room costs fifty dollars.",
     "Một phòng đôi giá năm mươi đô la.",
     "A2"
    ],
    [
     "key card",
     "n",
     "kiː kɑːrd",
     "thẻ chìa khóa",
     "Here is your key card.",
     "Đây là thẻ chìa khóa của bạn.",
     "A1"
    ],
    [
     "lobby",
     "n",
     "ˈlɑːbi",
     "sảnh khách sạn",
     "We waited in the lobby.",
     "Chúng tôi chờ ở sảnh.",
     "B2"
    ],
    [
     "elevator",
     "n",
     "ˈeləˌveɪtər",
     "thang máy",
     "The elevator is on your left.",
     "Thang máy ở bên trái bạn.",
     "A2"
    ],
    [
     "breakfast included",
     "phr",
     "ˈbrekfəst ˌɪnˈkluːdəd",
     "bao gồm bữa sáng",
     "The room has breakfast included.",
     "Phòng có bao gồm bữa sáng.",
     "B1"
    ],
    [
     "view",
     "n",
     "vjuː",
     "cảnh nhìn",
     "The room has a lovely sea view.",
     "Phòng có tầm nhìn ra biển tuyệt đẹp.",
     "A2"
    ]
   ]
  },
  {
   "icon": "📝",
   "vi": "Đặt phòng và dịch vụ",
   "en": "Booking and Services",
   "words": [
    [
     "book",
     "v",
     "bʊk",
     "đặt chỗ",
     "I want to book a room.",
     "Tôi muốn đặt một phòng.",
     "A1"
    ],
    [
     "reservation",
     "n",
     "ˌrezərˈveɪʃən",
     "sự đặt chỗ",
     "I have a reservation under Lan.",
     "Tôi có đặt chỗ dưới tên Lan.",
     "B1"
    ],
    [
     "cancel",
     "v",
     "ˈkænsəl",
     "hủy",
     "We had to cancel our booking.",
     "Chúng tôi phải hủy đặt chỗ.",
     "B1"
    ],
    [
     "available",
     "adj",
     "əˈveɪləbəl",
     "còn trống",
     "Is a room available tonight?",
     "Tối nay còn phòng trống không?",
     "B1"
    ],
    [
     "full",
     "adj",
     "fʊl",
     "hết chỗ",
     "Sorry, the hotel is full.",
     "Xin lỗi, khách sạn đã hết phòng.",
     "A1"
    ],
    [
     "check out",
     "phr",
     "tʃek aʊt",
     "trả phòng",
     "We check out at noon.",
     "Chúng tôi trả phòng lúc trưa.",
     "A1"
    ],
    [
     "extra",
     "adj",
     "ˈekstrə",
     "thêm",
     "Can I have an extra towel?",
     "Cho tôi xin thêm một chiếc khăn được không?",
     "A2"
    ],
    [
     "deposit",
     "n",
     "dəˈpɑːzɪt",
     "tiền đặt cọc",
     "You need to pay a deposit.",
     "Bạn cần trả tiền đặt cọc.",
     "B1"
    ],
    [
     "room service",
     "n",
     "ruːm ˈsɜːrvəs",
     "dịch vụ phòng",
     "We ordered room service.",
     "Chúng tôi đã gọi dịch vụ phòng.",
     "B1"
    ],
    [
     "Wi-Fi",
     "n",
     "ˈwaɪfaɪ",
     "Wi-Fi",
     "What is the Wi-Fi password?",
     "Mật khẩu Wi-Fi là gì?",
     "B1"
    ],
    [
     "air conditioner",
     "n",
     "er kənˈdɪʃənər",
     "máy điều hòa",
     "The air conditioner does not work.",
     "Máy điều hòa không hoạt động.",
     "B1"
    ],
    [
     "complaint",
     "n",
     "kəmˈpleɪnt",
     "lời phàn nàn",
     "I would like to make a complaint.",
     "Tôi muốn phàn nàn một việc.",
     "A2"
    ]
   ]
  },
  {
   "icon": "🚗",
   "vi": "Phương tiện di chuyển",
   "en": "Getting Around",
   "words": [
    [
     "transport",
     "n",
     "trænˈspɔːrt",
     "phương tiện giao thông",
     "Public transport is cheap here.",
     "Phương tiện công cộng ở đây rất rẻ.",
     "B1"
    ],
    [
     "bus stop",
     "n",
     "bʌs stɑːp",
     "trạm xe buýt",
     "The bus stop is over there.",
     "Trạm xe buýt ở đằng kia.",
     "A2"
    ],
    [
     "station",
     "n",
     "ˈsteɪʃən",
     "nhà ga",
     "The station is crowded.",
     "Nhà ga rất đông.",
     "A1"
    ],
    [
     "ferry",
     "n",
     "ˈferi",
     "phà",
     "We took a ferry to the island.",
     "Chúng tôi đi phà ra đảo.",
     "B1"
    ],
    [
     "cable car",
     "n",
     "ˈkeɪbəl kɑːr",
     "cáp treo",
     "The cable car goes up the mountain.",
     "Cáp treo đi lên núi.",
     "B2"
    ],
    [
     "tram",
     "n",
     "træm",
     "xe điện",
     "The old tram is very charming.",
     "Chiếc xe điện cũ rất duyên dáng.",
     "A2"
    ],
    [
     "scooter",
     "n",
     "ˈskuːtər",
     "xe tay ga",
     "We rented a scooter for two days.",
     "Chúng tôi thuê một chiếc xe tay ga trong hai ngày.",
     "B2"
    ],
    [
     "rickshaw",
     "n",
     "ˈrɪkʃɔː",
     "xe xích lô",
     "A rickshaw ride is fun.",
     "Đi xích lô rất vui.",
     "B1"
    ],
    [
     "timetable",
     "n",
     "ˈtaɪmˌteɪbəl",
     "bảng giờ tàu xe",
     "Check the timetable first.",
     "Hãy xem bảng giờ tàu xe trước.",
     "A2"
    ],
    [
     "fare",
     "n",
     "fer",
     "giá vé",
     "The fare is two dollars.",
     "Giá vé là hai đô la.",
     "A2"
    ],
    [
     "one-way",
     "adj",
     "wʌn weɪ",
     "một chiều",
     "A one-way ticket, please.",
     "Cho tôi một vé một chiều.",
     "A1"
    ],
    [
     "round-trip",
     "adj",
     "raʊnd trɪp",
     "khứ hồi",
     "I bought a round-trip ticket.",
     "Tôi đã mua vé khứ hồi.",
     "A2"
    ]
   ]
  },
  {
   "icon": "🧭",
   "vi": "Hỏi đường",
   "en": "Asking for Directions",
   "words": [
    [
     "direction",
     "n",
     "dərˈekʃən",
     "hướng đi",
     "Which direction is the museum?",
     "Bảo tàng ở hướng nào?",
     "A2"
    ],
    [
     "turn left",
     "phr",
     "tɜːrn left",
     "rẽ trái",
     "Turn left at the corner.",
     "Rẽ trái ở góc phố.",
     "A1"
    ],
    [
     "turn right",
     "phr",
     "tɜːrn raɪt",
     "rẽ phải",
     "Turn right at the traffic light.",
     "Rẽ phải ở đèn giao thông.",
     "A1"
    ],
    [
     "straight ahead",
     "phr",
     "streɪt əˈhed",
     "đi thẳng",
     "Go straight ahead for two blocks.",
     "Đi thẳng hai dãy nhà.",
     "A2"
    ],
    [
     "corner",
     "n",
     "ˈkɔːrnər",
     "góc phố",
     "The cafe is on the corner.",
     "Quán cà phê ở góc phố.",
     "A1"
    ],
    [
     "crossing",
     "n",
     "ˈkrɔːsɪŋ",
     "chỗ băng qua đường",
     "Use the crossing, please.",
     "Hãy dùng chỗ băng qua đường.",
     "B1"
    ],
    [
     "intersection",
     "n",
     "ˌɪntərˈsekʃən",
     "ngã tư",
     "Turn left at the next intersection.",
     "Rẽ trái ở ngã tư tiếp theo.",
     "B2"
    ],
    [
     "lost",
     "adj",
     "lɔːst",
     "bị lạc",
     "Excuse me, I am lost.",
     "Xin lỗi, tôi bị lạc.",
     "A2"
    ],
    [
     "nearby",
     "adv",
     "ˈnɪrˈbaɪ",
     "gần đây",
     "Is there a bank nearby?",
     "Gần đây có ngân hàng không?",
     "B1"
    ],
    [
     "distance",
     "n",
     "ˈdɪstəns",
     "khoảng cách",
     "What is the distance to the beach?",
     "Khoảng cách đến bãi biển là bao xa?",
     "B1"
    ],
    [
     "landmark",
     "n",
     "ˈlændˌmɑːrk",
     "địa danh nổi bật",
     "The tower is a famous landmark.",
     "Tòa tháp là một địa danh nổi tiếng.",
     "B1"
    ],
    [
     "block",
     "n",
     "blɑːk",
     "dãy nhà",
     "The hotel is two blocks away.",
     "Khách sạn cách hai dãy nhà.",
     "A1"
    ]
   ]
  },
  {
   "icon": "🗼",
   "vi": "Địa danh nổi tiếng",
   "en": "Famous Places",
   "words": [
    [
     "tower",
     "n",
     "ˈtaʊər",
     "tòa tháp",
     "We climbed the tower.",
     "Chúng tôi leo lên tòa tháp.",
     "A1"
    ],
    [
     "castle",
     "n",
     "ˈkæsəl",
     "lâu đài",
     "The castle is on a hill.",
     "Lâu đài nằm trên một ngọn đồi.",
     "A2"
    ],
    [
     "palace",
     "n",
     "ˈpæləs",
     "cung điện",
     "The king lived in this palace.",
     "Nhà vua sống trong cung điện này.",
     "A1"
    ],
    [
     "temple",
     "n",
     "ˈtempəl",
     "ngôi đền",
     "We visited an old temple.",
     "Chúng tôi thăm một ngôi đền cổ.",
     "A1"
    ],
    [
     "pagoda",
     "n",
     "pəˈɡoʊdə",
     "ngôi chùa",
     "The pagoda is peaceful.",
     "Ngôi chùa rất yên bình.",
     "B1"
    ],
    [
     "cathedral",
     "n",
     "kəˈθiːdrəl",
     "nhà thờ lớn",
     "The cathedral is very tall.",
     "Nhà thờ lớn rất cao.",
     "B2"
    ],
    [
     "monument",
     "n",
     "ˈmɑːnjuːmənt",
     "đài tưởng niệm",
     "We took photos of the monument.",
     "Chúng tôi chụp ảnh đài tưởng niệm.",
     "B1"
    ],
    [
     "statue",
     "n",
     "ˈstæˌtʃuː",
     "bức tượng",
     "The statue stands in the square.",
     "Bức tượng đứng ở quảng trường.",
     "A2"
    ],
    [
     "square",
     "n",
     "skwer",
     "quảng trường",
     "Many people gather in the square.",
     "Nhiều người tụ tập ở quảng trường.",
     "A2"
    ],
    [
     "skyscraper",
     "n",
     "ˈskaɪˌskreɪpər",
     "tòa nhà chọc trời",
     "Tokyo has many skyscrapers.",
     "Tokyo có nhiều tòa nhà chọc trời.",
     "B1"
    ],
    [
     "harbor",
     "n",
     "ˈhɑːrbər",
     "bến cảng",
     "Boats fill the harbor.",
     "Thuyền đầy bến cảng.",
     "B1"
    ],
    [
     "opera house",
     "n",
     "ˈɑːprə haʊs",
     "nhà hát opera",
     "The Opera House in Sydney is famous.",
     "Nhà hát Opera ở Sydney rất nổi tiếng.",
     "A1"
    ]
   ]
  },
  {
   "icon": "🏖️",
   "vi": "Bãi biển",
   "en": "At the Beach",
   "words": [
    [
     "beach",
     "n",
     "biːtʃ",
     "bãi biển",
     "The beach is clean and quiet.",
     "Bãi biển sạch và yên tĩnh.",
     "A1"
    ],
    [
     "sea",
     "n",
     "siː",
     "biển",
     "The sea is calm today.",
     "Hôm nay biển lặng.",
     "A1"
    ],
    [
     "ocean",
     "n",
     "ˈoʊʃən",
     "đại dương",
     "The ocean is deep and blue.",
     "Đại dương sâu và xanh.",
     "B1"
    ],
    [
     "wave",
     "n",
     "weɪv",
     "con sóng",
     "The waves are high.",
     "Sóng rất cao.",
     "A2"
    ],
    [
     "sand",
     "n",
     "sænd",
     "cát",
     "The sand is hot.",
     "Cát rất nóng.",
     "B1"
    ],
    [
     "shell",
     "n",
     "ʃel",
     "vỏ sò",
     "She collected pretty shells.",
     "Cô ấy nhặt những chiếc vỏ sò xinh xắn.",
     "A2"
    ],
    [
     "island",
     "n",
     "ˈaɪlənd",
     "hòn đảo",
     "We visited a small island.",
     "Chúng tôi thăm một hòn đảo nhỏ.",
     "A1"
    ],
    [
     "coast",
     "n",
     "koʊst",
     "bờ biển",
     "The road follows the coast.",
     "Con đường chạy dọc bờ biển.",
     "A2"
    ],
    [
     "sunscreen",
     "n",
     "sənˈskriːn",
     "kem chống nắng",
     "Put on some sunscreen.",
     "Hãy bôi kem chống nắng.",
     "B1"
    ],
    [
     "swimsuit",
     "n",
     "ˈswɪmˌsuːt",
     "đồ bơi",
     "I forgot my swimsuit.",
     "Tôi quên đồ bơi.",
     "A2"
    ],
    [
     "snorkel",
     "v",
     "ˈsnɔːrkəl",
     "lặn ngắm san hô",
     "We snorkel near the reef.",
     "Chúng tôi lặn ngắm san hô gần rạn san hô.",
     "B1"
    ],
    [
     "lifeguard",
     "n",
     "ˈlaɪfˌɡɑːrd",
     "nhân viên cứu hộ",
     "The lifeguard watches the swimmers.",
     "Nhân viên cứu hộ trông chừng những người bơi.",
     "B1"
    ]
   ]
  },
  {
   "icon": "⛰️",
   "vi": "Núi và phiêu lưu",
   "en": "Mountains and Adventure",
   "words": [
    [
     "hill",
     "n",
     "hɪl",
     "ngọn đồi",
     "We walked up the hill.",
     "Chúng tôi đi bộ lên đồi.",
     "A1"
    ],
    [
     "peak",
     "n",
     "piːk",
     "đỉnh núi",
     "We reached the peak at sunrise.",
     "Chúng tôi lên tới đỉnh núi lúc bình minh.",
     "B2"
    ],
    [
     "valley",
     "n",
     "ˈvæli",
     "thung lũng",
     "The valley is green and quiet.",
     "Thung lũng xanh và yên tĩnh.",
     "A2"
    ],
    [
     "cliff",
     "n",
     "klɪf",
     "vách đá",
     "Be careful near the cliff.",
     "Hãy cẩn thận gần vách đá.",
     "B1"
    ],
    [
     "cave",
     "n",
     "keɪv",
     "hang động",
     "We explored a huge cave.",
     "Chúng tôi khám phá một hang động khổng lồ.",
     "B1"
    ],
    [
     "trail",
     "n",
     "treɪl",
     "lối mòn",
     "Follow the trail to the waterfall.",
     "Đi theo lối mòn đến thác nước.",
     "B1"
    ],
    [
     "waterfall",
     "n",
     "ˈwɔːtərˌfɔːl",
     "thác nước",
     "The waterfall is beautiful.",
     "Thác nước rất đẹp.",
     "B1"
    ],
    [
     "hike",
     "v",
     "haɪk",
     "đi bộ đường dài",
     "We hike every summer.",
     "Chúng tôi đi bộ đường dài mỗi mùa hè.",
     "A2"
    ],
    [
     "climb",
     "v",
     "klaɪm",
     "leo",
     "They climbed the mountain.",
     "Họ đã leo lên núi.",
     "A1"
    ],
    [
     "adventure",
     "n",
     "ædˈventʃər",
     "cuộc phiêu lưu",
     "Our trip was a real adventure.",
     "Chuyến đi của chúng tôi là một cuộc phiêu lưu thật sự.",
     "A2"
    ],
    [
     "explore",
     "v",
     "ɪkˈsplɔːr",
     "khám phá",
     "Let's explore the old town.",
     "Chúng ta hãy khám phá khu phố cổ.",
     "A2"
    ],
    [
     "backpacker",
     "n",
     "ˈbækˌpækər",
     "khách du lịch bụi",
     "Many backpackers visit Sapa.",
     "Nhiều khách du lịch bụi đến Sa Pa.",
     "B1"
    ]
   ]
  },
  {
   "icon": "⛺",
   "vi": "Cắm trại",
   "en": "Camping",
   "words": [
    [
     "camp",
     "v",
     "kæmp",
     "cắm trại",
     "We camp by the lake.",
     "Chúng tôi cắm trại bên hồ.",
     "A1"
    ],
    [
     "tent",
     "n",
     "tent",
     "lều",
     "Our tent is small.",
     "Cái lều của chúng tôi nhỏ.",
     "B1"
    ],
    [
     "sleeping bag",
     "n",
     "ˈsliːpɪŋ bæɡ",
     "túi ngủ",
     "My sleeping bag is warm.",
     "Túi ngủ của tôi rất ấm.",
     "B1"
    ],
    [
     "campfire",
     "n",
     "ˈkæmpˌfaɪər",
     "lửa trại",
     "We sang around the campfire.",
     "Chúng tôi hát quanh lửa trại.",
     "B1"
    ],
    [
     "flashlight",
     "n",
     "ˈflæʃˌlaɪt",
     "đèn pin",
     "Bring a flashlight, please.",
     "Hãy mang theo đèn pin.",
     "B1"
    ],
    [
     "compass",
     "n",
     "ˈkʌmpəs",
     "la bàn",
     "The compass points north.",
     "La bàn chỉ hướng bắc.",
     "B1"
    ],
    [
     "firewood",
     "n",
     "ˈfaɪərˌwʊd",
     "củi",
     "We need more firewood.",
     "Chúng tôi cần thêm củi.",
     "B1"
    ],
    [
     "campsite",
     "n",
     "ˈkæmpˌsaɪt",
     "khu cắm trại",
     "The campsite is near the river.",
     "Khu cắm trại gần con sông.",
     "B1"
    ],
    [
     "picnic",
     "n",
     "ˈpɪkˌnɪk",
     "buổi dã ngoại",
     "Let's have a picnic in the park.",
     "Chúng ta hãy đi dã ngoại ở công viên.",
     "A1"
    ],
    [
     "lantern",
     "n",
     "ˈlæntərn",
     "đèn lồng",
     "The lantern lit up our tent.",
     "Chiếc đèn lồng thắp sáng cái lều của chúng tôi.",
     "B1"
    ],
    [
     "bug spray",
     "n",
     "bʌɡ spreɪ",
     "thuốc xịt muỗi",
     "Put on some bug spray.",
     "Hãy xịt thuốc chống muỗi.",
     "B2"
    ],
    [
     "survive",
     "v",
     "sərˈvaɪv",
     "sống sót",
     "You can survive with basic tools.",
     "Bạn có thể sống sót với những dụng cụ cơ bản.",
     "A2"
    ]
   ]
  },
  {
   "icon": "🌄",
   "vi": "Cảnh quan thiên nhiên",
   "en": "Landscapes",
   "words": [
    [
     "desert",
     "n",
     "ˈdezərt",
     "sa mạc",
     "The desert is hot and dry.",
     "Sa mạc nóng và khô.",
     "A2"
    ],
    [
     "jungle",
     "n",
     "ˈdʒʌŋɡəl",
     "rừng nhiệt đới",
     "We walked through the jungle.",
     "Chúng tôi đi bộ xuyên rừng nhiệt đới.",
     "B1"
    ],
    [
     "volcano",
     "n",
     "vɑːlˈkeɪnoʊ",
     "núi lửa",
     "The volcano is still active.",
     "Ngọn núi lửa vẫn còn hoạt động.",
     "B1"
    ],
    [
     "glacier",
     "n",
     "ˈɡleɪʃər",
     "sông băng",
     "The glacier is melting.",
     "Sông băng đang tan chảy.",
     "B1"
    ],
    [
     "canyon",
     "n",
     "ˈkænjən",
     "hẻm núi",
     "The canyon is very deep.",
     "Hẻm núi rất sâu.",
     "B1"
    ],
    [
     "plain",
     "n",
     "pleɪn",
     "đồng bằng",
     "Rice grows on the plain.",
     "Lúa mọc trên đồng bằng.",
     "B1"
    ],
    [
     "field",
     "n",
     "fiːld",
     "cánh đồng",
     "The field is full of flowers.",
     "Cánh đồng đầy hoa.",
     "A1"
    ],
    [
     "bay",
     "n",
     "beɪ",
     "vịnh",
     "Ha Long Bay is world famous.",
     "Vịnh Hạ Long nổi tiếng thế giới.",
     "A2"
    ],
    [
     "cape",
     "n",
     "keɪp",
     "mũi đất",
     "We stood on the cape.",
     "Chúng tôi đứng trên mũi đất.",
     "B1"
    ],
    [
     "scenery",
     "n",
     "ˈsiːnəri",
     "phong cảnh",
     "The scenery is breathtaking.",
     "Phong cảnh đẹp đến nghẹt thở.",
     "A2"
    ],
    [
     "sunrise",
     "n",
     "ˈsʌnˌraɪz",
     "bình minh",
     "We watched the sunrise together.",
     "Chúng tôi cùng ngắm bình minh.",
     "B1"
    ],
    [
     "sunset",
     "n",
     "ˈsʌnˌset",
     "hoàng hôn",
     "The sunset was pink and orange.",
     "Hoàng hôn có màu hồng và cam.",
     "B1"
    ]
   ]
  },
  {
   "icon": "🦁",
   "vi": "Động vật hoang dã",
   "en": "Wildlife",
   "words": [
    [
     "wildlife",
     "n",
     "ˈwaɪldˌlaɪf",
     "động vật hoang dã",
     "We saw amazing wildlife.",
     "Chúng tôi thấy động vật hoang dã tuyệt vời.",
     "B1"
    ],
    [
     "zoo",
     "n",
     "zuː",
     "sở thú",
     "The zoo is fun for kids.",
     "Sở thú rất vui cho trẻ em.",
     "A1"
    ],
    [
     "safari",
     "n",
     "səˈfɑːri",
     "chuyến săn thú (ngắm thú)",
     "We went on a safari in Africa.",
     "Chúng tôi đi một chuyến safari ở châu Phi.",
     "B1"
    ],
    [
     "elephant",
     "n",
     "ˈeləfənt",
     "con voi",
     "The elephant is huge.",
     "Con voi rất to.",
     "A2"
    ],
    [
     "lion",
     "n",
     "ˈlaɪən",
     "sư tử",
     "A lion sleeps under the tree.",
     "Một con sư tử ngủ dưới gốc cây.",
     "A1"
    ],
    [
     "tiger",
     "n",
     "ˈtaɪɡər",
     "con hổ",
     "The tiger is a rare animal.",
     "Hổ là một loài động vật quý hiếm.",
     "A1"
    ],
    [
     "monkey",
     "n",
     "ˈmʌŋki",
     "con khỉ",
     "A monkey took my banana.",
     "Một con khỉ đã lấy quả chuối của tôi.",
     "A1"
    ],
    [
     "dolphin",
     "n",
     "ˈdɑːlfən",
     "cá heo",
     "We saw dolphins near the boat.",
     "Chúng tôi thấy cá heo gần thuyền.",
     "B1"
    ],
    [
     "turtle",
     "n",
     "ˈtɜːrtəl",
     "con rùa",
     "The turtle walks slowly.",
     "Con rùa đi chậm rãi.",
     "B1"
    ],
    [
     "parrot",
     "n",
     "ˈperət",
     "con vẹt",
     "The parrot can say hello.",
     "Con vẹt có thể nói xin chào.",
     "B1"
    ],
    [
     "penguin",
     "n",
     "ˈpeŋɡwən",
     "chim cánh cụt",
     "Penguins live in cold places.",
     "Chim cánh cụt sống ở nơi lạnh.",
     "B2"
    ],
    [
     "whale",
     "n",
     "weɪl",
     "cá voi",
     "A whale jumped out of the water.",
     "Một con cá voi nhảy lên khỏi mặt nước.",
     "B1"
    ]
   ]
  },
  {
   "icon": "🌍",
   "vi": "Quốc gia",
   "en": "Countries",
   "words": [
    [
     "Vietnam",
     "n",
     "viˌetˈnɑːm",
     "Việt Nam",
     "Vietnam is a beautiful country.",
     "Việt Nam là một đất nước xinh đẹp.",
     "B1"
    ],
    [
     "Japan",
     "n",
     "dʒəˈpæn",
     "Nhật Bản",
     "Japan is famous for sushi.",
     "Nhật Bản nổi tiếng với món sushi.",
     "B1"
    ],
    [
     "Korea",
     "n",
     "ˌkɔːˈriːə",
     "Hàn Quốc",
     "We want to visit Korea.",
     "Chúng tôi muốn thăm Hàn Quốc.",
     "B1"
    ],
    [
     "China",
     "n",
     "ˈtʃaɪnə",
     "Trung Quốc",
     "China has a long history.",
     "Trung Quốc có lịch sử lâu đời.",
     "B1"
    ],
    [
     "Thailand",
     "n",
     "ˈtaɪˌlænd",
     "Thái Lan",
     "Thailand has beautiful islands.",
     "Thái Lan có những hòn đảo đẹp.",
     "B1"
    ],
    [
     "France",
     "n",
     "fræns",
     "nước Pháp",
     "France is famous for its food.",
     "Nước Pháp nổi tiếng về ẩm thực.",
     "B1"
    ],
    [
     "Italy",
     "n",
     "ˈɪtəli",
     "nước Ý",
     "We visited Rome in Italy.",
     "Chúng tôi thăm Rome ở nước Ý.",
     "B1"
    ],
    [
     "Germany",
     "n",
     "ˈdʒɜːrməni",
     "nước Đức",
     "Germany has many old castles.",
     "Nước Đức có nhiều lâu đài cổ.",
     "B1"
    ],
    [
     "Greece",
     "n",
     "ɡriːs",
     "Hy Lạp",
     "Santorini is in Greece.",
     "Santorini thuộc Hy Lạp.",
     "B1"
    ],
    [
     "Australia",
     "n",
     "ɔːˈstreɪljə",
     "nước Úc",
     "Kangaroos live in Australia.",
     "Chuột túi sống ở nước Úc.",
     "B1"
    ],
    [
     "Canada",
     "n",
     "ˈkænədə",
     "Canada",
     "Canada is very cold in winter.",
     "Canada rất lạnh vào mùa đông.",
     "B1"
    ],
    [
     "Brazil",
     "n",
     "brəˈzɪl",
     "Brazil",
     "Brazil is famous for football.",
     "Brazil nổi tiếng về bóng đá.",
     "B1"
    ],
    [
     "Egypt",
     "n",
     "ˈiːdʒəpt",
     "Ai Cập",
     "The pyramids are in Egypt.",
     "Các kim tự tháp ở Ai Cập.",
     "B1"
    ]
   ]
  },
  {
   "icon": "🗺️",
   "vi": "Châu lục và địa lý",
   "en": "Continents and Geography",
   "words": [
    [
     "continent",
     "n",
     "ˈkɑːntənənt",
     "châu lục",
     "Asia is the largest continent.",
     "Châu Á là châu lục lớn nhất.",
     "A2"
    ],
    [
     "Asia",
     "n",
     "ˈeɪʒə",
     "châu Á",
     "Vietnam is in Asia.",
     "Việt Nam ở châu Á.",
     "B1"
    ],
    [
     "Europe",
     "n",
     "ˈjʊrəp",
     "châu Âu",
     "We traveled around Europe.",
     "Chúng tôi đi du lịch khắp châu Âu.",
     "B1"
    ],
    [
     "Africa",
     "n",
     "ˈæfrəkɑː",
     "châu Phi",
     "Elephants live in Africa.",
     "Voi sống ở châu Phi.",
     "B1"
    ],
    [
     "America",
     "n",
     "əˈmerəkə",
     "châu Mỹ",
     "America has two continents.",
     "Châu Mỹ có hai lục địa.",
     "B1"
    ],
    [
     "Antarctica",
     "n",
     "ˌænˈtɑːrktɪkə",
     "châu Nam Cực",
     "Antarctica is covered in ice.",
     "Châu Nam Cực bị băng bao phủ.",
     "B1"
    ],
    [
     "equator",
     "n",
     "ɪˈkweɪtər",
     "đường xích đạo",
     "Singapore is near the equator.",
     "Singapore ở gần đường xích đạo.",
     "B1"
    ],
    [
     "north",
     "n",
     "nɔːrθ",
     "phía bắc",
     "Sapa is in the north of Vietnam.",
     "Sa Pa ở phía bắc Việt Nam.",
     "A2"
    ],
    [
     "south",
     "n",
     "saʊθ",
     "phía nam",
     "Can Tho is in the south.",
     "Cần Thơ ở phía nam.",
     "A2"
    ],
    [
     "east",
     "n",
     "iːst",
     "phía đông",
     "The sun rises in the east.",
     "Mặt trời mọc ở phía đông.",
     "A2"
    ],
    [
     "west",
     "n",
     "west",
     "phía tây",
     "The sun sets in the west.",
     "Mặt trời lặn ở phía tây.",
     "A2"
    ],
    [
     "capital",
     "n",
     "ˈkæpətəl",
     "thủ đô",
     "Hanoi is the capital of Vietnam.",
     "Hà Nội là thủ đô của Việt Nam.",
     "A2"
    ],
    [
     "globe",
     "n",
     "ɡloʊb",
     "quả địa cầu",
     "I spun the globe and pointed.",
     "Tôi xoay quả địa cầu và chỉ vào một chỗ.",
     "A2"
    ]
   ]
  },
  {
   "icon": "🗣️",
   "vi": "Quốc tịch và ngôn ngữ",
   "en": "Nationalities and Languages",
   "words": [
    [
     "nationality",
     "n",
     "ˌnæʃəˈnæləti",
     "quốc tịch",
     "What is your nationality?",
     "Quốc tịch của bạn là gì?",
     "A1"
    ],
    [
     "foreigner",
     "n",
     "ˈfɔːrənər",
     "người nước ngoài",
     "Many foreigners visit Hoi An.",
     "Nhiều người nước ngoài đến thăm Hội An.",
     "A1"
    ],
    [
     "tourist",
     "n",
     "ˈtʊrəst",
     "khách du lịch",
     "The tourists take many photos.",
     "Các du khách chụp rất nhiều ảnh.",
     "A2"
    ],
    [
     "local",
     "adj",
     "ˈloʊkəl",
     "người địa phương",
     "The locals are very friendly.",
     "Người địa phương rất thân thiện.",
     "A2"
    ],
    [
     "native",
     "adj",
     "ˈneɪtɪv",
     "bản địa",
     "She is a native English speaker.",
     "Cô ấy là người nói tiếng Anh bản ngữ.",
     "A2"
    ],
    [
     "Vietnamese",
     "adj",
     "viˌetnɑːˈmiːs",
     "người/tiếng Việt",
     "I speak Vietnamese and English.",
     "Tôi nói tiếng Việt và tiếng Anh.",
     "B1"
    ],
    [
     "English",
     "adj",
     "ˈɪŋɡlɪʃ",
     "tiếng Anh",
     "English is spoken around the world.",
     "Tiếng Anh được nói khắp thế giới.",
     "B1"
    ],
    [
     "Japanese",
     "adj",
     "ˌdʒæpəˈniːz",
     "người/tiếng Nhật",
     "Japanese food is healthy.",
     "Đồ ăn Nhật tốt cho sức khỏe.",
     "B1"
    ],
    [
     "French",
     "adj",
     "frentʃ",
     "người/tiếng Pháp",
     "She is learning French.",
     "Cô ấy đang học tiếng Pháp.",
     "B1"
    ],
    [
     "translate",
     "v",
     "trænzˈleɪt",
     "dịch",
     "Can you translate this sign?",
     "Bạn dịch giúp tấm biển này được không?",
     "B1"
    ],
    [
     "interpreter",
     "n",
     "ˌɪnˈtɜːrprətər",
     "thông dịch viên",
     "We need an interpreter.",
     "Chúng tôi cần một thông dịch viên.",
     "B2"
    ],
    [
     "accent",
     "n",
     "əkˈsent",
     "giọng nói",
     "He has a British accent.",
     "Anh ấy có giọng Anh.",
     "B1"
    ]
   ]
  },
  {
   "icon": "🎎",
   "vi": "Văn hóa và lễ hội",
   "en": "Culture and Traditions",
   "words": [
    [
     "culture",
     "n",
     "ˈkʌltʃər",
     "văn hóa",
     "Learning about culture is exciting.",
     "Tìm hiểu về văn hóa rất thú vị.",
     "A1"
    ],
    [
     "tradition",
     "n",
     "trəˈdɪʃən",
     "truyền thống",
     "It is a local tradition.",
     "Đó là một truyền thống địa phương.",
     "A2"
    ],
    [
     "custom",
     "n",
     "ˈkʌstəm",
     "phong tục",
     "Bowing is a custom in Japan.",
     "Cúi chào là một phong tục ở Nhật Bản.",
     "A2"
    ],
    [
     "costume",
     "n",
     "kɑːˈstuːm",
     "trang phục truyền thống",
     "They wear colorful costumes.",
     "Họ mặc những bộ trang phục nhiều màu sắc.",
     "B2"
    ],
    [
     "handicraft",
     "n",
     "ˈhændiˌkræft",
     "đồ thủ công",
     "The village sells handicrafts.",
     "Ngôi làng bán đồ thủ công.",
     "B2"
    ],
    [
     "folk",
     "adj",
     "foʊk",
     "dân gian",
     "We listened to folk music.",
     "Chúng tôi nghe nhạc dân gian.",
     "B1"
    ],
    [
     "ceremony",
     "n",
     "ˈserəˌmoʊni",
     "nghi lễ",
     "The tea ceremony was calm.",
     "Nghi lễ trà đạo thật thanh bình.",
     "B1"
    ],
    [
     "parade",
     "n",
     "pərˈeɪd",
     "cuộc diễu hành",
     "The parade passed our hotel.",
     "Cuộc diễu hành đi ngang qua khách sạn của chúng tôi.",
     "B2"
    ],
    [
     "lantern festival",
     "n",
     "ˈlæntərn ˈfestəvəl",
     "lễ hội đèn lồng",
     "Hoi An has a lantern festival.",
     "Hội An có lễ hội đèn lồng.",
     "B1"
    ],
    [
     "religion",
     "n",
     "rɪˈlɪdʒən",
     "tôn giáo",
     "Respect every religion.",
     "Hãy tôn trọng mọi tôn giáo.",
     "B1"
    ],
    [
     "ancient",
     "adj",
     "ˈeɪntʃənt",
     "cổ xưa",
     "We saw ancient paintings.",
     "Chúng tôi thấy những bức tranh cổ xưa.",
     "A2"
    ],
    [
     "heritage",
     "n",
     "ˈherətədʒ",
     "di sản",
     "Hoi An is a world heritage site.",
     "Hội An là một di sản thế giới.",
     "B2"
    ]
   ]
  },
  {
   "icon": "🏛️",
   "vi": "Lịch sử và di tích",
   "en": "History and Ruins",
   "words": [
    [
     "history",
     "n",
     "ˈhɪstəri",
     "lịch sử",
     "History is my favorite subject.",
     "Lịch sử là môn học yêu thích của tôi.",
     "A1"
    ],
    [
     "historic",
     "adj",
     "hɪˈstɔːrɪk",
     "có tính lịch sử",
     "We visited a historic town.",
     "Chúng tôi thăm một thị trấn lịch sử.",
     "B1"
    ],
    [
     "ruins",
     "n",
     "ˈruːənz",
     "tàn tích",
     "The ruins are thousands of years old.",
     "Tàn tích đó đã có hàng nghìn năm tuổi.",
     "A2"
    ],
    [
     "pyramid",
     "n",
     "ˈpɪrəmɪd",
     "kim tự tháp",
     "The pyramid is huge.",
     "Kim tự tháp rất đồ sộ.",
     "B1"
    ],
    [
     "emperor",
     "n",
     "ˈempərər",
     "hoàng đế",
     "The emperor built this palace.",
     "Hoàng đế đã xây cung điện này.",
     "B1"
    ],
    [
     "dynasty",
     "n",
     "ˈdaɪnəsti",
     "triều đại",
     "The Nguyen dynasty ruled Hue.",
     "Triều Nguyễn cai trị Huế.",
     "B1"
    ],
    [
     "battle",
     "n",
     "ˈbætəl",
     "trận chiến",
     "A famous battle happened here.",
     "Một trận chiến nổi tiếng đã xảy ra ở đây.",
     "B1"
    ],
    [
     "war",
     "n",
     "wɔːr",
     "chiến tranh",
     "The museum tells the story of the war.",
     "Bảo tàng kể câu chuyện về chiến tranh.",
     "A1"
    ],
    [
     "exhibition",
     "n",
     "ˌeksəˈbɪʃən",
     "cuộc triển lãm",
     "We saw an art exhibition.",
     "Chúng tôi xem một cuộc triển lãm nghệ thuật.",
     "A2"
    ],
    [
     "gallery",
     "n",
     "ˈɡæləri",
     "phòng tranh",
     "The gallery is free today.",
     "Phòng tranh hôm nay miễn phí.",
     "A2"
    ],
    [
     "artifact",
     "n",
     "ˈɑːrtəˌfækt",
     "cổ vật",
     "The museum keeps many artifacts.",
     "Bảo tàng lưu giữ nhiều cổ vật.",
     "B1"
    ],
    [
     "citadel",
     "n",
     "ˈsɪtəˌdel",
     "thành cổ",
     "The citadel stands by the river.",
     "Thành cổ nằm bên sông.",
     "B1"
    ]
   ]
  },
  {
   "icon": "🎁",
   "vi": "Quà lưu niệm và mua sắm",
   "en": "Souvenirs and Shopping",
   "words": [
    [
     "souvenir",
     "n",
     "ˌsuːvəˈnɪr",
     "quà lưu niệm",
     "I bought a souvenir for my mom.",
     "Tôi mua một món quà lưu niệm cho mẹ.",
     "B1"
    ],
    [
     "postcard",
     "n",
     "ˈpoʊstˌkɑːrd",
     "bưu thiếp",
     "She sent me a postcard.",
     "Cô ấy gửi cho tôi một tấm bưu thiếp.",
     "B1"
    ],
    [
     "bargain",
     "v",
     "ˈbɑːrɡən",
     "mặc cả",
     "You can bargain at the market.",
     "Bạn có thể mặc cả ở chợ.",
     "A2"
    ],
    [
     "stall",
     "n",
     "stɔːl",
     "quầy hàng",
     "The stall sells scarves.",
     "Quầy hàng bán khăn choàng.",
     "B1"
    ],
    [
     "vendor",
     "n",
     "ˈvendər",
     "người bán hàng rong",
     "The vendor smiled at us.",
     "Người bán hàng mỉm cười với chúng tôi.",
     "B1"
    ],
    [
     "market",
     "n",
     "ˈmɑːrkət",
     "chợ",
     "The night market is lively.",
     "Chợ đêm rất nhộn nhịp.",
     "A2"
    ],
    [
     "local product",
     "n",
     "ˈloʊkəl ˈprɑːdəkt",
     "đặc sản địa phương",
     "Try the local products.",
     "Hãy thử các đặc sản địa phương.",
     "A2"
    ],
    [
     "gift shop",
     "n",
     "ɡɪft ʃɑːp",
     "cửa hàng quà tặng",
     "The gift shop sells postcards.",
     "Cửa hàng quà tặng bán bưu thiếp.",
     "A1"
    ],
    [
     "scarf",
     "n",
     "skɑːrf",
     "khăn choàng",
     "I bought a silk scarf.",
     "Tôi mua một chiếc khăn lụa.",
     "A2"
    ],
    [
     "fridge magnet",
     "n",
     "frɪdʒ ˈmæɡnət",
     "nam châm tủ lạnh",
     "I collect fridge magnets.",
     "Tôi sưu tầm nam châm tủ lạnh.",
     "B1"
    ],
    [
     "wrap",
     "v",
     "ræp",
     "gói",
     "Could you wrap it as a gift?",
     "Bạn gói giúp như một món quà được không?",
     "B1"
    ],
    [
     "worth",
     "adj",
     "wɜːrθ",
     "đáng giá",
     "This trip is worth every penny.",
     "Chuyến đi này rất đáng đồng tiền.",
     "B1"
    ]
   ]
  },
  {
   "icon": "📸",
   "vi": "Ảnh và kỷ niệm",
   "en": "Photos and Memories",
   "words": [
    [
     "camera",
     "n",
     "ˈkæmərə",
     "máy ảnh",
     "I brought my new camera.",
     "Tôi mang theo máy ảnh mới.",
     "A1"
    ],
    [
     "photo",
     "n",
     "ˈfoʊˌtoʊ",
     "bức ảnh",
     "Take a photo of us, please.",
     "Làm ơn chụp cho chúng tôi một tấm ảnh.",
     "A1"
    ],
    [
     "selfie",
     "n",
     "ˈselˌfiː",
     "ảnh tự chụp",
     "Let's take a selfie together.",
     "Chúng ta chụp ảnh tự sướng cùng nhau nhé.",
     "B1"
    ],
    [
     "album",
     "n",
     "ˈælbəm",
     "an-bum ảnh",
     "We looked at the photo album.",
     "Chúng tôi xem an-bum ảnh.",
     "A1"
    ],
    [
     "memory",
     "n",
     "ˈmeməri",
     "kỷ niệm",
     "This trip is a happy memory.",
     "Chuyến đi này là một kỷ niệm vui.",
     "A1"
    ],
    [
     "capture",
     "v",
     "ˈkæptʃər",
     "ghi lại",
     "I want to capture this moment.",
     "Tôi muốn ghi lại khoảnh khắc này.",
     "B1"
    ],
    [
     "tripod",
     "n",
     "ˈtraɪˌpɑːd",
     "chân máy ảnh",
     "Use a tripod for night photos.",
     "Hãy dùng chân máy cho ảnh ban đêm.",
     "B1"
    ],
    [
     "memory card",
     "n",
     "ˈmeməri kɑːrd",
     "thẻ nhớ",
     "My memory card is full.",
     "Thẻ nhớ của tôi đã đầy.",
     "A1"
    ],
    [
     "blog",
     "n",
     "blɔːɡ",
     "nhật ký trực tuyến",
     "She writes a travel blog.",
     "Cô ấy viết một blog du lịch.",
     "B1"
    ],
    [
     "diary",
     "n",
     "ˈdaɪəri",
     "nhật ký",
     "I write in my travel diary daily.",
     "Ngày nào tôi cũng viết nhật ký du lịch.",
     "A2"
    ],
    [
     "share",
     "v",
     "ʃer",
     "chia sẻ",
     "Share your photos with us.",
     "Hãy chia sẻ ảnh của bạn với chúng tôi.",
     "A1"
    ],
    [
     "unforgettable",
     "adj",
     "ˌʌnfərˈɡetəbəl",
     "khó quên",
     "It was an unforgettable trip.",
     "Đó là một chuyến đi khó quên.",
     "A2"
    ]
   ]
  },
  {
   "icon": "🚑",
   "vi": "Khẩn cấp khi đi du lịch",
   "en": "Emergencies While Traveling",
   "words": [
    [
     "emergency",
     "n",
     "ɪˈmɜːrdʒənsi",
     "tình huống khẩn cấp",
     "Call this number in an emergency.",
     "Hãy gọi số này trong trường hợp khẩn cấp.",
     "A2"
    ],
    [
     "police",
     "n",
     "pəˈliːs",
     "cảnh sát",
     "Call the police, please.",
     "Làm ơn gọi cảnh sát.",
     "A2"
    ],
    [
     "ambulance",
     "n",
     "ˈæmbjələns",
     "xe cứu thương",
     "The ambulance arrived quickly.",
     "Xe cứu thương đến rất nhanh.",
     "B1"
    ],
    [
     "lost property",
     "n",
     "lɔːst ˈprɑːpərti",
     "đồ thất lạc",
     "Ask the lost property office.",
     "Hãy hỏi phòng đồ thất lạc.",
     "B1"
    ],
    [
     "stolen",
     "adj",
     "ˈstoʊlən",
     "bị đánh cắp",
     "My bag was stolen.",
     "Túi của tôi bị đánh cắp.",
     "B1"
    ],
    [
     "danger",
     "n",
     "ˈdeɪndʒər",
     "mối nguy hiểm",
     "There is danger ahead.",
     "Phía trước có nguy hiểm.",
     "A2"
    ],
    [
     "first aid kit",
     "n",
     "fɜːrst eɪd kɪt",
     "hộp sơ cứu",
     "Keep a first aid kit in the car.",
     "Hãy để một hộp sơ cứu trong xe.",
     "B1"
    ],
    [
     "embassy",
     "n",
     "ˈembəsi",
     "đại sứ quán",
     "Contact your embassy for help.",
     "Hãy liên hệ đại sứ quán của bạn để được giúp.",
     "B2"
    ],
    [
     "medicine",
     "n",
     "ˈmedəsən",
     "thuốc",
     "I always carry some medicine.",
     "Tôi luôn mang theo ít thuốc.",
     "A1"
    ],
    [
     "allergic",
     "adj",
     "əˈlɜːrdʒɪk",
     "bị dị ứng",
     "I am allergic to seafood.",
     "Tôi bị dị ứng với hải sản.",
     "B1"
    ],
    [
     "missed",
     "adj",
     "mɪst",
     "bị lỡ",
     "We missed the last bus.",
     "Chúng tôi đã lỡ chuyến xe buýt cuối.",
     "B1"
    ],
    [
     "urgent",
     "adj",
     "ˈɜːrdʒənt",
     "khẩn cấp",
     "This is very urgent.",
     "Việc này rất gấp.",
     "B1"
    ]
   ]
  },
  {
   "icon": "💱",
   "vi": "Tiền tệ và thanh toán",
   "en": "Currency and Payment",
   "words": [
    [
     "currency",
     "n",
     "ˈkɜːrənsi",
     "tiền tệ",
     "The local currency is the dong.",
     "Đơn vị tiền tệ địa phương là đồng.",
     "B1"
    ],
    [
     "exchange",
     "v",
     "ɪksˈtʃeɪndʒ",
     "đổi tiền",
     "Where can I exchange money?",
     "Tôi có thể đổi tiền ở đâu?",
     "A2"
    ],
    [
     "exchange rate",
     "n",
     "ɪksˈtʃeɪndʒ reɪt",
     "tỷ giá",
     "The exchange rate changes daily.",
     "Tỷ giá thay đổi hằng ngày.",
     "B1"
    ],
    [
     "credit card",
     "n",
     "ˈkredət kɑːrd",
     "thẻ tín dụng",
     "Do you accept credit cards?",
     "Bạn có nhận thẻ tín dụng không?",
     "A1"
    ],
    [
     "ATM",
     "n",
     "ˈeɪˌtiːˈem",
     "máy rút tiền",
     "There is an ATM near the hotel.",
     "Có một máy rút tiền gần khách sạn.",
     "B1"
    ],
    [
     "tip",
     "n",
     "tɪp",
     "tiền boa",
     "Leave a small tip.",
     "Hãy để lại một khoản tiền boa nhỏ.",
     "A2"
    ],
    [
     "tax",
     "n",
     "tæks",
     "thuế",
     "Tax is included in the price.",
     "Thuế đã bao gồm trong giá.",
     "B1"
    ],
    [
     "refund",
     "n",
     "rɪˈfʌnd",
     "hoàn tiền",
     "I asked for a refund.",
     "Tôi đã yêu cầu hoàn tiền.",
     "B1"
    ],
    [
     "change",
     "n",
     "tʃeɪndʒ",
     "tiền thối",
     "Keep the change.",
     "Bạn giữ lại tiền thừa nhé.",
     "A1"
    ],
    [
     "pay",
     "v",
     "peɪ",
     "trả tiền",
     "How would you like to pay?",
     "Bạn muốn thanh toán bằng cách nào?",
     "A1"
    ],
    [
     "cost",
     "v",
     "kɑːst",
     "có giá",
     "How much does it cost?",
     "Cái này giá bao nhiêu?",
     "A2"
    ],
    [
     "total",
     "n",
     "ˈtoʊtəl",
     "tổng cộng",
     "What is the total?",
     "Tổng cộng là bao nhiêu?",
     "B1"
    ]
   ]
  },
  {
   "icon": "🚙",
   "vi": "Thuê xe và lái xe",
   "en": "Renting and Driving",
   "words": [
    [
     "rent",
     "v",
     "rent",
     "thuê",
     "We rent a car for the trip.",
     "Chúng tôi thuê một chiếc xe cho chuyến đi.",
     "A2"
    ],
    [
     "driver's license",
     "n",
     "ˈdraɪvərz ˈlaɪsəns",
     "bằng lái xe",
     "Show me your driver's license.",
     "Cho tôi xem bằng lái xe của bạn.",
     "A2"
    ],
    [
     "petrol station",
     "n",
     "ˈpetroʊl ˈsteɪʃən",
     "trạm xăng",
     "There is a petrol station ahead.",
     "Có một trạm xăng ở phía trước.",
     "A2"
    ],
    [
     "fuel",
     "n",
     "ˈfjuːəl",
     "nhiên liệu",
     "We are running out of fuel.",
     "Chúng tôi sắp hết nhiên liệu.",
     "B1"
    ],
    [
     "highway",
     "n",
     "ˈhaɪˌweɪ",
     "đường cao tốc",
     "The highway is quiet.",
     "Đường cao tốc rất vắng.",
     "A2"
    ],
    [
     "parking",
     "n",
     "ˈpɑːrkɪŋ",
     "chỗ đỗ xe",
     "There is free parking here.",
     "Ở đây có chỗ đỗ xe miễn phí.",
     "B1"
    ],
    [
     "speed limit",
     "n",
     "spiːd ˈlɪmət",
     "giới hạn tốc độ",
     "Obey the speed limit.",
     "Hãy tuân thủ giới hạn tốc độ.",
     "B1"
    ],
    [
     "GPS",
     "n",
     "ˈɡiːpiˈes",
     "định vị GPS",
     "The GPS guided us to the hotel.",
     "GPS đã dẫn chúng tôi đến khách sạn.",
     "B1"
    ],
    [
     "toll",
     "n",
     "toʊl",
     "phí cầu đường",
     "We paid a toll on the highway.",
     "Chúng tôi trả phí cầu đường trên cao tốc.",
     "B2"
    ],
    [
     "tire",
     "n",
     "ˈtaɪər",
     "lốp xe",
     "We have a flat tire.",
     "Xe chúng tôi bị xẹp lốp.",
     "B1"
    ],
    [
     "gas",
     "n",
     "ɡæs",
     "xăng",
     "Fill the tank with gas.",
     "Đổ đầy bình xăng.",
     "A2"
    ],
    [
     "driver",
     "n",
     "ˈdraɪvər",
     "tài xế",
     "The driver was friendly.",
     "Tài xế rất thân thiện.",
     "A1"
    ]
   ]
  },
  {
   "icon": "🚂",
   "vi": "Tàu hỏa và xe buýt",
   "en": "Trains and Buses",
   "words": [
    [
     "platform",
     "n",
     "ˈplætˌfɔːrm",
     "sân ga",
     "The train leaves from platform three.",
     "Tàu rời từ sân ga số ba.",
     "B1"
    ],
    [
     "carriage",
     "n",
     "ˈkærɪdʒ",
     "toa tàu",
     "Our carriage is number six.",
     "Toa tàu của chúng tôi là số sáu.",
     "B1"
    ],
    [
     "sleeper",
     "n",
     "ˈsliːpər",
     "giường nằm",
     "We booked a sleeper for the night.",
     "Chúng tôi đặt giường nằm cho đêm nay.",
     "B1"
    ],
    [
     "conductor",
     "n",
     "kənˈdʌktər",
     "nhân viên soát vé",
     "The conductor checked our tickets.",
     "Nhân viên soát vé kiểm tra vé của chúng tôi.",
     "B2"
    ],
    [
     "rail",
     "n",
     "reɪl",
     "đường ray",
     "The rail runs along the coast.",
     "Đường ray chạy dọc bờ biển.",
     "B1"
    ],
    [
     "coach",
     "n",
     "koʊtʃ",
     "xe khách đường dài",
     "We took a coach to Hue.",
     "Chúng tôi đi xe khách đến Huế.",
     "A1"
    ],
    [
     "express",
     "adj",
     "ɪkˈspres",
     "tốc hành",
     "This is an express train.",
     "Đây là một chuyến tàu tốc hành.",
     "A2"
    ],
    [
     "connection",
     "n",
     "kəˈnekʃən",
     "chuyến nối",
     "We missed our connection.",
     "Chúng tôi lỡ chuyến nối.",
     "B1"
    ],
    [
     "stop",
     "n",
     "stɑːp",
     "điểm dừng",
     "Which stop is ours?",
     "Điểm dừng nào là của chúng ta?",
     "A1"
    ],
    [
     "crowded",
     "adj",
     "ˈkraʊdəd",
     "đông đúc",
     "The bus was crowded.",
     "Xe buýt rất đông.",
     "A2"
    ],
    [
     "seat",
     "n",
     "siːt",
     "chỗ ngồi",
     "Is this seat free?",
     "Chỗ này còn trống không?",
     "A1"
    ],
    [
     "luggage rack",
     "n",
     "ˈlʌɡədʒ ræk",
     "giá để hành lý",
     "Put your bag on the luggage rack.",
     "Hãy để túi lên giá hành lý.",
     "B2"
    ]
   ]
  },
  {
   "icon": "🚢",
   "vi": "Du thuyền và tàu thuyền",
   "en": "Boats and Cruises",
   "words": [
    [
     "cruise",
     "n",
     "kruːz",
     "chuyến du thuyền",
     "We took a cruise around Ha Long Bay.",
     "Chúng tôi đi du thuyền quanh Vịnh Hạ Long.",
     "A2"
    ],
    [
     "ship",
     "n",
     "ʃɪp",
     "con tàu",
     "The ship left the port at noon.",
     "Con tàu rời cảng vào buổi trưa.",
     "A1"
    ],
    [
     "boat",
     "n",
     "boʊt",
     "con thuyền",
     "We rented a small boat.",
     "Chúng tôi thuê một chiếc thuyền nhỏ.",
     "A1"
    ],
    [
     "port",
     "n",
     "pɔːrt",
     "cảng",
     "The port is very busy.",
     "Cảng rất nhộn nhịp.",
     "B1"
    ],
    [
     "deck",
     "n",
     "dek",
     "boong tàu",
     "We stood on the deck.",
     "Chúng tôi đứng trên boong tàu.",
     "B2"
    ],
    [
     "captain",
     "n",
     "ˈkæptən",
     "thuyền trưởng",
     "The captain welcomed us aboard.",
     "Thuyền trưởng chào đón chúng tôi lên tàu.",
     "A2"
    ],
    [
     "anchor",
     "n",
     "ˈæŋkər",
     "cái neo",
     "The ship dropped its anchor.",
     "Con tàu thả neo.",
     "B2"
    ],
    [
     "life jacket",
     "n",
     "laɪf ˈdʒækət",
     "áo phao",
     "Wear a life jacket on the boat.",
     "Hãy mặc áo phao trên thuyền.",
     "A1"
    ],
    [
     "kayak",
     "n",
     "ˈkaɪæk",
     "thuyền kayak",
     "We paddled a kayak in the bay.",
     "Chúng tôi chèo thuyền kayak trong vịnh.",
     "B1"
    ],
    [
     "sail",
     "v",
     "seɪl",
     "đi thuyền buồm",
     "They sail across the sea.",
     "Họ đi thuyền buồm qua biển.",
     "B2"
    ],
    [
     "cabin",
     "n",
     "ˈkæbən",
     "phòng trên tàu",
     "Our cabin has a small window.",
     "Phòng trên tàu của chúng tôi có một cửa sổ nhỏ.",
     "B1"
    ],
    [
     "seasick",
     "adj",
     "ˈsiːˌsɪk",
     "say sóng",
     "I felt seasick on the ferry.",
     "Tôi bị say sóng trên chuyến phà.",
     "B1"
    ]
   ]
  },
  {
   "icon": "📆",
   "vi": "Lên lịch trình",
   "en": "Planning the Route",
   "words": [
    [
     "plan",
     "v",
     "plæn",
     "lên kế hoạch",
     "We plan to stay a week.",
     "Chúng tôi dự định ở lại một tuần.",
     "A1"
    ],
    [
     "route",
     "n",
     "ruːt",
     "tuyến đường",
     "Which route is faster?",
     "Tuyến đường nào nhanh hơn?",
     "B2"
    ],
    [
     "stopover",
     "n",
     "ˈstɑːˌpoʊvər",
     "điểm dừng chân",
     "We had a stopover in Seoul.",
     "Chúng tôi có một điểm dừng chân ở Seoul.",
     "B2"
    ],
    [
     "schedule",
     "n",
     "ˈskedʒʊl",
     "lịch trình",
     "The schedule is very tight.",
     "Lịch trình rất sát.",
     "A2"
    ],
    [
     "overnight",
     "adj",
     "ˈoʊvərˈnaɪt",
     "qua đêm",
     "We took an overnight train.",
     "Chúng tôi đi tàu đêm.",
     "B1"
    ],
    [
     "weekend trip",
     "n",
     "ˈwiːˌkend trɪp",
     "chuyến đi cuối tuần",
     "Let's take a weekend trip.",
     "Chúng ta hãy đi chơi cuối tuần nhé.",
     "A1"
    ],
    [
     "package tour",
     "n",
     "ˈpækədʒ tʊr",
     "tour trọn gói",
     "We bought a package tour.",
     "Chúng tôi mua một tour trọn gói.",
     "B1"
    ],
    [
     "season",
     "n",
     "ˈsiːzən",
     "mùa",
     "Summer is the busy season.",
     "Mùa hè là mùa cao điểm.",
     "B1"
    ],
    [
     "peak season",
     "n",
     "piːk ˈsiːzən",
     "mùa cao điểm",
     "Prices rise in peak season.",
     "Giá tăng vào mùa cao điểm.",
     "B2"
    ],
    [
     "weather forecast",
     "n",
     "ˈweðər ˈfɔːrˌkæst",
     "dự báo thời tiết",
     "Check the weather forecast first.",
     "Hãy xem dự báo thời tiết trước.",
     "B1"
    ],
    [
     "recommend",
     "v",
     "ˌrekəˈmend",
     "giới thiệu",
     "Can you recommend a good hotel?",
     "Bạn giới thiệu giúp một khách sạn tốt được không?",
     "B1"
    ],
    [
     "reserve",
     "v",
     "rɪˈzɜːrv",
     "giữ chỗ",
     "Reserve a table for four.",
     "Hãy giữ một bàn cho bốn người.",
     "B1"
    ]
   ]
  },
  {
   "icon": "🏞️",
   "vi": "Miêu tả nơi chốn",
   "en": "Describing Places",
   "words": [
    [
     "beautiful",
     "adj",
     "ˈbjuːtəfəl",
     "đẹp",
     "The view is beautiful.",
     "Cảnh nhìn thật đẹp.",
     "A1"
    ],
    [
     "peaceful",
     "adj",
     "ˈpiːsfəl",
     "yên bình",
     "The village is very peaceful.",
     "Ngôi làng rất yên bình.",
     "A2"
    ],
    [
     "famous",
     "adj",
     "ˈfeɪməs",
     "nổi tiếng",
     "Hanoi is famous for its food.",
     "Hà Nội nổi tiếng về ẩm thực.",
     "A1"
    ],
    [
     "modern",
     "adj",
     "ˈmɑːdərn",
     "hiện đại",
     "Singapore is a modern city.",
     "Singapore là một thành phố hiện đại.",
     "A2"
    ],
    [
     "traditional",
     "adj",
     "trəˈdɪʃənəl",
     "truyền thống",
     "We ate a traditional meal.",
     "Chúng tôi ăn một bữa ăn truyền thống.",
     "A2"
    ],
    [
     "lively",
     "adj",
     "ˈlaɪvli",
     "sôi động",
     "The street is lively at night.",
     "Con phố sôi động vào ban đêm.",
     "A2"
    ],
    [
     "romantic",
     "adj",
     "roʊˈmæntɪk",
     "lãng mạn",
     "Venice is a romantic city.",
     "Venice là một thành phố lãng mạn.",
     "A2"
    ],
    [
     "spectacular",
     "adj",
     "spekˈtækjələr",
     "ngoạn mục",
     "The fireworks were spectacular.",
     "Màn pháo hoa thật ngoạn mục.",
     "B1"
    ],
    [
     "charming",
     "adj",
     "ˈtʃɑːrmɪŋ",
     "duyên dáng",
     "The old town is charming.",
     "Khu phố cổ rất duyên dáng.",
     "B2"
    ],
    [
     "hidden",
     "adj",
     "ˈhɪdən",
     "ẩn giấu",
     "We found a hidden beach.",
     "Chúng tôi tìm thấy một bãi biển ẩn mình.",
     "B1"
    ],
    [
     "touristy",
     "adj",
     "ˈtʊrɪsti",
     "đông khách du lịch",
     "That street is too touristy.",
     "Con phố đó quá đông khách du lịch.",
     "B1"
    ]
   ]
  },
  {
   "icon": "💬",
   "vi": "Giao tiếp khi đi du lịch",
   "en": "Travel Phrases",
   "words": [
    [
     "excuse me",
     "phr",
     "ɪksˈkjuːs miː",
     "xin lỗi cho hỏi",
     "Excuse me, how do I get there?",
     "Xin lỗi, làm sao để đến đó?",
     "A1"
    ],
    [
     "how much",
     "phr",
     "haʊ mʌtʃ",
     "bao nhiêu tiền",
     "How much is this ticket?",
     "Vé này giá bao nhiêu?",
     "A1"
    ],
    [
     "where is",
     "phr",
     "wer ɪz",
     "ở đâu",
     "Where is the nearest bank?",
     "Ngân hàng gần nhất ở đâu?",
     "A1"
    ],
    [
     "I would like",
     "phr",
     "aɪ wʊd laɪk",
     "tôi muốn",
     "I would like a coffee, please.",
     "Tôi muốn một ly cà phê.",
     "A1"
    ],
    [
     "can you help me",
     "phr",
     "kæn juː help miː",
     "bạn giúp tôi được không",
     "Can you help me find my hotel?",
     "Bạn giúp tôi tìm khách sạn được không?",
     "A1"
    ],
    [
     "I do not understand",
     "phr",
     "aɪ duː nɑːt ˌʌndərˈstænd",
     "tôi không hiểu",
     "Sorry, I do not understand.",
     "Xin lỗi, tôi không hiểu.",
     "A2"
    ],
    [
     "speak slowly",
     "phr",
     "spiːk ˈsloʊli",
     "nói chậm",
     "Please speak slowly.",
     "Xin hãy nói chậm.",
     "A2"
    ],
    [
     "repeat",
     "v",
     "rɪˈpiːt",
     "nhắc lại",
     "Could you repeat that, please?",
     "Bạn có thể nhắc lại được không?",
     "A1"
    ],
    [
     "enjoy",
     "v",
     "ˌenˈdʒɔɪ",
     "tận hưởng",
     "Enjoy your stay!",
     "Chúc bạn kỳ nghỉ vui vẻ!",
     "A1"
    ],
    [
     "have a nice trip",
     "phr",
     "hæv ə naɪs trɪp",
     "chúc chuyến đi vui vẻ",
     "Have a nice trip!",
     "Chúc chuyến đi vui vẻ!",
     "A1"
    ],
    [
     "welcome",
     "int",
     "ˈwelkəm",
     "chào mừng",
     "Welcome to Vietnam!",
     "Chào mừng đến Việt Nam!",
     "A1"
    ],
    [
     "farewell",
     "n",
     "ˌferˈwel",
     "lời tạm biệt",
     "We had a farewell dinner.",
     "Chúng tôi có bữa tối chia tay.",
     "B1"
    ]
   ]
  },
  {
   "icon": "🌱",
   "vi": "Du lịch sinh thái",
   "en": "Eco-tourism",
   "words": [
    [
     "eco-friendly",
     "adj",
     "ˈiːkoʊ ˈfrendli",
     "thân thiện với môi trường",
     "We chose an eco-friendly hotel.",
     "Chúng tôi chọn một khách sạn thân thiện với môi trường.",
     "B2"
    ],
    [
     "nature",
     "n",
     "ˈneɪtʃər",
     "thiên nhiên",
     "Nature calms me down.",
     "Thiên nhiên làm tôi bình tâm.",
     "A2"
    ],
    [
     "national park",
     "n",
     "ˈnæʃənəl pɑːrk",
     "vườn quốc gia",
     "Cat Tien is a national park.",
     "Cát Tiên là một vườn quốc gia.",
     "A2"
    ],
    [
     "protect",
     "v",
     "prəˈtekt",
     "bảo vệ",
     "We must protect the forest.",
     "Chúng ta phải bảo vệ khu rừng.",
     "B1"
    ],
    [
     "environment",
     "n",
     "ɪnˈvaɪrənmənt",
     "môi trường",
     "Do not harm the environment.",
     "Đừng làm hại môi trường.",
     "B2"
    ],
    [
     "plastic",
     "n",
     "ˈplæstɪk",
     "nhựa",
     "Please avoid plastic bags.",
     "Xin hãy tránh dùng túi nhựa.",
     "A2"
    ],
    [
     "reef",
     "n",
     "riːf",
     "rạn san hô",
     "The coral reef is fragile.",
     "Rạn san hô rất mong manh.",
     "B1"
    ],
    [
     "endangered",
     "adj",
     "enˈdeɪndʒərd",
     "có nguy cơ tuyệt chủng",
     "The tiger is an endangered animal.",
     "Hổ là loài có nguy cơ tuyệt chủng.",
     "A2"
    ],
    [
     "sustainable",
     "adj",
     "səˈsteɪnəbəl",
     "bền vững",
     "We support sustainable travel.",
     "Chúng tôi ủng hộ du lịch bền vững.",
     "B1"
    ],
    [
     "farm stay",
     "n",
     "fɑːrm steɪ",
     "ở nhà nông trại",
     "We tried a farm stay in Da Lat.",
     "Chúng tôi thử ở nông trại tại Đà Lạt.",
     "A1"
    ],
    [
     "organic",
     "adj",
     "ɔːrˈɡænɪk",
     "hữu cơ",
     "The farm grows organic tea.",
     "Nông trại trồng trà hữu cơ.",
     "B1"
    ],
    [
     "trash",
     "n",
     "træʃ",
     "rác",
     "Take your trash with you.",
     "Hãy mang rác của bạn đi.",
     "B1"
    ]
   ]
  },
  {
   "icon": "🧑‍🏫",
   "vi": "Tour và hướng dẫn viên",
   "en": "Tours and Guides",
   "words": [
    [
     "tour",
     "n",
     "tʊr",
     "chuyến tham quan",
     "We joined a city tour.",
     "Chúng tôi tham gia một tour tham quan thành phố.",
     "A2"
    ],
    [
     "guide",
     "n",
     "ɡaɪd",
     "hướng dẫn viên",
     "Our guide knows the history well.",
     "Hướng dẫn viên của chúng tôi hiểu rõ lịch sử.",
     "B1"
    ],
    [
     "group",
     "n",
     "ɡruːp",
     "nhóm",
     "Our group has twelve people.",
     "Nhóm của chúng tôi có mười hai người.",
     "A1"
    ],
    [
     "sightseeing",
     "n",
     "ˈsaɪtˈsiːɪŋ",
     "ngắm cảnh",
     "We went sightseeing all day.",
     "Chúng tôi đi ngắm cảnh cả ngày.",
     "A2"
    ],
    [
     "attraction",
     "n",
     "əˈtrækʃən",
     "điểm tham quan",
     "The tower is a top attraction.",
     "Tòa tháp là một điểm tham quan hàng đầu.",
     "B1"
    ],
    [
     "entrance fee",
     "n",
     "ˈentrəns fiː",
     "phí vào cửa",
     "The entrance fee is ten dollars.",
     "Phí vào cửa là mười đô la.",
     "A2"
    ],
    [
     "opening hours",
     "n",
     "ˈoʊpənɪŋ ˈaʊərz",
     "giờ mở cửa",
     "What are the opening hours?",
     "Giờ mở cửa là khi nào?",
     "B1"
    ],
    [
     "audio guide",
     "n",
     "ˈɑːdiˌoʊ ɡaɪd",
     "hướng dẫn bằng âm thanh",
     "I rented an audio guide.",
     "Tôi thuê một thiết bị hướng dẫn bằng âm thanh.",
     "B1"
    ],
    [
     "brochure",
     "n",
     "broʊˈʃʊr",
     "tờ rơi giới thiệu",
     "Take a brochure from the desk.",
     "Hãy lấy một tờ rơi ở quầy.",
     "B2"
    ],
    [
     "visitor",
     "n",
     "ˈvɪzɪtər",
     "du khách",
     "Visitors must buy a ticket.",
     "Du khách phải mua vé.",
     "A2"
    ],
    [
     "local guide",
     "n",
     "ˈloʊkəl ɡaɪd",
     "hướng dẫn viên địa phương",
     "A local guide showed us the market.",
     "Hướng dẫn viên địa phương đã chỉ cho chúng tôi khu chợ.",
     "B1"
    ],
    [
     "meeting point",
     "n",
     "ˈmiːtɪŋ pɔɪnt",
     "điểm hẹn",
     "The meeting point is the lobby.",
     "Điểm hẹn là ở sảnh.",
     "A1"
    ]
   ]
  }
 ]
};
