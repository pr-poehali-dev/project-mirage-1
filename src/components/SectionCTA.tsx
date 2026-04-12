import { Button } from "@/components/ui/button";

export function SectionCTA() {
  return (
    <div
      className="relative z-10 flex justify-center py-6"
      style={{ background: 'rgba(0,38,46,0.2)', backdropFilter: 'blur(1px)' }}
    >
      <a href="#contact">
        <Button>[Записаться бесплатно →]</Button>
      </a>
    </div>
  );
}