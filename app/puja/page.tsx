
import Link from "next/link";
import { createBooking } from "@/app/booking/actions";
import { createSupabaseServerClient } from "@/lib/supabase/server";

export const runtime = "edge";

const pujas = [
  {
    number: "01",
    icon: "🪔",
    name: "सत्यनारायण कथा",
    subtitle: "परिवार की सुख-समृद्धि के लिए",
    description:
      "भगवान सत्यनारायण की पूजा और कथा के माध्यम से परिवार के मंगल, कृतज्ञता और शुभ संकल्प के लिए धार्मिक आयोजन।",
    details: [
      "पूजा एवं कथा के आयोजन के संबंध में मार्गदर्शन",
      "परिवार के शुभ अवसरों के लिए उपयुक्त",
      "समय और आयोजन की पुष्टि ट्रस्ट द्वारा",
    ],
  },
  {
    number: "02",
    icon: "🙏",
    name: "महामृत्युंजय जाप",
    subtitle: "शांति और आध्यात्मिक साधना",
    description:
      "भगवान शिव को समर्पित महामृत्युंजय मंत्र-जाप के धार्मिक आयोजन के लिए अनुरोध और आवश्यक मार्गदर्शन।",
    details: [
      "जाप के आयोजन के संबंध में चर्चा",
      "संकल्प और पूजा संबंधी जानकारी",
      "विधि एवं समय की पुष्टि ट्रस्ट द्वारा",
    ],
  },
  {
    number: "03",
    icon: "🏡",
    name: "गृह प्रवेश पूजा",
    subtitle: "नए घर के शुभारंभ के लिए",
    description:
      "नए घर में प्रवेश के शुभ अवसर पर पूजा के आयोजन, पसंदीदा तारीख और आवश्यक तैयारियों के लिए अनुरोध।",
    details: [
      "गृह प्रवेश की तारीख पर चर्चा",
      "स्थान एवं आयोजन संबंधी जानकारी",
      "उपलब्धता की पुष्टि आवश्यक",
    ],
  },
  {
    number: "04",
    icon: "🌺",
    name: "नवरात्रि पूजा",
    subtitle: "माँ दुर्गा की आराधना",
    description:
      "नवरात्रि के अवसर पर माँ दुर्गा की आराधना और पूजा आयोजन के संबंध में ट्रस्ट से संपर्क करने का माध्यम।",
    details: [
      "पूजा आयोजन के लिए अनुरोध",
      "तिथि एवं आयोजन संबंधी प्राथमिकताएँ",
      "अंतिम कार्यक्रम ट्रस्ट की पुष्टि के बाद",
    ],
  },
];

function getIndiaDateTimeMin() {
  const date = new Date(Date.now() + 30 * 60 * 1000);
  const parts = new Intl.DateTimeFormat("en-CA", {
    timeZone: "Asia/Kolkata",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    hourCycle: "h23",
  }).formatToParts(date);

  const values = Object.fromEntries(
    parts.map((part) => [part.type, part.value])
  );

  return `${values.year}-${values.month}-${values.day}T${values.hour}:${values.minute}`;
}

