"use client";

import { motion } from "framer-motion";

export default function Commitment() {
  const stats = [
    {
      number: "5-7 Days",
      label: "Typical turnaround for a focused website build",
    },
    {
      number: "1:1",
      label: "Direct communication with the person building the site",
    },
    {
      number: "30 Days",
      label: "Post-launch support included after go-live",
    },
    {
      number: "SEO-Ready",
      label: "Core structure built with search visibility in mind",
    },
  ];

  return (
    <section id="proof" className="py-16 sm:py-24 bg-[#0f172a] text-white">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-sky-300 mb-4">
            Trust Signals
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Built for trust, not inflated promises
          </h2>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            No fake testimonials, no empty "No.1" claims, and no vague process.
            We focus on clear scope, direct communication, and practical
            website delivery that helps businesses look credible online.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6 sm:gap-8 text-center">
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            viewport={{ once: true }}
            className="rounded-3xl border border-slate-800 bg-slate-900/70 px-6 py-8 shadow-[0_20px_60px_rgba(2,6,23,0.35)]"
          >
            <h3 className="text-3xl font-bold text-blue-500">
              {stat.number}
            </h3>
            <p className="mt-3 text-slate-300 leading-relaxed">
              {stat.label}
            </p>
          </motion.div>
        ))}
        </div>
      </div>
    </section>
  );
}
