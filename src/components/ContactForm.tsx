import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";
import { useReveal } from "@/hooks/useReveal";

export function ContactForm() {
  const [form, setForm] = useState({ name: "", phone: "", message: "" });
  const ref = useReveal();
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
      if (res.ok) {
        setStatus("success");
        setForm({ name: "", phone: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section ref={ref} id="contact" className="relative z-10 py-24 md:py-32" style={{background: 'rgba(0,38,46,0.75)', backdropFilter: 'blur(12px)'}}>
      <div className="container">
      <div className="max-w-xl mx-auto">
        <p className="font-mono text-sm uppercase text-[#c9a84c]/80 text-center tracking-widest mb-4">
          Контакты
        </p>
        <h2 className="font-sentient text-4xl md:text-5xl text-center mb-4">
          Запишитесь на консультацию
        </h2>
        <p className="font-mono text-base text-foreground/70 text-center mb-8">
          Отвечу в течение нескольких часов и согласую удобное время
        </p>

        {/* Альтернативные контакты */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
          <a
            href="https://t.me/igraol"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 border border-foreground/10 rounded-xl px-5 py-3 font-mono text-sm text-foreground/60 hover:text-[#c9a84c] hover:border-[#c9a84c]/40 transition-all duration-200 w-full sm:w-auto justify-center"
            style={{ background: 'rgba(255,255,255,0.03)' }}
          >
            <Icon name="Send" size={15} />
            Написать в Telegram
          </a>
          <a
            href="tel:+79142755070"
            className="flex items-center gap-2 border border-foreground/10 rounded-xl px-5 py-3 font-mono text-sm text-foreground/60 hover:text-[#c9a84c] hover:border-[#c9a84c]/40 transition-all duration-200 w-full sm:w-auto justify-center"
            style={{ background: 'rgba(255,255,255,0.03)' }}
          >
            <Icon name="Phone" size={15} />
            +7 914 275-50-70
          </a>
        </div>

        <div className="flex items-center gap-4 mb-8">
          <div className="flex-1 h-px bg-foreground/10" />
          <span className="font-mono text-xs text-foreground/30 uppercase tracking-widest">или заполните форму</span>
          <div className="flex-1 h-px bg-foreground/10" />
        </div>

        {status === "success" ? (
          <div className="border border-[#4a7c6f]/40 bg-[#4a7c6f]/10 rounded-2xl p-10 text-center flex flex-col gap-3">
            <span className="text-4xl">🌿</span>
            <h3 className="font-sentient text-2xl">Заявка отправлена!</h3>
            <p className="font-mono text-sm text-foreground/50">
              Ольга свяжется с вами в ближайшее время
            </p>
            <Button
              variant="ghost"
              className="mt-4 font-mono text-xs text-foreground/40 hover:text-foreground/60 mx-auto"
              onClick={() => setStatus("idle")}
            >
              Отправить ещё одну заявку
            </Button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <Input
              placeholder="Ваше имя"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              required
              className="bg-foreground/[0.03] border-foreground/10 rounded-xl h-12 font-mono text-sm placeholder:text-foreground/30 focus-visible:border-[#4a7c6f]"
            />
            <Input
              placeholder="Телефон или Telegram"
              value={form.phone}
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
              required
              className="bg-foreground/[0.03] border-foreground/10 rounded-xl h-12 font-mono text-sm placeholder:text-foreground/30 focus-visible:border-[#4a7c6f]"
            />
            <Textarea
              placeholder="С чем хотите поработать? (необязательно)"
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              rows={4}
              className="bg-foreground/[0.03] border-foreground/10 rounded-xl font-mono text-sm placeholder:text-foreground/30 focus-visible:border-[#4a7c6f] resize-none"
            />

            {status === "error" && (
              <p className="font-mono text-xs text-red-400 text-center">
                Что-то пошло не так. Попробуйте ещё раз или напишите напрямую.
              </p>
            )}

            <Button
              type="submit"
              disabled={status === "loading"}
              className="mt-2 h-12 text-base"
            >
              {status === "loading" ? "Отправляю..." : "[Записаться бесплатно →]"}
            </Button>

            <p className="font-mono text-xs text-foreground/30 text-center">
              Нажимая кнопку, вы соглашаетесь на обработку персональных данных
            </p>
          </form>
        )}
      </div>
      </div>
    </section>
  );
}