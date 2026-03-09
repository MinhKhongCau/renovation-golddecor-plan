import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Award, Shield, Sparkles, ArrowRight, ArrowUpRight, Phone } from 'lucide-react';
import GoldButton from '@/components/ui/GoldButton';
import SectionTitle from '@/components/ui/SectionTitle';
import { materialsData } from '@/data/materialsData';
import { projectsData } from '@/data/projectsData';
const HomePage = () => {
  const navigate = useNavigate();
  const handleContactClick = () => {
    navigate('/contact');
    setTimeout(() => {
      const contactSection = document.getElementById('contact-section');
      if (contactSection) {
        contactSection.scrollIntoView({
          behavior: 'smooth'
        });
      } else {
        window.scrollTo(0, 0);
      }
    }, 100);
  };
  const features = [{
    icon: <Award className="w-12 h-12" />,
    title: "Chất Lượng Thượng Hạng",
    description: "Được tuyển chọn từ những nhà cung cấp tốt nhất trên toàn thế giới, đảm bảo tiêu chuẩn vượt trội"
  }, {
    icon: <Shield className="w-12 h-12" />,
    title: "Vật Liệu Được Chứng Nhận",
    description: "Tất cả sản phẩm đều đạt các chứng nhận chất lượng và an toàn quốc tế"
  }, {
    icon: <Sparkles className="w-12 h-12" />,
    title: "Vẻ Đẹp Vượt Thời Gian",
    description: "Những thiết kế vượt qua mọi xu hướng và nâng tầm mọi không gian"
  }];
  return <>
      <Helmet>
        <title>GOLDDECOR - Vật Liệu Xây Dựng & Nội Thất Cao Cấp</title>
        <meta name="description" content="Khám phá chất lượng vượt trội trong từng chi tiết. Golddecor cung cấp vật liệu xây dựng cao cấp và nội thất sang trọng cho các dự án đẳng cấp." />
      </Helmet>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1633132689233-49c6ba4d84c3" alt="Luxury interior" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/90" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{
          opacity: 0,
          y: 30
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.8
        }}>
            <motion.h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-white mb-6" initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            delay: 0.2,
            duration: 0.8
          }}>
              Chất Lượng Đỉnh Cao
              <span className="block text-[#D4AF37] mt-2">Trong Từng Chi Tiết</span>
            </motion.h1>

            <motion.p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-4 max-w-3xl mx-auto leading-relaxed px-4" initial={{
            opacity: 0
          }} animate={{
            opacity: 1
          }} transition={{
            delay: 0.4,
            duration: 0.8
          }}>
              Nâng tầm dự án của bạn với những vật liệu cao cấp thể hiện sự tinh tế và vẻ đẹp bền vững
            </motion.p>

            <motion.p className="text-base sm:text-lg text-gray-400 mb-12 max-w-2xl mx-auto px-4" initial={{
            opacity: 0
          }} animate={{
            opacity: 1
          }} transition={{
            delay: 0.6,
            duration: 0.8
          }}>
              Từ sàn đá sang trọng đến các chi tiết hoàn thiện tinh xảo, chúng tôi cung cấp những vật liệu tốt nhất cho kiến trúc sư, nhà thiết kế và những gia chủ yêu cầu sự hoàn hảo.
            </motion.p>

            <motion.div initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            delay: 0.8,
            duration: 0.8
          }} className="flex flex-col sm:flex-row gap-4 justify-center px-4">
              <GoldButton onClick={() => navigate('/catalog')} className="text-base md:text-lg px-8 py-3 md:px-10 md:py-4">
                Khám Phá Catalog
                <ArrowRight className="inline-block ml-2 w-5 h-5" />
              </GoldButton>
              <GoldButton onClick={handleContactClick} variant="outline" className="text-base md:text-lg px-8 py-3 md:px-10 md:py-4 border-2 hover:bg-[#D4AF37] hover:text-black hover:border-[#D4AF37] bg-black/30 backdrop-blur-sm">
                Liên Hệ Tư Vấn
                <Phone className="inline-block ml-2 w-5 h-5" />
              </GoldButton>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div className="absolute bottom-8 left-1/2 transform -translate-x-1/2" animate={{
        y: [0, 10, 0]
      }} transition={{
        repeat: Infinity,
        duration: 2
      }}>
          <div className="w-6 h-10 border-2 border-[#D4AF37] rounded-full p-1">
            <motion.div className="w-1 h-2 bg-[#D4AF37] rounded-full mx-auto" animate={{
            y: [0, 16, 0]
          }} transition={{
            repeat: Infinity,
            duration: 2
          }} />
          </div>
        </motion.div>
      </section>

      {/* About Company Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-[#1a1a1a] to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle subtitle="Thi Công Nội Thất Chất Lượng Cao">
            Về GOLDDECOR
          </SectionTitle>

          <motion.div initial={{
          opacity: 0,
          y: 30
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.8
        }} className="max-w-4xl mx-auto text-center">
            <p className="text-base md:text-lg text-gray-300 leading-relaxed mb-6">Công ty GOLD-DECOR hoạt động trong lĩnh vực xây dựng, trong đó thiết kế kiến trúc là dịch vụ chủ đạo, là định hướng cho thương hiệu của GOLDDECOR.Công ty đã triển khai thành công rất nhiều dự án cho khách hàng bao gồm các công trình như: biệt thự và nhà phố, khách sạn, homestay… Chúng tôi tin tưởng Công Ty GOLD-DECOR có thể tư vấn và đáp ứng được mọi nhu cầu của khách hàng trong lĩnh vực Tư vấn thiết kế kiến trúc.</p>
            <p className="text-base md:text-lg text-gray-300 leading-relaxed">
              Chúng tôi tuyển chọn vật liệu từ những mỏ đá, nhà máy và nhà sản xuất tốt nhất thế giới, 
              đảm bảo rằng mỗi sản phẩm đều đáp ứng các tiêu chuẩn khắt khe nhất. Từ ý tưởng đến hoàn thiện, 
              chúng tôi tận tâm giúp bạn tạo ra những không gian truyền cảm hứng và trường tồn.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 md:py-24 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle subtitle="Điều tạo nên sự khác biệt">
            Tại Sao Chọn Chúng Tôi
          </SectionTitle>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => <motion.div key={index} initial={{
            opacity: 0,
            y: 30
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.6,
            delay: index * 0.2
          }} whileHover={{
            y: -10
          }} className="bg-gradient-to-br from-gray-900 to-gray-800 p-8 rounded-lg border border-gray-800 hover:border-[#D4AF37] transition-all duration-300">
                <div className="text-[#D4AF37] mb-4 flex justify-center md:justify-start">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-serif font-semibold text-white mb-3 text-center md:text-left">
                  {feature.title}
                </h3>
                <p className="text-gray-400 leading-relaxed text-center md:text-left">
                  {feature.description}
                </p>
              </motion.div>)}
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-16 md:py-24 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle subtitle="Những dự án tiêu biểu">
            Công Trình Nổi Bật
          </SectionTitle>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {projectsData.slice(0, 8).map((project, index) => <motion.div key={project.id} initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.5,
            delay: index * 0.1
          }} className="group relative cursor-pointer" onClick={() => navigate(`/projects/${project.id}`)}>
                <div className="relative h-[250px] sm:h-[300px] overflow-hidden rounded-xl shadow-lg">
                  <img src={project.thumbnail} alt={project.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80 group-hover:opacity-100 transition-all duration-300" />
                  
                  <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-xl font-serif font-bold text-white mb-2 group-hover:text-[#D4AF37] transition-colors flex items-center gap-2">
                      {project.name}
                      <ArrowUpRight className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </h3>
                  </div>
                </div>
              </motion.div>)}
          </div>

          <div className="text-center">
            <GoldButton onClick={() => navigate('/projects')} variant="outline" className="px-8 py-3 text-sm md:text-base md:px-10 md:py-4">
              Khám Phá Công Trình
            </GoldButton>
          </div>
        </div>
      </section>

      {/* Featured Materials Preview */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-[#1a1a1a] to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle subtitle="Một cái nhìn về bộ sưu tập">
            Vật Liệu Nổi Bật
          </SectionTitle>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {materialsData.slice(0, 4).map((material, index) => <motion.div key={material.id} initial={{
            opacity: 0,
            scale: 0.9
          }} whileInView={{
            opacity: 1,
            scale: 1
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.5,
            delay: index * 0.1
          }} whileHover={{
            scale: 1.05
          }} className="group cursor-pointer">
                <div className="relative overflow-hidden rounded-lg shadow-xl">
                  <img src={material.image} alt={material.name} className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <p className="text-[#D4AF37] text-sm font-semibold mb-1">
                        {material.category}
                      </p>
                      <h4 className="text-white font-serif text-lg">
                        {material.name}
                      </h4>
                    </div>
                  </div>
                </div>
              </motion.div>)}
          </div>

          <motion.div initial={{
          opacity: 0
        }} whileInView={{
          opacity: 1
        }} viewport={{
          once: true
        }} className="text-center">
            <GoldButton onClick={() => navigate('/catalog')} className="text-base md:text-lg px-8 py-3 md:px-10 md:py-4">
              Xem Toàn Bộ Catalog
            </GoldButton>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{
          opacity: 0,
          y: 30
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.8
        }}>
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-6">
              Sẵn Sàng Thay Đổi Không Gian Của Bạn?
            </h2>
            <p className="text-lg md:text-xl text-gray-300 mb-8 px-4">
              Khám phá catalog của chúng tôi hoặc liên hệ với đội ngũ chuyên gia để thảo luận về dự án của bạn
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center px-4">
              <GoldButton onClick={() => navigate('/catalog')} className="w-full sm:w-auto">
                Duyệt Catalog
              </GoldButton>
              <GoldButton variant="outline" onClick={() => navigate('/contact')} className="w-full sm:w-auto">
                Liên Hệ Ngay
              </GoldButton>
            </div>
          </motion.div>
        </div>
      </section>
    </>;
};
export default HomePage;