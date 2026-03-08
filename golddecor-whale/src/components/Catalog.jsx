import { useState } from 'react'

const catalogData = [
  {
    id: 1,
    title: "Gỗ Tự Nhiên Cao Cấp",
    description: "Các loại gỗ tự nhiên nhập khẩu từ châu Âu và Bắc Mỹ, đạt tiêu chuẩn FSC. Gỗ sồi, gỗ óc chó, gỗ tần bì với vân gỗ tự nhiên đẹp mắt.",
    image: "https://images.unsplash.com/photo-1560343090-f0409e92791a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    icon: "fas fa-tree"
  },
  {
    id: 2,
    title: "Đá Marble & Granite",
    description: "Đá tự nhiên cao cấp nhập khẩu từ Ý, Tây Ban Nha và Brazil. Đa dạng màu sắc và hoa văn độc đáo cho không gian sang trọng.",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    icon: "fas fa-gem"
  },
  {
    id: 3,
    title: "Vải Dệt Cao Cấp",
    description: "Vải nhập khẩu từ Ý, Bỉ và Thổ Nhĩ Kỳ. Chất liệu linen, velvet, silk và cotton cao cấp với độ bền và thẩm mỹ vượt trội.",
    image: "https://images.unsplash.com/photo-1558769132-cb1c458e4222?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    icon: "fas fa-scroll"
  },
  {
    id: 4,
    title: "Kim Loại Mạ Vàng",
    description: "Các chi tiết kim loại mạ vàng 24k, đồng thau và chrome đen. Áp dụng cho tay nắm, chân đèn, phụ kiện trang trí.",
    image: "https://images.unsplash.com/photo-1594736797933-d0d64d1fe48a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    icon: "fas fa-ring"
  },
  {
    id: 5,
    title: "Da Thuộc Thật",
    description: "Da thuộc nguyên tấm cao cấp nhập khẩu từ Ý và Anh. Đa dạng màu sắc và kết cấu, phù hợp cho sofa, ghế và các sản phẩm nội thất.",
    image: "https://images.unsplash.com/photo-1604702681083-8e2858b0c7ae?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    icon: "fas fa-square"
  }
]

function Catalog() {
  const [currentPage, setCurrentPage] = useState(0)
  const [isTurning, setIsTurning] = useState(false)

  const handleNextPage = () => {
    if (currentPage < catalogData.length - 1) {
      setIsTurning(true)
      setTimeout(() => {
        setCurrentPage(currentPage + 1)
        setIsTurning(false)
      }, 300)
    }
  }

  const handlePrevPage = () => {
    if (currentPage > 0) {
      setIsTurning(true)
      setTimeout(() => {
        setCurrentPage(currentPage - 1)
        setIsTurning(false)
      }, 300)
    }
  }

  return (
    <section id="catalog" className="py-20 bg-black-light">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="section-title">Catalog Vật Liệu</h2>
          <p className="section-subtitle">Khám phá các vật liệu cao cấp chúng tôi sử dụng</p>
        </div>
        
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Catalog Book */}
          <div className="lg:w-3/4 bg-gradient-to-br from-black-light to-black rounded-xl p-6 shadow-2xl border border-gold/20">
            <div className={`bg-black rounded-lg overflow-hidden h-[500px] ${isTurning ? 'animate-page-turn' : ''}`}>
              <div className="flex h-full">
                {/* Left side - Image */}
                <div 
                  className="w-1/2 bg-cover bg-center relative"
                  style={{ backgroundImage: `url(${catalogData[currentPage].image})` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent"></div>
                </div>
                
                {/* Right side - Content */}
                <div className="w-1/2 p-10 flex flex-col justify-center">
                  <h3 className="text-3xl font-bold text-gold mb-6">{catalogData[currentPage].title}</h3>
                  <p className="text-gray-300 mb-8 leading-relaxed">{catalogData[currentPage].description}</p>
                  
                  <div className="mt-auto text-right text-gray-500">
                    Trang {currentPage + 1} / {catalogData.length}
                  </div>
                </div>
              </div>
            </div>
            
            {/* Controls */}
            <div className="flex justify-between items-center mt-8">
              <button 
                className={`btn-outline ${currentPage === 0 ? 'opacity-50 cursor-not-allowed' : ''}`}
                onClick={handlePrevPage}
                disabled={currentPage === 0}
              >
                <i className="fas fa-chevron-left"></i> Trang trước
              </button>
              
              <div className="flex gap-3">
                {catalogData.map((_, index) => (
                  <button
                    key={index}
                    className={`w-3 h-3 rounded-full transition-colors ${index === currentPage ? 'bg-gold' : 'bg-gray-700 hover:bg-gray-600'}`}
                    onClick={() => setCurrentPage(index)}
                  />
                ))}
              </div>
              
              <button 
                className={`btn-outline ${currentPage === catalogData.length - 1 ? 'opacity-50 cursor-not-allowed' : ''}`}
                onClick={handleNextPage}
                disabled={currentPage === catalogData.length - 1}
              >
                Trang sau <i className="fas fa-chevron-right"></i>
              </button>
            </div>
          </div>
          
          {/* Sidebar */}
          <div className="lg:w-1/4 bg-black-light rounded-xl p-6 border border-gold/20">
            <h3 className="text-xl font-bold text-gold mb-6 pb-3 border-b border-gold/30">Danh mục vật liệu</h3>
            <ul className="space-y-3">
              {catalogData.map((item, index) => (
                <li 
                  key={item.id}
                  className={`p-4 rounded-lg cursor-pointer transition-all ${index === currentPage ? 'bg-gold/10 text-gold border-l-4 border-gold' : 'hover:bg-gold/5 hover:text-gold'}`}
                  onClick={() => setCurrentPage(index)}
                >
                  <div className="flex items-center gap-3">
                    <i className={`${item.icon} text-gold`}></i>
                    <span>{item.title}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Catalog