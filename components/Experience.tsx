import { Briefcase, Code, Network, Rocket } from "lucide-react";

const experienceHighlights = [
  {
    icon: Network,
    title: "Product Development",
    text: "Built and iterated mobile applications from ideation to user testing.",
  },
  {
    icon: Code,
    title: "iOS Engineering",
    text: "Developed interfaces and app flows with SwiftUI and Apple frameworks.",
  },
  {
    icon: Rocket,
    title: "Research & Delivery",
    text: "Validated ideas through user research, prototypes, and feedback loops.",
  },
];

export function Experience() {
  return (
    <section id="experience" className="border-y border-border bg-card/40 py-20 md:py-24">
      <div className="container mx-auto max-w-5xl px-6">
        <div className="mb-10 flex items-center gap-4">
          <div className="rounded-2xl border border-border bg-background p-3">
            <Briefcase className="h-6 w-6 text-foreground" aria-hidden="true" />
          </div>
          <div>
            <p className="mb-1 text-sm font-semibold uppercase tracking-[0.2em] text-accent">Experience</p>
            <h2 className="text-3xl font-semibold tracking-tight md:text-5xl">Professional Experience</h2>
          </div>
        </div>

        <article className="rounded-3xl border border-border bg-card p-8 shadow-sm shadow-black/5 md:p-10">
          <div className="mb-7 flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <h3 className="text-2xl font-semibold text-foreground">Apple Developer Academy</h3>
              <p className="font-medium text-muted">Researcher & Mobile App Developer</p>
            </div>
            <span className="w-fit rounded-full border border-border bg-background px-3 py-1.5 text-sm font-semibold text-foreground">
              Product-based learning
            </span>
          </div>

          <p className="mb-8 max-w-3xl leading-relaxed text-foreground/80">
            Designed and developed end-to-end mobile applications through Challenge Based Learning, focusing on real-world problems, user-centered validation, and collaborative delivery with SwiftUI and Apple’s ecosystem.
          </p>

          <div className="grid gap-4 md:grid-cols-3">
            {experienceHighlights.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="rounded-2xl border border-border bg-background p-5">
                  <Icon className="mb-3 h-5 w-5 text-accent" aria-hidden="true" />
                  <h4 className="mb-1 text-sm font-semibold text-foreground">{item.title}</h4>
                  <p className="text-sm leading-relaxed text-muted">{item.text}</p>
                </div>
              );
            })}
          </div>
        </article>
      </div>
    </section>
  );
}
