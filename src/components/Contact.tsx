
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Github, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const technologies = [
    "Python", "C/C++", "SQL", "Java", "JavaScript", "NumPy", "Pandas", 
    "Matplotlib", "Scikit-learn", "MongoDB", "SQLite", "HTML", "CSS", 
    "Express", "Node.js", "Django", "Git", "GitHub", "JMeter", "Selenium", 
    "LaTeX", "Metabase", "Jira"
  ];

  return (
    <section ref={ref} id="contact" className="py-20 px-6 bg-charcoal-900/30">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-light tracking-tight mb-6">
            Let's <span className="gradient-text">Connect</span>
          </h2>
          <p className="text-xl font-light text-foreground/70 max-w-2xl mx-auto">
            Interested in collaboration, research opportunities, or just want to chat about AI? 
            I'd love to hear from you.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <motion.div 
            className="glass-card p-8 rounded-2xl"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h3 className="text-2xl font-medium mb-6">Send a Message</h3>
            <form className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <Input
                  placeholder="First Name"
                  className="bg-charcoal-800/50 border-white/10 focus:border-icy-blue-400/50"
                />
                <Input
                  placeholder="Last Name"
                  className="bg-charcoal-800/50 border-white/10 focus:border-icy-blue-400/50"
                />
              </div>
              <Input
                type="email"
                placeholder="Email Address"
                className="bg-charcoal-800/50 border-white/10 focus:border-icy-blue-400/50"
              />
              <Input
                placeholder="Subject"
                className="bg-charcoal-800/50 border-white/10 focus:border-icy-blue-400/50"
              />
              <Textarea
                placeholder="Your message..."
                rows={6}
                className="bg-charcoal-800/50 border-white/10 focus:border-icy-blue-400/50 resize-none"
              />
              <Button className="neumorphic-btn w-full py-6 text-lg font-light">
                Send Message
              </Button>
            </form>
          </motion.div>

          {/* Contact Information */}
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          >
            <motion.div 
              className="glass-card p-8 rounded-2xl"
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <h3 className="text-2xl font-medium mb-6">Get in Touch</h3>
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-icy-blue-400 to-lavender-400 rounded-lg flex items-center justify-center">
                    <Mail className="w-6 h-6 text-background" />
                  </div>
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-foreground/70 font-light">sadikyasineftee@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-icy-blue-400 to-lavender-400 rounded-lg flex items-center justify-center">
                    <Phone className="w-6 h-6 text-background" />
                  </div>
                  <div>
                    <p className="font-medium">Phone</p>
                    <p className="text-foreground/70 font-light">(+880) 1913-718717</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-icy-blue-400 to-lavender-400 rounded-lg flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-background" />
                  </div>
                  <div>
                    <p className="font-medium">Location</p>
                    <p className="text-foreground/70 font-light">Dhaka - 1229, Bangladesh</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-icy-blue-400 to-lavender-400 rounded-lg flex items-center justify-center">
                    <Github className="w-6 h-6 text-background" />
                  </div>
                  <div>
                    <p className="font-medium">GitHub</p>
                    <p className="text-foreground/70 font-light">github.com/Sadik-Yasin-Eftee</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-icy-blue-400 to-lavender-400 rounded-lg flex items-center justify-center">
                    <Linkedin className="w-6 h-6 text-background" />
                  </div>
                  <div>
                    <p className="font-medium">LinkedIn</p>
                    <p className="text-foreground/70 font-light">linkedin.com/in/sadik-yasin</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div 
              className="glass-card p-8 rounded-2xl"
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <h3 className="text-xl font-medium mb-4">Technical Skills</h3>
              <div className="flex flex-wrap gap-2">
                {technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-gradient-to-r from-icy-blue-400/20 to-lavender-400/20 rounded-full text-sm font-light border border-white/10"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
