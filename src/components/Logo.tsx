interface LogoProps {
  className?: string;
}

export const Logo = ({ className }: LogoProps) => {
  return (
    <div className={`flex items-center gap-3 ${className ?? ""}`}>
      <img
        src="https://cdn.poehali.dev/projects/4c5d8224-14ac-4df6-8232-895419dd60d5/bucket/4d76966d-94da-4d42-84e1-dc5e8aacbf16.png"
        alt="Логотип"
        className="w-10 h-10 sm:w-[5.5rem] sm:h-[5.5rem] object-contain flex-shrink-0"
      />
      <div className="flex flex-col gap-0.5">
        <span className="font-mono text-sm tracking-[0.15em] text-foreground font-medium uppercase leading-none">
          РАЗУМОВА ОЛЬГА
        </span>
        <span className="font-mono text-[9px] tracking-[0.25em] text-foreground/50 uppercase leading-none">
          ПСИХОЛОГ · КОУЧ
        </span>
      </div>
    </div>
  );
};