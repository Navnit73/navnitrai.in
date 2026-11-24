import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Check,
  Clock,
  MapPin,
  MessageSquare,
  Smartphone,
  UserRound,
  KeyRound,
  X,
} from "lucide-react";
import { siteConfig } from "@/config/site";
import { buildPageMetadata } from "@/lib/seo";
import { getTelUrl, getWhatsAppUrl } from "@/lib/utils";
import { locationsData } from "@/data/locations";
import { portfolioItems } from "@/data/projects";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { Accordion } from "@/components/ui/accordion";
import { CtaBanner } from "@/components/cta/CtaBanner";
import {
  TrackedExternalLink,
  TrackedRouteLink,
} from "@/components/cta/TrackedLink";

export const metadata: Metadata = buildPageMetadata({
  title: "Navnit Rai | Freelance Web Developer in India (Next.js & Full-Stack)",
  description:
    "Hire Navnit Rai — independent freelance web developer in India building fast, SEO-ready Next.js business websites, e-commerce stores, and custom web apps across Lucknow, Gorakhpur, Kanpur, Faridabad & pan-India.",
  path: "/",
  keywords: [
    "freelance web developer india",
    "independent full stack developer india",
    "next.js freelance developer",
    "website developer lucknow gorakhpur kanpur faridabad",
  ],
});

/* ------------------------------------------------------------------ */
/* Content — written in plain language for business owners             */
/* ------------------------------------------------------------------ */

const packages = [
  {
    name: "Landing Page",
    price: "Under ₹25,000",
    time: "4–7 days",
    goodFor: "Running Google or Facebook ads, or launching one product or offer.",
    includes: [
      "One focused page that gets enquiries",
      "WhatsApp, call and enquiry form buttons",
      "Works fast on mobile",
    ],
    href: "/services/landing-page-development",
    popular: false,
  },
  {
    name: "Business Website",
    price: "₹25,000 – ₹60,000",
    time: "2–3 weeks",
    goodFor: "Shops, clinics, schools, coaching centres, factories and service businesses.",
    includes: [
      "Home, About, Services, Contact and FAQ pages",
      "Set up to show on Google search",
      "WhatsApp, call and enquiry form buttons",
    ],
    href: "/services/business-website-development",
    popular: true,
  },
  {
    name: "Online Store",
    price: "₹60,000 – ₹1,50,000",
    time: "4–8 weeks",
    goodFor: "Selling products online with UPI, cards and cash on delivery.",
    includes: [
      "Product pages, cart and checkout",
      "Razorpay / UPI payments",
      "Shipping and GST details",
    ],
    href: "/services/ecommerce-website-development",
    popular: false,
  },
  {
    name: "Custom Web App",
    price: "₹1,50,000+",
    time: "Depends on features",
    goodFor: "Booking systems, dashboards, customer portals or a startup product.",
    includes: [
      "Logins for staff and customers",
      "Admin panel to manage your data",
      "Built to grow with your business",
    ],
    href: "/services/web-application-development",
    popular: false,
  },
];

const reasons = [
  {
    icon: UserRound,
    title: "You talk to me directly",
    text: "No sales team, no middleman. The person you message on WhatsApp is the person building your website.",
  },
  {
    icon: Smartphone,
    title: "Fast on mobile phones",
    text: "Most of your customers visit on their phone. Your site opens quickly even on slow 4G, so they don't leave.",
  },
  {
    icon: KeyRound,
    title: "You own everything",
    text: "Your domain, hosting and website code are in your name. No lock-in, no hidden yearly fees from me.",
  },
  {
    icon: Clock,
    title: "Clear price and timeline",
    text: "You get a fixed scope and price before we start, and you see your site being built step by step.",
  },
];

const comparison = [
  { label: "Talk directly to the developer", me: true, agency: false, cheap: false },
  { label: "Designed for your business (no copy-paste template)", me: true, agency: true, cheap: false },
  { label: "Fast on mobile and set up for Google", me: true, agency: true, cheap: false },
  { label: "You own the code and domain", me: true, agency: false, cheap: false },
  { label: "Fair, transparent pricing", me: true, agency: false, cheap: true },
];

