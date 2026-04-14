import { Hero } from "../components/Hero";
import { About } from "../components/About";
import { Skills } from "../components/Skills";
import { Experience } from "../components/Experience";
import { Leadership } from "../components/Leadership";
import { ProjectsShowcase } from "../components/ProjectsShowcase";
import { Navbar } from "@/components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Leadership />
      <ProjectsShowcase />

      <footer className="py-8 text-center text-muted text-sm border-t border-border/10 mt-12 bg-background">
        <p>&copy; {new Date().getFullYear()} Ahmad Kurniawan Ibrahim. Designed with minimalism in mind.</p>
      </footer>
    </>
  );
}
