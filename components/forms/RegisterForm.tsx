"use client";
import { useState } from "react";
import Link from "next/link";
import axios from 'axios';
import { useRouter } from "next/navigation";

export default function RegisterForm() {
    const [loading, setLoading] = useState(false)
    const router = useRouter()
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
        role: "CANDIDATE",
    });

    //!: update form theo name
    //!: name = key, value = input
    //!: spread giữ state cũ
    //!: [name] = dynamic key
    //TODO: dùng setState(prev) để tránh stale
    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
    ) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    //!: handle register form (validate + call API + redirect)
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        //!: validate required fields
        if (!formData.name || !formData.email || !formData.password) {
            alert("Vui lòng nhập đầy đủ thông tin");
            return;
        }

        //!: validate email fields
        if (!formData.email.includes("@")) {
            alert("Email không hợp lệ");
            return;
        }
        //!: validate password fields
        if (formData.password.length < 6) {
            alert("Password tối thiểu 6 ký tự");
            return;
        }
        //!: confirm password match
        if (formData.password !== formData.confirmPassword) {
            alert("Passwords do not match");
            return;
        }

        try {
            setLoading(true);

            const res = await axios.post("/api/register", {
                name: formData.name,
                email: formData.email,
                password: formData.password,
                role: formData.role,
            });
            //!: success → redirect login
            if (res.status === 201) {
                alert("Đăng ký thành công");
                router.push("/login");
            }
        } catch (err: any) {
            const message =
                err.response?.data?.message || "Đăng ký thất bại";
            alert(message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="max-w-md  mx-auto flex items-center justify-center h-screen">
            <div className="bg-white p-8 rounded-2xl shadow-xl w-full border border-gray-100">
                <h2 className="text-3xl font-extrabold text-center mb-2 text-[#1E293B]">
                    Create Account
                </h2>
                <p className="text-center text-gray-500 mb-8 text-sm">Bắt đầu hành trình sự nghiệp của bạn ngay hôm nay</p>

                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="block text-sm font-semibold text-[#1E293B] mb-1">Họ và tên</label>
                        <input
                            type="text"
                            name="name"
                            placeholder="Họ và Tên"
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full border border-gray-200 p-3 rounded-xl outline-none focus:border-[#6366F1] focus:ring-2 focus:ring-[#6366F1]/10 transition-all"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-semibold text-[#1E293B] mb-1">Email</label>
                        <input
                            type="email"
                            name="email"
                            placeholder="name@example.com"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full border border-gray-200 p-3 rounded-xl outline-none focus:border-[#6366F1] focus:ring-2 focus:ring-[#6366F1]/10 transition-all"
                        />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm font-semibold text-[#1E293B] mb-1">Mật khẩu</label>
                            <input
                                type="password"
                                name="password"
                                placeholder="••••••••"
                                value={formData.password}
                                onChange={handleChange}
                                className="w-full border border-gray-200 p-3 rounded-xl outline-none focus:border-[#6366F1] focus:ring-2 focus:ring-[#6366F1]/10 transition-all"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-semibold text-[#1E293B] mb-1">Xác nhận</label>
                            <input
                                type="password"
                                name="confirmPassword"
                                placeholder="••••••••"
                                value={formData.confirmPassword}
                                onChange={handleChange}
                                className="w-full border border-gray-200 p-3 rounded-xl outline-none focus:border-[#6366F1] focus:ring-2 focus:ring-[#6366F1]/10 transition-all"
                            />
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-semibold text-[#1E293B] mb-1">Bạn là?</label>
                        <select
                            name="role"
                            value={formData.role}
                            onChange={handleChange}
                            className="w-full border border-gray-200 p-3 rounded-xl outline-none focus:border-[#6366F1] cursor-pointer bg-gray-50 font-medium text-[#1E293B]"
                        >
                            <option value="CANDIDATE">Ứng viên tìm việc</option>
                            <option value="RECRUITER">Nhà tuyển dụng</option>
                        </select>
                    </div>

                    {/* //?: Nút Register sử dụng màu Vàng Cam để tạo năng lượng tích cực cho khởi đầu mới */}
                    <button
                        type="submit"
                        className="w-full bg-[#F59E0B] hover:bg-[#D97706] text-white py-3 mt-4 rounded-xl font-bold text-lg shadow-lg shadow-orange-100 transition-all transform active:scale-95"
                    >
                        Đăng ký tài khoản
                    </button>
                </form>

                <div className="mt-8 text-center text-gray-600 text-sm">
                    Already have an account?
                    <Link
                        href="/login"
                        className="text-[#6366F1] ml-1 font-bold hover:underline"
                    >
                        Login
                    </Link>
                </div>
            </div>
        </div>
    );
}