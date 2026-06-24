import { ArrowRight, ExternalLink, Folder } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Project } from "../data/projects";

export function ProjectCard({ project }: { project: Project }) {
  const projectHref = `/projects/${project.slug}`;

  return (
    <article className="bg-card border border-border rounded-3xl overflow-hidden flex flex-col h-full shadow-sm shadow-black/5">
      <Link
        href={projectHref}
        className="block focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-accent"
        aria-label={`View ${project.title} case study`}
      >
        {project.image ? (
          <div className="aspect-video w-full relative bg-background overflow-hidden border-b border-border">
            <Image
              src={project.image}
              alt={`Screenshot of ${project.title}`}
              fill
              className="object-cover"
            />
          </div>
        ) : (
          <div className="aspect-video w-full relative bg-background flex items-center justify-center border-b border-border">
            <Folder className="w-11 h-11 text-muted" aria-hidden="true" />
          </div>
        )}
      </Link>

      <div className="p-6 flex flex-col flex-1">
        <div className="flex justify-between items-start gap-4 mb-4">
          <div>
            <h3 className="font-semibold text-lg text-foreground">
              <Link href={projectHref} className="hover:text-accent transition-colors duration-150">
                {project.title}
              </Link>
            </h3>
            <span className="text-xs font-semibold tracking-wide text-accent">
              {project.category}
            </span>
          </div>

          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-background border border-border rounded-full text-muted hover:text-accent hover:border-accent transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
              aria-label={`Open ${project.title} external link`}
            >
              <ExternalLink className="w-4 h-4" aria-hidden="true" />
            </a>
          )}
        </div>

        <p className="text-sm text-muted leading-relaxed mb-5 line-clamp-3">
          {project.objective}
        </p>

        <div className="mb-5">
          <p className="text-xs text-muted font-semibold mb-2">Roles</p>
          <div className="flex flex-wrap gap-2">
            {project.roles.map((role) => (
              <span
                key={role}
                className="text-xs font-medium text-foreground bg-background border border-border px-2.5 py-1 rounded-md"
              >
                {role}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-auto pt-5 border-t border-border">
          <div className="bg-emerald-50 p-3 rounded-xl border border-emerald-200 dark:bg-emerald-950/50 dark:border-emerald-800">
            <p className="text-xs leading-relaxed text-emerald-800 dark:text-emerald-200 line-clamp-3">
              {project.results}
            </p>
          </div>

          <div className="flex flex-wrap gap-2 mt-4">
            {project.techStack.map((tool) => (
              <span
                key={tool}
                className="text-xs px-2.5 py-1 rounded-md bg-background text-foreground font-medium border border-border"
              >
                {tool}
              </span>
            ))}
          </div>

          <Link
            href={projectHref}
            className="inline-flex items-center gap-2 mt-5 text-sm font-semibold text-foreground hover:text-accent transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
          >
            View case study
            <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </article>
  );
}
