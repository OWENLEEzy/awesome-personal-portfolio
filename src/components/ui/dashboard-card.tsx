import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface DashboardCardProps {
  title?: string;
  children: ReactNode;
  className?: string;
  noPadding?: boolean;
}

export function DashboardCard({ title, children, className, noPadding }: DashboardCardProps) {
  return (
    <div
      className={cn(
        "bg-card border border-border rounded-lg card-hover animate-fade-in",
        className
      )}
    >
      {title && (
        <div className="px-5 py-4 border-b border-border">
          <h3 className="font-mono font-medium text-sm text-foreground">{title}</h3>
        </div>
      )}
      <div className={cn(!noPadding && "p-5")}>{children}</div>
    </div>
  );
}
