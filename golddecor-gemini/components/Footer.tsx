
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-mocha-700 text-mocha-100 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div>
            <h3 className="text-2xl font-serif font-bold mb-6 text-white">Golddecor</h3>
            <p className="text-mocha-300 leading-relaxed mb-6">
              Chuyên gia thiết kế và thi công nội thất cao cấp, mang đến không gian sống đẳng cấp và cá nhân hóa cho từng gia chủ.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-6 text-white">Liên hệ</h4>
            <ul className="space-y-4 text-mocha-300">
              <li>Địa chỉ: 123 Đường Sáng Tạo, Quận 2, TP. Hồ Chí Minh</li>
              <li>Hotline: 090 123 4567</li>
              <li>Email: info@golddecor.com</li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-6 text-white">Theo dõi</h4>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-gold transition-colors underline">Facebook</a>
              <a href="#" className="hover:text-gold transition-colors underline">Instagram</a>
              <a href="#" className="hover:text-gold transition-colors underline">Pinterest</a>
            </div>
          </div>
        </div>
        <div className="border-t border-mocha-600 pt-8 text-center text-sm text-mocha-400">
          &copy; {new Date().getFullYear()} Golddecor. All rights reserved. Design with passion.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
