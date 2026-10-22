import Link from "next/link";
import { PRODUCTS } from "@/lib/data";
export default function ShopPage() {
  return (
    <main className="min-h-screen bg-cream py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-serif text-forest mb-8">Ayurvedic Shop</h1>
        <div className="grid md:grid-cols-3 gap-6">
          {PRODUCTS.map((p) => (
            <Link key={p.product} href={`/shop/${p.category}/${p.product}`} className="bg-white p-6 rounded-2xl border border-forest/10 hover:shadow-xl transition">
              <div className="h-40 bg-cream rounded-xl mb-4 flex items-center justify-center text-4xl font-serif text-forest/20">{p.name[0]}</div>
              <h3 className="text-xl font-serif text-forest">{p.name}</h3>
              <p className="text-saffron font-semibold mt-2">₹{p.price}</p>
            </Link>
          ))}
        </div>
        <Link href="/" className="inline-block mt-12 text-forest hover:underline">← Back to Home</Link>
      </div>
    </main>
  );
}
