import { useState } from "react";

export function ContactSection() {
  const [form, setForm] = useState({ name: "", phone: "", message: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("https://functions.poehali.dev/f7a8e07f-9c37-4b81-9fa3-07e719e26758", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      setStatus(res.ok ? "success" : "error");
      if (res.ok) setForm({ name: "", phone: "", message: "" });
    } catch {
      setStatus("error");
    }
  };

  const inputStyle: React.CSSProperties = {
    width: "100%", padding: "0.75rem 1rem",
    background: "var(--color-bg)", border: "1.5px solid var(--color-border)",
    borderRadius: "var(--radius-lg)", fontSize: "0.95rem",
    color: "var(--color-text)", fontFamily: "var(--font-body)",
    outline: "none", transition: "border-color var(--transition)",
  };

  return (
    <section style={{ paddingBlock: "clamp(4rem,10vw,6rem)", background: "var(--color-surface)" }} id="contact">
      <div className="container-narrow">
        <div style={{ textAlign: "center", marginBottom: "3rem" }}>
          <div className="section-label reveal" style={{ justifyContent: "center" }}>Сделайте первый шаг</div>
          <h2 className="reveal reveal-d1" style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2rem,1.2rem + 2.5vw,3.5rem)", marginBottom: "1rem" }}>
            Это проще,<br />чем кажется
          </h2>
          <p className="reveal reveal-d2" style={{ fontSize: "1rem", color: "var(--color-text-muted)", lineHeight: 1.7, maxWidth: "52ch", margin: "0 auto" }}>
            Вам не нужно точно знать «что не так». Именно для этого существует первая встреча. Просто напишите — и мы договоримся о времени.
          </p>
        </div>

        {status === "success" ? (
          <div className="reveal visible" style={{
            border: "1px solid var(--color-primary)", background: "var(--color-primary-light)",
            borderRadius: "var(--radius-xl)", padding: "3rem 2rem", textAlign: "center",
            display: "flex", flexDirection: "column", gap: "1rem", alignItems: "center",
          }}>
            <span style={{ fontSize: "3rem" }}>🌿</span>
            <h3 style={{ fontFamily: "var(--font-display)", fontSize: "1.75rem" }}>Заявка отправлена!</h3>
            <p style={{ color: "var(--color-text-muted)", fontSize: "0.95rem" }}>Ольга свяжется с вами в ближайшее время</p>
            <button onClick={() => setStatus("idle")} style={{ fontSize: "0.8rem", color: "var(--color-text-muted)", marginTop: "0.5rem", cursor: "pointer", background: "none", border: "none" }}>
              Отправить ещё одну заявку
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="reveal reveal-d2" style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            <input
              placeholder="Ваше имя"
              value={form.name} required
              onChange={e => setForm({ ...form, name: e.target.value })}
              style={inputStyle}
              onFocus={e => (e.target.style.borderColor = "var(--color-primary)")}
              onBlur={e => (e.target.style.borderColor = "var(--color-border)")}
            />
            <input
              placeholder="Телефон или Telegram"
              value={form.phone} required
              onChange={e => setForm({ ...form, phone: e.target.value })}
              style={inputStyle}
              onFocus={e => (e.target.style.borderColor = "var(--color-primary)")}
              onBlur={e => (e.target.style.borderColor = "var(--color-border)")}
            />
            <textarea
              placeholder="С чем хотите поработать? (необязательно)"
              value={form.message} rows={4}
              onChange={e => setForm({ ...form, message: e.target.value })}
              style={{ ...inputStyle, resize: "none" }}
              onFocus={e => (e.target.style.borderColor = "var(--color-primary)")}
              onBlur={e => (e.target.style.borderColor = "var(--color-border)")}
            />
            {status === "error" && (
              <p style={{ fontSize: "0.85rem", color: "#e05555", textAlign: "center" }}>Что-то пошло не так. Попробуйте ещё раз.</p>
            )}
            <button type="submit" disabled={status === "loading"} className="btn btn-primary btn-lg" style={{ justifyContent: "center", marginTop: "0.5rem" }}>
              {status === "loading" ? "Отправляю..." : "Записаться бесплатно →"}
            </button>
            <p style={{ fontSize: "0.75rem", color: "var(--color-text-faint)", textAlign: "center" }}>
              Нажимая кнопку, вы соглашаетесь на обработку персональных данных
            </p>
          </form>
        )}

        <div style={{ display: "flex", justifyContent: "center", gap: "2rem", marginTop: "2rem", flexWrap: "wrap" }}>
          {[
            { icon: "🕐", text: "Отвечаю в течение часа" },
            { icon: "📍", text: "Владивосток, онлайн по всей России" },
            { icon: "🔒", text: "Полная конфиденциальность" },
          ].map(c => (
            <span key={c.text} style={{ display: "flex", alignItems: "center", gap: "0.5rem", fontSize: "0.85rem", color: "var(--color-text-muted)" }}>
              <span>{c.icon}</span>{c.text}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
