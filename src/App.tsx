import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { ExperienceSection } from "@/components/sections/ExperienceSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { SkillsSection } from "@/components/sections/SkillsSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { ThoughtLeadershipSection } from "@/components/sections/ThoughtLeadershipSection";
import { ContactSection } from "@/components/sections/ContactSection";

function App() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <ServicesSection />
        <SkillsSection />
        <ProjectsSection />
        <ThoughtLeadershipSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
