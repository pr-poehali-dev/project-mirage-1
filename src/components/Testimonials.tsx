import { useState } from "react";
import Icon from "@/components/ui/icon";

const testimonials = [
  {
    name: "Mila лифт Sv",
    text: "Я в полном восторге от практики с Ольгой! Это что-то невероятное!!!\nОльга, у тебя дар от Бога!\n2.5 часа работы 😄\nМоей благодарности нет границ.\n\nМы столько всего исследовали. Ольга вернула мне моего «спортсмена», который на графике в адском минусе. Мы копнули глубинные слои моей психики, отыскали установки, которые однозначно нужно анализировать, и возможно двигать.\nБлагодаря нашей сессии я посмотрела на своё привычное поведение через призму стратегий.\nМы поговорили о моей большой цели и о путях её достижения.\nТак же благодарна за бережное, тёплое общение! 🙏",
  },
  {
    name: "Ольга Груздева",
    text: "Всем привет! Хочу поделиться!\nВчера сдалась целиком и полностью Ольге.\nУдивительно как она филигранно подсветила мне что стратегия спортсмена меня может вытащить из сложной жизненной ямы, я не видела до этого что использую именно её в сложных ситуациях.\nЕще показала мне каким может быть мой страт и как перестать его отрицать. Есть о чём подумать 😍\nОля благодарю сердечно!",
  },
  {
    name: "Наталья Лысова",
    text: "Ольга, благодарю ещё раз за встречу 😍\nТы чётко вела меня своими вопросами, я погрузилась и в итоге даже примеры привела, которые вроде и знала, но сейчас они точно подсветили мою точку Б 🔥 машину так быстро не поменяю, но шкаф почистить уже могу 😄",
  },
  {
    name: "Мария Хозяева",
    text: "Оля, я от всей души благодарю тебя за консультацию. Это было так глубоко, так ценно, столько осознаний, пониманий программ, которые тормозят, благодаря диагностики я выявила минусы и как их можно повернуть в плюсы. Я задумалась совсем с другой стороны о многих сферах своей жизни. Ты очень внимательный специалист, твоя включённость поражает. Мне безумно понравилось работать с тобой!",
  },
  {
    name: "Виктория",
    text: "Всем доброе время суток! Хочу поблагодарить девочек и себя!\nБольшое спасибо за сессию.\nВчера мы встречались, и я до сих пор не могу отойти от встречи — я в шоке. Мой шопоголизм связан с моими отношениями с отцом... Вчера меня весь день трясло. Потом сидела в машине и почувствовала, как мы с ним поговорили и как он меня обнимал. У меня такое ощущение, что я двинулась головой 🤣 (сейчас и смеюсь, и плачу). Я ощущаю, что он рядом.\nОлечка, спасибо тебе огромное, ты — огонь! 🔥🔥🔥\nЯ заново родилась. Знаю, что это только начало. 🙏",
  },
];

export function Testimonials() {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c === 0 ? testimonials.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === testimonials.length - 1 ? 0 : c + 1));

  const t = testimonials[current];

  return (
    <section className="relative z-10 py-24 md:py-32" style={{ background: "rgba(10,21,32,0.92)" }}>
      <div className="container">
        <p className="font-mono text-xs uppercase text-foreground/40 text-center tracking-widest mb-4">
          Отзывы
        </p>
        <h2 className="font-sentient text-4xl md:text-5xl text-center mb-14">
          Что говорят клиенты
        </h2>

        <div className="max-w-2xl mx-auto">
          <div className="border border-foreground/10 rounded-2xl p-8 md:p-10 flex flex-col gap-6" style={{ background: "rgba(14,28,42,0.8)" }}>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#4a7c6f]/30 border border-[#4a7c6f]/40 flex items-center justify-center font-sentient text-lg text-[#4a7c6f]">
                {t.name[0]}
              </div>
              <span className="font-mono text-sm text-foreground/70">{t.name}</span>
            </div>

            <p className="text-foreground/80 leading-relaxed whitespace-pre-line text-sm md:text-base">
              {t.text}
            </p>
          </div>

          <div className="flex items-center justify-between mt-8">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-full border border-foreground/20 flex items-center justify-center hover:border-foreground/40 transition-colors"
            >
              <Icon name="ChevronLeft" size={18} />
            </button>

            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    i === current ? "bg-[#4a7c6f]" : "bg-foreground/20"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="w-10 h-10 rounded-full border border-foreground/20 flex items-center justify-center hover:border-foreground/40 transition-colors"
            >
              <Icon name="ChevronRight" size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
