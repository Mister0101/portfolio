import { Briefcase, GraduationCap, HeartHandshake } from "lucide-react";
import { Section, FadeIn } from "./Section";
import { experience } from "../../constants/portfolioData";

const typeIcon = { Work: Briefcase, Education: GraduationCap, Volunteer: HeartHandshake };

export const Experience = () => (
  <Section
    id="experience"
    testId="experience-section"
    eyebrow="Professional Experience"
    title="A career built on delivery"
    intro="The short version — full detail in the downloadable CV."
  >
    <div className="relative ml-3 border-l border-border pl-8 lg:ml-6">
      {experience.map((role, i) => {
        const Icon = typeIcon[role.type] || Briefcase;
        return (
          <FadeIn key={role.position + role.company} delay={i * 0.08} className="relative pb-12 last:pb-0">
            <span className="absolute -left-[41px] flex h-6 w-6 items-center justify-center rounded-full border border-cobalt/50 bg-obsidian lg:-left-[53px]">
              <Icon className="h-3 w-3 text-cobalt" />
            </span>
            <article
              data-testid={`experience-item-${role.type.toLowerCase()}-${i}`}
              className="rounded-xl border border-border bg-surface/60 p-6 transition-colors hover:border-cobalt/40"
            >
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div>
                  <h3 className="font-display text-lg font-semibold text-slate-50">{role.position}</h3>
                  <p className="mt-0.5 text-sm text-slate-400">
                    {role.company}
                    {role.location ? ` · ${role.location}` : ""}
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <span className="rounded-full bg-cobalt-muted px-2.5 py-1 font-mono text-[11px] uppercase tracking-wider text-cobalt">
                    {role.type}
                  </span>
                  <span className="font-mono text-xs text-slate-500">{role.dates}</span>
                </div>
              </div>
              <ul className="mt-4 space-y-2">
                {role.points.map((p) => (
                  <li key={p} className="flex items-start gap-2.5 text-sm leading-relaxed text-slate-400">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-slate-500" />
                    {p}
                  </li>
                ))}
              </ul>
            </article>
          </FadeIn>
        );
      })}
    </div>
  </Section>
);
