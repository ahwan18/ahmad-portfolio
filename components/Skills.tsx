import { FadeIn } from "./FadeIn";

const skills = [
  {
    category: "Languages",
    items: ["Python", "Java", "Node.js (JS)", "PHP", "SwiftUI"]
  },
  {
    category: "Frameworks",
    items: ["ExpressJS", "SwiftData", "Vision"]
  },
  {
    category: "Tools & DBs",
    items: ["Git", "MySQL / MariaDB"]
  }
];

export function Skills() {
  return (
    <section id="skills" className="py-24">
      <div className="container mx-auto px-6 max-w-5xl">
        <FadeIn delay={0.1}>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-semibold mb-4 tracking-tight">Technical Arsenal</h2>
            <p className="text-muted max-w-2xl mx-auto">Tools and technologies I use to build exceptional digital experiences.</p>
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-3 gap-6">
          {skills.map((skillGroup, idx) => (
            <FadeIn key={skillGroup.category} delay={0.2 + idx * 0.1}>
              <div className="h-full bg-card/80 backdrop-blur-sm border border-border/10 rounded-3xl p-8 transition-colors shadow-sm shadow-black/5">
                <h3 className="text-lg font-semibold text-foreground mb-6 tracking-tight">{skillGroup.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.items.map((skill) => (
                    <span
                      key={skill}
                      className="px-4 py-2 rounded-full bg-black/5 dark:bg-white/5 border border-border/10 text-sm text-foreground/80 font-medium cursor-default transition-all duration-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
