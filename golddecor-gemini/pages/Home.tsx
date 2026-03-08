
import React from 'react';
import { Link } from 'react-router-dom';
import FlipbookCatalog from '../components/FlipbookCatalog';

const Home: React.FC = () => {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative h-[85vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://picsum.photos/seed/home/1920/1080" 
            alt="Hero" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-mocha-700/40"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-6 w-full text-white">
          <div className="max-w-2xl">
            <h4 className="text-gold font-bold uppercase tracking-widest mb-4">Kiến Tạo Không Gian</h4>
            <h1 className="text-6xl md:text-8xl font-serif font-bold mb-8 leading-tight">
              Sang Trọng <br/> & Tinh Tế
            </h1>
            <p className="text-lg text-mocha-100 mb-10 leading-relaxed font-light">
              Golddecor mang đến giải pháp thi công nội thất toàn diện, kết hợp hài hòa giữa chất liệu Mocha ấm áp và phong cách sống hiện đại.
            </p>
            <div className="flex space-x-6">
              <Link to="/projects" className="bg-gold hover:bg-gold-low text-white px-8 py-4 text-sm font-bold uppercase tracking-widest transition-all">
                Xem công trình
              </Link>
              <Link to="/catalog" className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/30 px-8 py-4 text-sm font-bold uppercase tracking-widest transition-all">
                Vật liệu 3D
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Intro section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-20 items-center">
          <div>
            <div className="relative">
              <img src="https://picsum.photos/seed/intro1/800/1000" alt="Interior" className="w-full rounded-sm" />
              <div className="absolute -bottom-10 -right-10 w-64 h-64 border-8 border-mocha-200 -z-10"></div>
            </div>
          </div>
          <div>
            <h2 className="text-4xl font-serif font-bold text-mocha-700 mb-8">Triết lý của Golddecor</h2>
            <p className="text-mocha-500 mb-6 leading-relaxed">
              Chúng tôi tin rằng ngôi nhà không chỉ là nơi để ở, mà là tác phẩm nghệ thuật phản chiếu tâm hồn gia chủ. Với sự am hiểu sâu sắc về màu sắc và vật liệu, Golddecor tự hào kiến tạo nên những không gian sống đầy cảm hứng.
            </p>
            <div className="grid grid-cols-2 gap-8 mt-12">
              <div>
                <span className="block text-3xl font-serif font-bold text-gold mb-2">10+</span>
                <span className="text-xs uppercase tracking-widest font-bold text-mocha-400">Năm kinh nghiệm</span>
              </div>
              <div>
                <span className="block text-3xl font-serif font-bold text-gold mb-2">500+</span>
                <span className="text-xs uppercase tracking-widest font-bold text-mocha-400">Công trình hoàn thiện</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Catalog Preview */}
      <section id="catalog" className="py-24 bg-mocha-50">
        <FlipbookCatalog />
      </section>
    </div>
  );
};

export default Home;
