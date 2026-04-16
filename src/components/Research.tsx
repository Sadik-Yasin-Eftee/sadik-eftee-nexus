import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { research } from "@/lib/data";
import { Badge } from "@/components/ui/badge";
import { FlaskConical, CheckCircle2, Clock } from "lucide-react";

export default function Research() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.15 });

  return (
    <section id="research" ref={ref} className="py-24 border-t border-border">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <span className="font-mono-custom text-xs text-primary uppercase tracking-widest mb-3 block">Research</span>
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground tracking-tight">
            Research Experience
          </h2>
        </motion.div>

        <div className="space-y-6">
          {research.map((item, i) => (
            <motion.div
              key={item.title}
              className="group rounded-2xl bg-card border border-border p-6 md:p-8 hover:border-primary/30 transition-all duration-300"
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <FlaskConical size={14} className="text-primary" />
                  </div>
                  <div>
                    <span className="text-xs font-mono-custom text-muted-foreground uppercase tracking-wider">{item.type}</span>
                    <span className="mx-2 text-border">·</span>
                    <span className="text-xs font-mono-custom text-muted-foreground">{item.period}</span>
                  </div>
                </div>
                <div className="flex items-center gap-1.5">
                  {item.status === "Ongoing" ? (
                    <Clock size={13} className="text-amber-500" />
                  ) : (
                    <CheckCircle2 size={13} className="text-green-500" />
                  )}
                  <span className={`text-xs font-medium ${item.status === "Ongoing" ? "text-amber-500" : "text-green-500"}`}>
                    {item.status}
                  </span>
                </div>
              </div>

              <h3 className="font-display text-lg font-semibold text-foreground mb-3 leading-snug group-hover:text-primary transition-colors">
                {item.title}
              </h3>

              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                {item.description}
              </p>

              <div className="flex flex-wrap items-center gap-3">
                <div className="flex flex-wrap gap-1.5">
                  {item.keywords.map((kw) => (
                    <Badge key={kw} variant="secondary" className="text-xs font-normal">{kw}</Badge>
                  ))}
                </div>
                <span className="text-xs text-muted-foreground ml-auto">
                  Supervisors: {item.supervisors.join(", ")}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
