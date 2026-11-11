import { Logo } from "./logo";
import { NAV } from "./nav";

const SERVICES = ["Контроль оборудования", "Мониторинг 24/7", "Уведомления и боты", "Интеграции и учёт", "Отчёты и аналитика"];

export function Footer() {
  return (
    <footer className="container-site">
      <div className="grid gap-10 border-t border-border py-12 md:grid-cols-[1fr_2fr]">
        <div className="flex flex-col gap-3 md:border-r md:border-dashed md:border-border">
          <Logo />
          <p className="text-xs text-muted-foreground">© 2026 Meridian IT</p>
        </div>
        <div className="grid grid-cols-2 gap-8 text-sm sm:grid-cols-3">
          <div>
            <p className="font-medium">Разделы</p>
            <ul className="mt-3 space-y-2">
              {NAV.map((item) => (
                <li key={item.href}>
                  <a href={item.href} className="text-foreground/75 transition-colors hover:text-foreground">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="font-medium">Услуги</p>
            <ul className="mt-3 space-y-2">
              {SERVICES.map((s) => (
                <li key={s}>
                  <a href="#services" className="text-foreground/75 transition-colors hover:text-foreground">
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="font-medium">Связаться</p>
            <ul className="mt-3 space-y-2">
              <li>
                <a href="#contact" className="text-foreground/75 transition-colors hover:text-foreground">
                  Оставить заявку
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
