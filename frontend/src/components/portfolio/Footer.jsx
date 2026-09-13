import { ArrowUp, Linkedin, Github, Mail } from "lucide-react";
import { navLinks, profile } from "../../constants/portfolioData";

export const Footer = () => (
  <footer data-testid="footer" className="border-t border-border">
    <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-6 px-6 py-10 sm:flex-row">
      <div className="text-center sm:text-left">
        <p className="font-display text-sm font-semibold text-slate-50">{profile.fullName}</p>
        <p className="mt-1 text-xs text-slate-500">
          © {new Date().getFullYear()} Ilya Daniliuk. All rights reserved.
        </p>
      </div>

      <nav className="flex flex-wrap justify-center gap-x-5 gap-y-2">
        {navLinks.slice(1).map((l) => (
          <a
            key={l.href}
            href={l.href}
            data-testid={`footer-link-${l.label.toLowerCase()}`}
            className="text-xs text-slate-500 transition-colors hover:text-slate-200"
          >
            {l.label}
          </a>
        ))}
      </nav>

      <div className="flex items-center gap-1">
        <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" data-testid="footer-linkedin-link" className="rounded-md p-2 text-slate-500 hover:text-cobalt">
          <Linkedin className="h-4 w-4" />
        </a>
        <a href={profile.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" data-testid="footer-github-link" className="rounded-md p-2 text-slate-500 hover:text-cobalt">
          <Github className="h-4 w-4" />
        </a>
        <a href={`mailto:${profile.email}`} aria-label="Email" data-testid="footer-email-link" className="rounded-md p-2 text-slate-500 hover:text-cobalt">
          <Mail className="h-4 w-4" />
        </a>
        <a href="#home" aria-label="Back to top" data-testid="footer-back-to-top" className="ml-2 rounded-md border border-border p-2 text-slate-500 hover:border-cobalt hover:text-cobalt">
          <ArrowUp className="h-4 w-4" />
        </a>
      </div>
    </div>
  </footer>
);
