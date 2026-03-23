type BrandNameProps = {
  className?: string;
  nexaClassName?: string;
  webCraftClassName?: string;
};

export default function BrandName({
  className = "",
  nexaClassName = "text-white",
  webCraftClassName = "bg-gradient-to-br from-[#38bdf8] to-[#a855f7] bg-clip-text text-transparent",
}: BrandNameProps) {
  return (
    <span className={className}>
      <span className={nexaClassName}>Nexa</span>
      <span aria-hidden="true"> </span>
      <span className={webCraftClassName}>WebCraft</span>
    </span>
  );
}
