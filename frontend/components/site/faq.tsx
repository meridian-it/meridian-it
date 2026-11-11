import { Plus } from "lucide-react";
import { SectionHeading } from "./ui";

const FAQ = [
  {
    q: "Сколько стоит автоматизация?",
    a: "Зависит от задачи: небольшой бот или интеграция стоит одних денег, система учёта с личными кабинетами — других. После разговора называем стоимость и срок до начала работ и показываем, за сколько вложения окупятся.",
  },
  {
    q: "Мы небольшая компания. Это для нас?",
    a: "Да. Мы работаем в первую очередь с малым и средним бизнесом. Чем меньше команда, тем заметнее эффект: каждый час, который не уходит на рутину, сразу отражается на деньгах.",
  },
  {
    q: "Придётся менять программы и оборудование, которые уже есть?",
    a: "Обычно нет. Мы подключаемся к тому, что уже работает: камерам, 1С, сайтам поставщиков, таблицам. Новое ставим, только если без него никак.",
  },
  {
    q: "Какие камеры подходят для компьютерного зрения?",
    a: "Чаще всего подходят камеры, которые у вас уже стоят: обычные IP-камеры. Если обзор или качество картинки не подходят для задачи, подскажем, какую камеру и где поставить.",
  },
  {
    q: "Сколько времени занимает проект?",
    a: "Первые результаты обычно видны через несколько недель. Большие системы делаем по этапам, и каждый этап приносит пользу сам по себе, не нужно ждать финала.",
  },
  {
    q: "Что будет, если после запуска что-то сломается?",
    a: "Мы не исчезаем после сдачи проекта. Сопровождаем систему, исправляем проблемы и дорабатываем её по мере роста бизнеса.",
  },
  {
    q: "Нужно ли разбираться в IT, чтобы с вами работать?",
    a: "Нет. Вы рассказываете, что болит, а мы переводим это в техническое решение и объясняем всё простым языком.",
  },
];

export function Faq() {
  return (
    <section id="faq" className="py-28 sm:py-36">
      <div className="container-site grid gap-12 lg:grid-cols-[1fr_1.25fr] lg:gap-20">
        <SectionHeading
          label="Вопросы"
          title="Частые вопросы"
          text={
            <>
              Не нашли свой?{" "}
              <a href="#contact" className="text-foreground underline decoration-border underline-offset-4 hover:decoration-foreground">
                Напишите нам
              </a>
              , ответим лично.
            </>
          }
          className="lg:sticky lg:top-28 lg:self-start"
        />

        <div className="reveal border-t border-border">
          {FAQ.map((item) => (
            <details key={item.q} name="faq" className="group border-b border-border">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-6 text-left text-lg tracking-tight [&::-webkit-details-marker]:hidden">
                {item.q}
                <Plus className="size-5 shrink-0 text-muted-foreground transition-transform duration-300 group-open:rotate-45" strokeWidth={1.5} />
              </summary>
              <p className="max-w-2xl pb-6 text-[15px] leading-relaxed text-muted-foreground">{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
