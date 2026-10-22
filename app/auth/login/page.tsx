import Link from "next/link";
import { signInAction } from "@/app/auth/actions";

const messages: Record<string, string> = {
  config: "Supabase configuration missing. Follow the setup guide first.",
  required: "Email and password are required.",
  credentials: "Login failed. Check your email/password and verify your email if required.",
  callback: "Email confirmation could not be completed. Please try again.",
};
export default async function LoginPage({ searchParams }: { searchParams: Promise<{ error?: string }> }) {
  const { error } = await searchParams;
  return <main className="min-h-screen bg-cream px-5 py-16"><div className="mx-auto max-w-md rounded-3xl border border-maroon/10 bg-white p-8 shadow-xl">
    <p className="text-sm font-semibold tracking-widest text-saffron">YOG MAYA ASHRAM</p><h1 className="mt-3 text-4xl text-maroon">लॉगिन करें</h1><p className="mt-2 text-sm text-ink/60">अपने सदस्य या अधिकृत ट्रस्ट अकाउंट में प्रवेश करें।</p>
    {error && <p role="alert" className="mt-5 rounded-xl bg-red-50 p-3 text-sm text-red-800">{messages[error] || "Request could not be completed."}</p>}
    <form action={signInAction} className="mt-6 space-y-4"><label className="block text-sm">ईमेल<input required type="email" name="email" autoComplete="email" className="mt-1 w-full rounded-xl border p-3" /></label><label className="block text-sm">पासवर्ड<input required type="password" name="password" autoComplete="current-password" className="mt-1 w-full rounded-xl border p-3" /></label><button className="w-full rounded-full bg-maroon px-5 py-3 font-semibold text-white">सुरक्षित लॉगिन</button></form>
    <p className="mt-5 text-sm text-ink/70">नया अकाउंट? <Link className="font-semibold text-maroon underline" href="/auth/signup">रजिस्टर करें</Link></p><Link className="mt-4 inline-block text-sm text-ink/50" href="/">← मुख्य वेबसाइट</Link>
  </div></main>;
}
