import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const CANONICAL_HOST = "nexloop.in";

/** Hosts that should 301 to https://nexloop.in (fixes GSC "Page with redirect" duplicates) */
const REDIRECT_HOSTS = new Set([
  "www.nexloop.in",
  "nexloop.app",
  "www.nexloop.app",
]);

export function middleware(request: NextRequest) {
  const host = request.headers.get("host")?.toLowerCase().split(":")[0] ?? "";
  const proto = request.headers.get("x-forwarded-proto");
  const url = request.nextUrl.clone();

  let target = new URL(url.pathname + url.search, `https://${CANONICAL_HOST}`);

  if (REDIRECT_HOSTS.has(host)) {
    return NextResponse.redirect(target, 301);
  }

  const isLocal = host === "localhost" || host === "127.0.0.1";

  if (proto === "http" && !isLocal) {
    return NextResponse.redirect(target, 301);
  }

  if (host && host !== CANONICAL_HOST && (host.endsWith(".vercel.app") || isLocal)) {
    return NextResponse.next();
  }

  if (url.pathname.length > 1 && url.pathname.endsWith("/")) {
    target = new URL(url.pathname.slice(0, -1) + url.search, `https://${CANONICAL_HOST}`);
    return NextResponse.redirect(target, 301);
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico)$).*)",
  ],
};
