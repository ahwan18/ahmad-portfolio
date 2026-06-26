const skills = [
  {
    category: "Languages",
    summary: "Core programming languages used across mobile, backend, and web work.",
    items: ["SwiftUI", "TypeScript", "JavaScript", "Node.js", "Python", "Java", "PHP"],
  },
  {
    category: "Frameworks",
    summary: "Frameworks and platform APIs for building production-style products.",
    items: ["Next.js", "React", "ExpressJS", "SwiftData", "Vision", "TailwindCSS"],
  },
  {
    category: "Tools & Databases",
    summary: "Tools used for collaboration, persistence, and delivery workflows.",
    items: ["Git", "Figma", "Xcode", "MySQL", "MariaDB", "PostgreSQL"],
  },
];

export function Skills() {
  return (
    <section id="skills" className="py-20 md:py-24">
      <div className="container mx-auto max-w-5xl px-6">
        <div className="mb-12 max-w-2xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-accent">Capabilities</p>
          <h2 className="mb-4 text-3xl font-semibold tracking-tight md:text-5xl">Technical Skills</h2>
          <p className="text-muted">A practical stack for building iOS apps, responsive web interfaces, and full-stack systems.</p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {skills.map((skillGroup) => (
            <div key={skillGroup.category} className="h-full rounded-3xl border border-border bg-card p-7 shadow-sm shadow-black/5">
              <h3 className="mb-2 text-lg font-semibold tracking-tight text-foreground">{skillGroup.category}</h3>
              <p className="mb-6 text-sm leading-relaxed text-muted">{skillGroup.summary}</p>
              <div className="flex flex-wrap gap-2">
                {skillGroup.items.map((skill) => (
                  <span
                    key={skill}
                    className="cursor-default rounded-full border border-border bg-background px-3 py-1.5 text-sm font-medium text-foreground"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
