const testimonials = [
  { text: "«Я пришла с ощущением, что просто устала от всего. Через два месяца работы с Ольгой я снова узнала себя. Это не магия — это честная, глубокая работа.»", name: "Марина", meta: "47 лет, Владивосток", initial: "М" },
  { text: "«Никогда не думал, что мужчинам нужен психолог. После кризиса на работе понял — нужен. Ольга помогла найти точку опоры, когда казалось, что всё рушится.»", name: "Андрей", meta: "52 года, онлайн", initial: "А" },
  { text: "«Работаем онлайн. Сначала боялась, что не то. Оказалось — очень глубоко и по-настоящему. Рекомендую всем, кто думает, что само пройдёт.»", name: "Екатерина", meta: "39 лет, Хабаровск", initial: "Е" },
];

export function TestimonialsSection() {
  return (
    <section className="section" id="testimonials">
      <div className="container">
        <div className="section-label reveal">Отзывы</div>
        <h2 className="reveal reveal-d1" style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2rem,1.2rem + 2.5vw,3.5rem)", marginBottom: "2.5rem" }}>
          Что говорят клиенты
        </h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(min(300px,100%), 1fr))", gap: "1.5rem" }}>
          {testimonials.map((t, i) => (
            <div key={t.name} className={`reveal${i > 0 ? ` reveal-d${i}` : ""}`} style={{
              background: "var(--color-surface-2)", border: "1px solid var(--color-border)",
              borderRadius: "var(--radius-xl)", padding: "2rem",
              display: "flex", flexDirection: "column", gap: "1.25rem",
            }}>
              <div style={{ display: "flex", gap: 2, color: "var(--color-accent-warm)", fontSize: "1rem" }} aria-label="Оценка 5 из 5">★★★★★</div>
              <p style={{ fontFamily: "var(--font-display)", fontSize: "1rem", fontStyle: "italic", color: "var(--color-text-muted)", lineHeight: 1.7, flex: 1 }}>
                {t.text}
              </p>
              <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", borderTop: "1px solid var(--color-divider)", paddingTop: "1rem" }}>
                <div style={{ width: 40, height: 40, borderRadius: "50%", background: "var(--color-primary-light)", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700, fontSize: "0.9rem", color: "var(--color-primary)", flexShrink: 0 }} aria-hidden="true">{t.initial}</div>
                <div>
                  <div style={{ fontSize: "0.9rem", fontWeight: 600 }}>{t.name}</div>
                  <div style={{ fontSize: "0.75rem", color: "var(--color-text-faint)" }}>{t.meta}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}