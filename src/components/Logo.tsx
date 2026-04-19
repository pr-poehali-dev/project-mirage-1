interface LogoProps {
  className?: string;
}

export const Logo = ({ className }: LogoProps) => {
  return (
    <div className={`flex items-center gap-3 ${className ?? ""}`}>
      <img
        src="https://cdn.poehali.dev/projects/4c5d8224-14ac-4df6-8232-895419dd60d5/bucket/4d76966d-94da-4d42-84e1-dc5e8aacbf16.png"
        alt="Логотип"
        className="w-10 h-10 md:w-12 md:h-12 object-contain"
      />
      <div className="flex flex-col leading-tight">
        <span className="font-mono text-sm md:text-base tracking-widest text-foreground font-normal uppercase">
          ОЛЬГА
        </span>
        <span className="font-mono text-[9px] md:text-[10px] tracking-[3px] text-foreground/50 uppercase">
          ПСИХОЛОГ
        </span>
      </div>
    </div>
  );
};