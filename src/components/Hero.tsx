import { GL } from "./gl";
import { Pill } from "./Pill";
import { Button } from "./ui/button";
import { useState, useEffect } from "react";
import { Header } from "./Header";
import { MagneticWrapper } from "@/components/MagneticWrapper";

const TYPED_PHRASES = [
  "давно не спокойно.",
  "накопилась усталость.",
  "что-то важное потеряно.",
  "нет сил быть собой.",
];

function TypedText() {
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const phrase = TYPED_PHRASES[phraseIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting && displayed.length < phrase.length) {
      timeout = setTimeout(() => setDisplayed(phrase.slice(0, displayed.length + 1)), 110);
    } else if (!deleting && displayed.length === phrase.length) {
      timeout = setTimeout(() => setDeleting(true), 3000);
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 55);
    } else if (deleting && displayed.length === 0) {
      setDeleting(false);
      setPhraseIndex((i) => (i + 1) % TYPED_PHRASES.length);
    }

    return () => clearTimeout(timeout);
  }, [displayed, deleting, phraseIndex]);

  return (
    <i className="font-light">
      {displayed}
      <span className="animate-pulse text-[#c9a84c]/60">|</span>
    </i>
  );
}

export function Hero() {
  const [hovering, setHovering] = useState(false);

  return (
    <div className="flex flex-col h-svh justify-between relative z-10">
      <GL hovering={hovering} />
      <Header />

      <div className="pb-10 md:pb-16 mt-auto text-center relative px-4">
        <span className="sr-only">Психолог-коуч онлайн и Владивосток — </span>
        <div className="font-sentient text-[#c9a84c] text-3xl sm:text-5xl md:text-7xl lg:text-8xl leading-tight max-w-[800px] mx-auto">
          Вы справляетесь.
        </div>
        <div className="font-sentient text-[#c9a84c] text-3xl sm:text-5xl md:text-7xl lg:text-8xl leading-tight max-w-[800px] mx-auto">
          Но внутри — <TypedText />
        </div>
        <p className="font-mono text-sm sm:text-base text-foreground/75 text-balance mt-6 md:mt-8 max-w-[460px] mx-auto">
          Усталость без причины. Тревога. Ощущение, что живёте «не своей жизнью».
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 md:gap-4 mt-8 md:mt-12">
          <MagneticWrapper>
            <a href="#contact">
              <Button onMouseEnter={() => setHovering(true)} onMouseLeave={() => setHovering(false)}>
                [Записаться бесплатно →]
              </Button>
            </a>
          </MagneticWrapper>
          <MagneticWrapper>
            <a href="#about">
              <Button variant="ghost" className="font-mono text-foreground/60 hover:text-foreground uppercase text-sm" onMouseEnter={() => setHovering(false)}>
                Узнать обо мне
              </Button>
            </a>
          </MagneticWrapper>
        </div>

        <p className="font-mono text-sm text-[#c9a84c]/60 mt-6">
          100+ клиентов уже прошли путь к себе
        </p>
      </div>
    </div>
  );
}