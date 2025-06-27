import { motion, useInView } from "framer-motion";
import { ExternalLink, FileText, Users } from "lucide-react";
import { useRef } from "react";

const Publications = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const publications = [
    {
      title:
        "Evaluating the Effectiveness of Large Language Models in Multi-Document Summarization of Bangla News Articles",
      authors: "Sadik Yasin Eftee, Ajwad Abrar",
      venue: "International Conference on Data Science, AI and Applications",
      year: "2025",
      type: "Conference Paper",
      status: "Under Review",
      description:
        "Research on leveraging large language models for effective multi-document summarization in Bangla language, addressing challenges in low-resource language processing.",
      link: "#",
    },
    {
      title:
        "Extraction of App Problems & Its Corresponding User Actions from App Reviews Using Few-Shot Learning",
      authors:
        "Sadik Yasin Eftee, Maman Yusuf Khan, Raiyan Noor, Md. Kamrul Hasan, Hasan Mahmud",
      venue: "SSRN Preprint",
      year: "2025",
      type: "Preprint",
      status: "Draft",
      description:
        "Novel approach using GPT-3.5 Turbo and few-shot learning techniques to extract actionable insights from app reviews, contributing to software engineering and HCI research.",
      link: "https://doi.org/10.2139/ssrn.5093717",
    },
  ];

  const researchProjects = [
    {
      title:
        "Extraction of App Problems & Its Corresponding User Actions from App Reviews Using Few-Shot Learning",
      description:
        "Undergraduate thesis research utilizing GPT-3.5 Turbo to extract app issues from curated reviews using filtering and few-shot learning techniques. Developed a custom dataset to evaluate fine-tuned LLM performance and contributed to understanding user behavior in mobile applications.",
      period: "May 2023 - June 2024",
      supervisors: "Prof. Hasan Mahmud & Prof. Md. Kamrul Hasan",
      type: "Undergraduate Thesis",
      keywords: [
        "Natural Language Processing",
        "Few-Shot Learning",
        "App Review Analysis",
        "GPT-3.5 Turbo",
      ],
    },
    {
      title:
        "Exploring the Influence of AI Tools in Education: Usage by Students & Ethical Considerations",
      description:
        "Comprehensive analysis of AI tools' role in students' academic activities, exploring their impact on learning complex topics, ethical considerations, curriculum flexibility, academic integrity, and overall learning capabilities. Research contributes to educational technology and ethics in AI.",
      period: "March 2024 - May 2024",
      collaborator: "Mohammad Ishrak Abedin",
      type: "Research Project",
      keywords: [
        "AI in Education",
        "Educational Technology",
        "Ethics",
        "Academic Integrity",
      ],
    },
    {
      title:
        "Exploring Open-Source JavaScript Libraries: A Longitudinal Study On Repository Health & Code Quality",
      description:
        "Longitudinal analysis of JavaScript libraries (React, Svelte, Vue) examining repository health, code quality metrics, and technical debt patterns. Provided actionable insights to enhance project efficiency and longevity in open-source software development.",
      period: "October 2023 - December 2023",
      collaborator: "Md. Jubair Ibna Mostafa",
      type: "Research Project",
      keywords: [
        "Software Engineering",
        "Code Quality",
        "Open Source",
        "Technical Debt",
      ],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section ref={ref} id="publications" className="py-20 px-6">
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
          <p className="text-xl font-light text-foreground/70 max-w-3xl mx-auto">
            Academic contributions in natural language processing, artificial
            intelligence, and software engineering
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-icy-blue-400 to-lavender-400 rounded-full mx-auto mt-6" />
        </motion.div>

        {/* Publications */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="flex items-center mb-8">
            <FileText className="w-6 h-6 text-icy-blue-400 mr-3" />
            <h3 className="text-2xl font-medium text-icy-blue-400">
              Publications
            </h3>
          </div>

          <motion.div
            className="space-y-8"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            {publications.map((pub, index) => (
              <motion.div
                key={index}
                className="glass-card p-8 rounded-2xl hover:bg-white/10 transition-all duration-300 group border-l-4 border-icy-blue-400/30"
                variants={itemVariants}
                whileHover={{ y: -5, scale: 1.01 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex gap-3">
                    <span className="text-sm font-medium text-lavender-400 px-3 py-1 bg-lavender-400/10 rounded-full border border-lavender-400/20">
                      {pub.type}
                    </span>
                    <span
                      className={`text-sm font-medium px-3 py-1 rounded-full ${
                        pub.status === "Published"
                          ? "text-green-400 bg-green-400/10 border border-green-400/20"
                          : pub.status === "Draft"
                          ? "text-yellow-400 bg-yellow-400/10 border border-yellow-400/20"
                          : pub.status === "Under Review"
                          ? "text-blue-400 bg-blue-400/10 border border-blue-400/20"
                          : ""
                      }`}
                    >
                      {pub.status || "No Status"}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-foreground/60 font-light">
                      {pub.year}
                    </span>
                    {pub.link !== "#" && (
                      <a
                        href={pub.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="w-4 h-4 text-icy-blue-400 hover:text-icy-blue-300 transition-colors" />
                      </a>
                    )}
                  </div>
                </div>

                <h3 className="text-xl font-medium mb-3 group-hover:text-icy-blue-400 transition-colors leading-relaxed">
                  {pub.title}
                </h3>

                <p className="text-foreground/80 font-light mb-3 leading-relaxed">
                  {pub.description}
                </p>

                <div className="space-y-2">
                  <p className="text-foreground/70 font-light">
                    <span className="text-icy-blue-400">Authors:</span>{" "}
                    {pub.authors}
                  </p>
                  <p className="text-foreground/60 font-light italic">
                    <span className="text-lavender-400">Venue:</span>{" "}
                    {pub.venue}
                  </p>
                </div>
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
          <div className="flex items-center mb-8">
            <Users className="w-6 h-6 text-icy-blue-400 mr-3" />
            <h3 className="text-2xl font-medium text-icy-blue-400">
              Research Experience
            </h3>
          </div>

          <motion.div
            className="space-y-8"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            {researchProjects.map((project, index) => (
              <motion.div
                key={index}
                className="glass-card p-8 rounded-2xl hover:bg-white/10 transition-all duration-300 border-l-4 border-lavender-400/30"
                variants={itemVariants}
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="flex items-start justify-between mb-4">
                  <span className="text-sm font-medium text-icy-blue-400 px-3 py-1 bg-icy-blue-400/10 rounded-full border border-icy-blue-400/20">
                    {project.type}
                  </span>
                  <span className="text-sm text-foreground/60 font-light whitespace-nowrap ml-4">
                    {project.period}
                  </span>
                </div>

                <h4 className="text-xl font-medium text-lavender-400 mb-4 leading-relaxed">
                  {project.title}
                </h4>

                <p className="text-foreground/80 font-light leading-relaxed mb-4">
                  {project.description}
                </p>

                <div className="space-y-3">
                  <div className="flex flex-wrap gap-2">
                    {project.keywords.map((keyword, i) => (
                      <span
                        key={i}
                        className="text-xs px-3 py-1 bg-charcoal-800 text-foreground/60 rounded-full border border-white/10"
                      >
                        {keyword}
                      </span>
                    ))}
                  </div>

                  <p className="text-sm text-foreground/60 font-light">
                    {project.supervisors ? (
                      <>
                        <span className="text-icy-blue-400">Supervisors:</span>{" "}
                        {project.supervisors}
                      </>
                    ) : (
                      <>
                        <span className="text-icy-blue-400">Collaborator:</span>{" "}
                        {project.collaborator}
                      </>
                    )}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Publications;
