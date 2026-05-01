import * as React from "react";
import Link from "next/link";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 font-medium transition-all duration-200 ease-out disabled:opacity-40 disabled:pointer-events-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-ink",
  {
    variants: {
      variant: {
        primary:
          "bg-ink text-bg hover:-translate-y-px hover:bg-ink/90 active:translate-y-0",
        ghost: "text-ink hover:bg-ink/5",
        outline:
          "border border-line-strong text-ink hover:bg-ink/[0.03] hover:border-ink",
      },
      size: {
        sm: "h-9 px-4 text-[13px] rounded-md",
        md: "h-11 px-6 text-[14px] rounded-lg",
        lg: "h-14 px-8 text-[15px] rounded-lg",
      },
    },
    defaultVariants: { variant: "primary", size: "md" },
  }
);

export interface ButtonProps
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "type">,
    VariantProps<typeof buttonVariants> {
  href?: string;
  type?: "button" | "submit" | "reset";
}

export function Button({
  className,
  variant,
  size,
  href,
  ...props
}: ButtonProps) {
  const classes = cn(buttonVariants({ variant, size }), className);
  if (href) {
    return (
      <Link
        href={href}
        className={classes}
        {...(props as unknown as React.AnchorHTMLAttributes<HTMLAnchorElement>)}
      />
    );
  }
  return <button className={classes} {...props} />;
}
