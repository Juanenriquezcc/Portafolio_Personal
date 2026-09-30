import Image from "next/image";

interface IsotipoProps {
  size?: number;
  className?: string;
}

// Official JJ monogram (text-free crop of the brand logo, transparent background).
export default function Isotipo({ size = 36, className = "" }: IsotipoProps) {
  return <Image src="/brand/isotipo.png" alt="" aria-hidden="true" width={size} height={size} className={className} />;
}
