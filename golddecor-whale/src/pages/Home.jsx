import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Catalog from '../components/Catalog'
import ProjectGallery from '../components/ProjectGallery'
import ContactForm from '../components/ContactForm'

function Home() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <main className="pt-16">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40"
          style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1613545325278-f24b0cae1224?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80)' }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent"></div>
        
        <div className="container relative z-10">
          <div className="max-w-2xl">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-in">
              Nội Thất <span className="text-gold">Đẳng Cấp Vàng</span>
            </h1>
            <p className="text-xl text-gray-300 mb-10 animate-slide-up">
              Biến không gian sống của bạn thành tác phẩm nghệ thuật với thiết kế sang trọng và vật liệu cao cấp
            </p>
            <div className="flex gap-4 animate-slide-up">
              <Link to="/projects" className="btn-primary">
                <i className="fas fa-eye"></i> Xem công trình
              </Link>
              <a href="#catalog" className="btn-outline">
                <i className="fas fa-book"></i> Catalog vật liệu
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <ProjectGallery limit={3} />

      {/* About Section */}
      <section id="about" className="py-20 bg-black-light">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gold mb-6">Về GoldDecor</h2>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Với hơn 15 năm kinh nghiệm trong lĩnh vực thiết kế và thi công nội thất cao cấp, GoldDecor tự hào là đơn vị tiên phong trong việc áp dụng công nghệ 3D và vật liệu cao cấp vào từng công trình.
              </p>
              <p className="text-gray-300 mb-8 leading-relaxed">
                Chúng tôi tin rằng mỗi không gian sống là một tác phẩm nghệ thuật, và mỗi khách hàng xứng đáng được trải nghiệm sự sang trọng và tiện nghi đỉnh cao.
              </p>
              <div className="grid grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-gold mb-2">15+</div>
                  <div className="text-gray-400 text-sm">Năm kinh nghiệm</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-gold mb-2">200+</div>
                  <div className="text-gray-400 text-sm">Công trình hoàn thành</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-gold mb-2">50+</div>
                  <div className="text-gray-400 text-sm">Đối tác quốc tế</div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="relative rounded-xl overflow-hidden h-96">
                <img 
                  src="https://images.unsplash.com/photo-1600607686527-6fb886090705?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
                  alt="Về chúng tôi" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              </div>
              <div className="absolute -bottom-6 -left-6 w-64 h-64 bg-gold/10 rounded-xl border border-gold/20"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Catalog Section */}
      <Catalog />

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-black">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="section-title">Liên Hệ Với Chúng Tôi</h2>
            <p className="section-subtitle">Để lại thông tin để được tư vấn và báo giá miễn phí</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <ContactForm />
            </div>
            
            <div>
              <div className="bg-black-light rounded-xl p-8 border border-gold/10 h-full">
                <h3 className="text-3xl font-bold text-gold mb-6">Tại sao chọn GoldDecor?</h3>
                
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center flex-shrink-0">
                      <i className="fas fa-award text-gold text-xl"></i>
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-white mb-2">Chất lượng đỉnh cao</h4>
                      <p className="text-gray-300">
                        Sử dụng vật liệu cao cấp nhập khẩu, đảm bảo độ bền và thẩm mỹ vượt thời gian.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center flex-shrink-0">
                      <i className="fas fa-users text-gold text-xl"></i>
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-white mb-2">Đội ngũ chuyên gia</h4>
                      <p className="text-gray-300">
                        Kiến trúc sư và kỹ sư giàu kinh nghiệm, được đào tạo chuyên sâu tại nước ngoài.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center flex-shrink-0">
                      <i className="fas fa-shield-alt text-gold text-xl"></i>
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-white mb-2">Bảo hành dài hạn</h4>
                      <p className="text-gray-300">
                        Bảo hành vật liệu và thi công lên đến 5 năm, cam kết chất lượng lâu dài.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center flex-shrink-0">
                      <i className="fas fa-clock text-gold text-xl"></i>
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-white mb-2">Thi công đúng tiến độ</h4>
                      <p className="text-gray-300">
                        Cam kết hoàn thành đúng thời hạn, không phát sinh chi phí ngoài dự kiến.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-10 pt-8 border-t border-gray-800">
                  <h4 className="text-xl font-bold text-white mb-4">Địa chỉ văn phòng</h4>
                  <div className="bg-black/50 p-6 rounded-lg">
                    <div className="flex items-start gap-3 mb-4">
                      <i className="fas fa-map-marker-alt text-gold mt-1"></i>
                      <div>
                        <p className="text-white font-medium">Trụ sở chính</p>
                        <p className="text-gray-300">123 Đường Vàng, Phường Bến Nghé, Quận 1, TP.HCM</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <i className="fas fa-phone text-gold"></i>
                      <span className="text-gray-300">(028) 1234 5678</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Home