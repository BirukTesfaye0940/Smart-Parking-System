import { adminAuthMiddleware } from "./middleware/adminMiddleware";
import { userAuthMiddleware } from "./middleware/userMiddleware";
import { ownerAuthMiddleware } from "./middleware/ownerMiddleware";

export async function middleware(req) {
  const path = req.nextUrl.pathname;

  if (path.startsWith("/dashboard/admin") || path.startsWith("/api/admin")) {
    return adminAuthMiddleware(req);
  }

  if (path.startsWith("/lot") || path.startsWith("/api/user")) {
    return userAuthMiddleware(req);
  }

  if (path.startsWith("/dashboard/owner") || path.startsWith("/api/owner")) {
    return ownerAuthMiddleware(req);
  }

  return NextResponse.next();
}
export const config = {
  matcher: [
    "/dashboard/admin/:path*",
    "/lot/:path*",
    "/dashboard/owner/:path*",
    "/api/admin/:path*",
    "/api/user/:path*",
    "/api/owner/:path*",
  ],
};