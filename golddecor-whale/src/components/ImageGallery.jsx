import { useState } from 'react'

function ImageGallery({ images, title }) {
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [isFullscreen, setIsFullscreen] = useState(false)

  const handleNext = () => {
    setSelectedIndex((prev) => (prev + 1) % images.length)
  }

  const handlePrev = () => {
    setSelectedIndex((prev) => (prev - 1 + images.length) % images.length)
  }

  return (
    <>
      <div className="space-y-6">
        {/* Main Image */}
        <div 
          className="relative rounded-2xl overflow-hidden bg-black-light cursor-zoom-in group"
          onClick={() => setIsFullscreen(true)}
        >
          <img 
            src={images[selectedIndex]} 
            alt={`${title} - ${selectedIndex + 1}`}
            className="w-full h-[500px] object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
          <div className="absolute bottom-4 left-4 text-white bg-black/50 px-3 py-1 rounded-full text-sm">
            {selectedIndex + 1} / {images.length}
          </div>
          <div className="absolute bottom-4 right-4 flex gap-2">
            <button 
              onClick={(e) => {
                e.stopPropagation()
                handlePrev()
              }}
              className="w-10 h-10 rounded-full bg-black/50 hover:bg-black/70 text-white flex items-center justify-center transition-colors"
            >
              <i className="fas fa-chevron-left"></i>
            </button>
            <button 
              onClick={(e) => {
                e.stopPropagation()
                handleNext()
              }}
              className="w-10 h-10 rounded-full bg-black/50 hover:bg-black/70 text-white flex items-center justify-center transition-colors"
            >
              <i className="fas fa-chevron-right"></i>
            </button>
          </div>
        </div>

        {/* Thumbnails */}
        <div className="grid grid-cols-4 md:grid-cols-6 gap-3">
          {images.map((img, index) => (
            <button
              key={index}
              onClick={() => setSelectedIndex(index)}
              className={`relative rounded-lg overflow-hidden h-24 transition-all ${
                selectedIndex === index 
                  ? 'ring-2 ring-gold scale-105' 
                  : 'opacity-70 hover:opacity-100 hover:scale-105'
              }`}
            >
              <img 
                src={img} 
                alt={`Thumbnail ${index + 1}`}
                className="w-full h-full object-cover"
              />
              {selectedIndex === index && (
                <div className="absolute inset-0 bg-gold/20 flex items-center justify-center">
                  <i className="fas fa-check-circle text-gold text-xl"></i>
                </div>
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Fullscreen Modal */}
      {isFullscreen && (
        <div 
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
          onClick={() => setIsFullscreen(false)}
        >
          <div className="relative max-w-7xl max-h-[90vh]">
            <button 
              className="absolute top-4 right-4 z-10 text-white hover:text-gold text-3xl"
              onClick={() => setIsFullscreen(false)}
            >
              <i className="fas fa-times"></i>
            </button>
            
            <div className="relative" onClick={(e) => e.stopPropagation()}>
              <img 
                src={images[selectedIndex]} 
                alt={`${title} - Fullscreen`}
                className="max-w-full max-h-[80vh] object-contain"
              />
              
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex items-center gap-4">
                <button 
                  onClick={handlePrev}
                  className="w-12 h-12 rounded-full bg-black/50 hover:bg-gold text-white flex items-center justify-center transition-colors"
                >
                  <i className="fas fa-chevron-left"></i>
                </button>
                
                <span className="text-white bg-black/50 px-4 py-2 rounded-full">
                  {selectedIndex + 1} / {images.length}
                </span>
                
                <button 
                  onClick={handleNext}
                  className="w-12 h-12 rounded-full bg-black/50 hover:bg-gold text-white flex items-center justify-center transition-colors"
                >
                  <i className="fas fa-chevron-right"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default ImageGallery