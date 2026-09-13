import { Briefcase, Cloud, TrendingUp } from "lucide-react";
import { Section, FadeIn } from "./Section";
import { expertise } from "../../constants/portfolioData";

const icons = { Briefcase, Cloud, TrendingUp };

export const Expertise = () => (
  <Section
    id="expertise"
    testId="expertise-section"
    eyebrow="Core Value"
    title="What I bring to a technology business"
    className="bg-surface/30"
  >
    <div className="grid gap-6 md:grid-cols-3">
      {expertise.map((group, i) => {
        const Icon = icons[group.icon];
        return (
          <FadeIn key={group.id} delay={i * 0.08}>
            <div
              data-testid={`expertise-card-${group.id}`}
              className="h-full rounded-xl border border-border bg-surface/60 p-7 transition-all duration-300 hover:-translate-y-1 hover:border-cobalt/50"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-cobalt-muted text-cobalt">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-5 font-display text-xl font-medium text-slate-50">{group.title}</h3>
              <ul className="mt-4 space-y-2.5">
                {group.points.map((p) => (
                  <li key={p} className="flex items-start gap-2.5 text-sm leading-relaxed text-slate-400">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-slate-500" />
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>
        );
      })}
    </div>
  </Section>
);
