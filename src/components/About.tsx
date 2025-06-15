
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code, Zap, Settings } from "lucide-react";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const highlights = [
    {
      icon: Code,
      title: "Full-Stack Development",
      description: "Experienced in building scalable web applications using modern frameworks and technologies"
    },
    {
      icon: Zap,
      title: "Machine Learning Engineering",
      description: "Specialized in NLP, chatbot development, and credit scoring systems for fintech applications"
    },
    {
      icon: Settings,
      title: "Product Management",
      description: "Currently contributing to operational optimization and data-driven decision making at ShopUp"
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
            About <span className="gradient-text">Me</span>
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
                I'm a passionate <span className="text-icy-blue-400 font-medium">Software Engineer</span> with 
                hands-on experience in building scalable applications and machine learning solutions. 
                My journey spans from developing intelligent <span className="text-lavender-400 font-medium">chatbots</span> 
                and <span className="text-icy-blue-400 font-medium">credit scoring systems</span> to creating 
                comprehensive web applications that solve real-world problems.
              </motion.p>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                Currently serving as a <span className="text-lavender-400 font-medium">Product Management Intern</span> at 
                ShopUp, I focus on optimizing hub operations and implementing data-driven solutions that enhance 
                operational efficiency. My technical expertise extends across the full development stack, 
                from backend systems to user-facing applications.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.7 }}
              >
                I thrive in collaborative environments where I can leverage my technical skills to build 
                innovative solutions that make a meaningful impact. Whether it's developing machine learning 
                models for fintech applications or creating intuitive web interfaces, I'm driven by the 
                challenge of turning complex problems into elegant, scalable solutions.
              </motion.p>
            </div>
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
