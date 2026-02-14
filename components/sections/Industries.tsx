"use client";

import { motion } from "framer-motion";

const clients = [
  {
    title: "Growing Local Businesses",
    description:
      "We design modern websites that build trust, drive leads, and help local brands grow faster.",
    highlights: ["Lead-focused design", "SEO-ready pages", "Fast delivery"],
  },
  {
    title: "SaaS Startups & Product Teams",
    description:
      "We help SaaS teams launch marketing sites, product pages, and onboarding experiences that convert.",
    highlights: ["Conversion copy", "Product-led UX", "Scalable structure"],
  },
];

export default function Industries() {
  return (
    <section id="industries" className="py-24 bg-slate-950 text-white">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4">
            Modern Websites For Growing Businesses
          </h2>
          <p className="text-slate-300 max-w-3xl mx-auto">
            We combine clean design, strong messaging, and reliable engineering
            to help brands stand out and convert visitors into customers.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <h3 className="text-2xl font-semibold">
            Who We Work With
          </h3>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10">
          {clients.map((client, index) => (
            <motion.div
              key={client.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-slate-900 p-8 rounded-2xl border border-slate-800"
            >
              <h4 className="text-xl font-semibold mb-3">
                {client.title}
              </h4>
              <p className="text-slate-400 text-sm mb-6">
                {client.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {client.highlights.map((item) => (
                  <span
                    key={item}
                    className="px-3 py-1 rounded-full text-xs bg-slate-800 text-slate-200 border border-slate-700"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
