-- Yog Maya Trust platform foundation for Supabase/PostgreSQL.
-- Review with the trust's legal/finance team before production use.
-- IMPORTANT: Never expose the Supabase service-role key in a browser.

create extension if not exists pgcrypto;

create table if not exists public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  full_name text,
  phone text,
  avatar_url text,
  app_role text not null default 'public_member'
    check (app_role in ('super_admin','trustee','membership_manager','finance_manager','puja_manager','public_member')),
  account_status text not null default 'active'
    check (account_status in ('active','suspended','closed')),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.trustee_applications (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete restrict,
  full_name text not null,
  phone text not null,
  email text,
  address text,
  statement text,
  requested_contribution_paise integer not null default 500000 check (requested_contribution_paise >= 0),
  payment_status text not null default 'not_started'
    check (payment_status in ('not_started','pending','paid','failed','refunded')),
  review_status text not null default 'submitted'
    check (review_status in ('submitted','under_review','approved','rejected','withdrawn')),
  reviewed_by uuid references public.profiles(id),
  reviewed_at timestamptz,
  decision_note text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.memberships (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete restrict,
  membership_number text unique,
  plan_code text not null default 'general_free',
  status text not null default 'pending'
    check (status in ('pending','active','expired','suspended','cancelled')),
  starts_at timestamptz,
  expires_at timestamptz,
  approved_by uuid references public.profiles(id),
  approved_at timestamptz,
  created_at timestamptz not null default now()
);

create table if not exists public.bookings (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references auth.users(id) on delete set null,
  service_type text not null check (service_type in ('puja','consultation','meditation','other')),
  service_name text not null,
  attendee_name text not null,
  attendee_email text,
  attendee_phone text not null,
  starts_at timestamptz not null,
  ends_at timestamptz not null,
  timezone text not null default 'Asia/Kolkata',
  meeting_provider text check (meeting_provider in ('google_meet','zoom','in_person','none')),
  meeting_url text,
  booking_status text not null default 'pending'
    check (booking_status in ('pending','confirmed','completed','cancelled','no_show')),
  payment_status text not null default 'not_required'
    check (payment_status in ('not_required','pending','paid','failed','refunded')),
  amount_paise integer not null default 0 check (amount_paise >= 0),
  notes text,
  created_at timestamptz not null default now(),
  check (ends_at > starts_at)
);

create table if not exists public.payment_transactions (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references auth.users(id) on delete set null,
  purpose text not null check (purpose in ('donation','membership','trustee_application','puja_booking','shop_order','other')),
  reference_id uuid,
  provider text not null,
  provider_order_id text unique,
  provider_payment_id text unique,
  amount_paise integer not null check (amount_paise > 0),
  currency text not null default 'INR' check (currency = 'INR'),
  status text not null default 'created'
    check (status in ('created','pending','succeeded','failed','refunded','partially_refunded')),
  verified_at timestamptz,
  provider_payload jsonb,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.live_events (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  description text,
  youtube_video_id text,
  scheduled_at timestamptz,
  event_status text not null default 'scheduled'
    check (event_status in ('draft','scheduled','live','ended','cancelled')),
  is_published boolean not null default false,
  recording_url text,
  created_by uuid references public.profiles(id),
  updated_by uuid references public.profiles(id),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  check (youtube_video_id is null or youtube_video_id ~ '^[A-Za-z0-9_-]{11}$')
);


-- Create a least-privilege profile automatically after Auth signup. Public sign-up can never choose a privileged role.
create or replace function public.handle_new_auth_user()
returns trigger language plpgsql security definer set search_path = public
as $$
begin
  insert into public.profiles (id, full_name, phone, app_role, account_status)
  values (new.id, nullif(trim(new.raw_user_meta_data ->> 'full_name'), ''), nullif(trim(new.raw_user_meta_data ->> 'phone'), ''), 'public_member', 'active')
  on conflict (id) do nothing;
  return new;
end;
$$;

drop trigger if exists on_auth_user_created_profile on auth.users;
create trigger on_auth_user_created_profile
after insert on auth.users
for each row execute procedure public.handle_new_auth_user();

create or replace function public.set_updated_at()
returns trigger language plpgsql set search_path = public
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

create table if not exists public.audit_logs (
  id bigint generated always as identity primary key,
  actor_user_id uuid references auth.users(id) on delete set null,
  action text not null,
  target_table text not null,
  target_id text,
  metadata jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now()
);


drop trigger if exists profiles_set_updated_at on public.profiles;
create trigger profiles_set_updated_at before update on public.profiles for each row execute procedure public.set_updated_at();
drop trigger if exists trustee_applications_set_updated_at on public.trustee_applications;
create trigger trustee_applications_set_updated_at before update on public.trustee_applications for each row execute procedure public.set_updated_at();
drop trigger if exists payment_transactions_set_updated_at on public.payment_transactions;
create trigger payment_transactions_set_updated_at before update on public.payment_transactions for each row execute procedure public.set_updated_at();
drop trigger if exists live_events_set_updated_at on public.live_events;
create trigger live_events_set_updated_at before update on public.live_events for each row execute procedure public.set_updated_at();

create index if not exists trustee_applications_user_idx on public.trustee_applications(user_id, created_at desc);
create index if not exists memberships_user_idx on public.memberships(user_id, created_at desc);
create index if not exists bookings_user_idx on public.bookings(user_id, starts_at desc);
create index if not exists bookings_schedule_idx on public.bookings(starts_at, ends_at) where booking_status in ('pending','confirmed');
create index if not exists payments_user_idx on public.payment_transactions(user_id, created_at desc);
create index if not exists live_events_public_idx on public.live_events(is_published, scheduled_at desc);
create index if not exists audit_logs_created_idx on public.audit_logs(created_at desc);

create or replace function public.current_app_role()
returns text language sql stable security definer set search_path = public
as $$ select app_role from public.profiles where id = auth.uid() and account_status = 'active' $$;

create or replace function public.has_staff_role(allowed_roles text[])
returns boolean language sql stable security definer set search_path = public
as $$ select coalesce(public.current_app_role() = any(allowed_roles), false) $$;

alter table public.profiles enable row level security;
alter table public.trustee_applications enable row level security;
alter table public.memberships enable row level security;
alter table public.bookings enable row level security;
alter table public.payment_transactions enable row level security;
alter table public.live_events enable row level security;
alter table public.audit_logs enable row level security;

-- Profiles: users can read/update only their own basic profile. Role changes are server/admin-only.
drop policy if exists profiles_read_self_or_staff on public.profiles;
create policy profiles_read_self_or_staff on public.profiles for select to authenticated
using (id = auth.uid() or public.has_staff_role(array['super_admin','trustee','membership_manager','finance_manager','puja_manager']));
drop policy if exists profiles_update_self_basic on public.profiles;
create policy profiles_update_self_basic on public.profiles for update to authenticated
using (id = auth.uid()) with check (id = auth.uid() and app_role = public.current_app_role() and account_status = 'active');

-- Applications: applicants can create/read their own; authorized staff can review.
drop policy if exists trustee_applications_insert_self on public.trustee_applications;
create policy trustee_applications_insert_self on public.trustee_applications for insert to authenticated
with check (user_id = auth.uid() and review_status = 'submitted' and payment_status = 'not_started');
drop policy if exists trustee_applications_read_self_or_staff on public.trustee_applications;
create policy trustee_applications_read_self_or_staff on public.trustee_applications for select to authenticated
using (user_id = auth.uid() or public.has_staff_role(array['super_admin','trustee','membership_manager','finance_manager']));
drop policy if exists trustee_applications_review_staff on public.trustee_applications;
create policy trustee_applications_review_staff on public.trustee_applications for update to authenticated
using (public.has_staff_role(array['super_admin','trustee','membership_manager']))
with check (public.has_staff_role(array['super_admin','trustee','membership_manager']));

-- Membership records: user reads own; membership staff manages approvals.
drop policy if exists memberships_read_self_or_staff on public.memberships;
create policy memberships_read_self_or_staff on public.memberships for select to authenticated
using (user_id = auth.uid() or public.has_staff_role(array['super_admin','trustee','membership_manager']));
drop policy if exists memberships_staff_manage on public.memberships;
create policy memberships_staff_manage on public.memberships for all to authenticated
using (public.has_staff_role(array['super_admin','trustee','membership_manager']))
with check (public.has_staff_role(array['super_admin','trustee','membership_manager']));

-- Booking: signed-in user may create/read their own bookings; privileged staff manages schedules.
drop policy if exists bookings_insert_self on public.bookings;
create policy bookings_insert_self on public.bookings for insert to authenticated
with check (user_id = auth.uid() and booking_status = 'pending' and payment_status in ('not_required','pending'));
drop policy if exists bookings_read_self_or_staff on public.bookings;
create policy bookings_read_self_or_staff on public.bookings for select to authenticated
using (user_id = auth.uid() or public.has_staff_role(array['super_admin','trustee','puja_manager','finance_manager']));
drop policy if exists bookings_staff_update on public.bookings;
create policy bookings_staff_update on public.bookings for update to authenticated
using (public.has_staff_role(array['super_admin','trustee','puja_manager','finance_manager']))
with check (public.has_staff_role(array['super_admin','trustee','puja_manager','finance_manager']));

-- Payments are deliberately not writable by normal browser clients. Verify/update via trusted server webhook.
drop policy if exists payments_read_self_or_finance on public.payment_transactions;
create policy payments_read_self_or_finance on public.payment_transactions for select to authenticated
using (user_id = auth.uid() or public.has_staff_role(array['super_admin','finance_manager']));

-- Published live events are public. Only authorized staff may manage events.
drop policy if exists live_events_public_read on public.live_events;
create policy live_events_public_read on public.live_events for select to anon, authenticated
using (is_published = true or public.has_staff_role(array['super_admin','trustee','puja_manager']));
drop policy if exists live_events_staff_manage on public.live_events;
create policy live_events_staff_manage on public.live_events for all to authenticated
using (public.has_staff_role(array['super_admin','trustee','puja_manager']))
with check (public.has_staff_role(array['super_admin','trustee','puja_manager']));

-- Audit logs are readable only by super-admins. Inserts should be made by trusted server code/service role.
drop policy if exists audit_logs_super_admin_read on public.audit_logs;
create policy audit_logs_super_admin_read on public.audit_logs for select to authenticated
using (public.has_staff_role(array['super_admin']));

-- Do not add a public INSERT policy for payment_transactions or audit_logs.
-- Provision the first super_admin out-of-band after verifying the trust's authorized representative.

-- Membership self-application: public users can only create a pending, unapproved record.
drop policy if exists memberships_insert_self_pending on public.memberships;
create policy memberships_insert_self_pending on public.memberships for insert to authenticated
with check (user_id = auth.uid() and status = 'pending' and approved_by is null and approved_at is null and membership_number is null and plan_code = 'general_free');

-- Avoid duplicate pending/active membership requests per account.
create unique index if not exists memberships_one_open_per_user_idx
on public.memberships(user_id) where status in ('pending','active');

-- Avoid duplicate open trustee applications from the same account.
create unique index if not exists trustee_one_open_application_idx
on public.trustee_applications(user_id) where review_status in ('submitted','under_review');

-- Prevent overlapping pending/confirmed appointments. All timestamps are stored as timestamptz.
create or replace function public.prevent_booking_overlap()
returns trigger language plpgsql set search_path = public
as $$
begin
  if new.booking_status in ('pending','confirmed') and exists (
    select 1 from public.bookings b
    where b.id <> coalesce(new.id, '00000000-0000-0000-0000-000000000000'::uuid)
      and b.booking_status in ('pending','confirmed')
      and tstzrange(b.starts_at, b.ends_at, '[)') && tstzrange(new.starts_at, new.ends_at, '[)')
  ) then
    raise exception 'This time slot is already requested or booked.' using errcode = '23P01';
  end if;
  return new;
end;
$$;
drop trigger if exists bookings_prevent_overlap on public.bookings;
create trigger bookings_prevent_overlap before insert or update of starts_at, ends_at, booking_status
on public.bookings for each row execute procedure public.prevent_booking_overlap();

-- Column-level privileges are defense in depth: browser clients cannot set privileged/payment fields.
revoke update on public.profiles from authenticated;
grant update (full_name, phone, avatar_url) on public.profiles to authenticated;

revoke insert on public.trustee_applications from authenticated;
grant insert (user_id, full_name, phone, email, address, statement) on public.trustee_applications to authenticated;
revoke update on public.trustee_applications from authenticated;
grant update (review_status, reviewed_by, reviewed_at, decision_note) on public.trustee_applications to authenticated;

revoke insert on public.memberships from authenticated;
grant insert (user_id, plan_code, status) on public.memberships to authenticated;
revoke update on public.memberships from authenticated;
grant update (status, approved_by, approved_at, starts_at, expires_at, membership_number) on public.memberships to authenticated;

revoke insert on public.bookings from authenticated;
grant insert (user_id, service_type, service_name, attendee_name, attendee_email, attendee_phone, starts_at, ends_at, timezone, meeting_provider, booking_status, payment_status, notes) on public.bookings to authenticated;
revoke update on public.bookings from authenticated;
grant update (booking_status, meeting_provider, meeting_url) on public.bookings to authenticated;

-- Annual/paid membership cannot be activated until a verified payment integration is added.
drop policy if exists memberships_staff_manage on public.memberships;
create policy memberships_staff_manage on public.memberships for all to authenticated
using (public.has_staff_role(array['super_admin','trustee','membership_manager']))
with check (public.has_staff_role(array['super_admin','trustee','membership_manager']) and (plan_code <> 'annual_paid' or status <> 'active'));

-- Restrict staff operations to the actions the UI actually supports; no browser-side hard deletes.
drop policy if exists memberships_staff_manage on public.memberships;
drop policy if exists memberships_staff_update on public.memberships;
create policy memberships_staff_update on public.memberships for update to authenticated
using (public.has_staff_role(array['super_admin','trustee','membership_manager']))
with check (public.has_staff_role(array['super_admin','trustee','membership_manager']) and (plan_code <> 'annual_paid' or status <> 'active'));

drop policy if exists live_events_staff_manage on public.live_events;
drop policy if exists live_events_staff_insert on public.live_events;
drop policy if exists live_events_staff_update on public.live_events;
create policy live_events_staff_insert on public.live_events for insert to authenticated
with check (public.has_staff_role(array['super_admin','trustee','puja_manager']));
create policy live_events_staff_update on public.live_events for update to authenticated
using (public.has_staff_role(array['super_admin','trustee','puja_manager']))
with check (public.has_staff_role(array['super_admin','trustee','puja_manager']));

revoke delete on public.profiles, public.trustee_applications, public.memberships, public.bookings, public.payment_transactions, public.live_events, public.audit_logs from authenticated;
revoke insert, update, delete on public.payment_transactions from authenticated;
revoke insert, update, delete on public.audit_logs from authenticated;
