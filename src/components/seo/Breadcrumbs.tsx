import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { JsonLd } from "@/components/seo/JsonLd";
import { buildBreadcrumbSchema, type BreadcrumbItem } from "@/lib/seo";

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  dark?: boolean;
}

export function Breadcrumbs({ items, dark = false }: BreadcrumbsProps) {
  const schema = buildBreadcrumbSchema(items);

  return (
    <>
      <JsonLd data={schema} />
      <nav aria-label="Breadcrumb" className="mb-6">
        <ol
          className={`flex flex-wrap items-center gap-1.5 text-xs font-medium uppercase tracking-wider ${
            dark ? "text-neutral-300" : "text-neutral-600"
          }`}
        >
          {items.map((item, idx) => {
            const isLast = idx === items.length - 1;
            return (
              <li key={item.path} className="inline-flex items-center gap-1.5">
                {idx > 0 && (
                  <ChevronRight
                    aria-hidden="true"
                    className={`h-3.5 w-3.5 ${
                      dark ? "text-neutral-500" : "text-neutral-400"
                    }`}
                  />
                )}
                {isLast ? (
                  <span
                    aria-current="page"
                    className={
                      dark ? "text-[#F59E0B] font-semibold" : "text-[#0A0A0A] font-semibold"
                    }
                  >
                    {item.name}
                  </span>
                ) : (
                  <Link
                    href={item.path}
                    className={`underline-offset-4 hover:underline ${
                      dark ? "hover:text-white" : "hover:text-[#0A0A0A]"
                    }`}
                  >
                    {item.name}
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
}
