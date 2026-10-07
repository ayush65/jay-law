import Link from "next/link";
import Logo from "@/components/Logo";
import { contactDetails, footerLinks } from "@/lib/data";
import { contactEmail, contactPhone, siteName, socialLinks } from "@/lib/site";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-coal text-ivory/75">
      <div className="container-default py-16 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.5fr_1fr_1fr_1.2fr]">
          <div>
            <Logo dark />
            <p className="mt-6 max-w-xs text-sm leading-relaxed text-ivory/55">
              A leading New Zealand practice of Barristers and Solicitors in Property,
              Immigration, Family and Commercial Law. Established in 2022 by
              Jayanthi Vallipuram,
              serving clients across both islands.
            </p>
            <p className="mt-8 font-serif text-xl text-ivory">
              Barristers and Solicitors
            </p>
          </div>

          {footerLinks.map((col) => (
            <nav key={col.heading} aria-label={col.heading}>
              <h3 className="text-[0.7rem] font-bold tracking-[0.26em] text-ivory/40 uppercase">
                {col.heading}
              </h3>
              <ul className="mt-6 space-y-3.5">
                {col.links.map((link) => (
                  <li key={link.href + link.label}>
                    <Link
                      href={link.href}
                      className="text-[0.92rem] text-ivory/70 transition-colors hover:text-ivory"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}

          <div>
            <h3 className="text-[0.7rem] font-bold tracking-[0.26em] text-ivory/40 uppercase">
              Contact
            </h3>
            <ul className="mt-6 space-y-4 text-[0.92rem] text-ivory/70">
              <li>
                <strong className="block text-ivory">North Island</strong>
                {contactDetails.north.name}, {contactDetails.north.role}
                <br />1 Webster Place, Whanganui
              </li>
              <li>
                <strong className="block text-ivory">South Island</strong>
                {contactDetails.south.name}, {contactDetails.south.role}
                <br />213 Tuam Street
              </li>
              <li>
                <a
                  href={`tel:${contactPhone}`}
                  className="transition-colors hover:text-ivory"
                >
                  {contactPhone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${contactEmail}`}
                  className="break-all transition-colors hover:text-ivory"
                >
                  {contactEmail}
                </a>
              </li>
              <li>Mon – Fri · 9am – 5pm</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-ivory/10">
        <div className="container-default flex flex-col gap-4 py-7 text-[0.8rem] text-ivory/45 sm:flex-row sm:items-center sm:justify-between">
          {socialLinks.facebook && (
            <p className="mb-6 flex gap-5 text-[0.9rem]">
              <a
                href={socialLinks.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="text-ivory/70 transition-colors hover:text-ivory"
              >
                Facebook
              </a>
              {socialLinks.instagram && (
                <a
                  href={socialLinks.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-ivory/70 transition-colors hover:text-ivory"
                >
                  Instagram
                </a>
              )}
              {socialLinks.linkedin && (
                <a
                  href={socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-ivory/70 transition-colors hover:text-ivory"
                >
                  LinkedIn
                </a>
              )}
            </p>
          )}
          <p>
            © {year} {siteName}. Information on this website is general in
            nature and does not constitute legal advice.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="transition-colors hover:text-ivory">
              Privacy Policy
            </Link>
            <Link href="/terms" className="transition-colors hover:text-ivory">
              Terms of Engagement
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
