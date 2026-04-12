import { useState } from "react";

const pains = [
  {
    icon: (
      <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-16 h-16">
        <circle cx="32" cy="32" r="28" fill="url(#g1)" opacity="0.12"/>
        <path d="M32 14 C32 14 20 22 20 34 C20 40.6 25.4 46 32 46 C38.6 46 44 40.6 44 34 C44 22 32 14 32 14Z" fill="url(#g1)" opacity="0.55"/>
        <path d="M26 34 C26 34 29 31 32 34 C35 37 38 34 38 34" stroke="#c9a84c" strokeWidth="2" strokeLinecap="round"/>
        <path d="M32 46 L32 52" stroke="#c9a84c" strokeWidth="2" strokeLinecap="round" opacity="0.4"/>
        <defs>
          <linearGradient id="g1" x1="20" y1="14" x2="44" y2="46" gradientUnits="userSpaceOnUse">
            <stop stopColor="#e8c97a"/>
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
      <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-16 h-16">
        <circle cx="32" cy="32" r="28" fill="url(#g2)" opacity="0.12"/>
        <path d="M32 18 C26 18 21 23 21 29 C21 32 22.5 35 25.5 37.5 L32 43 L38.5 37.5 C41.5 35 43 32 43 29 C43 23 38 18 32 18Z" fill="url(#g2)" opacity="0.65"/>
        <circle cx="32" cy="32" r="3" fill="#c9a84c" opacity="0.4"/>
        <path d="M32 8 L32 13" stroke="#c9a84c" strokeWidth="2" strokeLinecap="round" opacity="0.35"/>
        <path d="M18 18 L21.5 21.5" stroke="#c9a84c" strokeWidth="2" strokeLinecap="round" opacity="0.35"/>
        <path d="M46 18 L42.5 21.5" stroke="#c9a84c" strokeWidth="2" strokeLinecap="round" opacity="0.35"/>
        <defs>
          <linearGradient id="g2" x1="21" y1="18" x2="43" y2="43" gradientUnits="userSpaceOnUse">
            <stop stopColor="#e8c97a"/>
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
      <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-16 h-16">
        <circle cx="32" cy="32" r="28" fill="url(#g3)" opacity="0.12"/>
        <circle cx="32" cy="32" r="14" stroke="url(#g3)" strokeWidth="2" opacity="0.55"/>
        <circle cx="32" cy="32" r="6" fill="url(#g3)" opacity="0.4"/>
        <path d="M32 18 L32 12" stroke="#c9a84c" strokeWidth="2" strokeLinecap="round" opacity="0.4"/>
        <path d="M32 46 L32 52" stroke="#c9a84c" strokeWidth="2" strokeLinecap="round" opacity="0.4"/>
        <path d="M18 32 L12 32" stroke="#c9a84c" strokeWidth="2" strokeLinecap="round" opacity="0.4"/>
        <path d="M46 32 L52 32" stroke="#c9a84c" strokeWidth="2" strokeLinecap="round" opacity="0.4"/>
        <defs>
          <linearGradient id="g3" x1="18" y1="18" x2="46" y2="46" gradientUnits="userSpaceOnUse">
            <stop stopColor="#e8c97a"/>
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
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section className="relative z-10 py-24 md:py-32" style={{background: 'rgba(0,48,57,0.75)', backdropFilter: 'blur(12px)'}}>
      <div className="container">
        <p className="font-mono text-sm uppercase text-[#c9a84c]/70 text-center tracking-widest mb-12">
          Узнаёте себя?
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
          {pains.map((pain, i) => (
            <div
              key={pain.title}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              className="relative border rounded-2xl p-8 flex flex-col gap-5 transition-all duration-300 overflow-hidden cursor-default"
              style={{
                borderColor: hovered === i ? 'rgba(201,168,76,0.45)' : 'rgba(255,255,255,0.1)',
                background: hovered === i ? 'rgba(255,255,255,0.1)' : 'rgba(255,255,255,0.03)',
              }}
            >
              {/* Подсветка-glow за иконкой */}
              <div
                className="absolute top-4 left-6 w-20 h-20 rounded-full transition-all duration-500 pointer-events-none"
                style={{
                  background: 'radial-gradient(circle, rgba(201,168,76,0.25) 0%, transparent 70%)',
                  opacity: hovered === i ? 1 : 0,
                  transform: hovered === i ? 'scale(1.3)' : 'scale(0.8)',
                }}
              />

              <div
                className="relative w-16 h-16 flex items-center justify-center transition-transform duration-300"
                style={{ transform: hovered === i ? 'scale(1.12) translateY(-2px)' : 'scale(1)' }}
              >
                {pain.icon}
              </div>

              <h3 className="font-sentient text-xl text-[#c9a84c]">{pain.title}</h3>
              <p className="font-mono text-base text-foreground/70">{pain.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}