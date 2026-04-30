"use client";

import { useState } from "react";
import Link from "next/link";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
export default function LoginForm() {
    const router = useRouter()
    const [error, setError] = useState("")
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement>
    ) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError("");

        const res = await signIn("credentials", {
            email: formData.email,
            password: formData.password,
            redirect: false, //!: không tự redirect để mình xử lý
        });
        console.log("signIn response:", res);
        if (res?.ok) {
            router.push("/"); //!: về trang chủ sau khi login
        } else {
            setError("Email hoặc mật khẩu không đúng");
        }
    };

    return (
        <div className="max-w-md mx-auto flex items-center justify-center h-screen bg-[#F8FAFC]"> {/* //?: Nền ngoài sáng cho dễ chịu */}
            <div className="bg-white p-8 rounded-2xl shadow-xl w-full border border-gray-100">
                <h2 className="text-3xl font-extrabold text-center mb-2 text-[#1E293B]">
                    Welcome Back
                </h2>
                <p className="text-center text-gray-500 mb-8 text-sm">Vui lòng đăng nhập để tiếp tục</p>

                <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                        <label className="block text-sm font-semibold text-[#1E293B] mb-2">Email</label>
                        <input
                            type="email"
                            name="email"
                            placeholder="name@company.com"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full border border-gray-200 p-3 rounded-xl outline-none focus:border-[#6366F1] focus:ring-2 focus:ring-[#6366F1]/10 transition-all"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-semibold text-[#1E293B] mb-2">Mật khẩu</label>
                        <input
                            type="password"
                            name="password"
                            placeholder="••••••••"
                            value={formData.password}
                            onChange={handleChange}
                            className="w-full border border-gray-200 p-3 rounded-xl outline-none focus:border-[#6366F1] focus:ring-2 focus:ring-[#6366F1]/10 transition-all"
                        />
                    </div>

                    <div className="flex justify-end">
                        <a href="#" className="text-sm text-[#6366F1] hover:underline">Quên mật khẩu?</a>
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-[#6366F1] hover:bg-[#4F46E5] text-white py-3 rounded-xl font-bold text-lg shadow-lg shadow-indigo-200 transition-all active:scale-95"
                    >
                        Đăng nhập
                    </button>
                </form>

                <div className="mt-8 text-center text-gray-600">
                    Don&apos;t have an account?
                    <Link
                        href="/register"
                        className="text-[#F59E0B] ml-1 font-bold hover:underline"
                    >
                        Register
                    </Link>
                </div>
            </div>
        </div>
    );
}