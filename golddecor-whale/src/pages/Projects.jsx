import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { projects } from '../data/projects'

function Projects() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <main className="pt-24 pb-20">
      <div className="container">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gold mb-4">Công Trình Của Chúng Tôi</h1>
          <p className="text-gray-400 text-xl max-w-3xl mx-auto">
            Khám phá những dự án tiêu biểu mà GoldDecor đã thực hiện trong nhiều năm qua
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map(project => (
            <Link 
              key={project.id} 
              to={`/projects/${project.id}`}
              className="group bg-black-light rounded-xl overflow-hidden card-hover border border-gold/10"
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={project.thumbnail} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-4 left-4">
                  <span className="inline-block bg-gold/20 text-gold text-xs font-semibold px-3 py-1 rounded-full mb-2">
                    {project.category}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-gold transition-colors">
                  {project.title}
                </h3>
                <div className="flex justify-between text-gray-400 text-sm">
                  <span className="flex items-center gap-1">
                    <i className="fas fa-map-marker-alt"></i>
                    {project.location}
                  </span>
                  <span className="flex items-center gap-1">
                    <i className="fas fa-ruler-combined"></i>
                    {project.area}
                  </span>
                </div>
                
                <div className="mt-4 pt-4 border-t border-gray-800">
                  <div className="flex items-center text-gold text-sm">
                    <span>Xem chi tiết</span>
                    <i className="fas fa-arrow-right ml-2 transform group-hover:translate-x-2 transition-transform"></i>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
        
        {/* More projects coming soon */}
        <div className="mt-16 p-8 bg-black-light rounded-xl border border-gold/10 text-center">
          <h3 className="text-2xl font-bold text-gold mb-4">Nhiều công trình hơn đang được cập nhật</h3>
          <p className="text-gray-400 mb-6">
            Chúng tôi liên tục thực hiện các dự án mới. Theo dõi chúng tôi để cập nhật những công trình mới nhất.
          </p>
          <button className="btn-outline">
            <i className="fas fa-envelope"></i> Nhận thông báo dự án mới
          </button>
        </div>
      </div>
    </main>
  )
}

export default Projects