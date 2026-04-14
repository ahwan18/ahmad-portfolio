import { FadeIn } from "./FadeIn";
import { projects } from "../data/projects";
import { ProjectCard } from "./ProjectCard";

export function ProjectsShowcase() {
  return (
    <section id="projects" className="py-24 border-t border-border/10 bg-transparent">
      <div className="container mx-auto px-6 max-w-6xl">
        <FadeIn>
          <div className="mb-12">
            <h2 className="text-3xl md:text-5xl font-semibold tracking-tight mb-4">Featured <span className="text-muted">Work</span></h2>
            <p className="text-muted">A deep dive into recent projects and technical exploration.</p>
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, idx) => (
            <FadeIn key={project.id} delay={0.1 + idx * 0.1} className="h-full">
              <ProjectCard project={project} />
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
