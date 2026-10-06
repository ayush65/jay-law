import Link from "next/link";
import { Phone } from "lucide-react";
import { contactPhone } from "@/lib/site";

export default function MobileActionBar() {
  return (
    <div
      className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-2 border-t border-ink/10 bg-ivory/95 backdrop-blur lg:hidden"
      style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
    >
      <a
        href={`tel:${contactPhone}`}
        className="flex items-center justify-center gap-2 py-4 text-[0.8rem] font-bold tracking-[0.14em] text-ink uppercase"
      >
        <Phone size={16} />
        Call
      </a>
      <Link
        href="/contact"
        className="flex items-center justify-center bg-forest py-4 text-[0.8rem] font-bold tracking-[0.14em] text-ivory uppercase"
      >
        Book Consultation
      </Link>
    </div>
  );
}
