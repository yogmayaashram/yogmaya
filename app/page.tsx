import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <header className="border-b border-maroon/10 bg-cream/80 backdrop-blur sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/" className="font-serif text-2xl text-maroon">Yog Maya</Link>
          <nav className="hidden md:flex gap-6 text-sm">
            <Link href="/puja" className="hover:text-saffron">पूजा</Link>
            <Link href="/pashushala" className="hover:text-saffron">गौशाला</Link>
            <a href="https://ayurveda.yogmaya.net" className="hover:text-saffron">आयुर्वेद</a>
            <a href="https://meditate.yogmaya.net" className="hover:text-saffron">ध्यान</a>
            <Link href="/donate" className="bg-saffron text-white px-4 py-2 rounded-full">दान</Link>
          </nav>
        </div>
      </header>

      <section className="relative bg-gradient-to-b from-cream via-cream to-white py-24 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-saffron/10 text-saffron text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4" /> Pradipanand Jagdamba Parivar Trust
          </div>
          <h1 className="text-5xl md:text-7xl font-serif text-maroon leading-tight">
            Yog Maya Ashram
          </h1>
          <p className="mt-6 text-lg text-ink/70 max-w-2xl mx-auto leading-relaxed">
            जहाँ आस्था, सेवा और संस्कृति एक साथ जीवंत होते हैं —
            पूजा, गौसेवा, ध्यान और आध्यात्मिक साधना का पावन केंद्र।
          </p>
          <div className="mt-10 flex flex-wrap gap-4 justify-center">
            <Link href="/puja" className="inline-flex items-center gap-2 bg-saffron text-white px-7 py-3.5 rounded-full font-medium hover:bg-maroon transition">
              पूजा बुक करें <ArrowRight className="w-4 h-4" />
            </Link>
            <Link href="/pashushala" className="inline-flex items-center gap-2 border border-maroon/20 text-maroon px-7 py-3.5 rounded-full font-medium hover:bg-maroon hover:text-white transition">
              गौशाला देखें
            </Link>
          </div>
        </div>
      </section>

      <section className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
          {[
            { t: "पूजा एवं अनुष्ठान", d: "वैदिक विधि से घर, व्यापार और जीवन के हर शुभ अवसर के लिए पूजा।" },
            { t: "गौसेवा / पशुशाला", d: "गौ माता की सेवा, देखभाल और गौ-आधारित जीवनशैली को बढ़ावा।" },
            { t: "ध्यान एवं साधना", d: "शांति, स्वास्थ्य और आत्म-जागृति के लिए मार्गदर्शित ध्यान सत्र।" },
          ].map((x) => (
            <div key={x.t} className="p-8 rounded-2xl border border-maroon/10 bg-cream/40 hover:shadow-xl transition">
              <h3 className="text-2xl text-maroon mb-3">{x.t}</h3>
              <p className="text-ink/70 leading-relaxed">{x.d}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-24 px-6 bg-gradient-to-r from-maroon to-saffron text-white text-center">
        <h2 className="text-4xl font-serif mb-4">सेवा में सहयोग करें</h2>
        <p className="opacity-90 mb-8 max-w-xl mx-auto">
          आपका हर दान गौसेवा, पूजा और आश्रम की सेवा को सशक्त बनाता है।
        </p>
        <Link href="/donate" className="inline-block bg-white text-maroon px-8 py-3.5 rounded-full font-medium hover:bg-gold hover:text-white transition">
          दान करें
        </Link>
      </section>

      <footer className="bg-ink text-cream/70 py-12 px-6 text-center text-sm">
        <p>© {new Date().getFullYear()} Pradipanand Jagdamba Parivar Trust · Yog Maya Ashram</p>
        <div className="mt-3 flex gap-4 justify-center">
          <a href="https://ayurveda.yogmaya.net" className="hover:text-gold">Ayurveda</a>
          <a href="https://meditate.yogmaya.net" className="hover:text-gold">Meditation</a>
        </div>
      </footer>
    </main>
  );
}
