const plans = [
  { name: "Знакомство", price: "Бесплатно", period: null, desc: "30 минут. Рассказываете, что происходит. Без обязательств. Просто поговорим.", cta: "Записаться →", featured: false, free: true },
  { name: "Разовая сессия", price: "2 500 ₽", period: "/ 50 мин", desc: "Онлайн или очно. Подходит для первичной консультации или разового вопроса.", cta: "Записаться →", featured: false, free: false },
  { name: "Пакет 4 сессии", price: "9 000 ₽", period: "/ месяц", desc: "Месяц работы. Скидка 10%. Оптимально для разбора конкретного запроса.", cta: "Начать →", featured: true, free: false },
  { name: "Пакет 8 сессий", price: "17 000 ₽", period: "/ 2 месяца", desc: "Глубокая работа с запросом. Максимальный результат. Экономия 15%.", cta: "Записаться →", featured: false, free: false },
];

export function PricingSection() {
  return (
    <section className="section section-alt" id="pricing">
      <div className="container">
        <div className="section-label reveal">Форматы работы</div>
        <h2 className="reveal reveal-d1" style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2rem,1.2rem + 2.5vw,3.5rem)", marginBottom: "1rem" }}>
          Выберите свой формат
        </h2>
        <p className="reveal reveal-d2" style={{ fontSize: "1rem", color: "var(--color-text-muted)", lineHeight: 1.7, maxWidth: "56ch", marginBottom: "2.5rem" }}>
          Все консультации онлайн (Telegram, Zoom) или очно во Владивостоке — по договорённости.
        </p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(min(240px,100%), 1fr))", gap: "1.5rem" }}>
          {plans.map((p, i) => (
            <div key={p.name} className={`reveal${i > 0 ? ` reveal-d${i}` : ""}`} style={{
              position: "relative",
              background: p.featured ? "var(--color-primary-light)" : "var(--color-surface)",
              border: `1px solid ${p.featured ? "var(--color-primary)" : "var(--color-border)"}`,
              borderRadius: "var(--radius-xl)", padding: "2rem 1.5rem",
              transition: "box-shadow var(--transition), transform var(--transition)",
              display: "flex", flexDirection: "column", gap: "0",
            }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.boxShadow = "var(--shadow-md)"; (e.currentTarget as HTMLElement).style.transform = "translateY(-3px)"; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.boxShadow = "none"; (e.currentTarget as HTMLElement).style.transform = "none"; }}
            >
              {p.featured && (
                <span style={{
                  position: "absolute", top: "-0.75rem", left: "50%", transform: "translateX(-50%)",
                  background: "var(--color-primary)", color: "white",
                  fontSize: "0.75rem", fontWeight: 600, padding: "0.2rem 1rem",
                  borderRadius: "var(--radius-full)", whiteSpace: "nowrap",
                }}>Популярный</span>
              )}
              <div style={{ fontSize: "0.8rem", fontWeight: 600, color: "var(--color-text-muted)", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "1rem" }}>{p.name}</div>
              <div style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2rem,1.2rem + 2.5vw,3.5rem)", color: p.free ? "var(--color-primary)" : "var(--color-text)", marginBottom: "0.5rem" }}>
                {p.price}
                {p.period && <span style={{ fontSize: "0.9rem", color: "var(--color-text-muted)", fontFamily: "var(--font-body)" }}> {p.period}</span>}
              </div>
              <p style={{ fontSize: "0.875rem", color: "var(--color-text-muted)", lineHeight: 1.6, borderTop: "1px solid var(--color-divider)", paddingTop: "1rem", marginBottom: "1.5rem", flex: 1 }}>{p.desc}</p>
              <a href="#contact" className={`btn ${p.featured ? "btn-primary" : "btn-secondary"}`} style={{ width: "100%", justifyContent: "center" }}>
                {p.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
