import { GL } from "./gl";
import { Button } from "./ui/button";
import { useState, useEffect } from "react";
import { Header } from "./Header";
import { MagneticWrapper } from "@/components/MagneticWrapper";

const TYPED_PHRASES = [
  "— Выйти из тревоги.",
  "— Наконец принять решение.",
  "— Перестать саботировать себя.",
  "— Начать жить своё, а не чужое.",
];

function TypedText() {
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const phrase = TYPED_PHRASES[phraseIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting && displayed.length < phrase.length) {
      timeout = setTimeout(() => setDisplayed(phrase.slice(0, displayed.length + 1)), 65);
    } else if (!deleting && displayed.length === phrase.length) {
      timeout = setTimeout(() => setDeleting(true), 2500);
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 35);
    } else if (deleting && displayed.length === 0) {
      setDeleting(false);
      setPhraseIndex((i) => (i + 1) % TYPED_PHRASES.length);
    }

    return () => clearTimeout(timeout);
  }, [displayed, deleting, phraseIndex]);

  return (
    <span className="font-light">
      {displayed}
      <span className="text-[#c9a84c]/60" style={{animation: 'blink 1.2s ease-in-out infinite'}}>|</span>
    </span>
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

        <div className="font-sentient text-[#c9a84c] leading-tight max-w-[860px] mx-auto">
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl">
            Застряла — значит, пора двигаться.
          </h1>
        </div>

        <div className="font-sentient text-[#e8c76a] leading-tight max-w-[860px] mx-auto mt-2 md:mt-3 h-[3rem] sm:h-[5rem] md:h-[6rem] lg:h-[7rem] flex items-start justify-center">
          <div className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl">
            <TypedText />
          </div>
        </div>

        <p className="text-sm sm:text-base text-foreground/70 text-balance mt-6 md:mt-8 max-w-[480px] mx-auto leading-relaxed">
          Онлайн-сессии с психологом-коучем.<br />
          Работаю с теми, кто чувствует: что-то идёт не так —<br className="hidden sm:block" />
          но не понимает, что именно.
        </p>

        <div className="flex flex-col items-center gap-3 mt-8 md:mt-10">
          <MagneticWrapper>
            <a href="https://t.me/razumovaoa" target="_blank" rel="noopener noreferrer">
              <Button onMouseEnter={() => setHovering(true)} onMouseLeave={() => setHovering(false)}>
                [Написать в Telegram →]
              </Button>
            </a>
          </MagneticWrapper>
          <p className="text-xs text-foreground/40 mt-1">
            🔒 Всё, что ты напишешь, останется между нами
          </p>
        </div>
      </div>
    </div>
  );
}