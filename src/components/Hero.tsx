import { motion } from "framer-motion";
import { ArrowDown, Download, Mail, Github, Linkedin, BookOpen, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { profile } from "@/lib/data";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center relative overflow-hidden">
      {/* Subtle dot grid background */}
      <div
        className="absolute inset-0 opacity-[0.035] dark:opacity-[0.06]"
        style={{
          backgroundImage: "radial-gradient(circle, currentColor 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />
      {/* Gradient blobs */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-1/4 w-72 h-72 bg-primary/3 rounded-full blur-3xl" />

      <div className="max-w-5xl mx-auto px-6 py-32 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <div className="order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="font-mono-custom text-xs text-primary uppercase tracking-widest mb-4 block">
                Academic Portfolio
              </span>

              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground tracking-tight leading-none mb-4">
                {profile.name.split(" ")[0]}{" "}
                <span className="text-primary">{profile.name.split(" ").slice(1).join(" ")}</span>
              </h1>

              <p className="text-lg text-muted-foreground font-light mb-2">{profile.title}</p>

              <div className="flex items-center gap-1.5 text-sm text-muted-foreground mb-6">
                <MapPin size={13} />
                <span>{profile.location}</span>
              </div>

              <p className="text-base text-muted-foreground leading-relaxed mb-8 max-w-lg">
                {profile.bio}
              </p>

              {/* Stats */}
              <div className="flex gap-8 mb-8">
                {profile.stats.map((s) => (
                  <div key={s.label}>
                    <div className="font-display text-2xl font-bold text-foreground">{s.value}</div>
                    <div className="text-xs text-muted-foreground font-mono-custom uppercase tracking-wide mt-0.5">{s.label}</div>
                  </div>
                ))}
              </div>

              {/* Interests */}
              <div className="flex flex-wrap gap-2 mb-8">
                {profile.interests.slice(0, 4).map((i) => (
                  <Badge key={i} variant="secondary" className="text-xs font-normal">{i}</Badge>
                ))}
              </div>

              {/* CTA buttons */}
              <div className="flex flex-wrap gap-3">
                <Button
                  size="sm"
                  className="gap-2 font-medium"
                  onClick={() => {
                    const a = document.createElement("a");
                    a.href = "/doc/Sadik_Yasin_Eftee_Resume.pdf";
                    a.download = "Sadik_Yasin_Eftee_CV.pdf";
                    a.click();
                  }}
                >
                  <Download size={14} />
                  Download CV
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                  className="gap-2 font-medium"
                  onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                >
                  <Mail size={14} />
                  Contact Me
                </Button>
                <a href={profile.github} target="_blank" rel="noreferrer">
                  <Button size="sm" variant="ghost" className="gap-2 text-muted-foreground">
                    <Github size={14} />
                    GitHub
                  </Button>
                </a>
                <a href={profile.scholar} target="_blank" rel="noreferrer">
                  <Button size="sm" variant="ghost" className="gap-2 text-muted-foreground">
                    <BookOpen size={14} />
                    Scholar
                  </Button>
                </a>
              </div>
            </motion.div>
          </div>

          {/* Profile Image */}
          <motion.div
            className="order-1 lg:order-2 flex justify-center lg:justify-end"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.2, ease: "easeOut" }}
          >
            <div className="relative">
              {/* Glow / ambient ring behind the image */}
              <div className="absolute inset-0 rounded-3xl bg-primary/10 blur-2xl scale-110 opacity-60" />

              {/* Image container — no hard border, masked edges */}
              <div
                className="relative w-64 md:w-80 lg:w-[360px] overflow-hidden rounded-3xl"
                style={{
                  /* mask fades all four edges into transparency so the image
                     bleeds seamlessly into whatever background sits behind it */
                  WebkitMaskImage:
                    "radial-gradient(ellipse 88% 92% at 50% 44%, black 55%, transparent 100%)",
                  maskImage:
                    "radial-gradient(ellipse 88% 92% at 50% 44%, black 55%, transparent 100%)",
                }}
              >
                <motion.img
                  src="/lovable-uploads/profile-hero.png"
                  alt={profile.name}
                  className="w-full h-auto object-cover object-top"
                  style={{
                    /* desaturate the busy coloured background just a touch so
                       only the person pops; the white BG of the photo will
                       dissolve into the site background via the mask above */
                    filter: "saturate(0.85) contrast(1.04)",
                  }}
                  initial={{ scale: 1.06 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 1.1, ease: "easeOut" }}
                />

                {/* bottom colour-wash overlay: blends the white photo BG
                    with the site background colour so there's no hard cut */}
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background:
                      "linear-gradient(to top, hsl(var(--background)) 0%, transparent 38%)",
                  }}
                />
              </div>

              {/* Floating badge */}
              <motion.div
                className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-background/80 backdrop-blur-md border border-border rounded-xl px-3 py-2 shadow-lg whitespace-nowrap"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 }}
              >
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                  <span className="text-xs font-medium text-foreground">Open to research</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 cursor-pointer text-muted-foreground hover:text-foreground transition-colors"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
        >
          <span className="text-xs font-mono-custom">scroll</span>
          <motion.div animate={{ y: [0, 4, 0] }} transition={{ duration: 1.8, repeat: Infinity }}>
            <ArrowDown size={14} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
