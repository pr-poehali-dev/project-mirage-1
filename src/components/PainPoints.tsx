const pains = [
  {
    icon: "😮‍💨",
    title: "Хроническая усталость",
    text: "Формально всё нормально, но сил нет",
  },
  {
    icon: "🫀",
    title: "Тревога без причины",
    text: "Беспокойство, которое сложно объяснить",
  },
  {
    icon: "🪞",
    title: "Кризис идентичности",
    text: "Ощущение, что живёте не своей жизнью",
  },
];

export function PainPoints() {
  return (
    <section className="relative z-10 py-24 md:py-32 bg-white/[0.07] backdrop-blur-sm">
      <div className="container">
      <p className="font-mono text-xs uppercase text-foreground/40 text-center tracking-widest mb-12">
        Узнаёте себя?
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
        {pains.map((pain) => (
          <div
            key={pain.title}
            className="border border-foreground/10 rounded-2xl p-6 flex flex-col gap-3 bg-foreground/[0.03] hover:bg-foreground/[0.06] transition-colors"
          >
            <span className="text-3xl">{pain.icon}</span>
            <h3 className="font-sentient text-lg">{pain.title}</h3>
            <p className="font-mono text-sm text-foreground/50">{pain.text}</p>
          </div>
        ))}
      </div>
      </div>
    </section>
  );
}