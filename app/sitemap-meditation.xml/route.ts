export const dynamic = "force-static";
const urls = ["/", "/programs"];
export async function GET() {
  const body = `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls.map((u) => `<url><loc>https://meditate.yogmaya.net${u}</loc></url>`).join("")}</urlset>`;
  return new Response(body, { headers: { "Content-Type": "application/xml" } });
}
