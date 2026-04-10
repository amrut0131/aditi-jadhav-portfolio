import { useInView } from "@/hooks/useInView";

const goals = [
  {
    index: "01",
    title: "Build Real-World Projects",
    desc: "Create software projects that solve genuine problems and demonstrate practical skills to employers.",
  },
  {
    index: "02",
    title: "Strengthen CS Fundamentals",
    desc: "Master data structures, algorithms, and core computer science concepts that underpin great software.",
  },
  {
    index: "03",
    title: "Improve Problem-Solving",
    desc: "Develop systematic thinking and coding fluency through consistent practice on competitive platforms.",
  },
  {
    index: "04",
    title: "Land a Software Internship",
    desc: "Prepare rigorously to secure hands-on industry experience and grow as a professional developer.",
  },
];

export function Goals() {
  const { ref: headingRef, inView: headingInView } = useInView();
  const { ref: gridRef, inView: gridInView } = useInView();

  return (
    <section id="goals" className="py-24 bg-card border-t border-border">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div
          ref={headingRef}
          className={`mb-14 transition-all duration-700 ease-out ${
            headingInView
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-6"
          }`}
        >
          <p className="text-section-label mb-4">03 / Goals</p>
          <h2 className="text-section-heading">Goals</h2>
        </div>

        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {goals.map((goal, i) => (
            <div
              key={goal.index}
              data-ocid={`goal-${goal.index}`}
              style={{ transitionDelay: `${i * 100}ms` }}
              className={`border border-border bg-background p-6 group hover:border-accent transition-all duration-500 ease-out hover:shadow-elevated ${
                gridInView
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
            >
              <div className="flex items-start gap-4">
                <span className="text-xs font-mono text-accent font-semibold tabular-nums flex-shrink-0 mt-1">
                  {goal.index}
                </span>
                <div>
                  <h3 className="font-display font-bold text-foreground mb-2 group-hover:text-accent transition-colors duration-200">
                    {goal.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {goal.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
