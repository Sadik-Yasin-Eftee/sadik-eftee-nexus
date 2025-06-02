
const Publications = () => {
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

  return (
    <section id="publications" className="py-20 px-6 bg-charcoal-900/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light tracking-tight mb-6">
            Publications & <span className="gradient-text">Research</span>
          </h2>
          <p className="text-xl font-light text-foreground/70 max-w-2xl mx-auto">
            Contributions to academic research in AI, NLP, and human-computer interaction
          </p>
        </div>

        <div className="space-y-6">
          {publications.map((pub, index) => (
            <div
              key={index}
              className="glass-card p-8 rounded-lg hover:bg-white/10 transition-all duration-300 group"
              style={{ animationDelay: `${index * 0.1}s` }}
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Publications;
