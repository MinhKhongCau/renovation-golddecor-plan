import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, X, ZoomIn } from 'lucide-react';
import { projectsData } from '@/data/projectsData';
import GoldButton from '@/components/ui/GoldButton';

const ProjectDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [project, setProject] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    const foundProject = projectsData.find(p => p.id === parseInt(id));
    if (foundProject) {
      setProject(foundProject);
    } else {
      navigate('/projects');
    }
  }, [id, navigate]);

  if (!project) return null;

  return (
    <>
      <Helmet>
        <title>{`${project.name} - Golddecor`}</title>
        <meta name="description" content={project.description} />
      </Helmet>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-black/95 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <button
              className="absolute top-4 right-4 text-white hover:text-[#D4AF37] transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              <X size={40} />
            </button>
            <motion.img
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              src={selectedImage}
              alt="Detail view"
              className="max-w-full max-h-[90vh] object-contain rounded-sm shadow-2xl border border-[#D4AF37]/30"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>

      <div className="min-h-screen bg-black pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.button
            onClick={() => navigate('/projects')}
            className="flex items-center gap-2 text-gray-400 hover:text-[#D4AF37] transition-colors mb-8"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <ArrowLeft size={20} />
            Quay lại danh sách
          </motion.button>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">
              {project.name}
            </h1>
            
            <div className="relative aspect-video w-full overflow-hidden rounded-xl shadow-2xl mb-12 group">
              <img
                src={project.thumbnail}
                alt={project.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
              <div className="lg:col-span-2">
                <h2 className="text-2xl font-serif font-semibold text-[#D4AF37] mb-4">
                  Chi Tiết Dự Án
                </h2>
                <p className="text-xl text-gray-300 leading-relaxed font-light">
                  {project.description}
                </p>
              </div>
              <div className="bg-[#1a1a1a] p-8 rounded-xl border border-gray-800 h-fit">
                <h3 className="text-white font-semibold mb-4 border-b border-gray-700 pb-2">Thông tin</h3>
                <ul className="space-y-4 text-gray-400">
                  <li className="flex justify-between">
                    <span>Trạng thái:</span>
                    <span className="text-white">Hoàn thành</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Dịch vụ:</span>
                    <span className="text-white">Thiết kế & Thi công</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Năm:</span>
                    <span className="text-white">2023</span>
                  </li>
                </ul>
                <GoldButton className="w-full mt-8" onClick={() => navigate('/contact')}>
                  Liên hệ tư vấn
                </GoldButton>
              </div>
            </div>

            <div className="mb-12">
              <h2 className="text-3xl font-serif font-bold text-white mb-8 text-center">
                Hình Ảnh Chi Tiết
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {project.images.map((img, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="relative group cursor-pointer overflow-hidden rounded-lg aspect-[4/3]"
                    onClick={() => setSelectedImage(img)}
                  >
                    <img
                      src={img}
                      alt={`Detail ${index + 1}`}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <ZoomIn className="text-[#D4AF37] w-10 h-10" />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default ProjectDetailPage;