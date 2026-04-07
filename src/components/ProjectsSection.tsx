import { useState } from "react";
import { cn } from "@/lib/utils";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { ExternalLink, Github, ChevronRight, Lightbulb, Wrench, Zap } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

const projects = [
  {
    title: "Interview Trainer",
    subtitle: "AI Mock Interview & Feedback Platform",
    live: "https://interviewtrainer-one.vercel.app",
    github: "https://github.com/vnr-ibt-july-2025/interviewtrainer/tree/main/web-cloud",
    techStack: ["React", "Node.js", "Express", "MongoDB", "Supabase", "JWT", "OAuth"],
    problem: "Job seekers lack realistic interview practice and structured feedback based on their resume and performance.",
    solution: "A full-stack platform that simulates interview scenarios, generates questions from resumes, and provides automated feedback using AI.",
    flow: "User uploads resume → AI generates questions → User responds → Backend processes responses → AI evaluates → Feedback and analytics displayed",
    highlights: [
      "Built full-stack application with React and Express",
      "Integrated AI services for question generation and feedback",
      "Developed 30+ REST APIs with authentication and session handling",
      "Handled speech-to-text transcription and response processing",
      "Designed backend for interview sessions and analytics"
    ],
    badge: "🚀 AI System"
  },
  {
    title: "Vendora",
    subtitle: "Product Inventory Management Platform",
    live: "https://vendora-rose.vercel.app",
    github: "https://github.com/LV2402/Vendora",
    techStack: ["React", "Node.js", "Express", "MongoDB"],
    problem: "Small vendors track inventory manually, leading to errors, poor visibility, and inefficient management.",
    solution: "A full-stack system for managing products, stock status, and updates from a centralized dashboard.",
    flow: "Frontend → API → Backend → MongoDB → Inventory updates → UI reflects changes",
    highlights: [
      "Designed MongoDB schemas for product data",
      "Built REST APIs for CRUD operations",
      "Implemented seller-specific data isolation",
      "Connected frontend with backend for real-time updates"
    ],
    badge: "💼 Business Workflow"
  },
  {
    title: "VJSV Club Website",
    subtitle: "Official Literary Club Platform",
    live: "https://www.vjsahithivanam.in",
    github: "https://github.com/LV2402/VJSV",
    techStack: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
    problem: "The club had no centralized digital presence for events, writings, and announcements.",
    solution: "A responsive and animated web platform serving as the official online presence for the club.",
    flow: "User visits → Browses events and content → Smooth navigation → Centralized digital presence",
    highlights: [
      "Built frontend using React and TypeScript",
      "Designed responsive UI using Tailwind CSS",
      "Implemented animations using Framer Motion",
      "Deployed and maintained live website"
    ],
    badge: "🏆 Real Organization"
  },
  {
    title: "Streamify",
    subtitle: "Real-Time Chat and Communication Platform",
    github: "https://github.com/LV2402/Streamify",
    techStack: ["MongoDB", "Express", "React", "Node.js", "JWT", "Stream SDK"],
    problem: "Language learners lack real-time interaction and feedback systems.",
    solution: "A platform enabling users to chat and make video calls for real-time communication.",
    flow: "User signs up → Backend creates identity → Stream connects users → Real-time chat and calls",
    highlights: [
      "Implemented authentication using JWT",
      "Integrated Stream SDK for real-time communication",
      "Managed token generation and validation",
      "Handled user synchronization with external services"
    ],
    badge: "🔴 Real-Time"
  },
  {
    title: "SalesLens",
    subtitle: "Sales Data Analytics System",
    github: "https://github.com/LV2402/SalesLens",
    techStack: ["Python", "Pandas", "Matplotlib", "Seaborn"],
    problem: "Raw sales data lacks insights without proper processing and analysis.",
    solution: "A data processing pipeline that converts CSV data into actionable insights.",
    flow: "CSV → Pandas → Cleaning → Analysis → Visualization → Insights",
    highlights: [
      "Handled missing and inconsistent data",
      "Performed trend and category analysis",
      "Generated visualizations using Matplotlib and Seaborn"
    ],
    badge: "📊 Data"
  },
  {
    title: "Zego",
    subtitle: "Real-Time Collaborative Whiteboard",
    github: "https://github.com/LV2402/Zego",
    techStack: ["React", "ZEGOCLOUD"],
    problem: "Remote collaboration lacks real-time visual interaction tools.",
    solution: "A live whiteboard where users can draw and collaborate simultaneously.",
    flow: "User draws → Real-time sync → All users see updates instantly",
    highlights: [
      "Integrated real-time SDK",
      "Synced user actions across clients",
      "Built low latency interaction system"
    ],
    badge: "⚡ Event Driven"
  },
  {
    title: "YouTube To-Do",
    subtitle: "Content Planning Tool",
    live: "https://youtube-to-do.vercel.app",
    github: "https://github.com/LV2402/YOUTUBE-TO-DO",
    techStack: ["React"],
    problem: "Creators struggle to manage content ideas and production stages.",
    solution: "A task-based tool to manage video workflows from idea to publishing.",
    flow: "User creates tasks → Organizes workflow → Tracks progress → Completes content cycle",
    highlights: [
      "Built task management UI",
      "Designed workflow-focused experience",
      "Managed application state for content tracking"
    ],
    badge: "🎬 Product"
  }
];

