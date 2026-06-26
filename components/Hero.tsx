import { ArrowRight, BriefcaseBusiness, Download, Mail } from "lucide-react";

const roleBadges = [
  "iOS Developer",
  "Next.js Developer",
  "Full-stack Developer",
  "Open to Internship",
];

const highlights = [
  { value: "5+", label: "Product projects" },
  { value: "30+", label: "Users validated" },
  { value: "3.87", label: "Current GPA" },
];

export function Hero() {
  return (
    <section id="home" className="relative flex min-h-[88vh] flex-col items-center justify-center px-6 pb-14 pt-28">
      <div className="container mx-auto flex max-w-6xl flex-col items-center text-center">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-card px-3.5 py-1.5 text-sm font-semibold text-foreground shadow-sm shadow-black/5">
          <BriefcaseBusiness className="h-4 w-4 text-accent" aria-hidden="true" />
          Apple Developer Academy Alumnus
        </div>

        <h1 className="mb-6 max-w-5xl text-5xl font-semibold tracking-tighter text-foreground md:text-7xl lg:text-8xl">
          Ahmad <br className="md:hidden" />
          <span className="text-muted">Kurniawan Ibrahim</span>
        </h1>

        <p className="mx-auto mb-7 max-w-3xl text-lg leading-relaxed text-muted md:text-2xl">
          Software Engineering student focused on iOS, web, and full-stack development. I build practical products with SwiftUI, Next.js, and Node.js.
        </p>

        <div className="mb-10 flex flex-wrap justify-center gap-2.5">
          {roleBadges.map((badge) => (
            <span key={badge} className="rounded-full border border-border bg-card px-3 py-1.5 text-sm font-medium text-foreground">
              {badge}
            </span>
          ))}
        </div>

        <div className="flex w-full flex-col items-stretch gap-3 sm:w-auto sm:flex-row sm:items-center">
          <a
            href="#projects"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-foreground px-7 py-3.5 font-semibold text-background hover:bg-accent hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
          >
            View Projects
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </a>
          <a
            href="/ahmad-kurniawan-ibrahim-cv.pdf"
            download
            className="inline-flex items-center justify-center gap-2 rounded-full border border-border bg-card px-7 py-3.5 font-semibold text-foreground hover:border-accent hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
          >
            <Download className="h-4 w-4" aria-hidden="true" />
            Download Resume
          </a>
          <a
            href="mailto:ahmadkurniawanibrahim@gmail.com"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-border bg-background px-7 py-3.5 font-semibold text-foreground hover:border-accent hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
          >
            <Mail className="h-4 w-4" aria-hidden="true" />
            Contact Me
          </a>
        </div>

        <div className="mt-14 grid w-full max-w-3xl grid-cols-1 gap-3 sm:grid-cols-3">
          {highlights.map((item) => (
            <div key={item.label} className="rounded-3xl border border-border bg-card p-5 text-left shadow-sm shadow-black/5">
              <p className="text-2xl font-semibold tracking-tight text-foreground">{item.value}</p>
              <p className="mt-1 text-sm font-medium text-muted">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
