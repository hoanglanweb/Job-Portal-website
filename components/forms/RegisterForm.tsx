"use client";
import { useState } from "react";
import Link from "next/link";
import axios from 'axios';

export default function RegisterForm() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
        role: "CANDIDATE",
    });

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
    ) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (formData.password !== formData.confirmPassword) {
            alert("Passwords do not match");
            return;
        }
        try {
            const res = await axios.post("/api/register", {
                name: formData.name,
                email: formData.email,
                password: formData.password,
                role: formData.role
            })
            console.log(res.data)
        } catch (err) {
            console.error("error: ", err)
        }
    };

    return (
        <div className="max-w-md mx-auto bg-white p-8 rounded-xl shadow-md">
            <h2 className="text-2xl font-bold text-center mb-6">
                Create Account
            </h2>

            <form onSubmit={handleSubmit} className="space-y-4">
                <input
                    type="text"
                    name="name"
                    placeholder="Full Name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full border p-3 rounded-lg"
                />

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

                <input
                    type="password"
                    name="confirmPassword"
                    placeholder="Confirm Password"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    className="w-full border p-3 rounded-lg"
                />

                <select
                    name="role"
                    value={formData.role}
                    onChange={handleChange}
                    className="w-full border p-3 rounded-lg"
                >
                    <option value="CANDIDATE">Candidate</option>
                    <option value="RECRUITER">Recruiter</option>
                </select>

                <button
                    type="submit"
                    className="w-full bg-[#06D6A0] text-white py-3 rounded-lg font-semibold"
                >
                    Register
                </button>
            </form>

            <div className="mt-5 text-center text-sm">
                Already have an account?
                <Link
                    href="/login"
                    className="text-blue-600 ml-1 font-medium"
                >
                    Login
                </Link>
            </div>
        </div>
    );
}