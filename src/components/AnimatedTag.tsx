import { cn } from "@/lib/utils";

interface AnimatedTagProps {
  text: string;
  icon?: React.ReactNode;
  delay?: number;
  className?: string;
}

const AnimatedTag = ({ text, icon, delay = 0, className }: AnimatedTagProps) => {
  return (
    <div
      className={cn(
        "inline-flex items-center gap-2 px-4 py-2 border-2 border-foreground bg-background",
        "font-mono text-sm md:text-base font-medium",
        "opacity-0 animate-bounce-in hover-lift cursor-default",
        "shadow-sm hover:shadow-md transition-shadow",
        className
      )}
      style={{ animationDelay: `${delay}s` }}
    >
      {icon && <span className="text-lg">{icon}</span>}
      <span>{text}</span>
    </div>
  );
};

export default AnimatedTag;
