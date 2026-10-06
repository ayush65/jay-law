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
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

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
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-ivory/90 shadow-[0_1px_0_rgba(28,27,23,0.09)] backdrop-blur-md"
            : "bg-transparent"
        }`}
      >
        <div className="container-default flex h-16 items-center justify-between lg:h-[4.5rem]">
          <Logo />
          <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary">
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
          <div className="hidden items-center gap-7 lg:flex">
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
            className="p-2 lg:hidden"
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
        className={`fixed inset-0 z-[60] transition-opacity duration-500 lg:hidden ${
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
