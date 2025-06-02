
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const Publications = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const publications = [
    {
      title: "Evaluating the Effectiveness of Large Language Models in Multi-Document Summarization of Bangla News Articles",
      authors: "S. Y. Eftee et al.",
      venue: "International Conference on Data Science, AI and Applications",
      year: "2025",
      type: "Conference Paper",
      status: "Under Review",
      link: "#"
    },
    {
      title: "Extraction of App Problems & Its Corresponding User Actions from App Reviews Using Few-Shot Learning",
      authors: "S. Y. Eftee",
      venue: "SSRN Preprint",
      year: "2025",
      type: "Preprint",
      status: "Published",
      link: "https://doi.org/10.2139/ssrn.5093717"
    }
  ];

  const researchProjects = [
    {
      title: "Undergraduate Thesis: App Problem Extraction Using Few-Shot Learning",
      description: "Utilized GPT-3.5 Turbo to extract app issues from curated reviews using filtering and few-shot learning, developing a custom dataset to evaluate fine-tuned LLM performance.",
      period: "May 2023 - June 2024",
      supervisors: "Prof. Hasan Mahmud & Prof. Md. Kamrul Hasan"
    },
    {
      title: "AI Tools in Education: Usage & Ethical Considerations",
      description: "Analyzed the role of AI tools in students' academic activities, exploring impact on learning complex topics, ethical considerations, curriculum flexibility, and academic integrity.",
      period: "March 2024 - May 2024",
      collaborator: "Mohammad Ishrak Abedin"
    },
    {
      title: "Open-Source JavaScript Libraries: A Longitudinal Study",
      description: "Analyzed JavaScript libraries (React, Svelte, Vue) for repository health, code quality, and technical debt, providing insights to enhance project efficiency and longevity.",
      period: "October 2023 - December 2023",
      collaborator: "Md. Jubair Ibna Mostafa"
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

        {/* Publications */}
        <motion.div 
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h3 className="text-2xl font-medium mb-8 text-icy-blue-400">Publications</h3>
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
                  <div className="flex gap-3">
                    <span className="text-sm font-medium text-lavender-400 px-3 py-1 bg-lavender-400/10 rounded-full">
                      {pub.type}
                    </span>
                    <span className={`text-sm font-medium px-3 py-1 rounded-full ${
                      pub.status === 'Published' 
                        ? 'text-green-400 bg-green-400/10' 
                        : 'text-yellow-400 bg-yellow-400/10'
                    }`}>
                      {pub.status}
                    </span>
                  </div>
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
        </motion.div>

        {/* Research Experience */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h3 className="text-2xl font-medium mb-8 text-icy-blue-400">Research Experience</h3>
          <motion.div 
            className="space-y-6"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            {researchProjects.map((project, index) => (
              <motion.div
                key={index}
                className="glass-card p-8 rounded-lg hover:bg-white/10 transition-all duration-300"
                variants={itemVariants}
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="flex items-start justify-between mb-4">
                  <h4 className="text-xl font-medium text-lavender-400">
                    {project.title}
                  </h4>
                  <span className="text-sm text-foreground/60 font-light whitespace-nowrap ml-4">
                    {project.period}
                  </span>
                </div>

                <p className="text-foreground/70 font-light leading-relaxed mb-4">
                  {project.description}
                </p>

                <p className="text-sm text-foreground/60 font-light">
                  {project.supervisors ? `Supervisors: ${project.supervisors}` : `Collaborator: ${project.collaborator}`}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Publications;
