import { useState } from 'react'
import { Link } from 'react-router-dom'

function ProjectDetail({ project }) {
  const [selectedImage, setSelectedImage] = useState(0)
  const [isZoomed, setIsZoomed] = useState(false)

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gold mb-4">Không tìm thấy công trình</h1>
          <Link to="/projects" className="btn-primary">
            <i className="fas fa-arrow-left"></i> Quay lại danh sách
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="pt-24 pb-20">
      <div className="container">
        {/* Breadcrumb */}
        <div className="mb-8">
          <nav className="flex text-sm text-gray-400">
            <Link to="/" className="hover:text-gold transition-colors">Trang chủ</Link>
            <span className="mx-2">/</span>
            <Link to="/projects" className="hover:text-gold transition-colors">Công trình của chúng tôi</Link>
            <span className="mx-2">/</span>
            <span className="text-gold">{project.title}</span>
          </nav>
        </div>

        {/* Project Header */}
        <div className="mb-12">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-6">
            <div>
              <span className="inline-block bg-gold/20 text-gold text-sm font-semibold px-4 py-1 rounded-full mb-3">
                {project.category}
              </span>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">{project.title}</h1>
              <div className="flex flex-wrap gap-6 text-gray-300">
                <div className="flex items-center gap-2">
                  <i className="fas fa-map-marker-alt text-gold"></i>
                  <span>{project.location}</span>
                </div>
                <div className="flex items-center gap-2">
                  <i className="fas fa-ruler-combined text-gold"></i>
                  <span>{project.area}</span>
                </div>
                <div className="flex items-center gap-2">
                  <i className="fas fa-calendar-alt text-gold"></i>
                  <span>Hoàn thành: 2023</span>
                </div>
              </div>
            </div>
            
            <Link to="/projects" className="btn-outline">
              <i className="fas fa-arrow-left"></i> Quay lại
            </Link>
          </div>
        </div>

        {/* Main Image */}
        <div className="mb-10">
          <div 
            className="relative rounded-2xl overflow-hidden h-[500px] cursor-zoom-in"
            onClick={() => setIsZoomed(!isZoomed)}
          >
            <img 
              src={project.images[selectedImage]} 
              alt={project.title}
              className={`w-full h-full object-cover transition-transform duration-500 ${isZoomed ? 'scale-110' : ''}`}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
            <div className="absolute top-4 right-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
              {selectedImage + 1} / {project.images.length}
            </div>
            <div className="absolute bottom-4 right-4">
              <button 
                onClick={(e) => {
                  e.stopPropagation()
                  setIsZoomed(!isZoomed)
                }}
                className="bg-black/50 hover:bg-black/70 text-white w-10 h-10 rounded-full flex items-center justify-center transition-colors"
              >
                <i className={`fas ${isZoomed ? 'fa-search-minus' : 'fa-search-plus'}`}></i>
              </button>
            </div>
          </div>
        </div>

        {/* Thumbnail Images */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-gold mb-6">Hình ảnh chi tiết</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {project.images.map((img, index) => (
              <button
                key={index}
                className={`relative rounded-lg overflow-hidden h-40 transition-all duration-300 ${selectedImage === index ? 'ring-2 ring-gold scale-105' : 'opacity-70 hover:opacity-100 hover:scale-105'}`}
                onClick={() => setSelectedImage(index)}
              >
                <img 
                  src={img} 
                  alt={`${project.title} - ${index + 1}`}
                  className="w-full h-full object-cover"
                />
                <div className={`absolute inset-0 bg-black/40 transition-opacity ${selectedImage === index ? 'opacity-100' : 'opacity-0 hover:opacity-100'} flex items-center justify-center`}>
                  <i className="fas fa-search text-2xl text-white"></i>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Project Description */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <div className="bg-black-light rounded-xl p-8 border border-gold/10">
              <h3 className="text-3xl font-bold text-gold mb-6">Mô tả công trình</h3>
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-300 leading-relaxed mb-6">
                  {project.description}
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                  <div className="bg-black/50 p-6 rounded-lg">
                    <h4 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
                      <i className="fas fa-palette text-gold"></i>
                      Phong cách thiết kế
                    </h4>
                    <p className="text-gray-300">
                      Kết hợp giữa phong cách tân cổ điển và hiện đại, tạo nên không gian sang trọng nhưng vẫn đảm bảo tính tiện nghi.
                    </p>
                  </div>
                  
                  <div className="bg-black/50 p-6 rounded-lg">
                    <h4 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
                      <i className="fas fa-lightbulb text-gold"></i>
                      Giải pháp ánh sáng
                    </h4>
                    <p className="text-gray-300">
                      Hệ thống đèn thông minh điều chỉnh theo thời gian trong ngày và hoạt động, tạo hiệu ứng ánh sáng tự nhiên.
                    </p>
                  </div>
                </div>
                
                <h4 className="text-xl font-bold text-white mt-8 mb-4">Đặc điểm nổi bật</h4>
                <ul className="text-gray-300 space-y-3">
                  <li className="flex items-start gap-3">
                    <i className="fas fa-check text-gold mt-1"></i>
                    <span>Sử dụng vật liệu cao cấp nhập khẩu từ châu Âu</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <i className="fas fa-check text-gold mt-1"></i>
                    <span>Thiết kế 3D chi tiết trước khi thi công</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <i className="fas fa-check text-gold mt-1"></i>
                    <span>Hệ thống ánh sáng thông minh điều chỉnh theo ngữ cảnh</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <i className="fas fa-check text-gold mt-1"></i>
                    <span>Bảo hành vật liệu và thi công lên đến 5 năm</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <i className="fas fa-check text-gold mt-1"></i>
                    <span>Tối ưu không gian sử dụng với thiết kế thông minh</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          {/* Project Info Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-black-light rounded-xl p-8 border border-gold/10 sticky top-24">
              <h3 className="text-2xl font-bold text-gold mb-6">Thông tin dự án</h3>
              
              <div className="space-y-6">
                <div>
                  <h4 className="text-gray-400 text-sm uppercase tracking-wider mb-2">Thể loại</h4>
                  <p className="text-white font-medium">{project.category}</p>
                </div>
                
                <div>
                  <h4 className="text-gray-400 text-sm uppercase tracking-wider mb-2">Địa điểm</h4>
                  <p className="text-white font-medium">{project.location}</p>
                </div>
                
                <div>
                  <h4 className="text-gray-400 text-sm uppercase tracking-wider mb-2">Diện tích</h4>
                  <p className="text-white font-medium">{project.area}</p>
                </div>
                
                <div>
                  <h4 className="text-gray-400 text-sm uppercase tracking-wider mb-2">Thời gian thi công</h4>
                  <p className="text-white font-medium">3-6 tháng</p>
                </div>
                
                <div>
                  <h4 className="text-gray-400 text-sm uppercase tracking-wider mb-2">Phong cách thiết kế</h4>
                  <p className="text-white font-medium">Sang trọng & Hiện đại</p>
                </div>
                
                <div>
                  <h4 className="text-gray-400 text-sm uppercase tracking-wider mb-2">Vật liệu chính</h4>
                  <p className="text-white font-medium">Gỗ óc chó, Đá marble, Kim loại mạ vàng</p>
                </div>
              </div>
              
              <div className="mt-10 pt-6 border-t border-gray-800">
                <h4 className="text-xl font-bold text-gold mb-4">Liên hệ tư vấn</h4>
                <p className="text-gray-300 mb-6">
                  Bạn muốn có không gian tương tự? Hãy liên hệ với chúng tôi để được tư vấn miễn phí.
                </p>
                <button className="btn-primary w-full justify-center">
                  <i className="fas fa-calendar-alt"></i> Đặt lịch tư vấn
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Project Gallery Navigation */}
        <div className="mt-16 bg-black-light rounded-xl p-8 border border-gold/10">
          <h3 className="text-2xl font-bold text-gold mb-6 text-center">Khám phá thêm công trình</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link to="/projects" className="group">
              <div className="bg-black/50 p-6 rounded-lg hover:bg-black/70 transition-colors">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center group-hover:bg-gold/20 transition-colors">
                    <i className="fas fa-th-large text-gold text-xl"></i>
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-lg group-hover:text-gold transition-colors">Tất cả công trình</h4>
                    <p className="text-gray-400 text-sm">Xem toàn bộ danh sách</p>
                  </div>
                </div>
              </div>
            </Link>
            
            <Link to="/" className="group">
              <div className="bg-black/50 p-6 rounded-lg hover:bg-black/70 transition-colors">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center group-hover:bg-gold/20 transition-colors">
                    <i className="fas fa-home text-gold text-xl"></i>
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-lg group-hover:text-gold transition-colors">Trang chủ</h4>
                    <p className="text-gray-400 text-sm">Quay về trang chính</p>
                  </div>
                </div>
              </div>
            </Link>
            
            <a href="#catalog" className="group">
              <div className="bg-black/50 p-6 rounded-lg hover:bg-black/70 transition-colors">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center group-hover:bg-gold/20 transition-colors">
                    <i className="fas fa-book text-gold text-xl"></i>
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-lg group-hover:text-gold transition-colors">Catalog vật liệu</h4>
                    <p className="text-gray-400 text-sm">Khám phá vật liệu cao cấp</p>
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectDetail