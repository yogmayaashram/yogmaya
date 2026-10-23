
"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowDown,
  ArrowRight,
  AudioLines,
  BookOpen,
  CalendarDays,
  Check,
  ChevronDown,
  CircleHelp,
  Flower2,
  Heart,
  HeartHandshake,
  Leaf,
  Menu,
  PlayCircle,
  ShieldCheck,
  Sparkles,
  Sun,
  Users,
  X,
  HandHeart,
  Landmark,
  Video,
  Waves,
} from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";

const services = [
  {
    icon: Sun,
    number: "01",
    title: "पूजा एवं अनुष्ठान",
    subtitle: "Puja & Sanskar",
    description:
      "परिवार और जीवन के शुभ अवसरों के लिए पूजा सेवाओं की जानकारी पाएँ और अपनी बुकिंग का अनुरोध भेजें।",
    href: "/puja",
    action: "पूजा सेवाएँ देखें",
    tone: "saffron",
  },
  {
    icon: HeartHandshake,
    number: "02",
    title: "गौसेवा एवं पशुशाला",
    subtitle: "Gau Seva",
    description:
      "गौसेवा के उद्देश्य, देखभाल और सहयोग के तरीकों को जानें। अपनी क्षमता के अनुसार सेवा से जुड़ें।",
    href: "/pashushala",
    action: "गौशाला के बारे में",
    tone: "green",
  },
  {
    icon: Waves,
    number: "03",
    title: "ध्यान एवं साधना",
    subtitle: "Meditation",
    description:
      "शांत दिनचर्या, ध्यान अभ्यास और उपलब्ध कार्यक्रमों के बारे में पढ़ें। अपनी साधना के लिए अगला कदम चुनें।",
    href: "/meditation",
    action: "ध्यान केंद्र देखें",
    tone: "blue",
  },
  {
    icon: Video,
    number: "04",
    title: "लाइव आरती एवं दर्शन",
    subtitle: "Live Darshan",
    description:
      "प्रकाशित लाइव कार्यक्रमों और उपलब्ध YouTube प्रसारण को एक ही स्थान से देखें।",
    href: "/live",
    action: "लाइव दर्शन खोलें",
    tone: "rose",
  },
  {
    icon: Leaf,
    number: "05",
    title: "आयुर्वेद समाधान",
    subtitle: "Ayurveda",
    description:
      "आयुर्वेद से जुड़ी सामग्री और उत्पादों की जानकारी देखें। स्वास्थ्य संबंधी निर्णय योग्य चिकित्सक से सलाह लेकर करें।",
    href: "/ayurveda",
    action: "आयुर्वेद देखें",
    tone: "green",
  },
  {
    icon: BookOpen,
    number: "06",
    title: "सदस्यता एवं समुदाय",
    subtitle: "Membership",
    description:
      "ट्रस्ट की गतिविधियों से जुड़ने, सदस्यता आवेदन करने और अपने आवेदन की स्थिति देखने के लिए आगे बढ़ें।",
    href: "/membership/apply",
    action: "सदस्यता जानें",
    tone: "gold",
  },
];

const faqs = [
  {
    q: "मैं पूजा के लिए अनुरोध कैसे भेज सकता/सकती हूँ?",
    a: "पूजा सेवाएँ पृष्ठ खोलें, उपलब्ध विवरण पढ़ें और वहाँ दिए गए बुकिंग विकल्प से अनुरोध भेजें। अनुरोध की पुष्टि संबंधित टीम द्वारा की जानी चाहिए।",
  },
  {
    q: "क्या मैं घर बैठे लाइव आरती देख सकता/सकती हूँ?",
    a: "लाइव दर्शन पृष्ठ पर प्रकाशित प्रसारण उपलब्ध होने पर उसे वहीं देखा जा सकता है। यदि कोई प्रसारण प्रकाशित नहीं है, तो पृष्ठ पर उपलब्ध स्थिति दिखाई जाएगी।",
  },
  {
    q: "सामान्य सदस्यता के लिए कैसे आवेदन करें?",
    a: "सदस्यता आवेदन पृष्ठ पर जाएँ और फॉर्म में माँगी गई जानकारी भरें। आवेदन भेजना अपने-आप स्वीकृति या किसी भुगतान की पुष्टि नहीं है।",
  },
  {
    q: "दान करने से पहले मैं क्या जाँचूँ?",
    a: "दान पृष्ठ पर उपलब्ध आधिकारिक प्राप्तकर्ता विवरण, भुगतान माध्यम और रसीद संबंधी जानकारी को ध्यान से सत्यापित करें। केवल सत्यापित विवरण के माध्यम से ही भुगतान करें।",
  },
  {
    q: "क्या आयुर्वेदिक उत्पाद चिकित्सा का विकल्प हैं?",
    a: "नहीं। वेबसाइट पर दी गई सामग्री सामान्य जानकारी के लिए है। किसी रोग, दवा, गर्भावस्था या अन्य स्वास्थ्य स्थिति के लिए योग्य चिकित्सक से सलाह लें।",
  },
];

const reveal = {
  hidden: { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0 },
};

