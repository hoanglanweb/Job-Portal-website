import React from 'react'

function Testimonials() {
    return (
        <section className="py-20 px-8 bg-[#EEF2FF]/50 relative overflow-hidden">
            {/* Một chút trang trí nhỏ cho phần Testimonials */}
            <div className="absolute top-10 right-10 text-[#6366F1]/10 transform rotate-12">
                <svg className="w-32 h-32" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H15.017C14.4647 8 14.017 8.44772 14.017 9V11C14.017 11.5523 13.5693 12 13.017 12H12.017V5H22.017V15C22.017 18.3137 19.3307 21 16.017 21H14.017ZM3.017 21L3.017 18C3.017 16.8954 3.91239 16 5.017 16H8.017C8.56928 16 9.017 15.5523 9.017 15V9C9.017 8.44772 8.56928 8 8.017 8H4.017C3.46472 8 3.017 8.44772 3.017 9V11C3.017 11.5523 2.56928 12 2.017 12H1.017V5H11.017V15C11.017 18.3137 8.33072 21 5.017 21H3.017Z" />
                </svg>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-[#1E293B] mb-16 text-center relative z-10">
                Người dùng nói gì về <span className="text-[#6366F1]">JobPort</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto relative z-10">
                {/* Comment 1 */}
                <div className="bg-white p-8 rounded-2xl shadow-sm border border-[#6366F1]/10 hover:shadow-md transition">
                    <p className="text-[#475569] leading-relaxed italic mb-6">
                        "Nhờ có JobPort, tôi đã tìm được công việc Frontend Developer chỉ trong vòng 2 tuần ứng tuyển. Quy trình rất chuyên nghiệp và nhanh chóng!"
                    </p>
                    <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-[#6366F1] rounded-full flex items-center justify-center text-white font-bold">A</div>
                        <div>
                            <h4 className="font-bold text-[#1E293B]">Nguyễn Văn A</h4>
                            <p className="text-sm text-[#6366F1]">Frontend Developer</p>
                        </div>
                    </div>
                </div>

                {/* Comment 2 */}
                <div className="bg-white p-8 rounded-2xl shadow-sm border border-[#6366F1]/10 hover:shadow-md transition">
                    <p className="text-[#475569] leading-relaxed italic mb-6">
                        "Giao diện dễ sử dụng và các gợi ý việc làm rất sát với kỹ năng của tôi. Đây là nền tảng tuyển dụng tốt nhất mà tôi từng dùng."
                    </p>
                    <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-[#F59E0B] rounded-full flex items-center justify-center text-white font-bold">L</div>
                        <div>
                            <h4 className="font-bold text-[#1E293B]">Trần Thị Lan</h4>
                            <p className="text-sm text-[#6366F1]">UI/UX Designer</p>
                        </div>
                    </div>
                </div>

                {/* Comment 3 */}
                <div className="bg-white p-8 rounded-2xl shadow-sm border border-[#6366F1]/10 hover:shadow-md transition">
                    <p className="text-[#475569] leading-relaxed italic mb-6">
                        "Hệ thống lọc theo địa điểm và mức lương hoạt động cực kỳ chính xác. Tôi vừa ký hợp đồng với một công ty mơ ước tại Quận 1!"
                    </p>
                    <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-[#10B981] rounded-full flex items-center justify-center text-white font-bold">H</div>
                        <div>
                            <h4 className="font-bold text-[#1E293B]">Lê Minh Hiếu</h4>
                            <p className="text-sm text-[#6366F1]">Marketing Lead</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Testimonials