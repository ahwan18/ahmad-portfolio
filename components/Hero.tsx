import { ArrowRight, Mail } from "lucide-react";

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-28 pb-16">
      <div className="container mx-auto max-w-6xl flex flex-col items-center text-center">
        <div className="inline-flex py-1.5 px-3 rounded-full border border-border bg-card text-sm md:text-base font-medium text-foreground mb-7">
          Apple Developer Academy Alumnus
        </div>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-semibold tracking-tighter mb-7 text-foreground">
          Ahmad <br className="md:hidden" />
          <span className="text-muted">Kurniawan Ibrahim</span>
        </h1>

        <p className="text-lg md:text-2xl text-muted max-w-3xl mx-auto mb-10 leading-relaxed">
          A passionate Software Engineer Enthusiast with a strong foundation and hands-on experience in software development.
        </p>

        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full sm:w-auto">
          <a
            href="mailto:ahmadkurniawanibrahim@gmail.com"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-foreground px-7 py-3.5 font-semibold text-background hover:bg-accent hover:text-white transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
          >
            <Mail className="w-4 h-4" aria-hidden="true" />
            Get in Touch
          </a>
          <a
            href="#projects"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-border bg-card px-7 py-3.5 font-semibold text-foreground hover:border-accent hover:text-accent transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
          >
            View Projects
            <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}
