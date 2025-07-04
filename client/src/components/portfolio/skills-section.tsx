import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Code, Layers, Database, Wrench } from "lucide-react";

export default function SkillsSection() {
  const skillCategories = [
    {
      icon: <Code className="h-6 w-6 text-primary" />,
      title: "Programming Languages",
      skills: [
        { name: "JavaScript", level: 90 },
        { name: "Python", level: 85 },
        { name: "TypeScript", level: 80 }
      ]
    },
    {
      icon: <Layers className="h-6 w-6 text-emerald-500" />,
      title: "Frameworks & Libraries",
      skills: [
        { name: "React.js", level: 90 },
        { name: "Tailwind CSS", level: 85 },
        { name: "Material UI", level: 80 }
      ]
    },
    {
      icon: <Database className="h-6 w-6 text-purple-500" />,
      title: "Databases",
      skills: [
        { name: "MongoDB", level: 85 },
        { name: "MySQL", level: 80 },
        { name: "Firebase", level: 75 }
      ]
    },
    {
      icon: <Wrench className="h-6 w-6 text-red-500" />,
      title: "Other Skills",
      skills: [
        { name: "Testing", level: 80 },
        { name: "Debugging", level: 85 },
        { name: "Teamwork", level: 90 }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Technical Skills</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A comprehensive overview of my technical expertise and competencies.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <Card key={index} className="shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  {category.icon}
                  <h3 className="text-lg font-bold ml-3">{category.title}</h3>
                </div>
                <div className="space-y-4">
                  {category.skills.map((skill, i) => (
                    <div key={i} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium">{skill.name}</span>
                        <span className="text-sm text-muted-foreground">{skill.level}%</span>
                      </div>
                      <Progress value={skill.level} className="h-2" />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
