import { motion } from "framer-motion";
import CountdownTimer from "./CountdownTimer";

const scrollToForm = () => {
  document.getElementById("audit-form")?.scrollIntoView({ behavior: "smooth" });
};

const HeroSection = () => (
  <section className="relative min-h-screen flex items-center overflow-hidden">
    {/* Subtle radial glow */}
    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,hsl(15_85%_55%/0.08),transparent_60%)]" />
    
    <div className="section-container relative z-10 py-20 sm:py-32">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="max-w-3xl"
      >
        <div className="inline-block px-4 py-1.5 rounded-full border border-primary/30 bg-primary/5 text-primary text-sm font-medium mb-8">
          Запись открыта — осталось ограниченное время
        </div>
        
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold leading-tight mb-6 text-foreground">
          Бесплатный{" "}
          <span className="gradient-text">HR-аудит</span>
          <br />
          и консультация для компаний
        </h1>
        
        <p className="text-lg sm:text-xl text-muted-foreground mb-4 max-w-2xl leading-relaxed">
          Покажем, где у вас теряются люди, время и деньги. Найдём узкие места. 
          Честно скажем, нужен ли вам курс вообще.
        </p>
        
        <p className="text-muted-foreground mb-10">
          Без оплаты · Без обязательства покупки
        </p>

        <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center mb-12">
          <button
            onClick={scrollToForm}
            className="px-8 py-4 rounded-xl bg-primary text-primary-foreground font-semibold text-lg hover:opacity-90 transition-opacity glow-hover"
          >
            Записаться на бесплатный аудит
          </button>
        </div>

        <div>
          <p className="text-sm text-muted-foreground mb-3">Запись закроется через:</p>
          <CountdownTimer />
        </div>
      </motion.div>
    </div>
  </section>
);

export default HeroSection;
