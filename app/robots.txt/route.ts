import { headers } from "next/headers";
export const runtime = "edge";
export async function GET() {
  const h = await headers();
  const host = h.get("host") || "yogmaya.net";
  const sitemap = host.includes("ayurveda")
    ? "https://ayurveda.yogmaya.net/sitemap-ayurveda.xml"
    : host.includes("meditate") || host.includes("meditation")
    ? "https://meditate.yogmaya.net/sitemap-meditation.xml"
    : "https://yogmaya.net/sitemap-ashram.xml";
  const body = `User-agent: *\nAllow: /\nSitemap: ${sitemap}\n`;
  return new Response(body, { headers: { "Content-Type": "text/plain" } });
}
