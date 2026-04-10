import { useInView } from "@/hooks/useInView";

const coreStrengths = [
  {
    name: "Teamwork",
    desc: "Collaborative by nature, thrives in group settings",
  },
  { name: "Consistency", desc: "Shows up and puts in the work, every day" },
  {
    name: "Adaptability",
    desc: "Adjusts quickly to new challenges and environments",
  },
  {
    name: "Drive to Improve",
    desc: "Strong willingness to learn and grow continuously",
  },
];

const technicalSkills = [
  { name: "C Programming", level: "Fundamentals", color: "accent" },
  { name: "Python", level: "Currently Learning", color: "muted" },
  { name: "Problem Solving", level: "Beginner Level", color: "muted" },
  { name: "Programming Fundamentals", level: "Core", color: "accent" },
];

export function Skills() {
  const { ref: headingRef, inView: headingInView } = useInView();
  const { ref: strengthsRef, inView: strengthsInView } = useInView();
  const { ref: techRef, inView: techInView } = useInView();

  return (
    <section id="skills" className="py-24 bg-background border-t border-border">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div
          ref={headingRef}
          className={`mb-14 transition-all duration-700 ease-out ${
            headingInView
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-6"
          }`}
        >
          <p className="text-section-label mb-4">02 / Skills</p>
          <h2 className="text-section-heading">Skills &amp; Strengths</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Core Strengths */}
          <div ref={strengthsRef}>
            <h3 className="text-sm font-semibold font-display text-muted-foreground tracking-wider uppercase mb-6 border-b border-border pb-3">
              Core Strengths
            </h3>
            <div className="space-y-3">
              {coreStrengths.map((s, i) => (
                <div
                  key={s.name}
                  data-ocid={`skill-strength-${i}`}
                  style={{ transitionDelay: `${i * 80}ms` }}
                  className={`flex items-start gap-4 p-4 border border-border bg-card hover:border-accent group transition-all duration-500 ease-out ${
                    strengthsInView
                      ? "opacity-100 translate-x-0"
                      : "opacity-0 -translate-x-6"
                  }`}
                >
                  <div
                    className="w-1 h-full bg-border group-hover:bg-accent transition-colors duration-200 self-stretch flex-shrink-0 rounded-full"
                    style={{ minHeight: "2rem" }}
                  />
                  <div>
                    <p className="font-display font-semibold text-foreground text-sm">
                      {s.name}
                    </p>
                    <p className="text-xs text-muted-foreground mt-0.5">
                      {s.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Technical Skills */}
          <div ref={techRef}>
            <h3 className="text-sm font-semibold font-display text-muted-foreground tracking-wider uppercase mb-6 border-b border-border pb-3">
              Technical Skills
            </h3>
            <div className="grid grid-cols-2 gap-3">
              {technicalSkills.map((s, i) => (
                <div
                  key={s.name}
                  data-ocid={`skill-tech-${i}`}
                  style={{ transitionDelay: `${i * 80}ms` }}
                  className={`border border-border bg-card p-4 hover:border-accent group transition-all duration-500 ease-out ${
                    techInView
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-6"
                  }`}
                >
                  <p className="font-display font-bold text-foreground text-sm leading-tight">
                    {s.name}
                  </p>
                  <span
                    className={`inline-block mt-2 text-xs px-2 py-0.5 font-mono border ${
                      s.color === "accent"
                        ? "border-accent text-accent bg-accent/5"
                        : "border-border text-muted-foreground"
                    }`}
                  >
                    {s.level}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
