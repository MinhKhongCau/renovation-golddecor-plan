import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Home from './pages/Home'
import Projects from './pages/Projects'
import ProjectDetailPage from './pages/ProjectDetailPage'

function App() {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/:id" element={<ProjectDetailPage />} />
      </Routes>
      
      <footer className="bg-black-light border-t border-gold/20 mt-20 py-10">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h2 className="text-2xl font-bold text-gold mb-4">GOLDDECOR</h2>
              <p className="text-gray-400">Thiết kế & Thi công nội thất cao cấp</p>
            </div>
            <div className="space-y-3">
              <p className="flex items-center gap-3 text-gray-300">
                <i className="fas fa-map-marker-alt text-gold"></i>
                123 Đường Vàng, Quận 1, TP.HCM
              </p>
              <p className="flex items-center gap-3 text-gray-300">
                <i className="fas fa-phone text-gold"></i>
                (028) 1234 5678
              </p>
              <p className="flex items-center gap-3 text-gray-300">
                <i className="fas fa-envelope text-gold"></i>
                info@golddecor.vn
              </p>
            </div>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center hover:bg-gold/20 transition-colors">
                <i className="fab fa-facebook text-gold"></i>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center hover:bg-gold/20 transition-colors">
                <i className="fab fa-instagram text-gold"></i>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center hover:bg-gold/20 transition-colors">
                <i className="fab fa-pinterest text-gold"></i>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center hover:bg-gold/20 transition-colors">
                <i className="fab fa-youtube text-gold"></i>
              </a>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-6 text-center text-gray-500">
            <p>&copy; 2023 GoldDecor. Tất cả các quyền được bảo lưu.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App