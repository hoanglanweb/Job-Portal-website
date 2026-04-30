import { NextResponse } from "next/server";
import { prisma } from "@/prisma/prisma";
import { hash } from "bcryptjs";
import { Role } from "@prisma/client";

export const runtime = "nodejs";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, password, role } = body;

    //!: validate server-side
    if (!name || !email || !password) {
      return NextResponse.json({ message: "Thiếu dữ liệu" }, { status: 400 });
    }

    if (!email.includes("@")) {
      return NextResponse.json(
        { message: "Email không hợp lệ" },
        { status: 400 },
      );
    }

    if (password.length < 6) {
      return NextResponse.json(
        { message: "Password quá ngắn" },
        { status: 400 },
      );
    }

    //!: check user tồn tại
    const existingUser = await prisma.user.findUnique({
      where: { email },
    });

    if (existingUser) {
      return NextResponse.json(
        { message: "Email đã tồn tại" },
        { status: 409 },
      );
    }

    //!: ash password
    const hashedPassword = await hash(password, 10);

    //!: KHÔNG tin role từ client
    const safeRole = role === "RECRUITER" ? Role.RECRUITER : Role.CANDIDATE;
    const user = await prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
        role: safeRole,
      },
    });

    return NextResponse.json(
      {
        message: "Tạo tài khoản thành công",
        userId: user.id,
      },
      { status: 201 },
    );
  } catch (error) {
    console.error("REGISTER ERROR:", error);

    return NextResponse.json({ message: "Lỗi server" }, { status: 500 });
  }
}
