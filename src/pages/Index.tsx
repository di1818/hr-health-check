import AmbientBackground from "@/components/AmbientBackground";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import BenefitsSection from "@/components/BenefitsSection";
import AudienceSection from "@/components/AudienceSection";
import ProblemsSection from "@/components/ProblemsSection";

import TrustSection from "@/components/TrustSection";
import FAQSection from "@/components/FAQSection";
import FinalCTA from "@/components/FinalCTA";
import AuditForm from "@/components/AuditForm";

const Index = () => {
  return (
    <main className="bg-background min-h-screen relative">
      <AmbientBackground />
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <ProblemsSection />
      <AudienceSection />
      <BenefitsSection />
      <StepsSection />
      <TrustSection />
      <FAQSection />
      <FinalCTA />
      <AuditForm />
      <footer className="py-12 section-divider text-sm text-muted-foreground">
        <div className="section-container flex flex-col gap-6">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <span>© {new Date().getFullYear()} HR Инструментарий · Дмитрий Банников</span>
            <div className="flex items-center gap-6">
              <a href="tel:+79503120337" className="hover:text-foreground transition-colors">8 950 312-03-37</a>
              <a href="https://web.telegram.org/k/#@hrinst_bot" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">Telegram</a>
            </div>
          </div>
          <div className="flex flex-wrap gap-x-6 gap-y-3 text-xs sm:text-sm">
            <a href="/docs/personal-consent" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">
              Согласие на обработку персональных данных
            </a>
            <a href="/docs/privacy" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">
              Политика обработки персональных данных
            </a>
            <a href="/docs/marketing-consent" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">
              Согласие на получение рекламных материалов
            </a>
            <a href="/docs/distribution-consent" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">
              Согласие на распространение персональных данных
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
};

export default Index;
