"use client";

import { motion } from "framer-motion";

export default function WhyChoose() {
  const features = [
    {
      title: "Performance-First",
      desc: "Every website is built for speed, smooth browsing, and dependable performance from day one.",
      icon: "⚡",
    },
    {
      title: "Modern Development",
      desc: "Clean code, responsive layouts, and current web practices that keep your site polished and maintainable.",
      icon: "🏗️",
    },
    {
      title: "Strategic Partnership",
      desc: "We invest in understanding your business and vision, providing guidance beyond delivery.",
      icon: "🤝",
    },
    {
      title: "Honest Recommendations",
      desc: "We keep claims realistic, recommend only what your business actually needs, and avoid hype-heavy sales language.",
      icon: "🧭",
    },
  ];

  return (
    <section id="why-choose-us" className="py-16 sm:py-24 bg-gray-100 text-gray-900">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl font-bold mb-16"
        >
          Why We're Different
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-6 sm:gap-10">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white p-6 sm:p-8 rounded-xl shadow-lg text-left"
            >
              <div className="text-3xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                {feature.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
