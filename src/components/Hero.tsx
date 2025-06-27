import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowDown, Download, Mail } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-icy-blue-900/10 via-transparent to-lavender-900/10" />

      <motion.div
        className="max-w-7xl mx-auto relative z-10 py-16 sm:py-20"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left side - Text content */}
          <div className="space-y-6 sm:space-y-8 text-center lg:text-left order-2 lg:order-1">
            <div className="space-y-4 sm:space-y-6">
              <motion.h1
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light tracking-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <span className="gradient-text">Sadik Yasin Eftee</span>
              </motion.h1>

              <motion.div
                className="space-y-2 sm:space-y-3"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <h2 className="text-lg sm:text-xl md:text-2xl font-light text-foreground/90 tracking-wide">
                  Product Manager & Software Engineer
                </h2>
                <p className="text-base sm:text-lg text-foreground/70 font-light">
                  Machine Learning • Web Development • Product Management
                </p>
              </motion.div>

              <motion.div
                className="space-y-3 sm:space-y-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <p className="text-base sm:text-lg text-foreground/80 font-light leading-relaxed">
                  Experienced in{" "}
                  <span className="text-icy-blue-400 font-medium">
                    Machine Learning Engineering
                  </span>
                  ,
                  <span className="text-lavender-400 font-medium">
                    {" "}
                    Full-Stack Development
                  </span>
                  , and
                  <span className="text-icy-blue-400 font-medium">
                    {" "}
                    Product Management
                  </span>
                </p>
                <p className="text-sm sm:text-base text-foreground/70 font-light">
                  Turning bold ideas into real-world impact by driving products
                  from concept to launch with a focus on innovation, usability,
                  and performance
                </p>
              </motion.div>
            </div>

            <motion.div
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start items-center pt-6 sm:pt-8"
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
                  onClick={() =>
                    document
                      .getElementById("projects")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
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
                  onClick={() =>
                    document
                      .getElementById("contact")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                >
                  <Mail className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                  Get In Touch
                </Button>
              </motion.div>
            </motion.div>
          </div>

          {/* Right side - Profile picture */}
          <motion.div
            className="flex justify-center lg:justify-end order-1 lg:order-2"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <div
              className="w-48 h-60 sm:w-56 sm:h-70 md:w-64 md:h-80 lg:w-72 lg:h-90 xl:w-80 xl:h-96 rounded-full overflow-hidden"
              style={{ borderRadius: "50%" }}
            >
              <img
                src="/lovable-uploads/3dad034d-aea3-42eb-b907-76a133a18fb1.png"
                alt="Sadik Yasin Eftee"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </motion.div>

      <motion.div
        className="absolute bottom-16 sm:bottom-20 md:bottom-24 lg:bottom-28 xl:bottom-32 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.2 }}
        whileHover={{ y: -5 }}
      >
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="cursor-pointer p-2"
          onClick={() =>
            document
              .getElementById("about")
              ?.scrollIntoView({ behavior: "smooth" })
          }
        >
          <ArrowDown className="w-5 h-5 sm:w-6 sm:h-6 text-foreground/40 hover:text-foreground/60 transition-colors" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
