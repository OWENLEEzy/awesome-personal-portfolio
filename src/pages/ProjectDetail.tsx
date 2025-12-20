import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, ExternalLink, Github, Play, Pause, Settings, Zap, Video, FileText, Bell, Users, Calendar, BarChart, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { getProjectBySlug, WorkflowItem } from "@/lib/content";

// Icon mapping for dynamic JSON content
const iconMap: Record<string, JSX.Element> = {
  "video": <Video className="w-5 h-5" />,
  "file-text": <FileText className="w-5 h-5" />,
  "settings": <Settings className="w-5 h-5" />,
  "zap": <Zap className="w-5 h-5" />,
  "bar-chart": <BarChart className="w-5 h-5" />,
  "users": <Users className="w-5 h-5" />,
  "bell": <Bell className="w-5 h-5" />,
  "calendar": <Calendar className="w-5 h-5" />,
  "clock": <Calendar className="w-5 h-5" />, // Fallback/Variant
  "database": <BarChart className="w-5 h-5" />, // Fallback
  "share": <ExternalLink className="w-5 h-5" />, // Fallback
};

const WorkflowCard = ({ workflow }: { workflow: WorkflowItem }) => {
  return (
    <div className="group relative bg-card rounded-xl p-1 border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-xl pointer-events-none"></div>
      <div className="relative p-5 md:p-6 flex flex-col md:flex-row items-center gap-6">
        {/* Icon - Original Style */}
        <div className="flex-shrink-0">
          <div className="p-3 rounded-xl bg-primary/10 text-primary border border-primary/20 group-hover:scale-110 transition-transform duration-300">
            {iconMap[workflow.icon] || <Zap className="w-6 h-6" />}
          </div>
        </div>

        {/* Text Content - Original Font Style */}
        <div className="flex-grow text-center md:text-left">
          <h3 className="text-base font-bold text-foreground font-mono mb-1 group-hover:text-primary transition-colors">
            {workflow.name}
          </h3>
          <p className="text-muted-foreground text-sm leading-relaxed max-w-2xl">
            {workflow.description}
          </p>
        </div>

        {/* Tags - Horizontal Layout */}
        <div className="flex-shrink-0 flex flex-wrap justify-center md:justify-end gap-2 mt-2 md:mt-0">
          {workflow.tools.map((tool) => (
            <span
              key={tool}
              className="px-2.5 py-1 rounded bg-muted text-[10px] uppercase tracking-wider font-semibold text-muted-foreground border border-border"
            >
              {tool}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

const ProjectDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const project = slug ? getProjectBySlug(slug) : null;

  if (!project) {
    return (
      <DashboardLayout>
        <div className="max-w-4xl mx-auto text-center py-12">
          <h2 className="text-xl font-mono text-foreground mb-4">Project not found</h2>
          <Link to="/projects">
            <Button variant="outline">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Projects
            </Button>
          </Link>
        </div>
      </DashboardLayout>
    );
  }

  const hasWorkflows = project.workflows && project.workflows.length > 0;

  return (
    <DashboardLayout>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 pb-20">
        {/* Back button */}
        <Link
          to="/projects"
          className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-primary transition-colors mb-6 group"
        >
          <ArrowLeft className="w-4 h-4 mr-1 group-hover:-translate-x-1 transition-transform" />
          Back to Projects
        </Link>

        {/* Header */}
        <header className="mb-10">
          <div className="flex flex-col gap-5">
            <div>
              <h1 className="text-xl md:text-2xl font-bold text-foreground mb-4 font-mono tracking-tight">
                {project.title}
              </h1>
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-0.5 rounded-full bg-muted border border-border text-muted-foreground text-xs font-semibold uppercase tracking-wide"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <div className="prose prose-base dark:prose-invert max-w-none text-muted-foreground leading-relaxed">
              <p className="text-lg text-foreground font-medium mb-4">
                {project.description}
              </p>
              <div className="mb-4 text-sm">
                <p>{project.details}</p>
              </div>

              {project.keyLearnings && (
                <div className="mt-4 p-3.5 bg-card border-l-4 border-primary rounded-r-lg shadow-sm">
                  <p className="m-0 text-sm font-medium text-foreground">
                    <span className="font-bold text-primary block text-[10px] uppercase tracking-wider mb-1">Key Learnings</span>
                    {project.keyLearnings}
                  </p>
                </div>
              )}
            </div>
          </div>
        </header>

        {/* Stats Section */}
        {project.stats && (
          <section className="mb-12">
            <div className="grid grid-flow-col auto-cols-fr gap-4 border-y border-border py-6">
              {Object.entries(project.stats).map(([label, value], index) => (
                <div
                  key={label}
                  className={`flex flex-col items-center justify-center text-center ${index > 0 ? "border-l border-border" : ""}`}
                >
                  <span className="text-2xl md:text-3xl font-mono font-bold text-foreground mb-1">
                    {value}
                  </span>
                  <span className="text-[10px] uppercase tracking-widest text-muted-foreground font-medium">
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* System Workflows Section */}
        {hasWorkflows && (
          <section className="mb-10">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center">
                <Zap className="text-primary mr-2.5 w-5 h-5" />
                <h2 className="text-xl font-mono font-bold text-foreground">{project.workflowTitle || "System Workflows"}</h2>
              </div>
              {/* Badge Removed as per request */}
            </div>

            <div className="grid grid-cols-1 gap-3">
              {project.workflows!.map((workflow, index) => (
                <WorkflowCard key={index} workflow={workflow} />
              ))}
            </div>
          </section>
        )}

        {/* Fallback for projects without workflows - kept standard list style but wrapped nicely */}
      </div>
    </DashboardLayout>
  );
};

export default ProjectDetail;
