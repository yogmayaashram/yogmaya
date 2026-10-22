"use server";
import { redirect } from "next/navigation";
import { createSupabaseServerClient } from "@/lib/supabase/server";
export async function applyMembership(formData: FormData) {
 const supabase = await createSupabaseServerClient(); if (!supabase) redirect("/membership/apply?error=config");
 const {data:{user}} = await supabase.auth.getUser(); if (!user) redirect("/auth/login");
 const plan = String(formData.get("plan") || "general_free");
 if (!(["general_free"] as string[]).includes(plan)) redirect("/membership/apply?error=plan");
 const {data:existing} = await supabase.from("memberships").select("id,status").eq("user_id",user.id).in("status",["pending","active"]).limit(1);
 if (existing?.length) redirect("/membership/apply?error=exists");
 const {error} = await supabase.from("memberships").insert({user_id:user.id,plan_code:plan,status:"pending"});
 if (error) redirect("/membership/apply?error=submit");
 redirect("/dashboard?membership=sent");
}
export async function applyTrustee(formData: FormData) {
 const supabase = await createSupabaseServerClient(); if (!supabase) redirect("/membership/apply?error=config");
 const {data:{user}} = await supabase.auth.getUser(); if (!user) redirect("/auth/login");
 const full_name=String(formData.get("full_name")||"").trim(); const phone=String(formData.get("phone")||"").trim(); const address=String(formData.get("address")||"").trim(); const statement=String(formData.get("statement")||"").trim();
 if(full_name.length<2 || phone.length<8 || !address) redirect("/membership/apply?error=required");
 const {error}=await supabase.from("trustee_applications").insert({user_id:user.id,full_name,phone,email:user.email,address,statement});
 if(error) redirect("/membership/apply?error=submit");
 redirect("/dashboard?trusteeApplication=sent");
}
