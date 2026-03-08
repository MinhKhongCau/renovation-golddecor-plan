import React from 'react';
import { motion } from 'framer-motion';

const SectionTitle = ({ children, subtitle }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="text-center mb-12"
    >
      <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4">
        {children}
      </h2>
      <div className="w-24 h-1 bg-[#D4AF37] mx-auto mb-4"></div>
      {subtitle && (
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
};

export default SectionTitle;