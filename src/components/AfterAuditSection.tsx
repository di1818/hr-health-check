import { motion } from "framer-motion";
import { Lightbulb, GraduationCap, Handshake } from "lucide-react";

const paths = [
  {
    icon: Lightbulb,
    title: "Самостоятельное внедрение",
    desc: "Получаете рекомендации и внедряете изменения силами своей команды. Бесплатно.",
  },
  {
    icon: GraduationCap,
    title: "Курс «HR Инструментарий»",
    desc: "Системная программа для выстраивания HR-процессов с поддержкой и практикой.",
  },
  {
    icon: Handshake,
    title: "Глубокая работа с экспертом",
    desc: "Индивидуальное сопровождение: стратегия, внедрение, контроль результатов.",
  },
];

const AfterAuditSection = () => (
  <section className="py-20 sm:py-28 border-t border-border">
    <div className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-14"
      >
        <h2 className="text-3xl sm:text-4xl font-display font-bold text-foreground mb-4">
          Что дальше после аудита
        </h2>
        <p className="text-muted-foreground max-w-xl mx-auto">
          Вы сами выбираете, как двигаться дальше. Без давления.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 max-w-4xl mx-auto">
        {paths.map((p, i) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="card-glass p-6 text-center glow-hover"
          >
            <p.icon className="w-10 h-10 text-primary mx-auto mb-4" />
            <h3 className="font-semibold text-foreground font-body mb-2">{p.title}</h3>
            <p className="text-sm text-muted-foreground">{p.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default AfterAuditSection;
