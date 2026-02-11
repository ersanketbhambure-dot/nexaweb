"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-[#0f172a] via-[#111827] to-[#1e293b] text-white flex items-center justify-center pt-20 overflow-hidden">

      {/* Gradient Background Blur */}
      <div className="absolute w-72 h-72 bg-blue-600 opacity-20 rounded-full blur-3xl top-40 left-20 animate-pulse"></div>
      <div className="absolute w-72 h-72 bg-purple-600 opacity-20 rounded-full blur-3xl bottom-20 right-20 animate-pulse"></div>

      <div className="text-center max-w-4xl px-6 relative z-10">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-5xl md:text-6xl font-bold mb-6 leading-tight"
        >
          Modern Websites
          <span className="text-blue-500"> For Growing Businesses</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-gray-400 text-lg mb-8"
        >
          NexaWeb Technologies builds professional, high-performance
          websites for businesses ready to scale their online presence.
        </motion.p>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="flex justify-center gap-4"
        >
          <button className="px-8 py-3 bg-blue-600 rounded-lg hover:bg-blue-700 transition">
            Get Free Consultation
          </button>

          <button className="px-8 py-3 border border-blue-500 rounded-lg hover:bg-blue-600 transition">
            View Pricing
          </button>
        </motion.div>
      </div>
    </section>
  );
}
