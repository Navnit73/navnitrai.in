# Technical Audit Report — navnitrai.in

**Stack:** Next.js `16.4.6` (App Router, Turbopack, Cache Components + Partial Prefetching enabled), React `19.3.0`, TypeScript `^5`, Tailwind CSS `4.3.3`, Zod, Lucide React.

---

## 1. Build, Type Safety & Lint Verification

| Check | Command | Result |
| :--- | :--- | :--- |
| **TypeScript Check** | `npx tsc --noEmit` | **Passed (0 errors)** |
| **ESLint Check** | `npm run lint` | **Passed (0 errors, 0 warnings)** |
| **Production Build** | `npm run build` | **Passed** — 51 static/prerendered route entries compiled in ~0.8s |

---

## 2. Security, Headers & Contact Form Verification

- **HTTP Security Headers (`next.config.ts`):**
  - `poweredByHeader: false`
  - `X-Content-Type-Options: nosniff`
  - `X-Frame-Options: SAMEORIGIN`
  - `Referrer-Policy: strict-origin-when-cross-origin`
  - `Permissions-Policy: camera=(), microphone=(), geolocation=()`
- **Contact Form & API (`/api/contact`):** Verified live against production `next start`:
  - **Valid submission (`POST /api/contact`):** Returned `HTTP 201` with generated reference ID (`NR-...`).
  - **Invalid payload (`POST /api/contact`):** Returned `HTTP 400` with human-readable Zod validation message.
  - **Honeypot spam protection (`website_url` non-empty):** Returned `HTTP 200` silent accept (`ACCEPTED`) without forwarding/logging real enquiry.
  - **Bot latency guard & rate limiting:** Rejects sub-1.2s automated fills (`400`) and enforces sliding-window per-IP rate limiting (`429`).
  - **Forwarding integration:** Ready for `CONTACT_WEBHOOK_URL` and/or `RESEND_API_KEY` + `CONTACT_TO_EMAIL` via `.env.local`.

---

## 3. UI/UX Theme, Performance & Accessibility Verification

- **Theme Rules Audit (Automated scan across `src/`):**
  - **0 instances** of `bg-gradient-*`, `linear-gradient`, `radial-gradient`, `backdrop-blur`, or elevation shadow classes (`shadow-sm` through `shadow-2xl`).
  - Strictly flat White (`#FFFFFF`), Neutral Grey (`#F5F5F4`), Black (`#0A0A0A`), and Amber (`#F59E0B` fill with `#0A0A0A` ink; `#B45309` / `#92400E` text on light backgrounds for WCAG 2.2 AA contrast).
- **Accessibility Implementation:**
  - Skip-to-main-content link (`.skip-link`) in root layout (`src/app/layout.tsx`).
  - Single `<main id="main-content">` landmark, `<nav aria-label="Breadcrumb">`, `<nav aria-label="Primary Navigation">`.
  - Visible 2px `:focus-visible` outlines across light and `.dark-surface` blocks.
  - Interactive FAQ accordions use native `<button>` elements with `aria-expanded`, `aria-controls`, and `role="region"`.
  - Form inputs include explicit `<label htmlFor>`, `required`, `autoComplete`, `role="alert"` errors, and `role="status"` confirmation state.
  - Buttons and menu toggles enforce `min-h-10` / `min-h-11` / `min-h-12` (>= 40–48px touch targets).

---

## 4. Verification Scope & Limitations

- **Live Browser DevTools Audit:** Attempted automated Chromium DevTools inspection against `http://localhost:3108`, but Google Chrome remote debugging (`DevToolsActivePort`) was unavailable in the local environment (`ENOENT`). Therefore:
  - Visual screenshot rendering, interactive click testing inside Chromium, and runtime Lighthouse Core Web Vitals scores were **not** measured in a live browser in this session.
  - All route responses (40 pages, `/sitemap.xml`, `/robots.txt`, `/opengraph-image`, `/icon`, `/api/contact`), HTML semantics, JSON-LD parsing, link resolution, TypeScript, ESLint, and production Next.js compilation were directly executed and verified passing after the final edit.

---

## 5. Pre-Production Checklist Before Deploying to `navnitrai.in`

1. Copy `.env.example` to `.env.local` (or set environment variables in hosting dashboard) with real phone, WhatsApp number, email, `NEXT_PUBLIC_GA_MEASUREMENT_ID`, and `RESEND_API_KEY` / `CONTACT_WEBHOOK_URL`.
2. Replace reference architecture notices and placeholder metric notes in `src/data/projects.ts` and `src/app/about/page.tsx` once real client permissions/metrics are added.
3. Run Lighthouse / PageSpeed Insights in Chrome on deployed staging URLs across mobile and desktop.
