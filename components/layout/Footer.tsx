import BrandName from "@/components/ui/BrandName";

export default function Footer() {
  return (
    <footer className="bg-black text-white p-6 text-center">
      <p className="text-2xl">
        <span>© 2026 </span>
        <BrandName className="font-medium" />
        <span>. All rights reserved.</span>
      </p>
    </footer>
  );
}
