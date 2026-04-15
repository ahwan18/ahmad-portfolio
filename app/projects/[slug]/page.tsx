import type { Metadata } from "next";
import { projects } from "@/data/projects";
import { getAbsoluteUrl } from "@/lib/site";
import { notFound } from "next/navigation";
import { CheckCircle, Code, Layers, UserCircle } from "lucide-react";
import { BackButton } from "../../../components/BackButton";
import Image from "next/image";

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}

function buildProjectSeoTitle(project: (typeof projects)[number]) {
  const objectiveSummary = project.objective
    .replace(/\.$/, "")
    .split(/(?:\s+using\b|\s+with\b|\s+for\b|\s+designed\b|\s+that\b)/i)[0]
    .trim();

  return `${project.title} - ${objectiveSummary}`;
}

function buildProjectDescription(project: (typeof projects)[number]) {
  const description = `${project.objective} ${project.results}`.trim();

  return description.length > 160
    ? `${description.slice(0, 157).trimEnd()}...`
    : description;
}

export async function generateMetadata(
  { params }: { params: Promise<{ slug: string }> }
): Promise<Metadata> {
  const resolvedParams = await params;
  const project = getProjectBySlug(resolvedParams.slug);

  if (!project) {
    notFound();
  }

  const title = buildProjectSeoTitle(project);
  const description = buildProjectDescription(project);
  const url = getAbsoluteUrl(`/projects/${project.slug}`);

  return {
    title,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      type: "website",
      locale: "en_US",
      url,
      title,
      description,
      images: [
        {
          url: getAbsoluteUrl("/opengraph-image"),
          width: 1200,
          height: 630,
          alt: `${project.title} project preview`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [getAbsoluteUrl("/twitter-image")],
    },
  };
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const project = getProjectBySlug(resolvedParams.slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="container mx-auto px-6 py-24 max-w-4xl">
      <BackButton />

      <div className="mb-12">
        <div className="inline-block px-3 py-1 bg-accent/10 text-accent rounded-full text-xs font-semibold tracking-wider uppercase mb-4 shadow-sm shadow-black/5">
          {project.category}
        </div>
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 text-foreground">{project.title}</h1>
      </div>

      {project.image ? (
        <div className="w-full aspect-video relative bg-muted/10 rounded-3xl overflow-hidden mb-12 border border-border/10 shadow-sm shadow-black/5">
          <Image
            src={project.image}
            alt={`Screenshot of ${project.title}`}
            fill
            className="object-cover"
          />
        </div>
      ) : (
        <div className="w-full h-64 bg-card rounded-3xl mb-12 flex items-center justify-center border border-border/10 shadow-sm shadow-black/5">
           <span className="text-muted font-medium">Add high-resolution media here</span>
        </div>
      )}

      <div className="grid md:grid-cols-3 gap-12">
        <div className="md:col-span-2 space-y-8">
          <section>
            <h2 className="text-2xl font-semibold mb-4 text-foreground flex items-center gap-2"><Layers className="w-5 h-5 text-muted"/> Objective</h2>
            <p className="text-foreground/80 leading-relaxed font-light text-lg">
              {project.objective}
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-foreground flex items-center gap-2"><CheckCircle className="w-5 h-5 text-emerald-500"/> Outcomes & Results</h2>
            <div className="bg-emerald-50 dark:bg-emerald-500/10 p-6 rounded-2xl border border-emerald-200 dark:border-emerald-500/20 shadow-sm shadow-black/5">
               <p className="text-emerald-800 dark:text-emerald-300 font-medium leading-relaxed text-lg">
                 {project.results}
               </p>
            </div>
          </section>
        </div>

        <div className="space-y-8">
          <div className="bg-card p-6 rounded-2xl border border-border/10 shadow-sm shadow-black/5">
            <h3 className="font-semibold text-foreground mb-4 flex items-center gap-2"><Code className="w-4 h-4 text-muted"/> Tech Stack</h3>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map(tech => (
                <span key={tech} className="px-3 py-1.5 bg-black/5 dark:bg-white/5 border border-border/10 text-foreground/80 rounded-lg text-sm font-medium">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="bg-card p-6 rounded-2xl border border-border/10 shadow-sm shadow-black/5">
            <h3 className="font-semibold text-foreground mb-4 flex items-center gap-2"><UserCircle className="w-4 h-4 text-muted"/> Responsibilities</h3>
            <ul className="space-y-2">
              {project.roles.map(role => (
                <li key={role} className="flex items-center gap-2 text-foreground/80 text-sm">
                  <span className="w-1.5 h-1.5 bg-accent rounded-full"></span>
                  {role}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
