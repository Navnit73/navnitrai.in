import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

export const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap font-semibold transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-offset-2 disabled:pointer-events-none disabled:opacity-50 cursor-pointer border rounded-none shadow-none",
  {
    variants: {
      variant: {
        primary:
          "bg-[#F59E0B] text-[#0A0A0A] border-[#0A0A0A] hover:bg-[#D97706] focus-visible:outline-[#0A0A0A]",
        secondary:
          "bg-[#0A0A0A] text-white border-[#0A0A0A] hover:bg-neutral-800 focus-visible:outline-[#0A0A0A]",
        outline:
          "bg-white text-[#0A0A0A] border-[#0A0A0A] hover:bg-neutral-100 focus-visible:outline-[#0A0A0A]",
        outlineDark:
          "bg-transparent text-white border-white hover:bg-white hover:text-[#0A0A0A] focus-visible:outline-[#F59E0B]",
        ghost:
          "bg-transparent text-[#0A0A0A] border-transparent hover:bg-neutral-100 focus-visible:outline-[#0A0A0A]",
      },
      size: {
        sm: "min-h-10 px-4 py-2 text-sm",
        md: "min-h-11 px-5 py-2.5 text-sm",
        lg: "min-h-12 px-6 py-3 text-base",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, type = "button", ...props }, ref) => {
    return (
      <button
        ref={ref}
        type={type}
        className={cn(buttonVariants({ variant, size }), className)}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";
