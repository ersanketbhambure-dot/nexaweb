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
            Engineering-Driven Web & SaaS Solutions
          </h2>

          <p className="text-gray-600 mb-6">
            NexaWeb Technologies engineers high-performance digital platforms —
            from conversion-focused business websites to scalable SaaS
            applications built for long-term growth.
          </p>

          <p className="text-gray-600 mb-6">
            We collaborate with ambitious local businesses and product teams to
            deliver production-ready systems grounded in clean architecture,
            speed, and reliability.
          </p>

          <p className="text-gray-600">
            Our approach is performance-first — ensuring every product is built
            to scale, secure by design, and ready for real-world growth.
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
          <h3 className="text-2xl font-semibold mb-4">Our Mission</h3>
          <p className="text-gray-600 mb-6">
            To engineer fast, reliable, and scalable digital products that
            empower businesses to grow with clarity and confidence.
          </p>
          <h3 className="text-2xl font-semibold mb-4">Our Vision</h3>
          <p className="text-gray-600">
            To set a new standard in performance-driven web and SaaS
            engineering.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
