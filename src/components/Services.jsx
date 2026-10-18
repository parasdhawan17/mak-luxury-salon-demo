import { SERVICES, BUSINESS } from "../data";

export default function Services() {
  return (
    <section id="services" className="bg-cream py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <p className="text-center text-xs font-semibold uppercase tracking-[0.35em] text-gold">What we do</p>
        <h2 className="font-display mt-3 text-center text-4xl font-bold text-ink md:text-5xl">
          Signature services
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-ink/60">
          From precision haircuts to complete bridal transformations — every service
          begins with a consultation, so you leave with exactly the look you imagined.
        </p>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((s) => (
            <article
              key={s.title}
              className="group overflow-hidden rounded-2xl bg-white shadow-sm transition duration-300 hover:-translate-y-1.5 hover:shadow-xl"
            >
              <div className="relative h-52 overflow-hidden">
                <img
                  src={s.image}
                  alt={s.title}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/70 to-transparent" />
                <h3 className="font-display absolute bottom-4 left-5 text-2xl font-bold text-cream">{s.title}</h3>
              </div>
              <ul className="space-y-2.5 p-6">
                {s.items.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-ink/75">
                    <span className="mt-0.5 text-gold">✦</span>
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <div className="mt-10 text-center">
          <a
            href={BUSINESS.whatsapp}
            target="_blank"
            rel="noreferrer"
            className="inline-block rounded-full bg-ink px-8 py-3.5 text-sm font-semibold uppercase tracking-widest text-cream transition hover:bg-coal"
          >
            Ask about a service on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
