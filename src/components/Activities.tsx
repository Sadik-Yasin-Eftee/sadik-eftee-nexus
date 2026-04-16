import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { activities, achievements } from "@/lib/data";
import { Users, Trophy } from "lucide-react";

export default function Activities() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section id="activities" ref={ref} className="py-24 border-t border-border">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <span className="font-mono-custom text-xs text-primary uppercase tracking-widest mb-3 block">Extracurricular</span>
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground tracking-tight">
            Activities & Achievements
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10">
          {/* Activities */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="flex items-center gap-2 mb-5">
              <Users size={15} className="text-primary" />
              <span className="font-display text-base font-semibold text-foreground">Club Activities</span>
            </div>
            <div className="space-y-3">
              {activities.map((act, i) => (
                <motion.div
                  key={act.org}
                  className="rounded-xl bg-card border border-border p-4 hover:border-primary/30 transition-colors"
                  initial={{ opacity: 0, y: 10 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.2 + i * 0.08 }}
                >
                  <div className="font-medium text-foreground text-sm">{act.org}</div>
                  <div className="text-xs text-muted-foreground mt-0.5">{act.role}</div>
                  <div className="font-mono-custom text-xs text-muted-foreground mt-1">{act.period}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Achievements */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            <div className="flex items-center gap-2 mb-5">
              <Trophy size={15} className="text-primary" />
              <span className="font-display text-base font-semibold text-foreground">Achievements</span>
            </div>
            <div className="space-y-3">
              {achievements.map((ach, i) => (
                <motion.div
                  key={ach.title}
                  className="rounded-xl bg-card border border-border p-4 flex items-start justify-between gap-3 hover:border-primary/30 transition-colors group"
                  initial={{ opacity: 0, y: 10 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.2 + i * 0.08 }}
                >
                  <div className="min-w-0">
                    <div className="font-medium text-foreground text-sm truncate">{ach.title}</div>
                    <div className="text-xs text-primary mt-0.5">{ach.result}</div>
                  </div>
                  <span className="font-mono-custom text-xs text-muted-foreground flex-shrink-0">{ach.year}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
