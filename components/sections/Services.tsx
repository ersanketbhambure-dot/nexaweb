"use client";

import { motion } from "framer-motion";

const services = [
  {
    title: "High-Performance Business Websites",
    desc: "Conversion-optimized sites for local businesses with SEO, speed, and mobile-first design.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" aria-hidden="true">
        <rect x="3" y="5" width="18" height="12" rx="2" stroke="currentColor" strokeWidth="1.8" />
        <path d="M8 19h8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Custom Website Development",
    desc: "Tailored websites built around your brand, goals, and customer journey with clean, maintainable code.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" aria-hidden="true">
        <path d="M8 8L4 12l4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M16 8l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M13.5 5l-3 14" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Performance Optimization",
    desc: "Speed improvements, technical cleanup, and front-end optimization for faster, smoother user experiences.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" aria-hidden="true">
        <path d="M12 3v4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        <path d="M5.64 5.64l2.82 2.82" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        <path d="M3 12h4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        <path d="M17.5 6.5L12 13" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        <path d="M12 21a9 9 0 100-18 9 9 0 000 18z" stroke="currentColor" strokeWidth="1.8" />
      </svg>
    ),
  },
  {
    title: "Website Support & Maintenance",
    desc: "Ongoing updates, security improvements, bug fixes, and dependable support to keep your site in shape.",
    icon: (
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" aria-hidden="true">
        <path d="M14.7 6.3a4 4 0 01-5.4 5.4L4 17v3h3l5.3-5.3a4 4 0 005.4-5.4l-2.1 2.1-2.9-2.9 2-2.2z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="py-16 sm:py-24 bg-white text-gray-900"
    >
      <div className="max-w-7xl mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl font-bold mb-6"
        >
          Our Services
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-gray-600 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto mb-16"
        >
          We design and develop modern websites that balance speed, design,
          usability, and long-term reliability.
        </motion.p>

        <div className="grid md:grid-cols-2 gap-6 sm:gap-10">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="rounded-[2rem] border border-slate-200 bg-gradient-to-b from-white to-slate-50 p-6 sm:p-8 shadow-[0_18px_50px_rgba(15,23,42,0.08)] transition hover:-translate-y-1 hover:shadow-[0_28px_70px_rgba(15,23,42,0.12)]"
            >
              <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-900 text-sky-400 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold mb-4">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
