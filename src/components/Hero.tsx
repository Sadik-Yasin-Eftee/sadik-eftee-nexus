
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-icy-blue-900/20 via-transparent to-lavender-900/20" />
      
      <motion.div 
        className="max-w-4xl mx-auto text-center space-y-8 relative z-10"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="space-y-4">
          <motion.h1 
            className="text-5xl md:text-7xl font-light tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="gradient-text">Sadik Yasin Eftee</span>
          </motion.h1>
          <motion.h2 
            className="text-xl md:text-2xl font-light text-foreground/80 tracking-wide"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Engineer. Researcher. Builder of Intelligent Systems.
          </motion.h2>
          <motion.p 
            className="text-lg md:text-xl text-foreground/60 max-w-2xl mx-auto font-light leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Building the future of human-computer interaction through machine learning, 
            natural language processing, and ethical AI innovation.
          </motion.p>
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
              className="neumorphic-btn px-8 py-6 text-lg font-light tracking-wide"
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            >
              🚀 Explore Projects
            </Button>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button
              variant="outline"
              className="px-8 py-6 text-lg font-light tracking-wide border-icy-blue-400/30 hover:border-icy-blue-400/60 hover:bg-icy-blue-400/10"
            >
              📄 Download CV
            </Button>
          </motion.div>
        </motion.div>
      </motion.div>

      <motion.div 
        className="absolute bottom-16 left-1/2 transform -translate-x-1/2"
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