const steps = [
  {
    num: "1",
    title: "Tell me what you need",
    text: "Send a WhatsApp message or fill the form. A short chat is enough — no technical knowledge needed.",
  },
  {
    num: "2",
    title: "Get a clear quote",
    text: "I send you the pages, features, price and delivery date in writing. Nothing hidden.",
  },
  {
    num: "3",
    title: "See it being built",
    text: "You get a preview link to check your website as it's built and ask for changes.",
  },
  {
    num: "4",
    title: "Go live",
    text: "Your site goes live, and I hand over all logins and files. Help is available after launch too.",
  },
];

/** Plain-language summaries for the sample projects shown on the homepage. */
const plainProjectSummaries: Record<string, string> = {
  "ref-b2b-catalog":
    "For manufacturers and suppliers: a product catalogue buyers can search, with a one-click “Request a Quote” on WhatsApp.",
  "ref-d2c-store":
    "For brands selling online: a fast mobile store with UPI checkout, so shoppers don't give up halfway.",
  "ref-clinic-portal":
    "For clinics and diagnostic centres: doctor and department pages with easy appointment booking by WhatsApp or call.",
};

const homeFaqs = [
  {
    question: "How much does a website cost?",
    answer:
      "A single landing page is under ₹25,000. A complete business website is usually ₹25,000–₹60,000. Online stores and custom web apps start from ₹60,000. You get an exact quote in writing before any work starts.",
  },
  {
    question: "How long will it take?",
    answer:
      "A landing page takes 4–7 days, a business website 2–3 weeks, and an online store or web app 4–8 weeks. Having your text and photos ready makes it faster.",
  },
  {
    question: "I'm not technical. Is that a problem?",
    answer:
      "Not at all. Just tell me about your business and your customers. I'll explain everything in simple words and handle all the technical work.",
  },
  {
    question: "How do payments work?",
    answer:
      "In parts: a booking amount to start, one payment when you approve the preview, and the final payment before your site goes live.",
  },
  {
    question: "What happens after my website goes live?",
    answer:
      "You own everything. If you want, I can keep it updated, backed up and add new pages through a simple maintenance plan.",
  },
  {
    question: "Do you only work in Lucknow, Gorakhpur, Kanpur and Faridabad?",
    answer:
      "No. I'm based in Uttar Pradesh and work with businesses across India. Everything can be done over WhatsApp, phone and video calls.",
  },
];

/* ------------------------------------------------------------------ */

