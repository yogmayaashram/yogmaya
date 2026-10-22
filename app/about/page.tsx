import Link from "next/link";
export default function AboutPage() {
  return (
    <main className="min-h-screen bg-cream py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-serif text-maroon mb-6">About Yog Maya Ashram</h1>
        <p className="text-ink/70 leading-relaxed mb-6 text-lg">
          Pradipanand Jagdamba Parivar Trust is dedicated to preserving and promoting the rich spiritual and cultural heritage of India. 
          Yog Maya Ashram serves as the center for Puja, Gau Seva, and spiritual meditation.
        </p>
        <Link href="/" className="inline-block mt-6 text-saffron hover:underline">← Back to Home</Link>
      </div>
    </main>
  );
}
