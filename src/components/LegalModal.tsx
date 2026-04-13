import { useEffect } from "react";
import Icon from "@/components/ui/icon";

type ModalType = "privacy" | "consent";

interface LegalModalProps {
  type: ModalType;
  onClose: () => void;
}

const content: Record<ModalType, { title: string; body: React.ReactNode }> = {
  privacy: {
    title: "Политика конфиденциальности",
    body: (
      <div className="flex flex-col gap-5 font-mono text-sm text-foreground/70 leading-relaxed">
        <p>Настоящая политика определяет порядок обработки и защиты персональных данных пользователей сайта.</p>

        <div>
          <h4 className="text-foreground/90 mb-2 uppercase tracking-widest text-xs">1. Оператор</h4>
          <p>Индивидуальный психолог Разумова Ольга (далее — «Оператор»). Контакт: <a href="tel:+79142755070" className="text-[#c9a84c] hover:underline">+7 914 275-50-70</a>, <a href="https://t.me/igraol" className="text-[#c9a84c] hover:underline">@igraol</a>.</p>
        </div>

        <div>
          <h4 className="text-foreground/90 mb-2 uppercase tracking-widest text-xs">2. Какие данные собираются</h4>
          <p>При заполнении формы: имя, номер телефона или Telegram-никнейм, текст сообщения. Технические данные: IP-адрес, тип браузера, страницы посещения (через Яндекс.Метрику).</p>
        </div>

        <div>
          <h4 className="text-foreground/90 mb-2 uppercase tracking-widest text-xs">3. Цели обработки</h4>
          <ul className="list-disc list-inside flex flex-col gap-1">
            <li>Связь с пользователем для записи на консультацию</li>
            <li>Улучшение работы сайта и качества услуг</li>
            <li>Соблюдение требований законодательства РФ</li>
          </ul>
        </div>

        <div>
          <h4 className="text-foreground/90 mb-2 uppercase tracking-widest text-xs">4. Передача третьим лицам</h4>
          <p>Данные не передаются третьим лицам без согласия пользователя, за исключением случаев, предусмотренных законодательством РФ.</p>
        </div>

        <div>
          <h4 className="text-foreground/90 mb-2 uppercase tracking-widest text-xs">5. Хранение и защита</h4>
          <p>Данные хранятся на защищённых серверах. Оператор принимает технические и организационные меры для защиты от несанкционированного доступа, изменения или уничтожения данных.</p>
        </div>

        <div>
          <h4 className="text-foreground/90 mb-2 uppercase tracking-widest text-xs">6. Права пользователя</h4>
          <p>Пользователь вправе в любой момент запросить изменение или удаление своих данных, направив обращение на контакты Оператора.</p>
        </div>

        <div>
          <h4 className="text-foreground/90 mb-2 uppercase tracking-widest text-xs">7. Файлы cookie</h4>
          <p>Сайт использует файлы cookie для аналитики (Яндекс.Метрика). Продолжая использование сайта, вы соглашаетесь с их применением.</p>
        </div>

        <p className="text-foreground/40 text-xs">Дата последнего обновления: апрель 2025 г.</p>
      </div>
    ),
  },
  consent: {
    title: "Согласие на обработку персональных данных",
    body: (
      <div className="flex flex-col gap-5 font-mono text-sm text-foreground/70 leading-relaxed">
        <p>Настоящим, в соответствии с Федеральным законом № 152-ФЗ «О персональных данных», я даю своё согласие на обработку моих персональных данных.</p>

        <div>
          <h4 className="text-foreground/90 mb-2 uppercase tracking-widest text-xs">Оператор</h4>
          <p>Индивидуальный психолог Разумова Ольга. Контакт: <a href="tel:+79142755070" className="text-[#c9a84c] hover:underline">+7 914 275-50-70</a>.</p>
        </div>

        <div>
          <h4 className="text-foreground/90 mb-2 uppercase tracking-widest text-xs">Перечень персональных данных</h4>
          <ul className="list-disc list-inside flex flex-col gap-1">
            <li>Имя</li>
            <li>Номер телефона и/или Telegram-никнейм</li>
            <li>Текст обращения</li>
          </ul>
        </div>

        <div>
          <h4 className="text-foreground/90 mb-2 uppercase tracking-widest text-xs">Цели обработки</h4>
          <p>Организация записи на психологическую консультацию, связь с целью уточнения деталей и согласования времени.</p>
        </div>

        <div>
          <h4 className="text-foreground/90 mb-2 uppercase tracking-widest text-xs">Действия с данными</h4>
          <p>Сбор, запись, систематизация, хранение, уточнение, использование, уничтожение. Обработка осуществляется без передачи третьим лицам.</p>
        </div>

        <div>
          <h4 className="text-foreground/90 mb-2 uppercase tracking-widest text-xs">Срок действия согласия</h4>
          <p>Согласие действует до момента его отзыва. Для отзыва необходимо направить соответствующее обращение Оператору по указанным контактам.</p>
        </div>

        <div className="border border-[#c9a84c]/20 rounded-xl p-4 bg-[#c9a84c]/5">
          <p className="text-foreground/60 text-xs">Отправляя форму на сайте, вы подтверждаете, что ознакомлены с настоящим согласием и выражаете его в электронном виде.</p>
        </div>

        <p className="text-foreground/40 text-xs">Дата последнего обновления: апрель 2025 г.</p>
      </div>
    ),
  },
};

export function LegalModal({ type, onClose }: LegalModalProps) {
  const { title, body } = content[type];

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-[999] flex items-end sm:items-center justify-center p-0 sm:p-4"
      style={{ background: "rgba(0,0,0,0.75)", backdropFilter: "blur(6px)" }}
      onClick={onClose}
    >
      <div
        className="relative w-full sm:max-w-2xl max-h-[90vh] rounded-t-2xl sm:rounded-2xl flex flex-col"
        style={{
          background: "rgba(0,38,46,0.98)",
          border: "1px solid rgba(201,168,76,0.2)",
          boxShadow: "0 0 60px rgba(0,0,0,0.6)",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Шапка */}
        <div className="flex items-center justify-between px-6 pt-6 pb-4 border-b border-foreground/10 shrink-0">
          <h3 className="font-sentient text-xl text-foreground">{title}</h3>
          <button
            onClick={onClose}
            className="flex items-center justify-center w-8 h-8 rounded-full text-foreground/40 hover:text-foreground/80 transition-colors"
            style={{ background: "rgba(255,255,255,0.07)" }}
          >
            <Icon name="X" size={16} />
          </button>
        </div>

        {/* Контент */}
        <div className="overflow-y-auto px-6 py-5 flex-1">{body}</div>

        {/* Футер */}
        <div className="px-6 pb-6 pt-4 border-t border-foreground/10 shrink-0">
          <button
            onClick={onClose}
            className="w-full h-11 rounded-xl font-mono text-sm uppercase tracking-widest transition-all duration-200"
            style={{
              background: "rgba(201,168,76,0.15)",
              border: "1px solid rgba(201,168,76,0.4)",
              color: "rgba(201,168,76,1)",
            }}
          >
            Понятно
          </button>
        </div>
      </div>
    </div>
  );
}
