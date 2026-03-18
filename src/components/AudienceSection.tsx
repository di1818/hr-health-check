import { motion } from "framer-motion";
import { Building2, Users, UserCog, Briefcase } from "lucide-react";

const audiences = [
  { icon: Building2, title: "Собственники бизнеса", desc: "Хотите понять, почему HR не даёт результат и куда утекают ресурсы" },
  { icon: Briefcase, title: "Руководители компаний", desc: "Нужна объективная оценка HR-функции без внутренней предвзятости" },
  { icon: UserCog, title: "HR-руководители", desc: "Ищете точки роста и аргументы для руководства" },
  { icon: Users, title: "HR-менеджеры", desc: "Хотите системный подход вместо тушения пожаров" },
];

const AudienceSection = () => (
  <section id="audience" className="relative py-24 sm:py-32 section-divider overflow-hidden">
    <div className="section-container relative">
    <div className="section-container relative">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <span className="badge-pill mb-6">Для кого</span>
        <h2 className="text-3xl sm:text-5xl font-display font-bold text-foreground mb-4 tracking-tight">
          Кому подходит аудит
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-3xl mx-auto">
        {audiences.map((a, i) => (
          <motion.div
            key={a.title}
            initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            className="card-glass p-7 flex gap-5 items-start glow-hover group"
          >
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
              <a.icon className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h3 className="font-semibold text-foreground font-display mb-1 tracking-tight">{a.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{a.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default AudienceSection;
