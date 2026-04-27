import React from 'react'
import SearchBar from './SearchBar'

function hero() {
    return (
        <section className="relative bg-[#118AB2] py-16 md:py-32 px-6 overflow-hidden">
            {/* Hiệu ứng trang trí nền (Decor Blobs) */}
            <div className="absolute top-0 -left-10 w-72 h-72 bg-[#06D6A0] rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
            <div className="absolute bottom-0 -right-10 w-72 h-72 bg-[#FFD166] rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>

            <div className="relative flex flex-col items-center text-center z-10">
                <h1 className="text-3xl md:text-7xl font-black text-white mb-6 tracking-tight leading-tight">
                    Tìm kiếm công việc <br className="hidden md:block" />
                    <span className="text-[#FFD166]">mơ ước</span> của bạn
                </h1>

                <p className="text-white/80 text-base md:text-xl mb-12 max-w-2xl leading-relaxed">
                    Kết nối với <span className="font-bold text-white">5000+</span> nhà tuyển dụng hàng đầu và khám phá những cơ hội nghề nghiệp bứt phá ngay hôm nay.
                </p>

                <div className="w-full max-w-4xl">
                    <SearchBar />
                </div>

                {/* Gợi ý từ khóa phổ biến cho Mobile dễ bấm */}
                <div className="mt-6 flex flex-wrap justify-center gap-2 text-white/70 text-sm">
                    <span>Gợi ý:</span>
                    <button className="underline hover:text-[#FFD166]">Frontend</button>
                    <button className="underline hover:text-[#FFD166]">UI/UX</button>
                    <button className="underline hover:text-[#FFD166]">Marketing</button>
                </div>
            </div>
        </section>
    )
}

export default hero