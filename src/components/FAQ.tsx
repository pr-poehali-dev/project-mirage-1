import { useState } from "react";
import Icon from "@/components/ui/icon";
import { useReveal } from "@/hooks/useReveal";

const faqs = [
  {
    q: "Как проходит первая встреча?",
    a: "Первая встреча бесплатная и длится 30 минут. Вы рассказываете, что вас беспокоит, я слушаю и задаю вопросы. В конце мы вместе решаем, хотим ли продолжить работу. Никаких обязательств.",
  },
  {
    q: "Онлайн или очно — есть ли разница?",
    a: "По эффективности — нет. Онлайн-сессии проходят в видеозвонке, вы можете находиться дома в комфортной обстановке. Очные встречи — во Владивостоке. Формат выбираете вы.",
  },
  {
    q: "Сколько сессий потребуется?",
    a: "Зависит от запроса. Конкретный вопрос можно проработать за 4–6 сессий. Более глубокие изменения — привычки, отношения, самооценка — обычно требуют 2–4 месяца регулярной работы.",
  },
  {
    q: "Всё останется конфиденциальным?",
    a: "Да. Всё, что вы рассказываете на сессии, остаётся между нами. Я придерживаюсь профессиональной этики психолога и не разглашаю информацию о клиентах.",
  },
  {
    q: "Что если мне станет хуже в процессе?",
    a: "Это нормальная часть работы — иногда, когда начинаешь смотреть на больные места, становится тяжелее. Я работаю бережно и в вашем темпе. Если что-то идёт не так — мы обсуждаем это прямо на сессии.",
  },
  {
    q: "Как оплатить и можно ли перенести сессию?",
    a: "Оплата — переводом на карту перед сессией. Перенести встречу можно за 24 часа до её начала. Если предупредить позже — сессия считается проведённой.",
  },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(null);
  const ref = useReveal();

  return (
    <section
      ref={ref}
      className="relative z-10 py-24 md:py-32"
      style={{ background: 'rgba(0,48,57,0.35)', backdropFilter: 'blur(1px)' }}
    >
      <div className="container">
        <p className="font-mono text-sm uppercase text-[#c9a84c]/80 text-center tracking-widest mb-4">
          FAQ
        </p>
        <h2 className="font-sentient text-4xl md:text-5xl text-center mb-14">
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
                className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
              >
                <span className="font-sentient text-lg text-foreground">{faq.q}</span>
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
                <p className="font-mono text-base text-foreground/70 leading-relaxed px-6 pb-6">
                  {faq.a}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}