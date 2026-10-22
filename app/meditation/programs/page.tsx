import Link from "next/link";
export default function ProgramsPage() {
  return (
    <main className="min-h-screen bg-cream py-24 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl font-serif text-maroon mb-6">Meditation Programs</h1>
        <div className="grid md:grid-cols-2 gap-6 mt-12 text-left">
          {["7-Day Beginner Retreat", "Weekend Stress Relief", "Advanced Sadhana Camp"].map((p) => (
            <div key={p} className="p-8 rounded-3xl bg-white border border-maroon/10 shadow-sm">
              <h3 className="text-xl font-serif text-maroon mb-2">{p}</h3>
              <p className="text-sm text-ink/60 mb-6">Deepen your practice with guided sessions.</p>
              <button className="bg-maroon text-white px-6 py-2 rounded-full text-sm">Enroll Now</button>
            </div>
          ))}
        </div>
        <Link href="/" className="inline-block mt-12 text-saffron hover:underline">← Back to Home</Link>
      </div>
    </main>
  );
}
