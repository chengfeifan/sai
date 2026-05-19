import { NextResponse, type NextRequest } from "next/server";

const protectedRoutes = ["/dashboard", "/timeline", "/albums", "/blog", "/anniversaries", "/settings"];

export function middleware(request: NextRequest) {
  const hasAuth = Boolean(request.cookies.get("sb-access-token")?.value || request.cookies.get("sb:token")?.value);
  const isProtected = protectedRoutes.some((r) => request.nextUrl.pathname.startsWith(r));

  if (isProtected && !hasAuth) {
    return NextResponse.redirect(new URL("/login", request.url));
  }
  if (request.nextUrl.pathname === "/login" && hasAuth) {
    return NextResponse.redirect(new URL("/dashboard", request.url));
  }
  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard/:path*", "/timeline/:path*", "/albums/:path*", "/blog/:path*", "/anniversaries/:path*", "/settings/:path*", "/login"],
};
