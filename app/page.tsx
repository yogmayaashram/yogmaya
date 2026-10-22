"use client";

import Link from "next/link";
import { ArrowRight, Sparkles, Heart, ShieldCheck, Sun, Star, Quote, MapPin, Phone, Mail } from "lucide-react";
import { motion } from "framer-motion";

// Animation Variants
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const stagger = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
};

export default function HomePage() {
  return (
    <main className="min-h-screen bg-cream overflow-hidden selection:bg-saffron selection:text-white">
      
      {/* PREMIUM GLASS NAVBAR */}
      <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-black/20 backdrop-blur-xl transition-all duration-300">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-saffron to-gold flex items-center justify-center text-white font-serif text-xl shadow-lg group-hover:scale-105 transition">
              ॐ
            </div>
            <span className="font-serif text-2xl text-white tracking-wide">Yog Maya</span>
          </Link>
          <nav className="hidden md:flex gap-8 text-sm font-medium text-white/80">
            <Link href="/puja" className="hover:text-gold transition">पूजा सेवा</Link>
            <Link href="/pashushala" className="hover:text-gold transition">गौशाला</Link>
            <a href="https://ayurveda.yogmaya.net" className="hover:text-gold transition">आयुर्वेद</a>
            <a href="https://meditate.yogmaya.net" className="hover:text-gold transition">ध्यान केंद्र</a>
            <Link href="/about" className="hover:text-gold transition">हमारे बारे में</Link>
          </nav>
          <Link href="/donate" className="hidden md:inline-flex bg-white text-maroon px-6 py-2.5 rounded-full font-semibold hover:bg-gold hover:text-white transition-all shadow-[0_0_20px_rgba(255,255,255,0.3)]">
            दान करें
          </Link>
        </div>
      </header>

      {/* CINEMATIC HERO SECTION */}
      <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
        {/* Background Image & Overlays */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1545389336-cf090694435e?q=80&w=2000&auto=format&fit=crop" 
            alt="Ashram" 
            className="w-full h-full object-cover scale-105 animate-[pulse_20s_ease-in-out_infinite]"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-cream" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-black/20 to-black/60" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto mt-20">
          <motion.div initial="hidden" animate="visible" variants={stagger}>
            <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/10 backdrop-blur-md text-white text-sm font-medium mb-8 border border-white/20 shadow-2xl">
              <Sparkles className="w-4 h-4 text-gold" />
              <span>Pradipanand Jagdamba Parivar Trust</span>
            </motion.div>
            
            <motion.h1 variants={fadeUp} className="text-6xl md:text-8xl lg:text-9xl font-serif text-white leading-[1.1] mb-8 drop-shadow-2xl">
              Yog Maya <br className="hidden md:block"/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold via-saffron to-gold animate-gradient-x">Ashram</span>
            </motion.h1>
            
            <motion.p variants={fadeUp} className="text-lg md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed drop-shadow-lg mb-12 font-light">
              जहाँ आस्था, सेवा और संस्कृति एक साथ जीवंत होते हैं — पूजा, गौसेवा, ध्यान और आध्यात्मिक साधना का पावन केंद्र।
            </motion.p>
            
            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link href="/puja" className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-saffron text-white px-8 py-4 rounded-full font-medium hover:bg-gold transition shadow-[0_0_30px_rgba(226,88,34,0.4)] hover:shadow-[0_0_40px_rgba(201,162,39,0.6)] hover:-translate-y-1">
                पूजा बुक करें <ArrowRight className="w-5 h-5" />
              </Link>
              <Link href="/pashushala" className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-md border border-white/30 text-white px-8 py-4 rounded-full font-medium hover:bg-white hover:text-maroon transition">
                गौशाला देखें
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* STATS SECTION (Enterprise Trust) */}
      <section className="relative z-20 -mt-20 max-w-6xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}
          className="bg-white rounded-3xl shadow-2xl border border-maroon/5 p-8 md:p-12 grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-maroon/10"
        >
          {[
            { num: "10K+", label: "Devotees Served" },
            { num: "500+", label: "Cows Protected" },
            { num: "1K+", label: "Pujas Performed" },
            { num: "25+", label: "Years of Seva" },
          ].map((s, i) => (
            <div key={i} className="px-4">
              <p className="text-4xl md:text-5xl font-serif text-maroon mb-2">{s.num}</p>
              <p className="text-sm font-medium text-ink/60 uppercase tracking-wider">{s.label}</p>
            </div>
          ))}
        </motion.div>
      </section>

      {/* CORE SERVICES (Premium Cards) */}
      <section className="py-32 px-6 bg-cream relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-sm font-bold text-saffron uppercase tracking-widest mb-3">Our Divine Services</h2>
            <h3 className="text-4xl md:text-5xl font-serif text-maroon">हमारे मुख्य सेवा कार्य</h3>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Sun, t: "पूजा एवं अनुष्ठान", d: "वैदिक विधि से घर, व्यापार और जीवन के हर शुभ अवसर के लिए पूजा।", color: "from-saffron to-orange-400" },
              { icon: Heart, t: "गौसेवा / पशुशाला", d: "गौ माता की सेवा, देखभाल और गौ-आधारित जीवनशैली को बढ़ावा।", color: "from-maroon to-red-400" },
              { icon: ShieldCheck, t: "ध्यान एवं साधना", d: "शांति, स्वास्थ्य और आत्म-जागृति के लिए मार्गदर्शित ध्यान सत्र।", color: "from-forest to-green-500" },
            ].map((x, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.15, duration: 0.6 }}
                className="group relative bg-white p-10 rounded-3xl border border-maroon/5 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden"
              >
                <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${x.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`} />
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-8 bg-gradient-to-br ${x.color} text-white shadow-lg group-hover:scale-110 transition-transform duration-500`}>
                  <x.icon className="w-8 h-8" />
                </div>
                <h4 className="text-2xl font-serif text-maroon mb-4">{x.t}</h4>
                <p className="text-ink/70 leading-relaxed mb-6">{x.d}</p>
                <Link href="#" className="inline-flex items-center gap-2 text-sm font-bold text-saffron group-hover:gap-3 transition-all">
                  Learn More <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT / MISSION (Split Layout) */}
      <section className="py-24 px-6 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">
          <motion.div 
            initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}
            className="flex-1 relative"
          >
            <div className="absolute -inset-4 bg-gold/20 rounded-3xl transform -rotate-3" />
            <img 
              src="https://images.unsplash.com/photo-1582719478250-c8942f79a527?q=80&w=1000&auto=format&fit=crop" 
              alt="Gau Seva" 
              className="relative rounded-3xl shadow-2xl w-full object-cover aspect-[4/5] md:aspect-square"
            />
            <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-xl flex items-center gap-4 border border-maroon/10">
              <div className="w-12 h-12 bg-saffron/10 rounded-full flex items-center justify-center text-saffron">
                <Heart className="w-6 h-6" />
              </div>
              <div>
                <p className="text-2xl font-serif text-maroon font-bold">100%</p>
                <p className="text-xs text-ink/60 font-medium uppercase">Seva Dedication</p>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}
            className="flex-1"
          >
            <h2 className="text-sm font-bold text-saffron uppercase tracking-widest mb-3">Our Mission</h2>
            <h3 className="text-4xl md:text-5xl font-serif text-maroon mb-6 leading-tight">संस्कृति और सेवा का पावन संगम</h3>
            <p className="text-ink/70 text-lg leading-relaxed mb-6">
              Pradipanand Jagdamba Parivar Trust का उद्देश्य भारतीय संस्कृति, वैदिक परंपराओं और गौसेवा को संरक्षित और पुनर्जीवित करना है। Yog Maya Ashram न केवल एक धार्मिक स्थल है, बल्कि यह आत्म-जागृति और निःस्वार्थ सेवा का केंद्र है।
            </p>
            <ul className="space-y-4 mb-8">
              {["वैदिक ज्ञान और अनुष्ठानों का संरक्षण", "गौ माता की निःस्वार्थ सेवा", "आधुनिक जीवन में ध्यान और शांति"].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-ink/80 font-medium">
                  <div className="w-6 h-6 rounded-full bg-forest/10 text-forest flex items-center justify-center text-xs">✓</div>
                  {item}
                </li>
              ))}
            </ul>
            <Link href="/about" className="inline-flex items-center gap-2 border-b-2 border-saffron pb-1 text-maroon font-bold hover:text-saffron transition">
              पूरी कहानी पढ़ें <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-24 px-6 bg-maroon text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10" />
        <div className="max-w-5xl mx-auto relative z-10 text-center">
          <h2 className="text-sm font-bold text-gold uppercase tracking-widest mb-12">Devotee Experiences</h2>
          <div className="grid md:grid-cols-2 gap-8 text-left">
            {[
              { text: "Yog Maya Ashram में गौसेवा और पूजा का जो अनुभव मिला, वो अद्भुत है। यहाँ की शांति आत्मा को सुकून देती है।", name: "Rahul Sharma", loc: "Delhi" },
              { text: "The meditation sessions and the overall environment are truly transformative. Highly recommended for anyone seeking peace.", name: "Priya Patel", loc: "Mumbai" }
            ].map((t, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.2 }}
                className="bg-white/10 backdrop-blur-md p-8 rounded-3xl border border-white/10"
              >
                <Quote className="w-10 h-10 text-gold/50 mb-4" />
                <p className="text-lg leading-relaxed mb-6 font-light">"{t.text}"</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gold rounded-full flex items-center justify-center text-maroon font-bold text-xl">{t.name[0]}</div>
                  <div>
                    <p className="font-bold">{t.name}</p>
                    <p className="text-sm text-white/60">{t.loc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* MEGA FOOTER */}
      <footer className="bg-ink text-white pt-20 pb-10 px-6 border-t border-white/10">
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 rounded-full bg-saffron flex items-center justify-center text-white font-serif text-lg">ॐ</div>
              <span className="font-serif text-2xl">Yog Maya</span>
            </Link>
            <p className="text-white/60 text-sm leading-relaxed mb-6">
              Pradipanand Jagdamba Parivar Trust. Dedicated to spiritual awakening, cow protection, and Vedic heritage.
            </p>
            <div className="flex gap-4">
              {/* Social placeholders */}
              <div className="w-8 h-8 rounded-full bg-white/10 hover:bg-saffron transition cursor-pointer" />
              <div className="w-8 h-8 rounded-full bg-white/10 hover:bg-saffron transition cursor-pointer" />
              <div className="w-8 h-8 rounded-full bg-white/10 hover:bg-saffron transition cursor-pointer" />
            </div>
          </div>
          
          <div>
            <h4 className="font-serif text-lg mb-6 text-gold">Quick Links</h4>
            <ul className="space-y-3 text-sm text-white/70">
              <li><Link href="/about" className="hover:text-white transition">About Trust</Link></li>
              <li><Link href="/puja" className="hover:text-white transition">Puja Services</Link></li>
              <li><Link href="/pashushala" className="hover:text-white transition">Gau Shala</Link></li>
              <li><Link href="/donate" className="hover:text-white transition">Donate</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-serif text-lg mb-6 text-gold">Our Network</h4>
            <ul className="space-y-3 text-sm text-white/70">
              <li><a href="https://ayurveda.yogmaya.net" className="hover:text-white transition">Yog Maya Ayurveda</a></li>
              <li><a href="https://meditate.yogmaya.net" className="hover:text-white transition">Meditation Center</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-serif text-lg mb-6 text-gold">Contact Us</h4>
            <ul className="space-y-4 text-sm text-white/70">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-saffron shrink-0" /> 
                <span>Yog Maya Ashram, Main Road, India</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-saffron shrink-0" /> 
                <span>+91 98765 43210</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-saffron shrink-0" /> 
                <span>contact@yogmaya.net</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/40">
          <p>© {new Date().getFullYear()} Pradipanand Jagdamba Parivar Trust. All rights reserved.</p>
          <div className="flex gap-4">
            <Link href="/privacy" className="hover:text-white">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white">Terms of Service</Link>
          </div>
        </div>
      </footer>
    </main>
  );
}
