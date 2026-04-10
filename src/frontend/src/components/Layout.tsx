import { Nav } from "./Nav";

export function Layout({ children }: { children: React.ReactNode }) {
  const year = new Date().getFullYear();
  const hostname =
    typeof window !== "undefined" ? window.location.hostname : "";
  const caffeineUrl = `https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(hostname)}`;

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Nav />
      <main className="flex-1 pt-16">{children}</main>
      <footer className="bg-card border-t border-border">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 py-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-7 h-7 bg-accent flex items-center justify-center text-accent-foreground font-display font-bold text-xs">
                AJ
              </div>
              <span className="text-sm font-display font-semibold text-foreground">
                Aditi Jadhav
              </span>
            </div>
            <p className="text-xs text-muted-foreground text-center">
              © {year}. Built with love using{" "}
              <a
                href={caffeineUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent hover:opacity-80 transition-opacity duration-200"
              >
                caffeine.ai
              </a>
            </p>
            <div className="flex items-center gap-1">
              <span className="text-xs text-muted-foreground">
                Aspiring Software Developer
              </span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
