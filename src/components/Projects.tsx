
import { Button } from "@/components/ui/button";
import { Github } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const projects = [
    {
      title: "Fake News Detection",
      description: "Designed and implemented a machine learning model to classify news articles as real or fake using TF-IDF and frequency analysis techniques with data preprocessing and feature extraction optimization.",
      tech: ["Python", "Scikit-learn", "TF-IDF"],
      category: "Machine Learning",
      image: "photo-1461749280684-dccba630e2f6",
      github: "https://github.com/Sadik-Yasin-Eftee"
    },
    {
      title: "CourSohelic: OBE System",
      description: "Web-based application automating Program Outcome (PO) and Course Outcome (CO) calculations in compliance with Outcome-Based Education framework with multi-panel interfaces for different user roles.",
      tech: ["Django", "SQLite", "HTML", "CSS"],
      category: "Web Application",
      image: "photo-1581091226825-a6a2a5aee158",
      github: "https://github.com/Sadik-Yasin-Eftee"
    },
    {
      title: "Andromeda: IUT Astronomy Club",
      description: "Comprehensive website for IUT Astronomy Club facilitating real-time astronomy news sharing, community engagement, marketplace for accessories, and knowledge testing quizzing system.",
      tech: ["Django", "SQLite", "HTML", "CSS"],
      category: "Web Application",
      image: "photo-1498050108023-c5249f4df085",
      github: "https://github.com/Sadik-Yasin-Eftee"
    },
    {
      title: "Tic Tac Toe with AI",
      description: "Game application featuring AI functionality for Random and Defensive gameplay modes with intuitive user interface and three theme options: Classic, Forest, and High Contrast.",
      tech: ["Java", "JavaFX"],
      category: "Game Application",
      image: "photo-1485827404703-89b55fcc595e",
      github: "https://github.com/Sadik-Yasin-Eftee"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section ref={ref} id="projects" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-light tracking-tight mb-6">
            Technical <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-xl font-light text-foreground/70 max-w-2xl mx-auto">
            A collection of projects spanning machine learning, web development, and application design
          </p>
        </motion.div>

        <motion.div 
          className="grid md:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              className="glass-card p-8 rounded-2xl group hover:bg-white/10 transition-all duration-300"
              variants={itemVariants}
              whileHover={{ y: -5, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="aspect-video bg-gradient-to-br from-icy-blue-400/10 to-lavender-400/10 rounded-lg mb-6 flex items-center justify-center overflow-hidden">
                <img
                  src={`https://images.unsplash.com/${project.image}?w=600&h=400&fit=crop&auto=format`}
                  alt={project.title}
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                />
              </div>

              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-icy-blue-400 px-3 py-1 bg-icy-blue-400/10 rounded-full">
                    {project.category}
                  </span>
                  <a 
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button variant="ghost" size="icon" className="opacity-70 hover:opacity-100">
                      <Github size={20} />
                    </Button>
                  </a>
                </div>

                <h3 className="text-2xl font-medium group-hover:text-icy-blue-400 transition-colors">
                  {project.title}
                </h3>

                <p className="text-foreground/70 font-light leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 pt-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs px-3 py-1 bg-charcoal-800 text-foreground/60 rounded-full border border-white/10"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
