"use client";

import { motion } from "framer-motion";

export default function Commitment() {
  const stats = [
    { number: "5–7 Days", label: "Average Delivery Time" },
    { number: "100%", label: "Mobile Responsive Design" },
    { number: "1:1", label: "Direct Developer Communication" },
    { number: "30 Days", label: "Free Post-Launch Support" },
  ];

  return (
    <section className="py-20 bg-[#0f172a] text-white">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-4 gap-10 text-center">
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold text-blue-500">
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
