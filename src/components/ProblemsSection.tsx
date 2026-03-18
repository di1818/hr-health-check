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
  <section className="py-20 sm:py-28 border-t border-border">
    <div className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-14"
      >
        <h2 className="text-3xl sm:text-4xl font-display font-bold text-foreground mb-4">
          Какие проблемы аудит помогает увидеть
        </h2>
        <p className="text-muted-foreground max-w-xl mx-auto">
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
            className="flex items-start gap-3 p-4 rounded-xl bg-secondary/50"
          >
            <span className="w-2 h-2 rounded-full bg-primary flex-shrink-0 mt-2" />
            <p className="text-sm text-foreground/90">{p}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ProblemsSection;
