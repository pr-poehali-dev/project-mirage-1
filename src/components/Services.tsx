import { Button } from "@/components/ui/button";

const services = [
  {
    title: "Знакомство",
    price: "Бесплатно",
    period: null,
    description: "30 минут. Рассказываете, что происходит. Без обязательств. Просто поговорим.",
    cta: "Записаться →",
    popular: false,
    highlight: false,
  },
  {
    title: "Разовая сессия",
    price: "2 500 ₽",
    period: "/ 50 мин",
    description: "Онлайн или очно. Подходит для первичной консультации или разового вопроса.",
    cta: "Начать →",
    popular: false,
    highlight: false,
  },
  {
    title: "Пакет 4 сессии",
    price: "9 000 ₽",
    period: "/ месяц",
    description: "Месяц работы. Скидка 10%. Оптимально для разбора конкретного запроса.",
    cta: "Начать →",
    popular: true,
    highlight: true,
  },
  {
    title: "Пакет 8 сессий",
    price: "17 000 ₽",
    period: "/ 2 месяца",
    description: "Глубокая работа с запросом. Максимальный результат. Экономия 15%.",
    cta: "Начать →",
    popular: false,
    highlight: false,
  },
];

export function Services() {
  return (
    <section id="services" className="relative z-10 py-24 md:py-32" style={{background: 'rgba(0,48,57,0.95)'}}>
      <div className="container">
      <p className="font-mono text-xs uppercase text-foreground/40 text-center tracking-widest mb-4">
        Услуги
      </p>
      <h2 className="font-sentient text-4xl md:text-5xl text-center mb-14">
        Выберите свой формат
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-3xl mx-auto">
        {services.map((s) => (
          <div
            key={s.title}
            className={`relative rounded-2xl border p-6 flex flex-col gap-4 transition-colors ${
              s.highlight
                ? "border-[#4a7c6f] bg-[#4a7c6f]/10"
                : "border-foreground/10 bg-foreground/[0.03] hover:bg-foreground/[0.06]"
            }`}
          >
            {s.popular && (
              <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#4a7c6f] text-white font-mono text-xs px-4 py-1 rounded-full uppercase tracking-wider">
                Популярный
              </span>
            )}

            <h3 className="font-mono text-xs uppercase tracking-widest text-foreground/70">
              {s.title}
            </h3>

            <div className="border-b border-foreground/10 pb-4">
              <span className="font-sentient text-2xl">{s.price}</span>
              {s.period && (
                <span className="font-mono text-sm text-foreground/40 ml-2">{s.period}</span>
              )}
            </div>

            <p className="font-mono text-sm text-foreground/50 leading-relaxed flex-1">
              {s.description}
            </p>

            <a href="#contact">
              <Button
                className={`w-full ${
                  s.highlight
                    ? "bg-[#4a7c6f] hover:bg-[#4a7c6f]/80 text-white border-0"
                    : ""
                }`}
                variant={s.highlight ? "default" : "outline"}
              >
                {s.cta}
              </Button>
            </a>
          </div>
        ))}
      </div>
      </div>
    </section>
  );
}