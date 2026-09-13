import { Section, FadeIn } from "./Section";
import { about, profile } from "../../constants/portfolioData";

export const About = () => (
  <Section
    id="about"
    testId="about-section"
    eyebrow="About"
    title="Commercial instinct, technical credibility"
  >
    <div className="grid gap-10 lg:grid-cols-[1.5fr_1fr]">
      <FadeIn className="space-y-5">
        {about.paragraphs.map((p, i) => (
          <p key={i} className="text-base leading-relaxed text-slate-300">
            {p}
          </p>
        ))}
      </FadeIn>

      <FadeIn delay={0.1}>
        <div className="rounded-xl border border-border bg-surface/60 p-6">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-slate-400">
            Suited for
          </p>
          <ul className="mt-4 space-y-2.5" data-testid="about-target-roles">
            {profile.targetRoles.map((role) => (
              <li key={role} className="flex items-start gap-2.5 text-sm text-slate-300">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cobalt" />
                {role}
              </li>
            ))}
          </ul>
        </div>
      </FadeIn>
    </div>
  </Section>
);
