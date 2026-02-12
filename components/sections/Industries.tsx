"use client";

import { motion } from "framer-motion";

const industries = [
  {
    title: "Clinics & Doctors",
    description:
      "Professional websites designed to build trust, attract patients, and improve your online visibility.",
    icon: "🏥",
  },
  {
    title: "Salons & Beauty Studios",
    description:
      "Showcase your services, portfolio, and pricing with modern, image-driven websites.",
    icon: "💇",
  },
  {
    title: "Gyms & Fitness Centers",
    description:
      "Display memberships, training programs, and packages with conversion-focused layouts.",
    icon: "🏋️",
  },
  {
    title: "Coaching Classes",
    description:
      "Highlight courses, admissions, and testimonials with structured, easy-to-navigate pages.",
    icon: "🎓",
  },
  {
    title: "Real Estate Consultants",
    description:
      "Promote listings, services, and contact inquiries with clean and professional design.",
    icon: "🏢",
  },
  {
    title: "Local Service Businesses",
    description:
      "Generate more leads with SEO-optimized service pages and strong call-to-action sections.",
    icon: "🔧",
  },
];

export default function Industries() {
  return (
    <section id="industries" className="py-20 bg-slate-950 text-white">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="text-4xl font-bold mb-4">
            Who We Work With
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            We build modern, high-performance websites tailored for growing
            local businesses that want to establish a strong digital presence.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {industries.map((industry, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-slate-900 p-6 rounded-xl border border-slate-800 hover:border-blue-500 transition-all"
            >
              <div className="text-3xl mb-4">{industry.icon}</div>
              <h3 className="text-xl font-semibold mb-2">
                {industry.title}
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                {industry.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
