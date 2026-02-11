"use client";

import { motion } from "framer-motion";

export default function Services() {
  return (
    <section
      id="services"
      className="py-24 bg-white text-gray-900"
    >
      <div className="max-w-7xl mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl font-bold mb-6"
        >
          Our Services
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-gray-600 max-w-2xl mx-auto mb-16"
        >
          We create modern, high-performance websites designed
          to convert visitors into customers.
        </motion.p>

        <div className="grid md:grid-cols-3 gap-10">
          {[
            {
              icon: "💻",
              title: "Business Website Development",
              desc: "Custom-built responsive websites for clinics, small businesses, and service providers.",
            },
            {
              icon: "⚡",
              title: "Performance Optimization",
              desc: "Fast-loading, SEO-friendly websites built for high performance and better Google ranking.",
            },
            {
              icon: "🛠",
              title: "Website Maintenance & Support",
              desc: "Ongoing updates, security monitoring, and technical support to keep your website running smoothly.",
            },
          ].map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="p-8 rounded-xl shadow-lg hover:shadow-2xl transition"
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
