"use client";

import * as React from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

export interface AccordionItemData {
  question: string;
  answer: string;
}

interface AccordionProps {
  items: AccordionItemData[];
  idPrefix?: string;
}

export function Accordion({ items, idPrefix = "faq" }: AccordionProps) {
  const [openIndex, setOpenIndex] = React.useState<number | null>(0);

  return (
    <div className="divide-y divide-neutral-300 border border-neutral-900 bg-white">
      {items.map((item, idx) => {
        const isOpen = openIndex === idx;
        const buttonId = `${idPrefix}-btn-${idx}`;
        const panelId = `${idPrefix}-panel-${idx}`;

        return (
          <div key={item.question}>
            <button
              id={buttonId}
              type="button"
              aria-expanded={isOpen}
              aria-controls={panelId}
              onClick={() => setOpenIndex(isOpen ? null : idx)}
              className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left text-base font-semibold text-[#0A0A0A] hover:bg-neutral-50 transition-colors cursor-pointer min-h-14"
            >
              <span>{item.question}</span>
              <ChevronDown
                aria-hidden="true"
                className={cn(
                  "h-5 w-5 shrink-0 text-[#0A0A0A] transition-transform duration-150",
                  isOpen && "rotate-180 text-[#B45309]"
                )}
              />
            </button>
            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              hidden={!isOpen}
              className="border-t border-neutral-200 bg-neutral-50 px-5 py-4 text-sm leading-relaxed text-neutral-700"
            >
              {item.answer}
            </div>
          </div>
        );
      })}
    </div>
  );
}
