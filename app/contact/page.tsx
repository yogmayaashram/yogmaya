import Link from "next/link";
export default function ContactPage() {
  return (
    <main className="min-h-screen bg-cream py-24 px-6 flex items-center justify-center">
      <div className="max-w-md w-full bg-white p-8 rounded-3xl border border-maroon/10 shadow-xl">
        <h1 className="text-3xl font-serif text-maroon mb-6 text-center">संपर्क करें</h1>
        <form className="space-y-4">
          <input type="text" placeholder="Your Name" className="w-full p-3 rounded-xl border border-ink/10 bg-cream outline-none focus:border-saffron" />
          <input type="email" placeholder="Email Address" className="w-full p-3 rounded-xl border border-ink/10 bg-cream outline-none focus:border-saffron" />
          <textarea placeholder="Message" rows={4} className="w-full p-3 rounded-xl border border-ink/10 bg-cream outline-none focus:border-saffron"></textarea>
          <button type="button" className="w-full bg-maroon text-white py-3 rounded-xl font-medium">Send Message</button>
        </form>
        <Link href="/" className="block text-center mt-6 text-sm text-ink/40 hover:text-saffron">← Back to Home</Link>
      </div>
    </main>
  );
}
