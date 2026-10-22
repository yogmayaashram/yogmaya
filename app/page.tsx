import Link from "next/link";
import { ArrowRight, Sparkles, Heart, ShieldCheck, Sun } from "lucide-react";
import { FadeUp, StaggerContainer, StaggerItem } from "@/components/motion-wrapper";
import { HeroCarousel } from "@/components/hero-carousel";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-cream">
      {/* HEADER (Glassmorphism) */}
      <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-white/10 backdrop-blur-md">
        <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
          <Link href="/" className="font-serif text-3xl text-white">Yog Maya</Link>
          <nav className="hidden md:flex gap-8 text-sm font-medium text-white/90">
            <Link href="/puja" className="hover:text-gold transition">पूजा</Link>
            <Link href="/pashushala" className="hover:text-gold transition">गौशाला</Link>
            <a href="https://ayurveda.yogmaya.net" className="hover:text-gold transition">आयुर्वेद</a>
            <a href="https://meditate.yogmaya.net" className="hover:text-gold transition">ध्यान</a>
            <Link href="/donate" className="bg-saffron text-white px-5 py-2.5 rounded-full hover:bg-gold transition shadow-lg shadow-saffron/30">दान करें</Link>
          </nav>
        </div>
      </header>

      {/* HERO SECTION (Slider + Animations) */}
      <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
        <HeroCarousel />
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto mt-16">
          <FadeUp delay={0.2}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur-md text-white text-sm font-medium mb-8 border border-white/30">
              <Sparkles className="w-4 h-4 text-gold" />
              Pradipanand Jagdamba Parivar Trust
            </div>
          </FadeUp>
          <FadeUp delay={0.4}>
            <h1 className="text-5xl md:text-7xl font-serif text-white leading-tight drop-shadow-lg mb-6">
              Yog Maya Ashram
            </h1>
          </FadeUp>
          <FadeUp delay={0.6}>
            <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto leading-relaxed drop-shadow-md">
              जहाँ आस्था, सेवा और संस्कृति एक साथ जीवंत होते हैं —
              पूजा, गौसेवा, ध्यान और आध्यात्मिक साधना का पावन केंद्र।
            </p>
          </FadeUp>
          <FadeUp delay={0.8}>
            <div className="mt-10 flex flex-wrap gap-4 justify-center">
              <Link href="/puja" className="inline-flex items-center gap-2 bg-saffron text-white px-8 py-4 rounded-full font-medium hover:bg-gold transition shadow-lg shadow-saffron/30">
                पूजा बुक करें <ArrowRight className="w-5 h-5" />
              </Link>
              <Link href="/pashushala" className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/30 text-white px-8 py-4 rounded-full font-medium hover:bg-white hover:text-maroon transition">
                गौशाला देखें
              </Link>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* THREE PILLARS (Scroll Animation) */}
      <section className="py-24 px-6 bg-cream relative">
        <div className="max-w-6xl mx-auto">
          <FadeUp>
            <h2 className="text-4xl font-serif text-maroon text-center mb-16">हमारे मुख्य सेवा कार्य</h2>
          </FadeUp>
          <StaggerContainer className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Sun, t: "पूजा एवं अनुष्ठान", d: "वैदिक विधि से घर, व्यापार और जीवन के हर शुभ अवसर के लिए पूजा।", color: "text-saffron" },
              { icon: Heart, t: "गौसेवा / पशुशाला", d: "गौ माता की सेवा, देखभाल और गौ-आधारित जीवनशैली को बढ़ावा।", color: "text-maroon" },
              { icon: ShieldCheck, t: "ध्यान एवं साधना", d: "शांति, स्वास्थ्य और आत्म-जागृति के लिए मार्गदर्शित ध्यान सत्र।", color: "text-forest" },
            ].map((x) => (
              <StaggerItem key={x.t}>
                <div className="p-8 rounded-3xl bg-white border border-maroon/5 shadow-xl shadow-maroon/5 hover:-translate-y-2 transition duration-300 group h-full">
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 bg-cream ${x.color} group-hover:scale-110 transition`}>
                    <x.icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-2xl font-serif text-maroon mb-3">{x.t}</h3>
                  <p className="text-ink/60 leading-relaxed">{x.d}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* CTA SECTION (Animated Gradient) */}
      <section className="py-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-maroon via-saffron to-maroon bg-[length:200%_200%] animate-[gradient_5s_ease_infinite]" />
        <div className="relative z-10 max-w-4xl mx-auto text-center text-white">
          <FadeUp>
            <h2 className="text-4xl md:text-5xl font-serif mb-6 drop-shadow-md">सेवा में सहयोग करें</h2>
            <p className="text-lg md:text-xl opacity-90 mb-10 max-w-2xl mx-auto">
              आपका हर दान गौसेवा, पूजा और आश्रम की सेवा को सशक्त बनाता है। आइए, मिलकर इस पावन कार्य का हिस्सा बनें।
            </p>
            <Link href="/donate" className="inline-block bg-white text-maroon px-10 py-4 rounded-full font-bold hover:bg-gold hover:text-white transition shadow-2xl">
              अभी दान करें
            </Link>
          </FadeUp>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-ink text-cream/70 py-16 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-12">
          <div>
            <h3 className="font-serif text-2xl text-white mb-4">Yog Maya Ashram</h3>
            <p className="text-sm leading-relaxed">Pradipanand Jagdamba Parivar Trust<br/>A place of faith, service, and spiritual awakening.</p>
          </div>
          <div>
            <h4 className="font-serif text-lg text-white mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/about" className="hover:text-gold transition">About Trust</Link></li>
              <li><Link href="/puja" className="hover:text-gold transition">Puja Services</Link></li>
              <li><Link href="/contact" className="hover:text-gold transition">Contact Us</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-serif text-lg text-white mb-4">Our Network</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="https://ayurveda.yogmaya.net" className="hover:text-gold transition">Yog Maya Ayurveda</a></li>
              <li><a href="https://meditate.yogmaya.net" className="hover:text-gold transition">Yog Maya Meditation</a></li>
            </ul>
          </div>
        </div>
        <div className="max-w-6xl mx-auto mt-12 pt-8 border-t border-white/10 text-center text-sm">
          <p>© {new Date().getFullYear()} Pradipanand Jagdamba Parivar Trust. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}
