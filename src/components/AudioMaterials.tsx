import { useState, useRef, useEffect } from "react";
import Icon from "@/components/ui/icon";

const categories = ["Все", "Медитации", "Подкасты", "Упражнения"];

const tracks = [
  {
    id: 1,
    category: "Медитации",
    title: "Дыхание для успокоения",
    description: "5 минут осознанного дыхания, чтобы вернуться в тело и снизить тревогу",
    duration: "5:12",
    src: "",
  },
  {
    id: 2,
    category: "Медитации",
    title: "Сканирование тела",
    description: "Практика для снятия телесного напряжения перед сном",
    duration: "12:40",
    src: "",
  },
  {
    id: 3,
    category: "Подкасты",
    title: "Что такое тревога",
    description: "Объясняю, откуда берётся тревога и почему бороться с ней — не лучшая идея",
    duration: "18:05",
    src: "",
  },
  {
    id: 4,
    category: "Подкасты",
    title: "Выгорание: когда всё надоело",
    description: "Признаки, причины и первые шаги к восстановлению",
    duration: "22:33",
    src: "",
  },
  {
    id: 5,
    category: "Упражнения",
    title: "Техника «Заземление 5-4-3-2-1»",
    description: "Быстрое упражнение при панике и острой тревоге",
    duration: "7:15",
    src: "",
  },
  {
    id: 6,
    category: "Упражнения",
    title: "Письмо себе будущему",
    description: "Ведомое упражнение для работы с неопределённостью и страхом перемен",
    duration: "9:48",
    src: "",
  },
];

const categoryIcon: Record<string, string> = {
  Медитации: "Waves",
  Подкасты: "Mic2",
  Упражнения: "Dumbbell",
};

function MiniWave({ playing }: { playing: boolean }) {
  const bars = 5;
  return (
    <div className="flex items-center gap-[2px] h-4">
      {Array.from({ length: bars }).map((_, i) => (
        <div
          key={i}
          className="w-[3px] rounded-full"
          style={{
            background: "rgba(201,168,76,0.9)",
            height: playing ? undefined : "4px",
            animation: playing
              ? `audioBar${(i % 3) + 1} 0.8s ease-in-out infinite`
              : "none",
          }}
        />
      ))}
    </div>
  );
}

function TrackCard({
  track,
  isPlaying,
  onToggle,
}: {
  track: (typeof tracks)[0];
  isPlaying: boolean;
  onToggle: () => void;
}) {
  return (
    <div
      className="relative rounded-2xl border flex flex-col gap-3 p-5 transition-all duration-300 cursor-pointer group"
      style={{
        borderColor: isPlaying
          ? "rgba(201,168,76,0.6)"
          : "rgba(255,255,255,0.12)",
        background: isPlaying
          ? "rgba(201,168,76,0.08)"
          : "rgba(255,255,255,0.05)",
      }}
      onClick={onToggle}
    >
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-center gap-2">
          <span className="text-xs font-mono uppercase tracking-widest text-[#c9a84c]/70">
            {track.category}
          </span>
        </div>
        <span className="text-xs font-mono text-foreground/40 shrink-0">
          {track.duration}
        </span>
      </div>

      <h3 className="font-sentient text-lg leading-snug">{track.title}</h3>
      <p className="font-mono text-sm text-foreground/60 leading-relaxed">
        {track.description}
      </p>

      <div className="flex items-center justify-between mt-1">
        <div className="flex items-center gap-2">
          <button
            className="flex items-center justify-center w-9 h-9 rounded-full border transition-all duration-200"
            style={{
              borderColor: isPlaying
                ? "rgba(201,168,76,0.7)"
                : "rgba(255,255,255,0.2)",
              background: isPlaying ? "rgba(201,168,76,0.15)" : "transparent",
            }}
            onClick={(e) => {
              e.stopPropagation();
              onToggle();
            }}
          >
            <Icon
              name={isPlaying ? "Pause" : "Play"}
              size={16}
              className={isPlaying ? "text-[#c9a84c]" : "text-foreground/70"}
            />
          </button>
          {isPlaying && <MiniWave playing={isPlaying} />}
        </div>

        {track.src === "" && (
          <span className="text-xs font-mono text-foreground/30 uppercase tracking-widest">
            Скоро
          </span>
        )}
      </div>
    </div>
  );
}

export function AudioMaterials() {
  const [activeCategory, setActiveCategory] = useState("Все");
  const [playingId, setPlayingId] = useState<number | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const filtered =
    activeCategory === "Все"
      ? tracks
      : tracks.filter((t) => t.category === activeCategory);

  const handleToggle = (track: (typeof tracks)[0]) => {
    if (!track.src) return;

    if (playingId === track.id) {
      audioRef.current?.pause();
      setPlayingId(null);
    } else {
      if (audioRef.current) {
        audioRef.current.pause();
      }
      audioRef.current = new Audio(track.src);
      audioRef.current.play();
      audioRef.current.onended = () => setPlayingId(null);
      setPlayingId(track.id);
    }
  };

  useEffect(() => {
    return () => {
      audioRef.current?.pause();
    };
  }, []);

  return (
    <section
      id="audio"
      className="relative z-10 py-14 md:py-20"
      style={{
        background: "rgba(0,38,46,0.25)",
        backdropFilter: "blur(1px)",
      }}
    >
      <style>{`
        @keyframes audioBar1 { 0%,100%{height:4px} 50%{height:14px} }
        @keyframes audioBar2 { 0%,100%{height:10px} 50%{height:4px} }
        @keyframes audioBar3 { 0%,100%{height:6px} 50%{height:12px} }
      `}</style>

      <div className="container">
        <p className="font-mono text-sm uppercase text-[#c9a84c]/80 text-center tracking-widest mb-4">
          Аудио
        </p>
        <h2 className="font-sentient text-4xl md:text-5xl text-center mb-4">
          Материалы для самостоятельной работы
        </h2>
        <p className="font-mono text-sm text-foreground/50 text-center max-w-md mx-auto mb-10">
          Слушайте в любое время — дома, в дороге, перед сном
        </p>

        {/* Фильтр категорий */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className="flex items-center gap-1.5 px-4 py-2 rounded-full font-mono text-xs uppercase tracking-widest transition-all duration-200 border"
              style={{
                borderColor:
                  activeCategory === cat
                    ? "rgba(201,168,76,0.7)"
                    : "rgba(255,255,255,0.15)",
                background:
                  activeCategory === cat
                    ? "rgba(201,168,76,0.12)"
                    : "transparent",
                color:
                  activeCategory === cat
                    ? "rgba(201,168,76,1)"
                    : "rgba(255,255,255,0.5)",
              }}
            >
              {cat !== "Все" && (
                <Icon
                  name={categoryIcon[cat] || "Music"}
                  size={12}
                />
              )}
              {cat}
            </button>
          ))}
        </div>

        {/* Сетка треков */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
          {filtered.map((track) => (
            <TrackCard
              key={track.id}
              track={track}
              isPlaying={playingId === track.id}
              onToggle={() => handleToggle(track)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}