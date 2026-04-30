'use client'
import React, { useState } from 'react'
import Navbar from './navbar'
import Link from 'next/link';
import { useSession, signOut } from 'next-auth/react';

function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const { data: session } = useSession()
    return (
        <header className="bg-[#6366F1] text-white py-4 px-6 md:px-12 flex justify-between items-center sticky top-0 z-50 shadow-md">
            {/*//?: Logo - Sử dụng màu trắng để tinh tế hoặc màu vàng nhấn nhẹ */}
            <div className="text-2xl font-bold text-[#FFFFFF] z-[60]">
                Job<span className="text-[#F59E0B]">Port</span>
            </div>

            {/* //?: Navbar - Desktop & Mobile */}
            <div className={`
                fixed inset-0 bg-[#6366F1] flex flex-col items-center justify-center gap-8 transition-transform duration-300 z-50
                md:static md:flex md:flex-row md:bg-transparent md:translate-x-0
                ${isOpen ? "translate-x-0" : "translate-x-full md:translate-x-0"}
                `}>

                <Navbar />

                {/* //?: Nút bấm trên Mobile */}
                <div className="flex flex-col items-center gap-4 md:hidden">
                    {session ? (
                        <>
                            <span className="text-white font-medium">👋 {session.user?.name}</span>
                            <button
                                onClick={() => signOut({ callbackUrl: "/" })}
                                className="text-white font-medium border border-white px-4 py-2 rounded-lg"
                            >
                                Đăng xuất
                            </button>
                        </>
                    ) : (
                        <Link href="/login" className="text-white font-medium">Đăng nhập</Link>
                    )}
                    <button className="bg-[#F59E0B] text-white font-bold py-3 px-8 rounded-lg shadow-lg">
                        Đăng tuyển
                    </button>
                </div>
            </div>

            {/* //?: Buttons - Desktop Only */}
            <div className="hidden md:flex items-center gap-6">
                {session ? (
                    <>
                        <span className="text-white font-medium">👋 {session.user?.name}</span>
                        <button
                            onClick={() => signOut({ callbackUrl: "/" })}
                            className="text-white font-medium border border-white px-4 py-2 rounded-lg"
                        >
                            Đăng xuất
                        </button>
                    </>
                ) : (
                    <Link href="/login" className="text-white font-medium">Đăng nhập</Link>
                )}
                <button className="bg-[#F59E0B] hover:bg-[#D97706] text-white font-semibold py-2 px-5 rounded-lg transition active:scale-95 shadow-sm">
                    Đăng tuyển
                </button>
            </div>

            {/* Mobile Menu Button (Hamburger) */}
            <button
                className="md:hidden z-[60] text-white focus:outline-none"
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