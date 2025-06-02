
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Github, Linkedin, Mail } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-6 bg-charcoal-900/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light tracking-tight mb-6">
            Let's <span className="gradient-text">Connect</span>
          </h2>
          <p className="text-xl font-light text-foreground/70 max-w-2xl mx-auto">
            Interested in collaboration, research opportunities, or just want to chat about AI? 
            I'd love to hear from you.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div className="glass-card p-8 rounded-2xl">
            <h3 className="text-2xl font-medium mb-6">Send a Message</h3>
            <form className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <Input
                  placeholder="First Name"
                  className="bg-charcoal-800/50 border-white/10 focus:border-icy-blue-400/50"
                />
                <Input
                  placeholder="Last Name"
                  className="bg-charcoal-800/50 border-white/10 focus:border-icy-blue-400/50"
                />
              </div>
              <Input
                type="email"
                placeholder="Email Address"
                className="bg-charcoal-800/50 border-white/10 focus:border-icy-blue-400/50"
              />
              <Input
                placeholder="Subject"
                className="bg-charcoal-800/50 border-white/10 focus:border-icy-blue-400/50"
              />
              <Textarea
                placeholder="Your message..."
                rows={6}
                className="bg-charcoal-800/50 border-white/10 focus:border-icy-blue-400/50 resize-none"
              />
              <Button className="neumorphic-btn w-full py-6 text-lg font-light">
                Send Message
              </Button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div className="glass-card p-8 rounded-2xl">
              <h3 className="text-2xl font-medium mb-6">Get in Touch</h3>
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-icy-blue-400 to-lavender-400 rounded-lg flex items-center justify-center">
                    <Mail className="w-6 h-6 text-background" />
                  </div>
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-foreground/70 font-light">sadik.eftee@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-icy-blue-400 to-lavender-400 rounded-lg flex items-center justify-center">
                    <Github className="w-6 h-6 text-background" />
                  </div>
                  <div>
                    <p className="font-medium">GitHub</p>
                    <p className="text-foreground/70 font-light">github.com/sadikeftee</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-icy-blue-400 to-lavender-400 rounded-lg flex items-center justify-center">
                    <Linkedin className="w-6 h-6 text-background" />
                  </div>
                  <div>
                    <p className="font-medium">LinkedIn</p>
                    <p className="text-foreground/70 font-light">linkedin.com/in/sadikeftee</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="glass-card p-8 rounded-2xl">
              <h3 className="text-xl font-medium mb-4">Research Interests</h3>
              <div className="flex flex-wrap gap-2">
                {["Large Language Models", "NLP", "HCI", "Ethical AI", "Product Management", "Machine Learning"].map((interest) => (
                  <span
                    key={interest}
                    className="px-3 py-1 bg-gradient-to-r from-icy-blue-400/20 to-lavender-400/20 rounded-full text-sm font-light border border-white/10"
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
