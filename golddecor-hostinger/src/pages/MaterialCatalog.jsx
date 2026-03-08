import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, BookOpen } from 'lucide-react';
import MaterialPage from '@/components/MaterialPage';
import { materialsData } from '@/data/materialsData';
import GoldButton from '@/components/ui/GoldButton';

const MaterialCatalog = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [direction, setDirection] = useState(0);

  const totalPages = materialsData.length;
  const canGoPrevious = currentPage > 0;
  const canGoNext = currentPage < totalPages - 1;

  const handleNext = () => {
    if (canGoNext) {
      setDirection(1);
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevious = () => {
    if (canGoPrevious) {
      setDirection(-1);
      setCurrentPage(currentPage - 1);
    }
  };

  const pageVariants = {
    enter: (direction) => ({
      rotateY: direction > 0 ? 180 : -180,
      opacity: 0,
      scale: 0.8
    }),
    center: {
      rotateY: 0,
      opacity: 1,
      scale: 1
    },
    exit: (direction) => ({
      rotateY: direction > 0 ? -180 : 180,
      opacity: 0,
      scale: 0.8
    })
  };

  return (
    <>
      <Helmet>
        <title>Catalog Vật Liệu - Golddecor</title>
        <meta name="description" content="Khám phá bộ sưu tập vật liệu sang trọng độc quyền cho các dự án cao cấp của bạn" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-[#1a1a1a] via-black to-[#1a1a1a] pt-24 pb-8 md:pb-12 lg:pb-16 px-4 md:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-8 md:mb-12"
          >
            <div className="flex items-center justify-center gap-3 mb-4">
              <BookOpen className="w-6 h-6 md:w-8 md:h-8 text-[#D4AF37]" />
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-white">
                Catalog Vật Liệu
              </h1>
            </div>
            <p className="text-gray-400 text-base md:text-lg">
              Khám phá bộ sưu tập vật liệu cao cấp được tuyển chọn của chúng tôi
            </p>
          </motion.div>

          {/* Catalog Book Container */}
          <div className="relative w-full max-w-xl md:max-w-3xl lg:max-w-5xl mx-auto">
            {/* Desktop View - Side by Side Pages */}
            <div className="hidden md:block">
              <div className="relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg shadow-2xl overflow-hidden" style={{ perspective: '2000px' }}>
                <div className="grid grid-cols-2 min-h-[500px] lg:min-h-[600px]">
                  {/* Left Page */}
                  <div className="border-r border-gray-700">
                    <AnimatePresence mode="wait" custom={direction}>
                      <motion.div
                        key={`left-${currentPage}`}
                        custom={direction}
                        variants={pageVariants}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        transition={{
                          rotateY: { type: 'spring', stiffness: 100, damping: 20 },
                          opacity: { duration: 0.3 },
                          scale: { duration: 0.3 }
                        }}
                        className="h-full"
                      >
                        <MaterialPage material={materialsData[currentPage]} side="left" />
                      </motion.div>
                    </AnimatePresence>
                  </div>

                  {/* Right Page */}
                  <div>
                    <AnimatePresence mode="wait" custom={direction}>
                      <motion.div
                        key={`right-${currentPage}`}
                        custom={direction}
                        variants={pageVariants}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        transition={{
                          rotateY: { type: 'spring', stiffness: 100, damping: 20 },
                          opacity: { duration: 0.3 },
                          scale: { duration: 0.3 }
                        }}
                        className="h-full"
                      >
                        <MaterialPage material={materialsData[currentPage]} side="right" />
                      </motion.div>
                    </AnimatePresence>
                  </div>
                </div>
              </div>
            </div>

            {/* Mobile View - Stacked Pages */}
            <div className="md:hidden">
              <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg shadow-2xl overflow-hidden">
                <AnimatePresence mode="wait" custom={direction}>
                  <motion.div
                    key={`mobile-${currentPage}`}
                    custom={direction}
                    variants={pageVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{
                      rotateY: { type: 'spring', stiffness: 100, damping: 20 },
                      opacity: { duration: 0.3 },
                      scale: { duration: 0.3 }
                    }}
                  >
                    <MaterialPage material={materialsData[currentPage]} side="left" />
                    <div className="border-t border-gray-700">
                      <MaterialPage material={materialsData[currentPage]} side="right" />
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

            {/* Navigation Controls */}
            <div className="flex flex-col sm:flex-row items-center justify-between mt-6 md:mt-8 gap-4">
              <div className="w-full sm:w-auto flex justify-between sm:justify-start">
                <GoldButton
                  onClick={handlePrevious}
                  variant="outline"
                  className={`flex items-center gap-1.5 px-3 py-2 text-sm md:px-4 md:py-2 md:text-base md:gap-2 w-[48%] sm:w-auto justify-center sm:justify-start ${!canGoPrevious ? 'opacity-50 cursor-not-allowed' : ''}`}
                >
                  <ChevronLeft className="w-4 h-4 md:w-5 md:h-5" />
                  Trước
                </GoldButton>
                
                {/* Mobile specific "Next" button for better UX in single row */}
                <div className="sm:hidden w-[48%]">
                   <GoldButton
                    onClick={handleNext}
                    variant="outline"
                    className={`flex items-center gap-1.5 px-3 py-2 text-sm w-full justify-center ${!canGoNext ? 'opacity-50 cursor-not-allowed' : ''}`}
                  >
                    Sau
                    <ChevronRight className="w-4 h-4" />
                  </GoldButton>
                </div>
              </div>

              <div className="flex flex-col items-center gap-2 order-first sm:order-none w-full sm:w-auto mb-2 sm:mb-0">
                <span className="text-gray-400 text-sm md:text-base">
                  Trang {currentPage + 1} / {totalPages}
                </span>
                <div className="flex gap-1.5 md:gap-2 flex-wrap justify-center max-w-[280px] sm:max-w-none">
                  {Array.from({ length: totalPages }).map((_, index) => (
                    <button
                      key={index}
                      onClick={() => {
                        setDirection(index > currentPage ? 1 : -1);
                        setCurrentPage(index);
                      }}
                      className={`h-1.5 rounded-full transition-all ${
                        index === currentPage ? 'bg-[#D4AF37] w-6 md:w-8' : 'bg-gray-600 w-1.5 md:w-2'
                      }`}
                    />
                  ))}
                </div>
              </div>

              {/* Desktop Next Button */}
              <div className="hidden sm:block">
                <GoldButton
                  onClick={handleNext}
                  variant="outline"
                  className={`flex items-center gap-1.5 px-3 py-2 text-sm md:px-4 md:py-2 md:text-base md:gap-2 ${!canGoNext ? 'opacity-50 cursor-not-allowed' : ''}`}
                >
                  Sau
                  <ChevronRight className="w-4 h-4 md:w-5 md:h-5" />
                </GoldButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MaterialCatalog;