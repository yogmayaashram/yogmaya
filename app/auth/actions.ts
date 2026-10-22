"use server";
import { redirect } from "next/navigation";
import { createSupabaseServerClient } from "@/lib/supabase/server";

function value(formData: FormData, key: string) { return String(formData.get(key) ?? "").trim(); }

export async function signInAction(formData: FormData) {
  const supabase = await createSupabaseServerClient();
  if (!supabase) redirect("/auth/login?error=config");
  const email = value(formData, "email");
  const password = value(formData, "password");
  if (!email || !password) redirect("/auth/login?error=required");
  const { error } = await supabase.auth.signInWithPassword({ email, password });
  if (error) redirect("/auth/login?error=credentials");
  redirect("/dashboard");
}

export async function signUpAction(formData: FormData) {
  const supabase = await createSupabaseServerClient();
  if (!supabase) redirect("/auth/signup?error=config");
  const full_name = value(formData, "full_name");
  const email = value(formData, "email");
  const phone = value(formData, "phone");
  const password = value(formData, "password");
  if (!full_name || !email || !password || password.length < 10) redirect("/auth/signup?error=required");
  const { error } = await supabase.auth.signUp({
    email, password,
    options: { data: { full_name, phone }, emailRedirectTo: `${process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"}/auth/callback` },
  });
  if (error) redirect("/auth/signup?error=signup");
  redirect("/auth/signup?success=check-email");
}

export async function signOutAction() {
  const supabase = await createSupabaseServerClient();
  if (supabase) await supabase.auth.signOut();
  redirect("/");
}
