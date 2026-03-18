import { motion } from "framer-motion";
import { useState } from "react";
import { toast } from "sonner";
import { Checkbox } from "@/components/ui/checkbox";

const AuditForm = () => {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    telegram: "",
    company: "",
    position: "",
    employees: "",
    problem: "",
  });
  const [loading, setLoading] = useState(false);
  const [consentData, setConsentData] = useState(false);
  const [consentAds, setConsentAds] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.phone) {
      toast.error("Заполните имя и телефон");
      return;
    }
    if (!consentData) {
      toast.error("Необходимо дать согласие на обработку персональных данных");
      return;
    }
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      toast.success("Заявка отправлена! Мы свяжемся с вами в ближайшее время.");
      setForm({ name: "", phone: "", telegram: "", company: "", position: "", employees: "", problem: "" });
      setConsentData(false);
      setConsentAds(false);
    }, 1200);
  };

  const inputClass =
    "w-full px-5 py-3.5 rounded-xl bg-secondary/60 border border-border/50 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary/30 transition-all text-sm font-body";

  return (
    <section id="audit-form" className="relative py-24 sm:py-32 section-divider overflow-hidden">
      <div className="absolute inset-0 mesh-bg" />
      <div className="section-container relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="badge-pill mb-6">Заявка</span>
          <h2 className="text-3xl sm:text-5xl font-display font-bold text-foreground mb-5 tracking-tight">
            Записаться на бесплатный аудит
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto text-lg">
            Заполните форму — мы свяжемся в течение 24 часов
          </p>
        </motion.div>

        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="card-glass p-8 sm:p-12 max-w-2xl mx-auto relative"
        >
          <div className="absolute -inset-1 rounded-2xl bg-primary/3 blur-2xl -z-10" />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
            <input name="name" value={form.name} onChange={handleChange} placeholder="Имя *" className={inputClass} />
            <input name="phone" value={form.phone} onChange={handleChange} placeholder="Телефон *" className={inputClass} />
            <input name="telegram" value={form.telegram} onChange={handleChange} placeholder="Telegram" className={inputClass} />
            <input name="company" value={form.company} onChange={handleChange} placeholder="Компания" className={inputClass} />
            <input name="position" value={form.position} onChange={handleChange} placeholder="Должность" className={inputClass} />
            <select name="employees" value={form.employees} onChange={handleChange} className={inputClass}>
              <option value="">Количество сотрудников</option>
              <option value="10-30">10–30</option>
              <option value="30-100">30–100</option>
              <option value="100-300">100–300</option>
              <option value="300+">300+</option>
            </select>
          </div>
          <textarea
            name="problem"
            value={form.problem}
            onChange={handleChange}
            placeholder="Главная проблема в HR, которую хотите решить"
            rows={3}
            className={`${inputClass} mb-6 resize-none`}
          />
          <button
            type="submit"
            disabled={loading}
            className="w-full py-4 rounded-2xl bg-primary text-primary-foreground font-semibold text-lg transition-all duration-300 hover:shadow-[0_0_40px_hsl(38_92%_55%/0.3)] hover:scale-[1.01] disabled:opacity-50 active:scale-[0.99]"
          >
            {loading ? "Отправка..." : "Записаться на бесплатный аудит"}
          </button>
          <p className="text-xs text-muted-foreground text-center mt-5">
            Нажимая кнопку, вы соглашаетесь с обработкой персональных данных
          </p>
        </motion.form>
      </div>
    </section>
  );
};

export default AuditForm;
