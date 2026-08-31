import Image from "next/image";
import Link from "next/link";

type BrandMarkProps = {
  compact?: boolean;
  inverted?: boolean;
};

export function BrandMark({ compact = false, inverted = false }: BrandMarkProps) {
  return (
    <Link
      href="/"
      className="flex items-center gap-3 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold"
      aria-label="AlphaCare home"
    >
      <Image
        src="/brand/alphacare-logo.png"
        alt=""
        width={compact ? 54 : 72}
        height={compact ? 54 : 72}
        priority
        className="h-auto w-12 object-contain sm:w-14"
      />
      <span className="flex flex-col leading-none">
        <span
          className={`type-brand-name ${
            inverted ? "text-ivory" : "text-navy"
          }`}
        >
          AlphaCare
        </span>
        <span
          className={`type-brand-subline mt-2 ${
            inverted ? "text-ivory/70" : "text-grayblue"
          }`}
        >
          Concierge Care Management
        </span>
      </span>
    </Link>
  );
}
