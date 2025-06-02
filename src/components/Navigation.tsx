
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, Github, Linkedin, Mail } from "lucide-react";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { href: "#about", label: "About" },
    { href: "#projects", label: "Projects" },
    { href: "#publications", label: "Research" },
    { href: "#experience", label: "Experience" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-background/80 backdrop-blur-lg border-b border-white/10"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="font-bold text-xl gradient-text">
              Sadik Yasin Eftee
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-foreground/80 hover:text-icy-blue-400 transition-colors duration-200 font-light tracking-tight"
                >
                  {item.label}
                </a>
              ))}
            </div>

            <div className="hidden md:flex items-center space-x-4">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground/60 hover:text-icy-blue-400 transition-colors"
              >
                <Github size={20} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground/60 hover:text-icy-blue-400 transition-colors"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="mailto:contact@sadik.dev"
                className="text-foreground/60 hover:text-icy-blue-400 transition-colors"
              >
                <Mail size={20} />
              </a>
            </div>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsMobileMenuOpen(true)}
            >
              <Menu size={24} />
            </Button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          <div
            className="absolute inset-0 bg-background/80 backdrop-blur-sm"
            onClick={() => setIsMobileMenuOpen(false)}
          />
          <div className="absolute right-0 top-0 h-full w-80 bg-charcoal-900/95 backdrop-blur-lg border-l border-white/10 p-6">
            <div className="flex flex-col space-y-6 mt-16">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-xl font-light text-foreground/80 hover:text-icy-blue-400 transition-colors"
                >
                  {item.label}
                </a>
              ))}
              <div className="flex space-x-6 pt-8">
                <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                  <Github size={24} className="text-foreground/60 hover:text-icy-blue-400 transition-colors" />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                  <Linkedin size={24} className="text-foreground/60 hover:text-icy-blue-400 transition-colors" />
                </a>
                <a href="mailto:contact@sadik.dev">
                  <Mail size={24} className="text-foreground/60 hover:text-icy-blue-400 transition-colors" />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navigation;
