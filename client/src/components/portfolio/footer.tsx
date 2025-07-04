import { Linkedin, Github, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-card border-t py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-lg font-semibold mb-4">R. Raja Kumar Paswan</p>
          <p className="text-muted-foreground mb-6">Frontend Developer & AI/ML Enthusiast</p>
          <div className="flex justify-center space-x-6 mb-8">
            <a
              href="https://linkedin.com/in/rajak-dev"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href="https://github.com/rajakumarpaswan"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="mailto:rajakumarpaswan505@gmail.com"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>
          <p className="text-muted-foreground text-sm">
            &copy; {new Date().getFullYear()}  R. Raja Kumar Paswan. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
