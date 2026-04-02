import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const OLD_HOSTS = new Set(["nexloop.app", "www.nexloop.app"]);
const NEW_HOST = "nexloop.in";

export function middleware(request: NextRequest) {
  const host = request.headers.get("host")?.toLowerCase();

  if (!host || !OLD_HOSTS.has(host)) {
    return NextResponse.next();
  }

  const destination = request.nextUrl.clone();
  destination.protocol = "https:";
  destination.host = NEW_HOST;

  return NextResponse.redirect(destination, 301);
}

export const config = {
  matcher: "/:path*",
};
