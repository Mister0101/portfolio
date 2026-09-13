import { Github, ExternalLink, ArrowUpRight } from "lucide-react";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "../ui/dialog";
import { Section, FadeIn } from "./Section";
import { profile, projects } from "../../constants/portfolioData";

const ProjectVisual = ({ project }) => (
  <div className="relative aspect-[16/9] overflow-hidden border-b border-border bg-[#0B1220]">
    {project.screenshot ? (
      <img
        src={project.screenshot}
        alt={`${project.name} screenshot`}
        loading="lazy"
        className="h-full w-full object-cover"
      />
    ) : (
      <div className="flex h-full flex-col p-5" aria-label={`${project.name} preview placeholder`}>
        <div className="flex items-center gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-slate-700" />
          <span className="h-2.5 w-2.5 rounded-full bg-slate-700" />
          <span className="h-2.5 w-2.5 rounded-full bg-slate-700" />
        </div>
        <div className="mt-5 flex flex-1 gap-4">
          <div className="flex w-1/4 flex-col gap-2.5">
            <div className="h-8 rounded-md" style={{ backgroundColor: `${project.accent}33` }} />
            <div className="h-3 w-4/5 rounded bg-slate-800" />
            <div className="h-3 w-3/5 rounded bg-slate-800" />
            <div className="h-3 w-4/6 rounded bg-slate-800" />
          </div>
          <div className="flex flex-1 flex-col gap-3">
            <div className="h-4 w-2/3 rounded" style={{ backgroundColor: `${project.accent}55` }} />
            <div className="grid flex-1 grid-cols-2 gap-3">
              <div className="rounded-md border border-border bg-surface/70" />
              <div className="rounded-md border border-border bg-surface/70" />
              <div className="col-span-2 rounded-md border border-border bg-surface/70" />
            </div>
          </div>
        </div>
      </div>
    )}
  </div>
);

const RepoLink = ({ project, testId }) =>
  project.repo ? (
    <a
      href={project.repo}
      target="_blank"
      rel="noopener noreferrer"
      data-testid={testId}
      aria-label={`${project.name} GitHub repository`}
      className="inline-flex items-center gap-1.5 text-sm text-slate-400 transition-colors hover:text-cobalt"
    >
      <Github className="h-4 w-4" /> Repository
    </a>
  ) : (
    <span data-testid={testId} className="inline-flex items-center gap-1.5 text-sm text-slate-600">
      <Github className="h-4 w-4" /> Repo link to be added
    </span>
  );

export const Projects = () => (
  <Section
    id="projects"
    testId="projects-section"
    eyebrow="Featured Projects"
    title="What I've actually built"
    intro="Hands-on software, cloud and data work — each project opens into a short case study."
  >
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {projects.map((project, i) => (
        <FadeIn key={project.id} delay={i * 0.08}>
          <Dialog>
            <article
              data-testid={`project-card-${project.id}`}
              className="group flex h-full flex-col overflow-hidden rounded-xl border border-border bg-surface/60 transition-all duration-300 hover:-translate-y-1 hover:border-cobalt/50"
            >
              <ProjectVisual project={project} />
              <div className="flex flex-1 flex-col p-6">
                <div className="flex items-center justify-between gap-3">
                  <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-slate-500">
                    {project.context}
                  </p>
                  <span
                    className="rounded-full px-2.5 py-1 text-[11px] font-medium"
                    style={{ backgroundColor: `${project.accent}1f`, color: project.accent }}
                  >
                    {project.role}
                  </span>
                </div>
                <h3 className="mt-3 font-display text-lg font-semibold text-slate-50">
                  {project.name}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-400">{project.summary}</p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {project.tech.slice(0, 4).map((t) => (
                    <span
                      key={t}
                      className="rounded-md border border-border px-2 py-1 font-mono text-[11px] text-slate-400"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <div className="mt-5 flex items-center justify-between border-t border-border pt-4">
                  <RepoLink project={project} testId={`project-repo-link-${project.id}`} />
                  <DialogTrigger asChild>
                    <button
                      data-testid={`project-case-study-button-${project.id}`}
                      className="inline-flex items-center gap-1 text-sm font-medium text-cobalt transition-colors hover:text-cobalt-hover"
                    >
                      Case study <ArrowUpRight className="h-4 w-4" />
                    </button>
                  </DialogTrigger>
                </div>
              </div>
            </article>

            <DialogContent
              data-testid={`project-dialog-${project.id}`}
              className="max-h-[85vh] overflow-y-auto border-border bg-surface text-slate-200 sm:max-w-2xl"
            >
              <DialogHeader>
                <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-slate-500">
                  {project.context} · {project.role}
                </p>
                <DialogTitle className="font-display text-2xl text-slate-50">
                  {project.name}
                </DialogTitle>
                <DialogDescription className="text-slate-400">{project.summary}</DialogDescription>
              </DialogHeader>
              <div className="space-y-6 pt-2 text-sm leading-relaxed">
                <div>
                  <h4 className="font-mono text-xs uppercase tracking-[0.2em] text-cobalt">Problem / purpose</h4>
                  <p className="mt-2 text-slate-300">{project.problem}</p>
                </div>
                <div>
                  <h4 className="font-mono text-xs uppercase tracking-[0.2em] text-cobalt">What I built</h4>
                  <p className="mt-2 text-slate-300">{project.built}</p>
                </div>
                <div>
                  <h4 className="font-mono text-xs uppercase tracking-[0.2em] text-cobalt">Key functionality</h4>
                  <ul className="mt-2 space-y-1.5">
                    {project.keyFunctionality.map((f) => (
                      <li key={f} className="flex items-start gap-2.5 text-slate-300">
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-cobalt" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-mono text-xs uppercase tracking-[0.2em] text-cobalt">What it demonstrates</h4>
                  <p className="mt-2 text-slate-300">{project.demonstrates}</p>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {project.tech.map((t) => (
                    <span key={t} className="rounded-md border border-border px-2 py-1 font-mono text-[11px] text-slate-400">
                      {t}
                    </span>
                  ))}
                </div>
                <div className="flex flex-wrap items-center gap-4 border-t border-border pt-4">
                  <RepoLink project={project} testId={`project-dialog-repo-link-${project.id}`} />
                  {project.demo ? (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      data-testid={`project-dialog-demo-link-${project.id}`}
                      className="inline-flex items-center gap-1.5 text-sm text-slate-400 transition-colors hover:text-cobalt"
                    >
                      <ExternalLink className="h-4 w-4" /> Live demo
                    </a>
                  ) : (
                    <span data-testid={`project-dialog-demo-link-${project.id}`} className="inline-flex items-center gap-1.5 text-sm text-slate-600">
                      <ExternalLink className="h-4 w-4" /> Demo link to be added
                    </span>
                  )}
                  <a
                    href={profile.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-testid={`project-dialog-profile-link-${project.id}`}
                    className="inline-flex items-center gap-1.5 text-sm text-slate-400 transition-colors hover:text-cobalt"
                  >
                    <Github className="h-4 w-4" /> GitHub profile
                  </a>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        </FadeIn>
      ))}
    </div>
  </Section>
);
