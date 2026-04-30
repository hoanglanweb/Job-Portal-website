import React from 'react'

function Footer() {
    return (
        <footer className="bg-[#1E293B] text-white pt-16 pb-8 px-8">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">

                {/* Cột 1: Thông tin thương hiệu */}
                <div className="space-y-6">
                    <div className="text-3xl font-bold text-white">
                        Job<span className="text-[#F59E0B]">Port</span>
                    </div>
                    <p className="text-gray-400 text-sm leading-relaxed">
                        Nền tảng kết nối nhân tài và nhà tuyển dụng hàng đầu. Chúng tôi giúp bạn xây dựng sự nghiệp bền vững và bứt phá giới hạn.
                    </p>
                    <div className="flex gap-4">
                        {/* Social Icons - Sử dụng màu Tím Indigo đồng bộ */}
                        <div className="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#6366F1] cursor-pointer transition-all border border-white/10">
                            <span className="text-xs font-bold">FB</span>
                        </div>
                        <div className="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#6366F1] cursor-pointer transition-all border border-white/10">
                            <span className="text-xs font-bold">LN</span>
                        </div>
                        <div className="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#6366F1] cursor-pointer transition-all border border-white/10">
                            <span className="text-xs font-bold">TW</span>
                        </div>
                    </div>
                </div>

                {/* Cột 2: Dành cho ứng viên */}
                <div>
                    <h4 className="text-lg font-bold mb-6 border-b-2 border-[#6366F1] w-fit">Cho Ứng Viên</h4>
                    <ul className="space-y-3 text-gray-400">
                        <li><a href="#" className="hover:text-[#F59E0B] transition">Tìm kiếm việc làm</a></li>
                        <li><a href="#" className="hover:text-[#F59E0B] transition">Tạo CV trực tuyến</a></li>
                        <li><a href="#" className="hover:text-[#F59E0B] transition">Cẩm nang nghề nghiệp</a></li>
                        <li><a href="#" className="hover:text-[#F59E0B] transition">Việc làm IT</a></li>
                    </ul>
                </div>

                {/* Cột 3: Dành cho nhà tuyển dụng */}
                <div>
                    <h4 className="text-lg font-bold mb-6 border-b-2 border-[#6366F1] w-fit">Nhà Tuyển Dụng</h4>
                    <ul className="space-y-3 text-gray-400">
                        <li><a href="#" className="hover:text-[#F59E0B] transition">Đăng tin tuyển dụng</a></li>
                        <li><a href="#" className="hover:text-[#F59E0B] transition">Tìm kiếm hồ sơ</a></li>
                        <li><a href="#" className="hover:text-[#F59E0B] transition">Giải pháp nhân sự</a></li>
                        <li><a href="#" className="hover:text-[#F59E0B] transition">Bảng giá dịch vụ</a></li>
                    </ul>
                </div>

                {/* Cột 4: Đăng ký nhận tin */}
                <div>
                    <h4 className="text-lg font-bold mb-6 border-b-2 border-[#F59E0B] w-fit">Bản Tin</h4>
                    <p className="text-sm text-gray-400 mb-4">Nhận thông báo việc làm mới nhất qua Email hàng tuần.</p>
                    <div className="flex flex-col gap-3">
                        <input
                            type="email"
                            placeholder="Email của bạn..."
                            className="bg-white/5 border border-white/10 rounded-lg p-3 outline-none focus:border-[#6366F1] text-white transition-all"
                        />
                        <button className="bg-[#6366F1] hover:bg-[#4F46E5] text-white font-bold py-3 rounded-lg transition-all shadow-lg active:scale-95">
                            Đăng ký ngay
                        </button>
                    </div>
                </div>
            </div>

            {/* Dòng bản quyền cuối trang */}
            <div className="max-w-7xl mx-auto pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
                <p>© 2026 JobPort. Tất cả quyền được bảo lưu.</p>
                <div className="flex gap-6">
                    <a href="#" className="hover:text-white transition">Chính sách bảo mật</a>
                    <a href="#" className="hover:text-white transition">Điều khoản sử dụng</a>
                </div>
            </div>
        </footer>
    )
}

export default Footer