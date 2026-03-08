import React from 'react';
import { motion } from 'framer-motion';

const GoldButton = ({ children, onClick, className = '', variant = 'primary' }) => {
  const variants = {
    primary: 'bg-[#D4AF37] text-black hover:bg-[#C5A028]',
    outline: 'bg-transparent text-[#D4AF37] border-2 border-[#D4AF37] hover:bg-[#D4AF37] hover:text-black'
  };

  return (
    <motion.button
      onClick={onClick}
      className={`px-8 py-3 font-semibold rounded-sm transition-all duration-300 ${variants[variant]} ${className}`}
      whileHover={{ scale: 1.05, boxShadow: '0 10px 30px rgba(212, 175, 55, 0.3)' }}
      whileTap={{ scale: 0.95 }}
    >
      {children}
    </motion.button>
  );
};

export default GoldButton;