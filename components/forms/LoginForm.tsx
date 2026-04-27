"use client";

import { useState } from "react";
import Link from "next/link";

export default function LoginForm() {
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

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        console.log(formData);

        // gọi NextAuth login sau
    };

    return (
        <div className="max-w-md mx-auto flex items-center justify-center h-screen ">
            <div className="bg-[#EF476F] p-8 rounded-xl shadow-md">
                <h2 className="text-2xl font-bold text-center mb-6">
                    Welcome Back
                </h2>

                <form onSubmit={handleSubmit} className="space-y-4">
                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full border p-3 rounded-lg"
                    />

                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        value={formData.password}
                        onChange={handleChange}
                        className="w-full border p-3 rounded-lg"
                    />

                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold"
                    >
                        Login
                    </button>
                </form>

                <div className="mt-5 text-center text-sm">
                    Don&apos;t have an account?
                    <Link
                        href="/register"
                        className="text-[#06D6A0] ml-1 font-medium"
                    >
                        Register
                    </Link>
                </div>
            </div>
        </div>
    );
}