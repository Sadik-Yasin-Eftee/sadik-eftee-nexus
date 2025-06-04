
import { Button } from "@/components/ui/button";
import { ArrowDown, Download, Mail } from "lucide-react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-icy-blue-900/10 via-transparent to-lavender-900/10" />
      
      <motion.div 
        className="max-w-5xl mx-auto text-center space-y-8 relative z-10"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="space-y-6">
          <motion.h1 
            className="text-4xl md:text-6xl font-light tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="gradient-text">Sadik Yasin Eftee</span>
          </motion.h1>
          
          <motion.div 
            className="space-y-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h2 className="text-xl md:text-2xl font-light text-foreground/90 tracking-wide">
              Software Engineering Graduate & Research Scholar
            </h2>
            <p className="text-lg text-foreground/70 font-light">
              Islamic University of Technology (IUT) • Bangladesh
            </p>
          </motion.div>
          
          <motion.div 
            className="max-w-3xl mx-auto space-y-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <p className="text-lg text-foreground/80 font-light leading-relaxed">
              Pursuing advanced research in <span className="text-icy-blue-400 font-medium">Natural Language Processing</span>, 
              <span className="text-lavender-400 font-medium"> Human-Computer Interaction</span>, and 
              <span className="text-icy-blue-400 font-medium"> Artificial Intelligence</span>
            </p>
            <p className="text-base text-foreground/70 font-light">
              Published researcher with industry experience in machine learning engineering and product management
            </p>
          </motion.div>
        </div>

        <motion.div 
          className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button
              className="neumorphic-btn px-8 py-6 text-lg font-light tracking-wide group"
              onClick={() => document.getElementById('publications')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <Download className="w-5 h-5 mr-2 group-hover:animate-bounce" />
              Download CV
            </Button>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button
              variant="outline"
              className="px-8 py-6 text-lg font-light tracking-wide border-icy-blue-400/30 hover:border-icy-blue-400/60 hover:bg-icy-blue-400/10"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <Mail className="w-5 h-5 mr-2" />
              Contact Me
            </Button>
          </motion.div>
        </motion.div>
      </motion.div>

      <motion.div 
        className="absolute bottom-24 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.2 }}
        whileHover={{ y: -5 }}
      >
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="cursor-pointer"
          onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
        >
          <ArrowDown className="w-6 h-6 text-foreground/40 hover:text-foreground/60 transition-colors" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
