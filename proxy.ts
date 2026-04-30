import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

//!: Lấy role từ cookie
export function proxy(request: NextRequest) {
  //!: Proxy chạy trước mọi request
  const role = request.cookies.get("role")?.value;

  const { pathname } = request.nextUrl;
  //!: Nếu vào route recruiter mà không phải recruiter → redirect
  if (pathname.startsWith("/recruiter") && role !== "RECRUITER") {
    return NextResponse.redirect(new URL("/", request.url));
  }
  //!: Nếu vào route candidate mà không phải candidate → redirect
  if (pathname.startsWith("/candidate") && role !== "CANDIDATE") {
    return NextResponse.redirect(new URL("/", request.url));
  }

  //!: Nếu hợp lệ → cho request tiếp tục
  return NextResponse.next();
}
//!: matcher giới hạn route áp dụng
export const config = {
  matcher: ["/recruiter/:path*", "/candidate/:path*"],
};
