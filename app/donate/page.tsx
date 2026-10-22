import Link from "next/link";
export default function DonatePage() {
  return (
    <main className="min-h-screen bg-cream py-24 px-6 flex items-center justify-center">
      <div className="max-w-md w-full bg-white p-8 rounded-3xl border border-maroon/10 shadow-xl text-center">
        <h1 className="text-3xl font-serif text-maroon mb-4">दान करें</h1>
        <p className="text-sm text-ink/60 mb-8">आपका हर दान आश्रम की सेवा को सशक्त बनाता है।</p>
        <div className="bg-cream p-6 rounded-2xl mb-6">
          <p className="text-sm font-medium text-ink/50 mb-1">UPI ID / Bank Details</p>
          <p className="font-mono text-lg font-semibold text-maroon select-all">ashram@upi</p>
        </div>
        <button className="w-full bg-saffron text-white py-3 rounded-xl font-medium">Pay via UPI</button>
        <Link href="/" className="inline-block mt-8 text-sm text-ink/40 hover:text-saffron">← Back to Home</Link>
      </div>
    </main>
  );
}
