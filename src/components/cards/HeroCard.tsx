import { Button } from "@/components/ui/button";
import { DashboardCard } from "@/components/ui/dashboard-card";
import { ArrowRight, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import { aboutContent } from "@/lib/content";

export function HeroCard() {
  const { hero } = aboutContent;

  return (
    <DashboardCard className="relative overflow-hidden">
      {/* Glow effect */}
      <div className="absolute -top-20 -right-20 w-40 h-40 bg-primary/20 rounded-full blur-3xl" />

      <div className="relative">
        <div className="flex items-center gap-2 mb-4">
          <div className="w-3 h-3 rounded-full bg-primary animate-pulse" />
          <span className="text-sm text-muted-foreground">{hero.availability}</span>
        </div>

        <h1 className="text-3xl lg:text-4xl font-mono font-bold text-foreground mb-2">
          {hero.name}
        </h1>
        <p className="text-lg text-gradient font-mono font-medium mb-4">
          {hero.role}
        </p>
        <p className="text-muted-foreground leading-relaxed mb-6 max-w-lg">
          {hero.description}
        </p>

        <div className="flex flex-wrap gap-3">
          <Button asChild className="group">
            <Link to={hero.cta.primaryHref}>
              {hero.cta.primaryLabel}
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
          <Button variant="outline" asChild>
            <Link to={hero.cta.secondaryHref}>
              <Mail className="mr-2 w-4 h-4" />
              {hero.cta.secondaryLabel}
            </Link>
          </Button>
        </div>
      </div>
    </DashboardCard>
  );
}
