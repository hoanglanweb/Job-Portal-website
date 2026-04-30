import NextAuth from "next-auth";

declare module "next-auth" {
  interface User {
    id: string;
    role: string; // 👈 thêm dòng này
  }

  interface Session {
    user: {
      id: string;
      role: string; // 👈 thêm dòng này
    } & DefaultSession["user"];
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    id: string;
    role: string; // 👈 thêm dòng này
  }
}
