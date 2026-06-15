const scrollToForm = () => {
  document.getElementById("audit-form")?.scrollIntoView({ behavior: "smooth" });
};

const FinalCTA = () => (
  <section className="py-20 sm:py-28 border-t border-border">
    <div className="section-container text-center">
      <h2 className="text-3xl sm:text-4xl font-display font-bold text-foreground mb-4">
        Узнайте, где ваш HR теряет эффективность
      </h2>
      <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
        Бесплатно. Без обязательств. Запись открыта ограниченное время.
      </p>
      <button
        onClick={scrollToForm}
        className="px-8 py-4 rounded-xl bg-primary text-primary-foreground font-semibold text-lg hover:opacity-90 transition-opacity glow-hover"
      >
        Оставить заявку
      </button>
    </div>
  </section>
);

export default FinalCTA;
