import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { ProjectCard } from "@/components/cards/ProjectCard";
import { projectsContent } from "@/lib/content";

const Projects = () => {
  return (
    <DashboardLayout>
      <div className="max-w-7xl mx-auto">
        {/* Page header */}
        <div className="mb-6">
          <h2 className="text-xl font-mono font-medium text-foreground mb-1">Projects</h2>
          <p className="text-sm text-muted-foreground">
            A collection of automation workflows, tools, and experiments
          </p>
        </div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {projectsContent.map((project) => (
            <ProjectCard key={project.title} {...project} href={`/projects/${project.slug}`} />
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Projects;
