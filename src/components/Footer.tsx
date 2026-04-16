import { profile } from "@/lib/data";
import { Github, Linkedin, BookOpen, Mail } from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-border py-10">
      <div className="max-w-5xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <span className="font-display font-semibold text-foreground">Sadik<span className="text-primary">.</span></span>
          <span className="text-xs text-muted-foreground font-mono-custom">© {year}</span>
        </div>
        <p className="text-xs text-muted-foreground text-center">
          Built with React · TypeScript · Tailwind · Framer Motion
        </p>
        <div className="flex items-center gap-4">
          <a href={profile.github} target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
            <Github size={16} />
          </a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
            <Linkedin size={16} />
          </a>
          <a href={profile.scholar} target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
            <BookOpen size={16} />
          </a>
          <a href={`mailto:${profile.email}`} className="text-muted-foreground hover:text-foreground transition-colors">
            <Mail size={16} />
          </a>
        </div>
      </div>
    </footer>
  );
}
