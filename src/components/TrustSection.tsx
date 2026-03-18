import { motion } from "framer-motion";
import dmitryPhoto from "@/assets/dmitry-bannikov.jpg";

const TrustSection = () => (
  <section className="py-20 sm:py-28 border-t border-border">
    <div className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="flex flex-col md:flex-row gap-10 items-center max-w-4xl mx-auto"
      >
        <div className="flex-shrink-0">
          <img
            src={dmitryPhoto}
            alt="Дмитрий Банников — HR-эксперт"
            className="w-48 h-48 sm:w-56 sm:h-56 rounded-2xl object-cover object-top border border-border"
          />
        </div>
        <div>
          <h2 className="text-3xl font-display font-bold text-foreground mb-4">
            Дмитрий Банников
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Эксперт по построению HR-систем. Автор курса «HR Инструментарий». 
            Помог десяткам компаний выстроить найм, адаптацию, мотивацию и удержание сотрудников.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Провожу аудит лично. Мне важно, чтобы вы получили честную картину — 
            а не очередной «продающий вебинар».
          </p>
        </div>
      </motion.div>
    </div>
  </section>
);

export default TrustSection;
