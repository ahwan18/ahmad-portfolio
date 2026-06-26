import { projects } from "../data/projects";
import { ProjectCard } from "./ProjectCard";

export function ProjectsShowcase() {
  return (
    <section id="projects" className="border-t border-border py-20 md:py-24">
      <div className="container mx-auto max-w-6xl px-6">
        <div className="mb-12 max-w-3xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-accent">Portfolio</p>
          <h2 className="mb-4 text-3xl font-semibold tracking-tight md:text-5xl">
            Selected <span className="text-muted">Projects</span>
          </h2>
          <p className="text-muted">Recruiter-friendly case studies showing the problem, role, stack, and result behind each product.</p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
