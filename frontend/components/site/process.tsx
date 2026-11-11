import { SectionHeading } from "./ui";

const STEPS = [
  {
    title: "Разбираемся в бизнесе",
    text: "Созваниваемся или приезжаем. Смотрим, где теряются время и деньги и что автоматизировать в первую очередь.",
  },
  {
    title: "Предлагаем решение",
    text: "Описываем, что сделаем, сколько это стоит и за какой срок. Считаем, когда вложения окупятся.",
  },
  {
    title: "Разрабатываем",
    text: "Работаем короткими этапами и регулярно показываем результат. Систему можно потрогать задолго до финала.",
  },
  {
    title: "Запускаем и сопровождаем",
    text: "Внедряем, обучаем сотрудников и остаёмся на связи: дорабатываем систему вместе с бизнесом.",
  },
];

const PRINCIPLES = [
  ["Считаем в рублях", "Автоматизация должна окупаться. Если не окупится, честно скажем об этом."],
  ["Используем то, что есть", "Камеры, программы и оборудование, которые уже работают, подключаем, а не меняем."],
  ["Без лишнего", "Делаем то, что решает вашу проблему, а не всё, что можно продать."],
];

export function Process() {
  return (
    <section id="process" className="bg-surface py-28 sm:py-36">
      <div className="container-site">
        <SectionHeading label="Как работаем" title="От первого разговора до системы, которая работает сама" />

        <ol className="mt-16 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((s, i) => (
            <li key={s.title} className="reveal border-t border-foreground/15 pt-6">
              <span className="text-sm text-muted-foreground tabular-nums">Шаг {i + 1}</span>
              <h3 className="mt-6 text-xl tracking-tight">{s.title}</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-muted-foreground">{s.text}</p>
            </li>
          ))}
        </ol>

        <div className="reveal mt-20 grid gap-3 md:grid-cols-3">
          {PRINCIPLES.map(([title, text]) => (
            <div key={title} className="rounded-2xl bg-background p-6 sm:p-7">
              <p className="text-lg tracking-tight">{title}</p>
              <p className="mt-2 text-[15px] leading-relaxed text-muted-foreground">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
