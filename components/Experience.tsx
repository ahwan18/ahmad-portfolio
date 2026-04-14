import { FadeIn } from "./FadeIn";
import { Briefcase, Code, Network, Rocket } from "lucide-react";

export function Experience() {
  return (
    <section id="experience" className="py-24 border-y border-border/10 bg-black/[0.02] dark:bg-white/[0.01]">
      <div className="container mx-auto px-6 max-w-5xl">

        <FadeIn>
          <div className="flex items-center gap-4 mb-12">
            <div className="p-3 bg-black/10 dark:bg-white/10 rounded-2xl">
              <Briefcase className="w-6 h-6 text-foreground" />
            </div>
            <h2 className="text-3xl md:text-5xl font-semibold tracking-tight">Professional <span className="text-muted">Experience</span></h2>
          </div>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div className="bg-card border border-border/10 rounded-3xl p-8 md:p-12 relative overflow-hidden shadow-sm shadow-black/5 transition-colors duration-300">
            <div className="mb-8">
              <h3 className="text-2xl font-semibold text-foreground mb-2">Apple Developer Academy</h3>
              <p className="text-muted">Researcher & Full-Stack App Developer</p>
            </div>

            <p className="text-foreground/80 mb-8 font-light leading-relaxed max-w-3xl">
              Architected end-to-end applications through rigorous Challenge Based Learning (CBL). Spearheaded cross-functional teams to design, prototype, and ship high-impact spatial and mobile solutions utilizing SwiftUI, VisionOS, and seamless backend integration.
            </p>

            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
              <div className="p-4 rounded-2xl bg-black/5 dark:bg-white/5 border border-border/10 transition-colors">
                <Network className="w-5 h-5 text-accent mb-3" />
                <h4 className="font-medium text-foreground text-sm mb-1">Architecture</h4>
                <p className="text-xs text-muted">Node.js/ExpressJS robust backends</p>
              </div>
              <div className="p-4 rounded-2xl bg-black/5 dark:bg-white/5 border border-border/10 transition-colors">
                <Code className="w-5 h-5 text-blue-500 mb-3" />
                <h4 className="font-medium text-foreground text-sm mb-1">Frontend Engineering</h4>
                <p className="text-xs text-muted">SwiftUI & VisionOS immersion</p>
              </div>
              <div className="p-4 rounded-2xl bg-black/5 dark:bg-white/5 border border-border/10 transition-colors">
                <Rocket className="w-5 h-5 text-orange-500 mb-3" />
                <h4 className="font-medium text-foreground text-sm mb-1">Impact & Delivery</h4>
                <p className="text-xs text-muted">Shipped prototypes at scale</p>
              </div>
              <div className="p-4 rounded-2xl bg-black/5 dark:bg-white/5 border border-border/10 flex items-center justify-center">
                <div className="text-center">
                  <p className="text-xs text-muted uppercase tracking-widest font-semibold mb-1">Identity</p>
                  <p className="text-sm text-foreground font-medium">Multidisciplinary<br />Full-Stack</p>
                </div>
              </div>
            </div>
          </div>
        </FadeIn>

      </div>
    </section>
  );
}
