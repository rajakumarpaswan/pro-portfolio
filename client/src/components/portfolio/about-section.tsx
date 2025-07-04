import { GraduationCap, MapPin, Trophy } from "lucide-react";

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-muted/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">About Me</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Passionate about creating innovative solutions through the intersection of AI/ML and frontend development.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-slideInLeft">
            <img
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600"
              alt="Modern developer workspace with multiple monitors and coding setup"
              className="rounded-xl shadow-lg w-full h-auto"
            />
          </div>
          <div className="animate-slideInRight">
            <h3 className="text-2xl font-bold mb-6">Frontend Developer & AI/ML Enthusiast</h3>
            <p className="text-muted-foreground mb-6">
              Currently pursuing B.Tech in Computer Science and Engineering with specialization in Artificial Intelligence and Machine Learning from Hindustan Institute of Technology and Science, Chennai.
            </p>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <GraduationCap className="text-primary mt-1 h-5 w-5" />
                <div>
                  <h4 className="font-semibold">Education</h4>
                  <p className="text-muted-foreground">B.Tech CSE (AI/ML) - 8.0 CGPA</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="text-primary mt-1 h-5 w-5" />
                <div>
                  <h4 className="font-semibold">Location</h4>
                  <p className="text-muted-foreground">Chennai, India</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Trophy className="text-primary mt-1 h-5 w-5" />
                <div>
                  <h4 className="font-semibold">Achievements</h4>
                  <p className="text-muted-foreground">Runner-ups in multiple competitions</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
