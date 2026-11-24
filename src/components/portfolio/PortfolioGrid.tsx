"use client";

import * as React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { PortfolioItem } from "@/data/projects";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

const CATEGORIES: Array<"All" | PortfolioItem["category"]> = [
  "All",
  "Business Website",
  "E-Commerce",
  "Web Application",
  "SEO & Redesign",
];

export function PortfolioGrid({ items }: { items: PortfolioItem[] }) {
  const [selected, setSelected] = React.useState<"All" | PortfolioItem["category"]>("All");

  const filtered =
    selected === "All"
      ? items
      : items.filter((item) => item.category === selected);

  return (
    <div>
      <div
        role="group"
        aria-label="Filter projects by category"
        className="flex flex-wrap gap-2"
      >
        {CATEGORIES.map((category) => {
          const active = selected === category;
          return (
            <button
              key={category}
              type="button"
              onClick={() => setSelected(category)}
              aria-pressed={active}
              className={cn(
                "min-h-10 border px-4 py-2 text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer",
                active
                  ? "border-[#0A0A0A] bg-[#F59E0B] text-[#0A0A0A]"
                  : "border-neutral-300 bg-white text-neutral-800 hover:border-[#0A0A0A]"
              )}
            >
              {category}
            </button>
          );
        })}
      </div>

      <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filtered.map((item) => (
          <article
            key={item.id}
            className="flex flex-col justify-between border border-[#0A0A0A] bg-white p-6"
          >
            <div>
              <div className="flex flex-wrap items-center justify-between gap-2">
                <Badge variant="amber">{item.category}</Badge>
                <span className="font-mono text-[11px] font-semibold uppercase text-neutral-600">
                  {item.statusTag}
                </span>
              </div>

              <h2 className="mt-4 text-xl font-bold text-[#0A0A0A]">
                {item.title}
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-neutral-700">
                {item.summary}
              </p>

              <div className="mt-4 border-t border-neutral-200 pt-3">
                <p className="text-xs font-bold uppercase tracking-wider text-neutral-600">
                  Problem Addressed
                </p>
                <p className="mt-1 text-sm text-neutral-800">{item.problemSolved}</p>
              </div>

              <ul className="mt-4 space-y-1.5 text-xs text-neutral-700">
                {item.architectureHighlights.map((hl) => (
                  <li key={hl} className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 bg-[#F59E0B]" aria-hidden="true" />
                    <span>{hl}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-4 flex flex-wrap gap-1.5">
                {item.stack.map((tech) => (
                  <span
                    key={tech}
                    className="border border-neutral-300 bg-neutral-50 px-2 py-0.5 font-mono text-xs text-neutral-800"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-6 border-t border-neutral-200 pt-4">
              {item.caseStudySlug ? (
                <Link
                  href={`/case-studies/${item.caseStudySlug}`}
                  className="inline-flex items-center gap-1.5 text-sm font-bold text-[#0A0A0A] hover:text-[#B45309]"
                >
                  <span>Read Architecture Case Study</span>
                  <ArrowRight aria-hidden="true" className="h-4 w-4" />
                </Link>
              ) : (
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-1.5 text-sm font-bold text-[#0A0A0A] hover:text-[#B45309]"
                >
                  <span>Request Similar Build</span>
                  <ArrowRight aria-hidden="true" className="h-4 w-4" />
                </Link>
              )}
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
