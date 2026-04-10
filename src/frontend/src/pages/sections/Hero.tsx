export function Hero() {
  const scrollToContact = () => {
    const el = document.getElementById("contact");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToAbout = () => {
    const el = document.getElementById("about");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-[calc(100vh-4rem)] flex flex-col items-center justify-center bg-background overflow-hidden"
    >
      {/* Subtle grid lines decoration */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(oklch(0.22 0 0 / 0.4) 1px, transparent 1px), linear-gradient(90deg, oklch(0.22 0 0 / 0.4) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />
      {/* Accent glow */}
      <div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, oklch(0.68 0.22 248 / 0.06) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-8 w-full">
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
          {/* Text content */}
          <p
            className="text-section-label mb-4 animate-fade-in"
            style={{ animationDelay: "0ms" }}
          >
            Portfolio
          </p>
          <h1
            className="text-hero mb-6 animate-fade-up"
            style={{ animationDelay: "100ms", opacity: 0 }}
          >
            Aditi
            <br />
            <span className="text-accent">Jadhav</span>
          </h1>
          <p
            className="text-lg font-display font-medium text-muted-foreground mb-3 animate-fade-up"
            style={{ animationDelay: "200ms", opacity: 0 }}
          >
            Aspiring Software Developer
          </p>
          <p
            className="text-base text-muted-foreground max-w-xl mb-10 leading-relaxed animate-fade-up"
            style={{ animationDelay: "300ms", opacity: 0 }}
          >
            Aiming for excellence in software with patience and consistency.
          </p>
          <div
            className="flex flex-col sm:flex-row items-center lg:items-start gap-4 animate-fade-up"
            style={{ animationDelay: "400ms", opacity: 0 }}
          >
            <button
              type="button"
              onClick={scrollToContact}
              data-ocid="hero-cta"
              className="px-8 py-4 bg-accent text-accent-foreground font-display font-semibold text-sm hover:opacity-90 transition-all duration-200 shadow-elevated"
            >
              Contact Me
            </button>
            <button
              type="button"
              onClick={scrollToAbout}
              data-ocid="hero-secondary-cta"
              className="px-8 py-4 border border-border text-foreground font-display font-semibold text-sm hover:border-accent hover:text-accent transition-all duration-200"
            >
              About Me
            </button>
          </div>
        </div>

        {/* Scroll indicator */}
        <div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-fade-in"
          style={{ animationDelay: "600ms", opacity: 0 }}
        >
          <span className="text-xs text-muted-foreground font-display tracking-widest uppercase">
            Scroll
          </span>
          <div className="w-px h-8 bg-gradient-to-b from-border to-transparent" />
        </div>
      </div>
    </section>
  );
}
