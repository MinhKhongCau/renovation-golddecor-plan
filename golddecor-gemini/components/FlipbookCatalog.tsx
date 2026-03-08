
import React, { useState } from 'react';
import { materialCatalog } from '../data';

const FlipbookCatalog: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(0);

  const nextPage = () => {
    if (currentPage < materialCatalog.length - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  const item = materialCatalog[currentPage];

  return (
     <div className="max-w-5xl mx-auto py-8 md:py-12 px-4">
      {/* Header Section */}
      <div className="text-center mb-8 md:mb-12">
        <h2 className="text-2xl md:text-4xl font-serif font-bold text-mocha-700 mb-2 md:mb-4">
          Catalog Vật Liệu
        </h2>
        <p className="text-mocha-400 text-sm md:text-base">
          Khám phá tinh hoa vật liệu trong từng thiết kế của Golddecor
        </p>
      </div>
    
      {/* Main Catalog Container */}
      <div className="relative flex flex-col md:flex-row bg-mocha-100 rounded-lg book-shadow overflow-hidden border-4 md:border-8 border-mocha-700 min-h-[200px] md:aspect-[16/10]">
        
        {/* Left Side (Image) - Ẩn trên điện thoại, hiện từ máy tính bảng trở lên */}
        <div className="md:block md:w-1/2 h-64 md:h-full border-b md:border-b-0 md:border-r border-mocha-200/50 relative overflow-hidden bg-mocha-50">
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-full object-cover transition-opacity duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent"></div>
        </div>
    
        {/* Right Side (Content) */}
        <div className="w-full md:w-1/2 flex flex-col justify-center bg-white p-6 md:p-12 relative">
          {/* Hiệu ứng gáy sách - Chỉ hiện trên desktop */}
          <div className="hidden md:block absolute left-0 top-0 bottom-0 w-px bg-mocha-200 shadow-[2px_0_10px_rgba(0,0,0,0.1)]"></div>
    
          {/* Số trang - Ẩn trên điện thoại */}
          <span className="hidden md:block text-gold text-xs font-bold uppercase tracking-widest mb-4">
            Trang {currentPage + 1}
          </span>
    
          {/* Tiêu đề - Luôn hiện, căn giữa trên điện thoại */}
          <h3 className="text-xl md:text-3xl font-serif font-bold text-mocha-700 mb-4 md:mb-6 text-center md:text-left">
            {item.title}
          </h3>
    
          {/* Phần nội dung chi tiết - Ẩn hoàn toàn trên điện thoại (sm), hiện từ md trở lên */}
          <div className="hidden md:block">
            <p className="text-mocha-500 leading-relaxed mb-8 italic text-sm md:text-base">
              "{item.description}"
            </p>
    
            <div className="space-y-3">
              <h4 className="text-xs font-bold uppercase text-mocha-700 tracking-wider">
                Thông số kỹ thuật:
              </h4>
              {item.specs.map((spec, idx) => (
                <div key={idx} className="flex items-center text-sm text-mocha-500">
                  <div className="w-2 h-2 rounded-full bg-gold mr-3 flex-shrink-0"></div>
                  {spec}
                </div>
              ))}
            </div>
          </div>
    
          {/* Navigation Buttons - Tối ưu vị trí cho Mobile */}
          <div className="mt-6 md:absolute md:bottom-8 md:right-12 flex items-center justify-center md:justify-end space-x-6">
            <button
              onClick={prevPage}
              disabled={currentPage === 0}
              className={`p-2 rounded-full border border-mocha-200 transition-all ${
                currentPage === 0
                  ? "opacity-30 cursor-not-allowed"
                  : "hover:border-gold hover:text-gold"
              }`}
            >
              <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            
            {/* Hiển thị số trang dạng x/y trên mobile thay cho text dài */}
            <span className="md:hidden text-xs font-bold text-mocha-400">
              {currentPage + 1} / {materialCatalog.length}
            </span>
    
            <button
              onClick={nextPage}
              disabled={currentPage === materialCatalog.length - 1}
              className={`p-2 rounded-full border border-mocha-200 transition-all ${
                currentPage === materialCatalog.length - 1
                  ? "opacity-30 cursor-not-allowed"
                  : "hover:border-gold hover:text-gold"
              }`}
            >
              <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div> 
  );
};

export default FlipbookCatalog;
