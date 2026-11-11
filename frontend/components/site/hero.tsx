import { HeroBackground } from "./hero-background";
import { cn } from "@/lib/utils";
import { PillLink } from "./ui";

export function Hero() {
  return (
    <section id="top">
      <div className="relative isolate flex min-h-[92svh] flex-col justify-center overflow-hidden">
        {/* фон: ASCII-градиент */}
        <div className="absolute inset-0 -z-10">
          <HeroBackground />
          {/* мягкая подложка под текстом и переход в белый снизу */}
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_55%_45%_at_50%_45%,var(--background)_15%,transparent_75%)] opacity-90" />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-background to-transparent" />
          {/* в тёмной теме верх фона яркий — приглушаем его под шапкой */}
          <div className="pointer-events-none absolute inset-x-0 top-0 hidden h-40 bg-gradient-to-b from-background/90 to-transparent dark:block" />
        </div>

        <div className="container-site flex flex-col items-center pt-32 pb-20 text-center sm:pt-36 sm:pb-28">
          <p className="hero-in inline-flex items-center gap-2 rounded-full border border-border bg-background/80 px-3 py-1 text-[13px] backdrop-blur">
            <span className="pulse-dot size-1.5 rounded-full bg-brand text-brand/50" />
            Автоматизация бизнеса и компьютерное зрение
          </p>

          <h1
            className="hero-in mt-7 max-w-4xl text-[clamp(2.5rem,6.4vw,4.75rem)] leading-[1.02] font-normal tracking-[-0.045em] text-balance"
            style={{ ["--d" as string]: "60ms" }}
          >
            Порядок в бизнесе
            <br className="hidden sm:block" /> без ручного контроля.
          </h1>

          <p
            className="hero-in mt-6 max-w-xl text-base leading-relaxed text-pretty text-foreground/75 sm:text-lg"
            style={{ ["--d" as string]: "120ms" }}
          >
            Автоматизируем учёт, контроль и рутину. Вы видите всё, что происходит в бизнесе, а система сама
            сообщает, когда нужно ваше внимание.
          </p>

          <div className="hero-in mt-8 flex flex-wrap justify-center gap-2" style={{ ["--d" as string]: "180ms" }}>
            <PillLink href="#contact" arrow>
              Обсудить задачу
            </PillLink>
            <PillLink href="#cases" variant="light">
              Смотреть кейсы
            </PillLink>
          </div>
        </div>
      </div>

      <Showcase />
    </section>
  );
}

/* ——— Витрина услуг ——— */

function Tile({
  title,
  note,
  dark,
  className,
  children,
}: {
  title: string;
  note: string;
  dark?: boolean;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <li
      className={cn(
        "reveal relative flex min-h-[20rem] flex-col overflow-hidden rounded-2xl p-5 sm:min-h-[22rem]",
        dark ? "bg-[#0a0c12] text-white dark:ring-1 dark:ring-white/10" : "bg-surface",
        className
      )}
    >
      <div className="relative flex flex-1 items-center justify-center py-4">{children}</div>
      <div className="relative flex items-end justify-between gap-4 text-sm">
        <p className="font-medium">{title}</p>
        <p className={cn("text-right", dark ? "text-white/55" : "text-muted-foreground")}>{note}</p>
      </div>
    </li>
  );
}

const LOG = [
  ["14:32:05", "Мельница 2", "сырьё 12% → push отправлен"],
  ["14:32:05", "Telegram", "уведомление доставлено"],
  ["14:32:06", "Цех", "голосовое оповещение"],
  ["14:35:40", "Мельница 2", "сырьё 96% ✓"],
  ["14:36:00", "Склад", "остатки синхронизированы"],
  ["15:00:00", "Отчёт", "смена: 7 ч 42 мин работы"],
];

