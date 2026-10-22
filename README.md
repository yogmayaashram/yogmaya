# Yog Maya Ashram — Pradipanand Jagdamba Parivar Trust

A Next.js App Router project for the Yog Maya Ashram public website and the first implementation of a member/staff portal.

## Included

- Existing public Ashram, Puja, Pashushala, Donation, Meditation and Ayurveda pages.
- Public `/live` page backed by published `live_events` records, with a validated YouTube embed.
- Supabase Auth sign-up, login, email callback and logout.
- Member dashboard at `/dashboard` showing a user's membership records, booking requests and trustee application status.
- General membership application at `/membership/apply`.
- Trustee/management application at `/membership/apply`. The requested ₹5,000 amount is recorded as a proposed contribution; this build intentionally does **not** take payment or automatically grant trustee status.
- Booking request form at `/booking`.
- Staff dashboard at `/admin`, member/application review at `/admin/members`, booking management at `/admin/bookings`, and Live Aarti Manager at `/admin/live`.
- Supabase SQL schema with role checks, Row Level Security policies, application/membership indexes and overlapping appointment protection.

## Important boundaries

This is an implementation baseline, not a claim that every external integration is production-ready. These parts require provider accounts, legal decisions, credentials and deployment testing:

- Real payment creation, signed webhook verification, refunds and accounting reconciliation.
- Automatic Google Calendar/Meet or Zoom meeting creation and email/SMS delivery. The admin can currently add an authorized meeting URL manually.
- Automatic YouTube stream-state detection. The Live Manager stores/publishes a YouTube video ID; it does not start the stream.
- Legally valid trustee appointment, eligibility checks and formal approval. Paying or applying never automatically makes a person a trustee or gives admin rights.
- Full cart/checkout for the Ayurveda catalogue.
- Cloudflare deployment of dynamic authenticated pages and server actions. Test the selected adapter/runtime in a preview environment before production.

## Local setup

Use a supported Node.js LTS version. From this repository root:

```bash
cp .env.example .env.local
npm install
npm run dev
```

Open `http://localhost:3000`.

Configure `.env.local` with a Supabase project you control:

```dotenv
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_SUPABASE_URL=https://YOUR_PROJECT.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=YOUR_SUPABASE_PUBLISHABLE_OR_ANON_KEY
```

Do not put service-role keys, payment secrets, Google OAuth refresh tokens or Zoom client secrets in any `NEXT_PUBLIC_*` variable. Never commit `.env.local`.

## Supabase setup

1. Create a Supabase project.
2. Open SQL Editor and run `supabase/schema.sql` on a **new/test project first**. If tables already exist, review migration conflicts before applying.
3. In Authentication → URL Configuration, add `http://localhost:3000/auth/callback` and your real production callback URL to the allowed redirect URLs.
4. Enable email confirmation as appropriate for the trust's policy.
5. Set the public Supabase URL and publishable/anon key in `.env.local` and hosting settings.
6. Register a test account and confirm that the trigger creates a `public_member` profile.
7. After the trust verifies its authorized representative, assign the first `super_admin` using Supabase SQL Editor. Replace the email with the verified account email; run only after that user has signed up:

```sql
update public.profiles p
set app_role = 'super_admin', updated_at = now()
from auth.users u
where p.id = u.id
  and lower(u.email) = lower('VERIFIED-TRUST-ADMIN-EMAIL');
```

8. Add the remaining 8–10 people only after identity and authorization checks. Give each only the role required for their work. Suggested roles: `trustee`, `membership_manager`, `finance_manager`, `puja_manager`, `public_member`.
9. Test access using separate normal-member and staff accounts. Never test RLS only as the project owner.

The SQL contains RLS policies. Review them with a security-aware developer before production. A public user must never be able to update their own `app_role`, mark their payment as paid, or publish a live event.

## Application routes

| Route | Purpose |
|---|---|
| `/auth/signup` | General account registration |
| `/auth/login` | Login |
| `/dashboard` | Personal member dashboard |
| `/membership/apply` | General membership and separate trustee application |
| `/booking` | Appointment/puja request |
| `/admin` | Authorized staff overview |
| `/admin/members` | Applications, memberships and profile review |
| `/admin/bookings` | Booking review and manual meeting URL entry |
| `/admin/live` | Publish/unpublish YouTube events |
| `/live` | Public live stream and event listing |

## Verification before release

```bash
npm run typecheck
npm run build
```

Also manually verify: signup/email callback, login/logout, RLS isolation, staff-only routes, duplicate applications, booking time overlap, live event publication, broken links, mobile layouts, metadata, backups, privacy notice and account deletion workflow. Build/deploy results depend on the runtime and configuration; do not publish until both commands pass in the target environment.

## Payment / meeting provider integration plan

For payments, use a supported Indian payment provider with server-side order creation and signature-verified webhooks. Store only the minimum provider IDs/status in `payment_transactions`; never trust a browser redirect as proof of payment. Do not activate a ₹5,000 charge until the trust approves its legal character, refund rules, receipt format and accounting treatment.

For Google Meet, use Google Calendar API OAuth with least-privilege scopes and create a Calendar event with conference data. For Zoom, use an authorized server-side OAuth app and the Meetings API. Meeting URLs must be sent only to the intended booking account. Store secrets in server-only hosting variables. For YouTube, the Live Manager currently accepts a video ID, not a stream key; never put YouTube stream keys in this app or client-side environment variables.
