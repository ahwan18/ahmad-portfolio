import type { Metadata } from "next";
import { projects } from "@/data/projects";
import { getAbsoluteUrl } from "@/lib/site";
import { notFound } from "next/navigation";
import { ArrowUpRight, CheckCircle, Code, Layers, ListChecks, UserCircle } from "lucide-react";
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
    <div className="container mx-auto max-w-5xl px-6 py-24">
      <BackButton />

      <div className="mb-12 grid gap-8 md:grid-cols-[1.4fr_0.8fr] md:items-end">
        <div>
          <div className="mb-5 flex flex-wrap gap-2">
            <div className="inline-block rounded-full bg-accent/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-accent shadow-sm shadow-black/5">
              {project.category}
            </div>
            <div className="inline-block rounded-full border border-border bg-card px-3 py-1 text-xs font-semibold uppercase tracking-wider text-muted shadow-sm shadow-black/5">
              {project.status}
            </div>
          </div>
          <h1 className="mb-6 text-4xl font-bold tracking-tight text-foreground md:text-6xl">{project.title}</h1>
          <p className="max-w-3xl text-lg leading-relaxed text-foreground/75">
            {project.objective}
          </p>
        </div>

        {project.link && (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-fit items-center gap-2 rounded-full border border-border bg-card px-5 py-3 text-sm font-semibold text-foreground shadow-sm shadow-black/5 hover:border-accent hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
          >
            {project.ctaLabel ?? "Open project"}
            <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </a>
        )}
      </div>

      {project.image ? (
        <div className="relative mb-12 aspect-video w-full overflow-hidden rounded-3xl border border-border bg-card shadow-sm shadow-black/5">
          <Image
            src={project.image}
            alt={`Screenshot of ${project.title}`}
            fill
            className="object-cover"
          />
        </div>
      ) : (
        <div className="mb-12 flex h-64 w-full items-center justify-center rounded-3xl border border-border bg-card shadow-sm shadow-black/5">
           <span className="font-medium text-muted">Add high-resolution media here</span>
        </div>
      )}

      <div className="grid gap-12 md:grid-cols-3">
        <div className="space-y-8 md:col-span-2">
          <section>
            <h2 className="mb-4 flex items-center gap-2 text-2xl font-semibold text-foreground"><Layers className="h-5 w-5 text-muted"/> Product Objective</h2>
            <p className="text-lg font-light leading-relaxed text-foreground/80">
              {project.objective}
            </p>
          </section>

          <section>
            <h2 className="mb-4 flex items-center gap-2 text-2xl font-semibold text-foreground"><CheckCircle className="h-5 w-5 text-emerald-500"/> Outcome</h2>
            <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-6 shadow-sm shadow-black/5 dark:border-emerald-500/20 dark:bg-emerald-500/10">
               <p className="text-lg font-medium leading-relaxed text-emerald-800 dark:text-emerald-300">
                 {project.results}
               </p>
            </div>
          </section>

          <section>
            <h2 className="mb-4 flex items-center gap-2 text-2xl font-semibold text-foreground"><ListChecks className="h-5 w-5 text-muted"/> Evidence</h2>
            <div className="grid gap-3 sm:grid-cols-2">
              {project.highlights.map((highlight) => (
                <div key={highlight} className="rounded-2xl border border-border bg-card p-4 text-sm font-medium text-foreground shadow-sm shadow-black/5">
                  {highlight}
                </div>
              ))}
            </div>
          </section>
        </div>

        <aside className="space-y-8">
          <div className="rounded-2xl border border-border bg-card p-6 shadow-sm shadow-black/5">
            <h3 className="mb-4 flex items-center gap-2 font-semibold text-foreground"><Code className="h-4 w-4 text-muted"/> Tech Stack</h3>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <span key={tech} className="rounded-lg border border-border bg-background px-3 py-1.5 text-sm font-medium text-foreground">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-border bg-card p-6 shadow-sm shadow-black/5">
            <h3 className="mb-4 flex items-center gap-2 font-semibold text-foreground"><UserCircle className="h-4 w-4 text-muted"/> Responsibilities</h3>
            <ul className="space-y-2">
              {project.roles.map((role) => (
                <li key={role} className="flex items-center gap-2 text-sm text-foreground/80">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent"></span>
                  {role}
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </div>
    </div>
  );
}
