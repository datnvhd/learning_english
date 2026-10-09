/**
 * DỮ LIỆU TỪ VỰNG – chủ đề "toeic"
 * ------------------------------------------------------------------
 * FILE NÀY ĐƯỢC SINH TỰ ĐỘNG bởi tools/build-vocab.mjs – KHÔNG sửa tay.
 * Muốn thêm/sửa từ: chỉnh tools/vocab-src/toeic.txt rồi chạy "npm run build:vocab".
 * Mỗi từ là một mảng: [từ, loại từ, phiên âm IPA, nghĩa, câu ví dụ EN, câu ví dụ VI, trình độ CEFR].
 */
import { TopicVocabData } from '../../models/vocab.model';

export const VOCAB: TopicVocabData = {
 "lessons": [
  {
   "icon": "🎁",
   "vi": "Phúc lợi và đãi ngộ",
   "en": "Benefits and Compensation",
   "words": [
    [
     "benefits",
     "n",
     "ˈbenəfɪts",
     "phúc lợi",
     "The job offers excellent benefits.",
     "Công việc này có phúc lợi tuyệt vời.",
     "B1"
    ],
    [
     "bonus",
     "n",
     "ˈboʊnəs",
     "tiền thưởng",
     "Staff received a year-end bonus.",
     "Nhân viên nhận tiền thưởng cuối năm.",
     "A2"
    ],
    [
     "overtime",
     "n",
     "ˈoʊvərˌtaɪm",
     "làm thêm giờ",
     "Overtime is paid at double rate.",
     "Làm thêm giờ được trả gấp đôi.",
     "B2"
    ],
    [
     "raise",
     "n",
     "reɪz",
     "sự tăng lương",
     "She asked for a raise.",
     "Cô ấy xin tăng lương.",
     "A2"
    ],
    [
     "pension",
     "n",
     "ˈpenʃən",
     "lương hưu",
     "The firm contributes to a pension plan.",
     "Công ty đóng góp vào quỹ lương hưu.",
     "B2"
    ],
    [
     "paid leave",
     "n",
     "peɪd liːv",
     "nghỉ phép có lương",
     "Employees get twenty days of paid leave.",
     "Nhân viên được hai mươi ngày nghỉ phép có lương.",
     "B1"
    ],
    [
     "maternity leave",
     "n",
     "məˈtɜːrnɪti liːv",
     "nghỉ thai sản",
     "Maternity leave lasts six months.",
     "Nghỉ thai sản kéo dài sáu tháng.",
     "B2"
    ],
    [
     "flexible hours",
     "n",
     "ˈfleksəbəl ˈaʊərz",
     "giờ làm linh hoạt",
     "We offer flexible hours.",
     "Chúng tôi cho phép giờ làm linh hoạt.",
     "B2"
    ],
    [
     "incentive",
     "n",
     "ˌɪnˈsentɪv",
     "sự khuyến khích",
     "Bonuses are an incentive to work harder.",
     "Tiền thưởng là sự khuyến khích làm việc chăm chỉ hơn.",
     "B2"
    ],
    [
     "stipend",
     "n",
     "ˈstaɪpənd",
     "trợ cấp",
     "Interns receive a monthly stipend.",
     "Thực tập sinh nhận trợ cấp hằng tháng.",
     "B2"
    ],
    [
     "commute",
     "n",
     "kəˈmjuːt",
     "việc đi làm",
     "Her commute takes forty minutes.",
     "Việc đi làm của cô ấy mất bốn mươi phút.",
     "B2"
    ],
    [
     "seniority",
     "n",
     "siˈnjɔːrɪti",
     "thâm niên",
     "Promotions are based on seniority.",
     "Thăng chức dựa trên thâm niên.",
     "B2"
    ]
   ]
  },
  {
   "icon": "🌐",
   "vi": "Thương mại điện tử",
   "en": "Online Business",
   "words": [
    [
     "e-commerce",
     "n",
     "iː ˈkɑːmərs",
     "thương mại điện tử",
     "E-commerce sales grow every year.",
     "Doanh số thương mại điện tử tăng mỗi năm.",
     "B2"
    ],
    [
     "website",
     "n",
     "ˈwebˌsaɪt",
     "trang web",
     "Visit our website for details.",
     "Truy cập trang web của chúng tôi để biết chi tiết.",
     "A2"
    ],
    [
     "subscribe",
     "v",
     "səbˈskraɪb",
     "đăng ký nhận",
     "Subscribe to our newsletter.",
     "Hãy đăng ký nhận bản tin của chúng tôi.",
     "B2"
    ],
    [
     "newsletter",
     "n",
     "ˈnuːzˌletər",
     "bản tin",
     "The newsletter is sent monthly.",
     "Bản tin được gửi hằng tháng.",
     "B2"
    ],
    [
     "testimonial",
     "n",
     "ˌtestəˈmoʊniəl",
     "lời chứng thực",
     "The site displays customer testimonials.",
     "Trang web hiển thị lời chứng thực của khách hàng.",
     "B2"
    ],
    [
     "checkout page",
     "n",
     "ˈtʃeˌkaʊt peɪdʒ",
     "trang thanh toán",
     "The checkout page is secure.",
     "Trang thanh toán rất an toàn.",
     "B1"
    ],
    [
     "online shopping",
     "n",
     "ˈɔːnˌlaɪn ˈʃɑːpɪŋ",
     "mua sắm trực tuyến",
     "Online shopping is convenient.",
     "Mua sắm trực tuyến rất tiện lợi.",
     "A2"
    ],
    [
     "free shipping",
     "n",
     "friː ˈʃɪpɪŋ",
     "miễn phí vận chuyển",
     "Free shipping applies to orders over fifty dollars.",
     "Miễn phí vận chuyển cho đơn trên năm mươi đô la.",
     "B2"
    ],
    [
     "customer review",
     "n",
     "ˈkʌstəmər ˌriːˈvjuː",
     "đánh giá của khách",
     "Customer reviews influence sales.",
     "Đánh giá của khách hàng ảnh hưởng đến doanh số.",
     "A2"
    ],
    [
     "click-through",
     "n",
     "klɪk θruː",
     "lượt nhấp",
     "The ad had a high click-through rate.",
     "Quảng cáo có tỷ lệ nhấp cao.",
     "A2"
    ],
    [
     "traffic",
     "n",
     "ˈtræfɪk",
     "lưu lượng truy cập",
     "Website traffic doubled in June.",
     "Lưu lượng truy cập trang web tăng gấp đôi vào tháng Sáu.",
     "A2"
    ],
    [
     "update",
     "n",
     "əpˈdeɪt",
     "bản cập nhật",
     "An update will be released next week.",
     "Một bản cập nhật sẽ phát hành vào tuần tới.",
     "B1"
    ]
   ]
  },
  {
   "icon": "🍽️",
   "vi": "Đặt tiệc và tiếp khách",
   "en": "Corporate Hospitality",
   "words": [
    [
     "reception",
     "n",
     "rɪˈsepʃən",
     "tiệc chiêu đãi",
     "A reception follows the meeting.",
     "Tiệc chiêu đãi diễn ra sau cuộc họp.",
     "B1"
    ],
    [
     "host",
     "v",
     "hoʊst",
     "chiêu đãi, đăng cai",
     "The company will host a dinner for clients.",
     "Công ty sẽ chiêu đãi khách hàng bữa tối.",
     "A2"
    ],
    [
     "guest list",
     "n",
     "ɡest lɪst",
     "danh sách khách mời",
     "Please confirm the guest list.",
     "Vui lòng xác nhận danh sách khách mời.",
     "A1"
    ],
    [
     "dietary",
     "adj",
     "ˈdaɪəˌteri",
     "liên quan chế độ ăn",
     "Tell us about any dietary restrictions.",
     "Hãy cho chúng tôi biết mọi hạn chế về chế độ ăn.",
     "B2"
    ],
    [
     "appetizer",
     "n",
     "ˈæpəˌtaɪzər",
     "món khai vị",
     "Appetizers are served at six.",
     "Món khai vị được phục vụ lúc sáu giờ.",
     "B2"
    ],
    [
     "cater",
     "v",
     "ˈkeɪtər",
     "phục vụ tiệc",
     "Our firm caters corporate events.",
     "Công ty chúng tôi phục vụ tiệc cho các sự kiện doanh nghiệp.",
     "B2"
    ],
    [
     "seating",
     "n",
     "ˈsiːtɪŋ",
     "chỗ ngồi",
     "Seating is limited to fifty guests.",
     "Chỗ ngồi giới hạn năm mươi khách.",
     "B2"
    ],
    [
     "toast",
     "n",
     "toʊst",
     "lời chúc rượu",
     "The CEO gave a toast to the team.",
     "Tổng giám đốc nâng ly chúc mừng cả nhóm.",
     "A2"
    ],
    [
     "dress code",
     "n",
     "dres koʊd",
     "quy định trang phục",
     "The dress code is business casual.",
     "Quy định trang phục là công sở thoải mái.",
     "A1"
    ],
    [
     "valet parking",
     "n",
     "væˈleɪ ˈpɑːrkɪŋ",
     "dịch vụ đỗ xe hộ",
     "Valet parking is available.",
     "Có dịch vụ đỗ xe hộ.",
     "B2"
    ],
    [
     "reservation deposit",
     "n",
     "ˌrezərˈveɪʃən dəˈpɑːzɪt",
     "tiền cọc đặt chỗ",
     "A reservation deposit is required.",
     "Cần một khoản cọc đặt chỗ.",
     "B1"
    ],
    [
     "gala",
     "n",
     "ˈɡælə",
     "dạ tiệc",
     "The annual gala raises money for charity.",
     "Dạ tiệc thường niên gây quỹ từ thiện.",
     "B2"
    ]
   ]
  },
  {
   "icon": "🏢",
   "vi": "Văn phòng",
   "en": "Office",
   "words": [
    [
     "colleague",
     "n",
     "ˈkɑːliɡ",
     "đồng nghiệp",
     "My colleague will cover the front desk.",
     "Đồng nghiệp của tôi sẽ trực quầy lễ tân.",
     "B2"
    ],
    [
     "supervisor",
     "n",
     "ˈsuːpərˌvaɪzər",
     "người giám sát",
     "Please report to your supervisor.",
     "Vui lòng báo cáo với người giám sát của bạn.",
     "B2"
    ],
    [
     "department",
     "n",
     "dɪˈpɑːrtmənt",
     "phòng ban",
     "The marketing department moved upstairs.",
     "Phòng marketing đã chuyển lên tầng trên.",
     "B1"
    ],
    [
     "headquarters",
     "n",
     "ˈhedˌkwɔːrtərz",
     "trụ sở chính",
     "The company's headquarters is in Seoul.",
     "Trụ sở chính của công ty ở Seoul.",
     "B2"
    ],
    [
     "receptionist",
     "n",
     "rɪˈsepʃənɪst",
     "nhân viên lễ tân",
     "The receptionist greeted the visitors.",
     "Nhân viên lễ tân chào đón khách.",
     "A2"
    ],
    [
     "photocopier",
     "n",
     "ˈfoʊtoʊˌkɑːpiər",
     "máy photocopy",
     "The photocopier is out of paper.",
     "Máy photocopy hết giấy.",
     "B2"
    ],
    [
     "stationery",
     "n",
     "ˈsteɪʃəˌneri",
     "văn phòng phẩm",
     "We need to order more stationery.",
     "Chúng ta cần đặt thêm văn phòng phẩm.",
     "B2"
    ],
    [
     "cubicle",
     "n",
     "ˈkjuːbɪkəl",
     "ngăn làm việc",
     "Each employee has a small cubicle.",
     "Mỗi nhân viên có một ngăn làm việc nhỏ.",
     "B2"
    ],
    [
     "break room",
     "n",
     "breɪk ruːm",
     "phòng nghỉ",
     "Lunch is available in the break room.",
     "Bữa trưa có ở phòng nghỉ.",
     "A1"
    ],
    [
     "memo",
     "n",
     "ˈmeˌmoʊ",
     "bản ghi nhớ nội bộ",
     "A memo was sent to all staff.",
     "Một bản ghi nhớ được gửi cho toàn bộ nhân viên.",
     "B2"
    ],
    [
     "file cabinet",
     "n",
     "faɪl ˈkæbənət",
     "tủ hồ sơ",
     "Keep the contracts in the file cabinet.",
     "Hãy giữ các hợp đồng trong tủ hồ sơ.",
     "B2"
    ],
    [
     "workstation",
     "n",
     "ˈwɜːrkˌsteɪʃən",
     "vị trí làm việc",
     "Please clean your workstation before leaving.",
     "Vui lòng dọn dẹp vị trí làm việc trước khi về.",
     "B2"
    ]
   ]
  },
  {
   "icon": "🗓️",
   "vi": "Cuộc họp và lịch làm việc",
   "en": "Meetings and Schedules",
   "words": [
    [
     "agenda",
     "n",
     "əˈdʒendə",
     "chương trình nghị sự",
     "The agenda includes three main topics.",
     "Chương trình nghị sự gồm ba chủ đề chính.",
     "B1"
    ],
    [
     "attendee",
     "n",
     "əˈtenˈdiː",
     "người tham dự",
     "All attendees must register in advance.",
     "Mọi người tham dự phải đăng ký trước.",
     "B2"
    ],
    [
     "postpone",
     "v",
     "poʊstˈpoʊn",
     "hoãn lại",
     "The meeting was postponed until Friday.",
     "Cuộc họp bị hoãn đến thứ Sáu.",
     "B2"
    ],
    [
     "reschedule",
     "v",
     "riˈskedʒuːl",
     "dời lịch",
     "Could we reschedule for next week?",
     "Chúng ta dời lịch sang tuần sau được không?",
     "B2"
    ],
    [
     "minutes",
     "n",
     "ˈmɪnəts",
     "biên bản họp",
     "Who will take the minutes?",
     "Ai sẽ ghi biên bản họp?",
     "A1"
    ],
    [
     "conference call",
     "n",
     "ˈkɑːnfərəns kɔːl",
     "cuộc gọi hội nghị",
     "We have a conference call at ten.",
     "Chúng tôi có một cuộc gọi hội nghị lúc mười giờ.",
     "B2"
    ],
    [
     "deadline",
     "n",
     "ˈdedˌlaɪn",
     "hạn chót",
     "The deadline for the report is Monday.",
     "Hạn chót nộp báo cáo là thứ Hai.",
     "B1"
    ],
    [
     "appointment",
     "n",
     "əˈpɔɪntmənt",
     "cuộc hẹn",
     "I have an appointment with the director.",
     "Tôi có một cuộc hẹn với giám đốc.",
     "A2"
    ],
    [
     "adjourn",
     "v",
     "əˈdʒɜːrn",
     "bế mạc, tạm hoãn",
     "The chairman adjourned the meeting at noon.",
     "Chủ tọa bế mạc cuộc họp vào buổi trưa.",
     "B2"
    ],
    [
     "presentation",
     "n",
     "ˌprezənˈteɪʃən",
     "bài thuyết trình",
     "She gave a presentation on quarterly sales.",
     "Cô ấy trình bày về doanh số theo quý.",
     "B1"
    ],
    [
     "brainstorm",
     "v",
     "ˈbreɪnˌstɔːrm",
     "động não",
     "Let's brainstorm ideas for the campaign.",
     "Hãy cùng động não ý tưởng cho chiến dịch.",
     "A2"
    ],
    [
     "availability",
     "n",
     "əˌveɪləˈbɪləti",
     "thời gian rảnh, sự sẵn có",
     "Please check your availability for Tuesday.",
     "Vui lòng kiểm tra lịch rảnh của bạn vào thứ Ba.",
     "B2"
    ]
   ]
  },
  {
   "icon": "📢",
   "vi": "Tiếp thị và quảng cáo",
   "en": "Marketing and Advertising",
   "words": [
    [
     "campaign",
     "n",
     "kæmˈpeɪn",
     "chiến dịch",
     "The advertising campaign starts next month.",
     "Chiến dịch quảng cáo bắt đầu vào tháng sau.",
     "B2"
    ],
    [
     "target audience",
     "n",
     "ˈtɑːrɡət ˈɑːdiəns",
     "đối tượng mục tiêu",
     "We must identify our target audience.",
     "Chúng ta phải xác định đối tượng mục tiêu.",
     "A2"
    ],
    [
     "brand",
     "n",
     "brænd",
     "thương hiệu",
     "The brand is popular among young people.",
     "Thương hiệu này phổ biến với giới trẻ.",
     "A2"
    ],
    [
     "promotion",
     "n",
     "prəˈmoʊʃən",
     "chương trình khuyến mãi",
     "A special promotion runs until May.",
     "Một chương trình khuyến mãi đặc biệt kéo dài đến tháng Năm.",
     "B1"
    ],
    [
     "survey",
     "n",
     "sərˈveɪ",
     "khảo sát",
     "We conducted a customer survey.",
     "Chúng tôi đã thực hiện một khảo sát khách hàng.",
     "A1"
    ],
    [
     "market share",
     "n",
     "ˈmɑːrkət ʃer",
     "thị phần",
     "Our market share grew by five percent.",
     "Thị phần của chúng tôi tăng năm phần trăm.",
     "A2"
    ],
    [
     "slogan",
     "n",
     "ˈsloʊɡən",
     "khẩu hiệu",
     "The slogan is short and memorable.",
     "Khẩu hiệu ngắn gọn và dễ nhớ.",
     "B1"
    ],
    [
     "launch",
     "v",
     "lɔːntʃ",
     "ra mắt",
     "The company will launch a new product.",
     "Công ty sẽ ra mắt một sản phẩm mới.",
     "B1"
    ],
    [
     "competitor",
     "n",
     "kəmˈpetətər",
     "đối thủ cạnh tranh",
     "Our competitors lowered their prices.",
     "Các đối thủ cạnh tranh hạ giá.",
     "B1"
    ],
    [
     "endorse",
     "v",
     "enˈdɔːrs",
     "bảo chứng",
     "A famous athlete endorsed the shoes.",
     "Một vận động viên nổi tiếng đã bảo chứng cho đôi giày.",
     "B2"
    ],
    [
     "billboard",
     "n",
     "ˈbɪlˌbɔːrd",
     "biển quảng cáo lớn",
     "A billboard stands along the highway.",
     "Một biển quảng cáo lớn nằm dọc đường cao tốc.",
     "B2"
    ],
    [
     "demographic",
     "n",
     "ˌdeməˈɡræfɪk",
     "nhóm nhân khẩu học",
     "The ad targets a young demographic.",
     "Quảng cáo nhắm đến nhóm nhân khẩu học trẻ.",
     "B2"
    ]
   ]
  },
  {
   "icon": "💰",
   "vi": "Tài chính và kế toán",
   "en": "Finance and Accounting",
   "words": [
    [
     "budget",
     "n",
     "ˈbʌdʒɪt",
     "ngân sách",
     "The department exceeded its budget.",
     "Phòng ban đã vượt ngân sách.",
     "A2"
    ],
    [
     "revenue",
     "n",
     "ˈrevəˌnuː",
     "doanh thu",
     "Annual revenue rose to two million dollars.",
     "Doanh thu hằng năm tăng lên hai triệu đô la.",
     "B2"
    ],
    [
     "expense",
     "n",
     "ɪkˈspens",
     "chi phí",
     "Travel expenses will be reimbursed.",
     "Chi phí đi lại sẽ được hoàn lại.",
     "B1"
    ],
    [
     "invoice",
     "n",
     "ˈɪnvɔɪs",
     "hóa đơn",
     "Please send the invoice by email.",
     "Vui lòng gửi hóa đơn qua email.",
     "B2"
    ],
    [
     "receipt",
     "n",
     "rɪˈsiːt",
     "biên lai",
     "Keep your receipt for the refund.",
     "Hãy giữ biên lai để được hoàn tiền.",
     "A2"
    ],
    [
     "profit",
     "n",
     "ˈprɑːfət",
     "lợi nhuận",
     "The firm made a healthy profit.",
     "Công ty đạt lợi nhuận tốt.",
     "B2"
    ],
    [
     "audit",
     "n",
     "ˈɔːdɪt",
     "cuộc kiểm toán",
     "An external audit is scheduled for June.",
     "Một cuộc kiểm toán bên ngoài được lên lịch vào tháng Sáu.",
     "B2"
    ],
    [
     "deposit",
     "n",
     "dəˈpɑːzɪt",
     "tiền đặt cọc",
     "A deposit is required to reserve the room.",
     "Cần đặt cọc để giữ phòng.",
     "B1"
    ],
    [
     "reimburse",
     "v",
     "ˌriːɪmˈbɜːrs",
     "hoàn tiền",
     "The company will reimburse your travel costs.",
     "Công ty sẽ hoàn lại chi phí đi lại của bạn.",
     "B2"
    ],
    [
     "tax return",
     "n",
     "tæks rɪˈtɜːrn",
     "tờ khai thuế",
     "File your tax return before April.",
     "Hãy nộp tờ khai thuế trước tháng Tư.",
     "B1"
    ],
    [
     "payroll",
     "n",
     "ˈpeɪˌroʊl",
     "bảng lương",
     "Payroll is processed on the 25th.",
     "Bảng lương được xử lý vào ngày 25.",
     "B2"
    ],
    [
     "asset",
     "n",
     "ˈæˌset",
     "tài sản",
     "The company sold several assets.",
     "Công ty đã bán một số tài sản.",
     "B2"
    ]
   ]
  },
  {
   "icon": "👥",
   "vi": "Nhân sự và tuyển dụng",
   "en": "Human Resources and Hiring",
   "words": [
    [
     "applicant",
     "n",
     "ˈæplɪkənt",
     "ứng viên",
     "We received fifty applicants for the job.",
     "Chúng tôi nhận được năm mươi ứng viên cho vị trí này.",
     "B2"
    ],
    [
     "résumé",
     "n",
     "ˈrezəmeɪ",
     "sơ yếu lý lịch",
     "Please attach your résumé.",
     "Vui lòng đính kèm sơ yếu lý lịch.",
     "B2"
    ],
    [
     "qualification",
     "n",
     "ˌkwɑːləfəˈkeɪʃən",
     "trình độ chuyên môn",
     "She has excellent qualifications.",
     "Cô ấy có trình độ chuyên môn xuất sắc.",
     "B2"
    ],
    [
     "recruit",
     "v",
     "rəˈkruːt",
     "tuyển dụng",
     "The firm plans to recruit ten engineers.",
     "Công ty dự định tuyển mười kỹ sư.",
     "B2"
    ],
    [
     "vacancy",
     "n",
     "ˈveɪkənsi",
     "vị trí trống",
     "There is a vacancy in the sales team.",
     "Có một vị trí trống ở nhóm bán hàng.",
     "B1"
    ],
    [
     "probation",
     "n",
     "proʊˈbeɪʃən",
     "thời gian thử việc",
     "New staff serve a three-month probation.",
     "Nhân viên mới có ba tháng thử việc.",
     "B2"
    ],
    [
     "resign",
     "v",
     "rɪˈzaɪn",
     "từ chức",
     "The manager resigned unexpectedly.",
     "Quản lý từ chức đột ngột.",
     "B2"
    ],
    [
     "retire",
     "v",
     "rɪˈtaɪr",
     "nghỉ hưu",
     "Mr. Kim will retire next spring.",
     "Ông Kim sẽ nghỉ hưu vào mùa xuân tới.",
     "A2"
    ],
    [
     "orientation",
     "n",
     "ˌɔːrienˈteɪʃən",
     "buổi định hướng nhân viên mới",
     "New hires attend an orientation session.",
     "Nhân viên mới tham dự buổi định hướng.",
     "B2"
    ],
    [
     "personnel",
     "n",
     "ˌpɜːrsəˈnel",
     "nhân sự",
     "Personnel changes were announced today.",
     "Thay đổi nhân sự được thông báo hôm nay.",
     "B2"
    ],
    [
     "performance review",
     "n",
     "pərˈfɔːrməns ˌriːˈvjuː",
     "đánh giá hiệu suất",
     "Performance reviews take place every year.",
     "Đánh giá hiệu suất diễn ra hằng năm.",
     "A2"
    ]
   ]
  },
  {
   "icon": "📑",
   "vi": "Hợp đồng và pháp lý",
   "en": "Contracts and Legal",
   "words": [
    [
     "contract",
     "n",
     "ˈkɑːnˌtrækt",
     "hợp đồng",
     "Both parties signed the contract.",
     "Hai bên đã ký hợp đồng.",
     "B2"
    ],
    [
     "agreement",
     "n",
     "əˈɡriːmənt",
     "thỏa thuận",
     "The agreement expires in December.",
     "Thỏa thuận hết hạn vào tháng Mười Hai.",
     "B1"
    ],
    [
     "terms and conditions",
     "n",
     "tɜːrmz ənd kənˈdɪʃənz",
     "điều khoản và điều kiện",
     "Read the terms and conditions carefully.",
     "Hãy đọc kỹ điều khoản và điều kiện.",
     "B1"
    ],
    [
     "clause",
     "n",
     "klɔːz",
     "điều khoản",
     "Clause five covers late payments.",
     "Điều khoản năm nói về thanh toán chậm.",
     "B2"
    ],
    [
     "comply with",
     "phr",
     "kəmˈplaɪ wɪð",
     "tuân thủ",
     "All staff must comply with safety rules.",
     "Mọi nhân viên phải tuân thủ quy tắc an toàn.",
     "B2"
    ],
    [
     "liability",
     "n",
     "ˌlaɪəˈbɪlɪti",
     "trách nhiệm pháp lý",
     "The company accepts no liability for loss.",
     "Công ty không chịu trách nhiệm cho mất mát.",
     "B2"
    ],
    [
     "warranty",
     "n",
     "ˈwɔːrənti",
     "bảo hành",
     "The laptop comes with a two-year warranty.",
     "Máy tính xách tay có bảo hành hai năm.",
     "B1"
    ],
    [
     "license",
     "n",
     "ˈlaɪsəns",
     "giấy phép",
     "You need a license to operate the machine.",
     "Bạn cần giấy phép để vận hành máy.",
     "A2"
    ],
    [
     "renew",
     "v",
     "rɪˈnuː",
     "gia hạn",
     "Please renew your membership by Friday.",
     "Vui lòng gia hạn tư cách thành viên trước thứ Sáu.",
     "B1"
    ],
    [
     "regulation",
     "n",
     "ˌreɡjəˈleɪʃən",
     "quy định",
     "New regulations take effect in January.",
     "Quy định mới có hiệu lực vào tháng Một.",
     "B1"
    ],
    [
     "confidential",
     "adj",
     "ˌkɑːnfəˈdenʃəl",
     "bảo mật",
     "This document is strictly confidential.",
     "Tài liệu này hoàn toàn bảo mật.",
     "B2"
    ],
    [
     "amend",
     "v",
     "əˈmend",
     "sửa đổi",
     "The contract was amended last week.",
     "Hợp đồng đã được sửa đổi tuần trước.",
     "B2"
    ]
   ]
  },
  {
   "icon": "🛒",
   "vi": "Mua hàng và đặt hàng",
   "en": "Purchasing and Orders",
   "words": [
    [
     "supplier",
     "n",
     "səˈplaɪər",
     "nhà cung cấp",
     "We changed our supplier to cut costs.",
     "Chúng tôi đổi nhà cung cấp để giảm chi phí.",
     "B2"
    ],
    [
     "order",
     "n",
     "ˈɔːrdər",
     "đơn hàng",
     "Your order has been shipped.",
     "Đơn hàng của bạn đã được gửi đi.",
     "A1"
    ],
    [
     "quote",
     "n",
     "kwoʊt",
     "bảng báo giá",
     "Please send us a quote for 100 units.",
     "Vui lòng gửi báo giá cho 100 sản phẩm.",
     "B2"
    ],
    [
     "bulk",
     "adj",
     "bʌlk",
     "số lượng lớn",
     "Bulk orders receive a discount.",
     "Đơn hàng số lượng lớn được giảm giá.",
     "B2"
    ],
    [
     "in stock",
     "phr",
     "ɪn stɑːk",
     "còn hàng",
     "The item is currently in stock.",
     "Mặt hàng hiện còn hàng.",
     "B2"
    ],
    [
     "out of stock",
     "phr",
     "aʊt ʌv stɑːk",
     "hết hàng",
     "That model is out of stock.",
     "Mẫu đó đã hết hàng.",
     "B2"
    ],
    [
     "back-order",
     "n",
     "bæk ˈɔːrdər",
     "đơn đặt trước khi hết hàng",
     "The product is on back-order.",
     "Sản phẩm đang chờ hàng về.",
     "A1"
    ],
    [
     "refund",
     "n",
     "rɪˈfʌnd",
     "hoàn tiền",
     "You may request a full refund.",
     "Bạn có thể yêu cầu hoàn tiền đầy đủ.",
     "B1"
    ],
    [
     "merchandise",
     "n",
     "ˈmɜːrtʃənˌdaɪz",
     "hàng hóa",
     "The merchandise arrived damaged.",
     "Hàng hóa đến nơi bị hư hỏng.",
     "B2"
    ],
    [
     "delivery",
     "n",
     "dɪˈlɪvəri",
     "việc giao hàng",
     "Delivery takes three to five days.",
     "Giao hàng mất ba đến năm ngày.",
     "B1"
    ],
    [
     "purchase",
     "v",
     "ˈpɜːrtʃəs",
     "mua",
     "Customers may purchase items online.",
     "Khách hàng có thể mua hàng trực tuyến.",
     "B2"
    ],
    [
     "inventory",
     "n",
     "ˌɪnvənˈtɔːri",
     "hàng tồn kho",
     "We check the inventory every week.",
     "Chúng tôi kiểm tra hàng tồn kho mỗi tuần.",
     "B2"
    ]
   ]
  },
  {
   "icon": "🚚",
   "vi": "Vận chuyển và hậu cần",
   "en": "Shipping and Logistics",
   "words": [
    [
     "shipment",
     "n",
     "ˈʃɪpmənt",
     "lô hàng",
     "The shipment will arrive on Thursday.",
     "Lô hàng sẽ đến vào thứ Năm.",
     "B2"
    ],
    [
     "freight",
     "n",
     "freɪt",
     "hàng vận chuyển",
     "Freight costs have increased.",
     "Chi phí vận chuyển hàng tăng lên.",
     "B2"
    ],
    [
     "warehouse",
     "n",
     "ˈwerˌhaʊs",
     "nhà kho",
     "The goods are stored in a warehouse.",
     "Hàng hóa được lưu trữ trong nhà kho.",
     "B2"
    ],
    [
     "courier",
     "n",
     "ˈkɜːriər",
     "dịch vụ chuyển phát",
     "We sent the documents by courier.",
     "Chúng tôi gửi tài liệu bằng chuyển phát.",
     "B2"
    ],
    [
     "tracking number",
     "n",
     "ˈtrækɪŋ ˈnʌmbər",
     "mã theo dõi",
     "Enter the tracking number online.",
     "Hãy nhập mã theo dõi trên mạng.",
     "B2"
    ],
    [
     "customs",
     "n",
     "ˈkʌstəmz",
     "hải quan",
     "The package is held at customs.",
     "Kiện hàng bị giữ ở hải quan.",
     "B1"
    ],
    [
     "handle with care",
     "phr",
     "ˈhændəl wɪð ker",
     "xin nhẹ tay",
     "Mark the box \"handle with care.\"",
     "Hãy ghi lên hộp \"xin nhẹ tay\".",
     "A2"
    ],
    [
     "dispatch",
     "v",
     "dɪˈspætʃ",
     "gửi đi",
     "Orders are dispatched within 24 hours.",
     "Đơn hàng được gửi đi trong vòng 24 giờ.",
     "B2"
    ],
    [
     "carrier",
     "n",
     "ˈkæriər",
     "hãng vận chuyển",
     "The carrier lost our package.",
     "Hãng vận chuyển làm mất kiện hàng của chúng tôi.",
     "B2"
    ],
    [
     "overnight",
     "adj",
     "ˈoʊvərˈnaɪt",
     "qua đêm, hỏa tốc",
     "We chose overnight shipping.",
     "Chúng tôi chọn giao hàng hỏa tốc.",
     "B1"
    ],
    [
     "loading dock",
     "n",
     "ˈloʊdɪŋ dɑːk",
     "khu bốc dỡ hàng",
     "Trucks wait at the loading dock.",
     "Xe tải chờ ở khu bốc dỡ hàng.",
     "B2"
    ],
    [
     "packaging",
     "n",
     "ˈpækɪdʒɪŋ",
     "bao bì",
     "Eco-friendly packaging is now standard.",
     "Bao bì thân thiện môi trường hiện là tiêu chuẩn.",
     "B2"
    ]
   ]
  },
  {
   "icon": "🏭",
   "vi": "Sản xuất và chất lượng",
   "en": "Manufacturing and Quality",
   "words": [
    [
     "manufacture",
     "v",
     "ˌmænjəˈfæktʃər",
     "sản xuất",
     "The company manufactures car parts.",
     "Công ty sản xuất phụ tùng ô tô.",
     "B2"
    ],
    [
     "assembly line",
     "n",
     "əˈsembli laɪn",
     "dây chuyền lắp ráp",
     "Workers on the assembly line wear helmets.",
     "Công nhân trên dây chuyền lắp ráp đội mũ bảo hộ.",
     "B2"
    ],
    [
     "defect",
     "n",
     "ˈdiːfekt",
     "lỗi sản phẩm",
     "We found a defect in the batch.",
     "Chúng tôi phát hiện lỗi trong lô hàng.",
     "B2"
    ],
    [
     "inspection",
     "n",
     "ˌɪnˈspekʃən",
     "kiểm tra",
     "A safety inspection is scheduled Friday.",
     "Đợt kiểm tra an toàn được lên lịch vào thứ Sáu.",
     "B1"
    ],
    [
     "quality control",
     "n",
     "ˈkwɑːləti kənˈtroʊl",
     "kiểm soát chất lượng",
     "Quality control checks every product.",
     "Bộ phận kiểm soát chất lượng kiểm tra mọi sản phẩm.",
     "A2"
    ],
    [
     "output",
     "n",
     "ˈaʊtˌpʊt",
     "sản lượng",
     "Factory output increased by ten percent.",
     "Sản lượng nhà máy tăng mười phần trăm.",
     "B2"
    ],
    [
     "raw material",
     "n",
     "rɑː məˈtɪriəl",
     "nguyên liệu thô",
     "Raw material prices are rising.",
     "Giá nguyên liệu thô đang tăng.",
     "A2"
    ],
    [
     "machinery",
     "n",
     "məˈʃiːnəri",
     "máy móc",
     "The plant invested in new machinery.",
     "Nhà máy đầu tư vào máy móc mới.",
     "B2"
    ],
    [
     "production",
     "n",
     "prəˈdʌkʃən",
     "sự sản xuất",
     "Production was halted for repairs.",
     "Sản xuất bị dừng để sửa chữa.",
     "A2"
    ],
    [
     "prototype",
     "n",
     "ˈproʊtəˌtaɪp",
     "bản mẫu",
     "Engineers tested the prototype.",
     "Các kỹ sư đã thử nghiệm bản mẫu.",
     "B2"
    ],
    [
     "specification",
     "n",
     "ˌspesɪfɪˈkeɪʃən",
     "thông số kỹ thuật",
     "The product meets all specifications.",
     "Sản phẩm đáp ứng mọi thông số kỹ thuật.",
     "B2"
    ],
    [
     "recall",
     "v",
     "ˈriːˌkɔːl",
     "thu hồi (sản phẩm)",
     "The firm recalled thousands of toasters.",
     "Hãng thu hồi hàng nghìn chiếc máy nướng bánh.",
     "B1"
    ]
   ]
  },
  {
   "icon": "✈️",
   "vi": "Công tác và đi lại",
   "en": "Business Travel",
   "words": [
    [
     "itinerary",
     "n",
     "aɪˈtɪnərˌeri",
     "lịch trình chuyến đi",
     "Your itinerary is attached.",
     "Lịch trình chuyến đi của bạn được đính kèm.",
     "B2"
    ],
    [
     "boarding pass",
     "n",
     "ˈbɔːrdɪŋ pæs",
     "thẻ lên máy bay",
     "Show your boarding pass at the gate.",
     "Xuất trình thẻ lên máy bay tại cổng.",
     "B2"
    ],
    [
     "layover",
     "n",
     "ˈleɪˌoʊvər",
     "điểm dừng quá cảnh",
     "We have a two-hour layover in Tokyo.",
     "Chúng tôi có hai giờ quá cảnh ở Tokyo.",
     "B2"
    ],
    [
     "round-trip",
     "adj",
     "raʊnd trɪp",
     "khứ hồi",
     "I booked a round-trip ticket.",
     "Tôi đã đặt vé khứ hồi.",
     "A2"
    ],
    [
     "baggage claim",
     "n",
     "ˈbæɡədʒ kleɪm",
     "khu nhận hành lý",
     "Meet me at baggage claim.",
     "Hãy gặp tôi ở khu nhận hành lý.",
     "B1"
    ],
    [
     "delayed",
     "adj",
     "dɪˈleɪd",
     "bị hoãn",
     "Flight 204 has been delayed.",
     "Chuyến bay 204 bị hoãn.",
     "B2"
    ],
    [
     "destination",
     "n",
     "ˌdestəˈneɪʃən",
     "điểm đến",
     "Our next destination is Bangkok.",
     "Điểm đến tiếp theo của chúng tôi là Bangkok.",
     "B1"
    ],
    [
     "per diem",
     "n",
     "pɜːr diːm",
     "phụ cấp công tác hằng ngày",
     "Employees receive a per diem on trips.",
     "Nhân viên nhận phụ cấp hằng ngày khi đi công tác.",
     "B2"
    ],
    [
     "board",
     "v",
     "bɔːrd",
     "lên (máy bay/tàu)",
     "Passengers may now board the plane.",
     "Hành khách có thể lên máy bay.",
     "A1"
    ],
    [
     "aisle seat",
     "n",
     "aɪl siːt",
     "ghế cạnh lối đi",
     "I prefer an aisle seat.",
     "Tôi thích ghế cạnh lối đi.",
     "A2"
    ],
    [
     "transfer",
     "n",
     "trænˈsfɜːr",
     "sự chuyển tiếp",
     "A shuttle transfer is included.",
     "Đã bao gồm xe đưa đón chuyển tiếp.",
     "B1"
    ],
    [
     "conference",
     "n",
     "ˈkɑːnfərəns",
     "hội nghị",
     "She will attend a conference in Osaka.",
     "Cô ấy sẽ dự một hội nghị ở Osaka.",
     "B2"
    ]
   ]
  },
  {
   "icon": "🏨",
   "vi": "Khách sạn và ăn uống",
   "en": "Hotels and Dining",
   "words": [
    [
     "reservation",
     "n",
     "ˌrezərˈveɪʃən",
     "đặt chỗ",
     "I'd like to make a reservation for two.",
     "Tôi muốn đặt chỗ cho hai người.",
     "B1"
    ],
    [
     "check-in",
     "n",
     "tʃek ɪn",
     "thủ tục nhận phòng",
     "Check-in begins at three o'clock.",
     "Thủ tục nhận phòng bắt đầu lúc ba giờ.",
     "B1"
    ],
    [
     "amenities",
     "n",
     "əˈmenətiz",
     "tiện nghi",
     "The hotel offers modern amenities.",
     "Khách sạn cung cấp tiện nghi hiện đại.",
     "B2"
    ],
    [
     "complimentary",
     "adj",
     "ˌkɑːmpləˈmentəri",
     "miễn phí",
     "Complimentary breakfast is served daily.",
     "Bữa sáng miễn phí được phục vụ hằng ngày.",
     "B2"
    ],
    [
     "catering",
     "n",
     "ˈkeɪtərɪŋ",
     "dịch vụ tiệc",
     "The catering was arranged by the hotel.",
     "Dịch vụ tiệc do khách sạn sắp xếp.",
     "B2"
    ],
    [
     "banquet",
     "n",
     "ˈbæŋkwət",
     "tiệc lớn",
     "A banquet will follow the ceremony.",
     "Một bữa tiệc lớn sẽ diễn ra sau buổi lễ.",
     "B2"
    ],
    [
     "beverage",
     "n",
     "ˈbevərɪdʒ",
     "đồ uống",
     "Beverages are available in the lobby.",
     "Đồ uống có sẵn ở sảnh.",
     "B2"
    ],
    [
     "concierge",
     "n",
     "ˌkɑːnsiˈerʒ",
     "nhân viên hỗ trợ khách",
     "The concierge booked our tickets.",
     "Nhân viên hỗ trợ khách đã đặt vé cho chúng tôi.",
     "B2"
    ],
    [
     "suite",
     "n",
     "swiːt",
     "phòng suite",
     "We reserved a suite on the top floor.",
     "Chúng tôi đặt một phòng suite ở tầng cao nhất.",
     "B2"
    ],
    [
     "gratuity",
     "n",
     "ɡrəˈtuːɪti",
     "tiền boa",
     "A gratuity is included in the bill.",
     "Tiền boa đã được tính trong hóa đơn.",
     "B2"
    ],
    [
     "menu",
     "n",
     "ˈmenjuː",
     "thực đơn",
     "The menu changes seasonally.",
     "Thực đơn thay đổi theo mùa.",
     "A2"
    ]
   ]
  },
  {
   "icon": "🏦",
   "vi": "Ngân hàng và bảo hiểm",
   "en": "Banking and Insurance",
   "words": [
    [
     "account",
     "n",
     "əˈkaʊnt",
     "tài khoản",
     "I opened a savings account.",
     "Tôi đã mở một tài khoản tiết kiệm.",
     "A2"
    ],
    [
     "withdraw",
     "v",
     "wɪðˈdrɔː",
     "rút tiền",
     "You can withdraw cash at any ATM.",
     "Bạn có thể rút tiền mặt ở bất kỳ máy ATM nào.",
     "B2"
    ],
    [
     "balance",
     "n",
     "ˈbæləns",
     "số dư",
     "Check your account balance online.",
     "Kiểm tra số dư tài khoản trực tuyến.",
     "B1"
    ],
    [
     "loan",
     "n",
     "loʊn",
     "khoản vay",
     "The bank approved our loan.",
     "Ngân hàng đã duyệt khoản vay.",
     "B2"
    ],
    [
     "interest rate",
     "n",
     "ˈɪntrəst reɪt",
     "lãi suất",
     "Interest rates are expected to fall.",
     "Lãi suất được dự đoán sẽ giảm.",
     "A2"
    ],
    [
     "mortgage",
     "n",
     "ˈmɔːrɡədʒ",
     "thế chấp nhà",
     "They applied for a mortgage.",
     "Họ nộp đơn vay thế chấp nhà.",
     "B2"
    ],
    [
     "premium",
     "n",
     "ˈpriːmiəm",
     "phí bảo hiểm",
     "The monthly premium is fifty dollars.",
     "Phí bảo hiểm hằng tháng là năm mươi đô la.",
     "B2"
    ],
    [
     "claim",
     "n",
     "kleɪm",
     "yêu cầu bồi thường",
     "File a claim within thirty days.",
     "Hãy nộp yêu cầu bồi thường trong vòng ba mươi ngày.",
     "A2"
    ],
    [
     "coverage",
     "n",
     "ˈkʌvərədʒ",
     "phạm vi bảo hiểm",
     "The policy includes full coverage.",
     "Hợp đồng bảo hiểm gồm phạm vi bảo hiểm đầy đủ.",
     "B2"
    ],
    [
     "policyholder",
     "n",
     "ˈpɑːləsiˌhoʊldər",
     "người mua bảo hiểm",
     "Policyholders must update their address.",
     "Người mua bảo hiểm phải cập nhật địa chỉ.",
     "B2"
    ],
    [
     "transaction",
     "n",
     "trænˈzækʃən",
     "giao dịch",
     "The transaction was declined.",
     "Giao dịch bị từ chối.",
     "B2"
    ],
    [
     "statement",
     "n",
     "ˈsteɪtmənt",
     "sao kê",
     "Your monthly statement is enclosed.",
     "Sao kê hằng tháng của bạn được đính kèm.",
     "A2"
    ]
   ]
  },
  {
   "icon": "🏠",
   "vi": "Bất động sản và tiện ích",
   "en": "Real Estate and Utilities",
   "words": [
    [
     "lease",
     "n",
     "liːs",
     "hợp đồng thuê",
     "The lease runs for one year.",
     "Hợp đồng thuê kéo dài một năm.",
     "B2"
    ],
    [
     "tenant",
     "n",
     "ˈtenənt",
     "người thuê",
     "The tenant reported a leak.",
     "Người thuê báo có rò rỉ.",
     "B2"
    ],
    [
     "landlord",
     "n",
     "ˈlændˌlɔːrd",
     "chủ nhà",
     "The landlord will repair the heating.",
     "Chủ nhà sẽ sửa hệ thống sưởi.",
     "B1"
    ],
    [
     "rent",
     "n",
     "rent",
     "tiền thuê",
     "Rent is due on the first of the month.",
     "Tiền thuê đến hạn vào ngày đầu tháng.",
     "A2"
    ],
    [
     "utilities",
     "n",
     "juːˈtɪlətiz",
     "dịch vụ tiện ích (điện, nước)",
     "Utilities are included in the rent.",
     "Tiền điện nước đã bao gồm trong tiền thuê.",
     "B2"
    ],
    [
     "renovation",
     "n",
     "ˌrenəˈveɪʃən",
     "việc cải tạo",
     "The office is under renovation.",
     "Văn phòng đang được cải tạo.",
     "B2"
    ],
    [
     "premises",
     "n",
     "ˈpreməsəz",
     "khuôn viên, cơ sở",
     "Smoking is banned on the premises.",
     "Hút thuốc bị cấm trong khuôn viên.",
     "B2"
    ],
    [
     "maintenance",
     "n",
     "ˈmeɪntənəns",
     "bảo trì",
     "Maintenance staff fixed the elevator.",
     "Nhân viên bảo trì đã sửa thang máy.",
     "B1"
    ],
    [
     "property",
     "n",
     "ˈprɑːpərti",
     "bất động sản",
     "The property is located downtown.",
     "Bất động sản nằm ở trung tâm thành phố.",
     "B1"
    ],
    [
     "vacate",
     "v",
     "ˈveɪkeɪt",
     "dọn ra khỏi",
     "Tenants must vacate by Friday.",
     "Người thuê phải dọn ra khỏi trước thứ Sáu.",
     "B2"
    ],
    [
     "furnished",
     "adj",
     "ˈfɜːrnɪʃt",
     "có sẵn nội thất",
     "The apartment is fully furnished.",
     "Căn hộ có đầy đủ nội thất.",
     "B2"
    ],
    [
     "relocate",
     "v",
     "ˌriːˈloʊkeɪt",
     "chuyển địa điểm",
     "The firm will relocate to a bigger office.",
     "Công ty sẽ chuyển đến văn phòng lớn hơn.",
     "B2"
    ]
   ]
  },
  {
   "icon": "💻",
   "vi": "Thiết bị và công nghệ văn phòng",
   "en": "Office Technology",
   "words": [
    [
     "software",
     "n",
     "ˈsɔːfˌtwer",
     "phần mềm",
     "The software needs to be updated.",
     "Phần mềm cần được cập nhật.",
     "A2"
    ],
    [
     "upgrade",
     "v",
     "əpˈɡreɪd",
     "nâng cấp",
     "We plan to upgrade our computers.",
     "Chúng tôi định nâng cấp máy tính.",
     "B2"
    ],
    [
     "network",
     "n",
     "ˈneˌtwɜːrk",
     "mạng",
     "The network is down again.",
     "Mạng lại bị sập.",
     "B1"
    ],
    [
     "password",
     "n",
     "ˈpæˌswɜːrd",
     "mật khẩu",
     "Change your password every month.",
     "Hãy đổi mật khẩu mỗi tháng.",
     "B1"
    ],
    [
     "attachment",
     "n",
     "əˈtætʃmənt",
     "tệp đính kèm",
     "Open the attachment for details.",
     "Mở tệp đính kèm để xem chi tiết.",
     "B1"
    ],
    [
     "projector",
     "n",
     "prəˈdʒektər",
     "máy chiếu",
     "The projector is in the conference room.",
     "Máy chiếu ở trong phòng họp.",
     "B2"
    ],
    [
     "printer",
     "n",
     "ˈprɪntər",
     "máy in",
     "The printer is jammed again.",
     "Máy in lại bị kẹt giấy.",
     "A2"
    ],
    [
     "install",
     "v",
     "ˌɪnˈstɔːl",
     "cài đặt",
     "IT will install the program tomorrow.",
     "Bộ phận IT sẽ cài chương trình vào ngày mai.",
     "B1"
    ],
    [
     "backup",
     "n",
     "ˈbæˌkʌp",
     "bản sao lưu",
     "Always keep a backup of your files.",
     "Luôn giữ một bản sao lưu tệp của bạn.",
     "B2"
    ],
    [
     "malfunction",
     "v",
     "mælˈfʌŋkʃən",
     "trục trặc",
     "The scanner malfunctioned this morning.",
     "Máy quét bị trục trặc sáng nay.",
     "B2"
    ],
    [
     "compatible",
     "adj",
     "kəmˈpætəbəl",
     "tương thích",
     "The device is compatible with all systems.",
     "Thiết bị tương thích với mọi hệ thống.",
     "B2"
    ],
    [
     "technician",
     "n",
     "tekˈnɪʃən",
     "kỹ thuật viên",
     "A technician will arrive shortly.",
     "Một kỹ thuật viên sẽ đến ngay.",
     "B2"
    ]
   ]
  },
  {
   "icon": "🤝",
   "vi": "Chăm sóc khách hàng",
   "en": "Customer Service",
   "words": [
    [
     "complaint",
     "n",
     "kəmˈpleɪnt",
     "khiếu nại",
     "We received a complaint about the delay.",
     "Chúng tôi nhận được khiếu nại về sự chậm trễ.",
     "A2"
    ],
    [
     "satisfaction",
     "n",
     "ˌsætəˈsfækʃən",
     "sự hài lòng",
     "Customer satisfaction is our priority.",
     "Sự hài lòng của khách hàng là ưu tiên của chúng tôi.",
     "B1"
    ],
    [
     "apologize",
     "v",
     "əˈpɑːləˌdʒaɪz",
     "xin lỗi",
     "We apologize for the inconvenience.",
     "Chúng tôi xin lỗi vì sự bất tiện.",
     "A2"
    ],
    [
     "inquiry",
     "n",
     "ˌɪnˈkwaɪˌriː",
     "yêu cầu tìm hiểu",
     "Thank you for your inquiry.",
     "Cảm ơn yêu cầu tìm hiểu của bạn.",
     "B1"
    ],
    [
     "assistance",
     "n",
     "əˈsɪstəns",
     "sự hỗ trợ",
     "Do you need any assistance?",
     "Bạn có cần hỗ trợ gì không?",
     "B1"
    ],
    [
     "feedback",
     "n",
     "ˈfiːdˌbæk",
     "phản hồi",
     "We welcome your feedback.",
     "Chúng tôi hoan nghênh phản hồi của bạn.",
     "B2"
    ],
    [
     "exchange",
     "v",
     "ɪksˈtʃeɪndʒ",
     "đổi hàng",
     "You may exchange the item within a week.",
     "Bạn có thể đổi hàng trong vòng một tuần.",
     "A2"
    ],
    [
     "loyal",
     "adj",
     "ˈlɔɪəl",
     "trung thành",
     "Loyal customers receive a discount.",
     "Khách hàng trung thành được giảm giá.",
     "B1"
    ],
    [
     "follow up",
     "phr",
     "ˈfɑːloʊ ʌp",
     "liên hệ lại",
     "I'll follow up with you tomorrow.",
     "Tôi sẽ liên hệ lại với bạn vào ngày mai.",
     "A2"
    ],
    [
     "representative",
     "n",
     "ˌreprəˈzentətɪv",
     "nhân viên đại diện",
     "A representative will call you back.",
     "Một nhân viên đại diện sẽ gọi lại cho bạn.",
     "B1"
    ],
    [
     "hotline",
     "n",
     "ˈhɑːtˌlaɪn",
     "đường dây nóng",
     "Call our hotline for immediate help.",
     "Gọi đường dây nóng để được giúp ngay.",
     "B2"
    ],
    [
     "resolve",
     "v",
     "riˈzɑːlv",
     "giải quyết",
     "We resolved the issue within an hour.",
     "Chúng tôi giải quyết sự cố trong vòng một giờ.",
     "B1"
    ]
   ]
  },
  {
   "icon": "🎪",
   "vi": "Sự kiện và triển lãm",
   "en": "Events and Exhibitions",
   "words": [
    [
     "exhibition",
     "n",
     "ˌeksəˈbɪʃən",
     "triển lãm",
     "The trade exhibition opens on Monday.",
     "Triển lãm thương mại khai mạc vào thứ Hai.",
     "A2"
    ],
    [
     "booth",
     "n",
     "buːθ",
     "gian hàng",
     "Visit our booth at the fair.",
     "Hãy ghé gian hàng của chúng tôi tại hội chợ.",
     "B2"
    ],
    [
     "keynote",
     "n",
     "ˈkiːˌnoʊt",
     "bài phát biểu chính",
     "The CEO will deliver the keynote.",
     "Tổng giám đốc sẽ trình bày bài phát biểu chính.",
     "B2"
    ],
    [
     "registration",
     "n",
     "ˌredʒɪˈstreɪʃən",
     "đăng ký",
     "Registration closes on May 5.",
     "Đăng ký kết thúc vào ngày 5 tháng Năm.",
     "B1"
    ],
    [
     "venue",
     "n",
     "ˈvenjuː",
     "địa điểm tổ chức",
     "The venue can hold 500 people.",
     "Địa điểm tổ chức chứa được 500 người.",
     "B2"
    ],
    [
     "sponsor",
     "n",
     "ˈspɑːnsər",
     "nhà tài trợ",
     "A local bank is the main sponsor.",
     "Một ngân hàng địa phương là nhà tài trợ chính.",
     "B1"
    ],
    [
     "ceremony",
     "n",
     "ˈserəˌmoʊni",
     "buổi lễ",
     "The award ceremony starts at seven.",
     "Buổi lễ trao giải bắt đầu lúc bảy giờ.",
     "B1"
    ],
    [
     "workshop",
     "n",
     "ˈwɜːrkˌʃɑːp",
     "buổi hội thảo thực hành",
     "A workshop on leadership will be held.",
     "Một buổi hội thảo thực hành về lãnh đạo sẽ được tổ chức.",
     "B1"
    ],
    [
     "seminar",
     "n",
     "ˈseməˌnɑːr",
     "hội thảo chuyên đề",
     "Employees may attend the seminar for free.",
     "Nhân viên có thể dự hội thảo miễn phí.",
     "B2"
    ],
    [
     "lecturer",
     "n",
     "ˈlektʃərər",
     "người thuyết trình",
     "The guest lecturer is an economist.",
     "Diễn giả khách mời là một nhà kinh tế.",
     "B2"
    ],
    [
     "RSVP",
     "v",
     "ˈɑːˈresˈviːˈpiː",
     "xác nhận tham dự",
     "Please RSVP by Friday.",
     "Vui lòng xác nhận tham dự trước thứ Sáu.",
     "B2"
    ],
    [
     "banquet hall",
     "n",
     "ˈbæŋkwət hɔːl",
     "sảnh tiệc",
     "The banquet hall was beautifully decorated.",
     "Sảnh tiệc được trang trí đẹp mắt.",
     "B2"
    ]
   ]
  },
  {
   "icon": "🩺",
   "vi": "Y tế và an toàn",
   "en": "Health and Safety",
   "words": [
    [
     "prescription",
     "n",
     "prəˈskrɪpʃən",
     "đơn thuốc",
     "Take the prescription to the pharmacy.",
     "Hãy mang đơn thuốc đến hiệu thuốc.",
     "B1"
    ],
    [
     "checkup",
     "n",
     "ˈtʃeˌkʌp",
     "khám sức khỏe",
     "Annual checkups are free for employees.",
     "Khám sức khỏe hằng năm miễn phí cho nhân viên.",
     "B2"
    ],
    [
     "clinic",
     "n",
     "ˈklɪnɪk",
     "phòng khám",
     "The clinic opens at eight.",
     "Phòng khám mở cửa lúc tám giờ.",
     "B1"
    ],
    [
     "pharmacy",
     "n",
     "ˈfɑːrməsi",
     "hiệu thuốc",
     "The pharmacy is next to the bank.",
     "Hiệu thuốc nằm cạnh ngân hàng.",
     "B1"
    ],
    [
     "emergency exit",
     "n",
     "ɪˈmɜːrdʒənsi ˈeɡzɪt",
     "lối thoát hiểm",
     "Do not block the emergency exit.",
     "Không được chắn lối thoát hiểm.",
     "B1"
    ],
    [
     "fire drill",
     "n",
     "ˈfaɪər drɪl",
     "diễn tập chữa cháy",
     "A fire drill is planned for Thursday.",
     "Một buổi diễn tập chữa cháy được lên kế hoạch vào thứ Năm.",
     "A2"
    ],
    [
     "hazard",
     "n",
     "ˈhæzərd",
     "mối nguy hiểm",
     "Wet floors are a safety hazard.",
     "Sàn ướt là mối nguy hiểm về an toàn.",
     "B1"
    ],
    [
     "protective gear",
     "n",
     "prəˈtektɪv ɡɪr",
     "đồ bảo hộ",
     "Wear protective gear on site.",
     "Hãy mặc đồ bảo hộ tại công trường.",
     "B2"
    ],
    [
     "first aid",
     "n",
     "fɜːrst eɪd",
     "sơ cứu",
     "The first aid kit is in the hallway.",
     "Hộp sơ cứu ở hành lang.",
     "B1"
    ],
    [
     "ergonomic",
     "adj",
     "ˌɜːrɡəˈnɑːmɪk",
     "thiết kế công thái học",
     "We bought ergonomic chairs.",
     "Chúng tôi mua ghế công thái học.",
     "B2"
    ],
    [
     "sick leave",
     "n",
     "sɪk liːv",
     "nghỉ ốm",
     "Employees get ten days of sick leave.",
     "Nhân viên được mười ngày nghỉ ốm.",
     "A1"
    ],
    [
     "wellness",
     "n",
     "ˈwelnəs",
     "sức khỏe toàn diện",
     "The company runs a wellness program.",
     "Công ty tổ chức chương trình sức khỏe toàn diện.",
     "B2"
    ]
   ]
  },
  {
   "icon": "📬",
   "vi": "Thư từ và giao tiếp",
   "en": "Correspondence",
   "words": [
    [
     "enclosed",
     "adj",
     "enˈkloʊzd",
     "đính kèm",
     "Please find the enclosed brochure.",
     "Vui lòng xem tờ giới thiệu đính kèm.",
     "B2"
    ],
    [
     "regarding",
     "prep",
     "rɪˈɡɑːrdɪŋ",
     "liên quan đến",
     "I am writing regarding your recent order.",
     "Tôi viết thư liên quan đến đơn hàng gần đây của bạn.",
     "B1"
    ],
    [
     "sincerely",
     "adv",
     "sɪnˈsɪrli",
     "trân trọng",
     "Sincerely, Anna Lee",
     "Trân trọng, Anna Lee",
     "B2"
    ],
    [
     "confirm",
     "v",
     "kənˈfɜːrm",
     "xác nhận",
     "Please confirm your attendance.",
     "Vui lòng xác nhận sự tham dự của bạn.",
     "B1"
    ],
    [
     "recipient",
     "n",
     "rəˈsɪpiənt",
     "người nhận",
     "The recipient must sign for the package.",
     "Người nhận phải ký nhận kiện hàng.",
     "B2"
    ],
    [
     "address",
     "v",
     "ˈæˌdres",
     "gửi đến, xử lý",
     "The letter is addressed to the manager.",
     "Bức thư được gửi đến người quản lý.",
     "A1"
    ],
    [
     "courtesy",
     "n",
     "ˈkɜːrtəsi",
     "sự lịch sự",
     "As a courtesy, we will notify you.",
     "Vì phép lịch sự, chúng tôi sẽ thông báo cho bạn.",
     "B2"
    ],
    [
     "forward",
     "v",
     "ˈfɔːrwərd",
     "chuyển tiếp",
     "Please forward this email to the team.",
     "Vui lòng chuyển tiếp email này cho nhóm.",
     "A2"
    ],
    [
     "inform",
     "v",
     "ˌɪnˈfɔːrm",
     "thông báo",
     "We regret to inform you of a delay.",
     "Chúng tôi rất tiếc phải thông báo có sự chậm trễ.",
     "B1"
    ],
    [
     "notify",
     "v",
     "ˈnoʊtəˌfaɪ",
     "báo cho biết",
     "Please notify us of any changes.",
     "Vui lòng báo cho chúng tôi biết mọi thay đổi.",
     "B2"
    ],
    [
     "in response to",
     "phr",
     "ɪn rɪˈspɑːns tuː",
     "để đáp lại",
     "In response to your request, we have attached a quote.",
     "Để đáp lại yêu cầu của bạn, chúng tôi đính kèm báo giá.",
     "A2"
    ],
    [
     "at your earliest convenience",
     "phr",
     "æt jɔːr ˈɜːrliəst kənˈviːnjəns",
     "khi nào tiện nhất",
     "Please reply at your earliest convenience.",
     "Vui lòng trả lời khi nào tiện nhất.",
     "B2"
    ]
   ]
  },
  {
   "icon": "📊",
   "vi": "Quản lý và dự án",
   "en": "Management and Projects",
   "words": [
    [
     "manager",
     "n",
     "ˈmænədʒər",
     "quản lý",
     "The manager approved the proposal.",
     "Quản lý đã duyệt đề xuất.",
     "A2"
    ],
    [
     "proposal",
     "n",
     "prəˈpoʊzəl",
     "bản đề xuất",
     "Submit your proposal by Friday.",
     "Nộp bản đề xuất của bạn trước thứ Sáu.",
     "B1"
    ],
    [
     "objective",
     "n",
     "əbˈdʒektɪv",
     "mục tiêu",
     "Our main objective is to cut costs.",
     "Mục tiêu chính của chúng tôi là cắt giảm chi phí.",
     "B1"
    ],
    [
     "strategy",
     "n",
     "ˈstrætədʒi",
     "chiến lược",
     "The new strategy focuses on online sales.",
     "Chiến lược mới tập trung vào bán hàng trực tuyến.",
     "A2"
    ],
    [
     "delegate",
     "v",
     "ˈdeləˌɡeɪt",
     "giao việc",
     "A good leader knows how to delegate.",
     "Người lãnh đạo giỏi biết cách giao việc.",
     "B2"
    ],
    [
     "oversee",
     "v",
     "ˈoʊvərˌsiː",
     "giám sát",
     "She oversees the entire project.",
     "Cô ấy giám sát toàn bộ dự án.",
     "B2"
    ],
    [
     "milestone",
     "n",
     "ˈmaɪlˌstoʊn",
     "cột mốc",
     "The team reached an important milestone.",
     "Nhóm đạt một cột mốc quan trọng.",
     "B2"
    ],
    [
     "implement",
     "v",
     "ˈɪmpləmənt",
     "thực hiện",
     "We will implement the plan in June.",
     "Chúng tôi sẽ thực hiện kế hoạch vào tháng Sáu.",
     "B2"
    ],
    [
     "efficiency",
     "n",
     "ɪˈfɪʃənsi",
     "hiệu suất",
     "The new system improves efficiency.",
     "Hệ thống mới cải thiện hiệu suất.",
     "B1"
    ],
    [
     "consult",
     "v",
     "kənˈsʌlt",
     "tham khảo ý kiến",
     "Consult your manager before signing.",
     "Hãy tham khảo ý kiến quản lý trước khi ký.",
     "B2"
    ],
    [
     "assign",
     "v",
     "əˈsaɪn",
     "phân công",
     "Tasks were assigned to each member.",
     "Nhiệm vụ được phân công cho từng thành viên.",
     "B1"
    ],
    [
     "timeline",
     "n",
     "ˈtaɪmlaɪn",
     "tiến trình thời gian",
     "The project timeline is very tight.",
     "Tiến trình thời gian của dự án rất sát.",
     "B2"
    ]
   ]
  },
  {
   "icon": "🏬",
   "vi": "Bán lẻ",
   "en": "Retail",
   "words": [
    [
     "retailer",
     "n",
     "ˈriːˌteɪlər",
     "nhà bán lẻ",
     "The retailer opened three new stores.",
     "Nhà bán lẻ mở ba cửa hàng mới.",
     "B2"
    ],
    [
     "clearance",
     "n",
     "ˈklɪrəns",
     "xả hàng",
     "Winter coats are on clearance.",
     "Áo khoác mùa đông đang xả hàng.",
     "B2"
    ],
    [
     "cashier",
     "n",
     "kæˈʃɪr",
     "thu ngân",
     "The cashier scanned each item.",
     "Thu ngân quét từng món hàng.",
     "B2"
    ],
    [
     "checkout",
     "n",
     "ˈtʃeˌkaʊt",
     "quầy thanh toán",
     "Please proceed to checkout.",
     "Vui lòng tiến đến quầy thanh toán.",
     "B1"
    ],
    [
     "discount",
     "n",
     "dɪˈskaʊnt",
     "giảm giá",
     "Members receive a ten percent discount.",
     "Hội viên được giảm mười phần trăm.",
     "B1"
    ],
    [
     "coupon",
     "n",
     "ˈkuːˌpɔːn",
     "phiếu giảm giá",
     "Bring this coupon to the store.",
     "Mang phiếu giảm giá này đến cửa hàng.",
     "B2"
    ],
    [
     "display",
     "n",
     "dɪˈspleɪ",
     "trưng bày",
     "The window display attracts customers.",
     "Cách trưng bày ở cửa sổ thu hút khách.",
     "A2"
    ],
    [
     "shelf",
     "n",
     "ʃelf",
     "kệ hàng",
     "Stock the shelves before opening.",
     "Hãy xếp hàng lên kệ trước giờ mở cửa.",
     "A1"
    ],
    [
     "exchange policy",
     "n",
     "ɪksˈtʃeɪndʒ ˈpɑːləsi",
     "chính sách đổi hàng",
     "Read our exchange policy carefully.",
     "Hãy đọc kỹ chính sách đổi hàng của chúng tôi.",
     "B1"
    ],
    [
     "seasonal",
     "adj",
     "ˈsiːzənəl",
     "theo mùa",
     "Seasonal items are on sale.",
     "Các mặt hàng theo mùa đang giảm giá.",
     "B2"
    ],
    [
     "outlet",
     "n",
     "ˈaʊtˌlet",
     "cửa hàng giá rẻ",
     "We bought the shoes at an outlet.",
     "Chúng tôi mua đôi giày ở cửa hàng giá rẻ.",
     "B2"
    ],
    [
     "loyalty program",
     "n",
     "ˈlɔɪəlti ˈproʊˌɡræm",
     "chương trình khách hàng thân thiết",
     "Join our loyalty program for rewards.",
     "Hãy tham gia chương trình khách hàng thân thiết để nhận quà.",
     "B1"
    ]
   ]
  },
  {
   "icon": "🔧",
   "vi": "Sửa chữa và bảo trì",
   "en": "Repairs and Maintenance",
   "words": [
    [
     "repair",
     "v",
     "rɪˈper",
     "sửa chữa",
     "A technician will repair the air conditioner.",
     "Một kỹ thuật viên sẽ sửa máy điều hòa.",
     "A2"
    ],
    [
     "replace",
     "v",
     "ˌriːˈpleɪs",
     "thay thế",
     "Replace the filter every six months.",
     "Hãy thay bộ lọc sáu tháng một lần.",
     "A2"
    ],
    [
     "out of order",
     "phr",
     "aʊt ʌv ˈɔːrdər",
     "hỏng, không hoạt động",
     "The elevator is out of order.",
     "Thang máy bị hỏng.",
     "A1"
    ],
    [
     "inspect",
     "v",
     "ˌɪnˈspekt",
     "kiểm tra",
     "Inspectors will inspect the building.",
     "Thanh tra sẽ kiểm tra tòa nhà.",
     "B2"
    ],
    [
     "leak",
     "n",
     "liːk",
     "chỗ rò rỉ",
     "There is a leak in the ceiling.",
     "Có một chỗ rò rỉ trên trần nhà.",
     "B2"
    ],
    [
     "schedule",
     "n",
     "ˈskedʒʊl",
     "lịch trình",
     "The maintenance schedule is posted online.",
     "Lịch bảo trì được đăng trực tuyến.",
     "A2"
    ],
    [
     "routine",
     "adj",
     "ruːˈtiːn",
     "định kỳ",
     "Routine maintenance prevents breakdowns.",
     "Bảo trì định kỳ ngăn ngừa hỏng hóc.",
     "B1"
    ],
    [
     "breakdown",
     "n",
     "ˈbreɪkˌdaʊn",
     "sự hỏng hóc",
     "A breakdown stopped production.",
     "Sự hỏng hóc đã dừng sản xuất.",
     "B2"
    ],
    [
     "service call",
     "n",
     "ˈsɜːrvəs kɔːl",
     "cuộc gọi sửa chữa",
     "Book a service call online.",
     "Đặt lịch gọi sửa chữa trực tuyến.",
     "B1"
    ],
    [
     "faulty",
     "adj",
     "ˈfɔːlti",
     "bị lỗi",
     "The faulty wiring caused a fire.",
     "Hệ thống dây điện bị lỗi gây cháy.",
     "B2"
    ],
    [
     "temporary",
     "adj",
     "ˈtempərˌeri",
     "tạm thời",
     "A temporary fix was applied.",
     "Một cách sửa tạm thời đã được áp dụng.",
     "B1"
    ],
    [
     "permanent",
     "adj",
     "ˈpɜːrmənənt",
     "lâu dài",
     "We need a permanent solution.",
     "Chúng ta cần một giải pháp lâu dài.",
     "B1"
    ]
   ]
  },
  {
   "icon": "🗣️",
   "vi": "Đàm phán và thương lượng",
   "en": "Negotiation",
   "words": [
    [
     "negotiate",
     "v",
     "nəˈɡoʊʃiˌeɪt",
     "đàm phán",
     "We negotiated a better price.",
     "Chúng tôi đã đàm phán được giá tốt hơn.",
     "B1"
    ],
    [
     "propose",
     "v",
     "prəˈpoʊz",
     "đề xuất",
     "I propose we meet next week.",
     "Tôi đề xuất chúng ta gặp vào tuần sau.",
     "B1"
    ],
    [
     "compromise",
     "n",
     "ˈkɑːmprəˌmaɪz",
     "sự thỏa hiệp",
     "Both sides reached a compromise.",
     "Hai bên đạt được sự thỏa hiệp.",
     "B1"
    ],
    [
     "counteroffer",
     "n",
     "ˈkaʊntərˌɔːfər",
     "đề nghị đáp lại",
     "They made a counteroffer of ten thousand.",
     "Họ đưa ra đề nghị đáp lại là mười nghìn.",
     "B2"
    ],
    [
     "merger",
     "n",
     "ˈmɜːrdʒər",
     "sự sáp nhập",
     "The merger created a giant firm.",
     "Sự sáp nhập tạo ra một công ty khổng lồ.",
     "B2"
    ],
    [
     "acquisition",
     "n",
     "ˌækwəˈzɪʃən",
     "thương vụ mua lại",
     "The acquisition was completed in May.",
     "Thương vụ mua lại hoàn tất vào tháng Năm.",
     "B2"
    ],
    [
     "partnership",
     "n",
     "ˈpɑːrtnərˌʃɪp",
     "quan hệ đối tác",
     "The partnership benefits both companies.",
     "Quan hệ đối tác có lợi cho cả hai công ty.",
     "B2"
    ],
    [
     "shareholder",
     "n",
     "ˈʃerˌhoʊldər",
     "cổ đông",
     "Shareholders approved the plan.",
     "Cổ đông đã phê duyệt kế hoạch.",
     "B2"
    ],
    [
     "stakeholder",
     "n",
     "ˈsteɪkˌhoʊldər",
     "bên liên quan",
     "Keep all stakeholders informed.",
     "Hãy thông báo cho mọi bên liên quan.",
     "B2"
    ],
    [
     "bid",
     "n",
     "bɪd",
     "hồ sơ dự thầu",
     "Our bid was accepted.",
     "Hồ sơ dự thầu của chúng tôi đã được chấp nhận.",
     "B2"
    ],
    [
     "consensus",
     "n",
     "kənˈsensəs",
     "sự đồng thuận",
     "The committee reached a consensus.",
     "Ủy ban đạt được sự đồng thuận.",
     "B2"
    ],
    [
     "terms",
     "n",
     "tɜːrmz",
     "điều khoản",
     "We agreed on the terms of payment.",
     "Chúng tôi đã thống nhất điều khoản thanh toán.",
     "B1"
    ]
   ]
  },
  {
   "icon": "📈",
   "vi": "Hiệu quả kinh doanh",
   "en": "Business Performance",
   "words": [
    [
     "quarter",
     "n",
     "ˈkwɔːrtər",
     "quý",
     "Sales rose in the third quarter.",
     "Doanh số tăng trong quý ba.",
     "A1"
    ],
    [
     "growth",
     "n",
     "ɡroʊθ",
     "tăng trưởng",
     "The company reported strong growth.",
     "Công ty báo cáo tăng trưởng mạnh.",
     "B1"
    ],
    [
     "decline",
     "n",
     "dɪˈklaɪn",
     "sự suy giảm",
     "There was a decline in orders.",
     "Có sự suy giảm về đơn hàng.",
     "B1"
    ],
    [
     "forecast",
     "n",
     "ˈfɔːrˌkæst",
     "dự báo",
     "The sales forecast looks positive.",
     "Dự báo doanh số có vẻ tích cực.",
     "B1"
    ],
    [
     "target",
     "n",
     "ˈtɑːrɡət",
     "chỉ tiêu",
     "We exceeded this month's target.",
     "Chúng tôi đã vượt chỉ tiêu tháng này.",
     "A2"
    ],
    [
     "merchandise sales",
     "n",
     "ˈmɜːrtʃənˌdaɪz seɪlz",
     "doanh số hàng hóa",
     "Merchandise sales doubled.",
     "Doanh số hàng hóa tăng gấp đôi.",
     "B2"
    ],
    [
     "competitive",
     "adj",
     "kəmˈpetətɪv",
     "có tính cạnh tranh",
     "We offer competitive prices.",
     "Chúng tôi đưa ra mức giá cạnh tranh.",
     "B1"
    ],
    [
     "shortage",
     "n",
     "ˈʃɔːrtədʒ",
     "sự thiếu hụt",
     "A shortage of staff delayed the project.",
     "Sự thiếu hụt nhân sự làm chậm dự án.",
     "B1"
    ],
    [
     "surplus",
     "n",
     "ˈsɜːrpləs",
     "thặng dư",
     "The store has a surplus of stock.",
     "Cửa hàng có lượng hàng tồn dư thừa.",
     "B2"
    ],
    [
     "expand",
     "v",
     "ɪkˈspænd",
     "mở rộng",
     "The firm plans to expand overseas.",
     "Công ty dự định mở rộng ra nước ngoài.",
     "B1"
    ],
    [
     "downsize",
     "v",
     "ˈdaʊnˌsaɪz",
     "thu hẹp quy mô",
     "The company had to downsize.",
     "Công ty đã phải thu hẹp quy mô.",
     "B2"
    ],
    [
     "turnover",
     "n",
     "ˈtɜːrˌnoʊvər",
     "doanh thu, tỷ lệ nghỉ việc",
     "Staff turnover is very low.",
     "Tỷ lệ nhân viên nghỉ việc rất thấp.",
     "B2"
    ]
   ]
  },
  {
   "icon": "🧾",
   "vi": "Thông báo và biển hiệu",
   "en": "Notices and Signs",
   "words": [
    [
     "notice",
     "n",
     "ˈnoʊtəs",
     "thông báo",
     "A notice was posted on the door.",
     "Một thông báo được dán trên cửa.",
     "A2"
    ],
    [
     "closed for renovation",
     "phr",
     "kloʊzd fɔːr ˌrenəˈveɪʃən",
     "đóng cửa để cải tạo",
     "The library is closed for renovation.",
     "Thư viện đóng cửa để cải tạo.",
     "B2"
    ],
    [
     "restricted",
     "adj",
     "riˈstrɪktəd",
     "bị hạn chế",
     "This is a restricted area.",
     "Đây là khu vực hạn chế.",
     "B2"
    ],
    [
     "authorized personnel",
     "n",
     "ˈɔːθərˌaɪzd ˌpɜːrsəˈnel",
     "nhân viên được ủy quyền",
     "Authorized personnel only.",
     "Chỉ dành cho nhân viên được ủy quyền.",
     "B2"
    ],
    [
     "under construction",
     "phr",
     "ˈʌndər kənˈstrʌkʃən",
     "đang xây dựng",
     "The bridge is under construction.",
     "Cây cầu đang được xây dựng.",
     "B1"
    ],
    [
     "no admittance",
     "phr",
     "noʊ ədˈmɪtəns",
     "cấm vào",
     "No admittance without a badge.",
     "Cấm vào nếu không có thẻ.",
     "B2"
    ],
    [
     "please be advised",
     "phr",
     "pliːz biː ædˈvaɪzd",
     "xin lưu ý",
     "Please be advised that the office will close early.",
     "Xin lưu ý rằng văn phòng sẽ đóng cửa sớm.",
     "B2"
    ],
    [
     "effective immediately",
     "phr",
     "ɪˈfektɪv ˌɪˈmiːˌdiːətli",
     "có hiệu lực ngay lập tức",
     "The rule is effective immediately.",
     "Quy định có hiệu lực ngay lập tức.",
     "B1"
    ],
    [
     "valid",
     "adj",
     "ˈvælɪd",
     "còn hiệu lực",
     "The coupon is valid until June.",
     "Phiếu giảm giá còn hiệu lực đến tháng Sáu.",
     "B2"
    ],
    [
     "expire",
     "v",
     "ɪkˈspaɪr",
     "hết hạn",
     "Your card will expire next month.",
     "Thẻ của bạn sẽ hết hạn vào tháng sau.",
     "B2"
    ],
    [
     "parking permit",
     "n",
     "ˈpɑːrkɪŋ pərˈmɪt",
     "giấy phép đỗ xe",
     "Display your parking permit clearly.",
     "Hãy đặt giấy phép đỗ xe ở nơi dễ thấy.",
     "B1"
    ],
    [
     "inconvenience",
     "n",
     "ˌɪnkənˈviːnjəns",
     "sự bất tiện",
     "We apologize for any inconvenience.",
     "Chúng tôi xin lỗi vì mọi bất tiện.",
     "B2"
    ]
   ]
  }
 ]
};
