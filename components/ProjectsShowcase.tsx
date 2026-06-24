import { projects } from "../data/projects";
import { ProjectCard } from "./ProjectCard";

export function ProjectsShowcase() {
  return (
    <section id="projects" className="min-h-screen flex flex-col justify-center py-24 border-t border-border">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="mb-12">
          <h2 className="text-3xl md:text-5xl font-semibold tracking-tight mb-4">Featured <span className="text-muted">Work</span></h2>
          <p className="text-muted">A deep dive into recent projects and technical exploration.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div key={project.id} className="h-full">
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
