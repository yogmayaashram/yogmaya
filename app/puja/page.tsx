import Link from "next/link";

const pujas = [
  {
    number: "01",
    name: "श्री सत्यनारायण कथा",
    englishName: "Satyanarayan Katha",
    category: "कथा एवं पूजा",
    description:
      "परिवार की मंगलकामना, धार्मिक उत्सव और विशेष अवसरों के लिए सत्यनारायण भगवान की कथा एवं पूजा का अनुरोध करें।",
    occasions: "पूर्णिमा, गृह उत्सव एवं अन्य शुभ अवसर",
    symbol: "ॐ",
  },
  {
    number: "02",
    name: "महामृत्युंजय जाप",
    englishName: "Mahamrityunjaya Jaap",
    category: "वैदिक मंत्र जाप",
    description:
      "भगवान शिव की उपासना और महामृत्युंजय मंत्र जाप के लिए अपनी आवश्यकता के अनुसार अनुरोध भेजें।",
    occasions: "विशेष शिव उपासना एवं संकल्प",
    symbol: "शिव",
  },
  {
    number: "03",
    name: "गृह प्रवेश पूजा",
    englishName: "Griha Pravesh Puja",
    category: "गृह एवं संस्कार",
    description:
      "नए घर में प्रवेश के शुभ अवसर पर पूजा की व्यवस्था और उपलब्धता के लिए ट्रस्ट से संपर्क करें।",
    occasions: "नए घर में प्रवेश",
    symbol: "शुभ",
  },
  {
    number: "04",
    name: "नवरात्रि पूजा",
    englishName: "Navratri Puja",
    category: "देवी उपासना",
    description:
      "माँ दुर्गा की आराधना, नवरात्रि पूजा और संबंधित धार्मिक अनुष्ठानों के लिए अपना अनुरोध भेजें।",
    occasions: "नवरात्रि एवं देवी उपासना",
    symbol: "जय माँ",
  },
  {
    number: "05",
    name: "श्री गणेश पूजा",
    englishName: "Ganesh Puja",
    category: "मंगल आरंभ",
    description:
      "शुभ कार्यों के आरंभ और धार्मिक अवसरों पर श्री गणेश पूजा के लिए अपनी पसंद की तारीख बताएँ।",
    occasions: "नया कार्य एवं शुभ अवसर",
    symbol: "गणेश",
  },
  {
    number: "06",
    name: "रुद्राभिषेक",
    englishName: "Rudrabhishek",
    category: "शिव उपासना",
    description:
      "भगवान शिव के रुद्राभिषेक और पूजा-विधि के संबंध में जानकारी एवं उपलब्धता के लिए अनुरोध करें।",
    occasions: "सोमवार एवं विशेष शिव पर्व",
    symbol: "हर हर महादेव",
  },
];

