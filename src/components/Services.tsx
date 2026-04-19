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
    description: "Если нужно разобраться в конкретной ситуации здесь и сейчас. Один запрос — один час работы. Без обязательств продолжать.",
    cta: "Записаться на сессию",
    ariaLabel: "Записаться на разовую консультацию психолога-коуча — 4 000 ₽, 60 минут",
    popular: false,
  },
  {
    title: "Пакет 4 сессии",
    price: "14 400 ₽",
    period: "/ месяц",
    description: "Для тех, кто хочет системного результата, а не разовой беседы. Четыре сессии — достаточно, чтобы сдвинуться с места и увидеть закономерности.",
    cta: "Начать работу",
    ariaLabel: "Записаться на пакет 4 сессии с психологом-коучем онлайн — 14 400 ₽ в месяц",
    popular: true,
  },
  {
    title: "Пакет 8 сессий",
    price: "27 000 ₽",
    period: "/ 2 месяца",
    description: "8 сессий за 2 месяца. Для тех, кто готов работать серьёзно — с тревогой, отношениями, выгоранием, жизненными развилками. Здесь происходят реальные изменения.",
    cta: "Хочу глубокую работу",
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

        <div className="flex flex-col gap-4 max-w-2xl mx-auto">
          {services.map((s) => (
            <div
              key={s.title}
              className="relative rounded-2xl border p-6 flex flex-col sm:flex-row sm:items-center gap-5 transition-all duration-300"
              style={{
                borderColor: s.popular ? 'rgba(201,168,76,0.55)' : 'rgba(255,255,255,0.12)',
                background: s.popular ? 'rgba(201,168,76,0.07)' : 'rgba(255,255,255,0.04)',
                borderRadius: '16px',
              }}
            >
              {s.popular && (
                <span className="absolute top-5 right-5 font-mono text-[10px] uppercase tracking-widest text-[#c9a84c] border border-[#c9a84c]/50 px-2.5 py-0.5 rounded-full">
                  Популярно
                </span>
              )}

              <div className="flex-1 flex flex-col gap-2">
                <p className="font-mono text-[11px] uppercase tracking-widest text-foreground/40">{s.title}</p>
                <div className="flex items-baseline gap-2">
                  <span className="font-sentient text-3xl text-foreground/90">{s.price}</span>
                  {s.period && <span className="font-mono text-xs text-foreground/35">{s.period}</span>}
                </div>
                <p className="text-sm text-foreground/55 leading-relaxed">{s.description}</p>
              </div>

              <div className="shrink-0 w-full sm:w-44">
                <MagneticWrapper>
                  <a href="#contact">
                    <button
                      aria-label={s.ariaLabel}
                      className="w-full rounded-xl px-4 py-3 font-mono text-xs uppercase tracking-widest transition-all duration-300 border"
                      style={{
                        color: '#c9a84c',
                        borderColor: 'rgba(201,168,76,0.45)',
                        background: 'rgba(201,168,76,0.06)',
                      }}
                      onMouseEnter={e => {
                        const el = e.currentTarget;
                        el.style.borderColor = 'rgba(201,168,76,0.9)';
                        el.style.background = 'rgba(201,168,76,0.12)';
                        el.style.boxShadow = '0 0 18px 4px rgba(201,168,76,0.25)';
                        el.style.color = '#e8c76a';
                      }}
                      onMouseLeave={e => {
                        const el = e.currentTarget;
                        el.style.borderColor = 'rgba(201,168,76,0.45)';
                        el.style.background = 'rgba(201,168,76,0.06)';
                        el.style.boxShadow = 'none';
                        el.style.color = '#c9a84c';
                      }}
                    >
                      {s.cta}
                    </button>
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