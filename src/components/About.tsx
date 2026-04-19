import { Button } from "@/components/ui/button";
import { useParallax } from "@/hooks/useParallax";
import { MagneticWrapper } from "@/components/MagneticWrapper";

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
            alt="Ольга Разумова — психолог-коуч, Владивосток"
            className="relative rounded-3xl w-full aspect-[3/4] object-cover"
          />
        </div>

        {/* Текст */}
        <div className="flex flex-col gap-6">
          <p className="font-mono text-sm uppercase text-[#c9a84c]/80 tracking-widest">
            Психолог · Коуч · Владивосток
          </p>
          <h2 className="font-sentient text-3xl md:text-5xl leading-tight">
            Работаю с людьми, которые хотят изменений —
            но не знают, с чего начать.
          </h2>
          <p className="font-mono text-sm text-[#c9a84c]/60 uppercase tracking-wider">
            Психолог, коуч. Практикую онлайн.
          </p>

          <p className="text-foreground/80 leading-relaxed text-sm md:text-base">
            Мне близки люди, которые думают — и чувствуют одновременно.
            Которые застряли не потому что слабые, а потому что слишком долго
            тянули всё сами. Моя задача — не советовать, а помочь тебе
            услышать себя.
          </p>
          <p className="text-foreground/80 leading-relaxed text-sm md:text-base">
            В работе соединяю психологию и коучинг: иногда нужно разобраться
            в прошлом, иногда — просто определить следующий шаг.
            Зависит от тебя и от запроса.
          </p>


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