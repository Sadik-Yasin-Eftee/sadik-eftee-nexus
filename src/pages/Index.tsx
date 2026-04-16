import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Research from "@/components/Research";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Publications from "@/components/Publications";
import Education from "@/components/Education";
import Skills from "@/components/Skills";
import Activities from "@/components/Activities";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => (
  <div className="min-h-screen bg-background text-foreground">
    <Navigation />
    <main>
      <Hero />
      <About />
      <Research />
      <Publications />
      <Experience />
      <Education />
      <Projects />
      <Skills />
      <Activities />
      <Contact />
    </main>
    <Footer />
  </div>
);

export default Index;
