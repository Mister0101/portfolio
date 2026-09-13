import { useState } from "react";
import { toast } from "sonner";
import { Linkedin, Github, Mail, Send, MapPin } from "lucide-react";
import { Section, FadeIn } from "./Section";
import { profile } from "../../constants/portfolioData";

const channels = [
  { icon: Linkedin, label: "LinkedIn", value: "linkedin.com/in/ilyadaniliuk", href: profile.linkedin, testId: "contact-linkedin-card" },
  { icon: Github, label: "GitHub", value: "github.com/Mister0101", href: profile.github, testId: "contact-github-card" },
  { icon: Mail, label: "Email", value: profile.email, href: `mailto:${profile.email}`, testId: "contact-email-card" },
];

export const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const onSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio enquiry from ${form.name}`);
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`);
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
    toast.success("Opening your email client — your message is pre-filled and ready to send.");
  };

  const field =
    "w-full rounded-md border border-border bg-obsidian px-4 py-3 text-sm text-slate-200 placeholder:text-slate-600 focus:border-cobalt focus:outline-none";

  return (
    <Section
      id="contact"
      testId="contact-section"
      eyebrow="Contact"
      title="Let's talk"
      intro="Open to business development, technology sales, account management and business-facing cloud roles in Auckland or remote."
      className="bg-surface/30"
    >
      <div className="grid gap-10 lg:grid-cols-2">
        <FadeIn className="space-y-4">
          {channels.map(({ icon: Icon, label, value, href, testId }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel="noopener noreferrer"
              data-testid={testId}
              className="flex items-center gap-4 rounded-xl border border-border bg-surface/60 p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-cobalt/50"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-cobalt-muted text-cobalt">
                <Icon className="h-5 w-5" />
              </span>
              <span>
                <span className="block text-xs font-medium uppercase tracking-wider text-slate-500">{label}</span>
                <span className="mt-0.5 block text-sm text-slate-200">{value}</span>
              </span>
            </a>
          ))}
          <p className="flex items-center gap-2 pt-2 text-sm text-slate-500">
            <MapPin className="h-4 w-4 text-cobalt" /> {profile.location}
          </p>
        </FadeIn>

        <FadeIn delay={0.1}>
          <form onSubmit={onSubmit} data-testid="contact-form" className="space-y-4 rounded-xl border border-border bg-surface/60 p-6">
            <div className="grid gap-4 sm:grid-cols-2">
              <input
                required
                data-testid="contact-form-name-input"
                aria-label="Your name"
                placeholder="Your name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className={field}
              />
              <input
                required
                type="email"
                data-testid="contact-form-email-input"
                aria-label="Your email"
                placeholder="Your email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className={field}
              />
            </div>
            <textarea
              required
              rows={5}
              data-testid="contact-form-message-input"
              aria-label="Your message"
              placeholder="How can I help your team?"
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className={field}
            />
            <button
              type="submit"
              data-testid="contact-form-submit-button"
              className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-cobalt px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-cobalt-hover"
            >
              <Send className="h-4 w-4" /> Send message
            </button>
            <p className="text-center text-xs text-slate-600">
              Opens your email client — no accounts, no data stored.
            </p>
          </form>
        </FadeIn>
      </div>
    </Section>
  );
};
