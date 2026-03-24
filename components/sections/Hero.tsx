"use client";

import { motion } from "framer-motion";

export default function Hero() {
  const trustItems = [
    "Direct developer communication",
    "Clear scope before work starts",
    "30-day post-launch support",
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen bg-gradient-to-br from-[#0f172a] via-[#111827] to-[#1e293b] text-white flex items-center pt-24 overflow-hidden"
    >
      <div className="absolute w-72 h-72 bg-blue-600 opacity-20 rounded-full blur-3xl top-36 left-16 animate-pulse"></div>
      <div className="absolute w-72 h-72 bg-purple-600 opacity-20 rounded-full blur-3xl bottom-20 right-16 animate-pulse"></div>

      <div className="max-w-6xl mx-auto px-6 relative z-10 grid lg:grid-cols-[1.1fr_0.9fr] gap-12 items-center">
        <div className="text-center lg:text-left">
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-sm font-semibold uppercase tracking-[0.24em] text-sky-300 mb-5"
          >
            Modern Website Design & Web Development
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
          >
            Modern Websites Built for Speed, Trust, and Growth
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-slate-300 text-base sm:text-lg mb-8 max-w-xl mx-auto lg:mx-0"
          >
            We build modern business websites that load fast, look polished,
            and help brands turn visitors into real customers.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1 }}
            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
          >
            <a
              href="#contact"
              className="w-full sm:w-auto px-8 py-3 bg-blue-600 rounded-lg hover:bg-blue-700 transition"
            >
              Request a Project Quote
            </a>
            <a
              href="#process"
              className="w-full sm:w-auto px-8 py-3 border border-blue-500 rounded-lg hover:bg-blue-500 hover:text-white transition"
            >
              See How It Works
            </a>
          </motion.div>
          <div className="mt-6 flex flex-wrap gap-3 justify-center lg:justify-start">
            {trustItems.map((item) => (
              <span
                key={item}
                className="rounded-full border border-slate-700 bg-slate-900/60 px-4 py-2 text-sm text-slate-200"
              >
                {item}
              </span>
            ))}
          </div>
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
              "Mobile-First Design",
              "Secure & Reliable",
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
