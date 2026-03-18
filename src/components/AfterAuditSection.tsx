import { motion } from "framer-motion";
import { Lightbulb, GraduationCap, Handshake } from "lucide-react";

const paths = [
  {
    icon: Lightbulb,
    title: "Самостоятельное внедрение",
    desc: "Получаете рекомендации и внедряете изменения силами своей команды. Бесплатно.",
    accent: false,
  },
  {
    icon: GraduationCap,
    title: "Курс «HR Инструментарий»",
    desc: "Системная программа для выстраивания HR-процессов с поддержкой и практикой.",
    accent: true,
  },
  {
    icon: Handshake,
    title: "Глубокая работа с экспертом",
    desc: "Индивидуальное сопровождение: стратегия, внедрение, контроль результатов.",
    accent: false,
  },
];

const AfterAuditSection = () => (
  <section className="relative py-24 sm:py-32 section-divider overflow-hidden">
    <div className="section-container relative">
    <div className="section-container relative">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <span className="badge-pill mb-6">Дальше</span>
        <h2 className="text-3xl sm:text-5xl font-display font-bold text-foreground mb-5 tracking-tight">
          Что дальше после аудита
        </h2>
        <p className="text-muted-foreground max-w-xl mx-auto text-lg">
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
            className={`card-glass p-7 text-center glow-hover group ${p.accent ? 'border-primary/30 ring-1 ring-primary/10' : ''}`}
          >
            <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-5 transition-colors ${p.accent ? 'bg-primary/15 group-hover:bg-primary/25' : 'bg-primary/10 group-hover:bg-primary/20'}`}>
              <p.icon className="w-7 h-7 text-primary" />
            </div>
            <h3 className="font-semibold text-foreground font-display mb-2 tracking-tight">{p.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default AfterAuditSection;
