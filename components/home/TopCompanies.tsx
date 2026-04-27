import React from 'react'

function TopCompanies() {
    const LogoGroup = () => (
        <div className="flex shrink-0 gap-12 md:gap-24 items-center justify-around min-w-full">
            <div className="text-xl md:text-3xl font-black text-[#073B4C] opacity-40 hover:opacity-100 hover:text-[#118AB2] transition-all cursor-pointer">GOOGLE</div>
            <div className="text-xl md:text-3xl font-black text-[#073B4C] opacity-40 hover:opacity-100 hover:text-[#EF476F] transition-all cursor-pointer">META</div>
            <div className="text-xl md:text-3xl font-black text-[#073B4C] opacity-40 hover:opacity-100 hover:text-[#06D6A0] transition-all cursor-pointer">AMAZON</div>
            <div className="text-xl md:text-3xl font-black text-[#073B4C] opacity-40 hover:opacity-100 hover:text-[#FFD166] transition-all cursor-pointer">NETFLIX</div>
            <div className="text-xl md:text-3xl font-black text-[#073B4C] opacity-40 hover:opacity-100 hover:text-[#118AB2] transition-all cursor-pointer">MICROSOFT</div>
        </div>
    );
    return (
        <section className="py-16 bg-white overflow-hidden">
            <div className="container mx-auto px-4">
                <p className="text-center text-[#073B4C]/60 uppercase tracking-[0.2em] mb-10 text-xs md:text-sm font-bold">
                    Tin dùng bởi các tập đoàn lớn
                </p>

                {/* Container cho hiệu ứng chạy ngang */}
                <div className="relative flex overflow-x-hidden group">
                    <div className="flex animate-marquee whitespace-nowrap gap-12 md:gap-24 items-center">
                        <LogoGroup />
                        <LogoGroup /> {/* Lặp lại để tạo vòng lặp vô tận */}
                    </div>

                    {/* Hiệu ứng bóng mờ 2 đầu để trông mượt hơn */}
                    <div className="pointer-events-none absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-white to-transparent"></div>
                    <div className="pointer-events-none absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-white to-transparent"></div>
                </div>
            </div>
        </section>
    )
}

export default TopCompanies