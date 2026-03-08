import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin } from 'lucide-react';
import SectionTitle from '@/components/ui/SectionTitle';
import { useToast } from '@/components/ui/use-toast';

const ContactPage = () => {
  const { toast } = useToast();

  const handleSubmit = (e) => {
    e.preventDefault();
    toast({
      title: "🚧 Tính năng chưa được triển khai",
      description: "Tính năng này đang được phát triển. Vui lòng thử lại sau! 🚀"
    });
  };

  return (
    <>
      <Helmet>
        <title>Liên Hệ - Golddecor</title>
        <meta name="description" content="Liên hệ với đội ngũ của chúng tôi để thảo luận về dự án của bạn" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-[#1a1a1a] via-black to-[#1a1a1a] pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle subtitle="Chúng tôi luôn lắng nghe bạn">
            Liên Hệ
          </SectionTitle>

          <div className="grid md:grid-cols-2 gap-12" id="contact-section">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-2xl font-serif font-semibold text-white mb-6">
                Thông Tin Liên Lạc
              </h3>
              
              <div className="space-y-6 mb-8">
                <div className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 text-[#D4AF37] flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="text-white font-semibold mb-1">Địa Chỉ</h4>
                    <p className="text-gray-400">164/42 Nguyễn Hữu Tiến, Phường Tây Thạnh, Quận Tân Phú, <br />TP. Hồ Chí Minh, Việt Nam</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Phone className="w-6 h-6 text-[#D4AF37] flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="text-white font-semibold mb-1">Điện Thoại</h4>
                    <p className="text-gray-400">(+84) 931968679</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Mail className="w-6 h-6 text-[#D4AF37] flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="text-white font-semibold mb-1">Email</h4>
                    <p className="text-gray-400">Gold.decor.nt@gmail.com</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-white mb-2">Họ Tên</label>
                  <input
                    type="text"
                    className="w-full bg-gray-900 border border-gray-700 rounded px-4 py-3 text-white focus:border-[#D4AF37] focus:outline-none transition-colors"
                    required
                  />
                </div>

                <div>
                  <label className="block text-white mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full bg-gray-900 border border-gray-700 rounded px-4 py-3 text-white focus:border-[#D4AF37] focus:outline-none transition-colors"
                    required
                  />
                </div>

                <div>
                  <label className="block text-white mb-2">Nội Dung</label>
                  <textarea
                    rows={5}
                    className="w-full bg-gray-900 border border-gray-700 rounded px-4 py-3 text-white focus:border-[#D4AF37] focus:outline-none transition-colors resize-none"
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#D4AF37] text-black font-semibold py-3 rounded hover:bg-[#C5A028] transition-colors"
                >
                  Gửi Tin Nhắn
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactPage;