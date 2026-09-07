import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const hiddenTemplateRoutes = new Set([
  "/alerts",
  "/avatars",
  "/badge",
  "/bar-chart",
  "/basic-tables",
  "/blank",
  "/buttons",
  "/calendar",
  "/form-elements",
  "/images",
  "/line-chart",
  "/modals",
  "/profile",
  "/signin",
  "/signup",
  "/videos",
]);

export function proxy(request: NextRequest) {
  if (hiddenTemplateRoutes.has(request.nextUrl.pathname)) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/alerts",
    "/avatars",
    "/badge",
    "/bar-chart",
    "/basic-tables",
    "/blank",
    "/buttons",
    "/calendar",
    "/form-elements",
    "/images",
    "/line-chart",
    "/modals",
    "/profile",
    "/signin",
    "/signup",
    "/videos",
  ],
};
