import { motion } from "framer-motion";
import { Building2, Users, UserCog, Briefcase } from "lucide-react";

const audiences = [
  { icon: Building2, title: "Собственники бизнеса", desc: "Хотите понять, почему HR не даёт результат и куда утекают ресурсы" },
  { icon: Briefcase, title: "Руководители компаний", desc: "Нужна объективная оценка HR-функции без внутренней предвзятости" },
  { icon: UserCog, title: "HR-руководители", desc: "Ищете точки роста и аргументы для руководства" },
  { icon: Users, title: "HR-менеджеры", desc: "Хотите системный подход вместо тушения пожаров" },
];

const AudienceSection = () => (
  <section className="py-20 sm:py-28 border-t border-border">
    <div className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-14"
      >
        <h2 className="text-3xl sm:text-4xl font-display font-bold text-foreground mb-4">
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
            className="card-glass p-6 flex gap-4 items-start glow-hover"
          >
            <a.icon className="w-7 h-7 text-primary flex-shrink-0 mt-0.5" />
            <div>
              <h3 className="font-semibold text-foreground font-body mb-1">{a.title}</h3>
              <p className="text-sm text-muted-foreground">{a.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default AudienceSection;
