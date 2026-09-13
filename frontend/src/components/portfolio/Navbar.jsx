import { useEffect, useState } from "react";
import { Menu, X, Download } from "lucide-react";
import { navLinks, profile } from "../../constants/portfolioData";

export const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      data-testid="navbar"
      className={`fixed inset-x-0 top-0 z-50 border-b transition-colors duration-300 ${
        scrolled ? "border-border bg-obsidian/85 backdrop-blur-md" : "border-transparent bg-transparent"
      }`}
    >
      <nav className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-6">
        <a
          href="#home"
          data-testid="nav-brand"
          className="font-display text-base font-bold tracking-tight text-slate-50"
        >
          Ilya Daniliuk
          <span className="ml-2 hidden font-mono text-[10px] font-normal uppercase tracking-[0.2em] text-slate-500 sm:inline">
            BD × Tech × Cloud
          </span>
        </a>

        <div className="hidden items-center gap-1 lg:flex">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              data-testid={`nav-link-${l.label.toLowerCase()}`}
              className="rounded-md px-3 py-2 text-sm text-slate-400 transition-colors hover:text-slate-50"
            >
              {l.label}
            </a>
          ))}
          <a
            href={profile.cvPath}
            download
            data-testid="nav-download-cv-button"
            className="ml-3 inline-flex items-center gap-2 rounded-md bg-cobalt px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-cobalt-hover"
          >
            <Download className="h-4 w-4" /> CV
          </a>
        </div>

        <button
          data-testid="nav-mobile-menu-button"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen(!open)}
          className="rounded-md p-2 text-slate-300 hover:bg-surface lg:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {open && (
        <div data-testid="nav-mobile-menu" className="border-t border-border bg-obsidian/95 backdrop-blur-md lg:hidden">
          <div className="flex flex-col px-6 py-4">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                data-testid={`nav-mobile-link-${l.label.toLowerCase()}`}
                onClick={() => setOpen(false)}
                className="border-b border-border/50 py-3 text-sm text-slate-300 last:border-0 hover:text-slate-50"
              >
                {l.label}
              </a>
            ))}
            <a
              href={profile.cvPath}
              download
              data-testid="nav-mobile-download-cv-button"
              className="mt-3 inline-flex items-center justify-center gap-2 rounded-md bg-cobalt px-4 py-2.5 text-sm font-medium text-white"
            >
              <Download className="h-4 w-4" /> Download CV
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
