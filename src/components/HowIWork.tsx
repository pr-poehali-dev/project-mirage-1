import { Button } from "@/components/ui/button";
import { useReveal } from "@/hooks/useReveal";

const steps = [
  {
    number: "01",
    title: "Знакомство",
    text: "Бесплатная встреча 30 минут — вы рассказываете, что происходит. Я слушаю без оценок. Вместе решаем, подходим ли друг другу.",
  },
  {
    number: "02",
    title: "Первая сессия",
    text: "Глубже разбираемся с запросом. Я задаю вопросы, которые помогают увидеть картину целиком — не только симптом, но и его корень.",
  },
  {
    number: "03",
    title: "Регулярная работа",
    text: "Встречаемся раз в неделю — онлайн или очно во Владивостоке. Каждая сессия строится на том, что важно именно сейчас.",
  },
  {
    number: "04",
    title: "Результат",
    text: "Постепенно приходит ясность, появляются силы, меняется отношение к себе и другим. Вы сами замечаете разницу.",
  },
];

export function HowIWork() {
  const ref = useReveal();
  return (
    <section
      ref={ref}
      id="approach"
      className="relative z-10 py-24 md:py-32"
      style={{ background: 'rgba(0,38,46,0.75)', backdropFilter: 'blur(12px)' }}
    >
      <div className="container">
        <p className="font-mono text-sm uppercase text-[#c9a84c]/80 text-center tracking-widest mb-4">
          Подход
        </p>
        <h2 className="font-sentient text-4xl md:text-5xl text-center mb-16">
          Как я работаю
        </h2>

        <div className="max-w-3xl mx-auto flex flex-col gap-0">
          {steps.map((step, i) => (
            <div key={step.number} className="flex gap-6 md:gap-10 group">
              {/* Линия-таймлайн */}
              <div className="flex flex-col items-center">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 border transition-all duration-300"
                  style={{
                    borderColor: 'rgba(201,168,76,0.4)',
                    background: 'rgba(201,168,76,0.08)',
                  }}
                >
                  <span className="font-mono text-xs text-[#c9a84c]">{step.number}</span>
                </div>
                {i < steps.length - 1 && (
                  <div
                    className="w-px flex-1 my-2"
                    style={{ background: 'linear-gradient(to bottom, rgba(201,168,76,0.3), rgba(201,168,76,0.05))' }}
                  />
                )}
              </div>

              {/* Контент */}
              <div className="pb-10 flex-1">
                <h3 className="font-sentient text-2xl text-[#c9a84c] mb-3">{step.title}</h3>
                <p className="font-mono text-base text-foreground/70 leading-relaxed">{step.text}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-4">
          <a href="#contact">
            <Button>[Записаться бесплатно →]</Button>
          </a>
        </div>
      </div>
    </section>
  );
}