"use client";

import { useActionState } from "react";
import { ChevronRight, CheckCircle2, Loader2 } from "lucide-react";
import { sendLead, type LeadState } from "@/app/actions";

const field =
  "w-full rounded-xl border border-transparent bg-background px-4 py-3 text-[15px] text-foreground shadow-[0_1px_2px_rgb(0_0_0/0.04)] placeholder:text-muted-foreground/70 transition-colors outline-none focus:border-ring/40 focus:ring-3 focus:ring-ring/15";

export function ContactForm() {
  const [state, action, pending] = useActionState<LeadState, FormData>(sendLead, { status: "idle" });

  if (state.status === "success") {
    return (
      <div className="flex min-h-[24rem] flex-col items-center justify-center text-center" role="status">
        <CheckCircle2 className="size-10 text-ok" strokeWidth={1.5} />
        <p className="mt-5 text-xl tracking-tight">Заявка отправлена</p>
        <p className="mt-2 max-w-xs text-[15px] text-muted-foreground">
          Свяжемся с вами в ближайшее рабочее время, чтобы обсудить задачу.
        </p>
      </div>
    );
  }

  return (
    <form action={action} className="flex flex-col gap-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="flex flex-col gap-2">
          <span className="text-sm">Имя</span>
          <input name="name" required maxLength={100} autoComplete="name" placeholder="Как к вам обращаться" className={field} />
        </label>
        <label className="flex flex-col gap-2">
          <span className="text-sm">Телефон или Telegram</span>
          <input
            name="contact"
            required
            maxLength={120}
            autoComplete="tel"
            placeholder="+7 … или @username"
            className={field}
          />
        </label>
      </div>
      <label className="flex flex-col gap-2">
        <span className="text-sm">Что хотите наладить</span>
        <textarea
          name="message"
          rows={4}
          maxLength={2000}
          placeholder="Например: не видим, сколько простаивает оборудование, а отчёты собираем вручную"
          className={`${field} resize-none`}
        />
      </label>

      {/* honeypot */}
      <input type="text" name="website" tabIndex={-1} autoComplete="off" aria-hidden="true" className="hidden" />

      {state.status === "error" && (
        <p role="alert" className="text-sm text-destructive">
          {state.message}
        </p>
      )}

      <button
        type="submit"
        disabled={pending}
        className="group mt-2 inline-flex h-11 items-center justify-center gap-1.5 rounded-full bg-foreground px-6 text-[15px] font-medium text-background transition-colors hover:bg-foreground/85 disabled:opacity-60"
      >
        {pending ? (
          <>
            <Loader2 className="size-4 animate-spin" /> Отправляем…
          </>
        ) : (
          <>
            Отправить заявку
            <ChevronRight className="size-4 transition-transform group-hover:translate-x-0.5" />
          </>
        )}
      </button>
      <p className="text-xs leading-relaxed text-muted-foreground">
        Нажимая кнопку, вы соглашаетесь на обработку персональных данных для ответа на заявку.
      </p>
    </form>
  );
}
