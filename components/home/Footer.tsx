import React from 'react'

function Footer() {
    return (
        <footer className="bg-[#073B4C] text-white pt-16 pb-8 px-8">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">

                {/* Cột 1: Thông tin thương hiệu */}
                <div className="space-y-4">
                    <div className="text-3xl font-bold text-[#FFD166]">JobPort</div>
                    <p className="text-gray-400 text-sm leading-relaxed">
                        Nền tảng kết nối nhân tài và nhà tuyển dụng hàng đầu. Chúng tôi giúp bạn xây dựng sự nghiệp bền vững.
                    </p>
                    <div className="flex gap-4">
                        {/* Social Icons Placeholder */}
                        <div className="w-8 h-8 rounded-full bg-[#118AB2] flex items-center justify-center hover:bg-[#EF476F] cursor-pointer transition">
                            <span className="text-xs">FB</span>
                        </div>
                        <div className="w-8 h-8 rounded-full bg-[#118AB2] flex items-center justify-center hover:bg-[#EF476F] cursor-pointer transition">
                            <span className="text-xs">LN</span>
                        </div>
                        <div className="w-8 h-8 rounded-full bg-[#118AB2] flex items-center justify-center hover:bg-[#EF476F] cursor-pointer transition">
                            <span className="text-xs">TW</span>
                        </div>
                    </div>
                </div>

                {/* Cột 2: Dành cho ứng viên */}
                <div>
                    <h4 className="text-lg font-bold mb-6 border-b-2 border-[#06D6A0] w-fit">Cho Ứng Viên</h4>
                    <ul className="space-y-3 text-gray-400">
                        <li><a href="#" className="hover:text-[#FFD166] transition">Tìm kiếm việc làm</a></li>
                        <li><a href="#" className="hover:text-[#FFD166] transition">Tạo CV trực tuyến</a></li>
                        <li><a href="#" className="hover:text-[#FFD166] transition">Cẩm nang nghề nghiệp</a></li>
                        <li><a href="#" className="hover:text-[#FFD166] transition">Việc làm IT</a></li>
                    </ul>
                </div>

                {/* Cột 3: Dành cho nhà tuyển dụng */}
                <div>
                    <h4 className="text-lg font-bold mb-6 border-b-2 border-[#118AB2] w-fit">Nhà Tuyển Dụng</h4>
                    <ul className="space-y-3 text-gray-400">
                        <li><a href="#" className="hover:text-[#06D6A0] transition">Đăng tin tuyển dụng</a></li>
                        <li><a href="#" className="hover:text-[#06D6A0] transition">Tìm kiếm hồ sơ</a></li>
                        <li><a href="#" className="hover:text-[#06D6A0] transition">Giải pháp nhân sự</a></li>
                        <li><a href="#" className="hover:text-[#06D6A0] transition">Bảng giá dịch vụ</a></li>
                    </ul>
                </div>

                {/* Cột 4: Đăng ký nhận tin */}
                <div>
                    <h4 className="text-lg font-bold mb-6 border-b-2 border-[#EF476F] w-fit">Bản Tin</h4>
                    <p className="text-sm text-gray-400 mb-4">Nhận thông báo việc làm mới nhất qua Email.</p>
                    <div className="flex flex-col gap-2">
                        <input
                            type="email"
                            placeholder="Email của bạn..."
                            className="bg-white/10 border border-gray-600 rounded p-2 outline-none focus:border-[#06D6A0] text-white"
                        />
                        <button className="bg-[#EF476F] hover:bg-[#d63d60] text-white font-bold py-2 rounded transition">
                            Đăng ký
                        </button>
                    </div>
                </div>
            </div>

            {/* Dòng bản quyền cuối trang */}
            <div className="max-w-7xl mx-auto pt-8 border-t border-gray-700 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
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