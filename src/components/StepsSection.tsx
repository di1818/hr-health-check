import { motion } from "framer-motion";

const steps = [
  { num: "01", title: "Заявка", desc: "Заполняете короткую форму — занимает 2 минуты" },
  { num: "02", title: "Анкета", desc: "Получаете диагностическую анкету для самооценки HR-процессов" },
  { num: "03", title: "Анализ", desc: "Наш эксперт анализирует ответы и готовит отчёт" },
  { num: "04", title: "Консультация", desc: "Проводим онлайн-встречу: разбираем результаты, отвечаем на вопросы" },
  { num: "05", title: "Рекомендации", desc: "Получаете документ с конкретными шагами и приоритетами" },
  { num: "06", title: "Решение", desc: "Вы решаете сами: внедрять рекомендации, пройти курс или работать с нами" },
];

const StepsSection = () => (
  <section id="steps" className="relative py-24 sm:py-32 section-divider overflow-hidden">
    <div className="section-container relative">
    <div className="section-container relative">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <span className="badge-pill mb-6">Процесс</span>
        <h2 className="text-3xl sm:text-5xl font-display font-bold text-foreground mb-5 tracking-tight">
          Как проходит аудит
        </h2>
        <p className="text-muted-foreground text-lg">6 простых шагов — от заявки до результата</p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {steps.map((s, i) => (
          <motion.div
            key={s.num}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="card-glass p-7 relative overflow-hidden glow-hover group"
          >
            <span className="absolute top-4 right-5 text-6xl font-bold text-primary/8 font-display">
              {s.num}
            </span>
            <div className="relative">
              <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center mb-4 text-sm font-bold text-primary font-display group-hover:bg-primary/20 transition-colors">
                {s.num}
              </div>
              <h3 className="text-lg font-semibold text-foreground font-display mb-2 tracking-tight">{s.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default StepsSection;
