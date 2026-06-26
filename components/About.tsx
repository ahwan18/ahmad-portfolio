import { Award, CheckCircle2, GraduationCap } from "lucide-react";

const strengths = [
  "Builds mobile and web products from research to prototype",
  "Comfortable translating user problems into practical features",
  "Clear communicator with experience in team-based product work",
];

export function About() {
  return (
    <section id="about" className="border-y border-border bg-card/40 py-20 md:py-24">
      <div className="container mx-auto max-w-5xl px-6">
        <div className="grid items-center gap-12 md:grid-cols-[0.95fr_1.05fr]">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-accent">Profile</p>
            <h2 className="mb-6 text-3xl font-semibold tracking-tight md:text-5xl">
              Education & <span className="text-muted">professional focus</span>
            </h2>
            <p className="mb-7 text-lg leading-relaxed text-foreground/80">
              I am an Informatics student at STIKOM EL-RAHMA and an Apple Developer Academy alumnus. My work sits at the intersection of iOS engineering, web development, and user-centered product thinking.
            </p>
            <div className="space-y-3">
              {strengths.map((strength) => (
                <div key={strength} className="flex items-start gap-3 text-sm font-medium text-foreground">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
                  <span>{strength}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-border bg-card p-8 shadow-sm shadow-black/5">
            <div className="mb-8 flex items-start gap-4">
              <div className="rounded-2xl bg-background p-3 ring-1 ring-border">
                <GraduationCap className="h-6 w-6 text-foreground" aria-hidden="true" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-foreground">STIKOM EL-RAHMA</h3>
                <p className="text-muted">Informatics Student</p>
              </div>
            </div>

            <div className="grid gap-4 border-t border-border pt-6 sm:grid-cols-2">
              <div className="rounded-2xl border border-border bg-background p-5">
                <p className="mb-1 text-xs font-semibold uppercase tracking-widest text-muted">Current GPA</p>
                <p className="text-2xl font-semibold tracking-tight text-foreground">
                  3.87 <span className="text-lg font-normal text-muted">/ 4.00</span>
                </p>
              </div>
              <div className="rounded-2xl border border-border bg-background p-5">
                <Award className="mb-3 h-5 w-5 text-accent" aria-hidden="true" />
                <p className="text-sm font-semibold text-foreground">Apple Developer Academy Alumnus</p>
                <p className="mt-1 text-sm text-muted">Product, research, and iOS development</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
