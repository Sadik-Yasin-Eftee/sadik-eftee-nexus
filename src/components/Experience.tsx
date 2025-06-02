
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const experiences = [
    {
      company: "ShopUp",
      role: "Product Management Intern",
      period: "May 2025 - Present",
      description: "Contributing to optimization of hub operations for RedX and implementing features to improve merchant satisfaction and service quality.",
      achievements: [
        "Optimized RedX hub operations by analyzing delivery and operational data to improve efficiency and reduce costs",
        "Explored datasets to identify trends, inefficiencies, and actionable insights for automation and process enhancement",
        "Implemented new features focused on improving merchant satisfaction and service quality",
        "Maintained and enhanced automated salary structure system for RedX agents ensuring accuracy and scalability"
      ]
    },
    {
      company: "Grameen Communications",
      role: "Machine Learning Engineering Intern",
      period: "June 2023 - September 2023",
      description: "Developed chatbot systems and contributed to credit scoring models for microfinance applications serving underbanked communities.",
      achievements: [
        "Developed and deployed chatbots for real-time interaction with query storage and intent matching",
        "Conducted beta testing and optimized chatbot performance through data collection",
        "Contributed to boosting model for improved credit scoring with enhanced accuracy",
        "Handled data preparation and analysis for customer demographics enabling precise credit assessments"
      ]
    }
  ];

  const activities = [
    {
      organization: "IUT Computer Society (IUTCS)",
      role: "Junior Web Developer",
      period: "2020 - 2021"
    },
    {
      organization: "IUT Debating Society (IUTDS)",
      role: "Junior Member",
      period: "2020"
    }
  ];

  const achievements = [
    {
      title: "Robi Datathon 3.0",
      achievement: "193rd Position (out of 3,500+ teams)",
      location: "Dhaka, Bangladesh",
      year: "2024"
    },
    {
      title: "Orange Corners Ideation Challenge",
      achievement: "Stage 2",
      location: "Dhaka, Bangladesh",
      year: "2023"
    },
    {
      title: "IUT Novice Debate Competition",
      achievement: "Semifinalist",
      location: "Gazipur, Bangladesh",
      year: "2020"
    },
    {
      title: "Rajuk College Inter-Shift Cricket Tournament",
      achievement: "Runner-Up (Senior Level)",
      location: "Dhaka, Bangladesh",
      year: "2018"
    },
    {
      title: "Rajuk College Inter-Shift Cricket Tournament",
      achievement: "Champion (Junior Level)",
      location: "Dhaka, Bangladesh",
      year: "2014"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section ref={ref} id="experience" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-light tracking-tight mb-6">
            Professional <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-xl font-light text-foreground/70 max-w-2xl mx-auto">
            Building impactful solutions across product management, machine learning, and fintech innovation
          </p>
        </motion.div>

        {/* Industrial Experience */}
        <div className="relative mb-16">
          <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-icy-blue-400 to-lavender-400 hidden md:block" />

          <motion.div 
            className="space-y-12"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                className="relative flex items-start space-x-8"
                variants={itemVariants}
              >
                <motion.div 
                  className="hidden md:flex w-16 h-16 bg-gradient-to-br from-icy-blue-400 to-lavender-400 rounded-full items-center justify-center flex-shrink-0 relative z-10"
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="w-6 h-6 bg-background rounded-full" />
                </motion.div>

                <motion.div 
                  className="glass-card p-8 rounded-2xl flex-1 hover:bg-white/10 transition-all duration-300"
                  whileHover={{ y: -5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
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
                      <motion.div 
                        key={i} 
                        className="flex items-start space-x-3"
                        initial={{ opacity: 0, x: -20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                        transition={{ delay: 0.2 + (index * 0.3) + (i * 0.1) }}
                      >
                        <div className="w-1.5 h-1.5 bg-icy-blue-400 rounded-full flex-shrink-0 mt-2" />
                        <span className="text-sm font-light text-foreground/70">
                          {achievement}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Extracurricular Activities */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <h3 className="text-2xl font-medium mb-8 text-icy-blue-400">Extracurricular Activities</h3>
            <div className="space-y-4">
              {activities.map((activity, index) => (
                <div key={index} className="glass-card p-6 rounded-lg">
                  <h4 className="font-medium text-lavender-400 mb-1">{activity.organization}</h4>
                  <p className="text-foreground/70 font-light text-sm mb-1">{activity.role}</p>
                  <p className="text-foreground/60 font-light text-xs">{activity.period}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Achievements */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <h3 className="text-2xl font-medium mb-8 text-icy-blue-400">Achievements</h3>
            <div className="space-y-4">
              {achievements.map((achievement, index) => (
                <div key={index} className="glass-card p-6 rounded-lg">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-medium text-lavender-400">{achievement.title}</h4>
                    <span className="text-xs text-foreground/60 font-light">{achievement.year}</span>
                  </div>
                  <p className="text-foreground/70 font-light text-sm mb-1">{achievement.achievement}</p>
                  <p className="text-foreground/60 font-light text-xs">{achievement.location}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
