import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { SocialProofSection } from "@/components/sections/SocialProofSection";
import { ProblemSection } from "@/components/sections/ProblemSection";
import { HowIWorkSection } from "@/components/sections/HowIWorkSection";
import { CaseStudiesSection } from "@/components/sections/CaseStudiesSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { WhoThisIsForSection } from "@/components/sections/WhoThisIsForSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { ThoughtLeadershipSection } from "@/components/sections/ThoughtLeadershipSection";
import { FAQSection } from "@/components/sections/FAQSection";
import { ContactSection } from "@/components/sections/ContactSection";

function App() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <HeroSection />
        <SocialProofSection />
        <ProblemSection />
        <HowIWorkSection />
        <CaseStudiesSection />
        <ServicesSection />
        <TestimonialsSection />
        <WhoThisIsForSection />
        <AboutSection />
        <ThoughtLeadershipSection />
        <FAQSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
