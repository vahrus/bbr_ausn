import { AboutSection } from "@/components/AboutSection";
import { BenefitsSection } from "@/components/BenefitsSection";
import { BbrSection } from "@/components/BbrSection";
import { EligibilitySection } from "@/components/EligibilitySection";
import { FaqSection } from "@/components/FaqSection";
import { FinalCTA } from "@/components/FinalCTA";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { StepsSection } from "@/components/StepsSection";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <BenefitsSection />
        <EligibilitySection />
        <StepsSection />
        <BbrSection />
        <FaqSection />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
