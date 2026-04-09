const results = [
  "Перестанете просыпаться с тревогой без видимой причины",
  "Научитесь говорить «нет» — без вины и без скандала",
  "Поймёте, чего вы на самом деле хотите от жизни",
  "Восстановите энергию и интерес к тому, что радовало",
  "Почувствуете устойчивость — даже когда вокруг неопределённость",
];

const stats = [
  { num: "63%", desc: "клиентов продолжают работу более 6 месяцев" },
  { num: "8–12", desc: "сессий — средняя продолжительность для заметных изменений" },
  { num: "100%", desc: "конфиденциальность всех данных и разговоров" },
];

export function ResultsSection() {
  return (
    <section className="section section-dark" id="results">
      <div className="container">
        <div className="section-label reveal">После нашей работы</div>
        <h2 className="reveal reveal-d1" style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2rem,1.2rem + 2.5vw,3.5rem)", marginBottom: "2.5rem", color: "white" }}>
          Что изменится в вашей жизни
        </h2>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2rem", alignItems: "start" }} className="results-grid">
          <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "1rem" }}>
            {results.map((r, i) => (
              <li key={r} className={`reveal${i > 0 ? ` reveal-d${Math.min(i, 4)}` : ""}`} style={{
                display: "flex", alignItems: "flex-start", gap: "1rem",
                padding: "1.25rem", background: "rgba(255,255,255,0.06)",
                borderRadius: "var(--radius-lg)", border: "1px solid rgba(255,255,255,0.1)",
              }}>
                <div style={{ width: 28, height: 28, flexShrink: 0, borderRadius: "50%", background: "var(--color-primary)", display: "flex", alignItems: "center", justifyContent: "center", marginTop: 2 }}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                </div>
                <span style={{ fontSize: "1rem", color: "rgba(255,255,255,0.85)", lineHeight: 1.6 }}>{r}</span>
              </li>
            ))}
          </ul>
          <div className="reveal reveal-d2" style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {stats.map(s => (
              <div key={s.num} style={{
                background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.12)",
                borderRadius: "var(--radius-xl)", padding: "2rem 1.5rem", textAlign: "center",
              }}>
                <span style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2rem,1.2rem + 2.5vw,3.5rem)", color: "white", display: "block", marginBottom: "0.25rem" }}>{s.num}</span>
                <span style={{ fontSize: "0.875rem", color: "rgba(255,255,255,0.55)" }}>{s.desc}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <style>{`@media(max-width:768px){.results-grid{grid-template-columns:1fr !important}}`}</style>
    </section>
  );
}
