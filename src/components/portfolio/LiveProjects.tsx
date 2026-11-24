import { ArrowUpRight, Check, Globe } from "lucide-react";
import type { LiveProject } from "@/data/projects";
import { Badge } from "@/components/ui/badge";

/** Grid of real, live websites with outbound links. */
export function LiveProjectsGrid({ projects }: { projects: LiveProject[] }) {
  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {projects.map((p) => (
        <article
          key={p.domain}
          className="flex flex-col border border-[#0A0A0A] bg-white p-6 transition-colors hover:bg-[#FFFBEB]"
        >
          <div className="flex flex-wrap items-center justify-between gap-2">
            <Badge variant="amber">{p.category}</Badge>
            <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-green-700">
              <span className="h-2 w-2 rounded-full bg-green-600" aria-hidden="true" />
              Live · {p.market}
            </span>
          </div>

          <h3 className="mt-4 text-xl font-bold text-[#0A0A0A]">{p.name}</h3>
          <p className="mt-1 inline-flex items-center gap-1.5 font-mono text-xs text-neutral-600">
            <Globe aria-hidden="true" className="h-3.5 w-3.5" />
            {p.domain}
          </p>
          <p className="mt-3 text-sm leading-relaxed text-neutral-700">{p.summary}</p>

          <ul className="mt-4 space-y-1.5 text-sm">
            {p.highlights.map((h) => (
              <li key={h} className="flex items-start gap-2">
                <Check aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0 text-[#B45309]" />
                <span className="text-neutral-800">{h}</span>
              </li>
            ))}
          </ul>

          <div className="mt-4 flex flex-wrap gap-1.5">
            {p.stack.map((t) => (
              <span
                key={t}
                className="border border-neutral-300 bg-neutral-50 px-2 py-0.5 font-mono text-xs text-neutral-800"
              >
                {t}
              </span>
            ))}
          </div>

          <a
            href={p.url}
            target="_blank"
            rel="noopener"
            className="mt-auto inline-flex items-center gap-1.5 pt-6 text-sm font-bold text-[#0A0A0A] underline decoration-[#F59E0B] decoration-2 underline-offset-4 hover:text-[#B45309]"
          >
            Visit live site
            <span className="sr-only"> {p.domain} (opens in a new tab)</span>
            <ArrowUpRight aria-hidden="true" className="h-4 w-4" />
          </a>
        </article>
      ))}
    </div>
  );
}
