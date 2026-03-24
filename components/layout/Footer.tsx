import Link from "next/link";
import BrandName from "@/components/ui/BrandName";
import { siteConfig } from "@/config/site";

export default function Footer() {
  return (
    <footer className="bg-black text-white px-6 py-10">
      <div className="max-w-6xl mx-auto flex flex-col gap-6 text-center md:flex-row md:items-center md:justify-between md:text-left">
        <div>
          <p className="text-2xl">
            <span>© 2026 </span>
            <BrandName className="font-medium" />
            <span>. All rights reserved.</span>
          </p>
          <p className="mt-3 text-sm text-slate-400">
            Modern website design and web development for growing businesses.
          </p>
        </div>

        <div className="flex flex-col items-center gap-2 text-sm text-slate-300 md:items-end md:text-right">
          <a href={`mailto:${siteConfig.socials.email}`} className="hover:text-white transition">
            {siteConfig.socials.email}
          </a>
          <a href={siteConfig.socials.whatsapp} target="_blank" rel="noreferrer" className="hover:text-white transition">
            WhatsApp: {siteConfig.contact.phoneDisplay}
          </a>
          <div className="flex flex-col items-center gap-2 pt-2 md:items-end">
            <Link href="/privacy-policy" className="hover:text-white transition">
              Privacy Policy
            </Link>
            <Link href="/terms-of-use" className="hover:text-white transition">
              Terms of Use
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
