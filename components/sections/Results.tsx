"use client";

import { motion } from "framer-motion";

const outcomes = [
  {
    title: "More Qualified Leads",
    description:
      "Clear page structure, stronger messaging, and smarter calls to action help convert visits into enquiries.",
  },
  {
    title: "Stronger First Impression",
    description:
      "A polished, modern website builds credibility faster and makes your business look more established online.",
  },
  {
    title: "Better Search Readiness",
    description:
      "Technical SEO foundations, mobile responsiveness, and clean code make the site easier to discover and index.",
  },
  {
    title: "Faster User Experience",
    description:
      "Performance-focused development keeps your pages light, quick to load, and easier to use on any device.",
  },
];

export default function Results() {
  return (
    <section id="results" className="py-16 sm:py-24 bg-white text-slate-900">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-3xl"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-sky-600 mb-4">
            Outcome Focus
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            What a better website should improve
          </h2>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            We do not rely on inflated claims or fake numbers. Instead, we
            design websites to improve the signals that matter: trust, lead
            quality, search visibility, and user experience.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 sm:gap-8 mt-12">
          {outcomes.map((outcome, index) => (
            <motion.div
              key={outcome.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              viewport={{ once: true }}
              className="rounded-3xl border border-slate-200 bg-slate-50 p-6 sm:p-8 shadow-[0_20px_60px_rgba(15,23,42,0.08)]"
            >
              <h3 className="text-2xl font-semibold mb-3">{outcome.title}</h3>
              <p className="text-slate-600 leading-relaxed">
                {outcome.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
