import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PRODUCTS } from "@/lib/data";


export async function generateStaticParams() {
  return PRODUCTS.map((p) => ({ category: p.category, product: p.product }));
}

export async function generateMetadata({ params }: { params: Promise<{ category: string; product: string }> }): Promise<Metadata> {
  const { product } = await params;
  const p = PRODUCTS.find((x) => x.product === product);
  if (!p) return {};
  return {
    title: `Buy ${p.name} Online — ₹${p.price}`,
    description: p.description,
    alternates: { canonical: `https://ayurveda.yogmaya.net/shop/${p.category}/${p.product}` },
  };
}

export default async function ProductPage({ params }: { params: Promise<{ category: string; product: string }> }) {
  const { product } = await params;
  const p = PRODUCTS.find((x) => x.product === product);
  if (!p) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: p.name,
    description: p.description,
    offers: {
      "@type": "Offer",
      price: p.price,
      priceCurrency: "INR",
      availability: "https://schema.org/InStock",
    },
  };

  const related = PRODUCTS.filter((x) => x.category === p.category && x.product !== p.product).slice(0, 4);

  return (
    <main className="max-w-5xl mx-auto px-6 py-16">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }} />
      <nav className="text-sm text-ink/50 mb-6">
        <Link href="/" className="hover:text-forest">Home</Link> / <Link href="/shop" className="hover:text-forest">Shop</Link> / <span>{p.name}</span>
      </nav>
      <div className="grid md:grid-cols-2 gap-12">
        <div className="bg-gradient-to-br from-cream to-white rounded-3xl aspect-square flex items-center justify-center text-6xl font-serif text-forest/20 border border-forest/10">
          {p.name[0]}
        </div>
        <div>
          <h1 className="text-4xl font-serif text-forest">{p.name}</h1>
          <p className="mt-3 text-2xl text-saffron font-semibold">₹{p.price}</p>
          <p className="mt-6 text-ink/70 leading-relaxed">{p.description}</p>
          <p className="mt-8 rounded-xl border border-amber-300 bg-amber-50 p-4 text-sm leading-relaxed text-amber-900">ऑनलाइन ऑर्डर और भुगतान अभी सक्रिय नहीं हैं। खरीदारी उपलब्ध होने से पहले उत्पाद की कीमत, स्टॉक, लाइसेंस/लेबल, शिपिंग और रिटर्न नीति सत्यापित की जाएगी।</p>
          <div className="mt-10 border-t border-forest/10 pt-6">
            <h2 className="text-lg font-serif text-forest mb-3">Benefits</h2>
            <p className="text-sm leading-relaxed text-ink/70">Final ingredients, directions, cautions, manufacturer details, applicable licence information, stock, shipping fees and return terms must be verified from the actual product label and fulfilment policy before online sales are enabled.</p>
          </div>
        </div>
      </div>

      {related.length > 0 && (
        <section className="mt-20">
          <h2 className="text-2xl font-serif text-forest mb-6">Related Products</h2>
          <div className="grid md:grid-cols-4 gap-4">
            {related.map((r) => (
              <Link key={r.product} href={`/shop/${r.category}/${r.product}`}
                className="p-4 rounded-2xl border border-forest/10 hover:shadow-lg transition">
                <div className="aspect-square bg-cream rounded-xl mb-3 flex items-center justify-center text-4xl font-serif text-forest/20">{r.name[0]}</div>
                <p className="font-medium text-forest text-sm">{r.name}</p>
                <p className="text-saffron text-sm">₹{r.price}</p>
              </Link>
            ))}
          </div>
        </section>
      )}
    </main>
  );
}
