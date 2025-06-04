
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, Research, Award } from "lucide-react";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const highlights = [
    {
      icon: GraduationCap,
      title: "Academic Excellence",
      description: "Bachelor's in Software Engineering with CGPA 3.63/4.00 from IUT"
    },
    {
      icon: Research,
      title: "Research Publications",
      description: "Published work in NLP and app review analysis using few-shot learning"
    },
    {
      icon: Award,
      title: "Industry Experience",
      description: "ML Engineering at Grameen Communications & Product Management at ShopUp"
    }
  ];

  return (
    <section ref={ref} id="about" className="py-20 px-6 bg-charcoal-900/20">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-light tracking-tight mb-6">
            Research <span className="gradient-text">Profile</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-icy-blue-400 to-lavender-400 rounded-full mx-auto" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="space-y-6 text-lg font-light leading-relaxed text-foreground/80">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                I am a dedicated Software Engineering graduate from the Islamic University of Technology (IUT) 
                with a strong foundation in research and practical application. My academic and professional 
                journey spans <span className="text-icy-blue-400 font-medium">Natural Language Processing</span>, 
                <span className="text-lavender-400 font-medium"> Human-Computer Interaction</span>, 
                <span className="text-icy-blue-400 font-medium"> Artificial Intelligence</span>, and 
                <span className="text-lavender-400 font-medium"> Machine Learning</span>.
              </motion.p>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                My research experience includes developing few-shot learning models for app review analysis, 
                exploring AI's role in education, and conducting longitudinal studies on open-source JavaScript 
                libraries. I have published work on multi-document summarization of Bangla news articles and 
                app problem extraction using advanced NLP techniques.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.7 }}
              >
                Through my industrial experience at Grameen Communications and ShopUp, I have gained valuable 
                insights into real-world applications of machine learning in fintech and logistics optimization. 
                I am passionate about pursuing advanced research that bridges academic excellence with practical 
                impact, particularly in developing ethical AI systems that enhance human capabilities.
              </motion.p>
            </div>

            <motion.div 
              className="pt-4"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.9 }}
            >
              <h3 className="text-xl font-medium text-icy-blue-400 mb-4">Research Interests</h3>
              <div className="flex flex-wrap gap-3">
                {[
                  "Natural Language Processing",
                  "Human-Computer Interaction", 
                  "Artificial Intelligence",
                  "Machine Learning",
                  "Robotics",
                  "Software Engineering"
                ].map((interest, index) => (
                  <span 
                    key={index}
                    className="px-4 py-2 bg-icy-blue-400/10 text-icy-blue-400 rounded-full text-sm font-light border border-icy-blue-400/20"
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </motion.div>
          </motion.div>

          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          >
            {highlights.map((highlight, index) => (
              <motion.div
                key={index}
                className="glass-card p-6 rounded-2xl hover:bg-white/10 transition-all duration-300"
                whileHover={{ y: -5, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: 0.4 + (index * 0.2) }}
              >
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-icy-blue-400/20 to-lavender-400/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <highlight.icon className="w-6 h-6 text-icy-blue-400" />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-lavender-400 mb-2">
                      {highlight.title}
                    </h4>
                    <p className="text-foreground/70 font-light text-sm leading-relaxed">
                      {highlight.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
