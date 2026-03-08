
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { projects } from '../data';

const ProjectDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const project = projects.find(p => p.id === id);

  if (!project) {
    return (
      <div className="pt-40 pb-20 text-center">
        <h2 className="text-2xl font-serif mb-4">Không tìm thấy công trình</h2>
        <Link to="/projects" className="text-gold underline">Quay lại danh sách</Link>
      </div>
    );
  }

  return (
    <div className="pt-20">
      {/* Detail Hero */}
      <section className="relative h-[60vh]">
        <img src={project.thumbnail} alt={project.name} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <div className="text-center text-white px-6">
            <span className="text-gold text-sm font-bold uppercase tracking-[0.3em] mb-4 block">{project.category}</span>
            <h1 className="text-4xl md:text-6xl font-serif font-bold">{project.name}</h1>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex flex-col md:flex-row gap-12 mb-20">
            <div className="md:w-1/3">
              <h2 className="text-xl font-bold text-mocha-700 uppercase tracking-widest border-b border-mocha-200 pb-4 mb-4">Thông tin dự án</h2>
              <dl className="space-y-4">
                <div>
                  <dt className="text-xs font-bold text-mocha-400 uppercase">Khách hàng</dt>
                  <dd className="text-mocha-700">Tư nhân</dd>
                </div>
                <div>
                  <dt className="text-xs font-bold text-mocha-400 uppercase">Vị trí</dt>
                  <dd className="text-mocha-700">TP. Hồ Chí Minh</dd>
                </div>
                <div>
                  <dt className="text-xs font-bold text-mocha-400 uppercase">Phong cách</dt>
                  <dd className="text-mocha-700">Mocha Mousse Luxury</dd>
                </div>
              </dl>
            </div>
            <div className="md:w-2/3">
              <p className="text-mocha-500 leading-relaxed text-lg italic mb-6">
                {project.description}
              </p>
              <p className="text-mocha-400 leading-relaxed">
                Mọi chi tiết trong công trình đều được đội ngũ Golddecor chăm chút kỹ lưỡng, từ việc lựa chọn chất liệu gỗ tự nhiên đến các điểm nhấn mạ vàng tinh xảo, tạo nên một tổng thể hài hòa và đẳng cấp.
              </p>
            </div>
          </div>

          {/* Image Gallery */}
          <div className="space-y-12">
            {project.images.map((img, idx) => (
              <div key={idx} className="group overflow-hidden">
                <img 
                  src={img} 
                  alt={`${project.name} - ${idx + 1}`} 
                  className="w-full h-auto rounded-sm transition-transform duration-1000 group-hover:scale-[1.02]"
                />
              </div>
            ))}
          </div>

          <div className="mt-24 text-center">
            <Link to="/projects" className="inline-flex items-center text-mocha-700 font-bold uppercase tracking-widest hover:text-gold transition-colors">
              <svg className="mr-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16l-4-4m0 0l4-4m-4 4h18"/></svg>
              Quay lại danh sách công trình
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProjectDetail;
