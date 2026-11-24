# Internal Linking Strategy — navnitrai.in

## 1. Strategic Objectives

1. **Zero Keyword Cannibalization:** Every URL owns one primary search intent. Commercial service queries target national `/services/[slug]` pages; city-modified local queries target `/locations/[city]` pages; comparison and educational queries target `/blog/[slug]` pages.
2. **Authority Flow (Hub-and-Spoke Topology):** Distribute internal equity from the highest-linked pages (`/`, `/services`, `/locations`) down to specialized service pages, the 4 city hub pages, and conversion endpoints (`/contact`).
3. **Conversion Path Compression:** Every informational or mid-funnel page must offer a clear next step within 1–2 clicks to `/contact`, WhatsApp (`Discuss Your Project on WhatsApp`), or click-to-call without forcing users through dead ends.
4. **Descriptive, Non-Spammy Anchor Text:** Vary natural descriptive anchor phrases (e.g., "Next.js development services", "website developer in Lucknow", "e-commerce storefront architecture") rather than repeating identical exact-match keyword anchors on every block.

---

## 2. Site Hierarchy & Link Depth

All indexable URLs are reachable within **at most 3 clicks** from the homepage (`/`):

- **Depth 0:** `/` (Home)
- **Depth 1 (Primary Header / Footer Navigation):**
  - `/services`
  - `/locations`
  - `/portfolio`
  - `/case-studies`
  - `/about`
  - `/blog`
  - `/faq`
  - `/contact`
- **Depth 2 (Direct Spokes):**
  - `/services/*` (All 14 service pages linked from `/services` AND major clusters linked from `/`)
  - `/locations/lucknow`, `/locations/gorakhpur`, `/locations/kanpur`, `/locations/faridabad` (Linked from `/locations`, `/`, and Footer)
  - `/case-studies/*` (Linked from `/case-studies` and `/portfolio`)
  - `/blog/*` (Linked from `/blog`)
  - `/privacy-policy`, `/terms-and-conditions`, `/refund-policy`, `/disclaimer` (Linked in Footer)

---

## 3. Contextual Cross-Linking Matrix

### A. Homepage (`/`) -> Spokes
- Links to top service categories and the full `/services` hub.
- Links directly to all 4 target city hubs:
  - `/locations/lucknow`
  - `/locations/gorakhpur`
  - `/locations/kanpur`
  - `/locations/faridabad`
- Links to featured `/case-studies/*`, `/portfolio`, `/about`, and `/contact`.

### B. City Location Pages (`/locations/[city]`) <-> Service Pages (`/services/[slug]`)
City pages capture local modifiers (`lucknow ecommerce website developer`, `kanpur website redesign`, `faridabad business website developer`, `gorakhpur next js developer`) WITHOUT spawning thin `city × service` doorway URLs.
Each city page:
- Contains localized service sections for Business Websites, E-commerce, Custom React/Next.js Apps, Redesign, Maintenance, and Local SEO.
- Links contextually from each section to the matching canonical national service page:
  - Business section -> `/services/business-website-development`
  - E-commerce section -> `/services/ecommerce-website-development`
  - React / Next.js / Web App section -> `/services/nextjs-development`, `/services/react-development`, `/services/web-application-development`
  - Redesign & Maintenance section -> `/services/website-redesign`, `/services/website-maintenance-management`
  - Speed & Local SEO section -> `/services/website-speed-optimization`, `/services/seo-friendly-website-development`
- Cross-links cleanly to the other 3 city hubs in a subtle "Other Service Locations in India" strip (horizontal discovery without keyword stuffing).

### C. Service Pages (`/services/[slug]`) <-> Related Services & Proof
Each of the 14 service pages includes:
1. **Breadcrumb Navigation:** `Home > Services > [Service Name]` (`BreadcrumbList` JSON-LD).
2. **Upward Hub Link:** Back to `/services`.
3. **3–4 Lateral Related Services:**
   - e.g. `/services/website-development` -> Business Website, Custom Website, Full-Stack, SEO-Friendly Development
   - e.g. `/services/nextjs-development` -> React.js Development, Full-Stack Development, Speed Optimization, SEO-Friendly Development
   - e.g. `/services/ecommerce-website-development` -> Custom Website, Speed Optimization, Website Maintenance, Landing Page Development
   - e.g. `/services/website-redesign` -> Speed Optimization, SEO-Friendly Development, Landing Page Development, Website Maintenance
4. **Relevant Case Study / Portfolio Link:** Links to `/case-studies/[relevant-slug]` or `/portfolio`.
5. **Regional Availability Strip:** Links to `/locations/lucknow`, `/locations/gorakhpur`, `/locations/kanpur`, `/locations/faridabad` for local clients.
6. **Relevant Blog Guide:** Links to the matching educational article (e.g., `/blog/nextjs-vs-wordpress-indian-business-websites`, `/blog/website-redesign-without-losing-seo-rankings`).

### D. Blog Posts (`/blog/[slug]`) -> Commercial Service & Location Pages
Blog posts absorb informational and comparison intent so commercial pages stay laser-focused on hiring/enquiry intent:
- `freelance-web-developer-vs-agency-india` -> Links to `/about`, `/contact`, `/locations/lucknow`, `/locations/kanpur`, `/locations/faridabad`, `/locations/gorakhpur`.
- `website-development-cost-india-2026` -> Links to `/services/business-website-development`, `/services/ecommerce-website-development`, `/services/custom-website-development`, `/contact`.
- `nextjs-vs-wordpress-indian-business-websites` -> Links to `/services/nextjs-development`, `/services/website-speed-optimization`, `/services/website-maintenance-management`, `/locations/lucknow`, `/locations/gorakhpur`.
- `seo-checklist-for-local-business-websites-india` -> Links to `/services/seo-friendly-website-development`, `/locations/lucknow`, `/locations/gorakhpur`, `/locations/kanpur`, `/locations/faridabad`.
- `how-to-choose-ecommerce-platform-india` -> Links to `/services/ecommerce-website-development`, `/services/custom-website-development`, `/case-studies/d2c-nextjs-ecommerce-storefront`.
- `website-redesign-without-losing-seo-rankings` -> Links to `/services/website-redesign`, `/services/seo-friendly-website-development`, `/services/website-speed-optimization`.

---

## 4. Navigation & Crawl Hygiene Rules

- **Header Navigation:** Keep primary header focused (Services, Locations, Portfolio, Case Studies, Blog, About, Contact + Primary WhatsApp/Consultation CTA) — no bloated 30-link mega-menus diluting equity.
- **Footer Navigation:** Organized into 4 clean columns:
  1. Core Pages (Home, About, Portfolio, Case Studies, Blog, FAQ, Contact)
  2. Top Services (links to core service clusters + `/services` full directory)
  3. Service Locations (Lucknow, Gorakhpur, Kanpur, Faridabad, All Locations)
  4. Legal & Direct Contact (Privacy Policy, Terms, Refund Policy, Disclaimer, Phone, Email, WhatsApp)
- **Canonical & Indexation Hygiene:**
  - Every indexable route emits an exact self-referencing canonical URL (`https://navnitrai.in/...` with no trailing slash mismatch).
  - `/api/*` routes are disallowed in `robots.txt` and excluded from `sitemap.xml`.
  - No duplicate URLs with query-string variants indexed (`?utm_*` or filter states keep base self-referencing canonical).
