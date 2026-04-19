import { Button } from "@/components/ui/button";
import { MagneticWrapper } from "@/components/MagneticWrapper";

const services = [
  {
    title: "Знакомство",
    price: "Бесплатно",
    period: null,
    description: "30 минут, чтобы понять: подходим ли мы друг другу. Ты — без обязательств. Я — без оценок.",
    cta: "Записаться →",
    ariaLabel: "Записаться на бесплатную вводную консультацию психолога онлайн",
    popular: false,
  },
  {
    title: "Разовая сессия",
    price: "4 000 ₽",
    period: "/ 60 мин",
    description: "Онлайн или очно. Подходит для первичной консультации или разового вопроса.",
    cta: "Начать →",
    ariaLabel: "Записаться на разовую консультацию психолога-коуча — 4 000 ₽, 60 минут",
    popular: false,
  },
  {
    title: "Пакет 4 сессии",
    price: "14 400 ₽",
    period: "/ месяц",
    description: "Месяц работы. Скидка 10%. Оптимально для разбора конкретного запроса. Онлайн или очно.",
    cta: "Выбрать тариф →",
    ariaLabel: "Записаться на пакет 4 сессии с психологом-коучем онлайн — 14 400 ₽ в месяц",
    popular: true,
  },
  {
    title: "Пакет 8 сессий",
    price: "27 000 ₽",
    period: "/ 2 месяца",
    description: "Глубокая работа с запросом. Максимальный результат. Экономия 15%.",
    cta: "Выбрать тариф →",
    ariaLabel: "Записаться на пакет 8 сессий с психологом-коучем — 27 000 ₽, глубокая работа",
    popular: false,
  },
];

export function Services() {
  return (
    <section id="services" className="relative z-10 py-14 md:py-20" style={{ background: 'rgba(0,38,46,0.35)', backdropFilter: 'blur(1px)' }}>
      <div className="container">
        <p className="font-mono text-sm uppercase text-[#c9a84c]/80 text-center tracking-widest mb-4">
          Услуги
        </p>
        <h2 className="font-sentient text-4xl md:text-5xl text-center mb-14">
          Выберите свой формат
        </h2>

        <div className="flex flex-col gap-3 max-w-2xl mx-auto">
          {services.map((s) => (
            <div
              key={s.title}
              className="relative rounded-2xl border p-5 flex flex-col sm:flex-row sm:items-center gap-4 transition-all duration-300"
              style={{
                borderColor: s.popular ? 'rgba(201,168,76,0.6)' : 'rgba(255,255,255,0.12)',
                background: s.popular ? 'rgba(201,168,76,0.08)' : 'rgba(255,255,255,0.04)',
              }}
            >
              {s.popular && (
                <span className="absolute top-4 right-4 font-mono text-[10px] uppercase tracking-widest text-[#c9a84c] border border-[#c9a84c]/40 px-2 py-0.5 rounded-full">
                  Популярный
                </span>
              )}

              <div className="flex-1 flex flex-col gap-1.5">
                <p className="font-mono text-[11px] uppercase tracking-widest text-foreground/40">{s.title}</p>
                <div className="flex items-baseline gap-2">
                  <span className="font-sentient text-3xl text-foreground/90">{s.price}</span>
                  {s.period && <span className="font-mono text-xs text-foreground/35">{s.period}</span>}
                </div>
                <p className="font-mono text-xs text-foreground/55 leading-relaxed">{s.description}</p>
              </div>

              <div className="shrink-0 w-full sm:w-40">
                <MagneticWrapper>
                  <a href="#contact">
                    <Button
                      variant="outline"
                      className="w-full text-sm text-foreground border-foreground/20 hover:border-[#c9a84c]/60 hover:text-foreground"
                      aria-label={s.ariaLabel}
                    >
                      {s.cta}
                    </Button>
                  </a>
                </MagneticWrapper>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}