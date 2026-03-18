import { motion } from "framer-motion";

const problems = [
  "Текучка кадров выше нормы, а причины неясны",
  "Наём затягивается, подходящих кандидатов мало",
  "Адаптация формальная — новички уходят в первые 3 месяца",
  "HR-отдел работает, но результаты не измеримы",
  "Сотрудники демотивированы, но никто не понимает почему",
  "Нет системы удержания ключевых людей",
  "Руководство и HR говорят на разных языках",
  "Процессы есть, но они устарели и не работают",
];

const ProblemsSection = () => (
  <section className="section-alt py-24 sm:py-32 section-divider">
    <div className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <span className="badge-pill mb-6">Проблемы</span>
        <h2 className="text-3xl sm:text-5xl font-display font-bold text-foreground mb-5 tracking-tight">
          Какие проблемы аудит помогает увидеть
        </h2>
        <p className="text-muted-foreground max-w-xl mx-auto text-lg">
          Если узнаёте хотя бы 2 пункта — аудит для вас
        </p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-3xl mx-auto">
        {problems.map((p, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
            className="flex items-start gap-4 p-5 rounded-2xl bg-secondary/40 border border-border/30 hover:border-primary/20 transition-colors"
          >
            <span className="w-2.5 h-2.5 rounded-full bg-primary flex-shrink-0 mt-1.5" />
            <p className="text-sm text-foreground/85 leading-relaxed">{p}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ProblemsSection;
