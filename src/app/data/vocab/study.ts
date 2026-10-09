/**
 * DỮ LIỆU TỪ VỰNG – chủ đề "study"
 * ------------------------------------------------------------------
 * FILE NÀY ĐƯỢC SINH TỰ ĐỘNG bởi tools/build-vocab.mjs – KHÔNG sửa tay.
 * Muốn thêm/sửa từ: chỉnh tools/vocab-src/study.txt rồi chạy "npm run build:vocab".
 * Mỗi từ là một mảng: [từ, loại từ, phiên âm IPA, nghĩa, câu ví dụ EN, câu ví dụ VI, trình độ CEFR].
 */
import { TopicVocabData } from '../../models/vocab.model';

export const VOCAB: TopicVocabData = {
 "lessons": [
  {
   "icon": "🏫",
   "vi": "Trường học và cấp học",
   "en": "Schools and Levels",
   "words": [
    [
     "school",
     "n",
     "skuːl",
     "trường học",
     "My school is near my house.",
     "Trường của tôi ở gần nhà.",
     "A1"
    ],
    [
     "kindergarten",
     "n",
     "ˈkɪndərˌɡɑːrtən",
     "trường mẫu giáo",
     "My little sister goes to kindergarten.",
     "Em gái tôi đi học mẫu giáo.",
     "B1"
    ],
    [
     "primary school",
     "n",
     "ˈpraɪˌmeri skuːl",
     "trường tiểu học",
     "I started primary school at six.",
     "Tôi bắt đầu học tiểu học năm sáu tuổi.",
     "B1"
    ],
    [
     "secondary school",
     "n",
     "ˈsekənˌderi skuːl",
     "trường trung học cơ sở",
     "He is in secondary school now.",
     "Bây giờ cậu ấy học trung học cơ sở.",
     "B1"
    ],
    [
     "high school",
     "n",
     "haɪ skuːl",
     "trường trung học phổ thông",
     "She finished high school last year.",
     "Cô ấy tốt nghiệp trung học phổ thông năm ngoái.",
     "A2"
    ],
    [
     "university",
     "n",
     "ˌjuːnəˈvɜːrsəti",
     "trường đại học",
     "My brother studies at university.",
     "Anh trai tôi học đại học.",
     "A2"
    ],
    [
     "college",
     "n",
     "ˈkɑːlɪdʒ",
     "trường cao đẳng",
     "She goes to a small college.",
     "Cô ấy học ở một trường cao đẳng nhỏ.",
     "A1"
    ],
    [
     "boarding school",
     "n",
     "ˈbɔːrdɪŋ skuːl",
     "trường nội trú",
     "He lives at a boarding school.",
     "Cậu ấy sống ở trường nội trú.",
     "B1"
    ],
    [
     "public school",
     "n",
     "ˈpʌblɪk skuːl",
     "trường công lập",
     "Most children go to a public school.",
     "Hầu hết trẻ em học ở trường công.",
     "A2"
    ],
    [
     "private school",
     "n",
     "ˈpraɪvət skuːl",
     "trường tư thục",
     "Private schools charge fees.",
     "Trường tư thục thu học phí.",
     "A2"
    ],
    [
     "campus",
     "n",
     "ˈkæmpəs",
     "khuôn viên trường",
     "The campus is green and quiet.",
     "Khuôn viên trường xanh và yên tĩnh.",
     "A2"
    ],
    [
     "education",
     "n",
     "ˌedʒəˈkeɪʃən",
     "giáo dục",
     "Education is important for everyone.",
     "Giáo dục quan trọng với mọi người.",
     "A2"
    ]
   ]
  },
  {
   "icon": "🎒",
   "vi": "Lớp học và đồ dùng",
   "en": "Classroom and Supplies",
   "words": [
    [
     "classroom",
     "n",
     "ˈklæsˌruːm",
     "lớp học",
     "Our classroom is on the third floor.",
     "Lớp học của chúng tôi ở tầng ba.",
     "A1"
    ],
    [
     "blackboard",
     "n",
     "ˈblækˌbɔːrd",
     "bảng đen",
     "The teacher writes on the blackboard.",
     "Cô giáo viết lên bảng đen.",
     "A2"
    ],
    [
     "whiteboard",
     "n",
     "ˈwaɪtbɔːrd",
     "bảng trắng",
     "Please clean the whiteboard.",
     "Hãy lau bảng trắng.",
     "B1"
    ],
    [
     "chalk",
     "n",
     "tʃɑːk",
     "phấn",
     "I need a piece of chalk.",
     "Tôi cần một viên phấn.",
     "B1"
    ],
    [
     "pencil",
     "n",
     "ˈpensəl",
     "bút chì",
     "Bring a pencil to the test.",
     "Hãy mang bút chì đến buổi kiểm tra.",
     "A1"
    ],
    [
     "pen",
     "n",
     "pen",
     "bút mực",
     "May I borrow your pen?",
     "Tôi mượn bút của bạn được không?",
     "A1"
    ],
    [
     "eraser",
     "n",
     "ɪˈreɪsər",
     "cục tẩy",
     "Use an eraser to fix mistakes.",
     "Hãy dùng tẩy để sửa lỗi.",
     "B1"
    ],
    [
     "ruler",
     "n",
     "ˈruːlər",
     "thước kẻ",
     "Draw a line with a ruler.",
     "Kẻ một đường bằng thước.",
     "A1"
    ],
    [
     "notebook",
     "n",
     "ˈnoʊtˌbʊk",
     "vở ghi chép",
     "I write notes in my notebook.",
     "Tôi ghi chép vào vở.",
     "A1"
    ],
    [
     "textbook",
     "n",
     "ˈtekstˌbʊk",
     "sách giáo khoa",
     "Open your textbook to page ten.",
     "Hãy mở sách giáo khoa đến trang mười.",
     "A2"
    ],
    [
     "backpack",
     "n",
     "ˈbækˌpæk",
     "ba lô",
     "My backpack is full of books.",
     "Ba lô của tôi đầy sách.",
     "B1"
    ],
    [
     "calculator",
     "n",
     "ˈkælkjəˌleɪtər",
     "máy tính bỏ túi",
     "You can use a calculator.",
     "Bạn được dùng máy tính bỏ túi.",
     "B1"
    ],
    [
     "scissors",
     "n",
     "ˈsɪzərz",
     "cái kéo",
     "Cut the paper with scissors.",
     "Cắt tờ giấy bằng kéo.",
     "A2"
    ],
    [
     "glue",
     "n",
     "ɡluː",
     "hồ dán",
     "Put some glue on the paper.",
     "Hãy bôi ít hồ dán lên giấy.",
     "B1"
    ]
   ]
  },
  {
   "icon": "📚",
   "vi": "Môn học",
   "en": "School Subjects",
   "words": [
    [
     "subject",
     "n",
     "səbˈdʒekt",
     "môn học",
     "Math is my favorite subject.",
     "Toán là môn học yêu thích của tôi.",
     "A1"
    ],
    [
     "mathematics",
     "n",
     "ˌmæθəˈmætɪks",
     "môn toán",
     "Mathematics needs logical thinking.",
     "Môn toán cần tư duy logic.",
     "B1"
    ],
    [
     "science",
     "n",
     "ˈsaɪəns",
     "khoa học",
     "We do experiments in science.",
     "Chúng tôi làm thí nghiệm trong môn khoa học.",
     "A1"
    ],
    [
     "physics",
     "n",
     "ˈfɪzɪks",
     "vật lý",
     "Physics explains how things move.",
     "Vật lý giải thích cách mọi thứ chuyển động.",
     "B1"
    ],
    [
     "chemistry",
     "n",
     "ˈkeməstri",
     "hóa học",
     "Chemistry class is exciting.",
     "Giờ hóa học rất thú vị.",
     "B1"
    ],
    [
     "biology",
     "n",
     "baɪˈɑːlədʒi",
     "sinh học",
     "Biology is the study of life.",
     "Sinh học là môn nghiên cứu về sự sống.",
     "B1"
    ],
    [
     "geography",
     "n",
     "dʒiˈɑːɡrəfi",
     "địa lý",
     "In geography we study maps.",
     "Trong môn địa lý chúng tôi học về bản đồ.",
     "B1"
    ],
    [
     "literature",
     "n",
     "ˈlɪtərətʃər",
     "văn học",
     "She loves literature and poetry.",
     "Cô ấy yêu văn học và thơ ca.",
     "B1"
    ],
    [
     "art",
     "n",
     "ɑːrt",
     "mỹ thuật",
     "We paint in art class.",
     "Chúng tôi vẽ tranh trong giờ mỹ thuật.",
     "A1"
    ],
    [
     "music",
     "n",
     "ˈmjuːzɪk",
     "âm nhạc",
     "Music class starts at ten.",
     "Giờ âm nhạc bắt đầu lúc mười giờ.",
     "A1"
    ],
    [
     "PE",
     "n",
     "ˌpiː ˈiː",
     "thể dục",
     "We play football in PE.",
     "Chúng tôi chơi bóng đá trong giờ thể dục.",
     "B1"
    ],
    [
     "IT",
     "n",
     "ɪt",
     "tin học",
     "We learn coding in IT.",
     "Chúng tôi học lập trình trong môn tin học.",
     "A1"
    ],
    [
     "foreign language",
     "n",
     "ˈfɔːrən ˈlæŋɡwədʒ",
     "ngoại ngữ",
     "A foreign language opens many doors.",
     "Ngoại ngữ mở ra nhiều cánh cửa.",
     "A1"
    ]
   ]
  },
  {
   "icon": "🧑‍🏫",
   "vi": "Những người trong trường",
   "en": "People at School",
   "words": [
    [
     "teacher",
     "n",
     "ˈtiːtʃər",
     "giáo viên",
     "My teacher is very kind.",
     "Giáo viên của tôi rất tốt bụng.",
     "A1"
    ],
    [
     "student",
     "n",
     "ˈstuːdənt",
     "học sinh, sinh viên",
     "Every student has a desk.",
     "Mỗi học sinh đều có một chiếc bàn.",
     "A1"
    ],
    [
     "pupil",
     "n",
     "ˈpjuːpəl",
     "học sinh nhỏ",
     "The pupils sing in the hall.",
     "Các em học sinh hát trong hội trường.",
     "B1"
    ],
    [
     "principal",
     "n",
     "ˈprɪnsəpəl",
     "hiệu trưởng",
     "The principal gave a speech.",
     "Hiệu trưởng đã phát biểu.",
     "A2"
    ],
    [
     "professor",
     "n",
     "prəˈfesər",
     "giáo sư",
     "The professor teaches physics.",
     "Giáo sư dạy vật lý.",
     "B1"
    ],
    [
     "lecturer",
     "n",
     "ˈlektʃərər",
     "giảng viên",
     "The lecturer speaks clearly.",
     "Giảng viên nói rất rõ ràng.",
     "B2"
    ],
    [
     "tutor",
     "n",
     "ˈtuːtər",
     "gia sư",
     "I have a math tutor.",
     "Tôi có một gia sư toán.",
     "B2"
    ],
    [
     "librarian",
     "n",
     "laɪˈbreˌriːən",
     "thủ thư",
     "The librarian helped me find a book.",
     "Thủ thư giúp tôi tìm một cuốn sách.",
     "B1"
    ],
    [
     "classmate",
     "n",
     "ˈklæˌsmeɪt",
     "bạn cùng lớp",
     "My classmate sits next to me.",
     "Bạn cùng lớp ngồi cạnh tôi.",
     "A1"
    ],
    [
     "graduate",
     "n",
     "ˈɡrædʒəwət",
     "người tốt nghiệp",
     "She is a university graduate.",
     "Cô ấy là người tốt nghiệp đại học.",
     "A2"
    ],
    [
     "freshman",
     "n",
     "ˈfreʃmən",
     "sinh viên năm nhất",
     "A freshman must join orientation.",
     "Sinh viên năm nhất phải tham gia buổi định hướng.",
     "B1"
    ],
    [
     "monitor",
     "n",
     "ˈmɑːnətər",
     "lớp trưởng",
     "The class monitor collects homework.",
     "Lớp trưởng thu bài tập về nhà.",
     "B1"
    ]
   ]
  },
  {
   "icon": "✍️",
   "vi": "Hoạt động trong lớp",
   "en": "Classroom Activities",
   "words": [
    [
     "learn",
     "v",
     "lɜːrn",
     "học",
     "I learn ten new words a day.",
     "Mỗi ngày tôi học mười từ mới.",
     "A1"
    ],
    [
     "study",
     "v",
     "ˈstʌdi",
     "học bài",
     "I study at night.",
     "Tôi học bài vào buổi tối.",
     "A1"
    ],
    [
     "teach",
     "v",
     "tiːtʃ",
     "dạy",
     "She teaches English at school.",
     "Cô ấy dạy tiếng Anh ở trường.",
     "A1"
    ],
    [
     "listen",
     "v",
     "ˈlɪsən",
     "lắng nghe",
     "Listen carefully to the teacher.",
     "Hãy lắng nghe cô giáo cẩn thận.",
     "A1"
    ],
    [
     "answer",
     "v",
     "ˈænsər",
     "trả lời",
     "Can you answer this question?",
     "Bạn có thể trả lời câu hỏi này không?",
     "A1"
    ],
    [
     "ask",
     "v",
     "æsk",
     "hỏi",
     "Raise your hand and ask.",
     "Hãy giơ tay và đặt câu hỏi.",
     "A1"
    ],
    [
     "explain",
     "v",
     "ɪkˈspleɪn",
     "giải thích",
     "Please explain this rule again.",
     "Xin hãy giải thích lại quy tắc này.",
     "A2"
    ],
    [
     "write",
     "v",
     "raɪt",
     "viết",
     "Write your name at the top.",
     "Hãy viết tên của bạn ở phía trên.",
     "A1"
    ],
    [
     "read",
     "v",
     "red",
     "đọc",
     "Read the text aloud.",
     "Hãy đọc to đoạn văn.",
     "A1"
    ],
    [
     "practice",
     "v",
     "ˈpræktəs",
     "luyện tập",
     "Practice every day.",
     "Hãy luyện tập mỗi ngày.",
     "A1"
    ],
    [
     "repeat",
     "v",
     "rɪˈpiːt",
     "lặp lại",
     "Repeat after me.",
     "Hãy lặp lại theo tôi.",
     "A1"
    ],
    [
     "discuss",
     "v",
     "dɪˈskʌs",
     "thảo luận",
     "Let's discuss this topic in pairs.",
     "Hãy thảo luận chủ đề này theo cặp.",
     "A1"
    ],
    [
     "attend",
     "v",
     "əˈtend",
     "tham dự",
     "Students must attend every class.",
     "Học sinh phải tham dự mọi buổi học.",
     "B1"
    ]
   ]
  },
  {
   "icon": "📝",
   "vi": "Bài tập và thi cử",
   "en": "Homework and Exams",
   "words": [
    [
     "homework",
     "n",
     "ˈhoʊmˌwɜːrk",
     "bài tập về nhà",
     "I finish my homework before dinner.",
     "Tôi làm xong bài tập trước bữa tối.",
     "A1"
    ],
    [
     "exercise",
     "n",
     "ˈeksərˌsaɪz",
     "bài tập",
     "Do exercise five on page ten.",
     "Hãy làm bài tập số năm ở trang mười.",
     "A1"
    ],
    [
     "quiz",
     "n",
     "kwɪz",
     "bài kiểm tra ngắn",
     "We have a quiz on Friday.",
     "Chúng tôi có bài kiểm tra ngắn vào thứ Sáu.",
     "A2"
    ],
    [
     "test",
     "n",
     "test",
     "bài kiểm tra",
     "The test was not difficult.",
     "Bài kiểm tra không khó.",
     "A1"
    ],
    [
     "exam",
     "n",
     "ɪɡˈzæm",
     "kỳ thi",
     "I have an exam next week.",
     "Tuần sau tôi có một kỳ thi.",
     "A2"
    ],
    [
     "question",
     "n",
     "ˈkwestʃən",
     "câu hỏi",
     "The last question is hard.",
     "Câu hỏi cuối cùng rất khó.",
     "A1"
    ],
    [
     "mistake",
     "n",
     "mɪˈsteɪk",
     "lỗi sai",
     "I made a small mistake.",
     "Tôi đã mắc một lỗi nhỏ.",
     "A2"
    ],
    [
     "correct",
     "adj",
     "kərˈekt",
     "đúng",
     "Your answer is correct.",
     "Câu trả lời của bạn đúng.",
     "A1"
    ],
    [
     "wrong",
     "adj",
     "rɔːŋ",
     "sai",
     "That answer is wrong.",
     "Câu trả lời đó sai.",
     "A1"
    ],
    [
     "revise",
     "v",
     "rɪˈvaɪz",
     "ôn tập",
     "I revise before every exam.",
     "Tôi ôn tập trước mỗi kỳ thi.",
     "B1"
    ],
    [
     "cheat",
     "v",
     "tʃiːt",
     "gian lận",
     "Do not cheat on the test.",
     "Đừng gian lận trong bài kiểm tra.",
     "B2"
    ],
    [
     "deadline",
     "n",
     "ˈdedˌlaɪn",
     "hạn nộp",
     "The deadline is Monday.",
     "Hạn nộp là thứ Hai.",
     "B1"
    ],
    [
     "submit",
     "v",
     "səbˈmɪt",
     "nộp",
     "Submit your essay by noon.",
     "Hãy nộp bài luận trước buổi trưa.",
     "B2"
    ]
   ]
  },
  {
   "icon": "🏅",
   "vi": "Điểm số và bằng cấp",
   "en": "Grades and Qualifications",
   "words": [
    [
     "grade",
     "n",
     "ɡreɪd",
     "điểm số",
     "I got a good grade in math.",
     "Tôi được điểm tốt môn toán.",
     "A1"
    ],
    [
     "score",
     "n",
     "skɔːr",
     "điểm",
     "Her score was ninety percent.",
     "Điểm của cô ấy là chín mươi phần trăm.",
     "B1"
    ],
    [
     "pass",
     "v",
     "pæs",
     "đỗ",
     "I passed the exam!",
     "Tôi đã đỗ kỳ thi!",
     "A2"
    ],
    [
     "fail",
     "v",
     "feɪl",
     "trượt",
     "He failed the driving test.",
     "Anh ấy trượt kỳ thi lái xe.",
     "A2"
    ],
    [
     "certificate",
     "n",
     "sərˈtɪfɪkət",
     "chứng chỉ",
     "She has an English certificate.",
     "Cô ấy có chứng chỉ tiếng Anh.",
     "B2"
    ],
    [
     "diploma",
     "n",
     "dɪˈploʊmɑː",
     "văn bằng",
     "He received his diploma in June.",
     "Anh ấy nhận văn bằng vào tháng Sáu.",
     "B2"
    ],
    [
     "degree",
     "n",
     "dɪˈɡriː",
     "bằng đại học",
     "She has a degree in biology.",
     "Cô ấy có bằng đại học ngành sinh học.",
     "A2"
    ],
    [
     "bachelor",
     "n",
     "ˈbætʃələr",
     "cử nhân",
     "He has a bachelor's degree.",
     "Anh ấy có bằng cử nhân.",
     "B1"
    ],
    [
     "master",
     "n",
     "ˈmæstər",
     "thạc sĩ",
     "She is studying for a master's degree.",
     "Cô ấy đang học lấy bằng thạc sĩ.",
     "B2"
    ],
    [
     "report card",
     "n",
     "riˈpɔːrt kɑːrd",
     "phiếu điểm",
     "Mom signed my report card.",
     "Mẹ đã ký vào phiếu điểm của tôi.",
     "A2"
    ],
    [
     "transcript",
     "n",
     "ˈtrænˌskrɪpt",
     "bảng điểm",
     "Please send your transcript.",
     "Vui lòng gửi bảng điểm của bạn.",
     "B2"
    ],
    [
     "graduation",
     "n",
     "ˌɡrædʒuːˈeɪʃən",
     "lễ tốt nghiệp",
     "Graduation is in July.",
     "Lễ tốt nghiệp vào tháng Bảy.",
     "B1"
    ],
    [
     "excellent",
     "adj",
     "ˈeksələnt",
     "xuất sắc",
     "Your work is excellent.",
     "Bài làm của bạn xuất sắc.",
     "A1"
    ]
   ]
  },
  {
   "icon": "🎓",
   "vi": "Đời sống đại học",
   "en": "University Life",
   "words": [
    [
     "lecture",
     "n",
     "ˈlektʃər",
     "bài giảng",
     "The lecture lasts an hour.",
     "Bài giảng kéo dài một tiếng.",
     "B1"
    ],
    [
     "seminar",
     "n",
     "ˈseməˌnɑːr",
     "buổi hội thảo chuyên đề",
     "We have a seminar on Friday.",
     "Chúng tôi có một buổi hội thảo vào thứ Sáu.",
     "B2"
    ],
    [
     "semester",
     "n",
     "səˈmestər",
     "học kỳ",
     "The new semester starts in September.",
     "Học kỳ mới bắt đầu vào tháng Chín.",
     "A2"
    ],
    [
     "course",
     "n",
     "kɔːrs",
     "khóa học",
     "I am taking an English course.",
     "Tôi đang học một khóa tiếng Anh.",
     "A1"
    ],
    [
     "major",
     "n",
     "ˈmeɪdʒər",
     "chuyên ngành",
     "My major is computer science.",
     "Chuyên ngành của tôi là khoa học máy tính.",
     "A2"
    ],
    [
     "faculty",
     "n",
     "ˈfækəlti",
     "khoa",
     "She works in the faculty of law.",
     "Cô ấy làm ở khoa luật.",
     "B2"
    ],
    [
     "dormitory",
     "n",
     "ˈdɔːrməˌtɔːri",
     "ký túc xá",
     "I live in the dormitory.",
     "Tôi sống ở ký túc xá.",
     "B2"
    ],
    [
     "tuition",
     "n",
     "tjuːˈɪʃən",
     "học phí",
     "Tuition is paid every semester.",
     "Học phí được đóng mỗi học kỳ.",
     "B2"
    ],
    [
     "enroll",
     "v",
     "enˈroʊl",
     "đăng ký nhập học",
     "I enrolled in a new course.",
     "Tôi đã đăng ký một khóa học mới.",
     "B2"
    ],
    [
     "credit",
     "n",
     "ˈkredət",
     "tín chỉ",
     "This course gives three credits.",
     "Khóa học này có ba tín chỉ.",
     "A2"
    ],
    [
     "thesis",
     "n",
     "ˈθiːsəs",
     "luận văn",
     "She is writing her thesis.",
     "Cô ấy đang viết luận văn.",
     "B2"
    ],
    [
     "club",
     "n",
     "klʌb",
     "câu lạc bộ",
     "I joined the music club.",
     "Tôi tham gia câu lạc bộ âm nhạc.",
     "A1"
    ],
    [
     "canteen",
     "n",
     "kænˈtiːn",
     "căng-tin",
     "We eat lunch in the canteen.",
     "Chúng tôi ăn trưa ở căng-tin.",
     "B1"
    ]
   ]
  },
  {
   "icon": "📖",
   "vi": "Thư viện và sách",
   "en": "Library and Books",
   "words": [
    [
     "library",
     "n",
     "ˈlaɪbreˌriː",
     "thư viện",
     "The library closes at nine.",
     "Thư viện đóng cửa lúc chín giờ.",
     "A1"
    ],
    [
     "book",
     "n",
     "bʊk",
     "sách",
     "This book is very interesting.",
     "Cuốn sách này rất thú vị.",
     "A1"
    ],
    [
     "novel",
     "n",
     "ˈnɑːvəl",
     "tiểu thuyết",
     "I am reading a long novel.",
     "Tôi đang đọc một cuốn tiểu thuyết dài.",
     "A2"
    ],
    [
     "dictionary",
     "n",
     "ˈdɪkʃəˌneri",
     "từ điển",
     "Look it up in the dictionary.",
     "Hãy tra nó trong từ điển.",
     "A1"
    ],
    [
     "encyclopedia",
     "n",
     "ɪnˌsaɪkləˈpiːdiə",
     "bách khoa toàn thư",
     "The encyclopedia has many facts.",
     "Bách khoa toàn thư có nhiều thông tin.",
     "B1"
    ],
    [
     "magazine",
     "n",
     "ˈmæɡəˌziːn",
     "tạp chí",
     "She reads a science magazine.",
     "Cô ấy đọc một tạp chí khoa học.",
     "A1"
    ],
    [
     "newspaper",
     "n",
     "ˈnuːzˌpeɪpər",
     "báo",
     "My grandpa reads the newspaper.",
     "Ông tôi đọc báo.",
     "A1"
    ],
    [
     "shelf",
     "n",
     "ʃelf",
     "giá sách",
     "Put the book back on the shelf.",
     "Hãy đặt sách lại lên giá.",
     "A1"
    ],
    [
     "borrow",
     "v",
     "ˈbɑːˌroʊ",
     "mượn",
     "You can borrow five books.",
     "Bạn có thể mượn năm cuốn sách.",
     "A1"
    ],
    [
     "return",
     "v",
     "rɪˈtɜːrn",
     "trả lại",
     "Return the book by Friday.",
     "Hãy trả sách trước thứ Sáu.",
     "A2"
    ],
    [
     "page",
     "n",
     "peɪdʒ",
     "trang",
     "Turn to page twenty.",
     "Hãy lật đến trang hai mươi.",
     "A1"
    ],
    [
     "chapter",
     "n",
     "ˈtʃæptər",
     "chương",
     "I finished chapter three.",
     "Tôi đã đọc xong chương ba.",
     "A2"
    ],
    [
     "author",
     "n",
     "ˈɔːθər",
     "tác giả",
     "Who is the author of this book?",
     "Tác giả của cuốn sách này là ai?",
     "A2"
    ]
   ]
  },
  {
   "icon": "🖋️",
   "vi": "Viết luận và học thuật",
   "en": "Academic Writing",
   "words": [
    [
     "essay",
     "n",
     "eˈseɪ",
     "bài luận",
     "I wrote an essay about my town.",
     "Tôi viết một bài luận về quê tôi.",
     "A2"
    ],
    [
     "paragraph",
     "n",
     "ˈpærəˌɡræf",
     "đoạn văn",
     "Each paragraph has one idea.",
     "Mỗi đoạn văn có một ý chính.",
     "A1"
    ],
    [
     "sentence",
     "n",
     "ˈsentəns",
     "câu",
     "Write a short sentence.",
     "Hãy viết một câu ngắn.",
     "A1"
    ],
    [
     "title",
     "n",
     "ˈtaɪtəl",
     "tiêu đề",
     "Choose a title for your essay.",
     "Hãy chọn tiêu đề cho bài luận.",
     "A2"
    ],
    [
     "introduction",
     "n",
     "ˌɪntrəˈdʌkʃən",
     "phần mở bài",
     "The introduction is short.",
     "Phần mở bài ngắn gọn.",
     "B1"
    ],
    [
     "conclusion",
     "n",
     "kənˈkluːʒən",
     "phần kết luận",
     "End with a strong conclusion.",
     "Hãy kết thúc bằng một kết luận mạnh mẽ.",
     "B1"
    ],
    [
     "argument",
     "n",
     "ˈɑːrɡjəmənt",
     "lập luận",
     "Your argument is very clear.",
     "Lập luận của bạn rất rõ ràng.",
     "A2"
    ],
    [
     "opinion",
     "n",
     "əˈpɪnjən",
     "ý kiến",
     "In my opinion, homework is useful.",
     "Theo ý kiến của tôi, bài tập về nhà là hữu ích.",
     "A2"
    ],
    [
     "evidence",
     "n",
     "ˈevədəns",
     "bằng chứng",
     "Give evidence for your idea.",
     "Hãy đưa bằng chứng cho ý tưởng của bạn.",
     "A2"
    ],
    [
     "summary",
     "n",
     "ˈsʌməri",
     "bản tóm tắt",
     "Write a summary of the story.",
     "Hãy viết bản tóm tắt câu chuyện.",
     "A2"
    ],
    [
     "draft",
     "n",
     "dræft",
     "bản nháp",
     "This is only a first draft.",
     "Đây mới chỉ là bản nháp đầu tiên.",
     "B2"
    ],
    [
     "edit",
     "v",
     "ˈedət",
     "chỉnh sửa",
     "Edit your essay carefully.",
     "Hãy chỉnh sửa bài luận cẩn thận.",
     "B2"
    ],
    [
     "reference",
     "n",
     "ˈrefərəns",
     "tài liệu tham khảo",
     "List your references at the end.",
     "Hãy liệt kê tài liệu tham khảo ở cuối bài.",
     "B2"
    ]
   ]
  },
  {
   "icon": "➕",
   "vi": "Toán học",
   "en": "Mathematics",
   "words": [
    [
     "number",
     "n",
     "ˈnʌmbər",
     "con số",
     "Choose a number from one to ten.",
     "Hãy chọn một số từ một đến mười.",
     "A1"
    ],
    [
     "add",
     "v",
     "æd",
     "cộng",
     "Add two and three.",
     "Hãy cộng hai với ba.",
     "A1"
    ],
    [
     "subtract",
     "v",
     "səbˈtrækt",
     "trừ",
     "Subtract five from ten.",
     "Hãy trừ năm khỏi mười.",
     "B2"
    ],
    [
     "multiply",
     "v",
     "ˈmʌltəˌplaɪ",
     "nhân",
     "Multiply four by six.",
     "Hãy nhân bốn với sáu.",
     "B2"
    ],
    [
     "divide",
     "v",
     "dɪˈvaɪd",
     "chia",
     "Divide twelve by three.",
     "Hãy chia mười hai cho ba.",
     "A2"
    ],
    [
     "fraction",
     "n",
     "ˈfrækʃən",
     "phân số",
     "One half is a fraction.",
     "Một phần hai là một phân số.",
     "B1"
    ],
    [
     "percentage",
     "n",
     "pərˈsentədʒ",
     "phần trăm",
     "What percentage of students passed?",
     "Bao nhiêu phần trăm học sinh đã đỗ?",
     "B2"
    ],
    [
     "equation",
     "n",
     "ɪˈkweɪʒən",
     "phương trình",
     "Solve this equation.",
     "Hãy giải phương trình này.",
     "B2"
    ],
    [
     "angle",
     "n",
     "ˈæŋɡəl",
     "góc",
     "A square has four right angles.",
     "Hình vuông có bốn góc vuông.",
     "B1"
    ],
    [
     "line",
     "n",
     "laɪn",
     "đường thẳng",
     "Draw a straight line.",
     "Hãy vẽ một đường thẳng.",
     "A1"
    ],
    [
     "area",
     "n",
     "ˈeriə",
     "diện tích",
     "Find the area of the room.",
     "Hãy tìm diện tích căn phòng.",
     "A2"
    ],
    [
     "average",
     "n",
     "ˈævərɪdʒ",
     "trung bình",
     "The average score is eighty.",
     "Điểm trung bình là tám mươi.",
     "A2"
    ],
    [
     "geometry",
     "n",
     "dʒiˈɑːmətri",
     "hình học",
     "Geometry uses shapes and angles.",
     "Hình học dùng các hình và góc.",
     "B1"
    ]
   ]
  },
  {
   "icon": "🔬",
   "vi": "Khoa học tự nhiên",
   "en": "Physical Science",
   "words": [
    [
     "experiment",
     "n",
     "ɪkˈsperəmənt",
     "thí nghiệm",
     "We did an experiment in the lab.",
     "Chúng tôi làm một thí nghiệm trong phòng thí nghiệm.",
     "B1"
    ],
    [
     "laboratory",
     "n",
     "ˈlæbrəˌtɔːri",
     "phòng thí nghiệm",
     "Wear goggles in the laboratory.",
     "Hãy đeo kính bảo hộ trong phòng thí nghiệm.",
     "B1"
    ],
    [
     "microscope",
     "n",
     "ˈmaɪkrəˌskoʊp",
     "kính hiển vi",
     "Look through the microscope.",
     "Hãy nhìn qua kính hiển vi.",
     "B2"
    ],
    [
     "energy",
     "n",
     "ˈenərdʒi",
     "năng lượng",
     "The sun gives us energy.",
     "Mặt trời cho chúng ta năng lượng.",
     "B2"
    ],
    [
     "force",
     "n",
     "fɔːrs",
     "lực",
     "Gravity is a strong force.",
     "Trọng lực là một lực mạnh.",
     "A2"
    ],
    [
     "gravity",
     "n",
     "ˈɡrævəti",
     "trọng lực",
     "Gravity pulls things down.",
     "Trọng lực kéo mọi vật xuống.",
     "B1"
    ],
    [
     "electricity",
     "n",
     "ɪˌlekˈtrɪsəti",
     "điện",
     "Electricity powers our homes.",
     "Điện cung cấp năng lượng cho nhà chúng ta.",
     "B1"
    ],
    [
     "magnet",
     "n",
     "ˈmæɡnət",
     "nam châm",
     "A magnet attracts iron.",
     "Nam châm hút sắt.",
     "B1"
    ],
    [
     "atom",
     "n",
     "ˈætəm",
     "nguyên tử",
     "Everything is made of atoms.",
     "Mọi thứ đều được tạo bởi nguyên tử.",
     "A2"
    ],
    [
     "oxygen",
     "n",
     "ˈɑːksədʒən",
     "oxy",
     "We breathe oxygen.",
     "Chúng ta hít thở oxy.",
     "B1"
    ],
    [
     "chemical",
     "n",
     "ˈkeməkəl",
     "hóa chất",
     "Do not mix these chemicals.",
     "Đừng trộn các hóa chất này.",
     "A2"
    ],
    [
     "liquid",
     "n",
     "ˈlɪkwəd",
     "chất lỏng",
     "Water is a liquid.",
     "Nước là chất lỏng.",
     "B1"
    ],
    [
     "solid",
     "n",
     "ˈsɑːləd",
     "chất rắn",
     "Ice is a solid.",
     "Băng là chất rắn.",
     "B1"
    ],
    [
     "gas",
     "n",
     "ɡæs",
     "chất khí",
     "Steam is a gas.",
     "Hơi nước là chất khí.",
     "A2"
    ]
   ]
  },
  {
   "icon": "🌱",
   "vi": "Sinh học",
   "en": "Biology",
   "words": [
    [
     "cell",
     "n",
     "sel",
     "tế bào",
     "A cell is very small.",
     "Tế bào rất nhỏ.",
     "B1"
    ],
    [
     "plant",
     "n",
     "plænt",
     "thực vật",
     "Plants need water and light.",
     "Thực vật cần nước và ánh sáng.",
     "A2"
    ],
    [
     "animal",
     "n",
     "ˈænəməl",
     "động vật",
     "Every animal needs food.",
     "Mọi động vật đều cần thức ăn.",
     "A1"
    ],
    [
     "human",
     "n",
     "ˈhjuːmən",
     "con người",
     "The human body has many parts.",
     "Cơ thể con người có nhiều bộ phận.",
     "A2"
    ],
    [
     "brain",
     "n",
     "breɪn",
     "não",
     "The brain controls the body.",
     "Bộ não điều khiển cơ thể.",
     "A1"
    ],
    [
     "heart",
     "n",
     "hɑːrt",
     "tim",
     "The heart pumps blood.",
     "Tim bơm máu.",
     "A1"
    ],
    [
     "bone",
     "n",
     "boʊn",
     "xương",
     "A baby has many bones.",
     "Em bé có nhiều xương.",
     "A1"
    ],
    [
     "blood",
     "n",
     "blʌd",
     "máu",
     "Blood carries oxygen.",
     "Máu mang oxy.",
     "A2"
    ],
    [
     "seed",
     "n",
     "siːd",
     "hạt giống",
     "Plant a seed in the soil.",
     "Hãy gieo một hạt giống vào đất.",
     "A2"
    ],
    [
     "root",
     "n",
     "ruːt",
     "rễ cây",
     "The root takes water from the soil.",
     "Rễ cây hút nước từ đất.",
     "A2"
    ],
    [
     "species",
     "n",
     "ˈspiːʃiz",
     "loài",
     "This species is very rare.",
     "Loài này rất hiếm.",
     "B2"
    ],
    [
     "habitat",
     "n",
     "ˈhæbəˌtæt",
     "môi trường sống",
     "Forests are the habitat of many animals.",
     "Rừng là môi trường sống của nhiều loài vật.",
     "B1"
    ],
    [
     "ecosystem",
     "n",
     "ˈiːkoʊˌsɪstəm",
     "hệ sinh thái",
     "A coral reef is a rich ecosystem.",
     "Rạn san hô là một hệ sinh thái phong phú.",
     "B1"
    ]
   ]
  },
  {
   "icon": "🌏",
   "vi": "Địa lý và lịch sử",
   "en": "Geography and History",
   "words": [
    [
     "map",
     "n",
     "mæp",
     "bản đồ",
     "Find Vietnam on the map.",
     "Hãy tìm Việt Nam trên bản đồ.",
     "A1"
    ],
    [
     "earth",
     "n",
     "ɜːrθ",
     "Trái Đất",
     "The Earth moves around the sun.",
     "Trái Đất quay quanh mặt trời.",
     "A2"
    ],
    [
     "planet",
     "n",
     "ˈplænət",
     "hành tinh",
     "Mars is a red planet.",
     "Sao Hỏa là một hành tinh đỏ.",
     "A2"
    ],
    [
     "climate",
     "n",
     "ˈklaɪmət",
     "khí hậu",
     "The climate here is tropical.",
     "Khí hậu ở đây là nhiệt đới.",
     "B1"
    ],
    [
     "population",
     "n",
     "ˌpɑːpjəˈleɪʃən",
     "dân số",
     "The population is growing fast.",
     "Dân số đang tăng nhanh.",
     "A2"
    ],
    [
     "border",
     "n",
     "ˈbɔːrdər",
     "biên giới",
     "The river is the border.",
     "Con sông là biên giới.",
     "B1"
    ],
    [
     "century",
     "n",
     "ˈsentʃəri",
     "thế kỷ",
     "This temple is a century old.",
     "Ngôi đền này đã một thế kỷ tuổi.",
     "A2"
    ],
    [
     "king",
     "n",
     "kɪŋ",
     "nhà vua",
     "The king lived in a big palace.",
     "Nhà vua sống trong một cung điện lớn.",
     "A1"
    ],
    [
     "independence",
     "n",
     "ˌɪndɪˈpendəns",
     "độc lập",
     "Vietnam won its independence in 1945.",
     "Việt Nam giành độc lập năm 1945.",
     "A2"
    ],
    [
     "civilization",
     "n",
     "ˌsɪvəlɪˈzeɪʃən",
     "nền văn minh",
     "Ancient Egypt was a great civilization.",
     "Ai Cập cổ đại là một nền văn minh vĩ đại.",
     "B1"
    ],
    [
     "event",
     "n",
     "ɪˈvent",
     "sự kiện",
     "It was an important event in history.",
     "Đó là một sự kiện quan trọng trong lịch sử.",
     "A1"
    ],
    [
     "timeline",
     "n",
     "ˈtaɪmlaɪn",
     "dòng thời gian",
     "Draw a timeline of the war.",
     "Hãy vẽ dòng thời gian của cuộc chiến.",
     "B1"
    ],
    [
     "empire",
     "n",
     "ˈempaɪər",
     "đế chế",
     "The Roman Empire was huge.",
     "Đế chế La Mã rất rộng lớn.",
     "B1"
    ]
   ]
  },
  {
   "icon": "🔤",
   "vi": "Ngôn ngữ và ngữ pháp",
   "en": "Language and Grammar",
   "words": [
    [
     "grammar",
     "n",
     "ˈɡræmər",
     "ngữ pháp",
     "English grammar is not so hard.",
     "Ngữ pháp tiếng Anh không quá khó.",
     "A1"
    ],
    [
     "vocabulary",
     "n",
     "voʊˈkæbjəˌleri",
     "từ vựng",
     "I learn new vocabulary every day.",
     "Tôi học từ vựng mới mỗi ngày.",
     "A2"
    ],
    [
     "noun",
     "n",
     "naʊn",
     "danh từ",
     "A noun is the name of a thing.",
     "Danh từ là tên của một sự vật.",
     "A2"
    ],
    [
     "verb",
     "n",
     "vɜːrb",
     "động từ",
     "A verb shows an action.",
     "Động từ chỉ một hành động.",
     "A2"
    ],
    [
     "adjective",
     "n",
     "ˈædʒɪktɪv",
     "tính từ",
     "Big is an adjective.",
     "Big là một tính từ.",
     "A2"
    ],
    [
     "adverb",
     "n",
     "ˈædvərb",
     "trạng từ",
     "Quickly is an adverb.",
     "Quickly là một trạng từ.",
     "B1"
    ],
    [
     "pronoun",
     "n",
     "ˈproʊnaʊn",
     "đại từ",
     "She is a pronoun.",
     "She là một đại từ.",
     "B1"
    ],
    [
     "tense",
     "n",
     "tens",
     "thì (ngữ pháp)",
     "Learn the past tense first.",
     "Hãy học thì quá khứ trước.",
     "B1"
    ],
    [
     "plural",
     "n",
     "ˈplʊrəl",
     "số nhiều",
     "The plural of child is children.",
     "Số nhiều của child là children.",
     "A2"
    ],
    [
     "spelling",
     "n",
     "ˈspelɪŋ",
     "chính tả",
     "My spelling is getting better.",
     "Chính tả của tôi ngày càng tốt hơn.",
     "B1"
    ],
    [
     "pronunciation",
     "n",
     "proʊˌnʌnsiˈeɪʃən",
     "cách phát âm",
     "Her pronunciation is very clear.",
     "Cách phát âm của cô ấy rất rõ ràng.",
     "A2"
    ],
    [
     "meaning",
     "n",
     "ˈmiːnɪŋ",
     "ý nghĩa",
     "What is the meaning of this word?",
     "Từ này có nghĩa là gì?",
     "A2"
    ],
    [
     "translate",
     "v",
     "trænzˈleɪt",
     "dịch",
     "Translate this sentence into English.",
     "Hãy dịch câu này sang tiếng Anh.",
     "B1"
    ]
   ]
  },
  {
   "icon": "💡",
   "vi": "Kỹ năng học tập",
   "en": "Study Skills",
   "words": [
    [
     "concentrate",
     "v",
     "ˈkɑːnsənˌtreɪt",
     "tập trung",
     "I can not concentrate with noise.",
     "Tôi không thể tập trung khi có tiếng ồn.",
     "A2"
    ],
    [
     "remember",
     "v",
     "rɪˈmembər",
     "nhớ",
     "I remember this word.",
     "Tôi nhớ từ này.",
     "A1"
    ],
    [
     "forget",
     "v",
     "fərˈɡet",
     "quên",
     "Don't forget your homework.",
     "Đừng quên bài tập về nhà.",
     "A1"
    ],
    [
     "memorize",
     "v",
     "ˈmemərˌaɪz",
     "ghi nhớ",
     "Memorize five words a day.",
     "Hãy ghi nhớ năm từ mỗi ngày.",
     "B1"
    ],
    [
     "note",
     "n",
     "noʊt",
     "ghi chú",
     "Take notes during the lesson.",
     "Hãy ghi chép trong giờ học.",
     "A1"
    ],
    [
     "highlight",
     "v",
     "ˈhaɪˌlaɪt",
     "đánh dấu nổi",
     "Highlight the key words.",
     "Hãy đánh dấu nổi các từ khóa.",
     "B1"
    ],
    [
     "review",
     "v",
     "ˌriːˈvjuː",
     "xem lại",
     "Review your notes tonight.",
     "Tối nay hãy xem lại ghi chú của bạn.",
     "A1"
    ],
    [
     "focus",
     "v",
     "ˈfoʊkəs",
     "tập trung",
     "Focus on one task at a time.",
     "Hãy tập trung vào một việc mỗi lần.",
     "A1"
    ],
    [
     "goal",
     "n",
     "ɡoʊl",
     "mục tiêu",
     "My goal is to speak English well.",
     "Mục tiêu của tôi là nói tiếng Anh giỏi.",
     "A1"
    ],
    [
     "habit",
     "n",
     "ˈhæbət",
     "thói quen",
     "Reading is a good habit.",
     "Đọc sách là một thói quen tốt.",
     "A1"
    ],
    [
     "timetable",
     "n",
     "ˈtaɪmˌteɪbəl",
     "thời khóa biểu",
     "Check the class timetable.",
     "Hãy xem thời khóa biểu.",
     "A2"
    ],
    [
     "improve",
     "v",
     "ˌɪmˈpruːv",
     "cải thiện",
     "Practice will improve your English.",
     "Luyện tập sẽ cải thiện tiếng Anh của bạn.",
     "A2"
    ],
    [
     "progress",
     "n",
     "ˈprɑːˌɡres",
     "sự tiến bộ",
     "You are making good progress.",
     "Bạn đang tiến bộ rất tốt.",
     "B1"
    ]
   ]
  },
  {
   "icon": "🔎",
   "vi": "Nghiên cứu",
   "en": "Research",
   "words": [
    [
     "research",
     "n",
     "riˈsɜːrtʃ",
     "nghiên cứu",
     "She does research on climate.",
     "Cô ấy nghiên cứu về khí hậu.",
     "A2"
    ],
    [
     "researcher",
     "n",
     "ˈriːsərtʃər",
     "nhà nghiên cứu",
     "The researcher published a paper.",
     "Nhà nghiên cứu đã công bố một bài báo.",
     "B1"
    ],
    [
     "survey",
     "n",
     "sərˈveɪ",
     "khảo sát",
     "We did a survey of fifty students.",
     "Chúng tôi khảo sát năm mươi học sinh.",
     "A1"
    ],
    [
     "questionnaire",
     "n",
     "ˌkwestʃəˈner",
     "bảng câu hỏi",
     "Please fill in this questionnaire.",
     "Vui lòng điền vào bảng câu hỏi này.",
     "B1"
    ],
    [
     "result",
     "n",
     "rɪˈzʌlt",
     "kết quả",
     "The results are surprising.",
     "Kết quả thật đáng ngạc nhiên.",
     "A1"
    ],
    [
     "hypothesis",
     "n",
     "haɪˈpɑːθəsəs",
     "giả thuyết",
     "Our hypothesis was correct.",
     "Giả thuyết của chúng tôi đã đúng.",
     "B1"
    ],
    [
     "method",
     "n",
     "ˈmeθəd",
     "phương pháp",
     "This method saves time.",
     "Phương pháp này tiết kiệm thời gian.",
     "A2"
    ],
    [
     "theory",
     "n",
     "ˈθɪri",
     "lý thuyết",
     "The theory explains everything.",
     "Lý thuyết đó giải thích mọi thứ.",
     "B1"
    ],
    [
     "analyze",
     "v",
     "ˈænəˌlaɪz",
     "phân tích",
     "Analyze the results carefully.",
     "Hãy phân tích kết quả cẩn thận.",
     "B1"
    ],
    [
     "source",
     "n",
     "sɔːrs",
     "nguồn",
     "Always check your source.",
     "Luôn kiểm tra nguồn của bạn.",
     "A2"
    ],
    [
     "fact",
     "n",
     "fækt",
     "sự thật",
     "This is a scientific fact.",
     "Đây là một sự thật khoa học.",
     "A2"
    ],
    [
     "discovery",
     "n",
     "dɪˈskʌvəri",
     "phát hiện",
     "It was a great discovery.",
     "Đó là một phát hiện vĩ đại.",
     "B1"
    ],
    [
     "invention",
     "n",
     "ˌɪnˈvenʃən",
     "phát minh",
     "The telephone was a great invention.",
     "Điện thoại là một phát minh tuyệt vời.",
     "A2"
    ]
   ]
  },
  {
   "icon": "💻",
   "vi": "Học trực tuyến",
   "en": "Online Learning",
   "words": [
    [
     "online",
     "adj",
     "ˈɔːnˌlaɪn",
     "trực tuyến",
     "I take an online course.",
     "Tôi học một khóa trực tuyến.",
     "A2"
    ],
    [
     "e-learning",
     "n",
     "iː ˈlɜːrnɪŋ",
     "học qua mạng",
     "E-learning is flexible.",
     "Học qua mạng rất linh hoạt.",
     "B2"
    ],
    [
     "webinar",
     "n",
     "ˈwebɪnər",
     "hội thảo trực tuyến",
     "Join our webinar tonight.",
     "Hãy tham gia hội thảo trực tuyến tối nay.",
     "B1"
    ],
    [
     "video lesson",
     "n",
     "ˈvɪdioʊ ˈlesən",
     "bài học video",
     "I watch a video lesson daily.",
     "Tôi xem một bài học video mỗi ngày.",
     "A1"
    ],
    [
     "platform",
     "n",
     "ˈplætˌfɔːrm",
     "nền tảng",
     "This platform offers free courses.",
     "Nền tảng này cung cấp các khóa học miễn phí.",
     "B1"
    ],
    [
     "login",
     "n",
     "ˈlɔːˌɡɪn",
     "đăng nhập",
     "Use your login to enter.",
     "Dùng tài khoản đăng nhập để vào.",
     "B1"
    ],
    [
     "subtitle",
     "n",
     "ˈsʌbˌtaɪtəl",
     "phụ đề",
     "Turn on the English subtitles.",
     "Hãy bật phụ đề tiếng Anh.",
     "B2"
    ],
    [
     "quiz online",
     "n",
     "kwɪz ˈɔːnˌlaɪn",
     "bài kiểm tra trực tuyến",
     "Take the quiz online.",
     "Hãy làm bài kiểm tra trực tuyến.",
     "A2"
    ],
    [
     "certificate online",
     "n",
     "sərˈtɪfɪkət ˈɔːnˌlaɪn",
     "chứng nhận trực tuyến",
     "You get a certificate online.",
     "Bạn nhận được chứng nhận trực tuyến.",
     "B2"
    ],
    [
     "self-study",
     "n",
     "self ˈstʌdi",
     "tự học",
     "Self-study needs discipline.",
     "Tự học cần có kỷ luật.",
     "A1"
    ],
    [
     "podcast",
     "n",
     "ˈpɔːdˌkæst",
     "podcast",
     "I listen to an English podcast.",
     "Tôi nghe một podcast tiếng Anh.",
     "B1"
    ],
    [
     "tablet",
     "n",
     "ˈtæblət",
     "máy tính bảng",
     "Kids learn with a tablet.",
     "Trẻ em học bằng máy tính bảng.",
     "B1"
    ],
    [
     "download",
     "v",
     "ˈdaʊnˌloʊd",
     "tải về",
     "Download the lesson to study offline.",
     "Hãy tải bài học về để học ngoại tuyến.",
     "A2"
    ]
   ]
  },
  {
   "icon": "💼",
   "vi": "Nghề nghiệp tương lai",
   "en": "Future Careers",
   "words": [
    [
     "career",
     "n",
     "kərˈɪr",
     "sự nghiệp",
     "She wants a career in science.",
     "Cô ấy muốn có sự nghiệp trong khoa học.",
     "B1"
    ],
    [
     "job",
     "n",
     "dʒɑːb",
     "công việc",
     "He found a job in a bank.",
     "Anh ấy tìm được việc ở ngân hàng.",
     "A1"
    ],
    [
     "doctor",
     "n",
     "ˈdɑːktər",
     "bác sĩ",
     "I want to be a doctor.",
     "Tôi muốn trở thành bác sĩ.",
     "A1"
    ],
    [
     "nurse",
     "n",
     "nɜːrs",
     "y tá",
     "The nurse is very gentle.",
     "Cô y tá rất dịu dàng.",
     "A1"
    ],
    [
     "engineer",
     "n",
     "ˈendʒəˈnɪr",
     "kỹ sư",
     "My father is an engineer.",
     "Bố tôi là một kỹ sư.",
     "A1"
    ],
    [
     "lawyer",
     "n",
     "ˈlɔːjər",
     "luật sư",
     "The lawyer explained the law.",
     "Luật sư giải thích luật.",
     "A2"
    ],
    [
     "scientist",
     "n",
     "ˈsaɪəntɪst",
     "nhà khoa học",
     "The scientist made a discovery.",
     "Nhà khoa học đã có một phát hiện.",
     "A1"
    ],
    [
     "architect",
     "n",
     "ˈɑːrkəˌtekt",
     "kiến trúc sư",
     "The architect designed our school.",
     "Kiến trúc sư thiết kế trường chúng tôi.",
     "B1"
    ],
    [
     "journalist",
     "n",
     "ˈdʒɜːrnələst",
     "nhà báo",
     "The journalist wrote about the festival.",
     "Nhà báo viết về lễ hội.",
     "B1"
    ],
    [
     "pilot",
     "n",
     "ˈpaɪlət",
     "phi công",
     "My dream is to be a pilot.",
     "Ước mơ của tôi là làm phi công.",
     "A2"
    ],
    [
     "dream",
     "n",
     "driːm",
     "ước mơ",
     "What is your dream job?",
     "Công việc mơ ước của bạn là gì?",
     "A1"
    ],
    [
     "profession",
     "n",
     "prəˈfeʃən",
     "nghề nghiệp",
     "Teaching is a noble profession.",
     "Dạy học là một nghề cao quý.",
     "B1"
    ]
   ]
  },
  {
   "icon": "🌏",
   "vi": "Học bổng và du học",
   "en": "Scholarships and Studying Abroad",
   "words": [
    [
     "scholarship",
     "n",
     "ˈskɑːlərˌʃɪp",
     "học bổng",
     "She won a scholarship to Australia.",
     "Cô ấy giành học bổng đi Úc.",
     "B1"
    ],
    [
     "apply",
     "v",
     "əˈplaɪ",
     "nộp đơn",
     "I want to apply for the course.",
     "Tôi muốn nộp đơn xin học khóa này.",
     "A2"
    ],
    [
     "application",
     "n",
     "ˌæpləˈkeɪʃən",
     "đơn xin",
     "Send your application by May.",
     "Hãy gửi đơn xin trước tháng Năm.",
     "B1"
    ],
    [
     "admission",
     "n",
     "ædˈmɪʃən",
     "sự tuyển sinh",
     "Admission opens in March.",
     "Đợt tuyển sinh mở vào tháng Ba.",
     "B1"
    ],
    [
     "requirement",
     "n",
     "rɪˈkwaɪrmənt",
     "yêu cầu",
     "What are the requirements?",
     "Các yêu cầu là gì?",
     "B1"
    ],
    [
     "IELTS",
     "n",
     "ˈaɪelts",
     "kỳ thi IELTS",
     "He needs seven in IELTS.",
     "Anh ấy cần được bảy điểm IELTS.",
     "B1"
    ],
    [
     "abroad",
     "adv",
     "əˈbrɔːd",
     "ở nước ngoài",
     "She wants to study abroad.",
     "Cô ấy muốn du học nước ngoài.",
     "A2"
    ],
    [
     "exchange student",
     "n",
     "ɪksˈtʃeɪndʒ ˈstuːdənt",
     "sinh viên trao đổi",
     "He is an exchange student in Japan.",
     "Anh ấy là sinh viên trao đổi ở Nhật.",
     "A2"
    ],
    [
     "interview",
     "n",
     "ˈɪntərˌvjuː",
     "buổi phỏng vấn",
     "The interview was not scary.",
     "Buổi phỏng vấn không đáng sợ.",
     "A1"
    ],
    [
     "recommendation",
     "n",
     "ˌrekəmənˈdeɪʃən",
     "thư giới thiệu",
     "My teacher wrote me a recommendation.",
     "Giáo viên của tôi viết thư giới thiệu cho tôi.",
     "B2"
    ],
    [
     "international",
     "adj",
     "ˌɪntərˈnæʃənəl",
     "quốc tế",
     "It is an international school.",
     "Đó là một trường quốc tế.",
     "A2"
    ],
    [
     "visa",
     "n",
     "ˈviːzə",
     "thị thực",
     "You need a student visa.",
     "Bạn cần thị thực du học.",
     "B1"
    ]
   ]
  },
  {
   "icon": "🧠",
   "vi": "Tư duy và trí nhớ",
   "en": "Thinking and Memory",
   "words": [
    [
     "think",
     "v",
     "θɪŋk",
     "suy nghĩ",
     "Think before you answer.",
     "Hãy suy nghĩ trước khi trả lời.",
     "A1"
    ],
    [
     "idea",
     "n",
     "aɪˈdiːə",
     "ý tưởng",
     "That is a great idea!",
     "Đó là một ý tưởng tuyệt vời!",
     "A1"
    ],
    [
     "imagine",
     "v",
     "ˌɪˈmædʒən",
     "tưởng tượng",
     "Imagine you are on a beach.",
     "Hãy tưởng tượng bạn đang ở bãi biển.",
     "A1"
    ],
    [
     "creative",
     "adj",
     "kriˈeɪtɪv",
     "sáng tạo",
     "She is a creative student.",
     "Cô ấy là một học sinh sáng tạo.",
     "A2"
    ],
    [
     "smart",
     "adj",
     "smɑːrt",
     "thông minh",
     "He is a smart boy.",
     "Cậu ấy là một cậu bé thông minh.",
     "A1"
    ],
    [
     "intelligent",
     "adj",
     "ˌɪnˈtelədʒənt",
     "thông minh sáng suốt",
     "She is very intelligent.",
     "Cô ấy rất thông minh.",
     "A2"
    ],
    [
     "wise",
     "adj",
     "waɪz",
     "khôn ngoan",
     "A wise person listens first.",
     "Người khôn ngoan biết lắng nghe trước.",
     "A2"
    ],
    [
     "understand",
     "v",
     "ˌʌndərˈstænd",
     "hiểu",
     "I understand the lesson now.",
     "Bây giờ tôi hiểu bài rồi.",
     "A2"
    ],
    [
     "solve",
     "v",
     "sɑːlv",
     "giải quyết",
     "Solve the problem step by step.",
     "Hãy giải quyết vấn đề từng bước.",
     "A1"
    ],
    [
     "decide",
     "v",
     "ˌdɪˈsaɪd",
     "quyết định",
     "I decided to study abroad.",
     "Tôi đã quyết định du học.",
     "A2"
    ],
    [
     "knowledge",
     "n",
     "ˈnɑːlədʒ",
     "kiến thức",
     "Knowledge is power.",
     "Kiến thức là sức mạnh.",
     "A2"
    ],
    [
     "curiosity",
     "n",
     "ˌkjʊriˈɑːsəti",
     "sự tò mò",
     "Curiosity makes us learn.",
     "Sự tò mò khiến chúng ta học hỏi.",
     "B1"
    ]
   ]
  },
  {
   "icon": "🎭",
   "vi": "Nghệ thuật và văn học",
   "en": "Arts and Literature",
   "words": [
    [
     "poem",
     "n",
     "ˈpoʊəm",
     "bài thơ",
     "We read a poem in class.",
     "Chúng tôi đọc một bài thơ trong lớp.",
     "A1"
    ],
    [
     "poet",
     "n",
     "ˈpoʊət",
     "nhà thơ",
     "The poet wrote about the sea.",
     "Nhà thơ viết về biển.",
     "B1"
    ],
    [
     "story",
     "n",
     "ˈstɔːri",
     "câu chuyện",
     "The teacher told a funny story.",
     "Cô giáo kể một câu chuyện vui.",
     "A1"
    ],
    [
     "character",
     "n",
     "ˈkerɪktər",
     "nhân vật",
     "Who is your favorite character?",
     "Nhân vật yêu thích của bạn là ai?",
     "A1"
    ],
    [
     "plot",
     "n",
     "plɑːt",
     "cốt truyện",
     "The plot is very exciting.",
     "Cốt truyện rất hấp dẫn.",
     "B2"
    ],
    [
     "theme",
     "n",
     "θiːm",
     "chủ đề",
     "The theme is friendship.",
     "Chủ đề là tình bạn.",
     "B2"
    ],
    [
     "drama",
     "n",
     "ˈdrɑːmə",
     "kịch",
     "Our class performed a drama.",
     "Lớp chúng tôi diễn một vở kịch.",
     "A1"
    ],
    [
     "painting",
     "n",
     "ˈpeɪntɪŋ",
     "bức tranh",
     "This painting is very old.",
     "Bức tranh này rất cũ.",
     "A1"
    ],
    [
     "sculpture",
     "n",
     "ˈskʌlptʃər",
     "tác phẩm điêu khắc",
     "The sculpture is made of stone.",
     "Tác phẩm điêu khắc làm bằng đá.",
     "B1"
    ],
    [
     "choir",
     "n",
     "ˈkwaɪər",
     "dàn hợp xướng",
     "She sings in the school choir.",
     "Cô ấy hát trong dàn hợp xướng của trường.",
     "B1"
    ],
    [
     "orchestra",
     "n",
     "ˈɔːrkəstrə",
     "dàn nhạc",
     "The orchestra plays every Friday.",
     "Dàn nhạc chơi vào mỗi thứ Sáu.",
     "B1"
    ],
    [
     "folktale",
     "n",
     "ˈfoʊkˌteɪl",
     "truyện dân gian",
     "Grandma tells us folktales.",
     "Bà kể cho chúng tôi những truyện dân gian.",
     "B1"
    ]
   ]
  },
  {
   "icon": "🧩",
   "vi": "Tính từ học thuật",
   "en": "Academic Adjectives",
   "words": [
    [
     "important",
     "adj",
     "ˌɪmˈpɔːrtənt",
     "quan trọng",
     "Sleep is important for students.",
     "Giấc ngủ quan trọng với học sinh.",
     "A1"
    ],
    [
     "difficult",
     "adj",
     "ˈdɪfəkəlt",
     "khó",
     "Chemistry is difficult for me.",
     "Môn hóa khó với tôi.",
     "A1"
    ],
    [
     "easy",
     "adj",
     "ˈiːzi",
     "dễ",
     "This exercise is easy.",
     "Bài tập này dễ.",
     "A1"
    ],
    [
     "useful",
     "adj",
     "ˈjuːsfəl",
     "hữu ích",
     "A dictionary is very useful.",
     "Từ điển rất hữu ích.",
     "A2"
    ],
    [
     "boring",
     "adj",
     "ˈbɔːrɪŋ",
     "nhàm chán",
     "The lecture was boring.",
     "Bài giảng thật nhàm chán.",
     "A1"
    ],
    [
     "interesting",
     "adj",
     "ˈɪntrəstɪŋ",
     "thú vị",
     "History is interesting.",
     "Lịch sử rất thú vị.",
     "A1"
    ],
    [
     "strict",
     "adj",
     "strɪkt",
     "nghiêm khắc",
     "Our teacher is strict but fair.",
     "Giáo viên của chúng tôi nghiêm khắc nhưng công bằng.",
     "A1"
    ],
    [
     "clear",
     "adj",
     "klɪr",
     "rõ ràng",
     "Your explanation is clear.",
     "Lời giải thích của bạn rõ ràng.",
     "A2"
    ],
    [
     "complete",
     "adj",
     "kəmˈpliːt",
     "hoàn chỉnh",
     "Give a complete answer.",
     "Hãy đưa ra câu trả lời hoàn chỉnh.",
     "A2"
    ],
    [
     "accurate",
     "adj",
     "ˈækjərət",
     "chính xác",
     "The data must be accurate.",
     "Dữ liệu phải chính xác.",
     "B1"
    ],
    [
     "basic",
     "adj",
     "ˈbeɪsɪk",
     "cơ bản",
     "Learn the basic rules first.",
     "Hãy học các quy tắc cơ bản trước.",
     "A2"
    ],
    [
     "advanced",
     "adj",
     "ədˈvænst",
     "nâng cao",
     "She takes an advanced class.",
     "Cô ấy học một lớp nâng cao.",
     "A2"
    ],
    [
     "academic",
     "adj",
     "ˌækəˈdemɪk",
     "thuộc học thuật",
     "She has a strong academic record.",
     "Cô ấy có thành tích học tập vững vàng.",
     "B1"
    ]
   ]
  },
  {
   "icon": "🏃‍♀️",
   "vi": "Động từ học thuật",
   "en": "Academic Verbs",
   "words": [
    [
     "compare",
     "v",
     "kəmˈper",
     "so sánh",
     "Compare these two pictures.",
     "Hãy so sánh hai bức tranh này.",
     "A2"
    ],
    [
     "describe",
     "v",
     "dɪˈskraɪb",
     "mô tả",
     "Describe your best friend.",
     "Hãy mô tả người bạn thân nhất của bạn.",
     "A1"
    ],
    [
     "define",
     "v",
     "dɪˈfaɪn",
     "định nghĩa",
     "Define this word in English.",
     "Hãy định nghĩa từ này bằng tiếng Anh.",
     "B1"
    ],
    [
     "choose",
     "v",
     "tʃuːz",
     "chọn",
     "Choose the correct answer.",
     "Hãy chọn câu trả lời đúng.",
     "A1"
    ],
    [
     "match",
     "v",
     "mætʃ",
     "nối",
     "Match the words with pictures.",
     "Hãy nối các từ với hình ảnh.",
     "A1"
    ],
    [
     "underline",
     "v",
     "ˈʌndərˌlaɪn",
     "gạch chân",
     "Underline the verbs.",
     "Hãy gạch chân các động từ.",
     "A1"
    ],
    [
     "circle",
     "v",
     "ˈsɜːrkəl",
     "khoanh tròn",
     "Circle the right letter.",
     "Hãy khoanh tròn chữ cái đúng.",
     "A1"
    ],
    [
     "predict",
     "v",
     "prɪˈdɪkt",
     "dự đoán",
     "Predict what happens next.",
     "Hãy dự đoán điều gì xảy ra tiếp theo.",
     "A2"
    ],
    [
     "conclude",
     "v",
     "kənˈkluːd",
     "kết luận",
     "We can conclude that he is right.",
     "Chúng ta có thể kết luận rằng anh ấy đúng.",
     "B1"
    ],
    [
     "present",
     "v",
     "ˈprezənt",
     "trình bày",
     "I will present my project.",
     "Tôi sẽ trình bày dự án của mình.",
     "A1"
    ],
    [
     "develop",
     "v",
     "dɪˈveləp",
     "phát triển",
     "Reading develops your imagination.",
     "Đọc sách phát triển trí tưởng tượng của bạn.",
     "A2"
    ]
   ]
  },
  {
   "icon": "🎤",
   "vi": "Thuyết trình",
   "en": "Presentations",
   "words": [
    [
     "presentation",
     "n",
     "ˌprezənˈteɪʃən",
     "bài thuyết trình",
     "Her presentation was excellent.",
     "Bài thuyết trình của cô ấy rất xuất sắc.",
     "B1"
    ],
    [
     "speech",
     "n",
     "spiːtʃ",
     "bài phát biểu",
     "He gave a short speech.",
     "Anh ấy có một bài phát biểu ngắn.",
     "A1"
    ],
    [
     "audience",
     "n",
     "ˈɑːdiəns",
     "khán giả",
     "The audience clapped loudly.",
     "Khán giả vỗ tay rất to.",
     "A2"
    ],
    [
     "slide",
     "n",
     "slaɪd",
     "trang trình chiếu",
     "The last slide shows a chart.",
     "Trang cuối cùng có một biểu đồ.",
     "A2"
    ],
    [
     "projector",
     "n",
     "prəˈdʒektər",
     "máy chiếu",
     "Turn on the projector, please.",
     "Làm ơn bật máy chiếu lên.",
     "B1"
    ],
    [
     "topic",
     "n",
     "ˈtɑːpɪk",
     "chủ đề",
     "Choose a topic you like.",
     "Hãy chọn một chủ đề bạn thích.",
     "A1"
    ],
    [
     "outline",
     "n",
     "ˈaʊtˌlaɪn",
     "dàn ý",
     "Write an outline first.",
     "Hãy viết dàn ý trước.",
     "B1"
    ],
    [
     "volume",
     "n",
     "ˈvɑːljuːm",
     "âm lượng",
     "Speak with a loud volume.",
     "Hãy nói với âm lượng lớn.",
     "B1"
    ],
    [
     "confident",
     "adj",
     "ˈkɑːnfədənt",
     "tự tin",
     "Stay confident on stage.",
     "Hãy giữ sự tự tin trên sân khấu.",
     "A2"
    ],
    [
     "nervous",
     "adj",
     "ˈnɜːrvəs",
     "hồi hộp",
     "I feel nervous before a speech.",
     "Tôi thấy hồi hộp trước bài phát biểu.",
     "A2"
    ],
    [
     "eye contact",
     "n",
     "aɪ ˈkɑːnˌtækt",
     "giao tiếp bằng mắt",
     "Keep eye contact with the audience.",
     "Hãy giữ giao tiếp bằng mắt với khán giả.",
     "A2"
    ],
    [
     "applause",
     "n",
     "əˈplɔːz",
     "tràng vỗ tay",
     "The class gave her applause.",
     "Cả lớp dành cho cô ấy một tràng vỗ tay.",
     "B1"
    ]
   ]
  },
  {
   "icon": "🤝",
   "vi": "Làm việc nhóm",
   "en": "Teamwork",
   "words": [
    [
     "team",
     "n",
     "tiːm",
     "đội, nhóm",
     "Our team won first prize.",
     "Đội của chúng tôi giành giải nhất.",
     "A1"
    ],
    [
     "partner",
     "n",
     "ˈpɑːrtnər",
     "bạn cùng cặp",
     "Work with a partner.",
     "Hãy làm việc với một bạn cùng cặp.",
     "A1"
    ],
    [
     "cooperate",
     "v",
     "koʊˈɑːpərˌeɪt",
     "hợp tác",
     "We cooperate on the project.",
     "Chúng tôi hợp tác trong dự án.",
     "B2"
    ],
    [
     "share",
     "v",
     "ʃer",
     "chia sẻ",
     "Share your ideas with the group.",
     "Hãy chia sẻ ý tưởng của bạn với nhóm.",
     "A1"
    ],
    [
     "role",
     "n",
     "roʊl",
     "vai trò",
     "Everyone has a role in the group.",
     "Mọi người đều có vai trò trong nhóm.",
     "A1"
    ],
    [
     "leader",
     "n",
     "ˈliːdər",
     "trưởng nhóm",
     "Who is the group leader?",
     "Ai là trưởng nhóm?",
     "A1"
    ],
    [
     "member",
     "n",
     "ˈmembər",
     "thành viên",
     "Each member did a part.",
     "Mỗi thành viên làm một phần.",
     "A2"
    ],
    [
     "help",
     "v",
     "help",
     "giúp đỡ",
     "Good teams help each other.",
     "Các nhóm tốt giúp đỡ lẫn nhau.",
     "A1"
    ],
    [
     "respect",
     "v",
     "rɪˈspekt",
     "tôn trọng",
     "Respect other people's ideas.",
     "Hãy tôn trọng ý tưởng của người khác.",
     "B1"
    ],
    [
     "agree",
     "v",
     "əˈɡriː",
     "đồng ý",
     "We all agree on the plan.",
     "Tất cả chúng tôi đều đồng ý với kế hoạch.",
     "A1"
    ],
    [
     "compromise",
     "n",
     "ˈkɑːmprəˌmaɪz",
     "sự nhượng bộ",
     "A compromise solved the problem.",
     "Sự nhượng bộ đã giải quyết vấn đề.",
     "B1"
    ]
   ]
  },
  {
   "icon": "⚽",
   "vi": "Hoạt động ngoại khóa",
   "en": "Extracurricular Activities",
   "words": [
    [
     "activity",
     "n",
     "ækˈtɪvəti",
     "hoạt động",
     "Swimming is my favorite activity.",
     "Bơi lội là hoạt động yêu thích của tôi.",
     "A1"
    ],
    [
     "competition",
     "n",
     "ˌkɑːmpəˈtɪʃən",
     "cuộc thi",
     "She won the English competition.",
     "Cô ấy thắng cuộc thi tiếng Anh.",
     "A2"
    ],
    [
     "prize",
     "n",
     "praɪz",
     "giải thưởng",
     "He got first prize.",
     "Cậu ấy đạt giải nhất.",
     "B1"
    ],
    [
     "trip",
     "n",
     "trɪp",
     "chuyến đi thực tế",
     "The class trip was fun.",
     "Chuyến đi thực tế của lớp rất vui.",
     "A1"
    ],
    [
     "volunteer",
     "v",
     "ˌvɑːlənˈtɪr",
     "làm tình nguyện",
     "Students volunteer at the shelter.",
     "Học sinh làm tình nguyện ở trạm cứu trợ.",
     "B1"
    ],
    [
     "debate",
     "n",
     "dəˈbeɪt",
     "cuộc tranh luận",
     "Our school has a debate club.",
     "Trường chúng tôi có câu lạc bộ tranh luận.",
     "A2"
    ],
    [
     "science fair",
     "n",
     "ˈsaɪəns fer",
     "hội chợ khoa học",
     "My project was at the science fair.",
     "Dự án của tôi được trưng bày ở hội chợ khoa học.",
     "A1"
    ],
    [
     "talent show",
     "n",
     "ˈtælənt ʃoʊ",
     "cuộc thi tài năng",
     "She sang at the talent show.",
     "Cô ấy hát trong cuộc thi tài năng.",
     "A2"
    ],
    [
     "camp",
     "n",
     "kæmp",
     "trại hè",
     "I went to summer camp.",
     "Tôi đã đi trại hè.",
     "A1"
    ],
    [
     "rehearsal",
     "n",
     "rɪˈhɜːrsəl",
     "buổi diễn tập",
     "We have a rehearsal today.",
     "Hôm nay chúng tôi có buổi diễn tập.",
     "B2"
    ],
    [
     "perform",
     "v",
     "pərˈfɔːrm",
     "biểu diễn",
     "The class will perform a play.",
     "Cả lớp sẽ biểu diễn một vở kịch.",
     "A2"
    ],
    [
     "join",
     "v",
     "dʒɔɪn",
     "tham gia",
     "Join our English club.",
     "Hãy tham gia câu lạc bộ tiếng Anh.",
     "A1"
    ]
   ]
  },
  {
   "icon": "🎒",
   "vi": "Năm học và kỳ nghỉ",
   "en": "The School Year",
   "words": [
    [
     "term",
     "n",
     "tɜːrm",
     "học kỳ",
     "The first term ends in December.",
     "Học kỳ một kết thúc vào tháng Mười Hai.",
     "B1"
    ],
    [
     "break",
     "n",
     "breɪk",
     "giờ nghỉ",
     "We play during the break.",
     "Chúng tôi chơi trong giờ nghỉ.",
     "A1"
    ],
    [
     "summer vacation",
     "n",
     "ˈsʌmər veɪˈkeɪʃən",
     "kỳ nghỉ hè",
     "Summer vacation is my favorite time.",
     "Kỳ nghỉ hè là thời gian tôi thích nhất.",
     "A1"
    ],
    [
     "first day",
     "n",
     "fɜːrst deɪ",
     "ngày đầu tiên",
     "Today is my first day of school.",
     "Hôm nay là ngày đầu tiên tôi đi học.",
     "A1"
    ],
    [
     "opening ceremony",
     "n",
     "ˈoʊpənɪŋ ˈserəˌmoʊni",
     "lễ khai giảng",
     "The opening ceremony starts at eight.",
     "Lễ khai giảng bắt đầu lúc tám giờ.",
     "B1"
    ],
    [
     "uniform",
     "n",
     "ˈjuːnəˌfɔːrm",
     "đồng phục",
     "We wear a white uniform.",
     "Chúng tôi mặc đồng phục trắng.",
     "A2"
    ],
    [
     "bell",
     "n",
     "bel",
     "chuông",
     "The bell rings at seven.",
     "Chuông reo lúc bảy giờ.",
     "A1"
    ],
    [
     "lesson",
     "n",
     "ˈlesən",
     "bài học",
     "Today's lesson is about animals.",
     "Bài học hôm nay là về động vật.",
     "A1"
    ],
    [
     "period",
     "n",
     "ˈpɪriəd",
     "tiết học",
     "The first period is math.",
     "Tiết đầu tiên là môn toán.",
     "A1"
    ],
    [
     "absent",
     "adj",
     "ˈæbsənt",
     "vắng mặt",
     "He was absent yesterday.",
     "Hôm qua cậu ấy vắng mặt.",
     "B1"
    ],
    [
     "late",
     "adj",
     "leɪt",
     "muộn",
     "Do not be late for class.",
     "Đừng đến lớp muộn.",
     "A1"
    ],
    [
     "attendance",
     "n",
     "əˈtendəns",
     "sự điểm danh",
     "Attendance is compulsory.",
     "Việc điểm danh là bắt buộc.",
     "B2"
    ]
   ]
  },
  {
   "icon": "⭐",
   "vi": "Đánh giá và phản hồi",
   "en": "Assessment and Feedback",
   "words": [
    [
     "feedback",
     "n",
     "ˈfiːdˌbæk",
     "phản hồi",
     "The teacher gave me useful feedback.",
     "Giáo viên cho tôi phản hồi hữu ích.",
     "B2"
    ],
    [
     "comment",
     "n",
     "ˈkɑːment",
     "nhận xét",
     "Read the teacher's comments.",
     "Hãy đọc nhận xét của giáo viên.",
     "B1"
    ],
    [
     "praise",
     "v",
     "preɪz",
     "khen ngợi",
     "The teacher praised my work.",
     "Giáo viên khen ngợi bài làm của tôi.",
     "B1"
    ],
    [
     "encourage",
     "v",
     "enˈkɜːrɪdʒ",
     "khuyến khích",
     "Parents encourage their children.",
     "Bố mẹ khuyến khích con cái.",
     "A2"
    ],
    [
     "reward",
     "n",
     "rɪˈwɔːrd",
     "phần thưởng",
     "A star is a small reward.",
     "Một ngôi sao là phần thưởng nhỏ.",
     "B1"
    ],
    [
     "punishment",
     "n",
     "ˈpʌnɪʃmənt",
     "hình phạt",
     "There is no punishment for mistakes.",
     "Không có hình phạt cho những lỗi sai.",
     "B1"
    ],
    [
     "evaluate",
     "v",
     "ɪˈvæljuːˌeɪt",
     "đánh giá",
     "Teachers evaluate students fairly.",
     "Giáo viên đánh giá học sinh công bằng.",
     "B2"
    ],
    [
     "assessment",
     "n",
     "əˈsesmənt",
     "bài đánh giá",
     "The assessment is at the end of term.",
     "Bài đánh giá diễn ra vào cuối học kỳ.",
     "B2"
    ],
    [
     "strength",
     "n",
     "streŋkθ",
     "điểm mạnh",
     "Reading is her strength.",
     "Đọc là điểm mạnh của cô ấy.",
     "A2"
    ],
    [
     "weakness",
     "n",
     "ˈwiːknəs",
     "điểm yếu",
     "Spelling is my weakness.",
     "Chính tả là điểm yếu của tôi.",
     "B1"
    ],
    [
     "effort",
     "n",
     "ˈefərt",
     "nỗ lực",
     "Your effort will pay off.",
     "Nỗ lực của bạn sẽ được đền đáp.",
     "A2"
    ],
    [
     "achievement",
     "n",
     "əˈtʃiːvmənt",
     "thành tích",
     "She is proud of her achievement.",
     "Cô ấy tự hào về thành tích của mình.",
     "B1"
    ]
   ]
  }
 ]
};
