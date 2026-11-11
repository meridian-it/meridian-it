import { cn } from "@/lib/utils";

export function Logo({ className }: { className?: string }) {
  return (
    <a
      href="#top"
      aria-label="Meridian IT — на главную"
      className={cn("group inline-flex items-center gap-2 tracking-tight", className)}
    >
      <svg viewBox="0 0 32 32" className="size-6 transition-transform duration-500 group-hover:rotate-90" aria-hidden="true">
        <circle cx="16" cy="16" r="13" fill="none" stroke="currentColor" strokeOpacity=".25" strokeWidth="1.6" />
        <ellipse cx="16" cy="16" rx="5.5" ry="13" fill="none" stroke="currentColor" strokeWidth="1.6" />
        <line x1="16" y1="3" x2="16" y2="29" stroke="var(--brand)" strokeWidth="1.6" />
      </svg>
      <span className="text-[15px] font-medium">Meridian IT</span>
    </a>
  );
}
