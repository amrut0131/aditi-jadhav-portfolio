import { useInView } from "@/hooks/useInView";

const stats = [
  { label: "Year", value: "1st Year", sub: "Computer Science" },
  { label: "Focus", value: "Programming", sub: "Fundamentals & DSA" },
  { label: "Language", value: "C / Python", sub: "Currently Learning" },
  { label: "Goal", value: "Software Dev", sub: "Internship Ready" },
];

export function About() {
  const { ref: headingRef, inView: headingInView } = useInView();
  const { ref: textRef, inView: textInView } = useInView();
  const { ref: statsRef, inView: statsInView } = useInView();

  return (
    <section id="about" className="py-24 bg-card border-t border-border">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Section label + heading */}
          <div>
            <div
              ref={headingRef}
              className={`transition-all duration-700 ease-out ${
                headingInView
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-6"
              }`}
            >
              <p className="text-section-label mb-4">01 / About</p>
              <h2 className="text-section-heading mb-8">About Me</h2>
            </div>
            <div
              ref={textRef}
              className={`space-y-5 text-muted-foreground leading-relaxed transition-all duration-700 ease-out delay-150 ${
                textInView
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-6"
              }`}
            >
              <p>
                I am a first-year Computer Science student at{" "}
                <span className="text-foreground font-medium">
                  Indira College of Engineering and Management, Pune
                </span>
                .
              </p>
              <p>
                My journey into software development is built on{" "}
                <span className="text-accent">
                  discipline, consistency, and a strong sense of direction
                </span>
                . While my path is not traditional, it has shaped my approach to
                learning and problem-solving with focus and structure.
              </p>
              <p>
                I am currently strengthening my foundation in programming and
                problem solving, with a clear goal of growing into a skilled and
                reliable software developer.
              </p>
            </div>
          </div>

          {/* Quick stats */}
          <div ref={statsRef} className="grid grid-cols-2 gap-4">
            {stats.map((stat, i) => (
              <div
                key={stat.label}
                style={{ transitionDelay: `${i * 100}ms` }}
                className={`border border-border bg-background p-5 group hover:border-accent transition-all duration-500 ease-out ${
                  statsInView
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 -translate-x-4"
                }`}
              >
                <p className="text-section-label mb-2">{stat.label}</p>
                <p className="font-display font-bold text-foreground text-lg leading-tight">
                  {stat.value}
                </p>
                <p className="text-xs text-muted-foreground mt-1">{stat.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
