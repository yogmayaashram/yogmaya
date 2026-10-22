# Yog Maya Ashram — updated repository status

## Implemented in this repository
- Added Supabase Auth sign-up/login/callback/logout pages and server actions.
- Added personal dashboard querying the signed-in user's own memberships, bookings and trustee applications.
- Added general membership and separate trustee application forms.
- Fixed trustee application submission to use the database default for the proposed ₹5,000 contribution; the authenticated insert grant intentionally excludes that privileged column.
- Added booking request form with validation and pending status.
- Added role-gated staff dashboard, application/membership review, booking management and live event management.
- Added database policy for pending membership self-application, indexes preventing duplicate open applications and a trigger to reject overlapping pending/confirmed bookings.
- Updated public live page to list published database events and embed a validated YouTube ID.
- Expanded README and implementation plan with setup and release requirements.

## Not yet verified
- No production Supabase credentials were provided; no real hosted project was connected.
- A TypeScript/TSX transpilation syntax check passed for 46 files with zero syntax diagnostics. Full `npm install` timed out in this environment, so the actual typecheck and production build have not yet been verified.
- Google Meet/Zoom API automation, payment gateway/webhooks, email/SMS delivery and automatic YouTube stream-state detection are not fully implemented.
- Existing Next.js/Cloudflare adapter compatibility must be tested in a real preview environment before production.
- The ₹5,000 figure is application metadata only; no payment is collected by this code.

## Release blockers
1. Run SQL in a test Supabase project and test all RLS policies with normal-member and staff accounts.
2. Configure auth redirect URLs and verified initial administrator.
3. Confirm legal terms and approval flow with the trust's authorized representative.
4. Run `npm install`, `npm run typecheck`, and `npm run build` successfully.
5. Complete provider integrations and security review before enabling payment or automated meeting creation.
