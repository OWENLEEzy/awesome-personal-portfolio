import { DashboardCard } from "@/components/ui/dashboard-card";
import { Tag } from "@/components/ui/tag";
import { ArrowRight, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  features?: string[];
  href?: string;
}

export function ProjectCard({ title, description, tags, features, href = "/projects" }: ProjectCardProps) {
  return (
    <Link to={href} className="block group h-full">
      <DashboardCard className="h-full transition-all duration-300 hover:border-primary/50 hover:shadow-md relative overflow-hidden group-hover:-translate-y-1">
        {/* Decorative background element */}
        <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-bl-full -mr-4 -mt-4 transition-transform group-hover:scale-110" />

        <div className="relative">
          <div className="flex items-start justify-between mb-4">
            <h4 className="text-lg font-mono font-bold text-foreground group-hover:text-primary transition-colors pr-8">
              {title}
            </h4>
            <div className="p-2 rounded-full bg-primary/10 text-primary opacity-0 group-hover:opacity-100 transition-all duration-300">
              <ArrowRight className="w-4 h-4" />
            </div>
          </div>

          <p className="text-sm text-muted-foreground mb-6 leading-relaxed line-clamp-3">
            {description}
          </p>

          {features && features.length > 0 && (
            <div className="mb-6 space-y-2">
              <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider flex items-center gap-1.5">
                <Sparkles className="w-3 h-3" />
                Key Features
              </p>
              <ul className="grid gap-1.5">
                {features.slice(0, 3).map((item, index) => (
                  <li
                    key={index}
                    className="text-xs text-muted-foreground/80 flex items-center gap-2"
                  >
                    <span className="w-1 h-1 rounded-full bg-primary/60" />
                    <span className="truncate">{item}</span>
                  </li>
                ))}
                {features.length > 3 && (
                  <li className="text-xs text-muted-foreground/60 pl-3">
                    +{features.length - 3} more...
                  </li>
                )}
              </ul>
            </div>
          )}

          <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-border/50">
            {tags.slice(0, 4).map((tag) => (
              <Tag key={tag} variant="secondary" className="bg-secondary/50 hover:bg-secondary">
                {tag}
              </Tag>
            ))}
            {tags.length > 4 && (
              <Tag variant="outline" className="text-xs">+{tags.length - 4}</Tag>
            )}
          </div>
        </div>
      </DashboardCard>
    </Link>
  );
}
