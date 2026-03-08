import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import SectionTitle from '@/components/ui/SectionTitle';
import { projectsData } from '@/data/projectsData';

const ProjectsPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <Helmet>
        <title>Công Trình - Golddecor</title>
        <meta name="description" content="Khám phá các dự án nội thất đẳng cấp do Golddecor thực hiện" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-[#1a1a1a] via-black to-[#1a1a1a] pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle subtitle="Kiệt tác không gian sống">
            Công Trình Của Chúng Tôi
          </SectionTitle>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projectsData.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                onClick={() => navigate(`/projects/${project.id}`)}
                className="group cursor-pointer"
              >
                <div className="relative overflow-hidden rounded-xl shadow-lg aspect-[4/3] border border-gray-800">
                  <img
                    src={project.thumbnail}
                    alt={project.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-2xl font-serif font-bold text-white mb-2 group-hover:text-[#D4AF37] transition-colors">
                      {project.name}
                    </h3>
                    <div className="h-0.5 w-0 bg-[#D4AF37] group-hover:w-12 transition-all duration-300" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectsPage;