import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const publicRoutes = ["/sign-in", "/sign-up", "/", "/about"];

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const token = request.cookies.get("jwt_token")?.value;

  if (
    !token &&
    !publicRoutes.includes(pathname) &&
    !pathname.startsWith("/api")
  ) {
    return NextResponse.redirect(new URL("/sign-in", request.url));
  }

  if (token && publicRoutes.includes(pathname)) {
    return NextResponse.redirect(new URL("/dashboard", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    "/((?!_next/static|_next/image|favicon.ico).*)",
  ],
};
