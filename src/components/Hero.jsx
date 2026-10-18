import { BUSINESS } from "../data";

export default function Hero() {
  return (
    <section id="top" className="relative flex min-h-screen items-center overflow-hidden bg-ink">
      <img
        src="images/hero-salon.webp"
        alt="Inside MAK Luxury Salon"
        className="absolute inset-0 h-full w-full object-cover opacity-40"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/70 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-ink/40" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-5 pt-28 pb-16 md:px-8">
        <p className="mb-4 text-xs font-medium uppercase tracking-[0.35em] text-goldlight">
          Luxury Unisex Salon · Rohini, Delhi
        </p>
        <h1 className="font-display max-w-3xl text-5xl font-bold leading-tight text-cream md:text-7xl">
          Look stunning,
          <br />
          <span className="gold-text">feel unstoppable.</span>
        </h1>
        <p className="mt-6 max-w-xl text-lg leading-relaxed text-cream/75">
          {BUSINESS.tagline}. Trusted by Rohini for {new Date().getFullYear() - BUSINESS.established}+ years —
          hair, nails, skin and makeup under one roof, next to Rohini West Metro Station.
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-4">
          <a
            href="#booking"
            className="rounded-full bg-gold px-8 py-3.5 text-sm font-semibold uppercase tracking-widest text-ink transition hover:bg-goldlight"
          >
            Book Appointment
          </a>
          <a
            href={BUSINESS.phoneHref}
            className="rounded-full border border-cream/30 px-8 py-3.5 text-sm font-semibold uppercase tracking-widest text-cream transition hover:border-goldlight hover:text-goldlight"
          >
            {BUSINESS.phone}
          </a>
        </div>

        <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-3 text-cream/70">
          <span className="flex items-center gap-2">
            <span className="text-gold">★★★★★</span>
            <strong className="text-cream">{BUSINESS.rating}</strong> · {BUSINESS.reviews} Google reviews
          </span>
          <span className="hidden h-4 w-px bg-cream/25 sm:block" />
          <span>Open daily · 10:30 AM – 9:00 PM</span>
        </div>
      </div>
    </section>
  );
}
