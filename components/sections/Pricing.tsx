"use client";

import { motion } from "framer-motion";

export default function Pricing() {
  const plans = [
    {
      name: "Basic",
      price: "₹20,000",
      features: [
        "5 Pages Website",
        "Mobile Responsive",
        "Contact Form",
        "WhatsApp Integration",
        "1 Month Support",
      ],
    },
    {
      name: "Standard",
      price: "₹25,000",
      features: [
        "7 Pages Website",
        "SEO Optimization",
        "Speed Optimization",
        "Gallery Section",
        "2 Months Support",
      ],
      highlight: true,
    },
    {
      name: "Premium",
      price: "₹30,000",
      features: [
        "Everything in Standard",
        "Custom Animations",
        "Blog Setup",
        "Priority Support",
        "3 Months Support",
      ],
    },
  ];

  return (
    <section id="pricing" className="py-24 bg-gray-100 text-gray-900">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-16">
          Pricing Plans
        </h2>

        <div className="grid md:grid-cols-3 gap-10">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`p-8 rounded-xl shadow-lg ${
                plan.highlight
                  ? "bg-blue-600 text-white scale-105"
                  : "bg-white"
              }`}
            >
              <h3 className="text-2xl font-bold mb-4">
                {plan.name}
              </h3>

              <p className="text-3xl font-bold mb-6">
                {plan.price}
              </p>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i}>✔ {feature}</li>
                ))}
              </ul>

              <button
                className={`px-6 py-3 rounded-lg ${
                  plan.highlight
                    ? "bg-white text-blue-600"
                    : "bg-blue-600 text-white"
                }`}
              >
                Get Started
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
