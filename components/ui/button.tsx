import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-none text-xs tracking-[0.15em] uppercase font-medium transition-all duration-500 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-amber-500 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 cursor-magnetic",
  {
    variants: {
      variant: {
        default:
          "bg-amber-600 text-stone-950 shadow-[0_0_15px_rgba(217,119,6,0.2)] hover:bg-amber-500 hover:shadow-[0_0_25px_rgba(217,119,6,0.4)]",
        destructive:
          "bg-red-900/80 text-red-100 shadow-sm hover:bg-red-900 border border-red-800",
        outline:
          "border border-amber-600/50 bg-transparent text-amber-500 shadow-sm hover:bg-amber-600 hover:text-stone-950",
        secondary:
          "bg-stone-800 text-stone-100 shadow-sm hover:bg-stone-700",
        ghost: "hover:bg-stone-900 hover:text-amber-500 text-stone-300",
        link: "text-amber-500 underline-offset-4 hover:underline",
      },
      size: {
        default: "h-12 px-8 py-2",
        sm: "h-10 px-6 text-[10px]",
        lg: "h-14 px-10 text-sm",
        icon: "h-12 w-12",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };