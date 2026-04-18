import { useState } from "react";
import { Button } from "@/components/ui/button";
import { MagneticWrapper } from "@/components/MagneticWrapper";

const services = [
  {
    title: "Знакомство",
    price: "Бесплатно",
    period: null,
    description: "30 минут. Рассказываете, что происходит. Без обязательств. Просто поговорим.",
    cta: "Записаться →",
    ariaLabel: "Записаться на бесплатную вводную консультацию психолога онлайн",
    popular: false,
    highlight: false,
    size: "small",
  },
  {
    title: "Разовая сессия",
    price: "4 000 ₽",
    period: "/ 60 мин",
    description: "Онлайн или очно. Подходит для первичной консультации или разового вопроса.",
    cta: "Начать →",
    ariaLabel: "Записаться на разовую консультацию психолога-коуча — 4 000 ₽, 60 минут",
    popular: false,
    highlight: false,
    size: "small",
  },
  {
    title: "Пакет 4 сессии",
    price: "14 400 ₽",
    period: "/ месяц",
    description: "Месяц работы. Скидка 10%. Оптимально для разбора конкретного запроса. Онлайн или очно.",
    cta: "Выбрать тариф →",
    ariaLabel: "Записаться на пакет 4 сессии с психологом-коучем онлайн — 14 400 ₽ в месяц",
    popular: true,
    highlight: true,
    size: "featured",
  },
  {
    title: "Пакет 8 сессий",
    price: "27 000 ₽",
    period: "/ 2 месяца",
    description: "Глубокая работа с запросом. Максимальный результат. Экономия 15%.",
    cta: "Выбрать тариф →",
    ariaLabel: "Записаться на пакет 8 сессий с психологом-коучем — 27 000 ₽, глубокая работа",
    popular: false,
    highlight: false,
    size: "large",
  },
];

export function Services() {
  const [hovered, setHovered] = useState<number | null>(null);

  const small = services.filter(s => s.size === "small");
  const featured = services.find(s => s.size === "featured")!;
  const large = services.find(s => s.size === "large")!;
  const featuredIdx = services.indexOf(featured);
  const largeIdx = services.indexOf(large);

  return (
    <section id="services" className="relative z-10 py-14 md:py-20" style={{background: 'rgba(0,38,46,0.35)', backdropFilter: 'blur(1px)'}}>
      <div className="container">
        <p className="font-mono text-sm uppercase text-[#c9a84c]/80 text-center tracking-widest mb-4">
          Услуги
        </p>
        <h2 className="font-sentient text-4xl md:text-5xl text-center mb-14">
          Выберите свой формат
        </h2>

        <div className="flex flex-col gap-4 max-w-3xl mx-auto">

          {/* Верхний ряд — две маленькие карточки */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {small.map((s) => {
              const i = services.indexOf(s);
              return (
                <div
                  key={s.title}
                  onMouseEnter={() => setHovered(i)}
                  onMouseLeave={() => setHovered(null)}
                  className="relative rounded-2xl border p-5 flex flex-col gap-3 transition-all duration-300"
                  style={{
                    borderColor: hovered === i ? 'rgba(201,168,76,0.5)' : 'rgba(255,255,255,0.12)',
                    background: hovered === i ? 'rgba(255,255,255,0.1)' : 'rgba(255,255,255,0.05)',
                  }}
                >
                  <h3 className="font-mono text-xs uppercase tracking-widest text-foreground/50">{s.title}</h3>
                  <div>
                    <span className="font-sentient text-2xl text-foreground/90">{s.price}</span>
                    {s.period && <span className="font-mono text-xs text-foreground/35 ml-2">{s.period}</span>}
                  </div>
                  <p className="font-mono text-xs text-foreground/55 leading-relaxed flex-1">{s.description}</p>
                  <MagneticWrapper>
                    <a href="#contact">
                      <Button variant="outline" className="w-full text-sm" aria-label={s.ariaLabel}>
                        {s.cta}
                      </Button>
                    </a>
                  </MagneticWrapper>
                </div>
              );
            })}
          </div>

          {/* Большая акцентная карточка */}
          <div
            onMouseEnter={() => setHovered(featuredIdx)}
            onMouseLeave={() => setHovered(null)}
            className="relative rounded-2xl border p-6 md:p-8 flex flex-col md:flex-row md:items-center gap-6 transition-all duration-300 overflow-hidden"
            style={{
              borderColor: hovered === featuredIdx ? 'rgba(74,124,111,1)' : 'rgba(74,124,111,0.7)',
              background: hovered === featuredIdx ? 'rgba(74,124,111,0.28)' : 'rgba(74,124,111,0.16)',
            }}
          >
            {/* Декоративное свечение */}
            <div className="absolute -top-10 -right-10 w-48 h-48 rounded-full pointer-events-none"
              style={{ background: 'radial-gradient(circle, rgba(74,124,111,0.35) 0%, transparent 70%)' }}
            />
            <span className="absolute top-4 right-4 bg-[#4a7c6f] text-white font-mono text-xs px-3 py-1 rounded-full uppercase tracking-wider">
              Популярный
            </span>

            <div className="flex-1 flex flex-col gap-3">
              <h3 className="font-mono text-xs uppercase tracking-widest text-[#4a7c6f]">{featured.title}</h3>
              <div className="flex items-baseline gap-2">
                <span className="font-sentient text-4xl md:text-5xl text-white">{featured.price}</span>
                {featured.period && <span className="font-mono text-sm text-foreground/50">{featured.period}</span>}
              </div>
              <p className="font-mono text-sm text-foreground/70 leading-relaxed max-w-sm">{featured.description}</p>
            </div>

            <div className="shrink-0 w-full md:w-48">
              <MagneticWrapper>
                <a href="#contact">
                  <Button
                    className="w-full bg-[#4a7c6f] hover:bg-[#4a7c6f]/80 text-white border-0 h-12 text-base"
                    aria-label={featured.ariaLabel}
                  >
                    {featured.cta}
                  </Button>
                </a>
              </MagneticWrapper>
            </div>
          </div>

          {/* Карточка пакет 8 — золотой акцент */}
          <div
            onMouseEnter={() => setHovered(largeIdx)}
            onMouseLeave={() => setHovered(null)}
            className="relative rounded-2xl border p-5 md:p-6 flex flex-col sm:flex-row sm:items-center gap-5 transition-all duration-300"
            style={{
              borderColor: hovered === largeIdx ? 'rgba(201,168,76,0.7)' : 'rgba(201,168,76,0.3)',
              background: hovered === largeIdx ? 'rgba(201,168,76,0.1)' : 'rgba(201,168,76,0.05)',
            }}
          >
            <div className="flex-1 flex flex-col gap-2">
              <h3 className="font-mono text-xs uppercase tracking-widest text-[#c9a84c]/70">{large.title}</h3>
              <div className="flex items-baseline gap-2">
                <span className="font-sentient text-3xl md:text-4xl text-[#c9a84c]">{large.price}</span>
                {large.period && <span className="font-mono text-sm text-foreground/40">{large.period}</span>}
              </div>
              <p className="font-mono text-sm text-foreground/60 leading-relaxed">{large.description}</p>
            </div>
            <div className="shrink-0 w-full sm:w-44">
              <MagneticWrapper>
                <a href="#contact">
                  <Button
                    variant="outline"
                    className="w-full border-[#c9a84c]/40 hover:border-[#c9a84c]/80 text-[#c9a84c] hover:text-[#c9a84c]"
                    aria-label={large.ariaLabel}
                  >
                    {large.cta}
                  </Button>
                </a>
              </MagneticWrapper>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
