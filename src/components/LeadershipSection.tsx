import { Users, Heart, Globe, Quote } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const clubs = [
  {
    name: "VJSV — Telugu Literature & Cultural Club",
    subtitle: "VNR VJIET",
    role: "Core Member · Writer · Event Organizer",
    icon: Users,
    content:
      "I wasn't just part of the club — I helped run it. I wrote original Telugu poems and literary pieces, shaped the creative tone of events, and helped execute college-wide cultural programs. I also coordinated guest sessions with nationally respected literary figures like Thanikella Bharani and Garikapati Narasimha Rao, handling everything from content flow to on-stage logistics.",
    impact: "This taught me how to manage people, deadlines, and creative quality — not just ideas.",
  },
  {
    name: "Student Force (VJSF)",
    subtitle: "Societal Impact Club",
    role: "Volunteer · Organizer",
    icon: Heart,
    content:
      "I worked on real, on-ground social initiatives — not just awareness posts. I helped coordinate outreach programs, worked with teams in the field, and supported NGO-style activities aimed at community welfare.",
    impact:
      "This forced me out of my comfort zone and into real-world execution. It shows I can function outside a laptop and inside messy reality.",
  },
  {
    name: "IUCEE Student Chapter",
    subtitle: "VNR VJIET",
    role: "Active Member",
    icon: Globe,
    content:
      "I was part of the student chapter of Indo Universal Collaboration for Engineering Education (IUCEE), engaging in programs focused on global engineering education, innovation exposure, and international collaboration. I interacted with ideas, speakers, and initiatives that go far beyond the standard college syllabus.",
    impact: "This sharpened my global perspective on technology and education.",
  },
];

const LeadershipSection = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation();

  return (
    <section id="leadership" className="py-20 md:py-32 bg-background relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div
          ref={headerRef}
          className={`mb-16 md:mb-20 transition-all duration-700 ${
            headerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
            Leadership & Campus
          </h2>
          <div 
            className={`h-1 bg-foreground mt-4 transition-all duration-700 delay-300 ${
              headerVisible ? "w-24" : "w-0"
            }`} 
          />
        </div>

        {/* Clubs */}
        <div className="space-y-20 lg:space-y-28">
          {clubs.map((club, index) => (
            <ClubRow key={club.name} club={club} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

interface ClubRowProps {
  club: (typeof clubs)[0];
  index: number;
}

const ClubRow = ({ club, index }: ClubRowProps) => {
  const { ref, isVisible } = useScrollAnimation();
  const Icon = club.icon;

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
      }`}
      style={{ transitionDelay: `${index * 0.1}s` }}
    >
      <div>
        {/* Header Row */}
        <div className="flex items-start gap-4 mb-6">
          <div className="p-3 border-2 border-foreground shrink-0">
            <Icon className="w-6 h-6" strokeWidth={1.5} />
          </div>
          <div>
            <span className="font-mono text-sm text-muted-foreground block mb-1">
              {club.subtitle}
            </span>
            <h3 className="text-2xl md:text-3xl font-bold tracking-tight">
              {club.name}
            </h3>
          </div>
        </div>

        {/* Role */}
        <div className="mb-6 ml-[60px] md:ml-[68px]">
          <span className="font-mono text-sm border-2 border-foreground px-3 py-1.5 inline-block bg-muted/50">
            {club.role}
          </span>
        </div>

        {/* Content */}
        <p className="text-muted-foreground leading-relaxed text-lg ml-[60px] md:ml-[68px] mb-6">
          {club.content}
        </p>

        {/* Impact Quote */}
        <div className="ml-[60px] md:ml-[68px] relative pl-5 py-2 border-l-4 border-foreground">
          <Quote className="absolute -left-3 -top-1 w-5 h-5 bg-background text-foreground" />
          <p className="font-medium text-lg italic text-foreground/90">
            {club.impact}
          </p>
        </div>
      </div>

      {/* Divider */}
      {index < clubs.length - 1 && (
        <div className="mt-16 lg:mt-20 flex items-center gap-4 max-w-4xl">
          <div className="h-px bg-foreground/20 flex-1" />
          <div className="w-1.5 h-1.5 bg-foreground rotate-45" />
          <div className="h-px bg-foreground/20 flex-1" />
        </div>
      )}
    </div>
  );
};

export default LeadershipSection;
