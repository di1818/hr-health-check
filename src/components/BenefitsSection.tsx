import { motion } from "framer-motion";
import { Search, FileText, MessageSquare, Target, BarChart3, ShieldCheck } from "lucide-react";

const benefits = [
  { icon: Search, title: "Диагностика HR-процессов", desc: "Оценим найм, адаптацию, мотивацию, удержание и развитие — за 60 минут" },
  { icon: FileText, title: "Отчёт с рекомендациями", desc: "Получите документ с конкретными точками роста и приоритетами" },
  { icon: MessageSquare, title: "Консультация с экспертом", desc: "Разберём результаты лично и ответим на ваши вопросы" },
  { icon: Target, title: "Понимание, что делать дальше", desc: "Три чётких сценария: сами, с курсом или с сопровождением" },
  { icon: BarChart3, title: "Сравнение с рынком", desc: "Узнаете, насколько ваши HR-процессы отстают или опережают отрасль" },
  { icon: ShieldCheck, title: "Без продажи «в лоб»", desc: "Если курс не нужен — честно скажем. Нам важна репутация" },
];

const BenefitsSection = () => (
  <section id="benefits" className="relative py-24 sm:py-32 section-divider">
    <div className="section-container relative">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <span className="badge-pill mb-6">Что входит</span>
        <h2 className="text-3xl sm:text-5xl font-display font-bold text-foreground mb-5 tracking-tight">
          Что вы получите
        </h2>
        <p className="text-muted-foreground max-w-xl mx-auto text-lg">
          Полная картина HR-ситуации вашей компании — бесплатно и без обязательств
        </p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {benefits.map((b, i) => (
          <motion.div
            key={b.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.08 }}
            className="card-glass p-7 glow-hover group"
          >
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
              <b.icon className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-lg font-semibold text-foreground font-display mb-2 tracking-tight">{b.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{b.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default BenefitsSection;
