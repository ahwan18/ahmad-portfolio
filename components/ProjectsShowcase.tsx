import { projects } from "../data/projects";
import { ProjectCard } from "./ProjectCard";

export function ProjectsShowcase() {
  const featuredProjects = projects.filter((project) => project.featured);
  const supportingProjects = projects.filter((project) => !project.featured);

  return (
    <section id="projects" className="border-t border-border py-20 md:py-24">
      <div className="container mx-auto max-w-6xl px-6">
        <div className="mb-12 grid gap-6 md:grid-cols-[1.4fr_0.8fr] md:items-end">
          <div className="max-w-3xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-accent">Portfolio</p>
            <h2 className="mb-4 text-3xl font-semibold tracking-tight md:text-5xl">
              Selected <span className="text-muted">Projects</span>
            </h2>
            <p className="text-muted">
              A curated mix of shipped apps, validated prototypes, and full-stack builds. Each card focuses on the problem, my role, the stack, and proof of progress.
            </p>
          </div>

          <div className="rounded-3xl border border-border bg-card p-5 shadow-sm shadow-black/5">
            <p className="text-sm font-semibold text-foreground">Quick signal for recruiters</p>
            <p className="mt-2 text-sm leading-relaxed text-muted">
              Strongest work first: App Store release, TestFlight validation, computer vision, Android, and full-stack web projects.
            </p>
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} featured />
          ))}
        </div>

        <div className="mt-10">
          <div className="mb-5 flex items-center justify-between gap-4">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-muted">More builds</p>
              <h3 className="mt-2 text-2xl font-semibold tracking-tight text-foreground">Breadth across Android, Web, and Full-stack</h3>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {supportingProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
