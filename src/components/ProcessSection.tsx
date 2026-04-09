const steps = [
  { icon: "☕", title: "Знакомство", text: "30 минут бесплатно. Рассказываете, что происходит. Я слушаю без оценок. Определяем, с чего начать.", free: true },
  { icon: "🎯", title: "Первая сессия", text: "Углублённый разбор запроса. Совместно формируем цели — конкретно, без абстракций и пустых обещаний.", free: false },
  { icon: "🌱", title: "Регулярная работа", text: "1–2 встречи в неделю по 50 минут. Вы двигаетесь в своём темпе. Я рядом на каждом этапе.", free: false },
  { icon: "✨", title: "Результат", text: "Конкретные изменения в поведении, состоянии и отношениях. Не «осознание» — настоящие сдвиги.", free: false },
];

export function ProcessSection() {
  return (
    <section className="section section-alt" id="process">
      <div className="container">
        <div className="section-label reveal">Как это работает</div>
        <h2 className="reveal reveal-d1" style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2rem,1.2rem + 2.5vw,3.5rem)", marginBottom: "1rem" }}>
          Четыре шага к себе
        </h2>
        <p className="reveal reveal-d2" style={{ fontSize: "1rem", color: "var(--color-text-muted)", lineHeight: 1.7, maxWidth: "56ch", marginBottom: "2.5rem" }}>
          Не нужно точно знать «что не так». Именно для этого существует первая встреча.
        </p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(min(220px,100%), 1fr))", gap: "1.5rem", counterReset: "steps" }}>
          {steps.map((s, i) => (
            <div key={s.title} className={`reveal${i > 0 ? ` reveal-d${i}` : ""}`} style={{
              position: "relative", padding: "2rem 1.5rem 1.5rem",
              background: s.free ? "var(--color-primary-light)" : "var(--color-surface)",
              border: `1px solid ${s.free ? "var(--color-primary)" : "var(--color-border)"}`,
              borderRadius: "var(--radius-xl)",
            }}>
              <span style={{
                fontFamily: "var(--font-display)", fontSize: "clamp(2rem,1.2rem + 2.5vw,3.5rem)",
                color: "var(--color-primary)", opacity: 0.25,
                position: "absolute", top: "1rem", right: "1.25rem", lineHeight: 1,
              }} aria-hidden="true">0{i + 1}</span>
              <div style={{ fontSize: "2rem", marginBottom: "1rem" }} aria-hidden="true">{s.icon}</div>
              <h3 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.125rem,1rem + 0.6vw,1.5rem)", marginBottom: "0.75rem" }}>{s.title}</h3>
              <p style={{ fontSize: "0.875rem", color: "var(--color-text-muted)", lineHeight: 1.65 }}>{s.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
