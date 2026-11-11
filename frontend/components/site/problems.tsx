import { SectionHeading } from "./ui";

const PROBLEMS = [
  {
    title: "Узнаёте о проблеме, когда уже поздно",
    text: "Оборудование простаивает, сырьё закончилось, заказ потерялся, а сообщают об этом через час или на следующий день.",
  },
  {
    title: "Данные в Excel, чатах и головах",
    text: "Цены в одной таблице, остатки в другой, договорённости в переписке. Единой картины нет ни у кого.",
  },
  {
    title: "Часы уходят на ручную рутину",
    text: "Сотрудники переносят данные, сверяют прайсы и собирают отчёты вместо того, чтобы работать с клиентами.",
  },
  {
    title: "Деньги утекают, но непонятно где",
    text: "Простои, холостые часы, ошибки в ценах. По отдельности мелочи, а вместе сотни тысяч в месяц.",
  },
  {
    title: "Всё держится на одном человеке",
    text: "Ключевой сотрудник ушёл в отпуск, и процесс встал, потому что никто больше не знает, как всё устроено.",
  },
  {
    title: "Без вашего звонка ничего не двигается",
    text: "Вы не управляете бизнесом, а работаете диспетчером и постоянно всё перепроверяете.",
  },
];

export function Problems() {
  return (
    <section id="problems" className="py-28 sm:py-36">
      <div className="container-site grid gap-12 lg:grid-cols-[1fr_1.25fr] lg:gap-20">
        <SectionHeading
          label="Знакомо?"
          title="Беспорядок в процессах обходится дороже, чем кажется"
          text="Если вы узнали себя хотя бы в двух пунктах, бизнес уже вырос из ручного управления. Мы делаем так, чтобы он работал прозрачно и предсказуемо, даже когда вас нет на месте."
          className="lg:sticky lg:top-28 lg:self-start"
        />

        <ol className="border-t border-border">
          {PROBLEMS.map((p, i) => (
            <li key={p.title} className="reveal grid grid-cols-[2.5rem_1fr] gap-x-2 border-b border-border py-6 sm:py-7">
              <span className="pt-0.5 text-sm text-muted-foreground tabular-nums">{String(i + 1).padStart(2, "0")}</span>
              <div>
                <h3 className="text-lg tracking-tight sm:text-xl">{p.title}</h3>
                <p className="mt-1.5 text-[15px] leading-relaxed text-muted-foreground">{p.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
