import { motion } from "framer-motion";
import dmitryPhoto from "@/assets/dmitry-bannikov.jpg";

const TrustSection = () => (
  <section className="section-alt py-24 sm:py-32 section-divider">
    <div className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center"
      >
        <div className="flex justify-center md:justify-end">
          <img
            src={dmitryPhoto}
            alt="Дмитрий Банников — HR-эксперт"
            className="w-full max-w-md aspect-[3/4] rounded-3xl object-cover object-top border border-border/50 shadow-2xl"
          />
        </div>
        <div>
          <span className="badge-pill mb-6">Эксперт</span>
          <h2 className="text-4xl sm:text-5xl font-display font-bold text-foreground mb-6 tracking-tight">
            Дмитрий Банников
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-6">
            Эксперт по построению HR-систем. Автор курса «HR Инструментарий».
            Помог десяткам компаний выстроить найм, адаптацию, мотивацию и удержание сотрудников.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed mb-10">
            Провожу аудит лично. Мне важно, чтобы вы получили честную картину —
            а не очередной «продающий вебинар».
          </p>
          <div className="border-l-2 border-primary pl-6 py-1">
            <p className="text-xs font-semibold text-primary uppercase tracking-[0.2em] mb-3 font-display">
              Миссия
            </p>
            <p className="text-foreground text-lg leading-relaxed">
              Повышать качество HR в России через практический системный подход,
              который помогает бизнесу расти, удерживать сильных людей и снижать управленческий хаос.
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

export default TrustSection;
