import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { publications } from "@/lib/data";
import { ExternalLink, FileText } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const statusColor: Record<string, string> = {
  Published: "bg-green-500/10 text-green-600 dark:text-green-400 border-green-500/20",
  Preprint: "bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/20",
  "Under Review": "bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20",
};

// Extract the bare DOI identifier from a full doi.org URL
// e.g. "https://doi.org/10.1145/3764687.3769951" → "10.1145/3764687.3769951"
function parseDoi(doiUrl: string): string {
  return doiUrl.replace(/^https?:\/\/doi\.org\//, "");
}

export default function Publications() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.15 });

  return (
    <section id="publications" ref={ref} className="py-24 border-t border-border">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <span className="font-mono-custom text-xs text-primary uppercase tracking-widest mb-3 block">
            Publications
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground tracking-tight">
            Academic Work
          </h2>
        </motion.div>

        <div className="space-y-5">
          {publications.map((pub, i) => (
            <motion.div
              key={pub.title}
              className="group rounded-2xl bg-card border border-border p-6 md:p-8 hover:border-primary/30 transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              {/* Top row: badges + year */}
              <div className="flex items-center gap-2 flex-wrap mb-4">
                <Badge
                  variant="outline"
                  className={`text-xs font-medium border ${statusColor[pub.status] ?? ""}`}
                >
                  {pub.status}
                </Badge>
                <Badge variant="secondary" className="text-xs font-normal">
                  {pub.type}
                </Badge>
                <span className="text-xs font-mono-custom text-muted-foreground">{pub.year}</span>
              </div>

              {/* Title row */}
              <div className="flex gap-3 mb-3">
                <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <FileText size={14} className="text-primary" />
                </div>
                <h3 className="font-display text-base md:text-lg font-semibold text-foreground leading-snug group-hover:text-primary transition-colors">
                  {pub.title}
                </h3>
              </div>

              {/* Venue */}
              <p className="text-sm text-muted-foreground italic pl-11 mb-4">
                {pub.venue}
              </p>

              {/* DOI row — always visible, full identifier + link */}
              {pub.doi && (
                <div className="pl-11">
                  <a
                    href={pub.doi}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 font-mono-custom text-xs text-primary/80 hover:text-primary underline underline-offset-2 decoration-primary/30 hover:decoration-primary transition-colors break-all"
                  >
                    <ExternalLink size={11} className="flex-shrink-0" />
                    doi.org/{parseDoi(pub.doi)}
                  </a>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
