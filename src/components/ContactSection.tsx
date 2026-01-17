import { FileText, Mail, Linkedin, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const ContactSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  const contactLinks = [
    {
      label: "Resume",
      href: "https://drive.google.com/file/d/1KtNSd61lur8KTOu85dptK3FB9tlRmqML/view?usp=sharing",
      icon: FileText,
    },
    {
      label: "Email",
      href: "mailto:vamshilagishetty2006@gmail.com",
      icon: Mail,
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/vamshilagishetty/",
      icon: Linkedin,
    },
    {
      label: "GitHub",
      href: "https://github.com/LV2402",
      icon: Github,
    },
  ];

  return (
    <section id="contact" className="py-20 md:py-32 bg-background">
      <div
        ref={ref}
        className={`container mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="max-w-2xl mx-auto text-center space-y-8">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
            Let's build something real.
          </h2>
          
          <p className="text-lg md:text-xl text-muted-foreground">
            I'm open to internships, freelance work, and meaningful collaborations.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            {contactLinks.map((link) => (
              <Button
                key={link.label}
                variant="outline"
                size="lg"
                asChild
                className="group border-border/50 hover:border-primary hover:bg-primary/5 transition-all duration-300"
              >
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <link.icon className="w-5 h-5 group-hover:text-primary transition-colors" />
                  <span>{link.label}</span>
                </a>
              </Button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
