import { Code, Lightbulb, Sparkles } from "lucide-react";
import AnimatedTag from "./AnimatedTag";

const HeroSection = () => {
  const tags = [
    { text: "Software Techie", icon: <Code className="w-5 h-5" />, delay: 0.8 },
    { text: "Problem Solver", icon: <Lightbulb className="w-5 h-5" />, delay: 1.0 },
    { text: "Anime Buff", icon: <Sparkles className="w-5 h-5" />, delay: 1.2 },
  ];

  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-20 h-20 border-2 border-foreground/20 animate-float" />
        <div className="absolute top-40 right-20 w-12 h-12 bg-foreground/10 animate-float" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-40 left-1/4 w-16 h-16 border-2 border-foreground/20 rotate-45 animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute bottom-20 right-1/3 w-8 h-8 bg-foreground/10 animate-float" style={{ animationDelay: '0.5s' }} />
      </div>

      {/* Main content */}
      <div className="text-center z-10 max-w-4xl">
        {/* Greeting */}
        <p className="font-mono text-muted-foreground text-lg md:text-xl mb-4 opacity-0 animate-slide-up">
          Hello, I'm
        </p>

        {/* Name */}
        <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tight mb-6 opacity-0 animate-slide-up stagger-2">
          <span className="inline-block animate-glitch">Vamshi Lagishetty</span>
        </h1>

        {/* Tagline with typewriter effect */}
        <div className="h-8 md:h-10 mb-12 flex items-center justify-center">
          <p className="font-mono text-lg md:text-xl text-muted-foreground animate-typewriter max-w-fit">
            Code. Break. Fix. Improve. Repeat.
          </p>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-4 justify-center">
          {tags.map((tag) => (
            <AnimatedTag
              key={tag.text}
              text={tag.text}
              icon={tag.icon}
              delay={tag.delay}
            />
          ))}
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 opacity-0 animate-fade-in" style={{ animationDelay: '2s' }}>
          <div className="w-6 h-10 border-2 border-foreground rounded-full flex justify-center pt-2">
            <div className="w-1.5 h-3 bg-foreground rounded-full animate-bounce" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
