import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";

export async function adminAuthMiddleware(req) {
  const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });

  if (!token) {
    console.warn("❌ No session token");
    return NextResponse.redirect(new URL("/login", req.url));
  }

  if (token.role !== "admin") {
    console.warn("❌ Not an admin:", token.role);
    return NextResponse.redirect(new URL("/unauthorized", req.url));
  }

  const headers = new Headers(req.headers);
  headers.set("x-user-id", token.id || "");
  headers.set("x-user-role", token.role);

  return NextResponse.next({ request: { headers } });
}
