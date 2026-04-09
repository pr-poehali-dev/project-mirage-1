import { useState, useEffect } from "react";

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    const saved = document.documentElement.getAttribute("data-theme") as "light" | "dark" | null;
    setTheme(saved ?? "light");
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toggleTheme = () => {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    document.documentElement.setAttribute("data-theme", next);
  };

  const navLinks = [
    { label: "Обо мне", href: "#about" },
    { label: "Как работаю", href: "#process" },
    { label: "Цены", href: "#pricing" },
    { label: "Отзывы", href: "#testimonials" },
  ];

  return (
    <>
      <header
        style={{
          position: "sticky", top: 0, zIndex: 100,
          background: "oklch(from var(--color-bg) l c h / 0.88)",
          backdropFilter: "blur(16px)",
          borderBottom: "1px solid var(--color-divider)",
          boxShadow: scrolled ? "var(--shadow-sm)" : "none",
          transition: "box-shadow var(--transition)",
        }}
      >
        <div className="container" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", height: "4rem" }}>
          <a href="#" aria-label="На главную" style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
            <svg width="36" height="36" viewBox="0 0 36 36" fill="none" aria-hidden="true">
              <circle cx="18" cy="18" r="17" stroke="var(--color-primary)" strokeWidth="1.5"/>
              <path d="M18 10 C14 10, 10 13, 10 17 C10 21, 13 24, 17 24.5 L17 27 L16 28.5" stroke="var(--color-primary)" strokeWidth="1.5" strokeLinecap="round" fill="none"/>
              <path d="M18 10 C22 10, 26 13, 26 17 C26 21, 23 24, 19 24.5 L19 27 L20 28.5" stroke="var(--color-primary)" strokeWidth="1.5" strokeLinecap="round" fill="none"/>
              <circle cx="18" cy="15" r="2.5" fill="var(--color-primary)" opacity="0.7"/>
            </svg>
            <span style={{ fontFamily: "var(--font-display)", fontSize: "1.25rem", color: "var(--color-text)" }}>Ольга</span>
          </a>

          <nav style={{ display: "flex", alignItems: "center", gap: "2rem" }}>
            <ul style={{ display: "flex", gap: "1.5rem", listStyle: "none" }} className="max-lg:hidden">
              {navLinks.map(l => (
                <li key={l.href}>
                  <a href={l.href} style={{ fontSize: "0.9rem", color: "var(--color-text-muted)", transition: "color var(--transition)" }}
                    onMouseEnter={e => (e.currentTarget.style.color = "var(--color-text)")}
                    onMouseLeave={e => (e.currentTarget.style.color = "var(--color-text-muted)")}
                  >{l.label}</a>
                </li>
              ))}
            </ul>
            <a href="#contact" className="btn btn-secondary max-lg:hidden" style={{ padding: "0.5rem 1.25rem", fontSize: "0.875rem" }}>
              Записаться
            </a>
            <button onClick={toggleTheme} aria-label="Переключить тему"
              style={{ width: 36, height: 36, display: "flex", alignItems: "center", justifyContent: "center", borderRadius: "50%", color: "var(--color-text-muted)", transition: "background var(--transition)" }}>
              {theme === "dark"
                ? <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></svg>
                : <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>
              }
            </button>
            <button onClick={() => setMenuOpen(true)} className="lg:hidden" aria-label="Открыть меню"
              style={{ width: 40, height: 40, display: "flex", alignItems: "center", justifyContent: "center", color: "var(--color-text-muted)" }}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 12h18M3 6h18M3 18h18"/></svg>
            </button>
          </nav>
        </div>
      </header>

      {/* Mobile nav */}
      {menuOpen && (
        <div style={{ position: "fixed", inset: 0, zIndex: 200, background: "var(--color-bg)", padding: "1.5rem", display: "flex", flexDirection: "column" }}>
          <button onClick={() => setMenuOpen(false)} aria-label="Закрыть меню"
            style={{ alignSelf: "flex-end", width: 44, height: 44, display: "flex", alignItems: "center", justifyContent: "center", borderRadius: "50%", background: "var(--color-surface-offset)" }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 6 6 18M6 6l12 12"/></svg>
          </button>
          <ul style={{ display: "flex", flexDirection: "column", gap: "1.5rem", marginTop: "2.5rem", listStyle: "none" }}>
            {navLinks.map(l => (
              <li key={l.href}>
                <a href={l.href} onClick={() => setMenuOpen(false)}
                  style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.5rem,4vw,2.25rem)", color: "var(--color-text)" }}>
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <a href="#contact" onClick={() => setMenuOpen(false)} className="btn btn-primary btn-lg" style={{ marginTop: "2rem", justifyContent: "center" }}>
            Записаться бесплатно
          </a>
        </div>
      )}
    </>
  );
}
