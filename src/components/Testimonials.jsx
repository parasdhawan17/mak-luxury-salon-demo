import { TESTIMONIALS } from "../data";

export default function Testimonials() {
  return (
    <section id="reviews" className="bg-cream py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <p className="text-center text-xs font-semibold uppercase tracking-[0.35em] text-gold">Reviews</p>
        <h2 className="font-display mt-3 text-center text-4xl font-bold text-ink md:text-5xl">
          Loved across Rohini
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-ink/60">
          <strong className="text-ink">4.7 stars</strong> from 1,590+ Google reviews — here's what clients say.
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {TESTIMONIALS.map((t) => (
            <blockquote
              key={t.name}
              className="flex flex-col rounded-2xl bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="text-gold">★★★★★</div>
              <p className="mt-4 flex-1 leading-relaxed text-ink/75">“{t.text}”</p>
              <footer className="mt-6 border-t border-ink/10 pt-4">
                <p className="font-semibold text-ink">{t.name}</p>
                <p className="text-xs uppercase tracking-widest text-gold">{t.service}</p>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
