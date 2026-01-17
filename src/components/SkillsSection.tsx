import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useRef, useState, useEffect, useCallback } from "react";
import { cn } from "@/lib/utils";
import { Code, Globe, Wrench, Database, Cloud } from "lucide-react";
import {
  SiPython,
  SiCplusplus,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiPostgresql,
  SiMysql,
  SiDocker,
  SiGit,
  SiGithub,
  SiTailwindcss,
  SiBootstrap,
  SiHtml5,
  SiCss3,
  SiVercel,
  SiRailway,
  SiGooglecolab,
} from "react-icons/si";

// Skills organized by category
const skillCategories = [
  {
    title: "Languages",
    icon: Code,
    skills: [
      { name: "Python", icon: SiPython, color: "#3776AB" },
      { name: "C++", icon: SiCplusplus, color: "#00599C" },
      { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
      { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
    ],
  },
  {
    title: "Web Development",
    icon: Globe,
    skills: [
      { name: "React", icon: SiReact, color: "#61DAFB" },
      { name: "Next.js", icon: SiNextdotjs, color: "#888888" },
      { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
      { name: "Express", icon: SiExpress, color: "#888888" },
      { name: "HTML5", icon: SiHtml5, color: "#E34F26" },
      { name: "CSS3", icon: SiCss3, color: "#1572B6" },
      { name: "Tailwind", icon: SiTailwindcss, color: "#06B6D4" },
      { name: "Bootstrap", icon: SiBootstrap, color: "#7952B3" },
    ],
  },
  {
    title: "Databases",
    icon: Database,
    skills: [
      { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
      { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
      { name: "MySQL", icon: SiMysql, color: "#4479A1" },
    ],
  },
  {
    title: "Tools & DevOps",
    icon: Wrench,
    skills: [
      { name: "Git", icon: SiGit, color: "#F05032" },
      { name: "GitHub", icon: SiGithub, color: "#888888" },
      { name: "Docker", icon: SiDocker, color: "#2496ED" },
      { name: "Colab", icon: SiGooglecolab, color: "#F9AB00" },
    ],
  },
  {
    title: "Cloud & Hosting",
    icon: Cloud,
    skills: [
      { name: "Vercel", icon: SiVercel, color: "#888888" },
      { name: "Railway", icon: SiRailway, color: "#9333EA" },
    ],
  },
];

// Flatten all skills for floating icons
const allSkills = skillCategories.flatMap((cat) => cat.skills);

// Floating icon state
interface FloatingIcon {
  id: number;
  skill: typeof allSkills[0];
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
}

// Animated Skill Card component (matching hero tag style)
const SkillInfoCard = ({
  category,
  delay,
  isVisible,
  index,
}: {
  category: typeof skillCategories[0];
  delay: number;
  isVisible: boolean;
  index: number;
}) => {
  const Icon = category.icon;
  const [isClicked, setIsClicked] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (isVisible && !hasAnimated) {
      const timer = setTimeout(() => {
        setHasAnimated(true);
      }, delay * 1000);
      return () => clearTimeout(timer);
    }
  }, [isVisible, delay, hasAnimated]);

  const handleClick = () => {
    setIsClicked(true);
    setTimeout(() => setIsClicked(false), 600);
  };

  return (
    <div
      onClick={handleClick}
      className={cn(
        "inline-flex flex-col gap-3 px-4 sm:px-5 py-4 border-2 border-foreground bg-background",
        "font-mono text-sm cursor-pointer",
        "shadow-sm hover:shadow-lg transition-all duration-500",
        "w-full sm:w-auto",
        // Initial state
        !hasAnimated && "opacity-0 translate-y-8 scale-95 rotate-1",
        // Animated state
        hasAnimated && "opacity-100 translate-y-0 scale-100 rotate-0",
        // Click animation
        isClicked && "scale-110 border-primary shadow-xl -translate-y-2"
      )}
      style={{ 
        transitionDelay: hasAnimated ? '0ms' : `${delay * 1000}ms`,
        transitionProperty: 'all',
        transitionDuration: '600ms',
        transitionTimingFunction: 'cubic-bezier(0.34, 1.56, 0.64, 1)'
      }}
    >
      <div className={cn(
        "flex items-center gap-2 transition-transform duration-300",
        isClicked && "scale-105"
      )}>
        <Icon className={cn(
          "w-5 h-5 text-primary transition-all duration-300",
          isClicked && "rotate-12 scale-125"
        )} />
        <span className="font-semibold text-base">{category.title}</span>
      </div>
      <div className="flex flex-wrap gap-2">
        {category.skills.map((skill, skillIndex) => {
          const SkillIcon = skill.icon;
          return (
            <span
              key={skill.name}
              className={cn(
                "inline-flex items-center gap-1.5 px-2 py-1 bg-secondary/80 border border-foreground/10 text-xs",
                "transition-all duration-300",
                hasAnimated && "hover:scale-110 hover:bg-secondary"
              )}
              style={{
                transitionDelay: hasAnimated ? `${skillIndex * 50}ms` : '0ms'
              }}
              title={skill.name}
            >
              <SkillIcon size={14} style={{ color: skill.color }} />
              <span className="text-muted-foreground">{skill.name}</span>
            </span>
          );
        })}
      </div>
    </div>
  );
};

// Floating icons background with auto-movement
const FloatingIconsBackground = ({ containerRef }: { containerRef: React.RefObject<HTMLDivElement> }) => {
  const [icons, setIcons] = useState<FloatingIcon[]>([]);
  const iconsRef = useRef<FloatingIcon[]>([]);
  const animationRef = useRef<number>();

  // Initialize icons
  useEffect(() => {
    if (!containerRef.current) return;
    
    const rect = containerRef.current.getBoundingClientRect();
    const initialIcons: FloatingIcon[] = [];
    
    // Create icons with varied sizes
    const duplicatedSkills = [...allSkills, ...allSkills.slice(0, 8)];
    
    duplicatedSkills.forEach((skill, i) => {
      const size = 28 + Math.random() * 20;
      initialIcons.push({
        id: i,
        skill,
        x: size + Math.random() * (rect.width - size * 2),
        y: size + Math.random() * (rect.height - size * 2),
        vx: (Math.random() - 0.5) * 1.2,
        vy: (Math.random() - 0.5) * 1.2,
        size,
      });
    });
    
    iconsRef.current = initialIcons;
    setIcons(initialIcons);
  }, [containerRef]);

  // Animation loop
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const bounce = 0.8;

    const animate = () => {
      const rect = container.getBoundingClientRect();

      iconsRef.current.forEach((icon, i) => {
        // Apply velocity
        icon.x += icon.vx;
        icon.y += icon.vy;

        // Bounce off walls
        const halfSize = icon.size / 2;
        if (icon.x < halfSize) {
          icon.x = halfSize;
          icon.vx = Math.abs(icon.vx) * bounce;
        }
        if (icon.x > rect.width - halfSize) {
          icon.x = rect.width - halfSize;
          icon.vx = -Math.abs(icon.vx) * bounce;
        }
        if (icon.y < halfSize) {
          icon.y = halfSize;
          icon.vy = Math.abs(icon.vy) * bounce;
        }
        if (icon.y > rect.height - halfSize) {
          icon.y = rect.height - halfSize;
          icon.vy = -Math.abs(icon.vy) * bounce;
        }

        // Collision with other icons
        iconsRef.current.forEach((other, j) => {
          if (i >= j) return;
          const dx = other.x - icon.x;
          const dy = other.y - icon.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const minDist = (icon.size + other.size) / 2;

          if (dist < minDist && dist > 0) {
            const angle = Math.atan2(dy, dx);
            const overlap = minDist - dist;

            // Push apart
            const pushX = Math.cos(angle) * overlap * 0.5;
            const pushY = Math.sin(angle) * overlap * 0.5;

            icon.x -= pushX;
            icon.y -= pushY;
            other.x += pushX;
            other.y += pushY;

            // Exchange velocity
            const tempVx = icon.vx;
            const tempVy = icon.vy;
            icon.vx = other.vx * 0.95;
            icon.vy = other.vy * 0.95;
            other.vx = tempVx * 0.95;
            other.vy = tempVy * 0.95;
          }
        });
      });

      setIcons([...iconsRef.current]);
      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [containerRef]);

  return (
    <>
      {icons.map((icon) => {
        const Icon = icon.skill.icon;
        return (
          <div
            key={icon.id}
            className="absolute pointer-events-none select-none"
            style={{
              left: icon.x - icon.size / 2,
              top: icon.y - icon.size / 2,
              width: icon.size,
              height: icon.size,
            }}
          >
            <div
              className="w-full h-full flex items-center justify-center rounded-full bg-secondary/20 backdrop-blur-[2px] border border-foreground/5"
              style={{ 
                boxShadow: `0 0 15px ${icon.skill.color}15`
              }}
            >
              <Icon
                size={icon.size * 0.5}
                style={{ color: icon.skill.color }}
                className="opacity-50"
              />
            </div>
          </div>
        );
      })}
    </>
  );
};

const SkillsSection = () => {
  const { ref: sectionRef, isVisible } = useScrollAnimation({ threshold: 0.1 });
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section id="skills" className="py-20 md:py-32 relative overflow-hidden min-h-screen">
      {/* Floating icons background */}
      <div
        ref={containerRef}
        className="absolute inset-0 bg-secondary/5"
      >
        <FloatingIconsBackground containerRef={containerRef} />
      </div>

      {/* Foreground content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div
          ref={sectionRef}
          className={cn(
            "mb-16 transition-all duration-700",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          )}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
            Skills
          </h2>
          <div 
            className={cn(
              "h-1 bg-foreground mt-4 transition-all duration-700 delay-300",
              isVisible ? "w-24" : "w-0"
            )} 
          />
        </div>

        {/* Skill Info Cards */}
        <div className="flex flex-wrap gap-4 sm:gap-6 justify-center">
          {skillCategories.map((category, index) => (
            <SkillInfoCard
              key={category.title}
              category={category}
              delay={0.3 + index * 0.15}
              isVisible={isVisible}
              index={index}
            />
          ))}
        </div>

        {/* Summary badge */}
        <div
          className="mt-12 flex justify-center opacity-0 animate-bounce-in"
          style={{ animationDelay: "1.2s", animationFillMode: "forwards" }}
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 border-2 border-primary bg-primary/5 font-mono shadow-sm">
            <span className="text-3xl font-bold text-primary">{allSkills.length}+</span>
            <span className="text-muted-foreground text-sm">Technologies & Tools</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
