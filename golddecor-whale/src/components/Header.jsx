import { Link } from 'react-router-dom'

function Header() {
  return (
    <header className="fixed top-0 left-0 w-full bg-black/95 backdrop-blur-md z-50 border-b border-gold/30 py-4">
      <div className="container">
        <div className="flex justify-between items-center">
          <div className="logo">
            <Link to="/">
              <h1 className="text-2xl font-bold text-gold">GOLDDECOR</h1>
              <p className="text-xs text-gray-400 tracking-wider">Nội thất đẳng cấp vàng</p>
            </Link>
          </div>
          
          <nav className="hidden md:block">
            <ul className="flex gap-8">
              <li>
                <Link to="/" className="text-gray-200 hover:text-gold transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-gold after:transition-all hover:after:w-full">
                  Trang chủ
                </Link>
              </li>
              <li>
                <Link to="/projects" className="text-gray-200 hover:text-gold transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-gold after:transition-all hover:after:w-full">
                  Công trình của chúng tôi
                </Link>
              </li>
              <li>
                <a href="#catalog" className="text-gray-200 hover:text-gold transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-gold after:transition-all hover:after:w-full">
                  Catalog vật liệu
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-200 hover:text-gold transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-gold after:transition-all hover:after:w-full">
                  Về chúng tôi
                </a>
              </li>
            </ul>
          </nav>
          
          <div className="header-actions">
            <button className="btn-primary">
              <i className="fas fa-phone-alt"></i> Liên hệ tư vấn
            </button>
          </div>
          
          {/* Mobile menu button */}
          <button className="md:hidden text-gold text-xl">
            <i className="fas fa-bars"></i>
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header