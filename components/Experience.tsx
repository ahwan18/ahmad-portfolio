import { Briefcase, Code, Network, Rocket } from "lucide-react";

export function Experience() {
  return (
    <section id="experience" className="min-h-screen flex flex-col justify-center py-24 border-y border-border bg-card/40">
      <div className="container mx-auto px-6 max-w-5xl">

        <div className="flex items-center gap-4 mb-12">
          <div className="p-3 bg-background border border-border rounded-2xl">
            <Briefcase className="w-6 h-6 text-foreground" />
          </div>
          <h2 className="text-3xl md:text-5xl font-semibold tracking-tight">Professional <span className="text-muted">Experience</span></h2>
        </div>

        <div className="bg-card border border-border rounded-3xl p-8 md:p-12 shadow-sm shadow-black/5">
            <div className="mb-8">
              <h3 className="text-2xl font-semibold text-foreground mb-2">Apple Developer Academy</h3>
              <p className="text-muted">Researcher & Mobile App Developer</p>
            </div>

            <p className="text-foreground/80 mb-8 font-light leading-relaxed max-w-3xl">
              Designed and developed end-to-end mobile applications through Challenge Based Learning (CBL), focusing on solving real-world problems with user-centered approaches. Collaborated in cross-functional teams to research, prototype, and deliver impactful iOS and spatial experiences using SwiftUI and Apple’s ecosystem.
            </p>

            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
              <div className="p-4 rounded-2xl bg-background border border-border">
                <Network className="w-5 h-5 text-accent mb-3" />
                <h4 className="font-medium text-foreground text-sm mb-1">Product Development</h4>
                <p className="text-xs text-muted">Built and iterated mobile applications from ideation to deployment</p>
              </div>
              <div className="p-4 rounded-2xl bg-background border border-border">
                <Code className="w-5 h-5 text-blue-500 mb-3" />
                <h4 className="font-medium text-foreground text-sm mb-1">iOS Engineering</h4>
                <p className="text-xs text-muted">Developed intuitive interfaces using SwiftUI within Apple ecosystem</p>
              </div>
              <div className="p-4 rounded-2xl bg-background border border-border">
                <Rocket className="w-5 h-5 text-orange-500 mb-3" />
                <h4 className="font-medium text-foreground text-sm mb-1">Collaboration & Research</h4>
                <p className="text-xs text-muted">Worked in teams to validate ideas through user research and testing</p>
              </div>
              <div className="p-4 rounded-2xl bg-background border border-border flex items-center justify-center">
                <div className="text-center">
                  <p className="text-xs text-muted uppercase tracking-widest font-semibold mb-1">Identity</p>
                  <p className="text-sm text-foreground font-medium">User-Centered<br />Mobile Developer</p>
                </div>
              </div>
            </div>
        </div>

      </div>
    </section>
  );
}
