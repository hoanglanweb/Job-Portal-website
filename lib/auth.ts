import { prisma } from "@/prisma/prisma";
import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { compare } from "bcryptjs";

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: { type: "text" },
        password: { type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) return null;

        const user = await prisma.user.findUnique({
          where: {
            email: credentials.email, // ✅ sửa lại
          },
        });

        if (!user) return null;

        const isPasswordCorrect = await compare(
          credentials.password,
          user.password,
        );

        if (!isPasswordCorrect) return null;

        return {
          id: user.id, // ✅ sửa lại
          email: user.email, // ✅ sửa lại
          name: user.name, // ✅ sửa lại
        };
      },
    }),
  ],
  session: { strategy: "jwt" },
  pages: { signIn: "/login" },
  secret: process.env.NEXTAUTH_SECRET,
};
