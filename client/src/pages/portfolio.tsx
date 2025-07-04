import { useEffect } from "react";
import Navigation from "@/components/portfolio/navigation";
import HeroSection from "@/components/portfolio/hero-section";
import AboutSection from "@/components/portfolio/about-section";
import ExperienceSection from "@/components/portfolio/experience-section";
import ProjectsSection from "@/components/portfolio/projects-section";
import SkillsSection from "@/components/portfolio/skills-section";
import EducationSection from "@/components/portfolio/education-section";
import ContactSection from "@/components/portfolio/contact-section";
import Footer from "@/components/portfolio/footer";

export default function Portfolio() {
  useEffect(() => {
    document.title = "R. Raja Kumar Paswan - Frontend Developer & AI/ML Enthusiast";
    
    // Add meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Frontend Developer & AI/ML Enthusiast with expertise in React.js, Python, and machine learning. Showcasing projects in web development and AI applications.');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = 'Frontend Developer & AI/ML Enthusiast with expertise in React.js, Python, and machine learning. Showcasing projects in web development and AI applications.';
      document.head.appendChild(meta);
    }
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <ProjectsSection />
      <SkillsSection />
      <EducationSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
