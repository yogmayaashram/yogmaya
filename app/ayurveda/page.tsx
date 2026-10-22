import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Yog Maya Ayurveda — Traditional Herbal Medicines",
  description: "Pure Ayurvedic medicines handcrafted at Yog Maya Ashram. Shop online.",
};

export default function AyurvedaHome() {
  return (
    <main className="min-h-screen">
      <header className="border-b border-forest/10 bg-cream/80 backdrop-blur sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/" className="font-serif text-2xl text-forest">Yog Maya Ayurveda</Link>
          <nav className="hidden md:flex gap-6 text-sm">
            <Link href="/shop" className="hover:text-forest">Shop</Link>
            <Link href="/ayurvedic-medicine-for/joint-pain" className="hover:text-forest">Remedies</Link>
            <a href="https://yogmaya.net" className="hover:text-forest">Ashram</a>
          </nav>
        </div>
      </header>

      <section className="bg-gradient-to-b from-cream to-white py-24 px-6 text-center">
        <h1 className="text-5xl md:text-7xl font-serif text-forest">Yog Maya Ayurveda</h1>
        <p className="mt-6 text-lg text-ink/70 max-w-2xl mx-auto">
          शुद्ध जड़ी-बूटियों से बनी पारंपरिक आयुर्वेदिक औषधियाँ — सीधे आश्रम से।
        </p>
        <Link href="/shop/joint-pain/ashwagandha-capsules" className="mt-10 inline-block bg-forest text-white px-8 py-3.5 rounded-full hover:bg-saffron transition">
          Shop Now
        </Link>
      </section>

      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6">
          {[
            { slug: "joint-pain", label: "Joint Pain Relief" },
            { slug: "immunity", label: "Immunity Boost" },
            { slug: "digestion", label: "Digestion Support" },
          ].map((x) => (
            <Link key={x.slug} href={`/ayurvedic-medicine-for/${x.slug}`}
              className="p-8 rounded-2xl bg-cream/60 border border-forest/10 hover:shadow-lg transition">
              <h3 className="text-xl font-serif text-forest">{x.label}</h3>
              <p className="mt-2 text-sm text-ink/60">Explore remedies →</p>
            </Link>
          ))}
        </div>
      </section>

      <footer className="bg-forest text-cream py-10 px-6 text-center text-sm">
        <p>© {new Date().getFullYear()} Yog Maya Ayurveda · Pradipanand Jagdamba Parivar Trust</p>
      </footer>
    </main>
  );
}