type Project = typeof projects[0];

const ProjectsSection = () => {
  const headerAnim = useScrollAnimation({ threshold: 0.2 });
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="py-20 md:py-32 bg-muted/30 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 right-10 w-32 h-32 border-2 border-foreground/10 rotate-12" />
      <div className="absolute bottom-40 left-10 w-24 h-24 border-2 border-foreground/10 -rotate-12" />

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
            Projects
          </h2>
          <div 
            className={cn(
              "h-1 bg-foreground mt-4 transition-all duration-700 delay-300",
              headerAnim.isVisible ? "w-24" : "w-0"
            )} 
          />
          <p className="text-muted-foreground font-mono text-sm max-w-xl mt-4">
            Real products solving real problems — not tutorials or toy apps
          </p>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard 
              key={project.title} 
              project={project} 
              index={index}
              onViewDetails={() => setSelectedProject(project)}
            />
          ))}
        </div>
      </div>

      {/* Project Detail Modal */}
      <ProjectModal 
        project={selectedProject} 
        onClose={() => setSelectedProject(null)} 
      />
    </section>
  );
};

interface ProjectCardProps {
  project: Project;
  index: number;
  onViewDetails: () => void;
}

const ProjectCard = ({ project, index, onViewDetails }: ProjectCardProps) => {
  const cardAnim = useScrollAnimation({ threshold: 0.2 });

  return (
    <div 
      ref={cardAnim.ref}
      className={cn(
        "group border-2 border-foreground bg-background p-5 opacity-0 hover-lift transition-all duration-300 flex flex-col h-full",
        cardAnim.isVisible && "animate-bounce-in"
      )}
      style={{ animationFillMode: "forwards", animationDelay: `${0.1 * (index + 1)}s` }}
    >
      {/* Badge */}
      <span className="self-start px-2 py-1 border border-foreground/50 font-mono text-xs mb-4">
        {project.badge}
      </span>

      {/* Title */}
      <h3 className="text-xl font-bold tracking-tight group-hover:text-primary transition-colors">
        {project.title}
      </h3>
      <p className="text-muted-foreground font-mono text-sm mb-4">
        {project.subtitle}
      </p>

      {/* Tech Stack */}
      <div className="flex flex-wrap gap-1.5 mb-4">
        {project.techStack.slice(0, 3).map((tech) => (
          <span 
            key={tech}
            className="px-2 py-0.5 text-xs font-mono border border-foreground/30 bg-foreground/5"
          >
            {tech}
          </span>
        ))}
        {project.techStack.length > 3 && (
          <span className="px-2 py-0.5 text-xs font-mono text-muted-foreground">
            +{project.techStack.length - 3}
          </span>
        )}
      </div>

      {/* Problem - Brief */}
      <p className="text-sm text-muted-foreground mb-4 flex-grow line-clamp-2">
        {project.problem}
      </p>

      {/* Actions */}
      <div className="mt-auto pt-4 border-t border-foreground/20 space-y-3">
        {/* View Details Button */}
        <button 
          onClick={onViewDetails}
          className="w-full flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-mono border-2 border-foreground bg-foreground text-background hover:bg-transparent hover:text-foreground transition-colors"
        >
          Show what I actually did
          <ChevronRight className="w-4 h-4" />
        </button>

        {/* Links */}
        <div className="flex gap-2">
          {project.live && (
            <a 
              href={project.live} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 px-3 py-2 text-xs font-mono border border-foreground hover:bg-foreground hover:text-background transition-colors"
            >
              <ExternalLink className="w-3 h-3" />
              Live
            </a>
          )}
          <a 
            href={project.github} 
            target="_blank" 
            rel="noopener noreferrer"
            className={cn(
              "flex items-center justify-center gap-2 px-3 py-2 text-xs font-mono border border-foreground hover:bg-foreground hover:text-background transition-colors",
              project.live ? "flex-1" : "w-full"
            )}
          >
            <Github className="w-3 h-3" />
            Code
          </a>
        </div>
      </div>
    </div>
  );
};

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

