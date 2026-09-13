import { motion } from "framer-motion";

export const Section = ({ id, eyebrow, title, intro, children, testId, className = "" }) => (
  <section id={id} data-testid={testId} className={`scroll-mt-20 py-20 lg:py-28 ${className}`}>
    <div className="mx-auto w-full max-w-6xl px-6">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <p className="font-mono text-xs uppercase tracking-[0.25em] text-cobalt">{eyebrow}</p>
        <h2 className="mt-3 font-display text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight text-slate-50">
          {title}
        </h2>
        {intro && (
          <p className="mt-4 max-w-2xl text-base text-slate-400 leading-relaxed">{intro}</p>
        )}
      </motion.div>
      <div className="mt-12">{children}</div>
    </div>
  </section>
);

export const FadeIn = ({ children, delay = 0, className = "" }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-60px" }}
    transition={{ duration: 0.55, delay, ease: "easeOut" }}
    className={className}
  >
    {children}
  </motion.div>
);
