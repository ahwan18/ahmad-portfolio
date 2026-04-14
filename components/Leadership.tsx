import { FadeIn } from "./FadeIn";
import { Users, Globe } from "lucide-react";

export function Leadership() {
  return (
    <section className="py-24 border-t border-border/10 bg-black/[0.01]">
      <div className="container mx-auto px-6 max-w-5xl">
        <FadeIn>
          <h2 className="text-3xl md:text-5xl font-semibold mb-12 tracking-tight">Organizational <br className="hidden md:block"/><span className="text-muted">Experience</span></h2>
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-8">
          <FadeIn delay={0.2}>
            <div className="bg-card rounded-3xl p-8 border border-border/10 h-full hover:border-border/20 transition-colors shadow-sm shadow-black/5">
              <div className="p-3 bg-orange-500/10 rounded-2xl w-fit mb-6">
                <Users className="w-6 h-6 text-orange-500" />
              </div>
              <h3 className="text-xl font-medium text-foreground mb-2">Eagle Basketball Club Junior</h3>
              <p className="text-accent text-sm font-medium mb-4">Leadership Role</p>
              <p className="text-muted font-light leading-relaxed">
                Spearheaded team organization, guided junior members in athletic and personal development, and cultivated a culture of discipline and teamwork.
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="bg-card rounded-3xl p-8 border border-border/10 h-full hover:border-border/20 transition-colors shadow-sm shadow-black/5">
              <div className="p-3 bg-purple-500/10 rounded-2xl w-fit mb-6">
                <Globe className="w-6 h-6 text-purple-500" />
              </div>
              <h3 className="text-xl font-medium text-foreground mb-2">HIMAIF</h3>
              <p className="text-accent text-sm font-medium mb-4">Core Team Member</p>
              <p className="text-muted font-light leading-relaxed">
                Actively participated in the Informatics student association, organizing events, managing resources, and advocating for the student body within the university.
              </p>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
