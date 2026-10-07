"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, Phone, X } from "lucide-react";
import Logo from "@/components/Logo";
import { contactPhone } from "@/lib/site";

const links = [
  { label: "About", href: "/about" },
  { label: "Our People", href: "/our-people" },
  { label: "Practice Areas", href: "/practice-areas" },
  { label: "Our Approach", href: "/#approach" },
  { label: "FAQs", href: "/faqs" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 border-b border-ink/[0.08] bg-ivory/92 backdrop-blur-md">
        <div className="flex h-16 w-full items-center justify-between px-5 sm:px-8 lg:h-[4.5rem] xl:px-12">
          <Logo />
          <nav
            aria-label="Primary"
            className="hidden items-center gap-10 xl:flex"
          >
            {links.map((l) => (
              <Link
                key={l.href + l.label}
                href={l.href}
                className="nav-link text-[0.82rem] font-semibold tracking-wide text-ink/75 transition-colors hover:text-forest"
              >
                {l.label}
              </Link>
            ))}
          </nav>
          <div className="hidden items-center gap-8 xl:flex">
            <a
              href={`tel:${contactPhone}`}
              className="inline-flex items-center gap-2 text-[0.82rem] font-semibold tracking-wide text-ink/70 transition-colors hover:text-forest"
            >
              <Phone size={14} />
              {contactPhone}
            </a>
            <Link
              href="/contact"
              className="bg-forest px-6 py-3 text-[0.8rem] font-semibold tracking-wide text-ivory transition-colors duration-300 hover:bg-forest-dark"
            >
              Book a Consultation
            </Link>
          </div>
          <button
            type="button"
            className="p-2 xl:hidden"
            onClick={() => setOpen(true)}
            aria-label="Open menu"
            aria-expanded={open}
          >
            <Menu size={26} />
          </button>
        </div>
      </header>

      {/* Full-screen mobile menu */}
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Site menu"
        className={`fixed inset-0 z-[60] transition-opacity duration-500 xl:hidden ${
          open ? "visible opacity-100" : "invisible opacity-0"
        }`}
      >
        <div className="absolute inset-0 bg-ivory" />
        <div className="relative flex h-full flex-col">
          <div className="container-default flex h-16 items-center justify-between">
            <Logo />
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close menu"
              className="p-2"
            >
              <X size={26} />
            </button>
          </div>
          <nav
            className="container-default flex flex-1 flex-col justify-center gap-1"
            aria-label="Mobile"
          >
            {links.map((l, i) => (
              <Link
                key={l.href + l.label}
                href={l.href}
                onClick={() => setOpen(false)}
                className={`font-serif text-[2.1rem] leading-tight text-ink transition-colors hover:text-forest ${
                  open ? "anim-rise" : ""
                }`}
                style={open ? { animationDelay: `${0.06 * i + 0.08}s` } : undefined}
              >
                {l.label}
              </Link>
            ))}
          </nav>
          <div className="container-default space-y-5 pb-12">
            <a
              href={`tel:${contactPhone}`}
              className="inline-flex items-center gap-2.5 text-lg font-semibold text-ink"
            >
              <Phone size={17} />
              {contactPhone}
            </a>
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="btn btn-primary block w-full"
            >
              Book a Consultation
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
