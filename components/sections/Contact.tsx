"use client";
import { useState } from "react";

type ContactForm = {
  name: string;
  email: string;
  message: string;
};

export default function Contact() {
  const [form, setForm] = useState<ContactForm>({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      if (!response.ok) {
        const payload = (await response.json()) as {
          errors?: string[];
        };
        setStatus("error");
        setErrorMessage(
          payload.errors?.[0] ??
            "Something went wrong. Please try again."
        );
        return;
      }

      setStatus("success");
      setForm({ name: "", email: "", message: "" });
    } catch (error) {
      setStatus("error");
      setErrorMessage("Unable to send your message right now.");
    }
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
            value={form.name}
            required
            onChange={(e) =>
              setForm({ ...form, name: e.target.value })
            }
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-4 border rounded-lg"
            value={form.email}
            required
            onChange={(e) =>
              setForm({ ...form, email: e.target.value })
            }
          />
          <textarea
            placeholder="Your Message"
            rows={5}
            className="w-full p-4 border rounded-lg"
            value={form.message}
            required
            onChange={(e) =>
              setForm({ ...form, message: e.target.value })
            }
          />
          {status === "success" && (
            <p className="text-sm text-green-600">
              Thanks! Your message has been sent.
            </p>
          )}
          {status === "error" && errorMessage && (
            <p className="text-sm text-red-600">{errorMessage}</p>
          )}
          <button
            type="submit"
            disabled={status === "loading"}
            className="px-8 py-3 bg-blue-600 text-white rounded-lg disabled:opacity-60"
          >
            {status === "loading" ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
    </section>
  );
}
