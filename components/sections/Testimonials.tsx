"use client";

import { motion } from "framer-motion";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Dr. Sharma",
      text: "The website increased our patient inquiries significantly. Highly professional service!",
    },
    {
      name: "Rajesh Mehta",
      text: "Clean design, fast delivery and great support. Highly recommend!",
    },
    {
      name: "Anita Desai",
      text: "Our business visibility improved within weeks after launching the website.",
    },
  ];

  return (
    <section className="py-24 bg-white text-gray-900">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-16">
          What Our Clients Say
        </h2>

        <div className="grid md:grid-cols-3 gap-10">
          {testimonials.map((t, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
              className="p-8 rounded-xl shadow-lg"
            >
              <p className="mb-6 italic">"{t.text}"</p>
              <h4 className="font-semibold">{t.name}</h4>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
