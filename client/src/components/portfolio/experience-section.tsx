export default function ExperienceSection() {
  const experiences = [
    {
      title: "Front-End Developer Intern",
      company: "Atsuya Technology Pvt. Ltd",
      duration: "DEC 2023 - FEB 2024",
      location: "Chennai, India",
      responsibilities: [
        "Worked on real-time industry projects with deliverables",
        "Implemented synchronous form validation",
        "Developed keyboard events and image contrast correction",
        "Used React.js for frontend development"
      ]
    },
    {
      title: "Front-End Developer Intern",
      company: "Muthu Innovators and Creators",
      duration: "DEC 2022 - MAR 2023",
      location: "Chennai, India",
      responsibilities: [
        "Developed responsive web pages for e-commerce application",
        "Used React.js for interactive user interfaces",
        "Integrated Material UI for enhanced user experience",
        "Worked on E-commerce Admin Application"
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Experience</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            My journey in frontend development through internships and real-world projects.
          </p>
        </div>
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-primary"></div>
          
          {experiences.map((exp, index) => (
            <div key={index} className="relative flex items-center justify-between mb-12">
              {index % 2 === 0 ? (
                // Left side for even indices
                <>
                  <div className="w-1/2 pr-8 text-right">
                    <div className="bg-card p-6 rounded-lg shadow-lg border">
                      <h3 className="text-xl font-bold text-primary">{exp.title}</h3>
                      <h4 className="text-lg font-semibold mb-2">{exp.company}</h4>
                      <p className="text-muted-foreground mb-4">{exp.duration}</p>
                      <ul className="text-muted-foreground space-y-2">
                        {exp.responsibilities.map((resp, i) => (
                          <li key={i}>• {resp}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full"></div>
                  <div className="w-1/2 pl-8"></div>
                </>
              ) : (
                // Right side for odd indices
                <>
                  <div className="w-1/2 pr-8"></div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full"></div>
                  <div className="w-1/2 pl-8">
                    <div className="bg-card p-6 rounded-lg shadow-lg border">
                      <h3 className="text-xl font-bold text-primary">{exp.title}</h3>
                      <h4 className="text-lg font-semibold mb-2">{exp.company}</h4>
                      <p className="text-muted-foreground mb-4">{exp.duration}</p>
                      <ul className="text-muted-foreground space-y-2">
                        {exp.responsibilities.map((resp, i) => (
                          <li key={i}>• {resp}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
