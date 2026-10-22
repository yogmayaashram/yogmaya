import Link from "next/link";
export default function PujaPage() {
  return (
    <main className="min-h-screen bg-cream py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-serif text-maroon mb-6">पूजा एवं अनुष्ठान</h1>
        <p className="text-ink/70 mb-12">वैदिक विधि से घर, व्यापार और जीवन के हर शुभ अवसर के लिए पूजा बुक करें।</p>
        <div className="grid gap-6">
          {["Satyanarayan Katha", "Mahamrityunjaya Jaap", "Griha Pravesh Puja", "Navratri Puja"].map((p) => (
            <div key={p} className="p-6 rounded-2xl bg-white border border-maroon/10 shadow-sm flex justify-between items-center">
              <h3 className="text-xl font-serif text-maroon">{p}</h3>
              <button className="bg-saffron text-white px-6 py-2 rounded-full text-sm">Book Now</button>
            </div>
          ))}
        </div>
        <Link href="/" className="inline-block mt-12 text-saffron hover:underline">← Back to Home</Link>
      </div>
    </main>
  );
}
