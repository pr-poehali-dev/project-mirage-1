import Icon from "@/components/ui/icon";

export function Footer() {
  return (
    <footer
      className="relative z-10 py-12 border-t border-foreground/10"
      style={{ background: 'rgba(0,28,34,0.97)', backdropFilter: 'blur(12px)' }}
    >
      <div className="container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">

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

          {/* Копирайт */}
          <p className="font-mono text-xs text-foreground/30">
            © {new Date().getFullYear()} Ольга Разумова
          </p>
        </div>
      </div>
    </footer>
  );
}
