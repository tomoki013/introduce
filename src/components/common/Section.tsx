
import { cn } from "@/lib/utils";
import { HTMLAttributes, ReactNode } from "react";

interface SectionProps extends HTMLAttributes<HTMLElement> {
  title?: string;
  titleClassName?: string;
  children: ReactNode;
}

export const Section = ({
  className,
  title,
  titleClassName,
  children,
  ...props
}: SectionProps) => {
  return (
    <section
      className={cn("mx-auto max-w-4xl scroll-mt-20 p-4", className)}
      {...props}
    >
      {title && (
        <h2 className={cn("mb-8 text-center text-3xl font-bold", titleClassName)}>
          {title}
        </h2>
      )}
      {children}
    </section>
  );
};
