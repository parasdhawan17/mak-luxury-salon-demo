import { BUSINESS } from "../data";

export default function Footer() {
  return (
    <footer className="bg-ink pt-16 pb-8 text-cream">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-2">
            <p className="font-display text-3xl font-bold">
              MAK <span className="gold-text">Luxury Salon</span>
            </p>
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-cream/60">
              {BUSINESS.tagline}. Serving Rohini since {BUSINESS.established} —
              walk in for a consultation, walk out transformed.
            </p>
            <div className="mt-5 flex gap-3">
              <a href={BUSINESS.whatsapp} target="_blank" rel="noreferrer" aria-label="WhatsApp"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-cream/20 text-cream/70 transition hover:border-gold hover:text-gold">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2zm5.2 14.2c-.2.6-1.3 1.2-1.8 1.2-.5.1-1 .2-3.4-.7-2.9-1.2-4.7-4.1-4.9-4.3-.1-.2-1.1-1.5-1.1-2.9s.7-2 1-2.3c.2-.3.5-.3.7-.3h.5c.2 0 .4 0 .6.5s.8 1.9.8 2c.1.1.1.3 0 .5-.3.6-.6.8-.4 1.1.7 1.2 1.6 2 2.8 2.6.3.2.5.1.7-.1l.8-.9c.2-.3.4-.2.7-.1l2 1c.3.1.5.2.6.4 0 .1 0 .7-.3 1.3z"/></svg>
              </a>
              <a href={BUSINESS.phoneHref} aria-label="Call"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-cream/20 text-cream/70 transition hover:border-gold hover:text-gold">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.13.96.36 1.9.7 2.8a2 2 0 0 1-.45 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.45c.9.34 1.84.57 2.8.7A2 2 0 0 1 22 16.9z"/></svg>
              </a>
              <a href={BUSINESS.mapUrl} target="_blank" rel="noreferrer" aria-label="Map"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-cream/20 text-cream/70 transition hover:border-gold hover:text-gold">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z"/><circle cx="12" cy="10" r="3"/></svg>
              </a>
            </div>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-goldlight">Visit us</p>
            <p className="mt-4 text-sm leading-relaxed text-cream/60">{BUSINESS.address}</p>
            <a href={BUSINESS.mapUrl} target="_blank" rel="noreferrer" className="mt-2 inline-block text-sm text-goldlight underline underline-offset-4">
              Get directions
            </a>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-goldlight">Hours & contact</p>
            <p className="mt-4 text-sm text-cream/60">{BUSINESS.hours}</p>
            <a href={BUSINESS.phoneHref} className="mt-2 block text-sm font-semibold text-cream hover:text-goldlight">
              {BUSINESS.phone}
            </a>
            <div className="mt-4 flex flex-col gap-2 text-sm">
              <a href="#services" className="text-cream/60 hover:text-goldlight">Services</a>
              <a href="#pricing" className="text-cream/60 hover:text-goldlight">Pricing</a>
              <a href="#booking" className="text-cream/60 hover:text-goldlight">Book appointment</a>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-cream/10 pt-6 text-xs text-cream/40 md:flex-row">
          <p>© {new Date().getFullYear()} MAK Luxury Salon, Rohini. All rights reserved.</p>
          <p>{BUSINESS.rating} ★ · {BUSINESS.reviews} Google reviews</p>
        </div>
      </div>
    </footer>
  );
}
