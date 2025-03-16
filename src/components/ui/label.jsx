import React from "react";
import * as LabelPrimitive from "@radix-ui/react-label";

const labelStyles = "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70";

const Label = React.forwardRef(({ className, ...props }, ref) => {
  const combinedClassName = [labelStyles, className].filter(Boolean).join(" ");
  
  return (
    <LabelPrimitive.Root
      ref={ref}
      className={combinedClassName}
      {...props}
    />
  );
});

Label.displayName = "Label";

export { Label };