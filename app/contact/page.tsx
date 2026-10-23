import Link from "next/link";

const phoneNumber = "7080798688";
const whatsappLink = "https://wa.me/917080798688";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-cream px-5 py-16 sm:py-24">
      <section className="mx-auto max-w-xl rounded-3xl border border-maroon/10 bg-white p-6 shadow-xl sm:p-10">
        <p className="text-center text-sm font-semibold tracking-wide text-saffron">
          आस्था • सेवा • साधना
        </p>

        <h1 className="mt-3 text-center font-serif text-3xl text-maroon sm:text-4xl">
          संपर्क करें
        </h1>

        <h2 className="mt-5 text-center text-lg font-semibold text-ink">
          प्रदीपानंद जगदंबा परिवार ट्रस्ट
        </h2>

        <p className="mt-2 text-center leading-7 text-ink/70">
          योग माया आश्रम से संबंधित जानकारी, पूजा एवं अनुष्ठान के
          अनुरोध के लिए हमसे संपर्क करें।
        </p>

        <div className="mt-8 rounded-2xl border border-maroon/10 bg-cream p-5 text-center">
          <p className="text-sm text-ink/70">मोबाइल नंबर</p>

          <a
            href={`tel:+91${phoneNumber}`}
            className="mt-2 inline-block text-2xl font-bold tracking-wide text-maroon hover:underline"
            aria-label={`कॉल करें ${phoneNumber}`}
          >
            {phoneNumber}
          </a>

          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            <a
              href={`tel:+91${phoneNumber}`}
              className="inline-flex min-h-12 items-center justify-center rounded-full bg-maroon px-5 py-3 font-semibold text-white transition hover:bg-maroon/90"
            >
              कॉल करें
            </a>

            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-12 items-center justify-center rounded-full bg-[#167b45] px-5 py-3 font-semibold text-white transition hover:bg-[#12683a]"
            >
              WhatsApp करें
            </a>
          </div>
        </div>

        <p className="mt-5 text-center text-sm leading-6 text-ink/60">
          संपर्क करने से पहले अपने प्रश्न या सेवा की आवश्यकता तैयार रखें।
          पूजा या अन्य सेवा की उपलब्धता की पुष्टि ट्रस्ट से करें।
        </p>

        <Link
          href="/"
          className="mt-8 block text-center text-sm font-semibold text-saffron hover:underline"
        >
          ← मुख्य वेबसाइट पर वापस जाएँ
        </Link>
      </section>
    </main>
  );
}
