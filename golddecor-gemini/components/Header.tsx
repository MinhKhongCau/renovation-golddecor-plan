
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header: React.FC = () => {
  const location = useLocation();

  const navLinks = [
    { name: 'Trang chủ', path: '/' },
    { name: 'Công trình của chúng tôi', path: '/projects' },
    { name: 'Vật liệu', path: '/catalog' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-md z-50 border-b border-mocha-200">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link to="/" className="text-3xl font-serif font-bold tracking-tighter text-mocha-700">
          Gold<span className="text-gold">decor</span>
        </Link>

        <nav className="hidden md:flex space-x-12">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-sm font-medium tracking-wide uppercase transition-colors hover:text-gold ${
                location.pathname === link.path ? 'text-gold' : 'text-mocha-500'
              }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        <div className="flex items-center space-x-4">
          <button className="hidden md:block px-6 py-2 border border-gold text-gold text-xs font-bold uppercase tracking-widest hover:bg-gold hover:text-white transition-all duration-300">
            Liên hệ tư vấn
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
