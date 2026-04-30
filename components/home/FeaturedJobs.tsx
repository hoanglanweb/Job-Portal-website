import React from 'react'

function FeaturedJobs() {
    const jobs = [
        { id: 1, title: "Frontend Developer", company: "TechFlow", salary: "$1500 - $2500" },
        { id: 2, title: "UI/UX Designer", company: "Creative Mind", salary: "$1200 - $2000" },
    ];
    return (
        <section className="py-16 px-8 bg-[#F8FAFC]"> {/* Sử dụng xám xanh cực nhạt để làm nổi bật card trắng */}
            <h2 className="text-3xl font-bold text-[#1E293B] mb-10 text-center">
                Việc làm <span className="text-[#6366F1]">nổi bật</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
                {jobs.map(job => (
                    <div
                        key={job.id}
                        className="group border-l-4 border-[#6366F1] bg-white p-6 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 rounded-r-xl"
                    >
                        <div className="flex justify-between items-start">
                            <div>
                                <h3 className="text-xl font-bold text-[#1E293B] group-hover:text-[#6366F1] transition-colors">
                                    {job.title}
                                </h3>
                                <p className="text-gray-500 font-medium">{job.company}</p>
                            </div>
                            {/* Thêm một tag nhỏ cho loại hình công việc nếu cần */}
                            <span className="bg-[#EEF2FF] text-[#6366F1] text-xs px-2 py-1 rounded-md font-semibold">
                                Full-time
                            </span>
                        </div>

                        <div className="mt-6 flex justify-between items-center">
                            {/* Màu lương chuyển sang Vàng cam để tạo sự thu hút tích cực */}
                            <span className="text-[#F59E0B] font-bold text-lg">{job.salary}</span>

                            <button className="flex items-center gap-1 text-[#6366F1] font-semibold hover:gap-2 transition-all">
                                Chi tiết
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default FeaturedJobs