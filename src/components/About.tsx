import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { profile } from "@/lib/data";
import { Brain, Code2, Package } from "lucide-react";

const highlights = [
  { icon: Brain, label: "NLP & HCI Researcher", desc: "Studying how humans interact with AI systems and building intelligent language models." },
  { icon: Code2, label: "Full-Stack Engineer", desc: "From ML pipelines to web applications — end-to-end product development." },
  { icon: Package, label: "Product Manager", desc: "Driving operational products at ShopUp from concept through launch." },
];

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section id="about" ref={ref} className="py-24 border-t border-border">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="grid lg:grid-cols-2 gap-16 items-start"
        >
          <div>
            <span className="font-mono-custom text-xs text-primary uppercase tracking-widest mb-3 block">About</span>
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground tracking-tight mb-6">
              Researcher & Builder
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                I'm a graduate student and researcher at <span className="text-foreground font-medium">Islamic University of Technology</span>, specializing in Natural Language Processing and Human-Computer Interaction. My work explores how AI systems can be designed to be more human-centered.
              </p>
              <p>
                Outside academia, I work as <span className="text-foreground font-medium">Junior Product Manager at ShopUp</span>, where I own logistics and fulfillment product flows impacting thousands of daily operations.
              </p>
              <p>
                I thrive at the intersection of research and real-world impact — turning complex problems into elegant, measurable solutions.
              </p>
            </div>
          </div>

          <div className="space-y-4">
            {highlights.map((h, i) => (
              <motion.div
                key={h.label}
                className="flex gap-4 p-4 rounded-xl bg-card border border-border hover:border-primary/30 transition-colors"
                initial={{ opacity: 0, x: 20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 + i * 0.1 }}
              >
                <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <h.icon size={16} className="text-primary" />
                </div>
                <div>
                  <div className="font-medium text-foreground text-sm mb-1">{h.label}</div>
                  <div className="text-sm text-muted-foreground leading-relaxed">{h.desc}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
