
import { Button } from "@/components/ui/button";
import { ArrowDown, Download, Mail } from "lucide-react";
import { motion } from "framer-motion";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-icy-blue-900/10 via-transparent to-lavender-900/10" />
      
      <motion.div 
        className="max-w-5xl mx-auto text-center space-y-6 sm:space-y-8 relative z-10 py-16 sm:py-20"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.div 
          className="flex justify-center mb-6 sm:mb-8"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          <Avatar className="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 ring-2 sm:ring-4 ring-icy-blue-400/20 ring-offset-2 sm:ring-offset-4 ring-offset-background">
            <AvatarImage 
              src="https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?w=400&h=400&fit=crop&crop=face" 
              alt="Sadik Yasin Eftee"
              className="object-cover"
            />
            <AvatarFallback className="text-lg sm:text-2xl md:text-3xl font-medium bg-gradient-to-br from-icy-blue-400/20 to-lavender-400/20 text-icy-blue-400">
              SYE
            </AvatarFallback>
          </Avatar>
        </motion.div>

        <div className="space-y-4 sm:space-y-6">
          <motion.h1 
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light tracking-tight px-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="gradient-text">Sadik Yasin Eftee</span>
          </motion.h1>
          
          <motion.div 
            className="space-y-2 sm:space-y-3 px-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h2 className="text-lg sm:text-xl md:text-2xl font-light text-foreground/90 tracking-wide">
              Software Engineer & Full-Stack Developer
            </h2>
            <p className="text-base sm:text-lg text-foreground/70 font-light">
              Machine Learning • Web Development • Product Management
            </p>
          </motion.div>
          
          <motion.div 
            className="max-w-3xl mx-auto space-y-3 sm:space-y-4 px-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <p className="text-base sm:text-lg text-foreground/80 font-light leading-relaxed">
              Experienced in <span className="text-icy-blue-400 font-medium">Machine Learning Engineering</span>, 
              <span className="text-lavender-400 font-medium"> Full-Stack Development</span>, and 
              <span className="text-icy-blue-400 font-medium"> Product Management</span>
            </p>
            <p className="text-sm sm:text-base text-foreground/70 font-light">
              Building scalable solutions from ideation to deployment with expertise in Python, JavaScript, and modern frameworks
            </p>
          </motion.div>
        </div>

        <motion.div 
          className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center pt-6 sm:pt-8 px-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button
              className="neumorphic-btn px-6 sm:px-8 py-4 sm:py-6 text-base sm:text-lg font-light tracking-wide group w-full sm:w-auto"
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <Download className="w-4 h-4 sm:w-5 sm:h-5 mr-2 group-hover:animate-bounce" />
              Download Resume
            </Button>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button
              variant="outline"
              className="px-6 sm:px-8 py-4 sm:py-6 text-base sm:text-lg font-light tracking-wide border-icy-blue-400/30 hover:border-icy-blue-400/60 hover:bg-icy-blue-400/10 w-full sm:w-auto"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <Mail className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
              Get In Touch
            </Button>
          </motion.div>
        </motion.div>
      </motion.div>

      <motion.div 
        className="absolute bottom-8 sm:bottom-12 md:bottom-16 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.2 }}
        whileHover={{ y: -5 }}
      >
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="cursor-pointer p-2"
          onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
        >
          <ArrowDown className="w-5 h-5 sm:w-6 sm:h-6 text-foreground/40 hover:text-foreground/60 transition-colors" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
