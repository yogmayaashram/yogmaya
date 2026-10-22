import { PRODUCTS, PROBLEMS } from "@/lib/data";
export const dynamic = "force-static";
export async function GET() {
  const all = ["/", "/shop",
    ...PRODUCTS.map((p) => `/shop/${p.category}/${p.product}`),
    ...PROBLEMS.map((p) => `/ayurvedic-medicine-for/${p.slug}`)];
  const body = `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${all.map((u) => `<url><loc>https://ayurveda.yogmaya.net${u}</loc></url>`).join("")}</urlset>`;
  return new Response(body, { headers: { "Content-Type": "application/xml" } });
}