export default function HomePage() {
  const sampleProjects = portfolioItems.slice(0, 3);

  return (
    <>
      {/* 1. Hero — what I do, for whom, and how to start */}
      <section className="border-b-2 border-[#0A0A0A] bg-white">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-7">
              <Badge variant="amber">
                <span className="inline-block h-2 w-2 bg-green-600" aria-hidden="true" />
                {siteConfig.availability}
              </Badge>

              <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-[#0A0A0A] sm:text-5xl lg:text-6xl lg:leading-[1.08]">
                I build websites that{" "}
                <span className="bg-[#FEF3C7] px-1.5 underline decoration-[#F59E0B] decoration-4 underline-offset-4">
                  bring you customers
                </span>
              </h1>

              <p className="mt-6 max-w-xl text-lg leading-relaxed text-neutral-700">
                Hi, I&apos;m Navnit — a freelance web developer from India. I make
                fast, mobile-friendly websites and online stores that show up on
                Google and turn visitors into calls, WhatsApp messages and orders.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <TrackedExternalLink
                  href={getWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  eventName="whatsapp_click"
                  payload={{ source: "home_hero" }}
                  className={buttonVariants({ variant: "primary", size: "lg" })}
                >
                  <MessageSquare aria-hidden="true" className="h-5 w-5" />
                  <span>Chat on WhatsApp</span>
                </TrackedExternalLink>

                <a
                  href="#pricing"
                  className={buttonVariants({ variant: "outline", size: "lg" })}
                >
                  <span>See Prices</span>
                  <ArrowRight aria-hidden="true" className="h-4 w-4" />
                </a>
              </div>

              <p className="mt-4 text-sm text-neutral-600">
                Free first chat · No obligation · {siteConfig.contact.responseWindow.toLowerCase()}
              </p>
            </div>

            {/* What you get — at a glance */}
            <aside className="border-2 border-[#0A0A0A] bg-neutral-50 p-6 sm:p-8 lg:col-span-5">
              <p className="text-sm font-bold uppercase tracking-wider text-[#B45309]">
                Every website includes
              </p>
              <ul className="mt-5 space-y-3.5 text-base">
                {[
                  "Custom design for your business",
                  "Works perfectly on mobile phones",
                  "WhatsApp, call and enquiry buttons",
                  "Set up to be found on Google",
                  "Domain, hosting and code in your name",
                  "Preview link to check progress",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <Check aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-[#B45309]" />
                    <span className="font-medium text-[#0A0A0A]">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6 border-t border-neutral-300 pt-4 text-sm text-neutral-700">
                Prefer to talk?{" "}
                <TrackedExternalLink
                  href={getTelUrl()}
                  eventName="phone_call_click"
                  payload={{ source: "home_hero_card" }}
                  className="font-bold text-[#0A0A0A] underline decoration-[#F59E0B] decoration-2 underline-offset-4 hover:text-[#B45309]"
                >
                  Call {siteConfig.contact.phoneDisplay}
                </TrackedExternalLink>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* 2. Packages & prices */}
      <section id="pricing" className="scroll-mt-20 border-b border-neutral-300 bg-neutral-50">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-sm font-bold uppercase tracking-wider text-[#B45309]">
              What I can build for you
            </p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-[#0A0A0A]">
              Pick what fits your business
            </h2>
            <p className="mt-3 text-base text-neutral-700">
              Simple packages with honest price ranges. Not sure which one you
              need? Message me and I&apos;ll suggest the right one.
            </p>
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {packages.map((pkg) => (
              <article
                key={pkg.name}
                className={`relative flex flex-col border bg-white p-6 ${
                  pkg.popular ? "border-2 border-[#0A0A0A]" : "border-neutral-300"
                }`}
              >
                {pkg.popular && (
                  <Badge variant="amberSolid" className="absolute -top-3 left-6">
                    Most popular
                  </Badge>
                )}
                <h3 className="text-xl font-bold text-[#0A0A0A]">{pkg.name}</h3>
                <p className="mt-3 text-2xl font-extrabold text-[#0A0A0A]">{pkg.price}</p>
                <p className="mt-1 inline-flex items-center gap-1.5 text-sm text-neutral-600">
                  <Clock aria-hidden="true" className="h-4 w-4" />
                  {pkg.time}
                </p>
                <p className="mt-4 text-sm leading-relaxed text-neutral-700">
                  <span className="font-semibold text-[#0A0A0A]">Good for: </span>
                  {pkg.goodFor}
                </p>
                <ul className="mt-4 space-y-2 text-sm">
                  {pkg.includes.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <Check aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0 text-[#B45309]" />
                      <span className="text-neutral-800">{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-auto pt-6">
                  <TrackedExternalLink
                    href={getWhatsAppUrl(
                      `Hi Navnit, I visited navnitrai.in and I'm interested in a ${pkg.name}. Can we discuss?`
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    eventName="whatsapp_click"
                    payload={{ source: "home_pricing", service: pkg.name }}
                    className={`${buttonVariants({
                      variant: pkg.popular ? "primary" : "secondary",
                      size: "md",
                    })} w-full`}
                  >
                    <MessageSquare aria-hidden="true" className="h-4 w-4" />
                    <span>Ask about this</span>
                  </TrackedExternalLink>
                  <Link
                    href={pkg.href}
                    className="mt-3 block text-center text-sm font-semibold text-neutral-700 underline-offset-4 hover:text-[#B45309] hover:underline"
                  >
                    More details
                  </Link>
                </div>
              </article>
            ))}
          </div>

          <p className="mt-8 text-sm text-neutral-700">
            Already have a website? I also do{" "}
            <Link href="/services/website-redesign" className="font-semibold text-[#0A0A0A] underline decoration-[#F59E0B] decoration-2 underline-offset-4 hover:text-[#B45309]">
              redesigns
            </Link>
            ,{" "}
            <Link href="/services/website-speed-optimization" className="font-semibold text-[#0A0A0A] underline decoration-[#F59E0B] decoration-2 underline-offset-4 hover:text-[#B45309]">
              speed fixes
            </Link>{" "}
            and{" "}
            <Link href="/services/website-maintenance-management" className="font-semibold text-[#0A0A0A] underline decoration-[#F59E0B] decoration-2 underline-offset-4 hover:text-[#B45309]">
              monthly maintenance
            </Link>
            .{" "}
            <Link href="/services" className="font-semibold text-[#0A0A0A] underline decoration-[#F59E0B] decoration-2 underline-offset-4 hover:text-[#B45309]">
              See all services →
            </Link>
          </p>
        </div>
      </section>

      {/* 3. Why work with me */}
      <section className="border-b border-neutral-300 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-sm font-bold uppercase tracking-wider text-[#B45309]">
              Why work with me
            </p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-[#0A0A0A]">
              The quality of an agency, without the agency hassle
            </h2>
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {reasons.map(({ icon: Icon, title, text }) => (
              <div key={title} className="border border-neutral-300 bg-white p-6">
                <span className="inline-flex h-11 w-11 items-center justify-center border border-[#0A0A0A] bg-[#FEF3C7]">
                  <Icon aria-hidden="true" className="h-5 w-5 text-[#0A0A0A]" />
                </span>
                <h3 className="mt-4 text-lg font-bold text-[#0A0A0A]">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-neutral-700">{text}</p>
              </div>
            ))}
          </div>

          {/* Simple comparison */}
          <div className="mt-12 overflow-x-auto border border-[#0A0A0A]">
            <table className="w-full min-w-[560px] text-left text-sm">
              <caption className="sr-only">
                Comparison of hiring Navnit Rai, a web agency, or a cheap template seller
              </caption>
              <thead className="bg-[#0A0A0A] text-white">
                <tr>
                  <th scope="col" className="p-4 font-semibold"></th>
                  <th scope="col" className="bg-[#F59E0B] p-4 text-center font-bold text-[#0A0A0A]">
                    Navnit Rai
                  </th>
                  <th scope="col" className="p-4 text-center font-semibold">Web agency</th>
                  <th scope="col" className="p-4 text-center font-semibold">Cheap template</th>
                </tr>
              </thead>
              <tbody>
                {comparison.map((row) => (
                  <tr key={row.label} className="border-t border-neutral-200">
                    <th scope="row" className="p-4 font-medium text-[#0A0A0A]">
                      {row.label}
                    </th>
                    {[row.me, row.agency, row.cheap].map((yes, i) => (
                      <td
                        key={i}
                        className={`p-4 text-center ${i === 0 ? "bg-[#FEF3C7]" : ""}`}
                      >
                        {yes ? (
                          <Check aria-label="Yes" className="mx-auto h-5 w-5 text-green-700" />
                        ) : (
                          <X aria-label="No" className="mx-auto h-5 w-5 text-neutral-400" />
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 4. How it works */}
      <section className="dark-surface border-b-2 border-[#0A0A0A] bg-[#0A0A0A] text-white">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-sm font-bold uppercase tracking-wider text-[#F59E0B]">
              How it works
            </p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight">
              From first message to live website in 4 easy steps
            </h2>
          </div>

          <ol className="mt-10 grid gap-px border border-neutral-800 bg-neutral-800 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step) => (
              <li key={step.num} className="bg-[#0A0A0A] p-6">
                <span className="inline-flex h-10 w-10 items-center justify-center bg-[#F59E0B] text-lg font-extrabold text-[#0A0A0A]">
                  {step.num}
                </span>
                <h3 className="mt-4 text-lg font-bold">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-neutral-300">{step.text}</p>
              </li>
            ))}
          </ol>

          <div className="mt-10">
            <TrackedExternalLink
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              eventName="whatsapp_click"
              payload={{ source: "home_steps" }}
              className={buttonVariants({ variant: "primary", size: "lg" })}
            >
              <MessageSquare aria-hidden="true" className="h-5 w-5" />
              <span>Start with Step 1 — Message Me</span>
            </TrackedExternalLink>
          </div>
        </div>
      </section>

      {/* 5. Sample projects */}
      <section className="border-b border-neutral-300 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div className="max-w-2xl">
              <p className="text-sm font-bold uppercase tracking-wider text-[#B45309]">
                Sample projects
              </p>
              <h2 className="mt-2 text-3xl font-bold tracking-tight text-[#0A0A0A]">
                Examples of what I can build
              </h2>
              <p className="mt-3 text-base text-neutral-700">
                Sample builds showing how I&apos;d solve common business problems.
              </p>
            </div>
            <Link
              href="/portfolio"
              className={buttonVariants({ variant: "outline", size: "md" })}
            >
              <span>See all work</span>
              <ArrowRight aria-hidden="true" className="h-4 w-4" />
            </Link>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {sampleProjects.map((item) => (
              <article
                key={item.id}
                className="flex flex-col border border-neutral-300 bg-neutral-50 p-6"
              >
                <Badge variant="amber" className="self-start">
                  {item.category}
                </Badge>
                <h3 className="mt-4 text-lg font-bold text-[#0A0A0A]">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-neutral-700">
                  {plainProjectSummaries[item.id] ?? item.summary}
                </p>
                {item.caseStudySlug && (
                  <Link
                    href={`/case-studies/${item.caseStudySlug}`}
                    className="mt-auto inline-flex items-center gap-1.5 pt-6 text-sm font-bold text-[#0A0A0A] hover:text-[#B45309]"
                  >
                    <span>See how it works</span>
                    <ArrowRight aria-hidden="true" className="h-4 w-4" />
                  </Link>
                )}
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Cities */}
      <section className="border-b border-neutral-300 bg-neutral-50">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <h2 className="text-2xl font-bold tracking-tight text-[#0A0A0A]">
                Working with businesses across India
              </h2>
              <p className="mt-2 text-base text-neutral-700">
                Local support in these cities, and online everywhere else.
              </p>
            </div>
            <ul className="flex flex-wrap gap-3">
              {locationsData.map((loc) => (
                <li key={loc.slug}>
                  <Link
                    href={`/locations/${loc.slug}`}
                    className="inline-flex items-center gap-1.5 border border-[#0A0A0A] bg-white px-4 py-2 text-sm font-semibold text-[#0A0A0A] hover:bg-[#FEF3C7]"
                  >
                    <MapPin aria-hidden="true" className="h-4 w-4 text-[#B45309]" />
                    {loc.city}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* 7. FAQs */}
      <section className="bg-white">
        <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="mb-8 text-center">
            <p className="text-sm font-bold uppercase tracking-wider text-[#B45309]">
              Questions
            </p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-[#0A0A0A]">
              Things people usually ask
            </h2>
          </div>
          <Accordion items={homeFaqs} idPrefix="home-faq" />
          <p className="mt-8 text-center text-sm text-neutral-700">
            Have a different question?{" "}
            <TrackedRouteLink
              href="/contact"
              eventName="consultation_cta_click"
              payload={{ source: "home_faq" }}
              className="font-bold text-[#0A0A0A] underline decoration-[#F59E0B] decoration-2 underline-offset-4 hover:text-[#B45309]"
            >
              Ask me here
            </TrackedRouteLink>{" "}
            or{" "}
            <Link
              href="/faq"
              className="font-bold text-[#0A0A0A] underline decoration-[#F59E0B] decoration-2 underline-offset-4 hover:text-[#B45309]"
            >
              read all FAQs
            </Link>
            .
          </p>
        </div>
      </section>

      {/* 8. Final CTA */}
      <CtaBanner
        source="home_bottom"
        heading="Let's get your business more customers online"
        description="Tell me about your business on WhatsApp. I'll reply with simple ideas, a clear price and a timeline — free, with no obligation."
      />
    </>
  );
}
