import { BadgeCheck, ExternalLink, BookOpen } from "lucide-react";
import { Section, FadeIn } from "./Section";
import { certifications } from "../../constants/portfolioData";

const CertCard = ({ cert, pro }) => (
  <div
    data-testid={`cert-card-${cert.name.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}
    className="flex h-full flex-col rounded-xl border border-border bg-surface/60 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-cobalt/50"
  >
    <div className="flex items-start justify-between gap-3">
      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-cobalt-muted text-cobalt">
        {pro ? <BadgeCheck className="h-5 w-5" /> : <BookOpen className="h-5 w-5" />}
      </div>
      <span className="rounded-full border border-border px-2.5 py-1 font-mono text-[11px] text-slate-400">
        {cert.issued}
        {cert.expires ? ` — exp. ${cert.expires}` : ""}
      </span>
    </div>
    <h3 className="mt-4 font-display text-base font-semibold leading-snug text-slate-50">
      {cert.name}
    </h3>
    <p className="mt-1 text-sm text-slate-400">{cert.issuer}</p>
    {cert.detail && <p className="mt-2 text-xs leading-relaxed text-slate-500">{cert.detail}</p>}
    {cert.credentialId && (
      <p className="mt-3 font-mono text-[11px] text-slate-500">
        Credential ID: {cert.credentialId}
        {cert.certificationNumber ? ` · Cert. no. ${cert.certificationNumber}` : ""}
      </p>
    )}
    <div className="mt-3 flex flex-wrap gap-1.5">
      {cert.skills.map((s) => (
        <span key={s} className="rounded-md bg-slate-800/60 px-2 py-1 text-[11px] text-slate-400">
          {s}
        </span>
      ))}
    </div>
    <div className="mt-auto pt-4">
      {cert.verifyUrl ? (
        <a
          href={cert.verifyUrl}
          target="_blank"
          rel="noopener noreferrer"
          data-testid="cert-verify-link"
          className="inline-flex items-center gap-1.5 text-sm font-medium text-cobalt hover:text-cobalt-hover"
        >
          Verify credential <ExternalLink className="h-3.5 w-3.5" />
        </a>
      ) : (
        <span className="text-xs text-slate-600">Verification link to be added</span>
      )}
    </div>
  </div>
);

export const Certifications = () => (
  <Section
    id="certifications"
    testId="certifications-section"
    eyebrow="Certifications"
    title="Certified and continuously learning"
    className="bg-surface/30"
  >
    <div className="space-y-12">
      {certifications.map((group, gi) => (
        <div key={group.group}>
          <FadeIn>
            <h3 className="font-display text-xl font-medium text-slate-50">{group.group}</h3>
            {group.note && <p className="mt-2 max-w-2xl text-sm text-slate-500">{group.note}</p>}
          </FadeIn>
          <div className={`mt-6 grid gap-5 sm:grid-cols-2 ${group.items.length > 1 ? "lg:grid-cols-4" : "lg:grid-cols-2"}`}>
            {group.items.map((cert, i) => (
              <FadeIn key={cert.name} delay={i * 0.06}>
                <CertCard cert={cert} pro={gi === 0} />
              </FadeIn>
            ))}
          </div>
        </div>
      ))}
    </div>
  </Section>
);
