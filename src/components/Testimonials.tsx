import { useReveal } from "@/hooks/useReveal";

// Укорачиваем длинные отзывы до читаемого размера
const testimonials = [
  {
    name: "Mila лифт Sv",
    text: "Я в полном восторге от практики с Ольгой! Ольга вернула мне моего «спортсмена». Мы копнули глубинные слои психики, отыскали установки, которые нужно двигать. Благодарна за бережное, тёплое общение!",
  },
  {
    name: "Ольга Груздева",
    text: "Удивительно как она филигранно подсветила мне что стратегия спортсмена меня может вытащить из сложной жизненной ямы. Ещё показала каким может быть мой страт и как перестать его отрицать. Есть о чём подумать.",
  },
  {
    name: "Наталья Лысова",
    text: "Ты чётко вела меня своими вопросами, я погрузилась и в итоге даже примеры привела, которые вроде и знала, но сейчас они точно подсветили мою точку Б.",
  },
  {
    name: "Мария Хозяева",
    text: "Это было так глубоко, так ценно, столько осознаний. Благодаря диагностике я выявила минусы и как их повернуть в плюсы. Ты очень внимательный специалист, твоя включённость поражает.",
  },
  {
    name: "Юлия Плотникова",
    text: "Мы глубоко разобрали мои стратегические лифты. Задание с персонажами оказалось прорывным: ассоциации с героями помогли увидеть, как я повторяю паттерны. Это изменило взгляд на прошлые неудачи.",
  },
  {
    name: "Виктория",
    text: "Я до сих пор не могу отойти от встречи. Олечка, спасибо тебе огромное — ты огонь! Я заново родилась. Знаю, что это только начало.",
  },
];

export function Testimonials() {
  const ref = useReveal();

  return (
    <section ref={ref} className="relative z-10 py-24 md:py-32" style={{ background: "rgba(0,48,57,0.75)", backdropFilter: "blur(12px)" }}>
      <div className="container">
        <p className="font-mono text-sm uppercase text-[#c9a84c]/80 text-center tracking-widest mb-4">
          Отзывы
        </p>
        <h2 className="font-sentient text-4xl md:text-5xl text-center mb-14">
          Что говорят клиенты
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="flex flex-col gap-5 rounded-2xl p-6 border transition-all duration-300"
              style={{
                background: "rgba(255,255,255,0.03)",
                borderColor: "rgba(255,255,255,0.1)",
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLDivElement).style.background = "rgba(255,255,255,0.07)";
                (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(201,168,76,0.35)";
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLDivElement).style.background = "rgba(255,255,255,0.03)";
                (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(255,255,255,0.1)";
              }}
            >
              {/* Кавычка */}
              <span className="font-sentient text-5xl text-[#c9a84c]/30 leading-none select-none">"</span>

              {/* Текст */}
              <p className="text-foreground/80 leading-relaxed text-base flex-1">
                {t.text}
              </p>

              {/* Автор */}
              <div className="flex items-center gap-3 pt-4 border-t border-foreground/10">
                <div className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0 font-sentient text-base text-[#c9a84c]"
                  style={{ background: "rgba(201,168,76,0.1)", border: "1px solid rgba(201,168,76,0.25)" }}
                >
                  {t.name[0]}
                </div>
                <span className="font-mono text-sm text-foreground/60">{t.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
