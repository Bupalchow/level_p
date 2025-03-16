import React from "react";

const inputStyles = "flex h-9 w-full rounded-md border border-[hsl(25,10%,91%)] bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-[hsl(25,8%,47%)] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[hsl(25,86%,48%)] disabled:cursor-not-allowed disabled:opacity-50";

const Input = React.forwardRef(
  ({ className, type = "text", ...props }, ref) => {
    const combinedClassName = [inputStyles, className].filter(Boolean).join(" ");
    
    return (
      <input
        type={type}
        className={combinedClassName}
        ref={ref}
        {...props}
      />
    );
  }
);

Input.displayName = "Input";

export { Input };