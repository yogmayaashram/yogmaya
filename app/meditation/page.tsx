import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Yog Maya Meditation — Meditation Center",
  description: "Guided meditation sessions for peace, balance, and self-realization.",
};

export default function MeditationHome() {
  return (
    <main className="min-h-screen bg-cream">
      <header className="border-b border-maroon/10 bg-cream/80 backdrop-blur sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/" className="font-serif text-2xl text-maroon">Yog Maya Meditation</Link>
          <nav className="hidden md:flex gap-6 text-sm">
            <Link href="/programs" className="hover:text-saffron">Programs</Link>
            <a href="https://yogmaya.net" className="hover:text-saffron">Ashram</a>
          </nav>
        </div>
      </header>

      <section className="flex items-center justify-center px-6 py-32">
        <div className="max-w-3xl text-center">
          <h1 className="text-5xl md:text-7xl font-serif text-maroon leading-tight">Yog Maya Meditation</h1>
          <p className="mt-6 text-lg text-ink/70 leading-relaxed">
            शांति, संतुलन और आत्म-जागृति के लिए मार्गदर्शित ध्यान सत्र।
          </p>
          <Link href="/meditation/programs" className="mt-10 inline-block bg-maroon text-white px-8 py-3.5 rounded-full hover:bg-saffron transition">
            कार्यक्रम देखें
          </Link>
        </div>
      </section>

      <footer className="bg-ink text-cream/70 py-10 px-6 text-center text-sm">
        <p>© {new Date().getFullYear()} Yog Maya Meditation · Pradipanand Jagdamba Parivar Trust</p>
      </footer>
    </main>
  );
}
