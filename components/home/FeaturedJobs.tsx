import React from 'react'

function FeaturedJobs() {
    const jobs = [
        { id: 1, title: "Frontend Developer", company: "TechFlow", salary: "$1500 - $2500" },
        { id: 2, title: "UI/UX Designer", company: "Creative Mind", salary: "$1200 - $2000" },
    ];
    return (
        <section className="py-16 px-8 bg-gray-50">
            <h2 className="text-3xl font-bold text-[#073B4C] mb-8 text-center">Việc làm nổi bật</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
                {jobs.map(job => (
                    <div key={job.id} className="border-l-4 border-[#06D6A0] bg-white p-6 shadow-sm hover:shadow-md transition">
                        <h3 className="text-xl font-bold text-[#118AB2]">{job.title}</h3>
                        <p className="text-gray-600">{job.company}</p>
                        <div className="mt-4 flex justify-between items-center">
                            <span className="text-[#EF476F] font-semibold">{job.salary}</span>
                            <button className="text-[#073B4C] underline font-medium">Chi tiết</button>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default FeaturedJobs