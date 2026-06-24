import { Hero } from "../components/Hero";
import { About } from "../components/About";
import { Skills } from "../components/Skills";
import { Experience } from "../components/Experience";
import { Leadership } from "../components/Leadership";
import { ProjectsShowcase } from "../components/ProjectsShowcase";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Leadership />
      <ProjectsShowcase />
    </>
  );
}
