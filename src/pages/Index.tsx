import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { HeroCard } from "@/components/cards/HeroCard";
import { ProjectCard } from "@/components/cards/ProjectCard";
import { DashboardCard } from "@/components/ui/dashboard-card";
import { aboutContent, projectsContent } from "@/lib/content";



const Index = () => {
  // Get top 4 projects
  const featuredProjects = projectsContent.slice(0, 4);

  return (
    <DashboardLayout>
      <div className="max-w-7xl mx-auto">
        {/* Page header */}
        <div className="mb-6">
          <h2 className="text-xl font-mono font-medium text-foreground mb-1">Dashboard</h2>
          <p className="text-sm text-muted-foreground">{aboutContent.hero.headline}</p>
        </div>

        {/* Grid layout */}
        <div className="flex flex-col gap-6">
          {/* Hero - full width */}
          <div>
            <HeroCard />
          </div>

          {/* Stats card - full width */}
          <div>
            <DashboardCard title="Quick Stats" className="h-full">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {aboutContent.stats.map((stat) => (
                  <div key={stat.id} className="text-center p-4 rounded-lg bg-muted/50">
                    <p className="text-2xl font-mono font-bold text-primary">{stat.value}</p>
                    <p className="text-xs text-muted-foreground">{stat.label}</p>
                  </div>
                ))}
              </div>
            </DashboardCard>
          </div>

          {/* Featured Projects section - Limited to 4 */}
          <div>
            <h3 className="font-mono font-medium text-foreground mb-4">Featured Projects</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {featuredProjects.map((project) => (
                <ProjectCard
                  key={project.slug}
                  title={project.title}
                  description={project.description}
                  tags={project.tags}
                  href={`/projects/${project.slug}`}
                />
              ))}
            </div>
          </div>

          {/* Quick Links card */}

        </div>
      </div>
    </DashboardLayout>
  );
};

export default Index;
