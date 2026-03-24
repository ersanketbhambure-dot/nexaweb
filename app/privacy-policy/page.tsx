import type { Metadata } from "next";
import Link from "next/link";
import BrandName from "@/components/ui/BrandName";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Privacy Policy for Nexa WebCraft covering how website enquiry information is collected, used, and protected.",
};

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white px-6 py-16 sm:py-20">
      <div className="max-w-4xl mx-auto text-center sm:text-left">
        <Link href="/" className="inline-block text-sky-400 hover:text-sky-300 transition">
          Back to Home
        </Link>

        <div className="mt-8 mb-10">
          <BrandName className="text-3xl sm:text-4xl font-extrabold tracking-wide leading-none" />
          <h1 className="mt-6 text-4xl sm:text-5xl font-bold">Privacy Policy</h1>
          <p className="mt-4 text-slate-300 leading-relaxed max-w-3xl mx-auto sm:mx-0">
            This Privacy Policy explains how Nexa WebCraft collects, uses, and
            protects information shared through this website.
          </p>
        </div>

        <div className="space-y-8 text-slate-200 leading-relaxed">
          <section>
            <h2 className="text-2xl font-semibold mb-3">Information We Collect</h2>
            <p>
              When you contact us through the website, we may collect details
              such as your name, email address, phone number, and project
              message. We may also collect basic technical information such as
              browser type, device type, and general website usage data.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">How We Use Information</h2>
            <p>
              We use the information you share to respond to enquiries,
              communicate about projects, improve our website, and maintain the
              security and performance of our services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">Information Sharing</h2>
            <p>
              We do not sell your personal information. Information may be
              shared only with trusted service providers when needed to operate
              the website, process communications, or comply with legal
              obligations.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">Data Security</h2>
            <p>
              We take reasonable steps to protect submitted information, but no
              website or digital transmission method can be guaranteed as fully
              secure.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">Your Choices</h2>
            <p>
              You may contact us to request updates or deletion of personal
              information you have shared with us, subject to any legal or
              operational requirements.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">Contact</h2>
            <p>
              For privacy-related questions, please email{" "}
              <a
                href="mailto:hello@nexawebcraft.com"
                className="text-sky-400 hover:text-sky-300 transition"
              >
                hello@nexawebcraft.com
              </a>
              .
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
