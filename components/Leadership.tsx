import { Globe, Users } from "lucide-react";

const leadershipItems = [
  {
    title: "Eagle Basketball Club Junior",
    role: "Leadership Role",
    icon: Users,
    text: "Spearheaded team organization, guided junior members, and cultivated discipline, accountability, and teamwork.",
  },
  {
    title: "HIMAIF",
    role: "Core Team Member",
    icon: Globe,
    text: "Contributed to the Informatics student association through event organization, resource coordination, and student advocacy.",
  },
];

export function Leadership() {
  return (
    <section id="leadership" className="border-t border-border py-20 md:py-24">
      <div className="container mx-auto max-w-5xl px-6">
        <div className="mb-10 max-w-2xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-accent">Beyond code</p>
          <h2 className="text-3xl font-semibold tracking-tight md:text-5xl">
            Organizational <span className="text-muted">Experience</span>
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {leadershipItems.map((item) => {
            const Icon = item.icon;
            return (
              <article key={item.title} className="h-full rounded-3xl border border-border bg-card p-8 shadow-sm shadow-black/5">
                <div className="mb-6 w-fit rounded-2xl border border-border bg-background p-3">
                  <Icon className="h-6 w-6 text-accent" aria-hidden="true" />
                </div>
                <h3 className="mb-2 text-xl font-semibold text-foreground">{item.title}</h3>
                <p className="mb-4 text-sm font-semibold text-accent">{item.role}</p>
                <p className="leading-relaxed text-muted">{item.text}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
