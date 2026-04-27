'use client'
import React, { useState } from 'react'
import Navbar from './navbar'
import Link from 'next/link';

function Header() {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <header className="bg-[#073B4C] text-white py-4 px-6 md:px-12 flex justify-between items-center sticky top-0 z-50 shadow-md">
            {/* Logo */}
            <div className="text-2xl font-bold text-[#FFD166] z-[60]">JobPort</div>

            {/* Navbar - Desktop & Mobile */}
            <div className={`
                fixed inset-0 bg-[#073B4C] flex flex-col items-center justify-center gap-8 transition-transform duration-300 z-50
                md:static md:flex md:flex-row md:bg-transparent md:translate-x-0
                ${isOpen ? "translate-x-0" : "translate-x-full md:translate-x-0"}
            `}>
                <Navbar />

                {/* Nút bấm trên Mobile (ẩn khi ở Desktop) */}
                <div className="flex flex-col items-center gap-4 md:hidden">
                    <Link href="/login"></Link>
                    <button className="bg-[#06D6A0] text-[#073B4C] font-bold py-3 px-8 rounded-lg">
                        Đăng tuyển
                    </button>
                </div>
            </div>

            {/* Buttons - Desktop Only */}
            <div className="hidden md:flex items-center gap-6">
                <Link href="/login" className="text-white hover:text-[#FFD166] transition">Đăng nhập</Link>
                <button className="bg-[#06D6A0] hover:bg-[#118AB2] text-[#073B4C] font-semibold py-2 px-5 rounded-lg transition active:scale-95">
                    Đăng tuyển
                </button>
            </div>

            {/* Mobile Menu Button (Hamburger) */}
            <button
                className="md:hidden z-[60] text-[#06D6A0] focus:outline-none"
                onClick={() => setIsOpen(!isOpen)}
            >
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    {isOpen ? (
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    ) : (
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                    )}
                </svg>
            </button>
        </header>
    )
}

export default Header