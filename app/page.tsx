import { Hero } from "../components/Hero";
import { About } from "../components/About";
import { Skills } from "../components/Skills";
import { Experience } from "../components/Experience";
import { Leadership } from "../components/Leadership";
import { ProjectsShowcase } from "../components/ProjectsShowcase";
import { PageSlider } from "../components/PageSlider";

export default function Home() {
  return (
    <PageSlider>
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Leadership />
      <ProjectsShowcase />
    </PageSlider>
  );
}
