"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen bg-gradient-to-br from-[#0f172a] via-[#111827] to-[#1e293b] text-white flex items-center pt-24 overflow-hidden"
    >
      <div className="absolute w-72 h-72 bg-blue-600 opacity-20 rounded-full blur-3xl top-36 left-16 animate-pulse"></div>
      <div className="absolute w-72 h-72 bg-purple-600 opacity-20 rounded-full blur-3xl bottom-20 right-16 animate-pulse"></div>

      <div className="max-w-6xl mx-auto px-6 relative z-10 grid lg:grid-cols-[1.1fr_0.9fr] gap-12 items-center">
        <div className="text-center lg:text-left">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
          >
            High-Performance Web & SaaS, Built to Scale
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-slate-300 text-lg mb-8"
          >
            From local businesses to SaaS startups, we deliver fast, scalable
            web products with a performance-first foundation.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1 }}
            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
          >
            <a
              href="#contact"
              className="px-8 py-3 bg-blue-600 rounded-lg hover:bg-blue-700 transition"
            >
              Book a Strategy Call
            </a>
            <a
              href="#technology"
              className="px-8 py-3 border border-blue-500 rounded-lg hover:bg-blue-500 hover:text-white transition"
            >
              View Capabilities
            </a>
          </motion.div>
          <p className="text-sm text-slate-400 mt-4">
            Launch in weeks, not months.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-slate-900/70 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-2xl"
        >
          <div className="grid gap-4">
            {[
              "<2s Load Time",
              "Scalable Architecture",
              "Secure & Production Ready",
              "SEO Optimized",
            ].map((item) => (
              <div
                key={item}
                className="flex items-center gap-3 rounded-2xl bg-slate-900 border border-slate-800 px-4 py-3"
              >
                <span className="text-lg">⚡</span>
                <span className="text-sm text-slate-200">{item}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
