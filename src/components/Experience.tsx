
const Experience = () => {
  const experiences = [
    {
      company: "ShopUp",
      role: "ML Engineering Intern",
      period: "2023 - 2024",
      description: "Developed machine learning models for product recommendation systems, improving user engagement by 35%. Worked on data pipeline optimization and model deployment strategies.",
      achievements: [
        "Built recommendation engine serving 1M+ users",
        "Optimized model inference latency by 40%",
        "Collaborated with cross-functional product teams"
      ]
    },
    {
      company: "Grameen Communications",
      role: "Product Management Intern",
      period: "2022 - 2023",
      description: "Led product development initiatives for digital financial services, focusing on user experience design and market research for underserved communities.",
      achievements: [
        "Conducted user research with 500+ participants",
        "Defined product roadmap for fintech solutions",
        "Improved user onboarding conversion by 25%"
      ]
    },
    {
      company: "Research Assistant",
      role: "AI Research Lab, IUT",
      period: "2021 - 2024",
      description: "Conducted independent research on natural language processing and fake news detection under faculty supervision. Published findings in international conferences.",
      achievements: [
        "Published 3 peer-reviewed papers",
        "Developed novel NLP algorithms",
        "Mentored junior researchers"
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light tracking-tight mb-6">
            Professional <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-xl font-light text-foreground/70 max-w-2xl mx-auto">
            Building impactful solutions across product management, machine learning, and research
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-icy-blue-400 to-lavender-400 hidden md:block" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="relative flex items-start space-x-8"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Timeline dot */}
                <div className="hidden md:flex w-16 h-16 bg-gradient-to-br from-icy-blue-400 to-lavender-400 rounded-full items-center justify-center flex-shrink-0 relative z-10">
                  <div className="w-6 h-6 bg-background rounded-full" />
                </div>

                <div className="glass-card p-8 rounded-2xl flex-1 hover:bg-white/10 transition-all duration-300">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-medium text-icy-blue-400 mb-1">
                        {exp.role}
                      </h3>
                      <h4 className="text-xl font-light text-foreground/80">
                        {exp.company}
                      </h4>
                    </div>
                    <span className="text-sm font-light text-foreground/60 mt-2 md:mt-0">
                      {exp.period}
                    </span>
                  </div>

                  <p className="text-foreground/70 font-light leading-relaxed mb-6">
                    {exp.description}
                  </p>

                  <div className="space-y-2">
                    {exp.achievements.map((achievement, i) => (
                      <div key={i} className="flex items-center space-x-3">
                        <div className="w-1.5 h-1.5 bg-icy-blue-400 rounded-full flex-shrink-0" />
                        <span className="text-sm font-light text-foreground/70">
                          {achievement}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
