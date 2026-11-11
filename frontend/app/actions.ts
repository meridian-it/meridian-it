"use server";

export type LeadState = { status: "idle" | "success" | "error"; message?: string };

const clean = (v: FormDataEntryValue | null, max: number) =>
  String(v ?? "")
    .trim()
    .slice(0, max);

export async function sendLead(_prev: LeadState, formData: FormData): Promise<LeadState> {
  // Ловушка для ботов: настоящий человек это поле не видит и не заполняет
  if (clean(formData.get("website"), 200)) return { status: "success" };

  const name = clean(formData.get("name"), 100);
  const contact = clean(formData.get("contact"), 120);
  const message = clean(formData.get("message"), 2000);

  if (!name || !contact) {
    return { status: "error", message: "Укажите имя и как с вами связаться." };
  }

  const text = [
    "🟦 Новая заявка с сайта Meridian IT",
    `Имя: ${name}`,
    `Контакт: ${contact}`,
    message ? `Задача: ${message}` : null,
  ]
    .filter(Boolean)
    .join("\n");

  const token = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;

  if (!token || !chatId) {
    // Telegram не настроен: заявка попадает только в логи сервера
    console.warn("[lead] TELEGRAM_BOT_TOKEN / TELEGRAM_CHAT_ID не заданы, заявка:\n" + text);
    return { status: "success" };
  }

  try {
    const res = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ chat_id: chatId, text }),
      signal: AbortSignal.timeout(8000),
    });
    if (!res.ok) throw new Error(`Telegram ответил ${res.status}`);
    return { status: "success" };
  } catch (err) {
    console.error("[lead] не удалось отправить заявку", err);
    return { status: "error", message: "Не получилось отправить заявку. Попробуйте ещё раз через минуту." };
  }
}
