"use client";
import { useState } from "react";
import { siteConfig } from "@/config/site";

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
    <section id="contact" className="py-16 sm:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-[0.95fr_1.05fr] gap-10 items-start">
        <div className="lg:sticky lg:top-28">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-sky-600 mb-4">
            Contact
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-slate-900">
            Ready to discuss your website?
          </h2>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed mb-8">
            Share your goals, current challenges, and timeline. We will reply
            with the next best step, whether that is a quote, a discovery call,
            or a quick recommendation.
          </p>

          <div className="grid gap-4">
            <a
              href={`mailto:${siteConfig.socials.email}`}
              className="rounded-2xl border border-slate-200 bg-slate-50 p-5 hover:border-sky-300 hover:bg-sky-50 transition"
            >
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500 mb-2">
                Business Email
              </p>
              <p className="text-lg font-semibold text-slate-900">
                {siteConfig.socials.email}
              </p>
            </a>

            <a
              href={siteConfig.socials.whatsapp}
              target="_blank"
              rel="noreferrer"
              className="rounded-2xl border border-slate-200 bg-slate-50 p-5 hover:border-sky-300 hover:bg-sky-50 transition"
            >
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500 mb-2">
                WhatsApp
              </p>
              <p className="text-lg font-semibold text-slate-900">
                {siteConfig.contact.phoneDisplay}
              </p>
            </a>

            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500 mb-2">
                Response Time
              </p>
              <p className="text-lg font-semibold text-slate-900">
                {siteConfig.contact.responseTime}
              </p>
            </div>
          </div>
        </div>

        <div className="rounded-[2rem] border border-slate-200 bg-white p-6 sm:p-8 shadow-[0_24px_80px_rgba(15,23,42,0.08)]">
          <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">
                Your Name
              </label>
              <input
                id="name"
                type="text"
                placeholder="Your Name"
                className="w-full p-4 border border-slate-200 rounded-xl"
                value={form.name}
                required
                onChange={(e) =>
                  setForm({ ...form, name: e.target.value })
                }
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                Your Email
              </label>
              <input
                id="email"
                type="email"
                placeholder="your@email.com"
                className="w-full p-4 border border-slate-200 rounded-xl"
                value={form.email}
                required
                onChange={(e) =>
                  setForm({ ...form, email: e.target.value })
                }
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">
                Project Details
              </label>
              <textarea
                id="message"
                placeholder="Tell us about your business, the kind of website you need, and your timeline."
                rows={6}
                className="w-full p-4 border border-slate-200 rounded-xl"
                value={form.message}
                required
                onChange={(e) =>
                  setForm({ ...form, message: e.target.value })
                }
              />
            </div>
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
              className="w-full sm:w-auto px-8 py-3 bg-blue-600 text-white rounded-xl disabled:opacity-60"
            >
              {status === "loading" ? "Sending..." : "Request Project Quote"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
