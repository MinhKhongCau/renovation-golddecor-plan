import React from 'react';
import { motion } from 'framer-motion';
import SpecificationItem from './ui/SpecificationItem';

const MaterialPage = ({ material, side = 'left' }) => {
  if (!material) {
    return (
      <div className="w-full h-full bg-gradient-to-br from-gray-900 to-black flex items-center justify-center">
        <p className="text-gray-500 text-lg">Không có nội dung</p>
      </div>
    );
  }

  if (side === 'left') {
    return (
      <div className="w-full h-full bg-gradient-to-br from-gray-900 to-black p-8 flex flex-col justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="relative"
        >
          <img
            src={material.image}
            alt={material.name}
            className="w-full h-[500px] object-cover rounded-lg shadow-2xl"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 rounded-b-lg">
            <span className="text-[#D4AF37] text-sm font-semibold uppercase tracking-wider">
              {material.category}
            </span>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="w-full h-full bg-gradient-to-br from-black to-gray-900 p-8 flex flex-col justify-center overflow-y-auto">
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-4">
          {material.name}
        </h2>
        
        <p className="text-gray-300 leading-relaxed mb-8">
          {material.projectDescription}
        </p>

        <div className="space-y-1">
          <h3 className="text-xl font-serif font-semibold text-[#D4AF37] mb-4">
            Thông Số Kỹ Thuật
          </h3>
          {Object.entries(material.specifications).map(([key, value]) => (
            <SpecificationItem
              key={key}
              label={key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}
              value={value}
            />
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default MaterialPage;