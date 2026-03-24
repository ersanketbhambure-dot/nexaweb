import type { Metadata } from "next";
import Link from "next/link";
import BrandName from "@/components/ui/BrandName";

export const metadata: Metadata = {
  title: "Terms of Use",
  description:
    "Terms of Use for Nexa WebCraft governing use of this website, its content, and enquiry submissions.",
};

export default function TermsOfUsePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white px-6 py-16 sm:py-20">
      <div className="max-w-4xl mx-auto text-center sm:text-left">
        <Link href="/" className="inline-block text-sky-400 hover:text-sky-300 transition">
          Back to Home
        </Link>

        <div className="mt-8 mb-10">
          <BrandName className="text-3xl sm:text-4xl font-extrabold tracking-wide leading-none" />
          <h1 className="mt-6 text-4xl sm:text-5xl font-bold">Terms of Use</h1>
          <p className="mt-4 text-slate-300 leading-relaxed max-w-3xl mx-auto sm:mx-0">
            These Terms of Use govern how visitors may access and use the Nexa
            WebCraft website.
          </p>
        </div>

        <div className="space-y-8 text-slate-200 leading-relaxed">
          <section>
            <h2 className="text-2xl font-semibold mb-3">Website Use</h2>
            <p>
              You agree to use this website only for lawful purposes and in a
              way that does not harm the website, its content, or other users.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">Content Ownership</h2>
            <p>
              Unless otherwise stated, the text, design, branding, and website
              content are owned by Nexa WebCraft and may not be copied,
              reproduced, or redistributed without permission.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">No Guarantees</h2>
            <p>
              Information on this website is provided for general information
              only. We do not guarantee uninterrupted website availability or
              that all content will always be complete, accurate, or current.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">Third-Party Links</h2>
            <p>
              This website may include links to third-party services such as
              email or WhatsApp. We are not responsible for the content,
              policies, or availability of those external services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">Limitation of Liability</h2>
            <p>
              To the maximum extent permitted by law, Nexa WebCraft is not
              liable for damages arising from use of this website or reliance on
              its content.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">Changes to These Terms</h2>
            <p>
              We may update these Terms of Use from time to time. Continued use
              of the website after updates means you accept the revised terms.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
