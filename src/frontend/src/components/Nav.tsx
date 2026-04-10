import { useEffect, useState } from "react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Goals", href: "#goals" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("about");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      const sections = navLinks.map((l) => l.href.slice(1));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (href: string) => {
    const id = href.slice(1);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <header
      data-ocid="nav"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-card border-b border-border shadow-subtle backdrop-blur-sm"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <button
            type="button"
            onClick={() => scrollTo("#about")}
            className="flex items-center gap-2 group"
            aria-label="Back to top"
          >
            <div className="w-8 h-8 bg-accent flex items-center justify-center text-accent-foreground font-display font-bold text-sm">
              AJ
            </div>
          </button>

          <nav
            className="hidden md:flex items-center gap-8"
            aria-label="Main navigation"
          >
            {navLinks.map((link) => (
              <button
                type="button"
                key={link.href}
                onClick={() => scrollTo(link.href)}
                className={`relative pb-1 text-sm font-medium font-display transition-colors duration-200 group ${
                  activeSection === link.href.slice(1)
                    ? "text-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {link.label}
                <span
                  className={`absolute bottom-0 left-0 w-full h-[2px] bg-accent origin-left transition-transform duration-300 ${
                    activeSection === link.href.slice(1)
                      ? "scale-x-100"
                      : "scale-x-0 group-hover:scale-x-100"
                  }`}
                />
              </button>
            ))}
          </nav>

          <button
            type="button"
            onClick={() => scrollTo("#contact")}
            data-ocid="nav-cta"
            className="hidden md:flex items-center px-4 py-2 text-sm font-semibold font-display bg-accent text-accent-foreground hover:opacity-90 transition-opacity duration-200"
          >
            Contact Me
          </button>

          <button
            type="button"
            className="md:hidden p-2 text-muted-foreground hover:text-foreground transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            <div className="w-5 flex flex-col gap-1.5">
              <span
                className={`block h-px bg-current transition-all duration-200 ${menuOpen ? "rotate-45 translate-y-2.5" : ""}`}
              />
              <span
                className={`block h-px bg-current transition-all duration-200 ${menuOpen ? "opacity-0" : ""}`}
              />
              <span
                className={`block h-px bg-current transition-all duration-200 ${menuOpen ? "-rotate-45 -translate-y-2.5" : ""}`}
              />
            </div>
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-card border-b border-border">
          <nav
            className="flex flex-col px-6 py-4 gap-1"
            aria-label="Mobile navigation"
          >
            {navLinks.map((link) => (
              <button
                type="button"
                key={link.href}
                onClick={() => scrollTo(link.href)}
                className={`text-left py-3 text-sm font-medium font-display border-b border-border last:border-0 transition-colors duration-200 ${
                  activeSection === link.href.slice(1)
                    ? "text-accent"
                    : "text-muted-foreground"
                }`}
              >
                {link.label}
              </button>
            ))}
            <button
              type="button"
              onClick={() => scrollTo("#contact")}
              className="mt-3 py-3 text-sm font-semibold font-display bg-accent text-accent-foreground text-center"
            >
              Contact Me
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}
