import { motion } from "framer-motion";
import { Filter, Heart, Sparkles } from "lucide-react";

const reasons = [
  {
    icon: Filter,
    title: "Отбор сильных клиентов",
    desc: "Аудит помогает нам понять, кому наш курс действительно нужен — а кому пока нет",
  },
  {
    icon: Heart,
    title: "Доверие важнее продаж",
    desc: "Мы строим долгосрочные отношения. Если курс не нужен — мы об этом скажем",
  },
  {
    icon: Sparkles,
    title: "Качество входа",
    desc: "Участники, прошедшие аудит, получают от курса в разы больше результата",
  },
];

const WhyFreeSection = () => (
  <section className="relative py-24 sm:py-32 section-divider">
    <div className="absolute inset-0 dots-bg opacity-15" />
    <div className="section-container relative">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <span className="badge-pill mb-6">Честность</span>
        <h2 className="text-3xl sm:text-5xl font-display font-bold text-foreground mb-4 tracking-tight">
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
            className="card-glass p-7 text-center glow-hover group"
          >
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-5 group-hover:bg-primary/20 transition-colors">
              <r.icon className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-semibold text-foreground font-display mb-2 tracking-tight">{r.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{r.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default WhyFreeSection;
