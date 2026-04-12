import { useState, useRef, useEffect } from "react";
import Icon from "@/components/ui/icon";

interface AudioPlayerProps {
  src: string;
}

export function AudioPlayer({ src }: AudioPlayerProps) {
  const [playing, setPlaying] = useState(false);
  const [visible, setVisible] = useState(true);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    if (playing) {
      audio.play().catch(() => setPlaying(false));
    } else {
      audio.pause();
    }
  }, [playing]);

  if (!visible) return null;

  return (
    <div
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2"
      style={{ filter: 'drop-shadow(0 0 12px rgba(201,168,76,0.3))' }}
    >
      <button
        onClick={() => setPlaying(!playing)}
        className="w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 border"
        style={{
          background: playing ? 'rgba(201,168,76,0.2)' : 'rgba(0,38,46,0.8)',
          borderColor: playing ? 'rgba(201,168,76,0.7)' : 'rgba(201,168,76,0.3)',
          backdropFilter: 'blur(8px)',
        }}
        title={playing ? "Выключить музыку" : "Включить музыку"}
      >
        <Icon
          name={playing ? "Volume2" : "VolumeX"}
          size={18}
          className={playing ? "text-[#c9a84c]" : "text-foreground/50"}
        />
      </button>

      <button
        onClick={() => { setPlaying(false); setVisible(false); }}
        className="w-6 h-6 rounded-full flex items-center justify-center opacity-40 hover:opacity-70 transition-opacity"
        style={{ background: 'rgba(0,0,0,0.4)' }}
        title="Скрыть"
      >
        <Icon name="X" size={12} />
      </button>

      <audio ref={audioRef} src={src} loop />
    </div>
  );
}