export default function PujaPage() {
  return (
    <main className="min-h-screen bg-cream text-ink">
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-maroon/10">
        <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-amber-200/30 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 -left-20 h-64 w-64 rounded-full bg-red-200/20 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-24">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-maroon transition hover:text-saffron"
          >
            <span aria-hidden="true">←</span>
            मुख्य वेबसाइट पर वापस जाएँ
          </Link>

          <div className="mt-10 max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-saffron">
              योग माया आश्रम
            </p>

            <h1 className="mt-5 font-serif text-4xl leading-tight text-maroon sm:text-5xl lg:text-6xl">
              पूजा एवं
              <span className="block">वैदिक अनुष्ठान</span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-ink/70 sm:text-lg">
              श्रद्धा, संकल्प और आध्यात्मिक साधना से जुड़े विशेष अवसरों के
              लिए पूजा एवं अनुष्ठान संबंधी अनुरोध भेजें। अपनी आवश्यकता और
              पसंदीदा समय बताएँ; उपलब्धता की पुष्टि ट्रस्ट द्वारा की जाएगी।
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/booking"
                className="inline-flex min-h-12 items-center justify-center rounded-full bg-maroon px-7 py-3 font-semibold text-white shadow-sm transition hover:bg-maroon/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-maroon focus-visible:ring-offset-2"
              >
                पूजा अनुरोध करें
                <span className="ml-2" aria-hidden="true">
                  →
                </span>
              </Link>

              <Link
                href="/contact"
                className="inline-flex min-h-12 items-center justify-center rounded-full border border-maroon/20 bg-white/70 px-7 py-3 font-semibold text-maroon transition hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-maroon focus-visible:ring-offset-2"
              >
                संपर्क करें
              </Link>
            </div>
          </div>

          <div className="mt-12 grid max-w-3xl gap-3 sm:grid-cols-3">
            {[
              ["01", "पूजा चुनें"],
              ["02", "अनुरोध भेजें"],
              ["03", "पुष्टि की प्रतीक्षा करें"],
            ].map(([number, label]) => (
              <div
                key={number}
                className="flex items-center gap-3 rounded-2xl border border-maroon/10 bg-white/70 p-4"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-amber-100 font-serif text-sm text-maroon">
                  {number}
                </span>
                <span className="text-sm font-medium text-ink">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Puja catalogue */}
      <section
        className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20"
        aria-labelledby="puja-list-title"
      >
        <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-semibold tracking-wider text-saffron">
              पूजा संग्रह
            </p>
            <h2
              id="puja-list-title"
              className="mt-3 font-serif text-3xl text-maroon sm:text-4xl"
            >
              अपनी पूजा चुनें
            </h2>
            <p className="mt-3 max-w-2xl leading-7 text-ink/70">
              नीचे दी गई पूजा सेवाओं के बारे में जानकारी देखें और अपने अनुरोध
              के लिए आगे बढ़ें।
            </p>
          </div>

          <span className="text-sm text-ink/60">
            {pujas.length} पूजा विकल्प
          </span>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {pujas.map((puja) => (
            <article
              key={puja.englishName}
              className="group flex h-full flex-col rounded-3xl border border-maroon/10 bg-white p-6 shadow-sm transition duration-200 hover:-translate-y-1 hover:border-amber-300 hover:shadow-lg sm:p-7"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-amber-200 bg-amber-50 px-2 text-center font-serif text-sm font-semibold text-maroon">
                  {puja.symbol}
                </div>

                <span className="text-sm font-medium tracking-widest text-maroon/40">
                  {puja.number}
                </span>
              </div>

              <p className="mt-6 text-xs font-semibold uppercase tracking-wider text-saffron">
                {puja.category}
              </p>

              <h3 className="mt-2 font-serif text-2xl leading-snug text-maroon">
                {puja.name}
              </h3>

              <p className="mt-1 text-sm text-ink/50">
                {puja.englishName}
              </p>

              <p className="mt-4 flex-1 text-sm leading-7 text-ink/70">
                {puja.description}
              </p>

              <div className="mt-5 border-t border-maroon/10 pt-4">
                <p className="text-xs font-semibold text-ink/60">
                  संबंधित अवसर
                </p>
                <p className="mt-1 text-sm leading-6 text-ink">
                  {puja.occasions}
                </p>
              </div>

              <Link
                href="/booking"
                className="mt-6 inline-flex min-h-11 items-center justify-center gap-2 rounded-full border border-maroon/20 px-5 py-3 text-sm font-semibold text-maroon transition hover:border-maroon hover:bg-maroon hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-maroon focus-visible:ring-offset-2"
                aria-label={`${puja.name} के लिए बुकिंग अनुरोध करें`}
              >
                बुकिंग अनुरोध करें
                <span aria-hidden="true">→</span>
              </Link>
            </article>
          ))}
        </div>
      </section>

      {/* Booking notice */}
      <section className="mx-auto max-w-7xl px-5 pb-16 sm:px-8 sm:pb-20">
        <div className="rounded-3xl border border-amber-300/70 bg-amber-50/80 p-6 sm:p-9">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-start">
            <div
              className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white text-2xl text-maroon"
              aria-hidden="true"
            >
              ॐ
            </div>

            <div className="flex-1">
              <h2 className="font-serif text-2xl text-maroon">
                बुकिंग से पहले ध्यान दें
              </h2>

              <ul className="mt-4 space-y-3 text-sm leading-7 text-ink/80">
                <li>
                  • बुकिंग फॉर्म भरने के लिए पहले लॉगिन करना आवश्यक है।
                </li>
                <li>
                  • अनुरोध भेजने का अर्थ पूजा की तारीख या समय की अंतिम
                  पुष्टि नहीं है।
                </li>
                <li>
                  • ट्रस्ट द्वारा अनुरोध की समीक्षा और पुष्टि किए जाने के
                  बाद ही समय को निश्चित मानें।
                </li>
                <li>
                  • इस समय ऑनलाइन भुगतान या मीटिंग लिंक स्वतः जारी नहीं होता।
                </li>
              </ul>

              <Link
                href="/booking"
                className="mt-6 inline-flex min-h-11 items-center justify-center rounded-full bg-maroon px-6 py-3 text-sm font-semibold text-white transition hover:bg-maroon/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-maroon focus-visible:ring-offset-2"
              >
                बुकिंग फॉर्म खोलें
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer navigation */}
      <section className="border-t border-maroon/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-5 py-8 text-sm sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <p className="text-ink/60">
            प्रदीपानंद जगदंबा परिवार ट्रस्ट · योग माया आश्रम
          </p>

          <div className="flex flex-wrap gap-5">
            <Link
              href="/"
              className="text-maroon transition hover:text-saffron"
            >
              होम
            </Link>
            <Link
              href="/contact"
              className="text-maroon transition hover:text-saffron"
            >
              संपर्क
            </Link>
            <Link
              href="/dashboard"
              className="text-maroon transition hover:text-saffron"
            >
              डैशबोर्ड
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
