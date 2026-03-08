import { Link } from 'react-router-dom'
import { projects } from '../data/projects'

function ProjectGallery({ limit = 3 }) {
  const displayedProjects = limit ? projects.slice(0, limit) : projects

  return (
    <section className="py-20 bg-black">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="section-title">Công Trình Tiêu Biểu</h2>
          <p className="section-subtitle">Khám phá những công trình đẳng cấp chúng tôi đã thực hiện</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {displayedProjects.map(project => (
            <div key={project.id} className="bg-black-light rounded-xl overflow-hidden card-hover border border-gold/10">
              <div className="relative h-64 overflow-hidden group">
                <img 
                  src={project.thumbnail} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <span className="inline-block bg-gold/20 text-gold text-xs font-semibold px-3 py-1 rounded-full mb-2">
                      {project.category}
                    </span>
                    <h3 className="text-xl font-bold text-white">{project.title}</h3>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
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
                </div>
                
                <Link 
                  to={`/projects/${project.id}`} 
                  className="btn-outline w-full justify-center group"
                >
                  <i className="fas fa-eye"></i> Xem chi tiết
                  <i className="fas fa-arrow-right ml-2 transform group-hover:translate-x-2 transition-transform"></i>
                </Link>
              </div>
            </div>
          ))}
        </div>
        
        {limit && (
          <div className="text-center">
            <Link to="/projects" className="btn-primary inline-flex items-center gap-2 group">
              Xem tất cả công trình 
              <i className="fas fa-arrow-right transform group-hover:translate-x-2 transition-transform"></i>
            </Link>
          </div>
        )}
      </div>
    </section>
  )
}

export default ProjectGallery