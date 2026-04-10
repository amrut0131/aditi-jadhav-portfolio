import { useInView } from "@/hooks/useInView";

const education = [
  {
    id: "be-cs",
    degree: "Bachelor of Engineering in Computer Science",
    status: "Pursuing",
    institution: "Indira College of Engineering and Management",
    location: "Pune, Maharashtra",
    period: "2026",
    highlights: [
      "First Year",
      "Computer Science & Engineering",
      "Focused on programming fundamentals",
    ],
  },
  {
    id: "hsc",
    degree: "Higher Secondary Certificate (12th Grade)",
    status: "Completed",
    institution: "Tulashiramaji Patil Vidyalay",
    location: "Dharasur",
    period: "2025",
    highlights: ["Science Stream", "Secondary Schooling"],
  },
  {
    id: "ssc",
    degree: "Secondary School Certificate (10th Grade)",
    status: "Completed",
    institution: "Tulashiramaji Patil Vidyalay",
    location: "Dharasur",
    period: "– 2023",
    highlights: ["Schooling", "Foundation years"],
  },
];

export function Education() {
  const { ref, inView } = useInView();

  return (
    <section
      id="education"
      className="py-24 bg-background border-t border-border"
    >
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div
          ref={ref}
          className={`mb-14 transition-all duration-700 ease-out ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <p className="text-section-label mb-4">04 / Education</p>
          <h2 className="text-section-heading">Education</h2>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-6 top-0 bottom-0 w-px bg-border" />

          <div className="space-y-8">
            {education.map((edu, index) => (
              <AnimatedCard key={edu.id} delay={index * 120}>
                <div
                  data-ocid={`education-${edu.id}`}
                  className="relative pl-12 md:pl-16"
                >
                  {/* Timeline dot */}
                  <div
                    className={`absolute left-2 md:left-4 top-5 w-4 h-4 border-2 flex items-center justify-center ${
                      edu.status === "Pursuing"
                        ? "border-accent bg-accent"
                        : "border-border bg-background"
                    }`}
                  >
                    {edu.status === "Pursuing" && (
                      <div className="w-1.5 h-1.5 bg-accent-foreground" />
                    )}
                  </div>

                  <div className="border border-border bg-card p-6 hover:border-accent group transition-colors duration-200">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
                      <div>
                        <h3 className="font-display font-bold text-foreground group-hover:text-accent transition-colors duration-200">
                          {edu.degree}
                        </h3>
                        <p className="text-sm text-muted-foreground mt-1">
                          {edu.institution}
                        </p>
                        <p className="text-xs text-muted-foreground">
                          {edu.location}
                        </p>
                      </div>
                      <div className="flex flex-col items-start sm:items-end gap-1.5 flex-shrink-0">
                        <span
                          className={`text-xs px-2.5 py-1 font-mono font-semibold border ${
                            edu.status === "Pursuing"
                              ? "border-accent text-accent bg-accent/5"
                              : "border-border text-muted-foreground"
                          }`}
                        >
                          {edu.status}
                        </span>
                        <span className="text-xs text-muted-foreground font-mono">
                          {edu.period}
                        </span>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2 mt-3">
                      {edu.highlights.map((h) => (
                        <span
                          key={h}
                          className="text-xs text-muted-foreground border border-border px-2 py-0.5 font-mono"
                        >
                          {h}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function AnimatedCard({
  children,
  delay,
}: {
  children: React.ReactNode;
  delay: number;
}) {
  const { ref, inView } = useInView();
  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-700 ease-out ${
        inView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-6"
      }`}
    >
      {children}
    </div>
  );
}
