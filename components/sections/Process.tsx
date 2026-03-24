"use client";

import { motion } from "framer-motion";
import { siteConfig } from "@/config/site";

const steps = [
  {
    number: "01",
    title: "Discovery Call",
    description:
      "We understand your business, goals, audience, and what the website needs to achieve.",
  },
  {
    number: "02",
    title: "Scope, Quote, and Timeline",
    description:
      "You receive a clear plan with deliverables, pricing direction, and a realistic timeline before work starts.",
  },
  {
    number: "03",
    title: "Design, Build, and Launch",
    description:
      "We design and develop the site, test it carefully, and support you through launch and handoff.",
  },
];

export default function Process() {
  return (
    <section id="process" className="py-16 sm:py-24 bg-slate-950 text-white">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between"
        >
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-sky-400 mb-4">
              Clear CTA Funnel
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              A simple path from interest to launch
            </h2>
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              The next step should always feel obvious. We keep the process
              clear so prospects know how to start, what happens next, and how
              the project moves forward.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href={siteConfig.socials.whatsapp}
              target="_blank"
              rel="noreferrer"
              className="px-6 py-3 rounded-xl bg-emerald-500 text-slate-950 font-semibold hover:bg-emerald-400 transition"
            >
              Chat on WhatsApp
            </a>
            <a
              href="#contact"
              className="px-6 py-3 rounded-xl bg-sky-500 text-slate-950 font-semibold hover:bg-sky-400 transition"
            >
              Request a Project Quote
            </a>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 sm:gap-8 mt-12">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              viewport={{ once: true }}
              className="rounded-3xl border border-slate-800 bg-slate-900/80 p-6 sm:p-8"
            >
              <p className="text-sm font-semibold text-sky-400 mb-4">
                {step.number}
              </p>
              <h3 className="text-2xl font-semibold mb-3">{step.title}</h3>
              <p className="text-slate-300 leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
