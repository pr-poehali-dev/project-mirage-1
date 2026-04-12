export function SectionCTA() {
  return (
    <div
      className="relative z-10 flex justify-center py-6"
      style={{ background: 'rgba(0,38,46,0.6)', backdropFilter: 'blur(8px)' }}
    >
      <a href="#contact">
        <button
          className="font-mono text-sm border rounded-xl px-8 py-3 transition-all duration-200 group"
          style={{
            borderColor: 'rgba(201,168,76,0.35)',
            color: 'rgba(201,168,76,0.85)',
            background: 'rgba(201,168,76,0.05)',
          }}
          onMouseEnter={e => {
            (e.currentTarget as HTMLButtonElement).style.background = 'rgba(201,168,76,0.13)';
            (e.currentTarget as HTMLButtonElement).style.borderColor = 'rgba(201,168,76,0.65)';
          }}
          onMouseLeave={e => {
            (e.currentTarget as HTMLButtonElement).style.background = 'rgba(201,168,76,0.05)';
            (e.currentTarget as HTMLButtonElement).style.borderColor = 'rgba(201,168,76,0.35)';
          }}
        >
          Записаться на консультацию →
        </button>
      </a>
    </div>
  );
}
