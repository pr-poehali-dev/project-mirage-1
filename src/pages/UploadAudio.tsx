import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";

export default function UploadAudio() {
  const [status, setStatus] = useState<"idle" | "loading" | "done" | "error">("idle");
  const [url, setUrl] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  const handleUpload = async () => {
    const file = inputRef.current?.files?.[0];
    if (!file) return;

    setStatus("loading");
    const reader = new FileReader();
    reader.onload = async (e) => {
      const base64 = (e.target?.result as string).split(",")[1];
      try {
        const res = await fetch("https://functions.poehali.dev/120e1d99-788f-4691-96a4-829f1d294156", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ file: base64, filename: file.name }),
        });
        const data = await res.json();
        if (data.url) {
          setUrl(data.url);
          setStatus("done");
        } else {
          setStatus("error");
        }
      } catch {
        setStatus("error");
      }
    };
    reader.readAsDataURL(file);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#003841] px-4">
      <div className="max-w-md w-full border border-foreground/10 rounded-2xl p-8 flex flex-col gap-6"
        style={{ background: 'rgba(255,255,255,0.05)' }}>
        <h1 className="font-sentient text-3xl text-[#c9a84c] text-center">Загрузка музыки</h1>

        <input
          ref={inputRef}
          type="file"
          accept="audio/mp3,audio/mpeg,audio/*"
          className="font-mono text-sm text-foreground/70 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:font-mono file:text-sm file:bg-[#c9a84c]/20 file:text-[#c9a84c] hover:file:bg-[#c9a84c]/30 cursor-pointer"
        />

        <Button onClick={handleUpload} disabled={status === "loading"}>
          {status === "loading" ? "Загружаю..." : "[Загрузить →]"}
        </Button>

        {status === "done" && (
          <div className="flex flex-col gap-3">
            <p className="font-mono text-sm text-green-400">Файл загружен!</p>
            <p className="font-mono text-xs text-foreground/50 break-all">URL файла:</p>
            <code className="font-mono text-xs text-[#c9a84c] break-all bg-foreground/5 p-3 rounded-lg">{url}</code>
            <p className="font-mono text-xs text-foreground/40">Скопируй этот URL и передай разработчику для подключения плеера</p>
          </div>
        )}

        {status === "error" && (
          <p className="font-mono text-sm text-red-400">Ошибка загрузки. Попробуй ещё раз.</p>
        )}
      </div>
    </div>
  );
}
