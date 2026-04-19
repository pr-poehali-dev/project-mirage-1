import { Button } from "@/components/ui/button";
import { useCounter } from "@/hooks/useCounter";
import { useParallax } from "@/hooks/useParallax";
import { MagneticWrapper } from "@/components/MagneticWrapper";

function StatCounter({ target, suffix, label }: { target: number; suffix: string; label: string }) {
  const { value, ref } = useCounter(target);
  return (
    <div className="flex flex-col gap-1">
      <span ref={ref as React.RefObject<HTMLSpanElement>} className="font-sentient text-xl md:text-2xl text-[#c9a84c]">
        {value}{suffix}
      </span>
      <span className="font-mono text-xs text-[#c9a84c]/60 uppercase">{label}</span>
    </div>
  );
}

export function About() {
  const photoRef = useParallax(0.025);
  return (
    <section id="about" className="relative z-10 py-14 md:py-20" style={{background: 'rgba(0,38,46,0.35)', backdropFilter: 'blur(1px)'}}>
      <div className="container">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-20 items-center max-w-5xl mx-auto">
        {/* Фото */}
        <div className="relative">
          <div className="absolute -inset-3 rounded-3xl opacity-60 blur-2xl"
            style={{ background: 'radial-gradient(ellipse at center, rgba(201,168,76,0.35) 0%, rgba(201,168,76,0.1) 50%, transparent 75%)' }}
          />
          <div className="absolute -inset-[1px] rounded-3xl"
            style={{ background: 'linear-gradient(135deg, rgba(201,168,76,0.6) 0%, transparent 40%, transparent 60%, rgba(201,168,76,0.4) 100%)' }}
          />
          <img
            ref={photoRef as React.RefObject<HTMLImageElement>}
            src="https://cdn.poehali.dev/projects/4c5d8224-14ac-4df6-8232-895419dd60d5/bucket/74a42d7a-c781-437d-9022-9677ddd7b994.png"
            alt="Ольга Разумова — психолог-коуч онлайн, Владивосток"
            className="relative rounded-3xl w-full aspect-[3/4] object-cover"
          />
        </div>

        {/* Текст */}
        <div className="flex flex-col gap-6">
          <p className="font-mono text-sm uppercase text-[#c9a84c]/80 tracking-widest">
            Обо мне
          </p>
          <h2 className="font-sentient text-3xl md:text-5xl leading-tight">
            Ольга Разумова
          </h2>
          <p className="font-mono text-sm text-[#c9a84c]/60 uppercase tracking-wider">
            Психолог · Коуч
          </p>

          <p className="text-foreground/80 leading-relaxed text-balance text-sm md:text-lg">
            Я помогаю взрослым выйти из состояния хронической усталости, тревоги
            и внутреннего конфликта — туда, где снова появляется энергия и ясность.
          </p>
          <p className="text-foreground/80 leading-relaxed text-balance text-sm md:text-lg">
            В работе использую <span className="text-foreground">интегративный подход</span> —
            сочетаю разные методы под конкретного человека, без шаблонов и готовых ответов.
            Моя задача — не дать совет, а помочь вам услышать себя.
          </p>

          {/* Анимированные счётчики */}
          <div className="grid grid-cols-3 gap-4 mt-4 border-t border-foreground/10 pt-6">
            <StatCounter target={5} suffix=" лет" label="практики" />
            <StatCounter target={100} suffix="+" label="клиентов" />
            <div className="flex flex-col gap-1">
              <span className="font-sentient text-xl md:text-2xl text-[#c9a84c]">МЦПО</span>
              <span className="font-mono text-xs text-[#c9a84c]/60 uppercase">диплом психолога</span>
            </div>
          </div>
        </div>
      </div>
        <div className="flex justify-center mt-10">
          <MagneticWrapper>
            <a href="#contact">
              <Button>[Узнать обо мне подробнее →]</Button>
            </a>
          </MagneticWrapper>
        </div>
      </div>
    </section>
  );
}