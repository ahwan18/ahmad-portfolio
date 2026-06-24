import { Users, Globe } from "lucide-react";

export function Leadership() {
  return (
    <section id="leadership" className="py-24 border-t border-border flex flex-col justify-center min-h-screen">
      <div className="container mx-auto px-6 max-w-5xl">
        <h2 className="text-3xl md:text-5xl font-semibold mb-12 tracking-tight">Organizational <br className="hidden md:block"/><span className="text-muted">Experience</span></h2>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-card rounded-3xl p-8 border border-border h-full shadow-sm shadow-black/5">
              <div className="p-3 bg-orange-500/10 rounded-2xl w-fit mb-6">
                <Users className="w-6 h-6 text-orange-500" />
              </div>
              <h3 className="text-xl font-medium text-foreground mb-2">Eagle Basketball Club Junior</h3>
              <p className="text-accent text-sm font-medium mb-4">Leadership Role</p>
              <p className="text-muted font-light leading-relaxed">
                Spearheaded team organization, guided junior members in athletic and personal development, and cultivated a culture of discipline and teamwork.
              </p>
          </div>

          <div className="bg-card rounded-3xl p-8 border border-border h-full shadow-sm shadow-black/5">
              <div className="p-3 bg-purple-500/10 rounded-2xl w-fit mb-6">
                <Globe className="w-6 h-6 text-purple-500" />
              </div>
              <h3 className="text-xl font-medium text-foreground mb-2">HIMAIF</h3>
              <p className="text-accent text-sm font-medium mb-4">Core Team Member</p>
              <p className="text-muted font-light leading-relaxed">
                Actively participated in the Informatics student association, organizing events, managing resources, and advocating for the student body within the university.
              </p>
          </div>
        </div>
      </div>
    </section>
  );
}
