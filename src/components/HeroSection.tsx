import { motion } from "framer-motion";
import CountdownTimer from "./CountdownTimer";

const scrollToForm = () => {
  document.getElementById("audit-form")?.scrollIntoView({ behavior: "smooth" });
};

const HeroSection = () => (
  <section id="hero" className="relative min-h-screen flex items-center overflow-hidden pt-16">
    {/* Mesh gradient background */}
    <div className="absolute inset-0 mesh-bg" />
    <div className="absolute inset-0 dots-bg opacity-30" />
    
    {/* Decorative orbs */}
    <div className="absolute top-20 right-[15%] w-72 h-72 rounded-full bg-primary/5 blur-[100px] animate-float" />
    <div className="absolute bottom-32 left-[10%] w-96 h-96 rounded-full bg-primary/3 blur-[120px]" />
    
    <div className="section-container relative z-10 py-24 sm:py-36">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-3xl"
      >
        <div className="badge-pill mb-8">
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse-glow" />
          Запись открыта — осталось ограниченное время
        </div>
        
        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-display font-bold leading-[1.1] mb-8 text-foreground tracking-tight">
          Бесплатный{" "}
          <span className="gradient-text">HR-аудит</span>
          <br />
          и консультация для компаний
        </h1>
        
        <p className="text-lg sm:text-xl text-muted-foreground mb-4 max-w-2xl leading-relaxed">
          Покажем, где у вас теряются люди, время и деньги. Найдём узкие места. 
          Честно скажем, нужен ли вам курс вообще.
        </p>
        
        <p className="text-muted-foreground mb-12 font-medium">
          Без оплаты · Без обязательства покупки
        </p>

        <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center mb-16">
          <button
            onClick={scrollToForm}
            className="group relative px-8 py-4 rounded-2xl bg-primary text-primary-foreground font-semibold text-lg transition-all duration-300 hover:shadow-[0_0_40px_hsl(38_92%_55%/0.3)] hover:scale-[1.02] active:scale-[0.98]"
          >
            Записаться на бесплатный аудит
            <span className="absolute inset-0 rounded-2xl bg-primary/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity -z-10" />
          </button>
        </div>

        <div>
          <p className="text-sm text-muted-foreground mb-4 tracking-wide uppercase font-medium">Запись закроется через:</p>
          <CountdownTimer />
        </div>
      </motion.div>
    </div>
  </section>
);

export default HeroSection;
