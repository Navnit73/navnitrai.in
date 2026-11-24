import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center gap-1.5 border px-2.5 py-1 text-xs font-semibold uppercase tracking-wider rounded-none",
  {
    variants: {
      variant: {
        neutral: "bg-neutral-100 text-neutral-900 border-neutral-300",
        amber: "bg-[#FEF3C7] text-[#92400E] border-[#D97706]",
        amberSolid: "bg-[#F59E0B] text-[#0A0A0A] border-[#0A0A0A]",
        black: "bg-[#0A0A0A] text-white border-[#0A0A0A]",
        outline: "bg-white text-[#0A0A0A] border-[#0A0A0A]",
        outlineDark: "bg-transparent text-[#F59E0B] border-[#F59E0B]",
      },
    },
    defaultVariants: {
      variant: "neutral",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof badgeVariants> {}

export function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <span className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}
