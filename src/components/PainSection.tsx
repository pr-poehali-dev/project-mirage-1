const pains = [
  { icon: "😮‍💨", title: "Хроническая усталость", text: "Вы устаёте, даже когда выспались. Формально «всё нормально», но сил ни на что нет." },
  { icon: "🫀", title: "Тревога без причины", text: "Непонятное беспокойство, которое сложно объяснить. Постоянное ощущение, что что-то пойдёт не так." },
  { icon: "🪞", title: "Кризис идентичности", text: "Ощущение потери себя. Непонятно, чего вы хотите и куда двигаться дальше." },
  { icon: "🧩", title: "Сложности с границами", text: "Трудно говорить «нет» без чувства вины. Чужие нужды часто важнее ваших." },
  { icon: "🌊", title: "После потрясений", text: "Развод, потеря работы, переезд, потеря близкого — что-то внутри изменилось, а поддержки нет." },
  { icon: "🔥", title: "Выгорание", text: "Работа когда-то нравилась. Теперь — только обязанность. Нет ни интереса, ни энергии." },
];

const cardStyle: React.CSSProperties = {
  background: "var(--color-surface-2)",
  border: "1px solid var(--color-border)",
  borderRadius: "var(--radius-lg)",
  padding: "1.5rem",
  display: "flex", gap: "1rem", alignItems: "flex-start",
  transition: "box-shadow var(--transition), transform var(--transition)",
};

export function PainSection() {
  return (
    <section className="section section-alt" id="pain">
      <div className="container">
        <div className="section-label reveal">Вы попали по адресу</div>
        <h2 className="reveal reveal-d1" style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2rem,1.2rem + 2.5vw,3.5rem)", marginBottom: "1rem" }}>
          Узнайте себя
        </h2>
        <p className="reveal reveal-d2" style={{ fontSize: "1rem", color: "var(--color-text-muted)", lineHeight: 1.7, maxWidth: "56ch", marginBottom: "2.5rem" }}>
          Если хотя бы один из этих пунктов резонирует — вы на нужной странице.
        </p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(min(280px,100%), 1fr))", gap: "1rem" }}>
          {pains.map((p, i) => (
            <div key={p.title} className={`reveal${i % 3 !== 0 ? ` reveal-d${i % 3}` : ""}`}
              style={cardStyle}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.boxShadow = "var(--shadow-md)"; (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)"; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.boxShadow = "none"; (e.currentTarget as HTMLElement).style.transform = "none"; }}
            >
              <div style={{ width: 40, height: 40, flexShrink: 0, borderRadius: "var(--radius-md)", background: "var(--color-primary-light)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.2rem" }} aria-hidden="true">
                {p.icon}
              </div>
              <p style={{ fontSize: "0.9rem", color: "var(--color-text-muted)", lineHeight: 1.6 }}>
                <strong style={{ display: "block", fontSize: "1rem", color: "var(--color-text)", marginBottom: "0.25rem", fontWeight: 600 }}>{p.title}</strong>
                {p.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
