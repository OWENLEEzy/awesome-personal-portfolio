import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { DashboardCard } from "@/components/ui/dashboard-card";
import { Mail, MapPin, Github, Linkedin, Twitter, Phone, Workflow } from "lucide-react";
import { contactContent } from "@/lib/content";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  mail: Mail,
  mapPin: MapPin,
  phone: Phone,
  github: Github,
  linkedin: Linkedin,
  twitter: Twitter,
  N8N: Workflow,
};

const Contact = () => {
  return (
    <DashboardLayout>
      <div className="max-w-2xl mx-auto">
        {/* Page header */}
        <div className="mb-6 text-center">
          <h2 className="text-xl font-mono font-medium text-foreground mb-1">
            {contactContent.header.title}
          </h2>
          <p className="text-sm text-muted-foreground">
            {contactContent.header.description}
          </p>
        </div>

        <div className="space-y-6">
          <DashboardCard>
            <h3 className="font-mono font-medium text-foreground mb-4">
              {contactContent.intro.title}
            </h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              {contactContent.intro.content}
            </p>

            <div className="space-y-4">
              {contactContent.direct.map((item) => {
                const Icon = iconMap[item.iconKey] || Mail;
                return (
                  <div key={item.id}>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="flex items-center gap-3 p-3 rounded-lg bg-muted/50 hover:bg-muted transition-colors group"
                      >
                        <div className="p-2 rounded-lg bg-accent text-accent-foreground">
                          <Icon className="w-4 h-4" />
                        </div>
                        <div>
                          <p className="text-sm font-medium group-hover:text-primary transition-colors">
                            {item.label}
                          </p>
                          {item.subLabel && (
                            <p className="text-xs text-muted-foreground">
                              {item.subLabel}
                            </p>
                          )}
                        </div>
                      </a>
                    ) : (
                      <div className="flex items-center gap-3 p-3 rounded-lg bg-muted/50">
                        <div className="p-2 rounded-lg bg-accent text-accent-foreground">
                          <Icon className="w-4 h-4" />
                        </div>
                        <div>
                          <p className="text-sm font-medium">{item.label}</p>
                          {item.subLabel && (
                            <p className="text-xs text-muted-foreground">
                              {item.subLabel}
                            </p>
                          )}
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </DashboardCard>

          <DashboardCard title="Connect">
            <div className="grid grid-cols-3 gap-3">
              {contactContent.socials.map((link) => {
                const Icon = iconMap[link.iconKey] || Github;
                return (
                  <a
                    key={link.id}
                    href={link.href || "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center gap-2 p-4 rounded-lg bg-muted/50 hover:bg-muted transition-colors group"
                  >
                    <Icon className="w-5 h-5 group-hover:text-primary transition-colors" />
                    <span className="text-xs text-muted-foreground group-hover:text-foreground transition-colors">
                      {link.label}
                    </span>
                  </a>
                );
              })}
            </div>
          </DashboardCard>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Contact;
