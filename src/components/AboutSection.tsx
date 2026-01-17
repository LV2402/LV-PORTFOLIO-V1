import { User, MapPin, GraduationCap } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { cn } from "@/lib/utils";
import profilePhoto from "@/assets/profile-photo.jpeg";

const AboutSection = () => {
  const headerAnim = useScrollAnimation({ threshold: 0.2 });
  const textAnim = useScrollAnimation({ threshold: 0.2 });
  const cardsAnim = useScrollAnimation({ threshold: 0.2 });
  const photoAnim = useScrollAnimation({ threshold: 0.2 });
  

  return (
    <section id="about" className="min-h-screen py-20 md:py-32 border-t-2 border-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div 
          ref={headerAnim.ref}
          className={cn(
            "mb-16 transition-all duration-700",
            headerAnim.isVisible 
              ? "opacity-100 translate-y-0" 
              : "opacity-0 translate-y-10"
          )}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
            About Me
          </h2>
          <div 
            className={cn(
              "h-1 bg-foreground mt-4 transition-all duration-700 delay-300",
              headerAnim.isVisible ? "w-24" : "w-0"
            )} 
          />
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-start max-w-5xl mx-auto">
          {/* Text Content */}
          <div className="space-y-6">
            <div
              ref={textAnim.ref}
              className={cn(
                "space-y-6 transition-all duration-700 delay-200",
                textAnim.isVisible 
                  ? "opacity-100 translate-x-0" 
                  : "opacity-0 -translate-x-10"
              )}
            >
              <p className="text-lg leading-relaxed text-muted-foreground">
                Hey there! I'm a passionate <span className="text-foreground font-medium">software developer</span> who 
                loves turning complex problems into elegant solutions. When I'm not coding, you'll find me 
                binge-watching the latest anime or exploring new tech stacks.
              </p>
              
              <p className="text-lg leading-relaxed text-muted-foreground">
                I believe in writing <span className="text-foreground font-medium">clean, maintainable code</span> and 
                building products that make a real difference. My journey in tech started with curiosity 
                and has evolved into a deep passion for creating impactful software.
              </p>

              <p className="text-lg leading-relaxed text-muted-foreground">
                Currently focused on full-stack development, cloud technologies, and 
                contributing to <span className="text-foreground font-medium">open source projects</span>.
              </p>
            </div>

            {/* Info Cards */}
            <div 
              ref={cardsAnim.ref}
              className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6"
            >
              {[
                { icon: User, label: "Role", value: "Student", delay: 0.4 },
                { icon: MapPin, label: "Location", value: "VNR VJIET", delay: 0.5 },
                { icon: GraduationCap, label: "CGPA", value: "8.7", delay: 0.6 },
              ].map((card) => (
                <div 
                  key={card.label}
                  className={cn(
                    "p-4 border-2 border-foreground hover-lift opacity-0",
                    cardsAnim.isVisible && "animate-bounce-in"
                  )}
                  style={{ 
                    animationDelay: `${card.delay}s`,
                    animationFillMode: "forwards"
                  }}
                >
                  <card.icon className="w-5 h-5 mb-2" />
                  <p className="font-mono text-sm text-muted-foreground">{card.label}</p>
                  <p className="font-medium">{card.value}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Visual Element */}
          <div 
            ref={photoAnim.ref}
            className="flex justify-center md:justify-end"
          >
            <div 
              className={cn(
                "w-56 sm:w-64 md:w-72 aspect-[3/4] border-2 border-foreground p-1.5 relative transition-all duration-700 ease-out",
                photoAnim.isVisible 
                  ? "opacity-100 translate-y-0 rotate-0" 
                  : "opacity-0 -translate-y-20 -rotate-6"
              )}
              style={{ transitionDelay: "0.3s" }}
            >
              {/* Decorative offset border */}
              <div 
                className={cn(
                  "absolute inset-0 border-2 border-foreground -z-10 bg-background transition-all duration-500",
                  photoAnim.isVisible 
                    ? "translate-x-3 translate-y-3" 
                    : "translate-x-0 translate-y-0"
                )}
                style={{ transitionDelay: "0.5s" }}
              />
              
              {/* Profile photo */}
              <img 
                src={profilePhoto} 
                alt="Vamshi Lagishetty"
                className="w-full h-full object-cover object-top"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
