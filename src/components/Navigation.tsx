import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { motion, AnimatePresence } from "framer-motion";
import { Moon, Sun, Menu, X, Github, Linkedin, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";

const navItems = [
  { href: "#about", label: "About" },
  { href: "#research", label: "Research" },
  { href: "#publications", label: "Publications" },
  { href: "#experience", label: "Experience" },
  { href: "#education", label: "Education" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => { setMounted(true); }, []);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isDark = resolvedTheme === "dark";

  return (
    <>
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-background/90 backdrop-blur-xl border-b border-border shadow-sm" : "bg-transparent"
        }`}
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
          <a href="#" className="font-display text-base font-semibold text-foreground tracking-tight">
            Sadik<span className="text-primary">.</span>
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors font-medium"
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <a href="https://github.com/Sadik-Yasin-Eftee" target="_blank" rel="noreferrer" className="hidden md:flex text-muted-foreground hover:text-foreground transition-colors p-2">
              <Github size={16} />
            </a>
            <a href="https://linkedin.com/in/sadik-yasin" target="_blank" rel="noreferrer" className="hidden md:flex text-muted-foreground hover:text-foreground transition-colors p-2">
              <Linkedin size={16} />
            </a>
            <a href="https://scholar.google.com/citations?user=oZahYhMAAAAJ" target="_blank" rel="noreferrer" className="hidden md:flex text-muted-foreground hover:text-foreground transition-colors p-2">
              <BookOpen size={16} />
            </a>
            {mounted && (
              <Button
                variant="ghost"
                size="icon"
                className="h-8 w-8 text-muted-foreground hover:text-foreground"
                onClick={() => setTheme(isDark ? "light" : "dark")}
                aria-label="Toggle theme"
              >
                {isDark ? <Sun size={15} /> : <Moon size={15} />}
              </Button>
            )}
            <Button variant="ghost" size="icon" className="md:hidden h-8 w-8" onClick={() => setMobileOpen(true)}>
              <Menu size={18} />
            </Button>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="fixed inset-0 z-50 md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="absolute inset-0 bg-background/95 backdrop-blur-xl" onClick={() => setMobileOpen(false)} />
            <motion.div
              className="absolute right-0 top-0 h-full w-72 bg-background border-l border-border p-6 flex flex-col"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
            >
              <div className="flex justify-end mb-8">
                <Button variant="ghost" size="icon" onClick={() => setMobileOpen(false)}>
                  <X size={18} />
                </Button>
              </div>
              <div className="flex flex-col gap-1">
                {navItems.map((item, i) => (
                  <motion.a
                    key={item.href}
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className="text-lg font-medium text-foreground py-3 border-b border-border/50 hover:text-primary transition-colors"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                  >
                    {item.label}
                  </motion.a>
                ))}
              </div>
              <div className="mt-auto flex gap-4 pt-8">
                <a href="https://github.com/Sadik-Yasin-Eftee" target="_blank" rel="noreferrer"><Github size={20} className="text-muted-foreground hover:text-foreground" /></a>
                <a href="https://linkedin.com/in/sadik-yasin" target="_blank" rel="noreferrer"><Linkedin size={20} className="text-muted-foreground hover:text-foreground" /></a>
                <a href="https://scholar.google.com/citations?user=oZahYhMAAAAJ" target="_blank" rel="noreferrer"><BookOpen size={20} className="text-muted-foreground hover:text-foreground" /></a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
