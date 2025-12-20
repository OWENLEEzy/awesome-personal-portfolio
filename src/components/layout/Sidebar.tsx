import { Home, FolderKanban, FileText, Mail, X, ChevronDown, ChevronRight } from "lucide-react";
import { NavLink } from "@/components/NavLink";
import { cn } from "@/lib/utils";
import { aboutContent, projectsContent } from "@/lib/content";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const navItems = [
  { title: "Home", path: "/", icon: Home },
  { title: "Resume", path: "/resume", icon: FileText },
  { title: "Contact", path: "/contact", icon: Mail },
];

interface SidebarProps {
  isOpen: boolean;
  onToggle: () => void;
}

export function Sidebar({ isOpen, onToggle }: SidebarProps) {
  const [projectsExpanded, setProjectsExpanded] = useState(false);
  const location = useLocation();
  const isProjectsActive = location.pathname.startsWith("/projects");

  return (
    <>
      {/* Mobile overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-background/80 backdrop-blur-sm z-40 lg:hidden"
          onClick={onToggle}
        />
      )}

      {/* Sidebar */}
      <aside
        className={cn(
          "fixed left-0 top-0 z-50 h-full w-64 bg-sidebar border-r border-sidebar-border transition-transform duration-300 lg:translate-x-0",
          isOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <div className="flex flex-col h-full">
          {/* Logo */}
          <div className="flex items-center justify-between h-16 px-6 border-b border-sidebar-border">
            <span className="font-mono font-bold text-lg text-foreground">
              <span className="text-gradient">Portfolio</span>
            </span>
            <button
              onClick={onToggle}
              className="lg:hidden p-2 rounded-lg hover:bg-sidebar-accent transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Navigation */}
          <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className="sidebar-item"
                activeClassName="sidebar-item-active"
                onClick={() => window.innerWidth < 1024 && onToggle()}
              >
                <item.icon className="w-5 h-5" />
                <span>{item.title}</span>
              </NavLink>
            ))}

            {/* Projects Section with expandable list */}
            <div className="pt-2">
              <button
                onClick={() => setProjectsExpanded(!projectsExpanded)}
                className={cn(
                  "sidebar-item w-full justify-between",
                  isProjectsActive && "sidebar-item-active"
                )}
              >
                <div className="flex items-center gap-3">
                  <FolderKanban className="w-5 h-5" />
                  <span>Projects</span>
                </div>
                {projectsExpanded ? (
                  <ChevronDown className="w-4 h-4" />
                ) : (
                  <ChevronRight className="w-4 h-4" />
                )}
              </button>

              {/* Expandable project list */}
              {projectsExpanded && (
                <div className="ml-4 mt-1 space-y-1 animate-fade-in">
                  <Link
                    to="/projects"
                    className={cn(
                      "sidebar-item text-sm py-2",
                      location.pathname === "/projects" && "sidebar-item-active"
                    )}
                    onClick={() => window.innerWidth < 1024 && onToggle()}
                  >
                    <span className="text-muted-foreground">→</span>
                    <span>View All Projects</span>
                  </Link>
                  {projectsContent.map((project) => (
                    <Link
                      key={project.slug}
                      to={`/projects/${project.slug}`}
                      className={cn(
                        "sidebar-item text-sm py-2",
                        location.pathname === `/projects/${project.slug}` && "sidebar-item-active"
                      )}
                      onClick={() => window.innerWidth < 1024 && onToggle()}
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-primary/60" />
                      <span className="truncate">{project.title}</span>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </nav>

          {/* Footer */}
          <div className="p-4 border-t border-sidebar-border">
            <p className="text-xs text-muted-foreground text-center">
              {aboutContent.footer.copyright}
            </p>
          </div>
        </div>
      </aside>
    </>
  );
}
