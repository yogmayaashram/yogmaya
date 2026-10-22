import { NextRequest, NextResponse } from "next/server";

const SITE_PREFIX: Record<string, string> = {
  ayurveda: "/ayurveda",
  meditate: "/meditation",
  meditation: "/meditation",
};

export function middleware(req: NextRequest) {
  const host = (req.headers.get("host") || "").toLowerCase();
  const url = req.nextUrl.clone();

  if (url.pathname.startsWith("/ayurveda") || url.pathname.startsWith("/meditation")) {
    return NextResponse.next();
  }

  const sub = host.split(".")[0];
  const prefix = SITE_PREFIX[sub];

  if (prefix && !url.pathname.startsWith(prefix)) {
    url.pathname = prefix + (url.pathname === "/" ? "" : url.pathname);
    return NextResponse.rewrite(url);
  }
  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next|favicon.ico|.*\\..*).*)"],
};
