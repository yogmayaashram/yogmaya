import Link from "next/link";
export default function DonatePage() {
  return (
    <main className="min-h-screen bg-cream py-24 px-6 flex items-center justify-center">
      <div className="max-w-md w-full bg-white p-8 rounded-3xl border border-maroon/10 shadow-xl text-center">
        <h1 className="text-3xl font-serif text-maroon mb-4">दान करें</h1>
        <p className="text-sm text-ink/60 mb-8">आपका हर दान आश्रम की सेवा को सशक्त बनाता है।</p>
        <div className="bg-cream p-6 rounded-2xl mb-6">
          <p className="text-sm font-medium text-ink/50 mb-1">UPI ID / Bank Details</p>
          <p className="font-mono text-lg font-semibold text-maroon select-all">UPI / बैंक विवरण शीघ्र उपलब्ध होंगे</p>
        </div>
        <p className="rounded-xl border border-amber-300 bg-amber-50 p-4 text-left text-sm leading-relaxed text-amber-900">ऑनलाइन भुगतान अभी सक्रिय नहीं है। कृपया सत्यापित ट्रस्ट भुगतान विवरण प्रकाशित होने तक इस पेज से भुगतान न करें।</p>
        <Link href="/" className="inline-block mt-8 text-sm text-ink/40 hover:text-saffron">← Back to Home</Link>
      </div>
    </main>
  );
}
