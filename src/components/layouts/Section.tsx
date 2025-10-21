
import { cn } from "@/lib/utils";
import { HTMLAttributes } from "react";

export const Section = ({
  className,
  ...props
}: HTMLAttributes<HTMLElement>) => {
  return (
    <section
      className={cn("mx-auto max-w-4xl scroll-mt-20 p-4", className)}
      {...props}
    />
  );
};
