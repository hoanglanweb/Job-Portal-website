import { prisma } from "@/prisma/prisma";
import { hash } from "bcryptjs";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, password, role } = body;
    const exitingUser = await prisma.user.findUnique({
      where: { email },
    });

    if (exitingUser) {
      return NextResponse.json(
        { message: "email already exits" },
        { status: 400 },
      );
    }

    const handlePassword = await hash(password, 10);

    const user = await prisma.user.create({
      data: {
        name,
        email,
        password: handlePassword,
        role,
      },
    });

    return NextResponse.json(user);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: "Something went wrong" },
      { status: 400 },
    );
  }
}
