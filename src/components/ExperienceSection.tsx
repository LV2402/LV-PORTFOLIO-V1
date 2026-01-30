import { cn } from "@/lib/utils";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Briefcase, Calendar, Code } from "lucide-react";

const experiences = [
  // {
  //   role: "Technical Lead",
  //   company: "VISWAM.AI",
  //   subtitle: "IIIT Hyderabad & Swecha Collaboration",
  //   period: "May 2025 – July 2025",
  //   techStack: ["Python", "Data Engineering", "AI/ML Pipelines", "Open-Source Systems"],
  //   description: "A national AI initiative launched by IIIT Hyderabad and Swecha, supported by Meta, focused on building AI solutions for the Global South.",
  //   highlights: [
  //     "Led and mentored interns working on AI-driven systems",
  //     "Solved technical blockers across datasets, pipelines, and tools",
  //     "Reviewed code and guided correct implementation",
  //     "Coordinated technical execution for program delivery",
  //     "Contributed to open-source outputs on Swecha's platform"
  //   ]
  // },
  {
    role: "Full-Stack Developer Intern",
    company: "Opportive",
    subtitle: "Startup Environment",
    period: "July 2025 – August 2025",
    techStack: ["React", "Node.js", "MongoDB", "REST APIs"],
    description: "Startup environment with real users and production deadlines.",
    highlights: [
      "Built frontend features in React",
      "Developed backend APIs in Node.js",
      "Integrated MongoDB for data storage",
      "Worked in short sprints with production deadlines"
    ]
  }
  // {
  //   role: "Full-Stack Developer Intern",
  //   company: "Tutly.in",
  //   subtitle: "Longest-running role",
  //   period: "May 2024 – Present",
  //   techStack: ["React", "Node.js", "PostgreSQL", "Prisma", "Redis", "JWT", "GitHub Actions"],
  //   description: "Consistent contributions to a production platform with real users.",
  //   highlights: [
  //     "Built production React dashboards",
  //     "Developed Node.js APIs with Prisma & PostgreSQL",
  //     "Implemented authentication, protected routes, and caching",
  //     "Worked with CI/CD, sprint cycles, and code reviews"
  //   ]
  // }
];

const ExperienceSection = () => {
  const headerAnim = useScrollAnimation({ threshold: 0.2 });

  return (
    <section id="experience" className="py-20 md:py-32 bg-background relative overflow-hidden">
      {/* Background grid pattern */}
      <div className="absolute inset-0 opacity-5">
        <div 
          className="absolute inset-0" 
          style={{
            backgroundImage: `repeating-linear-gradient(
              0deg,
              transparent,
              transparent 50px,
              hsl(var(--foreground)) 50px,
              hsl(var(--foreground)) 51px
            ),
            repeating-linear-gradient(
              90deg,
              transparent,
              transparent 50px,
              hsl(var(--foreground)) 50px,
              hsl(var(--foreground)) 51px
            )`
          }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div 
          ref={headerAnim.ref}
          className={cn(
            "mb-16 opacity-0",
            headerAnim.isVisible && "animate-bounce-in"
          )}
          style={{ animationFillMode: "forwards" }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
            Experience
          </h2>
          <div 
            className={cn(
              "h-1 bg-foreground mt-4 transition-all duration-700 delay-300",
              headerAnim.isVisible ? "w-24" : "w-0"
            )} 
          />
          <p className="text-muted-foreground font-mono text-sm max-w-xl mt-4">
            Professional journey building real products with real users
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-foreground/20 transform md:-translate-x-1/2" />

          {experiences.map((exp, index) => (
            <TimelineItem key={index} experience={exp} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

interface TimelineItemProps {
  experience: typeof experiences[0];
  index: number;
}

const TimelineItem = ({ experience, index }: TimelineItemProps) => {
  const itemAnim = useScrollAnimation({ threshold: 0.2 });
  const isEven = index % 2 === 0;

  return (
    <div 
      ref={itemAnim.ref}
      className={cn(
        "relative mb-12 md:mb-16 opacity-0",
        itemAnim.isVisible && "animate-bounce-in"
      )}
      style={{ 
        animationDelay: `${0.2 * index}s`,
        animationFillMode: "forwards"
      }}
    >
      {/* Timeline dot */}
      <div className="absolute left-0 md:left-1/2 w-4 h-4 bg-foreground border-2 border-background transform -translate-x-1/2 z-10" />

      {/* Content */}
      <div className={cn(
        "ml-8 md:ml-0 md:w-[calc(50%-2rem)]",
        isEven ? "md:mr-auto md:pr-8" : "md:ml-auto md:pl-8"
      )}>
        <div className="border-2 border-foreground p-6 bg-background hover-lift transition-all duration-300 group">
          {/* Header */}
          <div className="flex flex-wrap items-start justify-between gap-2 mb-4">
            <div>
              <h3 className="text-xl font-bold tracking-tight group-hover:text-primary transition-colors">
                {experience.role}
              </h3>
              <p className="font-mono text-sm text-muted-foreground">
                {experience.company}
              </p>
              <p className="text-xs text-muted-foreground/70 italic">
                {experience.subtitle}
              </p>
            </div>
            <div className="flex items-center gap-2 text-xs font-mono text-muted-foreground border border-foreground/30 px-2 py-1">
              <Calendar className="w-3 h-3" />
              {experience.period}
            </div>
          </div>

          {/* Tech Stack */}
          <div className="flex flex-wrap gap-2 mb-4">
            {experience.techStack.map((tech) => (
              <span 
                key={tech}
                className="px-2 py-1 text-xs font-mono border border-foreground/50 bg-foreground/5"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Description */}
          <p className="text-sm text-muted-foreground mb-4">
            {experience.description}
          </p>

          {/* Highlights */}
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-xs font-mono text-muted-foreground">
              <Code className="w-3 h-3" />
              Key Contributions
            </div>
            <ul className="space-y-1">
              {experience.highlights.map((highlight, i) => (
                <li 
                  key={i}
                  className="text-sm flex items-start gap-2"
                >
                  <span className="text-foreground/50 mt-1">→</span>
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExperienceSection;
