import { useState } from "react";
import Icon from "@/components/ui/icon";
import { LegalModal } from "@/components/LegalModal";

export function Footer() {
  const [modal, setModal] = useState<"privacy" | "consent" | null>(null);
  return (
    <>
    <footer
      className="relative z-10 py-8 border-t border-foreground/10"
      style={{ background: 'rgba(0,28,34,0.5)', backdropFilter: 'blur(1px)' }}
    >
      <div className="container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-5 md:gap-8">

          {/* Имя и описание */}
          <div className="flex flex-col gap-1 text-center md:text-left">
            <span className="font-sentient text-xl text-foreground">Ольга Разумова</span>
            <span className="font-mono text-xs text-[#c9a84c]/60 uppercase tracking-widest">Психолог · Социальная психология</span>
          </div>

          {/* Контакты */}
          <div className="flex flex-col sm:flex-row items-center gap-6">
            <a
              href="https://t.me/igraol"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 font-mono text-sm text-foreground/60 hover:text-[#c9a84c] transition-colors duration-200"
            >
              <Icon name="Send" size={16} />
              @igraol
            </a>
            <a
              href="tel:+79142755070"
              className="flex items-center gap-2 font-mono text-sm text-foreground/60 hover:text-[#c9a84c] transition-colors duration-200"
            >
              <Icon name="Phone" size={16} />
              +7 914 275-50-70
            </a>
          </div>

          {/* Копирайт + документы */}
          <div className="flex flex-col items-center md:items-end gap-2">
            <p className="font-mono text-xs text-foreground/30">
              © {new Date().getFullYear()} Ольга Разумова
            </p>
            <div className="flex items-center gap-4">
              <button
                onClick={() => setModal("privacy")}
                className="font-mono text-xs text-foreground/30 hover:text-[#c9a84c] transition-colors underline underline-offset-2"
              >
                Политика конфиденциальности
              </button>
              <button
                onClick={() => setModal("consent")}
                className="font-mono text-xs text-foreground/30 hover:text-[#c9a84c] transition-colors underline underline-offset-2"
              >
                Согласие на обработку данных
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>

    {modal && <LegalModal type={modal} onClose={() => setModal(null)} />}
    </>
  );
}