export default function HomePage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const reduceMotion = useReducedMotion();

  const closeMenu = () => setMenuOpen(false);

  return (
    <main className="min-h-screen overflow-hidden bg-[#fffaf2] text-[#2a1715] selection:bg-[#f2c66d] selection:text-[#40120f]">
      <div className="relative z-[60] bg-[#4a1517] px-4 py-2 text-center text-[11px] font-medium tracking-[0.12em] text-[#f7e7c3] sm:text-xs">
        <span className="inline-flex items-center justify-center gap-2">
          <Sparkles className="h-3.5 w-3.5 text-[#e9bd66]" />
          आस्था • सेवा • साधना
          <span className="hidden sm:inline">
            — श्री जगदम्बा ट्रस्ट परिवार में आपका स्वागत है
          </span>
        </span>
      </div>

      <header className="absolute inset-x-0 top-[34px] z-50 border-b border-white/15 bg-[#210c0d]/45 text-white backdrop-blur-xl">
        <div className="mx-auto flex h-[76px] max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <Link
            href="/"
            onClick={closeMenu}
            className="group flex min-w-0 items-center gap-3"
            aria-label="Yog Maya Ashram home"
          >
            <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-[#e8c47c]/70 bg-gradient-to-br from-[#f5d995] via-[#cf923d] to-[#8e321e] text-xl text-[#4a1517] shadow-lg">
              ॐ
            </span>
            <span className="min-w-0">
              <span className="block truncate font-serif text-xl leading-none tracking-wide sm:text-2xl">
                Yog Maya
              </span>
              <span className="mt-1 block truncate text-[9px] font-semibold uppercase tracking-[0.22em] text-[#f0d69f] sm:text-[10px]">
                श्री जगदम्बा ट्रस्ट
              </span>
            </span>
          </Link>

          <nav
            className="hidden items-center gap-5 text-[13px] font-medium text-white/85 xl:flex"
            aria-label="मुख्य नेविगेशन"
          >
            <Link href="/about" className="hover:text-[#f4cd7b]">ट्रस्ट परिचय</Link>
            <Link href="/puja" className="hover:text-[#f4cd7b]">पूजा सेवाएँ</Link>
            <Link href="/pashushala" className="hover:text-[#f4cd7b]">गौसेवा</Link>
            <Link href="/meditation" className="hover:text-[#f4cd7b]">ध्यान</Link>
            <Link href="/live" className="inline-flex items-center gap-1.5 hover:text-[#f4cd7b]">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-red-400" />
              लाइव दर्शन
            </Link>
            <Link href="/ayurveda" className="hover:text-[#f4cd7b]">आयुर्वेद</Link>
          </nav>

          <div className="hidden items-center gap-2 md:flex">
            <Link
              href="/auth/login"
              className="rounded-full border border-white/30 px-4 py-2.5 text-xs font-semibold hover:border-[#f4cd7b] hover:text-[#f4cd7b]"
            >
              लॉगिन
            </Link>
            <Link
              href="/donate"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#f4d18a] to-[#d79a47] px-5 py-2.5 text-xs font-bold text-[#481517] shadow-lg transition hover:-translate-y-0.5"
            >
              सेवा सहयोग <Heart className="h-3.5 w-3.5" />
            </Link>
          </div>

          <button
            type="button"
            className="grid h-11 w-11 place-items-center rounded-full border border-white/25 bg-white/10 md:hidden"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label={menuOpen ? "मेन्यू बंद करें" : "मेन्यू खोलें"}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
          >
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {menuOpen && (
          <nav
            id="mobile-navigation"
            className="border-t border-white/10 bg-[#321013]/95 px-5 py-4 shadow-2xl backdrop-blur-xl md:hidden"
            aria-label="मोबाइल नेविगेशन"
          >
            <div className="mx-auto grid max-w-7xl gap-1">
              {[
                ["ट्रस्ट परिचय", "/about"],
                ["पूजा सेवाएँ", "/puja"],
                ["गौसेवा एवं पशुशाला", "/pashushala"],
                ["ध्यान एवं साधना", "/meditation"],
                ["लाइव आरती एवं दर्शन", "/live"],
                ["आयुर्वेद समाधान", "/ayurveda"],
                ["सदस्यता", "/membership/apply"],
                ["संपर्क", "/contact"],
                ["सदस्य लॉगिन", "/auth/login"],
                ["दान एवं सहयोग", "/donate"],
              ].map(([label, href]) => (
                <Link
                  key={href}
                  href={href}
                  onClick={closeMenu}
                  className="rounded-xl px-3 py-3 text-sm text-white/90 hover:bg-white/10 hover:text-[#f4cd7b]"
                >
                  {label} <ArrowRight className="ml-2 inline h-3.5 w-3.5" />
                </Link>
              ))}
            </div>
          </nav>
        )}
      </header>

      <section className="relative isolate flex min-h-[760px] items-center overflow-hidden bg-[#260e10] pb-32 pt-36 sm:min-h-[820px] sm:pb-36 sm:pt-40 lg:min-h-[850px]">
        <div className="absolute inset-0 -z-20">
          <img
            src="https://images.unsplash.com/photo-1545389336-cf090694435e?auto=format&fit=crop&w=2200&q=85"
            alt=""
            aria-hidden="true"
            fetchPriority="high"
            className="h-full w-full object-cover object-center"
          />
        </div>
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(30,8,10,.94)_0%,rgba(48,13,15,.82)_42%,rgba(46,12,13,.35)_100%)]" />
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(0deg,#fffaf2_0%,rgba(255,250,242,0)_28%,rgba(20,5,7,.12)_100%)]" />
        <div className="absolute right-[-130px] top-36 -z-10 h-[480px] w-[480px] rounded-full border border-[#e6bd72]/25 sm:right-[-70px] sm:h-[600px] sm:w-[600px] lg:right-[4%]" />
        <div className="absolute right-[-80px] top-48 -z-10 h-[380px] w-[380px] rounded-full border border-[#e6bd72]/15 sm:right-[-20px] sm:h-[500px] sm:w-[500px] lg:right-[8%]" />

        <div className="mx-auto grid w-full max-w-7xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-[1.12fr_.88fr] lg:px-10">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={
              reduceMotion
                ? undefined
                : { visible: { transition: { staggerChildren: 0.12 } } }
            }
            className="relative z-10 max-w-3xl"
          >
            <motion.div
              variants={reduceMotion ? undefined : reveal}
              transition={{ duration: 0.65 }}
              className="mb-7 inline-flex items-center gap-2 rounded-full border border-[#f0d69f]/35 bg-black/20 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#f6dfac] backdrop-blur sm:text-xs"
            >
              <span className="grid h-6 w-6 place-items-center rounded-full bg-[#f0cc80]/15">
                <Flower2 className="h-3.5 w-3.5" />
              </span>
              Pradipanand Jagdamba Parivar Trust
            </motion.div>

            <motion.p
              variants={reduceMotion ? undefined : reveal}
              transition={{ duration: 0.65 }}
              className="mb-4 text-sm font-medium tracking-[0.18em] text-[#f4d18a] sm:text-base"
            >
              परंपरा में जड़ें · सेवा में समर्पण
            </motion.p>

            <motion.h1
              variants={reduceMotion ? undefined : reveal}
              transition={{ duration: 0.7 }}
              className="max-w-3xl font-serif text-5xl font-semibold leading-[1.06] tracking-tight text-white sm:text-6xl md:text-7xl lg:text-[82px]"
            >
              आस्था से जुड़ें।
              <br />
              <span className="bg-gradient-to-r from-[#fff0c7] via-[#e7b85f] to-[#f6dca0] bg-clip-text text-transparent">
                सेवा से बदलें।
              </span>
            </motion.h1>

            <motion.p
              variants={reduceMotion ? undefined : reveal}
              transition={{ duration: 0.7 }}
              className="mt-7 max-w-2xl text-base leading-8 text-white/80 sm:text-lg sm:leading-9"
            >
              श्री जगदम्बा ट्रस्ट के अंतर्गत योग माया आश्रम, पूजा-अनुष्ठान,
              गौसेवा, ध्यान और आध्यात्मिक अध्ययन से जुड़ने का आपका स्वागत है।
              अपनी श्रद्धा के अनुरूप सेवा का मार्ग चुनें।
            </motion.p>

            <motion.div
              variants={reduceMotion ? undefined : reveal}
              transition={{ duration: 0.7 }}
              className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap"
            >
              <Link
                href="/puja"
                className="group inline-flex min-h-14 items-center justify-center gap-3 rounded-full bg-gradient-to-r from-[#f5d895] to-[#dca04e] px-7 py-4 text-sm font-bold text-[#481517] shadow-lg transition hover:-translate-y-1"
              >
                पूजा सेवा देखें
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="/live"
                className="inline-flex min-h-14 items-center justify-center gap-2 rounded-full border border-white/35 bg-white/5 px-7 py-4 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/15"
              >
                <PlayCircle className="h-4 w-4 text-[#f4d18a]" />
                लाइव दर्शन
              </Link>
            </motion.div>

            <motion.div
              variants={reduceMotion ? undefined : reveal}
              transition={{ duration: 0.7 }}
              className="mt-9 flex flex-wrap items-center gap-x-5 gap-y-3 text-xs text-white/65 sm:text-sm"
            >
              <span className="inline-flex items-center gap-2">
                <ShieldCheck className="h-4 w-4 text-[#e9c779]" />
                जानकारी में स्पष्टता
              </span>
              <span className="hidden h-1 w-1 rounded-full bg-white/40 sm:block" />
              <span className="inline-flex items-center gap-2">
                <HeartHandshake className="h-4 w-4 text-[#e9c779]" />
                सेवा और सहभागिता
              </span>
            </motion.div>
          </motion.div>

          <motion.div
            initial={reduceMotion ? false : { opacity: 0, scale: 0.94, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="relative mx-auto hidden w-full max-w-[440px] lg:block"
          >
            <div className="absolute -inset-5 rounded-[48%_48%_22px_22px] border border-[#e8c47c]/30" />
            <div className="relative overflow-hidden rounded-[48%_48%_22px_22px] border border-[#f0d69f]/40 bg-gradient-to-b from-[#6d3026]/80 to-[#2c1011] p-3 shadow-2xl">
              <div className="flex min-h-[465px] flex-col items-center justify-center rounded-[48%_48%_16px_16px] border border-[#f0d69f]/20 bg-[radial-gradient(ellipse_at_50%_38%,rgba(234,188,99,.22),transparent_46%),linear-gradient(180deg,rgba(255,255,255,.06),rgba(0,0,0,.15))] px-9 py-12 text-center">
                <div className="relative mb-8 grid h-36 w-36 place-items-center rounded-full border border-[#e8c47c]/60 bg-[#f3d28b]/[0.06] shadow-lg">
                  <div className="absolute inset-3 rounded-full border border-dashed border-[#f0d69f]/45" />
                  <div className="absolute inset-6 rounded-full border border-[#f0d69f]/25" />
                  <span className="font-serif text-7xl text-[#f3d28b]">ॐ</span>
                </div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[#e9c779]">
                  Seva · Shraddha · Sadhana
                </p>
                <h2 className="mt-4 font-serif text-4xl leading-tight text-white">
                  सेवा ही साधना है
                </h2>
                <p className="mt-4 max-w-xs text-sm leading-7 text-white/65">
                  एक ऐसा स्थान जहाँ श्रद्धा को सहभागिता और साधना को सेवा से
                  जोड़ने का आमंत्रण मिलता है।
                </p>
                <div className="mt-8 h-px w-20 bg-gradient-to-r from-transparent via-[#e8c47c] to-transparent" />
                <p className="mt-5 text-[10px] tracking-[0.22em] text-[#e8c47c]/80">
                  श्री जगदम्बा ट्रस्ट परिवार
                </p>
              </div>
            </div>
            <div className="absolute -bottom-5 -left-6 flex items-center gap-3 rounded-2xl border border-white/10 bg-[#fffaf2] px-4 py-3 shadow-xl">
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-[#f4e5c7] text-[#7b2d26]">
                <HandHeart className="h-5 w-5" />
              </span>
              <span>
                <span className="block text-xs font-bold text-[#4a1517]">
                  अपनी सेवा चुनें
                </span>
                <span className="mt-1 block text-[10px] text-[#785b53]">
                  पूजा · गौसेवा · ध्यान
                </span>
              </span>
            </div>
          </motion.div>
        </div>

        <a
          href="#seva"
          className="absolute bottom-14 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-[10px] uppercase tracking-[0.22em] text-[#5c3026]/75 transition hover:text-[#7b2d26] sm:flex"
          aria-label="मुख्य सेवाएँ देखें"
        >
          <span className="grid h-9 w-9 place-items-center rounded-full border border-[#7b2d26]/20 bg-white/55">
            <ArrowDown className="h-4 w-4" />
          </span>
          Explore seva
        </a>
      </section>

      <section className="relative z-10 -mt-7 px-4 sm:px-6">
        <div className="mx-auto grid max-w-6xl overflow-hidden rounded-2xl border border-[#e9d8b9] bg-white shadow-xl sm:grid-cols-3">
          {[
            { icon: Landmark, title: "परंपरा का सम्मान", text: "आध्यात्मिक विरासत और संस्कार" },
            { icon: HeartHandshake, title: "सेवा में सहभागिता", text: "अपनी रुचि के अनुसार जुड़ें" },
            { icon: ShieldCheck, title: "स्पष्ट जानकारी", text: "आवेदन, बुकिंग और दान विवरण" },
          ].map((item, i) => (
            <div
              key={item.title}
              className={`flex items-center gap-4 px-5 py-5 sm:px-7 sm:py-6 ${
                i ? "border-t border-[#efe4d0] sm:border-l sm:border-t-0" : ""
              }`}
            >
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-[#f8edda] text-[#8b3926]">
                <item.icon className="h-5 w-5" />
              </span>
              <span>
                <span className="block font-serif text-lg font-semibold text-[#4a1517]">
                  {item.title}
                </span>
                <span className="mt-1 block text-xs leading-5 text-[#785e55]">
                  {item.text}
                </span>
              </span>
            </div>
          ))}
        </div>
      </section>

      <section id="seva" className="scroll-mt-24 px-5 py-24 sm:px-8 sm:py-28 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto mb-14 max-w-2xl text-center sm:mb-16">
            <span className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.24em] text-[#9a5a31] sm:text-xs">
              <span className="h-px w-7 bg-[#cda45c]" />
              आपकी सेवा-यात्रा
              <span className="h-px w-7 bg-[#cda45c]" />
            </span>
            <h2 className="mt-4 font-serif text-4xl font-semibold leading-tight text-[#4a1517] sm:text-5xl md:text-6xl">
              सेवा के मार्ग अनेक,
              <br className="hidden sm:block" /> संकल्प एक
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-[#745b52] sm:text-base">
              अपनी आवश्यकता और रुचि के अनुसार आगे बढ़ें। हर अनुभाग में संबंधित
              जानकारी और उपलब्ध अगला कदम देखें।
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, i) => (
              <motion.article
                key={service.number}
                initial={reduceMotion ? false : "hidden"}
                whileInView="visible"
                viewport={{ once: true, amount: 0.18 }}
                variants={reduceMotion ? undefined : reveal}
                transition={{ duration: 0.5, delay: i * 0.045 }}
                className="group relative flex min-h-[300px] flex-col overflow-hidden rounded-[26px] border border-[#eadbc4] bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1.5 hover:border-[#d9b978] hover:shadow-xl sm:p-8"
              >
                <div className="absolute right-6 top-5 font-serif text-4xl text-[#eadcc5]/65">
                  {service.number}
                </div>
                <div
                  className={`mb-7 grid h-14 w-14 place-items-center rounded-2xl ${
                    service.tone === "green"
                      ? "bg-[#eaf1e7] text-[#426545]"
                      : service.tone === "blue"
                        ? "bg-[#e8eef5] text-[#4e6382]"
                        : service.tone === "rose"
                          ? "bg-[#f8e6e2] text-[#9a4238]"
                          : service.tone === "gold"
                            ? "bg-[#f8edda] text-[#956321]"
                            : "bg-[#f9e9d9] text-[#a74c2b]"
                  }`}
                >
                  <service.icon className="h-6 w-6" strokeWidth={1.7} />
                </div>
                <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#a16c45]">
                  {service.subtitle}
                </p>
                <h3 className="mt-2 font-serif text-2xl font-semibold text-[#4a1517]">
                  {service.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-7 text-[#765e55]">
                  {service.description}
                </p>
                <Link
                  href={service.href}
                  className="mt-6 inline-flex w-fit items-center gap-2 border-b border-[#d4b578] pb-1 text-sm font-bold text-[#7b2d26] transition hover:gap-3 hover:text-[#a64b2b]"
                >
                  {service.action} <ArrowRight className="h-4 w-4" />
                </Link>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#451619] px-5 py-20 text-white sm:px-8 sm:py-24 lg:px-10">
        <div className="absolute -right-32 -top-40 h-[420px] w-[420px] rounded-full border border-[#e7c27a]/15" />
        <div className="absolute -right-16 -top-24 h-[300px] w-[300px] rounded-full border border-[#e7c27a]/15" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[1fr_.8fr] lg:gap-20">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-[#e7c27a]/30 bg-white/5 px-3 py-2 text-[10px] font-bold uppercase tracking-[0.18em] text-[#f1d89f]">
              <span className="h-2 w-2 rounded-full bg-red-400" />
              Online darshan
            </span>
            <h2 className="mt-6 font-serif text-4xl font-semibold leading-tight sm:text-5xl md:text-6xl">
              श्रद्धा की डोर,
              <br />
              <span className="text-[#f0ce84]">हर दूरी से परे।</span>
            </h2>
            <p className="mt-5 max-w-xl text-sm leading-8 text-white/70 sm:text-base">
              यदि लाइव आरती या दर्शन का प्रसारण प्रकाशित है, तो उसे ऑनलाइन
              देखें। यहाँ से लाइव पृष्ठ पर जाएँ और उपलब्ध कार्यक्रम की स्थिति
              जाँचें।
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/live"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#f1d18a] px-6 py-3 text-sm font-bold text-[#4a1517] hover:bg-white"
              >
                <PlayCircle className="h-4 w-4" /> लाइव पृष्ठ खोलें
              </Link>
              <Link
                href="/booking"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-white/25 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10"
              >
                <CalendarDays className="h-4 w-4 text-[#f1d18a]" /> बुकिंग अनुरोध
              </Link>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-lg">
            <div className="absolute -inset-4 rounded-[30px] border border-[#e7c27a]/20" />
            <div className="relative overflow-hidden rounded-[24px] border border-white/10 bg-gradient-to-br from-[#73332b] to-[#281012] p-7 sm:p-9">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-xs font-semibold tracking-[0.16em] text-[#f0ce84]">
                    दर्शन · साधना · शांति
                  </p>
                  <h3 className="mt-3 font-serif text-3xl">आरती से जुड़ें</h3>
                </div>
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl border border-[#e7c27a]/25 bg-white/5">
                  <AudioLines className="h-5 w-5 text-[#f0ce84]" />
                </span>
              </div>
              <div className="my-7 flex aspect-[16/8] items-center justify-center overflow-hidden rounded-2xl border border-white/10 bg-[radial-gradient(ellipse_at_center,rgba(232,188,103,.19),transparent_55%),linear-gradient(135deg,#522020,#2a1112)]">
                <div className="text-center">
                  <span className="mx-auto grid h-16 w-16 place-items-center rounded-full border border-[#e7c27a]/45 bg-black/15">
                    <PlayCircle className="h-8 w-8 text-[#f0ce84]" strokeWidth={1.2} />
                  </span>
                  <p className="mt-3 text-xs text-white/60">
                    प्रसारण की उपलब्धता लाइव पृष्ठ पर देखें
                  </p>
                </div>
              </div>
              <div className="flex items-center justify-between gap-4 text-xs text-white/60">
                <span className="inline-flex items-center gap-2">
                  <ShieldCheck className="h-4 w-4 text-[#e7c27a]" />
                  प्रकाशित स्रोत से प्रसारण
                </span>
                <Link href="/live" className="inline-flex items-center gap-1 font-bold text-[#f0ce84] hover:text-white">
                  अभी देखें <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 py-24 sm:px-8 sm:py-28 lg:px-10">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <div className="relative mx-auto w-full max-w-xl">
            <div className="absolute -left-4 -top-4 h-24 w-24 rounded-tl-[28px] border-l border-t border-[#d2ae6b]" />
            <div className="relative overflow-hidden rounded-[28px] bg-[#f0e1c6] p-3">
              <div className="flex min-h-[370px] flex-col items-center justify-center rounded-[21px] border border-[#caa766]/45 bg-[radial-gradient(ellipse_at_50%_35%,rgba(206,157,76,.22),transparent_42%),linear-gradient(145deg,#f9efd9,#e9d2a9)] px-8 py-12 text-center sm:min-h-[430px]">
                <div className="grid h-24 w-24 place-items-center rounded-full border border-[#b27a3c]/50 bg-[#fff9ec]/70">
                  <span className="font-serif text-5xl text-[#7b2d26]">ॐ</span>
                </div>
                <p className="mt-8 text-[10px] font-bold uppercase tracking-[0.24em] text-[#986538]">
                  Our guiding thought
                </p>
                <h3 className="mt-3 max-w-md font-serif text-4xl font-semibold leading-tight text-[#4a1517] sm:text-5xl">
                  सेवा में विनम्रता,
                  <br />
                  साधना में निरंतरता।
                </h3>
                <p className="mt-5 max-w-sm text-sm leading-7 text-[#745b52]">
                  हर व्यक्ति को श्रद्धा, सीखने और समुदाय के साथ सकारात्मक रूप
                  से जुड़ने का अवसर।
                </p>
                <div className="mt-7 flex items-center gap-3 text-xs font-semibold text-[#7b2d26]">
                  <span className="h-px w-8 bg-[#c6a05e]" />
                  श्री जगदम्बा ट्रस्ट
                  <span className="h-px w-8 bg-[#c6a05e]" />
                </div>
              </div>
            </div>
            <div className="absolute -bottom-5 -right-3 rounded-2xl border border-[#e8d6b8] bg-white px-5 py-4 shadow-xl sm:-right-6">
              <p className="font-serif text-xl font-semibold text-[#4a1517]">एक साझा संकल्प</p>
              <p className="mt-1 text-xs text-[#80665c]">आस्था से आगे, सेवा तक</p>
            </div>
          </div>

          <div className="pt-4 lg:pt-0">
            <span className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.22em] text-[#9a5a31] sm:text-xs">
              <span className="h-px w-7 bg-[#cda45c]" /> हमारा उद्देश्य
            </span>
            <h2 className="mt-5 font-serif text-4xl font-semibold leading-tight text-[#4a1517] sm:text-5xl">
              परंपरा का सम्मान,
              <br />
              <span className="text-[#a85b32]">समाज के लिए सेवा।</span>
            </h2>
            <p className="mt-6 text-sm leading-8 text-[#745b52] sm:text-base">
              श्री जगदम्बा ट्रस्ट और योग माया आश्रम से जुड़ी गतिविधियों का
              उद्देश्य आध्यात्मिक अभ्यास, पूजा-संस्कार, गौसेवा और
              ज्ञान-साझाकरण के लिए एक सुलभ डिजिटल प्रवेश-द्वार उपलब्ध कराना है।
            </p>
            <p className="mt-4 text-sm leading-8 text-[#745b52] sm:text-base">
              यहाँ से आप सेवाओं की जानकारी पढ़ सकते हैं, उपलब्ध कार्यक्रम देख
              सकते हैं, सदस्यता के लिए आवेदन कर सकते हैं और ट्रस्ट से संपर्क
              कर सकते हैं। किसी भी सेवा, कार्यक्रम या भुगतान की पुष्टि संबंधित
              आधिकारिक विवरण से अवश्य करें।
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {[
                { icon: Flower2, title: "आध्यात्मिक विरासत", text: "पूजा, संस्कार और साधना से जुड़ाव" },
                { icon: Users, title: "समुदाय की सहभागिता", text: "सदस्यता और सेवा में भागीदारी" },
                { icon: Leaf, title: "प्रकृति के प्रति संवेदना", text: "गौसेवा और जिम्मेदार जीवन-दृष्टि" },
                { icon: ShieldCheck, title: "जिम्मेदार जानकारी", text: "स्पष्ट प्रक्रियाएँ और सत्यापन" },
              ].map((item) => (
                <div key={item.title} className="flex gap-3 rounded-2xl border border-[#eadbc4] bg-white/70 p-4">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-[#f8edda] text-[#8b3926]">
                    <item.icon className="h-5 w-5" />
                  </span>
                  <span>
                    <span className="block text-sm font-bold text-[#4a1517]">{item.title}</span>
                    <span className="mt-1 block text-xs leading-5 text-[#80665c]">{item.text}</span>
                  </span>
                </div>
              ))}
            </div>
            <Link href="/about" className="mt-8 inline-flex items-center gap-2 rounded-full border border-[#d8c3a1] px-6 py-3 text-sm font-bold text-[#7b2d26] hover:border-[#7b2d26] hover:bg-white">
              ट्रस्ट के बारे में और जानें <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="border-y border-[#eadbc4] bg-[#f6eddf] px-5 py-20 sm:px-8 sm:py-24 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-[10px] font-bold uppercase tracking-[0.24em] text-[#9a5a31] sm:text-xs">
              शुरुआत यहाँ से करें
            </span>
            <h2 className="mt-4 font-serif text-4xl font-semibold text-[#4a1517] sm:text-5xl">
              आपकी सहभागिता, सरल चरणों में
            </h2>
            <p className="mt-4 text-sm leading-7 text-[#745b52] sm:text-base">
              अपनी जरूरत चुनें और संबंधित पृष्ठ पर दिए गए निर्देशों के अनुसार आगे बढ़ें।
            </p>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {[
              { n: "01", icon: CircleHelp, title: "जानकारी समझें", text: "सेवा, कार्यक्रम, आवेदन या दान से जुड़ी शर्तें और विवरण पढ़ें।" },
              { n: "02", icon: BookOpen, title: "अपना मार्ग चुनें", text: "पूजा, गौसेवा, ध्यान, सदस्यता या लाइव दर्शन के सही पृष्ठ पर जाएँ।" },
              { n: "03", icon: Check, title: "पुष्टि प्राप्त करें", text: "फॉर्म भेजने के बाद संबंधित टीम की पुष्टि और आगे के निर्देशों की प्रतीक्षा करें।" },
            ].map((item) => (
              <div key={item.n} className="relative rounded-3xl border border-[#e3d0b1] bg-[#fffaf2] p-7 sm:p-8">
                <span className="absolute right-6 top-5 font-serif text-4xl text-[#e8d8bd]">{item.n}</span>
                <span className="grid h-14 w-14 place-items-center rounded-2xl bg-[#4a1517] text-[#f0ce84]">
                  <item.icon className="h-6 w-6" />
                </span>
                <h3 className="mt-6 font-serif text-2xl font-semibold text-[#4a1517]">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-[#765e55]">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-24 sm:px-8 sm:py-28 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-2">
          <div className="relative overflow-hidden rounded-[28px] bg-[#4a1517] p-8 text-white sm:p-10 lg:p-12">
            <div className="absolute -right-10 -top-10 h-48 w-48 rounded-full border border-[#f0ce84]/20" />
            <div className="absolute -right-3 top-0 h-32 w-32 rounded-full border border-[#f0ce84]/15" />
            <span className="relative grid h-14 w-14 place-items-center rounded-2xl border border-[#f0ce84]/30 bg-white/5 text-[#f0ce84]">
              <Users className="h-6 w-6" />
            </span>
            <p className="relative mt-7 text-[10px] font-bold uppercase tracking-[0.2em] text-[#f0ce84]">
              Community & membership
            </p>
            <h2 className="relative mt-3 max-w-lg font-serif text-4xl font-semibold leading-tight sm:text-5xl">
              ट्रस्ट की गतिविधियों से जुड़ें
            </h2>
            <p className="relative mt-5 max-w-lg text-sm leading-7 text-white/70">
              सदस्यता आवेदन शुरू करें, अपनी जानकारी सही भरें और अपने आवेदन से
              संबंधित अपडेट के लिए सदस्य डैशबोर्ड का उपयोग करें।
            </p>
            <div className="relative mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="/membership/apply" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#f0ce84] px-6 py-3 text-sm font-bold text-[#4a1517] hover:bg-white">
                सदस्यता आवेदन <ArrowRight className="h-4 w-4" />
              </Link>
              <Link href="/auth/login" className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/25 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10">
                सदस्य लॉगिन
              </Link>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-[28px] border border-[#e7d5b6] bg-gradient-to-br from-[#fff5df] to-[#f3e1c4] p-8 sm:p-10 lg:p-12">
            <div className="absolute -bottom-16 -right-16 h-56 w-56 rounded-full border border-[#c89c57]/25" />
            <span className="relative grid h-14 w-14 place-items-center rounded-2xl bg-[#7b2d26] text-[#f0ce84]">
              <Heart className="h-6 w-6" />
            </span>
            <p className="relative mt-7 text-[10px] font-bold uppercase tracking-[0.2em] text-[#9a5a31]">
              Support with care
            </p>
            <h2 className="relative mt-3 max-w-lg font-serif text-4xl font-semibold leading-tight text-[#4a1517] sm:text-5xl">
              सेवा में अपना योगदान दें
            </h2>
            <p className="relative mt-5 max-w-lg text-sm leading-7 text-[#745b52]">
              दान करने से पहले आधिकारिक प्राप्तकर्ता, भुगतान विवरण और रसीद
              प्रक्रिया की जाँच करें। इस पृष्ठ से सत्यापित दान विवरण तक पहुँचें।
            </p>
            <div className="relative mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="/donate" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#7b2d26] px-6 py-3 text-sm font-bold text-white hover:bg-[#5b1d20]">
                दान विवरण देखें <ArrowRight className="h-4 w-4" />
              </Link>
              <Link href="/contact" className="inline-flex min-h-12 items-center justify-center rounded-full border border-[#c7a982] px-6 py-3 text-sm font-semibold text-[#6b2a24] hover:bg-white/60">
                संपर्क करें
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-20 sm:px-8 sm:py-24 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[.72fr_1.28fr] lg:gap-20">
          <div>
            <span className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.22em] text-[#9a5a31] sm:text-xs">
              <span className="h-px w-7 bg-[#cda45c]" /> मदद और जानकारी
            </span>
            <h2 className="mt-5 font-serif text-4xl font-semibold leading-tight text-[#4a1517] sm:text-5xl">
              आपके सवाल,
              <br />
              सरल जवाब
            </h2>
            <p className="mt-5 max-w-md text-sm leading-7 text-[#745b52] sm:text-base">
              पूजा, लाइव दर्शन, सदस्यता और दान से जुड़े सामान्य सवालों के जवाब
              यहाँ पढ़ें। अधिक सहायता के लिए संपर्क पृष्ठ पर जाएँ।
            </p>
            <Link href="/contact" className="mt-7 inline-flex items-center gap-2 text-sm font-bold text-[#7b2d26] hover:text-[#a85b32]">
              हमसे संपर्क करें <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="divide-y divide-[#eadbc4] border-y border-[#eadbc4]">
            {faqs.map((faq, i) => (
              <div key={faq.q} className="py-1">
                <button
                  type="button"
                  className="flex w-full items-center justify-between gap-5 py-5 text-left"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  aria-expanded={openFaq === i}
                >
                  <span className="font-serif text-lg font-semibold text-[#4a1517] sm:text-xl">
                    {faq.q}
                  </span>
                  <span className={`grid h-8 w-8 shrink-0 place-items-center rounded-full border border-[#e5d2b2] text-[#7b2d26] transition ${openFaq === i ? "rotate-180 bg-[#f6eddf]" : ""}`}>
                    <ChevronDown className="h-4 w-4" />
                  </span>
                </button>
                {openFaq === i && (
                  <p className="max-w-2xl pb-6 pr-10 text-sm leading-7 text-[#765e55]">
                    {faq.a}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="bg-[#210c0e] px-5 pb-8 pt-16 text-white sm:px-8 sm:pt-20 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 border-b border-white/10 pb-12 md:grid-cols-2 lg:grid-cols-[1.3fr_.7fr_.7fr_1fr] lg:gap-12">
            <div>
              <Link href="/" className="inline-flex items-center gap-3">
                <span className="grid h-11 w-11 place-items-center rounded-full border border-[#e8c47c]/50 bg-gradient-to-br from-[#f5d995] to-[#cf923d] font-serif text-xl text-[#4a1517]">
                  ॐ
                </span>
                <span>
                  <span className="block font-serif text-2xl">Yog Maya</span>
                  <span className="mt-1 block text-[9px] uppercase tracking-[0.2em] text-[#e8c47c]">
                    श्री जगदम्बा ट्रस्ट
                  </span>
                </span>
              </Link>
              <p className="mt-5 max-w-sm text-sm leading-7 text-white/55">
                पूजा, गौसेवा, ध्यान और आध्यात्मिक गतिविधियों से जुड़ने के लिए
                ट्रस्ट का डिजिटल प्रवेश-द्वार।
              </p>
            </div>

            <div>
              <h3 className="font-serif text-xl text-[#f0ce84]">सेवाएँ</h3>
              <ul className="mt-5 space-y-3 text-sm text-white/65">
                <li><Link className="hover:text-white" href="/puja">पूजा एवं अनुष्ठान</Link></li>
                <li><Link className="hover:text-white" href="/pashushala">गौसेवा</Link></li>
                <li><Link className="hover:text-white" href="/meditation">ध्यान एवं साधना</Link></li>
                <li><Link className="hover:text-white" href="/live">लाइव दर्शन</Link></li>
                <li><Link className="hover:text-white" href="/ayurveda">आयुर्वेद</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="font-serif text-xl text-[#f0ce84]">ट्रस्ट</h3>
              <ul className="mt-5 space-y-3 text-sm text-white/65">
                <li><Link className="hover:text-white" href="/about">हमारे बारे में</Link></li>
                <li><Link className="hover:text-white" href="/membership/apply">सदस्यता</Link></li>
                <li><Link className="hover:text-white" href="/auth/login">सदस्य लॉगिन</Link></li>
                <li><Link className="hover:text-white" href="/donate">दान एवं सहयोग</Link></li>
                <li><Link className="hover:text-white" href="/contact">संपर्क</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="font-serif text-xl text-[#f0ce84]">सहायता और नीतियाँ</h3>
              <p className="mt-5 text-sm leading-7 text-white/55">
                आवेदन, बुकिंग या भुगतान करने से पहले संबंधित पृष्ठ पर दिए गए
                नियम और आधिकारिक विवरण पढ़ें।
              </p>
              <div className="mt-4 flex flex-wrap gap-3 text-xs text-white/65">
                <Link className="underline decoration-white/20 underline-offset-4 hover:text-white" href="/privacy">गोपनीयता नीति</Link>
                <Link className="underline decoration-white/20 underline-offset-4 hover:text-white" href="/terms">नियम एवं शर्तें</Link>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-3 pt-6 text-xs text-white/40 sm:flex-row sm:items-center sm:justify-between">
            <p>© {new Date().getFullYear()} श्री जगदम्बा ट्रस्ट / Yog Maya Ashram. सर्वाधिकार सुरक्षित।</p>
            <p className="inline-flex items-center gap-1.5">
              <Heart className="h-3.5 w-3.5 text-[#e8c47c]" />
              श्रद्धा, सेवा और सम्मान के साथ
            </p>
          </div>
        </div>
      </footer>

      <div className="fixed inset-x-3 bottom-3 z-40 grid grid-cols-3 gap-2 rounded-2xl border border-[#e6d3b4] bg-[#fffaf2]/95 p-2 shadow-xl backdrop-blur-xl sm:hidden">
        <Link href="/puja" className="flex min-h-11 flex-col items-center justify-center gap-0.5 rounded-xl text-[10px] font-bold text-[#6f2725]">
          <Sun className="h-4 w-4" /> पूजा
        </Link>
        <Link href="/live" className="flex min-h-11 flex-col items-center justify-center gap-0.5 rounded-xl bg-[#4a1517] text-[10px] font-bold text-[#f0ce84]">
          <PlayCircle className="h-4 w-4" /> लाइव दर्शन
        </Link>
        <Link href="/donate" className="flex min-h-11 flex-col items-center justify-center gap-0.5 rounded-xl text-[10px] font-bold text-[#6f2725]">
          <Heart className="h-4 w-4" /> सेवा सहयोग
        </Link>
      </div>
      <div className="h-20 sm:hidden" aria-hidden="true" />
    </main>
  );
}
