import { FadeIn } from "./FadeIn";
import { ArrowDown, Mail } from "lucide-react";

export function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] flex flex-col items-center justify-center pt-24 pb-12 overflow-hidden">
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_center,rgba(2,132,199,0.08),transparent_50%)] dark:bg-[radial-gradient(circle_at_center,rgba(0,122,255,0.08),transparent_50%)] top-0 left-0 w-full h-full pointer-events-none" />

      <div className="container mx-auto px-6 z-10 flex flex-col items-center text-center">
        <FadeIn delay={0.1}>
          <div className="inline-block py-1 px-3 rounded-full bg-black/5 border border-black/10 dark:bg-white/5 dark:border-white/10 text-sm md:text-base font-medium text-foreground/80 mb-6 backdrop-blur-sm">
            Apple Developer Academy Alumnus
          </div>
        </FadeIn>

        <FadeIn delay={0.2}>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-semibold tracking-tighter mb-6 text-foreground">
            Ahmad <br className="md:hidden" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-800 via-gray-600 to-gray-800 dark:from-gray-200 dark:via-gray-400 dark:to-gray-600">
              Kurniawan Ibrahim
            </span>
          </h1>
        </FadeIn>

        <FadeIn delay={0.3}>
          <p className="text-lg md:text-2xl text-muted max-w-2xl mx-auto mb-10 font-light leading-relaxed">
            A passionate Software Engineer Enthusiast with a strong foundation and hands-on experience in software development.
          </p>
        </FadeIn>

        <FadeIn delay={0.4}>
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <a
              href="mailto:ahmad@example.com"
              className="px-8 py-3 rounded-full bg-foreground text-background font-medium hover:scale-105 hover:bg-accent hover:text-white hover:shadow-lg hover:shadow-accent/20 transition-all duration-300 flex items-center gap-2 shadow-md shadow-black/10"
            >
              <Mail className="w-4 h-4" />
              Get in Touch
            </a>
          </div>
        </FadeIn>
      </div>

      {/* <FadeIn delay={0.6} className="absolute bottom-12">
        <div className="animate-bounce p-3 rounded-full bg-black/5 dark:bg-white/5 backdrop-blur-sm border border-black/10 dark:border-white/10 text-muted">
          <ArrowDown className="w-5 h-5" />
        </div>
      </FadeIn> */}
    </section>
  );
}
