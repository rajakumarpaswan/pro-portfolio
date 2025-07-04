import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Trophy, Medal, Award } from "lucide-react";

export default function EducationSection() {
  const education = [
    {
      degree: "Bachelor of Technology",
      field: "Computer Science and Engineering",
      specialization: "Specialization in AI/ML (IBM)",
      institution: "Hindustan Institute of Technology and Science",
      duration: "Jun 2021 - May 2025",
      grade: "CGPA: 8.0"
    },
    {
      degree: "Higher Secondary Certificate",
      field: "Physics, Chemistry, Mathematics",
      institution: "P.S Matriculation Higher Secondary School",
      duration: "Jun 2020 - Apr 2021",
      grade: "83%"
    },
    {
      degree: "High School",
      institution: "St.Francis Xaviers's Matriculation School",
      duration: "Jun 2018 - Mar 2019",
      grade: "80%"
    }
  ];

  const achievements = [
    {
      icon: <Trophy className="h-6 w-6 text-yellow-500" />,
      title: "Runner-up in Project Presentation",
      description: "IBM ICE DAYS 2024 at HITS",
      color: "bg-yellow-50 dark:bg-yellow-900/20"
    },
    {
      icon: <Medal className="h-6 w-6 text-blue-500" />,
      title: "Pre-Finalists in Startup PYP",
      description: "Hosted by IITM-Pals Chennai",
      color: "bg-blue-50 dark:bg-blue-900/20"
    },
    {
      icon: <Award className="h-6 w-6 text-emerald-500" />,
      title: "Runner-up in Quiz Competition",
      description: "Trojans Symposium at CIT, Chennai",
      color: "bg-emerald-50 dark:bg-emerald-900/20"
    }
  ];

  return (
    <section className="py-20 bg-muted/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Education */}
          <div>
            <h2 className="text-3xl font-bold mb-8">Education</h2>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <Card key={index} className="shadow-lg">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-primary mb-2">{edu.degree}</h3>
                    <p className="text-lg font-semibold mb-2">{edu.field}</p>
                    {edu.specialization && (
                      <p className="text-muted-foreground mb-2">{edu.specialization}</p>
                    )}
                    <p className="text-muted-foreground mb-2">{edu.institution}</p>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">{edu.duration}</span>
                      <Badge variant="secondary" className="text-emerald-600 dark:text-emerald-400">
                        {edu.grade}
                      </Badge>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Achievements */}
          <div>
            <h2 className="text-3xl font-bold mb-8">Achievements</h2>
            <div className="space-y-6">
              {achievements.map((achievement, index) => (
                <Card key={index} className="shadow-lg">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className={`flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center ${achievement.color}`}>
                        {achievement.icon}
                      </div>
                      <div>
                        <h3 className="text-lg font-bold mb-2">{achievement.title}</h3>
                        <p className="text-muted-foreground">{achievement.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
