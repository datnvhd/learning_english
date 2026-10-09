/**
 * DỮ LIỆU TỪ VỰNG – chủ đề "ielts"
 * ------------------------------------------------------------------
 * FILE NÀY ĐƯỢC SINH TỰ ĐỘNG bởi tools/build-vocab.mjs – KHÔNG sửa tay.
 * Muốn thêm/sửa từ: chỉnh tools/vocab-src/ielts.txt rồi chạy "npm run build:vocab".
 * Mỗi từ là một mảng: [từ, loại từ, phiên âm IPA, nghĩa, câu ví dụ EN, câu ví dụ VI, trình độ CEFR].
 */
import { TopicVocabData } from '../../models/vocab.model';

export const VOCAB: TopicVocabData = {
 "lessons": [
  {
   "icon": "🧬",
   "vi": "Danh từ trừu tượng học thuật",
   "en": "Abstract Nouns",
   "words": [
    [
     "concept",
     "n",
     "ˈkɑːnsept",
     "khái niệm",
     "The concept of freedom differs between cultures.",
     "Khái niệm tự do khác nhau giữa các nền văn hóa.",
     "B1"
    ],
    [
     "phenomenon",
     "n",
     "fəˈnɑːməˌnɑːn",
     "hiện tượng",
     "Urban migration is a global phenomenon.",
     "Di cư ra thành thị là một hiện tượng toàn cầu.",
     "B1"
    ],
    [
     "trend",
     "n",
     "trend",
     "xu hướng",
     "There is a trend toward smaller families.",
     "Có xu hướng gia đình nhỏ hơn.",
     "B1"
    ],
    [
     "priority",
     "n",
     "praɪˈɔːrəti",
     "sự ưu tiên",
     "Safety should be the first priority.",
     "An toàn nên là ưu tiên hàng đầu.",
     "B2"
    ],
    [
     "perspective",
     "n",
     "pərˈspektɪv",
     "góc nhìn",
     "Travel broadens our perspective.",
     "Du lịch mở rộng góc nhìn của chúng ta.",
     "B2"
    ],
    [
     "attitude",
     "n",
     "ˈætəˌtuːd",
     "thái độ",
     "A positive attitude helps learning.",
     "Thái độ tích cực giúp việc học.",
     "A2"
    ],
    [
     "awareness",
     "n",
     "əˈwernəs",
     "nhận thức",
     "Public awareness of health is growing.",
     "Nhận thức của công chúng về sức khỏe đang tăng.",
     "B1"
    ],
    [
     "capacity",
     "n",
     "kəˈpæsəti",
     "khả năng, sức chứa",
     "The stadium has a capacity of fifty thousand.",
     "Sân vận động có sức chứa năm mươi nghìn người.",
     "B1"
    ],
    [
     "challenge",
     "n",
     "ˈtʃæləndʒ",
     "thách thức",
     "Learning a language is a challenge.",
     "Học một ngôn ngữ là một thách thức.",
     "A2"
    ],
    [
     "factor",
     "n",
     "ˈfæktər",
     "yếu tố",
     "Cost is a key factor in the decision.",
     "Chi phí là yếu tố then chốt trong quyết định.",
     "B2"
    ],
    [
     "principle",
     "n",
     "ˈprɪnsəpəl",
     "nguyên tắc",
     "Equality is a basic principle of democracy.",
     "Bình đẳng là nguyên tắc cơ bản của dân chủ.",
     "B1"
    ],
    [
     "potential",
     "n",
     "pəˈtenʃəl",
     "tiềm năng",
     "Young people have great potential.",
     "Người trẻ có tiềm năng lớn.",
     "B1"
    ]
   ]
  },
  {
   "icon": "✈️",
   "vi": "Du lịch và du lịch bền vững",
   "en": "Tourism",
   "words": [
    [
     "tourism",
     "n",
     "ˈtʊˌrɪzəm",
     "ngành du lịch",
     "Tourism provides jobs for local people.",
     "Du lịch tạo việc làm cho người dân địa phương.",
     "B1"
    ],
    [
     "mass tourism",
     "n",
     "mæs ˈtʊˌrɪzəm",
     "du lịch đại trà",
     "Mass tourism can damage fragile sites.",
     "Du lịch đại trà có thể làm hại các địa điểm mong manh.",
     "B1"
    ],
    [
     "ecotourism",
     "n",
     "ˈiːkoʊˌtʊrɪzəm",
     "du lịch sinh thái",
     "Ecotourism protects natural habitats.",
     "Du lịch sinh thái bảo vệ môi trường sống tự nhiên.",
     "B2"
    ],
    [
     "attraction",
     "n",
     "əˈtrækʃən",
     "điểm tham quan",
     "The castle is a major tourist attraction.",
     "Lâu đài là điểm tham quan du lịch lớn.",
     "B1"
    ],
    [
     "souvenir",
     "n",
     "ˌsuːvəˈnɪr",
     "quà lưu niệm",
     "Tourists buy souvenirs to remember the trip.",
     "Du khách mua quà lưu niệm để nhớ chuyến đi.",
     "B1"
    ],
    [
     "overseas",
     "adv",
     "ˈoʊvərˈsiːz",
     "ở nước ngoài",
     "Many students study overseas.",
     "Nhiều sinh viên du học nước ngoài.",
     "A2"
    ],
    [
     "package holiday",
     "n",
     "ˈpækədʒ ˈhɑːləˌdeɪ",
     "kỳ nghỉ trọn gói",
     "A package holiday is easy to organize.",
     "Kỳ nghỉ trọn gói rất dễ sắp xếp.",
     "B1"
    ],
    [
     "backpacker",
     "n",
     "ˈbækˌpækər",
     "khách du lịch bụi",
     "Backpackers travel on a low budget.",
     "Khách du lịch bụi đi với ngân sách thấp.",
     "B1"
    ],
    [
     "landmark",
     "n",
     "ˈlændˌmɑːrk",
     "địa danh nổi tiếng",
     "The tower is a famous landmark.",
     "Tòa tháp là một địa danh nổi tiếng.",
     "B2"
    ],
    [
     "off the beaten track",
     "phr",
     "ɔːf ðə ˈbiːtən træk",
     "nơi ít người biết",
     "We love places off the beaten track.",
     "Chúng tôi thích những nơi ít người biết đến.",
     "B2"
    ],
    [
     "cultural exchange",
     "n",
     "ˈkʌltʃərəl ɪksˈtʃeɪndʒ",
     "giao lưu văn hóa",
     "Travel encourages cultural exchange.",
     "Du lịch khuyến khích giao lưu văn hóa.",
     "B1"
    ],
    [
     "host country",
     "n",
     "hoʊst ˈkʌntri",
     "nước sở tại",
     "Visitors should respect the host country's customs.",
     "Du khách nên tôn trọng phong tục của nước sở tại.",
     "A2"
    ]
   ]
  },
  {
   "icon": "👨‍👩‍👧",
   "vi": "Gia đình và các mối quan hệ",
   "en": "Family and Relationships",
   "words": [
    [
     "nuclear family",
     "n",
     "ˈnuːkliər ˈfæməli",
     "gia đình hạt nhân",
     "The nuclear family is common in cities.",
     "Gia đình hạt nhân phổ biến ở thành phố.",
     "B1"
    ],
    [
     "extended family",
     "n",
     "ɪkˈstendəd ˈfæməli",
     "đại gia đình",
     "Extended families often live together.",
     "Đại gia đình thường sống chung.",
     "B2"
    ],
    [
     "upbringing",
     "n",
     "ˈʌpˌbrɪŋɪŋ",
     "sự nuôi dạy",
     "A strict upbringing shaped his character.",
     "Sự nuôi dạy nghiêm khắc đã hình thành tính cách anh ấy.",
     "B2"
    ],
    [
     "bond",
     "n",
     "bɑːnd",
     "sự gắn kết",
     "Shared meals strengthen family bonds.",
     "Bữa ăn chung củng cố sự gắn kết gia đình.",
     "B1"
    ],
    [
     "sibling",
     "n",
     "ˈsɪblɪŋ",
     "anh chị em ruột",
     "I get along well with my siblings.",
     "Tôi hòa thuận với anh chị em ruột.",
     "B2"
    ],
    [
     "role model",
     "n",
     "roʊl ˈmɑːdəl",
     "hình mẫu",
     "Parents are the first role models.",
     "Cha mẹ là hình mẫu đầu tiên.",
     "A2"
    ],
    [
     "mutual respect",
     "n",
     "ˈmjuːtʃuːəl rɪˈspekt",
     "sự tôn trọng lẫn nhau",
     "A good friendship needs mutual respect.",
     "Một tình bạn tốt cần sự tôn trọng lẫn nhau.",
     "B1"
    ],
    [
     "close-knit",
     "adj",
     "kloʊs nɪt",
     "gắn bó chặt chẽ",
     "We live in a close-knit community.",
     "Chúng tôi sống trong một cộng đồng gắn bó chặt chẽ.",
     "B1"
    ],
    [
     "single parent",
     "n",
     "ˈsɪŋɡəl ˈperənt",
     "cha/mẹ đơn thân",
     "Single parents face many challenges.",
     "Cha mẹ đơn thân đối mặt nhiều thách thức.",
     "A2"
    ],
    [
     "childcare",
     "n",
     "ˈtʃaɪldˌker",
     "chăm sóc trẻ",
     "Affordable childcare helps working parents.",
     "Chăm sóc trẻ giá phải chăng giúp cha mẹ đi làm.",
     "B2"
    ],
    [
     "adolescence",
     "n",
     "ˌædəˈlesəns",
     "tuổi vị thành niên",
     "Adolescence is a period of rapid change.",
     "Tuổi vị thành niên là giai đoạn thay đổi nhanh.",
     "B2"
    ],
    [
     "retirement",
     "n",
     "riˈtaɪərmənt",
     "sự nghỉ hưu",
     "Retirement gives people more free time.",
     "Nghỉ hưu cho con người nhiều thời gian rảnh hơn.",
     "B2"
    ]
   ]
  },
  {
   "icon": "🎨",
   "vi": "Nghệ thuật và giải trí",
   "en": "Arts and Leisure",
   "words": [
    [
     "exhibition",
     "n",
     "ˌeksəˈbɪʃən",
     "cuộc triển lãm",
     "The exhibition attracted thousands of visitors.",
     "Cuộc triển lãm thu hút hàng nghìn khách.",
     "A2"
    ],
    [
     "performance",
     "n",
     "pərˈfɔːrməns",
     "buổi biểu diễn",
     "The dance performance was spectacular.",
     "Buổi biểu diễn múa thật ngoạn mục.",
     "A2"
    ],
    [
     "masterpiece",
     "n",
     "ˈmæstərˌpiːs",
     "kiệt tác",
     "The painting is a masterpiece.",
     "Bức tranh là một kiệt tác.",
     "B2"
    ],
    [
     "sculpture",
     "n",
     "ˈskʌlptʃər",
     "tác phẩm điêu khắc",
     "The sculpture stands in the town square.",
     "Tác phẩm điêu khắc đặt ở quảng trường thị trấn.",
     "B1"
    ],
    [
     "folk music",
     "n",
     "foʊk ˈmjuːzɪk",
     "nhạc dân gian",
     "Folk music reflects local traditions.",
     "Nhạc dân gian phản ánh truyền thống địa phương.",
     "B1"
    ],
    [
     "leisure",
     "n",
     "ˈleʒər",
     "thời gian rảnh rỗi",
     "People have more leisure time today.",
     "Ngày nay con người có nhiều thời gian rảnh hơn.",
     "A2"
    ],
    [
     "pastime",
     "n",
     "ˈpæˌstaɪm",
     "thú tiêu khiển",
     "Reading is my favorite pastime.",
     "Đọc sách là thú tiêu khiển yêu thích của tôi.",
     "B2"
    ],
    [
     "entertainment",
     "n",
     "ˌentərˈteɪnmənt",
     "giải trí",
     "Streaming has changed home entertainment.",
     "Phát trực tuyến đã thay đổi giải trí tại nhà.",
     "A2"
    ],
    [
     "spectator",
     "n",
     "ˈspekteɪtər",
     "khán giả",
     "Thousands of spectators watched the match.",
     "Hàng nghìn khán giả xem trận đấu.",
     "B1"
    ],
    [
     "amateur",
     "n",
     "ˈæməˌtɜːr",
     "người nghiệp dư",
     "He is an amateur photographer.",
     "Anh ấy là nhiếp ảnh gia nghiệp dư.",
     "B2"
    ],
    [
     "professional",
     "adj",
     "prəˈfeʃənəl",
     "chuyên nghiệp",
     "She became a professional dancer.",
     "Cô ấy trở thành vũ công chuyên nghiệp.",
     "A2"
    ],
    [
     "talent",
     "n",
     "ˈtælənt",
     "tài năng",
     "Young talent should be encouraged.",
     "Tài năng trẻ nên được khuyến khích.",
     "A2"
    ]
   ]
  },
  {
   "icon": "🎓",
   "vi": "Giáo dục",
   "en": "Education",
   "words": [
    [
     "curriculum",
     "n",
     "kərˈɪkjələm",
     "chương trình giảng dạy",
     "The government plans to reform the school curriculum.",
     "Chính phủ dự định cải cách chương trình giảng dạy ở trường.",
     "B1"
    ],
    [
     "literacy",
     "n",
     "ˈlɪtərəsi",
     "khả năng đọc viết",
     "Adult literacy has improved in recent decades.",
     "Khả năng đọc viết của người lớn đã được cải thiện trong những thập kỷ gần đây.",
     "B2"
    ],
    [
     "compulsory",
     "adj",
     "kəmˈpʌlsəri",
     "bắt buộc",
     "Education is compulsory until the age of sixteen.",
     "Giáo dục là bắt buộc đến năm mười sáu tuổi.",
     "B2"
    ],
    [
     "tuition fee",
     "n",
     "tjuːˈɪʃən fiː",
     "học phí",
     "High tuition fees discourage many students.",
     "Học phí cao làm nản lòng nhiều sinh viên.",
     "B2"
    ],
    [
     "vocational",
     "adj",
     "voʊˈkeɪʃənəl",
     "thuộc dạy nghề",
     "Vocational training prepares people for specific jobs.",
     "Đào tạo nghề chuẩn bị cho con người những công việc cụ thể.",
     "B2"
    ],
    [
     "undergraduate",
     "n",
     "ˌʌndərˈɡrædʒəwət",
     "sinh viên đại học",
     "Most undergraduates live near the campus.",
     "Hầu hết sinh viên đại học sống gần khuôn viên trường.",
     "B2"
    ],
    [
     "postgraduate",
     "n",
     "ˌpoʊstˈɡrædʒuət",
     "sau đại học",
     "She is a postgraduate in environmental science.",
     "Cô ấy là nghiên cứu sinh ngành khoa học môi trường.",
     "B2"
    ],
    [
     "peer pressure",
     "n",
     "pɪr ˈpreʃər",
     "áp lực từ bạn bè",
     "Peer pressure can influence teenagers' choices.",
     "Áp lực từ bạn bè có thể ảnh hưởng đến lựa chọn của thanh thiếu niên.",
     "B2"
    ],
    [
     "extracurricular",
     "adj",
     "ˌekstrəkərˈɪkjələr",
     "ngoại khóa",
     "Extracurricular activities develop social skills.",
     "Các hoạt động ngoại khóa phát triển kỹ năng xã hội.",
     "B2"
    ],
    [
     "lifelong learning",
     "n",
     "ˈlaɪˈflɔːŋ ˈlɜːrnɪŋ",
     "học tập suốt đời",
     "Lifelong learning helps workers adapt to change.",
     "Học tập suốt đời giúp người lao động thích nghi với thay đổi.",
     "B2"
    ],
    [
     "distance learning",
     "n",
     "ˈdɪstəns ˈlɜːrnɪŋ",
     "học từ xa",
     "Distance learning has become more popular.",
     "Học từ xa đã trở nên phổ biến hơn.",
     "B2"
    ],
    [
     "tutor",
     "n",
     "ˈtuːtər",
     "gia sư",
     "Many parents hire a tutor for their children.",
     "Nhiều bậc cha mẹ thuê gia sư cho con.",
     "B2"
    ]
   ]
  },
  {
   "icon": "🌿",
   "vi": "Môi trường",
   "en": "Environment",
   "words": [
    [
     "pollution",
     "n",
     "pəˈluːʃən",
     "ô nhiễm",
     "Air pollution is a serious problem in big cities.",
     "Ô nhiễm không khí là vấn đề nghiêm trọng ở các thành phố lớn.",
     "A1"
    ],
    [
     "emission",
     "n",
     "ɪˈmɪʃən",
     "khí thải",
     "Cars produce harmful emissions.",
     "Xe hơi thải ra khí độc hại.",
     "B2"
    ],
    [
     "greenhouse gas",
     "n",
     "ˈɡriːnˌhaʊs ɡæs",
     "khí nhà kính",
     "Greenhouse gases cause global warming.",
     "Khí nhà kính gây ra hiện tượng nóng lên toàn cầu.",
     "B1"
    ],
    [
     "climate change",
     "n",
     "ˈklaɪmət tʃeɪndʒ",
     "biến đổi khí hậu",
     "Climate change threatens coastal cities.",
     "Biến đổi khí hậu đe dọa các thành phố ven biển.",
     "B2"
    ],
    [
     "deforestation",
     "n",
     "dɪˌfɔːrɪˈsteɪʃən",
     "nạn phá rừng",
     "Deforestation destroys animal habitats.",
     "Nạn phá rừng phá hủy môi trường sống của động vật.",
     "B2"
    ],
    [
     "renewable",
     "adj",
     "riˈnuːəbəl",
     "tái tạo được",
     "Solar power is a renewable source of energy.",
     "Năng lượng mặt trời là nguồn năng lượng tái tạo.",
     "B2"
    ],
    [
     "fossil fuel",
     "n",
     "ˈfɑːsəl ˈfjuːəl",
     "nhiên liệu hóa thạch",
     "We should reduce our use of fossil fuels.",
     "Chúng ta nên giảm sử dụng nhiên liệu hóa thạch.",
     "B2"
    ],
    [
     "endangered species",
     "n",
     "enˈdeɪndʒərd ˈspiːʃiz",
     "loài có nguy cơ tuyệt chủng",
     "Many endangered species live in rainforests.",
     "Nhiều loài có nguy cơ tuyệt chủng sống trong rừng mưa.",
     "B2"
    ],
    [
     "biodiversity",
     "n",
     "ˌbaɪoʊdaɪˈvɜːrsəti",
     "đa dạng sinh học",
     "Biodiversity is essential for a healthy planet.",
     "Đa dạng sinh học rất cần thiết cho một hành tinh khỏe mạnh.",
     "B2"
    ],
    [
     "landfill",
     "n",
     "ˈlændˌfɪl",
     "bãi chôn rác",
     "Most household waste ends up in a landfill.",
     "Phần lớn rác thải sinh hoạt cuối cùng nằm ở bãi chôn rác.",
     "B2"
    ],
    [
     "sustainable",
     "adj",
     "səˈsteɪnəbəl",
     "bền vững",
     "Sustainable farming protects the soil.",
     "Canh tác bền vững bảo vệ đất.",
     "B2"
    ],
    [
     "conservation",
     "n",
     "ˌkɑːnsərˈveɪʃən",
     "sự bảo tồn",
     "Wildlife conservation needs public support.",
     "Bảo tồn động vật hoang dã cần sự ủng hộ của công chúng.",
     "B1"
    ],
    [
     "drought",
     "n",
     "draʊt",
     "hạn hán",
     "The drought destroyed the harvest.",
     "Hạn hán đã phá hủy vụ thu hoạch.",
     "B2"
    ]
   ]
  },
  {
   "icon": "💻",
   "vi": "Công nghệ",
   "en": "Technology",
   "words": [
    [
     "innovation",
     "n",
     "ˌɪnəˈveɪʃən",
     "sự đổi mới",
     "Innovation drives economic growth.",
     "Sự đổi mới thúc đẩy tăng trưởng kinh tế.",
     "B2"
    ],
    [
     "automation",
     "n",
     "ɔːtəˈmeɪʃən",
     "tự động hóa",
     "Automation may replace some factory jobs.",
     "Tự động hóa có thể thay thế một số công việc ở nhà máy.",
     "B2"
    ],
    [
     "artificial intelligence",
     "n",
     "ˌɑːrtəˈfɪʃəl ˌɪnˈtelədʒəns",
     "trí tuệ nhân tạo",
     "Artificial intelligence is transforming healthcare.",
     "Trí tuệ nhân tạo đang thay đổi ngành y tế.",
     "A2"
    ],
    [
     "cyberbullying",
     "n",
     "ˈsaɪbərˌbʊliɪŋ",
     "bắt nạt trên mạng",
     "Cyberbullying affects many young people.",
     "Bắt nạt trên mạng ảnh hưởng đến nhiều người trẻ.",
     "B2"
    ],
    [
     "digital divide",
     "n",
     "ˈdɪdʒətəl dɪˈvaɪd",
     "khoảng cách số",
     "The digital divide separates rich and poor.",
     "Khoảng cách số chia cắt người giàu và người nghèo.",
     "B1"
    ],
    [
     "addiction",
     "n",
     "əˈdɪkʃən",
     "sự nghiện",
     "Smartphone addiction is a growing concern.",
     "Nghiện điện thoại thông minh là mối lo ngại ngày càng tăng.",
     "B2"
    ],
    [
     "breakthrough",
     "n",
     "ˈbreɪkˌθruː",
     "bước đột phá",
     "Scientists announced a medical breakthrough.",
     "Các nhà khoa học công bố một bước đột phá y học.",
     "B1"
    ],
    [
     "obsolete",
     "adj",
     "ˈɑːbsəˌliːt",
     "lỗi thời",
     "Typewriters became obsolete in the 1990s.",
     "Máy đánh chữ trở nên lỗi thời vào thập niên 1990.",
     "B2"
    ],
    [
     "surveillance",
     "n",
     "sərˈveɪləns",
     "sự giám sát",
     "Public surveillance raises privacy issues.",
     "Việc giám sát nơi công cộng làm nảy sinh vấn đề riêng tư.",
     "B2"
    ],
    [
     "cutting-edge",
     "adj",
     "ˈkʌtɪŋ edʒ",
     "tiên tiến nhất",
     "The hospital uses cutting-edge equipment.",
     "Bệnh viện sử dụng thiết bị tiên tiến nhất.",
     "B2"
    ],
    [
     "virtual",
     "adj",
     "ˈvɜːrtʃuːəl",
     "ảo",
     "Virtual meetings save travel time.",
     "Các cuộc họp ảo tiết kiệm thời gian đi lại.",
     "B1"
    ],
    [
     "gadget",
     "n",
     "ˈɡædʒət",
     "thiết bị nhỏ tiện ích",
     "Teenagers love the latest gadgets.",
     "Thanh thiếu niên thích các thiết bị mới nhất.",
     "B2"
    ]
   ]
  },
  {
   "icon": "🩺",
   "vi": "Sức khỏe",
   "en": "Health",
   "words": [
    [
     "obesity",
     "n",
     "oʊˈbiːsəti",
     "béo phì",
     "Obesity increases the risk of heart disease.",
     "Béo phì làm tăng nguy cơ bệnh tim.",
     "B2"
    ],
    [
     "sedentary",
     "adj",
     "ˈsedənˌteri",
     "ít vận động",
     "A sedentary lifestyle harms our health.",
     "Lối sống ít vận động gây hại cho sức khỏe.",
     "B2"
    ],
    [
     "life expectancy",
     "n",
     "laɪf ɪkˈspektənsi",
     "tuổi thọ trung bình",
     "Life expectancy has risen dramatically.",
     "Tuổi thọ trung bình đã tăng đáng kể.",
     "B2"
    ],
    [
     "epidemic",
     "n",
     "ˌepəˈdemɪk",
     "dịch bệnh",
     "The epidemic spread quickly across the region.",
     "Dịch bệnh lan nhanh khắp khu vực.",
     "B2"
    ],
    [
     "immunization",
     "n",
     "ˌɪmjuːnəˈzeɪʃən",
     "sự tiêm chủng",
     "Immunization protects children from disease.",
     "Tiêm chủng bảo vệ trẻ em khỏi bệnh tật.",
     "B2"
    ],
    [
     "malnutrition",
     "n",
     "ˌmælnuːˈtrɪʃən",
     "suy dinh dưỡng",
     "Malnutrition affects millions of children.",
     "Suy dinh dưỡng ảnh hưởng đến hàng triệu trẻ em.",
     "B2"
    ],
    [
     "preventive",
     "adj",
     "prɪˈventɪv",
     "mang tính phòng ngừa",
     "Preventive care reduces medical costs.",
     "Chăm sóc phòng ngừa giúp giảm chi phí y tế.",
     "B2"
    ],
    [
     "chronic",
     "adj",
     "ˈkrɑːnɪk",
     "mãn tính",
     "Chronic illness requires long-term treatment.",
     "Bệnh mãn tính cần điều trị lâu dài.",
     "B2"
    ],
    [
     "well-being",
     "n",
     "wel ˈbiːɪŋ",
     "sức khỏe tinh thần",
     "Exercise improves mental well-being.",
     "Tập thể dục cải thiện sức khỏe tinh thần.",
     "A2"
    ],
    [
     "healthcare",
     "n",
     "ˈhelθˌker",
     "chăm sóc y tế",
     "Access to healthcare should be free.",
     "Việc tiếp cận chăm sóc y tế nên được miễn phí.",
     "B2"
    ],
    [
     "diagnosis",
     "n",
     "ˌdaɪəɡˈnoʊsəs",
     "chẩn đoán",
     "Early diagnosis saves lives.",
     "Chẩn đoán sớm cứu sống người bệnh.",
     "B2"
    ],
    [
     "stress-related",
     "adj",
     "stres rɪˈleɪtɪd",
     "liên quan đến căng thẳng",
     "Stress-related illnesses are increasing.",
     "Các bệnh liên quan đến căng thẳng đang gia tăng.",
     "B2"
    ]
   ]
  },
  {
   "icon": "🏘️",
   "vi": "Xã hội",
   "en": "Society",
   "words": [
    [
     "inequality",
     "n",
     "ˌɪnɪˈkwɑːləti",
     "sự bất bình đẳng",
     "Income inequality has widened in many countries.",
     "Bất bình đẳng thu nhập đã mở rộng ở nhiều quốc gia.",
     "B2"
    ],
    [
     "poverty",
     "n",
     "ˈpɑːvərti",
     "nghèo đói",
     "Poverty limits access to education.",
     "Nghèo đói hạn chế cơ hội học tập.",
     "B1"
    ],
    [
     "unemployment",
     "n",
     "ˌʌnɪmˈplɔɪmənt",
     "thất nghiệp",
     "Unemployment rose during the recession.",
     "Thất nghiệp tăng trong thời kỳ suy thoái.",
     "B1"
    ],
    [
     "homelessness",
     "n",
     "ˈhoʊmləsnəs",
     "tình trạng vô gia cư",
     "Homelessness is visible in many cities.",
     "Tình trạng vô gia cư dễ thấy ở nhiều thành phố.",
     "B2"
    ],
    [
     "immigration",
     "n",
     "ˌɪməˈɡreɪʃən",
     "nhập cư",
     "Immigration brings both benefits and challenges.",
     "Nhập cư mang lại cả lợi ích lẫn thách thức.",
     "B1"
    ],
    [
     "generation gap",
     "n",
     "ˌdʒenərˈeɪʃən ɡæp",
     "khoảng cách thế hệ",
     "The generation gap can cause family conflict.",
     "Khoảng cách thế hệ có thể gây xung đột gia đình.",
     "B1"
    ],
    [
     "community",
     "n",
     "kəˈmjuːnəti",
     "cộng đồng",
     "A strong community supports its members.",
     "Một cộng đồng vững mạnh hỗ trợ các thành viên.",
     "B2"
    ],
    [
     "aging population",
     "n",
     "ˈeɪdʒɪŋ ˌpɑːpjəˈleɪʃən",
     "dân số già hóa",
     "An aging population puts pressure on pensions.",
     "Dân số già hóa gây áp lực lên lương hưu.",
     "B2"
    ],
    [
     "urbanization",
     "n",
     "ˌɜːrbənəˈzeɪʃən",
     "đô thị hóa",
     "Rapid urbanization changes rural life.",
     "Đô thị hóa nhanh chóng làm thay đổi cuộc sống nông thôn.",
     "B2"
    ],
    [
     "discrimination",
     "n",
     "dɪˌskrɪməˈneɪʃən",
     "sự phân biệt đối xử",
     "Discrimination is illegal in the workplace.",
     "Phân biệt đối xử là bất hợp pháp ở nơi làm việc.",
     "B1"
    ],
    [
     "volunteer",
     "v",
     "ˌvɑːlənˈtɪr",
     "làm tình nguyện",
     "Many students volunteer at local shelters.",
     "Nhiều sinh viên làm tình nguyện ở các trạm cứu trợ địa phương.",
     "B1"
    ],
    [
     "welfare",
     "n",
     "ˈwelˌfer",
     "phúc lợi",
     "The state provides welfare for the unemployed.",
     "Nhà nước cung cấp phúc lợi cho người thất nghiệp.",
     "B2"
    ]
   ]
  },
  {
   "icon": "💼",
   "vi": "Kinh tế và việc làm",
   "en": "Economy and Work",
   "words": [
    [
     "economy",
     "n",
     "ɪˈkɑːnəmi",
     "nền kinh tế",
     "The economy grew by three percent last year.",
     "Nền kinh tế tăng trưởng ba phần trăm năm ngoái.",
     "B1"
    ],
    [
     "inflation",
     "n",
     "ˌɪnˈfleɪʃən",
     "lạm phát",
     "Inflation raises the cost of living.",
     "Lạm phát làm tăng chi phí sinh hoạt.",
     "B2"
    ],
    [
     "recession",
     "n",
     "rɪˈseʃən",
     "suy thoái kinh tế",
     "Many businesses closed during the recession.",
     "Nhiều doanh nghiệp đóng cửa trong thời kỳ suy thoái.",
     "B2"
    ],
    [
     "salary",
     "n",
     "ˈsæləri",
     "tiền lương",
     "A higher salary attracts talented workers.",
     "Mức lương cao thu hút người lao động có năng lực.",
     "B2"
    ],
    [
     "workforce",
     "n",
     "ˈwɜːrkˌfɔːrs",
     "lực lượng lao động",
     "Women make up half of the workforce.",
     "Phụ nữ chiếm một nửa lực lượng lao động.",
     "B2"
    ],
    [
     "career prospects",
     "n",
     "kərˈɪr ˈprɑːspekts",
     "triển vọng nghề nghiệp",
     "Graduates have good career prospects.",
     "Sinh viên tốt nghiệp có triển vọng nghề nghiệp tốt.",
     "B2"
    ],
    [
     "work-life balance",
     "n",
     "wɜːrk laɪf ˈbæləns",
     "cân bằng công việc và cuộc sống",
     "Work-life balance is important for happiness.",
     "Cân bằng công việc và cuộc sống rất quan trọng cho hạnh phúc.",
     "B1"
    ],
    [
     "remote working",
     "n",
     "rɪˈmoʊt ˈwɜːrkɪŋ",
     "làm việc từ xa",
     "Remote working reduces commuting time.",
     "Làm việc từ xa giảm thời gian đi lại.",
     "B1"
    ],
    [
     "entrepreneur",
     "n",
     "ˌɑːntrəprəˈnɜːr",
     "doanh nhân khởi nghiệp",
     "The young entrepreneur launched a new company.",
     "Doanh nhân trẻ đã thành lập một công ty mới.",
     "B2"
    ],
    [
     "outsourcing",
     "n",
     "ˌaʊtˈsɔːrsɪŋ",
     "thuê ngoài",
     "Outsourcing lowers production costs.",
     "Thuê ngoài làm giảm chi phí sản xuất.",
     "B2"
    ],
    [
     "globalization",
     "n",
     "ˌɡloʊbəlɪˈzeɪʃən",
     "toàn cầu hóa",
     "Globalization connects markets around the world.",
     "Toàn cầu hóa kết nối các thị trường khắp thế giới.",
     "B2"
    ],
    [
     "consumer",
     "n",
     "kənˈsuːmər",
     "người tiêu dùng",
     "Consumers are becoming more environmentally aware.",
     "Người tiêu dùng ngày càng có ý thức về môi trường.",
     "B1"
    ]
   ]
  },
  {
   "icon": "🏛️",
   "vi": "Chính phủ và pháp luật",
   "en": "Government and Law",
   "words": [
    [
     "legislation",
     "n",
     "ˌledʒəˈsleɪʃən",
     "luật pháp",
     "New legislation protects workers' rights.",
     "Luật mới bảo vệ quyền lợi người lao động.",
     "B2"
    ],
    [
     "regulation",
     "n",
     "ˌreɡjəˈleɪʃən",
     "quy định",
     "Strict regulations control food safety.",
     "Các quy định nghiêm ngặt kiểm soát an toàn thực phẩm.",
     "B1"
    ],
    [
     "taxation",
     "n",
     "tækˈseɪʃən",
     "việc đánh thuế",
     "High taxation may discourage investment.",
     "Thuế cao có thể làm nản lòng đầu tư.",
     "B2"
    ],
    [
     "subsidy",
     "n",
     "ˈsʌbsɪdi",
     "trợ cấp",
     "Farmers receive a government subsidy.",
     "Nông dân nhận trợ cấp của chính phủ.",
     "B2"
    ],
    [
     "public transport",
     "n",
     "ˈpʌblɪk trænˈspɔːrt",
     "giao thông công cộng",
     "Governments should invest in public transport.",
     "Chính phủ nên đầu tư vào giao thông công cộng.",
     "B1"
    ],
    [
     "policy",
     "n",
     "ˈpɑːləsi",
     "chính sách",
     "The new policy reduced traffic congestion.",
     "Chính sách mới đã giảm ùn tắc giao thông.",
     "B1"
    ],
    [
     "authority",
     "n",
     "əˈθɔːrəti",
     "chính quyền, thẩm quyền",
     "Local authorities manage waste collection.",
     "Chính quyền địa phương quản lý việc thu gom rác.",
     "B1"
    ],
    [
     "election",
     "n",
     "ɪˈlekʃən",
     "cuộc bầu cử",
     "Young people should vote in every election.",
     "Người trẻ nên đi bầu trong mọi cuộc bầu cử.",
     "B1"
    ],
    [
     "penalty",
     "n",
     "ˈpenəlti",
     "hình phạt",
     "Heavy penalties discourage illegal dumping.",
     "Hình phạt nặng ngăn chặn việc đổ rác trái phép.",
     "B2"
    ],
    [
     "enforce",
     "v",
     "enˈfɔːrs",
     "thi hành",
     "Police enforce traffic laws.",
     "Cảnh sát thi hành luật giao thông.",
     "B2"
    ],
    [
     "reform",
     "n",
     "rəˈfɔːrm",
     "cải cách",
     "Education reform is a political priority.",
     "Cải cách giáo dục là ưu tiên chính trị.",
     "B2"
    ],
    [
     "budget",
     "n",
     "ˈbʌdʒɪt",
     "ngân sách",
     "The city increased its budget for parks.",
     "Thành phố tăng ngân sách cho công viên.",
     "A2"
    ]
   ]
  },
  {
   "icon": "🚔",
   "vi": "Tội phạm",
   "en": "Crime",
   "words": [
    [
     "offender",
     "n",
     "əˈfendər",
     "người phạm tội",
     "Young offenders need rehabilitation.",
     "Người phạm tội trẻ cần được cải tạo.",
     "B2"
    ],
    [
     "rehabilitation",
     "n",
     "ˌriːhəˌbɪləˈteɪʃən",
     "sự cải tạo",
     "Rehabilitation helps prisoners return to society.",
     "Cải tạo giúp tù nhân trở lại xã hội.",
     "B2"
    ],
    [
     "deterrent",
     "n",
     "dɪˈtɜːrrənt",
     "biện pháp răn đe",
     "Severe punishment can be a deterrent.",
     "Hình phạt nghiêm khắc có thể là biện pháp răn đe.",
     "B2"
    ],
    [
     "imprisonment",
     "n",
     "ˌɪmˈprɪzənmənt",
     "án tù",
     "Imprisonment is not always the best solution.",
     "Án tù không phải lúc nào cũng là giải pháp tốt nhất.",
     "B2"
    ],
    [
     "burglary",
     "n",
     "ˈbɜːrɡləri",
     "vụ trộm đột nhập",
     "Burglary rates fell after the new law.",
     "Tỷ lệ trộm đột nhập giảm sau luật mới.",
     "B2"
    ],
    [
     "fraud",
     "n",
     "frɔːd",
     "sự gian lận",
     "Online fraud is increasing rapidly.",
     "Gian lận trực tuyến đang tăng nhanh.",
     "B2"
    ],
    [
     "law-abiding",
     "adj",
     "lɔː əˈbaɪdɪŋ",
     "tuân thủ pháp luật",
     "Most citizens are law-abiding.",
     "Hầu hết công dân đều tuân thủ pháp luật.",
     "B2"
    ],
    [
     "juvenile",
     "adj",
     "ˈdʒuːvənəl",
     "thuộc vị thành niên",
     "Juvenile crime is linked to poverty.",
     "Tội phạm vị thành niên gắn với nghèo đói.",
     "B2"
    ],
    [
     "community service",
     "n",
     "kəˈmjuːnəti ˈsɜːrvəs",
     "lao động công ích",
     "He received community service instead of prison.",
     "Anh ta nhận án lao động công ích thay vì đi tù.",
     "B2"
    ],
    [
     "prevention",
     "n",
     "priˈvenʃən",
     "sự phòng ngừa",
     "Crime prevention starts in the community.",
     "Phòng ngừa tội phạm bắt đầu từ cộng đồng.",
     "B2"
    ],
    [
     "witness",
     "n",
     "ˈwɪtnəs",
     "nhân chứng",
     "The witness described the suspect.",
     "Nhân chứng mô tả nghi phạm.",
     "B1"
    ],
    [
     "victim",
     "n",
     "ˈvɪktəm",
     "nạn nhân",
     "Victims should receive support.",
     "Nạn nhân nên nhận được sự hỗ trợ.",
     "B1"
    ]
   ]
  },
  {
   "icon": "🎭",
   "vi": "Văn hóa và truyền thông",
   "en": "Culture and Media",
   "words": [
    [
     "heritage",
     "n",
     "ˈherətədʒ",
     "di sản",
     "Countries should protect their cultural heritage.",
     "Các quốc gia nên bảo vệ di sản văn hóa.",
     "B2"
    ],
    [
     "tradition",
     "n",
     "trəˈdɪʃən",
     "truyền thống",
     "Traditions bind families together.",
     "Truyền thống gắn kết các gia đình.",
     "A2"
    ],
    [
     "mass media",
     "n",
     "mæs ˈmiːdiə",
     "truyền thông đại chúng",
     "Mass media shapes public opinion.",
     "Truyền thông đại chúng định hình dư luận.",
     "B2"
    ],
    [
     "advertising",
     "n",
     "ˈædvərˌtaɪzɪŋ",
     "quảng cáo",
     "Advertising influences what we buy.",
     "Quảng cáo ảnh hưởng đến những gì chúng ta mua.",
     "A2"
    ],
    [
     "celebrity",
     "n",
     "səˈlebrɪti",
     "người nổi tiếng",
     "Celebrities can be role models.",
     "Người nổi tiếng có thể là hình mẫu.",
     "B1"
    ],
    [
     "censorship",
     "n",
     "ˈsensərˌʃɪp",
     "sự kiểm duyệt",
     "Censorship limits freedom of speech.",
     "Kiểm duyệt hạn chế tự do ngôn luận.",
     "B2"
    ],
    [
     "documentary",
     "n",
     "ˌdɑːkjəˈmentəri",
     "phim tài liệu",
     "The documentary explores ocean pollution.",
     "Bộ phim tài liệu khám phá ô nhiễm đại dương.",
     "B1"
    ],
    [
     "broadcast",
     "v",
     "ˈbrɔːdˌkæst",
     "phát sóng",
     "The match will be broadcast live.",
     "Trận đấu sẽ được phát sóng trực tiếp.",
     "B1"
    ],
    [
     "tabloid",
     "n",
     "ˈtæblɔɪd",
     "báo lá cải",
     "Tabloids often exaggerate stories.",
     "Báo lá cải thường thổi phồng câu chuyện.",
     "B2"
    ],
    [
     "cultural diversity",
     "n",
     "ˈkʌltʃərəl dɪˈvɜːrsɪti",
     "đa dạng văn hóa",
     "Cultural diversity enriches society.",
     "Đa dạng văn hóa làm phong phú xã hội.",
     "B2"
    ],
    [
     "globalized",
     "adj",
     "ˈɡloʊbəˌlaɪzd",
     "toàn cầu hóa",
     "We live in a globalized world.",
     "Chúng ta sống trong một thế giới toàn cầu hóa.",
     "B2"
    ],
    [
     "identity",
     "n",
     "aɪˈdentɪˌtiː",
     "bản sắc",
     "Language is part of national identity.",
     "Ngôn ngữ là một phần của bản sắc dân tộc.",
     "B1"
    ]
   ]
  },
  {
   "icon": "🏙️",
   "vi": "Đô thị và giao thông",
   "en": "Cities and Transport",
   "words": [
    [
     "congestion",
     "n",
     "kənˈdʒestʃən",
     "tắc nghẽn",
     "Traffic congestion wastes time and fuel.",
     "Tắc nghẽn giao thông lãng phí thời gian và nhiên liệu.",
     "B2"
    ],
    [
     "infrastructure",
     "n",
     "ˌɪnfrəˈstrʌktʃər",
     "cơ sở hạ tầng",
     "Good infrastructure attracts investment.",
     "Cơ sở hạ tầng tốt thu hút đầu tư.",
     "B2"
    ],
    [
     "commuter",
     "n",
     "kəˈmjuːtər",
     "người đi làm hằng ngày",
     "Commuters prefer faster trains.",
     "Người đi làm hằng ngày thích tàu nhanh hơn.",
     "B2"
    ],
    [
     "overcrowding",
     "n",
     "ˈoʊvərˌkraʊdɪŋ",
     "tình trạng quá tải dân số",
     "Overcrowding leads to housing shortages.",
     "Quá tải dân số dẫn đến thiếu nhà ở.",
     "B2"
    ],
    [
     "suburb",
     "n",
     "ˈsʌbərb",
     "vùng ngoại ô",
     "Many families move to the suburbs.",
     "Nhiều gia đình chuyển ra vùng ngoại ô.",
     "B2"
    ],
    [
     "skyscraper",
     "n",
     "ˈskaɪˌskreɪpər",
     "tòa nhà chọc trời",
     "Skyscrapers dominate the city skyline.",
     "Các tòa nhà chọc trời thống trị đường chân trời thành phố.",
     "B1"
    ],
    [
     "pedestrian",
     "n",
     "pəˈdestriən",
     "người đi bộ",
     "Pedestrians need safer crossings.",
     "Người đi bộ cần lối qua đường an toàn hơn.",
     "B2"
    ],
    [
     "carpool",
     "v",
     "ˈkɑːrˌpuːl",
     "đi chung xe",
     "Employees can carpool to reduce traffic.",
     "Nhân viên có thể đi chung xe để giảm ùn tắc.",
     "B2"
    ],
    [
     "affordable",
     "adj",
     "əˈfɔːrdəbəl",
     "giá phải chăng",
     "Affordable housing is in short supply.",
     "Nhà ở giá phải chăng đang khan hiếm.",
     "B2"
    ],
    [
     "rural",
     "adj",
     "ˈrʊrəl",
     "thuộc nông thôn",
     "Rural areas lack good public services.",
     "Vùng nông thôn thiếu dịch vụ công tốt.",
     "B2"
    ],
    [
     "urban",
     "adj",
     "ˈɜːrbən",
     "thuộc đô thị",
     "Urban life is fast and stressful.",
     "Cuộc sống đô thị nhanh và căng thẳng.",
     "B2"
    ],
    [
     "mass transit",
     "n",
     "mæs ˈtrænzɪt",
     "giao thông công cộng khối lượng lớn",
     "Mass transit reduces air pollution.",
     "Giao thông công cộng khối lượng lớn giảm ô nhiễm không khí.",
     "B2"
    ]
   ]
  },
  {
   "icon": "🔬",
   "vi": "Khoa học và nghiên cứu",
   "en": "Science and Research",
   "words": [
    [
     "hypothesis",
     "n",
     "haɪˈpɑːθəsəs",
     "giả thuyết",
     "The experiment tested the hypothesis.",
     "Thí nghiệm kiểm chứng giả thuyết.",
     "B2"
    ],
    [
     "evidence",
     "n",
     "ˈevədəns",
     "bằng chứng",
     "There is strong evidence for climate change.",
     "Có bằng chứng mạnh mẽ về biến đổi khí hậu.",
     "A2"
    ],
    [
     "data",
     "n",
     "ˈdeɪtə",
     "dữ liệu",
     "The data show a clear trend.",
     "Dữ liệu cho thấy một xu hướng rõ ràng.",
     "B2"
    ],
    [
     "findings",
     "n",
     "ˈfaɪndɪŋz",
     "kết quả nghiên cứu",
     "The findings were published last month.",
     "Kết quả nghiên cứu được công bố tháng trước.",
     "B1"
    ],
    [
     "theory",
     "n",
     "ˈθɪri",
     "lý thuyết",
     "Einstein's theory changed physics.",
     "Lý thuyết của Einstein đã thay đổi vật lý.",
     "B1"
    ],
    [
     "genetic",
     "adj",
     "dʒəˈnetɪk",
     "thuộc di truyền",
     "Genetic engineering raises ethical questions.",
     "Kỹ thuật di truyền đặt ra các câu hỏi đạo đức.",
     "B1"
    ],
    [
     "laboratory",
     "n",
     "ˈlæbrəˌtɔːri",
     "phòng thí nghiệm",
     "The laboratory is open to researchers.",
     "Phòng thí nghiệm mở cửa cho các nhà nghiên cứu.",
     "B1"
    ],
    [
     "prototype",
     "n",
     "ˈproʊtəˌtaɪp",
     "bản mẫu",
     "The engineers built a working prototype.",
     "Các kỹ sư đã chế tạo một bản mẫu hoạt động được.",
     "B2"
    ],
    [
     "statistics",
     "n",
     "stəˈtɪstɪks",
     "thống kê",
     "Statistics can be misleading.",
     "Số liệu thống kê có thể gây hiểu lầm.",
     "B2"
    ],
    [
     "correlation",
     "n",
     "ˌkɔːrəˈleɪʃən",
     "mối tương quan",
     "There is a correlation between sleep and health.",
     "Có mối tương quan giữa giấc ngủ và sức khỏe.",
     "B2"
    ],
    [
     "peer-reviewed",
     "adj",
     "pɪr riˈvjuːd",
     "được đồng nghiệp thẩm định",
     "The article is peer-reviewed.",
     "Bài báo đã được đồng nghiệp thẩm định.",
     "B2"
    ]
   ]
  },
  {
   "icon": "📈",
   "vi": "Mô tả biểu đồ (Writing Task 1)",
   "en": "Describing Graphs",
   "words": [
    [
     "increase",
     "v",
     "ˌɪnˈkriːs",
     "tăng",
     "Sales increased sharply in March.",
     "Doanh số tăng mạnh vào tháng Ba.",
     "A2"
    ],
    [
     "decrease",
     "v",
     "dɪˈkriːs",
     "giảm",
     "The number of visitors decreased slightly.",
     "Số lượng khách giảm nhẹ.",
     "B1"
    ],
    [
     "fluctuate",
     "v",
     "ˈflʌktʃəˌweɪt",
     "dao động",
     "Prices fluctuated throughout the year.",
     "Giá cả dao động suốt năm.",
     "B2"
    ],
    [
     "remain stable",
     "phr",
     "rɪˈmeɪn ˈsteɪbəl",
     "giữ ổn định",
     "The rate remained stable at ten percent.",
     "Tỷ lệ giữ ổn định ở mức mười phần trăm.",
     "B1"
    ],
    [
     "peak",
     "v",
     "piːk",
     "đạt đỉnh",
     "Unemployment peaked in 2010.",
     "Thất nghiệp đạt đỉnh vào năm 2010.",
     "B2"
    ],
    [
     "plummet",
     "v",
     "ˈplʌmət",
     "giảm mạnh",
     "Profits plummeted after the crisis.",
     "Lợi nhuận giảm mạnh sau cuộc khủng hoảng.",
     "B2"
    ],
    [
     "soar",
     "v",
     "sɔːr",
     "tăng vọt",
     "House prices soared in the capital.",
     "Giá nhà tăng vọt ở thủ đô.",
     "B2"
    ],
    [
     "level off",
     "phr",
     "ˈlevəl ɔːf",
     "chững lại",
     "The figure leveled off after 2015.",
     "Con số chững lại sau năm 2015.",
     "A2"
    ],
    [
     "proportion",
     "n",
     "prəˈpɔːrʃən",
     "tỷ lệ",
     "A large proportion of students study abroad.",
     "Một tỷ lệ lớn sinh viên đi du học.",
     "B1"
    ],
    [
     "percentage",
     "n",
     "pərˈsentədʒ",
     "phần trăm",
     "The percentage of car owners doubled.",
     "Phần trăm người sở hữu ô tô tăng gấp đôi.",
     "B2"
    ],
    [
     "significant",
     "adj",
     "səɡˈnɪfɪkənt",
     "đáng kể",
     "There was a significant rise in exports.",
     "Có một sự tăng đáng kể về xuất khẩu.",
     "A2"
    ],
    [
     "approximately",
     "adv",
     "əˈprɑːksəmətli",
     "xấp xỉ",
     "Approximately half of the workers were women.",
     "Xấp xỉ một nửa số công nhân là phụ nữ.",
     "B1"
    ],
    [
     "respectively",
     "adv",
     "rɪˈspektɪvli",
     "lần lượt",
     "Sales were 20 and 35 million respectively.",
     "Doanh số lần lượt là 20 và 35 triệu.",
     "B2"
    ]
   ]
  },
  {
   "icon": "⚖️",
   "vi": "So sánh và đối chiếu",
   "en": "Comparison and Contrast",
   "words": [
    [
     "whereas",
     "conj",
     "weˈræz",
     "trong khi",
     "Cars are fast, whereas bicycles are cheap.",
     "Ô tô nhanh, trong khi xe đạp thì rẻ.",
     "B2"
    ],
    [
     "in contrast",
     "phr",
     "ɪn ˈkɑːntræst",
     "ngược lại",
     "In contrast, rural areas grew slowly.",
     "Ngược lại, vùng nông thôn tăng trưởng chậm.",
     "A2"
    ],
    [
     "similarly",
     "adv",
     "ˈsɪmələrli",
     "tương tự",
     "Similarly, women's wages rose.",
     "Tương tự, tiền lương của phụ nữ cũng tăng.",
     "B1"
    ],
    [
     "compared with",
     "phr",
     "kəmˈperd wɪð",
     "so với",
     "Compared with 2000, emissions fell by ten percent.",
     "So với năm 2000, khí thải giảm mười phần trăm.",
     "B2"
    ],
    [
     "the former",
     "phr",
     "ðə ˈfɔːrmər",
     "cái trước (trong hai cái)",
     "The former is cheaper than the latter.",
     "Cái trước rẻ hơn cái sau.",
     "B1"
    ],
    [
     "the latter",
     "phr",
     "ðə ˈlætər",
     "cái sau (trong hai cái)",
     "The latter option is more sustainable.",
     "Lựa chọn sau bền vững hơn.",
     "A2"
    ],
    [
     "on the other hand",
     "phr",
     "ɑːn ðə ˈʌðər hænd",
     "mặt khác",
     "On the other hand, online shopping is convenient.",
     "Mặt khác, mua sắm trực tuyến rất tiện lợi.",
     "A1"
    ],
    [
     "by contrast",
     "phr",
     "baɪ ˈkɑːntræst",
     "trái lại",
     "By contrast, exports declined.",
     "Trái lại, xuất khẩu giảm.",
     "A2"
    ],
    [
     "likewise",
     "adv",
     "ˈlaɪˌkwaɪz",
     "cũng như vậy",
     "Likewise, teachers face heavy workloads.",
     "Cũng như vậy, giáo viên phải đối mặt với khối lượng công việc lớn.",
     "B2"
    ],
    [
     "nevertheless",
     "adv",
     "ˌnevərðəˈles",
     "tuy nhiên",
     "Nevertheless, the project succeeded.",
     "Tuy nhiên, dự án đã thành công.",
     "B1"
    ],
    [
     "despite",
     "prep",
     "dɪˈspaɪt",
     "mặc dù",
     "Despite the cost, many people buy organic food.",
     "Mặc dù giá cao, nhiều người vẫn mua thực phẩm hữu cơ.",
     "B1"
    ],
    [
     "outweigh",
     "v",
     "ˈaʊˌtweɪ",
     "nặng hơn, vượt trội",
     "The benefits outweigh the risks.",
     "Lợi ích vượt trội hơn rủi ro.",
     "B1"
    ]
   ]
  },
  {
   "icon": "🧭",
   "vi": "Trình bày quan điểm",
   "en": "Expressing Opinions",
   "words": [
    [
     "in my opinion",
     "phr",
     "ɪn maɪ əˈpɪnjən",
     "theo ý kiến của tôi",
     "In my opinion, technology improves life.",
     "Theo ý kiến của tôi, công nghệ cải thiện cuộc sống.",
     "A2"
    ],
    [
     "I strongly believe",
     "phr",
     "aɪ ˈstrɔːŋli bɪˈliːv",
     "tôi tin chắc rằng",
     "I strongly believe that education is a right.",
     "Tôi tin chắc rằng giáo dục là một quyền.",
     "A2"
    ],
    [
     "from my perspective",
     "phr",
     "frʌm maɪ pərˈspektɪv",
     "từ góc nhìn của tôi",
     "From my perspective, exams are stressful.",
     "Từ góc nhìn của tôi, các kỳ thi rất căng thẳng.",
     "B2"
    ],
    [
     "it is widely believed",
     "phr",
     "ɪt ɪz ˈwaɪdli bɪˈliːvd",
     "người ta tin rộng rãi rằng",
     "It is widely believed that exercise prevents illness.",
     "Người ta tin rộng rãi rằng tập thể dục ngăn ngừa bệnh tật.",
     "B2"
    ],
    [
     "to a certain extent",
     "phr",
     "tuː ə ˈsɜːrtən ɪkˈstent",
     "ở một mức độ nào đó",
     "To a certain extent, I agree with this view.",
     "Ở một mức độ nào đó, tôi đồng ý với quan điểm này.",
     "B1"
    ],
    [
     "I tend to think",
     "phr",
     "aɪ tend tuː θɪŋk",
     "tôi có xu hướng nghĩ",
     "I tend to think that homework is useful.",
     "Tôi có xu hướng nghĩ rằng bài tập về nhà là hữu ích.",
     "B1"
    ],
    [
     "argue",
     "v",
     "ˈɑːrɡjuː",
     "lập luận",
     "Some people argue that zoos are cruel.",
     "Một số người lập luận rằng sở thú là tàn nhẫn.",
     "A2"
    ],
    [
     "claim",
     "v",
     "kleɪm",
     "cho rằng",
     "Critics claim that the plan is too expensive.",
     "Những người chỉ trích cho rằng kế hoạch quá tốn kém.",
     "A2"
    ],
    [
     "agree",
     "v",
     "əˈɡriː",
     "đồng ý",
     "I completely agree with the statement.",
     "Tôi hoàn toàn đồng ý với nhận định này.",
     "A1"
    ],
    [
     "disagree",
     "v",
     "dɪsəˈɡriː",
     "không đồng ý",
     "I partly disagree with this opinion.",
     "Tôi một phần không đồng ý với ý kiến này.",
     "A2"
    ],
    [
     "support",
     "v",
     "səˈpɔːrt",
     "ủng hộ",
     "Research supports this view.",
     "Nghiên cứu ủng hộ quan điểm này.",
     "A2"
    ],
    [
     "oppose",
     "v",
     "əˈpoʊz",
     "phản đối",
     "Many residents oppose the new road.",
     "Nhiều cư dân phản đối con đường mới.",
     "A2"
    ]
   ]
  },
  {
   "icon": "🔗",
   "vi": "Từ nối và liên kết ý",
   "en": "Linking Words",
   "words": [
    [
     "furthermore",
     "adv",
     "ˈfɜːrðərˌmɔːr",
     "hơn nữa",
     "Furthermore, cycling reduces pollution.",
     "Hơn nữa, đạp xe giảm ô nhiễm.",
     "B1"
    ],
    [
     "moreover",
     "adv",
     "mɔːˈroʊvər",
     "ngoài ra",
     "Moreover, it saves money.",
     "Ngoài ra, nó tiết kiệm tiền.",
     "B1"
    ],
    [
     "in addition",
     "phr",
     "ɪn əˈdɪʃən",
     "thêm vào đó",
     "In addition, students gain confidence.",
     "Thêm vào đó, học sinh thu được sự tự tin.",
     "A2"
    ],
    [
     "however",
     "adv",
     "ˌhaʊˈevər",
     "tuy nhiên",
     "However, some people disagree.",
     "Tuy nhiên, một số người không đồng ý.",
     "A2"
    ],
    [
     "therefore",
     "adv",
     "ˈðerˌfɔːr",
     "vì vậy",
     "Therefore, governments must act.",
     "Vì vậy, chính phủ phải hành động.",
     "A2"
    ],
    [
     "consequently",
     "adv",
     "ˈkɑːnsəkwəntli",
     "do đó",
     "Consequently, many shops closed.",
     "Do đó, nhiều cửa hàng đóng cửa.",
     "B1"
    ],
    [
     "as a result",
     "phr",
     "æz ə rɪˈzʌlt",
     "kết quả là",
     "As a result, pollution has increased.",
     "Kết quả là ô nhiễm đã tăng.",
     "A1"
    ],
    [
     "for instance",
     "phr",
     "fɔːr ˈɪnstəns",
     "ví dụ",
     "For instance, Japan has excellent trains.",
     "Ví dụ, Nhật Bản có hệ thống tàu tuyệt vời.",
     "B1"
    ],
    [
     "in conclusion",
     "phr",
     "ɪn kənˈkluːʒən",
     "tóm lại",
     "In conclusion, both views have merit.",
     "Tóm lại, cả hai quan điểm đều có giá trị.",
     "B1"
    ],
    [
     "to sum up",
     "phr",
     "tuː sʌm ʌp",
     "tổng kết lại",
     "To sum up, education should be free.",
     "Tổng kết lại, giáo dục nên được miễn phí.",
     "A1"
    ],
    [
     "firstly",
     "adv",
     "ˈfɜːrstli",
     "thứ nhất",
     "Firstly, exercise improves health.",
     "Thứ nhất, tập thể dục cải thiện sức khỏe.",
     "B2"
    ],
    [
     "lastly",
     "adv",
     "ˈlæstli",
     "cuối cùng",
     "Lastly, it builds team spirit.",
     "Cuối cùng, nó xây dựng tinh thần đồng đội.",
     "B2"
    ]
   ]
  },
  {
   "icon": "🧩",
   "vi": "Nguyên nhân, kết quả và giải pháp",
   "en": "Causes, Effects and Solutions",
   "words": [
    [
     "cause",
     "n",
     "kɑːz",
     "nguyên nhân",
     "Poor diet is a major cause of obesity.",
     "Chế độ ăn kém là nguyên nhân chính gây béo phì.",
     "A2"
    ],
    [
     "consequence",
     "n",
     "ˈkɑːnsəkwəns",
     "hậu quả",
     "The consequences of pollution are severe.",
     "Hậu quả của ô nhiễm rất nghiêm trọng.",
     "A2"
    ],
    [
     "result in",
     "phr",
     "rɪˈzʌlt ɪn",
     "dẫn đến",
     "Overfishing results in fewer fish.",
     "Đánh bắt quá mức dẫn đến ít cá hơn.",
     "A1"
    ],
    [
     "lead to",
     "phr",
     "led tuː",
     "gây ra",
     "Stress can lead to illness.",
     "Căng thẳng có thể gây ra bệnh tật.",
     "A2"
    ],
    [
     "contribute to",
     "phr",
     "kənˈtrɪbjuːt tuː",
     "góp phần vào",
     "Traffic contributes to air pollution.",
     "Giao thông góp phần gây ô nhiễm không khí.",
     "B1"
    ],
    [
     "tackle",
     "v",
     "ˈtækəl",
     "giải quyết",
     "Governments must tackle unemployment.",
     "Chính phủ phải giải quyết nạn thất nghiệp.",
     "B2"
    ],
    [
     "address",
     "v",
     "ˈæˌdres",
     "xử lý (vấn đề)",
     "We must address the housing crisis.",
     "Chúng ta phải xử lý cuộc khủng hoảng nhà ở.",
     "A1"
    ],
    [
     "mitigate",
     "v",
     "ˈmɪtəˌɡeɪt",
     "làm giảm nhẹ",
     "Trees mitigate the effects of heat.",
     "Cây xanh làm giảm nhẹ tác động của nóng bức.",
     "B2"
    ],
    [
     "solution",
     "n",
     "səˈluːʃən",
     "giải pháp",
     "Recycling is a practical solution.",
     "Tái chế là một giải pháp thiết thực.",
     "A2"
    ],
    [
     "measure",
     "n",
     "ˈmeʒər",
     "biện pháp",
     "Strict measures were introduced.",
     "Các biện pháp nghiêm ngặt đã được áp dụng.",
     "B1"
    ],
    [
     "impact",
     "n",
     "ˌɪmˈpækt",
     "tác động",
     "Social media has a huge impact on youth.",
     "Mạng xã hội có tác động lớn lên giới trẻ.",
     "A2"
    ],
    [
     "trigger",
     "v",
     "ˈtrɪɡər",
     "gây ra, kích hoạt",
     "Job losses triggered social unrest.",
     "Mất việc làm gây ra bất ổn xã hội.",
     "B1"
    ]
   ]
  },
  {
   "icon": "✨",
   "vi": "Ưu điểm và nhược điểm",
   "en": "Advantages and Disadvantages",
   "words": [
    [
     "advantage",
     "n",
     "ædˈvæntɪdʒ",
     "ưu điểm",
     "An advantage of cars is flexibility.",
     "Ưu điểm của ô tô là sự linh hoạt.",
     "A2"
    ],
    [
     "disadvantage",
     "n",
     "ˌdɪsədˈvæntɪdʒ",
     "nhược điểm",
     "A disadvantage is the high cost.",
     "Nhược điểm là chi phí cao.",
     "A2"
    ],
    [
     "benefit",
     "n",
     "ˈbenəfɪt",
     "lợi ích",
     "Exercise has many health benefits.",
     "Tập thể dục có nhiều lợi ích cho sức khỏe.",
     "B1"
    ],
    [
     "drawback",
     "n",
     "ˈdrɔːˌbæk",
     "hạn chế",
     "The main drawback is the noise.",
     "Hạn chế chính là tiếng ồn.",
     "B2"
    ],
    [
     "convenient",
     "adj",
     "kənˈviːnjənt",
     "thuận tiện",
     "Online banking is convenient.",
     "Ngân hàng trực tuyến rất thuận tiện.",
     "A2"
    ],
    [
     "beneficial",
     "adj",
     "ˌbenəˈfɪʃəl",
     "có lợi",
     "Bilingual education is beneficial.",
     "Giáo dục song ngữ có lợi.",
     "B2"
    ],
    [
     "harmful",
     "adj",
     "ˈhɑːrmfəl",
     "có hại",
     "Sugary drinks are harmful to teeth.",
     "Đồ uống nhiều đường có hại cho răng.",
     "A2"
    ],
    [
     "detrimental",
     "adj",
     "ˌdetrəˈmentəl",
     "bất lợi",
     "Noise is detrimental to concentration.",
     "Tiếng ồn bất lợi cho sự tập trung.",
     "B2"
    ],
    [
     "cost-effective",
     "adj",
     "kɑːst ɪˈfektɪv",
     "tiết kiệm chi phí",
     "Solar panels are cost-effective in the long term.",
     "Tấm pin mặt trời tiết kiệm chi phí về lâu dài.",
     "B1"
    ],
    [
     "time-consuming",
     "adj",
     "taɪm kənˈsuːmɪŋ",
     "tốn thời gian",
     "Cooking from scratch is time-consuming.",
     "Nấu ăn từ đầu rất tốn thời gian.",
     "B2"
    ],
    [
     "flexible",
     "adj",
     "ˈfleksəbəl",
     "linh hoạt",
     "Flexible hours suit working parents.",
     "Giờ làm linh hoạt phù hợp với cha mẹ đi làm.",
     "B2"
    ],
    [
     "risk",
     "n",
     "rɪsk",
     "rủi ro",
     "Smoking carries a serious risk.",
     "Hút thuốc mang rủi ro nghiêm trọng.",
     "B1"
    ]
   ]
  },
  {
   "icon": "🎤",
   "vi": "Speaking – chủ đề quen thuộc",
   "en": "Speaking Topics",
   "words": [
    [
     "hometown",
     "n",
     "ˈhoʊmˌtaʊn",
     "quê hương",
     "My hometown is famous for its food.",
     "Quê tôi nổi tiếng về ẩm thực.",
     "A1"
    ],
    [
     "hobby",
     "n",
     "ˈhɑːbi",
     "sở thích",
     "Photography is my favorite hobby.",
     "Nhiếp ảnh là sở thích yêu thích nhất của tôi.",
     "A1"
    ],
    [
     "neighborhood",
     "n",
     "ˈneɪbərˌhʊd",
     "khu phố",
     "I live in a quiet neighborhood.",
     "Tôi sống trong một khu phố yên tĩnh.",
     "B1"
    ],
    [
     "routine",
     "n",
     "ruːˈtiːn",
     "thói quen hằng ngày",
     "I keep a regular study routine.",
     "Tôi giữ thói quen học đều đặn.",
     "B1"
    ],
    [
     "occupation",
     "n",
     "ˌɑːkjəˈpeɪʃən",
     "nghề nghiệp",
     "What is your occupation?",
     "Nghề nghiệp của bạn là gì?",
     "A2"
    ],
    [
     "accommodation",
     "n",
     "əˌkɑːməˈdeɪʃən",
     "chỗ ở",
     "I live in university accommodation.",
     "Tôi sống trong ký túc xá.",
     "B2"
    ],
    [
     "festival",
     "n",
     "ˈfestəvəl",
     "lễ hội",
     "Tet is the most important festival in Vietnam.",
     "Tết là lễ hội quan trọng nhất ở Việt Nam.",
     "A1"
    ],
    [
     "public place",
     "n",
     "ˈpʌblɪk pleɪs",
     "nơi công cộng",
     "I enjoy reading in public places.",
     "Tôi thích đọc sách ở nơi công cộng.",
     "A2"
    ],
    [
     "I would say",
     "phr",
     "aɪ wʊd seɪ",
     "tôi sẽ nói rằng",
     "I would say I am quite outgoing.",
     "Tôi sẽ nói rằng tôi khá hướng ngoại.",
     "A1"
    ],
    [
     "to be honest",
     "phr",
     "tuː biː ˈɑːnəst",
     "thành thật mà nói",
     "To be honest, I prefer staying at home.",
     "Thành thật mà nói, tôi thích ở nhà hơn.",
     "B1"
    ],
    [
     "personally",
     "adv",
     "ˈpɜːrsənəli",
     "cá nhân tôi",
     "Personally, I love spicy food.",
     "Cá nhân tôi thích đồ ăn cay.",
     "B1"
    ],
    [
     "these days",
     "phr",
     "ðiːz deɪz",
     "dạo này",
     "These days, many people work online.",
     "Dạo này, nhiều người làm việc trực tuyến.",
     "A1"
    ]
   ]
  },
  {
   "icon": "🧠",
   "vi": "Động từ học thuật",
   "en": "Academic Verbs",
   "words": [
    [
     "analyze",
     "v",
     "ˈænəˌlaɪz",
     "phân tích",
     "The study analyzed data from ten countries.",
     "Nghiên cứu phân tích dữ liệu từ mười quốc gia.",
     "B1"
    ],
    [
     "assess",
     "v",
     "əˈses",
     "đánh giá",
     "Teachers assess students regularly.",
     "Giáo viên đánh giá học sinh thường xuyên.",
     "B2"
    ],
    [
     "demonstrate",
     "v",
     "ˈdemənˌstreɪt",
     "chứng minh",
     "The results demonstrate a clear link.",
     "Kết quả chứng minh một mối liên hệ rõ ràng.",
     "B1"
    ],
    [
     "indicate",
     "v",
     "ˈɪndəˌkeɪt",
     "chỉ ra",
     "The figures indicate a decline.",
     "Các số liệu chỉ ra sự suy giảm.",
     "A2"
    ],
    [
     "illustrate",
     "v",
     "ˈɪləˌstreɪt",
     "minh họa",
     "This graph illustrates the trend.",
     "Biểu đồ này minh họa xu hướng.",
     "B2"
    ],
    [
     "maintain",
     "v",
     "meɪnˈteɪn",
     "duy trì",
     "Governments must maintain public services.",
     "Chính phủ phải duy trì các dịch vụ công.",
     "B1"
    ],
    [
     "promote",
     "v",
     "prəˈmoʊt",
     "thúc đẩy",
     "Schools should promote healthy eating.",
     "Trường học nên thúc đẩy ăn uống lành mạnh.",
     "B1"
    ],
    [
     "restrict",
     "v",
     "riˈstrɪkt",
     "hạn chế",
     "The city restricts car use downtown.",
     "Thành phố hạn chế sử dụng ô tô ở trung tâm.",
     "B1"
    ],
    [
     "encourage",
     "v",
     "enˈkɜːrɪdʒ",
     "khuyến khích",
     "Tax breaks encourage investment.",
     "Ưu đãi thuế khuyến khích đầu tư.",
     "A2"
    ],
    [
     "enhance",
     "v",
     "enˈhæns",
     "nâng cao",
     "Technology can enhance learning.",
     "Công nghệ có thể nâng cao việc học.",
     "B2"
    ],
    [
     "undermine",
     "v",
     "ˈʌndərˌmaɪn",
     "làm suy yếu",
     "Corruption undermines trust in government.",
     "Tham nhũng làm suy yếu niềm tin vào chính phủ.",
     "B2"
    ],
    [
     "emphasize",
     "v",
     "ˈemfəˌsaɪz",
     "nhấn mạnh",
     "The report emphasizes the need for change.",
     "Báo cáo nhấn mạnh sự cần thiết phải thay đổi.",
     "B1"
    ]
   ]
  },
  {
   "icon": "🌟",
   "vi": "Tính từ và trạng từ mạnh",
   "en": "Strong Adjectives and Adverbs",
   "words": [
    [
     "essential",
     "adj",
     "eˈsenʃəl",
     "thiết yếu",
     "Water is essential for life.",
     "Nước là thiết yếu cho sự sống.",
     "B1"
    ],
    [
     "crucial",
     "adj",
     "ˈkruːʃəl",
     "then chốt",
     "Early intervention is crucial.",
     "Can thiệp sớm là then chốt.",
     "B2"
    ],
    [
     "dramatic",
     "adj",
     "drəˈmætɪk",
     "đột ngột, mạnh mẽ",
     "There was a dramatic fall in prices.",
     "Có một sự giảm giá mạnh mẽ.",
     "B1"
    ],
    [
     "substantial",
     "adj",
     "səbˈstænʃəl",
     "đáng kể",
     "A substantial number of people agreed.",
     "Một số lượng đáng kể người đồng ý.",
     "B1"
    ],
    [
     "widespread",
     "adj",
     "ˈwaɪdˈspred",
     "lan rộng",
     "Widespread unemployment causes unrest.",
     "Thất nghiệp lan rộng gây bất ổn.",
     "B1"
    ],
    [
     "controversial",
     "adj",
     "ˌkɑːntrəˈvɜːrʃəl",
     "gây tranh cãi",
     "Animal testing is controversial.",
     "Thử nghiệm trên động vật gây tranh cãi.",
     "B1"
    ],
    [
     "inevitable",
     "adj",
     "ˌɪˈnevətəbəl",
     "không thể tránh khỏi",
     "Change is inevitable.",
     "Thay đổi là không thể tránh khỏi.",
     "B1"
    ],
    [
     "vulnerable",
     "adj",
     "ˈvʌlnərəbəl",
     "dễ bị tổn thương",
     "Children are vulnerable to online risks.",
     "Trẻ em dễ bị tổn thương trước rủi ro trực tuyến.",
     "B2"
    ],
    [
     "gradually",
     "adv",
     "ˈɡrædʒuːəli",
     "dần dần",
     "Temperatures have gradually risen.",
     "Nhiệt độ đã dần dần tăng.",
     "A2"
    ],
    [
     "dramatically",
     "adv",
     "drəˈmætɪkli",
     "một cách mạnh mẽ",
     "Prices dropped dramatically.",
     "Giá cả giảm mạnh.",
     "B2"
    ],
    [
     "increasingly",
     "adv",
     "ɪnˈkriːsɪŋli",
     "ngày càng",
     "Cities are increasingly crowded.",
     "Các thành phố ngày càng đông đúc.",
     "B1"
    ],
    [
     "undoubtedly",
     "adv",
     "ənˈdaʊtɪdli",
     "chắc chắn",
     "Undoubtedly, education changes lives.",
     "Chắc chắn, giáo dục thay đổi cuộc đời.",
     "B2"
    ]
   ]
  },
  {
   "icon": "📚",
   "vi": "Cụm từ kết hợp thường gặp",
   "en": "Common Collocations",
   "words": [
    [
     "make a decision",
     "phr",
     "meɪk ə dɪˈsɪʒən",
     "đưa ra quyết định",
     "Students must make a decision about their future.",
     "Học sinh phải đưa ra quyết định về tương lai.",
     "B1"
    ],
    [
     "take responsibility",
     "phr",
     "teɪk riˌspɑːnsəˈbɪləti",
     "chịu trách nhiệm",
     "Parents should take responsibility for their children.",
     "Cha mẹ nên chịu trách nhiệm về con cái.",
     "B1"
    ],
    [
     "raise awareness",
     "phr",
     "reɪz əˈwernəs",
     "nâng cao nhận thức",
     "Campaigns raise awareness of recycling.",
     "Các chiến dịch nâng cao nhận thức về tái chế.",
     "B1"
    ],
    [
     "play a role",
     "phr",
     "pleɪ ə roʊl",
     "đóng vai trò",
     "Family plays a role in shaping values.",
     "Gia đình đóng vai trò định hình giá trị.",
     "A1"
    ],
    [
     "pose a threat",
     "phr",
     "poʊz ə θret",
     "gây ra mối đe dọa",
     "Plastic poses a threat to marine life.",
     "Nhựa gây ra mối đe dọa cho sinh vật biển.",
     "B2"
    ],
    [
     "bear in mind",
     "phr",
     "ber ɪn maɪnd",
     "ghi nhớ",
     "Bear in mind that costs may rise.",
     "Hãy ghi nhớ rằng chi phí có thể tăng.",
     "A1"
    ],
    [
     "keep pace with",
     "phr",
     "kiːp peɪs wɪð",
     "theo kịp",
     "Salaries do not keep pace with prices.",
     "Lương không theo kịp giá cả.",
     "B1"
    ],
    [
     "draw attention to",
     "phr",
     "drɔː əˈtenʃən tuː",
     "thu hút sự chú ý tới",
     "The report draws attention to inequality.",
     "Báo cáo thu hút sự chú ý tới bất bình đẳng.",
     "A2"
    ],
    [
     "strike a balance",
     "phr",
     "straɪk ə ˈbæləns",
     "tìm được sự cân bằng",
     "We must strike a balance between work and rest.",
     "Chúng ta phải tìm được sự cân bằng giữa làm việc và nghỉ ngơi.",
     "B1"
    ],
    [
     "in the long run",
     "phr",
     "ɪn ðə lɔːŋ rʌn",
     "về lâu dài",
     "In the long run, renewable energy is cheaper.",
     "Về lâu dài, năng lượng tái tạo rẻ hơn.",
     "A1"
    ],
    [
     "take into account",
     "phr",
     "teɪk ˈɪntuː əˈkaʊnt",
     "xem xét đến",
     "Planners must take safety into account.",
     "Các nhà quy hoạch phải xem xét đến an toàn.",
     "A2"
    ],
    [
     "a wide range of",
     "phr",
     "ə waɪd reɪndʒ ʌv",
     "nhiều loại",
     "Universities offer a wide range of courses.",
     "Các trường đại học cung cấp nhiều loại khóa học.",
     "A2"
    ]
   ]
  },
  {
   "icon": "🗒️",
   "vi": "Cấu trúc bài thi IELTS",
   "en": "IELTS Test Format",
   "words": [
    [
     "band score",
     "n",
     "bænd skɔːr",
     "điểm band",
     "She needs a band score of seven.",
     "Cô ấy cần điểm band bảy.",
     "B1"
    ],
    [
     "task response",
     "n",
     "tæsk rɪˈspɑːns",
     "mức đáp ứng yêu cầu đề",
     "Task response is a key writing criterion.",
     "Mức đáp ứng yêu cầu đề là tiêu chí viết quan trọng.",
     "A2"
    ],
    [
     "coherence",
     "n",
     "koʊˈhɪrəns",
     "tính mạch lạc",
     "Coherence makes an essay easy to follow.",
     "Tính mạch lạc giúp bài luận dễ theo dõi.",
     "B2"
    ],
    [
     "cohesion",
     "n",
     "koʊˈhiːʒən",
     "tính liên kết",
     "Linking words improve cohesion.",
     "Từ nối cải thiện tính liên kết.",
     "B2"
    ],
    [
     "lexical resource",
     "n",
     "ˈleksɪkəl ˈriːsɔːrs",
     "vốn từ vựng",
     "A wide lexical resource earns higher marks.",
     "Vốn từ rộng đem lại điểm cao hơn.",
     "B2"
    ],
    [
     "grammatical range",
     "n",
     "ɡrəˈmætəkəl reɪndʒ",
     "độ đa dạng ngữ pháp",
     "Use a variety of structures to show grammatical range.",
     "Hãy dùng nhiều cấu trúc để thể hiện độ đa dạng ngữ pháp.",
     "B2"
    ],
    [
     "fluency",
     "n",
     "ˈfluːənsi",
     "độ trôi chảy",
     "Fluency matters more than perfect grammar in speaking.",
     "Độ trôi chảy quan trọng hơn ngữ pháp hoàn hảo khi nói.",
     "B2"
    ],
    [
     "pronunciation",
     "n",
     "proʊˌnʌnsiˈeɪʃən",
     "phát âm",
     "Clear pronunciation helps the examiner understand you.",
     "Phát âm rõ giúp giám khảo hiểu bạn.",
     "A2"
    ],
    [
     "examiner",
     "n",
     "ɪɡˈzæmənər",
     "giám khảo",
     "The examiner asked about my hometown.",
     "Giám khảo hỏi về quê hương tôi.",
     "B1"
    ],
    [
     "cue card",
     "n",
     "kjuː kɑːrd",
     "thẻ gợi ý (Speaking Part 2)",
     "You will receive a cue card in Part 2.",
     "Bạn sẽ nhận một thẻ gợi ý ở Phần 2.",
     "B2"
    ],
    [
     "paraphrase",
     "v",
     "ˈperəˌfreɪz",
     "diễn đạt lại",
     "Try to paraphrase the question in your answer.",
     "Hãy cố diễn đạt lại câu hỏi trong câu trả lời.",
     "B2"
    ],
    [
     "skim",
     "v",
     "skɪm",
     "đọc lướt",
     "Skim the passage before answering.",
     "Hãy đọc lướt đoạn văn trước khi trả lời.",
     "B2"
    ],
    [
     "scan",
     "v",
     "skæn",
     "quét tìm thông tin",
     "Scan the text for names and dates.",
     "Hãy quét văn bản để tìm tên và ngày tháng.",
     "B1"
    ]
   ]
  }
 ]
};
