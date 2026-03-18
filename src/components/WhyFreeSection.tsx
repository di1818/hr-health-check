import { motion } from "framer-motion";

const reasons = [
  {
    title: "Отбор сильных клиентов",
    desc: "Аудит помогает нам понять, кому наш курс действительно нужен — а кому пока нет",
  },
  {
    title: "Доверие важнее продаж",
    desc: "Мы строим долгосрочные отношения. Если курс не нужен — мы об этом скажем",
  },
  {
    title: "Качество входа",
    desc: "Участники, прошедшие аудит, получают от курса в разы больше результата",
  },
];

const WhyFreeSection = () => (
  <section className="py-20 sm:py-28 border-t border-border">
    <div className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-14"
      >
        <h2 className="text-3xl sm:text-4xl font-display font-bold text-foreground mb-4">
          Почему мы делаем это бесплатно
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 max-w-4xl mx-auto">
        {reasons.map((r, i) => (
          <motion.div
            key={r.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="card-glass p-6 text-center"
          >
            <h3 className="font-semibold text-foreground font-body mb-2">{r.title}</h3>
            <p className="text-sm text-muted-foreground">{r.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default WhyFreeSection;
