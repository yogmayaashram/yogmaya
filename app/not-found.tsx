import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-[70vh] items-center justify-center bg-cream px-6 py-20 text-center">
      <div className="max-w-xl">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-saffron">404 · पृष्ठ नहीं मिला</p>
        <h1 className="mt-4 text-4xl font-serif text-maroon md:text-5xl">यह पृष्ठ उपलब्ध नहीं है</h1>
        <p className="mt-4 leading-relaxed text-ink/70">लिंक गलत हो सकता है या पृष्ठ स्थानांतरित किया गया है। आप मुख्य वेबसाइट से आगे बढ़ सकते हैं।</p>
        <Link href="/" className="mt-8 inline-flex rounded-full bg-maroon px-6 py-3 font-medium text-white transition hover:bg-saffron">मुख्य पृष्ठ पर जाएँ</Link>
      </div>
    </main>
  );
}
