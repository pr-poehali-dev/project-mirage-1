const stats = [
  { value: "5 лет", label: "практики" },
  { value: "100+", label: "клиентов" },
  { value: "МЦПО", label: "диплом психолога" },
];

export function About() {
  return (
    <section id="about" className="relative z-10 py-24 md:py-32" style={{background: 'rgba(0,38,46,0.97)'}}>
      <div className="container">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center max-w-5xl mx-auto">
        {/* Фото */}
        <div className="relative">
          <div className="absolute inset-0 rounded-3xl bg-foreground/5 blur-3xl scale-95" />
          <img
            src="https://cdn.poehali.dev/projects/4c5d8224-14ac-4df6-8232-895419dd60d5/bucket/74a42d7a-c781-437d-9022-9677ddd7b994.png"
            alt="Ольга Разумова — психолог"
            className="relative rounded-3xl w-full aspect-[3/4] object-cover border border-foreground/10"
          />
        </div>

        {/* Текст */}
        <div className="flex flex-col gap-6">
          <p className="font-mono text-sm uppercase text-[#c9a84c]/80 tracking-widest">
            Обо мне
          </p>
          <h2 className="font-sentient text-4xl md:text-5xl leading-tight">
            Ольга Разумова
          </h2>
          <p className="font-mono text-sm text-[#c9a84c]/60 uppercase tracking-wider">
            Психолог · Социальная психология
          </p>

          <p className="text-foreground/80 leading-relaxed text-balance text-base md:text-lg">
            Я помогаю взрослым выйти из состояния хронической усталости, тревоги
            и внутреннего конфликта — туда, где снова появляется энергия и ясность.
          </p>
          <p className="text-foreground/80 leading-relaxed text-balance text-base md:text-lg">
            В работе использую <span className="text-foreground">интегративный подход</span> —
            сочетаю разные методы под конкретного человека, без шаблонов и готовых ответов.
            Моя задача — не дать совет, а помочь вам услышать себя.
          </p>

          {/* Статы */}
          <div className="grid grid-cols-3 gap-4 mt-4 border-t border-foreground/10 pt-6">
            {stats.map((s) => (
              <div key={s.label} className="flex flex-col gap-1">
                <span className="font-sentient text-2xl">{s.value}</span>
                <span className="font-mono text-xs text-[#c9a84c]/60 uppercase">
                  {s.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
      </div>
    </section>
  );
}