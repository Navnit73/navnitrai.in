import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";

export default function NotFound() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-3xl px-4 py-20 text-center sm:px-6 lg:px-8">
        <span className="inline-block border border-[#0A0A0A] bg-[#F59E0B] px-3 py-1 font-mono text-xs font-bold uppercase tracking-wider text-[#0A0A0A]">
          404 • Page Not Found
        </span>
        <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-[#0A0A0A]">
          We Could Not Find That Page
        </h1>
        <p className="mt-4 text-base text-neutral-700">
          The URL you followed may have moved or been mistyped. Browse core services, service locations, or request a consultation directly.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link
            href="/"
            className={buttonVariants({ variant: "primary", size: "md" })}
          >
            <ArrowLeft aria-hidden="true" className="h-4 w-4" />
            <span>Back to Home</span>
          </Link>
          <Link
            href="/services"
            className={buttonVariants({ variant: "outline", size: "md" })}
          >
            <span>Explore Services</span>
          </Link>
          <Link
            href="/contact"
            className={buttonVariants({ variant: "secondary", size: "md" })}
          >
            <span>Contact Navnit</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