function Showcase() {
  return (
    <div id="services" className="container-site scroll-mt-24">
      <ul className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
        <Tile title="Контроль оборудования" note="камеры · датчики">
          <ul className="w-full max-w-xs space-y-2 text-left text-[13px]">
            {[
              { name: "Линия 1", state: "Работает", tone: "ok" },
              { name: "Мельница 2", state: "Сырьё 12%", tone: "warn" },
              { name: "Склад", state: "Норма", tone: "ok" },
              { name: "Линия 3", state: "Простой 4 мин", tone: "bad" },
            ].map((r) => (
              <li key={r.name} className="flex items-center justify-between rounded-xl bg-background px-3.5 py-2.5 shadow-[0_1px_2px_rgb(0_0_0/0.04)]">
                <span>{r.name}</span>
                <span
                  className={cn(
                    "inline-flex items-center gap-1.5 text-xs",
                    r.tone === "ok" && "text-ok",
                    r.tone === "warn" && "text-warn",
                    r.tone === "bad" && "text-destructive"
                  )}
                >
                  <span className="pulse-dot size-1.5 rounded-full bg-current" />
                  {r.state}
                </span>
              </li>
            ))}
          </ul>
        </Tile>

        <Tile title="Мониторинг 24/7" note="без участия людей" dark>
          <div className="w-full self-end font-mono text-[11px] leading-relaxed text-white/80">
            {LOG.map(([t, who, what], i) => (
              <p key={i} className="log-in truncate" style={{ ["--d" as string]: `${600 + i * 350}ms` }}>
                <span className="text-white/40">{t}</span> <span className="text-[#a5d8ff]">{who}</span> {what}
              </p>
            ))}
          </div>
        </Tile>

        <Tile title="Уведомления и боты" note="Telegram · push · голос">
          <div className="flex w-full max-w-xs flex-col gap-2 text-left text-[13px]">
            <p className="max-w-[85%] rounded-2xl rounded-bl-md bg-background px-3.5 py-2.5 shadow-[0_1px_2px_rgb(0_0_0/0.04)]">
              ⚠️ Мельница 2: сырьё заканчивается
            </p>
            <p className="max-w-[85%] rounded-2xl rounded-bl-md bg-background px-3.5 py-2.5 shadow-[0_1px_2px_rgb(0_0_0/0.04)]">
              Заказ №1842 оплачен и передан на склад
            </p>
            <p className="self-end rounded-2xl rounded-br-md bg-foreground px-3.5 py-2.5 text-background">Принято 👍</p>
            <p className="max-w-[85%] rounded-2xl rounded-bl-md bg-background px-3.5 py-2.5 shadow-[0_1px_2px_rgb(0_0_0/0.04)]">
              📊 Отчёт за неделю готов
            </p>
          </div>
        </Tile>

        <Tile title="Интеграции и учёт" note="поставщики · 1С · сайт · CRM" className="sm:min-h-[18rem] lg:col-span-2">
          <div className="flex w-full flex-col items-center gap-3 sm:flex-row sm:justify-center sm:gap-0">
            <Node>Поставщик</Node>
            <Wire />
            <div className="rounded-2xl bg-foreground px-5 py-4 text-center text-background">
              <p className="text-sm font-medium">Ваша система</p>
              <p className="mt-0.5 text-xs text-background/60">заказы · клиенты · цены</p>
            </div>
            <Wire />
            <div className="flex flex-row gap-2 sm:flex-col">
              <Node>1С</Node>
              <Node>Сайт</Node>
              <Node>Telegram</Node>
            </div>
          </div>
        </Tile>

        <Tile title="Отчёты и аналитика" note="день · неделя · месяц" className="sm:min-h-[18rem] md:col-span-2 lg:col-span-1">
          <div className="flex h-36 w-full max-w-xs items-end justify-between gap-2">
            {[
              [78, 10],
              [84, 6],
              [70, 18],
              [90, 4],
              [88, 5],
              [60, 8],
              [30, 4],
            ].map(([work, idle], i) => (
              <div key={i} className="flex flex-1 flex-col items-center gap-1.5">
                <div className="flex h-28 w-full flex-col justify-end gap-0.5">
                  <span className="w-full rounded-sm bg-warn/60" style={{ height: `${idle}%` }} />
                  <span className="w-full rounded-sm bg-foreground" style={{ height: `${work}%` }} />
                </div>
                <span className="text-[10px] text-muted-foreground">{["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"][i]}</span>
              </div>
            ))}
          </div>
        </Tile>
      </ul>
    </div>
  );
}

function Node({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-full bg-background px-4 py-2 text-sm shadow-[0_1px_2px_rgb(0_0_0/0.05)]">{children}</span>
  );
}

function Wire() {
  return (
    <span aria-hidden="true" className="relative h-6 w-px bg-border sm:h-px sm:w-10 lg:w-14">
      <span className="absolute top-1/2 left-1/2 size-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand" />
    </span>
  );
}
