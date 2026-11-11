import { ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

const pill = {
  dark: "bg-foreground text-background hover:bg-foreground/85",
  light: "bg-secondary text-foreground hover:bg-[color-mix(in_oklch,var(--secondary),var(--foreground)_8%)]",
  outline: "border border-border bg-background text-foreground hover:bg-secondary",
};

const sizes = {
  sm: "h-9 px-4 text-sm",
  md: "h-11 px-5 text-[15px]",
};

export function PillLink({
  href,
  children,
  variant = "dark",
  size = "md",
  arrow = false,
  className,
  ...rest
}: React.ComponentProps<"a"> & {
  variant?: keyof typeof pill;
  size?: keyof typeof sizes;
  arrow?: boolean;
}) {
  return (
    <a
      href={href}
      className={cn(
        "group inline-flex items-center justify-center gap-1 rounded-full font-medium transition-colors",
        pill[variant],
        sizes[size],
        className
      )}
      {...rest}
    >
      {children}
      {arrow && <ChevronRight className="size-4 transition-transform group-hover:translate-x-0.5" />}
    </a>
  );
}

export function SectionHeading({
  label,
  title,
  text,
  className,
  align = "left",
}: {
  label?: string;
  title: React.ReactNode;
  text?: React.ReactNode;
  className?: string;
  align?: "left" | "center";
}) {
  return (
    <div className={cn("reveal max-w-2xl", align === "center" && "mx-auto text-center", className)}>
      {label && <p className="text-sm text-muted-foreground">{label}</p>}
      <h2
        className={cn(
          "text-[clamp(2rem,4.4vw,3.25rem)] leading-[1.04] font-normal tracking-[-0.035em] text-balance",
          label && "mt-3"
        )}
      >
        {title}
      </h2>
      {text && <p className="mt-5 text-base leading-relaxed text-pretty text-muted-foreground sm:text-[17px]">{text}</p>}
    </div>
  );
}
