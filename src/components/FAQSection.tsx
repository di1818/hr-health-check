import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "Чем отличается аудит от трекерства?",
    a: "Аудит — это разовая диагностика: мы оцениваем процессы, даём отчёт и рекомендации. Трекерство — это сопровождение: эксперт ведёт компанию до конкретного результата, помогая внедрять изменения шаг за шагом.",
  },
  {
    q: "Сколько стоит работа?",
    a: "Аудит — от 20 000 до 50 000 ₽ в зависимости от размера компании. Трекерство — от 200 000 ₽, формат и срок согласуем индивидуально. Курс «HR Инструментарий» — 60 000 ₽ (вместо 120 000 ₽) по текущей акции.",
  },
  {
    q: "Сколько времени занимает аудит?",
    a: "Заполнение анкеты — 15 минут. Сбор данных и анализ — несколько дней. Личная консультация по результатам — около 60 минут.",
  },
  {
    q: "Для каких компаний подходит?",
    a: "Для компаний от 10 до 500+ сотрудников, где есть HR-функция или потребность в ней. Курс подойдёт тем, кто занимается подбором и хочет внедрить работающую систему.",
  },
  {
    q: "Как проходит консультация?",
    a: "Онлайн, через Zoom или Google Meet. В удобное для вас время.",
  },
  {
    q: "Можно ли начать с аудита, а потом перейти к трекерству или курсу?",
    a: "Да. Аудит часто становится первым шагом — после него вы понимаете, какой формат работы вам нужен. Стоимость аудита можем зачесть при переходе на сопровождение.",
  },
];

const FAQSection = () => {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="relative py-24 sm:py-32 section-divider">
      <div className="section-container relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="badge-pill mb-6">FAQ</span>
          <h2 className="text-3xl sm:text-5xl font-display font-bold text-foreground mb-4 tracking-tight">
            Частые вопросы
          </h2>
        </motion.div>

        <div className="max-w-2xl mx-auto space-y-3">
          {faqs.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="card-glass overflow-hidden"
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between p-6 text-left group"
              >
                <span className="font-medium text-foreground pr-4 font-display tracking-tight">{f.q}</span>
                <ChevronDown
                  className={`w-5 h-5 text-muted-foreground flex-shrink-0 transition-transform duration-300 ${
                    open === i ? "rotate-180 text-primary" : ""
                  }`}
                />
              </button>
              <AnimatePresence>
                {open === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6 text-sm text-muted-foreground leading-relaxed">
                      {f.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
