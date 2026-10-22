import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PROBLEMS, PRODUCTS } from "@/lib/data";

export async function generateStaticParams() {
  return PROBLEMS.map((x) => ({ problem: x.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ problem: string }> }): Promise<Metadata> {
  const { problem } = await params;
  const x = PROBLEMS.find((y) => y.slug === problem);
  if (!x) return {};
  return {
    title: `Best Ayurvedic Medicine for ${x.label} — Yog Maya Ayurveda`,
    description: `Top Ayurvedic remedies for ${x.label} from Yog Maya Ashram. Traditionally prepared, pure ingredients.`,
    alternates: { canonical: `https://ayurveda.yogmaya.net/ayurvedic-medicine-for/${x.slug}` },
  };
}

export default async function ProblemPage({ params }: { params: Promise<{ problem: string }> }) {
  const { problem } = await params;
  const x = PROBLEMS.find((y) => y.slug === problem);
  if (!x) notFound();
  const matches = PRODUCTS.filter((p) => p.category === problem);

  return (
    <main className="max-w-4xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-serif text-forest">Ayurvedic Medicine for {x.label}</h1>
      <p className="mt-6 text-ink/70 leading-relaxed">{x.description}</p>

      <section className="mt-12">
        <h2 className="text-2xl font-serif text-forest mb-6">Recommended Products</h2>
        {matches.length === 0 ? (
          <p className="text-ink/60">Coming soon.</p>
        ) : (
          <div className="grid md:grid-cols-2 gap-4">
            {matches.map((p) => (
              <Link key={p.product} href={`/shop/${p.category}/${p.product}`}
                className="p-6 rounded-2xl border border-forest/10 hover:shadow-lg transition">
                <p className="font-serif text-xl text-forest">{p.name}</p>
                <p className="text-saffron mt-1">₹{p.price}</p>
              </Link>
            ))}
          </div>
        )}
      </section>
    </main>
  );
}
