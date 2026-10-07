import Image from "next/image";
import Link from "next/link";

export default function Logo({ dark = false }: { dark?: boolean }) {
  return (
    <Link
      href="/"
      aria-label="Jay Law Limited — home"
      className="inline-flex shrink-0 items-center transition-opacity duration-300 hover:opacity-80"
    >
      <Image
        src={dark ? "/logo-white.png" : "/logo.png"}
        alt="Jay Law Limited"
        width={168}
        height={30}
        loading="eager"
        className="h-10 w-auto md:h-12"
      />
    </Link>
  );
}
