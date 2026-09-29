import type { HTMLAttributes, PropsWithChildren } from "react";

type GlassCardProps = PropsWithChildren<HTMLAttributes<HTMLElement>> & {
  as?: "article" | "aside" | "div" | "section";
};

export function GlassCard({
  as = "div",
  children,
  className = "",
  ...props
}: GlassCardProps) {
  const Component = as;

  return (
    <Component className={`glass-panel ${className}`.trim()} {...props}>
      {children}
    </Component>
  );
}