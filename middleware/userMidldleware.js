import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";

export async function userAuthMiddleware(req) {
  const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });

  if (!token) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  if (token.role !== "user") {
    return NextResponse.redirect(new URL("/unauthorized", req.url));
  }

  const headers = new Headers(req.headers);
  headers.set("x-user-id", token.id || "");
  headers.set("x-user-role", token.role);

  return NextResponse.next({ request: { headers } });
}
