import { motion, AnimatePresence } from "framer-motion";
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
    <section className="relative py-24 sm:py-32 section-divider">
      <div className="absolute inset-0 dots-bg opacity-15" />
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
