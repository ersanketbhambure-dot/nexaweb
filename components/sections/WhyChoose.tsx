"use client";

import { motion } from "framer-motion";

export default function WhyChoose() {
  const features = [
    {
      title: "Fast Delivery",
      desc: "Most business websites are delivered within 5–7 working days without compromising quality.",
      icon: "⚡",
    },
    {
      title: "Modern Design",
      desc: "Clean, responsive and conversion-focused designs tailored for today’s digital audience.",
      icon: "🎨",
    },
    {
      title: "Affordable Pricing",
      desc: "Transparent packages designed specifically for businesses with a ₹20k–₹30k budget.",
      icon: "💰",
    },
    {
      title: "Ongoing Support",
      desc: "We provide continuous support and guidance even after your website goes live.",
      icon: "🛠",
    },
  ];

  return (
    <section className="py-24 bg-gray-100 text-gray-900">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl font-bold mb-16"
        >
          Why Choose NexaWeb Technologies
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-10">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-xl shadow-lg text-left"
            >
              <div className="text-3xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600">
                {feature.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
