export function SiteFooter() {
  return (
    <footer style={{ background: "var(--color-text)", color: "rgba(255,255,255,0.55)", paddingBlock: "2.5rem" }}>
      <div className="container" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "1rem" }}>
        <div style={{ fontFamily: "var(--font-display)", fontSize: "1.25rem", color: "white" }}>Ольга — психолог</div>
        <div style={{ display: "flex", gap: "1.5rem", fontSize: "0.75rem" }}>
          <a href="#" style={{ transition: "color var(--transition)" }}
            onMouseEnter={e => (e.currentTarget.style.color = "white")}
            onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,0.55)")}>
            Политика конфиденциальности
          </a>
        </div>
        <div style={{ fontSize: "0.75rem" }}>© 2026. Все права защищены.</div>
      </div>
    </footer>
  );
}
