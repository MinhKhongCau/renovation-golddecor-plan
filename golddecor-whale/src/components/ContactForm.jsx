import { useState } from 'react'

function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    projectType: '',
    message: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Xử lý submit form ở đây
    console.log('Form submitted:', formData)
    alert('Cảm ơn bạn đã liên hệ! Chúng tôi sẽ phản hồi trong thời gian sớm nhất.')
    
    // Reset form
    setFormData({
      name: '',
      phone: '',
      email: '',
      projectType: '',
      message: ''
    })
  }

  return (
    <div className="bg-black-light rounded-xl p-8 border border-gold/10">
      <h3 className="text-3xl font-bold text-gold mb-6">Liên hệ tư vấn</h3>
      <p className="text-gray-300 mb-8">
        Để lại thông tin để được tư vấn miễn phí và nhận báo giá chi tiết
      </p>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-gray-400 mb-2">Họ và tên *</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-black/50 border border-gray-700 rounded-lg focus:border-gold focus:ring-1 focus:ring-gold outline-none text-white transition-colors"
              placeholder="Nhập họ và tên"
            />
          </div>
          
          <div>
            <label className="block text-gray-400 mb-2">Số điện thoại *</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-black/50 border border-gray-700 rounded-lg focus:border-gold focus:ring-1 focus:ring-gold outline-none text-white transition-colors"
              placeholder="Nhập số điện thoại"
            />
          </div>
        </div>
        
        <div>
          <label className="block text-gray-400 mb-2">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-black/50 border border-gray-700 rounded-lg focus:border-gold focus:ring-1 focus:ring-gold outline-none text-white transition-colors"
            placeholder="Nhập email"
          />
        </div>
        
        <div>
          <label className="block text-gray-400 mb-2">Loại công trình</label>
          <select
            name="projectType"
            value={formData.projectType}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-black/50 border border-gray-700 rounded-lg focus:border-gold focus:ring-1 focus:ring-gold outline-none text-white transition-colors"
          >
            <option value="">Chọn loại công trình</option>
            <option value="apartment">Căn hộ chung cư</option>
            <option value="villa">Biệt thự</option>
            <option value="office">Văn phòng</option>
            <option value="restaurant">Nhà hàng</option>
            <option value="other">Khác</option>
          </select>
        </div>
        
        <div>
          <label className="block text-gray-400 mb-2">Thông tin chi tiết</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows="4"
            className="w-full px-4 py-3 bg-black/50 border border-gray-700 rounded-lg focus:border-gold focus:ring-1 focus:ring-gold outline-none text-white transition-colors resize-none"
            placeholder="Mô tả chi tiết về dự án của bạn..."
          ></textarea>
        </div>
        
        <div className="flex items-center gap-4">
          <input
            type="checkbox"
            id="agree"
            required
            className="w-4 h-4 text-gold bg-black/50 border-gray-700 rounded focus:ring-gold"
          />
          <label htmlFor="agree" className="text-gray-400 text-sm">
            Tôi đồng ý với các điều khoản và chính sách bảo mật
          </label>
        </div>
        
        <button
          type="submit"
          className="btn-primary w-full justify-center text-lg"
        >
          <i className="fas fa-paper-plane"></i> Gửi yêu cầu tư vấn
        </button>
      </form>
      
      <div className="mt-8 pt-8 border-t border-gray-800">
        <h4 className="text-xl font-bold text-white mb-4">Thông tin liên hệ khác</h4>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="flex items-center gap-3 text-gray-300">
            <i className="fas fa-phone text-gold"></i>
            <span>(028) 1234 5678</span>
          </div>
          <div className="flex items-center gap-3 text-gray-300">
            <i className="fas fa-envelope text-gold"></i>
            <span>info@golddecor.vn</span>
          </div>
          <div className="flex items-center gap-3 text-gray-300">
            <i className="fas fa-clock text-gold"></i>
            <span>8:00 - 17:00 (Thứ 2 - Thứ 6)</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactForm