const pains = [
  {
    icon: (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-10 h-10">
        <circle cx="24" cy="24" r="20" fill="url(#g1)" opacity="0.15"/>
        <path d="M24 12 C24 12 16 18 16 26 C16 30.4 19.6 34 24 34 C28.4 34 32 30.4 32 26 C32 18 24 12 24 12Z" fill="url(#g1)" opacity="0.6"/>
        <path d="M20 26 C20 26 22 24 24 26 C26 28 28 26 28 26" stroke="#c9a84c" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M24 34 L24 38" stroke="#c9a84c" strokeWidth="1.5" strokeLinecap="round" opacity="0.5"/>
        <defs>
          <linearGradient id="g1" x1="16" y1="12" x2="32" y2="34" gradientUnits="userSpaceOnUse">
            <stop stopColor="#c9a84c"/>
            <stop offset="1" stopColor="#7a5c1e"/>
          </linearGradient>
        </defs>
      </svg>
    ),
    title: "Хроническая усталость",
    text: "Формально всё нормально, но сил нет",
  },
  {
    icon: (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-10 h-10">
        <circle cx="24" cy="24" r="20" fill="url(#g2)" opacity="0.15"/>
        <path d="M24 14 C20 14 17 17 17 21 C17 23 18 25 20 26.5 L24 30 L28 26.5 C30 25 31 23 31 21 C31 17 28 14 24 14Z" fill="url(#g2)" opacity="0.7"/>
        <circle cx="24" cy="24" r="2" fill="#c9a84c" opacity="0.4"/>
        <path d="M24 8 L24 11" stroke="#c9a84c" strokeWidth="1.5" strokeLinecap="round" opacity="0.4"/>
        <path d="M14 14 L16.5 16.5" stroke="#c9a84c" strokeWidth="1.5" strokeLinecap="round" opacity="0.4"/>
        <path d="M34 14 L31.5 16.5" stroke="#c9a84c" strokeWidth="1.5" strokeLinecap="round" opacity="0.4"/>
        <defs>
          <linearGradient id="g2" x1="17" y1="14" x2="31" y2="30" gradientUnits="userSpaceOnUse">
            <stop stopColor="#c9a84c"/>
            <stop offset="1" stopColor="#7a5c1e"/>
          </linearGradient>
        </defs>
      </svg>
    ),
    title: "Тревога без причины",
    text: "Беспокойство, которое сложно объяснить",
  },
  {
    icon: (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-10 h-10">
        <circle cx="24" cy="24" r="20" fill="url(#g3)" opacity="0.15"/>
        <circle cx="24" cy="24" r="10" stroke="url(#g3)" strokeWidth="1.5" opacity="0.6"/>
        <circle cx="24" cy="24" r="5" fill="url(#g3)" opacity="0.4"/>
        <path d="M24 14 L24 10" stroke="#c9a84c" strokeWidth="1.5" strokeLinecap="round" opacity="0.5"/>
        <path d="M24 34 L24 38" stroke="#c9a84c" strokeWidth="1.5" strokeLinecap="round" opacity="0.5"/>
        <path d="M14 24 L10 24" stroke="#c9a84c" strokeWidth="1.5" strokeLinecap="round" opacity="0.5"/>
        <path d="M34 24 L38 24" stroke="#c9a84c" strokeWidth="1.5" strokeLinecap="round" opacity="0.5"/>
        <defs>
          <linearGradient id="g3" x1="14" y1="14" x2="34" y2="34" gradientUnits="userSpaceOnUse">
            <stop stopColor="#c9a84c"/>
            <stop offset="1" stopColor="#7a5c1e"/>
          </linearGradient>
        </defs>
      </svg>
    ),
    title: "Кризис идентичности",
    text: "Ощущение, что живёте не своей жизнью",
  },
];

export function PainPoints() {
  return (
    <section className="relative z-10 py-24 md:py-32" style={{background: 'rgba(0,48,57,0.75)', backdropFilter: 'blur(12px)'}}>
      <div className="container">
      <p className="font-mono text-sm uppercase text-[#c9a84c]/70 text-center tracking-widest mb-12">
        Узнаёте себя?
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
        {pains.map((pain) => (
          <div
            key={pain.title}
            className="border border-foreground/10 rounded-2xl p-6 flex flex-col gap-4 bg-foreground/[0.03] hover:bg-foreground/[0.06] transition-colors"
          >
            <div className="w-12 h-12 flex items-center justify-center">{pain.icon}</div>
            <h3 className="font-sentient text-xl text-[#c9a84c]">{pain.title}</h3>
            <p className="font-mono text-base text-foreground/70">{pain.text}</p>
          </div>
        ))}
      </div>
      </div>
    </section>
  );
}