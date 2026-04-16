import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { profile } from "@/lib/data";
import { Mail, MapPin, Github, Linkedin, BookOpen, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const contactLinks = [
  { icon: Mail, label: "Email", value: "sadikyasineftee@gmail.com", href: "mailto:sadikyasineftee@gmail.com" },
  { icon: Phone, label: "Phone", value: "+880 1913-718717", href: "tel:+8801913718717" },
  { icon: MapPin, label: "Location", value: "Dhaka-1229, Bangladesh", href: null },
  { icon: Github, label: "GitHub", value: "Sadik-Yasin-Eftee", href: "https://github.com/Sadik-Yasin-Eftee" },
  { icon: Linkedin, label: "LinkedIn", value: "sadik-yasin", href: "https://linkedin.com/in/sadik-yasin" },
  { icon: BookOpen, label: "Google Scholar", value: "Sadik Yasin Eftee", href: "https://scholar.google.com/citations?user=oZahYhMAAAAJ" },
];

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.15 });

  return (
    <section id="contact" ref={ref} className="py-24 border-t border-border">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <span className="font-mono-custom text-xs text-primary uppercase tracking-widest mb-3 block">Contact</span>
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground tracking-tight">
            Let's Connect
          </h2>
          <p className="text-muted-foreground mt-3 max-w-xl">
            Interested in research collaboration, internship opportunities, or just want to chat about NLP or AI? I'd love to hear from you.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10">
          {/* Contact links */}
          <motion.div
            className="space-y-3"
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            {contactLinks.map((link, i) => (
              <motion.div
                key={link.label}
                initial={{ opacity: 0, y: 10 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.15 + i * 0.07 }}
              >
                {link.href ? (
                  <a
                    href={link.href}
                    target={link.href.startsWith("http") ? "_blank" : undefined}
                    rel={link.href.startsWith("http") ? "noreferrer" : undefined}
                    className="flex items-center gap-4 p-4 rounded-xl bg-card border border-border hover:border-primary/40 transition-all group"
                  >
                    <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <link.icon size={15} className="text-primary" />
                    </div>
                    <div className="min-w-0">
                      <div className="text-xs text-muted-foreground">{link.label}</div>
                      <div className="text-sm font-medium text-foreground truncate group-hover:text-primary transition-colors">
                        {link.value}
                      </div>
                    </div>
                  </a>
                ) : (
                  <div className="flex items-center gap-4 p-4 rounded-xl bg-card border border-border">
                    <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <link.icon size={15} className="text-primary" />
                    </div>
                    <div>
                      <div className="text-xs text-muted-foreground">{link.label}</div>
                      <div className="text-sm font-medium text-foreground">{link.value}</div>
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
          </motion.div>

          {/* Quick message prompt */}
          <motion.div
            className="rounded-2xl bg-card border border-border p-8 flex flex-col justify-between"
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-3">Open to Opportunities</h3>
              <div className="space-y-3 text-sm text-muted-foreground leading-relaxed">
                <p>
                  I'm actively looking for <span className="text-foreground font-medium">research collaborations</span> in NLP, HCI, or AI.
                </p>
                <p>
                  Also open to <span className="text-foreground font-medium">full-time roles</span> in product management or machine learning engineering.
                </p>
                <p>
                  Feel free to reach out — I usually respond within 24–48 hours.
                </p>
              </div>
            </div>

            <div className="mt-8 space-y-3">
              <a href="mailto:sadikyasineftee@gmail.com">
                <Button className="w-full gap-2 font-medium">
                  <Mail size={14} />
                  Send an Email
                </Button>
              </a>
              <a href="https://linkedin.com/in/sadik-yasin" target="_blank" rel="noreferrer">
                <Button variant="outline" className="w-full gap-2 font-medium">
                  <Linkedin size={14} />
                  Connect on LinkedIn
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
