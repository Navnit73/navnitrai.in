import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { siteConfig } from "@/config/site";
import { buildPageMetadata } from "@/lib/seo";
import { blogPostsData } from "@/data/blog";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { JsonLd } from "@/components/seo/JsonLd";
import { Badge } from "@/components/ui/badge";
import { CtaBanner } from "@/components/cta/CtaBanner";

export const metadata: Metadata = buildPageMetadata({
  title: "Web Development & Technical SEO Blog | Navnit Rai",
  description:
    "Practical engineering guides on website development costs in India, Next.js vs WordPress, local SEO architecture, e-commerce platforms, and safe redesigns.",
  path: "/blog",
  keywords: [
    "web development and seo blog india",
    "website cost india guide",
    "nextjs vs wordpress india",
  ],
});

export default function BlogIndexPage() {
  const blogSchema = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "Navnit Rai Engineering & SEO Guides",
    url: `${siteConfig.url}/blog`,
    blogPost: blogPostsData.map((post) => ({
      "@type": "BlogPosting",
      headline: post.title,
      url: `${siteConfig.url}/blog/${post.slug}`,
      datePublished: post.publishedAt,
      dateModified: post.updatedAt,
    })),
  };

  return (
    <>
      <JsonLd data={blogSchema} />

      <section className="border-b-2 border-[#0A0A0A] bg-white">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
          <Breadcrumbs
            items={[
              { name: "Home", path: "/" },
              { name: "Blog", path: "/blog" },
            ]}
          />

          <Badge variant="amber">Guides &amp; Insights</Badge>
          <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-[#0A0A0A] sm:text-5xl">
            Engineering &amp; SEO Guides for Indian Businesses
          </h1>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-neutral-700">
            Practical, zero-fluff comparisons on hiring freelancers vs. agencies, realistic website investment scopes, Next.js vs. WordPress, and ranking locally without doorway spam.
          </p>
        </div>
      </section>

      <section className="bg-neutral-50">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {blogPostsData.map((post) => (
              <article
                key={post.slug}
                className="flex flex-col justify-between border border-[#0A0A0A] bg-white p-6"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 text-xs font-semibold uppercase tracking-wider text-neutral-600">
                    <span className="text-[#B45309]">{post.category}</span>
                    <span>{post.readingTime}</span>
                  </div>
                  <h2 className="mt-3 text-xl font-bold text-[#0A0A0A]">
                    <Link href={`/blog/${post.slug}`} className="hover:underline">
                      {post.title}
                    </Link>
                  </h2>
                  <p className="mt-2.5 text-sm leading-relaxed text-neutral-700">
                    {post.excerpt}
                  </p>
                </div>

                <div className="mt-6 flex items-center justify-between border-t border-neutral-200 pt-4 text-xs text-neutral-600">
                  <time dateTime={post.updatedAt}>Updated {post.updatedAt}</time>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center gap-1 text-sm font-bold text-[#0A0A0A] hover:text-[#B45309]"
                  >
                    <span>Read</span>
                    <ArrowRight aria-hidden="true" className="h-4 w-4" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
          <div className="mt-12 border border-[#0A0A0A] bg-white p-6 sm:p-8">
            <h2 className="text-xl font-bold text-[#0A0A0A]">
              Why These Engineering &amp; SEO Guides Exist
            </h2>
            <p className="mt-2.5 text-sm leading-relaxed text-neutral-700">
              Business owners evaluating website investments in Lucknow, Gorakhpur, Kanpur, Faridabad, or remotely across India frequently run into conflicting advice—cheap ₹5,000 templates on one hand and inflated agency retainers on the other. Every article above breaks down real engineering tradeoffs, technical SEO hygiene, Core Web Vitals speed priorities, and total cost of ownership so you can make informed vendor and technology decisions before spending budget.
            </p>
            <p className="mt-2.5 text-sm leading-relaxed text-neutral-700">
              Looking for commercial project deliverables or scope? Browse{" "}
              <Link href="/services" className="font-bold underline hover:text-[#B45309]">
                all 14 web development services
              </Link>
              , explore city-specific guidance across{" "}
              <Link href="/locations" className="font-bold underline hover:text-[#B45309]">
                Lucknow, Gorakhpur, Kanpur, and Faridabad
              </Link>
              , or review{" "}
              <Link href="/faq" className="font-bold underline hover:text-[#B45309]">
                frequently asked pricing and timeline questions
              </Link>
              .
            </p>
          </div>
        </div>
      </section>

      <CtaBanner source="blog_index_bottom" />
    </>
  );
}
