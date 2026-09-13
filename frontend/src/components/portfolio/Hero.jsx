import { motion } from "framer-motion";
import { ArrowRight, Download, Linkedin, Github, Mail, MapPin } from "lucide-react";
import { profile } from "../../constants/portfolioData";

const socials = [
  { icon: Linkedin, href: profile.linkedin, label: "LinkedIn profile", testId: "hero-linkedin-link" },
  { icon: Github, href: profile.github, label: "GitHub profile", testId: "hero-github-link" },
  { icon: Mail, href: `mailto:${profile.email}`, label: "Send email", testId: "hero-email-link" },
];

export const Hero = () => (
  <section id="home" data-testid="hero-section" className="hero-grid-bg relative overflow-hidden">
    <div className="pointer-events-none absolute -top-32 right-0 h-96 w-96 rounded-full bg-cobalt/10 blur-[120px]" />
    <div className="mx-auto grid w-full max-w-6xl gap-12 px-6 pb-20 pt-32 lg:grid-cols-[1.4fr_1fr] lg:items-center lg:pb-28 lg:pt-40">
      <motion.div initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease: "easeOut" }}>
        <p className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.25em] text-slate-400">
          <MapPin className="h-3.5 w-3.5 text-cobalt" /> {profile.location}
        </p>
        <h1 className="mt-5 font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-slate-50">
          {profile.name}
        </h1>
        <p className="mt-4 font-display text-xl sm:text-2xl font-semibold text-cobalt">
          {profile.headline}
        </p>
        <p className="mt-5 max-w-xl text-base leading-relaxed text-slate-400">
          {profile.valueProposition}
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-3">
          <a
            href="#projects"
            data-testid="hero-view-projects-button"
            className="inline-flex items-center gap-2 rounded-md bg-cobalt px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-cobalt-hover"
          >
            View Projects <ArrowRight className="h-4 w-4" />
          </a>
          <a
            href={profile.cvPath}
            download
            data-testid="hero-download-cv-button"
            className="inline-flex items-center gap-2 rounded-md border border-slate-600 px-5 py-3 text-sm font-semibold text-slate-200 transition-colors hover:border-cobalt hover:text-cobalt"
          >
            <Download className="h-4 w-4" /> Download CV
          </a>
          <div className="ml-1 flex items-center gap-1">
            {socials.map(({ icon: Icon, href, label, testId }) => (
              <a
                key={testId}
                href={href}
                data-testid={testId}
                aria-label={label}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                className="rounded-md p-2.5 text-slate-400 transition-colors hover:bg-surface hover:text-cobalt"
              >
                <Icon className="h-5 w-5" />
              </a>
            ))}
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 28 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
        className="grid grid-cols-2 gap-4"
        data-testid="hero-stats-grid"
      >
        {profile.stats.map((s) => (
          <div
            key={s.label}
            className="rounded-xl border border-border bg-surface/60 p-5 backdrop-blur-sm transition-colors hover:border-cobalt/50"
          >
            <p className="font-display text-3xl font-bold text-slate-50">{s.value}</p>
            <p className="mt-1.5 text-xs leading-snug text-slate-400">{s.label}</p>
          </div>
        ))}
      </motion.div>
    </div>
  </section>
);
