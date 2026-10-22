# Yog Maya — Pradipanand Jagdamba Parivar Trust

Three-site platform on a single Next.js codebase, deployed via Cloudflare Pages.

- **yogmaya.net** — Yog Maya Ashram (main)
- **ayurveda.yogmaya.net** — Ayurvedic shop
- **meditate.yogmaya.net** — Meditation center

## Deploy (Cloudflare Pages)
- Build command: `npx @cloudflare/next-on-pages@1`
- Output dir: `.vercel/output/static`
- Env vars: `NODE_VERSION=20`, `NEXT_PUBLIC_SANITY_PROJECT_ID=placeholder`, `NEXT_PUBLIC_SANITY_DATASET=production`
- Compatibility flag: `nodejs_compat`
