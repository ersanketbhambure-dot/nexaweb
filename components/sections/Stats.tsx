"use client";

import { motion } from "framer-motion";

export default function Stats() {
  const stats = [
    { number: "50+", label: "Projects Delivered" },
    { number: "30", label: "Happy Clients" },
    { number: "100%", label: "Client Satisfaction" },
  ];

  return (
    <section className="py-20 bg-[#0f172a] text-white">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 text-center gap-10">
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-4xl font-bold text-blue-500">
              {stat.number}
            </h3>
            <p className="mt-2 text-gray-300">
              {stat.label}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
