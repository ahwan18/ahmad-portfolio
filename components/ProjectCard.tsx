import { ArrowRight, ExternalLink, Folder, Trophy } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Project } from "../data/projects";

export function ProjectCard({ project, featured = false }: { project: Project; featured?: boolean }) {
  const projectHref = `/projects/${project.slug}`;
  const visibleHighlights = project.highlights.slice(0, featured ? 4 : 3);

  return (
    <article className="flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-card shadow-sm shadow-black/5">
      <Link
        href={projectHref}
        className="block focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-accent"
        aria-label={`View ${project.title} case study`}
      >
        {project.image ? (
          <div className="relative aspect-video w-full overflow-hidden border-b border-border bg-background">
            <Image
              src={project.image}
              alt={`${project.title} app interface screenshot`}
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
            />
          </div>
        ) : (
          <div className="relative flex aspect-video w-full items-center justify-center border-b border-border bg-background">
            <Folder className="h-11 w-11 text-muted" aria-hidden="true" />
          </div>
        )}
      </Link>

      <div className="flex flex-1 flex-col p-6">
        <div className="mb-5 flex items-start justify-between gap-4">
          <div>
            <div className="mb-3 flex flex-wrap gap-2">
              <span className="inline-flex rounded-full border border-border bg-background px-2.5 py-1 text-xs font-semibold text-accent">
                {project.category}
              </span>
              <span className="inline-flex rounded-full border border-border bg-background px-2.5 py-1 text-xs font-medium text-muted">
                {project.status}
              </span>
            </div>
            <h3 className="text-xl font-semibold text-foreground">
              <Link href={projectHref} className="hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent">
                {project.title}
              </Link>
            </h3>
          </div>

          {featured && (
            <span className="rounded-full border border-border bg-background p-2 text-accent" aria-label="Featured project">
              <Trophy className="h-4 w-4" aria-hidden="true" />
            </span>
          )}
        </div>

        <div className="mb-5 space-y-2">
          <p className="text-xs font-semibold uppercase tracking-widest text-muted">Problem / Product</p>
          <p className="line-clamp-3 text-sm leading-relaxed text-foreground/80">{project.objective}</p>
        </div>

        <div className="mb-5">
          <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-muted">Evidence</p>
          <div className="flex flex-wrap gap-2">
            {visibleHighlights.map((highlight) => (
              <span key={highlight} className="rounded-md border border-border bg-background px-2.5 py-1 text-xs font-medium text-foreground">
                {highlight}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-auto border-t border-border pt-5">
          <div className="rounded-2xl border border-border bg-background p-4">
            <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-accent">Result</p>
            <p className="line-clamp-3 text-sm leading-relaxed text-foreground/80">{project.results}</p>
          </div>

          <div className="mt-4 flex flex-wrap gap-2">
            {project.techStack.slice(0, featured ? 6 : 5).map((tool) => (
              <span key={tool} className="rounded-md border border-border bg-card px-2.5 py-1 text-xs font-medium text-foreground">
                {tool}
              </span>
            ))}
          </div>

          <div className="mt-5 flex flex-wrap items-center gap-4">
            <Link
              href={projectHref}
              className="inline-flex items-center gap-2 text-sm font-semibold text-foreground hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
            >
              View case study
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>

            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-semibold text-muted hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
                aria-label={`Open ${project.title} external link`}
              >
                {project.ctaLabel ?? "Open link"}
                <ExternalLink className="h-4 w-4" aria-hidden="true" />
              </a>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}
