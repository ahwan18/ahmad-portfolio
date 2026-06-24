const skills = [
  {
    category: "Languages",
    items: ["Python", "Java", "Node.js (JS/TS)", "PHP", "SwiftUI", "React"]
  },
  {
    category: "Frameworks",
    items: ["ExpressJS", "SwiftData", "Vision", "Next.js", "TailwindCSS"]
  },
  {
    category: "Tools & DBs",
    items: ["Git", "MySQL / MariaDB", "PostgreSQL"]
  }
];

export function Skills() {
  return (
    <section id="skills" className="min-h-screen flex flex-col justify-center py-24">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-semibold mb-4 tracking-tight">Technical Arsenal</h2>
          <p className="text-muted max-w-2xl mx-auto">Tools and technologies I use to build exceptional digital experiences.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {skills.map((skillGroup) => (
              <div key={skillGroup.category} className="h-full bg-card border border-border rounded-3xl p-8 shadow-sm shadow-black/5">
                <h3 className="text-lg font-semibold text-foreground mb-6 tracking-tight">{skillGroup.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.items.map((skill) => (
                    <span
                      key={skill}
                      className="px-4 py-2 rounded-full bg-background border border-border text-sm text-foreground font-medium cursor-default"
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
