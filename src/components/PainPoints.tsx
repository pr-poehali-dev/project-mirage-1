import { useState } from "react";
import { Button } from "@/components/ui/button";
import { MagneticWrapper } from "@/components/MagneticWrapper";

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
  {
    icon: (
      <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-16 h-16">
        <circle cx="32" cy="32" r="28" fill="url(#g4)" opacity="0.12"/>
        <rect x="18" y="28" width="28" height="3" rx="1.5" fill="url(#g4)" opacity="0.6"/>
        <rect x="18" y="33" width="20" height="3" rx="1.5" fill="url(#g4)" opacity="0.35"/>
        <path d="M42 20 L44 16" stroke="#c9a84c" strokeWidth="2" strokeLinecap="round" opacity="0.5"/>
        <path d="M46 24 L50 22" stroke="#c9a84c" strokeWidth="2" strokeLinecap="round" opacity="0.35"/>
        <path d="M44 30 L48 30" stroke="#c9a84c" strokeWidth="2" strokeLinecap="round" opacity="0.25"/>
        <path d="M20 44 C20 44 24 40 32 40 C40 40 44 44 44 44" stroke="#c9a84c" strokeWidth="2" strokeLinecap="round" opacity="0.4"/>
        <defs>
          <linearGradient id="g4" x1="18" y1="16" x2="46" y2="44" gradientUnits="userSpaceOnUse">
            <stop stopColor="#e8c97a"/>
            <stop offset="1" stopColor="#7a5c1e"/>
          </linearGradient>
        </defs>
      </svg>
    ),
    title: "Сложности с границами",
    text: "Трудно говорить «нет» без чувства вины",
  },
  {
    icon: (
      <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-16 h-16">
        <circle cx="32" cy="32" r="28" fill="url(#g5)" opacity="0.12"/>
        <path d="M14 36 Q18 26 24 30 Q28 33 32 24 Q36 15 40 22 Q44 29 50 26" stroke="url(#g5)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" opacity="0.7"/>
        <circle cx="32" cy="24" r="3" fill="#c9a84c" opacity="0.5"/>
        <path d="M20 46 L44 46" stroke="#c9a84c" strokeWidth="1.5" strokeLinecap="round" opacity="0.3"/>
        <defs>
          <linearGradient id="g5" x1="14" y1="26" x2="50" y2="36" gradientUnits="userSpaceOnUse">
            <stop stopColor="#e8c97a"/>
            <stop offset="1" stopColor="#7a5c1e"/>
          </linearGradient>
        </defs>
      </svg>
    ),
    title: "После потрясений",
    text: "Развод, потеря, переезд — что-то внутри изменилось",
  },
  {
    icon: (
      <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-16 h-16">
        <circle cx="32" cy="32" r="28" fill="url(#g6)" opacity="0.12"/>
        <path d="M32 44 C32 44 20 38 20 28 C20 22 25.4 18 32 20 C38.6 18 44 22 44 28 C44 38 32 44 32 44Z" fill="url(#g6)" opacity="0.5"/>
        <path d="M28 28 L32 24 L36 28" stroke="#c9a84c" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" opacity="0.8"/>
        <path d="M32 24 L32 34" stroke="#c9a84c" strokeWidth="2" strokeLinecap="round" opacity="0.6"/>
        <path d="M26 44 L22 50" stroke="#c9a84c" strokeWidth="1.5" strokeLinecap="round" opacity="0.3"/>
        <path d="M38 44 L42 50" stroke="#c9a84c" strokeWidth="1.5" strokeLinecap="round" opacity="0.3"/>
        <defs>
          <linearGradient id="g6" x1="20" y1="18" x2="44" y2="44" gradientUnits="userSpaceOnUse">
            <stop stopColor="#e8c97a"/>
            <stop offset="1" stopColor="#7a5c1e"/>
          </linearGradient>
        </defs>
      </svg>
    ),
    title: "Выгорание",
    text: "Работа когда-то нравилась. Теперь — только обязанность",
  },
];

export function PainPoints() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section className="relative z-10 py-14 md:py-20" style={{background: 'rgba(0,48,57,0.45)', backdropFilter: 'blur(1px)'}}>
      <div className="container">
        <p className="font-mono text-sm uppercase text-[#c9a84c]/70 text-center tracking-widest mb-12">
          Узнаёте себя?
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-4xl mx-auto">
          {pains.map((pain, i) => (
            <div
              key={pain.title}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              className="relative border rounded-2xl p-4 flex flex-col gap-3 transition-all duration-300 overflow-hidden cursor-default"
              style={{
                borderColor: hovered === i ? 'rgba(201,168,76,0.55)' : 'rgba(255,255,255,0.18)',
                background: hovered === i ? 'rgba(255,255,255,0.14)' : 'rgba(255,255,255,0.08)',
              }}
            >
              <div
                className="absolute top-3 left-4 w-14 h-14 rounded-full transition-all duration-500 pointer-events-none"
                style={{
                  background: 'radial-gradient(circle, rgba(201,168,76,0.25) 0%, transparent 70%)',
                  opacity: hovered === i ? 1 : 0,
                  transform: hovered === i ? 'scale(1.3)' : 'scale(0.8)',
                }}
              />
              <div
                className="relative w-11 h-11 flex items-center justify-center transition-transform duration-300"
                style={{ transform: hovered === i ? 'scale(1.12) translateY(-2px)' : 'scale(1)' }}
              >
                <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-11 h-11">
                  {(pain.icon as React.ReactElement).props.children}
                </svg>
              </div>
              <h3 className="font-sentient text-base text-[#c9a84c]">{pain.title}</h3>
              <p className="font-mono text-xs md:text-sm text-foreground/70">{pain.text}</p>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-10">
          <MagneticWrapper>
            <a href="#contact">
              <Button>[Записаться бесплатно →]</Button>
            </a>
          </MagneticWrapper>
        </div>
      </div>
    </section>
  );
}