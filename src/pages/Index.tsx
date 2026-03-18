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
      <HeroSection />
      <BenefitsSection />
      <AudienceSection />
      <ProblemsSection />
      <StepsSection />
      <WhyFreeSection />
      <AfterAuditSection />
      <TrustSection />
      <FAQSection />
      <FinalCTA />
      <AuditForm />
      <footer className="py-8 border-t border-border text-center text-sm text-muted-foreground">
        <div className="section-container">
          © {new Date().getFullYear()} HR Инструментарий · Дмитрий Банников
        </div>
      </footer>
    </main>
  );
};

export default Index;
