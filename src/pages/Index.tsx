import FloatingPhotos from "@/components/FloatingPhotos";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import BenefitsSection from "@/components/BenefitsSection";
import AudienceSection from "@/components/AudienceSection";
import ProblemsSection from "@/components/ProblemsSection";
import StepsSection from "@/components/StepsSection";
import WhyFreeSection from "@/components/WhyFreeSection";
import AfterAuditSection from "@/components/AfterAuditSection";
import TrustSection from "@/components/TrustSection";
import FAQSection from "@/components/FAQSection";
import AuditForm from "@/components/AuditForm";

const Index = () => {
  return (
    <main className="bg-background min-h-screen">
      <Navbar />
      <HeroSection />
      <BenefitsSection />
      <AudienceSection />
      <ProblemsSection />
      <StepsSection />
      <WhyFreeSection />
      <AfterAuditSection />
      <TrustSection />
      <FAQSection />
      <AuditForm />
      <footer className="py-12 section-divider text-sm text-muted-foreground">
        <div className="section-container flex flex-col sm:flex-row items-center justify-between gap-4">
          <span>© {new Date().getFullYear()} HR Инструментарий · Дмитрий Банников</span>
          <div className="flex items-center gap-6">
            <a href="tel:+79871837315" className="hover:text-foreground transition-colors">+7 (987) 183-73-15</a>
            <a href="https://t.me/test66_tts_bot" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">Telegram</a>
          </div>
        </div>
      </footer>
    </main>
  );
};

export default Index;
