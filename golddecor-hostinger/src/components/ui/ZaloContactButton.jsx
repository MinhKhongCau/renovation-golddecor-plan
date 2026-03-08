import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle } from 'lucide-react';

const ZaloContactButton = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleZaloClick = () => {
    // Open Zalo chat (using generic placeholder link for now as requested)
    window.open('https://zalo.me/0123456789', '_blank');
  };

  return (
    <div className="relative flex items-center">
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: -10 }}
            exit={{ opacity: 0, x: 20 }}
            className="absolute right-full bg-black border border-[#D4AF37] text-white text-sm px-3 py-1.5 rounded whitespace-nowrap mr-2 hidden md:block"
          >
            Liên hệ Zalo
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={handleZaloClick}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="bg-[#0068FF] border-2 border-[#0068FF] text-white p-3 rounded-full shadow-lg hover:bg-[#0054cc] transition-colors duration-300 flex items-center justify-center z-40 relative"
        aria-label="Contact via Zalo"
      >
        {/* Using standard Zalo blue color above, but integrating gold border for luxury feel on hover if needed. 
            However, Zalo brand color is distinctive. Let's keep it somewhat brand compliant but fitting the theme.
            Or strictly gold/black as requested in prompt "Gold-black luxury styling". 
            Let's stick to the prompt's styling request: Gold-black luxury styling. */}
        
        <div className="absolute inset-0 rounded-full bg-black border-2 border-[#D4AF37] opacity-100 hover:bg-[#D4AF37] hover:text-black transition-all duration-300 flex items-center justify-center text-[#D4AF37]">
             <span className="font-bold text-xs">Zalo</span>
        </div>
      </motion.button>
    </div>
  );
};

export default ZaloContactButton;