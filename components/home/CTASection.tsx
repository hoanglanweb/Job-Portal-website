import React from 'react'

function CTASection() {
    return (
        <section className="py-20 px-8 bg-[#6366F1] text-white text-center relative overflow-hidden">
            {/* Hiệu ứng vòng tròn trang trí ẩn mờ cho phần cuối trang thêm tinh tế */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#F59E0B]/20 rounded-full -ml-24 -mb-24"></div>

            <div className="relative z-10">
                <h2 className="text-3xl md:text-4xl font-extrabold mb-6">Sẵn sàng bứt phá sự nghiệp?</h2>
                <p className="mb-10 text-white/90 text-lg max-w-xl mx-auto">
                    Gia nhập cộng đồng <span className="font-bold">20,000+</span> ứng viên đã tìm thấy công việc mơ ước. Tạo hồ sơ ngay hôm nay để được nhà tuyển dụng chủ động săn đón.
                </p>

                <button className="bg-[#F59E0B] hover:bg-[#D97706] text-white font-bold py-4 px-12 rounded-full text-lg shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-1 active:scale-95">
                    Tạo hồ sơ ngay
                </button>

                <p className="mt-6 text-sm text-white/70">
                    Miễn phí hoàn toàn • Chỉ mất 2 phút tạo hồ sơ
                </p>
            </div>
        </section>
    )
}

export default CTASection