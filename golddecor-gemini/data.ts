
import { Project, MaterialPage } from './types';

export const projects: Project[] = [
  {
    id: '1',
    name: 'Penthouse Skyline - Thảo Điền',
    thumbnail: 'https://picsum.photos/seed/p1/800/600',
    description: 'Một không gian sống đẳng cấp với phong cách hiện đại tối giản, tối ưu hóa ánh sáng tự nhiên và tầm nhìn toàn cảnh thành phố.',
    category: 'Căn hộ cao cấp',
    images: [
      'https://picsum.photos/seed/p1a/1200/800',
      'https://picsum.photos/seed/p1b/1200/800',
      'https://picsum.photos/seed/p1c/1200/800'
    ]
  },
  {
    id: '2',
    name: 'Biệt Thự Vườn Mocha Mousse',
    thumbnail: 'https://picsum.photos/seed/p2/800/600',
    description: 'Thiết kế lấy cảm hứng từ tone màu nâu Mocha và Beige, tạo cảm giác ấm cúng nhưng không kém phần sang trọng cho gia chủ.',
    category: 'Biệt thự',
    images: [
      'https://picsum.photos/seed/p2a/1200/800',
      'https://picsum.photos/seed/p2b/1200/800',
      'https://picsum.photos/seed/p2c/1200/800'
    ]
  },
  {
    id: '3',
    name: 'Văn Phòng Sáng Tạo Golddecor',
    thumbnail: 'https://picsum.photos/seed/p3/800/600',
    description: 'Không gian làm việc mở với các vật liệu 3D hiện đại, thúc đẩy sự sáng tạo và tương tác giữa các thành viên.',
    category: 'Văn phòng',
    images: [
      'https://picsum.photos/seed/p3a/1200/800',
      'https://picsum.photos/seed/p3b/1200/800',
      'https://picsum.photos/seed/p3c/1200/800'
    ]
  },
  {
    id: '4',
    name: 'Nhà Phố Indochine Hoài Cổ',
    thumbnail: 'https://picsum.photos/seed/p4/800/600',
    description: 'Sự kết hợp hoàn hảo giữa nét truyền thống Á Đông và vẻ đẹp sang trọng của kiến trúc Pháp cổ điển.',
    category: 'Nhà phố',
    images: [
      'https://picsum.photos/seed/p4a/1200/800',
      'https://picsum.photos/seed/p4b/1200/800',
      'https://picsum.photos/seed/p4c/1200/800'
    ]
  }
];

export const materialCatalog: MaterialPage[] = [
  {
    title: 'Gỗ Sồi Tự Nhiên (Oak)',
    description: 'Loại vật liệu kinh điển cho nội thất sang trọng với vân gỗ rõ nét và độ bền cao.',
    image: 'https://picsum.photos/seed/wood1/600/800',
    specs: ['Độ bền: Rất cao', 'Màu sắc: Vàng nhạt đến nâu', 'Ứng dụng: Sàn, tủ, bàn']
  },
  {
    title: 'Đá Marble Calacatta',
    description: 'Mang lại vẻ đẹp lộng lẫy và tinh tế cho không gian bếp và phòng tắm với các đường vân xám sang trọng.',
    image: 'https://picsum.photos/seed/stone1/600/800',
    specs: ['Bề mặt: Bóng gương', 'Độ dày: 18-20mm', 'Xuất xứ: Italy']
  },
  {
    title: 'Vải Nhung Cao Cấp',
    description: 'Chất liệu mềm mại, tạo chiều sâu cho các sản phẩm sofa và rèm cửa trong tone màu Mocha.',
    image: 'https://picsum.photos/seed/velvet1/600/800',
    specs: ['Thành phần: 100% Polyester', 'Độ bền màu: Cấp 4', 'Cảm giác: Mềm, mịn']
  },
  {
    title: 'Kim Loại Mạ Vàng PVD',
    description: 'Chi tiết trang trí không thể thiếu để nâng tầm đẳng cấp không gian.',
    image: 'https://picsum.photos/seed/gold1/600/800',
    specs: ['Công nghệ: Mạ PVD', 'Độ bóng: High gloss', 'Chống oxy hóa: Có']
  }
];
