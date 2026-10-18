import { BUSINESS } from "../data";

const STATS = [
  { value: `${new Date().getFullYear() - BUSINESS.established}+`, label: "Years of artistry" },
  { value: BUSINESS.rating, label: "Google rating" },
  { value: BUSINESS.reviews, label: "Happy reviews" },
  { value: "100%", label: "Unisex salon" },
];

export default function Stats() {
  return (
    <section className="border-y border-gold/25 bg-coal">
      <div className="mx-auto grid max-w-7xl grid-cols-2 divide-x divide-gold/15 px-5 md:grid-cols-4 md:px-8">
        {STATS.map((s) => (
          <div key={s.label} className="px-4 py-8 text-center">
            <p className="font-display text-4xl font-bold gold-text md:text-5xl">{s.value}</p>
            <p className="mt-2 text-xs uppercase tracking-[0.25em] text-cream/60">{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
