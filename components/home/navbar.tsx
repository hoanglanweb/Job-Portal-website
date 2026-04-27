import React from 'react'

function navbar() {
    const navLinks = [
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
                    className="text-xl md:text-base font-medium hover:text-[#EF476F] transition-colors duration-200 relative group"
                >
                    {link.name}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#EF476F] transition-all group-hover:w-full"></span>
                </a>
            ))}
        </nav>
    )
}

export default navbar