export default async function PujaPage() {
  const supabase = await createSupabaseServerClient();
  const { data: { user } } = supabase
    ? await supabase.auth.getUser()
    : { data: { user: null } };

  const minDateTime = getIndiaDateTimeMin();

  return (
    <main className="min-h-screen bg-cream text-ink">
      <section className="relative overflow-hidden border-b border-maroon/10 bg-maroon px-5 py-16 text-white md:py-24">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-16 -top-20 h-72 w-72 rounded-full border border-amber-200/20"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-5 -top-9 h-52 w-52 rounded-full border border-amber-200/20"
        />

        <div className="relative mx-auto max-w-6xl">
          <Link
            href="/"
            className="text-sm text-amber-200 transition hover:text-white"
          >
            ← मुख्य पृष्ठ
          </Link>

          <p className="mt-10 text-xs font-semibold uppercase tracking-[0.28em] text-amber-200">
            Shri Jagdamba Trust
          </p>

          <h1 className="mt-4 max-w-3xl font-serif text-4xl leading-tight md:text-6xl">
            श्रद्धा, संकल्प और
            <span className="block text-amber-200">पूजा एवं अनुष्ठान</span>
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-8 text-white/80 md:text-lg">
            अपने शुभ अवसर और धार्मिक आयोजन के लिए पूजा चुनें।
            बुकिंग अनुरोध भेजें; तारीख और आयोजन की अंतिम पुष्टि
            ट्रस्ट की उपलब्धता के अनुसार की जाएगी।
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#puja-list"
              className="rounded-full bg-amber-300 px-6 py-3 font-semibold text-maroon transition hover:bg-amber-200"
            >
              पूजा सेवाएँ देखें
            </a>
            <a
              href="#booking-form"
              className="rounded-full border border-white/40 px-6 py-3 font-semibold text-white transition hover:bg-white/10"
            >
              बुकिंग अनुरोध करें
            </a>
          </div>

          <div className="mt-10 flex flex-wrap gap-x-6 gap-y-3 text-sm text-white/75">
            <span>✦ अपनी पूजा चुनें</span>
            <span>✦ पसंदीदा समय बताएँ</span>
            <span>✦ पुष्टि की प्रतीक्षा करें</span>
          </div>
        </div>
      </section>

      <section id="puja-list" className="scroll-mt-8 px-5 py-16 md:py-20">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-saffron">
              हमारी पूजा सेवाएँ
            </p>
            <h2 className="mt-3 font-serif text-3xl text-maroon md:text-4xl">
              अपने शुभ अवसर के लिए पूजा चुनें
            </h2>
            <p className="mt-4 leading-7 text-ink/70">
              हर आयोजन की आवश्यकताएँ अलग होती हैं। अपनी पसंद की पूजा
              चुनकर उसके लिए अनुरोध भेजें और आयोजन से संबंधित जानकारी
              ट्रस्ट से प्राप्त करें।
            </p>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {pujas.map((puja) => (
              <article
                key={puja.number}
                className="flex h-full flex-col rounded-3xl border border-maroon/10 bg-white p-6 shadow-sm transition duration-200 hover:-translate-y-1 hover:shadow-lg md:p-8"
              >
                <div className="flex items-start justify-between gap-4">
                  <span
                    aria-hidden="true"
                    className="flex h-14 w-14 items-center justify-center rounded-2xl bg-amber-50 text-3xl"
                  >
                    {puja.icon}
                  </span>
                  <span className="font-serif text-sm text-maroon/40">
                    {puja.number}
                  </span>
                </div>

                <h3 className="mt-6 font-serif text-2xl text-maroon">
                  {puja.name}
                </h3>
                <p className="mt-2 text-sm font-medium text-saffron">
                  {puja.subtitle}
                </p>
                <p className="mt-4 leading-7 text-ink/70">
                  {puja.description}
                </p>

                <ul className="mt-5 space-y-3">
                  {puja.details.map((detail) => (
                    <li
                      key={detail}
                      className="flex items-start gap-3 text-sm leading-6 text-ink/70"
                    >
                      <span
                        aria-hidden="true"
                        className="mt-0.5 text-saffron"
                      >
                        ✓
                      </span>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href="#booking-form"
                  className="mt-7 inline-flex items-center justify-center rounded-full border border-maroon/20 px-5 py-3 text-sm font-semibold text-maroon transition hover:border-maroon hover:bg-maroon hover:text-white"
                >
                  इस पूजा के लिए अनुरोध करें →
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        id="booking-form"
        className="scroll-mt-8 border-y border-maroon/10 bg-white px-5 py-16 md:py-20"
      >
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-saffron">
              Booking Request
            </p>
            <h2 className="mt-3 font-serif text-3xl leading-tight text-maroon md:text-4xl">
              पूजा अनुरोध भेजें
            </h2>
            <p className="mt-5 leading-7 text-ink/70">
              अपनी पसंद की पूजा, संपर्क विवरण और सुविधाजनक समय भरें।
              अनुरोध जमा होने के बाद ट्रस्ट की पुष्टि आवश्यक होगी।
            </p>

            <div className="mt-8 space-y-5">
              <div className="flex gap-4">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-amber-50 text-lg">
                  01
                </span>
                <div>
                  <h3 className="font-semibold text-maroon">
                    विवरण भरें
                  </h3>
                  <p className="mt-1 text-sm leading-6 text-ink/65">
                    पूजा, नाम, मोबाइल और पसंदीदा समय दर्ज करें।
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-amber-50 text-lg">
                  02
                </span>
                <div>
                  <h3 className="font-semibold text-maroon">
                    अनुरोध जमा करें
                  </h3>
                  <p className="mt-1 text-sm leading-6 text-ink/65">
                    आपका अनुरोध मौजूदा booking system में सेव करने
                    का प्रयास किया जाएगा।
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-amber-50 text-lg">
                  03
                </span>
                <div>
                  <h3 className="font-semibold text-maroon">
                    पुष्टि प्राप्त करें
                  </h3>
                  <p className="mt-1 text-sm leading-6 text-ink/65">
                    समय और आयोजन को अंतिम मानने से पहले ट्रस्ट की
                    पुष्टि की प्रतीक्षा करें।
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-3xl border border-maroon/10 bg-cream p-5 md:p-8">
            {!user ? (
              <div className="py-8 text-center">
                <span aria-hidden="true" className="text-4xl">
                  🙏
                </span>
                <h3 className="mt-5 font-serif text-2xl text-maroon">
                  पहले लॉगिन करें
                </h3>
                <p className="mx-auto mt-3 max-w-sm leading-7 text-ink/70">
                  पूजा का अनुरोध भेजने के लिए अपने खाते में लॉगिन
                  करना आवश्यक है।
                </p>
                <Link
                  href="/auth/login"
                  className="mt-6 inline-flex rounded-full bg-maroon px-7 py-3 font-semibold text-white transition hover:bg-saffron"
                >
                  लॉगिन करें
                </Link>
              </div>
            ) : (
              <>
                <h3 className="font-serif text-2xl text-maroon">
                  बुकिंग की जानकारी
                </h3>
                <p className="mt-2 text-sm leading-6 text-ink/65">
                  सभी आवश्यक जानकारी भरें। समय भारतीय मानक समय (IST)
                  के अनुसार चुनें।
                </p>

                <form action={createBooking} className="mt-7 space-y-5">
                  <input type="hidden" name="service_type" value="puja" />

                  <label className="block text-sm font-medium text-ink">
                    पूजा का चयन करें
                    <select
                      name="service_name"
                      required
                      defaultValue=""
                      className="mt-2 w-full rounded-xl border border-maroon/15 bg-white p-3.5 outline-none focus:border-saffron focus:ring-2 focus:ring-amber-200"
                    >
                      <option value="" disabled>
                        अपनी पूजा चुनें
                      </option>
                      {pujas.map((puja) => (
                        <option key={puja.number} value={puja.name}>
                          {puja.name}
                        </option>
                      ))}
                    </select>
                  </label>

                  <label className="block text-sm font-medium text-ink">
                    आपका पूरा नाम
                    <input
                      required
                      minLength={2}
                      maxLength={100}
                      name="attendee_name"
                      defaultValue={
                        typeof user.user_metadata?.full_name === "string"
                          ? user.user_metadata.full_name
                          : ""
                      }
                      autoComplete="name"
                      className="mt-2 w-full rounded-xl border border-maroon/15 bg-white p-3.5 outline-none focus:border-saffron focus:ring-2 focus:ring-amber-200"
                      placeholder="अपना नाम लिखें"
                    />
                  </label>

                  <label className="block text-sm font-medium text-ink">
                    मोबाइल नंबर
                    <input
                      required
                      minLength={8}
                      maxLength={20}
                      name="attendee_phone"
                      type="tel"
                      autoComplete="tel"
                      defaultValue={
                        typeof user.user_metadata?.phone === "string"
                          ? user.user_metadata.phone
                          : ""
                      }
                      className="mt-2 w-full rounded-xl border border-maroon/15 bg-white p-3.5 outline-none focus:border-saffron focus:ring-2 focus:ring-amber-200"
                      placeholder="संपर्क नंबर लिखें"
                    />
                  </label>

                  <label className="block text-sm font-medium text-ink">
                    पसंदीदा तारीख और समय
                    <input
                      required
                      name="starts_at"
                      type="datetime-local"
                      min={minDateTime}
                      className="mt-2 w-full min-w-0 rounded-xl border border-maroon/15 bg-white p-3.5 outline-none focus:border-saffron focus:ring-2 focus:ring-amber-200"
                    />
                    <span className="mt-2 block text-xs leading-5 text-ink/60">
                      यह आपकी पसंद है; अंतिम समय ट्रस्ट की पुष्टि के बाद
                      तय होगा।
                    </span>
                  </label>

                  <label className="block text-sm font-medium text-ink">
                    विशेष जानकारी (वैकल्पिक)
                    <textarea
                      name="notes"
                      rows={4}
                      maxLength={2000}
                      className="mt-2 w-full rounded-xl border border-maroon/15 bg-white p-3.5 outline-none focus:border-saffron focus:ring-2 focus:ring-amber-200"
                      placeholder="पूजा का अवसर, स्थान या अन्य आवश्यक जानकारी"
                    />
                  </label>

                  <button
                    type="submit"
                    className="w-full rounded-full bg-maroon px-6 py-4 font-semibold text-white transition hover:bg-saffron focus:outline-none focus:ring-2 focus:ring-saffron focus:ring-offset-2"
                  >
                    पूजा अनुरोध भेजें →
                  </button>

                  <p className="text-center text-xs leading-5 text-ink/60">
                    अनुरोध भेजने से बुकिंग स्वतः कन्फर्म नहीं होती।
                    भुगतान और मीटिंग लिंक इस फॉर्म से स्वतः नहीं बनेंगे।
                  </p>
                </form>
              </>
            )}
          </div>
        </div>
      </section>

      <section className="px-5 py-12 text-center">
        <p className="text-sm text-ink/65">
          अन्य सेवाओं या सहायता के लिए
        </p>
        <div className="mt-4 flex flex-wrap justify-center gap-3">
          <Link
            href="/booking"
            className="rounded-full border border-maroon/20 px-5 py-3 text-sm font-semibold text-maroon hover:bg-white"
          >
            सभी बुकिंग सेवाएँ
          </Link>
          <Link
            href="/contact"
            className="rounded-full border border-maroon/20 px-5 py-3 text-sm font-semibold text-maroon hover:bg-white"
          >
            संपर्क करें
          </Link>
          <Link
            href="/"
            className="rounded-full border border-maroon/20 px-5 py-3 text-sm font-semibold text-maroon hover:bg-white"
          >
            मुख्य पृष्ठ
          </Link>
        </div>
      </section>
    </main>
  );
}
