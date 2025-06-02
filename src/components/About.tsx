
const About = () => {
  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl md:text-5xl font-light tracking-tight mb-6">
                About <span className="gradient-text">Me</span>
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-icy-blue-400 to-lavender-400 rounded-full" />
            </div>

            <div className="space-y-6 text-lg font-light leading-relaxed text-foreground/80">
              <p>
                I'm a Software Engineering graduate from the Islamic University of Technology (IUT), 
                passionate about creating AI systems that genuinely serve humanity. My research focuses 
                on Large Language Models, Natural Language Processing, and the intersection of 
                machine learning with human-computer interaction.
              </p>
              
              <p>
                Having worked in product management and ML engineering roles at ShopUp and 
                Grameen Communications, I've learned to bridge the gap between cutting-edge research 
                and real-world applications that scale.
              </p>

              <p>
                My ultimate vision? Building AI companions like Baymax and Jarvis — systems that 
                don't just process data, but truly understand and enhance human potential. 
                I believe in ethical AI development that prioritizes transparency, fairness, 
                and human agency.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6 pt-8">
              <div className="glass-card p-6 rounded-lg">
                <h3 className="font-medium text-icy-blue-400 mb-2">Research Focus</h3>
                <p className="text-sm font-light text-foreground/70">
                  LLMs, NLP, Human-Computer Interaction
                </p>
              </div>
              <div className="glass-card p-6 rounded-lg">
                <h3 className="font-medium text-lavender-400 mb-2">Education</h3>
                <p className="text-sm font-light text-foreground/70">
                  BSc Software Engineering, IUT
                </p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="glass-card p-8 rounded-2xl">
              <div className="aspect-square bg-gradient-to-br from-icy-blue-400/20 to-lavender-400/20 rounded-2xl flex items-center justify-center">
                <div className="text-6xl font-light text-foreground/20">
                  Profile Image
                </div>
              </div>
            </div>
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-gradient-to-br from-icy-blue-400 to-lavender-400 rounded-full animate-glow" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
