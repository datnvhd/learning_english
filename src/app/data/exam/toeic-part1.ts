/**
 * ============================================================================
 *  toeic-part1.ts – Kho đề TOEIC Part 1 (Photographs – Mô tả tranh)
 * ============================================================================
 *  Mỗi câu: một ảnh thật (CC0, đóng gói offline trong public/assets/photos) + 4 câu mô tả.
 *  Giống đề thật: thí sinh chỉ NGHE 4 câu (A)–(D) rồi chọn câu mô tả đúng nhất.
 *  Quy ước: `a` là câu ĐÚNG, `wrong` là 3 câu bẫy; hệ thống tự xáo trộn khi ra đề.
 *
 *  Các kiểu bẫy thường gặp (được giải thích trong `ex`):
 *   - Đúng đồ vật nhưng SAI HÀNH ĐỘNG (có laptop nhưng không ai đang sửa laptop)
 *   - "is wearing" (trạng thái) ≠ "is putting on" (hành động đang mặc/đội vào)
 *   - Câu bị động tiếp diễn "is being + V3" = CÓ người đang làm; "has been + V3" = trạng thái đã xong
 *   - Nhắc tới người/vật KHÔNG có trong ảnh
 *   - Từ phát âm gần giống (similar sounds)
 */
import { ToeicPhotoItem } from '../../models/exam.model';

