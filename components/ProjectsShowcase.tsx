"use client";
import { useEffect, useRef } from "react";
import { FadeIn } from "./FadeIn";
import { projects } from "../data/projects";
import { ProjectCard } from "./ProjectCard";
import gsap from "gsap";
import { useSlider } from "./SliderContext";

export function ProjectsShowcase() {
  const { currentIndex, sections } = useSlider();
  const containerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);
  
  // Find the index of this section
  // In app/page.tsx, ProjectsShowcase is the 6th child (index 5)
  const SECTION_INDEX = 5; 

  useEffect(() => {
    if (currentIndex === SECTION_INDEX && containerRef.current) {
      // Accessibility check: Skip animation if user prefers reduced motion
      const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      
      if (prefersReducedMotion) {
        gsap.set(cardsRef.current, { opacity: 1, y: 0, scale: 1 });
        return;
      }

      // Hide them immediately before starting the animation to prevent flash
      gsap.set(cardsRef.current, { opacity: 0, y: 40 });

      // Staggered entrance animation
      gsap.to(
        cardsRef.current,
        { 
          y: 0, 
          opacity: 1, 
          scale: 1,
          duration: 1, 
          stagger: 0.15, 
          ease: "expo.out",
          delay: 0.6, // Slight delay for the section transition to complete
        }
      );
    }
  }, [currentIndex]);

  return (
    <section id="projects" className="min-h-screen flex flex-col justify-center py-24 border-t border-border/10 bg-transparent">
      <div className="container mx-auto px-6 max-w-6xl" ref={containerRef}>
        <FadeIn>
          <div className="mb-12">
            <h2 className="text-3xl md:text-5xl font-semibold tracking-tight mb-4">Featured <span className="text-muted">Work</span></h2>
            <p className="text-muted">A deep dive into recent projects and technical exploration.</p>
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, idx) => (
            <div 
              key={project.id} 
              ref={(el) => { if (el) cardsRef.current[idx] = el; }}
              className="h-full" 
            >
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
