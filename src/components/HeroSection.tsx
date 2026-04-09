import { useEffect } from "react";

export function HeroSection() {
  useEffect(() => {
    document.querySelectorAll(".hero .reveal").forEach((el) => {
      setTimeout(() => el.classList.add("visible"), 100);
    });
  }, []);

  return (
    <section className="section hero" style={{ paddingBlockStart: "clamp(3rem,8vw,5rem)" }}>
      <div className="container">
        <div style={{
          display: "grid", gridTemplateColumns: "1fr 1fr", alignItems: "center",
          gap: "clamp(2rem,5vw,4rem)", minHeight: "80vh",
        }} className="hero-grid">
          <div>
            <div className="section-label reveal" style={{ marginBottom: "1.5rem" }}>
              Психолог · Социальная психология
            </div>
            <h1 className="reveal reveal-d1" style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2.4rem,1rem + 4vw,4.5rem)", lineHeight: 1.12, marginBottom: "1.5rem", color: "var(--color-text)" }}>
              Вы справляетесь.<br />
              Но внутри — <em style={{ fontStyle: "italic", color: "var(--color-primary)" }}>давно не спокойно.</em>
            </h1>
            <p className="reveal reveal-d2" style={{ fontSize: "clamp(1rem,0.95rem + 0.25vw,1.125rem)", color: "var(--color-text-muted)", lineHeight: 1.7, maxWidth: "52ch", marginBottom: "2.5rem" }}>
              Усталость, которую не объяснить словами. Тревога без причины. Ощущение, что живёте «не своей жизнью» — хотя всё вроде бы хорошо. Вы не одни. И с этим можно работать.
            </p>
            <div className="reveal reveal-d3" style={{ display: "flex", gap: "1rem", flexWrap: "wrap", alignItems: "center" }}>
              <a href="#contact" className="btn btn-primary btn-lg">Записаться бесплатно →</a>
              <a href="#about" className="btn btn-secondary btn-lg">Узнать обо мне</a>
            </div>
            <div className="reveal reveal-d4" style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginTop: "2rem" }}>
              <div style={{ display: "flex" }} aria-hidden="true">
                {["М","А","Е","С"].map((l, i) => (
                  <span key={l} style={{
                    width: 32, height: 32, borderRadius: "50%",
                    background: "var(--color-primary-light)", border: "2px solid var(--color-bg)",
                    marginLeft: i === 0 ? 0 : -8, display: "flex", alignItems: "center", justifyContent: "center",
                    fontSize: "0.6rem", fontWeight: 700, color: "var(--color-primary)",
                  }}>{l}</span>
                ))}
              </div>
              <p style={{ fontSize: "0.8rem", color: "var(--color-text-muted)" }}>
                <strong style={{ color: "var(--color-text)" }}>Более 100 клиентов</strong> уже прошли путь к себе
              </p>
            </div>
          </div>

          <div className="reveal reveal-d2" style={{ position: "relative" }}>
            <div style={{ position: "absolute", inset: -20, borderRadius: "var(--radius-xl)", background: "linear-gradient(135deg, var(--color-primary-light) 0%, transparent 70%)", opacity: 0.6, zIndex: 0 }} aria-hidden="true" />
            <div style={{ position: "relative", zIndex: 1, borderRadius: "var(--radius-xl)", overflow: "hidden", aspectRatio: "4/5", boxShadow: "var(--shadow-lg)" }}>
              <img
                src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=600&h=750&fit=crop&crop=face"
                alt="Психолог Ольга — портрет"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
                loading="eager"
              />
            </div>
            <div style={{
              position: "absolute", bottom: "-1.5rem", left: "-1.5rem", zIndex: 2,
              background: "var(--color-surface)", border: "1px solid var(--color-border)",
              borderRadius: "var(--radius-lg)", padding: "1rem 1.25rem",
              boxShadow: "var(--shadow-md)", display: "flex", alignItems: "center", gap: "0.75rem",
            }}>
              <span style={{ fontSize: "1.5rem" }} aria-hidden="true">🎓</span>
              <div>
                <strong style={{ display: "block", fontSize: "0.9rem", color: "var(--color-text)" }}>Дипломированный психолог</strong>
                <span style={{ fontSize: "0.75rem", color: "var(--color-text-muted)" }}>Социальная психология · МЦПО</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .hero-grid { grid-template-columns: 1fr !important; min-height: auto !important; }
          .hero-grid > div:last-child { order: -1; }
        }
      `}</style>
    </section>
  );
}
