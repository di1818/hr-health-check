import { motion } from "framer-motion";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "Это действительно бесплатно?",
    a: "Да. Аудит и консультация полностью бесплатны. Никаких скрытых платежей.",
  },
  {
    q: "Сколько времени занимает аудит?",
    a: "Заполнение анкеты — 15 минут. Консультация по результатам — около 60 минут.",
  },
  {
    q: "Будете продавать курс на консультации?",
    a: "Нет. Мы расскажем о результатах аудита и дадим рекомендации. Если курс вам не подходит — честно скажем.",
  },
  {
    q: "Для каких компаний подходит?",
    a: "Для компаний от 10 до 500+ сотрудников, где есть HR-функция или потребность в ней.",
  },
  {
    q: "Что будет после аудита?",
    a: "Вы получите отчёт и рекомендации. Дальше решаете сами: внедрять самостоятельно, пройти курс или работать с нами.",
  },
  {
    q: "Как проходит консультация?",
    a: "Онлайн, через Zoom или Google Meet. В удобное для вас время.",
  },
];

const FAQSection = () => {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="py-20 sm:py-28 border-t border-border">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-foreground mb-4">
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
                className="w-full flex items-center justify-between p-5 text-left"
              >
                <span className="font-medium text-foreground pr-4">{f.q}</span>
                <ChevronDown
                  className={`w-5 h-5 text-muted-foreground flex-shrink-0 transition-transform ${
                    open === i ? "rotate-180" : ""
                  }`}
                />
              </button>
              {open === i && (
                <div className="px-5 pb-5 text-sm text-muted-foreground">
                  {f.a}
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
