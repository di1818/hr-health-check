import { motion } from "framer-motion";

const scrollTo = (id: string) => {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
};

const HeroSection = () => (
  <section id="hero" className="relative min-h-screen flex items-center overflow-hidden pt-16">
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10 py-24 sm:py-36">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="badge-pill mb-8">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse-glow" />
            HR-инструменты для роста компании
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-display font-bold leading-[1.1] mb-8 text-foreground tracking-tight">
            HR — инструментарий
          </h1>

          <p className="text-lg sm:text-xl text-muted-foreground mb-4 leading-relaxed">
            Помогаем собственникам и HR-командам выстроить найм, адаптацию и удержание.
            Покажем, где теряются люди, время и деньги — и доведём до результата.
          </p>

          <p className="text-muted-foreground mb-12 font-medium">
            <br />
          </p>

          <div className="flex flex-wrap gap-4">
            <button
              onClick={() => scrollTo("services")}
              className="group relative px-8 py-4 rounded-2xl bg-primary text-primary-foreground font-semibold text-lg transition-all duration-300 hover:shadow-[0_0_40px_hsl(38_92%_55%/0.3)] hover:scale-[1.02] active:scale-[0.98]"
            >
              Смотреть услуги
              <span className="absolute inset-0 rounded-2xl bg-primary/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity -z-10" />
            </button>
            <button
              onClick={() => scrollTo("audit-form")}
              className="px-8 py-4 rounded-2xl border border-border bg-background/30 backdrop-blur text-foreground font-semibold text-lg transition-all duration-300 hover:bg-background/60 hover:scale-[1.02] active:scale-[0.98]"
            >
              Оставить заявку
            </button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="hidden lg:flex flex-col gap-4"
        >
          {[
            { title: "Аудит", desc: "Разовая диагностика и отчёт с рекомендациями", price: "20–50 тыс ₽ / 3-7дней" },
            { title: "Трекерство", desc: "Сопровождение компании экспертом до результата", price: "от 200 тыс ₽" },
            { title: "Курс «HR Инструментарий»", desc: "Готовая система найма и удержания", price: "60 тыс ₽ / 2 мес.", old: "120 тыс ₽" },
          ].map((s, i) => (
            <motion.button
              key={s.title}
              onClick={() => scrollTo("services")}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
              className="card-glass p-5 text-left glow-hover group"
            >
              <div className="flex items-center justify-between gap-4">
                <div>
                  <h3 className="font-display font-semibold text-foreground tracking-tight mb-1">{s.title}</h3>
                  <p className="text-sm text-muted-foreground">{s.desc}</p>
                </div>
                <div className="text-right flex-shrink-0">
                  {s.old && <div className="text-xs text-muted-foreground line-through">{s.old}</div>}
                  <div className="text-sm font-semibold text-foreground">{s.price}</div>
                </div>
              </div>
            </motion.button>
          ))}
        </motion.div>
      </div>
    </div>
  </section>
);

export default HeroSection;
