"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-24 bg-white text-gray-900">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-6">
            About NexaWeb Technologies
          </h2>

          <p className="text-gray-600 mb-6">
            NexaWeb Technologies is a modern web development company
            focused on building professional, high-performance websites
            for growing businesses.
          </p>

          <p className="text-gray-600">
            We combine clean design, fast development and transparent
            pricing to deliver websites that help businesses establish
            a strong online presence without exceeding their budget.
          </p>
        </motion.div>

        {/* Right Visual Card */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-gray-100 p-10 rounded-xl shadow-lg"
        >
          <h3 className="text-2xl font-semibold mb-4">
            Our Mission
          </h3>

          <p className="text-gray-600">
            To empower businesses with affordable, modern and scalable
            web solutions that drive growth and digital credibility.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
