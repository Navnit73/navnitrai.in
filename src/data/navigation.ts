export interface NavLink {
  label: string;
  href: string;
}

export const primaryNavLinks: NavLink[] = [
  { label: "Services", href: "/services" },
  { label: "Locations", href: "/locations" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Blog", href: "/blog" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export const footerColumns = {
  core: [
    { label: "Home", href: "/" },
    { label: "About Navnit Rai", href: "/about" },
    { label: "Portfolio", href: "/portfolio" },
    { label: "Case Studies", href: "/case-studies" },
    { label: "Engineering Blog", href: "/blog" },
    { label: "FAQs", href: "/faq" },
    { label: "Contact & Quote", href: "/contact" },
  ],
  services: [
    { label: "All 14 Services", href: "/services" },
    { label: "Website Development", href: "/services/website-development" },
    {
      label: "Business Website Development",
      href: "/services/business-website-development",
    },
    {
      label: "E-Commerce Development",
      href: "/services/ecommerce-website-development",
    },
    { label: "Next.js Development", href: "/services/nextjs-development" },
    {
      label: "SEO-Friendly Development",
      href: "/services/seo-friendly-website-development",
    },
    {
      label: "Web Application Development",
      href: "/services/web-application-development",
    },
    { label: "Website Redesign", href: "/services/website-redesign" },
  ],
  locations: [
    { label: "All Service Areas", href: "/locations" },
    { label: "Website Developer in Lucknow", href: "/locations/lucknow" },
    { label: "Website Developer in Gorakhpur", href: "/locations/gorakhpur" },
    { label: "Website Developer in Kanpur", href: "/locations/kanpur" },
    { label: "Website Developer in Varanasi", href: "/locations/varanasi" },
    { label: "Website Developer in Prayagraj", href: "/locations/prayagraj" },
    { label: "Website Developer in Faridabad", href: "/locations/faridabad" },
  ],
  legal: [
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "Terms & Conditions", href: "/terms-and-conditions" },
    { label: "Refund Policy", href: "/refund-policy" },
    { label: "Disclaimer", href: "/disclaimer" },
  ],
};
