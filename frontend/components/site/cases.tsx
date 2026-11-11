import { Check, Building2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { SectionHeading } from "./ui";

type Case = {
  label: string;
  title: string;
  task: string;
  solution: string[];
  metrics: { value: string; label: string }[];
  window: { title: string; body: React.ReactNode };
  frame: string;
};

const CASES: Case[] = [
  {
    label: "Производство · мониторинг",
    title: "Мельницы под контролем камер",
    task: "Сотрудники вручную следили, чтобы в мельницах не кончалось сырьё. Стоило отвлечься, и мельница крутилась вхолостую или стояла: простои, износ, потерянная выработка.",
    solution: [
      "Подключились к уже установленным IP-камерам",
      "Компьютерное зрение видит, есть ли сырьё и работает ли привод",
      "Push на телефон и голосовое оповещение в цеху",
      "Онлайн-панель и отчёты для владельца",
    ],
    metrics: [
      { value: "−200 000 ₽", label: "расходов в месяц" },
      { value: "2 раза/сек", label: "проверка мельницы" },
      { value: "0 ₽", label: "на новые камеры" },
    ],
    window: { title: "Мельницы · панель владельца", body: <MillsWindow /> },
    frame: "bg-[radial-gradient(120%_120%_at_0%_0%,#a5d8ff_0%,#38bdf8_30%,#1e3fd8_70%,#0f1f7a_100%)]",
  },
  {
    label: "Оптовая торговля · e-commerce",
    title: "B2B-платформа для поставщика IT-оборудования",
    task: "Сотни тысяч позиций, цены и остатки меняются каждый день. Вести такой каталог вручную и считать наценки для опта и розницы было невозможно.",
    solution: [
      "Каталог, цены и остатки сами приходят от поставщика",
      "Четыре типа цен и правила наценки по каждому поставщику",
      "Регистрация компании по ИНН, реквизиты из ЕГРЮЛ",
      "Коммерческие предложения для клиентов в пару кликов",
    ],
    metrics: [
      { value: "390 000", label: "товаров в каталоге" },
      { value: "30 мин", label: "обновление остатков" },
      { value: "0", label: "прайсов вручную" },
    ],
    window: { title: "Каталог · синхронизация", body: <CatalogWindow /> },
    frame: "bg-[radial-gradient(120%_120%_at_100%_100%,#a5d8ff_0%,#38bdf8_25%,#1e3fd8_65%,#0b1240_100%)]",
  },
];

export function Cases() {
  return (
    <section id="cases" className="py-28 sm:py-36">
      <div className="container-site">
        <SectionHeading
          label="Кейсы"
          title="Реальные проекты. Реальные цифры."
          text="Названия клиентов не раскрываем, а результаты показываем как есть."
        />

        <div className="mt-16 flex flex-col gap-24 sm:mt-20 sm:gap-32">
          {CASES.map((c, i) => (
            <article key={c.title} className="grid items-center gap-10 lg:grid-cols-[1fr_1.15fr] lg:gap-16">
              <div className={cn("reveal", i % 2 === 1 && "lg:order-2")}>
                <p className="text-sm text-muted-foreground">{c.label}</p>
                <h3 className="mt-3 text-[clamp(1.75rem,3.4vw,2.5rem)] leading-[1.08] font-normal tracking-[-0.035em] text-balance">
                  {c.title}
                </h3>
                <p className="mt-5 text-[15px] leading-relaxed text-muted-foreground sm:text-base">{c.task}</p>

                <ul className="mt-6 flex flex-col gap-2.5">
                  {c.solution.map((s) => (
                    <li key={s} className="flex gap-2.5 text-[15px]">
                      <Check className="mt-0.5 size-4 shrink-0 text-brand" />
                      {s}
                    </li>
                  ))}
                </ul>

                <dl className="mt-8 flex flex-wrap gap-x-10 gap-y-5">
                  {c.metrics.map((m) => (
                    <div key={m.label} className="flex flex-col-reverse">
                      <dt className="mt-1 text-xs text-muted-foreground">{m.label}</dt>
                      <dd className="text-2xl tracking-tight whitespace-nowrap">{m.value}</dd>
                    </div>
                  ))}
                </dl>
              </div>

              <div className={cn("reveal relative overflow-hidden rounded-2xl p-5 sm:p-10", c.frame, i % 2 === 1 && "lg:order-1")}>
                <div className="overflow-hidden rounded-xl bg-background shadow-[0_24px_60px_-20px_rgb(10_20_80/0.55)]">
                  <div className="flex items-center gap-1.5 border-b border-border px-4 py-3">
                    <span className="size-2.5 rounded-full bg-[#ff5f57]" />
                    <span className="size-2.5 rounded-full bg-[#febc2e]" />
                    <span className="size-2.5 rounded-full bg-[#28c840]" />
                    <span className="ml-3 truncate text-xs text-muted-foreground">{c.window.title}</span>
                  </div>
                  <div className="p-4 sm:p-5">{c.window.body}</div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ——— Содержимое «окон» (вёрстка, а не скриншоты) ——— */

function MillsWindow() {
  const bars = [62, 70, 66, 74, 80, 77, 85, 90, 88, 92, 95, 97];
  return (
    <div className="flex flex-col gap-3 text-[13px]" aria-hidden="true">
      <div className="grid grid-cols-2 gap-3">
        <div className="rounded-xl bg-surface p-3.5">
          <div className="flex flex-wrap items-center justify-between gap-x-2 gap-y-1">
            <span className="font-medium whitespace-nowrap">Мельница 1</span>
            <span className="inline-flex items-center gap-1 text-[11px] text-ok">
              <span className="pulse-dot size-1.5 rounded-full bg-current" /> работает
            </span>
          </div>
          <p className="mt-3 text-[11px] text-muted-foreground">сырьё в желобе</p>
          <div className="mt-1 flex items-end justify-between gap-2">
            <span className="text-2xl tracking-tight">97%</span>
            <span className="flex h-7 items-end gap-0.5">
              {bars.map((h, i) => (
                <span key={i} className="w-1 rounded-sm bg-ok/70" style={{ height: `${h}%` }} />
              ))}
            </span>
          </div>
        </div>
        <div className="rounded-xl bg-warn/10 p-3.5 ring-1 ring-warn/30">
          <div className="flex flex-wrap items-center justify-between gap-x-2 gap-y-1">
            <span className="font-medium whitespace-nowrap">Мельница 2</span>
            <span className="inline-flex items-center gap-1 text-[11px] text-warn">
              <span className="pulse-dot size-1.5 rounded-full bg-current" /> внимание
            </span>
          </div>
          <p className="mt-3 text-[11px] text-muted-foreground">сырьё в желобе</p>
          <span className="mt-1 block text-2xl tracking-tight">12%</span>
          <div className="mt-1.5 h-1 overflow-hidden rounded-full bg-warn/20">
            <div className="h-full w-[12%] bg-warn" />
          </div>
        </div>
      </div>

      <div className="flex items-center gap-3 rounded-xl border border-border p-3">
        <span className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-warn/15 text-base">⚠️</span>
        <div className="min-w-0">
          <p className="font-medium">Сырьё заканчивается · Мельница 2</p>
          <p className="truncate text-muted-foreground">Push отправлен, голосовое оповещение в цеху</p>
        </div>
        <span className="ml-auto shrink-0 text-[11px] text-muted-foreground">сейчас</span>
      </div>

      <div className="grid grid-cols-3 divide-x divide-border rounded-xl bg-surface text-center">
        {[
          ["7 ч 42 мин", "работала"],
          ["18 мин", "стояла"],
          ["0 мин", "вхолостую"],
        ].map(([v, l]) => (
          <div key={l} className="px-2 py-3">
            <p className="font-medium">{v}</p>
            <p className="text-[11px] text-muted-foreground">{l}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function CatalogWindow() {
  return (
    <div className="flex flex-col gap-3 text-[13px]" aria-hidden="true">
      <ul className="divide-y divide-border rounded-xl border border-border">
        {[
          ["Категории", "раз в сутки", true],
          ["Каталог · 390 214 товаров", "раз в сутки", true],
          ["Цены и остатки", "4 мин назад", true],
          ["Фото товаров", "в очереди", false],
        ].map(([label, meta, done]) => (
          <li key={label as string} className="flex items-center justify-between gap-3 px-3.5 py-2.5">
            <span className="flex items-center gap-2">
              <span
                className={cn(
                  "flex size-4 items-center justify-center rounded-full",
                  done ? "bg-ok/15 text-ok" : "bg-brand/10 text-brand"
                )}
              >
                {done ? <Check className="size-2.5" /> : <span className="size-1.5 rounded-full bg-current" />}
              </span>
              {label}
            </span>
            <span className="text-[11px] text-muted-foreground">{meta}</span>
          </li>
        ))}
      </ul>

      <div className="grid grid-cols-2 gap-2">
        {[
          ["Опт · безнал", "12 480 ₽"],
          ["Опт · нал", "12 230 ₽"],
          ["Розница · безнал", "14 990 ₽"],
          ["Розница · нал", "14 690 ₽"],
        ].map(([k, v], i) => (
          <div key={k} className={cn("rounded-xl bg-surface px-3.5 py-2.5", i === 0 && "bg-brand/8 ring-1 ring-brand/25")}>
            <p className="text-[11px] text-muted-foreground">{k}</p>
            <p className="font-medium">{v}</p>
          </div>
        ))}
      </div>

      <div className="flex items-center gap-3 rounded-xl border border-border p-3">
        <span className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-ok/15">
          <Building2 className="size-4 text-ok" />
        </span>
        <div className="min-w-0">
          <p className="font-medium">Организация найдена в ЕГРЮЛ</p>
          <p className="truncate text-muted-foreground">Название, КПП, ОГРН и адрес подставлены</p>
        </div>
      </div>
    </div>
  );
}
