"use client";
import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    await fetch("/api/contact", {
      method: "POST",
      body: JSON.stringify(form),
    });
    alert("Message Sent!");
  };

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-10">
          Get In Touch
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-4 border rounded-lg"
            onChange={(e) =>
              setForm({ ...form, name: e.target.value })
            }
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-4 border rounded-lg"
            onChange={(e) =>
              setForm({ ...form, email: e.target.value })
            }
          />
          <textarea
            placeholder="Your Message"
            rows={5}
            className="w-full p-4 border rounded-lg"
            onChange={(e) =>
              setForm({ ...form, message: e.target.value })
            }
          />
          <button
            type="submit"
            className="px-8 py-3 bg-blue-600 text-white rounded-lg"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
