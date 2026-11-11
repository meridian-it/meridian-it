import { Check } from "lucide-react";
import { ContactForm } from "./contact-form";

const POINTS = [
  "Разберём, где бизнес теряет время и деньги",
  "Предложим, что автоматизировать в первую очередь",
  "Назовём примерные сроки и стоимость",
];

export function Contact() {
  return (
    <section id="contact" className="pb-28 sm:pb-36">
      <div className="container-site">
        <h2 className="reveal mx-auto max-w-3xl text-center text-[clamp(2rem,4.4vw,3.25rem)] leading-[1.04] font-normal tracking-[-0.035em] text-balance">
          Устали от беспорядка? Давайте наведём порядок.
        </h2>

        <div className="reveal mt-14 grid gap-3 lg:grid-cols-[1fr_1.3fr]">
          <div className="flex flex-col rounded-2xl bg-surface p-6 sm:p-8">
            <p className="text-xl tracking-tight">Первый разговор</p>
            <p className="mt-2 text-[15px] leading-relaxed text-muted-foreground">
              Оставьте заявку, и мы свяжемся с вами. На созвоне:
            </p>
            <ul className="mt-6 flex flex-col border-t border-border">
              {POINTS.map((p) => (
                <li key={p} className="flex gap-3 border-b border-border py-3.5 text-[15px]">
                  <Check className="mt-0.5 size-4 shrink-0 text-muted-foreground" />
                  {p}
                </li>
              ))}
            </ul>
            <p className="mt-auto pt-8 text-sm text-muted-foreground">
              Работаем с малым и средним бизнесом. Разбираться в IT не нужно: объясним всё простым языком.
            </p>
          </div>

          <div className="rounded-2xl bg-surface p-6 sm:p-8">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
