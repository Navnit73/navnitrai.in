"use client";

import * as React from "react";
import Link from "next/link";
import { Button, buttonVariants } from "@/components/ui/button";

export default function GlobalError({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-3xl px-4 py-20 text-center sm:px-6 lg:px-8">
        <span className="inline-block border border-[#0A0A0A] bg-[#FEF3C7] px-3 py-1 font-mono text-xs font-bold uppercase tracking-wider text-[#92400E]">
          Temporary Error
        </span>
        <h1 className="mt-6 text-3xl font-extrabold text-[#0A0A0A]">
          Something Went Wrong While Loading This Page
        </h1>
        <p className="mt-3 text-base text-neutral-700">
          Try reloading the view, or navigate directly to services or contact.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Button variant="primary" size="md" onClick={() => reset()}>
            Try Again
          </Button>
          <Link
            href="/contact"
            className={buttonVariants({ variant: "outline", size: "md" })}
          >
            Contact Page
          </Link>
        </div>
      </div>
    </section>
  );
}
