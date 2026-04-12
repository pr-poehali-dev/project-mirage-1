import { GL } from "./gl";
import { Pill } from "./Pill";
import { Button } from "./ui/button";
import { useState } from "react";
import { Header } from "./Header";

export function Hero() {
  const [hovering, setHovering] = useState(false);

  return (
    <div className="flex flex-col h-svh justify-between relative z-10">
      <GL hovering={hovering} />
      <Header />

      <div className="pb-16 mt-auto text-center relative">
        <Pill className="mb-6">ПСИХОЛОГ · СОЦИАЛЬНАЯ ПСИХОЛОГИЯ · ВЛАДИВОСТОК И ОНЛАЙН</Pill>
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-sentient max-w-[800px] mx-auto leading-tight text-[#c9a84c]">
          Вы справляетесь. Но внутри —{" "}
          <i className="font-light">давно не спокойно.</i>
        </h1>
        <p className="font-mono text-base sm:text-lg text-foreground/75 text-balance mt-8 max-w-[460px] mx-auto">
          Усталость без причины. Тревога. Ощущение, что живёте «не своей жизнью».
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-12">
          <a href="#contact">
            <Button
              onMouseEnter={() => setHovering(true)}
              onMouseLeave={() => setHovering(false)}
            >
              [Записаться бесплатно →]
            </Button>
          </a>
          <a href="#about">
            <Button
              variant="ghost"
              className="font-mono text-foreground/60 hover:text-foreground uppercase text-sm"
              onMouseEnter={() => setHovering(false)}
            >
              Узнать обо мне
            </Button>
          </a>
        </div>

        <p className="font-mono text-sm text-[#c9a84c]/60 mt-6">
          100+ клиентов уже прошли путь к себе
        </p>
      </div>
    </div>
  );
}