import Link from "next/link";
import { redirect } from "next/navigation";
import { createSupabaseServerClient } from "@/lib/supabase/server";
export const runtime = "edge";

const allowed=["super_admin","trustee","membership_manager","finance_manager","puja_manager"];
export default async function AdminHome(){
 const supabase=await createSupabaseServerClient(); if(!supabase) return <Setup/>;
 const {data:{user}}=await supabase.auth.getUser(); if(!user) redirect("/auth/login");
 const {data:profile}=await supabase.from("profiles").select("app_role,account_status,full_name").eq("id",user.id).maybeSingle();
 if(!profile||!allowed.includes(profile.app_role)||profile.account_status!=="active") redirect("/dashboard?error=forbidden");
 const [apps,members,bookings,events]=await Promise.all([
  supabase.from("trustee_applications").select("id",{count:"exact",head:true}).eq("review_status","submitted"),
  supabase.from("memberships").select("id",{count:"exact",head:true}).eq("status","pending"),
  supabase.from("bookings").select("id",{count:"exact",head:true}).eq("booking_status","pending"),
  supabase.from("live_events").select("id",{count:"exact",head:true}).eq("is_published",true),
 ]);
 return <main className="min-h-screen bg-cream px-4 py-8 md:px-8"><div className="mx-auto max-w-6xl"><Link href="/dashboard" className="text-sm text-maroon underline">← सदस्य डैशबोर्ड</Link><h1 className="mt-4 text-4xl text-maroon">ट्रस्ट प्रशासन</h1><p className="mt-2 text-ink/60">लॉगिन: {profile.full_name||user.email} · भूमिका: {profile.app_role}</p><div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{[["मुख्य ट्रस्ट आवेदन",apps.count||0,"/admin/members"],["लंबित सदस्यता",members.count||0,"/admin/members"],["लंबित बुकिंग",bookings.count||0,"/admin/members"],["प्रकाशित लाइव कार्यक्रम",events.count||0,"/admin/live"]].map(([title,count,href])=><Link key={String(title)} href={String(href)} className="rounded-2xl border border-maroon/10 bg-white p-5"><p className="text-sm text-ink/60">{title}</p><p className="mt-2 text-4xl font-semibold text-maroon">{count}</p></Link>)}</div><div className="mt-8 grid gap-4 md:grid-cols-2"><AdminLink href="/admin/members" title="सदस्य और आवेदन" desc="सदस्यता/ट्रस्ट आवेदन की समीक्षा करें; भूमिका परिवर्तन अलग सुरक्षित प्रक्रिया से होगा।"/><AdminLink href="/admin/live" title="लाइव आरती प्रबंधन" desc="YouTube वीडियो ID और कार्यक्रम का प्रकाशन नियंत्रित करें।"/><AdminLink href="/admin/bookings" title="पूजा / अपॉइंटमेंट" desc="बुकिंग की समीक्षा, पुष्टि और Meet/Zoom लिंक दर्ज करें।"/></div><p className="mt-8 rounded-xl border border-amber-300 bg-amber-50 p-4 text-sm text-amber-900">सुरक्षा: किसी व्यक्ति को सुपर एडमिन/ट्रस्टी बनाने के लिए केवल फ्रंटएंड से role बदलना उपलब्ध नहीं है। पहली बार भूमिका ट्रस्ट द्वारा सत्यापित, सुरक्षित SQL प्रक्रिया से दी जानी चाहिए।</p></div></main>
}
function AdminLink({href,title,desc}:{href:string;title:string;desc:string}){return <Link href={href} className="rounded-2xl border border-maroon/10 bg-white p-6 hover:shadow"><h2 className="text-2xl text-maroon">{title}</h2><p className="mt-2 text-sm text-ink/60">{desc}</p></Link>}
function Setup(){return <main className="p-8">Supabase setup required. See README.</main>}
