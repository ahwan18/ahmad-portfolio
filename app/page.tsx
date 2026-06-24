import { Hero } from "../components/Hero";
import { About } from "../components/About";
import { Skills } from "../components/Skills";
import { Experience } from "../components/Experience";
import { Leadership } from "../components/Leadership";
import { ProjectsShowcase } from "../components/ProjectsShowcase";
import { siteUrl } from "@/lib/site";

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Ahmad Kurniawan Ibrahim",
  alternateName: ["Ahmad Portfolio", "Ahmad."],
  url: siteUrl,
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
      />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Leadership />
      <ProjectsShowcase />
    </>
  );
}
