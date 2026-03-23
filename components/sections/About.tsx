"use client";

import { motion } from "framer-motion";
import BrandName from "@/components/ui/BrandName";

export default function About() {
  return (
    <section id="about" className="py-16 sm:py-24 bg-white text-gray-900">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 sm:gap-16 items-center">
        
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Modern Website Design & Web Development
          </h2>

          <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-6">
            <BrandName nexaClassName="text-gray-600" />
            {" "}creates modern, high-performance websites that help
            businesses build trust, generate leads, and stand out online.
          </p>

          <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-6">
            We work with growing businesses to deliver polished web experiences
            grounded in speed, usability, responsive design, and reliable
            development practices.
          </p>

          <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
            Our approach is performance-first, making every website easy to
            navigate, quick to load, secure by design, and ready to support
            real business goals.
          </p>
        </motion.div>

        {/* Right Visual Card */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-gray-100 p-6 sm:p-10 rounded-xl shadow-lg"
        >
          <h3 className="text-2xl font-semibold mb-4">Our Mission</h3>
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-6">
            To build fast, modern, and reliable websites that help businesses
            present themselves with clarity and confidence.
          </p>
          <h3 className="text-2xl font-semibold mb-4">Our Vision</h3>
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
            To set a higher standard for modern website design and dependable
            web development.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
