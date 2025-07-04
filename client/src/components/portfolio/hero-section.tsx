import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail } from "lucide-react";
import profileImage from "@/assets/profile-image.jpeg";
import { ButtonGroup } from "@mantine/core";
// import { Button } from '@mantine/core';

export default function HeroSection() {
const handleDownloadResume = () => {
  const link = document.createElement('a');
  link.href = encodeURI('/attached_assets/Raja kumar paswan_1751519263496.pdf');
  link.download = 'Raja_Kumar_Paswan_Resume.pdf';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};


  const scrollToProjects = () => {
    const element = document.getElementById("projects");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left animate-fadeInUp">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Hi, I'm <span className="text-primary">Raja Kumar</span>
            </h1>
            <p className="text-xl sm:text-2xl text-muted-foreground mb-8">
              Frontend Developer & AI/ML Enthusiast
            </p>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl">
              Aspiring AI/ML Engineer with a strong foundation in machine learning, frontend development, and data handling. Looking to contribute to impactful AI-driven projects.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button  onClick={scrollToProjects} size="lg">
                View My Work
              </Button>
              <Button variant="outline" size="lg" onClick={handleDownloadResume} >
                    Download Resume
              </Button>

            </div>
            <div className="flex justify-center lg:justify-start space-x-6 mt-8">
              <a
                href="https://linkedin.com/in/rajak-dev"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl text-muted-foreground hover:text-primary transition-colors"
              >
                <Linkedin className="h-6 w-6" />
              </a>
              <a
                href="https://github.com/rajakumarpaswan"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl text-muted-foreground hover:text-primary transition-colors"
              >
                <Github className="h-6 w-6" />
              </a>
              <a
                href="mailto:rajakumarpaswan505@gmail.com"
                className="text-2xl text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail className="h-6 w-6" />
              </a>
            </div>
          </div>
          <div className="flex justify-center lg:justify-end animate-slideInRight">
            <div className="relative">
              <img
                src={profileImage}
                alt="Professional headshot of Raja Kumar Paswan"
                className="w-80 h-80 rounded-full object-cover shadow-2xl"
              />
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary/20 to-emerald-600/20"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
