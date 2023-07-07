import { NextRequest, NextResponse } from "next/server";

const isPasswordEnabled = !!process.env.PASSWORD_PROTECT;

console.log("isPasswordEnabled", isPasswordEnabled);

export async function middleware(req: NextRequest) {
  const isLoggedIn = req.cookies.has("login");

  console.log("isLoggedIn", isLoggedIn);

  const isPathPasswordProtect =
    req.nextUrl.pathname.startsWith("/password-protect");

  console.log("isPathPasswordProtect", isPathPasswordProtect);

  if (isPasswordEnabled && !isLoggedIn && !isPathPasswordProtect) {
    return NextResponse.redirect(new URL("/password-protect", req.url));
  }

  return NextResponse.next();
}
export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - favicon.ico (favicon file)
     */
    "/((?!api|_next/static|favicon.ico|under-development.svg).*)",
  ],
};
