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
  <section className="py-20 sm:py-28 border-t border-border">
    <div className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-14"
      >
        <h2 className="text-3xl sm:text-4xl font-display font-bold text-foreground mb-4">
          Как проходит аудит
        </h2>
        <p className="text-muted-foreground">6 простых шагов — от заявки до результата</p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {steps.map((s, i) => (
          <motion.div
            key={s.num}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="card-glass p-6 relative overflow-hidden"
          >
            <span className="absolute top-4 right-5 text-5xl font-bold text-primary/10 font-body">
              {s.num}
            </span>
            <div className="relative">
              <h3 className="text-lg font-semibold text-foreground font-body mb-2">{s.title}</h3>
              <p className="text-sm text-muted-foreground">{s.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default StepsSection;
