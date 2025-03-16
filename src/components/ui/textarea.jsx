import React from "react";

const textareaStyles = "flex min-h-[60px] w-full rounded-md border border-[hsl(25,10%,91%)] bg-transparent px-3 py-2 text-sm shadow-sm placeholder:text-[hsl(25,8%,47%)] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[hsl(25,86%,48%)] disabled:cursor-not-allowed disabled:opacity-50";

const Textarea = React.forwardRef(({ className, ...props }, ref) => {
  const combinedClassName = [textareaStyles, className].filter(Boolean).join(" ");
  
  return (
    <textarea
      className={combinedClassName}
      ref={ref}
      {...props}
    />
  );
});

Textarea.displayName = "Textarea";

export { Textarea };