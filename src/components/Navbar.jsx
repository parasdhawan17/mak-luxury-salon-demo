import { useEffect, useState } from "react";
import { BUSINESS } from "../data";

const LINKS = [
  { label: "Services", href: "#services" },
  { label: "Pricing", href: "#pricing" },
  { label: "Gallery", href: "#gallery" },
  { label: "Reviews", href: "#reviews" },
  { label: "FAQ", href: "#faq" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-ink/95 shadow-lg shadow-black/20 backdrop-blur" : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-8">
        <a href="#top" className="flex items-center gap-3">
          <span className="font-display text-2xl font-bold tracking-wide text-cream">
            MAK <span className="gold-text">Luxury Salon</span>
          </span>
        </a>
        <div className="hidden items-center gap-8 md:flex">
          {LINKS.map((l) => (
            <a key={l.href} href={l.href} className="text-sm uppercase tracking-widest text-cream/80 transition hover:text-goldlight">
              {l.label}
            </a>
          ))}
          <a
            href={BUSINESS.whatsapp}
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-gold px-6 py-2.5 text-sm font-semibold uppercase tracking-widest text-ink transition hover:bg-goldlight"
          >
            Book Now
          </a>
        </div>
        <button
          className="text-cream md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
        </button>
      </nav>
      {open && (
        <div className="bg-ink/95 px-6 pb-6 backdrop-blur md:hidden">
          {LINKS.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="block py-3 text-sm uppercase tracking-widest text-cream/80">
              {l.label}
            </a>
          ))}
          <a
            href={BUSINESS.whatsapp}
            target="_blank"
            rel="noreferrer"
            className="mt-2 inline-block rounded-full bg-gold px-6 py-2.5 text-sm font-semibold uppercase tracking-widest text-ink"
          >
            Book Now
          </a>
        </div>
      )}
    </header>
  );
}
