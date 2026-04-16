import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { education } from "@/lib/data";
import { GraduationCap, CheckCircle2, Clock } from "lucide-react";

export default function Education() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section id="education" ref={ref} className="py-24 border-t border-border">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <span className="font-mono-custom text-xs text-primary uppercase tracking-widest mb-3 block">Education</span>
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground tracking-tight">
            Academic Background
          </h2>
        </motion.div>

        <div className="space-y-4">
          {education.map((edu, i) => (
            <motion.div
              key={edu.degree}
              className="rounded-2xl bg-card border border-border p-6 md:p-8 hover:border-primary/30 transition-all duration-300 group"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <GraduationCap size={16} className="text-primary" />
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-1">
                    <div>
                      <h3 className="font-display text-base md:text-lg font-semibold text-foreground leading-snug group-hover:text-primary transition-colors">
                        {edu.degree}
                      </h3>
                      <p className="text-sm text-primary font-medium mt-0.5">{edu.institution}</p>
                      <p className="text-xs text-muted-foreground mt-0.5">{edu.location}</p>
                    </div>

                    <div className="text-right flex-shrink-0">
                      <div className="flex items-center justify-end gap-1.5 mb-1">
                        {edu.status === "ongoing" ? (
                          <><Clock size={12} className="text-amber-500" /><span className="text-xs text-amber-500 font-medium">Ongoing</span></>
                        ) : (
                          <><CheckCircle2 size={12} className="text-green-500" /><span className="text-xs text-green-500 font-medium">Completed</span></>
                        )}
                      </div>
                      <span className="font-mono-custom text-xs text-muted-foreground block">{edu.period}</span>
                      {edu.gpa && (
                        <span className="font-mono-custom text-xs font-semibold text-foreground block mt-1">
                          GPA {edu.gpa}
                        </span>
                      )}
                    </div>
                  </div>

                  {edu.description && (
                    <p className="text-sm text-muted-foreground mt-2">{edu.description}</p>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
