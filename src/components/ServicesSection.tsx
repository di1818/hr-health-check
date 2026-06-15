import { motion } from "framer-motion";
import { ClipboardCheck, Compass, GraduationCap, Check } from "lucide-react";

const scrollToForm = () => {
  document.getElementById("audit-form")?.scrollIntoView({ behavior: "smooth" });
};

const services = [
  {
    icon: ClipboardCheck,
    badge: "Разовая работа",
    title: "HR-аудит",
    tagline: "Диагностика HR-процессов с отчётом и рекомендациями",
    price: "20 000 – 50 000 ₽",
    priceNote: "Стоимость зависит от размера компании и глубины анализа",
    bullets: [
      "Анализ найма, адаптации, мотивации, удержания и развития",
      "Отчёт с узкими местами и приоритетами",
      "Личная консультация эксперта по результатам",
      "Сравнение ваших процессов с рынком",
    ],
    cta: "Заказать аудит",
  },
  {
    icon: Compass,
    badge: "Сопровождение",
    title: "Трекерство",
    tagline: "Эксперт ведёт компанию до результата и консультирует на каждом шаге",
    price: "от 200 000 ₽",
    priceNote: "Формат и срок согласуем под задачи компании",
    bullets: [
      "Регулярные встречи и разбор задач команды",
      "Внедрение HR-инструментов под контролем эксперта",
      "Поддержка решений по найму, мотивации и структуре",
      "Фокус на конкретный измеримый результат",
    ],
    cta: "Обсудить трекерство",
    highlighted: true,
  },
  {
    icon: GraduationCap,
    badge: "Обучение",
    title: "Курс «HR Инструментарий»",
    tagline: "Для тех, кто занимается подбором и хочет внедрить рабочую систему",
    price: "60 000 ₽",
    oldPrice: "120 000 ₽",
    priceNote: "Скидка 50% действует ограниченное время",
    bullets: [
      "Готовая система найма, адаптации и удержания",
      "Шаблоны, регламенты и чек-листы под ваш бизнес",
      "Практика на реальных задачах вашей компании",
      "Поддержка автора и доступ к обновлениям",
    ],
    cta: "Записаться на курс",
  },
];

const ServicesSection = () => (
  <section id="services" className="relative py-24 sm:py-32 section-divider">
    <div className="section-container relative">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <span className="badge-pill mb-6">Услуги</span>
        <h2 className="text-3xl sm:text-5xl font-display font-bold text-foreground mb-5 tracking-tight">
          Три формата работы
        </h2>
        <p className="text-muted-foreground max-w-xl mx-auto text-lg">
          Выберите подходящий вариант — от разовой диагностики до полного сопровождения
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {services.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            className={`card-glass p-8 flex flex-col glow-hover relative ${
              s.highlighted ? "ring-1 ring-primary/40" : ""
            }`}
          >
            {s.highlighted && (
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-primary text-primary-foreground text-xs font-semibold tracking-wide">
                Популярно
              </span>
            )}

            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
              <s.icon className="w-6 h-6 text-primary" />
            </div>

            <span className="text-xs uppercase tracking-wider text-muted-foreground mb-2">
              {s.badge}
            </span>
            <h3 className="text-2xl font-display font-bold text-foreground mb-2 tracking-tight">
              {s.title}
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed mb-6">
              {s.tagline}
            </p>

            <div className="mb-6">
              <div className="flex items-baseline gap-3 flex-wrap">
                {s.oldPrice && (
                  <span className="text-base text-muted-foreground line-through">
                    {s.oldPrice}
                  </span>
                )}
                <span className="text-2xl font-display font-bold text-foreground">
                  {s.price}
                </span>
              </div>
              {s.priceNote && (
                <p className="text-xs text-muted-foreground mt-2">{s.priceNote}</p>
              )}
            </div>

            <ul className="space-y-3 mb-8 flex-1">
              {s.bullets.map((b) => (
                <li key={b} className="flex gap-3 text-sm text-muted-foreground leading-relaxed">
                  <Check className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>

            <button
              onClick={scrollToForm}
              className={`w-full py-3 rounded-2xl font-semibold text-base transition-all duration-300 ${
                s.highlighted
                  ? "bg-primary text-primary-foreground hover:shadow-[0_0_30px_hsl(38_92%_55%/0.3)] hover:scale-[1.01]"
                  : "bg-secondary text-foreground hover:bg-secondary/80"
              } active:scale-[0.99]`}
            >
              {s.cta}
            </button>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;
