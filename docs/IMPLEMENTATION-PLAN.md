# Implementation plan and acceptance checklist

## Phase 1 — Base platform
- [x] Preserve the existing public website pages.
- [x] Add Supabase SSR client helpers and Auth pages/actions.
- [x] Add personal dashboard, membership request, trustee application and booking request.
- [x] Add role-gated staff pages for member/application review, booking management and live events.
- [x] Add database RLS policies and booking overlap guard.
- [ ] Install dependencies and pass TypeScript + production build in a network-enabled environment.
- [ ] Run SQL on a disposable Supabase project and test each RLS policy with separate accounts.

## Phase 2 — Trust governance
- [ ] Have the trust's legal/finance representative approve membership categories, ₹5,000 fee/contribution wording, eligibility, refund policy and trustee appointment process.
- [ ] Verify identity and authority of the initial 8–10 office holders.
- [ ] Create role/permission matrix and map each person to least privilege.
- [ ] Decide whether trustee applications are reviewed by a committee and record decision notes/minutes.
- [ ] Add a controlled invitation flow for staff accounts; never allow public signup to choose a privileged role.
- [ ] Add immutable audit records for all role, payment, application and booking changes.

## Phase 3 — Payments
- [ ] Select payment provider after checking trust eligibility, fees, settlement, receipts and refund support.
- [ ] Implement server-side order creation with idempotency.
- [ ] Verify webhook signature server-side; reject replayed/invalid events.
- [ ] Update payment and related membership/application state only from verified webhook or audited finance action.
- [ ] Reconcile daily transactions and refunds; restrict finance records to finance roles.
- [ ] Do not activate payment until test mode and refund scenarios pass.

## Phase 4 — Scheduling and live events
- [ ] Decide staff calendars, appointment duration, buffers, holidays and cancellation windows.
- [ ] Add Google Calendar/Meet or Zoom API OAuth on server-side runtime.
- [ ] Prevent double booking atomically and handle API failures/retries.
- [ ] Send booking confirmation/reminder/cancellation messages through a selected provider.
- [ ] Add YouTube Live API status polling only if automatic status detection is required; keep stream keys private.
- [ ] Verify the public live embed and recordings on mobile and low-bandwidth connections.

## Phase 5 — Security, accessibility and launch
- [ ] Review RLS and SQL grants with a security-aware developer.
- [ ] Add rate limits and abuse protection to signup, booking and forms.
- [ ] Add privacy notice, terms, consent, retention/deletion process and contact details.
- [ ] Add error monitoring, backup/restore drill, uptime monitoring and incident contact.
- [ ] Test keyboard navigation, contrast, forms, responsive layouts and screen-reader labels.
- [ ] Check canonical URLs, sitemap, robots, Open Graph and structured data.
- [ ] Verify Cloudflare/Next.js runtime compatibility for dynamic routes and server actions in preview before production.

## Role intent
- `super_admin`: trusted top-level configuration and emergency control.
- `trustee`: committee/approved governance access, only as permitted by trust policy.
- `membership_manager`: membership and trustee application review.
- `finance_manager`: payment/finance views and reconciliation.
- `puja_manager`: booking/live-event operations.
- `public_member`: own profile, own membership and own booking records.

A role is a software permission, not proof of legal trustee status. The legal appointment process remains separate.