export const TOEIC_PART1: ToeicPhotoItem[] = [
  // ---------------- Công sở ----------------
  {
    photo: 'scene:meeting', a: 'Chairs have been placed around a long table.',
    wrong: ['People are gathered for a meeting.', 'A man is arranging some chairs.', 'Curtains are being closed.'],
    vi: 'Những chiếc ghế đã được đặt quanh một chiếc bàn dài.',
    ex: 'Phòng họp KHÔNG có người → loại mọi câu có người (gathered, arranging). "have been placed" (bị động hoàn thành) mô tả trạng thái đồ vật.',
  },
  {
    photo: 'scene:notes', a: 'Some people are writing at a table.',
    wrong: ['A laptop is being repaired.', 'A woman is closing a laptop.', 'Some people are drinking from cups.'],
    vi: 'Vài người đang viết bên một chiếc bàn.',
    ex: 'Laptop và ly nước CÓ trong ảnh nhưng không ai đang sửa, gập máy hay uống – bẫy "đúng đồ vật, sai hành động".',
  },
  {
    photo: 'scene:typing', a: 'A woman is typing on a laptop.',
    wrong: ['A woman is looking out of a window.', 'A woman is plugging in a cable.', 'A woman is putting a laptop into a bag.'],
    vi: 'Một người phụ nữ đang gõ phím trên máy tính xách tay.',
    ex: 'Có cửa sổ trong ảnh nhưng cô ấy đang nhìn màn hình, không nhìn ra cửa sổ.',
  },
  {
    photo: 'scene:chef', a: 'Food is being arranged on plates.',
    wrong: ['Plates are stacked in a cupboard.', 'A cook is washing the dishes.', 'Some diners are eating a meal.'],
    vi: 'Thức ăn đang được bày lên đĩa.',
    ex: '"is being arranged" (bị động tiếp diễn) = có người đang bày → đúng vì thấy bàn tay đang đặt thức ăn.',
  },
  {
    photo: 'scene:kitchen', a: 'A man is standing in a kitchen.',
    wrong: ['A man is hanging up his apron.', 'Some lamps are being installed.', 'Customers are sitting at the counter.'],
    vi: 'Một người đàn ông đang đứng trong bếp.',
    ex: 'Đèn đã treo sẵn (không ai đang lắp) và không có khách ngồi ở quầy.',
  },
  {
    photo: 'scene:waiter', a: 'A man is carrying some plates.',
    wrong: ['A man is sitting at a table.', 'A man is pouring a drink.', 'Some boats are being tied to a pier.'],
    vi: 'Một người đàn ông đang bưng mấy chiếc đĩa.',
    ex: 'Có chai rượu trên bàn nhưng không ai đang rót – bẫy đồ vật có trong ảnh.',
  },
  {
    photo: 'scene:cleaning', a: 'A woman is clearing a table.',
    wrong: ['A woman is putting on a cap.', 'A woman is opening a can.', 'A woman is washing her hands.'],
    vi: 'Một người phụ nữ đang dọn bàn.',
    ex: 'Cô ấy ĐANG ĐỘI mũ (is wearing a cap) chứ không phải đang đội mũ vào (is putting on) – bẫy kinh điển.',
  },
  {
    photo: 'scene:platform', a: 'A man is sitting on a platform.',
    wrong: ['Passengers are boarding a train.', 'A train is crossing a bridge.', 'Some tracks are being repaired.'],
    vi: 'Một người đàn ông đang ngồi trên sân ga.',
    ex: 'Không có hành khách lên tàu, không có cầu, không ai sửa đường ray.',
  },
  {
    photo: 'scene:newspaper', a: 'A person is reading a newspaper.',
    wrong: ['A person is folding a newspaper.', 'A person is selling magazines.', 'A person is lying on the grass.'],
    vi: 'Một người đang đọc báo.',
    ex: 'Tờ báo đang mở ra để đọc, không phải đang gấp (folding).',
  },
  {
    photo: 'scene:train', a: 'A man is looking out of a window.',
    wrong: ['A man is opening a window.', 'A man is reading a newspaper.', 'A man is getting off a train.'],
    vi: 'Một người đàn ông đang nhìn ra ngoài cửa sổ.',
    ex: 'Ông ấy cầm tờ báo nhưng đang nhìn ra cửa sổ, không đọc – chú ý hành động chính.',
  },
  // ---------------- Đời sống ----------------
  {
    photo: 'daily:backpack', a: 'A hiker is walking through a forest.',
    wrong: ['A hiker is taking off a backpack.', 'Some trees are being cut down.', 'A hiker is setting up a tent.'],
    vi: 'Một người đi bộ đường dài đang đi xuyên qua khu rừng.',
    ex: 'Người đó đang ĐEO ba lô, không phải đang cởi ra (taking off).',
  },
  {
    photo: 'daily:dress', a: 'Some women are seated on a sofa.',
    wrong: ['Some women are dancing in a hall.', 'Some women are setting a table.', 'Flowers are being planted in a garden.'],
    vi: 'Vài người phụ nữ đang ngồi trên ghế sofa.',
    ex: '"are seated" = đang ngồi. Có hoa trên bàn nhưng không ai đang trồng hoa.',
  },
  {
    photo: 'daily:guitar', a: 'A woman is holding a guitar.',
    wrong: ['A woman is playing the piano.', 'A woman is putting a guitar in a case.', 'A woman is standing next to a sofa.'],
    vi: 'Một người phụ nữ đang ôm cây đàn ghi-ta.',
    ex: 'Cô ấy đang NGỒI trên ghế, không đứng – bẫy sai tư thế.',
  },
  {
    photo: 'daily:horse', a: 'A man is riding a horse.',
    wrong: ['A man is feeding a horse.', 'A man is getting off a horse.', 'Spectators are leaving their seats.'],
    vi: 'Một người đàn ông đang cưỡi ngựa.',
    ex: 'Khán giả vẫn đang ngồi, không rời chỗ; người đàn ông không xuống ngựa.',
  },
  {
    photo: 'daily:key', a: 'A person is holding some keys.',
    wrong: ['A person is unlocking a door.', 'Some keys are hanging on a hook.', 'A person is putting on gloves.'],
    vi: 'Một người đang cầm mấy chiếc chìa khóa.',
    ex: 'Chìa khóa nằm trong lòng bàn tay, không treo trên móc và không ai mở cửa.',
  },
  {
    photo: 'daily:market', a: 'People are shopping at an outdoor market.',
    wrong: ['Fruit is being loaded onto a truck.', 'The market stalls are empty.', 'People are waiting at a bus stop.'],
    vi: 'Mọi người đang mua sắm ở một khu chợ ngoài trời.',
    ex: 'Sạp hàng đầy trái cây (không trống), không có xe tải hay trạm xe buýt.',
  },
  {
    photo: 'daily:piano', a: 'A boy is standing next to a piano.',
    wrong: ['A boy is playing the piano.', 'A piano is being moved onto a stage.', 'A boy is sitting in the audience.'],
    vi: 'Một cậu bé đang đứng cạnh cây đàn piano.',
    ex: 'Cậu bé đứng cạnh đàn, không chơi đàn – bẫy "đúng đồ vật, sai hành động".',
  },
  {
    photo: 'daily:puppy', a: 'A man is holding some puppies.',
    wrong: ['A man is walking a dog.', 'Some puppies are playing on the grass.', 'A man is taking off his shirt.'],
    vi: 'Một người đàn ông đang ôm mấy chú chó con.',
    ex: 'Chó con nằm trong tay ông ấy, không chơi trên cỏ.',
  },
  {
    photo: 'daily:shoes', a: 'Shoes are displayed on shelves.',
    wrong: ['A woman is trying on shoes.', 'The shelves are being painted.', 'A customer is paying at a counter.'],
    vi: 'Giày được trưng bày trên các kệ.',
    ex: '"are displayed" = được trưng bày (trạng thái). Không ai đang thử giày hay sơn kệ.',
  },
  {
    photo: 'daily:supermarket', a: 'Bottles are lined up on the shelves.',
    wrong: ['Shoppers are waiting in line.', 'A worker is mopping the floor.', 'Some boxes are being unloaded.'],
    vi: 'Những chai lọ được xếp thành hàng trên kệ.',
    ex: 'Lối đi trống, không có người – loại mọi câu có người.',
  },
  {
    photo: 'daily:taxi', a: 'Several taxis are on a city street.',
    wrong: ['A taxi is being washed.', 'Passengers are getting on a bus.', 'The street is closed for repairs.'],
    vi: 'Vài chiếc taxi đang ở trên một con phố trong thành phố.',
    ex: 'Con đường vẫn có xe chạy, không bị đóng; không có xe buýt.',
  },
  {
    photo: 'daily:umbrella', a: 'Some people are walking along a path.',
    wrong: ['Some people are closing their umbrellas.', 'Some people are sitting on a bench.', 'A path is being swept.'],
    vi: 'Vài người đang đi bộ dọc một lối đi.',
    ex: 'Ô đang MỞ, không phải đang gập lại (closing).',
  },
  {
    photo: 'daily:chair', a: 'A cup has been left on a table.',
    wrong: ['A woman is pouring coffee.', 'Some chairs are stacked against the wall.', 'A table is being wiped.'],
    vi: 'Một chiếc cốc được để lại trên bàn.',
    ex: 'Ảnh không có người → loại các câu "is pouring", "is being wiped".',
  },
  {
    photo: 'daily:library', a: 'Books have been arranged on shelves.',
    wrong: ['A woman is reading a book.', 'Books are being packed into boxes.', 'A shelf is being assembled.'],
    vi: 'Sách đã được xếp trên kệ.',
    ex: '"have been arranged" = đã được sắp xếp (trạng thái). Không có người trong ảnh.',
  },
  {
    photo: 'daily:motorbike', a: 'A motorcycle has been parked near some trees.',
    wrong: ['A man is riding a motorcycle.', 'A motorcycle is being repaired.', 'Trees are being planted along a road.'],
    vi: 'Một chiếc xe máy đã được đỗ gần mấy cái cây.',
    ex: 'Không ai lái hay sửa xe; cây đã mọc sẵn.',
  },
  {
    photo: 'daily:bridge', a: 'A bridge extends across the water.',
    wrong: ['Boats are passing under a bridge.', 'A bridge is being built.', 'People are fishing from a bridge.'],
    vi: 'Một cây cầu bắc ngang qua mặt nước.',
    ex: 'Không có thuyền, không có người câu cá; cầu đã xây xong.',
  },
  {
    photo: 'daily:bus', a: 'A bus is next to a lamppost.',
    wrong: ['Passengers are getting off a bus.', 'A bus is being painted.', 'A driver is cleaning the windows.'],
    vi: 'Một chiếc xe buýt ở cạnh cột đèn.',
    ex: 'Không nhìn thấy hành khách hay tài xế đang làm gì.',
  },
  {
    photo: 'daily:lamp', a: 'A small table is next to a bed.',
    wrong: ['Someone is making the bed.', 'A plant is being watered.', 'Pillows are piled on the floor.'],
    vi: 'Một chiếc bàn nhỏ ở cạnh giường.',
    ex: 'Không có người; gối nằm trên giường chứ không chất dưới sàn.',
  },
  {
    photo: 'daily:bedroom', a: 'Lights are shining above a bed.',
    wrong: ['A man is making the bed.', 'Curtains are being hung.', 'Clothes are scattered on the floor.'],
    vi: 'Đèn đang chiếu sáng phía trên giường.',
    ex: 'Căn phòng gọn gàng, không có người, không có quần áo vương vãi.',
  },
  {
    photo: 'daily:kitchen', a: 'A light fixture is hanging from the ceiling.',
    wrong: ['A cook is preparing a meal.', 'Dishes are piled in the sink.', 'Chairs are stacked on top of a table.'],
    vi: 'Một chiếc đèn đang treo trên trần nhà.',
    ex: '"light fixture" = đèn gắn cố định. Không có người nấu ăn.',
  },
  // ---------------- Du lịch ----------------
  {
    photo: 'travel:airport', a: 'Travelers are walking through a terminal.',
    wrong: ['An airplane is taking off.', 'Signs are being taken down.', 'The terminal is empty.'],
    vi: 'Hành khách đang đi bộ qua nhà ga sân bay.',
    ex: 'Nhà ga đông người (không trống); biển báo vẫn treo, không ai tháo.',
  },
  {
    photo: 'travel:boat', a: 'Boats are tied up in a harbor.',
    wrong: ['Some people are rowing a boat.', 'A boat is being lifted out of the water.', 'A ship is sailing on the open sea.'],
    vi: 'Những chiếc thuyền được buộc neo trong bến cảng.',
    ex: 'Không có người chèo thuyền; thuyền đang neo đậu, không ra khơi.',
  },
  {
    photo: 'travel:cable car', a: 'People are walking near a streetcar.',
    wrong: ['Passengers are boarding a plane.', 'The tracks are being repaired.', 'A streetcar is parked in a garage.'],
    vi: 'Mọi người đang đi bộ gần một chiếc xe điện.',
    ex: 'Xe điện ở ngoài phố, không nằm trong nhà xe; không ai sửa đường ray.',
  },
  {
    photo: 'travel:camera', a: 'A woman is taking a photograph.',
    wrong: ['A woman is removing her hood.', 'A woman is buying a camera.', 'A woman is looking at a map.'],
    vi: 'Một người phụ nữ đang chụp ảnh.',
    ex: 'Cô ấy đang đội mũ trùm (wearing a hood), không phải đang bỏ mũ ra (removing).',
  },
  {
    photo: 'travel:campfire', a: 'Some people are sitting around a fire.',
    wrong: ['Some people are swimming in a lake.', 'Some people are putting up a tent.', 'A fire is being put out.'],
    vi: 'Vài người đang ngồi quanh đống lửa.',
    ex: 'Lửa vẫn cháy, không ai dập (put out); có hồ nhưng không ai bơi.',
  },
  {
    photo: 'travel:ship', a: 'A ship is loaded with containers.',
    wrong: ['Containers are being unloaded from a truck.', 'Passengers are boarding a ferry.', 'A ship is docked for repairs.'],
    vi: 'Một con tàu chở đầy công-ten-nơ.',
    ex: 'Tàu đang ở trên mặt nước, không có xe tải hay hành khách.',
  },
  {
    photo: 'travel:suitcase', a: 'Some suitcases have been stacked on top of each other.',
    wrong: ['A man is packing a suitcase.', 'Suitcases are moving on a conveyor belt.', 'A suitcase is being opened.'],
    vi: 'Vài chiếc va li đã được xếp chồng lên nhau.',
    ex: '"have been stacked" = đã được xếp chồng (trạng thái). Không có người.',
  },
  {
    photo: 'travel:tent', a: 'A person is sitting beside a tent.',
    wrong: ['A person is taking down a tent.', 'A person is chopping wood.', 'Some tents are set up on a beach.'],
    vi: 'Một người đang ngồi cạnh chiếc lều.',
    ex: 'Lều dựng trong rừng (không phải bãi biển) và không ai đang tháo lều.',
  },
  {
    photo: 'travel:beach', a: 'Footprints have been left in the sand.',
    wrong: ['People are lying on the beach.', 'Some people are walking along the shore.', 'A sandcastle is being built.'],
    vi: 'Những dấu chân đã in lại trên cát.',
    ex: 'Chỉ có dấu chân, không có người nào trong ảnh.',
  },
  // ---------------- Sức khỏe, học tập, công nghệ ----------------
  {
    photo: 'health:swimming', a: 'A man is swimming in a pool.',
    wrong: ['A man is diving off a board.', 'A man is drying himself with a towel.', 'A pool is being cleaned.'],
    vi: 'Một người đàn ông đang bơi trong hồ.',
    ex: 'Ông ấy đang bơi, không nhảy cầu hay lau người.',
  },
  {
    photo: 'health:dumbbell', a: 'Some weights are lined up on a rack.',
    wrong: ['A man is lifting weights.', 'Weights are scattered on the floor.', 'A rack is being assembled.'],
    vi: 'Những quả tạ được xếp thành hàng trên giá.',
    ex: 'Tạ xếp ngay ngắn (không vương vãi) và không có người tập.',
  },
  {
    photo: 'health:treadmill', a: 'Some people are gathered in a fitness room.',
    wrong: ['A man is running on a treadmill.', 'Exercise machines are being delivered.', 'People are jogging in a park.'],
    vi: 'Vài người đang tụ tập trong một phòng tập thể dục.',
    ex: 'Người đàn ông ĐỨNG cạnh máy chạy bộ, không chạy – bẫy "đúng đồ vật, sai hành động".',
  },
  {
    photo: 'health:yoga', a: 'A woman is exercising on a beach.',
    wrong: ['A woman is swimming in the ocean.', 'A woman is lying on a towel.', 'Waves are washing over some rocks.'],
    vi: 'Một người phụ nữ đang tập thể dục trên bãi biển.',
    ex: 'Cô ấy tập yoga trên cát, không bơi; trong ảnh không có đá.',
  },
  {
    photo: 'it:laptop', a: 'A pair of glasses is lying on a desk.',
    wrong: ['A man is typing on a keyboard.', 'Coffee is being poured into a cup.', 'Some papers are scattered on the floor.'],
    vi: 'Một chiếc kính đang nằm trên bàn.',
    ex: 'Không có người → loại "is typing", "is being poured".',
  },
  {
    photo: 'it:monitor', a: 'A plant has been placed on a desk.',
    wrong: ['Someone is watering a plant.', 'A monitor is being installed.', 'Some books are stacked on a shelf.'],
    vi: 'Một chậu cây đã được đặt trên bàn làm việc.',
    ex: 'Không có người tưới cây hay lắp màn hình; không thấy kệ sách.',
  },
  {
    photo: 'study:classroom', a: 'Desks are arranged in rows.',
    wrong: ['Students are raising their hands.', 'A teacher is writing on the board.', 'Desks are being carried out of the room.'],
    vi: 'Bàn học được xếp thành hàng.',
    ex: 'Lớp học trống, không có học sinh hay giáo viên.',
  },
  {
    photo: 'food:watermelon', a: 'A woman is cutting a watermelon.',
    wrong: ['A woman is washing some fruit.', 'A woman is putting on her glasses.', 'Bananas are being peeled.'],
    vi: 'Một người phụ nữ đang cắt quả dưa hấu.',
    ex: 'Cô ấy đang ĐEO kính (wearing), không phải đang đeo kính vào (putting on). Có chuối nhưng không ai bóc.',
  },
];
