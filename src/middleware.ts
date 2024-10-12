import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const token = request.cookies.get("token");

  const protectedRoutes = [
    "/ratingstar",
    "/passwordinput",
    "/infinitehumanlist",
    "/intersectionObserver",
    "/multistepform",
  ];

  if (!token && protectedRoutes.includes(pathname)) {
    const url = new URL("/login", request.url);
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/ratingstar", "/passwordinput", "/infinitehumanlist", "/intersectionObserver", "/multistepform"], // Lista ścieżek do ochrony
};
