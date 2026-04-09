const tags = ["Тревога и стресс", "Выгорание", "Кризисы идентичности", "Семейные конфликты", "Личные границы", "Онлайн и очно"];

export function AboutSection() {
  return (
    <section className="section" id="about">
      <div className="container">
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1.1fr", gap: "clamp(3rem,6vw,5rem)", alignItems: "center" }} className="about-grid">
          <div className="reveal" style={{ position: "relative" }}>
            <div style={{ borderRadius: "var(--radius-xl)", overflow: "hidden", aspectRatio: "3/4", boxShadow: "var(--shadow-lg)" }}>
              <img
                src="https://cdn.poehali.dev/projects/4c5d8224-14ac-4df6-8232-895419dd60d5/files/1b7a1864-f05f-430b-b3b7-60c95d2374d0.jpg"
                alt="Ольга Разумова — психолог"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
                loading="lazy"
              />
            </div>
            <div style={{
              position: "absolute", top: "-1.5rem", right: "-1.5rem",
              background: "var(--color-primary)", color: "var(--color-text-inverse)",
              borderRadius: "var(--radius-lg)", padding: "1.25rem",
              boxShadow: "var(--shadow-md)", textAlign: "center",
            }}>
              <span style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2rem,1.2rem + 2.5vw,3.5rem)", display: "block", lineHeight: 1 }}>5</span>
              <span style={{ fontSize: "0.75rem", opacity: 0.8 }}>лет практики</span>
            </div>
          </div>

          <div>
            <div className="section-label reveal">Обо мне</div>
            <h2 className="reveal reveal-d1" style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2rem,1.2rem + 2.5vw,3.5rem)", marginBottom: "1rem" }}>
              Ольга Разумова
            </h2>
            <p className="reveal reveal-d2" style={{
              fontFamily: "var(--font-display)", fontSize: "clamp(1.125rem,1rem + 0.6vw,1.5rem)",
              fontStyle: "italic", color: "var(--color-text-muted)", marginBottom: "1.5rem",
              lineHeight: 1.5, borderLeft: "3px solid var(--color-primary)", paddingLeft: "1.25rem",
            }}>
              «Я знаю изнутри, что значит выгорание — из жизни, не из книг.»
            </p>
            <p className="reveal reveal-d3" style={{ fontSize: "1rem", color: "var(--color-text-muted)", lineHeight: 1.75, marginBottom: "1rem" }}>
              Практикующий психолог в области социальной психологии. Диплом МЦПО. Работаю с людьми в условиях высокого давления: сложные коллективы, кризисные ситуации, жизненные переломы.
            </p>
            <p className="reveal reveal-d3" style={{ fontSize: "1rem", color: "var(--color-text-muted)", lineHeight: 1.75, marginBottom: "1.5rem" }}>
              Использую <strong style={{ color: "var(--color-text)" }}>интегративный подход</strong> — сочетаю разные методы под конкретного человека, без шаблонов. Моя задача — не дать совет, а помочь вам услышать себя.
            </p>
            <div className="reveal reveal-d4" style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
              {tags.map(t => <span key={t} className="tag">{t}</span>)}
            </div>
          </div>
        </div>
      </div>
      <style>{`@media(max-width:768px){.about-grid{grid-template-columns:1fr !important}.about-grid>div:first-child{order:-1}}`}</style>
    </section>
  );
}
