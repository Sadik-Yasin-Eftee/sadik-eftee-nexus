
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section ref={ref} id="about" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div>
              <h2 className="text-4xl md:text-5xl font-light tracking-tight mb-6">
                About <span className="gradient-text">Me</span>
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-icy-blue-400 to-lavender-400 rounded-full" />
            </div>

            <div className="space-y-6 text-lg font-light leading-relaxed text-foreground/80">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                I'm a Software Engineering graduate from the Islamic University of Technology (IUT), 
                passionate about creating AI systems that genuinely serve humanity. My research focuses 
                on Large Language Models, Natural Language Processing, and the intersection of 
                machine learning with human-computer interaction.
              </motion.p>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                Currently working as a Product Management Intern at ShopUp, I've gained experience in 
                ML engineering roles at both ShopUp and Grameen Communications. I bridge the gap between 
                cutting-edge research and real-world applications that scale, focusing on logistics 
                optimization and AI-driven solutions.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.7 }}
              >
                My ultimate vision? Building AI companions like Baymax and Jarvis — systems that 
                don't just process data, but truly understand and enhance human potential. 
                I believe in ethical AI development that prioritizes transparency, fairness, 
                and human agency.
              </motion.p>
            </div>

            <motion.div 
              className="grid grid-cols-2 gap-6 pt-8"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.9 }}
            >
              <motion.div 
                className="glass-card p-6 rounded-lg"
                whileHover={{ y: -5, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <h3 className="font-medium text-icy-blue-400 mb-2">Research Focus</h3>
                <p className="text-sm font-light text-foreground/70">
                  LLMs, NLP, Human-Computer Interaction, Few-Shot Learning
                </p>
              </motion.div>
              <motion.div 
                className="glass-card p-6 rounded-lg"
                whileHover={{ y: -5, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <h3 className="font-medium text-lavender-400 mb-2">Current Role</h3>
                <p className="text-sm font-light text-foreground/70">
                  Product Management Intern, ShopUp
                </p>
              </motion.div>
            </motion.div>
          </motion.div>

          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          >
            <motion.div 
              className="glass-card p-8 rounded-2xl"
              whileHover={{ y: -10 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="aspect-square bg-gradient-to-br from-icy-blue-400/20 to-lavender-400/20 rounded-2xl flex items-center justify-center">
                <div className="text-6xl font-light text-foreground/20">
                  Profile Image
                </div>
              </div>
            </motion.div>
            <motion.div 
              className="absolute -bottom-4 -right-4 w-24 h-24 bg-gradient-to-br from-icy-blue-400 to-lavender-400 rounded-full"
              animate={{ 
                boxShadow: [
                  "0 0 20px rgba(14, 165, 233, 0.3)",
                  "0 0 30px rgba(14, 165, 233, 0.6)",
                  "0 0 20px rgba(14, 165, 233, 0.3)"
                ]
              }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
