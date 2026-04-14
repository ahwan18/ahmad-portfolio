import { ExternalLink, Folder, CheckCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Project } from "../data/projects";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group block"
    >
      <div className="bg-card border border-border/10 rounded-3xl overflow-hidden flex flex-col h-full 
        hover:border-accent/40 transition-all duration-300 
        shadow-sm shadow-black/5 hover:-translate-y-1 hover:scale-[1.02] hover:shadow-xl hover:shadow-accent/10 cursor-pointer">

        {/* IMAGE */}
        {project.image ? (
          <div className="aspect-video w-full relative bg-muted/10 overflow-hidden">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
            />
          </div>
        ) : (
          <div className="aspect-video w-full relative bg-muted/10 flex items-center justify-center border-b border-border/10">
            <Folder className="w-12 h-12 text-muted group-hover:scale-110 transition-transform duration-300" />
          </div>
        )}

        {/* CONTENT */}
        <div className="p-6 flex flex-col flex-1">

          {/* HEADER */}
          <div className="flex justify-between items-start mb-4">
            <div>
              <h3 className="font-semibold text-lg text-foreground">
                {project.title}
              </h3>
              <span className="text-xs font-semibold uppercase tracking-wider text-accent">
                {project.category}
              </span>
            </div>

            {/* External Link (STOP PROPAGATION) */}
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="p-2 bg-black/5 dark:bg-white/5 rounded-full 
                hover:bg-black/10 dark:hover:bg-white/10 
                transition-colors text-muted hover:text-foreground"
              >
                <ExternalLink className="w-4 h-4" />
              </a>
            )}
          </div>

          {/* OBJECTIVE */}
          <p className="text-sm text-muted font-light leading-relaxed mb-4 line-clamp-3">
            {project.objective}
          </p>

          {/* ROLES */}
          <div className="mb-4">
            <div className="flex flex-wrap gap-1">
              <span className="text-[10px] text-muted mr-1 mt-0.5">
                ROLES:
              </span>
              {project.roles.map(role => (
                <span
                  key={role}
                  className="text-[10px] uppercase font-bold text-muted 
                  bg-black/5 dark:bg-white/5 px-2 py-0.5 rounded-sm"
                >
                  {role}
                </span>
              ))}
            </div>
          </div>

          {/* BOTTOM */}
          <div className="mt-auto pt-4 border-t border-border/10">

            {/* RESULTS */}
            <div className="bg-emerald-50/80 dark:bg-emerald-500/10 backdrop-blur-sm p-3 rounded-xl border border-emerald-100 dark:border-emerald-500/20">
              <div className="flex items-start gap-2">
                <p className="text-[12px] leading-relaxed text-emerald-700 dark:text-emerald-300 line-clamp-3">
                  {project.results}
                </p>
              </div>
            </div>

            {/* TECH STACK */}
            <div className="flex flex-wrap gap-2 mt-4">
              {project.techStack.map((tool) => (
                <span
                  key={tool}
                  className="text-xs px-2 py-1 rounded-md 
                  bg-black/5 dark:bg-white/5 text-foreground/80 
                  font-medium border border-border/10"
                >
                  {tool}
                </span>
              ))}
            </div>

          </div>
        </div>
      </div>
    </Link>
  );
}