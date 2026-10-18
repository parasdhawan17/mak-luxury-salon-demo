import { PACKAGES, BUSINESS } from "../data";

export default function Pricing() {
  return (
    <section id="pricing" className="bg-sand py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <p className="text-center text-xs font-semibold uppercase tracking-[0.35em] text-gold">Packages</p>
        <h2 className="font-display mt-3 text-center text-4xl font-bold text-ink md:text-5xl">
          Honest pricing, no surprises
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-ink/60">
          Pick a ritual that fits the occasion. Final quote confirmed after a free
          consultation — what we quote is what you pay.
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {PACKAGES.map((p) => (
            <article
              key={p.name}
              className={`relative rounded-3xl p-8 transition duration-300 hover:-translate-y-1.5 ${
                p.featured
                  ? "bg-ink text-cream shadow-2xl shadow-ink/30 ring-2 ring-gold"
                  : "bg-white shadow-sm hover:shadow-xl"
              }`}
            >
              {p.featured && (
                <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-gold px-4 py-1 text-xs font-bold uppercase tracking-widest text-ink">
                  Most loved
                </span>
              )}
              <h3 className={`font-display text-2xl font-bold ${p.featured ? "text-cream" : "text-ink"}`}>{p.name}</h3>
              <p className={`mt-1 text-sm ${p.featured ? "text-cream/60" : "text-ink/55"}`}>{p.blurb}</p>
              <p className="mt-5">
                <span className={`text-xs uppercase tracking-widest ${p.featured ? "text-cream/50" : "text-ink/45"}`}>{p.unit}</span>
                <br />
                <span className={`font-display text-5xl font-bold ${p.featured ? "gold-text" : "text-ink"}`}>{p.price}</span>
              </p>
              <ul className="mt-6 space-y-3">
                {p.features.map((f) => (
                  <li key={f} className={`flex items-start gap-2.5 text-sm ${p.featured ? "text-cream/80" : "text-ink/75"}`}>
                    <span className="mt-0.5 text-gold">✓</span>
                    {f}
                  </li>
                ))}
              </ul>
              <a
                href="#booking"
                className={`mt-8 block rounded-full py-3 text-center text-sm font-semibold uppercase tracking-widest transition ${
                  p.featured
                    ? "bg-gold text-ink hover:bg-goldlight"
                    : "border border-ink/20 text-ink hover:border-gold hover:text-gold"
                }`}
              >
                Choose {p.name}
              </a>
            </article>
          ))}
        </div>

        <p className="mt-8 text-center text-xs text-ink/45">
          Indicative starting prices ·{" "}
          <a href={BUSINESS.phoneHref} className="underline underline-offset-2 hover:text-gold">
            call {BUSINESS.phone}
          </a>{" "}
          for the full rate card.
        </p>
      </div>
    </section>
  );
}
