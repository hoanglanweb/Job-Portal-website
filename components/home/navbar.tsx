import React from 'react'

function navbar() {
    const navLinks = [
        { name: "Trang chủ", href: "#" },
        { name: "Tìm việc làm", href: "#" },
        { name: "Công ty", href: "#" },
        { name: "Cẩm nang", href: "#" },
    ];
    return (
        <nav className="flex flex-col md:flex-row items-center gap-8 md:gap-10">
            {navLinks.map((link) => (
                <a
                    key={link.name}
                    href={link.href}
                    // ?: Thay đổi hover:text sang màu Vàng cam (#F59E0B) để đồng bộ với nút "Đăng tuyển"
                    className="text-2xl md:text-base font-medium text-white hover:text-[#F59E0B] transition-colors duration-200 relative group"
                >
                    {link.name}
                    {/* //?: Thanh gạch chân dưới khi hover cũng chuyển sang màu Vàng cam */}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#F59E0B] transition-all group-hover:w-full"></span>
                </a>
            ))}
        </nav>
    )
}

export default navbar