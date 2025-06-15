
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { 
  Code2, 
  Database, 
  Globe, 
  Brain, 
  GitBranch, 
  Server,
  Cpu,
  BarChart3,
  FileCode,
  Layers
} from "lucide-react";

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const skillCategories = [
    {
      title: "Programming Languages",
      icon: Code2,
      skills: [
        { name: "Python", icon: FileCode },
        { name: "JavaScript", icon: Code2 },
        { name: "Java", icon: Cpu },
        { name: "TypeScript", icon: FileCode }
      ]
    },
    {
      title: "Frontend Development",
      icon: Globe,
      skills: [
        { name: "React", icon: Layers },
        { name: "HTML/CSS", icon: Globe },
        { name: "Tailwind CSS", icon: Globe },
        { name: "Responsive Design", icon: Globe }
      ]
    },
    {
      title: "Backend Development",
      icon: Server,
      skills: [
        { name: "Django", icon: Server },
        { name: "Node.js", icon: Server },
        { name: "REST APIs", icon: Server },
        { name: "FastAPI", icon: Server }
      ]
    },
    {
      title: "Database & Cloud",
      icon: Database,
      skills: [
        { name: "SQL", icon: Database },
        { name: "MongoDB", icon: Database },
        { name: "PostgreSQL", icon: Database },
        { name: "Firebase", icon: Database }
      ]
    },
    {
      title: "Machine Learning & AI",
      icon: Brain,
      skills: [
        { name: "TensorFlow", icon: Brain },
        { name: "Scikit-learn", icon: Brain },
        { name: "NLP", icon: Brain },
        { name: "Data Analysis", icon: BarChart3 }
      ]
    },
    {
      title: "Tools & Technologies",
      icon: GitBranch,
      skills: [
        { name: "Git", icon: GitBranch },
        { name: "Docker", icon: Layers },
        { name: "Linux", icon: Server },
        { name: "VS Code", icon: Code2 }
      ]
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
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section ref={ref} id="skills" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-light tracking-tight mb-6">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-xl font-light text-foreground/70 max-w-2xl mx-auto">
            A comprehensive toolkit for building modern, scalable applications
          </p>
        </motion.div>

        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              className="glass-card p-6 rounded-2xl hover:bg-white/10 transition-all duration-300"
              variants={itemVariants}
              whileHover={{ y: -5, scale: 1.02 }}
            >
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-icy-blue-400/20 to-lavender-400/20 rounded-full flex items-center justify-center">
                  <category.icon className="w-5 h-5 text-icy-blue-400" />
                </div>
                <h3 className="text-lg font-medium text-lavender-400">
                  {category.title}
                </h3>
              </div>

              <div className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    className="flex items-center space-x-3 p-3 rounded-lg bg-gradient-to-r from-icy-blue-400/5 to-lavender-400/5 hover:from-icy-blue-400/10 hover:to-lavender-400/10 transition-all duration-200"
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ delay: 0.1 + (index * 0.1) + (skillIndex * 0.05) }}
                  >
                    <skill.icon className="w-4 h-4 text-icy-blue-400/70" />
                    <span className="text-foreground/80 font-light text-sm">
                      {skill.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
