import { adminAuthMiddleware } from "./middleware/adminMiddleware";
import { userAuthMiddleware } from "./middleware/userMiddleware";
import { ownerAuthMiddleware } from "./middleware/ownerMiddleware";

export async function middleware(req) {
  const path = req.nextUrl.pathname;

  if (path.startsWith("/admin") || path.startsWith("/api/admin")) {
    return adminAuthMiddleware(req);
  }

  if (path.startsWith("/user") || path.startsWith("/api/user")) {
    return userAuthMiddleware(req);
  }

  if (path.startsWith("/owner") || path.startsWith("/api/owner")) {
    return ownerAuthMiddleware(req);
  }

  return NextResponse.next();
}
export const config = {
  matcher: [
    "/admin/:path*",
    "/user/:path*",
    "/owner/:path*",
    "/api/admin/:path*",
    "/api/user/:path*",
    "/api/owner/:path*",
  ],
};