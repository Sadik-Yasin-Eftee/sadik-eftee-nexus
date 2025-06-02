
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const Publications = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const publications = [
    {
      title: "Advancing Fake News Detection through Transformer-based Language Models",
      authors: "S. Y. Eftee, M. Rahman, A. Khan",
      venue: "International Conference on Natural Language Processing",
      year: "2024",
      type: "Conference Paper",
      link: "#"
    },
    {
      title: "Human-Computer Interaction in AI-Assisted Learning Environments",
      authors: "S. Y. Eftee, L. Ahmed",
      venue: "Journal of Educational Technology Research",
      year: "2023",
      type: "Journal Article",
      link: "#"
    },
    {
      title: "Ethical Considerations in Large Language Model Development",
      authors: "S. Y. Eftee",
      venue: "AI Ethics Workshop, ICML",
      year: "2023",
      type: "Workshop Paper",
      link: "#"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section ref={ref} id="publications" className="py-20 px-6 bg-charcoal-900/30">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-light tracking-tight mb-6">
            Publications & <span className="gradient-text">Research</span>
          </h2>
          <p className="text-xl font-light text-foreground/70 max-w-2xl mx-auto">
            Contributions to academic research in AI, NLP, and human-computer interaction
          </p>
        </motion.div>

        <motion.div 
          className="space-y-6"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {publications.map((pub, index) => (
            <motion.div
              key={index}
              className="glass-card p-8 rounded-lg hover:bg-white/10 transition-all duration-300 group"
              variants={itemVariants}
              whileHover={{ y: -5, scale: 1.01 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="flex items-start justify-between mb-4">
                <span className="text-sm font-medium text-lavender-400 px-3 py-1 bg-lavender-400/10 rounded-full">
                  {pub.type}
                </span>
                <span className="text-sm text-foreground/60 font-light">
                  {pub.year}
                </span>
              </div>

              <h3 className="text-xl font-medium mb-3 group-hover:text-icy-blue-400 transition-colors">
                {pub.title}
              </h3>

              <p className="text-foreground/70 font-light mb-2">
                {pub.authors}
              </p>

              <p className="text-foreground/60 font-light italic">
                {pub.venue}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Publications;
