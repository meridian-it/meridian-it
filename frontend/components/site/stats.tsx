const STATS = [
  { value: "200 000 ₽", label: "экономии в месяц у клиента на одном проекте" },
  { value: "2 раза/сек", label: "система проверяет оборудование" },
  { value: "390 000", label: "товаров обновляются без участия людей" },
];

export function Stats() {
  return (
    <section aria-label="Результаты в цифрах" className="container-site">
      <dl className="reveal grid border-y border-border sm:grid-cols-3">
        {STATS.map((s, i) => (
          <div
            key={s.value}
            className={`flex flex-col-reverse py-8 sm:px-8 sm:py-12 ${i > 0 ? "border-t border-border sm:border-t-0 sm:border-l" : ""} ${i === 0 ? "sm:pl-0" : ""}`}
          >
            <dt className="mt-4 text-sm text-muted-foreground">{s.label}</dt>
            <dd className="text-[clamp(2.25rem,4.5vw,3.5rem)] leading-none font-normal tracking-[-0.04em] tabular-nums">
              {s.value}
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
