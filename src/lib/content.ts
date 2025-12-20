import resumeData from "@/content/resume.json";
import aboutData from "@/content/about.json";
import projectsData from "@/content/projects.json";
import contactData from "@/content/contact.json";

// Resume Types
export type ExperienceItem = {
    company: string;
    title: string;
    period: string;
    points: string[];
};

export type EducationItem = {
    school: string;
    degree: string;
    period: string;
    details: string[];
    logo?: string;
};

export type Skills = {
    Tools: {
        [category: string]: string[];
    };
    other: string[];
};

export type ResumeContent = {
    header: {
        title: string;
        subtitle: string;
    };
    summary: {
        title: string;
        content: string;
    };
    experience: ExperienceItem[];
    education: EducationItem[];
    skills: Skills;
};

// About Types
export type StatItem = {
    id: string;
    value: string;
    label: string;
};

export type HeroContent = {
    headline: string;
    availability: string;
    name: string;
    role: string;
    description: string;
    cta: {
        primaryLabel: string;
        primaryHref: string;
        secondaryLabel: string;
        secondaryHref: string;
    };
};

export type AboutContent = {
    meta: {
        title: string;
        description: string;
    };
    hero: HeroContent;
    stats: StatItem[];
    footer: {
        copyright: string;
    };
};

// Project Types
export interface WorkflowItem {
    name: string;
    description: string;
    tools: string[];
    icon: string;
}

export type ProjectStats = Record<string, string | number>;

export interface Project {
    slug: string;
    title: string;
    description: string;
    tags: string[];
    details: string;
    stats?: ProjectStats;
    thumbnail?: string;
    workflows?: WorkflowItem[];
    workflowTitle?: string;
    keyLearnings?: string;
    // Legacy fields removed
};

// Contact Types
export type ContactLink = {
    id: string;
    label: string;
    subLabel?: string;
    href: string | null;
    iconKey: string;
};

export type ContactContent = {
    header: {
        title: string;
        description: string;
    };
    intro: {
        title: string;
        content: string;
    };
    direct: ContactLink[];
    socials: ContactLink[];
};

// Exported Data
export const resumeContent = resumeData as ResumeContent;
export const aboutContent = aboutData as AboutContent;
export const projectsContent = projectsData as Project[];
export const contactContent = contactData as ContactContent;

// Helper to get project by slug
export const getProjectBySlug = (slug: string): Project | undefined => {
    return projectsContent.find((p) => p.slug === slug);
};
