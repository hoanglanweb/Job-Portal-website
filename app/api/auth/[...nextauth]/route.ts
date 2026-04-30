import NextAuth from "next-auth";
import { authOptions } from "@/lib/auth";

export const runtime = "nodejs"; //!: ép router chạy trên nodejs

const handler = NextAuth(authOptions); //!: handler bây giờ là một function xử lý HTTP request


export { handler as GET, handler as POST };
//!: GET  → /api/auth/session, /api/auth/providers, ...
//!: POST → /api/auth/signin, /api/auth/signout, ...