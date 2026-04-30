import React from 'react'

function SearchBar() {
    return (
        <div className="bg-white p-2 md:p-3 rounded-2xl md:rounded-full shadow-2xl flex flex-col md:flex-row items-stretch gap-2">

            {/* Vị trí công việc */}
            <div className="flex-1 flex items-center px-4 py-2 border-b md:border-b-0 md:border-r border-gray-100">
                {/* Icon chuyển sang màu Tím Indigo để đồng bộ với Header */}
                <svg className="w-5 h-5 text-[#6366F1] mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                <input
                    type="text"
                    placeholder="Chức danh, kỹ năng..."
                    // Màu chữ chính dùng Xanh đen đậm để dễ đọc trên nền trắng
                    className="w-full bg-transparent outline-none text-[#1E293B] placeholder-gray-400 font-medium"
                />
            </div>

            {/* Địa điểm */}
            <div className="flex-1 flex items-center px-4 py-2">
                {/* Icon địa điểm cũng dùng màu Tím Indigo hoặc màu nhấn nhẹ */}
                <svg className="w-5 h-5 text-[#6366F1] mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <select className="w-full bg-transparent outline-none text-[#1E293B] font-medium appearance-none cursor-pointer">
                    <option>Tất cả địa điểm</option>
                    <option>TP. Hồ Chí Minh</option>
                    <option>Hà Nội</option>
                    <option>Đà Nẵng</option>
                </select>
            </div>

            {/* Nút tìm kiếm - Sử dụng màu Vàng cam để cực kỳ nổi bật */}
            <button className="bg-[#F59E0B] hover:bg-[#D97706] text-white font-bold py-4 md:py-2 px-10 rounded-xl md:rounded-full transition-all duration-300 shadow-lg active:scale-95">
                Tìm kiếm
            </button>
        </div>
    )
}

export default SearchBar