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
  Layers,
  TestTube,
  FileText
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
        { name: "C/C++", icon: Code2 },
        { name: "SQL", icon: Database },
        { name: "Java", icon: Cpu },
        { name: "JavaScript", icon: Code2 }
      ]
    },
    {
      title: "ML Framework",
      icon: Brain,
      skills: [
        { name: "Numpy", icon: Brain },
        { name: "Pandas", icon: BarChart3 },
        { name: "Matplotlib", icon: BarChart3 },
        { name: "Scikit-learn", icon: Brain }
      ]
    },
    {
      title: "Database",
      icon: Database,
      skills: [
        { name: "MongoDB", icon: Database },
        { name: "SQLite", icon: Database }
      ]
    },
    {
      title: "Web Development",
      icon: Globe,
      skills: [
        { name: "HTML", icon: Globe },
        { name: "CSS", icon: Globe },
        { name: "Express", icon: Server },
        { name: "Node.js", icon: Server },
        { name: "Django", icon: Server }
      ]
    },
    {
      title: "Version Control",
      icon: GitBranch,
      skills: [
        { name: "Git", icon: GitBranch },
        { name: "GitHub", icon: GitBranch }
      ]
    },
    {
      title: "Testing & Scripting",
      icon: TestTube,
      skills: [
        { name: "JMeter", icon: TestTube },
        { name: "Selenium", icon: TestTube },
        { name: "Jira", icon: Layers },
        { name: "Metabase", icon: BarChart3 },
        { name: "LaTeX", icon: FileText }
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
