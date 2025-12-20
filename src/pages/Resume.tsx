import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { DashboardCard } from "@/components/ui/dashboard-card";
import { Tag } from "@/components/ui/tag";
import { Button } from "@/components/ui/button";
import { Briefcase, GraduationCap, User, Wrench, Download } from "lucide-react";
import { resumeContent } from "@/lib/content";
import resumeChPdf from "@/content/resume/resume(ch).pdf";
import resumeEnPdf from "@/content/resume/resume(en).pdf";

const Resume = () => {
  return (
    <DashboardLayout>
      <div className="max-w-4xl mx-auto">
        {/* Page header */}
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-6">
          <div>
            <h2 className="text-xl font-mono font-medium text-foreground mb-1">{resumeContent.header.title}</h2>
            <p className="text-sm text-muted-foreground">
              {resumeContent.header.subtitle}
            </p>
          </div>
          <div className="flex flex-col items-end gap-2">
            <div className="flex gap-3">
              <a href={resumeChPdf} target="_blank" rel="noopener noreferrer">
                <Button className="gap-2 shadow-lg hover:shadow-primary/25 transition-all">
                  <Download className="w-4 h-4" />
                  Resume (CH)
                </Button>
              </a>
              <a href={resumeEnPdf} target="_blank" rel="noopener noreferrer">
                <Button className="gap-2 shadow-lg hover:shadow-primary/25 transition-all">
                  <Download className="w-4 h-4" />
                  Resume (EN)
                </Button>
              </a>
            </div>
            <p className="text-[10px] text-muted-foreground font-mono animate-pulse">
              Click to download PDF
            </p>
          </div>
        </div>

        {/* Profile Summary */}
        <DashboardCard className="mb-6">
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-lg bg-accent text-accent-foreground">
              <User className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-mono font-medium text-foreground mb-2">{resumeContent.summary.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {resumeContent.summary.content}
              </p>
            </div>
          </div>
        </DashboardCard>

        {/* Work Experience */}
        <DashboardCard title="Work Experience" className="mb-6">
          <div className="space-y-6">
            {resumeContent.experience.map((job, index) => (
              <div
                key={index}
                className={index !== resumeContent.experience.length - 1 ? "pb-6 border-b border-border" : ""}
              >
                <div className="flex items-start gap-4">
                  <div className="p-2 rounded-lg bg-muted text-muted-foreground shrink-0">
                    <Briefcase className="w-4 h-4" />
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-wrap items-baseline justify-between gap-2 mb-1">
                      <h4 className="font-mono font-medium text-foreground">{job.title}</h4>
                      <span className="text-sm text-muted-foreground">{job.period}</span>
                    </div>
                    <p className="text-sm text-primary mb-3">{job.company}</p>
                    <ul className="space-y-2">
                      {job.points.map((point, i) => (
                        <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary/60 mt-2 shrink-0" />
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </DashboardCard>

        {/* Education */}
        <DashboardCard title="Education" className="mb-6">
          {resumeContent.education.map((edu, index) => (
            <div key={index} className="flex items-start gap-4">
              <div className="shrink-0">
                {edu.logo ? (
                  <div className="w-12 h-12 rounded-lg bg-white p-1 overflow-hidden border border-border">
                    <img
                      src={edu.logo}
                      alt={`${edu.school} logo`}
                      className="w-full h-full object-contain"
                    />
                  </div>
                ) : (
                  <div className="p-2 rounded-lg bg-muted text-muted-foreground">
                    <GraduationCap className="w-4 h-4" />
                  </div>
                )}
              </div>
              <div>
                <div className="flex flex-wrap items-baseline justify-between gap-2 mb-1">
                  <h4 className="font-mono font-medium text-foreground">{edu.degree}</h4>
                  <span className="text-sm text-muted-foreground">{edu.period}</span>
                </div>
                <p className="text-sm text-primary mb-2">{edu.school}</p>
                <ul className="list-none space-y-1">
                  {edu.details.map((detail, i) => (
                    <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                      <span className="mt-1.5 w-1 h-1 rounded-full bg-primary/60 shrink-0" />
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </DashboardCard>

        {/* Skills */}
        <DashboardCard title="Skills">
          <div className="space-y-8">
            {/* AI Related Section */}
            <div>
              <div className="flex items-center gap-2 mb-4 pb-2 border-b border-border/40">
                <Wrench className="w-4 h-4 text-primary" />
                <h4 className="text-base font-semibold text-foreground">AI Related</h4>
              </div>

              <div className="space-y-6">
                {Object.entries(resumeContent.skills.Tools).map(([categoryName, skills]) => (
                  <div key={categoryName} className="space-y-3">
                    <h5 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider pl-1 font-mono">
                      {categoryName.replace("-", " ")}
                    </h5>
                    <div className="grid gap-3 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                      {skills.map((skill) => {
                        const match = skill.match(/^(.*?)\((.*?)\)$/);
                        if (match) {
                          const [_, name, itemsStr] = match;
                          const items = itemsStr.split(",").map((s) => s.trim());
                          return (
                            <div
                              key={skill}
                              className="rounded-lg border border-border/60 bg-card/60 p-3 shadow-sm hover:bg-card/80 transition-colors"
                            >
                              <span className="block text-sm font-semibold text-foreground mb-2">
                                {name}
                              </span>
                              <div className="flex flex-wrap gap-1.5">
                                {items.map((item) => (
                                  <Tag
                                    key={item}
                                    variant={categoryName === "Ai-related" ? "primary" : "secondary"}
                                    className="text-xs"
                                  >
                                    {item}
                                  </Tag>
                                ))}
                              </div>
                            </div>
                          );
                        }
                        return (
                          <Tag
                            key={skill}
                            variant={categoryName === "Ai-related" ? "primary" : "secondary"}
                          >
                            {skill}
                          </Tag>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Other Skills Section */}
            <div>
              <div className="flex items-center gap-2 mb-4 pb-2 border-b border-border/40">
                <User className="w-4 h-4 text-primary" />
                <h4 className="text-base font-semibold text-foreground">Other Skills</h4>
              </div>
              <div className="grid gap-3 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
                {resumeContent.skills.other.map((skill) => {
                  const match = skill.match(/^(.*?)\((.*?)\)$/);
                  if (match) {
                    const [_, category, itemsStr] = match;
                    const items = itemsStr.split(',').map(s => s.trim());
                    return (
                      <div key={skill} className="rounded-lg border border-border/60 bg-card/60 p-3 shadow-sm hover:bg-card/80 transition-colors h-full">
                        <span className="block text-sm font-semibold text-foreground mb-2">{category}</span>
                        <div className="flex flex-wrap gap-1.5">
                          {items.map(item => (
                            <Tag key={item} variant="outline" className="text-xs">{item}</Tag>
                          ))}
                        </div>
                      </div>
                    );
                  }
                  return <Tag key={skill} variant="outline">{skill}</Tag>;
                })}
              </div>
            </div>
          </div>
        </DashboardCard>
      </div>
    </DashboardLayout>
  );
};

export default Resume;
