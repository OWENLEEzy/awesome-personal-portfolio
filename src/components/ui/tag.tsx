import { cn } from "@/lib/utils";

interface TagProps {
  children: React.ReactNode;
  variant?: "default" | "primary" | "secondary" | "outline";
  className?: string;
}

export function Tag({ children, variant = "default", className }: TagProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center px-2.5 py-0.5 text-xs font-medium rounded-md transition-colors",
        variant === "default" && "bg-muted text-muted-foreground",
        variant === "primary" && "bg-accent text-accent-foreground",
        variant === "secondary" && "bg-secondary text-secondary-foreground",
        variant === "outline" && "border border-border bg-background text-foreground hover:bg-muted/50",
        className
      )}
    >
      {children}
    </span>
  );
}
