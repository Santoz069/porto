import { Navbar } from "@/components/navbar";
import { HeroSection } from "@/components/hero-section";
import { AboutSection } from "@/components/about-section";
import { ExperienceSection } from "@/components/experience-section";
import { ProjectsSection } from "@/components/projects-section";
import { SkillsSection } from "@/components/skills-section";
import { EducationSection } from "@/components/education-section";
import { ContactSection } from "@/components/contact-section";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <main className="gradient-bg min-h-screen overflow-x-hidden">
      <div className="sticky top-0 z-50 glass">
        <Navbar />
      </div>

      <section className="section">
        <HeroSection />
      </section>

      <section className="section">
        <AboutSection />
      </section>

      <section className="section">
        <ExperienceSection />
      </section>

      <section className="section">
        <ProjectsSection />
      </section>

      <section className="section">
        <SkillsSection />
      </section>

      <section className="section">
        <EducationSection />
      </section>

      <section className="section">
        <ContactSection />
      </section>

      <Footer />
    </main>
  );
}
