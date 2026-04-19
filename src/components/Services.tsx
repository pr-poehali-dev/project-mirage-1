import { Button } from "@/components/ui/button";
import { MagneticWrapper } from "@/components/MagneticWrapper";

const services = [
  {
    title: "Разовая сессия",
    price: "2 500 ₽",
    period: "/ 50 минут",
    description: "Если нужно разобраться в конкретной ситуации здесь и сейчас. Один запрос — один час работы. Без обязательств продолжать.",
    cta: "Записаться на сессию",
    ariaLabel: "Записаться на разовую сессию с психологом-коучем — 2 500 ₽, 50 минут",
    popular: false,
  },
  {
    title: "Пакет 4 сессии",
    price: "9 000 ₽",
    period: "/ 4 встречи",
    description: "Для тех, кто хочет системного результата, а не разовой беседы. Четыре сессии — достаточно, чтобы сдвинуться с места и увидеть закономерности.",
    cta: "Начать работу",
    ariaLabel: "Записаться на пакет 4 сессии с психологом-коучем — 9 000 ₽",
    popular: false,
  },
  {
    title: "Глубокое сопровождение",
    price: "27 000 ₽",
    period: "/ 2 месяца",
    description: "8 сессий за 2 месяца. Для тех, кто готов работать серьёзно — с тревогой, отношениями, выгоранием, жизненными развилками. Здесь происходят реальные изменения.",
    cta: "Хочу глубокую работу",
    ariaLabel: "Записаться на глубокое сопровождение — 27 000 ₽, 2 месяца",
    popular: true,
  },
];

export function Services() {
  return (
    <section id="services" className="relative z-10 py-14 md:py-20" style={{ background: 'rgba(0,38,46,0.35)', backdropFilter: 'blur(1px)' }}>
      <div className="container">
        <p className="font-mono text-sm uppercase text-[#c9a84c]/80 text-center tracking-widest mb-4">
          Формат работы
        </p>
        <h2 className="font-sentient text-4xl md:text-5xl text-center mb-14">
          С чего начать
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
                  ПОПУЛЯРНО
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