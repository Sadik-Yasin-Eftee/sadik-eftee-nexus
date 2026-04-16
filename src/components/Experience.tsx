import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { experience } from "@/lib/data";
import { Badge } from "@/components/ui/badge";
import { Briefcase } from "lucide-react";

export default function Experience() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section id="experience" ref={ref} className="py-24 border-t border-border">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <span className="font-mono-custom text-xs text-primary uppercase tracking-widest mb-3 block">Industry</span>
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground tracking-tight">
            Professional Experience
          </h2>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-[19px] top-2 bottom-2 w-px bg-border hidden md:block" />

          <div className="space-y-8">
            {experience.map((exp, i) => (
              <motion.div
                key={`${exp.role}-${exp.company}`}
                className="flex gap-6 group"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.12 }}
              >
                {/* Timeline dot */}
                <div className="hidden md:flex flex-col items-center flex-shrink-0">
                  <div className="w-10 h-10 rounded-full bg-card border-2 border-border group-hover:border-primary transition-colors flex items-center justify-center z-10">
                    <Briefcase size={14} className="text-muted-foreground group-hover:text-primary transition-colors" />
                  </div>
                </div>

                {/* Card */}
                <div className="flex-1 rounded-2xl bg-card border border-border p-6 md:p-8 hover:border-primary/30 transition-all duration-300 mb-0">
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-5">
                    <div>
                      <h3 className="font-display text-lg font-semibold text-foreground leading-tight">{exp.role}</h3>
                      <p className="text-primary font-medium text-sm mt-0.5">{exp.company}</p>
                    </div>
                    <div className="flex items-center gap-2 flex-wrap">
                      <Badge variant="secondary" className="text-xs font-normal">{exp.type}</Badge>
                      <span className="font-mono-custom text-xs text-muted-foreground">{exp.period}</span>
                    </div>
                  </div>

                  <ul className="space-y-2.5">
                    {exp.bullets.map((b, bi) => (
                      <li key={bi} className="flex gap-3 text-sm text-muted-foreground leading-relaxed">
                        <span className="text-primary mt-[5px] flex-shrink-0 text-xs">→</span>
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
