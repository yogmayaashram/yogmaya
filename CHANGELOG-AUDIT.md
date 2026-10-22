# Changelog — updated portal implementation

## Added
- Supabase SSR auth helpers and session-refresh middleware integration.
- Signup, login, email callback, logout actions.
- Personal member dashboard.
- General membership request and separate trustee application forms.
- Appointment request workflow with India-time parsing and pending status.
- Role-gated admin overview, membership/application review, appointment management and Live Aarti Manager.
- Public `/live` database-driven event list and validated YouTube embed.
- Privacy and Terms starter pages; main navigation links to login, membership and booking.
- SQL grants/policies that prevent browser-side payment-state edits and protect role fields; duplicate application and overlapping booking guards.

## Remaining external setup
- Supabase project and email confirmation configuration.
- Trusted first-admin provisioning and assignment of the 8–10 authorized role accounts.
- Payment provider order/webhook/refund implementation and legal approval for the ₹5,000 amount.
- Google Calendar/Meet or Zoom API and notification delivery.
- YouTube live-state API integration if automatic detection is required.
- Production typecheck/build, RLS tests, accessibility/security tests and deployment preview.

## Follow-up audit fix
- Removed `requested_contribution_paise` from the trustee-application insert payload. The database column defaults to 500000 paise and is deliberately excluded from authenticated insert column grants; sending it from the browser client would cause permission-denied submissions.
- Re-ran TypeScript/TSX transpilation syntax checks across 46 source files: zero syntax diagnostics. This is not a substitute for `npm run typecheck` or `npm run build`.
