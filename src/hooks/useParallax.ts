import { useEffect, useRef } from "react";

export function useParallax(strength = 0.04) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      const x = (e.clientX / innerWidth - 0.5) * strength * 100;
      const y = (e.clientY / innerHeight - 0.5) * strength * 100;
      el.style.transform = `translate(${x}px, ${y}px)`;
      el.style.transition = "transform 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)";
    };

    const handleMouseLeave = () => {
      el.style.transform = "translate(0px, 0px)";
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseleave", handleMouseLeave);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [strength]);

  return ref;
}
