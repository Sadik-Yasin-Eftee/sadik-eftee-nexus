
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const Education = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const education = [
    {
      institution: "Islamic University of Technology (IUT)",
      degree: "Bachelor of Science in Software Engineering",
      period: "2020 - 2024",
      location: "Gazipur, Bangladesh",
      cgpa: "3.63/4.00",
      achievements: [
        "Undergraduate Thesis on Few-Shot Learning for App Problem Extraction",
        "Active member of IUT Computer Society",
        "Participated in multiple programming contests"
      ]
    },
    {
      institution: "Rajuk Uttara Model College",
      degree: "Higher Secondary Certificate (HSC)",
      period: "2017 - 2019",
      location: "Dhaka, Bangladesh",
      cgpa: "5.00/5.00",
      achievements: [
        "Perfect GPA in Science group",
        "Mathematics and Physics excellence",
        "Active in science olympiad competitions"
      ]
    },
    {
      institution: "Rajuk Uttara Model College",
      degree: "Secondary School Certificate (SSC)",
      period: "2015 - 2017",
      location: "Dhaka, Bangladesh",
      cgpa: "5.00/5.00",
      achievements: [
        "Perfect GPA achievement",
        "Consistent academic excellence",
        "Strong foundation in STEM subjects"
      ]
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
    <section ref={ref} id="education" className="py-20 px-6 bg-charcoal-900/30">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-light tracking-tight mb-6">
            Educational <span className="gradient-text">Journey</span>
          </h2>
          <p className="text-xl font-light text-foreground/70 max-w-2xl mx-auto">
            Academic foundation in software engineering and computational sciences
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-icy-blue-400 to-lavender-400 hidden md:block" />

          <motion.div 
            className="space-y-12"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            {education.map((edu, index) => (
              <motion.div
                key={index}
                className="relative flex items-start space-x-8"
                variants={itemVariants}
              >
                {/* Timeline dot */}
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
                        {edu.degree}
                      </h3>
                      <h4 className="text-xl font-light text-foreground/80">
                        {edu.institution}
                      </h4>
                      <p className="text-sm font-light text-foreground/60">
                        {edu.location}
                      </p>
                    </div>
                    <div className="text-right mt-2 md:mt-0">
                      <span className="text-sm font-light text-foreground/60 block">
                        {edu.period}
                      </span>
                      <span className="text-lg font-medium text-lavender-400">
                        CGPA: {edu.cgpa}
                      </span>
                    </div>
                  </div>

                  <div className="space-y-2">
                    {edu.achievements.map((achievement, i) => (
                      <motion.div 
                        key={i} 
                        className="flex items-center space-x-3"
                        initial={{ opacity: 0, x: -20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                        transition={{ delay: 0.2 + (index * 0.3) + (i * 0.1) }}
                      >
                        <div className="w-1.5 h-1.5 bg-icy-blue-400 rounded-full flex-shrink-0" />
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
      </div>
    </section>
  );
};

export default Education;
