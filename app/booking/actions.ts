"use server";
import { redirect } from "next/navigation";
import { createSupabaseServerClient } from "@/lib/supabase/server";
export async function createBooking(formData:FormData){
 const supabase=await createSupabaseServerClient(); if(!supabase) redirect("/booking?error=config");
 const {data:{user}}=await supabase.auth.getUser(); if(!user) redirect("/auth/login?next=/booking");
 const service_type=String(formData.get("service_type")||"puja"); const service_name=String(formData.get("service_name")||"").trim(); const attendee_name=String(formData.get("attendee_name")||"").trim(); const attendee_phone=String(formData.get("attendee_phone")||"").trim(); const starts=String(formData.get("starts_at")||""); const notes=String(formData.get("notes")||"").trim();
 const startsAt=/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}$/.test(starts)?new Date(`${starts}:00+05:30`):new Date("invalid"); if(!["puja","consultation","meditation","other"].includes(service_type)||service_name.length<2||attendee_name.length<2||attendee_phone.length<8||Number.isNaN(startsAt.getTime())||startsAt.getTime()<Date.now()+30*60*1000) redirect("/booking?error=validation");
 const endsAt=new Date(startsAt.getTime()+30*60*1000);
 const {error}=await supabase.from("bookings").insert({user_id:user.id,service_type,service_name,attendee_name,attendee_email:user.email,attendee_phone,starts_at:startsAt.toISOString(),ends_at:endsAt.toISOString(),timezone:"Asia/Kolkata",meeting_provider:"none",booking_status:"pending",payment_status:"not_required",notes});
 if(error) redirect("/booking?error=submit"); redirect("/dashboard?booking=sent");
}
