function MaterialCard({ material, isActive, onClick }) {
  return (
    <div 
      className={`p-6 rounded-xl cursor-pointer transition-all duration-300 ${
        isActive 
          ? 'bg-gold/10 border-2 border-gold shadow-lg shadow-gold/20' 
          : 'bg-black-light border border-gold/10 hover:bg-gold/5'
      }`}
      onClick={onClick}
    >
      <div className="flex items-center gap-4 mb-4">
        <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
          isActive ? 'bg-gold text-black' : 'bg-gold/10 text-gold'
        }`}>
          <i className={`${material.icon} text-xl`}></i>
        </div>
        <h3 className={`text-xl font-bold ${isActive ? 'text-gold' : 'text-white'}`}>
          {material.title}
        </h3>
      </div>
      
      <p className={`text-sm leading-relaxed ${isActive ? 'text-gray-200' : 'text-gray-400'}`}>
        {material.shortDescription}
      </p>
      
      {isActive && (
        <div className="mt-4 pt-4 border-t border-gold/20">
          <div className="flex items-center text-gold text-sm font-medium">
            <span>Đang xem</span>
            <i className="fas fa-chevron-right ml-2 animate-pulse"></i>
          </div>
        </div>
      )}
    </div>
  )
}

export default MaterialCard