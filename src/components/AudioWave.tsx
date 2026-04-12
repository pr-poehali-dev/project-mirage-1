import { useEffect, useRef } from "react";

const BARS = 60;

export function AudioWave() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let t = 0;

    const draw = () => {
      const { width, height } = canvas;
      ctx.clearRect(0, 0, width, height);

      const barWidth = width / BARS;
      const cx = width / 2;

      for (let i = 0; i < BARS; i++) {
        const x = i * barWidth + barWidth / 2;
        const distFromCenter = Math.abs(x - cx) / cx;

        // Волновая высота — комбинация нескольких синусоид
        const wave =
          Math.sin(i * 0.3 + t) * 0.5 +
          Math.sin(i * 0.15 + t * 1.3) * 0.3 +
          Math.sin(i * 0.5 + t * 0.7) * 0.2;

        const envelope = 1 - distFromCenter * distFromCenter;
        const barH = Math.max(2, (wave + 1) * 0.5 * height * 0.7 * envelope);

        const alpha = 0.3 + envelope * 0.4;
        ctx.fillStyle = `rgba(201,168,76,${alpha})`;
        ctx.beginPath();
        ctx.roundRect(
          x - barWidth * 0.3,
          height / 2 - barH / 2,
          barWidth * 0.6,
          barH,
          2
        );
        ctx.fill();
      }

      t += 0.035;
      animId = requestAnimationFrame(draw);
    };

    const resize = () => {
      canvas.width = canvas.offsetWidth * window.devicePixelRatio;
      canvas.height = canvas.offsetHeight * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    };

    resize();
    draw();
    window.addEventListener("resize", resize);
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <div className="relative z-10 w-full" style={{ height: "60px" }}>
      <canvas
        ref={canvasRef}
        className="w-full h-full"
        style={{ display: "block" }}
      />
    </div>
  );
}
