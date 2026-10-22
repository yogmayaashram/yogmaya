import Link from "next/link";
export default function PashushalaPage() {
  return (
    <main className="min-h-screen bg-cream py-24 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl font-serif text-maroon mb-6">गौसेवा / पशुशाला</h1>
        <p className="text-ink/70 mb-12">गौ माता की सेवा और देखभाल। आश्रम में गौ-आधारित जीवनशैली को बढ़ावा।</p>
        <div className="bg-white p-8 rounded-3xl border border-maroon/10 inline-block">
          <img src="https://images.unsplash.com/photo-1545389336-cf090694435e" alt="Gau Mata" className="w-64 h-64 object-cover rounded-2xl mb-6 mx-auto" />
          <h3 className="text-2xl font-serif text-maroon mb-2">गौ सेवा में सहयोग करें</h3>
          <p className="text-sm text-ink/60 mb-6">गौ माता के चारे और देखभाल में आर्थिक सहयोग करें।</p>
          <Link href="/donate" className="bg-maroon text-white px-8 py-3 rounded-full inline-block">Donate for Gau Seva</Link>
        </div>
        <br/>
        <Link href="/" className="inline-block mt-12 text-saffron hover:underline">← Back to Home</Link>
      </div>
    </main>
  );
}
