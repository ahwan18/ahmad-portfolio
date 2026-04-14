import { FadeIn } from "./FadeIn";
import { GraduationCap, Award } from "lucide-react";

export function About() {
  return (
    <section id="about" className="py-24 border-y border-border/10 bg-black/[0.02] dark:bg-white/[0.02]">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          
          <FadeIn direction="left">
            <h2 className="text-3xl md:text-5xl font-semibold mb-6 tracking-tight">
              About & <br className="hidden md:block" />
              <span className="text-muted">Education</span>
            </h2>
            <p className="text-lg text-foreground/80 mb-6 font-light leading-relaxed">
              I am an Informatics student and a versatile Full-Stack Engineer with a profound passion for modern software development. My journey involves bridging robust server-side architecture with intuitive, native Apple-quality frontend experiences.
            </p>
          </FadeIn>

          <FadeIn direction="right">
            <div className="bg-card rounded-3xl p-8 border border-border/10 relative overflow-hidden shadow-sm shadow-black/5 transition-colors duration-300">
              {/* Subtle gradient effect in card */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-accent/10 rounded-full blur-3xl -mr-10 -mt-10 pointer-events-none" />
              
              <div className="flex items-start gap-4 mb-8">
                <div className="p-3 bg-black/10 dark:bg-white/10 rounded-2xl">
                  <GraduationCap className="w-6 h-6 text-foreground" />
                </div>
                <div>
                  <h3 className="text-xl font-medium text-foreground">STIKOM EL-RAHMA</h3>
                  <p className="text-muted">Informatics Student</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4 py-4 border-t border-border/10">
                <div className="p-3 bg-accent/10 rounded-2xl">
                  <Award className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <p className="text-sm text-accent uppercase tracking-widest font-semibold mb-1">Current GPA</p>
                  <p className="text-2xl font-semibold text-foreground tracking-tight">3.87 <span className="text-muted text-lg font-normal">/ 4.00</span></p>
                </div>
              </div>
            </div>
          </FadeIn>

        </div>
      </div>
    </section>
  );
}
