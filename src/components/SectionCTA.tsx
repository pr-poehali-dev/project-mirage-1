import { Button } from "@/components/ui/button";

export function SectionCTA() {
  return (
    <div className="relative z-10 flex justify-center py-4" style={{background: 'rgba(0,56,65,0)', mixBlendMode: 'normal'}}>
      <a href="#contact">
        <Button>[Записаться бесплатно →]</Button>
      </a>
    </div>
  );
}