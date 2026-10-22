import { NextRequest, NextResponse } from "next/server";
import { refreshSupabaseSession } from "@/lib/supabase/middleware";

const SITE_PREFIX: Record<string, string> = { ayurveda: "/ayurveda", meditate: "/meditation", meditation: "/meditation" };
const PORTAL_PATHS = ["/auth", "/dashboard", "/membership", "/booking", "/admin"];

export async function middleware(req: NextRequest) {
  const sessionResponse = await refreshSupabaseSession(req);
  const host = (req.headers.get("host") || "").split(":")[0].toLowerCase();
  const sub = host.split(".")[0];
  const prefix = SITE_PREFIX[sub];
  const path = req.nextUrl.pathname;
  if (!prefix || path.startsWith(prefix) || PORTAL_PATHS.some((item) => path === item || path.startsWith(`${item}/`))) return sessionResponse;
  const url = req.nextUrl.clone();
  url.pathname = prefix + (path === "/" ? "" : path);
  const rewritten = NextResponse.rewrite(url, { request: req });
  sessionResponse.cookies.getAll().forEach((cookie) => rewritten.cookies.set(cookie));
  return rewritten;
}

export const config = { matcher: ["/((?!_next|favicon.ico|.*\\..*).*)"] };
