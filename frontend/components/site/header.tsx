"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Logo } from "./logo";
import { NAV } from "./nav";
import { PillLink } from "./ui";
import { ThemeToggle } from "./theme";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-colors duration-300",
        scrolled || open ? "bg-background/85 backdrop-blur-xl" : "bg-transparent"
      )}
    >
      <div className="container-site flex h-16 items-center justify-between gap-6">
        <div className="flex items-center gap-10">
          <Logo />
          <nav aria-label="Основная навигация" className="hidden lg:block">
            <ul className="flex items-center gap-7 text-sm">
              {NAV.map((item) => (
                <li key={item.href}>
                  <a href={item.href} className="text-foreground/80 transition-colors hover:text-foreground">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <PillLink href="#cases" variant="light" size="sm" className="hidden sm:inline-flex">
            Кейсы
          </PillLink>
          <PillLink href="#contact" size="sm" className="hidden sm:inline-flex">
            Обсудить задачу
          </PillLink>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Закрыть меню" : "Открыть меню"}
            className="inline-flex size-9 items-center justify-center rounded-full bg-secondary lg:hidden"
          >
            {open ? <X className="size-4" /> : <Menu className="size-4" />}
          </button>
        </div>
      </div>

      {open && (
        <div id="mobile-menu" className="h-[calc(100svh-4rem)] overflow-y-auto border-t border-border bg-background lg:hidden">
          <ul className="container-site flex flex-col py-4">
            {NAV.map((item) => (
              <li key={item.href} className="border-b border-border">
                <a href={item.href} onClick={() => setOpen(false)} className="block py-4 text-xl tracking-tight">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="container-site">
            <PillLink href="#contact" onClick={() => setOpen(false)} className="w-full">
              Обсудить задачу
            </PillLink>
          </div>
        </div>
      )}
    </header>
  );
}
