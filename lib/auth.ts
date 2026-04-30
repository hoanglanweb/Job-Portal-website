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
        //!: định nghĩa field input cho form login
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) return null;
        //!: thiếu email/password → từ chối login
        const user = await prisma.user.findUnique({
          where: {
            email: credentials.email, //!: tìm user theo email trong DB
          },
        });

        if (!user) return null;

        //!: so sánh password nhập với password hash trong DB
        const isPasswordCorrect = await compare(
          credentials.password,
          user.password,
        );

        if (!isPasswordCorrect) return null;

        //!: trả về object user
        //!: object này sẽ được truyền vào callback jwt
        return {
          id: user.id, // ✅ sửa lại
          email: user.email, // ✅ sửa lại
          name: user.name, // ✅ sửa lại
          role: user.role,
        };
      },
    }),
  ],
  //!: dùng JWT thay vì database session
  //!: → nhanh hơn, không cần lưu session table
  session: { strategy: "jwt" },
  pages: { signIn: "/login" },
  //!: key để mã hoá JWT (bắt buộc phải có trong production)
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.role = user.role;
         //!: lưu id + role vào token
        //!: dùng cho middleware + API
      }
      return token;
    },
    //!: map dữ liệu từ token → session
    async session({ session, token }) {
      if (session.user) {
        session.user.id = token.id as string;
        session.user.role = token.role as string;
        //!: có thể dùng sesion.user.role
      }
      return session;
    },
  },
};
