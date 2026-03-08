
import React from 'react';
import { Link } from 'react-router-dom';
import { projects } from '../data';

const Projects: React.FC = () => {
  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-serif font-bold text-mocha-700 mb-4">Công Trình Của Chúng Tôi</h1>
          <div className="w-24 h-1 bg-gold mx-auto"></div>
          <p className="mt-6 text-mocha-400 max-w-xl mx-auto uppercase tracking-widest text-xs font-bold">
            Khám phá những dự án tiêu biểu đã được Golddecor thực hiện
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12">
          {projects.map((project) => (
            <Link 
              key={project.id} 
              to={`/projects/${project.id}`}
              className="group block relative overflow-hidden"
            >
              <div className="aspect-[16/9] overflow-hidden">
                <img 
                  src={project.thumbnail} 
                  alt={project.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="mt-6">
                <span className="text-gold text-xs font-bold uppercase tracking-widest mb-2 block">{project.category}</span>
                <h3 className="text-2xl font-serif font-bold text-mocha-700 group-hover:text-gold transition-colors">{project.name}</h3>
                <div className="mt-4 flex items-center text-mocha-400 text-sm font-medium">
                  <span>Xem chi tiết</span>
                  <svg className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