const ProjectModal = ({ project, onClose }: ProjectModalProps) => {
  if (!project) return null;

  return (
    <Dialog open={!!project} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto border-2 border-foreground bg-background p-0">
        <div className="p-6 md:p-8">
          {/* Header */}
          <DialogHeader className="mb-6">
            <div className="flex items-center gap-3 mb-2">
              <span className="px-2 py-1 border border-foreground/50 font-mono text-xs">
                {project.badge}
              </span>
            </div>
            <DialogTitle className="text-2xl md:text-3xl font-bold tracking-tight">
              {project.title}
            </DialogTitle>
            <p className="text-muted-foreground font-mono text-sm">
              {project.subtitle}
            </p>
          </DialogHeader>

          {/* Tech Stack */}
          <div className="flex flex-wrap gap-2 mb-6">
            {project.techStack.map((tech) => (
              <span 
                key={tech}
                className="px-3 py-1 text-xs font-mono border border-foreground/50 bg-foreground/5"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Problem */}
          <div className="mb-6">
            <div className="flex items-center gap-2 text-sm font-mono text-muted-foreground mb-2">
              <Lightbulb className="w-4 h-4" />
              The Problem
            </div>
            <p className="text-foreground">{project.problem}</p>
          </div>

          {/* Solution */}
          <div className="mb-6">
            <div className="flex items-center gap-2 text-sm font-mono text-muted-foreground mb-2">
              <Wrench className="w-4 h-4" />
              What I Built
            </div>
            <p className="text-foreground">{project.solution}</p>
          </div>

          {/* Flow */}
          <div className="p-4 bg-muted/50 border border-foreground/20 mb-6">
            <div className="flex items-center gap-2 text-xs font-mono text-muted-foreground mb-2">
              <Zap className="w-3 h-3" />
              How it works
            </div>
            <p className="text-sm font-mono text-foreground">{project.flow}</p>
          </div>

          {/* Highlights */}
          <div className="mb-6">
            <p className="text-sm font-mono text-muted-foreground mb-3">
              What I Actually Did
            </p>
            <ul className="space-y-2">
              {project.highlights.map((highlight, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="w-6 h-6 flex-shrink-0 border border-foreground flex items-center justify-center text-xs font-mono">
                    {i + 1}
                  </span>
                  <span className="text-foreground pt-0.5">{highlight}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Links */}
          <div className="flex gap-3 pt-4 border-t border-foreground/20">
            {project.live && (
              <a 
                href={project.live} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 px-4 py-3 text-sm font-mono border-2 border-foreground bg-foreground text-background hover:bg-transparent hover:text-foreground transition-colors"
              >
                <ExternalLink className="w-4 h-4" />
                View Live
              </a>
            )}
            <a 
              href={project.github} 
              target="_blank" 
              rel="noopener noreferrer"
              className={cn(
                "flex items-center justify-center gap-2 px-4 py-3 text-sm font-mono border-2 border-foreground hover:bg-foreground hover:text-background transition-colors",
                project.live ? "flex-1" : "w-full"
              )}
            >
              <Github className="w-4 h-4" />
              View Code
            </a>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProjectsSection;
