import React from "react";
import { Slot } from "@radix-ui/react-slot";

const buttonStyles = {
  base: "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 disabled:pointer-events-none disabled:opacity-50",
  variants: {
    default: "bg-[hsl(25,86%,48%)] text-white shadow hover:bg-[hsl(25,86%,43%)]",
    destructive: "bg-[hsl(0,84%,60%)] text-white shadow-sm hover:bg-[hsl(0,84%,55%)]",
    outline: "border border-[hsl(25,10%,91%)] bg-white shadow-sm hover:bg-[hsl(25,40%,96%)] hover:text-[hsl(25,70%,45%)]",
    secondary: "bg-[hsl(25,30%,95%)] text-[hsl(25,70%,45%)] shadow-sm hover:bg-[hsl(25,30%,90%)]",
    ghost: "hover:bg-[hsl(25,40%,96%)] hover:text-[hsl(25,70%,45%)]",
    link: "text-[hsl(25,86%,48%)] underline-offset-4 hover:underline"
  },
  sizes: {
    default: "h-9 px-4 py-2",
    sm: "h-8 rounded-md px-3 text-xs",
    lg: "h-10 rounded-md px-8",
    icon: "h-9 w-9"
  }
};

const Button = React.forwardRef(
  ({ className, variant = "default", size = "default", asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    
    const combinedClassName = [
      buttonStyles.base,
      buttonStyles.variants[variant], 
      buttonStyles.sizes[size],
      className
    ].filter(Boolean).join(" ");
    
    return (
      <Comp
        className={combinedClassName}
        ref={ref}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";

export { Button };