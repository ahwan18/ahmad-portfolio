import { ExternalLink, Folder, CheckCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Project } from "../data/projects";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="group bg-card border border-border/10 rounded-3xl overflow-hidden flex flex-col h-full hover:border-accent/40 transition-all duration-300 shadow-sm shadow-black/5 hover:-translate-y-1 hover:scale-[1.02] hover:shadow-xl hover:shadow-accent/10">
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
      
      <div className="p-6 flex flex-col flex-1">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h3 className="font-semibold text-lg text-foreground">{project.title}</h3>
            <span className="text-xs font-semibold uppercase tracking-wider text-accent">{project.category}</span>
          </div>
          {project.link && (
            <a href={project.link} target="_blank" rel="noopener noreferrer" className="p-2 bg-black/5 dark:bg-white/5 rounded-full hover:bg-black/10 dark:hover:bg-white/10 transition-colors text-muted hover:text-foreground">
              <ExternalLink className="w-4 h-4" />
            </a>
          )}
        </div>
        
        <p className="text-sm text-muted font-light leading-relaxed mb-4">
          {project.objective}
        </p>

        <div className="mb-4">
          <div className="flex flex-wrap gap-1">
             <span className="text-[10px] text-muted mr-1 mt-0.5">ROLES:</span>
             {project.roles.map(role => (
               <span key={role} className="text-[10px] uppercase font-bold text-muted bg-black/5 dark:bg-white/5 px-2 py-0.5 rounded-sm">{role}</span>
             ))}
          </div>
        </div>
        
        <div className="mt-auto pt-4 border-t border-border/10">
          <div className="flex gap-2 items-start mb-4">
             <CheckCircle className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" />
             <p className="text-xs text-emerald-600 dark:text-emerald-400 font-medium leading-relaxed bg-emerald-50 dark:bg-emerald-500/10 p-2 rounded-md">
               {project.results}
             </p>
          </div>

          <div className="flex justify-between items-center mt-4">
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tool) => (
                <span key={tool} className="text-xs px-2 py-1 rounded-md bg-black/5 dark:bg-white/5 text-foreground/80 font-medium border border-border/10">
                  {tool}
                </span>
              ))}
            </div>
            
            <Link 
              href={`/projects/${project.slug}`}
              className="text-xs font-semibold text-accent hover:underline flex-shrink-0 pl-2"
            >
              Deep Dive &rarr;
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
