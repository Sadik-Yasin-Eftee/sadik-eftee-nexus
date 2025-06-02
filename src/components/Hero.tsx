
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-icy-blue-900/20 via-transparent to-lavender-900/20" />
      
      <div className="max-w-4xl mx-auto text-center space-y-8 relative z-10 animate-fade-in-up">
        <div className="space-y-4">
          <h1 className="text-5xl md:text-7xl font-light tracking-tight">
            <span className="gradient-text">Sadik Yasin Eftee</span>
          </h1>
          <h2 className="text-xl md:text-2xl font-light text-foreground/80 tracking-wide">
            AI Researcher & Software Engineer
          </h2>
          <p className="text-lg md:text-xl text-foreground/60 max-w-2xl mx-auto font-light leading-relaxed">
            Building the future of human-computer interaction through machine learning, 
            natural language processing, and ethical AI innovation.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
          <Button
            className="neumorphic-btn px-8 py-6 text-lg font-light tracking-wide"
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
          >
            View Projects
          </Button>
          <Button
            variant="outline"
            className="px-8 py-6 text-lg font-light tracking-wide border-icy-blue-400/30 hover:border-icy-blue-400/60 hover:bg-icy-blue-400/10"
          >
            Download CV
          </Button>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="w-6 h-6 text-foreground/40" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
