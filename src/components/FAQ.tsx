import { useState } from "react";
import Icon from "@/components/ui/icon";
import { Button } from "@/components/ui/button";
import { MagneticWrapper } from "@/components/MagneticWrapper";

const faqs = [
  {
    q: "Я никогда не обращалась к психологу. С чего начать?",
    a: "С одного сообщения в Telegram. Напиши пару строк — что беспокоит,\nи мы разберёмся вместе, подходит ли тебе этот формат. Никаких обязательств.",
  },
  {
    q: "Чем психолог отличается от коуча? Что именно ты делаешь?",
    a: "Психолог работает с причинами — почему так. Коуч — с движением вперёд.\nЯ совмещаю оба подхода: начинаем там, где нужно тебе, не там, где удобно мне.",
  },
  {
    q: "Как проходит онлайн-сессия?",
    a: "Через видеосвязь — Zoom, Telegram или другой удобный сервис.\n50–60 минут. Нужны только телефон или ноутбук и место,\nгде тебя не побеспокоят.",
  },
  {
    q: "Что если мне не подойдёт?",
    a: "После первой сессии ты сама почувствуешь — твоё это или нет.\nНикакого давления продолжать. Пакет оплачивается заранее,\nно первая встреча — всегда отдельно.",
  },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section
      className="relative z-10 py-14 md:py-20"
      style={{ background: 'rgba(0,38,46,0.35)', backdropFilter: 'blur(1px)' }}
    >
      <div className="container">
        <p className="font-mono text-sm uppercase text-[#c9a84c]/80 text-center tracking-widest mb-4">
          FAQ
        </p>
        <h2 className="font-sentient text-3xl md:text-5xl text-center mb-14">
          Частые вопросы
        </h2>

        <div className="max-w-2xl mx-auto flex flex-col gap-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="border rounded-2xl overflow-hidden transition-all duration-300"
              style={{
                borderColor: open === i ? 'rgba(201,168,76,0.4)' : 'rgba(255,255,255,0.1)',
                background: open === i ? 'rgba(255,255,255,0.07)' : 'rgba(255,255,255,0.03)',
              }}
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between gap-4 px-4 py-4 text-left"
              >
                <span className="font-sentient text-base md:text-lg text-foreground">{faq.q}</span>
                <span
                  className="flex-shrink-0 transition-transform duration-300"
                  style={{ transform: open === i ? 'rotate(45deg)' : 'rotate(0deg)' }}
                >
                  <Icon name="Plus" size={18} className="text-[#c9a84c]" />
                </span>
              </button>

              <div
                className="overflow-hidden transition-all duration-300"
                style={{ maxHeight: open === i ? '300px' : '0px' }}
              >
                <p className="font-mono text-base text-foreground/70 leading-relaxed px-4 pb-5 whitespace-pre-line">
                  {faq.a}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-10">
          <MagneticWrapper>
            <a href="#contact">
              <Button>Записаться бесплатно →</Button>
            </a>
          </MagneticWrapper>
        </div>
      </div>
    </section>
  );
}