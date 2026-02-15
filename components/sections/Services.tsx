"use client";

import { motion } from "framer-motion";

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
          We engineer high-performance digital products that deliver growth
          and reliability.
        </motion.p>

        <div className="grid md:grid-cols-2 gap-6 sm:gap-10">
          {[
            {
              icon: "💻",
              title: "High-Performance Business Websites",
              desc: "Conversion-optimized sites for local businesses with SEO, speed, and mobile-first design.",
            },
            {
              icon: "🚀",
              title: "SaaS & Product Development",
              desc: "Scalable applications built with clean architecture, security, and production-grade reliability.",
            },
            {
              icon: "⚡",
              title: "Performance Optimization & Scaling",
              desc: "Speed audits, database optimization, and infrastructure tuning for high-traffic platforms.",
            },
            {
              icon: "🛠",
              title: "Production Engineering & Support",
              desc: "Ongoing monitoring, security hardening, and strategic guidance for long-term growth.",
            },
          ].map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="p-6 sm:p-8 rounded-xl shadow-lg hover:shadow-2xl transition"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-4">
                {service.title}
              </h3>
              <p className="text-gray-600">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
