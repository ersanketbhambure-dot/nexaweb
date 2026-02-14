"use client";

import { motion } from "framer-motion";

const businessBenefits = [
  "Fast, mobile-first websites that feel premium",
  "SEO-ready pages that drive local traffic",
  "Reliable hosting with minimal upkeep",
  "Clear messaging that converts visitors",
];

const businessStack = [
  "Next.js",
  "React",
  "TypeScript",
  "Tailwind",
  "SEO Optimization",
  "Lead Capture Forms",
  "CMS Integration",
  "Performance Optimization",
  "AWS/Vercel",
];

const saasBenefits = [
  "Scalable architecture built for growth",
  "Secure APIs and robust data models",
  "Performance tuned for speed and uptime",
  "Engineering practices that ship reliably",
];

const saasStack = [
  "GoLang",
  "PostgreSQL",
  "REST APIs",
  "Next.js",
  "TypeScript",
  "AWS/Vercel",
  "Docker/Kubernetes",
  "CI/CD Pipelines",
  "AI Integration",
  "Monitoring & Logging",
  "Security Best Practices",
  "Performance Optimization",
  "Scalable Infrastructure",

];

export default function Technology() {
  return (
    <section id="technology" className="py-24 bg-slate-950 text-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4">
            Technology Stack
          </h2>
          <p className="text-slate-300 max-w-3xl mx-auto">
            Premium delivery with performance, scalability, and reliability at
            the core.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-slate-900 p-8 rounded-2xl border border-slate-800"
          >
            <p className="text-sm uppercase tracking-[0.25em] text-slate-400">
              For Business Websites
            </p>
            <h3 className="text-2xl font-semibold mt-3 mb-4">
              Modern, fast, and easy to manage
            </h3>
            <ul className="text-slate-300 text-sm space-y-2 mb-6">
              {businessBenefits.map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-2">
              {businessStack.map((item) => (
                <span
                  key={item}
                  className="px-3 py-1 rounded-full text-xs bg-slate-800 text-slate-200 border border-slate-700"
                >
                  {item}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="bg-slate-900 p-8 rounded-2xl border border-slate-800"
          >
            <p className="text-sm uppercase tracking-[0.25em] text-slate-400">
              For SaaS & Scalable Products
            </p>
            <h3 className="text-2xl font-semibold mt-3 mb-4">
              Built to scale with engineering rigor
            </h3>
            <ul className="text-slate-300 text-sm space-y-2 mb-6">
              {saasBenefits.map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-2">
              {saasStack.map((item) => (
                <span
                  key={item}
                  className="px-3 py-1 rounded-full text-xs bg-slate-800 text-slate-200 border border-slate-700"
                >
                  {item}
                </span>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center text-slate-300 mt-12"
        >
          Built for speed, engineered for trust.
        </motion.p>
      </div>
    </section>
  );
}
