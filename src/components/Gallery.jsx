const SHOTS = [
  { src: "images/service-hair-color.webp", label: "Balayage & colour", span: "md:col-span-2 md:row-span-2" },
  { src: "images/service-nails.webp", label: "Nail artistry" },
  { src: "images/service-bridal.webp", label: "Bridal makeup" },
  { src: "images/hero-salon.webp", label: "The salon floor" },
];

export default function Gallery() {
  return (
    <section id="gallery" className="bg-ink py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <p className="text-center text-xs font-semibold uppercase tracking-[0.35em] text-goldlight">Portfolio</p>
        <h2 className="font-display mt-3 text-center text-4xl font-bold text-cream md:text-5xl">
          Recent transformations
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-cream/60">
          A glimpse of the chairs, the colour bar and the nail studio — this is what
          a visit to MAK looks like.
        </p>

        <div className="mt-12 grid auto-rows-[220px] grid-cols-1 gap-4 sm:grid-cols-2 md:auto-rows-[240px] md:grid-cols-4">
          {SHOTS.map((s) => (
            <figure
              key={s.src}
              className={`group relative overflow-hidden rounded-2xl ${s.span || ""}`}
            >
              <img
                src={s.src}
                alt={s.label}
                className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-transparent to-transparent opacity-0 transition duration-300 group-hover:opacity-100" />
              <figcaption className="absolute bottom-4 left-5 translate-y-2 text-sm font-medium uppercase tracking-widest text-cream opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                {s.label}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
