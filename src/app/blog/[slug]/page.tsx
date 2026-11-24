import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Check } from "lucide-react";
import { buildArticleSchema, buildPageMetadata } from "@/lib/seo";
import { blogPostsData, getBlogPostBySlug } from "@/data/blog";
import { servicesData } from "@/data/services";
import { locationsData } from "@/data/locations";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { JsonLd } from "@/components/seo/JsonLd";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { CtaBanner } from "@/components/cta/CtaBanner";

export function generateStaticParams() {
  return blogPostsData.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) {
    return buildPageMetadata({
      title: "Article Not Found | Navnit Rai",
      description: "The requested blog article could not be found.",
      path: `/blog/${slug}`,
      noIndex: true,
    });
  }

  return buildPageMetadata({
    title: post.seoTitle,
    description: post.metaDescription,
    path: `/blog/${post.slug}`,
    type: "article",
    publishedTime: post.publishedAt,
    modifiedTime: post.updatedAt,
    keywords: [post.primaryKeyword],
  });
}

export default async function BlogDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) {
    notFound();
  }

  const relatedServices = servicesData.filter((s) =>
    post.relatedServiceSlugs.includes(s.slug)
  );
  const relatedLocations = locationsData.filter((l) =>
    post.relatedLocationSlugs.includes(l.slug)
  );

  return (
    <>
      <JsonLd
        data={buildArticleSchema({
          title: post.title,
          description: post.metaDescription,
          path: `/blog/${post.slug}`,
          publishedAt: post.publishedAt,
          updatedAt: post.updatedAt,
        })}
      />

      <article>
        <header className="border-b-2 border-[#0A0A0A] bg-white">
          <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
            <Breadcrumbs
              items={[
                { name: "Home", path: "/" },
                { name: "Blog", path: "/blog" },
                { name: post.category, path: `/blog/${post.slug}` },
              ]}
            />

            <div className="flex flex-wrap items-center gap-3 text-xs font-semibold uppercase tracking-wider text-neutral-600">
              <Badge variant="amber">{post.category}</Badge>
              <span>{post.readingTime}</span>
              <span>•</span>
              <time dateTime={post.updatedAt}>Updated {post.updatedAt}</time>
            </div>

            <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-[#0A0A0A] sm:text-4xl">
              {post.title}
            </h1>
            <p className="mt-4 text-lg leading-relaxed text-neutral-700">
              {post.excerpt}
            </p>
          </div>
        </header>

        <div className="bg-neutral-50">
          <div className="mx-auto max-w-4xl space-y-8 px-4 py-12 sm:px-6 lg:px-8">
            {/* Key Takeaways */}
            <aside className="border-2 border-[#0A0A0A] bg-[#FEF3C7] p-6">
              <h2 className="font-mono text-xs font-bold uppercase tracking-wider text-[#92400E]">
                Key Takeaways
              </h2>
              <ul className="mt-3 space-y-2 text-sm text-[#0A0A0A]">
                {post.keyTakeaways.map((point) => (
                  <li key={point} className="flex items-start gap-2.5 font-medium">
                    <Check
                      aria-hidden="true"
                      className="mt-0.5 h-4 w-4 shrink-0 text-[#0A0A0A]"
                    />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </aside>

            {/* Article Sections */}
            <div className="space-y-8 border border-[#0A0A0A] bg-white p-6 sm:p-10">
              {post.sections.map((section) => (
                <section key={section.heading}>
                  <h2 className="text-xl font-bold text-[#0A0A0A] sm:text-2xl">
                    {section.heading}
                  </h2>
                  <div className="mt-3 space-y-3 text-base leading-relaxed text-neutral-800">
                    {section.paragraphs.map((para) => (
                      <p key={para}>{para}</p>
                    ))}
                  </div>
                  {section.bullets && section.bullets.length > 0 && (
                    <ul className="mt-4 space-y-2.5 text-sm leading-relaxed text-neutral-800">
                      {section.bullets.map((bullet) => (
                        <li
                          key={bullet}
                          className="border-l-2 border-[#F59E0B] pl-3"
                        >
                          {bullet}
                        </li>
                      ))}
                    </ul>
                  )}
                </section>
              ))}
            </div>

            {/* Contextual Internal Links */}
            <div className="grid gap-6 md:grid-cols-2">
              {relatedServices.length > 0 && (
                <div className="border border-[#0A0A0A] bg-white p-6">
                  <h2 className="text-sm font-bold uppercase tracking-wider text-[#B45309]">
                    Related Services
                  </h2>
                  <ul className="mt-3 space-y-2 text-sm">
                    {relatedServices.map((svc) => (
                      <li key={svc.slug}>
                        <Link
                          href={`/services/${svc.slug}`}
                          className="font-semibold text-[#0A0A0A] hover:text-[#B45309] hover:underline"
                        >
                          {svc.name} →
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {relatedLocations.length > 0 && (
                <div className="border border-[#0A0A0A] bg-white p-6">
                  <h2 className="text-sm font-bold uppercase tracking-wider text-[#B45309]">
                    Regional Hubs Covered
                  </h2>
                  <ul className="mt-3 space-y-2 text-sm">
                    {relatedLocations.map((loc) => (
                      <li key={loc.slug}>
                        <Link
                          href={`/locations/${loc.slug}`}
                          className="font-semibold text-[#0A0A0A] hover:text-[#B45309] hover:underline"
                        >
                          Website Developer in {loc.city} →
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            <div>
              <Link
                href="/blog"
                className={buttonVariants({ variant: "outline", size: "md" })}
              >
                <ArrowLeft aria-hidden="true" className="h-4 w-4" />
                <span>Back to All Guides</span>
              </Link>
            </div>
          </div>
        </div>
      </article>

      <CtaBanner source={`blog_${post.slug}_bottom`} />
    </>
  );
}
