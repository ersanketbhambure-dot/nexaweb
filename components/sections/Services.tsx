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
          We design and develop modern websites that balance speed, design,
          usability, and long-term reliability.
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
              title: "Custom Website Development",
              desc: "Tailored websites built around your brand, goals, and customer journey with clean, maintainable code.",
            },
            {
              icon: "⚡",
              title: "Performance Optimization",
              desc: "Speed improvements, technical cleanup, and front-end optimization for faster, smoother user experiences.",
            },
            {
              icon: "🛠",
              title: "Website Support & Maintenance",
              desc: "Ongoing updates, security improvements, bug fixes, and dependable support to keep your site in shape.",
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
